// v73.spec.mjs — the night, the presets, the swipe and the split, in a browser
//
// Everything here is proved against the real bundle in headless Chromium, on a
// served clone, with storage seeded before the app boots. The pure units live
// in penalty.test.mjs; this file answers the different question of whether the
// wiring is actually connected -- the night runs on load, the swipe marks the
// day, the preset row appears, the split saves only when it adds up.

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

/** IST day strings, exactly the way the app computes them. */
const istDate = (offset = 0) => {
  const now = new Date(Date.now() + 5.5 * 3600 * 1000 + offset * 86400000);
  return now.toISOString().slice(0, 10);
};

const QUESTS = [
  { id: "q-easy", text: "10 push ups", diff: "easy", tags: ["body", "health"], history: [] },
  { id: "q-mid", text: "read 20 pages", diff: "mid", tags: ["mind"], history: [] },
  { id: "q-hard", text: "deep work hour", diff: "hard", tags: ["work"], history: [] },
];

const ROUTINES = [1e11 + 1, 1e11 + 2].map((id, i) => ({
  id, time: `0${6 + i}:30`, label: `routine ${i + 1}`, duration: 30, history: [], alternatives: [],
}));

/** localStorage seed, applied before any app code runs. */
function seedScript(entries) {
  return `(() => {
    localStorage.clear();
    const data = ${JSON.stringify(entries)};
    for (const [k, v] of Object.entries(data)) localStorage.setItem(k, JSON.stringify(v));
  })();`;
}

async function openApp(browser, port, entries = {}) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  await ctx.addInitScript(seedScript(entries));
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "load" });
  await page.waitForSelector(".tabs", { timeout: 15000 });
  await page.waitForTimeout(400);
  return { ctx, page, errors };
}

const stored = (page, key) => page.evaluate((k) => JSON.parse(localStorage.getItem(k) || "null"), key);

const { server, port } = await serve();
const browser = await chromium.launch();

// ---------------------------------------------------------------- the night --
// Three days ago was last settled; two days have ended since. Neither has ten
// routines and neither completed a board quest, so both owe: 10 off every tag
// and 50 off one random tag.
const lastDay = istDate(-3);
const dayA = istDate(-2);
const dayB = istDate(-1);

const nightSeed = {
  "tasksh.penalty.v1": {
    cfg: { on: true, routineMin: 10, routineFine: 10, questMin: 1, questFine: 50 },
    ledger: [],
    lastDay,
    boards: { [dayA]: QUESTS.map((q) => q.id), [dayB]: QUESTS.map((q) => q.id) },
  },
  "tasksh.inventory.v1": QUESTS,
  "tasksh.routines.v1": ROUTINES,
  "tasksh.daily.v1": { day: dayB, picks: { easy: "q-easy", mid: "q-mid", hard: "q-hard" }, done: [] },
};

await t("the missed nights are charged on open, once each, and never for today", async () => {
  const { ctx, page, errors } = await openApp(browser, port, nightSeed);
  try {
    await page.waitForFunction(() => {
      const st = JSON.parse(localStorage.getItem("tasksh.penalty.v1") || "null");
      return st && st.ledger && st.ledger.length > 0;
    }, null, { timeout: 8000 });
    const st = await stored(page, "tasksh.penalty.v1");
    const days = [...new Set(st.ledger.map((e) => e.day))].sort();
    assert.deepEqual(days, [dayA, dayB], `settled ${JSON.stringify(days)}`);
    const tags = new Set(st.ledger.map((e) => e.tag));
    assert.ok(tags.size >= 3, "the routine fine hit more than one tag");
    for (const day of [dayA, dayB]) {
      const onDay = st.ledger.filter((e) => e.day === day);
      const routine = onDay.filter((e) => e.kind === "routines");
      const quest = onDay.filter((e) => e.kind === "quests");
      assert.equal(routine.length, tags.size, "one routine charge per tag");
      assert.ok(routine.every((e) => e.amount === -10));
      assert.equal(quest.length, 1, "exactly one random tag for the quest fine");
      assert.equal(quest[0].amount, -50);
    }
    assert.equal(st.lastDay, istDate(0), "today is now marked settled");
    assert.equal(errors.length, 0, `page errors: ${errors.join(" | ")}`);
  } finally { await ctx.close(); }
});

await t("reopening does not charge the same night twice", async () => {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript(seedScript(nightSeed));
  const page = await ctx.newPage();
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "load" });
  await page.waitForFunction(() => JSON.parse(localStorage.getItem("tasksh.penalty.v1") || "null")?.ledger?.length > 0, null, { timeout: 8000 });
  const first = (await stored(page, "tasksh.penalty.v1")).ledger.length;
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(1200);
  const second = (await stored(page, "tasksh.penalty.v1")).ledger.length;
  assert.equal(second, first, `ledger grew from ${first} to ${second} across a reload`);
  await ctx.close();
});

await t("a clean profile is seeded and charged nothing", async () => {
  const { ctx, page } = await openApp(browser, port, {});
  try {
    const st = await stored(page, "tasksh.penalty.v1");
    assert.ok(st, "state was written on first run");
    assert.equal(st.lastDay, istDate(0));
    assert.deepEqual(st.ledger, [], "nobody is fined for a day the app never watched");
  } finally { await ctx.close(); }
});

await t("a day with ten routines and one board quest is clean", async () => {
  const seed = {
    "tasksh.penalty.v1": { cfg: { on: true, routineMin: 10, routineFine: 10, questMin: 1, questFine: 50 }, ledger: [], lastDay: dayA, boards: { [dayB]: ["q-easy", "q-mid", "q-hard"] } },
    "tasksh.routines.v1": ROUTINES.map((r) => ({ ...r, history: [dayB] })),
    "tasksh.inventory.v1": [{ ...QUESTS[0], history: [dayB] }, QUESTS[1], QUESTS[2]],
  };
  // ten routines, all done yesterday
  seed["tasksh.routines.v1"] = Array.from({ length: 10 }, (_, i) => ({ id: 2e11 + i, time: "06:00", label: `r${i}`, duration: 20, history: [dayB], alternatives: [] }));
  const { ctx, page } = await openApp(browser, port, seed);
  try {
    await page.waitForTimeout(1200);
    const st = await stored(page, "tasksh.penalty.v1");
    assert.deepEqual(st.ledger, [], `unexpected charges: ${JSON.stringify(st.ledger)}`);
    assert.equal(st.lastDay, istDate(0));
  } finally { await ctx.close(); }
});

await t("penalties off charges nothing at all", async () => {
  const seed = JSON.parse(JSON.stringify(nightSeed));
  seed["tasksh.penalty.v1"].cfg = { on: false, routineMin: 10, routineFine: 10, questMin: 1, questFine: 50 };
  const { ctx, page } = await openApp(browser, port, seed);
  try {
    await page.waitForTimeout(1200);
    assert.deepEqual((await stored(page, "tasksh.penalty.v1")).ledger, []);
  } finally { await ctx.close(); }
});

// -------------------------------------------------------------------- UI -----
await t("the penalty panel is in settings and the rules are editable", async () => {
  const { ctx, page } = await openApp(browser, port, nightSeed);
  try {
    await page.click("#tab-vault");
    await page.waitForSelector(".pen-card", { timeout: 5000 });
    const txt = await page.textContent(".pen-card");
    assert.match(txt, /fewer than 10 routines/);
    assert.match(txt, /3 daily quests|daily quests/);
    await page.click('.pen-card button:has-text("rules")');
    await page.waitForSelector(".pen-rules", { timeout: 3000 });
    assert.equal(await page.locator(".pen-rules input[type=number]").count(), 4);
    // change the routine fine to 25 and confirm it persists
    const fineInput = page.locator(".pen-rules input[type=number]").nth(1);
    await fineInput.fill("25");
    await page.waitForTimeout(300);
    assert.equal((await stored(page, "tasksh.penalty.v1")).cfg.routineFine, 25);
    assert.ok(await page.locator(".pen-ledger .pen-entry").count() > 0, "last night's receipt is shown");
  } finally { await ctx.close(); }
});

await t("a preset asks copy-or-scratch, and copying keeps the times", async () => {
  const { ctx, page } = await openApp(browser, port, { "tasksh.routines.v1": ROUTINES });
  try {
    await page.click("#tab-routines");
    await page.waitForSelector(".preset-box", { timeout: 5000 });
    await page.click(".preset-new");
    await page.waitForSelector(".preset-ask", { timeout: 3000 });
    const ask = await page.textContent(".preset-ask");
    assert.match(ask, /copy my 2 routines/);
    assert.match(ask, /start from scratch/);
    await page.fill(".preset-name-input", "winter");
    await page.click('.preset-ask .preset-btn:has-text("copy my 2 routines")');
    await page.waitForSelector(".preset-row", { timeout: 3000 });
    const presets = await stored(page, "tasksh.routinePresets.v1");
    assert.equal(presets.presets.length, 1);
    assert.equal(presets.presets[0].name, "winter");
    assert.equal(presets.presets[0].routines.length, 2);
    assert.equal(presets.presets[0].routines[0].time, ROUTINES[0].time, "the times came across");
    assert.equal(presets.presets[0].routines[0].history, undefined, "but not the history");
  } finally { await ctx.close(); }
});

await t("a preset survives a reload — it is actually read back", async () => {
  // The first cut of loadPresets rejected its own stored shape, so a preset
  // existed until the tab was closed and then quietly vanished.
  const { ctx, page } = await openApp(browser, port, {
    "tasksh.routines.v1": ROUTINES,
    "tasksh.routinePresets.v1": { presets: [{ id: 7, name: "winter", routines: [{ id: 1, label: "brush", time: "07:30", duration: 20, alternatives: [] }], madeAt: 1 }], activeId: 7 },
  });
  try {
    await page.click("#tab-routines");
    await page.waitForSelector(".preset-row", { timeout: 5000 });
    assert.match(await page.textContent(".preset-row"), /winter/);
    assert.match(await page.textContent(".preset-row"), /active/, "the active preset is marked");
    await page.reload({ waitUntil: "load" });
    await page.waitForSelector(".tabs", { timeout: 10000 });
    await page.click("#tab-routines");
    await page.waitForSelector(".preset-row", { timeout: 5000 });
    assert.equal(await page.locator(".preset-row").count(), 1);
  } finally { await ctx.close(); }
});

await t("applying a preset replaces the list but keeps the preset intact", async () => {
  const { ctx, page } = await openApp(browser, port, {
    "tasksh.routines.v1": ROUTINES,
    "tasksh.routinePresets.v1": { presets: [{ id: 7, name: "winter", routines: [{ id: 1, label: "brush", time: "07:30", duration: 20, alternatives: [] }], madeAt: 1 }], activeId: null },
  });
  try {
    await page.click("#tab-routines");
    await page.waitForSelector(".preset-row", { timeout: 5000 });
    await page.click('.preset-row .preset-btn:has-text("apply")');
    await page.waitForSelector(".preset-confirm", { timeout: 3000 });
    await page.click('.preset-confirm .preset-btn:has-text("yes, apply")');
    await page.waitForTimeout(500);
    const routines = await stored(page, "tasksh.routines.v1");
    assert.equal(routines.length, 1, "the list was replaced, not appended");
    assert.equal(routines[0].label, "brush");
    assert.equal(routines[0].time, "07:30");
    assert.deepEqual(routines[0].history, [], "a new season starts with a clean streak");
    const presets = await stored(page, "tasksh.routinePresets.v1");
    assert.equal(presets.presets.length, 1, "the template itself is untouched");
    assert.equal(presets.activeId, 7);
  } finally { await ctx.close(); }
});

await t("scratch is a different answer: an empty preset", async () => {
  const { ctx, page } = await openApp(browser, port, { "tasksh.routines.v1": ROUTINES });
  try {
    await page.click("#tab-routines");
    await page.click(".preset-new");
    await page.fill(".preset-name-input", "summer");
    await page.click('.preset-ask .preset-btn:has-text("start from scratch")');
    await page.waitForSelector(".preset-row", { timeout: 3000 });
    const presets = await stored(page, "tasksh.routinePresets.v1");
    assert.deepEqual(presets.presets[0].routines, []);
  } finally { await ctx.close(); }
});

await t("swiping a routine right marks today done; swiping left deletes nothing", async () => {
  const { ctx, page } = await openApp(browser, port, { "tasksh.routines.v1": ROUTINES });
  try {
    await page.click("#tab-routines");
    const row = page.locator(".routine-row").first();
    await row.waitFor({ timeout: 5000 });
    const box = await row.boundingBox();
    const cy = box.y + box.height / 2;
    const drag = async (dx) => {
      await page.mouse.move(box.x + 20, cy);
      await page.mouse.down();
      for (let i = 1; i <= 8; i++) await page.mouse.move(box.x + 20 + (dx * i) / 8, cy);
      await page.mouse.up();
      await page.waitForTimeout(350);
    };
    // swipe LEFT first: nothing may be deleted
    await drag(-100);
    let routines = await stored(page, "tasksh.routines.v1");
    assert.equal(routines.length, 2, "a left swipe deleted a routine");
    // then swipe RIGHT: the first routine is done today
    await drag(110);
    routines = await stored(page, "tasksh.routines.v1");
    assert.equal(routines.length, 2, "a right swipe deleted a routine");
    const done = routines.filter((r) => (r.history || []).includes(istDate(0)));
    assert.equal(done.length, 1, "the swipe did not mark the day");
  } finally { await ctx.close(); }
});

// the quest tab lists QUESTS (habits), so a two-tag quest is a habit entry
const TWO_TAG = { id: 9001, label: "Two tag quest", tags: ["body", "health"], xp: 20, penalty: 0, history: [] };
const ONE_TAG = { id: 9002, label: "One tag quest", tags: ["mind"], xp: 20, penalty: 0, history: [] };

await t("a two-tag quest shows the split, and only a 100% split is saved", async () => {
  const { ctx, page } = await openApp(browser, port, { "tasksh.habits.v1": [TWO_TAG, ONE_TAG] });
  try {
    await page.click("#tab-quest");
    await page.waitForSelector(".quest-habit-card", { timeout: 6000 });
    const card = page.locator(".quest-habit-card", { hasText: "Two tag quest" }).first();
    await card.locator(".vault-card-edit").click();
    await page.waitForSelector(".quest-habit-card.editing", { timeout: 5000 });
    const panel = page.locator(".quest-habit-card.editing").first();
    await panel.locator(".edit-share").waitFor({ timeout: 4000 });
    assert.equal(await panel.locator(".edit-share-row").count(), 2, "one slider per tag");
    // an un-edited split totals 0 -> the hint says so
    assert.match(await panel.textContent(".edit-share-hint"), /counts in full toward every tag/i, "an unset split says so rather than reading 0%");
    await panel.locator('.edit-share-btn:has-text("split evenly")').click();
    await page.waitForTimeout(150);
    assert.match(await panel.textContent(".edit-share-total"), /100%/);
    await panel.locator(".edit-save").click();
    await page.waitForTimeout(400);
    const inv = await stored(page, "tasksh.habits.v1");
    const q = inv.find((x) => x.id === "q-easy" || x.id === 9001);
    assert.ok(q.tagShare, "the split was saved");
    assert.equal(q.tagShare.body + q.tagShare.health, 100);
    assert.ok(q.tagShare.body >= 50 && q.tagShare.health >= 50, `even split, got ${JSON.stringify(q.tagShare)}`);
  } finally { await ctx.close(); }
});

await t("one-tag quests keep the whole value and show no split", async () => {
  const { ctx, page } = await openApp(browser, port, { "tasksh.habits.v1": [TWO_TAG, ONE_TAG] });
  try {
    await page.click("#tab-quest");
    await page.waitForSelector(".quest-habit-card", { timeout: 6000 });
    const card = page.locator(".quest-habit-card", { hasText: "One tag quest" }).first();
    await card.locator(".vault-card-edit").click();
    await page.waitForSelector(".quest-habit-card.editing", { timeout: 5000 });
    const panel = page.locator(".quest-habit-card.editing").first();
    assert.equal(await panel.locator(".edit-share").count(), 0, "no split for a single tag");
  } finally { await ctx.close(); }
});

await browser.close();
server.close();
console.log(`\nv73.spec.mjs: ${pass} passed, ${fail} failed`);
