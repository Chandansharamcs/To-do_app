import React, { useState, useMemo, useRef, useEffect } from "react";

// ---- design tokens ----
// bg: #0B0D10 panel: #14171C accent(cyan): #5EEAD4 accent2(amber): #F5A623
// danger: #F0576B text: #E7EAEE muted: #6B7280 mono: JetBrains Mono, sans: Inter

const PRIORITIES = [
  { key: "low", label: "low", color: "#6B7280" },
  { key: "mid", label: "mid", color: "#5EEAD4" },
  { key: "high", label: "high", color: "#F5A623" },
];

// ---- IST clock helpers ----
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

// ---- permanent routines (quest log) ----
let ruid = 200;
const seedRoutines = [
  { id: 1, time: "06:30", label: "Wake + hydrate", duration: 30 },
  { id: 2, time: "07:00", label: "Workout", duration: 60 },
  { id: 3, time: "09:00", label: "Deep work block", duration: 180 },
  { id: 4, time: "13:00", label: "Lunch break", duration: 45 },
  { id: 5, time: "14:00", label: "Admin / errands", duration: 120 },
  { id: 6, time: "18:00", label: "Rice / creative projects", duration: 90 },
  { id: 7, time: "20:00", label: "Dinner", duration: 45 },
  { id: 8, time: "21:30", label: "Anime / wind down", duration: 90 },
  { id: 9, time: "23:00", label: "Sleep", duration: 450 },
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

function RoutineRow({ routine, status, index }) {
  const startMin = timeToMinutes(routine.time);
  const endMin = startMin + routine.duration;
  return (
    <div
      className={`routine-row ${status}`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <div className="routine-line">
        <span className="routine-node" />
        {index !== -1 && <span className="routine-connector" />}
      </div>
      <div className="routine-main">
        <div className="routine-top">
          <span className="routine-time">{minutesToLabel(startMin)}</span>
          {status === "current" && <span className="live-tag">NOW</span>}
        </div>
        <span className="routine-label">{routine.label}</span>
        <span className="routine-span">
          {minutesToLabel(startMin)} – {minutesToLabel(endMin)} · {formatDuration(routine.duration)}
        </span>
      </div>
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
  const [time, setTime] = useState("");

  const addRoutine = () => {
    const text = label.trim();
    if (!text || !time) return;
    setRoutines((prev) => [
      ...prev,
      { id: ruid++, time, label: text, duration: 30 },
    ]);
    setLabel("");
    setTime("");
  };

  const currentEnd = current ? timeToMinutes(current.time) + current.duration : 0;
  const untilNext = next
    ? ((timeToMinutes(next.time) - nowMinutes + 1440) % 1440) || 1440
    : 0;

  return (
    <>
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

      <div className="composer">
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

      <div className="task-list routine-list">
        {sorted.map((r, i) => (
          <RoutineRow
            key={r.id}
            routine={r}
            index={i}
            status={r.id === currentId ? "current" : r.id === nextId ? "next" : "idle"}
          />
        ))}
      </div>
    </>
  );
}

let uid = 100;
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

export default function TodoApp() {
  const [tab, setTab] = useState("tasks");
  const [tasks, setTasks] = useState(seedTasks);
  const [routines, setRoutines] = useState(seedRoutines);
  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("mid");
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);
  const now = useNow();

  const stats = useMemo(() => {
    const total = tasks.length;
    const done = tasks.filter((t) => t.done).length;
    const pending = total - done;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    return { total, done, pending, pct };
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
      { id: uid++, text, done: false, priority, createdAt: Date.now() },
    ]);
    setInput("");
    inputRef.current?.focus();
  };

  const toggleTask = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  const clearDone = () => setTasks((prev) => prev.filter((t) => !t.done));

  return (
    <div className="app-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        html, body, #root { height: 100%; }

        .app-root {
          height: 100vh;
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

        .tabs {
          display: flex;
          gap: 2px;
          padding: 10px 14px 0;
          border-bottom: 1px solid #1E2228;
        }

        .tabs button {
          border: none;
          background: transparent;
          color: #4B5563;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 9px 14px;
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

        .routine-list { padding-top: 2px; }

        .routine-row {
          display: flex;
          gap: 12px;
          padding: 2px 8px;
          animation: rowIn 320ms cubic-bezier(.16,1,.3,1) backwards;
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
          gap: 8px;
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

        .stats-bar {
          padding: 18px 18px 14px;
          border-bottom: 1px solid #1E2228;
        }

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

        @media (prefers-reduced-motion: reduce) {
          .panel, .task-row, .progress-fill { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="panel">
        <div className="titlebar">
          <div className="titlebar-left">
            <div className="dots">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
            </div>
            <span className="titlebar-name">tasks.sh</span>
          </div>
          <span className="clock">
            {new Date(now).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>

        <div className="tabs">
          <button className={tab === "tasks" ? "active" : ""} onClick={() => setTab("tasks")}>
            tasks
          </button>
          <button className={tab === "routines" ? "active" : ""} onClick={() => setTab("routines")}>
            routines
          </button>
        </div>

        {tab === "tasks" ? (
          <>
            <div className="stats-bar">
              <div className="stats-top">
                <span className="stats-title">TODAY'S LOAD</span>
                <span className="stats-pct">{stats.pct}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${stats.pct}%` }} />
              </div>
              <div className="stats-row">
                <span><b>{stats.total}</b> total</span>
                <span><b>{stats.pending}</b> pending</span>
                <span><b>{stats.done}</b> done</span>
              </div>
            </div>

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
        ) : (
          <RoutinesView routines={routines} setRoutines={setRoutines} />
        )}
      </div>
    </div>
  );
}
