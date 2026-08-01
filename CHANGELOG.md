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

## Changelog

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
