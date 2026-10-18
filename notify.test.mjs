// notify.test.mjs
//
// Notification presentation: the status-bar badge, and what the worker puts
// in the push payload.
//
// The badge test decodes the PNG rather than just checking the filename,
// because the bug it guards against was invisible any other way: sw.js was
// passing icon-192.png as `badge`, Android throws a badge's colours away and
// fills its ALPHA CHANNEL with one flat tint, and that icon is 100% opaque --
// so the "icon" in the status bar was a solid white square. Nothing about the
// filename, the markup or the manifest looked wrong.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { inflateSync } from "node:zlib";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));
const SW = readFileSync(join(here, "sw.js"), "utf8");
const WORKER = readFileSync(join(here, "worker", "src", "index.js"), "utf8");

/** Minimal PNG reader: returns { width, height, colorType, alpha: Uint8Array }. */
function decodePNG(buf) {
  assert.equal(buf.readUInt32BE(0), 0x89504e47, "not a PNG");
  let i = 8, ihdr = null;
  const idat = [];
  while (i < buf.length) {
    const len = buf.readUInt32BE(i);
    const type = buf.toString("ascii", i + 4, i + 8);
    const data = buf.subarray(i + 8, i + 8 + len);
    if (type === "IHDR") {
      ihdr = {
        width: data.readUInt32BE(0), height: data.readUInt32BE(4),
        depth: data[8], colorType: data[9], interlace: data[12],
      };
    } else if (type === "IDAT") idat.push(data);
    else if (type === "IEND") break;
    i += 12 + len;
  }
  assert.ok(ihdr, "no IHDR");
  assert.equal(ihdr.depth, 8, "test only handles 8-bit PNGs");
  assert.equal(ihdr.interlace, 0, "test only handles non-interlaced PNGs");

  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ihdr.colorType];
  const bpp = channels;
  const raw = inflateSync(Buffer.concat(idat));
  const stride = ihdr.width * bpp;
  const out = Buffer.alloc(ihdr.height * stride);

  // undo the per-scanline filters, or the bytes are meaningless
  for (let y = 0; y < ihdr.height; y++) {
    const f = raw[y * (stride + 1)];
    const src = raw.subarray(y * (stride + 1) + 1, y * (stride + 1) + 1 + stride);
    const cur = out.subarray(y * stride, (y + 1) * stride);
    const prev = y ? out.subarray((y - 1) * stride, y * stride) : Buffer.alloc(stride);
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? cur[x - bpp] : 0;
      const b = prev[x];
      const c = x >= bpp ? prev[x - bpp] : 0;
      let v = src[x];
      if (f === 1) v += a;
      else if (f === 2) v += b;
      else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) {
        const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      cur[x] = v & 0xff;
    }
  }

  let alpha = null;
  if (ihdr.colorType === 6 || ihdr.colorType === 4) {
    alpha = new Uint8Array(ihdr.width * ihdr.height);
    for (let p = 0; p < alpha.length; p++) alpha[p] = out[p * bpp + (bpp - 1)];
  }
  return { ...ihdr, alpha };
}

const opaqueFraction = (file) => {
  const png = decodePNG(readFileSync(join(here, file)));
  assert.ok(png.alpha, `${file} has no alpha channel at all`);
  let n = 0;
  for (const a of png.alpha) if (a > 200) n++;
  return n / png.alpha.length;
};

let passed = 0;
// An async test handed to a harness that does not await it passes no matter
// what it asserts -- the rejection lands as an unhandled promise and the
// counter has already been incremented. Found exactly that way in v46, with
// six sync tests reporting green against code that had not run yet.
const pending = [];
const fail = (name, err) => {
  console.error(`\n  ✗ ${name}\n    ${err.message}\n`);
  process.exitCode = 1;
};
const test = (name, fn) => {
  let out;
  try { out = fn(); }
  catch (err) { fail(name, err); return; }
  if (out && typeof out.then === "function") {
    pending.push(out.then(() => { passed++; }, (err) => fail(name, err)));
    return;
  }
  passed++;
};

// ---------------------------------------------------------------- badge --

test("the badge is a separate asset from the app icon", () => {
  // reusing the app icon here is THE bug; they serve opposite purposes
  assert.ok(/badge:\s*asset\("badge-96\.png"\)/.test(SW), "badge is not badge-96.png");
  assert.ok(/icon:\s*asset\("icon-192\.png"\)/.test(SW), "icon is not icon-192.png");
  assert.ok(!/badge:\s*asset\("icon-/.test(SW), "the app icon is being used as the badge again");
});

test("the badge is a silhouette, not a solid block", () => {
  // Android fills the alpha shape with one tint. Fully opaque = white square.
  const frac = opaqueFraction("badge-96.png");
  assert.ok(frac < 0.5, `badge is ${(frac * 100).toFixed(0)}% opaque — it will render as a block`);
  assert.ok(frac > 0.02, `badge is only ${(frac * 100).toFixed(1)}% opaque — nothing will be visible`);
});

test("the app icon is still opaque, which is correct for `icon`", () => {
  // the large artwork in the shade SHOULD be a full solid icon -- this test
  // exists so the two never get "fixed" into each other
  assert.ok(opaqueFraction("icon-192.png") > 0.9, "the app icon lost its fill");
});

test("the badge is cached, so offline pushes still show it", () => {
  assert.ok(/"\.\/badge-96\.png"/.test(SW), "badge-96.png is not in the precache list");
});

// -------------------------------------------------------------- payload --

test("the routine is the headline, not the app name", () => {
  // "tasks.sh / X is starting now" buried the only useful word behind a name
  // the launcher already prints underneath the notification
  assert.ok(/title: routine\.label/.test(WORKER), "title is not the routine label");
  assert.ok(!/title: "tasks\.sh"/.test(WORKER), "title is still the hardcoded app name");
});

test("the body carries duration and what comes next", () => {
  assert.ok(/starting now/.test(WORKER), "no 'starting now'");
  assert.ok(/then \$\{after\.label\} at \$\{after\.time\}/.test(WORKER), "does not mention the next routine");
});

test("the notification is stamped with when it was DUE", () => {
  // Doze can defer delivery by minutes; without this the shade shows the time
  // Android got round to it, which makes a late reminder look on time
  assert.ok(/at: Date\.now\(\)/.test(WORKER), "worker does not send a timestamp");
  assert.ok(/timestamp: data\.at/.test(SW), "sw.js ignores the timestamp");
});

test("the last routine of the day omits a dangling 'then'", () => {
  assert.ok(/if \(after\) bits\.push/.test(WORKER), "'then ...' is not conditional");
});

// ---- KV write budget (v46) -------------------------------------------------
//
// Cloudflare's free KV tier allows 1,000 put()s a day across the whole
// worker. The schedule sync used to spend one on every app open and every
// routine tick, whether or not anything had changed, and the measured result
// was `POST /sync` returning
//   500 {"error":"KV put() limit exceeded for the day."}
// which also takes cloud backup down with it, because the quota is per
// account and not per route.

const APP = readFileSync(join(here, "app.jsx"), "utf8");

function syncModule() {
  const a = APP.indexOf("const STORAGE_KEY_SYNC_SENT");
  const b = APP.indexOf("\n\n", APP.indexOf("function syncPayloadUnchanged"));
  const src = APP.slice(a, b);
  const store = {};
  const stub = `
    const localStorage = {
      getItem: (k) => (k in __store ? __store[k] : null),
      setItem: (k, v) => { __store[k] = String(v); },
    };
    const getDeviceId = () => "dev-1";
    const NOTIFY_WORKER_URL = "https://worker.test";
  `;
  const calls = [];
  const fetchStub = async (url, opts) => {
    calls.push({ url, body: opts.body });
    return { ok: true, status: 200 };
  };
  const mod = new Function(
    "__store", "fetch",
    `${stub}\n${src}\nreturn { syncRoutinesToWorker, syncPayloadUnchanged, STORAGE_KEY_SYNC_SENT };`
  )(store, fetchStub);
  return { ...mod, calls, store };
}

test("an unchanged schedule is not pushed a second time", async () => {
  const m = syncModule();
  const routines = [{ id: 1, time: "07:00", label: "Gym", duration: 60 }];
  await m.syncRoutinesToWorker(routines);
  assert.equal(m.calls.length, 1, "the first push must happen");
  await m.syncRoutinesToWorker(routines);
  await m.syncRoutinesToWorker(routines);
  assert.equal(m.calls.length, 1, "an identical schedule spent another KV write");
});

test("a changed schedule is pushed", async () => {
  const m = syncModule();
  await m.syncRoutinesToWorker([{ id: 1, time: "07:00", label: "Gym", duration: 60 }]);
  await m.syncRoutinesToWorker([{ id: 1, time: "07:30", label: "Gym", duration: 60 }]);
  assert.equal(m.calls.length, 2, "a real edit must reach the worker");
});

test("only the four fields the widget needs go up", async () => {
  const m = syncModule();
  await m.syncRoutinesToWorker([
    { id: 1, time: "07:00", label: "Gym", duration: 60, history: ["2026-10-01"], secret: "x" },
  ]);
  const sent = JSON.parse(m.calls[0].body);
  assert.deepEqual(Object.keys(sent.routines[0]).sort(), ["duration", "id", "label", "time"]);
});

test("a tick that does not change the schedule costs nothing", async () => {
  // marking a routine complete replaces the array and changes `history`,
  // which is not in the payload -- so it must not reach the worker
  const m = syncModule();
  const before = [{ id: 1, time: "07:00", label: "Gym", duration: 60, history: [] }];
  const after = [{ id: 1, time: "07:00", label: "Gym", duration: 60, history: ["2026-10-18"] }];
  await m.syncRoutinesToWorker(before);
  await m.syncRoutinesToWorker(after);
  assert.equal(m.calls.length, 1, "ticking a routine spent a KV write");
});

test("force pushes even when nothing changed", async () => {
  // turning notifications on subscribes a fresh endpoint that has no
  // schedule against it yet, so that path must not be deduped
  const m = syncModule();
  const routines = [{ id: 1, time: "07:00", label: "Gym", duration: 60 }];
  await m.syncRoutinesToWorker(routines);
  await m.syncRoutinesToWorker(routines, { force: true });
  assert.equal(m.calls.length, 2);
});

test("a failed push is retried rather than marked sent", async () => {
  const store = {};
  const calls = [];
  const a = APP.indexOf("const STORAGE_KEY_SYNC_SENT");
  const b = APP.indexOf("\n\n", APP.indexOf("function syncPayloadUnchanged"));
  const mod = new Function("__store", "fetch", `
    const localStorage = {
      getItem: (k) => (k in __store ? __store[k] : null),
      setItem: (k, v) => { __store[k] = String(v); },
    };
    const getDeviceId = () => "dev-1";
    const NOTIFY_WORKER_URL = "https://worker.test";
    ${APP.slice(a, b)}
    return { syncRoutinesToWorker };
  `)(store, async (url, opts) => { calls.push(opts.body); return { ok: false, status: 500 }; });

  const routines = [{ id: 1, time: "07:00", label: "Gym", duration: 60 }];
  await mod.syncRoutinesToWorker(routines);
  await mod.syncRoutinesToWorker(routines);
  assert.equal(calls.length, 2, "a 500 was treated as success and never retried");
});

test("storage being unavailable means send, not skip", () => {
  const a = APP.indexOf("const STORAGE_KEY_SYNC_SENT");
  const b = APP.indexOf("\n\n", APP.indexOf("function syncPayloadUnchanged"));
  const mod = new Function(`
    const localStorage = { getItem() { throw new Error("denied"); }, setItem() {} };
    const getDeviceId = () => "d";
    const NOTIFY_WORKER_URL = "x";
    ${APP.slice(a, b)}
    return { syncPayloadUnchanged };
  `)();
  assert.equal(mod.syncPayloadUnchanged("anything"), false);
});

await Promise.all(pending);
console.log(`  notify.test.mjs — ${passed} passed`);
