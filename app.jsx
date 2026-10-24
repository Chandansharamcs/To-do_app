import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
// v40: the ONE dependency in this project. WebCodecs gives the phone's
// hardware encoder but deliberately no container, and hand-writing an MP4
// muxer is ~1500 lines of byte offsets where a mistake produces a file that
// plays locally and fails on Instagram. mediabunny is MPL-2.0, zero
// transitive deps, and tree-shakes to ~30kB. ffmpeg.wasm would have been
// ~30MB -- 65x this whole app.
// Imported one by one on purpose. ALL_FORMATS plus Conversion pulled in
// every demuxer and muxer the library has and took the bundle from 446kB to
// 1.0MB -- measured. Phone cameras write MP4/MOV, so those two input formats
// and one output format are the whole requirement.
import {
  Input, Output, BlobSource, BufferTarget, MP4, QTFF,
  Mp4OutputFormat, CanvasSink, CanvasSource, AudioBufferSink,
  EncodedPacketSink, EncodedAudioPacketSource, canEncodeVideo, QUALITY_HIGH,
} from "mediabunny";

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

// Minutes past IST midnight at which one day becomes the next. 03:00 is the
// "still awake, still yesterday" line: a quest finished at 01:30 belongs to
// the day you were up for, and the board does not reshuffle under your thumb
// at midnight.
const DAY_ROLLOVER_MINUTES = 3 * 60;

// "YYYY-MM-DD" for the IST calendar day at `offsetDays` from now (can be negative)
function getISTDateString(offsetDays = 0) {
  // v63: the day rolls over at 03:00 IST, not at midnight. Subtracting the
  // rollover before formatting means everything downstream -- streaks, the
  // seven-day strips, the daily board, expense dates, "yesterday" labels --
  // inherits the rule for free, because they all ask this one function what
  // day it is. Two of them used to answer for themselves; that is how a
  // habit and a streak end up disagreeing about the day you were awake for.
  const d = new Date(Date.now() - DAY_ROLLOVER_MINUTES * 60000 + offsetDays * 86400000);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(d);
}

/** The last seven days, oldest first, for any history of date strings.
 *
 *  v55 inlined this inside RoutinesCard; v58 puts the same strip on Today's
 *  spotlight card, so it lives here once. Two copies of a date rule is how
 *  the two tabs end up disagreeing about what "yesterday" was. */
function last7Days(history) {
  const set = new Set(history || []);
  return Array.from({ length: 7 }, (_, i) => {
    const off = i - 6;
    const d = getISTDateString(off);
    return { d, on: set.has(d), today: off === 0 };
  });
}

function getISTWeekdayShort(offsetDays = 0) {
  const d = new Date(Date.now() - DAY_ROLLOVER_MINUTES * 60000 + offsetDays * 86400000);
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
    kind === "good"    ? data.habits :
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

  // Habits use the v35 { d, t } shape while routines and vault habits still
  // store plain date strings. Writing a bare string into a habit's history
  // silently destroyed its done/slip marks -- caught by the browser suite when
  // undoing a slip failed to restore XP. Detect the shape and match it.
  const apply = (list, id) => list.map((it) => {
    if (it.id !== id) return it;
    const hist = it.history || [];
    const rich = hist.some((e) => e && typeof e === "object");

    if (rich || it.penalty !== undefined) {
      const entries = normaliseHistory(hist);
      const has = entries.some((e) => e.d === dateStr && e.t === "done");
      if (done === has) return it;                     // already right
      const rest = entries.filter((e) => e.d !== dateStr);
      return { ...it, history: done ? [...rest, { d: dateStr, t: "done" }] : rest };
    }

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
  if (byKind.good.length && setters.setHabits) {
    setters.setHabits((prev) => byKind.good.reduce((acc, id) => apply(acc, id), prev));
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

  const addCoins = useCallback((n) => {
    if (n > 0) sound.coin();
    setWallet((w) => ({ ...w, coins: Math.max(0, w.coins + n) }));
  }, []);
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

/**
 * One undo slot for the whole app.
 *
 * v64: there was no undo anywhere -- a mis-swipe on a quest was final, and
 * delete was final too. There is one slot rather than a stack, on purpose:
 * you act, you take it back, you move on. A history of undos invites poking
 * at it, and every extra entry is another snapshot held in memory.
 *
 * The stored value is a function, so undoing is "put the old array back",
 * not a replayed inverse -- replayed inverses are how a slip ends up
 * restoring XP it never had.
 */
const undoBus = {
  ticket: null,
  listeners: new Set(),
  offer(fn, label) {
    this.ticket = { fn, label, at: Date.now() };
    this.listeners.forEach((l) => { try { l(this.ticket); } catch {} });
  },
  fire() {
    const t = this.ticket;
    this.ticket = null;
    this.listeners.forEach((l) => { try { l(null); } catch {} });
    if (t && t.fn) t.fn();
  },
  clear() {
    this.ticket = null;
    this.listeners.forEach((l) => { try { l(null); } catch {} });
  },
  on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
};

// Seven forms rather than twenty: each one gets real craft, and the
// milestones stay meaningful against the v22 XP curve (level 20 ~ 103 days).
const PET_FORMS = [
  // v36: one evolution every 10 levels. Previously 1/3/6/10/14/17/20, which
  // meant three evolutions inside the first fortnight and then nothing.
  { stage: 0, minLevel: 1,  name: "Spark",    title: "just hatched",        scale: 0.62 },
  { stage: 1, minLevel: 10, name: "Sprout",   title: "finding its feet",    scale: 0.72 },
  { stage: 2, minLevel: 20, name: "Drift",    title: "curious and quick",   scale: 0.82 },
  { stage: 3, minLevel: 30, name: "Ember",    title: "steady, warm",        scale: 0.90 },
  { stage: 4, minLevel: 40, name: "Cirrus",   title: "calm and knowing",    scale: 0.96 },
  { stage: 5, minLevel: 50, name: "Solenn",   title: "quietly powerful",    scale: 1.0  },
  { stage: 6, minLevel: 60, name: "Aurelis",  title: "legendary guardian",  scale: 1.06 },
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
// Conky, NOT glassmorphism. Themes vary hue and glow only; they never
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
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "'Inter', system-ui, sans-serif" },
    shape: { card: 10, btn: 8, chip: 999, border: 1, glow: 0 },
    ramp: [352, 171],
  },
  {
    id: "moss",
    name: "Moss",
    blurb: "quiet green, like a forest floor",
    unlockLevel: 10,
    colors: {
      bg: "#080D0A", panel: "#111814", track: "#19231D", border: "#1F2C25",
      text: "#E4EDE7", muted: "#67796F",
      accent: "#7EE787", accent2: "#D9C36B", danger: "#E8737A",
      glow: "rgba(126,231,135,0.32)",
    },
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "'Inter', system-ui, sans-serif" },
    shape: { card: 12, btn: 10, chip: 999, border: 1, glow: 0 },
    ramp: [28, 150],
  },
  {
    id: "dusk",
    name: "Dusk",
    blurb: "the hour after sunset",
    unlockLevel: 15,
    colors: {
      bg: "#0D0912", panel: "#171122", track: "#20182E", border: "#2A2038",
      text: "#EDE7F2", muted: "#7A6E88",
      accent: "#C79BFF", accent2: "#FF9E6B", danger: "#FF6B8A",
      glow: "rgba(199,155,255,0.38)",
    },
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "Georgia, 'Times New Roman', serif" },
    shape: { card: 14, btn: 12, chip: 999, border: 1, glow: 1 },
    ramp: [330, 255],
  },
  {
    id: "abyss",
    name: "Abyss",
    blurb: "deep water, far from the surface",
    unlockLevel: 25,
    colors: {
      bg: "#050A12", panel: "#0D1520", track: "#141F2C", border: "#1B2938",
      text: "#DFEAF5", muted: "#5F7286",
      accent: "#4FC3F7", accent2: "#5EEAD4", danger: "#FF7A93",
      glow: "rgba(79,195,247,0.4)",
    },
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "'Inter', system-ui, sans-serif" },
    shape: { card: 10, btn: 8, chip: 999, border: 1, glow: 2 },
    ramp: [275, 186],
  },
  {
    id: "ember",
    name: "Ember",
    blurb: "banked coals at midnight",
    unlockLevel: 30,
    colors: {
      bg: "#0F0906", panel: "#1A110C", track: "#241812", border: "#2F2118",
      text: "#F5E9E0", muted: "#8A7264",
      accent: "#FF9F45", accent2: "#FFD166", danger: "#FF6B5B",
      glow: "rgba(255,159,69,0.4)",
    },
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "'Inter', system-ui, sans-serif" },
    shape: { card: 14, btn: 12, chip: 999, border: 1, glow: 2 },
    ramp: [8, 48],
  },
  {
    id: "aurora",
    name: "Aurora",
    blurb: "light over a frozen sky",
    unlockLevel: 40,
    colors: {
      bg: "#060A10", panel: "#0F1720", track: "#16212C", border: "#1E2B39",
      text: "#E8F4F2", muted: "#63808A",
      accent: "#6EE7C8", accent2: "#A78BFA", danger: "#FB7185",
      glow: "rgba(110,231,200,0.45)",
    },
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "'Inter', system-ui, sans-serif" },
    shape: { card: 16, btn: 12, chip: 999, border: 1, glow: 2 },
    ramp: [192, 300],
  },
  {
    id: "bone",
    name: "Bone",
    blurb: "warm paper, low light",
    unlockLevel: 5,
    colors: {
      bg: "#100E0C", panel: "#1A1714", track: "#241F1A", border: "#2E2822",
      text: "#EDE4D8", muted: "#8A7C6C",
      accent: "#E0B080", accent2: "#C98A5B", danger: "#D2695E",
      glow: "rgba(224,176,128,0.32)",
    },
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "Georgia, 'Times New Roman', serif" },
    shape: { card: 12, btn: 10, chip: 999, border: 1, glow: 0 },
    ramp: [18, 96],
  },
  {
    id: "neon",
    name: "Neon",
    blurb: "signage after rain",
    unlockLevel: 20,
    colors: {
      bg: "#07070C", panel: "#0E0E18", track: "#181826", border: "#242438",
      text: "#EDEDFF", muted: "#6E6E94",
      accent: "#FF4FD8", accent2: "#4FE3FF", danger: "#FF5470",
      glow: "rgba(255,79,216,0.45)",
    },
    // everything square and mono: the theme is a CRT, not a card deck
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "'JetBrains Mono', ui-monospace, monospace" },
    shape: { card: 4, btn: 3, chip: 4, border: 1, glow: 3 },
    ramp: [316, 196],
  },
  {
    id: "sakura",
    name: "Sakura",
    blurb: "petals on dark water",
    unlockLevel: 35,
    colors: {
      bg: "#0D0910", panel: "#171020", track: "#211829", border: "#2C2136",
      text: "#F2E6F0", muted: "#8A7594",
      accent: "#F7A8C4", accent2: "#C58BE8", danger: "#E8607F",
      glow: "rgba(247,168,196,0.34)",
    },
    type: { mono: "'JetBrains Mono', ui-monospace, monospace", ui: "'Inter', system-ui, sans-serif" },
    shape: { card: 18, btn: 14, chip: 999, border: 1, glow: 1 },
    ramp: [338, 278],
  },
];

// ---- time-of-day phase ------------------------------------------------
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
  r.dataset.phase = phase.id;
}

const STORAGE_KEY_CALM = "tasksh.calm.v1";

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

  return { theme, themeId, setThemeId, themes: THEMES, unlocked, phase, calm, setCalm };
}

// Listed in unlock order, not the order they were written. v41 appended
// three themes to the table and the picker started reading 1,10,20,30,40,
// 50,5,25,45 -- which makes the ladder look broken.
THEMES.sort((a, b) => a.unlockLevel - b.unlockLevel || a.id.localeCompare(b.id));

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

  // v41: a theme is no longer just a palette. Type, corner radius, border
  // weight, glow and the card ramp all move with it -- otherwise every
  // theme is the same app wearing a different hat.
  const t = theme.type || {};
  const sh = theme.shape || {};
  r.style.setProperty("--font-mono", t.mono || "'JetBrains Mono', ui-monospace, monospace");
  r.style.setProperty("--font-ui", t.ui || "'Inter', system-ui, sans-serif");
  r.style.setProperty("--r-card", `${sh.card == null ? 3 : sh.card}px`);
  r.style.setProperty("--r-btn", `${sh.btn == null ? 3 : sh.btn}px`);
  r.style.setProperty("--r-chip", `${sh.chip == null ? 3 : sh.chip}px`);
  r.style.setProperty("--border-w", `${sh.border == null ? 1 : sh.border}px`);
  r.style.setProperty("--glow-w", `${sh.glow == null ? 0 : sh.glow}px`);
  setThemeRamp(theme.ramp);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", c.bg);
}

// ============================================================
// SOUND (v47)
//
// Everything is synthesised. No audio files, no CDN, nothing for the service
// worker to precache and nothing to 404 — same rule the icons follow.
//
// Three layers, three buses, one master:
//
//   ui       short envelope-shaped tones for taps, marks and rewards
//   ambient  a continuous bed, off by default
//   alarm    the pomodoro ring, loud on purpose and interruptible
//
// They are separate buses so the ambient bed can sit well under the UI
// without making the UI quiet too, and so the alarm can duck the other two
// rather than fighting them.
// ============================================================

const SOUND_KEY = "tasksh.sound.v1";
const SOUND_SETTINGS_KEY = "tasksh.soundcfg.v1";

const SOUND_DEFAULTS = { volume: 70, ambient: "off", ambientVolume: 35, alarmSeconds: 10 };

function loadSoundCfg() {
  try {
    const raw = JSON.parse(localStorage.getItem(SOUND_SETTINGS_KEY) || "null") || {};
    const clamp = (v, d) => (Number.isFinite(v) ? Math.max(0, Math.min(100, v)) : d);
    return {
      volume: clamp(raw.volume, SOUND_DEFAULTS.volume),
      ambientVolume: clamp(raw.ambientVolume, SOUND_DEFAULTS.ambientVolume),
      ambient: AMBIENT_SCENES.some((s) => s.id === raw.ambient) ? raw.ambient : "off",
      alarmSeconds: [0, 3, 10, 20].includes(raw.alarmSeconds) ? raw.alarmSeconds : SOUND_DEFAULTS.alarmSeconds,
    };
  } catch {
    return { ...SOUND_DEFAULTS };
  }
}

function saveSoundCfg(cfg) {
  try { localStorage.setItem(SOUND_SETTINGS_KEY, JSON.stringify(cfg)); } catch {}
}

let __audioCtx = null;
let __buses = null;
let __audioUnlocked = false;

function getAudioCtx() {
  if (!__audioCtx) {
    const Ctx = typeof window !== "undefined" && (window.AudioContext || window.webkitAudioContext);
    if (!Ctx) return null;
    __audioCtx = new Ctx();
  }
  if (__audioCtx.state === "suspended") __audioCtx.resume();
  return __audioCtx;
}

/**
 * v66: one unlock, on the first real gesture, for the whole app.
 *
 * A browser may only start an AudioContext from a user gesture. Because the
 * context was created lazily on the first *sound*, that first sound decided
 * the fate of every later one: if it happened to fire from a timer or an
 * effect (a toast, a level-up, the pomodoro alarm) instead of from a tap, the
 * context came up suspended and everything scheduled afterwards landed on a
 * frozen clock and was silently dropped. Touching anything that eventually
 * ran a gesture -- opening the sound settings, for instance -- resumed it,
 * which is why the audio looked like it "only worked after the vault tab".
 *
 * Unlocking on the first pointer or key event anywhere removes the ordering
 * dependency: by the time any sound is asked for, the context is already
 * running.
 */
function unlockAudio() {
  if (__audioUnlocked) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const done = () => { __audioUnlocked = true; };
  if (ctx.state === "running") { done(); return; }
  const p = ctx.resume();
  if (p && typeof p.then === "function") p.then(done).catch(() => {});
  else done();
}

// Guarded on addEventListener as well as on window: the audio tests drive
// this module with a fake window that has no event system, and a bare
// window check is not the same question.
if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
  const kick = () => { unlockAudio(); };
  for (const ev of ["pointerdown", "touchstart", "keydown", "click"]) {
    window.addEventListener(ev, kick, { capture: true, passive: true });
  }
}

/** Master → { ui, ambient, alarm }. Built once, lazily. */
function getBuses() {
  const ctx = getAudioCtx();
  if (!ctx) return null;
  if (__buses && __buses.ctx === ctx) return __buses;
  // v66: the old chain was raw oscillators straight into the speakers, which
  // is why the palette read as "beeps" -- nothing softened the top end and
  // nothing gave the notes a room. A gentle lowpass plus one short feedback
  // delay is most of the difference between a test tone and a terminal that
  // sounds like it has a body.
  const master = ctx.createGain();
  const soft = ctx.createBiquadFilter();
  soft.type = "lowpass";
  soft.frequency.value = 7200;
  soft.Q.value = 0.4;
  soft.connect(master);
  master.connect(ctx.destination);

  const mk = (g) => { const n = ctx.createGain(); n.gain.value = g; n.connect(soft); return n; };

  const delay = ctx.createDelay(0.5);
  delay.delayTime.value = 0.085;
  const fb = ctx.createGain(); fb.gain.value = 0.19;
  const wetGain = ctx.createGain(); wetGain.gain.value = 0.5;
  const wetLp = ctx.createBiquadFilter(); wetLp.type = "lowpass"; wetLp.frequency.value = 3200;
  delay.connect(wetLp); wetLp.connect(fb); fb.connect(delay);
  wetLp.connect(wetGain); wetGain.connect(soft);

  __buses = { ctx, master, soft, delay, ui: mk(1), ambient: mk(0), alarm: mk(1) };
  applySoundCfg(loadSoundCfg());
  return __buses;
}

/** Volume lives on the bus gains, not on every note, so a change takes
 *  effect on sounds already scheduled. */
function applySoundCfg(cfg) {
  if (!__buses) return;
  const t = __buses.ctx.currentTime;
  __buses.master.gain.setTargetAtTime(cfg.volume / 100, t, 0.02);
  __buses.ambient.gain.setTargetAtTime(
    cfg.ambient === "off" ? 0 : (cfg.ambientVolume / 100) * 0.5, t, 0.35
  );
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
  try { localStorage.setItem(SOUND_KEY, on ? "1" : "0"); } catch {}
}

/** Plays a short envelope-shaped tone, or a sequence of them.
 *
 *  `bus` picks the output. The envelope is exponential in and out because a
 *  square-edged gain change on a sine is an audible click, and a UI that
 *  clicks on every tap is the thing people mute.
 */
/** Runs `fn` once the context is actually running.
 *
 * v66: scheduling on a suspended context is not "a sound that arrives late",
 * it is a sound placed at a `currentTime` that never advances, so it is lost.
 * Everything that makes noise goes through here first. */
function withAudio(fn) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  if (ctx.state === "running") { fn(); return; }
  const p = ctx.resume();
  if (p && typeof p.then === "function") p.then(() => { if (ctx.state === "running") fn(); }).catch(() => {});
  else fn();
}

function playTone(specs, busName = "ui") {
  if (!isSoundOn()) return;
  withAudio(() => playToneNow(specs, busName));
}

function playToneNow(specs, busName = "ui") {
  const buses = getBuses();
  if (!buses) return;
  const { ctx } = buses;
  const out = buses[busName] || buses.ui;
  const now = ctx.currentTime;
  specs.forEach(({ freq, start = 0, dur = 0.08, type = "sine", gain = 0.05, detune = 0, slideTo = 0, space = 0 }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now + start);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(1, slideTo), now + start + dur);
    if (detune) osc.detune.setValueAtTime(detune, now + start);
    g.gain.setValueAtTime(0.0001, now + start);
    g.gain.exponentialRampToValueAtTime(gain, now + start + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);
    osc.connect(g);
    g.connect(out);
    // `space` feeds the same note into the room as well as the bus
    if (space > 0 && buses.delay) {
      const send = ctx.createGain();
      send.gain.value = space;
      g.connect(send);
      send.connect(buses.delay);
    }
    osc.start(now + start);
    osc.stop(now + start + dur + 0.02);
  });
}

/** A short burst of filtered noise — the percussive half of the palette.
 *  Oscillators alone cannot do a "tick" or a paper-shuffle "whoosh". */
function playNoise(spec, busName = "ui") {
  if (!isSoundOn()) return;
  withAudio(() => playNoiseNow(spec, busName));
}

function playNoiseNow({ dur = 0.08, gain = 0.03, type = "highpass", freq = 1200, q = 1 } = {}, busName = "ui") {
  if (!isSoundOn()) return;
  const buses = getBuses();
  if (!buses) return;
  const { ctx } = buses;
  const frames = Math.max(1, Math.floor(ctx.sampleRate * dur));
  const buf = ctx.createBuffer(1, frames, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filt = ctx.createBiquadFilter();
  filt.type = type;
  filt.frequency.value = freq;
  filt.Q.value = q;
  const g = ctx.createGain();
  const now = ctx.currentTime;
  g.gain.setValueAtTime(gain, now);
  g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  src.connect(filt); filt.connect(g); g.connect(buses[busName] || buses.ui);
  src.start(now);
  src.stop(now + dur + 0.02);
}

const sound = {
  // v66: rewritten. The old palette was square and sawtooth tones between
  // 165 and 720Hz at tiny gains -- thin, buzzy, and it read as "beeping"
  // rather than as a terminal. Two changes carry most of the improvement:
  // an octave up (small speakers reproduce 1-2kHz far better than 300Hz),
  // and every note now lands in the room instead of stopping dead.
  //
  // --- taps and navigation
  click: () => {
    playNoise({ dur: 0.012, gain: 0.02, freq: 5200, type: "highpass" });
    playTone([{ freq: 1180, dur: 0.05, type: "sine", gain: 0.05,
                slideTo: 880, space: 0.12 }]);
  },
  tick: () => playNoise({ dur: 0.018, gain: 0.022, freq: 3800, type: "highpass" }),
  toggle: () => playTone([{ freq: 880, dur: 0.055, type: "triangle", gain: 0.045,
                            slideTo: 1320, space: 0.14 }]),
  whoosh: () => {
    playNoise({ dur: 0.11, gain: 0.018, freq: 1500, type: "bandpass", q: 0.6 });
    playTone([{ freq: 660, dur: 0.09, type: "sine", gain: 0.022, slideTo: 990, space: 0.2 }]);
  },

  // --- outcomes
  success: () =>
    playTone([
      { freq: 880,  start: 0,    dur: 0.1,  type: "sine", gain: 0.05, space: 0.3 },
      { freq: 1320, start: 0.075, dur: 0.16, type: "sine", gain: 0.045, space: 0.3 },
    ]),
  error: () =>
    playTone([
      { freq: 320, start: 0, dur: 0.09, type: "triangle", gain: 0.05, slideTo: 240 },
      { freq: 240, start: 0.07, dur: 0.13, type: "triangle", gain: 0.04, slideTo: 190 },
    ]),
  delete: () => {
    playNoise({ dur: 0.06, gain: 0.02, freq: 900, type: "lowpass" });
    playTone([{ freq: 420, dur: 0.1, type: "triangle", gain: 0.035, slideTo: 260, space: 0.1 }]);
  },

  /** Swipe right. A major third up, in the room rather than on top of it. */
  complete: () => {
    playNoise({ dur: 0.05, gain: 0.012, freq: 2400, type: "bandpass", q: 0.9 });
    playTone([
      { freq: 1046, start: 0,    dur: 0.1,  type: "sine", gain: 0.045, space: 0.28 },
      { freq: 1568, start: 0.065, dur: 0.17, type: "sine", gain: 0.04,  space: 0.32 },
    ]);
  },
  /** Swipe left. A minor second down: wrong-sounding on purpose, but short
   *  and low enough that it never reads as a telling-off. */
  fail: () =>
    playTone([
      { freq: 523, start: 0,   dur: 0.1,  type: "triangle", gain: 0.04, slideTo: 494, space: 0.18 },
      { freq: 392, start: 0.07, dur: 0.16, type: "triangle", gain: 0.035, slideTo: 370, space: 0.18 },
    ]),

  // --- money and milestones
  coin: () =>
    playTone([
      { freq: 1568, start: 0,    dur: 0.05, type: "sine", gain: 0.035, space: 0.22 },
      { freq: 2093, start: 0.035, dur: 0.1,  type: "sine", gain: 0.03,  space: 0.22 },
    ]),
  levelUp: () =>
    playTone([
      { freq: 523,  start: 0.00, dur: 0.12, type: "sine", gain: 0.05,  space: 0.3 },
      { freq: 659,  start: 0.10, dur: 0.12, type: "sine", gain: 0.05,  space: 0.3 },
      { freq: 784,  start: 0.20, dur: 0.14, type: "sine", gain: 0.055, space: 0.34 },
      { freq: 1047, start: 0.32, dur: 0.34, type: "sine", gain: 0.06,  space: 0.4 },
      { freq: 1047, start: 0.32, dur: 0.34, type: "sine", gain: 0.02,  detune: 9, space: 0.4 },
    ]),
  achievement: () =>
    playTone([
      { freq: 880,  start: 0,    dur: 0.1,  type: "triangle", gain: 0.045, space: 0.25 },
      { freq: 1175, start: 0.08, dur: 0.1,  type: "triangle", gain: 0.045, space: 0.25 },
      { freq: 1568, start: 0.16, dur: 0.24, type: "triangle", gain: 0.05,  space: 0.34 },
    ]),

  /** The rngdle reveal: a rising sweep whose length matches the reveal, and
   *  a landing whose pitch is the rarity. A mythic should sound like one
   *  before you have finished reading the word. */
  reveal: (ms = 600) => {
    const dur = Math.max(0.12, Math.min(3, ms / 1000));
    playTone([{ freq: 260, dur, type: "triangle", gain: 0.022, slideTo: 900, space: 0.2 }]);
  },
  land: (tier = 0) => {
    // Number.isFinite first: [..][NaN] is undefined, and an undefined
    // frequency is a silent note rather than a loud error
    const t = Number.isFinite(tier) ? Math.max(0, Math.min(5, Math.round(tier))) : 0;
    const base = [392, 494, 587, 698, 880, 1175][t];
    playTone([
      { freq: base, start: 0, dur: 0.14, type: "sine", gain: 0.05, space: 0.25 },
      { freq: base * 1.5, start: 0.1, dur: 0.22, type: "sine", gain: 0.04, space: 0.3 },
      ...(t >= 4 ? [{ freq: base * 2, start: 0.22, dur: 0.34, type: "sine", gain: 0.045, space: 0.38 }] : []),
    ]);
  },
  cash: () => {
    playNoise({ dur: 0.05, gain: 0.02, freq: 3400, type: "highpass" });
    playTone([{ freq: 1047, start: 0.03, dur: 0.12, type: "triangle", gain: 0.032, space: 0.2 }]);
  },

};

// ---- the alarm -------------------------------------------------------------

/** Builds the pomodoro ring as data.
 *
 *  Pure, so the thing that matters about it — that it lasts the number of
 *  seconds it claims, gets louder rather than just longer, and never exceeds
 *  a gain that would clip — is testable without a speaker.
 *
 *  Shape: a rising three-note figure repeated with a widening interval and
 *  a growing level. A single tone repeated for ten seconds is a smoke alarm;
 *  this has to be noticeable from the next room and still switchoffable
 *  without resentment.
 */
function buildAlarmPattern(seconds = 10) {
  const total = Math.max(0, Math.min(60, seconds));
  if (!total) return [];
  // 1.0s cycle, not 1.6: at 1.6 a three-second ring left a 1.02s hole in the
  // middle and stopped 0.8s early, which reads as "it gave up" rather than
  // "it rang for three seconds".
  const cycle = 1.0;
  const rounds = Math.max(1, Math.ceil(total / cycle));
  const specs = [];
  for (let r = 0; r < rounds; r++) {
    const t0 = r * cycle;
    if (t0 >= total) break;
    // level climbs to a ceiling, so a ring you slept through gets more
    // insistent without ever becoming distortion
    const level = Math.min(0.085, 0.045 + r * 0.006);
    const step = Math.min(4, r);
    const notes = [660 + step * 20, 880 + step * 30, 990 + step * 40];
    notes.forEach((freq, i) => {
      const start = t0 + i * 0.22;
      if (start >= total) return;
      specs.push({
        freq,
        start,
        dur: Math.min(0.2, Math.max(0.04, total - start)),
        type: "sine",
        gain: level,
      });
    });
  }
  // Hold the last note out to the full length. Without this the ring is
  // always a fraction of a cycle short of what the setting promised, and
  // "10 seconds" that stops at 8.6 is simply a wrong number in the UI.
  if (specs.length) {
    const last = specs[specs.length - 1];
    const end = last.start + last.dur;
    if (end < total - 0.02) last.dur = total - last.start;
  }
  return specs;
}

/** Vibration to match. Android caps patterns, so this stays short-ish and
 *  is re-issued rather than scheduled as one enormous array. */
function buildVibratePattern(seconds = 10) {
  const total = Math.max(0, Math.min(60, seconds)) * 1000;
  const out = [];
  let t = 0;
  while (t < total) {
    const on = 220, off = 380;
    if (t + on > total) break;
    out.push(on);
    t += on;
    if (t + off > total) break;
    out.push(off);
    t += off;
  }
  return out;
}

let __alarmStop = null;

/** Rings, and hands back the way to stop it.
 *
 *  A ten-second alarm you cannot silence is a punishment, so every caller
 *  gets a stop function and the UI shows a button wired to it. Calling this
 *  again while one is running replaces it rather than stacking.
 */
function ringAlarm(seconds) {
  const cfg = loadSoundCfg();
  const dur = seconds === undefined ? cfg.alarmSeconds : seconds;
  stopAlarm();
  if (!dur) return () => {};

  const specs = buildAlarmPattern(dur);
  if (isSoundOn()) playTone(specs, "alarm");
  try { navigator.vibrate && navigator.vibrate(buildVibratePattern(dur)); } catch {}

  const buses = __buses;
  const timer = setTimeout(() => { __alarmStop = null; }, dur * 1000 + 400);

  __alarmStop = () => {
    clearTimeout(timer);
    try { navigator.vibrate && navigator.vibrate(0); } catch {}
    if (buses) {
      // cut the alarm bus rather than chasing every scheduled oscillator,
      // then let it back up for the next ring
      const t = buses.ctx.currentTime;
      buses.alarm.gain.cancelScheduledValues(t);
      buses.alarm.gain.setTargetAtTime(0, t, 0.02);
      setTimeout(() => { try { buses.alarm.gain.setValueAtTime(1, buses.ctx.currentTime); } catch {} }, 250);
    }
    __alarmStop = null;
  };
  return __alarmStop;
}

function stopAlarm() {
  if (__alarmStop) __alarmStop();
}

function alarmRinging() {
  return !!__alarmStop;
}

// ---- the ambient bed -------------------------------------------------------

/** Four beds, all built from noise and slow filters rather than samples.
 *  `off` is the default: a task app that starts making noise on its own is
 *  one you uninstall. */
const AMBIENT_SCENES = [
  { id: "off",   label: "off",        desc: "silence" },
  { id: "rain",  label: "rain",       desc: "steady, filtered, no thunder" },
  { id: "room",  label: "server room", desc: "a low hum and some air" },
  { id: "tape",  label: "tape",       desc: "pink noise with slow wow" },
  { id: "night", label: "night",      desc: "a deep drone, very little else" },
];

let __ambient = null;

/** One looping noise buffer, generated once and reused by every scene.
 *  Four seconds is long enough that the loop point is not audible under a
 *  filter, and small enough to be cheap (about 700 KB at 44.1 kHz). */
function ambientNoiseBuffer(ctx) {
  if (ambientNoiseBuffer.cache && ambientNoiseBuffer.cache.sampleRate === ctx.sampleRate) {
    return ambientNoiseBuffer.cache;
  }
  const frames = ctx.sampleRate * 4;
  const buf = ctx.createBuffer(1, frames, ctx.sampleRate);
  const d = buf.getChannelData(0);
  // pink-ish: a cheap one-pole cascade, which sounds far less harsh than
  // white and costs nothing to generate
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < frames; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99765 * b0 + w * 0.0990460;
    b1 = 0.96300 * b1 + w * 0.2965164;
    b2 = 0.57000 * b2 + w * 1.0526913;
    d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.22;
  }
  ambientNoiseBuffer.cache = buf;
  return buf;
}

function stopAmbient() {
  if (!__ambient) return;
  try { __ambient.nodes.forEach((n) => { try { n.stop && n.stop(); } catch {} try { n.disconnect(); } catch {} }); } catch {}
  __ambient = null;
}

/** Starts (or swaps) the bed. Idempotent for the same scene, so the
 *  visibility handler can call it freely. */
function startAmbient(sceneId) {
  const buses = getBuses();
  if (!buses) return;
  if (!sceneId || sceneId === "off" || !isSoundOn()) { stopAmbient(); return; }
  if (__ambient && __ambient.id === sceneId) return;
  stopAmbient();

  const { ctx } = buses;
  const nodes = [];
  const now = ctx.currentTime;

  // v67: every scene is now a bed of LAYERS rather than one filter on one
  // noise source. That is the whole difference between "hiss" and "rain":
  // a single band of noise has no body and no movement, and the ear hears a
  // recording of nothing. Each helper below adds one layer and returns its
  // own gain so it can fade in with the rest.
  const bed = ctx.createGain();
  bed.gain.value = 0;
  bed.connect(buses.ambient);
  nodes.push(bed);

  /** Filtered noise: the body of every scene. */
  const noise = ({ type = "bandpass", freq = 1000, q = 0.7, gain = 0.2, lfo = 0, depth = 0, rate = 0.08 }) => {
    const src = ctx.createBufferSource();
    src.buffer = ambientNoiseBuffer(ctx);
    src.loop = true;
    const filt = ctx.createBiquadFilter();
    filt.type = type;
    filt.frequency.value = freq;
    filt.Q.value = q;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(filt); filt.connect(g); g.connect(bed);
    src.start(now);
    nodes.push(src, filt, g);
    if (lfo) {
      // a slow wander on the filter: this is what stops a bed sounding like
      // a loop. rate is in Hz, depth in Hz of filter travel.
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.frequency.value = lfo;
      og.gain.value = depth;
      o.connect(og); og.connect(filt.frequency);
      o.start(now);
      nodes.push(o, og);
    }
    // the source comes back too: the tape scene has to reach its detune
    return { gain: g, src, filt };
  };

  /** A steady tone: hum, drone, the floor under the noise. */
  const tone = ({ freq = 60, type = "sine", gain = 0.05, detune = 0, wobble = 0, wobbleDepth = 0 }) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    if (detune) o.detune.value = detune;
    g.gain.value = gain;
    o.connect(g); g.connect(bed);
    o.start(now);
    nodes.push(o, g);
    if (wobble) {
      const l = ctx.createOscillator();
      const lg = ctx.createGain();
      l.frequency.value = wobble;
      lg.gain.value = wobbleDepth;
      l.connect(lg); lg.connect(g.gain);
      l.start(now);
      nodes.push(l, lg);
    }
    return g;
  };

  /** Amplitude movement for a layer: what makes rain surge instead of sit. */
  const swell = (target, rate, depth) => {
    const l = ctx.createOscillator();
    const lg = ctx.createGain();
    l.frequency.value = rate;
    lg.gain.value = depth;
    l.connect(lg); lg.connect(target.gain);
    l.start(now);
    nodes.push(l, lg);
  };

  if (sceneId === "rain") {
    // three bands: the hiss of drops hitting, the body of the fall, and the
    // low wash of water on a surface. Swells are deliberately out of step so
    // they never line up into an audible pulse.
    const hiss = noise({ type: "highpass", freq: 2600, q: 0.5, gain: 0.11, lfo: 0.07, depth: 400 });
    const body = noise({ type: "bandpass", freq: 900, q: 0.4, gain: 0.16, lfo: 0.05, depth: 180 });
    noise({ type: "lowpass", freq: 260, q: 0.6, gain: 0.1, lfo: 0.03, depth: 60 });
    swell(hiss.gain, 0.11, 0.03);
    swell(body.gain, 0.037, 0.035);
  } else if (sceneId === "room") {
    // a fan, and the mains hum of the rack it sits in: 50Hz plus its second
    // and third harmonics, because a single sine reads as a test tone
    noise({ type: "bandpass", freq: 620, q: 0.35, gain: 0.1, lfo: 0.04, depth: 120 });
    const air = noise({ type: "lowpass", freq: 1800, q: 0.5, gain: 0.05, lfo: 0.06, depth: 200 });
    tone({ freq: 50, gain: 0.035 });
    tone({ freq: 100, gain: 0.018 });
    tone({ freq: 150, gain: 0.008 });
    swell(air.gain, 0.09, 0.018);
  } else if (sceneId === "tape") {
    // hiss with the top rolled off, plus wow (slow) and flutter (fast and
    // very shallow). Both act on the source detune, which is what actually
    // moves the pitch the way a worn capstan does.
    const tapeLayer = noise({ type: "lowpass", freq: 3400, q: 0.4, gain: 0.14, lfo: 0.02, depth: 300 });
    noise({ type: "highpass", freq: 5200, q: 0.5, gain: 0.015 });
    tone({ freq: 62, gain: 0.02, wobble: 0.13, wobbleDepth: 0.012 });
    // wow acts on the SOURCE's detune, in cents. Connecting it to a gain node
    // instead would have injected a 0.27Hz signal into the audio path as a
    // slow DC thump -- audible, and not tape.
    const wow = ctx.createOscillator();
    const wowG = ctx.createGain();
    wow.frequency.value = 0.27;
    wowG.gain.value = 11;                     // cents
    wow.connect(wowG);
    wowG.connect(tapeLayer.src.detune);
    wow.start(now);
    nodes.push(wow, wowG);
  } else {
    // night: a deep drone with a slow beat between two detuned tones, and
    // almost nothing else -- the quietest scene, which is the point
    noise({ type: "lowpass", freq: 220, q: 0.6, gain: 0.07, lfo: 0.02, depth: 30 });
    // a whisper of air above the drone: without it the scene is a hum alone,
    // which reads as a fault rather than as quiet
    noise({ type: "bandpass", freq: 760, q: 0.9, gain: 0.012, lfo: 0.015, depth: 90 });
    tone({ freq: 55, gain: 0.045 });
    tone({ freq: 55, gain: 0.03, detune: 7 });   // the beat
    tone({ freq: 82.5, gain: 0.012 });
  }

  // one slow fade for the whole bed, so a swap never clicks
  bed.gain.setTargetAtTime(1, now, 0.9);
  __ambient = { id: sceneId, nodes };
}

function ambientPlaying() {
  return __ambient ? __ambient.id : null;
}

function useSoundToggle() {
  const [on, setOn] = useState(isSoundOn());
  const toggle = () => {
    const next = !on;
    setOn(next);
    setSoundOn(next);
    // the mute button has to take the ambient bed with it, or muting the app
    // leaves the one sound that never stops still playing
    if (next) {
      playTone([{ freq: 720, dur: 0.05, gain: 0.04 }]);
      startAmbient(loadSoundCfg().ambient);
    } else {
      stopAmbient();
      stopAlarm();
    }
  };
  return [on, toggle];
}

/** Owns the ambient bed for the life of the app.
 *
 *  Two rules it exists to enforce:
 *    * it never starts on its own — `off` is the default, and a task app
 *      that begins humming unprompted is one you uninstall;
 *    * it stops when the app is backgrounded. An audio graph left running
 *      behind a locked screen is battery drain that nobody will ever
 *      attribute to the right cause.
 */
function useAmbient() {
  const [cfg, setCfgState] = useState(loadSoundCfg);

  useEffect(() => {
    saveSoundCfg(cfg);
    applySoundCfg(cfg);
    if (document.hidden) stopAmbient();
    else startAmbient(isSoundOn() ? cfg.ambient : "off");
  }, [cfg]);

  useEffect(() => {
    const onVis = () => {
      if (document.hidden) { stopAmbient(); stopAlarm(); }
      else startAmbient(isSoundOn() ? loadSoundCfg().ambient : "off");
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      stopAmbient();
    };
  }, []);

  const setCfg = useCallback((patch) => setCfgState((c) => ({ ...c, ...patch })), []);
  return [cfg, setCfg];
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
function RadarChart({ axes, size = 220, maxValue, onPick, picked }) {
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
        const isPicked = picked === (ax.key || i);
        return (
          <g key={ax.key || i}>
            <circle
              cx={dotPt[0]}
              cy={dotPt[1]}
              r={isPicked ? (n > 6 ? 5 : 6) : (n > 6 ? 2.8 : 3.5)}
              fill={negative ? "none" : (ax.color || "#5EEAD4")}
              stroke={negative ? "var(--danger)" : "none"}
              strokeWidth={negative ? 1.4 : 0}
              style={{ transition: "cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1), r 140ms ease" }}
            />

            <text
              x={labelPt[0]}
              y={labelPt[1]}
              textAnchor={anchor}
              dominantBaseline="middle"
              className={`radar-label ${negative ? "radar-label-neg" : ""} ${isPicked ? "on" : ""}`}
              style={onPick ? { cursor: "pointer" } : undefined}
              onClick={onPick ? () => onPick(ax) : undefined}
            >
              {negative ? `${ax.label} ↓` : ax.label}
            </text>
          </g>
        );
      })}

      {/* Tap targets are WEDGES, not circles on the dots.
          A dot sits at a radius proportional to its value, so on a new save
          -- or any save with several empty axes -- all ten collapse into a
          26px huddle at the centre and their round hit areas overlap. Tapping
          "Mind" reliably opened "Creative". A wedge owns a direction instead
          of a point, so every axis has an unambiguous region however small
          its value, and the region is finger-sized by construction. */}
      {onPick && axes.map((ax, i) => {
        const half = Math.PI / n;
        const a0 = angleFor(i) - half, a1 = angleFor(i) + half;
        const R = r * 1.42;
        const x0 = cx + Math.cos(a0) * R, y0 = cy + Math.sin(a0) * R;
        const x1 = cx + Math.cos(a1) * R, y1 = cy + Math.sin(a1) * R;
        const sweep = 2 * half > Math.PI ? 1 : 0;
        return (
          <path
            key={`hit-${ax.key || i}`}
            className="radar-hit"
            d={`M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${R.toFixed(1)},${R.toFixed(1)} 0 ${sweep} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z`}
            fill="transparent"
            style={{ cursor: "pointer" }}
            onClick={() => onPick(ax)}
            role="button"
            tabIndex={0}
            aria-label={`${ax.label}: ${ax.value} XP`}
          />
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
              const isNow = nowMinutes >= start && nowMinutes < start + r.duration;
              // v43: three states, not a spectrum -- the day is not a rainbow
              const color = done ? "#39D7BE" : isNow ? "var(--accent2)" : "#38414D";
              // visible slice of this block within the scroll window
              const visL = Math.max(left, scrollX);
              const visR = Math.min(left + width, scrollX + viewportW);
              const visW = Math.max(0, visR - visL);
              const showLabel = visW > 38;
              // nudge the label right when the block starts off-screen
              const labelInset = Math.max(0, Math.min(scrollX - left, width - 46));
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
                    background: color,
                    opacity: done ? 0.75 : 1,
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

            {/* The line now carries its own clock. Position was measured
                accurate to the minute at 05:30 / 14:20 / 23:10, but a bare
                line can only be checked against hour ticks by eye -- so if
                it ever disagrees with the titlebar, the screenshot proves
                it instead of inviting a guess. */}
            <div className="timeline-now" style={{ left: nowX }}>
              <span className="timeline-now-time">{minutesToLabel(nowMinutes)}</span>
            </div>
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

/** The wordmark types itself once per session, then holds a blinking block
 *  cursor. Deliberately short (~500ms total) and deliberately once: an
 *  animation you see on every tab change stops being charm and becomes a
 *  wait. Honours prefers-reduced-motion by skipping straight to the end.
 */
function TypedName({ text = "tasks.sh" }) {
  const reduced = typeof matchMedia === "function" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced || n >= text.length) return;
    const t = setTimeout(() => setN((v) => v + 1), 55);
    return () => clearTimeout(t);
  }, [n, reduced, text.length]);

  return (
    <span className="titlebar-name">
      {text.slice(0, n)}
      <span className={`type-caret ${n >= text.length ? "idle" : ""}`} />
    </span>
  );
}

/** v44: the tab bar moved to the bottom and became icons.
 *
 *  Inline SVG rather than a font or an image set: the service worker would
 *  otherwise have one more thing to precache, and an icon that 404s is a
 *  navigation bar with a hole in it. 24px viewBox, 1.8 stroke, currentColor
 *  so themes tint them for free.
 */
const TAB_ICONS = {
  today: "M4 7h16M4 12h16M4 17h10",
  tasks: "M9 6h11M9 12h11M9 18h11M4.5 6l1 1 2-2M4.5 12l1 1 2-2M4.5 18l1 1 2-2",
  routines: "M12 7v5l3 2M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z",
  vault: "M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM12 9.5v5M9.5 12h5",
  quest: "M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8L12 3z",
  tools: "M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6 1.4 1.4 2.6-2.6a4 4 0 0 1-4.4-4.4z",
  pet: "M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20z",
};

function TabIcon({ id }) {
  const d = TAB_ICONS[id] || TAB_ICONS.today;
  return (
    <svg viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" focusable="false">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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

function RoutineRow({ routine, status, index, total = 1, nowMinutes = 0, onDelete, onToggleToday, onSave }) {
  const startMin = timeToMinutes(routine.time);
  const endMin = startMin + routine.duration;
  const progressPct = routine.duration > 0
    ? Math.max(0, Math.min(100, ((nowMinutes - startMin) / routine.duration) * 100))
    : 0;
  const { streak, freezeUsed } = streakFreezeInfo(routine.history);
  const doneToday = (routine.history || []).includes(getISTDateString(0));

  /** v55: the last seven days as seven dots.
   *
   *  A streak number says "12" and tells you nothing about the shape of the
   *  week; seven dots tell you instantly whether you are steady or whether
   *  you did six days and stopped. Oldest on the left, today on the right,
   *  which is the direction a week is read in. */
  const week = useMemo(() => last7Days(routine.history), [routine.history]);

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
        className={`routine-row ${status} edge`}
        style={{
          transform: `translateX(${dragX}px)`,
          transition: draggingRef.current ? "none" : "transform 220ms cubic-bezier(.65,0,.35,1)",
          ...cardStateVars(doneToday ? "done" : null),
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        onPointerLeave={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div className="routine-line">
          <span className={`routine-node ${doneToday ? "quest-done" : ""}`} />
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

            {/* v55: the week, at a glance. Seven dots cost one line and say
                more than the streak number above them. */}
            <div className="routine-week" aria-label={`${week.filter((w) => w.on).length} of the last 7 days`}>
              {week.map((w) => (
                <span
                  key={w.d}
                  className={`rw-dot ${w.on ? "on" : ""} ${w.today ? "today" : ""}`}
                  title={w.d}
                />
              ))}
              <span className="rw-count">{week.filter((w) => w.on).length}/7</span>
            </div>

            {/* only the routine you are actually inside gets a progress bar --
                a row of full/empty bars on every card is decoration, not data */}
            {status === "current" && (
              <div className="routine-progress">
                <span className="rp-fill" style={{ width: `${Math.round(progressPct)}%` }} />
              </div>
            )}
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
            total={sorted.length}
            status={r.id === currentId ? "current" : r.id === nextId ? "next" : "idle"}
            nowMinutes={nowMinutes}
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

/** v44: slimmed to the two things that are not features -- your backup and
 *  your build.
 *
 *  Habits, projects and notes were removed from this screen at the owner's
 *  request. The UI is gone; the DATA is not. `tasksh.vaulthabits.v1`,
 *  `tasksh.projects.v1` and `tasksh.notes.v1` are untouched in
 *  localStorage and still ride along in every export and cloud snapshot,
 *  so putting the sections back is a revert, not a recovery.
 */
/** The sound panel (v47).
 *
 *  It lives in the vault rather than behind the titlebar speaker because the
 *  speaker's one job is muting in a hurry — putting a settings sheet behind
 *  it would cost a tap at exactly the moment you cannot afford one. The
 *  vault had room since v44 took three sections out of it.
 */
function SoundRow() {
  const [cfg, setCfg] = useAmbient();
  const [on, toggle] = useSoundToggle();
  const [ringing, setRinging] = useState(false);
  useEffect(() => () => stopAlarm(), []);

  const demoAlarm = () => {
    if (ringing) { stopAlarm(); setRinging(false); return; }
    setRinging(true);
    ringAlarm(cfg.alarmSeconds);
    setTimeout(() => setRinging(false), cfg.alarmSeconds * 1000 + 300);
  };

  return (
    <>
      <div className="section-header"><span>SOUND</span></div>
      <div className="snd">
        <button className={`snd-mute ${on ? "on" : ""}`} onClick={toggle}>
          {on ? "sound is on" : "muted"}
        </button>

        <label className="snd-slider">
          <span className="snd-label">volume</span>
          <input
            type="range" min="0" max="100" step="5" value={cfg.volume}
            onChange={(e) => setCfg({ volume: +e.target.value })}
          />
          <span className="snd-val">{cfg.volume}</span>
        </label>

        <div className="snd-sub">AMBIENT</div>
        <div className="snd-scenes">
          {AMBIENT_SCENES.map((sc) => (
            <button
              key={sc.id}
              className={cfg.ambient === sc.id ? "on" : ""}
              onClick={() => { setCfg({ ambient: sc.id }); sound.click(); }}
              title={sc.desc}
            >
              {sc.label}
            </button>
          ))}
        </div>
        <div className="snd-hint">
          {(AMBIENT_SCENES.find((x) => x.id === cfg.ambient) || {}).desc}
          {cfg.ambient !== "off" && " · stops when the app is in the background"}
        </div>

        {cfg.ambient !== "off" && (
          <label className="snd-slider">
            <span className="snd-label">bed level</span>
            <input
              type="range" min="0" max="100" step="5" value={cfg.ambientVolume}
              onChange={(e) => setCfg({ ambientVolume: +e.target.value })}
            />
            <span className="snd-val">{cfg.ambientVolume}</span>
          </label>
        )}

        <div className="snd-sub">POMODORO RING</div>
        <div className="snd-scenes">
          {[[0, "silent"], [3, "3s"], [10, "10s"], [20, "20s"]].map(([v, l]) => (
            <button key={v} className={cfg.alarmSeconds === v ? "on" : ""}
                    onClick={() => { setCfg({ alarmSeconds: v }); sound.click(); }}>{l}</button>
          ))}
          <button className={`snd-test ${ringing ? "on" : ""}`} onClick={demoAlarm}>
            {ringing ? "stop" : "test"}
          </button>
        </div>
        <div className="snd-hint">
          the in-app ring only fires while the app is open. the push
          notification is the one that works with the screen off.
        </div>
      </div>
    </>
  );
}

/** How much of this device's storage the app is actually using.
 *
 *  localStorage is a hard ~5MB and the app writes to it constantly: routines,
 *  quests, thirty-odd daily items, expenses, and a whole game save with a roll
 *  history. When writes start failing the app degrades silently (every write
 *  is wrapped in try/catch, on purpose), so the one screen where you would
 *  look for the problem had nothing to show. This reads, totals and ranks the
 *  keys -- it never writes.
 */
function useStoreBreakdown() {
  const [state, setState] = useState(() => readStore());
  useEffect(() => {
    // recompute when the tab is shown, and again whenever the page regains
    // focus -- that is when data has usually changed
    setState(readStore());
    const onShow = () => setState(readStore());
    window.addEventListener("focus", onShow);
    return () => window.removeEventListener("focus", onShow);
  }, []);
  return state;
}

function readStore() {
  const entries = [];
  let total = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith("tasksh.")) continue;
      const v = localStorage.getItem(k) || "";
      // UTF-16: roughly two bytes per character, which is what a browser quota
      // counts. Close enough to be useful, and said to be an estimate.
      const bytes = (k.length + v.length) * 2;
      entries.push({ key: k, bytes, chars: v.length });
      total += bytes;
    }
  } catch { /* storage disabled entirely: report nothing rather than throw */ }
  entries.sort((a, b) => b.bytes - a.bytes);
  return { entries, total, count: entries.length };
}

const STORE_QUOTA_BYTES = 5 * 1024 * 1024;

function StoreRow() {
  const { entries, total, count } = useStoreBreakdown();
  const frac = Math.min(1, total / STORE_QUOTA_BYTES);
  const kb = (b) => (b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : `${(b / 1048576).toFixed(2)} MB`);
  return (
    <details className="store-row">
      <summary>
        <span className="store-head">
          <span className="store-title">STORAGE</span>
          <span className="store-total">{kb(total)} · {count} key{count === 1 ? "" : "s"}</span>
        </span>
        <span className="store-bar"><i style={{ width: `${Math.max(2, frac * 100)}%` }} /></span>
        <span className="store-sub">
          {frac > 0 && frac < 0.01 ? "under 1%" : `about ${Math.round(frac * 100)}%`} of the ~5 MB a browser gives one site
        </span>
      </summary>
      <div className="store-list">
        {entries.length === 0 && <div className="store-empty">nothing stored on this device yet</div>}
        {entries.map((e) => (
          <div className="store-line" key={e.key}>
            <span className="store-key">{e.key.replace(/^tasksh\./, "")}</span>
            <span className="store-size">{kb(e.bytes)}</span>
            <span className="store-share">{total ? Math.round((e.bytes / total) * 100) : 0}%</span>
          </div>
        ))}
      </div>
      <div className="store-foot">estimate: two bytes a character, which is what a quota counts</div>
    </details>
  );
}

function VaultView() {
  return (
    <div className="task-list vault-scroll">
      <CloudBackupRow />
      <AppUpdateRow />
      <SoundRow />
      <StoreRow />
      <pre className="cap-note">
        habits, projects and notes moved out of here in v44. habits live on
        the quest tab; notes are on today. nothing was ever deleted.
      </pre>
    </div>
  );
}

// ============================================================
// QUEST TAB — gamified XP system: good/bad habits, life areas,
// reward center. New accent used only here: violet #8B9CF7
// (self-development area), kept consistent with the rest of the palette.
// ============================================================

/** v52: ONE layer of tags, not two.
 *
 *  v26 split categories into 4 fixed AREAS plus 10 editable SUB_AREAS beneath
 *  them, and a quest belonged to exactly one of each. That was two taxonomies
 *  to keep straight, it put a tag called "Deep Work" next to a quest called
 *  "Deep Work", and the fixed four could not be changed without a release.
 *
 *  Now there is a single editable list of tags, and a quest can carry more
 *  than one. The defaults are the owner's five.
 */
const DEFAULT_TAGS = [
  { key: "work",       label: "Work",       color: "#5EEAD4" },
  { key: "body",       label: "Body",       color: "#F5A623" },
  { key: "health",     label: "Health",     color: "#F0576B" },
  { key: "self",       label: "Self",       color: "#8B9CF7" },
  { key: "discipline", label: "Discipline", color: "#60A5FA" },
];

/** Colours offered to a tag the user adds later. Chosen to stay distinct
 *  from each other at an 8px radar label on a dark background. */
const TAG_PALETTE = [
  "#5EEAD4", "#F5A623", "#F0576B", "#8B9CF7", "#60A5FA",
  "#7EE787", "#FB7185", "#C084FC", "#34D399", "#FBBF24",
  "#F472B6", "#38BDF8",
];

/** The radar stops being readable somewhere past a dozen vertices -- labels
 *  collide and the polygon turns to mush. Measured: 10 is comfortable at
 *  360px, 13-character labels still fit. */
const MAX_TAGS = 12;

const STORAGE_KEY_TAGS = "tasksh.tags.v1";

function loadTags() {
  const stored = loadStored(STORAGE_KEY_TAGS, null);
  if (!Array.isArray(stored) || !stored.length) return DEFAULT_TAGS;
  const clean = stored
    .filter((t) => t && typeof t.key === "string" && typeof t.label === "string")
    .map((t) => ({
      key: t.key,
      label: String(t.label).slice(0, 14),
      color: /^#[0-9a-fA-F]{6}$/.test(t.color) ? t.color : TAG_PALETTE[0],
    }))
    .slice(0, MAX_TAGS);
  return clean.length ? clean : DEFAULT_TAGS;
}

/** Which tags a quest counts toward.
 *
 *  Reads the new `tags` array, and falls back to migrating the old
 *  `area`/`sub` pair so a v51 backup restores without losing its shape.
 *  Anything it cannot place lands on the first tag rather than vanishing
 *  from the chart.
 */
function habitTags(h, tags = DEFAULT_TAGS) {
  const known = new Set(tags.map((t) => t.key));
  if (Array.isArray(h && h.tags)) {
    const kept = h.tags.filter((k) => known.has(k));
    if (kept.length) return kept;
  }
  const migrated = migrateAreaToTag(h, known);
  return migrated.length ? migrated : [tags[0].key];
}

/** Old four areas -> the new five. `fitness` became `body`; everything the
 *  old scheme called admin-ish consistency is `discipline` now. */
const AREA_TO_TAG = { work: "work", fitness: "body", health: "health", self: "self" };

function migrateAreaToTag(h, known) {
  const out = [];
  const push = (k) => { if (k && known.has(k) && !out.includes(k)) out.push(k); };
  // a few old sub-tags map somewhere other than their parent area
  const SUB_OVERRIDE = {
    screen: "discipline", admin: "discipline", movement: "health",
    spirituality: "self", social: "self", mind: "health",
  };
  if (h && h.sub && SUB_OVERRIDE[h.sub]) push(SUB_OVERRIDE[h.sub]);
  if (h && h.area) push(AREA_TO_TAG[h.area]);
  return out;
}

// ---- habit history (v35) --------------------------------------------------
//
// v34 and earlier kept two lists: goodHabits (history added XP) and badHabits
// (history subtracted it). A date string alone carried the sign, because the
// list it lived in decided what it meant.
//
// v35 merges them. One habit can now be COMPLETED or SLIPPED on the same day,
// so a bare date can no longer say which, and each entry becomes
//
//     { d: "2026-08-15", t: "done" | "slip" }
//
// Old string entries are still read as "done", so a v34 backup restores
// without rewriting anything. normaliseHistory() is the single place that
// knows about both shapes -- nothing else should ever branch on it.

function normaliseHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .map((e) => (typeof e === "string" ? { d: e, t: "done" } : e))
    .filter((e) => e && typeof e.d === "string");
}

function countHist(h, type) {
  return normaliseHistory(h.history).filter((e) => e.t === type).length;
}

/** Reward per completion. Defaults preserve v34 habits unchanged. */
function habitXP(h) { return Math.max(0, +h.xp || 0); }

/** Cost per slip. Independent of the reward on purpose: skipping a workout
 *  should be allowed to cost less than doing it earns. */
function habitPenalty(h) { return Math.max(0, +h.penalty || 0); }

/** Net XP a single habit contributes. The one place the sign is decided. */
function habitNet(h) {
  return habitXP(h) * countHist(h, "done") - habitPenalty(h) * countHist(h, "slip");
}

function habitDoneOn(h, date) {
  return normaliseHistory(h.history).some((e) => e.d === date && e.t === "done");
}
function habitSlipOn(h, date) {
  return normaliseHistory(h.history).some((e) => e.d === date && e.t === "slip");
}

/**
 * Records or clears one mark. A day is either done, slipped, or neither --
 * "I did it and also didn't" is not a state the XP maths can price.
 *
 * Tapping the mark that is already set CLEARS it. Tapping the other one
 * REPLACES it. The distinction matters: an earlier version dropped the day
 * entirely and then re-added, so slipping a completed day and immediately
 * undoing left the day blank rather than done -- a silent loss of a
 * completion, and of a streak.
 */
function markHabit(h, date, type) {
  const hist = normaliseHistory(h.history);
  const cur = hist.find((e) => e.d === date);
  const rest = hist.filter((e) => e.d !== date);
  // same mark twice = clear it; different mark = switch to it
  if (cur && cur.t === type) return { ...h, history: rest.slice(-400) };
  return { ...h, history: [...rest, { d: date, t: type }].slice(-400) };
}

/**
 * Folds a v34 save into the merged shape.
 *
 * A bad habit becomes a habit with NO reward and a penalty equal to its old
 * cost, and every history entry becomes a slip. That is deliberately the
 * arithmetic identity of the old model: earned - lost is unchanged, so nobody
 * gains or loses a level by upgrading. The user can add a reward afterwards
 * if they want "avoided junk food" to be worth something.
 */
function mergeHabitLists(good, bad) {
  const g = (Array.isArray(good) ? good : []).map((h) => ({
    ...h,
    xp: Math.max(0, +h.xp || 0),
    penalty: Math.max(0, +h.penalty || 0),
    history: normaliseHistory(h.history),
  }));

  // The two lists numbered their ids INDEPENDENTLY -- both seed sets start at
  // 1, and so do most real saves. Concatenating them produced two habits with
  // id 1, and every lookup is by id, so marking "Deep Work" also marked "High
  // Screen Time". Re-id any collision; nothing references habit ids across
  // saves except links, which are remapped below.
  const used = new Set(g.map((h) => h.id));
  const remap = new Map();

  const b = (Array.isArray(bad) ? bad : []).map((h) => {
    let id = h.id;
    if (used.has(id)) {
      id = makeId();
      remap.set(h.id, id);
    }
    used.add(id);
    return {
      ...h,
      id,
      xp: Math.max(0, +h.xp2 || 0),
      penalty: Math.max(0, +h.xp || 0),
      history: normaliseHistory(h.history).map((e) => ({ d: e.d, t: "slip" })),
      wasBad: true,
    };
  });

  return [...g, ...b];
}

/** XP on one tag.
 *
 *  OPTION ① -- full credit. A quest tagged Body AND Discipline gives its full
 *  value to BOTH axes. The axes therefore do NOT sum to your total XP, and
 *  they are not meant to: the radar answers "how much effort landed here",
 *  and a workout genuinely was both.
 *
 *  The alternative -- splitting the XP between its tags -- was rejected
 *  because it makes a 2-tag quest worth half per axis, so the chart would
 *  reward you for under-tagging and the data would rot. Your LEVEL still
 *  counts every quest exactly once; only the chart reads differently.
 */
function computeTagXPRaw(tagKey, habits, tags) {
  return (habits || [])
    .filter((h) => habitTags(h, tags).includes(tagKey))
    .reduce((sum, h) => sum + habitNet(h), 0);
}

/** Everything behind one radar vertex, for the tap-a-dot popup.
 *  Pure so the arithmetic can be tested without rendering a chart.
 *
 *  v53: `dailyItems` is whatever daily tasks also land on this axis. They
 *  only ever add -- a daily task you did not do pays nothing, it does not
 *  subtract -- so they contribute to `gained` and `done` and never to
 *  `lost` or `slipped`. */
function axisBreakdown(habits, filterFn, dailyItems) {
  const mine = (habits || []).filter(filterFn);
  let gained = 0, lost = 0, done = 0, slipped = 0;
  for (const h of mine) {
    const d = countHist(h, "done"), sl = countHist(h, "slip");
    gained += habitXP(h) * d;
    lost += habitPenalty(h) * sl;
    done += d;
    slipped += sl;
  }
  const daily = (dailyItems || []).filter((t) => dailyDoneCount(t) > 0);
  for (const t of daily) {
    gained += dailyItemXP(t);
    done += dailyDoneCount(t);
  }
  const raw = gained - lost;
  const rows = mine
    .map((h) => ({ id: h.id, label: h.label, net: habitNet(h), daily: false }))
    .concat(daily.map((t) => ({ id: `d${t.id}`, label: t.text, net: dailyItemXP(t), daily: true })))
    .sort((a, b) => b.net - a.net);
  return {
    count: mine.length + daily.length, gained, lost, done, slipped,
    raw, value: Math.max(0, raw), rows,
    dailyCount: daily.length, dailyXP: daily.reduce((s, t) => s + dailyItemXP(t), 0),
  };
}

/** Floored, so a pure-penalty tag reads as empty rather than inside-out.
 *  The true figure is kept by computeTagXPRaw for the axis popup. */
function computeTagXP(tagKey, habits, tags) {
  return Math.max(0, computeTagXPRaw(tagKey, habits, tags));
}

/** ONE RADAR AXIS (v53): quests plus daily tasks.
 *
 *  Floored on the SUM rather than on each half. A tag sitting at -40 from
 *  slipped quests that then earns +100 from daily tasks reads 60, not 100 --
 *  flooring the quest half first would quietly forgive the penalty, which is
 *  exactly the kind of free money the v51 economy audit was about. */
function tagAxisRaw(tagKey, habits, tags, inventory) {
  return computeTagXPRaw(tagKey, habits, tags) + computeDailyTagXP(tagKey, inventory, tags);
}

function tagAxisXP(tagKey, habits, tags, inventory) {
  return Math.max(0, tagAxisRaw(tagKey, habits, tags, inventory));
}

/** The editable tag list. Habits reference a tag KEY, so renaming or
 *  recolouring never has to rewrite a single quest. */
function useTags() {
  const [tags, setTags] = useState(loadTags);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_TAGS, JSON.stringify(tags)); } catch {}
  }, [tags]);

  const renameTag = useCallback((key, label) => {
    const l = String(label || "").trim().slice(0, 14);
    if (!l) return;
    setTags((prev) => prev.map((t) => (t.key === key ? { ...t, label: l } : t)));
  }, []);

  const recolourTag = useCallback((key, color) => {
    if (!/^#[0-9a-fA-F]{6}$/.test(color)) return;
    setTags((prev) => prev.map((t) => (t.key === key ? { ...t, color } : t)));
  }, []);

  const addTag = useCallback((label) => {
    const l = String(label || "").trim().slice(0, 14);
    if (!l) return;
    setTags((prev) => {
      if (prev.length >= MAX_TAGS) return prev;
      let base = l.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 12) || "tag";
      let key = base, n = 2;
      while (prev.some((t) => t.key === key)) key = `${base}${n++}`;
      // first unused colour, so two new tags are never the same shade
      const used = new Set(prev.map((t) => t.color));
      const color = TAG_PALETTE.find((c) => !used.has(c)) || TAG_PALETTE[prev.length % TAG_PALETTE.length];
      return [...prev, { key, label: l, color }];
    });
  }, []);

  /** Removing a tag must not orphan the quests wearing it, so the caller
   *  hands in a repair function that strips the key from every habit. */
  const removeTag = useCallback((key, repair) => {
    setTags((prev) => (prev.length <= 1 ? prev : prev.filter((t) => t.key !== key)));
    if (repair) repair(key);
  }, []);

  const resetTags = useCallback(() => setTags(DEFAULT_TAGS), []);

  return { tags, renameTag, recolourTag, addTag, removeTag, resetTags };
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

/**
 * Position-based colour for the day's routines: first is red, last is cyan.
 *
 * Interpolates HUE rather than RGB -- a straight RGB lerp from red to cyan
 * passes through grey at the midpoint, which looks like a rendering fault
 * rather than a gradient. Going up through the hue wheel (red → amber →
 * green → cyan) keeps every step saturated and happens to land on the app's
 * existing palette on the way.
 *
 * Saturation and lightness are pinned to the palette's own values so the
 * gradient sits alongside CATEGORY_PALETTE without looking imported.
 */
// The ramp behind ordered cards. Module-level rather than threaded through
// every component: applyTheme sets it once, and gradientHue stays a pure
// function of (index, count) so the existing tests still hold.
let THEME_RAMP = [352, 171];                // red → cyan, the warm way round
function setThemeRamp(ramp) {
  THEME_RAMP = Array.isArray(ramp) && ramp.length === 2 ? ramp : [352, 171];
}

function gradientHue(i, n) {
  const t = n <= 1 ? 0 : Math.min(1, Math.max(0, i / (n - 1)));
  const [from, to] = THEME_RAMP;
  // always travel the short way round the wheel, or a two-stop ramp can
  // detour through half the spectrum and look like a rainbow accident
  let delta = (to - from) % 360;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return (from + t * delta + 360) % 360;
}

function gradientColor(i, n) {
  return hslToHex(gradientHue(i, n), 0.80, 0.64);
}

/* v62: the v40 card wash is gone. It had no call sites -- v43 replaced it
   with cardStateVars and left the function behind, still carrying the only
   multi-stop gradient in the app. Removed rather than flattened: a wash that
   nothing renders cannot be justified even as a solid tint. */

/** v43: state only. No position ramp.
 *
 *  The red->cyan ramp went through three forms -- a tint across the face, a
 *  bloom behind the card, a gradient border -- and none of them earned their
 *  keep. Position in a list is not information worth a colour, and every
 *  version competed with the one colour that IS information: whether the
 *  thing is done.
 *
 *  So: nothing by default, cyan when it is finished, red when it slipped.
 *  Those two are the whole vocabulary now.
 */
function cardStateVars(state) {
  if (state === "done") return { "--edge": "hsla(171, 80%, 55%, 0.85)" };
  if (state === "failed") return { "--edge": "hsla(352, 80%, 60%, 0.85)" };
  return {};   // untouched items inherit the theme's plain border
}

function hslToHex(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] =
    h < 60  ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] :
    h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  const hex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

function colorForId(id) {
  const n = typeof id === "number" ? id : String(id).split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  return CATEGORY_PALETTE[Math.abs(n) % CATEGORY_PALETTE.length];
}

const LEVEL_TITLES = [
  "Novice", "Apprentice", "Adept", "Ranger", "Knight", "Vanguard", "Wizard",
  "Sage", "Champion", "Sentinel", "Archon", "Warlord", "Mystic", "Overlord",
  "Ascendant", "Legend", "Mythic", "Immortal", "Transcendent", "Eternal",
];

// ---- daily tasks as tagged points (v53) -----------------------------------
//
// Until v53 a daily task paid coins and nothing else, so the radar -- which
// reads XP -- could not see them at all. Nine of the twenty things in this
// user's inventory are physical (laps, push-ups, punches, hangs, karate, two
// workouts) and the Body axis still read 2 quests. The work was being done;
// the chart had no way to hear about it.
//
// A daily task now carries `tags` and a `history` of the days it was ticked.
// Its difficulty value is paid TWICE over: once as coins (the spendable
// currency, unchanged) and once as points into every tag it wears. Same
// full-credit rule as quests -- a 2-tag task gives its whole value to both
// axes, because it genuinely was both.
const DIFF_VALUE = { easy: 10, mid: 50, hard: 100 };

/** 400 completions of one task is over a year of it being drawn every single
 *  day -- unreachable with a random three-a-day draw, but bounded rather
 *  than endless. */
const DAILY_HISTORY_MAX = 400;

/** Points one completion of this task is worth. */
function dailyValue(item) {
  return DIFF_VALUE[item && item.diff] || DIFF_VALUE.easy;
}

/** How many times it has ever been completed. */
function dailyDoneCount(item) {
  return Array.isArray(item && item.history) ? item.history.length : 0;
}

/** How many days since a daily task was last completed, and a phrase for it.
 *
 *  The inventory row already said how many times an item had been done and
 *  what it had earned. It never said WHEN -- so an item done twice in 2024
 *  looked identical to one done twice last week, and the list could not be
 *  pruned on evidence. Dates are IST calendar days compared as strings, so
 *  nothing here re-derives a timezone.
 */
function dailyLastDone(item) {
  const hist = (item && item.history) || [];
  if (!hist.length) return null;
  const last = hist.reduce((a, b) => (String(b) > String(a) ? String(b) : String(a)));
  const days = istDaysBetween(last, getISTDateString(0));
  if (days === null) return null;
  return { date: last, days };
}

/** Whole IST calendar days from `from` to `to`. Both are YYYY-MM-DD. */
function istDaysBetween(from, to) {
  const a = Date.parse(`${from}T00:00:00Z`);
  const b = Date.parse(`${to}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return null;
  return Math.round((b - a) / 86400000);
}

/** "today", "yesterday", "9d ago", "3mo ago". Quiet, not cute. */
function daysAgoLabel(days) {
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

/** Lifetime points from one daily task. */
function dailyItemXP(item) {
  return dailyValue(item) * dailyDoneCount(item);
}

/** Which tags a daily task counts toward.
 *
 *  Unlike habitTags there is deliberately NO fallback to the first tag. A
 *  habit always had an area, so inventing one was recovery; a daily task may
 *  genuinely be untagged, and quietly filing "Bring milk" under Work would be
 *  making data up. Untagged tasks still pay coins and still count toward your
 *  level -- they just do not move a radar axis. */
function dailyTags(item, tags) {
  const known = new Set((tags || []).map((t) => t.key));
  return Array.isArray(item && item.tags) ? item.tags.filter((k) => known.has(k)) : [];
}

/** Lifetime daily-task points on one axis. Full credit per tag. */
function computeDailyTagXP(tagKey, inventory, tags) {
  return (inventory || [])
    .filter((t) => dailyTags(t, tags).includes(tagKey))
    .reduce((s, t) => s + dailyItemXP(t), 0);
}

/** Every daily task's points, counted ONCE each -- what the level reads.
 *  A 2-tag task is double-counted on the chart and single-counted here, the
 *  same split quests have had since v52. */
function computeDailyTotalXP(inventory) {
  return (inventory || []).reduce((s, t) => s + dailyItemXP(t), 0);
}

/** Record a completion. Idempotent per day: the board can only pay once, and
 *  a second call for the same day must not mint a second 100 points. */
function logDailyDone(inventory, id, day) {
  return (inventory || []).map((t) => {
    if (t.id !== id) return t;
    const hist = Array.isArray(t.history) ? t.history : [];
    if (hist.includes(day)) return t;
    return { ...t, history: [...hist, day].slice(-DAILY_HISTORY_MAX) };
  });
}

// LEVEL XP -- lifetime progress. Deliberately does NOT subtract reward
// spending: claiming a reward you earned should never demote you or push you
// negative. Before v27 it did both (155 earned - 40 lost - 150 spent = -35 XP
// and a drop from level 2 to level 1), which punished the user for using the
// feature. Bad habits still count against you; that's the point of them.
//
// v53: daily tasks join the total. Each is counted ONCE here no matter how
// many tags it wears, so the level stays an honest "how much did you do"
// while the radar stays an honest "where did it land". The pace roughly
// triples -- a full board is 160/day against a measured habit pace of
// 58.5/day -- which was the user's explicit choice when asked.
function computeTotalXP(habits, inventory) {
  const quests = (habits || []).reduce((s, h) => s + habitNet(h), 0);
  const daily = (inventory || []).reduce(
    (s, t) => s + (DIFF_VALUE[t && t.diff] || DIFF_VALUE.easy)
                * (Array.isArray(t && t.history) ? t.history.length : 0),
    0
  );
  return Math.max(0, quests + daily);
}

// SPENDABLE BALANCE -- what rewards actually cost against. This is the number
// that goes down when you claim something.
/** v44: floored at zero.
 *
 *  Screen Time sat at a negative number because it is a bad habit -- every
 *  slip subtracts and nothing ever adds. A negative axis made the radar
 *  plot inside-out and read as "you are worse than nothing at this", which
 *  is not a thing. The penalty still counts against total XP; it just does
 *  not drag an axis below the floor. */
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
// Cumulative XP required to REACH level L (L >= 1).
//
// v36 REPLACED the v22 curve at the user's request, and deliberately broke the
// old "no save can be retroactively demoted" invariant -- they asked for a
// harder climb and accepted the drop. Grounded in measurement rather than
// taste: their real history is 1755 XP over exactly 30 days (58.5/day), so
// the curve is fitted so that
//
//     level 7   costs more than a month of their actual pace  (so they land on 6)
//     level 60  arrives at roughly two years of the same pace
//
// Sub-quadratic on purpose. The old quadratic put level 60 at 48,675 XP -- and
// doubling it to make the early game harder pushed the final pet form out to
// four and a half years, which is not a goal, it is an asymptote.
const LEVEL_K = 160;      // XP to reach level 2
const LEVEL_P = 1.35;     // curve steepness

function cumulativeXPForLevel(level) {
  if (level <= 1) return 0;
  return Math.round(LEVEL_K * Math.pow(level - 1, LEVEL_P));
}

function levelFromXP(xp) {
  const clamped = Math.max(0, xp);
  let level = Math.max(1, Math.floor(1 + Math.pow(clamped / LEVEL_K, 1 / LEVEL_P)));

  // cumulativeXPForLevel ROUNDS to whole XP, so the closed-form inverse can
  // land a level low exactly on a boundary: level 4 costs round(705.06) = 705,
  // but the inverse of 705 is 3.9998, which floors to 3. Standing on the
  // threshold and being told you have not reached it is the kind of bug people
  // notice immediately. Correct against the real table -- at most one step.
  while (cumulativeXPForLevel(level + 1) <= clamped) level++;
  while (level > 1 && cumulativeXPForLevel(level) > clamped) level--;

  const into = clamped - cumulativeXPForLevel(level);
  const span = cumulativeXPForLevel(level + 1) - cumulativeXPForLevel(level);
  return { level, into, span };
}

// Milestones now land every 10 levels, so an unlock is a real event rather
// than something that happens twice in the first week.
const MILESTONE_EVERY = 10;

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

// 20 titles across a 60-level climb: one every three levels, so the name
// changes often enough to notice without running out at level 21.
function titleForLevel(lvl) {
  const idx = Math.floor((Math.max(1, lvl) - 1) / 3);
  if (idx < LEVEL_TITLES.length) return LEVEL_TITLES[idx];
  const tier = idx - LEVEL_TITLES.length + 2;
  return `${LEVEL_TITLES[LEVEL_TITLES.length - 1]} ${toRoman(tier)}`;
}


const seedGoodHabits = [
  { id: 1, label: "Deep Work", tags: ["work"], desc: "one uninterrupted block, no phone", xp: 40, history: [getISTDateString(0), getISTDateString(-1)] },
  { id: 2, label: "Workout", tags: ["body"], desc: "any real session, however short", xp: 20, history: [getISTDateString(-1)] },
  { id: 3, label: "Healthy Diet", tags: ["health"], desc: "no junk for the whole day", xp: 10, history: [] },
  { id: 4, label: "Reading", tags: ["self"], desc: "a chapter, for yourself not for school", xp: 10, history: [] },
];

const seedBadHabits = [
  { id: 1, label: "High Screen Time", tags: ["discipline"], xp: 20, history: [] },
  { id: 2, label: "Junk Food", tags: ["health"], xp: 20, history: [] },
];

const seedRewards = [
  { id: 1, label: "Watch a movie", cost: 100, claimed: [] },
  { id: 2, label: "Order takeout", cost: 150, claimed: [] },
  { id: 3, label: "Take a day off", cost: 250, claimed: [] },
];

// ---- habit card (v35) ------------------------------------------------------
// One card replaces GoodHabitCard and BadHabitCard. Every habit now has two
/** Builds one month of a quest's history as calendar rows (#10).
 *
 *  Pure, and takes `today` rather than reading the clock, so the tests can
 *  pin a date instead of hoping the suite never runs across midnight.
 *  Returns 6 rows of 7 cells, Monday-first; cells outside the month are null.
 */
function habitMonthGrid(habit, year, month, today) {
  const marks = {};
  for (const e of normaliseHistory(habit && habit.history)) marks[e.d] = e.t;
  const pad = (v) => String(v).padStart(2, "0");
  const first = new Date(Date.UTC(year, month - 1, 1));
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
  // getUTCDay() is Sunday-first; the grid is Monday-first
  const lead = (first.getUTCDay() + 6) % 7;

  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${year}-${pad(month)}-${pad(d)}`;
    cells.push({ d: ds, day: d, state: marks[ds] || null, today: ds === today, future: ds > today });
  }
  while (cells.length % 7 !== 0) cells.push(null);
  while (cells.length < 42) cells.push(null);

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  return rows;
}

/** Counts for the month shown, plus the all-time figures underneath it. */
function habitHistoryStats(habit, year, month) {
  const entries = normaliseHistory(habit && habit.history);
  const prefix = `${year}-${String(month).padStart(2, "0")}`;
  const inMonth = entries.filter((e) => e.d.startsWith(prefix));
  const tally = (list, t) => list.filter((e) => e.t === t).length;
  const doneDays = entries.filter((e) => e.t === "done").map((e) => e.d);
  return {
    monthDone: tally(inMonth, "done"),
    monthSlip: tally(inMonth, "slip"),
    allDone: tally(entries, "done"),
    allSlip: tally(entries, "slip"),
    streak: computeStreak(doneDays),
    best: longestRun(doneDays),
  };
}

/** Longest run of consecutive days ever recorded. Sorted-set walk rather
 *  than a date-by-date scan, so a two-year history is still instant. */
function longestRun(days) {
  const set = [...new Set(days)].sort();
  let best = 0, run = 0, prev = null;
  const next = (ds) => {
    const [y, m, d] = ds.split("-").map(Number);
    const t = new Date(Date.UTC(y, m - 1, d) + 86400000);
    return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
  };
  for (const d of set) {
    run = prev && next(prev) === d ? run + 1 : 1;
    if (run > best) best = run;
    prev = d;
  }
  return best;
}

const MONTH_NAMES = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** Steps a {year, month} cursor without ever producing month 0 or 13. */
function shiftMonth(cursor, delta) {
  const m0 = cursor.year * 12 + (cursor.month - 1) + delta;
  return { year: Math.floor(m0 / 12), month: (m0 % 12) + 1 };
}

/** A sideways drag that can mean two different things (#3).
 *
 *  Right = done, left = slipped, matching the two buttons it replaces. The
 *  axis is locked on the first few pixels of movement: a gesture that starts
 *  vertical is a scroll and is handed straight back to the browser, which is
 *  the difference between a list that feels native and one that fights you.
 */
function useSwipeMark({ onRight, onLeft, threshold = 64, enabled = true }) {
  const [dx, setDx] = useState(0);
  const dragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });
  const axis = useRef(null);
  const moved = useRef(false);

  const down = (e) => {
    if (!enabled) return;
    dragging.current = true;
    moved.current = false;
    axis.current = null;
    start.current = { x: e.clientX, y: e.clientY };
  };

  const move = (e) => {
    if (!dragging.current) return;
    const ddx = e.clientX - start.current.x;
    const ddy = e.clientY - start.current.y;
    if (axis.current === null) {
      if (Math.abs(ddx) < 6 && Math.abs(ddy) < 6) return;
      axis.current = Math.abs(ddx) > Math.abs(ddy) ? "x" : "y";
      if (axis.current === "y") { dragging.current = false; setDx(0); return; }
    }
    if (axis.current !== "x") return;
    if (Math.abs(ddx) > 4) moved.current = true;
    // resistance past the trigger point so the row cannot be flung off screen
    const capped = Math.sign(ddx) * Math.min(Math.abs(ddx), threshold + (Math.abs(ddx) - threshold) * 0.35);
    setDx(Math.abs(ddx) > threshold ? capped : ddx);
  };

  const end = () => {
    if (!dragging.current) { setDx(0); return; }
    dragging.current = false;
    const d = dx;
    setDx(0);
    if (d >= threshold && onRight) onRight();
    else if (d <= -threshold && onLeft) onLeft();
  };

  const cancel = () => { dragging.current = false; setDx(0); };

  return {
    dx,
    armed: dx >= threshold ? "right" : dx <= -threshold ? "left" : null,
    dragging: dragging.current,
    handlers: {
      onPointerDown: down,
      onPointerMove: move,
      onPointerUp: end,
      onPointerCancel: cancel,
      onPointerLeave: end,
    },
  };
}

/** The per-quest calendar (#10). The Vault's card chrome was reused here --
 *  the feature went away, the shape it left behind did not. */
function QuestHistory({ habit, onClose }) {
  const todayStr = getISTDateString(0);
  const [y, m] = todayStr.split("-").map(Number);
  const [cursor, setCursor] = useState({ year: y, month: m });
  const rows = useMemo(() => habitMonthGrid(habit, cursor.year, cursor.month, todayStr), [habit, cursor, todayStr]);
  const stats = useMemo(() => habitHistoryStats(habit, cursor.year, cursor.month), [habit, cursor]);
  const atToday = cursor.year === y && cursor.month === m;

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet qh-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <span className="sheet-title">{habit.label}</span>
          <button className="sheet-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="qh-nav">
          <button onClick={() => { setCursor(shiftMonth(cursor, -1)); sound.click(); }} aria-label="Previous month">‹</button>
          <span className="qh-month">{MONTH_NAMES[cursor.month - 1]} {cursor.year}</span>
          <button disabled={atToday} onClick={() => { setCursor(shiftMonth(cursor, 1)); sound.click(); }} aria-label="Next month">›</button>
        </div>

        <div className="qh-dow">
          {["m", "t", "w", "t", "f", "s", "s"].map((d, i) => <span key={i}>{d}</span>)}
        </div>

        <div className="qh-grid">
          {rows.map((row, ri) => row.map((cell, ci) => (
            <span
              key={`${ri}-${ci}`}
              className={`qh-cell ${cell ? "" : "blank"} ${cell && cell.state ? cell.state : ""} ${cell && cell.today ? "today" : ""} ${cell && cell.future ? "future" : ""}`}
              title={cell ? `${cell.d}: ${cell.state || "nothing recorded"}` : ""}
            >
              {cell ? cell.day : ""}
            </span>
          )))}
        </div>

        <div className="qh-key">
          <span><i className="qh-swatch done" /> completed</span>
          <span><i className="qh-swatch slip" /> skipped</span>
          <span><i className="qh-swatch" /> nothing</span>
        </div>

        <div className="qh-stats">
          <div><span className="qh-stat-n">{stats.monthDone}</span><span className="qh-stat-l">done this month</span></div>
          <div><span className="qh-stat-n">{stats.monthSlip}</span><span className="qh-stat-l">skipped</span></div>
          <div><span className="qh-stat-n">{stats.streak}</span><span className="qh-stat-l">streak now</span></div>
          <div><span className="qh-stat-n">{stats.best}</span><span className="qh-stat-l">best run</span></div>
        </div>
        <div className="qh-all">{stats.allDone} completed and {stats.allSlip} skipped all time</div>
      </div>
    </div>
  );
}

// marks: ✓ did it (adds xp) and ✗ did the opposite (subtracts penalty). A
// habit with penalty 0 behaves exactly like a v34 good habit; one with xp 0
// behaves exactly like a v34 bad habit. The old split was never a difference
// in kind, only in which list a row happened to live in.
/** A habit's last seven days, in three states rather than two.
 *
 *  Routines can only be done or not, so their strip is binary. A quest can
 *  also SLIP, and the difference between "did not do it" and "did the
 *  opposite" is the whole point of a paired quest -- so a slipped day is red
 *  here, not an empty square. Today is ringed so the strip is never ambiguous
 *  about which end is now.
 */
function HabitWeek({ habit }) {
  const map = useMemo(() => {
    const m = {};
    for (const e of normaliseHistory(habit.history)) m[e.d] = e.t;
    return m;
  }, [habit.history]);
  const days = last7Days(Object.keys(map)).map((d) => ({ ...d, t: map[d.d] || null }));
  const done = days.filter((d) => d.t === "done").length;
  const slips = days.filter((d) => d.t === "slip").length;
  return (
    <div className="habit-week" aria-label={`${done} of the last 7 days done, ${slips} slipped`}>
      {days.map((d) => (
        <span key={d.d} className={`hw-dot ${d.t || ""} ${d.today ? "today" : ""}`} title={`${d.d}${d.t ? ` — ${d.t}` : ""}`} />
      ))}
      <span className="hw-count">
        {done}/7{slips > 0 ? ` · ${slips}✗` : ""}
      </span>
    </div>
  );
}

function HabitCard({ habit, tags = DEFAULT_TAGS, allHabits = [], onMark, onDelete, onSave, onHistory,
                    index = 0, total = 1 }) {
  const today = getISTDateString(0);
  const doneToday = habitDoneOn(habit, today);
  const slipToday = habitSlipOn(habit, today);

  const [fx, setFx] = useState(0);
  const fireFx = () => { if (!doneToday) setFx((n) => n + 1); };

  // v45: swipe right to complete, left to fail. The two buttons stay -- a
  // gesture nobody told you about is not a feature, it is a secret.
  const swipe = useSwipeMark({
    onRight: () => { fireFx(); sound.complete(); onMark(habit.id, "done", true); },
    onLeft: () => { sound.fail(); onMark(habit.id, "slip", true); },
  });
  // streaks count completions only -- a slip is not a quiet day, it breaks it
  const { streak, freezeUsed } = streakFreezeInfo(
    normaliseHistory(habit.history).filter((e) => e.t === "done").map((e) => e.d)
  );
  const mine = habitTags(habit, tags);
  const tagObjs = mine.map((k) => tags.find((t) => t.key === k)).filter(Boolean);
  const area = tagObjs[0] || tags[0];

  // Delete arms first, then confirms. A habit carries months of history and
  // the button sits next to edit on a small row -- a single mis-tap used to
  // destroy the lot with no undo anywhere in the app.
  const [armed, setArmed] = useState(false);
  const armTimer = useRef(null);
  useEffect(() => () => { if (armTimer.current) clearTimeout(armTimer.current); }, []);
  const askDelete = () => {
    if (armed) { onDelete(habit.id); return; }
    setArmed(true);
    sound.click();
    if (armTimer.current) clearTimeout(armTimer.current);
    armTimer.current = setTimeout(() => { setArmed(false); armTimer.current = null; }, 4000);
  };

  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(habit.label);
  const [eTags, setETags] = useState(() => habitTags(habit, tags));
  const [eDesc, setEDesc] = useState(habit.desc || "");
  const [eXP, setEXP] = useState(habitXP(habit));
  const [ePen, setEPen] = useState(habitPenalty(habit));
  const [eOpp, setEOpp] = useState(habit.opposite || "");

  const openEdit = () => {
    setELabel(habit.label);
    setETags(habitTags(habit, tags));
    setEDesc(habit.desc || "");
    setEXP(habitXP(habit));
    setEPen(habitPenalty(habit));
    setEOpp(habit.opposite || "");
    setEditing(true);
  };

  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(habit.id, {
      label: text, tags: eTags, desc: eDesc.trim().slice(0, 90),
      xp: Math.max(0, +eXP || 0),
      penalty: Math.max(0, +ePen || 0),
      opposite: eOpp || null,
    });
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
          {/* v52: tags are a multi-select. A quest may wear more than one,
              and each one gets the FULL value on the radar -- see
              computeTagXPRaw for why that is the honest choice. Never zero:
              deselecting the last tag would drop the quest off the chart. */}
          <div className="edit-row edit-row-tags">
            {tags.map((t) => {
              const on = eTags.includes(t.key);
              return (
                <button
                  key={t.key}
                  type="button"
                  className={`area-chip ${on ? "active" : ""}`}
                  style={{ "--ac": t.color }}
                  onClick={() => setETags((prev) =>
                    prev.includes(t.key)
                      ? (prev.length > 1 ? prev.filter((k) => k !== t.key) : prev)
                      : [...prev, t.key])}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          {eTags.length > 1 && (
            <div className="edit-tag-note">
              counts in full toward {eTags.length} tags — use sparingly
            </div>
          )}
          <input
            className="edit-label edit-desc"
            placeholder="what this actually means (optional)"
            value={eDesc}
            maxLength={90}
            onChange={(e) => setEDesc(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          />

          {/* reward and penalty are separate on purpose: skipping a workout
              should be allowed to cost less than doing it earns */}
          <div className="edit-row edit-xp-row">
            <label className="edit-xp-field">
              <span className="edit-xp-tag gain">✓ adds</span>
              <input type="number" min="0" step="5" className="duration-input"
                     value={eXP} onChange={(e) => setEXP(e.target.value)} />
            </label>
            <label className="edit-xp-field">
              <span className="edit-xp-tag lose">✗ cuts</span>
              <input type="number" min="0" step="5" className="duration-input"
                     value={ePen} onChange={(e) => setEPen(e.target.value)} />
            </label>
          </div>

          {/* pairing: marking one habit done marks its partner slipped, so
              "sleep early" and "sleep after 12" cannot both be true */}
          <div className="edit-row edit-opp-row">
            <span className="edit-xp-tag">opposite of</span>
            <select className="edit-opp-select" value={eOpp}
                    onChange={(e) => setEOpp(e.target.value)}>
              <option value="">— none —</option>
              {allHabits.filter((h) => h.id !== habit.id).map((h) => (
                <option key={h.id} value={h.id}>{h.label}</option>
              ))}
            </select>
          </div>

          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  const meta = [];
  if (habitXP(habit) > 0) meta.push(`+${habitXP(habit)}`);
  if (habitPenalty(habit) > 0) meta.push(`−${habitPenalty(habit)}`);

  return (
    <div className="swipe-rail">
      <div className={`swipe-hint right ${swipe.dx > 0 ? "show" : ""} ${swipe.armed === "right" ? "armed" : ""}`}>
        <span>✓ done</span>
      </div>
      <div className={`swipe-hint left ${swipe.dx < 0 ? "show" : ""} ${swipe.armed === "left" ? "armed" : ""}`}>
        <span>✗ failed</span>
      </div>
    <div
      className={`quest-habit-card good edge ${fx ? "just-completed" : ""} ${slipToday ? "slipped" : ""}`}
      key={`h${habit.id}`}
      data-qid={habit.id}
      style={{
        ...cardStateVars(doneToday ? "done" : slipToday ? "failed" : null),
        transform: swipe.dx ? `translateX(${swipe.dx}px)` : undefined,
        transition: swipe.dragging ? "none" : "transform 200ms cubic-bezier(.65,0,.35,1)",
      }}
      {...swipe.handlers}
    >
      {fx > 0 && <span className="xp-pop" key={fx}>+{habitXP(habit)}</span>}
      <span className="area-dot" style={{ background: area.color }} />
      <div className="quest-habit-main">
        <span className="quest-habit-label">{habit.label}</span>
        <span className="quest-habit-meta">
          {meta.join(" / ")} XP
          {tagObjs.map((t) => (
            <span key={t.key} className="quest-tag-pip" style={{ color: t.color }}> · {t.label}</span>
          ))}
          {/* the streak and its freeze are one token: they used to split
              across two lines when the tag label was long, leaving a lone
              snowflake on the next row */}
          {streak > 0 && (
            <span className="quest-streak"> · 🔥{streak}{freezeUsed ? " ❄️" : ""}</span>
          )}
        </span>
        {habit.desc && <span className="quest-habit-desc">{habit.desc}</span>}
        <HabitWeek habit={habit} />
      </div>
      <button
        className="hist-btn"
        onClick={(e) => { e.stopPropagation(); onHistory && onHistory(habit); sound.click(); }}
        aria-label="Quest history"
        title="calendar history"
      >
        <svg viewBox="0 0 24 24" width="13" height="13">
          <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="7" y="13" width="3" height="3" fill="currentColor" />
          <rect x="14" y="13" width="3" height="3" fill="currentColor" opacity="0.45" />
        </svg>
      </button>

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

      {/* v63: no buttons. A quest is answered by swiping the row -- two
          controls per row competed with the gesture that already does the
          job, and on a 360px screen they were squeezing delete. What remains
          is the receipt, not the control: nothing to tap, does not swallow a
          swipe, it just says which way the row went. */}
      {(doneToday || slipToday) && (
        <span
          className={`quest-state ${doneToday ? "done" : "slip"}`}
          aria-label={doneToday ? "done today" : "slipped today"}
          title={doneToday ? "done today" : "slipped today"}
        >
          {doneToday ? "✓" : "✗"}
        </span>
      )}
      <button className="vault-card-edit" onClick={openEdit} aria-label="Edit habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {armed ? (
        <button className="del-btn armed" onClick={askDelete} aria-label="Confirm delete habit">
          sure?
        </button>
      ) : (
        <button className="del-btn" onClick={askDelete} aria-label="Delete habit">
          <svg viewBox="0 0 24 24" width="13" height="13">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
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
      <span className="reward-cost">{reward.cost} ◉</span>
      <button className="reward-claim" disabled={!canClaim} onClick={() => onClaim(reward.id)}>
        {canClaim ? "claim reward" : "not enough coins"}
      </button>
      {reward.claimed?.length > 0 && <span className="reward-claimed-count">claimed {reward.claimed.length}x</span>}
    </div>
  );
}

/** Tap a radar vertex and this says exactly what it is made of (#8).
 *
 *  Deliberately not a modal: it opens underneath the chart it describes, so
 *  the dot you tapped is still on screen next to the number it produced.
 */
function AxisDetail({ axis, habits, onClose }) {
  const b = useMemo(() => axisBreakdown(habits, axis.pick, axis.daily), [habits, axis]);
  const clamped = b.raw < 0;
  return (
    <div className="axis-pop" role="dialog" aria-label={`${axis.label} points`}>
      <div className="axis-pop-head">
        <span className="axis-pop-dot" style={{ background: axis.color || "var(--accent)" }} />
        <span className="axis-pop-name">{axis.label}</span>
        <button className="axis-pop-close" onClick={onClose} aria-label="Close">×</button>
      </div>

      <div className="axis-pop-value">
        <span className="axis-pop-xp">{b.value}</span>
        <span className="axis-pop-unit">XP</span>
        {clamped && <span className="axis-pop-raw">held at zero · true balance {b.raw}</span>}
      </div>

      <div className="axis-pop-split">
        <span className="axis-pop-gain">+{b.gained}</span>
        <span className="axis-pop-sep">/</span>
        <span className="axis-pop-lose">−{b.lost}</span>
        <span className="axis-pop-meta">{b.done} done · {b.slipped} slipped · {b.count} item{b.count === 1 ? "" : "s"}</span>
      </div>

      {b.dailyCount > 0 && (
        <div className="axis-pop-daily">
          {b.dailyXP} of that is daily tasks ({b.dailyCount} tagged here)
        </div>
      )}

      {b.rows.length === 0 ? (
        <div className="axis-pop-empty">nothing tagged here yet</div>
      ) : (
        <div className="axis-pop-rows">
          {b.rows.slice(0, 6).map((r) => (
            <div key={r.id} className="axis-pop-row">
              <span className="axis-pop-row-label">
                {r.daily && <span className="axis-pop-daily-mark">◉</span>}{r.label}
              </span>
              <span className={`axis-pop-row-net ${r.net < 0 ? "neg" : r.net > 0 ? "pos" : ""}`}>
                {r.net > 0 ? `+${r.net}` : r.net}
              </span>
            </div>
          ))}
          {b.rows.length > 6 && <div className="axis-pop-more">+{b.rows.length - 6} more</div>}
        </div>
      )}
    </div>
  );
}

function QuestView({ habits, setHabits, rewards, setRewards, tagCtl, coins = 0, spend,
                     inventory = [], setInventory }) {
  const tags = tagCtl.tags;
  const [areaFilter, setAreaFilter] = useState("all");
  const [showTagEditor, setShowTagEditor] = useState(false);
  const [pickedAxis, setPickedAxis] = useState(null);
  const [historyFor, setHistoryFor] = useState(null);
  const totalXP = useMemo(() => computeTotalXP(habits, inventory), [habits, inventory]);
  // v41: rewards are paid for in COINS, not XP.
  //
  // Daily quests and pomodoro blocks both minted coins and nothing anywhere
  // accepted them, while the reward centre charged XP -- so spending a
  // reward quietly dragged the number that also drives levels and the pet.
  // Two currencies, one sink, and the sink was plumbed to the wrong one.
  // XP is now progression only; coins are the spendable balance.
  const { level, into, span } = levelFromXP(totalXP);
  const levelPct = Math.round((into / span) * 100);

  /**
   * Records ✓ done or ✗ slipped for today.
   *
   * If the habit is paired with an opposite, the partner gets the inverse
   * mark: you cannot have both slept early and slept after midnight. The
   * partner is updated in the SAME setHabits call, because two sequential
   * updaters would each see stale state.
   */
  const markToday = (id, type, quiet = false) => {
    const today = getISTDateString(0);
    const cur = habits.find((h) => h.id === id);
    if (!cur) return;
    // derive before dispatching -- the updater may not have run yet
    const had = type === "done" ? habitDoneOn(cur, today) : habitSlipOn(cur, today);
    const willBeOn = !had;
    const partnerId = cur.opposite ? String(cur.opposite) : null;
    // v64: everything needed to put the board back exactly as it was
    const snapshot = habits;
    const undoLabel = `${cur.label} · ${had ? "cleared" : type === "done" ? "done" : "slipped"}`;

    setHabits((prev) => prev.map((h) => {
      if (h.id === id) return markHabit(h, today, type);
      if (willBeOn && partnerId && String(h.id) === partnerId) {
        const inverse = type === "done" ? "slip" : "done";
        const already = inverse === "done" ? habitDoneOn(h, today) : habitSlipOn(h, today);
        return already ? h : markHabit(h, today, inverse);
      }
      return h;
    }));

    // Links mean "when this is COMPLETED, complete that too". A slip is not a
    // completion event, so it must not travel: clicking ✗ on Deep Work was
    // silently slipping a linked habit the user never touched. Only the done
    // mark propagates -- opposite-pairing above is the mechanism for slips.
    if (type === "done") linkBridge.propagate("good", id, willBeOn);

    if (!willBeOn) { sound.click(); return; }
    if (type === "done") {
      // a swipe plays its own gesture sound before calling through, so the
      // button sound would be a second voice on top of it
      if (!quiet) sound.success();
      petBus.emit("habitDone");
      // hidden-achievement triggers: note the hour the user actually finished
      const hh = getISTParts().hour;
      if (hh < 6) saveMeta({ earlyFinish: true });
      if (hh >= 0 && hh < 4) saveMeta({ lateFinish: true });
    } else {
      if (!quiet) sound.error();
      petBus.emit("badHabit");
    }

    // v64: the row holds its place for a moment before the sort moves it.
    // Without this the list re-orders under your thumb and the next swipe
    // lands on a different quest than the one you were looking at.
    holdSort();
    undoBus.offer(() => setHabits(snapshot), undoLabel);
  };

  const delHabit = (id) => { setHabits((prev) => prev.filter((h) => h.id !== id)); sound.delete(); };
  const saveHabit = (id, patch) => setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));

  const claimReward = (id) => {
    const reward = rewards.find((r) => r.id === id);
    if (!reward || coins < reward.cost) { sound.error(); return; }
    const today = getISTDateString(0);
    if (spend) spend(reward.cost);
    setRewards((prev) => prev.map((r) => (r.id === id ? { ...r, claimed: [...(r.claimed || []), today] } : r)));
    sound.success();
    petBus.emit("rewardClaimed");
  };
  const delReward = (id) => { setRewards((prev) => prev.filter((r) => r.id !== id)); sound.delete(); };
  const saveReward = (id, patch) => setRewards((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const [ghLabel, setGhLabel] = useState("");
  const [ghArea, setGhArea] = useState(() => (tags[0] ? tags[0].key : "work"));
  const [ghXP, setGhXP] = useState(20);
  const [ghPen, setGhPen] = useState(0);
  const [rwLabel, setRwLabel] = useState("");
  const [rwCost, setRwCost] = useState(100);

  const addHabit = () => {
    const t = ghLabel.trim();
    if (!t) return;
    setHabits((prev) => [...prev, {
      id: makeId(), label: t, tags: [ghArea],
      xp: Math.max(0, +ghXP || 0),
      penalty: Math.max(0, +ghPen || 0),
      history: [],
    }]);
    setGhLabel("");
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
  /** One axis per tag. Full credit (option ①): a quest wearing two tags
   *  contributes its whole value to both, so the axes do NOT sum to your
   *  total XP and were never meant to. See computeTagXPRaw. */
  /** v53: daily tasks land here too. Each axis is quests + daily tasks, so
   *  "20 laps on roof" finally shows up as Body instead of only as coins. */
  const areaAxes = useMemo(() => tags.map((t) => ({
    key: t.key, label: t.label, color: t.color,
    value: tagAxisXP(t.key, habits, tags, inventory),
    raw: tagAxisRaw(t.key, habits, tags, inventory),
    pick: (h) => habitTags(h, tags).includes(t.key),
    daily: (inventory || []).filter((x) => dailyTags(x, tags).includes(t.key)),
  })), [tags, habits, inventory]);

  /** Which axis is carrying the week and which one is being neglected.
   *
   *  The polygon answers "what shape am I" but never in words, and reading a
   *  radar precisely is hard at 12 axes on a phone. Naming the two extremes
   *  costs one line and is the thing you would otherwise have to work out.
   *  Only shown when the axes actually differ -- on a fresh profile every
   *  axis is zero and a split of "strongest work, weakest body" would be a
   *  lie dressed as insight. */
  const radarSplit = useMemo(() => {
    if (areaAxes.length < 2) return null;
    const vals = areaAxes.map((a) => a.value);
    if (Math.max(...vals) === Math.min(...vals)) return null;
    const strong = areaAxes.reduce((a, b) => (b.value > a.value ? b : a));
    const weak = areaAxes.reduce((a, b) => (b.value < a.value ? b : a));
    return { strong, weak };
  }, [areaAxes]);

  // A fixed ceiling, so growth pushes the polygon outward instead of
  // flattening its neighbours.
  const radarMax = useMemo(() => {
    const peak = Math.max(...areaAxes.map((x) => x.value), 1);
    const step = peak <= 100 ? 25 : peak <= 500 ? 50 : 100;
    return Math.ceil(peak / step) * step;
  }, [areaAxes]);

  // How much of the chart is double-counted, so the one number that could
  // mislead is stated rather than hidden.
  const doubleTagged = useMemo(
    () => habits.filter((h) => habitTags(h, tags).length > 1).length
        + (inventory || []).filter((t) => dailyTags(t, tags).length > 1).length,
    [habits, inventory, tags]
  );

  /** Stated rather than hidden: a daily task with no tag is invisible to the
   *  chart, and that is exactly the failure mode v53 exists to end. */
  const untaggedDaily = useMemo(
    () => (inventory || []).filter((t) => dailyTags(t, tags).length === 0).length,
    [inventory, tags]
  );

  // v64: after a mark the row stays put for 700ms before the sort runs, so
  // the list never re-orders between your finger leaving the screen and your
  // next swipe arriving.
  // Holds the ORDER ON SCREEN, not just "stop sorting" -- freezing the sort
  // alone drops back to the stored array order, which is a different jump.
  const [frozenIds, setFrozenIds] = useState(null);
  const freezeTimer = useRef(null);
  const holdSort = () => {
    setFrozenIds(visibleHabits.map((h) => h.id));
    clearTimeout(freezeTimer.current);
    freezeTimer.current = setTimeout(() => setFrozenIds(null), 700);
  };
  useEffect(() => () => clearTimeout(freezeTimer.current), []);

  const todayStr = getISTDateString(0);
  // v63: display order is alphabetical, then done, then slipped. The stored
  // array keeps its own order; nothing here writes back.
  const habitsForView = areaFilter === "all" ? habits : habits.filter((h) => habitTags(h, tags).includes(areaFilter));
  const visibleHabits = (frozenIds
    ? [...habitsForView].sort((a, b) => {
        const ia = frozenIds.indexOf(a.id);
        const ib = frozenIds.indexOf(b.id);
        return (ia < 0 ? 1e9 : ia) - (ib < 0 ? 1e9 : ib);
      })
    : sortQuests(habitsForView, todayStr));

  // v64: net XP per day for the last fortnight. The radar shows shape, the
  // donut shows totals -- neither shows whether you are going up.
  const spark = useMemo(() => {
    const days = Array.from({ length: 14 }, (_, i) => getISTDateString(i - 13));
    return days.map((d) => ({
      d,
      v: habits.reduce((n, h) => {
        const done = (h.history || []).some((x) => x.d === d && x.t === "done");
        const slip = (h.history || []).some((x) => x.d === d && x.t === "slip");
        return n + (done ? habitXP(h) : 0) - (slip ? habitPenalty(h) : 0);
      }, 0),
    }));
  }, [habits]);
  const earnedXP = habits.reduce((s, h) => s + habitXP(h) * countHist(h, "done"), 0)
                 + computeDailyTotalXP(inventory);
  const lostXP = habits.reduce((s, h) => s + habitPenalty(h) * countHist(h, "slip"), 0);
  const spentXP = rewards.reduce((s, r) => s + r.cost * (r.claimed?.length || 0), 0);
  const habitsDoneToday = habits.filter((h) => habitDoneOn(h, todayStr)).length;
  const habitsSlippedToday = habits.filter((h) => habitSlipOn(h, todayStr)).length;

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
            <span className="hero-xp-spend">◉ {coins} to spend</span>
            <span className="hero-xp-sub">{into}/{span} to next level</span>
            <div className="hero-xp-split">
              <span className="hero-xp-earned">+<AnimatedNumber value={earnedXP} /></span>
              <span className="hero-xp-lost">−<AnimatedNumber value={lostXP} /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header"><span>TAGS</span></div>
      <div className="radar-card">
        <div className="radar-controls">
          <div className="radar-mode">
            <span className="radar-count">{tags.length} tag{tags.length === 1 ? "" : "s"}</span>
          </div>
          <button className="radar-edit" onClick={() => setShowTagEditor(true)}>edit tags</button>
        </div>
        <RadarChart
          axes={areaAxes}
          size={252}
          maxValue={radarMax}
          picked={pickedAxis}
          onPick={(ax) => { setPickedAxis(pickedAxis === ax.key ? null : ax.key); sound.click(); }}
        />
        {pickedAxis && areaAxes.some((a) => a.key === pickedAxis) && (
          <AxisDetail
            axis={areaAxes.find((a) => a.key === pickedAxis)}
            habits={habits}
            onClose={() => { setPickedAxis(null); sound.whoosh(); }}
          />
        )}
        {!pickedAxis && (
          <div className="radar-hint">tap a dot for its exact points</div>
        )}
        {!pickedAxis && areaAxes.length > 1 && radarSplit && (
          <div className="radar-split">
            <span className="rs-strong">
              <span className="rs-dot" style={{ background: radarSplit.strong.color }} />
              strongest {radarSplit.strong.label} · {radarSplit.strong.value}
            </span>
            <span className="rs-weak">
              <span className="rs-dot" style={{ background: radarSplit.weak.color }} />
              weakest {radarSplit.weak.label} · {radarSplit.weak.value}
            </span>
          </div>
        )}
        {doubleTagged > 0 && (
          <div className="radar-note">
            {doubleTagged} thing{doubleTagged === 1 ? " counts" : "s count"} toward more than one
            tag, in full. The axes add up to more than your XP on purpose — your
            level still counts each one once.
          </div>
        )}
        {untaggedDaily > 0 && (
          <div className="radar-note">
            {untaggedDaily} daily task{untaggedDaily === 1 ? " has" : "s have"} no tag — {untaggedDaily === 1 ? "it pays" : "they pay"} coins
            and level but {untaggedDaily === 1 ? "lands" : "land"} on no axis. Tag {untaggedDaily === 1 ? "it" : "them"} on the TASKS tab.
          </div>
        )}
      </div>

      {(earnedXP > 0 || lostXP > 0) && (
        <>
          <div className="section-header"><span>XP SOURCE</span></div>
          <XPSpark data={spark} />
          <div className="donut-card">
            <DonutChart
              size={120}
              stroke={16}
              centerLabel={totalXP}
              centerSublabel="net XP"
              segments={[
                { key: "earned", label: "Earned", value: earnedXP, color: "#5EEAD4" },
                { key: "lost", label: "Lost", value: lostXP, color: "#F0576B" },
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
                <span>Coins spent on rewards</span>
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
        {tags.map((t) => (
          <button key={t.key}
                  className={areaFilter === t.key ? "active" : ""}
                  style={{ "--ac": t.color }}
                  onClick={() => { setAreaFilter(t.key); sound.click(); }}>
            {t.label}
          </button>
        ))}
      </div>

      {showTagEditor && (
        <TagEditor
          tagCtl={tagCtl}
          usage={Object.fromEntries(tags.map((t) => [
            t.key,
            habits.filter((h) => habitTags(h, tags).includes(t.key)).length
              + (inventory || []).filter((x) => dailyTags(x, tags).includes(t.key)).length,
          ]))}
          onDropTag={(key) => {
            setHabits((prev) => prev.map((h) => {
              const kept = habitTags(h, tags).filter((k) => k !== key);
              return { ...h, tags: kept.length ? kept : [tags.find((t) => t.key !== key)?.key].filter(Boolean) };
            }));
            // Daily tasks are allowed to end up with nothing -- unlike a quest
            // they have no fallback, so dropping the tag drops them off the
            // chart rather than reassigning them somewhere they do not belong.
            if (setInventory) {
              setInventory((prev) => prev.map((x) => (
                dailyTags(x, tags).includes(key)
                  ? { ...x, tags: dailyTags(x, tags).filter((k) => k !== key) }
                  : x
              )));
            }
          }}
          onClose={() => setShowTagEditor(false)}
        />
      )}
      {historyFor && (
        <QuestHistory
          habit={habits.find((h) => h.id === historyFor.id) || historyFor}
          onClose={() => { setHistoryFor(null); sound.whoosh(); }}
        />
      )}

      <div className="section-header habits-header">
        <span>HABITS</span>
        <span className="habits-today">
          {habitsDoneToday} of {habits.length} done today
          {habitsSlippedToday > 0 ? ` · ${habitsSlippedToday} slipped` : ""}
        </span>
      </div>
      <div className="quest-habit-list">
        {habits.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no habits yet</div>
          </div>
        ) : (
          visibleHabits.map((h, i) => (
            <HabitCard
              key={h.id}
              habit={h}
              allHabits={habits}
              tags={tags}
              onMark={markToday}
              onHistory={(h) => setHistoryFor(h)}
              onDelete={delHabit}
              onSave={saveHabit}
              index={i}
              total={visibleHabits.length}
            />
          ))
        )}
      </div>
      <div className="composer">
        <input
          type="text"
          placeholder="new habit..."
          value={ghLabel}
          onChange={(e) => setGhLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addHabit()}
        />
        <button className="add-btn" onClick={addHabit} aria-label="Add habit">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {tags.map((t) => (
          <button key={t.key} className={ghArea === t.key ? "active" : ""}
                  style={{ "--ac": t.color }} onClick={() => setGhArea(t.key)}>
            {t.label}
          </button>
        ))}
        <label className="new-xp-field">
          <span className="edit-xp-tag gain">✓</span>
          <input type="number" min="0" step="5" className="duration-custom" value={ghXP}
                 onChange={(e) => setGhXP(+e.target.value || 0)} />
        </label>
        <label className="new-xp-field">
          <span className="edit-xp-tag lose">✗</span>
          <input type="number" min="0" step="5" className="duration-custom" value={ghPen}
                 onChange={(e) => setGhPen(+e.target.value || 0)} />
        </label>
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
            <RewardCard key={r.id} reward={r} canClaim={coins >= r.cost} onClaim={claimReward} onDelete={delReward} onSave={saveReward} />
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

// ============================================================
// DAILY QUESTS (v36)
//
// The Tasks tab used to be an open-ended to-do list, which grew without bound
// and stopped being looked at. It is now an INVENTORY of things you might do,
// plus exactly three drawn for today -- one per difficulty.
//
// Difficulty sets the payout, and the payout is COINS, not XP. Levelling stays
// driven by habits; a daily draw is luck, and luck should not decide your
// level. Coins spend in the reward centre, which is where luck belongs.
// ============================================================

const STORAGE_KEY_INVENTORY = "tasksh.inventory.v1";
const STORAGE_KEY_DAILY = "tasksh.daily.v1";

// One number per difficulty, read from DIFF_VALUE so the coins you are paid
// and the points your tag is credited can never drift apart. They are the
// same figure on purpose: "100 push ups" is hard, so it pays 100 ◉ and 100
// into Body.
const DIFFICULTIES = [
  { key: "easy", label: "easy", coins: DIFF_VALUE.easy, color: "#7EE787" },
  { key: "mid",  label: "mid",  coins: DIFF_VALUE.mid,  color: "#F5A623" },
  { key: "hard", label: "hard", coins: DIFF_VALUE.hard, color: "#F0576B" },
];

const diffMeta = (k) => DIFFICULTIES.find((d) => d.key === k) || DIFFICULTIES[0];

/** Best-effort tag for a daily task, from its words.
 *
 *  Used in two places and trusted in neither: once when upgrading an old
 *  inventory (a radar that goes blank after an update reads as "the update
 *  ate my progress"), and behind a `suggest` button in the editor. Every
 *  result is editable, and anything it cannot place it leaves alone rather
 *  than guessing -- a wrong tag is worse than no tag, because a wrong one
 *  looks decided.
 *
 *  Ordered, longest-signal-first, and capped at two so the full-credit rule
 *  cannot be gamed into "everything counts everywhere" by a keyword pile-up.
 */
const DAILY_TAG_HINTS = [
  ["body",       /push\s?up|pushup|press\s?up|squat|punch|kick|\blaps?\b|\brun\b|running|jog|sprint|\bhangs?\b|pull\s?up|plank|workout|work out|\bgym\b|karate|spar|crunch|burpee|\babs\b|dumbbell|lift/i],
  ["health",     /water|hydrat|sleep|slept|bed\s?time|eat\b|meal|diet|fruit|veg|junk|walk|stretch|meditat|breath|yoga|bath|shower|brush|floss|nap\b|sun\b|sunlight/i],
  ["work",       /stud(y|ied)|revis|chapter|read|homework|assignment|exam|test\b|notes?\b|project|code|build|ship|write|essay|upload|learn|practice|practise|skill/i],
  ["self",       /draw|sketch|paint|art\b|music|guitar|sing|journal|gratitude|pray|temple|plant|garden|happy|rest\b|hobby|create|creative|new thing|something new/i],
  ["discipline", /\bno\b|\bnot\b|skip|avoid|quit|limit|less than|under \d|screen|scroll|phone|lock in|wake|early|clean|tidy|save|budget|streak|follow (the|something)/i],
];

function guessDailyTags(text, tags) {
  const known = new Set((tags || []).map((t) => t.key));
  const s = String(text || "");
  const out = [];
  for (const [key, re] of DAILY_TAG_HINTS) {
    if (out.length >= 2) break;
    if (known.has(key) && re.test(s)) out.push(key);
  }
  return out;
}

/** v52 -> v53: every inventory item gains `tags` and `history`.
 *
 *  `history` starts empty on purpose. The app never recorded which daily
 *  tasks were completed on which day -- only today's board did, and only for
 *  today -- so there is no past to backfill from. Inventing one would put
 *  points on the chart that were never earned. */
function migrateInventory(inv, tags) {
  if (!Array.isArray(inv)) return inv;
  return inv.map((t) => {
    if (!t || typeof t !== "object") return t;
    const has = Array.isArray(t.tags);
    return {
      ...t,
      tags: has ? t.tags : guessDailyTags(t.text, tags),
      history: Array.isArray(t.history) ? t.history : [],
    };
  });
}

/**
 * Which day the quest board belongs to.
 *
 * v63: this used to roll the board at the first routine's start time (05:30
 * for him), which meant the "day" began whenever the routine list said so.
 * There is now one rollover -- 03:00 IST -- living in getISTDateString, so
 * this is just "what day is it". The arguments stay for the call site.
 */
function questDayString(routines, nowMinutes) {
  return getISTDateString(0);
}

/**
 * Where a quest sits once it has been answered.
 *
 * 0 pending, 1 done, 2 slipped. Done above slipped, and pending on top: the
 * list you work through first, then proof of what you did, then the one state
 * that wants attention. Alphabetical inside each band, so an untouched list
 * is stable and predictable rather than whatever order rows were created in.
 */
function questSortRank(habit, dayStr) {
  if (habitSlipOn(habit, dayStr)) return 2;
  if (habitDoneOn(habit, dayStr)) return 1;
  return 0;
}

/** Sorted COPY. The stored order is never rewritten -- sorting is a view. */
function sortQuests(list, dayStr) {
  return [...(list || [])].sort((a, b) => {
    const ra = questSortRank(a, dayStr);
    const rb = questSortRank(b, dayStr);
    if (ra !== rb) return ra - rb;
    const byName = String(a.label || "").localeCompare(String(b.label || ""), "en", { sensitivity: "base" });
    return byName !== 0 ? byName : (a.id - b.id);
  });
}

/** One random task per difficulty. Tiers with an empty pool simply draw nothing. */
function drawDaily(inventory, day) {
  const picks = {};
  for (const d of DIFFICULTIES) {
    const pool = (inventory || []).filter((t) => t.diff === d.key);
    picks[d.key] = pool.length ? pool[Math.floor(Math.random() * pool.length)].id : null;
  }
  return { day, picks, done: [] };
}

/** v35 tasks -> inventory. Priority maps onto difficulty; nothing is thrown away. */
function migrateTasksToInventory(tasks) {
  const byPrio = { high: "hard", mid: "mid", low: "easy" };
  return (Array.isArray(tasks) ? tasks : []).map((t) => ({
    id: t.id,
    text: t.text,
    diff: byPrio[t.priority] || "mid",
    tags: [],
    history: [],
  }));
}

const seedInventory = [
  { id: 9001, text: "100 pushups",      diff: "hard", tags: ["body"],   history: [] },
  { id: 9002, text: "Read 20 pages",    diff: "mid",  tags: ["work"],   history: [] },
  { id: 9003, text: "Water the plants", diff: "easy", tags: ["self"],   history: [] },
];

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

/** The tag row shared by the composer and the inline editor. Chips, not a
 *  dropdown: tapping two of them is the whole interaction, and a <select>
 *  cannot express "two at once" without a modal. */
function DailyTagPicker({ tags, picked, onToggle, onSuggest }) {
  return (
    <div className="duration-chips inv-tag-chips">
      {tags.map((t) => {
        const on = picked.includes(t.key);
        return (
          <button
            key={t.key}
            className={on ? "active" : ""}
            style={{ "--ac": t.color }}
            onClick={() => onToggle(t.key)}
            aria-pressed={on}
          >
            {on ? "✓ " : ""}{t.label}
          </button>
        );
      })}
      {onSuggest && (
        <button className="inv-suggest" onClick={onSuggest} title="guess from the words">
          suggest
        </button>
      )}
    </div>
  );
}

function DailyView({ inventory, setInventory, daily, setDaily, routines, onReward, onComplete,
                     coins = 0, tags = DEFAULT_TAGS }) {
  const [text, setText] = useState("");
  const [diff, setDiff] = useState("mid");
  const [pick, setPick] = useState([]);
  const [flash, triggerFlash] = useFlash();
  const [armed, setArmed] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDiff, setEditDiff] = useState("mid");
  const [editTags, setEditTags] = useState([]);
  const armTimer = useRef(null);
  const tagMeta = (k) => tags.find((t) => t.key === k) || null;
  /** Two tags is the cap, same as a quest. Past that the full-credit rule
   *  stops meaning anything -- tag a task with all five and it inflates
   *  every axis at once. */
  const toggleIn = (list, key) =>
    list.includes(key) ? list.filter((k) => k !== key) : list.length >= 2 ? list : [...list, key];
  useEffect(() => () => { if (armTimer.current) clearTimeout(armTimer.current); }, []);

  /** What today's board still owes, in the currency it actually pays.
   *  Three cards are drawn; without this the tab could not say whether any of
   *  them were left without reading all three. */
  const board = useMemo(() => {
    const picks = (daily && daily.picks) || {};
    const doneToday = (daily && daily.done) || [];
    const cards = DIFFICULTIES.map((d) => {
      const id = picks[d.key];
      const item = id ? (inventory || []).find((t) => t.id === id) : null;
      return item ? { item, diff: d, done: doneToday.includes(item.id) } : null;
    }).filter(Boolean);
    const claimed = cards.filter((c) => c.done).length;
    const left = cards.filter((c) => !c.done).reduce((n, c) => n + c.diff.coins, 0);
    return { cards, claimed, total: cards.length, left };
  }, [daily, inventory]);
  const boardClaimed = board.claimed;
  const boardTotal = board.total;
  const boardLeft = board.left;

  /** An item leaving a difficulty it was drawn under leaves a hole in today's
   *  board. Fill it from the rest of that difficulty rather than letting the
   *  slot vanish, which reads as "the app ate my quest". */
  const repairSlot = (itemId, slotKey) => {
    setDaily((d) => {
      const picks = { ...(d.picks || {}) };
      if (picks[slotKey] !== itemId) return d;
      const done = d.done || [];
      const taken = Object.values(picks);
      const pool = inventory.filter(
        (t) => t.id !== itemId && t.diff === slotKey && !taken.includes(t.id) && !done.includes(t.id)
      );
      if (pool.length) picks[slotKey] = pool[Math.floor(Math.random() * pool.length)].id;
      else delete picks[slotKey];
      return { ...d, picks };
    });
  };

  const slotOf = (itemId) =>
    Object.keys(daily.picks || {}).find((k) => daily.picks[k] === itemId) || null;

  const beginEdit = (t) => {
    setArmed(null);
    setEditId(t.id);
    setEditText(t.text);
    setEditDiff(t.diff);
    setEditTags(dailyTags(t, tags));
    sound.click();
  };

  const cancelEdit = () => { setEditId(null); sound.whoosh(); };

  const saveEdit = (t) => {
    const next = editText.trim();
    if (!next) { triggerFlash(); sound.error(); return; }
    // A drawn item that changes difficulty would otherwise keep sitting in
    // its old slot, paying the old slot's coins for the new difficulty.
    if (editDiff !== t.diff) {
      const slot = slotOf(t.id);
      if (slot) repairSlot(t.id, slot);
    }
    setInventory((prev) => prev.map((x) => (
      x.id === t.id ? { ...x, text: next, diff: editDiff, tags: editTags } : x
    )));
    setEditId(null);
    sound.success();
  };

  const add = () => {
    const t = text.trim();
    if (!t) { triggerFlash(); sound.error(); return; }
    // An untagged task still pays coins and still counts toward the level, so
    // nothing is lost by shipping one -- but the guess costs nothing either,
    // and an item that never reaches the chart is the whole bug v53 fixes.
    const chosen = pick.length ? pick : guessDailyTags(t, tags);
    setInventory((prev) => [...prev, { id: makeId(), text: t, diff, tags: chosen, history: [] }]);
    setText("");
    setPick([]);
    sound.click();
  };

  const del = (id) => {
    if (armed !== id) {
      setArmed(id); sound.click();
      if (armTimer.current) clearTimeout(armTimer.current);
      armTimer.current = setTimeout(() => { setArmed(null); armTimer.current = null; }, 4000);
      return;
    }
    const slot = slotOf(id);
    if (slot) repairSlot(id, slot);
    setInventory((prev) => prev.filter((t) => t.id !== id));
    setArmed(null);
    sound.delete();
  };

  // v45: one implementation, shared with the Today tab's quest rows.
  const complete = (id, coins) => onComplete(id, coins);

  // v44: one reroll a day. It was unlimited, which made the draw meaningless
  // -- you could spin until you liked the board.
  const rerollKey = daily.day || "none";
  const rerollUsed = (daily.rerolledOn || null) === rerollKey;

  const reroll = () => {
    if (rerollUsed) { sound.error(); return; }
    setDaily({ ...drawDaily(inventory, daily.day), rerolledOn: rerollKey });
    sound.click();
  };

  const byId = (id) => inventory.find((t) => t.id === id) || null;
  const doneCount = DIFFICULTIES.filter((d) => {
    const id = daily.picks?.[d.key];
    return id && (daily.done || []).includes(id);
  }).length;
  const drawn = DIFFICULTIES.filter((d) => byId(daily.picks?.[d.key])).length;

  return (
    <div className="task-list vault-scroll">
      {/* v51: this is the screen coins are EARNED on and it showed no
          balance at all -- so completing a quest moved a number that was
          only visible one tab away, which reads as "it did nothing". */}
      <div className="section-header habits-header">
        <span>TODAY&apos;S QUESTS</span>
        <span className="keypool-hint">
          {doneCount}/{drawn} done · <span className="coin-total"><AnimatedNumber value={coins} /> ◉</span>
        </span>
      </div>

      {drawn === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">nothing in the inventory yet — add some below</div>
        </div>
      ) : (
        <div className="daily-grid">
          {DIFFICULTIES.map((d) => {
            const task = byId(daily.picks?.[d.key]);
            if (!task) return null;
            const done = (daily.done || []).includes(task.id);
            return (
              <button
                key={d.key}
                className={`daily-card ${done ? "done" : ""}`}
                style={{ "--dc": d.color }}
                onClick={() => complete(task.id, d.coins)}
                disabled={done}
              >
                <span className="daily-diff">{d.label}</span>
                <span className="daily-text">{task.text}</span>
                <span className="daily-coins">{done ? "✓ claimed" : `+${d.coins} ◉`}</span>
                {/* v53: what this pays into. Shown on the card you tap, not
                    one tab away, because the point of tagging a daily task
                    is seeing where the work lands. */}
                <span className="daily-tags">
                  {dailyTags(task, tags).length === 0 ? (
                    <span className="daily-tag none">untagged</span>
                  ) : dailyTags(task, tags).map((k) => {
                    const m = tagMeta(k);
                    return (
                      <span key={k} className="daily-tag" style={{ "--tc": m.color }}>
                        {done ? "✓" : "+"}{d.coins} {m.label}
                      </span>
                    );
                  })}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {(boardClaimed > 0 || boardTotal > 0) && (
        <div className="daily-standing">
          <span className="ds-count">{boardClaimed} of {boardTotal} claimed today</span>
          <span className="ds-left">
            {boardLeft > 0 ? `${boardLeft} ◉ still on the board` : "board clear"}
          </span>
        </div>
      )}

      <div className="daily-note">
        new draw when your first routine starts
        {routines?.length ? ` (${[...routines].map((r) => r.time).sort()[0]})` : ""}
        <button className="note-btn" onClick={reroll} disabled={rerollUsed}>
          {rerollUsed ? "rerolled today" : "reroll"}
        </button>
      </div>

      <div className="section-header habits-header">
        <span>INVENTORY</span>
        <span className="keypool-hint">
          {inventory.length} item{inventory.length === 1 ? "" : "s"} · {computeDailyTotalXP(inventory)} pts earned
        </span>
      </div>

      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="something you might do..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button className="add-btn" onClick={add} aria-label="Add to inventory">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {DIFFICULTIES.map((d) => (
          <button key={d.key} className={diff === d.key ? "active" : ""}
                  style={{ "--ac": d.color }} onClick={() => setDiff(d.key)}>
            {d.label} · {d.coins}◉
          </button>
        ))}
      </div>
      <DailyTagPicker
        tags={tags}
        picked={pick}
        onToggle={(k) => { setPick((p) => toggleIn(p, k)); sound.click(); }}
        onSuggest={text.trim() ? () => { setPick(guessDailyTags(text, tags)); sound.click(); } : null}
      />
      <div className="inv-tag-note">
        {pick.length === 0
          ? `no tag — coins and level only · ${diffMeta(diff).coins} pts go nowhere on the radar`
          : `+${diffMeta(diff).coins} ◉ and +${diffMeta(diff).coins} to ${pick.map((k) => (tagMeta(k) || {}).label).join(" and ")}`}
      </div>

      <div className="quest-habit-list">
        {inventory.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">inventory is empty</div>
          </div>
        ) : (
          inventory.map((t) => {
            const d = diffMeta(t.diff);
            const isToday = Object.values(daily.picks || {}).includes(t.id);
            const mine = dailyTags(t, tags);
            const times = dailyDoneCount(t);
            const last = dailyLastDone(t);
            return (
              <div className={`quest-habit-card good ${isToday ? "drawn" : ""}`} key={t.id}>
                {editId === t.id ? (
                  <div className="inv-edit">
                    <input
                      className="inv-edit-input"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") saveEdit(t); if (e.key === "Escape") cancelEdit(); }}
                      aria-label="Edit inventory item"
                      autoFocus
                    />
                    <div className="duration-chips inv-edit-chips">
                      {DIFFICULTIES.map((x) => (
                        <button
                          key={x.key}
                          className={editDiff === x.key ? "active" : ""}
                          style={{ "--ac": x.color }}
                          onClick={() => { setEditDiff(x.key); sound.click(); }}
                        >
                          {x.label} · {x.coins}◉
                        </button>
                      ))}
                    </div>
                    <DailyTagPicker
                      tags={tags}
                      picked={editTags}
                      onToggle={(k) => { setEditTags((p) => toggleIn(p, k)); sound.click(); }}
                      onSuggest={() => { setEditTags(guessDailyTags(editText, tags)); sound.click(); }}
                    />
                    <div className="inv-edit-actions">
                      <button className="note-btn save" onClick={() => saveEdit(t)}>save</button>
                      <button className="note-btn" onClick={cancelEdit}>cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="area-dot" style={{ background: d.color }} />
                    {/* the whole row is the edit affordance: a pencil icon at
                        this size is a 12px tap target next to a delete ✕ */}
                    <button className="quest-habit-main inv-tap" onClick={() => beginEdit(t)}>
                      <span className="quest-habit-label">
                        {t.text}
                        {mine.map((k) => {
                          const m = tagMeta(k);
                          return <span key={k} className="inv-tag-dot" style={{ background: m.color }} title={m.label} />;
                        })}
                      </span>
                      <span className="quest-habit-meta">
                        {d.label} · +{d.coins} ◉
                        {mine.length ? ` → ${mine.map((k) => (tagMeta(k) || {}).label).join(" + ")}` : " · untagged"}
                        {times ? ` · ${times}× = ${dailyItemXP(t)} pts` : ""}
                        {last ? ` · ${daysAgoLabel(last.days)}` : " · never done"}
                        {isToday ? " · drawn" : ""}
                      </span>
                    </button>
                    {armed === t.id ? (
                      <button className="del-btn armed" onClick={() => del(t.id)}>sure?</button>
                    ) : (
                      <button className="del-btn" onClick={() => del(t.id)} aria-label="Remove from inventory">
                        <svg viewBox="0 0 24 24" width="13" height="13">
                          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    )}
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
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
// v35: the merged list. GOOD/BAD keys are still read once, by the migration
// in the root state initialiser, then never written again.
const STORAGE_KEY_HABITS = "tasksh.habits.v1";
const STORAGE_KEY_REWARDS = "tasksh.rewards.v1";
const STORAGE_KEY_DEVICE_ID = "tasksh.deviceid.v1";
const STORAGE_KEY_NOTIFY_ENABLED = "tasksh.notifyenabled.v1";
// Gemini API key, entered by the user in the AI tab. Stays on this device --
// it is never included in export/import backups (those get shared around and
// a key is a credential, not data), and never synced to the worker's KV.
const STORAGE_KEY_AI_KEY = "tasksh.aikey.v1";

/** Rename, recolour, add and remove tags.
 *
 *  Flat now: v52 removed the four fixed parent areas, so this is one list.
 *  Deleting a tag has to repair every quest wearing it, or those quests fall
 *  off the radar with no way to get back on.
 */
function TagEditor({ tagCtl, onClose, onDropTag, usage }) {
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");
  const [confirm, setConfirm] = useState(null);
  const tags = tagCtl.tags;
  const full = tags.length >= MAX_TAGS;

  const commitAdd = () => {
    if (draft.trim()) { tagCtl.addTag(draft); sound.success(); }
    setDraft(""); setAdding(false);
  };

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-head">
          <span className="sheet-title">tags</span>
          <button className="sheet-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {tags.map((t) => {
          const used = (usage && usage[t.key]) || 0;
          return (
            <div key={t.key} className="tag-row">
              <button
                className="tag-dot swatch"
                style={{ background: t.color }}
                title="change colour"
                onClick={() => {
                  const i = TAG_PALETTE.indexOf(t.color);
                  tagCtl.recolourTag(t.key, TAG_PALETTE[(i + 1) % TAG_PALETTE.length]);
                  sound.click();
                }}
              />
              <input
                className="tag-input"
                defaultValue={t.label}
                maxLength={14}
                onBlur={(e) => tagCtl.renameTag(t.key, e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") e.target.blur(); }}
              />
              <span className="tag-use">{used}</span>
              {confirm === t.key ? (
                <button className="tag-del armed"
                        onClick={() => { tagCtl.removeTag(t.key, onDropTag); setConfirm(null); sound.delete(); }}>
                  sure?
                </button>
              ) : (
                <button
                  className="tag-del"
                  disabled={tags.length <= 1}
                  title={tags.length <= 1 ? "you need at least one tag" : "remove"}
                  onClick={() => { setConfirm(t.key); sound.click(); }}
                >×</button>
              )}
            </div>
          );
        })}

        {adding ? (
          <div className="tag-row">
            <input
              className="tag-input" autoFocus placeholder="new tag…" maxLength={14}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commitAdd}
              onKeyDown={(e) => { if (e.key === "Enter") commitAdd(); if (e.key === "Escape") { setDraft(""); setAdding(false); } }}
            />
          </div>
        ) : (
          <button className="tag-add" disabled={full}
                  onClick={() => { setDraft(""); setAdding(true); }}>
            {full ? `${MAX_TAGS} is the most the radar can read` : "+ add tag"}
          </button>
        )}

        <div className="sheet-foot">
          the number is how many quests wear it. renaming keeps them; deleting
          takes the tag off them.
          <button className="tag-reset" onClick={() => { tagCtl.resetTags(); sound.click(); }}>reset to defaults</button>
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
      ...(data.habits || []).map((h) => ({ ref: refOf("good", h.id), label: h.label, kind: "good" })),
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
    <div className="ach-toast">
      <span className="ach-toast-icon">{a.icon}</span>
      <span className="ach-toast-body">
        <span className="ach-toast-kicker">achievement</span>
        <span className="ach-toast-name">{a.name}</span>
        <span className="ach-toast-desc">{a.desc}</span>
      </span>
      <span className="ach-toast-coins">+{a.coins}</span>
      {/* v52: the toast used to be one big tap target pinned over the bottom
          of the list, and for its 4.2 seconds it swallowed every tap and
          swipe aimed at whatever was underneath -- a quest you were trying
          to swipe just did not respond. The body is inert now and only this
          button takes input. It self-dismisses regardless. */}
      <button className="ach-toast-x" onClick={onDone} aria-label="Dismiss">×</button>
    </div>
  );
}

/**
 * Level-up reward screen. Replaces the old silent level change with a
 * moment: what you gained, what it unlocked, what's next.
 */
/** Level-up is a notification now, not a screen.
 *
 *  v64: it used to be a full-screen backdrop with a continue button. It
 *  stopped the whole app to report something that had already happened, and
 *  on a phone that backdrop swallowed the next tap -- every test in the suite
 *  had to click at {5,5} to dismiss it. Same information, one line, and it
 *  leaves on its own. */
function LevelRewardScreen({ level, coins, unlockedTheme, extraThemes = 0, evolvedTo, onDone }) {
  // v64.1: the dismiss timer lived in an effect that depended on `onDone`,
  // which is a fresh arrow function on every render of the app -- so the
  // effect tore down and restarted the timeout several times a second and it
  // never fired. The toast stayed up until it was manually closed, and there
  // is no close button, so it stayed up forever.
  //
  // The timer now depends only on the level, and reaches the callback through
  // a ref so a new function identity cannot restart it.
  const doneRef = useRef(onDone);
  doneRef.current = onDone;
  useEffect(() => {
    // v66: sound.levelUp existed but nothing ever called it -- the old
    // full-screen version was silent, which is a strange thing for a
    // celebration to be. `level` is the dependency, not a callback, so this
    // cannot repeat the bug that stopped the dismiss timer from firing.
    sound.levelUp();
    const t = setTimeout(() => { if (doneRef.current) doneRef.current(); }, 5200);
    return () => clearTimeout(t);
  }, [level]);
  const next = THEMES.find((t) => t.unlockLevel > level);
  const bits = [`+${coins} coins`];
  if (unlockedTheme) bits.push(`${unlockedTheme.name} theme`);
  if (extraThemes > 0) bits.push(`+${extraThemes} more`);
  if (evolvedTo != null) bits.push("pet evolving");
  return (
    <div className="lvl-toast" role="status" aria-live="polite">
      <span className="lvl-toast-num">{level}</span>
      <span className="lvl-toast-body">
        <span className="lvl-toast-kicker">level up</span>
        <span className="lvl-toast-title">{titleForLevel(level)}</span>
        <span className="lvl-toast-meta">
          {bits.join(" · ")}
          {next ? <span className="lvl-toast-next"> · next theme at {next.unlockLevel}</span> : null}
        </span>
      </span>
      {/* no dismiss button on purpose: it would sit exactly where the
          titlebar's theme and search buttons are, and swallow them for five
          seconds. It leaves on its own. */}
    </div>
  );
}

/** Bring one quest row into view after the palette jumps to the quest tab. */
function scrollToQuest(id) {
  const el = document.querySelector(`[data-qid="${id}"]`);
  if (!el) return;
  el.scrollIntoView({ block: "center", behavior: "smooth" });
  el.classList.add("pal-hit");
  setTimeout(() => el.classList.remove("pal-hit"), 1200);
}

/** Ctrl+K: type a quest, a tab, a tool.
 *
 *  v64. Filtering, not browsing: with 29 quests plus six tabs, the chips only
 *  narrow by tag, so finding one row meant scrolling and reading. This is the
 *  keyboard way in; it also works on a phone via the titlebar magnifier.
 */
function CommandPalette({ onClose, buildItems, onRun }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => { const t = setTimeout(() => inputRef.current?.focus(), 30); return () => clearTimeout(t); }, []);
  const all = useMemo(() => buildItems(), [buildItems]);
  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return all.slice(0, 8);
    return all.filter((it) => (it.label + " " + (it.hint || "")).toLowerCase().includes(needle)).slice(0, 10);
  }, [q, all]);
  useEffect(() => { setIdx(0); }, [q]);

  const run = (item) => { if (!item) return; onClose(); item.run(); };
  const onKey = (e) => {
    if (e.key === "Escape") { e.preventDefault(); onClose(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(hits.length - 1, i + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(0, i - 1)); }
    else if (e.key === "Enter") { e.preventDefault(); run(hits[idx]); }
  };

  return (
    <div className="pal-backdrop" onClick={onClose}>
      <div className="pal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Command palette">
        <input
          ref={inputRef}
          className="pal-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKey}
          placeholder="jump to a quest, tab or tool…"
          aria-label="Search"
        />
        {hits.length === 0 ? (
          <div className="pal-empty">nothing matches "{q}"</div>
        ) : (
          <div className="pal-list">
            {hits.map((it, i) => (
              <button
                key={it.key}
                className={`pal-row ${i === idx ? "on" : ""}`}
                onMouseEnter={() => setIdx(i)}
                onClick={() => run(it)}
              >
                <span className="pal-kind">{it.kind}</span>
                <span className="pal-label">{it.label}</span>
                {it.hint && <span className="pal-hint">{it.hint}</span>}
              </button>
            ))}
          </div>
        )}
        <div className="pal-foot">↑↓ move · enter open · esc close</div>
      </div>
    </div>
  );
}

/** The undo affordance. Top of the screen, not the bottom: the bottom is
 *  where cards are swiped, and v52 already established that a toast sitting
 *  in that lane eats gestures. */
function UndoToast() {
  const [ticket, setTicket] = useState(null);
  useEffect(() => undoBus.on(setTicket), []);
  useEffect(() => {
    if (!ticket) return;
    const t = setTimeout(() => undoBus.clear(), 6000);
    return () => clearTimeout(t);
  }, [ticket]);
  if (!ticket) return null;
  return (
    <div className="undo-toast" role="status" aria-live="polite">
      <span className="undo-toast-label">{ticket.label}</span>
      <button className="undo-toast-btn" onClick={() => undoBus.fire()}>undo</button>
    </div>
  );
}

/** Fourteen days of net XP as a line.
 *
 *  v64: the radar shows which areas you feed and the donut shows the total,
 *  but nothing showed direction. A flat line at zero is a real answer, so it
 *  is drawn rather than hidden. */
function XPSpark({ data }) {
  const W = 300, H = 54, PAD = 4;
  const vals = data.map((d) => d.v);
  const hi = Math.max(1, ...vals);
  const lo = Math.min(0, ...vals);
  const span = hi - lo || 1;
  const x = (i) => PAD + (i * (W - PAD * 2)) / Math.max(1, data.length - 1);
  const y = (v) => H - PAD - ((v - lo) / span) * (H - PAD * 2);
  const line = data.map((d, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(d.v).toFixed(1)}`).join(" ");
  const zeroY = y(0);
  const best = Math.max(0, ...vals);
  const total = vals.reduce((a, b) => a + b, 0);
  return (
    <div className="spark-card">
      <svg className="spark-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img"
           aria-label={`net XP per day, last 14 days, best ${best}`}>
        <line x1={PAD} x2={W - PAD} y1={zeroY} y2={zeroY} className="spark-zero" />
        <path d={line} className="spark-line" fill="none" />
        {data.map((d, i) => (
          <circle key={d.d} cx={x(i)} cy={y(d.v)} r={d.v > 0 ? 1.9 : 1.2}
                  className={d.v > 0 ? "spark-dot" : "spark-dot idle"} />
        ))}
      </svg>
      <div className="spark-meta">
        <span>net xp · last 14 days</span>
        <span className="spark-nums">{total >= 0 ? `+${total}` : total} · best {best}</span>
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
                <span className="theme-swatch">
                  {/* Three flat bands, in the order the theme uses them. A
                      blend promised a colour the app never actually shows. */}
                  <i className="sw-band" style={{ background: t.colors.bg }} />
                  <i className="sw-band" style={{ background: t.colors.panel }} />
                  <i className="sw-band" style={{ background: t.colors.accent }} />
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

        <div className="sheet-foot">
          theme colours follow your level · currently <b>{ctl.phase.label}</b>
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
const VAPID_PUBLIC_KEY = "BO6-Y8l-bh_WOLy4A7zYXX_8cAPCYiY2gzlkn7kuWqMlvK921aU5IebajkHiQlRuQaoOQxSjfIAFj--bO_Vvyi0";

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

const STORAGE_KEY_SYNC_SENT = "tasksh.syncsent.v1";

/** Pushes the schedule to the worker, but only when it has actually changed.
 *
 *  v46: this used to POST unconditionally from an effect keyed on `routines`,
 *  which meant one KV write per app open plus one per routine tick — the same
 *  bytes, over and over. Cloudflare's free KV tier allows 1,000 writes a day
 *  across the WHOLE worker, so the schedule sync was quietly eating the
 *  budget that cloud backup and the pomodoro timer also draw on. Measured
 *  symptom: `POST /sync` returning
 *  `500 {"error":"KV put() limit exceeded for the day."}`, which also takes
 *  backup down, because a quota is per-account and not per-route.
 *
 *  The fix is a dedupe, not a throttle: a throttle would still spend writes
 *  on an unchanged schedule, and would delay a real edit. The last payload
 *  that the worker ACKed is kept, and an identical one is simply not sent.
 *  Marked sent only on a 2xx, so a failed push retries on the next change.
 */
async function syncRoutinesToWorker(routines, { force = false } = {}) {
  const deviceId = getDeviceId();
  const body = JSON.stringify({
    deviceId,
    // duration is included for the widget: it needs to know whether a
    // routine is running *now* and how far through it you are, which the
    // start time alone cannot tell it
    routines: (routines || []).map((r) => ({ id: r.id, time: r.time, label: r.label, duration: r.duration })),
  });

  if (!force && syncPayloadUnchanged(body)) return { skipped: true };

  try {
    const res = await fetch(`${NOTIFY_WORKER_URL}/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (res && res.ok) {
      try { localStorage.setItem(STORAGE_KEY_SYNC_SENT, body); } catch {}
      return { sent: true };
    }
    return { sent: false, status: res && res.status };
  } catch {
    return { sent: false };
  }
}

/** Pure so the dedupe rule is testable without a network or a worker. */
function syncPayloadUnchanged(body) {
  try {
    return localStorage.getItem(STORAGE_KEY_SYNC_SENT) === body;
  } catch {
    return false;      // if storage is unavailable, always send
  }
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

/**
 * Moves a key up or down the pool.
 *
 * Order is not cosmetic: withKeyPool() in the worker tries keys top to bottom
 * and stops at the first that answers, so position 1 is the one that carries
 * almost all traffic. Being able to promote a key matters when one provider
 * is faster (Groq) or has far more headroom (Cerebras, 1M tokens/day) than
 * whichever key happened to be pasted first.
 */
function moveAIKey(key, dir) {
  const keys = getAIKeys();
  const i = keys.indexOf(key);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= keys.length) return keys;
  const next = [...keys];
  [next[i], next[j]] = [next[j], next[i]];
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
      return { kind: "remove", surface: "quest", text: find(state.habits, a.id)?.label || `#${a.id}` };
    case "delete_bad_habit":
      return { kind: "remove", surface: "quest", text: find(state.habits, a.id)?.label || `#${a.id}` };
    case "add_reward":
      return { kind: "add", surface: "reward", text: `${a.label} · ${a.cost} XP` };
    case "delete_reward":
      return { kind: "remove", surface: "reward", text: find(state.rewards, a.id)?.label || `#${a.id}` };

    // ---- v54: everything the companion gained when it stopped being blind
    case "add_quest":
      return { kind: "add", surface: "quest",
        text: `${a.label} · +${a.xp}${a.penalty ? ` / −${a.penalty}` : ""} XP · ${(a.tags || []).join(" + ") || "untagged"}` };
    case "edit_quest": {
      const h = find(state.habits, a.id);
      const bits = [];
      if (a.label !== undefined && a.label !== h?.label) bits.push(`"${h?.label}" → "${a.label}"`);
      if (a.xp !== undefined && a.xp !== h?.xp) bits.push(`+${h?.xp} → +${a.xp} XP`);
      if (a.penalty !== undefined && a.penalty !== h?.penalty) bits.push(`−${h?.penalty} → −${a.penalty}`);
      if (a.tags !== undefined) bits.push(`tags → ${a.tags.join(" + ")}`);
      if (a.desc !== undefined) bits.push("new description");
      return { kind: "edit", surface: "quest", text: `${h?.label || "quest"}: ${bits.join(", ") || "no change"}` };
    }
    case "delete_quest":
      return { kind: "remove", surface: "quest", text: find(state.habits, a.id)?.label || `#${a.id}` };

    case "add_daily_task":
      return { kind: "add", surface: "daily",
        text: `${a.text} · ${a.diff} (+${DIFF_VALUE[a.diff] ?? 10})${(a.tags || []).length ? ` → ${a.tags.join(" + ")}` : " · untagged"}` };
    case "delete_daily_task":
      return { kind: "remove", surface: "daily", text: find(state.inventory, a.id)?.text || `#${a.id}` };

    case "add_tag":
      return { kind: "add", surface: "tag", text: a.label };

    case "add_expense_cat":
      return { kind: "add", surface: "money", text: `new category: ${a.label}` };
    case "add_expense": {
      const c = (state.expenseCats || []).find((x) => x.key === a.cat);
      return { kind: "add", surface: "money",
        text: `${formatMoney(aiAmountToMinor(a.amount), state.currency)} · ${c ? c.label : a.cat}${a.name ? ` · ${a.name}` : ""}${a.date ? ` · ${a.date}` : ""}` };
    }
    case "delete_expense": {
      const e = find(state.expenses, a.id);
      return { kind: "remove", surface: "money", text: e ? `${state.currency || "₹"}${e.amt} · ${e.note || e.cat}` : `#${a.id}` };
    }
    case "add_recurring":
      return { kind: "add", surface: "money",
        text: recurLabel({ ...a, amount: aiAmountToMinor(a.amount) }, state.expenseCats || [], state.currency || "₹") };
    case "edit_recurring": {
      const r = find(state.recurring, a.id);
      const bits = [];
      if (a.amount !== undefined) bits.push(`${formatMoney(r?.amount || 0, state.currency)} → ${formatMoney(aiAmountToMinor(a.amount), state.currency)}`);
      if (a.active !== undefined) bits.push(a.active ? "resumed" : "paused");
      return { kind: "edit", surface: "money", text: `${r?.name || "rule"}: ${bits.join(", ") || "no change"}` };
    }
    case "delete_recurring": {
      const r = find(state.recurring, a.id);
      return { kind: "remove", surface: "money",
        text: r ? recurLabel(r, state.expenseCats || [], state.currency || "₹") : `#${a.id}` };
    }
    case "add_note":
      return { kind: "add", surface: "note", text: a.title };

    default:
      return { kind: "edit", surface: "?", text: a.op };
  }
}

// Applies a batch of approved actions. Every setter is called at most once
// with a single derived array, so React batches it into one render and one
// localStorage write per surface.
function applyAIActions(actions, state, setters) {
  let { routines, vaultHabits, habits, rewards } = {
    routines: [...state.routines],
    vaultHabits: [...state.vaultHabits],
    habits: [...state.habits],
    rewards: [...state.rewards],
  };
  // v54 surfaces. Money is one object because its three lists are written
  // together; the rest are plain arrays like the originals.
  let inventory = [...(state.inventory || [])];
  let notes = [...(state.notes || [])];
  let money = {
    items: [...(state.expenses || [])],
    cats: [...(state.expenseCats || [])],
    rules: [...(state.recurring || [])],
    currency: state.currency || "₹",
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
        habits = [...habits, { id: makeId(), label: a.label,
          tags: Array.isArray(a.tags) && a.tags.length ? a.tags : migrateAreaToTag(a, new Set(loadTags().map((t) => t.key))),
          xp: a.xp, penalty: 0, history: [] }];
        touched.add("habits"); break;
      case "delete_good_habit":
        habits = habits.filter((h) => h.id !== a.id);
        touched.add("habits"); break;

      case "add_bad_habit":
        habits = [...habits, { id: makeId(), label: a.label,
          tags: Array.isArray(a.tags) && a.tags.length ? a.tags : migrateAreaToTag(a, new Set(loadTags().map((t) => t.key))),
          xp: 0, penalty: a.xp, history: [] }];
        touched.add("habits"); break;
      case "delete_bad_habit":
        habits = habits.filter((h) => h.id !== a.id);
        touched.add("habits"); break;

      case "add_reward":
        rewards = [...rewards, { id: makeId(), label: a.label, cost: a.cost, claimed: [] }];
        touched.add("rewards"); break;
      case "delete_reward":
        rewards = rewards.filter((r) => r.id !== a.id);
        touched.add("rewards"); break;

      // ---- v54 ----------------------------------------------------------
      case "add_quest":
        habits = [...habits, {
          id: makeId(), label: a.label, tags: a.tags || [], desc: a.desc || "",
          xp: a.xp, penalty: a.penalty || 0, history: [],
        }];
        touched.add("habits"); break;
      case "edit_quest":
        habits = habits.map((h) => h.id === a.id ? {
          ...h,
          ...(a.label !== undefined ? { label: a.label } : {}),
          ...(a.desc !== undefined ? { desc: a.desc } : {}),
          ...(a.tags !== undefined ? { tags: a.tags } : {}),
          ...(a.xp !== undefined ? { xp: a.xp } : {}),
          ...(a.penalty !== undefined ? { penalty: a.penalty } : {}),
        } : h);
        touched.add("habits"); break;
      case "delete_quest":
        habits = habits.filter((h) => h.id !== a.id);
        touched.add("habits"); break;

      case "add_daily_task":
        inventory = [...inventory, {
          id: makeId(), text: a.text, diff: a.diff || "mid",
          tags: a.tags || [], history: [],
        }];
        touched.add("inventory"); break;
      case "delete_daily_task":
        inventory = inventory.filter((t) => t.id !== a.id);
        touched.add("inventory"); break;

      case "add_tag":
        if (setters.tagCtl) setters.tagCtl.addTag(a.label);
        break;

      case "add_expense_cat":
        money = { ...money, cats: addExpenseCat(money.cats, a.label) };
        touched.add("money"); break;
      case "add_expense":
        money = { ...money, items: [...money.items, {
          id: makeId(), amt: aiAmountToMinor(a.amount), cat: a.cat,
          note: a.name || "", d: a.date || getISTDateString(0), at: Date.now(),
        }] };
        touched.add("money"); break;
      case "delete_expense":
        money = { ...money, items: money.items.filter((e) => e.id !== a.id) };
        touched.add("money"); break;
      case "add_recurring":
        money = { ...money, rules: [...money.rules, {
          id: makeId(), kind: "expense", every: a.every, day: a.day,
          amount: aiAmountToMinor(a.amount), cat: a.cat, name: a.name || "",
          active: true, createdOn: getISTDateString(0), lastRun: null,
        }] };
        touched.add("money"); break;
      case "edit_recurring":
        money = { ...money, rules: money.rules.map((r) => r.id === a.id ? {
          ...r,
          ...(a.amount !== undefined ? { amount: aiAmountToMinor(a.amount) } : {}),
          ...(a.active !== undefined ? { active: a.active } : {}),
        } : r) };
        touched.add("money"); break;
      case "delete_recurring":
        money = { ...money, rules: money.rules.filter((r) => r.id !== a.id) };
        touched.add("money"); break;

      case "add_note":
        notes = [...notes, { id: makeId(), title: a.title, body: a.body || "", at: Date.now() }];
        touched.add("notes"); break;

      default: break;
    }
  }

  if (touched.has("routines")) setters.setRoutines(routines);
  if (touched.has("vaultHabits")) setters.setVaultHabits(vaultHabits);
  if (touched.has("habits")) setters.setHabits(habits);
  if (touched.has("rewards")) setters.setRewards(rewards);
  if (touched.has("inventory") && setters.setInventory) setters.setInventory(inventory);
  if (touched.has("notes") && setters.setNotes) setters.setNotes(notes);
  if (touched.has("money") && setters.setMoney) setters.setMoney((m) => ({ ...m, ...money }));
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
          habits: state.habits,
          rewards: state.rewards,
          totalXP: state.totalXP,
          // v54: everything added since v29 that the companion could not see.
          // The worker's snapshot was still reading goodHabits/badHabits --
          // merged away in v35 -- so it received ZERO quests and had no idea
          // expenses, daily tasks or tags existed at all.
          tags: state.tags,
          inventory: state.inventory,
          expenses: state.expenses,
          expenseCats: state.expenseCats,
          recurring: state.recurring,
          currency: state.currency,
          notes: state.notes,
          coins: state.coins,
          today: getISTDateString(0),
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
                  <button
                    className="keypool-move"
                    disabled={i === 0}
                    onClick={() => { setExisting(moveAIKey(k, -1)); sound.click(); }}
                    aria-label="Try this key earlier"
                    title="move up"
                  >↑</button>
                  <button
                    className="keypool-move"
                    disabled={i === existing.length - 1}
                    onClick={() => { setExisting(moveAIKey(k, 1)); sound.click(); }}
                    aria-label="Try this key later"
                    title="move down"
                  >↓</button>
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


// ============================================================
// CLOUD BACKUP (v38)
// ============================================================
// Clearing site data used to be the only reliable way to force new code onto
// the phone -- and clearing site data also deletes localStorage, which is the
// entire app. Two fixes ship together: this one makes a wipe survivable, and
// the update path below makes a wipe unnecessary in the first place.
//
// Threat model: the ciphertext sits in a KV namespace behind a URL whose only
// secret is a 10-character id. Ids leak -- deviceId used to be printed in the
// app for the widget feed, and anything printed once is public forever. So
// the id is treated as public and the payload is encrypted on this device
// under a key derived from a 16-character recovery code that is never sent
// anywhere. Lose the code and the backup is unreadable. That is the trade,
// and the UI says so in words rather than burying it.

const STORAGE_KEY_CLOUD = "tasksh.cloud.v1";

// Crockford base32: no i, l, o or u. This code gets read off one screen and
// typed into another phone, and 1/l and 0/o are exactly where that fails.
const CLOUD_ALPHABET = "0123456789abcdefghjkmnpqrstvwxyz";
const CLOUD_ID_LEN = 10;
const CLOUD_SECRET_LEN = 16;
const CLOUD_ROUNDS = 200000;
const CLOUD_MIN_GAP_MS = 60 * 60 * 1000;

// Keys that must never ride inside a file the user might hand to someone.
// The cloud config is in here because it holds the recovery code: a plaintext
// export containing the code that decrypts the cloud copy would undo the
// whole point of encrypting it.
const SENSITIVE_KEYS = [STORAGE_KEY_AI_KEY, STORAGE_KEY_AI_KEYS, STORAGE_KEY_CLOUD];

function randomToken(len) {
  const bytes = new Uint8Array(len);
  crypto.getRandomValues(bytes);
  let out = "";
  // 256 is a whole multiple of 32, so `% 32` is unbiased here. With a 31- or
  // 33-character alphabet this would quietly favour the first few letters.
  for (let i = 0; i < len; i++) out += CLOUD_ALPHABET[bytes[i] % CLOUD_ALPHABET.length];
  return out;
}

function makeRecoveryKey() {
  return `tsh-${randomToken(CLOUD_ID_LEN)}-${randomToken(CLOUD_SECRET_LEN)}`;
}

/** Tolerant on input, strict on shape. Spaces, case and the classic
 *  i/l/1 and o/0 mix-ups are normalised; anything else is rejected rather
 *  than silently deriving the wrong key and reporting "wrong code". */
function parseRecoveryKey(raw) {
  const cleaned = String(raw || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[il]/g, "1")
    .replace(/o/g, "0");
  const m = cleaned.match(/^tsh-([0-9a-z]{10})-([0-9a-z]{16})$/);
  return m ? { id: m[1], secret: m[2] } : null;
}

/** Throttle for the automatic push. A clock that jumped backwards must not
 *  wedge backups off forever, so a future `lastAt` counts as due. */
function shouldPushBackup(lastAt, now, gapMs = CLOUD_MIN_GAP_MS) {
  if (typeof lastAt !== "number" || !isFinite(lastAt) || lastAt <= 0) return true;
  if (lastAt > now) return true;
  return now - lastAt >= gapMs;
}

function bytesToB64(bytes) {
  let s = "";
  const CHUNK = 0x8000; // apply() on a 60KB array blows the argument limit
  for (let i = 0; i < bytes.length; i += CHUNK) {
    s += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
  }
  return btoa(s);
}

function b64ToBytes(b64) {
  const raw = atob(b64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

async function deriveCloudKey(secret, salt) {
  const material = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret), "PBKDF2", false, ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: CLOUD_ROUNDS, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

/** -> "v1.<salt>.<iv>.<ciphertext>", all base64. The version prefix is there
 *  so a future format change can be detected instead of mis-parsed. */
async function encryptBackup(plaintext, secret) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveCloudKey(secret, salt);
  const ct = new Uint8Array(
    await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(plaintext))
  );
  return ["v1", bytesToB64(salt), bytesToB64(iv), bytesToB64(ct)].join(".");
}

async function decryptBackup(blob, secret) {
  const parts = String(blob || "").split(".");
  if (parts.length !== 4 || parts[0] !== "v1") throw new Error("unrecognised backup format");
  const key = await deriveCloudKey(secret, b64ToBytes(parts[1]));
  let plain;
  try {
    // AES-GCM authenticates: a wrong key fails here rather than returning
    // plausible rubbish, which is the whole reason for GCM over CBC.
    plain = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: b64ToBytes(parts[2]) }, key, b64ToBytes(parts[3])
    );
  } catch {
    throw new Error("wrong recovery code");
  }
  return new TextDecoder().decode(plain);
}

/** Sweeps localStorage instead of naming keys. Any feature that adds a key
 *  is backed up automatically -- a hand-maintained list is a list that will
 *  be out of date on the one day it matters. */
function collectStore(full, alwaysSkip) {
  const skip = alwaysSkip || [];
  const store = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith("tasksh.")) continue;
    if (skip.indexOf(k) !== -1) continue;
    if (!full && SENSITIVE_KEYS.indexOf(k) !== -1) continue;
    store[k] = localStorage.getItem(k);
  }
  return store;
}

/** The cloud snapshot. Always carries API keys (the point is a one-tap
 *  restore) but never the cloud config itself: a backup that contains its
 *  own decryption key is not encrypted. */
function buildCloudSnapshot() {
  return JSON.stringify({
    app: "tasks.sh",
    version: 2,
    exportedAt: new Date().toISOString(),
    containsKeys: true,
    store: collectStore(true, [STORAGE_KEY_DEVICE_ID, STORAGE_KEY_CLOUD]),
  });
}

function readCloudConfig() {
  const cfg = loadStored(STORAGE_KEY_CLOUD, null);
  if (!cfg || typeof cfg !== "object" || !cfg.id || !cfg.secret) return null;
  return cfg;
}

function writeCloudConfig(patch) {
  const next = { ...(readCloudConfig() || {}), ...patch };
  try { localStorage.setItem(STORAGE_KEY_CLOUD, JSON.stringify(next)); } catch {}
  // The vault row and the background pusher both hold their own copy; this
  // keeps them from drifting without threading state through six components.
  try { window.dispatchEvent(new Event("tasksh-cloud")); } catch {}
  return next;
}

function clearCloudConfig() {
  try { localStorage.removeItem(STORAGE_KEY_CLOUD); } catch {}
  try { window.dispatchEvent(new Event("tasksh-cloud")); } catch {}
}

async function cloudPush(cfg, plaintext) {
  const blob = await encryptBackup(plaintext, cfg.secret);
  const res = await fetch(`${NOTIFY_WORKER_URL}/backup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: cfg.id, blob }),
  });
  let body = {};
  try { body = await res.json(); } catch { /* keep the status code as the message */ }

  // 429 means a push succeeded within the last five minutes -- i.e. the
  // backup is already there. v38 painted that red and said "too soon", so
  // tapping the button right after turning it on looked like a failure when
  // the automatic first push had in fact just worked.
  if (res.status === 429) {
    const err = new Error("already saved");
    err.alreadySaved = true;
    err.retryInMs = body.retryInMs || 0;
    throw err;
  }
  if (!res.ok) throw new Error(body.error || `push failed (${res.status})`);
  return { at: body.at || Date.now(), size: body.size || blob.length };
}

async function cloudFetch(id, opts) {
  const o = opts || {};
  const q = new URLSearchParams({ id });
  if (o.meta) q.set("meta", "1");
  if (o.prev) q.set("prev", "1");
  const res = await fetch(`${NOTIFY_WORKER_URL}/backup?${q.toString()}`);
  let body = {};
  try { body = await res.json(); } catch { /* fall through */ }
  if (res.status === 404) throw new Error("no backup stored for that code");
  if (!res.ok) throw new Error(body.error || `fetch failed (${res.status})`);
  return body;
}

/** Writes a restored store back and reloads. Reloading is deliberate: half
 *  these keys are only read inside a useState initialiser, so setting them
 *  without a reload leaves the UI showing yesterday's numbers. */
function applyRestoredStore(store) {
  const keys = Object.keys(store || {}).filter((k) => k.startsWith("tasksh."));
  let written = 0;
  for (const k of keys) {
    if (k === STORAGE_KEY_DEVICE_ID) continue; // never clone a device id
    if (k === STORAGE_KEY_CLOUD) continue;     // the code just typed in wins
    try { localStorage.setItem(k, store[k]); written++; } catch {}
  }
  return written;
}

function fmtAgo(ts, now) {
  if (!ts) return "never";
  const s = Math.max(0, Math.round((now - ts) / 1000));
  if (s < 60) return "just now";
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.round(h / 24)}d ago`;
}

function fmtSize(bytes) {
  if (!bytes) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

/** Background pusher. Runs on mount and whenever the app comes back to the
 *  foreground, throttled to once an hour, and stays silent on failure --
 *  a backup that interrupts you to complain about wifi is worse than no
 *  backup. Failures surface in the vault row, which is where you'd look. */
function useCloudAutoBackup() {
  useEffect(() => {
    let stopped = false;

    const run = async () => {
      if (stopped) return;
      const cfg = readCloudConfig();
      if (!cfg) return;
      if (!shouldPushBackup(cfg.lastAt, Date.now())) return;
      try {
        const out = await cloudPush(cfg, buildCloudSnapshot());
        if (!stopped) writeCloudConfig({ lastAt: out.at, lastSize: out.size, lastError: null });
      } catch (err) {
        if (stopped) return;
        if (err.alreadySaved) writeCloudConfig({ lastError: null });
        else writeCloudConfig({ lastError: String(err.message || err) });
      }
    };

    const onVis = () => { if (!document.hidden) run(); };
    // A couple of seconds after boot: the first paint should not wait on
    // PBKDF2 and a network round trip.
    const t = setTimeout(run, 2500);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stopped = true;
      clearTimeout(t);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
}

function CloudBackupRow() {
  const [cfg, setCfg] = useState(() => readCloudConfig());
  const [revealed, setRevealed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);
  const [restoring, setRestoring] = useState(false);
  const [entry, setEntry] = useState("");
  const [preview, setPreview] = useState(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const sync = () => setCfg(readCloudConfig());
    window.addEventListener("tasksh-cloud", sync);
    return () => window.removeEventListener("tasksh-cloud", sync);
  }, []);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const key = cfg ? `tsh-${cfg.id}-${cfg.secret}` : "";

  const turnOn = () => {
    const parsed = parseRecoveryKey(makeRecoveryKey());
    setCfg(writeCloudConfig({ id: parsed.id, secret: parsed.secret, lastAt: 0 }));
    setRevealed(true);
    setMsg({ type: "ok", text: "first backup running in the background…" });
    sound.click();
  };

  const turnOff = () => {
    clearCloudConfig();
    setCfg(null);
    setRevealed(false);
    setMsg(null);
    sound.click();
  };

  const backupNow = async () => {
    if (!cfg || busy) return;
    setBusy(true);
    setMsg(null);
    try {
      const out = await cloudPush(cfg, buildCloudSnapshot());
      setCfg(writeCloudConfig({ lastAt: out.at, lastSize: out.size, lastError: null }));
      setMsg({ type: "ok", text: `pushed ${fmtSize(out.size)}` });
    } catch (err) {
      if (err.alreadySaved) {
        const mins = Math.ceil((err.retryInMs || 0) / 60000);
        setMsg({ type: "ok", text: `already saved ${fmtAgo(cfg.lastAt, Date.now())}${mins ? ` · next in ${mins}m` : ""}` });
      } else {
        setMsg({ type: "err", text: String(err.message || err) });
      }
    } finally {
      setBusy(false);
    }
  };

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(key);
      setCopied(true);
      sound.click();
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => { setCopied(false); timer.current = null; }, 2000);
    } catch {
      setRevealed(true); // clipboard blocked -- the code is on screen anyway
    }
  };

  const lookup = async () => {
    const parsed = parseRecoveryKey(entry);
    if (!parsed) {
      setMsg({ type: "err", text: "that doesn't look like a recovery code" });
      return;
    }
    setBusy(true);
    setMsg(null);
    try {
      const rec = await cloudFetch(parsed.id, {});
      const plain = await decryptBackup(rec.blob, parsed.secret);
      const parsedJson = JSON.parse(plain);
      const store = parsedJson.store || {};
      setPreview({ parsed, rec, store, keys: Object.keys(store).length, when: parsedJson.exportedAt });
      setMsg(null);
    } catch (err) {
      setPreview(null);
      setMsg({ type: "err", text: String(err.message || err) });
    } finally {
      setBusy(false);
    }
  };

  const applyRestore = () => {
    if (!preview) return;
    const written = applyRestoredStore(preview.store);
    // Adopt the code that was just used, so this device keeps the same
    // backup line instead of silently starting a second one.
    writeCloudConfig({
      id: preview.parsed.id,
      secret: preview.parsed.secret,
      lastAt: preview.rec.at || 0,
      lastSize: preview.rec.size || 0,
      lastError: null,
    });
    setMsg({ type: "ok", text: `restored ${written} keys — reloading` });
    setTimeout(() => window.location.reload(), 700);
  };

  const now = Date.now();

  return (
    <>
      <div className="section-header"><span>CLOUD-BACKUP</span></div>
      <div className="note-card cloud-card">
        <div className="note-head">
          <span className="note-prompt">~/backup</span>
          <span className="note-when">
            {cfg ? `${fmtAgo(cfg.lastAt, now)}${cfg.lastSize ? ` · ${fmtSize(cfg.lastSize)}` : ""}` : "off"}
          </span>
        </div>

        {!cfg && !restoring && (
          <pre className="note-body">
            an encrypted copy, pushed hourly. the code below is the only way
            to read it back — the server cannot.
          </pre>
        )}

        {cfg && (
          <pre className="note-body cloud-key">
            {revealed ? key : "recovery code hidden · tap reveal"}
          </pre>
        )}

        {cfg && revealed && (
          <pre className="note-body cloud-warn">
            save this somewhere off the phone. without it the backup is
            unreadable — that is what makes it safe to store.
          </pre>
        )}

        {cfg && cfg.lastError && (
          <pre className="note-body cloud-warn">last push failed: {cfg.lastError}</pre>
        )}

        {restoring && (
          <>
            <input
              className="cloud-input"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="tsh-xxxxxxxxxx-xxxxxxxxxxxxxxxx"
              spellCheck="false"
              autoCapitalize="none"
              autoComplete="off"
              aria-label="recovery code"
            />
            {preview && (
              <pre className="note-body cloud-preview">
                {`${preview.keys} keys · ${fmtSize(preview.rec.size)} · saved ${fmtAgo(preview.rec.at, now)}`}
                {"\n"}applying overwrites everything on this device.
              </pre>
            )}
          </>
        )}

        {msg && <pre className={`note-body cloud-msg ${msg.type}`}>{msg.text}</pre>}

        <div className="note-actions">
          {!cfg && !restoring && (
            <button className="note-btn save" onClick={turnOn}>turn on</button>
          )}
          {cfg && !restoring && (
            <>
              <button className="note-btn" onClick={() => { setRevealed((v) => !v); sound.click(); }}>
                {revealed ? "hide" : "reveal"}
              </button>
              <button className="note-btn" onClick={copyKey}>{copied ? "copied" : "copy code"}</button>
              <button className="note-btn save" onClick={backupNow} disabled={busy}>
                {busy ? "pushing…" : "back up now"}
              </button>
            </>
          )}
          {!restoring && (
            <button className="note-btn" onClick={() => { setRestoring(true); setMsg(null); sound.click(); }}>
              restore
            </button>
          )}
          {restoring && (
            <>
              <button className="note-btn" onClick={lookup} disabled={busy}>
                {busy ? "checking…" : "look up"}
              </button>
              {preview && (
                <button className="note-btn danger" onClick={applyRestore}>apply</button>
              )}
              <button
                className="note-btn"
                onClick={() => { setRestoring(false); setPreview(null); setEntry(""); setMsg(null); sound.click(); }}
              >
                cancel
              </button>
            </>
          )}
          {cfg && !restoring && (
            <button className="note-btn danger" onClick={turnOff}>turn off</button>
          )}
        </div>
      </div>
    </>
  );
}

// ============================================================
// APP UPDATE (v38)
// ============================================================
// The old registration was one line -- register("sw.js") and nothing more.
// A new worker would install and activate (sw.js calls skipWaiting), but the
// PAGE went on running the bundle.js already in memory, so the app looked
// unchanged until something forced a full navigation. An installed PWA
// resumed from the launcher often isn't one. The workaround people reach for
// is "clear site data", which also deletes localStorage: every task, habit
// and XP point, thrown away to fix a cache. Hence this.

function isTyping(doc) {
  const el = doc && doc.activeElement;
  if (!el) return false;
  const tag = String(el.tagName || "").toLowerCase();
  return tag === "input" || tag === "textarea" || el.isContentEditable === true;
}

/** Hidden and idle -> swap immediately, so the next look at the app is the
 *  new build. Otherwise ask: reloading under someone's fingers throws away
 *  whatever they were half-way through typing.
 *
 *  `hadController` is the one that isn't obvious. controllerchange also
 *  fires the FIRST time a worker claims an uncontrolled page -- i.e. on a
 *  brand-new install, where nothing has updated at all. Without this guard
 *  every first launch opens with "new build ready", which is both a lie and
 *  a reload loop waiting to happen. Caught in a screenshot, not a test. */
function decideUpdateAction(hidden, typing, hadController) {
  if (!hadController) return "ignore";
  return hidden && !typing ? "reload" : "prompt";
}

/** Drops the service worker and every cache, then reloads. localStorage is
 *  deliberately untouched -- this is the "clear site data" people reach for,
 *  minus the part that destroys the data. */
async function purgeAppCode() {
  try {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.map((r) => r.unregister()));
  } catch { /* no SW support, or already gone */ }
  try {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
  } catch { /* no cache API */ }
  window.location.reload();
}

const UPDATE_POLL_MS = 30 * 60 * 1000;

function useAppUpdate() {
  const [pending, setPending] = useState(false);
  const pendingRef = useRef(false);
  const reloading = useRef(false);

  const mark = (v) => { pendingRef.current = v; setPending(v); };

  const apply = () => {
    if (reloading.current) return;
    reloading.current = true;
    window.location.reload();
  };

  const check = async () => {
    try {
      // index.html stashes the registration: getRegistration() races the
      // load-event listener on a cold start and returns undefined, which
      // makes the check a silent no-op exactly when it matters most.
      const reg = window.__swReg || await navigator.serviceWorker.getRegistration();
      if (reg) await reg.update();
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const sw = navigator.serviceWorker;
    if (!sw) return;

    // Was this page under a worker's control BEFORE the change that just
    // fired? Not "at mount" -- a first visit loads uncontrolled, and reading
    // this once would then ignore every real update for the rest of that
    // session. It has to move with each event.
    let wasControlled = !!sw.controller;

    // A new worker took over. With skipWaiting in sw.js this fires as soon as
    // the new code is installed, while this page is still running the old.
    const onController = () => {
      const action = decideUpdateAction(document.hidden, isTyping(document), wasControlled);
      wasControlled = !!sw.controller;
      if (action === "ignore") return;
      if (action === "reload") apply();
      else mark(true);
    };

    const onVis = () => {
      if (document.hidden) {
        // Deferred from earlier: the moment the app is out of sight and
        // nothing is being typed, take the update.
        if (pendingRef.current && !isTyping(document)) apply();
      } else {
        check();
      }
    };

    sw.addEventListener("controllerchange", onController);
    document.addEventListener("visibilitychange", onVis);
    check();
    const poll = setInterval(check, UPDATE_POLL_MS);

    return () => {
      sw.removeEventListener("controllerchange", onController);
      document.removeEventListener("visibilitychange", onVis);
      clearInterval(poll);
    };
  }, []);

  return { pending, apply, check };
}

function AppUpdateRow() {
  const version = useRunningVersion();
  const [state, setState] = useState("idle");
  const [armed, setArmed] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const check = async () => {
    setState("checking");
    sound.click();
    try {
      const reg = window.__swReg || await navigator.serviceWorker.getRegistration();
      if (reg) await reg.update();
      // No callback tells you "already current", so this reports what it can:
      // the check ran. If a new worker was found, the update bar appears.
      setState("checked");
    } catch {
      setState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => { setState("idle"); timer.current = null; }, 4000);
  };

  return (
    <>
      <div className="section-header"><span>APP-UPDATE</span></div>
      <div className="note-card update-card">
        <div className="note-head">
          <span className="note-prompt">~/build</span>
          <span className="note-when">{version || "unknown"}</span>
        </div>
        <pre className="note-body">
          {state === "checking" ? "checking for a new build…"
            : state === "checked" ? "checked — a new build reloads on its own"
            : state === "failed" ? "couldn't reach the server"
            : "reload app code drops the cache and re-downloads. your tasks, habits and XP are not touched."}
        </pre>
        <div className="note-actions">
          <button className="note-btn" onClick={check}>check now</button>
          {armed ? (
            <>
              <button className="note-btn danger" onClick={() => { sound.click(); purgeAppCode(); }}>
                confirm reload
              </button>
              <button className="note-btn" onClick={() => { setArmed(false); sound.click(); }}>cancel</button>
            </>
          ) : (
            <button className="note-btn save" onClick={() => { setArmed(true); sound.click(); }}>
              reload app code
            </button>
          )}
        </div>
      </div>
    </>
  );
}

// ============================================================
// TOOLS (v39)
// ============================================================
// A tab of small utilities that exist because the web versions are either
// ad-choked or paywalled. The registry below is the whole extension point:
// add an entry, get a card on the grid and a view behind it. Nothing else
// in the app needs to know a new tool exists.

const STORAGE_KEY_POMODORO = "tasksh.pomodoro.v1";

const POMO_DEFAULTS = { work: 25, short: 5, long: 15, rounds: 4 };

// Minutes, not milliseconds, everywhere the user can see. Bounds are here so
// a fat-fingered "250" can't create a four-hour block that then pays out
// four hours of coins.
const POMO_LIMITS = { work: [1, 120], short: [1, 60], long: [1, 90], rounds: [1, 12] };

// A block that ended more than this long ago is treated as abandoned rather
// than completed: the phone was in a pocket, not on a desk. No coins, no
// auto-advance -- just a reset. Two hours is long enough to cover "I left it
// running through lunch" and short enough to exclude "I opened the app three
// days later".
const POMO_STALE_MS = 2 * 60 * 60 * 1000;

const POMO_PHASES = {
  work:  { label: "focus",       color: "var(--accent)"  },
  short: { label: "short break", color: "var(--accent2)" },
  long:  { label: "long break",  color: "#8B9CF7"        },
};

function sanitisePomodoroSettings(patch) {
  const out = { ...POMO_DEFAULTS, ...(patch || {}) };
  for (const key of Object.keys(POMO_LIMITS)) {
    const [lo, hi] = POMO_LIMITS[key];
    const raw = out[key];
    // Absent is not the same as zero. Number(null) is 0, which would clamp a
    // missing "rounds" to 1 -- a corrupted save would quietly turn a 4-round
    // set into a 1-round one instead of falling back to the default.
    if (raw === null || raw === undefined || raw === "") { out[key] = POMO_DEFAULTS[key]; continue; }
    const n = Math.round(Number(raw));
    out[key] = !isFinite(n) ? POMO_DEFAULTS[key] : Math.min(hi, Math.max(lo, n));
  }
  return out;
}

function pomodoroPhaseMinutes(phase, settings) {
  const s = sanitisePomodoroSettings(settings);
  if (phase === "short") return s.short;
  if (phase === "long") return s.long;
  return s.work;
}

/** work ×N with short breaks between, one long break at the end of the set,
 *  then back to round 1. The round only advances off a SHORT break: counting
 *  it on the work block makes the last round end on "5 of 4". */
function nextPomodoroPhase(phase, round, settings) {
  const s = sanitisePomodoroSettings(settings);
  if (phase === "work") {
    return round >= s.rounds ? { phase: "long", round } : { phase: "short", round };
  }
  if (phase === "short") return { phase: "work", round: Math.min(s.rounds, round + 1) };
  return { phase: "work", round: 1 };
}

/** One coin a minute, capped. Daily quests pay 10/50/100, so a 25-minute
 *  block at 25 coins sits deliberately between "easy" and "mid" -- focus
 *  should be worth something, and never worth more than a hard quest. */
function pomodoroCoins(minutes) {
  const n = Math.round(Number(minutes) || 0);
  return Math.min(60, Math.max(1, n));
}

function formatClock(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

/** What happened while the app wasn't running.
 *
 *  Deliberately finishes at most ONE phase. Chaining four blocks because the
 *  phone sat in a pocket for two hours would be inventing focus that never
 *  happened, and paying coins for it.
 */
function resolvePomodoroSession(session, now) {
  if (!session || !session.running || !session.endsAt) return { finished: null, stale: false };
  if (now < session.endsAt) return { finished: null, stale: false };
  const overdueMs = now - session.endsAt;
  return { finished: session.phase, overdueMs, stale: overdueMs > POMO_STALE_MS };
}

/** What the timer should look like the moment the tool opens, given what
 *  was saved and how long ago that was.
 *
 *  This has to be pure and it has to run BEFORE the first render commits.
 *  It used to be a mount effect, and React ran the per-tick completion
 *  effect in the same pass with the pre-catch-up session still in scope --
 *  so an abandoned block took the stale path and the normal path, rang, and
 *  paid out. Resolving up front means the first state the component ever
 *  holds is already correct and nothing is left running.
 */
function resolveBootPomodoro(stored, now) {
  const settings = sanitisePomodoroSettings(stored && stored.settings);
  const session = (stored && stored.session) || null;
  const idle = (phase, round) => ({ phase, round, running: false, endsAt: null, remainingMs: null });

  const r = resolvePomodoroSession(session, now);
  if (!r.finished) return { settings, session, payout: 0, rang: false };
  if (r.stale) return { settings, session: idle("work", 1), payout: 0, rang: false };

  const round = session.round || 1;
  const next = nextPomodoroPhase(session.phase, round, settings);
  const payout = session.phase === "work" ? pomodoroCoins(pomodoroPhaseMinutes("work", settings)) : 0;
  return { settings, session: idle(next.phase, next.round), payout, rang: true };
}

function loadPomodoro() {
  const raw = loadStored(STORAGE_KEY_POMODORO, null) || {};
  return {
    settings: sanitisePomodoroSettings(raw.settings),
    session: raw.session && typeof raw.session === "object" ? raw.session : null,
  };
}

function savePomodoro(state) {
  try { localStorage.setItem(STORAGE_KEY_POMODORO, JSON.stringify(state)); } catch {}
}

/** Hands the end time to the worker so its once-a-minute cron can fire a real
 *  push. Android suspends timers and audio in the background, so the in-app
 *  beep is the nice case, not the reliable one. `at = 0` cancels.
 *
 *  Never throws at the caller: a timer that works offline and rings quietly
 *  beats one that shows a network error you can do nothing about.
 */
async function syncPomodoroTimer(at, label) {
  try {
    await fetch(`${NOTIFY_WORKER_URL}/timer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deviceId: getDeviceId(), at: at || 0, label: label || "focus block" }),
    });
  } catch { /* offline: the foreground beep still fires */ }
}

function PomodoroTool({ onReward }) {
  const boot = useRef(null);
  if (!boot.current) boot.current = resolveBootPomodoro(loadPomodoro(), Date.now());
  const [settings, setSettings] = useState(boot.current.settings);
  const [session, setSession] = useState(boot.current.session);
  const [tick, setTick] = useState(0);
  const [editing, setEditing] = useState(null);
  const [ringing, setRinging] = useState(false);
  const wakeLock = useRef(null);
  const ringTimer = useRef(null);
  // A ten-second alarm that outlives the screen it rang on is a bug you
  // hear rather than see.
  useEffect(() => () => { stopAlarm(); if (ringTimer.current) clearTimeout(ringTimer.current); }, []);

  const phase = session?.phase || "work";
  const round = session?.round || 1;
  const running = !!session?.running;
  const totalMs = pomodoroPhaseMinutes(phase, settings) * 60000;
  const leftMs = running
    ? Math.max(0, (session.endsAt || 0) - Date.now())
    : (session?.remainingMs ?? totalMs);

  useEffect(() => { savePomodoro({ settings, session }); }, [settings, session]);

  // Screen wake lock while a block runs: a locked screen is exactly when
  // Chrome suspends the audio context, so keeping it awake is what makes the
  // in-app ring fire at the right second rather than whenever you look again.
  useEffect(() => {
    let released = false;
    const acquire = async () => {
      try {
        if (running && "wakeLock" in navigator) wakeLock.current = await navigator.wakeLock.request("screen");
      } catch { /* denied or unsupported -- the push notification covers it */ }
    };
    const release = () => {
      try { wakeLock.current && wakeLock.current.release(); } catch {}
      wakeLock.current = null;
    };
    if (running) acquire(); else release();
    return () => { if (!released) { released = true; release(); } };
  }, [running]);

  const finishPhase = (finishedPhase, opts) => {
    const silent = opts && opts.silent;
    const paid = finishedPhase === "work" && !(opts && opts.noCoins);
    if (paid) onReward(pomodoroCoins(pomodoroPhaseMinutes("work", settings)));
    if (!silent) {
      const secs = loadSoundCfg().alarmSeconds;
      ringAlarm(secs);
      if (secs) {
        setRinging(true);
        if (ringTimer.current) clearTimeout(ringTimer.current);
        ringTimer.current = setTimeout(() => { setRinging(false); ringTimer.current = null; }, secs * 1000 + 300);
      }
    }
    const next = nextPomodoroPhase(finishedPhase, round, settings);
    // The next phase is queued but NOT started: coming back to a timer that
    // silently rolled into a break you never took is worse than a prompt.
    setSession({ phase: next.phase, round: next.round, running: false, endsAt: null, remainingMs: null });
    syncPomodoroTimer(0);
  };

  // The boot resolver already advanced the phase; this only settles up the
  // side effects it isn't allowed to have during render.
  useEffect(() => {
    if (boot.current.payout) onReward(boot.current.payout);
    if (boot.current.rang || boot.current.session !== loadPomodoro().session) syncPomodoroTimer(0);
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTick((t) => t + 1), 250);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (!running || !session?.endsAt) return;
    if (Date.now() < session.endsAt) return;
    finishPhase(session.phase, {});
  }, [tick, running, session]);

  const start = () => {
    const ms = session?.remainingMs ?? totalMs;
    const endsAt = Date.now() + ms;
    setSession({ phase, round, running: true, endsAt, remainingMs: null });
    syncPomodoroTimer(endsAt, POMO_PHASES[phase].label);
    sound.click();
  };

  const pause = () => {
    setSession({ phase, round, running: false, endsAt: null, remainingMs: leftMs });
    syncPomodoroTimer(0);
    sound.toggle();
  };

  const reset = () => {
    setSession({ phase, round, running: false, endsAt: null, remainingMs: null });
    syncPomodoroTimer(0);
    sound.delete();
  };

  /** Jump straight to a phase. The cycle still auto-advances when a block
   *  ends, but it is no longer a cage: "long break now" used to be four
   *  skips away, and each skip also moved the round counter. */
  const goToPhase = (next) => {
    setSession({ phase: next, round, running: false, endsAt: null, remainingMs: null });
    syncPomodoroTimer(0);
    sound.click();
  };

  const setRound = (n) => {
    const r = Math.min(settings.rounds, Math.max(1, n));
    setSession({ phase, round: r, running: false, endsAt: null, remainingMs: null });
    syncPomodoroTimer(0);
    sound.click();
  };

  const skip = () => {
    const next = nextPomodoroPhase(phase, round, settings);
    setSession({ phase: next.phase, round: next.round, running: false, endsAt: null, remainingMs: null });
    syncPomodoroTimer(0);
    sound.whoosh();
  };

  const bump = (key, by) => {
    setSettings((s) => {
      const nextVal = sanitisePomodoroSettings({ ...s, [key]: (s[key] || 0) + by });
      return nextVal;
    });
    // An edit to the CURRENT phase's length only applies once it's idle --
    // shortening a running block to below the elapsed time would end it
    // retroactively, which reads as a crash.
    if (!running) setSession((prev) => (prev ? { ...prev, remainingMs: null } : prev));
    sound.click();
  };

  const pct = totalMs > 0 ? Math.min(1, Math.max(0, 1 - leftMs / totalMs)) : 0;
  const R = 52;
  const C = 2 * Math.PI * R;
  const meta = POMO_PHASES[phase];

  return (
    <div className="pomo">
      <div className="pomo-dial">
        <svg viewBox="0 0 120 120" className="pomo-ring" aria-hidden="true">
          <circle cx="60" cy="60" r={R} className="pomo-ring-track" />
          <circle
            cx="60" cy="60" r={R}
            className="pomo-ring-fill"
            style={{
              stroke: meta.color,
              strokeDasharray: C,
              strokeDashoffset: C * (1 - pct),
            }}
          />
        </svg>
        <div className="pomo-centre">
          <div className="pomo-clock">{formatClock(leftMs)}</div>
          <div className="pomo-phase" style={{ color: meta.color }}>{meta.label}</div>
        </div>
      </div>

      {ringing && (
        <button
          className="pomo-silence"
          onClick={() => {
            stopAlarm();
            setRinging(false);
            if (ringTimer.current) { clearTimeout(ringTimer.current); ringTimer.current = null; }
          }}
        >
          ■ silence
        </button>
      )}

      <div className="pomo-phase-pick" role="group" aria-label="Choose a block">
        {[["work", "focus"], ["short", "short"], ["long", "long"]].map(([id, label]) => (
          <button
            key={id}
            className={`pomo-chip ${phase === id ? "on" : ""}`}
            style={phase === id ? { borderColor: POMO_PHASES[id].color, color: POMO_PHASES[id].color } : undefined}
            onClick={() => goToPhase(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="pomo-pips" aria-label={`round ${round} of ${settings.rounds}`}>
        {Array.from({ length: settings.rounds }, (_, i) => (
          <button
            key={i}
            className={`pomo-pip ${i + 1 < round ? "done" : ""} ${i + 1 === round ? "active" : ""}`}
            onClick={() => setRound(i + 1)}
            aria-label={`go to round ${i + 1}`}
          />
        ))}
        <span className="pomo-round">round {round}/{settings.rounds}</span>
      </div>

      <div className="pomo-controls">
        {running ? (
          <button className="pomo-btn primary" onClick={pause}>pause</button>
        ) : (
          <button className="pomo-btn primary" onClick={start}>
            {leftMs < totalMs ? "resume" : "start"}
          </button>
        )}
        <button className="pomo-btn" onClick={reset}>reset</button>
        <button className="pomo-btn" onClick={skip}>skip</button>
      </div>

      <div className="section-header"><span>LENGTHS</span></div>
      <div className="pomo-settings">
        {[
          ["work", "focus", "m"],
          ["short", "short break", "m"],
          ["long", "long break", "m"],
          ["rounds", "rounds", ""],
        ].map(([key, label, unit]) => (
          <div className={`pomo-set ${editing === key ? "open" : ""}`} key={key}>
            <button className="pomo-set-face" onClick={() => { setEditing(editing === key ? null : key); sound.click(); }}>
              <span className="pomo-set-label">{label}</span>
              <span className="pomo-set-value">{settings[key]}{unit}</span>
            </button>
            {editing === key && (
              <div className="pomo-stepper">
                <button onClick={() => bump(key, -1)} aria-label={`decrease ${label}`}>−</button>
                <button onClick={() => bump(key, -5)} disabled={key === "rounds"}>−5</button>
                <button onClick={() => bump(key, +5)} disabled={key === "rounds"}>+5</button>
                <button onClick={() => bump(key, +1)} aria-label={`increase ${label}`}>+</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* no hard line breaks: a <pre> with baked-in newlines re-wraps on a
          narrow screen and the text comes out ragged */}
      <div className="pomo-note">
        <div>finishing a focus block pays {pomodoroCoins(settings.work)} coins.</div>
        <div>it also rings as a notification, so it works with the screen off — up to a minute late, because the worker ticks once a minute.</div>
      </div>
    </div>
  );
}

// ============================================================
// AI CAPTIONS (v40)
// ============================================================
// Upload a clip under a minute, get word-timed captions burned in.
//
// Three things had to be true for this to be worth building, and all three
// were checked before a line was written:
//
//  1. Word-level timing, free. Groq's whisper-large-v3-turbo returns it with
//     `timestamp_granularities=word`, and the free tier is 28,800 audio
//     seconds a day -- 8 hours, or ~480 clips of this length.
//  2. The phone can be talked to directly. api.groq.com answers CORS
//     preflight with `access-control-allow-origin: *`, so the audio goes
//     straight from the device. Nothing is uploaded to our worker, and the
//     VIDEO never leaves the phone at all -- only ~2MB of stripped audio.
//  3. Burn-in without ffmpeg. WebCodecs is the phone's own hardware encoder;
//     mediabunny (~30kB) supplies the MP4 container it deliberately omits.
//     ffmpeg.wasm would have been ~30MB, 65x this entire app.
//
// The 60s cap isn't arbitrary: it keeps one clip inside the free audio quota,
// inside Groq's 25MB upload cap once stripped to 16kHz mono, and inside a
// memory budget a mid-range phone can actually hold.

const STORAGE_KEY_CAPTIONS = "tasksh.captions.v1";
const CAPTION_MAX_SECONDS = 60;
const GROQ_ASR_URL = "https://api.groq.com/openai/v1/audio/transcriptions";
// turbo first (216x realtime, 12% WER), large-v3 as the rescue (189x,
// 10.3%). Both are free on Groq, so escalating costs a second, not money.
const GROQ_ASR_MODEL = "whisper-large-v3-turbo";
const GROQ_ASR_MODEL_ACCURATE = "whisper-large-v3";

// Whisper narrates non-speech instead of staying quiet: a sung stretch comes
// back as "[Music]", "(OUTRO MUSIC)", "♪♪♪". Burning that into a video is
// worse than burning nothing -- which is exactly what a music-only short got.
const NON_SPEECH_TERMS = "music|outro music|intro music|applause|laughter|silence|inaudible|background music|singing|instrumental|no speech|sound effects|clapping|cheering|blank_audio";

// Bracketed only, e.g. "[Music]" / "(OUTRO MUSIC)" / "[BLANK_AUDIO]".
const NON_SPEECH_RE = new RegExp("^[\\s\\u266a~\\-]*[\\[\\(\\{]\\s*(" + NON_SPEECH_TERMS + ")\\s*[\\]\\)\\}][\\s\\u266a~\\-.!]*$", "i");

// Unbracketed, but only when it is a whole multi-word stage direction. A
// bare "music" is dropped nowhere: at word-level granularity that is far
// more likely to be a lyric ("the music never stops") than a Whisper tag,
// and a test caught exactly that.
const NON_SPEECH_PHRASE_RE = new RegExp("^[\\s\\u266a~\\-]*(outro music|intro music|background music|no speech|blank_audio|sound effects)[\\s\\u266a~\\-.!]*$", "i");

function isNonSpeech(text) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (NON_SPEECH_RE.test(t)) return true;
  if (NON_SPEECH_PHRASE_RE.test(t)) return true;
  if (/^[\[\(\{].*[\]\)\}]$/.test(t)) return true;      // any bracketed aside
  return /^[\u266a~\-\s.]+$/.test(t);                      // just music notes
}

function stripNonSpeech(words) {
  return (words || []).filter((w) => !isNonSpeech(w.text));
}

/** Did Whisper actually hear anything, or did it shrug?
 *  Two cheap signals: almost nothing survives the filter, or what survives
 *  covers a sliver of the clip. A 45s song yielding four words is a failure
 *  even though the API returned 200. */
function transcriptLooksEmpty(words, durationSec) {
  const real = stripNonSpeech(words);
  if (real.length < 3) return true;
  if (!durationSec || durationSec <= 0) return false;
  const covered = real.reduce((sum, w) => sum + Math.max(0, w.end - w.start), 0);
  return covered / durationSec < 0.12;
}

// 224-token budget on Groq. A style hint, not an instruction: it biases the
// decoder toward transcribing sung words rather than labelling them.
const LYRICS_PROMPT =
  "Song lyrics, sung vocals. Transcribe the words that are sung, verse by verse. "
  + "Do not describe the music. Do not write [Music] or (outro music).";

/** Words -> caption lines.
 *
 *  This function is the difference between captions that look professional
 *  and captions that look automatic, so every rule in it is deliberate:
 *
 *   - at most 3 words and 22 characters a line. Longer lines force the eye
 *     to track sideways instead of reading in place;
 *   - a pause longer than 350ms starts a new line, because that pause is a
 *     phrase boundary the speaker already marked;
 *   - a line always breaks AFTER sentence punctuation, never before;
 *   - nothing is on screen for under 250ms, or fast speech strobes. The
 *     extension is clipped against the next line's start so they can never
 *     overlap and double-draw.
 */
function chunkWords(words, opts) {
  const o = opts || {};
  const maxWords = o.maxWords || 3;
  const maxChars = o.maxChars || 22;
  const gapBreak = o.gapBreak == null ? 0.35 : o.gapBreak;
  const minDur = o.minDur == null ? 0.25 : o.minDur;

  const out = [];
  let cur = null;

  for (const raw of words || []) {
    const text = String((raw && (raw.word != null ? raw.word : raw.text)) || "").trim();
    const start = Number(raw && raw.start);
    const end = Number(raw && raw.end);
    if (!text || !isFinite(start) || !isFinite(end) || end < start) continue;

    const last = cur && cur.words[cur.words.length - 1];
    const startsNew =
      !cur ||
      cur.words.length >= maxWords ||
      (cur.text + " " + text).length > maxChars ||
      start - cur.end > gapBreak ||
      /[.!?]$/.test(last.text);

    if (startsNew) {
      cur = { start, end, text, words: [{ text, start, end }] };
      out.push(cur);
    } else {
      cur.words.push({ text, start, end });
      cur.end = end;
      cur.text += " " + text;
    }
  }

  for (let i = 0; i < out.length; i++) {
    const c = out[i];
    const next = out[i + 1];
    if (c.end - c.start < minDur) c.end = c.start + minDur;
    if (next && c.end > next.start) c.end = next.start;
  }
  return out;
}

/** Linear scan is correct here: 60s of speech is ~40 chunks, and a binary
 *  search would be harder to read for a lookup that costs nothing. */
function activeChunkAt(chunks, t) {
  for (const c of chunks || []) {
    if (t >= c.start && t < c.end) return c;
  }
  return null;
}

function activeWordIndex(chunk, t) {
  if (!chunk) return -1;
  for (let i = chunk.words.length - 1; i >= 0; i--) {
    if (t >= chunk.words[i].start) return i;
  }
  return -1;
}

/** Every caption property the editor can change, with the bounds it must
 *  stay inside. Bounds are not decoration: a 0.2 font size is a word per
 *  screen, a 0 stroke disappears on white backgrounds, and a baseline below
 *  0.92 sits under Instagram's UI. */
const CAPTION_LIMITS = {
  size:     [0.028, 0.12],
  weight:   [400, 900],
  tracking: [-0.02, 0.12],
  maxWords: [1, 5],
  posY:     [0.25, 0.92],
  strokeW:  [0, 0.28],
};

const CAPTION_FONTS = [
  { id: "inter",  name: "inter",  stack: "Inter, system-ui, sans-serif" },
  { id: "mono",   name: "mono",   stack: "var(--font-mono)" },
  { id: "system", name: "system", stack: "system-ui, -apple-system, Roboto, 'Helvetica Neue', sans-serif" },
  { id: "serif",  name: "serif",  stack: "Georgia, 'Times New Roman', serif" },
];
const captionFontStack = (id) =>
  (CAPTION_FONTS.find((f) => f.id === id) || CAPTION_FONTS[0]).stack;

/** How the word being spoken is marked. Four behaviours rather than a
 *  colour picker alone, because "karaoke" is a motion decision as much as a
 *  colour one. */
const CAPTION_HIGHLIGHTS = [
  { id: "none",   name: "none",    hint: "every word the same" },
  { id: "colour", name: "colour",  hint: "spoken word changes colour" },
  { id: "pop",    name: "pop",     hint: "one word at a time, scaling in" },
  { id: "box",    name: "box",     hint: "spoken word on a filled chip" },
];

const CAPTION_SWATCHES = [
  "#FFFFFF", "#000000", "#5EEAD4", "#F5A623", "#F0576B", "#8B9CF7", "#7EED5A", "#FFE066",
];

const DEFAULT_CAPTION_STYLE = {
  font: "inter",
  size: 0.055,
  weight: 800,
  tracking: 0.01,
  upper: false,
  maxWords: 3,
  posY: 0.82,
  align: "center",
  fill: "#FFFFFF",
  active: "#5EEAD4",
  stroke: "#000000",
  strokeW: 0.16,
  highlight: "colour",
  boxColor: "#5EEAD4",
};

const CAPTION_PRESETS = [
  { id: "clean",   name: "clean",    patch: { highlight: "none",   size: 0.055, weight: 800, upper: false, fill: "#FFFFFF", strokeW: 0.16, maxWords: 3 } },
  { id: "karaoke", name: "karaoke",  patch: { highlight: "colour", size: 0.055, weight: 800, upper: false, active: "#5EEAD4", strokeW: 0.16, maxWords: 3 } },
  { id: "pop",     name: "word pop", patch: { highlight: "pop",    size: 0.078, weight: 900, upper: true,  active: "#F5A623", strokeW: 0.18, maxWords: 3 } },
  { id: "chip",    name: "chip",     patch: { highlight: "box",    size: 0.05,  weight: 800, upper: true,  boxColor: "#F5A623", fill: "#FFFFFF", strokeW: 0.08, maxWords: 2 } },
];

function sanitiseCaptionStyle(patch) {
  const out = { ...DEFAULT_CAPTION_STYLE, ...(patch || {}) };
  for (const key of Object.keys(CAPTION_LIMITS)) {
    const [lo, hi] = CAPTION_LIMITS[key];
    const n = Number(out[key]);
    out[key] = !isFinite(n) ? DEFAULT_CAPTION_STYLE[key] : Math.min(hi, Math.max(lo, n));
  }
  out.maxWords = Math.round(out.maxWords);
  out.weight = Math.round(out.weight / 100) * 100;
  if (!CAPTION_FONTS.some((f) => f.id === out.font)) out.font = DEFAULT_CAPTION_STYLE.font;
  if (!CAPTION_HIGHLIGHTS.some((h) => h.id === out.highlight)) out.highlight = DEFAULT_CAPTION_STYLE.highlight;
  if (["left", "center", "right"].indexOf(out.align) === -1) out.align = "center";
  out.upper = !!out.upper;
  return out;
}

/** Draws one frame of captions onto a 2D context sized W x H.
 *
 *  The live preview and the exporter both call this, so what you tune is
 *  exactly what gets burned in. A preview that renders through different
 *  code than the export is worse than no preview at all.
 */
function drawCaptions(ctx, chunk, t, rawStyle, W, H) {
  if (!chunk) return;
  const s = sanitiseCaptionStyle(rawStyle);
  const fontPx = Math.round(H * s.size);
  const strokePx = Math.round(fontPx * s.strokeW);

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.lineJoin = "round";
  ctx.miterLimit = 2;
  ctx.font = `${s.weight} ${fontPx}px ${captionFontStack(s.font)}`;

  const idx = activeWordIndex(chunk, t);
  const shown = s.highlight === "pop"
    ? [chunk.words[Math.max(0, idx)]].filter(Boolean)
    : chunk.words;
  if (!shown.length) { ctx.restore(); return; }

  const label = (w) => (s.upper ? w.text.toUpperCase() : w.text);
  const gap = fontPx * (0.28 + s.tracking);
  const widths = shown.map((w) => ctx.measureText(label(w)).width);
  const total = widths.reduce((a, b) => a + b, 0) + gap * (shown.length - 1);

  const pad = Math.round(W * 0.06);
  const baseline = Math.round(H * s.posY);
  let x =
    s.align === "left" ? pad :
    s.align === "right" ? W - pad - total :
    (W - total) / 2;

  for (let i = 0; i < shown.length; i++) {
    const w = shown[i];
    const isActive = s.highlight === "pop" ? true : chunk.words.indexOf(w) === idx;
    const cx = x + widths[i] / 2;

    let scale = 1;
    if (s.highlight === "pop" || (s.highlight === "box" && isActive)) {
      // 120ms ease-out. Longer than that and the motion lags the voice.
      const age = Math.max(0, t - w.start);
      const k = Math.min(1, age / 0.12);
      scale = 0.88 + 0.12 * (1 - Math.pow(1 - k, 3));
    }

    ctx.save();
    ctx.translate(cx, baseline);
    ctx.scale(scale, scale);

    if (s.highlight === "box" && isActive) {
      const bw = widths[i] + fontPx * 0.36;
      const bh = fontPx * 1.24;
      const r = Math.min(bh / 2, fontPx * 0.22);
      const bx = -bw / 2;
      const by = -fontPx * 0.92;
      ctx.beginPath();
      // hand-rolled rounded rect: roundRect() is still missing on enough
      // Android webviews to be worth four lines
      ctx.moveTo(bx + r, by);
      ctx.arcTo(bx + bw, by, bx + bw, by + bh, r);
      ctx.arcTo(bx + bw, by + bh, bx, by + bh, r);
      ctx.arcTo(bx, by + bh, bx, by, r);
      ctx.arcTo(bx, by, bx + bw, by, r);
      ctx.closePath();
      ctx.fillStyle = s.boxColor;
      ctx.fill();
    }

    if (strokePx > 0) {
      ctx.lineWidth = strokePx;
      ctx.strokeStyle = s.stroke;
      ctx.strokeText(label(w), 0, 0);
    }
    ctx.fillStyle =
      s.highlight === "box" && isActive ? s.fill :
      isActive && s.highlight !== "none" ? s.active :
      s.fill;
    ctx.fillText(label(w), 0, 0);
    ctx.restore();

    x += widths[i] + gap;
  }
  ctx.restore();
}

/** Five seconds of fake speech for the editor, with realistic word lengths
 *  and a pause in the middle so line breaking is visible while tuning. */
const CAPTION_SAMPLE_WORDS = [
  { word: "this", start: 0.10, end: 0.42 },
  { word: "is", start: 0.42, end: 0.62 },
  { word: "exactly", start: 0.62, end: 1.16 },
  { word: "how", start: 1.16, end: 1.40 },
  { word: "it", start: 1.40, end: 1.58 },
  { word: "burns", start: 1.58, end: 2.05 },
  { word: "in.", start: 2.05, end: 2.35 },
  { word: "tune", start: 2.95, end: 3.30 },
  { word: "it", start: 3.30, end: 3.48 },
  { word: "here", start: 3.48, end: 3.85 },
  { word: "first", start: 3.85, end: 4.35 },
];
const CAPTION_SAMPLE_LOOP = 5;

function CaptionPreview({ chunks, style, video, aspect }) {
  const ref = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    const draw = () => {
      const c = ref.current;
      if (c) {
        const ctx = c.getContext("2d");
        const W = c.width, H = c.height;
        const v = video && video.current;
        const live = v && v.readyState >= 2 && !v.paused;

        if (v && v.readyState >= 2) {
          try { ctx.drawImage(v, 0, 0, W, H); } catch { /* tainted or not ready */ }
        } else {
          // Stand-in backdrop. Mid-grey rather than black: white captions
          // over black always look good, which is exactly why it is the
          // wrong thing to design against.
          const g = ctx.createLinearGradient(0, 0, 0, H);
          g.addColorStop(0, "#2A3138");
          g.addColorStop(1, "#14171C");
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, W, H);
          ctx.fillStyle = "rgba(255,255,255,0.05)";
          for (let i = 0; i < 7; i++) ctx.fillRect(0, (H / 7) * i, W, 1);
        }

        const t = live ? v.currentTime : (performance.now() / 1000) % CAPTION_SAMPLE_LOOP;
        drawCaptions(ctx, activeChunkAt(chunks, t), t, style, W, H);
      }
      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [chunks, style, video]);

  const h = Math.round(300 * (aspect || 16 / 9));
  return <canvas ref={ref} className="cap-preview" width={300} height={h} />;
}

function Stepper({ label, value, onLess, onMore, wide }) {
  return (
    <div className={`cap-row ${wide ? "wide" : ""}`}>
      <span className="cap-row-label">{label}</span>
      <div className="cap-step">
        <button onClick={onLess} aria-label={`decrease ${label}`}>−</button>
        <span className="cap-step-val">{value}</span>
        <button onClick={onMore} aria-label={`increase ${label}`}>+</button>
      </div>
    </div>
  );
}

function ColourRow({ label, value, onChange }) {
  return (
    <div className="cap-row wide">
      <span className="cap-row-label">{label}</span>
      <div className="cap-swatches">
        {CAPTION_SWATCHES.map((c) => (
          <button
            key={c}
            className={`cap-swatch ${value.toLowerCase() === c.toLowerCase() ? "on" : ""}`}
            style={{ background: c }}
            onClick={() => onChange(c)}
            aria-label={`${label} ${c}`}
          />
        ))}
        <label className="cap-swatch custom" aria-label={`${label} custom colour`}>
          <input type="color" value={value} onChange={(e) => onChange(e.target.value)} />
          <span>+</span>
        </label>
      </div>
    </div>
  );
}

function CaptionEditor({ style, setStyle }) {
  const set = (patch) => setStyle(sanitiseCaptionStyle({ ...style, ...patch }));
  const pct = (v) => `${Math.round(v * 100)}%`;

  return (
    <div className="cap-editor">
      <div className="section-header"><span>PRESETS</span></div>
      <div className="cap-chips">
        {CAPTION_PRESETS.map((p) => (
          <button key={p.id} className="cap-chip" onClick={() => { set(p.patch); sound.click(); }}>
            {p.name}
          </button>
        ))}
        <button className="cap-chip" onClick={() => { setStyle({ ...DEFAULT_CAPTION_STYLE }); sound.click(); }}>
          reset
        </button>
      </div>

      <div className="section-header"><span>TYPE</span></div>
      <div className="cap-chips">
        {CAPTION_FONTS.map((f) => (
          <button
            key={f.id}
            className={`cap-chip ${style.font === f.id ? "on" : ""}`}
            style={{ fontFamily: f.stack }}
            onClick={() => { set({ font: f.id }); sound.click(); }}
          >
            {f.name}
          </button>
        ))}
      </div>
      <Stepper label="size" value={pct(style.size)}
               onLess={() => set({ size: style.size - 0.005 })}
               onMore={() => set({ size: style.size + 0.005 })} />
      <Stepper label="weight" value={style.weight}
               onLess={() => set({ weight: style.weight - 100 })}
               onMore={() => set({ weight: style.weight + 100 })} />
      <Stepper label="spacing" value={pct(style.tracking)}
               onLess={() => set({ tracking: style.tracking - 0.01 })}
               onMore={() => set({ tracking: style.tracking + 0.01 })} />
      <Stepper label="words / line" value={style.maxWords}
               onLess={() => set({ maxWords: style.maxWords - 1 })}
               onMore={() => set({ maxWords: style.maxWords + 1 })} />
      <div className="cap-row">
        <span className="cap-row-label">caps</span>
        <button className={`cap-chip ${style.upper ? "on" : ""}`} onClick={() => { set({ upper: !style.upper }); sound.click(); }}>
          {style.upper ? "UPPERCASE" : "as spoken"}
        </button>
      </div>

      <div className="section-header"><span>POSITION</span></div>
      <Stepper label="height" value={pct(style.posY)}
               onLess={() => set({ posY: style.posY - 0.02 })}
               onMore={() => set({ posY: style.posY + 0.02 })} />
      <div className="cap-row">
        <span className="cap-row-label">align</span>
        <div className="cap-chips tight">
          {["left", "center", "right"].map((a) => (
            <button key={a} className={`cap-chip ${style.align === a ? "on" : ""}`}
                    onClick={() => { set({ align: a }); sound.click(); }}>
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="section-header"><span>HIGHLIGHT</span></div>
      <div className="cap-chips">
        {CAPTION_HIGHLIGHTS.map((h) => (
          <button key={h.id} className={`cap-chip ${style.highlight === h.id ? "on" : ""}`}
                  onClick={() => { set({ highlight: h.id }); sound.click(); }}>
            {h.name}
          </button>
        ))}
      </div>
      <div className="cap-hint">
        {(CAPTION_HIGHLIGHTS.find((h) => h.id === style.highlight) || {}).hint}
      </div>

      <div className="section-header"><span>COLOUR</span></div>
      <ColourRow label="text" value={style.fill} onChange={(c) => set({ fill: c })} />
      {style.highlight !== "none" && style.highlight !== "box" && (
        <ColourRow label="spoken" value={style.active} onChange={(c) => set({ active: c })} />
      )}
      {style.highlight === "box" && (
        <ColourRow label="chip" value={style.boxColor} onChange={(c) => set({ boxColor: c })} />
      )}
      <ColourRow label="outline" value={style.stroke} onChange={(c) => set({ stroke: c })} />
      <Stepper label="outline width" value={pct(style.strokeW)}
               onLess={() => set({ strokeW: style.strokeW - 0.02 })}
               onMore={() => set({ strokeW: style.strokeW + 0.02 })} />
    </div>
  );
}

/** Groq's verbose_json, flattened. Words come back under `words` when
 *  word granularity is requested; some responses only carry `segments`, so
 *  that is the documented fallback rather than an empty caption track. */
function wordsFromGroqResponse(json) {
  if (!json || typeof json !== "object") return [];
  if (Array.isArray(json.words) && json.words.length) {
    return json.words.map((w) => ({ text: String(w.word || w.text || ""), start: +w.start, end: +w.end }));
  }
  if (Array.isArray(json.segments)) {
    return json.segments.map((sg) => ({ text: String(sg.text || "").trim(), start: +sg.start, end: +sg.end }));
  }
  return [];
}

function groqKeys() {
  return getAIKeys().filter((k) => String(k).startsWith("gsk_"));
}

async function transcribeAudio(wavBlob, apiKey, opts) {
  const o = opts || {};
  const form = new FormData();
  form.append("file", wavBlob, "audio.wav");
  form.append("model", o.model || GROQ_ASR_MODEL);
  form.append("response_format", "verbose_json");
  form.append("timestamp_granularities[]", "word");
  form.append("temperature", "0");
  // Language detection is documented as less reliable on sung vocals, so
  // state it rather than let Whisper guess.
  if (o.language) form.append("language", o.language);
  if (o.prompt) form.append("prompt", o.prompt);

  const res = await fetch(GROQ_ASR_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form,
  });

  if (res.status === 401) throw new Error("that Groq key was rejected");
  if (res.status === 429) throw new Error("Groq rate limit — wait a minute");
  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).error?.message || ""; } catch {}
    throw new Error(detail || `transcription failed (${res.status})`);
  }
  return wordsFromGroqResponse(await res.json());
}

/** Strips the video down to what Whisper actually wants: 16kHz mono.
 *  A 60s phone clip is 60-150MB and Groq's free tier caps uploads at 25MB,
 *  so sending the file as-is is not an option. 16kHz mono WAV is ~1.9MB a
 *  minute, and Whisper resamples to 16kHz internally anyway -- nothing is
 *  lost by doing it here. */
function openVideo(file) {
  return new Input({ source: new BlobSource(file), formats: [MP4, QTFF] });
}

/** Mono 16-bit PCM in a 44-byte WAV header. Hand-written because pulling in
 *  the library's generic conversion pipeline for this cost 560kB of bundle,
 *  and a WAV header is the most stable file format in computing. */
function encodeWav(samples, sampleRate) {
  const buf = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buf);
  const str = (off, s) => { for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i)); };
  str(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  str(8, "WAVEfmt ");
  view.setUint32(16, 16, true);          // PCM header size
  view.setUint16(20, 1, true);           // format = PCM
  view.setUint16(22, 1, true);           // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);  // byte rate
  view.setUint16(32, 2, true);           // block align
  view.setUint16(34, 16, true);          // bits per sample
  str(36, "data");
  view.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) {
    const v = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, v < 0 ? v * 0x8000 : v * 0x7fff, true);
  }
  return buf;
}

/** Nearest-neighbour down to 16kHz mono. Whisper resamples to 16kHz itself,
 *  and speech has nothing above 8kHz worth keeping, so a fancier filter
 *  would cost code and change no transcript. */
function downmixTo16k(channels, srcRate, dstRate) {
  const src = channels[0];
  const n = channels.length;
  const ratio = srcRate / dstRate;
  const outLen = Math.floor(src.length / ratio);
  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    const idx = Math.floor(i * ratio);
    let sum = 0;
    for (let c = 0; c < n; c++) sum += channels[c][idx] || 0;
    out[i] = sum / n;
  }
  return out;
}

async function extractAudioForASR(file) {
  const input = openVideo(file);
  const track = await input.getPrimaryAudioTrack();
  if (!track) throw new Error("that clip has no audio track");

  const sink = new AudioBufferSink(track);
  const parts = [];
  let rate = 16000;
  for await (const wrapped of sink.buffers()) {
    const ab = wrapped.buffer;
    rate = ab.sampleRate;
    const chans = [];
    for (let c = 0; c < ab.numberOfChannels; c++) chans.push(ab.getChannelData(c));
    parts.push(downmixTo16k(chans, rate, 16000));
  }

  let total = 0;
  for (const p of parts) total += p.length;
  const all = new Float32Array(total);
  let at = 0;
  for (const p of parts) { all.set(p, at); at += p.length; }

  return new Blob([encodeWav(all, 16000)], { type: "audio/wav" });
}

async function probeVideo(file) {
  const input = openVideo(file);
  const track = await input.getPrimaryVideoTrack();
  const duration = await input.computeDuration();
  const audio = await input.getPrimaryAudioTrack();
  return {
    duration,
    width: track ? track.displayWidth : 0,
    height: track ? track.displayHeight : 0,
    hasAudio: !!audio,
  };
}

/** Encodes a two-second 320x180 clip and reads it back.
 *
 *  Capability flags lie: isConfigSupported() can say yes on a device whose
 *  encoder then fails at finalize, which you'd otherwise discover 45 seconds
 *  into a real export. Actually producing a file and re-parsing it is the
 *  only answer worth trusting, and at this size it costs well under a second.
 */
async function encodeProbeClip(seconds = 2, fps = 12) {
  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 180;
  const ctx = canvas.getContext("2d", { alpha: false });

  const output = new Output({ format: new Mp4OutputFormat(), target: new BufferTarget() });
  const source = new CanvasSource(canvas, { codec: "avc", bitrate: 400000 });
  output.addVideoTrack(source);
  await output.start();

  const frames = Math.max(2, Math.round(seconds * fps));
  for (let i = 0; i < frames; i++) {
    ctx.fillStyle = i % 2 ? "#101418" : "#1b2026";
    ctx.fillRect(0, 0, 320, 180);
    await source.add(i / fps, 1 / fps);
  }
  source.close();
  await output.finalize();
  return new Blob([output.target.buffer], { type: "video/mp4" });
}

/** Does this phone actually have the hardware path? A few seconds of checking
 *  beats forty-five seconds of encoding that fails at the finalize step. */
async function codecSelfTest() {
  const result = {
    webcodecs: typeof VideoEncoder !== "undefined",
    encodeH264: false, decodeH264: false, roundTrip: false, ms: 0, note: "",
  };
  if (!result.webcodecs) { result.note = "this browser has no WebCodecs"; return result; }

  try { result.encodeH264 = await canEncodeVideo("avc", { width: 1080, height: 1920 }); }
  catch (err) { result.note = String(err.message || err); }

  try {
    const support = await VideoDecoder.isConfigSupported({ codec: "avc1.42001f", codedWidth: 1080, codedHeight: 1920 });
    result.decodeH264 = !!support.supported;
  } catch { /* leave false */ }

  if (result.encodeH264) {
    const t0 = Date.now();
    try {
      const blob = await encodeProbeClip(1, 12);
      const back = new Input({ source: new BlobSource(blob), formats: [MP4] });
      const track = await back.getPrimaryVideoTrack();
      result.roundTrip = !!track && blob.size > 1000;
      result.ms = Date.now() - t0;
    } catch (err) {
      result.note = `encode failed for real: ${String(err.message || err)}`;
    }
  }

  if (!result.note && !result.encodeH264) result.note = "no H.264 encoder — export unavailable, preview still works";
  if (!result.note && result.roundTrip) result.note = "export will work on this device";
  return result;
}

/** Burns the captions in. Decode -> draw -> encode, all on the device's own
 *  media hardware, with the original audio track copied across WITHOUT
 *  re-encoding (so no quality loss and no dependence on an AAC encoder). */
async function burnCaptions(file, chunks, style, onProgress) {
  const input = openVideo(file);
  const videoTrack = await input.getPrimaryVideoTrack();
  if (!videoTrack) throw new Error("no video track in that file");

  const duration = await input.computeDuration();
  const W = videoTrack.displayWidth;
  const H = videoTrack.displayHeight;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { alpha: false });

  const output = new Output({ format: new Mp4OutputFormat(), target: new BufferTarget() });
  const videoSource = new CanvasSource(canvas, { codec: "avc", bitrate: QUALITY_HIGH });
  output.addVideoTrack(videoSource);

  // Audio: copy the encoded packets straight through. Re-encoding would cost
  // quality and would depend on an AAC *encoder*, which is the one codec
  // whose availability varies most across Android builds.
  const audioTrack = await input.getPrimaryAudioTrack();
  let audioSource = null;
  if (audioTrack) {
    try {
      const codec = await audioTrack.getCodec();
      if (codec) {
        audioSource = new EncodedAudioPacketSource(codec);
        output.addAudioTrack(audioSource);
      }
    } catch { audioSource = null; }   // no copyable audio: ship video-only
  }

  await output.start();

  if (audioSource) {
    const sink = new EncodedPacketSink(audioTrack);
    const meta = await audioTrack.getDecoderConfig();
    for await (const packet of sink.packets()) {
      await audioSource.add(packet, { decoderConfig: meta });
    }
    audioSource.close();
  }

  const sink = new CanvasSink(videoTrack, { poolSize: 2 });
  let last = 0;
  for await (const wrapped of sink.canvases()) {
    const t = wrapped.timestamp;
    ctx.drawImage(wrapped.canvas, 0, 0, W, H);
    drawCaptions(ctx, activeChunkAt(chunks, t), t, style, W, H);
    const dur = Math.max(1 / 60, (wrapped.duration || 1 / 30));
    await videoSource.add(t, dur);
    last = t;
    if (onProgress && duration) onProgress(Math.min(0.99, t / duration));
  }

  videoSource.close();
  await output.finalize();
  if (onProgress) onProgress(1);
  return new Blob([output.target.buffer], { type: "video/mp4" });
}

function CaptionsTool() {
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState(null);
  const [words, setWords] = useState([]);
  const [style, setStyle] = useState(() => {
    const v = loadStored(STORAGE_KEY_CAPTIONS, null);
    return sanitiseCaptionStyle(v && v.style);
  });
  const [stage, setStage] = useState("idle");
  const [msg, setMsg] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caps, setCaps] = useState(null);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_CAPTIONS, JSON.stringify({ style })); } catch {}
  }, [style]);

  useEffect(() => () => { if (urlRef.current) URL.revokeObjectURL(urlRef.current); }, []);

  // Re-chunking is cheap and has to follow words-per-line, so it is derived
  // rather than stored -- storing it meant the setting silently did nothing
  // until you re-transcribed.
  const realChunks = useMemo(
    () => chunkWords(words, { maxWords: style.maxWords }),
    [words, style.maxWords]
  );
  const sampleChunks = useMemo(
    () => chunkWords(CAPTION_SAMPLE_WORDS, { maxWords: style.maxWords }),
    [style.maxWords]
  );
  const previewChunks = realChunks.length ? realChunks : sampleChunks;
  const aspect = info && info.width ? info.height / info.width : 16 / 9;

  const pick = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;
    setMsg(null);
    setWords([]);
    setStage("probing");
    try {
      const meta = await probeVideo(f);
      if (meta.duration > CAPTION_MAX_SECONDS + 0.5) {
        setStage("idle");
        setMsg({ type: "err", text: `${Math.round(meta.duration)}s — trim it under ${CAPTION_MAX_SECONDS}s first` });
        return;
      }
      if (!meta.hasAudio) {
        setStage("idle");
        setMsg({ type: "err", text: "that clip has no audio track" });
        return;
      }
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
      urlRef.current = URL.createObjectURL(f);
      setFile(f);
      setInfo(meta);
      setStage("picked");
    } catch (err) {
      setStage("idle");
      setMsg({ type: "err", text: `couldn't read that file — ${String(err.message || err)}` });
    }
  };

  const transcribe = async () => {
    const keys = groqKeys();
    if (!keys.length) {
      setMsg({ type: "err", text: "needs a Groq key (gsk_…) — add one in the AI tab" });
      return;
    }
    setStage("transcribing");
    setMsg(null);
    try {
      const wav = await extractAudioForASR(file);
      const dur = (info && info.duration) || 0;

      let got = await transcribeAudio(wav, keys[0], { language: "en", prompt: LYRICS_PROMPT });
      let usedModel = "turbo";

      // If pass one came back as little more than "[Music]", escalate to the
      // accurate model before giving up. Sung vocals are the documented weak
      // spot and large-v3 is free too.
      if (transcriptLooksEmpty(got, dur)) {
        setMsg({ type: "ok", text: "mostly music — retrying with the accurate model…" });
        got = await transcribeAudio(wav, keys[0], {
          model: GROQ_ASR_MODEL_ACCURATE, language: "en", prompt: LYRICS_PROMPT,
        });
        usedModel = "large-v3";
      }

      const clean = stripNonSpeech(got);
      if (!clean.length) {
        throw new Error("no words could be made out — if it is sung, the vocals may sit too far under the mix");
      }

      setWords(clean);
      setStage("ready");
      const dropped = got.length - clean.length;
      setMsg({ type: "ok", text:
        `${clean.length} words · ${usedModel}`
        + (dropped ? ` · dropped ${dropped} music tag${dropped === 1 ? "" : "s"}` : "")
        + ` · ${Math.round(wav.size / 1024)} KB sent` });
      sound.success();
    } catch (err) {
      setStage("picked");
      setMsg({ type: "err", text: String(err.message || err) });
      sound.error();
    }
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
    sound.click();
  };

  const exportVideo = async () => {
    setStage("exporting");
    setProgress(0);
    setMsg(null);
    try {
      const blob = await burnCaptions(file, realChunks, style, setProgress);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `captioned-${Date.now()}.mp4`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      setStage("ready");
      setMsg({ type: "ok", text: `exported ${(blob.size / 1048576).toFixed(1)} MB` });
      sound.success();
    } catch (err) {
      setStage("ready");
      setMsg({ type: "err", text: `export failed — ${String(err.message || err)}` });
      sound.error();
    }
  };

  return (
    <div className="cap">
      {/* The preview is always on, with or without a clip: the whole point
          is that you can design the look before you have footage, and the
          five-second sample loop is long enough to show a line break. */}
      <div className="cap-preview-wrap">
        <CaptionPreview chunks={previewChunks} style={style} video={videoRef} aspect={aspect} />
        {!file && <div className="cap-preview-tag">sample · 5s loop</div>}
      </div>

      {file && (
        <video
          ref={videoRef}
          src={urlRef.current}
          className="cap-source"
          playsInline
          loop
          muted={false}
          onEnded={() => setPlaying(false)}
        />
      )}

      <div className="cap-actions">
        <label className="pomo-btn primary cap-file">
          <input type="file" accept="video/*" onChange={pick} />
          {file ? "change clip" : "choose clip"}
        </label>
        {file && <button className="pomo-btn" onClick={togglePlay}>{playing ? "pause" : "play"}</button>}
        {file && !realChunks.length && stage !== "transcribing" && (
          <button className="pomo-btn primary" onClick={transcribe}>get captions</button>
        )}
        {stage === "transcribing" && <button className="pomo-btn" disabled>listening…</button>}
        {realChunks.length > 0 && stage !== "exporting" && (
          <button className="pomo-btn primary" onClick={exportVideo}>export mp4</button>
        )}
      </div>

      <div className="cap-meta">
        {info ? `${info.width}×${info.height} · ${info.duration.toFixed(1)}s` : `no clip yet · under ${CAPTION_MAX_SECONDS}s`}
        {realChunks.length ? ` · ${realChunks.length} lines` : ""}
      </div>

      {msg && <pre className={`cap-msg ${msg.type}`}>{msg.text}</pre>}

      {stage === "exporting" && (
        <div className="cap-progress">
          <div className="cap-progress-fill" style={{ width: `${Math.round(progress * 100)}%` }} />
          <span>{Math.round(progress * 100)}%</span>
        </div>
      )}

      <CaptionEditor style={style} setStyle={setStyle} />

      <div className="section-header"><span>DEVICE</span></div>
      <div className="cap-actions">
        <button className="pomo-btn" onClick={async () => { setCaps(await codecSelfTest()); }}>check phone</button>
      </div>
      {caps && (
        <pre className="cap-note">
          {`webcodecs   ${caps.webcodecs ? "yes" : "no"}\n`}
          {`h.264 encode ${caps.encodeH264 ? "yes" : "no"}\n`}
          {`h.264 decode ${caps.decodeH264 ? "yes" : "no"}\n`}
          {`real encode  ${caps.roundTrip ? `yes · ${caps.ms}ms for 1s` : "no"}`}
          {caps.note ? `\n${caps.note}` : ""}
        </pre>
      )}
      <pre className="cap-note">
        only the audio leaves the phone (~2 MB), and only to Groq for the
        timings. the video is captioned here on the device.
      </pre>
    </div>
  );
}

// Exposed deliberately: when an export fails on a device I cannot hold, the
// difference between "it broke" and a fix is being able to run these three
// from the address bar.
if (typeof window !== "undefined") {
  window.__tasksh = { burnCaptions, chunkWords, encodeProbeClip, probeVideo, codecSelfTest };
}

// ============================================================
// RNGDLE -- one number a day, scored against every other number
// that could have come up.
//
// The whole engine is offline and exact. 233 badge rules, 39 families, and
// an EP->percentile curve measured by sweeping all 1,000,001 possible rolls
// rather than sampled: every `count` below is the real figure, and the test
// suite re-derives them from the rules so a broken rule cannot pass quietly.
// ============================================================

const RNG_MAX = 1000000;

// ---- helpers ---------------------------------------------------------------
const rngDigits = (s) => [...s].map(Number);
const rngSumD = (s) => rngDigits(s).reduce((a, b) => a + b, 0);
const rngProdD = (s) => rngDigits(s).reduce((a, b) => a * b, 1);
const rngTally = (s) => { const c = {}; for (const ch of s) c[ch] = (c[ch] || 0) + 1; return c; };
const rngMaxRepeat = (s) => Math.max(...Object.values(rngTally(s)));
const rngDistinct = (s) => Object.keys(rngTally(s)).length;
const rngHas = (sub) => (n, s) => s.includes(sub);
const rngExact = (v) => (n, s) => s === v;
const rngAnyRun = (k) => (n, s) => { for (let i = 0; i + k <= s.length; i++) { let ok = true; for (let j = 1; j < k; j++) if (s[i + j] !== s[i]) { ok = false; break; } if (ok) return true; } return false; };
const rngEnds = (sub) => (n, s) => s.endsWith(sub);
const rngIsPal = (x) => { for (let i = 0, j = x.length - 1; i < j; i++, j--) if (x[i] !== x[j]) return false; return true; };

const rngPowerSet = (e) => { const out = new Set(); for (let b = 0; ; b++) { const v = Math.pow(b, e); if (v > RNG_MAX) break; out.add(v); } return out; };
const rngExpSet = (b) => { const out = new Set(); let v = 1; while (v <= RNG_MAX) { out.add(v); v *= b; } return out; };

const RNG_SQ = rngPowerSet(2), CUBES = rngPowerSet(3), P4 = rngPowerSet(4), P5 = rngPowerSet(5),
      P6 = rngPowerSet(6), P7 = rngPowerSet(7), P8 = rngPowerSet(8), P9 = rngPowerSet(9),
      P10 = rngPowerSet(10), P11 = rngPowerSet(11), P13 = rngPowerSet(13), P17 = rngPowerSet(17), P19 = rngPowerSet(19);
const RNG_P2 = rngExpSet(2), POW3 = rngExpSet(3), POW5 = rngExpSet(5), POW7 = rngExpSet(7);
const RNG_OURO = new Set([1, 4, 27, 256, 3125, 46656, 823543]);
const RNG_FACT = (() => { const o = new Set(); let v = 1, i = 1; o.add(1); while (v <= RNG_MAX) { v *= i; if (v <= RNG_MAX) o.add(v); i++; } return o; })();
const RNG_FIB = (() => { const o = new Set([0, 1]); let a = 0, b = 1; while (b <= RNG_MAX) { o.add(b); [a, b] = [b, a + b]; } return o; })();
const RNG_PRONIC = (() => { const o = new Set(); for (let i = 0; i * (i + 1) <= RNG_MAX; i++) o.add(i * (i + 1)); return o; })();
// 1 MB of sieve is not worth paying for at boot when most sessions never
// open the tool, so it is built on the first prime question and then kept.
function rngPrimes(n) {
  if (!rngPrimes.sieve) {
    const sieve = new Uint8Array(RNG_MAX + 1);
    sieve[0] = sieve[1] = 1;
    for (let i = 2; i * i <= RNG_MAX; i++) if (!sieve[i]) for (let j = i * i; j <= RNG_MAX; j += i) sieve[j] = 1;
    rngPrimes.sieve = sieve;
  }
  return n >= 2 && !rngPrimes.sieve[n];
}

// strict monotone helpers
const rngUp = (d) => d.length >= 2 && d.every((v, i) => i === 0 || v > d[i - 1]);
const rngDown = (d) => d.length >= 2 && d.every((v, i) => i === 0 || v < d[i - 1]);
const rngNonDec = (d) => d.every((v, i) => i === 0 || v >= d[i - 1]);
const rngNonInc = (d) => d.every((v, i) => i === 0 || v <= d[i - 1]);

// "rises to a peak then falls" with flats allowed (MESA) and strict (MOUNTAIN)
function rngUnimodal(d, dir, strict) {
  // dir=+1 -> up then down (peak); dir=-1 -> down then up (valley)
  if (d.length < 3) return false;
  const cmp = [];
  for (let i = 1; i < d.length; i++) {
    const diff = d[i] - d[i - 1];
    if (diff === 0) { if (strict) return false; cmp.push(0); }
    else cmp.push(diff > 0 ? 1 : -1);
  }
  const nz = cmp.filter((c) => c !== 0);
  if (nz.length < 2) return false;
  const first = dir, second = -dir;
  let i = 0;
  while (i < nz.length && nz[i] === first) i++;
  if (i === 0) return false;              // never went the first way
  const rest = nz.slice(i);
  if (rest.length === 0) return false;    // never turned
  return rest.every((c) => c === second);
}


// A part is valid when it has no leading zero ("0" alone is fine).
const rngOkPart = (p) => !(p.length > 1 && p[0] === "0");
// RNGdle requires at least one of the parts to be 2+ digits long, so
// "12" is not scored as 1 and 2 unless a longer token is involved.
const rngSomeLong = (parts) => parts.some((p) => p.length >= 2);

// every split of s into k valid parts, values consecutive when sorted.
// ordered===true  -> the parts run in order (ascending OR descending)
// ordered===false -> they do not
function rngSplitConsec(s, k, ordered) {
  const rec = (i, parts) => {
    if (parts.length === k - 1) {
      const tail = s.slice(i);
      if (!tail || !rngOkPart(tail)) return false;
      const all = [...parts, tail];
      if (!rngSomeLong(all)) return false;
      const nums = all.map(Number);
      const sorted = [...nums].sort((a, b) => a - b);
      for (let x = 1; x < sorted.length; x++) if (sorted[x] !== sorted[x - 1] + 1) return false;
      const inOrder = nums.every((v, x) => x === 0 || v > nums[x - 1]) ||
                      nums.every((v, x) => x === 0 || v < nums[x - 1]);
      if (ordered === true && !inOrder) return false;
      if (ordered === false && inOrder) return false;
      return true;
    }
    for (let j = i + 1; j <= s.length - (k - parts.length - 1); j++) {
      const p = s.slice(i, j);
      if (!rngOkPart(p)) continue;
      if (rec(j, [...parts, p])) return true;
    }
    return false;
  };
  return rec(0, []);
}

// k adjacent substrings that are consecutive integers, somewhere inside s
// (but not spanning the whole of it -- that is the "rngExact" badge's job)
function rngContainsConsec(s, k) {
  for (let o = 0; o < s.length; o++) {
    for (let t = 1; o + t <= s.length; t++) {
      const head = s.slice(o, o + t);
      if (!rngOkPart(head)) continue;
      for (const dir of [1, -1]) {
        let at = o + t;
        const toks = [head];
        let ok = true;
        for (let c = 1; c < k; c++) {
          const want = String(Number(head) + c * dir);
          if (at + want.length > s.length || s.slice(at, at + want.length) !== want) { ok = false; break; }
          toks.push(want);
          at += want.length;
        }
        if (ok && !(o === 0 && at === s.length) && rngSomeLong(toks)) return true;
      }
    }
  }
  return false;
}

// two substrings one apart in value that are nested or separated by a gap --
// touching ones are CONSEC_PAIR_ADJACENT's business, overlaps count as neither
function rngNearbyConsec(s) {
  const toks = [];
  for (let o = 0; o < s.length; o++) for (let t = 1; o + t <= s.length; t++) {
    const p = s.slice(o, o + t);
    if (rngOkPart(p)) toks.push({ v: Number(p), from: o, to: o + t, text: p });
  }
  for (let a = 0; a < toks.length; a++) for (let b = a + 1; b < toks.length; b++) {
    const x = toks[a], y = toks[b];
    if (Math.abs(x.v - y.v) !== 1) continue;
    if (!rngSomeLong([x.text, y.text])) continue;
    if (x.to === y.from || y.to === x.from) continue;
    const nested = (x.from <= y.from && y.to <= x.to) || (y.from <= x.from && x.to <= y.to);
    const apart = x.to < y.from || y.to < x.from;
    if (nested || apart) return true;
  }
  return false;
}

// two touching substrings that are consecutive integers
function rngAdjConsec(s) {
  for (let e = 0; e < s.length; e++) {
    for (let o = 1; e + o < s.length; o++) {
      const t = s.slice(e, e + o);
      if (!rngOkPart(t)) continue;
      const n = Number(t);
      for (const v of [n + 1, n - 1]) {
        if (v < 0) continue;
        const l = String(v);
        if (s.slice(e + o, e + o + l.length) !== l) continue;
        const u = e + o + l.length;
        if (!(e === 0 && u === s.length) && rngSomeLong([t, l])) return true;
      }
    }
  }
  return false;
}

// the whole number splits into two consecutive integers
function rngSplitTwo(s) {
  for (let e = 1; e < s.length; e++) {
    const a = s.slice(0, e), b = s.slice(e);
    if (!rngOkPart(a) || !rngOkPart(b) || !rngSomeLong([a, b])) continue;
    if (Math.abs(Number(a) - Number(b)) === 1) return true;
  }
  return false;
}

// insert one operator and an equals sign: a ? b = c
function rngEquation(s) {
  for (let e = 1; e < s.length - 1; e++) for (let o = e + 1; o < s.length; o++) {
    const parts = [s.slice(0, e), s.slice(e, o), s.slice(o)];
    if (parts.some((p) => !rngOkPart(p))) continue;
    const [a, b, c] = parts.map(Number);
    if (a === 0 || b === 0 || c === 0) continue;
    if (a + b === c || a - b === c || a * b === c || a / b === c) return true;
  }
  return false;
}

// splits into >=3 parts with a constant difference (not 0, +1 or -1) or a
// constant ratio. The +-1 exclusion is the game's: 123 is a sequence badge,
// not a progression one.
function rngProgression(s, kind) {
  const good = (nums) => {
    if (nums.length < 3) return false;
    if (kind === "arith") {
      const step = nums[1] - nums[0];
      if (step === 0 || step === 1 || step === -1) return false;
      return nums.every((v, i) => i === 0 || v - nums[i - 1] === step);
    }
    if (nums.some((v) => v <= 0) || nums[0] === nums[1]) return false;
    for (let i = 0; i + 2 < nums.length; i++) if (nums[i + 1] * nums[i + 1] !== nums[i] * nums[i + 2]) return false;
    return true;
  };
  const rec = (i, parts) => {
    if (i >= s.length) return good(parts.map(Number));
    for (let j = i + 1; j <= s.length; j++) {
      const p = s.slice(i, j);
      if (!rngOkPart(p)) continue;
      if (rec(j, [...parts, p])) return true;
    }
    return false;
  };
  return rec(0, []);
}

// sequence of k consecutive digits (ascending or descending) as a substring
const rngSeqRun = (k) => (n, s) => {
  for (let i = 0; i + k <= s.length; i++) {
    let up = true, down = true;
    for (let j = 1; j < k; j++) {
      if (+s[i + j] !== +s[i + j - 1] + 1) up = false;
      if (+s[i + j] !== +s[i + j - 1] - 1) down = false;
    }
    if (up || down) return true;
  }
  return false;
};

const rngParityRun = (n, s) => {
  for (let i = 0; i + 5 <= s.length; i++) {
    const w = s.slice(i, i + 5);
    if (w === "02468" || w === "13579" || w === "86420" || w === "97531") return true;
  }
  return false;
};

const RNG_STROBO = { "0": "0", "1": "1", "6": "9", "8": "8", "9": "6" };
const rngIsStrobo = (s) => {
  let out = "";
  for (let i = s.length - 1; i >= 0; i--) { const c = RNG_STROBO[s[i]]; if (c === undefined) return false; out += c; }
  return out === s;
};

// HILLS / DUNES: four or more turns' worth of alternating rises and falls.
// DUNES collapses flat stretches first; HILLS forbids them outright.
function rngHills(d, collapseFlats) {
  let v = d;
  if (collapseFlats) v = d.filter((x, i) => i === 0 || x !== d[i - 1]);
  else { for (let i = 1; i < v.length; i++) if (v[i] === v[i - 1]) return false; }
  if (v.length < 4) return false;
  for (let i = 2; i < v.length; i++) if ((v[i] - v[i - 1]) * (v[i - 1] - v[i - 2]) > 0) return false;
  return true;
}

// contiguous-run helpers
const rngContigRuns = (s) => { const r = []; let i = 0; while (i < s.length) { let j = i; while (j < s.length && s[j] === s[i]) j++; r.push({ ch: s[i], len: j - i, at: i }); i = j; } return r; };

const rngContigBoat = (s) => {
  const r = rngContigRuns(s);
  for (let i = 0; i + 1 < r.length; i++) {
    if (r[i].len >= 3 && r[i + 1].len >= 2) return true;
    if (r[i].len >= 2 && r[i + 1].len >= 3) return true;
  }
  return false;
};

const rngContigTwoPair = (s) => {
  for (let i = 0; i + 4 <= s.length; i++)
    if (s[i] === s[i + 1] && s[i + 2] === s[i + 3] && s[i] !== s[i + 2]) return true;
  return false;
};

const rngContigThreePair = (s) => {
  for (let i = 0; i + 6 <= s.length; i++) {
    const a = s[i], b = s[i + 2], c = s[i + 4];
    if (s[i + 1] === a && s[i + 3] === b && s[i + 5] === c && a !== b && b !== c && a !== c) return true;
  }
  return false;
};




const rngPalSub = (s, minLen) => {
  for (let L = minLen; L <= s.length; L++) for (let i = 0; i + L <= s.length; i++) if (rngIsPal(s.slice(i, i + L))) return true;
  return false;
};

const rngWindowRun = (s, minLen) => {
  for (let L = minLen; L <= s.length; L++) for (let i = 0; i + L <= s.length; i++) {
    const w = rngDigits(s.slice(i, i + L)).sort((a, b) => a - b);
    let ok = true;
    for (let k = 1; k < w.length; k++) if (w[k] !== w[k - 1] + 1) { ok = false; break; }
    if (ok) return true;
  }
  return false;
};

const rngEvenSpacing = (d, abs) => {
  if (d.length < 3) return false;
  if (!abs) { const step = d[1] - d[0]; return d.every((v, i) => i === 0 || v - d[i - 1] === step); }
  const step = Math.abs(d[1] - d[0]);
  return d.every((v, i) => i === 0 || Math.abs(v - d[i - 1]) === step);
};

const rngZipper = (s) => {
  if (s.length < 2) return false;
  if (rngDistinct(s) !== 2) return false;
  for (let i = 2; i < s.length; i++) if (s[i] !== s[i - 2]) return false;
  return s[0] !== s[1];
};


// ---- the table -------------------------------------------------------------
const RNG_RULES = {
  // --- counting / shape
  ONE_DIGIT: (n, s) => s.length === 1,
  TWO_DIGITS: (n, s) => s.length === 2,
  THREE_DIGITS: (n, s) => s.length === 3,
  FOUR_DIGITS: (n, s) => s.length === 4,
  FIVE_DIGITS: (n, s) => s.length === 5,
  SIX_DIGITS: (n, s) => s.length === 6,
  COLOSSAL: (n) => n > 999000,
  ONE_MILLION: (n) => n === 1000000,

  // --- single digits
  DIGIT_ZERO: rngExact("0"), DIGIT_ONE: rngExact("1"), DIGIT_TWO: rngExact("2"), DIGIT_THREE: rngExact("3"),
  DIGIT_FOUR: rngExact("4"), DIGIT_FIVE: rngExact("5"), DIGIT_SIX: rngExact("6"), DIGIT_SEVEN: rngExact("7"),
  DIGIT_EIGHT: rngExact("8"), DIGIT_NINE: rngExact("9"),

  // --- parity / divisibility
  EVEN: (n) => n % 2 === 0,
  ODD: (n) => n % 2 === 1,
  LUCKY_SEVEN_DIV: (n) => n > 0 && n % 7 === 0,
  ELEVEN: (n) => n > 0 && n % 11 === 0,
  DOZEN: (n) => n > 0 && n % 12 === 0,
  HARSHAD: (n, s) => { const d = rngSumD(s); return n > 0 && d > 0 && n % d === 0; },
  PRIME: (n) => rngPrimes(n),
  DIVISIBLE_BY_THREE: (n, s) => [...s].every((c) => +c % 3 === 0),

  // --- digit counts
  HYDROGEN: (n, s) => rngTally(s)["1"] === 1,
  HELIUM: (n, s) => rngTally(s)["2"] === 1,
  LITHIUM: (n, s) => rngTally(s)["3"] === 1,
  BERYLLIUM: (n, s) => rngTally(s)["4"] === 1,
  BORON: (n, s) => rngTally(s)["5"] === 1,
  CARBON: (n, s) => rngTally(s)["6"] === 1,
  NITROGEN: (n, s) => rngTally(s)["7"] === 1,
  OXYGEN: (n, s) => rngTally(s)["8"] === 1,
  FLUORINE: (n, s) => rngTally(s)["9"] === 1,
  GHOST: (n, s) => rngTally(s)["0"] === 1,

  // --- composition
  VOID: (n, s) => !s.includes("0"),
  DEEP_VOID: rngHas("00"),
  DEEP_VOID_THREE: rngHas("000"),
  DEEP_VOID_FOUR: rngHas("0000"),
  DEEP_VOID_FIVE: rngHas("00000"),
  CLEAN: rngEnds("0"),
  SEMI_CLEAN: rngEnds("5"),
  CENTURY: rngEnds("00"),
  SEMI_CENTURY: rngEnds("50"),
  QUARTER_CENTURY: rngEnds("25"),
  THREE_QUARTER_CENTURY: rngEnds("75"),
  MILLENNIUM: rngEnds("000"),
  SEMI_MILLENNIUM: rngEnds("500"),
  EPOCH: rngEnds("0000"),
  SEMI_EPOCH: rngEnds("5000"),
  EON: rngEnds("00000"),
  SEMI_EON: rngEnds("50000"),
  DOUBLE_NINE: rngEnds("99"),
  TRIPLE_NINE: rngEnds("999"),
  QUAD_NINE: rngEnds("9999"),
  QUINT_NINE: rngEnds("99999"),

  HETEROGENEOUS: (n, s) => rngDistinct(s) === s.length,
  HOMOGENEOUS: (n, s) => s.length >= 2 && rngDistinct(s) === 1,
  DUALITY: (n, s) => rngDistinct(s) === 2,
  TRINITY: (n, s) => rngDistinct(s) === 3,
  QUARTET: (n, s) => rngDistinct(s) === 4,
  BINARY_SOUL: (n, s) => [...s].every((c) => c === "0" || c === "1"),
  LOW_BALL: (n, s) => [...s].every((c) => +c <= 4),
  HIGH_ROLLER: (n, s) => [...s].every((c) => +c >= 5),
  FLUSH: (n, s) => [...s].every((c) => +c % 2 === 0) || [...s].every((c) => +c % 2 === 1),
  ALTERNATOR: (n, s) => s.length >= 2 && [...s].every((c, i) => i === 0 || (+c % 2) !== (+s[i - 1] % 2)),
  NEIGHBORS: (n, s) => { for (let i = 1; i < s.length; i++) if (Math.abs(+s[i] - +s[i - 1]) === 1) return true; return false; },

  // --- sums
  BLACKJACK: (n, s) => rngSumD(s) === 21,
  FEATHER: (n, s) => rngSumD(s) < 15,
  HEAVY: (n, s) => rngSumD(s) > 45,
  BALANCED: (n, s) => s.length % 2 === 0 && rngSumD(s.slice(0, s.length / 2)) === rngSumD(s.slice(s.length / 2)),
  SPY: (n, s) => n !== 1 && n !== 2 && rngSumD(s) === rngProdD(s),
  EQUATION: (n, s) => rngEquation(s),

  // --- ends
  LIFTOFF: (n, s) => +s[0] > +s[s.length - 1],
  GROUNDED: (n, s) => +s[0] < +s[s.length - 1],
  EQUILIBRIUM: (n, s) => s.length >= 2 && s[0] === s[s.length - 1],
  SANDWICH: (n, s) => s.length >= 2 && s[0] === s[s.length - 1] && rngDistinct(s) > 1,
  GAP_ONE: (n, s) => Math.abs(+s[0] - +s[s.length - 1]) === 1,
  BOOKENDS: (n, s) => s.length >= 4 && s.slice(0, 2) === s.slice(-2),
  MIRROR_BOOKENDS: (n, s) => s.length >= 4 && s[0] === s[s.length - 1] && s[1] === s[s.length - 2],
  PAIRED_BOOKENDS: (n, s) => s.length >= 4 && s[0] === s[1] && s[s.length - 1] === s[s.length - 2] && s[0] !== s[s.length - 1],

  // --- of a kind / pairs
  PAIR: (n, s) => rngMaxRepeat(s) >= 2,
  TWO_PAIR: (n, s) => Object.values(rngTally(s)).filter((c) => c >= 2).length >= 2,
  THREE_PAIR: (n, s) => Object.values(rngTally(s)).filter((c) => c >= 2).length >= 3,
  TRIPS: (n, s) => Object.values(rngTally(s)).some((c) => c === 3),
  QUADS: (n, s) => rngMaxRepeat(s) >= 4,
  FIVE_OF_A_KIND: (n, s) => rngMaxRepeat(s) >= 5,
  BOAT: (n, s) => { const v = Object.values(rngTally(s)).sort((a, b) => b - a); return v[0] >= 3 && v[1] >= 2; },
  SNAKE_EYES: (n, s) => { const t = rngTally(s); return t["1"] === 2 && Object.entries(t).every(([k, c]) => k === "1" || c < 2); },
  CONTIGUOUS_PAIR: rngAnyRun(2),
  CONTIGUOUS_TRIPS: rngAnyRun(3),
  CONTIGUOUS_QUADS: rngAnyRun(4),
  CONTIGUOUS_FIVES: rngAnyRun(5),
  CONTIGUOUS_SIXES: rngAnyRun(6),
  CONTIGUOUS_TWO_PAIR: (n, s) => rngContigTwoPair(s),
  CONTIGUOUS_THREE_PAIR: (n, s) => rngContigThreePair(s),
  CONTIGUOUS_BOAT: (n, s) => rngContigBoat(s),
  FRAMED_PAIR: (n, s) => s.length === 4 && s[1] === s[2] && s[1] !== s[0] && s[1] !== s[3],
  FRAMED_TRIPLE: (n, s) => s.length === 5 && s[1] === s[2] && s[2] === s[3] && s[1] !== s[0] && s[1] !== s[4],
  FRAMED_QUAD: (n, s) => s.length === 6 && s[1] === s[2] && s[2] === s[3] && s[3] === s[4] && s[1] !== s[0] && s[1] !== s[5],
  FRAMED_DOUBLE: (n, s) => s.length === 6 && s[1] === s[2] && s[3] === s[4] && s[1] !== s[3] && s[0] !== s[1] && s[5] !== s[4],
  FIREFLY: (n, s) => { if (s.length < 4) return false; const v = Object.values(rngTally(s)); return v.length === 2 && v.includes(1); },

  // --- monotone / shape
  STEPS: (n, s) => s.length >= 2 && rngNonDec(rngDigits(s)) && rngDistinct(s) > 1,
  SLOPES: (n, s) => s.length >= 2 && rngNonInc(rngDigits(s)) && rngDistinct(s) > 1,
  ASCENSION: (n, s) => rngUp(rngDigits(s)),
  DECAY: (n, s) => rngDown(rngDigits(s)),
  MOUNTAIN: (n, s) => rngUnimodal(rngDigits(s), 1, true),
  VALLEY: (n, s) => rngUnimodal(rngDigits(s), -1, true),
  MESA: (n, s) => rngUnimodal(rngDigits(s), 1, false),
  CANYON: (n, s) => rngUnimodal(rngDigits(s), -1, false),
  HILLS: (n, s) => rngHills(rngDigits(s), false),
  DUNES: (n, s) => rngHills(rngDigits(s), true),
  TURTLE: (n, s) => s.length >= 2 && rngDigits(s).every((v, i) => i === 0 || Math.abs(v - rngDigits(s)[i - 1]) <= 1),
  CASCADE: (n, s) => s.length >= 2 && rngDigits(s).every((v, i) => i === 0 || v === +s[i - 1] + 1),
  WATERFALL: (n, s) => s.length >= 2 && rngDigits(s).every((v, i) => i === 0 || v === +s[i - 1] - 1),
  ZIPPER: (n, s) => rngZipper(s),
  EVEN_SPACING: (n, s) => rngEvenSpacing(rngDigits(s), false),
  EVEN_SPACING_ABS: (n, s) => rngEvenSpacing(rngDigits(s), true),
  HOPSCOTCH: (n, s) => { if (s.length < 3 || rngDistinct(s) < 2) return false; for (let o = 0; o + 3 <= s.length; o++) { if (s[o] !== s[o + 2]) continue; if (!((o + 4 < s.length && s[o + 4] === s[o]) || (o >= 2 && s[o - 2] === s[o]))) return true; } return false; },
  DOUBLE_HOP: (n, s) => { if (s.length < 5 || rngDistinct(s) < 2) return false; for (let o = 0; o + 5 <= s.length; o++) if (s[o + 2] === s[o] && s[o + 4] === s[o]) return true; return false; },

  // --- sequences
  SEQUENCE_3: rngSeqRun(3),
  SEQUENCE_4: rngSeqRun(4),
  SEQUENCE_6: rngSeqRun(6),
  STRAIGHT: rngSeqRun(5),
  ROYAL_FLUSH: rngHas("56789"),
  STRAIGHT_FLUSH: rngParityRun,
  MINI_SCRAMBLE: (n, s) => rngWindowRun(s, 3),
  SCRAMBLE: (n, s) => { const d = rngDigits(s).sort((a, b) => a - b); if (d.length < 2) return false; for (let i = 1; i < d.length; i++) if (d[i] !== d[i - 1] + 1) return false; return true; },
  ARITHMETIC: (n, s) => rngProgression(s, "arith"),
  GEOMETRIC: (n, s) => rngProgression(s, "geom"),

  // --- consecutive integers
  CONSEC_PAIR_EXACT: (n, s) => rngSplitTwo(s),
  CONSEC_PAIR_ADJACENT: (n, s) => rngAdjConsec(s),
  CONSEC_PAIR_NEARBY: (n, s) => rngNearbyConsec(s),
  CONSEC_TRIPLE_EXACT: (n, s) => rngSplitConsec(s, 3, true),
  CONSEC_TRIPLE_SCRAMBLED: (n, s) => rngSplitConsec(s, 3, false),
  CONSEC_TRIPLE_CONTAINS: (n, s) => rngContainsConsec(s, 3),
  CONSEC_QUAD_EXACT: (n, s) => rngSplitConsec(s, 4, true),
  CONSEC_QUAD_SCRAMBLED: (n, s) => rngSplitConsec(s, 4, false),
  CONSEC_QUAD_CONTAINS: (n, s) => rngContainsConsec(s, 4),

  // --- mirrors / repeats
  PALINDROME: (n, s) => rngIsPal(s),
  POCKET_MIRROR: (n, s) => rngPalSub(s, 4),
  STROBOGRAMMATIC: (n, s) => rngIsStrobo(s),
  ECHO: (n, s) => s.length % 2 === 0 && s.slice(0, s.length / 2) === s.slice(s.length / 2),
  RHYME: (n, s) => { if (s.length < 4) return false; for (let L = 2; L <= Math.floor(s.length / 2); L++) for (let i = 0; i + L <= s.length; i++) if (s.indexOf(s.slice(i, i + L), i + L) !== -1) return true; return false; },
  MINI_ECHO: (n, s) => { for (let i = 0; i + 4 <= s.length; i++) if (s.slice(i, i + 2) === s.slice(i + 2, i + 4)) return true; return false; },

  // --- powers
  SQUARE: (n) => RNG_SQ.has(n),
  CUBE: (n) => CUBES.has(n),
  FOURTH_POWER: (n) => P4.has(n),
  FIFTH_POWER: (n) => P5.has(n),
  SIXTH_POWER: (n) => P6.has(n),
  SEVENTH_POWER: (n) => P7.has(n),
  EIGHTH_POWER: (n) => P8.has(n),
  NINTH_POWER: (n) => P9.has(n),
  TENTH_POWER: (n) => P10.has(n),
  ELEVENTH_POWER: (n) => P11.has(n),
  THIRTEENTH_POWER: (n) => P13.has(n),
  SEVENTEENTH_POWER: (n) => P17.has(n),
  NINETEENTH_POWER: (n) => P19.has(n),
  POWER_OF_TWO: (n) => RNG_P2.has(n),
  POWER_OF_THREE: (n) => POW3.has(n),
  POWER_OF_FIVE: (n) => POW5.has(n),
  POWER_OF_SEVEN: (n) => POW7.has(n),
  OUROBOROS: (n) => RNG_OURO.has(n),
  FACTORIAL: (n) => RNG_FACT.has(n),
  FIBONACCI: (n) => RNG_FIB.has(n),
  PRONIC: (n) => RNG_PRONIC.has(n),

  // --- culture
  LUCKY_7: rngHas("7"),
  JACKPOT: rngHas("777"),
  JACKPOT_FOUR: rngHas("7777"),
  JACKPOT_FIVE: rngHas("77777"),
  JACKPOT_SIX: rngHas("777777"),
  JACKPOT_EXACT: rngExact("777"),
  DEVIL: rngHas("666"),
  DEVIL_EXACT: rngExact("666"),
  INFERNAL: rngExact("666666"),
  NICE: rngHas("69"),
  VERY_NICE: rngHas("6969"),
  NICE_EXACT: rngExact("69"),
  VERY_VERY_NICE: rngExact("696969"),
  MEANING: rngHas("42"),
  DEEPER_MEANING: rngHas("4242"),
  MEANING_EXACT: rngExact("42"),
  UNIVERSAL_ANSWER: rngExact("424242"),
  BOTANIST: rngHas("420"),
  BOTANIST_EXACT: rngExact("420"),
  HOTBOX: rngExact("420420"),
  LEET: rngHas("1337"),
  LEET_EXACT: rngExact("1337"),
  SIXTY_SEVEN: rngHas("67"),
  SIXTY_SEVEN_DOUBLE: rngHas("6767"),
  SIXTY_SEVEN_EXACT: rngExact("67"),
  BRAINROT: rngExact("676767"),
  EIGHTY_SIX: rngHas("86"),
  EIGHTY_SIX_EXACT: rngExact("86"),
  BIG_BROTHER: rngHas("1984"),
  BIG_BROTHER_EXACT: rngExact("1984"),
  ERROR: rngHas("404"),
  ERROR_EXACT: rngExact("404"),
  ORIENTATION: rngHas("101"),
  ORIENTATION_EXACT: rngExact("101"),
  EMERGENCY: rngHas("911"),
  EMERGENCY_EXACT: rngExact("911"),
  MAYDAY: rngExact("911911"),
  CALENDAR: rngHas("365"),
  CALENDAR_EXACT: rngExact("365"),
  GROUNDHOG_DAY: rngExact("365365"),
  ALWAYS: (n, s) => s === "247365" || s === "365247",
  SECRET_AGENT: rngHas("007"),
  HELL: rngHas("7734"),
  EXACT_HELL: rngExact("7734"),
  HELLO: rngHas("07734"),
  BOOB_8008: rngHas("8008"),
  BOOB_58008: rngHas("58008"),
  BOOB_80085: rngHas("80085"),
  EXACT_BOOB: (n, s) => s === "8008" || s === "58008",
  EXACT_BOOB_80085: rngExact("80085"),
  ULTIMEME: (n, s) => s.includes("69") && s.includes("420"),
  ULTIMEME_EXACT: (n, s) => s === "69420" || s === "42069",
  FOOTBALL_17776: rngExact("17776"),
  FULL_DAY: rngExact("86400"),

  // --- constants
  PI: (n, s) => ["314", "3141", "31415", "314159"].includes(s),
  PI_CONTAINS_3: rngHas("314"),
  PI_CONTAINS_4: rngHas("3141"),
  PI_CONTAINS_5: rngHas("31415"),
  E: (n, s) => ["271", "2718", "27182", "271828"].includes(s),
  E_CONTAINS_3: rngHas("271"),
  E_CONTAINS_4: rngHas("2718"),
  E_CONTAINS_5: rngHas("27182"),
  TAU: (n, s) => ["6283", "62831", "628318"].includes(s),
  TAU_SLICE_4: rngHas("6283"),
  TAU_SLICE_5: rngHas("62831"),
  GOLDEN_RATIO: (n, s) => ["1618", "16180", "161803"].includes(s),
};

/** The 233 badge definitions, rarest first.
 *  [id, label, emoji, tier, ep, count, family, rule-in-words]
 *  `count` is how many of the 1,000,001 possible rolls earn it -- measured by
 *  sweeping the whole range, not estimated. EP is the game's own price and
 *  works out to roughly 100 EP per roll whatever the badge, so a Mythic is
 *  not better value than a Common, only rarer.
 */
const RNG_BADGE_ROWS = [
  ["BIG_BROTHER_EXACT","Orwellian","👁️","m",100000100,1,"BIG_BROTHER","exactly \"1984\""],
  ["BOTANIST_EXACT","Exact Botanist","🌿","m",100000100,1,"BOTANIST","exactly \"420\""],
  ["BRAINROT","Brainrot","🫠","m",100000100,1,"SIXTY_SEVEN","exactly \"676767\""],
  ["CALENDAR_EXACT","Exact Calendar","📅","m",100000100,1,"CALENDAR","exactly \"365\""],
  ["DEVIL_EXACT","Exact Devil","😈","m",100000100,1,"DEVIL","exactly \"666\""],
  ["DIGIT_EIGHT","Eight","8️⃣","m",100000100,1,"SINGLE_DIGIT","the number eight"],
  ["DIGIT_FIVE","Five","5️⃣","m",100000100,1,"SINGLE_DIGIT","the number five"],
  ["DIGIT_FOUR","Four","4️⃣","m",100000100,1,"SINGLE_DIGIT","the number four"],
  ["DIGIT_NINE","Nine","9️⃣","m",100000100,1,"SINGLE_DIGIT","the number nine"],
  ["DIGIT_ONE","One","1️⃣","m",100000100,1,"SINGLE_DIGIT","the number one"],
  ["DIGIT_SEVEN","Seven","7️⃣","m",100000100,1,"SINGLE_DIGIT","the number seven"],
  ["DIGIT_SIX","Six","6️⃣","m",100000100,1,"SINGLE_DIGIT","the number six"],
  ["DIGIT_THREE","Three","3️⃣","m",100000100,1,"SINGLE_DIGIT","the number three"],
  ["DIGIT_TWO","Two","2️⃣","m",100000100,1,"SINGLE_DIGIT","the number two"],
  ["DIGIT_ZERO","Zero","0️⃣","m",100000100,1,"SINGLE_DIGIT","the number zero"],
  ["EIGHTY_SIX_EXACT","Exact Eighty-Six","🍽️","m",100000100,1,"EIGHTY_SIX","exactly \"86\""],
  ["EMERGENCY_EXACT","Exact Emergency","🚑","m",100000100,1,"EMERGENCY","exactly \"911\""],
  ["ERROR_EXACT","Not Found","🚫","m",100000100,1,"ERROR","exactly \"404\""],
  ["EXACT_BOOB_80085","Exact 80085","💎","m",100000100,1,"BOOB","exactly \"80085\""],
  ["EXACT_HELL","Exact Hell","👹","m",100000100,1,"HELL","exactly \"7734\""],
  ["FOOTBALL_17776","17776","🏈","m",100000100,1,"","exactly \"17776\""],
  ["FULL_DAY","Full Day","⏳","m",100000100,1,"","exactly \"86400\", the number of seconds in a day"],
  ["GROUNDHOG_DAY","Groundhog Day","📅","m",100000100,1,"CALENDAR","exactly \"365365\""],
  ["HOTBOX","Hotbox","🌿","m",100000100,1,"BOTANIST","exactly \"420420\""],
  ["INFERNAL","Infernal","🔱","m",100000100,1,"DEVIL","exactly \"666666\""],
  ["JACKPOT_EXACT","Exact Jackpot","💰","m",100000100,1,"JACKPOT","exactly \"777\""],
  ["JACKPOT_SIX","Jackpot Six","🏦","m",100000100,1,"JACKPOT","contains six 7s in a row"],
  ["LEET_EXACT","Exact Leet","💻","m",100000100,1,"LEET","exactly \"1337\""],
  ["MAYDAY","Mayday","🚑","m",100000100,1,"EMERGENCY","exactly \"911911\""],
  ["MEANING_EXACT","Exact Meaning","🌌","m",100000100,1,"BOTANIST","exactly \"42\""],
  ["NICE_EXACT","Exact Nice","😏","m",100000100,1,"NICE","exactly \"69\""],
  ["ONE_MILLION","One Million","🐐","m",100000100,1,"","the number one million"],
  ["ORIENTATION_EXACT","Exact Orientation","🧭","m",100000100,1,"ORIENTATION","exactly \"101\""],
  ["SIXTY_SEVEN_EXACT","Exact Six-Seven","🫠","m",100000100,1,"SIXTY_SEVEN","exactly \"67\""],
  ["UNIVERSAL_ANSWER","Universal Answer","🌌","m",100000100,1,"MEANING","exactly \"424242\""],
  ["VERY_VERY_NICE","Very Very Nice","😏","m",100000100,1,"NICE","exactly \"696969\""],
  ["ALWAYS","Always","♾️","m",50000050,2,"CALENDAR","exactly \"247365\" or \"365247\" (24/7, 365)"],
  ["EXACT_BOOB","Exact Boob","🍈","m",50000050,2,"BOOB","exactly \"8008\" or \"58008\""],
  ["ULTIMEME_EXACT","Funny Number","😂","m",50000050,2,"ULTIMEME","exactly \"69420\" or \"42069\""],
  ["GOLDEN_RATIO","Golden Ratio","🐚","m",33333367,3,"","exactly φ (1618, 16180, or 161803)"],
  ["NINETEENTH_POWER","19th Power","🌑","m",33333367,3,"POWER","a perfect nineteenth power (n¹⁹)"],
  ["SEVENTEENTH_POWER","17th Power","🧙","m",33333367,3,"POWER","a perfect seventeenth power (n¹⁷)"],
  ["TAU","Tau","🌀","m",33333367,3,"TAU","exactly τ (6283, 62831, or 628318)"],
  ["THIRTEENTH_POWER","13th Power","💀","m",33333367,3,"POWER","a perfect thirteenth power (n¹³)"],
  ["CONSEC_QUAD_EXACT","4 Consecutive Numbers","⛓️","m",25000025,4,"CONSECUTIVE","the entire number splits into four consecutive integers in order"],
  ["E","Euler's Number","📈","m",25000025,4,"E","the number e (271, 2718, 27182, or 271828)"],
  ["ELEVENTH_POWER","11th Power","🕚","m",25000025,4,"POWER","a perfect eleventh power (n¹¹)"],
  ["PI","Pi","🥧","m",25000025,4,"PI","exactly π (314, 3141, 31415, or 314159)"],
  ["TENTH_POWER","10th Power","🔟","m",25000025,4,"POWER","a perfect tenth power (n¹⁰)"],
  ["NINTH_POWER","9th Power","☁️","m",20000020,5,"POWER","a perfect ninth power (n⁹)"],
  ["EIGHTH_POWER","8th Power","🎱","m",16666683,6,"POWER","a perfect eighth power (n⁸)"],
  ["OUROBOROS","Ouroboros","🐍","m",14285729,7,"POWER","a number raised to itself: nⁿ (1¹, 2², ... 7⁷)"],
  ["POWER_OF_SEVEN","Power of Seven","7️⃣","m",12500013,8,"","a power of 7 (7ⁿ)"],
  ["SEVENTH_POWER","7th Power","🌈","m",12500013,8,"POWER","a perfect seventh power (n⁷)"],
  ["FACTORIAL","Factorial","❗","m",11111122,9,"","a factorial number (n!)"],
  ["HELLO","Hello","👋","m",11111122,9,"","contains \"07734\" (spells HELLO upside-down)"],
  ["POWER_OF_FIVE","Power of Five","5️⃣","m",11111122,9,"","a power of 5 (5ⁿ)"],
  ["SEQUENCE_6","Sequence (6)","🔢","m",11111122,9,"PROGRESSION","contains a sequence of 6 consecutive digits"],
  ["CONTIGUOUS_SIXES","Contiguous Sixes","➖➖➖➖","m",10000010,10,"CONTIGUOUS_RUN","six identical consecutive digits"],
  ["DEEP_VOID_FIVE","Deep Void (5)","⚫","m",10000010,10,"VOID_DEPTH","contains \"00000\""],
  ["EON","Eon","🗿","m",10000010,10,"VOID_DEPTH","ends in five zeros"],
  ["ONE_DIGIT","Single Digit","☝️","m",10000010,10,"SINGLE_DIGIT","has exactly one digit"],
  ["QUINT_NINE","Quint Nine","🥳","m",10000010,10,"NINE_ENDING","ends in 99999"],
  ["SEMI_EON","Semi-Eon","🦴","m",10000010,10,"VOID_DEPTH","ends in \"50000\""],
  ["SIXTH_POWER","6th Power","🎲","a",9090918,11,"POWER","a perfect sixth power (n⁶)"],
  ["POWER_OF_THREE","Power of Three","🔺","a",7692315,13,"","a power of 3 (3ⁿ)"],
  ["FIFTH_POWER","5th Power","🖐️","a",6250006,16,"POWER","a perfect fifth power (n⁵)"],
  ["JACKPOT_FIVE","Jackpot Five","💰💰💰","a",5263163,19,"JACKPOT","contains five 7s in a row"],
  ["BOOB_58008","58008","🔠","a",5000005,20,"BOOB","contains \"58008\" (spells BOOBS upside-down)"],
  ["BOOB_80085","80085","🅱️","a",5000005,20,"BOOB","contains \"80085\" (spells BOOBS)"],
  ["E_CONTAINS_5","E Slice (5)","📈","a",5000005,20,"E","contains \"27182\""],
  ["PI_CONTAINS_5","Pi Slice (5)","🥧","a",5000005,20,"PI","contains \"31415\""],
  ["POWER_OF_TWO","Power of Two","💾","a",5000005,20,"","a power of 2 (2ⁿ)"],
  ["ROYAL_FLUSH","Royal Flush","👑","a",5000005,20,"STRAIGHT","contains 56789 — the highest possible straight"],
  ["TAU_SLICE_5","Tau Slice (5)","🌀","a",5000005,20,"TAU","contains \"62831\""],
  ["CASCADE","Cascade","🌊","a",3333337,30,"PROGRESSION","every digit increases by exactly 1 from the previous"],
  ["FIBONACCI","Fibonacci Number","🐚","a",3333337,30,"","part of the golden ratio sequence found in nature"],
  ["FOURTH_POWER","4th Power","📦","a",3125003,32,"POWER","a perfect fourth power (n⁴)"],
  ["WATERFALL","Waterfall","🚿","a",2857146,35,"PROGRESSION","every digit decreases by exactly 1 from the previous"],
  ["CONSEC_QUAD_CONTAINS","4 Consecutive Numbers (Contains)","🔗","a",2631582,38,"CONSECUTIVE","contains four adjacent consecutive integers"],
  ["CONSEC_QUAD_SCRAMBLED","4 Consecutive Numbers (Scrambled)","🔀","a",2272730,44,"CONSECUTIVE","the entire number splits into four consecutive integers, but not in order"],
  ["HOMOGENEOUS","Homogeneous","🥛","a",2222224,45,"","all digits are the same"],
  ["ULTIMEME","Funny Numbers","😂","a",1666668,60,"ULTIMEME","contains both \"69\" and \"420\""],
  ["BINARY_SOUL","Binary Soul","🤖","a",1538463,65,"","only 0s and 1s"],
  ["STRAIGHT_FLUSH","Straight Flush","🃏","a",1449277,69,"STRAIGHT","contains 5 consecutive same-parity digits (02468, 13579, or their reverse)"],
  ["TWO_DIGITS","Two Digits","✌️","a",1111112,90,"","has exactly two digits"],
  ["SPY","Spy Number","🕵️","a",1030929,97,"","the sum of its digits equals the product of its digits"],
  ["EPOCH","Epoch","🏛️","a",1000001,100,"VOID_DEPTH","ends in four zeros"],
  ["QUAD_NINE","Quad Nine","🎊","a",1000001,100,"NINE_ENDING","ends in 9999"],
  ["SEMI_EPOCH","Semi-Epoch","⌛","a",1000001,100,"VOID_DEPTH","ends in \"5000\""],
  ["CUBE","3rd Power","🧊","e",990100,101,"POWER","a perfect cube (n³)"],
  ["EVEN_SPACING","Even Spacing","📏","e",862070,116,"PROGRESSION","all digits are evenly spaced in an arithmetic sequence"],
  ["CONSEC_TRIPLE_EXACT","3 Consecutive Numbers","⛓️","e",555556,180,"CONSECUTIVE","the entire number splits into three consecutive integers in order"],
  ["CONTIGUOUS_FIVES","Contiguous Fives","➖➖➖","e",552487,181,"CONTIGUOUS_RUN","five identical consecutive digits"],
  ["DEEP_VOID_FOUR","Deep Void (4)","🌌","e",552487,181,"VOID_DEPTH","contains \"0000\""],
  ["STROBOGRAMMATIC","Strobogrammatic","🙃","e",502513,199,"","looks the same when rotated 180 degrees"],
  ["STRAIGHT","Straight","📏","e",454546,220,"STRAIGHT","contains a sequence of 5 consecutive digits (ascending or descending)"],
  ["JACKPOT_FOUR","Jackpot Four","💰💰","e",357143,280,"JACKPOT","contains four 7s in a row"],
  ["DEEPER_MEANING","Deeper Meaning","🌌","e",334448,299,"MEANING","contains \"4242\""],
  ["SIXTY_SEVEN_DOUBLE","6767","🫠","e",334448,299,"SIXTY_SEVEN","contains \"6767\""],
  ["VERY_NICE","Very Nice","🥵","e",334448,299,"NICE","contains \"6969\""],
  ["BIG_BROTHER","Big Brother","👁️","e",333334,300,"BIG_BROTHER","contains \"1984\""],
  ["BOOB_8008","8008","🔢","e",333334,300,"BOOB","contains \"8008\" (spells BOOB upside-down)"],
  ["E_CONTAINS_4","E Slice (4)","📈","e",333334,300,"E","contains \"2718\""],
  ["HELL","Hell","🔥","e",333334,300,"HELL","contains \"7734\" (spells HELL upside-down)"],
  ["LEET","Leet","💻","e",333334,300,"LEET","contains \"1337\""],
  ["PI_CONTAINS_4","Pi Slice (4)","🥧","e",333334,300,"PI","contains \"3141\""],
  ["TAU_SLICE_4","Tau Slice (4)","🌀","e",333334,300,"TAU","contains \"6283\""],
  ["CONSEC_TRIPLE_SCRAMBLED","3 Consecutive Numbers (Scrambled)","🔀","e",277778,360,"CONSECUTIVE","the entire number splits into three consecutive integers, but not in order"],
  ["ZIPPER","Zipper","🤐","e",246914,405,"","two digits alternating perfectly"],
  ["ASCENSION","Ascension","📈","e",219298,456,"MONOTONIC","every digit is strictly larger than the previous"],
  ["GEOMETRIC","Crescendo","🔊","e",208334,480,"PROGRESSION","splits into three or more numbers with a constant ratio"],
  ["FIVE_OF_A_KIND","Five of a Kind","🃏","e",198020,505,"OF_A_KIND","contains five identical digits"],
  ["CONSEC_TRIPLE_CONTAINS","3 Consecutive Numbers (Contains)","🔗","e",157978,633,"CONSECUTIVE","contains three adjacent consecutive integers"],
  ["CONTIGUOUS_THREE_PAIR","Contiguous Three Pair","👨‍👩‍👧‍👦👯","e",154321,648,"PAIRS","contains three adjacent contiguous pairs"],
  ["FRAMED_PAIR","Framed Pair","🖼️","e",137174,729,"PAIRS","a 4-digit number where the middle two digits match each other but differ from both end digits"],
  ["FRAMED_QUAD","Framed Quad","🪟","e",137174,729,"OF_A_KIND","four of a kind in the middle, bookended by different digits"],
  ["FRAMED_TRIPLE","Framed Triple","🖼️🖼️","e",137174,729,"OF_A_KIND","a triple in the middle, bookended by different digits"],
  ["DECAY","Decay","📉","e",119474,837,"MONOTONIC","every digit is strictly smaller than the previous"],
  ["THREE_DIGITS","Three Digits","🤟","e",111111,900,"","has exactly three digits"],
  ["ECHO","Echo","📣","e",100100,999,"","the first half repeats as the second half"],
  ["COLOSSAL","Colossal","🪨","e",100000,1000,"","a number greater than 999,000"],
  ["MILLENNIUM","Millennium","🗓️","e",100000,1000,"VOID_DEPTH","ends in triple zeros"],
  ["PRONIC","Pronic Number","🧮","e",100000,1000,"","the product of two consecutive integers (n * n+1)"],
  ["SEMI_MILLENNIUM","Semi-Millennium","📜","e",100000,1000,"VOID_DEPTH","ends in \"500\""],
  ["TRIPLE_NINE","Triple Nine","🎉","e",100000,1000,"NINE_ENDING","ends in 999"],
  ["SQUARE","2nd Power","🟦","r",99900,1001,"POWER","a perfect square (n²)"],
  ["EVEN_SPACING_ABS","Even Spacing (Absolute)","📐","r",90992,1099,"PROGRESSION","all digits have the same absolute spacing (e.g., ±2 each time)"],
  ["FIREFLY","Firefly","🪲","r",82237,1216,"DUALITY","one unique digit among identical others"],
  ["CONSEC_PAIR_EXACT","2 Consecutive Numbers","🔗","r",50505,1980,"CONSECUTIVE","the entire number splits into two consecutive integers"],
  ["PALINDROME","Palindrome","🪞","r",50025,1999,"PALINDROME","reads the same forwards and backwards"],
  ["CONTIGUOUS_QUADS","Contiguous Quads","➖➖","r",37023,2701,"CONTIGUOUS_RUN","four identical consecutive digits"],
  ["DEEP_VOID_THREE","Deep Void (3)","🌑","r",37023,2701,"VOID_DEPTH","contains \"000\""],
  ["TURTLE","Turtle","🐢","r",36049,2774,"PROGRESSION","all consecutive digits differ by at most 1"],
  ["SECRET_AGENT","Secret Agent","🕶️","r",34614,2889,"","contains \"007\""],
  ["HEAVY","Heavy","🧱","r",33300,3003,"","the sum of its digits exceeds 45"],
  ["CONTIGUOUS_BOAT","Contiguous Full House","🏰","r",30111,3321,"BOAT","contains a contiguous set of three adjacent to a contiguous set of two"],
  ["DEVIL","Devil","😈","r",27027,3700,"DEVIL","contains \"666\""],
  ["JACKPOT","Jackpot","💰","r",27027,3700,"JACKPOT","contains \"777\""],
  ["SEQUENCE_4","Sequence (4)","🔢","r",25907,3860,"PROGRESSION","contains a sequence of 4 consecutive digits"],
  ["ERROR","Error 404","🚫","r",25132,3979,"ERROR","contains \"404\""],
  ["ORIENTATION","Orientation","🧭","r",25132,3979,"ORIENTATION","contains \"101\" (intro course number)"],
  ["BOTANIST","Botanist","🌿","r",25006,3999,"BOTANIST","contains \"420\""],
  ["CALENDAR","Calendar","📅","r",25006,3999,"CALENDAR","contains \"365\" (days in a year)"],
  ["E_CONTAINS_3","E Slice (3)","📈","r",25006,3999,"E","contains \"271\""],
  ["EMERGENCY","Emergency","🚑","r",25006,3999,"EMERGENCY","contains \"911\""],
  ["PI_CONTAINS_3","Pi Slice (3)","🥧","r",25006,3999,"PI","contains \"314\""],
  ["DIVISIBLE_BY_THREE","Divisible by Three","🔺","r",24414,4096,"","every digit is divisible by 3"],
  ["SCRAMBLE","Scramble","🔀","r",22722,4401,"PROGRESSION","all digits form a consecutive sequence when sorted"],
  ["DUALITY","Duality","☯️","r",21654,4618,"DUALITY","uses exactly two different digits"],
  ["STEPS","Steps","🪜","r",20202,4950,"MONOTONIC","digits never decrease"],
  ["ARITHMETIC","Metronome","🎼","r",17784,5623,"PROGRESSION","splits into three or more numbers with a constant difference"],
  ["FRAMED_DOUBLE","Framed Double","🖼️🖼️🖼️","r",15242,6561,"PAIRS","two pairs in the middle, bookended by different digits"],
  ["SLOPES","Slopes","🛝","r",12582,7948,"MONOTONIC","digits never increase"],
  ["PAIRED_BOOKENDS","Paired Bookends","👐","r",11122,8991,"BOOKENDS","starts with a pair and ends with a different pair"],
  ["FOUR_DIGITS","Four Digits","🍀","r",11111,9000,"","has exactly four digits"],
  ["THREE_PAIR","Three Pair","👯‍♀️👯","r",10288,9720,"PAIRS","contains three distinct pairs of matching digits"],
  ["BOOKENDS","Bookends","📚","r",10010,9990,"BOOKENDS","the first two digits match the last two"],
  ["MIRROR_BOOKENDS","Mirror Bookends","📖","r",10010,9990,"BOOKENDS","first two digits are reversed as the last two"],
  ["CENTURY","Century","💯","r",10000,10000,"VOID_DEPTH","ends in double zeros"],
  ["DOUBLE_NINE","Double Nine","🎈","r",10000,10000,"NINE_ENDING","ends in 99"],
  ["QUARTER_CENTURY","Quarter-Century","🪙","r",10000,10000,"","ends in \"25\""],
  ["SEMI_CENTURY","Semi-Century","🗓️","r",10000,10000,"VOID_DEPTH","ends in \"50\""],
  ["THREE_QUARTER_CENTURY","Three-Quarter Century","🕰️","r",10000,10000,"","ends in \"75\""],
  ["QUADS","Four of a Kind","🍀","u",8436,11854,"OF_A_KIND","contains four identical digits"],
  ["EQUATION","Equation","🟰","u",7720,12954,"","insert one of + − × ÷ and an equals sign to make a true equation"],
  ["LOW_BALL","Low Ball","📉","u",6400,15626,"","contains only digits from 0 to 4"],
  ["MOUNTAIN","Mountain","🏔️","u",5885,16992,"PEAK","digits ascend to a peak and then descend"],
  ["DOUBLE_HOP","Double Hop","🦘🦘","u",5321,18793,"HOPSCOTCH","a digit appears at every other position (3 times)"],
  ["HIGH_ROLLER","High Roller","🤑","u",5120,19530,"","contains only digits from 5 to 9"],
  ["VALLEY","Valley","🏜️","u",4199,23817,"PEAK","digits descend to a trough and then ascend"],
  ["CONTIGUOUS_TWO_PAIR","Contiguous Two Pair","👨‍👩‍👧‍👦","u",3957,25272,"PAIRS","contains two adjacent contiguous pairs"],
  ["MINI_ECHO","Mini Echo","🔂","u",3704,27001,"REPEAT","contains an adjacent 2-digit repeat"],
  ["ALTERNATOR","Alternator","⚡","u",2845,35145,"","digits strictly alternate between even and odd"],
  ["FLUSH","Flush","🎨","u",2845,35155,"","all digits are either all even or all odd"],
  ["CONTIGUOUS_TRIPS","Contiguous Trips","➖","u",2784,35920,"CONTIGUOUS_RUN","three identical consecutive digits"],
  ["DEEP_VOID","Deep Void","🕳️","u",2784,35920,"VOID_DEPTH","contains \"00\""],
  ["FEATHER","Feather","🪶","u",2667,37501,"","the sum of its digits is less than 15"],
  ["BLACKJACK","Blackjack","♠️","u",2521,39662,"","digits sum exactly to 21"],
  ["BOAT","Full House","🏠","u",2397,41715,"BOAT","contains a set of three and a set of two"],
  ["POCKET_MIRROR","Pocket Mirror","🪞","u",2124,47089,"PALINDROME","contains a palindrome of 4 or more digits"],
  ["SNAKE_EYES","Snake Eyes","🎲","u",2121,47139,"","contains a single pair of ones and no other pairs"],
  ["EIGHTY_SIX","Eighty-Six","🍽️","u",2024,49401,"EIGHTY_SIX","contains \"86\" (restaurant slang for \"out of\")"],
  ["MEANING","Meaning of Life","🌌","u",2024,49401,"BOTANIST","contains \"42\""],
  ["NICE","Nice","😏","u",2024,49401,"NICE","contains the number 69"],
  ["SIXTY_SEVEN","Six-Seven","🫠","u",2024,49401,"SIXTY_SEVEN","contains \"67\""],
  ["BALANCED","Balanced","⚖️","u",1959,51036,"","sum of first half of digits equals sum of second half"],
  ["RHYME","Rhyme","🎶","u",1872,53407,"REPEAT","contains the same 2+ digit substring twice"],
  ["SEQUENCE_3","Sequence (3)","🔢","u",1716,58287,"PROGRESSION","contains a sequence of 3 consecutive digits"],
  ["CONSEC_PAIR_ADJACENT","2 Consecutive Numbers (Contains)","🔗","u",1659,60270,"CONSECUTIVE","contains two adjacent substrings that are consecutive integers"],
  ["CONSEC_PAIR_NEARBY","2 Consecutive Numbers (Nearby)","🔗","u",1575,63491,"CONSECUTIVE","contains two non-adjacent substrings that are consecutive integers"],
  ["MESA","Mesa","🗻","u",1568,63762,"PEAK","digits rise to a peak, then fall (flat stretches allowed)"],
  ["PRIME","Prime Number","💎","u",1274,78498,"","divisible only by 1 and itself"],
  ["TRINITY","Trinity","⚜️","u",1265,79056,"","uses exactly three different digits"],
  ["DOZEN","Dozen","🍩","u",1200,83333,"","divisible by 12"],
  ["CANYON","Canyon","🌄","u",1184,84432,"PEAK","digits fall to a floor, then rise (flat stretches allowed)"],
  ["FIVE_DIGITS","Five Digits","🖐️","u",1111,90000,"","has exactly five digits"],
  ["ELEVEN","Eleven","🕚","u",1100,90909,"","divisible by 11"],
  ["HARSHAD","Harshad Number","🤝","u",1048,95428,"","divisible by the sum of its own digits"],
  ["SANDWICH","Sandwich","🥪","u",1000,99954,"EQUILIBRIUM","first and last digits match, with at least one different digit between them"],
  ["EQUILIBRIUM","Equilibrium","🧘","u",1000,99999,"EQUILIBRIUM","the first and last digits are identical"],
  ["SEMI_CLEAN","Semi-Clean","🧹","u",1000,100000,"","ends in a 5"],
  ["CLEAN","Clean","🧼","u",1000,100001,"VOID_DEPTH","ends in a zero"],
  ["HILLS","Hills","🏞️","c",733,136425,"HILLS","digits strictly alternate between rising and falling"],
  ["TRIPS","Three of a Kind","🎰","c",724,138033,"OF_A_KIND","contains three identical digits"],
  ["LUCKY_SEVEN_DIV","Lucky Seven (Divisible)","🎰","c",700,142857,"","divisible by 7"],
  ["HETEROGENEOUS","Heterogeneous","🥗","c",593,168571,"","no repeated digits"],
  ["MINI_SCRAMBLE","Mini Scramble","🧩","c",579,172847,"PROGRESSION","contains 3 or more adjacent digits that form a run when sorted"],
  ["GAP_ONE","Gap One","↕️","c",529,188888,"","the first and last digits differ by exactly 1"],
  ["TWO_PAIR","Two Pair","👯‍♀️","c",377,265518,"PAIRS","contains two distinct pairs of matching digits"],
  ["DUNES","Dunes","🐫","c",364,274590,"HILLS","rises and falls keep alternating (flat stretches allowed)"],
  ["HOPSCOTCH","Hopscotch","🦘","c",312,320193,"HOPSCOTCH","a digit appears at every other position (2 times)"],
  ["GHOST","Ghost","👻","c",309,323848,"","contains exactly one \"0\""],
  ["QUARTET","Quartet","🎻","c",290,344736,"","uses exactly four different digits"],
  ["BERYLLIUM","Beryllium (4)","💎","c",282,354294,"","contains exactly one \"4\""],
  ["BORON","Boron (5)","🧼","c",282,354294,"","contains exactly one \"5\""],
  ["CARBON","Carbon (6)","✏️","c",282,354294,"","contains exactly one \"6\""],
  ["FLUORINE","Fluorine (9)","🦷","c",282,354294,"","contains exactly one \"9\""],
  ["HELIUM","Helium (2)","🎈","c",282,354294,"","contains exactly one \"2\""],
  ["LITHIUM","Lithium (3)","🔋","c",282,354294,"","contains exactly one \"3\""],
  ["NITROGEN","Nitrogen (7)","❄️","c",282,354294,"","contains exactly one \"7\""],
  ["OXYGEN","Oxygen (8)","💨","c",282,354294,"","contains exactly one \"8\""],
  ["HYDROGEN","Hydrogen (1)","💧","c",282,354295,"","contains exactly one \"1\""],
  ["GROUNDED","Grounded","⚓","c",250,399996,"","the first digit is smaller than the last"],
  ["CONTIGUOUS_PAIR","Contiguous Pair","🫂","c",249,402130,"PAIRS","contains a contiguous pair of matching digits"],
  ["LUCKY_7","Lucky Seven","7️⃣","c",213,468559,"","contains the number 7"],
  ["LIFTOFF","Liftoff","🚀","c",200,499996,"","the first digit is larger than the last"],
  ["ODD","Odd","🦄","c",200,500000,"","not divisible by 2"],
  ["EVEN","Even","⚖️","c",200,500001,"","divisible by 2"],
  ["VOID","Void","🕳️","c",167,597870,"","contains no zeros"],
  ["NEIGHBORS","Neighbors","🏘️","c",161,620689,"","contains two digits that are adjacent in value"],
  ["PAIR","Pair","👯","c",120,831430,"PAIRS","contains a pair of matching digits"],
  ["SIX_DIGITS","Six Digits","🐝","c",111,900000,"","has exactly six digits"],
];

const RNG_CURVE = [[1759,0],[1915,0.182],[1976,0.486],[2081,0.999],[2210,1.988],[2300,2.839],[2432,3.994],[2542,4.981],[2666,5.978],[2797,6.996],[2879,7.969],[2968,8.997],[3033,9.991],[3099,10.996],[3174,11.999],[3226,12.963],[3295,13.989],[3366,14.982],[3445,15.98],[3522,16.974],[3606,17.999],[3673,18.991],[3737,19.998],[3799,20.997],[3866,21.959],[3925,22.967],[3980,23.989],[4040,24.999],[4105,25.989],[4169,26.997],[4234,27.995],[4296,28.984],[4360,29.988],[4426,30.985],[4486,31.984],[4551,32.994],[4622,33.991],[4683,34.986],[4754,35.981],[4826,36.984],[4893,37.971],[4962,38.996],[5027,39.99],[5095,40.997],[5161,41.99],[5229,42.996],[5304,43.997],[5381,44.994],[5464,45.988],[5547,46.976],[5635,47.998],[5718,48.994],[5801,49.993],[5889,50.99],[5972,51.991],[6060,52.997],[6151,53.994],[6250,54.992],[6355,55.995],[6467,56.992],[6582,57.998],[6693,58.987],[6810,59.999],[6929,60.992],[7061,61.999],[7201,62.999],[7351,63.998],[7509,64.995],[7677,65.996],[7859,66.999],[8042,67.997],[8243,68.996],[8485,69.997],[8744,70.996],[9015,71.999],[9322,72.996],[9691,73.999],[10073,75],[10527,75.998],[11021,76.999],[11628,77.999],[12218,79],[12833,79.998],[13413,80.999],[13993,82],[14565,82.998],[15169,84],[15869,84.999],[16722,85.999],[17686,86.999],[18871,87.999],[20366,88.997],[22292,90],[25465,91],[28158,91.999],[29803,93],[31929,93.999],[35468,94.999],[41348,96],[51811,97],[94666,98],[162291,99],[337578,99.5],[514418,99.8],[1053947,99.9],[2278448,99.95],[13933656,99.99],[112146596,99.999],[186186584,100]];

const RNG_TIER_NAMES = { c: "common", u: "uncommon", r: "rare", e: "epic", a: "anomaly", m: "mythic" };
const RNG_TIER_ORDER = ["c", "u", "r", "e", "a", "m"];
/** Tier -> the class that colours it. One place, so a chip, a collection
 *  cell and a filter button can never disagree about what "rare" looks like. */
const RNG_TIER_CLASS = { c: "t-common", u: "t-uncommon", r: "t-rare", e: "t-epic", a: "t-anomaly", m: "t-mythic" };

const RNG_BADGES = RNG_BADGE_ROWS.map(([id, label, emoji, tier, ep, count, family, desc]) => ({
  id, label, emoji, tier, ep, count, family: family || null, desc,
  odds: count / (RNG_MAX + 1),
}));
const RNG_BY_ID = Object.fromEntries(RNG_BADGES.map((b) => [b.id, b]));

/** Roll-level rarity bands. These are percentile slices of the EP
 *  distribution over every possible roll, so "mythic" really is the top 1%
 *  and not a guess. Measured, then pinned here as constants so scoring works
 *  offline and costs nothing.
 */
const RNG_BANDS = [
  { key: "mythic",   min: 162292, label: "MYTHIC",   note: "top 1%",       coins: 60 },
  { key: "anomaly",  min: 35469,  label: "ANOMALY",  note: "top 5%",       coins: 30 },
  { key: "epic",     min: 22293,  label: "EPIC",     note: "top 10%",      coins: 15 },
  { key: "rare",     min: 10074,  label: "RARE",     note: "top 25%",      coins: 8 },
  { key: "uncommon", min: 5802,   label: "UNCOMMON", note: "top half",     coins: 4 },
  { key: "common",   min: 2087,   label: "COMMON",   note: "bottom half",  coins: 2 },
  { key: "trash",    min: 0,      label: "TRASH",    note: "bottom 1%",    coins: 1 },
];

/** Scores one roll.
 *
 *  The family rule is the part everyone gets wrong: 168 of the 233 badges sit
 *  in one of 39 families, and inside a family only the highest-EP badge you
 *  matched is paid. Adding up every badge on screen gives a bigger number
 *  than the game's, which is why two calculators disagree about the same roll.
 */
function rngScore(n) {
  const s = String(n);
  const earned = [];
  for (let i = 0; i < RNG_BADGES.length; i++) {
    const b = RNG_BADGES[i];
    const rule = RNG_RULES[b.id];
    if (rule && rule(n, s)) earned.push(b);
  }
  const best = {};
  for (const b of earned) {
    if (!b.family) continue;
    if (!best[b.family] || b.ep > best[b.family].ep) best[b.family] = b;
  }
  const paid = [], outranked = [];
  for (const b of earned) {
    if (!b.family || best[b.family].id === b.id) paid.push(b);
    else outranked.push(b);
  }
  const ep = paid.reduce((a, b) => a + b.ep, 0);
  paid.sort((a, b) => b.ep - a.ep);
  outranked.sort((a, b) => b.ep - a.ep);
  return { n, ep, earned, paid, outranked, band: rngBand(ep), percentile: rngPercentile(ep) };
}

function rngBand(ep) {
  for (const b of RNG_BANDS) if (ep >= b.min) return b;
  return RNG_BANDS[RNG_BANDS.length - 1];
}

/** Where this EP total lands against every other possible roll.
 *  RNG_CURVE is 109 measured quantile points; linear interpolation between
 *  them is within 0.3 percentile points of the true answer everywhere.
 */
function rngPercentile(ep) {
  const c = RNG_CURVE;
  if (ep <= c[0][0]) return c[0][1];
  if (ep >= c[c.length - 1][0]) return c[c.length - 1][1];
  let lo = 0, hi = c.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (c[mid][0] <= ep) lo = mid; else hi = mid;
  }
  const [x0, y0] = c[lo], [x1, y1] = c[hi];
  if (x1 === x0) return y1;
  return y0 + ((ep - x0) * (y1 - y0)) / (x1 - x0);
}

/** One roll a day, and the same roll all day.
 *
 *  Seeded from the date plus a per-install salt: re-opening the app must not
 *  reshuffle the number, and two phones should not get the same one. Nothing
 *  here talks to a server, so the seed is all there is.
 */
function rngDailyNumber(dayStr, salt) {
  let h = 2166136261;
  const key = `rngdle|${dayStr}|${salt || ""}`;
  for (let i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }
  let a = h >>> 0;
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * (RNG_MAX + 1));
}

/** Formats 1000000 as 1,000,000 without pulling in Intl on every render. */
function rngGroup(n) {
  const s = String(n);
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 === 0) out += ",";
    out += s[i];
  }
  return out;
}

const RNGI_PRODUCT_ROWS = [
  ["skill-bay-1","skill-slot","Skill Bay I",1000000,0,0,"","a second slot on the rack, so two skills can fire on one roll."],
  ["skill-bay-2","skill-slot","Skill Bay II",4000000,0,0,"skill-bay-1","a third slot. three skills, one roll."],
  ["quickwind-1", "roll", "Quickwind I", 30000, 2200, 3000, "", "a tighter spring on the reveal. every digit still gets its moment, just sooner."],
  ["quickwind-2", "roll", "Quickwind II", 110000, 1600, 2200, "quickwind-1", "fine-tunes the mechanism. the badges still land in order."],
  ["quickwind-3", "roll", "Quickwind III", 380000, 1000, 1600, "quickwind-2", "a brisk reveal with the whole sequence intact."],
  ["quickwind-4", "roll", "Quickwind IV", 1200000, 600, 1000, "quickwind-3", "the fastest reveal the mechanism allows."],
  ["clockwork-1", "cooldown", "Clockwork I", 50000, 3000, 4000, "", "a stronger spring brings the next roll round sooner."],
  ["clockwork-2", "cooldown", "Clockwork II", 180000, 2000, 3000, "clockwork-1", "rewound harder. less standing about between numbers."],
  ["clockwork-3", "cooldown", "Clockwork III", 620000, 1000, 2000, "clockwork-2", "the wait stops being a wait."],
  ["clockwork-4", "cooldown", "Clockwork IV", 1700000, 600, 1000, "clockwork-3", "barely a pause now."],
  ["clockwork-5", "cooldown", "Clockwork V", 3800000, 300, 600, "clockwork-4", "a blink between rolls."],
  ["clockwork-6", "cooldown", "Clockwork VI", 9000000, 120, 300, "clockwork-5", "as close to continuous as the ladder goes."],
  ["flywheel", "pace", "Flywheel", 450000, 0, 0, "", "rolling without stopping builds momentum: +2% banked every 10 rolls in a row, up to +30%. breaking the run resets it."],
  ["flywheel-2", "pace", "Flywheel II", 1500000, 0, 0, "flywheel", "a heavier wheel. +3% every 8 rolls, up to +60%."],
  ["flywheel-3", "pace", "Flywheel III", 3600000, 0, 0, "flywheel-2", "+5% every 6 rolls, up to double. the reward for not putting the phone down."],
  ["glitch", "aura", "Glitchwave", 1650000, 0, 0, "", "The digits tear and re-register on every rarity change."],
  ["monolith", "aura", "Monolith", 2700000, 0, 0, "", "A single flat slab, no gradient, no glow. Just the number."],
  ["blueprint", "aura", "Blueprint", 1450000, 0, 0, "", "Draughting-paper grid behind the number, in cold cyan."],
  ["static", "aura", "Scanline", 260000, 0, 0, "", "Horizontal sweep across the rarity box, like a CRT refreshing."],
  ["scramble", "aura", "Scramble", 1800000, 0, 0, "", "Unresolved digits churn through glyphs before they settle."],
  ["hexdump", "aura", "Hex Dump", 3000000, 0, 0, "", "Faint hexadecimal spill behind the result, like a memory view."],
  ["offline-roller", "utility", "Offline Roller", 2600000, 0, 0, "", "keeps rolling while the app is shut. pays the median roll, not the jackpot one — closing the app must never beat opening it."],
  ["offline-clock-1", "offline", "Offline Clock I", 3600000, 90000, 120000, "offline-roller", "the offline mechanism ticks over faster."],
  ["offline-clock-2", "offline", "Offline Clock II", 5400000, 60000, 90000, "offline-clock-1", "faster still."],
  ["offline-clock-3", "offline", "Offline Clock III", 8500000, 36000, 60000, "offline-clock-2", "the quickest the offline clock runs."],
  ["offline-vault-1", "offline-cap", "Offline Vault I", 6000000, 216, 144, "offline-clock-1", "a bigger store, so a long absence is not wasted."],
  ["offline-vault-2", "offline-cap", "Offline Vault II", 11000000, 288, 216, "offline-vault-1", "bigger again."],
  ["offline-vault-3", "offline-cap", "Offline Vault III", 18000000, 360, 288, "offline-vault-2", "the largest store. a weekend away still fills it."],
  ["auto-roll", "utility", "Auto-Roll", 0, 0, 0, "", "included in this build: fires the next roll as soon as the cooldown clears. off by default — an idle game that plays itself is a screensaver."],
  ["persistence-core", "utility", "Persistence Core", 4800000, 0, 0, "auto-roll", "auto-roll keeps running while you are on another tab of the app."],
  ["archive-lens", "utility", "Archive Lens", 120000, 0, 0, "", "keeps a longer history of your rolls on the stats page."],

  // ---- luck (v56) ----
  // The one upgrade the user asked for by name. It buys EXTRA DRAWS, not a
  // thumb on the scale: at 60% luck, 60% of rolls are drawn twice and the
  // better of the two is kept. Every individual draw stays a flat 1-in-
  // 1,000,001, so the 293 badge counts -- and therefore every EP figure in
  // this file -- stay exactly true. Biasing the number itself would have
  // made the whole catalogue a lie.
  ["fourleaf-1", "luck", "Fourleaf I",   240000,   25, 0, "", "a quarter of your rolls are drawn twice, and you keep the better one."],
  ["fourleaf-2", "luck", "Fourleaf II",  900000,   50, 0, "fourleaf-1", "half of them now."],
  ["fourleaf-3", "luck", "Fourleaf III", 2600000,  75, 0, "fourleaf-2", "three rolls in four get a second draw."],
  ["fourleaf-4", "luck", "Fourleaf IV",  6500000, 100, 0, "fourleaf-3", "every roll is drawn twice. the better one is always the one that counts."],
  ["fourleaf-5", "luck", "Fourleaf V",  15000000, 175, 0, "fourleaf-4", "always twice, and three times on three rolls in four."],

  // ---- roll slots (v57) ----
  // A slot is a SECOND PANEL on the roll screen, permanently. Every slot draws
  // its own ordinary number and all of them are shown; only the highest-EP one
  // is the roll and only that one is paid -- the same best-of rule the armed
  // skills already use, made permanent and visible. Each individual draw stays
  // a flat 1-in-1,000,001, so the badge counts and every EP figure derived
  // from them stay true.
  //
  // Prices are measured, not felt. Expected EP per roll was swept across all
  // 1,000,001 numbers: 27,348 for one slot, 47,861 for two, 66,779 for three,
  // 84,751 for four, 102,050 for five, 118,834 for six. Each rung is priced at
  // about 59 rolls of the income it buys you, so payback is flat up the ladder
  // instead of the last rung being a wall.
  ["slot-2", "draw-slot", "Second Slot", 2800000, 2, 0, "", "the roll is drawn on two panels at once. both numbers show, the better one is kept and paid."],
  ["slot-3", "draw-slot", "Third Slot",  4000000, 3, 0, "slot-2", "a third panel. three ordinary draws, one winner."],
  ["slot-4", "draw-slot", "Fourth Slot", 5000000, 4, 0, "slot-3", "four panels across the stage. the spread is starting to show."],
  ["slot-5", "draw-slot", "Fifth Slot",  6000000, 5, 0, "slot-4", "five. at this width the losing panels are worth reading too."],
  ["slot-6", "draw-slot", "Sixth Slot",  7000000, 6, 0, "slot-5", "the widest rack the mechanism takes. six draws, one number kept."],
];

const RNGI_PET_ROWS = [
  ["pebble", "Pebble", "#a8a29e", 1.05, 125000, 40, "a small loyal rock. does very little, extremely reliably."],
  ["moth", "Lumen Moth", "#fbbf24", 1.09, 300000, 30, "drawn to bright numbers. flutters round the reveal."],
  ["kit", "Static Kit", "#fb923c", 1.13, 600000, 22, "a fox with a permanent case of bed-hair."],
  ["snail", "Lunar Snail", "#a78bfa", 1.17, 900000, 16, "crosses the whole screen during a single cooldown."],
  ["jelly", "Tide Jelly", "#38bdf8", 1.21, 1250000, 12, "drifts through the cooldown without a care."],
  ["bee", "Amber Bee", "#facc15", 1.26, 1650000, 9, "busy. audibly so."],
  ["corvid", "Ledger Corvid", "#818cf8", 1.31, 2050000, 7, "keeps a ledger of everything you have rolled. will not show you."],
  ["owl", "Archive Owl", "#f59e0b", 1.37, 2500000, 5, "has read the whole badge catalogue. mentions it."],
  ["turtle", "Patient Turtle", "#34d399", 1.43, 3100000, 4, "in no hurry. gets there anyway."],
  ["griffin", "Storm Griffin", "#60a5fa", 1.5, 3800000, 3, "arrives with weather."],
  ["unicorn", "Astral Unicorn", "#f472b6", 1.6, 5000000, 2, "improbable, which is rather the point."],
  ["serpent", "Void Serpent", "#8b5cf6", 1.7, 7000000, 1, "swallows the numbers you did not keep."],
  ["dragonet", "Ember Dragonet", "#ef4444", 1.8, 10000000, 1, "small, extremely warm, sits on the wallet."],
];

const RNGI_SKILL_ROWS = [
  ["surge", "shop", "", "Surge", "wallet", 2, 0, 0, 5, 180000, "the next roll banks double EP. the number, its badges and its scored EP are untouched."],
  ["trail", "shop", "", "Trail", "pet-luck", 4, 0, 0, 5, 160000, "a friend is four times as likely to turn up on the next roll. their luck is its own draw."],
  ["bounce", "shop", "", "Bounce", "waive", 0, 0, 0, 4, 500000, "the next roll has no cooldown after its reveal."],
  ["twice", "shop", "", "Double Vision", "best-of", 0, 2, 0, 7, 900000, "the next roll is drawn twice; you keep whichever scores more. both draws are ordinary."],
  ["bedrock", "shop", "", "Bedrock", "floor", 0, 4, 25000, 6, 1600000, "redraws until the roll clears 25,000 EP, up to four draws. keeps the best if none do."],
  ["turbo", "shop", "", "Turbo", "overdrive", 3, 0, 0, 7, 2600000, "the next roll counts triple towards the flywheel and every skill's charge."],
  ["quarry", "shop", "", "Big Game", "floor", 0, 5, 100000, 11, 6000000, "redraws until the roll clears 100,000 EP, up to five draws."],
  ["miser", "shop", "", "Miser", "wallet", 3, 0, 0, 7, 9000000, "the next roll banks triple EP."],
  ["triptych", "shop", "", "Triptych", "best-of", 0, 3, 0, 6, 12000000, "drawn three times; you keep the highest."],
  ["pebble-steady", "pet", "pebble", "Steady Step", "floor", 0, 3, 8000, 5, 0, "redraws until the roll clears 8,000 EP, up to three draws."],
  ["moth-glow", "pet", "moth", "Glow", "wallet", 1.5, 0, 0, 4, 0, "the next roll banks 50% more."],
  ["kit-spark", "pet", "kit", "Static Spark", "waive", 0, 0, 0, 5, 0, "the next roll has no cooldown after its reveal."],
  ["snail-shell", "pet", "snail", "Shell", "best-of", 0, 2, 0, 6, 0, "drawn twice; you keep the better one."],
  ["jelly-drift", "pet", "jelly", "Drift", "pet-luck", 3, 0, 0, 4, 0, "friends are likelier to turn up on the next roll."],
  ["bee-swarm", "pet", "bee", "Swarm", "wallet", 1.75, 0, 0, 5, 0, "the next roll banks more."],
  ["corvid-ledger", "pet", "corvid", "Ledger", "overdrive", 2, 0, 0, 6, 0, "the next roll counts double towards every charge."],
  ["owl-lore", "pet", "owl", "Lore", "floor", 0, 4, 20000, 7, 0, "redraws until the roll clears its bar."],
  ["turtle-long", "pet", "turtle", "Long Game", "floor", 0, 5, 15000, 6, 0, "redraws patiently, several times, for a floor."],
  ["griffin-dive", "pet", "griffin", "Dive", "best-of", 0, 3, 0, 8, 0, "drawn twice; the better one is kept."],
  ["unicorn-wish", "pet", "unicorn", "Wish", "wallet", 2.5, 0, 0, 7, 0, "the next roll banks considerably more."],
  ["serpent-maw", "pet", "serpent", "Maw", "floor", 0, 5, 60000, 8, 0, "redraws hard for a high floor."],
  ["dragonet-pyre", "pet", "dragonet", "Pyre", "floor", 0, 6, 150000, 8, 0, "redraws for the highest floor any friend offers."],
  ["reborn-drive", "rebirth", "", "Reborn Drive", "wallet", 1.5, 0, 0, 5, 0, "a rebirth's own skill: the next roll banks more."],
  ["reborn-tempo", "rebirth", "", "Reborn Tempo", "waive", 0, 0, 0, 4, 0, "a rebirth's own skill: no cooldown on the next roll."],
  ["reborn-depth", "rebirth", "", "Reborn Depth", "best-of", 0, 2, 0, 6, 0, "a rebirth's own skill: an extra draw, best kept."],
  ["reborn-vault", "rebirth", "", "Reborn Vault", "floor", 0, 4, 30000, 7, 0, "a rebirth's own skill: redraws for a floor."],
  ["reborn-omen", "rebirth", "", "Reborn Omen", "best-of", 0, 3, 0, 9, 0, "a rebirth's own skill: several draws, best kept."],
  ["reborn-paragon", "rebirth", "", "Reborn Paragon", "floor", 0, 6, 75000, 10, 0, "a rebirth's own skill: the highest floor on the ladder."],
];

// ============================================================
// RNGDLE INFINITE
//
// A port of jaime-gaming/RNGdle-Infinite's game loop onto the badge engine
// above. Credit: the original game is by jaime-gaming, itself a recreation of
// RNGdle by Cam / sparrowpatch, scored from the RNGdle Tools badge catalogue.
//
// What changed on the way in, and why:
//
//   * THE CLOCK IS 15x FASTER. The original is an idle game: a 45-second
//     reveal and a 60-second cooldown, upgradeable to 10s/2s. Inside a task
//     app nobody is going to watch a phone for 45 seconds, so the base roll
//     is 3s + 4s and the ladder ends at 0.6s + 0.12s.
//   * PRICES ARE UNTOUCHED. Their economy is balanced and audited; rescaling
//     it would be guessing. The measured consequence of the faster clock is
//     stated plainly: the whole 195,300,000 EP catalogue is about 9,000 rolls,
//     which was ~260 hours at the original pace and is ~18 here.
//   * EP IS ITS OWN WALLET. It never touches the app's coins, so no amount of
//     rolling can buy a real-world reward.
//   * DROPPED: 20 of the 26 cosmetic auras, device-link sync, the PWA shell,
//     the goals/tasks page and the changelog -- tasks.sh already has its own
//     versions of all of those, or they make no sense inside one tool.
// ============================================================

const RNGI_BASE_REVEAL_MS = 2200;
const RNGI_BASE_COOLDOWN_MS = 2600;
const RNGI_BASE_OFFLINE_MS = 120000;     // one offline roll every two minutes
const RNGI_BASE_OFFLINE_CAP = 144;       // ...up to this many while away
const RNGI_PET_DROP_CHANCE = 0.004;      // 1 in 250 rolls
const RNGI_SKILL_MAX_DRAWS = 6;
/** The widest the roll stage goes: one panel plus five bought slots. Kept
 *  separate from RNGI_SKILL_MAX_DRAWS so a permanent purchase is never eaten
 *  by the armed-skill budget. Measured cost of the full ladder: 4.35x EP per
 *  roll (27,348 -> 118,834), which is why the last rung is not cheap. */
const RNGI_MAX_SLOTS = 6;
const RNGI_SKILL_STOCK_MS = 300000;      // the skill shelf rotates every 5 min
const RNGI_SKILL_STOCK_SIZE = 3;
const RNGI_HISTORY_MAX = 40;

/** Two badges the Infinite fork adds on top of the 233. Their numbers are
 *  enumerated rather than ruled, because both sets are tiny and a literal
 *  list cannot drift from its own description. */
const RNGI_PENDULUMS = (() => {
  const out = [];
  for (let a = 1; a <= 9; a++) for (let b = 0; b <= 9; b++) if (a !== b) out.push(Number(`${a}${b}${a}${b}${a}${b}`));
  return out;
})();
const RNGI_LAST_SECONDS = Array.from({ length: 14 }, (_, i) => (i + 10) * 10000 + 5959);

const RNGI_EXTRA_BADGES = [
  {
    id: "INFINITE_PENDULUM", label: "Pendulum", emoji: "↕", tier: "a",
    ep: 25000, count: RNGI_PENDULUMS.length, family: null,
    desc: "six digits swinging between two values: ABABAB",
    set: new Set(RNGI_PENDULUMS),
  },
  {
    id: "INFINITE_LAST_SECOND", label: "Last Second", emoji: "⏳", tier: "m",
    ep: 75000, count: RNGI_LAST_SECONDS.length, family: null,
    desc: "a 24-hour time at its final second: HH5959, hours 10 to 23",
    set: new Set(RNGI_LAST_SECONDS),
  },
].map((b) => ({ ...b, odds: b.count / (RNG_MAX + 1) }));


// ---- tasks.sh original badges (v56) ---------------------------------------
//
// The official catalogue is 233 and has not grown. These 58 are ours, built
// to the same contract and held to the same standard: every `count` below was
// produced by sweeping all 1,000,001 numbers and counting real matches, and
// `rngdle.test.mjs` re-derives every one of them. A badge whose odds are a
// guess is a badge that makes the whole EP economy a guess.
//
// EP uses the official formula, floor(100 * 1,000,001 / count), so a tasks.sh
// badge and a real one of the same rarity are worth the same.
//
// None of them carry a family, so they always pay -- they are additive to the
// verified 233 rather than competing with them.

/** Number-theory helpers, built once on first use.
 *
 *  Lazily, because a 1,000,001-entry sieve at module load is a megabyte and
 *  several milliseconds spent on a tab most launches never open. */
let _rngMath = null;
function rngMath() {
  if (_rngMath) return _rngMath;
  const N = 1000001;
  const isComp = new Uint8Array(N + 1);
  for (let i = 2; i * i <= N; i++) if (!isComp[i]) for (let j = i * i; j <= N; j += i) isComp[j] = 1;
  const isPrime = (n) => n >= 2 && !isComp[n];
  const tri = new Set(); for (let k = 1; (k * (k + 1)) / 2 <= 1000000; k++) tri.add((k * (k + 1)) / 2);
  const lucas = new Set(); { let a = 2, b = 1; while (a <= 1000000) { lucas.add(a); const t = a + b; a = b; b = t; } }
  const catalan = new Set(); { let c = 1; for (let n = 0; n < 22 && c <= 1000000; n++) { catalan.add(c); c = (c * 2 * (2 * n + 1)) / (n + 2); } }
  const perfect = new Set([6, 28, 496, 8128]);
  const mersenne = new Set(); for (let k = 2; k < 21; k++) { const v = 2 ** k - 1; if (v <= 1000000) mersenne.add(v); }
  const repunit = new Set(); { let v = 1; while (v <= 1000000) { repunit.add(v); v = v * 10 + 1; } }
  const happy = (n) => { const seen = new Set(); while (n !== 1 && !seen.has(n)) { seen.add(n); n = String(n).split("").reduce((a, d) => a + d * d, 0); } return n === 1; };
  const sopfr = (n) => { let s = 0, m = n; for (let p = 2; p * p <= m; p++) while (m % p === 0) { s += p; m /= p; } if (m > 1) s += m; return s; };
  const nfactors = (n) => { let c = 0, m = n; for (let p = 2; p * p <= m; p++) while (m % p === 0) { c++; m /= p; } if (m > 1) c++; return c; };
  _rngMath = { isPrime, tri, lucas, catalan, perfect, mersenne, repunit, happy, sopfr, nfactors };
  return _rngMath;
}
const rngDigs = (s) => { const o = []; for (let i = 0; i < s.length; i++) o.push(s.charCodeAt(i) - 48); return o; };
const rngSum = (a) => a.reduce((x, y) => x + y, 0);
const rngProd = (a) => a.reduce((x, y) => x * y, 1);
const rngRev = (s) => s.split("").reverse().join("");

const RNGT_BADGE_ROWS = [
  ["T_PERFECT","Perfect Number","💎","m",25000025,4,"equals the sum of its own divisors",(n)=>rngMath().perfect.has(n)],
  ["T_REPUNIT","Repunit","1️⃣","m",16666683,6,"nothing but ones",(n)=>rngMath().repunit.has(n)],
  ["T_STAIRCASE","Counting Up","🔼","m",16666683,6,"the digits 1,2,3… in order from the start",(n,s)=>"123456789".startsWith(s)],
  ["T_COUNTDOWN","Counting Down","🔽","m",16666683,6,"the digits 9,8,7… in order from the start",(n,s)=>"987654321".startsWith(s)],
  ["T_SUMONE","Minimal","🫙","m",14285728,7,"digits add up to 1",(n,s)=>rngSum(rngDigs(s))===1],
  ["T_AUTOMORPHIC","Automorphic","🪆","m",8333341,12,"its square ends with itself",(n,s)=>String(n*n).endsWith(s)],
  ["T_CATALAN","Catalan","🧩","m",7692315,13,"a Catalan number",(n)=>rngMath().catalan.has(n)],
  ["T_MERSENNE","Mersenne","🎺","m",5555561,18,"one less than a power of two",(n)=>rngMath().mersenne.has(n)],
  ["T_ARMSTRONG","Armstrong","💪","m",4761909,21,"equals the sum of its digits each raised to the digit count",(n,s)=>n===rngDigs(s).reduce((a,d)=>a+d**s.length,0)],
  ["T_LUCAS","Lucas","🦁","m",3448279,29,"a Lucas number: 2, 1, 3, 4, 7, 11…",(n)=>rngMath().lucas.has(n)],
  ["T_REPDIGIT","Repdigit","♻️","m",2222224,45,"every digit is the same",(n,s)=>s.length>1&&new Set(s).size===1],
  ["T_TRIMORPHIC","Trimorphic","🧊","m",2000002,50,"its cube ends with itself",(n,s)=>String(n*n*n).endsWith(s)],
  ["T_BINARY","Binary Look","💻","a",1538463,65,"written with nothing but 0 and 1",(n,s)=>/^[01]+$/.test(s)],
  ["T_PALPRIME","Palindromic Prime","🔁","a",884956,113,"a prime that reads the same backwards",(n,s)=>rngMath().isPrime(n)&&s===rngRev(s)],
  ["T_SUMMAX","Maxed Out","🧨","a",476190,210,"digits add up to 50 or more",(n,s)=>rngSum(rngDigs(s))>=50],
  ["T_LEET","Leet","🕶️","a",333333,300,"contains 1337",(n,s)=>s.includes("1337")],
  ["T_SUMDIV","Digit-Sum Divides","🧮","a",323624,309,"divisible by the sum of its digits and by their product",(n,s)=>{const a=rngDigs(s),p=rngProd(a);return p>0&&n%rngSum(a)===0&&n%p===0;}],
  ["T_SUMEQLEN","Featherweight","🪶","a",284900,351,"digits add up to how many digits there are",(n,s)=>rngSum(rngDigs(s))===s.length],
  ["T_TERNARY","Ternary Look","🔢","e",136986,730,"written with nothing but 0, 1 and 2",(n,s)=>/^[012]+$/.test(s)],
  ["T_ZEROHEAVY","Mostly Void","🕳️","e",130548,766,"more than half its digits are zero",(n,s)=>s.length>=3&&[...s].filter((c)=>c==="0").length*2>s.length],
  ["T_SUM7","Lucky Sum","🍀","e",126262,792,"digits add up to 7",(n,s)=>rngSum(rngDigs(s))===7],
  ["T_CLOCK","On The Clock","⏰","e",119047,840,"four digits that read as a valid 24-hour time",(n,s)=>s.length===4&&+s.slice(0,2)<24&&+s.slice(2)<60],
  ["T_MIRRORHALF","Mirrored Halves","🪟","e",101010,990,"the second half is the first half reversed",(n,s)=>s.length%2===0&&s.length>=4&&s.slice(s.length/2)===rngRev(s.slice(0,s.length/2))],
  ["T_ASCENDPAIR","Twin Steps","👯","e",101010,990,"made of pairs of equal digits, like 112233",(n,s)=>s.length%2===0&&s.length>=4&&[...Array(s.length/2)].every((_,i)=>s[2*i]===s[2*i+1])],
  ["T_DOUBLED","Doubled","✖️","e",100100,999,"the same block of digits written twice",(n,s)=>s.length%2===0&&s.slice(0,s.length/2)===s.slice(s.length/2)],
  ["T_ROUNDK","Round Thousand","🎯","e",100000,1000,"a whole number of thousands",(n)=>n>0&&n%1000===0],
  ["T_TRIANGLE","Triangular","🔺","e",70771,1413,"a triangular number: 1, 3, 6, 10, 15…",(n)=>rngMath().tri.has(n)],
  ["T_NINEHEAVY","Nearly Nine","9️⃣","e",47483,2106,"more than half its digits are nines",(n,s)=>s.length>=3&&[...s].filter((c)=>c==="9").length*2>s.length],
  ["T_CONSEC_RUN","Long Run","🏃","e",37023,2701,"four or more identical digits in a row",(n,s)=>/(\d)\1{3,}/.test(s)],
  ["T_PI","Pi Inside","🥧","e",25006,3999,"contains 314",(n,s)=>s.includes("314")],
  ["T_E","Euler Inside","🧑‍🔬","e",25006,3999,"contains 271",(n,s)=>s.includes("271")],
  ["T_SQUAREDIGITS","Square Digits","🟦","e",24408,4097,"every digit is a perfect square: 0, 1, 4 or 9",(n,s)=>/^[0149]+$/.test(s)],
  ["T_ONEUNIQUE","Two Faces","🎭","e",23288,4294,"uses exactly two different digits, 4 digits or more",(n,s)=>s.length>=4&&new Set(s).size===2],
  ["T_NONDESC","Staircase Up","🪜","e",20020,4995,"never decreases from one digit to the next",(n,s)=>s.length>1&&rngDigs(s).every((d,i,a)=>i===0||d>=a[i-1])],
  ["T_PRIMEDIGITS","Prime Digits","🧿","r",18315,5460,"every digit is 2, 3, 5 or 7",(n,s)=>/^[2357]+$/.test(s)],
  ["T_SUM42","Answer Sum","🛸","r",16496,6062,"digits add up to 42",(n,s)=>rngSum(rngDigs(s))===42],
  ["T_NONASC","Staircase Down","🛝","r",12510,7993,"never increases from one digit to the next",(n,s)=>s.length>1&&rngDigs(s).every((d,i,a)=>i===0||d<=a[i-1])],
  ["T_TWIN","Twin Prime","👬","r",12241,8169,"prime, and so is the number two above it",(n)=>rngMath().isPrime(n)&&rngMath().isPrime(n+2)],
  ["T_SUM13","Unlucky Sum","🐈‍⬛","r",12147,8232,"digits add up to 13",(n,s)=>rngSum(rngDigs(s))===13],
  // ---- v57: three more families, every count swept over all 1,000,001 rolls ----
  // Same rule as v56: a count is never guessed. Each of these was produced by
  // running its predicate against every possible roll, and infinite.test.mjs
  // re-runs that sweep, so a rule that drifts fails the suite instead of
  // quietly making the catalogue wrong.
  ["T_ODD_ONLY","Odd Only","🕯️","u",5120,19530,"every digit is odd",(n,s)=>rngDigs(s).every((d)=>d%2===1)],
  ["T_EVEN_ONLY","Even Only","🫧","u",6400,15625,"every digit is even",(n,s)=>rngDigs(s).every((d)=>d%2===0)],
  ["T_FIB_DIGITS","Fibonacci Digits","🌀","u",2143,46657,"every digit is a fibonacci digit: 0 1 2 3 5 8",(n,s)=>rngDigs(s).every((d)=>"012358".includes(String(d)))],
  ["T_TWO_EACH","Two Each","🎴","r",10288,9720,"three different digits, each appearing exactly twice",(n,s)=>rngDistinct(s)===3 && Object.values(rngTally(s)).every((v)=>v===2)],
  ["T_THRICE","Thrice","🔱","u",724,138033,"some digit appears exactly three times",(n,s)=>Object.values(rngTally(s)).some((v)=>v===3)],
  ["T_SUM_21","Sum Of Twenty-One","🃏","u",2521,39662,"digits add up to 21",(n,s)=>rngSum(rngDigs(s))===21],
  ["T_SUM_36","Full House Sum","🎳","u",3856,25927,"digits add up to 36",(n,s)=>rngSum(rngDigs(s))===36],
  ["T_PROD_12","Dozen Product","🥚","e",408163,245,"digits multiply to 12",(n,s)=>rngDigs(s).reduce((a,b)=>a*b,1)===12],
  ["T_ZERO_HEAVY","Zero Heavy","⚫","r",12427,8047,"at least three zeros",(n,s)=>(rngTally(s)["0"]||0)>=3],
  ["T_NINE_HEAVY","Nine Heavy","9️⃣","r",78740,1270,"at least four nines",(n,s)=>(rngTally(s)["9"]||0)>=4],
  ["T_ASC_SIX","Six Stairs","🪜","a",1190477,84,"six digits, each one higher than the last",(n,s)=>s.length===6 && rngUp(rngDigs(s))],
  ["T_SANDWICH","Sandwich","🥪","u",1505,66420,"first and last digit match, the middle does not",(n,s)=>s.length>=3 && s[0]===s[s.length-1] && [...s.slice(1,-1)].every((c)=>c!==s[0])],
  ["T_TWO_PAIR_RUNS","Double Decker","🍔","u",2154,46413,"exactly two adjacent equal pairs",(n,s)=>{let r=0;for(let i=1;i<s.length;i++)if(s[i]===s[i-1]&&(i<2||s[i-2]!==s[i]))r++;return r===2;}],
  ["T_STEP_TWO","Two Step","👟","e",334448,299,"every neighbouring digit differs by exactly 2",(n,s)=>{const d=rngDigs(s);return d.length>1&&d.every((v,i,a)=>i===0||Math.abs(v-a[i-1])===2);}],
  ["T_ZERO_TWICE","Zero Pair","0️⃣","u",1423,70236,"exactly two zeros",(n,s)=>rngTally(s)["0"]===2],
  ["T_CONTAINS_420","Four Twenty","🌿","r",25006,3999,"contains 420",(n,s)=>rngHas("420")(n,s)],
  ["T_ENDS_77","Double Seven End","🎰","r",10000,10000,"ends in 77",(n,s)=>rngEnds("77")(n,s)],
  ["T_PRIME_SUM","Prime Sum","🧮","u",400,249389,"the digits add up to a prime",(n,s)=>rngPrimes(rngSum(rngDigs(s)))],
  ["T_SQUARE_SUM","Square Sum","🔲","u",1008,99154,"the digits add up to a perfect square",(n,s)=>Number.isInteger(Math.sqrt(rngSum(rngDigs(s))))],
  ["T_ROUNDC","Round Hundred","💯","r",11111,9000,"a whole number of hundreds but not of thousands",(n)=>n>0&&n%100===0&&n%1000!==0],
  ["T_SELFDIV","Self-Dividing","➗","r",11063,9039,"divisible by every one of its own digits",(n,s)=>!s.includes("0")&&rngDigs(s).every((d)=>n%d===0)],
  ["T_EMIRP","Emirp","🪞","r",8941,11184,"prime, and its reverse is a different prime",(n,s)=>rngMath().isPrime(n)&&s.length>1&&!s.endsWith("0")&&rngRev(s)!==s&&rngMath().isPrime(+rngRev(s))],
  ["T_FACEVALUE","Face Value","🃏","r",6400,15625,"every digit is 0 or greater than 5",(n,s)=>/^[06789]+$/.test(s)],
  ["T_SMITH","Smith Number","🔧","r",6353,15739,"digit sum equals the digit sum of its prime factors",(n,s)=>n>1&&!rngMath().isPrime(n)&&rngSum(rngDigs(s))===rngSum(rngDigs(String(rngMath().sopfr(n))))],
  ["T_HILL","Single Peak","⛰️","r",5885,16992,"rises to one peak then falls, no flats",(n,s)=>{const a=rngDigs(s);if(a.length<3)return false;let i=1;while(i<a.length&&a[i]>a[i-1])i++;if(i===1||i===a.length)return false;while(i<a.length&&a[i]<a[i-1])i++;return i===a.length;}],
  ["T_BOWL","Single Dip","🥣","r",4198,23817,"falls to one low point then rises, no flats",(n,s)=>{const a=rngDigs(s);if(a.length<3)return false;let i=1;while(i<a.length&&a[i]<a[i-1])i++;if(i===1||i===a.length)return false;while(i<a.length&&a[i]>a[i-1])i++;return i===a.length;}],
  ["T_NOPRIMEDIGIT","No Primes","🚫","r",2143,46657,"contains none of 2, 3, 5 or 7",(n,s)=>!/[2357]/.test(s)],
  ["T_HALVES","Balanced Halves","⚖️","u",1959,51027,"both halves of the number add up to the same thing",(n,s)=>s.length%2===0&&s.length>=4&&rngSum(rngDigs(s.slice(0,s.length/2)))===rngSum(rngDigs(s.slice(s.length/2)))],
  ["T_DIGITPROD_SQ","Square Product","🔲","u",1747,57240,"its digits multiply to a perfect square above zero",(n,s)=>{const p=rngProd(rngDigs(s));return p>0&&Number.isInteger(Math.sqrt(p));}],
  ["T_YEAR","A Year","📆","u",1677,59600,"contains a year between 1900 and 2099",(n,s)=>{for(let i=0;i+4<=s.length;i++){const v=+s.slice(i,i+4);if(v>=1900&&v<=2099)return true;}return false;}],
  ["T_PRIME","Prime","🔱","u",1273,78498,"a prime number",(n)=>rngMath().isPrime(n)],
  ["T_PRIMELEN","Prime Length","📏","u",1099,90991,"has a prime number of digits",(n,s)=>rngMath().isPrime(s.length)],
  ["T_SANDWICHEND","Matching Ends","🥪","u",1001,99900,"starts and ends with the same digit, 4 digits or more",(n,s)=>s.length>=4&&s[0]===s[s.length-1]],
  ["T_UNDULATE","Undulating","🌊","u",733,136425,"digits alternate up and down the whole way",(n,s)=>{const a=rngDigs(s);if(a.length<4)return false;for(let i=1;i<a.length;i++){if(a[i]===a[i-1])return false;if(i>1&&Math.sign(a[i]-a[i-1])===Math.sign(a[i-1]-a[i-2]))return false;}return true;}],
  ["T_HAPPY","Happy Number","🙂","u",698,143071,"square its digits over and over and you reach 1",(n)=>rngMath().happy(n)],
  ["T_ALLDIFF","All Different","🌈","u",593,168571,"no digit repeats",(n,s)=>new Set(s).size===s.length],
  ["T_SEMIPRIME","Semiprime","✌️","u",476,210035,"exactly two prime factors, counted with repeats",(n)=>n>1&&rngMath().nfactors(n)===2],
  ["T_EVENSUM","Even Weight","➖","c",200,500000,"digits add up to an even number",(n,s)=>rngSum(rngDigs(s))%2===0],
];

const RNGT_BADGES = RNGT_BADGE_ROWS.map(([id, label, emoji, tier, ep, count, desc, rule]) => ({
  id, label, emoji, tier, ep, count, desc, rule, family: null, tasksh: true,
  odds: count / 1000001,
}));

const RNGI_ALL_BADGES = [...RNG_BADGES, ...RNGI_EXTRA_BADGES, ...RNGT_BADGES];
const RNGI_BADGE_TOTAL = RNGI_ALL_BADGES.length;
const RNGI_BADGE_BY_ID = Object.fromEntries(RNGI_ALL_BADGES.map((b) => [b.id, b]));

/** Scores a number for Infinite: the verified 233-badge result plus the two
 *  fork-only badges, which have no family and so always pay. */
function rngiScore(n) {
  const base = rngScore(n);
  const s = String(n);
  const extra = RNGI_EXTRA_BADGES.filter((b) => b.set.has(n))
    .concat(RNGT_BADGES.filter((b) => b.rule(n, s)));
  if (!extra.length) return base;
  return {
    ...base,
    earned: [...base.earned, ...extra],
    paid: [...base.paid, ...extra].sort((a, b) => b.ep - a.ep),
    ep: base.ep + extra.reduce((a, b) => a + b.ep, 0),
  };
}

// ---- catalogue -------------------------------------------------------------

const RNGI_PRODUCTS = RNGI_PRODUCT_ROWS.map(([id, kind, name, price, value, from, requires, desc]) =>
  ({ id, kind, name, price, value, from, requires: requires || null, desc }));
const RNGI_PRODUCT_BY_ID = Object.fromEntries(RNGI_PRODUCTS.map((p) => [p.id, p]));

const RNGI_PETS = RNGI_PET_ROWS.map(([id, name, accent, multiplier, price, dropWeight, desc]) =>
  ({ id, name, accent, multiplier, price, dropWeight, desc }));
const RNGI_PET_BY_ID = Object.fromEntries(RNGI_PETS.map((p) => [p.id, p]));

const RNGI_SKILLS = RNGI_SKILL_ROWS.map(([id, source, petId, name, kind, value, attempts, floor, charges, price, desc]) =>
  ({ id, source, petId: petId || null, name, kind, value, attempts, floor, charges, price, desc }));
const RNGI_SKILL_BY_ID = Object.fromEntries(RNGI_SKILLS.map((s) => [s.id, s]));

const RNGI_SHELVES = [
  { id: "pace", label: "pace", blurb: "shorter reveals, shorter cooldowns", kinds: ["roll", "cooldown", "pace"] },
  { id: "skills", label: "skills", blurb: "charged effects, and the rack that fires them", kinds: ["skill", "skill-slot"] },
  { id: "pets", label: "friends", blurb: "wallet multipliers, one worn at a time", kinds: ["companion"] },
  { id: "offline", label: "offline", blurb: "earn while the app is shut", kinds: ["offline", "offline-cap", "offline-roller"] },
  { id: "luck", label: "luck", blurb: "extra draws, never a thumb on the scale", kinds: ["luck"] },
  { id: "slots", label: "slots", blurb: "more panels on every roll, best one kept", kinds: ["draw-slot"] },
  { id: "tools", label: "tools", blurb: "automation and the archive", kinds: ["utility"] },
  { id: "auras", label: "skins", blurb: "cosmetic only, never odds", kinds: ["aura"] },
];

// ---- derived settings ------------------------------------------------------

/** Timing upgrades are "lowest wins", so an out-of-order save still resolves. */
function rngiRollSettings(owned = []) {
  let revealMS = RNGI_BASE_REVEAL_MS, cooldownMS = RNGI_BASE_COOLDOWN_MS;
  for (const id of owned) {
    const p = RNGI_PRODUCT_BY_ID[id];
    if (!p) continue;
    if (p.kind === "roll") revealMS = Math.min(revealMS, p.value);
    if (p.kind === "cooldown") cooldownMS = Math.min(cooldownMS, p.value);
  }
  return { revealMS, cooldownMS };
}

/** How many panels a roll is drawn on: one, plus one per slot owned.
 *
 *  A slot is a permanent best-of draw, so this is the floor the armed skills
 *  and luck then compete against. Capped by RNGI_MAX_SLOTS because the reveal
 *  has to stay readable on a 390px phone -- six panels is already two rows.
 */
function rngiSlotCount(owned = []) {
  let n = 1;
  for (const id of owned || []) {
    const p = RNGI_PRODUCT_BY_ID[id];
    if (p && p.kind === "draw-slot") n = Math.max(n, p.value || 1);
  }
  return Math.max(1, Math.min(RNGI_MAX_SLOTS, n));
}

/** Permanent luck, as a percentage of an extra draw.
 *
 *  "Highest owned wins" rather than additive, so buying the ladder out of
 *  order (or a save that lists them oddly) can never read as 250%. */
function rngiLuck(owned = []) {  let pct = 0;
  for (const id of owned || []) {
    const p = RNGI_PRODUCT_BY_ID[id];
    if (p && p.kind === "luck") pct = Math.max(pct, p.value || 0);
  }
  return pct;
}

/** How many EXTRA draws this press gets. 175% is one guaranteed extra plus a
 *  75% shot at a second -- the fractional part is a real coin flip, not a
 *  rounding. */
function rngiLuckDraws(pct, rand) {
  const whole = Math.floor(pct / 100);
  const frac = (pct % 100) / 100;
  return whole + (frac > 0 && rngiUnit(rand) < frac ? 1 : 0);
}

function rngiOfflineSettings(owned = []) {
  let intervalMS = RNGI_BASE_OFFLINE_MS, cap = RNGI_BASE_OFFLINE_CAP;
  for (const id of owned) {
    const p = RNGI_PRODUCT_BY_ID[id];
    if (!p) continue;
    if (p.kind === "offline") intervalMS = Math.min(intervalMS, p.value);
    if (p.kind === "offline-cap") cap = Math.max(cap, p.value);
  }
  return { intervalMS, cap };
}

/** Flywheel: every N rolls in a row without stopping, the next one banks more.
 *  Three tiers, each strictly better than the last. */
function rngiFlywheel(owned = [], streak = 0) {
  const tier = owned.includes("flywheel-3") ? 3 : owned.includes("flywheel-2") ? 2 : owned.includes("flywheel") ? 1 : 0;
  if (!tier) return { tier: 0, step: 0, bonus: 1, cap: 1, next: 0 };
  const step = [0, 10, 8, 6][tier];
  const per = [0, 0.02, 0.03, 0.05][tier];
  const cap = [1, 1.3, 1.6, 2][tier];
  const steps = Math.floor(Math.max(0, streak) / step);
  return { tier, step, bonus: Math.min(cap, 1 + steps * per), cap, next: step - (Math.max(0, streak) % step) };
}

/** Everything that multiplies BANKED EP -- never the scored EP of a number,
 *  never the draw. Two players rolling 142,857 always score the same; only
 *  what lands in the wallet differs. That boundary is the whole reason the
 *  rank and percentile figures stay comparable. */
function rngiWalletMult(state) {
  const pet = state.wearing && RNGI_PET_BY_ID[state.wearing] ? RNGI_PET_BY_ID[state.wearing].multiplier : 1;
  const rebirth = 1 + 0.02 * Math.max(0, state.rebirths || 0);
  const prestige = 1 + 0.1 * Math.max(0, state.prestiges || 0);
  const rollback = 1 + 0.25 * Math.max(0, state.rollbacks || 0);
  const surplus = 1 + Math.max(0, state.surplusPct || 0) / 100;
  const fly = rngiFlywheel(state.owned, state.streak).bonus;
  return { pet, rebirth, prestige, rollback, surplus, flywheel: fly,
           total: pet * rebirth * prestige * rollback * surplus * fly };
}

// ---- the shop --------------------------------------------------------------

function rngiCatalogueItem(id) {
  if (RNGI_PRODUCT_BY_ID[id]) return { ...RNGI_PRODUCT_BY_ID[id] };
  const pet = RNGI_PET_BY_ID[id];
  if (pet) return { id: pet.id, kind: "companion", name: pet.name, price: pet.price, desc: pet.desc, requires: null };
  const skill = RNGI_SKILL_BY_ID[id];
  if (skill && skill.price) return { id: skill.id, kind: "skill", name: skill.name, price: skill.price, desc: skill.desc, requires: null };
  return null;
}

function rngiOwns(state, id) {
  return (state.owned || []).includes(id) ||
         (state.pets || []).includes(id) ||
         (state.skills || []).includes(id);
}

function rngiUnlocked(state, id) {
  const item = rngiCatalogueItem(id);
  if (!item) return false;
  return !item.requires || (state.owned || []).includes(item.requires);
}

/** The skill shelf is a stall, not a catalogue: three shop skills on sale at
 *  once, rotating every five minutes. Derived from the clock on every read so
 *  two tabs and a reload always agree, and nothing has to be stored. */
function rngiSkillStockWindow(now) {
  return Math.floor(now / RNGI_SKILL_STOCK_MS);
}

function rngiSkillStock(windowIndex, owned = [], size = RNGI_SKILL_STOCK_SIZE) {
  const pool = RNGI_SKILLS.filter((s) => s.source === "shop" && s.price > 0 && !owned.includes(s.id));
  if (pool.length <= size) return pool.map((s) => s.id);
  const out = [];
  // a cheap deterministic shuffle keyed on the window, so the stall looks
  // random but every device computes the same three
  let seed = (windowIndex * 2654435761) >>> 0;
  const taken = new Set();
  while (out.length < size) {
    seed = (Math.imul(seed ^ (seed >>> 15), 2246822507) + 374761393) >>> 0;
    const i = seed % pool.length;
    if (taken.has(i)) continue;
    taken.add(i);
    out.push(pool[i].id);
  }
  return out;
}

/** A pet's signature skill unlocks by owning the pet, not by buying it. */
function rngiAvailableSkills(state, now) {
  const stock = rngiSkillStock(rngiSkillStockWindow(now), state.skills || []);
  const fromPets = RNGI_SKILLS.filter((s) => s.source === "pet" && (state.pets || []).includes(s.petId)).map((s) => s.id);
  const fromRebirth = (state.rebirths || 0) > 0
    ? RNGI_SKILLS.filter((s) => s.id.startsWith("reborn-")).map((s) => s.id) : [];
  return [...new Set([...stock, ...fromPets, ...fromRebirth])];
}

function rngiBuy(state, id, now = Date.now()) {
  const item = rngiCatalogueItem(id);
  if (!item) return state;
  if (rngiOwns(state, id)) return state;
  if (!rngiUnlocked(state, id)) return state;
  if (item.kind === "skill" && !rngiAvailableSkills(state, now).includes(id)) return state;
  if ((state.ep || 0) < item.price) return state;

  const next = { ...state, ep: state.ep - item.price, spent: (state.spent || 0) + item.price };
  if (item.kind === "companion") {
    next.pets = [...(state.pets || []), id];
    if (!state.wearing) next.wearing = id;
  } else if (item.kind === "skill") {
    next.skills = [...(state.skills || []), id];
  } else {
    next.owned = [...(state.owned || []), id];
    if (item.kind === "aura") next.aura = id;
  }
  return next;
}

// ---- rolling ---------------------------------------------------------------

/** Uniform over 0..1,000,000 with no modulo bias. Falls back to Math.random
 *  only where crypto is absent, which in practice is never on his phone. */
function rngiDraw(rand) {
  if (rand) return Math.floor(rand() * (RNG_MAX + 1));
  const c = typeof crypto !== "undefined" && crypto.getRandomValues ? crypto : null;
  if (!c) return Math.floor(Math.random() * (RNG_MAX + 1));
  const span = RNG_MAX + 1;
  const limit = Math.floor(0x100000000 / span) * span;
  const word = new Uint32Array(1);
  do { c.getRandomValues(word); } while (word[0] >= limit);
  return word[0] % span;
}

function rngiUnit(rand) {
  if (rand) return rand();
  const c = typeof crypto !== "undefined" && crypto.getRandomValues ? crypto : null;
  if (!c) return Math.random();
  const word = new Uint32Array(1);
  c.getRandomValues(word);
  return word[0] / 0x100000000;
}

/** Turns the armed skills into a draw plan, then runs it.
 *
 *  One rule covers every draw-modifying skill: take this many ordinary,
 *  independent draws and keep the best. A floor skill stops early the moment
 *  a draw clears its bar -- the unspent draws are simply not taken. Every
 *  number kept is paid for; the best one is the roll you see.
 */
function rngiPlanDraws(armed, luckPct = 0, rand = null) {
  const picks = [];
  for (const id of armed) {
    const s = RNGI_SKILL_BY_ID[id];
    if (!s) continue;
    if (s.kind === "best-of") picks.push({ id, attempts: s.attempts || 2, floor: 0 });
    else if (s.kind === "floor") picks.push({ id, attempts: s.attempts || 3, floor: s.floor || 0 });
  }
  // Luck rides along as one more best-of pick. rngiRunDraws already compares
  // every pick against the roll's own ordinary draw and keeps the highest, so
  // luck composes with an armed Double Vision instead of fighting it.
  const extra = rngiLuckDraws(luckPct, rand);
  if (extra > 0) picks.push({ id: "luck", attempts: extra, floor: 0 });
  return picks;
}

function rngiRunDraws(picks, rand, slotCount = 1) {
  const draws = [];
  const all = [];
  const slots = [];
  let best = null, winner = null;
  for (const pick of picks) {
    const budget = Math.min(pick.attempts, RNGI_SKILL_MAX_DRAWS - draws.length);
    let bestHere = null;
    for (let a = 0; a < budget; a++) {
      const n = rngiDraw(rand);
      draws.push(n);
      const scored = rngiScore(n);
      all.push({ ...scored, from: pick.id });
      if (!bestHere || scored.ep > bestHere.ep) bestHere = scored;
      if (pick.floor > 0 && scored.ep >= pick.floor) break;
    }
    if (!bestHere) continue;
    if (!best || bestHere.ep > best.ep) { best = bestHere; winner = pick.id; }
  }
  // The slots draw last and are the only draws the user sees. Each one is an
  // ordinary, independent draw; the highest-EP of them is the roll and the
  // only one paid for. Strictly greater, so a tie keeps the skill's number --
  // the same rule the single plain draw used before slots existed.
  const panels = Math.max(1, Math.min(RNGI_MAX_SLOTS, slotCount || 1));
  for (let s = 0; s < panels; s++) {
    const n = rngiDraw(rand);
    draws.push(n);
    const scored = rngiScore(n);
    slots.push(scored);
    all.push({ ...scored, from: "slot" });
    if (!best || scored.ep > best.ep) { best = scored; winner = null; }
  }
  return { draws, result: best, winner, slots, all };
}

/** Which armed skills do what to the banked total, and to the cooldown. */
function rngiSkillEffects(armed) {
  let wallet = 1, overdrive = 1, petLuck = 1, waive = false;
  for (const id of armed) {
    const s = RNGI_SKILL_BY_ID[id];
    if (!s) continue;
    if (s.kind === "wallet") wallet *= s.value || 1;
    if (s.kind === "overdrive") overdrive = Math.max(overdrive, s.value || 1);
    if (s.kind === "pet-luck") petLuck = Math.max(petLuck, s.value || 1);
    if (s.kind === "waive") waive = true;
  }
  return { wallet, overdrive, petLuck, waive };
}

/** A companion turning up is its own sample. It never consumes, biases or
 *  correlates with the draw that produced the number. */
function rngiPetDrop(state, luck, rand) {
  const missing = RNGI_PETS.filter((p) => !(state.pets || []).includes(p.id));
  if (!missing.length) return null;
  if (rngiUnit(rand) >= Math.min(1, RNGI_PET_DROP_CHANCE * luck)) return null;
  const total = missing.reduce((s, p) => s + p.dropWeight, 0);
  let cursor = rngiUnit(rand) * total;
  for (const pet of missing) {
    cursor -= pet.dropWeight;
    if (cursor <= 0) return pet.id;
  }
  return missing[missing.length - 1].id;
}

/** Resolves one press of GENERATE into everything that press changes.
 *  Pure: takes the state and a randomness source, returns the next state and
 *  an outcome for the UI to animate. Nothing here reads the clock or the DOM.
 */
function rngiRoll(state, now = Date.now(), rand = null) {
  const armed = (state.armed || []).filter((id) => RNGI_SKILL_BY_ID[id]);
  const fx = rngiSkillEffects(armed);
  const luckPct = rngiLuck(state.owned);
  const slots = rngiSlotCount(state.owned);
  const run = rngiRunDraws(rngiPlanDraws(armed, luckPct, rand), rand, slots);
  const { draws, result, winner } = run;

  const mult = rngiWalletMult(state);
  const banked = Math.round(result.ep * mult.total * fx.wallet);
  const { revealMS, cooldownMS } = rngiRollSettings(state.owned);
  const drop = rngiPetDrop(state, fx.petLuck, rand);

  const seen = { ...(state.seen || {}) };
  const fresh = [];
  for (const b of result.earned) {
    if (!seen[b.id]) fresh.push(b.id);
    seen[b.id] = (seen[b.id] || 0) + 1;
  }

  const streak = (state.streak || 0) + fx.overdrive;
  const entry = { n: result.n, ep: result.ep, banked, at: now, band: result.band.key };
  const next = {
    ...state,
    ep: (state.ep || 0) + banked,
    earned: (state.earned || 0) + banked,
    lifetime: (state.lifetime || 0) + banked,
    rolls: (state.rolls || 0) + 1,
    totalRolls: (state.totalRolls || 0) + 1,
    draws: (state.draws || 0) + draws.length,
    streak,
    seen,
    armed: [],
    charges: rngiSpendCharges(state.charges, armed),
    best: !state.best || result.ep > state.best.ep ? { n: result.n, ep: result.ep } : state.best,
    history: [...(state.history || []), entry].slice(-RNGI_HISTORY_MAX),
    pets: drop ? [...(state.pets || []), drop] : state.pets,
    wearing: state.wearing || drop || null,
    revealUntil: now + revealMS,
    cooldownUntil: now + revealMS + (fx.waive ? 0 : cooldownMS),
    lastRollAt: now,
  };
  // The slot panels and the luck race are presentation only: they describe
  // draws that already happened and were already scored. Nothing downstream
  // may read `slots` or `race` to decide a number, a badge, an EP or a band.
  const panels = run.slots;
  const race = run.all.filter((d) => d.from !== "slot" && d.from !== "luck")
    .concat(run.all.filter((d) => d.from === "luck"));
  return {
    state: next,
    outcome: {
      result, banked, mult, fx, draws, winner, drop, fresh, revealMS,
      cooldownMS: fx.waive ? 0 : cooldownMS,
      panels,
      race,
      keptIndex: panels.findIndex((p) => p.n === result.n && p.ep === result.ep),
    },
  };
}

/** A skill is consumed by firing. Charges are per skill and refill by rolling
 *  -- see rngiChargeTick. */
function rngiSpendCharges(charges, armed) {
  const next = { ...(charges || {}) };
  for (const id of armed) next[id] = 0;
  return next;
}

/** Every roll charges every owned skill by one. A skill is ready when its
 *  charge reaches the number on its card. */
function rngiChargeTick(state, by = 1) {
  const charges = { ...(state.charges || {}) };
  for (const id of state.skills || []) {
    const s = RNGI_SKILL_BY_ID[id];
    if (!s) continue;
    charges[id] = Math.min(s.charges, (charges[id] || 0) + by);
  }
  for (const s of RNGI_SKILLS) {
    if (s.source !== "pet" || !(state.pets || []).includes(s.petId)) continue;
    charges[s.id] = Math.min(s.charges, (charges[s.id] || 0) + by);
  }
  return charges;
}

function rngiSkillReady(state, id) {
  const s = RNGI_SKILL_BY_ID[id];
  if (!s) return false;
  return ((state.charges || {})[id] || 0) >= s.charges;
}

function rngiOwnedSkills(state) {
  const fromShop = (state.skills || []).filter((id) => RNGI_SKILL_BY_ID[id]);
  const fromPets = RNGI_SKILLS.filter((s) => s.source === "pet" && (state.pets || []).includes(s.petId)).map((s) => s.id);
  return [...new Set([...fromShop, ...fromPets])];
}

function rngiRackSize(state) {
  // one bay by default, two more buyable
  return 1 + ((state.owned || []).includes("skill-bay-1") ? 1 : 0) + ((state.owned || []).includes("skill-bay-2") ? 1 : 0);
}

// ---- offline ---------------------------------------------------------------

/** EP that accrued while the app was shut.
 *
 *  Needs Offline Roller. Pays the MEDIAN roll rather than the mean: the mean
 *  is inflated by jackpots nobody actually hit, and paying it would make
 *  closing the app more profitable than opening it. Capped, and the cap is
 *  what the Vault upgrades raise.
 */
function rngiOfflineGains(state, now = Date.now()) {
  if (!(state.owned || []).includes("offline-roller")) return null;
  const since = state.lastSeen || 0;
  if (!since || now <= since) return null;
  const { intervalMS, cap } = rngiOfflineSettings(state.owned);
  const rolls = Math.min(cap, Math.floor((now - since) / intervalMS));
  if (rolls < 1) return null;
  const mult = rngiWalletMult({ ...state, streak: 0 });
  const ep = Math.round(rolls * RNGI_MEDIAN_EP * mult.total);
  return { rolls, ep, cap, capped: rolls >= cap, awayMS: now - since };
}

const RNGI_MEDIAN_EP = 5801;   // the exact median of the full distribution

function rngiClaimOffline(state, gains, now = Date.now()) {
  if (!gains) return { ...state, lastSeen: now };
  return {
    ...state,
    ep: (state.ep || 0) + gains.ep,
    earned: (state.earned || 0) + gains.ep,
    lifetime: (state.lifetime || 0) + gains.ep,
    totalRolls: (state.totalRolls || 0) + gains.rolls,
    offlineRolls: (state.offlineRolls || 0) + gains.rolls,
    lastSeen: now,
  };
}

// ---- rebirth, prestige, rollback -------------------------------------------

/** The reset ladder.
 *
 *  Badge fractions are the original's. The EP gates are the original's x4,
 *  and that multiplier is the only balance change in the port. Reason, with
 *  the measurement behind it: the clock here runs 15x faster, so the original
 *  250,000 EP first rung works out at about 12 rolls -- 84 seconds -- which
 *  means you would be offered a rebirth before you had bought anything. x4
 *  puts the first rung near six minutes and the third prestige near eleven
 *  hours, which is the shape the original has.
 *
 *  The badge gates are deliberately NOT scaled: they are clock-independent,
 *  and they are what makes the end of the ladder long. Rollback needs 177 of
 *  235 badges, which measures out at ~63,000 rolls however fast they are. */
const RNGI_GATE_SCALE = 4;
const RNGI_REBIRTH_STEPS = [
  { badges: 0.2, ep: 250000 * RNGI_GATE_SCALE },
  { badges: 0.25, ep: 600000 * RNGI_GATE_SCALE },
  { badges: 0.3, ep: 1500000 * RNGI_GATE_SCALE },
  { badges: 0.35, ep: 3500000 * RNGI_GATE_SCALE },
  { badges: 0.4, ep: 7500000 * RNGI_GATE_SCALE },
  { badges: 0.45, ep: 15000000 * RNGI_GATE_SCALE },
];
const RNGI_PRESTIGE_STEP = { badges: 0.5, ep: 30000000 * RNGI_GATE_SCALE };
const RNGI_ROLLBACK_STEP = { badges: 0.75, ep: 60000000 * RNGI_GATE_SCALE };
const RNGI_PRESTIGE_LIMIT = 3;
const RNGI_REBIRTH_VISIBLE_AT = Math.ceil(RNGI_BADGE_TOTAL * 0.15);

function rngiDiscovered(state) {
  return Object.keys(state.seen || {}).length;
}

/** What the next reset asks for, and whether it is reachable yet.
 *  Returns null once the whole ladder is finished. */
function rngiResetGate(state) {
  const done = state.rebirths || 0;
  const prestiges = state.prestiges || 0;
  const badges = rngiDiscovered(state);
  const earned = state.earned || 0;

  let kind, step;
  if (done < RNGI_REBIRTH_STEPS.length) { kind = "rebirth"; step = RNGI_REBIRTH_STEPS[done]; }
  else if (prestiges < RNGI_PRESTIGE_LIMIT) { kind = "prestige"; step = RNGI_PRESTIGE_STEP; }
  else { kind = "rollback"; step = RNGI_ROLLBACK_STEP; }

  const needBadges = Math.ceil(RNGI_BADGE_TOTAL * step.badges);
  return {
    kind, needBadges, needEp: step.ep, badges, earned,
    ready: badges >= needBadges && earned >= step.ep,
    visible: badges >= RNGI_REBIRTH_VISIBLE_AT,
    bonus: kind === "rebirth" ? 2 : kind === "prestige" ? 10 : 25,
  };
}

/** Overshoot pays. A quarter of the EP earned above the gate carries into the
 *  next cycle, and every full 5,000,000 of surplus adds a permanent +1% to
 *  banked EP, capped at +5% per reset. Without this, every roll taken after
 *  the gate was met would be dead weight. */
function rngiSurplus(earned, gate) {
  const surplus = Math.max(0, (earned || 0) - Math.max(0, gate || 0));
  if (!surplus) return { surplus: 0, starter: 0, bankedPct: 0 };
  return {
    surplus,
    starter: Math.floor(surplus * 0.25),
    bankedPct: Math.min(5, Math.floor(surplus / (5000000 * RNGI_GATE_SCALE))),
  };
}

/** Resets the cycle. The COLLECTION, the companions and every permanent
 *  multiplier survive -- a rebirth restarts the run, not the account. */
function rngiReset(state, now = Date.now()) {
  const gate = rngiResetGate(state);
  if (!gate || !gate.ready) return state;
  const { starter, bankedPct } = rngiSurplus(state.earned, gate.needEp);

  const rebirths = gate.kind === "rebirth" ? (state.rebirths || 0) + 1 : (state.rebirths || 0);
  const prestiges = gate.kind === "prestige" ? (state.prestiges || 0) + 1 : (state.prestiges || 0);
  const rollbacks = gate.kind === "rollback" ? (state.rollbacks || 0) + 1 : (state.rollbacks || 0);
  const base = 250000 * RNGI_GATE_SCALE * rebirths + 1000000 * RNGI_GATE_SCALE * prestiges;

  return {
    ...state,
    ep: base + starter,
    earned: 0,
    rolls: 0,
    streak: 0,
    owned: [],                       // the shop is re-bought every cycle
    armed: [],
    charges: {},
    skills: gate.kind === "rebirth" ? state.skills : [],
    best: null,
    history: [],
    aura: null,
    rebirths, prestiges, rollbacks,
    surplusPct: (state.surplusPct || 0) + bankedPct,
    cycles: [...(state.cycles || []), { kind: gate.kind, at: now, earned: state.earned || 0, rolls: state.rolls || 0 }].slice(-20),
    revealUntil: 0,
    cooldownUntil: 0,
  };
}

// ---- formatting ------------------------------------------------------------

/** 1,234,567 EP is unreadable at 9px on a phone; 1.23M is not. Exact below
 *  10,000 because that is where the difference still means something. */
function rngiEP(n) {
  const v = Math.round(n || 0);
  if (v < 10000) return rngGroup(v);
  if (v < 1000000) return `${(v / 1000).toFixed(v < 100000 ? 1 : 0)}K`;
  if (v < 1000000000) return `${(v / 1000000).toFixed(v < 10000000 ? 2 : 1)}M`;
  return `${(v / 1000000000).toFixed(2)}B`;
}

function rngiDuration(ms) {
  const s = Math.max(0, Math.round(ms / 100) / 10);
  return s >= 10 ? `${Math.round(s)}s` : `${s}s`;
}

// ---- the reveal choreography (v49) -----------------------------------------
//
// Ported from RNGdle Infinite's roll-timeline.js, which in turn implements the
// observable timing spec from the rngdle-ep-calculator README. The shape is
// theirs; only the total duration differs, because this build's clock runs
// 15x faster.
//
// The reference choreography is: digits land one at a time and ACCELERATING
// (the gap between them grows as the square of how far through you are, so
// the last digits feel like they are being dragged out), then the number
// collapses, then badges arrive in groups, then the EP total, then the
// rarity band slams in, then the stats. Every stage is then scaled to fit
// whatever reveal length the player has bought.
//
// Pure and exported so the pacing can be asserted instead of eyeballed.

const RNGI_SCRAMBLE_MS = 100;
const RNGI_SETTLE_MS = 400;
const RNGI_PULSE_MS = 700;

function rngiReferenceTimeline(digitCount, badgeGroupCount) {
  const slots = Math.max(6, digitCount);
  const digitTimes = [2000];
  for (let i = 1; i < slots; i++) {
    digitTimes.push(digitTimes[i - 1] + 1000 + 1000 * Math.pow((i - 1) / (slots - 1), 2));
  }
  const collapse = digitTimes[digitTimes.length - 1];
  let time = collapse + 1000;
  const badgeTimes = [];
  const groups = Math.max(1, badgeGroupCount);
  for (let i = 0; i < groups; i++) {
    badgeTimes.push(time);
    if (i < groups - 1) time += 500 + 1000 * Math.pow(i / (groups - 1), 1.5);
  }
  const summary = time + 1500;
  const rarity = summary + 1000;
  const stats = rarity + 250;
  const end = stats + 1000;
  return { slots, digitTimes, collapse, badgeTimes, summary, rarity, stats, end };
}

/** The reference choreography, squeezed into the duration actually bought. */
function rngiTimeline(digitCount, badgeGroupCount, duration) {
  const total = Number.isFinite(duration) && duration > 0 ? duration : RNGI_BASE_REVEAL_MS;
  const ref = rngiReferenceTimeline(digitCount, badgeGroupCount);
  const scale = total / ref.end;
  const out = {};
  for (const [k, v] of Object.entries(ref)) {
    out[k] = k === "slots" ? v : Array.isArray(v) ? v.map((t) => t * scale) : v * scale;
  }
  return {
    ...out,
    end: total,
    scale,
    settleMS: RNGI_SETTLE_MS * scale,
    pulseMS: RNGI_PULSE_MS * scale,
    scrambleMS: Math.max(40, RNGI_SCRAMBLE_MS * scale),
  };
}

/** The only moments the reveal needs React to wake up for. Digit scrambling
 *  runs on its own interval; a 40Hz re-render of the whole tool for four
 *  seconds is how an animation becomes a battery complaint. */
function rngiCueTimes(t) {
  const cues = [
    ...t.digitTimes,
    ...t.digitTimes.map((x) => x + t.settleMS),
    t.collapse + t.pulseMS,
    ...t.badgeTimes,
    t.summary, t.rarity, t.rarity + t.pulseMS, t.stats, t.end,
  ];
  return [...new Set(cues.map((x) => Math.round(x)))].filter((x) => x >= 0).sort((a, b) => a - b);
}

/** Which stage the reveal is in at `elapsed`. One function, so the UI and the
 *  tests agree about what "the badges are showing" means. */
function rngiRevealState(t, elapsed) {
  const landed = t.digitTimes.filter((x) => elapsed >= x).length;
  return {
    landed,
    spinning: landed < t.slots,
    badgeGroups: t.badgeTimes.filter((x) => elapsed >= x).length,
    showSummary: elapsed >= t.summary,
    showRarity: elapsed >= t.rarity,
    showStats: elapsed >= t.stats,
    done: elapsed >= t.end,
    collapsing: elapsed >= t.collapse && elapsed < t.collapse + t.pulseMS,
    popping: elapsed >= t.rarity && elapsed < t.rarity + t.pulseMS,
  };
}


const STORAGE_KEY_RNGI = "tasksh.rngdle.v2";

const RNGI_BLANK = {
  ep: 0, earned: 0, lifetime: 0, spent: 0,
  rolls: 0, totalRolls: 0, offlineRolls: 0, draws: 0, streak: 0,
  owned: [], pets: [], wearing: null, skills: [], armed: [], charges: {},
  seen: {}, best: null, history: [], cycles: [],
  rebirths: 0, prestiges: 0, rollbacks: 0, surplusPct: 0,
  aura: null, autoRoll: false,
  revealUntil: 0, cooldownUntil: 0, lastRollAt: 0, lastSeen: 0,
};

function loadRngi() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY_RNGI) || "null");
    if (!raw || typeof raw !== "object") return { ...RNGI_BLANK };
    const num = (v, d = 0) => (Number.isFinite(v) ? v : d);
    const list = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === "string") : []);
    return {
      ...RNGI_BLANK,
      ...raw,
      ep: Math.max(0, num(raw.ep)),
      earned: Math.max(0, num(raw.earned)),
      lifetime: Math.max(0, num(raw.lifetime)),
      rolls: Math.max(0, num(raw.rolls)),
      totalRolls: Math.max(0, num(raw.totalRolls)),
      streak: Math.max(0, num(raw.streak)),
      owned: list(raw.owned).filter((id) => RNGI_PRODUCT_BY_ID[id]),
      pets: list(raw.pets).filter((id) => RNGI_PET_BY_ID[id]),
      skills: list(raw.skills).filter((id) => RNGI_SKILL_BY_ID[id]),
      armed: list(raw.armed).filter((id) => RNGI_SKILL_BY_ID[id]),
      seen: raw.seen && typeof raw.seen === "object" ? raw.seen : {},
      history: Array.isArray(raw.history) ? raw.history.slice(-RNGI_HISTORY_MAX) : [],
      wearing: RNGI_PET_BY_ID[raw.wearing] ? raw.wearing : null,
      aura: RNGI_PRODUCT_BY_ID[raw.aura] ? raw.aura : null,
    };
  } catch {
    return { ...RNGI_BLANK };
  }
}

function saveRngi(state) {
  try { localStorage.setItem(STORAGE_KEY_RNGI, JSON.stringify(state)); } catch {}
}

/** A ticking "now" that only runs while something is actually counting down.
 *  A permanent 100ms interval behind an idle screen is the kind of thing that
 *  shows up as battery drain and never as a bug report. */
function useRngiTick(active, ms = 80) {
  const [, force] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => force((n) => n + 1), ms);
    return () => clearInterval(t);
  }, [active, ms]);
  return Date.now();
}

// ---- small pieces ----------------------------------------------------------

function RngiBar({ frac, className = "" }) {
  return (
    <div className={`rngi-bar ${className}`}>
      <span style={{ width: `${Math.max(0, Math.min(1, frac)) * 100}%` }} />
    </div>
  );
}

/** The box before you have rolled anything.
 *
 *  It used to be a small infinity glyph and two lines of prose in a large
 *  empty rectangle — the first thing you see on opening the tool, and
 *  completely dead. Now it is the machine, idling: the same seven slots,
 *  churning, waiting to be stopped. Costs one interval and stops itself when
 *  the tab is hidden or the user has asked for less motion.
 */
function RngiIdleDigits({ aura }) {
  const reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const glyphs = aura === "scramble" ? RNGI_SCRAMBLE_WILD : RNGI_SCRAMBLE_GLYPHS;
  const [row, setRow] = useState(() => Array(7).fill("0"));
  useEffect(() => {
    if (reduced) return;
    let alive = true;
    const spin = () => setRow(Array.from({ length: 7 }, () => glyphs[Math.floor(Math.random() * glyphs.length)]));
    const t = setInterval(() => { if (!document.hidden && alive) spin(); }, 110);
    spin();
    return () => { alive = false; clearInterval(t); };
  }, [glyphs, reduced]);
  return (
    <div className="rngi-idle">
      <div className="rngi-digits idling" aria-hidden="true">
        {row.map((c, i) => <span key={i} className="rngi-digit scrambling">{c}</span>)}
      </div>
      <div className="rngi-idle-msg">0 to 1,000,000 · no limit, no seed, no picking</div>
    </div>
  );
}

/** A clock that only wakes React at the moments something changes.
 *
 *  The reveal has about 23 of them across its whole length. Re-rendering the
 *  tool at 40Hz for four seconds instead is how an animation turns into a
 *  battery complaint — and on a phone it is also how it starts dropping
 *  frames. Digit scrambling runs on its own interval inside the digit row.
 */
function useRevealClock(timeline, startedAt, active) {
  const [elapsed, setElapsed] = useState(() => (startedAt ? Date.now() - startedAt : 0));
  useEffect(() => {
    if (!active || !timeline || !startedAt) return;
    const cues = rngiCueTimes(timeline);
    const timers = cues.map((at) => {
      const wait = startedAt + at - Date.now();
      if (wait < -2000) return null;
      return setTimeout(() => setElapsed(Date.now() - startedAt), Math.max(0, wait));
    }).filter(Boolean);
    setElapsed(Date.now() - startedAt);
    return () => timers.forEach(clearTimeout);
  }, [timeline, startedAt, active]);
  return elapsed;
}

const RNGI_SCRAMBLE_GLYPHS = "0123456789";
const RNGI_SCRAMBLE_WILD = "0123456789#%&@$?*/\\";

/** The number, revealed one digit at a time.
 *
 *  Seven fixed slots, right-aligned, with the leading ones blanked for a
 *  short number — so 777 lands in the same place every roll and the box does
 *  not jump about between rolls. A slot that has not landed is scrambling; a
 *  slot that just landed plays `digit-land` for settleMS.
 */
function RngiDigits({ value, timeline, elapsed, aura, tier }) {
  const target = String(value);
  const slots = timeline ? timeline.slots : 7;
  const pad = slots - target.length;
  const st = timeline ? rngiRevealState(timeline, elapsed) : { landed: slots, spinning: false };
  const reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const done = reduced ? slots : st.landed;

  const [scramble, setScramble] = useState(() => Array(8).fill("?"));
  const glyphs = aura === "scramble" ? RNGI_SCRAMBLE_WILD : RNGI_SCRAMBLE_GLYPHS;
  useEffect(() => {
    if (!st.spinning || reduced) return;
    const every = Math.max(40, timeline ? timeline.scrambleMS : 100);
    const t = setInterval(
      () => setScramble(Array.from({ length: 8 }, () => glyphs[Math.floor(Math.random() * glyphs.length)])),
      every
    );
    return () => clearInterval(t);
  }, [st.spinning, timeline, glyphs, reduced]);

  return (
    <div className={`rngi-digits ${st.spinning ? "spinning" : "settled"} ${st.collapsing ? "collapse" : ""} t-${tier || "none"}`}
         aria-label={rngGroup(value)}>
      {Array.from({ length: slots }, (_, i) => {
        const landed = i < done;
        const blank = landed && i < pad;
        const settling = landed && !blank && timeline &&
          elapsed < timeline.digitTimes[i] + timeline.settleMS;
        return (
          <span key={i}
                className={`rngi-digit ${blank ? "blank" : ""} ${!landed ? "scrambling" : ""} ${settling ? "settling" : ""}`}>
            {blank ? "\u00a0" : landed ? target[i - pad] : scramble[i]}
          </span>
        );
      })}
    </div>
  );
}

function RngiBadgeChip({ badge, dim, note, drop, index = 0 }) {
  return (
    <div className={`rngi-chip ${RNG_TIER_CLASS[badge.tier]} ${dim ? "dim" : ""} ${drop ? "drop" : ""}`}
         style={drop ? { animationDelay: `${Math.min(index, 8) * 45}ms` } : undefined}>
      <span className="rngi-chip-ico">{badge.emoji}</span>
      <span className="rngi-chip-body">
        <span className="rngi-chip-name">{badge.label}</span>
        <span className="rngi-chip-note">{note || badge.desc}</span>
      </span>
      <span className="rngi-chip-ep">{rngiEP(badge.ep)}</span>
    </div>
  );
}

/** One panel of a multi-slot roll.
 *
 *  Every panel draws its own number and every panel is shown. The one that
 *  scored highest is the roll; the rest are still readable, because a losing
 *  panel is the only proof that the slot actually did something. Scrambling
 *  runs on this component's own interval, like RngiDigits, so a six-panel
 *  roll does not re-render the whole tool five times a second.
 */
function RngiSlotPanel({ slot, index, kept, elapsed, revealing, reduced }) {
  const landAt = 260 + index * 150;
  const landed = reduced || !revealing || elapsed >= landAt;
  const [scramble, setScramble] = useState(() => "??????");
  useEffect(() => {
    if (landed || reduced) return;
    const t = setInterval(
      () => setScramble(Array.from({ length: 6 }, () => RNGI_SCRAMBLE_GLYPHS[Math.floor(Math.random() * 10)]).join("")),
      90
    );
    return () => clearInterval(t);
  }, [landed, reduced]);
  return (
    <div
      className={`rngi-slot ${kept ? "kept" : "spare"} t-${slot.band.key} ${landed ? "landed" : "spinning"}`}
      style={{ animationDelay: `${index * 70}ms` }}
      aria-label={`slot ${index + 1}: ${slot.n}, ${slot.ep} EP${kept ? ", kept" : ""}`}
    >
      <span className="rngi-slot-n">{landed ? slot.n : scramble}</span>
      <span className="rngi-slot-ep">{landed ? `${rngiEP(slot.ep)} EP` : "· · ·"}</span>
      <span className="rngi-slot-tag">{kept ? "KEPT" : landed ? "dropped" : ""}</span>
    </div>
  );
}

// ---- the roll screen -------------------------------------------------------

function RngiRoll({ state, setState, outcome, setOutcome }) {
  const [offline, setOffline] = useState(null);
  const settings = rngiRollSettings(state.owned);
  const now = useRngiTick(Date.now() < state.cooldownUntil);

  const revealing = now < state.revealUntil;
  const cooling = now < state.cooldownUntil;
  const revealFrac = revealing && outcome
    ? 1 - (state.revealUntil - now) / Math.max(1, outcome.revealMS)
    : 1;

  // offline earnings are claimed on open, not silently banked, so the number
  // is something you are told rather than something you have to notice
  useEffect(() => {
    const gains = rngiOfflineGains(state, Date.now());
    if (gains) setOffline(gains);
    else setState((s) => ({ ...s, lastSeen: Date.now() }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep lastSeen fresh while the tool is open, so closing it is the only
  // thing that starts the offline clock
  useEffect(() => {
    const t = setInterval(() => setState((s) => ({ ...s, lastSeen: Date.now() })), 20000);
    return () => clearInterval(t);
  }, [setState]);

  const roll = useCallback(() => {
    const at = Date.now();
    if (at < state.cooldownUntil) { sound.error(); return; }
    const { state: next, outcome: o } = rngiRoll(state, at);
    setState({ ...next, charges: rngiChargeTick(next, o.fx.overdrive) });
    setOutcome(o);
    // the sweep lasts exactly as long as the reveal, and the chord that ends
    // it is pitched by rarity -- a mythic should sound like one before you
    // have finished reading the word
    const tiers = ["trash", "common", "uncommon", "rare", "epic", "anomaly", "mythic"];
    sound.reveal(o.revealMS);
    const tier = Math.max(0, tiers.indexOf(o.result.band.key) - 1);
    setTimeout(() => sound.land(tier), o.revealMS);
    if (o.drop) setTimeout(() => sound.achievement(), o.revealMS + 320);
  }, [state, setState, setOutcome]);

  // Auto-Roll fires the next roll the instant the cooldown clears. It is a
  // shop item, not a default: an idle game that plays itself by default is
  // a screensaver.
  useEffect(() => {
    // v68: no longer gated behind a shop unlock. It was a 1.6M purchase that
    // silently made the toggle do nothing, which reads as a broken button.
    if (!state.autoRoll) return;
    // v68: 120ms of dead air between rolls read as lag when the whole point
    // of the switch is a continuous machine
    if (Date.now() >= state.cooldownUntil) { const t = setTimeout(roll, 30); return () => clearTimeout(t); }
    const t = setTimeout(roll, state.cooldownUntil - Date.now() + 60);
    return () => clearTimeout(t);
  }, [state.autoRoll, state.owned, state.cooldownUntil, roll]);

  const mult = rngiWalletMult(state);
  const fly = rngiFlywheel(state.owned, state.streak);
  const result = outcome && outcome.result;

  // v68: how far this roll landed from the next band up. A number is a number
  // until you know what you missed by; RNG_BANDS runs high to low and is keyed
  // on EP, so "next up" is the previous entry and the gap is in EP.
  const nearMiss = (() => {
    if (!result) return null;
    const i = RNG_BANDS.findIndex((b) => b.key === result.band.key);
    if (i <= 0) return null;
    const up = RNG_BANDS[i - 1];
    const gap = up.min - result.ep;
    return gap > 0 ? { label: up.label, gap } : null;
  })();

  // The reveal is choreographed, not faded in: digits land one at a time and
  // accelerating, then the badges arrive in groups, then the EP, then the
  // rarity band slams in. rngiTimeline owns the pacing; this just reads it.
  const timeline = useMemo(
    () => (outcome ? rngiTimeline(String(outcome.result.n).length,
                                  Math.max(1, Math.min(6, outcome.result.paid.length)),
                                  outcome.revealMS) : null),
    [outcome]
  );
  const startedAt = state.lastRollAt || 0;
  const elapsed = useRevealClock(timeline, startedAt, !!outcome && revealing);
  const rv = timeline ? rngiRevealState(timeline, revealing ? elapsed : timeline.end + 1)
                      : { landed: 9, spinning: false, badgeGroups: 9, showSummary: true,
                          showRarity: true, showStats: true, done: true, popping: false };
  const tierIdx = result
    ? Math.max(0, ["trash","common","uncommon","rare","epic","anomaly","mythic"].indexOf(result.band.key) - 1)
    : 0;
  const reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  const claim = () => {
    setState((s) => rngiClaimOffline(s, offline, Date.now()));
    setOffline(null);
    sound.success();
  };

  return (
    <>
      {offline && (
        <div className="rngi-offline">
          <span className="rngi-offline-head">while you were away</span>
          <span className="rngi-offline-ep">+{rngiEP(offline.ep)} EP</span>
          <span className="rngi-offline-sub">
            {offline.rolls} offline roll{offline.rolls === 1 ? "" : "s"}
            {offline.capped ? " · vault full" : ""}
          </span>
          <button className="rngi-btn small" onClick={claim}>collect</button>
        </div>
      )}

      <div className={`rngi-stage ${result ? `band-${result.band.key}` : ""} ${state.aura ? `aura-${state.aura}` : ""}`}>
        {state.aura && <span className="rngi-aura-layer" aria-hidden="true" />}
        {result ? (
          <>
            <RngiDigits
              value={result.n}
              timeline={timeline}
              elapsed={revealing ? elapsed : (timeline ? timeline.end + 1 : 0)}
              aura={state.aura}
              tier={rv.showRarity ? result.band.key : null}
            />
            {outcome.panels && outcome.panels.length > 1 && (
              <div className={`rngi-slots ${outcome.panels.length > 3 ? "dense" : outcome.panels.length === 3 ? "three" : ""}`}>
                {outcome.panels.map((slot, i) => (
                  <RngiSlotPanel
                    key={i}
                    slot={slot}
                    index={i}
                    kept={i === outcome.keptIndex}
                    elapsed={revealing ? elapsed : (timeline ? timeline.end + 1 : 0)}
                    revealing={revealing}
                    reduced={reduced}
                  />
                ))}
              </div>
            )}
            <div className={`rngi-verdict ${rv.showRarity ? "in" : "pending"}`}>
              {rv.showRarity ? (
                <>
                  <span className={`rngi-band band-${result.band.key} ${rv.popping ? "slam" : ""}`}>
                    {result.band.label}
                  </span>
                  <span className="rngi-rank">
                    {result.percentile >= 50
                      ? `top ${(100 - result.percentile).toFixed(result.percentile > 99 ? 3 : 1)}%`
                      : `bottom ${result.percentile.toFixed(1)}%`}
                  </span>
                </>
              ) : (
                <span className="rngi-band pending-band">— — —</span>
              )}
            </div>
            {rv.showSummary && (
              <>
                <div className="rngi-scored rise">{rngGroup(result.ep)} EP scored</div>
                {nearMiss && (
                  <div className="rngi-near rise">
                    {rngGroup(nearMiss.gap)} EP short of {nearMiss.label}
                  </div>
                )}
                <div className="rngi-banked rise">
                  <span className="rngi-banked-v">+{rngiEP(outcome.banked)}</span>
                  <span className="rngi-banked-l">banked</span>
                  {mult.total * outcome.fx.wallet > 1.001 && (
                    <span className="rngi-banked-m">×{(mult.total * outcome.fx.wallet).toFixed(2)}</span>
                  )}
                  <span className="rngi-ep-float" key={`${result.n}-${startedAt}`}>
                    +{rngiEP(outcome.banked)}
                  </span>
                </div>
              </>
            )}
            {rv.showStats && outcome.draws.length > 1 && (
              <div className="rngi-draws rise">
                kept the best of {outcome.draws.length}
                {outcome.winner
                  ? ` · ${RNGI_SKILL_BY_ID[outcome.winner].name}`
                  : outcome.panels && outcome.panels.length > 1
                    ? outcome.keptIndex >= 0
                      ? ` · slot ${outcome.keptIndex + 1} of ${outcome.panels.length}`
                      : " · a hidden draw beat every slot"
                    : " · the plain draw won"}
              </div>
            )}
            {rv.showStats && outcome.race && outcome.race.length > 0 && (
              <div className="rngi-race rise" aria-label="hidden draws">
                <span className="rngi-race-head">
                  {outcome.race.length} hidden draw{outcome.race.length === 1 ? "" : "s"}
                </span>
                <div className="rngi-race-row">
                  {outcome.race.map((d, i) => {
                    const won = d.n === result.n && d.ep === result.ep;
                    return (
                      <span
                        key={i}
                        className={`rngi-race-draw ${won ? "won" : ""} t-${d.band.key}`}
                        style={{ animationDelay: `${i * 80}ms` }}
                        title={`${d.from} draw: ${rngiEP(d.ep)} EP`}
                      >
                        {d.n}
                        {won && <span className="rngi-race-tag">kept</span>}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
            {rv.showStats && outcome.drop && (
              <div className="rngi-drop rise">a friend turned up: {RNGI_PET_BY_ID[outcome.drop].name}</div>
            )}
          </>
        ) : (
          <RngiIdleDigits aura={state.aura} />
        )}
      </div>

      <div className="rngi-controls">
        {cooling ? (
          <>
            <RngiBar
              frac={revealing
                ? revealFrac
                : 1 - (state.cooldownUntil - now) / Math.max(1, outcome ? outcome.cooldownMS : settings.cooldownMS)}
              className={revealing ? "reveal" : "cool"}
            />
            <div className="rngi-wait">
              {revealing ? "REVEALING" : "NEXT ROLL IN"} {((state.cooldownUntil - now) / 1000).toFixed(1)}s
            </div>
          </>
        ) : (
          <button className="rngi-btn generate" onClick={roll}>
            {state.totalRolls ? "ROLL AGAIN" : "GENERATE"}
          </button>
        )}
        <div className="rngi-pace">
          reveal {rngiDuration(settings.revealMS)} · cooldown {rngiDuration(settings.cooldownMS)}
          {fly.tier > 0 && <> · flywheel ×{fly.bonus.toFixed(2)}{fly.bonus < fly.cap ? ` (${fly.next} to next)` : ""}</>}
        </div>
        {(
          <button
            className={`rngi-auto ${state.autoRoll ? "on" : ""}`}
            onClick={() => { setState((s) => ({ ...s, autoRoll: !s.autoRoll })); sound.toggle(); }}
          >
            auto-roll {state.autoRoll ? "on" : "off"}
          </button>
        )}
      </div>

      <RngiRack state={state} setState={setState} />

      {result && rv.badgeGroups > 0 && (
        <>
          <div className="rngi-section">
            <span>PAID · {result.paid.length}</span>
            <span className="rngi-section-note">{result.earned.length} earned</span>
          </div>
          <div className="rngi-chips">
            {result.paid
              .slice(0, rv.done ? result.paid.length
                                : Math.ceil((rv.badgeGroups / Math.max(1, timeline.badgeTimes.length)) * result.paid.length))
              .map((b, i) => (
                <RngiBadgeChip
                  key={b.id}
                  badge={b}
                  drop={!rv.done}
                  index={i}
                  note={outcome.fresh.includes(b.id) ? "NEW — first time seen" : null}
                />
              ))}
          </div>
          {rv.done && result.outranked.length > 0 && (
            <>
              <div className="rngi-section">
                <span>OUTRANKED · {result.outranked.length}</span>
                <span className="rngi-section-note">same family, lower EP</span>
              </div>
              <div className="rngi-chips">
                {result.outranked.map((b) => <RngiBadgeChip key={b.id} badge={b} dim />)}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

/** The rack: skills you own, charged by rolling, armed for the next roll. */
function RngiRack({ state, setState }) {
  const owned = rngiOwnedSkills(state);
  if (!owned.length) return null;
  const size = rngiRackSize(state);
  const armed = state.armed || [];

  const toggle = (id) => {
    if (!rngiSkillReady(state, id)) { sound.error(); return; }
    setState((s) => {
      const on = (s.armed || []).includes(id);
      if (on) return { ...s, armed: s.armed.filter((x) => x !== id) };
      if ((s.armed || []).length >= size) { return s; }
      return { ...s, armed: [...(s.armed || []), id] };
    });
    sound.toggle();
  };

  return (
    <>
      <div className="rngi-section">
        <span>RACK</span>
        <span className="rngi-section-note">{armed.length}/{size} armed · fires on the next roll</span>
      </div>
      <div className="rngi-rack">
        {owned.map((id) => {
          const s = RNGI_SKILL_BY_ID[id];
          const have = (state.charges || {})[id] || 0;
          const ready = have >= s.charges;
          return (
            <button
              key={id}
              className={`rngi-skill ${ready ? "ready" : ""} ${armed.includes(id) ? "armed" : ""}`}
              onClick={() => toggle(id)}
              title={s.desc}
            >
              <span className="rngi-skill-name">{s.name}</span>
              <span className="rngi-skill-charge">{ready ? "READY" : `${have}/${s.charges}`}</span>
              <RngiBar frac={have / s.charges} />
            </button>
          );
        })}
      </div>
    </>
  );
}

// ---- the shop --------------------------------------------------------------

function RngiShop({ state, setState }) {
  const [shelf, setShelf] = useState("pace");
  const now = Date.now();
  const stock = rngiAvailableSkills(state, now);

  const items = useMemo(() => {
    if (shelf === "pets") {
      return RNGI_PETS.map((p) => ({
        id: p.id, kind: "companion", name: p.name, price: p.price, desc: p.desc,
        owned: (state.pets || []).includes(p.id), extra: `×${p.multiplier} banked`,
      }));
    }
    if (shelf === "skills") {
      // the rack bays are ordinary permanent products; the skills themselves
      // are a rotating stall, so the shelf is the two lists joined
      const bays = RNGI_PRODUCTS.filter((p) => p.kind === "skill-slot").map((p) => ({
        id: p.id, kind: p.kind, name: p.name, price: p.price, desc: p.desc,
        requires: p.requires,
        owned: (state.owned || []).includes(p.id),
        locked: p.requires && !(state.owned || []).includes(p.requires),
        extra: "+1 skill slot",
      }));
      const sold = stock.map((id) => RNGI_SKILL_BY_ID[id]).filter(Boolean).map((sk) => ({
        id: sk.id, kind: "skill", name: sk.name, price: sk.price, desc: sk.desc,
        owned: (state.skills || []).includes(sk.id) || sk.source !== "shop",
        free: sk.source !== "shop",
        extra: `${sk.charges} rolls to charge`,
      }));
      return [...bays, ...sold].sort((a, b) => a.price - b.price);
    }
    const kinds = (RNGI_SHELVES.find((x) => x.id === shelf) || {}).kinds || [];
    return RNGI_PRODUCTS
      .filter((p) => kinds.includes(p.kind) || (shelf === "offline" && p.id === "offline-roller"))
      .map((p) => ({
        id: p.id, kind: p.kind, name: p.name, price: p.price, desc: p.desc,
        requires: p.requires,
        owned: (state.owned || []).includes(p.id),
        locked: p.requires && !(state.owned || []).includes(p.requires),
        extra: p.kind === "draw-slot" ? `${p.value} panels, best one kept`
             : p.kind === "roll" ? `reveal ${rngiDuration(p.from)} → ${rngiDuration(p.value)}`
             : p.kind === "cooldown" ? `cooldown ${rngiDuration(p.from)} → ${rngiDuration(p.value)}`
             : p.kind === "offline" ? `one offline roll every ${rngiDuration(p.value)}`
             : p.kind === "offline-cap" ? `store up to ${p.value} offline rolls`
             : null,
      }))
      .sort((a, b) => a.price - b.price);
  }, [shelf, state.owned, state.pets, state.skills, stock]);

  const buy = (id) => {
    const before = state.ep;
    const next = rngiBuy(state, id, Date.now());
    if (next.ep === before && next === state) { sound.error(); return; }
    setState(next);
    sound.success();
  };

  const wear = (id) => { setState((s) => ({ ...s, wearing: s.wearing === id ? null : id })); sound.toggle(); };
  const skin = (id) => { setState((s) => ({ ...s, aura: s.aura === id ? null : id })); sound.toggle(); };

  // v68: what this shelf is saving FOR. A wall of prices with no sense of the
  // next rung is the least motivating possible shop: the useful question is
  // "how much more", not "how much".
  const nextBuy = useMemo(() => {
    const buyable = items
      .filter((it) => !it.owned && !it.locked && !it.free && it.price > 0)
      .sort((a, b) => a.price - b.price);
    if (!buyable.length) return null;
    const it = buyable.find((x) => x.price > state.ep) || buyable[buyable.length - 1];
    const frac = Math.max(0, Math.min(1, state.ep / it.price));
    return { it, frac, left: Math.max(0, it.price - state.ep) };
  }, [items, state.ep]);

  const ownedCount = items.filter((it) => it.owned).length;

  return (
    <>
      <div className="rngi-shelves">
        {RNGI_SHELVES.map((s) => (
          <button key={s.id} className={shelf === s.id ? "on" : ""} onClick={() => { setShelf(s.id); sound.whoosh(); }}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="rngi-shelf-blurb">
        {(RNGI_SHELVES.find((x) => x.id === shelf) || {}).blurb}
        {(() => {
          const can = items.filter((i) => !i.owned && !i.locked && !i.free && state.ep >= i.price).length;
          return can ? <span className="rngi-afford-count"> · {can} you can afford</span> : null;
        })()}
      </div>
      {shelf === "skills" && (
        <div className="rngi-shelf-blurb dim">
          three on sale at a time · the stall rotates every 5 minutes
        </div>
      )}

      {nextBuy && (
        <div className={`rngi-next ${nextBuy.frac >= 1 ? "ready" : ""}`}>
          <div className="rngi-next-top">
            <span className="rngi-next-name">
              {nextBuy.frac >= 1 ? "ready to buy" : "next up"} · {nextBuy.it.name}
            </span>
            <span className="rngi-next-left">
              {nextBuy.frac >= 1 ? "affordable" : `${rngiEP(nextBuy.left)} to go`}
            </span>
          </div>
          <div className="rngi-next-bar"><i style={{ width: `${(nextBuy.frac * 100).toFixed(1)}%` }} /></div>
        </div>
      )}
      {ownedCount > 0 && shelf !== "skills" && (
        <div className="rngi-owned-line">{ownedCount} owned on this shelf</div>
      )}
      <div className="rngi-items">
        {items.length === 0 && <div className="rngi-empty">nothing on this shelf yet</div>}
        {items.map((it) => {
          const affordable = state.ep >= it.price;
          return (
            <div key={it.id}
                 className={`rngi-item ${it.owned ? "owned" : ""} ${it.locked ? "locked" : ""} ${!it.owned && !it.locked && affordable ? "afford" : ""}`}>
              <div className="rngi-item-top">
                <span className="rngi-item-name">{it.name}</span>
                {it.owned
                  ? <span className="rngi-item-have">owned</span>
                  : <span className={`rngi-item-price ${affordable ? "ok" : ""}`}>{rngiEP(it.price)}</span>}
              </div>
              <div className="rngi-item-desc">{it.desc}</div>
              {it.extra && <div className="rngi-item-extra">{it.extra}</div>}
              {it.locked && (
                <div className="rngi-item-lock">needs {RNGI_PRODUCT_BY_ID[it.requires]?.name || it.requires}</div>
              )}
              {!it.owned && !it.locked && !it.free && (
                <button className="rngi-btn small" disabled={!affordable} onClick={() => buy(it.id)}>buy</button>
              )}
              {it.owned && it.kind === "companion" && (
                <button className={`rngi-btn small ${state.wearing === it.id ? "on" : "ghost"}`} onClick={() => wear(it.id)}>
                  {state.wearing === it.id ? "worn" : "wear"}
                </button>
              )}
              {it.owned && it.kind === "aura" && (
                <button className={`rngi-btn small ${state.aura === it.id ? "on" : "ghost"}`} onClick={() => skin(it.id)}>
                  {state.aura === it.id ? "active" : "use"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

// ---- collection ------------------------------------------------------------

function RngiBadges({ state }) {
  const [tier, setTier] = useState("all");
  const seen = state.seen || {};
  const owned = Object.keys(seen).length;
  const list = useMemo(() => {
    const all = [...RNGI_ALL_BADGES].sort((a, b) => a.ep - b.ep);
    return tier === "all" ? all : all.filter((b) => b.tier === tier);
  }, [tier]);

  return (
    <>
      <div className="rngi-section">
        <span>COLLECTION</span>
        <span className="rngi-section-note">{owned} / {RNGI_BADGE_TOTAL}</span>
      </div>
      <RngiBar frac={owned / RNGI_BADGE_TOTAL} />
      <div className="rngi-filters">
        <button className={tier === "all" ? "on" : ""} onClick={() => { setTier("all"); sound.click(); }}>all</button>
        {RNG_TIER_ORDER.map((t) => {
          const have = RNGI_ALL_BADGES.filter((b) => b.tier === t && seen[b.id]).length;
          const total = RNGI_ALL_BADGES.filter((b) => b.tier === t).length;
          return (
            <button key={t} className={`${RNG_TIER_CLASS[t]} ${tier === t ? "on" : ""}`}
                    onClick={() => { setTier(t); sound.click(); }}>
              {RNG_TIER_NAMES[t].slice(0, 4)} {have}/{total}
            </button>
          );
        })}
      </div>
      <div className="rngi-tierbars">
        {RNG_TIER_ORDER.map((t) => {
          const all = RNGI_ALL_BADGES.filter((b) => b.tier === t);
          const have = all.filter((b) => seen[b.id]).length;
          return (
            <div key={t} className={`rngi-tierbar ${RNG_TIER_CLASS[t]}`} title={`${RNG_TIER_NAMES[t]}: ${have}/${all.length}`}>
              <span style={{ width: `${(have / Math.max(1, all.length)) * 100}%` }} />
            </div>
          );
        })}
      </div>
      <div className="rngi-grid">
        {list.map((b) => {
          const n = seen[b.id] || 0;
          return (
            <div key={b.id} className={`rngi-cell ${RNG_TIER_CLASS[b.tier]} ${n ? "got" : "locked"}`}
                 title={`${b.label} — ${b.desc} (${rngGroup(b.count)} of 1,000,001)`}>
              <span className="rngi-cell-ico">{n ? b.emoji : "◌"}</span>
              <span className="rngi-cell-name">{n ? b.label : "locked"}</span>
              {n > 1 && <span className="rngi-cell-n">×{n > 999 ? "999+" : n}</span>}
            </div>
          );
        })}
      </div>
    </>
  );
}

// ---- stats and the reset ladder -------------------------------------------

function RngiStats({ state, setState }) {
  const gate = rngiResetGate(state);
  const mult = rngiWalletMult(state);
  const settings = rngiRollSettings(state.owned);
  const [confirm, setConfirm] = useState(false);

  const doReset = () => {
    if (!gate.ready) { sound.error(); return; }
    setState((s) => rngiReset(s, Date.now()));
    setConfirm(false);
    sound.success();
  };

  const rows = [
    ["rolls this cycle", rngGroup(state.rolls || 0)],
    ["rolls all time", rngGroup(state.totalRolls || 0)],
    ["numbers drawn", rngGroup(state.draws || 0)],
    ["EP this cycle", rngiEP(state.earned || 0)],
    ["EP all time", rngiEP(state.lifetime || 0)],
    ["EP spent", rngiEP(state.spent || 0)],
    ["badges found", `${Object.keys(state.seen || {}).length} / ${RNGI_BADGE_TOTAL}`],
    ["friends found", `${(state.pets || []).length} / ${RNGI_PETS.length}`],
    ["best roll", state.best ? `${rngGroup(state.best.n)} · ${rngiEP(state.best.ep)} EP` : "—"],
    ["roll streak", rngGroup(state.streak || 0)],
  ];

  return (
    <>
      <div className="rngi-section"><span>WALLET MULTIPLIER</span><span className="rngi-section-note">×{mult.total.toFixed(3)}</span></div>
      <div className="rngi-mults">
        {[["friend", mult.pet], ["rebirth", mult.rebirth], ["prestige", mult.prestige],
          ["rollback", mult.rollback], ["surplus", mult.surplus], ["flywheel", mult.flywheel]]
          .filter(([, v]) => v > 1.0001)
          .map(([k, v]) => <span key={k} className="rngi-mult">{k} ×{v.toFixed(2)}</span>)}
        {mult.total <= 1.0001 && <span className="rngi-mult dim">nothing yet — wear a friend</span>}
      </div>
      <div className="rngi-note">
        multipliers only ever touch EP that lands in your wallet. the number, its
        badges, its scored EP and its rank are the same for everyone.
      </div>

      <div className="rngi-section"><span>PACE</span></div>
      <div className="rngi-mults">
        <span className="rngi-mult">reveal {rngiDuration(settings.revealMS)}</span>
        <span className="rngi-mult">cooldown {rngiDuration(settings.cooldownMS)}</span>
      </div>

      <div className="rngi-section"><span>NUMBERS</span></div>
      <div className="rngi-rows">
        {rows.map(([k, v]) => (
          <div key={k} className="rngi-row"><span>{k}</span><span className="rngi-row-v">{v}</span></div>
        ))}
      </div>

      {gate.visible && (
        <>
          <div className="rngi-section">
            <span>{gate.kind.toUpperCase()}</span>
            <span className="rngi-section-note">+{gate.bonus}% banked, forever</span>
          </div>
          <div className="rngi-gate">
            <div className="rngi-gate-row">
              <span>badges</span>
              <span className={gate.badges >= gate.needBadges ? "ok" : ""}>{gate.badges} / {gate.needBadges}</span>
            </div>
            <RngiBar frac={gate.badges / gate.needBadges} />
            <div className="rngi-gate-row">
              <span>EP this cycle</span>
              <span className={gate.earned >= gate.needEp ? "ok" : ""}>{rngiEP(gate.earned)} / {rngiEP(gate.needEp)}</span>
            </div>
            <RngiBar frac={gate.earned / gate.needEp} />
            <div className="rngi-gate-note">
              keeps: the collection, your friends and every permanent bonus.
              resets: EP, the shop, the rack and this cycle's streak.
            </div>
            {confirm ? (
              <div className="rngi-gate-actions">
                <button className="rngi-btn small" onClick={doReset}>yes, {gate.kind}</button>
                <button className="rngi-btn small ghost" onClick={() => setConfirm(false)}>cancel</button>
              </div>
            ) : (
              <button className="rngi-btn small" disabled={!gate.ready} onClick={() => { setConfirm(true); sound.click(); }}>
                {gate.ready ? gate.kind : "not yet"}
              </button>
            )}
          </div>
        </>
      )}

      {(state.history || []).length > 0 && (
        <>
          <div className="rngi-section"><span>RECENT</span></div>
          <div className="rngi-log">
            {[...state.history].reverse().slice(0, 15).map((r, i) => (
              <div key={`${r.at}-${i}`} className="rngi-log-row">
                <span className="rngi-log-n">{rngGroup(r.n)}</span>
                <span className={`rngi-log-band band-${r.band}`}>{r.band}</span>
                <span className="rngi-log-ep">+{rngiEP(r.banked)}</span>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="rngi-credit">
        ported from RNGdle Infinite by jaime-gaming, itself a recreation of
        RNGdle by Cam / sparrowpatch. badge catalogue and EP values from RNGdle
        Tools. the clock here runs 15× faster than the original and the reset
        EP gates are 4× — everything else is theirs.
      </div>
    </>
  );
}

// ---- the tool --------------------------------------------------------------

function RngdleTool() {
  const [state, setState] = useState(loadRngi);
  const [outcome, setOutcome] = useState(null);
  const [view, setView] = useState("roll");

  useEffect(() => { saveRngi(state); }, [state]);
  useEffect(() => () => saveRngi({ ...loadRngi(), lastSeen: Date.now() }), []);

  return (
    <div className="rngi">
      <div className="rngi-wallet">
        <span className="rngi-wallet-ep">{rngiEP(state.ep)}</span>
        <span className="rngi-wallet-l">EP</span>
        {state.wearing && <span className="rngi-wallet-pet">{RNGI_PET_BY_ID[state.wearing].name}</span>}
        {(state.rebirths > 0 || state.prestiges > 0 || state.rollbacks > 0) && (
          <span className="rngi-wallet-marks">
            {state.rollbacks > 0 && `◆${state.rollbacks} `}
            {state.prestiges > 0 && `★${state.prestiges} `}
            {state.rebirths > 0 && `↻${state.rebirths}`}
          </span>
        )}
      </div>

      <div className="rngi-tabs">
        {[["roll", "roll"], ["shop", "shop"], ["badges", "badges"], ["stats", "stats"]].map(([k, l]) => (
          <button key={k} className={view === k ? "on" : ""} onClick={() => { setView(k); sound.whoosh(); }}>{l}</button>
        ))}
      </div>

      {view === "roll" && <RngiRoll state={state} setState={setState} outcome={outcome} setOutcome={setOutcome} />}
      {view === "shop" && <RngiShop state={state} setState={setState} />}
      {view === "badges" && <RngiBadges state={state} />}
      {view === "stats" && <RngiStats state={state} setState={setState} />}
    </div>
  );
}

// ============================================================
// EXPENSES (v46)
//
// Deliberately the "simple" tier you asked for: spending, categories and
// charts. No income, no balance, no budgets, no bank link. Everything is
// local, like the rest of the app.
//
// The three things the research kept naming as the difference between a
// tracker you keep using and one you abandon in a week:
//   1. entry has to be fast -- amount first, big keys, one hand
//   2. a daily view with an average, not just a monthly total
//   3. categories that are quick to pick and quick to read back
// Those are what got built. Receipt capture and auto-categorisation need a
// camera and a server, which this app is not.
// ============================================================

const STORAGE_KEY_EXPENSES = "tasksh.expenses.v1";

/** Starter categories. Colours come from the existing area palette rather
 *  than a new one, so a theme change carries them along. */
const EXPENSE_CATS = [
  { key: "food",      label: "food",      color: "#F59E0B", glyph: "◍" },
  { key: "transport", label: "transport", color: "#60A5FA", glyph: "▸" },
  { key: "bills",     label: "bills",     color: "#FB7185", glyph: "▤" },
  { key: "shopping",  label: "shopping",  color: "#C084FC", glyph: "◆" },
  { key: "health",    label: "health",    color: "#5EEAD4", glyph: "✚" },
  { key: "fun",       label: "fun",       color: "#34D399", glyph: "★" },
  { key: "other",     label: "other",     color: "#9AA4B2", glyph: "·" },
];

const EXPENSE_CURRENCIES = ["₹", "$", "€", "£", "¥"];

/** Accepts what a person actually types into an amount box.
 *
 *  "1,200" (grouping), "12.50", " 40 ", and running sums like "120+45+30"
 *  or "500-120" -- the calculator-style entry every fast tracker has, because
 *  splitting a bill in your head and typing one number is the step people
 *  skip. Parsed by hand rather than with eval: this takes user text.
 *  Returns null for anything it cannot read, never NaN.
 */
function parseAmount(text) {
  const raw = String(text == null ? "" : text).replace(/[,\s₹$€£¥]/g, "");
  if (!raw) return null;
  // every term must actually contain a digit, so "12+", "1..2" and a bare
  // operator are refused rather than silently read as the part before them
  if (!/^\d*\.?\d+([+-]\d*\.?\d+)*$/.test(raw)) return null;
  const parts = raw.match(/[+-]?[^+-]+/g);
  if (!parts) return null;
  let total = 0;
  for (const p of parts) {
    const sign = p[0] === "-" ? -1 : 1;
    const body = p.replace(/^[+-]/, "");
    if (body === "" || body === ".") return null;
    const v = Number(body);
    if (!Number.isFinite(v)) return null;
    total += sign * v;
  }
  if (!Number.isFinite(total) || total <= 0) return null;
  // money is stored in whole minor units (paise/cents) so repeated addition
  // can never drift the way 0.1 + 0.2 does
  return Math.round(total * 100);
}

/** Minor units back to something readable. Whole amounts lose the ".00",
 *  because "₹240" is the number you remember and "₹240.00" is noise. */
function formatMoney(minor, currency = "₹", { compact = false } = {}) {
  const neg = minor < 0;
  const abs = Math.abs(Math.round(minor || 0));
  if (compact && abs >= 10000000) return `${neg ? "−" : ""}${currency}${(abs / 10000000).toFixed(1)}L`;
  if (compact && abs >= 100000) return `${neg ? "−" : ""}${currency}${(abs / 100000).toFixed(1)}k`;
  const whole = Math.floor(abs / 100);
  const cents = abs % 100;
  const grouped = rngGroup(whole);
  return `${neg ? "−" : ""}${currency}${grouped}${cents ? `.${String(cents).padStart(2, "0")}` : ""}`;
}

/** "2026-10-18" -> "2026-10". The month key everything groups by. */
function expenseMonthKey(dateStr) {
  return String(dateStr || "").slice(0, 7);
}

function expenseMonthLabel(monthKey) {
  const [y, m] = String(monthKey).split("-").map(Number);
  return `${MONTH_NAMES[(m || 1) - 1]} ${y}`;
}

function daysInMonth(monthKey) {
  const [y, m] = String(monthKey).split("-").map(Number);
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

/** Everything the month view needs, in one pass.
 *
 *  `today` is passed in rather than read from the clock so the per-day
 *  average can be "so far this month" for the current month and "the whole
 *  month" for a past one -- dividing October's spending by 31 on the 3rd
 *  gives an average that is wrong by a factor of ten.
 */
function summariseExpenses(items, monthKey, today) {
  const mine = (items || []).filter((e) => expenseMonthKey(e.d) === monthKey);
  const total = mine.reduce((s, e) => s + e.amt, 0);

  const byCat = {};
  const byDay = {};
  let biggest = null;
  for (const e of mine) {
    byCat[e.cat] = (byCat[e.cat] || 0) + e.amt;
    byDay[e.d] = (byDay[e.d] || 0) + e.amt;
    if (!biggest || e.amt > biggest.amt) biggest = e;
  }

  const span = daysInMonth(monthKey);
  const isCurrent = expenseMonthKey(today) === monthKey;
  const elapsed = isCurrent ? Math.max(1, Number(String(today).slice(8, 10))) : span;
  const daysWithSpend = Object.keys(byDay).length;

  const cats = Object.entries(byCat)
    .map(([key, amt]) => ({ key, amt, share: total ? amt / total : 0 }))
    .sort((a, b) => b.amt - a.amt);

  return {
    total, count: mine.length, byCat, byDay, cats, biggest,
    span, elapsed, daysWithSpend,
    perDay: Math.round(total / elapsed),
    perSpendDay: daysWithSpend ? Math.round(total / daysWithSpend) : 0,
    today: byDay[today] || 0,
    projected: isCurrent ? Math.round((total / elapsed) * span) : total,
    isCurrent,
  };
}

/** One bar per day of the month, zeros included -- a gap in the chart has to
 *  mean "nothing spent", and it cannot if missing days are simply absent. */
function expenseDailySeries(items, monthKey) {
  const byDay = {};
  for (const e of items || []) {
    if (expenseMonthKey(e.d) === monthKey) byDay[e.d] = (byDay[e.d] || 0) + e.amt;
  }
  const span = daysInMonth(monthKey);
  const out = [];
  for (let day = 1; day <= span; day++) {
    const d = `${monthKey}-${String(day).padStart(2, "0")}`;
    out.push({ d, day, amt: byDay[d] || 0 });
  }
  return out;
}

/** Months that actually contain something, newest first, with the current
 *  month always present so a fresh install has somewhere to stand. */
function expenseMonths(items, today) {
  const set = new Set((items || []).map((e) => expenseMonthKey(e.d)));
  set.add(expenseMonthKey(today));
  return [...set].filter(Boolean).sort().reverse();
}

function shiftMonthKey(monthKey, delta) {
  const [y, m] = String(monthKey).split("-").map(Number);
  const m0 = y * 12 + (m - 1) + delta;
  return `${Math.floor(m0 / 12)}-${String((m0 % 12) + 1).padStart(2, "0")}`;
}

/** Spending grouped into day headings, newest first. */
function groupExpensesByDay(items, monthKey) {
  const mine = (items || []).filter((e) => expenseMonthKey(e.d) === monthKey);
  const days = {};
  for (const e of mine) (days[e.d] = days[e.d] || []).push(e);
  return Object.keys(days)
    .sort()
    .reverse()
    .map((d) => ({
      d,
      total: days[d].reduce((s, e) => s + e.amt, 0),
      items: days[d].slice().sort((a, b) => (b.at || 0) - (a.at || 0)),
    }));
}

/** This month against the same stretch of last month. "You are spending more
 *  than last month" is only true if it compares like with like -- the 10th of
 *  October against the whole of September is not a comparison. */
function compareToPreviousMonth(items, monthKey, today) {
  const now = summariseExpenses(items, monthKey, today);
  const prevKey = shiftMonthKey(monthKey, -1);
  const upTo = now.elapsed;
  const prevItems = (items || []).filter((e) => {
    if (expenseMonthKey(e.d) !== prevKey) return false;
    return Number(e.d.slice(8, 10)) <= upTo;
  });
  const prev = prevItems.reduce((s, e) => s + e.amt, 0);
  if (!prev) return null;
  return { prev, now: now.total, delta: now.total - prev, pct: (now.total - prev) / prev, upTo };
}

/** Comma-separated, quoted, with a UTF-8 BOM so a note with a ₹ or an
 *  accent does not arrive as mojibake in Excel. */
function expensesToCSV(items, cats) {
  const label = (key) => (cats.find((c) => c.key === key) || { label: key }).label;
  const esc = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
  const rows = [["date", "category", "amount", "note"].map(esc).join(",")];
  for (const e of [...(items || [])].sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : 0))) {
    rows.push([esc(e.d), esc(label(e.cat)), (e.amt / 100).toFixed(2), esc(e.note || "")].join(","));
  }
  return "\ufeff" + rows.join("\n");
}

// ---- named items (v48) -----------------------------------------------------
//
// An entry's `note` has always been free text. v48 makes it the entry's NAME
// and treats the set of names you have used as a library: type "sweets" once
// and it offers itself forever after, carrying the category and the amount
// you usually pay with it.
//
// Deliberately NOT a managed list of items you have to set up first. The
// research on this was unambiguous: every setup step between you and logging
// a purchase is where the habit dies. A typo just makes a new name, which is
// a smaller problem than not recording the spend at all.
//
// The storage shape is unchanged — still `note` on each entry — so this needs
// no migration and an old backup restores into it untouched.

/** Case- and space-insensitive key, so "Sweets", "sweets " and "SWEETS" are
 *  one item. The display form is whichever spelling you used most recently. */
function expenseNameKey(name) {
  return String(name || "").trim().toLowerCase().replace(/\s+/g, " ");
}

/** The library: every name ever used, with what it usually costs.
 *
 *  `cat` and `lastAmt` are what make a suggestion worth tapping — picking
 *  "sweets" should fill in the category and the price you normally pay, not
 *  just the word.
 */
function expenseNameIndex(items) {
  const map = new Map();
  for (const e of items || []) {
    const key = expenseNameKey(e.note);
    if (!key) continue;
    const at = Number.isFinite(e.at) ? e.at : 0;
    const prev = map.get(key);
    if (!prev) {
      map.set(key, {
        key, name: String(e.note).trim(), count: 1, total: e.amt,
        lastAt: at, lastD: e.d, cat: e.cat, lastAmt: e.amt,
      });
      continue;
    }
    prev.count += 1;
    prev.total += e.amt;
    // the most recent entry decides the spelling, the category and the price
    if (at >= prev.lastAt) {
      prev.lastAt = at; prev.lastD = e.d; prev.cat = e.cat;
      prev.lastAmt = e.amt; prev.name = String(e.note).trim();
    }
  }
  return [...map.values()].map((x) => ({ ...x, avg: Math.round(x.total / x.count) }));
}

/** What to offer while they type.
 *
 *  Ranking: things that start with what you typed beat things that merely
 *  contain it, then how often you buy them. An empty query offers your most
 *  frequent names, which is the one-tap case for a daily chai.
 */
function suggestNames(index, query, limit = 6) {
  const q = expenseNameKey(query);
  const scored = [];
  for (const it of index) {
    if (!q) { scored.push({ it, rank: 2 }); continue; }
    const k = it.key;
    if (k === q) continue;                      // already typed exactly
    if (k.startsWith(q)) scored.push({ it, rank: 0 });
    else if (k.includes(q)) scored.push({ it, rank: 1 });
  }
  scored.sort((a, b) => a.rank - b.rank || b.it.count - a.it.count || b.it.lastAt - a.it.lastAt);
  return scored.slice(0, limit).map((s) => s.it);
}

/** Spend per named item over a set of entries, biggest first. Unnamed
 *  entries are grouped under their category rather than silently dropped. */
function summariseByName(items, catLabel) {
  const map = new Map();
  for (const e of items || []) {
    const key = expenseNameKey(e.note) || `~${e.cat}`;
    const label = expenseNameKey(e.note)
      ? String(e.note).trim()
      : `(unnamed ${catLabel ? catLabel(e.cat) : e.cat})`;
    const prev = map.get(key);
    if (prev) { prev.total += e.amt; prev.count += 1; }
    else map.set(key, { key, label, total: e.amt, count: 1, cat: e.cat });
  }
  return [...map.values()]
    .map((x) => ({ ...x, avg: Math.round(x.total / x.count) }))
    .sort((a, b) => b.total - a.total);
}

// ---- the year (v48) --------------------------------------------------------

/** Twelve months, zeros included.
 *
 *  `today` decides how far "so far" goes: dividing a year's spending by 12 in
 *  February is the same mistake as dividing a month's by 31 on the 3rd, and
 *  it is wrong in the same flattering direction.
 */
function summariseYear(items, year, today) {
  const prefix = `${year}-`;
  const mine = (items || []).filter((e) => String(e.d).startsWith(prefix));
  const total = mine.reduce((s, e) => s + e.amt, 0);

  const months = [];
  for (let m = 1; m <= 12; m++) {
    const key = `${year}-${String(m).padStart(2, "0")}`;
    months.push({ key, m, label: MONTH_NAMES[m - 1], amt: 0 });
  }
  const byCat = {};
  for (const e of mine) {
    const m = Number(String(e.d).slice(5, 7));
    if (m >= 1 && m <= 12) months[m - 1].amt += e.amt;
    byCat[e.cat] = (byCat[e.cat] || 0) + e.amt;
  }

  const thisYear = String(today).slice(0, 4) === String(year);
  const elapsed = thisYear ? Math.max(1, Number(String(today).slice(5, 7))) : 12;
  const active = months.filter((x) => x.amt > 0).length;
  const biggest = months.reduce((b, x) => (!b || x.amt > b.amt ? x : b), null);

  const cats = Object.entries(byCat)
    .map(([key, amt]) => ({ key, amt, share: total ? amt / total : 0 }))
    .sort((a, b) => b.amt - a.amt);

  return {
    year, total, count: mine.length, months, cats, biggest,
    elapsed, activeMonths: active, isCurrent: thisYear,
    perMonth: Math.round(total / elapsed),
    projected: thisYear ? Math.round((total / elapsed) * 12) : total,
    items: mine,
  };
}

/** Every year that has something in it, newest first, current year always
 *  present so a fresh install has somewhere to stand. */
function expenseYears(items, today) {
  const set = new Set((items || []).map((e) => String(e.d).slice(0, 4)).filter((y) => /^\d{4}$/.test(y)));
  set.add(String(today).slice(0, 4));
  return [...set].sort().reverse();
}

/** A contiguous month-by-month series from the first entry to today, with no
 *  holes. A line chart that skips empty months draws a slope between
 *  January and April and calls it a trend. */
function expenseAllTimeSeries(items, today) {
  const withDates = (items || []).filter((e) => typeof e.d === "string" && e.d.length >= 7);
  if (!withDates.length) return [];
  const keys = withDates.map((e) => e.d.slice(0, 7)).sort();
  let cursor = keys[0];
  const end = String(today).slice(0, 7);
  const totals = {};
  for (const e of withDates) {
    const k = e.d.slice(0, 7);
    totals[k] = (totals[k] || 0) + e.amt;
  }
  const out = [];
  let guard = 0;
  while (cursor <= end && guard++ < 600) {
    out.push({ key: cursor, amt: totals[cursor] || 0 });
    cursor = shiftMonthKey(cursor, 1);
  }
  return out;
}

function loadExpenses() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY_EXPENSES) || "null");
    if (!raw || typeof raw !== "object") throw 0;
    const items = (Array.isArray(raw.items) ? raw.items : [])
      .filter((e) => e && Number.isFinite(e.amt) && e.amt > 0 && typeof e.d === "string")
      .map((e) => ({
        id: e.id || makeId(),
        amt: Math.round(e.amt),
        cat: typeof e.cat === "string" ? e.cat : "other",
        note: typeof e.note === "string" ? e.note.slice(0, 120) : "",
        d: e.d.slice(0, 10),
        at: Number.isFinite(e.at) ? e.at : 0,
        // v54: which recurring rule produced this, if any. Kept even after
        // the rule is deleted, so the history still explains itself.
        ...(e.rule ? { rule: e.rule } : {}),
      }));
    const cats = Array.isArray(raw.cats) && raw.cats.length
      ? raw.cats.filter((c) => c && typeof c.key === "string")
      : EXPENSE_CATS;
    return {
      items,
      cats,
      currency: EXPENSE_CURRENCIES.includes(raw.currency) ? raw.currency : "₹",
    };
  } catch {
    return { items: [], cats: EXPENSE_CATS, currency: "₹" };
  }
}

function saveExpenses(state) {
  try { localStorage.setItem(STORAGE_KEY_EXPENSES, JSON.stringify(state)); } catch {}
}

// ---- editable expense categories (v54) ------------------------------------
//
// `cats` has been persisted since v46 but there was no way to change it, so
// the seven starters were effectively hard-coded: "education", "cricket",
// "recharge" had nowhere to go and everything landed in `other`. Same shape
// as the tag editor on purpose -- one pattern for "a list of labelled,
// coloured things the user owns".

const EXPENSE_CAT_COLORS = [
  "#F59E0B", "#60A5FA", "#FB7185", "#C084FC", "#5EEAD4",
  "#34D399", "#F472B6", "#38BDF8", "#FBBF24", "#A78BFA",
  "#7EE787", "#9AA4B2",
];
const EXPENSE_GLYPHS = ["◍", "▸", "▤", "◆", "✚", "★", "·", "▲", "●", "◈", "✦", "▣"];
const MAX_EXPENSE_CATS = 16;

/** Stable key from a label. Collisions get a numeric suffix rather than
 *  silently merging two categories into one. */
function expenseCatKey(label, taken = []) {
  const base = String(label || "").toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 14) || "cat";
  let key = base, n = 2;
  while (taken.includes(key)) key = `${base}${n++}`;
  return key;
}

function addExpenseCat(cats, label) {
  const l = String(label || "").trim().slice(0, 16);
  if (!l || cats.length >= MAX_EXPENSE_CATS) return cats;
  const key = expenseCatKey(l, cats.map((c) => c.key));
  const used = new Set(cats.map((c) => c.color));
  const color = EXPENSE_CAT_COLORS.find((c) => !used.has(c)) || EXPENSE_CAT_COLORS[cats.length % EXPENSE_CAT_COLORS.length];
  return [...cats, { key, label: l, color, glyph: EXPENSE_GLYPHS[cats.length % EXPENSE_GLYPHS.length] }];
}

function renameExpenseCat(cats, key, label) {
  const l = String(label || "").trim().slice(0, 16);
  if (!l) return cats;
  return cats.map((c) => (c.key === key ? { ...c, label: l } : c));
}

function recolourExpenseCat(cats, key, color) {
  if (!/^#[0-9a-fA-F]{6}$/.test(color)) return cats;
  return cats.map((c) => (c.key === key ? { ...c, color } : c));
}

/** Removing a category must not orphan the spending filed under it, or that
 *  money silently vanishes from every total. Entries are MOVED, never
 *  deleted -- a category is a label, not a container. */
function removeExpenseCat(state, key, moveTo) {
  if (state.cats.length <= 1) return state;
  const target = state.cats.find((c) => c.key === moveTo && c.key !== key)
    || state.cats.find((c) => c.key !== key);
  return {
    ...state,
    cats: state.cats.filter((c) => c.key !== key),
    items: state.items.map((e) => (e.cat === key ? { ...e, cat: target.key } : e)),
  };
}

// ---- recurring entries (v54) ----------------------------------------------
//
// "every 1st of the month add 4000 as education" -- his words. There is no
// server to run a cron on, and a PWA is not running when it is closed, so a
// rule cannot fire on time. It fires on the next OPEN, and it back-dates the
// entry to the day it was due, because the rent left on the 1st whether or
// not the app was looking.
//
// Two failure modes this is built to avoid:
//   * double-firing. The rule records the last date it fired; nothing on or
//     before that ever fires again, however many times the app re-opens or
//     React re-runs an effect.
//   * a brand-new rule back-filling a year of history it was never there
//     for. Nothing before `createdOn` ever fires.

const STORAGE_KEY_RECURRING = "tasksh.recurring.v1";
const RECUR_MAX_CATCHUP = 24;     // occurrences one open may add
const RECUR_MAX_SCAN = 400;       // days to look back, so a stale rule is bounded

function isoAddDays(iso, n) {
  const [y, m, d] = String(iso).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d) + n * 86400000).toISOString().slice(0, 10);
}
function isoDayOfWeek(iso) {
  const [y, m, d] = String(iso).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}
function isoDaysInMonth(iso) {
  const [y, m] = String(iso).split("-").map(Number);
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

/** Does this rule fire on this date?
 *
 *  Monthly rules clamp: "the 31st" in February is the 28th (or 29th). The
 *  alternative -- skipping February entirely -- means a monthly bill is paid
 *  eleven times a year, which is worse and much harder to notice. */
function recurFiresOn(rule, iso) {
  if (!rule || rule.active === false) return false;
  if (rule.every === "day") return true;
  if (rule.every === "week") return isoDayOfWeek(iso) === Number(rule.day);
  if (rule.every === "month") {
    const dom = Number(String(iso).slice(8, 10));
    return dom === Math.min(Math.max(1, Number(rule.day) || 1), isoDaysInMonth(iso));
  }
  return false;
}

/** Every date this rule owes, oldest first. Pure: the caller decides what to
 *  do with them, which is what makes this testable without a clock. */
function recurDueDates(rule, todayIso) {
  if (!rule || rule.active === false) return [];
  const floor = [rule.lastRun ? isoAddDays(rule.lastRun, 1) : null, rule.createdOn, isoAddDays(todayIso, -RECUR_MAX_SCAN)]
    .filter(Boolean)
    .sort()
    .pop();
  const out = [];
  for (let d = floor; d <= todayIso; d = isoAddDays(d, 1)) {
    if (recurFiresOn(rule, d)) out.push(d);
    if (out.length >= RECUR_MAX_CATCHUP) break;
  }
  return out;
}

/** One due date -> one expense entry. Stamped with the rule id so the row
 *  can say where it came from and a deleted rule's history stays readable. */
function recurToExpense(rule, iso) {
  return {
    id: makeId(),
    amt: Math.round(rule.amount),
    cat: rule.cat,
    note: rule.name || "",
    d: iso,
    at: 0,
    rule: rule.id,
  };
}

/** Fire everything owed. Returns the new rule list AND the new entries, so
 *  the caller writes each store exactly once. */
function runRecurring(rules, todayIso) {
  const added = [];
  const next = (rules || []).map((r) => {
    const due = recurDueDates(r, todayIso);
    if (!due.length) return r;
    for (const iso of due) added.push(recurToExpense(r, iso));
    return { ...r, lastRun: due[due.length - 1] };
  });
  return { rules: next, added };
}

function loadRecurring() {
  const raw = loadStored(STORAGE_KEY_RECURRING, []);
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((r) => r && Number.isFinite(Number(r.amount)) && Number(r.amount) > 0)
    .map((r) => ({
      id: r.id || makeId(),
      kind: "expense",
      every: ["day", "week", "month"].includes(r.every) ? r.every : "month",
      day: Number(r.day) || 1,
      amount: Math.round(Number(r.amount)),
      cat: typeof r.cat === "string" ? r.cat : "other",
      name: typeof r.name === "string" ? r.name.slice(0, 40) : "",
      active: r.active !== false,
      createdOn: typeof r.createdOn === "string" ? r.createdOn : getISTDateString(0),
      lastRun: typeof r.lastRun === "string" ? r.lastRun : null,
    }))
    .slice(0, 40);
}

/** Human sentence for a rule, used in the list and in the AI diff.
 *
 *  `rule.amount` is in MINOR units (paise), like every other amount in this
 *  tool -- see parseAmount. Interpolating it raw printed "\u20b9400000" for a
 *  \u20b94000 rule, which is the kind of mistake a money tracker only has to
 *  make once. */
function recurLabel(rule, cats = [], currency = "₹") {
  const cat = cats.find((c) => c.key === rule.cat);
  const when = rule.every === "day" ? "every day"
    : rule.every === "week" ? `every ${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][Number(rule.day) || 0]}`
    : `every ${ordinal(Number(rule.day) || 1)} of the month`;
  return `${formatMoney(rule.amount, currency)} ${cat ? cat.label : rule.cat}${rule.name ? ` · ${rule.name}` : ""} — ${when}`;
}

/** The model talks in rupees, the store keeps paise.
 *
 *  "add 4000 as education" means \u20b94000, and storing 4000 would file
 *  \u20b940. One conversion, in one place, so the two never meet unconverted. */
const AI_MAJOR_TO_MINOR = 100;
function aiAmountToMinor(n) {
  return Math.round(Number(n) * AI_MAJOR_TO_MINOR);
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

/** One shared money store (v54).
 *
 *  Expenses used to live in `useState` inside ExpensesTool, which was fine
 *  while the tool was the only thing that touched them. Three things need
 *  them now: the tool, the recurring runner that fires on app open, and the
 *  companion, which could not see a single rupee. Prop-drilling through
 *  ToolsView for all three would be worse than a twelve-line store.
 *
 *  Rules persist to their own key rather than inside the expenses blob, so a
 *  backup keeps one key per concern.
 */
const expenseStore = (() => {
  let state = null;
  const subs = new Set();
  const read = () => ({ ...loadExpenses(), rules: loadRecurring() });
  const get = () => (state || (state = read()));
  const set = (next) => {
    const v = typeof next === "function" ? next(get()) : next;
    state = v;
    saveExpenses({ items: v.items, cats: v.cats, currency: v.currency });
    try { localStorage.setItem(STORAGE_KEY_RECURRING, JSON.stringify(v.rules || [])); } catch {}
    subs.forEach((f) => f(v));
  };
  return {
    get, set,
    reload() { state = null; subs.forEach((f) => f(get())); },
    sub(f) { subs.add(f); return () => subs.delete(f); },
  };
})();

function useExpenseStore() {
  const [, bump] = useState(0);
  useEffect(() => expenseStore.sub(() => bump((n) => n + 1)), []);
  return [expenseStore.get(), expenseStore.set];
}

/** Vertical bars, one per day. Not a library: the whole app is one file with
 *  no chart dependency, and a month of bars is forty lines of SVG. */
function DayBars({ series, currency, max, onPick, picked, today }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const peak = Math.max(1, max || Math.max(...series.map((s) => s.amt), 1));

  return (
    <div className="xp-bars" role="img" aria-label={`daily spending, peak ${formatMoney(peak, currency)}`}>
      {series.map((s) => {
        const frac = s.amt / peak;
        const isToday = s.d === today;
        return (
          <button
            key={s.d}
            className={`xp-bar ${picked === s.d ? "on" : ""} ${isToday ? "today" : ""} ${s.amt ? "" : "empty"}`}
            style={{ "--h": `${mounted ? Math.max(s.amt ? 3 : 1, frac * 100) : 0}%` }}
            onClick={() => onPick && onPick(picked === s.d ? null : s.d)}
            aria-label={`${s.d}: ${formatMoney(s.amt, currency)}`}
            title={`${s.d} · ${formatMoney(s.amt, currency)}`}
          >
            <span />
          </button>
        );
      })}
    </div>
  );
}

/** Amount first, then category: the order the money arrives in your head.
 *  The keypad is here rather than relying on the phone keyboard because a
 *  numeric keyboard still costs a layout shift and half the screen, and this
 *  one can carry +, − and a decimal point that actually behave. */
function ExpenseComposer({ cats, currency, onAdd, defaultCat, nameIndex = [] }) {
  const [text, setText] = useState("");
  const [cat, setCat] = useState(defaultCat || cats[0].key);
  const [note, setNote] = useState("");
  const [flash, triggerFlash] = useFlash();
  const parsed = parseAmount(text);

  // Suggestions are the point of naming an entry: tapping one fills the
  // name, the category AND the price you normally pay, so a repeat purchase
  // is one tap rather than three fields.
  const hints = useMemo(() => suggestNames(nameIndex, note, 5), [nameIndex, note]);
  const useHint = (h) => {
    setNote(h.name);
    setCat(h.cat);
    if (!text) setText(String(h.lastAmt / 100).replace(/\.00$/, ""));
    sound.toggle();
  };

  const key = (k) => {
    sound.tick();
    if (k === "del") { setText((t) => t.slice(0, -1)); return; }
    if (k === "." && /\.\d*$/.test(text)) return;          // one point per term
    if ((k === "+" || k === "-") && /[+-]$/.test(text)) {
      setText((t) => t.slice(0, -1) + k);                  // swap the operator
      return;
    }
    if ((k === "+" || k === "-") && !text) return;
    setText((t) => (t + k).slice(0, 18));
  };

  const commit = () => {
    if (!parsed) { triggerFlash(); sound.error(); return; }
    onAdd({ amt: parsed, cat, note: note.trim().slice(0, 120) });
    setText("");
    setNote("");
    sound.cash();
  };

  return (
    <div className={`xp-composer ${flash ? "shake" : ""}`}>
      <div className="xp-amount-row">
        <span className="xp-cur">{currency}</span>
        <span className={`xp-amount ${text ? "" : "ghost"}`}>{text || "0"}</span>
        {parsed !== null && /[+-]/.test(text) && (
          <span className="xp-amount-sum">= {formatMoney(parsed, currency)}</span>
        )}
      </div>

      <div className="xp-cats">
        {cats.map((c) => (
          <button
            key={c.key}
            className={`xp-cat ${cat === c.key ? "on" : ""}`}
            style={{ "--cc": c.color }}
            onClick={() => { setCat(c.key); sound.toggle(); }}
          >
            <span className="xp-cat-glyph">{c.glyph}</span>
            {c.label}
          </button>
        ))}
      </div>

      <input
        className="xp-note"
        placeholder="what was it? e.g. sweets"
        value={note}
        maxLength={120}
        onChange={(e) => setNote(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && commit()}
      />
      {hints.length > 0 && (
        <div className="xp-hints">
          {hints.map((h) => (
            <button key={h.key} className="xp-hint" onClick={() => useHint(h)}>
              <span className="xp-hint-name">{h.name}</span>
              <span className="xp-hint-amt">{formatMoney(h.lastAmt, currency, { compact: true })}</span>
            </button>
          ))}
        </div>
      )}

      {/* Four columns, operators down the right-hand edge where a thumb
          already is. DOM order IS the layout -- a grid that relies on
          auto-flow for a keypad reflows the moment a key is added. */}
      <div className="xp-pad">
        {["1", "2", "3", "del",
          "4", "5", "6", "+",
          "7", "8", "9", "-",
          ".", "0"].map((k) => (
          <button
            key={k}
            className={`xp-key ${k === "+" || k === "-" ? "op" : ""} ${k === "del" ? "op" : ""}`}
            onClick={() => key(k)}
            aria-label={k === "del" ? "Delete" : k === "-" ? "Minus" : k === "+" ? "Plus" : k}
          >
            {k === "del" ? "⌫" : k === "-" ? "−" : k}
          </button>
        ))}
        <button className="xp-key add" disabled={parsed === null} onClick={commit}>add</button>
      </div>
    </div>
  );
}

function ExpenseRow({ item, cat, currency, onDelete, onRepeat }) {
  const swipe = useSwipeMark({ onLeft: () => onDelete(item.id), threshold: 72 });
  return (
    <div className="swipe-rail">
      <div className={`swipe-hint left ${swipe.dx < 0 ? "show" : ""} ${swipe.armed === "left" ? "armed" : ""}`}>
        <span>✗ delete</span>
      </div>
      <div
        className="xp-row"
        style={{
          transform: swipe.dx ? `translateX(${Math.min(0, swipe.dx)}px)` : undefined,
          transition: swipe.dragging ? "none" : "transform 200ms cubic-bezier(.65,0,.35,1)",
        }}
        {...swipe.handlers}
      >
        <span className="xp-row-dot" style={{ background: cat.color }} />
        <span className="xp-row-main">
          <span className="xp-row-cat">{item.note || cat.label}</span>
          {item.note && <span className="xp-row-sub">{cat.label}</span>}
        </span>
        <span className="xp-row-amt">{formatMoney(item.amt, currency)}</span>
        <button className="xp-repeat" onClick={() => onRepeat(item)} aria-label="Log this again" title="log again">
          ↻
        </button>
      </div>
    </div>
  );
}

/** Spend per named item. The point of naming an entry is being able to ask
 *  "how much do I actually spend on sweets", and that question needs a
 *  table, not a pie. */
function ExpenseNameTable({ rows, currency, catOf, limit = 10 }) {
  const [all, setAll] = useState(false);
  if (!rows.length) {
    return <div className="xp-empty-small">nothing named yet — give an entry a name and it shows up here</div>;
  }
  const peak = rows[0].total;
  const shown = all ? rows : rows.slice(0, limit);
  return (
    <>
      <div className="xp-names">
        {shown.map((r) => (
          <div key={r.key} className="xp-name-row">
            <span className="xp-name-bar" style={{ width: `${Math.max(2, (r.total / peak) * 100)}%`, background: catOf(r.cat).color }} />
            <span className="xp-name-label">{r.label}</span>
            <span className="xp-name-n">×{r.count}</span>
            <span className="xp-name-total">{formatMoney(r.total, currency, { compact: true })}</span>
          </div>
        ))}
      </div>
      {rows.length > limit && (
        <button className="xp-more" onClick={() => { setAll(!all); sound.click(); }}>
          {all ? "show less" : `+${rows.length - limit} more`}
        </button>
      )}
    </>
  );
}

/** Every month you have ever logged, as one line. Contiguous by
 *  construction: a line that skips empty months draws a slope between
 *  January and April and calls it a trend. */
function ExpenseLine({ series, currency, height = 76 }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  if (series.length < 2) {
    return <div className="xp-empty-small">one month of history so far — the line needs two</div>;
  }
  const W = 300, H = height, pad = 4;
  const peak = Math.max(1, ...series.map((s) => s.amt));
  const x = (i) => pad + (i / (series.length - 1)) * (W - pad * 2);
  const y = (v) => H - pad - (v / peak) * (H - pad * 2);
  const d = series.map((s, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(s.amt).toFixed(1)}`).join(" ");
  const area = `${d} L${x(series.length - 1).toFixed(1)},${H - pad} L${x(0).toFixed(1)},${H - pad} Z`;
  const last = series[series.length - 1];
  return (
    <div className="xp-line-wrap">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="none" className="xp-line">
        <path d={area} className="xp-line-area" style={{ opacity: mounted ? 1 : 0 }} />
        <path d={d} className="xp-line-path" style={{ opacity: mounted ? 1 : 0 }} />
        <circle cx={x(series.length - 1)} cy={y(last.amt)} r="3" className="xp-line-dot" />
      </svg>
      <div className="xp-line-ends">
        <span>{series[0].key}</span>
        <span>peak {formatMoney(peak, currency, { compact: true })}</span>
        <span>{last.key}</span>
      </div>
    </div>
  );
}

/** Twelve bars, one per month. Tap one to open that month. */
function ExpenseYearBars({ months, currency, onPick, current }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const peak = Math.max(1, ...months.map((m) => m.amt));
  return (
    <div className="xp-year-bars">
      {months.map((m) => (
        <button
          key={m.key}
          className={`xp-year-bar ${m.amt ? "" : "empty"} ${m.key === current ? "on" : ""}`}
          onClick={() => onPick(m)}
          aria-label={`${m.label}: ${formatMoney(m.amt, currency)}`}
          title={`${m.label} · ${formatMoney(m.amt, currency)}`}
        >
          <span className="xp-year-col">
            <span style={{ height: `${mounted ? Math.max(m.amt ? 3 : 1, (m.amt / peak) * 100) : 0}%` }} />
          </span>
          <span className="xp-year-m">{m.label[0]}</span>
        </button>
      ))}
    </div>
  );
}

/** Recurring rules + the category editor (v54).
 *
 *  Both live behind one tab because they are the two things you set up once
 *  and then forget -- unlike `add`, which is a ten-second daily action and
 *  must not grow a settings panel.
 */
function ExpenseRules({ state, setState, today, showCats, setShowCats, catDraft, setCatDraft, catArmed, setCatArmed }) {
  const [amount, setAmount] = useState("");
  const [cat, setCat] = useState(state.cats[0]?.key || "other");
  const [name, setName] = useState("");
  const [every, setEvery] = useState("month");
  const [day, setDay] = useState(1);
  const [flash, triggerFlash] = useFlash();

  const catOf = (k) => state.cats.find((c) => c.key === k) || { key: k, label: k, color: "#9AA4B2", glyph: "·" };
  const rules = state.rules || [];

  const addRule = () => {
    const amt = parseAmount(amount);
    if (!amt || amt <= 0) { triggerFlash(); sound.error(); return; }
    setState((m) => ({ ...m, rules: [...(m.rules || []), {
      id: makeId(), kind: "expense", every, day: Number(day) || 1,
      amount: Math.round(amt), cat, name: name.trim().slice(0, 40),
      active: true, createdOn: today, lastRun: null,
    }] }));
    setAmount(""); setName("");
    sound.success();
  };

  const toggle = (id) => {
    setState((m) => ({ ...m, rules: m.rules.map((r) => (r.id === id ? { ...r, active: !r.active } : r)) }));
    sound.toggle();
  };
  const drop = (id) => {
    setState((m) => ({ ...m, rules: m.rules.filter((r) => r.id !== id) }));
    sound.delete();
  };

  const addCat = () => {
    const l = catDraft.trim();
    if (!l) { sound.error(); return; }
    setState((m) => ({ ...m, cats: addExpenseCat(m.cats, l) }));
    setCatDraft(""); sound.success();
  };

  return (
    <>
      <div className="xp-section">
        <span>AUTOMATIC</span>
        <span className="xp-section-note">added on the day it is due</span>
      </div>

      <div className={`xp-rule-form ${flash ? "shake" : ""}`}>
        <div className="xp-rule-row">
          <input className="xp-rule-amt" inputMode="decimal" placeholder="4000"
                 value={amount} onChange={(e) => setAmount(e.target.value)} aria-label="Amount" />
          <input className="xp-rule-name" placeholder="what for…" maxLength={40}
                 value={name} onChange={(e) => setName(e.target.value)} aria-label="Name" />
        </div>
        <div className="duration-chips xp-rule-cats">
          {state.cats.map((c) => (
            <button key={c.key} className={cat === c.key ? "active" : ""} style={{ "--ac": c.color }}
                    onClick={() => { setCat(c.key); sound.click(); }}>{c.glyph} {c.label}</button>
          ))}
        </div>
        <div className="duration-chips">
          {[["month", "monthly"], ["week", "weekly"], ["day", "daily"]].map(([k, l]) => (
            <button key={k} className={every === k ? "active" : ""}
                    onClick={() => { setEvery(k); setDay(k === "week" ? 1 : 1); sound.click(); }}>{l}</button>
          ))}
        </div>
        {every !== "day" && (
          <div className="duration-chips xp-rule-days">
            {every === "week"
              ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
                  <button key={d} className={Number(day) === i ? "active" : ""}
                          onClick={() => { setDay(i); sound.click(); }}>{d}</button>
                ))
              : [1, 5, 10, 15, 20, 25, 28, 31].map((d) => (
                  <button key={d} className={Number(day) === d ? "active" : ""}
                          onClick={() => { setDay(d); sound.click(); }}>{ordinal(d)}</button>
                ))}
          </div>
        )}
        <div className="xp-rule-preview">
          {recurLabel({ amount: parseAmount(amount) || 0, cat, name, every, day }, state.cats, state.currency)}
        </div>
        <button className="note-btn save xp-rule-add" onClick={addRule}>add rule</button>
      </div>

      {rules.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">no automatic entries yet</div>
        </div>
      ) : (
        <div className="xp-rule-list">
          {rules.map((r) => (
            <div key={r.id} className={`xp-rule-card ${r.active ? "" : "off"}`} style={{ "--cc": catOf(r.cat).color }}>
              <button className="xp-rule-main" onClick={() => toggle(r.id)}>
                <span className="xp-rule-label">{recurLabel(r, state.cats, state.currency)}</span>
                <span className="xp-rule-meta">
                  {r.active ? "on" : "paused"}
                  {r.lastRun ? ` · last ${r.lastRun}` : " · not fired yet"}
                </span>
              </button>
              <button className="del-btn" onClick={() => drop(r.id)} aria-label="Delete rule">
                <svg viewBox="0 0 24 24" width="13" height="13">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="xp-section">
        <span>CATEGORIES</span>
        <button className="note-btn" onClick={() => { setShowCats(!showCats); sound.click(); }}>
          {showCats ? "done" : "edit"}
        </button>
      </div>

      {!showCats ? (
        <div className="duration-chips xp-cat-preview">
          {state.cats.map((c) => (
            <span key={c.key} className="xp-cat-chip" style={{ "--cc": c.color }}>{c.glyph} {c.label}</span>
          ))}
        </div>
      ) : (
        <div className="xp-cat-edit">
          {state.cats.map((c) => {
            const used = state.items.filter((e) => e.cat === c.key).length;
            return (
              <div className="tag-row" key={c.key}>
                <button className="tag-dot swatch" style={{ background: c.color }} aria-label={`Recolour ${c.label}`}
                        onClick={() => {
                          const i = EXPENSE_CAT_COLORS.indexOf(c.color);
                          setState((m) => ({ ...m, cats: recolourExpenseCat(m.cats, c.key, EXPENSE_CAT_COLORS[(i + 1) % EXPENSE_CAT_COLORS.length]) }));
                          sound.click();
                        }} />
                <input className="tag-input" value={c.label} maxLength={16}
                       onChange={(e) => setState((m) => ({ ...m, cats: renameExpenseCat(m.cats, c.key, e.target.value) }))} />
                <span className="tag-use">{used}</span>
                {catArmed === c.key ? (
                  <button className="tag-del armed" onClick={() => {
                    setState((m) => removeExpenseCat(m, c.key));
                    setCatArmed(null); sound.delete();
                  }}>sure?</button>
                ) : (
                  <button className="tag-del" disabled={state.cats.length <= 1}
                          onClick={() => { setCatArmed(c.key); sound.click(); }}>×</button>
                )}
              </div>
            );
          })}
          <div className="tag-row">
            <input className="tag-input" placeholder="new category…" maxLength={16}
                   value={catDraft} onChange={(e) => setCatDraft(e.target.value)}
                   onKeyDown={(e) => e.key === "Enter" && addCat()} />
            <button className="tag-add" disabled={state.cats.length >= MAX_EXPENSE_CATS} onClick={addCat}>add</button>
          </div>
          <div className="xp-cat-note">
            deleting a category moves its spending to another one — the money is never thrown away.
          </div>
        </div>
      )}
    </>
  );
}

function ExpensesTool() {
  // v54: one shared store, because the recurring runner and the companion
  // write here too. Writing is still "set the whole object", same as the
  // useState it replaced.
  const [state, setState] = useExpenseStore();
  const [month, setMonth] = useState(() => expenseMonthKey(getISTDateString(0)));
  const [view, setView] = useState("add");
  const [pickedDay, setPickedDay] = useState(null);
  const [armed, setArmed] = useState(null);
  const [showCats, setShowCats] = useState(false);
  const [catDraft, setCatDraft] = useState("");
  const [catArmed, setCatArmed] = useState(null);
  const today = getISTDateString(0);

  const catOf = useCallback(
    (key) => state.cats.find((c) => c.key === key) || { key, label: key, color: "#9AA4B2", glyph: "·" },
    [state.cats]
  );

  const sum = useMemo(() => summariseExpenses(state.items, month, today), [state.items, month, today]);
  const nameIndex = useMemo(() => expenseNameIndex(state.items), [state.items]);
  const [year, setYear] = useState(() => String(getISTDateString(0)).slice(0, 4));
  const yearSum = useMemo(() => summariseYear(state.items, year, today), [state.items, year, today]);
  const allTime = useMemo(() => expenseAllTimeSeries(state.items, today), [state.items, today]);
  const years = useMemo(() => expenseYears(state.items, today), [state.items, today]);
  const monthNames = useMemo(
    () => summariseByName(state.items.filter((e) => expenseMonthKey(e.d) === month), (c) => catOf(c).label),
    [state.items, month, catOf]
  );
  const yearNames = useMemo(
    () => summariseByName(yearSum.items, (c) => catOf(c).label),
    [yearSum.items, catOf]
  );
  const series = useMemo(() => expenseDailySeries(state.items, month), [state.items, month]);
  const days = useMemo(() => groupExpensesByDay(state.items, month), [state.items, month]);
  const vsPrev = useMemo(() => compareToPreviousMonth(state.items, month, today), [state.items, month, today]);

  const add = ({ amt, cat, note }) => {
    setState((s) => ({
      ...s,
      items: [...s.items, { id: makeId(), amt, cat, note, d: today, at: Date.now() }],
    }));
    setMonth(expenseMonthKey(today));
  };

  const repeat = (item) => {
    setState((s) => ({
      ...s,
      items: [...s.items, { id: makeId(), amt: item.amt, cat: item.cat, note: item.note, d: today, at: Date.now() }],
    }));
    setMonth(expenseMonthKey(today));
    sound.success();
  };

  const del = (id) => {
    setState((s) => ({ ...s, items: s.items.filter((e) => e.id !== id) }));
    sound.delete();
  };

  const exportCSV = () => {
    try {
      const blob = new Blob([expensesToCSV(state.items, state.cats)], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `expenses-${month}.csv`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      sound.success();
    } catch { sound.error(); }
  };

  const lastFew = useMemo(
    () => [...state.items].sort((a, b) => (b.at || 0) - (a.at || 0)).slice(0, 4),
    [state.items]
  );

  const dayDetail = pickedDay ? (state.items || []).filter((e) => e.d === pickedDay) : null;

  return (
    <div className="xp">
      <div className="xp-month">
        <button onClick={() => { setMonth(shiftMonthKey(month, -1)); setPickedDay(null); sound.click(); }} aria-label="Previous month">‹</button>
        <div className="xp-month-mid">
          <span className="xp-month-label">{expenseMonthLabel(month)}</span>
          <span className="xp-month-total">{formatMoney(sum.total, state.currency)}</span>
        </div>
        <button
          disabled={month >= expenseMonthKey(today)}
          onClick={() => { setMonth(shiftMonthKey(month, 1)); setPickedDay(null); sound.click(); }}
          aria-label="Next month"
        >›</button>
      </div>

      <div className="xp-tabs">
        {[["add", "add"], ["report", "month"], ["year", "year"], ["list", "history"], ["rules", "auto"]].map(([k, l]) => (
          <button key={k} className={view === k ? "on" : ""} onClick={() => { setView(k); sound.whoosh(); }}>{l}</button>
        ))}
      </div>

      {view === "rules" && (
        <ExpenseRules
          state={state}
          setState={setState}
          today={today}
          showCats={showCats} setShowCats={setShowCats}
          catDraft={catDraft} setCatDraft={setCatDraft}
          catArmed={catArmed} setCatArmed={setCatArmed}
        />
      )}

      {view === "add" && (
        <>
          <ExpenseComposer
            cats={state.cats}
            currency={state.currency}
            onAdd={add}
            defaultCat={lastFew[0] ? lastFew[0].cat : undefined}
            nameIndex={nameIndex}
          />
          {lastFew.length > 0 && (
            <>
              <div className="xp-section"><span>AGAIN</span><span className="xp-section-note">one tap to log a repeat</span></div>
              <div className="xp-again">
                {lastFew.map((e) => (
                  <button key={e.id} className="xp-again-btn" style={{ "--cc": catOf(e.cat).color }} onClick={() => repeat(e)}>
                    <span className="xp-again-amt">{formatMoney(e.amt, state.currency)}</span>
                    <span className="xp-again-cat">{e.note || catOf(e.cat).label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
          <div className="xp-quickstats">
            <div><span className="xp-qs-n">{formatMoney(sum.today, state.currency, { compact: true })}</span><span className="xp-qs-l">today</span></div>
            <div><span className="xp-qs-n">{formatMoney(sum.perDay, state.currency, { compact: true })}</span><span className="xp-qs-l">a day</span></div>
            <div><span className="xp-qs-n">{sum.count}</span><span className="xp-qs-l">entries</span></div>
          </div>
        </>
      )}

      {view === "report" && (
        <>
          {sum.count === 0 ? (
            <div className="empty-state">
              <div className="glyph">{"{ }"}</div>
              <div className="msg">nothing logged in {expenseMonthLabel(month)}</div>
            </div>
          ) : (
            <>
              <div className="xp-section">
                <span>BY DAY</span>
                <span className="xp-section-note">
                  {sum.isCurrent ? `${sum.elapsed} of ${sum.span} days` : `${sum.span} days`}
                </span>
              </div>
              <DayBars
                series={series}
                currency={state.currency}
                today={today}
                picked={pickedDay}
                onPick={(d) => { setPickedDay(d); sound.click(); }}
              />
              {pickedDay && (
                <div className="xp-day-pop">
                  <div className="xp-day-head">
                    <span>{pickedDay}</span>
                    <span className="xp-day-total">{formatMoney(sum.byDay[pickedDay] || 0, state.currency)}</span>
                    <button className="axis-pop-close" onClick={() => setPickedDay(null)} aria-label="Close">×</button>
                  </div>
                  {dayDetail.length === 0 ? (
                    <div className="xp-day-empty">nothing spent</div>
                  ) : dayDetail.map((e) => (
                    <div key={e.id} className="xp-day-row">
                      <span className="xp-row-dot" style={{ background: catOf(e.cat).color }} />
                      <span className="xp-day-label">{e.note || catOf(e.cat).label}</span>
                      <span>{formatMoney(e.amt, state.currency)}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="xp-section"><span>WHERE IT WENT</span></div>
              <div className="xp-donut-card">
                <DonutChart
                  size={126}
                  stroke={17}
                  segments={sum.cats.map((c) => ({ key: c.key, value: c.amt, color: catOf(c.key).color }))}
                  centerLabel={formatMoney(sum.total, state.currency, { compact: true })}
                  centerSublabel={expenseMonthLabel(month).split(" ")[0]}
                />
                <div className="xp-legend">
                  {sum.cats.map((c) => (
                    <div key={c.key} className="xp-legend-row">
                      <span className="xp-row-dot" style={{ background: catOf(c.key).color }} />
                      <span className="xp-legend-label">{catOf(c.key).label}</span>
                      <span className="xp-legend-pct">{Math.round(c.share * 100)}%</span>
                      <span className="xp-legend-amt">{formatMoney(c.amt, state.currency, { compact: true })}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="xp-section">
                <span>WHAT YOU BOUGHT</span>
                <span className="xp-section-note">{monthNames.length} named</span>
              </div>
              <ExpenseNameTable rows={monthNames} currency={state.currency} catOf={catOf} />

              <div className="xp-section"><span>THE NUMBERS</span></div>
              <div className="xp-rows">
                {[
                  ["spent", formatMoney(sum.total, state.currency)],
                  [sum.isCurrent ? "a day so far" : "a day", formatMoney(sum.perDay, state.currency)],
                  ["a day you spent", formatMoney(sum.perSpendDay, state.currency)],
                  ["days with spending", `${sum.daysWithSpend} of ${sum.elapsed}`],
                  ["biggest single", sum.biggest ? `${formatMoney(sum.biggest.amt, state.currency)} · ${sum.biggest.note || catOf(sum.biggest.cat).label}` : "—"],
                  ...(sum.isCurrent ? [["on track for", formatMoney(sum.projected, state.currency)]] : []),
                ].map(([k, v]) => (
                  <div key={k} className="xp-rowline"><span>{k}</span><span className="xp-rowline-v">{v}</span></div>
                ))}
              </div>

              {vsPrev && (
                <div className={`xp-compare ${vsPrev.delta > 0 ? "up" : "down"}`}>
                  {vsPrev.delta > 0 ? "▲" : "▼"} {formatMoney(Math.abs(vsPrev.delta), state.currency)}
                  {" "}({Math.abs(Math.round(vsPrev.pct * 100))}%) {vsPrev.delta > 0 ? "more" : "less"} than the
                  {" "}first {vsPrev.upTo} days of {expenseMonthLabel(shiftMonthKey(month, -1)).split(" ")[0]}
                </div>
              )}
            </>
          )}
        </>
      )}

      {view === "year" && (
        <>
          <div className="xp-years">
            {years.map((y) => (
              <button key={y} className={year === y ? "on" : ""}
                      onClick={() => { setYear(y); sound.click(); }}>{y}</button>
            ))}
          </div>

          {yearSum.count === 0 ? (
            <div className="empty-state">
              <div className="glyph">{"{ }"}</div>
              <div className="msg">nothing logged in {year}</div>
            </div>
          ) : (
            <>
              <div className="xp-year-head">
                <span className="xp-year-total">{formatMoney(yearSum.total, state.currency)}</span>
                <span className="xp-year-sub">
                  in {year} · {formatMoney(yearSum.perMonth, state.currency, { compact: true })} a month
                  {yearSum.isCurrent ? ` over ${yearSum.elapsed} month${yearSum.elapsed === 1 ? "" : "s"}` : ""}
                </span>
              </div>

              <div className="xp-section">
                <span>BY MONTH</span>
                <span className="xp-section-note">tap a bar to open it</span>
              </div>
              <ExpenseYearBars
                months={yearSum.months}
                currency={state.currency}
                current={month}
                onPick={(m) => {
                  if (!m.amt) { sound.error(); return; }
                  setMonth(m.key); setView("report"); setPickedDay(null); sound.whoosh();
                }}
              />

              <div className="xp-section"><span>WHERE IT WENT</span></div>
              <div className="xp-donut-card">
                <DonutChart
                  size={118}
                  stroke={16}
                  segments={yearSum.cats.map((c) => ({ key: c.key, value: c.amt, color: catOf(c.key).color }))}
                  centerLabel={formatMoney(yearSum.total, state.currency, { compact: true })}
                  centerSublabel={year}
                />
                <div className="xp-legend">
                  {yearSum.cats.map((c) => (
                    <div key={c.key} className="xp-legend-row">
                      <span className="xp-row-dot" style={{ background: catOf(c.key).color }} />
                      <span className="xp-legend-label">{catOf(c.key).label}</span>
                      <span className="xp-legend-pct">{Math.round(c.share * 100)}%</span>
                      <span className="xp-legend-amt">{formatMoney(c.amt, state.currency, { compact: true })}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="xp-section">
                <span>WHAT YOU BOUGHT</span>
                <span className="xp-section-note">all of {year}</span>
              </div>
              <ExpenseNameTable rows={yearNames} currency={state.currency} catOf={catOf} />

              <div className="xp-section"><span>THE NUMBERS</span></div>
              <div className="xp-rows">
                {[
                  ["spent in " + year, formatMoney(yearSum.total, state.currency)],
                  [yearSum.isCurrent ? "a month so far" : "a month", formatMoney(yearSum.perMonth, state.currency)],
                  ["months with spending", `${yearSum.activeMonths} of ${yearSum.elapsed}`],
                  ["biggest month", yearSum.biggest && yearSum.biggest.amt
                    ? `${yearSum.biggest.label} · ${formatMoney(yearSum.biggest.amt, state.currency)}` : "—"],
                  ["entries", String(yearSum.count)],
                  ...(yearSum.isCurrent ? [["on track for", formatMoney(yearSum.projected, state.currency)]] : []),
                ].map(([k, v]) => (
                  <div key={k} className="xp-rowline"><span>{k}</span><span className="xp-rowline-v">{v}</span></div>
                ))}
              </div>
            </>
          )}

          <div className="xp-section">
            <span>ALL TIME</span>
            <span className="xp-section-note">{allTime.length} month{allTime.length === 1 ? "" : "s"}</span>
          </div>
          <ExpenseLine series={allTime} currency={state.currency} />
        </>
      )}

      {view === "list" && (
        <>
          {days.length === 0 ? (
            <div className="empty-state">
              <div className="glyph">{"{ }"}</div>
              <div className="msg">nothing logged in {expenseMonthLabel(month)}</div>
            </div>
          ) : (
            <>
              <div className="xp-section">
                <span>{sum.count} ENTRIES</span>
                <span className="xp-section-note">swipe left to delete</span>
              </div>
              {days.map((g) => (
                <div key={g.d} className="xp-group">
                  <div className="xp-group-head">
                    <span>{g.d === today ? "today" : g.d.slice(5)}</span>
                    <span className="xp-group-total">{formatMoney(g.total, state.currency)}</span>
                  </div>
                  {g.items.map((e) => (
                    <ExpenseRow key={e.id} item={e} cat={catOf(e.cat)} currency={state.currency}
                                onDelete={del} onRepeat={repeat} />
                  ))}
                </div>
              ))}
            </>
          )}
          <div className="xp-foot">
            <button className="rngi-btn small ghost" onClick={exportCSV}>export csv</button>
            <div className="xp-cur-pick">
              {EXPENSE_CURRENCIES.map((c) => (
                <button key={c} className={state.currency === c ? "on" : ""}
                        onClick={() => { setState((s) => ({ ...s, currency: c })); sound.toggle(); }}>{c}</button>
              ))}
            </div>
          </div>
          <div className="xp-note-foot">
            kept on this device and in every backup. no bank link, no account,
            nothing leaves the phone.
          </div>
        </>
      )}
    </div>
  );
}

const TOOLS = [
  {
    id: "rngdle",
    glyph: "∞",
    name: "rngdle ∞",
    desc: `roll numbers, collect ${RNGI_BADGE_TOTAL} badges, buy your way faster`,
    Component: RngdleTool,
  },
  {
    id: "expenses",
    glyph: "₹",
    name: "expenses",
    desc: "what you spent, by day and by category",
    Component: ExpensesTool,
  },
  {
    id: "pomodoro",
    glyph: "◴",
    name: "pomodoro",
    desc: "focus timer with breaks · rings in the background",
    Component: PomodoroTool,
  },
  {
    id: "captions",
    glyph: "▤",
    name: "ai captions",
    desc: "word-timed captions burned into a clip · under 60s",
    Component: CaptionsTool,
  },
];

/** One true line about each tool, straight from what is on the device.
 *
 *  A grid of four cards that all say what they *could* do is a menu. Each card
 *  now says what it currently holds: how much of the catalogue is collected,
 *  what this month has cost, whether a timer is running. Read-only -- nothing
 *  here writes, and a tool with nothing true to report gets no line at all
 *  rather than a decorative one.
 */
function toolStatuses() {
  const out = {};

  try {
    const save = JSON.parse(localStorage.getItem(STORAGE_KEY_RNGI) || "null");
    if (save) {
      const seen = Object.keys(save.seen || {}).length;
      out.rngdle = `${seen} / ${RNGI_BADGE_TOTAL} badges · ${save.totalRolls || 0} rolls`;
    } else {
      out.rngdle = "not started";
    }
  } catch { /* unreadable save: say nothing rather than something wrong */ }

  try {
    const money = JSON.parse(localStorage.getItem(STORAGE_KEY_EXPENSES) || "null");
    if (money && Array.isArray(money.items)) {
      const month = getISTDateString(0).slice(0, 7);
      const total = money.items
        .filter((e) => expenseMonthKey(e.d) === month)
        .reduce((n, e) => n + (e.amt || 0), 0);
      out.expenses = money.items.length
        ? `${formatMoney(total, money.currency || "₹", { compact: true })} this month`
        : "nothing logged yet";
    }
  } catch { /* ignore */ }

  try {
    const pomo = loadPomodoro();
    const live = pomo.session && pomo.session.running && pomo.session.endsAt;
    if (live) {
      const left = Math.max(0, pomo.session.endsAt - Date.now());
      const mins = Math.ceil(left / 60000);
      out.pomodoro = left > 0
        ? `${(POMO_PHASES[pomo.session.phase] || {}).label || "focus"} · ${mins}m left`
        : "block finished";
    } else {
      out.pomodoro = `${pomo.settings.work}m focus · idle`;
    }
  } catch { /* ignore */ }

  return out;
}

function ToolsView({ onReward }) {
  const [open, setOpen] = useState(null);
  const tool = TOOLS.find((t) => t.id === open) || null;
  // recomputed whenever the grid is shown, so a tool used a moment ago is
  // reflected the next time you come back to the list
  const statuses = useMemo(() => (open ? {} : toolStatuses()), [open]);

  if (tool) {
    const Body = tool.Component;
    return (
      <div className="task-list vault-scroll">
        <div className="section-header tool-header">
          <button className="tool-back" onClick={() => { setOpen(null); sound.whoosh(); }}>
            ← tools
          </button>
          <span>{tool.name.toUpperCase()}</span>
        </div>
        <Body onReward={onReward} />
      </div>
    );
  }

  return (
    <div className="task-list vault-scroll">
      <div className="section-header"><span>TOOLS</span></div>
      <div className="tool-grid">
        {TOOLS.map((t) => (
          <button key={t.id} className="tool-card" onClick={() => { setOpen(t.id); sound.click(); }}>
            <span className="tool-glyph">{t.glyph}</span>
            <span className="tool-name">{t.name}</span>
            <span className="tool-desc">{t.desc}</span>
            {statuses[t.id] && <span className="tool-status">{statuses[t.id]}</span>}
          </button>
        ))}
        {/* An honest empty slot beats padding the grid with things that
            don't exist yet. */}
        <div className="tool-card ghost">
          <span className="tool-glyph">+</span>
          <span className="tool-name">more soon</span>
          <span className="tool-desc">converters, text tools, calculators</span>
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
  (data.habits || []).forEach((h) => consider(h?.id));
  (data.goodHabits || []).forEach((h) => consider(h?.id));
  (data.badHabits || []).forEach((h) => consider(h?.id));
  (data.rewards || []).forEach((r) => consider(r?.id));
  (data.projects || []).forEach((p) => {
    consider(p?.id);
    (p?.tasks || []).forEach((t) => consider(t?.id));
  });
  return max;
}

/** One of today's drawn quests, on the Today tab. Swipe right or tap the
 *  box -- the gesture and the button do the same thing on purpose. */
/** Whether a scroll container has nothing below it.
 *
 *  The edge fade only makes sense while there is something to scroll to; at
 *  the end of the list it would dim the last card for no reason. */
function useScrollFade(deps = []) {
  const ref = useRef(null);
  const [state, setState] = useState({ scrollable: false, atEnd: true });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const overflow = el.scrollHeight - el.clientHeight;
      setState({
        scrollable: overflow > 8,
        atEnd: el.scrollTop >= overflow - 8,
      });
    };
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = typeof ResizeObserver === "function" ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      if (ro) ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [ref, state];
}

/** The day, as ticks.
 *
 *  One pip per thing that was actually scheduled today -- every routine that
 *  has not been and gone, plus the three drawn quests. Filled means done.
 *  The landing tab could say what was happening now and what was open, but it
 *  could not answer "how much of today is left", which is the only question
 *  worth asking at 18:30. The pips are discrete rather than a smooth bar
 *  because the count is small and exact: 3 of 9, not 34%.
 */
function TodayDayRack({ items }) {
  const done = items.filter((i) => i.done).length;
  const total = items.length;
  if (!total) return null;
  return (
    <div className="today-rack" aria-label={`${done} of ${total} done today`}>
      <div className="today-rack-top">
        <span className="today-rack-label">TODAY</span>
        <span className={`today-rack-count ${done === total ? "all" : ""}`}>
          {done}/{total} done
          {done === total ? " · clear" : ` · ${total - done} left`}
        </span>
      </div>
      <div className="today-rack-pips">
        {items.map((it, i) => (
          <span
            key={i}
            className={`tr-pip ${it.done ? "on" : ""} ${it.kind}`}
            style={{ animationDelay: `${i * 18}ms` }}
            title={`${it.label}${it.done ? " — done" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

function TodayQuestRow({ quest, index, onComplete }) {
  const swipe = useSwipeMark({
    onRight: () => { if (!quest.done) onComplete(); },
    enabled: !quest.done,
  });
  return (
    <div className="swipe-rail">
      <div className={`swipe-hint right ${swipe.dx > 0 ? "show" : ""} ${swipe.armed === "right" ? "armed" : ""}`}>
        <span>✓ done</span>
      </div>
      <div
        className={`today-task-row quest ${quest.done ? "is-done" : ""}`}
        style={{
          animationDelay: `${index * 35}ms`,
          transform: swipe.dx ? `translateX(${swipe.dx}px)` : undefined,
          transition: swipe.dragging ? "none" : "transform 200ms cubic-bezier(.65,0,.35,1)",
        }}
        {...swipe.handlers}
      >
        <button
          className={`today-task-check ${quest.done ? "on" : ""}`}
          style={{ "--dc": quest.diff.color }}
          onClick={() => !quest.done && onComplete()}
          aria-label={quest.done ? "Completed" : "Complete quest"}
        />
        <span className={`today-task-text ${quest.done ? "done" : ""}`}>
          {quest.text}
          {/* v53: where the points land, inline. Two tags is the cap, so this
              never pushes the coin figure off a 360px row. */}
          {(quest.tagMeta || []).map((m) => (
            <span key={m.key} className="today-quest-chip" style={{ "--tc": m.color }}>{m.label}</span>
          ))}
        </span>
        <span className="today-quest-tag" style={{ color: quest.diff.color }}>
          {quest.done ? "✓" : `+${quest.diff.coins}◉`}
        </span>
      </div>
    </div>
  );
}

// combined "today" dashboard: next/current routine, top open tasks, and
// any rewards currently affordable -- so none of that requires switching
// tabs to check
function TodayView({ routines, setRoutines, tasks, setTasks, vaultHabits, habits, rewards, setRewards, totalXP, setTab, coins = 0,
                     daily, inventory, onQuestComplete, spend, tags = DEFAULT_TAGS,
                     notes = [], setNotes }) {
  const spendableXP = coins;   // v41: rewards cost coins, XP is progression only
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

  /** v45 (#5): today's drawn quests belong here.
   *
   *  The Tasks tab became the quest board in v35 and Today's "open tasks"
   *  kept listing the old free-form task list, which nothing writes to any
   *  more -- so the one thing you are actually meant to do today was the one
   *  thing the Today tab did not show. Quests come first, hardest first;
   *  whatever is left of the legacy list follows so nothing is orphaned.
   */
  const openQuests = useMemo(() => {
    const picks = (daily && daily.picks) || {};
    const done = (daily && daily.done) || [];
    return DIFFICULTIES
      .map((d) => {
        const id = picks[d.key];
        const item = id ? (inventory || []).find((t) => t.id === id) : null;
        if (!item) return null;
        const tagMeta = dailyTags(item, tags).map((k) => tags.find((t) => t.key === k)).filter(Boolean);
        return { ...item, diff: d, done: done.includes(item.id), tagMeta };
      })
      .filter(Boolean);
  }, [daily, inventory, tags]);

  const openTasks = useMemo(() => {
    const order = { high: 0, mid: 1, low: 2 };
    return [...tasks].filter((t) => !t.done).sort((a, b) => order[a.priority] - order[b.priority]);
  }, [tasks]);

  const questsLeft = openQuests.filter((q) => !q.done).length;

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    sound.success();
  };

  const affordable = useMemo(() => rewards.filter((r) => spendableXP >= r.cost), [rewards, spendableXP]);

  /** v51: this used to hand the reward over without charging for it.
   *
   *  QuestView's copy checked the balance and called spend(); this one did
   *  neither, so every reward claimed from the Today tab was free — and the
   *  same reward cost 100 coins one tab over. Two implementations of one
   *  rule, and only one of them knew the rule. There is one now, passed in
   *  from the root alongside the balance it spends. */
  const claimReward = (id) => {
    const reward = rewards.find((r) => r.id === id);
    if (!reward || coins < reward.cost) { sound.error(); return; }
    if (spend) spend(reward.cost);
    setRewards((prev) =>
      prev.map((r) => (r.id === id ? { ...r, claimed: [...(r.claimed || []), todayStr] } : r))
    );
    sound.success();
    petBus.emit("rewardClaimed");
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
    habits.forEach((h) => add(normaliseHistory(h.history).filter((e) => e.t === "done").map((e) => e.d)));
    return counts;
  }, [routines, vaultHabits, habits]);

  /** What "today" is actually made of: every routine scheduled today, plus
   *  the three drawn quests.
   *
   *  The denominator is deliberately the whole day, not "what is left from
   *  here on". The first version counted only routines not yet finished, so
   *  marking a routine that had already gone by made the total grow -- one
   *  tap read as 1/8 turning into 2/9. A counter whose total moves is not a
   *  counter. Every routine today, every quest today, done or not. */
  const dayItems = useMemo(() => {
    const done = (h) => (h || []).includes(todayStr);
    const routineItems = sorted.map((r) => ({ kind: "routine", label: r.label, done: done(r.history) }));
    const questItems = openQuests.map((q) => ({ kind: "quest", label: q.text, done: q.done }));
    return [...routineItems, ...questItems];
  }, [sorted, todayStr, openQuests]);

  const [fadeRef, fade] = useScrollFade([dayItems.length, openTasks.length, affordable.length]);

  const spotlight = current || next;
  const spotlightIsNow = !!current;
  const nextDoneToday = spotlight ? (spotlight.history || []).includes(todayStr) : false;

  return (
    <div
      ref={fadeRef}
      className={`task-list today-view ${fade.scrollable ? "scrollable" : ""} ${fade.atEnd ? "at-end" : ""}`}
    >
      <TodayDayRack items={dayItems} />
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
          {/* the same seven dots the routine's own card carries, so the
              landing tab can show whether this one is actually holding */}
          <div className="routine-week" aria-label={`${last7Days(spotlight.history).filter((w) => w.on).length} of the last 7 days`}>
            {last7Days(spotlight.history).map((w) => (
              <span key={w.d} className={`rw-dot ${w.on ? "on" : ""} ${w.today ? "today" : ""}`} title={w.d} />
            ))}
            <span className={`rw-count ${last7Days(spotlight.history).some((w) => w.on) ? "has" : ""}`}>
              {last7Days(spotlight.history).filter((w) => w.on).length}/7
            </span>
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
        <span className="today-header-right">
          {questsLeft > 0 && (
            <span className="today-header-left-count">
              {questsLeft} quest{questsLeft === 1 ? "" : "s"} left
            </span>
          )}
          {(openQuests.length > 0 || openTasks.length > 0) && (
            <button className="today-view-all" onClick={() => setTab("tasks")}>
              view all in tasks →
            </button>
          )}
        </span>
      </div>
      {openQuests.length === 0 && openTasks.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">nothing pending — nice</div>
        </div>
      ) : (
        <div className="today-list">
          {openQuests.map((q, i) => (
            <TodayQuestRow
              key={`q${q.id}`}
              quest={q}
              index={i}
              onComplete={() => onQuestComplete && onQuestComplete(q.id, q.diff.coins)}
            />
          ))}
          {openTasks.slice(0, 5).map((t, i) => (
            <div key={t.id} className="today-task-row" style={{ animationDelay: `${(openQuests.length + i) * 35}ms` }}>
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
          {openQuests.length > 0 && (
            <div className="today-quest-note">
              {questsLeft === 0
                ? "every quest done today"
                : `${questsLeft} quest${questsLeft === 1 ? "" : "s"} left · swipe right to complete`}
            </div>
          )}
        </div>
      )}

      <div className="filters today-section-header">
        <span>REWARDS YOU CAN AFFORD</span>
        <span className="today-xp-total"><AnimatedNumber value={coins} /> ◉</span>
      </div>
      {affordable.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">keep earning coins — nothing unlocked yet</div>
        </div>
      ) : (
        <div className="today-list">
          {affordable.map((r, i) => (
            <div key={r.id} className="today-task-row" style={{ animationDelay: `${i * 35}ms` }}>
              <span className="today-task-text">{r.label}</span>
              <span className="today-reward-cost">{r.cost} ◉</span>
              <button className="today-claim-btn" onClick={() => claimReward(r.id)}>
                claim
              </button>
            </div>
          ))}
        </div>
      )}

      {/* v64: the notes lived in a component nobody rendered -- v44 moved
          them out of the vault and never put them anywhere. They are here
          now, under the reward shelf, where a scratchpad belongs. */}
      <VaultNotesSection notes={notes} setNotes={setNotes} />
    </div>
  );
}

function TodoApp() {
  const [tab, setTab] = useState("today");
  // v64: Ctrl+K / Cmd+K opens the palette. Escape closes it. Registered once,
  // on the window, so it works from any tab and from inside an input.
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && String(e.key).toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const [soundOn, toggleSound] = useSoundToggle();
  const changeTab = (t) => {
    if (t !== tab) sound.whoosh();
    setTab(t);
    // With seven tabs the bar can still overflow on a narrow phone or a long
    // pet name. Pull the selected one into view so the active tab is never
    // the one you can't see.
    try {
      const el = document.getElementById(`tab-${t}`);
      el && el.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
    } catch { /* jsdom / old webview */ }
  };
  const [tasks, setTasks] = useState(() => loadStored(STORAGE_KEY_TASKS, seedTasks));
  const [routines, setRoutines] = useState(() => loadStored(STORAGE_KEY_ROUTINES, seedRoutines));
  const [vaultHabits, setVaultHabits] = useState(() => loadStored(STORAGE_KEY_VAULT_HABITS, seedVaultHabits));
  const [projects, setProjects] = useState(() => loadStored(STORAGE_KEY_PROJECTS, seedProjects));
  const [notes, setNotes] = useState(() => loadStored(STORAGE_KEY_NOTES, seedNotes));

  // v54: money lives in a shared store so the companion can read it and
  // recurring rules can fire here, on open, rather than inside a tool the
  // user may not have visited for a week.
  const [money, setMoney] = useExpenseStore();
  const [recurNote, setRecurNote] = useState(null);

  /** Fire anything the recurring rules owe.
   *
   *  Keyed on the IST date string, not a timer: the app is usually resumed
   *  from the background rather than launched, and a setInterval that was
   *  suspended for three days is not going to notice the 1st went past.
   *  runRecurring is idempotent, so a re-render, a re-mount or a double
   *  effect in StrictMode cannot charge the same month twice. */
  const todayStrForRecur = getISTDateString(0);
  useEffect(() => {
    const { rules, added } = runRecurring(expenseStore.get().rules, todayStrForRecur);
    if (!added.length) return;
    setMoney((m) => ({ ...m, rules, items: [...m.items, ...added] }));
    const total = added.reduce((n, e) => n + e.amt, 0);
    setRecurNote(`${added.length} recurring ${added.length === 1 ? "entry" : "entries"} added · ${total}`);
    const t = setTimeout(() => setRecurNote(null), 6000);
    return () => clearTimeout(t);
  }, [todayStrForRecur]);

  // v36: the Tasks tab became an inventory + a daily draw. On the first launch
  // after upgrading, the old task list is folded in rather than discarded --
  // priority maps onto difficulty.
  //
  // v53: items also gained `tags` and `history`, so every load runs through
  // migrateInventory. Cheap, idempotent, and it also repairs an item typed
  // in by hand or restored from a v52 backup.
  const [inventory, setInventory] = useState(() => {
    const inv = loadStored(STORAGE_KEY_INVENTORY, null);
    if (Array.isArray(inv)) return migrateInventory(inv, loadTags());
    const old = loadStored(STORAGE_KEY_TASKS, null);
    return Array.isArray(old) && old.length
      ? migrateInventory(migrateTasksToInventory(old), loadTags())
      : seedInventory;
  });
  // Stamped onto a daily task when it is completed; kept current further
  // down, once routines and the clock are in scope.
  const questDayRef = useRef(getISTDateString(0));
  const [daily, setDaily] = useState(() => loadStored(STORAGE_KEY_DAILY, { day: "", picks: {}, done: [] }));
  // v35 merged good+bad into one list. On first launch after the upgrade the
  // merged key is absent, so fold the two old lists together; mergeHabitLists
  // is arithmetically identity-preserving, so nobody's XP or level moves.
  const [habits, setHabits] = useState(() => {
    const merged = loadStored(STORAGE_KEY_HABITS, null);
    if (Array.isArray(merged)) return merged;
    return mergeHabitLists(
      loadStored(STORAGE_KEY_GOOD_HABITS, seedGoodHabits),
      loadStored(STORAGE_KEY_BAD_HABITS, seedBadHabits),
    );
  });
  const [rewards, setRewards] = useState(() => loadStored(STORAGE_KEY_REWARDS, seedRewards));
  const totalXP = useMemo(
    () => computeTotalXP(habits, inventory),
    [habits, rewards, inventory]
  );
  const currentLevel = useMemo(() => levelFromXP(totalXP).level, [totalXP]);
  const themeCtl = useTheme(currentLevel);
  const petCtl = usePet(currentLevel);
  const { links, setLinks } = useLinks();
  const tagCtl = useTags();
  const [linkTarget, setLinkTarget] = useState(null);   // ref string or null

  // any view can request the link sheet without prop-drilling
  useEffect(() => linkUIBridge.register((ref) => setLinkTarget(ref)), []);

  // One place that knows how to fan a completion out to linked items.
  useEffect(() => linkBridge.register((kind, id, done) => {
    propagateCompletion(
      refOf(kind, id), done, links,
      { setRoutines, setVaultHabits, setHabits },
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
        habits.reduce((m, h) => Math.max(m, computeStreak(normaliseHistory(h.history).filter((e) => e.t === "done").map((e) => e.d))), 0),
        routines.reduce((m, r) => Math.max(m, computeStreak(r.history)), 0)
      ),
      doneToday: habits.filter((h) => habitDoneOn(h, todayStr)).length,
      totalHabits: habits.length,
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
  }, [currentLevel, tasks, habits, routines, vaultHabits, petCtl.pet, todayStr]);

  const achCtl = useAchievements(achSnapshot);

  // v66: the nav needs to know where the selection sits, not just which tab
  // is on, because the magnification and the travelling puck are both
  // functions of distance from it.
  const TAB_DEFS = useMemo(
    () => TAB_DEFS_BASE.map(([id, label]) => [id, id === "pet" ? petCtl.pet.name.toLowerCase() : label]),
    [petCtl.pet.name],
  );
  const activeTabIndex = Math.max(0, TAB_DEFS.findIndex(([id]) => id === tab));


  /** v45: a quest can now be completed from the Tasks board or from Today,
   *  so the rule about paying for it lives in exactly one place. Two buttons
   *  wired to two copies of this is how a quest gets paid for twice. */
  const completeQuest = useCallback((id, coins) => {
    if ((daily.done || []).includes(id)) return;          // paid once, never twice
    // the guard above answers "should this pay?"; the updater below is
    // idempotent anyway, because the two are not the same question and
    // React does not promise the updater runs when you call it
    setDaily((d) => ((d.done || []).includes(id) ? d : { ...d, done: [...(d.done || []), id] }));
    achCtl.addCoins(coins);
    // v53: the same tick also writes the day into the task's own history,
    // which is what the radar and the level read. Stamped with the QUEST day
    // rather than the calendar day -- the board rolls at the first routine,
    // so something finished at 01:00 belongs to the day you were awake for,
    // and dating it tomorrow would let that task be completed twice.
    setInventory((prev) => logDailyDone(prev, id, questDayRef.current));
    sound.success();
    petBus.emit("habitDone");
  }, [daily, achCtl]);

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
  // Backup choice popup. DESIGN.md forbids modals for EDITING -- inline only --
  // but this is a one-shot confirmation with a consequence attached, and
  // burying "this file contains your API keys" in a panel nobody scrolls to is
  // how a key ends up in a group chat. It gets its own moment.
  const [backupAsk, setBackupAsk] = useState(false);
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
        await syncRoutinesToWorker(routines, { force: true });
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

  // BACKUP (v34)
  //
  // Sweeps every `tasksh.*` key out of localStorage rather than listing eight
  // of them by hand. The old export named its keys explicitly and silently
  // dropped the other fifteen -- edited sub-area tags, achievements, wallet,
  // pet, links, themes, sound. You only discovered that on restore, which is
  // the worst possible moment. A list that has to be updated every time a
  // feature adds a key is a list that will be wrong.
  //
  // `full` decides whether AI keys ride along. Default export excludes them
  // (AGENTS.md R12: backups get shared between devices and people). The
  // "with keys" variant is opt-in and says so on the button, because a file
  // that quietly contains credentials is how credentials leak.
  const exportData = (full = false) => {
    try {
      // deviceId is per-install: restoring it onto a second device would
      // make both phones share one push subscription.
      const store = collectStore(full, [STORAGE_KEY_DEVICE_ID]);

      const payload = {
        app: "tasks.sh",
        version: 2,
        exportedAt: new Date().toISOString(),
        containsKeys: full,
        // `store` is the real backup: raw key -> raw JSON string.
        store,
        // `data` is kept so v2 files still restore in an older build, and so
        // the file stays readable by eye.
        data: { tasks, routines, vaultHabits, projects, notes, habits, rewards },
      };

      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const stamp = getISTDateString(0);
      const a = document.createElement("a");
      a.href = url;
      a.download = `tasks-sh-backup-${stamp}${full ? "-with-keys" : ""}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showDataMsg("ok", full ? "backup exported — contains your API keys" : "backup exported");
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
        if (!parsed || typeof parsed !== "object") throw new Error("bad shape");

        // v2: whole-store restore. Write every key back, then reload so each
        // hook re-reads its own slice. Reloading is deliberate -- half these
        // keys are only read in a useState initialiser, so setting them
        // without a reload would leave the UI showing stale values.
        if (parsed.store && typeof parsed.store === "object") {
          const keys = Object.keys(parsed.store).filter((k) => k.startsWith("tasksh."));
          if (!keys.length) throw new Error("empty store");
          for (const k of keys) {
            if (k === STORAGE_KEY_DEVICE_ID) continue;   // never clone a device id
            try { localStorage.setItem(k, parsed.store[k]); } catch {}
          }
          showDataMsg("ok", `restored ${keys.length} keys — reloading`);
          setTimeout(() => window.location.reload(), 700);
          return;
        }

        // v1 fallback: the old eight-array format.
        const data = parsed.data ? parsed.data : parsed;
        if (!data || typeof data !== "object") throw new Error("bad shape");

        const setters = {
          tasks: setTasks,
          routines: setRoutines,
          vaultHabits: setVaultHabits,
          projects: setProjects,
          notes: setNotes,
          habits: setHabits,
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
  // v38: keep the running code fresh, and the data recoverable if it isn't.
  const update = useAppUpdate();
  useCloudAutoBackup();

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
    try { localStorage.setItem(STORAGE_KEY_INVENTORY, JSON.stringify(inventory)); } catch {}
  }, [inventory]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_DAILY, JSON.stringify(daily)); } catch {}
  }, [daily]);

  // Redraw when the quest day rolls over. Keyed on the day STRING rather than
  // a timer so it also fires correctly after the app has been closed for days.
  const questDay = questDayString(routines, nowMinutes);
  // completeQuest is declared further up this component and needs the same
  // date to stamp a task's history with. A ref, not a dependency: it must be
  // readable before this line runs and must never be stale afterwards.
  questDayRef.current = questDay || getISTDateString(0);
  useEffect(() => {
    if (!questDay) return;
    if (daily.day !== questDay) setDaily(drawDaily(inventory, questDay));
  }, [questDay, inventory, daily.day]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_HABITS, JSON.stringify(habits)); } catch {}
  }, [habits]);


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

  const deleteTask = (id) => {
    const snapshot = tasks;
    const gone = tasks.find((t) => t.id === id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
    sound.delete();
    undoBus.offer(() => setTasks(snapshot), gone ? `deleted "${gone.text}"` : "deleted a task");
  };

  const clearDone = () => {
    const snapshot = tasks;
    const n = tasks.filter((t) => t.done).length;
    setTasks((prev) => prev.filter((t) => !t.done));
    sound.whoosh();
    if (n > 0) undoBus.offer(() => setTasks(snapshot), `cleared ${n} done task${n === 1 ? "" : "s"}`);
  };

  return (
    <div className="app-root">
      {achCtl.current && (
        <AchievementToast id={achCtl.current} onDone={achCtl.shift} />
      )}
      <UndoToast />
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
          data={{ routines, habits, vaultHabits }}
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
          --font-mono: 'JetBrains Mono', ui-monospace, monospace;
          --font-ui: 'Inter', system-ui, sans-serif;
          --r-card: 3px;          /* theme-driven: sharp terminal -> soft aurora */
          --r-btn: 3px;
          --r-chip: 3px;
          --border-w: 1px;
          --glow-w: 0px;          /* accent bloom on focus/active surfaces */
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
          font-family: var(--font-ui);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 4vw;
          overflow: hidden;
          position: relative;
          isolation: isolate;
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
          border-radius: calc(var(--r-card) + 8px);
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
          gap: 8px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--track);
        }

        .titlebar-left { display: flex; align-items: center; gap: 8px; }

        .dots { display: flex; gap: 6px; }
        @media (max-width: 400px) { .dots { display: none; } }
        .dot { width: 9px; height: 9px; border-radius: 50%; }
        .dot.red { background: var(--danger); }
        .dot.amber { background: var(--accent2); }
        .dot.green { background: var(--accent); }

        .titlebar-name {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
          text-transform: uppercase;
        }

        /* Which build is actually running. Deliberately quiet -- it is a
           diagnostic, not a feature, and should never compete with the tabs. */
        .version-badge {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--muted);
          border: 1px solid var(--track);
          border-radius: 3px;
          padding: 1px 4px;
          opacity: 0.75;
        }

        .clock {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #4B5563;
          /* 12-hour time wrapped onto two lines at 360px and dragged the
             whole titlebar to 55px. 24h is shorter, never wraps, and matches
             the routines timeline. */
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }

        .titlebar-right { display: flex; align-items: center; gap: 6px; flex: 0 0 auto; }

        .titlebar-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          flex: 0 0 auto;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: var(--r-btn);
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
          font-family: var(--font-mono);
          font-size: 11.5px;
          text-align: center;
          border: 1px solid var(--border);
          background: var(--panel);
          color: var(--text);
          animation: rowIn 200ms ease backwards;
        }

        .data-toast.ok { border-color: var(--accent); color: var(--accent); }
        .data-toast.err { border-color: var(--danger); color: var(--danger); }

        /* v44: the navigation lives at the bottom now, as icons.
           Seven targets across 360px is 51px each -- comfortably past the
           44px minimum -- so the row no longer needs to scroll, and the
           labels shrink to a caption under each glyph rather than being
           the whole target. */
        .tabs {
          display: flex;
          flex-shrink: 0;
          align-items: stretch;
          gap: 0;
          padding: 4px 2px calc(4px + env(safe-area-inset-bottom, 0px));
          border-top: 1px solid var(--track);
          border-bottom: none;
          background: var(--panel);
          position: relative;
          z-index: 2;
        }

        .tabs button {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: none;
          background: transparent;
          color: #7C8591;
          font-family: var(--font-mono);
          font-size: 8.5px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          padding: 7px 2px 5px;
          min-height: 46px;
          cursor: pointer;
          position: relative;
          transition: color 150ms ease;
        }

        .tab-label {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* ---- v66: the nav bar as a dock ---------------------------------
           Every tab is scaled by its distance from the selection, so moving
           between tabs is a wave travelling along the bar rather than a
           single underline switching sides. Only transform and opacity
           animate, so this stays off the layout path. */
        .tabs button {
          --mag: 0.865;
          transition: color 180ms ease, opacity 220ms ease;
          opacity: calc(1 - var(--dist) * 0.055);
        }
        .tabs button.active { color: var(--text); opacity: 1; }

        .tab-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          transform: translateY(0) scale(var(--mag));
          transform-origin: 50% 100%;
          transition: transform 420ms cubic-bezier(.22, 1.35, .36, 1);
          will-change: transform;
        }
        .tabs button.active .tab-inner { transform: translateY(-5px) scale(1); }
        @media (hover: hover) and (pointer: fine) {
          .tabs button:hover .tab-inner { transform: translateY(-3px) scale(1.04); }
          .tabs button.active:hover .tab-inner { transform: translateY(-6px) scale(1.03); }
        }

        /* the travelling puck */
        .tab-puck {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          background: var(--accent);
          box-shadow: 0 0 10px 1px var(--glow);
          transition: transform 420ms cubic-bezier(.22, 1.35, .36, 1);
          pointer-events: none;
          z-index: 3;
        }

        /* one tick crossing the bar every few seconds: cheap, quiet, and it
           makes an idle screen feel powered on rather than paused */
        .tab-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 26px;
          height: 1px;
          background: var(--accent);
          opacity: 0.35;
          animation: tabSweep 9s linear infinite;
          pointer-events: none;
          z-index: 3;
        }
        @keyframes tabSweep {
          0%   { transform: translateX(-30px); opacity: 0; }
          8%   { opacity: 0.35; }
          92%  { opacity: 0.35; }
          100% { transform: translateX(calc(100vw + 30px)); opacity: 0; }
        }

        /* the activity diode above each icon */
        .tab-dot {
          position: absolute;
          top: 3px;
          left: 50%;
          margin-left: -1.5px;
          width: 3px;
          height: 3px;
          border-radius: 1px;
          background: var(--track);
          animation: tabDot 4.2s steps(1, end) infinite;
        }
        .tabs button.active .tab-dot {
          background: var(--accent);
          animation: tabDotOn 1.6s steps(1, end) infinite;
        }
        @keyframes tabDot {
          0%, 88%  { background: var(--track); }
          90%, 94% { background: var(--accent2); opacity: 0.85; }
          96%, 100% { background: var(--track); opacity: 1; }
        }
        @keyframes tabDotOn {
          0%, 45%  { opacity: 1; }
          50%, 95% { opacity: 0.25; }
          100%     { opacity: 1; }
        }

        /* the glyph answers the selection: it lifts and brightens a touch */
        .tabs button svg {
          transition: transform 420ms cubic-bezier(.22, 1.35, .36, 1), filter 260ms ease;
        }
        .tabs button.active svg { transform: translateY(-1px) scale(1.06); }
        .tabs button.active .tab-label { letter-spacing: 0.06em; }
        .tab-label { transition: letter-spacing 320ms ease; }

        @media (prefers-reduced-motion: reduce) {
          .tab-inner, .tab-puck, .tabs button svg, .tab-label { transition: none !important; }
          .tab-sweep, .tab-dot, .tabs button.active .tab-dot { animation: none !important; }
        }

        .hero-card {
          margin: 16px 18px;
          padding: 16px 18px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: calc(var(--r-card) + 5px);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--accent);
          letter-spacing: 0.06em;
          background: rgba(94,234,212,0.08);
          border: 1px solid rgba(94,234,212,0.25);
          border-radius: 5px;
          padding: 4px 7px;
        }

        .hero-date {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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

        /* ---- routines as cards (v55) ----
           They were a connected timeline: one node per routine with a line
           running between them. That reads as a single object you scroll
           through rather than nineteen things you own, and there was nowhere
           to hang per-routine detail. Each is its own card now, same
           vocabulary as the quest board -- panel, border, a left stripe that
           carries the status colour. */
        .routine-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 11px 12px;
          background: var(--panel);
          border: var(--border-w) solid var(--border);
          border-left: 3px solid var(--rc, var(--border));
          border-radius: var(--r-card);
          box-shadow: var(--shadow-card, none);
          touch-action: pan-y;
          user-select: none;
          transition: border-color 160ms ease, transform 220ms cubic-bezier(.65,0,.35,1);
        }
        .routine-row-wrap { margin-bottom: 8px; }
        .routine-row.current { --rc: var(--accent); }
        .routine-row.next    { --rc: var(--accent2); }
        .routine-row.idle    { --rc: #2A2F37; }
        .routine-connector   { display: none; }
        /* .edge sets the border SHORTHAND further down the sheet, which
           flattens this stripe back to 1px. Measured, not assumed: computed
           border-left came back "1px rgb(35,39,46)". Two classes outrank
           one, so this wins wherever it sits in the file. */
        .routine-row.edge {
          border-left-width: 3px;
          border-left-style: solid;
          border-left-color: var(--rc, var(--border));
        }

        /* the week strip */
        .routine-week {
          display: flex; align-items: center; gap: 4px; margin-top: 7px;
        }
        .rw-dot {
          width: 7px; height: 7px; border-radius: 2px;
          background: var(--track); border: 1px solid transparent;
          transition: background 180ms ease;
        }
        .rw-dot.on { background: var(--rc, var(--accent)); }
        .rw-dot.today { border-color: var(--muted); }
        .rw-dot.on.today { border-color: var(--text); }
        .rw-count {
          font-family: var(--font-mono); font-size: 8px; color: var(--muted);
          margin-left: 4px; font-variant-numeric: tabular-nums;
        }

        /* how far through the routine you actually are */
        .routine-progress {
          height: 2px; background: var(--track); border-radius: 2px;
          margin-top: 7px; overflow: hidden;
        }
        .rp-fill {
          display: block; height: 100%; background: var(--accent);
          border-radius: 2px; transition: width 800ms linear;
        }

        .routine-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 12px;
          flex-shrink: 0;
          padding-top: 2px;
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
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
        }

        .live-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--bg);
          background: var(--accent);
          padding: 1.5px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .streak-tag {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 10px;
          color: #4B5563;
          margin-top: 3px;
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
          font-size: 12px;
          outline: none;
        }

        .edit-unit {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
          font-variant-numeric: tabular-nums;
        }

        .hero-xp-total small { font-size: 12px; color: var(--muted); font-weight: 500; }

        .hero-xp-sub {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--muted);
        }

        .hero-xp-split { display: flex; gap: 12px; margin-top: 6px; }

        .hero-xp-earned, .hero-xp-lost {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
        }

        .radial-progress-sublabel {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .donut-center-sublabel {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8B94A0;
        }

        .timeline-count {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          background: var(--accent);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          /* hour labels are centred on their mark (translateX(-50%)); the
             line was anchored by its left edge, so it sat half its width
             late against every tick */
          transform: translateX(-1px);
          background: var(--accent2);
          box-shadow: 0 0 8px rgba(245,166,35,0.7);
          z-index: 2;
          pointer-events: none;
        }

        .timeline-now-time {
          position: absolute;
          /* inside the track: .timeline-track is overflow:hidden, so a chip
             above the top edge gets sliced in half */
          top: 5px; left: 50%;
          transform: translateX(-50%);
          padding: 1px 4px;
          border-radius: 2px;
          background: var(--accent2);
          color: #0B0D10;
          font-family: var(--font-mono);
          font-size: 8px;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em;
          white-space: nowrap;
          z-index: 3;
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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

        /* whole-screen breath on level up.
           v68: this used to SCALE to 26x. On a phone that asks the GPU for a
           layer tens of thousands of pixels wide, and when allocation fails
           the compositor paints the rect black -- which is the flash of black
           seen mid-animation. It is an opacity breath now: same effect, one
           layer the size of the screen. */
        .screen-pulse {
          position: fixed; inset: 0; z-index: 65; pointer-events: none;
          background: radial-gradient(circle at 50% 45%, var(--glow), transparent 62%);
          animation: screenPulse 1100ms ease-out forwards;
          contain: paint;
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



        /* Content sits on its own stacking context. */
        .panel > .titlebar,
        .panel > .tabs,
        .panel > .tab-content,
        .panel > .data-msg,
        .panel > .banner { position: relative; z-index: 1; }



        .hero-xp-spend {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--accent2); margin-left: 10px;
        }
        .donut-legend-total {
          margin-top: 4px; padding-top: 6px;
          border-top: 1px solid var(--track);
          color: var(--muted);
        }

        .keypool-prov {
          font-family: var(--font-mono); font-size: 8.5px;
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
          font-family: var(--font-mono); font-size: 11px;
          font-weight: 600; color: var(--accent);
        }
        .prov-where {
          font-size: 9.5px; color: var(--muted);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .prov-free {
          font-family: var(--font-mono); font-size: 9px;
          color: var(--accent2); text-align: right; flex-shrink: 0; max-width: 44%;
          line-height: 1.35;
        }
        .prov-detected {
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 9.5px;
          color: var(--text); margin-bottom: 8px;
        }
        .keypool-hint { color: var(--muted); font-size: 8.5px; }
        .keypool-row {
          display: flex; align-items: center; gap: 9px;
          padding: 7px 10px; margin-bottom: 5px;
          background: var(--bg); border: 1px solid var(--border); border-radius: 8px;
        }
        .keypool-num {
          font-family: var(--font-mono); font-size: 9px;
          color: var(--accent); width: 12px; flex-shrink: 0;
        }
        .keypool-val {
          flex: 1; font-family: var(--font-mono);
          font-size: 10.5px; color: var(--muted); letter-spacing: 0.04em;
        }
        .keypool-del {
          background: transparent; border: none; cursor: pointer;
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 10px;
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
          font-family: var(--font-mono); font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent); flex-shrink: 0; min-width: 46px;
        }
        .link-label { font-size: 12px; color: var(--text); flex: 1; min-width: 0;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .link-remove {
          background: transparent; border: none; cursor: pointer;
          font-family: var(--font-mono); font-size: 9px;
          color: var(--danger); letter-spacing: 0.06em; flex-shrink: 0;
        }
        .link-plus { color: var(--accent); font-size: 14px; flex-shrink: 0; }
        .link-picker { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; max-height: 300px; overflow-y: auto; }
        .link-add-btn {
          width: 100%; margin-top: 12px; padding: 11px 0;
          background: transparent; border: 1px dashed var(--border);
          border-radius: 9px; color: var(--accent); cursor: pointer;
          font-family: var(--font-mono); font-size: 11px;
        }

        /* tag editor */
        .tag-group { margin-bottom: 16px; }
        .tag-group-head { display: flex; align-items: center; gap: 7px; margin-bottom: 7px; }
        .tag-dot { width: 8px; height: 8px; border-radius: 50%; }
        .tag-group-name {
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text);
        }
        .tag-row { display: flex; gap: 6px; margin-bottom: 5px; }
        .tag-input {
          flex: 1; background: var(--bg); border: 1px solid var(--border);
          border-radius: 7px; color: var(--text); font-size: 12px;
          padding: 8px 10px; outline: none; font-family: var(--font-ui);
        }
        .tag-input:focus { border-color: var(--accent); }
        .tag-del {
          width: 32px; background: transparent; border: 1px solid var(--border);
          border-radius: 7px; color: var(--danger); cursor: pointer; font-size: 15px;
        }
        .tag-del:disabled { opacity: 0.3; cursor: not-allowed; }
        .tag-add {
          background: transparent; border: none; cursor: pointer;
          font-family: var(--font-mono); font-size: 10px;
          color: var(--accent); padding: 4px 0;
        }
        .tag-reset {
          display: block; margin: 8px auto 0; background: transparent;
          border: 1px solid var(--border); border-radius: 999px;
          color: var(--muted); cursor: pointer; padding: 5px 12px;
          font-family: var(--font-mono); font-size: 9px;
        }

        /* radar controls + area filter */
        .radar-controls {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 0 4px 10px;
        }
        .radar-note {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.06em; color: var(--muted);
          padding: 0 16px 16px; text-align: center; width: 100%;
        }

        @media (hover: hover) and (pointer: fine) {
          .cmp-stats-toggle:hover { border-color: var(--accent); color: var(--accent); }
          .cmp-key-link:hover { color: var(--accent); }
        }

        /* ---- achievements + rewards (v24) ---- */
        /* v41: moved off the top. It is position:fixed and tappable, so
           at top:16px it sat over the titlebar AND the tab bar and ate taps
           for its whole lifetime -- caught by the pointer-events gate test
           once that test started hit-testing a tab that was actually on
           screen. Bottom is where the app's other toasts live anyway. */
        .ach-toast {
          position: fixed; left: 50%;
          /* v44: clears the bottom navigation, which did not exist when
             this moved down in v41 -- it was sitting on top of the tabs */
          bottom: calc(64px + env(safe-area-inset-bottom, 0px));
          transform: translateX(-50%);
          z-index: 90; width: calc(100% - 32px); max-width: 380px;
          display: flex; align-items: center; gap: 11px;
          padding: 11px 13px;
          pointer-events: none;
          background: var(--panel);
          border: 1px solid var(--accent);
          border-radius: 12px;
          box-shadow: 0 8px 30px -8px var(--glow);
          animation: achIn 420ms cubic-bezier(.16,1,.3,1);
        }
        @keyframes achIn {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to   { transform: translate(-50%, 0);    opacity: 1; }
        }
        .ach-toast-icon {
          font-size: 20px; color: var(--accent);
          text-shadow: 0 0 12px var(--glow); flex-shrink: 0;
        }
        .ach-toast-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .ach-toast-kicker {
          font-family: var(--font-mono); font-size: 8px;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent);
        }
        .ach-toast-name { font-size: 13px; font-weight: 600; color: var(--text); }
        .ach-toast-desc { font-size: 10px; color: var(--muted); }
        .ach-toast-x {
          pointer-events: auto; cursor: pointer; flex-shrink: 0;
          background: transparent; border: none; color: var(--muted);
          font-size: 18px; line-height: 1; padding: 4px 2px 4px 8px;
          min-width: 26px; min-height: 26px;
        }
        .ach-toast-coins {
          font-family: var(--font-mono); font-size: 12px;
          font-weight: 700; color: var(--accent2); flex-shrink: 0;
        }

        /* level reward */
        /* v64: level-up is a toast. The full-screen backdrop and its card are
           gone -- they stopped the app to report something that had already
           happened, and the backdrop ate the next tap. */
        .lvl-toast {
          position: fixed; top: calc(14px + env(safe-area-inset-top, 0px));
          left: 50%; transform: translateX(-50%);
          z-index: 92; width: calc(100% - 28px); max-width: 380px;
          display: flex; align-items: center; gap: 11px;
          padding: 10px 12px;
          pointer-events: none;
          background: var(--panel);
          border: 1px solid var(--accent2);
          border-radius: 12px;
          box-shadow: 0 8px 30px -8px var(--glow);
          animation: lvlIn 380ms cubic-bezier(.16,1,.3,1);
        }
        @keyframes lvlIn {
          from { transform: translate(-50%, -14px); opacity: 0; }
          to   { transform: translate(-50%, 0);     opacity: 1; }
        }
        .lvl-toast-num {
          font-family: var(--font-mono); font-size: 22px; font-weight: 700;
          line-height: 1; color: var(--accent); min-width: 26px; text-align: center;
          font-variant-numeric: tabular-nums;
        }
        .lvl-toast-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1 1 auto; }
        .lvl-toast-kicker {
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--accent2);
        }
        .lvl-toast-title { font-size: 12.5px; color: var(--text); }
        .lvl-toast-meta {
          font-family: var(--font-mono); font-size: 8.5px; color: var(--muted);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .lvl-toast-next { color: var(--accent2); }

        /* v64: undo. At the top, like level-up -- the bottom of the screen is
           the swipe lane, and v52 already learned what happens when a toast
           parks there. */
        .undo-toast {
          position: fixed; top: calc(70px + env(safe-area-inset-top, 0px));
          left: 50%; transform: translateX(-50%);
          z-index: 91; width: calc(100% - 28px); max-width: 380px;
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px 8px 12px;
          pointer-events: none;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: 0 8px 24px -10px rgba(0,0,0,0.8);
          animation: lvlIn 260ms cubic-bezier(.16,1,.3,1);
        }
        .undo-toast-label {
          flex: 1 1 auto; min-width: 0;
          font-family: var(--font-mono); font-size: 10px; color: var(--muted);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .undo-toast-btn {
          pointer-events: auto; flex: none;
          background: transparent; border: 1px solid var(--accent); border-radius: 7px;
          color: var(--accent); cursor: pointer;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em;
          padding: 4px 12px;
        }
        .undo-toast-btn:active { background: rgba(94,234,212,0.12); }

        /* v64: the 14-day XP line */
        .spark-card {
          margin: 0 18px 12px;
          padding: 10px 12px 8px;
          border: 1px solid var(--border); border-radius: 12px;
          background: var(--panel);
        }
        .spark-svg { width: 100%; height: 54px; display: block; overflow: visible; }
        .spark-zero { stroke: var(--track); stroke-width: 1; stroke-dasharray: 3 4; }
        .spark-line { stroke: var(--accent); stroke-width: 1.6; stroke-linejoin: round; stroke-linecap: round; }
        .spark-dot { fill: var(--accent); }
        .spark-dot.idle { fill: var(--track); }
        .spark-meta {
          display: flex; align-items: baseline; justify-content: space-between; gap: 10px;
          margin-top: 5px;
          font-family: var(--font-mono); font-size: 8.5px; color: var(--muted);
          letter-spacing: 0.04em;
        }
        .spark-nums { color: var(--accent2); font-variant-numeric: tabular-nums; }

        /* v64: Ctrl+K palette */
        .pal-backdrop {
          position: fixed; inset: 0; z-index: 95;
          background: rgba(0,0,0,0.62);
          display: flex; align-items: flex-start; justify-content: center;
          padding-top: 12vh;
          animation: fadeIn 160ms ease;
        }
        .pal {
          width: calc(100% - 28px); max-width: 420px;
          background: var(--panel);
          border: 1px solid var(--accent);
          border-radius: 12px;
          box-shadow: 0 24px 60px -20px rgba(0,0,0,0.9);
          overflow: hidden;
        }
        .pal-input {
          width: 100%; box-sizing: border-box;
          background: transparent; border: none; outline: none;
          border-bottom: 1px solid var(--track);
          padding: 13px 14px;
          color: var(--text);
          font-family: var(--font-mono); font-size: 12px;
        }
        .pal-input::placeholder { color: var(--muted); }
        .pal-list { max-height: 46vh; overflow-y: auto; }
        .pal-row {
          width: 100%; display: flex; align-items: center; gap: 9px;
          background: transparent; border: none; cursor: pointer;
          padding: 9px 14px; text-align: left;
          color: var(--text); font-size: 12px;
        }
        .pal-row.on { background: var(--track); }
        .pal-kind {
          font-family: var(--font-mono); font-size: 7.5px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
          min-width: 34px; flex: none;
        }
        .pal-row.on .pal-kind { color: var(--accent); }
        .pal-label { flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .pal-hint { font-family: var(--font-mono); font-size: 8.5px; color: var(--muted); flex: none; }
        .pal-empty {
          padding: 16px 14px; color: var(--muted);
          font-family: var(--font-mono); font-size: 10px;
        }
        .pal-foot {
          padding: 7px 14px; border-top: 1px solid var(--track);
          font-family: var(--font-mono); font-size: 8px; color: var(--muted);
          letter-spacing: 0.05em;
        }
        .pal-hit { animation: palHit 1200ms ease-out; }
        @keyframes palHit {
          0%   { box-shadow: 0 0 0 2px var(--accent); }
          100% { box-shadow: 0 0 0 2px transparent; }
        }

        /* v64 polish: one focus ring for the whole app. Buttons lost the
           default outline and nothing replaced it, so tabbing through the app
           was invisible. */
        :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
          .lvl-toast, .undo-toast, .pal-backdrop, .pal-hit { animation: none !important; }
        }

        /* gallery */
        .ach-section { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--track); }
        .ach-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; }
        .ach-count {
          font-family: var(--font-mono); font-size: 9.5px; color: var(--accent2);
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
          font-family: var(--font-mono); font-size: 10px;
          font-weight: 600; color: var(--text);
        }
        .ach-desc { font-size: 8.5px; color: var(--muted); line-height: 1.35; }
        .ach-coins {
          font-family: var(--font-mono); font-size: 8.5px;
          color: var(--accent2); margin-top: 2px;
        }
        .ach-hidden-note {
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 17px; font-weight: 700;
          color: var(--text); background: transparent; border: none; cursor: pointer;
          text-align: center; padding: 2px 6px; border-radius: 6px;
        }
        .pet-name-input { border: 1px solid var(--accent); width: 130px; outline: none; }
        .pet-form { font-family: var(--font-mono); font-size: 10px; color: var(--accent); }
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
          font-family: var(--font-mono); font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted);
        }
        .pet-stat-val { font-family: var(--font-mono); font-size: 10px; color: var(--text); }
        .pet-stat-track { height: 4px; background: var(--track); border-radius: 3px; overflow: hidden; }
        .pet-stat-fill { height: 100%; border-radius: 3px; transition: width 700ms cubic-bezier(.16,1,.3,1); }

        .pet-next {
          font-family: var(--font-mono); font-size: 9.5px;
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
          border-radius: 8px; color: var(--text); font-family: var(--font-ui);
          font-size: 12.5px; padding: 10px 12px; outline: none;
          transition: border-color 140ms ease;
        }
        .pet-input:focus { border-color: var(--accent); }
        .pet-send {
          background: var(--accent); color: var(--bg); border: none; border-radius: 8px;
          font-family: var(--font-mono); font-size: 11px; font-weight: 700;
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
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 11px;
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
          font-family: var(--font-mono); font-size: 12px;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text);
        }
        .sheet-close {
          background: transparent; border: none; color: var(--muted);
          font-size: 22px; line-height: 1; cursor: pointer; padding: 0 4px;
        }
        .sheet-sub, .sheet-foot {
          font-family: var(--font-mono); font-size: 9.5px;
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
          overflow: hidden;
        }
        .sw-band { position: absolute; top: 0; bottom: 0; width: 33.34%; }
        .sw-band:nth-of-type(1) { left: 0; }
        .sw-band:nth-of-type(2) { left: 33.33%; }
        .sw-band:nth-of-type(3) { left: 66.66%; }
        .theme-lock { color: rgba(255,255,255,0.82); }
        .theme-active-dot {
          position: absolute; top: 5px; right: 5px;
          width: 7px; height: 7px; border-radius: 50%;
          background: #fff; box-shadow: 0 0 6px rgba(255,255,255,0.9);
        }
        .theme-name {
          font-family: var(--font-mono); font-size: 10.5px;
          font-weight: 600; color: var(--text); margin-top: 2px;
        }
        .theme-blurb { font-size: 9px; color: var(--muted); line-height: 1.35; }
        .theme-req {
          font-family: var(--font-mono); font-size: 9px; color: var(--accent2);
        }
        .theme-bar {
          width: 100%; height: 3px; background: var(--track);
          border-radius: 2px; overflow: hidden; margin-top: 2px;
        }
        .theme-bar-fill {
          display: block; height: 100%; background: var(--accent2);
          border-radius: 2px; transition: width 600ms cubic-bezier(.16,1,.3,1);
        }
        .theme-pct { font-family: var(--font-mono); font-size: 8px; color: var(--muted); }

        /* ---- calm toggle ---- */
        .calm-toggle-row {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--track);
        }
        .calm-toggle-label {
          font-family: var(--font-mono); font-size: 11px; color: var(--text);
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

        /* ---- calm mode ----------------------------------------------
           Slows everything (via --motion-scale), lifts blur, dims accents
           and hides secondary chrome. Navigation stays fully usable. */
        .calm-mode .panel {
          filter: saturate(0.85) brightness(0.96);
          transition: filter 900ms ease;
        }
        /* v57: calm mode now actually reaches the game.
           Measured before this rule: --calm was set on the root and read by
           nothing, and --motion-scale appeared in six places, all of them the
           pet. So "calm must still mute it" was a promise the app was not
           keeping for the roll reveal. Everything below is presentation, so
           muting it cannot change a number, a badge, an EP or a band.
           No backticks in here: the stylesheet is a template literal and one
           would end it -- that is bug B6. */
        .calm-mode .rngi-chip.drop,
        .calm-mode .rngi-slot,
        .calm-mode .rngi-slot.kept,
        .calm-mode .rngi-race-draw,
        .calm-mode .rngi-band.slam,
        .calm-mode .rise,
        .calm-mode .rngi-ep-float {
          animation: none !important;
        }
        .calm-mode .rngi-stage.band-anomaly,
        .calm-mode .rngi-stage.band-mythic {
          animation: none !important;
        }
        .calm-mode .rngi-ep-float { display: none; }

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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .stats-pct {
          font-family: var(--font-mono);
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
          background: var(--accent);
          border-radius: 3px;
          transition: width 420ms cubic-bezier(.65,0,.35,1);
          box-shadow: 0 0 12px rgba(94,234,212,0.5);
        }

        .stats-row {
          display: flex;
          gap: 16px;
          margin-top: 10px;
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          /* v58: a card cut off by the viewport edge used to stop dead, which
             reads as a clipped bug rather than "there is more". It now fades
             out, and only while there is actually something below to reach
             for -- the mask is swapped off at the end of the list. */
          mask-image: linear-gradient(to bottom, #000 calc(100% - 26px), transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 26px), transparent 100%);
        }
        /* at the very bottom there is nothing left to fade towards, so the
           last row is fully legible */
        .task-list.at-end,
        .task-list:not(.scrollable) {
          mask-image: none;
          -webkit-mask-image: none;
        }

        .task-row {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 8px;
          border-radius: var(--r-card);
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
          font-family: var(--font-mono);
          font-size: 10px;
          color: #4B5563;
        }

        .prio-dot { width: 5px; height: 5px; border-radius: 50%; }
        .prio-label { text-transform: uppercase; letter-spacing: 0.04em; }
        .dot-sep { color: #2A2F37; }

        /* The delete ✕ used to be opacity:0, revealed by .task-row:hover.
           A touchscreen never hovers, so on a phone it was invisible at all
           times -- which is why inventory delete got reported as missing
           when it had been there since v36. Visible by default now, in a
           dark red that reads as destructive without shouting, and only
           pointer devices get the fade-in. */
        .del-btn {
          border: none;
          background: transparent;
          color: #9B3341;
          cursor: pointer;
          padding: 6px;
          display: flex;
          opacity: 1;
          transition: color 150ms ease, opacity 150ms ease;
          flex-shrink: 0;
        }

        .del-btn:active { color: var(--danger); }

        @media (hover: hover) and (pointer: fine) {
          .del-btn { opacity: 0.6; }
          .task-row:hover .del-btn,
          .quest-habit-card:hover .del-btn,
          .note-card:hover .del-btn { opacity: 1; }
        }

        .del-btn:hover { color: var(--danger); }

        .empty-state {
          text-align: center;
          padding: 48px 20px;
          color: #4B5563;
        }

        .empty-state .glyph {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }

        .today-section-header:first-child { padding-top: 14px; }

        .today-view-all {
          border: none;
          background: transparent;
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 10.5px;
          cursor: pointer;
          padding: 0;
        }

        /* ---- the day, as ticks (v58) ----
           One pip per thing scheduled today. Cyan is done, an empty track is
           still to come, and a slipped-routine-shaped hole is visible rather
           than politely omitted. Discrete because the count is exact. */
        .today-rack {
          margin: 12px 16px 2px;
          padding: 9px 11px 8px;
          border: 1px solid var(--border);
          border-radius: var(--r-card);
          background: var(--panel);
        }
        .today-rack-top {
          display: flex; align-items: baseline; justify-content: space-between;
          gap: 8px; margin-bottom: 7px;
        }
        .today-rack-label {
          font-family: var(--font-mono);
          font-size: 8.5px; letter-spacing: 0.16em; color: var(--muted);
        }
        .today-rack-count {
          font-family: var(--font-mono);
          font-size: 9.5px; color: var(--muted);
          font-variant-numeric: tabular-nums;
        }
        .today-rack-count.all { color: var(--accent); }
        .today-rack-pips {
          display: flex; align-items: center; gap: 3px; flex-wrap: wrap;
        }
        .tr-pip {
          width: 8px; height: 8px; border-radius: 2px;
          background: var(--track);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.045);
          animation: trPipIn 220ms ease backwards;
        }
        /* a quest pip is a hair narrower so the two kinds are told apart
           without needing a legend */
        .tr-pip.quest { width: 6px; }
        .tr-pip.on { background: var(--accent); }
        @keyframes trPipIn {
          from { opacity: 0; transform: scaleY(0.4); }
          to   { opacity: 1; transform: scaleY(1); }
        }

        /* the same dots, lifted off the spotlight card's brighter background */
        .today-card .rw-dot { background: #2A2F37; }
        .today-card .rw-dot.on { background: var(--rc, var(--accent)); }
        .today-card .rw-count { font-size: 8.5px; }
        .today-card .routine-week { margin-top: 8px; }
        .today-card .rw-count.has { color: var(--accent); }

        .today-header-right {
          display: flex; align-items: baseline; gap: 8px;
        }
        .today-header-left-count {
          font-family: var(--font-mono);
          font-size: 9.5px; color: var(--muted);
          font-variant-numeric: tabular-nums;
        }

        /* ---- a quest's last seven days (v59) ----
           Three states, not two: done is cyan, a slip is red, a day with
           nothing is an empty track. A paired quest's whole point is the
           difference between "did not" and "did the opposite", so those two
           must not look the same. */
        .quest-streak { white-space: nowrap; }

        .habit-week {
          display: flex; align-items: center; gap: 3px; margin-top: 7px;
        }
        .hw-dot {
          width: 7px; height: 7px; border-radius: 2px;
          background: var(--track);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.045);
          transition: background 180ms ease;
        }
        .hw-dot.done { background: var(--accent); }
        .hw-dot.slip { background: var(--danger); }
        .hw-dot.today { outline: 1px solid var(--muted); outline-offset: 1px; }
        .hw-dot.done.today { outline-color: var(--text); }
        .hw-count {
          margin-left: 4px;
          font-family: var(--font-mono);
          font-size: 8px; color: var(--muted);
          font-variant-numeric: tabular-nums;
        }

        /* ---- the two ends of the radar, in words (v59) ---- */
        .radar-split {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 4px 14px; margin-top: 4px;
        }
        .rs-strong, .rs-weak {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--font-mono);
          font-size: 9px; color: var(--muted);
          font-variant-numeric: tabular-nums;
        }
        .rs-weak { opacity: 0.85; }
        .rs-dot { width: 6px; height: 6px; border-radius: 50%; flex: 0 0 auto; }

        .habits-today {
          margin-left: 8px;
          font-family: var(--font-mono);
          font-size: 9px; font-weight: 400;
          letter-spacing: 0;
          color: var(--muted);
          text-transform: none;
          font-variant-numeric: tabular-nums;
        }

        /* ---- what is left on today's board (v60) ---- */
        .daily-standing {
          display: flex; align-items: baseline; justify-content: space-between;
          gap: 8px; margin: 10px 18px 0;
          font-family: var(--font-mono);
          font-size: 9.5px; color: var(--muted);
          font-variant-numeric: tabular-nums;
        }
        .daily-standing .ds-left { color: var(--accent2); }

        /* ---- storage, at a glance (v60) ---- */
        .store-row {
          margin: 0 16px 14px;
          border: 1px solid var(--border);
          border-radius: var(--r-card);
          background: var(--panel);
          padding: 11px 13px;
        }
        .store-row > summary {
          list-style: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 6px;
        }
        .store-row > summary::-webkit-details-marker { display: none; }
        .store-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
        .store-title {
          font-family: var(--font-mono);
          font-size: 9.5px; letter-spacing: 0.14em; color: var(--muted);
        }
        .store-total {
          font-family: var(--font-mono);
          font-size: 10px; color: var(--text);
          font-variant-numeric: tabular-nums;
        }
        .store-bar {
          display: block; height: 3px; border-radius: 2px;
          background: var(--track); overflow: hidden;
        }
        .store-bar i {
          display: block; height: 100%; background: var(--accent);
          border-radius: 2px; transition: width 400ms ease;
        }
        .store-sub {
          font-family: var(--font-mono);
          font-size: 8.5px; color: var(--muted);
        }
        .store-list { margin-top: 9px; display: flex; flex-direction: column; gap: 4px; }
        .store-line {
          display: grid; grid-template-columns: 1fr auto 34px;
          align-items: baseline; gap: 8px;
          font-family: var(--font-mono); font-size: 9.5px;
          font-variant-numeric: tabular-nums;
        }
        .store-key { color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .store-size { color: var(--muted); }
        .store-share { color: var(--muted); text-align: right; }
        .store-empty, .store-foot {
          font-family: var(--font-mono);
          font-size: 8.5px; color: var(--muted);
        }
        .store-foot { margin-top: 7px; opacity: 0.75; }

        /* ---- one true line per tool (v61) ---- */
        .tool-status {
          margin-top: 5px;
          font-family: var(--font-mono);
          font-size: 8.5px; letter-spacing: 0.02em;
          color: var(--muted);
          font-variant-numeric: tabular-nums;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          max-width: 100%;
        }

        .coin-total { color: var(--accent); font-variant-numeric: tabular-nums; }
        .today-xp-total {
          color: var(--accent2);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
        }

        .today-mark-btn {
          margin-top: 12px;
          width: 100%;
          padding: 9px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: transparent;
          color: #9CA3AF;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 11px;
          text-align: left;
          padding: 6px 12px;
          cursor: pointer;
        }

        .today-more:hover { color: var(--accent); }

        .today-reward-cost {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent2);
          flex-shrink: 0;
        }

        .today-claim-btn {
          border: 1px solid var(--accent);
          border-radius: 6px;
          background: transparent;
          color: var(--accent);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
        .progress-fill.xp { background: #8B9CF7; box-shadow: 0 0 12px rgba(139,156,247,0.5); }

        .muted { color: #4B5563; }

        /* ---- vault: habit cards ---- */
        /* ---- notes: a terminal buffer, not a card ---- */
        .note-list { display: flex; flex-direction: column; gap: 10px; padding: 0 18px 8px; }

        .note-card {
          background: var(--panel);
          border: var(--border-w) solid var(--border);
          border-left: 2px solid var(--accent);
          border-radius: var(--r-card);
          padding: 10px 12px;
          cursor: pointer;
          transition: border-color 140ms ease;
        }
        .note-card:hover { border-color: var(--accent); }
        .note-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .note-card.editing { cursor: default; border-left-color: var(--accent2); }

        .note-head {
          display: flex; align-items: baseline; gap: 6px;
          font-family: var(--font-mono); font-size: 10px;
          margin-bottom: 6px;
        }
        .note-prompt { color: var(--accent); opacity: 0.75; }
        .note-title { color: var(--text); font-weight: 600; }
        .note-when { margin-left: auto; color: var(--muted); font-size: 9px; }

        /* pre, not div: a note is text the user typed, and their line breaks
           and indentation are part of what they meant */
        .note-body {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          border-radius: var(--r-btn); color: var(--muted); cursor: pointer;
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.06em; padding: 4px 10px;
          transition: all 140ms ease;
        }
        .note-btn:hover { border-color: var(--accent); color: var(--accent); }
        .note-btn.save { border-color: var(--accent); color: var(--accent); }
        .note-btn.danger:hover { border-color: var(--danger); color: var(--danger); }

        .cloud-card { border-left-color: var(--accent2); }
        .cloud-key {
          word-break: break-all; white-space: pre-wrap;
          color: var(--accent); font-size: 10px;
        }
        .cloud-warn { color: var(--accent2); font-size: 10px; }
        .cloud-preview { color: var(--text); font-size: 10px; }
        .cloud-msg.ok { color: var(--accent); font-size: 10px; }
        .cloud-msg.err { color: var(--danger); font-size: 10px; }
        .cloud-input {
          width: 100%; box-sizing: border-box; margin: 6px 0 2px;
          background: transparent; border: 1px solid var(--border);
          color: var(--accent); font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 0.02em; padding: 6px 8px;
          border-radius: 3px;
        }
        .cloud-input:focus { outline: none; border-color: var(--accent); }
        .update-card { border-left-color: var(--accent); }

        /* Flat bar, no shadow: DESIGN.md forbids raised cards, and this sits
           above everything already by being the first thing in the panel. */
        .update-bar {
          display: flex; align-items: center; gap: 8px;
          margin: 0 0 8px; padding: 7px 12px; cursor: pointer;
          background: rgba(245,166,35,0.10);
          border: 1px solid var(--accent2);
          border-radius: 3px;
          color: var(--accent2);
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 0.03em;
        }
        .update-bar-icon { font-size: 9px; }

        /* ---- inventory inline edit (v39) ---- */
        .inv-tap {
          background: transparent; border: none; padding: 0; cursor: pointer;
          text-align: left; display: flex; flex-direction: column; gap: 2px; flex: 1;
        }
        .inv-edit { display: flex; flex-direction: column; gap: 7px; width: 100%; }
        .inv-edit-input {
          width: 100%; box-sizing: border-box;
          background: transparent; border: 1px solid var(--accent); border-radius: 3px;
          color: var(--text); font-family: var(--font-mono);
          font-size: 12px; padding: 6px 8px;
        }
        .inv-edit-input:focus { outline: none; }
        .inv-edit-chips { margin: 0; }
        .inv-edit-actions { display: flex; gap: 6px; }

        /* ---- tools (v39) ---- */
        .tool-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 8px; padding: 4px 14px 16px;
        }
        .tool-card {
          display: flex; flex-direction: column; gap: 4px;
          padding: 12px 12px 14px; text-align: left; cursor: pointer;
          background: transparent;
          border: var(--border-w) solid var(--border); border-left: 2px solid var(--accent);
          border-radius: var(--r-card); color: var(--text);
          font-family: var(--font-mono);
          transition: border-color 140ms ease;
        }
        .tool-card:active { border-color: var(--accent); }
        .tool-card.ghost {
          border-left-color: var(--track); opacity: 0.45; cursor: default;
        }
        .tool-glyph { font-size: 18px; color: var(--accent); line-height: 1; }
        .tool-card.ghost .tool-glyph { color: var(--muted); }
        .tool-name { font-size: 12px; letter-spacing: 0.04em; }
        .tool-desc { font-size: 9.5px; color: var(--muted); line-height: 1.45; }
        .tool-header { display: flex; align-items: center; gap: 10px; }
        .tool-back {
          background: transparent; border: none; cursor: pointer;
          color: var(--accent); font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 0.06em; padding: 0;
        }



        /* ---- swipe to complete / fail (v45) ----
           The rail holds two hint layers behind the card. They only paint
           while a drag is in progress, so a row at rest is exactly what it
           was before -- no permanent coloured gutters down the list. */
        .swipe-rail { position: relative; overflow: hidden; border-radius: var(--r-card); }
        .swipe-hint {
          position: absolute; inset: 0; display: flex; align-items: center;
          padding: 0 16px; pointer-events: none; opacity: 0;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
          border-radius: var(--r-card);
          transition: opacity 120ms ease;
        }
        .swipe-hint.right { justify-content: flex-start; color: var(--accent); background: rgba(94,234,212,0.08); }
        .swipe-hint.left  { justify-content: flex-end;  color: var(--danger); background: rgba(155,51,65,0.14); }
        .swipe-hint.show { opacity: 0.75; }
        .swipe-hint.armed { opacity: 1; }
        .swipe-hint.armed span { text-shadow: 0 0 10px currentColor; }
        /* v63: dragging the row with a mouse used to start a text selection,
           and Chromium cancels the pointer stream the moment that happens --
           the swipe died after about 15px and the row stayed where it was.
           The row is a swipe surface, not prose. */
        .swipe-rail .quest-habit-card { touch-action: pan-y; user-select: none; -webkit-user-select: none; }
        .swipe-rail .today-task-row { touch-action: pan-y; }

        .hist-btn {
          background: transparent; border: none; cursor: pointer; padding: 3px;
          color: var(--muted); display: flex; align-items: center;
        }
        .hist-btn:active { color: var(--accent); }

        .today-task-row.quest .today-task-check {
          border-color: var(--dc, var(--accent));
        }
        .today-task-row.quest .today-task-check.on {
          background: var(--dc, var(--accent));
        }
        .today-task-row.is-done { opacity: 0.5; }
        .today-quest-tag { font-size: 9px; font-variant-numeric: tabular-nums; }
        .today-quest-chip {
          font-size: 8px; letter-spacing: 0.05em; text-transform: lowercase;
          color: var(--tc, var(--muted)); border: var(--border-w) solid var(--tc, var(--border));
          border-radius: 3px; padding: 0 3px; margin-left: 5px;
          opacity: 0.85; white-space: nowrap;
        }
        .today-quest-note {
          font-size: 8.5px; color: var(--muted); padding: 4px 2px 0;
        }

        /* ---- radar axis popup (v45, #8) ---- */
        .radar-hint {
          text-align: center; font-size: 8.5px; color: var(--muted);
          margin-top: 2px; letter-spacing: 0.04em;
        }
        .radar-label.on { fill: var(--text); }
        .axis-pop {
          margin-top: 10px; padding: 10px 11px 11px;
          border: var(--border-w) solid var(--accent); border-radius: var(--r-card);
          background: var(--panel);
          animation: rowIn 180ms ease backwards;
        }
        .axis-pop-head { display: flex; align-items: center; gap: 7px; }
        .axis-pop-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .axis-pop-name { flex: 1; font-size: 11.5px; color: var(--text); letter-spacing: 0.03em; }
        .axis-pop-close {
          background: transparent; border: none; color: var(--muted);
          font-size: 17px; line-height: 1; cursor: pointer; padding: 0 2px;
        }
        .axis-pop-value { display: flex; align-items: baseline; gap: 5px; margin-top: 7px; flex-wrap: wrap; }
        .axis-pop-xp { font-size: 21px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .axis-pop-unit { font-size: 9px; color: var(--muted); letter-spacing: 0.1em; }
        .axis-pop-raw { font-size: 8.5px; color: var(--danger); margin-left: 4px; }
        .axis-pop-split {
          display: flex; align-items: baseline; gap: 5px; margin-top: 5px;
          font-size: 10px; flex-wrap: wrap;
        }
        .axis-pop-gain { color: var(--accent); }
        .axis-pop-lose { color: var(--danger); }
        .axis-pop-sep { color: var(--muted); }
        .axis-pop-meta { font-size: 8.5px; color: var(--muted); margin-left: 4px; }
        .axis-pop-rows { margin-top: 9px; display: flex; flex-direction: column; gap: 3px; }
        .axis-pop-row {
          display: flex; justify-content: space-between; gap: 8px;
          font-size: 9.5px; color: var(--muted);
          padding: 3px 0; border-bottom: 1px solid var(--track);
        }
        .axis-pop-row:last-child { border-bottom: none; }
        .axis-pop-row-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .axis-pop-row-net { font-variant-numeric: tabular-nums; flex-shrink: 0; }
        .axis-pop-row-net.pos { color: var(--accent); }
        .axis-pop-row-net.neg { color: var(--danger); }
        .axis-pop-more, .axis-pop-empty { font-size: 8.5px; color: var(--muted); margin-top: 6px; }
        .axis-pop-daily {
          font-size: 8.5px; color: var(--accent2); margin: 4px 0 2px;
          font-variant-numeric: tabular-nums;
        }
        .axis-pop-daily-mark { color: var(--accent2); margin-right: 4px; font-size: 8px; }

        /* ---- per-quest calendar (v45, #10) ---- */
        .qh-sheet { max-width: 340px; }
        .qh-nav {
          display: flex; align-items: center; justify-content: space-between;
          margin: 4px 0 10px;
        }
        .qh-nav button {
          background: transparent; border: var(--border-w) solid var(--border);
          border-radius: var(--r-chip); color: var(--text); cursor: pointer;
          width: 30px; height: 28px; font-size: 15px; line-height: 1;
          font-family: var(--font-mono);
        }
        .qh-nav button:disabled { color: var(--track); cursor: default; }
        .qh-month { font-size: 11px; letter-spacing: 0.1em; color: var(--text); }
        .qh-dow, .qh-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
        .qh-dow { margin-bottom: 4px; }
        .qh-dow span { text-align: center; font-size: 8px; color: var(--muted); }
        .qh-cell {
          aspect-ratio: 1 / 1; display: flex; align-items: center; justify-content: center;
          border-radius: 5px; font-size: 9px; color: var(--muted);
          background: var(--track); border: 1px solid transparent;
          font-variant-numeric: tabular-nums;
        }
        .qh-cell.blank { background: transparent; }
        .qh-cell.future { opacity: 0.3; }
        .qh-cell.done { background: var(--accent); color: #0B0D10; }
        .qh-cell.slip { background: var(--danger); color: #fff; }
        .qh-cell.today { border-color: var(--text); }
        .qh-key {
          display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
          margin-top: 10px; font-size: 8px; color: var(--muted);
        }
        .qh-key span { display: flex; align-items: center; gap: 4px; }
        .qh-swatch {
          width: 8px; height: 8px; border-radius: 2px; background: var(--track);
          display: inline-block;
        }
        .qh-swatch.done { background: var(--accent); }
        .qh-swatch.slip { background: var(--danger); }
        .qh-stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;
          margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--track);
        }
        .qh-stats > div { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .qh-stat-n { font-size: 15px; color: var(--text); font-variant-numeric: tabular-nums; }
        .qh-stat-l { font-size: 7.5px; color: var(--muted); text-align: center; line-height: 1.3; }
        .qh-all { margin-top: 9px; text-align: center; font-size: 8.5px; color: var(--muted); }

        /* ---- tags (v52) ---- */
        .radar-count { font-size: 9px; color: var(--muted); letter-spacing: 0.06em; }
        .quest-tag-pip { font-size: 8.5px; }
        .quest-habit-desc {
          display: block; font-size: 8.5px; color: var(--muted);
          line-height: 1.45; margin-top: 2px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .edit-row-tags { flex-wrap: wrap; gap: 4px; }
        .edit-tag-note { font-size: 8px; color: var(--accent); margin: -2px 0 4px; }
        .edit-desc { font-size: 10.5px; margin-top: 4px; }
        .tag-dot.swatch {
          width: 14px; height: 14px; border-radius: 50%; border: none;
          cursor: pointer; flex-shrink: 0; padding: 0;
        }
        .tag-use {
          font-size: 8.5px; color: var(--muted); width: 18px; text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .tag-del.armed {
          width: auto; padding: 0 7px; font-size: 8.5px;
          color: var(--danger); border-color: var(--danger);
        }
        .tag-add:disabled { color: var(--muted); border-color: var(--border); cursor: default; }

        /* ---- named items + year view (v48) ---- */
        .xp-hints { display: flex; gap: 4px; flex-wrap: wrap; margin: -4px 0 9px; }
        .xp-hint {
          display: flex; align-items: baseline; gap: 5px;
          padding: 5px 8px; cursor: pointer; background: transparent;
          border: var(--border-w) dashed var(--border); border-radius: var(--r-chip);
          color: var(--text); font-family: var(--font-mono); font-size: 9px;
        }
        .xp-hint:active { border-style: solid; border-color: var(--accent); }
        .xp-hint-amt { color: var(--muted); font-variant-numeric: tabular-nums; }

        .xp-names { display: flex; flex-direction: column; gap: 3px; }
        .xp-name-row {
          position: relative; display: flex; align-items: center; gap: 7px;
          padding: 6px 9px; border-radius: var(--r-chip);
          border: var(--border-w) solid var(--border);
          font-size: 9.5px; font-variant-numeric: tabular-nums; overflow: hidden;
        }
        /* the bar is a background wash behind the text, not a separate column:
           at 9px a label plus a bar plus two numbers does not fit on 360px */
        .xp-name-bar {
          position: absolute; left: 0; top: 0; bottom: 0;
          opacity: 0.13; pointer-events: none;
          transition: width 600ms cubic-bezier(0.22,1,0.36,1);
        }
        .xp-name-label {
          position: relative; flex: 1; min-width: 0; color: var(--text);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .xp-name-n { position: relative; color: var(--muted); font-size: 8.5px; }
        .xp-name-total { position: relative; color: var(--text); }
        .xp-more {
          margin-top: 6px; padding: 5px 10px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 8.5px;
        }
        .xp-empty-small { font-size: 8.5px; color: var(--muted); line-height: 1.6; padding: 6px 0; }

        .xp-years { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 10px; }
        .xp-years button {
          padding: 6px 11px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 10px;
          font-variant-numeric: tabular-nums;
        }
        .xp-years button.on { color: var(--accent); border-color: var(--accent); }

        .xp-year-head {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          padding: 12px 10px; margin-bottom: 4px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel);
        }
        .xp-year-total { font-size: 24px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .xp-year-sub { font-size: 8.5px; color: var(--muted); text-align: center; }

        .xp-year-bars {
          display: flex; align-items: flex-end; gap: 3px; height: 104px;
          padding: 7px 7px 4px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-year-bar {
          flex: 1 1 0; min-width: 0; height: 100%; padding: 0; cursor: pointer;
          background: transparent; border: none;
          display: flex; flex-direction: column; align-items: stretch; gap: 3px;
        }
        .xp-year-col { flex: 1; display: flex; align-items: flex-end; }
        .xp-year-col > span {
          display: block; width: 100%; background: var(--accent);
          border-radius: 2px 2px 0 0;
          transition: height 650ms cubic-bezier(0.22,1,0.36,1);
        }
        .xp-year-bar.empty .xp-year-col > span { background: var(--track); min-height: 2px; }
        .xp-year-bar.on .xp-year-col > span { background: #FBBF24; }
        .xp-year-m { font-size: 7px; color: var(--muted); text-align: center; }
        .xp-year-bar.on .xp-year-m { color: #FBBF24; }

        .xp-line-wrap {
          padding: 7px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-line { display: block; }
        .xp-line-path {
          fill: none; stroke: var(--accent); stroke-width: 1.6;
          vector-effect: non-scaling-stroke; transition: opacity 500ms ease;
        }
        .xp-line-area { fill: var(--accent); opacity: 0.1; transition: opacity 500ms ease; }
        .xp-line-dot { fill: var(--accent); }
        .xp-line-ends {
          display: flex; justify-content: space-between; gap: 8px;
          margin-top: 5px; font-size: 7.5px; color: var(--muted);
          font-variant-numeric: tabular-nums;
        }

        /* ---- sound (v47) ---- */
        .snd { padding: 0 14px 14px; display: flex; flex-direction: column; gap: 9px; }
        .snd-mute {
          padding: 9px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 10.5px;
          letter-spacing: 0.06em;
        }
        .snd-mute.on { color: var(--accent); border-color: var(--accent); }
        .snd-slider { display: flex; align-items: center; gap: 8px; }
        .snd-label { font-size: 9px; color: var(--muted); width: 58px; flex-shrink: 0; }
        .snd-slider input { flex: 1; min-width: 0; accent-color: var(--accent); height: 22px; }
        .snd-val {
          font-size: 9px; color: var(--text); width: 24px; text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .snd-sub { font-size: 8.5px; letter-spacing: 0.12em; color: var(--muted); margin-top: 4px; }
        .snd-scenes { display: flex; gap: 4px; flex-wrap: wrap; }
        .snd-scenes button {
          padding: 6px 9px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 9px;
        }
        .snd-scenes button.on { color: var(--accent); border-color: var(--accent); }
        .snd-test { margin-left: auto; }
        .snd-test.on { color: var(--danger) !important; border-color: var(--danger) !important; }
        .snd-hint { font-size: 8px; color: var(--muted); line-height: 1.6; }

        .pomo-silence {
          display: block; margin: 10px auto 0; padding: 9px 22px; cursor: pointer;
          background: transparent; color: var(--danger);
          border: 1px solid var(--danger); border-radius: var(--r-card);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em;
          animation: pulseRing 900ms ease-in-out infinite;
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }

        /* ---- expenses (v46) ----
           Amount first, big keys, one hand. The keypad is deliberately not
           the phone keyboard: a numeric keyboard still costs a layout shift
           and half the screen, and this one carries + and − that behave. */
        .xp { padding: 4px 14px 20px; }

        .xp-month {
          display: flex; align-items: center; justify-content: space-between;
          gap: 8px; padding: 8px 10px; margin-bottom: 8px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel);
        }
        .xp-month button {
          background: transparent; border: var(--border-w) solid var(--border);
          border-radius: var(--r-chip); color: var(--text); cursor: pointer;
          width: 30px; height: 28px; font-size: 15px; line-height: 1;
          font-family: var(--font-mono); flex-shrink: 0;
        }
        .xp-month button:disabled { color: var(--track); cursor: default; }
        .xp-month-mid { display: flex; flex-direction: column; align-items: center; gap: 1px; }
        .xp-month-label { font-size: 10px; letter-spacing: 0.1em; color: var(--muted); }
        .xp-month-total { font-size: 17px; color: var(--accent); font-variant-numeric: tabular-nums; }

        /* ---- recurring rules + category editor (v54) ---- */
        .xp-rule-form {
          display: flex; flex-direction: column; gap: 7px;
          background: var(--panel); border: var(--border-w) solid var(--border);
          border-radius: var(--r-card); padding: 11px; margin-bottom: 11px;
        }
        .xp-rule-row { display: flex; gap: 7px; }
        .xp-rule-amt, .xp-rule-name {
          font-family: var(--font-mono); font-size: 12.5px; color: var(--text);
          background: var(--bg); border: var(--border-w) solid var(--border);
          border-radius: 6px; padding: 8px 9px; min-width: 0;
        }
        .xp-rule-amt { width: 92px; flex: none; font-variant-numeric: tabular-nums; }
        .xp-rule-name { flex: 1; }
        .xp-rule-amt:focus, .xp-rule-name:focus { outline: none; border-color: var(--accent); }
        .xp-rule-cats, .xp-rule-days { flex-wrap: wrap; }
        .xp-rule-preview {
          font-family: var(--font-mono); font-size: 9.5px; color: var(--muted);
          border-top: var(--border-w) solid var(--border); padding-top: 7px;
        }
        .xp-rule-add { align-self: flex-start; }
        .xp-rule-list { display: flex; flex-direction: column; gap: 7px; margin-bottom: 13px; }
        .xp-rule-card {
          display: flex; align-items: center; gap: 9px;
          background: var(--panel); border: var(--border-w) solid var(--border);
          border-left: 3px solid var(--cc); border-radius: var(--r-card); padding: 10px 11px;
        }
        .xp-rule-card.off { opacity: 0.45; }
        .xp-rule-main {
          flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px;
          background: none; border: none; text-align: left; cursor: pointer; padding: 0;
          font-family: var(--font-mono);
        }
        .xp-rule-label { font-size: 11.5px; color: var(--text); }
        .xp-rule-meta { font-size: 9px; color: var(--muted); }
        .xp-cat-preview { flex-wrap: wrap; margin-bottom: 12px; }
        .xp-cat-chip {
          font-family: var(--font-mono); font-size: 10px; color: var(--cc);
          border: var(--border-w) solid var(--cc); border-radius: 4px;
          padding: 4px 8px; opacity: 0.9;
        }
        .xp-cat-edit { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
        .xp-cat-note { font-family: var(--font-mono); font-size: 8.5px; color: var(--muted); margin-top: 4px; }
        .recur-note {
          position: fixed; left: 50%; transform: translateX(-50%);
          bottom: calc(68px + env(safe-area-inset-bottom, 0px));
          background: var(--panel); border: var(--border-w) solid var(--accent2);
          border-radius: 6px; padding: 7px 13px; z-index: 60;
          font-family: var(--font-mono); font-size: 10px; color: var(--accent2);
          pointer-events: none;
        }

        .xp-tabs { display: flex; gap: 5px; margin-bottom: 11px; }
        .xp-tabs button {
          flex: 1; padding: 7px 3px; cursor: pointer;
          background: transparent; color: var(--muted);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.05em;
        }
        .xp-tabs button.on { color: var(--accent); border-color: var(--accent); }

        /* ---- composer ---- */
        .xp-composer {
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          padding: 12px 11px 11px; background: var(--panel);
        }
        .xp-amount-row {
          display: flex; align-items: baseline; gap: 5px; flex-wrap: wrap;
          padding-bottom: 10px; border-bottom: 1px solid var(--track);
        }
        .xp-cur { font-size: 15px; color: var(--muted); }
        .xp-amount {
          font-size: 28px; color: var(--text); font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em; word-break: break-all;
        }
        .xp-amount.ghost { color: var(--track); }
        .xp-amount-sum { margin-left: auto; font-size: 10px; color: var(--accent); }

        .xp-cats { display: flex; gap: 4px; flex-wrap: wrap; margin: 10px 0 8px; }
        .xp-cat {
          display: flex; align-items: center; gap: 4px;
          padding: 5px 8px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 9px;
        }
        .xp-cat.on { color: var(--cc); border-color: var(--cc); }
        .xp-cat-glyph { color: var(--cc); font-size: 10px; }

        .xp-note {
          width: 100%; padding: 8px 9px; margin-bottom: 9px;
          background: var(--bg); color: var(--text);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 11px;
        }
        .xp-note:focus { outline: none; border-color: var(--accent); }

        .xp-pad { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
        .xp-key {
          padding: 13px 0; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--text); font-family: var(--font-mono); font-size: 15px;
          min-height: 46px;
        }
        .xp-key:active { border-color: var(--accent); background: rgba(94,234,212,0.05); }
        .xp-key.op { color: var(--muted); font-size: 16px; }
        .xp-key.add {
          grid-column: span 2; color: var(--accent); border-color: var(--accent);
          font-size: 11px; letter-spacing: 0.1em;
        }
        .xp-key.add:disabled { color: var(--muted); border-color: var(--border); }

        /* ---- repeat ---- */
        .xp-again { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; }
        .xp-again-btn {
          display: flex; flex-direction: column; gap: 2px; align-items: flex-start;
          padding: 8px 9px; cursor: pointer; text-align: left; background: transparent;
          border: var(--border-w) solid var(--border); border-left: 2px solid var(--cc);
          border-radius: var(--r-chip); font-family: var(--font-mono); color: var(--text);
        }
        .xp-again-amt { font-size: 12px; font-variant-numeric: tabular-nums; }
        .xp-again-cat {
          font-size: 8.5px; color: var(--muted); max-width: 100%;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }

        .xp-quickstats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;
          margin-top: 14px; padding-top: 11px; border-top: 1px solid var(--track);
        }
        .xp-quickstats > div { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .xp-qs-n { font-size: 14px; color: var(--text); font-variant-numeric: tabular-nums; }
        .xp-qs-l { font-size: 8px; color: var(--muted); letter-spacing: 0.05em; }

        /* ---- sections ---- */
        .xp-section {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 9.5px; letter-spacing: 0.1em; color: var(--muted); margin: 15px 0 7px;
        }
        .xp-section-note { letter-spacing: 0; }

        /* ---- day bars ---- */
        .xp-bars {
          display: flex; align-items: flex-end; gap: 2px; height: 92px;
          padding: 6px 7px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-bar {
          flex: 1 1 0; min-width: 0; height: 100%; padding: 0; cursor: pointer;
          background: transparent; border: none;
          display: flex; align-items: flex-end;
        }
        .xp-bar > span {
          display: block; width: 100%; height: var(--h, 0%);
          background: var(--accent); border-radius: 2px 2px 0 0;
          transition: height 600ms cubic-bezier(0.22,1,0.36,1), background 120ms ease;
        }
        /* A day with nothing spent still has to occupy its slot, or the
           chart reads as "cut off after the 18th" rather than "the month
           has 31 days and 13 of them are still ahead". */
        .xp-bar.empty > span { background: var(--track); min-height: 2px; }
        .xp-bar.today > span { background: #FBBF24; }
        .xp-bar.on > span { background: var(--text); }

        .xp-day-pop {
          margin-top: 8px; padding: 9px 10px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--accent);
          animation: rowIn 180ms ease backwards;
        }
        .xp-day-head {
          display: flex; align-items: baseline; gap: 8px;
          font-size: 10px; color: var(--muted);
          padding-bottom: 6px; border-bottom: 1px solid var(--track);
        }
        .xp-day-total { margin-left: auto; color: var(--accent); font-variant-numeric: tabular-nums; }
        .xp-day-row {
          display: flex; align-items: center; gap: 7px; padding: 5px 0;
          font-size: 9.5px; color: var(--muted); font-variant-numeric: tabular-nums;
        }
        .xp-day-label { flex: 1; min-width: 0; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .xp-day-empty { font-size: 9px; color: var(--muted); padding: 7px 0; }

        /* ---- donut + legend ---- */
        .xp-donut-card {
          display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
          padding: 11px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-legend { flex: 1; min-width: 150px; display: flex; flex-direction: column; gap: 3px; }
        .xp-legend-row {
          display: flex; align-items: center; gap: 6px; font-size: 9.5px;
          color: var(--muted); font-variant-numeric: tabular-nums;
        }
        .xp-legend-label { flex: 1; min-width: 0; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .xp-legend-pct { width: 30px; text-align: right; }
        .xp-legend-amt { width: 56px; text-align: right; color: var(--text); }
        .xp-row-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

        .xp-rows { display: flex; flex-direction: column; gap: 2px; }
        .xp-rowline {
          display: flex; justify-content: space-between; gap: 8px;
          font-size: 9.5px; color: var(--muted); padding: 4px 0;
          border-bottom: 1px solid var(--track);
        }
        .xp-rowline:last-child { border-bottom: none; }
        .xp-rowline-v { color: var(--text); font-variant-numeric: tabular-nums; text-align: right; }

        .xp-compare {
          margin-top: 10px; padding: 8px 10px; font-size: 9px; line-height: 1.6;
          border-radius: var(--r-chip); border: var(--border-w) solid var(--border);
        }
        .xp-compare.up { color: var(--danger); border-left: 2px solid var(--danger); }
        .xp-compare.down { color: var(--accent); border-left: 2px solid var(--accent); }

        /* ---- history ---- */
        .xp-group { margin-bottom: 11px; }
        .xp-group-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 9px; color: var(--muted); margin-bottom: 4px;
          font-variant-numeric: tabular-nums;
        }
        .xp-group-total { color: var(--text); }
        .xp-row {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 10px; margin-bottom: 4px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          background: var(--panel); touch-action: pan-y;
        }
        .xp-row-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
        .xp-row-cat { font-size: 10.5px; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .xp-row-sub { font-size: 8px; color: var(--muted); }
        .xp-row-amt { font-size: 11px; color: var(--text); font-variant-numeric: tabular-nums; }
        .xp-repeat {
          background: transparent; border: none; cursor: pointer; padding: 2px 4px;
          color: var(--muted); font-size: 13px; line-height: 1;
        }
        .xp-repeat:active { color: var(--accent); }

        .xp-foot {
          display: flex; align-items: center; justify-content: space-between;
          gap: 8px; margin-top: 14px; flex-wrap: wrap;
        }
        .xp-cur-pick { display: flex; gap: 3px; }
        .xp-cur-pick button {
          width: 26px; height: 26px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 11px;
        }
        .xp-cur-pick button.on { color: var(--accent); border-color: var(--accent); }
        .xp-note-foot {
          margin-top: 11px; font-size: 8px; color: var(--muted); line-height: 1.7;
          padding-left: 8px; border-left: 2px solid var(--track);
        }

        @media (max-width: 340px) {
          .xp-amount { font-size: 23px; }
          .xp-again { grid-template-columns: 1fr; }
          .xp-key { padding: 11px 0; min-height: 42px; font-size: 14px; }
        }

        /* ---- rngdle infinite (v45) ----
           Tier and band colour is the only decoration. The six "skins" are
           cosmetic layers over the result stage and deliberately read as
           terminal effects -- scanline, grid, tear, churn, slab, hex spill --
           rather than the gradients the original uses. */
        .rngi { padding: 4px 14px 20px; }

        .rngi-wallet {
          display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap;
          padding: 8px 10px; margin-bottom: 8px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel);
        }
        .rngi-wallet-ep { font-size: 17px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .rngi-wallet-l { font-size: 9px; color: var(--muted); letter-spacing: 0.12em; }
        .rngi-wallet-pet { margin-left: auto; font-size: 9px; color: var(--muted); }
        .rngi-wallet-marks { font-size: 9px; color: var(--accent); letter-spacing: 0.06em; }

        .rngi-tabs { display: flex; gap: 5px; margin-bottom: 11px; }
        .rngi-tabs button, .rngi-shelves button {
          flex: 1; padding: 7px 3px; cursor: pointer;
          background: transparent; color: var(--muted);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.05em;
        }
        .rngi-tabs button.on, .rngi-shelves button.on { color: var(--accent); border-color: var(--accent); }

        /* ---- the stage ---- */
        .rngi-stage {
          position: relative; overflow: hidden;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel); padding: 18px 12px 15px; text-align: center;
          margin-bottom: 10px; min-height: 148px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .rngi-stage.band-epic, .rngi-stage.band-anomaly, .rngi-stage.band-mythic { border-color: currentColor; }

        /* ---- the digit stage (v49) ----
           Seven fixed slots, right-aligned, so 777 and 1,000,000 land in the
           same place and the box never jumps between rolls. Ported from
           RNGdle Infinite's choreography; the palette is this app's, because
           their pastel gradients are the one thing that would not survive
           contact with a terminal theme. */
        .rngi-digits {
          display: flex; justify-content: center; align-items: baseline;
          gap: 1px; font-family: var(--font-mono); line-height: 1.05;
          font-variant-numeric: tabular-nums;
        }
        .rngi-digit {
          display: inline-block; width: 0.62em; text-align: center;
          font-size: 34px; color: var(--text);
          transition: color 160ms ease;
        }
        .rngi-digit.blank { opacity: 0; }
        .rngi-digit.scrambling { color: var(--muted); opacity: 0.5; }
        .rngi-digit.settling { animation: rngiDigitLand 320ms cubic-bezier(.2,1.3,.4,1); }
        @keyframes rngiDigitLand {
          from { transform: scale(1.55); text-shadow: 0 0 14px currentColor; }
          to   { transform: scale(1);    text-shadow: 0 0 0 transparent; }
        }
        .rngi-digits.collapse { animation: rngiCollapse 420ms ease; }
        @keyframes rngiCollapse {
          0%   { transform: scale(1); }
          30%  { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        /* Rarity is legible from the number itself before you read the word.
           Terminal grammar: phosphor glow intensity, not gradients. */
        .rngi-digits.t-uncommon .rngi-digit { color: #5EEAD4; text-shadow: 0 0 6px rgba(94,234,212,0.30); }
        .rngi-digits.t-rare     .rngi-digit { color: #60A5FA; text-shadow: 0 0 8px rgba(96,165,250,0.38); }
        .rngi-digits.t-epic     .rngi-digit { color: #C084FC; text-shadow: 0 0 11px rgba(192,132,252,0.45); }
        .rngi-digits.t-anomaly  .rngi-digit {
          color: #FBBF24; text-shadow: 0 0 14px rgba(251,191,36,0.55);
          animation: rngiAnomaly 2.4s ease-in-out infinite;
        }
        .rngi-digits.t-mythic   .rngi-digit {
          color: #FB7185; text-shadow: 0 0 18px rgba(251,113,133,0.65);
          animation: rngiMythic 1.6s steps(1) infinite;
        }
        @keyframes rngiAnomaly { 50% { text-shadow: 0 0 22px rgba(251,191,36,0.85); } }
        @keyframes rngiMythic {
          0%, 88%, 100% { transform: none; }
          90% { transform: translateX(-1.5px) skewX(-7deg); }
          93% { transform: translateX(2px); }
          96% { transform: translateX(-1px) skewX(4deg); }
        }

        .rngi-verdict { margin-top: 9px; display: flex; gap: 8px; justify-content: center; align-items: baseline; }
        .rngi-band { font-size: 11px; letter-spacing: 0.16em; }
        .rngi-rank { font-size: 9px; color: var(--muted); }
        .rngi-scored { margin-top: 4px; font-size: 9.5px; color: var(--muted); font-variant-numeric: tabular-nums; }
        .rngi-banked { margin-top: 7px; display: flex; gap: 5px; justify-content: center; align-items: baseline; }
        .rngi-banked-v { font-size: 16px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .rngi-banked-l { font-size: 9px; color: var(--muted); letter-spacing: 0.08em; }
        .rngi-banked-m { font-size: 9px; color: var(--accent); opacity: 0.75; }
        .rngi-draws, .rngi-drop { margin-top: 6px; font-size: 8.5px; color: var(--muted); }
        .rngi-drop { color: var(--accent); }

        .rngi-digits.idling .rngi-digit { opacity: 0.3; font-size: 30px; }
        .rngi-idle-msg { margin-top: 12px; font-size: 9px; color: var(--muted); line-height: 1.7; }

        .band-trash    { color: #6B7280; }
        .band-common   { color: #9AA4B2; }
        .band-uncommon { color: #5EEAD4; }
        .band-rare     { color: #60A5FA; }
        .band-epic     { color: #C084FC; }
        .band-anomaly  { color: #FBBF24; }
        .band-mythic   { color: #FB7185; }

        /* ---- skins ---- */
        .rngi-aura-layer { position: absolute; inset: 0; pointer-events: none; }
        .aura-static .rngi-aura-layer {
          background: repeating-linear-gradient(
            to bottom, rgba(94,234,212,0.05) 0 1px, transparent 1px 3px);
          animation: rngiScan 2.4s linear infinite;
        }
        @keyframes rngiScan { to { transform: translateY(3px); } }
        .aura-blueprint .rngi-aura-layer {
          background:
            repeating-linear-gradient(to right, rgba(96,165,250,0.09) 0 1px, transparent 1px 14px),
            repeating-linear-gradient(to bottom, rgba(96,165,250,0.09) 0 1px, transparent 1px 14px);
        }
        .aura-glitch .rngi-digits { animation: rngiTear 3.2s steps(1) infinite; }
        @keyframes rngiTear {
          0%, 92%, 100% { transform: none; }
          93% { transform: translateX(-2px) skewX(-6deg); }
          95% { transform: translateX(3px); }
          97% { transform: translateX(-1px) skewX(3deg); }
        }
        .aura-monolith { background: #0B0D10; }
        .aura-monolith .rngi-aura-layer { background: none; }
        .aura-hexdump .rngi-aura-layer {
          background-image: repeating-linear-gradient(
            to bottom, rgba(148,163,184,0.055) 0 9px, transparent 9px 18px);
        }
        .aura-hexdump::before {
          content: "4e 55 4d 42 45 52 20 30 78 30 30 30 30 30 30";
          position: absolute; left: 8px; bottom: 6px; opacity: 0.18;
          font-size: 7px; letter-spacing: 0.1em; color: var(--muted);
        }

        /* ---- staged reveal (v49) ---- */
        .rngi-verdict.pending { opacity: 0.45; }
        .pending-band { color: var(--muted); letter-spacing: 0.3em; }
        .rngi-band.slam { animation: rngiSlam 560ms cubic-bezier(.17,.89,.32,1.28); }
        @keyframes rngiSlam {
          0%   { transform: scale(2.1); opacity: 0; letter-spacing: 0.5em; }
          55%  { transform: scale(0.94); opacity: 1; letter-spacing: 0.1em; }
          100% { transform: scale(1); letter-spacing: 0.16em; }
        }
        .rise { animation: rngiRise 320ms ease backwards; }
        @keyframes rngiRise {
          from { opacity: 0; transform: translateY(9px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rngi-chip.drop { animation: rngiBadgeDrop 300ms cubic-bezier(.2,1.1,.4,1) backwards; }
        @keyframes rngiBadgeDrop {
          from { opacity: 0; transform: translateY(-16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ---- per-tier landing (v57) ----
           Presentation only. The tier, the EP, the badges and the band are all
           decided before anything here runs; this just decides how loudly each
           chip arrives. Six tiers, six treatments, quietest first: a common
           chip barely moves, a mythic one flashes the panel edge. */
        .rngi-chip.drop.t-uncommon { animation: rngiBadgeDrop 280ms cubic-bezier(.2,1.1,.4,1) backwards; }
        .rngi-chip.drop.t-rare {
          animation: rngiBadgeDrop 320ms cubic-bezier(.2,1.1,.4,1) backwards,
                     rngiChipGlint 620ms ease-out 120ms backwards;
        }
        .rngi-chip.drop.t-epic {
          animation: rngiBadgeDrop 340ms cubic-bezier(.2,1.1,.4,1) backwards,
                     rngiChipGlint 700ms ease-out 120ms backwards;
        }
        .rngi-chip.drop.t-anomaly {
          animation: rngiBadgeDrop 340ms cubic-bezier(.2,1.1,.4,1) backwards,
                     rngiChipTear 420ms steps(2) 180ms 1 backwards;
        }
        .rngi-chip.drop.t-mythic {
          animation: rngiBadgeDrop 380ms cubic-bezier(.2,1.1,.4,1) backwards,
                     rngiChipMythic 900ms ease-out 120ms backwards;
          border-color: color-mix(in srgb, #FB7185 55%, var(--border));
        }
        @keyframes rngiChipGlint {
          from { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
          40%  { box-shadow: 0 0 0 2px rgba(94,234,212,0.16); }
          to   { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
        }
        @keyframes rngiChipTear {
          0%, 100% { transform: none; }
          35% { transform: translateX(-1.5px); }
          70% { transform: translateX(1.5px); }
        }
        @keyframes rngiChipMythic {
          0%   { box-shadow: 0 0 0 0 rgba(251,113,133,0); }
          30%  { box-shadow: 0 0 0 3px rgba(251,113,133,0.22), 0 0 14px rgba(251,113,133,0.18); }
          100% { box-shadow: 0 0 0 0 rgba(251,113,133,0); }
        }

        /* ---- roll slots (v57) ---- */
        /* A grid, not a wrap: six panels used to fall 5 + 1, and a lone
           orphan panel at the bottom read as a mistake. Two panels sit side
           by side, three and up sit in a block of at most three columns. */
        .rngi-slots {
          display: grid; gap: 6px; margin: 8px 0 2px;
          width: 100%; max-width: 330px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .rngi-slots.three { grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: 340px; }
        .rngi-slots.dense { gap: 4px; grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: 350px; }
        .rngi-slot {
          display: flex; flex-direction: column; align-items: center; gap: 1px;
          min-width: 62px; padding: 5px 7px 4px;
          background: var(--panel); border: 1px solid var(--border);
          border-radius: 8px;
          animation: rngiSlotIn 260ms cubic-bezier(.2,1.1,.4,1) backwards;
        }
        .rngi-slots.dense .rngi-slot { min-width: 52px; padding: 4px 5px 3px; }
        @keyframes rngiSlotIn {
          from { opacity: 0; transform: translateY(6px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .rngi-slot-n {
          font-family: var(--font-mono);
          font-size: 13px; line-height: 1.1;
          font-variant-numeric: tabular-nums;
          color: var(--text);
        }
        .rngi-slot.spinning .rngi-slot-n { color: var(--muted); opacity: 0.7; }
        .rngi-slot-ep { font-size: 8.5px; color: var(--muted); font-variant-numeric: tabular-nums; }
        .rngi-slot-tag { font-size: 7.5px; letter-spacing: 0.12em; color: var(--muted); min-height: 9px; }
        /* the kept panel carries the status stripe the app uses everywhere:
           cyan means this is the one that counts. */
        .rngi-slot.kept {
          border-color: var(--accent);
          box-shadow: inset 3px 0 0 0 var(--accent);
          animation: rngiSlotIn 260ms cubic-bezier(.2,1.1,.4,1) backwards,
                     rngiSlotKeep 520ms ease-out 200ms backwards;
        }
        .rngi-slot.kept .rngi-slot-n { color: var(--accent); }
        .rngi-slot.kept .rngi-slot-tag { color: var(--accent); }
        .rngi-slot.spare.landed { opacity: 0.5; }
        @keyframes rngiSlotKeep {
          0%   { box-shadow: inset 3px 0 0 0 var(--accent), 0 0 0 0 rgba(94,234,212,0.25); }
          45%  { box-shadow: inset 3px 0 0 0 var(--accent), 0 0 0 4px rgba(94,234,212,0.12); }
          100% { box-shadow: inset 3px 0 0 0 var(--accent), 0 0 0 0 rgba(94,234,212,0); }
        }
        .rngi-slot.t-mythic.kept { border-color: #FB7185; box-shadow: inset 3px 0 0 0 #FB7185; }
        .rngi-slot.t-mythic.kept .rngi-slot-n,
        .rngi-slot.t-mythic.kept .rngi-slot-tag { color: #FB7185; }
        .rngi-slot.t-anomaly.kept { border-color: #C084FC; box-shadow: inset 3px 0 0 0 #C084FC; }
        .rngi-slot.t-anomaly.kept .rngi-slot-n,
        .rngi-slot.t-anomaly.kept .rngi-slot-tag { color: #C084FC; }

        /* ---- hidden draws: the luck race (v57) ---- */
        .rngi-race { display: flex; flex-direction: column; align-items: center; gap: 3px; margin-top: 5px; }
        .rngi-race-head { font-size: 8px; letter-spacing: 0.14em; color: var(--muted); text-transform: uppercase; }
        .rngi-race-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px; }
        .rngi-race-draw {
          font-family: var(--font-mono); font-size: 9.5px;
          font-variant-numeric: tabular-nums;
          padding: 2px 5px; border-radius: 5px;
          border: 1px solid var(--border); color: var(--muted);
          animation: rngiRaceIn 240ms ease-out backwards;
        }
        .rngi-race-draw.won { border-color: var(--accent); color: var(--accent); }
        .rngi-race-tag { margin-left: 3px; font-size: 7px; letter-spacing: 0.1em; opacity: 0.8; }
        @keyframes rngiRaceIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rngi-banked { position: relative; }
        /* The float rises up the RIGHT EDGE, not the centre. Centred, it
           drifted straight across "MYTHIC · top 0.002%" and the scored-EP
           line and made both unreadable for a second and a half. */
        .rngi-ep-float {
          position: absolute; right: 2px; bottom: 100%; pointer-events: none;
          font-size: 11px; color: var(--accent); white-space: nowrap;
          text-shadow: 0 0 8px rgba(94,234,212,0.5);
          animation: rngiEpFloat 1400ms ease-out forwards;
        }
        @keyframes rngiEpFloat {
          0%   { opacity: 0; transform: translateY(6px) scale(0.85); }
          16%  { opacity: 1; transform: translateY(0) scale(1.05); }
          70%  { opacity: 0.85; }
          100% { opacity: 0; transform: translateY(-26px) scale(0.95); }
        }
        .rngi-stage.band-anomaly, .rngi-stage.band-mythic { animation: rngiStageBreathe 3s ease-in-out infinite; }
        @keyframes rngiStageBreathe { 50% { transform: scale(1.008); } }

        @media (prefers-reduced-motion: reduce) {
          .rngi-digit.settling, .rngi-digits.collapse, .rngi-digits.t-anomaly .rngi-digit,
          .rngi-digits.t-mythic .rngi-digit, .rngi-band.slam, .rise, .rngi-chip.drop,
          .rngi-ep-float, .rngi-stage.band-anomaly, .rngi-stage.band-mythic,
          .rngi-slot, .rngi-slot.kept, .rngi-race-draw {
            animation: none !important;
          }
          .rngi-ep-float { display: none; }
        }

        @media (max-width: 340px) { .rngi-digit { font-size: 27px; } }

        /* ---- controls ---- */
        .rngi-controls { text-align: center; margin-bottom: 4px; }
        .rngi-btn {
          padding: 12px 30px; cursor: pointer;
          background: transparent; color: var(--accent);
          border: 1px solid var(--accent); border-radius: var(--r-card);
          font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.16em;
        }
        .rngi-btn:active { background: rgba(94,234,212,0.08); }
        .rngi-btn:disabled { color: var(--muted); border-color: var(--border); cursor: default; }
        .rngi-btn.small { padding: 7px 13px; font-size: 9.5px; letter-spacing: 0.06em; margin-top: 7px; }
        .rngi-btn.ghost { color: var(--muted); border-color: var(--border); }
        .rngi-btn.on { color: #0B0D10; background: var(--accent); }
        .rngi-generate { width: 100%; }

        .rngi-bar {
          height: 3px; background: var(--track); border-radius: 2px;
          overflow: hidden; margin: 2px 0;
        }
        .rngi-bar > span { display: block; height: 100%; background: var(--accent); transition: width 90ms linear; }
        .rngi-bar.reveal > span { background: var(--muted); }

        .rngi-wait {
          font-size: 9.5px; color: var(--muted); letter-spacing: 0.08em;
          margin-top: 5px; font-variant-numeric: tabular-nums;
        }
        .rngi-pace { margin-top: 7px; font-size: 8.5px; color: var(--muted); }
        .rngi-auto {
          margin-top: 7px; padding: 5px 11px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 8.5px;
        }
        .rngi-auto.on { color: var(--accent); border-color: var(--accent); }

        .rngi-offline {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          padding: 11px; margin-bottom: 10px; text-align: center;
          border: var(--border-w) solid var(--accent); border-radius: var(--r-card);
        }
        .rngi-offline-head { font-size: 8.5px; color: var(--muted); letter-spacing: 0.1em; }
        .rngi-offline-ep { font-size: 17px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .rngi-offline-sub { font-size: 8.5px; color: var(--muted); }

        /* ---- sections, chips, rack ---- */
        .rngi-section {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 9.5px; letter-spacing: 0.1em; color: var(--muted); margin: 14px 0 7px;
        }
        .rngi-section-note { letter-spacing: 0; }

        .rngi-chips { display: flex; flex-direction: column; gap: 4px; }
        .rngi-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 7px 9px; border-radius: var(--r-chip);
          border: var(--border-w) solid var(--border); border-left: 2px solid currentColor;
        }
        .rngi-chip.dim { opacity: 0.4; }
        .rngi-chip-ico { font-size: 13px; width: 17px; text-align: center; line-height: 1; }
        .rngi-chip-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
        .rngi-chip-name { font-size: 10.5px; color: var(--text); }
        .rngi-chip-note {
          font-size: 8px; color: var(--muted); line-height: 1.4;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .rngi-chip-ep { font-size: 9px; font-variant-numeric: tabular-nums; }

        .t-common   { color: #9AA4B2; }
        .t-uncommon { color: #5EEAD4; }
        .t-rare     { color: #60A5FA; }
        .t-epic     { color: #C084FC; }
        .t-anomaly  { color: #FBBF24; }
        .t-mythic   { color: #FB7185; }

        .rngi-rack { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; }
        .rngi-skill {
          display: flex; flex-direction: column; gap: 3px; align-items: stretch;
          padding: 7px 9px; cursor: pointer; text-align: left;
          background: transparent; color: var(--muted);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); opacity: 0.6;
        }
        .rngi-skill.ready { opacity: 1; color: var(--text); }
        .rngi-skill.armed { border-color: var(--accent); color: var(--accent); }
        .rngi-skill-name { font-size: 10px; }
        .rngi-skill-charge { font-size: 8px; letter-spacing: 0.06em; }

        /* ---- shop ---- */
        .rngi-shelves { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 7px; }
        .rngi-shelves button { flex: 1 1 28%; }
        .rngi-shelf-blurb { font-size: 8.5px; color: var(--muted); margin-bottom: 9px; }
        .rngi-shelf-blurb.dim { opacity: 0.7; margin-top: -6px; }

        /* ---- v68: the next rung ---- */
        .rngi-next {
          border: 1px solid var(--border); border-radius: 9px;
          padding: 8px 10px; margin-bottom: 9px;
          background: rgba(94,234,212,0.03);
        }
        .rngi-next.ready {
          border-color: var(--accent);
          background: rgba(94,234,212,0.07);
        }
        .rngi-next-top {
          display: flex; align-items: baseline; justify-content: space-between; gap: 8px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.03em;
        }
        .rngi-next-name { color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .rngi-next-left { color: var(--accent2); flex: none; font-variant-numeric: tabular-nums; }
        .rngi-next.ready .rngi-next-left { color: var(--accent); }
        .rngi-next-bar {
          height: 3px; margin-top: 6px; border-radius: 2px;
          background: var(--track); overflow: hidden;
        }
        .rngi-next-bar i {
          display: block; height: 100%; border-radius: 2px;
          background: var(--accent);
          transition: width 320ms cubic-bezier(.22,1,.36,1);
        }
        .rngi-owned-line {
          font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.06em;
          color: var(--muted); opacity: 0.75; margin: 0 0 8px;
        }

        /* the near miss: quiet, and never a lie -- it states the real gap */
        .rngi-near {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.04em;
          color: var(--muted); margin-top: 3px;
          font-variant-numeric: tabular-nums;
        }
        .rngi-items { display: flex; flex-direction: column; gap: 6px; }
        .rngi-item {
          padding: 9px 10px; border-radius: var(--r-chip);
          border: var(--border-w) solid var(--border);
        }
        .rngi-item.owned { border-left: 2px solid var(--accent); }
        .rngi-item.afford { border-left: 2px solid var(--accent); }
        .rngi-item.afford .rngi-item-name { color: var(--accent); }
        .rngi-afford-count { color: var(--accent); }
        .rngi-item.locked { opacity: 0.45; }
        .rngi-item-top { display: flex; justify-content: space-between; gap: 8px; align-items: baseline; }
        .rngi-item-name { font-size: 11px; color: var(--text); }
        .rngi-item-price { font-size: 10px; color: var(--muted); font-variant-numeric: tabular-nums; }
        .rngi-item-price.ok { color: var(--accent); }
        .rngi-item-have { font-size: 8.5px; color: var(--accent); letter-spacing: 0.06em; }
        .rngi-item-desc { margin-top: 4px; font-size: 8.5px; color: var(--muted); line-height: 1.5; }
        .rngi-item-extra { margin-top: 3px; font-size: 8.5px; color: var(--accent); opacity: 0.8; }
        .rngi-item-lock { margin-top: 3px; font-size: 8px; color: var(--danger); }
        .rngi-empty { font-size: 9px; color: var(--muted); padding: 12px 0; text-align: center; }

        /* ---- collection ---- */
        .rngi-filters { display: flex; gap: 4px; flex-wrap: wrap; margin: 9px 0; }
        .rngi-filters button {
          padding: 5px 7px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 8px; color: var(--muted);
        }
        .rngi-filters button.on { border-color: currentColor; }
        .rngi-tierbars { display: flex; gap: 3px; margin: 0 0 9px; }
        .rngi-tierbar { flex: 1; height: 3px; border-radius: 2px; overflow: hidden; background: var(--track); }
        .rngi-tierbar > span {
          display: block; height: 100%; background: currentColor;
          transition: width 600ms cubic-bezier(0.22,1,0.36,1);
        }
        .rngi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
        .rngi-cell {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 3px; padding: 8px 4px; min-height: 54px; position: relative;
          border-radius: var(--r-chip); border: var(--border-w) solid var(--border);
        }
        /* A locked cell has to still read as a cell. At 0.28 opacity with a
           1px solid border the grid dissolved into scattered dots and looked
           broken rather than unfinished. */
        /* A locked cell has to still read as a cell. Dimming it to a dot made
           the grid look broken rather than unfinished, and --track is too
           dark to be a visible edge, so the border stays --border and only
           turns dashed. */
        /* A locked cell keeps its TIER colour at low opacity. Rendered flat
           grey the grid read as broken rather than unfilled, and you could
           not see that the rare rows are the empty ones. */
        .rngi-cell.locked {
          opacity: 0.5; border-style: dashed; border-color: currentColor;
          background: rgba(255,255,255,0.012);
        }
        .rngi-cell.locked .rngi-cell-ico { opacity: 0.4; font-size: 11px; }
        .rngi-cell.locked .rngi-cell-name { opacity: 0.6; letter-spacing: 0.04em; }
        .rngi-cell.got {
          border-color: currentColor;
          box-shadow: inset 0 0 14px -8px currentColor;
        }
        .rngi-cell-ico { font-size: 15px; line-height: 1; }
        .rngi-cell-name {
          font-size: 7.5px; text-align: center; line-height: 1.3; color: var(--muted);
          max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .rngi-cell-n {
          position: absolute; top: 2px; right: 4px; font-size: 7.5px;
          color: var(--muted); font-variant-numeric: tabular-nums;
        }

        /* ---- stats ---- */
        .rngi-mults { display: flex; gap: 5px; flex-wrap: wrap; }
        .rngi-mult {
          font-size: 8.5px; color: var(--accent); padding: 4px 7px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
        }
        .rngi-mult.dim { color: var(--muted); }
        .rngi-note {
          margin-top: 9px; font-size: 8.5px; color: var(--muted); line-height: 1.6;
          padding-left: 8px; border-left: 2px solid var(--track);
        }
        .rngi-rows { display: flex; flex-direction: column; gap: 2px; }
        .rngi-row {
          display: flex; justify-content: space-between; gap: 8px;
          font-size: 9.5px; color: var(--muted); padding: 4px 0;
          border-bottom: 1px solid var(--track);
        }
        .rngi-row:last-child { border-bottom: none; }
        .rngi-row-v { color: var(--text); font-variant-numeric: tabular-nums; }

        .rngi-gate {
          padding: 10px 11px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .rngi-gate-row {
          display: flex; justify-content: space-between; font-size: 9px;
          color: var(--muted); margin-top: 6px; font-variant-numeric: tabular-nums;
        }
        .rngi-gate-row .ok { color: var(--accent); }
        .rngi-gate-note { margin-top: 9px; font-size: 8px; color: var(--muted); line-height: 1.6; }
        .rngi-gate-actions { display: flex; gap: 6px; }

        .rngi-log { display: flex; flex-direction: column; gap: 3px; }
        .rngi-log-row {
          display: grid; grid-template-columns: 1fr 64px 56px; gap: 6px;
          align-items: baseline; font-size: 9.5px; padding: 4px 8px;
          border-radius: var(--r-chip); border: var(--border-w) solid var(--border);
          font-variant-numeric: tabular-nums;
        }
        .rngi-log-n { color: var(--text); }
        .rngi-log-band { font-size: 8px; letter-spacing: 0.05em; }
        .rngi-log-ep { color: var(--accent); text-align: right; }

        .rngi-credit {
          margin-top: 16px; font-size: 7.5px; color: var(--muted);
          line-height: 1.7; opacity: 0.75;
        }

        @media (max-width: 340px) {
          .rngi-grid { grid-template-columns: repeat(2, 1fr); }
          .rngi-rack { grid-template-columns: 1fr; }
        }

        /* ---- ai captions (v40) ---- */
        .cap { padding: 6px 14px 20px; }
        .cap-note {
          margin: 0 0 12px; color: var(--muted); font-size: 9.5px; line-height: 1.65;
          white-space: pre-wrap; font-family: var(--font-mono);
        }
        .cap-drop {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 30px 16px; cursor: pointer;
          border: 1px dashed var(--border); border-radius: 4px;
          color: var(--muted); font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.06em;
        }
        .cap-drop input { display: none; }
        .cap-drop-glyph { font-size: 20px; color: var(--accent); }
        .cap-stage { position: relative; width: 100%; border-radius: 4px; overflow: hidden; }
        .cap-video { width: 100%; display: block; background: #000; }
        .cap-overlay {
          position: absolute; inset: 0; width: 100%; height: 100%;
          pointer-events: none;
        }
        .cap-meta {
          margin: 8px 0 4px; color: var(--muted);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.05em;
        }
        .cap-msg { margin: 6px 0; font-size: 10px; font-family: var(--font-mono); white-space: pre-wrap; }
        .cap-msg.ok { color: var(--accent); }
        .cap-msg.err { color: var(--danger); }
        .cap-progress {
          position: relative; height: 22px; margin: 8px 0;
          border: 1px solid var(--border); border-radius: 3px; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-mono); font-size: 10px; color: var(--text);
        }
        .cap-progress-fill {
          position: absolute; left: 0; top: 0; bottom: 0;
          background: rgba(94,234,212,0.22); transition: width 200ms linear;
        }
        .cap-progress span { position: relative; }
        .cap-styles { display: flex; flex-direction: column; gap: 6px; padding: 2px 0 12px; }
        .cap-style {
          display: flex; flex-direction: column; gap: 2px; align-items: flex-start;
          padding: 9px 11px; cursor: pointer; text-align: left;
          background: transparent; border: 1px solid var(--border); border-radius: 3px;
          font-family: var(--font-mono);
        }
        .cap-style.active { border-color: var(--accent); }
        .cap-style-name { font-size: 11px; color: var(--text); letter-spacing: 0.05em; }
        .cap-style.active .cap-style-name { color: var(--accent); }
        .cap-style-hint { font-size: 9px; color: var(--muted); }
        .cap-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }

        /* ---- v41 polish: borders, focus, press ----------------------
           Three things were inconsistent across the app: every surface had
           a hand-picked radius, nothing showed a keyboard focus ring, and
           taps had no acknowledgement other than the action happening. */

        /* One focus treatment everywhere, and only for keyboards -- a mouse
           or thumb tap should not leave a ring behind. */
        :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: var(--r-btn);
        }

        /* Buttons acknowledge the press itself. 60ms is under the threshold
           where it reads as lag but over the one where it reads as nothing. */
        button:not(:disabled):active {
          transform: translateY(0.5px) scale(0.985);
          transition: transform 60ms ease;
        }

        /* Cards lift their border rather than their shadow -- DESIGN.md
           forbids raised cards, and on a dark UI a brighter hairline reads
           as "live" more clearly than a shadow does anyway. */
        .note-card, .quest-habit-card, .tool-card, .daily-card, .routine-row {
          transition: border-color 160ms ease, background-color 160ms ease;
        }
        .tool-card:active, .note-card:active { border-color: var(--accent); }

        /* Themes with a glow budget get one, on the accent surfaces only. */
        .pomo-btn.primary, .cap-chip.on {
          box-shadow: 0 0 var(--glow-w) var(--glow);
        }
        .tabs button.active::after { box-shadow: 0 0 calc(var(--glow-w) * 2) var(--glow); }

        .type-caret {
          display: inline-block;
          width: 6px; height: 1em;
          margin-left: 2px;
          vertical-align: -0.12em;
          background: var(--accent);
          animation: caretBlink 1.1s steps(1) infinite;
        }
        .type-caret.idle { opacity: 0.45; }
        @keyframes caretBlink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .type-caret { animation: none; opacity: 0.45; }
        }

        /* Section headers get a hairline that runs to the edge -- cheap,
           and it stops long lists reading as one undifferentiated column. */
        .section-header:not(.habits-header):not(.tool-header) {
          display: flex; align-items: center; gap: 10px;
        }
        /* Plain headers only. habits-header and tool-header already carry a
           control on the right, and a rule drawn after it reads as a stray
           line rather than a divider. */
        .section-header:not(.habits-header):not(.tool-header)::after {
          content: ""; flex: 1 1 auto; height: 1px;
          background: var(--track);
        }

        /* ---- captions editor (v41) ---- */
        .cap-preview-wrap {
          position: relative; display: flex; justify-content: center;
          margin: 4px 0 10px;
        }
        /* Capped by HEIGHT, not width: a 9:16 clip at 300px wide is 533px
           tall, which pushed every control below the fold on a phone. */
        .cap-preview {
          max-width: 100%; max-height: 42vh; width: auto; height: auto; display: block;
          border: 1px solid var(--border); border-radius: var(--r-card); background: #000;
        }
        .cap-preview-tag {
          position: absolute; top: 6px; right: 8px;
          padding: 2px 5px; border-radius: 2px;
          background: rgba(11,13,16,0.72);
          font-family: var(--font-mono); font-size: 8.5px;
          color: var(--muted); letter-spacing: 0.08em;
        }
        /* the real clip is the pixel source for the preview canvas, never
           shown directly -- one surface, so what you tune is what you see */
        .cap-source { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
        .cap-file { position: relative; overflow: hidden; text-align: center; line-height: 1.1; }
        .cap-file input { position: absolute; inset: 0; opacity: 0; width: 100%; }
        .cap-editor { margin-top: 4px; }
        .cap-chips { display: flex; flex-wrap: wrap; gap: 5px; padding: 2px 0 8px; }
        .cap-chips.tight { padding: 0; }
        .cap-chip {
          padding: 6px 10px; cursor: pointer; border-radius: var(--r-chip);
          background: transparent; border: 1px solid var(--border); color: var(--muted);
          font-size: 10.5px; letter-spacing: 0.04em;
          font-family: var(--font-mono);
        }
        .cap-chip.on { border-color: var(--accent); color: var(--accent); }
        .cap-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 5px 0;
        }
        .cap-row.wide { flex-direction: column; align-items: stretch; gap: 5px; }
        .cap-row-label {
          font-family: var(--font-mono); font-size: 10.5px;
          color: var(--muted); letter-spacing: 0.05em;
        }
        .cap-step { display: flex; align-items: center; gap: 4px; }
        .cap-step button {
          width: 30px; height: 28px; cursor: pointer; border-radius: 3px;
          background: transparent; border: 1px solid var(--border); color: var(--text);
          font-family: var(--font-mono); font-size: 13px;
        }
        .cap-step-val {
          min-width: 54px; text-align: center; color: var(--accent);
          font-family: var(--font-mono); font-size: 11px;
          font-variant-numeric: tabular-nums;
        }
        .cap-swatches { display: flex; flex-wrap: wrap; gap: 5px; }
        .cap-swatch {
          width: 26px; height: 26px; border-radius: 3px; cursor: pointer;
          border: 1px solid var(--border); padding: 0;
        }
        .cap-swatch.on { border-color: var(--accent); border-width: 2px; }
        .cap-swatch.custom {
          position: relative; display: flex; align-items: center; justify-content: center;
          background: transparent; color: var(--muted); font-size: 13px;
        }
        .cap-swatch.custom input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; }
        .cap-hint {
          color: var(--muted); font-size: 9.5px; padding-bottom: 6px;
          font-family: var(--font-mono);
        }

        /* ---- pomodoro ---- */
        .pomo { padding: 6px 14px 20px; }
        .pomo-dial { position: relative; width: 100%; max-width: 260px; margin: 6px auto 2px; }
        .pomo-ring { width: 100%; display: block; transform: rotate(-90deg); }
        .pomo-ring-track { fill: none; stroke: var(--track); stroke-width: 3; }
        .pomo-ring-fill {
          fill: none; stroke-width: 3; stroke-linecap: butt;
          transition: stroke-dashoffset 260ms linear;
        }
        .pomo-centre {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 4px;
        }
        .pomo-clock {
          font-family: var(--font-mono);
          font-size: 34px; font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em; color: var(--text);
        }
        .pomo-phase {
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
        }
        .pomo-pips {
          display: flex; align-items: center; gap: 5px;
          justify-content: center; margin: 10px 0 14px;
        }
        .pomo-pip {
          width: 11px; height: 11px; border-radius: 50%; padding: 0;
          border: 1px solid var(--border); background: transparent; cursor: pointer;
        }
        .pomo-pip.done { background: var(--muted); border-color: var(--muted); }
        .pomo-pip.active { background: var(--accent); border-color: var(--accent); }
        .pomo-round {
          margin-left: 6px; color: var(--muted);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.08em;
        }
        .pomo-phase-pick { display: flex; gap: 6px; justify-content: center; margin: 2px 0 10px; }
        .pomo-chip {
          flex: 1; max-width: 100px; padding: 7px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: var(--r-btn);
          color: var(--muted); font-family: var(--font-mono);
          font-size: 10.5px; letter-spacing: 0.06em;
        }

        .pomo-controls { display: flex; gap: 6px; justify-content: center; margin-bottom: 18px; }
        .pomo-btn {
          flex: 1; max-width: 110px; padding: 9px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: var(--r-btn);
          color: var(--muted); font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 0.08em;
          transition: color 140ms ease, border-color 140ms ease;
        }
        .pomo-btn.primary { color: var(--accent); border-color: var(--accent); }
        .pomo-btn:active { border-color: var(--accent); color: var(--accent); }
        .pomo-settings { display: flex; flex-direction: column; gap: 6px; padding: 2px 0 12px; }
        .pomo-set { border: 1px solid var(--border); border-radius: 3px; }
        .pomo-set.open { border-color: var(--accent); }
        .pomo-set-face {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 9px 11px; cursor: pointer; background: transparent; border: none;
          font-family: var(--font-mono);
        }
        .pomo-set-label { font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }
        .pomo-set-value { font-size: 12px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .pomo-stepper { display: flex; gap: 4px; padding: 0 8px 8px; }
        .pomo-stepper button {
          flex: 1; padding: 7px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: 3px;
          color: var(--text); font-family: var(--font-mono); font-size: 12px;
        }
        .pomo-stepper button:disabled { opacity: 0.25; cursor: default; }
        .pomo-note {
          margin: 0; color: var(--muted); font-size: 9.5px; line-height: 1.65;
          font-family: var(--font-mono);
          display: flex; flex-direction: column; gap: 5px;
        }

        /* v63: the swipe's receipt. Sized like the old glyph buttons so the
           row height does not move when a quest is answered. */
        .quest-state {
          width: 22px; height: 22px; flex: none; margin-top: 4px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 6px; font-size: 12px; font-weight: 700; line-height: 1;
          pointer-events: none;
        }
        .quest-state.done { background: var(--accent2); color: var(--bg); }
        .quest-state.slip { background: var(--danger); color: var(--bg); }

        /* a slipped day reads as a deficit, not as an untouched row */
        .quest-habit-card.slipped { border-left: 2px solid var(--danger); }

        .edit-xp-row { display: flex; gap: 10px; align-items: center; }
        .edit-xp-field, .new-xp-field { display: flex; align-items: center; gap: 5px; }
        .edit-xp-tag {
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.06em; color: var(--muted);
        }
        .edit-xp-tag.gain { color: var(--accent); }
        .edit-xp-tag.lose { color: var(--danger); }

        .edit-opp-row { display: flex; align-items: center; gap: 6px; }
        .edit-opp-select {
          flex: 1; min-width: 0; background: var(--bg);
          border: 1px solid var(--border); border-radius: 4px;
          color: var(--text); font-family: var(--font-mono);
          font-size: 10px; padding: 4px 6px; outline: none;
        }
        .edit-opp-select:focus { border-color: var(--accent); }

        /* ---- key pool reordering ---- */
        .keypool-move {
          background: transparent; border: 1px solid var(--border);
          border-radius: 4px; color: var(--muted); cursor: pointer;
          font-size: 11px; line-height: 1; padding: 2px 6px; flex: none;
          transition: all 140ms ease;
        }
        .keypool-move:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .keypool-move:disabled { opacity: 0.25; cursor: default; }

        /* ---- backup popup ---- */
        .backup-ask-backdrop {
          position: fixed; inset: 0; z-index: 60;
          background: rgba(0,0,0,0.72);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: fadeIn 160ms ease;
        }
        .backup-ask {
          width: 100%; max-width: 340px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 2px solid var(--accent); border-radius: 8px;
          padding: 14px;
        }
        .backup-ask-head {
          display: flex; align-items: baseline; gap: 6px;
          font-family: var(--font-mono); font-size: 10px;
          margin-bottom: 8px;
        }
        .backup-ask-body {
          font-family: var(--font-mono); font-size: 10px;
          line-height: 1.6; color: var(--muted); white-space: pre-wrap; margin: 0;
        }
        .backup-ask-warn {
          font-family: var(--font-mono); font-size: 9.5px;
          line-height: 1.6; color: var(--accent2);
          border: 1px solid var(--border); border-radius: 4px;
          padding: 7px 8px; margin-top: 10px;
        }
        .backup-ask-actions { flex-wrap: wrap; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .backup-ask-backdrop { animation: none; }
        }

        .del-btn.armed {
          color: var(--bg); background: var(--danger); border-color: var(--danger);
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.04em; padding: 3px 7px; border-radius: 5px;
          white-space: nowrap;
        }

        /* ---- daily quests (v36) ---- */
        .daily-grid { display: flex; flex-direction: column; gap: 8px; padding: 0 18px 4px; }
        .daily-card {
          display: flex; align-items: center; gap: 10px;
          background: var(--panel); border: var(--border-w) solid var(--border);
          border-left: 3px solid var(--dc); border-radius: var(--r-card);
          padding: 12px; cursor: pointer; text-align: left;
          font-family: var(--font-mono);
          transition: border-color 140ms ease, opacity 200ms ease;
        }
        .daily-card:hover:not(:disabled) { border-color: var(--dc); }
        .daily-card:disabled { cursor: default; opacity: 0.45; }
        .daily-card.done .daily-text { text-decoration: line-through; }
        .daily-diff {
          font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--dc); flex: none; width: 34px;
        }
        .daily-text { flex: 1; min-width: 0; font-size: 12.5px; color: var(--text); }
        .daily-coins { font-size: 10px; color: var(--accent2); flex: none; }

        /* ---- daily task tags (v53) ---- */
        /* Column, not a row: two tags at 9px still fit beside a 100-point
           coin figure on a 360px screen only if they stack. */
        .daily-tags {
          display: flex; flex-direction: column; align-items: flex-end;
          gap: 2px; flex: none; max-width: 42%;
        }
        .daily-tag {
          font-size: 8.5px; letter-spacing: 0.04em; white-space: nowrap;
          color: var(--tc, var(--muted));
          border: var(--border-w) solid var(--tc, var(--border));
          border-radius: 3px; padding: 1px 4px; opacity: 0.9;
          font-variant-numeric: tabular-nums;
        }
        .daily-tag.none { color: var(--muted); border-color: var(--border); opacity: 0.6; }
        .inv-tag-chips { padding-top: 0; }
        .inv-suggest {
          font-family: var(--font-mono); font-size: 9px; color: var(--muted);
          background: none; border: var(--border-w) dashed var(--border);
          border-radius: 3px; padding: 3px 7px; cursor: pointer;
        }
        .inv-suggest:hover { color: var(--accent); border-color: var(--accent); }
        .inv-tag-note {
          font-family: var(--font-mono); font-size: 8.5px; color: var(--muted);
          padding: 0 18px 10px;
        }
        .inv-tag-dot {
          display: inline-block; width: 5px; height: 5px; border-radius: 50%;
          margin-left: 5px; vertical-align: middle;
        }
        .daily-note {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          font-family: var(--font-mono); font-size: 9px;
          color: var(--muted); padding: 6px 18px 12px;
        }
        .quest-habit-card.drawn { border-left: 2px solid var(--accent); }

        /* three children now: HABITS, the today line, and the reorder button.
           The today line takes the space, so the button stays pinned right. */
        .habits-header { display: flex; align-items: center; gap: 8px; }
        .habits-header .habits-today { flex: 1 1 auto; margin-left: 0; }
        .habits-header .radar-edit { flex: 0 0 auto; }
        .radar-edit.on { border-color: var(--accent); color: var(--accent); }
        .note-empty {
          font-family: var(--font-mono); font-size: 10px;
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text);
        }

        .vault-check {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
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
          /* v35 added a second mark button, so the row now carries link, ✗, ✓,
             edit and delete. The old 10px gap pushed delete off the edge on a
             360px phone -- tighten the gap and let the label absorb the slack
             rather than dropping a control. */
          gap: 6px;
          background: var(--panel);
          border: var(--border-w) solid var(--border);
          border-radius: var(--r-card);
          padding: 10px 10px;
        }
        /* the label is the only thing that should shrink */
        .quest-habit-card > .quest-habit-main { min-width: 0; flex: 1 1 auto; }
        .quest-habit-card > button { flex: 0 0 auto; }

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
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--muted);
        }

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
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent2);
        }

        .reward-claim {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
          font-size: 12.5px;
          outline: none;
        }

        .edit-row-subs { flex-wrap: wrap; gap: 5px; }

        .sub-chip {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 13px; font-weight: 600; color: var(--text);
          letter-spacing: 0.04em;
        }
        .ai-intro-sub { font-size: 11px; color: var(--muted); line-height: 1.5; }

        .ai-key-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono); font-size: 10px;
        }
        .ai-gate-steps a {
          color: var(--accent); text-decoration: none;
          border-bottom: 1px solid var(--glow);
          word-break: break-all;
        }
        .ai-key-input {
          width: 100%; box-sizing: border-box;
          background: #0E1116; border: 1px solid var(--border); border-radius: 8px;
          color: var(--text); font-family: var(--font-mono);
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
          color: var(--text); font-family: var(--font-ui);
          font-size: 12.5px; line-height: 1.5; padding: 10px 12px;
          outline: none; transition: border-color 140ms ease;
        }
        .ai-input::placeholder { color: #4B5563; }
        .ai-input:focus { border-color: var(--accent); }
        .ai-input:disabled { opacity: 0.55; }

        .ai-send {
          align-self: flex-end; background: var(--accent); color: #07100E;
          border: none; border-radius: 7px;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 9.5px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-counts {
          display: flex; gap: 8px;
          font-family: var(--font-mono);
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

        .ai-sign { font-family: var(--font-mono); font-size: 13px; font-weight: 700; line-height: 1; }
        .ai-diff-row.add .ai-sign    { color: #7EE787; }
        .ai-diff-row.edit .ai-sign   { color: var(--accent2); }
        .ai-diff-row.remove .ai-sign { color: var(--danger); }

        .ai-surface {
          font-family: var(--font-mono);
          font-size: 9px; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-text { font-size: 12px; color: var(--text); line-height: 1.4; word-break: break-word; }
        .ai-skip-mark {
          font-family: var(--font-mono);
          font-size: 8.5px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--muted);
        }

        .ai-actions { display: flex; gap: 8px; margin-top: 12px; }
        .ai-apply {
          flex: 1; background: var(--accent); color: #07100E; border: none;
          border-radius: 7px; padding: 10px 0; cursor: pointer;
          font-family: var(--font-mono);
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .ai-apply:disabled { opacity: 0.35; cursor: default; }
        .ai-apply:not(:disabled):active { transform: scale(0.98); }
        .ai-discard {
          background: transparent; color: #9AA3AF;
          border: 1px solid var(--border); border-radius: 7px;
          padding: 10px 18px; cursor: pointer;
          font-family: var(--font-mono);
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
        /* ---- state edge (v43) ---------------------------------------
           The colour ramp is gone. A card is either untouched (theme
           border), done (cyan) or slipped (red) -- three states, no
           spectrum, and the one colour on screen means something. */
        .edge {
          border: 1px solid var(--edge, var(--border));
          /* DESIGN.md's "no card shadows" rule was lifted deliberately --
             see the note at the top of that file. This is a contact shadow,
             not elevation: it grounds the card without faking height. */
          box-shadow: 0 1px 0 rgba(0,0,0,0.35), 0 6px 18px -12px rgba(0,0,0,0.8);
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .edge.done, .edge.slipped { box-shadow: 0 0 0 1px var(--edge) inset; }
        .routine-row.done.edge, .quest-habit-card.done.edge { opacity: 0.8; }

      `}</style>

      <div className="panel">
        {update.pending && (
          <div
            className="update-bar"
            role="button"
            tabIndex={0}
            onClick={update.apply}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") update.apply(); }}
          >
            <span className="update-bar-icon">▲</span>
            <span>new build ready — tap to reload</span>
          </div>
        )}
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
            <TypedName />
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
              onClick={() => { setPaletteOpen(true); sound.click(); }}
              aria-label="Search"
              title="Search (ctrl+k)"
            >
              <svg viewBox="0 0 24 24" width="15" height="15">
                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              className="titlebar-icon-btn"
              onClick={() => { setShowThemes(true); sound.click(); }}
              aria-label="Themes"
              title="Themes"
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
            <button className="titlebar-icon-btn" onClick={() => { setBackupAsk(true); sound.click(); }} aria-label="Export backup" title="Export backup">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M12 4v12M7 11l5 5 5-5M4 20h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="clock">
              {new Date(now).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
            </span>
          </div>
        </div>

        {backupAsk && (
          <div className="backup-ask-backdrop" onClick={() => setBackupAsk(false)}>
            <div className="backup-ask" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Export backup">
              <div className="backup-ask-head">
                <span className="note-prompt">~/backup</span>
                <span className="note-when">everything in one file</span>
              </div>
              <pre className="backup-ask-body">
tasks, routines, habits, notes, tags, achievements,
pet, wallet and themes are always included.
              </pre>
              <div className="backup-ask-warn">
                ⚠ including API keys makes this file a credential.
                anyone you send it to can spend your quota.
              </div>
              <div className="note-actions backup-ask-actions">
                <button className="note-btn save" onClick={() => { setBackupAsk(false); exportData(false); }}>
                  export
                </button>
                <button className="note-btn danger" onClick={() => { setBackupAsk(false); exportData(true); }}>
                  export with API keys
                </button>
                <button className="note-btn" onClick={() => setBackupAsk(false)}>cancel</button>
              </div>
            </div>
          </div>
        )}

        {dataMsg && (
          <div className={`data-toast ${dataMsg.type}`}>{dataMsg.text}</div>
        )}

        {/* A real tablist: screen readers announce "tab 3 of 6, selected"
            instead of six unrelated buttons. aria-selected also gives the
            active tab a programmatic state, not just a CSS class. */}


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
            daily={daily}
            inventory={inventory}
            onQuestComplete={completeQuest}
            tags={tagCtl.tags}
            vaultHabits={vaultHabits}
            habits={habits}
            rewards={rewards}
            setRewards={setRewards}
            totalXP={totalXP}
            coins={achCtl.coins}
            spend={(n) => achCtl.addCoins(-n)}
            setTab={changeTab}
            notes={notes}
            setNotes={setNotes}
          />
        ) : tab === "tasks" ? (
          <DailyView
            inventory={inventory}
            setInventory={setInventory}
            daily={daily}
            setDaily={setDaily}
            routines={routines}
            onReward={(c) => achCtl.addCoins(c)}
            onComplete={completeQuest}
            coins={achCtl.coins}
            tags={tagCtl.tags}
          />
        ) : tab === "routines" ? (
          <RoutinesView routines={routines} setRoutines={setRoutines} />
        ) : tab === "vault" ? (
          <VaultView />
        ) : tab === "tools" ? (
          <ToolsView onReward={(c) => achCtl.addCoins(c)} />
        ) : tab === "quest" ? (
          <QuestView
            tagCtl={tagCtl}
            habits={habits}
            setHabits={setHabits}
            inventory={inventory}
            setInventory={setInventory}
            rewards={rewards}
            setRewards={setRewards}
            coins={achCtl.coins}
            spend={(n) => achCtl.addCoins(-n)}
          />
        ) : (
          <CompanionView
            petCtl={petCtl}
            state={{
              routines, vaultHabits, habits, rewards, totalXP,
              tags: tagCtl.tags, inventory, notes,
              expenses: money.items, expenseCats: money.cats,
              recurring: money.rules, currency: money.currency,
              coins: achCtl.coins,
            }}
            setters={{
              setRoutines, setVaultHabits, setHabits, setRewards,
              setInventory, setNotes, setMoney, tagCtl,
            }}
            showDataMsg={showDataMsg}
            ctx={{
              pet: petCtl.pet,
              level: currentLevel,
              hour: getISTParts().hour,
              phase: themeCtl.phase.id,
              doneToday: habits.filter((h) => habitDoneOn(h, getISTDateString(0))).length,
              totalToday: habits.length,
              streak: habits.reduce((m, h) => Math.max(m, computeStreak(normaliseHistory(h.history).filter((e) => e.t === "done").map((e) => e.d))), 0),
              routineNow: null,
              nextRoutine: null,
            }}
          />
        )}
        </div>

        {recurNote && <div className="recur-note">{recurNote}</div>}

        {paletteOpen && (
          <CommandPalette
            onClose={() => setPaletteOpen(false)}
            onRun={(fn) => fn()}
            buildItems={() => {
              const items = [];
              for (const [id, label] of [["today","today"],["tasks","tasks"],["routines","routines"],
                                         ["vault","vault"],["quest","quest"],["tools","tools"],
                                         ["pet", petCtl.pet.name.toLowerCase()]]) {
                items.push({ key: `tab-${id}`, kind: "tab", label, run: () => changeTab(id) });
              }
              for (const h of habits) {
                items.push({
                  key: `q-${h.id}`, kind: "quest", label: h.label,
                  hint: (habitTags(h, tagCtl.tags)[0] || ""),
                  run: () => { changeTab("quest"); setTimeout(() => scrollToQuest(h.id), 260); },
                });
              }
              for (const t of TOOLS) {
                items.push({ key: `t-${t.id}`, kind: "tool", label: t.name, run: () => changeTab("tools") });
              }
              for (const t of tasks.filter((x) => !x.done).slice(0, 40)) {
                items.push({ key: `task-${t.id}`, kind: "task", label: t.text, run: () => changeTab("tasks") });
              }
              return items;
            }}
          />
        )}

        <div className="tabs" role="tablist" aria-label="Sections">
          {TAB_DEFS.map(([id, label], i) => {
            const dist = Math.abs(i - activeTabIndex);
            // the magnification ladder: the selected tab stands up, its
            // neighbours lean in, the far ends settle back
            // 1, 0.955, 0.91, 0.865 -- a real falloff at every step, not a
            // single hard step with a flat tail
            const mag = 1 - Math.min(dist, 3) * 0.045;
            return (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={tab === id}
                aria-controls="tab-panel"
                aria-label={label}
                title={label}
                style={{ "--mag": mag, "--dist": dist }}
                className={`${id === "pet" ? "tab-pet " : ""}${tab === id ? "active" : ""}`.trim()}
                onClick={() => changeTab(id)}
              >
                <span className="tab-dot" style={{ animationDelay: `${i * 0.21}s` }} />
                {/* the magnification scales this wrapper, not the button:
                    transform shrinks the hit area too, and at 360px the far
                    tabs fell to 43.99px -- under the 44px minimum */}
                <span className="tab-inner">
                  <TabIcon id={id} />
                  <span className="tab-label">{label}</span>
                </span>
              </button>
            );
          })}
          {/* one puck that travels, so switching tabs reads as a move rather
              than as one underline vanishing and another appearing */}
          <span
            className="tab-puck"
            aria-hidden="true"
            style={{
              width: `${100 / TAB_DEFS.length}%`,
              transform: `translateX(${activeTabIndex * 100}%)`,
            }}
          />
          {/* a slow tick crossing the bar: the only thing here that moves
              when you are not touching it */}
          <span className="tab-sweep" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

const TAB_DEFS_BASE = [
  ["today", "today"],
  ["tasks", "tasks"],
  ["routines", "routines"],
  ["vault", "vault"],
  ["quest", "quest"],
  ["tools", "tools"],
  ["pet", "pet"],
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(TodoApp));
