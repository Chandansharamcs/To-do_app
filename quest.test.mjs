// quest.test.mjs
//
// The arithmetic behind the v45 quest changes:
//   * axis scores are floored at zero in BOTH radar modes (#7)
//   * the tap-a-dot breakdown adds up to the number on the dot (#8)
//   * the per-quest calendar lands days in the right squares (#10)
//
// v44 floored computeAreaXP and declared "no negative stats" fixed. The radar
// defaults to TAG mode, tags are scored by computeSubXPIn, and that one had no
// floor -- so the axis that prompted the request was still negative after the
// fix shipped. These tests exist so that cannot happen a second time.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

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
  "AREAS", "SUB_AREAS", "normaliseHistory", "countHist", "habitXP", "habitPenalty",
  "habitNet", "habitDoneOn", "habitSlipOn", "markHabit", "subsForArea", "subForHabitIn",
  "computeAreaXP", "computeAreaXPRaw", "computeSubXPIn", "computeSubXPRawIn",
  "axisBreakdown", "habitMonthGrid", "habitHistoryStats", "longestRun", "shiftMonth",
  "MONTH_NAMES", "computeTotalXP",
];
const STUBS = `
  const getISTDateString = (o = 0) => {
    const t = new Date(Date.UTC(2026, 9, 18) + o * 86400000);
    return t.toISOString().slice(0, 10);
  };
  function streakFreezeInfo(history) {
    if (!history || history.length === 0) return { streak: 0, freezeUsed: false };
    const set = new Set(history);
    let anchor = set.has(getISTDateString(0)) ? 0 : set.has(getISTDateString(-1)) ? -1 : null;
    if (anchor === null) return { streak: 0, freezeUsed: false };
    let streak = 0, o = anchor;
    while (set.has(getISTDateString(o))) { streak++; o--; }
    return { streak, freezeUsed: false };
  }
  function computeStreak(h) { return streakFreezeInfo(h).streak; }
`;
const M = new Function(`${STUBS}\n${NAMES.map(slice).join("\n\n")}\nreturn {${NAMES.join(",")},computeStreak};`)();

const TODAY = "2026-10-18";
const hist = (...entries) => entries.map((e) => (typeof e === "string" ? { d: e, t: "done" } : e));
const slip = (d) => ({ d, t: "slip" });

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- #7: no negative stats, in either radar mode ---------------------------

const screenTime = {
  id: 1, label: "Screen Time", area: "health", sub: "mind",
  xp: 0, penalty: 20,
  history: [slip("2026-10-10"), slip("2026-10-11"), slip("2026-10-12")],
};

T("a pure-penalty habit drags its tag negative before the floor", () => {
  assert.equal(M.computeSubXPRawIn(M.SUB_AREAS, "mind", [screenTime]), -60);
});

T("the tag axis itself never goes below zero", () => {
  assert.equal(M.computeSubXPIn(M.SUB_AREAS, "mind", [screenTime]), 0);
});

T("the area axis never goes below zero either", () => {
  assert.equal(M.computeAreaXP("health", [screenTime]), 0);
  assert.equal(M.computeAreaXPRaw("health", [screenTime]), -60);
});

T("no tag in a realistic mixed set can be plotted negative", () => {
  const habits = [
    screenTime,
    { id: 2, label: "Deep Work", area: "work", sub: "deep", xp: 30, penalty: 10, history: hist("2026-10-17") },
    { id: 3, label: "Junk Food", area: "health", sub: "nutrition", xp: 0, penalty: 40, history: [slip("2026-10-16"), slip("2026-10-17")] },
    { id: 4, label: "Sleep", area: "health", sub: "sleep", xp: 15, penalty: 15, history: [slip("2026-10-15")] },
  ];
  for (const sb of M.SUB_AREAS) assert.ok(M.computeSubXPIn(M.SUB_AREAS, sb.key, habits) >= 0, sb.key);
  for (const a of M.AREAS) assert.ok(M.computeAreaXP(a.key, habits) >= 0, a.key);
});

T("the floor is cosmetic -- total XP still feels the penalty", () => {
  const good = { id: 9, area: "work", xp: 100, penalty: 0, history: hist("2026-10-17") };
  assert.equal(M.computeTotalXP([good, screenTime]), 40, "100 earned minus 60 lost");
});

// ---- #8: the breakdown matches the dot -------------------------------------

const mixed = [
  { id: 1, label: "Deep Work", area: "work", sub: "deep", xp: 30, penalty: 10, history: hist("2026-10-16", "2026-10-17") },
  { id: 2, label: "Email", area: "work", sub: "deep", xp: 5, penalty: 0, history: hist("2026-10-17") },
  { id: 3, label: "Doomscroll", area: "work", sub: "deep", xp: 0, penalty: 25, history: [slip("2026-10-17")] },
  { id: 4, label: "Gym", area: "fitness", sub: "training", xp: 40, penalty: 0, history: hist("2026-10-17") },
];

T("the breakdown's value is exactly what the axis plots", () => {
  const b = M.axisBreakdown(mixed, (h) => M.subForHabitIn(M.SUB_AREAS, h) === "deep");
  assert.equal(b.value, M.computeSubXPIn(M.SUB_AREAS, "deep", mixed));
  assert.equal(b.raw, M.computeSubXPRawIn(M.SUB_AREAS, "deep", mixed));
});

T("gains minus losses is the raw figure, and it adds up by hand", () => {
  const b = M.axisBreakdown(mixed, (h) => h.sub === "deep");
  assert.equal(b.gained, 65, "30+30+5");
  assert.equal(b.lost, 25);
  assert.equal(b.raw, 40);
  assert.equal(b.gained - b.lost, b.raw);
});

T("done and slipped counts are per mark, not per habit", () => {
  const b = M.axisBreakdown(mixed, (h) => h.sub === "deep");
  assert.equal(b.count, 3, "three habits");
  assert.equal(b.done, 3, "three completions");
  assert.equal(b.slipped, 1);
});

T("the rows are sorted best-first and sum to the raw total", () => {
  const b = M.axisBreakdown(mixed, (h) => h.sub === "deep");
  assert.deepEqual(b.rows.map((r) => r.label), ["Deep Work", "Email", "Doomscroll"]);
  assert.equal(b.rows.reduce((a, r) => a + r.net, 0), b.raw);
});

T("an empty axis reports zero rather than NaN", () => {
  const b = M.axisBreakdown([], () => true);
  assert.deepEqual([b.value, b.raw, b.gained, b.lost, b.count], [0, 0, 0, 0, 0]);
});

T("a clamped axis still reports the deficit it is hiding", () => {
  const b = M.axisBreakdown([screenTime], () => true);
  assert.equal(b.value, 0);
  assert.equal(b.raw, -60, "the popup must be able to say what zero is covering");
});

// ---- #10: the per-quest calendar -------------------------------------------

const tracked = {
  id: 7, label: "Read", area: "self",
  history: [
    { d: "2026-10-01", t: "done" },
    { d: "2026-10-02", t: "done" },
    { d: "2026-10-03", t: "slip" },
    { d: "2026-10-18", t: "done" },
    { d: "2026-09-30", t: "done" },
  ],
};

T("October 2026 starts on a Thursday, so there are three blanks first", () => {
  const rows = M.habitMonthGrid(tracked, 2026, 10, TODAY);
  assert.equal(rows[0][0], null);
  assert.equal(rows[0][1], null);
  assert.equal(rows[0][2], null);
  assert.equal(rows[0][3].day, 1, "the 1st belongs in the Thursday column");
});

T("the grid is always six rows of seven", () => {
  for (const [y, m] of [[2026, 2], [2026, 10], [2027, 1], [2028, 2]]) {
    const rows = M.habitMonthGrid(tracked, y, m, TODAY);
    assert.equal(rows.length, 6);
    for (const r of rows) assert.equal(r.length, 7);
  }
});

T("February 2028 has 29 days and February 2026 has 28", () => {
  const flat = (y, m) => M.habitMonthGrid(tracked, y, m, TODAY).flat().filter(Boolean);
  assert.equal(flat(2028, 2).length, 29);
  assert.equal(flat(2026, 2).length, 28);
});

T("done and slipped land on the right squares", () => {
  const cells = M.habitMonthGrid(tracked, 2026, 10, TODAY).flat().filter(Boolean);
  const on = (d) => cells.find((c) => c.day === d);
  assert.equal(on(1).state, "done");
  assert.equal(on(2).state, "done");
  assert.equal(on(3).state, "slip");
  assert.equal(on(4).state, null);
});

T("a neighbouring month's marks do not leak in", () => {
  const cells = M.habitMonthGrid(tracked, 2026, 10, TODAY).flat().filter(Boolean);
  assert.equal(cells.filter((c) => c.state).length, 4, "30 Sep must not appear in October");
});

T("today is flagged and tomorrow is in the future", () => {
  const cells = M.habitMonthGrid(tracked, 2026, 10, TODAY).flat().filter(Boolean);
  assert.equal(cells.find((c) => c.day === 18).today, true);
  assert.equal(cells.find((c) => c.day === 19).future, true);
  assert.equal(cells.find((c) => c.day === 17).future, false);
});

T("old string-only history still renders", () => {
  // v34 saves stored bare dates and meant "done"
  const legacy = { id: 8, label: "Old", history: ["2026-10-05", "2026-10-06"] };
  const cells = M.habitMonthGrid(legacy, 2026, 10, TODAY).flat().filter(Boolean);
  assert.equal(cells.find((c) => c.day === 5).state, "done");
});

T("a quest with no history at all is an empty month, not a crash", () => {
  const rows = M.habitMonthGrid({ id: 1, label: "New" }, 2026, 10, TODAY);
  assert.equal(rows.flat().filter((c) => c && c.state).length, 0);
});

T("the month counters count only that month", () => {
  const s = M.habitHistoryStats(tracked, 2026, 10);
  assert.equal(s.monthDone, 3);
  assert.equal(s.monthSlip, 1);
  assert.equal(s.allDone, 4, "September's completion counts all-time");
  assert.equal(s.allSlip, 1);
});

T("the best run is the longest streak ever, not the current one", () => {
  const s = M.habitHistoryStats(tracked, 2026, 10);
  assert.equal(s.best, 3, "30 Sep, 1 Oct, 2 Oct run together across the month boundary");
  assert.equal(s.streak, 1, "only today is live");
});

T("the longest run handles gaps, duplicates and month ends", () => {
  assert.equal(M.longestRun([]), 0);
  assert.equal(M.longestRun(["2026-01-01"]), 1);
  assert.equal(M.longestRun(["2026-01-01", "2026-01-01"]), 1, "a duplicate is not two days");
  assert.equal(M.longestRun(["2026-01-30", "2026-01-31", "2026-02-01"]), 3);
  assert.equal(M.longestRun(["2026-01-01", "2026-01-03", "2026-01-04"]), 2);
  assert.equal(M.longestRun(["2025-12-31", "2026-01-01"]), 2, "across a year boundary");
});

T("stepping months never produces a month 0 or 13", () => {
  assert.deepEqual(M.shiftMonth({ year: 2026, month: 1 }, -1), { year: 2025, month: 12 });
  assert.deepEqual(M.shiftMonth({ year: 2026, month: 12 }, 1), { year: 2027, month: 1 });
  assert.deepEqual(M.shiftMonth({ year: 2026, month: 6 }, -18), { year: 2024, month: 12 });
  for (let d = -40; d <= 40; d++) {
    const c = M.shiftMonth({ year: 2026, month: 7 }, d);
    assert.ok(c.month >= 1 && c.month <= 12, `month ${c.month} from delta ${d}`);
  }
});

T("every month index has a name", () => {
  assert.equal(M.MONTH_NAMES.length, 12);
  for (let m = 1; m <= 12; m++) assert.ok(M.MONTH_NAMES[m - 1]);
});

for (const [name, fn] of tests) {
  try { fn(); pass++; }
  catch (e) { failed++; console.error(`FAIL  ${name}\n      ${e.message}`); }
}
console.log(`quest.test.mjs: ${pass} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
