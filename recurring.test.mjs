// recurring.test.mjs
//
// v54: "every 1st day of month u will add 4000 rupees as education".
//
// There is no server here. A PWA is not running when it is closed, so a rule
// physically cannot fire at midnight on the 1st -- it fires on the next OPEN
// and back-dates the entry to the day it was owed, because the money left on
// the 1st whether or not the app was looking.
//
// That design has exactly two ways to ruin someone's ledger, and this file
// exists for both of them:
//
//   1. DOUBLE-FIRING. Re-opening the app, a React effect running twice, a
//      restored backup -- any of these re-running a rule silently invents
//      money that was never spent. Nothing on or before `lastRun` may ever
//      fire again.
//   2. BACK-FILLING. A rule created today must never retroactively invoice
//      you for the eleven months before it existed.
//
// Everything here is pure and clock-free: `todayIso` is an argument, never
// `new Date()`. A test that depends on the real date fails once a month for
// reasons nobody will enjoy debugging.

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
  "RECUR_MAX_CATCHUP", "RECUR_MAX_SCAN",
  "isoAddDays", "isoDayOfWeek", "isoDaysInMonth",
  "recurFiresOn", "recurDueDates", "recurToExpense", "runRecurring",
  "recurLabel", "ordinal", "formatMoney", "rngGroup", "aiAmountToMinor", "AI_MAJOR_TO_MINOR",
  "EXPENSE_CAT_COLORS", "EXPENSE_GLYPHS", "MAX_EXPENSE_CATS",
  "expenseCatKey", "addExpenseCat", "renameExpenseCat", "recolourExpenseCat", "removeExpenseCat",
];
let idc = 1;
const M = new Function("makeId", `${NAMES.map(slice).join("\n\n")}\nreturn {${NAMES.join(",")}};`)(
  () => 1000 + idc++
);

const rule = (over = {}) => ({
  id: 7, kind: "expense", every: "month", day: 1,
  amount: 4000, cat: "education", name: "school fee",
  active: true, createdOn: "2026-01-01", lastRun: null, ...over,
});

let pass = 0, fail = 0;
const t = (name, fn) => {
  try { fn(); pass++; console.log("  ✓", name); }
  catch (e) { fail++; console.log("  ✗", name, "\n     ", e.message); process.exitCode = 1; }
};

// ------------------------------------------------------------ date maths --

t("isoAddDays crosses a month boundary", () => {
  assert.equal(M.isoAddDays("2026-01-31", 1), "2026-02-01");
  assert.equal(M.isoAddDays("2026-03-01", -1), "2026-02-28");
});

t("isoAddDays crosses a year boundary", () => {
  assert.equal(M.isoAddDays("2026-12-31", 1), "2027-01-01");
});

t("isoAddDays is not knocked over by a leap year", () => {
  assert.equal(M.isoAddDays("2028-02-28", 1), "2028-02-29");
  assert.equal(M.isoAddDays("2028-02-29", 1), "2028-03-01");
});

t("day-of-week is stable regardless of the machine's timezone", () => {
  // the whole reason these helpers parse into UTC by hand: a Date built from
  // a local string shifts by a day either side of the globe, and the user is
  // in IST while CI is not
  assert.equal(M.isoDayOfWeek("2026-10-20"), 2);   // a Tuesday
  assert.equal(M.isoDayOfWeek("2026-10-25"), 0);   // a Sunday
});

t("isoDaysInMonth knows February", () => {
  assert.equal(M.isoDaysInMonth("2026-02-10"), 28);
  assert.equal(M.isoDaysInMonth("2028-02-10"), 29);
  assert.equal(M.isoDaysInMonth("2026-04-10"), 30);
  assert.equal(M.isoDaysInMonth("2026-12-10"), 31);
});

t("ordinal reads like English, including the teens", () => {
  assert.equal(M.ordinal(1), "1st");
  assert.equal(M.ordinal(2), "2nd");
  assert.equal(M.ordinal(3), "3rd");
  assert.equal(M.ordinal(4), "4th");
  assert.equal(M.ordinal(11), "11th");
  assert.equal(M.ordinal(12), "12th");
  assert.equal(M.ordinal(13), "13th");
  assert.equal(M.ordinal(21), "21st");
  assert.equal(M.ordinal(31), "31st");
});

// ----------------------------------------------------------- firing rules --

t("a monthly rule fires on its day and no other", () => {
  const r = rule({ day: 1 });
  assert.equal(M.recurFiresOn(r, "2026-03-01"), true);
  assert.equal(M.recurFiresOn(r, "2026-03-02"), false);
  assert.equal(M.recurFiresOn(r, "2026-02-28"), false);
});

t("the 31st clamps to the last day of a short month", () => {
  // the alternative -- skipping February -- quietly pays a monthly bill
  // eleven times a year, which is worse and far harder to spot
  const r = rule({ day: 31 });
  assert.equal(M.recurFiresOn(r, "2026-02-28"), true,  "February should clamp to the 28th");
  assert.equal(M.recurFiresOn(r, "2028-02-29"), true,  "a leap February clamps to the 29th");
  assert.equal(M.recurFiresOn(r, "2028-02-28"), false, "...and only to the 29th");
  assert.equal(M.recurFiresOn(r, "2026-04-30"), true,  "April clamps to the 30th");
  assert.equal(M.recurFiresOn(r, "2026-03-31"), true,  "March has a 31st of its own");
});

t("a weekly rule fires on its weekday", () => {
  const r = rule({ every: "week", day: 2 });
  assert.equal(M.recurFiresOn(r, "2026-10-20"), true);
  assert.equal(M.recurFiresOn(r, "2026-10-21"), false);
  assert.equal(M.recurFiresOn(r, "2026-10-27"), true);
});

t("a daily rule fires every day", () => {
  const r = rule({ every: "day" });
  for (const d of ["2026-10-20", "2026-10-21", "2026-02-29"]) assert.equal(M.recurFiresOn(r, d), true);
});

t("a paused rule never fires", () => {
  assert.equal(M.recurFiresOn(rule({ active: false }), "2026-03-01"), false);
  assert.deepEqual(M.recurDueDates(rule({ active: false }), "2026-06-01"), []);
});

t("an unknown schedule fires nothing rather than every day", () => {
  assert.equal(M.recurFiresOn(rule({ every: "fortnight" }), "2026-03-01"), false);
});

// ------------------------------------------------------------- catch-up ---

t("opening late still collects the day it was owed, back-dated", () => {
  // he opens on the 5th; the rent went on the 1st. The entry belongs on
  // the 1st, not on the day he happened to look.
  const due = M.recurDueDates(rule({ createdOn: "2026-02-20" }), "2026-03-05");
  assert.deepEqual(due, ["2026-03-01"]);
});

t("months missed while the app was shut are all collected, oldest first", () => {
  const due = M.recurDueDates(rule({ createdOn: "2026-01-01", lastRun: "2026-01-01" }), "2026-05-03");
  assert.deepEqual(due, ["2026-02-01", "2026-03-01", "2026-04-01", "2026-05-01"]);
});

t("a rule never back-fills before the day it was created", () => {
  // created in June, so January through May are not his problem
  const due = M.recurDueDates(rule({ createdOn: "2026-06-10" }), "2026-08-05");
  assert.deepEqual(due, ["2026-07-01", "2026-08-01"]);
});

t("a rule created ON its own due date still fires that day", () => {
  const due = M.recurDueDates(rule({ createdOn: "2026-06-01" }), "2026-06-01");
  assert.deepEqual(due, ["2026-06-01"]);
});

t("nothing is due before the first occurrence", () => {
  assert.deepEqual(M.recurDueDates(rule({ createdOn: "2026-06-02" }), "2026-06-20"), []);
});

t("catch-up is bounded, so a rule left for years cannot flood the ledger", () => {
  const due = M.recurDueDates(rule({ every: "day", createdOn: "2020-01-01" }), "2026-10-20");
  assert.equal(due.length, M.RECUR_MAX_CATCHUP);
});

t("the look-back window is bounded too", () => {
  // a daily rule untouched for years starts from the scan floor, not 2020
  const due = M.recurDueDates(rule({ every: "day", createdOn: "2020-01-01" }), "2026-10-20");
  assert.ok(due[0] >= M.isoAddDays("2026-10-20", -M.RECUR_MAX_SCAN));
});

// ------------------------------------------------------ idempotency -------

t("running twice on the same day adds nothing the second time", () => {
  // THE bug this file exists for
  const first = M.runRecurring([rule({ createdOn: "2026-02-20" })], "2026-03-05");
  assert.equal(first.added.length, 1);
  const second = M.runRecurring(first.rules, "2026-03-05");
  assert.equal(second.added.length, 0, "the rule fired twice for one period");
});

t("running ten times in a row is the same as running once", () => {
  let rules = [rule({ createdOn: "2026-02-20" })];
  let total = 0;
  for (let i = 0; i < 10; i++) {
    const r = M.runRecurring(rules, "2026-03-05");
    rules = r.rules; total += r.added.length;
  }
  assert.equal(total, 1);
});

t("lastRun advances to the newest date collected, not the oldest", () => {
  const out = M.runRecurring([rule({ createdOn: "2026-01-01", lastRun: "2026-01-01" })], "2026-04-02");
  assert.deepEqual(out.added.map((e) => e.d), ["2026-02-01", "2026-03-01", "2026-04-01"]);
  assert.equal(out.rules[0].lastRun, "2026-04-01");
});

t("a rule that owes nothing is returned untouched", () => {
  const r = rule({ createdOn: "2026-03-02" });
  const out = M.runRecurring([r], "2026-03-10");
  assert.equal(out.added.length, 0);
  assert.equal(out.rules[0], r, "an idle rule should not be rewritten");
});

t("several rules fire independently in one pass", () => {
  const out = M.runRecurring([
    rule({ id: 1, day: 1, amount: 4000, cat: "education", createdOn: "2026-02-20" }),
    rule({ id: 2, day: 5, amount: 300, cat: "bills", createdOn: "2026-02-20" }),
    // created after the 25th and the next 25th has not arrived: owes nothing
    rule({ id: 3, day: 25, amount: 99, cat: "fun", createdOn: "2026-02-26" }),
  ], "2026-03-06");
  assert.deepEqual(out.added.map((e) => e.amt).sort((a, b) => a - b), [300, 4000]);
  assert.equal(out.rules[0].lastRun, "2026-03-01");
  assert.equal(out.rules[1].lastRun, "2026-03-05");
  assert.equal(out.rules[2].lastRun, null, "a rule not yet due should not be stamped");
});

// --------------------------------------------------------- the entry -----

t("the entry it builds is a real expense, dated when it was owed", () => {
  const e = M.recurToExpense(rule(), "2026-03-01");
  assert.equal(e.amt, 4000);
  assert.equal(e.cat, "education");
  assert.equal(e.note, "school fee");
  assert.equal(e.d, "2026-03-01");
  assert.equal(e.rule, 7, "the entry should remember which rule made it");
});

t("his example, end to end", () => {
  // "every 1st day of month u will add 4000 rupees as education"
  const r = rule({ every: "month", day: 1, amount: 4000, cat: "education", createdOn: "2026-10-20" });
  const nov = M.runRecurring([r], "2026-11-01");
  assert.equal(nov.added.length, 1);
  assert.equal(nov.added[0].amt, 4000);
  assert.equal(nov.added[0].cat, "education");
  assert.equal(nov.added[0].d, "2026-11-01");

  const dec = M.runRecurring(nov.rules, "2026-12-01");
  assert.equal(dec.added.length, 1);
  assert.equal(dec.added[0].d, "2026-12-01");

  const again = M.runRecurring(dec.rules, "2026-12-14");
  assert.equal(again.added.length, 0);
});

t("a rule reads back as an English sentence, in rupees not paise", () => {
  // amounts are stored in MINOR units like everything else here. Printing
  // rule.amount raw read "₹400000" for a ₹4000 rule -- a money tracker gets
  // to make that mistake exactly zero times.
  const cats = [{ key: "education", label: "education", color: "#fff" }];
  assert.equal(
    M.recurLabel(rule({ amount: 400000 }), cats, "₹"),
    "₹4,000 education · school fee — every 1st of the month"
  );
  assert.match(M.recurLabel(rule({ every: "week", day: 1 }), cats, "₹"), /every Monday/);
  assert.match(M.recurLabel(rule({ every: "day" }), cats, "₹"), /every day/);
});

t("what the AI says in rupees is stored as paise", () => {
  // "add 4000 as education" means ₹4000. Storing 4000 would file ₹40 --
  // measured on screen before release: a ₹4000 rule showed a ₹40 month.
  assert.equal(M.aiAmountToMinor(4000), 400000);
  assert.equal(M.aiAmountToMinor(250), 25000);
  assert.equal(M.aiAmountToMinor(12.5), 1250);
  assert.equal(M.AI_MAJOR_TO_MINOR, 100);
});

t("an AI amount round-trips back to the number the user said", () => {
  for (const rupees of [1, 40, 250, 4000, 99999]) {
    assert.equal(M.formatMoney(M.aiAmountToMinor(rupees), "₹"), "₹" + rngGroupExpected(rupees));
  }
  function rngGroupExpected(n) { return n.toLocaleString("en-IN"); }
});

// ------------------------------------------------------- categories ------

t("a category can be added and gets an unused colour", () => {
  const cats = M.addExpenseCat([], "education");
  assert.equal(cats.length, 1);
  assert.equal(cats[0].key, "education");
  assert.equal(cats[0].label, "education");
  assert.match(cats[0].color, /^#[0-9A-Fa-f]{6}$/);
});

t("two new categories never share a colour", () => {
  let cats = [];
  for (const l of ["education", "cricket", "recharge"]) cats = M.addExpenseCat(cats, l);
  assert.equal(new Set(cats.map((c) => c.color)).size, 3);
});

t("two categories with the same name get different keys", () => {
  // otherwise the second silently merges into the first
  let cats = M.addExpenseCat([], "food");
  cats = M.addExpenseCat(cats, "food");
  assert.equal(cats.length, 2);
  assert.notEqual(cats[0].key, cats[1].key);
});

t("a key is derived from the label but survives punctuation and emoji", () => {
  assert.equal(M.expenseCatKey("School Fee!", []), "schoolfee");
  assert.equal(M.expenseCatKey("🏏 cricket", []), "cricket");
  assert.equal(M.expenseCatKey("!!!", []), "cat");
});

t("blank categories are refused", () => {
  assert.equal(M.addExpenseCat([], "   ").length, 0);
  assert.equal(M.addExpenseCat([], "").length, 0);
});

t("the category list is capped", () => {
  let cats = [];
  for (let i = 0; i < MAXPLUS(); i++) cats = M.addExpenseCat(cats, "c" + i);
  assert.equal(cats.length, M.MAX_EXPENSE_CATS);
  function MAXPLUS() { return M.MAX_EXPENSE_CATS + 5; }
});

t("renaming leaves the key alone, so nothing is re-filed", () => {
  const cats = M.renameExpenseCat([{ key: "food", label: "food", color: "#fff" }], "food", "groceries");
  assert.equal(cats[0].key, "food");
  assert.equal(cats[0].label, "groceries");
});

t("deleting a category MOVES its spending, never deletes it", () => {
  // money that vanishes from a total because a label was removed is the
  // worst possible outcome for a tracker
  const state = {
    cats: [{ key: "food", label: "food" }, { key: "other", label: "other" }],
    items: [{ id: 1, amt: 500, cat: "food", d: "2026-10-01" }, { id: 2, amt: 20, cat: "other", d: "2026-10-01" }],
  };
  const out = M.removeExpenseCat(state, "food", "other");
  assert.equal(out.cats.length, 1);
  assert.equal(out.items.length, 2, "an entry was destroyed");
  assert.equal(out.items[0].cat, "other");
  assert.equal(out.items.reduce((s, e) => s + e.amt, 0), 520, "the total moved");
});

t("deleting with no target named still rehomes the spending", () => {
  const state = {
    cats: [{ key: "food", label: "food" }, { key: "bills", label: "bills" }],
    items: [{ id: 1, amt: 500, cat: "food", d: "2026-10-01" }],
  };
  const out = M.removeExpenseCat(state, "food");
  assert.equal(out.items[0].cat, "bills");
});

t("the last category cannot be deleted", () => {
  const state = { cats: [{ key: "other", label: "other" }], items: [{ id: 1, amt: 5, cat: "other", d: "x" }] };
  assert.equal(M.removeExpenseCat(state, "other").cats.length, 1);
});

console.log(`recurring.test.mjs: ${pass} passed, ${fail} failed`);
