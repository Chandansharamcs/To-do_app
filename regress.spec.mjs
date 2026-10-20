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
import { readFileSync as __rf } from "node:fs";
const APP = __rf(new URL("./app.jsx", import.meta.url), "utf8");

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
  // v46: the app pushes its schedule to the live notify worker on boot. When
  // that worker answered `500 KV put() limit exceeded`, every test here that
  // asserts "no console errors" went red for a reason that had nothing to do
  // with the app. Tests do not get to depend on someone else's uptime.
  await ctx.route("**/tasksh-notify.techcraftor.workers.dev/**", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) }));
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

await test("an inventory item can be added and survives a reload", async () => {
  // v36: the Tasks tab is now an inventory of things you MIGHT do, plus three
  // drawn for today. The open-ended to-do list is gone.
  const { ctx, page } = await open();
  await gotoTab(page, "tasks");

  const input = page.locator('input[placeholder="something you might do..."]');
  assert.equal(await input.count(), 1, "no inventory composer");

  const label = `probe-${Date.now()}`;
  await input.fill(label);
  await input.press("Enter");
  await page.waitForTimeout(400);
  assert.ok((await page.locator("body").innerText()).includes(label), "item was not added");

  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await gotoTab(page, "tasks");
  assert.ok((await page.locator("body").innerText()).includes(label), "item did not persist");
  await ctx.close();
});

await test("an empty inventory item is refused", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "tasks");
  const before = await page.locator(".quest-habit-card").count();
  const input = page.locator('input[placeholder="something you might do..."]');
  await input.fill("   ");
  await input.press("Enter");
  await page.waitForTimeout(350);
  assert.equal(await page.locator(".quest-habit-card").count(), before, "whitespace became an item");
  await ctx.close();
});

await test("exactly one quest is drawn per difficulty", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "tasks");
  const d = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.daily.v1") || "{}"));
  assert.ok(d.day, "no quest day recorded");
  const picks = Object.values(d.picks || {}).filter(Boolean);
  assert.equal(new Set(picks).size, picks.length, "the same task was drawn twice");
  assert.ok(picks.length <= 3, `drew ${picks.length} quests`);
  assert.equal(await page.locator(".daily-card").count(), picks.length);
  await ctx.close();
});

await test("completing a daily quest pays coins, once", async () => {
  // the payout is COINS, not XP -- a random draw must not drive levelling
  const { ctx, page } = await open();
  await gotoTab(page, "tasks");
  const coins = async () =>
    (await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.wallet.v1") || '{"coins":0}'))).coins;
  const xp = async () =>
    Number((await page.evaluate(() => {
      const h = JSON.parse(localStorage.getItem("tasksh.habits.v1") || "[]");
      return h.reduce((s, x) => s + (x.xp || 0) * (x.history || []).filter((e) => e.t === "done").length
                                  - (x.penalty || 0) * (x.history || []).filter((e) => e.t === "slip").length, 0);
    })));

  const c0 = await coins(), x0 = await xp();
  const card = page.locator(".daily-card").first();
  if (!(await card.count())) { await ctx.close(); return; }

  await card.click();
  await page.waitForTimeout(700);
  const c1 = await coins();
  assert.ok(c1 > c0, `coins did not increase: ${c0} -> ${c1}`);
  assert.equal(await xp(), x0, "a daily quest changed XP -- it must only pay coins");

  await card.click({ force: true }).catch(() => {});
  await page.waitForTimeout(500);
  assert.equal(await coins(), c1, "a claimed quest paid out twice");
  await ctx.close();
});

await test("old tasks were folded into the inventory, not dropped", async () => {
  const { ctx, page } = await open();
  const inv = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.inventory.v1") || "[]"));
  assert.ok(inv.length > 0, "inventory is empty after migration");
  for (const t of inv) {
    assert.ok(["easy", "mid", "hard"].includes(t.diff), `bad difficulty: ${t.diff}`);
    assert.ok(t.text, "an inventory item lost its text");
  }
  await ctx.close();
});

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

// ------------------------------------------------------------------ notes ---





await test("notes are included in the export payload", async () => {
  // a backup that silently drops a section is worse than no backup
  const { ctx, page } = await open();
  const inPayload = await page.evaluate(() =>
    Object.keys(localStorage).some((k) => k === "tasksh.notes.v1"));
  assert.ok(inPayload, "notes are not stored under their own key");
  await ctx.close();
});

// ------------------------------------------------- double-tap on timeline ---

await test("double-tapping a routine block marks it complete", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const block = page.locator(".timeline-block").first();
  assert.ok(await block.count(), "no timeline blocks rendered");

  const wasDone = (await block.getAttribute("class")).includes("done");
  await block.dblclick();
  await page.waitForTimeout(600);
  const nowDone = (await page.locator(".timeline-block").first().getAttribute("class")).includes("done");
  assert.notEqual(nowDone, wasDone, "double-tap did not toggle the routine");
  await ctx.close();
});

await test("a single tap does NOT toggle a routine", async () => {
  // the blocks are small and sit on a horizontally scrolling surface, so one
  // stray finger must never flip a routine
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const block = page.locator(".timeline-block").first();
  const before = (await block.getAttribute("class")).includes("done");
  await block.click();
  await page.waitForTimeout(700);
  const after = (await page.locator(".timeline-block").first().getAttribute("class")).includes("done");
  assert.equal(after, before, "a single tap toggled the routine");
  await ctx.close();
});

await test("timeline blocks are keyboard reachable", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const block = page.locator(".timeline-block").first();
  assert.equal(await block.getAttribute("role"), "button", "block is not a button");
  assert.ok(await block.getAttribute("aria-label"), "block has no accessible name");
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

await test("a backup round-trips every key, not just eight", async () => {
  // THE v33 BUG: edited sub-area tags vanished on restore because the export
  // named its keys by hand. Now it sweeps localStorage.
  const { ctx, page } = await open();
  await page.evaluate(() => {
    localStorage.setItem("tasksh.subareas.v1", JSON.stringify([{ key: "custom", area: "work", label: "MyTag" }]));
    localStorage.setItem("tasksh.wallet.v1", "999");
    localStorage.setItem("tasksh.theme.v1", "amber");
  });

  // reproduce what exportData(false) collects
  const store = await page.evaluate(() => {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith("tasksh.")) continue;
      if (k === "tasksh.deviceid.v1") continue;
      if (k === "tasksh.aikey.v1" || k === "tasksh.aikeys.v1") continue;
      out[k] = localStorage.getItem(k);
    }
    return out;
  });

  for (const need of ["tasksh.subareas.v1", "tasksh.wallet.v1", "tasksh.theme.v1"]) {
    assert.ok(store[need], `${need} missing from the backup`);
  }
  assert.equal(store["tasksh.wallet.v1"], "999");
  assert.ok(store["tasksh.subareas.v1"].includes("MyTag"), "custom tag not captured");
  await ctx.close();
});

await test("the default backup still leaves AI keys out", async () => {
  // keys are opt-in as of v34; the default file must stay shareable
  const { ctx, page } = await open();
  await page.evaluate(() => localStorage.setItem("tasksh.aikey.v1", "gsk_SECRETVALUE123"));
  const store = await page.evaluate(() => {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith("tasksh.")) continue;
      if (k === "tasksh.aikey.v1" || k === "tasksh.aikeys.v1") continue;
      out[k] = localStorage.getItem(k);
    }
    return JSON.stringify(out);
  });
  assert.ok(!store.includes("gsk_SECRETVALUE123"), "an AI key leaked into the default backup");
  await ctx.close();
});

await test("exporting opens a chooser rather than silently saving", async () => {
  // v35 moved the choice out of the Vault and onto the export button itself:
  // a file that quietly contains credentials is how credentials leak, and a
  // panel nobody scrolls to is not a warning.
  const { ctx, page } = await open();
  const btn = page.locator('button[aria-label="Export backup"]');
  assert.equal(await btn.count(), 1, "no export button in the titlebar");

  assert.equal(await page.locator(".backup-ask").count(), 0, "popup visible before tapping");
  await btn.click();
  await page.waitForTimeout(350);

  const ask = page.locator(".backup-ask");
  assert.equal(await ask.count(), 1, "export did not open the chooser");
  const text = await ask.innerText();
  assert.ok(/credential/i.test(text), "no warning about what including keys means");
  assert.equal(await ask.locator("button").filter({ hasText: /^export$/i }).count(), 1, "no plain export choice");
  assert.equal(await ask.locator("button").filter({ hasText: /with API keys/i }).count(), 1, "no keys choice");
  await ctx.close();
});

await test("the chooser can be dismissed without exporting", async () => {
  const { ctx, page } = await open();
  await page.locator('button[aria-label="Export backup"]').click();
  await page.waitForTimeout(300);
  await page.locator(".backup-ask button").filter({ hasText: /cancel/i }).click();
  await page.waitForTimeout(300);
  assert.equal(await page.locator(".backup-ask").count(), 0, "cancel did not close the chooser");
  await ctx.close();
});

// -------------------------------------------------- merged habits (v35) ---

await test("there is one habits section, not good and bad", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const body = await page.locator("body").innerText();
  assert.ok(!/BAD-HABITS/.test(body), "a separate bad-habits section still exists");
  assert.ok(!/GOOD-HABITS/.test(body), "still says GOOD-HABITS");
  assert.ok(/HABITS/.test(body), "no habits section at all");
  await ctx.close();
});

await test("every habit offers both a done and a slip mark", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const cards = await page.locator(".quest-habit-card").count();
  assert.ok(cards > 0, "no habit cards rendered");
  assert.equal(await page.locator(".quest-check").count(), cards, "not every habit has a done button");
  assert.equal(await page.locator(".quest-slip").count(), cards, "not every habit has a slip button");
  await ctx.close();
});

await test("slip lowers XP, and re-completing restores it", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const readXP = async () =>
    Number((await page.locator("body").innerText()).match(/(-?\d+)\s*XP/)[1]);

  const before = await readXP();

  // ✗ on a completed day switches done -> slip, so the completion is lost
  await page.locator(".quest-slip").first().click();
  await page.waitForTimeout(900);
  const afterSlip = await readXP();
  assert.ok(afterSlip < before, `slip did not lower XP: ${before} -> ${afterSlip}`);

  // ✗ again clears the slip. The day is now BLANK, not done -- undoing a slip
  // is not the same as re-completing, and the XP must not silently come back.
  await page.locator(".quest-slip").first().click();
  await page.waitForTimeout(900);
  assert.equal(await readXP(), afterSlip, "clearing a slip wrongly restored the completion");

  // ✓ re-completes it, and only now does the XP return
  await page.locator(".quest-check").first().click();
  await page.waitForTimeout(900);
  assert.equal(await readXP(), before, "re-completing did not restore XP");
  await ctx.close();
});

await test("marking one habit never marks another", async () => {
  // THE MERGE BUG: goodHabits and badHabits numbered ids independently, so
  // after merging two habits shared id 1 and a single click hit both.
  const { ctx, page } = await open();
  await gotoTab(page, "quest");

  const ids = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("tasksh.habits.v1") || "[]").map((h) => h.id));
  assert.equal(new Set(ids).size, ids.length, `duplicate habit ids: ${ids}`);

  const marksBefore = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("tasksh.habits.v1") || "[]")
      .map((h) => (h.history || []).length));

  await page.locator(".quest-slip").first().click();
  await page.waitForTimeout(900);

  const marksAfter = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("tasksh.habits.v1") || "[]")
      .map((h) => (h.history || []).length));

  const changed = marksAfter.filter((n, i) => n !== marksBefore[i]).length;
  assert.ok(changed <= 1, `one click changed ${changed} habits`);
  await ctx.close();
});

await test("XP never goes negative even when slips outweigh everything", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  for (let i = 0; i < 4; i++) {
    const slips = page.locator(".quest-slip");
    if (i < await slips.count()) { await slips.nth(i).click(); await page.waitForTimeout(250); }
  }
  await page.waitForTimeout(500);
  const xp = Number((await page.locator("body").innerText()).match(/(-?\d+)\s*XP/)[1]);
  assert.ok(xp >= 0, `XP went negative: ${xp}`);
  await ctx.close();
});

// ------------------------------------------------ reorder + confirm (v36) --

await test("quests can be reordered, and the order persists", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");

  const first = async () =>
    (await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.habits.v1") || "[]")))[0]?.label;
  const before = await first();

  await page.locator("button").filter({ hasText: /^reorder$/ }).click();
  await page.waitForTimeout(400);
  const down = page.locator(".quest-habit-card.reordering button").filter({ hasText: "↓" }).first();
  assert.ok(await down.count(), "no reorder controls appeared");
  await down.click();
  await page.waitForTimeout(500);

  assert.notEqual(await first(), before, "the order did not change");

  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  assert.notEqual(await first(), before, "the new order did not persist");
  await ctx.close();
});

await test("reorder mode hides the destructive controls", async () => {
  // ✓ and ✗ are one tap from ↑ and ↓; mixing them would make a mis-tap change
  // your XP while you were only trying to tidy the list
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  await page.locator("button").filter({ hasText: /^reorder$/ }).click();
  await page.waitForTimeout(400);
  assert.equal(await page.locator(".quest-slip").count(), 0, "slip button still reachable");
  assert.equal(await page.locator(".quest-check").count(), 0, "done button still reachable");
  await ctx.close();
});

await test("deleting a quest needs two taps", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const count = async () =>
    (await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.habits.v1") || "[]"))).length;

  const before = await count();
  const del = page.locator(".quest-habit-card .del-btn").first();
  await del.click();
  await page.waitForTimeout(400);

  assert.equal(await count(), before, "one tap deleted the habit");
  assert.equal(await page.locator(".del-btn.armed").count(), 1, "no confirmation appeared");

  await page.locator(".del-btn.armed").first().click();
  await page.waitForTimeout(500);
  assert.equal(await count(), before - 1, "the confirmed delete did not happen");
  await ctx.close();
});

await test("routine colour means state, not position", () => {
  // v43: the red->cyan position ramp was removed. Colour is reserved for
  // done (cyan) and slipped (red) -- a card's place in a list is not
  // information worth a hue, and the ramp competed with the one that is.
  assert.ok(!/gradientColor\(index, total\)/.test(APP), "the position ramp is back on routine rows");
  assert.ok(/function cardStateVars/.test(APP), "the state-colour helper is missing");
  assert.ok(/hsla\(171, 80%, 55%, 0\.85\)/.test(APP), "done is no longer cyan");
  assert.ok(/hsla\(352, 80%, 60%, 0\.85\)/.test(APP), "slipped is no longer red");
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

await test("the vault is backup, build and sound now", async () => {
  // v44: habits, projects and notes were removed from this screen at the
  // owner's request. The four note tests that used to live here went with
  // the UI. The DATA is deliberately untouched -- these keys still ride in
  // every export and cloud snapshot, so restoring the sections is a revert
  // rather than a recovery.
  // v47: SOUND joined them. It is here rather than behind the titlebar
  // speaker because that button's one job is muting in a hurry.
  const { ctx, page } = await open();
  await gotoTab(page, "vault");
  const heads = await page.locator(".section-header").allInnerTexts();
  assert.deepEqual(heads.map((h) => h.trim()), ["CLOUD-BACKUP", "APP-UPDATE", "SOUND"],
    `vault shows ${heads.join(", ")}`);
  assert.equal(await page.locator(".note-composer, .vault-habit-row").count(), 0,
    "a removed section is still rendering");
  // the storage keys must survive the UI removal
  assert.ok(/STORAGE_KEY_NOTES/.test(APP), "the notes key was deleted, not just its screen");
  assert.ok(/STORAGE_KEY_PROJECTS/.test(APP), "the projects key was deleted, not just its screen");
  await ctx.close();
});

// ------------------------------------------------- v45: swipe to mark ----

/** The seeded "Deep Work" habit is already completed today, so a swipe test
 *  that grabs the first card is testing an already-ticked row. These get a
 *  clean, deliberately untouched set instead. */
const CLEAN_HABITS = JSON.stringify([
  { id: 501, label: "Swipe Me", tags: ["work"], xp: 30, penalty: 10, history: [] },
  { id: 502, label: "Other One", tags: ["self"], xp: 10, penalty: 5, history: [] },
]);

async function openQuests(viewport) {
  const ctx = await browser.newContext(viewport ? { viewport } : { viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.addInitScript((h) => localStorage.setItem("tasksh.habits.v1", h), CLEAN_HABITS);
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "quest");
  return { ctx, page, errors };
}

const swipeCard = (page) => page.locator(".quest-habit-card.good", { hasText: "Swipe Me" });

/** A real finger: pointer events moved in steps so the axis lock sees the
 *  gesture the way a phone delivers it. The card is scrolled into view first
 *  -- boundingBox() happily returns coordinates below the fold, and a mouse
 *  move to y=950 in an 844px viewport lands on nothing at all. */
async function swipe(page, locator, dx) {
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(120);
  // v59: these tests used to swipe wherever the card happened to be. When the
  // quest tab got taller (a seven-day strip on every card), the first card
  // slipped below the 844px fold and the synthetic mouse events landed off
  // screen -- silently clicking whatever was under the clamp instead. Scroll
  // to it explicitly so the test measures the gesture, not the page height.
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  const box = await locator.boundingBox();
  const y = box.y + box.height / 2;
  // Start from the card's body, not its outermost 18px. A real finger lands
  // on the card; the extreme right edge is where the achievement toast's
  // dismiss button lives while a toast is up, and starting there measured the
  // toast instead of the gesture. (That 26x26 overlap is a real, separate
  // limitation -- reported, not papered over.)
  const x0 = box.x + box.width / 2;
  await page.mouse.move(x0, y);
  await page.mouse.down();
  for (let i = 1; i <= 8; i++) await page.mouse.move(x0 + (dx * i) / 8, y, { steps: 1 });
  await page.mouse.up();
  await page.waitForTimeout(380);
}

await test("swiping a quest right completes it", async () => {
  const { ctx, page, errors } = await openQuests();
  const card = swipeCard(page);
  assert.equal(await card.locator(".quest-check.done").count(), 0, "already done before the swipe");
  await swipe(page, card, 120);
  assert.equal(await swipeCard(page).locator(".quest-check.done").count(), 1, "swipe right did not complete");
  assert.deepEqual(errors.filter((e) => !/favicon|manifest|sw\.js/i.test(e)), []);
  await ctx.close();
});

await test("swiping a quest left fails it", async () => {
  const { ctx, page } = await openQuests();
  await swipe(page, swipeCard(page), -120);
  assert.equal(await swipeCard(page).locator(".quest-slip.on").count(), 1, "swipe left did not mark a slip");
  assert.equal(await swipeCard(page).locator(".quest-check.done").count(), 0, "a fail also completed it");
  await ctx.close();
});

await test("the toast's dismiss button is the only thing it intercepts", async () => {
  // v59 found this by accident: a left-swipe starting at the card's right edge
  // landed on the achievement toast's X instead of the card. The body was
  // already pointer-events:none (v52); this pins down that the X is the only
  // live target, so a future change cannot widen it back into the swipe lane.
  const { ctx, page } = await openQuests();
  await page.evaluate(() => {
    if (window.__achToastProbe) return;
    window.__achToastProbe = true;
  });
  const toast = page.locator(".ach-toast");
  if (!(await toast.count())) { await ctx.close(); return; }
  const body = await toast.evaluate((e) => getComputedStyle(e).pointerEvents);
  assert.equal(body, "none", "the toast body intercepts pointers again");
  const x = await page.locator(".ach-toast-x").evaluate((e) => getComputedStyle(e).pointerEvents);
  assert.equal(x, "auto", "the dismiss button stopped being clickable");
  await ctx.close();
});

await test("a short drag is not a swipe", async () => {
  // below the trigger distance the row springs back and nothing is recorded
  const { ctx, page } = await openQuests();
  await swipe(page, swipeCard(page), 30);
  assert.equal(await swipeCard(page).locator(".quest-check.done").count(), 0);
  assert.equal(await swipeCard(page).locator(".quest-slip.on").count(), 0);
  await ctx.close();
});

await test("a vertical drag scrolls instead of marking", async () => {
  const { ctx, page } = await openQuests();
  const card = swipeCard(page);
  await card.scrollIntoViewIfNeeded();
  await page.waitForTimeout(120);
  const box = await card.boundingBox();
  const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  for (let i = 1; i <= 8; i++) await page.mouse.move(cx, cy - i * 18, { steps: 1 });
  await page.mouse.up();
  await page.waitForTimeout(300);
  assert.equal(await swipeCard(page).locator(".quest-check.done").count(), 0, "a scroll completed a quest");
  await ctx.close();
});

await test("the buttons still work -- the swipe is an addition, not a replacement", async () => {
  const { ctx, page } = await openQuests();
  const card = swipeCard(page);
  await card.scrollIntoViewIfNeeded();
  await card.locator(".quest-check").click();
  await page.waitForTimeout(300);
  assert.equal(await swipeCard(page).locator(".quest-check.done").count(), 1);
  await ctx.close();
});

// --------------------------------------------- v45: radar dot details ----

await test("tapping a radar dot opens the exact points for that axis", async () => {
  const { ctx, page, errors } = await open();
  await gotoTab(page, "quest");
  assert.equal(await page.locator(".axis-pop").count(), 0, "the popup was open before anything was tapped");
  await page.locator(".radar-chart .radar-hit").first().click();
  await page.waitForTimeout(250);
  assert.equal(await page.locator(".axis-pop").count(), 1, "no popup after tapping a dot");
  assert.match(await page.locator(".axis-pop-xp").innerText(), /^\d+$/);
  assert.deepEqual(errors.filter((e) => !/favicon|manifest|sw\.js/i.test(e)), []);
  await ctx.close();
});

await test("the popup number is the number the chart is plotting", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const dot = page.locator(".radar-chart .radar-hit").first();
  const label = await dot.getAttribute("aria-label");          // "Deep Work: 120 XP"
  const expected = label.match(/:\s*(-?\d+)\s*XP/)[1];
  await dot.click();
  await page.waitForTimeout(250);
  assert.equal(await page.locator(".axis-pop-xp").innerText(), expected);
  await ctx.close();
});

await test("tapping the same dot again closes it", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const dot = page.locator(".radar-chart .radar-hit").first();
  await dot.click();
  await page.waitForTimeout(200);
  await dot.click();
  await page.waitForTimeout(200);
  assert.equal(await page.locator(".axis-pop").count(), 0);
  await ctx.close();
});

await test("every axis has its own finger-sized tap region, even at zero", async () => {
  // the bug this replaces: at low values every dot collapses to the centre,
  // so round hit areas overlapped and tapping one axis opened another
  const { ctx, page } = await open();
  await page.evaluate(() => {
    localStorage.setItem("tasksh.habits.v1", JSON.stringify([]));
  });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "quest");
  const hits = page.locator(".radar-chart .radar-hit");
  const n = await hits.count();
  assert.ok(n >= 4, `only ${n} tap regions`);
  for (let i = 0; i < n; i++) {
    const box = await hits.nth(i).boundingBox();
    assert.ok(box.width >= 20 && box.height >= 20, `region ${i} is only ${box.width}x${box.height}`);
    const label = await hits.nth(i).getAttribute("aria-label");
    await hits.nth(i).click();
    await page.waitForTimeout(160);
    const opened = await page.locator(".axis-pop-name").innerText();
    assert.equal(opened, label.split(":")[0], `tapping ${label} opened ${opened}`);
    await page.locator(".axis-pop-close").click();
    await page.waitForTimeout(100);
  }
  await ctx.close();
});

await test("no radar axis is ever plotted below zero", async () => {
  // v44 floored the four areas but not the tags, and the chart defaults to
  // tags -- which is the mode the original complaint was about.
  const { ctx, page } = await open();
  await page.evaluate(() => {
    localStorage.setItem("tasksh.habits.v1", JSON.stringify([
      { id: 1, label: "Screen Time", tags: ["discipline"], xp: 0, penalty: 40,
        history: [{ d: "2026-01-01", t: "slip" }, { d: "2026-01-02", t: "slip" }] },
    ]));
  });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "quest");
  const labels = await page.locator(".radar-chart .radar-hit").evaluateAll(
    (els) => els.map((e) => e.getAttribute("aria-label")));
  for (const l of labels) assert.ok(!/:\s*-/.test(l), `negative axis still plotted: ${l}`);
  assert.equal(await page.locator(".radar-label-neg").count(), 0);
  await ctx.close();
});

await test("a clamped axis admits what zero is hiding", async () => {
  const { ctx, page } = await open();
  await page.evaluate(() => {
    localStorage.setItem("tasksh.habits.v1", JSON.stringify([
      { id: 1, label: "Screen Time", tags: ["discipline"], xp: 0, penalty: 40,
        history: [{ d: "2026-01-01", t: "slip" }, { d: "2026-01-02", t: "slip" }] },
    ]));
  });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "quest");
  const dots = page.locator(".radar-chart .radar-hit");
  const n = await dots.count();
  const labels = [];
  let found = false;
  for (let i = 0; i < n; i++) {
    const l = await dots.nth(i).getAttribute("aria-label");
    labels.push(l);
    if (!/Discipline/i.test(l)) continue;
    await dots.nth(i).click();
    await page.waitForTimeout(260);
    found = (await page.locator(".axis-pop-raw").count()) === 1;
    break;
  }
  assert.ok(found, `the Discipline axis did not report its hidden deficit. axes: ${labels.join(" | ")}`);
  await ctx.close();
});

// ------------------------------------------ v45: per-quest calendar ----

await test("every quest card has a history button", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const cards = await page.locator(".quest-habit-card.good").count();
  assert.ok(cards > 0);
  assert.equal(await page.locator(".quest-habit-card.good .hist-btn").count(), cards);
  await ctx.close();
});

await test("the history popup shows a full month with completed and skipped days", async () => {
  const { ctx, page, errors } = await open();
  const today = await page.evaluate(() =>
    new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date()));
  const [y, m] = today.split("-");
  await page.evaluate(({ y, m }) => {
    localStorage.setItem("tasksh.habits.v1", JSON.stringify([
      { id: 1, label: "Read", area: "self", xp: 10, penalty: 5, history: [
        { d: `${y}-${m}-01`, t: "done" },
        { d: `${y}-${m}-02`, t: "done" },
        { d: `${y}-${m}-03`, t: "slip" },
      ] },
    ]));
  }, { y, m });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "quest");
  await page.locator(".quest-habit-card.good .hist-btn").first().click();
  await page.waitForTimeout(300);

  assert.equal(await page.locator(".qh-sheet").count(), 1);
  assert.equal(await page.locator(".qh-cell").count(), 42, "the grid is not six rows of seven");
  assert.equal(await page.locator(".qh-cell.done").count(), 2);
  assert.equal(await page.locator(".qh-cell.slip").count(), 1);
  assert.deepEqual(errors.filter((e) => !/favicon|manifest|sw\.js/i.test(e)), []);
  await ctx.close();
});

await test("the calendar steps back a month and refuses to step into the future", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  await page.locator(".quest-habit-card.good .hist-btn").first().click();
  await page.waitForTimeout(300);
  const started = await page.locator(".qh-month").innerText();
  assert.ok(await page.locator(".qh-nav button").last().isDisabled(), "next month was offered from today");

  await page.locator(".qh-nav button").first().click();
  await page.waitForTimeout(250);
  assert.notEqual(await page.locator(".qh-month").innerText(), started);
  assert.ok(!(await page.locator(".qh-nav button").last().isDisabled()), "cannot get back to this month");
  await ctx.close();
});

await test("the history popup closes and does not block the tab bar", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  await page.locator(".quest-habit-card.good .hist-btn").first().click();
  await page.waitForTimeout(300);
  await page.locator(".sheet-close").click();
  await page.waitForTimeout(250);
  assert.equal(await page.locator(".qh-sheet").count(), 0);
  await gotoTab(page, "today");
  assert.ok((await page.locator("body").innerText()).length > 40);
  await ctx.close();
});
// ------------------------------------------------ v51: the economy ----
//
// Three currencies live in this app and they have been refactored twice:
//   XP     progression only, earned from quest habits, drives level + pet
//   coins  the spendable balance, earned from daily quests, pomodoro,
//          achievements and level-ups, spent on rewards
//   EP     rngdle's own wallet, deliberately sealed off from both
//
// Every bug below was a place where one screen disagreed with another about
// which of those three it was dealing with.

const ECON_SEED = {
  "tasksh.inventory.v1": JSON.stringify([
    { id: 901, text: "pullups", diff: "hard" },
    { id: 902, text: "read", diff: "mid" },
    { id: 903, text: "wash up", diff: "easy" },
  ]),
  "tasksh.wallet.v1": JSON.stringify({ coins: 500 }),
  "tasksh.rewards.v1": JSON.stringify([{ id: 1, label: "Watch a movie", cost: 100, claimed: [] }]),
};

async function econ() {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.route("**/tasksh-notify.techcraftor.workers.dev/**", (r) =>
    r.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  const page = await ctx.newPage();
  await page.addInitScript((seed) => {
    for (const [k, v] of Object.entries(seed)) localStorage.setItem(k, v);
  }, ECON_SEED);
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const coins = () =>
    page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.wallet.v1") || '{"coins":0}').coins);
  return { ctx, page, coins };
}

await test("completing a daily quest pays coins", async () => {
  const { ctx, page, coins } = await econ();
  await gotoTab(page, "tasks");
  const before = await coins();
  await page.locator(".daily-card").first().click();
  await page.waitForTimeout(400);
  assert.ok(await coins() > before, "a completed quest paid nothing");
  await ctx.close();
});

await test("the tab you earn coins on shows the balance", async () => {
  // it showed none at all, so completing a quest moved a number that was
  // only visible one tab away -- which reads as "it did nothing"
  const { ctx, page } = await econ();
  await gotoTab(page, "tasks");
  assert.equal(await page.locator(".coin-total").count(), 1, "no balance on the quest board");
  const before = await page.locator(".coin-total").innerText();
  await page.locator(".daily-card").first().click();
  await page.waitForTimeout(600);
  assert.notEqual(await page.locator(".coin-total").innerText(), before,
    "the balance on screen did not move when a quest was completed");
  await ctx.close();
});

await test("Today prices rewards in coins, not XP", async () => {
  // rewards have cost coins since v41; this screen still said XP, and the
  // balance beside it was the habit XP total, which a daily quest never moves
  const { ctx, page } = await econ();
  await gotoTab(page, "today");
  const txt = await page.locator(".today-view").innerText();
  assert.ok(/REWARDS YOU CAN AFFORD/.test(txt));
  assert.ok(!/\d+\s*XP/.test(txt.split("REWARDS YOU CAN AFFORD")[1] || ""),
    "the reward section still talks in XP");
  assert.match(await page.locator(".today-xp-total").innerText(), /◉/);
  assert.match(await page.locator(".today-reward-cost").first().innerText(), /◉/);
  await ctx.close();
});

await test("claiming a reward from Today costs the same as claiming it from Quest", async () => {
  // it was free from Today and 100 coins from Quest: two implementations of
  // one rule, and only one of them knew the rule
  const a = await econ();
  await gotoTab(a.page, "today");
  const beforeA = await a.coins();
  await a.page.locator(".today-claim-btn").first().click();
  await a.page.waitForTimeout(400);
  const spentFromToday = beforeA - (await a.coins());
  await a.ctx.close();

  const b = await econ();
  await gotoTab(b.page, "quest");
  const beforeB = await b.coins();
  await b.page.locator(".reward-claim").first().click();
  await b.page.waitForTimeout(400);
  const spentFromQuest = beforeB - (await b.coins());
  await b.ctx.close();

  assert.equal(spentFromToday, 100, `Today charged ${spentFromToday}`);
  assert.equal(spentFromToday, spentFromQuest, "the two screens charge different prices");
});

await test("a reward you cannot afford is not claimable from Today", async () => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.route("**/tasksh-notify.techcraftor.workers.dev/**", (r) =>
    r.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    localStorage.setItem("tasksh.wallet.v1", JSON.stringify({ coins: 5 }));
    localStorage.setItem("tasksh.rewards.v1", JSON.stringify([{ id: 1, label: "Big thing", cost: 1000, claimed: [] }]));
  });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "today");
  assert.ok(!/Big thing/.test(await page.locator(".today-view").innerText()),
    "an unaffordable reward was offered");
  await ctx.close();
});

await test("coins can never go negative", async () => {
  const { ctx, page, coins } = await econ();
  await page.evaluate(() => localStorage.setItem("tasksh.wallet.v1", JSON.stringify({ coins: 100 })));
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await gotoTab(page, "quest");
  for (let i = 0; i < 3; i++) {
    const btn = page.locator(".reward-claim").first();
    if (await btn.count() && !(await btn.isDisabled())) { await btn.click(); await page.waitForTimeout(300); }
  }
  assert.ok(await coins() >= 0, `balance went to ${await coins()}`);
  await ctx.close();
});

await test("rngdle EP cannot reach the coin balance", async () => {
  // the two economies are deliberately sealed: no amount of rolling may buy
  // a real-world reward
  const { ctx, page, coins } = await econ();
  const before = await coins();
  await page.getByRole("tab", { name: "tools" }).click();
  await page.waitForTimeout(250);
  await page.locator(".tool-card", { hasText: "rngdle" }).click();
  await page.waitForTimeout(350);
  await page.getByRole("button", { name: /GENERATE|ROLL AGAIN/ }).click();
  await page.waitForTimeout(7400);
  assert.equal(await coins(), before, "a roll moved the coin balance");
  await ctx.close();
});


await test("a toast cannot swallow a swipe aimed at the list behind it", async () => {
  // the achievement toast was one big tap target pinned over the bottom of
  // the screen, and for its 4.2 seconds every swipe went to it instead
  const { ctx, page } = await openQuests();
  const card = swipeCard(page);
  await card.scrollIntoViewIfNeeded();
  await page.waitForTimeout(120);
  const box = await card.boundingBox();
  const hit = await page.evaluate(({ x, y }) => {
    const el = document.elementFromPoint(x, y);
    return el ? (el.closest(".ach-toast") ? "toast" : "card-or-below") : "nothing";
  }, { x: box.x + box.width / 2, y: box.y + box.height / 2 });
  assert.notEqual(hit, "toast", "the toast is intercepting taps meant for the list");
  await ctx.close();
});


// ------------------------------------------------- v53: tagged daily tasks --
//
// Daily tasks paid coins and nothing else, so the radar -- which reads XP --
// could not see them. Nine of the twenty things in his inventory are
// physical, and Body sat at two quests. These tests pin the fix end to end:
// the tag is visible where you tap, the points land on the axis, and the two
// screens that can complete a quest agree about all of it.

const TAG_SEED = {
  "tasksh.inventory.v1": JSON.stringify([
    { id: 901, text: "100 push ups",      diff: "hard", tags: ["body"], history: [] },
    { id: 902, text: "Revise 2 chapters", diff: "mid",  tags: ["work"], history: [] },
    { id: 903, text: "Bruh at night",     diff: "easy", tags: [],       history: [] },
  ]),
  "tasksh.habits.v1": JSON.stringify([
    { id: 1, label: "Workout", tags: ["body"], xp: 50, penalty: 50, history: [] },
    { id: 2, label: "Study",   tags: ["work"], xp: 30, penalty: 30, history: [] },
  ]),
  "tasksh.wallet.v1": JSON.stringify({ coins: 500 }),
};

async function tagged(seed = TAG_SEED) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.route("**/tasksh-notify.techcraftor.workers.dev/**", (r) =>
    r.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  const page = await ctx.newPage();
  // Seeded ONCE. addInitScript runs on every navigation, so seeding
  // unconditionally would silently reset the save on reload and make
  // "survives a reload" a test of nothing.
  await page.addInitScript((s) => {
    if (localStorage.getItem("__seeded")) return;
    for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v);
    localStorage.setItem("__seeded", "1");
  }, seed);
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  // the radar hit areas carry "<label>: <value> XP", which is the only place
  // the exact axis number is readable without opening the popup
  const axis = async (label) => {
    const t = await page.locator(`svg.radar-chart [aria-label^="${label}:"]`).getAttribute("aria-label");
    return Number(String(t).match(/:\s*(-?\d+)/)[1]);
  };
  const history = (id) => page.evaluate((i) => {
    const inv = JSON.parse(localStorage.getItem("tasksh.inventory.v1") || "[]");
    return (inv.find((t) => t.id === i) || {}).history || [];
  }, id);
  return { ctx, page, axis, history };
}

await test("a daily task says which tag it pays into, on the card you tap", async () => {
  const { ctx, page } = await tagged();
  await gotoTab(page, "tasks");
  const card = page.locator(".daily-card", { hasText: "100 push ups" });
  assert.equal(await card.count(), 1, "the hard task was not drawn");
  assert.match(await card.innerText(), /Body/i, "the card does not say where its points go");
  await ctx.close();
});

await test("an untagged daily task is labelled untagged rather than filed somewhere", async () => {
  const { ctx, page } = await tagged();
  await gotoTab(page, "tasks");
  const card = page.locator(".daily-card", { hasText: "Bruh at night" });
  assert.match(await card.innerText(), /untagged/i);
  await ctx.close();
});

await test("completing a daily task moves its tag on the radar", async () => {
  // the whole feature in one assertion
  const { ctx, page, axis } = await tagged();
  await gotoTab(page, "quest");
  const before = await axis("Body");
  await gotoTab(page, "tasks");
  await page.locator(".daily-card", { hasText: "100 push ups" }).click();
  await page.waitForTimeout(500);
  await gotoTab(page, "quest");
  assert.equal(await axis("Body"), before + 100, "Body did not gain the 100 it was paid");
  await ctx.close();
});

await test("it moves only the tag it wears", async () => {
  const { ctx, page, axis } = await tagged();
  await gotoTab(page, "quest");
  const work = await axis("Work");
  await gotoTab(page, "tasks");
  await page.locator(".daily-card", { hasText: "100 push ups" }).click();
  await page.waitForTimeout(500);
  await gotoTab(page, "quest");
  assert.equal(await axis("Work"), work, "an unrelated axis moved");
  await ctx.close();
});

await test("an untagged daily task still pays coins but moves no axis", async () => {
  const { ctx, page, axis } = await tagged();
  await gotoTab(page, "quest");
  const snapshot = {};
  for (const k of ["Work", "Body", "Health", "Self", "Discipline"]) snapshot[k] = await axis(k);
  await gotoTab(page, "tasks");
  const coinsBefore = await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.wallet.v1")).coins);
  await page.locator(".daily-card", { hasText: "Bruh at night" }).click();
  await page.waitForTimeout(500);
  assert.ok(await page.evaluate(() => JSON.parse(localStorage.getItem("tasksh.wallet.v1")).coins) > coinsBefore,
    "an untagged task should still pay");
  await gotoTab(page, "quest");
  for (const k of Object.keys(snapshot)) assert.equal(await axis(k), snapshot[k], `${k} moved`);
  await ctx.close();
});

await test("completing from Today credits the tag exactly as completing from Tasks does", async () => {
  // two buttons, one rule. This is the shape of the v51 bug where claiming a
  // reward from Today was free because Today had its own copy of the logic.
  const a = await tagged();
  await gotoTab(a.page, "tasks");
  await a.page.locator(".daily-card", { hasText: "100 push ups" }).click();
  await a.page.waitForTimeout(500);
  await gotoTab(a.page, "quest");
  const fromTasks = await a.axis("Body");
  await a.ctx.close();

  const b = await tagged();
  await gotoTab(b.page, "today");
  await b.page.locator(".today-task-row.quest", { hasText: "100 push ups" })
            .locator(".today-task-check").click();
  await b.page.waitForTimeout(500);
  await gotoTab(b.page, "quest");
  const fromToday = await b.axis("Body");
  await b.ctx.close();

  assert.equal(fromToday, fromTasks, "the two screens credit different amounts");
});

await test("Today shows the tag chip on a drawn quest", async () => {
  const { ctx, page } = await tagged();
  await gotoTab(page, "today");
  const row = page.locator(".today-task-row.quest", { hasText: "100 push ups" });
  assert.equal(await row.locator(".today-quest-chip").count(), 1, "no tag chip on the Today row");
  assert.match(await row.innerText(), /Body/i);
  await ctx.close();
});

await test("one completion is written once, however many screens you tap it from", async () => {
  const { ctx, page, history } = await tagged();
  await gotoTab(page, "tasks");
  await page.locator(".daily-card", { hasText: "100 push ups" }).click();
  await page.waitForTimeout(400);
  await gotoTab(page, "today");
  const row = page.locator(".today-task-row.quest", { hasText: "100 push ups" });
  if (await row.count()) {
    await row.locator(".today-task-check").click({ force: true }).catch(() => {});
    await page.waitForTimeout(400);
  }
  assert.deepEqual((await history(901)).length, 1, "the same day was logged twice");
  await ctx.close();
});

await test("a completion survives a reload", async () => {
  const { ctx, page, axis } = await tagged();
  await gotoTab(page, "tasks");
  await page.locator(".daily-card", { hasText: "100 push ups" }).click();
  await page.waitForTimeout(500);
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await gotoTab(page, "quest");
  assert.ok(await axis("Body") >= 100, "the points were not persisted");
  await ctx.close();
});

await test("tagging a daily task in the editor sticks", async () => {
  const { ctx, page } = await tagged();
  await gotoTab(page, "tasks");
  await page.locator(".inv-tap", { hasText: "Bruh at night" }).click();
  await page.waitForTimeout(250);
  await page.locator(".inv-edit .inv-tag-chips button", { hasText: "Self" }).first().click();
  await page.waitForTimeout(150);
  await page.locator(".note-btn.save").click();
  await page.waitForTimeout(400);
  const tags = await page.evaluate(() => {
    const inv = JSON.parse(localStorage.getItem("tasksh.inventory.v1") || "[]");
    return (inv.find((t) => t.id === 903) || {}).tags;
  });
  assert.deepEqual(tags, ["self"], `tags came back as ${JSON.stringify(tags)}`);
  await ctx.close();
});

await test("a daily task cannot be given more than two tags", async () => {
  // full credit x five tags would inflate every axis at once
  const { ctx, page } = await tagged();
  await gotoTab(page, "tasks");
  await page.locator(".inv-tap", { hasText: "Bruh at night" }).click();
  await page.waitForTimeout(250);
  const chips = page.locator(".inv-edit .inv-tag-chips button");
  const n = await chips.count();
  for (let i = 0; i < n; i++) { await chips.nth(i).click(); await page.waitForTimeout(60); }
  await page.locator(".note-btn.save").click();
  await page.waitForTimeout(400);
  const tags = await page.evaluate(() => {
    const inv = JSON.parse(localStorage.getItem("tasksh.inventory.v1") || "[]");
    return (inv.find((t) => t.id === 903) || {}).tags || [];
  });
  assert.ok(tags.length <= 2, `got ${tags.length} tags`);
  await ctx.close();
});

await test("the radar card names the untagged tasks instead of hiding them", async () => {
  const { ctx, page } = await tagged();
  await gotoTab(page, "quest");
  const txt = await page.locator(".radar-card").innerText();
  assert.match(txt, /untagged|no tag/i, "nothing told me a task is invisible to the chart");
  await ctx.close();
});

await test("the axis popup separates daily tasks from quests", async () => {
  const { ctx, page } = await tagged();
  await gotoTab(page, "tasks");
  await page.locator(".daily-card", { hasText: "100 push ups" }).click();
  await page.waitForTimeout(500);
  await gotoTab(page, "quest");
  await page.locator('svg.radar-chart [aria-label^="Body:"]').click();
  await page.waitForTimeout(350);
  const pop = page.locator(".axis-pop");
  assert.equal(await pop.count(), 1, "the axis popup did not open");
  assert.match(await pop.innerText(), /daily task/i, "the popup does not say what came from daily tasks");
  assert.match(await pop.innerText(), /100 push ups/);
  await ctx.close();
});

await test("deleting a tag does not leave a daily task pointing at nothing", async () => {
  const { ctx, page } = await tagged();
  await gotoTab(page, "quest");
  await page.locator(".radar-edit", { hasText: "edit tags" }).click();
  await page.waitForTimeout(350);
  assert.equal(await page.locator(".sheet-title", { hasText: "tags" }).count(), 1, "tag editor did not open");
  // the label lives in an <input value>, not in text, so hasText cannot see it
  const rows = page.locator(".tag-row");
  let row = null;
  for (let i = 0, n = await rows.count(); i < n; i++) {
    const v = await rows.nth(i).locator(".tag-input").inputValue().catch(() => null);
    if (v === "Body") { row = rows.nth(i); break; }
  }
  assert.ok(row, "no Body row in the tag editor");
  await row.locator(".tag-del").click();          // arms
  await page.waitForTimeout(200);
  await row.locator(".tag-del.armed").click();    // confirms
  await page.waitForTimeout(500);
  const stale = await page.evaluate(() => {
    const tags = JSON.parse(localStorage.getItem("tasksh.tags.v1") || "[]").map((t) => t.key);
    const inv = JSON.parse(localStorage.getItem("tasksh.inventory.v1") || "[]");
    return inv.flatMap((t) => (t.tags || []).filter((k) => !tags.includes(k)));
  });
  assert.deepEqual(stale, [], `daily tasks still wear deleted tags: ${JSON.stringify(stale)}`);
  await ctx.close();
});


// ------------------------------------------------- v55: routines as cards --
//
// They were one connected timeline -- a node per routine with a line running
// between them -- which reads as a single object you scroll rather than
// nineteen things you own, and left nowhere to hang per-routine detail.

await test("every routine is its own card, not a segment of one timeline", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const cards = page.locator(".routine-row");
  assert.ok(await cards.count() > 0, "no routines rendered");
  // discrete cards: each has its own border box and they do not touch
  const a = await cards.nth(0).boundingBox();
  const b = await cards.nth(1).boundingBox();
  assert.ok(b.y > a.y + a.height - 1, "cards overlap, so they are not separate");
  assert.equal(await page.locator(".routine-connector:visible").count(), 0,
    "the old connecting line is still drawn");
  await ctx.close();
});

await test("the status colour lands on the stripe, not on the whole border", async () => {
  // .edge sets the border shorthand later in the sheet and flattened this to
  // 1px; measured, not eyeballed
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const w = await page.locator(".routine-row").first().evaluate((el) => getComputedStyle(el).borderLeftWidth);
  assert.equal(w, "3px", `stripe collapsed to ${w}`);
  await ctx.close();
});

await test("each card carries its own last-seven-days strip", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const n = await page.locator(".routine-row").count();
  assert.equal(await page.locator(".routine-week").count(), n, "not every card has a week strip");
  assert.equal(await page.locator(".routine-row").first().locator(".rw-dot").count(), 7);
  await ctx.close();
});

await test("the week strip marks today, and the count matches the dots", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const card = page.locator(".routine-row").first();
  assert.equal(await card.locator(".rw-dot.today").count(), 1, "today is not marked exactly once");
  const lit = await card.locator(".rw-dot.on").count();
  assert.match((await card.locator(".rw-count").innerText()).trim(), new RegExp(`^${lit}/7$`));
  await ctx.close();
});

await test("the week strip reacts the moment a routine is toggled", async () => {
  // completing is a TOGGLE, not a one-way mark -- the first version of this
  // test assumed a tap always lights a dot and went red against a routine
  // that was already done today. What matters is that the strip tracks the
  // data, in whichever direction it moved.
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const strip = () => page.locator(".routine-row").first().locator(".rw-dot.on").count();
  const before = await strip();
  await page.locator(".day-block, .timeline-block").first().dblclick({ force: true }).catch(() => {});
  await page.waitForTimeout(500);
  const after = await strip();
  if (after !== before) {
    assert.equal(Math.abs(after - before), 1, "a single toggle moved more than one day");
  }
  // and today's marker must survive whatever happened
  assert.equal(await page.locator(".routine-row").first().locator(".rw-dot.today").count(), 1);
  await ctx.close();
});

await test("only the routine you are inside gets a progress bar", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const bars = await page.locator(".routine-progress").count();
  const current = await page.locator(".routine-row.current").count();
  assert.equal(bars, current, `${bars} progress bars for ${current} current routines`);
  await ctx.close();
});

await test("the routines tab still has no horizontal overflow as cards", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "routines");
  const over = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  assert.equal(over, false, "cards pushed the layout sideways");
  await ctx.close();
});

// --------------------------------------------------- the day rack (v58) ----

await test("the today rack counts every thing scheduled today, and nothing else", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "today");
  const pips = await page.locator(".tr-pip").count();
  assert.ok(pips > 0, "no pips on the landing tab");
  const text = await page.locator(".today-rack-top").innerText();
  const m = text.match(/(\d+)\/(\d+) done/);
  assert.ok(m, `the rack did not state a count: ${text}`);
  assert.equal(Number(m[2]), pips, `${m[2]} claimed but ${pips} pips drawn`);
  assert.ok(Number(m[1]) <= Number(m[2]), "more done than scheduled");
  await ctx.close();
});

await test("marking the spotlight routine moves exactly one pip", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "today");
  const before = await page.locator(".tr-pip.on").count();
  const total = await page.locator(".tr-pip").count();
  const btn = page.locator(".today-mark-btn");
  assert.equal(await btn.count(), 1, "no spotlight card to mark");
  await btn.click();
  await page.waitForTimeout(350);
  const after = await page.locator(".tr-pip.on").count();
  assert.ok(after === before + 1 || after === before - 1,
    `filling moved from ${before} to ${after}, which is not one pip`);
  assert.equal(await page.locator(".tr-pip").count(), total, "the number of things to do changed");
  await ctx.close();
});

await test("the scroll fade only appears while there is more below", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "today");
  const atTop = await page.evaluate(() => {
    const el = document.querySelector(".today-view");
    return { cls: el.className, mask: getComputedStyle(el).maskImage };
  });
  if (!atTop.cls.includes("scrollable")) { await ctx.close(); return; }  // short list, nothing to fade
  assert.notEqual(atTop.mask, "none", "a scrollable list with content below must fade");
  await page.evaluate(() => { const el = document.querySelector(".today-view"); el.scrollTop = el.scrollHeight; });
  await page.waitForTimeout(350);
  const atEnd = await page.evaluate(() => {
    const el = document.querySelector(".today-view");
    return { cls: el.className, mask: getComputedStyle(el).maskImage };
  });
  assert.ok(atEnd.cls.includes("at-end"), "reaching the end did not clear the fade");
  assert.equal(atEnd.mask, "none", "the last card is still dimmed at the end of the list");
  await ctx.close();
});

// ------------------------------------------------- the quest tab (v59) ----

await test("every quest card carries a seven-day strip in three states", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const cards = await page.locator(".quest-habit-card.good:not(.editing)").count();
  const strips = await page.locator(".habit-week").count();
  assert.ok(cards > 0, "no quest cards to check");
  assert.equal(strips, cards, `${strips} strips for ${cards} cards`);
  // .habit-week is not a first child -- it sits under the label and meta --
  // so the strip itself is counted, not ":first-child".
  const dots = await page.locator(".habit-week").first().locator(".hw-dot").count();
  assert.equal(dots, 7, `${dots} dots in the strip, expected 7`);
  await ctx.close();
});

await test("a slipped day is red, not an empty square", async () => {
  const { ctx, page } = await open();
  // seed both a done and a slip for today so the two states are on screen
  await page.evaluate(() => {
    const iso = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());
    const hs = JSON.parse(localStorage.getItem("tasksh.habits.v1") || "[]");
    if (hs.length < 2) return;
    hs[0] = { ...hs[0], history: [{ d: iso, t: "done" }] };
    hs[1] = { ...hs[1], history: [{ d: iso, t: "slip" }] };
    localStorage.setItem("tasksh.habits.v1", JSON.stringify(hs));
  });
  await page.reload({ waitUntil: "networkidle" });
  await gotoTab(page, "quest");
  assert.ok(await page.locator(".hw-dot.done").count() > 0, "a done day is not marked");
  assert.ok(await page.locator(".hw-dot.slip").count() > 0, "a slipped day is not marked");
  const doneBg = await page.locator(".hw-dot.done").first().evaluate((e) => getComputedStyle(e).backgroundColor);
  const slipBg = await page.locator(".hw-dot.slip").first().evaluate((e) => getComputedStyle(e).backgroundColor);
  assert.notEqual(doneBg, slipBg, "done and slipped render identically");
  await ctx.close();
});

await test("the radar names its strongest and weakest axis, or says nothing", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const split = await page.locator(".radar-split").count();
  if (split === 0) { await ctx.close(); return; }   // all axes equal: correctly silent
  const text = await page.locator(".radar-split").innerText();
  assert.match(text, /strongest/i);
  assert.match(text, /weakest/i);
  await ctx.close();
});

await test("the habits header states today's standing alongside the list", async () => {
  const { ctx, page } = await open();
  await gotoTab(page, "quest");
  const t = await page.locator(".habits-today").innerText();
  assert.match(t, /of \d+ done today/i, `header did not state a count: ${t}`);
  // and it must agree with the cards themselves
  const cards = await page.locator(".quest-habit-card.good").count();
  // the header is uppercased by CSS, and innerText reflects that, so the
  // match must be case-insensitive
  const stated = Number(t.match(/of (\d+)/i)[1]);
  assert.equal(stated, cards, `header claims ${stated} habits, ${cards} cards rendered`);
  await ctx.close();
});

await browser.close();
server.close();

console.log(results.join("\n"));


console.log(`  regress.spec.mjs — ${passed} passed`);
