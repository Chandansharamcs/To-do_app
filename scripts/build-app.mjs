// scripts/build-app.mjs — stages the web assets for the Android shell
//
// Capacitor needs a webDir with ONLY the files the app serves. Pointing it at
// the repo root would copy node_modules, the test suite and the changelog into
// the APK. So this stages exactly what the site serves, plus two differences
// from the website build:
//
//   * bridge.js is injected -- the native powers, absent from the PWA;
//   * the service worker is not registered (app.jsx already skips it when the
//     bridge is present), because inside a WebView a cache is a foot-gun: it
//     would keep serving the old bundle after an update.

import { mkdir, copyFile, readFile, writeFile, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(root, "app-web");

const MUST = ["bundle.js", "manifest.json", "icon-192.png", "icon-512.png", "icon-maskable-192.png", "icon-maskable-512.png", "favicon-32.png"];
const OPTIONAL = ["apple-touch-icon.png", "favicon.ico"];

for (const f of MUST) {
  if (!existsSync(join(root, f))) {
    console.error(`build-app: missing ${f} -- run npm run build first`);
    process.exit(1);
  }
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const f of [...MUST, ...OPTIONAL]) {
  if (existsSync(join(root, f))) await copyFile(join(root, f), join(out, f));
}

// the bridge, bundled on its own so the PWA bundle stays free of Capacitor
execFileSync("npx", [
  "esbuild", "native/bridge.src.mjs",
  "--bundle", "--format=iife", "--minify",
  "--define:process.env.NODE_ENV=\"production\"",
  "--outfile=app-web/bridge.js",
], { cwd: root, stdio: "inherit" });

// index.html, with the bridge in front of the app bundle, and the service
// worker registration switched off (the shell serves local files; a cache there
// would keep handing back the previous bundle after an update).
const index = await readFile(join(root, "index.html"), "utf8");
if (!index.includes("bundle.js")) {
  console.error("build-app: index.html does not reference bundle.js");
  process.exit(1);
}

const withBridge = index.replace(
  /<script([^>]*)\ssrc="(\.\/)?bundle\.js"/,
  '<script src="bridge.js"></script>\n  <script$1 src="bundle.js"',
);
if (!withBridge.includes("bridge.js")) {
  console.error("build-app: could not inject bridge.js into index.html");
  process.exit(1);
}

const noSW = withBridge.replace(
  'if ("serviceWorker" in navigator) {',
  'if (false) { /* the app shell has no service worker */',
);
if (noSW === withBridge) {
  console.error("build-app: could not find the service worker registration");
  process.exit(1);
}

await writeFile(join(out, "index.html"), noSW);

const staged = await readdir(out);
console.log(`build-app: staged ${staged.length} files in app-web/`);
