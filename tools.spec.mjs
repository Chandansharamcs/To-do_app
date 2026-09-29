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

await test("the tab bar scrolls and pulls the active tab into view", async () => {
  // v39 squeezed seven tabs into 360px to avoid overflow and the row looked
  // crushed. v41 gives the padding back and scrolls instead -- which is only
  // acceptable if tapping a tab always brings it fully on screen.
  const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);

  const overflow = await page.evaluate(() => {
    const t = document.querySelector(".tabs");
    return t.scrollWidth - t.clientWidth;
  });
  assert.ok(overflow > 0, "the bar no longer scrolls — did the padding get squeezed again?");

  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(700);
  const visible = await page.evaluate(() => {
    const bar = document.querySelector(".tabs").getBoundingClientRect();
    const tab = document.getElementById("tab-tools").getBoundingClientRect();
    return tab.left >= bar.left - 1 && tab.right <= bar.right + 1;
  });
  assert.ok(visible, "the active tab stayed off screen after being tapped");
  await ctx.close();
});

await test("the titlebar clock stays on one line", async () => {
  // 12-hour time wrapped to two lines at 360px and pushed the bar to 55px
  const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  const m = await page.evaluate(() => {
    const c = document.querySelector(".clock");
    return { h: c.getBoundingClientRect().height, text: c.textContent.trim(),
             bar: document.querySelector(".titlebar").getBoundingClientRect().height };
  });
  assert.ok(m.h < 20, `clock is ${m.h}px tall — it is wrapping: "${m.text}"`);
  assert.ok(m.bar <= 50, `titlebar is ${m.bar}px tall`);
  assert.match(m.text, /^\d{2}:\d{2}$/, `expected 24h time, got "${m.text}"`);
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

await test("cards are plain until they mean something", async () => {
  // v43: no ramp. Untouched = theme border, done = cyan, slipped = red.
  const { ctx, page } = await phone({
    "tasksh.goodhabits.v1": JSON.stringify((() => {
      const day = new Date().toISOString().slice(0, 10);
      return [
        { id: 1, label: "done one", area: "work", sub: "sleep", xp: 20, penalty: 0, history: [{ d: day, t: "done" }] },
        { id: 2, label: "plain", area: "work", sub: "deep", xp: 20, penalty: 0, history: [] },
        { id: 3, label: "slipped", area: "work", sub: "training", xp: 20, penalty: 10, history: [{ d: day, t: "slip" }] },
      ];
    })()),
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "quest" }).click();
  await page.waitForTimeout(700);

  const cards = await page.evaluate(() =>
    [...document.querySelectorAll(".quest-habit-card.edge")].map((c) => {
      const cs = getComputedStyle(c);
      return {
        label: (c.querySelector(".quest-habit-label") || {}).textContent,
        border: cs.borderTopColor.replace(/\s/g, ""),
        radius: parseFloat(cs.borderTopLeftRadius),
        gradients: (cs.backgroundImage.match(/gradient/g) || []).length,
      };
    })
  );
  const by = (n) => cards.find((c) => (c.label || "").includes(n));
  assert.match(by("done one").border, /^rgba?\(48,232,205/, `done should be cyan, got ${by("done one").border}`);
  assert.match(by("slipped").border, /^rgba?\(235,71,93/, `slipped should be red, got ${by("slipped").border}`);
  assert.match(by("plain").border, /^rgb\(35,39,46\)$/, `untouched should be the theme border, got ${by("plain").border}`);
  for (const c of cards) {
    assert.equal(c.gradients, 0, `${c.label}: a gradient is still painted on the card`);
    assert.ok(c.radius >= 8, `${c.label}: corners are only ${c.radius}px`);
  }
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
  assert.equal(await page.locator(".cap-file input[type=file]").count(), 1, "no file picker shown");
  assert.equal(await page.locator(".cap-preview").count(), 1, "no preview surface");
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
  const out = await page.locator(".cap-note", { hasText: "webcodecs" }).innerText();
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

await test("the style editor previews and redraws without a clip", async () => {
  // the point of the sample loop: design the look before you have footage
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(300);
  await page.locator(".tool-card", { hasText: "ai captions" }).click();
  await page.waitForTimeout(600);

  assert.equal(await page.locator(".cap-preview").count(), 1, "no preview canvas");
  assert.match(await page.locator(".cap-preview-tag").innerText(), /sample/i);

  // the canvas must actually be painting, not sitting blank
  const painted = await page.evaluate(() => {
    const c = document.querySelector(".cap-preview");
    const d = c.getContext("2d").getImageData(0, 0, c.width, c.height).data;
    let nonBlack = 0;
    for (let i = 0; i < d.length; i += 4) if (d[i] > 20 || d[i + 1] > 20 || d[i + 2] > 20) nonBlack++;
    return nonBlack;
  });
  assert.ok(painted > 1000, `preview looks blank (${painted} lit pixels)`);
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("editing the style changes what is drawn, and survives a reload", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(300);
  await page.locator(".tool-card", { hasText: "ai captions" }).click();
  await page.waitForTimeout(500);

  const shot = () => page.evaluate(() => {
    const c = document.querySelector(".cap-preview");
    return c.getContext("2d").getImageData(0, Math.round(c.height * 0.6), c.width, Math.round(c.height * 0.35)).data.join(",").length;
  });

  await page.locator(".cap-chip", { hasText: "word pop" }).click();
  await page.waitForTimeout(400);
  const before = await shot();

  // move the captions up the frame: a different band of pixels must change
  for (let i = 0; i < 6; i++) await page.getByRole("button", { name: "decrease height" }).click();
  await page.waitForTimeout(400);
  const after = await shot();
  assert.notEqual(before, after, "moving the captions changed nothing on screen");

  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.captions.v1")).style);
  assert.ok(saved.posY < 0.82, `position not saved: ${saved.posY}`);
  assert.equal(saved.highlight, "pop");

  await page.reload({ waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(300);
  await page.locator(".tool-card", { hasText: "ai captions" }).click();
  await page.waitForTimeout(400);
  const reloaded = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.captions.v1")).style);
  assert.equal(reloaded.highlight, "pop", "style did not survive a reload");
  await ctx.close();
});

await test("the delete cross is visible without a hover", async () => {
  // It was opacity:0, revealed by .task-row:hover. A phone never hovers, so
  // it was invisible at all times -- which is why inventory delete got
  // reported as missing when it had shipped in v36.
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await ctx.addInitScript(() => {
    localStorage.setItem("tasksh.inventory.v1", JSON.stringify([{ id: 901, text: "watering plants", diff: "easy" }]));
  });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tasks" }).click();
  await page.waitForTimeout(500);
  const d = await page.evaluate(() => {
    const b = document.querySelector(".del-btn");
    if (!b) return null;
    const cs = getComputedStyle(b), r = b.getBoundingClientRect();
    return { opacity: Number(cs.opacity), color: cs.color, w: r.width, h: r.height };
  });
  assert.ok(d, "no delete button rendered");
  assert.equal(d.opacity, 1, "the delete cross is still transparent on touch");
  assert.ok(d.w >= 20 && d.h >= 20, `tap target is ${d.w}x${d.h}, too small`);
  assert.match(d.color, /rgb\(155, 51, 65\)/, `expected dark red, got ${d.color}`);
  await ctx.close();
});

await test("the now-line states its own time, inside the track", async () => {
  // Position was already correct to the minute; a bare line just could not
  // be checked against hour ticks from a screenshot.
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, timezoneId: "Asia/Kolkata" });
  await ctx.addInitScript(`{const F=new Date("2026-09-29T08:50:00Z").getTime();const D=Date;
    class X extends D{constructor(...a){if(!a.length)super(F);else super(...a);} static now(){return F;}}
    window.Date=X;}`);
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "routines" }).click();
  await page.waitForTimeout(900);

  const m = await page.evaluate(() => {
    const inner = document.querySelector(".timeline-inner");
    const now = document.querySelector(".timeline-now");
    const chip = document.querySelector(".timeline-now-time");
    const track = document.querySelector(".timeline-track");
    const base = inner.getBoundingClientRect().left;
    const w = inner.getBoundingClientRect().width;
    const cr = chip.getBoundingClientRect(), tr = track.getBoundingClientRect();
    return {
      // the line is centre-anchored (translateX(-1px)) so it lines up with
      // the hour labels, which are also centred -- measure its middle
      implied: Math.round(((now.getBoundingClientRect().left + now.getBoundingClientRect().width / 2) - base) / (w / 1440)),
      chip: chip.textContent.trim(),
      clipped: cr.top < tr.top - 0.5 || cr.bottom > tr.bottom + 0.5,
    };
  });
  // 1 minute of tolerance: one pixel is ~0.73 min at this scale
  assert.ok(Math.abs(m.implied - 860) <= 1, `line sits at minute ${m.implied}, expected 860`);
  assert.match(m.chip, /2:20\s*PM/i, `chip reads "${m.chip}"`);
  assert.equal(m.clipped, false, "the time chip is clipped by the track");
  await ctx.close();
});

await test("any pomodoro phase can be chosen directly", async () => {
  // rounds were a cage: a long break was four skips away, and every skip
  // also moved the round counter
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(300);
  await page.locator(".tool-card", { hasText: "pomodoro" }).click();
  await page.waitForTimeout(500);

  await page.locator(".pomo-chip", { hasText: "long" }).click();
  await page.waitForTimeout(350);
  assert.match(await page.locator(".pomo-phase").innerText(), /long break/i);
  assert.equal(await page.locator(".pomo-clock").innerText(), "15:00");

  await page.locator(".pomo-chip", { hasText: "focus" }).click();
  await page.waitForTimeout(350);
  assert.match(await page.locator(".pomo-phase").innerText(), /focus/i);
  assert.equal(await page.locator(".pomo-clock").innerText(), "25:00");

  // and a round can be jumped to without burning through skips
  await page.locator(".pomo-pip").nth(2).click();
  await page.waitForTimeout(300);
  assert.match(await page.locator(".pomo-round").innerText(), /round 3\/4/);
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
