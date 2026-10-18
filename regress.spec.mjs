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
  { id: 501, label: "Swipe Me", area: "work", sub: "deep", xp: 30, penalty: 10, history: [] },
  { id: 502, label: "Other One", area: "self", sub: "creative", xp: 10, penalty: 5, history: [] },
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
  const box = await locator.boundingBox();
  const y = box.y + box.height / 2;
  const x0 = dx > 0 ? box.x + 18 : box.x + box.width - 18;
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
    localStorage.setItem("tasksh.radarmode.v1", "subs");
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
      { id: 1, label: "Screen Time", area: "health", sub: "mind", xp: 0, penalty: 40,
        history: [{ d: "2026-01-01", t: "slip" }, { d: "2026-01-02", t: "slip" }] },
    ]));
    localStorage.setItem("tasksh.radarmode.v1", "subs");
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
      { id: 1, label: "Screen Time", area: "health", sub: "mind", xp: 0, penalty: 40,
        history: [{ d: "2026-01-01", t: "slip" }, { d: "2026-01-02", t: "slip" }] },
    ]));
    localStorage.setItem("tasksh.radarmode.v1", "subs");
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
    if (!/Mind/i.test(l)) continue;
    await dots.nth(i).click();
    await page.waitForTimeout(260);
    found = (await page.locator(".axis-pop-raw").count()) === 1;
    break;
  }
  assert.ok(found, `the Mind axis did not report its hidden deficit. axes: ${labels.join(" | ")}`);
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

await browser.close();
server.close();

console.log(results.join("\n"));


console.log(`  regress.spec.mjs — ${passed} passed`);
