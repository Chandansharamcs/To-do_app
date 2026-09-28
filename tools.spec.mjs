// tools.spec.mjs
//
// The TOOLS tab, the pomodoro, and inventory editing (v39) — in a real
// browser, because the interesting parts are persistence across a reload and
// what the timer does about time that passed while it wasn't watching.

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
      } catch { res.writeHead(404); res.end("not found"); }
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

/** A phone with the worker faked, so /timer calls are observable and no
 *  test depends on the network. */
async function phone(seed) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const timers = [];
  await ctx.route("**/timer", async (route) => {
    timers.push(JSON.parse(route.request().postData() || "{}"));
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) });
  });
  await ctx.route("**/backup**", (route) =>
    route.fulfill({ status: 404, contentType: "application/json", body: JSON.stringify({ error: "not found" }) }));

  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  if (seed) await page.addInitScript((entries) => {
    for (const [k, v] of entries) localStorage.setItem(k, v);
  }, Object.entries(seed));
  return { ctx, page, timers, errors };
}

const openPomodoro = async (page) => {
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(250);
  await page.locator(".tool-card", { hasText: "pomodoro" }).click();
  await page.waitForTimeout(350);
};
const clock = (page) => page.locator(".pomo-clock").innerText();
const wallet = (page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.wallet.v1") || '{"coins":0}').coins);

// ------------------------------------------------------------- the grid ----

await test("TOOLS is a tab and the grid lists pomodoro", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".tool-card", { hasText: "pomodoro" }).count(), 1);
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("opening a tool and coming back doesn't lose the grid", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openPomodoro(page);
  assert.equal(await page.locator(".pomo-clock").count(), 1);
  await page.getByRole("button", { name: "← tools" }).click();
  await page.waitForTimeout(250);
  assert.equal(await page.locator(".tool-grid").count(), 1);
  await ctx.close();
});

await test("all seven tabs fit on the narrowest phone, no swiping", async () => {
  // Adding TOOLS as a 7th tab pushed it AND the pet tab off a 390px screen:
  // 100px of overflow on a bar that scrolls, so a brand-new feature was
  // invisible unless you knew to swipe. If an 8th tab ever lands, this fails
  // before it ships rather than after.
  const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  const info = await page.evaluate(() => {
    const bar = document.querySelector(".tabs");
    const barR = bar.getBoundingClientRect();
    const cut = [...document.querySelectorAll('[role="tab"]')]
      .filter((t) => t.getBoundingClientRect().right > barR.right + 0.5)
      .map((t) => t.textContent);
    return { overflow: bar.scrollWidth - bar.clientWidth, cut };
  });
  assert.deepEqual(info.cut, [], `tabs off screen at 360px: ${info.cut.join(", ")}`);
  assert.equal(info.overflow, 0, `tab bar overflows by ${info.overflow}px at 360px`);
  await ctx.close();
});

// ------------------------------------------------------------- v40 looks ---

await test("the ambient background is gone, not just switched off", async () => {
  // v40 removed it entirely: component, CSS layers, per-theme config and the
  // toggle. A leftover .amb-layer would mean the removal was cosmetic.
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const left = await page.evaluate(() => ({
    layers: document.querySelectorAll(".amb-layer, .amb-scoped, .calm-breath").length,
    rootBg: getComputedStyle(document.querySelector(".app-root")).backgroundImage,
    blobVar: getComputedStyle(document.documentElement).getPropertyValue("--blob1").trim(),
  }));
  assert.equal(left.layers, 0, "ambient layers still in the DOM");
  assert.equal(left.rootBg, "none", `app-root still paints a gradient: ${left.rootBg}`);
  assert.equal(left.blobVar, "", "--blob1 is still defined");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("cards carry the red -> cyan ramp, in list order", async () => {
  const { ctx, page } = await phone({
    "tasksh.goodhabits.v1": JSON.stringify(
      Array.from({ length: 6 }, (_, i) => ({
        id: i + 1, label: `habit ${i + 1}`, area: "work", sub: "deep", xp: 10, penalty: 0, history: [],
      }))
    ),
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "quest" }).click();
  await page.waitForTimeout(500);

  const rgb = await page.evaluate(() =>
    [...document.querySelectorAll(".quest-habit-card")].map((c) => {
      const m = getComputedStyle(c).backgroundImage.match(/rgba?\(([\d.,\s]+)\)/);
      return m ? m[1].split(",").map((n) => parseFloat(n)) : null;
    }).filter(Boolean)
  );
  assert.ok(rgb.length >= 4, `expected several washed cards, got ${rgb.length}`);
  const first = rgb[0], last = rgb[rgb.length - 1];
  assert.ok(first[0] > first[2], `first card should be red-dominant, got ${first}`);
  assert.ok(last[2] > last[0], `last card should be cyan-dominant, got ${last}`);
  // and the tint must stay faint enough to read white text over
  assert.ok(first[3] <= 0.2, `wash too strong: alpha ${first[3]}`);
  await ctx.close();
});

// ------------------------------------------------------------- captions ----

await test("the captions tool is on the grid and opens", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(300);
  await page.locator(".tool-card", { hasText: "ai captions" }).click();
  await page.waitForTimeout(400);
  assert.equal(await page.locator(".cap-drop").count(), 1, "no file picker shown");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("the phone check reports what the hardware actually does", async () => {
  // Capability flags can disagree with reality, so the check encodes a real
  // one-second clip and re-parses it. The assertion is that the UI matches
  // isConfigSupported() either way -- a self-test that always says yes is
  // worse than none.
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(300);
  await page.locator(".tool-card", { hasText: "ai captions" }).click();
  await page.waitForTimeout(300);

  const truth = await page.evaluate(async () => {
    try { return (await VideoEncoder.isConfigSupported({ codec: "avc1.42001f", width: 320, height: 180 })).supported; }
    catch { return false; }
  });

  await page.getByRole("button", { name: "check phone" }).click();
  await page.waitForTimeout(4000);
  const out = await page.locator(".cap .cap-note").last().innerText();
  assert.match(out, new RegExp(`h\\.264 encode\\s+${truth ? "yes" : "no"}`, "i"),
    `self-test disagrees with the browser (truth=${truth}):\n${out}`);
  if (truth) assert.match(out, /real encode\s+yes/i, `probe clip did not encode:\n${out}`);
  await ctx.close();
});

await test("captions actually burn into a real file", async () => {
  // The whole feature in one assertion: make a clip, burn three caption
  // lines into it, read the result back as MP4 and check it is longer than
  // the source (pixels changed) and still decodes.
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  const out = await page.evaluate(async () => {
    const api = window.__tasksh;
    if (!api) return { error: "no debug hook" };
    try {
      const clip = await api.encodeProbeClip(2, 12);
      // pauses between them, so they become three separate lines rather
      // than one merged line (which is what continuous speech should do)
      const chunks = api.chunkWords([
        { word: "burned", start: 0.0, end: 0.4 },
        { word: "into", start: 0.9, end: 1.2 },
        { word: "pixels", start: 1.7, end: 2.0 },
      ]);
      const file = new File([clip], "probe.mp4", { type: "video/mp4" });
      const style = { size: 0.09, weight: 900, tracking: 0.02, upper: true,
                      fill: "#FFFFFF", active: "#F5A623", stroke: "#000000", strokeW: 0.18, pop: false };
      let seen = 0;
      const burned = await api.burnCaptions(file, chunks, style, (p) => { seen = p; });
      const meta = await api.probeVideo(new File([burned], "out.mp4", { type: "video/mp4" }));
      return { chunks: chunks.length, srcBytes: clip.size, outBytes: burned.size, progress: seen, meta };
    } catch (err) { return { error: String(err && err.message || err) }; }
  });

  assert.equal(out.error, undefined, `burn threw: ${out.error}`);
  assert.equal(out.chunks, 3, "captions did not chunk");
  assert.ok(out.outBytes > 1000, `output suspiciously small: ${out.outBytes} bytes`);
  assert.equal(out.progress, 1, "progress never reached 100%");
  assert.equal(out.meta.width, 320, `lost the frame size: ${JSON.stringify(out.meta)}`);
  assert.equal(out.meta.height, 180);
  assert.ok(out.meta.duration > 1.4, `duration collapsed: ${out.meta.duration}`);
  await ctx.close();
});

// -------------------------------------------------------------- the timer ---

await test("it starts at the configured length and counts down", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openPomodoro(page);
  assert.equal(await clock(page), "25:00");

  await page.getByRole("button", { name: "start" }).click();
  await page.waitForTimeout(1800);
  const t = await clock(page);
  assert.notEqual(t, "25:00", "the clock never moved");
  assert.match(t, /^24:5[5-9]$/, `unexpected clock: ${t}`);
  await ctx.close();
});

await test("pause actually stops time, not just the label", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openPomodoro(page);
  await page.getByRole("button", { name: "start" }).click();
  await page.waitForTimeout(1200);
  await page.getByRole("button", { name: "pause" }).click();
  const a = await clock(page);
  await page.waitForTimeout(1600);
  assert.equal(await clock(page), a, "the clock kept running while paused");
  await ctx.close();
});

await test("the end time is handed to the worker, and withdrawn on pause", async () => {
  // this is the half that rings with the screen off
  const { ctx, page, timers } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openPomodoro(page);
  await page.getByRole("button", { name: "start" }).click();
  await page.waitForTimeout(600);
  assert.ok(timers.length >= 1, "no timer was registered");
  assert.ok(timers[0].at > Date.now(), "registered an end time in the past");
  assert.ok(timers[0].deviceId, "no device id sent");

  await page.getByRole("button", { name: "pause" }).click();
  await page.waitForTimeout(600);
  assert.equal(timers[timers.length - 1].at, 0, "pausing left a pending push");
  await ctx.close();
});

await test("skip moves to the break without paying out", async () => {
  const { ctx, page } = await phone({ "tasksh.wallet.v1": JSON.stringify({ coins: 100 }) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openPomodoro(page);
  // achievements also mint coins on load, so only the delta means anything
  const before = await wallet(page);
  await page.getByRole("button", { name: "skip" }).click();
  await page.waitForTimeout(400);
  assert.match(await page.locator(".pomo-phase").innerText(), /short break/i);
  assert.equal(await clock(page), "05:00");
  assert.equal(await wallet(page), before, "skipping paid out");
  await ctx.close();
});

// ------------------------------------------------------------- settings ----

await test("editing a length sticks across a reload", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openPomodoro(page);
  await page.locator(".pomo-set", { hasText: "focus" }).getByRole("button").first().click();
  await page.getByRole("button", { name: "+5" }).first().click();
  await page.waitForTimeout(300);
  assert.equal(await clock(page), "30:00");

  await page.reload({ waitUntil: "networkidle" });
  await openPomodoro(page);
  assert.equal(await clock(page), "30:00", "the setting did not persist");
  await ctx.close();
});

await test("lengths cannot be pushed out of range", async () => {
  const { ctx, page } = await phone({
    "tasksh.pomodoro.v1": JSON.stringify({ settings: { work: 119, short: 5, long: 15, rounds: 4 } }),
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openPomodoro(page);
  await page.locator(".pomo-set", { hasText: "focus" }).getByRole("button").first().click();
  for (let i = 0; i < 3; i++) await page.getByRole("button", { name: "+5" }).first().click();
  await page.waitForTimeout(300);
  // 119 + 15 would be 134, but the cap is 120 minutes -> 2:00:00
  assert.equal(await clock(page), "2:00:00");
  await ctx.close();
});

// --------------------------------------------------- time spent elsewhere ---

await test("a block that ended while the app was closed pays out and advances", async () => {
  const { ctx, page } = await phone({
    "tasksh.wallet.v1": JSON.stringify({ coins: 100 }),
    "tasksh.pomodoro.v1": JSON.stringify({
      settings: { work: 25, short: 5, long: 15, rounds: 4 },
      session: { phase: "work", round: 1, running: true, endsAt: Date.now() - 90_000 },
    }),
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const before = await wallet(page);          // after achievements have settled
  await openPomodoro(page);
  await page.waitForTimeout(700);

  assert.match(await page.locator(".pomo-phase").innerText(), /short break/i);
  assert.equal(await wallet(page) - before, 25, "the finished block did not pay 25");
  await ctx.close();
});

await test("a block that ended hours ago pays nothing", async () => {
  // the phone was in a pocket, not on a desk
  const { ctx, page } = await phone({
    "tasksh.wallet.v1": JSON.stringify({ coins: 100 }),
    "tasksh.pomodoro.v1": JSON.stringify({
      settings: { work: 25, short: 5, long: 15, rounds: 4 },
      session: { phase: "work", round: 1, running: true, endsAt: Date.now() - 5 * 60 * 60 * 1000 },
    }),
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const before = await wallet(page);
  await openPomodoro(page);
  await page.waitForTimeout(700);

  assert.match(await page.locator(".pomo-phase").innerText(), /focus/i);
  assert.equal(await clock(page), "25:00");
  assert.equal(await wallet(page), before, "an abandoned block paid out");
  await ctx.close();
});

// ------------------------------------------------------- inventory edit ----

const INV = JSON.stringify([
  { id: 901, text: "watering plants", diff: "easy" },
  { id: 902, text: "100 pushups", diff: "hard" },
]);

await test("an inventory item can be renamed in place", async () => {
  const { ctx, page } = await phone({ "tasksh.inventory.v1": INV });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tasks" }).click();
  await page.waitForTimeout(300);

  await page.locator(".inv-tap", { hasText: "watering plants" }).click();
  await page.locator(".inv-edit-input").fill("watering the plants properly");
  await page.getByRole("button", { name: "save" }).click();
  await page.waitForTimeout(400);

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.inventory.v1")));
  assert.equal(stored.find((t) => t.id === 901).text, "watering the plants properly");
  await ctx.close();
});

await test("difficulty can be changed without deleting and re-adding", async () => {
  const { ctx, page } = await phone({ "tasksh.inventory.v1": INV });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tasks" }).click();
  await page.waitForTimeout(300);

  await page.locator(".inv-tap", { hasText: "watering plants" }).click();
  await page.locator(".inv-edit-chips").getByRole("button", { name: /hard/ }).click();
  await page.getByRole("button", { name: "save" }).click();
  await page.waitForTimeout(400);

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.inventory.v1")));
  assert.equal(stored.find((t) => t.id === 901).diff, "hard");
  await ctx.close();
});

await test("cancelling an edit changes nothing", async () => {
  const { ctx, page } = await phone({ "tasksh.inventory.v1": INV });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tasks" }).click();
  await page.waitForTimeout(300);

  await page.locator(".inv-tap", { hasText: "100 pushups" }).click();
  await page.locator(".inv-edit-input").fill("nonsense");
  await page.getByRole("button", { name: "cancel" }).click();
  await page.waitForTimeout(300);

  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.inventory.v1")));
  assert.equal(stored.find((t) => t.id === 902).text, "100 pushups");
  await ctx.close();
});

await test("an empty name is refused rather than saved", async () => {
  const { ctx, page } = await phone({ "tasksh.inventory.v1": INV });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tasks" }).click();
  await page.waitForTimeout(300);

  await page.locator(".inv-tap", { hasText: "100 pushups" }).click();
  await page.locator(".inv-edit-input").fill("   ");
  await page.getByRole("button", { name: "save" }).click();
  await page.waitForTimeout(300);

  assert.equal(await page.locator(".inv-edit-input").count(), 1, "the editor closed on an empty name");
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.inventory.v1")));
  assert.equal(stored.find((t) => t.id === 902).text, "100 pushups");
  await ctx.close();
});

console.log(results.join("\n"));
console.log(`  tools.spec.mjs — ${passed} passed`);
await browser.close();
server.close();
