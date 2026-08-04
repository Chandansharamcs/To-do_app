// worker/callshape.test.mjs
//
// What the worker actually puts on the wire, and how it reacts to what comes
// back. Everything here runs against a stubbed `fetch`, so it proves routing,
// token caps, JSON retry and model fallback — it does NOT prove that any real
// provider behaves as documented.
//
// Same `lift()` approach as providers.test.mjs: read the source, evaluate a
// brace-matched slice. Brittle to renames on purpose.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import assert from "node:assert/strict";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "src", "index.js"), "utf8");

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

function lift(names, preamble = "") {
  const parts = [preamble, ...names.map(sliceDecl)];
  parts.push(`return { ${names.join(", ")} };`);
  return new Function("fetch", parts.join("\n\n"));
}

const NAMES = ["PROVIDERS", "PROVIDER_ORDER", "providerFor", "callOpenAICompatible",
               "secondsUntilQuotaReset", "keyId", "isKeyCooling", "coolKey", "withKeyPool"];

/** Builds the module under test with a scripted fetch. */
function build(handler) {
  const calls = [];
  const stub = async (url, init) => {
    const body = init?.body ? JSON.parse(init.body) : null;
    calls.push({ url, init, body, headers: init?.headers || {} });
    const res = await handler({ url, init, body, n: calls.length });
    return {
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      async json() { return res.json ?? {}; },
      async text() { return JSON.stringify(res.json ?? res.text ?? {}); },
    };
  };
  const mod = lift(NAMES)(stub);
  return { ...mod, calls };
}

const okBody = (text = "hi", model = "m") => ({
  status: 200,
  json: { choices: [{ message: { content: text } }], usage: {}, model },
});

let passed = 0;
const test = async (name, fn) => {
  try {
    await fn();
    passed++;
  } catch (err) {
    console.error(`\n  ✗ ${name}\n    ${err.message}\n`);
    process.exitCode = 1;
  }
};

const contents = [{ role: "user", parts: [{ text: "hello" }] }];

// ------------------------------------------------------------ request shape --

await test("posts to the provider's chat/completions with a bearer token", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(() => okBody());
  await callOpenAICompatible(PROVIDERS.groq, "gsk_secret", "sys", contents, {});
  assert.equal(calls.length, 1);
  assert.ok(calls[0].url.startsWith(PROVIDERS.groq.base), `wrong base: ${calls[0].url}`);
  assert.ok(calls[0].url.endsWith("/chat/completions"), `wrong path: ${calls[0].url}`);
  assert.equal(calls[0].init.method, "POST");
  const auth = calls[0].headers.Authorization || calls[0].headers.authorization;
  assert.equal(auth, "Bearer gsk_secret");
});

await test("translates gemini contents[] into openai messages[]", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(() => okBody());
  await callOpenAICompatible(PROVIDERS.groq, "k", "SYSTEM", [
    { role: "user", parts: [{ text: "one" }] },
    { role: "model", parts: [{ text: "two" }] },
  ], {});
  const msgs = calls[0].body.messages;
  assert.deepEqual(msgs[0], { role: "system", content: "SYSTEM" });
  assert.deepEqual(msgs[1], { role: "user", content: "one" });
  assert.equal(msgs[2].role, "assistant", "model role must map to assistant");
});

// --------------------------------------------------------------- token caps --

await test("a provider's maxTokens overrides a larger caller request", async () => {
  // Cerebras 400s outright if asked for more than its free-tier ceiling
  const { PROVIDERS, callOpenAICompatible, calls } = build(() => okBody());
  await callOpenAICompatible(PROVIDERS.cerebras, "csk-x", "sys", contents, { maxTokens: 4000 });
  const cap = PROVIDERS.cerebras.maxTokens;
  assert.ok(calls[0].body.max_tokens <= cap,
    `asked for ${calls[0].body.max_tokens}, cap is ${cap}`);
});

await test("a smaller caller request is not inflated to the cap", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(() => okBody());
  await callOpenAICompatible(PROVIDERS.cerebras, "csk-x", "sys", contents, { maxTokens: 5 });
  assert.equal(calls[0].body.max_tokens, 5);
});

await test("providers without a cap pass the caller's value through", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(() => okBody());
  assert.equal(PROVIDERS.groq.maxTokens, undefined, "groq should not declare a cap");
  await callOpenAICompatible(PROVIDERS.groq, "k", "sys", contents, { maxTokens: 1600 });
  assert.equal(calls[0].body.max_tokens, 1600);
});

// --------------------------------------------------------------- json mode --

await test("json mode asks for response_format when supported", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(() => okBody());
  await callOpenAICompatible(PROVIDERS.groq, "k", "sys", contents, { json: true });
  assert.ok(calls[0].body.response_format, "expected response_format");
});

await test("NVIDIA never asks for response_format", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(() => okBody());
  await callOpenAICompatible(PROVIDERS.nvidia, "nvapi-x", "sys", contents, { json: true });
  assert.equal(calls[0].body.response_format, undefined,
    "nvidia declares jsonMode:false and must not send response_format");
});

await test("a json-mode 400 retries once without json, same model", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(({ n }) =>
    n === 1
      ? { status: 400, json: { error: { message: "response_format is not supported" } } }
      : okBody());
  const r = await callOpenAICompatible(PROVIDERS.groq, "k", "sys", contents, { json: true });
  assert.equal(r.ok, true, "should have recovered");
  assert.equal(calls.length, 2, "expected exactly one retry");
  assert.equal(calls[0].body.model, calls[1].body.model, "retry must reuse the same model");
  assert.ok(calls[1].body.response_format === undefined, "retry must drop response_format");
});

// ---------------------------------------------------------- model fallback --

await test("a 404 falls back to the next model", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(({ n }) =>
    n === 1 ? { status: 404, json: { error: { message: "model not found" } } } : okBody());
  const r = await callOpenAICompatible(PROVIDERS.cerebras, "csk-x", "sys", contents, {});
  assert.equal(r.ok, true);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].body.model, PROVIDERS.cerebras.models[0]);
  assert.equal(calls[1].body.model, PROVIDERS.cerebras.models[1]);
});

await test("a 410 falls back to the next model", async () => {
  // GitHub Models returned 410 after retirement. 410 was in no branch, so it
  // fell through as a transport error instead of a dead endpoint.
  const { PROVIDERS, callOpenAICompatible, calls } = build(({ n }) =>
    n === 1 ? { status: 410, json: { error: { message: "gone" } } } : okBody());
  const r = await callOpenAICompatible(PROVIDERS.cerebras, "csk-x", "sys", contents, {});
  assert.equal(r.ok, true, "410 must be treated as a dead model, not a hard error");
  assert.equal(calls.length, 2);
});

await test("a 401 does NOT burn through the model list", async () => {
  // a bad key is not a bad model; trying every model wastes quota
  const { PROVIDERS, callOpenAICompatible, calls } = build(() =>
    ({ status: 401, json: { error: { message: "unauthorised" } } }));
  const r = await callOpenAICompatible(PROVIDERS.cerebras, "bad", "sys", contents, {});
  assert.equal(r.ok, false);
  assert.equal(r.status, 401);
  assert.equal(calls.length, 1, "should stop at the first model");
});

await test("a 429 does NOT burn through the model list", async () => {
  const { PROVIDERS, callOpenAICompatible, calls } = build(() =>
    ({ status: 429, json: { error: { message: "slow down" } } }));
  const r = await callOpenAICompatible(PROVIDERS.cerebras, "csk-x", "sys", contents, {});
  assert.equal(r.status, 429);
  assert.equal(calls.length, 1);
});

// -------------------------------------------------------------- key pool ----

/** Minimal KV double so withKeyPool's cooling logic can run. */
const fakeEnv = () => {
  const store = new Map();
  return { TASKSH_KV: {
    async get(k) { return store.get(k) ?? null; },
    async put(k, v) { store.set(k, v); },
  } };
};

await test("the pool rotates past a rate-limited key", async () => {
  const { withKeyPool } = build(() => okBody());
  const tried = [];
  const res = await withKeyPool(fakeEnv(), ["gsk_a", "gsk_b"], async (k) => {
    tried.push(k);
    return k === "gsk_a" ? { ok: false, status: 429, detail: "daily quota exceeded" } : { ok: true };
  });
  assert.equal(res.ok, true);
  assert.deepEqual(tried, ["gsk_a", "gsk_b"]);
});

await test("the pool rotates past an invalid key", async () => {
  const { withKeyPool } = build(() => okBody());
  const tried = [];
  const res = await withKeyPool(fakeEnv(), ["gsk_a", "gsk_b"], async (k) => {
    tried.push(k);
    return k === "gsk_a" ? { ok: false, status: 401, detail: "bad key" } : { ok: true };
  });
  assert.equal(res.ok, true);
  assert.equal(tried.length, 2);
});

await test("a 410 from one provider does not halt the pool", async () => {
  // THE v29 BUG. A retired GitHub Models key returned 410; 410 matched no
  // branch in withKeyPool, so it hit `return res` and every remaining key --
  // up to seven working providers -- was never tried.
  const { withKeyPool } = build(() => okBody());
  const tried = [];
  const res = await withKeyPool(fakeEnv(), ["dead_key", "gsk_good"], async (k) => {
    tried.push(k);
    return k === "dead_key"
      ? { ok: false, status: 410, detail: "retirement brownout" }
      : { ok: true };
  });
  assert.equal(res.ok, true, "the pool must continue past a retired provider");
  assert.deepEqual(tried, ["dead_key", "gsk_good"]);
});

await test("a genuine upstream error still stops the pool", async () => {
  // a 500 is not a key problem and not a dead endpoint — retrying every key
  // against a broken service just multiplies the failure
  const { withKeyPool } = build(() => okBody());
  const tried = [];
  const res = await withKeyPool(fakeEnv(), ["gsk_a", "gsk_b"], async (k) => {
    tried.push(k);
    return { ok: false, status: 500, detail: "boom" };
  });
  assert.equal(res.ok, false);
  assert.equal(tried.length, 1, "a 500 should not burn the pool");
});

await test("the pool reports the last error when every key fails", async () => {
  const { withKeyPool } = build(() => okBody());
  const res = await withKeyPool(fakeEnv(), ["gsk_a", "gsk_b"], async () =>
    ({ ok: false, status: 429, detail: "daily quota exceeded" }));
  assert.equal(res.ok, false);
  assert.equal(res.status, 429);
});

console.log(`  callshape.test.mjs — ${passed} passed`);
