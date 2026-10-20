// tags.test.mjs
//
// The v52 tag model: one editable list of tags, a quest may wear several,
// and every tag it wears gets the FULL value (option ①).
//
// The thing most worth protecting here is that choice. The rejected
// alternative -- splitting a quest's XP between its tags -- is seductive
// because the axes then sum to your total. It is also corrupting: a 2-tag
// quest would be worth half per axis, so the chart would quietly reward you
// for under-tagging and the data would rot. These tests pin full credit, and
// pin that your LEVEL still counts each quest exactly once.

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
  "DEFAULT_TAGS", "TAG_PALETTE", "MAX_TAGS", "STORAGE_KEY_TAGS",
  "AREA_TO_TAG", "migrateAreaToTag", "habitTags",
  "normaliseHistory", "countHist", "habitXP", "habitPenalty", "habitNet",
  "computeTagXPRaw", "computeTagXP", "computeTotalXP", "axisBreakdown",
];
const M = new Function(`${NAMES.map(slice).join("\n\n")}\nreturn {${NAMES.join(",")}};`)();

const T5 = M.DEFAULT_TAGS;
const q = (label, tags, xp, pen, done = 0, slip = 0) => ({
  id: label, label, tags, xp, penalty: pen,
  history: [
    ...Array.from({ length: done }, (_, i) => ({ d: `2026-01-${String(i + 1).padStart(2, "0")}`, t: "done" })),
    ...Array.from({ length: slip }, (_, i) => ({ d: `2026-02-${String(i + 1).padStart(2, "0")}`, t: "slip" })),
  ],
});

let pass = 0, failed = 0;
const tests = [];
const Test = (n, f) => tests.push([n, f]);

// ---- the five -------------------------------------------------------------

Test("the defaults are the five that were asked for", () => {
  assert.deepEqual(T5.map((t) => t.key), ["work", "body", "health", "self", "discipline"]);
  for (const t of T5) {
    assert.ok(/^#[0-9a-fA-F]{6}$/.test(t.color), `${t.key} has no colour`);
    assert.ok(t.label.length <= 13, `${t.label} is too long for a radar label`);
  }
  assert.equal(new Set(T5.map((t) => t.color)).size, 5, "two tags share a colour");
});

Test("the palette can colour a full set of tags without repeating", () => {
  assert.ok(M.TAG_PALETTE.length >= M.MAX_TAGS, "adding tags would run out of colours");
  assert.equal(new Set(M.TAG_PALETTE).size, M.TAG_PALETTE.length, "the palette repeats itself");
});

// ---- option ①: full credit ------------------------------------------------

Test("a two-tag quest gives its FULL value to both tags", () => {
  const habits = [q("Workout", ["body", "discipline"], 50, 0, 4)];   // 200 XP
  assert.equal(M.computeTagXP("body", habits, T5), 200);
  assert.equal(M.computeTagXP("discipline", habits, T5), 200);
});

Test("the axes deliberately sum to more than your total XP", () => {
  const habits = [q("Workout", ["body", "discipline"], 50, 0, 4)];
  const axes = T5.reduce((sum, t) => sum + M.computeTagXP(t.key, habits, T5), 0);
  assert.equal(axes, 400);
  assert.equal(M.computeTotalXP(habits), 200, "the TOTAL must still count it once");
  assert.ok(axes > M.computeTotalXP(habits), "this is the documented behaviour, not a bug");
});

Test("tagging a quest twice must never DILUTE it", () => {
  // the rejected 'split' model: a 2-tag quest worth half per axis would make
  // the chart reward under-tagging, so this asserts the opposite
  const one = [q("W", ["body"], 50, 0, 4)];
  const two = [q("W", ["body", "discipline"], 50, 0, 4)];
  assert.equal(M.computeTagXP("body", two, T5), M.computeTagXP("body", one, T5),
    "adding a second tag reduced the first one's value");
});

Test("your level is unaffected by how many tags a quest wears", () => {
  const one = [q("W", ["body"], 50, 0, 4)];
  const five = [q("W", T5.map((t) => t.key), 50, 0, 4)];
  assert.equal(M.computeTotalXP(five), M.computeTotalXP(one), "tagging changed progression");
});

Test("a tag nobody wears is zero, not undefined", () => {
  assert.equal(M.computeTagXP("body", [q("D", ["work"], 50, 0, 3)], T5), 0);
});

// ---- the floor ------------------------------------------------------------

Test("a tag that only loses XP is floored at zero on the chart", () => {
  const habits = [q("Gaming", ["discipline"], 0, 30, 0, 5)];
  assert.equal(M.computeTagXPRaw("discipline", habits, T5), -150);
  assert.equal(M.computeTagXP("discipline", habits, T5), 0);
});

Test("no tag can ever plot below zero", () => {
  const habits = [
    q("Gaming", ["discipline"], 0, 30, 0, 9),
    q("Junk", ["health"], 0, 25, 0, 4),
    q("Deep", ["work"], 50, 10, 3, 1),
  ];
  for (const t of T5) assert.ok(M.computeTagXP(t.key, habits, T5) >= 0, t.key);
});

// ---- migration from v51 ---------------------------------------------------

Test("the old four areas land on the new five", () => {
  assert.deepEqual(M.AREA_TO_TAG, { work: "work", fitness: "body", health: "health", self: "self" });
  const known = new Set(T5.map((t) => t.key));
  assert.deepEqual(M.migrateAreaToTag({ area: "fitness" }, known), ["body"]);
});

Test("old sub-tags that belong somewhere else are moved, not lost", () => {
  const known = new Set(T5.map((t) => t.key));
  // screen time was filed under health; it is discipline now
  assert.ok(M.migrateAreaToTag({ area: "health", sub: "screen" }, known).includes("discipline"));
  // admin was under work; following your own system is discipline
  assert.ok(M.migrateAreaToTag({ area: "work", sub: "admin" }, known).includes("discipline"));
});

Test("a v51 habit still lands on a real tag", () => {
  for (const h of [
    { area: "work", sub: "deep" }, { area: "fitness", sub: "training" },
    { area: "health", sub: "sleep" }, { area: "self", sub: "creative" },
  ]) {
    const got = M.habitTags(h, T5);
    assert.ok(got.length >= 1, JSON.stringify(h));
    for (const k of got) assert.ok(T5.some((t) => t.key === k), `${k} is not a real tag`);
  }
});

Test("a habit with no area and no tags still appears somewhere", () => {
  // falling off the chart entirely is the one outcome that must not happen
  const got = M.habitTags({ label: "orphan" }, T5);
  assert.equal(got.length, 1);
  assert.equal(got[0], T5[0].key);
});

Test("tags pointing at a deleted tag are dropped, not rendered", () => {
  const got = M.habitTags({ tags: ["work", "ghosttag"] }, T5);
  assert.deepEqual(got, ["work"]);
  // and if ALL of them are gone, it falls back rather than vanishing
  assert.equal(M.habitTags({ tags: ["ghost1", "ghost2"] }, T5).length, 1);
});

Test("the new shape wins over the old one when both are present", () => {
  const h = { area: "work", sub: "deep", tags: ["health"] };
  assert.deepEqual(M.habitTags(h, T5), ["health"]);
});

// ---- the axis popup still reconciles --------------------------------------

Test("the breakdown matches the axis it describes", () => {
  const habits = [
    q("Workout", ["body", "discipline"], 50, 20, 4, 1),
    q("Karate", ["body"], 50, 30, 2, 0),
  ];
  const b = M.axisBreakdown(habits, (h) => M.habitTags(h, T5).includes("body"));
  assert.equal(b.value, M.computeTagXP("body", habits, T5));
  assert.equal(b.raw, M.computeTagXPRaw("body", habits, T5));
  assert.equal(b.count, 2);
  assert.equal(b.gained - b.lost, b.raw);
});

// ---- the owner's actual set ----------------------------------------------

Test("every quest in the owner's new file lands on a real tag", () => {
  let file;
  try { file = JSON.parse(readFileSync("/home/user/out/tasks-sh-v52-reset.json", "utf8")); }
  catch { return; }                                  // not present in a clean checkout
  const tags = JSON.parse(file.store["tasksh.tags.v1"]);
  const habits = JSON.parse(file.store["tasksh.habits.v1"]);
  assert.equal(habits.length, 29, "a quest went missing in the remap");
  const known = new Set(tags.map((t) => t.key));
  for (const h of habits) {
    assert.ok(Array.isArray(h.tags) && h.tags.length, `${h.label} has no tags`);
    for (const k of h.tags) assert.ok(known.has(k), `${h.label} wears unknown tag ${k}`);
    assert.ok(h.desc && h.desc.length > 4, `${h.label} has no description`);
    assert.equal(h.history.length, 0, `${h.label} still has history`);
    assert.ok(h.xp >= 0 && h.penalty >= 0, `${h.label} has a negative value`);
  }
  assert.equal(JSON.parse(file.store["tasksh.wallet.v1"]).coins, 0, "coins were not reset");
  assert.equal(M.computeTotalXP(habits), 0, "XP was not reset");
});

Test("the owner's file keeps everything that is not a point", () => {
  let file;
  try { file = JSON.parse(readFileSync("/home/user/out/tasks-sh-v52-reset.json", "utf8")); }
  catch { return; }
  for (const k of ["tasksh.routines.v1", "tasksh.inventory.v1", "tasksh.tasks.v1",
                   "tasksh.notes.v1", "tasksh.rewards.v1", "tasksh.expenses.v1",
                   "tasksh.rngdle.v2", "tasksh.pet.v1"]) {
    assert.ok(file.store[k], `${k} was dropped`);
  }
  assert.equal(JSON.parse(file.store["tasksh.routines.v1"]).length, 19, "routines changed");
  assert.equal(JSON.parse(file.store["tasksh.inventory.v1"]).length, 20, "planner changed");
  assert.ok(!file.store["tasksh.subareas.v1"], "the dead sub-tag store is still in there");
});

Test("opposite pairs point at each other, both ways", () => {
  let file;
  try { file = JSON.parse(readFileSync("/home/user/out/tasks-sh-v52-reset.json", "utf8")); }
  catch { return; }
  const habits = JSON.parse(file.store["tasksh.habits.v1"]);
  const byId = Object.fromEntries(habits.map((h) => [String(h.id), h]));
  let pairs = 0;
  for (const h of habits) {
    if (!h.opposite) continue;
    const other = byId[String(h.opposite)];
    assert.ok(other, `${h.label} points at a quest that does not exist`);
    assert.equal(String(other.opposite), String(h.id), `${h.label} <-> ${other.label} is one-way`);
    pairs++;
  }
  assert.equal(pairs / 2, 3, "expected three opposite pairs");
});

for (const [name, fn] of tests) {
  try { fn(); pass++; }
  catch (e) { failed++; console.error(`FAIL  ${name}\n      ${e.message}`); }
}
console.log(`tags.test.mjs: ${pass} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
