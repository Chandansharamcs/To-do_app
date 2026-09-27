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
const test = (name, fn) => {
  try { fn(); passed++; }
  catch (err) { console.error(`\n  ✗ ${name}\n    ${err.message}\n`); process.exitCode = 1; }
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

console.log(`  notify.test.mjs — ${passed} passed`);
