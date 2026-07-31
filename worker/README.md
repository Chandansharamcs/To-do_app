```
   ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗███████╗██████╗
   ██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝██╔══██╗
   ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ █████╗  ██████╔╝
   ██║███╗██║██║   ██║██╔══██╗██╔═██╗ ██╔══╝  ██╔══██╗
   ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗███████╗██║  ██║
    ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

   ╭──────────────────────────────────────────────────────╮
   │  tasks.sh push notification backend                  │
   │  Cloudflare Worker · KV · Cron  ·  free tier         │
   ╰──────────────────────────────────────────────────────╯
```

A small Cloudflare Worker that sends **real** push notifications — outside the
app, in the Android notification shade, with sound and vibration — when one of
your routines starts. It works with the app fully closed.

Setup is a **one-time** job on your laptop. After that it runs by itself.

```
  ┌─────────────────────────────────────────────────────────────┐
  │  STATUS                                                     │
  │  deployed   https://tasksh-notify.techcraftor.workers.dev   │
  │  kv id      dfcdeba05c884f529c6d4b579630eba0                │
  │  cron       * * * * *   (every minute, IST-aware)           │
  └─────────────────────────────────────────────────────────────┘
```

---

## How it works

```
   PHONE                          CLOUDFLARE                  GOOGLE
   ─────                          ──────────                  ──────
   tap 🔔
     │
     ├─ Notification.requestPermission()
     ├─ pushManager.subscribe(VAPID_PUBLIC_KEY)
     │
     ├──── POST /subscribe ────▶  KV: sub:{deviceId}
     └──── POST /sync ─────────▶  KV: routines:{deviceId}
                                        │
                                  ┌─────▼──────┐
                                  │ cron, 1/min│
                                  │ runCheck() │
                                  └─────┬──────┘
                                        │ IST HH:MM matches a routine?
                                        │ already fired today? (dedupe)
                                        │
                                        └── webpush.send() ──▶ FCM ──┐
                                                                     │
   sw.js "push" ◀────────────────────────────────────────────────────┘
     └─ showNotification()  →  🔔 "Study is starting now"
```

**KV layout**

```
  sub:{deviceId}                              JSON PushSubscription
  routines:{deviceId}                         [{ id, time: "HH:MM", label }]
  fired:{deviceId}:{routineId}:{YYYY-MM-DD}   "1"  · TTL 2 days · dedupe
```

**Endpoints**

| Method | Path | Purpose |
|---|---|---|
| `POST` | `/subscribe` | Store a push subscription for a device |
| `POST` | `/unsubscribe` | Delete the subscription and its routine data |
| `POST` | `/sync` | Store/replace this device's routine schedule |
| `GET` | `/run-check-now` | Run the cron logic immediately, for testing |

IST is computed as UTC + 5h30m. No DST, so the offset is safely hardcoded.

---

## Setup · 0 · Prerequisites

- A free Cloudflare account — <https://dash.cloudflare.com/sign-up>
  (email + password, no card required)
- Node.js on your laptop (you already have it, for `npm run build`)


## Setup · 1 · Install wrangler & log in

```bash
cd worker
npm install
npx wrangler login
```

Opens a browser tab to authorize the CLI. Approve it, and it returns to the
terminal automatically.

> If it offers to add config for an editor integration (opencode, etc.), say
> `n` — unrelated to this project.


## Setup · 2 · Create the KV namespace

```bash
npx wrangler kv namespace create TASKSH_KV
```

Prints something like:

```
[[kv_namespaces]]
binding = "TASKSH_KV"
id = "abcd1234..."
```

Copy the `id` into `wrangler.toml`, replacing whatever's there. **Leave
`binding = "TASKSH_KV"` exactly as-is** — the worker code refers to it by that
name.

> A timeout here is usually a transient Cloudflare API blip. Just run it again.


## Setup · 3 · The VAPID keys

The keypair authenticates your worker to push services (Google's FCM, etc.).

**Public half** — not sensitive, ships in the app bundle. It lives in two
places and they must match:

```
  app.jsx        const VAPID_PUBLIC_KEY = "BO0VGBlyG--zbIASY0_..."
  wrangler.toml  [vars] VAPID_PUBLIC_KEY = "BO0VGBlyG--zbIASY0_..."
```

**Private half** — set as an encrypted secret. Never in a file, never in git:

```bash
npx wrangler secret put VAPID_PRIVATE_KEY
```

Paste the private key when prompted.

> [!WARNING]
> The two halves are a **matched pair**. A mismatch fails silently — pushes
> are accepted and never delivered. If you regenerate, regenerate both and
> update all three locations together.

If wrangler asks to create the worker (because it doesn't exist yet), say `y`.


## Setup · 4 · Deploy

```bash
npx wrangler deploy
```

First time only, it asks you to pick a `workers.dev` subdomain. It must be
**all lowercase** — capitals are rejected. This is account-wide, not
per-project.

It prints your URL:

```
https://tasksh-notify.<subdomain>.workers.dev
```

`wrangler deploy` is safe to re-run any time — it re-uploads the current code
and config, it does not create duplicates.


## Setup · 5 · Point the app at it

In `app.jsx`, find:

```js
const NOTIFY_WORKER_URL = "https://tasksh-notify.YOUR-SUBDOMAIN.workers.dev";
```

Replace it with the URL from step 4 — **no trailing slash**. Then rebuild,
bump the `sw.js` cache tag, and push.

> [!CAUTION]
> **Verify the edit actually happened before committing.** A `sed` that
> matches nothing exits successfully and changes nothing — this silently cost
> a full debugging session once:
> ```bash
> grep -o "NOTIFY_WORKER_URL = .*" app.jsx   # must show YOUR url
> git status                                  # must list app.jsx as modified
> ```


## Setup · 6 · Turn it on

1. Open the app **from its home-screen icon**, not a browser tab. Android
   requires the installed (WebAPK) version for push. This is not optional.
2. Tap the bell in the titlebar.
3. Grant the permission prompt. You should see a toast confirming it's on.

---

## Setup · 7 · The AI assistant

**No worker setup needed.** The app asks for the key itself.

Open the **`ai`** tab and it shows a short setup screen: get a free key at
<https://aistudio.google.com/apikey>, paste it in, done. The key is verified
against Google immediately, saved to that device's `localStorage`, and sent
with each request. You can change it later via the **key** button in the tab
header.

Nothing to deploy, nothing to configure — as long as the worker itself is
running, the `ai` tab works.

### Where the key lives

- **On your device only** (`tasksh.aikey.v1` in `localStorage`).
- **Never in backups.** Export/import deliberately covers only the seven data
  arrays — a key is a credential, not data, and backup files get shared around.
- **Never stored server-side.** The worker forwards it to Google and forgets
  it. `/ai` touches no KV.
- If Google rejects it (revoked, deleted, mistyped), the app clears it and
  returns to the setup screen with an explanation rather than failing quietly.

### Optional: a server-side fallback key

If you'd rather not enter a key per device, set one as a secret and it'll be
used whenever the client doesn't send its own:

```bash
npx wrangler secret put GEMINI_API_KEY
npx wrangler deploy
```

A client-supplied key always takes priority, so a shared worker can serve
several people each using their own quota.

### Model and cost

`gemini-2.5-flash-lite`. Free tier is roughly 1,000 requests/day and 15/minute
— far beyond single-user use. Flash-Lite was chosen because Pro models left
the free tier in April 2026, and because this job is structured-JSON
extraction, which Flash does reliably.

### What is sent to Google

A trimmed snapshot: routine/habit/quest **labels, times and counts**. Streak
history arrays are reduced to a single number before leaving the device.
Tasks and projects are never sent.

### Safety model

The model returns *proposed actions*, never direct writes. The worker
re-validates every action against a strict schema and drops anything
malformed or referencing an id that doesn't exist. The app then shows a diff
and applies nothing until you tap Apply.

### Endpoints

| Method | Path | Purpose |
|---|---|---|
| `POST` | `/ai` | `{prompt, data, apiKey}` → `{reply, actions}` |
| `POST` | `/ai-verify` | `{apiKey}` → `{ok}` — used by the setup screen |

## Testing

Fire a check immediately instead of waiting:

```
https://tasksh-notify.<subdomain>.workers.dev/run-check-now
```

`{"ok":true,"ran":true}` means *the check ran cleanly* — **not** that anything
was sent. It sends only if a subscription exists **and** a routine's `time`
equals the current IST minute.

> [!IMPORTANT]
> **Subscribe first, then schedule the test.** The worker only fires during
> the exact minute a routine starts. If you set a routine for 4:40 and finish
> subscribing at 4:42, nothing happens — and it looks like a failure. Set the
> test routine 2–3 minutes into the future *after* the bell is on.

Watch what the worker actually does:

```bash
npx wrangler tail
```

The worker logs each step: the IST time it computed, how many devices are
subscribed, each device's synced routine times, what matched, and the send
result.

---

## Troubleshooting · in order

Work top to bottom. Each step produces evidence that rules out everything
above it — don't skip ahead and guess.

### 1 · Is the live site even pointed at the worker?

```bash
curl -s https://chandansharamcs.github.io/To-do_app/bundle.js \
  | grep -o "tasksh-notify[^\"]*"
```

Wrong URL or no output → the app is misconfigured; nothing else matters yet.
(Pages can take a couple of minutes to rebuild after a push.)

### 2 · Did a subscription ever reach the worker?

```bash
npx wrangler kv key list --binding=TASKSH_KV
```

`[]` → **no device has ever successfully subscribed.** The break is on the
phone side: permission, `pushManager.subscribe()`, or the POST never landing.
Run `wrangler tail`, tap the bell, and see whether `/subscribe` appears at all.
Also read the toast text word-for-word — it carries the actual error.

You want to see:

```
sub:dev_xxxxxxx
routines:dev_xxxxxxx
```

### 3 · Is the phone running a stale build?

The service worker is cache-first, so your phone can keep running the old
bundle indefinitely after a correct deploy.

```
  ⚠  EXPORT YOUR DATA FIRST — clearing site data wipes localStorage,
     which is where every routine, task and habit lives.

  1. app titlebar → export (⬇), confirm the file downloaded
  2. remove the app from the home screen
  3. Chrome → ⋮ → Site settings → the site → Clear & reset
  4. revisit, re-add to home screen
  5. open it, import (⬆) your backup
  6. tap the bell again
```

### 4 · What does the worker say?

```bash
npx wrangler tail
```

- `found 0 subscribed device(s)` → back to step 2.
- `routine(s) synced -> ["16:40"]` but no match at `IST now = 17:12` → the
  routine simply isn't due, or there's a time-format mismatch.
- **`SENT push for "..."` with no error** → the worker's job is **done**. It
  successfully handed off to Google. Anything still wrong is now on the phone
  — go to step 5.

### 5 · Android is eating it

If the worker logs `SENT` and nothing appears, it's the OS. On Samsung/One UI
this is extremely common:

```
  Settings → Apps → tasks.sh  (it's its own app, not under Chrome)
      └─ Battery → Unrestricted        (not Optimized, not Restricted)
      └─ Notifications → allowed

  Settings → Apps → Chrome
      └─ Battery → Unrestricted

  Settings → Battery and device care → Background usage limits
      └─ Sleeping apps        → remove tasks.sh and Chrome
      └─ Deep sleeping apps   → remove tasks.sh and Chrome

  Check Do Not Disturb isn't silencing them.
```

### 6 · A generic "tap to copy the URL for this app" notification

This is **not** an unrelated Chrome nudge. It's Chrome's mandatory anti-abuse
fallback: a push arrived, but `showNotification()` didn't complete, so the
browser is required to display *something*. The push chain is working; your
`sw.js` handler is throwing. Historically this was the notification icon being
a relative path that couldn't resolve in the background — fixed in v15 by
resolving against `self.registration.scope`.

### 7 · It works, but arrives minutes late

**Android Doze.** With the screen off, Android batches background network
activity into periodic maintenance windows. `web-push` sends at normal
priority by default, so the OS is free to defer it.

```js
await webpush.sendNotification(subscription, payload, {
  urgency: "high",   // ask the push service to bypass batching
  TTL: 300,          // drop it rather than deliver a stale reminder
});
```

> [!NOTE]
> **This fix is not currently in `src/index.js`.** It's the last known
> outstanding item. Worker-side only — deploy with `npx wrangler deploy`, no
> app rebuild, no cache bump, no phone reinstall.

### 8 · It worked for a while, then stopped

Android can revoke a push subscription after long inactivity or if app storage
is cleared. Toggle the bell off and back on to re-subscribe.

---

## Why this is free

| Resource | Free tier | tasks.sh uses |
|---|---|---|
| Workers requests | 100,000/day | ~1,440/day (1/min) + subscribe/sync |
| Cron Triggers | included | 1 |
| KV reads | 100,000/day | a few per cron tick |
| KV writes | 1,000/day | only on subscribe/sync/dedupe, not per tick |
| KV storage | 1 GB | a few KB |

Single-user usage isn't remotely close to any ceiling. Worth knowing the
limits exist if this ever grows beyond a handful of devices.

---

## Security

- `VAPID_PRIVATE_KEY` lives **only** as a Cloudflare secret. If it ever lands
  in a file or a commit, rotate the pair immediately.
- CORS is `*`. Acceptable for a single-user personal app; tighten it to your
  Pages origin if that changes.
- There is no auth. `deviceId` is a random local identifier, not a credential
  — anyone who knew one could push to that device.


<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  worker/README.md · deploys separately from GitHub Pages    │
╰─────────────────────────────────────────────────────────────╯
```

</div>
