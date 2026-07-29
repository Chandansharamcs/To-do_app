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
        await webpush.sendNotification(subscription, payload);
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

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });

    const url = new URL(request.url);
    try {
      if (request.method === "POST" && url.pathname === "/subscribe") return await handleSubscribe(request, env);
      if (request.method === "POST" && url.pathname === "/unsubscribe") return await handleUnsubscribe(request, env);
      if (request.method === "POST" && url.pathname === "/sync") return await handleSync(request, env);
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
