# CareerGo Batch A — Design Spec
**Date:** 2026-06-14  
**Scope:** Change 1 (Onboarding Tutorial), Change 2 (Dashboard Redesign), Change 3 (Career Companion Redesign)  
**File:** `c:\careergo\careergo.html` (~4,000 lines, React 18 + Babel Standalone + Tailwind CDN)  
**Batch B** covers Changes 4, 5, 7. **Batch C** covers Changes 6, 8.

---

## Design System Reference

All new components use these tokens (no hardcoded hex):

| Token | Value |
|-------|-------|
| `--bg-deep` | `#0d0222` |
| `--bg-purple` | `#1A0146` |
| `--brand` | `#5B2EFF` |
| `--brand-light` | `#8A63FF` |
| `--gold` | `#FDBA2D` |
| `--teal` | `#1D9E75` |
| `--danger` | `#E24B4A` |
| `--amber` | `#EF9F27` |
| `--glass-bg` | `rgba(255,255,255,0.07)` |
| `--glass-border` | `rgba(255,255,255,0.12)` |

App layout: dark sidebar (`#1A0146`) + white/light main content area. This split is preserved.

---

## Change 1 — Onboarding Tutorial

### Purpose
Give first-time users a guided tour of the 5 core modules + dashboard, surfaced automatically on first login. Skippable. Never repeats after completion.

### Persistence
- Check on `CandidateApp` mount: `localStorage.getItem('cg_tour_done')`
- If absent → set `tourActive = true` (React state)
- On tour complete or skip → `localStorage.setItem('cg_tour_done', '1')`, set `tourActive = false`
- "Take the tour" button in sidebar/settings can force `tourActive = true` regardless of flag

### Component: `OnboardingTour`
Rendered at the top of `CandidateApp`'s JSX tree, conditionally on `tourActive`.

**Backdrop:** Full-screen fixed overlay, `rgba(0,0,0,0.72)`, `z-index: 9000`. Blocks all pointer events on the page underneath.

**Spotlight ring:** On each step change, call `document.querySelector('[data-tour="step-N"]').getBoundingClientRect()`. Render a positioned `div` matching those coords + 8px padding, with:
```css
box-shadow: 0 0 0 4px #FDBA2D, 0 0 0 9999px rgba(0,0,0,0.72);
border-radius: 12px;
pointer-events: none;
z-index: 9001;
```
The spotlight element itself must have `position: relative; z-index: 9002` so it visually lifts above the backdrop.

**Tooltip card:** Positioned next to the spotlight. Placement rules:
- Steps 1–5 target sidebar items (left edge of viewport) → tooltip appears to the **right** of the spotlight
- Step 6 targets the Career Futures heading in the main content area (center) → tooltip appears **above** the spotlight
- Width: 320px. Style: white background, `border-radius: 16px`, `box-shadow: 0 20px 60px rgba(0,0,0,0.4)`

Contents:
- Progress dots: `● ○ ○ ○ ○ ○` — filled dot = current step, hollow = remaining. Use `#5B2EFF` for filled, `rgba(0,0,0,0.2)` for hollow.
- Step title: `font-size: 17px; font-weight: 700; color: #1a0a3d`
- Step body: `font-size: 14px; color: #4B5563; line-height: 1.6`
- CTA button: gold (`.cta-gold`) — "Got it →" for steps 1–5, "Start exploring →" for step 6
- "Skip tour" link: top-right of card, `font-size: 12px; color: #9CA3AF`

### Tour Steps

| Step | `data-tour` target | Title | CTA |
|------|--------------------|-------|-----|
| 1 | `step-1` on Career Profile sidebar nav item | "Start here — build your Career Profile" | Got it → |
| 2 | `step-2` on Career Companion sidebar nav item | "Meet Coach Vera, your AI career mentor" | Got it → |
| 3 | `step-3` on Fair Pay sidebar nav item | "Know your true market value" | Got it → |
| 4 | `step-4` on Market Pulse sidebar nav item | "Track where the market is moving" | Got it → |
| 5 | `step-5` on Autopilot sidebar nav item | "Let CareerGo hunt for you" | Got it → |
| 6 | `step-6` on Career Futures section heading | "You're all set. Your Career OS is live." | Start exploring → |

Body copy for each step: verbatim from the original brief (preserved in implementation).

### Target attribute placement
Add `data-tour="step-N"` to each sidebar nav item `div` and to the Career Futures section heading. No visual change when tour is inactive.

### Transition
Step change animates the tooltip: `opacity 0→1, translateY 8px→0`, 200ms ease.

---

## Change 2 — Dashboard Redesign

### 2a. Hero Banner

**Replaces:** flat purple `Good morning, Aisha` header div.

**New component: `DashHero`**

Layout: full-width card, `border-radius: 20px`, gradient mesh background:
```css
background: linear-gradient(135deg, #1A0146 0%, #0d0222 55%, #1a1060 100%);
```
Left side (flex-1):
- Greeting: `"Good morning, Aisha 👋"` — `font-size: 22px; font-weight: 700; color: white`
- Status line 1: `"Your ATS score is strong — you're in the top 18% for Product Designers in KL."` — `color: rgba(255,255,255,0.7); font-size: 14px`
- Status line 2 (if gap exists): `"One skill gap stands between you and a RM 145k role."` — same style
- 3 action buttons below, determined by user state (show max 2 + always one):
  - `USER.profileComplete === false` → gold "Complete your profile" button (highest priority)
  - `USER.newMatches > 0` → brand purple "View N new matches" button
  - Always: ghost/outline "Ask Coach Vera" button
  - If `profileComplete === true` AND `newMatches === 0` → show only the "Ask Coach Vera" button

Right side (fixed width ~180px):
- **`CareerHealthRing`**: composite SVG ring. Score = average of `USER.careerScore`, `USER.atsScore`, `USER.readiness`. Rendered as SVG circle with stroke-dashoffset animated from 0 to value on mount (1.2s ease-out). Label below: "Career Health" in white/60, score number in white/bold.

### 2b. Metric Cards Row

**Keeps:** existing 4-card layout with `ScoreRing` per card (Career Score, ATS Score, Readiness, Market Value).

**Adds to each card:**
- Background arc: a second SVG circle at lower opacity (`rgba(255,255,255,0.08)`) behind the score ring — gives the "track" effect
- Delta badge: small pill below the ring — `"+3 this week"` in green (`#1D9E75`) on `rgba(29,158,117,0.12)` background. Data sourced from `USER.weeklyDeltas` object (add to mock data)
- Tooltip icon: `ⓘ` character positioned top-right of each card. On hover, show a small tooltip with plain-English explanation:
  - Career Score: "Overall measure of your career readiness, profile strength, and market positioning."
  - ATS Score: "How likely your resume is to pass automated screening filters used by most employers."
  - Readiness: "How prepared you are for interviews and applications based on your practice history."
  - Market Value: "Your estimated salary range based on your verified skills and current market demand."
- Shared visual connection: cards sit on a single `border-radius: 16px` container with `background: #F8F7FF` instead of individual card backgrounds — unifies them as one system block.

### 2c. Activity Cards Row

**Keeps:** 4 cards — Applications, Saved Jobs, Interviews, Streak.

**Adds:**
- Each card: `cursor: pointer`, `onClick` navigates via `go()`:
  - Applications → `go('app', {tab:'jobs'})`
  - Saved Jobs → `go('app', {tab:'jobs'})`
  - Interviews → `go('app', {tab:'companion'})`
  - Streak → `go('app', {tab:'profile'})`
- Urgency pill on Applications card: `"3 closing this week"` in amber (`#EF9F27`) on `rgba(239,159,39,0.12)` — positioned below the main number
- Next interview pill: `"Next: Mon 10am"` shown as a countdown-style pill with a clock icon
- Streak card: replace static streak number display with a mini progress bar (`12 / 30 day goal`), add flame icon (Lucide `flame`) in gold

### 2d. Career Futures Section

**Replaces:** the small sidebar-style career paths widget.

**New layout:** full-width section below activity cards. White background area, padding `32px`.

Section header:
- Heading: `"Your Career Futures"` — `font-size: 20px; font-weight: 700; color: #1a0a3d`
- Subtitle: `"Three realistic paths from your current profile — with honest trade-offs."` — `color: #6B7280; font-size: 14px`
- Right-aligned: `"Run full simulation →"` link that calls `go('app', {tab:'companion', subTab:'planning'})`

Three path cards side by side (`grid-cols-3 gap-4`), data from `CAREER_PATHS[USER.role][0..2]`:
- Left border: 4px solid — teal for Low risk, amber for Med risk, brand-purple for Higher risk
- Card contains: risk badge, path name, transition arrow line (`"→ Staff Product Designer"`), salary range in bold, timeline, probability bar (full-width, coloured), one trade-off sentence in italic/muted
- No hover needed (static display)

### 2e. Coach Vera Widget

**Location:** right sidebar panel in dashboard.

**Replaces:** generic quote + missions list.

**New layout:**
- Header row: Vera's avatar (40px circle, `linear-gradient(135deg, #5B2EFF, #8A63FF)`, sparkle icon inside) + name "Coach Vera" + green online dot (`#1D9E75`, 8px, pulsing)
- Daily insight: one specific string referencing USER data — `"Your ATS score is 72 — adding quantified results to 2 experience bullets would push you to 80+, putting you in the top 10% for your role."`  — `font-size: 13px; color: #374151; line-height: 1.6`
- Next mission block: mission title + XP reward chip (`+120 XP` in gold), due date
- `"Chat with Vera →"` button: brand purple, full-width, `border-radius: 10px`

---

## Change 3 — Career Companion Redesign

### 3a. Coach Vera Header

**Replaces:** the plain title bar above the chat area.

New header block (inside `CareerCompanion`, above the tab bar):
- Left: Vera avatar (same 40px circle as dashboard widget) + green dot
- Center: dynamic mode label based on active tab:
  - Planning tab → `"Career Planning mode"`
  - Skills tab → `"Skills Coach mode"`
  - Interview tab → `"Interview Prep mode"`
  - Font: `font-size: 15px; font-weight: 600; color: #1a0a3d`
- Below mode label: context line — `"Based on your profile: Product Designer · 5 yrs · Fintech · KL"` — `font-size: 12px; color: #6B7280`

### 3b. Career Planning Tab

**On mount (first render only):** inject Vera's opening message into the chat history as an AI message. Message text:

> "Hi Aisha 👋 I've reviewed your full profile. You're strongest in craft & design systems — top 12% for your role in KL.
>
> The one gap before your next raise: no cross-team project ownership on your record. Want me to build you a 90-day plan to fix that, or would you rather explore the Staff IC vs Design Manager fork first?"

Below the opening message, render 3 quick-reply chips:
- `"Build my 90-day plan"` 
- `"Staff IC vs Design Manager — show me both"`
- `"What's blocking my next raise?"`

Each chip, when clicked: appends it as a user message + appends a canned Vera response to the chat. Use existing chat message rendering pattern.

**Roadmap panel:** update to show `USER.currentLevel` ("Senior Product Designer") and next milestone ("Staff Product Designer — est. 14 months"). Weekly missions reference actual gap: "Lead a cross-team initiative (completes your leadership gap)".

### 3c. Skills Growth Tab

**Header:** `"Skills Growth — personalised for Aisha's path to Design Manager"` — replaces generic title.

**Each checklist item** adds a WHY line below the skill name:
```
Team leadership · Needed for Design Manager · High demand (+38%) · Learn in 4–6 mo
```
Style: `font-size: 11px; color: #6B7280`

**Path filter chips** above the list: `[ All paths ] [ Staff IC ] [ Design Manager ] [ Product Manager ]`  
Clicking a chip filters the list (controlled by `skillFilter` state). Each checklist item has a `paths: ['design-manager', 'staff-ic']` field in mock data.

**Demand signals panel:** cross-reference `USER.skills` array against `PULSE_SKILLS`. If a skill in the panel matches a user skill → show `"You have this ✓"` green badge. If an adjacent skill (defined in mock data) to a user skill → show `"You're close"` amber badge.

### 3d. Interview Coach Tab

**Before any question is shown:** render an "Interview Setup" panel (replaces the blank state):

```
Preparing for:    [ Senior Product Designer at Nimbus Labs ▼ ]  (pre-filled from JOBS[0])
Interview type:   [ Behavioural ] [ Technical ] [ Portfolio Review ]  (toggle chips, default: Behavioural)
Focus area:       [ Leadership ] [ Design Process ] [ Stakeholder Management ]  (toggle chips)
```

"Start Practice →" button below the setup panel triggers question generation and hides the setup panel.

**Generated question:** hardcoded per combination of type + focus (demo data, not truly dynamic). Example for Behavioural + Leadership:
> "Nimbus Labs focuses on B2B SaaS. Tell me about a time you had to align multiple stakeholder types around a design decision for a complex enterprise workflow."

**Post-answer feedback panel** (shown after "Get AI Feedback" click):
Four dimension blocks:
1. **STAR Method** — score bar + one-line assessment
2. **Specificity** — score bar + one-line assessment  
3. **Relevance to role** — score bar + one-line assessment
4. **Confidence signals** — score bar + one-line assessment

Below dimensions:
- `"Example answer"` expandable block with a rewritten model response
- `"Try again with this structure"` button — clears answer textarea, keeps question

**Readiness panel (right side):** replace static scores with a mini session tracker: "Session 3 · 5 questions answered · Avg score 74%". Show a small line chart (SVG, 5 data points) of scores across sessions.

---

## Architecture Notes

### No new dependencies
All new components are plain React function components using existing patterns. No new CDN libraries.

### Data additions to `USER` mock object
```js
USER.weeklyDeltas = { careerScore: +3, atsScore: +0, readiness: +5, marketValue: +2 }
USER.newMatches = 3
USER.profileComplete = true
USER.currentLevel = 'Senior Product Designer'
USER.nextMilestone = 'Staff Product Designer'
USER.skills = ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Stakeholder Management']
```

### `data-tour` attribute placement
Added to sidebar nav items in `CandidateApp`'s sidebar render. No other structural changes to the sidebar.

### Tab navigation
`CareerCompanion` already uses a `tab` state for the planning/skills/interview tabs. The `go('app', {tab:'companion'})` call is confirmed by existing routing. **Verify during implementation:** whether `go()` opts threading already supports deep-linking to a specific tab (`subTab`); add the opt-pass-through if absent.

### File size projection
Batch A adds approximately 400–600 lines. Final size ~4,400–4,600 lines — manageable in a single file.
