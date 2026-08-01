```
 ██████╗ ██████╗ ███╗   ██╗████████╗██████╗ ██╗██████╗ ██╗   ██╗████████╗███████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██║██╔══██╗██║   ██║╚══██╔══╝██╔════╝
██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║██████╔╝██║   ██║   ██║   █████╗
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║██╔══██╗██║   ██║   ██║   ██╔══╝
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║██║██████╔╝╚██████╔╝   ██║   ███████╗
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═════╝  ╚═════╝    ╚═╝   ╚══════╝

   ╭──────────────────────────────────────────────────────╮
   │  how to work on tasks.sh without breaking it         │
   ╰──────────────────────────────────────────────────────╯
```

This is a personal project, but it's documented as if it weren't — because
future-you is a contributor too, and so is every AI agent you hand it to.

---

## Before you start

Read these two, in order. They'll save you more time than they cost:

1. **[AGENTS.md](AGENTS.md)** — the ten rules, the known traps, and the
   verification bar. Non-negotiable stuff lives here.
2. **[DESIGN.md](DESIGN.md)** — if you're touching anything visual.

[HANDOFF.md](HANDOFF.md) is the architecture reference — skim the file map and
come back to it when you need specifics.


## Local setup

```bash
git clone git@github.com:chandansharamcs/To-do_app.git
cd To-do_app
npm install
npm run watch      # rebuild on save, sourcemaps on
npm run serve      # http://localhost:8080
```

> [!WARNING]
> `npm run build` currently points at `src/app.jsx`, but the repo is flat —
> `app.jsx` is at the root. Reconcile this before your first build, and don't
> fix it by duplicating the file into `src/`.


## The loop

Use the script. It exists because the manual version has failed repeatedly in
*silent* ways — a truncated paste leaving bash at a `>` prompt, a `sed` that
matched nothing and exited 0, files copied while a stale worker got deployed.

```bash
./release.sh 22            # copy, verify, commit, push
./release.sh 22 --worker   # ...and deploy the Cloudflare worker
./release.sh 22 --dry-run  # show everything, change nothing
```

What it refuses to do:

| Situation | Result |
|---|---|
| Source folder missing | Stops, tells you the `unzip` command |
| Version arg ≠ tag in `sw.js` | Stops, tells you the right number |
| Cache tag didn't actually change after copying | Stops — the copy silently failed |
| `bundle.js` doesn't match source | Stops |
| An API key / private key is in the staged diff | **Stops before committing** |
| Working tree already dirty | Asks before sweeping it into the commit |
| Same version run twice | No-ops cleanly, exit 0 |

It commits as `Release vNN` — deliberately short and comma-free, because long
messages have been truncated mid-paste by the terminal.

If `worker/src/index.js` changed but you didn't pass `--worker`, it warns you
on the way out. GitHub Pages and Cloudflare are separate deploy targets and
neither updates the other.

### Doing it by hand

Only if the script can't run. The order matters:

```
edit app.jsx → npm run build → bump CACHE in sw.js
  → verify with grep → commit → push → wrangler deploy (if worker changed)
```

## Verification bar

There's no test suite yet, so the standard is **evidence, not assertion**:

| You changed | You must check |
|---|---|
| Layout | 390×844 **and** 1366×800; phone must be unchanged |
| Timeline | Overlap check against a 20+ routine dataset |
| Scrolling | The region's height, and that `scrollTop` moves |
| Streaks / XP | Hand-computed values across a date boundary |
| Anything | Console is clean, and the app boots with network blocked |

If you can't verify something, say so and say what you did instead. "Looks
fine" has cost this project multiple days.


## Style

- Match the file you're in. It's one 5,300-line file with a consistent voice.
- Comment the **why**, not the what — especially where something looks wrong
  but is deliberate.
- New code goes in the right section of `app.jsx` (see [AGENTS.md §3](AGENTS.md#3--code-conventions)), not
  appended to the bottom.
- No new dependencies, no modals, no CSS framework. Ask first.


## Commits

```
  Release v15: <what shipped>
  Fix <specific thing>, bump cache to v15
  Add <feature> to <surface>
```

Present tense, specific, reference the version when the cache tag moved.
`git add .` is fine — just run `git status` first and confirm it's staging
what you think it is. A `sed` that matched nothing looks identical to success.


<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  CONTRIBUTING.md · verify, then claim                       │
╰─────────────────────────────────────────────────────────────╯
```

</div>
