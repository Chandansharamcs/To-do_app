// infinite.test.mjs
//
// The RNGdle Infinite game loop (v45): the port of jaime-gaming/RNGdle-Infinite
// onto this app's badge engine.
//
// The thing worth protecting here is the boundary the original is careful
// about and which is easy to break by accident: MULTIPLIERS TOUCH THE WALLET,
// NEVER THE NUMBER. A companion, a rebirth or a skill may change what lands
// in your EP balance; none of them may change the number drawn, the badges it
// earns, its scored EP, its band or its rank. The moment one does, two players
// rolling 142,857 stop agreeing about it and every rank figure is a lie.
//
// Everything in here is pure. The roll takes an injected RNG, so "random"
// is reproducible and a draw plan can be asserted exactly.

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

// scoring engine + catalogue + game engine, as shipped
const CODE = region("const RNG_MAX = 1000000;", "const STORAGE_KEY_RNGI");
const EXPORTS = [
  "RNG_MAX", "RNG_BADGES", "rngScore", "rngGroup",
  "RNGI_PRODUCTS", "RNGI_PRODUCT_BY_ID", "RNGI_PETS", "RNGI_PET_BY_ID",
  "RNGI_SKILLS", "RNGI_SKILL_BY_ID", "RNGI_ALL_BADGES", "RNGI_BADGE_TOTAL",
  "RNGI_EXTRA_BADGES", "RNGI_SHELVES", "RNGI_GATE_SCALE", "RNGI_MEDIAN_EP",
  "RNGI_BASE_REVEAL_MS", "RNGI_BASE_COOLDOWN_MS", "RNGI_PET_DROP_CHANCE",
  "rngiScore", "rngiRollSettings", "rngiOfflineSettings", "rngiFlywheel",
  "rngiWalletMult", "rngiCatalogueItem", "rngiOwns", "rngiUnlocked",
  "rngiSkillStock", "rngiSkillStockWindow", "rngiAvailableSkills", "rngiBuy",
  "rngiDraw", "rngiPlanDraws", "rngiRunDraws", "rngiSkillEffects", "rngiPetDrop",
  "rngiRoll", "rngiChargeTick", "rngiSkillReady", "rngiOwnedSkills", "rngiRackSize",
  "rngiOfflineGains", "rngiClaimOffline", "rngiDiscovered", "rngiResetGate",
  "rngiSurplus", "rngiReset", "rngiEP", "rngiDuration",
];
const M = new Function(`${CODE}\nreturn {${EXPORTS.join(",")}};`)();

/** A deterministic RNG so a "random" roll can be asserted exactly. */
const seeded = (seed) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
/** An RNG that hands back exactly these numbers, in order. */
const scripted = (...ns) => {
  let i = 0;
  return () => {
    const v = ns[Math.min(i++, ns.length - 1)];
    return v / (M.RNG_MAX + 1);
  };
};

// Chosen against the real table, not by eye: single digits are the HIGHEST
// scoring numbers in the game (1 is the maximum at 186,186,584 EP, because
// every "Exactly N" badge is Mythic), so "a small number" is not a low roll.
const LOW = 283614;     //  3,746 EP -- common
const LOW2 = 523941;    //  4,224 EP -- common
const LOW3 = 386294;    //  5,566 EP -- common
const MID = 142857;     //  8,131 EP -- uncommon
const HIGH = 777;       // 103,263,101 EP -- mythic

const blank = (over = {}) => ({
  ep: 0, earned: 0, lifetime: 0, spent: 0, rolls: 0, totalRolls: 0, draws: 0, streak: 0,
  owned: [], pets: [], wearing: null, skills: [], armed: [], charges: {},
  seen: {}, best: null, history: [], cycles: [],
  rebirths: 0, prestiges: 0, rollbacks: 0, surplusPct: 0,
  revealUntil: 0, cooldownUntil: 0, lastSeen: 0, ...over,
});

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- the catalogue ---------------------------------------------------------

T("the catalogue came across whole", () => {
  assert.equal(M.RNGI_PETS.length, 13, "companions");
  assert.equal(M.RNGI_SKILLS.length, 28, "skills");
  assert.ok(M.RNGI_PRODUCTS.length >= 23, `only ${M.RNGI_PRODUCTS.length} products`);
  assert.equal(M.RNGI_BADGE_TOTAL, 235, "233 upstream badges plus the two Infinite ones");
});

T("every product that needs another names one that exists", () => {
  for (const p of M.RNGI_PRODUCTS) {
    if (!p.requires) continue;
    assert.ok(M.RNGI_PRODUCT_BY_ID[p.requires], `${p.id} requires missing ${p.requires}`);
  }
});

T("every shelf sells something and every product has a shelf", () => {
  const kinds = new Set(M.RNGI_SHELVES.flatMap((s) => s.kinds));
  for (const p of M.RNGI_PRODUCTS) {
    assert.ok(kinds.has(p.kind) || p.kind === "offline-roller", `${p.id} (${p.kind}) has no shelf`);
  }
});

T("every companion skill belongs to a companion that exists", () => {
  for (const s of M.RNGI_SKILLS) {
    if (s.source !== "pet") continue;
    assert.ok(M.RNGI_PET_BY_ID[s.petId], `${s.id} belongs to missing pet ${s.petId}`);
  }
});

T("companion multipliers only ever go up with price", () => {
  const sorted = [...M.RNGI_PETS].sort((a, b) => a.price - b.price);
  for (let i = 1; i < sorted.length; i++) {
    assert.ok(sorted[i].multiplier >= sorted[i - 1].multiplier,
      `${sorted[i].id} costs more than ${sorted[i - 1].id} and does less`);
  }
});

// ---- the two Infinite badges ----------------------------------------------

T("Pendulum is ABABAB with a non-zero lead", () => {
  assert.ok(M.rngiScore(121212).earned.some((b) => b.id === "INFINITE_PENDULUM"));
  assert.ok(M.rngiScore(909090).earned.some((b) => b.id === "INFINITE_PENDULUM"));
  assert.ok(!M.rngiScore(111111).earned.some((b) => b.id === "INFINITE_PENDULUM"), "AAAAAA is not a swing");
  assert.ok(!M.rngiScore(12121).earned.some((b) => b.id === "INFINITE_PENDULUM"), "five digits is not six");
});

T("Last Second is HH5959 for hours 10 to 23", () => {
  const has = (n) => M.rngiScore(n).earned.some((b) => b.id === "INFINITE_LAST_SECOND");
  assert.ok(has(105959));
  assert.ok(has(235959));
  assert.ok(!has(95959), "09:59:59 has a leading zero, so it is five digits");
  assert.ok(!has(245959), "there is no hour 24");
});

T("the two extras have no family, so they always pay", () => {
  for (const b of M.RNGI_EXTRA_BADGES) assert.equal(b.family, null);
  const r = M.rngiScore(121212);
  assert.ok(r.paid.some((b) => b.id === "INFINITE_PENDULUM"));
});

T("adding the extras does not disturb the 233", () => {
  const base = M.rngScore(1000000);
  const inf = M.rngiScore(1000000);
  assert.equal(inf.ep, base.ep, "a number with no extra badge must score identically");
  assert.equal(inf.paid.length, base.paid.length);
});

// ---- pace ------------------------------------------------------------------

T("the base clock is the snappy one, not the original's 45s", () => {
  assert.equal(M.RNGI_BASE_REVEAL_MS, 3000);
  assert.equal(M.RNGI_BASE_COOLDOWN_MS, 4000);
  const s = M.rngiRollSettings([]);
  assert.deepEqual(s, { revealMS: 3000, cooldownMS: 4000 });
});

T("timing upgrades take the best value, in any order", () => {
  const a = M.rngiRollSettings(["quickwind-1", "quickwind-3", "clockwork-2"]);
  const b = M.rngiRollSettings(["clockwork-2", "quickwind-3", "quickwind-1"]);
  assert.deepEqual(a, b, "order of a save must not matter");
  assert.equal(a.revealMS, 1000);
  assert.equal(a.cooldownMS, 2000);
});

T("a fully upgraded clock is the fastest the ladder allows", () => {
  const s = M.rngiRollSettings(M.RNGI_PRODUCTS.map((p) => p.id));
  assert.equal(s.revealMS, 600);
  assert.equal(s.cooldownMS, 120);
});

T("an unknown id in a save does not change the pace", () => {
  assert.deepEqual(M.rngiRollSettings(["not-a-thing"]), { revealMS: 3000, cooldownMS: 4000 });
});

T("flywheel pays for a streak and stops at its cap", () => {
  assert.equal(M.rngiFlywheel([], 999).bonus, 1, "no flywheel, no bonus");
  const t1 = M.rngiFlywheel(["flywheel"], 0);
  assert.equal(t1.bonus, 1);
  assert.ok(M.rngiFlywheel(["flywheel"], 10).bonus > 1);
  assert.equal(M.rngiFlywheel(["flywheel"], 100000).bonus, t1.cap, "the cap must actually cap");
});

// ---- the wallet boundary ---------------------------------------------------

T("a companion changes the wallet and nothing else", () => {
  const plain = blank();
  const worn = blank({ pets: ["dragonet"], wearing: "dragonet" });
  const a = M.rngiRoll(plain, 0, scripted(MID));
  const b = M.rngiRoll(worn, 0, scripted(MID));
  assert.equal(a.outcome.result.n, b.outcome.result.n, "the number moved");
  assert.equal(a.outcome.result.ep, b.outcome.result.ep, "the scored EP moved");
  assert.equal(a.outcome.result.band.key, b.outcome.result.band.key, "the band moved");
  assert.equal(a.outcome.result.percentile, b.outcome.result.percentile, "the rank moved");
  assert.ok(b.outcome.banked > a.outcome.banked, "the companion did not pay");
  assert.equal(b.outcome.banked, Math.round(a.outcome.result.ep * 1.8));
});

T("rebirth, prestige and rollback stack multiplicatively on the wallet only", () => {
  const s = blank({ rebirths: 6, prestiges: 3, rollbacks: 2, surplusPct: 5, wearing: null });
  const m = M.rngiWalletMult(s);
  assert.ok(Math.abs(m.rebirth - 1.12) < 1e-9);
  assert.ok(Math.abs(m.prestige - 1.3) < 1e-9);
  assert.ok(Math.abs(m.rollback - 1.5) < 1e-9);
  assert.ok(Math.abs(m.surplus - 1.05) < 1e-9);
  assert.ok(Math.abs(m.total - 1.12 * 1.3 * 1.5 * 1.05) < 1e-9);
});

T("a wallet skill doubles the banked EP and leaves the score alone", () => {
  const s = blank({ skills: ["surge"], armed: ["surge"], charges: { surge: 99 } });
  const r = M.rngiRoll(s, 0, scripted(MID));
  const plain = M.rngiRoll(blank(), 0, scripted(MID));
  assert.equal(r.outcome.result.ep, plain.outcome.result.ep);
  assert.equal(r.outcome.banked, plain.outcome.banked * 2);
});

T("no multiplier can reach the draw", () => {
  // the same seeded RNG must produce the same number whatever is worn
  const seeds = [1, 2, 3, 99, 12345];
  for (const seed of seeds) {
    const a = M.rngiRoll(blank(), 0, seeded(seed));
    const b = M.rngiRoll(blank({ pets: ["unicorn"], wearing: "unicorn", rebirths: 4, prestiges: 2 }), 0, seeded(seed));
    assert.equal(a.outcome.result.n, b.outcome.result.n, `seed ${seed} drew differently`);
  }
});

// ---- draw skills -----------------------------------------------------------

T("best-of takes its draws and keeps the highest", () => {
  const s = blank({ skills: ["twice"], armed: ["twice"], charges: { twice: 99 } });
  // HIGH scores enormously; both the others are ordinary commons
  const r = M.rngiRoll(s, 0, scripted(LOW, HIGH, LOW2));
  assert.equal(r.outcome.draws.length, 3, "two skill draws plus the ordinary one");
  assert.equal(r.outcome.result.n, HIGH);
  assert.equal(r.outcome.winner, "twice");
});

T("a floor skill stops the moment a draw clears the bar", () => {
  const s = blank({ skills: ["quarry"], armed: ["quarry"], charges: { quarry: 99 } });
  // Big Game is 5 draws or until 100,000 EP. HIGH clears it on the first.
  const r = M.rngiRoll(s, 0, scripted(HIGH, LOW, LOW, LOW, LOW, LOW));
  assert.equal(r.outcome.draws.length, 2, "it kept drawing after clearing the floor");
  assert.equal(r.outcome.result.n, HIGH);
});

T("a floor skill that never clears keeps the best it saw", () => {
  const s = blank({ skills: ["bedrock"], armed: ["bedrock"], charges: { bedrock: 99 } });
  // Bedrock wants 25,000 EP; none of these reach it, so it spends all four
  const r = M.rngiRoll(s, 0, scripted(LOW, LOW2, LOW3, MID, LOW));
  assert.equal(r.outcome.draws.length, 5, "four budgeted draws plus the ordinary one");
  const best = Math.max(...r.outcome.draws.map((n) => M.rngiScore(n).ep));
  assert.equal(r.outcome.result.ep, best);
});

T("the ordinary draw can beat the skill, and a tie does not", () => {
  const s = blank({ skills: ["twice"], armed: ["twice"], charges: { twice: 99 } });
  const win = M.rngiRoll(s, 0, scripted(LOW, LOW2, HIGH));
  assert.equal(win.outcome.result.n, HIGH);
  assert.equal(win.outcome.winner, null, "the plain draw won and should say so");

  const tie = M.rngiRoll(s, 0, scripted(HIGH, LOW, HIGH));
  assert.equal(tie.outcome.winner, "twice", "a tie must keep the skill's number");
});

T("stacked draw skills each spend their own budget", () => {
  const s = blank({
    skills: ["twice", "triptych"], armed: ["twice", "triptych"],
    charges: { twice: 99, triptych: 99 },
  });
  const r = M.rngiRoll(s, 0, seeded(7));
  assert.equal(r.outcome.draws.length, 6, "2 + 3 + 1 ordinary");
});

T("the draw budget is capped however many skills are armed", () => {
  const s = blank({
    skills: ["twice", "triptych", "quarry", "bedrock"],
    armed: ["twice", "triptych", "quarry", "bedrock"],
    charges: { twice: 99, triptych: 99, quarry: 99, bedrock: 99 },
  });
  const r = M.rngiRoll(s, 0, seeded(11));
  assert.ok(r.outcome.draws.length <= 7, `${r.outcome.draws.length} draws blew the cap`);
});

T("a waive skill removes the cooldown but not the reveal", () => {
  const s = blank({ skills: ["bounce"], armed: ["bounce"], charges: { bounce: 99 } });
  const r = M.rngiRoll(s, 1000, seeded(3));
  assert.equal(r.outcome.cooldownMS, 0);
  assert.equal(r.state.revealUntil, 1000 + 3000, "the reveal still has to play");
  assert.equal(r.state.cooldownUntil, r.state.revealUntil, "no wait beyond the reveal");
});

T("every badge the roll earned is collected, paid or outranked", () => {
  const r = M.rngiRoll(blank(), 0, scripted(HIGH));
  const earned = r.outcome.result.earned.map((b) => b.id);
  for (const id of earned) assert.equal(r.state.seen[id], 1, `${id} was not collected`);
  assert.ok(r.outcome.result.outranked.length > 0, "777 should outrank several");
});

T("firing a skill spends its charge", () => {
  const s = blank({ skills: ["surge"], armed: ["surge"], charges: { surge: 5 } });
  const r = M.rngiRoll(s, 0, seeded(1));
  assert.equal(r.state.charges.surge, 0);
  assert.deepEqual(r.state.armed, [], "the rack must empty after it fires");
});

T("rolling charges every skill you own, and never past full", () => {
  let s = blank({ skills: ["surge"], charges: {} });
  for (let i = 0; i < 20; i++) s = { ...s, charges: M.rngiChargeTick(s) };
  assert.equal(s.charges.surge, M.RNGI_SKILL_BY_ID.surge.charges);
  assert.ok(M.rngiSkillReady(s, "surge"));
});

T("an overdrive skill charges the rack faster", () => {
  const one = M.rngiChargeTick(blank({ skills: ["surge"] }), 1);
  const three = M.rngiChargeTick(blank({ skills: ["surge"] }), 3);
  assert.equal(three.surge, 3 * one.surge);
});

T("a companion's signature skill arrives with the companion", () => {
  const without = M.rngiOwnedSkills(blank());
  const with_ = M.rngiOwnedSkills(blank({ pets: ["pebble"] }));
  assert.ok(!without.includes("pebble-steady"));
  assert.ok(with_.includes("pebble-steady"));
});

T("the rack starts at one bay and the upgrades add two", () => {
  assert.equal(M.rngiRackSize(blank()), 1);
  assert.equal(M.rngiRackSize(blank({ owned: ["skill-bay-1"] })), 2);
  assert.equal(M.rngiRackSize(blank({ owned: ["skill-bay-1", "skill-bay-2"] })), 3);
});

T("the rack bays are actually for sale", () => {
  // rngiRackSize read these two ids before either was a product, so the rack
  // could never grow past one slot however much EP you had
  for (const id of ["skill-bay-1", "skill-bay-2"]) {
    assert.ok(M.RNGI_PRODUCT_BY_ID[id], `${id} is read by the rack but sold nowhere`);
  }
  const rich = blank({ ep: 99999999 });
  const one = M.rngiBuy(rich, "skill-bay-1");
  assert.equal(M.rngiRackSize(one), 2);
  assert.equal(M.rngiRackSize(M.rngiBuy(one, "skill-bay-2")), 3);
  assert.equal(M.rngiBuy(rich, "skill-bay-2"), rich, "bay II should need bay I");
});

// ---- companions ------------------------------------------------------------

T("a companion drop is its own sample and never touches the number", () => {
  // forcing the drop roll to 0 makes a drop certain, and the number must be
  // the same as a roll where it is impossible
  const never = M.rngiRoll(blank(), 0, scripted(MID));
  let i = 0;
  const dropRand = () => (i++ === 1 ? 0 : MID / (M.RNG_MAX + 1));
  const always = M.rngiRoll(blank(), 0, dropRand);
  assert.equal(never.outcome.result.n, always.outcome.result.n);
});

T("a drop only ever gives a companion you do not have", () => {
  const all = M.RNGI_PETS.map((p) => p.id);
  assert.equal(M.rngiPetDrop(blank({ pets: all }), 1, () => 0), null, "a full collection cannot drop");
  const one = M.rngiPetDrop(blank({ pets: all.slice(1) }), 1, () => 0);
  assert.equal(one, all[0]);
});

T("drop luck raises the chance and never above certainty", () => {
  const under = M.RNGI_PET_DROP_CHANCE * 4 - 1e-9;
  assert.ok(M.rngiPetDrop(blank(), 4, () => under) !== null, "4x luck should catch this");
  assert.equal(M.rngiPetDrop(blank(), 1, () => under), null, "1x luck should not");
  assert.ok(M.rngiPetDrop(blank(), 100000, () => 0.999) !== null, "huge luck should be certain");
});

T("the first companion found is worn automatically", () => {
  let i = 0;
  const r = M.rngiRoll(blank(), 0, () => (i++ === 1 ? 0 : 0.5));
  assert.ok(r.outcome.drop);
  assert.equal(r.state.wearing, r.outcome.drop);
});

// ---- the shop --------------------------------------------------------------

T("you cannot buy what you cannot afford", () => {
  const s = blank({ ep: 100 });
  assert.equal(M.rngiBuy(s, "quickwind-1"), s, "a broke purchase must change nothing");
});

T("buying takes the money once and records the item", () => {
  const s = blank({ ep: 50000 });
  const next = M.rngiBuy(s, "quickwind-1");
  assert.equal(next.ep, 20000);
  assert.deepEqual(next.owned, ["quickwind-1"]);
  assert.equal(next.spent, 30000);
  assert.equal(M.rngiBuy(next, "quickwind-1"), next, "buying it twice must be refused");
});

T("a locked upgrade cannot be skipped by having the money", () => {
  const s = blank({ ep: 99999999 });
  assert.equal(M.rngiBuy(s, "quickwind-3"), s, "Quickwind III needs II");
  assert.ok(!M.rngiUnlocked(s, "quickwind-3"));
  assert.ok(M.rngiUnlocked(s, "quickwind-1"));
});

T("buying a companion wears it if nothing is worn", () => {
  const s = blank({ ep: 200000 });
  const next = M.rngiBuy(s, "pebble");
  assert.deepEqual(next.pets, ["pebble"]);
  assert.equal(next.wearing, "pebble");
});

T("buying a second companion does not silently swap what you are wearing", () => {
  let s = M.rngiBuy(blank({ ep: 10000000 }), "pebble");
  s = M.rngiBuy(s, "moth");
  assert.equal(s.wearing, "pebble");
  assert.deepEqual(s.pets, ["pebble", "moth"]);
});

T("the skill stall offers three, and never one you own", () => {
  const stock = M.rngiSkillStock(42, []);
  assert.equal(stock.length, 3);
  assert.equal(new Set(stock).size, 3, "the stall listed the same skill twice");
  const after = M.rngiSkillStock(42, stock);
  for (const id of stock) assert.ok(!after.includes(id), `${id} is still on sale after being bought`);
});

T("the stall is derived from the clock, so every device agrees", () => {
  assert.deepEqual(M.rngiSkillStock(7, []), M.rngiSkillStock(7, []));
  assert.equal(M.rngiSkillStockWindow(0), 0);
  assert.equal(M.rngiSkillStockWindow(300000), 1);
});

T("the stall rotates", () => {
  const windows = new Set();
  for (let w = 0; w < 30; w++) windows.add(M.rngiSkillStock(w, []).join(","));
  assert.ok(windows.size > 3, `the stall only ever showed ${windows.size} combinations`);
});

T("a skill that is not on sale cannot be bought", () => {
  const now = 0;
  const onSale = M.rngiAvailableSkills(blank(), now);
  const offSale = M.RNGI_SKILLS.find((s) => s.source === "shop" && s.price && !onSale.includes(s.id));
  const s = blank({ ep: 99999999 });
  assert.equal(M.rngiBuy(s, offSale.id, now), s, `${offSale.id} was not on the shelf`);
});

T("buying a skin makes it the active one", () => {
  const s = M.rngiBuy(blank({ ep: 999999 }), "static");
  assert.equal(s.aura, "static");
});

const T0 = 1700000000000;   // a real timestamp: lastSeen 0 means "never recorded"

// ---- offline ---------------------------------------------------------------

T("offline earnings need the Offline Roller", () => {
  const away = blank({ lastSeen: T0 });
  assert.equal(M.rngiOfflineGains(away, T0 + 86400000), null);
  const withIt = blank({ owned: ["offline-roller"], lastSeen: T0 });
  assert.ok(M.rngiOfflineGains(withIt, T0 + 86400000));
});

T("offline pays the median roll, not the jackpot-inflated mean", () => {
  const s = blank({ owned: ["offline-roller"], lastSeen: T0 });
  const g = M.rngiOfflineGains(s, T0 + 10 * 120000);
  assert.equal(g.rolls, 10);
  assert.equal(g.ep, 10 * M.RNGI_MEDIAN_EP);
});

T("offline is capped, and the Vault raises the cap", () => {
  const base = blank({ owned: ["offline-roller"], lastSeen: T0 });
  const week = T0 + 7 * 86400000;
  assert.equal(M.rngiOfflineGains(base, week).rolls, 144);
  assert.ok(M.rngiOfflineGains(base, week).capped);
  const vault = blank({ owned: ["offline-roller", "offline-vault-3"], lastSeen: T0 });
  assert.equal(M.rngiOfflineGains(vault, week).rolls, 360);
});

T("a few seconds away earns nothing rather than a rounding error", () => {
  const s = blank({ owned: ["offline-roller"], lastSeen: T0 });
  assert.equal(M.rngiOfflineGains(s, T0 + 5000), null);
});

T("a clock that went backwards pays nothing", () => {
  const s = blank({ owned: ["offline-roller"], lastSeen: T0 });
  assert.equal(M.rngiOfflineGains(s, T0 - 50000), null);
});

T("claiming banks the EP once and restarts the away clock", () => {
  const s = blank({ owned: ["offline-roller"], lastSeen: T0 });
  const at = T0 + 10 * 120000;
  const g = M.rngiOfflineGains(s, at);
  const next = M.rngiClaimOffline(s, g, at);
  assert.equal(next.ep, g.ep);
  assert.equal(next.lastSeen, at);
  assert.equal(M.rngiOfflineGains(next, at), null, "the same window paid twice");
});

T("the offline multiplier ignores the flywheel", () => {
  // a streak is an online thing; carrying it into offline pay would make
  // closing the app the best way to use a streak
  const s = blank({ owned: ["offline-roller", "flywheel-3"], streak: 9999, lastSeen: T0 });
  const g = M.rngiOfflineGains(s, T0 + 10 * 120000);
  assert.equal(g.ep, 10 * M.RNGI_MEDIAN_EP);
});

// ---- the reset ladder ------------------------------------------------------

const seenCount = (n) => Object.fromEntries(M.RNGI_ALL_BADGES.slice(0, n).map((b) => [b.id, 1]));

T("the ladder runs rebirth x6, then prestige x3, then rollback forever", () => {
  const kind = (rebirths, prestiges) => M.rngiResetGate(blank({ rebirths, prestiges })).kind;
  assert.equal(kind(0, 0), "rebirth");
  assert.equal(kind(5, 0), "rebirth");
  assert.equal(kind(6, 0), "prestige");
  assert.equal(kind(6, 2), "prestige");
  assert.equal(kind(6, 3), "rollback");
  assert.equal(kind(6, 99), "rollback");
});

T("the EP gates are the original's, times four", () => {
  assert.equal(M.RNGI_GATE_SCALE, 4);
  assert.equal(M.rngiResetGate(blank()).needEp, 250000 * 4);
  assert.equal(M.rngiResetGate(blank({ rebirths: 6 })).needEp, 30000000 * 4);
});

T("the badge gates are NOT scaled -- they are what makes the end long", () => {
  assert.equal(M.rngiResetGate(blank()).needBadges, Math.ceil(235 * 0.2));
  assert.equal(M.rngiResetGate(blank({ rebirths: 6, prestiges: 3 })).needBadges, Math.ceil(235 * 0.75));
});

T("both gates have to be met, not either", () => {
  const badgesOnly = blank({ seen: seenCount(200), earned: 0 });
  const epOnly = blank({ seen: {}, earned: 999999999 });
  assert.ok(!M.rngiResetGate(badgesOnly).ready, "badges alone opened the gate");
  assert.ok(!M.rngiResetGate(epOnly).ready, "EP alone opened the gate");
  assert.ok(M.rngiResetGate(blank({ seen: seenCount(200), earned: 999999999 })).ready);
});

T("a reset that is not earned does nothing at all", () => {
  const s = blank({ ep: 500, earned: 10 });
  assert.equal(M.rngiReset(s), s);
});

T("a rebirth keeps the collection, the friends and the bonuses", () => {
  const s = blank({
    seen: seenCount(60), earned: 5000000, ep: 400000, rolls: 300,
    owned: ["quickwind-1", "clockwork-1"], pets: ["pebble", "moth"], wearing: "moth",
    lifetime: 5000000, totalRolls: 300,
  });
  assert.ok(M.rngiResetGate(s).ready);
  const after = M.rngiReset(s, 1000);
  assert.equal(Object.keys(after.seen).length, 60, "the collection was wiped");
  assert.deepEqual(after.pets, ["pebble", "moth"], "the friends were wiped");
  assert.equal(after.wearing, "moth");
  assert.equal(after.lifetime, 5000000, "lifetime EP is not a cycle figure");
  assert.equal(after.totalRolls, 300);
  assert.equal(after.rebirths, 1);
});

T("a rebirth resets the cycle: EP, shop, rack and streak", () => {
  const s = blank({
    seen: seenCount(60), earned: 5000000, rolls: 300, streak: 40,
    owned: ["quickwind-1"], armed: ["surge"], skills: ["surge"], charges: { surge: 5 },
  });
  const after = M.rngiReset(s, 1000);
  assert.deepEqual(after.owned, [], "the shop survived a rebirth");
  assert.deepEqual(after.armed, []);
  assert.equal(after.earned, 0);
  assert.equal(after.rolls, 0);
  assert.equal(after.streak, 0);
});

T("a rebirth pays a starting sum so the new cycle is not stranded", () => {
  const s = blank({ seen: seenCount(60), earned: 1000000 });
  const after = M.rngiReset(s, 0);
  assert.ok(after.ep > 0, "a fresh cycle with nothing and 3s rolls is a dead end");
  assert.equal(after.ep, 250000 * 4 * 1 + M.rngiSurplus(1000000, 1000000).starter);
});

T("overshooting the gate pays a dividend both ways", () => {
  const gate = 1000000;
  const none = M.rngiSurplus(gate, gate);
  assert.deepEqual(none, { surplus: 0, starter: 0, bankedPct: 0 });
  const over = M.rngiSurplus(gate + 40000000, gate);
  assert.equal(over.starter, 10000000, "a quarter of the surplus carries over");
  assert.equal(over.bankedPct, 2, "every full 20M surplus is +1%");
  assert.equal(M.rngiSurplus(gate + 1e12, gate).bankedPct, 5, "the per-reset dividend is capped");
});

T("the permanent bonus actually compounds across resets", () => {
  const base = M.rngiWalletMult(blank()).total;
  const after6 = M.rngiWalletMult(blank({ rebirths: 6 })).total;
  const andPrestige = M.rngiWalletMult(blank({ rebirths: 6, prestiges: 1 })).total;
  assert.ok(after6 > base);
  assert.ok(andPrestige > after6);
});

T("the ladder is visible before it is reachable", () => {
  const early = M.rngiResetGate(blank({ seen: seenCount(40) }));
  assert.ok(early.visible, "15% of the collection should reveal the ladder");
  assert.ok(!early.ready);
  assert.ok(!M.rngiResetGate(blank({ seen: seenCount(5) })).visible);
});

// ---- the loop holds up over a long run -------------------------------------

T("a thousand rolls never produces a negative or non-integer balance", () => {
  let s = blank();
  const rand = seeded(2026);
  for (let i = 0; i < 1000; i++) {
    const r = M.rngiRoll(s, i * 1000, rand);
    s = { ...r.state, charges: M.rngiChargeTick(r.state, r.outcome.fx.overdrive) };
    assert.ok(Number.isFinite(s.ep) && s.ep >= 0, `EP went wrong at roll ${i}: ${s.ep}`);
    assert.ok(Number.isInteger(r.outcome.banked), `fractional EP at roll ${i}`);
  }
  assert.equal(s.rolls, 1000);
  assert.ok(s.history.length <= 40, "history grew without bound");
});

T("the wallet only ever goes up by what was banked", () => {
  let s = blank();
  const rand = seeded(5);
  let tally = 0;
  for (let i = 0; i < 200; i++) {
    const r = M.rngiRoll(s, i, rand);
    tally += r.outcome.banked;
    s = r.state;
  }
  assert.equal(s.ep, tally);
  assert.equal(s.earned, tally);
});

T("the best roll of a cycle is the best roll of the cycle", () => {
  let s = blank();
  const rand = seeded(9);
  let best = 0;
  for (let i = 0; i < 300; i++) {
    const r = M.rngiRoll(s, i, rand);
    best = Math.max(best, r.outcome.result.ep);
    s = r.state;
  }
  assert.equal(s.best.ep, best);
});

// ---- formatting ------------------------------------------------------------

T("EP is readable at every scale", () => {
  assert.equal(M.rngiEP(0), "0");
  assert.equal(M.rngiEP(9999), "9,999");
  assert.equal(M.rngiEP(10000), "10.0K");
  assert.equal(M.rngiEP(250000), "250K");
  assert.equal(M.rngiEP(1500000), "1.50M");
  assert.equal(M.rngiEP(131081274), "131.1M");
  assert.equal(M.rngiEP(2500000000), "2.50B");
});

T("durations read as seconds", () => {
  assert.equal(M.rngiDuration(3000), "3s");
  assert.equal(M.rngiDuration(120), "0.1s");
  assert.equal(M.rngiDuration(45000), "45s");
});

for (const [name, fn] of tests) {
  try { fn(); pass++; }
  catch (e) { failed++; console.error(`FAIL  ${name}\n      ${e.message}`); }
}
console.log(`infinite.test.mjs: ${pass} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
