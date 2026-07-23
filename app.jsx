import React, { useState, useMemo, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

// ---- design tokens ----
// bg: #0B0D10 panel: #14171C accent(cyan): #5EEAD4 accent2(amber): #F5A623
// danger: #F0576B text: #E7EAEE muted: #6B7280 mono: JetBrains Mono, sans: Inter

// ---- unique id generation ----
// Seeded from Date.now() (not a small fixed counter) so freshly-generated
// ids never collide with ids created in a previous session after a reload.
// Each call also increments the seed, so ids created in the same tick
// (e.g. importing several items at once) stay unique too.
let __idSeed = Date.now();
function makeId() {
  __idSeed += 1;
  return __idSeed;
}

const PRIORITIES = [
  { key: "low", label: "low", color: "#6B7280" },
  { key: "mid", label: "mid", color: "#5EEAD4" },
  { key: "high", label: "high", color: "#F5A623" },
];

// ---- IST clock + calendar helpers ----
function getISTParts() {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const get = (type) => +parts.find((p) => p.type === type).value;
  return { hour: get("hour"), minute: get("minute"), second: get("second") };
}

function getISTDateLabel() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return fmt.format(new Date());
}

// "YYYY-MM-DD" for the IST calendar day at `offsetDays` from now (can be negative)
function getISTDateString(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(d);
}

function getISTWeekdayShort(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", weekday: "narrow" }).format(d);
}

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function minutesToLabel(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  const ampm = h < 12 ? "AM" : "PM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}

function formatDuration(mins) {
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function minutesToInputValue(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// current streak of consecutive IST-days present in `history`, counting
// from today backward (streak stays alive for one pending day: if
// yesterday was done but today isn't checked off *yet*, it still shows).
//
// Also grants a "freeze": one missed day can be silently bridged without
// breaking the streak, and a fresh freeze regenerates every 7 completed
// days. This mirrors the "streak freeze" pattern used by most habit
// trackers, since a single off day resetting weeks of progress to zero
// tends to make people give up rather than keep going.
function streakFreezeInfo(history) {
  if (!history || history.length === 0) return { streak: 0, freezeUsed: false };
  const set = new Set(history);
  let anchor;
  if (set.has(getISTDateString(0))) anchor = 0;
  else if (set.has(getISTDateString(-1))) anchor = -1;
  else return { streak: 0, freezeUsed: false };

  let streak = 0;
  let offset = anchor;
  let daysSinceFreeze = 0;
  let freezeAvailable = true;
  let freezeUsed = false;

  while (true) {
    if (set.has(getISTDateString(offset))) {
      streak++;
      daysSinceFreeze++;
      if (!freezeAvailable && daysSinceFreeze >= 7) {
        freezeAvailable = true;
        daysSinceFreeze = 0;
      }
      offset -= 1;
    } else if (freezeAvailable) {
      // bridge this single gap day without counting it toward the streak
      freezeAvailable = false;
      daysSinceFreeze = 0;
      freezeUsed = true;
      offset -= 1;
    } else {
      break;
    }
  }
  return { streak, freezeUsed };
}

function computeStreak(history) {
  return streakFreezeInfo(history).streak;
}

const DURATION_PRESETS = [15, 30, 45, 60, 90, 120];

// ============================================================
// SOUND ENGINE -- tiny synthesized UI sounds via Web Audio API.
// No audio files/CDN, so this stays consistent with the fully
// offline/bundled build. Mute state persists in localStorage.
// ============================================================
const SOUND_KEY = "tasksh.sound.v1";
let __audioCtx = null;
function getAudioCtx() {
  if (!__audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    __audioCtx = new Ctx();
  }
  if (__audioCtx.state === "suspended") __audioCtx.resume();
  return __audioCtx;
}

function isSoundOn() {
  try {
    const raw = localStorage.getItem(SOUND_KEY);
    return raw === null ? true : raw === "1";
  } catch {
    return true;
  }
}
function setSoundOn(on) {
  try {
    localStorage.setItem(SOUND_KEY, on ? "1" : "0");
  } catch {}
}

// plays a short envelope-shaped tone (or sequence of tones)
function playTone(specs) {
  if (!isSoundOn()) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  specs.forEach(({ freq, start = 0, dur = 0.08, type = "sine", gain = 0.05 }) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now + start);
    g.gain.setValueAtTime(0.0001, now + start);
    g.gain.exponentialRampToValueAtTime(gain, now + start + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + start + dur);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(now + start);
    osc.stop(now + start + dur + 0.02);
  });
}

const sound = {
  click: () => playTone([{ freq: 720, dur: 0.045, type: "sine", gain: 0.035 }]),
  toggle: () => playTone([{ freq: 560, dur: 0.06, type: "sine", gain: 0.04 }]),
  success: () =>
    playTone([
      { freq: 660, start: 0, dur: 0.09, type: "sine", gain: 0.045 },
      { freq: 990, start: 0.07, dur: 0.13, type: "sine", gain: 0.05 },
    ]),
  error: () =>
    playTone([
      { freq: 220, start: 0, dur: 0.1, type: "square", gain: 0.03 },
      { freq: 165, start: 0.08, dur: 0.14, type: "square", gain: 0.03 },
    ]),
  whoosh: () => playTone([{ freq: 340, dur: 0.07, type: "triangle", gain: 0.025 }]),
  delete: () => playTone([{ freq: 300, start: 0, dur: 0.09, type: "sawtooth", gain: 0.025 }]),
};

function useSoundToggle() {
  const [on, setOn] = useState(isSoundOn());
  const toggle = () => {
    const next = !on;
    setOn(next);
    setSoundOn(next);
    if (next) playTone([{ freq: 720, dur: 0.05, gain: 0.04 }]);
  };
  return [on, toggle];
}

// ============================================================
// ANIMATED COUNTER -- eases a number from its previous value to
// a new one whenever it changes, instead of snapping instantly.
// ============================================================
function useAnimatedNumber(value, duration = 550) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef(null);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    if (from === to) return;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = ease(t);
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [value, duration]);

  return display;
}

function AnimatedNumber({ value, className, suffix = "" }) {
  const display = useAnimatedNumber(value);
  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}

// ============================================================
// CHART PRIMITIVES -- lightweight, dependency-free inline SVG.
// Each animates in on mount/update and carries no external assets.
// ============================================================

// radar/spider chart across N axes, e.g. life-areas by XP
function RadarChart({ axes, size = 220, maxValue }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const n = axes.length;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 34;
  const max = maxValue ?? Math.max(1, ...axes.map((a) => a.value));
  const angleFor = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;

  const pointFor = (i, frac) => {
    const a = angleFor(i);
    return [cx + Math.cos(a) * r * frac, cy + Math.sin(a) * r * frac];
  };

  const rings = [0.25, 0.5, 0.75, 1];
  const dataPoints = axes.map((ax, i) => pointFor(i, mounted ? Math.max(0.04, ax.value / max) : 0.02));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + "Z";

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size} className="radar-chart">
      {rings.map((frac, ri) => {
        const pts = axes.map((_, i) => pointFor(i, frac));
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + "Z";
        return <path key={ri} d={d} className="radar-ring" />;
      })}
      {axes.map((_, i) => {
        const p = pointFor(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} className="radar-spoke" />;
      })}
      <path
        d={dataPath}
        className="radar-fill"
        style={{ transition: "d 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      {axes.map((ax, i) => {
        const labelPt = pointFor(i, 1.22);
        const dotPt = pointFor(i, mounted ? Math.max(0.04, ax.value / max) : 0.02);
        return (
          <g key={ax.key || i}>
            <circle
              cx={dotPt[0]}
              cy={dotPt[1]}
              r={3.5}
              fill={ax.color || "#5EEAD4"}
              style={{ transition: "cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)" }}
            />
            <text x={labelPt[0]} y={labelPt[1]} textAnchor="middle" dominantBaseline="middle" className="radar-label">
              {ax.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// circular radial progress ring with center label, draws in on mount
function RadialProgress({ pct, size = 108, stroke = 9, color = "#5EEAD4", trackColor = "#1E2228", label, sublabel }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const r = size / 2 - stroke;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, pct));
  const offset = c - (mounted ? clamped / 100 : 0) * c;
  const labelFontSize = Math.max(8, Math.round(size * 0.135));
  const sublabelFontSize = Math.max(6.5, Math.round(size * 0.075));

  return (
    <div className="radial-progress-wrap" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
      </svg>
      <div className="radial-progress-center">
        {label && <span className="radial-progress-label" style={{ fontSize: labelFontSize }}>{label}</span>}
        {sublabel && <span className="radial-progress-sublabel" style={{ fontSize: sublabelFontSize }}>{sublabel}</span>}
      </div>
    </div>
  );
}

// donut chart with animated arc draw-in; segments = [{label, value, color}]
function DonutChart({ segments, size = 132, stroke = 18, centerLabel, centerSublabel }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const r = size / 2 - stroke / 2;
  const c = 2 * Math.PI * r;
  const total = Math.max(1e-6, segments.reduce((s, seg) => s + Math.max(0, seg.value), 0));

  let cursor = 0;
  const arcs = segments.map((seg) => {
    const val = Math.max(0, seg.value);
    const frac = val / total;
    const dash = mounted ? frac * c : 0;
    const gap = c - dash;
    const rotation = (cursor / total) * 360;
    cursor += val;
    return { ...seg, dash, gap, rotation, frac };
  });

  return (
    <div className="donut-wrap" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1E2228" strokeWidth={stroke} />
        {arcs.map((a, i) => (
          <circle
            key={a.key || i}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={a.color}
            strokeWidth={stroke}
            strokeDasharray={`${a.dash} ${a.gap}`}
            strokeDashoffset={0}
            transform={`rotate(${a.rotation - 90} ${size / 2} ${size / 2})`}
            style={{ transition: "stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)" }}
            strokeLinecap={arcs.length > 1 ? "butt" : "round"}
          />
        ))}
      </svg>
      <div className="donut-center">
        {centerLabel !== undefined && <span className="donut-center-label">{centerLabel}</span>}
        {centerSublabel && <span className="donut-center-sublabel">{centerSublabel}</span>}
      </div>
    </div>
  );
}

// calendar heatmap (GitHub-contributions style): `weeks` columns of 7-day
// cells, intensity 0-4 driven by count relative to the observed max
function CalendarHeatmap({ counts, weeksBack = 12, colorSteps }) {
  const steps = colorSteps || ["#14171C", "#0F3A34", "#12564C", "#17836F", "#5EEAD4"];
  const todayOffset = 0;
  const totalDays = weeksBack * 7;
  // align so the grid ends on the current week's day-of-week column
  const days = Array.from({ length: totalDays }, (_, i) => todayOffset - (totalDays - 1 - i));
  const maxCount = Math.max(1, ...days.map((o) => counts[getISTDateString(o)] || 0));

  const cols = [];
  for (let w = 0; w < weeksBack; w++) {
    cols.push(days.slice(w * 7, w * 7 + 7));
  }

  const levelFor = (count) => {
    if (!count) return 0;
    const frac = count / maxCount;
    if (frac > 0.75) return 4;
    if (frac > 0.5) return 3;
    if (frac > 0.25) return 2;
    return 1;
  };

  return (
    <div className="heatmap-wrap">
      <div className="heatmap-grid">
        {cols.map((col, ci) => (
          <div className="heatmap-col" key={ci}>
            {col.map((offset, ri) => {
              const ds = getISTDateString(offset);
              const count = counts[ds] || 0;
              const level = levelFor(count);
              return (
                <span
                  key={ri}
                  className={`heatmap-cell ${offset === 0 ? "today" : ""}`}
                  style={{
                    background: steps[level],
                    animationDelay: `${(ci * 7 + ri) * 4}ms`,
                  }}
                  title={`${ds}: ${count} completed`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="heatmap-legend">
        <span>less</span>
        {steps.map((c, i) => (
          <span key={i} className="heatmap-legend-cell" style={{ background: c }} />
        ))}
        <span>more</span>
      </div>
    </div>
  );
}

// horizontal 24h timeline strip -- draws each routine as a positioned,
// width-proportional block instead of a plain list
function DayTimeline({ routines, nowMinutes }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const DAY = 24 * 60;
  const nowPct = (nowMinutes / DAY) * 100;
  const hourMarks = [0, 3, 6, 9, 12, 15, 18, 21, 24];
  const hourLabel = (h) => {
    const hh = h % 24;
    if (hh === 0) return "12a";
    if (hh === 12) return "12p";
    return hh > 12 ? `${hh - 12}p` : `${hh}a`;
  };

  return (
    <div className="timeline-wrap">
      <div className="timeline-track">
        {/* night/day shading: dim overnight hours (10pm-6am) */}
        <div className="timeline-night" style={{ left: "0%", width: `${(6 / 24) * 100}%` }} />
        <div className="timeline-night" style={{ left: `${(22 / 24) * 100}%`, width: `${(2 / 24) * 100}%` }} />

        {hourMarks.map((h) => (
          <div key={h} className="timeline-gridline" style={{ left: `${(h / 24) * 100}%` }} />
        ))}
        {hourMarks.map((h) => (
          <div key={h} className="timeline-hour" style={{ left: `${(h / 24) * 100}%` }}>
            <span>{hourLabel(h)}</span>
          </div>
        ))}

        {/* elapsed-today shading, up to now */}
        <div className="timeline-elapsed" style={{ width: mounted ? `${nowPct}%` : "0%" }} />

        {routines.map((r, i) => {
          const start = timeToMinutes(r.time);
          const leftPct = (start / DAY) * 100;
          const widthPct = Math.max(0.8, (r.duration / DAY) * 100);
          const doneToday = (r.history || []).includes(getISTDateString(0));
          const color = colorForId(r.id);
          const showLabel = (widthPct / 100) * 340 > 46; // rough px width heuristic
          return (
            <div
              key={r.id}
              className={`timeline-block ${doneToday ? "done" : ""}`}
              style={{
                left: `${leftPct}%`,
                width: mounted ? `${widthPct}%` : "0%",
                transitionDelay: `${i * 25}ms`,
                background: doneToday
                  ? "linear-gradient(180deg, #3A4048, #2A2F36)"
                  : `linear-gradient(180deg, ${color}, ${color}CC)`,
                boxShadow: doneToday ? "none" : `0 0 10px ${color}55`,
              }}
              title={`${r.label} · ${minutesToLabel(start)} · ${formatDuration(r.duration)}${doneToday ? " · done" : ""}`}
            >
              {showLabel && <span className="timeline-block-label">{r.label}</span>}
            </div>
          );
        })}
        <div className="timeline-now" style={{ left: `${nowPct}%` }}>
          <span className="timeline-now-tag">{minutesToLabel(nowMinutes)}</span>
        </div>
      </div>

      {routines.length > 0 && (
        <div className="timeline-legend">
          {routines.map((r) => {
            const doneToday = (r.history || []).includes(getISTDateString(0));
            return (
              <span key={r.id} className={`timeline-legend-chip ${doneToday ? "done" : ""}`}>
                <span className="timeline-legend-dot" style={{ background: doneToday ? "#3A4048" : colorForId(r.id) }} />
                {r.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---- permanent routines (quest log) ----
const seedRoutines = [
  { id: 1, time: "06:30", label: "Wake + hydrate", duration: 30, history: [getISTDateString(-1), getISTDateString(-2), getISTDateString(-3)] },
  { id: 2, time: "07:00", label: "Workout", duration: 60, history: [getISTDateString(-1), getISTDateString(-2)] },
  { id: 3, time: "09:00", label: "Deep work block", duration: 180, history: [getISTDateString(0), getISTDateString(-1), getISTDateString(-2), getISTDateString(-3), getISTDateString(-4)] },
  { id: 4, time: "13:00", label: "Lunch break", duration: 45, history: [] },
  { id: 5, time: "14:00", label: "Admin / errands", duration: 120, history: [] },
  { id: 6, time: "18:00", label: "Rice / creative projects", duration: 90, history: [getISTDateString(-1)] },
  { id: 7, time: "20:00", label: "Dinner", duration: 45, history: [] },
  { id: 8, time: "21:30", label: "Anime / wind down", duration: 90, history: [] },
  { id: 9, time: "23:00", label: "Sleep", duration: 450, history: [] },
];

function useISTClock() {
  const [now, setNow] = useState(getISTParts());
  useEffect(() => {
    const t = setInterval(() => setNow(getISTParts()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

// figures out which routine is "current" and which is "next", handling
// midnight wraparound, given a sorted-by-time routine list
function useRoutineStatus(routines, nowMinutes) {
  return useMemo(() => {
    const sorted = [...routines].sort(
      (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)
    );
    if (sorted.length === 0) return { sorted, currentId: null, nextId: null };

    let currentIdx = sorted.length - 1;
    for (let i = 0; i < sorted.length; i++) {
      if (timeToMinutes(sorted[i].time) <= nowMinutes) currentIdx = i;
      else break;
    }
    const nextIdx = (currentIdx + 1) % sorted.length;
    return {
      sorted,
      currentId: sorted[currentIdx].id,
      nextId: sorted[nextIdx].id,
    };
  }, [routines, nowMinutes]);
}

// compact 7-day dot strip, oldest -> newest (today last)
function WeekDots({ history }) {
  const set = new Set(history || []);
  const days = [-6, -5, -4, -3, -2, -1, 0].map((o) => getISTDateString(o));
  return (
    <span className="week-dots">
      {days.map((d, i) => (
        <span key={i} className={`week-dot ${set.has(d) ? "filled" : ""}`} />
      ))}
    </span>
  );
}

function RoutineRow({ routine, status, index, onDelete, onToggleToday, onSave }) {
  const startMin = timeToMinutes(routine.time);
  const endMin = startMin + routine.duration;
  const { streak, freezeUsed } = streakFreezeInfo(routine.history);
  const doneToday = (routine.history || []).includes(getISTDateString(0));

  const [dragX, setDragX] = useState(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const axisRef = useRef(null); // 'x' | 'y' | null (undecided)
  const movedRef = useRef(false);
  const [removing, setRemoving] = useState(false);

  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(routine.label);
  const [eTime, setETime] = useState(routine.time);
  const [eDuration, setEDuration] = useState(routine.duration);

  const openEdit = () => {
    setELabel(routine.label);
    setETime(routine.time);
    setEDuration(routine.duration);
    setEditing(true);
  };

  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(routine.id, {
      label: text,
      time: eTime || routine.time,
      duration: Math.max(5, +eDuration || routine.duration),
    });
    setEditing(false);
  };

  const onPointerDown = (e) => {
    if (editing) return;
    draggingRef.current = true;
    movedRef.current = false;
    axisRef.current = null;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    if (axisRef.current === null) {
      // not enough movement yet to tell whether this is a scroll or a swipe
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axisRef.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (axisRef.current === "y") {
        // vertical gesture - this is a scroll, not a swipe. back off completely
        // and let the browser handle it natively.
        draggingRef.current = false;
        return;
      }
    }

    if (axisRef.current !== "x") return;
    if (Math.abs(dx) > 4) movedRef.current = true;
    setDragX(Math.max(-120, Math.min(0, dx)));
  };
  const finishDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (dragX < -70) {
      setRemoving(true);
      setTimeout(() => onDelete(routine.id), 200);
    } else {
      setDragX(0);
      if (!movedRef.current) openEdit();
    }
  };

  return (
    <div
      className={`routine-row-wrap ${removing ? "removing" : ""}`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <div className="routine-delete-bg">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
      <div
        className={`routine-row ${status}`}
        style={{
          transform: `translateX(${dragX}px)`,
          transition: draggingRef.current ? "none" : "transform 220ms cubic-bezier(.65,0,.35,1)",
          borderLeft: `3px solid ${doneToday ? "#2A2F36" : colorForId(routine.id)}`,
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishDrag}
        onPointerLeave={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div className="routine-line">
          <span className={`routine-node ${doneToday ? "quest-done" : ""}`} />
          <span className="routine-connector" />
        </div>

        {editing ? (
          <div className="routine-edit" onPointerDown={(e) => e.stopPropagation()}>
            <input
              className="edit-label"
              value={eLabel}
              onChange={(e) => setELabel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEdit()}
              autoFocus
            />
            <div className="edit-row">
              <input
                type="time"
                className="time-input"
                value={eTime}
                onChange={(e) => setETime(e.target.value)}
              />
              <input
                type="number"
                min="5"
                step="5"
                className="duration-input"
                value={eDuration}
                onChange={(e) => setEDuration(e.target.value)}
              />
              <span className="edit-unit">min</span>
            </div>
            <div className="edit-actions">
              <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
              <button className="edit-save" onClick={saveEdit}>save</button>
            </div>
          </div>
        ) : (
          <div className="routine-main">
            <div className="routine-top">
              <span className="routine-time">{minutesToLabel(startMin)}</span>
              {status === "current" && <span className="live-tag">NOW</span>}
              {streak > 0 && (
                <span className="streak-tag">
                  🔥{streak}
                  {freezeUsed && <span className="freeze-tag" title="a missed day was covered by a streak freeze">❄️</span>}
                </span>
              )}
            </div>
            <span className="routine-label">{routine.label}</span>
            <span className="routine-span">
              {minutesToLabel(startMin)} – {minutesToLabel(endMin)} · {formatDuration(routine.duration)}
            </span>
            <WeekDots history={routine.history} />
          </div>
        )}

        {!editing && (
          <button
            className={`quest-check ${doneToday ? "done" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleToday(routine.id);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label="Mark done today"
          >
            <svg viewBox="0 0 24 24" width="14" height="14">
              <polyline
                points="4,13 9,18 20,6"
                fill="none"
                stroke="#0B0D10"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 24,
                  strokeDashoffset: doneToday ? 0 : 24,
                  transition: "stroke-dashoffset 220ms ease",
                }}
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

// aggregate completion % across all routines, last 7 IST days
function WeekChart({ routines }) {
  const days = [-6, -5, -4, -3, -2, -1, 0];
  const total = routines.length || 1;
  const bars = days.map((offset) => {
    const dateStr = getISTDateString(offset);
    const done = routines.filter((r) => (r.history || []).includes(dateStr)).length;
    return { offset, pct: Math.round((done / total) * 100), label: getISTWeekdayShort(offset) };
  });
  return (
    <div className="week-chart">
      {bars.map((b, i) => (
        <div className="week-bar-col" key={i}>
          <div className="week-bar-track">
            <div
              className={`week-bar-fill ${b.offset === 0 ? "today" : ""}`}
              style={{ height: `${Math.max(4, b.pct)}%` }}
            />
          </div>
          <span className="week-bar-label">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function RoutinesView({ routines, setRoutines }) {
  const ist = useISTClock();
  const nowMinutes = ist.hour * 60 + ist.minute;
  const { sorted, currentId, nextId } = useRoutineStatus(routines, nowMinutes);
  const current = sorted.find((r) => r.id === currentId);
  const next = sorted.find((r) => r.id === nextId);

  const [label, setLabel] = useState("");
  const [time, setTime] = useState(() => minutesToInputValue(nowMinutes));
  const [duration, setDuration] = useState(30);
  const [flash, setFlash] = useState(false);

  const addRoutine = () => {
    const text = label.trim();
    if (!text) {
      setFlash(true);
      setTimeout(() => setFlash(false), 420);
      sound.error();
      return;
    }
    const finalTime = time || minutesToInputValue(nowMinutes);
    setRoutines((prev) => [
      ...prev,
      { id: makeId(), time: finalTime, label: text, duration: Math.max(5, +duration || 30), history: [] },
    ]);
    setLabel("");
    setTime(minutesToInputValue(nowMinutes));
    setDuration(30);
    sound.click();
  };

  const deleteRoutine = (id) => { setRoutines((prev) => prev.filter((r) => r.id !== id)); sound.delete(); };

  const toggleToday = (id) => {
    const today = getISTDateString(0);
    let willBeDone = false;
    setRoutines((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const has = (r.history || []).includes(today);
        willBeDone = !has;
        const history = has ? r.history.filter((d) => d !== today) : [...(r.history || []), today];
        return { ...r, history: history.slice(-60) };
      })
    );
    willBeDone ? sound.success() : sound.click();
  };

  const saveRoutine = (id, patch) =>
    setRoutines((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const currentEnd = current ? timeToMinutes(current.time) + current.duration : 0;
  const untilNext = next
    ? ((timeToMinutes(next.time) - nowMinutes + 1440) % 1440) || 1440
    : 0;

  const todayStr = getISTDateString(0);
  const doneToday = sorted.filter((r) => (r.history || []).includes(todayStr)).length;
  const bestStreak = sorted.reduce((m, r) => Math.max(m, computeStreak(r.history)), 0);
  const questPct = sorted.length ? Math.round((doneToday / sorted.length) * 100) : 0;

  return (
    <div className="task-list routine-list">
      <div className="hero-card">
        <div className="hero-clock-row">
          <span className="hero-clock">
            {String(ist.hour % 12 === 0 ? 12 : ist.hour % 12).padStart(2, "0")}:
            {String(ist.minute).padStart(2, "0")}
            <span className="hero-sec">:{String(ist.second).padStart(2, "0")}</span>
            <span className="hero-ampm">{ist.hour < 12 ? "AM" : "PM"}</span>
          </span>
          <span className="hero-tz">IST · INDIA</span>
        </div>
        <span className="hero-date">{getISTDateLabel()}</span>

        <div className="hero-divider" />

        {current ? (
          <div className="hero-current">
            <span className="hero-label">CURRENT ROUTINE</span>
            <div className="hero-current-name">
              <span className="pulse-dot" />
              {current.label}
            </div>
            <span className="hero-sub">
              until {minutesToLabel(currentEnd)} · next: {next?.label} in {formatDuration(untilNext)}
            </span>
          </div>
        ) : (
          <span className="hero-sub">no routines yet</span>
        )}
      </div>

      <div className="quest-stats">
        <div className="quest-stat-item">
          <span className="quest-stat-value">
            <AnimatedNumber value={doneToday} />
            <span className="quest-stat-of">/{sorted.length}</span>
          </span>
          <span className="quest-stat-label">today</span>
        </div>
        <div className="quest-stat-item">
          <span className="quest-stat-value amber">🔥<AnimatedNumber value={bestStreak} /></span>
          <span className="quest-stat-label">best streak</span>
        </div>
        <div className="quest-stat-item quest-stat-ring">
          <RadialProgress pct={questPct} size={44} stroke={3.5} label={`${questPct}%`} />
        </div>
      </div>

      <div className="section-header"><span>TODAY'S SCHEDULE</span></div>
      <DayTimeline routines={sorted} nowMinutes={nowMinutes} />

      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="new routine..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addRoutine()}
        />
        <input
          type="time"
          className="time-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button className="add-btn" onClick={addRoutine} aria-label="Add routine">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="duration-chips">
        {DURATION_PRESETS.map((d) => (
          <button key={d} className={duration === d ? "active" : ""} onClick={() => setDuration(d)}>
            {formatDuration(d)}
          </button>
        ))}
        <input
          type="number"
          min="5"
          step="5"
          className="duration-custom"
          value={duration}
          onChange={(e) => setDuration(+e.target.value || 5)}
        />
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">no quests yet — add your first routine</div>
        </div>
      ) : (
        sorted.map((r, i) => (
          <RoutineRow
            key={r.id}
            routine={r}
            index={i}
            status={r.id === currentId ? "current" : r.id === nextId ? "next" : "idle"}
            onDelete={deleteRoutine}
            onToggleToday={toggleToday}
            onSave={saveRoutine}
          />
        ))
      )}

      <div className="section-header"><span>7-DAY COMPLETION</span></div>
      <WeekChart routines={sorted} />
    </div>
  );
}

// ============================================================
// VAULT TAB — habit-streak tracking (weekly-goal habits, monthly
// calendar grid) + lightweight project manager
// ============================================================

// current IST month info, used to build the monthly calendar grid
function getISTMonthInfo() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const y = +parts.find((p) => p.type === "year").value;
  const m = +parts.find((p) => p.type === "month").value; // 1-12
  const daysInMonth = new Date(y, m, 0).getDate();
  const monthLabel = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    month: "short",
    year: "numeric",
  }).format(now);
  return { y, m, daysInMonth, monthLabel };
}

function istDateStringFor(y, m, day) {
  return `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

// count of history entries within the last 7 IST days (incl. today)
function weeklyCount(history) {
  const set = new Set(history || []);
  let c = 0;
  for (let o = -6; o <= 0; o++) if (set.has(getISTDateString(o))) c++;
  return c;
}

function daysToGoLabel(dueDate) {
  if (!dueDate) return null;
  const due = new Date(dueDate + "T00:00:00+05:30");
  const today = new Date(getISTDateString(0) + "T00:00:00+05:30");
  const diff = Math.round((due - today) / 86400000);
  if (diff < 0) return { text: `${Math.abs(diff)}d overdue`, overdue: true };
  if (diff === 0) return { text: "due today", overdue: false };
  return { text: `${diff}d to go`, overdue: false };
}

const seedVaultHabits = [
  { id: 1, icon: "◆", label: "6 Hr Deep Work", weeklyGoal: 7, history: [getISTDateString(0), getISTDateString(-1), getISTDateString(-2)] },
  { id: 2, icon: "◇", label: "Eat Healthy", weeklyGoal: 7, history: [getISTDateString(-1)] },
  { id: 3, icon: "▢", label: "Reading", weeklyGoal: 4, history: [] },
  { id: 4, icon: "▲", label: "Workout", weeklyGoal: 6, history: [getISTDateString(0)] },
];

const seedProjects = [
  {
    id: 1,
    name: "Notion Template",
    dueDate: getISTDateString(7),
    tasks: [
      { id: makeId(), text: "Design layout", done: true },
      { id: makeId(), text: "Write docs", done: false },
      { id: makeId(), text: "Publish", done: false },
    ],
  },
  {
    id: 2,
    name: "Content Creation",
    dueDate: getISTDateString(7),
    tasks: [
      { id: makeId(), text: "Script draft", done: false },
      { id: makeId(), text: "Record", done: false },
    ],
  },
];

// compact monthly calendar grid, filled cells = history hit for that IST date
function MonthGrid({ history }) {
  const { y, m, daysInMonth, monthLabel } = getISTMonthInfo();
  const set = new Set(history || []);
  const today = getISTDateString(0);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return (
    <div className="month-grid-wrap">
      <span className="month-grid-label">{monthLabel}</span>
      <div className="month-grid">
        {days.map((d) => {
          const ds = istDateStringFor(y, m, d);
          return (
            <span
              key={d}
              className={`month-cell ${set.has(ds) ? "filled" : ""} ${ds === today ? "today" : ""}`}
              style={{ animationDelay: `${d * 6}ms` }}
              title={ds}
            />
          );
        })}
      </div>
    </div>
  );
}

function VaultHabitCard({ habit, onToggleToday, onDelete, onSave }) {
  const doneToday = (habit.history || []).includes(getISTDateString(0));
  const { streak, freezeUsed } = streakFreezeInfo(habit.history);
  const wk = weeklyCount(habit.history);
  const pct = Math.min(100, Math.round((wk / habit.weeklyGoal) * 100));

  const [editing, setEditing] = useState(false);
  const [eIcon, setEIcon] = useState(habit.icon);
  const [eLabel, setELabel] = useState(habit.label);
  const [eGoal, setEGoal] = useState(habit.weeklyGoal);

  const openEdit = () => {
    setEIcon(habit.icon);
    setELabel(habit.label);
    setEGoal(habit.weeklyGoal);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(habit.id, { icon: eIcon.trim() || habit.icon, label: text, weeklyGoal: Math.max(1, Math.min(7, +eGoal || habit.weeklyGoal)) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="vault-card">
        <div className="routine-edit">
          <div className="edit-row">
            <input
              className="duration-input"
              style={{ width: 44 }}
              value={eIcon}
              onChange={(e) => setEIcon(e.target.value)}
              maxLength={2}
            />
            <input
              className="edit-label"
              style={{ flex: 1 }}
              value={eLabel}
              onChange={(e) => setELabel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveEdit()}
              autoFocus
            />
          </div>
          <div className="edit-row">
            <input
              type="number"
              min="1"
              max="7"
              className="duration-input"
              value={eGoal}
              onChange={(e) => setEGoal(e.target.value)}
            />
            <span className="edit-unit">x / week</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vault-card" style={{ borderLeft: `3px solid ${colorForId(habit.id)}` }}>
      <div className="vault-card-top">
        <span className="vault-card-icon" style={{ color: colorForId(habit.id) }}>{habit.icon}</span>
        <div className="vault-card-title">
          <span className="vault-card-label">{habit.label}</span>
          <span className="vault-card-goal">weekly: {habit.weeklyGoal}x</span>
        </div>
        <button className="vault-card-edit" onClick={openEdit} aria-label="Edit habit">
          <svg viewBox="0 0 24 24" width="13" height="13">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="vault-card-del" onClick={() => onDelete(habit.id)} aria-label="Delete habit">
          <svg viewBox="0 0 24 24" width="13" height="13">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <MonthGrid history={habit.history} />
      <div className="vault-card-bottom">
        <div className="vault-card-ring-row">
          <RadialProgress pct={pct} size={34} stroke={3.5} color={colorForId(habit.id)} />
          <span className="vault-card-pct">
            {pct}% <span className="muted">({wk}/{habit.weeklyGoal})</span>
          </span>
        </div>
        {streak > 0 && (
          <span className="streak-tag">
            🔥{streak}
            {freezeUsed && <span className="freeze-tag" title="a missed day was covered by a streak freeze">❄️</span>}
          </span>
        )}
      </div>
      <button className={`vault-check ${doneToday ? "done" : ""}`} onClick={() => onToggleToday(habit.id)}>
        {doneToday ? "✓ completed today" : "mark complete today"}
      </button>
    </div>
  );
}

function VaultHabitsSection({ habits, setHabits }) {
  const [label, setLabel] = useState("");
  const [goal, setGoal] = useState(7);
  const [flash, setFlash] = useState(false);

  const add = () => {
    const text = label.trim();
    if (!text) {
      setFlash(true);
      setTimeout(() => setFlash(false), 420);
      sound.error();
      return;
    }
    setHabits((prev) => [...prev, { id: makeId(), icon: "◆", label: text, weeklyGoal: goal, history: [] }]);
    setLabel("");
    setGoal(7);
    sound.click();
  };
  const del = (id) => { setHabits((prev) => prev.filter((h) => h.id !== id)); sound.delete(); };
  const saveHabit = (id, patch) => setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  const toggleToday = (id) => {
    const today = getISTDateString(0);
    let willBeDone = false;
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const has = (h.history || []).includes(today);
        willBeDone = !has;
        const history = has ? h.history.filter((d) => d !== today) : [...(h.history || []), today];
        return { ...h, history: history.slice(-370) };
      })
    );
    willBeDone ? sound.success() : sound.click();
  };

  return (
    <>
      <div className="section-header"><span>HABIT-STREAK-TRACKING</span></div>
      <div className="vault-grid">
        {habits.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no habits yet — add your first</div>
          </div>
        ) : (
          habits.map((h) => (
            <VaultHabitCard key={h.id} habit={h} onToggleToday={toggleToday} onDelete={del} onSave={saveHabit} />
          ))
        )}
      </div>
      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="new habit..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button className="add-btn" onClick={add} aria-label="Add habit">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {[3, 4, 5, 6, 7].map((g) => (
          <button key={g} className={goal === g ? "active" : ""} onClick={() => setGoal(g)}>
            {g}x/wk
          </button>
        ))}
      </div>
    </>
  );
}

function ProjectTaskRow({ projectId, task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const save = () => {
    const t = text.trim();
    if (t) onEdit(projectId, task.id, t);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="project-task-row">
        <input
          className="project-task-edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          onBlur={save}
          autoFocus
        />
      </div>
    );
  }

  return (
    <div className="project-task-row">
      <Checkbox checked={task.done} onChange={() => onToggle(projectId, task.id)} color="#5EEAD4" />
      <span className={`project-task-text ${task.done ? "done" : ""}`} onClick={() => setEditing(true)}>
        {task.text}
      </span>
      <button className="del-btn" onClick={() => onDelete(projectId, task.id)} aria-label="Delete task">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function ProjectCard({ project, onDelete, onAddTask, onToggleTask, onDeleteTask, onEditTask, onSave }) {
  const [taskText, setTaskText] = useState("");
  const total = project.tasks.length;
  const done = project.tasks.filter((t) => t.done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const due = daysToGoLabel(project.dueDate);

  const [editing, setEditing] = useState(false);
  const [eName, setEName] = useState(project.name);
  const [eDue, setEDue] = useState(project.dueDate || "");

  const addTask = () => {
    const text = taskText.trim();
    if (!text) return;
    onAddTask(project.id, text);
    setTaskText("");
  };

  const openEdit = () => {
    setEName(project.name);
    setEDue(project.dueDate || "");
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eName.trim();
    if (!text) return;
    onSave(project.id, { name: text, dueDate: eDue || null });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="project-card">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eName}
            onChange={(e) => setEName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            <input type="date" className="time-input" value={eDue} onChange={(e) => setEDue(e.target.value)} />
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card" style={{ borderLeft: `3px solid ${colorForId(project.id)}` }}>
      <div className="project-card-top">
        <span className="project-name">{project.name}</span>
        <div className="project-card-actions">
          <button className="vault-card-edit" onClick={openEdit} aria-label="Edit project">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="vault-card-del" onClick={() => onDelete(project.id)} aria-label="Delete project">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {due && <span className={`project-due ${due.overdue ? "overdue" : ""}`}>{due.text}</span>}
      <div className="progress-track small">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="vault-card-pct">{done}/{total} tasks · {pct}%</span>
      <div className="project-tasks">
        {project.tasks.map((t) => (
          <ProjectTaskRow
            key={t.id}
            projectId={project.id}
            task={t}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
          />
        ))}
      </div>
      <div className="project-add-task">
        <input
          type="text"
          placeholder="+ add task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
      </div>
    </div>
  );
}

function VaultProjectsSection({ projects, setProjects }) {
  const [name, setName] = useState("");
  const [due, setDue] = useState("");
  const [flash, setFlash] = useState(false);

  const add = () => {
    const text = name.trim();
    if (!text) {
      setFlash(true);
      setTimeout(() => setFlash(false), 420);
      sound.error();
      return;
    }
    setProjects((prev) => [...prev, { id: makeId(), name: text, dueDate: due || null, tasks: [] }]);
    setName("");
    setDue("");
    sound.click();
  };
  const del = (id) => { setProjects((prev) => prev.filter((p) => p.id !== id)); sound.delete(); };
  const saveProject = (id, patch) => setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  const addTask = (projectId, text) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, tasks: [...p.tasks, { id: makeId(), text, done: false }] } : p))
    );
    sound.click();
  };
  const toggleTask = (projectId, taskId) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId ? p : { ...p, tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t)) }
      )
    );
    sound.success();
  };
  const deleteTask = (projectId, taskId) => {
    setProjects((prev) =>
      prev.map((p) => (p.id !== projectId ? p : { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }))
    );
    sound.delete();
  };
  const editTask = (projectId, taskId, text) =>
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId ? p : { ...p, tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, text } : t)) }
      )
    );

  return (
    <>
      <div className="section-header"><span>PROJECT-MANAGER</span></div>
      <div className="vault-grid">
        {projects.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no projects yet</div>
          </div>
        ) : (
          projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onDelete={del}
              onAddTask={addTask}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
              onEditTask={editTask}
              onSave={saveProject}
            />
          ))
        )}
      </div>
      <div className={`composer ${flash ? "shake" : ""}`}>
        <input
          type="text"
          placeholder="new project..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <input type="date" className="time-input" value={due} onChange={(e) => setDue(e.target.value)} />
        <button className="add-btn" onClick={add} aria-label="Add project">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  );
}

function VaultView({ vaultHabits, setVaultHabits, projects, setProjects }) {
  return (
    <div className="task-list vault-scroll">
      <VaultHabitsSection habits={vaultHabits} setHabits={setVaultHabits} />
      <VaultProjectsSection projects={projects} setProjects={setProjects} />
    </div>
  );
}

// ============================================================
// QUEST TAB — gamified XP system: good/bad habits, life areas,
// reward center. New accent used only here: violet #8B9CF7
// (self-development area), kept consistent with the rest of the palette.
// ============================================================

const AREAS = [
  { key: "work", label: "Work", color: "#5EEAD4" },
  { key: "fitness", label: "Fitness", color: "#F5A623" },
  { key: "health", label: "Health", color: "#F0576B" },
  { key: "self", label: "Self-Dev", color: "#8B9CF7" },
];

// curated ANSI/terminal-inspired categorical palette, used to give each
// routine/habit a stable, distinct color (hashed from its id) instead of
// everything sharing one accent color
const CATEGORY_PALETTE = [
  "#5EEAD4", // cyan
  "#F5A623", // amber
  "#F0576B", // coral/red
  "#8B9CF7", // violet
  "#7EE787", // green
  "#F778BA", // pink
  "#79C0FF", // blue
  "#E3B341", // gold
];

function colorForId(id) {
  const n = typeof id === "number" ? id : String(id).split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  return CATEGORY_PALETTE[Math.abs(n) % CATEGORY_PALETTE.length];
}

const LEVEL_TITLES = [
  "Novice", "Apprentice", "Adept", "Ranger", "Knight", "Vanguard", "Wizard",
  "Sage", "Champion", "Sentinel", "Archon", "Warlord", "Mystic", "Overlord",
  "Ascendant", "Legend", "Mythic", "Immortal", "Transcendent", "Eternal",
];

function computeTotalXP(goodHabits, badHabits, rewards) {
  const earned = goodHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lost = badHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const spent = rewards.reduce((s, r) => s + r.cost * (r.claimed?.length || 0), 0);
  return earned - lost - spent;
}

function computeAreaXP(area, goodHabits, badHabits) {
  const earned = goodHabits.filter((h) => h.area === area).reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lost = badHabits.filter((h) => h.area === area).reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  return earned - lost;
}

// cumulative XP required to REACH level L (L>=1): a quadratic curve, so
// each level demands progressively more than the last (100, 200, 300, 400
// more XP for levels 2, 3, 4, 5...) instead of a flat 100/level. Level 1
// still starts at 0 and level 2 still unlocks at exactly 100 XP, so
// existing progress doesn't retroactively change -- only the climb from
// here gets steeper.
function cumulativeXPForLevel(level) {
  return 50 * level * (level - 1);
}

function levelFromXP(xp) {
  const clamped = Math.max(0, xp);
  const level = Math.max(1, Math.floor((50 + Math.sqrt(2500 + 200 * clamped)) / 100));
  const into = clamped - cumulativeXPForLevel(level);
  const span = cumulativeXPForLevel(level + 1) - cumulativeXPForLevel(level);
  return { level, into, span };
}

// small roman-numeral converter, used past the last named title
// (e.g. "Eternal II", "Eternal III"...) so leveling never visually caps
function toRoman(num) {
  const table = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  let n = num, out = "";
  for (const [v, s] of table) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
}

function titleForLevel(lvl) {
  if (lvl <= LEVEL_TITLES.length) return LEVEL_TITLES[lvl - 1];
  const tier = lvl - LEVEL_TITLES.length + 1;
  return `${LEVEL_TITLES[LEVEL_TITLES.length - 1]} ${toRoman(tier)}`;
}


const seedGoodHabits = [
  { id: 1, label: "Deep Work", area: "work", xp: 40, history: [getISTDateString(0), getISTDateString(-1)] },
  { id: 2, label: "Workout", area: "fitness", xp: 20, history: [getISTDateString(-1)] },
  { id: 3, label: "Healthy Diet", area: "health", xp: 10, history: [] },
  { id: 4, label: "Reading", area: "self", xp: 10, history: [] },
];

const seedBadHabits = [
  { id: 1, label: "High Screen Time", area: "self", xp: 20, history: [] },
  { id: 2, label: "Junk Food", area: "health", xp: 20, history: [] },
];

const seedRewards = [
  { id: 1, label: "Watch a movie", cost: 100, claimed: [] },
  { id: 2, label: "Order takeout", cost: 150, claimed: [] },
  { id: 3, label: "Take a day off", cost: 250, claimed: [] },
];

function LifeAreaCard({ area, xp }) {
  return (
    <div className="area-card">
      <span className="area-dot" style={{ background: area.color }} />
      <span className="area-label">{area.label}</span>
      <span className="area-xp">{xp} XP</span>
    </div>
  );
}

function GoodHabitCard({ habit, onToggleToday, onDelete, onSave }) {
  const doneToday = (habit.history || []).includes(getISTDateString(0));
  const { streak, freezeUsed } = streakFreezeInfo(habit.history);
  const area = AREAS.find((a) => a.key === habit.area) || AREAS[0];

  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(habit.label);
  const [eArea, setEArea] = useState(habit.area);
  const [eXP, setEXP] = useState(habit.xp);

  const openEdit = () => {
    setELabel(habit.label);
    setEArea(habit.area);
    setEXP(habit.xp);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(habit.id, { label: text, area: eArea, xp: Math.max(1, +eXP || habit.xp) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="quest-habit-card good editing">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eLabel}
            onChange={(e) => setELabel(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            {AREAS.map((a) => (
              <button
                key={a.key}
                type="button"
                className={`area-chip ${eArea === a.key ? "active" : ""}`}
                style={{ "--ac": a.color }}
                onClick={() => setEArea(a.key)}
              >
                {a.label}
              </button>
            ))}
          </div>
          <div className="edit-row">
            <input type="number" min="1" step="5" className="duration-input" value={eXP} onChange={(e) => setEXP(e.target.value)} />
            <span className="edit-unit">XP</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quest-habit-card good">
      <span className="area-dot" style={{ background: area.color }} />
      <div className="quest-habit-main">
        <span className="quest-habit-label">{habit.label}</span>
        <span className="quest-habit-meta">
          +{habit.xp} XP · {area.label}{streak > 0 ? ` · 🔥${streak}${freezeUsed ? " ❄️" : ""}` : ""}
        </span>
      </div>
      <button
        className={`quest-check ${doneToday ? "done" : ""}`}
        onClick={() => onToggleToday(habit.id)}
        aria-label="Mark done today"
      >
        <svg viewBox="0 0 24 24" width="14" height="14">
          <polyline
            points="4,13 9,18 20,6"
            fill="none"
            stroke="#0B0D10"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 24, strokeDashoffset: doneToday ? 0 : 24, transition: "stroke-dashoffset 220ms ease" }}
          />
        </svg>
      </button>
      <button className="vault-card-edit" onClick={openEdit} aria-label="Edit habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="del-btn" onClick={() => onDelete(habit.id)} aria-label="Delete habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function BadHabitCard({ habit, onToggleToday, onDelete, onSave }) {
  const loggedToday = (habit.history || []).includes(getISTDateString(0));
  const area = AREAS.find((a) => a.key === habit.area) || AREAS[0];
  const wk = weeklyCount(habit.history);

  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(habit.label);
  const [eArea, setEArea] = useState(habit.area);
  const [eXP, setEXP] = useState(habit.xp);

  const openEdit = () => {
    setELabel(habit.label);
    setEArea(habit.area);
    setEXP(habit.xp);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(habit.id, { label: text, area: eArea, xp: Math.max(1, +eXP || habit.xp) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="quest-habit-card bad editing">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eLabel}
            onChange={(e) => setELabel(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            {AREAS.map((a) => (
              <button
                key={a.key}
                type="button"
                className={`area-chip ${eArea === a.key ? "active" : ""}`}
                style={{ "--ac": a.color }}
                onClick={() => setEArea(a.key)}
              >
                {a.label}
              </button>
            ))}
          </div>
          <div className="edit-row">
            <input type="number" min="1" step="5" className="duration-input" value={eXP} onChange={(e) => setEXP(e.target.value)} />
            <span className="edit-unit">XP</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quest-habit-card bad">
      <span className="area-dot" style={{ background: area.color }} />
      <div className="quest-habit-main">
        <span className="quest-habit-label">{habit.label}</span>
        <span className="quest-habit-meta">-{habit.xp} XP · {area.label} · {wk}x this week</span>
      </div>
      <button
        className={`quest-check bad-check ${loggedToday ? "done" : ""}`}
        onClick={() => onToggleToday(habit.id)}
        aria-label="Log slip today"
      >
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path d="M6 6l12 12M18 6L6 18" stroke="#0B0D10" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
      <button className="vault-card-edit" onClick={openEdit} aria-label="Edit habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="del-btn" onClick={() => onDelete(habit.id)} aria-label="Delete habit">
        <svg viewBox="0 0 24 24" width="13" height="13">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function RewardCard({ reward, canClaim, onClaim, onDelete, onSave }) {
  const [editing, setEditing] = useState(false);
  const [eLabel, setELabel] = useState(reward.label);
  const [eCost, setECost] = useState(reward.cost);

  const openEdit = () => {
    setELabel(reward.label);
    setECost(reward.cost);
    setEditing(true);
  };
  const saveEdit = () => {
    const text = eLabel.trim();
    if (!text) return;
    onSave(reward.id, { label: text, cost: Math.max(1, +eCost || reward.cost) });
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="reward-card">
        <div className="routine-edit">
          <input
            className="edit-label"
            value={eLabel}
            onChange={(e) => setELabel(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            autoFocus
          />
          <div className="edit-row">
            <input type="number" min="1" step="10" className="duration-input" value={eCost} onChange={(e) => setECost(e.target.value)} />
            <span className="edit-unit">XP cost</span>
          </div>
          <div className="edit-actions">
            <button className="edit-cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="edit-save" onClick={saveEdit}>save</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reward-card">
      <div className="reward-top">
        <span className="reward-label">{reward.label}</span>
        <div className="project-card-actions">
          <button className="vault-card-edit" onClick={openEdit} aria-label="Edit reward">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="vault-card-del" onClick={() => onDelete(reward.id)} aria-label="Delete reward">
            <svg viewBox="0 0 24 24" width="13" height="13">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <span className="reward-cost">{reward.cost} XP</span>
      <button className="reward-claim" disabled={!canClaim} onClick={() => onClaim(reward.id)}>
        {canClaim ? "claim reward" : "not enough XP"}
      </button>
      {reward.claimed?.length > 0 && <span className="reward-claimed-count">claimed {reward.claimed.length}x</span>}
    </div>
  );
}

function QuestView({ goodHabits, setGoodHabits, badHabits, setBadHabits, rewards, setRewards }) {
  const totalXP = useMemo(() => computeTotalXP(goodHabits, badHabits, rewards), [goodHabits, badHabits, rewards]);
  const { level, into, span } = levelFromXP(totalXP);
  const levelPct = Math.round((into / span) * 100);

  const toggleGood = (id) => {
    const today = getISTDateString(0);
    let willBeDone = false;
    setGoodHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const has = (h.history || []).includes(today);
        willBeDone = !has;
        const history = has ? h.history.filter((d) => d !== today) : [...(h.history || []), today];
        return { ...h, history: history.slice(-370) };
      })
    );
    willBeDone ? sound.success() : sound.click();
  };
  const toggleBad = (id) => {
    const today = getISTDateString(0);
    let willBeDone = false;
    setBadHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const has = (h.history || []).includes(today);
        willBeDone = !has;
        const history = has ? h.history.filter((d) => d !== today) : [...(h.history || []), today];
        return { ...h, history: history.slice(-370) };
      })
    );
    willBeDone ? sound.error() : sound.click();
  };
  const delGood = (id) => { setGoodHabits((prev) => prev.filter((h) => h.id !== id)); sound.delete(); };
  const delBad = (id) => { setBadHabits((prev) => prev.filter((h) => h.id !== id)); sound.delete(); };
  const saveGood = (id, patch) => setGoodHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  const saveBad = (id, patch) => setBadHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  const claimReward = (id) => {
    const today = getISTDateString(0);
    setRewards((prev) => prev.map((r) => (r.id === id ? { ...r, claimed: [...(r.claimed || []), today] } : r)));
    sound.success();
  };
  const delReward = (id) => { setRewards((prev) => prev.filter((r) => r.id !== id)); sound.delete(); };
  const saveReward = (id, patch) => setRewards((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const [ghLabel, setGhLabel] = useState("");
  const [ghArea, setGhArea] = useState("work");
  const [ghXP, setGhXP] = useState(20);
  const [bhLabel, setBhLabel] = useState("");
  const [bhArea, setBhArea] = useState("work");
  const [bhXP, setBhXP] = useState(20);
  const [rwLabel, setRwLabel] = useState("");
  const [rwCost, setRwCost] = useState(100);

  const addGood = () => {
    const t = ghLabel.trim();
    if (!t) return;
    setGoodHabits((prev) => [...prev, { id: makeId(), label: t, area: ghArea, xp: +ghXP || 10, history: [] }]);
    setGhLabel("");
    sound.click();
  };
  const addBad = () => {
    const t = bhLabel.trim();
    if (!t) return;
    setBadHabits((prev) => [...prev, { id: makeId(), label: t, area: bhArea, xp: +bhXP || 10, history: [] }]);
    setBhLabel("");
    sound.click();
  };
  const addReward = () => {
    const t = rwLabel.trim();
    if (!t) return;
    setRewards((prev) => [...prev, { id: makeId(), label: t, cost: +rwCost || 50, claimed: [] }]);
    setRwLabel("");
    sound.click();
  };

  const areaAxes = AREAS.map((a) => ({
    key: a.key,
    label: a.label,
    color: a.color,
    value: Math.max(0, computeAreaXP(a.key, goodHabits, badHabits)),
  }));
  const earnedXP = goodHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);
  const lostXP = badHabits.reduce((s, h) => s + h.xp * (h.history?.length || 0), 0);

  return (
    <div className="task-list vault-scroll">
      <div className="hero-card hero-card-viz">
        <div className="hero-viz-row">
          <RadialProgress
            pct={levelPct}
            size={112}
            stroke={9}
            color="#5EEAD4"
            label={`LVL ${level}`}
            sublabel={titleForLevel(level)}
          />
          <div className="hero-viz-stats">
            <span className="hero-xp-total"><AnimatedNumber value={totalXP} /> <small>XP</small></span>
            <span className="hero-xp-sub">{into}/{span} to next level</span>
            <div className="hero-xp-split">
              <span className="hero-xp-earned">+<AnimatedNumber value={earnedXP} /></span>
              <span className="hero-xp-lost">−<AnimatedNumber value={lostXP} /></span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header"><span>LIFE-AREAS</span></div>
      <div className="radar-card">
        <RadarChart axes={areaAxes} size={230} />
      </div>

      {(earnedXP > 0 || lostXP > 0) && (
        <>
          <div className="section-header"><span>XP SOURCE</span></div>
          <div className="donut-card">
            <DonutChart
              size={120}
              stroke={16}
              centerLabel={totalXP}
              centerSublabel="net XP"
              segments={[
                { key: "earned", label: "Earned", value: earnedXP, color: "#5EEAD4" },
                { key: "lost", label: "Lost", value: lostXP, color: "#F0576B" },
              ]}
            />
            <div className="donut-legend">
              <div className="donut-legend-row">
                <span className="donut-legend-dot" style={{ background: "#5EEAD4" }} />
                <span>Earned from good habits</span>
                <span className="donut-legend-val"><AnimatedNumber value={earnedXP} /></span>
              </div>
              <div className="donut-legend-row">
                <span className="donut-legend-dot" style={{ background: "#F0576B" }} />
                <span>Lost to bad habits</span>
                <span className="donut-legend-val"><AnimatedNumber value={lostXP} /></span>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="section-header"><span>GOOD-HABITS</span></div>
      <div className="quest-habit-list">
        {goodHabits.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no good habits yet</div>
          </div>
        ) : (
          goodHabits.map((h) => <GoodHabitCard key={h.id} habit={h} onToggleToday={toggleGood} onDelete={delGood} onSave={saveGood} />)
        )}
      </div>
      <div className="composer">
        <input
          type="text"
          placeholder="new good habit..."
          value={ghLabel}
          onChange={(e) => setGhLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addGood()}
        />
        <button className="add-btn" onClick={addGood} aria-label="Add good habit">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {AREAS.map((a) => (
          <button key={a.key} className={ghArea === a.key ? "active" : ""} onClick={() => setGhArea(a.key)}>
            {a.label}
          </button>
        ))}
        <input type="number" min="5" step="5" className="duration-custom" value={ghXP} onChange={(e) => setGhXP(+e.target.value || 5)} />
      </div>

      <div className="section-header"><span>BAD-HABITS</span></div>
      <div className="quest-habit-list">
        {badHabits.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no bad habits tracked</div>
          </div>
        ) : (
          badHabits.map((h) => <BadHabitCard key={h.id} habit={h} onToggleToday={toggleBad} onDelete={delBad} onSave={saveBad} />)
        )}
      </div>
      <div className="composer">
        <input
          type="text"
          placeholder="new bad habit..."
          value={bhLabel}
          onChange={(e) => setBhLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addBad()}
        />
        <button className="add-btn" onClick={addBad} aria-label="Add bad habit">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="duration-chips">
        {AREAS.map((a) => (
          <button key={a.key} className={bhArea === a.key ? "active" : ""} onClick={() => setBhArea(a.key)}>
            {a.label}
          </button>
        ))}
        <input type="number" min="5" step="5" className="duration-custom" value={bhXP} onChange={(e) => setBhXP(+e.target.value || 5)} />
      </div>

      <div className="section-header"><span>REWARD-CENTER</span></div>
      <div className="vault-grid">
        {rewards.length === 0 ? (
          <div className="empty-state">
            <div className="glyph">{"{ }"}</div>
            <div className="msg">no rewards set up</div>
          </div>
        ) : (
          rewards.map((r) => (
            <RewardCard key={r.id} reward={r} canClaim={totalXP >= r.cost} onClaim={claimReward} onDelete={delReward} onSave={saveReward} />
          ))
        )}
      </div>
      <div className="composer">
        <input
          type="text"
          placeholder="new reward..."
          value={rwLabel}
          onChange={(e) => setRwLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addReward()}
        />
        <input type="number" min="10" step="10" className="duration-custom" value={rwCost} onChange={(e) => setRwCost(+e.target.value || 50)} />
        <button className="add-btn" onClick={addReward} aria-label="Add reward">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const seedTasks = [
  { id: 1, text: "ship rice theme v2 captions", done: false, priority: "high", createdAt: Date.now() - 8000000 },
  { id: 2, text: "review conky widget layout", done: false, priority: "mid", createdAt: Date.now() - 5000000 },
  { id: 3, text: "reply to anilist thread", done: true, priority: "low", createdAt: Date.now() - 3000000 },
];

function useNow(intervalMs = 1000 * 30) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return now;
}

function timeAgo(ts, now) {
  const s = Math.floor((now - ts) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

function Checkbox({ checked, onChange, color }) {
  return (
    <button
      onClick={onChange}
      aria-checked={checked}
      role="checkbox"
      className="checkbox-btn"
      style={{
        "--c": color,
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14">
        <polyline
          points="4,13 9,18 20,6"
          fill="none"
          stroke="#0B0D10"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: checked ? 0 : 24,
            transition: "stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)",
          }}
        />
      </svg>
    </button>
  );
}

function TaskRow({ task, now, onToggle, onDelete, index }) {
  const [leaving, setLeaving] = useState(false);
  const prio = PRIORITIES.find((p) => p.key === task.priority) || PRIORITIES[0];

  const handleDelete = () => {
    setLeaving(true);
    setTimeout(() => onDelete(task.id), 220);
  };

  return (
    <div
      className={`task-row ${leaving ? "leaving" : ""}`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <Checkbox checked={task.done} onChange={() => onToggle(task.id)} color={prio.color} />
      <div className="task-main">
        <span className={`task-text ${task.done ? "done" : ""}`}>{task.text}</span>
        <span className="task-meta">
          <span className="prio-dot" style={{ background: prio.color }} />
          <span className="prio-label">{prio.label}</span>
          <span className="dot-sep">·</span>
          <span>{timeAgo(task.createdAt, now)}</span>
        </span>
      </div>
      <button className="del-btn" onClick={handleDelete} aria-label="Delete task">
        <svg viewBox="0 0 24 24" width="15" height="15">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

const STORAGE_KEY_TASKS = "tasksh.tasks.v1";
const STORAGE_KEY_ROUTINES = "tasksh.routines.v1";
const STORAGE_KEY_VAULT_HABITS = "tasksh.vaulthabits.v1";
const STORAGE_KEY_PROJECTS = "tasksh.projects.v1";
const STORAGE_KEY_GOOD_HABITS = "tasksh.goodhabits.v1";
const STORAGE_KEY_BAD_HABITS = "tasksh.badhabits.v1";
const STORAGE_KEY_REWARDS = "tasksh.rewards.v1";

function loadStored(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

// pushes the global id seed forward so newly-created items never collide
// with ids that were just imported from a backup file
function ensureIdSeedAbove(value) {
  if (typeof value === "number" && Number.isFinite(value) && value > __idSeed) {
    __idSeed = value;
  }
}

// collects every numeric id found in an exported data payload (including
// nested project task ids), so the id seed can be moved past all of them
function collectMaxId(data) {
  let max = 0;
  const consider = (v) => {
    if (typeof v === "number" && Number.isFinite(v) && v > max) max = v;
  };
  (data.tasks || []).forEach((t) => consider(t?.id));
  (data.routines || []).forEach((r) => consider(r?.id));
  (data.vaultHabits || []).forEach((h) => consider(h?.id));
  (data.goodHabits || []).forEach((h) => consider(h?.id));
  (data.badHabits || []).forEach((h) => consider(h?.id));
  (data.rewards || []).forEach((r) => consider(r?.id));
  (data.projects || []).forEach((p) => {
    consider(p?.id);
    (p?.tasks || []).forEach((t) => consider(t?.id));
  });
  return max;
}

// combined "today" dashboard: next/current routine, top open tasks, and
// any rewards currently affordable -- so none of that requires switching
// tabs to check
function TodayView({ routines, setRoutines, tasks, setTasks, vaultHabits, goodHabits, rewards, setRewards, totalXP, setTab }) {
  const ist = useISTClock();
  const nowMinutes = ist.hour * 60 + ist.minute;
  const { sorted, currentId, nextId } = useRoutineStatus(routines, nowMinutes);
  const current = sorted.find((r) => r.id === currentId);
  const next = sorted.find((r) => r.id === nextId);
  const todayStr = getISTDateString(0);

  const toggleRoutineToday = (id) => {
    let willBeDone = false;
    setRoutines((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const has = (r.history || []).includes(todayStr);
        willBeDone = !has;
        const history = has ? r.history.filter((d) => d !== todayStr) : [...(r.history || []), todayStr];
        return { ...r, history: history.slice(-60) };
      })
    );
    willBeDone ? sound.success() : sound.click();
  };

  const openTasks = useMemo(() => {
    const order = { high: 0, mid: 1, low: 2 };
    return [...tasks].filter((t) => !t.done).sort((a, b) => order[a.priority] - order[b.priority]);
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    sound.success();
  };

  const affordable = useMemo(() => rewards.filter((r) => totalXP >= r.cost), [rewards, totalXP]);

  const claimReward = (id) => {
    setRewards((prev) =>
      prev.map((r) => (r.id === id ? { ...r, claimed: [...(r.claimed || []), todayStr] } : r))
    );
    sound.success();
  };

  // aggregate every completion across routines + vault habits + good habits
  // into a per-day count, for a GitHub-style activity heatmap
  const activityCounts = useMemo(() => {
    const counts = {};
    const add = (history) => {
      (history || []).forEach((d) => {
        counts[d] = (counts[d] || 0) + 1;
      });
    };
    routines.forEach((r) => add(r.history));
    vaultHabits.forEach((h) => add(h.history));
    goodHabits.forEach((h) => add(h.history));
    return counts;
  }, [routines, vaultHabits, goodHabits]);

  const spotlight = current || next;
  const spotlightIsNow = !!current;
  const nextDoneToday = spotlight ? (spotlight.history || []).includes(todayStr) : false;

  return (
    <div className="task-list today-view">
      <div className="filters today-section-header">
        <span>{spotlightIsNow ? "HAPPENING NOW" : "NEXT UP"}</span>
      </div>
      {spotlight ? (
        <div className="today-card">
          <div className="today-card-row">
            <span className="today-card-time">{minutesToLabel(timeToMinutes(spotlight.time))}</span>
            <span className="today-card-label">{spotlight.label}</span>
          </div>
          <div className="today-card-sub">
            {spotlightIsNow
              ? `in progress · ${formatDuration(spotlight.duration)}`
              : `in ${Math.max(0, timeToMinutes(spotlight.time) - nowMinutes)}m · ${formatDuration(spotlight.duration)}`}
          </div>
          <button
            className={`today-mark-btn ${nextDoneToday ? "done" : ""}`}
            onClick={() => toggleRoutineToday(spotlight.id)}
          >
            {nextDoneToday ? "✓ completed today" : "mark complete"}
          </button>
        </div>
      ) : (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">no routines set up yet</div>
        </div>
      )}

      <div className="filters today-section-header">
        <span>ACTIVITY</span>
      </div>
      <CalendarHeatmap counts={activityCounts} weeksBack={12} />

      <div className="filters today-section-header">
        <span>OPEN TASKS</span>
        {openTasks.length > 0 && (
          <button className="today-view-all" onClick={() => setTab("tasks")}>
            view all in tasks →
          </button>
        )}
      </div>
      {openTasks.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">nothing pending — nice</div>
        </div>
      ) : (
        <div className="today-list">
          {openTasks.slice(0, 5).map((t, i) => (
            <div key={t.id} className="today-task-row" style={{ animationDelay: `${i * 35}ms` }}>
              <button
                className="today-task-check"
                onClick={() => toggleTask(t.id)}
                aria-label="Complete task"
              />
              <span className="today-task-text">{t.text}</span>
              <span className={`today-prio-dot ${t.priority}`} />
            </div>
          ))}
          {openTasks.length > 5 && (
            <button className="today-more" onClick={() => setTab("tasks")}>
              +{openTasks.length - 5} more
            </button>
          )}
        </div>
      )}

      <div className="filters today-section-header">
        <span>REWARDS YOU CAN AFFORD</span>
        <span className="today-xp-total"><AnimatedNumber value={totalXP} /> XP</span>
      </div>
      {affordable.length === 0 ? (
        <div className="empty-state">
          <div className="glyph">{"{ }"}</div>
          <div className="msg">keep earning XP — nothing unlocked yet</div>
        </div>
      ) : (
        <div className="today-list">
          {affordable.map((r, i) => (
            <div key={r.id} className="today-task-row" style={{ animationDelay: `${i * 35}ms` }}>
              <span className="today-task-text">{r.label}</span>
              <span className="today-reward-cost">{r.cost} XP</span>
              <button className="today-claim-btn" onClick={() => claimReward(r.id)}>
                claim
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TodoApp() {
  const [tab, setTab] = useState("today");
  const [soundOn, toggleSound] = useSoundToggle();
  const changeTab = (t) => {
    if (t !== tab) sound.whoosh();
    setTab(t);
  };
  const [tasks, setTasks] = useState(() => loadStored(STORAGE_KEY_TASKS, seedTasks));
  const [routines, setRoutines] = useState(() => loadStored(STORAGE_KEY_ROUTINES, seedRoutines));
  const [vaultHabits, setVaultHabits] = useState(() => loadStored(STORAGE_KEY_VAULT_HABITS, seedVaultHabits));
  const [projects, setProjects] = useState(() => loadStored(STORAGE_KEY_PROJECTS, seedProjects));
  const [goodHabits, setGoodHabits] = useState(() => loadStored(STORAGE_KEY_GOOD_HABITS, seedGoodHabits));
  const [badHabits, setBadHabits] = useState(() => loadStored(STORAGE_KEY_BAD_HABITS, seedBadHabits));
  const [rewards, setRewards] = useState(() => loadStored(STORAGE_KEY_REWARDS, seedRewards));
  const totalXP = useMemo(
    () => computeTotalXP(goodHabits, badHabits, rewards),
    [goodHabits, badHabits, rewards]
  );
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("mid");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);
  const importInputRef = useRef(null);
  const [dataMsg, setDataMsg] = useState(null);
  const now = useNow();

  const showDataMsg = (type, text) => {
    setDataMsg({ type, text });
  };

  useEffect(() => {
    if (!dataMsg) return;
    const t = setTimeout(() => setDataMsg(null), 3200);
    return () => clearTimeout(t);
  }, [dataMsg]);

  const exportData = () => {
    try {
      const payload = {
        app: "tasks.sh",
        version: 1,
        exportedAt: new Date().toISOString(),
        data: { tasks, routines, vaultHabits, projects, goodHabits, badHabits, rewards },
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const stamp = getISTDateString(0);
      const a = document.createElement("a");
      a.href = url;
      a.download = `tasks-sh-backup-${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showDataMsg("ok", "backup exported");
    } catch {
      showDataMsg("err", "export failed");
    }
  };

  const triggerImport = () => importInputRef.current?.click();

  const handleImportFile = (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = ""; // so re-selecting the same file later still fires onChange
    if (!file) return;

    const reader = new FileReader();
    reader.onerror = () => showDataMsg("err", "couldn't read that file");
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const data = parsed && typeof parsed === "object" && parsed.data ? parsed.data : parsed;
        if (!data || typeof data !== "object") throw new Error("bad shape");

        const setters = {
          tasks: setTasks,
          routines: setRoutines,
          vaultHabits: setVaultHabits,
          projects: setProjects,
          goodHabits: setGoodHabits,
          badHabits: setBadHabits,
          rewards: setRewards,
        };

        let applied = 0;
        for (const key of Object.keys(setters)) {
          if (Array.isArray(data[key])) {
            setters[key](data[key]);
            applied++;
          }
        }

        if (applied === 0) {
          showDataMsg("err", "no recognizable data in that file");
          return;
        }

        ensureIdSeedAbove(collectMaxId(data));
        showDataMsg("ok", `imported ${applied} data set${applied === 1 ? "" : "s"}`);
      } catch {
        showDataMsg("err", "couldn't read that file — is it a tasks.sh backup?");
      }
    };
    reader.readAsText(file);
  };

  // in-app banner: fires when the "current" routine changes, so it's
  // visible no matter which tab you're on
  const ist = useISTClock();
  const nowMinutes = ist.hour * 60 + ist.minute;
  const { currentId: liveCurrentId, sorted: liveSorted } = useRoutineStatus(routines, nowMinutes);
  const [banner, setBanner] = useState(null);
  const prevCurrentIdRef = useRef(undefined);

  useEffect(() => {
    // skip the very first render so opening the app doesn't fire a banner
    if (prevCurrentIdRef.current === undefined) {
      prevCurrentIdRef.current = liveCurrentId;
      return;
    }
    if (liveCurrentId !== prevCurrentIdRef.current) {
      const routine = liveSorted.find((r) => r.id === liveCurrentId);
      if (routine) {
        setBanner({ id: liveCurrentId, label: routine.label, time: routine.time });
      }
      prevCurrentIdRef.current = liveCurrentId;
    }
  }, [liveCurrentId, liveSorted]);

  useEffect(() => {
    if (!banner) return;
    const t = setTimeout(() => setBanner(null), 6000);
    return () => clearTimeout(t);
  }, [banner]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks)); } catch {}
  }, [tasks]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_ROUTINES, JSON.stringify(routines)); } catch {}
  }, [routines]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_VAULT_HABITS, JSON.stringify(vaultHabits)); } catch {}
  }, [vaultHabits]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects)); } catch {}
  }, [projects]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_GOOD_HABITS, JSON.stringify(goodHabits)); } catch {}
  }, [goodHabits]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_BAD_HABITS, JSON.stringify(badHabits)); } catch {}
  }, [badHabits]);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY_REWARDS, JSON.stringify(rewards)); } catch {}
  }, [rewards]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((t) => t.done).length;
    const pending = total - done;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    return { total, done, pending, pct };
  }, [tasks]);

  const prioBreakdown = useMemo(() => {
    const open = tasks.filter((t) => !t.done);
    return PRIORITIES.map((p) => ({
      key: p.key,
      label: p.label,
      color: p.color,
      value: open.filter((t) => t.priority === p.key).length,
    }));
  }, [tasks]);

  const visible = useMemo(() => {
    let list = tasks;
    if (filter === "active") list = list.filter((t) => !t.done);
    if (filter === "done") list = list.filter((t) => t.done);
    return [...list].sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      const order = { high: 0, mid: 1, low: 2 };
      return order[a.priority] - order[b.priority];
    });
  }, [tasks, filter]);

  const addTask = () => {
    const text = input.trim();
    if (!text) return;
    setTasks((prev) => [
      ...prev,
      { id: makeId(), text, done: false, priority, createdAt: Date.now() },
    ]);
    setInput("");
    inputRef.current?.focus();
    sound.click();
  };

  const toggleTask = (id) => {
    let willBeDone = false;
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        willBeDone = !t.done;
        return { ...t, done: !t.done };
      })
    );
    willBeDone ? sound.success() : sound.click();
  };

  const deleteTask = (id) => { setTasks((prev) => prev.filter((t) => t.id !== id)); sound.delete(); };

  const clearDone = () => { setTasks((prev) => prev.filter((t) => !t.done)); sound.whoosh(); };

  return (
    <div className="app-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        html, body, #root { height: 100%; }

        .app-root {
          height: 100vh;
          height: 100dvh;
          width: 100vw;
          background:
            radial-gradient(circle at 15% 0%, rgba(94,234,212,0.06), transparent 45%),
            radial-gradient(circle at 85% 100%, rgba(245,166,35,0.05), transparent 45%),
            #0B0D10;
          font-family: 'Inter', sans-serif;
          color: #E7EAEE;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 4vw;
          overflow: hidden;
        }

        .panel {
          position: relative;
          width: 100%;
          max-width: 640px;
          height: 100%;
          max-height: 780px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
          animation: panelIn 480ms cubic-bezier(.16,1,.3,1);
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 640px) {
          .app-root { padding: 0; }
          .panel {
            max-width: 100%;
            max-height: 100%;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
            border: none;
          }
        }

        @media (max-width: 420px) {
          .composer { flex-wrap: wrap; }
          .composer input[type="text"] { width: 100%; flex-basis: 100%; }
          .prio-select { flex: 1; justify-content: space-between; }
          .add-btn { flex: 0 0 38px; }
          .stats-row { flex-wrap: wrap; gap: 10px 16px; }
        }

        @keyframes panelIn {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-bottom: 1px solid #1E2228;
        }

        .titlebar-left { display: flex; align-items: center; gap: 8px; }

        .dots { display: flex; gap: 6px; }
        .dot { width: 9px; height: 9px; border-radius: 50%; }
        .dot.red { background: #F0576B; }
        .dot.amber { background: #F5A623; }
        .dot.green { background: #5EEAD4; }

        .titlebar-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #6B7280;
          text-transform: uppercase;
        }

        .clock {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #4B5563;
        }

        .titlebar-right { display: flex; align-items: center; gap: 10px; }

        .titlebar-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          padding: 0;
          border: 1px solid #23272E;
          border-radius: 6px;
          background: #14171C;
          color: #6B7280;
          cursor: pointer;
          transition: color 140ms ease, border-color 140ms ease;
        }

        .titlebar-icon-btn:hover { color: #5EEAD4; border-color: #5EEAD4; }

        .data-toast {
          margin: 10px 18px 0;
          padding: 8px 12px;
          border-radius: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          text-align: center;
          border: 1px solid #23272E;
          background: #14171C;
          color: #E7EAEE;
          animation: rowIn 200ms ease backwards;
        }

        .data-toast.ok { border-color: #5EEAD4; color: #5EEAD4; }
        .data-toast.err { border-color: #F0576B; color: #F0576B; }

        .tabs {
          display: flex;
          flex-shrink: 0;
          min-height: 42px;
          gap: 2px;
          padding: 10px 14px 0;
          border-bottom: 1px solid #1E2228;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tabs::-webkit-scrollbar { display: none; }

        .tabs button {
          border: none;
          background: transparent;
          color: #7C8591;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 9px 14px;
          white-space: nowrap;
          flex-shrink: 0;
          min-height: 30px;
          cursor: pointer;
          position: relative;
          transition: color 150ms ease;
        }

        .tabs button.active { color: #E7EAEE; }

        .tabs button.active::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: -1px;
          height: 2px;
          background: #5EEAD4;
          box-shadow: 0 0 8px rgba(94,234,212,0.6);
          animation: tabIn 220ms ease;
        }

        @keyframes tabIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .hero-card {
          margin: 16px 18px;
          padding: 16px 18px;
          background: linear-gradient(160deg, #171B21, #14171C);
          border: 1px solid #23272E;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-clock-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }

        .hero-clock {
          font-family: 'JetBrains Mono', monospace;
          font-size: 30px;
          font-weight: 700;
          color: #E7EAEE;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.01em;
        }

        .hero-sec { font-size: 16px; color: #5EEAD4; }
        .hero-ampm {
          font-size: 13px;
          color: #6B7280;
          margin-left: 6px;
        }

        .hero-tz {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #5EEAD4;
          letter-spacing: 0.06em;
          background: rgba(94,234,212,0.08);
          border: 1px solid rgba(94,234,212,0.25);
          border-radius: 5px;
          padding: 4px 7px;
        }

        .hero-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #6B7280;
          margin-top: 2px;
        }

        .hero-divider {
          height: 1px;
          background: #1E2228;
          margin: 12px 0;
        }

        .hero-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
          letter-spacing: 0.08em;
        }

        .hero-current-name {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 17px;
          font-weight: 600;
          color: #E7EAEE;
          margin-top: 5px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #5EEAD4;
          box-shadow: 0 0 0 0 rgba(94,234,212,0.6);
          animation: pulse 1.8s ease-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(94,234,212,0.55); }
          70% { box-shadow: 0 0 0 9px rgba(94,234,212,0); }
          100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
        }

        .hero-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #6B7280;
          margin-top: 6px;
        }

        .composer.shake {
          animation: shake 380ms ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(5px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(3px); }
        }

        .time-input {
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 8px;
          padding: 9px 10px;
          color: #E7EAEE;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          outline: none;
          color-scheme: dark;
          flex-shrink: 0;
          width: 110px;
          transition: border-color 160ms ease;
        }

        .time-input:focus { border-color: #5EEAD4; }

        .routine-list { padding-top: 2px; overflow-x: hidden; }

        .routine-row-wrap {
          position: relative;
          animation: rowIn 320ms cubic-bezier(.16,1,.3,1) backwards;
        }

        .routine-row-wrap.removing {
          animation: rowOut 220ms ease forwards;
        }

        .routine-delete-bg {
          position: absolute;
          inset: 0;
          background: #F0576B;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 18px;
        }

        .routine-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 2px 8px;
          background: #14171C;
          touch-action: pan-y;
          user-select: none;
        }

        .routine-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 12px;
          flex-shrink: 0;
        }

        .routine-node {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #2A2F37;
          border: 2px solid #2A2F37;
          margin-top: 6px;
          flex-shrink: 0;
          transition: all 200ms ease;
        }

        .routine-node.quest-done {
          background: #F5A623;
          border-color: #F5A623;
          box-shadow: 0 0 8px rgba(245,166,35,0.6);
        }

        .routine-connector {
          width: 1.5px;
          flex: 1;
          background: #1E2228;
          margin-top: 2px;
        }

        .routine-row.current .routine-node {
          background: #5EEAD4;
          border-color: #5EEAD4;
          box-shadow: 0 0 10px rgba(94,234,212,0.7);
        }

        .routine-row.next .routine-node {
          border-color: #F5A623;
        }

        .routine-main {
          flex: 1;
          padding-bottom: 20px;
          min-width: 0;
        }

        .routine-top {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .routine-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #6B7280;
        }

        .live-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.06em;
          color: #0B0D10;
          background: #5EEAD4;
          padding: 1.5px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .streak-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #F5A623;
        }

        .freeze-tag {
          margin-left: 2px;
          font-size: 10px;
        }

        .routine-label {
          display: block;
          font-size: 13.5px;
          color: #E7EAEE;
          margin-top: 3px;
        }

        .routine-row.idle .routine-label,
        .routine-row.idle .routine-time { color: #4B5563; }

        .routine-span {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #4B5563;
          margin-top: 3px;
        }

        .week-dots {
          display: flex;
          gap: 3px;
          margin-top: 6px;
        }

        .week-dot {
          width: 6px;
          height: 6px;
          border-radius: 2px;
          background: #1E2228;
        }

        .week-dot.filled { background: #F5A623; }

        .quest-check {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 1.5px solid #2A2F37;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
          transition: background 200ms ease, border-color 200ms ease;
        }

        .quest-check.done {
          background: #F5A623;
          border-color: #F5A623;
        }

        /* inline edit form */
        .routine-edit {
          flex: 1;
          padding-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .edit-label {
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 7px;
          padding: 8px 10px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          outline: none;
        }

        .edit-label:focus { border-color: #5EEAD4; }

        .edit-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .duration-input {
          width: 64px;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 7px;
          padding: 8px 8px;
          color: #E7EAEE;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          outline: none;
        }

        .edit-unit {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .edit-actions button {
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          cursor: pointer;
        }

        .edit-cancel {
          background: transparent;
          color: #6B7280;
        }

        .edit-save {
          background: #5EEAD4;
          color: #0B0D10;
          font-weight: 700;
        }

        /* quest stats + weekly chart */
        .quest-stats {
          display: flex;
          align-items: center;
          gap: 0;
          margin: 0 18px 14px;
          padding: 14px 16px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
        }

        .quest-stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          position: relative;
        }

        .quest-stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 2px;
          bottom: 2px;
          width: 1px;
          background: #1E2228;
        }

        .quest-stat-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 17px;
          font-weight: 700;
          color: #E7EAEE;
        }

        .quest-stat-value.amber { color: #F5A623; }

        .quest-stat-of {
          font-size: 12px;
          color: #4B5563;
          font-weight: 500;
        }

        .quest-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #6B7280;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .quest-stat-ring {
          position: relative;
        }

        .quest-stat-pct {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          color: #5EEAD4;
        }

        .week-chart {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          margin: 0 18px 16px;
          padding: 12px 14px 8px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          height: 84px;
        }

        .week-bar-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          gap: 5px;
        }

        .week-bar-track {
          flex: 1;
          width: 100%;
          display: flex;
          align-items: flex-end;
          background: #1E2228;
          border-radius: 3px;
          overflow: hidden;
        }

        .week-bar-fill {
          width: 100%;
          background: linear-gradient(180deg, #5EEAD4, #3FBFA8);
          border-radius: 3px;
          transition: height 400ms cubic-bezier(.65,0,.35,1);
        }

        .week-bar-fill.today {
          background: linear-gradient(180deg, #F5A623, #D98A15);
        }

        .week-bar-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #4B5563;
        }

        /* ---- hero radial + xp split ---- */
        .hero-card-viz { gap: 0; }

        .hero-viz-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .hero-viz-stats {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .hero-xp-total {
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          font-weight: 700;
          color: #E7EAEE;
          font-variant-numeric: tabular-nums;
        }

        .hero-xp-total small { font-size: 12px; color: #6B7280; font-weight: 500; }

        .hero-xp-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #6B7280;
        }

        .hero-xp-split { display: flex; gap: 12px; margin-top: 6px; }

        .hero-xp-earned, .hero-xp-lost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .hero-xp-earned { color: #5EEAD4; background: rgba(94,234,212,0.08); }
        .hero-xp-lost { color: #F0576B; background: rgba(240,87,107,0.08); }

        .radial-progress-wrap { position: relative; flex-shrink: 0; }

        .radial-progress-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .radial-progress-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 15px;
          font-weight: 700;
          color: #E7EAEE;
        }

        .radial-progress-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: #6B7280;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ---- radar chart ---- */
        .radar-card {
          margin: 0 18px 16px;
          padding: 10px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          animation: rowIn 260ms ease backwards;
        }

        .radar-ring { fill: none; stroke: #23272E; stroke-width: 1; }
        .radar-spoke { stroke: #1E2228; stroke-width: 1; }
        .radar-fill { fill: rgba(94,234,212,0.16); stroke: #5EEAD4; stroke-width: 1.5; }
        .radar-label {
          fill: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
        }

        /* ---- donut chart ---- */
        .donut-card {
          margin: 0 18px 16px;
          padding: 14px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 18px;
          animation: rowIn 300ms ease backwards;
        }

        .donut-wrap { position: relative; flex-shrink: 0; }

        .donut-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .donut-center-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 17px;
          font-weight: 700;
          color: #E7EAEE;
        }

        .donut-center-sublabel {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .donut-legend { display: flex; flex-direction: column; gap: 8px; min-width: 0; flex: 1; }

        .donut-legend-row {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          color: #9CA3AF;
        }

        .donut-legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        .donut-legend-val {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #E7EAEE;
        }

        /* ---- calendar heatmap ---- */
        .heatmap-wrap {
          margin: 0 18px 16px;
          padding: 14px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          animation: rowIn 260ms ease backwards;
          overflow-x: auto;
        }

        .heatmap-grid { display: flex; gap: 3px; }

        .heatmap-col { display: flex; flex-direction: column; gap: 3px; }

        .heatmap-cell {
          width: 10px;
          height: 10px;
          border-radius: 2.5px;
          animation: heatmapIn 260ms ease backwards;
        }

        .heatmap-cell.today { box-shadow: 0 0 0 1.5px #5EEAD4; }

        @keyframes heatmapIn {
          from { opacity: 0; transform: scale(0.4); }
          to { opacity: 1; transform: scale(1); }
        }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #6B7280;
        }

        .heatmap-legend-cell { width: 9px; height: 9px; border-radius: 2px; }

        /* ---- day timeline ---- */
        .timeline-wrap {
          margin: 0 18px 16px;
          padding: 20px 10px 14px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          animation: rowIn 220ms ease backwards;
        }

        .timeline-track {
          position: relative;
          height: 46px;
          background: #191D23;
          border-radius: 8px;
          overflow: hidden;
        }

        .timeline-night {
          position: absolute;
          top: 0;
          bottom: 0;
          background: rgba(0,0,0,0.28);
        }

        .timeline-gridline {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.05);
        }

        .timeline-elapsed {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          background: rgba(94,234,212,0.05);
          transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .timeline-hour {
          position: absolute;
          top: -16px;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: #4B5563;
        }

        .timeline-block {
          position: absolute;
          top: 7px;
          height: 32px;
          border-radius: 5px;
          transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1);
          min-width: 3px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .timeline-block-label {
          padding: 0 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 600;
          color: #0B0D10;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .timeline-block.done .timeline-block-label { color: #9CA3AF; }

        .timeline-now {
          position: absolute;
          top: -3px;
          bottom: -3px;
          width: 2px;
          background: #F5A623;
          box-shadow: 0 0 6px rgba(245,166,35,0.6);
          z-index: 2;
        }

        .timeline-now-tag {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          color: #F5A623;
          white-space: nowrap;
        }

        .timeline-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 10px;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid #1E2228;
        }

        .timeline-legend-chip {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: #9CA3AF;
        }

        .timeline-legend-chip.done { color: #565D68; }

        .timeline-legend-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ---- shared micro-interactions ---- */
        button, .vault-check, .today-task-check, .add-btn {
          transition: transform 120ms ease, opacity 120ms ease;
        }
        button:active, .vault-check:active, .today-task-check:active, .add-btn:active {
          transform: scale(0.92);
        }

        .task-list { animation: viewFadeIn 220ms ease; }

        @keyframes viewFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tab-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          animation: tabIn 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes tabIn {
          from { opacity: 0; transform: translateY(10px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .tab-content { animation: none !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .radar-fill, .timeline-block, .heatmap-cell, .task-list,
          .radial-progress-wrap circle, .donut-wrap circle {
            animation: none !important;
            transition: none !important;
          }
        }

        .duration-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 0 18px 14px;
        }

        .duration-chips button {
          border: 1px solid #23272E;
          background: #0F1215;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .duration-chips button.active {
          background: rgba(94,234,212,0.12);
          border-color: #5EEAD4;
          color: #5EEAD4;
        }

        .duration-custom {
          width: 58px;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 6px;
          padding: 5px 8px;
          color: #E7EAEE;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          outline: none;
        }

        .stats-bar {
          padding: 18px 18px 14px;
          border-bottom: 1px solid #1E2228;
        }

        .stats-bar-viz {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stats-row-viz {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #9CA3AF;
        }

        .stats-row-viz b { color: #E7EAEE; font-weight: 700; }

        .stats-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 10px;
        }

        .stats-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #6B7280;
          letter-spacing: 0.04em;
        }

        .stats-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          color: #5EEAD4;
          font-variant-numeric: tabular-nums;
        }

        .progress-track {
          height: 6px;
          background: #1E2228;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #5EEAD4, #7BF0DD);
          border-radius: 3px;
          transition: width 420ms cubic-bezier(.65,0,.35,1);
          box-shadow: 0 0 12px rgba(94,234,212,0.5);
        }

        .stats-row {
          display: flex;
          gap: 16px;
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #6B7280;
        }

        .stats-row b { color: #E7EAEE; font-weight: 600; }

        .composer {
          padding: 16px 18px;
          display: flex;
          gap: 8px;
          border-bottom: 1px solid #1E2228;
        }

        .composer input[type="text"] {
          flex: 1;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 8px;
          padding: 10px 12px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .composer input[type="text"]::placeholder { color: #4B5563; }

        .composer input[type="text"]:focus {
          border-color: #5EEAD4;
          box-shadow: 0 0 0 3px rgba(94,234,212,0.12);
        }

        .prio-select {
          display: flex;
          gap: 4px;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 8px;
          padding: 3px;
        }

        .prio-select button {
          border: none;
          background: transparent;
          padding: 7px 9px;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #6B7280;
          cursor: pointer;
          transition: all 150ms ease;
          text-transform: uppercase;
        }

        .prio-select button.active {
          background: #1E2228;
          color: var(--pc);
        }

        .add-btn {
          background: #5EEAD4;
          border: none;
          border-radius: 8px;
          width: 38px;
          color: #0B0D10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 120ms ease, background 150ms ease;
          flex-shrink: 0;
        }

        .add-btn:hover { background: #7BF0DD; }
        .add-btn:active { transform: scale(0.92); }

        .filters {
          display: flex;
          gap: 4px;
          padding: 12px 18px;
        }

        .filters button {
          border: none;
          background: transparent;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .filters button.active {
          background: #1E2228;
          color: #E7EAEE;
        }

        .filters .spacer { flex: 1; }

        .clear-btn {
          border: none;
          background: transparent;
          color: #4B5563;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          cursor: pointer;
          transition: color 150ms ease;
        }
        .clear-btn:hover { color: #F0576B; }

        .task-list {
          padding: 6px 10px 16px;
          flex: 1;
          min-height: 0;
          overflow-y: auto;
        }

        .task-row {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 8px;
          border-radius: 8px;
          animation: rowIn 320ms cubic-bezier(.16,1,.3,1) backwards;
          transition: background 150ms ease;
        }

        .task-row:hover { background: #191D23; }

        .task-row.leaving {
          animation: rowOut 220ms ease forwards;
        }

        @keyframes rowIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes rowOut {
          to { opacity: 0; transform: translateX(12px) scale(0.97); max-height: 0; padding: 0 8px; }
        }

        .checkbox-btn {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 1.5px solid var(--c);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 200ms ease;
        }

        .checkbox-btn[aria-checked="true"] {
          background: var(--c);
        }

        .task-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .task-text {
          font-size: 13.5px;
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: color 200ms ease;
        }

        .task-text.done {
          color: #4B5563;
          text-decoration: line-through;
        }

        .task-meta {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #4B5563;
        }

        .prio-dot { width: 5px; height: 5px; border-radius: 50%; }
        .prio-label { text-transform: uppercase; letter-spacing: 0.04em; }
        .dot-sep { color: #2A2F37; }

        .del-btn {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 4px;
          display: flex;
          opacity: 0;
          transition: all 150ms ease;
          flex-shrink: 0;
        }

        .task-row:hover .del-btn { opacity: 1; color: #6B7280; }
        .del-btn:hover { color: #F0576B !important; }

        .empty-state {
          text-align: center;
          padding: 48px 20px;
          color: #4B5563;
        }

        .empty-state .glyph {
          font-family: 'JetBrains Mono', monospace;
          font-size: 26px;
          color: #2A2F37;
          margin-bottom: 8px;
        }

        .empty-state .msg {
          font-size: 12.5px;
        }

        .task-list::-webkit-scrollbar { width: 6px; }
        .task-list::-webkit-scrollbar-thumb { background: #23272E; border-radius: 3px; }
        .task-list::-webkit-scrollbar-track { background: transparent; }

        .today-view { padding-bottom: 24px; }

        .today-section-header {
          padding: 16px 16px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: #6B7280;
        }

        .today-section-header:first-child { padding-top: 14px; }

        .today-view-all {
          border: none;
          background: transparent;
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          cursor: pointer;
          padding: 0;
        }

        .today-xp-total {
          color: #F5A623;
          font-family: 'JetBrains Mono', monospace;
        }

        .today-card {
          margin: 0 16px;
          padding: 14px;
          border: 1px solid #23272E;
          border-radius: 12px;
          background: #14171C;
          animation: rowIn 220ms ease backwards;
        }

        .today-card-row { display: flex; align-items: baseline; gap: 10px; }

        .today-card-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #5EEAD4;
        }

        .today-card-label {
          font-size: 15px;
          font-weight: 500;
          color: #E7EAEE;
        }

        .today-card-sub {
          margin-top: 4px;
          font-size: 11.5px;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
        }

        .today-mark-btn {
          margin-top: 12px;
          width: 100%;
          padding: 9px;
          border: 1px solid #23272E;
          border-radius: 8px;
          background: transparent;
          color: #9CA3AF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          cursor: pointer;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .today-mark-btn:hover { border-color: #5EEAD4; color: #5EEAD4; }
        .today-mark-btn.done { border-color: #5EEAD4; color: #5EEAD4; background: rgba(94,234,212,0.08); }

        .today-list { margin: 0 16px; display: flex; flex-direction: column; gap: 6px; }

        .today-task-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid #1E2228;
          border-radius: 8px;
          background: #14171C;
          animation: rowIn 200ms ease backwards;
        }

        .today-task-check {
          width: 16px;
          height: 16px;
          border-radius: 5px;
          border: 1.5px solid #3A3F47;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
        }

        .today-task-check:hover { border-color: #5EEAD4; }

        .today-task-text {
          flex: 1;
          font-size: 13px;
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .today-prio-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .today-prio-dot.high { background: #F5A623; }
        .today-prio-dot.mid { background: #5EEAD4; }
        .today-prio-dot.low { background: #6B7280; }

        .today-more {
          border: none;
          background: transparent;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-align: left;
          padding: 6px 12px;
          cursor: pointer;
        }

        .today-more:hover { color: #5EEAD4; }

        .today-reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #F5A623;
          flex-shrink: 0;
        }

        .today-claim-btn {
          border: 1px solid #5EEAD4;
          border-radius: 6px;
          background: transparent;
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .today-claim-btn:hover { background: rgba(94,234,212,0.1); }

        @media (prefers-reduced-motion: reduce) {
          .panel, .task-row, .progress-fill { animation: none !important; transition: none !important; }
        }

        .quest-banner {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #171B21;
          border: 1px solid #5EEAD4;
          box-shadow: 0 8px 24px -8px rgba(0,0,0,0.6), 0 0 0 1px rgba(94,234,212,0.15);
          border-radius: 10px;
          padding: 10px 12px;
          cursor: pointer;
          animation: bannerIn 340ms cubic-bezier(.16,1,.3,1);
        }

        @keyframes bannerIn {
          from { opacity: 0; transform: translateY(-14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quest-banner-icon {
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          flex-shrink: 0;
        }

        .quest-banner-text {
          flex: 1;
          font-size: 12.5px;
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-banner-text b {
          color: #5EEAD4;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          margin-right: 4px;
        }

        .quest-banner-close {
          border: none;
          background: transparent;
          color: #6B7280;
          cursor: pointer;
          padding: 3px;
          flex-shrink: 0;
          display: flex;
        }

        .quest-banner-close:hover { color: #E7EAEE; }

        /* ---- shared: vault + quest sections ---- */
        .vault-scroll { display: flex; flex-direction: column; }

        .section-header {
          padding: 14px 18px 8px;
        }

        .section-header span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: #6B7280;
          text-transform: uppercase;
        }

        .vault-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          padding: 0 18px 4px;
        }

        @media (min-width: 520px) {
          .vault-grid { grid-template-columns: 1fr 1fr; }
        }

        .progress-track.small { height: 4px; }
        .progress-fill.xp { background: linear-gradient(90deg, #8B9CF7, #B4C0FA); box-shadow: 0 0 12px rgba(139,156,247,0.5); }

        .muted { color: #4B5563; }

        /* ---- vault: habit cards ---- */
        .vault-card {
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vault-card-top {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .vault-card-icon {
          font-size: 13px;
          color: #5EEAD4;
          line-height: 1.4;
          flex-shrink: 0;
        }

        .vault-card-title {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .vault-card-label {
          font-size: 13px;
          color: #E7EAEE;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .vault-card-goal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
          margin-top: 2px;
        }

        .vault-card-del {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 2px;
          display: flex;
          flex-shrink: 0;
          transition: color 150ms ease;
        }

        .vault-card-del:hover { color: #F0576B; }

        .month-grid-wrap { display: flex; flex-direction: column; gap: 5px; }

        .month-grid-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #4B5563;
          letter-spacing: 0.04em;
        }

        .month-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 3px;
        }

        .month-cell {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 2px;
          background: #1E2228;
          animation: heatmapIn 240ms ease backwards;
        }

        .month-cell.filled { background: #F5A623; }
        .month-cell.today { box-shadow: 0 0 0 1.5px #5EEAD4; }

        .vault-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .vault-card-ring-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .vault-card-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #E7EAEE;
        }

        .vault-check {
          border: 1.5px solid #23272E;
          background: transparent;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .vault-check.done {
          background: rgba(94,234,212,0.1);
          border-color: #5EEAD4;
          color: #5EEAD4;
        }

        /* ---- vault: projects ---- */
        .project-card {
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-name {
          font-size: 13px;
          font-weight: 600;
          color: #E7EAEE;
        }

        .project-due {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #F5A623;
          width: fit-content;
        }

        .project-due.overdue { color: #F0576B; }

        .project-tasks {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .project-task-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-task-text {
          flex: 1;
          font-size: 12.5px;
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .project-task-text.done { color: #4B5563; text-decoration: line-through; }

        .project-add-task input {
          width: 100%;
          background: #0F1215;
          border: 1px solid #23272E;
          border-radius: 7px;
          padding: 7px 9px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          outline: none;
        }

        .project-add-task input:focus { border-color: #5EEAD4; }

        /* ---- quest: life areas ---- */
        .area-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          padding: 0 18px 4px;
        }

        .area-card {
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .area-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        .area-label {
          flex: 1;
          font-size: 12px;
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .area-xp {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #6B7280;
        }

        /* ---- quest: good/bad habit rows ---- */
        .quest-habit-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 18px 4px;
        }

        .quest-habit-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 10px;
          padding: 10px 12px;
        }

        .quest-habit-card.bad { border-color: #2A1F22; }

        .quest-habit-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .quest-habit-label {
          font-size: 13px;
          color: #E7EAEE;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .quest-habit-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
        }

        .quest-check.bad-check.done {
          background: #F0576B;
          border-color: #F0576B;
        }

        /* ---- quest: reward center ---- */
        .reward-card {
          background: #14171C;
          border: 1px solid #23272E;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reward-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reward-label { font-size: 13px; font-weight: 600; color: #E7EAEE; }

        .reward-cost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #F5A623;
        }

        .reward-claim {
          border: 1.5px solid #23272E;
          background: transparent;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 8px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .reward-claim:not(:disabled):hover {
          border-color: #F5A623;
          color: #F5A623;
        }

        .reward-claim:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .reward-claimed-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: #4B5563;
        }

        /* ---- quest: xp bar in hero card ---- */
        .xp-bar-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .xp-bar-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #6B7280;
        }

        /* ---- editing affordances added across vault + quest cards ---- */
        .vault-card-edit {
          border: none;
          background: transparent;
          color: #2A2F37;
          cursor: pointer;
          padding: 2px;
          display: flex;
          flex-shrink: 0;
          transition: color 150ms ease;
        }

        .vault-card-edit:hover { color: #5EEAD4; }

        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .project-task-text { cursor: pointer; }

        .project-task-edit {
          flex: 1;
          background: #0F1215;
          border: 1px solid #5EEAD4;
          border-radius: 6px;
          padding: 6px 8px;
          color: #E7EAEE;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          outline: none;
        }

        .area-chip {
          border: 1px solid #23272E;
          background: #0F1215;
          color: #6B7280;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 5px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .area-chip.active {
          background: color-mix(in srgb, var(--ac) 15%, transparent);
          border-color: var(--ac);
          color: var(--ac);
        }

        .quest-habit-card.editing,
        .vault-card:has(.routine-edit),
        .project-card:has(.routine-edit),
        .reward-card:has(.routine-edit) {
          gap: 0;
        }
        /* ============================================================
           DESKTOP / LAPTOP POLISH
           Everything below only changes layout at wider viewports.
           Phones (max-width: 640px) are untouched by these rules.
           ============================================================ */

        .checkbox-btn:hover { border-color: #5EEAD4; }
        .tabs button:hover { color: #B8C0CC; }
        .tabs button.active:hover { color: #E7EAEE; }
        .routine-row:hover { background: #191D23; }
        .area-card:hover { border-color: #2C3138; }

        @media (hover: hover) and (pointer: fine) {
          .vault-card, .project-card, .reward-card, .quest-habit-card {
            transition: border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease;
          }
          .vault-card:hover, .project-card:hover, .reward-card:hover, .quest-habit-card:hover {
            border-color: #2C3138;
            box-shadow: 0 8px 20px -12px rgba(0,0,0,0.5);
          }
        }

        @media (min-width: 900px) {
          .app-root {
            padding: 5vh 5vw;
            background:
              radial-gradient(circle at 15% 0%, rgba(94,234,212,0.07), transparent 45%),
              radial-gradient(circle at 85% 100%, rgba(245,166,35,0.06), transparent 45%),
              repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 28px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 28px),
              #0B0D10;
          }

          .panel {
            max-width: 1180px;
            max-height: 900px;
            border-radius: 16px;
            box-shadow: 0 40px 90px -24px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02);
          }

          .titlebar { padding: 16px 26px; }
          .titlebar-name { font-size: 13px; }
          .clock { font-size: 13px; }

          .tabs { padding: 12px 26px 0; gap: 6px; }
          .tabs button { font-size: 12px; padding: 10px 20px; }

          /* Reading-oriented views (plain lists) stay a comfortable
             line-length and center within the wider panel. */
          .task-list:not(.vault-scroll) {
            max-width: 840px;
            margin: 0 auto;
            width: 100%;
          }

          /* Card-grid views (vault + quest) get to use the extra width. */
          .vault-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; padding: 0 26px 4px; }
          .quest-habit-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            align-content: start;
            padding: 0 26px 4px;
          }
          .radar-card, .donut-card { max-width: 840px; margin-left: auto; margin-right: auto; }

          .task-row { padding: 11px 12px; }
        }

        @media (min-width: 1240px) {
          .panel { max-width: 1320px; }
          .vault-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      <div className="panel">
        {banner && (
          <div className="quest-banner" onClick={() => setBanner(null)}>
            <span className="quest-banner-icon">▸</span>
            <span className="quest-banner-text">
              <b>Now:</b> {banner.label}
            </span>
            <button
              className="quest-banner-close"
              onClick={(e) => {
                e.stopPropagation();
                setBanner(null);
              }}
              aria-label="Dismiss"
            >
              <svg viewBox="0 0 24 24" width="12" height="12">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}
        <div className="titlebar">
          <div className="titlebar-left">
            <div className="dots">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
            </div>
            <span className="titlebar-name">tasks.sh</span>
          </div>
          <div className="titlebar-right">
            <input
              type="file"
              accept="application/json"
              ref={importInputRef}
              onChange={handleImportFile}
              style={{ display: "none" }}
            />
            <button
              className="titlebar-icon-btn"
              onClick={toggleSound}
              aria-label={soundOn ? "Mute sound" : "Unmute sound"}
              title={soundOn ? "Mute sound" : "Unmute sound"}
            >
              {soundOn ? (
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M4 9v6h4l5 5V4L8 9H4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M4 9v6h4l5 5V4L8 9H4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
            <button className="titlebar-icon-btn" onClick={triggerImport} aria-label="Import backup" title="Import backup">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M12 16V4M7 9l5-5 5 5M4 20h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="titlebar-icon-btn" onClick={exportData} aria-label="Export backup" title="Export backup">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M12 4v12M7 11l5 5 5-5M4 20h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="clock">
              {new Date(now).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true })}
            </span>
          </div>
        </div>

        {dataMsg && (
          <div className={`data-toast ${dataMsg.type}`}>{dataMsg.text}</div>
        )}

        <div className="tabs">
          <button className={tab === "today" ? "active" : ""} onClick={() => changeTab("today")}>
            today
          </button>
          <button className={tab === "tasks" ? "active" : ""} onClick={() => changeTab("tasks")}>
            tasks
          </button>
          <button className={tab === "routines" ? "active" : ""} onClick={() => changeTab("routines")}>
            routines
          </button>
          <button className={tab === "vault" ? "active" : ""} onClick={() => changeTab("vault")}>
            vault
          </button>
          <button className={tab === "quest" ? "active" : ""} onClick={() => changeTab("quest")}>
            quest
          </button>
        </div>

        <div key={tab} className="tab-content">
        {tab === "today" ? (
          <TodayView
            routines={routines}
            setRoutines={setRoutines}
            tasks={tasks}
            setTasks={setTasks}
            vaultHabits={vaultHabits}
            goodHabits={goodHabits}
            rewards={rewards}
            setRewards={setRewards}
            totalXP={totalXP}
            setTab={changeTab}
          />
        ) : tab === "tasks" ? (
          <>
            <div className="stats-bar stats-bar-viz">
              <RadialProgress pct={stats.pct} size={64} stroke={5.5} label={`${stats.pct}%`} />
              <div className="stats-row-viz">
                <span><b><AnimatedNumber value={stats.total} /></b> total</span>
                <span><b><AnimatedNumber value={stats.pending} /></b> pending</span>
                <span><b><AnimatedNumber value={stats.done} /></b> done</span>
              </div>
            </div>

            {stats.pending > 0 && (
              <div className="donut-card">
                <DonutChart
                  size={96}
                  stroke={14}
                  centerLabel={stats.pending}
                  centerSublabel="open"
                  segments={prioBreakdown.map((p) => ({ key: p.key, value: p.value, color: p.color }))}
                />
                <div className="donut-legend">
                  {prioBreakdown.map((p) => (
                    <div className="donut-legend-row" key={p.key}>
                      <span className="donut-legend-dot" style={{ background: p.color }} />
                      <span>{p.label} priority</span>
                      <span className="donut-legend-val">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="composer">
              <input
                ref={inputRef}
                type="text"
                placeholder="add a task, press enter..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
              />
              <div className="prio-select">
                {PRIORITIES.map((p) => (
                  <button
                    key={p.key}
                    className={priority === p.key ? "active" : ""}
                    style={{ "--pc": p.color }}
                    onClick={() => setPriority(p.key)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <button className="add-btn" onClick={addTask} aria-label="Add task">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="filters">
              {["all", "active", "done"].map((f) => (
                <button
                  key={f}
                  className={filter === f ? "active" : ""}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
              <span className="spacer" />
              {stats.done > 0 && (
                <button className="clear-btn" onClick={clearDone}>clear done</button>
              )}
            </div>

            <div className="task-list">
              {visible.length === 0 ? (
                <div className="empty-state">
                  <div className="glyph">{"{ }"}</div>
                  <div className="msg">
                    {filter === "done" ? "nothing completed yet" : "queue's empty — add something"}
                  </div>
                </div>
              ) : (
                visible.map((t, i) => (
                  <TaskRow
                    key={t.id}
                    task={t}
                    now={now}
                    index={i}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))
              )}
            </div>
          </>
        ) : tab === "routines" ? (
          <RoutinesView routines={routines} setRoutines={setRoutines} />
        ) : tab === "vault" ? (
          <VaultView
            vaultHabits={vaultHabits}
            setVaultHabits={setVaultHabits}
            projects={projects}
            setProjects={setProjects}
          />
        ) : (
          <QuestView
            goodHabits={goodHabits}
            setGoodHabits={setGoodHabits}
            badHabits={badHabits}
            setBadHabits={setBadHabits}
            rewards={rewards}
            setRewards={setRewards}
          />
        )}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(TodoApp));
