```
 ██████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██╗      ██████╗  ██████╗
██╔════╝██║  ██║██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║     ██╔═══██╗██╔════╝
██║     ███████║███████║██╔██╗ ██║██║  ███╗█████╗  ██║     ██║   ██║██║  ███╗
██║     ██╔══██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██║     ██║   ██║██║   ██║
╚██████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝███████╗███████╗╚██████╔╝╚██████╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝ ╚═════╝  ╚═════╝

   ╭──────────────────────────────────────────────────────────╮
   │  version history · tasks.sh                              │
   │  versions track the sw.js cache tag: tasksh-vN           │
   ╰──────────────────────────────────────────────────────────╯
```

Entries follow one rule: **what broke, why it broke, how the fix was
verified.** A one-line "fixed the timeline" entry is not enough — six months
later the *why* is the only part that still matters.

---

```
┌─ VERSION INDEX ─────────────────────────────────────────────────┐
```

| Ver | Date | Headline |
|---|---|---|
| **`v54`** | 2026-10-20 | The companion had been blind to every quest since v35; money gets categories and rules |
| **`v53`** | 2026-10-19 | Daily tasks carry tags too, so the radar can finally see the push-ups |
| **`v52`** | 2026-10-19 | One editable tag list, quests can wear several, points reset |
| **`v51`** | 2026-10-19 | The coin balance was invisible on both screens that move it, and Today gave rewards away free |
| **`v50`** | 2026-10-19 | The three rngdle screens the reveal pass did not touch |
| **`v49`** | 2026-10-18 | RNGdle's real reveal choreography, and rarity you can see |
| **`v48`** | 2026-10-18 | Named spending that accumulates, and a year view |
| **`v47`** | 2026-10-18 | Sound: ambient beds, a richer palette, and a 10s ring you can silence |
| **`v46`** | 2026-10-18 | Expense tracker, and the KV quota bug that was breaking cloud backup |
| **`v45`** | 2026-10-18 | RNGdle Infinite, swipe to complete or fail, quests on Today, tap-a-dot stats, per-quest calendar |
| **`v44`** | 2026-09-29 | Bottom icon navigation, slim vault, no negative stats, one reroll a day |
| **`v43`** | 2026-09-29 | Position ramp removed, colour means state, rounder cards |
| **`v42`** | 2026-09-29 | Delete cross visible on touch, now-line labelled, bloom behind cards |
| **`v41`** | 2026-09-28 | Themes change everything, coins buy rewards, caption editor, dead-model rescue |
| **`v40`** | 2026-09-28 | AI captions tool, ambient background removed, red→cyan card wash |
| **`v39`** | 2026-09-27 | TOOLS tab + pomodoro, inventory editing, tab bar fits seven |
| **`v38`** | 2026-09-27 | Encrypted cloud backup, self-updating app, widget feed removed |
| **`v37`** | 2026-09-27 | Notification badge icon + routine name as the title |
| **`v36`** | 2026-09-27 | Routine gradient, quest reorder, harder levels, daily quests |
| **`v35`** | 2026-08-17 | Good/bad habits merged, separate reward + penalty |
| **`v34`** | 2026-08-16 | Backup sweeps every key, opt-in export with API keys |
| **`v33`** | 2026-08-16 | VAPID contact fix + cache bump |
| **`v32`** | 2026-08-16 | Widget feed endpoint, /sync ungated |
| **`v31`** | 2026-08-16 | `AQ.` Gemini keys, notes in vault, double-tap to complete |
| **`v30`** | 2026-08-02 | GitHub Models removed, 410 pool halt, radar truth, test suite in-repo |
| **`v29`** | 2026-08-02 | Cerebras / NVIDIA / GitHub / Mistral, first-run fix |
| **`v28`** | 2026-08-02 | Groq / OpenRouter support, multi-provider pool |
| **`v27`** | 2026-08-02 | XP/reward split fix, multi-key failover |
| **`v26`** | 2026-08-02 | Links, editable tags, quest filters, AI 400 fix |
| **`v25`** | 2026-08-01 | Merged pet+ai into one companion, big perf fix |
| **`v24`** | 2026-08-01 | Achievements, coins, level rewards, ambience fix |
| **`v23`** | 2026-08-01 | Pet: 7 forms, stats, evolution, hybrid voice |
| **`v22`** | 2026-07-31 | Theme engine, ambience, calm mode, XP rebalance |
| **`v21`** | 2026-07-31 | Ambient bg, 10-axis radar, timeline rebuild |
| **`v20`** | 2026-07-31 | AI latency: disable thinking, trim prompt |
| **`v19`** | 2026-07-31 | Fix AI 404 — dynamic model resolution |
| **`v18`** | 2026-07-31 | In-app AI key entry |
| **`v17`** | 2026-07-31 | AI assistant tab, Doze priority fix |
| **`v16`** | 2026-07-31 | New terminal-window icon set, docs overhaul |
| **`v15`** | 2026-07-29 | Notification icon URL resolution fix |
| **`v14`** | 2026-07-27 | Real push notifications — Cloudflare Worker, VAPID, cron |
| **`v13`** | 2026-07-24 | Timeline lane-packing, optional routines, checkbox removal |
| **`v12`** | 2026-07-23 | Desktop/laptop responsive layout |
| **`v11`** | 2026-07-23 | Routines scroll fix, timeline redesign, 12h time, XP curve |
| **`v10`** | 2026-07-22 | App-wide scroll regression fix |
| **`v9`** | 2026-07-22 | Tab bar invisible on mobile (`100dvh`) |
| **`v8`** | 2026-07-22 | Visual overhaul — SVG charts, sound engine, animated counters |
| **`v7`** | 2026-07-21 | Streak freeze, Today tab |
| **`v6`** | 2026-07-20 | Id collision fix, export/import |

```
└─────────────────────────────────────────────────────────────────┘
```

---

```
┌─ v30 ───────────────────────────────────────────────────────────┐
│  2026-08-02 · audit release                                     │
└─────────────────────────────────────────────────────────────────┘
```

### GitHub Models removed — it was retired three days before v29 shipped

GitHub retired Models entirely on **2026-07-30**. v29 shipped support for it on
2026-08-02. Every request now returns:

```
HTTP/2 410  {"code":"github_models_retirement_brownout"}
```

This is the cost of the gap flagged in v29's handoff: *no real API call had
ever been made to the four new providers.* All four were tested against a
stubbed `fetch`, which proved the routing and proved nothing about the
endpoints. A single unauthenticated curl would have caught it.

### The 410 halted the entire key pool

Worse than a dead provider. Measured against the live worker before the fix:

```
pool = [ghp_dead, gsk_fake, AIza_fake]  → 502, stopped at GitHub
pool = [gsk_fake, AIza_fake]            → 401, tried both keys
```

`withKeyPool` treats 429 and 401/403 as key problems and rotates. Anything else
hit `return res` — "a real error, not a key problem, don't burn the pool". 410
is none of those, so **one retired provider took down seven working ones.**
`callOpenAICompatible`'s model fallback missed it the same way: `modelGone`
only matched 404.

Both now treat 404 **and** 410 as "this endpoint is gone" and keep going. The
lesson is the general one: a status meaning *permanently gone* must never be
handled as a transport error.

### Life-areas radar told three lies

Found by running real exported data through the chart rather than reading it.

1. **Negative areas were invisible.** `Math.max(0, …)` clamped every axis, so a
   net **−280** area rendered identically to one never started. Values are no
   longer clamped; deficits plot *inside* a dashed zero ring, with a red label
   and a hollow dot. Sign is now readable from the shape, not just the colour.
2. **The scale self-normalised.** `maxValue` existed but was never passed, so
   the largest axis always touched the rim — logging more of your strongest
   habit visually *shrank* everything else. One computed ceiling now covers
   both modes.
3. **Untagged XP vanished silently.** Habits with no `sub` are counted by the
   4-area view and dropped by the tag view, so the same data totalled
   differently with no explanation. The gap is now stated under the chart.

Plus the reported layout bug: `.radar-card` was `display:flex` with no
`flex-direction`, so the control strip became a squeezed sidebar overlapping
the plot instead of a row above it.

### A second first-run overlay, same shape as v29's

v29 fixed the LEVEL UP overlay firing for a level the user never earned. The
**pet evolution** overlay had the identical bug and was missed because only the
level path was audited: a fresh pet records `stage: 0`, so restoring a backup
whose XP implies a later form looked like an evolution and threw a full-screen
backdrop that intercepted every click.

Found the same way as the v29 one — it blocked an automated click. Note the
seed profile does *not* trigger it; only a restored backup does, which is
exactly what a user does after clearing site data to pick up a new build.

The first attempted fix was wrong and the test proved it: re-reading
`localStorage` inside the effect always looked like a returning user, because
the persist effect had already written. First-run state is now captured in a
ref at init.

### Version badge

A quiet `v30` next to the title, read from the **live service worker cache** at
runtime — never a constant. A stale bundle carries a stale constant and would
lie at exactly the moment the truth is needed. Two separate diagnoses this
cycle were spent establishing which build a screenshot came from; a laptop
turned out to be running v26 while the site served v29.

### The test suite is now actually in the repo

`npm test` referenced five files that had **never been committed on any
branch** — `--diff-filter=A` across `--all` found nothing. A clean clone could
not run a single test.

Same shape as the build-path bug v29 fixed. That one was *a command nobody
runs*; this was *a command nobody could run*.

**84 tests**, all committed, all verified to fail when their fix is reverted:

| Suite | Count | Covers |
|---|---|---|
| `keydetect.test.mjs` | 21 | detection, masking, client↔worker agreement, XP/level maths |
| `worker/providers.test.mjs` | 16 | routing, `mistral:` tag, table integrity, reset clocks |
| `worker/callshape.test.mjs` | 17 | request shape, token caps, JSON retry, 410 fallback, pool |
| `gate.spec.mjs` | 11 | first run, both overlays, version badge, key gate |
| `regress.spec.mjs` | 19 | 6 tabs, CRUD, XP, radar geometry, export, offline, 4 viewports |

The unit suites read the source and eval a brace-matched slice (`lift()`)
rather than importing, because the worker uses Cloudflare globals and the app
is JSX. The v29 extractor terminated each match at the first `\n};`, which for
a one-line declaration swallowed the rest of the file; it now brace-matches and
skips strings and comments.

Every test above was checked by reverting its fix and confirming it goes red.
A test that has never failed has never been shown to test anything.

### Also

- **Three `setTimeout`s leaked.** The composer shake in Routines, Vault Habits
  and Projects each set state 420ms later with no `clearTimeout`, so switching
  tabs mid-animation set state on an unmounted component, and rapid submits
  stacked timers that cut each other short. Replaced with one `useFlash()` hook
  that clears on re-trigger and unmount.
- **Two delete animations leaked** the same way, and could fire `onDelete`
  against an id that no longer existed.
- **Tab bar is a real `role="tablist"`** with `aria-selected`, so a screen
  reader announces "tab 3 of 6, selected" instead of six unrelated buttons.

### Still not verified

**No real API call has been made to Cerebras, NVIDIA or Mistral.** GitHub was
the one that got caught because it failed *unauthenticated*. The others need a
real key to disprove. What was checked this cycle:

- NVIDIA — both model IDs confirmed present in its public `/v1/models` (102
  models, no auth required)
- Cerebras — endpoint reachable (`403 Not authenticated`); docs confirm
  `gpt-oss-120b` is the only production model
- Mistral — endpoint reachable (`401 Unauthorized`); the **fallback**
  `open-mistral-nemo` was listed for retirement 2026-07-31, though the primary
  `mistral-small-latest` is an alias and self-updates

Reachable is not working. A 401 from the right host proves DNS and a path, not
a successful completion.

---

## Changelog

**2026-10-20 — `tasksh-v54`**

The assistant could not see most of the app, and money had no memory.

- **THE BUG: the companion has been blind to every quest since v35.** The
  worker's `buildSnapshot` read `data.goodHabits` and `data.badHabits`. v35
  merged those two lists into one `habits` array **eighteen versions ago**,
  and the client has sent `habits` ever since — so both arrays arrived empty.
  Measured by feeding the real payload through the old function:

  ```
  client sends : routines, vaultHabits, habits(29), rewards, totalXP
  worker reads : goodHabits → 0 items
                 badHabits  → 0 items
  ```

  Nothing ever failed. "What am I neglecting?" was answered with zero
  knowledge of 29 quests, and every `delete_good_habit` the model proposed
  was silently dropped because the id set it was checked against was also
  empty. Nothing added after v29 — expenses, daily tasks, tags, notes — was
  sent at all. `worker/actions.test.mjs` is the permanent guard.

- **The companion can now change almost anything.** Fourteen new action
  shapes: quests (tag-aware add/edit/delete), daily tasks, tags, expenses,
  expense categories, recurring rules and notes. Still behind the same
  reviewable diff — the user chose "show me first" when asked, so nothing is
  applied without a tap. The model is still treated as untrusted input:
  every action is re-validated against the snapshot server-side, and an id
  or a tag key it invented is dropped rather than trusted.

- **Expense categories are editable.** `cats` has been persisted since v46
  with no UI to change it, so the seven starters were effectively hardcoded
  and "education", "cricket" and "recharge" all landed in `other`. Add,
  rename, recolour, delete. **Deleting a category MOVES its spending to
  another one rather than deleting it** — money that vanishes from a total
  because a label was removed is the worst outcome a tracker has.

- **Recurring money rules.** "every 1st day of month u will add 4000 rupees
  as education", in his words. There is no server to run a cron on and a PWA
  is not running when closed, so a rule fires on the next OPEN and
  **back-dates the entry to the day it was owed** — the fee left on the 1st
  whether or not the app was looking. Two failure modes are designed out and
  mutation-tested: a rule can never fire twice for one period however many
  times the app re-opens, and a rule created today never back-fills the
  eleven months before it existed. Monthly rules clamp, so "the 31st" in
  February is the 28th rather than being skipped — the alternative pays a
  monthly bill eleven times a year.

- **Caught before shipping: a unit bug worth £40 of every £4,000.** Amounts
  are stored in minor units (paise) — `parseAmount` multiplies by 100 so
  repeated addition cannot drift. `recurLabel` interpolated `rule.amount`
  raw, and the AI's `amount` is a plain rupee figure, so "add 4000" would
  have stored ₹40. Spotted on a screenshot where a ₹4000 rule sat above a
  ₹40 month total. One conversion in one place (`aiAmountToMinor`), the
  worker prompt now states the unit, and both are pinned by tests.

- **Expenses moved to a shared store.** They lived in `useState` inside
  `ExpensesTool`, which was fine while the tool was the only thing touching
  them. Three things need them now — the tool, the recurring runner that
  fires on app open, and the companion — and a twelve-line store beats
  prop-drilling through `ToolsView` for all three.

Tests: **613 unit** (+73: 39 in `recurring.test.mjs`, 34 in
`worker/actions.test.mjs`) and **164 browser**. Twelve mutations applied to
the recurring engine — re-firing after `lastRun`, back-filling before
creation, stamping the oldest date instead of the newest, skipping short
months, firing while paused, unbounded catch-up, deleting a category's
spending — and all twelve were killed.

> **Deploy note:** the snapshot fix and every new action live in
> `worker/src/index.js`. GitHub Pages and Cloudflare are separate targets —
> the app will not gain a single new power until the worker is deployed:
> `cd worker && npx wrangler deploy`.

---

**2026-10-19 — `tasksh-v53`**

The chart could not see most of the work.

- **Daily tasks now carry tags, and finishing one credits its points to
  them.** Until now a daily task paid coins and nothing else, while the radar
  reads XP — so the two never met. Nine of the owner's twenty daily tasks are
  physical (20 laps on roof, 100 push ups, 40 punches in wall, 3 min hang,
  20 squats, 20 punches 20 pushups, two workouts, karate) and his Body axis
  still read **two quests**. He was doing the work every day; the chart had
  no way to hear about it. Measured after the fix, from a clean reset: a
  board of *Be happy / 20 laps on roof / Bath at evening* moved
  `Self 0→10, Body 0→50, Health 0→100`.

- **Points equal coins. One number, by construction.** `DIFFICULTIES` now
  reads its values out of `DIFF_VALUE = { easy: 10, mid: 50, hard: 100 }`, so
  the amount you are paid and the amount your tag is credited cannot drift
  apart in a later edit. "100 push ups" is `hard`, so it is 100 ◉ **and** 100
  into Body — which is exactly how the owner described it.

- **Two tags get full credit; the level still counts once.** Same rule quests
  got in v52, and the same reason: splitting the value between tags would
  make a 2-tag task worth half per axis and quietly reward under-tagging. The
  level reads `computeDailyTotalXP`, which counts each task exactly once —
  if full credit leaked into the level, adding a second tag would literally
  double your XP. Pinned by a mutation test, not just a unit test.

- **The zero floor moved to the SUM.** New `tagAxisRaw/tagAxisXP` add quests
  and daily tasks *before* flooring at zero. Flooring each half separately
  would mean a tag sitting at −40 from slipped quests reads 100 after a
  100-point daily task instead of 60 — quietly forgiving the penalty, which
  is the same shape as the v51 "claiming a reward from Today was free" bug.

- **A daily task may be untagged, and the app says so instead of guessing.**
  `dailyTags` has no fallback to the first tag — unlike `habitTags`, where
  inventing one is recovery because a habit always had an area. Filing
  "Bring milk" under Work would be making data up. An untagged task still
  pays coins and still counts toward your level; the Tasks card reads
  `untagged` and the radar card names how many there are.

- **Completions are recorded per task, dated with the QUEST day.** Each
  inventory item gained a `history` array, stamped with `questDayString`
  rather than the calendar date — the board rolls at the first routine
  (05:30), so something finished at 01:00 belongs to the day you were awake
  for, and dating it tomorrow would let the same task be completed twice.
  `logDailyDone` is idempotent per day on its own, because React does not
  promise how often an updater runs.

- **Upgrading guesses rather than blanking.** `migrateInventory` adds `tags`
  and `history` to every item, using a keyword table for the tags, because a
  radar that goes empty after an update reads as "the update ate my
  progress". The guess is capped at two tags, never overwrites tags you
  chose, and says nothing when it is unsure — a wrong tag is worse than no
  tag, because a wrong one looks decided. There is a `suggest` button in the
  editor that runs the same function on demand.

- **History starts empty, deliberately.** The app never recorded which daily
  tasks were completed on which day — only today's board did, and only for
  today — so there is nothing to backfill. Inventing one would put points on
  the chart that were never earned.

- **Deleting a tag repairs daily tasks too.** The tag editor's usage counts
  now include them, and dropping a tag strips it from the inventory. Unlike
  quests they are allowed to end up with nothing rather than being reassigned
  somewhere they do not belong.

- **Levelling is roughly three times faster, on purpose.** A full board is
  160 points a day against a measured habit pace of 58.5/day, so level 10
  arrives in ~14 days instead of ~53. The owner was shown those figures and
  chose it. Side effect worth knowing: from a hard reset, clearing one full
  board is exactly 160 points, which is exactly level 2 — the level-up screen
  fires on day one.

Tests: **540 unit** (+61: 55 new in `dailytags.test.mjs`, 6 in
`keydetect.test.mjs`) and **164 browser** (+14 in `regress.spec.mjs`). Ten
mutations were applied to the new code — split-instead-of-full-credit,
level double-counting, floor-per-half, non-idempotent logging, a fallback
tag, a backfilled history, overwritten tags, an uncapped guesser, slipped
daily tasks, and dropping daily points from the level — and all ten were
killed. Each mutation was verified to have actually applied first; a
mutation that does not apply is not a passing test.

---

**2026-10-19 — `tasksh-v52`**

The category system was two taxonomies stacked on each other. Now it is one.

- **Areas and sub-tags collapsed into ONE editable tag list.** v26 gave you 4
  fixed areas plus 10 editable sub-tags beneath them, and every quest needed
  one of each. That meant two schemes to keep straight, a tag called "Deep
  Work" sitting next to a quest called "Deep Work", and four categories that
  could not be changed without a release. There is now a single list, it is
  editable, and the defaults are the owner's five: **Work, Body, Health,
  Self, Discipline**. Net deletion — the sub machinery removed more code than
  editable tags added.

- **A quest can wear more than one tag, and OPTION ① is how they score:**
  full credit to each. A workout tagged Body + Discipline gives its whole
  value to both. **The axes therefore sum to more than your total XP, on
  purpose**, and the chart says so underneath itself. Your level still counts
  each quest exactly once, so progression is untouched.

  The rejected alternative — splitting the XP across a quest's tags — is
  seductive because the axes would then reconcile. It is also corrupting: a
  2-tag quest would be worth half per axis, so the chart would quietly reward
  under-tagging and the data would rot. A test asserts adding a second tag
  never reduces the first one's value.

- **Quests have descriptions.** A line under the name saying what it actually
  means, so "Manage" can be "kept the app honest" rather than a word.

- **Tags are addable, renameable, recolourable and deletable**, capped at 12
  because the radar stops being readable past that (measured: 10 axes are
  comfortable at 360px and 13-character labels still fit). Deleting a tag
  repairs every quest wearing it rather than orphaning them off the chart.

- **Fixed: the achievement toast was swallowing swipes.** It was one large
  tap target pinned over the bottom of the screen, and for its 4.2 seconds
  every tap and swipe aimed at the list underneath went to the toast instead
  — so a quest you tried to swipe simply did not respond. Found while
  debugging a "failing" swipe test that turned out to be reporting a real
  bug. The body is inert now; a small × takes the input, and it still
  self-dismisses. A test asserts nothing at the centre of a quest card
  resolves to the toast.

- **Migration is automatic.** `fitness` becomes `body`; old sub-tags that
  belonged elsewhere are moved rather than lost (screen time and admin both
  become `discipline`); anything unplaceable lands on the first tag rather
  than disappearing from the chart. A v51 backup restores without losing its
  shape.

- **Tests: 479 unit + 150 browser** (was 460 + 149). A new `tags.test.mjs`,
  and the v44/v45 negative-stat tests in `keydetect` and `quest` were ported
  rather than deleted — the bug they guard is older than the model they were
  written against. Four mutations on the new code: splitting XP instead of
  full credit, removing the floor, dropping the sub-tag remap, and letting an
  untaggable quest fall off the chart. All four went red.

**2026-10-19 — `tasksh-v51`**

Reported as "the points of daily task does not add to my current points".
Completing a quest was paying correctly the whole time — the problem was that
no screen he was looking at showed the number it paid into.

Three currencies live here and they have been refactored twice:
**XP** (habits only, drives level and pet), **coins ◉** (daily quests,
pomodoro, achievements, level-ups; spent on rewards) and **EP** (rngdle's
own, sealed off). Every bug below was one screen disagreeing with another
about which of the three it was holding.

- **Fixed: the Today tab showed XP where the spendable balance belongs.**
  Beside "REWARDS YOU CAN AFFORD" it printed `computeTotalXP(habits)` — a
  figure a daily quest *never* moves. So the sequence was: complete a quest,
  coins go up correctly, and the number on screen sits still. The section
  filtered by coins and displayed XP, which is the worst of both. Shows
  `◉ coins` now.

- **Fixed: rewards claimed from Today were free.** Measured before the fix:
  the same 100-coin reward cost `520 → 520` from Today and `500 → 400` from
  Quest. `TodayView.claimReward` neither checked the balance nor called
  `spend()`; `QuestView.claimReward` did both. Two implementations of one
  rule, and only one of them knew the rule. Today now takes the money and
  refuses when you cannot afford it.

- **Fixed: the quest board showed no balance at all.** The one screen where
  coins are *earned* had no running total, so completing a quest moved a
  number that was only visible one tab away. There is a live counter in the
  header, and a test asserts it changes when a quest is ticked.

- **Reward costs are labelled ◉, not XP.** They have cost coins since v41;
  the Today tab never got the memo.

- **Checked and left alone**, because they were already right: daily quests
  pay 10/50/100 by difficulty, pomodoro pays, level-ups pay, achievements
  pay, coins cannot go negative, an unaffordable reward is not offered, and
  no amount of rngdle rolling can touch the coin balance.

- **Tests: 460 unit + 149 browser** (was 460 + 142). Seven new economy tests
  in `regress.spec.mjs`, including one that claims the same reward from both
  screens and asserts the two prices match — the shape of bug that started
  this. Three mutations: Today free again, Today showing XP again, the board
  balance removed again. All three went red.

**2026-10-19 — `tasksh-v50`**

v49 fixed the reveal and left everything around it alone. These are the
screens you actually sit on between rolls.

- **The idle box is the machine, idling.** Opening the tool used to show a
  small infinity glyph and two lines of prose in a large empty rectangle —
  dead, and the first thing you see. It is now the same seven slots churning,
  waiting to be stopped. One interval, which pauses when the tab is hidden
  and does not start at all under `prefers-reduced-motion`.

- **The collection reads as a collection.** Locked cells keep their **tier
  colour** at low opacity instead of going flat grey. Rendered grey the grid
  looked broken rather than unfilled, and you could not see that the empty
  rows are the rare ones — which is the only interesting thing a collection
  screen has to say. Owned cells get an inset glow in their tier, and six
  per-tier progress bars sit under the filters so "2 of 36 epic" is a shape
  rather than a number you have to go looking for.

- **The shop says what you can afford.** Items within reach take an accent
  left border and an accent name, and each shelf's blurb carries a count.
  Previously every card looked identical and you had to read nine prices
  against a number at the top of the screen.

- **Tests: 460 unit + 142 browser**, unchanged and still green — this was a
  presentation pass, and none of it changed a rule. Worth stating plainly
  rather than claiming credit for coverage I did not add.

**2026-10-18 — `tasksh-v49`**

The rngdle reveal was a fade. Now it is the original's actual choreography.

- **Ported `roll-timeline.js` from RNGdle Infinite properly.** v45 shipped a
  linear digit wipe because I had not read their timing code. The real thing
  is a staged sequence, and the staging is most of why the game feels good:

  1. digits land **one at a time and accelerating** — the gap between them
     grows as the square of how far through you are, so the last two feel
     dragged out of the machine. Unlanded slots scramble; a slot that just
     landed plays a 320ms overshoot.
  2. the number collapses with a pulse
  3. badges **cascade in groups**, not all at once
  4. the EP total rises
  5. the rarity band **slams in** — and not a frame before. The verdict reads
     `— — —` until its moment, because knowing you rolled a Mythic while the
     digits are still spinning spoils the only suspense the game has.

  The whole sequence is then scaled to whatever reveal length you have
  bought, so the 0.6s end of the upgrade ladder still plays every beat in the
  same order and at the same proportions. Tested: a 600ms reveal and a 3000ms
  reveal put the rarity beat at the same fraction of the way through.

- **Rarity is visible in the number itself.** Uncommon through Mythic each
  get their own phosphor treatment — glow intensity, then a slow breathe at
  Anomaly, then a periodic tear at Mythic — and the stage border takes the
  band colour. Done in the terminal palette rather than importing their
  pastel gradients, which are the one part of the original that would not
  survive contact with a Conky theme.

- **Fixed while looking at it: the floating `+EP` crossed the verdict.**
  Centred and rising, it drifted straight over `MYTHIC · top 0.002%` and the
  scored-EP line and made both unreadable for a second and a half. It rises
  up the right edge now. Found by screenshotting a forced Mythic roll rather
  than by a test — worth saying, because no assertion I would have thought to
  write would have caught two legible things overlapping.

- **Seven fixed digit slots.** Short numbers are blank-padded instead of
  centred, so 777 and 1,000,000 occupy the same place and the box stops
  jumping between rolls.

- **The reveal does not run a render loop.** React is woken at the ~23 moments
  something actually changes, not at 40Hz for the length of the reveal;
  digit scrambling runs on its own interval inside the digit row. A test
  fails if the cue count ever creeps past 60.

- **Tests: 460 unit + 142 browser** (was 447 + 142). Five mutations — even
  digit gaps, the rarity beat moved before the summary, slots following the
  number, the duration guard removed, and unsorted duplicate cues. All five
  went red.

**2026-10-18 — `tasksh-v48`**

Two things the expense tracker was missing: names that add up, and a view
longer than a month.

- **Entries have names, and the names remember themselves.** The note field
  became the entry's name. Type "sweets" once and from then on it suggests
  itself — and tapping the suggestion fills the **name, the category and the
  price you usually pay**, so a repeat purchase is one tap rather than three
  fields.

  Deliberately *not* a managed item list you set up first. Every step between
  you and logging a purchase is where the habit dies; a typo making a second
  name is a smaller problem than the spend not being recorded at all. Names
  are matched case- and space-insensitively, so `sweets`, `Sweets ` and
  `SWEETS` are one item, and the spelling shown is whichever you used last.

  The storage shape is unchanged — still `note` on each entry — so there is
  no migration and an old backup restores into this untouched.

- **"What you bought".** Spend per named item, biggest first, on both the
  month and the year, with a proportional wash behind each row. Unnamed
  entries are grouped as "(unnamed bills)" rather than quietly dropped — a
  table that does not add up to the total is worse than no table.

- **A year view.** Twelve bars, Jan–Dec, empty months included; tap one to
  open that month. Plus the year total, per-category donut, the item table,
  biggest month, months with spending, and what the year is on track for.

- **An all-time line** underneath it: every month you have ever logged, on
  one line. Contiguous by construction — a line that skips empty months
  draws a slope from January to April and calls it a trend.

- **The same arithmetic trap, caught in the new place.** The yearly average
  divides by months **elapsed**, not by 12. Dividing a year's spending by 12
  in February is the same mistake the daily average would have made on the
  3rd of the month, and it is wrong in the same flattering direction. Tested
  both ways; reverting it turns two tests red.

- **Tests: 447 unit + 142 browser** (was 427 + 133). Six mutations against
  the new code — the case-insensitive name key, the elapsed-month divisor,
  prefix-beats-substring ranking, holes in the all-time series, and the
  newest-entry-wins rule for a suggestion's category and price. Five went
  red; the sixth turned out not to have applied at all (wrong indentation in
  my search string, the second time that has happened), and the correctly
  indented version of it did go red. The rule in AGENTS.md about verifying a
  mutation landed earned its place twice in two versions.

**2026-10-18 — `tasksh-v47`**

The last item on the list. Everything synthesised — no audio files, nothing
for the service worker to precache, nothing to 404.

- **#9 Sound.** Three buses under one master: `ui`, `ambient`, `alarm`. They
  are separate so the bed can sit well under the taps without making the taps
  quiet too, and so the ring can be cut without chasing every oscillator it
  scheduled.

  - **A richer palette.** Was six sounds, now fourteen. Half of them are
    filtered noise rather than oscillators, because a tone cannot do a tick
    or a paper-shuffle whoosh. The two swipe gestures got voices that match
    their direction: complete is a major third up, fail is a minor second
    down — short enough not to feel like a telling-off. `markToday` learned a
    quiet mode so a swipe plays its own sound instead of two at once.
  - **Ambient beds, off by default.** Rain, server room, tape and night,
    built from one shared pink-noise buffer plus a slow filter sweep so the
    bed breathes instead of sitting still. Off is the default and the first
    option: a task app that starts humming unprompted is one you uninstall.
    The bed stops when the app is backgrounded and when you mute — an audio
    graph left running behind a locked screen is battery drain nobody will
    ever attribute to the right cause.
  - **A ten-second pomodoro ring you can stop.** A rising three-note figure
    that repeats with a widening interval and a climbing level, capped below
    clipping. Length is a setting: silent, 3s, 10s, 20s. **Every caller gets
    a stop function and the timer shows a `■ silence` button while it rings**
    — a ten-second alarm you cannot silence is a punishment, not a feature.
  - **Where the settings live.** In the vault, not behind the titlebar
    speaker. That button's one job is muting in a hurry, and putting a sheet
    behind it costs a tap at exactly the moment you cannot afford one.

- **Four bugs the tests caught before the build did.**
  - A 3-second ring was only 2.18s of sound with a 1.02s hole in the middle;
    the cycle was 1.6s and nothing stretched the last note. Now the final
    note is held out to the full length, so "10 seconds" means ten seconds.
  - `sound.land(NaN)` indexed the frequency table with `NaN`, got
    `undefined`, and scheduled a silent oscillator. Guarded.
  - The alarm gain climbed past the clipping ceiling on long rings.
  - And one test that was too loose to notice the first of those: asserting
    the ring filled 85% of its length let a 9.64s "10 second" alarm pass.
    Tightened to 50ms, which is what made the mutation go red.

- **Tests: 427 unit + 133 browser** (was 397 + 127). The audio engine is
  driven by a fake `AudioContext` that records every node it is asked to
  build, so "muted means silent" and "switching scenes does not leave the old
  bed running" are assertions rather than hopes. Six mutations, all red —
  including two that were green on the first attempt and are worth naming:
  one because the test threshold was too loose, and one because my mutation
  string had the wrong indentation and never applied. A mutation that does
  not apply is not a passing test, it is no test at all.

**2026-10-18 — `tasksh-v46`**

The expense tracker, plus a production bug the test suite found by accident
while I was building it.

- **Fixed: the worker had run out of KV writes, and backup was down with it.**
  `POST /sync` was returning
  `500 {"error":"KV put() limit exceeded for the day."}` against the live
  worker. Cloudflare's free KV tier allows **1,000 writes a day across the
  whole worker**, and the quota is per account, not per route — so the
  schedule sync spending the budget takes **cloud backup and the pomodoro
  timer down too**.

  The cause was app-side and had been there since v30. An effect keyed on
  `routines` POSTed the schedule unconditionally: once on every app open, and
  again on every change to the array — which includes **ticking a routine
  complete**, because that rewrites `history`, even though `history` is not
  in the payload. Same bytes, over and over, one KV write each.

  Now deduped against the last payload the worker actually ACKed, so an
  unchanged schedule costs nothing. Marked sent only on a 2xx, so a failed
  push still retries. Turning notifications on still forces a push, because a
  freshly subscribed endpoint has no schedule stored against it yet. The
  worker is untouched; this needs no redeploy, and the quota resets daily.

- **Fixed: six tests were passing without running.** `notify.test.mjs`'s
  harness called `fn()` and incremented the pass counter without awaiting it,
  so the async tests I had just written for the fix above reported green
  while their assertions were still pending and their rejections vanished as
  unhandled promises. The harness awaits now. Worth stating plainly: I wrote
  six tests, watched them pass, and they had not executed.

- **Fixed: four test files depended on a live third-party service.**
  `gate.spec.mjs`, `regress.spec.mjs` and `cloud.spec.mjs` let the app reach
  the real notify worker on boot, so the day it started returning 500 the
  "no console errors on boot" test went red for a reason that had nothing to
  do with the app. A test that fails because somebody else's server is having
  a bad afternoon trains you to ignore it. All three stub the worker now.

- **#2 Expense tracker.** The simple tier you picked: spending, categories,
  charts. No income, no balance, no budgets, no bank link.

  Three things the research kept naming as the difference between a tracker
  people keep and one they abandon in a week, so those are what got built:

  - **Entry is amount-first and one-handed.** Its own keypad rather than the
    phone keyboard — a numeric keyboard still costs a layout shift and half
    the screen, and this one carries `+` and `−` that behave, so splitting a
    bill in your head (`120+45+30`) is one entry instead of three. Parsed by
    hand, never with `eval`: the box takes user text.
  - **A daily view with an average.** A bar per day, every day of the month
    including the empty ones — a gap has to mean "spent nothing", and it
    cannot if missing days are simply absent. Tap a bar for that day's items.
  - **Categories you can read back.** Donut plus a ranked list with shares,
    and the usual numbers: per day, per *spending* day, biggest single,
    days with spending, and what the month is on track for.

  Two more worth having: **repeat** logs a recent entry again in one tap
  (chai, the commute, the same thing every day), and **CSV export** with a
  UTF-8 BOM so a ₹ does not arrive in Excel as mojibake.

  Two decisions pinned by tests because being slightly wrong about money is
  worse than being obviously broken:
  - **Amounts are whole minor units (paise), never floats.** `0.1 + 0.2` is
    `0.30000000000000004`, and a tracker adding up a hundred entries a month
    will eventually show it. A test adds 7p a hundred times and demands
    exactly ₹7.00.
  - **The per-day average divides by days ELAPSED, not days in the month.**
    Dividing October's spending by 31 on the 3rd is wrong by a factor of ten
    and wrong in the flattering direction, which is worse. The month-on-month
    comparison does the same thing: the 10th of October is compared against
    the first ten days of September, not all of it.

- **Tests: 397 unit + 127 browser** (was 354 + 114). Seven mutations against
  the new code — float amounts, the average dividing by the whole month, the
  comparison using the whole previous month, unescaped CSV, skipped empty
  days, the sync dedupe removed, and a failed sync marked as sent. All seven
  went red.

**2026-10-18 — `tasksh-v45`**

Five of the ten items, plus the half of #10 that v44 left owed. The headline
is a game; the quietest line is a bug v44 claimed to have fixed and had not.

- **Fixed: "no negative stats" did not actually fix the stat you reported.**
  v44 floored `computeAreaXP`, which scores the **four broad areas**, and
  called the item done. The radar defaults to **tag** mode, tags are scored
  by `computeSubXPIn`, and that function had no floor — so Screen Time, the
  axis in the screenshot, was still plotted below zero after the fix
  shipped. Both scorers are floored now and a test asserts every axis in
  both modes is `>= 0`. Reverting the floor turns two tests red.
  The honest figure is not lost: the uncapped number is kept by
  `computeSubXPRawIn` and the axis popup says *"held at zero · true balance
  −80"*, because "0" and "0 after an 80-point deficit" are not the same fact.

- **Fixed (found while testing #8): every radar dot collapsed onto the
  centre.** A dot sits at a radius proportional to its value, so on a new
  save all ten tags huddle inside a 26px circle and their round tap targets
  overlap. Tapping *Mind* reliably opened *Creative*. Tap targets are now
  **angular wedges**, one per axis, from the centre past the labels: a wedge
  owns a direction rather than a point, so it is unambiguous and
  finger-sized whatever the value. A browser test now taps every axis in
  turn and asserts the popup that opens is the one that was tapped.

- **#3 Swipe to complete or fail.** Swipe a quest card **right to complete,
  left to fail** — the direction you asked for after taking the counter. The
  axis is locked within the first six pixels of movement, so a gesture that
  starts vertical is handed straight back to the browser as a scroll. Under
  the trigger distance the row springs back and records nothing. **The ✓/✗
  buttons stay**: a gesture nobody told you about is not a feature, it is a
  secret. Today's quest rows swipe too.

- **#5 Today's quests appear in Today's open tasks.** The Tasks tab became
  the quest board in v35 and Today kept listing the old free-form task list,
  which nothing writes to any more — so the one thing you are meant to do
  today was the one thing the Today tab did not show. Completing a quest now
  has one implementation shared by both screens, because two buttons wired to
  two copies of it is how a quest gets paid for twice.

- **#8 Tap a dot for its exact points.** A popup under the chart with the
  figure, the gains and losses that produced it, how many marks each way, and
  the per-quest breakdown sorted best-first. Not a modal — it opens beneath
  the dot it describes, so the thing you tapped is still on screen next to
  the number it produced.

- **#10 (second half) Per-quest calendar.** A real month grid on every quest
  card: completed days in accent, skipped in red, today outlined, future
  dimmed. Months step backwards and refuse to step past today. Underneath:
  done and skipped this month, the live streak and the longest run ever. The
  Vault's card chrome was reused here — the feature went away in v44, the
  shape it left behind did not.

- **#1 RNGdle — rebuilt as RNGdle Infinite.** The first build was the daily
  game: one roll a day, scored, done. You asked for
  [RNGdle Infinite](https://jaime-gaming.github.io/RNGdle-Infinite/) instead,
  so the shell was replaced and the scoring engine kept.

  *What survived unchanged:* the badge engine. All **233 rules** were written
  from the published descriptions and verified by sweeping **all 1,000,001
  numbers** — every badge reproduces its published count **exactly**, and the
  worked example the game documents (1,000,000 earns 39 badges, is paid for
  22, totals 131,081,274 EP) comes out to the digit. Infinite's own catalogue
  turned out to be byte-identical: same 233 ids, same EP values. Its two
  extra badges (Pendulum, Last Second) bring the collection to **235**.

  *What the port changes, and why:*
  - **The clock runs 15× faster.** The original is an idle game: 45-second
    reveal, 60-second cooldown. Inside a task app that is not a reasonable
    thing to ask of a phone. Base is **3s + 4s**, and the upgrade ladder
    ends at 0.6s + 0.12s.
  - **Prices are untouched.** Their economy is balanced and audited;
    rescaling it would be guessing. Measured consequence, stated plainly:
    the whole 195,300,000 EP catalogue is about **9,000 rolls** — roughly
    18 hours here against 260 at the original pace.
  - **Reset EP gates are 4×, and only those.** At a 15× clock the original
    250,000 EP first rung works out at 12 rolls — 84 seconds — so you would
    be offered a rebirth before buying anything. ×4 puts the first rung near
    six minutes. The **badge** gates are deliberately not scaled: they are
    clock-independent, and they are what keeps the end of the ladder long
    (Rollback wants 177 of 235 badges, which measures at ~63,000 rolls).
  - **EP is its own wallet.** It never touches ◉ coins, so no amount of
    rolling can buy a real-world reward.
  - **Dropped:** 20 of the 26 cosmetic auras (six kept and rewritten as
    terminal effects — scanline, blueprint grid, tear, churn, slab, hex
    spill), device-link sync, the PWA shell, the goals page and the
    changelog. tasks.sh already has its own versions, or they make no sense
    inside one tool.

  *The invariant the tests exist to protect:* **multipliers touch the wallet,
  never the number.** A companion, a rebirth or a skill may change what lands
  in your balance; none may change the number drawn, its badges, its scored
  EP, its band or its rank. Break it and two players rolling 142,857 stop
  agreeing about it, and every rank figure in the game becomes a lie.

- **Fixed while porting: the skill rack could never grow.** `rngiRackSize`
  read `skill-bay-1` and `skill-bay-2` out of `owned`, but neither was ever
  added as a buyable product — so the second and third slots were
  unreachable at any price. Both are on the skills shelf now, the second
  gated behind the first.

- **Tests: 354 unit + 114 browser** (was 247 + 85). The new badge suite runs
  a 3,000-roll fingerprint by default and the full 1,000,001-number sweep
  under `RNG_FULL=1`. Twelve mutations were run against the new code — a
  multiplier reaching the score, the draw cap removed, a floor skill not
  stopping early, a reset gate accepting either condition instead of both, a
  rebirth wiping the collection, the offline cap removed, a locked upgrade
  bought, the tag floor removed, the calendar's Monday offset, the
  longest-run walk, the month counter and the month-step wraparound. All
  twelve went red.

**2026-09-29 — `tasksh-v44`**

First slice of the ten-item list. Structure first, because moving the
navigation and removing a tab touch every screen and that churn should
happen once.

- **Navigation moved to the bottom and became icons.** Inline SVG, not a
  font or image set — one less thing for the service worker to precache,
  and an icon that 404s is a navigation bar with a hole in it. Measured at
  360px: seven targets, **51×46px each**, zero overflow, so the bar no
  longer scrolls. Labels survive as a caption under each glyph and as
  `aria-label`, because an icon-only bar is a memory test.

- **Fixed: the achievement toast was sitting on the new navigation.** It
  moved to the bottom in v41, when nothing lived down there. Now clears the
  bar by its full height plus the safe-area inset.

- **Vault slimmed to backup and build.** Habits, projects and notes are
  gone from that screen. **The data is not deleted** — `tasksh.notes.v1`,
  `tasksh.projects.v1` and `tasksh.vaulthabits.v1` are untouched and still
  ride in every export and cloud snapshot, so putting the sections back is
  a revert rather than a recovery. Four note-UI tests retired with the
  screen; a new test asserts the storage keys survived it.

- **Fixed: stats could go negative.** Screen Time sat below zero because a
  bad habit only ever subtracts, and the radar plotted it inside-out.
  `computeAreaXP` now floors at zero, while `computeAreaXPRaw` keeps the
  true figure for anything that wants to show real damage — clamping the
  chart should not hide the number. Total XP is unaffected.

- **Fixed: the daily board could be rerolled forever.** You could spin until
  you liked the draw, which made it meaningless. One reroll per board day,
  recorded against the day so a reload cannot reset it.

- Two mutations run, one red, **one green that found a real gap** — nothing
  covered the reroll limit at all. Test added, now red. **247 unit + 85
  browser.**

**Still to come:** swipe to complete/fail, daily task in Today's open list,
tap-a-dot-for-points (v45 with the RNGdle tool), then the expense tracker,
then the sound pass.

**2026-09-29 — `tasksh-v43`**

- **Removed: the red→cyan position ramp, entirely.** It went through three
  forms in two days — a tint across the card face, a bloom behind the card,
  a gradient border — and none earned their keep. A card's position in a
  list is not information worth a colour, and every version competed with
  the one colour that *is* information. `gradientColor` no longer touches a
  card or a timeline block.

- **Colour now means exactly one thing: state.** Cyan when done, red when
  slipped, the theme's plain border otherwise. Timeline blocks follow the
  same three states (done / running now / upcoming) instead of running a
  spectrum across the day.

- **Rounder, softer.** Card radius roughly tripled (terminal 3px → 10px,
  sakura 18px, neon stays near-square because that theme is a CRT), and
  cards gained a contact shadow.
  - `DESIGN.md`'s "flat surfaces, no card shadows" rule was **lifted at the
    owner's explicit request** and the document now says so at the top. The
    rest of it still stands: no glassmorphism, no CSS framework, one runtime
    dependency.

- Two mutations, two reds. **237 unit + 87 browser.**

**2026-09-29 — `tasksh-v42`**

- **Fixed: captions on a sung clip came back as "OUTRO MUSIC".** Whisper
  narrates non-speech rather than staying quiet, and it is documented as
  weaker on sung vocals than on speech. Three changes:
  - the request now states `language`, pins `temperature: 0`, and carries a
    lyrics-biased `prompt` (Groq allows 224 tokens);
  - if the result is mostly music tags or covers under 12% of the clip, it
    **escalates from `whisper-large-v3-turbo` to `whisper-large-v3`** — 10.3%
    word error rate against turbo's 12%, and free on the same key;
  - stage directions are filtered out before anything is drawn. `[Music]`,
    `(OUTRO MUSIC)`, `♪♪♪` never become captions. A **bare** "music" is kept,
    because at word granularity that is a lyric — a test caught me dropping
    it. If nothing survives, it says the vocals may be too far under the mix
    instead of burning in a shrug.

- **Fixed: the pomodoro forced you through rounds.** A long break was four
  skips away and every skip moved the round counter. Focus / short / long
  are now three buttons, and the round pips are tappable.

- **Changed: the card gradient is a border now.** Third attempt — a face
  tint was muddy, a bloom was softer but still coloured the background, and
  a one-pixel gradient border keeps the card face flat, which is what a
  terminal look wants. In QUEST the hue is the **state**: cyan when done,
  red when slipped, the position ramp otherwise. Built from two stacked
  backgrounds rather than `border-image`, which cannot follow a radius.

- **Fixed: the delete ✕ was invisible on a phone.** `.del-btn` was
  `opacity: 0`, revealed by `.task-row:hover` — and a touchscreen never
  hovers, so on mobile it was transparent at all times. That is also why
  inventory delete was reported missing in v40 when it had shipped in v36.
  Now visible by default in dark red (`#9B3341`), 25×25 tap target, with the
  fade-in reserved for `(hover: hover) and (pointer: fine)`.

- **The timeline "now" line: measured, then made checkable.** Pinning the
  browser clock to three times showed the position was already accurate to
  the minute (05:30 → 05:30, 14:20 → 14:20, 23:10 → 23:10), so this was not
  the arithmetic. Two things made it impossible to confirm from a
  screenshot, and both are fixed: the line was anchored by its left edge
  while hour labels are centred on theirs, and it carried no reading of its
  own. It now centres like the labels and shows its own time in a chip —
  inside the track, because `.timeline-track` is `overflow: hidden` and the
  first attempt sliced the chip in half. If it ever disagrees with the
  titlebar again, the screenshot settles it.

- **Changed: the routine gradient moved behind the card.** Painting it
  across the card face put colour under every label, which is what looked
  muddy. Now a blurred bloom leaks from the left edge and lower-right corner
  of each row while the card face stays flat panel colour — measured label
  contrast **14.9:1**. The hue still runs the theme ramp down the list
  (red → cyan on Terminal). First attempt at 0.40 alpha plus a face tint
  drowned the text; shipped at 0.22 with no face tint.

- Three mutations, three reds, and the full suite re-run: **226 unit + 86
  browser**.

- Shipped as v42 rather than v41 because v41 was already deployed. Reusing a
  cache tag means the service worker never replaces itself and the phone
  never sees the change — the failure v38 was written to end.

**2026-09-28 — `tasksh-v41`** *(continued)*

- **Themes now change type, shape and gradient, not just colour.** Each of
  the nine carries `type` (mono + UI font), `shape` (card/button/chip radius,
  border weight, glow budget) and its own two-stop `ramp` for the card wash.
  172 hardcoded `'JetBrains Mono'` literals became `var(--font-mono)`.
  Neon is square-cornered with a mono UI and a magenta bloom; Sakura is 14px
  rounded and pink; Bone is serif. Three new themes, and the ladder is now
  one every five levels (1, 5, 10 … 40) instead of every ten — milestones
  and pet forms stay on tens.

- **Fixed: coins were a currency nothing accepted.** Daily quests and
  pomodoro blocks minted them; the reward centre charged **XP**. So claiming
  a reward dragged the same number that drives levels, the pet and theme
  unlocks — two currencies, one sink, plumbed to the wrong one. Rewards now
  cost coins, `computeSpendableXP` is deleted, and the XP-source donut lost
  its "Spent" slice because XP is no longer spent.
  - Existing rewards keep their numbers, so a reward that cost 150 XP now
    costs 150 coins. Worth re-pricing once the balance is visible.

- **Fixed: every non-Gemini model ID in the app was dead.** Groq retired
  both Llamas on 2026-08-16; checking the public catalogues found the
  OpenRouter and NVIDIA IDs gone too. Replaced with current ones, and —
  because this is the third model shutdown in three months — every
  OpenAI-compatible provider now does what Gemini has done since v19: when
  the hardcoded IDs all fail, ask the provider what it serves and use that,
  skipping anything that can't hold a conversation.

- **Fixed: Gemini auth and error reporting.** The key moved from `?key=` to
  the `x-goog-api-key` header (keeps a secret out of URLs and logs), 3.x
  models moved ahead of the retired 2.x ones, and failures now report
  Google's actual reason instead of "Couldn't reach Google" — including
  naming the `AQ.` key bug and pointing at a provider that works.

- **Polish.** One keyboard-only focus ring, a 60ms press response, cards
  that lift their border instead of a shadow, section-header hairlines
  (excluded from headers that already carry a control), and a wordmark that
  types itself once on boot with a blinking cursor. All motion respects
  `prefers-reduced-motion`.

- **Audit before release:** every tab in all nine themes at 360px — no
  console errors, no page errors, no loose overflow. The 45 elements past
  the right edge on the routines tab are all inside `timeline-scroll` and
  the tab bar, which is what a horizontal scroller is.

- **Tests: 226 unit + 84 browser.**

**2026-09-28 — `tasksh-v41`**

- **Added: a real caption style editor with a live 5-second preview.** The
  preview runs with or without a clip — a sample loop with a deliberate
  pause in it, so line breaking is visible while you tune — and it renders
  through **the same `drawCaptions` the exporter uses**. A preview drawn by
  different code than the export is worse than no preview.
  - Editable: font (4 stacks), size, weight, letter spacing, words per line,
    uppercase, vertical position, alignment, text/spoken/chip/outline
    colours (8 swatches plus a native picker) and outline width.
  - **Four highlight behaviours**, because "karaoke" is a motion decision as
    much as a colour one: none, colour, pop (one word at a time, scaling in
    over 120ms) and chip (spoken word on a filled rounded rect, drawn by
    hand because `roundRect()` is still missing on enough Android webviews).
  - Every value is clamped by `CAPTION_LIMITS` and weights snap to hundreds;
    a 0.2 font size is one word per screen and a baseline past 0.92 sits
    under Instagram's UI.
  - Words-per-line **re-chunks live** rather than being baked at transcribe
    time — it was stored before, which meant the setting silently did
    nothing until you re-transcribed.

- **Fixed: the titlebar was squashed.** Measured at 360px: the 12-hour clock
  was wrapping onto two lines, which made the whole bar **55px** tall and
  left the right-hand controls 197px wide. Now 24-hour, `nowrap`, tabular
  figures; icons 24→22px with a 6px gap; the three decorative mac dots hide
  below 400px. **Bar is 47px, clock is one 13px line, controls 173px.**

- **Changed: the tab bar scrolls again, on purpose.** v39 fitted seven tabs
  into 360px by halving the padding, which fixed overflow and made the row
  look crushed. Padding is back to 13px and the bar scrolls, with a fade
  mask on the right edge so it reads as scrollable rather than clipped, and
  `changeTab()` pulls the active tab fully into view. The v39 "zero
  overflow" test was replaced by one asserting the opposite contract.

- **Fixed: the achievement toast was eating taps on the whole top bar.** It
  is `position: fixed; top: 16px` and clickable, so for its entire lifetime
  it covered the titlebar and the tab bar. This is exactly what
  gate.spec's pointer-events test is for — it missed it because it
  hit-tested the *last* tab, which has been legitimately off screen since
  the bar started scrolling, so it was measuring empty space. Now it
  hit-tests the **active** tab, immediately went red, and the toast moved to
  the bottom where the app's other toasts already live.

- **Tests: 214 unit + 84 browser.** Four more mutations on the style
  sanitiser, four reds.

**2026-09-28 — `tasksh-v40`**

- **Removed: the ambient background, entirely.** Not the toggle — the thing.
  `AmbientBackground`, the four `.amb-*` layers, the drifting blobs, the
  dust, the stars, the film grain, the `--blob1..3` and `--grain-opacity`
  variables, the per-theme `ambient` block in all six themes, and the
  settings switch. **16.7 KB of source.** A browser test now asserts zero
  `.amb-layer` nodes and `background-image: none` on `.app-root`, so it
  cannot creep back.
  - One thing to know: `--time-warm` had exactly two consumers, both ambient
    layers. The time-of-day *phase* still exists (the companion reads it) but
    it no longer paints anything.

- **Added: a red → cyan wash behind ordered cards.** Same hue ramp v36
  introduced for routine borders (352° → 171° the warm way round), now a
  fill behind routines and habits, positioned by list order.
  - Alpha peaks at **0.16** and fades out by 80% of the card width, so long
    labels always end on flat panel colour. Measured: the amber middle of the
    ramp at 0.16 over `#14171C` leaves roughly **9.8:1** against `--text`.
    At 0.30 it drops under 7:1 and starts reading as a highlight.
  - Lightness is 0.60 here versus 0.64 on the border — a large area of a
    colour reads brighter than a 3px line of it.
  - A completed routine or habit drops the wash along with its border, so
    "done" still reads without reading the text.

- **Added: AI CAPTIONS, the second tool.** Pick a clip under 60s, get
  word-timed captions burned in. Three styles: clean, karaoke, word-pop.
  - **Groq `whisper-large-v3-turbo`, called straight from the phone.**
    Verified before building: `api.groq.com` answers CORS preflight with
    `access-control-allow-origin: *`, so no worker proxy sits in the path.
    Free tier is 28,800 audio-seconds/day — about 480 clips of this length.
  - **Only the audio leaves the device, ~1.9 MB of it.** A 60s phone clip is
    60–150 MB and Groq's free tier caps uploads at 25 MB, so the audio is
    stripped to 16 kHz mono and packed into a hand-written 44-byte WAV
    header. Whisper resamples to 16 kHz internally anyway.
  - **Burn-in is local, on the phone's own encoder.** WebCodecs supplies
    hardware H.264 but deliberately no container; `mediabunny` supplies the
    MP4 muxer. The original audio track is **copied through without
    re-encoding**, which also sidesteps the patchiest codec on Android — the
    AAC *encoder*.
  - Caption quality is the chunker, not the model: max 3 words and 22
    characters a line, a break on any pause over 350 ms, a break after
    sentence punctuation, a 250 ms minimum on screen clipped so two lines
    can never overlap, and a bottom safe area at 82% of frame height so
    Instagram's UI doesn't cover them.
  - **"check phone" encodes a real one-second clip and re-parses it** rather
    than trusting `isConfigSupported()`, which can say yes on hardware that
    then fails at finalize. On the test machine: `real encode yes · 60ms`.

- **The one new dependency, and why.** `mediabunny` (MPL-2.0, zero transitive
  deps) breaks the no-dependencies rule in `AGENTS.md` deliberately. The
  alternative was ~1,500 lines of hand-written MP4 box offsets where a
  mistake yields a file that plays locally and fails on Instagram.
  ffmpeg.wasm was rejected at ~30 MB — 65× this entire app.
  - **Measured and then fixed:** importing `ALL_FORMATS` + `Conversion` took
    the bundle from 446 KB to **1.0 MB**. Importing only `MP4`, `QTFF` and
    the pieces actually used, and hand-writing the WAV encoder instead of
    using the generic conversion pipeline, brought it to **782 KB**. If that
    still feels heavy, the next step is a separate lazily-loaded bundle.

- **Tests: 207 unit + 81 browser.** New: `captions.test.mjs` (23) and five
  browser tests including a genuine end-to-end — encode a clip, burn three
  caption lines in, re-parse the output MP4 and check its dimensions and
  duration survived. Eight mutations checked, eight reds.

**2026-09-27 — `tasksh-v39`**

- **Added: a TOOLS tab, and the first tool — a pomodoro.** Work → short
  break ×N → long break, every length editable, all four clamped
  (`POMO_LIMITS`) so a mistyped `250` can't mint four hours of coins.
  - **It rings with the screen off.** Android suspends JS timers and the
    audio context the moment the app is backgrounded, so an in-app beep is
    the nice case, not the reliable one. Starting a block posts its end time
    to the worker (`POST /timer`), and the cron that already runs every
    minute for routines fires a real push. Resolution is therefore one
    minute — stated in the UI rather than hidden, because a focus timer that
    lies about when it rang is worse than one that admits it rounds. Pausing
    withdraws the pending push.
  - **Time is absolute, never counted down.** The session stores `endsAt`,
    not a remaining number, so sleeping the phone can't desynchronise it.
  - **A finished focus block pays coins** — one a minute, capped at 60, so a
    long block can't out-earn a hard daily quest. Breaks pay nothing.
  - A screen wake lock is held while a block runs, which is what makes the
    in-app ring land on the right second instead of whenever you look again.

- **Fixed: an abandoned block paid out.** Catch-up ("what happened while the
  app was closed") started life as a mount effect, and React ran the
  per-tick completion effect in the same pass with the *pre*-catch-up
  session still in scope. So a block that ended five hours ago took the
  stale path AND the normal path: it rang and paid. Now `resolveBootPomodoro`
  resolves everything *before* the first render commits, and it is pure, so
  the six cases are unit-tested. Anything more than two hours overdue is
  treated as abandoned — the phone was in a pocket, not on a desk.

- **Added: inventory items can be edited.** Tap the label to rename or
  change difficulty in place. Delete already existed (`✕` → `sure?`) but was
  invisible enough to be reported missing, so every row now says
  `tap to edit`. Changing the difficulty of an item that's in today's draw
  now refills that slot from the rest of that difficulty, instead of leaving
  it sitting in the old slot paying the old slot's coins.

- **Fixed: the seventh tab hid two tabs.** Adding TOOLS pushed both it and
  the pet tab off screen — measured at 100px of overflow on a 390px viewport
  and 130px at 360px. Since `.tabs` scrolls, there was no visual clue: a
  brand-new feature was simply invisible. Tab padding went 14px → 7px and
  tracking 0.04em → 0.02em, which brings overflow to **0px at 360px**, and
  `changeTab` now scrolls the active tab into view for the cases that still
  overflow (a long pet name). A test asserts zero overflow at 360px, so an
  eighth tab fails before it ships.

- **Fixed: v38's cloud backup said "too soon" when it meant "already
  saved".** The first automatic push fires ~2s after you turn it on, so
  tapping *back up now* immediately hit the worker's 5-minute flood guard
  and painted a red 429. It now reads `already saved 2m ago · next in 3m`,
  and turning it on says `first backup running in the background…` instead
  of doing it silently.

- **Tests: 184 unit + 76 browser.** New: `pomodoro.test.mjs` (26),
  `worker/timer.test.mjs` (16), `tools.spec.mjs` (15). Eleven mutations
  checked, eleven reds — including one that only the browser test caught
  (neutering the boot resolver lets an abandoned block pay out again).

**2026-09-27 — `tasksh-v38`**

- **Fixed: the app could not update itself, so updating meant destroying the
  data.** `index.html` registered the service worker and did nothing else —
  no `reg.update()`, no `updatefound` handler, and the one `controllerchange`
  listener in `app.jsx` only refreshed the version badge. A new worker would
  install and activate (`sw.js` calls `skipWaiting`), but the *page* carried
  on executing the `bundle.js` already in memory. An installed PWA resumed
  from the launcher is often not a fresh navigation, so it could sit on old
  code indefinitely. The visible symptom was "I deployed and nothing
  changed", and the folk remedy for that is **clear site data** — which also
  wipes `localStorage`, i.e. every task, habit, routine and XP point. Data
  was being destroyed to fix a cache.
  - The app now checks for a new worker on mount, on every return to the
    foreground, and every 30 minutes.
  - When a new build takes over: **reload immediately if the app is hidden
    and nothing is being typed, otherwise show a tap-to-reload bar.**
    `decideUpdateAction(hidden, typing)` is a pure function with three tests,
    because "reload the page out from under someone mid-sentence" is the
    failure mode that makes people distrust auto-updates.
  - New **VAULT → APP-UPDATE** row: `check now`, and `reload app code`, which
    unregisters the worker and deletes every cache **without touching
    `localStorage`**. That is the "clear site data" people reach for, minus
    the part that loses the data. It arms before it fires.
  - `index.html` now stashes the registration on `window.__swReg`.
    `getRegistration()` races the load listener on a cold start and resolves
    `undefined`, which made an update check a silent no-op exactly when it
    mattered.

- **Added: encrypted cloud backup (VAULT → CLOUD-BACKUP).** A snapshot is
  pushed to the worker on app open, at most once an hour, and restored
  anywhere with a 31-character recovery code.
  - **The server cannot read it.** AES-GCM-256 via WebCrypto (no new
    dependency), key derived with PBKDF2-SHA256 at 200k rounds from a code
    that never leaves the device. The worker stores an opaque string under
    `bk:{id}` and has no way to decrypt it.
  - **Why encrypted at all, for a single-user app:** the only thing guarding
    the URL is a 10-character id, and ids leak — `deviceId` was printed in
    the app itself for the old widget feed. Anything printed once is public
    forever, so the id is treated as public and the payload is treated as
    the secret.
  - The recovery code uses **Crockford base32** (no `i`, `l`, `o`, `u`) and
    parsing normalises the classic misreads `i/l → 1` and `o → 0`, because
    this code gets read off one screen and typed into another phone.
  - **The snapshot never contains its own decryption key**, and never the
    `deviceId` — a restored phone must not clone the push subscription. The
    cloud config also joined `SENSITIVE_KEYS`, so a plaintext *file* export
    can't hand over the key to the encrypted *cloud* copy.
  - Server-side: 10-char id regex, 2MB cap, a 5-minute flood guard, and
    rotation of the previous snapshot to `bk:{id}:prev` so a bad push cannot
    eat the only good one.
  - **Verified end to end** (`cloud.spec.mjs`): turn it on in a real browser,
    push, throw the whole profile away, restore from the code on a blank
    one — habits, notes and the API key all come back, and the uploaded blob
    is asserted to contain none of `tasksh`, `habits`, `drink water` or the
    key itself.

- **Removed: the KWGT widget feed** (`GET /next`, the VAULT → WIDGET-FEED
  row, `KWGT-WIDGET.md`). The endpoint still worked — it was returning live
  data the day it was deleted — but the widget itself had stopped working on
  the phone and wasn't wanted. Dead surface area with a public device id in
  it is worse than no feature.

- **Fixed: `release.sh` could only ever add files.**
  - `worker/*.test.mjs` is now globbed instead of listed by name. Listing is
    how `worker/next.test.mjs` sat in three release zips without ever
    reaching the repo.
  - `*.svg` is globbed too. v37 shipped `notification-badge.svg` in the zip
    and it never landed — the only file needed to redraw the badge existed
    nowhere but a downloads folder.
  - A payload can now list retired paths in `remove.txt`.
  - The script updates itself, by **rename rather than overwrite**: bash
    reads a running script by byte offset, so truncating it mid-run makes
    execution resume in the middle of a different line.

- **Tests: 141 unit + 59 browser.** New: `cloud.test.mjs` (30),
  `worker/backup.test.mjs` (15), `cloud.spec.mjs` (6). Every one was
  verified by reverting its fix and confirming it goes red — ten mutations,
  ten reds, including one that only the recovery-code parser caught
  (restoring `i`/`l`/`o` to the alphabet breaks round-tripping).

**2026-08-16 … 2026-09-27 — `v31` through `v37`, in brief**

These shipped without prose entries; recorded here so the gap isn't silent.

- **`v31`** — Gemini's new `AQ.` key format (the old `AIza` keys retire in
  September 2026); notes moved into the vault; double-tap a timeline block to
  complete it.
- **`v32`** — `GET /next` widget feed; `/sync` no longer gated on
  `notifyEnabled`, which had left the feed frozen for anyone with
  notifications off; `duration` added to the sync payload.
- **`v33`** — `VAPID_CONTACT` was still `mailto:youremail@example.com`, and
  the key rotation before it hadn't bumped the cache tag, so phones kept
  serving a bundle with the old public key and every push 403'd.
- **`v34`** — the export named eight `localStorage` keys by hand and silently
  dropped the other fifteen; it now sweeps every `tasksh.*` key. Opt-in
  "export with API keys" added.
- **`v35`** — good and bad habits merged into one list with ✓/✗ marks,
  separate reward and penalty values, opposite-pairing.
- **`v36`** — routine colour gradient by hue (RGB interpolation went grey at
  the midpoint); quest reorder as a *mode*, because inline arrows pushed
  delete off the edge at 360px; delete confirmation; a harder level curve
  with a correction loop after finding that standing exactly on a level
  boundary read one level low; daily quests drawn per difficulty, paying
  coins only.
- **`v37`** — the notification badge was `icon-192.png`, which is 100%
  opaque; Android discards a badge's colours and fills its *alpha* channel,
  so the silhouette was the entire square and the status bar showed a white
  block. Replaced with an 8.6%-opaque `>_` glyph. Notification title became
  the routine name instead of "tasks.sh".

**2026-08-02 — `tasksh-v29`**

- **Added: four more free providers.** The pool now routes **Cerebras**
  (`csk-…`), **NVIDIA NIM** (`nvapi-…`), **GitHub Models** (`ghp_…`,
  `github_pat_…`) and **Mistral**, on top of v28's Gemini/Groq/OpenRouter.
  All four speak OpenAI `chat/completions`, so no new request shape was
  needed — each is one row in `PROVIDERS` (worker) and `KEY_PROVIDERS`
  (client).
  - **Cerebras is the one that matters:** 1M tokens/day free, no card. That
    is far more headroom than everything else here combined.
  - **Mistral keys have no prefix** — they're bare 32-char alphanumerics,
    indistinguishable from noise. Rather than guess (and mis-route someone's
    key to OpenAI, which fails looking exactly like a bad key), they're
    accepted only as `mistral:YOUR_KEY`. The gate says so when it doesn't
    recognise what you pasted.
  - **Per-provider token caps.** Cerebras' free tier caps context at ~8K and
    GitHub Models at 4K output; asking for v28's 1200 tokens 400s outright.
    Each provider can now declare `maxTokens`, and the provider's cap always
    wins over the caller's preference.
  - **Per-provider model fallback.** If a model 404s or has been
    decommissioned, the next model for that provider is tried. A 401/429 does
    *not* trigger this — that's a key problem, so it bails immediately and
    lets the pool rotate keys instead of burning the model list.
  - **NVIDIA opts out of JSON mode.** NIM accepts `response_format` on paper
    but rejects it per-model. Any provider can set `jsonMode: false`; the
    prompt still demands JSON and the parser already tolerated prose.
    Separately, a JSON-mode 400 now retries the *same* model bare rather than
    dropping to a weaker one.
  - **Quota cooldown is no longer Google-shaped.** v28 parked every
    rate-limited key until midnight *US Pacific* — correct for Gemini, wrong
    for everyone else, who reset at midnight UTC. A Groq key was being held
    offline for up to 8 hours after its quota had already come back.
    `resets: "utc" | "pacific"` per provider fixes it.
  - The gate lists each provider's actual free allowance, and names the
    provider live as you type so a mis-pasted key is obvious before you
    submit. GitHub tokens get the `models`-scope warning at paste time —
    without that scope a PAT 401s with no explanation.
  - New warning when **every** key in the pool is the same provider: one
    outage takes the assistant down. (The 2+ Gemini warning is separate and
    stronger — those keys share one quota and add literally nothing.)
  - Adding a **second** key now keeps the gate open. Building a pool meant
    reopening the screen once per key.

- **Fixed: a brand-new user was congratulated for a level they never earned.**
  The starter data ships with 100 XP of logged history, which is exactly
  level 2, and the level-up check treated "no `seenLevel` recorded" as
  "started at level 1" — so first launch opened with a full-screen **LEVEL
  UP** celebration, over the tab bar, before the user had done anything.
  Importing a backup did the same. Found while writing browser tests for the
  key gate: the reward overlay was intercepting the clicks.
  - First run (and any save with no `seenLevel`) now records where you
    actually are and stays quiet. Only levels crossed *while using the app*
    are a moment.
  - Verified both directions: a fresh profile shows no overlay, and a genuine
    crossing still fires once and never again after dismissal.

- **Verified:** 98 tests. 28 provider-routing (prefix order, explicit
  `mistral:` tag, client/worker table agreement, reset clocks), 20 request
  shape against a stubbed fetch (token caps, JSON retry, model fallback,
  401/429 bail-out), 22 client detection and key masking, 28 browser tests
  driving the real gate (all 7 providers detected live, first key closes /
  second key keeps open, pool warnings, key removal, first-run and genuine
  level-up). No uncaught page errors.
- Bumped service worker cache to `tasksh-v29`.

**2026-08-02 — `tasksh-v28`**

- **Added: multi-provider AI keys.** The pool now accepts **Groq**,
  **OpenRouter** and OpenAI-compatible keys alongside Gemini. The provider is
  detected from the key prefix (`AIza…` / `gsk_…` / `sk-or-…` / `sk-…`), so
  you just paste a key and it routes itself.
  - **This is the fix that actually adds capacity.** Several Gemini keys from
    one Google account share a single *project* quota and give you nothing;
    a Groq key is a genuinely separate pool. Groq's free tier is also large
    (~1K requests/day on llama-3.3-70b) and needs no card.
  - Two request shapes are supported: Gemini's own protocol, and the
    OpenAI `chat/completions` format that Groq/OpenRouter/OpenAI all speak.
    `contents[]` is translated to `messages[]` (with `model` → `assistant`)
    so the same conversation history works everywhere.
  - Failover is provider-agnostic: `withKeyPool()` doesn't know or care which
    provider it just tried, so a Gemini key hitting its daily cap falls
    through to a Groq key automatically.
  - Model discovery is now **lazy** — a Groq-only user never pays for a
    Gemini `ListModels` call.
  - `/ai-verify` validates any provider: Gemini via ListModels (free), the
    others via a 5-token real call.
  - The key list labels each entry with its provider, and the
    shared-quota warning now appears **only** when you actually have 2+
    Gemini keys, instead of always.
- **Verified:** 17 unit tests on provider detection and request translation
  (prefix ordering, endpoint, bearer auth, role mapping, JSON mode, 429 and
  network errors), browser tests for a mixed Groq+Gemini pool, plus the full
  regression — all 6 tabs, links, tags, XP, export, offline boot and 60fps at
  every size.
- Bumped service worker cache to `tasksh-v28`.

**2026-08-02 — `tasksh-v27`**

- **Fixed: claiming a reward could push your XP negative and demote you.**
  Reported from a live screenshot showing **−35 XP at level 1** with 155
  earned and 40 lost. `computeTotalXP` subtracted reward spending from the
  same number that drives your level, so spending 150 XP on rewards you had
  legitimately earned knocked you from level 2 back to level 1 — and the
  donut showed "earned 155 / lost 40" while silently hiding the 150 spent.
  - Split into two values: **level XP** (lifetime, `earned − lost`, floored
    at 0, never touched by spending) and **spendable balance**
    (`earned − lost − spent`) which is what rewards are paid from.
  - The donut now shows a Spent segment and a "level progress" row, so the
    numbers add up on screen.
  - Balance floors at 0 for pre-v27 saves that were already overspent.
  - Bad habits still reduce level XP — that is the point of them.

- **Added: multiple API keys.** Store up to 10; the worker tries them in
  order and skips any that are rate-limited, so one key hitting its daily
  cap no longer takes the assistant offline.
  - Exhausted keys are **remembered**, not re-probed on every request —
    repeatedly retrying dead keys is a known way to make a large pool
    *slower* than a single key. Cooldown is quota-aware: a per-minute limit
    clears in 90s, a daily one parks until Google's midnight-Pacific reset.
  - An invalid key is skipped, not cooled. A genuine server error stops
    immediately rather than burning the whole pool.
  - **The UI states the real caveat:** Gemini enforces quota per Google
    *project*, not per key, so several keys from the same account share one
    pool and add nothing. Extra capacity needs keys from different accounts.
  - Migrates the old single-key value automatically and keeps it in sync, so
    a phone on a cached pre-v27 bundle still works.

- **Verified:** 8 unit tests on pool failover (fallthrough, cooldown, skip-
  on-next-request, invalid keys, all-exhausted, server errors, all-cooling
  fallback, reset window), the exact XP scenario from the screenshot, claim
  behaviour at sufficient and insufficient balance, plus the full regression
  — all 6 tabs, links, tags, companion, export, offline boot, reduced motion
  and **60fps at phone, laptop and desktop sizes**.
- Bumped service worker cache to `tasksh-v27`.

**2026-08-02 — `tasksh-v26`**

- **Fixed: AI error 400.** Gemini rejects a conversation history that starts
  with a `model` turn or repeats a role on consecutive turns — and both
  happen in normal use here: the pet speaks first when no key is set, and
  applying a diff appends a second pet line right after its reply. Reproduced
  all five failing shapes, then normalised the history (drop leading model
  turns, merge same-role runs, ensure it ends on a model turn). Upstream
  errors now surface Google's actual reason instead of a bare status code.

- **Changed: calm mode → ambient background toggle.** Switches between the
  drifting gradients and the original flat black. Persists across reloads.

- **Added: links.** Any routine, quest habit or vault card can be linked to
  any other, in any combination — a "planting" routine, quest and vault card
  are one real act tracked three ways, so ticking one now ticks them all.
  - Links are stored once, **undirected**, so propagation works both ways
    without the user thinking about direction.
  - **Single-hop by design.** A→B→C does not cascade; one tap can't ripple
    through an entire graph and become impossible to undo. Link A→C
    explicitly if you want that.
  - Unticking propagates too, so a mistaken tap is fully reversible.
  - Link button on routine rows, quest cards and vault cards.

- **Added: quest filtering and tag control.**
  - Filter habits by life area (all / Work / Fitness / Health / Self-Dev).
  - Radar switches between the 4 broad areas and the finer tags.
  - **Tags are now editable** — rename, add and remove, grouped by area.
    Renaming keeps the underlying key, so habits never lose their tag.
    An area can't be emptied of tags (habits there would have nothing to
    resolve to). Reset-to-defaults included.

- **Fixed: two pre-existing bugs found during testing.**
  - The Today tab's routine toggle played the *error* sound and drained the
    pet as if a bad habit had been logged — a v23 edit had landed the
    `badHabit` emit on the wrong function. Completing a routine there also
    never propagated.
  - As a result, logging an actual bad habit had **no** effect on the pet
    since v23. Both restored and covered by tests.

- **Fixed: frame-rate regression, diagnosed by measurement.** Ambience-inside-
  the-panel had dropped large screens to 13–29fps. Isolated each layer rather
  than guessing:
  - **34 star elements each animating `opacity`** = 34 repaints per frame.
    Now one animation on the container with static per-star opacity.
    *(43 animating elements → 10.)*
  - An animated `::after` on the blob layer: a pseudo-element can't get its
    own compositor layer, so animating one repaints its parent every frame.
    Folded into the parent's background. *(+17fps)*
  - `scale: 3` is a separate property from `transform`, so a promoted layer
    was rasterising at the *scaled* size, discarding the downscale saving.
    Folded into `transform`.
  - Above 900px the stack collapses to a single layer; above 1240px the
    drift is dropped entirely (a ~2% drift across a 1320px panel can't be
    seen, but compositing it every frame can be felt).
  - **Result: 1920px 16→52fps, 1366px 29→60fps, phone 60fps. 60fps while
    scrolling at every size.**

- **Verified:** 16 unit tests on link logic (undirected, single-hop,
  idempotent, untick, prune), browser tests for propagation in every
  direction, tag rename/add/delete with the last-tag guard, the ambience
  toggle, plus the full regression — all 6 tabs, companion, export, offline
  boot and reduced motion.
- Bumped service worker cache to `tasksh-v26`.

**2026-08-01 — `tasksh-v25`**  ·  *one companion*

- **Merged the `pet` and `ai` tabs into one.** They were two chat boxes
  talking to the same model: the thing with a face couldn't change anything,
  and the thing that could change things had no personality. Now there is
  one creature — it replies in character, and when a message implies a
  change it hands over a reviewable diff **in the same conversation**.
  - The tab is named after your pet (`pip` by default).
  - New `POST /companion` worker endpoint returns `{reply, actions}` in a
    single call instead of two round trips to two prompts.
  - **The trust boundary did not move.** Actions are still re-validated by
    `sanitiseActions()` and still applied only after you approve the diff.
  - If the model returns prose instead of JSON, the pet speaks it rather
    than erroring — a companion that goes silent on a parse failure is
    worse than one that just talks.
  - Stats collapse behind a toggle so the conversation gets the space.
  - Local greetings still come from the offline voice engine, so the pet
    is never mute without a key.
  - Removed ~390 lines of now-dead code (`PetView`, `AIView`,
    `requestPetReply`, `requestAIActions`). `/pet` and `/ai` remain on the
    worker, annotated as legacy, because a phone on a cached pre-v25
    bundle still calls them until its service worker updates.

- **Fixed: ambience was invisible inside the app.** Reported after v24 —
  the layers were `position: fixed` *behind* `.panel`, which is opaque and
  full-bleed on phones, so it covered them entirely. The layers now render
  **inside** the panel with content lifted above them, and use their own
  stronger gradient set (the originals were tuned for a full viewport where
  they overlap heavily, and washed out in a narrower panel).

- **Fixed: a serious frame-rate regression that fix introduced.** Measured
  **13fps** on a 1366px laptop. Diagnosed by isolation rather than guesswork:
  - The whole ambient stack was being rendered **twice** — fixed behind the
    panel *and* scoped inside it. On a laptop the panel covers most of the
    viewport, so the outer copy was paying full cost to composite pixels
    nobody could see. Removed. *(+17fps)*
  - `.app-root::before/::after` were v22 leftovers animating two
    full-viewport gradient surfaces behind that same opaque panel. Replaced
    with one cheap static gradient for the margin area. *(+18fps)*
  - Gradient layers now rasterise at **1/3 resolution and scale up** —
    radial gradients have no high-frequency detail so the upscale is
    invisible, but the painted area drops ~9x. *(+13fps)*
  - Dropped `mix-blend-mode` on the grain (forces a backdrop re-read every
    frame) and `contain: strict` (forced a composited layer per element,
    multiplying memory bandwidth on large panels).
  - Above 900px the grain is hidden and the wash dialled back — the
    subtlest layers are the least visible on a big screen, so shed them
    rather than drop frames for effects nobody can see.
  - **Result: 1920px 17→46fps, 1366px 13→60fps, phone 60fps.**

- Bumped service worker cache to `tasksh-v25`.

**2026-08-01 — `tasksh-v24`**  ·  *progression*

Last of the three-release arc. v22 built the atmosphere, v23 added the
companion, this closes the loop with things to earn.

- **Fixed: the ambience was invisible inside the app.** The v22 layers were
  `position: fixed` *behind* `.panel` — but `.panel` has an opaque
  background, and on phones it's full-bleed, so it covered them completely.
  You only ever saw ambience in the margins on a wide desktop window.
  - `AmbientBackground` gained a `scoped` mode rendering the same layers
    absolutely **inside** the panel, with all real content lifted to
    `z-index: 1`.
  - The blob gradients were also authored for a full viewport where they
    overlap heavily; inside a narrower panel they washed out. The scoped
    layer now uses its own stronger four-blob set driven by the theme's own
    accents, plus a counter-drifting second layer so it never reads static.
    Measured colour spread across the panel more than doubled.
- **Added: achievements.** 21 total, 7 of them hidden until earned.
  Evaluated as **pure predicates over a snapshot** of existing data rather
  than tracked incrementally, so they cannot desync and a new achievement
  added later awards retroactively. Unlocks queue into a self-dismissing
  toast.
- **Added: coins.** Earned from achievements and level-ups. Deliberately
  unspendable for now — v24 establishes the economy; a shop would need
  balancing against content that doesn't exist yet. Purely additive avoids
  designing a broken sink.
- **Added: level reward screen.** Replaces the silent level change with a
  moment: level, title, coins earned, themes unlocked, whether the pet is
  evolving, and what's next.
  - Crossing several levels at once (big XP import, long absence) reports
    **every** theme unlocked in the span — "Abyss +2 more" — rather than
    only one landing exactly on the new level.
  - Fires once per level via a `seenLevel` marker, so a level-up that
    happened while the app was closed still celebrates on next launch, and
    restoring an older backup won't replay it.
- **Added: achievement gallery** inside the themes sheet, with earned/locked
  states, coin values, and a count of hidden ones still undiscovered.
- **Added:** `tasksh.meta.v1` for one-off flags (seen level, hidden-achievement
  triggers, calm-session count) rather than a key per flag.
- **Verified:** achievements fire and pay out, the toast queues, the reward
  screen fires once and reports multi-level unlocks correctly, the gallery
  hides hidden entries, all 7 tabs render clean, export excludes achievement
  and pet data, boots offline, reduced-motion respected, 43fps with every
  system running at once.
- Bumped service worker cache to `tasksh-v24`.

**2026-08-01 — `tasksh-v23`**  ·  *the pet*

Second of three. v22 built the atmosphere; this adds the companion that lives
in it. Achievements, coins and the level-reward screen are v24.

- **Added: a pet.** New `pet` tab with a creature that grows, reacts and
  talks. Seven forms — Spark → Sprout → Drift → Ember → Cirrus → Solenn →
  Aurelis, unlocking at levels 1/3/6/10/14/17/20 against the v22 curve.
  - **One parametric SVG, not seven files.** Every form shares a body plan
    (round body, big eyes, ear/horn pair, tail, aura) and the stage dials
    each part. It stays recognisably the *same* animal as it grows, which
    is the point of an evolution line, and a new stage is a table row plus
    a few numbers. Late forms gain a neck, wings, back spines and a crown.
  - Colours come from theme variables, so the pet reskins with the app.
  - viewBox was sized from **measured** bounds of all 7 forms at their
    largest mood, after finding late-stage horns and tails were being
    clipped. Verified 0/23 renders clipped.
  - Readable down to 28px for future list/titlebar use.
- **Added: pet stats.** Happiness, energy, friendship, intelligence, plus a
  derived mood (never stored — same principle as XP). Stats decay against
  *real elapsed time*, so a pet left alone for days looks it, but gently:
  full decay takes about a week of total neglect. Friendship fades far
  slower than the rest.
- **Added: stat reactions to real behaviour.** Completing a habit, routine,
  task or vault entry, logging a bad habit, claiming a reward, entering
  calm mode and chatting all move the stats, via a small event bus so
  deeply-nested views don't have to thread callbacks. Effects live in one
  auditable table (`PET_EFFECTS`).
- **Added: hybrid voice.** Greetings, observations and reactions are
  generated **locally** from real state — streaks, completion counts, time
  of day, the pet's own energy — so the pet is never silent offline, with
  no key, or out of quota. Only open-ended chat calls Gemini, via a new
  `/pet` worker endpoint with a fixed persona that **cannot emit actions**,
  so no message can make it edit your data.
- **Added: evolution celebration.** Detected by comparing the form the
  user's level entitles them to against the last stage they actually saw,
  so a level-up while the app was closed still celebrates on next launch,
  and restoring an old backup can't replay evolutions already seen.
- **Fixed: a pre-existing state race in six toggles.** `willBeDone` was
  assigned *inside* a `setState` updater and read on the next line. React
  doesn't guarantee the updater has run by then — it happened to work when
  updates were synchronous. Found it because the pet's stats silently never
  moved. Now derived from current state before dispatching, in
  `toggleGood`, `toggleBad`, routine/vault/today toggles and `toggleTask`.
- **Verified:** stats respond correctly to each action type, evolution
  fires and does not replay, the pet renders on every theme, **60fps** with
  all pet animations running, the pet still speaks with the network fully
  blocked, and pet data stays out of backup exports.
- Bumped service worker cache to `tasksh-v23`.

**2026-07-31 — `tasksh-v22`**  ·  *atmosphere release*

First of three planned releases turning the app into a gamified companion.
This one is the foundation everything else plugs into: themes, ambience and
motion. The pet, achievements and reward screens land in v23/v24.

- **Rebalanced the XP curve.** The old curve put level 20 at 19,000 XP —
  roughly **238 perfect days**, which meant nearly all level-gated content
  would never be seen. New curve `12.5(L-1)(L+6)` reaches level 20 in
  **~103 days**. Two invariants held deliberately: level 2 still unlocks at
  exactly 100 XP, and **no level costs more than before**, so no save can
  be retroactively demoted — some players simply level up on upgrade.
  Verified the inverse is exact on every boundary from level 1 to 40.
- **Added: theme engine.** Six themes — Terminal, Moss (lv3), Dusk (lv6),
  Abyss (lv10), Ember (lv14), Aurora (lv20). Each changes background,
  panels, borders, text, accents, glow, particles and the PWA theme-color.
  - Driven by one `THEMES` table. Adding a theme is a config entry; no
    component changes.
  - **284 hardcoded hex values in the `<style>` block were converted to
    CSS custom properties.** This was the real work — without it a theme
    could only recolour a fraction of the UI. JS colour logic
    (`CATEGORY_PALETTE`, `AREAS`) deliberately keeps literals.
  - Locked themes show the required level and live progress, and are
    genuinely unselectable (verified: clicking one changes nothing).
  - A saved theme that's no longer unlocked (restored backup, older save)
    falls back to default rather than granting unearned content.
- **Added: ambient engine.** Four stacked layers — theme blobs drifting on
  96s/138s offset cycles, a time-of-day wash with a slow light ray, a
  particle field, and film grain. All CSS, no canvas and no rAF loop, so
  cost is compositor-only. Particle positions are memoised per theme so
  they don't jump on re-render.
- **Added: time-of-day ambience.** Morning / afternoon / evening / night,
  layered *over* the theme rather than replacing it, so "Ember at night"
  still looks like Ember. Night adds a star field. Re-checked every 2
  minutes, not every tick.
- **Added: calm mode.** Slows all motion (`--motion-scale`), lifts blur on
  the ambient layers, desaturates the panel and shows a breathing guide.
  Navigation stays fully functional.
- **Added: microinteractions.** Completion pulse ring and a floating +XP
  on habit completion; light-burst and screen-pulse keyframes ready for
  v23's level-up screen. All transform/opacity only.
- **Performance:** measured **60fps** both idle on the heaviest theme
  (Aurora, 16 particles + rays + grain) and while scrolling the Quest tab.
- **Accessibility:** `prefers-reduced-motion` disables particles, rays,
  the breathing guide and all one-shot effects while keeping the colours.
- Bumped service worker cache to `tasksh-v22`.

**Deliberately not done this release** (and why): glassmorphism was
requested but the app is flat terminal/Conky by design — `DESIGN.md`
explicitly forbids card shadows, and adding frosted panels would reverse
that. Confirmed with the owner: staying flat, richness comes from ambience
and motion instead.

**2026-07-31 — `tasksh-v21`**
- **Added: ambient animated background.** Two layers of oversized, very
  low-opacity colour blooms (cyan / amber / blue, all existing palette
  tokens) drifting on 96s and 138s cycles. The two cycle lengths are
  deliberately coprime-ish so they never resync into an obvious loop.
  Implemented as `::before`/`::after` on `.app-root` at `z-index: -1`, so
  it cannot affect layout, text contrast or hit-testing. Peak opacity is
  0.065 — the shift reads as ambient lighting, not animation.
  `prefers-reduced-motion` freezes the drift while keeping the gradients.
- **Changed: Life Areas radar now plots 10 sub-categories, not 4 areas.**
  Habits keep their `area` (which still drives all XP maths and the
  life-area cards) and gain an optional `sub`: Work → Deep Work / Admin /
  Learning, Fitness → Training / Movement, Health → Nutrition / Sleep /
  Mind, Self-Dev → Creative / Social. Editable via a new chip row in each
  habit's edit form; changing the area resets the sub to a valid one.
  - **No migration needed.** `subForHabit()` falls back to the area's
    first sub for untagged habits, so existing data populates the chart
    immediately and nothing has to be re-tagged.
  - Radar label anchoring is now angle-aware (`start`/`middle`/`end`)
    and the viewBox is padded horizontally, because centre-anchoring 10
    labels clipped the left and right ones. Verified 0 clipped labels at
    390px and 1366px.
  - The AI assistant understands `sub` too, and the worker validates that
    a supplied sub actually belongs to the chosen area.
- **Removed from Routines:** the stats row (`N/M today`, `🔥 best
  streak`, completion ring), the 7-day completion bar chart, and the
  per-row 7-day dot strips. `WeekChart` and `WeekDots` are deleted along
  with their CSS.
- **Fixed: the timeline was unreadable on mobile.** Measured on a packed
  14-routine day at 390px: the 24h span was compressed into ~312px, so
  **13 of 14 blocks rendered 3–20px wide and only 1 could fit a label**.
  It technically fit the viewport, which is why it never looked like an
  overflow bug — it was a legibility one.
  - The track now has a floor of 82px per hour (~1970px for a full day)
    and lives in a horizontal scroller, so blocks are wide enough to
    label. **11 of 14 now show labels, up from 1.**
  - Auto-scrolls to centre "now" on first paint, with a `now` button to
    return after browsing. Only scrolls once, so it never fights the user.
  - **Sticky labels:** a block starting left of the visible window keeps
    its label pinned at the edge, so the in-progress routine is never an
    anonymous coloured bar.
  - `overscroll-behavior-x: contain` stops a sideways swipe triggering
    browser back-navigation.
  - Redesigned the card: header with a done count, a thin completion bar,
    hour ticks that switch from 3-hourly to hourly when zoomed, an
    outlined "current" block, and a pulsing now-marker.
- **Verified:** nothing outside the scroll container exceeds the
  viewport, the page itself never scrolls horizontally, the scroller is
  clipped to the card, every *visible* block is labelled, jump-to-now
  works, all 6 tabs render clean, reduced-motion is respected, and the
  app still boots fully offline.
- Bumped service worker cache to `tasksh-v21`.

**2026-07-31 — `tasksh-v20`**
- **Fixed: AI responses were slow.** Root cause was Gemini's *thinking*
  mode, which is on by default for 2.5+ models — the model reasons
  internally before emitting a token, adding seconds of dead wait. This
  task is structured JSON extraction, not reasoning, so that work was
  pure latency.
  - Thinking is now disabled per request. The knob differs by
    generation and sending the wrong one is a hard 400, so
    `thinkingConfigFor()` maps it: 2.5 → `thinkingBudget: 0`,
    3.x → `thinkingLevel: "minimal"`, unknown non-flash → omitted
    entirely. Never both keys in one payload.
  - If a model rejects the config anyway, the request is retried once
    without it rather than failing.
- **Trimmed the system prompt ~33%** (504 → 340 tokens). It's re-sent on
  every request, so this cuts both latency and token spend with no
  change in behaviour.
- **Lowered `maxOutputTokens`** 2048 → 1600. The action list is capped at
  25 anyway, so the extra headroom only ever bought slower worst-case
  responses.
- **Added a live elapsed timer** to the thinking state ("thinking… 2.4s"),
  with a "taking longer than usual" note past 12s. A silent wait reads
  as broken; a counting one reads as progress.
- **Added server-side timing logs** — `wrangler tail` now prints the
  model used, wall-clock ms, and input/output/thinking token counts per
  request, so future latency questions can be answered with data.
- **Verified:** 14 tests on thinking-config selection across model
  generations (including the never-both-keys invariant), browser test of
  the live timer, plus full regression and offline boot.
- Bumped service worker cache to `tasksh-v20`.

**2026-07-31 — `tasksh-v19`**
- **Fixed: every AI request returned 404.** The worker had
  `gemini-2.5-flash-lite` hardcoded, and Google retired that ID. This was
  always going to happen — Google runs a rolling retirement schedule
  (2.0-flash died June 2026, 2.5-flash is slated for October) so *any*
  hardcoded model ID has an expiry date.
  - **Fix: the model is now discovered, not assumed.** The worker calls
    `ListModels` with your key, filters to ones supporting
    `generateContent`, and picks the best by preference order
    (`gemini-flash-lite-latest` → `flash-latest` → `3.5-flash` →
    `3-flash` → the 2.5 pair). If none match it falls back to any
    non-preview flash model, so an unrecognised future generation still
    works untouched.
  - Result cached in KV for 24h, keyed on the last 8 chars of the API
    key, so this costs one extra call per key per day.
  - A 404 mid-flight busts the cache, re-resolves once and retries, so a
    model retired *between* requests self-heals rather than erroring.
- **Fixed: verifying a key burned generation quota.** `/ai-verify` used
  to send a real prompt, so every paste — including retries after a typo
  — ate a request from the daily allowance. It now uses `ListModels`,
  which is free metadata, and additionally reports which model was
  selected.
- **Added: a 3-second cooldown between AI requests.** Repeatedly tapping
  ask on a failing request is the fastest way to exhaust a free-tier day.
  Rapid taps now show a countdown instead of firing. Verified: 5 rapid
  clicks produce 0 requests.
- **Improved: quota errors read like English.** A 429 now says "Daily AI
  limit reached. It resets at 12:30 PM IST" (Google's quota resets at
  midnight Pacific) rather than a raw status code, and no longer risks
  being mistaken for a key problem.
- **Added: `GET /ai-models?key=…`** — lists exactly what a key can call
  and which model was chosen. For diagnosing this class of failure with
  evidence instead of guesswork.
- **Verified:** 9 model-resolution tests covering the current retirement,
  older keys, unrecognised future models, cache behaviour, and invalid
  keys; plus browser tests for the quota message and spam guard.
- Bumped service worker cache to `tasksh-v19`.

**2026-07-31 — `tasksh-v18`**
- **Changed: the AI key is now entered in the app, not deployed as a
  worker secret.** Opening the `ai` tab with no key saved shows a short
  setup screen (link to Google AI Studio, three steps, one input). The
  key is verified against Google via a new `POST /ai-verify` endpoint
  *before* being saved, so a typo is caught immediately instead of
  surfacing as a confusing failure on the first real request.
  - Stored per-device in `localStorage` (`tasksh.aikey.v1`) and sent
    with each `/ai` call.
  - **Deliberately excluded from export/import.** Backups get shared and
    copied between devices; a credential doesn't belong in one.
  - **Never persisted server-side.** The worker forwards the key to
    Google and forgets it — `/ai` still touches no KV.
  - If Google later rejects the key (revoked, deleted, edited), the
    worker returns a distinct `bad_key` code, the app clears the stored
    key and returns to the setup screen with the reason shown, rather
    than repeatedly failing.
  - A `key` button in the tab header allows changing it later.
  - `GEMINI_API_KEY` as a worker secret still works as a **fallback** —
    a client-supplied key takes priority, so one deployed worker can
    serve several people each on their own free quota.
- **Verified:** 18 browser tests covering the whole key lifecycle —
  gate blocks the composer until a key exists, invalid keys are rejected
  and not saved, valid keys unlock and persist across reload, the key is
  forwarded to `/ai`, and a mid-session revocation cleanly bounces back
  to the setup screen with storage cleared. No JS errors.
- Bumped service worker cache to `tasksh-v18`.

**2026-07-31 — `tasksh-v17`**
- **Added: AI assistant (new `ai` tab).** Natural-language control over
  routines, vault habits, quest habits and rewards, plus read-only
  analysis ("what am I neglecting?").
  - **Architecture:** the app posts a trimmed snapshot of its own data
    plus the user's request to a new `POST /ai` endpoint on the existing
    notification worker. The worker calls Gemini `2.5-flash-lite` asking
    for a JSON **action list** — never prose the client has to parse
    loosely — then re-validates every action against a strict schema
    before returning it.
  - **Nothing is applied automatically.** The app renders the actions as
    a colour-coded diff (`+` add / `~` edit / `−` remove) with resolved
    entity names, e.g. `Anime / wind down: 9:30 PM → 10:00 PM`. Any row
    can be tapped to skip it, and nothing touches `localStorage` until
    Apply is pressed. This is deliberate: an LLM with direct write access
    would eventually destroy a long streak by misreading a request.
  - **The model is treated as untrusted input.** `sanitiseActions()` in
    the worker drops anything malformed — bad `HH:MM`, out-of-range
    durations or weekly goals, unknown ops, and critically any
    edit/delete referencing an id that isn't in the snapshot, so the
    model cannot invent ids and mutate arbitrary records. Labels are
    length-capped and the batch is capped at 25 actions.
  - **`applyAIActions()` preserves history.** Edits spread over the
    existing object rather than replacing it, so streak history,
    completion records and icons survive. Verified with an explicit
    regression test — a 3-day streak is byte-identical after a time edit.
    Untouched surfaces are never written, so unrelated `localStorage`
    keys can't be clobbered.
  - **Privacy:** streak history arrays are reduced to counts before
    leaving the device. Tasks and projects are never sent. The worker
    stores nothing — `/ai` does not touch KV.
  - **Cost:** free. Gemini Flash-Lite's free tier is ~1,000 requests/day
    against realistic usage of a handful. Until `GEMINI_API_KEY` is set
    as a worker secret, the tab shows a clear "not configured" message
    rather than failing obscurely.
- **Fixed: notifications delayed by Android Doze.** Pushes were sent at
  the `web-push` default priority, so Android batched them into
  maintenance windows with the screen off — reminders arrived minutes
  late or not at all until the phone was woken. Now sent with
  `{ urgency: "high", TTL: 300 }`; the TTL means a stale reminder is
  dropped rather than delivered long after it was useful. Worker-side
  only — no bundle change was needed for this part.
- **Verified:** 19 worker-validator unit tests, 15 apply-logic tests
  (including history preservation and id-collision safety), end-to-end
  apply + reload persistence, all 6 tabs rendering with no console
  errors, scroll regions intact, offline boot, and all four AI error
  paths (unconfigured / rate-limited / network failure / question with
  no actions) degrading gracefully.
- Bumped service worker cache to `tasksh-v17`.

**2026-07-29 — `tasksh-v15`**
- **Fixed: push arrived, but Chrome showed its generic fallback banner
  instead of the routine.** Symptom was a notification reading *"Tap to
  copy the URL for this app / Share / Open in Chrome browser"*, with no
  sound and no routine text — filed under the tasks.sh app, not Chrome,
  which is what identified it. That banner is Chrome's **mandatory
  anti-abuse fallback**: when a `push` event fires but
  `showNotification()` doesn't complete successfully, the browser is
  required to display *something* so sites can't silently receive push
  data invisibly. Root cause: the notification icon was referenced as a
  relative path (`./icon-192.png`), which fails to resolve when the
  service worker executes in the background with no open page to resolve
  against. Fixed by resolving it absolutely against the SW's own scope:
  `new URL("icon-192.png", self.registration.scope).href`, used for both
  `icon` and `badge`.
- Bumped service worker cache to `tasksh-v15`.

**2026-07-28/29 — worker debugging (no app version change)**
- **Fixed: worker read `env.VAPID_PUBLIC_KEY`, which was never set.**
  Only the private half had been set via `wrangler secret put`; the
  public half was referenced but undefined, so `setVapidDetails()` threw
  on every run. Since the public key isn't sensitive (it ships inside
  `app.jsx` in plain sight), it now lives in `wrangler.toml` under
  `[vars]` rather than as a secret.
- **Added per-step logging to the worker cron.** Previously every tick
  logged an indistinguishable `"* * * * *" - Ok` whether it matched a
  routine or not, which made remote debugging impossible. It now logs
  the IST time it computed, how many devices are subscribed, each
  device's synced routine times, which routines matched, and the
  send result — so `wrangler tail` tells a story instead of a status.
- **Diagnosed: no subscription had ever reached the worker.**
  `wrangler kv key list` returned `[]` across every earlier attempt. It
  started working after a clean uninstall/reinstall of the PWA;
  `wrangler tail` then showed `POST /subscribe - Ok` followed by
  `POST /sync - Ok`. Root cause never fully confirmed — most likely a
  stale cached bundle still pointing at the placeholder worker URL.
- **Diagnosed: a "failed" test that wasn't.** A test routine set for
  4:40 PM never fired because the subscription only completed at
  4:42:33. The cron only fires during the exact minute a routine starts,
  so there was nothing subscribed when 4:40 passed. Documented in
  AGENTS.md as a testing trap.
- **Fixed: notifications arriving very late once they worked.** Android
  **Doze** batches background network activity into periodic maintenance
  windows when the screen is off, and the `web-push` library sends at
  normal priority by default, so the OS felt free to defer delivery.
  Fix is to mark the push urgent.

  > ⚠️ **This fix is not yet committed to this repo.**
  > `worker/src/index.js` still calls `webpush.sendNotification(subscription, payload)`
  > with no options object. Until it reads
  > `{ urgency: "high", TTL: 300 }`, Doze delays persist. Worker-side
  > only — no rebuild, no cache bump, no phone reinstall required.

**2026-07-27 — `tasksh-v14`**
- **Added: real push notifications.** Notifications now appear outside
  the app, in the Android notification shade, with sound and vibration,
  when a routine starts — surviving the app being fully closed. This
  closes the "No real push notifications" known issue that had been open
  since the project started.
  - **App side:** a bell toggle in the titlebar requests permission,
    calls `pushManager.subscribe()` with the VAPID public key, POSTs the
    subscription to the worker, and syncs the device's routine times.
    Failures surface as a toast, never a crash — the button is safe to
    ship before the backend exists.
  - **Service worker:** `push` and `notificationclick` handlers. Click
    focuses an already-open window if there is one, otherwise opens a
    new one. `silent` is deliberately not set, so the OS supplies its
    default sound and vibration.
  - **Backend:** a new `worker/` directory — a Cloudflare Worker with
    `POST /subscribe`, `POST /unsubscribe`, `POST /sync`, and
    `GET /run-check-now` for manual testing, plus a **cron trigger
    running every minute** that checks whether any synced routine's
    `HH:MM` matches the current minute in IST. KV layout is
    `sub:{deviceId}`, `routines:{deviceId}`, and
    `fired:{deviceId}:{routineId}:{date}` as a dedupe marker with a
    2-day TTL so storage can't grow unbounded. Dead subscriptions are
    pruned automatically on a 404/410 from the push service.
  - Entirely within Cloudflare's free tier: ~1,440 cron invocations/day
    against a 100k/day limit.
  - **Deploys separately** from GitHub Pages — a Pages deploy does not
    update the worker, and vice versa.
- **Known limitation:** the worker only understands "starts at HH:MM
  daily." No weekday-only routines, no snooze, no skip-if-already-done.
- **Not verifiable at build time:** actual end-to-end delivery required a
  real Cloudflare account and a real Android device. The permission
  flow, failure handling and worker logic were verified; delivery was
  not. This is what the multi-day debugging session that followed was.


**2026-07-24 — `tasksh-v13`**
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
  see the Routines feature list in HANDOFF.md and how to re-add it if wanted.
- **Added optional routine alternatives** — see the Routines feature list in HANDOFF.md.
- Bumped service worker cache to `tasksh-v13`.

**2026-07-23 — `tasksh-v12`**
- **Fixed: app looked like a phone simulator on laptops/desktops** — a
  narrow 640px card centered in an otherwise-empty page, no matter how
  wide the window was. See the "Desktop layout" section in HANDOFF.md for
  what changed (widened panel, capped line-length for list views,
  multi-column grids for card views, hover states, breakpoints at 900px
  / 1240px). Phones are unaffected — verified pixel-identical at 390px.
- Bumped service worker cache to `tasksh-v12`.

**2026-07-23 — `tasksh-v11` (routines scroll fix + redesign)**
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

**2026-07-22 — `tasksh-v10` (scroll regression)**
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

**2026-07-22 — `tasksh-v9` (tab bar / 100dvh)**
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

**2026-07-22 — `tasksh-v8`**
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

**2026-07-21 — `tasksh-v7`**
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

**2026-07-20 — `tasksh-v6`**
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
  the fix (see the deploy section in README.md).

<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  CHANGELOG.md · what broke · why · how it was verified      │
╰─────────────────────────────────────────────────────────────╯
```

</div>
