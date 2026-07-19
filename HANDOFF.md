# tasks.sh — developer handoff

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
src/app.jsx       - all source. Single file, ~2900 lines, organized as:
                    - date/time helpers (IST-aware)
                    - Tasks tab: TaskRow, Checkbox, useNow
                    - Routines tab: RoutineRow, WeekDots, WeekChart, RoutinesView
                    - Vault tab: MonthGrid, VaultHabitCard, VaultHabitsSection,
                      ProjectTaskRow, ProjectCard, VaultProjectsSection, VaultView
                    - Quest tab: LifeAreaCard, GoodHabitCard, BadHabitCard,
                      RewardCard, QuestView, XP/level helpers
                    - TodoApp: root component, tab switching, in-app banner
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

## Features implemented

**Tasks tab**
- Add/complete/delete, priority tags (low/mid/high), filters (all/active/done)
- Relative timestamps, animated progress bar

**Routines tab** (the "quest log")
- Permanent recurring routines, auto-sorted by time of day, midnight-wrapping
  "current" / "next" detection
- IST clock + date, live-updating
- Swipe-left to delete (with axis-lock — see Known Issues)
- Tap a row to edit label/time/duration inline
- Daily streak tracking (`history: string[]` of IST date strings per routine)
- 7-day dot strip per routine + aggregate 7-day bar chart
- Quest stats: today's completion ring, best streak
- In-app banner toast when a routine becomes "current" — fires app-wide,
  not just when the Routines tab is open

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

2. **No data portability.** Tasks/routines/streaks/vault habits/projects/
   quest data live only in `localStorage` on one device (7 separate keys,
   all prefixed `tasksh.*.v1` — see `STORAGE_KEY_*` constants near the
   bottom of `app.jsx`). Clearing browser data or switching phones loses
   everything. An export-to-JSON / import-from-JSON feature was discussed
   but not built.

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
