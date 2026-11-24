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
/** v79: updates without reinstalling (BundlePlugin.java). Reads, downloads and
 *  removes ONE file: bundle.js. Nothing else about the app changes. */
const Bundle = registerPlugin("Bundle");
/** v81: app limits (BlockPlugin.java). Permission checks, settings deep links,
 *  and the rule list -- the 15-second watch itself runs in Java. */
const Block = registerPlugin("Block");

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

/** v79: is a downloaded bundle active, and how big is it? */
async function bundleInfo() {
  try {
    const r = await Bundle.info();
    return { path: (r && r.path) || "", bytes: (r && r.bytes) || 0 };
  } catch (e) { return { path: "", bytes: 0 }; }
}

/** v79: downloads a newer bundle.js and swaps it in. Verifies the size the
 *  feed promised, then the SHA-256, before anything replaces the old file. */
async function bundleDownload(url, sha256, bytes) {
  try {
    const r = await Bundle.download({ url: String(url || ""), sha256: String(sha256 || ""), bytes: String(bytes || "") });
    return { ok: !!(r && r.ok), bytes: (r && r.bytes) || 0, error: (r && r.error) || "" };
  } catch (e) { return { ok: false, bytes: 0, error: String(e && e.message || e) }; }
}

/** v79: back to the bundle shipped inside the APK. */
async function bundleClear() {
  try {
    const r = await Bundle.clear();
    return { ok: !!(r && r.ok) };
  } catch (e) { return { ok: false, error: String(e && e.message || e) }; }
}

/** v81: are the blocker's permissions granted, and what are the rules? */
async function blockStatus() {
  try {
    const r = await Block.status();
    return {
      usage: !!(r && r.usage), overlay: !!(r && r.overlay), battery: !!(r && r.battery),
      notification: !!(r && r.notification),
      rules: (r && r.rules) || "{}", today: (r && r.today) || "",
    };
  } catch (e) {
    return { usage: false, overlay: false, battery: false, notification: false, rules: "{}", today: "", error: String(e && e.message || e) };
  }
}

/** Opens the one settings page that grants `which`. There is no in-app dialog
 *  for Usage Access or overlay, so this is the only honest route. */
async function blockOpen(which) {
  try { const r = await Block.open({ which: String(which || "") }); return { ok: !!(r && r.ok) }; }
  catch { return { ok: false }; }
}

/** Saves the limits and starts or stops the watcher. */
async function blockSave(json) {
  try {
    const r = await Block.save({ json: String(json || "{}") });
    return { ok: !!(r && r.ok), on: !!(r && r.on), usage: !!(r && r.usage) };
  } catch (e) { return { ok: false, on: false, usage: false, error: String(e && e.message || e) }; }
}

/** Minutes used today per package, so the settings screen can be honest. */
async function blockUsage() {
  try {
    const r = await Block.usage();
    let minutes = {};
    try { minutes = JSON.parse((r && r.minutes) || "{}"); } catch { minutes = {}; }
    return { day: (r && r.day) || "", minutes };
  } catch { return { day: "", minutes: {} }; }
}

/** "youtube" -> [{pkg,label}] from what is actually installed. */
async function blockResolve(q) {
  try {
    const r = await Block.resolve({ q: String(q || "") });
    let apps = [];
    try { apps = JSON.parse((r && r.apps) || "[]"); } catch { apps = []; }
    return apps;
  } catch { return []; }
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

/** v82: if this object is ever missing, the app silently believes it is in a
 *  browser -- which is exactly how "app limits" once told an app user that it
 *  only works in the app. A failed bridge must leave a trace, not a shrug. */
if (!window.taskshNative) {
  window.taskshBridgeError = "not installed";
}

window.taskshNative = {
  platform: Capacitor.getPlatform(),
  isNative: Capacitor.isNativePlatform(),
  version: "1",
  /** v82: what the shell actually has, so a missing plugin can be shown
   *  instead of guessed at. */
  plugins: ["WidgetBridge", "Bundle", "Block", "Share"],
  snapshot, readSnapshot, restoreSnapshot,
  scheduleNight, cancelNight, scheduleRoutine,
  pushWidget, takeWidgetActions,
  bundleInfo, bundleDownload, bundleClear,
  blockStatus, blockOpen, blockSave, blockUsage, blockResolve,
  onResume, takeSharedText,
};

/** v82: a one-call health check. The app shows this string verbatim when
 *  something is missing, because "it does not work" is not a bug report. */
window.taskshHealth = async () => {
  const out = { platform: "unknown", bridge: true, plugins: {}, widget: false, bundle: false, block: null };
  try {
    out.platform = Capacitor.getPlatform();
    out.bridge = !!window.taskshNative;
    try { out.widget = !!(await WidgetBridge.info()); } catch { out.widget = false; }
  } catch (e) { out.error = String((e && e.message) || e); }
  return out;
};
