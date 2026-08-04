// worker/providers.test.mjs
//
// Provider table + key routing.
//
// The worker imports Cloudflare globals and is an ES module with a default
// export, so it cannot simply be imported here. Instead we read the source and
// eval a named slice of it (`lift`). That is deliberately brittle: renaming a
// lifted symbol fails loudly rather than silently testing nothing.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "src", "index.js"), "utf8");

/**
 * Extracts a top-level declaration by name and evaluates it in isolation.
 *
 * Brace-matched rather than regex-terminated: an earlier version ended each
 * match at the first `\n};`, which for a single-line declaration swallowed the
 * rest of the file including the module's `export default`.
 */
function sliceDecl(name) {
  const patterns = [
    new RegExp(`^const ${name} = `, "m"),
    new RegExp(`^function ${name}\\(`, "m"),
    new RegExp(`^async function ${name}\\(`, "m"),
  ];
  let start = -1, isConst = false;
  for (const re of patterns) {
    const m = SRC.match(re);
    if (m) { start = m.index; isConst = m[0].startsWith("const"); break; }
  }
  assert.ok(start >= 0, `could not lift "${name}" — was it renamed?`);

  // Resume scanning AFTER the `=` for a const, or after the parameter list for
  // a function. Starting at the name itself breaks on `opts = {}` defaults,
  // which look like a complete brace pair before the body has even opened.
  let i;
  if (isConst) {
    i = SRC.indexOf("=", start) + 1;
  } else {
    let d = 0;
    i = SRC.indexOf("(", start);
    for (; i < SRC.length; i++) {
      if (SRC[i] === "(") d++;
      else if (SRC[i] === ")") { d--; if (d === 0) { i++; break; } }
    }
  }

  // Count braces AND brackets (a const may be an array), skipping strings and
  // comments. Parens are ignored: they would end a function at its own params.
  let depth = 0, seen = false, inStr = null, inLine = false, inBlock = false;
  for (; i < SRC.length; i++) {
    const c = SRC[i], p = SRC[i - 1];
    if (inLine) { if (c === "\n") inLine = false; continue; }
    if (inBlock) { if (c === "/" && p === "*") inBlock = false; continue; }
    if (inStr) { if (c === inStr && p !== "\\") inStr = null; continue; }
    if (c === "/" && SRC[i + 1] === "/") { inLine = true; continue; }
    if (c === "/" && SRC[i + 1] === "*") { inBlock = true; continue; }
    if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
    if (c === "{" || c === "[") { depth++; seen = true; continue; }
    if (c === "}" || c === "]") {
      depth--;
      if (seen && depth === 0) {
        const end = SRC.indexOf("\n", i);
        return SRC.slice(start, end === -1 ? SRC.length : end);
      }
    }
  }
  throw new Error(`unbalanced braces while lifting "${name}"`);
}

function lift(names) {
  const parts = names.map(sliceDecl);
  parts.push(`return { ${names.join(", ")} };`);
  return new Function(parts.join("\n\n"))();
}

const { PROVIDERS, PROVIDER_ORDER, providerFor, secondsUntilQuotaReset } =
  lift(["PROVIDERS", "PROVIDER_ORDER", "providerFor", "secondsUntilQuotaReset"]);

let passed = 0;
const test = (name, fn) => {
  try {
    fn();
    passed++;
  } catch (err) {
    console.error(`\n  ✗ ${name}\n    ${err.message}\n`);
    process.exitCode = 1;
  }
};

// ---------------------------------------------------------------- routing --

test("routes each prefix to the right provider", () => {
  const cases = [
    ["AIzaSyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "gemini"],
    ["gsk_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "groq"],
    ["csk-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "cerebras"],
    ["nvapi-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "nvidia"],
    ["sk-or-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "openrouter"],
    ["sk-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "openai"],
  ];
  for (const [key, want] of cases) {
    const got = providerFor(key);
    assert.ok(got, `${key.slice(0, 8)}… routed nowhere`);
    assert.equal(got.provider.id, want, `${key.slice(0, 8)}… → ${got.provider.id}, want ${want}`);
    assert.equal(got.key, key, "key should come back unmodified");
  }
});

test("sk-or- is matched before the generic sk-", () => {
  // if PROVIDER_ORDER ever puts openai first this silently misroutes every
  // OpenRouter key, which then 401s against the wrong endpoint
  assert.ok(
    PROVIDER_ORDER.indexOf("openrouter") < PROVIDER_ORDER.indexOf("openai"),
    "openrouter must be checked before openai",
  );
});

test("mistral: tag routes a prefix-less key", () => {
  const got = providerFor("mistral:abc123def456");
  assert.ok(got, "mistral: tag did not route");
  assert.equal(got.provider.id, "mistral");
  assert.equal(got.key, "abc123def456", "the provider: tag must be stripped");
});

test("mistral keys are not sniffable without the tag", () => {
  // a bare 32-char alphanumeric must NOT be claimed by anyone
  assert.equal(providerFor("abcdef0123456789abcdef0123456789"), null);
});

test("unknown keys route nowhere rather than to a default", () => {
  for (const junk of ["", "   ", "hello", "zz-nope", "1234"]) {
    assert.equal(providerFor(junk), null, `"${junk}" should not route`);
  }
});

test("an unknown provider: tag falls through to sniffing", () => {
  // "notreal:gsk_..." should not be silently accepted as provider "notreal"
  const got = providerFor("notreal:whatever");
  assert.equal(got, null);
});

// ------------------------------------------------------- table integrity --

test("every provider in the table is reachable", () => {
  for (const id of Object.keys(PROVIDERS)) {
    const inOrder = PROVIDER_ORDER.includes(id);
    const taggable = PROVIDERS[id].test("") === false;
    assert.ok(inOrder || taggable, `${id} is in neither PROVIDER_ORDER nor tag-only`);
  }
});

test("PROVIDER_ORDER references only real providers", () => {
  for (const id of PROVIDER_ORDER) {
    assert.ok(PROVIDERS[id], `PROVIDER_ORDER mentions "${id}" which is not in PROVIDERS`);
  }
});

test("every openai-compatible provider declares a base and models", () => {
  for (const [id, p] of Object.entries(PROVIDERS)) {
    if (p.kind !== "openai") continue;
    assert.ok(p.base?.startsWith("https://"), `${id} has no https base`);
    assert.ok(Array.isArray(p.models) && p.models.length, `${id} declares no models`);
  }
});

test("GitHub Models is gone", () => {
  // Retired 2026-07-30. It answered every request with 410, and 410 matched no
  // fallback branch, so a single ghp_ key halted the entire pool. Removed in
  // v30 — this test exists so it cannot quietly come back.
  assert.equal(PROVIDERS.github, undefined, "the github provider must stay removed");
  assert.ok(!PROVIDER_ORDER.includes("github"));
  assert.ok(!/models\.github\.ai/.test(SRC), "a models.github.ai URL is still in the worker");
});

// ------------------------------------------------------------ reset clocks --

test("every provider declares a reset zone", () => {
  for (const [id, p] of Object.entries(PROVIDERS)) {
    assert.ok(["utc", "pacific"].includes(p.resets), `${id} has resets="${p.resets}"`);
  }
});

test("only Gemini resets on Pacific time", () => {
  // v28 parked every key until midnight Pacific. Non-Google keys reset at
  // midnight UTC, so Groq keys sat unused for up to 8 extra hours.
  assert.equal(PROVIDERS.gemini.resets, "pacific");
  for (const [id, p] of Object.entries(PROVIDERS)) {
    if (id === "gemini") continue;
    assert.equal(p.resets, "utc", `${id} should reset on UTC, not ${p.resets}`);
  }
});

test("utc and pacific resets differ by roughly 8 hours", () => {
  const utc = secondsUntilQuotaReset("utc");
  const pac = secondsUntilQuotaReset("pacific");
  assert.ok(utc > 0 && pac > 0, "reset delays must be positive");
  assert.ok(utc <= 86400 && pac <= 86400, "reset delays must be within a day");
  const gap = Math.abs(((pac - utc) % 86400 + 86400) % 86400);
  const eightHours = 8 * 3600;
  const ok = Math.abs(gap - eightHours) < 3600 || Math.abs(gap - (86400 - eightHours)) < 3600;
  assert.ok(ok, `expected ~8h offset between clocks, got ${(gap / 3600).toFixed(1)}h`);
});

test("a reset is never scheduled sooner than the 300s floor", () => {
  for (const zone of ["utc", "pacific"]) {
    assert.ok(secondsUntilQuotaReset(zone) >= 300, `${zone} returned under the floor`);
  }
});

// ------------------------------------------------------------ token caps --

test("small-context providers declare a maxTokens cap", () => {
  // Cerebras free tier caps context at ~8k. Without a cap the request 400s.
  assert.ok(PROVIDERS.cerebras.maxTokens > 0, "cerebras must declare maxTokens");
  assert.ok(PROVIDERS.cerebras.maxTokens <= 1000, "cerebras cap looks too high");
});

test("NVIDIA opts out of json mode", () => {
  // NIM rejects response_format on several models; we ask for JSON in the
  // prompt instead. NOTE: from docs and community reports, not observation.
  assert.equal(PROVIDERS.nvidia.jsonMode, false);
});

console.log(`  providers.test.mjs — ${passed} passed`);
