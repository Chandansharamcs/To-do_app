# tasks.sh

Terminal / system-monitor styled PWA — task manager, gamified routines
timeline, habit vault with a project manager, and an XP-based quest
system. Dark rice/Conky-inspired UI, synced to IST (India Standard Time).

No backend, no build step at runtime — a single dependency-free
`bundle.js` served as a static site.

## Tabs

- **tasks** — add/complete/delete, priority tags, filters, progress bar
- **routines** — permanent recurring quest log; time-of-day ordered,
  streaks, 7-day chart, swipe-to-delete, tap-to-edit
- **vault** — weekly-goal habit cards with a monthly calendar grid, plus a
  lightweight project manager (due dates, inline task lists)
- **quest** — XP/level system: good/bad habits tied to life areas, and a
  reward center gated on your current XP

Every card across every tab is editable in place (tap the pencil icon or
the row itself) and deletable, with all data persisted to `localStorage`.

## Setup

```bash
npm install
npm run build       # compiles src/app.jsx -> bundle.js
npm run serve        # python http.server on :8080
```

Open `http://localhost:8080`.

```bash
npm run watch        # rebuilds bundle.js on save, with sourcemaps
```

## Deploying (GitHub Pages)

1. Push to a repo, enable Pages on the `main` branch (root, or `/docs` if
   you prefer — adjust accordingly).
2. Before every deploy: bump `const CACHE = "tasksh-vN"` in `sw.js`, then
   `npm run build`. Skipping the cache bump means returning visitors can
   get served stale assets from the old service worker cache.

Any static host works (Netlify, Vercel, S3+CloudFront) — there's no
backend to configure.

## Design system

Dark terminal/rice aesthetic. Tokens are inline in `app.jsx`'s `<style>`
block (no separate CSS/theme file yet):

| Token | Value |
|---|---|
| Background | `#0B0D10` |
| Panel | `#14171C` |
| Border | `#23272E` |
| Accent (cyan) | `#5EEAD4` |
| Accent (amber) | `#F5A623` |
| Accent (violet, quest life-areas only) | `#8B9CF7` |
| Danger | `#F0576B` |
| Text | `#E7EAEE` |
| Muted | `#6B7280` |
| Font (mono) | JetBrains Mono |
| Font (sans) | Inter |

See `HANDOFF.md` for full architecture notes, feature list, and known
issues.

## Stack

React 18, plain JSX, bundled with esbuild into one IIFE. No router, no
TypeScript, no CSS framework.
