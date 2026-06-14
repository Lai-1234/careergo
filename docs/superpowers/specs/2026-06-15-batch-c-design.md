# CareerGo Batch C — Design Spec
**Date:** 2026-06-15  
**Scope:** Change 6c/6d (Micro-interactions + Nav), Change 6f (Notification Bell), Change 7d (Score Breakdown), Change 8 (Jobs), Change 5d (Application Tracker)  
**File:** `c:\careergo\careergo.html`  

---

## Design System Reference

Same tokens as Batches A + B. All new components use these:

| Token | Value |
|-------|-------|
| `--brand` | `#5B2EFF` |
| `--brand-light` | `#8A63FF` |
| `--gold` | `#FDBA2D` |
| `--teal` | `#1D9E75` |
| `--amber` | `#EF9F27` |
| `--bg-deep` | `#0d0222` |
| `--bg-purple` | `#1A0146` |

---

## Change 6c + 6d — Micro-interactions & Nav Active State

### Purpose
Make every page feel polished and responsive. These are CSS-only changes that improve perceived quality across the entire app.

### 6d — Nav Active State

Current sidebar nav items use a simple background highlight.

**New active state:**
- Active item: 3px solid `#5B2EFF` left border + `rgba(91,46,255,0.18)` background
- Gold dot indicator on items with new activity (jobs nav when `USER.newMatches > 0`)
- Smooth transition on all state changes (150ms)

CSS to add to nav item wrapper (`.nav-item` class or inline via Tailwind):
```css
.nav-link { position: relative; transition: background 150ms, border-color 150ms; border-left: 3px solid transparent; }
.nav-link:hover { background: rgba(255,255,255,0.06); border-left-color: rgba(255,255,255,0.2); }
.nav-link.active { background: rgba(91,46,255,0.18); border-left-color: #5B2EFF; }
.nav-gold-dot { width: 7px; height: 7px; border-radius: 50%; background: #FDBA2D; flex-shrink: 0; }
```

Implementation: In `CandidateApp` sidebar render, wrap each nav button in a div with these classes. The `active` class is applied when `view === nav.id`. Add the gold dot to the jobs nav item when `USER.newMatches > 0`.

### 6c — Micro-interactions

**Card hover lift:**
Add `.hover-lift` CSS class:
```css
.hover-lift { transition: transform 180ms ease, box-shadow 180ms ease; }
.hover-lift:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.10); }
```
Apply to: job cards in `JobsOpportunities`, career path cards in `CandidateDashboard` (`.future-card`).

**Skill badge hover:**
```css
.skill-badge { transition: transform 120ms, box-shadow 120ms; }
.skill-badge:hover { transform: scale(1.05); box-shadow: 0 2px 8px rgba(91,46,255,0.20); }
```
Apply to: skill chips in CareerCompanion Skills tab.

**Score ring animate-in:** Already done (Batch A `@keyframes ringDraw`). No change needed.

---

## Change 6f — Notification Bell

### Purpose
Add a functional notification bell to the top header, giving judges a clickable feature.

### Location
In `CandidateApp`'s top header bar (right side, next to the user avatar).

### Component: `NotificationBell`

```jsx
function NotificationBell(){
  const [open, setOpen] = useState(false);
  const NOTIFS = [
    { icon:'briefcase', tone:'brand', text:'3 new job matches today', sub:'94%, 91%, 88% fit', time:'2m ago' },
    { icon:'sparkles',  tone:'gold',  text:'Coach Vera has a new mission', sub:'+150 XP available', time:'1h ago' },
    { icon:'trending-up', tone:'green', text:'ATS score improved +3 pts', sub:'Now at 84 — top 18%', time:'3h ago' },
    { icon:'zap',       tone:'amber', text:'Market alert: Generative AI demand up 42%', sub:'See Market Signals →', time:'Today' },
  ];
  // ...
}
```

**Visual:**
- Bell icon button in header with a red dot badge showing count (4)
- Click toggles dropdown panel (280px wide, right-aligned)
- Dropdown: white card, `border-radius: 16px`, `box-shadow: 0 20px 60px rgba(0,0,0,0.15)`
- Each notification row: icon (colored by tone) + text + sub + timestamp
- "Mark all read" link at top clears the red dot badge
- Click outside to close (use a backdrop div)

**Tones for icons:**
- `brand`: purple `rgba(91,46,255,0.12)` bg
- `gold`: gold `rgba(253,186,45,0.12)` bg
- `green`: teal `rgba(29,158,117,0.12)` bg
- `amber`: amber `rgba(239,159,39,0.12)` bg

---

## Change 7d — Career Score Breakdown

### Purpose
Show judges HOW the Career Score is computed. Adds depth to the Career Intelligence demo step.

### Location
In `CareerProfile`, after the Profile Strength + Skill Gap 2-col section (after the `grid lg:grid-cols-3` block).

### Component: Expandable panel

```
Career Score: 78  ▾ How this is calculated
┌────────────────────────────────────────────┐
│ Profile completeness    22/25  ████████░░  │
│ Skill relevance         19/25  ███████░░░  │
│ Experience quality      18/25  ███████░░░  │
│ Market positioning      19/25  ███████░░░  │
└────────────────────────────────────────────┘
```

**Collapsed state:** Just the header row (score + "How this is calculated" expand link with chevron-down icon).

**Expanded state (toggle on click):**
- 4 sub-score rows, each with label + `X/25` + mini progress bar
- Total: 78/100
- Progress bars: brand-purple fill, slate-100 track, `height: 6px`, `border-radius: 3px`

**Values:**
- Profile completeness: 22/25
- Skill relevance: 19/25
- Experience quality: 18/25
- Market positioning: 19/25

---

## Change 8 — Jobs & Opportunities Improvements

### Purpose
Add depth to the Jobs page without breaking the existing clean card layout.

### 8a. Career Impact Tooltip

Current: Each job card shows "Career impact: High" as a static badge.

**Add:** On hover of the "Career impact" badge, show a small tooltip:
```
Why high impact for you:
• Moves you toward Staff IC path
• +RM 18k salary growth potential
• Builds cross-team leadership gap
```

Implementation: Add a `title` attribute or a small positioned tooltip div that shows on hover. Use CSS `:hover` on the badge.

Tooltip CSS:
```css
.impact-tip { position: relative; }
.impact-tip .impact-tooltip { display: none; position: absolute; bottom: calc(100% + 6px); left: 50%; transform: translateX(-50%); width: 220px; background: #1a0a3d; color: #fff; font-size: 11px; border-radius: 10px; padding: 10px 12px; z-index: 100; pointer-events: none; }
.impact-tip:hover .impact-tooltip { display: block; }
```

### 8b. "Not Interested" Button

On each job card, add a "Not interested" button (×) alongside the existing "Save" button.

- Small ghost button: `text-slate-400`, shows on card hover only
- `onClick`: toast("Preference noted — Autopilot will learn from this", 'x')
- Style: `opacity: 0` by default, `opacity: 1` on card hover (CSS transition)

Implementation note: Job cards don't currently have a hover state class. Add `group` Tailwind class to the card wrapper and use `group-hover:opacity-100` on the button.

### 8c. Compare Mode

Add a "Compare" checkbox to each job card (top-right corner, shows on hover).

When 2+ cards are checked:
- Show a sticky bottom bar: `"Comparing 2 roles — [Compare now →]"` in brand purple
- "Compare now →" click: show a 2-col comparison modal (or toast for prototype)

State: `const [compareIds, setCompareIds] = useState([])` in `JobsOpportunities`.

**Sticky bar:**
```jsx
{compareIds.length >= 2 && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 rounded-2xl shadow-glow text-white font-semibold text-sm z-50"
    style={{background:'#5B2EFF'}}>
    <Icon name="columns-2" size={16}/> Comparing {compareIds.length} roles
    <button onClick={()=>toast('Compare view coming soon','layers')} className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs">Compare now →</button>
    <button onClick={()=>setCompareIds([])} className="text-white/60 hover:text-white"><Icon name="x" size={14}/></button>
  </div>
)}
```

### 8d. Filter Additions

Current filters: fit score, salary, location.

**Add two more filters:**
1. "Career impact: High only" — toggle chip that filters jobs to those with `impact === 'High'`
2. "Not yet applied" — toggle chip that filters to `!applied` jobs

Add `impactFilter` and `notAppliedFilter` boolean state. Both default to `false`.

Filter display: Add these as pill chips in the filter row alongside existing filters.

---

## Change 5d — Application Tracker Tab

### Purpose
Make the Autopilot feel complete by showing a list of all jobs the agent has applied to.

### Location
Add a tab bar to `AutopilotProxy` below the command header (before the preferences grid):

```
[ Agent Activity ] [ Application Tracker ]
```

Default active tab: `Agent Activity` (existing content).

### Application Tracker Content

Mock data:
```js
const TRACKED_APPS = [
  {id:1, role:'Senior Product Designer', company:'Nimbus Labs', fit:94, date:'Jun 14', status:'Interview scheduled', statusTone:'green'},
  {id:2, role:'Head of Design', company:'Finovo', fit:89, date:'Jun 13', status:'Applied', statusTone:'brand'},
  {id:3, role:'Product Design Lead', company:'HealthOS', fit:91, date:'Jun 12', status:'Applied', statusTone:'brand'},
  {id:4, role:'UX Designer III', company:'Orbit Health', fit:76, date:'Jun 11', status:'Rejected', statusTone:'red'},
  {id:5, role:'Senior UX Designer', company:'ByteStack', fit:88, date:'Jun 10', status:'Applied', statusTone:'brand'},
];
```

Each row in the tracker:
- Fit % badge (green if ≥90, brand otherwise)
- Role + company (bold)
- Date applied (muted)
- Status badge (colored by statusTone)
- "View →" link (toast: "Opening {company} application…")

Table-style layout: `grid grid-cols-[auto_1fr_auto_auto_auto] gap-3 items-center`.

Header row: Fit / Role / Date / Status / Action

---

## Architecture Notes

### CSS additions
Add to existing `<style>` block:
```css
.nav-link { position: relative; transition: background 150ms; border-left: 3px solid transparent; }
.nav-link:hover { background: rgba(255,255,255,0.06); border-left-color: rgba(255,255,255,0.2); }
.nav-link.active { background: rgba(91,46,255,0.18); border-left-color: #5B2EFF; }
.nav-gold-dot { width: 7px; height: 7px; border-radius: 50%; background: #FDBA2D; }
.hover-lift { transition: transform 180ms ease, box-shadow 180ms ease; }
.hover-lift:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.10); }
.skill-badge { transition: transform 120ms, box-shadow 120ms; }
.skill-badge:hover { transform: scale(1.05); box-shadow: 0 2px 8px rgba(91,46,255,0.20); }
.impact-tip { position: relative; cursor: default; }
.impact-tip .impact-tooltip { display:none; position:absolute; bottom:calc(100% + 6px); left:50%; transform:translateX(-50%); width:220px; background:#1a0a3d; color:#fff; font-size:11px; line-height:1.5; border-radius:10px; padding:10px 12px; z-index:100; pointer-events:none; white-space:normal; }
.impact-tip:hover .impact-tooltip { display:block; }
```

### Mock data additions
`TRACKED_APPS` array added before `AutopilotProxy`.

### No new dependencies
All components are plain React function components.

### File size projection
Batch C adds approximately 150–250 lines. Final size ~4,950–5,100 lines.
