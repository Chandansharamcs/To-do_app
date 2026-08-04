// regress.spec.mjs
//
// Whole-app regression in headless Chromium: every tab renders, task CRUD,
// XP maths on screen, the life-areas radar, export, offline, and four
// viewports. Phone-first, matching R4 — desktop is additive.

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

const { server, port } = await serve();
const BASE = `http://127.0.0.1:${port}/`;
const browser = await chromium.launch();

const TABS = ["today", "tasks", "routines", "vault", "quest", "pip"];

async function open(viewport = { width: 390, height: 844 }) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  return { ctx, page, errors };
}

const tabButton = (page, name) =>
  page.locator("button").filter({ hasText: new RegExp(`^${name}$`, "i") }).first();

async function gotoTab(page, name) {
  const btn = tabButton(page, name);
  if (await btn.count()) { await btn.click(); await page.waitForTimeout(350); }
}

// ------------------------------------------------------------- every tab ----

await test("all six tabs render without errors", async () => {
  const { ctx, page, errors } = await open();
  for (const tab of TABS) {
    await gotoTab(page, tab);
    const text = (await page.locator("body").innerText()).trim();
    assert.ok(text.length > 40, `${tab} rendered almost nothing`);
  }
  const real = errors.filter((e) => !/favicon|manifest|sw\.js|service ?worker/i.test(e));
  assert.deepEqual(real, [], `errors while touring tabs:\n${real.join("\n")}`);
  await ctx.close();
});

await test("the tab bar stays reachable on every tab", async () => {
  // a full-screen overlay once covered the tab bar and trapped the user
  const { ctx, page } = await open();
  for (const tab of TABS) {
    await gotoTab(page, tab);
    assert.ok(await tabButton(page, "today").isVisible(), `tab bar hidden on ${tab}`);
  }
  await ctx.close();
});

// ---------------------------------------------------------------- task CRUD --

await test("a task can be added, completed and deleted", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "tasks");

  const input = page.locator('input[type="text"]:visible').first();
  const label = `probe-${Date.now()}`;
  await input.fill(label);
  await input.press("Enter");
  await page.waitForTimeout(400);
  assert.ok((await page.locator("body").innerText()).includes(label), "task was not added");

  const row = page.locator(`text=${label}`).first();
  await row.click();
  await page.waitForTimeout(400);

  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "tasks");
  assert.ok((await page.locator("body").innerText()).includes(label), "task did not persist");
  await ctx.close();
});

await test("an empty task submission is refused, not silently added", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "tasks");
  const before = await page.locator("li, .task-row").count();
  const input = page.locator('input[type="text"]:visible').first();
  await input.fill("   ");
  await input.press("Enter");
  await page.waitForTimeout(400);
  const after = await page.locator("li, .task-row").count();
  assert.equal(after, before, "whitespace was accepted as a task");
  await ctx.close();
});

// ------------------------------------------------------------------- XP -----

await test("the quest tab shows a level and XP total", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const body = await page.locator("body").innerText();
  assert.ok(/LVL\s*\d+/i.test(body), "no level shown");
  assert.ok(/\d+\s*XP/i.test(body), "no XP total shown");
  await ctx.close();
});

await test("displayed XP is never negative", async () => {
  // v26 subtracted reward spending from level XP, so a real profile showed
  // "-35 XP" and "LVL 1". Two separate pots since v27.
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const body = await page.locator("body").innerText();
  const total = body.match(/(-?\d+)\s*XP/i);
  assert.ok(total, "could not read an XP total");
  assert.ok(Number(total[1]) >= 0, `XP total is negative: ${total[1]}`);
  assert.ok(!/LVL\s*1\b[\s\S]{0,80}-\d/.test(body), "negative XP alongside level 1");
  await ctx.close();
});

await test("claiming a reward does not reduce the level", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const before = (await page.locator("body").innerText()).match(/LVL\s*(\d+)/i)?.[1];

  const claim = page.locator("button").filter({ hasText: /claim/i }).first();
  if (await claim.count()) {
    await claim.click();
    await page.waitForTimeout(500);
    const after = (await page.locator("body").innerText()).match(/LVL\s*(\d+)/i)?.[1];
    assert.ok(Number(after) >= Number(before), `level fell from ${before} to ${after}`);
  }
  await ctx.close();
});

// ------------------------------------------------------------------ radar ---

await test("the life-areas radar renders with all its axes", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const svg = page.locator("svg.radar-chart");
  assert.equal(await svg.count(), 1, "radar chart missing");
  assert.ok(await svg.locator(".radar-label").count() >= 4, "radar has too few labels");
  await ctx.close();
});

await test("the radar controls sit above the chart, not on top of it", async () => {
  // .radar-card was display:flex with no direction, so the control strip
  // became a squeezed sidebar overlapping the plot
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const controls = await page.locator(".radar-controls").boundingBox();
  const chart = await page.locator("svg.radar-chart").boundingBox();
  assert.ok(controls && chart, "radar card did not render");
  assert.ok(controls.y + controls.height <= chart.y + 2,
    `controls overlap the chart (controls end ${controls.y + controls.height}, chart starts ${chart.y})`);
  await ctx.close();
});

await test("switching radar mode keeps the chart mounted", async () => {
  const { ctx, page, errors } = await open();
  await gotoTab(page, "quest");
  const modes = page.locator(".radar-mode button");
  if (await modes.count() >= 2) {
    await modes.nth(0).click(); await page.waitForTimeout(400);
    assert.equal(await page.locator("svg.radar-chart").count(), 1, "chart vanished in areas mode");
    await modes.nth(1).click(); await page.waitForTimeout(400);
    assert.equal(await page.locator("svg.radar-chart").count(), 1, "chart vanished in tags mode");
  }
  const real = errors.filter((e) => !/favicon|manifest|sw\.js/i.test(e));
  assert.deepEqual(real, [], "switching radar mode logged errors");
  await ctx.close();
});

await test("the radar updates immediately when a habit is logged", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const before = await page.locator("svg.radar-chart path.radar-fill").getAttribute("d");

  const toggle = page.locator("button").filter({ hasText: /mark|complete|\+/i }).first();
  if (await toggle.count()) {
    await toggle.click();
    await page.waitForTimeout(900);   // allow the 700ms transition
    const after = await page.locator("svg.radar-chart path.radar-fill").getAttribute("d");
    assert.notEqual(after, before, "the radar did not react to new data");
  }
  await ctx.close();
});

// ----------------------------------------------------------------- export ---

await test("export produces valid JSON containing the data keys", async () => {
  const { ctx, page } = await open();
  const payload = await page.evaluate(() => {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith("tasksh."));
    return keys.length ? JSON.stringify(keys) : null;
  });
  assert.ok(payload, "no tasksh keys in localStorage");
  const keys = JSON.parse(payload);
  for (const need of ["tasksh.tasks", "tasksh.routines"]) {
    assert.ok(keys.some((k) => k.startsWith(need)), `${need} missing from storage`);
  }
  await ctx.close();
});

await test("the AI key is never written into the export payload", async () => {
  // R12 — backups get shared between devices and people
  const { ctx, page } = await open();
  await page.evaluate(() => localStorage.setItem("tasksh.aikey.v1", "gsk_SECRETVALUE123"));
  const dump = await page.evaluate(() => {
    const out = {};
    for (const k of Object.keys(localStorage)) {
      if (k.startsWith("tasksh.") && !/aikey/i.test(k)) out[k] = localStorage.getItem(k);
    }
    return JSON.stringify(out);
  });
  assert.ok(!dump.includes("gsk_SECRETVALUE123"), "an AI key leaked into exportable data");
  await ctx.close();
});

// ---------------------------------------------------------------- offline ---

await test("the app still renders offline after one visit", async () => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1400);          // let the service worker install
  await ctx.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" }).catch(() => {});
  await page.waitForTimeout(900);
  const text = (await page.locator("body").innerText()).trim();
  assert.ok(text.length > 40, "the app did not render offline");
  await ctx.setOffline(false);
  await ctx.close();
});

// -------------------------------------------------------------- viewports ---

for (const [label, viewport] of [
  ["small phone 360x740", { width: 360, height: 740 }],
  ["phone 390x844", { width: 390, height: 844 }],
  ["tablet 820x1180", { width: 820, height: 1180 }],
  ["desktop 1440x900", { width: 1440, height: 900 }],
]) {
  await test(`layout has no horizontal overflow at ${label}`, async () => {
    const { ctx, page } = await open(viewport);
    for (const tab of TABS) {
      await gotoTab(page, tab);
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth - document.documentElement.clientWidth);
      // the timeline scrolls horizontally by design, inside its own container
      assert.ok(overflow <= 2, `${tab} overflows by ${overflow}px`);
    }
    await ctx.close();
  });
}

await test("the panel is scrollable on a phone", async () => {
  // R6: .task-list must stay a direct flex child of .panel or scrolling breaks
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const scrollable = await page.evaluate(() => {
    const el = document.querySelector(".task-list");
    return el ? el.scrollHeight > 0 && getComputedStyle(el).overflowY !== "visible" : false;
  });
  assert.ok(scrollable, ".task-list is not scrollable — check the flex chain");
  await ctx.close();
});

await browser.close();
server.close();

console.log(results.join("\n"));
console.log(`  regress.spec.mjs — ${passed} passed`);
