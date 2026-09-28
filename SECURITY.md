```
   ███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗
   ██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝
   ███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝
   ╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝
   ███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║
   ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝

   ╭──────────────────────────────────────────────────────╮
   │  threat model & secret handling for tasks.sh         │
   ╰──────────────────────────────────────────────────────╯
```

This is a **single-user personal app** with no accounts, no server-side user
data, and no authentication. The threat model is correspondingly small — but
it isn't empty, and the push backend introduces the one real secret in the
project.

---

## Captions · what leaves the device  *(v40)*

| | |
|---|---|
| Sent | ~1.9 MB of 16 kHz mono WAV, per clip |
| Sent to | `api.groq.com` directly — not through the worker |
| Auth | your own Groq key, from the local pool, in an `Authorization` header |
| Never sent | the video itself. Decoding, caption rendering and encoding all happen on the device |

The audio of the clip reaches Groq, and Groq's retention policy applies to
it — that is the trade for free word-level timings. Nothing is stored by
this project: the worker is not in the path at all.

---

## Cloud backup · what the server can and cannot see  *(v38)*

The app pushes an encrypted snapshot of `localStorage` to the worker once an
hour. Design in one line: **the id is public, the payload is the secret.**

| | |
|---|---|
| Address | `bk:{id}` — 10 chars of Crockford base32, sent in the URL |
| Cipher | AES-GCM-256, 96-bit random IV per push |
| Key | PBKDF2-SHA256, 200,000 rounds, 128-bit random salt per push |
| Secret | 16 chars (80 bits) of the recovery code — **never transmitted** |
| Server sees | `{ at, size, blob }` and nothing else |

Why encrypt a single-user app's data at all: the id is the only thing between
a stranger and the blob, and ids leak. `deviceId` was printed inside the app
itself for the widget feed until v38. Anything displayed once should be
assumed public, so the URL is assumed guessable and the contents are assumed
readable by whoever holds them — which is why they are ciphertext.

Consequences, stated plainly because they are not recoverable:

- **Lose the recovery code and the backup is gone.** There is no reset, no
  email, no support. That is the same property that makes it safe to store.
- The snapshot **does** contain your API keys — deliberate, so a restore is
  one step — which is exactly why it is never stored in the clear.
- The snapshot **never** contains the recovery code itself or the
  `deviceId`. A backup holding its own key would not be encrypted in any
  meaningful sense, and a cloned `deviceId` would give two phones one push
  subscription.
- A plaintext file export (the titlebar button) excludes the cloud config for
  the same reason: that file gets shared, and it must not carry the key to
  the cloud copy.

Not defended against: someone who already has your unlocked phone. The
recovery code sits in `localStorage` next to the data it protects, which is
the only place it can live if backups are to run unattended.

---

## ⚠ Action required · VAPID private key in git history

The VAPID **private** key was committed to this repository in
`worker/README.md` as part of commit **`c06ab4c`** ("Release v14"). It has
since been removed from the working tree, but **it remains readable in git
history and on GitHub** — anyone can recover it with:

```bash
git show c06ab4c:worker/README.md
```

**What an attacker could do with it:** sign Web Push messages that your
service worker would accept as genuine, i.e. send fake notifications to any
device subscribed to your worker. They could not read your data — all app
state is local to the device and never leaves it.

**Severity for this project:** low in practice (nobody is targeting a personal
to-do app, and the blast radius is spoofed notifications) — but it is a real
leaked credential and should be rotated rather than ignored.

### Rotating the pair

```bash
# 1. generate a fresh keypair
cd worker
npx web-push generate-vapid-keys

# 2. set the new PRIVATE half as a secret (never a file)
npx wrangler secret put VAPID_PRIVATE_KEY

# 3. put the new PUBLIC half in BOTH places — they must match
#    worker/wrangler.toml   [vars] VAPID_PUBLIC_KEY = "..."
#    app.jsx                const VAPID_PUBLIC_KEY = "..."

# 4. redeploy both sides
npx wrangler deploy
cd .. && npm run build      # then bump sw.js cache tag, commit, push
```

> [!IMPORTANT]
> Rotating **invalidates every existing subscription.** Every device must tap
> the bell off and on again to re-subscribe. Expect notifications to stop
> until you do that.

Purging the key from history entirely (`git filter-repo`, or a fresh repo)
is optional — once rotated, the old key is worthless. Rotation is the fix;
history rewriting is cosmetic.

---

## Secret handling rules

```
  ┌────────────────────┬──────────────┬──────────────────────────┐
  │ Value              │ Sensitive?   │ Where it belongs         │
  ├────────────────────┼──────────────┼──────────────────────────┤
  │ VAPID public key   │ no           │ app.jsx + wrangler.toml  │
  │ VAPID private key  │ YES          │ wrangler secret ONLY     │
  │ KV namespace id    │ no           │ wrangler.toml            │
  │ Worker URL         │ no           │ app.jsx                  │
  │ deviceId           │ no (random)  │ localStorage             │
  └────────────────────┴──────────────┴──────────────────────────┘
```

- The private key must **never** appear in a file, a README, a commit, a
  screenshot, or a chat transcript. `npx wrangler secret put` is the only
  correct home for it — Cloudflare stores it encrypted and it is never
  readable back out.
- If you paste it anywhere by accident, treat it as burned and rotate.

---

## Known accepted risks

These are deliberate trade-offs for a personal app. Revisit every one of them
if this ever becomes multi-user.

**`1` · No authentication on the worker.**
`/subscribe`, `/unsubscribe` and `/sync` accept any request. Anyone who knew
a valid `deviceId` could overwrite that device's routine schedule or delete
its subscription. `deviceId` is a random local identifier, not a credential.

**`2` · CORS is wide open (`Access-Control-Allow-Origin: *`).**
Any origin can call the worker. Tighten to the Pages origin if it matters:

```js
"Access-Control-Allow-Origin": "https://chandansharamcs.github.io",
```

**`3` · No rate limiting.**
The free tier's 100k requests/day is the only ceiling. A trivial script could
exhaust it and take notifications down for the day.

**`4` · Routine labels are sent to Cloudflare.**
`/sync` uploads routine names and times so the worker knows what to notify
about. That is the *only* data that ever leaves the device — tasks, habits,
projects, XP and history never do. If a routine name is sensitive, it is
stored in Cloudflare KV in plaintext.

**`5` · No Content Security Policy.**
`index.html` ships without a CSP header. Low risk given there is no
user-generated HTML rendering and no third-party scripts, but it's free
defense-in-depth if you ever add one.

---

## What is *not* a risk

- **Your data.** Everything lives in `localStorage` on your own device. There
  is no database, no sync, no telemetry, no analytics, no third-party scripts.
- **The bundled app.** React and ReactDOM are compiled into `bundle.js` at
  build time. Nothing is fetched from a CDN at runtime, so there is no
  supply-chain surface at load. The only external request is a Google Fonts
  stylesheet, which is CSS-only and has system fallbacks.
- **Losing the worker.** If Cloudflare goes away entirely, you lose push
  notifications. The app keeps working, offline, unchanged.

---

## Reporting

Personal project — open an issue at
<https://github.com/Chandansharamcs/To-do_app/issues>. For anything involving
a live credential, contact the owner directly rather than filing publicly.


<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  SECURITY.md · rotate the key, then stop worrying about it  │
╰─────────────────────────────────────────────────────────────╯
```

</div>
