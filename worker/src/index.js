// tasks.sh notification worker
//
// Endpoints (called by the app):
//   POST /subscribe    { deviceId, subscription }  -> store push subscription
//   POST /unsubscribe  { deviceId }                 -> remove subscription + data
//   POST /sync         { deviceId, routines }        -> store this device's routine schedule
//
// Cron (runs every minute, see wrangler.toml):
//   For every subscribed device, checks whether any routine's start time
//   matches the current minute in IST, and if so sends a real push
//   notification via the Web Push protocol (VAPID).
//
// Storage layout in KV (binding: TASKSH_KV):
//   sub:{deviceId}       -> JSON PushSubscription
//   routines:{deviceId}  -> JSON [{ id, time: "HH:MM", label }]
//   fired:{deviceId}:{routineId}:{YYYY-MM-DD}  -> "1"  (dedupe marker, auto-expires)

import webpush from "web-push";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

// IST is UTC+5:30, no DST — safe to hardcode the offset.
function istNowParts() {
  const now = new Date();
  const istMs = now.getTime() + (5 * 60 + 30) * 60 * 1000;
  const ist = new Date(istMs);
  const hh = String(ist.getUTCHours()).padStart(2, "0");
  const mm = String(ist.getUTCMinutes()).padStart(2, "0");
  const dateStr = `${ist.getUTCFullYear()}-${String(ist.getUTCMonth() + 1).padStart(2, "0")}-${String(ist.getUTCDate()).padStart(2, "0")}`;
  return { hhmm: `${hh}:${mm}`, dateStr };
}

async function handleSubscribe(request, env) {
  const { deviceId, subscription } = await request.json();
  if (!deviceId || !subscription) return json({ error: "missing deviceId or subscription" }, 400);
  await env.TASKSH_KV.put(`sub:${deviceId}`, JSON.stringify(subscription));
  return json({ ok: true });
}

async function handleUnsubscribe(request, env) {
  const { deviceId } = await request.json();
  if (!deviceId) return json({ error: "missing deviceId" }, 400);
  await env.TASKSH_KV.delete(`sub:${deviceId}`);
  await env.TASKSH_KV.delete(`routines:${deviceId}`);
  return json({ ok: true });
}

async function handleSync(request, env) {
  const { deviceId, routines } = await request.json();
  if (!deviceId || !Array.isArray(routines)) return json({ error: "missing deviceId or routines" }, 400);
  await env.TASKSH_KV.put(`routines:${deviceId}`, JSON.stringify(routines));
  return json({ ok: true });
}

async function runCheck(env) {
  webpush.setVapidDetails(
    env.VAPID_CONTACT || "mailto:admin@example.com",
    env.VAPID_PUBLIC_KEY,
    env.VAPID_PRIVATE_KEY
  );

  const { hhmm, dateStr } = istNowParts();
  console.log(`[check] IST now = ${hhmm} on ${dateStr}`);

  const subList = await env.TASKSH_KV.list({ prefix: "sub:" });
  console.log(`[check] found ${subList.keys.length} subscribed device(s)`);

  for (const key of subList.keys) {
    const deviceId = key.name.slice("sub:".length);
    const [subRaw, routinesRaw] = await Promise.all([
      env.TASKSH_KV.get(`sub:${deviceId}`),
      env.TASKSH_KV.get(`routines:${deviceId}`),
    ]);
    if (!subRaw || !routinesRaw) {
      console.log(`[check] device ${deviceId}: missing sub or routines, skipping`);
      continue;
    }

    const subscription = JSON.parse(subRaw);
    const routines = JSON.parse(routinesRaw);
    console.log(`[check] device ${deviceId}: ${routines.length} routine(s) synced -> ${JSON.stringify(routines.map((r) => r.time))}`);

    const due = routines.filter((r) => r.time === hhmm);
    if (due.length === 0) continue;
    console.log(`[check] device ${deviceId}: ${due.length} routine(s) due right now: ${JSON.stringify(due.map((r) => r.label))}`);

    for (const routine of due) {
      const firedKey = `fired:${deviceId}:${routine.id}:${dateStr}`;
      const alreadyFired = await env.TASKSH_KV.get(firedKey);
      if (alreadyFired) {
        console.log(`[check] device ${deviceId}: "${routine.label}" already fired today, skipping`);
        continue;
      }

      const payload = JSON.stringify({
        title: "tasks.sh",
        body: `${routine.label} is starting now`,
        tag: `routine-${routine.id}`,
        url: "./",
      });

      try {
        // urgency:high asks the push service to bypass Android's Doze
        // batching, which otherwise defers delivery until the next
        // maintenance window (i.e. reminders arrive minutes late, or not
        // until you wake the phone). TTL caps how long the push service
        // will retry -- a routine reminder is worthless 5 minutes later.
        await webpush.sendNotification(subscription, payload, {
          urgency: "high",
          TTL: 300,
        });
        console.log(`[check] device ${deviceId}: SENT push for "${routine.label}"`);
      } catch (err) {
        console.log(`[check] device ${deviceId}: SEND FAILED for "${routine.label}" - ${err.statusCode || ""} ${err.message || err}`);
        if (err.statusCode === 404 || err.statusCode === 410) {
          await env.TASKSH_KV.delete(`sub:${deviceId}`);
          await env.TASKSH_KV.delete(`routines:${deviceId}`);
          break;
        }
      }

      // dedupe marker, auto-expires after 2 days so KV doesn't grow forever
      await env.TASKSH_KV.put(firedKey, "1", { expirationTtl: 172800 });
    }
  }
}

// ---------------------------------------------------------------------------
// AI assistant
//
// The app posts a snapshot of its own data plus a natural-language request.
// We ask Gemini for a list of ACTIONS (never free-form text that the app then
// has to parse loosely), validate every one of them against a strict schema
// here, and return only the survivors. The app then previews them as a diff
// and the user explicitly applies them.
//
// Nothing is ever written server-side. The worker is stateless for this
// endpoint -- it does not store the snapshot, and no data touches KV.
// ---------------------------------------------------------------------------

const AI_ENDPOINT = (model, key) =>
  `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${key}`;
const AI_LIST_ENDPOINT = (key) =>
  `https://generativelanguage.googleapis.com/v1beta/models?key=${key}&pageSize=200`;

// Google retires model IDs on a rolling basis (2.0-flash died June 2026,
// 2.5-flash-lite was slated for mid/late 2026...), so hardcoding one ID
// guarantees a 404 eventually. Instead we ask the key which models it can
// actually call and pick the best match by preference order. Cheap "-latest"
// aliases first, then concrete generations newest-first.
const MODEL_PREFERENCES = [
  "gemini-flash-lite-latest",
  "gemini-flash-latest",
  "gemini-3.5-flash",
  "gemini-3-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
];

async function listUsableModels(key) {
  const res = await fetch(AI_LIST_ENDPOINT(key));
  if (!res.ok) {
    const detail = await res.text();
    const err = new Error(detail.slice(0, 300));
    err.status = res.status;
    err.detail = detail;
    throw err;
  }
  const data = await res.json();
  // keep only models that can actually do generateContent
  return (data.models || [])
    .filter((m) => (m.supportedGenerationMethods || []).includes("generateContent"))
    .map((m) => m.name); // e.g. "models/gemini-flash-latest"
}

// Picks the best available model for this key. Cached in KV for a day so we
// don't pay a ListModels round-trip on every single request.
async function resolveModel(key, env) {
  const cacheKey = `aimodel:${key.slice(-8)}`;
  try {
    const cached = await env.TASKSH_KV.get(cacheKey);
    if (cached) return cached;
  } catch {}

  const available = await listUsableModels(key);
  const bare = (n) => n.replace(/^models\//, "");

  let chosen = null;
  for (const want of MODEL_PREFERENCES) {
    const hit = available.find((n) => bare(n) === want);
    if (hit) { chosen = hit; break; }
  }
  // nothing from the preference list -- fall back to any non-preview flash,
  // then literally anything that can generate
  if (!chosen) {
    chosen = available.find((n) => /flash/.test(n) && !/preview|exp|thinking|image|tts/.test(n))
          || available.find((n) => !/preview|exp|embedding|image|tts|aqa/.test(n))
          || available[0];
  }
  if (!chosen) throw new Error("This key has no usable text models.");

  console.log(`[ai] resolved model: ${chosen} (from ${available.length} available)`);
  try { await env.TASKSH_KV.put(cacheKey, chosen, { expirationTtl: 86400 }); } catch {}
  return chosen;
}

const VALID_AREAS = ["work", "fitness", "health", "self"];
const HHMM = /^([01]\d|2[0-3]):([0-5]\d)$/;

const SYSTEM_PROMPT = `You are the assistant inside "tasks.sh", a personal productivity PWA.
You help the user manage four things: ROUTINES (daily recurring time blocks),
VAULT HABITS (weekly-goal habits), QUEST HABITS (good/bad habits worth XP), and
REWARDS (things bought with XP).

You reply with ONLY a JSON object, no markdown fences, no commentary:
{
  "reply": "one or two short sentences, lowercase, terse, terminal-flavoured",
  "actions": [ ...zero or more action objects... ]
}

Allowed actions -- use EXACTLY these shapes:

{"op":"add_routine","time":"HH:MM","label":"string","duration":minutes,"alternatives":["optional"]}
{"op":"edit_routine","id":number,"time":"HH:MM","label":"string","duration":minutes}
{"op":"delete_routine","id":number}
{"op":"add_vault_habit","label":"string","weeklyGoal":1-7,"icon":"single glyph or emoji"}
{"op":"edit_vault_habit","id":number,"label":"string","weeklyGoal":1-7}
{"op":"delete_vault_habit","id":number}
{"op":"add_good_habit","label":"string","area":"work|fitness|health|self","xp":number}
{"op":"add_bad_habit","label":"string","area":"work|fitness|health|self","xp":number}
{"op":"delete_good_habit","id":number}
{"op":"delete_bad_habit","id":number}
{"op":"add_reward","label":"string","cost":number}
{"op":"delete_reward","id":number}

RULES:
- Times are 24-hour "HH:MM". The user is in IST. Interpret "morning" as 06:00-09:00,
  "evening" as 18:00-21:00 unless they say otherwise.
- On edit/delete you MUST use an id that exists in the snapshot. Never invent ids.
- Only include the fields you are actually changing on an edit.
- XP guide: trivial habit 5-10, normal 10-25, demanding 30-50. Rewards 50-300.
- If the user only asks a question ("what am I neglecting?", "how am I doing?"),
  return an EMPTY actions array and put the whole answer in "reply".
- Never delete something unless the user clearly asked to remove it. When in
  doubt, propose an edit instead of a delete.
- Prefer fewer, higher-quality actions over many trivial ones.
- Keep "reply" under 240 characters.`;

function buildSnapshot(data) {
  // Trimmed to only what the model needs to reason -- history arrays can be
  // hundreds of date strings and would blow up the token count for no gain.
  const summarise = (h) => (Array.isArray(h) ? h.length : 0);
  return {
    routines: (data.routines || []).map((r) => ({
      id: r.id, time: r.time, label: r.label, duration: r.duration,
      alternatives: r.alternatives || [], daysCompleted: summarise(r.history),
    })),
    vaultHabits: (data.vaultHabits || []).map((h) => ({
      id: h.id, label: h.label, weeklyGoal: h.weeklyGoal, icon: h.icon,
      daysCompleted: summarise(h.history),
    })),
    goodHabits: (data.goodHabits || []).map((h) => ({
      id: h.id, label: h.label, area: h.area, xp: h.xp, timesLogged: summarise(h.history),
    })),
    badHabits: (data.badHabits || []).map((h) => ({
      id: h.id, label: h.label, area: h.area, xp: h.xp, timesLogged: summarise(h.history),
    })),
    rewards: (data.rewards || []).map((r) => ({
      id: r.id, label: r.label, cost: r.cost, timesClaimed: summarise(r.claimed),
    })),
    totalXP: data.totalXP ?? null,
  };
}

// Every action the model emits is re-validated here. Anything malformed, or
// referencing an id that isn't in the snapshot, is dropped silently rather
// than trusted -- the model is treated as untrusted input, always.
function sanitiseActions(raw, snap) {
  if (!Array.isArray(raw)) return [];
  const ids = {
    routine: new Set(snap.routines.map((r) => r.id)),
    vault: new Set(snap.vaultHabits.map((h) => h.id)),
    good: new Set(snap.goodHabits.map((h) => h.id)),
    bad: new Set(snap.badHabits.map((h) => h.id)),
    reward: new Set(snap.rewards.map((r) => r.id)),
  };

  const str = (v, max = 80) =>
    typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null;
  const int = (v, lo, hi) => {
    const n = Math.round(Number(v));
    return Number.isFinite(n) && n >= lo && n <= hi ? n : null;
  };

  const out = [];
  for (const a of raw.slice(0, 25)) {
    if (!a || typeof a.op !== "string") continue;
    const op = a.op;

    if (op === "add_routine") {
      const label = str(a.label, 60);
      if (!label || !HHMM.test(a.time || "")) continue;
      const duration = int(a.duration, 5, 1440) ?? 60;
      const alts = Array.isArray(a.alternatives)
        ? a.alternatives.map((x) => str(x, 60)).filter(Boolean).slice(0, 4)
        : [];
      out.push({ op, time: a.time, label, duration, alternatives: alts });

    } else if (op === "edit_routine") {
      if (!ids.routine.has(a.id)) continue;
      const patch = { op, id: a.id };
      if (a.time !== undefined) { if (!HHMM.test(a.time)) continue; patch.time = a.time; }
      if (a.label !== undefined) { const l = str(a.label, 60); if (!l) continue; patch.label = l; }
      if (a.duration !== undefined) { const d = int(a.duration, 5, 1440); if (d === null) continue; patch.duration = d; }
      if (Object.keys(patch).length <= 2) continue;   // nothing actually changed
      out.push(patch);

    } else if (op === "delete_routine") {
      if (ids.routine.has(a.id)) out.push({ op, id: a.id });

    } else if (op === "add_vault_habit") {
      const label = str(a.label, 60);
      const goal = int(a.weeklyGoal, 1, 7);
      if (!label || goal === null) continue;
      out.push({ op, label, weeklyGoal: goal, icon: str(a.icon, 4) || "◆" });

    } else if (op === "edit_vault_habit") {
      if (!ids.vault.has(a.id)) continue;
      const patch = { op, id: a.id };
      if (a.label !== undefined) { const l = str(a.label, 60); if (!l) continue; patch.label = l; }
      if (a.weeklyGoal !== undefined) { const g = int(a.weeklyGoal, 1, 7); if (g === null) continue; patch.weeklyGoal = g; }
      if (Object.keys(patch).length <= 2) continue;
      out.push(patch);

    } else if (op === "delete_vault_habit") {
      if (ids.vault.has(a.id)) out.push({ op, id: a.id });

    } else if (op === "add_good_habit" || op === "add_bad_habit") {
      const label = str(a.label, 60);
      const xp = int(a.xp, 1, 200);
      if (!label || xp === null) continue;
      const area = VALID_AREAS.includes(a.area) ? a.area : "self";
      out.push({ op, label, area, xp });

    } else if (op === "delete_good_habit") {
      if (ids.good.has(a.id)) out.push({ op, id: a.id });

    } else if (op === "delete_bad_habit") {
      if (ids.bad.has(a.id)) out.push({ op, id: a.id });

    } else if (op === "add_reward") {
      const label = str(a.label, 60);
      const cost = int(a.cost, 1, 100000);
      if (!label || cost === null) continue;
      out.push({ op, label, cost });

    } else if (op === "delete_reward") {
      if (ids.reward.has(a.id)) out.push({ op, id: a.id });
    }
  }
  return out;
}

async function handleAI(request, env) {
  const body = await request.json();

  // The key can come from the client (entered in the app's AI tab and kept in
  // that device's localStorage) or from a worker secret. Client wins, so a
  // single deployed worker can serve several people using their own quota
  // without the operator holding anyone's key.
  const apiKey =
    (typeof body.apiKey === "string" && body.apiKey.trim()) || env.GEMINI_API_KEY || "";
  if (!apiKey) {
    return json({ error: "no_key", message: "No API key. Add one in the AI tab." }, 401);
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim().slice(0, 1000) : "";
  if (!prompt) return json({ error: "empty prompt" }, 400);

  const snap = buildSnapshot(body.data || {});

  const payload = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [{
      role: "user",
      parts: [{
        text: `Current data:\n${JSON.stringify(snap)}\n\nUser request: ${prompt}`,
      }],
    }],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 2048,
      responseMimeType: "application/json",
    },
  };

  let model;
  try {
    model = await resolveModel(apiKey, env);
  } catch (err) {
    if (err.status === 400 && String(err.detail || "").includes("API_KEY_INVALID")) {
      return json({ error: "bad_key", message: "That API key was rejected by Google." }, 401);
    }
    if (err.status === 403) {
      return json({ error: "bad_key", message: "That API key isn't authorised for the Gemini API." }, 401);
    }
    console.log(`[ai] model resolution failed: ${err.message || err}`);
    return json({ error: "Couldn't work out which AI model to use." }, 502);
  }

  const call = (m) =>
    fetch(AI_ENDPOINT(m, apiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

  let res;
  try {
    res = await call(model);
    // A cached model ID can go stale when Google retires it mid-cycle. Clear
    // the cache, re-resolve once, and retry before surfacing an error.
    if (res.status === 404) {
      console.log(`[ai] ${model} returned 404 — re-resolving`);
      try { await env.TASKSH_KV.delete(`aimodel:${apiKey.slice(-8)}`); } catch {}
      model = await resolveModel(apiKey, env);
      res = await call(model);
    }
  } catch (err) {
    console.log(`[ai] network error: ${err.message || err}`);
    return json({ error: "Couldn't reach the AI service." }, 502);
  }

  if (!res.ok) {
    const detail = await res.text();
    console.log(`[ai] upstream ${res.status} on ${model}: ${detail.slice(0, 300)}`);
    // 400 with API_KEY_INVALID, or 403, means the key itself is the problem --
    // surface that distinctly so the app can re-prompt instead of just retrying
    if (res.status === 400 && detail.includes("API_KEY_INVALID")) {
      return json({ error: "bad_key", message: "That API key was rejected by Google." }, 401);
    }
    if (res.status === 403) {
      return json({ error: "bad_key", message: "That API key isn't authorised for the Gemini API." }, 401);
    }
    if (res.status === 429) {
      return json({ error: "quota", message: "Daily AI limit reached. It resets at 12:30 PM IST." }, 429);
    }
    if (res.status === 404) {
      return json({ error: `No usable model found for this key (tried ${model}).` }, 502);
    }
    return json({ error: `AI service error (${res.status}).` }, 502);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    // very occasionally the model wraps JSON in prose or a fence
    const m = text.match(/\{[\s\S]*\}/);
    if (!m) {
      console.log(`[ai] unparseable response: ${text.slice(0, 200)}`);
      return json({ error: "The AI returned something unreadable. Try rephrasing." }, 502);
    }
    try { parsed = JSON.parse(m[0]); }
    catch { return json({ error: "The AI returned something unreadable. Try rephrasing." }, 502); }
  }

  const actions = sanitiseActions(parsed.actions, snap);
  const reply = typeof parsed.reply === "string"
    ? parsed.reply.trim().slice(0, 400)
    : (actions.length ? "here's what i'd change:" : "done.");

  console.log(`[ai] prompt="${prompt.slice(0, 60)}" -> ${actions.length} action(s)`);
  return json({ reply, actions });
}

// Cheap round-trip used when the user first pastes a key, so we can say
// "that key works" immediately instead of failing on their first real request.
// Verifies a key WITHOUT spending generation quota. ListModels is a free
// metadata call, so pasting a key (or retrying after a typo) can never eat
// into the daily request allowance.
async function handleAIVerify(request, env) {
  const { apiKey } = await request.json();
  const key = typeof apiKey === "string" ? apiKey.trim() : "";
  if (!key) return json({ ok: false, message: "No key provided." }, 400);

  try {
    const available = await listUsableModels(key);
    if (!available.length) {
      return json({ ok: false, message: "That key has no usable text models." }, 401);
    }
    const model = await resolveModel(key, env);
    return json({ ok: true, model: model.replace(/^models\//, "") });
  } catch (err) {
    const detail = String(err.detail || err.message || "");
    if (err.status === 400 && detail.includes("API_KEY_INVALID")) {
      return json({ ok: false, message: "That key was rejected — check you copied all of it." }, 401);
    }
    if (err.status === 403) {
      return json({ ok: false, message: "That key isn't authorised for the Gemini API. Enable the Generative Language API for its project." }, 401);
    }
    if (err.status === 429) {
      return json({ ok: true, warning: "Key accepted, but it's rate limited right now." });
    }
    console.log(`[ai-verify] failed: ${err.status || ""} ${detail.slice(0, 200)}`);
    return json({ ok: false, message: "Couldn't reach Google to check the key." }, 502);
  }
}

// Diagnostic: GET /ai-models?key=... -- lists what a key can actually call.
// Handy when a 404 shows up and you need to see reality rather than guess.
async function handleAIModels(request, env) {
  const key = new URL(request.url).searchParams.get("key");
  if (!key) return json({ error: "pass ?key=YOUR_API_KEY" }, 400);
  try {
    const available = await listUsableModels(key);
    const chosen = await resolveModel(key, env);
    return json({ chosen: chosen.replace(/^models\//, ""), count: available.length,
                  available: available.map((n) => n.replace(/^models\//, "")) });
  } catch (err) {
    return json({ error: err.message, status: err.status || null }, 502);
  }
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });

    const url = new URL(request.url);
    try {
      if (request.method === "POST" && url.pathname === "/subscribe") return await handleSubscribe(request, env);
      if (request.method === "POST" && url.pathname === "/unsubscribe") return await handleUnsubscribe(request, env);
      if (request.method === "POST" && url.pathname === "/sync") return await handleSync(request, env);
      if (request.method === "POST" && url.pathname === "/ai") return await handleAI(request, env);
      if (request.method === "POST" && url.pathname === "/ai-verify") return await handleAIVerify(request, env);
      if (request.method === "GET" && url.pathname === "/ai-models") return await handleAIModels(request, env);
      // manual trigger for testing: GET /run-check-now
      if (request.method === "GET" && url.pathname === "/run-check-now") {
        await runCheck(env);
        return json({ ok: true, ran: true });
      }
      return json({ error: "not found" }, 404);
    } catch (err) {
      return json({ error: err.message || "internal error" }, 500);
    }
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runCheck(env));
  },
};
