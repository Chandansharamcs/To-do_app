// captions.test.mjs
//
// The caption pipeline's arithmetic (v40).
//
// The AI is the easy part — it returns words and timings. Everything that
// makes captions look professional rather than automatic happens after that
// in chunkWords, and everything that makes the upload fit inside a free tier
// happens in encodeWav/downmixTo16k. Both are pure, so both are tested here.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

function slice(name) {
  const fn = SRC.match(new RegExp("^(?:async )?function " + name + "\\(", "m"));
  const cn = SRC.match(new RegExp("^const " + name + "\\s*=", "m"));
  const m = fn || cn;
  if (!m) throw new Error("not found in app.jsx: " + name);

  let i;
  if (fn) {
    i = SRC.indexOf("(", m.index);
    let d = 0;
    for (; i < SRC.length; i++) {
      if (SRC[i] === "(") d++;
      else if (SRC[i] === ")") { d--; if (d === 0) { i++; break; } }
    }
  } else {
    i = SRC.indexOf("=", m.index) + 1;
  }

  let dep = 0, seen = false, st = null, line = false, blk = false;
  for (; i < SRC.length; i++) {
    const c = SRC[i], p = SRC[i - 1];
    if (line) { if (c === "\n") line = false; continue; }
    if (blk) { if (c === "/" && p === "*") blk = false; continue; }
    if (st) { if (c === st && p !== "\\") st = null; continue; }
    if (c === "/" && SRC[i + 1] === "/") { line = true; continue; }
    if (c === "/" && SRC[i + 1] === "*") { blk = true; continue; }
    if (c === '"' || c === "'" || c === "`") { st = c; continue; }
    if (c === "{" || c === "[") { dep++; seen = true; continue; }
    if (c === "}" || c === "]") { dep--; if (seen && dep === 0) return SRC.slice(m.index, SRC.indexOf("\n", i)); continue; }
    if (c === ";" && dep === 0 && cn) return SRC.slice(m.index, i + 1);
  }
  throw new Error("unterminated slice: " + name);
}

const NAMES = [
  "CAPTION_MAX_SECONDS", "CAPTION_LIMITS", "CAPTION_FONTS", "CAPTION_HIGHLIGHTS",
  "CAPTION_PRESETS", "DEFAULT_CAPTION_STYLE", "CAPTION_SAMPLE_WORDS",
  "sanitiseCaptionStyle", "captionFontStack",
  "chunkWords", "activeChunkAt", "activeWordIndex",
  "wordsFromGroqResponse", "encodeWav", "downmixTo16k",
];
const M = new Function([...NAMES.map(slice), `return {${NAMES.join(",")}};`].join("\n\n"))();

const w = (text, start, end) => ({ word: text, start, end });

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- line breaking ---------------------------------------------------------

T("three words a line, max", () => {
  const c = M.chunkWords([w("a", 0, .2), w("b", .2, .4), w("c", .4, .6), w("d", .6, .8)]);
  assert.equal(c.length, 2);
  assert.equal(c[0].words.length, 3);
  assert.equal(c[1].text, "d");
});

T("a long word pair breaks early on character count", () => {
  // three words would fit the word budget but not a phone screen
  const c = M.chunkWords([
    w("extraordinary", 0, .5), w("circumstances", .5, 1), w("today", 1, 1.3),
  ]);
  assert.ok(c.length >= 2, "22-char limit not enforced");
  assert.ok(c[0].text.length <= 22, `line too long: ${c[0].text}`);
});

T("a pause starts a new line", () => {
  // 500ms of silence is the speaker marking a phrase boundary for you
  const c = M.chunkWords([w("so", 0, .2), w("anyway", 1.0, 1.4)]);
  assert.equal(c.length, 2);
});

T("a line breaks after a full stop, not before", () => {
  const c = M.chunkWords([w("done.", 0, .3), w("next", .35, .6)]);
  assert.equal(c.length, 2);
  assert.equal(c[0].text, "done.");
  assert.equal(c[1].text, "next");
});

T("nothing flashes for under 250ms", () => {
  const c = M.chunkWords([w("hi", 0, 0.05)]);
  assert.ok(c[0].end - c[0].start >= 0.25, "a 50ms caption survived");
});

T("extending a short line never overlaps the next one", () => {
  // two chunks on screen at once double-draws and looks broken
  const c = M.chunkWords([w("hi.", 0, 0.05), w("there", 0.1, 0.5)]);
  assert.ok(c[0].end <= c[1].start, `overlap: ${c[0].end} > ${c[1].start}`);
});

T("junk words are dropped, not rendered", () => {
  const c = M.chunkWords([
    w("", 0, 1), w("  ", 1, 2), { word: "ok", start: "x", end: 3 },
    { word: "fine", start: 5, end: 4 }, w("good", 6, 6.4),
  ]);
  assert.equal(c.length, 1);
  assert.equal(c[0].text, "good");
});

T("an empty transcript is an empty track, not a crash", () => {
  assert.deepEqual(M.chunkWords([]), []);
  assert.deepEqual(M.chunkWords(null), []);
});

// ---- playback lookup -------------------------------------------------------

const CH = M.chunkWords([w("one", 0, .4), w("two", .4, .8), w("three", 1.5, 2.0)]);

T("the right line is on screen at the right moment", () => {
  assert.equal(M.activeChunkAt(CH, 0.1).text, "one two");
  assert.equal(M.activeChunkAt(CH, 1.6).text, "three");
});

T("gaps between lines show nothing", () => {
  assert.equal(M.activeChunkAt(CH, 1.0), null);
  assert.equal(M.activeChunkAt(CH, 99), null);
});

T("the highlighted word follows the voice", () => {
  const c = CH[0];
  assert.equal(M.activeWordIndex(c, 0.0), 0);
  assert.equal(M.activeWordIndex(c, 0.5), 1);
  assert.equal(M.activeWordIndex(null, 1), -1);
});

// ---- provider response -----------------------------------------------------

T("word-level timings are read straight out", () => {
  const out = M.wordsFromGroqResponse({ words: [{ word: "hey", start: 0, end: 0.3 }] });
  assert.equal(out.length, 1);
  assert.equal(out[0].text, "hey");
});

T("a segments-only response still produces captions", () => {
  // documented fallback: better coarse captions than none
  const out = M.wordsFromGroqResponse({ segments: [{ text: " hello there ", start: 0, end: 1 }] });
  assert.equal(out[0].text, "hello there");
});

T("a junk response yields nothing rather than throwing", () => {
  assert.deepEqual(M.wordsFromGroqResponse(null), []);
  assert.deepEqual(M.wordsFromGroqResponse({ nope: 1 }), []);
});

// ---- the upload ------------------------------------------------------------

const readStr = (dv, off, len) =>
  Array.from({ length: len }, (_, i) => String.fromCharCode(dv.getUint8(off + i))).join("");

T("the WAV header is a real WAV header", () => {
  const buf = M.encodeWav(new Float32Array([0, 0.5, -0.5]), 16000);
  const dv = new DataView(buf);
  assert.equal(readStr(dv, 0, 4), "RIFF");
  assert.equal(readStr(dv, 8, 4), "WAVE");
  assert.equal(readStr(dv, 12, 4), "fmt ");
  assert.equal(readStr(dv, 36, 4), "data");
  assert.equal(dv.getUint16(22, true), 1, "not mono");
  assert.equal(dv.getUint32(24, true), 16000, "wrong sample rate");
  assert.equal(dv.getUint16(34, true), 16, "not 16-bit");
  assert.equal(dv.getUint32(40, true), 6, "wrong data size");
  assert.equal(buf.byteLength, 44 + 6);
});

T("samples are clamped, so a hot mic can't wrap around to silence", () => {
  const dv = new DataView(M.encodeWav(new Float32Array([2, -2]), 16000));
  assert.equal(dv.getInt16(44, true), 32767);
  assert.equal(dv.getInt16(46, true), -32768);
});

T("a minute of speech lands well inside Groq's free 25MB cap", () => {
  // this is the whole reason audio is stripped out instead of uploading the
  // video: 16kHz mono 16-bit = 32KB/s, so 60s is ~1.9MB
  const bytes = 44 + 16000 * 60 * 2;
  assert.ok(bytes < 25 * 1024 * 1024, "over the free tier limit");
  assert.ok(bytes / 1048576 < 2.0, `unexpectedly large: ${(bytes / 1048576).toFixed(2)}MB`);
});

T("stereo is mixed down and resampled to 16k", () => {
  const L = new Float32Array(96), R = new Float32Array(96);
  L.fill(1); R.fill(-1);
  const out = M.downmixTo16k([L, R], 48000, 16000);
  assert.equal(out.length, 32, "wrong output length for 3:1 decimation");
  assert.equal(out[0], 0, "channels were not averaged");
});

T("mono passes through at the right length", () => {
  const mono = new Float32Array(48000).fill(0.25);
  const out = M.downmixTo16k([mono], 48000, 16000);
  assert.equal(out.length, 16000);
  assert.ok(Math.abs(out[100] - 0.25) < 1e-6);
});

// ---- styles ----------------------------------------------------------------

T("every preset lands inside the readable range", () => {
  for (const p of M.CAPTION_PRESETS) {
    const st = M.sanitiseCaptionStyle({ ...M.DEFAULT_CAPTION_STYLE, ...p.patch });
    assert.ok(st.size >= 0.04 && st.size <= 0.09, `${p.id}: font ${st.size} of frame height`);
    assert.ok(st.weight >= 700, `${p.id}: too light at ${st.weight}`);
    // a chip supplies its own contrast, so it is the one style allowed a
    // thin outline
    if (st.highlight !== "box") {
      assert.ok(st.strokeW >= 0.1, `${p.id}: outline too thin to survive a white background`);
    }
    assert.ok(st.posY <= 0.92, `${p.id}: sits under Instagram's UI`);
  }
});

T("out-of-range values are clamped, not accepted", () => {
  const st = M.sanitiseCaptionStyle({ size: 5, weight: 12000, posY: 3, strokeW: -1, maxWords: 99, tracking: 9 });
  assert.equal(st.size, M.CAPTION_LIMITS.size[1]);
  assert.equal(st.weight, 900);
  assert.equal(st.posY, M.CAPTION_LIMITS.posY[1]);
  assert.equal(st.strokeW, 0);
  assert.equal(st.maxWords, M.CAPTION_LIMITS.maxWords[1]);
  assert.equal(st.tracking, M.CAPTION_LIMITS.tracking[1]);
});

T("a zero size or a word-per-screen size is impossible", () => {
  assert.equal(M.sanitiseCaptionStyle({ size: 0 }).size, M.CAPTION_LIMITS.size[0]);
  assert.ok(M.sanitiseCaptionStyle({ size: 0.9 }).size <= 0.12);
});

T("weight snaps to hundreds, because 843 is not a font weight", () => {
  assert.equal(M.sanitiseCaptionStyle({ weight: 843 }).weight, 800);
});

T("unknown font, highlight or alignment falls back instead of blanking", () => {
  const st = M.sanitiseCaptionStyle({ font: "comic", highlight: "disco", align: "sideways" });
  assert.equal(st.font, "inter");
  assert.equal(st.highlight, "colour");
  assert.equal(st.align, "center");
});

T("garbage in gives a usable style, not NaN", () => {
  const st = M.sanitiseCaptionStyle({ size: "big", posY: null, maxWords: undefined });
  assert.equal(st.size, M.DEFAULT_CAPTION_STYLE.size);
  assert.ok(isFinite(st.posY) && isFinite(st.maxWords));
});

T("every font id resolves to a real stack", () => {
  for (const f of M.CAPTION_FONTS) {
    assert.ok(M.captionFontStack(f.id).length > 3, `${f.id} has no stack`);
  }
  assert.equal(M.captionFontStack("nope"), M.CAPTION_FONTS[0].stack);
});

T("four highlight behaviours, each explained in the UI", () => {
  assert.equal(M.CAPTION_HIGHLIGHTS.length, 4);
  for (const h of M.CAPTION_HIGHLIGHTS) assert.ok(h.hint && h.hint.length > 5, `${h.id} has no hint`);
});

T("the sample loop breaks into more than one line, or it teaches nothing", () => {
  // the editor previews against this; if it were one line you could not see
  // what words-per-line or a pause actually does
  const c = M.chunkWords(M.CAPTION_SAMPLE_WORDS, { maxWords: 3 });
  assert.ok(c.length >= 3, `sample produced ${c.length} lines`);
  assert.ok(M.CAPTION_SAMPLE_WORDS[M.CAPTION_SAMPLE_WORDS.length - 1].end <= 5, "sample runs past the 5s loop");
});

T("words per line actually changes the line count", () => {
  const one = M.chunkWords(M.CAPTION_SAMPLE_WORDS, { maxWords: 1 });
  const four = M.chunkWords(M.CAPTION_SAMPLE_WORDS, { maxWords: 4 });
  assert.equal(one.length, M.CAPTION_SAMPLE_WORDS.length);
  assert.ok(four.length < one.length, "maxWords had no effect");
});

T("the clip limit matches what the free tier and the memory budget allow", () => {
  assert.equal(M.CAPTION_MAX_SECONDS, 60);
});

// ---- run -------------------------------------------------------------------

for (const [name, fn] of tests) {
  try { await fn(); pass++; console.log("  ✓", name); }
  catch (e) { failed++; console.log("  ✗", name, "\n     ", e && e.message); }
}
console.log(`  captions.test.mjs — ${pass} passed${failed ? `, ${failed} FAILED` : ""}`);
if (failed) process.exitCode = 1;
