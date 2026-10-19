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

await test("navigation sits at the bottom, as icons, with real tap targets", async () => {
  // v44 replaced the scrolling top bar. Seven targets across 360px is 51px
  // each, which clears the 44px minimum -- so this asserts the thing that
  // made scrolling unnecessary, not that scrolling still works.
  const ctx = await browser.newContext({ viewport: { width: 360, height: 800 }, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  const m = await page.evaluate(() => {
    const bar = document.querySelector(".tabs");
    const panel = document.querySelector(".panel");
    const btns = [...bar.querySelectorAll("button")];
    const r = (el) => el.getBoundingClientRect();
    return {
      atBottom: Math.abs(r(bar).bottom - r(panel).bottom) < 4,
      overflow: bar.scrollWidth - bar.clientWidth,
      count: btns.length,
      minW: Math.min(...btns.map((b) => r(b).width)),
      minH: Math.min(...btns.map((b) => r(b).height)),
      allIcons: btns.every((b) => !!b.querySelector("svg")),
      labelled: btns.every((b) => (b.getAttribute("aria-label") || "").length > 0),
    };
  });

  assert.equal(m.atBottom, true, "the bar is not at the bottom of the panel");
  assert.equal(m.overflow, 0, `the bottom bar overflows by ${m.overflow}px`);
  assert.equal(m.allIcons, true, "a tab has no icon");
  assert.equal(m.labelled, true, "an icon-only tab has no accessible name");
  assert.ok(m.minW >= 44, `tap target only ${m.minW}px wide`);
  assert.ok(m.minH >= 44, `tap target only ${m.minH}px tall`);
  await ctx.close();
});

await test("the achievement toast does not sit on the navigation", async () => {
  // it moved to the bottom in v41, before there was anything down there
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1400);
  const clash = await page.evaluate(() => {
    const t = document.querySelector(".ach-toast");
    if (!t) return null;
    const bar = document.querySelector(".tabs");
    return t.getBoundingClientRect().bottom > bar.getBoundingClientRect().top + 1;
  });
  if (clash !== null) assert.equal(clash, false, "the toast is covering the tab bar");
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

// ----------------------------------------------------- rngdle infinite ----

const openRngdle = async (page) => {
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(250);
  await page.locator(".tool-card", { hasText: "rngdle" }).click();
  await page.waitForTimeout(350);
};
const bank = (page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.rngdle.v2") || '{"ep":0}').ep);
/** Roll and wait out the reveal + cooldown (3s + 4s at the base pace). */
const rollOnce = async (page) => {
  await page.getByRole("button", { name: /GENERATE|ROLL AGAIN/ }).click();
  await page.waitForTimeout(7400);
};

await test("rngdle infinite is in the grid and opens", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  assert.equal(await page.locator(".rngi").count(), 1);
  assert.equal(await page.getByRole("button", { name: "GENERATE" }).count(), 1);
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("a roll produces a number, a band, badges and banked EP", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  await rollOnce(page);
  const num = (await page.locator(".rngi-digits").innerText()).replace(/\s/g, "");
  assert.match(num, /^[\d,]+$/, `number looked wrong: ${num}`);
  assert.equal(await page.locator(".rngi-band").count(), 1);
  assert.ok(await page.locator(".rngi-chip").count() > 0, "no badges rendered");
  assert.ok(await bank(page) > 0, "nothing was banked");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("there is no daily limit -- the button comes back", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  await rollOnce(page);
  const first = await bank(page);
  assert.equal(await page.getByRole("button", { name: "ROLL AGAIN" }).count(), 1,
    "the second roll was not offered");
  await rollOnce(page);
  assert.ok(await bank(page) > first, "the second roll banked nothing");
  await ctx.close();
});

await test("the cooldown actually blocks a second roll", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  await page.getByRole("button", { name: "GENERATE" }).click();
  await page.waitForTimeout(600);
  assert.equal(await page.getByRole("button", { name: /GENERATE|ROLL AGAIN/ }).count(), 0,
    "the roll button survived into the cooldown");
  assert.equal(await page.locator(".rngi-wait").count(), 1, "no countdown shown");
  await ctx.close();
});

await test("EP survives a reload and the wallet shows it", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  await rollOnce(page);
  const ep = await bank(page);
  await page.reload({ waitUntil: "networkidle" });
  await openRngdle(page);
  assert.equal(await bank(page), ep, "EP moved across a reload");
  assert.ok((await page.locator(".rngi-wallet-ep").innerText()).length > 0);
  await ctx.close();
});

await test("the shop refuses what you cannot afford and takes the money when you can", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  await page.locator(".rngi-tabs button", { hasText: "shop" }).click();
  await page.waitForTimeout(250);
  const buy = page.locator(".rngi-item", { hasText: "Quickwind I" }).getByRole("button", { name: "buy" });
  assert.ok(await buy.isDisabled(), "a broke player was offered the buy button");

  await page.evaluate(() => {
    const s = JSON.parse(localStorage.getItem("tasksh.rngdle.v2") || "{}");
    localStorage.setItem("tasksh.rngdle.v2", JSON.stringify({ ...s, ep: 500000 }));
  });
  await page.reload({ waitUntil: "networkidle" });
  await openRngdle(page);
  await page.locator(".rngi-tabs button", { hasText: "shop" }).click();
  await page.waitForTimeout(250);
  await page.locator(".rngi-item", { hasText: "Quickwind I" }).getByRole("button", { name: "buy" }).click();
  await page.waitForTimeout(300);

  const after = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.rngdle.v2")));
  assert.equal(after.ep, 470000, "the price was not taken");
  assert.ok(after.owned.includes("quickwind-1"));
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("a bought upgrade actually shortens the reveal", async () => {
  const { ctx, page } = await phone({
    "tasksh.rngdle.v2": JSON.stringify({ ep: 0, owned: ["quickwind-4", "clockwork-6"], pets: [], skills: [], seen: {}, history: [] }),
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  assert.match(await page.locator(".rngi-pace").innerText(), /reveal 0\.6s/);
  // 0.6s reveal + 0.12s cooldown: the button must be back well inside a second
  await page.getByRole("button", { name: "GENERATE" }).click();
  await page.waitForTimeout(1200);
  assert.equal(await page.getByRole("button", { name: "ROLL AGAIN" }).count(), 1,
    "the fast clock did not apply");
  await ctx.close();
});

await test("the collection fills in as badges turn up", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  await page.locator(".rngi-tabs button", { hasText: "badges" }).click();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".rngi-cell").count(), 235, "235 badges including the two Infinite ones");
  assert.equal(await page.locator(".rngi-cell.got").count(), 0, "a fresh save owns nothing");

  await page.locator(".rngi-tabs button", { hasText: "roll" }).click();
  await rollOnce(page);
  await page.locator(".rngi-tabs button", { hasText: "badges" }).click();
  await page.waitForTimeout(300);
  assert.ok(await page.locator(".rngi-cell.got").count() > 0, "the roll collected nothing");
  await ctx.close();
});

await test("the rack only arms a skill that is charged", async () => {
  // Two contexts, not a reload: phone()'s seed is an addInitScript, so it
  // re-runs on every navigation and would quietly undo a mid-test change.
  const save = (charges) => ({
    "tasksh.rngdle.v2": JSON.stringify({
      ep: 0, owned: [], pets: [], skills: ["surge"], charges,
      armed: [], seen: {}, history: [],
    }),
  });

  const cold = await phone(save({ surge: 1 }));
  await cold.page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(cold.page);
  const skill = cold.page.locator(".rngi-skill", { hasText: "Surge" });
  assert.equal(await skill.count(), 1, "an owned skill is missing from the rack");
  assert.equal(await cold.page.locator(".rngi-skill.ready").count(), 0, "1/5 should not read as ready");
  await skill.click();
  await cold.page.waitForTimeout(200);
  assert.equal(await cold.page.locator(".rngi-skill.armed").count(), 0, "an uncharged skill armed");
  await cold.ctx.close();

  const hot = await phone(save({ surge: 99 }));
  await hot.page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(hot.page);
  assert.equal(await hot.page.locator(".rngi-skill.ready").count(), 1, "a full charge does not read as ready");
  await hot.page.locator(".rngi-skill", { hasText: "Surge" }).click();
  await hot.page.waitForTimeout(200);
  assert.equal(await hot.page.locator(".rngi-skill.armed").count(), 1, "a charged skill would not arm");
  await hot.ctx.close();
});

await test("the stats page admits what a multiplier does and does not touch", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  await page.locator(".rngi-tabs button", { hasText: "stats" }).click();
  await page.waitForTimeout(300);
  const text = await page.locator(".rngi").innerText();
  assert.match(text, /wallet/i);
  assert.match(text, /jaime-gaming/, "the port is not credited");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("offline earnings are offered, not silently banked", async () => {
  const { ctx, page } = await phone({
    "tasksh.rngdle.v2": JSON.stringify({
      ep: 0, owned: ["offline-roller"], pets: [], skills: [], seen: {}, history: [],
      lastSeen: Date.now() - 3600000,
    }),
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openRngdle(page);
  assert.equal(await page.locator(".rngi-offline").count(), 1, "no offline banner after an hour away");
  assert.equal(await bank(page), 0, "offline EP was banked without asking");
  await page.getByRole("button", { name: "collect" }).click();
  await page.waitForTimeout(300);
  assert.ok(await bank(page) > 0, "collect paid nothing");
  assert.equal(await page.locator(".rngi-offline").count(), 0);
  await ctx.close();
});

// ------------------------------------------------------- today's quests ----

const INV2 = JSON.stringify([
  { id: 701, text: "ten pullups", diff: "hard" },
  { id: 702, text: "read a chapter", diff: "mid" },
  { id: 703, text: "wash up", diff: "easy" },
]);

await test("today's quests show up in the Today tab's open tasks", async () => {
  const { ctx, page, errors } = await phone({ "tasksh.inventory.v1": INV2 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const rows = page.locator(".today-task-row.quest");
  assert.equal(await rows.count(), 3, "three difficulties, three rows");
  assert.ok((await page.locator(".today-list").innerText()).includes("ten pullups"));
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("completing a quest from Today pays, and the Tasks board agrees", async () => {
  const { ctx, page } = await phone({ "tasksh.inventory.v1": INV2 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const before = await wallet(page);
  await page.locator(".today-task-row.quest").first().locator(".today-task-check").click();
  await page.waitForTimeout(350);
  assert.ok(await wallet(page) > before, "no coins for the quest");

  await page.getByRole("tab", { name: "tasks" }).click();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".daily-card.done").count(), 1, "the quest board did not see it");
  await ctx.close();
});

await test("a completed quest cannot be paid for twice from the other screen", async () => {
  const { ctx, page } = await phone({ "tasksh.inventory.v1": INV2 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.locator(".today-task-row.quest").first().locator(".today-task-check").click();
  await page.waitForTimeout(350);
  const after = await wallet(page);

  await page.locator(".today-task-row.quest").first().locator(".today-task-check").click();
  await page.waitForTimeout(250);
  await page.getByRole("tab", { name: "tasks" }).click();
  await page.waitForTimeout(250);
  await page.locator(".daily-card.done").click({ force: true });
  await page.waitForTimeout(250);
  assert.equal(await wallet(page), after, "the same quest paid out twice");
  await ctx.close();
});

// ------------------------------------------------------------- the rest ----

// ------------------------------------------------------------ expenses ----

const openExpenses = async (page) => {
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(250);
  await page.locator(".tool-card", { hasText: "expenses" }).click();
  await page.waitForTimeout(350);
};
const saved = (page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.expenses.v1") || '{"items":[]}'));
const tap = async (page, ...keys) => {
  for (const k of keys) {
    const name = k === "del" ? "Delete" : k === "+" ? "Plus" : k === "-" ? "Minus" : k;
    await page.locator(".xp-key").getByText(k === "del" ? "⌫" : k === "-" ? "−" : k, { exact: true }).first().click();
  }
};

await test("the expense tool is in the grid and opens on the keypad", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  assert.equal(await page.locator(".xp").count(), 1);
  assert.equal(await page.locator(".xp-key").count(), 15, "12 digits, 3 operators/actions");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("tapping digits and add stores one expense in minor units", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await tap(page, "2", "4", "0");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(300);

  const s = await saved(page);
  assert.equal(s.items.length, 1);
  assert.equal(s.items[0].amt, 24000, "₹240 must store as 24000 paise");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("the running total is shown before it is committed", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await tap(page, "1", "2", "0", "+", "4", "5");
  await page.waitForTimeout(150);
  assert.match(await page.locator(".xp-amount-sum").innerText(), /165/, "the sum was not previewed");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(300);
  assert.equal((await saved(page)).items[0].amt, 16500);
  await ctx.close();
});

await test("add is refused until the amount is readable", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  const add = page.locator(".xp-key.add");
  assert.ok(await add.isDisabled(), "an empty amount was addable");
  await tap(page, "5", "+");
  await page.waitForTimeout(150);
  assert.ok(await add.isDisabled(), "a trailing operator was addable");
  await tap(page, "5");
  await page.waitForTimeout(150);
  assert.ok(!(await add.isDisabled()));
  await ctx.close();
});

await test("the chosen category is the one that gets stored", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-cat", { hasText: "transport" }).click();
  await tap(page, "6", "0");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(300);
  assert.equal((await saved(page)).items[0].cat, "transport");
  await ctx.close();
});

await test("an expense survives a reload and shows in the month total", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await tap(page, "1", "0", "0");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(300);
  await page.reload({ waitUntil: "networkidle" });
  await openExpenses(page);
  assert.match(await page.locator(".xp-month-total").innerText(), /100/);
  await ctx.close();
});

await test("repeat logs the same thing again without retyping it", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await tap(page, "3", "0");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(300);
  await page.locator(".xp-again-btn").first().click();
  await page.waitForTimeout(300);
  const s = await saved(page);
  assert.equal(s.items.length, 2);
  assert.equal(s.items[0].amt, s.items[1].amt);
  await ctx.close();
});

const XP_SEED = (() => {
  const pad = (n) => String(n).padStart(2, "0");
  return (y, m) => JSON.stringify({
    currency: "₹",
    items: [
      { id: "a", d: `${y}-${pad(m)}-01`, amt: 20000, cat: "food", note: "lunch", at: 1 },
      { id: "b", d: `${y}-${pad(m)}-01`, amt: 5000, cat: "transport", note: "auto", at: 2 },
      { id: "c", d: `${y}-${pad(m)}-02`, amt: 100000, cat: "bills", note: "electricity", at: 3 },
    ],
  });
})();

await test("the report draws a bar for every day of the month", async () => {
  const { page: probe, ctx: probeCtx } = await phone();
  await probe.goto(BASE, { waitUntil: "networkidle" });
  const [y, m] = (await probe.evaluate(() =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date())
  )).split("-").map(Number);
  await probeCtx.close();

  const { ctx, page, errors } = await phone({ "tasksh.expenses.v1": XP_SEED(y, m) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "month" }).click();
  await page.waitForTimeout(600);

  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  assert.equal(await page.locator(".xp-bar").count(), days, "a missing day would read as a gap");
  assert.equal(await page.locator(".xp-legend-row").count(), 3, "three categories used");
  assert.deepEqual(errors.filter((e) => !/favicon|manifest|sw\.js/i.test(e)), []);
  await ctx.close();
});

await test("tapping a bar opens that day's entries", async () => {
  const { page: probe, ctx: probeCtx } = await phone();
  await probe.goto(BASE, { waitUntil: "networkidle" });
  const [y, m] = (await probe.evaluate(() =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date())
  )).split("-").map(Number);
  await probeCtx.close();

  const { ctx, page } = await phone({ "tasksh.expenses.v1": XP_SEED(y, m) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "month" }).click();
  await page.waitForTimeout(600);
  await page.locator(".xp-bar").first().click();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".xp-day-pop").count(), 1);
  assert.equal(await page.locator(".xp-day-row").count(), 2, "the 1st has two entries");
  await ctx.close();
});

await test("history groups by day and swipe-left deletes one", async () => {
  const { page: probe, ctx: probeCtx } = await phone();
  await probe.goto(BASE, { waitUntil: "networkidle" });
  const [y, m] = (await probe.evaluate(() =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date())
  )).split("-").map(Number);
  await probeCtx.close();

  const { ctx, page } = await phone({ "tasksh.expenses.v1": XP_SEED(y, m) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "history" }).click();
  await page.waitForTimeout(400);
  assert.equal(await page.locator(".xp-group").count(), 2, "two days with spending");
  assert.equal(await page.locator(".xp-row").count(), 3);

  const row = page.locator(".xp-row").first();
  await row.scrollIntoViewIfNeeded();
  await page.waitForTimeout(120);
  const box = await row.boundingBox();
  const yy = box.y + box.height / 2, x0 = box.x + box.width - 18;
  await page.mouse.move(x0, yy);
  await page.mouse.down();
  for (let i = 1; i <= 8; i++) await page.mouse.move(x0 - (120 * i) / 8, yy, { steps: 1 });
  await page.mouse.up();
  await page.waitForTimeout(400);

  assert.equal((await saved(page)).items.length, 2, "swipe left did not delete");
  await ctx.close();
});

await test("the currency choice applies everywhere and sticks", async () => {
  const { page: probe, ctx: probeCtx } = await phone();
  await probe.goto(BASE, { waitUntil: "networkidle" });
  const [y, m] = (await probe.evaluate(() =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date())
  )).split("-").map(Number);
  await probeCtx.close();

  const { ctx, page } = await phone({ "tasksh.expenses.v1": XP_SEED(y, m) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "history" }).click();
  await page.waitForTimeout(300);
  await page.locator(".xp-cur-pick button", { hasText: "$" }).click();
  await page.waitForTimeout(300);
  assert.match(await page.locator(".xp-month-total").innerText(), /^\$/);
  assert.equal((await saved(page)).currency, "$");
  await ctx.close();
});

await test("an empty month says so rather than drawing an empty chart", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-month button").first().click();   // last month
  await page.waitForTimeout(300);
  await page.locator(".xp-tabs button", { hasText: "month" }).click();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".xp-bars").count(), 0);
  assert.match(await page.locator(".empty-state").innerText(), /nothing logged/);
  await ctx.close();
});

await test("the month cannot be stepped into the future", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  assert.ok(await page.locator(".xp-month button").last().isDisabled(), "next month was offered");
  await page.locator(".xp-month button").first().click();
  await page.waitForTimeout(250);
  assert.ok(!(await page.locator(".xp-month button").last().isDisabled()));
  await ctx.close();
});

// --------------------------------------------------------------- sound ----

const sndCfg = (page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.soundcfg.v1") || "null"));

/** Counts sound SOURCES the page builds, by wrapping AudioContext before any
 *  app code runs. Both kinds are counted: half the palette is filtered noise
 *  through a buffer source rather than an oscillator, and counting only
 *  oscillators made "tapping a tab makes a sound" fail against a tab change
 *  that correctly played a noise whoosh. */
const countAudio = () => `
  window.__osc = 0;
  const C = window.AudioContext || window.webkitAudioContext;
  function Patched() {
    const ctx = new C();
    for (const fn of ["createOscillator", "createBufferSource"]) {
      const orig = ctx[fn].bind(ctx);
      ctx[fn] = () => { window.__osc++; return orig(); };
    }
    return ctx;
  }
  window.AudioContext = Patched;
  window.webkitAudioContext = Patched;
`;

await test("the sound panel lives in the vault and defaults to silence", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "vault" }).click();
  await page.waitForTimeout(350);
  assert.equal(await page.locator(".snd").count(), 1, "no sound panel in the vault");
  assert.equal(await page.locator(".snd-scenes button.on").first().innerText(), "off",
    "the ambient bed must not be on by default");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("choosing an ambient scene sticks across a reload", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "vault" }).click();
  await page.waitForTimeout(350);
  await page.locator(".snd-scenes button", { hasText: "rain" }).click();
  await page.waitForTimeout(300);
  assert.equal((await sndCfg(page)).ambient, "rain");

  await page.reload({ waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "vault" }).click();
  await page.waitForTimeout(350);
  assert.equal(await page.locator(".snd-scenes button.on").first().innerText(), "rain");
  await ctx.close();
});

await test("the alarm length is a setting, and silent is one of the choices", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "vault" }).click();
  await page.waitForTimeout(350);
  assert.equal((await sndCfg(page) || {}).alarmSeconds ?? 10, 10, "10s should be the default");
  await page.locator(".snd-scenes button", { hasText: "silent" }).click();
  await page.waitForTimeout(250);
  assert.equal((await sndCfg(page)).alarmSeconds, 0);
  await ctx.close();
});

await test("the ring can be tested and stopped from the panel", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "vault" }).click();
  await page.waitForTimeout(350);
  await page.locator(".snd-test").click();
  await page.waitForTimeout(400);
  assert.equal(await page.locator(".snd-test.on").count(), 1, "the test button did not arm");
  await page.locator(".snd-test").click();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".snd-test.on").count(), 0, "a ten-second ring could not be stopped");
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("muting silences the app, including a running ambient bed", async () => {
  const ctxx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctxx.route("**/tasksh-notify.techcraftor.workers.dev/**", (r) =>
    r.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  await ctxx.addInitScript(countAudio());
  const page = await ctxx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });

  await page.getByRole("tab", { name: "vault" }).click();
  await page.waitForTimeout(350);
  await page.locator(".snd-scenes button", { hasText: "rain" }).click();
  await page.waitForTimeout(400);

  await page.locator(".snd-mute").click();          // mute
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".snd-mute.on").count(), 0, "mute did not take");

  const before = await page.evaluate(() => window.__osc);
  await page.getByRole("tab", { name: "today" }).click();
  await page.getByRole("tab", { name: "quest" }).click();
  await page.waitForTimeout(400);
  const after = await page.evaluate(() => window.__osc);
  assert.equal(after, before, "a muted app still built oscillators");
  await ctxx.close();
});

await test("unmuted, tapping about actually makes sound", async () => {
  const ctxx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctxx.route("**/tasksh-notify.techcraftor.workers.dev/**", (r) =>
    r.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  await ctxx.addInitScript(countAudio());
  const page = await ctxx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("tab", { name: "quest" }).click();
  await page.waitForTimeout(400);
  assert.ok(await page.evaluate(() => window.__osc) > 0, "the app made no sound at all");
  await ctxx.close();
});

// ------------------------------------------- v48: named items + year ----

/** A seed with real history: two years, repeated names, several categories. */
const XP_HISTORY = (y) => JSON.stringify({
  currency: "₹",
  items: [
    { id: "n1", d: `${y}-01-05`, amt: 4000, cat: "food", note: "sweets", at: 101 },
    { id: "n2", d: `${y}-01-20`, amt: 6000, cat: "food", note: "Sweets ", at: 102 },
    { id: "n3", d: `${y}-03-02`, amt: 20000, cat: "bills", note: "wifi", at: 103 },
    { id: "n4", d: `${y}-03-11`, amt: 2500, cat: "transport", note: "auto", at: 104 },
    { id: "n5", d: `${y - 1}-11-09`, amt: 9000, cat: "food", note: "groceries", at: 105 },
  ],
});

const thisYear = async () => {
  const { page, ctx } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  const d = await page.evaluate(() =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date()));
  await ctx.close();
  return Number(d.slice(0, 4));
};

await test("a name you have used before is offered back as you type", async () => {
  const { ctx, page, errors } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await tap(page, "4", "0");
  await page.locator(".xp-note").fill("sweets");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(350);

  await page.locator(".xp-note").fill("sw");
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".xp-hint").count(), 1, "no suggestion after using a name once");
  assert.match(await page.locator(".xp-hint-name").innerText(), /sweets/i);
  assert.deepEqual(errors, []);
  await ctx.close();
});

await test("tapping a suggestion fills the name, the category and the price", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  // log "petrol" as transport at 1100
  await page.locator(".xp-cat", { hasText: "transport" }).click();
  await tap(page, "1", "1", "0", "0");
  await page.locator(".xp-note").fill("petrol");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(350);

  // now start a fresh one under a different category
  await page.locator(".xp-cat", { hasText: "food" }).click();
  await page.locator(".xp-note").fill("pet");
  await page.waitForTimeout(250);
  await page.locator(".xp-hint").first().click();
  await page.waitForTimeout(250);

  assert.equal(await page.locator(".xp-note").inputValue(), "petrol");
  // the button renders a glyph alongside the label, so match rather than equal
  assert.match(await page.locator(".xp-cat.on").innerText(), /transport/,
    "the suggestion did not carry its category back");
  assert.match(await page.locator(".xp-amount").innerText(), /1100/, "the usual price was not filled in");
  await ctx.close();
});

await test("the same name in different cases is one item, not two", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  for (const [amt, name] of [["40", "sweets"], ["60", "Sweets"]]) {
    await tap(page, ...amt.split(""));
    await page.locator(".xp-note").fill(name);
    await page.locator(".xp-key.add").click();
    await page.waitForTimeout(300);
  }
  await page.locator(".xp-tabs button", { hasText: "month" }).click();
  await page.waitForTimeout(500);
  const rows = await page.locator(".xp-name-row").allInnerTexts();
  assert.equal(rows.length, 1, `"sweets" and "Sweets" rendered as ${rows.length} items`);
  assert.match(rows[0], /×2/);
  await ctx.close();
});

await test("the year view draws twelve bars whatever is in it", async () => {
  const y = await thisYear();
  const { ctx, page, errors } = await phone({ "tasksh.expenses.v1": XP_HISTORY(y) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "year" }).click();
  await page.waitForTimeout(700);
  assert.equal(await page.locator(".xp-year-bar").count(), 12, "a missing month reads as a gap");
  assert.match(await page.locator(".xp-year-total").innerText(), /^₹/);
  assert.deepEqual(errors.filter((e) => !/favicon|manifest|sw\.js/i.test(e)), []);
  await ctx.close();
});

await test("both years are offered and switching changes the total", async () => {
  const y = await thisYear();
  const { ctx, page } = await phone({ "tasksh.expenses.v1": XP_HISTORY(y) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "year" }).click();
  await page.waitForTimeout(600);
  assert.equal(await page.locator(".xp-years button").count(), 2);
  const a = await page.locator(".xp-year-total").innerText();
  await page.locator(".xp-years button", { hasText: String(y - 1) }).click();
  await page.waitForTimeout(500);
  assert.notEqual(await page.locator(".xp-year-total").innerText(), a);
  await ctx.close();
});

await test("tapping a month bar opens that month", async () => {
  const y = await thisYear();
  const { ctx, page } = await phone({ "tasksh.expenses.v1": XP_HISTORY(y) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "year" }).click();
  await page.waitForTimeout(600);
  await page.locator(".xp-year-bar").nth(2).click();      // march, which has data
  await page.waitForTimeout(600);
  assert.match(await page.locator(".xp-month-label").innerText(), /mar/);
  assert.equal(await page.locator(".xp-bars").count(), 1, "it did not land on the month report");
  await ctx.close();
});

await test("an empty month bar does not navigate anywhere", async () => {
  const y = await thisYear();
  const { ctx, page } = await phone({ "tasksh.expenses.v1": XP_HISTORY(y) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "year" }).click();
  await page.waitForTimeout(600);
  await page.locator(".xp-year-bar").nth(1).click();      // february, empty
  await page.waitForTimeout(400);
  assert.equal(await page.locator(".xp-year-bars").count(), 1, "an empty month navigated away");
  await ctx.close();
});

await test("the all-time line appears once there are two months", async () => {
  const y = await thisYear();
  const { ctx, page } = await phone({ "tasksh.expenses.v1": XP_HISTORY(y) });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "year" }).click();
  await page.waitForTimeout(700);
  assert.equal(await page.locator(".xp-line").count(), 1, "no all-time line");
  const ends = await page.locator(".xp-line-ends span").allInnerTexts();
  assert.equal(ends.length, 3);
  assert.match(ends[0], /^\d{4}-\d{2}$/);
  await ctx.close();
});

await test("named spending survives a reload", async () => {
  const { ctx, page } = await phone();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await openExpenses(page);
  await tap(page, "7", "5");
  await page.locator(".xp-note").fill("sweets");
  await page.locator(".xp-key.add").click();
  await page.waitForTimeout(350);
  await page.reload({ waitUntil: "networkidle" });
  await openExpenses(page);
  await page.locator(".xp-tabs button", { hasText: "month" }).click();
  await page.waitForTimeout(500);
  assert.match((await page.locator(".xp-names").innerText()), /sweets/i);
  await ctx.close();
});

console.log(results.join("\n"));
console.log(`  tools.spec.mjs — ${passed} passed`);
await browser.close();
server.close();
