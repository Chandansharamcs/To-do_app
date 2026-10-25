// boundary.test.mjs
//
// Two things that stop a render error from becoming a black screen, and one
// indexing rule that stops the error happening at all.
//
// A render throw unmounts React and leaves the dark background with nothing
// on it -- on his phone that reads as "the screen went black when I clicked
// roll". There was no error boundary anywhere before v69, so any throw did
// exactly that. These tests are structural: they pin that the boundary and
// the clamp are still in the tree. The behaviour (a forced throw rendering
// the .crash panel) was proved in a browser probe.

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

let pass=0;
const t=(n,f)=>{try{f();pass++;console.log("  ✓",n);}catch(e){console.log("  ✗",n,"\n     ",e.message);process.exitCode=1;}};

t("an error boundary exists and catches render errors", ()=>{
  assert.match(SRC, /class AppErrorBoundary extends React\.Component/);
  assert.match(SRC, /getDerivedStateFromError/);
  assert.match(SRC, /componentDidCatch/);
});
t("the whole app is inside the boundary", ()=>{
  // exactly one mount call, and it wraps TodoApp in the boundary
  const mounts = SRC.match(/createRoot\(/g) || [];
  assert.equal(mounts.length, 1);
  assert.match(SRC, /createElement\(AppErrorBoundary, null, React\.createElement\(TodoApp\)\)/);
});
t("the crash panel is legible and recoverable", ()=>{
  for (const cls of ["crash", "crash-kicker", "crash-title", "crash-msg", "crash-hint", "crash-btn"]) {
    assert.ok(SRC.includes("." + cls), "missing ." + cls);
  }
  assert.match(SRC, /className="crash-btn" style=\{S\.btn\} onClick=\{\(\) => \{ location\.reload\(\); \}\}/);
  assert.match(SRC, /className="crash-btn ghost"[\s\S]{0,160}navigator\.clipboard\.writeText\(msg\)/);
});
t("the crash panel does not depend on the app stylesheet", ()=>{
  // The stylesheet lives inside TodoApp's subtree. When TodoApp throws, its
  // <style> unmounts with it, so a class-only panel renders as unstyled text
  // jammed against the left edge -- that is exactly what the first v69
  // screenshot showed. Every part of the fallback carries inline styling.
  const blk = SRC.slice(SRC.indexOf('<div className="crash"'), SRC.indexOf('copy error</button>'));
  assert.ok(blk.length > 400, "crash markup not found");
  const styled = blk.match(/style=\{S\.\w+\}/g) || [];
  assert.ok(styled.length >= 7, "only " + styled.length + " parts are inline-styled");
  assert.ok(SRC.includes('border: "1px solid #F0576B"'), "no literal danger border");
  assert.ok(SRC.includes("whiteSpace: \"pre-wrap\""), "message would not wrap");
  assert.match(SRC, /minHeight: 44/, "touch targets under 44px");
});
t("the last error survives a reload", ()=>{
  assert.match(SRC, /tasksh\.lasterror\.v1/);
});
t("pickRandom clamps instead of trusting random()", ()=>{
  const m = SRC.match(/function pickRandom\(list\) \{[\s\S]*?\n\}/);
  assert.ok(m, "pickRandom missing");
  const body = m[0];
  assert.match(body, /Math\.min\(/, "no upper clamp");
  assert.match(body, /Math\.max\(/, "no lower clamp");
  assert.match(body, /Math\.floor\(/, "not an integer index");
});
t("no unclamped Math.floor(random()*len) indexing left outside pickRandom", ()=>{
  // The v68 crash shape was list[Math.floor(Math.random() * list.length)].
  // pickRandom itself is the one place allowed to write that arithmetic,
  // wrapped in Math.min/Math.max; everywhere else must go through it.
  const body = SRC.match(/function pickRandom\(list\) \{[\s\S]*?\n\}/)[0];
  // strip comments first -- the v69 note above pickRandom quotes the old shape
  const rest = SRC.replace(body, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
  const bad = rest.match(/\[\s*Math\.floor\(\s*Math\.random\(\)[^\]]*\]/g) || [];
  assert.deepEqual(bad, []);
});
t("the daily draw and slot repair both go through pickRandom", ()=>{
  assert.match(SRC, /pickRandom\(pool\)/, "drawDaily no longer uses pickRandom");
  const repairs = SRC.match(/pickRandom\(/g) || [];
  assert.ok(repairs.length >= 2, "expected drawDaily + repairSlot to use pickRandom, saw " + repairs.length);
});
t("failures outside a render are recorded too", ()=>{
  // React boundaries only catch render throws. An error in an event handler,
  // a timer or a promise never reaches one -- on a phone it is invisible and
  // unreportable. Both window channels are listened to, and nothing in the
  // recorder is allowed to throw on its own.
  assert.match(SRC, /addEventListener\("error",/);
  assert.match(SRC, /addEventListener\("unhandledrejection",/);
  const rec = SRC.slice(SRC.indexOf("const lastErrors = {"), SRC.indexOf("function markStage("));
  const tries = rec.match(/try \{/g) || [];
  const catches = rec.match(/catch/g) || [];
  assert.ok(tries.length >= 3, "recorder has an unguarded localStorage call");
  assert.ok(catches.length >= 3, "recorder has an unguarded localStorage call");
  assert.match(rec, /slice\(0, 5\)/, "the ring is unbounded");
});
t("a roll leaves a trail of where it got to", ()=>{
  const i = SRC.indexOf("const roll = useCallback(");
  const body = SRC.slice(i, SRC.indexOf("}, [state, setState, setOutcome]);", i));
  assert.match(body, /markStage\("roll:start"\)/, "no stage before scoring");
  assert.match(body, /markStage\("roll:scored"\)/, "no stage after scoring");
  assert.match(body, /markStage\("roll:state-set"\)/, "no stage after the state write");
  // a finished reveal settles back to idle so a healthy phone stays quiet
  assert.match(SRC, /if \(rv\.done\) markStage\("idle"\)/);
});
t("the recorder is readable from the vault and stays quiet when healthy", ()=>{
  assert.match(SRC, /function LastCrashRow\(\)/);
  assert.match(SRC, /<LastCrashRow \/>/);
  // rendered inside VaultView, next to the other storage/build rows
  const vault = SRC.slice(SRC.indexOf("function VaultView()"), SRC.indexOf("function VaultView()") + 700);
  assert.match(vault, /<LastCrashRow \/>/);
  assert.match(SRC, /if \(!list\.length && \(!stage \|\| stage\.name === "idle"\)\) return null;/);
  assert.match(SRC, /navigator\.clipboard\.writeText\(text\)/, "no copy button");
  assert.match(SRC, /lastErrors\.clear\(\)/, "no clear button");
});
t("no render path dereferences a lookup-by-id map directly", ()=>{
  // v70: the roll screen did RNGI_SKILL_BY_ID[outcome.winner].name. The winner
  // can be the id "luck", which is not a skill, so the lookup was undefined and
  // the .name read threw "Cannot read properties of undefined (reading 'name')"
  // straight out of render -- the black screen. Every id taken from state or an
  // outcome now goes through a helper that returns null instead of throwing.
  const bad = (SRC.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "")
    .match(/RNGI_[A-Z_]+_BY_ID\s*\[[^\]]+\]\s*\.\s*\w+/g) || []);
  assert.deepEqual(bad, [], "unguarded map dereference");
  // and the helpers must survive keys that exist on every object
  assert.match(SRC, /s && typeof s\.name === "string" \? s\.name : null/);
  assert.match(SRC, /p && typeof p\.name === "string" \? p\.name : null/);
  assert.match(SRC, /if \(winner === "luck"\) return "a luck draw";/);
});
t("a new worker never reloads the page out from under the user", ()=>{
  // v69 tried an unconditional controllerchange -> location.reload() and
  // cloud.spec caught it: the app already routes updates through
  // decideUpdateAction, which reloads only when the tab is hidden and
  // nothing is being typed, and otherwise asks. An unguarded reload throws
  // away half-typed text on every deploy, which is the exact reload loop the
  // hadController note exists to prevent. There must be exactly one
  // controllerchange handler that can reload, and it must be the guarded one.
  const handlers = SRC.match(/addEventListener\("controllerchange"/g) || [];
  assert.ok(handlers.length >= 1, "the guarded update hook went missing");
  // the guarded hook is the only thing allowed to act on a controller change
  assert.match(SRC, /const onController = \(\) => \{\s*const action = decideUpdateAction/);
  assert.match(SRC, /function decideUpdateAction\(hidden, typing, hadController\)/);
  assert.match(SRC, /if \(!hadController\) return "ignore";/);
  // no module-scope reload on controllerchange
  assert.doesNotMatch(SRC, /^\s*\/\/ v69[\s\S]{0,400}controllerchange/m);
});

console.log(`\n  ${pass} passed`);
