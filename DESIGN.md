```
        ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
        ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
        ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
        ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
        ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
        ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝

     ╭────────────────────────────────────────────────────╮
     │  the visual language of tasks.sh                   │
     │  dark · terminal · rice · Conky-adjacent           │
     ╰────────────────────────────────────────────────────╯
```

> **Where this lives:** every value in this document is currently inline in
> the single `<style>` block inside `app.jsx` (around line 2890+). There is no
> separate CSS file, no design-token file, no Tailwind. This document *is* the
> spec — if you extract tokens later, these are the values to preserve.

---

## 1 · Design principles

**`01`  It should look like a terminal, not like a website.**
Monospace for anything numeric or label-like. Hairline borders, not shadows,
to separate things. Lowercase UI copy. Square-ish radii. No gradients except
functional ones (progress fills, elapsed-time shading).

**`02`  Color carries meaning, never decoration.**
Cyan = now/primary. Amber = streaks/next. Coral = danger/loss. Violet = quest
areas. The 8-color categorical palette exists *only* so that one routine keeps
the same identity across the timeline, its row border, and the legend.

**`03`  Density over whitespace — but capped.**
This is a dashboard, so information density is the point. The one hard limit:
reading-width content never exceeds `840px`, because long measures are
genuinely unreadable regardless of how much screen you have.

**`04`  Mobile-first, desktop-adapted — never the reverse.**
The base stylesheet is the phone. Desktop is additive, gated behind
`min-width: 900px`. A change to desktop must never alter the phone rendering.

**`05`  Motion confirms, it never entertains.**
Every animation is tied to a state change (mount, tab switch, value change,
completion). All of it collapses under `prefers-reduced-motion`.

---

## 2 · Color

### 2.1 Core tokens

```
  ████  #0B0D10   background     the page behind the window
  ████  #14171C   panel          the window, every card
  ████  #1E2228   track          progress-bar troughs, inert fills
  ████  #23272E   border         every hairline, 1px
  ████  #E7EAEE   text           primary
  ████  #6B7280   muted          secondary, timestamps, hints
```

### 2.2 Semantic accents

```
  ████  #5EEAD4   cyan     primary action · "current" state · default ring
  ████  #F5A623   amber    streaks · "next" state · warnings
  ████  #F0576B   coral    delete · bad habits · overdue
  ████  #8B9CF7   violet   quest life-areas (Self-Dev)
```

Cyan is the app's identity color. If something is interactive and important,
it is cyan. If something is *happening right now*, it is cyan. Amber is
strictly "upcoming or accumulated" — never an action.

### 2.3 Life areas (`AREAS`, app.jsx ~1649)

| Key | Label | Color |
|---|---|---|
| `work` | Work | `#5EEAD4` |
| `fitness` | Fitness | `#F5A623` |
| `health` | Health | `#F0576B` |
| `self` | Self-Dev | `#8B9CF7` |

### 2.4 Categorical palette (`CATEGORY_PALETTE`, app.jsx ~1659)

Eight ANSI/terminal-inspired hues. Assigned deterministically by hashing an
entity's id, so a given routine or habit always renders in the same color
everywhere it appears.

```
  ████ #5EEAD4 cyan     ████ #F5A623 amber    ████ #F0576B coral
  ████ #8B9CF7 violet   ████ #7EE787 green    ████ #F778BA pink
  ████ #79C0FF blue     ████ #E3B341 gold
```

```js
function colorForId(id) {
  const n = typeof id === "number"
    ? id
    : String(id).split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  return CATEGORY_PALETTE[Math.abs(n) % CATEGORY_PALETTE.length];
}
```

**Rule:** never pick from this palette by index manually. Always go through
`colorForId()`. The stability of the mapping is the whole feature — a routine
whose color changes between the timeline and its row is a bug.

**Consumers:** timeline blocks · routine row left-borders · vault habit card
borders, icons and progress rings · project cards · timeline legend swatches.

---

## 3 · Typography

```
  JetBrains Mono   400 · 500 · 600 · 700    numbers, times, labels, UI chrome
  Inter            400 · 500 · 600          body copy, task/routine names
```

Loaded via one `@import` from Google Fonts inside the style block. Both have
system fallbacks (`monospace` / `sans-serif`) — the app is fully functional
without the network, it just looks slightly different.

### Scale

The type scale is deliberately small and tight — this is a dashboard, not an
article. Sizes in actual use, most common first:

```
   8px  ┃ micro-labels, heatmap legends
   9px  ┃ dot-strip labels, hour ticks
  10px  ┃ tags, chips, secondary meta
  11px  ┃ ◀ THE WORKHORSE — most UI text, buttons, labels
  12px  ┃ row secondary text
  13px  ┃ ◀ PRIMARY — task labels, routine names, card titles
  15px  ┃ section headings
  17px  ┃ card headline numbers
  26px  ┃ the IST hero clock, XP totals
```

When in doubt: **11px mono for chrome, 13px sans for content.** Anything above
17px should be a deliberate hero moment, not a heading.

Letter-spacing of `0.05em`–`0.08em` on uppercase mono labels. Never on Inter.

---

## 4 · Space, radius, borders

### Radii — in order of frequency

```
   2-3px  ┃ tiny cells (month grid, heatmap squares)
   5-7px  ┃ chips, tags, small buttons
   6px    ┃ ◀ default for interactive elements
   8px    ┃ ◀ default for cards and rows
  10-12px ┃ large cards, sections
  14px    ┃ the panel itself (0 on phones — full-bleed)
  50%     ┃ rings, avatars, radial progress
```

### Borders

Always `1px solid #23272E`. Never thicker, never a different color, with two
exceptions:

- **Left accent border** on routine/habit rows: `3px` in the entity's
  `colorForId()` color.
- **Focus/active states**: the border shifts to the accent color, same width.

### Elevation

There is essentially one shadow in the system — the panel's:

```css
box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
```

Cards do not have shadows. They are separated by borders and background delta
(`#14171C` on `#0B0D10`). Adding card shadows breaks the flat terminal feel.

---

## 5 · Layout & breakpoints

```
  ◀─── 420px ────── 640px ────── 900px ────── 1240px ───▶
   compact  │  phone   │   (gap)   │  laptop  │  desktop
   phone    │  default │           │          │
```

| Breakpoint | What changes |
|---|---|
| `max-width: 420px` | Compact phone — tightened padding, smaller chips |
| `max-width: 640px` | Phone — panel goes full-bleed: `100dvh`, `border-radius: 0`, no shadow |
| *(base)* | Panel is `640px × 780px` max, centered, floating |
| `min-width: 520px` | Minor two-up adjustments in a few card sections |
| `min-width: 900px` | **Laptop.** Panel → `1180px`. Grid-texture page background. List views cap at `840px` and center. Card views (`.vault-scroll`) → 3-column grid. Habit list → 2-column |
| `min-width: 1240px` | **Desktop.** Panel → `1320px`. Vault grid → 4 columns |
| `hover: hover and pointer: fine` | All `:hover` states — gated so touch never gets stuck-hover |
| `prefers-reduced-motion: reduce` | All animation collapses (3 separate blocks) |

### The two content buckets

This is the single most important layout rule in the app:

```
  ┌──────────────── .panel (1180px @ 900+) ────────────────┐
  │                                                        │
  │   ┌─ list content ─┐        ┌─── card content ───┐     │
  │   │  max 840px     │        │  3-4 col grid      │     │
  │   │  centered      │        │  full panel width  │     │
  │   │                │        │                    │     │
  │   │  Tasks         │        │  Vault             │     │
  │   │  Today         │        │  Quest             │     │
  │   │  Routines      │        │                    │     │
  │   └────────────────┘        └────────────────────┘     │
  │   .task-list:not(.vault-scroll)     .vault-scroll      │
  └────────────────────────────────────────────────────────┘
```

**When adding a new view:** decide which bucket it belongs to and use the
existing selector. Do **not** introduce a new one-off `max-width` elsewhere in
the file — that's exactly how the layout drifted before the v12 cleanup.

### Scroll architecture

Every tab wraps *everything* — hero cards, charts, composers, rows — in one
scrollable `.task-list`. That element must be a **direct flex child** of
`.panel` (`display: flex; flex-direction: column`) to get a bounded height.

> [!WARNING]
> Wrapping `.task-list` one level deeper in an unstyled `<div>` breaks the
> flex chain and silently kills scrolling app-wide. This has happened twice
> (see CHANGELOG `2026-07-22 (3)` and the Routines scroll fix). If scrolling
> breaks, check the flex chain first, before anything else.

---

## 6 · Motion

| Animation | Duration | Curve | Trigger |
|---|---|---|---|
| Panel entrance | `480ms` | `cubic-bezier(.16,1,.3,1)` | mount |
| Tab switch | `~200ms` | ease-out | tab change |
| Number roll (`useAnimatedNumber`) | `550ms` | eased | any numeric value change |
| Row stagger | `~30ms × index` | ease-out | list render |
| Progress fills | `~400ms` | ease-out | value change |

The signature curve is `cubic-bezier(.16,1,.3,1)` — a hard decelerate. It's
what makes the panel feel like it *snaps* into place rather than drifting.
Reuse it for anything that enters.

All of the above is wrapped by `@media (prefers-reduced-motion: reduce)`.

---

## 7 · Component anatomy

### 7.1 Row (tasks, routines, project tasks)

```
  ┌─┬────────────────────────────────────────────────────┐
  │▌│  ☐   Label text                          12:30 pm  │
  │▌│      secondary meta · streak · or: alt      [edit] │
  └─┴────────────────────────────────────────────────────┘
   ▲  ▲                                              ▲
   │  └─ checkbox (tasks only — removed from routines) │
   └─ 3px colorForId() accent                          │
                                     tap row to edit ──┘
```

- Swipe left to delete, with **axis-lock** — a vertical-dominant gesture
  (>6px) immediately releases control back to native scroll.
- Tap anywhere on the row to enter inline edit. No modals anywhere in the app.

### 7.2 Card (vault habits, projects, quest habits, rewards)

```
  ┌────────────────────────────────────────────┐
  │  ◆  Title                            ✎  ✕  │
  │  ─────────────────────────────────────────  │
  │  ▓▓▓▓▓▓▓▓▓░░░░░░░░  4/6 this week          │
  │  ▪▪▪▫▪▪▫  monthly grid / dot strip          │
  └────────────────────────────────────────────┘
```

Border and icon take the entity's `colorForId()` color. Pencil enters inline
edit. Same edit pattern as rows — consistency here is deliberate.

### 7.3 DayTimeline (the hard one)

```
   12a    3a    6a    9a   12p    3p    6p    9p   12a    ← .timeline-hours
    │     │     │     │     │     │     │     │     │        (own row, ABOVE
  ┌─┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─┐       the track)
  │▓▓▓▓▓▓▓▓░░░░░│ School  │ │ Karate │      │ Sleep ▓▓│  lane 0
  │             │ Study      │  │ Shower │            │  lane 1
  └───────────────────────────────────────────────────┘
   ▲ overnight band (10p-6a)   ▲ elapsed-today shading
```

Three things that are load-bearing and easy to break:

1. **Hour labels live in their own `.timeline-hours` row**, not positioned
   inside `.timeline-track`. The track has `overflow: hidden`, so anything
   using negative offsets inside it is invisible. This was a real, shipped bug.
2. **Lanes come from `packTimelineLanes()`** — greedy interval partitioning
   (the classic "minimum lecture rooms" algorithm). Sort by start, assign each
   item to the first lane whose last item has already ended. Optimal lane count.
3. **Block widths are clamped:** `Math.min(rawWidthPct, 100 - leftPct)`. A
   routine crossing midnight would otherwise overflow and get clipped mid-word.

### 7.4 Legend

Responsive grid — 2 / 3 / 4 columns by viewport. Each entry is
`swatch · time · label`, ellipsis-truncated, sorted by start time. It was
`flex-wrap` chips once; with a dense schedule that becomes an unreadable wall.

---

## 8 · Iconography

Inline SVG only — no icon font, no icon library, nothing fetched at runtime.

- Stroke-based, `1.5px`–`2px`, `currentColor`, never filled.
- Sized to the type they sit beside: `14px` inline, `16px` for actions,
  `18px`+ for titlebar controls.
- Vault habit "icons" are user-editable **emoji or short glyph strings**,
  not SVG — they're data, not chrome.

---

## 9 · Voice

Lowercase, terse, terminal-flavored. Never chirpy.

```
  ✓  "routine deleted"              ✗  "Oops! Routine deleted 🎉"
  ✓  "3 left"                       ✗  "You have 3 tasks remaining!"
  ✓  "tasks.sh --loading"           ✗  "Loading, please wait…"
  ✓  "notifications on"             ✗  "Great! Notifications enabled!"
```

Level titles are the one place with flavor — 20 escalating ranks from
**Novice** to **Eternal**, then roman-numeral overflow (`Eternal II`,
`Eternal III`…) so it never visually caps.

---

## 10 · If you extract a theme file

Someone will eventually want these as CSS custom properties. Suggested shape,
preserving every value above:

```css
:root {
  --bg:        #0B0D10;   --panel:     #14171C;
  --track:     #1E2228;   --border:    #23272E;
  --text:      #E7EAEE;   --muted:     #6B7280;

  --cyan:      #5EEAD4;   --amber:     #F5A623;
  --coral:     #F0576B;   --violet:    #8B9CF7;
  --green:     #7EE787;   --pink:      #F778BA;
  --blue:      #79C0FF;   --gold:      #E3B341;

  --r-sm: 6px;  --r-md: 8px;  --r-lg: 12px;  --r-panel: 14px;
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Inter', sans-serif;
  --ease-enter: cubic-bezier(.16, 1, .3, 1);
}
```

Do it as a **pure refactor** — same values, no "while I'm in here" tweaks.
These colors were tuned against the actual app on an actual OLED phone; they
look wrong in isolation and right in situ.


<div align="center">

```
╭─────────────────────────────────────────────────────────────╮
│  DESIGN.md · tasks.sh · see HANDOFF.md for architecture     │
╰─────────────────────────────────────────────────────────────╯
```

</div>
