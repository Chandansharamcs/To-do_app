// cloud.test.mjs
//
// Encrypted cloud backup + the service-worker update path (both v38).
//
// The interesting properties here are negative ones: the worker must not be
// able to read a backup, a wrong recovery code must fail loudly rather than
// return plausible rubbish, and the snapshot must not contain the code that
// decrypts it. Those are the ones asserted hardest.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

// Brace-matched slice out of the JSX source. Parens are not counted because
// a function would then end at its own signature; scalar consts have no
// braces at all, so they terminate at the first top-level semicolon.
function slice(name) {
  const fn = SRC.match(new RegExp("^(?:async )?function " + name + "\\(", "m"));
  const cn = SRC.match(new RegExp("^const " + name + "\\s*=", "m"));
  const m = fn || cn;
  if (!m) throw new Error("not found in app.jsx: " + name);

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
  "STORAGE_KEY_CLOUD", "STORAGE_KEY_DEVICE_ID", "STORAGE_KEY_AI_KEY", "STORAGE_KEY_AI_KEYS",
  "CLOUD_ALPHABET", "CLOUD_ID_LEN", "CLOUD_SECRET_LEN", "CLOUD_ROUNDS", "CLOUD_MIN_GAP_MS",
  "SENSITIVE_KEYS",
  "randomToken", "makeRecoveryKey", "parseRecoveryKey", "shouldPushBackup",
  "bytesToB64", "b64ToBytes", "deriveCloudKey", "encryptBackup", "decryptBackup",
  "collectStore", "buildCloudSnapshot", "applyRestoredStore",
  "decideUpdateAction", "isTyping", "fmtAgo", "fmtSize",
];

const M = new Function(
  [...NAMES.map(slice), `return {${NAMES.join(",")}};`].join("\n\n")
)();

// localStorage stand-in: index-ordered like the real one, because
// collectStore walks it by index rather than by Object.keys.
function fakeLS(obj) {
  const m = new Map(Object.entries(obj || {}));
  return {
    get length() { return m.size; },
    key: (i) => [...m.keys()][i] ?? null,
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => { m.set(k, String(v)); },
    removeItem: (k) => { m.delete(k); },
    _map: m,
  };
}

let pass = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- recovery code ---------------------------------------------------------

T("recovery code has the documented shape", () => {
  const k = M.makeRecoveryKey();
  assert.match(k, /^tsh-[0-9a-z]{10}-[0-9a-z]{16}$/);
});

T("recovery code uses only the unambiguous alphabet", () => {
  // 40 draws over 26 characters each: i/l/o/u would show up fast if the
  // alphabet ever regressed to plain base36.
  for (let i = 0; i < 40; i++) {
    const body = M.makeRecoveryKey().slice(4).replace("-", "");
    for (const ch of body) assert.ok(M.CLOUD_ALPHABET.includes(ch), `bad char ${ch}`);
  }
});

T("two codes are not the same code", () => {
  const seen = new Set();
  for (let i = 0; i < 50; i++) seen.add(M.makeRecoveryKey());
  assert.equal(seen.size, 50);
});

T("generated codes parse back", () => {
  const k = M.makeRecoveryKey();
  const p = M.parseRecoveryKey(k);
  assert.ok(p);
  assert.equal(`tsh-${p.id}-${p.secret}`, k);
});

T("parsing tolerates spaces and capitals", () => {
  const p = M.parseRecoveryKey("  TSH-ABCDEFGH23-2345678923456789  ");
  assert.deepEqual(p, { id: "abcdefgh23", secret: "2345678923456789" });
});

T("parsing fixes the classic misreads: i l -> 1, o -> 0", () => {
  const p = M.parseRecoveryKey("tsh-illo234567-oooo111122223333");
  assert.equal(p.id, "1110234567");
  assert.equal(p.secret, "0000111122223333");
});

T("junk is rejected rather than half-parsed", () => {
  assert.equal(M.parseRecoveryKey(""), null);
  assert.equal(M.parseRecoveryKey(null), null);
  assert.equal(M.parseRecoveryKey("hello"), null);
  assert.equal(M.parseRecoveryKey("tsh-tooshort-2345678923456789"), null);
  assert.equal(M.parseRecoveryKey("tsh-abcdefgh23-tooshort"), null);
  assert.equal(M.parseRecoveryKey("xyz-abcdefgh23-2345678923456789"), null);
});

// ---- push throttle ---------------------------------------------------------

T("never backed up -> due", () => {
  assert.equal(M.shouldPushBackup(0, 1000), true);
  assert.equal(M.shouldPushBackup(undefined, 1000), true);
  assert.equal(M.shouldPushBackup(null, 1000), true);
});

T("pushed ten minutes ago -> not due", () => {
  const now = 1_700_000_000_000;
  assert.equal(M.shouldPushBackup(now - 10 * 60 * 1000, now), false);
});

T("pushed just over an hour ago -> due", () => {
  const now = 1_700_000_000_000;
  assert.equal(M.shouldPushBackup(now - 61 * 60 * 1000, now), true);
  assert.equal(M.shouldPushBackup(now - M.CLOUD_MIN_GAP_MS, now), true);
});

T("a timestamp in the future does not wedge backups off forever", () => {
  const now = 1_700_000_000_000;
  assert.equal(M.shouldPushBackup(now + 86_400_000, now), true);
});

// ---- base64 ----------------------------------------------------------------

T("base64 round-trips past the apply() argument limit", () => {
  // 100KB: String.fromCharCode.apply on one array this size throws
  // "too many arguments" in some engines, which is why it is chunked.
  const bytes = new Uint8Array(100_000);
  for (let i = 0; i < bytes.length; i++) bytes[i] = i % 256;
  const back = M.b64ToBytes(M.bytesToB64(bytes));
  assert.equal(back.length, bytes.length);
  assert.deepEqual([...back.slice(0, 300)], [...bytes.slice(0, 300)]);
  assert.deepEqual([...back.slice(-300)], [...bytes.slice(-300)]);
});

// ---- encryption ------------------------------------------------------------

const SECRET = "2345678923456789";
const PLAIN = JSON.stringify({ app: "tasks.sh", store: { "tasksh.habits.v1": "[1,2,3]" } });

T("encrypt then decrypt returns the original", async () => {
  const blob = await M.encryptBackup(PLAIN, SECRET);
  assert.equal(await M.decryptBackup(blob, SECRET), PLAIN);
});

T("the blob is versioned and four-part", async () => {
  const blob = await M.encryptBackup(PLAIN, SECRET);
  const parts = blob.split(".");
  assert.equal(parts.length, 4);
  assert.equal(parts[0], "v1");
});

T("no plaintext survives into the blob", async () => {
  const blob = await M.encryptBackup(PLAIN, SECRET);
  // the worker stores this string verbatim, so anything readable here is
  // readable by anyone who guesses a ten-character id
  assert.ok(!blob.includes("tasksh"));
  assert.ok(!blob.includes("habits"));
  assert.ok(!blob.includes("tasks.sh"));
});

T("the same data twice gives different ciphertext", async () => {
  const a = await M.encryptBackup(PLAIN, SECRET);
  const b = await M.encryptBackup(PLAIN, SECRET);
  assert.notEqual(a, b); // fresh salt and IV each time
});

T("a wrong code fails loudly", async () => {
  const blob = await M.encryptBackup(PLAIN, SECRET);
  await assert.rejects(() => M.decryptBackup(blob, "2345678923456788"), /wrong recovery code/);
});

T("tampered ciphertext is rejected, not decrypted", async () => {
  const blob = await M.encryptBackup(PLAIN, SECRET);
  const parts = blob.split(".");
  const bytes = M.b64ToBytes(parts[3]);
  bytes[5] ^= 0xff;                       // flip one byte
  parts[3] = M.bytesToB64(bytes);
  await assert.rejects(() => M.decryptBackup(parts.join("."), SECRET), /wrong recovery code/);
});

T("an unknown format is named as such", async () => {
  await assert.rejects(() => M.decryptBackup("v9.a.b.c", SECRET), /unrecognised backup format/);
  await assert.rejects(() => M.decryptBackup("garbage", SECRET), /unrecognised backup format/);
});

// ---- what actually gets backed up -----------------------------------------

const SAMPLE = {
  "tasksh.habits.v1": "[1]",
  "tasksh.routines.v1": "[2]",
  "tasksh.aikey.v1": "AQ.secret",
  "tasksh.aikeys.v1": "[\"AQ.secret2\"]",
  "tasksh.deviceid.v1": "dev_abc",
  "tasksh.cloud.v1": "{\"id\":\"abcdefgh23\",\"secret\":\"2345678923456789\"}",
  "unrelated.thing": "nope",
};

T("the sweep takes tasksh keys and nothing else", () => {
  globalThis.localStorage = fakeLS(SAMPLE);
  const store = M.collectStore(false, []);
  assert.ok("tasksh.habits.v1" in store);
  assert.ok(!("unrelated.thing" in store));
});

T("a plain export leaves API keys and the recovery code behind", () => {
  globalThis.localStorage = fakeLS(SAMPLE);
  const store = M.collectStore(false, [M.STORAGE_KEY_DEVICE_ID]);
  assert.ok(!("tasksh.aikey.v1" in store));
  assert.ok(!("tasksh.aikeys.v1" in store));
  assert.ok(!("tasksh.cloud.v1" in store));
  assert.ok(!("tasksh.deviceid.v1" in store));
});

T("a full export carries the keys", () => {
  globalThis.localStorage = fakeLS(SAMPLE);
  const store = M.collectStore(true, [M.STORAGE_KEY_DEVICE_ID]);
  assert.equal(store["tasksh.aikey.v1"], "AQ.secret");
});

T("the cloud snapshot never contains its own decryption key", () => {
  globalThis.localStorage = fakeLS(SAMPLE);
  const snap = JSON.parse(M.buildCloudSnapshot());
  assert.equal(snap.containsKeys, true);
  assert.equal(snap.store["tasksh.aikey.v1"], "AQ.secret");   // keys ride along
  assert.ok(!("tasksh.cloud.v1" in snap.store));              // the code does not
  assert.ok(!("tasksh.deviceid.v1" in snap.store));
});

T("restore writes the data back but not identity or credentials", () => {
  const ls = fakeLS({});
  globalThis.localStorage = ls;
  const written = M.applyRestoredStore({
    "tasksh.habits.v1": "[1]",
    "tasksh.deviceid.v1": "dev_from_old_phone",
    "tasksh.cloud.v1": "{}",
    "junk": "x",
  });
  assert.equal(written, 1);
  assert.equal(ls.getItem("tasksh.habits.v1"), "[1]");
  assert.equal(ls.getItem("tasksh.deviceid.v1"), null);
  assert.equal(ls.getItem("tasksh.cloud.v1"), null);
});

// ---- update decision -------------------------------------------------------

T("hidden and idle: swap the build immediately", () => {
  assert.equal(M.decideUpdateAction(true, false, true), "reload");
});

T("hidden but mid-typing: ask instead", () => {
  assert.equal(M.decideUpdateAction(true, true, true), "prompt");
});

T("visible: never reload underneath the user", () => {
  assert.equal(M.decideUpdateAction(false, false, true), "prompt");
  assert.equal(M.decideUpdateAction(false, true, true), "prompt");
});

T("a first install is not an update", () => {
  // controllerchange also fires when a worker claims a page that had none.
  // Treating that as an update greets every new install with "new build
  // ready" and, if the app happens to be backgrounded, reloads it on sight.
  assert.equal(M.decideUpdateAction(false, false, false), "ignore");
  assert.equal(M.decideUpdateAction(true, false, false), "ignore");
});

T("typing detection covers inputs, textareas and rich text", () => {
  assert.equal(M.isTyping({ activeElement: { tagName: "INPUT" } }), true);
  assert.equal(M.isTyping({ activeElement: { tagName: "TEXTAREA" } }), true);
  assert.equal(M.isTyping({ activeElement: { tagName: "DIV", isContentEditable: true } }), true);
  assert.equal(M.isTyping({ activeElement: { tagName: "BUTTON" } }), false);
  assert.equal(M.isTyping({ activeElement: null }), false);
  assert.equal(M.isTyping(null), false);
});

// ---- display helpers -------------------------------------------------------

T("relative times read like a human wrote them", () => {
  const now = 1_700_000_000_000;
  assert.equal(M.fmtAgo(0, now), "never");
  assert.equal(M.fmtAgo(now - 5_000, now), "just now");
  assert.equal(M.fmtAgo(now - 5 * 60_000, now), "5m ago");
  assert.equal(M.fmtAgo(now - 3 * 3_600_000, now), "3h ago");
  assert.equal(M.fmtAgo(now - 2 * 86_400_000, now), "2d ago");
});

T("sizes are readable at a glance", () => {
  assert.equal(M.fmtSize(0), "0 B");
  assert.equal(M.fmtSize(512), "512 B");
  assert.equal(M.fmtSize(62_000), "60.5 KB");
});

// ---- run -------------------------------------------------------------------

let failed = 0;
for (const [name, fn] of tests) {
  try {
    await fn();
    pass++;
    console.log("  ✓", name);
  } catch (e) {
    failed++;
    console.log("  ✗", name, "\n     ", e && e.message);
  }
}
console.log(`  cloud.test.mjs — ${pass} passed${failed ? `, ${failed} FAILED` : ""}`);
if (failed) process.exitCode = 1;
