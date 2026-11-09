// sight.test.mjs — v74
//
// The splitter is the whole feature: a wrong split shows him the wrong words at
// the wrong moment, and with Hindi or Punjabi there is no capital letter to
// fall back on. So every rule here is pinned: what ends a sentence, what must
// NOT end one (decimals, abbreviations, initials), what happens to copy pasted
// with no punctuation at all, and how word mode counts across a sentence.
//
// Pure functions sliced out of app.jsx and run in a bare Function scope --
// no browser, no clock, no React.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

let pass = 0;
const t = (n, f) => { try { f(); pass++; console.log("  ✓", n); } catch (e) { console.log("  ✗", n, "\n     ", e.message); process.exitCode = 1; } };

const start = SRC.indexOf("const SIGHT_MAX_CHARS");
const end = SRC.indexOf("function SightTool()");
assert.ok(start > 0 && end > start, "sight engine not found in app.jsx");
const E = new Function(`${SRC.slice(start, end)}; return { SIGHT_DEFAULTS, SIGHT_MAX_CHUNKS, sightWords, sightSentences, sightCapitalRescue, sightChunk, sightPlan, sightScript, sightClock, sightBits };`)();

// ------------------------------------------------------------- english -----
t("a plain English paragraph splits on its full stops, punctuation kept", () => {
  const out = E.sightSentences("I write every morning. It is quiet then. That is the point.");
  assert.deepEqual(out, ["I write every morning.", "It is quiet then.", "That is the point."]);
});

t("question marks and exclamations end sentences too", () => {
  const out = E.sightSentences("Why write? Because it clears the head! Try it.");
  assert.deepEqual(out, ["Why write?", "Because it clears the head!", "Try it."]);
});

t("a run of enders stays together, and closing quotes come with it", () => {
  const out = E.sightSentences('She said "go." Then she left.');
  assert.deepEqual(out, ['She said "go."', "Then she left."]);
  assert.deepEqual(E.sightSentences("Really?! Yes."), ["Really?!", "Yes."]);
});

t("a decimal point is not a full stop", () => {
  assert.deepEqual(E.sightSentences("It cost 3.5 rupees today."), ["It cost 3.5 rupees today."]);
});

t("common abbreviations do not split a sentence", () => {
  assert.deepEqual(E.sightSentences("Dr. Rao came. He stayed."), ["Dr. Rao came.", "He stayed."]);
  assert.deepEqual(E.sightSentences("Bring water etc. and food."), ["Bring water etc. and food."]);
});

t("initials do not split a sentence", () => {
  assert.deepEqual(E.sightSentences("A. P. J. Abdul Kalam wrote it."), ["A. P. J. Abdul Kalam wrote it."]);
});

t("a newline is a hard break even with no punctuation", () => {
  assert.deepEqual(E.sightSentences("first line\nsecond line"), ["first line", "second line"]);
});

// --------------------------------------------------------------- hindi -----
t("the danda ends a Hindi sentence", () => {
  const out = E.sightSentences("मैं रोज़ लिखता हूँ। आज सुबह बहुत शांत थी।");
  assert.deepEqual(out, ["मैं रोज़ लिखता हूँ।", "आज सुबह बहुत शांत थी।"]);
});

t("the double danda ends one too", () => {
  assert.deepEqual(E.sightSentences("पहला वाक्य॥ दूसरा वाक्य॥"), ["पहला वाक्य॥", "दूसरा वाक्य॥"]);
});

t("Devanagari words are segmented, not split on every character", () => {
  const w = E.sightWords("मैं रोज़ लिखता हूँ");
  assert.equal(w.length, 4);
  assert.equal(w[0].text, "मैं");
});

t("Gurmukhi is detected and segmented", () => {
  assert.equal(E.sightScript("ਮੈਂ ਰੋਜ਼ ਲਿਖਦਾ ਹਾਂ।"), "pa");
  assert.equal(E.sightScript("मैं रोज़ लिखता हूँ।"), "hi");
  assert.equal(E.sightScript("I write daily."), "en");
  const w = E.sightWords("ਮੈਂ ਰੋਜ਼ ਲਿਖਦਾ ਹਾਂ");
  assert.equal(w.length, 4);
});

t("a Punjabi paragraph splits on its danda", () => {
  const out = E.sightSentences("ਮੈਂ ਰੋਜ਼ ਲਿਖਦਾ ਹਾਂ। ਅੱਜ ਸ਼ਾਂਤ ਸੀ।");
  assert.equal(out.length, 2);
  assert.ok(out[0].endsWith("।"));
});

// -------------------------------------------------------- capital rescue ----
t("copy with no punctuation is broken before capitals, not left as one block", () => {
  const src = "i sat down to write and the words did not come Then the phone rang and i answered it And after that i wrote two pages";
  const out = E.sightCapitalRescue(src, 6);
  assert.ok(out.length >= 2, `expected more than one part, got ${out.length}`);
  assert.ok(out.every((p) => p.length > 0));
});

t("rescue leaves a sentence that already ends alone", () => {
  const one = "A short sentence that ends.";
  assert.deepEqual(E.sightCapitalRescue(one), [one]);
});

t("rescue never fires on scripts without capitals", () => {
  const hi = "मैं रोज़ सुबह उठकर लिखता हूँ और फिर काम पर जाता हूँ और शाम को पढ़ता हूँ";
  assert.deepEqual(E.sightCapitalRescue(hi), [hi]);
});

// -------------------------------------------------------------- chunking ---
t("sentence mode returns the sentences unchanged", () => {
  const out = E.sightChunk("One. Two. Three.", { mode: "sentence" });
  assert.deepEqual(out, ["One.", "Two.", "Three."]);
});

t("3 words per sight, and the count restarts at each sentence", () => {
  const out = E.sightChunk("One two three four. Five six.", { mode: "words", words: 3 });
  assert.deepEqual(out, ["One two three", "four.", "Five six."]);
});

t("chunks carry the punctuation they ended on", () => {
  const out = E.sightChunk("Wait, stop there please.", { mode: "words", words: 2 });
  assert.equal(out[0], "Wait, stop");
  assert.ok(out.join(" ").includes("there please."));
});

t("6 words per sight on a long sentence", () => {
  const words = Array.from({ length: 13 }, (_, i) => `w${i + 1}`).join(" ") + ".";
  const out = E.sightChunk(words, { mode: "words", words: 6 });
  assert.equal(out.length, 3);
  assert.equal(E.sightWords(out[0]).length, 6);
  assert.equal(E.sightWords(out[2]).length, 1);
});

t("a sight never straddles two sentences", () => {
  const out = E.sightChunk("a b c d e. f g h i j.", { mode: "words", words: 4 });
  assert.deepEqual(out, ["a b c d", "e.", "f g h i", "j."]);
});

t("hindi word mode works the same way", () => {
  const out = E.sightChunk("एक दो तीन चार पांच छह। सात आठ।", { mode: "words", words: 3 });
  assert.equal(out.length, 3);
  assert.equal(E.sightWords(out[0]).length, 3);
  assert.ok(out[1].endsWith("।"));
});

t("words per sight is clamped to 1..50", () => {
  const text = "a b c d e f g h.";
  // 0 and nonsense fall back to 3, the default he asked for
  assert.equal(E.sightWords(E.sightChunk(text, { mode: "words", words: 0 })[0]).length, 3);
  assert.equal(E.sightWords(E.sightChunk(text, { mode: "words", words: "x" })[0]).length, 3);
  // 1 is honoured, and 999 becomes 50 -- one sight for the whole sentence
  assert.equal(E.sightWords(E.sightChunk(text, { mode: "words", words: 1 })[0]).length, 1);
  assert.equal(E.sightChunk(text, { mode: "words", words: 999 }).length, 1);
});

t("empty and whitespace-only input produce nothing, not an empty sight", () => {
  for (const v of ["", "   ", "\n\n", null, undefined]) {
    assert.deepEqual(E.sightChunk(v, {}), [], `input ${JSON.stringify(v)}`);
  }
});

t("a huge paste is capped instead of freezing the tab", () => {
  const big = "This is a sentence. ".repeat(5000);
  const out = E.sightChunk(big, { mode: "sentence" });
  assert.ok(out.length <= E.SIGHT_MAX_CHUNKS);
});

t("leading and trailing whitespace never reaches a sight", () => {
  const out = E.sightChunk("   Hello there.   Bye.  ", { mode: "sentence" });
  assert.deepEqual(out, ["Hello there.", "Bye."]);
});

// ----------------------------------------------------------------- plan ----
t("the pre-start estimate is interval × sights", () => {
  const p = E.sightPlan(["a b", "c d", "e f"], 10);
  assert.equal(p.count, 3);
  assert.equal(p.words, 6);
  assert.equal(p.totalMs, 30000);
  assert.equal(E.sightClock(p.totalMs), "0:30");
});

t("an empty plan claims no time", () => {
  assert.equal(E.sightPlan([], 10).totalMs, 0);
});

t("a nonsense interval is still a real number of seconds", () => {
  assert.equal(E.sightPlan(["a"], 0).perChunkMs, 1000);
  assert.equal(E.sightPlan(["a"], "x").perChunkMs, 1000);
});

t("the clock reads m:ss and never goes negative", () => {
  assert.equal(E.sightClock(0), "0:00");
  assert.equal(E.sightClock(61000), "1:01");
  assert.equal(E.sightClock(600000), "10:00");
  assert.equal(E.sightClock(-50), "0:00");
});

t("the celebration is deterministic and flat", () => {
  const a = E.sightBits(10), b = E.sightBits(10);
  assert.deepEqual(a, b, "a re-render must not reshuffle the rain");
  assert.equal(a.length, 10);
  assert.ok(a.every((x) => x.left >= 0 && x.left <= 100 && x.dur >= 800));
});

// ------------------------------------------------------------ structure ----
const comp = SRC.slice(SRC.indexOf("function SightTool()"), SRC.indexOf("const TOOLS = ["));

t("sight is registered as a tool with a glyph and a component", () => {
  assert.match(SRC, /id: "sight",\n\s+glyph: "▦",\n\s+name: "sight",/);
  assert.match(SRC, /Component: SightTool,/);
});

t("nothing is saved — the tool writes no storage key", () => {
  assert.ok(!/localStorage/.test(comp), "sight touched localStorage");
  assert.ok(!/STORAGE_KEY/.test(comp), "sight declared a storage key");
});

t("it advances on its own and a tap skips ahead", () => {
  assert.match(comp, /if \(inChunk < perMs\) return;\n\s+next\(\);/);
  assert.match(comp, /onClick=\{next\}/, "the stage is not tappable");
  assert.match(comp, /const t = setInterval\(\(\) => \{/, "no clock");
});

t("pausing stops the clock as well as the advance", () => {
  assert.match(comp, /if \(phase !== "run" \|\| paused\) return;[\s\S]{0,120}setInterval/);
});

t("three lines are on screen: previous, current, next", () => {
  assert.match(comp, /sight-line prev/);
  assert.match(comp, /sight-line now/);
  assert.match(comp, /sight-line next/);
});

t("the estimate is shown before starting and the real clock after", () => {
  assert.match(comp, /this paragraph will take <b>\{sightClock\(plan\.totalMs\)\}<\/b>/);
  assert.match(comp, /you spent \{sightClock\(elapsed\)\}/);
});

t("the celebration exists and honours reduced motion", () => {
  assert.match(SRC, /\.sight-burst/);
  assert.match(SRC, /@keyframes sightFall/);
  assert.match(SRC, /\.sight-line\.now, \.sight-stat, \.sight-done-title, \.sight-done-kicker, \.sight-bit \{\s+animation: none !important;/);
});

t("the display is direction- and language-aware", () => {
  assert.match(comp, /dir="auto"/);
  assert.match(comp, /lang=\{lang\}/);
});

console.log(`\nsight.test.mjs — ${pass} passed${process.exitCode ? ", FAILURES above" : ""}`);
