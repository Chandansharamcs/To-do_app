// store.test.mjs
//
// v60: "when was this last done" and "what is using the space".
//
// Both are read-only reporting, which makes them easy to get subtly wrong and
// hard to notice: a date comparison that is off by a day is invisible until a
// streak looks wrong, and a byte estimate that double-counts is invisible
// until the quota fails anyway.
//
// The rules pinned here:
//   1. day differences are IST CALENDAR days, not elapsed milliseconds
//   2. "last done" is the newest entry in history, whatever order it arrived in
//   3. a task that has never been done says so, rather than reading as today
//   4. the label never says "0d ago" -- today and yesterday have names

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

/** Lift one top-level declaration out of app.jsx by name. Same shape as
 *  tags.test.mjs / dailytags.test.mjs: depth-counting, string and comment
 *  aware, so a brace inside a string cannot end the slice early. */
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

const NAMES = ["DAY_ROLLOVER_MINUTES", "istDaysBetween", "daysAgoLabel", "dailyLastDone", "getISTDateString"];
const M = new Function(`${NAMES.map(slice).join("\n\n")}\nreturn {${NAMES.join(",")}};`)();


let pass = 0, fail = 0;
const t = (name, fn) => {
  try { fn(); pass++; }
  catch (e) { fail++; console.error(`  ✗ ${name}\n    ${e.message}`); }
};

// ---- istDaysBetween --------------------------------------------------------

// ------------------------------------------------------ v63: the 03:00 line --
//
// One rollover rule for the whole app. Before 03:00 IST it is still the day
// you were awake for; at 03:00 the day turns over. Everything that asks
// getISTDateString inherits this -- streaks, seven-day strips, the board,
// expense dates -- so this is the one place it can be wrong.

/** getISTDateString with Date.now() pinned to `ms`. */
function dayAt(ms) {
  const Real = Date;
  function Pinned(...args) {
    if (args.length === 0) return new Real(ms);
    return new Real(...args);
  }
  Pinned.now = () => ms;
  const src = `${slice("DAY_ROLLOVER_MINUTES")}\n${slice("getISTDateString")}\nreturn getISTDateString;`;
  return new Function("Date", src)(Pinned);
}

const ist = (y, mo, d, h, mi) => Date.UTC(y, mo - 1, d, h - 5, mi - 30); // IST -> epoch ms

t("before 03:00 IST the day is still yesterday", () => {
  assert.equal(dayAt(ist(2026, 10, 20, 1, 30))(), "2026-10-19");
  assert.equal(dayAt(ist(2026, 10, 20, 2, 59))(), "2026-10-19");
});

t("at 03:00 IST the day turns over", () => {
  assert.equal(dayAt(ist(2026, 10, 20, 3, 0))(), "2026-10-20");
  assert.equal(dayAt(ist(2026, 10, 20, 3, 1))(), "2026-10-20");
});

t("midnight no longer changes the day", () => {
  // the old boundary: 23:59 vs 00:01 were different days, which is exactly
  // what finishing something at half past midnight used to punish
  assert.equal(dayAt(ist(2026, 10, 20, 23, 59))(), "2026-10-20");
  assert.equal(dayAt(ist(2026, 10, 21, 0, 1))(), "2026-10-20");
});

t("offsets count calendar days from the rolled-over day", () => {
  assert.equal(dayAt(ist(2026, 10, 20, 1, 30))(-1), "2026-10-18");
  assert.equal(dayAt(ist(2026, 10, 20, 4, 0))(-1), "2026-10-19");
  assert.equal(dayAt(ist(2026, 10, 20, 4, 0))(7), "2026-10-27");
});

t("the rollover works across a month boundary", () => {
  assert.equal(dayAt(ist(2026, 11, 1, 1, 0))(), "2026-10-31");
  assert.equal(dayAt(ist(2026, 11, 1, 3, 30))(), "2026-11-01");
});
t("a date is zero days from itself", () => {
  assert.equal(M.istDaysBetween("2026-10-20", "2026-10-20"), 0);
});

t("consecutive calendar days are one apart", () => {
  assert.equal(M.istDaysBetween("2026-10-19", "2026-10-20"), 1);
  assert.equal(M.istDaysBetween("2026-10-01", "2026-10-02"), 1);
});

t("a month boundary is not a rounding accident", () => {
  assert.equal(M.istDaysBetween("2026-09-30", "2026-10-01"), 1);
  assert.equal(M.istDaysBetween("2026-01-31", "2026-02-01"), 1);
});

t("a year boundary counts correctly, including a leap day", () => {
  assert.equal(M.istDaysBetween("2025-12-31", "2026-01-01"), 1);
  // 2028 is a leap year: Feb has 29 days
  assert.equal(M.istDaysBetween("2028-02-28", "2028-03-01"), 2);
  // 2026 is not: Feb has 28
  assert.equal(M.istDaysBetween("2026-02-28", "2026-03-01"), 1);
});

t("36.5 hours apart is still ONE calendar day, not two", () => {
  // the reason this uses date strings and not Date.now(): a task done at
  // 23:00 and again at 06:30 the next day is "yesterday" to a person, and
  // an elapsed-milliseconds division would call it zero days
  assert.equal(M.istDaysBetween("2026-10-19", "2026-10-20"), 1);
});

t("garbage in gives null, not NaN or a wrong number", () => {
  assert.equal(M.istDaysBetween("not-a-date", "2026-10-20"), null);
  assert.equal(M.istDaysBetween("2026-10-20", undefined), null);
});

// ---- daysAgoLabel ----------------------------------------------------------

t("today and yesterday have names", () => {
  assert.equal(M.daysAgoLabel(0), "today");
  assert.equal(M.daysAgoLabel(1), "yesterday");
});

t("nothing ever reads as 0d ago", () => {
  for (let d = 0; d <= 3; d++) assert.ok(!/^0d/.test(M.daysAgoLabel(d)));
});

t("the scale switches units where a person would", () => {
  assert.equal(M.daysAgoLabel(2), "2d ago");
  assert.equal(M.daysAgoLabel(29), "29d ago");
  assert.equal(M.daysAgoLabel(30), "1mo ago");
  assert.equal(M.daysAgoLabel(364), "12mo ago");
  assert.equal(M.daysAgoLabel(365), "1y ago");
});

t("a clock skew into the future does not produce a negative age", () => {
  assert.equal(M.daysAgoLabel(-3), "today");
});

// ---- dailyLastDone ---------------------------------------------------------

const TODAY = M.getISTDateString(0);
const daysBack = (n) => {
  const d = new Date(Date.parse(`${TODAY}T00:00:00Z`) - n * 86400000);
  return d.toISOString().slice(0, 10);
};

t("a task with no history has no last-done", () => {
  assert.equal(M.dailyLastDone({ id: 1, history: [] }), null);
  assert.equal(M.dailyLastDone({ id: 1 }), null);
  assert.equal(M.dailyLastDone(null), null);
});

t("the newest entry wins, whatever order it was written in", () => {
  const messy = [daysBack(9), daysBack(2), daysBack(5)];
  const got = M.dailyLastDone({ history: messy });
  assert.equal(got.date, daysBack(2));
  assert.equal(got.days, 2);
});

t("one entry reads as its own age", () => {
  assert.equal(M.dailyLastDone({ history: [daysBack(1)] }).days, 1);
  assert.equal(M.dailyLastDone({ history: [daysBack(1)] }).date, daysBack(1));
});

t("done today reads as today", () => {
  const got = M.dailyLastDone({ history: [daysBack(0)] });
  assert.equal(got.days, 0);
  assert.equal(M.daysAgoLabel(got.days), "today");
});

t("a long-forgotten task still reports a usable phrase", () => {
  const got = M.dailyLastDone({ history: [daysBack(100)] });
  assert.equal(got.days, 100);
  assert.equal(M.daysAgoLabel(got.days), "3mo ago");
});

console.log(`store.test.mjs: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
