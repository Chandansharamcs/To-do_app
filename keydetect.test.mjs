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

// makeId lives in the app but is not worth lifting for these tests; the merge
// only needs it to mint a fresh id when two saves collide.
const liftApp = (names) =>
  new Function("makeId",
    [...names.map((n) => sliceFrom(APP, n)), `return { ${names.join(", ")} };`].join("\n\n"),
  )(() => Math.floor(Math.random() * 1e15) + 1e15);
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

test("the client accepts the new AQ. Gemini key format", () => {
  // Google moved AI Studio from "Standard" keys (AIza…) to "Auth" keys
  // (AQ.Ab…) around June 2026; unrestricted AIza keys began being rejected
  // 2026-06-19 and the format is scheduled to stop working in September 2026.
  // Accepting only AIza would lock new users out of Gemini entirely.
  const got = providerOf("AQ." + "Ab" + "FAKE");
  assert.ok(got, "an AQ. key was not detected at all");
  assert.equal(got.id, "gemini");
});

test("the old AIza format still works", () => {
  // they keep working until September; breaking them early would strand
  // anyone whose existing key is still valid
  assert.equal(providerOf(SAMPLES.gemini)?.id, "gemini");
});

test("AQ. is not mistaken for another provider", () => {
  const w = providerFor("AQ." + "Ab" + "FAKE");
  assert.ok(w, "worker does not route AQ. keys");
  assert.equal(w.provider.id, "gemini");
  assert.equal(w.provider.kind, "gemini",
    "AQ. keys are rejected on OpenAI-compatible Bearer paths, so Gemini must " +
    "stay on the native endpoint");
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

test("the default export excludes AI keys", () => {
  // R12 relaxed in v34 at the user's explicit request: keys CAN be exported,
  // but only through a separate opt-in button. The default path -- the
  // titlebar icon, the one people actually tap -- must still omit them,
  // because that is the file that gets shared between devices and people.
  assert.ok(/const SENSITIVE_KEYS = \[STORAGE_KEY_AI_KEY, STORAGE_KEY_AI_KEYS\]/.test(APP),
    "SENSITIVE_KEYS list is missing");
  assert.ok(/if \(!full && SENSITIVE_KEYS\.includes\(k\)\) continue;/.test(APP),
    "the export no longer skips sensitive keys when full=false");
  assert.ok(/exportData\(false\)/.test(APP), "no plain export path");
});

test("including keys requires an explicit opt-in", () => {
  // one tap must not be enough -- the button arms first, then confirms
  // the titlebar button opens a chooser rather than exporting silently
  assert.ok(/setBackupAsk\(true\)/.test(APP), "export button does not open the popup");
  assert.ok(/export with API keys/.test(APP), "no opt-in export choice");
  assert.ok(/makes this file a credential/.test(APP), "no warning shown before exporting keys");
});

test("the backup sweeps localStorage rather than naming keys", () => {
  // THE v33 BUG: export listed 8 keys by hand and silently dropped the other
  // 15 -- edited sub-area tags, achievements, wallet, pet, links, themes.
  // A list that must be updated whenever a feature adds a key will be wrong.
  assert.ok(/localStorage\.key\(i\)/.test(APP), "export does not iterate localStorage");
  assert.ok(/k\.startsWith\("tasksh\."\)/.test(APP), "export does not filter by prefix");
  assert.ok(/parsed\.store/.test(APP), "import cannot restore a whole-store backup");
});

test("deviceId is never exported or restored", () => {
  // cloning it would give two phones one push subscription and one widget feed
  const exp = APP.slice(APP.indexOf("const exportData"), APP.indexOf("const triggerImport"));
  assert.ok(/k === STORAGE_KEY_DEVICE_ID\) continue/.test(exp), "export copies the device id");
  const imp = APP.slice(APP.indexOf("const handleImportFile"), APP.indexOf("const handleImportFile") + 3000);
  assert.ok(/STORAGE_KEY_DEVICE_ID\) continue/.test(imp), "import overwrites the device id");
});

// ------------------------------------------------------------- XP + levels --

const {
  cumulativeXPForLevel, levelFromXP, computeTotalXP, computeSpendableXP, computeAreaXP,
  normaliseHistory, countHist, habitXP, habitPenalty, habitNet,
  habitDoneOn, habitSlipOn, markHabit, mergeHabitLists,
} = liftApp([
  "cumulativeXPForLevel", "levelFromXP", "computeTotalXP", "computeSpendableXP", "computeAreaXP",
  "normaliseHistory", "countHist", "habitXP", "habitPenalty", "habitNet",
  "habitDoneOn", "habitSlipOn", "markHabit", "mergeHabitLists",
]);

/** v35 habit: `done` completions, optional `slip` marks. */
const habit = (xp, days, area = "work", penalty = 0, slips = 0) => ({
  xp, penalty, area,
  history: [
    ...Array.from({ length: days }, (_, i) => ({ d: `2026-01-${String(i + 1).padStart(2, "0")}`, t: "done" })),
    ...Array.from({ length: slips }, (_, i) => ({ d: `2026-02-${String(i + 1).padStart(2, "0")}`, t: "slip" })),
  ],
});

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
  const habits = [habit(50, 4), habit(20, 0, "work", 20, 2)];   // 200 earned, 40 lost
  const rewards = [{ cost: 150, claimed: ["2026-01-01"] }];
  const total = computeTotalXP(habits);
  assert.equal(total, 160, "level XP must ignore spending");
  assert.equal(levelFromXP(total).level, 2);
  assert.equal(computeSpendableXP(habits, rewards), 10, "the wallet must reflect spending");
});

test("total XP is never negative", () => {
  const total = computeTotalXP([habit(10, 1), habit(0, 0, "work", 500, 5)]);
  assert.ok(total >= 0, `computeTotalXP returned ${total}`);
  assert.equal(levelFromXP(total).level, 1);
});

test("the wallet is never negative", () => {
  const spendable = computeSpendableXP([habit(10, 1)], [{ cost: 9999, claimed: ["x"] }]);
  assert.ok(spendable >= 0, `computeSpendableXP returned ${spendable}`);
});

test("computeTotalXP takes no rewards argument", () => {
  // guards against reintroducing the v26 signature by accident
  assert.equal(computeTotalXP.length, 1, "computeTotalXP should accept exactly (habits)");
});

test("area XP may be negative", () => {
  // a life area where bad habits outweigh good is real, useful information --
  // clamping it to zero made a -280 area look identical to an untouched one
  const v = computeAreaXP("work", [habit(10, 1, "work"), habit(0, 0, "work", 100, 3)]);
  assert.equal(v, -290);
});

test("area XP ignores habits from other areas", () => {
  const v = computeAreaXP("work", [habit(50, 2, "work"), habit(50, 2, "health")]);
  assert.equal(v, 100);
});

// ------------------------------------------------- v35 habit merge --------
//
// The merge folded goodHabits + badHabits into one list. It MUST be
// arithmetically identity-preserving: a user who upgrades cannot gain or lose
// a single point, or their level moves under them.

const v34Good = [
  { id: 1, label: "Deep Work", area: "work", xp: 50, history: ["2026-07-18", "2026-07-19", "2026-07-27", "2026-08-02"] },
  { id: 2, label: "Diet", area: "health", xp: 10, history: ["2026-07-19", "2026-07-27"] },
];
const v34Bad = [
  { id: 3, label: "Screen", area: "health", xp: 20, history: ["2026-07-31", "2026-08-01"] },
  { id: 4, label: "NOVEMBER", area: "self", xp: 70, history: ["2026-07-23"] },
];
const v34Total = Math.max(0,
  v34Good.reduce((s, h) => s + h.xp * h.history.length, 0) -
  v34Bad.reduce((s, h) => s + h.xp * h.history.length, 0));

test("merging good+bad preserves total XP exactly", () => {
  assert.equal(computeTotalXP(mergeHabitLists(v34Good, v34Bad)), v34Total);
});

test("merging preserves every area total", () => {
  const merged = mergeHabitLists(v34Good, v34Bad);
  for (const a of ["work", "fitness", "health", "self"]) {
    const before =
      v34Good.filter((h) => h.area === a).reduce((s, h) => s + h.xp * h.history.length, 0) -
      v34Bad.filter((h) => h.area === a).reduce((s, h) => s + h.xp * h.history.length, 0);
    assert.equal(computeAreaXP(a, merged), before, `${a} drifted`);
  }
});

test("merging loses no habit and no history entry", () => {
  const merged = mergeHabitLists(v34Good, v34Bad);
  assert.equal(merged.length, v34Good.length + v34Bad.length);
  const before = [...v34Good, ...v34Bad].reduce((s, h) => s + h.history.length, 0);
  assert.equal(merged.reduce((s, h) => s + h.history.length, 0), before);
});

test("merging never produces two habits with the same id", () => {
  // THE BUG: goodHabits and badHabits numbered ids independently -- both seed
  // sets start at 1 -- so after concatenation "Deep Work" and "High Screen
  // Time" were both id 1. Every lookup is by id, so marking one marked BOTH,
  // and slipping a habit silently slipped an unrelated one.
  const merged = mergeHabitLists(
    [{ id: 1, label: "A", area: "work", xp: 10, history: [] },
     { id: 2, label: "B", area: "work", xp: 10, history: [] }],
    [{ id: 1, label: "C", area: "work", xp: 20, history: [] },
     { id: 2, label: "D", area: "work", xp: 20, history: [] }],
  );
  const ids = merged.map((h) => h.id);
  assert.equal(new Set(ids).size, ids.length, `duplicate ids: ${ids}`);
  assert.equal(merged.length, 4);
});

test("re-iding a collision does not change any XP", () => {
  const good = [{ id: 1, label: "A", area: "work", xp: 10, history: ["d1", "d2"] }];
  const bad = [{ id: 1, label: "C", area: "work", xp: 20, history: ["d3"] }];
  assert.equal(computeTotalXP(mergeHabitLists(good, bad)), Math.max(0, 20 - 20));
});

test("an ex-bad habit becomes penalty-only", () => {
  const nov = mergeHabitLists([], v34Bad).find((h) => h.label === "NOVEMBER");
  assert.equal(nov.xp, 0, "an ex-bad habit must not silently start earning XP");
  assert.equal(nov.penalty, 70);
  assert.ok(nov.history.every((e) => e.t === "slip"));
});

test("the migration is idempotent", () => {
  const once = mergeHabitLists(v34Good, v34Bad);
  assert.equal(computeTotalXP(mergeHabitLists(once, [])), v34Total);
});

test("v34 plain-string history still counts as done", () => {
  assert.equal(countHist({ history: ["2026-01-01", "2026-01-02"] }, "done"), 2);
  assert.equal(countHist({ history: ["2026-01-01"] }, "slip"), 0);
});

test("a day cannot be both done and slipped", () => {
  // "I did it and also didn't" is not a state the XP maths can price
  let h = { id: 1, xp: 50, penalty: 20, history: [] };
  h = markHabit(h, "2026-01-01", "done");
  h = markHabit(h, "2026-01-01", "slip");
  assert.equal(countHist(h, "done"), 0);
  assert.equal(countHist(h, "slip"), 1);
  assert.equal(habitNet(h), -20);
});

test("slipping a completed day and undoing restores the completion", () => {
  // Found in the browser suite: the first implementation dropped the day and
  // re-added it, so undo left the day BLANK rather than done -- a silent loss
  // of a completion and of the streak that depended on it.
  let h = { id: 1, xp: 40, penalty: 0, history: [{ d: "2026-08-17", t: "done" }] };
  assert.equal(habitNet(h), 40);

  h = markHabit(h, "2026-08-17", "slip");         // switch
  assert.ok(habitSlipOn(h, "2026-08-17"));
  assert.ok(!habitDoneOn(h, "2026-08-17"));

  h = markHabit(h, "2026-08-17", "done");         // switch back
  assert.ok(habitDoneOn(h, "2026-08-17"), "the completion did not come back");
  assert.equal(habitNet(h), 40, "XP did not return to where it started");
  assert.equal(normaliseHistory(h.history).length, 1, "the day was duplicated");
});

test("tapping the same mark twice clears it", () => {
  let h = { id: 1, xp: 50, penalty: 20, history: [] };
  h = markHabit(h, "2026-01-01", "done");
  h = markHabit(h, "2026-01-01", "done");
  assert.equal(h.history.length, 0);
  assert.equal(habitNet(h), 0);
});

test("reward and penalty are independent", () => {
  // skipping a workout should be allowed to cost less than doing it earns
  const h = { xp: 50, penalty: 5, history: [{ d: "a", t: "done" }, { d: "b", t: "slip" }] };
  assert.equal(habitNet(h), 45);
});

test("a habit with no penalty behaves exactly like a v34 good habit", () => {
  const h = { xp: 30, history: [{ d: "a", t: "done" }, { d: "b", t: "done" }] };
  assert.equal(habitPenalty(h), 0);
  assert.equal(habitNet(h), 60);
});

test("opposite pairing is stored on the habit", () => {
  // marking one done must mark its partner slipped -- wired in markToday
  assert.ok(/opposite: eOpp \|\| null/.test(APP), "edit does not save the pairing");
  assert.ok(/const partnerId = cur\.opposite/.test(APP), "markToday ignores the pairing");
});

test("both marks reach the UI", () => {
  assert.ok(/onMark\(habit\.id, "slip"\)/.test(APP), "no slip button");
  assert.ok(/onMark\(habit\.id, "done"\)/.test(APP), "no done button");
});

test("the bad-habits section is gone", () => {
  assert.ok(!/BAD-HABITS/.test(APP), "a separate bad-habits section still exists");
  assert.ok(!/function BadHabitCard/.test(APP), "BadHabitCard was not removed");
  assert.ok(/<span>HABITS<\/span>/.test(APP), "no merged habits section");
});

test("the AI key pool can be reordered", () => {
  // order decides which provider carries the traffic -- position 1 gets nearly all of it
  assert.ok(/function moveAIKey/.test(APP), "no reorder helper");
  assert.ok(/moveAIKey\(k, -1\)/.test(APP) && /moveAIKey\(k, 1\)/.test(APP), "no up/down controls");
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
