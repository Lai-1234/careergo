# CareerGo Batch B — Design Spec
**Date:** 2026-06-15  
**Scope:** Change 4 (Market Intelligence Hub), Change 5 (Autopilot 2.0), Change 7 (Career Intelligence)  
**File:** `c:\careergo\careergo.html` (~4,600 lines after Batch A)  
**Batch C** covers Changes 6, 8.

---

## Design System Reference

Same tokens as Batch A — all new components use these:

| Token | Value |
|-------|-------|
| `--brand` | `#5B2EFF` |
| `--brand-light` | `#8A63FF` |
| `--gold` | `#FDBA2D` |
| `--teal` | `#1D9E75` |
| `--danger` | `#E24B4A` |
| `--amber` | `#EF9F27` |
| `--bg-deep` | `#0d0222` |
| `--bg-purple` | `#1A0146` |

---

## Change 4 — Market Intelligence Hub

### Purpose
Merge the Fair Pay Engine and Market Pulse modules into a single **Market Intelligence** module with two tabs. Reduces nav clutter, creates a richer unified view of the user's market position.

### Navigation changes
Update `CANDIDATE_NAV`:
- Remove `{id:'pulse',...}` entry
- Update `pay` entry: `{id:'pay',icon:'bar-chart-2',tk:'appMarket',tourStep:3}`
- Update `jobs` entry: add `tourStep:4` (was `null`)

Add `data-tour="step-4"` attribute to the **Jobs** sidebar nav button (was previously on the pulse nav button).

Update `TOUR_STEPS`:
- Step index 2 (step-3): change title to `"Understand your market position"`, body to `"See your real salary range, skill payoffs, and live market signals — all in one place. Know exactly what you're worth and where the market is heading."`
- Step index 3 (step-4): change title to `"Browse and apply to matched jobs"`, body to `"Every opportunity is scored against your profile. Filter by fit, salary, or growth signal. Apply in one click — Autopilot handles the rest for 90%+ matches."`

### New component: `MarketIntelligence`

Replaces both `FairPayEngine` and `MarketPulseModule`. Rendered when `view === 'pay'`.

**Tab bar** (2 tabs):
- `my-value` → "My Value" with gauge icon
- `signals` → "Market Signals" with activity icon

Default tab: `my-value`

---

### 4a. My Value tab

Preserves Fair Pay Engine content with these upgrades:

**Header:**
```
Market Value · Product Designer in KL
RM 55k ─────●────────────── RM 140k
              RM 92k (you)
```
- Show `USER.marketValue` in RM (not $)
- "You're in the top 26% for your seniority" — computed from `(USER.marketValue - USER.marketMin) / (USER.marketMax - USER.marketMin)` as a percentile string

**Location switcher:** Keep existing 3-location buttons but style consistently with Batch A tokens. Show floor/fair/ceiling in a 3-column grid below.

**Skill Payoff Calculator:** Keep existing functionality. Change all `$` to `RM`. Change label from "Skill Payoff Calculator" to "Skill Payoff — what each skill adds to your salary".

**Compensation Breakdown:** Keep as-is.

**Pay Growth Projection:** Keep as-is.

---

### 4b. Market Signals tab

Preserves Market Pulse content with these upgrades:

**Header:** Remove the separate "Market Pulse" heading (already have the tab label). Add a last-updated timestamp: `"Data as of today · 847 sources"`.

**Job Market Ticker:** Keep as-is (already clean).

**Skill Demand Index:** Cross-reference `USER.skills` against `PULSE_SKILLS`. If a skill in the panel matches → show `"You have this ✓"` green badge (same pattern as Skills Growth tab in Batch A).

**Industry Growth Tracker:** Keep as-is.

**Location Opportunity Index:** Keep as-is.

**Future Outlook:** Keep as-is.

---

## Change 5 — Autopilot 2.0

### Purpose
Transform the Autopilot from a functional utility into a "mission control" experience — the kind of UI that makes a judge say "wow, this feels real".

### Layout
Full-page dark-accented layout. **No separate Card wrapper for the radar** — the animation is the hero of the module.

**Top section — Command Header:**
- Full-width dark banner: `linear-gradient(135deg, #1A0146, #0d0222)`
- Left: "Autopilot" heading + "AI Job Agent" sub-label in muted white
- Center: large animated radar visualization (active/idle state)
- Right: 4 live stats in a 2×2 grid:
  - Jobs scanned (large number, gold)
  - Auto-applied (large number, teal)
  - Held by rules (large number, amber)
  - Success rate (%, brand purple) — computed as `appliedCount / Math.max(1, scanned) * 100`, shown as `"XX%"`

**Radar animation upgrade (active state):**
- Currently: 3 concentric pulse rings (kept)
- Add: small dot "pings" that appear at random angles around the radar and fade out (pure CSS animation using `@keyframes`)
- Add `.radar-ping` CSS class for the ping dots

**Status pill:** "SCANNING · Live" (green) or "PAUSED" (slate), positioned above the radar

---

### Preferences panel (left, below header)
Redesign from basic list to a clean card layout:
- Section title: "Your Rules" with a lock icon
- Each setting in a row: icon + label + control (slider or toggle)
- Pay range: show `RM {minPay/1000}k+` label (not `$`)
- Toggles: visual pill toggle (not checkbox) — use existing toggle pattern
- "Rules saved" → styled as a small teal confirmation badge with check icon

---

### Activity Feed (right, below header)
Redesign the "Daily Update Inbox":
- Rename to "Agent Activity Log"
- Each item:
  - Status icon: green check (applied) or amber shield (held) or red X (skipped)
  - Company + role (bold)
  - Match % badge (styled like jobs module)
  - One-line note explaining the action
  - Timestamp (right-aligned, muted)
- Footer: "Showing today's activity · {scanned} scanned · {appliedCount} applied · {heldCount} held"

---

## Change 7 — Career Intelligence

### Purpose
Upgrade the Career Profile module from a profile editor into a **Career Intelligence Report** — the centrepiece of the product. This is the first thing users see after onboarding and the "source of truth" for the whole OS.

### New top section: Intelligence Header

**Replace** the current header row (title + Import LinkedIn + Download PDF buttons) with a full-width intelligence banner:

```
┌─────────────────────────────────────────────────────────┐
│  Career Intelligence Report                             │
│  Aisha Rahman · Senior Product Designer · KL           │
│  Last updated: today                                    │
│                                                         │
│  [78 Career Score] [84 ATS] [71 Readiness] [RM 92k]   │
│  ──────────────────────────────────────────────────     │
│  "Your profile is strong — one gap is holding you back" │
│                                                         │
│  [Import LinkedIn]  [Download PDF]                      │
└─────────────────────────────────────────────────────────┘
```

Layout:
- Background: `linear-gradient(135deg, #1A0146 0%, #0d0222 60%, #1a1060 100%)` (same as DashHero)
- 4 score chips in a row (white/15 background, rounded-full, white text)
- AI insight line in gold: `"Your profile is strong — one gap is holding you back from your next level."`
- Action buttons below, styled as ghost buttons (white border)

### Score cards section

**Replace** the existing 4 ScoreRing cards grid with a more informative breakdown:

2-column layout:
- **Left (2/3 width):** "Profile Strength" — a vertical list of 5 dimensions:
  1. Work history completeness (shows % complete)
  2. Skills breadth (X of Y skills verified)
  3. ATS optimisation (score + "X keywords missing")
  4. Market alignment (matches Y active roles)
  5. Interview readiness (from practice history)
  
  Each dimension: label + progress bar + one-line insight + score number (right-aligned)
  
- **Right (1/3 width):** "Skill Gap Analysis" — keep existing 3-gap card format but upgrade styling:
  - Each gap card: skill name + impact badge + "for: [target role]" + learning timeline
  - Add a small "Start learning" link (`onClick` → `setView('companion')`)

### Editor and Preview sections

Keep the existing left-column editor and right-column preview unchanged. These are the core functionality.

### AI Suggestions card

Keep but upgrade header from "AI Suggestions" to `"Vera's Recommendations · 4 actions"` with sparkles icon.

---

## Architecture Notes

### No new dependencies
All new components are plain React function components.

### Navigation update — critical
When `view === 'pulse'` is set anywhere, it should setView('pay') immediately. Add a useEffect inside `CandidateApp`:
```jsx
useEffect(()=>{ if(view==='pulse') setView('pay'); },[view]);
```

### Mock data additions
No new mock data needed — all data already exists in USER, PULSE_SKILLS, PULSE_JOBS, PAYOFF_SKILLS, JOBS, INBOX_ITEMS.

### LANG key update
The `appMarket` translation key needs to be added to `LANG`:
```js
LANG.en.appMarket = 'Market Intelligence'
LANG.bm.appMarket = 'Perisikan Pasaran'
```

### File size projection
Batch B adds approximately 300–450 lines (replacements, not additions). Final size ~4,700–4,900 lines.
