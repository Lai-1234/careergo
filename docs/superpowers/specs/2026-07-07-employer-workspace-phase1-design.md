# Employer Workspace Rebuild — Phase 1 Design

## Context

The authenticated employer workspace (`employer-app.html`, rendered by
`renderEmployerPortal()` in `app.js`) is being rebuilt from scratch per a
detailed product spec. The full scope (Dashboard, Roles, Candidate Search,
Talent Pool, Hiring [Applicants/Pipeline/Interviews], Analytics, University
Talent, Company Profile, Vera, Settings) is too large for one pass, so it's
split into phases. This is the spec for **Phase 1**: the application shell,
router, Dashboard, and Roles.

Later phases (not covered here): Candidate Search + Talent Pool; Hiring
(Applicants/Pipeline/Interviews); Analytics + University Talent + Company
Profile; Vera woven through + Settings.

## Problem with the current implementation

1. **Regression (fixed separately):** `renderEmployers()`'s redirect check
   used `document.body.dataset.page === "employers"`, which is also true on
   `employer-app.html` and `employer-onboarding.html` (all three pages share
   that attribute value). A logged-in employer opening their own workspace
   was redirected to itself, causing a reload loop. Fixed by scoping the
   check to the marketing page's unique `.employer-page` container instead.
2. **No real router.** `renderEmployerPortal()` renders every section
   (Dashboard, Candidates, Talent Pool, Roles, Applicants, Pipeline,
   Analytics, Settings, "Assistant") into one `innerHTML` string
   simultaneously. The sidebar links are plain `href="#pipeline"` anchors,
   so "navigation" is the browser's native anchor-scroll jumping between
   stacked sections, not a rendered view swap.
3. **Thin mock data.** `DATA.employerRoles` has 3 entries with only
   `title`/`applicants`/`qualified`/`status`. `DATA.candidates` has 3
   entries. Neither has the fields the new Dashboard/Roles views need
   (strong fits, talent supply, days open, health, role intelligence
   fields, etc.).

## Architecture

### Router

- Hash-based (`#/dashboard`, `#/roles`, `#/roles/new`, `#/roles/:id`, etc.),
  not History API. Reason: this project has no build step or server (per
  `CLAUDE.md`, pages open via `file://` or plain static hosting); hash
  routes work identically either way, and the rest of the app already uses
  `location.hash` for view state (jobs.html, market.html). pushState routes
  would 404 on reload under plain static hosting.
- One `EMPLOYER_ROUTES` list, one `navigateTo(view, params)` function, one
  `hashchange` listener registered once. `navigateTo`:
  1. Parses the requested view; no-ops if it's already the active view
     (unless params changed, e.g. a different role id).
  2. Updates a single in-memory route state.
  3. Updates the sidebar's active item.
  4. Renders **only** the requested view into `#employer-view` (full
     replace, not append/hide).
  5. Resets `#employer-view`'s scroll position to top.
  6. Updates `location.hash` once (via `history.replaceState` if the hash
     already matches, to avoid re-triggering `hashchange`).
- Sidebar links call `event.preventDefault()` and call `navigateTo()`
  directly — never rely on native anchor scrolling. No element in any view
  may reuse a route name as an `id` (avoids accidental `:target`/anchor
  scroll behavior).
- On `DOMContentLoaded`, the route is read synchronously from
  `location.hash` and rendered immediately — no default-view-then-redirect
  step, so there's no first-paint flash.

### Shell

```html
<div class="employer-app-shell">
  <header class="employer-app-header">...</header>
  <aside class="employer-app-sidebar">...</aside>
  <main id="employer-view"></main>
</div>
```

- **Header** (64-72px): CareerGo logo + "Employer OS" label (left), global
  search input (middle, placeholder "Search candidates, roles,
  applicants..." — non-functional stub in Phase 1, wired up in a later
  phase), notifications bell + workspace/company name + user avatar
  (right).
- **Sidebar**: grouped nav —
  - OVERVIEW: Dashboard
  - HIRE: Roles, Candidate Search, Talent Pool, Hiring
  - INTELLIGENCE: Analytics, University Talent, Company Profile
  - AI: Vera
  - ACCOUNT: Settings, Logout
  - Phase 1 wires up **Dashboard** and **Roles** fully; the other items
    render a lightweight "coming in a later phase" placeholder view so the
    nav is complete and demonstrable without dead links.
  - Collapse toggle (icon-only mode), state remembered in `localStorage`.
  - Becomes an off-canvas drawer under ~900px, closes on route change.

### Data model additions (`DATA` in app.js)

Extend `DATA.employerRoles` entries with: `status` (Active/Draft/Paused),
`applicants`, `qualified`, `strongFits`, `talentSupply` (Strong/Good/Tight),
`daysOpen`, `health` (Healthy/Needs attention), and a `roleIntelligence`
object: `{ talentAvailability, typicalExperience, commonSalary,
commonSkills[], requestedButLessCommon[], potentialIssue, suggestedAdjustment
}` (mirrors the shape already used on the public employer marketing page's
Role tab). Expand from 3 to 5-6 roles so the Dashboard's "active roles"
table and priority card have enough variety to look real.

No changes to `DATA.candidates` in this phase (used again starting Phase 2).

## Dashboard (`#/dashboard`)

- Greeting: "Good morning, {employer contact name}." /
  "Here's what needs attention across your hiring today."
- **Priority card** ("Your highest-impact action"): one Vera-authored
  suggestion derived from the role with the worst `health`/requirement
  mismatch, with a stated potential impact (e.g. "+42 relevant candidates")
  and two actions: "Review requirement" (→ opens that role in the Roles
  builder at the Requirements step) and "See affected candidates" (→ later
  phase; Phase 1 shows a toast: "Candidate Search opens in a later phase").
- **Compact KPI row** (4 tiles): Active roles, New qualified candidates,
  Interviews this week, Candidates waiting too long. Values computed from
  `DATA.employerRoles`/`DATA.candidates` where possible, otherwise fixed
  mock numbers.
- **Today's priorities**: 3-5 rows, each with one action button (from your
  spec's examples — candidates waiting for review, an upcoming interview,
  new strong matches, a candidate waiting too long, a salary-range warning).
- **Active roles table**: Role / Status / Applicants / Qualified / Strong
  fits / Days open / Health, row click → Roles detail view.
- **Pipeline snapshot**: compact stage counts (New/Review/Screen/
  Interview/Offer) + "largest bottleneck" + "average time" line. This is a
  static/derived summary in Phase 1 (the interactive Kanban itself is
  Phase 3).
- Explicitly **not present**: "Posts and Updates", any candidate-facing
  content, giant hero, generic AI assistant card.

## Roles (`#/roles`, `#/roles/new`, `#/roles/:id`)

- **List view**: same columns as the Dashboard's active-roles table, plus
  row actions (View/Edit/Pause/More) and a primary "Create role" button.
- **Builder** (`#/roles/new` or `#/roles/:id` in edit mode): a step wizard
  with a progress indicator — Basics → Responsibilities → Requirements →
  Salary & Location → Hiring Preferences → Preview & Publish. Chosen over a
  single long scrolling form because "Preview and publish" reads as a
  distinct final step, not just another section.
- **Role Intelligence panel**: shown alongside the Requirements and Salary
  & Location steps (not a separate page), pulling from the role's
  `roleIntelligence` data — talent availability, typical experience, common
  salary/skills, Vera's potential-issue callout and suggested adjustment.
  Framed as advisory only ("Vera advises and explains; you decide").
- Publishing in Phase 1 updates the in-memory/localStorage-persisted
  `DATA.employerRoles` list and returns to the list view; no backend.

## Visual language

Reuses the same tokens as the rest of the site (light theme, white/very
light blue, navy text, blue `#2563eb` / cyan `#38bdf8` accents, soft
shadows, rounded cards — see `styles.css`'s "Bright professional commercial
theme override" section, already the effective site-wide theme). New rules
scoped under `.employer-app-*` class names so nothing here touches the
candidate-side OS shell (`.os-*` classes) or the public marketing page
(`.employer-page` classes) already in place.

Type scale: page title 28-36px, section heading 20-26px, card title
15-18px, body 13-15px, labels 10-12px, metrics up to 30px. Main content
padding 24-32px, card padding 16-22px, card gaps 14-20px, section gaps
24-36px. No 100px+ section padding, no full-viewport-height sections.

## Out of scope for Phase 1

Candidate Search, Talent Pool, Hiring (Applicants/Pipeline/Interviews),
Analytics, University Talent, Company Profile, and full Vera integration are
explicitly deferred to later phases (their sidebar entries render a
placeholder view in the meantime). Global search in the header is a visual
stub only.

## Acceptance criteria (Phase 1 subset)

1. Logged-in employer opens `employer-app.html` with no flash/reload loop.
2. Rapidly clicking Dashboard ↔ Roles ↔ any placeholder view never shows
   another view mid-transition; only one view is ever mounted in
   `#employer-view`.
3. No `hashchange` → `location.hash =` → `hashchange` recursion.
4. Sidebar shows a correct single active state at all times, collapses to
   icon-only, becomes a drawer under ~900px with no horizontal overflow.
5. Dashboard has no "Posts and Updates" and no candidate-facing content.
6. Roles supports create, edit, and shows the Role Intelligence panel with
   at least one "requirement may be too strict" warning on a role
   configured to trigger it.
7. Old anchor-based nav (`href="#pipeline"` etc.) and the single-`innerHTML`
   render of all sections are deleted, not left mounted/hidden.
