// worker/backup.test.mjs
//
// POST /backup and GET /backup (v38).
//
// The worker is deliberately dumb here: it stores an opaque string and can
// never read it. So what is worth testing is everything around that string --
// the id guard, the size cap, the flood guard, and the rotation that stops a
// bad push from eating the only good snapshot.

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

const NAMES = [
  "CORS_HEADERS", "json",
  "BACKUP_ID_RE", "BACKUP_MAX_BYTES", "BACKUP_MIN_GAP_MS",
  "handleBackupPut", "handleBackupGet",
];
const W = new Function([...NAMES.map(slice), `return {${NAMES.join(",")}};`].join("\n\n"))();

function fakeKV(seed = {}) {
  const m = new Map(Object.entries(seed));
  return {
    get: async (k) => (m.has(k) ? m.get(k) : null),
    put: async (k, v) => { m.set(k, v); },
    delete: async (k) => { m.delete(k); },
    _map: m,
  };
}
const envWith = (kv) => ({ TASKSH_KV: kv });

const put = (body) => new Request("https://w.dev/backup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: typeof body === "string" ? body : JSON.stringify(body),
});
const get = (qs) => new Request(`https://w.dev/backup?${qs}`);

const ID = "abcdefgh23";
const read = async (res) => ({ status: res.status, body: await res.json() });

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- write guards ----------------------------------------------------------

T("a malformed body is a 400, not a crash", async () => {
  const { status } = await read(await W.handleBackupPut(put("{not json"), envWith(fakeKV())));
  assert.equal(status, 400);
});

T("ids that aren't exactly ten lowercase base32 chars are refused", async () => {
  for (const id of ["", "short", "ABCDEFGH23", "abcdefgh234", "abcdefg-23", "../../etc"]) {
    const { status, body } = await read(await W.handleBackupPut(put({ id, blob: "v1.a.b.c" }), envWith(fakeKV())));
    assert.equal(status, 400, `accepted id: ${JSON.stringify(id)}`);
    assert.equal(body.error, "bad id");
  }
});

T("a missing or non-string blob is refused", async () => {
  for (const blob of [undefined, null, "", 42, { a: 1 }]) {
    const { status } = await read(await W.handleBackupPut(put({ id: ID, blob }), envWith(fakeKV())));
    assert.equal(status, 400, `accepted blob: ${JSON.stringify(blob)}`);
  }
});

T("an oversized blob is refused with the limit stated", async () => {
  const blob = "x".repeat(W.BACKUP_MAX_BYTES + 1);
  const { status, body } = await read(await W.handleBackupPut(put({ id: ID, blob }), envWith(fakeKV())));
  assert.equal(status, 413);
  assert.equal(body.max, W.BACKUP_MAX_BYTES);
});

// ---- happy path ------------------------------------------------------------

T("a first push is stored verbatim", async () => {
  const kv = fakeKV();
  const blob = "v1.c2FsdA==.aXY=.Y3Q=";
  const { status, body } = await read(await W.handleBackupPut(put({ id: ID, blob }), envWith(kv)));
  assert.equal(status, 200);
  assert.equal(body.ok, true);
  assert.equal(body.size, blob.length);

  const rec = JSON.parse(kv._map.get(`bk:${ID}`));
  // byte-for-byte: the worker must not normalise, re-encode or inspect it
  assert.equal(rec.blob, blob);
  assert.equal(typeof rec.at, "number");
});

T("the stored record holds ciphertext and nothing else useful", async () => {
  const kv = fakeKV();
  await W.handleBackupPut(put({ id: ID, blob: "v1.AAA.BBB.CCC" }), envWith(kv));
  const raw = kv._map.get(`bk:${ID}`);
  assert.ok(!raw.includes("tasksh."));
  assert.deepEqual(Object.keys(JSON.parse(raw)).sort(), ["at", "blob", "size"]);
});

// ---- flood guard -----------------------------------------------------------

T("a second push inside the window is refused with a wait time", async () => {
  const kv = fakeKV({ [`bk:${ID}`]: JSON.stringify({ at: Date.now() - 60_000, size: 4, blob: "old" }) });
  const { status, body } = await read(await W.handleBackupPut(put({ id: ID, blob: "new" }), envWith(kv)));
  assert.equal(status, 429);
  assert.ok(body.retryInMs > 0 && body.retryInMs <= W.BACKUP_MIN_GAP_MS);
  assert.equal(JSON.parse(kv._map.get(`bk:${ID}`)).blob, "old"); // untouched
});

T("a push after the window rotates the previous snapshot aside", async () => {
  const old = JSON.stringify({ at: Date.now() - 2 * W.BACKUP_MIN_GAP_MS, size: 3, blob: "old" });
  const kv = fakeKV({ [`bk:${ID}`]: old });
  const { status } = await read(await W.handleBackupPut(put({ id: ID, blob: "new" }), envWith(kv)));
  assert.equal(status, 200);
  assert.equal(JSON.parse(kv._map.get(`bk:${ID}`)).blob, "new");
  assert.equal(kv._map.get(`bk:${ID}:prev`), old);
});

T("a corrupt existing record does not block the next push", async () => {
  const kv = fakeKV({ [`bk:${ID}`]: "{{{ not json" });
  const { status } = await read(await W.handleBackupPut(put({ id: ID, blob: "new" }), envWith(kv)));
  assert.equal(status, 200);
  assert.equal(JSON.parse(kv._map.get(`bk:${ID}`)).blob, "new");
});

// ---- reads -----------------------------------------------------------------

T("reading back gives the exact blob", async () => {
  const blob = "v1.AAA.BBB.CCC";
  const kv = fakeKV({ [`bk:${ID}`]: JSON.stringify({ at: 123, size: blob.length, blob }) });
  const { status, body } = await read(await W.handleBackupGet(get(`id=${ID}`), envWith(kv)));
  assert.equal(status, 200);
  assert.equal(body.blob, blob);
  assert.equal(body.at, 123);
});

T("meta=1 answers the status line without shipping the payload", async () => {
  const kv = fakeKV({ [`bk:${ID}`]: JSON.stringify({ at: 123, size: 9, blob: "v1.A.B.C" }) });
  const { status, body } = await read(await W.handleBackupGet(get(`id=${ID}&meta=1`), envWith(kv)));
  assert.equal(status, 200);
  assert.equal(body.size, 9);
  assert.equal(body.blob, undefined);
});

T("prev=1 reaches the rotated copy", async () => {
  const kv = fakeKV({
    [`bk:${ID}`]: JSON.stringify({ at: 2, size: 1, blob: "new" }),
    [`bk:${ID}:prev`]: JSON.stringify({ at: 1, size: 1, blob: "old" }),
  });
  const { body } = await read(await W.handleBackupGet(get(`id=${ID}&prev=1`), envWith(kv)));
  assert.equal(body.blob, "old");
});

T("an unknown id is a 404, and a malformed one a 400", async () => {
  const kv = fakeKV();
  assert.equal((await read(await W.handleBackupGet(get(`id=${ID}`), envWith(kv)))).status, 404);
  assert.equal((await read(await W.handleBackupGet(get("id=NOPE"), envWith(kv)))).status, 400);
  assert.equal((await read(await W.handleBackupGet(get(""), envWith(kv)))).status, 400);
});

T("a corrupt record reads as a server error, not as an empty backup", async () => {
  // Silently returning "no backup" here would send someone hunting for a
  // lost recovery code when the data is actually still there.
  const kv = fakeKV({ [`bk:${ID}`]: "{{{" });
  const { status } = await read(await W.handleBackupGet(get(`id=${ID}`), envWith(kv)));
  assert.equal(status, 500);
});

T("responses carry CORS, or the browser never sees them", async () => {
  const res = await W.handleBackupGet(get(`id=${ID}`), envWith(fakeKV()));
  assert.equal(res.headers.get("Access-Control-Allow-Origin"), "*");
});

// ---- run -------------------------------------------------------------------

for (const [name, fn] of tests) {
  try { await fn(); pass++; console.log("  ✓", name); }
  catch (e) { failed++; console.log("  ✗", name, "\n     ", e && e.message); }
}
console.log(`  backup.test.mjs — ${pass} passed${failed ? `, ${failed} FAILED` : ""}`);
if (failed) process.exitCode = 1;
