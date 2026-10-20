// slots.test.mjs
//
// Roll slots (v57). The rule being protected is the same one v56's luck
// depends on: A SLOT BUYS ANOTHER DRAW, NEVER A BETTER NUMBER.
//
// Every panel is an ordinary, independent draw scored by the same table. The
// highest-EP panel is the roll; the others are shown and NOT paid. If a future
// edit ever pays more than one panel, or shifts a panel's number, the whole
// EP economy and every badge count in the catalogue stop being true -- so the
// tests below assert the payout, the panel count and the purity of the score.

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

const CODE = region("const RNG_MAX = 1000000;", "const STORAGE_KEY_RNGI");
const EXPORTS = [
  "RNG_MAX", "RNGI_MAX_SLOTS", "RNGI_PRODUCTS", "RNGI_PRODUCT_BY_ID",
  "RNGI_SHELVES", "RNGI_SKILL_MAX_DRAWS", "rngiScore", "rngiDraw",
  "rngiPlanDraws", "rngiRunDraws", "rngiRoll", "rngiSlotCount", "rngiLuck",
  "rngiLuckDraws", "rngiWalletMult", "rngiSkillEffects",
];
const M = new Function(`${CODE}\nreturn {${EXPORTS.join(",")}};`)();

const scripted = (...ns) => {
  let i = 0;
  return () => {
    const v = ns[Math.min(i++, ns.length - 1)];
    return v / (M.RNG_MAX + 1);
  };
};
const seeded = (seed) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const LOW = 283614;   // common
const HIGH = 777;     // mythic
const blank = (over = {}) => ({
  ep: 0, earned: 0, lifetime: 0, spent: 0, rolls: 0, totalRolls: 0, draws: 0, streak: 0,
  owned: [], pets: [], wearing: null, skills: [], armed: [], charges: {},
  seen: {}, best: null, history: [], cycles: [], rebirths: 0, prestiges: 0,
  rollbacks: 0, surplusPct: 0, revealUntil: 0, cooldownUntil: 0, lastSeen: 0, ...over,
});

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- how many panels --------------------------------------------------------

T("no slot owned means one panel, exactly as before v57", () => {
  assert.equal(M.rngiSlotCount([]), 1);
  assert.equal(M.rngiSlotCount(undefined), 1);
  assert.equal(M.rngiSlotCount(["quickwind-1", "monolith"]), 1, "other products are not slots");
});

T("each bought slot adds exactly one panel", () => {
  assert.equal(M.rngiSlotCount(["slot-2"]), 2);
  assert.equal(M.rngiSlotCount(["slot-2", "slot-3"]), 3);
  assert.equal(M.rngiSlotCount(["slot-2", "slot-3", "slot-4", "slot-5", "slot-6"]), 6);
});

T("a save listing slots out of order still resolves to the best one", () => {
  assert.equal(M.rngiSlotCount(["slot-5", "slot-2"]), 5);
  assert.equal(M.rngiSlotCount(["slot-2", "slot-6", "slot-3"]), 6);
});

T("the panel count is capped, so the stage cannot grow without limit", () => {
  const all = ["slot-2", "slot-3", "slot-4", "slot-5", "slot-6"];
  assert.equal(M.rngiSlotCount(all), M.RNGI_MAX_SLOTS);
  assert.equal(M.rngiSlotCount(["not-a-product"]), 1, "an unknown id is ignored, not counted");
  // the clamp that actually matters is in the draw engine: a caller asking for
  // 99 panels must still get RNGI_MAX_SLOTS, because the reveal lays them out.
  const r = M.rngiRunDraws([], seeded(1), 99);
  assert.equal(r.slots.length, M.RNGI_MAX_SLOTS,
    `engine drew ${r.slots.length} panels, cap is ${M.RNGI_MAX_SLOTS}`);
});

// ---- the slot ladder as a product ------------------------------------------

T("the ladder is a chain: every rung requires the one below it", () => {
  const ladder = ["slot-2", "slot-3", "slot-4", "slot-5", "slot-6"];
  for (let i = 0; i < ladder.length; i++) {
    const p = M.RNGI_PRODUCT_BY_ID[ladder[i]];
    assert.ok(p, `${ladder[i]} missing from the catalogue`);
    assert.equal(p.kind, "draw-slot", `${ladder[i]} is not a slot`);
    assert.equal(p.value, i + 2, `${ladder[i]} claims ${p.value} panels, expected ${i + 2}`);
    if (i === 0) assert.equal(p.requires, null);
    else assert.equal(p.requires, ladder[i - 1], `${ladder[i]} skips a rung`);
  }
});

T("prices climb, and no rung is cheaper than the one below it", () => {
  const prices = ["slot-2", "slot-3", "slot-4", "slot-5", "slot-6"].map((id) => M.RNGI_PRODUCT_BY_ID[id].price);
  for (let i = 1; i < prices.length; i++) {
    assert.ok(prices[i] > prices[i - 1], `rung ${i + 2} is not dearer than rung ${i + 1}`);
  }
});

T("the shop has a shelf that actually lists them", () => {
  const shelf = M.RNGI_SHELVES.find((s) => s.kinds.includes("draw-slot"));
  assert.ok(shelf, "no shelf carries the draw-slot kind, so the ladder would be unbuyable");
  const listed = M.RNGI_PRODUCTS.filter((p) => shelf.kinds.includes(p.kind));
  assert.equal(listed.length, 5);
});

// ---- the draw engine --------------------------------------------------------

T("one panel behaves exactly like the old plain draw", () => {
  const one = M.rngiRunDraws([], scripted(LOW), 1);
  assert.equal(one.slots.length, 1);
  assert.equal(one.slots[0].n, LOW);
  assert.equal(one.result.n, LOW);
  assert.equal(one.winner, null);
});

T("two panels draw two independent numbers, and the higher one is the roll", () => {
  const two = M.rngiRunDraws([], scripted(LOW, HIGH), 2);
  assert.equal(two.slots.length, 2);
  assert.deepEqual(two.slots.map((s) => s.n), [LOW, HIGH]);
  assert.equal(two.result.n, HIGH, "the losing panel won");
  assert.equal(two.draws.length, 2, "two panels must be two ordinary draws");
});

T("the roll is the panel with the most EP, not the last one drawn", () => {
  const two = M.rngiRunDraws([], scripted(HIGH, LOW), 2);
  assert.equal(two.result.n, HIGH);
  assert.equal(two.result.ep > two.slots[1].ep, true);
});

T("a panel's score is the ordinary score of its own number, untouched", () => {
  const r = M.rngiRunDraws([], seeded(7), 6);
  for (const slot of r.slots) {
    assert.deepEqual(slot.ep, M.rngiScore(slot.n).ep, `panel ${slot.n} was scored differently`);
    assert.deepEqual(slot.paid.map((b) => b.id), M.rngiScore(slot.n).paid.map((b) => b.id));
  }
});

T("six panels are six draws, and still only one number is the roll", () => {
  const r = M.rngiRunDraws([], seeded(11), 6);
  assert.equal(r.slots.length, 6);
  assert.equal(r.draws.length, 6);
  const top = Math.max(...r.slots.map((s) => s.ep));
  assert.equal(r.result.ep, top);
});

T("slots do not eat the armed-skill budget", () => {
  // a Double Vision roll with 3 slots is 2 skill draws + 3 panels
  const picks = M.rngiPlanDraws(["twice"], 0, scripted(0.9));
  const r = M.rngiRunDraws(picks, seeded(3), 3);
  assert.equal(r.draws.length, 5, `expected 2 skill draws + 3 panels, got ${r.draws.length}`);
  assert.equal(r.slots.length, 3);
});

T("a tie still keeps the skill's number, as it did before slots existed", () => {
  // skill draws HIGH then LOW (best HIGH), panels are both HIGH: strict
  // greater means the skill keeps it
  const picks = M.rngiPlanDraws(["twice"], 0, scripted(0.9));
  const r = M.rngiRunDraws(picks, scripted(HIGH, LOW, HIGH, HIGH), 2);
  assert.equal(r.winner, "twice", "a tie must keep the skill's number");
});

// ---- the money rule ---------------------------------------------------------

T("only the winning panel is paid, never the sum of the panels", () => {
  const s = blank({ owned: ["slot-2"] });
  const out = M.rngiRoll(s, 0, scripted(HIGH, LOW));
  const winner = out.outcome.result;
  const sum = out.outcome.panels.reduce((a, p) => a + p.ep, 0);
  assert.equal(out.outcome.banked, Math.round(winner.ep * out.outcome.mult.total * out.outcome.fx.wallet));
  assert.ok(out.outcome.banked < sum, "the roll banked more than one panel's worth");
  assert.equal(out.state.ep, out.outcome.banked);
});

T("a six-slot roll does not pay six times", () => {
  const s = blank({ owned: ["slot-2", "slot-3", "slot-4", "slot-5", "slot-6"] });
  const out = M.rngiRoll(s, 0, seeded(99));
  const sum = out.outcome.panels.reduce((a, p) => a + p.ep, 0);
  assert.ok(out.outcome.banked <= Math.round(out.outcome.result.ep * 1.0001 + 1),
    "payout exceeded the winning panel");
  assert.ok(out.state.ep < sum, "six panels were paid at once");
});

T("the kept panel is the one that was paid", () => {
  const s = blank({ owned: ["slot-2", "slot-3"] });
  const out = M.rngiRoll(s, 0, seeded(5));
  const kept = out.outcome.panels[out.outcome.keptIndex];
  assert.ok(kept, "no panel was marked kept");
  assert.equal(kept.n, out.outcome.result.n);
  assert.equal(kept.ep, out.outcome.result.ep);
});

T("slots raise income but far less than their count, measured", () => {
  // 600 rolls each; the exact sweep figure is 4.35x for six slots, so anything
  // at or near 6x means a panel is being paid twice.
  const run = (owned, seed) => {
    const r = seeded(seed);
    let total = 0;
    for (let i = 0; i < 600; i++) total += M.rngiRoll(blank({ owned }), 0, r).state.ep;
    return total;
  };
  const one = run([], 21);
  const six = run(["slot-2", "slot-3", "slot-4", "slot-5", "slot-6"], 21);
  const ratio = six / one;
  assert.ok(ratio > 2.5, `six slots only paid ${ratio.toFixed(2)}x, expected well above 2.5x`);
  assert.ok(ratio < 5.6, `six slots paid ${ratio.toFixed(2)}x, which is near-linear payout`);
});

T("luck still composes on top of slots instead of replacing them", () => {
  const s = blank({ owned: ["slot-2", "fourleaf-4"] });
  assert.equal(M.rngiSlotCount(s.owned), 2);
  assert.equal(M.rngiLuck(s.owned), 100);
  const out = M.rngiRoll(s, 0, seeded(13));
  assert.equal(out.outcome.panels.length, 2);
  // fourleaf-4 is 100%: one guaranteed extra draw, not two. So 2 panels + 1.
  assert.equal(out.outcome.draws.length, 3, "2 panels + 1 luck draw");
  assert.equal(out.outcome.race.length, 1, "the luck draw must be visible in the race");
});

T("the outcome carries panels for the UI but nothing else may read them", () => {
  const s = blank({ owned: ["slot-2"] });
  const out = M.rngiRoll(s, 0, seeded(17));
  const keys = Object.keys(out.outcome);
  for (const k of ["panels", "race", "keptIndex"]) assert.ok(keys.includes(k), `outcome.${k} missing`);
  // the state must not acquire anything slot-shaped: a save that carried
  // presentation data would grow every roll
  assert.equal(out.state.panels, undefined);
  assert.equal(out.state.race, undefined);
});

for (const [name, fn] of tests) {
  try { fn(); pass++; }
  catch (e) { failed++; console.error(`FAIL  ${name}\n      ${e.message}`); }
}
console.log(`slots.test.mjs: ${pass} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
