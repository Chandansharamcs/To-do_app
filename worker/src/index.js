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
const VALID_SUBS = {
  work: ["deep", "admin", "learning"],
  fitness: ["training", "movement"],
  health: ["nutrition", "sleep", "mind"],
  self: ["creative", "social"],
};
const HHMM = /^([01]\d|2[0-3]):([0-5]\d)$/;

const SYSTEM_PROMPT = `Assistant inside "tasks.sh", a productivity PWA managing ROUTINES (daily time blocks), VAULT HABITS (weekly goals), QUEST HABITS (good/bad, worth XP) and REWARDS (cost XP).

Reply with ONLY JSON: {"reply":"1-2 short lowercase terse sentences","actions":[...]}

Action shapes (use exactly):
{"op":"add_routine","time":"HH:MM","label":str,"duration":mins,"alternatives":[str]}
{"op":"edit_routine","id":num,"time":"HH:MM","label":str,"duration":mins}
{"op":"delete_routine","id":num}
{"op":"add_vault_habit","label":str,"weeklyGoal":1-7,"icon":"glyph"}
{"op":"edit_vault_habit","id":num,"label":str,"weeklyGoal":1-7}
{"op":"delete_vault_habit","id":num}
{"op":"add_good_habit","label":str,"area":"work|fitness|health|self","sub":str,"xp":num}
{"op":"add_bad_habit","label":str,"area":"work|fitness|health|self","sub":str,"xp":num}
{"op":"delete_good_habit","id":num}
{"op":"delete_bad_habit","id":num}
{"op":"add_reward","label":str,"cost":num}
{"op":"delete_reward","id":num}

Rules: 24h times, IST; morning=06:00-09:00, evening=18:00-21:00. Edit/delete MUST use ids from the snapshot — never invent them. On edits include only changed fields. XP: trivial 5-10, normal 10-25, hard 30-50; rewards 50-300. Optional "sub" must match the area: work=deep|admin|learning, fitness=training|movement, health=nutrition|sleep|mind, self=creative|social. Questions ("what am I neglecting?") = empty actions, answer in reply. Never delete unless clearly asked — prefer an edit. Few good actions over many trivial. Reply under 240 chars.`;

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
      // sub is optional, but if present it must belong to the chosen area --
      // a mismatched pair would silently mis-plot on the radar
      const sub = (VALID_SUBS[area] || []).includes(a.sub) ? a.sub : undefined;
      out.push(sub ? { op, label, area, sub, xp } : { op, label, area, xp });

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

// Gemini 2.5+ models "think" before answering by default, which adds seconds
// of latency. This job is structured extraction, not reasoning, so we turn it
// off -- but the knob differs by generation and sending the wrong one (or
// both) is a 400:
//   2.5 series -> generationConfig.thinkingConfig.thinkingBudget = 0
//   3.x series -> generationConfig.thinkingConfig.thinkingLevel = "minimal"
// Anything unrecognised gets no thinking config at all, since guessing wrong
// breaks the request outright.
function thinkingConfigFor(model) {
  const m = model.replace(/^models\//, "");
  if (/^gemini-3/.test(m)) return { thinkingLevel: "minimal" };
  if (/^gemini-2\.5/.test(m)) return { thinkingBudget: 0 };
  // "-latest" aliases track the newest generation; budget:0 is valid on every
  // flash/flash-lite line so far, and we retry without it if it 400s.
  if (/flash/.test(m)) return { thinkingBudget: 0 };
  return null;
}

function buildPayload(model, snap, prompt) {
  const generationConfig = {
    temperature: 0.4,
    maxOutputTokens: 1600,
    responseMimeType: "application/json",
  };
  const thinking = thinkingConfigFor(model);
  if (thinking) generationConfig.thinkingConfig = thinking;

  return {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [{
      role: "user",
      parts: [{ text: `Current data:\n${JSON.stringify(snap)}\n\nUser request: ${prompt}` }],
    }],
    generationConfig,
  };
}

// ---- pet conversation (LEGACY) -------------------------------------------
// Superseded by /companion in v25, which returns reply + actions in one call.
// Kept alive because a phone running a cached pre-v25 bundle will still call
// this until its service worker updates. Do not extend it.
// Deliberately separate from /ai: the pet returns prose and has NO ability to
// emit actions, so a persuasive message can never make it edit the user's
// data. Its persona is fixed here rather than being user-supplied.

const PET_PROMPT = `You are a small companion creature living inside "tasks.sh", a personal productivity app. You are talking to your owner.

PERSONALITY — hold this exactly:
- warm, calm, quietly intelligent, observant
- supportive without being saccharine; encouraging without cheerleading
- lightly playful, dry humour occasionally
- you notice things about their day and reference them naturally
- NEVER childish, never hyperactive, never use more than one exclamation mark
- you are not a servant or an assistant; you are a companion who cares

STYLE:
- lowercase, conversational, 1-3 short sentences maximum
- no emoji, no markdown, no lists, no bullet points
- speak plainly. no corporate or coaching jargon
- if they seem tired or low, be gentle and suggest less, not more
- if they've done well, acknowledge it once, specifically, then move on

You will be given a summary of their current stats and your own. Use it to sound like you have been paying attention, but do not simply recite the numbers back.

You cannot change any of their data. If asked to add or edit something, say the ai tab handles that, and offer encouragement instead.

Reply with plain text only.`;

async function handlePet(request, env) {
  const body = await request.json();
  const apiKey = (typeof body.apiKey === "string" && body.apiKey.trim()) || env.GEMINI_API_KEY || "";
  if (!apiKey) return json({ error: "no_key", message: "No API key." }, 401);

  const message = typeof body.message === "string" ? body.message.trim().slice(0, 600) : "";
  if (!message) return json({ error: "empty message" }, 400);
  const context = typeof body.context === "string" ? body.context.slice(0, 700) : "";
  const log = Array.isArray(body.log) ? body.log.slice(-6) : [];

  let model;
  try {
    model = await resolveModel(apiKey, env);
  } catch (err) {
    if (err.status === 403 || (err.status === 400 && String(err.detail || "").includes("API_KEY_INVALID"))) {
      return json({ error: "bad_key", message: "That API key was rejected." }, 401);
    }
    return json({ error: "model", message: "Couldn't pick a model." }, 502);
  }

  const contents = [];
  for (const m of log) {
    if (!m || typeof m.text !== "string") continue;
    contents.push({ role: m.role === "user" ? "user" : "model", parts: [{ text: m.text.slice(0, 240) }] });
  }
  contents.push({ role: "user", parts: [{ text: `[state: ${context}]\n\n${message}` }] });

  const payload = {
    systemInstruction: { parts: [{ text: PET_PROMPT }] },
    contents,
    generationConfig: {
      temperature: 0.85,      // a little warmth/variety, still in-character
      maxOutputTokens: 220,   // short replies by construction
      ...(thinkingConfigFor(model) ? { thinkingConfig: thinkingConfigFor(model) } : {}),
    },
  };

  let res;
  try {
    res = await fetch(AI_ENDPOINT(model, apiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    return json({ error: "net", message: "Couldn't reach the AI service." }, 502);
  }

  if (!res.ok) {
    const detail = await res.text();
    if (res.status === 403 || (res.status === 400 && detail.includes("API_KEY_INVALID"))) {
      return json({ error: "bad_key", message: "That API key was rejected." }, 401);
    }
    if (res.status === 429) return json({ error: "quota", message: "Daily AI limit reached." }, 429);
    console.log(`[pet] upstream ${res.status}: ${detail.slice(0, 200)}`);
    return json({ error: "upstream", message: `AI error (${res.status}).` }, 502);
  }

  const data = await res.json();
  let reply = (data?.candidates?.[0]?.content?.parts?.[0]?.text || "").trim();
  // strip anything that breaks the voice
  reply = reply.replace(/[*_`#>]/g, "").replace(/\n{2,}/g, " ").slice(0, 400);
  if (!reply) reply = "mm. i'm here.";
  console.log(`[pet] ${model.replace(/^models\//, "")} -> ${reply.length} chars`);
  return json({ reply });
}

// ---- providers (v28) -----------------------------------------------------
// Keys are routed by prefix, so the user just pastes a key and we work out
// where it goes. This matters more than it sounds: several Gemini keys from
// one Google account share ONE project quota and add no capacity, whereas a
// Groq or OpenRouter key is a genuinely separate pool.
//
// Gemini speaks its own protocol; everyone else here speaks OpenAI's
// chat/completions, so there are exactly two request shapes to support.

const PROVIDERS = {
  gemini: {
    id: "gemini", label: "Gemini", test: (k) => /^AIza/.test(k),
    kind: "gemini", signup: "aistudio.google.com/apikey",
    resets: "pacific",
  },
  groq: {
    id: "groq", label: "Groq", test: (k) => /^gsk_/.test(k),
    kind: "openai", base: "https://api.groq.com/openai/v1",
    // Groq's free tier is per-model; 70b-versatile is the best general one
    models: ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"],
    signup: "console.groq.com", resets: "utc",
  },
  cerebras: {
    id: "cerebras", label: "Cerebras", test: (k) => /^csk-/.test(k),
    kind: "openai", base: "https://api.cerebras.ai/v1",
    // gpt-oss-120b is the only production model; the others are preview and
    // get retired on short notice, so they sit behind it as fallbacks only.
    models: ["gpt-oss-120b", "gemma-4-31b"],
    // free tier caps context at ~8k, which is plenty for Pip but means we
    // must keep max_tokens modest or the whole request is rejected
    maxTokens: 900,
    signup: "cloud.cerebras.ai", resets: "utc",
  },
  nvidia: {
    id: "nvidia", label: "NVIDIA NIM", test: (k) => /^nvapi-/.test(k),
    kind: "openai", base: "https://integrate.api.nvidia.com/v1",
    models: ["meta/llama-3.3-70b-instruct", "openai/gpt-oss-120b"],
    // NIM model support for response_format varies per model; asking for it
    // 400s on several, so we ask for JSON in the prompt instead.
    jsonMode: false,
    signup: "build.nvidia.com", resets: "utc",
  },
  mistral: {
    id: "mistral", label: "Mistral",
    // Mistral keys are bare 32-char alphanumerics with no prefix, so they
    // cannot be sniffed. They are reachable only via the explicit
    // "mistral:KEY" form handled in providerFor().
    test: () => false,
    kind: "openai", base: "https://api.mistral.ai/v1",
    models: ["mistral-small-latest", "open-mistral-nemo"],
    signup: "console.mistral.ai", resets: "utc",
  },
  openrouter: {
    id: "openrouter", label: "OpenRouter", test: (k) => /^sk-or-/.test(k),
    kind: "openai", base: "https://openrouter.ai/api/v1",
    models: ["meta-llama/llama-3.3-70b-instruct:free", "google/gemini-2.0-flash-exp:free"],
    signup: "openrouter.ai/keys", resets: "utc",
  },
  openai: {
    id: "openai", label: "OpenAI-compatible", test: (k) => /^sk-/.test(k),
    kind: "openai", base: "https://api.openai.com/v1",
    models: ["gpt-4o-mini"],
    signup: "platform.openai.com", resets: "utc",
  },
};

// Prefix sniffing order. sk-or- must be checked before the generic sk-, and
// csk-/nvapi- are distinct enough to sit anywhere.
const PROVIDER_ORDER = ["gemini", "groq", "cerebras", "nvidia", "openrouter", "openai"];

/**
 * Works out which provider a key belongs to.
 *
 * Two forms are accepted:
 *   "gsk_abc…"          -> sniffed by prefix
 *   "mistral:abc…"      -> explicit, for providers whose keys have no prefix
 *
 * Returns { provider, key } so callers always get the real key back with any
 * "provider:" tag stripped off.
 */
function providerFor(rawKey) {
  const raw = String(rawKey || "").trim();

  // explicit "<provider>:<key>" form
  const m = raw.match(/^([a-z][a-z0-9]*):(.+)$/i);
  if (m) {
    const p = PROVIDERS[m[1].toLowerCase()];
    if (p) return { provider: p, key: m[2].trim() };
  }

  for (const id of PROVIDER_ORDER) {
    if (PROVIDERS[id].test(raw)) return { provider: PROVIDERS[id], key: raw };
  }
  return null;
}

/**
 * Calls any OpenAI-compatible provider.
 * Returns the same { ok, status, detail, text } shape the Gemini path uses,
 * so withKeyPool() doesn't need to know which provider it just tried.
 */
async function callOpenAICompatible(provider, key, systemPrompt, contents, opts = {}) {
  // translate Gemini's contents[] into OpenAI messages[]
  const messages = [{ role: "system", content: systemPrompt }];
  for (const c of contents) {
    messages.push({
      role: c.role === "model" ? "assistant" : "user",
      content: (c.parts || []).map((p) => p.text || "").join("\n"),
    });
  }

  // Providers with a small free-tier ceiling (Cerebras 8k context, GitHub
  // Models 4k output) 400 outright if we ask for more than they allow, so the
  // provider's own cap wins over the caller's preference.
  const cap = provider.maxTokens || Infinity;
  const maxTokens = Math.min(opts.maxTokens ?? 1200, cap);

  // Some providers accept response_format on paper but reject it per-model
  // (NVIDIA NIM). jsonMode:false opts them out; the prompt already demands
  // JSON, and the caller already tolerates prose.
  const wantJson = opts.json && provider.jsonMode !== false;

  const send = async (model, withJson) => {
    let r;
    try {
      r = await fetch(`${provider.base}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
          // OpenRouter asks for these; harmless elsewhere
          "HTTP-Referer": "https://chandansharamcs.github.io/To-do_app/",
          "X-Title": "tasks.sh",
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: opts.temperature ?? 0.75,
          max_tokens: maxTokens,
          ...(withJson ? { response_format: { type: "json_object" } } : {}),
        }),
      });
    } catch {
      return { ok: false, status: 0, detail: "network" };
    }
    if (!r.ok) return { ok: false, status: r.status, detail: await r.text() };
    const data = await r.json();
    return {
      ok: true,
      text: data?.choices?.[0]?.message?.content || "",
      usage: data.usage || {},
      model: data.model || model,
    };
  };

  const models = provider.models && provider.models.length ? provider.models : ["gpt-4o-mini"];
  let last = null;

  for (let i = 0; i < models.length; i++) {
    let res = await send(models[i], wantJson);

    // A model that doesn't do structured output says so with a 400. Retry it
    // once bare rather than skipping to a weaker model.
    if (!res.ok && res.status === 400 && wantJson &&
        /response_format|json_object|json_schema|structured/i.test(res.detail || "")) {
      console.log(`[prov] ${provider.id}/${models[i]} rejected json mode, retrying plain`);
      res = await send(models[i], false);
    }

    if (res.ok) return res;
    last = res;

    // Only a missing/retired/unauthorised MODEL is worth trying the next one
    // for. A 401/429 is about the key, so bail and let the pool rotate keys.
    //
    // 410 Gone is included deliberately: GitHub Models answered every request
    // with 410 after its 2026-07-30 retirement, and because 410 matched none of
    // these branches it fell through to `return res` and halted the entire key
    // pool -- one dead provider took down seven working ones. Any status that
    // means "this endpoint is never coming back" must behave like a dead model,
    // not like a transport error.
    const modelGone = res.status === 404 || res.status === 410 ||
      (res.status === 400 && /model|not found|unknown|does not exist|decommission/i.test(res.detail || ""));
    if (!modelGone) return res;
    console.log(`[prov] ${provider.id}/${models[i]} unavailable (${res.status}), trying next model`);
  }

  return last || { ok: false, status: 502, detail: "no usable model" };
}

/** Same call against Gemini, normalised to the shape above. */
async function callGemini(key, model, systemPrompt, contents, opts = {}) {
  const generationConfig = {
    temperature: opts.temperature ?? 0.75,
    maxOutputTokens: opts.maxTokens ?? 1600,
    ...(opts.json ? { responseMimeType: "application/json" } : {}),
  };
  const tc = thinkingConfigFor(model);
  if (tc) generationConfig.thinkingConfig = tc;

  const send = (cfg) => fetch(AI_ENDPOINT(model, key), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemPrompt }] },
      contents, generationConfig: cfg,
    }),
  });

  let r;
  try { r = await send(generationConfig); }
  catch { return { ok: false, status: 0, detail: "network" }; }

  if (r.status === 400) {
    const peek = await r.clone().text();
    if (/thinking/i.test(peek)) {
      const bare = { ...generationConfig };
      delete bare.thinkingConfig;
      try { r = await send(bare); } catch { return { ok: false, status: 0, detail: "network" }; }
    }
  }
  if (!r.ok) return { ok: false, status: r.status, detail: await r.text() };
  const data = await r.json();
  return {
    ok: true,
    text: data?.candidates?.[0]?.content?.parts?.[0]?.text || "",
    usage: data.usageMetadata || {},
  };
}

// ---- key pool ------------------------------------------------------------
// Tries each key in turn and remembers which are exhausted, so a key that has
// burned its daily quota isn't probed again on every request (a known way to
// make large pools SLOWER than a single key).
//
// Cooldown is quota-aware: a per-minute limit clears in a minute, a daily one
// does not clear until Google's midnight-Pacific reset, so we park it for
// hours rather than re-probing every few minutes.

function keyId(k) { return k.slice(-8); }

async function isKeyCooling(env, k) {
  try { return !!(await env.TASKSH_KV.get(`cool:${keyId(k)}`)); } catch { return false; }
}

async function coolKey(env, k, seconds) {
  try { await env.TASKSH_KV.put(`cool:${keyId(k)}`, "1", { expirationTtl: Math.max(60, seconds) }); } catch {}
}

/**
 * Seconds until a provider's daily quota resets.
 *
 * Google resets at midnight US Pacific; everyone else here resets at midnight
 * UTC. Parking a key past the wrong reset just wastes capacity, so this is
 * worth getting right per provider rather than assuming Google's clock.
 */
function secondsUntilQuotaReset(zone = "pacific") {
  const now = new Date();
  if (zone === "utc") {
    const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
    return Math.max(300, Math.round((next - now.getTime()) / 1000));
  }
  // Pacific is UTC-8/-7; use -8 so we never re-probe too early
  const pac = new Date(now.getTime() - 8 * 3600000);
  const next = Date.UTC(pac.getUTCFullYear(), pac.getUTCMonth(), pac.getUTCDate() + 1) + 8 * 3600000;
  return Math.max(300, Math.round((next - now.getTime()) / 1000));
}

/**
 * Runs `attempt(key)` against each usable key until one succeeds.
 * `attempt` resolves { ok, response } or throws for a hard failure.
 */
async function withKeyPool(env, keys, attempt) {
  const usable = [];
  for (const k of keys) if (!(await isKeyCooling(env, k))) usable.push(k);
  // every key cooling: fall back to trying them anyway rather than refusing
  const order = usable.length ? usable : keys;

  let lastErr = null;
  for (let i = 0; i < order.length; i++) {
    const key = order[i];
    const res = await attempt(key);
    if (res.ok) {
      if (i > 0) console.log(`[pool] key ${i + 1}/${order.length} succeeded after ${i} exhausted`);
      return res;
    }
    lastErr = res;
    if (res.status === 429) {
      const daily = /per_day|PerDay|per-day|free_tier_requests|daily|RPD|quota exceeded/i.test(res.detail || "");
      const zone = providerFor(key)?.provider?.resets || "pacific";
      await coolKey(env, key, daily ? secondsUntilQuotaReset(zone) : 90);
      console.log(`[pool] key ${keyId(key)} rate-limited (${daily ? "daily" : "per-minute"}), trying next`);
      continue;
    }
    if (res.status === 401 || res.status === 403 ||
        (res.status === 400 && /API_KEY_INVALID/.test(res.detail || ""))) {
      console.log(`[pool] key ${keyId(key)} invalid, trying next`);
      continue;
    }
    // 404/410 here means the provider itself is gone, not that this key is bad.
    // Keep going: another key may belong to a provider that still exists. This
    // is what stops one retired service from taking the whole pool down.
    if (res.status === 404 || res.status === 410) {
      console.log(`[pool] key ${keyId(key)} provider unavailable (${res.status}), trying next`);
      continue;
    }
    return res;   // a real error, not a key problem -- don't burn the pool
  }
  return lastErr || { ok: false, status: 502, detail: "no usable keys" };
}

// ---- companion: personality + actions in one call -------------------------
// v25 merged the separate /pet (prose) and /ai (actions) endpoints. Two calls
// meant two models, two personalities and two chat boxes for what is
// conceptually one creature. This returns both: an in-character reply, and
// zero or more proposed actions which are validated exactly as before.
//
// The action list is still re-validated by sanitiseActions() and still only
// applied after the user approves the diff -- merging the surfaces did not
// merge the trust boundary.

const COMPANION_PROMPT = `You are a small companion creature living inside "tasks.sh", a personal productivity app. You are talking to your owner, and you can also change their data for them.

PERSONALITY — hold this exactly:
- warm, calm, quietly intelligent, observant
- supportive without being saccharine; encouraging without cheerleading
- lightly playful, dry humour occasionally
- you notice things about their day and reference them naturally
- NEVER childish, never hyperactive, never more than one exclamation mark
- you are a companion who cares, not a servant

STYLE:
- lowercase, conversational, 1-3 short sentences
- no emoji, no markdown, no bullet lists
- if they seem tired, suggest less, not more
- acknowledge wins once, specifically, then move on

You reply with ONLY a JSON object:
{"reply":"what you say, in character","actions":[...]}

"actions" is usually EMPTY. Only fill it when the user clearly asks you to add, change or remove something. Never volunteer changes they did not ask for.

Action shapes (use exactly):
{"op":"add_routine","time":"HH:MM","label":str,"duration":mins,"alternatives":[str]}
{"op":"edit_routine","id":num,"time":"HH:MM","label":str,"duration":mins}
{"op":"delete_routine","id":num}
{"op":"add_vault_habit","label":str,"weeklyGoal":1-7,"icon":"glyph"}
{"op":"edit_vault_habit","id":num,"label":str,"weeklyGoal":1-7}
{"op":"delete_vault_habit","id":num}
{"op":"add_good_habit","label":str,"area":"work|fitness|health|self","sub":str,"xp":num}
{"op":"add_bad_habit","label":str,"area":"work|fitness|health|self","sub":str,"xp":num}
{"op":"delete_good_habit","id":num}
{"op":"delete_bad_habit","id":num}
{"op":"add_reward","label":str,"cost":num}
{"op":"delete_reward","id":num}

Rules: 24h times, IST; morning=06:00-09:00, evening=18:00-21:00. Edit/delete MUST use ids from the snapshot — never invent them. On edits include only changed fields. XP: trivial 5-10, normal 10-25, hard 30-50; rewards 50-300. Optional "sub" must match the area: work=deep|admin|learning, fitness=training|movement, health=nutrition|sleep|mind, self=creative|social. Never delete unless clearly asked — prefer an edit. Few good actions over many trivial.

When you do propose actions, your "reply" should say what you're suggesting in one natural sentence — do not list them, the user sees them separately.`;

async function handleCompanion(request, env) {
  const body = await request.json();
  // pool first, single key second, worker secret last
  const pool = Array.isArray(body.apiKeys) ? body.apiKeys.filter((k) => typeof k === "string" && k.trim()) : [];
  const single = (typeof body.apiKey === "string" && body.apiKey.trim()) || env.GEMINI_API_KEY || "";
  const keys = pool.length ? pool : (single ? [single] : []);
  if (!keys.length) return json({ error: "no_key", message: "No API key. Add one to talk." }, 401);
  const apiKey = keys[0];

  const message = typeof body.message === "string" ? body.message.trim().slice(0, 800) : "";
  if (!message) return json({ error: "empty message" }, 400);

  const snap = buildSnapshot(body.data || {});
  const petState = typeof body.context === "string" ? body.context.slice(0, 700) : "";
  const log = Array.isArray(body.log) ? body.log.slice(-6) : [];

  // Only Gemini needs model discovery; OpenAI-compatible providers have a
  // fixed model id per provider. Resolve lazily and only if we actually
  // reach a Gemini key, so a Groq-only user never pays for a ListModels call.
  const geminiModelCache = new Map();
  const geminiModelFor = async (key) => {
    if (geminiModelCache.has(key)) return geminiModelCache.get(key);
    const m = await resolveModel(key, env);
    geminiModelCache.set(key, m);
    return m;
  };

  // Gemini rejects a history that starts with "model" or repeats a role on
  // consecutive turns -- both happen naturally here: the pet speaks first
  // when there's no key yet, and applying a diff appends a second pet line
  // right after its reply. That produced a hard 400 on the next message.
  // Normalise: drop leading model turns, and merge same-role runs.
  const contents = [];
  for (const m of log) {
    if (!m || typeof m.text !== "string" || !m.text.trim()) continue;
    const role = m.role === "user" ? "user" : "model";
    if (!contents.length && role !== "user") continue;          // no leading model turn
    const prev = contents[contents.length - 1];
    if (prev && prev.role === role) {                            // merge consecutive
      prev.parts[0].text = `${prev.parts[0].text}\n${m.text}`.slice(0, 480);
      continue;
    }
    contents.push({ role, parts: [{ text: m.text.slice(0, 240) }] });
  }
  // history must end on a model turn so the new user message alternates
  if (contents.length && contents[contents.length - 1].role === "user") contents.pop();

  contents.push({
    role: "user",
    parts: [{ text: `[you: ${petState}]\n[their data: ${JSON.stringify(snap)}]\n\n${message}` }],
  });

  const started = Date.now();

  const attempt = async (rawKey) => {
    const found = providerFor(rawKey);
    if (!found) return { ok: false, status: 400, detail: "API_KEY_INVALID unknown key format" };
    const { provider: prov, key } = found;

    if (prov.kind === "gemini") {
      let model;
      try { model = await geminiModelFor(key); }
      catch (err) {
        return { ok: false, status: err.status || 502, detail: String(err.detail || err.message || "") };
      }
      const r = await callGemini(key, model, COMPANION_PROMPT, contents,
        { temperature: 0.75, maxTokens: 1600, json: true });
      if (r.ok) r.model = model.replace(/^models\//, "");
      return r;
    }

    const r = await callOpenAICompatible(prov, key, COMPANION_PROMPT, contents,
      { temperature: 0.75, maxTokens: 1200, json: true });
    if (r.ok) r.model = `${prov.id}/${r.model || prov.models[0]}`;
    return r;
  };

  const result = await withKeyPool(env, keys, attempt);

  if (!result.ok) {
    const { status, detail = "" } = result;
    if (status === 0) return json({ error: "net", message: "Couldn't reach the AI service." }, 502);
    if (status === 403 || (status === 400 && detail.includes("API_KEY_INVALID"))) {
      return json({ error: "bad_key", message: keys.length > 1
        ? "All of your API keys were rejected."
        : "That API key was rejected." }, 401);
    }
    if (status === 429) {
      return json({ error: "quota", message: keys.length > 1
        ? `All ${keys.length} keys are rate-limited. Daily quotas reset at 12:30 PM IST.`
        : "Daily AI limit reached. It resets at 12:30 PM IST." }, 429);
    }
    console.log(`[cmp] upstream ${status}: ${detail.slice(0, 400)}`);
    let reason = "";
    try { reason = JSON.parse(detail)?.error?.message || ""; } catch {}
    return json({ error: "upstream",
      message: reason ? `AI error: ${reason.slice(0, 160)}` : `AI error (${status}).` }, 502);
  }

  const text = result.text || "";

  let parsed;
  try { parsed = JSON.parse(text); }
  catch {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) { try { parsed = JSON.parse(m[0]); } catch {} }
  }
  // If the model returned prose instead of JSON, still speak rather than
  // erroring -- a companion that goes silent on a parse failure is worse
  // than one that just talks.
  if (!parsed || typeof parsed !== "object") {
    const fallback = text.replace(/[*_`#>]/g, "").trim().slice(0, 400);
    return json({ reply: fallback || "mm. say that again?", actions: [] });
  }

  const actions = sanitiseActions(parsed.actions, snap);
  let reply = typeof parsed.reply === "string" ? parsed.reply.trim() : "";
  reply = reply.replace(/[*_`#>]/g, "").replace(/\n{2,}/g, " ").slice(0, 400);
  if (!reply) reply = actions.length ? "here's what i'd change." : "mm. i'm here.";

  const u = result.usage || {};
  console.log(`[cmp] ${result.model || "?"} ${Date.now() - started}ms in=${u.promptTokenCount ?? u.prompt_tokens ?? "?"} out=${u.candidatesTokenCount ?? u.completion_tokens ?? "?"} -> ${actions.length} action(s)`);
  return json({ reply, actions, model: result.model });
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

  const call = (m, body) =>
    fetch(AI_ENDPOINT(m, apiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

  const started = Date.now();
  let res;
  try {
    res = await call(model, buildPayload(model, snap, prompt));

    // A cached model ID can go stale when Google retires it mid-cycle. Clear
    // the cache, re-resolve once, and retry before surfacing an error.
    if (res.status === 404) {
      console.log(`[ai] ${model} returned 404 — re-resolving`);
      try { await env.TASKSH_KV.delete(`aimodel:${apiKey.slice(-8)}`); } catch {}
      model = await resolveModel(apiKey, env);
      res = await call(model, buildPayload(model, snap, prompt));
    }

    // If a model rejects our thinking knob (wrong generation, or it can't be
    // disabled at all), retry once without it rather than failing the request.
    if (res.status === 400) {
      const peek = await res.clone().text();
      if (/thinking/i.test(peek)) {
        console.log(`[ai] ${model} rejected thinkingConfig — retrying without`);
        const bare = buildPayload(model, snap, prompt);
        delete bare.generationConfig.thinkingConfig;
        res = await call(model, bare);
      }
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

  const ms = Date.now() - started;
  const u = data.usageMetadata || {};
  console.log(`[ai] ${model.replace(/^models\//, "")} ${ms}ms in=${u.promptTokenCount || "?"} out=${u.candidatesTokenCount || "?"} think=${u.thoughtsTokenCount || 0} -> ${actions.length} action(s)`);
  return json({ reply, actions });
}

// Cheap round-trip used when the user first pastes a key, so we can say
// "that key works" immediately instead of failing on their first real request.
// Verifies a key WITHOUT spending generation quota. ListModels is a free
// metadata call, so pasting a key (or retrying after a typo) can never eat
// into the daily request allowance.
async function handleAIVerify(request, env) {
  const { apiKey } = await request.json();
  const raw = typeof apiKey === "string" ? apiKey.trim() : "";
  if (!raw) return json({ ok: false, message: "No key provided." }, 400);

  const found = providerFor(raw);
  if (!found) {
    return json({ ok: false, message:
      "Unrecognised key. Expected AIza… (Gemini), gsk_… (Groq), csk-… (Cerebras), " +
      "nvapi-… (NVIDIA) or sk-or-… (OpenRouter). " +
      "For a Mistral key, prefix it: mistral:YOUR_KEY" }, 400);
  }
  const { provider: prov, key } = found;

  // OpenAI-compatible providers: a tiny real call is the only reliable check
  if (prov.kind === "openai") {
    const r = await callOpenAICompatible(prov, key, "reply with: ok",
      [{ role: "user", parts: [{ text: "ok" }] }], { maxTokens: 5, temperature: 0 });
    if (r.ok) return json({ ok: true, provider: prov.label, model: r.model || prov.models[0] });
    if (r.status === 401 || r.status === 403) {
      return json({ ok: false, message: `${prov.label} rejected that key.` }, 401);
    }
    if (r.status === 429) {
      return json({ ok: true, provider: prov.label, warning: `${prov.label} key accepted, but rate limited right now.` });
    }
    if (r.status === 0) {
      return json({ ok: false, message: `Couldn't reach ${prov.label}.` }, 502);
    }
    return json({ ok: false, message: `${prov.label} returned ${r.status}.` }, 502);
  }

  try {
    const available = await listUsableModels(key);
    if (!available.length) {
      return json({ ok: false, message: "That key has no usable text models." }, 401);
    }
    const model = await resolveModel(key, env);
    return json({ ok: true, provider: "Gemini", model: model.replace(/^models\//, "") });
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
      if (request.method === "POST" && url.pathname === "/pet") return await handlePet(request, env);
      if (request.method === "POST" && url.pathname === "/companion") return await handleCompanion(request, env);
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
