// v74.spec.mjs — sight, in a browser
//
// The unit file proves the splitter. This one proves the machine around it:
// the estimate appears before the start, the sight advances on its own, a tap
// skips ahead, pause actually stops the clock, the paragraph ends with the
// celebration, and Hindi renders as Hindi.

import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, extname } from "node:path";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));
const MIME = { ".html": "text/html", ".js": "application/javascript", ".json": "application/json", ".png": "image/png", ".ico": "image/x-icon", ".svg": "image/svg+xml" };

function serve() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const url = req.url.split("?")[0];
        const path = join(here, url === "/" ? "index.html" : url.slice(1));
        const body = await readFile(path);
        res.writeHead(200, { "Content-Type": MIME[extname(path)] || "application/octet-stream" });
        res.end(body);
      } catch { res.writeHead(404); res.end("not found"); }
    });
    server.listen(0, "127.0.0.1", () => resolve({ server, port: server.address().port }));
  });
}

let pass = 0, fail = 0;
const t = async (name, fn) => {
  try { await fn(); pass++; console.log("  ✓", name); }
  catch (e) { fail++; console.log("  ✗", name, "\n     ", e.message); process.exitCode = 1; }
};

const EN = "I write every morning. It is quiet then. That is the whole point of it. Nothing else happens before noon.";
const HI = "मैं रोज़ सुबह लिखता हूँ। सुबह बहुत शांत होती है। यही बात सबसे ज़रूरी है।";

const { server, port } = await serve();
const browser = await chromium.launch();

async function openSight() {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "load" });
  await page.waitForSelector(".tabs", { timeout: 15000 });
  await page.click("#tab-tools");
  await page.click('.tool-card:has-text("sight")');
  await page.waitForSelector(".sight-area", { timeout: 8000 });
  return { ctx, page, errors };
}

await t("sight is a tool on the tools grid and opens to a paste box", async () => {
  const { ctx, page } = await openSight();
  try {
    assert.equal(await page.locator(".sight-area").count(), 1);
    assert.match(await page.textContent(".sight-count"), /0 words · 0 sights/);
    assert.ok(await page.locator(".sight-go").isDisabled(), "start must be dead with no text");
  } finally { await ctx.close(); }
});

await t("the estimate appears before the start, as interval × sights", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    await page.waitForTimeout(200);
    // 4 sentences, 10s each -> 0:40
    assert.match(await page.textContent(".sight-plan"), /4 sights · \d+ words · one every 10s/);
    assert.match(await page.textContent(".sight-plan"), /take 0:40 on the clock/);
    await page.click('.sight-row .sight-pill:has-text("5s")');
    assert.match(await page.textContent(".sight-plan"), /take 0:20 on the clock/);
  } finally { await ctx.close(); }
});

await t("3 words per sight changes both the count and the estimate", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    await page.click('.sight-pill:has-text("3 words")');
    await page.waitForTimeout(200);
    const plan = await page.textContent(".sight-plan");
    const n = Number(plan.match(/(\d+) sights/)[1]);
    // 22 words at 3 per sight, counting restarting per sentence -> 9
    assert.ok(n >= 8, `expected at least 8 sights at 3 words, got ${n}`);
    await page.click('.sight-peek-btn');
    await page.waitForSelector(".sight-peek", { timeout: 3000 });
    const first = await page.locator(".sight-peek li").first().textContent();
    assert.match(first, /1I write every/, "the peek should show the real chunks");
  } finally { await ctx.close(); }
});

await t("hindi splits on the danda and renders as Hindi", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", HI);
    await page.waitForTimeout(200);
    assert.match(await page.textContent(".sight-plan"), /3 sights/);
    assert.match(await page.textContent(".sight-count"), /devanagari/);
    await page.click('.sight-go');
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    const now = await page.textContent(".sight-line.now");
    assert.equal(now.trim(), "मैं रोज़ सुबह लिखता हूँ।");
    assert.equal(await page.getAttribute(".sight-stage", "lang"), "hi");
  } finally { await ctx.close(); }
});

await t("the run screen shows previous, current and next", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    await page.click('.sight-go');
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    assert.equal((await page.textContent(".sight-line.now")).trim(), "I write every morning.");
    assert.equal((await page.textContent(".sight-line.next")).trim(), "It is quiet then.");
    assert.equal((await page.textContent(".sight-line.prev")).trim(), "", "there is nothing before the first");
    assert.match(await page.textContent(".sight-hud-count"), /1\/4/);
  } finally { await ctx.close(); }
});

await t("it advances on its own when the interval is up", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    // one second per sight keeps the test honest and quick
    await page.click('[aria-label="custom interval"]');
    await page.fill('input[aria-label="seconds per sight"]', "1");
    await page.click(".sight-go");
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    await page.waitForTimeout(1500);
    const hud = await page.textContent(".sight-hud-count");
    assert.ok(!/^1\//.test(hud), `it did not move on by itself (still ${hud})`);
  } finally { await ctx.close(); }
});

await t("a tap on the line skips ahead early, and ‹ goes back", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    await page.click(".sight-go");
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    await page.click(".sight-stage");
    await page.waitForTimeout(150);
    assert.match(await page.textContent(".sight-hud-count"), /^2\/4$/);
    await page.click('.sight-btns .sight-pill[aria-label="previous sight"]');
    await page.waitForTimeout(150);
    assert.match(await page.textContent(".sight-hud-count"), /^1\/4$/);
  } finally { await ctx.close(); }
});

await t("pause stops the clock, not just the advance", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    await page.click('[aria-label="custom interval"]');
    await page.fill('input[aria-label="seconds per sight"]', "1");
    await page.click(".sight-go");
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    await page.click('.sight-btns .sight-pill:has-text("pause")');
    const t0 = await page.textContent(".sight-hud-clock");
    const i0 = await page.textContent(".sight-hud-count");
    await page.waitForTimeout(1600);
    assert.equal(await page.textContent(".sight-hud-clock"), t0, "the clock kept running while paused");
    assert.equal(await page.textContent(".sight-hud-count"), i0, "it advanced while paused");
    await page.click('.sight-btns .sight-pill:has-text("resume")');
    await page.waitForTimeout(600);
    assert.notEqual(await page.textContent(".sight-hud-clock"), t0, "the clock never resumed");
  } finally { await ctx.close(); }
});

await t("finishing the last sight celebrates and reports the real numbers", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    await page.click(".sight-go");
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    for (let i = 0; i < 6; i++) {
      if (await page.locator(".sight-done").count()) break;
      await page.click(".sight-stage");
      await page.waitForTimeout(200);
    }
    await page.waitForSelector(".sight-done", { timeout: 5000 });
    assert.match(await page.textContent(".sight-done-kicker"), /paragraph complete/);
    assert.ok(await page.locator(".sight-burst .sight-bit").count() >= 20, "no celebration rain");
    const stats = await page.textContent(".sight-stats");
    assert.match(stats, /4sights/i);
    assert.match(await page.textContent(".sight-done-line"), /interval alone would have taken 0:40/);
    assert.equal(await page.locator(".sight-line").count(), 0, "the stage should be gone");
  } finally { await ctx.close(); }
});

await t("nothing about the paste is written to storage", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", EN);
    await page.click(".sight-go");
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    await page.waitForTimeout(600);
    const keys = await page.evaluate(() => Object.keys(localStorage));
    const leaked = keys.filter((k) => !/^tasksh\./.test(k));
    assert.deepEqual(leaked, [], `unexpected keys: ${leaked.join(",")}`);
    const dump = await page.evaluate(() => JSON.stringify(localStorage));
    assert.ok(!dump.includes("I write every morning"), "the pasted text ended up in localStorage");
  } finally { await ctx.close(); }
});

await t("no horizontal overflow with sight open, at phone width", async () => {
  const { ctx, page } = await openSight();
  try {
    await page.fill(".sight-area", HI);
    await page.click('.sight-go');
    await page.waitForSelector(".sight-stage", { timeout: 5000 });
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    assert.ok(over <= 1, `overflow of ${over}px`);
  } finally { await ctx.close(); }
});

await browser.close();
server.close();
console.log(`\nv74.spec.mjs: ${pass} passed, ${fail} failed`);
