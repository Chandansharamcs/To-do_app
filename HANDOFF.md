# tasks.sh — developer handoff

**Current version: `tasksh-v13`** (service worker cache tag — see `sw.js`).
Last updated 2026-07-24. If you're starting a new chat about this project,
pasting/uploading this file plus `src/app.jsx` should be enough context —
no need to re-explain the app from scratch.

Terminal/system-monitor styled PWA: a task manager plus a "routines" tab that
acts as a gamified recurring quest log, synced to IST (India Standard Time).

## Stack

- React 18, plain JSX (no TypeScript)
- No framework/router — single component tree in `src/app.jsx`
- Bundled with **esbuild** into one dependency-free `bundle.js`
- No backend. All state is client-side, persisted to `localStorage`.
- Deployed as a static site (currently GitHub Pages)

## Setup

```bash
npm install
npm run build      # compiles src/app.jsx -> bundle.js
npm run serve       # python http.server on :8080, or use `npx serve .`
```

Open `http://localhost:8080`. For active development:

```bash
npm run watch       # rebuilds bundle.js on save, with sourcemaps
```

## Why everything is bundled into one file

Earlier iterations loaded React/ReactDOM from a CDN at runtime with Babel
doing in-browser JSX transformation. That broke in production
(`ReactDOM is not defined`) whenever the CDN request failed — no fallback,
no offline resilience. Current setup bundles React + ReactDOM + the app into
a single local `bundle.js` via esbuild. Nothing needs the network after the
first successful load except a Google Fonts stylesheet, which is CSS-only
and has system-font fallbacks — losing it changes the look slightly, never
breaks functionality.

**Do not reintroduce a CDN dependency for the core React runtime.** If you
add other libraries, prefer bundling them too rather than `<script src="cdn...">`.

## File map

```
src/app.jsx       - all source. Single file, ~5200 lines, organized as:
                    - date/time helpers (IST-aware)
                    - Tasks tab: TaskRow, Checkbox, useNow
                    - Routines tab: RoutineRow, WeekDots, WeekChart,
                      DayTimeline (lane-packed multi-row timeline),
                      packTimelineLanes(), RoutinesView
                    - Vault tab: MonthGrid, VaultHabitCard, VaultHabitsSection,
                      ProjectTaskRow, ProjectCard, VaultProjectsSection, VaultView
                    - Quest tab: LifeAreaCard, GoodHabitCard, BadHabitCard,
                      RewardCard, QuestView, XP/level helpers
                    - TodoApp: root component, tab switching, in-app banner
                    - <style> block is mobile-first; desktop/laptop overrides
                      (min-width: 900px / 1240px) live in one block near the
                      end of the tag rather than scattered inline — see
                      "Desktop layout" below before adding more breakpoints
index.html         - shell, PWA meta tags, loads bundle.js
manifest.json       - PWA manifest (icons, standalone display, theme color)
sw.js               - service worker, cache-first offline strategy
icon-*.png, apple-touch-icon.png, favicon* - app icons
bundle.js           - BUILD OUTPUT, do not hand-edit. Run `npm run build`.
```

## Design system

Dark terminal/rice aesthetic, referencing Conky widgets. Key tokens (all
inline in `app.jsx`'s `<style>` block, no separate CSS file / design tokens
file exists yet):

| Token | Value | Use |
|---|---|---|
| Background | `#0B0D10` | page bg |
| Panel | `#14171C` | cards |
| Border | `#23272E` | hairlines |
| Accent (cyan) | `#5EEAD4` | primary actions, current-state |
| Accent (amber) | `#F5A623` | streaks, warnings, "next" state |
| Danger | `#F0576B` | delete |
| Text | `#E7EAEE` | primary text |
| Muted | `#6B7280` | secondary text |
| Font (mono) | JetBrains Mono | numbers, timestamps, labels |
| Font (sans) | Inter | body text |

If you extract this into a proper theme file, keep these values — they're
intentional, not arbitrary.

## Desktop layout

The app was originally mobile-first only — on a laptop it rendered as a
narrow 640px phone-shaped card floating in a mostly-empty page. Fixed
2026-07-23 by adding real desktop breakpoints rather than just raising the
mobile max-width:

- `@media (min-width: 900px)`: `.panel` widens to 1180px with a proper
  window shadow + a subtle grid-texture background behind it; single-column
  reading views (Tasks/Today/Routines — matched via
  `.task-list:not(.vault-scroll)`) cap their line-length at 840px and
  center, so text doesn't stretch edge-to-edge; card-grid views (Vault,
  Quest — `.vault-scroll`) go to a 3-column grid instead.
- `@media (min-width: 1240px)`: panel widens further to 1320px, Vault grid
  goes to 4 columns.
- Added `:hover` states (tab buttons, routine/vault/project/reward/quest
  cards, checkboxes) gated behind `@media (hover: hover) and (pointer: fine)`
  so touch devices never get a "stuck" hover state.
- Phones (`max-width: 640px`) are untouched by any of this — verified
  pixel-identical before/after at 390px width.

If you add new views/sections, follow the same pattern: list-style content
goes in the width-capped bucket, card-grid content goes in the full-width
bucket. Don't add a new one-off max-width somewhere else in the file.

## Features implemented

**Tasks tab**
- Add/complete/delete, priority tags (low/mid/high), filters (all/active/done)
- Relative timestamps, animated progress bar

**Routines tab** (the "quest log")
- Permanent recurring routines, auto-sorted by time of day, midnight-wrapping
  "current" / "next" detection
- IST clock + date, live-updating
- Swipe-left to delete (with axis-lock — see Known Issues)
- Tap a row to edit label/time/duration/alternatives inline
- Daily streak tracking (`history: string[]` of IST date strings per routine)
- 7-day dot strip per routine + aggregate 7-day bar chart
- Quest stats: today's completion ring, best streak
- In-app banner toast when a routine becomes "current" — fires app-wide,
  not just when the Routines tab is open
- **Optional alternatives** (added 2026-07-24): a routine can have
  `alternatives: string[]` — other acceptable activities for the same
  slot (e.g. 3-4pm: "Study", alternatives `["Drawing"]`). Set via the "or"
  button next to the composer, or edited later from the row's inline edit
  form. Purely informational/display (`or: Drawing` shown under the
  label) — doesn't currently split XP or streak credit between options.
  If that's wanted later, it needs a real data-model decision (e.g. a
  per-day `chosenAlternative` field) rather than a quick patch.
- **No per-row "mark done" checkbox** (removed 2026-07-24, was `.quest-check`
  in `RoutineRow`) — routines are marked done from the Today tab's
  current-routine card instead. Was removed because it was reported as
  redundant/confusing; if you want row-level marking back, it's a small
  re-add (`onToggleToday` prop is still wired through, just unused).

**Vault tab** ("Productivity Vault" — habit streaks + project manager)
- Habit cards: weekly-goal frequency habits (e.g. "6x/week"), each with a
  monthly calendar grid (filled cell = completed that IST day), a 7-day
  rolling progress bar, streak counter, and a "mark complete today" toggle
- Tap the pencil icon on any habit card to edit its icon/label/weekly goal
  inline (same pattern as routine editing)
- Project manager: self-contained project cards (name, optional due date
  with "Nd to go" / "Nd overdue" label, task list, inline "+ add task").
  Tap a task's text to rename it inline; tap the pencil on the card header
  to rename the project or change its due date
- Projects are independent of the Tasks tab — they keep their own
  lightweight task lists rather than reusing the `tasks` array, to avoid
  adding a `project` field to every task in the main Tasks tab

**Quest tab** (gamified XP system)
- Good/bad habit lists, each tagged to a life area (Work/Fitness/Health/
  Self-Dev) with an XP value; marking a good habit done today adds XP,
  logging a bad habit slip subtracts XP
- Reward center: rewards cost XP to claim; the claim button disables itself
  when current XP is below cost
- Status card shows level (`floor(totalXP / 100) + 1`) and a title pulled
  from `LEVEL_TITLES`, with a progress bar toward the next level
- Every good/bad habit and reward on this tab is editable via its pencil
  icon (label, area, XP value / cost)
- All XP math is derived, not stored: `computeTotalXP` /
  `computeAreaXP` sum from the good/bad habit histories and reward claim
  counts on every render. There's no separate "current XP" field to get
  out of sync.

## Changelog

**2026-07-24**
- **Fixed: routines timeline was unusable with a dense schedule.** With
  ~10+ routines in a day (reported via screenshot: School, Study, Karate,
  Shower, etc. all packed into a few hours), every routine drew on the
  *same* single row, so anything close together in time visually
  collided — labels overlapping, colors bleeding into each other. Fixed
  with proper interval-partitioning lane-packing
  (`packTimelineLanes()`, near `DayTimeline`): routines sorted by start
  time get greedily assigned to the first lane whose last item already
  ended, which is optimal for minimum lane count (classic "minimum
  lecture rooms" algorithm). `DayTimeline` now renders however many rows
  are needed and the track grows to fit. Verified with a 30-routine dense
  synthetic dataset: zero overlapping blocks in the same lane.
- **Fixed: hour axis labels (12a/3a/6a...) were invisible.** They used
  `top: -16px` inside `.timeline-track`, which has `overflow: hidden` —
  so they were being silently clipped the entire time, on every device.
  Moved them into their own `.timeline-hours` row above the (still
  clipped) track instead of relying on negative positioning inside it.
- **Fixed: a routine spanning past midnight (e.g. seed data's "Sleep",
  11pm + 7.5h) got its block cut off mid-label** ("Sl...") because its
  computed width pushed past the track's right edge and got clipped by
  `overflow: hidden`. Block width is now clamped to end exactly at the
  track edge (`Math.min(rawWidthPct, 100 - leftPct)`). Note: this clamps
  rather than wraps the overflow to a second segment at the start of the
  day — acceptable tradeoff for now, full tooltip info is still in the
  `title` attribute.
- **Redesigned the timeline legend.** Was `flex-wrap` chips that became
  an unreadable wall of fragments with many routines. Now a responsive
  grid (2/3/4 columns by viewport width) with each entry showing time +
  label, ellipsis-truncated, sorted by start time.
- **Removed the per-row "mark done" checkbox from the Routines list** —
  see Features section above for details and how to re-add it if wanted.
- **Added optional routine alternatives** — see Features section above.
- Bumped service worker cache to `tasksh-v13`.

**2026-07-23**
- **Fixed: app looked like a phone simulator on laptops/desktops** — a
  narrow 640px card centered in an otherwise-empty page, no matter how
  wide the window was. See the new "Desktop layout" section above for
  what changed (widened panel, capped line-length for list views,
  multi-column grids for card views, hover states, breakpoints at 900px
  / 1240px). Phones are unaffected — verified pixel-identical at 390px.
- Bumped service worker cache to `tasksh-v12`.

**2026-07-23 (routines scroll fix)**
- **Fixed: Routines tab barely scrollable / felt broken.** The hero clock
  card, quest stats, timeline, week chart, composer, and duration chips
  were all fixed (non-scrolling) siblings above `.task-list` — only the
  routine rows themselves scrolled, in a strip that measured ~117px tall
  out of an 852px screen. Every other tab (Today/Vault/Quest) wraps
  *everything* in one scrollable `.task-list` container; Routines and
  Tasks didn't. Restructured `RoutinesView` to match: the whole tab is now
  one continuous scroll region, same pattern as the others. Verified the
  visible scroll area went from 117px to 757px on a 852px-tall viewport,
  and that `scrollTop` actually moves.
- **Redesigned the Routines timeline.** Was a single flat cyan bar with
  raw 24h numbers (0/4/8/12/16/20/24). Now: 12-hour labels (12a/3a/6a...),
  visible hour gridlines, a dimmed overnight band (10pm-6am), a subtle
  "elapsed today" shading up to the current time, each routine gets a
  stable color from a new curated categorical palette (`colorForId()`,
  near `AREAS`) instead of one uniform color, wide-enough blocks show
  their label inline, and a color-key legend sits below the strip.
- **Fixed: some times displayed in 24-hour format.** Titlebar clock now
  forces `hour12: true` regardless of device locale (some Android phones
  default to 24h). Timeline hour labels switched from raw `0-24` to
  `12a/3a/.../12p/.../12a`. Everywhere else (`minutesToLabel`, the big
  IST clock) was already 12h — only these two were missed. Native
  `<input type="time">` pickers still follow the OS/browser's own locale
  setting; that can't be overridden from the web page itself without
  replacing them with a fully custom picker.
- **Expanded level titles + harder leveling curve.** Titles: Novice →
  Apprentice → Adept → Ranger → Knight → Vanguard → Wizard → Sage →
  Champion → Sentinel → Archon → Warlord → Mystic → Overlord → Ascendant
  → Legend → Mythic → Immortal → Transcendent → Eternal (20 total, up
  from 8) — past that, it appends a roman numeral ("Eternal II", "Eternal
  III"...) via `toRoman()`, so it never visually caps. XP curve changed
  from flat 100 XP/level to a quadratic one (`cumulativeXPForLevel`):
  each level now needs 100 more XP than the last to reach (100, 200, 300,
  400 XP for levels 2/3/4/5...). Level 2 still unlocks at exactly 100 XP
  as before, so no one gets retroactively demoted — only the climb from
  here gets steeper. Verified the math lands exactly on level boundaries
  for XP 0 through 10,000.
- **Added more color throughout the app.** New `CATEGORY_PALETTE` (8
  ANSI/terminal-inspired colors) + `colorForId()` hash function, used for:
  timeline blocks, a matching colored left-border on each routine row
  (same routine = same color in both places), vault habit cards (border +
  icon + progress ring), and project cards.
- Bumped service worker cache to `tasksh-v11`.

**2026-07-22 (3)**
- **Fixed: page wouldn't scroll on any tab, including desktop Chrome.**
  The `.tab-content` wrapper added for the tab-switch transition (see
  "2026-07-22" below) was a plain block element with no flex sizing.
  Every tab's actual scroll region (`.task-list`, always styled
  `flex: 1; min-height: 0; overflow-y: auto;`) depends on being a
  **direct** flex child of `.panel` (`display: flex; flex-direction:
  column`) to get a bounded height it can scroll within. Wrapping it one
  level deeper in an unstyled div broke that chain — `.tab-content` grew
  to fit all its content instead of being constrained, so everything
  taller than the panel just got clipped by `.panel`'s `overflow: hidden`
  with nothing to scroll. Fixed by making `.tab-content` itself
  `display: flex; flex-direction: column; flex: 1; min-height: 0;` — a
  transparent pass-through that restores the exact sizing chain that
  existed before the wrapper was added. Verified by forcing a short
  viewport and confirming `.task-list` scrolls (not just has
  `overflow-y: auto` set) on every tab, plus a full functional +
  offline regression pass.
- Note: the Routines tab's list area is fairly cramped vertically now
  (hero card + stats + timeline + week chart all stacked above it) —
  it does scroll correctly, but if it feels too tight on a real phone,
  a follow-up could collapse the week chart by default or shrink the
  timeline strip.
- Bumped service worker cache to `tasksh-v10`.

**2026-07-22 (2)**
- **Fixed: tab bar invisible on some real mobile browsers.** `.app-root`
  and the mobile `.panel` rule both used `height: 100vh`. On real phone
  browsers, `100vh` is sized as if the address-bar chrome were fully
  collapsed — which is *taller* than what's actually visible whenever the
  toolbar is showing. That made the page taller than the visible screen,
  and a toolbar-collapse reflow could silently scroll the page down by
  roughly the height of the tab bar, pushing it above the fold while
  everything below stayed in view (exactly the symptom reported: tabs
  gone, content below them fine). Fixed by adding `height: 100dvh` as a
  progressive-enhancement fallback after the `100vh` line in both places
  — modern browsers use the dynamic, actually-visible viewport height;
  older ones that don't understand `dvh` silently keep the old `vh`
  value. Also boosted inactive-tab text contrast (`#4B5563` →
  `#7C8591`) and added `flex-shrink: 0` / `min-height` to the tab bar so
  it can't collapse in a squeezed flex layout, as defense in depth.
  Verified by simulating a shorter effective viewport (mimicking an
  address bar still on-screen) and confirming the tab bar's bounding box
  stays fully within the visible area.
- Bumped service worker cache to `tasksh-v9`.

**2026-07-22**
- **Major visual overhaul.** Added a dependency-free inline-SVG chart layer
  (`RadarChart`, `RadialProgress`, `DonutChart`, `CalendarHeatmap`,
  `DayTimeline` — all near `DURATION_PRESETS` in `app.jsx`), all
  hand-written with no chart library, so the zero-CDN bundle stays intact:
  - **Quest tab**: radar chart across the 4 life-areas by XP, radial ring
    for level progress, donut for earned-vs-lost XP.
  - **Today tab**: 12-week GitHub-style activity heatmap aggregating
    routines + vault habits + good habits.
  - **Routines tab**: a 24h timeline strip with a live "now" marker,
    replacing the old plain list-only view. Small completion ring
    upgraded to the shared `RadialProgress`.
  - **Tasks tab**: donut chart of open tasks by priority; stats bar
    upgraded to a radial ring.
  - **Vault tab**: habit weekly-goal bar replaced with a compact radial
    ring; month grid now fades in with a stagger.
- **Added: sound engine.** Tiny synthesized UI tones (click/success/
  error/whoosh/delete) via the Web Audio API — oscillators, not audio
  files, so this stays offline-safe. Wired into add/complete/delete/claim
  across every tab, plus a whoosh on tab switch. Mute toggle lives in the
  titlebar next to import/export; preference persists to localStorage.
- **Added: animated counters.** XP totals, streaks, and task counts now
  ease from their old value to the new one (`useAnimatedNumber` /
  `AnimatedNumber`) instead of snapping instantly.
- **Added: tab-switch transition.** Tab content is now wrapped in a
  `key={tab}` container with a fade/slide-in on every switch.
- Bumped service worker cache to `tasksh-v8`.

**2026-07-21**
- **Added: streak freeze.** A single missed day no longer resets a streak to
  zero — one "freeze" silently bridges a gap, and a fresh freeze regenerates
  every 7 completed days (see `streakFreezeInfo()` near the top of
  `app.jsx`). `computeStreak()` still returns a plain number so nothing
  that reads it needed to change. When a freeze bridged a gap, a small ❄️
  shows next to the 🔥 streak count on routines, vault habits, and good
  habits, so it's visible rather than silent.
- **Added: Today tab.** New default tab combining the next/current
  routine, top 5 open tasks (sorted by priority), and any rewards
  currently affordable — all with working quick actions (mark routine
  done, complete a task, claim a reward) that write back to the same
  state as their full tabs. "View all in tasks →" jumps to the Tasks tab.
  Tab bar is now horizontally scrollable so 5 tabs don't overflow narrow
  phone widths.
- Bumped service worker cache to `tasksh-v7` (see note in v6 entry below —
  required any time `bundle.js` changes).

**2026-07-20**
- **Fixed: duplicate/entangled items on edit or delete.** Every "add" action
  (routines, tasks, vault habits, projects, good/bad habits, rewards) was
  generating ids from a plain in-memory counter, e.g. `let ruid = 200; id:
  ruid++`. That counter reset to its base value on every page reload, so an
  item added in a new session could get an id that collided with one saved
  in an earlier session. Since edits/deletes match by `item.id === id`, two
  items sharing an id meant editing or deleting "one" silently affected
  both. Replaced all 8 of these counters with a single `makeId()` generator
  (near the top of `app.jsx`) seeded from `Date.now()` and incremented on
  every call, so freshly-created ids can't collide with anything from a
  previous session.
- **Added: export/import.** Two icon buttons in the titlebar (down-arrow /
  up-arrow, next to the clock) export all 7 data sets to a timestamped JSON
  file, or import one back in. Import validates the file shape, applies
  whichever recognized keys are present, and pushes the id seed above the
  highest id in the imported file so newly-added items afterward can't
  collide with imported ones either. Round-tripped and tested with
  Playwright.
- Bumped service worker cache to `tasksh-v6` — required any time `bundle.js`
  changes, or returning users get served the stale cached bundle instead of
  the fix (see "Deploying" below).

## Known issues / open items

1. **Unconfirmed iOS Safari scroll bug.** A user reported being unable to
   scroll the Routines list on their phone. I added axis-lock logic to the
   swipe-to-delete pointer handlers (see `RoutineRow`'s `onPointerMove` —
   search for `axisRef`) so a vertical-dominant gesture immediately releases
   drag control back to native scroll. This is a defensible fix for a known
   WebKit touch-action/pointer-events interaction bug, but **I could not
   reproduce the original bug in automated testing** (sandbox only has
   Chromium, not Safari — tested with CDP-level touch simulation and the
   scroll worked in both old and new code). If it's still broken, the axis
   threshold (`6px` before deciding gesture direction) is the first thing
   to tune, or consider swapping the custom pointer-event drag for a
   library like `react-swipeable` or `@use-gesture/react` which handle
   these edge cases more thoroughly.

2. ~~**No data portability.**~~ **Resolved 2026-07-20** — export/import
   buttons in the titlebar now let you back up all 7 `localStorage` keys to
   JSON and restore them, on this device or a new one. See Changelog above.

3. **No real push notifications.** There's an in-app banner (fires only
   while the tab/app is open) but nothing that survives the app being fully
   closed. That would require a backend (Web Push + VAPID keys + some
   scheduler to trigger sends based on each routine's time) — out of scope
   for the current static-hosting setup.

4. **No true home-screen widgets.** Not a code limitation — PWAs cannot
   create OS-level widgets on iOS or Android at all. Would require a native
   app wrapper (e.g. Capacitor) to ever be possible.

## Testing approach used so far

No formal test suite is checked in yet. Development so far used ad-hoc
Playwright scripts (headless Chromium) run manually, covering: task
CRUD/filters, routine CRUD/streaks/editing, swipe-to-delete via both
synthetic pointer events and CDP-level touch simulation, and offline-mode
verification (all external requests blocked, confirms the app still boots).
None of those scripts are included here since they were throwaway/manual —
worth setting up a real `tests/` directory with Playwright if this project
grows.

## Deploying

Static hosting, currently GitHub Pages. Any host works (Netlify, Vercel,
S3+CloudFront, etc.) since there's no backend. Remember: **the service
worker cache version in `sw.js` (`const CACHE = "tasksh-vN"`) must be bumped
on every deploy**, or returning users may get served stale cached assets
instead of your changes.
