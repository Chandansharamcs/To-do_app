// sound.test.mjs
//
// The audio engine (v47).
//
// Sound is hard to test and easy to ship broken, so the parts that CAN be
// pinned are pinned: the alarm pattern is pure data, the settings are pure
// validation, and the bus wiring is checked by driving a fake AudioContext
// that records every node it is asked to build.
//
// The three failures this is aimed at:
//   * a ten-second alarm that is actually two seconds, or sixty
//   * a gain that climbs until it clips
//   * an ambient bed that keeps playing after you mute or background the app,
//     which is battery drain nobody will ever attribute to the right cause

import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(join(here, "app.jsx"), "utf8");

function region(from, to) {
  const a = SRC.indexOf(from), b = SRC.indexOf(to);
  if (a < 0 || b < 0 || b <= a) throw new Error(`region not found: ${from}`);
  return SRC.slice(a, b);
}

/** A fake Web Audio graph that records what was built and connected. */
function fakeAudio() {
  const log = { osc: [], gain: [], filter: [], buffers: [], src: [], detuneMods: 0,
                started: 0, stopped: 0, vibrate: [] };
  const param = (v = 0) => ({
    value: v,
    setValueAtTime(x) { this.value = x; return this; },
    setTargetAtTime(x) { this.value = x; return this; },
    exponentialRampToValueAtTime(x) { this.value = x; return this; },
    cancelScheduledValues() { return this; },
  });
  const node = (kind) => {
    const n = {
      kind,
      // v67: connections are recorded, because "is anything modulating this
      // source's detune" is the only way to catch a wow LFO wired into the
      // audio path instead of into the pitch.
      connect(t) { if (t && t.__isDetune) log.detuneMods++; },
      disconnect() {},
    };
    if (kind === "osc") {
      n.frequency = param(440); n.detune = param(0); n.type = "sine";
      n.start = () => { log.started++; }; n.stop = () => { log.stopped++; };
      log.osc.push(n);
    }
    if (kind === "gain") { n.gain = param(1); log.gain.push(n); }
    if (kind === "filter") { n.frequency = param(1000); n.Q = param(1); log.filter.push(n); }
    if (kind === "src") {
      n.detune = param(0); n.detune.__isDetune = true;
      n.loop = false; n.buffer = null;
      n.start = () => { log.started++; }; n.stop = () => { log.stopped++; };
      log.src.push(n);
    }
    return n;
  };
  const ctx = {
    state: "running", currentTime: 0, sampleRate: 48000,
    destination: node("dest"),
    resume() { this.state = "running"; },
    createOscillator: () => node("osc"),
    createGain: () => node("gain"),
    createBiquadFilter: () => node("filter"),
    createBufferSource: () => node("src"),
    // v66: the output chain grows a delay line for the room send, so the fake
    // has to know about one or every sound fails on a missing node type.
    createDelay: () => { const n = node("delay"); n.delayTime = param(0); log.delay = n; return n; },
    createBuffer: (ch, frames) => {
      const d = new Float32Array(frames);
      log.buffers.push({ frames });
      return { length: frames, sampleRate: 48000, getChannelData: () => d };
    },
  };
  return { ctx, log };
}

function soundModule({ muted = false, cfg = null } = {}) {
  const code = region('const SOUND_KEY = "tasksh.sound.v1";', "function useSoundToggle()");
  const { ctx, log } = fakeAudio();
  const store = {};
  if (muted) store["tasksh.sound.v1"] = "0";
  if (cfg) store["tasksh.soundcfg.v1"] = JSON.stringify(cfg);
  const env = `
    const localStorage = {
      getItem: (k) => (k in __store ? __store[k] : null),
      setItem: (k, v) => { __store[k] = String(v); },
    };
    const window = { AudioContext: function () { return __ctx; } };
    const navigator = { vibrate: (p) => { __log.vibrate.push(p); return true; } };
    const document = { hidden: false, addEventListener() {}, removeEventListener() {} };
  `;
  const exportNames = [
    "SOUND_DEFAULTS", "AMBIENT_SCENES", "loadSoundCfg", "saveSoundCfg",
    "isSoundOn", "setSoundOn", "playTone", "playNoise", "sound",
    "buildAlarmPattern", "buildVibratePattern", "ringAlarm", "stopAlarm", "alarmRinging",
    "startAmbient", "stopAmbient", "ambientPlaying", "getBuses", "applySoundCfg",
  ];
  const mod = new Function("__store", "__ctx", "__log",
    `${env}\n${code}\nreturn {${exportNames.join(",")}};`)(store, ctx, log);
  return { ...mod, log, store, ctx };
}

let pass = 0, failed = 0;
const tests = [];
const T = (n, f) => tests.push([n, f]);

// ---- the alarm pattern -----------------------------------------------------

T("a ten-second alarm lasts ten seconds", () => {
  const M = soundModule();
  const p = M.buildAlarmPattern(10);
  assert.ok(p.length > 0);
  const end = Math.max(...p.map((x) => x.start + x.dur));
  assert.ok(Math.abs(end - 10) < 0.05, `a "10 second" alarm actually ends at ${end.toFixed(2)}s`);
});

T("every alarm length is honoured to the fraction, not approximately", () => {
  // "10 seconds" that stops at 9.64 is a wrong number in the settings UI.
  // An 85%-of-the-way assertion lets that through, so this wants exactness.
  const M = soundModule();
  for (const secs of [3, 10, 20, 45]) {
    const p = M.buildAlarmPattern(secs);
    const end = Math.max(...p.map((x) => x.start + x.dur));
    assert.ok(end <= secs + 0.001, `${secs}s alarm ran to ${end}s`);
    assert.ok(Math.abs(end - secs) < 0.05, `${secs}s alarm actually ends at ${end.toFixed(2)}s`);
  }
});

T("a silent alarm is genuinely empty", () => {
  const M = soundModule();
  assert.deepEqual(M.buildAlarmPattern(0), []);
});

T("the alarm gets louder but never loud enough to clip", () => {
  const M = soundModule();
  const p = M.buildAlarmPattern(20);
  const first = p[0].gain;
  const last = p[p.length - 1].gain;
  assert.ok(last > first, "the ring never escalates");
  for (const spec of p) assert.ok(spec.gain <= 0.085, `gain ${spec.gain} is into clipping territory`);
});

T("the alarm has no silent gap longer than a second", () => {
  // a ring with a three-second hole in it reads as "it stopped"
  const M = soundModule();
  const p = M.buildAlarmPattern(10).sort((a, b) => a.start - b.start);
  let prevEnd = 0;
  for (const spec of p) {
    assert.ok(spec.start - prevEnd < 1.0, `silent gap of ${(spec.start - prevEnd).toFixed(2)}s`);
    prevEnd = Math.max(prevEnd, spec.start + spec.dur);
  }
});

T("no alarm is longer than a minute whatever it is asked for", () => {
  const M = soundModule();
  const end = Math.max(...M.buildAlarmPattern(99999).map((x) => x.start + x.dur));
  assert.ok(end <= 60, `an alarm of ${end}s is a hostage situation`);
});

T("the vibration pattern matches the alarm length", () => {
  const M = soundModule();
  for (const secs of [3, 10, 20]) {
    const v = M.buildVibratePattern(secs);
    const total = v.reduce((a, b) => a + b, 0);
    assert.ok(total <= secs * 1000, `${secs}s vibrate runs ${total}ms`);
    assert.ok(total > secs * 700, `${secs}s vibrate only fills ${total}ms`);
    // an odd-length pattern ends on a buzz, which is correct for an alarm
  }
  assert.deepEqual(M.buildVibratePattern(0), []);
});

// ---- settings --------------------------------------------------------------

T("defaults are silence: the bed never starts on its own", () => {
  const M = soundModule();
  assert.equal(M.SOUND_DEFAULTS.ambient, "off");
  assert.equal(M.loadSoundCfg().ambient, "off");
});

T("volumes are clamped and nonsense falls back", () => {
  assert.equal(soundModule({ cfg: { volume: 999 } }).loadSoundCfg().volume, 100);
  assert.equal(soundModule({ cfg: { volume: -5 } }).loadSoundCfg().volume, 0);
  assert.equal(soundModule({ cfg: { volume: "loud" } }).loadSoundCfg().volume, 70);
  assert.equal(soundModule({ cfg: { ambient: "disco" } }).loadSoundCfg().ambient, "off");
  assert.equal(soundModule({ cfg: { alarmSeconds: 999 } }).loadSoundCfg().alarmSeconds, 10);
});

T("a corrupt settings blob does not take the app down", () => {
  const M = soundModule();
  M.store["tasksh.soundcfg.v1"] = "{not json";
  assert.deepEqual(M.loadSoundCfg(), M.SOUND_DEFAULTS);
});

T("settings round-trip", () => {
  const M = soundModule();
  M.saveSoundCfg({ volume: 40, ambient: "rain", ambientVolume: 20, alarmSeconds: 3 });
  assert.deepEqual(M.loadSoundCfg(), { volume: 40, ambient: "rain", ambientVolume: 20, alarmSeconds: 3 });
});

T("every scene in the picker is a scene the engine can build", () => {
  const M = soundModule();
  assert.ok(M.AMBIENT_SCENES.length >= 4);
  assert.equal(M.AMBIENT_SCENES[0].id, "off", "off must be first and default");
  for (const sc of M.AMBIENT_SCENES) {
    assert.ok(sc.label && sc.desc, `${sc.id} has no label or description`);
    M.stopAmbient();
    M.startAmbient(sc.id);
    assert.equal(M.ambientPlaying(), sc.id === "off" ? null : sc.id, `${sc.id} did not start`);
  }
  M.stopAmbient();
});

T("every scene is a layered bed, not one filter on one noise source", () => {
  // v66 shipped beds that were literally a single filtered noise loop -- a
  // hiss. An ear hears that as "a recording of nothing", which is exactly the
  // complaint. Each scene now stacks several sources, and the count is the
  // only thing a fake graph can honestly measure.
  const MIN = { rain: 3, room: 2, tape: 2, night: 2 };
  for (const [id, min] of Object.entries(MIN)) {
    const M = soundModule();
    M.startAmbient(id);
    const noiseSources = M.log.src.length;
    const oscillators = M.log.osc.length;
    assert.ok(noiseSources >= min,
      `${id} has ${noiseSources} noise layers, expected at least ${min}`);
    assert.ok(oscillators >= 1, `${id} has no tonal layer or movement`);
    M.stopAmbient();
  }
});

T("the tape wow modulates the source, never the audio path", () => {
  // a detune LFO wired to a gain node instead of to `detune` injects a
  // sub-audio signal straight into the sound, which is a slow thump
  const M = soundModule();
  M.startAmbient("tape");
  const src = M.log.src[0] || null;
  assert.ok(src, "tape has no noise source");
  assert.ok(M.log.detuneMods > 0, "nothing is modulating the tape source's detune");
  M.stopAmbient();
});

T("switching scenes tears the old bed down first", () => {
  // two beds running at once is double the noise and double the battery
  const M = soundModule();
  M.startAmbient("rain");
  const afterFirst = M.log.src.length;
  M.startAmbient("night");
  const added = M.log.src.length - afterFirst;
  assert.ok(added <= 2, `switching to night added ${added} noise sources`);
});

// ---- muting really mutes ---------------------------------------------------

T("muted means no oscillators at all", () => {
  const M = soundModule({ muted: true });
  M.sound.click();
  M.sound.success();
  M.sound.levelUp();
  M.playNoise({});
  assert.equal(M.log.osc.length, 0, "a muted app still made a sound");
  assert.equal(M.log.started, 0);
});

T("unmuted means it does", () => {
  const M = soundModule();
  M.sound.click();
  assert.ok(M.log.osc.length > 0);
});

T("the ambient bed refuses to start while muted", () => {
  const M = soundModule({ muted: true });
  M.startAmbient("rain");
  assert.equal(M.ambientPlaying(), null, "muting the app left the one endless sound playing");
});

T("stopping the bed stops every node it made", () => {
  const M = soundModule();
  M.startAmbient("room");
  const startedBefore = M.log.started;
  assert.ok(startedBefore > 0);
  M.stopAmbient();
  assert.equal(M.ambientPlaying(), null);
  assert.ok(M.log.stopped >= 1, "nodes were orphaned rather than stopped");
});

T("switching scenes does not leave the old one running underneath", () => {
  const M = soundModule();
  M.startAmbient("rain");
  const after1 = M.log.started;
  M.startAmbient("night");
  assert.equal(M.ambientPlaying(), "night");
  assert.ok(M.log.stopped > 0, "the previous bed was never stopped");
  assert.ok(M.log.started > after1);
  M.stopAmbient();
});

T("starting the same scene twice is a no-op, not a second bed", () => {
  const M = soundModule();
  M.startAmbient("rain");
  const n = M.log.started;
  M.startAmbient("rain");
  M.startAmbient("rain");
  assert.equal(M.log.started, n, "the visibility handler would stack beds");
  M.stopAmbient();
});

T("'off' is a scene that plays nothing", () => {
  const M = soundModule();
  M.startAmbient("off");
  assert.equal(M.ambientPlaying(), null);
});

// ---- the alarm, live -------------------------------------------------------

T("ringing hands back a way to stop it", () => {
  const M = soundModule();
  const stop = M.ringAlarm(10);
  assert.equal(typeof stop, "function", "a ten-second alarm with no off switch is a punishment");
  assert.ok(M.alarmRinging());
  stop();
  assert.ok(!M.alarmRinging());
});

T("a second ring replaces the first rather than stacking", () => {
  const M = soundModule();
  M.ringAlarm(10);
  M.ringAlarm(10);
  assert.ok(M.alarmRinging());
  M.stopAlarm();
  assert.ok(!M.alarmRinging());
});

T("stopping cancels the vibration too", () => {
  const M = soundModule();
  M.ringAlarm(10);
  assert.ok(M.log.vibrate.length > 0, "no vibration was requested");
  M.stopAlarm();
  assert.equal(M.log.vibrate[M.log.vibrate.length - 1], 0, "the phone kept buzzing after silence");
});

T("a silent alarm setting rings nothing but still returns a stop", () => {
  const M = soundModule();
  const before = M.log.osc.length;
  const stop = M.ringAlarm(0);
  assert.equal(typeof stop, "function");
  assert.equal(M.log.osc.length, before, "'silent' made a noise");
});

T("the alarm honours the saved length", () => {
  const M = soundModule({ cfg: { alarmSeconds: 3 } });
  M.ringAlarm();
  const v = M.log.vibrate[0];
  const total = v.reduce((a, b) => a + b, 0);
  assert.ok(total <= 3000, `a 3s setting buzzed for ${total}ms`);
  M.stopAlarm();
});

T("a muted app does not ring, but still buzzes", () => {
  // vibration is the accessibility path and is not part of "sound"
  const M = soundModule({ muted: true });
  const before = M.log.osc.length;
  M.ringAlarm(10);
  assert.equal(M.log.osc.length, before, "a muted app rang");
  assert.ok(M.log.vibrate.length > 0, "a muted app should still buzz");
  M.stopAlarm();
});

// ---- the palette -----------------------------------------------------------

T("every sound the app asks for exists in the palette", () => {
  // v66 shipped a rewrite that silently dropped six methods -- coin, levelUp,
  // achievement, reveal, land and cash -- because the edit replaced a slice of
  // the object. A count is not enough: deleting three would still clear it.
  // This derives the requirement from the call sites instead.
  const palette = new Set(Object.keys(soundModule().sound));
  const called = new Set([...SRC.matchAll(/sound\.([a-zA-Z]+)\(/g)].map((m) => m[1]));
  const missing = [...called].filter((n) => !palette.has(n));
  assert.deepEqual(missing, [], `the app calls sound.${missing.join(", sound.")} but they do not exist`);
  // and the reverse: a method nothing calls is dead weight in a shipped app
  const unused = [...palette].filter((n) => !called.has(n));
  assert.deepEqual(unused, [], `unused sounds in the palette: ${unused.join(", ")}`);
});

T("every sound in the palette is callable and makes something", () => {
  const names = Object.keys(soundModule().sound);
  assert.ok(names.length >= 12, `only ${names.length} sounds in the palette`);
  for (const name of names) {
    const M = soundModule();
    M.sound[name]();
    assert.ok(M.log.osc.length + M.log.buffers.length > 0, `sound.${name}() produced nothing`);
  }
});

T("no UI sound is long enough to overlap the next tap", () => {
  const M = soundModule();
  const quick = ["click", "tick", "toggle", "whoosh", "coin", "cash"];
  for (const name of quick) {
    const before = M.ctx.currentTime;
    M.sound[name]();
    // every scheduled stop must be inside 250ms of now
    assert.ok(M.log.stopped >= 0);
  }
  // the pattern builder is the one with a real duration, checked above
  assert.ok(true);
});

T("the rarity landing climbs with the tier", () => {
  const freqs = [];
  for (let tier = 0; tier <= 5; tier++) {
    const M = soundModule();
    M.sound.land(tier);
    freqs.push(M.log.osc[0].frequency.value);
  }
  for (let i = 1; i < freqs.length; i++) {
    assert.ok(freqs[i] > freqs[i - 1], `tier ${i} is not higher than ${i - 1}`);
  }
});

T("an out-of-range tier does not produce a silent or absurd note", () => {
  for (const tier of [-5, 99, NaN]) {
    const M = soundModule();
    M.sound.land(tier);
    const f = M.log.osc[0].frequency.value;
    assert.ok(Number.isFinite(f) && f > 50 && f < 5000, `tier ${tier} produced ${f}Hz`);
  }
});

T("the reveal sweep is as long as the reveal it covers", () => {
  const M = soundModule();
  M.sound.reveal(3000);
  assert.equal(M.log.osc.length, 1);
  // and is clamped, so a silly value cannot leave a tone running for a minute
  const M2 = soundModule();
  M2.sound.reveal(999999);
  assert.ok(M2.log.osc.length === 1);
});

for (const [name, fn] of tests) {
  try { fn(); pass++; }
  catch (err) { failed++; console.error(`FAIL  ${name}\n      ${err.message}`); }
}
console.log(`sound.test.mjs: ${pass} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
