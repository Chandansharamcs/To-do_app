import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

// ---- design tokens ----
// bg: #0B0D10 panel: #14171C accent(cyan): #5EEAD4 accent2(amber): #F5A623
// danger: #F0576B text: #E7EAEE muted: #6B7280 mono: JetBrains Mono, sans: Inter

// ---- unique id generation ----
// Seeded from Date.now() (not a small fixed counter) so freshly-generated
// ids never collide with ids created in a previous session after a reload.
// Each call also increments the seed, so ids created in the same tick
// (e.g. importing several items at once) stay unique too.
let __idSeed = Date.now();
function makeId() {
  __idSeed += 1;
  return __idSeed;
}

const PRIORITIES = [
  { key: "low", label: "low", color: "#6B7280" },
  { key: "mid", label: "mid", color: "#5EEAD4" },
  { key: "high", label: "high", color: "#F5A623" },
];

// ---- IST clock + calendar helpers ----
function getISTParts() {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const get = (type) => +parts.find((p) => p.type === type).value;
  return { hour: get("hour"), minute: get("minute"), second: get("second") };
}

function getISTDateLabel() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return fmt.format(new Date());
}

// "YYYY-MM-DD" for the IST calendar day at `offsetDays` from now (can be negative)
function getISTDateString(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(d);
}

function getISTWeekdayShort(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", weekday: "narrow" }).format(d);
}

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function minutesToLabel(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}

function formatDuration(mins) {
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function minutesToInputValue(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// current streak of consecutive IST-days present in `history`, counting
// from today backward (streak stays alive for one pending day: if
// yesterday was done but today isn't checked off *yet*, it still shows).
//
// Also grants a "freeze": one missed day can be silently bridged without
// breaking the streak, and a fresh freeze regenerates every 7 completed
// days. This mirrors the "streak freeze" pattern used by most habit
// trackers, since a single off day resetting weeks of progress to zero
// tends to make people give up rather than keep going.
function streakFreezeInfo(history) {
  if (!history || history.length === 0) return { streak: 0, freezeUsed: false };
  const set = new Set(history);
  let anchor;
  if (set.has(getISTDateString(0))) anchor = 0;
  else if (set.has(getISTDateString(-1))) anchor = -1;
  else return { streak: 0, freezeUsed: false };

  let streak = 0;
  let offset = anchor;
  let daysSinceFreeze = 0;
  let freezeAvailable = true;
  let freezeUsed = false;

  while (true) {
    if (set.has(getISTDateString(offset))) {
      streak++;
      daysSinceFreeze++;
      if (!freezeAvailable && daysSinceFreeze >= 7) {
        freezeAvailable = true;
        daysSinceFreeze = 0;
      }
      offset -= 1;
    } else if (freezeAvailable) {
      // bridge this single gap day without counting it toward the streak
      freezeAvailable = false;
      daysSinceFreeze = 0;
      freezeUsed = true;
      offset -= 1;
    } else {
      break;
    }
  }
  return { streak, freezeUsed };
}

function computeStreak(history) {
  return streakFreezeInfo(history).streak;
}

const DURATION_PRESETS = [15, 30, 45, 60, 90, 120];

// ============================================================
// SOUND ENGINE -- tiny synthesized UI sounds via Web Audio API.
// No audio files/CDN, so this stays consistent with the fully
// offline/bundled build. Mute state persists in localStorage.
// ============================================================
// ============================================================
// LINKS (v26)
//
// Lets any trackable item complete any other. "Planting" as a routine, a
// quest habit and a vault card is one real-world act tracked three times --
// ticking one should tick them all.
//
// Design notes:
//   * links are stored ONCE, undirected, as a pair of refs. Completing
//     either end propagates to the other, so the user never has to think
//     about direction.
//   * propagation is single-hop by design. A->B->C would let one tick
//     cascade through an entire graph, which is surprising and very hard to
//     undo. If you want A to also hit C, link A to C explicitly.
//   * un-ticking propagates too, so a mistaken tap is fully reversible.
// ============================================================

// Bridge so nested views can propagate a completion without threading links
// and every setter through four component layers. Registered once by TodoApp.
const linkUIBridge = {
  fn: null,
  register(fn) { this.fn = fn; return () => { this.fn = null; }; },
  open(ref) { if (this.fn) this.fn(ref); },
};

const linkBridge = {
  fn: null,
  register(fn) { this.fn = fn; return () => { this.fn = null; }; },
  propagate(kind, id, done) { if (this.fn) this.fn(kind, id, done); },
};

const STORAGE_KEY_LINKS = "tasksh.links.v1";

// A ref is "<kind>:<id>" -- kind is one of routine | good | bad | vault.
const LINK_KINDS = {
  routine: { label: "routine", plural: "routines" },
  good:    { label: "quest",   plural: "quest habits" },
  vault:   { label: "vault",   plural: "vault habits" },
};

const refOf = (kind, id) => `${kind}:${id}`;
const parseRef = (ref) => {
  const i = String(ref).indexOf(":");
  return { kind: String(ref).slice(0, i), id: Number(String(ref).slice(i + 1)) };
};

/** Everything linked to `ref`, one hop out. */
function linkedTo(links, ref) {
  const out = [];
  for (const [a, b] of links) {
    if (a === ref) out.push(b);
    else if (b === ref) out.push(a);
  }
  return out;
}

function hasLink(links, a, b) {
  return links.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
}

function addLink(links, a, b) {
  if (a === b || hasLink(links, a, b)) return links;
  return [...links, [a, b]];
}

function removeLink(links, a, b) {
  return links.filter(([x, y]) => !((x === a && y === b) || (x === b && y === a)));
}

/** Drops links pointing at items that no longer exist. */
function pruneLinks(links, exists) {
  return links.filter(([a, b]) => exists(a) && exists(b));
}

/**
 * Resolves a ref to something displayable. Returns null if the target was
 * deleted -- callers should treat that as "link is stale".
 */
function describeRef(ref, data) {
  const { kind, id } = parseRef(ref);
  const list =
    kind === "routine" ? data.routines :
    kind === "good"    ? data.goodHabits :
    kind === "vault"   ? data.vaultHabits : null;
  if (!list) return null;
  const item = list.find((x) => x.id === id);
  if (!item) return null;
  return { kind, id, label: item.label, meta: LINK_KINDS[kind]?.label || kind };
}

/**
 * Applies a completion to every item linked to `ref`.
 *
 * `done` is passed explicitly rather than toggled per-item, so a group ends
 * up consistent: ticking one makes them all done, unticking makes them all
 * undone, regardless of what state each was in.
 */
function propagateCompletion(ref, done, links, setters, dateStr) {
  const targets = linkedTo(links, ref);
  if (!targets.length) return 0;

  const apply = (list, id) => list.map((it) => {
    if (it.id !== id) return it;
    const hist = it.history || [];
    const has = hist.includes(dateStr);
    if (done === has) return it;                       // already right
    return {
      ...it,
      history: done ? [...hist, dateStr] : hist.filter((d) => d !== dateStr),
    };
  });

  const byKind = { routine: [], good: [], vault: [] };
  for (const t of targets) {
    const { kind, id } = parseRef(t);
    if (byKind[kind]) byKind[kind].push(id);
  }

  if (byKind.routine.length && setters.setRoutines) {
    setters.setRoutines((prev) => byKind.routine.reduce((acc, id) => apply(acc, id), prev));
  }
  if (byKind.good.length && setters.setGoodHabits) {
    setters.setGoodHabits((prev) => byKind.good.reduce((acc, id) => apply(acc, id), prev));
  }
  if (byKind.vault.length && setters.setVaultHabits) {
    setters.setVaultHabits((prev) => byKind.vault.reduce((acc, id) => apply(acc, id), prev));
  }
  return targets.length;
}

function useLinks() {
  const [links, setLinks] = useState(() => loadStored(STORAGE_KEY_LINKS, []));
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_LINKS, JSON.stringify(links)); } catch {}
  }, [links]);
  return { links, setLinks };
}

// ============================================================
// ACHIEVEMENTS, COINS & LEVEL REWARDS (v24)
//
// All three share one idea: progress should be *noticed*. Achievements are
// evaluated from existing data rather than tracked incrementally, so they
// can be added retroactively and can never desync -- same principle as XP.
// ============================================================

// Misc one-off flags that don't warrant their own key: which level the user
// has already been congratulated for, hidden-achievement triggers, counters.
const STORAGE_KEY_META = "tasksh.meta.v1";

function saveMeta(patch) {
  try {
    const cur = loadStored(STORAGE_KEY_META, {});
    localStorage.setItem(STORAGE_KEY_META, JSON.stringify({ ...cur, ...patch }));
  } catch {}
}

function bumpMeta(key, by = 1) {
  const cur = loadStored(STORAGE_KEY_META, {});
  saveMeta({ [key]: (cur[key] || 0) + by });
}

const STORAGE_KEY_ACH = "tasksh.achievements.v1";
const STORAGE_KEY_WALLET = "tasksh.wallet.v1";

/**
 * Each achievement is a pure predicate over a snapshot of app state.
 * `hidden: true` means it isn't listed until earned -- discovering one
 * should feel like finding something, not ticking a checklist.
 */
const ACHIEVEMENTS = [
  // --- visible: the obvious ladder ---
  { id: "first_task",   icon: "◇", name: "First Step",      desc: "complete your first task",              coins: 10,  test: (s) => s.tasksDone >= 1 },
  { id: "ten_tasks",    icon: "◈", name: "Getting Going",   desc: "complete 10 tasks",                     coins: 25,  test: (s) => s.tasksDone >= 10 },
  { id: "streak_7",     icon: "▲", name: "One Week",        desc: "hold a 7-day streak",                   coins: 40,  test: (s) => s.bestStreak >= 7 },
  { id: "streak_30",    icon: "▲", name: "One Month",       desc: "hold a 30-day streak",                  coins: 120, test: (s) => s.bestStreak >= 30 },
  { id: "streak_100",   icon: "★", name: "Centurion",       desc: "hold a 100-day streak",                 coins: 500, test: (s) => s.bestStreak >= 100 },
  { id: "level_5",      icon: "◆", name: "Finding Rhythm",  desc: "reach level 5",                         coins: 30,  test: (s) => s.level >= 5 },
  { id: "level_10",     icon: "◆", name: "Committed",       desc: "reach level 10",                        coins: 80,  test: (s) => s.level >= 10 },
  { id: "level_20",     icon: "✦", name: "Ascendant",       desc: "reach level 20",                        coins: 400, test: (s) => s.level >= 20 },
  { id: "perfect_day",  icon: "●", name: "Clean Sweep",     desc: "complete every habit in one day",       coins: 35,  test: (s) => s.totalHabits > 0 && s.doneToday >= s.totalHabits },
  { id: "full_routine", icon: "▣", name: "On Schedule",     desc: "complete every routine in one day",     coins: 45,  test: (s) => s.totalRoutines > 0 && s.routinesDoneToday >= s.totalRoutines },
  { id: "vault_5",      icon: "▢", name: "Vault Keeper",    desc: "keep 5 habits in the vault",            coins: 20,  test: (s) => s.vaultCount >= 5 },
  { id: "bond_max",     icon: "♡", name: "Inseparable",     desc: "reach maximum friendship with your pet", coins: 150, test: (s) => s.friendship >= 95 },
  { id: "evolved",      icon: "✧", name: "Metamorphosis",   desc: "see your pet evolve",                   coins: 25,  test: (s) => s.petStage >= 1 },
  { id: "final_form",   icon: "✦", name: "Guardian",        desc: "reach your pet's final form",           coins: 350, test: (s) => s.petStage >= 6 },

  // --- hidden: found, not pursued ---
  { id: "early_bird",   icon: "☀", name: "Before Sunrise",  desc: "finish something before 6am",           coins: 60,  hidden: true, test: (s) => s.earlyFinish },
  { id: "night_owl",    icon: "☾", name: "Night Shift",     desc: "finish something after midnight",       coins: 60,  hidden: true, test: (s) => s.lateFinish },
  { id: "chatterbox",   icon: "◌", name: "Good Company",    desc: "have 50 conversations with your pet",   coins: 90,  hidden: true, test: (s) => s.chats >= 50 },
  { id: "themed",       icon: "◐", name: "Interior Design", desc: "unlock every theme",                    coins: 200, hidden: true, test: (s) => s.level >= 20 },
  { id: "calm_soul",    icon: "◯", name: "Stillness",       desc: "use calm mode 10 times",                coins: 70,  hidden: true, test: (s) => s.calmSessions >= 10 },
  { id: "comeback",     icon: "↻", name: "Back Again",      desc: "return after a week away",              coins: 50,  hidden: true, test: (s) => s.returnedAfterGap },
  { id: "wealthy",      icon: "◉", name: "Saver",           desc: "hold 1000 coins at once",               coins: 100, hidden: true, test: (s) => s.coins >= 1000 },
];

function achievementById(id) {
  return ACHIEVEMENTS.find((a) => a.id === id);
}

/**
 * Evaluates every achievement against the snapshot and returns the ids that
 * are newly satisfied. Pure: callers decide what to do with the result.
 */
function evaluateAchievements(snapshot, earnedIds) {
  const have = new Set(earnedIds);
  const fresh = [];
  for (const a of ACHIEVEMENTS) {
    if (have.has(a.id)) continue;
    let ok = false;
    try { ok = !!a.test(snapshot); } catch { ok = false; }
    if (ok) fresh.push(a.id);
  }
  return fresh;
}

// Coins are a soft currency: earned from achievements and level-ups, spent
// on nothing yet by design -- v24 establishes the economy, spending comes
// later. Keeping them purely additive avoids balance problems now.
const LEVEL_COIN_REWARD = (level) => 20 + level * 5;

/**
 * Owns achievements + the coin wallet. Achievements are evaluated from a
 * snapshot on every meaningful change, so adding a new one later awards it
 * retroactively rather than only counting from the moment it shipped.
 */
function useAchievements(snapshot) {
  const [earned, setEarned] = useState(() => loadStored(STORAGE_KEY_ACH, []));
  const [wallet, setWallet] = useState(() => loadStored(STORAGE_KEY_WALLET, { coins: 0 }));
  const [queue, setQueue] = useState([]);   // ids waiting to be celebrated

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_ACH, JSON.stringify(earned)); } catch {}
  }, [earned]);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_WALLET, JSON.stringify(wallet)); } catch {}
  }, [wallet]);

  useEffect(() => {
    const fresh = evaluateAchievements({ ...snapshot, coins: wallet.coins }, earned);
    if (!fresh.length) return;
    setEarned((prev) => [...prev, ...fresh]);
    setQueue((prev) => [...prev, ...fresh]);
    const payout = fresh.reduce((sum, id) => sum + (achievementById(id)?.coins || 0), 0);
    if (payout) setWallet((w) => ({ ...w, coins: w.coins + payout }));
  }, [snapshot, earned, wallet.coins]);

  const addCoins = useCallback((n) => setWallet((w) => ({ ...w, coins: Math.max(0, w.coins + n) })), []);
  const shift = useCallback(() => setQueue((q) => q.slice(1)), []);

  return { earned, wallet, coins: wallet.coins, queue, current: queue[0] || null, shift, addCoins };
}

// ============================================================
// PET SYSTEM (v23)
//
// A persistent companion that grows with the user. Three separable pieces:
//   1. FORMS       - 7 evolution stages, each a procedurally-drawn SVG
//   2. STATS       - happiness / energy / friendship / intelligence, decayed
//                    over real time and nudged by what the user actually does
//   3. VOICE       - a local personality engine, with Gemini only for
//                    open-ended chat (see PET_AI in the worker)
//
// Design rule: the pet must never be silent. Everything except free-form
// conversation is generated locally, so it works offline, with no API key,
// and when the daily AI quota is gone.
// ============================================================

// Lightweight event bus so deeply-nested views can report user actions to the
// pet without threading a callback through four layers of props. One channel,
// fire-and-forget; nothing depends on delivery.
const petBus = {
  listeners: new Set(),
  emit(kind) { this.listeners.forEach((fn) => { try { fn(kind); } catch {} }); },
  on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
};

const STORAGE_KEY_PET = "tasksh.pet.v1";

// Seven forms rather than twenty: each one gets real craft, and the
// milestones stay meaningful against the v22 XP curve (level 20 ~ 103 days).
const PET_FORMS = [
  { stage: 0, minLevel: 1,  name: "Spark",    title: "just hatched",        scale: 0.62 },
  { stage: 1, minLevel: 3,  name: "Sprout",   title: "finding its feet",    scale: 0.72 },
  { stage: 2, minLevel: 6,  name: "Drift",    title: "curious and quick",   scale: 0.82 },
  { stage: 3, minLevel: 10, name: "Ember",    title: "steady, warm",        scale: 0.90 },
  { stage: 4, minLevel: 14, name: "Cirrus",   title: "calm and knowing",    scale: 0.96 },
  { stage: 5, minLevel: 17, name: "Solenn",   title: "quietly powerful",    scale: 1.0  },
  { stage: 6, minLevel: 20, name: "Aurelis",  title: "legendary guardian",  scale: 1.06 },
];

function formForLevel(level) {
  let f = PET_FORMS[0];
  for (const c of PET_FORMS) if (level >= c.minLevel) f = c;
  return f;
}

function nextFormAfter(level) {
  return PET_FORMS.find((f) => f.minLevel > level) || null;
}

const PET_DEFAULTS = {
  name: "Pip",
  happiness: 70,
  energy: 80,
  friendship: 20,
  intelligence: 30,
  stage: 0,          // last stage the user has *seen*, for evolution detection
  lastTick: 0,       // ms timestamp of last decay application
  chats: 0,
  born: 0,
  log: [],           // recent conversation, capped -- gives the AI continuity
};

const clamp100 = (n) => Math.max(0, Math.min(100, Math.round(n)));

/**
 * Stats drift toward neutral over real elapsed time, so a pet left alone for
 * days looks it. Applied on load and on an interval rather than continuously.
 *
 * Deliberately gentle: full decay from 100 to 0 takes about a week of total
 * neglect. Punishing the user for a busy day is exactly the wrong feel.
 */
function decayPetStats(pet, nowMs) {
  const last = pet.lastTick || nowMs;
  const hours = Math.max(0, (nowMs - last) / 3600000);
  if (hours < 0.25) return pet;
  const d = (rate) => hours * rate;
  return {
    ...pet,
    happiness: clamp100(pet.happiness - d(0.55)),
    energy: clamp100(pet.energy - d(0.75)),
    // friendship fades far slower -- a relationship shouldn't evaporate
    friendship: clamp100(pet.friendship - d(0.12)),
    intelligence: pet.intelligence, // knowledge doesn't decay
    lastTick: nowMs,
  };
}

// What each user action does to the pet. Kept as a table so the effects are
// auditable in one place instead of scattered through components.
const PET_EFFECTS = {
  habitDone:     { happiness: +6, energy: -2, friendship: +1 },
  routineDone:   { happiness: +4, energy: -3, friendship: +1 },
  taskDone:      { happiness: +3, energy: -2 },
  vaultDone:     { happiness: +5, energy: -2, friendship: +1 },
  badHabit:      { happiness: -7, energy: -4 },
  chat:          { friendship: +3, happiness: +2, intelligence: +1 },
  rewardClaimed: { happiness: +9, energy: +6 },
  calmSession:   { happiness: +4, energy: +12, intelligence: +2 },
  levelUp:       { happiness: +14, energy: +18, friendship: +5, intelligence: +4 },
};

function applyPetEffect(pet, key) {
  const e = PET_EFFECTS[key];
  if (!e) return pet;
  return {
    ...pet,
    happiness: clamp100(pet.happiness + (e.happiness || 0)),
    energy: clamp100(pet.energy + (e.energy || 0)),
    friendship: clamp100(pet.friendship + (e.friendship || 0)),
    intelligence: clamp100(pet.intelligence + (e.intelligence || 0)),
  };
}

// Mood is derived, never stored -- same principle as XP. One less field to
// desync, and it always reflects the current stats.
function petMood(pet) {
  const { happiness: h, energy: e } = pet;
  if (h >= 78 && e >= 60) return { key: "joyful",  label: "joyful",  face: "^^" };
  if (h >= 60 && e < 32)  return { key: "sleepy",  label: "sleepy",  face: "-_-" };
  if (h >= 60)            return { key: "content", label: "content", face: "^ ^" };
  if (h >= 35 && e < 32)  return { key: "tired",   label: "tired",   face: "u_u" };
  if (h >= 35)            return { key: "okay",    label: "okay",    face: "o o" };
  if (e < 30)             return { key: "drained", label: "drained", face: "x_x" };
  return { key: "low", label: "a bit low", face: "._." };
}

function petBond(friendship) {
  if (friendship >= 90) return "inseparable";
  if (friendship >= 70) return "close";
  if (friendship >= 45) return "warming up";
  if (friendship >= 20) return "getting to know you";
  return "new here";
}

// ---- local personality -----------------------------------------------
// The pet must never be silent. Everything except free-form conversation is
// generated here: instant, offline, free, and consistent in tone.
//
// Voice rules (kept deliberately narrow so it never drifts):
//   lowercase, warm, brief. observant rather than cheerful. never nags,
//   never exclaims twice, never infantile. it notices things.

function pickStable(list, seed) {
  // deterministic pick so the pet doesn't say a different thing on every
  // re-render -- it should feel like it *meant* it
  if (!list.length) return "";
  const n = Math.abs(Math.floor(seed)) % list.length;
  return list[n];
}

/**
 * Builds a short line of dialogue from the app's real state.
 * `ctx` carries level, streaks, completion counts and the pet's own stats,
 * so the pet always sounds like it's been paying attention.
 */
function petGreeting(ctx) {
  const { pet, level, hour, doneToday, totalToday, streak, phase } = ctx;
  const mood = petMood(pet);
  const seed = Math.floor(Date.now() / 3600000); // rotates hourly

  // highest-priority observations first -- these override small talk
  if (pet.energy < 22) {
    return pickStable([
      "i'm running low. maybe we both rest a bit.",
      "energy's thin today. no shame in a slow afternoon.",
    ], seed);
  }
  if (totalToday > 0 && doneToday === totalToday) {
    return pickStable([
      `all ${totalToday} done. that's the whole list.`,
      "everything's ticked off. genuinely well done.",
      "clean sweep today. i noticed.",
    ], seed);
  }
  if (streak >= 7) {
    return pickStable([
      `${streak} days running. that's a habit now, not an effort.`,
      `${streak} in a row. the hard part's behind you.`,
    ], seed);
  }
  if (doneToday === 0 && hour >= 14) {
    return pickStable([
      "nothing marked yet. one small thing counts.",
      "still a blank slate today. pick the easiest one.",
    ], seed);
  }
  if (phase === "night" && hour >= 23) {
    return pickStable([
      "late one. tomorrow will still be there.",
      "it's late. i'd sleep if i were you.",
    ], seed);
  }
  if (phase === "morning") {
    return pickStable([
      "morning. what's the one thing that matters today?",
      "fresh day. no debts from yesterday.",
    ], seed);
  }
  if (mood.key === "joyful") {
    return pickStable([
      "good day so far. i can tell.",
      "you're in a rhythm. keep it easy.",
    ], seed);
  }
  if (pet.friendship < 15) {
    return "still getting to know you. tell me something.";
  }
  return pickStable([
    `${doneToday} of ${totalToday} today. steady.`,
    "here whenever you need. no rush.",
    "quiet so far. that's allowed.",
  ], seed);
}

function petReaction(kind, ctx) {
  const seed = Date.now() / 1000;
  const map = {
    habitDone:   ["nice.", "that counts.", "logged it.", "good one."],
    routineDone: ["on schedule.", "done and dusted.", "that's the one."],
    taskDone:    ["off the list.", "one down.", "tidy."],
    levelUp:     ["something's changing…", "i feel different.", "we grew."],
    chat:        ["mm.", "i'm listening.", "go on."],
    rewardClaimed: ["you earned that.", "enjoy it properly."],
  };
  return pickStable(map[kind] || ["ok."], seed);
}

// Compact state summary handed to the AI so replies reference reality.
function petContextSummary(ctx) {
  const { pet, level, doneToday, totalToday, streak, routineNow, nextRoutine } = ctx;
  const mood = petMood(pet);
  return [
    `pet: ${pet.name}, ${PET_FORMS[pet.stage].name} form, mood ${mood.label}`,
    `stats: happiness ${pet.happiness}, energy ${pet.energy}, friendship ${pet.friendship} (${petBond(pet.friendship)}), intelligence ${pet.intelligence}`,
    `owner: level ${level}, ${doneToday}/${totalToday} habits done today, best streak ${streak}`,
    routineNow ? `right now: ${routineNow}` : "no routine running",
    nextRoutine ? `next up: ${nextRoutine}` : "",
  ].filter(Boolean).join("; ");
}

/**
 * Owns the pet: load, persist, decay over real time, and detect evolutions.
 *
 * Evolution is detected by comparing the form the user's level *entitles*
 * them to against the last stage they actually saw (`pet.stage`). That way a
 * level-up while the app is closed still produces a celebration next launch,
 * and restoring an old backup can't replay evolutions the user already saw.
 */
function usePet(level, deps) {
  // Captured at init: by the time any effect runs, the persist effect below has
  // already written the pet to storage, so re-reading it there always looks
  // like a returning user.
  const freshPet = useRef(loadStored(STORAGE_KEY_PET, null) === null);
  const [pet, setPet] = useState(() => {
    const stored = loadStored(STORAGE_KEY_PET, null);
    const base = stored ? { ...PET_DEFAULTS, ...stored } : { ...PET_DEFAULTS, born: Date.now(), lastTick: Date.now() };
    return decayPetStats(base, Date.now());
  });
  const [evolution, setEvolution] = useState(null); // {from,to} while celebrating

  // persist
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_PET, JSON.stringify(pet)); } catch {}
  }, [pet]);

  // decay on a slow interval; also catches the app being left open overnight
  useEffect(() => {
    const t = setInterval(() => setPet((p) => decayPetStats(p, Date.now())), 300000);
    return () => clearInterval(t);
  }, []);

  // evolution check
  const form = useMemo(() => formForLevel(level), [level]);
  useEffect(() => {
    // FIRST RUN / IMPORT: same trap the level-up overlay hit in v29. Starter
    // data is already level 2, and a fresh pet records stage 0, so the very
    // first render looked like an evolution and threw a full-screen backdrop
    // over the tab bar before the user had done anything. Importing a backup
    // did it too. Adopt the current stage silently; only transitions that
    // happen *while using the app* are a moment worth celebrating.
    if (freshPet.current) {
      freshPet.current = false;
      if (form.stage !== pet.stage) setPet((p) => ({ ...p, stage: form.stage }));
      return;
    }

    if (form.stage > pet.stage) {
      const from = pet.stage;
      setEvolution({ from, to: form.stage });
      setPet((p) => applyPetEffect({ ...p, stage: form.stage }, "levelUp"));
      sound.success();
    } else if (form.stage < pet.stage) {
      // XP was reduced (reward claimed, backup restored) -- follow it down
      // silently rather than pretending nothing happened
      setPet((p) => ({ ...p, stage: form.stage }));
    }
  }, [form.stage, pet.stage]);

  const nudge = useCallback((kind) => {
    setPet((p) => applyPetEffect(p, kind));
  }, []);

  // react to activity reported from anywhere in the app
  useEffect(() => petBus.on((kind) => setPet((p) => applyPetEffect(p, kind))), []);

  const rename = useCallback((name) => {
    const n = String(name || "").trim().slice(0, 14);
    if (n) setPet((p) => ({ ...p, name: n }));
  }, []);

  const remember = useCallback((role, text) => {
    setPet((p) => ({
      ...p,
      chats: role === "user" ? p.chats + 1 : p.chats,
      // keep the last few turns only: enough for continuity, small enough
      // that it never bloats localStorage or the AI prompt
      log: [...(p.log || []), { role, text: String(text).slice(0, 240) }].slice(-8),
    }));
  }, []);

  return { pet, form, mood: petMood(pet), evolution, clearEvolution: () => setEvolution(null), nudge, rename, remember };
}

/**
 * The creature.
 *
 * One parametric SVG rather than seven hand-drawn files: every form shares a
 * body plan (round body, big eyes, ear/horn pair, tail, aura) and the stage
 * dials the parts up. That keeps it recognisably the *same* animal as it
 * grows, which is the whole point of an evolution line, and means a new stage
 * is a row in PET_FORMS plus a few numbers here.
 *
 * Colours come from theme vars so the pet reskins with the app.
 * Everything animates via CSS transforms only.
 */
const PetCreature = React.memo(function PetCreature({
  stage = 0, mood = "content", size = 128, animate = true, evolving = false,
}) {
  const s = Math.max(0, Math.min(6, stage));

  // --- body plan, interpolated by stage -----------------------------------
  // Proportions shift deliberately: babies are big-headed and round, adults
  // are leaner and taller. Linear tweens alone made stages 4-7 look identical,
  // so several parts switch on/off at thresholds instead.
  const bodyR   = 25 + s * 1.9;
  const headR   = 22 - s * 0.55;            // head shrinks RELATIVE to body
  const bodyCY  = 78 + s * 0.9;             // body sinks slightly as it grows
  // Head sits a fixed gap above the body so it never overlaps, and the whole
  // thing stays inside the 128 viewBox once the horns are added.
  const headY   = bodyCY - bodyR * 0.80 - headR * 0.62 - (s >= 3 ? 5 : 0);
  const eyeR    = 4.6 - s * 0.3;
  // horn length is capped by the space actually available above the head
  const earLen  = Math.min(6 + s * 5.2, Math.max(4, headY - headR - 9));
  const earSpread = 9 + s * 1.1;
  const tailLen = 9 + s * 5.4;
  const auraR   = 33 + s * 5.2;
  const neck    = s >= 3;                   // visible neck from mid-line
  const wings   = s >= 4;
  const crown   = s >= 6;
  const spines  = s >= 5;                   // back ridge on late forms
  const marks   = s >= 2 ? Math.min(4, s - 1) : 0;

  // mood drives eyes + mouth only, so it reads instantly at any size
  const closed = mood === "sleepy" || mood === "tired";
  const wide   = mood === "joyful";
  const sad    = mood === "low" || mood === "drained";
  const eyeH   = closed ? 0.9 : eyeR * (wide ? 1.16 : 1) * 2;
  const mouthD = sad
    ? `M 56 ${headY + 9} q 8 -5 16 0`
    : wide
      ? `M 55 ${headY + 6} q 9 8 18 0`
      : `M 57 ${headY + 7} q 7 4 14 0`;

  return (
    <svg
      viewBox="-8 4 148 144"
      width={size}
      height={size}
      className={`pet-svg ${animate ? "pet-anim" : ""} ${evolving ? "pet-evolving" : ""}`}
      style={{ "--pet-scale": PET_FORMS[s].scale }}
      role="img"
      aria-label={`${PET_FORMS[s].name}, ${mood}`}
    >
      <defs>
        <radialGradient id={`pg-body-${s}`} cx="38%" cy="30%">
          <stop offset="0%"   stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="62%"  stopColor="var(--accent)" stopOpacity="0.88" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.55" />
        </radialGradient>
        <radialGradient id={`pg-aura-${s}`} cx="50%" cy="50%">
          <stop offset="55%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="88%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* aura — grows with stage, breathes independently of the body */}
      <circle className="pet-aura" cx="64" cy={bodyCY - 8} r={auraR} fill={`url(#pg-aura-${s})`} />

      {/* wings, later forms only */}
      {wings && (
        <g className="pet-wings" fill="var(--accent)" opacity="0.26">
          <path d={`M ${64 - bodyR * 0.75} ${bodyCY - 8} q -${16 + s * 2} -${12 + s * 2} -${5 + s} ${8} q ${4} ${9} ${21} ${5} Z`} />
          <path d={`M ${64 + bodyR * 0.75} ${bodyCY - 8} q ${16 + s * 2} -${12 + s * 2} ${5 + s} ${8} q -${4} ${9} -${21} ${5} Z`} />
        </g>
      )}

      {/* tail */}
      <path
        className="pet-tail"
        d={`M ${64 + bodyR * 0.85} ${bodyCY} q ${tailLen} ${2} ${tailLen * 0.9} -${tailLen * 0.85}`}
        stroke="var(--accent)" strokeWidth={3.2} strokeLinecap="round" fill="none" opacity="0.85"
      />
      {s >= 3 && (
        <circle cx={64 + bodyR * 0.85 + tailLen * 0.9} cy={bodyCY - tailLen * 0.85} r={2.4 + s * 0.35}
                fill="var(--accent2)" className="pet-tailtip" />
      )}

      {/* neck, so tall forms don't look like a head glued to a ball */}
      {neck && (
        <rect x="59" y={headY + headR - 5} width="10"
              height={Math.max(0, bodyCY - bodyR * 0.7 - headY - headR + 8)}
              rx="5" fill="var(--accent)" opacity="0.75" />
      )}

      {/* back spines */}
      {spines && (
        <g opacity="0.8">
          {[0, 1, 2].map((i) => (
            <path key={i}
                  d={`M ${64 - bodyR * 0.72 + i * 3} ${bodyCY - 6 - i * 7} l -${6 + i} -${5 + i * 2} l ${9 + i} ${1 + i} Z`}
                  fill="var(--accent2)" />
          ))}
        </g>
      )}

      {/* body */}
      <g className="pet-body">
        <ellipse cx="64" cy={bodyCY} rx={bodyR} ry={bodyR * 0.86} fill={`url(#pg-body-${s})`} />
        {/* belly */}
        <ellipse cx="64" cy={bodyCY + 2} rx={bodyR * 0.56} ry={bodyR * 0.5}
                 fill="#FFFFFF" opacity="0.13" />
        {/* markings appear as it matures */}
        {Array.from({ length: marks }).map((_, i) => (
          <circle key={i} cx={50 + i * 14} cy={68 + (i % 2) * 5} r={1.9}
                  fill="var(--accent2)" opacity="0.75" />
        ))}
      </g>

      {/* feet */}
      <ellipse cx={64 - bodyR * 0.42} cy={bodyCY + bodyR * 0.80} rx={5.5 + s * 0.3} ry={3.4} fill="var(--accent)" opacity="0.75" />
      <ellipse cx={64 + bodyR * 0.42} cy={bodyCY + bodyR * 0.80} rx={5.5 + s * 0.3} ry={3.4} fill="var(--accent)" opacity="0.75" />

      {/* head group — the bob animation lives here */}
      <g className="pet-head">
        {/* ears / horns */}
        <path d={`M ${64 - earSpread} ${headY - headR * 0.72}
                  q -3 -${earLen} 3 -${earLen * 1.25}
                  q 5 ${earLen * 0.45} 4 ${earLen * 0.95} Z`}
              fill="var(--accent)" opacity="0.9" />
        <path d={`M ${64 + earSpread} ${headY - headR * 0.72}
                  q 3 -${earLen} -3 -${earLen * 1.25}
                  q -5 ${earLen * 0.45} -4 ${earLen * 0.95} Z`}
              fill="var(--accent)" opacity="0.9" />

        {crown && (
          <g className="pet-crown">
            <path d={`M ${64 - 13} ${headY - headR + 2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`}
                  fill="var(--accent2)" opacity="0.95" />
            <circle cx="64" cy={headY - headR - 6} r="2" fill="#FFFFFF" opacity="0.9" />
          </g>
        )}

        <circle cx="64" cy={headY} r={headR} fill={`url(#pg-body-${s})`} />

        {/* eyes */}
        {closed ? (
          <>
            <path d={`M ${64 - 8.5} ${headY} q 4 3 8 0`} stroke="var(--bg)" strokeWidth="2"
                  fill="none" strokeLinecap="round" />
            <path d={`M ${64 + 0.5} ${headY} q 4 3 8 0`} stroke="var(--bg)" strokeWidth="2"
                  fill="none" strokeLinecap="round" />
          </>
        ) : (
          <g className="pet-eyes">
            <ellipse cx={64 - 7.5} cy={headY} rx={eyeR} ry={eyeH / 2} fill="var(--bg)" />
            <ellipse cx={64 + 7.5} cy={headY} rx={eyeR} ry={eyeH / 2} fill="var(--bg)" />
            <circle cx={64 - 6.2} cy={headY - 1.4} r={1.25} fill="#FFFFFF" opacity="0.92" />
            <circle cx={64 + 8.8} cy={headY - 1.4} r={1.25} fill="#FFFFFF" opacity="0.92" />
          </g>
        )}

        {/* mouth */}
        <path d={mouthD} stroke="var(--bg)" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.85" />

        {/* cheek blush when happy */}
        {wide && (
          <>
            <ellipse cx={64 - 15} cy={headY + 4} rx="3.4" ry="2.1" fill="var(--accent2)" opacity="0.5" />
            <ellipse cx={64 + 15} cy={headY + 4} rx="3.4" ry="2.1" fill="var(--accent2)" opacity="0.5" />
          </>
        )}
      </g>

      {/* orbiting motes, count scales with stage */}
      {s >= 1 && (
        <g className="pet-orbit">
          {Array.from({ length: Math.min(4, s) }).map((_, i) => (
            <circle key={i} cx="64" cy={bodyCY - 8 - auraR} r={1.6 + i * 0.25}
                    fill="var(--accent2)" opacity="0.8"
                    style={{ transformOrigin: `64px ${bodyCY - 8}px`, transform: `rotate(${i * (360 / Math.min(4, s))}deg)` }} />
          ))}
        </g>
      )}
    </svg>
  );
});

// ============================================================
// THEME ENGINE (v22)
//
// Every colour, glow and ambient parameter in the app resolves through this
// one table. Adding a theme means adding an entry here -- no component needs
// to change, because everything reads CSS custom properties that this engine
// writes onto :root.
//
// Design constraint carried over from DESIGN.md: this app is flat terminal /
// Conky, NOT glassmorphism. Themes vary hue, glow and ambience; they never
// introduce frosted panels or card shadows.
//
// Unlock levels are tuned against the v22 XP curve (level 20 ~= 103 days of
// steady use), so every theme here is realistically reachable.
// ============================================================

const THEMES = [
  {
    id: "terminal",
    name: "Terminal",
    blurb: "where it all started",
    unlockLevel: 1,
    colors: {
      bg: "#0B0D10", panel: "#14171C", track: "#1E2228", border: "#23272E",
      text: "#E7EAEE", muted: "#6B7280",
      accent: "#5EEAD4", accent2: "#F5A623", danger: "#F0576B",
      glow: "rgba(94,234,212,0.35)",
    },
    ambient: {
      blobs: [
        ["38% 42% at 18% 12%", "rgba(94,234,212,0.065)"],
        ["42% 38% at 82% 88%", "rgba(245,166,35,0.055)"],
        ["35% 40% at 62% 28%", "rgba(121,192,255,0.045)"],
      ],
      particle: "none",
      grain: 0.018,
    },
  },
  {
    id: "moss",
    name: "Moss",
    blurb: "quiet green, like a forest floor",
    unlockLevel: 3,
    colors: {
      bg: "#080D0A", panel: "#111814", track: "#19231D", border: "#1F2C25",
      text: "#E4EDE7", muted: "#67796F",
      accent: "#7EE787", accent2: "#D9C36B", danger: "#E8737A",
      glow: "rgba(126,231,135,0.32)",
    },
    ambient: {
      blobs: [
        ["40% 44% at 22% 16%", "rgba(126,231,135,0.06)"],
        ["38% 40% at 78% 82%", "rgba(217,195,107,0.045)"],
        ["36% 38% at 55% 45%", "rgba(60,140,110,0.05)"],
      ],
      particle: "motes",
      grain: 0.022,
    },
  },
  {
    id: "dusk",
    name: "Dusk",
    blurb: "the hour after sunset",
    unlockLevel: 6,
    colors: {
      bg: "#0D0912", panel: "#171122", track: "#20182E", border: "#2A2038",
      text: "#EDE7F2", muted: "#7A6E88",
      accent: "#C79BFF", accent2: "#FF9E6B", danger: "#FF6B8A",
      glow: "rgba(199,155,255,0.38)",
    },
    ambient: {
      blobs: [
        ["44% 40% at 16% 20%", "rgba(199,155,255,0.075)"],
        ["40% 44% at 84% 78%", "rgba(255,158,107,0.06)"],
        ["38% 36% at 50% 50%", "rgba(120,80,190,0.05)"],
      ],
      particle: "motes",
      grain: 0.02,
    },
  },
  {
    id: "abyss",
    name: "Abyss",
    blurb: "deep water, far from the surface",
    unlockLevel: 10,
    colors: {
      bg: "#050A12", panel: "#0D1520", track: "#141F2C", border: "#1B2938",
      text: "#DFEAF5", muted: "#5F7286",
      accent: "#4FC3F7", accent2: "#5EEAD4", danger: "#FF7A93",
      glow: "rgba(79,195,247,0.4)",
    },
    ambient: {
      blobs: [
        ["46% 42% at 20% 14%", "rgba(79,195,247,0.07)"],
        ["42% 46% at 80% 86%", "rgba(94,234,212,0.05)"],
        ["40% 38% at 60% 40%", "rgba(30,90,160,0.06)"],
      ],
      particle: "bubbles",
      grain: 0.024,
    },
  },
  {
    id: "ember",
    name: "Ember",
    blurb: "banked coals at midnight",
    unlockLevel: 14,
    colors: {
      bg: "#0F0906", panel: "#1A110C", track: "#241812", border: "#2F2118",
      text: "#F5E9E0", muted: "#8A7264",
      accent: "#FF9F45", accent2: "#FFD166", danger: "#FF6B5B",
      glow: "rgba(255,159,69,0.4)",
    },
    ambient: {
      blobs: [
        ["42% 44% at 18% 82%", "rgba(255,159,69,0.075)"],
        ["40% 42% at 82% 18%", "rgba(255,209,102,0.05)"],
        ["36% 38% at 50% 55%", "rgba(180,60,30,0.055)"],
      ],
      particle: "embers",
      grain: 0.026,
    },
  },
  {
    id: "aurora",
    name: "Aurora",
    blurb: "light over a frozen sky",
    unlockLevel: 20,
    colors: {
      bg: "#060A10", panel: "#0F1720", track: "#16212C", border: "#1E2B39",
      text: "#E8F4F2", muted: "#63808A",
      accent: "#6EE7C8", accent2: "#A78BFA", danger: "#FB7185",
      glow: "rgba(110,231,200,0.45)",
    },
    ambient: {
      blobs: [
        ["50% 38% at 24% 10%", "rgba(110,231,200,0.085)"],
        ["46% 42% at 76% 86%", "rgba(167,139,250,0.07)"],
        ["44% 40% at 52% 42%", "rgba(64,190,255,0.055)"],
      ],
      particle: "aurora",
      grain: 0.02,
    },
  },
];

// ---- time-of-day ambience ------------------------------------------------
// Layered *on top of* the active theme rather than replacing it: the theme
// owns hue and identity, the time of day owns warmth and light level. That
// way "Ember at night" still looks like Ember.

const TIME_PHASES = [
  { id: "night",     from: 22, to: 5,  label: "night",     warm: "rgba(40,70,140,0.055)",  light: 0.86, stars: true  },
  { id: "morning",   from: 5,  to: 11, label: "morning",   warm: "rgba(255,190,120,0.055)", light: 1.04, stars: false },
  { id: "afternoon", from: 11, to: 17, label: "afternoon", warm: "rgba(210,225,255,0.035)", light: 1.0,  stars: false },
  { id: "evening",   from: 17, to: 22, label: "evening",   warm: "rgba(255,130,90,0.055)",  light: 0.94, stars: false },
];

function phaseForHour(h) {
  for (const p of TIME_PHASES) {
    if (p.from < p.to ? h >= p.from && h < p.to : h >= p.from || h < p.to) return p;
  }
  return TIME_PHASES[2];
}

function applyTimePhase(phase) {
  const r = document.documentElement;
  r.style.setProperty("--time-warm", phase.warm);
  r.style.setProperty("--time-light", String(phase.light));
  r.dataset.phase = phase.id;
}

/**
 * Renders the ambient background layers.
 *
 * Particle positions are generated once per (theme, phase) and memoised --
 * regenerating them every render would make them visibly jump. Counts are
 * deliberately small: this is a compositor-only effect and the whole point
 * is that it never costs frames.
 */
const AmbientBackground = React.memo(function AmbientBackground({ theme, phase, calm, scoped = false }) {
  const kind = theme.ambient.particle;
  // `scoped` renders the same layers absolutely inside the panel instead of
  // fixed behind it. Needed because .panel is opaque -- without this the
  // ambience is invisible on phones, where the panel is full-bleed.
  const L = scoped ? "amb-layer amb-scoped" : "amb-layer";

  const dust = useMemo(() => {
    if (kind === "none") return [];
    const n = kind === "aurora" ? 16 : kind === "embers" ? 14 : 18;
    return Array.from({ length: n }, (_, i) => {
      const size = kind === "bubbles" ? 3 + (i % 4) * 2 : 2 + (i % 3);
      return {
        left: `${(i * 37 + 11) % 100}%`,
        size,
        delay: `${-(i * 2.3) % 26}s`,
        dur: `${(kind === "bubbles" ? 20 : 30) + (i % 7) * 4}s`,
      };
    });
  }, [kind]);

  const stars = useMemo(() => {
    if (!phase.stars) return [];
    return Array.from({ length: 34 }, (_, i) => ({
      left: `${(i * 29 + 7) % 100}%`,
      top: `${(i * 53 + 13) % 62}%`,
      op: 0.2 + ((i * 37) % 60) / 100,
    }));
  }, [phase.stars]);

  return (
    <>
      {scoped && <div className={`${L} amb-blobs`} />}
      <div className={`${L} amb-time`}>
        <div className="amb-ray" />
      </div>
      {stars.length > 0 && (
        <div className={`${L} amb-stars`}>
          {stars.map((st, i) => (
            <span key={i} style={{ left: st.left, top: st.top, opacity: st.op }} />
          ))}
        </div>
      )}
      {dust.length > 0 && (
        <div className={`${L} amb-dust`}>
          {dust.map((d, i) => (
            <span
              key={i}
              style={{
                left: d.left, bottom: "-6vh",
                width: d.size, height: d.size,
                animationDelay: d.delay, animationDuration: d.dur,
              }}
            />
          ))}
        </div>
      )}
      <div className={`${L} amb-grain`} />
      {calm && <div className="calm-breath" />}
    </>
  );
});

const STORAGE_KEY_CALM = "tasksh.calm.v1";
const STORAGE_KEY_AMBIENCE = "tasksh.ambience.v1";

/**
 * Owns the active theme, the time-of-day phase and calm mode, and pushes all
 * three into the DOM. Returns everything the settings UI needs.
 */
function useTheme(level) {
  const [themeId, setThemeId] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY_THEME) || DEFAULT_THEME_ID; }
    catch { return DEFAULT_THEME_ID; }
  });
  const [calm, setCalm] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY_CALM) === "1"; } catch { return false; }
  });
  // Ambience toggle: on = animated gradients, off = the original flat black.
  // Defaults on; some people just want the terminal back.
  const [ambience, setAmbience] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY_AMBIENCE) !== "0"; } catch { return true; }
  });
  const [phase, setPhase] = useState(() => phaseForHour(getISTParts().hour));

  const theme = useMemo(() => themeById(themeId), [themeId]);

  // A saved theme can become invalid if a save is moved between devices, or
  // if XP is restored from an older backup. Fall back rather than showing a
  // theme the user hasn't earned.
  useEffect(() => {
    if (!isThemeUnlocked(theme, level) && theme.id !== DEFAULT_THEME_ID) {
      setThemeId(DEFAULT_THEME_ID);
    }
  }, [theme, level]);

  useEffect(() => {
    applyTheme(theme);
    try { localStorage.setItem(STORAGE_KEY_THEME, theme.id); } catch {}
  }, [theme]);

  useEffect(() => { applyTimePhase(phase); }, [phase]);

  // re-check the phase every few minutes rather than every tick
  useEffect(() => {
    const t = setInterval(() => {
      const next = phaseForHour(getISTParts().hour);
      setPhase((cur) => (cur.id === next.id ? cur : next));
    }, 120000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--calm", calm ? "1" : "0");
    r.style.setProperty("--motion-scale", calm ? "1.9" : "1");
    r.classList.toggle("calm-mode", calm);
    try { localStorage.setItem(STORAGE_KEY_CALM, calm ? "1" : "0"); } catch {}
  }, [calm]);

  const unlocked = useMemo(
    () => THEMES.filter((t) => isThemeUnlocked(t, level)),
    [level]
  );

  useEffect(() => {
    document.documentElement.classList.toggle("no-ambience", !ambience);
    try { localStorage.setItem(STORAGE_KEY_AMBIENCE, ambience ? "1" : "0"); } catch {}
  }, [ambience]);

  return { theme, themeId, setThemeId, themes: THEMES, unlocked, phase, calm, setCalm, ambience, setAmbience };
}

const DEFAULT_THEME_ID = "terminal";
const STORAGE_KEY_THEME = "tasksh.theme.v1";

function themeById(id) {
  return THEMES.find((t) => t.id === id) || THEMES[0];
}

function isThemeUnlocked(theme, level) {
  return level >= theme.unlockLevel;
}

/**
 * Applies a theme by writing CSS custom properties onto :root.
 * Every component reads var(--accent) etc, so nothing needs re-rendering --
 * the browser repaints and the CSS transition on :root handles the fade.
 */
function applyTheme(theme) {
  const r = document.documentElement;
  const c = theme.colors;
  r.style.setProperty("--bg", c.bg);
  r.style.setProperty("--panel", c.panel);
  r.style.setProperty("--track", c.track);
  r.style.setProperty("--border", c.border);
  r.style.setProperty("--text", c.text);
  r.style.setProperty("--muted", c.muted);
  r.style.setProperty("--accent", c.accent);
  r.style.setProperty("--accent2", c.accent2);
  r.style.setProperty("--danger", c.danger);
  r.style.setProperty("--glow", c.glow);
  theme.ambient.blobs.forEach((b, i) => {
    r.style.setProperty(`--blob${i + 1}`, `radial-gradient(${b[0]}, ${b[1]}, transparent 70%)`);
  });
  r.style.setProperty("--grain-opacity", String(theme.ambient.grain));
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", c.bg);
}

const SOUND_KEY = "tasksh.sound.v1";
let __audioCtx = null;
function getAudioCtx() {
  if (!__audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    __audioCtx = new Ctx();
  }
  if (__audioCtx.state === "suspended") __audioCtx.resume();
  return __audioCtx;
}

function isSoundOn() {
  try {
    const raw = localStorage.getItem(SOUND_KEY);
    return raw === null ? true : raw === "1";
  } catch {
    return true;
  }
}
function setSoundOn(on) {
  try {
    localStorage.setItem(SOUND_KEY, on ? "1" : "0");
  } catch {}
}

// plays a short envelope-shaped tone (or sequence of tones)
function playTone(specs) {
  if (!isSoundOn()) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  specs.forEach(({ freq, start = 0, dur = 0.08, type = "sine", gain = 0.05 }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now + start);
    g.gain.setValueAtTime(0.0001, now + start);
    g.gain.exponentialRampToValueAtTime(gain, now + start + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(now + start);
    osc.stop(now + start + dur + 0.02);
  });
}

const sound = {
  click: () => playTone([{ freq: 720, dur: 0.045, type: "sine", gain: 0.035 }]),
  toggle: () => playTone([{ freq: 560, dur: 0.06, type: "sine", gain: 0.04 }]),
  success: () =>
    playTone([
      { freq: 660, start: 0, dur: 0.09, type: "sine", gain: 0.045 },
      { freq: 990, start: 0.07, dur: 0.13, type: "sine", gain: 0.05 },
    ]),
  error: () =>
    playTone([
      { freq: 220, start: 0, dur: 0.1, type: "square", gain: 0.03 },
      { freq: 165, start: 0.08, dur: 0.14, type: "square", gain: 0.03 },
    ]),
  whoosh: () => playTone([{ freq: 340, dur: 0.07, type: "triangle", gain: 0.025 }]),
  delete: () => playTone([{ freq: 300, start: 0, dur: 0.09, type: "sawtooth", gain: 0.025 }]),
};

function useSoundToggle() {
  const [on, setOn] = useState(isSoundOn());
  const toggle = () => {
    const next = !on;
    setOn(next);
    setSoundOn(next);
    if (next) playTone([{ freq: 720, dur: 0.05, gain: 0.04 }]);
  };
  return [on, toggle];
}

// ============================================================
// ANIMATED COUNTER -- eases a number from its previous value to
// a new one whenever it changes, instead of snapping instantly.
// ============================================================
function useAnimatedNumber(value, duration = 550) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef(null);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = ease(t);
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [value, duration]);

  return display;
}

function AnimatedNumber({ value, className, suffix = "" }) {
  const display = useAnimatedNumber(value);
  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}

// ============================================================
// CHART PRIMITIVES -- lightweight, dependency-free inline SVG.
// Each animates in on mount/update and carries no external assets.
// ============================================================

// radar/spider chart across N axes, e.g. life-areas by XP
//
// Scale: `maxValue` fixes the outer ring. Without it the chart self-normalises
// to its own largest axis, which makes the biggest area permanently touch the
// rim and every other axis shrink as that one grows -- so real progress reads
// as regression. Callers should pass a stable ceiling.
//
// Negatives: an axis can be net-negative (more XP lost to bad habits than
// earned). Those used to clamp to the same floor as zero, making "-280, your
// worst area" visually identical to "never started". They now render on a
// dedicated inner band and are marked, so a deficit reads as a deficit.
function RadarChart({ axes, size = 220, maxValue }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const n = axes.length;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - (axes.length > 6 ? 46 : 34);
  const max = maxValue ?? Math.max(1, ...axes.map((a) => a.value));
  const angleFor = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;

  // Three bands, so sign is legible from the SHAPE and not only from the
  // label: deficits fall inside the zero ring, zero sits on it, gains grow
  // outward. Marking a negative axis red while still plotting it at the zero
  // radius would leave the polygon itself lying about the data.
  const ZERO_FRAC = 0.16;
  const worst = Math.min(0, ...axes.map((a) => a.value));
  const fracFor = (value) => {
    if (value > 0) return ZERO_FRAC + (1 - ZERO_FRAC) * Math.min(1, value / max);
    if (value === 0 || !worst) return ZERO_FRAC;
    // scale deficits across the inner disc, leaving a small floor so the
    // deepest one stays visible rather than collapsing onto the centre
    return ZERO_FRAC * (1 - 0.8 * Math.min(1, value / worst));
  };

  const pointFor = (i, frac) => {
    const a = angleFor(i);
    return [cx + Math.cos(a) * r * frac, cy + Math.sin(a) * r * frac];
  };

  // Side labels are anchored outward, so they extend past the nominal
  // square. Widen the viewBox horizontally rather than shrinking the chart,
  // so the polygon keeps its size and nothing gets clipped.
  const padX = n > 6 ? 46 : 22;

  const rings = [0.25, 0.5, 0.75, 1];
  const dataPoints = axes.map((ax, i) => pointFor(i, mounted ? fracFor(ax.value) : 0.02));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + "Z";

  return (
    <svg
      viewBox={`${-padX} 0 ${size + padX * 2} ${size}`}
      width="100%"
      height={size}
      className="radar-chart"
      preserveAspectRatio="xMidYMid meet"
    >
      {rings.map((frac, ri) => {
        const pts = axes.map((_, i) => pointFor(i, ZERO_FRAC + (1 - ZERO_FRAC) * frac));
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + "Z";
        return <path key={ri} d={d} className="radar-ring" />;
      })}
      {/* the zero line: anything inside it is a net deficit */}
      <path
        d={axes.map((_, i) => {
          const p = pointFor(i, ZERO_FRAC);
          return `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`;
        }).join(" ") + "Z"}
        className="radar-zero"
      />
      {axes.map((_, i) => {
        const p = pointFor(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} className="radar-spoke" />;
      })}
      <path
        d={dataPath}
        className="radar-fill"
        style={{ transition: "d 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      {axes.map((ax, i) => {
        const labelPt = pointFor(i, 1.19);
        const dotPt = pointFor(i, mounted ? fracFor(ax.value) : 0.02);
        const negative = ax.value < 0;
        // With many axes, centre-anchoring every label makes the left and
        // right sides collide with the chart. Anchor by which side of the
        // circle the vertex sits on so labels grow outward instead.
        const cosA = Math.cos(angleFor(i));
        const anchor = cosA > 0.25 ? "start" : cosA < -0.25 ? "end" : "middle";
        return (
          <g key={ax.key || i}>
            <circle
              cx={dotPt[0]}
              cy={dotPt[1]}
              r={n > 6 ? 2.8 : 3.5}
              fill={negative ? "none" : (ax.color || "#5EEAD4")}
              stroke={negative ? "var(--danger)" : "none"}
              strokeWidth={negative ? 1.4 : 0}
              style={{ transition: "cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)" }}
            />
            <text
              x={labelPt[0]}
              y={labelPt[1]}
              textAnchor={anchor}
              dominantBaseline="middle"
              className={`radar-label ${negative ? "radar-label-neg" : ""}`}
            >
              {negative ? `${ax.label} ↓` : ax.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// circular radial progress ring with center label, draws in on mount
function RadialProgress({ pct, size = 108, stroke = 9, color = "#5EEAD4", trackColor = "#1E2228", label, sublabel }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const r = size / 2 - stroke;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, pct));
  const offset = c - (mounted ? clamped / 100 : 0) * c;
  const labelFontSize = Math.max(8, Math.round(size * 0.135));
  const sublabelFontSize = Math.max(6.5, Math.round(size * 0.075));

  return (
    <div className="radial-progress-wrap" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </svg>
      <div className="radial-progress-center">
        {label && <span className="radial-progress-label" style={{ fontSize: labelFontSize }}>{label}</span>}
        {sublabel && <span className="radial-progress-sublabel" style={{ fontSize: sublabelFontSize }}>{sublabel}</span>}
      </div>
    </div>
  );
}

// donut chart with animated arc draw-in; segments = [{label, value, color}]
function DonutChart({ segments, size = 132, stroke = 18, centerLabel, centerSublabel }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const r = size / 2 - stroke / 2;
  const c = 2 * Math.PI * r;
  const total = Math.max(1e-6, segments.reduce((s, seg) => s + Math.max(0, seg.value), 0));

  let cursor = 0;
  const arcs = segments.map((seg) => {
    const val = Math.max(0, seg.value);
    const frac = val / total;
    const dash = mounted ? frac * c : 0;
    const gap = c - dash;
    const rotation = (cursor / total) * 360;
    cursor += val;
    return { ...seg, dash, gap, rotation, frac };
  });

  return (
    <div className="donut-wrap" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1E2228" strokeWidth={stroke} />
        {arcs.map((a, i) => (
          <circle
            key={a.key || i}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={a.color}
            strokeWidth={stroke}
            strokeDasharray={`${a.dash} ${a.gap}`}
            strokeDashoffset={0}
            transform={`rotate(${a.rotation - 90} ${size / 2} ${size / 2})`}
            style={{ transition: "stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)" }}
            strokeLinecap={arcs.length > 1 ? "butt" : "round"}
          />
        ))}
      </svg>
      <div className="donut-center">
        {centerLabel !== undefined && <span className="donut-center-label">{centerLabel}</span>}
        {centerSublabel && <span className="donut-center-sublabel">{centerSublabel}</span>}
      </div>
    </div>
  );
}

// calendar heatmap (GitHub-contributions style): `weeks` columns of 7-day
// cells, intensity 0-4 driven by count relative to the observed max
function CalendarHeatmap({ counts, weeksBack = 12, colorSteps }) {
  const steps = colorSteps || ["#14171C", "#0F3A34", "#12564C", "#17836F", "#5EEAD4"];
  const todayOffset = 0;
  const totalDays = weeksBack * 7;
  // align so the grid ends on the current week's day-of-week column
  const days = Array.from({ length: totalDays }, (_, i) => todayOffset - (totalDays - 1 - i));
  const maxCount = Math.max(1, ...days.map((o) => counts[getISTDateString(o)] || 0));

  const cols = [];
  for (let w = 0; w < weeksBack; w++) {
    cols.push(days.slice(w * 7, w * 7 + 7));
  }

  const levelFor = (count) => {
    if (!count) return 0;
    const frac = count / maxCount;
    if (frac > 0.75) return 4;
    if (frac > 0.5) return 3;
    if (frac > 0.25) return 2;
    return 1;
  };

  return (
    <div className="heatmap-wrap">
      <div className="heatmap-grid">
        {cols.map((col, ci) => (
          <div className="heatmap-col" key={ci}>
            {col.map((offset, ri) => {
              const ds = getISTDateString(offset);
              const count = counts[ds] || 0;
              const level = levelFor(count);
              return (
                <span
                  key={ri}
                  className={`heatmap-cell ${offset === 0 ? "today" : ""}`}
                  style={{
                    background: steps[level],
                    animationDelay: `${(ci * 7 + ri) * 4}ms`,
                  }}
                  title={`${ds}: ${count} completed`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="heatmap-legend">
        <span>less</span>
        {steps.map((c, i) => (
          <span key={i} className="heatmap-legend-cell" style={{ background: c }} />
        ))}
        <span>more</span>
      </div>
    </div>
  );
}

// horizontal 24h timeline strip -- draws each routine as a positioned,
// width-proportional block instead of a plain list
// Greedy interval-partitioning: assigns each routine to the first lane whose
// last-placed item ends at or before this one's start. Sorted-by-start input
// + "first free lane" is optimal for minimum lane count (classic interval
// scheduling result), so overlapping/back-to-back routines stack into rows
// instead of colliding on one strip.
function packTimelineLanes(items) {
  const laneEnds = [];
  const placed = [];
  for (const item of items) {
    let lane = laneEnds.findIndex((end) => item.start >= end);
    if (lane === -1) {
      lane = laneEnds.length;
      laneEnds.push(item.end);
    } else {
      laneEnds[lane] = item.end;
    }
    placed.push({ ...item, lane });
  }
  return { placed, laneCount: Math.max(1, laneEnds.length) };
}

function DayTimeline({ routines, nowMinutes, doneToday = 0, onToggleToday }) {
  const [mounted, setMounted] = useState(false);
  const [viewportW, setViewportW] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const scrollRef = useRef(null);
  const didAutoScroll = useRef(false);

  // ---- double-tap to complete -------------------------------------------
  //
  // Hand-rolled rather than using ondblclick, for two reasons:
  //   * the track scrolls horizontally, so a swipe that starts on a block
  //     must NOT count as a tap. We record the pointer position on down and
  //     reject the tap if it moved more than a few pixels.
  //   * ondblclick does not fire reliably on touch in every mobile browser.
  //
  // Single taps are deliberately inert -- the blocks are small and sit on a
  // scrolling surface, so one stray finger should never flip a routine.
  const tapRef = useRef({ id: null, at: 0, x: 0, y: 0, moved: false });
  const [pulseId, setPulseId] = useState(null);
  const pulseTimer = useRef(null);

  useEffect(() => () => { if (pulseTimer.current) clearTimeout(pulseTimer.current); }, []);

  const fireToggle = (id) => {
    onToggleToday?.(id);
    setPulseId(id);
    if (pulseTimer.current) clearTimeout(pulseTimer.current);
    pulseTimer.current = setTimeout(() => { setPulseId(null); pulseTimer.current = null; }, 420);
  };

  const beginTap = (e, id) => {
    tapRef.current.x = e.clientX;
    tapRef.current.y = e.clientY;
    tapRef.current.moved = false;
  };

  const cancelTap = () => { tapRef.current.moved = true; };

  const endTap = (e, id) => {
    const t = tapRef.current;
    // treat anything with real travel as a scroll, not a tap
    if (Math.abs(e.clientX - t.x) > 8 || Math.abs(e.clientY - t.y) > 8) {
      t.id = null;
      return;
    }
    const now = Date.now();
    if (t.id === id && now - t.at < 400) {
      fireToggle(id);
      t.id = null;            // consume, so a third tap starts fresh
      t.at = 0;
    } else {
      t.id = id;
      t.at = now;
    }
  };

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Measure the visible scroll window (NOT the track, which is now wider
  // than the screen) so we can decide how much to zoom the day.
  useEffect(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) setViewportW(entry.contentRect.width);
    });
    ro.observe(el);
    setViewportW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const DAY = 24 * 60;
  const todayStr = getISTDateString(0);

  const items = routines.map((r) => {
    const start = timeToMinutes(r.time);
    return { r, start, end: start + Math.max(1, r.duration) };
  });
  const { placed, laneCount } = packTimelineLanes(items);

  // ---- horizontal scale -------------------------------------------------
  // The old version squeezed 24h into ~310px, so a 30-minute routine got
  // ~6px and no label could ever render. Instead we give the day a minimum
  // pixels-per-hour and let the track overflow into a horizontal scroller.
  // MIN_PX_PER_HOUR is chosen so a 30-min block is ~24px (visible) and a
  // 1-hour block is ~48px (fits a short label).
  const MIN_PX_PER_HOUR = 82;
  const trackW = Math.max(viewportW, 24 * MIN_PX_PER_HOUR);
  const pxPerMin = trackW / DAY;
  const isScrollable = trackW > viewportW + 1;

  const nowX = nowMinutes * pxPerMin;

  // Centre "now" on first paint so the user lands on the relevant part of
  // the day instead of at midnight. Only once -- re-centring on every tick
  // would fight the user's own scrolling.
  useEffect(() => {
    if (!scrollRef.current || !viewportW || didAutoScroll.current) return;
    if (!isScrollable) { didAutoScroll.current = true; return; }
    const el = scrollRef.current;
    const target = Math.max(0, Math.min(nowX - viewportW / 2, trackW - viewportW));
    el.scrollTo({ left: target, behavior: "auto" });
    didAutoScroll.current = true;
  }, [viewportW, nowX, trackW, isScrollable]);

  // Track horizontal scroll so a block that begins left of the visible
  // window can still show its label, pinned at the edge, instead of the
  // current routine appearing as an anonymous coloured bar.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setScrollX(el.scrollLeft); raf = 0; });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    setScrollX(el.scrollLeft);
    return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [viewportW]);

  const scrollToNow = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: Math.max(0, Math.min(nowX - viewportW / 2, trackW - viewportW)),
      behavior: "smooth",
    });
    sound.click();
  };

  const LANE_H = 38;
  const LANE_GAP = 6;
  const TOP_PAD = 8;
  const trackHeight = TOP_PAD * 2 + laneCount * LANE_H + (laneCount - 1) * LANE_GAP;

  // Hour ticks: every hour when zoomed in, every 3 when the whole day fits.
  const hourStep = pxPerMin * 60 >= 40 ? 1 : 3;
  const hourMarks = [];
  for (let h = 0; h <= 24; h += hourStep) hourMarks.push(h);
  const hourLabel = (h) => {
    const hh = h % 24;
    if (hh === 0) return "12a";
    if (hh === 12) return "12p";
    return hh > 12 ? `${hh - 12}p` : `${hh}a`;
  };

  const total = routines.length;
  const pct = total ? Math.round((doneToday / total) * 100) : 0;

  return (
    <div className="timeline-wrap">
      <div className="timeline-head">
        <div className="timeline-head-left">
          <span className="timeline-title">today&apos;s schedule</span>
          {total > 0 && (
            <span className="timeline-count">{doneToday}/{total} done</span>
          )}
        </div>
        {isScrollable && (
          <button className="timeline-jump" onClick={scrollToNow} title="Jump to now">
            now
          </button>
        )}
      </div>

      {total > 0 && (
        <div className="timeline-progress">
          <div
            className="timeline-progress-fill"
            style={{ width: mounted ? `${pct}%` : "0%" }}
          />
        </div>
      )}

      <div className="timeline-scroll" ref={scrollRef}>
        <div className="timeline-inner" style={{ width: trackW }}>
          <div className="timeline-hours">
            {hourMarks.map((h) => (
              <div key={h} className="timeline-hour" style={{ left: h * 60 * pxPerMin }}>
                <span>{hourLabel(h)}</span>
              </div>
            ))}
          </div>

          <div className="timeline-track" style={{ height: trackHeight }}>
            {/* dim the overnight stretch (10pm-6am) */}
            <div className="timeline-night" style={{ left: 0, width: 6 * 60 * pxPerMin }} />
            <div className="timeline-night" style={{ left: 22 * 60 * pxPerMin, width: 2 * 60 * pxPerMin }} />

            {hourMarks.map((h) => (
              <div
                key={h}
                className={`timeline-gridline ${h % 6 === 0 ? "major" : ""}`}
                style={{ left: h * 60 * pxPerMin }}
              />
            ))}

            <div
              className="timeline-elapsed"
              style={{ width: mounted ? nowX : 0 }}
            />

            {placed.map(({ r, start, lane }, i) => {
              const left = start * pxPerMin;
              const rawW = Math.max(1, r.duration) * pxPerMin;
              // clamp so a routine running past midnight ends at the edge
              const width = Math.max(4, Math.min(rawW, trackW - left));
              const done = (r.history || []).includes(todayStr);
              const color = colorForId(r.id);
              // visible slice of this block within the scroll window
              const visL = Math.max(left, scrollX);
              const visR = Math.min(left + width, scrollX + viewportW);
              const visW = Math.max(0, visR - visL);
              const showLabel = visW > 38;
              // nudge the label right when the block starts off-screen
              const labelInset = Math.max(0, Math.min(scrollX - left, width - 46));
              const isNow = nowMinutes >= start && nowMinutes < start + r.duration;
              return (
                <div
                  key={r.id}
                  role={onToggleToday ? "button" : undefined}
                  tabIndex={onToggleToday ? 0 : undefined}
                  aria-pressed={onToggleToday ? done : undefined}
                  aria-label={onToggleToday
                    ? `${r.label}, ${minutesToLabel(start)}${done ? ", done" : ""}. Double-tap to toggle.`
                    : undefined}
                  onPointerDown={onToggleToday ? (e) => beginTap(e, r.id) : undefined}
                  onPointerUp={onToggleToday ? (e) => endTap(e, r.id) : undefined}
                  onPointerCancel={onToggleToday ? cancelTap : undefined}
                  onKeyDown={onToggleToday ? (e) => {
                    // keyboard has no "double press" convention -- Enter/Space
                    // toggles directly, which is what a screen reader expects
                    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fireToggle(r.id); }
                  } : undefined}
                  className={`timeline-block ${done ? "done" : ""} ${isNow ? "active" : ""} ${onToggleToday ? "tappable" : ""} ${pulseId === r.id ? "pulse" : ""}`}
                  style={{
                    left,
                    top: TOP_PAD + lane * (LANE_H + LANE_GAP),
                    width: mounted ? width : 0,
                    height: LANE_H,
                    transitionDelay: `${Math.min(i * 18, 260)}ms`,
                    background: done
                      ? "linear-gradient(180deg, #2E343C, #23282F)"
                      : `linear-gradient(180deg, ${color}, ${color}C4)`,
                    boxShadow: done ? "none" : `0 2px 10px ${color}44`,
                  }}
                  title={`${r.label} · ${minutesToLabel(start)} · ${formatDuration(r.duration)}${done ? " · done" : ""}`}
                >
                  {showLabel && (
                    <span
                      className="timeline-block-label"
                      style={labelInset > 0 ? { paddingLeft: labelInset + 8 } : undefined}
                    >
                      {done && <span className="timeline-block-tick">✓</span>}
                      {r.label}
                    </span>
                  )}
                </div>
              );
            })}

            <div className="timeline-now" style={{ left: nowX }} />
          </div>
        </div>
      </div>

      {isScrollable && <div className="timeline-hint">scroll sideways to see the full day</div>}
    </div>
  );
}

const seedRoutines = [
  { id: 1, time: "06:30", label: "Wake + hydrate", duration: 30, history: [getISTDateString(-1), getISTDateString(-2), getISTDateString(-3)] },
  { id: 2, time: "07:00", label: "Workout", duration: 60, history: [getISTDateString(-1), getISTDateString(-2)] },
  { id: 3, time: "09:00", label: "Deep work block", duration: 180, history: [getISTDateString(0), getISTDateString(-1), getISTDateString(-2), getISTDateString(-3), getISTDateString(-4)] },
  { id: 4, time: "13:00", label: "Lunch break", duration: 45, history: [] },
  { id: 5, time: "14:00", label: "Admin / errands", duration: 120, history: [] },
  { id: 6, time: "18:00", label: "Rice / creative projects", duration: 90, history: [getISTDateString(-1)] },
  { id: 7, time: "20:00", label: "Dinner", duration: 45, history: [] },
  { id: 8, time: "21:30", label: "Anime / wind down", duration: 90, history: [] },
  { id: 9, time: "23:00", label: "Sleep", duration: 450, history: [] },
];

// Reports which build is ACTUALLY running, read from the live service worker
// cache rather than a constant compiled into this bundle.
//
// A constant would be worse than nothing here: a stale bundle carries its own
// stale constant, so it would confidently display the wrong version at exactly
// the moment you need the truth. Two real diagnoses in this project were spent
// establishing "which build is this phone on" from screenshots. This answers it
// in one glance.
//
// `caches` is unavailable on insecure origins and in some private modes, so
// every path is guarded and the badge simply hides rather than throwing.
function useRunningVersion() {
  const [tag, setTag] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const read = async () => {
      try {
        if (typeof caches === "undefined" || !caches.keys) return;
        const keys = await caches.keys();
        const match = keys
          .filter((k) => /^tasksh-v\d+$/.test(k))
          .sort((a, b) => parseInt(b.slice(8), 10) - parseInt(a.slice(8), 10))[0];
        if (!cancelled && match) setTag(match.replace("tasksh-", ""));
      } catch {
        /* no cache access — badge stays hidden */
      }
    };

    read();

    // An update installs in the background; re-read when it takes over so the
    // badge doesn't keep claiming the version it booted with.
    const sw = navigator.serviceWorker;
    sw?.addEventListener?.("controllerchange", read);
    return () => {
      cancelled = true;
      sw?.removeEventListener?.("controllerchange", read);
    };
  }, []);

  return tag;
}

function VersionBadge() {
  const version = useRunningVersion();
  if (!version) return null;
  return (
    <span className="version-badge" title={`running build ${version}`}>
      {version}
    </span>
  );
}

/**
 * One-shot "shake the composer" flag that cleans up after itself.
 *
 * The three composers each open-coded this as
 *   setFlash(true); setTimeout(() => setFlash(false), 420);
 * with no clearTimeout, so unmounting mid-animation (switch tabs right after a
 * failed submit) left a timer holding a setState on a dead component. Rapid
 * repeat submits also stacked overlapping timers, and the earliest one cut the
 * animation short.
 *
 * Returns [flash, trigger]. The pending timer is cleared on re-trigger and on
 * unmount, so the animation always runs its full duration exactly once.
 */
function useFlash(duration = 420) {
  const [flash, setFlash] = useState(false);
  const timer = useRef(null);

  const trigger = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setFlash(true);
    timer.current = setTimeout(() => {
      setFlash(false);
      timer.current = null;
    }, duration);
  }, [duration]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return [flash, trigger];
}

function useISTClock() {
  const [now, setNow] = useState(getISTParts());
  useEffect(() => {
    const t = setInterval(() => setNow(getISTParts()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

// figures out which routine is "current" and which is "next", handling
// midnight wraparound, given a sorted-by-time routine list
function useRoutineStatus(routines, nowMinutes) {
  return useMemo(() => {
    const sorted = [...routines].sort(
      (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)
    );
    if (sorted.length === 0) return { sorted, currentId: null, nextId: null };

    let currentIdx = sorted.length - 1;
    for (let i = 0; i < sorted.length; i++) {
      if (timeToMinutes(sorted[i].time) <= nowMinutes) currentIdx = i;
      else break;
    }
    const nextIdx = (currentIdx + 1) % sorted.length;
    return {
      sorted,
      currentId: sorted[currentIdx].id,
      nextId: sorted[nextIdx].id,
    };
  }, [routines, nowMinutes]);
}

// compact 7-day dot strip, oldest -> newest (today last)

function RoutineRow({ routine, status, index, onDelete, onToggleToday, onSave }) {
  const startMin = timeToMinutes(routine.time);
  const endMin = startMin + routine.duration;
  const { streak, freezeUsed } = streakFreezeInfo(routine.history);
  const doneToday = (routine.history || []).includes(getISTDateString(0));

  const [dragX, setDragX] = useState(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const axisRef = useRef(null); // 'x' | 'y' | null (undecided)
  const movedRef = useRef(false);
  const [removing, setRemoving] = useState(false);
  const exitTimer = useRef(null);
  // swipe-to-delete defers onDelete for the exit animation; drop the timer if
  // this row unmounts first so it can't fire against a stale id
  useEffect(() => () => { if (exitTimer.current) clearTimeout(exitTimer.current); }, []);

  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(routine.label);
  const [eTime, setETime] = useState(routine.time);
  const [eDuration, setEDuration] = useState(routine.duration);
  const [eAlts, setEAlts] = useState(routine.alternatives || []);

  const openEdit = () => {
    setELabel(routine.label);
    setETime(routine.time);
    setEDuration(routine.duration);
    setEAlts(routine.alternatives || []);
    setEditing(true);
  };

  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(routine.id, {
      label: text,
      time: eTime || routine.time,
      duration: Math.max(5, +eDuration || routine.duration),
      alternatives: eAlts.map((a) => a.trim()).filter(Boolean),
    });
    setEditing(false);
  };

  const onPointerDown = (e) => {
    if (editing) return;
    draggingRef.current = true;
    movedRef.current = false;
    axisRef.current = null;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    if (axisRef.current === null) {
      // not enough movement yet to tell whether this is a scroll or a swipe
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axisRef.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (axisRef.current === "y") {
        // vertical gesture - this is a scroll, not a swipe. back off completely
        // and let the browser handle it natively.
        draggingRef.current = false;
        return;
      }
    }

    if (axisRef.current !== "x") return;
    if (Math.abs(dx) > 4) movedRef.current = true;
    setDragX(Math.max(-120, Math.min(0, dx)));
  };
  const finishDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (dragX < -70) {
      setRemoving(true);
      if (!exitTimer.current) exitTimer.current = setTimeout(() => onDelete(routine.id), 200);
    } else {
      setDragX(0);
      if (!movedRef.current) openEdit();
    }
  };

  return (
    <div
      className={`routine-row-wrap ${removing ? "removing" : ""}`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <div className="routine-delete-bg">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
      <div
        className={`routine-row ${status}`}
        style={{
          transform: `translateX(${dragX}px)`,
          transition: draggingRef.current ? "none" : "transform 220ms cubic-bezier(.65,0,.35,1)",
          borderLeft: `3px solid ${doneToday ? "#2A2F36" : colorForId(routine.id)}`,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        onPointerLeave={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div className="routine-line">
          <span className={`routine-node ${doneToday ? "quest-done" : ""}`} />
          <span className="routine-connector" />
        </div>

        {editing ? (
          <div className="routine-edit" onPointerDown={(e) => e.stopPropagation()}>
            <input
              className="edit-label"
              value={eLabel}
              onChange={(e) => setELabel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEdit()}
              autoFocus
            />
            <div className="edit-row">
              <input
                type="time"
                className="time-input"
                value={eTime}
                onChange={(e) => setETime(e.target.value)}
              />
              <input
                type="number"
                min="5"
                step="5"
                className="duration-input"
                value={eDuration}
                onChange={(e) => setEDuration(e.target.value)}
              />
              <span className="edit-unit">min</span>
            </div>
            <div className="alt-composer">
              <span className="alt-composer-hint">optional: other things you could do instead</span>
              {eAlts.map((a, i) => (
                <div className="alt-composer-row" key={i}>
                  <input
                    type="text"
                    placeholder={`alternative ${i + 1}`}
                    value={a}
                    onChange={(e) => {
                      const next = [...eAlts];
                      next[i] = e.target.value;
                      setEAlts(next);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                  />
                  <button
                    type="button"
                    className="alt-remove-btn"
                    onClick={() => setEAlts(eAlts.filter((_, j) => j !== i))}
                    aria-label="Remove alternative"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button type="button" className="alt-add-btn" onClick={() => setEAlts([...eAlts, ""])}>
                + another option
              </button>
            </div>
            <div className="edit-actions">
              <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
              <button className="edit-save" onClick={saveEdit}>save</button>
            </div>
          </div>
        ) : (
          <div className="routine-main">
            <div className="routine-top">
              <span className="routine-time">{minutesToLabel(startMin)}</span>
              {status === "current" && <span className="live-tag">NOW</span>}
              {streak > 0 && (
                <span className="streak-tag">
                  🔥{streak}
                  {freezeUsed && <span className="freeze-tag" title="a missed day was covered by a streak freeze">❄️</span>}
                </span>
              )}
            </div>
            <span className="routine-label">{routine.label}</span>
            {routine.alternatives && routine.alternatives.length > 0 && (
              <span className="routine-alts">or: {routine.alternatives.join(" · ")}</span>
            )}
            <span className="routine-span">
              {minutesToLabel(startMin)} – {minutesToLabel(endMin)} · {formatDuration(routine.duration)}
            </span>
          </div>
        )}

        {!editing && (
          <button
            className="link-btn routine-link"
            onClick={(e) => { e.stopPropagation(); linkUIBridge.open(refOf("routine", routine.id)); sound.click(); }}
            aria-label="Links"
            title="Link to other items"
          >
            <svg viewBox="0 0 24 24" width="12" height="12">
              <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}

      </div>
    </div>
  );
}

// aggregate completion % across all routines, last 7 IST days

function RoutinesView({ routines, setRoutines }) {
  const ist = useISTClock();
  const nowMinutes = ist.hour * 60 + ist.minute;
  const { sorted, currentId, nextId } = useRoutineStatus(routines, nowMinutes);
  const current = sorted.find((r) => r.id === currentId);
  const next = sorted.find((r) => r.id === nextId);

  const [label, setLabel] = useState("");
  const [time, setTime] = useState(() => minutesToInputValue(nowMinutes));
  const [duration, setDuration] = useState(30);
  const [flash, triggerFlash] = useFlash();
  const [alts, setAlts] = useState([]);
  const [showAlts, setShowAlts] = useState(false);

  const addRoutine = () => {
    const text = label.trim();
    if (!text) {
      triggerFlash();
      sound.error();
      return;
    }
    const finalTime = time || minutesToInputValue(nowMinutes);
    const alternatives = alts.map((a) => a.trim()).filter(Boolean);
    setRoutines((prev) => [
      ...prev,
      { id: makeId(), time: finalTime, label: text, duration: Math.max(5, +duration || 30), history: [], alternatives },
    ]);
    setLabel("");
    setTime(minutesToInputValue(nowMinutes));
    setDuration(30);
    setAlts([]);
    setShowAlts(false);
    sound.click();
  };

  const deleteRoutine = (id) => { setRoutines((prev) => prev.filter((r) => r.id !== id)); sound.delete(); };

  const toggleToday = (id) => {
    const today = getISTDateString(0);
    const willBeDone = !(routines.find((r) => r.id === id)?.history || []).includes(today);
    setRoutines((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const has = (r.history || []).includes(today);
        const history = has ? r.history.filter((d) => d !== today) : [...(r.history || []), today];
        return { ...r, history: history.slice(-60) };
      })
    );
    linkBridge.propagate("routine", id, willBeDone);
    if (willBeDone) { sound.success(); petBus.emit("routineDone"); } else { sound.click(); }
  };

  const saveRoutine = (id, patch) =>
    setRoutines((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const currentEnd = current ? timeToMinutes(current.time) + current.duration : 0;
  const untilNext = next
    ? ((timeToMinutes(next.time) - nowMinutes + 1440) % 1440) || 1440
    : 0;

  const todayStr = getISTDateString(0);
  const doneToday = sorted.filter((r) => (r.history || []).includes(todayStr)).length;

  return (
    <div className="task-list routine-list">
      <div className="hero-card">
        <div className="hero-clock-row">
          <span className="hero-clock">
            {String(ist.hour % 12 === 0 ? 12 : ist.hour % 12).padStart(2, "0")}:
            {String(ist.minute).padStart(2, "0")}
            <span className="hero-sec">:{String(ist.second).padStart(2, "0")}</span>
            <span className="hero-ampm">{ist.hour < 12 ? "AM" : "PM"}</span>
          </span>
          <span className="hero-tz">IST · INDIA</span>
        </div>
        <span className="hero-date">{getISTDateLabel()}</span>

        <div className="hero-divider" />

        {current ? (
          <div className="hero-current">
            <span className="hero-label">CURRENT ROUTINE</span>
            <div className="hero-current-name">
              <span className="pulse-dot" />
              {current.label}
            </div>
            <span className="hero-sub">
              until {minutesToLabel(currentEnd)} · next: {next?.label} in {formatDuration(untilNext)}
            </span>
          </div>
        ) : (
          <span className="hero-sub">no routines yet</span>
        )}
      </div>

      <DayTimeline routines={sorted} nowMinutes={nowMinutes} doneToday={doneToday}
                   onToggleToday={toggleToday} />

      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="new routine..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addRoutine()}
        />
        <input
          type="time"
          className="time-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          type="button"
          className={`alt-toggle-btn ${showAlts ? "active" : ""}`}
          onClick={() => setShowAlts((v) => !v)}
          aria-label="Add optional alternatives for this slot"
          title="Add optional alternatives for this slot"
        >
          or
        </button>
        <button className="add-btn" onClick={addRoutine} aria-label="Add routine">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {showAlts && (
        <div className="alt-composer">
          <span className="alt-composer-hint">optional: other things you could do in this slot instead</span>
          {alts.map((a, i) => (
            <div className="alt-composer-row" key={i}>
              <input
                type="text"
                placeholder={`alternative ${i + 1}, e.g. "Drawing"`}
                value={a}
                onChange={(e) => {
                  const next = [...alts];
                  next[i] = e.target.value;
                  setAlts(next);
                }}
                onKeyDown={(e) => e.key === "Enter" && addRoutine()}
              />
              <button
                type="button"
                className="alt-remove-btn"
                onClick={() => setAlts(alts.filter((_, j) => j !== i))}
                aria-label="Remove alternative"
              >
                ×
              </button>
            </div>
          ))}
          <button type="button" className="alt-add-btn" onClick={() => setAlts([...alts, ""])}>
            + another option
          </button>
        </div>
      )}

      <div className="duration-chips">
        {DURATION_PRESETS.map((d) => (
          <button key={d} className={duration === d ? "active" : ""} onClick={() => setDuration(d)}>
            {formatDuration(d)}
          </button>
        ))}
        <input
          type="number"
          min="5"
          step="5"
          className="duration-custom"
          value={duration}
          onChange={(e) => setDuration(+e.target.value || 5)}
        />
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">no quests yet — add your first routine</div>
        </div>
      ) : (
        sorted.map((r, i) => (
          <RoutineRow
            key={r.id}
            routine={r}
            index={i}
            status={r.id === currentId ? "current" : r.id === nextId ? "next" : "idle"}
            onDelete={deleteRoutine}
            onToggleToday={toggleToday}
            onSave={saveRoutine}
          />
        ))
      )}

    </div>
  );
}

// ============================================================
// VAULT TAB — habit-streak tracking (weekly-goal habits, monthly
// calendar grid) + lightweight project manager
// ============================================================

// current IST month info, used to build the monthly calendar grid
function getISTMonthInfo() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const y = +parts.find((p) => p.type === "year").value;
  const m = +parts.find((p) => p.type === "month").value; // 1-12
  const daysInMonth = new Date(y, m, 0).getDate();
  const monthLabel = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    month: "short",
    year: "numeric",
  }).format(now);
  return { y, m, daysInMonth, monthLabel };
}

function istDateStringFor(y, m, day) {
  return `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

// count of history entries within the last 7 IST days (incl. today)
function weeklyCount(history) {
  const set = new Set(history || []);
  let c = 0;
  for (let o = -6; o <= 0; o++) if (set.has(getISTDateString(o))) c++;
  return c;
}

function daysToGoLabel(dueDate) {
  if (!dueDate) return null;
  const due = new Date(dueDate + "T00:00:00+05:30");
  const today = new Date(getISTDateString(0) + "T00:00:00+05:30");
  const diff = Math.round((due - today) / 86400000);
  if (diff < 0) return { text: `${Math.abs(diff)}d overdue`, overdue: true };
  if (diff === 0) return { text: "due today", overdue: false };
  return { text: `${diff}d to go`, overdue: false };
}

const seedVaultHabits = [
  { id: 1, icon: "◆", label: "6 Hr Deep Work", weeklyGoal: 7, history: [getISTDateString(0), getISTDateString(-1), getISTDateString(-2)] },
  { id: 2, icon: "◇", label: "Eat Healthy", weeklyGoal: 7, history: [getISTDateString(-1)] },
  { id: 3, icon: "▢", label: "Reading", weeklyGoal: 4, history: [] },
  { id: 4, icon: "▲", label: "Workout", weeklyGoal: 6, history: [getISTDateString(0)] },
];

const seedProjects = [
  {
    id: 1,
    name: "Notion Template",
    dueDate: getISTDateString(7),
    tasks: [
      { id: makeId(), text: "Design layout", done: true },
      { id: makeId(), text: "Write docs", done: false },
      { id: makeId(), text: "Publish", done: false },
    ],
  },
  {
    id: 2,
    name: "Content Creation",
    dueDate: getISTDateString(7),
    tasks: [
      { id: makeId(), text: "Script draft", done: false },
      { id: makeId(), text: "Record", done: false },
    ],
  },
];

// compact monthly calendar grid, filled cells = history hit for that IST date
function MonthGrid({ history }) {
  const { y, m, daysInMonth, monthLabel } = getISTMonthInfo();
  const set = new Set(history || []);
  const today = getISTDateString(0);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return (
    <div className="month-grid-wrap">
      <span className="month-grid-label">{monthLabel}</span>
      <div className="month-grid">
        {days.map((d) => {
          const ds = istDateStringFor(y, m, d);
          return (
            <span
              key={d}
              className={`month-cell ${set.has(ds) ? "filled" : ""} ${ds === today ? "today" : ""}`}
              style={{ animationDelay: `${d * 6}ms` }}
              title={ds}
            />
          );
        })}
      </div>
    </div>
  );
}

function VaultHabitCard({ habit, onToggleToday, onDelete, onSave }) {
  const doneToday = (habit.history || []).includes(getISTDateString(0));
  const { streak, freezeUsed } = streakFreezeInfo(habit.history);
  const wk = weeklyCount(habit.history);
  const pct = Math.min(100, Math.round((wk / habit.weeklyGoal) * 100));

  const [editing, setEditing] = useState(false);
  const [eIcon, setEIcon] = useState(habit.icon);
  const [eLabel, setELabel] = useState(habit.label);
  const [eGoal, setEGoal] = useState(habit.weeklyGoal);

  const openEdit = () => {
    setEIcon(habit.icon);
    setELabel(habit.label);
    setEGoal(habit.weeklyGoal);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(habit.id, { icon: eIcon.trim() || habit.icon, label: text, weeklyGoal: Math.max(1, Math.min(7, +eGoal || habit.weeklyGoal)) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="vault-card">
        <div className="routine-edit">
          <div className="edit-row">
            <input
              className="duration-input"
              style={{ width: 44 }}
              value={eIcon}
              onChange={(e) => setEIcon(e.target.value)}
              maxLength={2}
            />
            <input
              className="edit-label"
              style={{ flex: 1 }}
              value={eLabel}
              onChange={(e) => setELabel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEdit()}
              autoFocus
            />
          </div>
          <div className="edit-row">
            <input
              type="number"
              min="1"
              max="7"
              className="duration-input"
              value={eGoal}
              onChange={(e) => setEGoal(e.target.value)}
            />
            <span className="edit-unit">x / week</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vault-card" style={{ borderLeft: `3px solid ${colorForId(habit.id)}` }}>
      <div className="vault-card-top">
        <span className="vault-card-icon" style={{ color: colorForId(habit.id) }}>{habit.icon}</span>
        <div className="vault-card-title">
          <span className="vault-card-label">{habit.label}</span>
          <span className="vault-card-goal">weekly: {habit.weeklyGoal}x</span>
        </div>
        <button className="vault-card-edit" onClick={openEdit} aria-label="Edit habit">
          <svg viewBox="0 0 24 24" width="13" height="13">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="vault-card-del" onClick={() => onDelete(habit.id)} aria-label="Delete habit">
          <svg viewBox="0 0 24 24" width="13" height="13">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <MonthGrid history={habit.history} />
      <div className="vault-card-bottom">
        <div className="vault-card-ring-row">
          <RadialProgress pct={pct} size={34} stroke={3.5} color={colorForId(habit.id)} />
          <span className="vault-card-pct">
            {pct}% <span className="muted">({wk}/{habit.weeklyGoal})</span>
          </span>
        </div>
        {streak > 0 && (
          <span className="streak-tag">
            🔥{streak}
            {freezeUsed && <span className="freeze-tag" title="a missed day was covered by a streak freeze">❄️</span>}
          </span>
        )}
      </div>
      <button className="link-btn" onClick={(e) => { e.stopPropagation(); linkUIBridge.open(refOf("vault", habit.id)); sound.click(); }} aria-label="Links" title="Link to other items">
        <svg viewBox="0 0 24 24" width="12" height="12">
          <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <button className={`vault-check ${doneToday ? "done" : ""}`} onClick={() => onToggleToday(habit.id)}>
        {doneToday ? "✓ completed today" : "mark complete today"}
      </button>
    </div>
  );
}

function VaultHabitsSection({ habits, setHabits }) {
  const [label, setLabel] = useState("");
  const [goal, setGoal] = useState(7);
  const [flash, triggerFlash] = useFlash();

  const add = () => {
    const text = label.trim();
    if (!text) {
      triggerFlash();
      sound.error();
      return;
    }
    setHabits((prev) => [...prev, { id: makeId(), icon: "◆", label: text, weeklyGoal: goal, history: [] }]);
    setLabel("");
    setGoal(7);
    sound.click();
  };
  const del = (id) => { setHabits((prev) => prev.filter((h) => h.id !== id)); sound.delete(); };
  const saveHabit = (id, patch) => setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  const toggleToday = (id) => {
    const today = getISTDateString(0);
    const willBeDone = !(habits.find((h) => h.id === id)?.history || []).includes(today);
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const has = (h.history || []).includes(today);
        const history = has ? h.history.filter((d) => d !== today) : [...(h.history || []), today];
        return { ...h, history: history.slice(-370) };
      })
    );
    linkBridge.propagate("vault", id, willBeDone);
    if (willBeDone) { sound.success(); petBus.emit("vaultDone"); } else { sound.click(); }
  };

  return (
    <>
      <div className="section-header"><span>HABIT-STREAK-TRACKING</span></div>
      <div className="vault-grid">
        {habits.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no habits yet — add your first</div>
          </div>
        ) : (
          habits.map((h) => (
            <VaultHabitCard key={h.id} habit={h} onToggleToday={toggleToday} onDelete={del} onSave={saveHabit} />
          ))
        )}
      </div>
      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="new habit..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button className="add-btn" onClick={add} aria-label="Add habit">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {[3, 4, 5, 6, 7].map((g) => (
          <button key={g} className={goal === g ? "active" : ""} onClick={() => setGoal(g)}>
            {g}x/wk
          </button>
        ))}
      </div>
    </>
  );
}

function ProjectTaskRow({ projectId, task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    const t = text.trim();
    if (t) onEdit(projectId, task.id, t);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="project-task-row">
        <input
          className="project-task-edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          onBlur={save}
          autoFocus
        />
      </div>
    );
  }

  return (
    <div className="project-task-row">
      <Checkbox checked={task.done} onChange={() => onToggle(projectId, task.id)} color="#5EEAD4" />
      <span className={`project-task-text ${task.done ? "done" : ""}`} onClick={() => setEditing(true)}>
        {task.text}
      </span>
      <button className="del-btn" onClick={() => onDelete(projectId, task.id)} aria-label="Delete task">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function ProjectCard({ project, onDelete, onAddTask, onToggleTask, onDeleteTask, onEditTask, onSave }) {
  const [taskText, setTaskText] = useState("");
  const total = project.tasks.length;
  const done = project.tasks.filter((t) => t.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const due = daysToGoLabel(project.dueDate);

  const [editing, setEditing] = useState(false);
  const [eName, setEName] = useState(project.name);
  const [eDue, setEDue] = useState(project.dueDate || "");

  const addTask = () => {
    const text = taskText.trim();
    if (!text) return;
    onAddTask(project.id, text);
    setTaskText("");
  };

  const openEdit = () => {
    setEName(project.name);
    setEDue(project.dueDate || "");
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eName.trim();
    if (!text) return;
    onSave(project.id, { name: text, dueDate: eDue || null });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="project-card">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eName}
            onChange={(e) => setEName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            <input type="date" className="time-input" value={eDue} onChange={(e) => setEDue(e.target.value)} />
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card" style={{ borderLeft: `3px solid ${colorForId(project.id)}` }}>
      <div className="project-card-top">
        <span className="project-name">{project.name}</span>
        <div className="project-card-actions">
          <button className="vault-card-edit" onClick={openEdit} aria-label="Edit project">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="vault-card-del" onClick={() => onDelete(project.id)} aria-label="Delete project">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {due && <span className={`project-due ${due.overdue ? "overdue" : ""}`}>{due.text}</span>}
      <div className="progress-track small">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="vault-card-pct">{done}/{total} tasks · {pct}%</span>
      <div className="project-tasks">
        {project.tasks.map((t) => (
          <ProjectTaskRow
            key={t.id}
            projectId={project.id}
            task={t}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
          />
        ))}
      </div>
      <div className="project-add-task">
        <input
          type="text"
          placeholder="+ add task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
      </div>
    </div>
  );
}

function VaultProjectsSection({ projects, setProjects }) {
  const [name, setName] = useState("");
  const [due, setDue] = useState("");
  const [flash, triggerFlash] = useFlash();

  const add = () => {
    const text = name.trim();
    if (!text) {
      triggerFlash();
      sound.error();
      return;
    }
    setProjects((prev) => [...prev, { id: makeId(), name: text, dueDate: due || null, tasks: [] }]);
    setName("");
    setDue("");
    sound.click();
  };
  const del = (id) => { setProjects((prev) => prev.filter((p) => p.id !== id)); sound.delete(); };
  const saveProject = (id, patch) => setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  const addTask = (projectId, text) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, tasks: [...p.tasks, { id: makeId(), text, done: false }] } : p))
    );
    sound.click();
  };
  const toggleTask = (projectId, taskId) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId ? p : { ...p, tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t)) }
      )
    );
    sound.success();
  };
  const deleteTask = (projectId, taskId) => {
    setProjects((prev) =>
      prev.map((p) => (p.id !== projectId ? p : { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }))
    );
    sound.delete();
  };
  const editTask = (projectId, taskId, text) =>
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId ? p : { ...p, tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, text } : t)) }
      )
    );

  return (
    <>
      <div className="section-header"><span>PROJECT-MANAGER</span></div>
      <div className="vault-grid">
        {projects.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no projects yet</div>
          </div>
        ) : (
          projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onDelete={del}
              onAddTask={addTask}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              onEditTask={editTask}
              onSave={saveProject}
            />
          ))
        )}
      </div>
      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="new project..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <input type="date" className="time-input" value={due} onChange={(e) => setDue(e.target.value)} />
        <button className="add-btn" onClick={add} aria-label="Add project">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  );
}

// ---- notes -----------------------------------------------------------------
// Somewhere to dump an idea before it evaporates. Deliberately the least
// structured thing in the app: a title, a body, nothing else. No tags, no
// folders, no due dates -- the moment capture has friction it stops happening.
//
// Styled as a terminal buffer to match the rest of the app: monospace, a
// `~/notes/` path header, a block cursor on the empty state. Editing is inline
// per DESIGN.md (no modals anywhere in this app).

const STORAGE_KEY_NOTES = "tasksh.notes.v1";

const seedNotes = [
  {
    id: 1,
    title: "ideas.md",
    body: "things to build next:\n- undo toast on delete\n- keyboard shortcuts (ctrl+k)\n- xp sparkline over time",
    updated: Date.now(),
  },
];

/** Relative "when", coarse on purpose -- exact timestamps are noise here. */
function relativeWhen(ts) {
  if (!ts) return "";
  const mins = Math.floor((Date.now() - ts) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function NoteCard({ note, onSave, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const bodyRef = useRef(null);

  // Grow the textarea to fit rather than scrolling inside a small box -- a
  // note you cannot see all of is a note you stop trusting.
  const autoSize = useCallback(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  useEffect(() => { if (editing) autoSize(); }, [editing, autoSize]);

  const commit = () => {
    const t = title.trim() || "untitled";
    onSave(note.id, { title: t, body, updated: Date.now() });
    setEditing(false);
    sound.click();
  };

  const cancel = () => {
    setTitle(note.title);
    setBody(note.body);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="note-card editing">
        <div className="note-head">
          <span className="note-prompt">~/notes/</span>
          <input
            className="note-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="filename"
            aria-label="Note title"
            autoFocus
          />
        </div>
        <textarea
          ref={bodyRef}
          className="note-body-input"
          value={body}
          onChange={(e) => { setBody(e.target.value); autoSize(); }}
          onKeyDown={(e) => {
            if (e.key === "Escape") cancel();
            // ctrl/cmd+enter saves; plain enter must stay a newline
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) commit();
          }}
          placeholder="type here..."
          rows={3}
          aria-label="Note body"
        />
        <div className="note-actions">
          <button className="note-btn save" onClick={commit}>save</button>
          <button className="note-btn" onClick={cancel}>cancel</button>
          <button className="note-btn danger" onClick={() => onDelete(note.id)}>delete</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="note-card"
      onClick={() => setEditing(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") setEditing(true); }}
      aria-label={`Edit note ${note.title}`}
    >
      <div className="note-head">
        <span className="note-prompt">~/notes/</span>
        <span className="note-title">{note.title}</span>
        <span className="note-when">{relativeWhen(note.updated)}</span>
      </div>
      {note.body.trim()
        ? <pre className="note-body">{note.body}</pre>
        : <pre className="note-body empty">empty<span className="note-caret" /></pre>}
    </div>
  );
}

function VaultNotesSection({ notes, setNotes }) {
  const [draft, setDraft] = useState("");
  const [flash, triggerFlash] = useFlash();

  const add = () => {
    const text = draft.trim();
    if (!text) { triggerFlash(); sound.error(); return; }
    // First line becomes the title, the rest the body -- so a note can be
    // captured in one keystroke without filling in two fields.
    const [first, ...rest] = text.split("\n");
    setNotes((prev) => [
      { id: makeId(), title: first.slice(0, 40), body: rest.join("\n"), updated: Date.now() },
      ...prev,
    ]);
    setDraft("");
    sound.click();
  };

  const save = (id, patch) =>
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...patch } : n)));
  const del = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    sound.delete();
  };

  return (
    <>
      <div className="section-header"><span>NOTES</span></div>

      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="new note..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          aria-label="New note"
        />
        <button onClick={add} aria-label="Add note">+</button>
      </div>

      {notes.length === 0 ? (
        <div className="note-empty">
          <span className="note-prompt">~/notes/</span> is empty
          <span className="note-caret" />
        </div>
      ) : (
        <div className="note-list">
          {notes.map((n) => (
            <NoteCard key={n.id} note={n} onSave={save} onDelete={del} />
          ))}
        </div>
      )}
    </>
  );
}

// The home-screen widget (KWGT) reads GET /next?id=<deviceId>. That id is
// generated on first launch and otherwise never surfaced, so without this the
// widget is impossible to configure. Shown on demand rather than by default:
// it is not secret, but it is not decoration either.
function WidgetFeedRow() {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const url = `${NOTIFY_WORKER_URL}/next?id=${getDeviceId()}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      sound.click();
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => { setCopied(false); timer.current = null; }, 2000);
    } catch {
      // clipboard is blocked in some contexts -- the URL is on screen anyway
      setShown(true);
    }
  };

  return (
    <>
      <div className="section-header"><span>WIDGET-FEED</span></div>
      <div className="note-card widget-feed">
        <div className="note-head">
          <span className="note-prompt">~/next</span>
          <span className="note-when">home screen widget</span>
        </div>
        {shown ? (
          <pre className="note-body widget-url">{url}</pre>
        ) : (
          <pre className="note-body">tap reveal to see this device&apos;s feed URL</pre>
        )}
        <div className="note-actions">
          <button className="note-btn" onClick={() => { setShown((v) => !v); sound.click(); }}>
            {shown ? "hide" : "reveal"}
          </button>
          <button className="note-btn save" onClick={copy}>
            {copied ? "copied" : "copy url"}
          </button>
        </div>
      </div>
    </>
  );
}

function VaultView({ vaultHabits, setVaultHabits, projects, setProjects, notes, setNotes }) {
  return (
    <div className="task-list vault-scroll">
      <VaultHabitsSection habits={vaultHabits} setHabits={setVaultHabits} />
      <VaultProjectsSection projects={projects} setProjects={setProjects} />
      <VaultNotesSection notes={notes} setNotes={setNotes} />
      <WidgetFeedRow />
    </div>
  );
}

// ============================================================
// QUEST TAB — gamified XP system: good/bad habits, life areas,
// reward center. New accent used only here: violet #8B9CF7
// (self-development area), kept consistent with the rest of the palette.
// ============================================================

const AREAS = [
  { key: "work", label: "Work", color: "#5EEAD4" },
  { key: "fitness", label: "Fitness", color: "#F5A623" },
  { key: "health", label: "Health", color: "#F0576B" },
  { key: "self", label: "Self-Dev", color: "#8B9CF7" },
];

// Optional finer grain under each area. A habit keeps its `area` (which still
// drives all XP maths and the life-area cards) and may additionally carry a
// `sub` key from this list. The radar plots subs rather than the 4 areas, so
// it reads as a detailed shape instead of a sparse quadrilateral.
//
// `sub` is optional by design: existing saved habits have no such field, and
// anything untagged falls back to the area's first sub (see subForHabit), so
// nobody has to re-tag anything for the chart to work.
const SUB_AREAS = [
  { key: "deep",     area: "work",    label: "Deep Work" },
  { key: "admin",    area: "work",    label: "Admin" },
  { key: "learning", area: "work",    label: "Learning" },
  { key: "training", area: "fitness", label: "Training" },
  { key: "movement", area: "fitness", label: "Movement" },
  { key: "nutrition", area: "health", label: "Nutrition" },
  { key: "sleep",    area: "health",  label: "Sleep" },
  { key: "mind",     area: "health",  label: "Mind" },
  { key: "creative", area: "self",    label: "Creative" },
  { key: "social",   area: "self",    label: "Social" },
];

const SUBS_BY_AREA = AREAS.reduce((acc, a) => {
  acc[a.key] = SUB_AREAS.filter((s) => s.area === a.key);
  return acc;
}, {});

function subMeta(key) {
  return SUB_AREAS.find((s) => s.key === key) || null;
}

// Resolves which sub a habit counts toward. Untagged habits (everything that
// existed before this feature) land on their area's first sub, so the radar
// is populated from day one rather than starting empty.
function subForHabit(h) {
  if (h.sub && subMeta(h.sub) && subMeta(h.sub).area === h.area) return h.sub;
  const list = SUBS_BY_AREA[h.area];
  return list && list.length ? list[0].key : null;
}

function computeSubXP(subKey, goodHabits, badHabits) {
  const earned = goodHabits
    .filter((h) => subForHabit(h) === subKey)
    .reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lost = badHabits
    .filter((h) => subForHabit(h) === subKey)
    .reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  return earned - lost;
}

// ---- user-editable sub-tags (v26) ----------------------------------------
// SUB_AREAS ships as the default set; users can rename, add and remove tags,
// and the radar follows. Stored separately from habits so renaming a tag
// never has to rewrite every habit that uses it -- habits reference the tag
// KEY, and only the label changes.

const STORAGE_KEY_SUBS = "tasksh.subareas.v1";
const STORAGE_KEY_RADAR_MODE = "tasksh.radarmode.v1";

function loadSubAreas() {
  const stored = loadStored(STORAGE_KEY_SUBS, null);
  if (!Array.isArray(stored) || !stored.length) return SUB_AREAS;
  // tolerate partial/corrupt entries rather than blanking the user's set
  return stored.filter((s) => s && s.key && s.area && AREAS.some((a) => a.key === s.area));
}

function subsForArea(list, areaKey) {
  return list.filter((s) => s.area === areaKey);
}

/** Resolves a habit's sub against a *dynamic* tag list. */
function subForHabitIn(list, h) {
  if (h.sub && list.some((s) => s.key === h.sub && s.area === h.area)) return h.sub;
  const first = list.find((s) => s.area === h.area);
  return first ? first.key : null;
}

function computeSubXPIn(list, subKey, goodHabits, badHabits) {
  const earned = goodHabits
    .filter((h) => subForHabitIn(list, h) === subKey)
    .reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lost = badHabits
    .filter((h) => subForHabitIn(list, h) === subKey)
    .reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  return earned - lost;
}

function useSubAreas() {
  const [subs, setSubs] = useState(loadSubAreas);
  // "areas" = the 4 broad ones, "subs" = the finer tags
  const [radarMode, setRadarMode] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY_RADAR_MODE) || "subs"; } catch { return "subs"; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_SUBS, JSON.stringify(subs)); } catch {}
  }, [subs]);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_RADAR_MODE, radarMode); } catch {}
  }, [radarMode]);

  const renameSub = useCallback((key, label) => {
    const l = String(label || "").trim().slice(0, 18);
    if (!l) return;
    setSubs((prev) => prev.map((s) => (s.key === key ? { ...s, label: l } : s)));
  }, []);

  const addSub = useCallback((areaKey, label) => {
    const l = String(label || "").trim().slice(0, 18);
    if (!l) return;
    setSubs((prev) => {
      // key derived from the label, uniquified -- habits reference the key,
      // so it must be stable even if two tags share a display name
      let base = l.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 12) || "tag";
      let key = base, n = 2;
      while (prev.some((s) => s.key === key)) key = `${base}${n++}`;
      return [...prev, { key, area: areaKey, label: l }];
    });
  }, []);

  const removeSub = useCallback((key) => {
    // never leave an area with zero tags -- habits there would have nothing
    // to resolve to
    setSubs((prev) => {
      const target = prev.find((s) => s.key === key);
      if (!target) return prev;
      if (subsForArea(prev, target.area).length <= 1) return prev;
      return prev.filter((s) => s.key !== key);
    });
  }, []);

  const resetSubs = useCallback(() => setSubs(SUB_AREAS), []);

  return { subs, radarMode, setRadarMode, renameSub, addSub, removeSub, resetSubs };
}

// curated ANSI/terminal-inspired categorical palette, used to give each
// routine/habit a stable, distinct color (hashed from its id) instead of
// everything sharing one accent color
const CATEGORY_PALETTE = [
  "#5EEAD4", // cyan
  "#F5A623", // amber
  "#F0576B", // coral/red
  "#8B9CF7", // violet
  "#7EE787", // green
  "#F778BA", // pink
  "#79C0FF", // blue
  "#E3B341", // gold
];

function colorForId(id) {
  const n = typeof id === "number" ? id : String(id).split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  return CATEGORY_PALETTE[Math.abs(n) % CATEGORY_PALETTE.length];
}

const LEVEL_TITLES = [
  "Novice", "Apprentice", "Adept", "Ranger", "Knight", "Vanguard", "Wizard",
  "Sage", "Champion", "Sentinel", "Archon", "Warlord", "Mystic", "Overlord",
  "Ascendant", "Legend", "Mythic", "Immortal", "Transcendent", "Eternal",
];

// LEVEL XP -- lifetime progress. Deliberately does NOT subtract reward
// spending: claiming a reward you earned should never demote you or push you
// negative. Before v27 it did both (155 earned - 40 lost - 150 spent = -35 XP
// and a drop from level 2 to level 1), which punished the user for using the
// feature. Bad habits still count against you; that's the point of them.
function computeTotalXP(goodHabits, badHabits) {
  const earned = goodHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lost = badHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  return Math.max(0, earned - lost);
}

// SPENDABLE BALANCE -- what rewards actually cost against. This is the number
// that goes down when you claim something.
function computeSpendableXP(goodHabits, badHabits, rewards) {
  const earned = goodHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lost = badHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const spent = rewards.reduce((s, r) => s + r.cost * (r.claimed?.length || 0), 0);
  // floor at 0: pre-v27 data could go negative because claims weren't checked
  // against a separate balance. Never show the user a negative wallet.
  return Math.max(0, earned - lost - spent);
}

function computeAreaXP(area, goodHabits, badHabits) {
  const earned = goodHabits.filter((h) => h.area === area).reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lost = badHabits.filter((h) => h.area === area).reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  return earned - lost;
}

// Cumulative XP required to REACH level L (L >= 1).
//
// Still quadratic -- each level costs more than the last -- but flattened in
// v22. The old curve (50*L*(L-1)) put level 20 at 19,000 XP, roughly 238
// perfect days away, which meant nearly all the level-gated content added in
// v22 was effectively unreachable. This curve reaches level 20 in ~103 days
// of steady use while keeping the same shape.
//
// Two invariants deliberately preserved:
//   * level 2 still unlocks at exactly 100 XP
//   * no level costs MORE than it did before, so no existing save can be
//     retroactively demoted -- some players will simply level up on upgrade
function cumulativeXPForLevel(level) {
  return 12.5 * (level - 1) * (level + 6);
}

function levelFromXP(xp) {
  const clamped = Math.max(0, xp);
  // inverse of cumulativeXPForLevel, solved for L
  const level = Math.max(1, Math.floor((-5 + Math.sqrt(49 + 0.32 * clamped)) / 2));
  const into = clamped - cumulativeXPForLevel(level);
  const span = cumulativeXPForLevel(level + 1) - cumulativeXPForLevel(level);
  return { level, into, span };
}

// small roman-numeral converter, used past the last named title
// (e.g. "Eternal II", "Eternal III"...) so leveling never visually caps
function toRoman(num) {
  const table = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  let n = num, out = "";
  for (const [v, s] of table) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
}

function titleForLevel(lvl) {
  if (lvl <= LEVEL_TITLES.length) return LEVEL_TITLES[lvl - 1];
  const tier = lvl - LEVEL_TITLES.length + 1;
  return `${LEVEL_TITLES[LEVEL_TITLES.length - 1]} ${toRoman(tier)}`;
}


const seedGoodHabits = [
  { id: 1, label: "Deep Work", area: "work", xp: 40, history: [getISTDateString(0), getISTDateString(-1)] },
  { id: 2, label: "Workout", area: "fitness", xp: 20, history: [getISTDateString(-1)] },
  { id: 3, label: "Healthy Diet", area: "health", xp: 10, history: [] },
  { id: 4, label: "Reading", area: "self", xp: 10, history: [] },
];

const seedBadHabits = [
  { id: 1, label: "High Screen Time", area: "self", xp: 20, history: [] },
  { id: 2, label: "Junk Food", area: "health", xp: 20, history: [] },
];

const seedRewards = [
  { id: 1, label: "Watch a movie", cost: 100, claimed: [] },
  { id: 2, label: "Order takeout", cost: 150, claimed: [] },
  { id: 3, label: "Take a day off", cost: 250, claimed: [] },
];

function LifeAreaCard({ area, xp }) {
  return (
    <div className="area-card">
      <span className="area-dot" style={{ background: area.color }} />
      <span className="area-label">{area.label}</span>
      <span className="area-xp">{xp} XP</span>
    </div>
  );
}

function GoodHabitCard({ habit, subs = SUB_AREAS, onToggleToday, onDelete, onSave }) {
  const doneToday = (habit.history || []).includes(getISTDateString(0));
  // one-shot completion feedback: a pulse ring plus a floating +XP. Keyed
  // by a counter so repeated toggles retrigger the animation.
  const [fx, setFx] = useState(0);
  const fireFx = () => { if (!doneToday) setFx((n) => n + 1); };
  const { streak, freezeUsed } = streakFreezeInfo(habit.history);
  const area = AREAS.find((a) => a.key === habit.area) || AREAS[0];

  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(habit.label);
  const [eArea, setEArea] = useState(habit.area);
  const [eSub, setESub] = useState(() => subForHabitIn(subs, habit));
  const [eXP, setEXP] = useState(habit.xp);

  const openEdit = () => {
    setELabel(habit.label);
    setEArea(habit.area);
    setESub(subForHabitIn(subs, habit));
    setEXP(habit.xp);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(habit.id, { label: text, area: eArea, sub: eSub, xp: Math.max(1, +eXP || habit.xp) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="quest-habit-card good editing">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eLabel}
            onChange={(e) => setELabel(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            {AREAS.map((a) => (
              <button
                key={a.key}
                type="button"
                className={`area-chip ${eArea === a.key ? "active" : ""}`}
                style={{ "--ac": a.color }}
                onClick={() => {
                  setEArea(a.key);
                  const list = subsForArea(subs, a.key);
                  setESub(list.length ? list[0].key : null);
                }}
              >
                {a.label}
              </button>
            ))}
          </div>
          <div className="edit-row edit-row-subs">
            {subsForArea(subs, eArea).map((sb) => (
              <button
                key={sb.key}
                type="button"
                className={`sub-chip ${eSub === sb.key ? "active" : ""}`}
                onClick={() => setESub(sb.key)}
              >
                {sb.label}
              </button>
            ))}
          </div>
          <div className="edit-row">
            <input type="number" min="1" step="5" className="duration-input" value={eXP} onChange={(e) => setEXP(e.target.value)} />
            <span className="edit-unit">XP</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`quest-habit-card good ${fx ? "just-completed" : ""}`} key={`g${habit.id}`}>
      {fx > 0 && <span className="xp-pop" key={fx}>+{habit.xp}</span>}
      <span className="area-dot" style={{ background: area.color }} />
      <div className="quest-habit-main">
        <span className="quest-habit-label">{habit.label}</span>
        <span className="quest-habit-meta">
          +{habit.xp} XP · {area.label}{streak > 0 ? ` · 🔥${streak}${freezeUsed ? " ❄️" : ""}` : ""}
        </span>
      </div>
      <button
        className="link-btn"
        onClick={(e) => { e.stopPropagation(); linkUIBridge.open(refOf("good", habit.id)); sound.click(); }}
        aria-label="Links"
        title="Link to other items"
      >
        <svg viewBox="0 0 24 24" width="12" height="12">
          <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <button
        className={`quest-check ${doneToday ? "done" : ""}`}
        onClick={() => { fireFx(); onToggleToday(habit.id); }}
        aria-label="Mark done today"
      >
        <svg viewBox="0 0 24 24" width="14" height="14">
          <polyline
            points="4,13 9,18 20,6"
            fill="none"
            stroke="#0B0D10"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 24, strokeDashoffset: doneToday ? 0 : 24, transition: "stroke-dashoffset 220ms ease" }}
          />
        </svg>
      </button>
      <button className="vault-card-edit" onClick={openEdit} aria-label="Edit habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="del-btn" onClick={() => onDelete(habit.id)} aria-label="Delete habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function BadHabitCard({ habit, subs = SUB_AREAS, onToggleToday, onDelete, onSave }) {
  const loggedToday = (habit.history || []).includes(getISTDateString(0));
  const area = AREAS.find((a) => a.key === habit.area) || AREAS[0];
  const wk = weeklyCount(habit.history);

  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(habit.label);
  const [eArea, setEArea] = useState(habit.area);
  const [eSub, setESub] = useState(() => subForHabitIn(subs, habit));
  const [eXP, setEXP] = useState(habit.xp);

  const openEdit = () => {
    setELabel(habit.label);
    setEArea(habit.area);
    setESub(subForHabitIn(subs, habit));
    setEXP(habit.xp);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(habit.id, { label: text, area: eArea, sub: eSub, xp: Math.max(1, +eXP || habit.xp) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="quest-habit-card bad editing">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eLabel}
            onChange={(e) => setELabel(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            {AREAS.map((a) => (
              <button
                key={a.key}
                type="button"
                className={`area-chip ${eArea === a.key ? "active" : ""}`}
                style={{ "--ac": a.color }}
                onClick={() => {
                  setEArea(a.key);
                  const list = subsForArea(subs, a.key);
                  setESub(list.length ? list[0].key : null);
                }}
              >
                {a.label}
              </button>
            ))}
          </div>
          <div className="edit-row edit-row-subs">
            {subsForArea(subs, eArea).map((sb) => (
              <button
                key={sb.key}
                type="button"
                className={`sub-chip ${eSub === sb.key ? "active" : ""}`}
                onClick={() => setESub(sb.key)}
              >
                {sb.label}
              </button>
            ))}
          </div>
          <div className="edit-row">
            <input type="number" min="1" step="5" className="duration-input" value={eXP} onChange={(e) => setEXP(e.target.value)} />
            <span className="edit-unit">XP</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quest-habit-card bad">
      <span className="area-dot" style={{ background: area.color }} />
      <div className="quest-habit-main">
        <span className="quest-habit-label">{habit.label}</span>
        <span className="quest-habit-meta">-{habit.xp} XP · {area.label} · {wk}x this week</span>
      </div>
      <button
        className={`quest-check bad-check ${loggedToday ? "done" : ""}`}
        onClick={() => onToggleToday(habit.id)}
        aria-label="Log slip today"
      >
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path d="M6 6l12 12M18 6L6 18" stroke="#0B0D10" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
      <button className="vault-card-edit" onClick={openEdit} aria-label="Edit habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="del-btn" onClick={() => onDelete(habit.id)} aria-label="Delete habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function RewardCard({ reward, canClaim, onClaim, onDelete, onSave }) {
  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(reward.label);
  const [eCost, setECost] = useState(reward.cost);

  const openEdit = () => {
    setELabel(reward.label);
    setECost(reward.cost);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(reward.id, { label: text, cost: Math.max(1, +eCost || reward.cost) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="reward-card">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eLabel}
            onChange={(e) => setELabel(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            <input type="number" min="1" step="10" className="duration-input" value={eCost} onChange={(e) => setECost(e.target.value)} />
            <span className="edit-unit">XP cost</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reward-card">
      <div className="reward-top">
        <span className="reward-label">{reward.label}</span>
        <div className="project-card-actions">
          <button className="vault-card-edit" onClick={openEdit} aria-label="Edit reward">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="vault-card-del" onClick={() => onDelete(reward.id)} aria-label="Delete reward">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <span className="reward-cost">{reward.cost} XP</span>
      <button className="reward-claim" disabled={!canClaim} onClick={() => onClaim(reward.id)}>
        {canClaim ? "claim reward" : "not enough XP"}
      </button>
      {reward.claimed?.length > 0 && <span className="reward-claimed-count">claimed {reward.claimed.length}x</span>}
    </div>
  );
}

function QuestView({ goodHabits, setGoodHabits, badHabits, setBadHabits, rewards, setRewards, tagCtl }) {
  const [areaFilter, setAreaFilter] = useState("all");
  const [showTagEditor, setShowTagEditor] = useState(false);
  const subs = tagCtl.subs;
  const totalXP = useMemo(() => computeTotalXP(goodHabits, badHabits), [goodHabits, badHabits]);
  // separate pot: what rewards are actually paid from
  const spendableXP = useMemo(() => computeSpendableXP(goodHabits, badHabits, rewards), [goodHabits, badHabits, rewards]);
  const { level, into, span } = levelFromXP(totalXP);
  const levelPct = Math.round((into / span) * 100);

  const toggleGood = (id) => {
    const today = getISTDateString(0);
    // derive from current state, not from inside the updater -- the updater
    // is not guaranteed to have run by the time we read the flag
    const willBeDone = !(goodHabits.find((h) => h.id === id)?.history || []).includes(today);
    setGoodHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const has = (h.history || []).includes(today);
        const history = has ? h.history.filter((d) => d !== today) : [...(h.history || []), today];
        return { ...h, history: history.slice(-370) };
      })
    );
    linkBridge.propagate("good", id, willBeDone);
    if (willBeDone) {
      sound.success();
      petBus.emit("habitDone");
      // hidden-achievement triggers: note the hour the user actually finished
      const h = getISTParts().hour;
      if (h < 6) saveMeta({ earlyFinish: true });
      if (h >= 0 && h < 4) saveMeta({ lateFinish: true });
    } else { sound.click(); }
  };
  const toggleBad = (id) => {
    const today = getISTDateString(0);
    const willBeDone = !(badHabits.find((h) => h.id === id)?.history || []).includes(today);
    setBadHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const has = (h.history || []).includes(today);
        const history = has ? h.history.filter((d) => d !== today) : [...(h.history || []), today];
        return { ...h, history: history.slice(-370) };
      })
    );
    if (willBeDone) { sound.error(); petBus.emit("badHabit"); } else { sound.click(); }
  };
  const delGood = (id) => { setGoodHabits((prev) => prev.filter((h) => h.id !== id)); sound.delete(); };
  const delBad = (id) => { setBadHabits((prev) => prev.filter((h) => h.id !== id)); sound.delete(); };
  const saveGood = (id, patch) => setGoodHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  const saveBad = (id, patch) => setBadHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  const claimReward = (id) => {
    const today = getISTDateString(0);
    setRewards((prev) => prev.map((r) => (r.id === id ? { ...r, claimed: [...(r.claimed || []), today] } : r)));
    sound.success();
    petBus.emit("rewardClaimed");
  };
  const delReward = (id) => { setRewards((prev) => prev.filter((r) => r.id !== id)); sound.delete(); };
  const saveReward = (id, patch) => setRewards((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const [ghLabel, setGhLabel] = useState("");
  const [ghArea, setGhArea] = useState("work");
  const [ghXP, setGhXP] = useState(20);
  const [bhLabel, setBhLabel] = useState("");
  const [bhArea, setBhArea] = useState("work");
  const [bhXP, setBhXP] = useState(20);
  const [rwLabel, setRwLabel] = useState("");
  const [rwCost, setRwCost] = useState(100);

  const addGood = () => {
    const t = ghLabel.trim();
    if (!t) return;
    setGoodHabits((prev) => [...prev, { id: makeId(), label: t, area: ghArea, xp: +ghXP || 10, history: [] }]);
    setGhLabel("");
    sound.click();
  };
  const addBad = () => {
    const t = bhLabel.trim();
    if (!t) return;
    setBadHabits((prev) => [...prev, { id: makeId(), label: t, area: bhArea, xp: +bhXP || 10, history: [] }]);
    setBhLabel("");
    sound.click();
  };
  const addReward = () => {
    const t = rwLabel.trim();
    if (!t) return;
    setRewards((prev) => [...prev, { id: makeId(), label: t, cost: +rwCost || 50, claimed: [] }]);
    setRwLabel("");
    sound.click();
  };

  // Radar plots the finer sub-categories (10 vertices) rather than the 4
  // broad areas, so the shape reads as detailed instead of a sparse diamond.
  // Each vertex keeps its parent area's colour so the four groups stay
  // visually legible around the ring.
  // Radar plots either the 4 broad areas or the finer user-editable tags.
  // Both read from the same habit data -- switching is a view change only.
  // Values are NOT clamped at zero. A net-negative area is real information --
  // clamping made "-280, your worst area by far" render identically to "never
  // started", which is the opposite of what a diagnostic chart is for.
  const areaAxes = useMemo(() => (
    tagCtl.radarMode === "areas"
      ? AREAS.map((a) => ({
          key: a.key, label: a.label, color: a.color,
          value: computeAreaXP(a.key, goodHabits, badHabits),
        }))
      : subs.map((sb) => ({
          key: sb.key, label: sb.label,
          color: (AREAS.find((a) => a.key === sb.area) || {}).color,
          value: computeSubXPIn(subs, sb.key, goodHabits, badHabits),
        }))
  ), [tagCtl.radarMode, subs, goodHabits, badHabits]);

  // One ceiling for BOTH modes, so switching view doesn't silently rescale the
  // shape, and so growth pushes the polygon outward instead of flattening its
  // neighbours. Recomputed from data, so it still tracks real progress.
  const radarMax = useMemo(() => {
    const areaPeak = Math.max(...AREAS.map((a) => computeAreaXP(a.key, goodHabits, badHabits)), 0);
    const subPeak = Math.max(...subs.map((sb) => computeSubXPIn(subs, sb.key, goodHabits, badHabits)), 0);
    // round up to a clean step so the rim isn't pinned to an arbitrary value
    const peak = Math.max(areaPeak, subPeak, 1);
    const step = peak <= 100 ? 25 : peak <= 500 ? 50 : 100;
    return Math.ceil(peak / step) * step;
  }, [subs, goodHabits, badHabits]);

  // Habits with no `sub` tag are counted by the 4-area view but vanish in the
  // tag view, so the same data appears to total differently depending on which
  // toggle is active. Surface it rather than letting the number quietly differ.
  const untaggedXP = useMemo(() => {
    if (tagCtl.radarMode === "areas") return 0;
    const known = new Set(subs.map((s) => s.key));
    const orphan = (h) => !h.sub || !known.has(h.sub);
    const e = goodHabits.filter(orphan).reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
    const l = badHabits.filter(orphan).reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
    return e + l;
  }, [tagCtl.radarMode, subs, goodHabits, badHabits]);

  const visibleGood = areaFilter === "all" ? goodHabits : goodHabits.filter((h) => h.area === areaFilter);
  const visibleBad  = areaFilter === "all" ? badHabits  : badHabits.filter((h) => h.area === areaFilter);
  const earnedXP = goodHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lostXP = badHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const spentXP = rewards.reduce((s, r) => s + r.cost * (r.claimed?.length || 0), 0);

  return (
    <div className="task-list vault-scroll">
      <div className="hero-card hero-card-viz">
        <div className="hero-viz-row">
          <RadialProgress
            pct={levelPct}
            size={112}
            stroke={9}
            color="#5EEAD4"
            label={`LVL ${level}`}
            sublabel={titleForLevel(level)}
          />
          <div className="hero-viz-stats">
            <span className="hero-xp-total"><AnimatedNumber value={totalXP} /> <small>XP</small></span>
            {spentXP > 0 && <span className="hero-xp-spend">◉ {spendableXP} to spend</span>}
            <span className="hero-xp-sub">{into}/{span} to next level</span>
            <div className="hero-xp-split">
              <span className="hero-xp-earned">+<AnimatedNumber value={earnedXP} /></span>
              <span className="hero-xp-lost">−<AnimatedNumber value={lostXP} /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header"><span>LIFE-AREAS</span></div>
      <div className="radar-card">
        <div className="radar-controls">
          <div className="radar-mode">
            <button className={tagCtl.radarMode === "areas" ? "active" : ""}
                    onClick={() => { tagCtl.setRadarMode("areas"); sound.click(); }}>4 areas</button>
            <button className={tagCtl.radarMode === "subs" ? "active" : ""}
                    onClick={() => { tagCtl.setRadarMode("subs"); sound.click(); }}>{subs.length} tags</button>
          </div>
          <button className="radar-edit" onClick={() => setShowTagEditor(true)}>edit tags</button>
        </div>
        <RadarChart axes={areaAxes} size={252} maxValue={radarMax} />
        {untaggedXP > 0 && (
          <div className="radar-note">
            {untaggedXP} XP from untagged habits isn&apos;t plotted — tag them to include it
          </div>
        )}
      </div>

      {(earnedXP > 0 || lostXP > 0 || spentXP > 0) && (
        <>
          <div className="section-header"><span>XP SOURCE</span></div>
          <div className="donut-card">
            <DonutChart
              size={120}
              stroke={16}
              centerLabel={spendableXP}
              centerSublabel="net XP"
              segments={[
                { key: "earned", label: "Earned", value: earnedXP, color: "#5EEAD4" },
                { key: "lost", label: "Lost", value: lostXP, color: "#F0576B" },
                { key: "spent", label: "Spent", value: spentXP, color: "#F5A623" },
              ]}
            />
            <div className="donut-legend">
              <div className="donut-legend-row">
                <span className="donut-legend-dot" style={{ background: "#5EEAD4" }} />
                <span>Earned from good habits</span>
                <span className="donut-legend-val"><AnimatedNumber value={earnedXP} /></span>
              </div>
              <div className="donut-legend-row">
                <span className="donut-legend-dot" style={{ background: "#F0576B" }} />
                <span>Lost to bad habits</span>
                <span className="donut-legend-val"><AnimatedNumber value={lostXP} /></span>
              </div>
              <div className="donut-legend-row">
                <span className="donut-legend-dot" style={{ background: "#F5A623" }} />
                <span>Spent on rewards</span>
                <span className="donut-legend-val"><AnimatedNumber value={spentXP} /></span>
              </div>
              <div className="donut-legend-row donut-legend-total">
                <span className="donut-legend-dot" style={{ background: "transparent" }} />
                <span>Level progress (spending doesn&apos;t count)</span>
                <span className="donut-legend-val"><AnimatedNumber value={totalXP} /></span>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="area-filter">
        <button className={areaFilter === "all" ? "active" : ""}
                onClick={() => setAreaFilter("all")}>all</button>
        {AREAS.map((a) => (
          <button key={a.key}
                  className={areaFilter === a.key ? "active" : ""}
                  style={{ "--ac": a.color }}
                  onClick={() => { setAreaFilter(a.key); sound.click(); }}>
            {a.label}
          </button>
        ))}
      </div>

      {showTagEditor && <TagEditor tagCtl={tagCtl} onClose={() => setShowTagEditor(false)} />}

      <div className="section-header"><span>GOOD-HABITS</span></div>
      <div className="quest-habit-list">
        {goodHabits.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no good habits yet</div>
          </div>
        ) : (
          visibleGood.map((h) => <GoodHabitCard key={h.id} habit={h} subs={subs} onToggleToday={toggleGood} onDelete={delGood} onSave={saveGood} />)
        )}
      </div>
      <div className="composer">
        <input
          type="text"
          placeholder="new good habit..."
          value={ghLabel}
          onChange={(e) => setGhLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addGood()}
        />
        <button className="add-btn" onClick={addGood} aria-label="Add good habit">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {AREAS.map((a) => (
          <button key={a.key} className={ghArea === a.key ? "active" : ""} onClick={() => setGhArea(a.key)}>
            {a.label}
          </button>
        ))}
        <input type="number" min="5" step="5" className="duration-custom" value={ghXP} onChange={(e) => setGhXP(+e.target.value || 5)} />
      </div>

      <div className="section-header"><span>BAD-HABITS</span></div>
      <div className="quest-habit-list">
        {badHabits.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no bad habits tracked</div>
          </div>
        ) : (
          visibleBad.map((h) => <BadHabitCard key={h.id} habit={h} subs={subs} onToggleToday={toggleBad} onDelete={delBad} onSave={saveBad} />)
        )}
      </div>
      <div className="composer">
        <input
          type="text"
          placeholder="new bad habit..."
          value={bhLabel}
          onChange={(e) => setBhLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addBad()}
        />
        <button className="add-btn" onClick={addBad} aria-label="Add bad habit">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {AREAS.map((a) => (
          <button key={a.key} className={bhArea === a.key ? "active" : ""} onClick={() => setBhArea(a.key)}>
            {a.label}
          </button>
        ))}
        <input type="number" min="5" step="5" className="duration-custom" value={bhXP} onChange={(e) => setBhXP(+e.target.value || 5)} />
      </div>

      <div className="section-header"><span>REWARD-CENTER</span></div>
      <div className="vault-grid">
        {rewards.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no rewards set up</div>
          </div>
        ) : (
          rewards.map((r) => (
            <RewardCard key={r.id} reward={r} canClaim={spendableXP >= r.cost} onClaim={claimReward} onDelete={delReward} onSave={saveReward} />
          ))
        )}
      </div>
      <div className="composer">
        <input
          type="text"
          placeholder="new reward..."
          value={rwLabel}
          onChange={(e) => setRwLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addReward()}
        />
        <input type="number" min="10" step="10" className="duration-custom" value={rwCost} onChange={(e) => setRwCost(+e.target.value || 50)} />
        <button className="add-btn" onClick={addReward} aria-label="Add reward">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const seedTasks = [
  { id: 1, text: "ship rice theme v2 captions", done: false, priority: "high", createdAt: Date.now() - 8000000 },
  { id: 2, text: "review conky widget layout", done: false, priority: "mid", createdAt: Date.now() - 5000000 },
  { id: 3, text: "reply to anilist thread", done: true, priority: "low", createdAt: Date.now() - 3000000 },
];

function useNow(intervalMs = 1000 * 30) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return now;
}

function timeAgo(ts, now) {
  const s = Math.floor((now - ts) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

function Checkbox({ checked, onChange, color }) {
  return (
    <button
      onClick={onChange}
      aria-checked={checked}
      role="checkbox"
      className="checkbox-btn"
      style={{
        "--c": color,
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14">
        <polyline
          points="4,13 9,18 20,6"
          fill="none"
          stroke="#0B0D10"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: checked ? 0 : 24,
            transition: "stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)",
          }}
        />
      </svg>
    </button>
  );
}

function TaskRow({ task, now, onToggle, onDelete, index }) {
  const [leaving, setLeaving] = useState(false);
  const exitTimer = useRef(null);
  const prio = PRIORITIES.find((p) => p.key === task.priority) || PRIORITIES[0];

  // Deletion is deferred so the row can animate out. If the list re-renders
  // this row away first (import, undo, filter change), the pending timer would
  // otherwise fire onDelete for an id that no longer exists.
  useEffect(() => () => { if (exitTimer.current) clearTimeout(exitTimer.current); }, []);

  const handleDelete = () => {
    if (exitTimer.current) return;   // ignore double-taps mid-animation
    setLeaving(true);
    exitTimer.current = setTimeout(() => onDelete(task.id), 220);
  };

  return (
    <div
      className={`task-row ${leaving ? "leaving" : ""}`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <Checkbox checked={task.done} onChange={() => onToggle(task.id)} color={prio.color} />
      <div className="task-main">
        <span className={`task-text ${task.done ? "done" : ""}`}>{task.text}</span>
        <span className="task-meta">
          <span className="prio-dot" style={{ background: prio.color }} />
          <span className="prio-label">{prio.label}</span>
          <span className="dot-sep">·</span>
          <span>{timeAgo(task.createdAt, now)}</span>
        </span>
      </div>
      <button className="del-btn" onClick={handleDelete} aria-label="Delete task">
        <svg viewBox="0 0 24 24" width="15" height="15">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

const STORAGE_KEY_TASKS = "tasksh.tasks.v1";
const STORAGE_KEY_ROUTINES = "tasksh.routines.v1";
const STORAGE_KEY_VAULT_HABITS = "tasksh.vaulthabits.v1";
const STORAGE_KEY_PROJECTS = "tasksh.projects.v1";
const STORAGE_KEY_GOOD_HABITS = "tasksh.goodhabits.v1";
const STORAGE_KEY_BAD_HABITS = "tasksh.badhabits.v1";
const STORAGE_KEY_REWARDS = "tasksh.rewards.v1";
const STORAGE_KEY_DEVICE_ID = "tasksh.deviceid.v1";
const STORAGE_KEY_NOTIFY_ENABLED = "tasksh.notifyenabled.v1";
// Gemini API key, entered by the user in the AI tab. Stays on this device --
// it is never included in export/import backups (those get shared around and
// a key is a credential, not data), and never synced to the worker's KV.
const STORAGE_KEY_AI_KEY = "tasksh.aikey.v1";

/** Rename, add and remove the finer tags. Grouped under their parent area. */
function TagEditor({ tagCtl, onClose }) {
  const [adding, setAdding] = useState(null);   // area key being added to
  const [draft, setDraft] = useState("");

  const commitAdd = (areaKey) => {
    if (draft.trim()) { tagCtl.addSub(areaKey, draft); sound.success(); }
    setDraft(""); setAdding(null);
  };

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <span className="sheet-title">edit tags</span>
          <button className="sheet-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {AREAS.map((a) => {
          const mine = subsForArea(tagCtl.subs, a.key);
          return (
            <div key={a.key} className="tag-group">
              <div className="tag-group-head">
                <span className="tag-dot" style={{ background: a.color }} />
                <span className="tag-group-name">{a.label}</span>
              </div>
              {mine.map((sb) => (
                <div key={sb.key} className="tag-row">
                  <input
                    className="tag-input"
                    defaultValue={sb.label}
                    maxLength={18}
                    onBlur={(e) => tagCtl.renameSub(sb.key, e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") e.target.blur(); }}
                  />
                  <button
                    className="tag-del"
                    disabled={mine.length <= 1}
                    title={mine.length <= 1 ? "each area needs at least one tag" : "remove"}
                    onClick={() => { tagCtl.removeSub(sb.key); sound.delete(); }}
                  >×</button>
                </div>
              ))}
              {adding === a.key ? (
                <div className="tag-row">
                  <input
                    className="tag-input" autoFocus placeholder="new tag…" maxLength={18}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onBlur={() => commitAdd(a.key)}
                    onKeyDown={(e) => { if (e.key === "Enter") commitAdd(a.key); if (e.key === "Escape") { setDraft(""); setAdding(null); } }}
                  />
                </div>
              ) : (
                <button className="tag-add" onClick={() => { setDraft(""); setAdding(a.key); }}>+ add tag</button>
              )}
            </div>
          );
        })}

        <div className="sheet-foot">
          habits keep their tag when you rename it
          <button className="tag-reset" onClick={() => { tagCtl.resetSubs(); sound.click(); }}>reset to defaults</button>
        </div>
      </div>
    </div>
  );
}

/**
 * Link manager. Shows what an item is connected to and lets you connect it
 * to anything else — routines, quest habits or vault cards, in any mix.
 */
function LinkManager({ selfRef, data, links, setLinks, onClose }) {
  const [picking, setPicking] = useState(false);
  const self = describeRef(selfRef, data);
  const connected = linkedTo(links, selfRef);

  const candidates = useMemo(() => {
    const all = [
      ...data.routines.map((r) => ({ ref: refOf("routine", r.id), label: r.label, kind: "routine" })),
      ...data.goodHabits.map((h) => ({ ref: refOf("good", h.id), label: h.label, kind: "good" })),
      ...data.vaultHabits.map((h) => ({ ref: refOf("vault", h.id), label: h.label, kind: "vault" })),
    ];
    return all.filter((c) => c.ref !== selfRef && !connected.includes(c.ref));
  }, [data, selfRef, connected]);

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <span className="sheet-title">links · {self?.label || "item"}</span>
          <button className="sheet-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="link-intro">
          ticking any of these completes all of them, both ways.
        </div>

        {connected.length === 0 ? (
          <div className="link-empty">not linked to anything yet</div>
        ) : (
          <div className="link-list">
            {connected.map((ref) => {
              const d = describeRef(ref, data);
              return (
                <div key={ref} className={`link-row ${d ? "" : "stale"}`}>
                  <span className="link-kind">{d ? d.meta : "missing"}</span>
                  <span className="link-label">{d ? d.label : "deleted item"}</span>
                  <button className="link-remove"
                          onClick={() => { setLinks((l) => removeLink(l, selfRef, ref)); sound.delete(); }}>
                    unlink
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {picking ? (
          <div className="link-picker">
            {candidates.length === 0 ? (
              <div className="link-empty">nothing else to link to</div>
            ) : candidates.map((c) => (
              <button key={c.ref} className="link-candidate"
                      onClick={() => { setLinks((l) => addLink(l, selfRef, c.ref)); setPicking(false); sound.success(); }}>
                <span className="link-kind">{LINK_KINDS[c.kind].label}</span>
                <span className="link-label">{c.label}</span>
                <span className="link-plus">+</span>
              </button>
            ))}
          </div>
        ) : (
          <button className="link-add-btn" onClick={() => setPicking(true)}>+ link to something</button>
        )}
      </div>
    </div>
  );
}

/** Slide-in toast when an achievement unlocks. Self-dismissing, queued. */
function AchievementToast({ id, onDone }) {
  const a = achievementById(id);
  useEffect(() => {
    const t = setTimeout(onDone, 4200);
    return () => clearTimeout(t);
  }, [id, onDone]);
  if (!a) return null;
  return (
    <div className="ach-toast" onClick={onDone}>
      <span className="ach-toast-icon">{a.icon}</span>
      <span className="ach-toast-body">
        <span className="ach-toast-kicker">achievement</span>
        <span className="ach-toast-name">{a.name}</span>
        <span className="ach-toast-desc">{a.desc}</span>
      </span>
      <span className="ach-toast-coins">+{a.coins}</span>
    </div>
  );
}

/**
 * Level-up reward screen. Replaces the old silent level change with a
 * moment: what you gained, what it unlocked, what's next.
 */
function LevelRewardScreen({ level, coins, unlockedTheme, extraThemes = 0, evolvedTo, onDone }) {
  const next = THEMES.find((t) => t.unlockLevel > level);
  const nextForm = nextFormAfter(level);
  return (
    <div className="lvl-backdrop" onClick={onDone}>
      <div className="screen-pulse" />
      <div className="burst" />
      <div className="lvl-card" onClick={(e) => e.stopPropagation()}>
        <div className="lvl-kicker">level up</div>
        <div className="lvl-num">{level}</div>
        <div className="lvl-title">{titleForLevel(level)}</div>

        <div className="lvl-rewards">
          <div className="lvl-reward">
            <span className="lvl-reward-icon">◉</span>
            <span className="lvl-reward-text">+{coins} coins</span>
          </div>
          {unlockedTheme && (
            <div className="lvl-reward">
              <span className="lvl-reward-icon" style={{ color: unlockedTheme.colors.accent }}>◐</span>
              <span className="lvl-reward-text">
                theme unlocked · <b>{unlockedTheme.name}</b>
                {extraThemes > 0 ? ` +${extraThemes} more` : ""}
              </span>
            </div>
          )}
          {evolvedTo != null && (
            <div className="lvl-reward">
              <span className="lvl-reward-icon">✧</span>
              <span className="lvl-reward-text">your pet is evolving…</span>
            </div>
          )}
        </div>

        <div className="lvl-next">
          {next ? `next theme at level ${next.unlockLevel}` : "all themes unlocked"}
          {nextForm ? ` · next form at ${nextForm.minLevel}` : ""}
        </div>

        <button className="evo-btn" onClick={onDone}>continue</button>
      </div>
    </div>
  );
}

/** Achievement gallery, shown inside the themes sheet. */
function AchievementGrid({ earned, coins }) {
  const have = new Set(earned);
  const visible = ACHIEVEMENTS.filter((a) => !a.hidden || have.has(a.id));
  const hiddenLeft = ACHIEVEMENTS.filter((a) => a.hidden && !have.has(a.id)).length;
  return (
    <>
      <div className="ach-head">
        <span className="sheet-title">achievements</span>
        <span className="ach-count">{have.size}/{ACHIEVEMENTS.length} · ◉ {coins}</span>
      </div>
      <div className="ach-grid">
        {visible.map((a) => {
          const got = have.has(a.id);
          return (
            <div key={a.id} className={`ach-card ${got ? "got" : ""}`}>
              <span className="ach-icon">{got ? a.icon : "·"}</span>
              <span className="ach-name">{a.name}</span>
              <span className="ach-desc">{a.desc}</span>
              <span className="ach-coins">◉ {a.coins}</span>
            </div>
          );
        })}
      </div>
      {hiddenLeft > 0 && (
        <div className="ach-hidden-note">
          {hiddenLeft} hidden achievement{hiddenLeft === 1 ? "" : "s"} left to discover
        </div>
      )}
    </>
  );
}

/**
 * Theme gallery. Locked themes show their requirement and live progress
 * rather than being hidden -- knowing what's coming is most of the pull.
 */
function ThemePicker({ ctl, level, totalXP, earned = [], coins = 0, onClose }) {
  const nextLevelAt = cumulativeXPForLevel(level + 1);
  const thisLevelAt = cumulativeXPForLevel(level);

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <span className="sheet-title">themes</span>
          <button className="sheet-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="theme-grid">
          {ctl.themes.map((t) => {
            const unlocked = isThemeUnlocked(t, level);
            const active = ctl.themeId === t.id;
            // progress from the level *before* the requirement, so the bar
            // reflects the current climb rather than all-time XP
            const needAt = cumulativeXPForLevel(t.unlockLevel);
            const prevAt = cumulativeXPForLevel(Math.max(1, t.unlockLevel - 1));
            const pct = unlocked ? 100
              : Math.max(0, Math.min(99, Math.round(((totalXP - prevAt) / (needAt - prevAt)) * 100)));
            return (
              <button
                key={t.id}
                className={`theme-card ${active ? "active" : ""} ${unlocked ? "" : "locked"}`}
                onClick={() => { if (unlocked) { ctl.setThemeId(t.id); sound.success(); } else { sound.error(); } }}
                disabled={!unlocked}
              >
                <span
                  className="theme-swatch"
                  style={{
                    background: `linear-gradient(135deg, ${t.colors.bg} 0%, ${t.colors.panel} 45%, ${t.colors.accent} 100%)`,
                  }}
                >
                  {!unlocked && (
                    <svg viewBox="0 0 24 24" width="15" height="15" className="theme-lock">
                      <rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {active && <span className="theme-active-dot" />}
                </span>
                <span className="theme-name">{t.name}</span>
                {unlocked ? (
                  <span className="theme-blurb">{t.blurb}</span>
                ) : (
                  <>
                    <span className="theme-req">level {t.unlockLevel}</span>
                    <span className="theme-bar"><span className="theme-bar-fill" style={{ width: `${pct}%` }} /></span>
                    <span className="theme-pct">{pct}%</span>
                  </>
                )}
              </button>
            );
          })}
        </div>

        <div className="sheet-sub">
          level {level} · {Math.max(0, nextLevelAt - totalXP)} XP to level {level + 1}
        </div>

        <div className="ach-section">
          <AchievementGrid earned={earned} coins={coins} />
        </div>

        <div className="calm-toggle-row">
          <div>
            <div className="calm-toggle-label">ambient background</div>
            <div className="calm-toggle-hint">
              {ctl.ambience ? "drifting gradients and particles" : "flat black, like the old build"}
            </div>
          </div>
          <button
            className={`calm-switch ${ctl.ambience ? "on" : ""}`}
            onClick={() => { ctl.setAmbience(!ctl.ambience); sound.click(); }}
            aria-pressed={ctl.ambience}
          >
            <span className="calm-knob" />
          </button>
        </div>

        <div className="sheet-foot">
          ambience follows the time of day · currently <b>{ctl.phase.label}</b>
        </div>
      </div>
    </div>
  );
}

function PetStatBar({ label, value, color }) {
  return (
    <div className="pet-stat">
      <div className="pet-stat-top">
        <span className="pet-stat-label">{label}</span>
        <span className="pet-stat-val">{Math.round(value)}</span>
      </div>
      <div className="pet-stat-track">
        <div className="pet-stat-fill" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}

/** Full-screen celebration when the pet reaches a new form. */
function EvolutionOverlay({ from, to, petName, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5200);
    return () => clearTimeout(t);
  }, [onDone]);
  const nf = PET_FORMS[to];
  return (
    <div className="evo-backdrop" onClick={onDone}>
      <div className="screen-pulse" />
      <div className="burst" />
      <div className="evo-card" onClick={(e) => e.stopPropagation()}>
        <div className="evo-kicker">evolution</div>
        <div className="evo-stage-row">
          <div className="evo-old"><PetCreature stage={from} mood="content" size={72} animate={false} /></div>
          <span className="evo-arrow">→</span>
          <div className="evo-new"><PetCreature stage={to} mood="joyful" size={132} evolving /></div>
        </div>
        <div className="evo-name">{petName} became <b>{nf.name}</b></div>
        <div className="evo-title">{nf.title}</div>
        <button className="evo-btn" onClick={onDone}>continue</button>
      </div>
    </div>
  );
}


// ---- push notifications config ----
// 1. Deploy the Cloudflare Worker (see /worker/ in the handoff) and paste its
//    URL here, e.g. "https://tasksh-notify.yourname.workers.dev"
// 2. This public key must exactly match the VAPID_PUBLIC_KEY the worker was
//    generated with (they're a matched keypair — the private half lives only
//    in the worker's secrets, never in this client bundle).
const NOTIFY_WORKER_URL = "https://tasksh-notify.techcraftor.workers.dev";
const VAPID_PUBLIC_KEY = "BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const output = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) output[i] = raw.charCodeAt(i);
  return output;
}

function getDeviceId() {
  let id = localStorage.getItem(STORAGE_KEY_DEVICE_ID);
  if (!id) {
    id = "dev_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
    localStorage.setItem(STORAGE_KEY_DEVICE_ID, id);
  }
  return id;
}

async function subscribeToPush() {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
    throw new Error("Push notifications aren't supported in this browser.");
  }
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    throw new Error("Notification permission was not granted.");
  }
  const reg = await navigator.serviceWorker.ready;
  let sub = await reg.pushManager.getSubscription();
  if (!sub) {
    sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    });
  }
  const deviceId = getDeviceId();
  const res = await fetch(`${NOTIFY_WORKER_URL}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deviceId, subscription: sub.toJSON() }),
  });
  if (!res.ok) throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");
  return true;
}

async function unsubscribeFromPush() {
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) await sub.unsubscribe();
  } catch {}
  const deviceId = getDeviceId();
  try {
    await fetch(`${NOTIFY_WORKER_URL}/unsubscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deviceId }),
    });
  } catch {}
}

async function syncRoutinesToWorker(routines) {
  const deviceId = getDeviceId();
  try {
    await fetch(`${NOTIFY_WORKER_URL}/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        deviceId,
        // duration is included for the widget: it needs to know whether a
        // routine is running *now* and how far through it you are, which the
        // start time alone cannot tell it
        routines: routines.map((r) => ({ id: r.id, time: r.time, label: r.label, duration: r.duration })),
      }),
    });
  } catch {}
}

// ---- AI assistant -------------------------------------------------------
// The worker never stores any of this; it forwards a trimmed snapshot to the
// model and returns a validated ACTION LIST. Nothing is applied until the
// user taps Apply on the diff preview -- see CompanionView / applyAIActions.

// ---- API key pool (v27) --------------------------------------------------
// Several keys can be stored; the worker tries them in order and skips ones
// that are rate-limited, so hitting a daily cap on one key doesn't take the
// assistant offline.
//
// IMPORTANT CAVEAT, surfaced in the UI: Gemini enforces quota per Google
// *project*, not per key. Two keys made in the same account share one pool
// and add nothing. Extra capacity requires keys from different accounts.
// Provider detection, mirrored from the worker so the UI can label keys and
// explain quotas without a round trip. Keep the prefixes in sync.
// `free` drives the sign-up list on the key gate; OpenAI is supported but is
// not free, so it's detected without being advertised.
const KEY_PROVIDERS = [
  // AIza… is the old "Standard" key; AQ.Ab… is the "Auth" key AI Studio has
  // issued since ~June 2026. AIza is scheduled to stop working in September
  // 2026, so both must be accepted -- see the worker's PROVIDERS table.
  { id: "gemini",     label: "Gemini",     test: (k) => /^(AIza|AQ\.)/.test(k),
    where: "aistudio.google.com/apikey", free: "~1000 req/day", shared: true },
  { id: "groq",       label: "Groq",       test: (k) => /^gsk_/.test(k),
    where: "console.groq.com", free: "~1000 req/day, fastest" },
  { id: "cerebras",   label: "Cerebras",   test: (k) => /^csk-/.test(k),
    where: "cloud.cerebras.ai", free: "1M tokens/day" },
  { id: "nvidia",     label: "NVIDIA NIM", test: (k) => /^nvapi-/.test(k),
    where: "build.nvidia.com", free: "40 req/min, 1000 credits" },
  { id: "mistral",    label: "Mistral",
    // Mistral keys have no prefix to sniff, so they're only recognised via
    // the explicit "mistral:KEY" form.
    test: () => false, prefixed: true,
    where: "console.mistral.ai", free: "paste as mistral:YOUR_KEY" },
  { id: "openrouter", label: "OpenRouter", test: (k) => /^sk-or-/.test(k),
    where: "openrouter.ai/keys", free: "50 req/day" },
  { id: "openai",     label: "OpenAI",     test: (k) => /^sk-/.test(k),
    where: "platform.openai.com" },
];

// Mirrors the worker: accepts either a sniffable key or an explicit
// "<provider>:<key>" tag for providers whose keys carry no prefix.
function providerOf(key) {
  const raw = String(key || "").trim();
  const m = raw.match(/^([a-z][a-z0-9]*):(.+)$/i);
  if (m) {
    const tagged = KEY_PROVIDERS.find((p) => p.id === m[1].toLowerCase());
    if (tagged) return tagged;
  }
  return KEY_PROVIDERS.find((p) => p.test(raw)) || null;
}

const STORAGE_KEY_AI_KEYS = "tasksh.aikeys.v1";

/** All stored keys, newest last. Migrates the old single-key value. */
function getAIKeys() {
  try {
    const many = JSON.parse(localStorage.getItem(STORAGE_KEY_AI_KEYS) || "null");
    if (Array.isArray(many) && many.length) return many.filter(Boolean);
    const one = localStorage.getItem(STORAGE_KEY_AI_KEY);
    return one ? [one] : [];
  } catch { return []; }
}

function setAIKeys(keys) {
  const clean = [...new Set(keys.map((k) => String(k).trim()).filter(Boolean))].slice(0, 10);
  try {
    localStorage.setItem(STORAGE_KEY_AI_KEYS, JSON.stringify(clean));
    // keep the legacy key in sync so an older cached bundle still works
    if (clean.length) localStorage.setItem(STORAGE_KEY_AI_KEY, clean[0]);
    else localStorage.removeItem(STORAGE_KEY_AI_KEY);
  } catch {}
}

function addAIKey(key) {
  const k = String(key || "").trim();
  if (!k) return getAIKeys();
  const next = [...getAIKeys(), k];
  setAIKeys(next);
  return getAIKeys();
}

function removeAIKey(key) {
  const next = getAIKeys().filter((k) => k !== key);
  setAIKeys(next);
  return next;
}

function getAIKey() {
  return getAIKeys()[0] || "";
}
function setAIKey(key) {
  // legacy entry point: replaces the whole pool, or clears it
  setAIKeys(key ? [key] : []);
}
// "AIza...abcd" -> "AIza••••••••abcd", so the settings screen can confirm
// which key is saved without putting the whole secret back on screen
function maskAIKey(key) {
  if (!key) return "";
  // a "mistral:xxx" tag isn't secret; mask only the part after it so the row
  // doesn't read as four bullet points of the word "mistral"
  const m = String(key).match(/^([a-z][a-z0-9]*:)(.+)$/i);
  if (m && KEY_PROVIDERS.some((p) => p.id === m[1].slice(0, -1).toLowerCase())) {
    return m[1] + maskAIKey(m[2]);
  }
  if (key.length <= 10) return "•".repeat(key.length);
  return `${key.slice(0, 4)}${"•".repeat(8)}${key.slice(-4)}`;
}

// Thrown when the worker says the key is missing/rejected, so the UI can
// bounce back to the key screen instead of showing a generic error.
class AIKeyError extends Error {
  constructor(message) { super(message); this.name = "AIKeyError"; }
}

async function verifyAIKey(apiKey) {
  const res = await fetch(`${NOTIFY_WORKER_URL}/ai-verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey }),
  });
  let payload = null;
  try { payload = await res.json(); } catch {}
  if (!payload || !payload.ok) {
    throw new Error((payload && payload.message) || `Couldn't verify that key (${res.status}).`);
  }
  return payload.warning || null;
}

/**
 * One call: the companion replies in character and may also propose actions.
 * Replaces the split requestPetReply / requestAIActions pair.
 */
async function requestCompanion(message, data, context, log, apiKey) {
  const res = await fetch(`${NOTIFY_WORKER_URL}/companion`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, data, context, log, apiKey, apiKeys: getAIKeys() }),
  });
  let payload = null;
  try { payload = await res.json(); } catch {}
  if (!res.ok) {
    const code = payload && payload.error;
    if (code === "no_key" || code === "bad_key") {
      throw new AIKeyError((payload && payload.message) || "key rejected");
    }
    throw new Error((payload && payload.message) || `request failed (${res.status})`);
  }
  return { reply: (payload && payload.reply) || "\u2026", actions: (payload && payload.actions) || [] };
}

const COMPANION_SUGGESTIONS = [
  "how am I doing?",
  "add a 30 min reading routine before bed",
  "what am I neglecting?",
  "my evenings are too packed",
];



// Human-readable description of one action, used by the diff preview.
// Returns { kind: "add"|"edit"|"remove", surface, text }
function describeAIAction(a, state) {
  const find = (arr, id) => (arr || []).find((x) => x.id === id);
  switch (a.op) {
    case "add_routine":
      return { kind: "add", surface: "routine",
        text: `${minutesToLabel(timeToMinutes(a.time))} · ${a.label} (${formatDuration(a.duration)})` +
              (a.alternatives?.length ? ` · or: ${a.alternatives.join(", ")}` : "") };
    case "edit_routine": {
      const r = find(state.routines, a.id);
      const bits = [];
      if (a.time !== undefined && a.time !== r?.time)
        bits.push(`${minutesToLabel(timeToMinutes(r?.time || "00:00"))} → ${minutesToLabel(timeToMinutes(a.time))}`);
      if (a.label !== undefined && a.label !== r?.label) bits.push(`"${r?.label}" → "${a.label}"`);
      if (a.duration !== undefined && a.duration !== r?.duration)
        bits.push(`${formatDuration(r?.duration || 0)} → ${formatDuration(a.duration)}`);
      return { kind: "edit", surface: "routine", text: `${r?.label || "routine"}: ${bits.join(", ") || "no change"}` };
    }
    case "delete_routine":
      return { kind: "remove", surface: "routine", text: find(state.routines, a.id)?.label || `#${a.id}` };
    case "add_vault_habit":
      return { kind: "add", surface: "vault", text: `${a.icon} ${a.label} · ${a.weeklyGoal}x/week` };
    case "edit_vault_habit": {
      const h = find(state.vaultHabits, a.id);
      const bits = [];
      if (a.label !== undefined && a.label !== h?.label) bits.push(`"${h?.label}" → "${a.label}"`);
      if (a.weeklyGoal !== undefined && a.weeklyGoal !== h?.weeklyGoal)
        bits.push(`${h?.weeklyGoal}x → ${a.weeklyGoal}x/week`);
      return { kind: "edit", surface: "vault", text: `${h?.label || "habit"}: ${bits.join(", ") || "no change"}` };
    }
    case "delete_vault_habit":
      return { kind: "remove", surface: "vault", text: find(state.vaultHabits, a.id)?.label || `#${a.id}` };
    case "add_good_habit":
      return { kind: "add", surface: "quest", text: `+${a.xp} XP · ${a.label} (${a.area})` };
    case "add_bad_habit":
      return { kind: "add", surface: "quest", text: `−${a.xp} XP · ${a.label} (${a.area})` };
    case "delete_good_habit":
      return { kind: "remove", surface: "quest", text: find(state.goodHabits, a.id)?.label || `#${a.id}` };
    case "delete_bad_habit":
      return { kind: "remove", surface: "quest", text: find(state.badHabits, a.id)?.label || `#${a.id}` };
    case "add_reward":
      return { kind: "add", surface: "reward", text: `${a.label} · ${a.cost} XP` };
    case "delete_reward":
      return { kind: "remove", surface: "reward", text: find(state.rewards, a.id)?.label || `#${a.id}` };
    default:
      return { kind: "edit", surface: "?", text: a.op };
  }
}

// Applies a batch of approved actions. Every setter is called at most once
// with a single derived array, so React batches it into one render and one
// localStorage write per surface.
function applyAIActions(actions, state, setters) {
  let { routines, vaultHabits, goodHabits, badHabits, rewards } = {
    routines: [...state.routines],
    vaultHabits: [...state.vaultHabits],
    goodHabits: [...state.goodHabits],
    badHabits: [...state.badHabits],
    rewards: [...state.rewards],
  };
  const touched = new Set();

  for (const a of actions) {
    switch (a.op) {
      case "add_routine":
        routines = [...routines, {
          id: makeId(), time: a.time, label: a.label,
          duration: a.duration, history: [],
          ...(a.alternatives?.length ? { alternatives: a.alternatives } : {}),
        }];
        touched.add("routines"); break;
      case "edit_routine":
        routines = routines.map((r) => r.id === a.id ? {
          ...r,
          ...(a.time !== undefined ? { time: a.time } : {}),
          ...(a.label !== undefined ? { label: a.label } : {}),
          ...(a.duration !== undefined ? { duration: a.duration } : {}),
        } : r);
        touched.add("routines"); break;
      case "delete_routine":
        routines = routines.filter((r) => r.id !== a.id);
        touched.add("routines"); break;

      case "add_vault_habit":
        vaultHabits = [...vaultHabits, {
          id: makeId(), icon: a.icon, label: a.label,
          weeklyGoal: a.weeklyGoal, history: [],
        }];
        touched.add("vaultHabits"); break;
      case "edit_vault_habit":
        vaultHabits = vaultHabits.map((h) => h.id === a.id ? {
          ...h,
          ...(a.label !== undefined ? { label: a.label } : {}),
          ...(a.weeklyGoal !== undefined ? { weeklyGoal: a.weeklyGoal } : {}),
        } : h);
        touched.add("vaultHabits"); break;
      case "delete_vault_habit":
        vaultHabits = vaultHabits.filter((h) => h.id !== a.id);
        touched.add("vaultHabits"); break;

      case "add_good_habit":
        goodHabits = [...goodHabits, { id: makeId(), label: a.label, area: a.area, ...(a.sub ? { sub: a.sub } : {}), xp: a.xp, history: [] }];
        touched.add("goodHabits"); break;
      case "delete_good_habit":
        goodHabits = goodHabits.filter((h) => h.id !== a.id);
        touched.add("goodHabits"); break;

      case "add_bad_habit":
        badHabits = [...badHabits, { id: makeId(), label: a.label, area: a.area, ...(a.sub ? { sub: a.sub } : {}), xp: a.xp, history: [] }];
        touched.add("badHabits"); break;
      case "delete_bad_habit":
        badHabits = badHabits.filter((h) => h.id !== a.id);
        touched.add("badHabits"); break;

      case "add_reward":
        rewards = [...rewards, { id: makeId(), label: a.label, cost: a.cost, claimed: [] }];
        touched.add("rewards"); break;
      case "delete_reward":
        rewards = rewards.filter((r) => r.id !== a.id);
        touched.add("rewards"); break;
      default: break;
    }
  }

  if (touched.has("routines")) setters.setRoutines(routines);
  if (touched.has("vaultHabits")) setters.setVaultHabits(vaultHabits);
  if (touched.has("goodHabits")) setters.setGoodHabits(goodHabits);
  if (touched.has("badHabits")) setters.setBadHabits(badHabits);
  if (touched.has("rewards")) setters.setRewards(rewards);
}

/**
 * The companion: one surface where the pet talks AND acts.
 *
 * Merged from the old separate `pet` and `ai` tabs in v25. They were two
 * chat boxes wired to the same model, which meant the thing with a face
 * couldn't change anything and the thing that could change things had no
 * personality. Now there is one creature: it replies in character, and when
 * a message implies a change it also proposes actions, shown as the same
 * reviewable diff as before.
 *
 * Local-first is preserved: greetings and reactions still come from the
 * offline voice engine, so the pet is never mute without a key.
 */
function CompanionView({ petCtl, state, setters, ctx, showDataMsg }) {
  const { pet, form, mood, nudge, remember, rename } = petCtl;

  const [apiKey, setApiKeyState] = useState(() => getAIKey());
  const [showKeyGate, setShowKeyGate] = useState(false);
  const [keyError, setKeyError] = useState(null);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(null);   // { reply, actions }
  const [skipped, setSkipped] = useState(() => new Set());
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState(pet.name);
  const [collapsed, setCollapsed] = useState(true); // stats panel

  const logRef = useRef(null);
  const lastSentRef = useRef(0);

  const greeting = useMemo(() => petGreeting(ctx), [ctx]);

  useEffect(() => {
    if (!busy) { setElapsed(0); return; }
    const t0 = Date.now();
    const id = setInterval(() => setElapsed((Date.now() - t0) / 1000), 100);
    return () => clearInterval(id);
  }, [busy]);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [pet.log, pending, busy]);

  const send = async (text) => {
    const q = (text ?? draft).trim();
    if (!q || busy) return;

    // rate guard: the free tier is ~15/min and hammering a failing request
    // is the fastest way to burn a day
    const since = Date.now() - lastSentRef.current;
    if (since < 3000) {
      setError(`give me a second — ${Math.ceil((3000 - since) / 1000)}s`);
      return;
    }

    setDraft("");
    remember("user", q);
    nudge("chat");
    sound.click();

    if (!apiKey) {
      remember("pet", "i can hear you, but i can't say much yet. connect an ai key and i can really talk — and change things for you.");
      setShowKeyGate(true);
      return;
    }

    lastSentRef.current = Date.now();
    setBusy(true); setError(null); setPending(null); setSkipped(new Set());

    try {
      const res = await requestCompanion(
        q,
        {
          routines: state.routines,
          vaultHabits: state.vaultHabits,
          goodHabits: state.goodHabits,
          badHabits: state.badHabits,
          rewards: state.rewards,
          totalXP: state.totalXP,
        },
        petContextSummary(ctx),
        pet.log || [],
        apiKey
      );
      remember("pet", res.reply);
      if (res.actions.length) {
        setPending(res);
        sound.success();
      }
    } catch (err) {
      if (err instanceof AIKeyError) {
        setAIKey(""); setApiKeyState(""); setKeyError(err.message); setShowKeyGate(true);
        remember("pet", "my link to the wider world got rejected. mind checking the key?");
      } else {
        remember("pet", "couldn't reach far enough to answer that. try again in a moment.");
        setError(err.message || null);
      }
      sound.error();
    } finally {
      setBusy(false);
    }
  };

  const toggleSkip = (i) => setSkipped((prev) => {
    const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n;
  });

  const accepted = pending ? pending.actions.filter((_, i) => !skipped.has(i)) : [];

  const apply = () => {
    if (!accepted.length) return;
    applyAIActions(accepted, state, setters);
    sound.success();
    nudge("chat");
    showDataMsg("success", `applied ${accepted.length} change${accepted.length === 1 ? "" : "s"}`);
    remember("pet", `done — ${accepted.length} change${accepted.length === 1 ? "" : "s"} applied.`);
    setPending(null); setSkipped(new Set());
  };

  const discard = () => {
    sound.whoosh();
    remember("pet", "left it as it was.");
    setPending(null); setSkipped(new Set());
  };

  if (showKeyGate) {
    return (
      <AIKeyGate
        initialError={keyError}
        onCancel={() => setShowKeyGate(false)}
        onSaved={(k, warning, opts = {}) => {
          setApiKeyState(k); setKeyError(null);
          if (!opts.keepOpen) setShowKeyGate(false);
          showDataMsg("success", warning || "connected");
        }}
      />
    );
  }

  const counts = accepted.reduce((acc, a) => {
    const k = describeAIAction(a, state).kind;
    acc[k] = (acc[k] || 0) + 1; return acc;
  }, {});

  return (
    <div className="task-list companion-scroll">
      {/* --- the creature --- */}
      <div className="cmp-hero">
        <PetCreature stage={form.stage} mood={mood.key} size={132} />
        <div className="cmp-id">
          {editingName ? (
            <input
              className="pet-name-input" value={nameDraft} autoFocus maxLength={14}
              onChange={(e) => setNameDraft(e.target.value)}
              onBlur={() => { rename(nameDraft); setEditingName(false); }}
              onKeyDown={(e) => { if (e.key === "Enter") { rename(nameDraft); setEditingName(false); } }}
            />
          ) : (
            <button className="pet-name" onClick={() => { setNameDraft(pet.name); setEditingName(true); }}>
              {pet.name}
            </button>
          )}
          <span className="pet-form">{form.name} · {mood.label}</span>
        </div>
        <button className="cmp-stats-toggle" onClick={() => setCollapsed((c) => !c)}>
          {collapsed ? "stats" : "hide"}
        </button>
      </div>

      {!collapsed && (
        <>
          <div className="pet-stats">
            <PetStatBar label="happiness"    value={pet.happiness}    color="var(--accent)" />
            <PetStatBar label="energy"       value={pet.energy}       color="var(--accent2)" />
            <PetStatBar label="friendship"   value={pet.friendship}   color="var(--accent)" />
            <PetStatBar label="intelligence" value={pet.intelligence} color="var(--accent2)" />
          </div>
          <div className="pet-next">
            {petBond(pet.friendship)}
            {nextFormAfter(ctx.level) ? ` · next form at level ${nextFormAfter(ctx.level).minLevel}` : " · final form"}
          </div>
        </>
      )}

      {/* --- conversation --- */}
      <div className="cmp-chat" ref={logRef}>
        <div className="pet-msg pet cmp-greeting">{greeting}</div>
        {(pet.log || []).map((m, i) => (
          <div key={i} className={`pet-msg ${m.role}`}>{m.text}</div>
        ))}

        {busy && (
          <div className="pet-msg pet thinking">
            <span className="ai-dot" /><span className="ai-dot" /><span className="ai-dot" />
            {elapsed >= 1 && <span className="cmp-elapsed">{elapsed.toFixed(1)}s</span>}
          </div>
        )}

        {/* proposed changes appear inline, as if the pet handed them over */}
        {pending && pending.actions.length > 0 && (
          <div className="cmp-diff-wrap">
            <div className="ai-diff-head">
              <span className="ai-diff-title">proposed changes</span>
              <span className="ai-diff-counts">
                {counts.add ? <span className="c-add">+{counts.add}</span> : null}
                {counts.edit ? <span className="c-edit">~{counts.edit}</span> : null}
                {counts.remove ? <span className="c-remove">−{counts.remove}</span> : null}
              </span>
            </div>
            <div className="ai-diff">
              {pending.actions.map((a, i) => {
                const d = describeAIAction(a, state);
                const off = skipped.has(i);
                return (
                  <button key={i} className={`ai-diff-row ${d.kind} ${off ? "skipped" : ""}`}
                          onClick={() => toggleSkip(i)}
                          title={off ? "click to include" : "click to skip"}>
                    <span className="ai-sign">{d.kind === "add" ? "+" : d.kind === "remove" ? "−" : "~"}</span>
                    <span className="ai-surface">{d.surface}</span>
                    <span className="ai-diff-text">{d.text}</span>
                    <span className="ai-skip-mark">{off ? "skipped" : ""}</span>
                  </button>
                );
              })}
            </div>
            <div className="ai-actions">
              <button className="ai-apply" onClick={apply} disabled={!accepted.length}>
                apply {accepted.length || ""}
              </button>
              <button className="ai-discard" onClick={discard}>discard</button>
            </div>
            <div className="ai-hint">tap any row to skip it</div>
          </div>
        )}
      </div>

      {error && <div className="ai-error cmp-error">{error}</div>}

      {(pet.log || []).length === 0 && !busy && (
        <div className="ai-chips cmp-chips">
          {COMPANION_SUGGESTIONS.map((s) => (
            <button key={s} className="ai-chip" onClick={() => send(s)}>{s}</button>
          ))}
        </div>
      )}

      <div className="pet-composer">
        <input
          className="pet-input"
          placeholder={apiKey ? `talk to ${pet.name}…` : `say hello to ${pet.name}…`}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          disabled={busy}
        />
        <button className="pet-send" onClick={() => send()} disabled={busy || !draft.trim()}>
          say
        </button>
      </div>

      <button className="cmp-key-link" onClick={() => setShowKeyGate(true)}>
        {apiKey ? `key ${maskAIKey(apiKey)}` : "connect an ai key"}
      </button>
    </div>
  );
}

const AI_SUGGESTIONS = [
  "build me a study preset for exam month",
  "my evenings are too packed — spread them out",
  "add a gym routine at 6am for an hour",
  "what am I neglecting?",
];

// Shown when no key is saved yet, or when the saved one gets rejected.
function AIKeyGate({ onSaved, initialError, onCancel }) {
  const [key, setKey] = useState("");
  const [existing, setExisting] = useState(() => getAIKeys());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(initialError || null);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const save = async () => {
    const k = key.trim();
    if (!k || busy) return;
    setBusy(true); setError(null);
    try {
      const warning = await verifyAIKey(k);
      const pool = addAIKey(k);          // append rather than replace
      setExisting(pool);
      setKey("");
      sound.success();
      // Adding a SECOND key means the user is deliberately building a pool --
      // closing the screen under them would make them reopen it for every
      // key. The first key is different: they came here to get talking, so
      // get out of the way.
      onSaved(k, warning || (pool.length > 1 ? `${pool.length} keys connected` : null),
              { keepOpen: pool.length > 1 });
    } catch (err) {
      setError(err.message || "Couldn't verify that key.");
      sound.error();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="task-list ai-scroll">
      <div className="ai-gate">
        <div className="ai-gate-icon">✦</div>
        <div className="ai-gate-title">connect an AI key</div>
        <div className="ai-gate-sub">
          the assistant needs an AI key. all of these have a free tier — pick
          whichever you like, or add several so it keeps working when one runs out.
        </div>

        <div className="prov-list">
          {KEY_PROVIDERS.filter((p) => p.free).map((p) => (
            <a key={p.id} className="prov-chip" href={`https://${p.where}`} target="_blank" rel="noopener noreferrer">
              <span className="prov-chip-main">
                <span className="prov-name">{p.label}</span>
                <span className="prov-where">{p.where}</span>
              </span>
              <span className="prov-free">{p.free}</span>
            </a>
          ))}
        </div>
        <div className="ai-gate-steps-note">
          sign in, create a key, paste it below. no card needed for any of them.
          adding two from <i>different</i> providers is what actually buys you headroom.
        </div>

        <input
          ref={inputRef}
          className="ai-key-input"
          type="password"
          autoComplete="off"
          spellCheck={false}
          placeholder="AQ.… · AIza… · gsk_… · csk-… · nvapi-…"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") save(); }}
          disabled={busy}
        />
        {(() => {
          const pr = providerOf(key);
          if (!key.trim()) return null;
          return pr
            ? <div className="prov-detected">
                detected: {pr.label}{pr.note ? ` — ${pr.note}` : ""}
              </div>
            : <div className="prov-detected prov-detected-warn">
                unknown prefix — if it&apos;s a Mistral key, paste it as mistral:YOUR_KEY
              </div>;
        })()}

        {error && <div className="ai-error ai-gate-error">{error}</div>}

        <div className="ai-gate-actions">
          <button className="ai-apply" onClick={save} disabled={busy || !key.trim()}>
            {busy ? "checking…" : existing.length ? "add key" : "save key"}
          </button>
          {onCancel && (
            <button className="ai-discard" onClick={onCancel}>cancel</button>
          )}
        </div>

        {existing.length > 0 && (
          <div className="keypool">
            <div className="keypool-head">
              <span>{existing.length} key{existing.length === 1 ? "" : "s"} connected</span>
              <span className="keypool-hint">tried in order</span>
            </div>
            {existing.map((k, i) => {
              const pr = providerOf(k);
              return (
                <div className="keypool-row" key={k}>
                  <span className="keypool-num">{i + 1}</span>
                  <span className="keypool-prov">{pr ? pr.label : "?"}</span>
                  <span className="keypool-val">{maskAIKey(k)}</span>
                  <button className="keypool-del" onClick={() => { setExisting(removeAIKey(k)); sound.delete(); }}>
                    remove
                  </button>
                </div>
              );
            })}
            <div className="keypool-note">
              tried top to bottom; a rate-limited key is skipped automatically.
              {existing.filter((k) => providerOf(k)?.id === "gemini").length > 1 && (
                <> <b>heads up:</b> several Gemini keys from the same google account
                share one quota and add no capacity — mix in a different provider instead.</>
              )}
              {(() => {
                // Two keys from one provider is usually two accounts and is
                // fine; worth saying only when the whole pool is one provider,
                // because then a provider-wide outage takes the pet offline.
                const ids = new Set(existing.map((k) => providerOf(k)?.id).filter(Boolean));
                if (existing.length < 2 || ids.size !== 1 || ids.has("gemini")) return null;
                return <> <b>heads up:</b> every key is {providerOf(existing[0]).label} —
                  one outage takes the assistant down. add a second provider.</>;
              })()}
            </div>
          </div>
        )}

        <div className="ai-gate-note">
          stored only on this device. it isn&apos;t included in your backup exports,
          and the server never keeps it.
        </div>
      </div>
    </div>
  );
}


function loadStored(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

// pushes the global id seed forward so newly-created items never collide
// with ids that were just imported from a backup file
function ensureIdSeedAbove(value) {
  if (typeof value === "number" && Number.isFinite(value) && value > __idSeed) {
    __idSeed = value;
  }
}

// collects every numeric id found in an exported data payload (including
// nested project task ids), so the id seed can be moved past all of them
function collectMaxId(data) {
  let max = 0;
  const consider = (v) => {
    if (typeof v === "number" && Number.isFinite(v) && v > max) max = v;
  };
  (data.tasks || []).forEach((t) => consider(t?.id));
  (data.routines || []).forEach((r) => consider(r?.id));
  (data.vaultHabits || []).forEach((h) => consider(h?.id));
  (data.goodHabits || []).forEach((h) => consider(h?.id));
  (data.badHabits || []).forEach((h) => consider(h?.id));
  (data.rewards || []).forEach((r) => consider(r?.id));
  (data.projects || []).forEach((p) => {
    consider(p?.id);
    (p?.tasks || []).forEach((t) => consider(t?.id));
  });
  return max;
}

// combined "today" dashboard: next/current routine, top open tasks, and
// any rewards currently affordable -- so none of that requires switching
// tabs to check
function TodayView({ routines, setRoutines, tasks, setTasks, vaultHabits, goodHabits, badHabits, rewards, setRewards, totalXP, setTab }) {
  const spendableXP = useMemo(() => computeSpendableXP(goodHabits, badHabits || [], rewards), [goodHabits, badHabits, rewards]);
  const ist = useISTClock();
  const nowMinutes = ist.hour * 60 + ist.minute;
  const { sorted, currentId, nextId } = useRoutineStatus(routines, nowMinutes);
  const current = sorted.find((r) => r.id === currentId);
  const next = sorted.find((r) => r.id === nextId);
  const todayStr = getISTDateString(0);

  const toggleRoutineToday = (id) => {
    const willBeDone = !(routines.find((r) => r.id === id)?.history || []).includes(todayStr);
    setRoutines((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const has = (r.history || []).includes(todayStr);
        const history = has ? r.history.filter((d) => d !== todayStr) : [...(r.history || []), todayStr];
        return { ...r, history: history.slice(-60) };
      })
    );
    linkBridge.propagate("routine", id, willBeDone);
    if (willBeDone) { sound.success(); petBus.emit("routineDone"); } else { sound.click(); }
  };

  const openTasks = useMemo(() => {
    const order = { high: 0, mid: 1, low: 2 };
    return [...tasks].filter((t) => !t.done).sort((a, b) => order[a.priority] - order[b.priority]);
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    sound.success();
  };

  const affordable = useMemo(() => rewards.filter((r) => spendableXP >= r.cost), [rewards, spendableXP]);

  const claimReward = (id) => {
    setRewards((prev) =>
      prev.map((r) => (r.id === id ? { ...r, claimed: [...(r.claimed || []), todayStr] } : r))
    );
    sound.success();
  };

  // aggregate every completion across routines + vault habits + good habits
  // into a per-day count, for a GitHub-style activity heatmap
  const activityCounts = useMemo(() => {
    const counts = {};
    const add = (history) => {
      (history || []).forEach((d) => {
        counts[d] = (counts[d] || 0) + 1;
      });
    };
    routines.forEach((r) => add(r.history));
    vaultHabits.forEach((h) => add(h.history));
    goodHabits.forEach((h) => add(h.history));
    return counts;
  }, [routines, vaultHabits, goodHabits]);

  const spotlight = current || next;
  const spotlightIsNow = !!current;
  const nextDoneToday = spotlight ? (spotlight.history || []).includes(todayStr) : false;

  return (
    <div className="task-list today-view">
      <div className="filters today-section-header">
        <span>{spotlightIsNow ? "HAPPENING NOW" : "NEXT UP"}</span>
      </div>
      {spotlight ? (
        <div className="today-card">
          <div className="today-card-row">
            <span className="today-card-time">{minutesToLabel(timeToMinutes(spotlight.time))}</span>
            <span className="today-card-label">{spotlight.label}</span>
          </div>
          <div className="today-card-sub">
            {spotlightIsNow
              ? `in progress · ${formatDuration(spotlight.duration)}`
              : `in ${Math.max(0, timeToMinutes(spotlight.time) - nowMinutes)}m · ${formatDuration(spotlight.duration)}`}
          </div>
          <button
            className={`today-mark-btn ${nextDoneToday ? "done" : ""}`}
            onClick={() => toggleRoutineToday(spotlight.id)}
          >
            {nextDoneToday ? "✓ completed today" : "mark complete"}
          </button>
        </div>
      ) : (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">no routines set up yet</div>
        </div>
      )}

      <div className="filters today-section-header">
        <span>ACTIVITY</span>
      </div>
      <CalendarHeatmap counts={activityCounts} weeksBack={12} />

      <div className="filters today-section-header">
        <span>OPEN TASKS</span>
        {openTasks.length > 0 && (
          <button className="today-view-all" onClick={() => setTab("tasks")}>
            view all in tasks →
          </button>
        )}
      </div>
      {openTasks.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">nothing pending — nice</div>
        </div>
      ) : (
        <div className="today-list">
          {openTasks.slice(0, 5).map((t, i) => (
            <div key={t.id} className="today-task-row" style={{ animationDelay: `${i * 35}ms` }}>
              <button
                className="today-task-check"
                onClick={() => toggleTask(t.id)}
                aria-label="Complete task"
              />
              <span className="today-task-text">{t.text}</span>
              <span className={`today-prio-dot ${t.priority}`} />
            </div>
          ))}
          {openTasks.length > 5 && (
            <button className="today-more" onClick={() => setTab("tasks")}>
              +{openTasks.length - 5} more
            </button>
          )}
        </div>
      )}

      <div className="filters today-section-header">
        <span>REWARDS YOU CAN AFFORD</span>
        <span className="today-xp-total"><AnimatedNumber value={totalXP} /> XP</span>
      </div>
      {affordable.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">keep earning XP — nothing unlocked yet</div>
        </div>
      ) : (
        <div className="today-list">
          {affordable.map((r, i) => (
            <div key={r.id} className="today-task-row" style={{ animationDelay: `${i * 35}ms` }}>
              <span className="today-task-text">{r.label}</span>
              <span className="today-reward-cost">{r.cost} XP</span>
              <button className="today-claim-btn" onClick={() => claimReward(r.id)}>
                claim
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TodoApp() {
  const [tab, setTab] = useState("today");
  const [soundOn, toggleSound] = useSoundToggle();
  const changeTab = (t) => {
    if (t !== tab) sound.whoosh();
    setTab(t);
  };
  const [tasks, setTasks] = useState(() => loadStored(STORAGE_KEY_TASKS, seedTasks));
  const [routines, setRoutines] = useState(() => loadStored(STORAGE_KEY_ROUTINES, seedRoutines));
  const [vaultHabits, setVaultHabits] = useState(() => loadStored(STORAGE_KEY_VAULT_HABITS, seedVaultHabits));
  const [projects, setProjects] = useState(() => loadStored(STORAGE_KEY_PROJECTS, seedProjects));
  const [notes, setNotes] = useState(() => loadStored(STORAGE_KEY_NOTES, seedNotes));
  const [goodHabits, setGoodHabits] = useState(() => loadStored(STORAGE_KEY_GOOD_HABITS, seedGoodHabits));
  const [badHabits, setBadHabits] = useState(() => loadStored(STORAGE_KEY_BAD_HABITS, seedBadHabits));
  const [rewards, setRewards] = useState(() => loadStored(STORAGE_KEY_REWARDS, seedRewards));
  const totalXP = useMemo(
    () => computeTotalXP(goodHabits, badHabits),
    [goodHabits, badHabits, rewards]
  );
  const currentLevel = useMemo(() => levelFromXP(totalXP).level, [totalXP]);
  const themeCtl = useTheme(currentLevel);
  const petCtl = usePet(currentLevel);
  const { links, setLinks } = useLinks();
  const tagCtl = useSubAreas();
  const [linkTarget, setLinkTarget] = useState(null);   // ref string or null

  // any view can request the link sheet without prop-drilling
  useEffect(() => linkUIBridge.register((ref) => setLinkTarget(ref)), []);

  // One place that knows how to fan a completion out to linked items.
  useEffect(() => linkBridge.register((kind, id, done) => {
    propagateCompletion(
      refOf(kind, id), done, links,
      { setRoutines, setVaultHabits, setGoodHabits },
      getISTDateString(0)
    );
  }), [links]);

  // Achievements read a single derived snapshot. Memoised so the evaluation
  // effect only re-runs when something it actually depends on changes.
  const todayStr = getISTDateString(0);
  const achSnapshot = useMemo(() => {
    const meta = loadStored(STORAGE_KEY_META, {});
    return {
      level: currentLevel,
      tasksDone: tasks.filter((t) => t.done).length,
      bestStreak: Math.max(
        goodHabits.reduce((m, h) => Math.max(m, computeStreak(h.history)), 0),
        routines.reduce((m, r) => Math.max(m, computeStreak(r.history)), 0)
      ),
      doneToday: goodHabits.filter((h) => (h.history || []).includes(todayStr)).length,
      totalHabits: goodHabits.length,
      routinesDoneToday: routines.filter((r) => (r.history || []).includes(todayStr)).length,
      totalRoutines: routines.length,
      vaultCount: vaultHabits.length,
      friendship: petCtl.pet.friendship,
      petStage: petCtl.pet.stage,
      chats: petCtl.pet.chats,
      calmSessions: meta.calmSessions || 0,
      earlyFinish: !!meta.earlyFinish,
      lateFinish: !!meta.lateFinish,
      returnedAfterGap: !!meta.returnedAfterGap,
    };
  }, [currentLevel, tasks, goodHabits, routines, vaultHabits, petCtl.pet, todayStr]);

  const achCtl = useAchievements(achSnapshot);

  // Level-up detection. Stored separately from XP so a reward screen fires
  // once per level crossed, even if the app was closed when it happened.
  const [levelReward, setLevelReward] = useState(null);
  useEffect(() => {
    const meta = loadStored(STORAGE_KEY_META, null);

    // FIRST RUN: the starter data ships with enough logged history to put a
    // brand-new profile at level 2, so the old `seen || 1` fallback fired a
    // "LEVEL UP" celebration at the user before they had done anything. The
    // same applies to importing a backup. Record where they actually are and
    // stay quiet -- only levels crossed *while using the app* are a moment.
    if (!meta || meta.seenLevel === undefined) {
      saveMeta({ seenLevel: currentLevel });
      return;
    }

    const seen = meta.seenLevel;
    if (currentLevel > seen) {
      const coins = LEVEL_COIN_REWARD(currentLevel);
      achCtl.addCoins(coins);
      // If several levels were crossed at once, report every theme unlocked
      // in the span -- not just one landing exactly on the new level.
      const spanned = THEMES.filter((t) => t.unlockLevel > seen && t.unlockLevel <= currentLevel);
      setLevelReward({
        level: currentLevel,
        coins,
        unlockedTheme: spanned.length ? spanned[spanned.length - 1] : null,
        extraThemes: spanned.length > 1 ? spanned.length - 1 : 0,
        evolvedTo: formForLevel(currentLevel).stage > formForLevel(seen).stage ? formForLevel(currentLevel).stage : null,
      });
      saveMeta({ seenLevel: currentLevel });
    } else if (currentLevel < seen) {
      saveMeta({ seenLevel: currentLevel });
    }
  }, [currentLevel]);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("mid");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);
  const importInputRef = useRef(null);
  const [dataMsg, setDataMsg] = useState(null);
  const now = useNow();
  const [notifyEnabled, setNotifyEnabled] = useState(
    () => localStorage.getItem(STORAGE_KEY_NOTIFY_ENABLED) === "1"
  );
  const [notifyBusy, setNotifyBusy] = useState(false);
  const [showThemes, setShowThemes] = useState(false);

  // Sync the schedule whenever it changes, regardless of the notification
  // toggle. Push was the original reason this existed, but the home-screen
  // widget reads the same KV entry via GET /next -- gating on notifyEnabled
  // meant a user with notifications off had a widget frozen on whatever the
  // schedule looked like the last time they were on.
  //
  // Only { id, time, label, duration } goes up. No habits, no XP, no tasks.
  useEffect(() => {
    syncRoutinesToWorker(routines);
  }, [routines]);

  const toggleNotify = async () => {
    if (notifyBusy) return;
    setNotifyBusy(true);
    try {
      if (notifyEnabled) {
        await unsubscribeFromPush();
        localStorage.setItem(STORAGE_KEY_NOTIFY_ENABLED, "0");
        setNotifyEnabled(false);
        showDataMsg("success", "Notifications turned off");
      } else {
        await subscribeToPush();
        await syncRoutinesToWorker(routines);
        localStorage.setItem(STORAGE_KEY_NOTIFY_ENABLED, "1");
        setNotifyEnabled(true);
        showDataMsg("success", "Notifications on — you'll get pinged when a routine starts");
      }
    } catch (err) {
      showDataMsg("error", err.message || "Couldn't set up notifications");
    } finally {
      setNotifyBusy(false);
    }
  };

  const showDataMsg = (type, text) => {
    setDataMsg({ type, text });
  };

  useEffect(() => {
    if (!dataMsg) return;
    const t = setTimeout(() => setDataMsg(null), 3200);
    return () => clearTimeout(t);
  }, [dataMsg]);

  const exportData = () => {
    try {
      const payload = {
        app: "tasks.sh",
        version: 1,
        exportedAt: new Date().toISOString(),
        data: { tasks, routines, vaultHabits, projects, notes, goodHabits, badHabits, rewards },
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const stamp = getISTDateString(0);
      const a = document.createElement("a");
      a.href = url;
      a.download = `tasks-sh-backup-${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showDataMsg("ok", "backup exported");
    } catch {
      showDataMsg("err", "export failed");
    }
  };

  const triggerImport = () => importInputRef.current?.click();

  const handleImportFile = (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = ""; // so re-selecting the same file later still fires onChange
    if (!file) return;

    const reader = new FileReader();
    reader.onerror = () => showDataMsg("err", "couldn't read that file");
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const data = parsed && typeof parsed === "object" && parsed.data ? parsed.data : parsed;
        if (!data || typeof data !== "object") throw new Error("bad shape");

        const setters = {
          tasks: setTasks,
          routines: setRoutines,
          vaultHabits: setVaultHabits,
          projects: setProjects,
          notes: setNotes,
          goodHabits: setGoodHabits,
          badHabits: setBadHabits,
          rewards: setRewards,
        };

        let applied = 0;
        for (const key of Object.keys(setters)) {
          if (Array.isArray(data[key])) {
            setters[key](data[key]);
            applied++;
          }
        }

        if (applied === 0) {
          showDataMsg("err", "no recognizable data in that file");
          return;
        }

        ensureIdSeedAbove(collectMaxId(data));
        showDataMsg("ok", `imported ${applied} data set${applied === 1 ? "" : "s"}`);
      } catch {
        showDataMsg("err", "couldn't read that file — is it a tasks.sh backup?");
      }
    };
    reader.readAsText(file);
  };

  // in-app banner: fires when the "current" routine changes, so it's
  // visible no matter which tab you're on
  const ist = useISTClock();
  const nowMinutes = ist.hour * 60 + ist.minute;
  const { currentId: liveCurrentId, sorted: liveSorted } = useRoutineStatus(routines, nowMinutes);
  const [banner, setBanner] = useState(null);
  const prevCurrentIdRef = useRef(undefined);

  useEffect(() => {
    // skip the very first render so opening the app doesn't fire a banner
    if (prevCurrentIdRef.current === undefined) {
      prevCurrentIdRef.current = liveCurrentId;
      return;
    }
    if (liveCurrentId !== prevCurrentIdRef.current) {
      const routine = liveSorted.find((r) => r.id === liveCurrentId);
      if (routine) {
        setBanner({ id: liveCurrentId, label: routine.label, time: routine.time });
      }
      prevCurrentIdRef.current = liveCurrentId;
    }
  }, [liveCurrentId, liveSorted]);

  useEffect(() => {
    if (!banner) return;
    const t = setTimeout(() => setBanner(null), 6000);
    return () => clearTimeout(t);
  }, [banner]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks)); } catch {}
  }, [tasks]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_ROUTINES, JSON.stringify(routines)); } catch {}
  }, [routines]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_VAULT_HABITS, JSON.stringify(vaultHabits)); } catch {}
  }, [vaultHabits]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects)); } catch {}
  }, [projects]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes)); } catch {}
  }, [notes]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_GOOD_HABITS, JSON.stringify(goodHabits)); } catch {}
  }, [goodHabits]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_BAD_HABITS, JSON.stringify(badHabits)); } catch {}
  }, [badHabits]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_REWARDS, JSON.stringify(rewards)); } catch {}
  }, [rewards]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((t) => t.done).length;
    const pending = total - done;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    return { total, done, pending, pct };
  }, [tasks]);

  const prioBreakdown = useMemo(() => {
    const open = tasks.filter((t) => !t.done);
    return PRIORITIES.map((p) => ({
      key: p.key,
      label: p.label,
      color: p.color,
      value: open.filter((t) => t.priority === p.key).length,
    }));
  }, [tasks]);

  const visible = useMemo(() => {
    let list = tasks;
    if (filter === "active") list = list.filter((t) => !t.done);
    if (filter === "done") list = list.filter((t) => t.done);
    return [...list].sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      const order = { high: 0, mid: 1, low: 2 };
      return order[a.priority] - order[b.priority];
    });
  }, [tasks, filter]);

  const addTask = () => {
    const text = input.trim();
    if (!text) return;
    setTasks((prev) => [
      ...prev,
      { id: makeId(), text, done: false, priority, createdAt: Date.now() },
    ]);
    setInput("");
    inputRef.current?.focus();
    sound.click();
  };

  const toggleTask = (id) => {
    const willBeDone = !tasks.find((t) => t.id === id)?.done;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    if (willBeDone) { sound.success(); petBus.emit("taskDone"); } else { sound.click(); }
  };

  const deleteTask = (id) => { setTasks((prev) => prev.filter((t) => t.id !== id)); sound.delete(); };

  const clearDone = () => { setTasks((prev) => prev.filter((t) => !t.done)); sound.whoosh(); };

  return (
    <div className="app-root" data-particle={themeCtl.theme.ambient.particle}>
      {achCtl.current && (
        <AchievementToast id={achCtl.current} onDone={achCtl.shift} />
      )}
      {levelReward && (
        <LevelRewardScreen
          level={levelReward.level}
          coins={levelReward.coins}
          unlockedTheme={levelReward.unlockedTheme}
          extraThemes={levelReward.extraThemes}
          evolvedTo={levelReward.evolvedTo}
          onDone={() => setLevelReward(null)}
        />
      )}
      {petCtl.evolution && (
        <EvolutionOverlay
          from={petCtl.evolution.from}
          to={petCtl.evolution.to}
          petName={petCtl.pet.name}
          onDone={petCtl.clearEvolution}
        />
      )}
      {linkTarget && (
        <LinkManager
          selfRef={linkTarget}
          data={{ routines, goodHabits, vaultHabits }}
          links={links}
          setLinks={setLinks}
          onClose={() => setLinkTarget(null)}
        />
      )}
      {showThemes && (
        <ThemePicker
          ctl={themeCtl}
          level={currentLevel}
          totalXP={totalXP}
          earned={achCtl.earned}
          coins={achCtl.coins}
          onClose={() => setShowThemes(false)}
        />
      )}
      <style>{`
        /* ---- theme variables ----------------------------------------
           Defaults mirror the "terminal" theme so the app renders
           correctly before JS runs (no flash of unstyled colour).
           applyTheme() overwrites these at runtime. The transition makes
           theme switching fade rather than snap. */
        :root {
          --bg: #0B0D10;
          --panel: #14171C;
          --track: #1E2228;
          --border: #23272E;
          --text: #E7EAEE;
          --muted: #6B7280;
          --accent: #5EEAD4;
          --accent2: #F5A623;
          --danger: #F0576B;
          --glow: rgba(94,234,212,0.35);
          --blob1: radial-gradient(38% 42% at 18% 12%, rgba(94,234,212,0.065), transparent 70%);
          --blob2: radial-gradient(42% 38% at 82% 88%, rgba(245,166,35,0.055), transparent 70%);
          --blob3: radial-gradient(35% 40% at 62% 28%, rgba(121,192,255,0.045), transparent 70%);
          --grain-opacity: 0.018;
          --calm: 0;              /* 0 = normal, 1 = calm mode */
          --motion-scale: 1;      /* animations multiply durations by this */
        }

        /* Colour changes fade; the properties themselves can't transition,
           so we transition the things that consume them. */
        .app-root, .panel, .task-row, .hero-card, .timeline-wrap {
          transition: background-color 620ms ease, border-color 620ms ease,
                      color 620ms ease;
        }


        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        html, body, #root { height: 100%; }

        .app-root {
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          background: var(--bg);
          font-family: 'Inter', sans-serif;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 4vw;
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        /* Ambient background: three oversized, very low-opacity colour blooms
           drifting on long offset cycles. Sits behind everything via a
           pseudo-element with negative z-index so it can never affect the
           legibility or hit-testing of the panel on top. Opacity is kept
           under 0.07 -- at these values the shift reads as "the room's
           lighting changed", not as an animation demanding attention. */
        /* v25: the animated ambience now lives INSIDE the panel, where it
           is actually visible. This is a single static gradient for the
           margin area on wide screens -- no animation, no layer, no cost. */
        .app-root::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: var(--blob1), var(--blob2);
        }



        @keyframes ambientDrift {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(2.5%, -2%, 0) scale(1.06); }
          100% { transform: translate3d(-2%, 2.5%, 0) scale(1.02); }
        }

        @keyframes ambientDriftAlt {
          0%   { transform: translate3d(0, 0, 0) scale(1.04); opacity: 0.75; }
          50%  { transform: translate3d(-3%, 2%, 0) scale(1); opacity: 1; }
          100% { transform: translate3d(2%, -2.5%, 0) scale(1.05); opacity: 0.8; }
        }

        .panel {
          position: relative;
          width: 100%;
          max-width: 640px;
          height: 100%;
          max-height: 780px;
          background: var(--panel);
          isolation: isolate;
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
          animation: panelIn 480ms cubic-bezier(.16,1,.3,1);
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .app-root { padding: 0; }
          .panel {
            max-width: 100%;
            max-height: 100%;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
            border: none;
          }
        }

        @media (max-width: 420px) {
          .composer { flex-wrap: wrap; }
          .composer input[type="text"] { width: 100%; flex-basis: 100%; }
          .prio-select { flex: 1; justify-content: space-between; }
          .add-btn { flex: 0 0 38px; }
          .stats-row { flex-wrap: wrap; gap: 10px 16px; }
        }

        @keyframes panelIn {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-bottom: 1px solid var(--track);
        }

        .titlebar-left { display: flex; align-items: center; gap: 8px; }

        .dots { display: flex; gap: 6px; }
        .dot { width: 9px; height: 9px; border-radius: 50%; }
        .dot.red { background: var(--danger); }
        .dot.amber { background: var(--accent2); }
        .dot.green { background: var(--accent); }

        .titlebar-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
          text-transform: uppercase;
        }

        /* Which build is actually running. Deliberately quiet -- it is a
           diagnostic, not a feature, and should never compete with the tabs. */
        .version-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--muted);
          border: 1px solid var(--track);
          border-radius: 3px;
          padding: 1px 4px;
          opacity: 0.75;
        }

        .clock {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #4B5563;
        }

        .titlebar-right { display: flex; align-items: center; gap: 10px; }

        .titlebar-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: 6px;
          background: var(--panel);
          color: var(--muted);
          cursor: pointer;
          transition: color 140ms ease, border-color 140ms ease;
        }

        .titlebar-icon-btn:hover { color: var(--accent); border-color: var(--accent); }
        .titlebar-icon-btn.notify-on { color: var(--accent); border-color: var(--accent); background: rgba(94,234,212,0.08); }
        .titlebar-icon-btn:disabled { opacity: 0.5; cursor: default; }

        .data-toast {
          margin: 10px 18px 0;
          padding: 8px 12px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          text-align: center;
          border: 1px solid var(--border);
          background: var(--panel);
          color: var(--text);
          animation: rowIn 200ms ease backwards;
        }

        .data-toast.ok { border-color: var(--accent); color: var(--accent); }
        .data-toast.err { border-color: var(--danger); color: var(--danger); }

        .tabs {
          display: flex;
          flex-shrink: 0;
          min-height: 42px;
          gap: 2px;
          padding: 10px 14px 0;
          border-bottom: 1px solid var(--track);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tabs::-webkit-scrollbar { display: none; }

        .tabs button {
          border: none;
          background: transparent;
          color: #7C8591;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 9px 14px;
          white-space: nowrap;
          flex-shrink: 0;
          min-height: 30px;
          cursor: pointer;
          position: relative;
          transition: color 150ms ease;
        }

        .tabs button.active { color: var(--text); }

        .tabs button.active::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: -1px;
          height: 2px;
          background: var(--accent);
          box-shadow: 0 0 8px rgba(94,234,212,0.6);
          animation: tabIn 220ms ease;
        }

        @keyframes tabIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .hero-card {
          margin: 16px 18px;
          padding: 16px 18px;
          background: linear-gradient(160deg, #171B21, var(--panel));
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-clock-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }

        .hero-clock {
          font-family: 'JetBrains Mono', monospace;
          font-size: 30px;
          font-weight: 700;
          color: var(--text);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.01em;
        }

        .hero-sec { font-size: 16px; color: var(--accent); }
        .hero-ampm {
          font-size: 13px;
          color: var(--muted);
          margin-left: 6px;
        }

        .hero-tz {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--accent);
          letter-spacing: 0.06em;
          background: rgba(94,234,212,0.08);
          border: 1px solid rgba(94,234,212,0.25);
          border-radius: 5px;
          padding: 4px 7px;
        }

        .hero-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          margin-top: 2px;
        }

        .hero-divider {
          height: 1px;
          background: var(--track);
          margin: 12px 0;
        }

        .hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.08em;
        }

        .hero-current-name {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 17px;
          font-weight: 600;
          color: var(--text);
          margin-top: 5px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 0 rgba(94,234,212,0.6);
          animation: pulse 1.8s ease-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(94,234,212,0.55); }
          70% { box-shadow: 0 0 0 9px rgba(94,234,212,0); }
          100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
        }

        .hero-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          margin-top: 6px;
        }

        .composer.shake {
          animation: shake 380ms ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(3px); }
        }

        .time-input {
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 9px 10px;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          outline: none;
          color-scheme: dark;
          flex-shrink: 0;
          width: 110px;
          transition: border-color 160ms ease;
        }

        .time-input:focus { border-color: var(--accent); }

        .routine-list { padding-top: 2px; overflow-x: hidden; }

        .routine-row-wrap {
          position: relative;
          animation: rowIn 320ms cubic-bezier(.16,1,.3,1) backwards;
        }

        .routine-row-wrap.removing {
          animation: rowOut 220ms ease forwards;
        }

        .routine-delete-bg {
          position: absolute;
          inset: 0;
          background: var(--danger);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 18px;
        }

        .routine-row {
          position: relative;
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 2px 8px;
          background: var(--panel);
          touch-action: pan-y;
          user-select: none;
        }

        .routine-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 12px;
          flex-shrink: 0;
        }

        .routine-node {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #2A2F37;
          border: 2px solid #2A2F37;
          margin-top: 6px;
          flex-shrink: 0;
          transition: all 200ms ease;
        }

        .routine-node.quest-done {
          background: var(--accent2);
          border-color: var(--accent2);
          box-shadow: 0 0 8px rgba(245,166,35,0.6);
        }

        .routine-connector {
          width: 1.5px;
          flex: 1;
          background: var(--track);
          margin-top: 2px;
        }

        .routine-row.current .routine-node {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(94,234,212,0.7);
        }

        .routine-row.next .routine-node {
          border-color: var(--accent2);
        }

        .routine-main {
          flex: 1;
          padding-bottom: 20px;
          min-width: 0;
        }

        .routine-top {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .routine-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
        }

        .live-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--bg);
          background: var(--accent);
          padding: 1.5px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .streak-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--accent2);
        }

        .freeze-tag {
          margin-left: 2px;
          font-size: 10px;
        }

        .routine-label {
          display: block;
          font-size: 13.5px;
          color: var(--text);
          margin-top: 3px;
        }

        .routine-row.idle .routine-label,
        .routine-row.idle .routine-time { color: #4B5563; }

        .routine-alts {
          display: block;
          font-size: 11px;
          color: var(--muted);
          font-style: italic;
          margin-top: 2px;
        }

        .routine-span {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #4B5563;
          margin-top: 3px;
        }

        .quest-check {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 1.5px solid #2A2F37;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
          transition: background 200ms ease, border-color 200ms ease;
        }

        .quest-check.done {
          background: var(--accent2);
          border-color: var(--accent2);
        }

        /* inline edit form */
        .routine-edit {
          flex: 1;
          padding-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .edit-label {
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 8px 10px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          outline: none;
        }

        .edit-label:focus { border-color: var(--accent); }

        .edit-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .duration-input {
          width: 64px;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 8px 8px;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          outline: none;
        }

        .edit-unit {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .edit-actions button {
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          cursor: pointer;
        }

        .edit-cancel {
          background: transparent;
          color: var(--muted);
        }

        .edit-save {
          background: var(--accent);
          color: var(--bg);
          font-weight: 700;
        }

        /* quest stats + weekly chart */
        .quest-stats {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 0 18px 14px;
          padding: 14px 16px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
        }

        .quest-stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          position: relative;
        }

        .quest-stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 2px;
          bottom: 2px;
          width: 1px;
          background: var(--track);
        }

        .quest-stat-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .quest-stat-value.amber { color: var(--accent2); }

        .quest-stat-of {
          font-size: 12px;
          color: #4B5563;
          font-weight: 500;
        }

        .quest-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: var(--muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .quest-stat-ring {
          position: relative;
        }

        .quest-stat-pct {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          color: var(--accent);
        }

        /* ---- hero radial + xp split ---- */
        .hero-card-viz { gap: 0; }

        .hero-viz-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .hero-viz-stats {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .hero-xp-total {
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
          font-variant-numeric: tabular-nums;
        }

        .hero-xp-total small { font-size: 12px; color: var(--muted); font-weight: 500; }

        .hero-xp-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--muted);
        }

        .hero-xp-split { display: flex; gap: 12px; margin-top: 6px; }

        .hero-xp-earned, .hero-xp-lost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .hero-xp-earned { color: var(--accent); background: rgba(94,234,212,0.08); }
        .hero-xp-lost { color: var(--danger); background: rgba(240,87,107,0.08); }

        .radial-progress-wrap { position: relative; flex-shrink: 0; }

        .radial-progress-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .radial-progress-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
        }

        .radial-progress-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: var(--muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ---- radar chart ---- */
        .radar-card {
          margin: 0 18px 16px;
          padding: 10px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          /* Column, not row: this card stacks a control strip ABOVE the chart.
             As a row the controls became a narrow squeezed sidebar overlapping
             the plot, and .radar-controls' space-between had no width to work
             with. */
          display: flex;
          flex-direction: column;
          animation: rowIn 260ms ease backwards;
        }

        .radar-ring { fill: none; stroke: var(--border); stroke-width: 1; }
        .radar-spoke { stroke: var(--track); stroke-width: 1; }
        .radar-fill { fill: rgba(94,234,212,0.16); stroke: var(--accent); stroke-width: 1.5; }
        .radar-label {
          fill: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          letter-spacing: -0.01em;
        }

        /* A net-negative area is a signal, not a blank. */
        .radar-label-neg { fill: var(--danger); }
        .radar-zero {
          fill: none; stroke: var(--muted); stroke-width: 1;
          stroke-dasharray: 2 3; opacity: 0.55;
        }

        @media (min-width: 900px) {
          .radar-label { font-size: 9px; }
        }

        /* ---- donut chart ---- */
        .donut-card {
          margin: 0 18px 16px;
          padding: 14px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 18px;
          animation: rowIn 300ms ease backwards;
        }

        .donut-wrap { position: relative; flex-shrink: 0; }

        .donut-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .donut-center-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .donut-center-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .donut-legend { display: flex; flex-direction: column; gap: 8px; min-width: 0; flex: 1; }

        .donut-legend-row {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          color: #9CA3AF;
        }

        .donut-legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        .donut-legend-val {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text);
        }

        /* ---- calendar heatmap ---- */
        .heatmap-wrap {
          margin: 0 18px 16px;
          padding: 14px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          animation: rowIn 260ms ease backwards;
          overflow-x: auto;
        }

        .heatmap-grid { display: flex; gap: 3px; }

        .heatmap-col { display: flex; flex-direction: column; gap: 3px; }

        .heatmap-cell {
          width: 10px;
          height: 10px;
          border-radius: 2.5px;
          animation: heatmapIn 260ms ease backwards;
        }

        .heatmap-cell.today { box-shadow: 0 0 0 1.5px var(--accent); }

        @keyframes heatmapIn {
          from { opacity: 0; transform: scale(0.4); }
          to { opacity: 1; transform: scale(1); }
        }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: var(--muted);
        }

        .heatmap-legend-cell { width: 9px; height: 9px; border-radius: 2px; }

        /* ---- day timeline ---- */
        .timeline-wrap {
          margin: 0 18px 16px;
          padding: 14px 0 12px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          animation: rowIn 220ms ease backwards;
          overflow: hidden;
        }

        .timeline-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 14px 10px;
        }

        .timeline-head-left {
          display: flex;
          align-items: baseline;
          gap: 9px;
          min-width: 0;
        }

        .timeline-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8B94A0;
        }

        .timeline-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--accent);
          font-variant-numeric: tabular-nums;
        }

        .timeline-jump {
          flex-shrink: 0;
          background: transparent;
          border: 1px solid #2C323A;
          border-radius: 999px;
          color: var(--accent2);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          cursor: pointer;
          transition: border-color 150ms ease, background 150ms ease;
        }

        .timeline-progress {
          height: 2px;
          margin: 0 14px 12px;
          background: var(--track);
          border-radius: 2px;
          overflow: hidden;
        }

        .timeline-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #79C0FF);
          border-radius: 2px;
          transition: width 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* The scroll window. The track inside is wider than this on phones,
           which is what finally gives blocks enough room to be readable.
           overscroll-behavior-x keeps a sideways swipe from triggering
           browser back-navigation. */
        .timeline-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #2C323A transparent;
          padding: 0 14px;
        }

        .timeline-scroll::-webkit-scrollbar { height: 4px; }
        .timeline-scroll::-webkit-scrollbar-track { background: transparent; }
        .timeline-scroll::-webkit-scrollbar-thumb {
          background: #2C323A;
          border-radius: 2px;
        }

        .timeline-inner { position: relative; }

        .timeline-hours {
          position: relative;
          height: 13px;
          margin-bottom: 5px;
        }

        .timeline-hour {
          position: absolute;
          top: 0;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: #4B5563;
          white-space: nowrap;
        }

        .timeline-track {
          position: relative;
          min-height: 54px;
          background: #191D23;
          border-radius: 8px;
          overflow: hidden;
          transition: height 220ms ease;
        }

        .timeline-night {
          position: absolute;
          top: 0;
          bottom: 0;
          background: rgba(0,0,0,0.30);
        }

        .timeline-gridline {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.04);
        }

        .timeline-gridline.major { background: rgba(255,255,255,0.08); }

        .timeline-elapsed {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          background: rgba(94,234,212,0.045);
          transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .timeline-block {
          position: absolute;
          border-radius: 6px;
          transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1), top 220ms ease;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .timeline-block.active {
          outline: 1.5px solid rgba(255,255,255,0.55);
          outline-offset: -1.5px;
        }

        /* double-tap target: the block itself must not swallow the horizontal
           scroll gesture, so only vertical panning is claimed */
        .timeline-block.tappable { cursor: pointer; touch-action: pan-x; }
        .timeline-block.tappable:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 1px;
        }

        /* confirmation that a double-tap registered */
        .timeline-block.pulse { animation: blockPulse 420ms ease; }
        @keyframes blockPulse {
          0%   { transform: scale(1); filter: brightness(1); }
          35%  { transform: scale(1.06); filter: brightness(1.45); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .timeline-block.pulse { animation: none; }
        }

        .timeline-block-label {
          padding: 0 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 600;
          color: var(--bg);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .timeline-block-tick { margin-right: 4px; opacity: 0.85; }
        .timeline-block.done .timeline-block-label { color: #8B94A0; }

        .timeline-now {
          position: absolute;
          top: -4px;
          bottom: -4px;
          width: 2px;
          background: var(--accent2);
          box-shadow: 0 0 8px rgba(245,166,35,0.7);
          z-index: 2;
          pointer-events: none;
        }

        .timeline-now::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent2);
          box-shadow: 0 0 6px rgba(245,166,35,0.9);
        }

        .timeline-hint {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.06em;
          color: #4B5563;
          text-align: center;
          padding: 9px 14px 0;
        }

        @media (hover: hover) and (pointer: fine) {
          .timeline-jump:hover {
            border-color: var(--accent2);
            background: rgba(245,166,35,0.1);
          }
        }

        /* ---- shared micro-interactions ---- */
        button, .vault-check, .today-task-check, .add-btn {
          transition: transform 120ms ease, opacity 120ms ease;
        }
        button:active, .vault-check:active, .today-task-check:active, .add-btn:active {
          transform: scale(0.92);
        }

        .task-list { animation: viewFadeIn 220ms ease; }

        @keyframes viewFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tab-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          animation: tabIn 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes tabIn {
          from { opacity: 0; transform: translateY(10px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tab-content { animation: none !important; }
        }




        /* ---- microinteractions (v22) ---- */

        /* completion pulse: a one-shot ring that expands and fades. Applied
           via a class the component removes on animationend, so it can
           retrigger. transform/opacity only -- compositor, no layout. */
        @keyframes completePulse {
          0%   { box-shadow: 0 0 0 0 var(--glow); }
          100% { box-shadow: 0 0 0 16px rgba(0,0,0,0); }
        }
        .just-completed { animation: completePulse 620ms ease-out; }

        /* floating +XP */
        .xp-pop {
          position: absolute;
          right: 12px; top: 50%;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700;
          color: var(--accent);
          text-shadow: 0 0 10px var(--glow);
          pointer-events: none;
          animation: xpFloat 1000ms cubic-bezier(.16,1,.3,1) forwards;
          z-index: 5;
        }
        @keyframes xpFloat {
          0%   { transform: translateY(0) scale(0.85); opacity: 0; }
          22%  { transform: translateY(-8px) scale(1.08); opacity: 1; }
          100% { transform: translateY(-34px) scale(1); opacity: 0; }
        }

        /* light burst, used on theme unlock + level up */
        .burst {
          position: fixed; left: 50%; top: 42%;
          width: 10px; height: 10px; margin: -5px 0 0 -5px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 30px 10px var(--glow);
          pointer-events: none; z-index: 70;
          animation: burstOut 900ms cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes burstOut {
          0%   { transform: scale(0.4); opacity: 0.95; }
          100% { transform: scale(26); opacity: 0; }
        }

        /* whole-screen breath on level up */
        .screen-pulse {
          position: fixed; inset: 0; z-index: 65; pointer-events: none;
          background: radial-gradient(circle at 50% 45%, var(--glow), transparent 62%);
          animation: screenPulse 1100ms ease-out forwards;
        }
        @keyframes screenPulse {
          0%   { opacity: 0; }
          28%  { opacity: 0.75; }
          100% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .just-completed, .xp-pop, .burst, .screen-pulse { animation: none !important; }
          .xp-pop, .burst, .screen-pulse { display: none !important; }
        }



        /* Scoped ambience: the same layers, rendered INSIDE the panel.
           .panel is opaque, so the fixed layers behind it are invisible --
           on phones the panel is full-bleed and covers the screen entirely.
           These sit at z-index 0 with all real content lifted to 1. */
        .amb-scoped {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          /* promote each layer so the slow drift is a GPU transform instead
             of a full-surface repaint of the panel every frame */
          will-change: transform;
          transform: translateZ(0);
        }

        .amb-scoped.amb-blobs {
          /* Painted at a third of the panel's resolution and scaled up.
             Radial gradients have no high-frequency detail, so the upscale
             is invisible, but the rasterised surface shrinks ~9x -- this is
             what took a 1229px-wide panel from 19fps back to 60. */
          width: 34.5%;
          height: 34.5%;
          inset: 0 auto auto 0;
          transform-origin: 0 0;
          transform: scale(3) translateZ(0);
          background:
            radial-gradient(58% 42% at 14% 8%,  var(--accent),  transparent 62%),
            radial-gradient(52% 40% at 88% 92%, var(--accent2), transparent 62%),
            radial-gradient(46% 38% at 72% 26%, var(--accent),  transparent 66%),
            radial-gradient(50% 44% at 26% 74%, var(--accent2), transparent 66%),
            radial-gradient(40% 36% at 50% 50%, var(--accent),  transparent 70%);
          /* the gradients use full-strength theme colours and are dimmed
             here, so every theme keeps its own character */
          opacity: 0.14;
          animation: ambientDriftScaled calc(96s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        /* drift keyframes for the downscaled layer: the parent already has
           scale:3, so these only translate */
        @keyframes ambientDriftScaled {
          0%   { transform: scale(3) translate(0, 0); }
          25%  { transform: scale(3) translate(1.8%, -1.4%); }
          50%  { transform: scale(3) translate(2.6%, 1.2%); }
          75%  { transform: scale(3) translate(-1.2%, 2.2%); }
          100% { transform: scale(3) translate(-2%, -0.8%); }
        }

        /* Deliberately NO ::after here. A pseudo-element can't get its own
           compositor layer, so animating one forces a full repaint of the
           parent every frame -- measured at 17fps on a 1366px panel. The
           extra gradients are folded into the parent's background instead. */

        /* the time-of-day wash needs more presence inside the panel too */
        .amb-scoped.amb-time {
          /* same 1/3-resolution trick as the blobs: pure gradient, so the
             upscale is free but the rasterised area drops ~9x */
          width: 34.5%;
          height: 34.5%;
          inset: 0 auto auto 0;
          transform-origin: 0 0;
          transform: scale(3) translateZ(0);
          background: radial-gradient(130% 78% at 50% -8%, var(--time-warm), transparent 62%);
          opacity: calc(var(--time-light, 1) * 2.2);
        }

        /* Large panels: the ambience costs fill-rate proportional to area,
           and the subtlest layers are the least visible on a big screen.
           Shed them above 900px rather than dropping frames for effects
           nobody can see. Phones keep the full stack. */
        /* Large panels: collapse the stack to a single layer.
           Four overlapping translucent surfaces have to be composited
           together every frame; at 1320px that measured 25fps, while ONE
           animated gradient of the same size runs at 60. The blobs layer
           carries the theme colour, so it is the one we keep. Phones are
           small enough to afford the full stack and keep it. */
        @media (min-width: 900px) {
          .amb-scoped.amb-grain,
          .amb-scoped.amb-time,
          .amb-scoped.amb-dust { display: none; }
          .amb-scoped.amb-blobs { opacity: 0.11; }
        }

        /* Widest layout: keep the colour, drop the motion entirely. A ~2%
           drift across a 1320px panel cannot be seen; compositing it every
           frame can be felt. */
        @media (min-width: 1240px) {
          .amb-scoped.amb-blobs { animation: none; will-change: auto; }
          .amb-ray { animation: none; }
        }

        /* Everything the user actually reads sits above the ambience. */
        .panel > .titlebar,
        .panel > .tabs,
        .panel > .tab-content,
        .panel > .data-msg,
        .panel > .banner { position: relative; z-index: 1; }



        /* Ambience off: back to flat black. Hides every animated surface
           rather than just dimming, so there is genuinely nothing painting. */
        .no-ambience .amb-layer,
        .no-ambience .calm-breath { display: none !important; }
        .no-ambience .app-root::before { background: none !important; }


        .hero-xp-spend {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--accent2); margin-left: 10px;
        }
        .donut-legend-total {
          margin-top: 4px; padding-top: 6px;
          border-top: 1px solid var(--track);
          color: var(--muted);
        }

        .keypool-prov {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--accent); flex-shrink: 0; width: 76px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .prov-list { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px; }
        .prov-chip {
          display: flex; align-items: center; justify-content: space-between; gap: 10px;
          padding: 8px 11px; border-radius: 9px; text-decoration: none;
          background: var(--bg); border: 1px solid var(--border);
          transition: border-color 150ms ease;
        }
        .prov-chip-main { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .prov-name {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          font-weight: 600; color: var(--accent);
        }
        .prov-where {
          font-size: 9.5px; color: var(--muted);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .prov-free {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--accent2); text-align: right; flex-shrink: 0; max-width: 44%;
          line-height: 1.35;
        }
        .prov-detected {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--accent); margin: 6px 0 0; letter-spacing: 0.04em;
        }
        .prov-detected-warn { color: var(--accent2); letter-spacing: 0; line-height: 1.5; }
        .ai-gate-steps-note { font-size: 10.5px; color: var(--muted); margin-bottom: 14px; line-height: 1.55; }
        .ai-gate-steps-note i { color: var(--text); font-style: normal; text-decoration: underline; }

        @media (hover: hover) and (pointer: fine) {
          .prov-chip:hover { border-color: var(--accent); }
        }

        /* ---- api key pool (v27) ---- */
        .keypool { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--track); }
        .keypool-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--text); margin-bottom: 8px;
        }
        .keypool-hint { color: var(--muted); font-size: 8.5px; }
        .keypool-row {
          display: flex; align-items: center; gap: 9px;
          padding: 7px 10px; margin-bottom: 5px;
          background: var(--bg); border: 1px solid var(--border); border-radius: 8px;
        }
        .keypool-num {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--accent); width: 12px; flex-shrink: 0;
        }
        .keypool-val {
          flex: 1; font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px; color: var(--muted); letter-spacing: 0.04em;
        }
        .keypool-del {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--danger); flex-shrink: 0;
        }
        .keypool-note {
          font-size: 9.5px; color: var(--muted); line-height: 1.5; margin-top: 9px;
        }
        .keypool-note b { color: var(--accent2); }

        /* ---- links + tags (v26) ---- */
        .link-btn {
          background: transparent; border: none; cursor: pointer;
          color: var(--muted); padding: 4px; border-radius: 6px;
          flex-shrink: 0; line-height: 0;
          transition: color 150ms ease, background 150ms ease;
        }
        .routine-link { position: absolute; top: 8px; right: 8px; }

        .link-intro { font-size: 11px; color: var(--muted); line-height: 1.5; margin-bottom: 12px; }
        .link-empty {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--muted); text-align: center; padding: 14px 0;
        }
        .link-list { display: flex; flex-direction: column; gap: 6px; }
        .link-row, .link-candidate {
          display: flex; align-items: center; gap: 9px;
          padding: 9px 11px; border-radius: 9px;
          background: var(--bg); border: 1px solid var(--border);
          width: 100%; text-align: left; font-family: inherit;
        }
        .link-candidate { cursor: pointer; transition: border-color 150ms ease; }
        .link-row.stale { opacity: 0.5; }
        .link-kind {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent); flex-shrink: 0; min-width: 46px;
        }
        .link-label { font-size: 12px; color: var(--text); flex: 1; min-width: 0;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .link-remove {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--danger); letter-spacing: 0.06em; flex-shrink: 0;
        }
        .link-plus { color: var(--accent); font-size: 14px; flex-shrink: 0; }
        .link-picker { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; max-height: 300px; overflow-y: auto; }
        .link-add-btn {
          width: 100%; margin-top: 12px; padding: 11px 0;
          background: transparent; border: 1px dashed var(--border);
          border-radius: 9px; color: var(--accent); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
        }

        /* tag editor */
        .tag-group { margin-bottom: 16px; }
        .tag-group-head { display: flex; align-items: center; gap: 7px; margin-bottom: 7px; }
        .tag-dot { width: 8px; height: 8px; border-radius: 50%; }
        .tag-group-name {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text);
        }
        .tag-row { display: flex; gap: 6px; margin-bottom: 5px; }
        .tag-input {
          flex: 1; background: var(--bg); border: 1px solid var(--border);
          border-radius: 7px; color: var(--text); font-size: 12px;
          padding: 8px 10px; outline: none; font-family: 'Inter', sans-serif;
        }
        .tag-input:focus { border-color: var(--accent); }
        .tag-del {
          width: 32px; background: transparent; border: 1px solid var(--border);
          border-radius: 7px; color: var(--danger); cursor: pointer; font-size: 15px;
        }
        .tag-del:disabled { opacity: 0.3; cursor: not-allowed; }
        .tag-add {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--accent); padding: 4px 0;
        }
        .tag-reset {
          display: block; margin: 8px auto 0; background: transparent;
          border: 1px solid var(--border); border-radius: 999px;
          color: var(--muted); cursor: pointer; padding: 5px 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
        }

        /* radar controls + area filter */
        .radar-controls {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 0 4px 10px;
        }
        .radar-note {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          line-height: 1.5;
          color: var(--muted);
          text-align: center;
          padding: 8px 6px 2px;
        }

        .radar-mode { display: flex; gap: 4px; }
        .radar-mode button, .radar-edit {
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.06em; padding: 5px 11px;
          transition: all 150ms ease;
        }
        .radar-mode button.active {
          border-color: var(--accent); color: var(--accent);
          background: rgba(94,234,212,0.08);
        }
        .radar-edit { color: var(--accent2); }

        .area-filter {
          display: flex; flex-wrap: wrap; gap: 5px;
          padding: 4px 18px 10px;
        }
        .area-filter button {
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          padding: 5px 12px; transition: all 150ms ease;
        }
        .area-filter button.active {
          border-color: var(--ac, var(--accent));
          color: var(--ac, var(--accent));
          background: color-mix(in srgb, var(--ac, var(--accent)) 10%, transparent);
        }

        @media (hover: hover) and (pointer: fine) {
          .link-btn:hover { color: var(--accent); background: var(--track); }
          .link-candidate:hover { border-color: var(--accent); }
          .radar-mode button:hover, .radar-edit:hover { border-color: var(--accent); }
          .area-filter button:hover { border-color: var(--ac, var(--accent)); }
        }

        /* ---- merged companion (v25) ---- */
        .companion-scroll { padding-top: 4px; display: flex; flex-direction: column; }

        .cmp-hero {
          display: flex; align-items: center; gap: 12px;
          padding: 4px 16px 8px; position: relative;
        }
        .cmp-hero .pet-svg { flex-shrink: 0; margin: -14px 0; }
        .cmp-id { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .cmp-stats-toggle {
          flex-shrink: 0; align-self: flex-start; margin-top: 6px;
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px;
          transition: border-color 150ms ease, color 150ms ease;
        }

        .cmp-chat {
          flex: 1; min-height: 160px;
          margin: 4px 16px 0; padding: 11px;
          background: var(--bg); border: 1px solid var(--border); border-radius: 11px;
          display: flex; flex-direction: column; gap: 8px;
          overflow-y: auto;
        }
        .cmp-greeting { opacity: 0.9; font-style: italic; }
        .cmp-elapsed {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--muted); margin-left: 6px; font-variant-numeric: tabular-nums;
        }

        /* the diff sits inside the conversation, as if handed over */
        .cmp-diff-wrap {
          align-self: stretch; margin-top: 2px; padding: 11px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--accent); border-radius: 10px;
        }
        .cmp-error { margin: 10px 16px 0; }
        .cmp-chips { padding: 12px 16px 0; }

        .cmp-key-link {
          background: transparent; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.06em; color: var(--muted);
          padding: 0 16px 16px; text-align: center; width: 100%;
        }

        @media (hover: hover) and (pointer: fine) {
          .cmp-stats-toggle:hover { border-color: var(--accent); color: var(--accent); }
          .cmp-key-link:hover { color: var(--accent); }
        }

        /* ---- achievements + rewards (v24) ---- */
        .ach-toast {
          position: fixed; left: 50%; top: 16px;
          transform: translateX(-50%);
          z-index: 90; width: calc(100% - 32px); max-width: 380px;
          display: flex; align-items: center; gap: 11px;
          padding: 11px 13px; cursor: pointer;
          background: var(--panel);
          border: 1px solid var(--accent);
          border-radius: 12px;
          box-shadow: 0 8px 30px -8px var(--glow);
          animation: achIn 420ms cubic-bezier(.16,1,.3,1);
        }
        @keyframes achIn {
          from { transform: translate(-50%, -20px); opacity: 0; }
          to   { transform: translate(-50%, 0);     opacity: 1; }
        }
        .ach-toast-icon {
          font-size: 20px; color: var(--accent);
          text-shadow: 0 0 12px var(--glow); flex-shrink: 0;
        }
        .ach-toast-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .ach-toast-kicker {
          font-family: 'JetBrains Mono', monospace; font-size: 8px;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent);
        }
        .ach-toast-name { font-size: 13px; font-weight: 600; color: var(--text); }
        .ach-toast-desc { font-size: 10px; color: var(--muted); }
        .ach-toast-coins {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          font-weight: 700; color: var(--accent2); flex-shrink: 0;
        }

        /* level reward */
        .lvl-backdrop {
          position: fixed; inset: 0; z-index: 85;
          background: rgba(0,0,0,0.8);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 300ms ease;
        }
        .lvl-card {
          text-align: center; padding: 28px 22px; width: 88%; max-width: 340px;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 18px;
          animation: sheetUp 520ms cubic-bezier(.16,1,.3,1);
        }
        .lvl-kicker {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent2);
        }
        .lvl-num {
          font-family: 'JetBrains Mono', monospace; font-size: 62px; font-weight: 700;
          line-height: 1.05; color: var(--accent);
          text-shadow: 0 0 26px var(--glow); margin: 6px 0 2px;
        }
        .lvl-title { font-size: 13px; color: var(--text); margin-bottom: 18px; }
        .lvl-rewards {
          display: flex; flex-direction: column; gap: 8px;
          padding: 14px 0; border-top: 1px solid var(--track); border-bottom: 1px solid var(--track);
        }
        .lvl-reward { display: flex; align-items: center; gap: 9px; justify-content: center; }
        .lvl-reward-icon { font-size: 14px; color: var(--accent2); }
        .lvl-reward-text { font-size: 12px; color: var(--text); }
        .lvl-reward-text b { color: var(--accent); }
        .lvl-next {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--muted); margin-top: 12px;
        }

        /* gallery */
        .ach-section { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--track); }
        .ach-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; }
        .ach-count {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px; color: var(--accent2);
        }
        .ach-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 7px; }
        @media (min-width: 520px) { .ach-grid { grid-template-columns: repeat(3, 1fr); } }
        .ach-card {
          display: flex; flex-direction: column; gap: 2px;
          padding: 9px; border-radius: 10px;
          background: var(--bg); border: 1px solid var(--border);
          opacity: 0.5;
        }
        .ach-card.got { opacity: 1; border-color: var(--accent); }
        .ach-icon { font-size: 15px; color: var(--muted); }
        .ach-card.got .ach-icon { color: var(--accent); text-shadow: 0 0 10px var(--glow); }
        .ach-name {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          font-weight: 600; color: var(--text);
        }
        .ach-desc { font-size: 8.5px; color: var(--muted); line-height: 1.35; }
        .ach-coins {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          color: var(--accent2); margin-top: 2px;
        }
        .ach-hidden-note {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--muted); text-align: center; margin-top: 10px; font-style: italic;
        }

        @media (prefers-reduced-motion: reduce) {
          .ach-toast, .lvl-card { animation: none !important; }
        }

        /* ---- pet (v23) ---- */
        .tabs button.tab-pet { color: var(--accent2); position: relative; }
        .tabs button.tab-pet::after {
          content: "";
          position: absolute; top: 7px; right: 2px;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent2);
          box-shadow: 0 0 6px var(--glow);
        }
        .tabs button.tab-pet.active::after { display: none; }

        .pet-svg { display: block; overflow: visible; }
        .pet-anim .pet-head   { animation: petBob calc(3.4s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 60px; }
        .pet-anim .pet-body   { animation: petBreathe calc(4.2s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 84px; }
        .pet-anim .pet-tail   { animation: petTail calc(2.8s * var(--motion-scale)) ease-in-out infinite; transform-origin: 88px 82px; }
        .pet-anim .pet-aura   { animation: petAura calc(5.5s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 74px; }
        .pet-anim .pet-orbit  { animation: petOrbit calc(14s * var(--motion-scale)) linear infinite; transform-origin: 64px 74px; }
        .pet-anim .pet-wings  { animation: petWings calc(3s * var(--motion-scale)) ease-in-out infinite; transform-origin: 64px 72px; }
        .pet-anim .pet-eyes   { animation: petBlink 6.5s steps(1, end) infinite; transform-origin: center; }

        @keyframes petBob     { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2.5px); } }
        @keyframes petBreathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.035); } }
        @keyframes petTail    { 0%,100% { transform: rotate(-7deg); } 50% { transform: rotate(9deg); } }
        @keyframes petAura    { 0%,100% { opacity: 0.55; transform: scale(0.97); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes petOrbit   { to { transform: rotate(360deg); } }
        @keyframes petWings   { 0%,100% { transform: scaleY(1) scaleX(1); } 50% { transform: scaleY(0.86) scaleX(1.04); } }
        @keyframes petBlink   { 0%,93%,100% { transform: scaleY(1); } 95% { transform: scaleY(0.08); } }

        .pet-evolving { animation: petEvolve 1500ms cubic-bezier(.16,1,.3,1); }
        @keyframes petEvolve {
          0%   { transform: scale(0.55) rotate(-8deg); opacity: 0; filter: brightness(3); }
          45%  { transform: scale(1.16) rotate(3deg);  opacity: 1; filter: brightness(1.9); }
          100% { transform: scale(1) rotate(0);        opacity: 1; filter: brightness(1); }
        }

        .pet-scroll { padding-top: 6px; }
        .pet-stage {
          display: flex; flex-direction: column; align-items: center;
          padding: 6px 16px 4px;
        }
        .pet-id { display: flex; flex-direction: column; align-items: center; gap: 2px; margin-top: -6px; }
        .pet-name, .pet-name-input {
          font-family: 'JetBrains Mono', monospace; font-size: 17px; font-weight: 700;
          color: var(--text); background: transparent; border: none; cursor: pointer;
          text-align: center; padding: 2px 6px; border-radius: 6px;
        }
        .pet-name-input { border: 1px solid var(--accent); width: 130px; outline: none; }
        .pet-form { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--accent); }
        .pet-bond { font-size: 9.5px; color: var(--muted); }

        .pet-speech {
          margin: 12px 16px 14px; padding: 11px 13px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--accent); border-radius: 10px;
          font-size: 12.5px; line-height: 1.5; color: var(--text);
        }

        .pet-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 9px 14px;
          padding: 0 16px 12px;
        }
        .pet-stat-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px; }
        .pet-stat-label {
          font-family: 'JetBrains Mono', monospace; font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted);
        }
        .pet-stat-val { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--text); }
        .pet-stat-track { height: 4px; background: var(--track); border-radius: 3px; overflow: hidden; }
        .pet-stat-fill { height: 100%; border-radius: 3px; transition: width 700ms cubic-bezier(.16,1,.3,1); }

        .pet-next {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--muted); text-align: center; padding: 0 16px 12px;
        }

        .pet-chat {
          margin: 0 16px; padding: 10px; max-height: 240px; overflow-y: auto;
          background: var(--bg); border: 1px solid var(--border); border-radius: 10px;
          display: flex; flex-direction: column; gap: 7px;
        }
        .pet-chat-empty { font-size: 10.5px; color: var(--muted); text-align: center; padding: 12px 0; }
        .pet-msg {
          font-size: 12px; line-height: 1.45; padding: 8px 10px;
          border-radius: 9px; max-width: 86%; word-break: break-word;
        }
        .pet-msg.user { align-self: flex-end; background: var(--track); color: var(--text); }
        .pet-msg.pet  { align-self: flex-start; background: var(--panel); border: 1px solid var(--border); color: var(--text); }
        .pet-msg.thinking { display: flex; gap: 4px; align-items: center; }

        .pet-composer { display: flex; gap: 8px; padding: 12px 16px 18px; }
        .pet-input {
          flex: 1; background: var(--bg); border: 1px solid var(--border);
          border-radius: 8px; color: var(--text); font-family: 'Inter', sans-serif;
          font-size: 12.5px; padding: 10px 12px; outline: none;
          transition: border-color 140ms ease;
        }
        .pet-input:focus { border-color: var(--accent); }
        .pet-send {
          background: var(--accent); color: var(--bg); border: none; border-radius: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em; padding: 0 18px; cursor: pointer;
        }
        .pet-send:disabled { opacity: 0.35; cursor: default; }

        /* ---- evolution overlay ---- */
        .evo-backdrop {
          position: fixed; inset: 0; z-index: 80;
          background: rgba(0,0,0,0.78);
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 280ms ease;
        }
        .evo-card {
          text-align: center; padding: 26px 22px;
          max-width: 340px; width: 88%;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 18px;
          animation: sheetUp 480ms cubic-bezier(.16,1,.3,1);
        }
        .evo-kicker {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.28em; text-transform: uppercase; color: var(--accent2);
          margin-bottom: 14px;
        }
        .evo-stage-row { display: flex; align-items: center; justify-content: center; gap: 6px; }
        .evo-old { opacity: 0.42; }
        .evo-arrow { color: var(--muted); font-size: 15px; }
        .evo-name { font-size: 15px; color: var(--text); margin-top: 12px; }
        .evo-name b { color: var(--accent); }
        .evo-title { font-size: 11px; color: var(--muted); margin-top: 3px; }
        .evo-btn {
          margin-top: 20px; width: 100%;
          background: var(--accent); color: var(--bg); border: none;
          border-radius: 9px; padding: 11px 0; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          font-weight: 700; letter-spacing: 0.08em;
        }

        @media (prefers-reduced-motion: reduce) {
          .pet-anim .pet-head, .pet-anim .pet-body, .pet-anim .pet-tail,
          .pet-anim .pet-aura, .pet-anim .pet-orbit, .pet-anim .pet-wings,
          .pet-anim .pet-eyes, .pet-evolving { animation: none !important; }
        }

        /* ---- bottom sheet (themes / settings) ---- */
        .sheet-backdrop {
          position: fixed; inset: 0; z-index: 60;
          background: rgba(0,0,0,0.55);
          display: flex; align-items: flex-end; justify-content: center;
          animation: fadeIn 200ms ease;
        }
        @media (min-width: 900px) { .sheet-backdrop { align-items: center; } }

        .sheet {
          width: 100%; max-width: 520px; max-height: 86vh; overflow-y: auto;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 16px 16px 0 0;
          padding: 16px 16px 22px;
          animation: sheetUp 320ms cubic-bezier(.16,1,.3,1);
        }
        @media (min-width: 900px) { .sheet { border-radius: 16px; } }

        @keyframes sheetUp { from { transform: translateY(22px); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .sheet-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .sheet-title {
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text);
        }
        .sheet-close {
          background: transparent; border: none; color: var(--muted);
          font-size: 22px; line-height: 1; cursor: pointer; padding: 0 4px;
        }
        .sheet-sub, .sheet-foot {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          color: var(--muted); text-align: center; margin-top: 12px;
        }
        .sheet-foot { margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--track); }

        .theme-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px;
        }
        @media (min-width: 520px) { .theme-grid { grid-template-columns: repeat(3, 1fr); } }

        .theme-card {
          display: flex; flex-direction: column; align-items: flex-start; gap: 4px;
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 11px; padding: 9px; cursor: pointer; text-align: left;
          font-family: inherit; transition: border-color 180ms ease, transform 180ms ease;
        }
        .theme-card.active { border-color: var(--accent); }
        .theme-card.locked { cursor: not-allowed; opacity: 0.72; }
        .theme-card:not(:disabled):active { transform: scale(0.975); }

        .theme-swatch {
          width: 100%; height: 46px; border-radius: 7px; position: relative;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .theme-lock { color: rgba(255,255,255,0.82); }
        .theme-active-dot {
          position: absolute; top: 5px; right: 5px;
          width: 7px; height: 7px; border-radius: 50%;
          background: #fff; box-shadow: 0 0 6px rgba(255,255,255,0.9);
        }
        .theme-name {
          font-family: 'JetBrains Mono', monospace; font-size: 10.5px;
          font-weight: 600; color: var(--text); margin-top: 2px;
        }
        .theme-blurb { font-size: 9px; color: var(--muted); line-height: 1.35; }
        .theme-req {
          font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--accent2);
        }
        .theme-bar {
          width: 100%; height: 3px; background: var(--track);
          border-radius: 2px; overflow: hidden; margin-top: 2px;
        }
        .theme-bar-fill {
          display: block; height: 100%; background: var(--accent2);
          border-radius: 2px; transition: width 600ms cubic-bezier(.16,1,.3,1);
        }
        .theme-pct { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--muted); }

        /* ---- calm toggle ---- */
        .calm-toggle-row {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--track);
        }
        .calm-toggle-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text);
        }
        .calm-toggle-hint { font-size: 9.5px; color: var(--muted); margin-top: 2px; }
        .calm-switch {
          flex-shrink: 0; width: 42px; height: 24px; border-radius: 999px;
          background: var(--track); border: 1px solid var(--border);
          position: relative; cursor: pointer; transition: background 220ms ease, border-color 220ms ease;
        }
        .calm-switch.on { background: var(--accent); border-color: var(--accent); }
        .calm-knob {
          position: absolute; top: 2px; left: 2px;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--muted); transition: transform 220ms cubic-bezier(.16,1,.3,1), background 220ms ease;
        }
        .calm-switch.on .calm-knob { transform: translateX(18px); background: var(--bg); }

        @media (hover: hover) and (pointer: fine) {
          .theme-card:not(:disabled):hover { border-color: var(--accent); }
          .sheet-close:hover { color: var(--text); }
        }

        /* ---- ambient engine (v22) -----------------------------------
           Four stacked layers, all pointer-events:none and behind the
           panel. Layers are pure CSS -- no canvas, no rAF loop -- so the
           cost is compositor-only and the main thread stays free.
             ::before  theme blobs        (drift, 96s)
             ::after   secondary blobs    (drift, 138s)
             .amb-time time-of-day wash + light ray
             .amb-dust particle field     (theme dependent)
        */
        .amb-layer {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          contain: strict;
          transform: translateZ(0);
        }

        .amb-time {
          background:
            radial-gradient(120% 80% at 50% -10%, var(--time-warm), transparent 65%);
          opacity: var(--time-light, 1);
          transition: opacity 2s ease, background 2s ease;
        }

        /* a single soft diagonal shaft, very faint, slowly sweeping */
        .amb-ray {
          position: absolute;
          top: -40%;
          left: -20%;
          width: 55%;
          height: 190%;
          background: linear-gradient(
            105deg, transparent 0%, rgba(255,255,255,0.022) 45%,
            rgba(255,255,255,0.032) 50%, rgba(255,255,255,0.022) 55%, transparent 100%);
          filter: blur(18px);
          transform: rotate(8deg) translateZ(0);
          animation: raySweep calc(180s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        @keyframes raySweep {
          0%   { transform: translateX(-12%) rotate(8deg); opacity: 0.55; }
          100% { transform: translateX(115%) rotate(8deg); opacity: 0.95; }
        }

        /* film grain: one tiny repeating SVG, no image request */
        .amb-grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          /* no mix-blend-mode: blending forces the compositor to re-read the
             backdrop every frame, which cost ~6fps on a large panel for an
             effect that is nearly invisible at this opacity anyway */
          opacity: var(--grain-opacity, 0.018);
        }

        /* ---- particles ---- */
        .amb-dust span {
          position: absolute;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          animation: floatUp linear infinite;
          will-change: transform, opacity;
        }

        @keyframes floatUp {
          0%   { transform: translateY(8vh) scale(0.7); opacity: 0; }
          12%  { opacity: 0.5; }
          88%  { opacity: 0.4; }
          100% { transform: translateY(-102vh) scale(1.05); opacity: 0; }
        }

        /* bubbles rise faster and wobble; embers glow warm and fade early */
        [data-particle="bubbles"] .amb-dust span {
          background: transparent;
          border: 1px solid var(--accent);
        }
        [data-particle="embers"] .amb-dust span {
          background: var(--accent2);
          box-shadow: 0 0 6px var(--glow);
        }
        [data-particle="aurora"] .amb-dust span {
          background: linear-gradient(180deg, var(--accent), var(--accent2));
          filter: blur(1px);
        }

        /* stars only at night, and only as a static field so they don't
           compete with the drifting layers */
        /* One animation on the container rather than 34 on the children.
           Animating opacity per-span forced ~34 repaints every frame (measured
           at ~24fps on a 1920 panel); the field reads the same when the whole
           layer breathes and the stars differ only in static opacity. */
        .amb-stars {
          animation: twinkle 4.5s ease-in-out infinite alternate;
          will-change: opacity;
        }
        .amb-stars span {
          position: absolute;
          width: 2px; height: 2px;
          border-radius: 50%;
          background: #FFFFFF;
        }
        @keyframes twinkle {
          from { opacity: 0.45; }
          to   { opacity: 1; }
        }

        /* ---- calm mode ----------------------------------------------
           Slows everything (via --motion-scale), lifts blur, dims accents
           and hides secondary chrome. Navigation stays fully usable. */
        .calm-mode .amb-layer { filter: blur(14px) saturate(0.82); }
        .calm-mode .panel {
          filter: saturate(0.85) brightness(0.96);
          transition: filter 900ms ease;
        }
        .calm-mode .amb-grain { opacity: calc(var(--grain-opacity) * 0.4); }

        .calm-breath {
          position: fixed;
          left: 50%; top: 50%;
          width: 220px; height: 220px;
          margin: -110px 0 0 -110px;
          border-radius: 50%;
          border: 1px solid var(--accent);
          background: radial-gradient(circle, var(--glow), transparent 68%);
          opacity: 0.5;
          z-index: -1;
          pointer-events: none;
          animation: breathe 11s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(0.72); opacity: 0.30; }
          42%      { transform: scale(1.16); opacity: 0.62; }
          58%      { transform: scale(1.16); opacity: 0.62; }
        }

        @media (prefers-reduced-motion: reduce) {
          .amb-ray, .amb-dust span, .amb-stars span, .calm-breath {
            animation: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .radar-fill, .timeline-block, .heatmap-cell, .task-list,
          .radial-progress-wrap circle, .donut-wrap circle {
            animation: none !important;
            transition: none !important;
          }
          /* freeze the ambient background -- the gradients stay, only the
             drift stops, so the look is unchanged for these users */
          .app-root::before, .app-root::after {
            animation: none !important;
          }
        }

        .duration-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 0 18px 14px;
        }

        .duration-chips button {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .duration-chips button.active {
          background: rgba(94,234,212,0.12);
          border-color: var(--accent);
          color: var(--accent);
        }

        .duration-custom {
          width: 58px;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 5px 8px;
          color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          outline: none;
        }

        .stats-bar {
          padding: 18px 18px 14px;
          border-bottom: 1px solid var(--track);
        }

        .stats-bar-viz {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stats-row-viz {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #9CA3AF;
        }

        .stats-row-viz b { color: var(--text); font-weight: 700; }

        .stats-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 10px;
        }

        .stats-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .stats-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          color: var(--accent);
          font-variant-numeric: tabular-nums;
        }

        .progress-track {
          height: 6px;
          background: var(--track);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), #7BF0DD);
          border-radius: 3px;
          transition: width 420ms cubic-bezier(.65,0,.35,1);
          box-shadow: 0 0 12px rgba(94,234,212,0.5);
        }

        .stats-row {
          display: flex;
          gap: 16px;
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--muted);
        }

        .stats-row b { color: var(--text); font-weight: 600; }

        .composer {
          padding: 16px 18px;
          display: flex;
          gap: 8px;
          border-bottom: 1px solid var(--track);
        }

        .composer input[type="text"] {
          flex: 1;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 12px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .composer input[type="text"]::placeholder { color: #4B5563; }

        .composer input[type="text"]:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(94,234,212,0.12);
        }

        .prio-select {
          display: flex;
          gap: 4px;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 3px;
        }

        .alt-toggle-btn {
          flex-shrink: 0;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0 12px;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .alt-toggle-btn:hover { color: #9CA3AF; border-color: #2C3138; }
        .alt-toggle-btn.active { color: var(--accent); border-color: var(--accent); background: rgba(94,234,212,0.08); }

        .alt-composer {
          margin: 0 18px 14px;
          padding: 10px 12px;
          background: #0F1215;
          border: 1px dashed var(--border);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .alt-composer-hint {
          font-size: 10.5px;
          color: #565D68;
        }

        .alt-composer-row {
          display: flex;
          gap: 6px;
        }

        .alt-composer-row input[type="text"] {
          flex: 1;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 8px 10px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          outline: none;
        }

        .alt-composer-row input[type="text"]:focus { border-color: var(--accent); }

        .alt-remove-btn {
          flex-shrink: 0;
          width: 30px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--muted);
          font-size: 15px;
          cursor: pointer;
        }

        .alt-remove-btn:hover { color: var(--danger); border-color: var(--danger); }

        .alt-add-btn {
          align-self: flex-start;
          background: transparent;
          border: none;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          padding: 2px 0;
        }

        .alt-add-btn:hover { text-decoration: underline; }

        .routine-edit .alt-composer { margin-left: 0; margin-right: 0; }

        .prio-select button {
          border: none;
          background: transparent;
          padding: 7px 9px;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--muted);
          cursor: pointer;
          transition: all 150ms ease;
          text-transform: uppercase;
        }

        .prio-select button.active {
          background: var(--track);
          color: var(--pc);
        }

        .add-btn {
          background: var(--accent);
          border: none;
          border-radius: 8px;
          width: 38px;
          color: var(--bg);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 120ms ease, background 150ms ease;
          flex-shrink: 0;
        }

        .add-btn:hover { background: #7BF0DD; }
        .add-btn:active { transform: scale(0.92); }

        .filters {
          display: flex;
          gap: 4px;
          padding: 12px 18px;
        }

        .filters button {
          border: none;
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .filters button.active {
          background: var(--track);
          color: var(--text);
        }

        .filters .spacer { flex: 1; }

        .clear-btn {
          border: none;
          background: transparent;
          color: #4B5563;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          transition: color 150ms ease;
        }
        .clear-btn:hover { color: var(--danger); }

        .task-list {
          padding: 6px 10px 16px;
          flex: 1;
          min-height: 0;
          overflow-y: auto;
        }

        .task-row {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 8px;
          border-radius: 8px;
          animation: rowIn 320ms cubic-bezier(.16,1,.3,1) backwards;
          transition: background 150ms ease;
        }

        .task-row:hover { background: #191D23; }

        .task-row.leaving {
          animation: rowOut 220ms ease forwards;
        }

        @keyframes rowIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes rowOut {
          to { opacity: 0; transform: translateX(12px) scale(0.97); max-height: 0; padding: 0 8px; }
        }

        .checkbox-btn {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 1.5px solid var(--c);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 200ms ease;
        }

        .checkbox-btn[aria-checked="true"] {
          background: var(--c);
        }

        .task-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .task-text {
          font-size: 13.5px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: color 200ms ease;
        }

        .task-text.done {
          color: #4B5563;
          text-decoration: line-through;
        }

        .task-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #4B5563;
        }

        .prio-dot { width: 5px; height: 5px; border-radius: 50%; }
        .prio-label { text-transform: uppercase; letter-spacing: 0.04em; }
        .dot-sep { color: #2A2F37; }

        .del-btn {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 4px;
          display: flex;
          opacity: 0;
          transition: all 150ms ease;
          flex-shrink: 0;
        }

        .task-row:hover .del-btn { opacity: 1; color: var(--muted); }
        .del-btn:hover { color: var(--danger) !important; }

        .empty-state {
          text-align: center;
          padding: 48px 20px;
          color: #4B5563;
        }

        .empty-state .glyph {
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          color: #2A2F37;
          margin-bottom: 8px;
        }

        .empty-state .msg {
          font-size: 12.5px;
        }

        .task-list::-webkit-scrollbar { width: 6px; }
        .task-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
        .task-list::-webkit-scrollbar-track { background: transparent; }

        .today-view { padding-bottom: 24px; }

        .today-section-header {
          padding: 16px 16px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }

        .today-section-header:first-child { padding-top: 14px; }

        .today-view-all {
          border: none;
          background: transparent;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          cursor: pointer;
          padding: 0;
        }

        .today-xp-total {
          color: var(--accent2);
          font-family: 'JetBrains Mono', monospace;
        }

        .today-card {
          margin: 0 16px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--panel);
          animation: rowIn 220ms ease backwards;
        }

        .today-card-row { display: flex; align-items: baseline; gap: 10px; }

        .today-card-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--accent);
        }

        .today-card-label {
          font-size: 15px;
          font-weight: 500;
          color: var(--text);
        }

        .today-card-sub {
          margin-top: 4px;
          font-size: 11.5px;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
        }

        .today-mark-btn {
          margin-top: 12px;
          width: 100%;
          padding: 9px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: transparent;
          color: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          cursor: pointer;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .today-mark-btn:hover { border-color: var(--accent); color: var(--accent); }
        .today-mark-btn.done { border-color: var(--accent); color: var(--accent); background: rgba(94,234,212,0.08); }

        .today-list { margin: 0 16px; display: flex; flex-direction: column; gap: 6px; }

        .today-task-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid var(--track);
          border-radius: 8px;
          background: var(--panel);
          animation: rowIn 200ms ease backwards;
        }

        .today-task-check {
          width: 16px;
          height: 16px;
          border-radius: 5px;
          border: 1.5px solid #3A3F47;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
        }

        .today-task-check:hover { border-color: var(--accent); }

        .today-task-text {
          flex: 1;
          font-size: 13px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .today-prio-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .today-prio-dot.high { background: var(--accent2); }
        .today-prio-dot.mid { background: var(--accent); }
        .today-prio-dot.low { background: var(--muted); }

        .today-more {
          border: none;
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-align: left;
          padding: 6px 12px;
          cursor: pointer;
        }

        .today-more:hover { color: var(--accent); }

        .today-reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent2);
          flex-shrink: 0;
        }

        .today-claim-btn {
          border: 1px solid var(--accent);
          border-radius: 6px;
          background: transparent;
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .today-claim-btn:hover { background: rgba(94,234,212,0.1); }

        @media (prefers-reduced-motion: reduce) {
          .panel, .task-row, .progress-fill { animation: none !important; transition: none !important; }
        }

        .quest-banner {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #171B21;
          border: 1px solid var(--accent);
          box-shadow: 0 8px 24px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(94,234,212,0.15);
          border-radius: 10px;
          padding: 10px 12px;
          cursor: pointer;
          animation: bannerIn 340ms cubic-bezier(.16,1,.3,1);
        }

        @keyframes bannerIn {
          from { opacity: 0; transform: translateY(-14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quest-banner-icon {
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          flex-shrink: 0;
        }

        .quest-banner-text {
          flex: 1;
          font-size: 12.5px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-banner-text b {
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          margin-right: 4px;
        }

        .quest-banner-close {
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          padding: 3px;
          flex-shrink: 0;
          display: flex;
        }

        .quest-banner-close:hover { color: var(--text); }

        /* ---- shared: vault + quest sections ---- */
        .vault-scroll { display: flex; flex-direction: column; }

        .section-header {
          padding: 14px 18px 8px;
        }

        .section-header span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .vault-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          padding: 0 18px 4px;
        }

        @media (min-width: 520px) {
          .vault-grid { grid-template-columns: 1fr 1fr; }
        }

        .progress-track.small { height: 4px; }
        .progress-fill.xp { background: linear-gradient(90deg, #8B9CF7, #B4C0FA); box-shadow: 0 0 12px rgba(139,156,247,0.5); }

        .muted { color: #4B5563; }

        /* ---- vault: habit cards ---- */
        /* ---- notes: a terminal buffer, not a card ---- */
        .note-list { display: flex; flex-direction: column; gap: 10px; padding: 0 18px 8px; }

        .note-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-left: 2px solid var(--accent);
          border-radius: 6px;
          padding: 10px 12px;
          cursor: pointer;
          transition: border-color 140ms ease;
        }
        .note-card:hover { border-color: var(--accent); }
        .note-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .note-card.editing { cursor: default; border-left-color: var(--accent2); }

        .note-head {
          display: flex; align-items: baseline; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          margin-bottom: 6px;
        }
        .note-prompt { color: var(--accent); opacity: 0.75; }
        .note-title { color: var(--text); font-weight: 600; }
        .note-when { margin-left: auto; color: var(--muted); font-size: 9px; }

        /* pre, not div: a note is text the user typed, and their line breaks
           and indentation are part of what they meant */
        .note-body {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; line-height: 1.65; color: var(--muted);
          white-space: pre-wrap; word-break: break-word;
          margin: 0; max-height: 220px; overflow: hidden;
        }
        .note-body.empty { opacity: 0.5; }

        .note-caret {
          display: inline-block; width: 6px; height: 11px;
          background: var(--accent); margin-left: 3px;
          vertical-align: text-bottom; animation: noteBlink 1.1s steps(1) infinite;
        }
        @keyframes noteBlink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .note-caret { animation: none; }
        }

        .note-title-input, .note-body-input {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 4px; color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          outline: none; width: 100%;
        }
        .note-title-input { font-size: 10px; padding: 3px 6px; font-weight: 600; }
        .note-body-input {
          font-size: 11px; line-height: 1.65; padding: 8px;
          resize: none; overflow: hidden; min-height: 60px;
        }
        .note-title-input:focus, .note-body-input:focus { border-color: var(--accent); }

        .note-actions { display: flex; gap: 6px; margin-top: 8px; }
        .note-btn {
          background: transparent; border: 1px solid var(--border);
          border-radius: 4px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.06em; padding: 4px 10px;
          transition: all 140ms ease;
        }
        .note-btn:hover { border-color: var(--accent); color: var(--accent); }
        .note-btn.save { border-color: var(--accent); color: var(--accent); }
        .note-btn.danger:hover { border-color: var(--danger); color: var(--danger); }

        .widget-feed { border-left-color: var(--accent2); }
        .widget-url { word-break: break-all; white-space: pre-wrap; color: var(--accent); font-size: 10px; }

        .note-empty {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: var(--muted); padding: 10px 18px 14px;
        }

        .vault-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vault-card-top {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .vault-card-icon {
          font-size: 13px;
          color: var(--accent);
          line-height: 1.4;
          flex-shrink: 0;
        }

        .vault-card-title {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .vault-card-label {
          font-size: 13px;
          color: var(--text);
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .vault-card-goal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
          margin-top: 2px;
        }

        .vault-card-del {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 2px;
          display: flex;
          flex-shrink: 0;
          transition: color 150ms ease;
        }

        .vault-card-del:hover { color: var(--danger); }

        .month-grid-wrap { display: flex; flex-direction: column; gap: 5px; }

        .month-grid-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #4B5563;
          letter-spacing: 0.04em;
        }

        .month-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 3px;
        }

        .month-cell {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 2px;
          background: var(--track);
          animation: heatmapIn 240ms ease backwards;
        }

        .month-cell.filled { background: var(--accent2); }
        .month-cell.today { box-shadow: 0 0 0 1.5px var(--accent); }

        .vault-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .vault-card-ring-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .vault-card-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text);
        }

        .vault-check {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .vault-check.done {
          background: rgba(94,234,212,0.1);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ---- vault: projects ---- */
        .project-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }

        .project-due {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--accent2);
          width: fit-content;
        }

        .project-due.overdue { color: var(--danger); }

        .project-tasks {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .project-task-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-task-text {
          flex: 1;
          font-size: 12.5px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .project-task-text.done { color: #4B5563; text-decoration: line-through; }

        .project-add-task input {
          width: 100%;
          background: #0F1215;
          border: 1px solid var(--border);
          border-radius: 7px;
          padding: 7px 9px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          outline: none;
        }

        .project-add-task input:focus { border-color: var(--accent); }

        /* ---- quest: life areas ---- */
        .area-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          padding: 0 18px 4px;
        }

        .area-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .area-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        .area-label {
          flex: 1;
          font-size: 12px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .area-xp {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: var(--muted);
        }

        /* ---- quest: good/bad habit rows ---- */
        .quest-habit-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 18px 4px;
        }

        .quest-habit-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 12px;
        }

        .quest-habit-card.bad { border-color: #2A1F22; }

        .quest-habit-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .quest-habit-label {
          font-size: 13px;
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-habit-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
        }

        .quest-check.bad-check.done {
          background: var(--danger);
          border-color: var(--danger);
        }

        /* ---- quest: reward center ---- */
        .reward-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reward-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reward-label { font-size: 13px; font-weight: 600; color: var(--text); }

        .reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent2);
        }

        .reward-claim {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .reward-claim:not(:disabled):hover {
          border-color: var(--accent2);
          color: var(--accent2);
        }

        .reward-claim:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .reward-claimed-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: #4B5563;
        }

        /* ---- quest: xp bar in hero card ---- */
        .xp-bar-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .xp-bar-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: var(--muted);
        }

        /* ---- editing affordances added across vault + quest cards ---- */
        .vault-card-edit {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 2px;
          display: flex;
          flex-shrink: 0;
          transition: color 150ms ease;
        }

        .vault-card-edit:hover { color: var(--accent); }

        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .project-task-text { cursor: pointer; }

        .project-task-edit {
          flex: 1;
          background: #0F1215;
          border: 1px solid var(--accent);
          border-radius: 6px;
          padding: 6px 8px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          outline: none;
        }

        .edit-row-subs { flex-wrap: wrap; gap: 5px; }

        .sub-chip {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.03em;
          padding: 4px 9px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .sub-chip.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(94,234,212,0.1);
        }

        .area-chip {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .area-chip.active {
          background: color-mix(in srgb, var(--ac) 15%, transparent);
          border-color: var(--ac);
          color: var(--ac);
        }

        .quest-habit-card.editing,
        .vault-card:has(.routine-edit),
        .project-card:has(.routine-edit),
        .reward-card:has(.routine-edit) {
          gap: 0;
        }
        /* ============================================================
           DESKTOP / LAPTOP POLISH
           Everything below only changes layout at wider viewports.
           Phones (max-width: 640px) are untouched by these rules.
           ============================================================ */

        .checkbox-btn:hover { border-color: var(--accent); }
        .tabs button:hover { color: #B8C0CC; }
        .tabs button.active:hover { color: var(--text); }
        .routine-row:hover { background: #191D23; }
        .area-card:hover { border-color: #2C3138; }

        @media (hover: hover) and (pointer: fine) {
          .vault-card, .project-card, .reward-card, .quest-habit-card {
            transition: border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease;
          }
          .vault-card:hover, .project-card:hover, .reward-card:hover, .quest-habit-card:hover {
            border-color: #2C3138;
            box-shadow: 0 8px 20px -12px rgba(0,0,0,0.5);
          }
        }

        /* ---- AI tab ---- */
        .ai-scroll { padding-top: 4px; }

        .tabs button.tab-ai { color: var(--accent); position: relative; }
        .tabs button.tab-ai::after {
          content: "";
          position: absolute; top: 7px; right: 6px;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); box-shadow: 0 0 6px rgba(94,234,212,0.9);
        }
        .tabs button.tab-ai.active::after { display: none; }

        .ai-intro { padding: 4px 16px 12px; }
        .ai-intro-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; margin-bottom: 5px;
        }
        .ai-intro-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; font-weight: 600; color: var(--text);
          letter-spacing: 0.04em;
        }
        .ai-intro-sub { font-size: 11px; color: var(--muted); line-height: 1.5; }

        .ai-key-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 10px; flex-shrink: 0;
          transition: border-color 140ms ease, color 140ms ease;
        }

        /* ---- key gate ---- */
        .ai-gate { padding: 14px 16px 20px; max-width: 460px; margin: 0 auto; }
        .ai-gate-icon {
          font-size: 20px; color: var(--accent); line-height: 1;
          margin-bottom: 10px;
          text-shadow: 0 0 14px rgba(94,234,212,0.5);
        }
        .ai-gate-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px; font-weight: 600; color: var(--text);
          letter-spacing: 0.04em; margin-bottom: 6px;
        }
        .ai-gate-sub {
          font-size: 11.5px; color: var(--muted); line-height: 1.55;
          margin-bottom: 16px;
        }
        .ai-gate-steps {
          margin: 0 0 16px; padding: 0 0 0 18px;
          display: flex; flex-direction: column; gap: 7px;
        }
        .ai-gate-steps li {
          font-size: 11.5px; color: #9AA3AF; line-height: 1.5;
        }
        .ai-gate-steps li::marker {
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
        }
        .ai-gate-steps a {
          color: var(--accent); text-decoration: none;
          border-bottom: 1px solid var(--glow);
          word-break: break-all;
        }
        .ai-key-input {
          width: 100%; box-sizing: border-box;
          background: #0E1116; border: 1px solid var(--border); border-radius: 8px;
          color: var(--text); font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.06em;
          padding: 11px 12px; outline: none;
          transition: border-color 140ms ease;
        }
        .ai-key-input::placeholder { color: #4B5563; letter-spacing: 0.04em; }
        .ai-key-input:focus { border-color: var(--accent); }
        .ai-key-input:disabled { opacity: 0.55; }
        .ai-gate-error { margin: 10px 0 0; }
        .ai-gate-actions { display: flex; gap: 8px; margin-top: 12px; }
        .ai-gate-note {
          font-size: 10.5px; color: #4B5563; line-height: 1.5;
          margin-top: 14px; padding-top: 12px;
          border-top: 1px solid #1B1F25;
        }

        .ai-composer { display: flex; flex-direction: column; gap: 8px; padding: 0 16px 12px; }
        .ai-input {
          width: 100%; box-sizing: border-box; resize: vertical; min-height: 62px;
          background: #0E1116; border: 1px solid var(--border); border-radius: 8px;
          color: var(--text); font-family: 'Inter', sans-serif;
          font-size: 12.5px; line-height: 1.5; padding: 10px 12px;
          outline: none; transition: border-color 140ms ease;
        }
        .ai-input::placeholder { color: #4B5563; }
        .ai-input:focus { border-color: var(--accent); }
        .ai-input:disabled { opacity: 0.55; }

        .ai-send {
          align-self: flex-end; background: var(--accent); color: #07100E;
          border: none; border-radius: 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          padding: 8px 20px; cursor: pointer;
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .ai-send:disabled { opacity: 0.35; cursor: default; }
        .ai-send:not(:disabled):active { transform: scale(0.97); }

        .ai-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 16px 14px; }
        .ai-chip {
          background: var(--panel); border: 1px solid var(--border); border-radius: 999px;
          color: #9AA3AF; font-size: 10.5px; padding: 6px 12px;
          cursor: pointer; text-align: left;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .ai-thinking {
          display: flex; flex-direction: column; align-items: center;
          gap: 9px; padding: 18px 0 22px;
        }
        .ai-dots { display: flex; gap: 5px; }
        .ai-elapsed {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: var(--muted); letter-spacing: 0.05em;
          font-variant-numeric: tabular-nums;
        }
        .ai-slow { color: var(--accent2); }
        .ai-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); opacity: 0.35;
          animation: aiPulse 1.05s ease-in-out infinite;
        }
        .ai-dot:nth-child(2) { animation-delay: 0.16s; }
        .ai-dot:nth-child(3) { animation-delay: 0.32s; }
        @keyframes aiPulse {
          0%, 100% { opacity: 0.25; transform: translateY(0); }
          50%      { opacity: 1;    transform: translateY(-4px); }
        }

        .ai-error {
          margin: 0 16px 12px; padding: 10px 12px;
          background: rgba(240,87,107,0.08);
          border: 1px solid rgba(240,87,107,0.35);
          border-radius: 8px; color: var(--danger);
          font-size: 11.5px; line-height: 1.45;
        }

        .ai-result { padding: 0 16px 16px; }
        .ai-reply {
          font-size: 12.5px; color: #C9D1D9; line-height: 1.55;
          padding: 11px 13px; margin-bottom: 12px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--accent); border-radius: 8px;
        }
        .ai-noop { font-size: 11px; color: var(--muted); text-align: center; padding: 6px 0 4px; }

        .ai-diff-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 7px;
        }
        .ai-diff-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-counts {
          display: flex; gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px; font-weight: 600;
        }
        .ai-diff-counts .c-add { color: #7EE787; }
        .ai-diff-counts .c-edit { color: var(--accent2); }
        .ai-diff-counts .c-remove { color: var(--danger); }

        .ai-diff { display: flex; flex-direction: column; gap: 5px; }
        .ai-diff-row {
          display: grid; grid-template-columns: 14px 52px 1fr auto;
          align-items: baseline; gap: 8px;
          width: 100%; text-align: left;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--border); border-radius: 7px;
          padding: 9px 11px; cursor: pointer; font-family: inherit;
          transition: opacity 140ms ease, border-color 140ms ease;
        }
        .ai-diff-row.add    { border-left-color: #7EE787; }
        .ai-diff-row.edit   { border-left-color: var(--accent2); }
        .ai-diff-row.remove { border-left-color: var(--danger); }
        .ai-diff-row.skipped { opacity: 0.38; }
        .ai-diff-row.skipped .ai-diff-text { text-decoration: line-through; }

        .ai-sign { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 700; line-height: 1; }
        .ai-diff-row.add .ai-sign    { color: #7EE787; }
        .ai-diff-row.edit .ai-sign   { color: var(--accent2); }
        .ai-diff-row.remove .ai-sign { color: var(--danger); }

        .ai-surface {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-text { font-size: 12px; color: var(--text); line-height: 1.4; word-break: break-word; }
        .ai-skip-mark {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--muted);
        }

        .ai-actions { display: flex; gap: 8px; margin-top: 12px; }
        .ai-apply {
          flex: 1; background: var(--accent); color: #07100E; border: none;
          border-radius: 7px; padding: 10px 0; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .ai-apply:disabled { opacity: 0.35; cursor: default; }
        .ai-apply:not(:disabled):active { transform: scale(0.98); }
        .ai-discard {
          background: transparent; color: #9AA3AF;
          border: 1px solid var(--border); border-radius: 7px;
          padding: 10px 18px; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.06em;
          transition: border-color 140ms ease, color 140ms ease;
        }
        .ai-hint { font-size: 10px; color: #4B5563; text-align: center; margin-top: 8px; }

        @media (hover: hover) and (pointer: fine) {
          .ai-chip:hover { border-color: var(--accent); color: #C9D1D9; }
          .ai-diff-row:hover { border-color: #39414D; }
          .ai-send:not(:disabled):hover,
          .ai-apply:not(:disabled):hover { opacity: 0.88; }
          .ai-discard:hover { border-color: #39414D; color: var(--text); }
          .ai-key-btn:hover { border-color: var(--accent); color: var(--accent); }
          .ai-gate-steps a:hover { border-bottom-color: var(--accent); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-dot { animation: none; opacity: 0.6; }
        }

        @media (min-width: 900px) {
          .app-root {
            padding: 5vh 5vw;
            background:
              radial-gradient(circle at 15% 0%, rgba(94,234,212,0.07), transparent 45%),
              radial-gradient(circle at 85% 100%, rgba(245,166,35,0.06), transparent 45%),
              repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 28px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 28px),
              var(--bg);
          }

          .panel {
            max-width: 1180px;
            max-height: 900px;
            border-radius: 16px;
            box-shadow: 0 40px 90px -24px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02);
          }

          .titlebar { padding: 16px 26px; }
          .titlebar-name { font-size: 13px; }
          .clock { font-size: 13px; }

          .tabs { padding: 12px 26px 0; gap: 6px; }
          .tabs button { font-size: 12px; padding: 10px 20px; }

          /* Reading-oriented views (plain lists) stay a comfortable
             line-length and center within the wider panel. */
          .task-list:not(.vault-scroll) {
            max-width: 840px;
            margin: 0 auto;
            width: 100%;
          }

          /* Card-grid views (vault + quest) get to use the extra width. */
          .vault-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 0 26px 4px; }
          .quest-habit-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            align-content: start;
            padding: 0 26px 4px;
          }
          .radar-card, .donut-card { max-width: 840px; margin-left: auto; margin-right: auto; }

          .task-row { padding: 11px 12px; }
        }

        @media (min-width: 1240px) {
          .panel { max-width: 1320px; }
          .vault-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      <div className="panel">
        <AmbientBackground theme={themeCtl.theme} phase={themeCtl.phase} calm={themeCtl.calm} scoped />
        {banner && (
          <div className="quest-banner" onClick={() => setBanner(null)}>
            <span className="quest-banner-icon">▸</span>
            <span className="quest-banner-text">
              <b>Now:</b> {banner.label}
            </span>
            <button
              className="quest-banner-close"
              onClick={(e) => {
                e.stopPropagation();
                setBanner(null);
              }}
              aria-label="Dismiss"
            >
              <svg viewBox="0 0 24 24" width="12" height="12">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}
        <div className="titlebar">
          <div className="titlebar-left">
            <div className="dots">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
            </div>
            <span className="titlebar-name">tasks.sh</span>
            <VersionBadge />
          </div>
          <div className="titlebar-right">
            <input
              type="file"
              accept="application/json"
              ref={importInputRef}
              onChange={handleImportFile}
              style={{ display: "none" }}
            />
            <button
              className={`titlebar-icon-btn ${notifyEnabled ? "notify-on" : ""}`}
              onClick={toggleNotify}
              disabled={notifyBusy}
              aria-label={notifyEnabled ? "Turn off notifications" : "Turn on notifications"}
              title={notifyEnabled ? "Notifications on — tap to turn off" : "Turn on routine notifications"}
            >
              {notifyEnabled ? (
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
            <button
              className="titlebar-icon-btn"
              onClick={toggleSound}
              aria-label={soundOn ? "Mute sound" : "Unmute sound"}
              title={soundOn ? "Mute sound" : "Unmute sound"}
            >
              {soundOn ? (
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M4 9v6h4l5 5V4L8 9H4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M4 9v6h4l5 5V4L8 9H4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
            <button
              className="titlebar-icon-btn"
              onClick={() => { setShowThemes(true); sound.click(); }}
              aria-label="Themes and ambience"
              title="Themes & ambience"
            >
              <svg viewBox="0 0 24 24" width="14" height="14">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 3a9 9 0 0 0 0 18" fill="currentColor" opacity="0.55" />
              </svg>
            </button>
            <button className="titlebar-icon-btn" onClick={triggerImport} aria-label="Import backup" title="Import backup">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M12 16V4M7 9l5-5 5 5M4 20h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="titlebar-icon-btn" onClick={exportData} aria-label="Export backup" title="Export backup">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M12 4v12M7 11l5 5 5-5M4 20h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="clock">
              {new Date(now).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })}
            </span>
          </div>
        </div>

        {dataMsg && (
          <div className={`data-toast ${dataMsg.type}`}>{dataMsg.text}</div>
        )}

        {/* A real tablist: screen readers announce "tab 3 of 6, selected"
            instead of six unrelated buttons. aria-selected also gives the
            active tab a programmatic state, not just a CSS class. */}
        <div className="tabs" role="tablist" aria-label="Sections">
          {[
            ["today", "today"],
            ["tasks", "tasks"],
            ["routines", "routines"],
            ["vault", "vault"],
            ["quest", "quest"],
            ["pet", petCtl.pet.name.toLowerCase()],
          ].map(([id, label]) => (
            <button
              key={id}
              role="tab"
              id={`tab-${id}`}
              aria-selected={tab === id}
              aria-controls="tab-panel"
              className={`${id === "pet" ? "tab-pet " : ""}${tab === id ? "active" : ""}`.trim()}
              onClick={() => changeTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          key={tab}
          className="tab-content"
          id="tab-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
        >
        {tab === "today" ? (
          <TodayView
            routines={routines}
            setRoutines={setRoutines}
            tasks={tasks}
            setTasks={setTasks}
            vaultHabits={vaultHabits}
            goodHabits={goodHabits}
            badHabits={badHabits}
            rewards={rewards}
            setRewards={setRewards}
            totalXP={totalXP}
            setTab={changeTab}
          />
        ) : tab === "tasks" ? (
          <>
            <div className="stats-bar stats-bar-viz">
              <RadialProgress pct={stats.pct} size={64} stroke={5.5} label={`${stats.pct}%`} />
              <div className="stats-row-viz">
                <span><b><AnimatedNumber value={stats.total} /></b> total</span>
                <span><b><AnimatedNumber value={stats.pending} /></b> pending</span>
                <span><b><AnimatedNumber value={stats.done} /></b> done</span>
              </div>
            </div>

            {stats.pending > 0 && (
              <div className="donut-card">
                <DonutChart
                  size={96}
                  stroke={14}
                  centerLabel={stats.pending}
                  centerSublabel="open"
                  segments={prioBreakdown.map((p) => ({ key: p.key, value: p.value, color: p.color }))}
                />
                <div className="donut-legend">
                  {prioBreakdown.map((p) => (
                    <div className="donut-legend-row" key={p.key}>
                      <span className="donut-legend-dot" style={{ background: p.color }} />
                      <span>{p.label} priority</span>
                      <span className="donut-legend-val">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="composer">
              <input
                ref={inputRef}
                type="text"
                placeholder="add a task, press enter..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
              />
              <div className="prio-select">
                {PRIORITIES.map((p) => (
                  <button
                    key={p.key}
                    className={priority === p.key ? "active" : ""}
                    style={{ "--pc": p.color }}
                    onClick={() => setPriority(p.key)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <button className="add-btn" onClick={addTask} aria-label="Add task">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="filters">
              {["all", "active", "done"].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "active" : ""}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
              <span className="spacer" />
              {stats.done > 0 && (
                <button className="clear-btn" onClick={clearDone}>clear done</button>
              )}
            </div>

            <div className="task-list">
              {visible.length === 0 ? (
                <div className="empty-state">
                  <div className="glyph">{"{ }"}</div>
                  <div className="msg">
                    {filter === "done" ? "nothing completed yet" : "queue's empty — add something"}
                  </div>
                </div>
              ) : (
                visible.map((t, i) => (
                  <TaskRow
                    key={t.id}
                    task={t}
                    now={now}
                    index={i}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))
              )}
            </div>
          </>
        ) : tab === "routines" ? (
          <RoutinesView routines={routines} setRoutines={setRoutines} />
        ) : tab === "vault" ? (
          <VaultView
            vaultHabits={vaultHabits}
            setVaultHabits={setVaultHabits}
            projects={projects}
            setProjects={setProjects}
            notes={notes}
            setNotes={setNotes}
          />
        ) : tab === "quest" ? (
          <QuestView
            tagCtl={tagCtl}
            goodHabits={goodHabits}
            setGoodHabits={setGoodHabits}
            badHabits={badHabits}
            setBadHabits={setBadHabits}
            rewards={rewards}
            setRewards={setRewards}
          />
        ) : (
          <CompanionView
            petCtl={petCtl}
            state={{ routines, vaultHabits, goodHabits, badHabits, rewards, totalXP }}
            setters={{ setRoutines, setVaultHabits, setGoodHabits, setBadHabits, setRewards }}
            showDataMsg={showDataMsg}
            ctx={{
              pet: petCtl.pet,
              level: currentLevel,
              hour: getISTParts().hour,
              phase: themeCtl.phase.id,
              doneToday: goodHabits.filter((h) => (h.history || []).includes(getISTDateString(0))).length,
              totalToday: goodHabits.length,
              streak: goodHabits.reduce((m, h) => Math.max(m, computeStreak(h.history)), 0),
              routineNow: null,
              nextRoutine: null,
            }}
          />
        )}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(TodoApp));
