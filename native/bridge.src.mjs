// native/bridge.src.mjs — the Android-only bridge (v76)
//
// The PWA and the app run the SAME app.jsx and the same bundle.js. What differs
// is this file: it is bundled separately, shipped only inside the APK, and it
// puts `window.taskshNative` on the page. app.jsx feature-detects that object
// and nothing else -- so if this file is absent (the website), the app behaves
// exactly as it always has.
//
// What it exists for, in order of importance:
//
//   1. THE 03:00 CHECK. A browser cannot wake itself. Android can, if a local
//      notification is scheduled with allowWhileIdle. So the app schedules the
//      nightly settle for 03:01 with a silent notification whose only job is to
//      wake the app, and settles on resume.
//   2. DURABLE STORAGE. localStorage in a WebView can be cleared with app data.
//      Every snapshot is mirrored to the app's private Documents dir as JSON.
//   3. RESUMING. `appStateChange` fires before anything renders, so the settle
//      runs on the way back in instead of on a 30s poll.
//   4. SHARING IN. Text shared to tasks.sh from another app lands in `sight`.
//
// The bridge never decides anything about XP, tags or money -- it moves data
// and wakes the app. All the rules stay in app.jsx, where they are tested.

import { Capacitor, registerPlugin } from "@capacitor/core";
import { App } from "@capacitor/app";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Filesystem, Directory, Encoding } from "@capacitor/filesystem";

/** The Java plugin in android/app/src/main/java/sh/tasks/app/SharePlugin.java.
 *  It is the half of share-in that Capacitor does not provide. */
const Share = registerPlugin("Share");
/** The widget bridge (WidgetPushPlugin.java): hands the model to the widget and
 *  collects ticks pressed while the app was closed. */
const WidgetBridge = registerPlugin("WidgetBridge");

const NIGHT_ID = 7303;      // 03:0x -- one fixed id, rescheduled, never stacked
const SNAPSHOT = "tasksh-snapshot.json";

/** Reads every tasksh.* key. The snapshot is the app's own vocabulary, so the
 *  wrapper does not need to know what the app stores. */
function dumpStore() {
  const out = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("tasksh.")) out[k] = localStorage.getItem(k);
    }
  } catch { /* blocked */ }
  return out;
}

/** Mirrors the store to a file the OS will not evict with browser data. */
async function snapshot() {
  const data = dumpStore();
  const body = JSON.stringify({ at: new Date().toISOString(), keys: Object.keys(data).length, data });
  try {
    await Filesystem.writeFile({
      path: SNAPSHOT,
      data: body,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
      recursive: true,
    });
    return { ok: true, keys: Object.keys(data).length };
  } catch (e) {
    return { ok: false, error: String(e && e.message || e) };
  }
}

/** Reads the last snapshot back, for the restore path. */
async function readSnapshot() {
  try {
    const f = await Filesystem.readFile({ path: SNAPSHOT, directory: Directory.Documents, encoding: Encoding.UTF8 });
    const parsed = JSON.parse(f.data);
    return parsed && parsed.data ? parsed : null;
  } catch { return null; }
}

/** Puts that snapshot back into localStorage. Returns how many keys landed. */
async function restoreSnapshot() {
  const snap = await readSnapshot();
  if (!snap) return { ok: false, keys: 0 };
  let n = 0;
  for (const [k, v] of Object.entries(snap.data || {})) {
    if (!k.startsWith("tasksh.")) continue;
    try { localStorage.setItem(k, v); n++; } catch { /* quota */ }
  }
  return { ok: n > 0, keys: n, at: snap.at };
}

/** The nightly wake-up.
 *
 *  Not a reminder: a silent notification at 03:01 whose tap/resume path runs
 *  the settle. allowWhileIdle is what makes it survive Doze -- without it
 *  Android batches it into the next maintenance window and "every night" turns
 *  back into "whenever I open it".
 */
async function scheduleNight(hour = 3, minute = 1) {
  try {
    const perm = await LocalNotifications.checkPermissions();
    if (perm.display !== "granted") await LocalNotifications.requestPermissions();
    await LocalNotifications.cancel({ notifications: [{ id: NIGHT_ID }] });
    await LocalNotifications.schedule({
      notifications: [{
        id: NIGHT_ID,
        title: "the night check",
        body: "settling yesterday",
        silent: true,
        schedule: { on: { hour, minute }, allowWhileIdle: true, repeats: true },
        smallIcon: "ic_stat_icon",
      }],
    });
    const pending = await LocalNotifications.getPending();
    return { ok: true, pending: pending.notifications.filter((n) => n.id === NIGHT_ID).length };
  } catch (e) {
    return { ok: false, error: String(e && e.message || e) };
  }
}

/** Copies the widget model into native storage and redraws the widget. */
async function pushWidget(json) {
  try {
    const r = await WidgetBridge.pushWidget({ json: String(json || "") });
    return { ok: !!(r && r.ok) };
  } catch (e) { return { ok: false, error: String(e && e.message || e) }; }
}

/** Whatever the widget queued: a JSON array string of {id, day}. */
async function takeWidgetActions() {
  try {
    const r = await WidgetBridge.takeWidgetActions();
    return (r && r.actions) || "[]";
  } catch { return "[]"; }
}

/** Disarms the night alarm. app.jsx calls this when penalties are turned off --
 *  without it the 03:01 notification kept firing for a rule that was disabled. */
async function cancelNight() {
  try {
    await LocalNotifications.cancel({ notifications: [{ id: NIGHT_ID }] });
    const pending = await LocalNotifications.getPending();
    return { ok: true, pending: pending.notifications.filter((n) => n.id === NIGHT_ID).length };
  } catch (e) { return { ok: false, error: String(e && e.message || e) }; }
}

/** A real clock for a routine time, which the web can never offer.
 *  kind: "at" (a wall-clock time) — one notification, repeating daily. */
async function scheduleRoutine(label, time, id) {
  const [h, m] = String(time || "07:00").split(":").map((x) => parseInt(x, 10) || 0);
  try {
    await LocalNotifications.cancel({ notifications: [{ id }] });
    await LocalNotifications.schedule({
      notifications: [{
        id,
        title: label,
        body: "routine",
        schedule: { on: { hour: h, minute: m }, allowWhileIdle: true, repeats: true },
      }],
    });
    return { ok: true };
  } catch (e) { return { ok: false, error: String(e && e.message || e) }; }
}

function onResume(cb) {
  App.addListener("appStateChange", ({ isActive }) => { if (isActive) cb(); });
  return () => App.removeAllListeners();
}

/** Text shared to tasks.sh from another app, if any. Consumed once: the Java
 *  side clears the intent so a resume cannot replay the same paragraph. */
async function takeSharedText() {
  try {
    const res = await Share.getShared();
    const text = res && res.text ? String(res.text).trim() : "";
    return text ? text : null;
  } catch { return null; }
}

window.taskshNative = {
  platform: Capacitor.getPlatform(),
  isNative: Capacitor.isNativePlatform(),
  version: "1",
  snapshot, readSnapshot, restoreSnapshot,
  scheduleNight, cancelNight, scheduleRoutine,
  pushWidget, takeWidgetActions,
  onResume, takeSharedText,
};
