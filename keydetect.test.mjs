// keydetect.test.mjs
//
// Client-side key detection and masking, plus the XP/level maths and the
// radar's value mapping.
//
// The app is one large JSX file that cannot be imported into node, so the
// pieces under test are lifted out of the source and evaluated. Brittle to
// renames on purpose: a rename fails loudly instead of testing nothing.
//
// The client↔worker agreement check is the important one here. The two provider
// tables are maintained separately, and if they disagree the app either offers
// a provider the worker cannot route, or rejects a key the worker would accept.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));
const APP = readFileSync(join(here, "app.jsx"), "utf8");
const WORKER = readFileSync(join(here, "worker", "src", "index.js"), "utf8");

function sliceFrom(SRC, name) {
  const patterns = [
    new RegExp(`^const ${name} = `, "m"),
    new RegExp(`^function ${name}\\(`, "m"),
    new RegExp(`^async function ${name}\\(`, "m"),
  ];
  let start = -1, isConst = false;
  for (const re of patterns) {
    const m = SRC.match(re);
    if (m) { start = m.index; isConst = m[0].startsWith("const"); break; }
  }
  assert.ok(start >= 0, `could not lift "${name}" — was it renamed?`);

  let i;
  if (isConst) {
    i = SRC.indexOf("=", start) + 1;
  } else {
    let d = 0;
    i = SRC.indexOf("(", start);
    for (; i < SRC.length; i++) {
      if (SRC[i] === "(") d++;
      else if (SRC[i] === ")") { d--; if (d === 0) { i++; break; } }
    }
  }

  let depth = 0, seen = false, inStr = null, inLine = false, inBlock = false;
  for (; i < SRC.length; i++) {
    const c = SRC[i], p = SRC[i - 1];
    if (inLine) { if (c === "\n") inLine = false; continue; }
    if (inBlock) { if (c === "/" && p === "*") inBlock = false; continue; }
    if (inStr) { if (c === inStr && p !== "\\") inStr = null; continue; }
    if (c === "/" && SRC[i + 1] === "/") { inLine = true; continue; }
    if (c === "/" && SRC[i + 1] === "*") { inBlock = true; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{" || c === "[") { depth++; seen = true; continue; }
    if (c === "}" || c === "]") {
      depth--;
      if (seen && depth === 0) {
        const end = SRC.indexOf("\n", i);
        return SRC.slice(start, end === -1 ? SRC.length : end);
      }
    }
  }
  throw new Error(`unbalanced braces while lifting "${name}"`);
}

const liftApp = (names) =>
  new Function([...names.map((n) => sliceFrom(APP, n)), `return { ${names.join(", ")} };`].join("\n\n"))();
const liftWorker = (names) =>
  new Function([...names.map((n) => sliceFrom(WORKER, n)), `return { ${names.join(", ")} };`].join("\n\n"))();

const { KEY_PROVIDERS, providerOf } = liftApp(["KEY_PROVIDERS", "providerOf"]);
const { PROVIDERS, PROVIDER_ORDER, providerFor } =
  liftWorker(["PROVIDERS", "PROVIDER_ORDER", "providerFor"]);

let passed = 0;
const test = (name, fn) => {
  try { fn(); passed++; }
  catch (err) { console.error(`\n  ✗ ${name}\n    ${err.message}\n`); process.exitCode = 1; }
};

const SAMPLES = {
  gemini: "AIzaSyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  groq: "gsk_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  cerebras: "csk-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  nvidia: "nvapi-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  openrouter: "sk-or-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  openai: "sk-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
};

// ------------------------------------------------------- client detection --

test("the client detects every sniffable provider", () => {
  for (const [want, key] of Object.entries(SAMPLES)) {
    const got = providerOf(key);
    assert.ok(got, `${want} key detected as nothing`);
    assert.equal(got.id, want);
  }
});

test("the client understands the mistral: tag", () => {
  const got = providerOf("mistral:abc123");
  assert.ok(got, "mistral: tag not detected");
  assert.equal(got.id, "mistral");
});

test("garbage is detected as nothing", () => {
  for (const junk of ["", "  ", "hello", "xyz-123"]) {
    assert.equal(providerOf(junk), null, `"${junk}" should not match`);
  }
});

test("whitespace around a pasted key is tolerated", () => {
  // keys are pasted from a browser and routinely carry a trailing newline
  assert.equal(providerOf(`  ${SAMPLES.groq}\n`)?.id, "groq");
});

// ------------------------------------------------ client ↔ worker agreement --

test("client and worker expose the same provider ids", () => {
  const client = new Set(KEY_PROVIDERS.map((p) => p.id));
  const worker = new Set(Object.keys(PROVIDERS));
  const clientOnly = [...client].filter((id) => !worker.has(id));
  const workerOnly = [...worker].filter((id) => !client.has(id));
  assert.deepEqual(clientOnly, [], `client offers providers the worker cannot route: ${clientOnly}`);
  assert.deepEqual(workerOnly, [], `worker routes providers the client never offers: ${workerOnly}`);
});

test("client and worker agree on which provider each key belongs to", () => {
  // the real failure this guards: the app says "Groq detected", the worker
  // sends it somewhere else, and the user sees an unexplained 401
  for (const key of Object.values(SAMPLES)) {
    const c = providerOf(key);
    const w = providerFor(key);
    assert.ok(c && w, `no agreement possible for ${key.slice(0, 8)}…`);
    assert.equal(c.id, w.provider.id,
      `client says ${c.id}, worker says ${w.provider.id} for ${key.slice(0, 8)}…`);
  }
});

test("both sides agree mistral has no sniffable prefix", () => {
  assert.equal(KEY_PROVIDERS.find((p) => p.id === "mistral").test("anything"), false);
  assert.equal(PROVIDERS.mistral.test("anything"), false);
});

test("GitHub Models is absent from both tables", () => {
  // retired 2026-07-30; its 410 responses halted the whole key pool
  assert.equal(KEY_PROVIDERS.find((p) => p.id === "github"), undefined);
  assert.equal(PROVIDERS.github, undefined);
  assert.ok(!/ghp_/.test(APP), "app.jsx still references ghp_ keys");
});

// ------------------------------------------------------------------ masking --

test("no provider entry leaks a full key into its label", () => {
  for (const p of KEY_PROVIDERS) {
    assert.ok(!/AIza|gsk_|csk-|nvapi-/.test(p.label || ""), `${p.id} label looks like a key`);
  }
});

test("the AI key is never added to the export payload", () => {
  // R12: the key lives only on the device. Backups get shared between people.
  const m = APP.match(/const payload = \{[\s\S]{0,600}?\}/);
  assert.ok(m, "could not find the export payload");
  assert.ok(!/aikey|apiKey|aiKeys/i.test(m[0]), "export payload mentions an AI key");
});

// ------------------------------------------------------------- XP + levels --

const { cumulativeXPForLevel, levelFromXP, computeTotalXP, computeSpendableXP, computeAreaXP } =
  liftApp(["cumulativeXPForLevel", "levelFromXP", "computeTotalXP", "computeSpendableXP", "computeAreaXP"]);

const habit = (xp, days, area = "work") => ({ xp, area, history: Array(days).fill("2026-01-01") });

test("level 2 still unlocks at exactly 100 XP", () => {
  // an invariant deliberately preserved across the v22 curve change
  assert.equal(cumulativeXPForLevel(2), 100);
  assert.equal(levelFromXP(100).level, 2);
  assert.equal(levelFromXP(99).level, 1);
});

test("levelFromXP is the true inverse of cumulativeXPForLevel", () => {
  for (let lvl = 1; lvl <= 40; lvl++) {
    const at = cumulativeXPForLevel(lvl);
    assert.equal(levelFromXP(at).level, lvl, `XP ${at} should be exactly level ${lvl}`);
    assert.equal(levelFromXP(at + 1).level, lvl, `just past the boundary is still ${lvl}`);
    if (lvl > 1) assert.equal(levelFromXP(at - 1).level, lvl - 1, `just below is ${lvl - 1}`);
  }
});

test("progress into a level never exceeds its span", () => {
  for (const xp of [0, 1, 99, 100, 375, 1000, 5000, 19000]) {
    const { into, span } = levelFromXP(xp);
    assert.ok(into >= 0, `into went negative at ${xp}`);
    assert.ok(into < span, `into (${into}) >= span (${span}) at ${xp} XP`);
  }
});

test("spending XP on rewards does NOT reduce level progress", () => {
  // THE v26 BUG: computeTotalXP subtracted reward spending, so claiming a
  // reward could push a real profile to a negative total and demote it to
  // level 1. v27 split the two pots; this keeps them split.
  const good = [habit(50, 4)];   // 200 earned
  const bad = [habit(20, 2)];    //  40 lost
  const rewards = [{ cost: 150, claimed: ["2026-01-01"] }];
  const total = computeTotalXP(good, bad);
  assert.equal(total, 160, "level XP must ignore spending");
  assert.equal(levelFromXP(total).level, 2);
  assert.equal(computeSpendableXP(good, bad, rewards), 10, "the wallet must reflect spending");
});

test("total XP is never negative", () => {
  const total = computeTotalXP([habit(10, 1)], [habit(500, 5)]);
  assert.ok(total >= 0, `computeTotalXP returned ${total}`);
  assert.equal(levelFromXP(total).level, 1);
});

test("the wallet is never negative", () => {
  const spendable = computeSpendableXP([habit(10, 1)], [], [{ cost: 9999, claimed: ["x"] }]);
  assert.ok(spendable >= 0, `computeSpendableXP returned ${spendable}`);
});

test("computeTotalXP takes no rewards argument", () => {
  // guards against reintroducing the v26 signature by accident
  assert.equal(computeTotalXP.length, 2, "computeTotalXP should accept exactly (good, bad)");
});

test("area XP may be negative", () => {
  // a life area where bad habits outweigh good is real, useful information --
  // clamping it to zero made a -280 area look identical to an untouched one
  const v = computeAreaXP("work", [habit(10, 1, "work")], [habit(100, 3, "work")]);
  assert.equal(v, -290);
});

test("area XP ignores habits from other areas", () => {
  const v = computeAreaXP("work", [habit(50, 2, "work"), habit(50, 2, "health")], []);
  assert.equal(v, 100);
});

// -------------------------------------------------------------- radar scale --

test("the radar maps values to a fixed ceiling, not to its own maximum", () => {
  // Self-normalising made the largest axis permanently touch the rim, so
  // logging more of your strongest habit visually shrank everything else.
  assert.ok(/maxValue={radarMax}/.test(APP),
    "RadarChart is not being given an explicit maxValue");
  assert.ok(/const radarMax = useMemo/.test(APP), "radarMax is not computed");
});

test("the radar does not clamp axis values at zero", () => {
  const m = APP.match(/const areaAxes = useMemo\([\s\S]*?\), \[/);
  assert.ok(m, "could not find areaAxes");
  assert.ok(!/Math\.max\(0, compute(Area|Sub)XP/.test(m[0]),
    "axis values are still clamped at 0, which hides negative areas");
});

console.log(`  keydetect.test.mjs — ${passed} passed`);
