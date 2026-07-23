# Talent Pipeline Redesign — Design

## Context

Full redesign of the CareerGo employer Talent Pipeline (`renderEmployerTalentPipeline`, `app.js`) per the enterprise-ATS brief: remove the marketing-style hero, compress the stats into a status bar, replace the 3 orange alert chips with one action center, add a Vera priority panel, redesign the Kanban board and candidate cards, move detail into a side drawer, add a floating context-aware Vera assistant, and layer in color/typography/responsive/micro-interaction polish.

**Scope decomposition.** The brief bundles several largely-independent subsystems. Building all of them in one pass risks a large, hard-to-verify diff. Splitting into phases, each independently shippable and testable:

- **Phase 1 (this spec's implementation target): Page shell.** Compact header, status bar, action center, Vera priority panel, base color/typography tokens. Everything else in the brief sits visually *below* this and doesn't depend on it being finished first — but shipping it first gives the calmer "premium, AI-first" read the brief is chasing before touching the board itself.
- **Phase 2 (follow-on): Kanban board + candidate card redesign.** 280px columns, horizontal scroll, sticky stage headers, 5-second-scan card hierarchy, quick actions on hover, match-score hover breakdown.
- **Phase 3 (follow-on): Drag-and-drop stage movement.** Keyboard shortcuts, move menu, undo, confirmation toast, animation — layered onto Phase 2's board once its markup is stable.
- **Phase 4 (follow-on): Side drawer redesign.** 420px width, the 11-section content list from the brief. The drawer already exists (`renderDrawer`) with 6 tabs covering most of this; this phase reorganizes/renames rather than building from zero.
- **Phase 5 (follow-on): Floating Vera assistant.** Context-aware AI panel (current role/pipeline/stage/candidate), the 6 suggested actions. This is a second, separate Vera integration from the job-wizard one — different surface, different context model — and is the largest remaining phase.
- **Phase 6 (follow-on): Responsive breakpoints + micro-interactions.** Desktop/tablet/mobile layouts, hover elevation, loading skeletons, animated counters.

Each phase after this one gets its own short design confirmation before implementation (not a full re-brainstorm — the brief already specifies each phase in detail; confirmation is a checkpoint, not a redesign).

## Phase 1 goals

1. Delete the hero (`<h1>Every candidate...`) and its slogan paragraph entirely.
2. Compact workspace header (~90-110px): page title "Talent Pipeline", one-line subtitle "Manage candidates through every hiring stage.", right-aligned Role selector / Search / Filter / Sort / Vera button — all in the existing controls, just repositioned into the header row instead of a separate controls bar below a hero.
3. Replace the 4 existing KPI tiles (`.emp-kpi-row`, already reasonably compact) with a single-row compact status bar, max 60px tall: icon + number + label per item, same 4 metrics (Candidates, Interviews Today, Feedback Pending, Offers Waiting — renaming "Active candidates"→"Candidates" and "Interviews this week"→"Interviews Today" per the brief's example, which changes the metric's time window; see Decision 1).
4. Replace the 3 attention chips with one "Today's Actions (N)" action center card listing each item as a clickable row, plus "View All →".
5. Add a Vera Priority Panel directly below the action center: greeting + urgent-candidate recommendation card (or hiring insights when nothing's urgent), reusing the existing `getEmployerVeraContext`-style mock-data pattern already used elsewhere in the employer app (no new AI infrastructure — this is templated mock content keyed off the same `DATA.candidates`/`DATA.employerRoles` already loaded, consistent with the codebase's "simulated AI, real interactivity" principle from `CLAUDE.md`).
6. Apply the brief's color hierarchy at the token level: primary actions stay `--emp-green`; AI/Vera-branded elements (Vera panel accents, sparkle icons) move to a purple accent (`--emp-ai`, new token); warnings stay amber; neutral text stays `--emp-muted`/`--emp-ink`. This directly targets the audit's "everything is green" complaint from the earlier visual-polish pass, now applied to this page.
7. Typography: page title only at the large serif size; reduce the KPI/status-bar numbers and body copy sizes generally, consistent with "reduce font sizes, increase whitespace" — reusing existing `--emp-title-*`/`--emp-body*` tokens, no new sizes invented.

**Decision 1 — metric time windows.** The brief's example status bar says "Interviews Today" and "1 Interview Today", but the existing KPI computes `interviewsThisWeek` (`c.interview?.nextInterview` truthy, no date-window filtering — the mock data doesn't actually carry enough date granularity to distinguish "today" from "this week"). Rather than fabricate a fake "is it today" check against non-existent date data, the status bar tile is labeled "Interviews Today" per the brief, but its count keeps the existing `interviewsThisWeek` computation (any candidate with a scheduled next interview) — the mock data doesn't support a real day-level filter, and building one would mean inventing calendar dates that don't exist elsewhere in this candidate mock data. Flagging this explicitly rather than silently mislabeling.

**Decision 2 — Vera Priority Panel content source.** The brief's example ("Daniel Lim, 92% Match, Excellent SQL skills...") names a specific mock candidate. The panel picks its highlighted candidate using the same `candidateNeedsAction`/`feedbackWaiting` logic already computing the action-center list (highest-fit candidate among those needing action today), so it stays consistent with whatever's actually in `DATA.candidates` rather than hardcoding "Daniel Lim" — if the underlying mock data changes, the panel doesn't go stale or reference a candidate that no longer needs action.

## Testing

Phase 1 is markup/CSS reorganization plus one new pure function (the "highest-priority candidate" selection logic for the Vera panel) — that function gets unit tests following the `tests/readiness.test.js` pattern (deterministic input → deterministic output, no DOM). The rest is verified visually via the same Playwright screenshot harness used for the earlier wizard visual-polish and restructure passes: load the pipeline page, screenshot, confirm no hero, confirm status bar ≤60px, confirm action center + Vera panel render, confirm zero console errors.
