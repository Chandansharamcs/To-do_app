```
   ████████╗ █████╗ ███████╗██╗  ██╗███████╗   ███████╗██╗  ██╗
   ╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔════╝   ██╔════╝██║  ██║
      ██║   ███████║███████╗█████╔╝ ███████╗   ███████╗███████║
      ██║   ██╔══██║╚════██║██╔═██╗ ╚════██║   ╚════██║██╔══██║
      ██║   ██║  ██║███████║██║  ██╗███████║██╗███████║██║  ██║
      ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝╚═╝  ╚═╝

        ╭──────────────────────────────────────────────────╮
        │  a terminal-styled life OS  ·  tasks · routines  │
        │  vault · quests · real push  ·  offline-first    │
        ╰──────────────────────────────────────────────────╯
```

<div align="center">

![PWA](https://img.shields.io/badge/PWA-installable-5EEAD4?style=flat-square&labelColor=0B0D10)
![React](https://img.shields.io/badge/React-18-79C0FF?style=flat-square&labelColor=0B0D10)
![esbuild](https://img.shields.io/badge/esbuild-bundled-F5A623?style=flat-square&labelColor=0B0D10)
![Backend](https://img.shields.io/badge/backend-none%20(localStorage)-7EE787?style=flat-square&labelColor=0B0D10)
![Push](https://img.shields.io/badge/push-Cloudflare%20Worker-F778BA?style=flat-square&labelColor=0B0D10)
![Cache](https://img.shields.io/badge/sw%20cache-tasksh--v15-8B9CF7?style=flat-square&labelColor=0B0D10)

**[Live app](https://chandansharamcs.github.io/To-do_app/)** · [Design system](DESIGN.md) · [Architecture](HANDOFF.md) · [Agent guide](AGENTS.md) · [Changelog](CHANGELOG.md)

</div>

---

## What is this

A dark, rice/Conky-inspired **progressive web app** that runs your day.
Four surfaces — a task list, a recurring routine timeline, a habit vault
with a project manager, and an XP-driven quest log — all synced to
**IST (UTC+5:30)**, all stored locally, all working with the network off.

There is no backend and no runtime build step. The entire app ships as one
dependency-free `bundle.js` served from static hosting. The *only* server-side
component is an optional Cloudflare Worker that fires push notifications when
a routine starts — see [`worker/`](worker/README.md).

---

## The five tabs

| | Tab | What it does |
|:--:|---|---|
| `▸` | **today** | Combined dashboard — current/next routine, top open tasks, the live IST clock |
| `▸` | **tasks** | Add / complete / delete, priority tags (low·mid·high), filters, animated progress bar, relative timestamps |
| `▸` | **routines** | The quest log. Permanent recurring routines, lane-packed 24h timeline, streaks with freeze logic, 7-day dot strips + aggregate bar chart, optional alternatives per slot |
| `▸` | **vault** | Weekly-goal habit cards with a monthly calendar grid + rolling 7-day progress, plus a lightweight project manager (due dates, inline task lists) |
| `▸` | **quest** | XP/level system. Good & bad habits tagged to life areas, radar chart, 20 level titles with roman-numeral overflow, and a reward center gated on current XP |

Every card on every tab is editable in place — tap the pencil icon or the row
itself. Everything is deletable. Everything persists to `localStorage`.

---

## Quick start

```bash
npm install
npm run build      # src/app.jsx ──esbuild──▶ bundle.js
npm run serve      # python http.server on :8080
```

Then open <http://localhost:8080>.

For active development:

```bash
npm run watch      # rebuild on save, with sourcemaps
```

> [!IMPORTANT]
> The repo currently uses a **flat layout** — `app.jsx` sits at the root, not
> in `src/`. The `build` script still points at `src/app.jsx`, so it will fail
> from a clean clone until either the file moves or the script is updated.
> See [AGENTS.md](AGENTS.md#2--known-traps) before running a build.

---

## Repo map

```
To-do_app/
│
├── app.jsx ················ all source. ~5,300 lines, single component tree
├── bundle.js ·············· BUILD OUTPUT — never hand-edit
├── index.html ············· shell, PWA meta, boot splash, SW registration
├── sw.js ·················· service worker: offline cache + push handlers
├── manifest.json ·········· PWA manifest (icons, standalone, theme)
│
├── README.md ·············· you are here
├── DESIGN.md ·············· design system, tokens, component anatomy
├── HANDOFF.md ············· architecture, features, known issues
├── AGENTS.md ·············· conventions for AI agents & contributors
├── CHANGELOG.md ··········· version history, v6 → v21
├── release.sh ············· release automation (verify → commit → push)
│
├── icon-*.png ············· 192/512 + maskable variants
├── favicon*.{png,ico} ····· 16/32 + legacy
├── apple-touch-icon.png ··· iOS home screen
│
└── worker/ ················ Cloudflare Worker — deploys separately
    ├── src/index.js ······· push endpoints + every-minute cron
    ├── wrangler.toml ······ KV binding, cron trigger, VAPID public key
    ├── package.json
    └── README.md ·········· full one-time setup walkthrough
```

---

## Architecture at a glance

```
        ┌──────────────┐         ┌─────────────────────┐
        │   BROWSER    │         │  GITHUB PAGES       │
        │              │◀────────│  static: html/js/sw │
        │  ┌────────┐  │         └─────────────────────┘
        │  │ React  │  │
        │  │  app   │──┼──▶ localStorage  (10 keys, all data)
        │  └────────┘  │
        │       │      │
        │  ┌────▼────┐ │         ┌─────────────────────┐
        │  │   sw.js │◀┼─push────│ CLOUDFLARE WORKER   │
        │  └─────────┘ │         │  cron: * * * * *    │
        └──────────────┘         │  KV: subs+routines  │
               ▲                 └─────────────────────┘
               │                          │
               └──── subscribe / sync ────┘
```

- **No database.** Ten `localStorage` keys (`tasksh.*.v1`) hold everything.
- **No router.** One component tree, tab state in `useState`.
- **No CDN at runtime.** React + ReactDOM are bundled into `bundle.js`.
  The only external request is a Google Fonts stylesheet, which is CSS-only
  and has system-font fallbacks — losing it changes the look, never the function.
- **Offline-first.** Cache-first service worker with background revalidation.

---

## Design tokens

<table>
<tr><th align="left">Token</th><th align="left">Hex</th><th>Swatch</th><th align="left">Use</th></tr>
<tr><td><code>background</code></td><td><code>#0B0D10</code></td><td>█</td><td>page</td></tr>
<tr><td><code>panel</code></td><td><code>#14171C</code></td><td>█</td><td>cards, the window</td></tr>
<tr><td><code>border</code></td><td><code>#23272E</code></td><td>█</td><td>hairlines</td></tr>
<tr><td><code>accent.cyan</code></td><td><code>#5EEAD4</code></td><td>█</td><td>primary, current-state</td></tr>
<tr><td><code>accent.amber</code></td><td><code>#F5A623</code></td><td>█</td><td>streaks, "next"</td></tr>
<tr><td><code>accent.violet</code></td><td><code>#8B9CF7</code></td><td>█</td><td>quest life-areas</td></tr>
<tr><td><code>danger</code></td><td><code>#F0576B</code></td><td>█</td><td>delete, bad habits</td></tr>
<tr><td><code>text</code></td><td><code>#E7EAEE</code></td><td>█</td><td>primary text</td></tr>
<tr><td><code>muted</code></td><td><code>#6B7280</code></td><td>█</td><td>secondary text</td></tr>
</table>

Type: **JetBrains Mono** for numbers, timestamps and labels · **Inter** for body.

Full spec — spacing scale, radii, the 8-color categorical palette, motion
curves, breakpoints and component anatomy — lives in **[DESIGN.md](DESIGN.md)**.

---

## Notifications

Real push notifications — outside the app, in the notification shade, with
sound and vibration — fire when a routine starts.

```
  routine time hits  ──▶  Worker cron (every minute, IST-aware)
                          ├─ finds subscribed devices in KV
                          ├─ matches HH:MM against synced routines
                          ├─ dedupes via fired:{device}:{routine}:{date}
                          └─ webpush.sendNotification()  ──▶  FCM  ──▶  📱
```

Setup is one-time, entirely on Cloudflare's free tier, and fully documented
in **[worker/README.md](worker/README.md)**.

> [!TIP]
> On Samsung/One UI, set both the installed `tasks.sh` WebAPK **and** Chrome to
> **Unrestricted** battery, and remove both from *Sleeping apps* — aggressive
> battery management is the single most common cause of "it never arrives."

---

## Deploying

Static hosting — currently GitHub Pages off `main`. Any host works.

> [!WARNING]
> **Bump `const CACHE = "tasksh-vN"` in `sw.js` on every single deploy.**
> The service worker is cache-first. Skip the bump and returning visitors keep
> getting the old bundle, silently, indefinitely. This has bitten this project
> more than once — see [CHANGELOG.md](CHANGELOG.md).

```bash
./release.sh 22            # verifies, commits, pushes
./release.sh 22 --worker   # also deploys the Cloudflare worker
./release.sh 22 --dry-run  # preview, change nothing
```

The script refuses to continue if the cache tag didn't actually change, if the
version doesn't match the source, or if a credential appears in the staged
diff. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full table.

The worker deploys **separately** and is not touched by a Pages deploy:

```bash
cd worker && npx wrangler deploy
```

---

## Data & backup

All state lives in ten `localStorage` keys:

```
tasksh.tasks.v1          tasksh.routines.v1       tasksh.vaulthabits.v1
tasksh.projects.v1       tasksh.goodhabits.v1     tasksh.badhabits.v1
tasksh.rewards.v1        tasksh.deviceid.v1       tasksh.notifyenabled.v1
tasksh.sound.v1          tasksh.aikey.v1 (excluded from backups)
```

The titlebar has **export (⬇)** and **import (⬆)** buttons that round-trip all
of them as a single JSON file.

> [!CAUTION]
> Clearing site data in Chrome — required whenever you need to force a stale
> service worker out — **wipes every one of these keys**. Always export first.

---

## Stack

React 18 · plain JSX, no TypeScript · esbuild → single IIFE · no router ·
no CSS framework (styles are one inline `<style>` block) · Cloudflare
Workers + KV + Cron for push · deployed to GitHub Pages.


<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  built by TechCraftor  ·  github.com/Chandansharamcs        │
╰─────────────────────────────────────────────────────────────╯
```

</div>
