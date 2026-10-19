// expenses.test.mjs
//
// The expense tracker's arithmetic (v46).
//
// Money is the one thing in this app where being slightly wrong is worse than
// being obviously broken, so two decisions are pinned here:
//
//   * amounts are stored as whole MINOR units (paise), never as floats.
//     0.1 + 0.2 is 0.30000000000000004, and a tracker that adds up a hundred
//     entries a month will show it.
//   * the per-day average divides by days ELAPSED, not days in the month.
//     Dividing October's spending by 31 on the 3rd is wrong by a factor of
//     ten, and it is wrong in the flattering direction, which is worse.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

function region(from, to) {
  const a = SRC.indexOf(from), b = SRC.indexOf(to);
  if (a < 0 || b < 0 || b <= a) throw new Error(`region not found: ${from}`);
  return SRC.slice(a, b);
}

const STUBS = `
  const rngGroup = (n) => {
    const s = String(n); let out = "";
    for (let i = 0; i < s.length; i++) {
      if (i > 0 && (s.length - i) % 3 === 0) out += ",";
      out += s[i];
    }
    return out;
  };
  const MONTH_NAMES = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
  let __id = 0; const makeId = () => ++__id;
  const localStorage = {
    _v: {}, getItem(k) { return this._v[k] ?? null; },
    setItem(k, v) { this._v[k] = String(v); },
  };
`;
const CODE = region('const STORAGE_KEY_EXPENSES = "tasksh.expenses.v1";', "\n/** Vertical bars, one per day.");
const EXPORTS = [
  "STORAGE_KEY_EXPENSES", "EXPENSE_CATS", "EXPENSE_CURRENCIES",
  "parseAmount", "formatMoney", "expenseMonthKey", "expenseMonthLabel", "daysInMonth",
  "summariseExpenses", "expenseDailySeries", "expenseMonths", "shiftMonthKey",
  "groupExpensesByDay", "compareToPreviousMonth", "expensesToCSV",
  "loadExpenses", "saveExpenses",
  "expenseNameKey", "expenseNameIndex", "suggestNames", "summariseByName",
  "summariseYear", "expenseYears", "expenseAllTimeSeries",
];
const M = new Function(`${STUBS}\n${CODE}\nreturn {${EXPORTS.join(",")}, localStorage};`)();

const e = (d, amt, cat = "food", note = "") => ({ id: `${d}-${amt}`, d, amt, cat, note, at: 0 });

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- reading what a person types -------------------------------------------

T("plain amounts parse to whole minor units", () => {
  assert.equal(M.parseAmount("40"), 4000);
  assert.equal(M.parseAmount("12.50"), 1250);
  assert.equal(M.parseAmount("0.99"), 99);
  assert.equal(M.parseAmount("1,200"), 120000);
  assert.equal(M.parseAmount("  240  "), 24000);
});

T("a currency symbol pasted in with the number is tolerated", () => {
  assert.equal(M.parseAmount("₹250"), 25000);
  assert.equal(M.parseAmount("$12.50"), 1250);
});

T("running sums add up -- the calculator entry every fast tracker has", () => {
  assert.equal(M.parseAmount("120+45"), 16500);
  assert.equal(M.parseAmount("120+45+30"), 19500);
  assert.equal(M.parseAmount("500-120"), 38000);
  assert.equal(M.parseAmount("10+10-5"), 1500);
});

T("floating point cannot leak in through a sum", () => {
  // 0.1 + 0.2 in floats is 0.30000000000000004
  assert.equal(M.parseAmount("0.1+0.2"), 30);
  let total = 0;
  for (let i = 0; i < 100; i++) total += M.parseAmount("0.07");
  assert.equal(total, 700, "a hundred 7p entries must be exactly £7.00");
});

T("nonsense is null, never NaN and never zero", () => {
  for (const bad of ["", "   ", "abc", "1..2", "+", "-", "12+", "1.2.3", "--5", "0", "0.00", "-40"]) {
    assert.equal(M.parseAmount(bad), null, `"${bad}" should not parse`);
  }
  assert.equal(M.parseAmount(null), null);
  assert.equal(M.parseAmount(undefined), null);
});

T("no amount is parsed by eval", () => {
  // the box takes user text; these must be refused, not executed
  for (const bad of ["1;alert(1)", "(1)", "2*3", "1/0", "1e9"]) {
    assert.equal(M.parseAmount(bad), null, `"${bad}" should not parse`);
  }
});

// ---- showing it back -------------------------------------------------------

T("whole amounts lose the decimals, part amounts keep them", () => {
  assert.equal(M.formatMoney(24000, "₹"), "₹240");
  assert.equal(M.formatMoney(1250, "₹"), "₹12.50");
  assert.equal(M.formatMoney(99, "₹"), "₹0.99");
  assert.equal(M.formatMoney(0, "₹"), "₹0");
  assert.equal(M.formatMoney(120000, "₹"), "₹1,200");
});

T("the currency symbol is whatever was chosen", () => {
  assert.equal(M.formatMoney(5000, "$"), "$50");
  assert.equal(M.formatMoney(5000, "€"), "€50");
});

T("compact shortens big numbers the Indian way", () => {
  assert.equal(M.formatMoney(2500000, "₹", { compact: true }), "₹25.0k");
  assert.equal(M.formatMoney(150000000, "₹", { compact: true }), "₹15.0L");
  assert.equal(M.formatMoney(24000, "₹", { compact: true }), "₹240", "small amounts stay exact");
});

// ---- months ----------------------------------------------------------------

T("the month key is the first seven characters and nothing clever", () => {
  assert.equal(M.expenseMonthKey("2026-10-18"), "2026-10");
  assert.equal(M.expenseMonthKey(""), "");
});

T("month length is right, including leap February", () => {
  assert.equal(M.daysInMonth("2026-02"), 28);
  assert.equal(M.daysInMonth("2028-02"), 29);
  assert.equal(M.daysInMonth("2026-10"), 31);
  assert.equal(M.daysInMonth("2026-11"), 30);
});

T("stepping months never produces a month 0 or 13", () => {
  assert.equal(M.shiftMonthKey("2026-01", -1), "2025-12");
  assert.equal(M.shiftMonthKey("2026-12", 1), "2027-01");
  for (let d = -30; d <= 30; d++) {
    const k = M.shiftMonthKey("2026-06", d);
    const m = Number(k.split("-")[1]);
    assert.ok(m >= 1 && m <= 12, `${k} from delta ${d}`);
  }
});

T("the current month is always available even with nothing in it", () => {
  assert.deepEqual(M.expenseMonths([], "2026-10-18"), ["2026-10"]);
  assert.deepEqual(
    M.expenseMonths([e("2026-08-01", 100), e("2026-10-02", 100)], "2026-10-18"),
    ["2026-10", "2026-08"],
    "newest first"
  );
});

// ---- the summary -----------------------------------------------------------

const MONTH = [
  e("2026-10-01", 20000, "food"),
  e("2026-10-01", 5000, "transport"),
  e("2026-10-02", 100000, "bills"),
  e("2026-10-05", 7500, "food"),
  e("2026-09-30", 999999, "food"),     // last month: must not leak in
];

T("only the month asked for is counted", () => {
  const s = M.summariseExpenses(MONTH, "2026-10", "2026-10-10");
  assert.equal(s.total, 132500);
  assert.equal(s.count, 4);
});

T("the per-day average uses days elapsed, not days in the month", () => {
  // 132,500 over the first 10 days is 13,250/day. Dividing by 31 would say
  // 4,274 -- wrong by a factor of three, in the flattering direction.
  const s = M.summariseExpenses(MONTH, "2026-10", "2026-10-10");
  assert.equal(s.elapsed, 10);
  assert.equal(s.perDay, 13250);
});

T("a past month divides by the whole month", () => {
  const s = M.summariseExpenses(MONTH, "2026-10", "2026-12-01");
  assert.equal(s.elapsed, 31);
  assert.equal(s.isCurrent, false);
  assert.equal(s.perDay, Math.round(132500 / 31));
});

T("the average per spending day ignores the days you spent nothing", () => {
  const s = M.summariseExpenses(MONTH, "2026-10", "2026-10-10");
  assert.equal(s.daysWithSpend, 3);
  assert.equal(s.perSpendDay, Math.round(132500 / 3));
});

T("category totals add up to the month total", () => {
  const s = M.summariseExpenses(MONTH, "2026-10", "2026-10-10");
  assert.equal(s.cats.reduce((a, c) => a + c.amt, 0), s.total);
  assert.equal(s.cats[0].key, "bills", "sorted biggest first");
  assert.ok(Math.abs(s.cats.reduce((a, c) => a + c.share, 0) - 1) < 1e-9, "shares must sum to 1");
});

T("the biggest single entry is found, not the biggest day", () => {
  const s = M.summariseExpenses(MONTH, "2026-10", "2026-10-10");
  assert.equal(s.biggest.amt, 100000);
  assert.equal(s.biggest.cat, "bills");
});

T("today's total is today's, not the month's", () => {
  const s = M.summariseExpenses(MONTH, "2026-10", "2026-10-01");
  assert.equal(s.today, 25000);
});

T("an empty month is zeros, not NaN", () => {
  const s = M.summariseExpenses([], "2026-10", "2026-10-10");
  assert.deepEqual(
    [s.total, s.count, s.perDay, s.perSpendDay, s.today, s.daysWithSpend],
    [0, 0, 0, 0, 0, 0]
  );
  assert.equal(s.biggest, null);
  assert.deepEqual(s.cats, []);
});

T("the projection extrapolates the current month and leaves past ones alone", () => {
  const live = M.summariseExpenses(MONTH, "2026-10", "2026-10-10");
  assert.equal(live.projected, Math.round((132500 / 10) * 31));
  const past = M.summariseExpenses(MONTH, "2026-10", "2026-12-01");
  assert.equal(past.projected, past.total, "a finished month is not a forecast");
});

// ---- the daily series ------------------------------------------------------

T("every day of the month gets a bar, including the empty ones", () => {
  const s = M.expenseDailySeries(MONTH, "2026-10");
  assert.equal(s.length, 31, "a gap must mean zero, not absent");
  assert.equal(s[0].amt, 25000);
  assert.equal(s[2].amt, 0);
  assert.equal(s.reduce((a, x) => a + x.amt, 0), 132500);
});

T("the series dates are real dates in order", () => {
  const s = M.expenseDailySeries(MONTH, "2026-02");
  assert.equal(s.length, 28);
  assert.equal(s[0].d, "2026-02-01");
  assert.equal(s[27].d, "2026-02-28");
});

// ---- grouping --------------------------------------------------------------

T("history groups by day, newest day first", () => {
  const g = M.groupExpensesByDay(MONTH, "2026-10");
  assert.deepEqual(g.map((x) => x.d), ["2026-10-05", "2026-10-02", "2026-10-01"]);
  assert.equal(g[2].items.length, 2);
  assert.equal(g[2].total, 25000);
});

T("grouping does not lose or duplicate an entry", () => {
  const g = M.groupExpensesByDay(MONTH, "2026-10");
  const ids = g.flatMap((x) => x.items.map((i) => i.id));
  assert.equal(ids.length, 4);
  assert.equal(new Set(ids).size, 4);
});

// ---- the comparison --------------------------------------------------------

T("this month is compared against the SAME stretch of last month", () => {
  // the 10th of October against the whole of September is not a comparison
  const items = [
    e("2026-09-01", 10000), e("2026-09-20", 500000),   // after the 10th: excluded
    e("2026-10-01", 20000),
  ];
  const c = M.compareToPreviousMonth(items, "2026-10", "2026-10-10");
  assert.equal(c.upTo, 10);
  assert.equal(c.prev, 10000, "only September 1st-10th counts");
  assert.equal(c.now, 20000);
  assert.equal(c.delta, 10000);
  assert.equal(c.pct, 1);
});

T("no previous month means no comparison rather than a divide by zero", () => {
  assert.equal(M.compareToPreviousMonth([e("2026-10-01", 100)], "2026-10", "2026-10-10"), null);
});

// ---- export ----------------------------------------------------------------

T("the CSV has a header, a BOM and one row per entry", () => {
  const csv = M.expensesToCSV(MONTH, M.EXPENSE_CATS);
  assert.ok(csv.startsWith("\ufeff"), "no BOM: a rupee sign will arrive as mojibake");
  const lines = csv.replace("\ufeff", "").split("\n");
  assert.equal(lines[0], '"date","category","amount","note"');
  assert.equal(lines.length, 6, "header plus five entries");
  assert.ok(lines[1].startsWith('"2026-09-30"'), "oldest first");
});

T("amounts export as decimals, not as paise", () => {
  const csv = M.expensesToCSV([e("2026-10-01", 1250)], M.EXPENSE_CATS);
  assert.ok(csv.includes("12.50"), csv);
});

T("a note with a quote or a comma cannot break the file", () => {
  const csv = M.expensesToCSV(
    [{ id: 1, d: "2026-10-01", amt: 100, cat: "food", note: 'chai, "the good one"' }],
    M.EXPENSE_CATS
  );
  const row = csv.split("\n")[1];
  assert.ok(row.endsWith('"chai, ""the good one"""'), row);
  // parse it back the way a spreadsheet would -- the comma inside the note
  // must not become a fifth column
  const fields = [];
  let cur = "", inQ = false;
  for (let i = 0; i < row.length; i++) {
    const c = row[i];
    if (inQ) {
      if (c === '"' && row[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') inQ = false;
      else cur += c;
    } else if (c === '"') inQ = true;
    else if (c === ",") { fields.push(cur); cur = ""; }
    else cur += c;
  }
  fields.push(cur);
  assert.equal(fields.length, 4, `got ${fields.length} columns: ${JSON.stringify(fields)}`);
  assert.equal(fields[3], 'chai, "the good one"');
});

// ---- loading a save --------------------------------------------------------

T("a missing save is an empty tracker, not a crash", () => {
  M.localStorage._v = {};
  const s = M.loadExpenses();
  assert.deepEqual(s.items, []);
  assert.equal(s.currency, "₹");
  assert.equal(s.cats.length, M.EXPENSE_CATS.length);
});

T("a corrupt save is an empty tracker, not a crash", () => {
  M.localStorage._v[M.STORAGE_KEY_EXPENSES] = "{not json";
  assert.deepEqual(M.loadExpenses().items, []);
});

T("junk entries are dropped rather than rendered", () => {
  M.localStorage._v[M.STORAGE_KEY_EXPENSES] = JSON.stringify({
    items: [
      { id: 1, amt: 100, cat: "food", d: "2026-10-01" },
      { id: 2, amt: NaN, cat: "food", d: "2026-10-01" },
      { id: 3, amt: -500, cat: "food", d: "2026-10-01" },
      { id: 4, amt: 100, cat: "food" },
      null,
    ],
  });
  const s = M.loadExpenses();
  assert.equal(s.items.length, 1);
  assert.equal(s.items[0].amt, 100);
});

T("an unknown currency falls back rather than rendering as undefined", () => {
  M.localStorage._v[M.STORAGE_KEY_EXPENSES] = JSON.stringify({ items: [], currency: "XYZ" });
  assert.equal(M.loadExpenses().currency, "₹");
});

T("a save round-trips unchanged", () => {
  M.localStorage._v = {};
  const before = { items: [e("2026-10-01", 1234, "food", "chai")], cats: M.EXPENSE_CATS, currency: "$" };
  M.saveExpenses(before);
  const after = M.loadExpenses();
  assert.equal(after.items.length, 1);
  assert.equal(after.items[0].amt, 1234);
  assert.equal(after.items[0].note, "chai");
  assert.equal(after.currency, "$");
});

// ---- named items (v48) -----------------------------------------------------

const named = (d, amt, cat, note, at) => ({ id: `${d}-${amt}-${note}`, d, amt, cat, note, at });

T("the same name in different cases and spacing is one item", () => {
  const idx = M.expenseNameIndex([
    named("2026-10-01", 5000, "food", "sweets", 10),
    named("2026-10-05", 6000, "food", "Sweets ", 20),
    named("2026-10-06", 1000, "food", "  SWEETS", 30),
  ]);
  assert.equal(idx.length, 1, "three spellings should be one item");
  assert.equal(idx[0].count, 3);
  assert.equal(idx[0].total, 12000);
});

T("the display spelling is the most recent one used", () => {
  const idx = M.expenseNameIndex([
    named("2026-10-01", 5000, "food", "sweets", 10),
    named("2026-10-05", 6000, "food", "Sweets", 20),
  ]);
  assert.equal(idx[0].name, "Sweets");
});

T("a suggestion carries the category and price you last paid", () => {
  // this is the whole point of tapping one: three fields filled, not one
  const idx = M.expenseNameIndex([
    named("2026-10-01", 5000, "fun", "sweets", 10),
    named("2026-10-05", 7500, "food", "sweets", 20),
  ]);
  assert.equal(idx[0].cat, "food", "the newest entry decides the category");
  assert.equal(idx[0].lastAmt, 7500);
  assert.equal(idx[0].avg, 6250);
});

T("unnamed entries never enter the name library", () => {
  const idx = M.expenseNameIndex([
    named("2026-10-01", 5000, "food", ""),
    named("2026-10-02", 5000, "food", "   "),
    named("2026-10-03", 5000, "food", "chai"),
  ]);
  assert.deepEqual(idx.map((x) => x.name), ["chai"]);
});

T("suggestions prefer what you are typing the start of", () => {
  const idx = M.expenseNameIndex([
    named("2026-10-01", 100, "food", "chai", 1),
    named("2026-10-02", 100, "food", "masala chai", 2),
    named("2026-10-03", 100, "food", "chapati", 3),
  ]);
  const out = M.suggestNames(idx, "cha").map((x) => x.name);
  assert.ok(out.indexOf("masala chai") > out.indexOf("chai"), "a prefix match must beat a substring match");
  assert.ok(out.includes("chapati"));
});

T("the thing you buy most often is suggested first when the box is empty", () => {
  const idx = M.expenseNameIndex([
    named("2026-10-01", 100, "food", "chai", 1),
    named("2026-10-02", 100, "food", "chai", 2),
    named("2026-10-03", 100, "food", "chai", 3),
    named("2026-10-04", 900, "fun", "cinema", 4),
  ]);
  assert.equal(M.suggestNames(idx, "")[0].name, "chai");
});

T("an exact match is not offered back to you", () => {
  const idx = M.expenseNameIndex([named("2026-10-01", 100, "food", "chai", 1)]);
  assert.deepEqual(M.suggestNames(idx, "chai"), []);
  assert.deepEqual(M.suggestNames(idx, "CHAI "), [], "and casing does not sneak it back in");
});

T("suggestions are capped", () => {
  const items = [];
  for (let i = 0; i < 40; i++) items.push(named("2026-10-01", 100, "food", `thing ${i}`, i));
  assert.ok(M.suggestNames(M.expenseNameIndex(items), "thing", 5).length === 5);
});

T("spend per name adds up, biggest first, and keeps the unnamed", () => {
  const rows = M.summariseByName([
    named("2026-10-01", 5000, "food", "sweets"),
    named("2026-10-05", 6000, "food", "sweets"),
    named("2026-10-02", 20000, "bills", ""),
    named("2026-10-03", 900, "food", "chai"),
  ], (c) => c);
  assert.equal(rows[0].label, "(unnamed bills)");
  assert.equal(rows[1].label, "sweets");
  assert.equal(rows[1].total, 11000);
  assert.equal(rows[1].count, 2);
  assert.equal(rows[1].avg, 5500);
  assert.equal(rows.reduce((a, r) => a + r.total, 0), 31900, "nothing may be dropped");
});

// ---- the year (v48) --------------------------------------------------------

const YEAR = [
  named("2026-01-05", 10000, "food", "a"),
  named("2026-01-20", 5000, "fun", "b"),
  named("2026-03-02", 20000, "bills", "c"),
  named("2026-10-09", 7000, "food", "a"),
  named("2025-12-31", 99000, "food", "old"),
];

T("a year counts only that year", () => {
  const y = M.summariseYear(YEAR, "2026", "2026-10-18");
  assert.equal(y.total, 42000);
  assert.equal(y.count, 4);
});

T("there are always twelve months, including the empty ones", () => {
  const y = M.summariseYear(YEAR, "2026", "2026-10-18");
  assert.equal(y.months.length, 12);
  assert.equal(y.months[0].amt, 15000, "january");
  assert.equal(y.months[1].amt, 0, "february must exist and be zero");
  assert.equal(y.months[2].amt, 20000);
  assert.equal(y.months.reduce((a, m) => a + m.amt, 0), y.total);
});

T("the monthly average divides by months ELAPSED in the current year", () => {
  // dividing by 12 in February is the same mistake as dividing a month by 31
  // on the 3rd, and it is wrong in the same flattering direction
  const y = M.summariseYear(YEAR, "2026", "2026-10-18");
  assert.equal(y.elapsed, 10);
  assert.equal(y.perMonth, 4200);
  const past = M.summariseYear(YEAR, "2026", "2027-05-01");
  assert.equal(past.elapsed, 12);
  assert.equal(past.perMonth, 3500);
});

T("a finished year is not forecast", () => {
  const past = M.summariseYear(YEAR, "2026", "2027-05-01");
  assert.equal(past.projected, past.total);
  const live = M.summariseYear(YEAR, "2026", "2026-10-18");
  assert.equal(live.projected, Math.round((42000 / 10) * 12));
});

T("the biggest month is found and empty months do not win it", () => {
  const y = M.summariseYear(YEAR, "2026", "2026-10-18");
  assert.equal(y.biggest.label, "mar");
  assert.equal(y.activeMonths, 3);
});

T("an empty year is zeros, not NaN", () => {
  const y = M.summariseYear([], "2024", "2026-10-18");
  assert.deepEqual([y.total, y.count, y.perMonth, y.activeMonths], [0, 0, 0, 0]);
  assert.equal(y.months.length, 12);
});

T("the year list is newest first and always contains this year", () => {
  assert.deepEqual(M.expenseYears(YEAR, "2026-10-18"), ["2026", "2025"]);
  assert.deepEqual(M.expenseYears([], "2026-10-18"), ["2026"]);
});

// ---- the all-time line -----------------------------------------------------

T("the all-time series has no holes", () => {
  // a line that skips empty months draws a slope from january to april and
  // calls it a trend
  const s = M.expenseAllTimeSeries(YEAR, "2026-10-18");
  assert.equal(s[0].key, "2025-12");
  assert.equal(s[s.length - 1].key, "2026-10");
  assert.equal(s.length, 11, "dec through oct inclusive");
  for (let i = 1; i < s.length; i++) {
    assert.equal(s[i].key, M.shiftMonthKey(s[i - 1].key, 1), `gap before ${s[i].key}`);
  }
});

T("the series totals match the entries", () => {
  const s = M.expenseAllTimeSeries(YEAR, "2026-10-18");
  assert.equal(s.reduce((a, x) => a + x.amt, 0), 141000);
  assert.equal(s.find((x) => x.key === "2026-02").amt, 0);
});

T("no entries means no line rather than a crash", () => {
  assert.deepEqual(M.expenseAllTimeSeries([], "2026-10-18"), []);
});

T("a decade of history does not run away", () => {
  const s = M.expenseAllTimeSeries([named("2016-01-01", 100, "food", "x")], "2026-10-18");
  assert.ok(s.length > 100 && s.length < 600, `series length ${s.length}`);
  assert.equal(s[s.length - 1].key, "2026-10");
});


for (const [name, fn] of tests) {
  try { fn(); pass++; }
  catch (err) { failed++; console.error(`FAIL  ${name}\n      ${err.message}`); }
}
console.log(`expenses.test.mjs: ${pass} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
