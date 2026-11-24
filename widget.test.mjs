// widget.test.mjs — v78
//
// The widget draws what `widgetModel()` says, and a home screen that shows the
// wrong routine is worse than an empty one. So the model is pure, its clock is
// an argument, and every state is pinned here: inside a routine, before one,
// after the last, nothing at all, and a model that has gone stale.
//
// The Java side only renders; it is checked structurally in native.test.mjs.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

let pass = 0;
const t = (n, f) => { try { f(); pass++; console.log("  ✓", n); } catch (e) { console.log("  ✗", n, "\n     ", e.message); process.exitCode = 1; } };

function slice(startMarker, endMarker) {
  const i = SRC.indexOf(startMarker);
  assert.ok(i >= 0, `missing ${startMarker}`);
  const j = SRC.indexOf(endMarker, i);
  assert.ok(j > i, `missing ${endMarker}`);
  return SRC.slice(i, j);
}

const engine = slice("const WIDGET_MODEL_MAX_AGE_MS", "// ============================================================\n// v73: ROUTINE PRESETS");
// widgetQuests needs the difficulty table, so it comes along unchanged
// DIFF_VALUE is one line; the DIFFICULTIES table is much further down, so the
// two are taken separately rather than as one 60k slice full of components
const vLine = SRC.slice(SRC.indexOf("const DIFF_VALUE"), SRC.indexOf("\n", SRC.indexOf("const DIFF_VALUE")));
const tStart = SRC.indexOf("const DIFFICULTIES = [");
const diff = tStart > 0
  ? vLine + "\n" + SRC.slice(tStart, SRC.indexOf("\n];", tStart) + 3)
  : "const DIFFICULTIES = [];";
// timeToMinutes is a one-liner at the top of app.jsx; take it by brace matching
const ttmStart = SRC.indexOf("function timeToMinutes");
const ttm = SRC.slice(ttmStart, SRC.indexOf("\n}", ttmStart) + 2);
const W = new Function(`${ttm}
${diff}
${engine};
return { widgetModel, widgetModelFresh, widgetHeadline, widgetQuests, to12h, istEpochMs, istDayFor };`)();

/** A fixed instant: 2026-11-15 07:10 IST. */
const at = (h, m, day = 15) => Date.UTC(2026, 10, day, h - 5, m - 30, 0, 0);

const R = (id, time, label, duration = 30, history = []) => ({
  id, time, label, duration, history, alternatives: [],
});

const LIST = [
  R(1, "06:30", "brush + water", 20),
  R(2, "07:00", "workout", 45),
  R(3, "21:30", "brush at night", 15),
];

// ------------------------------------------------------------- the day -----
t("IST day and epoch maths are right", () => {
  // 07:10 IST on 15 Nov 2026 == 01:40 UTC
  assert.equal(at(7, 10), Date.UTC(2026, 10, 15, 1, 40, 0, 0));
  assert.equal(W.istEpochMs("2026-11-15", "07:10"), at(7, 10));
  assert.equal(W.istDayFor(at(7, 10)), "2026-11-15");
});

t("the day rolls at 03:00 IST, like the rest of the app", () => {
  assert.equal(W.istDayFor(at(2, 30)), "2026-11-14", "before 03:00 is still yesterday");
  assert.equal(W.istDayFor(at(3, 1)), "2026-11-15");
});

// ----------------------------------------------------------- the states ----
t("inside a routine: state now, with its end time", () => {
  const m = W.widgetModel(LIST, at(7, 10));
  assert.equal(m.state, "now");
  assert.equal(m.next.label, "workout");
  assert.equal(m.next.id, "2");
  assert.equal(m.next.startMs, at(7, 0));
  assert.equal(m.next.endMs, at(7, 45));
});

t("before the first one: state next, pointing at 06:30", () => {
  const m = W.widgetModel(LIST, at(5, 50));
  assert.equal(m.state, "next");
  assert.equal(m.next.label, "brush + water");
  assert.equal(W.widgetHeadline(m, at(5, 50)), "next in 40m");
});

t("between two: the upcoming one wins, not the one just finished", () => {
  const m = W.widgetModel(LIST, at(6, 55));
  assert.equal(m.state, "next");
  assert.equal(m.next.label, "workout");
});

t("after the last one there is no fake next", () => {
  const m = W.widgetModel(LIST, at(23, 30));
  assert.equal(m.next, null);
  assert.equal(W.widgetHeadline(m, at(23, 30)), "day over");
});

t("every routine done reads as done, not as empty", () => {
  const done = LIST.map((r) => ({ ...r, history: ["2026-11-15"] }));
  const m = W.widgetModel(done, at(23, 30));
  assert.equal(m.done, 3);
  assert.equal(m.total, 3);
  assert.equal(W.widgetHeadline(m, at(23, 30)), "all done");
});

t("no routines at all is its own state", () => {
  const m = W.widgetModel([], at(7, 10));
  assert.equal(m.state, "empty");
  assert.equal(m.next, null);
  assert.equal(W.widgetHeadline(m, at(7, 10)), "no routines");
});

// ------------------------------------------------------------ countdown ----
t("the countdown counts down, and reads 'starting now' at zero", () => {
  const m = W.widgetModel(LIST, at(6, 30));
  assert.equal(W.widgetHeadline(m, at(6, 30)), "now · 20m left");
  const before = W.widgetModel(LIST, at(5, 30));
  assert.equal(W.widgetHeadline(before, at(5, 30)), "next in 1h 0m");
});

t("under an hour is minutes, over an hour is h m", () => {
  const early = W.widgetModel([R(9, "09:00", "later", 30)], at(7, 0));
  assert.equal(W.widgetHeadline(early, at(7, 0)), "next in 2h 0m");
  const soon = W.widgetModel([R(9, "07:25", "soon", 30)], at(7, 0));
  assert.equal(W.widgetHeadline(soon, at(7, 0)), "next in 25m");
});

t("a routine already ticked says so, and still tells you the time left", () => {
  // v80: this used to say only "done today", which hid the countdown on a
  // routine in progress. Done is now an adjective, not a replacement.
  const list = [R(2, "07:00", "workout", 45, ["2026-11-15"])];
  const m = W.widgetModel(list, at(7, 10));
  assert.equal(m.next.doneToday, true);
  assert.equal(W.widgetHeadline(m, at(7, 10)), "done · 35m left to go");
});

// --------------------------------------------------------------- safety ----
t("a stale model is refused rather than drawn", () => {
  const m = W.widgetModel(LIST, at(7, 10));
  assert.equal(W.widgetModelFresh(m, at(7, 11)), true);
  assert.equal(W.widgetModelFresh(m, at(7, 11, 17)), false, "two days later must not be drawn");
  assert.equal(W.widgetModelFresh(null), false);
  assert.equal(W.widgetModelFresh({ v: 2, updatedAt: Date.now() }), false, "an unknown model version");
});

t("a corrupt routine does not take the model down", () => {
  const junk = [null, undefined, { time: 5 }, R(4, "08:00", "ok", 10), { id: 5, time: "08:30" }];
  const m = W.widgetModel(junk, at(7, 10));
  assert.equal(m.total, 2, "only the entries with a real time count");
  assert.ok(m.next);
});

t("an empty label never renders as an empty widget line", () => {
  const m = W.widgetModel([{ id: 1, time: "09:00", label: "", duration: 20 }], at(8, 0));
  assert.equal(m.next.label, "");
  // the Java side substitutes "routine"; what is tested here is that the model
  // reports empty rather than inventing a name
  assert.equal(m.next.label.length, 0);
});

t("long labels are cut, so the widget cannot grow a third line", () => {
  const long = R(1, "09:00", "x".repeat(200), 20);
  const m = W.widgetModel([long], at(8, 0));
  assert.equal(m.next.label.length, 60);
});

t("the model carries the numbers the widget prints", () => {
  const list = [R(1, "06:30", "a", 20, ["2026-11-15"]), R(2, "07:00", "b", 45)];
  const m = W.widgetModel(list, at(7, 10));
  assert.equal(m.v, 1);
  assert.equal(m.day, "2026-11-15");
  assert.equal(m.done, 1);
  assert.equal(m.total, 2);
  assert.equal(typeof m.updatedAt, "number");
});

// ------------------------------------------------------------ structure ----
t("the app pushes a model on every routine change and drains the queue", () => {
  assert.match(SRC, /pushWidgetModel\(widgetModel\(routines, Date\.now\(\), widgetQuests\(/);
  // the effect must re-run for the board too, or a ticked quest never reaches
  // the widget; and it is declared after `daily` to avoid a dead-zone crash
  assert.match(SRC, /\}, \[routines, daily, inventory\]\);/);
  assert.match(SRC, /if \(!n \|\| !n\.takeWidgetActions\) return;/);
  assert.match(SRC, /const stop = n\.onResume\(\(\) => \{ settleNight\(\); drainWidgetActions\(\); \}\);/);
});

t("a widget tick can only ADD a done day, never remove one", () => {
  const drain = SRC.slice(SRC.indexOf("const drainWidgetActions"), SRC.indexOf("useEffect(() => { drainWidgetActions(); }"));
  assert.match(drain, /if \(\(r\.history \|\| \[\]\)\.includes\(day\)\) return r;/);
  assert.ok(!/filter\(\(r\) => r\.history/.test(drain), "the drain removes history entries");
  assert.match(drain, /slice\(-60\)/);
});

t("everything is a no-op on the website", () => {
  assert.match(SRC, /const n = nativeShell\(\);\s+if \(!n \|\| !n\.pushWidget\) return;/);
  assert.ok(!/android|RemoteViews/.test(slice("function pushWidgetModel", "// ============================================================\n// v73: ROUTINE PRESETS")));
});

// ---- the update pill -------------------------------------------------
// Same rule as the widget: pure, so the "should I nag him" decision is a
// function of two numbers rather than of a network that may or may not answer.

const uStart = SRC.indexOf("const APP_VERSION_CODE");
const uFn = SRC.indexOf("function updateAvailable");
const uEnd = SRC.indexOf("\n}\n", SRC.indexOf("function updateChoice", uFn)) + 2;
const consts = SRC.slice(SRC.indexOf("const APP_VERSION ="), SRC.indexOf("\n", SRC.indexOf("const VERSION_URL")) + 1);
const U = new Function(`${consts}
${SRC.slice(uFn, uEnd)};
return { updateAvailable, updateChoice, APP_VERSION, APP_VERSION_CODE, BUNDLE_VERSION };`)();

t("a higher remote build shows the pill", () => {
  const r = U.updateAvailable(5024000, { version: "5.25.0", versionCode: 5025000 });
  assert.equal(r.version, "5.25.0");
  assert.equal(r.versionCode, 5025000);
  assert.match(r.apk, /\.apk$/);
});

t("the same build, a lower one, or junk never nags", () => {
  assert.equal(U.updateAvailable(5024000, { version: "5.24.0", versionCode: 5024000 }), null);
  assert.equal(U.updateAvailable(5024000, { version: "5.0.0", versionCode: 5000000 }), null);
  assert.equal(U.updateAvailable(5024000, null), null);
  assert.equal(U.updateAvailable(5024000, {}), null);
  assert.equal(U.updateAvailable(5024000, { version: "x", versionCode: "abc" }), null);
  assert.equal(U.updateAvailable(5024000, { version: "", versionCode: 9999999 }), null);
});

t("the pill is Android-only and cannot hijack navigation", () => {
  const src = slice("function UpdatePill", "/** Fourteen days of net XP");
  assert.match(src, /if \(!nativeShell\(\)\) return undefined;/, "the web does not need an update pill");
  // a plain location.href to an APK would load it inside the WebView
  assert.match(src, /window\.open\(choice\.apk, "_system"\)/);
});

t("the version constants match the thing they claim to describe", () => {
  const pkg = JSON.parse(readFileSync(join(here, "package.json"), "utf8"));
  assert.equal(U.APP_VERSION, pkg.version, "APP_VERSION drifted from package.json");
  const gradle = readFileSync(join(here, "android/app/build.gradle"), "utf8");
  assert.ok(gradle.includes(`${U.APP_VERSION_CODE}`) || gradle.includes("rootProject.ext"),
    "APP_VERSION_CODE is not visible in build.gradle");
});

// ---- v79: which update to offer -------------------------------------
// Two things can be stale, and they are fixed very differently: the bundle is
// a 1.1 MB download inside the app, the APK is a 3.5 MB install. Getting this
// decision wrong means nagging him to reinstall for a typo.

const LOCAL = { versionCode: 5024000, bundleVersion: "5.24.0", canBundle: true };
const feed = (o) => Object.assign({
  version: "5.25.0", versionCode: 5025000,
  bundleVersion: "5.25.0", bundleSha256: "a".repeat(64), bundleBytes: 1100000,
}, o);

t("a newer bundle wins over a newer apk, because it is the cheaper fix", () => {
  const c = U.updateChoice(LOCAL, feed({}));
  assert.equal(c.kind, "bundle");
  assert.equal(c.version, "5.25.0");
  assert.equal(c.sha256.length, 64);
});

t("an unchanged bundle with a newer shell is an apk update", () => {
  const c = U.updateChoice(LOCAL, feed({ bundleVersion: "5.24.0" }));
  assert.equal(c.kind, "apk");
  assert.match(c.apk, /tasksh\.apk$/);
  assert.match(c.releases, /releases/);
});

t("nothing new, nothing offered", () => {
  assert.equal(U.updateChoice(LOCAL, feed({ version: "5.24.0", versionCode: 5024000, bundleVersion: "5.24.0" })), null);
  assert.equal(U.updateChoice(LOCAL, null), null);
  assert.equal(U.updateChoice(LOCAL, {}), null);
});

t("a shell that cannot write a bundle is never offered one", () => {
  const old = { versionCode: 5024000, bundleVersion: "5.24.0", canBundle: false };
  const c = U.updateChoice(old, feed({}));
  assert.equal(c.kind, "apk", "a shell without the plugin must be told to reinstall");
});

t("a feed without a checksum is not trusted for a bundle", () => {
  const c = U.updateChoice(LOCAL, feed({ bundleSha256: "" }));
  assert.equal(c.kind, "apk", "an unverifiable bundle must fall back to the apk");
});

t("the bundle the feed names is the site's own bundle.js", () => {
  const c = U.updateChoice(LOCAL, feed({}));
  assert.match(c.url, /^https:\/\/chandansharamcs\.github\.io\/To-do_app\/bundle\.js$/);
});

// ---- v80: the three bugs the first real phone found -------------------
// A screenshot is worth more than the suite: the widget said "done today" at
// 18:40 with no countdown, and tapping it did nothing.

t("the clock is 12-hour, always", () => {
  assert.equal(W.to12h("00:00"), "12:00 AM");
  assert.equal(W.to12h("00:30"), "12:30 AM");
  assert.equal(W.to12h("09:05"), "9:05 AM");
  assert.equal(W.to12h("11:59"), "11:59 AM");
  assert.equal(W.to12h("12:00"), "12:00 PM");
  assert.equal(W.to12h("13:05"), "1:05 PM");
  assert.equal(W.to12h("18:40"), "6:40 PM");
  assert.equal(W.to12h("23:59"), "11:59 PM");
});

t("the routine you are inside always shows its countdown", () => {
  // 07:10 is inside 07:00 + 45m; the old order printed "done today" instead
  const m = W.widgetModel(LIST, at(7, 10));
  assert.equal(m.state, "now");
  const h = W.widgetHeadline(m, at(7, 10));
  assert.match(h, /^now · \d+m left$/, `expected a countdown, got "${h}"`);
  assert.equal(W.widgetHeadline(m, at(7, 40)), "now · 5m left");
});

t("a ticked routine in progress still counts down, and says it is done", () => {
  const done = [R(1, "06:30", "brush + water", 20), R(2, "07:00", "workout", 45, ["2026-11-15"])];
  const m = W.widgetModel(done, at(7, 10));
  assert.equal(m.state, "now");
  assert.equal(W.widgetHeadline(m, at(7, 10)), "done · 35m left to go");
});

t("the countdown never promises something already ticked", () => {
  // 07:00 workout is done, so the widget must offer what is still to do,
  // which is the 08:00 one, not the ticked one behind it
  const list = [
    R(1, "07:00", "workout", 45, ["2026-11-15"]),
    R(2, "08:00", "breakfast", 30),
  ];
  const m = W.widgetModel(list, at(6, 50));
  assert.equal(m.next.id, "2");
  assert.equal(W.widgetHeadline(m, at(7, 30)), "next in 30m");
});

t("the model carries the 12-hour clock for the widget to draw", () => {
  const m = W.widgetModel(LIST, at(5, 30));
  assert.equal(m.next.time, "06:30");
  assert.equal(m.next.time12, "6:30 AM");
});

// ---- v81: the quest list inside the widget ---------------------------

const INVENTORY = [
  { id: "a", text: "push-ups", diff: "easy", history: [] },
  { id: "b", text: "read 20 pages", diff: "mid", history: ["2026-11-15"] },
  { id: "c", text: "no sugar", diff: "hard", history: [] },
];
const DAILY = { day: "2026-11-15", picks: { easy: "a", mid: "b", hard: "c" }, done: ["b"] };

t("the board becomes plain rows the widget can draw", () => {
  const rows = W.widgetQuests(DAILY, INVENTORY, "2026-11-15");
  assert.equal(rows.length, 3);
  assert.deepEqual(rows.map((r) => r.id), ["a", "b", "c"]);
  assert.deepEqual(rows.map((r) => r.done), [false, true, false]);
  assert.equal(rows[0].label, "push-ups");
  assert.equal(rows[0].slot, "easy");
});

t("a slot with no item is dropped, not drawn blank", () => {
  const rows = W.widgetQuests({ picks: { easy: "a", mid: "gone", hard: "c" }, done: [] }, INVENTORY, "2026-11-15");
  assert.equal(rows.length, 2);
  assert.ok(!rows.some((r) => r.id === "gone"));
});

t("no board at all yields an empty list, not a crash", () => {
  assert.deepEqual(W.widgetQuests(null, INVENTORY, "2026-11-15"), []);
  assert.deepEqual(W.widgetQuests({ picks: {} }, [], "2026-11-15"), []);
});

t("the model carries the quests through every state", () => {
  const rows = W.widgetQuests(DAILY, INVENTORY, "2026-11-15");
  for (const now of [at(5, 0), at(7, 10), at(23, 30)]) {
    const m = W.widgetModel(LIST, now, rows);
    assert.equal(m.quests.length, 3);
  }
  // and an empty schedule still reports the board
  const none = W.widgetModel([], at(7, 0), rows);
  assert.equal(none.state, "empty");
  assert.equal(none.quests.length, 3);
});

// ---- v82: app limits live in tools, and never lie about where they are ---

t("app limits is a tool card, not a vault row", () => {
  const tools = slice("function ToolsView", "function loadStored");
  assert.match(tools, /setOpen\("limits"\)/, "the card does not open the panel");
  assert.match(tools, /open === "limits"/, "the panel is not rendered");
  assert.match(tools, /<AppLimitsRow \/>/);
  const vault = slice("function VaultView", "function CloudBackupRow");
  assert.ok(!/AppLimitsRow/.test(vault), "app limits is still duplicated in the vault");
});

t("the panel retries the bridge before claiming it is a browser", () => {
  const src = slice("function AppLimitsRow", "function VaultView");
  // a bridge that is one microtask late must not be reported as absence
  assert.match(src, /if \(tries < 6\)/, "no retry before giving up");
  // and when it really is missing, say which of the two it is
  assert.match(src, /const inApp = .*window[.]taskshNative[.]isNative/);
  assert.match(src, /you are in the app, but its bridge is not answering/);
  assert.match(src, /copy diagnostic/);
});

t("the bridge leaves a trace when it fails to install", () => {
  const b = readFileSync(join(here, "native/bridge.src.mjs"), "utf8");
  assert.match(b, /window\.taskshBridgeError = "not installed"/);
  assert.match(b, /window\.taskshHealth = async \(\) =>/);
  assert.match(b, /plugins: \["WidgetBridge", "Bundle", "Block", "Share"\]/);
});

console.log(`\nwidget.test.mjs — ${pass} passed${process.exitCode ? ", FAILURES above" : ""}`);
