// rngdle.test.mjs
//
// The RNGdle badge engine (v45) -- the scoring half, shared by every RNGdle
// surface in the app. The game built on top of it is tested in infinite.test.mjs.
//
// This one is unusual: the badge table carries the TRUE number of rolls that
// earn each badge, measured by sweeping all 1,000,001 possible numbers. That
// makes the table a test oracle. Run with RNG_FULL=1 to re-derive every count
// from the rules (about 100s); the default run checks a deterministic sample,
// the published worked example and the percentile ladder, in about a second.
//
// Because the counts are ground truth, a wrong rule cannot pass quietly --
// which is the whole reason the figures are in the file at all.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

// The engine is one contiguous region of app.jsx: everything from RNG_MAX up
// to where the RNGdle Infinite port begins (that half has its own file). Slicing the region rather than
// 60 individual names keeps this honest -- it is the shipped source, verbatim.
function region(fromMarker, toMarker) {
  const a = SRC.indexOf(fromMarker);
  const b = SRC.indexOf(toMarker);
  if (a < 0 || b < 0 || b <= a) throw new Error(`region not found: ${fromMarker}`);
  return SRC.slice(a, b);
}

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
  } else i = SRC.indexOf("=", m.index) + 1;

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

const ENGINE = region("const RNG_MAX = 1000000;", "const RNGI_PRODUCT_ROWS");

const EXPORTS = [
  "RNG_MAX", "RNG_BADGES", "RNG_BY_ID", "RNG_BANDS", "RNG_CURVE", "RNG_RULES",
  "RNG_TIER_NAMES", "RNG_TIER_ORDER", "RNG_BADGE_ROWS",
  "rngScore", "rngBand", "rngPercentile", "rngGroup", "rngPrimes",
];
const M = new Function(`${ENGINE}\nreturn {${EXPORTS.join(",")}};`)();

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- the table itself ------------------------------------------------------

T("233 badges, every one with a rule", () => {
  assert.equal(M.RNG_BADGES.length, 233);
  const missing = M.RNG_BADGES.filter((b) => typeof M.RNG_RULES[b.id] !== "function");
  assert.deepEqual(missing.map((b) => b.id), [], "badges with no rule");
});

T("no rule without a badge", () => {
  const ids = new Set(M.RNG_BADGES.map((b) => b.id));
  const orphans = Object.keys(M.RNG_RULES).filter((k) => !ids.has(k));
  assert.deepEqual(orphans, []);
});

T("39 families, 168 badges inside them", () => {
  const fams = new Set(M.RNG_BADGES.filter((b) => b.family).map((b) => b.family));
  assert.equal(fams.size, 39);
  assert.equal(M.RNG_BADGES.filter((b) => b.family).length, 168);
});

T("every badge is priced at roughly 100 EP a roll", () => {
  // the game's own pricing rule: ep * odds ~= 100. A badge that drifts far
  // from it is almost always a typo in the table rather than a design choice.
  const off = M.RNG_BADGES.filter((b) => {
    const ev = b.ep * b.odds;
    return ev < 60 || ev > 180;
  });
  assert.ok(off.length <= 10, `${off.length} badges off the 100 EP line: ${off.slice(0, 5).map((b) => b.id)}`);
});

T("tiers agree with the odds they claim", () => {
  const band = (p) => (p > 0.1 ? "c" : p > 0.01 ? "u" : p > 0.001 ? "r" : p > 0.0001 ? "e" : p > 0.00001 ? "a" : "m");
  const wrong = M.RNG_BADGES.filter((b) => band(b.odds) !== b.tier);
  assert.ok(wrong.length <= 4, `tier/odds mismatch: ${wrong.map((b) => `${b.id}(${b.tier})`).join(", ")}`);
});

// ---- the published worked example -----------------------------------------

T("1,000,000 scores exactly what the game says it does", () => {
  const r = M.rngScore(1000000);
  assert.equal(r.earned.length, 39, "badges earned");
  assert.equal(r.paid.length, 22, "badges paid");
  assert.equal(r.ep, 131081274, "total EP");
  assert.equal(r.band.key, "mythic");
});

T("the family rule silences the losers, it does not delete them", () => {
  const r = M.rngScore(1000000);
  const names = r.outranked.map((b) => b.label);
  assert.ok(names.includes("Deep Void"), "Deep Void should be outranked, not missing");
  assert.ok(names.includes("3rd Power"));
  assert.equal(r.earned.length, r.paid.length + r.outranked.length);
  // and the EP total must ignore them
  assert.equal(r.ep, r.paid.reduce((a, b) => a + b.ep, 0));
});

T("one family pays once", () => {
  const r = M.rngScore(777);
  const fams = r.paid.filter((b) => b.family).map((b) => b.family);
  assert.equal(new Set(fams).size, fams.length, "two badges from one family both paid");
});

// ---- individual rules that have bitten before ------------------------------

const earns = (n, id) => M.rngScore(n).earned.some((b) => b.id === id);

T("Three of a Kind means exactly three, not three-or-more", () => {
  // 111222 has two triples; 111122 has a quad and must NOT be a trip
  assert.ok(earns(111222, "TRIPS"));
  assert.ok(!earns(111122, "TRIPS"));
  assert.ok(earns(111122, "QUADS"));
});

T("consecutive-integer badges need one token of 2+ digits", () => {
  // "12" is 1 then 2, but both tokens are single digits, so it does not count
  assert.ok(!earns(12, "CONSEC_PAIR_EXACT"));
  assert.ok(earns(1011, "CONSEC_PAIR_EXACT"), "10|11 should split");
  assert.ok(earns(1110, "CONSEC_PAIR_EXACT"), "11|10 counts in either order");
});

T("a progression is not just a sequence", () => {
  // step +1 is a Sequence badge's job, so Metronome refuses it
  assert.ok(!earns(123, "ARITHMETIC"));
  assert.ok(earns(147, "ARITHMETIC"), "1,4,7");
  assert.ok(earns(124, "GEOMETRIC"), "1,2,4");
});

T("Hills needs four digits and no flat stretches", () => {
  assert.ok(!earns(121, "HILLS"), "three digits is not enough");
  assert.ok(earns(1212, "HILLS"));
  assert.ok(!earns(1122, "HILLS"));
  assert.ok(earns(112212, "DUNES"), "Dunes collapses the flats first");
});

T("Spy excludes 1 and 2 the way the game does", () => {
  assert.ok(!earns(1, "SPY"));
  assert.ok(!earns(2, "SPY"));
  assert.ok(earns(123, "SPY"), "1+2+3 = 1*2*3");
});

T("Rhyme needs the repeat to not overlap itself", () => {
  assert.ok(!earns(111, "RHYME"));
  assert.ok(earns(1212, "RHYME"));
});

T("divisibility badges skip zero, parity does not", () => {
  assert.ok(!earns(0, "LUCKY_SEVEN_DIV"));
  assert.ok(!earns(0, "ELEVEN"));
  assert.ok(earns(0, "EVEN"));
});

T("single digits are their own badge and their own family", () => {
  const r = M.rngScore(7);
  assert.ok(r.earned.some((b) => b.id === "DIGIT_SEVEN"));
  assert.ok(r.earned.some((b) => b.id === "ONE_DIGIT"));
  // both sit in SINGLE_DIGIT, so only the dearer one pays
  assert.equal(r.paid.filter((b) => b.family === "SINGLE_DIGIT").length, 1);
});

T("the famous cyclic number is unremarkable, as advertised", () => {
  const r = M.rngScore(142857);
  assert.ok(r.percentile > 40 && r.percentile < 90, `142857 landed at ${r.percentile}`);
});

// ---- the percentile ladder -------------------------------------------------

T("band thresholds sit where the game puts them", () => {
  const want = { mythic: 162292, anomaly: 35469, epic: 22293, rare: 10074, uncommon: 5802, common: 2087, trash: 0 };
  for (const b of M.RNG_BANDS) assert.equal(b.min, want[b.key], b.key);
});

T("a threshold scores as its own band, one EP under scores as the one below", () => {
  for (let i = 0; i < M.RNG_BANDS.length - 1; i++) {
    const b = M.RNG_BANDS[i];
    assert.equal(M.rngBand(b.min).key, b.key);
    assert.equal(M.rngBand(b.min - 1).key, M.RNG_BANDS[i + 1].key);
  }
});

T("the percentile curve only ever goes up", () => {
  let lastEp = -Infinity, lastPct = -Infinity;
  for (const [ep, pct] of M.RNG_CURVE) {
    assert.ok(ep > lastEp, `EP went backwards at ${ep}`);
    assert.ok(pct >= lastPct, `percentile went backwards at ${ep}`);
    lastEp = ep; lastPct = pct;
  }
  assert.equal(M.RNG_CURVE[0][1], 0);
  assert.equal(M.RNG_CURVE[M.RNG_CURVE.length - 1][1], 100);
});

T("the curve puts each band threshold at its advertised percentile", () => {
  const want = { common: 1, uncommon: 50, rare: 75, epic: 90, anomaly: 95, mythic: 99 };
  for (const [key, pct] of Object.entries(want)) {
    const band = M.RNG_BANDS.find((b) => b.key === key);
    const got = M.rngPercentile(band.min);
    assert.ok(Math.abs(got - pct) < 0.5, `${key}: curve says ${got.toFixed(2)}, ladder says ${pct}`);
  }
});

T("the floor really is a floor -- there is no zero roll", () => {
  // the game's claim: the lowest total it can hand out is 1,759 EP
  assert.equal(M.RNG_CURVE[0][0], 1759);
  let worst = Infinity;
  for (let n = 0; n <= 20000; n++) worst = Math.min(worst, M.rngScore(n).ep);
  assert.ok(worst >= 1759, `found a roll under the floor: ${worst}`);
});

// ---- formatting ------------------------------------------------------------

T("numbers are grouped in threes", () => {
  assert.equal(M.rngGroup(0), "0");
  assert.equal(M.rngGroup(999), "999");
  assert.equal(M.rngGroup(1000), "1,000");
  assert.equal(M.rngGroup(1000000), "1,000,000");
  assert.equal(M.rngGroup(131081274), "131,081,274");
});

// ---- the sweep -------------------------------------------------------------

T("a fixed sample of 3,000 rolls scores exactly as it did when pinned", () => {
  // A cheap stand-in for the full sweep: any rule change that alters a single
  // badge on any of these 3,000 numbers moves both figures.
  let hash = 0, sum = 0, x = 123456789;
  for (let i = 0; i < 3000; i++) {
    x = (Math.imul(x, 1103515245) + 12345) >>> 0;
    const r = M.rngScore(x % 1000001);
    sum += r.ep;
    hash = (Math.imul(hash ^ r.ep, 2654435761) + r.paid.length) >>> 0;
  }
  assert.equal(sum, 271660384, "sample EP total drifted");
  assert.equal(hash, 1351336911, "sample fingerprint drifted");
});

if (process.env.RNG_FULL === "1") {
  T("every published badge count is reproduced by its rule (full sweep)", () => {
    const ids = M.RNG_BADGES.map((b) => b.id);
    const fns = ids.map((id) => M.RNG_RULES[id]);
    const got = new Array(ids.length).fill(0);
    for (let n = 0; n <= 1000000; n++) {
      const s = String(n);
      for (let k = 0; k < fns.length; k++) if (fns[k](n, s)) got[k]++;
    }
    const bad = [];
    M.RNG_BADGES.forEach((b, i) => { if (got[i] !== b.count) bad.push(`${b.id}: ${got[i]} != ${b.count}`); });
    assert.deepEqual(bad, []);
  });
}

for (const [name, fn] of tests) {
  try { fn(); pass++; }
  catch (e) { failed++; console.error(`FAIL  ${name}\n      ${e.message}`); }
}
console.log(`rngdle.test.mjs: ${pass} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
