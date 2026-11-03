// penalty.test.mjs — v73
//
// The night is the only place in the app that takes points away, so it is the
// one place that has to be provably boring: same input, same charge, once.
//
// The engine is pure and takes its randomness as an argument, so these tests
// slice the real source out of app.jsx and run it in a bare Function scope --
// no React, no clock, no browser. Two things are proved here that the UI
// cannot prove: that a day is never charged twice, and that the catch-up
// window does not turn a week away from the app into a debt.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

let pass = 0;
const t = (n, f) => { try { f(); pass++; console.log("  ✓", n); } catch (e) { console.log("  ✗", n, "\n     ", e.message); process.exitCode = 1; } };

/** Slices a top-level function/const block out of app.jsx by brace matching. */
function slice(startMarker, endMarker) {
  const i = SRC.indexOf(startMarker);
  assert.ok(i >= 0, `missing ${startMarker}`);
  const j = SRC.indexOf(endMarker, i);
  assert.ok(j > i, `missing ${endMarker} after ${startMarker}`);
  return SRC.slice(i, j);
}

// ---------------------------------------------------------------- engine ----
const engine = slice("const STORAGE_KEY_PENALTY", "/** Cost per slip.");
const E = new Function(`${engine}; return { PENALTY_DEFAULTS, PENALTY_LEDGER_MAX, PENALTY_CATCHUP_DAYS, PENALTY_BOARDS_MAX, capBoards, penaltyForDay, penaltyApplyLedger, tagPenaltyTotal, penaltyDaysToSettle };`)();

const TAGS = [{ key: "body" }, { key: "mind" }, { key: "work" }, { key: "home" }];

t("defaults are the numbers he asked for", () => {
  assert.deepEqual(E.PENALTY_DEFAULTS, { on: true, routineMin: 10, routineFine: 10, questMin: 1, questFine: 50 });
});

t("fewer than 10 routines costs 10 on EVERY tag", () => {
  const acts = E.penaltyForDay({ day: "2026-11-01", routinesDone: 7, questsDone: 2, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0.5);
  const routine = acts.filter((a) => a.kind === "routines");
  assert.equal(routine.length, 4, "one charge per tag");
  for (const a of routine) {
    assert.equal(a.amount, -10);
    assert.match(a.detail, /7\/10 routines/);
  }
  assert.deepEqual(routine.map((a) => a.tag).sort(), ["body", "home", "mind", "work"]);
});

t("10 routines exactly is clean, and so is 11", () => {
  for (const n of [10, 11, 14]) {
    const acts = E.penaltyForDay({ day: "2026-11-01", routinesDone: n, questsDone: 3, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0.5);
    assert.equal(acts.length, 0, `${n} routines should charge nothing`);
  }
});

t("none of the day's three quests costs 50 on exactly ONE random tag", () => {
  const acts = E.penaltyForDay({ day: "2026-11-01", routinesDone: 12, questsDone: 0, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0.99);
  assert.equal(acts.length, 1);
  assert.equal(acts[0].kind, "quests");
  assert.equal(acts[0].amount, -50);
  assert.equal(acts[0].tag, "home", "rand 0.99 picks the last tag");
});

t("the random tag is driven by the injected rand, at both edges", () => {
  const first = E.penaltyForDay({ day: "d", routinesDone: 12, questsDone: 0, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0);
  const last = E.penaltyForDay({ day: "d", routinesDone: 12, questsDone: 0, tags: TAGS }, E.PENALTY_DEFAULTS, () => 1);
  assert.equal(first[0].tag, "body");
  assert.equal(last[0].tag, "home", "rand() === 1 must not read past the array");
});

t("one quest of the three is enough — no quest charge", () => {
  const acts = E.penaltyForDay({ day: "d", routinesDone: 12, questsDone: 1, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0);
  assert.equal(acts.length, 0);
});

t("a day whose board was never seen is not charged for quests", () => {
  const acts = E.penaltyForDay({ day: "d", routinesDone: 12, questsDone: 0, tags: TAGS, questsKnown: false }, E.PENALTY_DEFAULTS, () => 0);
  assert.equal(acts.length, 0, "inventing a missed quest would be a lie with a price on it");
});

t("both rules can fire on the same bad day", () => {
  const acts = E.penaltyForDay({ day: "d", routinesDone: 2, questsDone: 0, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0);
  assert.equal(acts.length, 5, "4 routine charges + 1 quest charge");
});

t("penalties off means nothing at all", () => {
  const cfg = { ...E.PENALTY_DEFAULTS, on: false };
  assert.equal(E.penaltyForDay({ day: "d", routinesDone: 0, questsDone: 0, tags: TAGS }, cfg, () => 0).length, 0);
});

t("a threshold or a fine of 0 disables that rule", () => {
  const noMin = { ...E.PENALTY_DEFAULTS, routineMin: 0 };
  const noFine = { ...E.PENALTY_DEFAULTS, questFine: 0 };
  assert.equal(E.penaltyForDay({ day: "d", routinesDone: 0, questsDone: 1, tags: TAGS }, noMin, () => 0).length, 0);
  assert.equal(E.penaltyForDay({ day: "d", routinesDone: 12, questsDone: 0, tags: TAGS }, noFine, () => 0).length, 0);
});

t("custom numbers are honoured — 5 routines, 3 points, 2 quests, 7 points", () => {
  const cfg = { on: true, routineMin: 5, routineFine: 3, questMin: 2, questFine: 7 };
  const acts = E.penaltyForDay({ day: "d", routinesDone: 4, questsDone: 1, tags: TAGS.slice(0, 2) }, cfg, () => 0);
  assert.equal(acts.filter((a) => a.kind === "routines").length, 2);
  assert.ok(acts.every((a) => a.amount === -3 || a.amount === -7));
});

// --------------------------------------------------------------- ledger -----
t("the same day cannot be charged twice", () => {
  const acts = E.penaltyForDay({ day: "2026-11-01", routinesDone: 1, questsDone: 0, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0);
  const once = E.penaltyApplyLedger([], acts, 1000);
  const twice = E.penaltyApplyLedger(once, acts, 2000);
  assert.equal(once.length, 5);
  assert.equal(twice.length, 5, "re-running the night must not double-charge");
  assert.equal(E.tagPenaltyTotal("body", twice), -60, "-10 routine, -50 quest on body");
});

t("a later day still charges on top", () => {
  const d1 = E.penaltyApplyLedger([], E.penaltyForDay({ day: "2026-11-01", routinesDone: 0, questsDone: 1, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0));
  const d2 = E.penaltyApplyLedger(d1, E.penaltyForDay({ day: "2026-11-02", routinesDone: 0, questsDone: 1, tags: TAGS }, E.PENALTY_DEFAULTS, () => 0));
  assert.equal(E.tagPenaltyTotal("body", d2), -20);
});

t("the ledger is capped so storage cannot grow forever", () => {
  let ledger = [];
  for (let i = 0; i < 200; i++) {
    const day = `d${i}`;
    ledger = E.penaltyApplyLedger(ledger, [{ day, kind: "routines", tag: "body", amount: -1, detail: "x" }], i);
  }
  assert.equal(ledger.length, E.PENALTY_LEDGER_MAX);
});

t("a tag with no entries totals zero, never undefined", () => {
  assert.equal(E.tagPenaltyTotal("nope", []), 0);
  assert.equal(E.tagPenaltyTotal("nope", undefined), 0);
});

// -------------------------------------------------------------- catch-up ----
t("the day after lastDay is the first to settle", () => {
  assert.deepEqual(E.penaltyDaysToSettle("2026-10-30", "2026-11-02", "2026-11-01"), ["2026-10-31", "2026-11-01"]);
});

t("today is never settled — today is still happening", () => {
  assert.deepEqual(E.penaltyDaysToSettle("2026-11-01", "2026-11-02", "2026-11-01"), [], "lastDay = yesterday means nothing to do");
});

t("a fresh profile settles nothing", () => {
  assert.deepEqual(E.penaltyDaysToSettle("", "2026-11-02", "2026-11-01"), []);
});

t("absence longer than a week is capped at seven days", () => {
  const days = E.penaltyDaysToSettle("2026-10-01", "2026-11-02", "2026-11-01");
  assert.equal(days.length, E.PENALTY_CATCHUP_DAYS);
  assert.equal(days[days.length - 1], "2026-11-01", "the newest days are the ones kept");
});

t("month and year boundaries step correctly", () => {
  assert.deepEqual(E.penaltyDaysToSettle("2026-10-31", "2026-11-02", "2026-11-01"), ["2026-11-01"]);
  assert.deepEqual(E.penaltyDaysToSettle("2026-12-31", "2027-01-02", "2027-01-01"), ["2027-01-01"]);
  assert.deepEqual(E.penaltyDaysToSettle("2027-01-01", "2027-01-02", "2027-01-01"), []);
});

t("caps a board map to the newest fortnight", () => {
  const boards = {};
  for (let i = 1; i <= 20; i++) boards[`2026-10-${String(i).padStart(2, "0")}`] = ["a"];
  const capped = E.capBoards(boards);
  assert.equal(Object.keys(capped).length, E.PENALTY_BOARDS_MAX);
  assert.ok("2026-10-20" in capped && !("2026-10-01" in capped));
});

// ------------------------------------------------------------- tag share ----
const share = slice("function habitTagShare", "function tagAxisRaw");
const H = new Function(`${share}; return { habitTagShare, evenTagShare, tagShareTotal };`)();

t("an unset split gives every tag the full value (old behaviour)", () => {
  assert.equal(H.habitTagShare({}, "body"), 1);
  assert.equal(H.habitTagShare({ tagShare: null }, "body"), 1);
  assert.equal(H.habitTagShare({ tagShare: { mind: 50 } }, "body"), 1, "a tag missing from the split is unaffected");
});

t("a set split is read as a fraction", () => {
  assert.equal(H.habitTagShare({ tagShare: { body: 60 } }, "body"), 0.6);
  assert.equal(H.habitTagShare({ tagShare: { body: 0 } }, "body"), 0);
  assert.equal(H.habitTagShare({ tagShare: { body: 250 } }, "body"), 1, "clamped");
  assert.equal(H.habitTagShare({ tagShare: { body: -5 } }, "body"), 0, "clamped");
});

t("an even split always totals 100", () => {
  for (const n of [2, 3, 4, 5, 7]) {
    const keys = Array.from({ length: n }, (_, i) => `t${i}`);
    const s = H.evenTagShare(keys);
    assert.equal(H.tagShareTotal(s), 100, `${n} tags`);
    assert.ok(Object.values(s).every((v) => Number.isFinite(v)));
  }
});

t("even split of three is 34/33/33 — the extra point goes somewhere", () => {
  assert.deepEqual(H.evenTagShare(["a", "b", "c"]), { a: 34, b: 33, c: 33 });
  assert.deepEqual(H.evenTagShare([]), {});
});

t("the total only validates at 100", () => {
  assert.equal(H.tagShareTotal({ a: 60, b: 40 }), 100);
  assert.equal(H.tagShareTotal({ a: 60, b: 30 }), 90);
  assert.notEqual(H.tagShareTotal({ a: 60, b: 50 }), 100);
});

t("computeTagXPRaw really multiplies by the split", () => {
  assert.match(SRC, /\.reduce\(\(sum, h\) => sum \+ habitNet\(h\) \* habitTagShare\(h, tagKey\), 0\)/);
});

// --------------------------------------------------------------- presets ----
const presets = slice("function presetRoutinesFrom", "// ============================================================\n// v73: NIGHTLY PENALTIES");
const P = new Function(`${presets}; return { presetRoutinesFrom };`)();

t("a copied preset gets fresh ids and no history", () => {
  let n = 100;
  const copy = P.presetRoutinesFrom([
    { id: 1, label: "brush", time: "07:00", duration: 30, alternatives: ["rinse"], history: ["2026-10-01"] },
  ], () => ++n);
  assert.equal(copy.length, 1);
  assert.equal(copy[0].id, 101, "fresh id");
  assert.equal(copy[0].label, "brush");
  assert.deepEqual(copy[0].alternatives, ["rinse"]);
  assert.equal(copy[0].history, undefined, "a template must not carry last season's streak");
});

t("copying does not alias the original alternatives array", () => {
  const src = [{ id: 1, label: "x", time: "07:00", duration: 30, alternatives: ["a"] }];
  const copy = P.presetRoutinesFrom(src, () => 2);
  copy[0].alternatives.push("b");
  assert.deepEqual(src[0].alternatives, ["a"]);
});

t("an empty list copies to an empty preset", () => {
  assert.deepEqual(P.presetRoutinesFrom([], () => 1), []);
  assert.deepEqual(P.presetRoutinesFrom(null, () => 1), []);
});

// ------------------------------------------------------------ structural ----
t("the night runs on open, on a timer, and on focus", () => {
  assert.match(SRC, /const t = setInterval\(settleNight, 30000\)/);
  assert.match(SRC, /document\.addEventListener\("visibilitychange", onVis\)/);
  assert.match(SRC, /if \(!st\.lastDay\) \{/, "first run seeds instead of charging");
});

t("swipe completes and nothing swipes to delete any more", () => {
  assert.ok(!SRC.includes("routine-delete-bg"), "the delete reveal is gone");
  assert.match(SRC, /setDragX\(Math\.max\(0, Math\.min\(140, dx\)\)\)/, "only the completing direction moves");
  assert.match(SRC, /if \(dragX >= 70 && !doneToday\) \{[\s\S]{0,220}onToggleToday\(routine\.id\)/);
});

t("the quest editor saves a split only when it totals 100", () => {
  assert.match(SRC, /eTags\.length > 1 && tagShareTotal\(eShare\) === 100/);
  assert.match(SRC, /tagShare: share/);
});

t("presets ask copy-or-scratch when one is created", () => {
  assert.match(SRC, /copy my \{routines\.length\} routines/);
  assert.match(SRC, /start from scratch/);
});

console.log(`\npenalty.test.mjs — ${pass} passed${process.exitCode ? ", FAILURES above" : ""}`);
