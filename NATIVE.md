# tasks.sh as an Android app

The website and the app are **one codebase**. `app.jsx` is shared; what differs
is a 24 KB bridge that only exists inside the APK.

```
index.html + bundle.js            →  GitHub Pages   (the PWA, unchanged)
index.html + bundle.js + bridge.js →  app-web/ → Capacitor → tasksh.apk
```

---

## What the app does that the PWA structurally cannot

| | PWA | app |
|---|---|---|
| 03:00 night check fires by itself | ✗ settles on next open | ✓ exact alarm, `allowWhileIdle` |
| routine reminder at 06:30 | ✗ web push needs a server, iOS needs an install | ✓ local notification, offline |
| storage survives "clear site data" | ✗ best-effort | ✓ JSON snapshot in app Documents |
| share a paragraph into `sight` | ✗ | ✓ share sheet |
| settle on resume instead of a 30 s poll | ✗ | ✓ `appStateChange` |
| works offline from install | ✓ (after first visit) | ✓ (assets inside the APK) |
| updates without a store | ✓ instant | ✗ rebuild + sideload |

The alarm is the reason this exists. Everything else is a bonus.

---

## One-time setup (do this once, keep the key forever)

The signing key is what lets a new build **update** the old one. Lose it and every
future build has to be uninstalled and reinstalled — in this app that means
restoring from the cloud backup, which costs a backup code.

The key was generated for you at **`/home/user/keys/tasksh-release.keystore`**
and its base64 at **`/home/user/keys/keystore.b64`**.

1. **Move both files somewhere you will still have them in five years** (a
   password manager attachment, or an encrypted drive). They are not in the repo
   and must never be.
2. Add four repository secrets — GitHub → repo → Settings → Secrets and
   variables → Actions → *New repository secret*:

   | name | value |
   |---|---|
   | `KEYSTORE_BASE64` | the whole contents of `keystore.b64` (one long line) |
   | `KEYSTORE_PASSWORD` | `tasksh-release-2026` |
   | `KEY_ALIAS` | `tasksh` |
   | `KEY_PASSWORD` | `tasksh-release-2026` |

   Change the passwords if you like, but change them in the keystore *and* the
   secrets, or the release build will fail at signing.
3. Fingerprint of this key, for the record:
   `5F:99:67:F7:38:B8:F0:21:DB:34:32:46:05:B4:86:B5:49:B9:64:B0:B5:14:4B:5B:79:D5:DF:59:F8:5D:92:AA`

---

## Building

**In CI (chosen path).** Actions → **android** → *Run workflow*. Two artifacts:

| artifact | use |
|---|---|
| `tasksh-release` | **this one.** Signed with your key, installs over the previous build |
| `tasksh-debug` | smoke test only; a new debug build will not update the previous one |

Download the artifact zip, unzip, copy `app-release.apk` to the phone, tap it,
allow "install unknown apps" for the file manager. Done.

**Locally**, if you ever install Android Studio or the SDK:

```bash
npm ci
npm run app:sync      # build → stage app-web/ → cap sync android
npm run app:debug     # ./gradlew assembleDebug   → android/app/build/outputs/apk/debug/
```

A tag `app-v1.0` also triggers the workflow, so releases can be archived.

---

## Switching from the PWA (do it in this order, or you lose history)

The app runs on a different origin — `https://localhost` instead of
`chandansharamcs.github.io` — so on first launch its storage is **empty**. That
is expected, not a bug.

1. In the PWA: **Settings → cloud backup → turn on**, note the recovery code.
   (Or export the JSON.)
2. Install the APK, open it once.
3. **Settings → cloud backup → restore** with that code.
4. Only after you can see your quests and streaks: stop using the PWA as the
   daily driver. Two apps writing two buckets is how a month disappears.

If the cloud link fails, the app has a second net: the bridge keeps a JSON
snapshot in the app's Documents folder on every settle (`tasksh-snapshot.json`).
`window.taskshNative.restoreSnapshot()` in a WebView console will read it back.

---

## What lives where

| path | what |
|---|---|
| `native/bridge.src.mjs` | the native powers (notifications, files, share, resume) |
| `scripts/build-app.mjs` | stages `app-web/` — the exact files that go inside the APK |
| `capacitor.config.json` | appId `sh.tasks.app`, `webDir: app-web` |
| `android/` | the real Android project — manifest, permissions, icons, gradle |
| `.github/workflows/android.yml` | the build |
| `native.test.mjs` | 16 tests that the two channels stay separate |

`app-web/` and all gradle output are gitignored; the project itself is committed.

---

## Deliberately not done

- **Play Store.** It needs a closed-testing track, a privacy form and a review
  cycle. For one user, a signed APK is strictly better.
- **iOS.** Needs a Mac, Xcode and $99/yr. The PWA stays the iOS option; the
  bridge does nothing there, by design.
- **TWA/Bubblewrap.** Ten minutes to build, but it is still a web page in a
  Chrome frame — it cannot fire the 03:00 alarm, which is the whole point.
