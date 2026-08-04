// gate.spec.mjs
//
// The real UI in headless Chromium: AI key gate behaviour, the version badge,
// and the first-run level bug.
//
// No test runner — plain playwright plus a tiny harness, so `node gate.spec.mjs`
// works from a clean clone with nothing but `npm install`.

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

/** Serves the repo root, so the app runs exactly as GitHub Pages serves it. */
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

const { server, port } = await serve();
const BASE = `http://127.0.0.1:${port}/`;
const browser = await chromium.launch();

/** Fresh phone-sized context with no stored state. */
async function phone() {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  return { ctx, page, errors };
}

// ------------------------------------------------------------- first run ----

await test("first launch shows no LEVEL UP overlay", async () => {
  // v29 bug: starter data is exactly 100 XP = level 2, and a missing seenLevel
  // was read as "started at 1", so a brand-new user was congratulated for a
  // level they never earned — full-screen, over the tab bar, on first launch.
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  const overlay = await page.locator("text=/LEVEL UP/i").count();
  assert.equal(overlay, 0, "a LEVEL UP overlay appeared on first launch");
  await ctx.close();
});

await test("first launch records the starting level so it stays quiet on reload", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const meta = await page.evaluate(() => localStorage.getItem("tasksh.meta.v1"));
  assert.ok(meta, "no meta written on first run");
  assert.ok(JSON.parse(meta).seenLevel >= 1, "seenLevel was not recorded");
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  assert.equal(await page.locator("text=/LEVEL UP/i").count(), 0, "overlay appeared on reload");
  await ctx.close();
});

await test("importing a backup shows no pet EVOLUTION overlay", async () => {
  // Same class of bug as the LEVEL UP overlay, missed in v29 because only the
  // level path was audited. A fresh pet records stage 0; restore a backup whose
  // XP implies a later form and the first render looks like an evolution, so a
  // full-screen backdrop covers the UI and intercepts every click. Found the
  // same way the v29 one was: it blocked automated clicks.
  //
  // Note the seed profile does NOT trigger this -- its level maps to stage 0 --
  // so the scenario has to be a restored backup, which is exactly how a real
  // user hits it after clearing site data to pick up a new build.
  const { ctx, page } = await phone();
  await page.addInitScript(() => {
    const day = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
    const history = Array.from({ length: 12 }, (_, i) => day(i));
    localStorage.setItem("tasksh.goodhabits.v1", JSON.stringify(
      [{ id: 1, label: "Deep Work", area: "work", xp: 100, history, sub: "deep" }]));
    localStorage.setItem("tasksh.badhabits.v1", "[]");
    localStorage.setItem("tasksh.rewards.v1", "[]");
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1100);
  assert.equal(await page.locator(".evo-backdrop").count(), 0,
    "an evolution overlay appeared after restoring a backup");
  await ctx.close();
});

await test("nothing blocks pointer events after importing a backup", async () => {
  // the general form: whatever the overlay is called, the tab bar must stay
  // reachable on a profile the user has just restored
  const { ctx, page } = await phone();
  await page.addInitScript(() => {
    const day = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
    const history = Array.from({ length: 12 }, (_, i) => day(i));
    localStorage.setItem("tasksh.goodhabits.v1", JSON.stringify(
      [{ id: 1, label: "Deep Work", area: "work", xp: 100, history, sub: "deep" }]));
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1100);
  const blocked = await page.evaluate(() => {
    const tab = [...document.querySelectorAll('[role="tab"]')].pop();
    if (!tab) return "no tabs found";
    const r = tab.getBoundingClientRect();
    const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    return tab.contains(hit) || hit === tab ? null : `covered by .${hit?.className || hit?.tagName}`;
  });
  assert.equal(blocked, null, `the tab bar is unreachable: ${blocked}`);
  await ctx.close();
});

await test("the app boots with no console or page errors", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  const real = errors.filter((e) => !/favicon|manifest|sw\.js|service ?worker/i.test(e));
  assert.deepEqual(real, [], `console errors on boot:\n${real.join("\n")}`);
  await ctx.close();
});

// ---------------------------------------------------------- version badge ----

await test("the version badge reports the running service worker cache", async () => {
  // Two separate diagnoses in this project were spent working out which build
  // a screenshot came from. The badge must read the LIVE cache, never a
  // constant — a stale bundle carries a stale constant and would lie.
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(900);

  const badge = page.locator(".version-badge");
  assert.equal(await badge.count(), 1, "no version badge rendered");

  // Compare against the cache the browser genuinely holds, read at runtime --
  // NOT against a version literal in this file, which would just be a second
  // constant to forget to bump.
  const actual = await page.evaluate(async () => {
    const keys = await caches.keys();
    return keys.filter((k) => /^tasksh-v\d+$/.test(k))[0] || null;
  });
  assert.ok(actual, "the service worker never installed a cache");
  assert.equal((await badge.innerText()).trim(), actual.replace("tasksh-", ""),
    "the badge disagrees with the cache actually installed");

  // and it must match sw.js, which is the release's source of truth
  const swTag = (await (await fetch(BASE + "sw.js")).text()).match(/tasksh-v\d+/)[0];
  assert.equal(actual, swTag, `cache ${actual} does not match sw.js ${swTag}`);
  await ctx.close();
});

await test("the badge hides rather than throwing when caches are unavailable", async () => {
  const { ctx, page, errors } = await phone();
  await page.addInitScript(() => { delete window.caches; });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  assert.equal(await page.locator(".version-badge").count(), 0, "badge should hide");
  const real = errors.filter((e) => !/favicon|manifest|sw\.js/i.test(e));
  assert.deepEqual(real, [], "missing caches API caused an error");
  await ctx.close();
});

// ------------------------------------------------------------- key gate ----

/** Opens the AI tab and returns the key input if the gate is showing. */
async function openAITab(page) {
  const tab = page.locator("nav button, .tabs button, [role=tab]").filter({ hasText: /pip|ai/i });
  if (await tab.count()) await tab.first().click();
  await page.waitForTimeout(400);
  return page.locator('input[placeholder*="AIza"]');
}

await test("the key gate offers a placeholder without a retired provider", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  const input = await openAITab(page);
  if (await input.count()) {
    const ph = await input.first().getAttribute("placeholder");
    assert.ok(!/ghp_/.test(ph), `placeholder still advertises GitHub Models: ${ph}`);
    assert.ok(/csk-|nvapi-/.test(ph), `placeholder lost the v29 providers: ${ph}`);
  }
  await ctx.close();
});

await test("typing a key shows live provider detection", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  const input = await openAITab(page);
  if (await input.count()) {
    await input.first().fill("csk-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    await page.waitForTimeout(300);
    const body = await page.locator("body").innerText();
    assert.ok(/cerebras/i.test(body), "Cerebras was not detected while typing");
  }
  await ctx.close();
});

await test("an unrecognised key suggests the mistral: form", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  const input = await openAITab(page);
  if (await input.count()) {
    await input.first().fill("abcdef0123456789abcdef0123456789");
    await page.waitForTimeout(300);
    const body = await page.locator("body").innerText();
    assert.ok(/mistral:/i.test(body), "no hint about the mistral: prefix");
  }
  await ctx.close();
});

await test("GitHub Models is gone from the UI entirely", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  const input = await openAITab(page);
  if (await input.count()) {
    await input.first().fill("ghp_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    await page.waitForTimeout(300);
    const body = await page.locator("body").innerText();
    assert.ok(!/github models/i.test(body), "the retired provider is still offered");
  }
  await ctx.close();
});

await browser.close();
server.close();

console.log(results.join("\n"));
console.log(`  gate.spec.mjs — ${passed} passed`);
