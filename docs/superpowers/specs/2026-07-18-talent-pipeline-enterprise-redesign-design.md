# Talent Pipeline Enterprise Redesign — Design

## Context

The Talent Pipeline page (`renderEmployerTalentPipeline`, app.js) was built earlier this session across 6 phases (compact header/status bar, redesigned Kanban board and candidate cards, drag-and-drop, redesigned drawer, floating Vera assistant, responsive breakpoints). This spec is a second pass on the same page, driven by a detailed 18-point brief asking for an enterprise-ATS-grade cleanup: remove duplicated controls, cut information density, make cards collapse-by-default, fold Vera further into the workflow instead of occupying dedicated page space, and tighten typography/spacing.

**Scope:** UI/UX only, Talent Pipeline page only. `DATA.candidates`/`DATA.employerRoles` schema, routing, and the existing action logic (`moveStage`, `runCandidateAction`, `primaryActionFor`, etc.) are preserved unchanged — only how they're triggered and displayed changes. No other page is touched. No new dependencies.

**Resolved up front** (per your answers):
1. The floating Vera button opens **one panel with two tabs** — "Ask" (free-text query) and "Insights" (proactive Hiring Copilot cards) — replacing both the old page-body Vera panel and the old 6-button quick-action panel from Phase 5.
2. Vera's query engine is a **pattern-matched router over real data** (deterministic, same "mock but honest" convention as every other AI feature in this app), with an explicit fallback for unrecognized questions rather than a guessed answer.
3. Nothing is deleted outright — the Phase 5 quick-action generators (`summarizeCandidateResume`, `generateInterviewQuestions`, `explainMatchScoreText`, `compareWithTopCandidatesText`, `recommendNextStageText`, `draftCandidateEmailText`) are all reused as recognized query patterns in the new Ask tab, per "preserve all current features."

## Current state → target state (quick map)

| Area | Today | Target |
|---|---|---|
| Card actions | Review/primary + "More" button + 6-icon bottom toolbar | One primary CTA + adjacent `⋮` overflow (menu opens left) |
| Header controls | Role select, Search, Filter, Sort, Vera | Board/List toggle, Filter, (Sort removed), Vera |
| Card state | Always fully expanded | Collapsed by default (name/role/match only), click to expand |
| Column width | Fixed 280px, horizontal scroll | ~230px, all 6 stages fit without horizontal scroll on desktop |
| Vera presence | Big "Vera Hiring Assistant" panel + "Today's Actions" card, both always visible | Compact "Today's Priority" (max 3 + View All), per-card "Vera Recommended" badge + info popover, floating panel |
| Floating Vera panel | 6 fixed action chips, single-candidate context | Ask tab (free text) + Insights tab (6 Hiring Copilot cards) |

## Phase 1 — Header & controls consolidation (brief items 3, 4)

- Delete the Sort button and its dropdown entirely (`sortOpen`, `sortBy` state, `renderBoard`'s sort step in `filtered()` all removed — board falls back to a fixed, sensible order: highest fit first within each column, which is what `sortBy: "fit"` already defaulted to, so behavior barely changes for the common case).
- Header control order becomes: **Board | List** (existing view toggle, unchanged) — **Filter** — **Vera**. Role select and Search stay (they're not duplicated with anything and the brief doesn't ask to remove them), just re-ordered so Filter sits directly beside the Board/List toggle per the brief's explicit instruction.
- Filter panel content (`stageFilterX`, `sourceFilterX`, `ownerFilterX`, `minFit`) is unchanged — only its trigger button's position moves.

## Phase 2 — Candidate card: collapsed by default, compact columns (brief items 5, 6, 7, 8)

**Columns:** `.emp-pipeline-col` fixed width goes from 280px → 232px (`6 × 232 + 5 × 8px gaps = 1432px`, fits a 1440px+ desktop viewport without horizontal scroll; below that the existing responsive breakpoints from Phase 6 — 2-up tablet grid, 1-up mobile stack — already handle overflow, unchanged). `.emp-pipeline-board` gap 12px → 8px to match the 8px spacing system.

**Collapsed state** (default) shows exactly three lines, no actions, no icons:
```
Daniel Lim
Junior Data Analyst
88%
```
Match score moves to a small subtle badge top-right (smaller font, tone-colored text on a faint tint background, not a solid pill) — de-emphasized relative to the name per item 8's hierarchy (Name > Role > Location > Match).

**Expanded state** (click anywhere on the card, or Enter/Space when focused — same card keeps its existing `tabindex="0" role="button"` and drag-and-drop/arrow-key stage-move behavior unchanged): reveals, in order:
- Skill chips only, no "Top"/"Missing" section headings — top skills as plain pills, a small inline "Missing" word (de-emphasized, not a header) directly before any missing-skill pills in red tone, omitted entirely if nothing's missing.
- One-line trimmed insight (`c.strength`), no long paragraph.
- Vera Recommended badge + info icon, if this card is the currently-recommended one (Phase 4 below) — not shown at all on cards that aren't recommended, so it never competes with the skill/insight content.
- Next action value only (icon + text), no "Next Action" label.
- A small **read-only** note preview ("2 notes · latest: ...") if `c.notes.length`, not an editable notes field — editing notes stays in the drawer (`data-drawer-tab="notes"`) so there's exactly one place to write a note, consistent with the brief's "never two controls for one task" rule.
- Primary CTA + `⋮` overflow, 8px apart, same height (Phase 3).

Collapse/expand state is per-card, independent (`expandedCandidateIds: Set`), toggled on card click — except clicks on the primary button, overflow button/menu, or match-badge popover trigger, which `stopPropagation()` so they don't also toggle expand/collapse.

Bottom icon toolbar (`.emp-cand-quick-actions`, the 6-icon hover row) is deleted entirely; its 6 actions (resume, open-profile, move-stage, message, interview-questions, summarize) are absorbed into the overflow menu (Phase 3) — no functionality lost, just one fewer place to find it.

## Phase 3 — One primary action + overflow menu (brief items 1, 2, 3)

Card action row becomes exactly:
```
[ Review ]  [ ⋮ ]      ← 8px gap, identical height (36px, .btn-sm — see Phase 6 note on the 44px button-height instruction)
```
`⋮` is `aria-haspopup="menu"`; the popup anchors so its **right edge aligns with the button's right edge**, opening toward the left (`right: 0` positioning, same technique already used for `.emp-cand-match-popover`) so it never gets clipped by the viewport edge on the rightmost column.

**Overflow menu — fixed base list**, built from `menuActionsFor(c)` rewritten to always offer the brief's items, each backed by existing (or minimally-extended) logic:

| Menu item | Wiring |
|---|---|
| View Profile | existing `review` action → opens drawer, Profile tab |
| Open Resume | existing `resume` quick-action → opens drawer, Documents tab |
| Move Stage | opens a small nested picker listing the other stages (reuses the existing `move:${stage}` → `moveStageWithUndo` action, just nested under one entry instead of N flat "Move to X" rows) |
| Send Message | existing `message` action (today: "coming in a future update" toast) — unchanged |
| Schedule Interview | existing `schedule`/`reschedule` pendingAction flow — label reads "Schedule Interview" for New/Shortlisted, "Reschedule Interview" for Interview stage; omitted once an offer/hire has happened |
| Generate Interview Questions | existing `generateInterviewQuestions(c)` + `openCandidateAiModal` — unchanged |
| Compare Candidate | existing `compare` action (today: "coming in a future update" toast) — unchanged |
| Archive | **new**: sets `c.archived = true`, removes it from `filtered()`/board immediately (reuses the existing `archived` field already on every mock candidate and already respected by `activeList()`), with an undo toast (`moveStageWithUndo`'s undo-toast pattern, not a stage change — a small dedicated `archiveWithUndo(c)`) |
| Reject | existing `reject` pendingAction flow — now offered from every stage (today it's conditional per-stage); "Hired" is the one stage it's hidden for, since rejecting a hired candidate isn't a real state |
| Copy Candidate Link | **new**: `navigator.clipboard.writeText` of a deep link (`${location.origin}${location.pathname}#pipeline/${c.id}`, matching this router's actual `#view/id` hash format from `employerNavigateTo`/`parseEmployerHash` — confirmed by reading the router, not guessed) + confirmation toast |

Items that are already the stage's **primary CTA** (Review, Open Interview, Compare & Decide, Follow Up, View Onboarding, per `primaryActionFor`) are never duplicated in the overflow menu — this is the core "no two controls for one task" fix.

## Phase 4 — Today's Priority + per-card Vera badge (brief items 9, 10)

- "Today's Actions" card → **"Today's Priority"**: same `actionItems` data, but only the first 3 shown as a plain checklist (no card chrome beyond a thin container), plus a "View All" link. "View All" opens a small modal listing the rest (reuses `openEmpModal`, not a new page).
- The big "Vera Hiring Assistant" panel (greeting + priority-candidate card + insight fallback) is **deleted** from the page body entirely. Its one genuinely useful signal — "which candidate needs attention most" — moves onto the board itself:
  - `pickPriorityCandidate(filtered())` (already exists, already unit-tested) determines the single most-recommended candidate in the current view.
  - That candidate's card shows a small `✨ Vera Recommended` badge (purple, `--emp-ai`) next to an info icon, visible in both collapsed and expanded states (it's the one piece of Vera signal important enough to survive collapsing).
  - Clicking the info icon opens a small popover (not the drawer, not a modal) with: overall match %, 2-3 bullet reasons (reusing `c.strength` + `computeMatchBreakdown`'s strongest dimension + missing must-have skill, mirroring the existing `explainMatchScoreText` logic), and a one-line recommendation (`primaryActionFor(c).label`). Matches the brief's worked example almost verbatim.

## Phase 5 — Floating Vera panel rebuild (brief items 11, 12)

Replaces the current `.emp-vera-fab-panel` (6 fixed chips, single-candidate context) with a two-tab panel: **Ask** and **Insights**. `veraPanelTab` state (`"ask" | "insights"`, default `"ask"`).

### Ask tab
A text input + submit, transcript-free (single question → single answer, matching this app's other "ask Vera" surfaces) — new pure function `answerPipelineQuery(question, candidates, roles)`:
- Normalizes the question (lowercase, trim).
- Runs an ordered list of **recognized patterns**, first match wins:
  - Name lookup ("find X", "who is X", or the name appearing standalone) → candidate summary card.
  - "strongest/best <skill>" → highest-fit candidate with that skill.
  - "who is ready for offer" / "ready to hire" → candidates in Final Review with no `finalReview.openQuestions` or already in Offer stage.
  - "who has interview <today/tomorrow/this week>" → candidates whose `interview.nextInterview.date` matches (matched against the mock data's literal relative-date strings, e.g. "Tomorrow" — this app's interview dates aren't real calendar dates, so the match is honest string matching, not a fabricated date parser).
  - "compare X and Y" → reuses `compareWithTopCandidatesText`-style side-by-side output for exactly those two named candidates.
  - "why did X score <n>%" / "explain X's score" → reuses `explainMatchScoreText(c)`.
  - "missing <skill>" / "who's missing <skill>" → candidates whose role lists that skill as must-have and who lack it.
  - "fresh graduate" / "strongest fresh graduate" → filters `careerStage === "Fresh Graduate"`, ranks by fit.
  - "who should I interview first" / "recommend next hiring action" → `pickPriorityCandidate` + reasoning.
  - "why is this role attracting few applicants" → small heuristic over the current role's candidate count vs. its `mustHaveSkills.length`/seniority (reuses the same "too many must-haves" signal as `getRequirementWarnings`).
  - "summarize today's pipeline" / "summarize the pipeline" → counts per stage + the 3 Today's Priority items.
  - "which candidates are risky" → candidates with a `concern` set, or feedback overdue, or an interview with no scheduled next round.
  - "generate interview questions for X" → reuses `generateInterviewQuestions(c)`.
  - "draft an email to X" / "draft email for X" → reuses `draftCandidateEmailText(c)`.
  - "summarize X" / "summarize X's resume" → reuses `summarizeCandidateResume(c)`.
  - "should I hire X" → combines `computeMatchBreakdown` + `c.concern` into a short recommend/caution verdict.
- No pattern matches → an honest fallback response listing a few example questions it does understand, never a fabricated answer.

This is a pure function (`{candidates, roles} → {answer, relatedCandidateIds}`), fully unit-testable without touching the DOM — TDD'd the same way as every other decision function this session.

### Insights tab
Six fixed cards, each with **Why / Confidence / Suggested Action / Action button**, computed from the current filtered pipeline (new pure function `computePipelineInsights(candidates, roles)`):
1. **Candidate Recommendation** — `pickPriorityCandidate` result, "Why" = its top strength, action button opens that candidate's drawer.
2. **Hiring Bottleneck** — the stage with the most candidates stuck longest (reuses the existing "stalled in interview" signal, generalized across stages), action button filters the board to that stage.
3. **Skill Gap** — the most common missing must-have skill across all candidates in view, action button filters to candidates missing it.
4. **Salary Competitiveness** — reuses `computeSalaryBenchmark`-style logic (same benchmark table already built for the job wizard) against the role's candidates' `salaryExpectation`, action button opens the role.
5. **Time-to-Hire Prediction** — a mock estimate from the current stage distribution (e.g., candidates-in-final-stages vs. total), consistent with this app's "simulated, deterministic" data convention — no invented precision beyond a rounded week estimate.
6. **Pipeline Health** — reuses the existing offer-acceptance-rate / stalled-count numbers already computed in `draw()`, just re-presented as a card with a verdict instead of a plain stat line.

Each card's "Confidence" is a simple deterministic High/Medium/Low derived from how much underlying data supports it (e.g., "High" when ≥3 candidates inform the signal, "Low" when it's based on 1).

## Phase 6 — Typography, spacing, and consistency pass (brief items 13-17)

Applied **only within Pipeline-scoped CSS classes** (never the shared `--emp-title-*`/`.btn`/`.btn-sm` tokens used across the rest of the Employer OS, to honor "don't redesign the whole application"):

| Element | Class | Size |
|---|---|---|
| Page title | `.emp-pipeline-header h1` | 36px / 700 (override, was 26px via shared token) |
| Section titles | `.emp-pipeline-section-head h2` | 22px / 600 (was 26px) |
| Column titles | `.emp-pipeline-col h3` | 18px / 600 (already close, confirmed) |
| Candidate name | `.emp-cand-name` | 18px / 600 |
| Role | `.emp-cand-position` | 15px / 400 |
| Body / helper | existing `--emp-body` (14px) / `--emp-body-sm` (13px) tokens — already match, reused as-is |
| Badges | match badge, Vera Recommended badge | 12px / 500 |
| Buttons | `.btn` (44px) used for page-level controls (Filter, Board/List, Vera); card-level primary+overflow buttons stay `.btn-sm` (36px) — see note below |

**Note on the 44px button instruction:** applying 44px literally to the in-card primary/overflow buttons would fight directly against the 232px-wide compact-card goal (items 5-6) — a 44px-tall button pair barely leaves room for anything else in a card that's also supposed to collapse to 3 lines by default. Page-level buttons (header row) use the standard 44px `.btn`; in-card buttons keep the existing 36px `.btn-sm`, which is already this app's established "compact context" button size. Flagging this explicitly as a resolved conflict between two of the brief's own instructions, rather than silently picking one.

- 8px spacing scale (8/16/24/32/40) applied to new/changed Pipeline layout gaps (column gaps, card internal spacing, section margins) — not a retroactive audit of unrelated existing spacing on this page that isn't being touched by this redesign.
- Shadows/borders reduced on candidate cards specifically (thinner border, lighter default shadow, hover-only elevation — already partly true from Phase 2, tightened further to match "reduce visual noise").
- Every new/changed component (badges, popovers, the overflow menu, Insights cards) reuses existing shared primitives (`.pill`, `.btn`, `.card`, `.emp-callout-label`) rather than inventing parallel styles, so radius/weight/spacing stay consistent with the rest of the Employer OS by construction.

## What's explicitly unchanged

- `DATA.candidates` / `DATA.employerRoles` schema — no new or renamed fields.
- Routing (`#pipeline`, `?role=`, `?id=` params) and all existing action functions (`moveStage`, `moveStageWithUndo`, `runCandidateAction`, `primaryActionFor`, `computeMatchBreakdown`, drawer tabs, drag-and-drop, keyboard stage-move).
- The candidate drawer (side panel) — unchanged; it remains the place for full profile detail and note-taking.
- Responsive breakpoints from Phase 6 of the original redesign — the new 232px column width recalculates the tablet/mobile wrap math but keeps the same three-tier strategy (desktop scroll → tablet 2-up → mobile stack).

## Testing

New pure functions (`answerPipelineQuery`, `computePipelineInsights`, and any small helpers like the bottleneck-stage or skill-gap detectors) are unit tested first (TDD), following this session's established pattern (`tests/pipeline-vera-query.test.js` or similar) — deterministic input → deterministic output, no DOM. UI changes (collapsed/expanded cards, overflow menu positioning, header reorder, Insights cards) are verified visually via the same Playwright screenshot harness used throughout this session, including a check that all 6 stage columns fit without horizontal scroll at a standard 1440px desktop width, and that zero console errors are introduced.
