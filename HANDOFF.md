```
██╗  ██╗ █████╗ ███╗   ██╗██████╗  ██████╗ ███████╗███████╗
██║  ██║██╔══██╗████╗  ██║██╔══██╗██╔═══██╗██╔════╝██╔════╝
███████║███████║██╔██╗ ██║██║  ██║██║   ██║█████╗  █████╗
██╔══██║██╔══██║██║╚██╗██║██║  ██║██║   ██║██╔══╝  ██╔══╝
██║  ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝██║     ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝     ╚═╝

   ╭──────────────────────────────────────────────────────╮
   │  developer handoff · architecture & feature map      │
   │  the single source of truth for how tasks.sh works   │
   ╰──────────────────────────────────────────────────────╯
```

```
  CURRENT VERSION   tasksh-v15   (service worker cache tag, see sw.js)
  LAST UPDATED      2026-07-29
  LIVE              chandansharamcs.github.io/To-do_app
  WORKER            tasksh-notify.techcraftor.workers.dev
```

> **Starting a fresh chat about this project?** Upload this file plus
> `app.jsx` and that's enough context — no need to re-explain the app.
> For conventions and traps, read [AGENTS.md](AGENTS.md).
> For the visual system, read [DESIGN.md](DESIGN.md).
> For version history, read [CHANGELOG.md](CHANGELOG.md).

Terminal/system-monitor styled PWA: a task manager plus a "routines" tab that
acts as a gamified recurring quest log, synced to IST (India Standard Time).

---

## Document Map

| File | What's in it |
|---|---|
| **README.md** | Overview, quick start, repo map, deploy basics |
| **HANDOFF.md** | ◀ you are here — architecture, features, known issues |
| **DESIGN.md** | Colors, type, spacing, breakpoints, component anatomy |
| **AGENTS.md** | Rules, traps, workflow, verification expectations |
| **CHANGELOG.md** | Full version history v6 → v15, with root causes |
| **worker/README.md** | One-time Cloudflare push setup walkthrough |


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
index.html         - shell, PWA meta tags, boot splash, loads bundle.js
manifest.json       - PWA manifest (icons, standalone display, theme color)
sw.js               - service worker: cache-first offline + push handlers
icon-*.png, apple-touch-icon.png, favicon* - app icons
bundle.js           - BUILD OUTPUT, do not hand-edit. Run `npm run build`.

worker/            - Cloudflare Worker, deploys SEPARATELY from Pages
  src/index.js     - subscribe/unsubscribe/sync endpoints + every-minute cron
  wrangler.toml    - KV binding, cron trigger, VAPID public key
  README.md        - one-time setup walkthrough

README.md          - overview + quick start
DESIGN.md          - design system spec
AGENTS.md          - conventions, traps, workflow for agents/contributors
CHANGELOG.md       - version history (moved out of this file at v15)
```

**Layout note:** the repo is currently *flat* — `app.jsx` sits at the root,
not in `src/`. The `build` script in `package.json` still points at
`src/app.jsx`, so a clean clone cannot build until one or the other is
reconciled. See AGENTS.md [Known traps](AGENTS.md#2--known-traps).

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

Also in play: an 8-color categorical palette (`CATEGORY_PALETTE`) assigned by
`colorForId()` so each routine/habit keeps a stable identity color everywhere
it appears, and a violet `#8B9CF7` used only for quest life-areas.

**Full spec — spacing, radii, motion curves, breakpoints, component anatomy,
voice — lives in [DESIGN.md](DESIGN.md).** If you extract a theme file, keep
these values; they're intentional, not arbitrary.

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

**Titlebar (global)**
- Live IST clock + date, forced to 12-hour format regardless of device locale
- **Export (⬇) / import (⬆)** — round-trips all 10 `localStorage` keys as one
  timestamped JSON file. Import validates shape, applies recognized keys, and
  pushes the id seed above the highest imported id so new items can't collide
- **Sound toggle** — synthesized WebAudio tones (no audio files), persisted
- **Bell (🔔)** — push notification subscribe/unsubscribe. Requests
  permission, registers with the push service, POSTs to the worker. Failures
  show a toast, never crash. Requires the app to be **installed to the home
  screen** on Android — a plain browser tab cannot receive push

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


## Push notifications architecture

Real notifications that fire outside the app, with sound and vibration, even
when it's fully closed. Added in v14; icon-resolution bug fixed in v15.

```
   ┌──────────── PHONE ────────────┐      ┌─── CLOUDFLARE ────┐
   │                               │      │                   │
   │  bell tap                     │      │  cron: * * * * *  │
   │    ├─ Notification.request…   │      │        │          │
   │    ├─ pushManager.subscribe() │      │        ▼          │
   │    ├─ POST /subscribe ────────┼─────▶│   runCheck(env)   │
   │    └─ POST /sync (routines) ──┼─────▶│    ├ IST now?     │
   │                               │      │    ├ match HH:MM  │
   │  sw.js "push" handler         │◀─────┼────┤ dedupe fired │
   │    └─ showNotification()      │ FCM  │    └ sendNotif()  │
   │                               │      │                   │
   └───────────────────────────────┘      └───────────────────┘
                                             KV: sub:{id}
                                                 routines:{id}
                                                 fired:{id}:{rid}:{date}
```

**Client (`app.jsx` ~2347-2440):**
- `STORAGE_KEY_DEVICE_ID` — a random per-install id, generated once. Not a
  credential; it's just a KV partition key.
- `VAPID_PUBLIC_KEY` — public half of the keypair, safe to ship in the bundle.
- `NOTIFY_WORKER_URL` — the deployed worker origin. **Must match the deployed
  worker exactly** or the bell fails with a toast.
- Subscribing POSTs `/subscribe` then `/sync`. Routine times are re-synced
  whenever routines change, so the worker always has current schedule data.

**Service worker (`sw.js`):**
- `push` → parses the JSON payload, shows a notification. The icon is resolved
  **absolutely** via `new URL("icon-192.png", self.registration.scope).href` —
  a relative path fails when the SW runs with no open page, which makes Chrome
  fall back to its generic "tap to copy the URL" banner (see CHANGELOG v15).
- `notificationclick` → focuses an existing window, else opens one.
- `silent` is deliberately unset so the OS provides sound + vibration.

**Worker (`worker/src/index.js`):**
- IST is computed by adding 5h30m to UTC — no DST, safe to hardcode.
- Dedupe marker `fired:{deviceId}:{routineId}:{YYYY-MM-DD}` with a 2-day TTL
  prevents double-sends within the same minute-window and can't grow unbounded.
- A 404/410 from the push service means the subscription is dead; both its KV
  entries are deleted automatically.
- `GET /run-check-now` runs the same logic on demand for testing.

**Known limitations:**
- Only "starts at HH:MM daily." No weekday-only routines, no snooze, no
  skip-if-already-marked-done.
- CORS is wide open (`*`). Fine for a single-user personal app.
- Anyone who knew a `deviceId` could push to that device. No auth exists.

> [!IMPORTANT]
> **Outstanding:** pushes are still sent at default priority, so Android Doze
> batches them and they arrive late. The fix is
> `sendNotification(sub, payload, { urgency: "high", TTL: 300 })` in
> `worker/src/index.js`, then `npx wrangler deploy`. Worker-side only — no
> rebuild, no cache bump, no phone reinstall.

## Changelog

Moved to **[CHANGELOG.md](CHANGELOG.md)** as of v15 — this file was getting
long enough that the architecture notes were hard to find. All history from
v6 onward is preserved there, unedited.

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
   JSON and restore them, on this device or a new one. See CHANGELOG.md.

3. ~~**No real push notifications.**~~ **Resolved 2026-07-27 (v14)** — Web
   Push via a Cloudflare Worker with VAPID + an every-minute cron. See the
   "Push notifications architecture" section above and
   [worker/README.md](worker/README.md).

   Two follow-ups remain open:
   - **Doze delay (not yet fixed).** Pushes still go out at default
     priority, so Android batches them when the screen is off. Needs
     `{ urgency: "high", TTL: 300 }` on `sendNotification`.
   - **Android battery management** can block delivery entirely regardless
     of code. On Samsung/One UI: set both the installed `tasks.sh` WebAPK
     *and* Chrome to Unrestricted battery, and remove both from
     Settings → Battery → Background usage limits → Sleeping apps.

4. **No true home-screen widgets.** Not a code limitation — PWAs cannot
   create OS-level widgets on iOS or Android at all. Would require a native
   app wrapper (e.g. Capacitor) to ever be possible.

5. **`package.json` build script doesn't match the repo layout.** It points
   at `src/app.jsx`, but the repo is flat — `app.jsx` is at the root. A
   clean clone cannot run `npm run build` until this is reconciled. Do not
   fix it by creating a duplicate copy in `src/`; the two have already
   drifted apart once, which cost a debugging session (see CHANGELOG,
   2026-07-28).

6. **`npm test` references `tests/run.js`, which doesn't exist.** No test
   suite is checked in — see below.

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

The Cloudflare Worker is a **separate deploy target**. Pushing to GitHub does
not update it, and `wrangler deploy` does not update the app:

```bash
# app  ->  GitHub Pages
npm run build && git add -A && git commit -m "Release vNN: ..." && git push

# worker -> Cloudflare
cd worker && npx wrangler deploy
```

If a phone is stuck on an old build, the cache bump alone may not be enough —
export data first, then remove from home screen, clear site data in Chrome,
revisit, reinstall, re-import.

---

<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  HANDOFF.md · architecture · see AGENTS.md before editing   │
╰─────────────────────────────────────────────────────────────╯
```

</div>
