// native.test.mjs — v76
//
// The Android shell is a second delivery channel for ONE codebase, so the thing
// worth testing is the separation: the website must not know the shell exists,
// and the shell must not quietly change what the website does.
//
// These are structural and build-level tests -- no Android SDK here -- plus one
// real check of the staging script, which is the step that decides what ends up
// inside the APK.

import { readFileSync, existsSync, readdirSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";

const here = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(join(here, p), "utf8");
/** Just enough XML checking to catch the two things that actually broke a
 *  build: a comment with `--` in it, and an unbalanced tag. */
function DOMParserShim(src) {
  const body = src.replace(/<!--[\s\S]*?-->/g, "").replace(/<\?[\s\S]*?\?>/g, "");
  const stack = [];
  const re = /<(\/?)([A-Za-z][\w.:-]*)([^>]*?)(\/?)>/g;
  let m;
  while ((m = re.exec(body))) {
    const [, close, name, , selfClose] = m;
    if (selfClose) continue;
    if (close) {
      const top = stack.pop();
      if (top !== name) throw new Error(`unbalanced tag: </${name}> closes <${top}>`);
    } else stack.push(name);
  }
  if (stack.length) throw new Error(`unclosed tags: ${stack.join(", ")}`);
}
const SRC = read("app.jsx");

let pass = 0;
const t = (n, f) => { try { f(); pass++; console.log("  ✓", n); } catch (e) { console.log("  ✗", n, "\n     ", e.message); process.exitCode = 1; } };

// ------------------------------------------------------------ separation ---
t("the PWA bundle contains no Capacitor import", () => {
  assert.ok(!/@capacitor/.test(SRC), "app.jsx imports a Capacitor package");
  assert.ok(!/from "@capacitor/.test(SRC));
});

t("the app only sees the shell through one feature-detected object", () => {
  assert.match(SRC, /function nativeShell\(\) \{\s+return \(typeof window !== "undefined" && window\.taskshNative\) \|\| null;/);
  const uses = SRC.match(/nativeShell\(\)/g) || [];
  assert.ok(uses.length >= 2, "nothing calls nativeShell()");
});

t("every native call is guarded, so the website degrades to what it was", () => {
  // the guard points: the resume listener, the alarm scheduler and the share
  assert.match(SRC, /const n = nativeShell\(\);\s+if \(!n \|\| !n\.onResume\) return undefined;/);
  assert.match(SRC, /const n = nativeShell\(\);\s+if \(!n \|\| !n\.scheduleNight\) return Promise\.resolve\(null\);/);
  assert.match(SRC, /const n = nativeShell\(\);\s+if \(!n \|\| !n\.takeSharedText\) return;/);
});

t("turning penalties off cancels the OS alarm instead of leaving it armed", () => {
  assert.match(SRC, /if \(!cfg \|\| !cfg\.on\) return \(n\.cancelNight \? n\.cancelNight\(\) : Promise\.resolve\(null\)\);/);
});

t("the alarm is kept in step with the penalty config", () => {
  assert.match(SRC, /useEffect\(\(\) => \{ nativeScheduleNight\(penalty\.cfg\); \}, \[penalty\.cfg\]\);/);
});

// -------------------------------------------------------------- the shell --
t("the bridge exposes exactly the surface app.jsx expects", () => {
  const b = read("native/bridge.src.mjs");
  for (const k of ["snapshot", "readSnapshot", "restoreSnapshot", "scheduleNight", "cancelNight", "scheduleRoutine", "onResume", "takeSharedText"]) {
    assert.match(b, new RegExp(`${k}[,:]`), `bridge is missing ${k}`);
  }
  assert.match(b, /window\.taskshNative = \{/);
});

t("the night alarm survives Doze", () => {
  const b = read("native/bridge.src.mjs");
  assert.match(b, /allowWhileIdle: true/);
  assert.match(b, /on: \{ hour, minute \}, allowWhileIdle: true, repeats: true/);
  assert.match(b, /silent: true/, "a 03:01 ping should not make a sound");
});

t("cancelNight exists, so turning penalties off really disarms the alarm", () => {
  // app.jsx calls n.cancelNight() when the rules are switched off. It was not
  // in the bridge, so the guard fell through to a no-op and the 03:01 alarm
  // kept firing for a disabled rule.
  const b = read("native/bridge.src.mjs");
  assert.match(b, /async function cancelNight\(\)/);
  assert.match(b, /scheduleNight, cancelNight,/, "cancelNight is not exported on window.taskshNative");
  assert.match(SRC, /if \(!cfg \|\| !cfg\.on\) return \(n\.cancelNight \?/);
});

t("share-in is implemented, not just declared", () => {
  // v76 declared the intent filter but nothing read the intent, so sharing did
  // nothing. The Java plugin is the half Capacitor does not provide.
  const java = read("android/app/src/main/java/sh/tasks/app/SharePlugin.java");
  assert.match(java, /@CapacitorPlugin\(name = "Share"\)/);
  assert.match(java, /Intent\.ACTION_SEND/);
  assert.match(java, /EXTRA_TEXT/);
  assert.match(java, /setAction\(null\)/, "the share is not consumed, so a resume would replay it");
  const main = read("android/app/src/main/java/sh/tasks/app/MainActivity.java");
  assert.match(main, /registerPlugin\(SharePlugin\.class\)/);
  assert.match(main, /public void onNewIntent/, "a second share while running is dropped");
  assert.match(main, /setIntent\(intent\)/);
  const b = read("native/bridge.src.mjs");
  assert.match(b, /registerPlugin\("Share"\)/);
  assert.match(b, /Share\.getShared\(\)/);
});

t("a shared paragraph reaches the editor and opens the right tool", () => {
  assert.match(SRC, /<Body onReward=\{onReward\} incoming=\{tool\.id === "sight" \? sharedText : undefined\} \/>/);
  assert.match(SRC, /if \(sharedText\) setOpen\("sight"\);/);
  assert.match(SRC, /function SightTool\(\{ incoming \}\)/);
  assert.match(SRC, /setText\(incoming\.slice\(0, SIGHT_MAX_CHARS\)\)/);
  assert.match(SRC, /<ToolsView onReward=\{\(c\) => achCtl\.addCoins\(c\)\} sharedText=\{sharedText\} \/>/);
});

t("the widget is declared, exported, and its tick receiver is not", () => {
  const m = read("android/app/src/main/AndroidManifest.xml");
  assert.match(m, /android:name="\.WidgetProvider"[\s\S]{0,120}android:exported="true"/);
  assert.match(m, /android:name="android\.appwidget\.action\.APPWIDGET_UPDATE"/);
  assert.match(m, /@xml\/widget_info/);
  // only a PendingIntent we created may complete a routine
  assert.match(m, /android:name="\.CompleteReceiver"[\s\S]{0,80}android:exported="false"/);
});

t("the widget provider info is resizable and does not pretend to self-update", () => {
  const w = read("android/app/src/main/res/xml/widget_info.xml");
  assert.match(w, /android:resizeMode="horizontal\|vertical"/);
  assert.match(w, /android:minWidth="250dp"/);
  // Android's own floor is 30 minutes, and the countdown needs one: the
  // provider arms its own alarm instead, so this must stay 0
  assert.match(w, /android:updatePeriodMillis="0"/);
  assert.match(w, /android:initialLayout="@layout\/widget_routine"/);
});

t("the widget layout is RemoteViews-legal: no custom views, no nesting surprises", () => {
  const l = read("android/app/src/main/res/layout/widget_routine.xml");
  for (const id of ["widget_headline", "widget_label", "widget_sub", "widget_count", "widget_tick"]) {
    assert.ok(l.includes(`@+id/${id}`), `layout is missing ${id}`);
  }
  // RemoteViews only supports a fixed set of views; anything else silently
  // fails to inflate at runtime, on the home screen, where nobody sees a log
  const allowed = new Set(["LinearLayout", "TextView", "ImageView", "Button", "ImageButton", "FrameLayout", "RelativeLayout", "ProgressBar", "Chronometer"]);
  for (const tag of l.match(/<([A-Z][A-Za-z]+)/g) || []) {
    const name = tag.slice(1);
    assert.ok(allowed.has(name), `${name} is not allowed in RemoteViews`);
  }
});

t("the provider arms and disarms its one-minute alarm", () => {
  const p = read("android/app/src/main/java/sh/tasks/app/WidgetProvider.java");
  // one minute, stated once and reused -- and it must be a repeating alarm,
  // because APPWIDGET_UPDATE's own floor is 30 minutes
  assert.match(p, /TICK_MS = 60000L;/);
  assert.match(p, /am\.setRepeating\(AlarmManager\.RTC, next\.getTimeInMillis\(\), TICK_MS, tickIntent\(context\)\)/);
  assert.match(p, /next\.set\(Calendar\.SECOND, 0\)/, "the tick drifts with the second the widget was created");
  assert.match(p, /public void onDisabled[\s\S]{0,400}am\.cancel\(tickIntent\(context\)\)/, "a deleted widget keeps waking the phone");
});

t("the tick queues AND redraws, so the widget never lies", () => {
  const c = read("android/app/src/main/java/sh/tasks/app/CompleteReceiver.java");
  assert.match(c, /WidgetStore\.queueAction\(context, id, day\);/);
  assert.match(c, /WidgetStore\.markDoneLocally\(context, id, day\);/);
  assert.match(c, /WidgetProvider\.refreshAll\(context\);/);
});

t("a broken or foreign model is never drawn and never overwrites a good one", () => {
  const s2 = read("android/app/src/main/java/sh/tasks/app/WidgetStore.java");
  assert.match(s2, /if \(o\.optInt\("v", 0\) != 1\) return;/, "an unknown model version is accepted");
  // the cap and the trim must live in the same file, whatever the spacing
  assert.match(s2, /QUEUE_MAX = 50;/, "no queue cap");
  assert.match(s2, /while \(arr\.length\(\) > QUEUE_MAX\) arr\.remove\(0\);/, "the action queue is unbounded");
});

t("the widget bridge is registered like the share plugin", () => {
  const main = read("android/app/src/main/java/sh/tasks/app/MainActivity.java");
  assert.match(main, /registerPlugin\(WidgetPushPlugin\.class\)/);
  const b = read("native/bridge.src.mjs");
  assert.match(b, /registerPlugin\("WidgetBridge"\)/);
  assert.match(b, /pushWidget, takeWidgetActions,/);
});

t("the update pill's feed cannot disagree with the app it describes", () => {
  const vj = JSON.parse(read("version.json"));
  const pkg = JSON.parse(read("package.json"));
  assert.equal(vj.version, pkg.version, "version.json is stale");
  const v = pkg.version.split(".").map(Number);
  assert.equal(vj.versionCode, v[0] * 1000000 + v[1] * 1000 + v[2]);
  assert.match(vj.apk, /^https:\/\/chandansharamcs\.github\.io\/To-do_app\/tasksh\.apk$/);
});

t("CI publishes the APK where the pill looks for it", () => {
  const w = read(".github/workflows/android.yml");
  // the fixed path the app fetches must be the path CI writes
  assert.match(w, /cp "\$APK" tasksh\.apk/);
  assert.match(w, /fs\.writeFileSync\("version\.json"/);
  // only a signed build, only from main, and it must actually leave the runner
  assert.match(w, /publish apk to pages\n\s+if: env\.KS_B64 != '' && github\.ref == 'refs\/heads\/main'/);
  assert.match(w, /git push/);
  assert.match(w, /contents: write/, "the publish step cannot push without write permission");
});

t("the version code can only climb, and it comes from package.json", () => {
  const g = read("android/app/build.gradle");
  assert.match(g, /new groovy\.json\.JsonSlurper\(\)\.parseText\(file\("\.\.\/\.\.\/package\.json"\)\.text\)/);
  assert.match(g, /versionCode major \* 1000000 \+ minor \* 1000 \+ patch/);
  assert.match(g, /versionName pkg\.version/);
  // and the arithmetic is right for the current version
  const v = JSON.parse(read("package.json")).version.split(".").map(Number);
  assert.equal(v[0] * 1000000 + v[1] * 1000 + v[2], 5024000, `expected 5.24.0 -> 5024000, got ${v.join(".")}`);
});

t("the snapshot is scoped to the app's own keys and nothing else", () => {
  const b = read("native/bridge.src.mjs");
  assert.match(b, /if \(k && k\.startsWith\("tasksh\."\)\)/);
  assert.match(b, /if \(!k\.startsWith\("tasksh\."\)\) continue;/);
});

t("the manifest asks for the permissions the alarm needs, and no more", () => {
  const m = read("android/app/src/main/AndroidManifest.xml");
  for (const p of ["POST_NOTIFICATIONS", "USE_EXACT_ALARM", "SCHEDULE_EXACT_ALARM", "RECEIVE_BOOT_COMPLETED", "INTERNET"]) {
    assert.ok(m.includes(`android.permission.${p}`), `missing ${p}`);
  }
  for (const bad of ["ACCESS_FINE_LOCATION", "READ_CONTACTS", "READ_SMS", "CAMERA"]) {
    assert.ok(!m.includes(bad), `it asks for ${bad}, which it does not need`);
  }
});

t("text can be shared into the app from another app", () => {
  const m = read("android/app/src/main/AndroidManifest.xml");
  assert.match(m, /android\.intent\.action\.SEND/);
  assert.match(m, /<data android:mimeType="text\/plain" \/>/);
});

t("the app keeps its own icon and name", () => {
  assert.match(read("android/app/src/main/res/values/strings.xml"), /<string name="app_name">tasks\.sh<\/string>/);
  assert.ok(existsSync(join(here, "android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png")));
  assert.ok(existsSync(join(here, "android/app/src/main/res/drawable/ic_stat_icon.xml")));
});

// ---------------------------------------------------------------- build ----
t("the staging script produces exactly the files the shell serves", () => {
  execFileSync("node", ["scripts/build-app.mjs"], { cwd: here, stdio: "pipe" });
  const files = readdirSync(join(here, "app-web")).sort();
  for (const f of ["bundle.js", "bridge.js", "index.html", "manifest.json", "icon-192.png", "icon-512.png"]) {
    assert.ok(files.includes(f), `app-web is missing ${f}`);
  }
  // and nothing that would bloat or leak: no tests, no changelog, no sw.js
  for (const bad of ["sw.js", "app.jsx", "CHANGELOG.md", "package.json", "node_modules"]) {
    assert.ok(!files.includes(bad), `app-web leaked ${bad}`);
  }
});

t("the shell's index.html loads the bridge and has no service worker", () => {
  const html = read("app-web/index.html");
  assert.match(html, /<script src="bridge\.js"><\/script>\s+<script src="bundle\.js"><\/script>/);
  assert.match(html, /if \(false\) \{ \/\* the app shell has no service worker \*\//);
});

t("the website's own index.html is untouched", () => {
  const html = read("index.html");
  assert.ok(!html.includes("bridge.js"), "the PWA gained the native bridge");
  assert.match(html, /navigator\.serviceWorker\.register\("sw\.js"\)/);
});

t("the CI job builds a debug APK always and a signed one when the key exists", () => {
  const w = read(".github/workflows/android.yml");
  assert.match(w, /assembleDebug/);
  assert.match(w, /assembleRelease/);
  // secrets are copied to job env, then the step conditions test the env --
  // `secrets` is not readable inside every `if:` expression
  assert.match(w, /KS_B64: \$\{\{ secrets\.KEYSTORE_BASE64 \}\}/);
  assert.match(w, /if: env\.KS_B64 != ''/);
  assert.match(w, /upload-artifact@v4/);
  assert.match(w, /java-version: "21"/);
  // setup-android installs the removed `tools` package by default, which fails
  // the whole job before any of our steps run
  assert.match(w, /with:\s+packages: platform-tools/);
  // the keystore is decoded into the runner's temp dir, never committed
  // whitespace in a pasted secret must not corrupt the key
  assert.match(w, /tr -d '\[:space:\]' \| base64 -d/);
});

t("every XML in the android project is well-formed", () => {
  // Two builds died on this: a comment containing `--` is illegal XML, and the
  // manifest merger reports it as a bare "Error parsing AndroidManifest.xml"
  // with no line number. Cheap to check, expensive to hit at build time.
  const walk = (dir) => readdirSync(join(here, dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]);
  const files = [...walk("android/app/src/main"), "android/app/src/main/AndroidManifest.xml"]
    .filter((f) => f.endsWith(".xml"));
  assert.ok(files.length >= 3, "no android xml found");
  for (const f of files) {
    const src = readFileSync(join(here, f), "utf8");
    for (const c of src.match(/<!--[\s\S]*?-->/g) || []) {
      assert.ok(!c.slice(4, -3).includes("--"), `${f}: a comment contains a double hyphen`);
    }
    assert.doesNotThrow(() => new DOMParserShim(src), `${f} is not well-formed`);
  }
});

t("no keystore is committed anywhere", () => {
  for (const f of readdirSync(here)) {
    assert.ok(!/\.(jks|keystore)$/.test(f), `${f} looks like a signing key`);
  }
  assert.match(read(".gitignore"), /\*\.keystore/);
});

console.log(`\nnative.test.mjs — ${pass} passed${process.exitCode ? ", FAILURES above" : ""}`);
