// cloud.spec.mjs
//
// The v38 promise, end to end in a real browser: wipe the phone and get
// everything back from a 31-character code.
//
// The worker is faked in-process. What is NOT faked is the crypto, the
// localStorage sweep, the UI, or the reload -- those are the parts that
// decide whether a backup is real or just a button that says "backed up".

import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));

const MIME = {
  ".html": "text/html", ".js": "application/javascript", ".json": "application/json",
  ".png": "image/png", ".ico": "image/x-icon", ".svg": "image/svg+xml",
};

function serve() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const url = req.url.split("?")[0];
        const path = join(here, url === "/" ? "index.html" : url.slice(1));
        const body = await readFile(path);
        res.writeHead(200, { "Content-Type": MIME[extname(path)] || "application/octet-stream" });
        res.end(body);
      } catch {
        res.writeHead(404); res.end("not found");
      }
    });
    server.listen(0, "127.0.0.1", () => resolve({ server, port: server.address().port }));
  });
}

let passed = 0;
const results = [];
const test = async (name, fn) => {
  try { await fn(); passed++; results.push(`  ✓ ${name}`); }
  catch (err) {
    results.push(`  ✗ ${name}\n      ${String(err.message).split("\n")[0]}`);
    process.exitCode = 1;
  }
};

// Swapping the served sw.js is how a new build is simulated: the harness
// serves real files, so this is the same event Chromium sees in production.
const { writeFile } = await import("node:fs/promises");
async function swapServedSW(from, to) {
  const path = join(here, "sw.js");
  const body = await readFile(path, "utf8");
  if (!body.includes(from)) throw new Error(`sw.js does not contain ${from}`);
  await writeFile(path, body.replace(from, to));
}

const { server, port } = await serve();
const BASE = `http://127.0.0.1:${port}/`;
const browser = await chromium.launch();

const SEED_HABITS = JSON.stringify([{ id: 1, label: "drink water", xp: 7 }]);
const SEED_NOTES = JSON.stringify([{ id: 9, body: "remember the milk" }]);

/** A phone with a fake worker bolted on. `cloud` is the KV the worker would
 *  have; the tests read it directly to see what actually got uploaded. */
async function phone(seed = true) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const cloud = { store: new Map(), posts: [] };

  await ctx.route("**/backup**", async (route) => {
    const req = route.request();
    if (req.method() === "POST") {
      const body = JSON.parse(req.postData() || "{}");
      cloud.posts.push(body);
      cloud.store.set(body.id, { at: Date.now(), size: String(body.blob).length, blob: body.blob });
      const rec = cloud.store.get(body.id);
      return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, at: rec.at, size: rec.size }) });
    }
    const id = new URL(req.url()).searchParams.get("id");
    const rec = cloud.store.get(id);
    if (!rec) return route.fulfill({ status: 404, contentType: "application/json", body: JSON.stringify({ error: "not found" }) });
    return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, ...rec }) });
  });

  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

  if (seed) {
    await page.addInitScript(([h, n]) => {
      localStorage.setItem("tasksh.habits.v1", h);
      localStorage.setItem("tasksh.notes.v1", n);
      localStorage.setItem("tasksh.aikey.v1", "AQ.pretend-key");
    }, [SEED_HABITS, SEED_NOTES]);
  }
  return { ctx, page, cloud, errors };
}

// The vault has more than one "turn on" (notifications has one too), so
// every control is addressed inside its own card rather than page-wide.
const cloudBtn = (page, name) => page.locator(".cloud-card").getByRole("button", { name });
const updateBtn = (page, name) => page.locator(".update-card").getByRole("button", { name });

const openVault = async (page) => {
  await page.getByRole("tab", { name: "vault" }).click();
  await page.waitForTimeout(250);
};

// ---------------------------------------------------------------- turn on ---

await test("turning it on produces a readable recovery code", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openVault(page);
  await cloudBtn(page, "turn on").click();

  const code = (await page.locator(".cloud-key").innerText()).trim();
  assert.match(code, /^tsh-[0-9a-z]{10}-[0-9a-z]{16}$/, `unreadable code: ${code}`);
  assert.deepEqual(errors, []);
  await ctx.close();
});

// ------------------------------------------------------------- what leaves ---

await test("what leaves the phone is ciphertext, not the backup", async () => {
  const { ctx, page, cloud } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openVault(page);
  await cloudBtn(page, "turn on").click();
  await cloudBtn(page, "back up now").click();
  await page.waitForTimeout(1200);

  assert.ok(cloud.posts.length >= 1, "nothing was uploaded");
  const blob = cloud.posts[cloud.posts.length - 1].blob;
  assert.match(blob, /^v1\./, "not the versioned envelope");
  // the things a curious person with the id would be looking for
  for (const needle of ["tasksh", "habits", "drink water", "remember the milk", "AQ.pretend-key"]) {
    assert.ok(!blob.includes(needle), `plaintext leaked: ${needle}`);
  }
  await ctx.close();
});

// ------------------------------------------------------- the actual promise ---

await test("clear everything, type the code, get it all back", async () => {
  const { ctx, page, cloud } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openVault(page);
  await cloudBtn(page, "turn on").click();
  const code = (await page.locator(".cloud-key").innerText()).trim();
  await cloudBtn(page, "back up now").click();
  await page.waitForTimeout(1200);
  await ctx.close();

  // --- new phone: nothing carried over, exactly like "clear site data" ---
  const fresh = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await fresh.route("**/backup**", async (route) => {
    const id = new URL(route.request().url()).searchParams.get("id");
    const rec = cloud.store.get(id);
    if (!rec) return route.fulfill({ status: 404, contentType: "application/json", body: JSON.stringify({ error: "not found" }) });
    return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, ...rec }) });
  });
  const p2 = await fresh.newPage();
  await p2.goto(BASE, { waitUntil: "networkidle" });

  const before = await p2.evaluate(() => localStorage.getItem("tasksh.habits.v1"));
  assert.notEqual(before, SEED_HABITS, "the fresh profile was not actually empty");

  await openVault(p2);
  await cloudBtn(p2, "restore").click();
  await p2.locator(".cloud-input").fill(code);
  await cloudBtn(p2, "look up").click();
  await p2.waitForTimeout(1500);

  const preview = await p2.locator(".cloud-preview").innerText();
  assert.match(preview, /keys ·/, `no preview shown: ${preview}`);

  await cloudBtn(p2, "apply").click();
  await p2.waitForTimeout(2000);
  await p2.waitForLoadState("networkidle");

  const after = await p2.evaluate(() => ({
    habits: localStorage.getItem("tasksh.habits.v1"),
    notes: localStorage.getItem("tasksh.notes.v1"),
    key: localStorage.getItem("tasksh.aikey.v1"),
    cloud: localStorage.getItem("tasksh.cloud.v1"),
  }));
  assert.equal(after.habits, SEED_HABITS, "habits did not come back");
  assert.equal(after.notes, SEED_NOTES, "notes did not come back");
  assert.equal(after.key, "AQ.pretend-key", "the API key did not come back");
  // the restored device adopts the same code, so it keeps the same backup line
  assert.ok(after.cloud && JSON.parse(after.cloud).id === code.split("-")[1]);
  await fresh.close();
});

// ------------------------------------------------------------- wrong code ---

await test("a wrong code fails without touching anything", async () => {
  const { ctx, page, cloud } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openVault(page);
  await cloudBtn(page, "turn on").click();
  await cloudBtn(page, "back up now").click();
  await page.waitForTimeout(1200);
  const id = cloud.posts[0].id;

  await cloudBtn(page, "restore").click();
  await page.locator(".cloud-input").fill(`tsh-${id}-23456789234567 89`.replace(" ", ""));
  await cloudBtn(page, "look up").click();
  await page.waitForTimeout(1500);

  const msg = await page.locator(".cloud-msg.err").innerText();
  assert.match(msg, /wrong recovery code/i, `unhelpful failure: ${msg}`);
  assert.equal(await page.locator(".cloud-preview").count(), 0, "a preview appeared for a bad code");
  assert.equal(await page.evaluate(() => localStorage.getItem("tasksh.habits.v1")), SEED_HABITS);
  await ctx.close();
});

// ----------------------------------------------------------- update plumbing ---

await test("the update row reports the running build and offers a code-only refresh", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  await openVault(page);

  const version = await page.locator(".update-card .note-when").innerText();
  assert.match(version, /^v\d+$/, `version badge reads "${version}"`);

  // arming is required: one stray tap must not drop the cache mid-session
  await updateBtn(page, "reload app code").click();
  assert.equal(await updateBtn(page, "confirm reload").count(), 1);
  await updateBtn(page, "cancel").click();
  assert.equal(await updateBtn(page, "confirm reload").count(), 0);
  await ctx.close();
});

await test("a first launch does not claim there is a new build", async () => {
  // The service worker claiming an uncontrolled page fires controllerchange
  // exactly like a real update does. This showed up in a screenshot of a
  // brand-new profile wearing an "update ready" bar.
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  assert.equal(await page.locator(".update-bar").count(), 0, "first launch showed the update bar");
  await ctx.close();
});

await test("a genuinely new build does raise the bar", async () => {
  // The other half of the first-launch guard: ignoring the first claim must
  // not mean ignoring every update that follows it in the same session.
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  assert.equal(await page.locator(".update-bar").count(), 0);

  try {
    await swapServedSW("tasksh-v38", "tasksh-v39");
    await page.evaluate(() => window.__swReg && window.__swReg.update());
    await page.waitForSelector(".update-bar", { timeout: 20000 });
    assert.match(await page.locator(".update-bar").innerText(), /new build ready/);
  } finally {
    // This test edits a tracked file. A failure here must not leave the repo
    // holding a cache tag nobody released -- release.sh checks that tag.
    await swapServedSW("tasksh-v39", "tasksh-v38").catch(() => {});
    await ctx.close();
  }
});

await test("the service worker registration is reachable for update checks", async () => {
  // getRegistration() races the load listener on a cold start, so index.html
  // stashes the handle. If that ever regresses, update checks silently no-op.
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  const has = await page.evaluate(() => !!window.__swReg);
  assert.equal(has, true, "window.__swReg was never set");
  await ctx.close();
});

console.log(results.join("\n"));
console.log(`  cloud.spec.mjs — ${passed} passed`);
await browser.close();
server.close();
