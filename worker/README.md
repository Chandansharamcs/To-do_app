# tasks.sh notification worker — setup

This is a small Cloudflare Worker that sends real push notifications
(appears outside the app, in the Android notification shade, with sound +
vibration) when one of your routines starts. It's free — Cloudflare's free
plan includes Workers, KV storage, and Cron Triggers, and this app's usage
(one person, checked once a minute) is nowhere near any of the free limits.

You do this setup **once**, on your laptop, with internet access. After
that, it runs by itself — you never touch it again unless you want to
change something.

## 0. Prerequisites

- A free Cloudflare account: https://dash.cloudflare.com/sign-up
- Node.js installed on your laptop (you already have this, for `npm run build`)

## 1. Install Wrangler (Cloudflare's CLI) and log in

```bash
cd worker
npm install
npx wrangler login
```

This opens a browser tab to authorize the CLI against your Cloudflare
account. Approve it.

## 2. Create the KV namespace (this is the database)

```bash
npx wrangler kv namespace create TASKSH_KV
```

This prints something like:

```
[[kv_namespaces]]
binding = "TASKSH_KV"
id = "abcd1234..."
```

Copy that `id` value into `wrangler.toml` in this folder, replacing
`PASTE_YOUR_KV_NAMESPACE_ID_HERE`.

## 3. Set the VAPID keys as secrets

These are the keypair that authenticates your worker to push services
(Google's FCM, etc.). The **public** half is already baked into
`src/app.jsx` (the `VAPID_PUBLIC_KEY` constant) — don't change that unless
you regenerate both keys together, since they're a matched pair.

Set the private half as a secret (never goes in a file, never goes in git):

```bash
npx wrangler secret put VAPID_PRIVATE_KEY
```

When it prompts for the value, paste exactly this:

```
li9IUl7aiukzrAD4N00txdOK-EkhmxbwfZKhl8EAcUI
```

(This matches the public key already in `app.jsx`. If you ever want fresh
keys instead of the ones I generated, ask me to generate a new pair and
I'll update both sides together — a mismatched pair just fails silently.)

## 4. Deploy

```bash
npx wrangler deploy
```

This prints your worker's URL, something like:

```
https://tasksh-notify.yoursubdomain.workers.dev
```

## 5. Point the app at it

Open `src/app.jsx`, find this line near the top:

```js
const NOTIFY_WORKER_URL = "https://tasksh-notify.YOUR-SUBDOMAIN.workers.dev";
```

Replace it with the URL wrangler printed in step 4. Then rebuild and deploy
the app as usual (`npm run build`, bump `sw.js`'s cache tag, push to GitHub).

## 6. Turn notifications on in the app

Open the app **installed to your home screen** (not just a browser tab —
Android's push notifications for PWAs require the "installed" version).
Tap the bell icon in the titlebar. Grant the permission prompt. Done —
you should get a real notification the next time a routine's start time
comes around.

## Testing without waiting

To fire a check immediately instead of waiting for the next minute, visit:

```
https://tasksh-notify.yoursubdomain.workers.dev/run-check-now
```

in any browser. If a routine's `time` matches the current minute in IST,
you'll get a notification within a few seconds.

## Costs (why this is actually free)

| Resource | Free tier limit | What tasks.sh uses |
|---|---|---|
| Workers requests | 100,000/day | ~1,440/day (once a minute) + your subscribe/sync calls |
| Cron Triggers | included free | 1 trigger |
| KV reads | 100,000/day | a few per cron run |
| KV writes | 1,000/day | only on subscribe/sync/dedupe-marker, not every cron tick |
| KV storage | 1 GB | a few KB total |

Single-user personal usage doesn't come close to any of these. If you ever
add many more routines or friends start using their own copies, it's still
almost certainly free — just worth knowing the ceiling exists.

## Troubleshooting

- **Notification never arrives**: check `npx wrangler tail` while waiting
  for a routine's time to hit — it streams live logs from the worker so you
  can see whether the cron ran and what it decided.
- **"Worker rejected the subscription"** shown in the app: `NOTIFY_WORKER_URL`
  in `app.jsx` doesn't match your deployed URL, or CORS is blocking it
  (shouldn't happen — the worker allows all origins).
- **Notifications stop after a while**: Android can revoke a push
  subscription (e.g. after a long period of inactivity, or if you clear the
  app's storage). Just tap the bell to turn it off and back on.
