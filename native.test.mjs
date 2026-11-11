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
  // the two guard points: the resume listener and the alarm scheduler
  assert.match(SRC, /const n = nativeShell\(\);\s+if \(!n \|\| !n\.onResume\) return undefined;/);
  assert.match(SRC, /const n = nativeShell\(\);\s+if \(!n \|\| !n\.scheduleNight\) return Promise\.resolve\(null\);/);
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
  for (const k of ["snapshot", "readSnapshot", "restoreSnapshot", "scheduleNight", "scheduleRoutine", "onResume", "takeSharedText"]) {
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
  assert.match(w, /secrets\.KEYSTORE_BASE64/);
  assert.match(w, /upload-artifact@v4/);
  assert.match(w, /java-version: "21"/);
  // the keystore is decoded into the runner's temp dir, never committed
  assert.match(w, /base64 -d > "\$RUNNER_TEMP\/tasksh\.keystore"/);
});

t("no keystore is committed anywhere", () => {
  for (const f of readdirSync(here)) {
    assert.ok(!/\.(jks|keystore)$/.test(f), `${f} looks like a signing key`);
  }
  assert.match(read(".gitignore"), /\*\.keystore/);
});

console.log(`\nnative.test.mjs — ${pass} passed${process.exitCode ? ", FAILURES above" : ""}`);
