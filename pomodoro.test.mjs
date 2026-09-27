// pomodoro.test.mjs
//
// The focus timer's arithmetic (v39).
//
// Everything here is about time the app did not witness. A countdown that
// decrements a counter is wrong the moment the phone sleeps, so the timer
// stores an absolute end time and derives everything from it -- and these
// tests are mostly about what happens when you come back much later.

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
  } else {
    i = SRC.indexOf("=", m.index) + 1;
  }

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
  "POMO_DEFAULTS", "POMO_LIMITS", "POMO_STALE_MS",
  "sanitisePomodoroSettings", "pomodoroPhaseMinutes", "nextPomodoroPhase",
  "pomodoroCoins", "formatClock", "resolvePomodoroSession", "resolveBootPomodoro",
];
const M = new Function([...NAMES.map(slice), `return {${NAMES.join(",")}};`].join("\n\n"))();

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- settings --------------------------------------------------------------

T("defaults are the classic 25/5/15 x4", () => {
  assert.deepEqual(M.POMO_DEFAULTS, { work: 25, short: 5, long: 15, rounds: 4 });
});

T("settings are clamped, not trusted", () => {
  const s = M.sanitisePomodoroSettings({ work: 0, short: 999, long: -4, rounds: 40 });
  assert.equal(s.work, 1);      // a zero-minute block would end instantly
  assert.equal(s.short, 60);
  assert.equal(s.long, 1);
  assert.equal(s.rounds, 12);
});

T("junk falls back to the default rather than NaN", () => {
  const s = M.sanitisePomodoroSettings({ work: "abc", rounds: null });
  assert.equal(s.work, 25);
  assert.equal(s.rounds, 4);
});

T("fractional minutes are rounded, not floored to zero", () => {
  assert.equal(M.sanitisePomodoroSettings({ work: 25.6 }).work, 26);
});

T("phase lengths read from settings", () => {
  const s = { work: 50, short: 10, long: 30, rounds: 3 };
  assert.equal(M.pomodoroPhaseMinutes("work", s), 50);
  assert.equal(M.pomodoroPhaseMinutes("short", s), 10);
  assert.equal(M.pomodoroPhaseMinutes("long", s), 30);
  assert.equal(M.pomodoroPhaseMinutes("nonsense", s), 50); // unknown = focus
});

// ---- the cycle -------------------------------------------------------------

T("a full set walks work/short x4 then one long break", () => {
  const s = { ...M.POMO_DEFAULTS, rounds: 4 };
  let cur = { phase: "work", round: 1 };
  const seen = [];
  for (let i = 0; i < 8; i++) {
    seen.push(`${cur.phase}${cur.round}`);
    cur = M.nextPomodoroPhase(cur.phase, cur.round, s);
  }
  assert.deepEqual(seen, [
    "work1", "short1", "work2", "short2", "work3", "short3", "work4", "long4",
  ]);
});

T("after the long break the set restarts at round 1", () => {
  const s = { ...M.POMO_DEFAULTS, rounds: 4 };
  assert.deepEqual(M.nextPomodoroPhase("long", 4, s), { phase: "work", round: 1 });
});

T("with one round there is no short break at all", () => {
  const s = { ...M.POMO_DEFAULTS, rounds: 1 };
  assert.deepEqual(M.nextPomodoroPhase("work", 1, s), { phase: "long", round: 1 });
});

T("the round counter never runs past the configured total", () => {
  // shrinking rounds mid-set used to leave "round 5/4" on screen
  const s = { ...M.POMO_DEFAULTS, rounds: 3 };
  assert.deepEqual(M.nextPomodoroPhase("short", 3, s), { phase: "work", round: 3 });
});

// ---- payout ----------------------------------------------------------------

T("a focus block pays a coin a minute", () => {
  assert.equal(M.pomodoroCoins(25), 25);
  assert.equal(M.pomodoroCoins(50), 50);
});

T("payout is capped so a long block can't out-earn a hard quest by much", () => {
  assert.equal(M.pomodoroCoins(120), 60);   // hard daily quest pays 100
  assert.equal(M.pomodoroCoins(0), 1);
  assert.equal(M.pomodoroCoins(-5), 1);
});

// ---- the clock -------------------------------------------------------------

T("the clock reads as minutes and seconds", () => {
  assert.equal(M.formatClock(25 * 60000), "25:00");
  assert.equal(M.formatClock(65 * 1000), "01:05");
  assert.equal(M.formatClock(0), "00:00");
  assert.equal(M.formatClock(-500), "00:00");   // never negative
});

T("the clock rounds up, so it never shows 00:00 with time left", () => {
  // flooring here means the last second of every block displays as done
  assert.equal(M.formatClock(1), "00:01");
  assert.equal(M.formatClock(59_999), "01:00");
});

T("over an hour it grows an hours field instead of showing 90:00", () => {
  assert.equal(M.formatClock(3_600_000), "1:00:00");
  assert.equal(M.formatClock(90 * 60000), "1:30:00");
});

// ---- coming back later -----------------------------------------------------

const NOW = 1_800_000_000_000;

T("a paused session has nothing to resolve", () => {
  const r = M.resolvePomodoroSession({ phase: "work", running: false, remainingMs: 60000 }, NOW);
  assert.equal(r.finished, null);
});

T("a running session mid-block has nothing to resolve", () => {
  const r = M.resolvePomodoroSession({ phase: "work", running: true, endsAt: NOW + 300000 }, NOW);
  assert.equal(r.finished, null);
});

T("a block that ended while the app was closed counts as finished", () => {
  const r = M.resolvePomodoroSession({ phase: "work", running: true, endsAt: NOW - 120000 }, NOW);
  assert.equal(r.finished, "work");
  assert.equal(r.stale, false);
  assert.equal(r.overdueMs, 120000);
});

T("a block that ended hours ago is abandoned, not completed", () => {
  // otherwise leaving the app open in a pocket overnight pays out a focus
  // block nobody did
  const r = M.resolvePomodoroSession(
    { phase: "work", running: true, endsAt: NOW - (M.POMO_STALE_MS + 1) }, NOW
  );
  assert.equal(r.finished, "work");
  assert.equal(r.stale, true);
});

T("the stale cutoff is two hours", () => {
  assert.equal(M.POMO_STALE_MS, 2 * 60 * 60 * 1000);
});

T("a missing or malformed session resolves to nothing", () => {
  assert.equal(M.resolvePomodoroSession(null, NOW).finished, null);
  assert.equal(M.resolvePomodoroSession({ running: true }, NOW).finished, null);
});

// ---- boot ------------------------------------------------------------------
// resolveBootPomodoro exists because doing this in a mount effect was a bug:
// React ran the per-tick completion effect in the same pass, with the
// pre-catch-up session still in scope, so an abandoned block took BOTH paths
// and paid out. Found by a browser test, pinned here.

const SETTINGS = { work: 25, short: 5, long: 15, rounds: 4 };

T("a fresh install boots idle with no payout", () => {
  const b = M.resolveBootPomodoro({}, NOW);
  assert.equal(b.session, null);
  assert.equal(b.payout, 0);
  assert.deepEqual(b.settings, SETTINGS);
});

T("a block still running is left exactly as it was", () => {
  const session = { phase: "work", round: 2, running: true, endsAt: NOW + 60000 };
  const b = M.resolveBootPomodoro({ settings: SETTINGS, session }, NOW);
  assert.deepEqual(b.session, session);
  assert.equal(b.payout, 0);
});

T("a focus block finished while away advances and pays once", () => {
  const b = M.resolveBootPomodoro(
    { settings: SETTINGS, session: { phase: "work", round: 1, running: true, endsAt: NOW - 60000 } }, NOW
  );
  assert.equal(b.session.phase, "short");
  assert.equal(b.session.running, false, "it must not still be counting");
  assert.equal(b.payout, 25);
});

T("a break finished while away advances but pays nothing", () => {
  const b = M.resolveBootPomodoro(
    { settings: SETTINGS, session: { phase: "short", round: 1, running: true, endsAt: NOW - 60000 } }, NOW
  );
  assert.equal(b.session.phase, "work");
  assert.equal(b.session.round, 2);
  assert.equal(b.payout, 0);
});

T("an abandoned block resets to the start and pays nothing", () => {
  const b = M.resolveBootPomodoro(
    { settings: SETTINGS, session: { phase: "work", round: 3, running: true, endsAt: NOW - 3 * 60 * 60 * 1000 } }, NOW
  );
  assert.equal(b.session.phase, "work");
  assert.equal(b.session.round, 1);
  assert.equal(b.session.running, false);
  assert.equal(b.payout, 0);
});

T("the payout follows the configured block length", () => {
  const b = M.resolveBootPomodoro(
    { settings: { ...SETTINGS, work: 50 }, session: { phase: "work", round: 1, running: true, endsAt: NOW - 1 } }, NOW
  );
  assert.equal(b.payout, 50);
});

// ---- run -------------------------------------------------------------------

for (const [name, fn] of tests) {
  try { await fn(); pass++; console.log("  ✓", name); }
  catch (e) { failed++; console.log("  ✗", name, "\n     ", e && e.message); }
}
console.log(`  pomodoro.test.mjs — ${pass} passed${failed ? `, ${failed} FAILED` : ""}`);
if (failed) process.exitCode = 1;
