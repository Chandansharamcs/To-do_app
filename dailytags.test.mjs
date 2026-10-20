// dailytags.test.mjs
//
// v53: a daily task carries TAGS, and finishing it pours its difficulty
// value into every tag it wears.
//
// Why this file exists. Before v53 the radar read XP and daily tasks paid
// only coins, so nine physical things in the user's inventory -- 20 laps on
// roof, 100 push ups, 40 punches in wall, 3 min hang, 20 squats, two
// workouts, karate -- were completely invisible to the Body axis, which sat
// at two quests while he did push-ups every day. The chart was not wrong
// about the data; it simply could not see most of the work.
//
// Four rules are pinned here, because each has a plausible-looking
// alternative that would quietly corrupt the chart:
//
//   1. a task's points EQUAL its coins (one number, never drifting)
//   2. two tags get FULL credit each -- on the CHART only
//   3. the LEVEL counts each task exactly ONCE, however many tags it wears
//   4. the zero floor applies to the SUM of quests + daily, not to each half
//
// Rule 3 is the one worth the most paranoia: if full credit leaked into the
// level, adding a second tag to a task would literally double your XP and
// the whole climb would be a lie.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

/** Lift one top-level declaration out of app.jsx by name. Shared shape with
 *  tags.test.mjs: brace/bracket depth, skipping strings and comments. */
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

const NAMES = [
  "DIFF_VALUE", "DAILY_HISTORY_MAX", "DEFAULT_TAGS", "DAILY_TAG_HINTS",
  "dailyValue", "dailyDoneCount", "dailyItemXP", "dailyTags",
  "computeDailyTagXP", "computeDailyTotalXP", "logDailyDone",
  "guessDailyTags", "migrateInventory", "migrateTasksToInventory",
  "normaliseHistory", "countHist", "habitXP", "habitPenalty", "habitNet",
  "AREA_TO_TAG", "migrateAreaToTag", "habitTags",
  "computeTagXPRaw", "computeTagXP", "tagAxisRaw", "tagAxisXP",
  "axisBreakdown", "computeTotalXP",
];
const M = new Function(`${NAMES.map(slice).join("\n\n")}\nreturn {${NAMES.join(",")}};`)();

const T = M.DEFAULT_TAGS;
const keyOf = (t) => t.key;

/** A daily task completed on `days` distinct days. */
const task = (text, diff, tags = [], days = 0) => ({
  id: Math.floor(Math.random() * 1e12),
  text, diff, tags,
  history: Array.from({ length: days }, (_, i) => `2026-03-${String(i + 1).padStart(2, "0")}`),
});

/** A v35 quest: `xp` per done, `penalty` per slip. */
const quest = (label, tags, xp, pen, done = 0, slip = 0) => ({
  id: Math.floor(Math.random() * 1e12),
  label, tags, xp, penalty: pen,
  history: [
    ...Array.from({ length: done }, (_, i) => ({ d: `2026-01-${String(i + 1).padStart(2, "0")}`, t: "done" })),
    ...Array.from({ length: slip }, (_, i) => ({ d: `2026-02-${String(i + 1).padStart(2, "0")}`, t: "slip" })),
  ],
});

let pass = 0, fail = 0;
const t = (name, fn) => {
  try { fn(); pass++; console.log("  ✓", name); }
  catch (e) { fail++; console.log("  ✗", name, "\n     ", e.message); process.exitCode = 1; }
};

// ---------------------------------------------------------------- values --

t("the three difficulties are 10 / 50 / 100", () => {
  assert.deepEqual(M.DIFF_VALUE, { easy: 10, mid: 50, hard: 100 });
});

t("a task's points equal its coins", () => {
  // the whole premise of the feature: ONE number. A separate 'points' field
  // would let the two drift and nobody would notice for months.
  assert.equal(M.dailyValue({ diff: "hard" }), M.DIFF_VALUE.hard);
  assert.equal(M.dailyValue({ diff: "mid" }), M.DIFF_VALUE.mid);
  assert.equal(M.dailyValue({ diff: "easy" }), M.DIFF_VALUE.easy);
});

t("an unknown or missing difficulty is treated as easy, not as zero", () => {
  // a corrupt item must not silently become worthless
  assert.equal(M.dailyValue({ diff: "legendary" }), M.DIFF_VALUE.easy);
  assert.equal(M.dailyValue({}), M.DIFF_VALUE.easy);
  assert.equal(M.dailyValue(null), M.DIFF_VALUE.easy);
});

t("completions are counted from history, missing history is zero", () => {
  assert.equal(M.dailyDoneCount(task("x", "mid", [], 4)), 4);
  assert.equal(M.dailyDoneCount({ diff: "mid" }), 0);
  assert.equal(M.dailyDoneCount(null), 0);
});

t("lifetime points are value x completions", () => {
  assert.equal(M.dailyItemXP(task("100 push ups", "hard", ["body"], 3)), 300);
  assert.equal(M.dailyItemXP(task("hang", "easy", ["body"], 7)), 70);
});

t("a task never completed is worth nothing", () => {
  assert.equal(M.dailyItemXP(task("100 push ups", "hard", ["body"], 0)), 0);
});

// ------------------------------------------------------------------ tags --

t("dailyTags keeps only tags that still exist", () => {
  const got = M.dailyTags({ tags: ["body", "ghost"] }, T);
  assert.deepEqual(got, ["body"]);
});

t("an untagged daily task stays untagged -- no fallback", () => {
  // habitTags falls back to the first tag because a habit always had an
  // area, so inventing one is recovery. A daily task may genuinely have no
  // tag, and filing "Bring milk" under Work would be making data up.
  assert.deepEqual(M.dailyTags({ tags: [] }, T), []);
  assert.deepEqual(M.dailyTags({}, T), []);
  assert.deepEqual(M.dailyTags(null, T), []);
});

t("a task whose every tag was deleted falls off the chart, quietly", () => {
  assert.deepEqual(M.dailyTags({ tags: ["ghost", "gone"] }, T), []);
});

// ------------------------------------------------------------- axis sums --

t("daily points land on the axis they are tagged with", () => {
  const inv = [task("100 push ups", "hard", ["body"], 2)];
  assert.equal(M.computeDailyTagXP("body", inv, T), 200);
  assert.equal(M.computeDailyTagXP("work", inv, T), 0);
});

t("two tags each get the FULL value, not half", () => {
  // rule 2. Splitting is the seductive alternative -- the axes would then
  // sum to the total -- and it is corrupting: a 2-tag task would be worth
  // half per axis, so the chart would reward you for under-tagging.
  const inv = [task("Lock in karate day", "mid", ["body", "discipline"], 1)];
  assert.equal(M.computeDailyTagXP("body", inv, T), 50);
  assert.equal(M.computeDailyTagXP("discipline", inv, T), 50);
});

t("an untagged task contributes to no axis at all", () => {
  const inv = [task("Bruh at night", "easy", [], 5)];
  for (const k of T.map(keyOf)) assert.equal(M.computeDailyTagXP(k, inv, T), 0);
});

t("the level total counts each task ONCE however many tags it wears", () => {
  // rule 3, the one that must never break
  const one = M.computeDailyTotalXP([task("x", "hard", ["body"], 1)]);
  const two = M.computeDailyTotalXP([task("x", "hard", ["body", "discipline"], 1)]);
  assert.equal(one, 100);
  assert.equal(two, 100);
});

t("an untagged task still counts toward the level", () => {
  // it pays coins, it was real work -- it just has nowhere to plot
  assert.equal(M.computeDailyTotalXP([task("Bruh at night", "easy", [], 3)]), 30);
});

t("the total is the sum over the whole inventory", () => {
  const inv = [
    task("100 push ups", "hard", ["body"], 2),     // 200
    task("20 laps", "mid", ["body"], 1),           //  50
    task("Be happy", "easy", ["self"], 4),         //  40
    task("never done", "hard", ["work"], 0),       //   0
  ];
  assert.equal(M.computeDailyTotalXP(inv), 290);
});

t("an empty or missing inventory is zero, not a crash", () => {
  assert.equal(M.computeDailyTotalXP([]), 0);
  assert.equal(M.computeDailyTotalXP(null), 0);
  assert.equal(M.computeDailyTagXP("body", null, T), 0);
});

// ------------------------------------------------ quests + daily together --

t("an axis adds quests and daily tasks", () => {
  const habits = [quest("Workout", ["body"], 50, 50, 2)];        // +100
  const inv = [task("100 push ups", "hard", ["body"], 1)];       // +100
  assert.equal(M.tagAxisRaw("body", habits, T, inv), 200);
  assert.equal(M.tagAxisXP("body", habits, T, inv), 200);
});

t("daily points do NOT leak onto an axis they are not tagged with", () => {
  const habits = [quest("Deep Work", ["work"], 50, 50, 1)];
  const inv = [task("100 push ups", "hard", ["body"], 1)];
  assert.equal(M.tagAxisRaw("work", habits, T, inv), 50);
});

t("the zero floor is applied to the SUM, not to each half", () => {
  // rule 4. -200 of slipped quests plus +100 of push-ups is 0 after the
  // floor -- flooring the quest half FIRST would read 100 and quietly
  // forgive the penalty, which is exactly the free money v51 was about.
  const habits = [quest("Skipped routine", ["body"], 0, 100, 0, 2)];  // -200
  const inv = [task("100 push ups", "hard", ["body"], 1)];            // +100
  assert.equal(M.tagAxisRaw("body", habits, T, inv), -100);
  assert.equal(M.tagAxisXP("body", habits, T, inv), 0);
});

t("daily points can pull an axis back above the floor", () => {
  const habits = [quest("Skipped routine", ["body"], 0, 40, 0, 1)];   // -40
  const inv = [task("100 push ups", "hard", ["body"], 1)];            // +100
  assert.equal(M.tagAxisXP("body", habits, T, inv), 60);
});

t("with no inventory an axis reads exactly as it did in v52", () => {
  // the upgrade must be invisible to someone with nothing tagged
  const habits = [quest("Workout", ["body"], 50, 50, 3, 1)];
  assert.equal(M.tagAxisXP("body", habits, T, []), M.computeTagXP("body", habits, T));
  assert.equal(M.tagAxisRaw("body", habits, T, undefined), M.computeTagXPRaw("body", habits, T));
});

t("the Body starvation this release exists to fix is measurably gone", () => {
  // his real shape: 2 body quests against 10 discipline quests, while 9 of
  // his 20 daily tasks are physical
  const habits = [
    quest("Workout", ["body"], 50, 50, 4),
    quest("Go to karate", ["body"], 50, 30, 3),
  ];
  const physical = [
    task("20 laps on roof", "mid", ["body"], 3),
    task("Follow one workout", "mid", ["body"], 2),
    task("100 push ups", "hard", ["body"], 2),
    task("Follow extreme workout", "hard", ["body"], 1),
    task("3 min hang seprately", "easy", ["body"], 6),
    task("Lock in karate day", "mid", ["body", "discipline"], 2),
    task("40 punches in wall", "mid", ["body"], 2),
    task("20 squats you done RN", "easy", ["body"], 4),
    task("20 punches 20 pushups", "easy", ["body"], 5),
  ];
  const before = M.computeTagXP("body", habits, T);
  const after = M.tagAxisXP("body", habits, T, physical);
  assert.equal(before, 350);
  assert.equal(after, 1250);   // 350 from quests + 900 from nine daily tasks
  assert.ok(after > before * 3, `body axis only moved ${before} -> ${after}`);
});

// --------------------------------------------------------------- logging --

t("completing a task writes the day into its history", () => {
  const inv = [task("100 push ups", "hard", ["body"], 0)];
  const next = M.logDailyDone(inv, inv[0].id, "2026-10-19");
  assert.deepEqual(next[0].history, ["2026-10-19"]);
  assert.equal(M.dailyItemXP(next[0]), 100);
});

t("completing the same task twice in one day pays once", () => {
  // the board already guards this, but the updater must be idempotent on
  // its own -- React does not promise how often an updater runs
  const inv = [task("100 push ups", "hard", ["body"], 0)];
  let next = M.logDailyDone(inv, inv[0].id, "2026-10-19");
  next = M.logDailyDone(next, inv[0].id, "2026-10-19");
  next = M.logDailyDone(next, inv[0].id, "2026-10-19");
  assert.equal(next[0].history.length, 1);
  assert.equal(M.dailyItemXP(next[0]), 100);
});

t("the same task on a different day pays again", () => {
  const inv = [task("100 push ups", "hard", ["body"], 0)];
  let next = M.logDailyDone(inv, inv[0].id, "2026-10-19");
  next = M.logDailyDone(next, inv[0].id, "2026-10-20");
  assert.deepEqual(next[0].history, ["2026-10-19", "2026-10-20"]);
  assert.equal(M.dailyItemXP(next[0]), 200);
});

t("logging touches only the task that was completed", () => {
  const a = task("a", "hard", ["body"], 0);
  const b = task("b", "mid", ["work"], 0);
  const next = M.logDailyDone([a, b], a.id, "2026-10-19");
  assert.equal(next[1].history.length, 0);
  assert.equal(next[1], b, "the untouched item should be the same object");
});

t("logging does not mutate the array it was given", () => {
  const inv = [task("100 push ups", "hard", ["body"], 0)];
  M.logDailyDone(inv, inv[0].id, "2026-10-19");
  assert.equal(inv[0].history.length, 0, "the input was mutated in place");
});

t("logging an id that is not there changes nothing", () => {
  const inv = [task("a", "hard", ["body"], 0)];
  const next = M.logDailyDone(inv, 999999, "2026-10-19");
  assert.equal(next[0].history.length, 0);
});

t("a task with no history array is repaired rather than crashed on", () => {
  const next = M.logDailyDone([{ id: 1, text: "x", diff: "mid" }], 1, "2026-10-19");
  assert.deepEqual(next[0].history, ["2026-10-19"]);
});

t("history is bounded", () => {
  const long = { id: 1, text: "x", diff: "easy", tags: ["body"],
    history: Array.from({ length: M.DAILY_HISTORY_MAX }, (_, i) => `d${i}`) };
  const next = M.logDailyDone([long], 1, "new-day");
  assert.equal(next[0].history.length, M.DAILY_HISTORY_MAX);
  assert.equal(next[0].history.at(-1), "new-day");
  assert.equal(next[0].history[0], "d1", "the oldest entry should be the one dropped");
});

// -------------------------------------------------------------- guessing --

t("the guesser places every physical thing in his inventory on Body", () => {
  for (const text of [
    "20 laps on roof", "Follow one workout", "100 push ups",
    "Follow extreme workout", "3 min hang seprately", "40 punches in wall",
    "20 squats you done RN", "20 punches 20 pushups",
  ]) {
    assert.ok(M.guessDailyTags(text, T).includes("body"), `"${text}" did not read as body`);
  }
});

t("karate reads as both body and discipline", () => {
  assert.deepEqual(M.guessDailyTags("Lock in karate day", T), ["body", "discipline"]);
});

t("the rest of his inventory lands where a human would put it", () => {
  const cases = [
    ["Revise 2 chapters", "work"],
    ["Screen time less than 5hr", "discipline"],
    ["No November", "discipline"],
    ["Bath at evening", "health"],
    ["Be happy", "self"],
    ["Upload a vid", "work"],
    ["Do something new", "self"],
    ["Draw", "self"],
    ["Follow something u made", "discipline"],
  ];
  for (const [text, want] of cases) {
    assert.ok(M.guessDailyTags(text, T).includes(want), `"${text}" -> ${JSON.stringify(M.guessDailyTags(text, T))}, wanted ${want}`);
  }
});

t("the guesser says nothing rather than guessing wrong", () => {
  // a wrong tag is worse than no tag, because a wrong one looks decided
  assert.deepEqual(M.guessDailyTags("Bruh at night", T), []);
  assert.deepEqual(M.guessDailyTags("", T), []);
  assert.deepEqual(M.guessDailyTags(null, T), []);
});

t("the guesser never returns more than two tags", () => {
  // a keyword pile-up must not turn into "counts on every axis"
  const kitchenSink = "workout study water draw no screen karate read plant";
  assert.ok(M.guessDailyTags(kitchenSink, T).length <= 2);
});

t("the guesser only offers tags that exist", () => {
  const only = [{ key: "work", label: "Work", color: "#5EEAD4" }];
  assert.deepEqual(M.guessDailyTags("100 push ups", only), []);
  assert.deepEqual(M.guessDailyTags("Revise 2 chapters", only), ["work"]);
});

t("laptop is not a lap", () => {
  assert.ok(!M.guessDailyTags("Laptop time", T).includes("body"));
});

// ------------------------------------------------------------- migration --

t("a v52 item gains tags and an empty history", () => {
  const out = M.migrateInventory([{ id: 1, text: "100 push ups", diff: "hard" }], T);
  assert.deepEqual(out[0].tags, ["body"]);
  assert.deepEqual(out[0].history, []);
  assert.equal(out[0].diff, "hard");
  assert.equal(out[0].text, "100 push ups");
});

t("migration never invents a past", () => {
  // the app never recorded which daily tasks were done on which day, so
  // there is nothing to backfill. Points on the chart that were never
  // earned would be worse than a chart that starts at zero.
  const out = M.migrateInventory([{ id: 1, text: "100 push ups", diff: "hard" }], T);
  assert.equal(M.dailyItemXP(out[0]), 0);
});

t("migration never overwrites tags you chose yourself", () => {
  const out = M.migrateInventory([{ id: 1, text: "100 push ups", diff: "hard", tags: ["self"] }], T);
  assert.deepEqual(out[0].tags, ["self"]);
});

t("an explicitly empty tag list is a decision, and is respected", () => {
  const out = M.migrateInventory([{ id: 1, text: "100 push ups", diff: "hard", tags: [] }], T);
  assert.deepEqual(out[0].tags, []);
});

t("migration is idempotent", () => {
  const once = M.migrateInventory([{ id: 1, text: "20 laps on roof", diff: "mid" }], T);
  const twice = M.migrateInventory(once, T);
  assert.deepEqual(twice, once);
});

t("migration preserves a history that is already there", () => {
  const out = M.migrateInventory([{ id: 1, text: "x", diff: "mid", tags: ["work"], history: ["2026-10-01"] }], T);
  assert.deepEqual(out[0].history, ["2026-10-01"]);
});

t("migration survives junk in the array", () => {
  const out = M.migrateInventory([null, "nope", { id: 1, text: "Draw", diff: "easy" }], T);
  assert.equal(out.length, 3);
  assert.deepEqual(out[2].tags, ["self"]);
});

t("a non-array inventory is handed back untouched", () => {
  assert.equal(M.migrateInventory(null, T), null);
  assert.equal(M.migrateInventory(undefined, T), undefined);
});

t("the v35 task migration produces v53-shaped items", () => {
  const out = M.migrateTasksToInventory([{ id: 1, text: "old thing", priority: "high" }]);
  assert.equal(out[0].diff, "hard");
  assert.deepEqual(out[0].tags, []);
  assert.deepEqual(out[0].history, []);
});

// ------------------------------------------------------------ breakdown ---

t("the axis popup counts daily tasks in its gained figure", () => {
  const habits = [quest("Workout", ["body"], 50, 50, 2, 1)];       // +100 / -50
  const daily = [task("100 push ups", "hard", ["body"], 3)];       // +300
  const b = M.axisBreakdown(habits, (h) => true, daily);
  assert.equal(b.gained, 400);
  assert.equal(b.lost, 50);
  assert.equal(b.raw, 350);
  assert.equal(b.value, 350);
});

t("a daily task never adds to 'slipped' -- missing one costs nothing", () => {
  // there is no penalty on a daily task: you are not punished for a board
  // you did not clear, you simply are not paid
  const daily = [task("100 push ups", "hard", ["body"], 1), task("20 laps", "mid", ["body"], 0)];
  const b = M.axisBreakdown([], () => true, daily);
  assert.equal(b.slipped, 0);
  assert.equal(b.lost, 0);
  assert.equal(b.gained, 100);
});

t("a daily task never completed is left out of the popup entirely", () => {
  const b = M.axisBreakdown([], () => true, [task("never", "hard", ["body"], 0)]);
  assert.equal(b.dailyCount, 0);
  assert.equal(b.rows.length, 0);
});

t("the popup says how much of the axis is daily tasks", () => {
  const habits = [quest("Workout", ["body"], 50, 0, 1)];
  const daily = [task("100 push ups", "hard", ["body"], 2)];
  const b = M.axisBreakdown(habits, () => true, daily);
  assert.equal(b.dailyXP, 200);
  assert.equal(b.dailyCount, 1);
  assert.equal(b.count, 2, "count should include both quests and daily tasks");
});

t("daily rows are marked, labelled by text, and sorted with the rest", () => {
  const habits = [quest("Workout", ["body"], 50, 0, 1)];           // 50
  const daily = [task("100 push ups", "hard", ["body"], 2)];       // 200
  const b = M.axisBreakdown(habits, () => true, daily);
  assert.equal(b.rows[0].label, "100 push ups");
  assert.equal(b.rows[0].daily, true);
  assert.equal(b.rows[0].net, 200);
  assert.equal(b.rows[1].label, "Workout");
  assert.equal(b.rows[1].daily, false);
});

t("a daily row id can never collide with a quest row id", () => {
  // both lists are keyed into one React list; a shared id would drop a row
  const h = quest("Workout", ["body"], 50, 0, 1);
  const d = task("100 push ups", "hard", ["body"], 1);
  d.id = h.id;
  const b = M.axisBreakdown([h], () => true, [d]);
  assert.equal(new Set(b.rows.map((r) => r.id)).size, 2);
});

t("the breakdown with no daily argument behaves exactly as v52", () => {
  const habits = [quest("Workout", ["body"], 50, 20, 2, 1)];
  const a = M.axisBreakdown(habits, () => true);
  const b = M.axisBreakdown(habits, () => true, []);
  assert.equal(a.value, b.value);
  assert.equal(a.gained, 100);
  assert.equal(a.lost, 20);
  assert.equal(a.dailyCount, 0);
  assert.equal(a.dailyXP, 0);
});

// ------------------------------------------------------- level vs. chart --

t("the chart can exceed the level total, and that is the design", () => {
  const inv = [task("Lock in karate day", "mid", ["body", "discipline"], 2)];
  const axes = T.map((x) => M.tagAxisXP(x.key, [], T, inv)).reduce((s, n) => s + n, 0);
  const level = M.computeTotalXP([], inv);
  assert.equal(axes, 200);
  assert.equal(level, 100);
  assert.ok(axes > level);
});

t("a full board is 160 points a day", () => {
  // the measured consequence he agreed to: 160/day against a habit pace of
  // 58.5/day, so levels arrive roughly three times faster
  const board = M.DIFF_VALUE.easy + M.DIFF_VALUE.mid + M.DIFF_VALUE.hard;
  assert.equal(board, 160);
});

console.log(`dailytags.test.mjs: ${pass} passed, ${fail} failed`);
