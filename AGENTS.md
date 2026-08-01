```
    █████╗  ██████╗ ███████╗███╗   ██╗████████╗███████╗
   ██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██╔════╝
   ███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   ███████╗
   ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
   ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ███████║
   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝

   ╭──────────────────────────────────────────────────────╮
   │  operating manual for AI agents & contributors       │
   │  read this before touching a single line             │
   ╰──────────────────────────────────────────────────────╯
```

> **Scope:** this file governs the whole repo. If you are an AI coding agent
> (Claude Code, Cursor, Copilot Workspace, Codex, Aider, opencode, …) working
> on `tasks.sh`, treat everything below as binding. Human contributors should
> read it too — it's just the project's conventions, written down.

---

## 0 · Sixty-second orientation

```
  what      terminal-styled PWA: tasks · routines · habit vault · XP quests
  stack     React 18 + plain JSX · esbuild → one IIFE bundle · no TS, no router
  state     localStorage only. 10 keys. no database, no auth, no accounts
  backend   none, except an optional Cloudflare Worker for push (worker/)
  deploy    GitHub Pages, static, off main
  timezone  everything is IST (UTC+5:30), hardcoded, no DST
  size      app.jsx is ~5,300 lines in ONE file. this is intentional.
```

**Read order for a cold start:** this file → `DESIGN.md` → `HANDOFF.md`.
That's usually enough context to work without re-reading `app.jsx` end to end.

---

## 1 · The rules

**`R1` · Never hand-edit `bundle.js`.**
It is build output. Edit `app.jsx`, then rebuild. The *only* historical
exception was a `sed` URL swap applied to both files at once — and that
approach caused a real bug when the two drifted. Don't repeat it.

**`R2` · Bump the service worker cache tag on every user-facing change.**
`const CACHE = "tasksh-vN"` in `sw.js`. This number is also the project's
version — the changelog, the archive filenames and the handoff all key off it.
Forgetting the bump means returning users silently keep the old app forever.

**`R3` · Never reintroduce a runtime CDN for React.**
An earlier version loaded React + Babel from a CDN and broke in production
with `ReactDOM is not defined` whenever the request failed. Everything is
bundled locally now. New dependencies get bundled too — no `<script src="cdn…">`.

**`R4` · Phones are the baseline. Desktop is additive.**
Base CSS = phone. Desktop lives behind `min-width: 900px` / `1240px`. Any
change that alters the ≤640px rendering is a regression unless explicitly
requested. Verify at 390×844 before claiming a layout change is done.

**`R5` · Respect the two layout buckets.**
List content → `.task-list:not(.vault-scroll)` (caps at 840px, centers).
Card content → `.vault-scroll` (multi-column grid). Never add a new one-off
`max-width`. See [DESIGN.md §5](DESIGN.md#5--layout--breakpoints).

**`R6` · `.task-list` must stay a direct flex child of `.panel`.**
Wrapping it deeper breaks scrolling app-wide, silently. This has shipped as a
bug twice. If someone reports "can't scroll," check the flex chain first.

**`R7` · Colors come from `colorForId()`, never picked by hand.**
A given entity must render the same color in every surface it appears in.

**`R8` · All times are IST. All date keys are `YYYY-MM-DD` IST strings.**
Use the existing helpers (`getISTParts`, `getISTDateString`, `timeToMinutes`,
`minutesToLabel`). Never `new Date()` arithmetic in local time — the app is
used from India but may be tested from anywhere, and history keys must match
across app and worker.

**`R9` · XP is derived, never stored.**
`computeTotalXP` / `computeAreaXP` recompute from habit histories and reward
claims on every render. There is deliberately no `currentXP` field. Do not
add one "for performance" — it's the thing that can't desync.

**`R10` · The AI model is untrusted input. Always.**
Anything it returns goes through `sanitiseActions()` in the worker before it
reaches the client, and through the diff preview before it reaches
`localStorage`. Never add a path that applies model output directly, and never
loosen the id checks — they're what stop it mutating records that don't exist.
When adding a new action type: add it to the system prompt, add a validator
branch, add a `describeAIAction` case, and add an `applyAIActions` case. All
four, or it silently no-ops.

**`R11` · Core colours come from CSS variables, never hex literals.**
Anything in the `<style>` block uses `var(--accent)`, `var(--panel)`,
`var(--text)` and friends. A hardcoded hex will look correct on the default
theme and wrong on the other five. `CATEGORY_PALETTE` and `AREAS` are the
exception — those are data.

**`R12` · The AI key never leaves the device except to Google.**
It lives in `tasksh.aikey.v1`. Do not add it to the export payload, do not
sync it to KV, do not log it. If you add a new "backup everything" feature,
explicitly exclude it — backups get shared between devices and people.

**`R13` · Edits must preserve history.**
`applyAIActions` spreads over the existing object (`{...r, ...changes}`) rather
than rebuilding it. Streak `history`, `claimed` and `icon` fields must survive
any edit. There's a regression test for this; keep it passing.

**`R14` · No new libraries. No CSS framework.**
Editing happens inline, in place, on the row or card itself. The app has zero
runtime dependencies beyond React. Keep it that way unless there's a real
reason and the user agrees.

---

## 2 · Known traps

These have each cost real debugging time. Check them *before* going deep.

### ⚠ The build script doesn't match the repo layout

`package.json` says:

```json
"build": "esbuild src/app.jsx --bundle ... --outfile=bundle.js"
```

…but the repo is **flat** — `app.jsx` lives at the root, there is no `src/`.
A clean clone cannot build. Either move the file or fix the script; do not
"fix" it by creating a duplicate copy in `src/`, which is how the two drifted
apart once already.

### ⚠ Don't "fix" the timeline by making it fit the screen

Compressing 24h into a phone's width is what made it unreadable in the first
place (13/14 blocks at 3-20px, one label total). It scrolls horizontally by
design, with a floor of 82px/hour. If it looks too wide, that's correct.

### ⚠ `overflow: hidden` on `.timeline-track`

Anything positioned with a negative offset inside it is invisible. The hour
labels were clipped this way on every device, for weeks, silently. They now
live in a separate `.timeline-hours` row. Don't move them back.

### ⚠ Don't read a flag assigned inside a setState updater

This shipped as a real bug and was invisible for versions:

```js
let willBeDone = false;
setX(prev => prev.map(o => { willBeDone = !o.done; ... }));
if (willBeDone) ...   // ← may still be false; updater may not have run
```

Derive it from current state *before* dispatching. Fixed in six places in
v23; don't reintroduce the pattern.

### ⚠ Never render the ambient stack twice

v25 briefly rendered it both fixed-behind and scoped-inside the panel. The
panel covers most of a laptop viewport, so the outer copy cost ~17fps to
composite pixels nobody could see. One stack, inside the panel.

Large animated gradient surfaces are fill-rate bound: paint them at 1/3 scale
and `scale: 3` them up. Avoid `mix-blend-mode` and per-element
`contain: strict` on full-surface layers.

### ⚠ The pet must never be silent

`petGreeting`/`petReaction` are local by design. If you add pet dialogue,
add it locally first and only reach for the AI for genuinely open-ended
input. A companion that stops talking when the wifi drops isn't a companion.

### ⚠ Never hardcode a Gemini model ID

Google retires model IDs on a rolling schedule — `gemini-2.0-flash` died in
June 2026, `gemini-2.5-flash-lite` shortly after, `gemini-2.5-flash` is slated
for October. A hardcoded ID *will* 404, it's only a question of when. The
worker resolves the model from `ListModels` at runtime and caches it for a
day. If you need to change preference order, edit `MODEL_PREFERENCES` — don't
reintroduce a constant.

To see what a key can actually call: `GET /ai-models?key=YOUR_KEY`.

### ⚠ Gemini "thinking" is on by default and costs seconds

2.5+ models reason internally before answering. For structured extraction
that's wasted latency. `thinkingConfigFor()` disables it, but the parameter is
generation-specific — 2.5 uses `thinkingBudget: 0`, 3.x uses
`thinkingLevel: "minimal"`, and sending both returns a 400. If you add a model
family to `MODEL_PREFERENCES`, check which knob it takes.

### ⚠ Verify keys with ListModels, never a real prompt

`ListModels` is free metadata. A test generation costs a request from a
~250-1000/day allowance, which a few typo retries can meaningfully dent.

### ⚠ Stale service worker during testing

Cache-first means your change may simply not be running. To force a phone to
take a new build: **export data first**, then remove from home screen →
Chrome → Site settings → Clear data → revisit → reinstall → re-import.
Clearing site data wipes all ten `localStorage` keys.

### ⚠ Push "not working" is usually not the worker

Debug in this order, and get evidence at each step rather than guessing:

```
  1. is the live bundle even correct?
     curl -s <pages-url>/bundle.js | grep -o "tasksh-notify[^\"]*"

  2. did a subscription ever arrive?
     cd worker && npx wrangler kv key list --binding=TASKSH_KV
     (empty [] means the phone never successfully subscribed)

  3. what does the worker actually see each minute?
     npx wrangler tail          # look for "SENT push for ..."

  4. if you see SENT with no error, the worker's job is DONE.
     the problem is now Android: battery optimization, Doze, or
     Samsung's "sleeping apps" list. Not a code problem.
```

**A generic Chrome banner saying "tap to copy the URL for this app"** is not a
random notification — it is Chrome's mandatory anti-abuse fallback shown when
a push fires but `showNotification()` fails to complete. It means the push
arrived and your handler broke. Check icon URL resolution first.

### ⚠ Testing a routine notification has a sequencing trap

The worker fires only during the exact minute a routine starts. Subscribe
*first*, then set a routine 2–3 minutes out. Subscribing after the minute has
passed produces a silent, confusing non-result.

---

## 3 · Code conventions

### File organisation inside `app.jsx`

The single file is ordered, and new code should slot into the right section
rather than being appended to the end:

```
   1 ──── id + IST date/time helpers, streak math
 140 ──── sound (WebAudio tones, toggle persistence)
 220 ──── generic viz: AnimatedNumber, RadarChart, RadialProgress,
          DonutChart, CalendarHeatmap
 485 ──── routines: packTimelineLanes, DayTimeline, useISTClock,
          useRoutineStatus, WeekDots, RoutineRow, WeekChart, RoutinesView
1127 ──── vault: MonthGrid, VaultHabitCard, ProjectTaskRow, ProjectCard,
          VaultProjectsSection, VaultView
1649 ──── quest: AREAS, CATEGORY_PALETTE, colorForId, LEVEL_TITLES,
          XP math, LifeAreaCard, Good/BadHabitCard, RewardCard, QuestView
2264 ──── tasks: useNow, timeAgo, Checkbox, TaskRow
2347 ──── storage keys, VAPID, push subscribe/sync plumbing
2477 ──── TodayView
2636 ──── TodoApp (root) + the entire <style> block
```

### Naming

```
  components        PascalCase          RoutineRow, DayTimeline
  hooks             useCamelCase        useISTClock, useRoutineStatus
  helpers           camelCase           minutesToLabel, colorForId
  constants         SCREAMING_SNAKE     CATEGORY_PALETTE, STORAGE_KEY_TASKS
  storage keys      tasksh.<thing>.v1   tasksh.routines.v1
  css classes       kebab-case, BEM-ish routine-row, timeline-hours,
                                        vault-habit-card
```

### State & persistence

- All persisted state is loaded with `loadStored(key, fallback)` and written
  back in a `useEffect`. Follow that pattern for anything new.
- A new persisted field means a new `tasksh.*.v1` key **or** an additive
  field on an existing object. Always tolerate its absence — users have
  existing data and there are no migrations.
- Optional chaining on history arrays (`h.history?.length || 0`) is not
  defensive noise; older records genuinely lack fields.

### Comments

Explain **why**, especially where something looks wrong but isn't. The
existing codebase does this well — e.g. the note explaining why the XP curve
change can't retroactively demote anyone. Match that standard.

---

## 4 · Workflow

### The release ritual

**Use `./release.sh <version>`.** It performs every step below plus the
verification each one needs. Manual releases have failed silently more than
once; the script's job is to refuse rather than to be convenient. Run it with
`--dry-run` first if unsure, `--worker` to also deploy Cloudflare.

The steps it automates:

```
  ┌─────────────────────────────────────────────────────────┐
  │  1.  edit app.jsx  (never bundle.js)                    │
  │  2.  npm run build                                      │
  │  3.  bump  CACHE = "tasksh-vN"  in sw.js                │
  │  4.  add a CHANGELOG.md entry — what broke, why,        │
  │      how it was verified                                │
  │  5.  update HANDOFF.md if architecture/features changed │
  │  6.  git add -A                                         │
  │      git commit -m "Release vNN: <summary>"             │
  │      git push origin main                               │
  │  7.  worker changed?  cd worker && npx wrangler deploy  │
  │      (separate target — Pages deploys do NOT touch it)  │
  └─────────────────────────────────────────────────────────┘
```

### Maintainer's archive convention

The project owner keeps a permanent versioned archive at
`~/Downloads/claude/files` (`app-v14.jsx`, `sw-v15.js`, …) which is **never
overwritten**. The repo always uses stable names (`app.jsx`, `sw.js`).
Versioned filenames must never be committed.

If you are producing files for the owner to download, name them with the
version suffix. If you are committing directly, use the stable names.

### Commit messages

```
  Release v15: <what shipped>
  Fix <specific thing>, bump cache to v15
  Add <feature> to <surface>
```

Present tense, specific. Reference the version when the cache tag moved.

---

## 5 · Verification expectations

There is **no checked-in test suite**. `npm test` points at `tests/run.js`,
which does not exist. Historically, verification was ad-hoc Playwright
scripts (headless Chromium) that were never committed.

Until that changes, you are expected to verify by **evidence, not assertion**:

| Change type | Minimum verification |
|---|---|
| Layout | Screenshot at 390×844 **and** 1366×800. Confirm phone is unchanged |
| Timeline | Programmatic overlap check on a dense (20+ routine) dataset |
| Scrolling | Measure the scroll region's height and that `scrollTop` actually moves |
| Streaks / XP | Assert against hand-computed values across date boundaries |
| Offline | Block all network, confirm the app still boots |
| Worker | `wrangler tail` output showing the actual code path taken |

If you genuinely cannot verify something — no device, no visual rendering, no
account — **say so explicitly and say what you substituted.** Silently
claiming something is tested when it isn't is the worst possible outcome here;
this project has already burned days on a bug that "looked fine."

---

## 6 · Working with the owner

Practical notes, learned the hard way:

- **Give exact, copy-pasteable commands**, and explain what each one does.
  Don't assume familiarity with `sed`, `mv`, or git internals.
- **Verify before committing.** Several sessions were lost to a `sed` that
  silently matched nothing. Always `grep` after a substitution and check
  `git status` shows the file as modified before committing.
- **Quote paths with special characters** — the archive path has contained
  folders like `v14(noti)`; unquoted parentheses break bash.
- **Warn about data loss before it happens.** Anything involving "clear site
  data" must be preceded by "export your data first."
- **Ask for evidence rather than proposing five theories.** When something
  doesn't work, request the one output that discriminates between causes.
- **Flag scope jumps honestly.** Home-screen widgets, for example, are
  impossible for a PWA on any platform and require Capacitor + Kotlin. Say
  that plainly instead of half-attempting it.

---

## 7 · Open work

### Outstanding bugs / debt

```
  [!] worker/src/index.js sends push at DEFAULT priority.
      Android Doze batches these — notifications arrive late.
      Fix: sendNotification(sub, payload, { urgency: "high", TTL: 300 })
      Worker-side only: no rebuild, no cache bump, no reinstall.

  [!] package.json build script points at src/app.jsx; repo is flat.

  [ ] HANDOFF.md drifts behind reality if not updated per release.

  [ ] No tests/ directory despite package.json referencing tests/run.js.

  [?] Unconfirmed iOS Safari scroll bug in Routines. Axis-lock fix is in
      (RoutineRow, search axisRef) but was never reproducible — only
      Chromium available for testing. Tune the 6px threshold first.
```

### Wanted features, roughly by value/effort

```
  high value, low effort
    · undo-on-delete toast (4s) — swipe-delete is permanent today
    · keyboard shortcuts: Ctrl+K to focus add-input, 1-5 for tabs
    · XP/streak sparkline over 4 weeks (data already exists)

  medium
    · "skip" vs "missed" for routines — a deliberate skip shouldn't
      break a streak the way a miss does
    · link tasks back to vault projects ("from: Project X" tag)
    · alternatives affecting completion tracking (needs a data-model
      decision: per-day chosenAlternative field)
    · worker: weekday-only routines, snooze, skip-if-already-done

  larger
    · weekly review screen
    · theme extraction to CSS custom properties (pure refactor)
    · native widgets via Capacitor + Kotlin — separate project entirely
```

---

## 8 · Security

- The **VAPID public key** is in `app.jsx` and `wrangler.toml`. This is fine —
  it's public by design.
- The **VAPID private key** must only ever exist as a Cloudflare secret
  (`npx wrangler secret put VAPID_PRIVATE_KEY`). Never in a file, never in git.
- The worker allows all origins via CORS. Acceptable for a single-user
  personal app; revisit if it ever becomes multi-user.
- There is no auth. `deviceId` is a random local identifier, not a credential.
  Anyone who knows a `deviceId` could push to that device. Fine for personal
  use, not fine if this is ever shared.


<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  AGENTS.md · when in doubt: verify, then claim              │
╰─────────────────────────────────────────────────────────────╯
```

</div>
