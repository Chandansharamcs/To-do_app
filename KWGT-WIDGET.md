# `~/next` — KWGT home screen widget

No Play Store, no APK, no signing keys. KWGT free tier only.

---

## How it works

The widget **cannot** read the app's data directly. Chrome sandboxes
`localStorage` per origin and no Android app can reach into it — that's a
platform rule, not something to code around.

So the widget never talks to the app. Both talk to the worker:

```
tasks.sh  ──POST /sync──►  Cloudflare KV  ◄──GET /next──  KWGT
```

The schedule was already being pushed there for notifications. v32 adds the
read side and syncs `duration` too, so the widget can tell whether a routine is
running *now* and how far through it you are.

**Only `{id, time, label, duration}` leaves the device.** No XP, no habits, no
tasks, no notes.

---

## Step 1 — get your feed URL

In the app: **VAULT** tab → scroll to **WIDGET-FEED** → **copy url**.

Looks like:

```
https://tasksh-notify.techcraftor.workers.dev/next?id=dev_xxxxxxxx
```

Check it in a browser first. You should see JSON, something like:

```json
{
  "ok": true,
  "time": "07:30",
  "label": "School",
  "sub": "in 30m · 6h 30m block",
  "pct": 83,
  "state": "next",
  "mins": 30
}
```

If you get `{"error":"not found"}`, the worker hasn't been deployed yet.

---

## Step 2 — build the widget

KWGT → new widget → **4x2**.

Set the background: **Layer → Background → Color → `#0B0D10`**, corner radius 6.
Add a 1px border in `#1E2228` if your KWGT version supports it.

Now add five items. For each, tap the value field and switch it to **formula
mode** (the `fx` button) before pasting.

### Item 1 — header text

```
~/next
```

Font: any monospace. Size 11. Colour `#5EEAD4`. Position top-left.

### Item 2 — the time (big)

```
$wg("PASTE_YOUR_URL_HERE&t=" + df(hhmm), json, .time)$
```

Size 34. Colour `#5EEAD4`. Monospace.

### Item 3 — the label

```
$wg("PASTE_YOUR_URL_HERE&t=" + df(hhmm), json, .label)$
```

Size 20. Colour `#E5E7EB`. Place to the right of the time.

### Item 4 — the sub line

```
$wg("PASTE_YOUR_URL_HERE&t=" + df(hhmm), json, .sub)$
```

Size 11. Colour `#9CA3AF`. Below the time.

### Item 5 — progress bar

Add a **Progress** item. Shape: bar. Then set **Level** to a formula:

```
$wg("PASTE_YOUR_URL_HERE&t=" + df(hhmm), json, .pct)$
```

Colour `#5EEAD4`, background `#1E2228`, thickness 4, width ~55%.

---

## ⚠ The `&t=` + `df(hhmm)` part matters

Do not drop it. KWGT caches `wg()` aggressively — it will fetch once and then
show the same value for hours, which for a "next routine" widget is worse than
useless.

Appending `&t=` plus the current time makes the URL text change every minute,
which forces a refetch. The worker ignores the parameter entirely.

If once a minute drains too much battery, use `df(DH)` instead of `df(hhmm)` —
that refreshes hourly. Somewhere between the two:

| Formula | Refresh |
|---|---|
| `df(hhmm)` | every minute |
| `df("HHmm")` | every minute |
| `df(DH)` | every hour |

---

## Step 3 — tap to open the app

Select the whole widget → **Touch → Tap → Open App → tasks.sh**.

---

## Troubleshooting

**Widget shows nothing / blank**
Open the URL in your phone's browser. No JSON = worker not deployed, or wrong
device id.

**Shows a value but never changes**
The `&t=` cache-buster is missing or was pasted as plain text instead of a
formula. Check the `fx` toggle is on.

**Shows `--:--` and "no routines"**
KV has no schedule for this device. Open the app, edit any routine, and it
re-syncs immediately.

**Wrong device**
Every install generates its own id. If you cleared site data, you got a new one
— re-copy from the Vault.

---

## What is NOT verified

**No KWGT formula here has been run on a real device.** There is no Android in
the environment these were written in. They come from the Kustom docs and
community threads.

The parts that *are* verified: the endpoint's logic (11 tests against your real
routine data), the exact JSON shape, and every edge case — mid-routine, before
the first, after the last, empty, and malformed times.

Most likely place reality bites: the cache-buster. Several people report KWGT
caching `wg()` even with a changing URL. If it sticks, the fallback is a manual
refresh touch action, or Tasker.
