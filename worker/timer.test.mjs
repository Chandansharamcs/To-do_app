// worker/timer.test.mjs
//
// The one-shot pomodoro push (v39).
//
// This endpoint exists because the phone cannot be trusted to stay awake.
// The risks are the mirror image of that: a timer stored in the past fires
// instantly, one stored a week out lingers, and a ring that arrives an hour
// late is noise rather than a reminder. All three are asserted here.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "src", "index.js"), "utf8");

function slice(name) {
  const fn = SRC.match(new RegExp("^(?:async )?function " + name + "\\(", "m"));
  const cn = SRC.match(new RegExp("^const " + name + "\\s*=", "m"));
  const m = fn || cn;
  if (!m) throw new Error("not found in worker: " + name);

  let i;
  if (fn) {
    i = SRC.indexOf("(", m.index);
    let d = 0;
    for (; i < SRC.length; i++) {
      if (SRC[i] === "(") d++;
      else if (SRC[i] === ")") { d--; if (d === 0) { i++; break; } }
    }
  } else {
    i = SRC.indexOf("=", m.index) + 1;
  }

  let dep = 0, seen = false, st = null, line = false, blk = false;
  for (; i < SRC.length; i++) {
    const c = SRC[i], p = SRC[i - 1];
    if (line) { if (c === "\n") line = false; continue; }
    if (blk) { if (c === "/" && p === "*") blk = false; continue; }
    if (st) { if (c === st && p !== "\\") st = null; continue; }
    if (c === "/" && SRC[i + 1] === "/") { line = true; continue; }
    if (c === "/" && SRC[i + 1] === "*") { blk = true; continue; }
    if (c === '"' || c === "'" || c === "`") { st = c; continue; }
    if (c === "{" || c === "[") { dep++; seen = true; continue; }
    if (c === "}" || c === "]") { dep--; if (seen && dep === 0) return SRC.slice(m.index, SRC.indexOf("\n", i)); continue; }
    if (c === ";" && dep === 0 && cn) return SRC.slice(m.index, i + 1);
  }
  throw new Error("unterminated slice: " + name);
}

const NAMES = ["CORS_HEADERS", "json", "TIMER_MAX_AHEAD_MS", "handleTimer", "dueTimerPayload"];
const W = new Function([...NAMES.map(slice), `return {${NAMES.join(",")}};`].join("\n\n"))();

function fakeKV(seed = {}) {
  const m = new Map(Object.entries(seed));
  const opts = new Map();
  return {
    get: async (k) => (m.has(k) ? m.get(k) : null),
    put: async (k, v, o) => { m.set(k, v); if (o) opts.set(k, o); },
    delete: async (k) => { m.delete(k); },
    _map: m,
    _opts: opts,
  };
}
const envWith = (kv) => ({ TASKSH_KV: kv });
const post = (body) => new Request("https://w.dev/timer", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: typeof body === "string" ? body : JSON.stringify(body),
});
const read = async (res) => ({ status: res.status, body: await res.json() });
const DEV = "dev_abc123";

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- storing ---------------------------------------------------------------

T("a malformed body is a 400, not a crash", async () => {
  assert.equal((await read(await W.handleTimer(post("{nope"), envWith(fakeKV())))).status, 400);
});

T("a missing deviceId is refused", async () => {
  assert.equal((await read(await W.handleTimer(post({ at: Date.now() + 60000 }), envWith(fakeKV())))).status, 400);
});

T("a valid end time is stored with its label", async () => {
  const kv = fakeKV();
  const at = Date.now() + 25 * 60000;
  const { status, body } = await read(await W.handleTimer(post({ deviceId: DEV, at, label: "focus" }), envWith(kv)));
  assert.equal(status, 200);
  assert.equal(body.at, at);
  assert.deepEqual(JSON.parse(kv._map.get(`timer:${DEV}`)), { at, label: "focus" });
});

T("the stored timer expires on its own", async () => {
  // a phone that never comes back must not leave a row in KV forever
  const kv = fakeKV();
  await W.handleTimer(post({ deviceId: DEV, at: Date.now() + 60000 }), envWith(kv));
  const o = kv._opts.get(`timer:${DEV}`);
  assert.ok(o && o.expirationTtl > 0, "no TTL set");
});

T("a silly label is truncated rather than stored whole", async () => {
  const kv = fakeKV();
  await W.handleTimer(post({ deviceId: DEV, at: Date.now() + 60000, label: "x".repeat(500) }), envWith(kv));
  assert.equal(JSON.parse(kv._map.get(`timer:${DEV}`)).label.length, 60);
});

T("a time in the past is refused, not fired on the next tick", async () => {
  const kv = fakeKV();
  const { status } = await read(await W.handleTimer(post({ deviceId: DEV, at: Date.now() - 120000 }), envWith(kv)));
  assert.equal(status, 400);
  assert.equal(kv._map.size, 0);
});

T("a time further out than a day is refused", async () => {
  const kv = fakeKV();
  const at = Date.now() + W.TIMER_MAX_AHEAD_MS + 60000;
  assert.equal((await read(await W.handleTimer(post({ deviceId: DEV, at }), envWith(kv)))).status, 400);
});

T("a few seconds of clock skew is tolerated", async () => {
  // the phone computes `at`, so its clock decides -- rejecting anything
  // fractionally in the past would drop legitimate short timers
  const kv = fakeKV();
  const { status } = await read(await W.handleTimer(post({ deviceId: DEV, at: Date.now() - 5000 }), envWith(kv)));
  assert.equal(status, 200);
});

// ---- cancelling ------------------------------------------------------------

T("at = 0 cancels and says so", async () => {
  const kv = fakeKV({ [`timer:${DEV}`]: JSON.stringify({ at: Date.now() + 60000, label: "focus" }) });
  const { status, body } = await read(await W.handleTimer(post({ deviceId: DEV, at: 0 }), envWith(kv)));
  assert.equal(status, 200);
  assert.equal(body.cancelled, true);
  assert.equal(kv._map.has(`timer:${DEV}`), false);
});

T("cancelling a timer that isn't there is not an error", async () => {
  // pause, then pause again: the app shouldn't have to track whether it
  // already told the worker
  assert.equal((await read(await W.handleTimer(post({ deviceId: DEV, at: 0 }), envWith(fakeKV())))).status, 200);
});

// ---- firing ----------------------------------------------------------------

const NOW = 1_800_000_000_000;

T("nothing fires before the end time", () => {
  assert.equal(W.dueTimerPayload({ at: NOW + 1000, label: "focus" }, NOW), null);
});

T("a due timer becomes a notification naming the phase", () => {
  const p = W.dueTimerPayload({ at: NOW - 1000, label: "focus" }, NOW);
  assert.equal(p.title, "focus done");
  assert.ok(p.body.length > 0);
  assert.equal(p.tag, "tasksh-timer");
  assert.equal(p.at, NOW - 1000);
});

T("the notification is stamped with when the block ended, not when it sent", () => {
  // Doze can defer delivery; without this the shade shows the delivery time
  const p = W.dueTimerPayload({ at: NOW - 45000, label: "focus" }, NOW);
  assert.equal(p.at, NOW - 45000);
});

T("a timer missed by more than ten minutes does not ring", () => {
  assert.equal(W.dueTimerPayload({ at: NOW - 11 * 60000, label: "focus" }, NOW), null);
});

T("a malformed record never becomes a notification", () => {
  assert.equal(W.dueTimerPayload(null, NOW), null);
  assert.equal(W.dueTimerPayload({}, NOW), null);
  assert.equal(W.dueTimerPayload({ at: "soon" }, NOW), null);
});

T("a timer with no label still reads sensibly", () => {
  assert.equal(W.dueTimerPayload({ at: NOW }, NOW).title, "focus block done");
});

// ---- run -------------------------------------------------------------------

for (const [name, fn] of tests) {
  try { await fn(); pass++; console.log("  ✓", name); }
  catch (e) { failed++; console.log("  ✗", name, "\n     ", e && e.message); }
}
console.log(`  timer.test.mjs — ${pass} passed${failed ? `, ${failed} FAILED` : ""}`);
if (failed) process.exitCode = 1;
