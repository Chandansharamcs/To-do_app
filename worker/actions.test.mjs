// worker/actions.test.mjs
//
// What the companion can SEE, and what it is allowed to DO.
//
// ---------------------------------------------------------------------------
// The bug this file was written for
// ---------------------------------------------------------------------------
// buildSnapshot read `data.goodHabits` and `data.badHabits`. v35 merged those
// two lists into one `habits` array, and the client has sent `habits` ever
// since -- so from v35 to v53 both arrays arrived EMPTY. Consequences, all
// silent:
//
//   * "what am I neglecting?" was answered with zero knowledge of 29 quests
//   * every delete_good_habit the model proposed was dropped by the id check,
//     because the id set it was checked against was also empty
//   * nothing added after v29 -- expenses, daily tasks, tags, notes -- was
//     ever sent at all
//
// Nothing failed loudly. The model just answered worse than it could have,
// for eighteen versions. The first test below is the permanent guard.
//
// The rest is the other half of the same job: the model is UNTRUSTED INPUT.
// Every action it emits is re-validated here against the snapshot before it
// is ever shown to the user, and ids it invented are dropped rather than
// trusted.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "src", "index.js"), "utf8");

function sliceDecl(name) {
  const patterns = [
    new RegExp(`^const ${name} = `, "m"),
    new RegExp(`^function ${name}\\(`, "m"),
  ];
  let start = -1, isConst = false;
  for (const re of patterns) {
    const m = SRC.match(re);
    if (m) { start = m.index; isConst = m[0].startsWith("const"); break; }
  }
  assert.ok(start >= 0, `could not lift "${name}" — was it renamed?`);
  let i;
  if (isConst) i = SRC.indexOf("=", start) + 1;
  else {
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
    if (c === "}" || c === "]") { depth--; if (seen && depth === 0) return SRC.slice(start, SRC.indexOf("\n", i)); continue; }
    if (c === ";" && depth === 0 && isConst) return SRC.slice(start, i + 1);
  }
  throw new Error("unterminated slice: " + name);
}

const NAMES = ["HHMM", "buildSnapshot", "sanitiseActions"];
const M = new Function(`${NAMES.map(sliceDecl).join("\n\n")}\nreturn {${NAMES.join(",")}};`)();

let pass = 0, fail = 0;
const t = (name, fn) => {
  try { fn(); pass++; console.log("  ✓", name); }
  catch (e) { fail++; console.log("  ✗", name, "\n     ", e.message); process.exitCode = 1; }
};

/** Exactly the object app.jsx passes as `data`. */
const clientPayload = () => ({
  routines: [{ id: 1, time: "05:30", label: "Wake up", duration: 10, history: ["2026-10-01"] }],
  vaultHabits: [{ id: 2, label: "Read", weeklyGoal: 3, icon: "◆", history: [] }],
  habits: [
    { id: 10, label: "Workout", tags: ["body"], desc: "a full session", xp: 50, penalty: 50,
      history: [{ d: "2026-10-01", t: "done" }, { d: "2026-10-02", t: "slip" }] },
    { id: 11, label: "Junk Food", tags: ["health"], desc: "", xp: 0, penalty: 30, history: [] },
  ],
  rewards: [{ id: 20, label: "Movie", cost: 100, claimed: [] }],
  tags: [{ key: "body", label: "Body" }, { key: "health", label: "Health" }, { key: "work", label: "Work" }],
  inventory: [{ id: 30, text: "100 push ups", diff: "hard", tags: ["body"], history: ["2026-10-01"] }],
  expenses: [{ id: 40, amt: 120, cat: "food", note: "samosa", d: "2026-10-19" }],
  expenseCats: [{ key: "food", label: "food" }, { key: "bills", label: "bills" }],
  recurring: [{ id: 50, amount: 4000, cat: "bills", name: "fees", every: "month", day: 1, active: true }],
  currency: "₹",
  notes: [{ id: 60, title: "ideas" }],
  coins: 190,
  totalXP: 1200,
  today: "2026-10-20",
});

// ------------------------------------------------------------- the snapshot --

t("THE REGRESSION: quests actually reach the model", () => {
  // the one that was broken from v35 to v53
  const snap = M.buildSnapshot(clientPayload());
  assert.equal(snap.quests.length, 2, "the model received zero quests again");
  assert.equal(snap.quests[0].label, "Workout");
});

t("a quest arrives with its tags, description and both XP numbers", () => {
  const q = M.buildSnapshot(clientPayload()).quests[0];
  assert.deepEqual(q.tags, ["body"]);
  assert.equal(q.desc, "a full session");
  assert.equal(q.xp, 50);
  assert.equal(q.penalty, 50);
});

t("done and slipped are counted separately, not lumped together", () => {
  // the old summarise() returned history.length, which for a v35 habit is
  // "times you interacted with it" -- useless for judging how it is going
  const q = M.buildSnapshot(clientPayload()).quests[0];
  assert.equal(q.done, 1);
  assert.equal(q.slipped, 1);
});

t("a pre-v35 client still works", () => {
  // someone running a cached old build must not become invisible
  const snap = M.buildSnapshot({
    goodHabits: [{ id: 1, label: "Old good", area: "work", xp: 10, history: [] }],
    badHabits: [{ id: 2, label: "Old bad", area: "self", xp: 5, history: [] }],
  });
  assert.equal(snap.quests.length, 2);
});

t("the merged list wins when both are somehow present", () => {
  const snap = M.buildSnapshot({
    habits: [{ id: 1, label: "New", tags: [], history: [] }],
    goodHabits: [{ id: 9, label: "Stale", history: [] }],
  });
  assert.equal(snap.quests.length, 1);
  assert.equal(snap.quests[0].label, "New");
});

t("money, daily tasks, tags and notes all reach the model", () => {
  const snap = M.buildSnapshot(clientPayload());
  assert.equal(snap.expenses.length, 1);
  assert.equal(snap.expenseCats.length, 2);
  assert.equal(snap.recurring.length, 1);
  assert.equal(snap.dailyTasks.length, 1);
  assert.equal(snap.tags.length, 3);
  assert.equal(snap.notes.length, 1);
  assert.equal(snap.currency, "₹");
  assert.equal(snap.coins, 190);
});

t("the expense list is capped so a year of rows cannot blow the token budget", () => {
  const many = Array.from({ length: 500 }, (_, i) => ({ id: i, amt: 10, cat: "food", d: "2026-01-01" }));
  assert.equal(M.buildSnapshot({ expenses: many }).expenses.length, 40);
});

t("an empty payload produces a snapshot, not a crash", () => {
  const snap = M.buildSnapshot({});
  assert.deepEqual(snap.quests, []);
  assert.deepEqual(snap.expenses, []);
});

// ------------------------------------------------------------- validation --

const snap = () => M.buildSnapshot(clientPayload());
const only = (raw) => M.sanitiseActions(raw, snap());

t("a well-formed expense survives", () => {
  const out = only([{ op: "add_expense", amount: 250, cat: "food", name: "lunch" }]);
  assert.equal(out.length, 1);
  assert.equal(out[0].amount, 250);
  assert.equal(out[0].cat, "food");
});

t("an expense filed under a category that does not exist is DROPPED", () => {
  // money quietly landing in a category nobody can see is worse than the
  // model being told no
  assert.deepEqual(only([{ op: "add_expense", amount: 250, cat: "crypto", name: "x" }]), []);
});

t("a category created earlier in the same batch may be used immediately", () => {
  // the realistic flow: "add 4000 for education" when education does not exist
  const out = only([
    { op: "add_expense_cat", label: "education" },
    { op: "add_expense", amount: 4000, cat: "education", name: "fees" },
  ]);
  assert.equal(out.length, 2);
  assert.equal(out[1].cat, "education");
});

t("re-creating an existing category is a silent no-op, not a duplicate", () => {
  assert.deepEqual(only([{ op: "add_expense_cat", label: "food" }]), []);
});

t("a nonsense amount is refused", () => {
  assert.deepEqual(only([{ op: "add_expense", amount: 0, cat: "food" }]), []);
  assert.deepEqual(only([{ op: "add_expense", amount: -5, cat: "food" }]), []);
  assert.deepEqual(only([{ op: "add_expense", amount: "lots", cat: "food" }]), []);
});

t("a malformed date is dropped but the expense survives", () => {
  const out = only([{ op: "add_expense", amount: 10, cat: "food", date: "yesterday" }]);
  assert.equal(out.length, 1);
  assert.equal(out[0].date, undefined, "an unparseable date should not be passed through");
});

t("his exact sentence becomes the right rule", () => {
  // "every 1st day of month u will add 4000 rupees as education"
  const out = only([
    { op: "add_expense_cat", label: "education" },
    { op: "add_recurring", amount: 4000, cat: "education", name: "education", every: "month", day: 1 },
  ]);
  assert.equal(out.length, 2);
  assert.deepEqual(out[1], { op: "add_recurring", amount: 4000, cat: "education", name: "education", every: "month", day: 1 });
});

t("a weekday out of range is clamped to something legal", () => {
  const out = only([{ op: "add_recurring", amount: 50, cat: "food", every: "week", day: 99 }]);
  assert.equal(out.length, 1);
  assert.ok(out[0].day >= 0 && out[0].day <= 6);
});

t("a day-of-month out of range is clamped too", () => {
  const out = only([{ op: "add_recurring", amount: 50, cat: "food", every: "month", day: 77 }]);
  assert.ok(out[0].day >= 1 && out[0].day <= 31);
});

t("editing or deleting a rule requires a real id", () => {
  assert.deepEqual(only([{ op: "delete_recurring", id: 99999 }]), []);
  assert.deepEqual(only([{ op: "edit_recurring", id: 99999, amount: 1 }]), []);
  assert.equal(only([{ op: "delete_recurring", id: 50 }]).length, 1);
  assert.equal(only([{ op: "edit_recurring", id: 50, active: false }]).length, 1);
});

t("a quest can be added with tags the user actually owns", () => {
  const out = only([{ op: "add_quest", label: "Swim", tags: ["body"], desc: "laps", xp: 30, penalty: 10 }]);
  assert.equal(out.length, 1);
  assert.deepEqual(out[0].tags, ["body"]);
});

t("invented tag keys are stripped, the quest survives untagged", () => {
  const out = only([{ op: "add_quest", label: "Swim", tags: ["aquatics"], xp: 30 }]);
  assert.equal(out.length, 1);
  assert.deepEqual(out[0].tags, []);
});

t("a quest cannot wear more than two tags", () => {
  const out = only([{ op: "add_quest", label: "Everything", tags: ["body", "health", "work"], xp: 30 }]);
  assert.equal(out[0].tags.length, 2);
});

t("a quest worth nothing at all is refused", () => {
  assert.deepEqual(only([{ op: "add_quest", label: "Exist", xp: 0, penalty: 0 }]), []);
});

t("edit_quest needs a real id and at least one real change", () => {
  assert.deepEqual(only([{ op: "edit_quest", id: 99999, xp: 10 }]), []);
  assert.deepEqual(only([{ op: "edit_quest", id: 10 }]), []);
  assert.equal(only([{ op: "edit_quest", id: 10, xp: 60 }]).length, 1);
});

t("delete_quest works against the merged list, which is the whole point", () => {
  // this is the op that could never fire before, because ids.good was empty
  assert.equal(only([{ op: "delete_quest", id: 10 }]).length, 1);
  assert.equal(only([{ op: "delete_quest", id: 11 }]).length, 1);
  assert.deepEqual(only([{ op: "delete_quest", id: 12 }]), []);
});

t("the legacy delete ops now resolve against the merged list too", () => {
  assert.equal(only([{ op: "delete_good_habit", id: 10 }]).length, 1);
  assert.equal(only([{ op: "delete_bad_habit", id: 11 }]).length, 1);
});

t("a daily task defaults to mid rather than being refused", () => {
  const out = only([{ op: "add_daily_task", text: "20 laps", diff: "legendary", tags: ["body"] }]);
  assert.equal(out[0].diff, "mid");
});

t("deleting a daily task needs a real id", () => {
  assert.equal(only([{ op: "delete_daily_task", id: 30 }]).length, 1);
  assert.deepEqual(only([{ op: "delete_daily_task", id: 31 }]), []);
});

t("a note needs a title", () => {
  assert.equal(only([{ op: "add_note", title: "ideas", body: "x" }]).length, 1);
  assert.deepEqual(only([{ op: "add_note", body: "x" }]), []);
});

t("an unknown op is ignored rather than passed through", () => {
  assert.deepEqual(only([{ op: "drop_database" }, { op: "add_expense", amount: 1, cat: "food" }]).length, 1);
});

t("the batch is bounded", () => {
  const spam = Array.from({ length: 200 }, () => ({ op: "add_expense", amount: 1, cat: "food" }));
  assert.ok(only(spam).length <= 25);
});

t("garbage in, empty array out", () => {
  assert.deepEqual(M.sanitiseActions(null, snap()), []);
  assert.deepEqual(M.sanitiseActions("nope", snap()), []);
  assert.deepEqual(only([null, 7, "x", {}]), []);
});

t("old routine ops still work, so nothing regressed", () => {
  assert.equal(only([{ op: "add_routine", time: "07:30", label: "School", duration: 390 }]).length, 1);
  assert.deepEqual(only([{ op: "add_routine", time: "25:99", label: "Bad" }]), []);
  assert.equal(only([{ op: "delete_routine", id: 1 }]).length, 1);
  assert.deepEqual(only([{ op: "delete_routine", id: 404 }]), []);
});

// ------------------------------------------------------------ the prompt --

t("the prompt describes every op the validator accepts", () => {
  // a shape the model is never told about is a feature that does not exist
  const prompt = SRC.slice(SRC.indexOf("const COMPANION_PROMPT"));
  for (const op of [
    "add_expense", "add_expense_cat", "add_recurring", "edit_recurring",
    "delete_recurring", "delete_expense", "add_quest", "edit_quest",
    "delete_quest", "add_daily_task", "delete_daily_task", "add_tag", "add_note",
  ]) {
    assert.ok(prompt.includes(`"op":"${op}"`), `the companion prompt never mentions ${op}`);
  }
});

t("the prompt no longer teaches the taxonomy v52 deleted", () => {
  const prompt = SRC.slice(SRC.indexOf("const COMPANION_PROMPT"));
  assert.ok(!/work\|fitness\|health\|self/.test(prompt), "still describing the old four areas");
  assert.ok(!/deep\|admin\|learning/.test(prompt), "still describing the old sub-tags");
});

console.log(`actions.test.mjs — ${pass} passed${fail ? `, ${fail} failed` : ""}`);
