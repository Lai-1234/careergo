# Employer Workspace Rebuild — Phase 2 Design

## Context

Phase 1 (shipped on `branch_v5_bylai`, not yet merged) built the employer
workspace's foundation: a hash router (`employerNavigateTo`/
`parseEmployerHash`/`initEmployerRouter`), a persistent shell (header +
manually-toggled collapsible sidebar + single `#employer-view` main), a
Dashboard, a Roles list, and a Role builder wizard. Everything else
(Candidate Search, Talent Pool, Hiring, Analytics, University Talent,
Company Profile, Vera, Settings) renders a "coming in a later phase"
placeholder.

This is **Phase 2**: restructure the navigation/IA to the final grouping,
replace the manual sidebar toggle with hover-to-expand behavior, apply a
strict typography/spacing system, and replace every remaining placeholder
with **minimum-viable real content** (not full feature depth — that lands
in Phases 3-8, but never a bare "coming soon" message).

### Resolved discrepancy: "duplicated header"

The redesign request described a duplicated topbar (two "CareerGo Employer
OS" headers, two search bars, "Mira" and "Your Workspace / E" as separate
identities). Direct inspection of the current code (`app.js` around
`renderEmployerShell`) shows only **one** `<header class="emp-app-header">`
— there is no second header, no second search bar, and the workspace
name + avatar are two spans inside the same single header, not two
separate headers. No screenshots were attached to ground the claim further.
This phase proceeds on the assumption there is no actual duplicate header
bug, but resolves the *visual ambiguity* anyway by merging the workspace
name and avatar into one visually-grouped identity element (see Header
Consolidation below) so there is no reading in which they look like two
separate identities.

## Scope boundary

**In scope:** navigation/IA restructure, sidebar hover behavior, header
identity consolidation, global search, typography/spacing token system,
and minimum-viable content for Talent, Hiring, Intelligence, Community, and
Company.

**Out of scope (later phases):** full Candidate Discover filtering, full
Saved Pools management (rename/tag/note/reminder), drag-and-drop Pipeline,
the full Candidate Review Workspace (Resume/Evidence/Role
Comparison/Notes/Activity tabs), Interview Kit generation and Scorecards,
full Hiring Analytics/Talent Market/University Pipelines depth, Community
post composer and full interaction set, Company profile editing, and
Settings. Vera's contextual guidance is woven into each page as it's built
in its own phase, not a separate retrofit pass.

## Architecture

### Navigation / routing

`EMPLOYER_NAV_GROUPS` (currently 5 groups / 10 flat items) is restructured
to:

```js
const EMPLOYER_NAV_GROUPS = [
  { label: "Overview", items: [["dashboard", "Dashboard", "layout-dashboard"]] },
  { label: "Hire", items: [
    ["roles", "Roles", "briefcase"],
    ["talent", "Talent", "users"],
    ["hiring", "Hiring", "kanban"]
  ] },
  { label: "Intelligence", items: [["intelligence", "Intelligence", "bar-chart-2"]] },
  { label: "Connect", items: [
    ["community", "Community", "messages-square"],
    ["company", "Company", "building-2"]
  ] },
  { label: "AI", items: [["vera", "Vera", "sparkles"]] },
  { label: "Account", items: [["settings", "Settings", "settings"]] }
];
```

`role-builder` remains a non-nav route key (as in Phase 1) plus the
existing `logout` action. `candidate-search`/`talent-pool` collapse into
`talent`; `hiring` (previously a placeholder route) becomes real;
`analytics`/`university-talent` collapse into `intelligence`;
`company-profile` becomes `company`; `community` is new.

**Sub-tab pattern:** `talent`, `hiring`, `intelligence`, and `company` each
render an internal tab row (identical mechanism to Phase 1's Role builder
step-pills — plain buttons with a `data-*-tab` attribute, click toggles an
`active` class and swaps an inner content `<div>`, no new architecture, no
second router, no hash sub-routes). Example for Talent:

```html
<div class="emp-subtabs" data-talent-tabs>
  <button class="emp-subtab active" data-talent-tab="discover">Discover</button>
  <button class="emp-subtab" data-talent-tab="saved-pools">Saved Pools</button>
</div>
<div data-talent-panel="discover" class="emp-subpanel active">...</div>
<div data-talent-panel="saved-pools" class="emp-subpanel" hidden>...</div>
```

Each view function (`renderEmployerTalent`, `renderEmployerHiring`,
`renderEmployerIntelligence`, `renderEmployerCompany`) owns its own
sub-tab click wiring internally (scoped `qsa` inside that view's root),
the same self-contained pattern Phase 1 already established.

### Sidebar hover behavior

Replaces Phase 1's `data-emp-collapse` button and
`localStorage`-persisted `emp-sidebar-collapsed` state entirely — deleted,
not kept as a fallback.

- Default: collapsed, 68px, icons only.
- `mouseenter` or `focusin` on `.emp-app-sidebar` → add `.emp-sidebar-hover`
  (class on the sidebar itself, not `body`) → width animates to 240px,
  labels fade/slide in.
- `mouseleave` or `focusout` → start a 200ms `setTimeout`; if hover/focus
  re-enters before it fires, cancel it (debounce so moving between nav
  items doesn't flicker); otherwise remove `.emp-sidebar-hover`.
- The sidebar is `position: fixed` while expanded (overlaying
  `#employer-view`, `box-shadow` for elevation) so expansion never resizes
  or pushes main content — the layout only ever reserves the 68px
  collapsed width via a fixed-width spacer element.
- Touch devices (`(hover: none)` media query companion in JS via
  `matchMedia`): tap toggles `.emp-sidebar-hover` directly instead of
  relying on hover events; tapping outside closes it.
- Transition: `width 180ms ease, opacity 180ms ease` on the sidebar and its
  labels only — never on `#employer-view`.

### Header consolidation

`renderEmployerShell`'s header keeps its existing single `<header
class="emp-app-header">` — no structural change there — but the
right-hand identity block changes from two separate spans:

```html
<span class="emp-app-workspace">${employer.company}</span>
<span class="emp-app-avatar">${initial}</span>
```

to one grouped, single clickable identity element:

```html
<button type="button" class="emp-app-identity">
  <span class="emp-app-avatar">${initial}</span>
  <span class="emp-app-identity-text">${getFirstName(state)} <small>${company}</small></span>
</button>
```

(No dropdown/menu behavior added in this phase — that's a Settings-phase
concern. The button element is used for correct focus/hover affordance
only.)

### Global search

The header's search input (currently `disabled` as a visual stub in
Phase 1) becomes functional:

- On `input`, if the value is non-empty, render a results dropdown
  grouped by category, built from a `filterEmployerSearch(query)`
  function that checks `DATA.employerRoles` (title match →
  "Roles" group) and `DATA.candidates` (name/role match → "Candidates"
  group). No "Applicants" group in this phase (that entity doesn't
  exist yet — introduced in Phase 4); if `DATA.candidates`/
  `DATA.employerRoles` produce zero matches for a category, that
  category's group header is omitted entirely (never an empty group
  shown).
- Clicking a result: Roles → `employerNavigateTo("role-builder", {id})`;
  Candidates → `employerNavigateTo("talent", {})` then activate the
  Discover sub-tab (no new hash segment for the sub-tab — sub-tab state
  is plain in-memory, reset to Discover by default whenever `talent` is
  (re-)navigated to, which is correct here since Discover is the natural
  landing tab for a searched-candidate result).
- Escape key or clicking outside closes the dropdown without navigating.
- Uses the existing `qs`/`qsa`/`icon`/`createIcons` conventions; no new
  global state beyond a closure-local "is the dropdown open" flag.

### Typography & spacing tokens

New CSS custom properties scoped to `.emp-app-shell` (not `:root`, so they
never leak into the candidate OS or marketing page):

```css
.emp-app-shell {
  --emp-title-xl: clamp(28px, 3vw, 34px);   /* page titles */
  --emp-title-lg: 22px;                      /* section titles, 650-700 weight */
  --emp-title-md: 17px;                      /* card titles, 600-700 weight */
  --emp-body: 14px;                          /* body text, 400-500 weight */
  --emp-body-sm: 13px;                       /* secondary text */
  --emp-label: 11px;                         /* uppercase labels, 0.07em tracking */
  --emp-metric-lg: 26px;                     /* main KPIs */
  --emp-metric-sm: 20px;                     /* small metrics */
  --emp-space-1: 4px; --emp-space-2: 8px; --emp-space-3: 12px;
  --emp-space-4: 16px; --emp-space-5: 20px; --emp-space-6: 24px;
  --emp-space-8: 32px; --emp-space-10: 40px;
}
```

Existing Phase 1 rules (`.emp-view-header h1`, `.emp-priority-card`,
`.emp-kpi-tile`, `.emp-table`, `.emp-wizard-*`, etc.) are retrofitted to
reference these custom properties instead of their current hardcoded
`px` values, so the whole shell shares one scale going forward. Concretely:
`.emp-view-header h1` (currently 28px fixed) → `var(--emp-title-xl)`;
`.emp-priority-card`/`.emp-roles-card`/etc. `h2` (currently 20px) → `var(--emp-title-lg)`;
`.card h3` inside `.emp-panel-card`-style contexts → `var(--emp-title-md)`;
body/`p` inside employer cards → `var(--emp-body)`; `.emp-*-label`-style
elements → `var(--emp-label)`. Font weights capped at 700 (page/section
titles), 600 (buttons, nav, card titles), 500 (important body), 400
(descriptions) — no 800/900 anywhere in `.emp-app-shell`. No paragraph
inside `.emp-app-shell` exceeds `72ch` width.

## Minimum-viable content per destination

### Talent (`talent`)

- **Discover tab:** filter bar (role/skills/experience/location — inputs
  present and stylistically real, but only the free-text query actually
  filters in this phase; the rest are static selects, wired for real
  filtering in Phase 3). Below it, candidate result cards built from
  `DATA.candidates` (expanded from 3 to 7 entries — see Data additions
  below — so both Discover and the Pipeline tab have enough variety)
  showing name, role, location,
  availability, skills, a "Why this person may fit" line (reuse each
  candidate's existing `reason` field), and Save/Compare/Invite buttons.
  "Save" actually appends the candidate's id to an in-memory
  `employerTalentPools[0].candidateIds` array (persisted via
  `writeState`) and toasts; "Invite" sets a simple
  `invitations[candidateId] = "invited"` map entry (also persisted) and
  toasts — both real, tiny state changes, not decorative buttons.
- **Saved Pools tab:** shows one seeded example pool ("Backend
  Prospects") plus any candidates the Discover tab's Save button has
  added, with a candidate count and a compact list; a real (if minimal)
  "Create Pool" button that prompts for a name and adds a new empty pool
  to state.

### Hiring (`hiring`)

- **Applicants tab:** compact table from `DATA.candidates` (reused —
  these mock candidates double as "applicants" for Phase 2's purposes,
  since a dedicated `applications` entity is introduced in Phase 4) with
  Candidate/Role/Stage/Role fit/Availability columns; row click opens a
  lightweight detail panel (not the full Candidate Review Workspace yet)
  showing the candidate's existing `reason`/skills/salary fields.
- **Pipeline tab:** a real Kanban *layout* with stage columns (New,
  Review, Screen, Interview, Final, Offer, Hired), each populated with at
  least one of the 7 expanded `DATA.candidates` entries (one per stage,
  see Data additions) so every column shows a real card, not an empty
  placeholder — cards are real and show name/role/fit; drag-and-drop itself
  is out of scope for Phase 2 (Phase 4), but each card has a `<select>`
  of the 7 stage names; changing it actually updates that candidate's
  `stage` in state and re-renders the column counts.
- **Interviews tab:** one upcoming and one completed example row (seeded
  mock data, e.g. "Sarah Lee — Junior Data Analyst — tomorrow 2:00 PM" and
  a completed one), each with a real "Open Interview Kit"/"Add Feedback"
  button that opens a simple modal-style panel with static placeholder
  fields (full Interview Kit generation is Phase 4).

### Intelligence (`intelligence`)

- **Hiring Analytics tab:** top metrics (Applicants, Qualified Rate,
  Interview Rate, Offer Acceptance, Time to Hire) computed from
  `DATA.employerRoles`/`DATA.candidates` (real arithmetic over the mock
  data, not hardcoded numbers duplicated from the Dashboard — reuses the
  exact same `DATA.employerRoles` array the Dashboard already reads, so
  the two pages can never show conflicting numbers for e.g. "Active
  roles" count).
- **Talent Market tab:** a role selector (`<select>` of `DATA.employerRoles`
  titles) that shows that role's existing `roleIntelligence` fields
  (talent availability, typical salary/experience, common skills) — pure
  reuse of Phase 1's data, presented from a market-lens instead of a
  role-builder lens.
- **University Pipelines tab:** three static cards (University of Malaya,
  Asia Pacific University, Taylor's University) each with a "Strong
  programs" line and a real "View university" link that navigates to the
  existing public `universities.html` page (opens in the same tab via a
  normal `<a href>` — this is a cross-page link, not part of the SPA
  router, which is correct since `universities.html` is a separate real
  page in this multi-page site).

### Community (`community`)

- A real feed of 3 posts: 2 existing candidate-authored posts (from
  `DATA.communityPosts`, tagged retroactively with `authorType:
  "candidate"`) plus 1 new employer-authored post (`authorType:
  "employer"`, `verified: true`, authored as "Maybank · Verified
  Employer", matching the design's own example content) — same shared
  array, filtered/labeled by author type, not an isolated employer-only
  feed. Each post shows react (like) and comment-count controls;
  reacting actually increments that post's `reactions` count in state
  and re-renders (no comment composer yet — Phase 6). A "Create Post"
  button is present and opens a real (if minimal) modal with a text
  field and a "Post" button that actually prepends a new entry to
  `DATA.communityPosts` (in-memory + `writeState`) and closes, so the
  feed visibly grows — the full post-type/audience/attachment composer
  is Phase 6.

### Company (`company`)

- **Public Profile tab:** reads `DATA.companies.find(c => c.id ===
  "maybank")` (the same record the public Companies page already
  renders) and displays overview/industry/location/size/work
  mode/culture fields read-only, plus a "Preview public page" link to
  `companies.html?org=maybank` (real cross-page link). Editing fields is
  Phase 7.
- **Reputation tab:** reads the same Maybank record's `scores` (overall/
  culture/growth/pay/balance) and `veraNote` field, presented as "What
  talent values" / "common concerns" text (reusing the existing
  `veraNote`/`workCulture.reviewThemes` content rather than inventing new
  copy) — this is genuinely the same shared data source as the public
  Companies page, satisfying the "changes should use the same shared
  company data" requirement even though nothing is editable yet.

## Data additions

New state slices (persisted via the existing `readState`/`writeState`,
added to `readState()`'s fallback object so old saved state upgrades
cleanly): `employerTalentPools: [{ id, name, candidateIds: [] }]` (seeded
with one "Backend Prospects" pool), `employerInvitations: {}` (candidateId
→ status map). `DATA.communityPosts` entries gain an `authorType` field
(`"candidate"` for existing entries, `"employer"` for the new one) and
`verified` (boolean, only true for the employer entry) — additive, not a
breaking change to any existing reader of `DATA.communityPosts` (checked:
only the candidate-side community page reads this array, and it doesn't
filter on fields it doesn't recognize, so adding `authorType`/`verified`
is safe).

`DATA.candidates` is expanded from 3 to 7 entries, one per Pipeline
column (`New`, `Review`, `Screen`, `Interview`, `Final`, `Offer`,
`Hired`) — the existing 3 (Siti Nur/`Screen`, Daniel Lim/`Interview`,
Priya Nair/`Saved`→remapped to `Review`, since `Saved` isn't one of the
7 pipeline stages and a saved-but-not-yet-applied candidate belongs in
early review, not a pipeline stage of its own — "Saved" as a *Talent Pool*
concept is separate from "stage" as a *pipeline* concept, and this
expansion is also the point where that distinction becomes real: the 3
existing candidates keep their `stage` field for Pipeline purposes, and
Talent's Saved Pools reads `employerTalentPools[].candidateIds`
independently) plus 4 new entries covering `New`, `Final`, `Offer`, and
`Hired`, each with the same field shape as the existing 3 (`id`, `name`,
`privacy`, `role`, `stage`, `fit`, `location`, `availability`, `salary`,
`education`, `experience`, `careerStage`, `portfolio`, `skills`, `reason`).

**Fix alongside this phase (found during spec review, not a new
feature):** Phase 1's Dashboard greeting reads
`readState().employerProfile?.contactName`, a field the onboarding form
never actually sets (it only collects `company`/`industry`/`firstRole`/
`hiringGoal`), so the greeting always falls back to "there" today. Both
the Dashboard greeting and this phase's new consolidated header identity
element switch to the existing `getFirstName(state)` / `getUserName(state)`
helpers (`app.js:1419-1425`, already used elsewhere in the app for the
logged-in display name) instead of the nonexistent `contactName` field.

## Acceptance criteria (Phase 2 subset, numbered per the original request)

1, 2, 3 (single topbar/search/identity — already true, consolidated
identity element removes any visual ambiguity). 4, 5, 6, 7 (sidebar
collapsed by default, hover expands, mouseleave collapses after ~200ms,
never resizes main content). 8 (no manual Collapse nav item). 11
(Talent contains Discover + Saved Pools). 12 (Hiring contains Applicants,
Pipeline, Interviews). 13 (Intelligence contains the 3 sub-sections). 14
(Community has a real, working feed). 15 (Company contains Public Profile
+ Reputation). 18 (no bare placeholder pages remain anywhere in the nav).
19, 21, 22, 23 (no duplicate Candidate Search/Talent Pool, Analytics/
University Talent, Roles/Job Posts as separate concepts — the last one
was already true from Phase 1). 20 (every visible button does something —
even the Phase-2-minimal ones perform a real, if small, state change).
25, 26 (still no navigation flash — reuses Phase 1's proven router
unchanged). 27, 28, 29, 30, 31 (typography/spacing token compliance). 32,
33 (Dashboard and Intelligence read the same `DATA.employerRoles`/
`DATA.candidates`, so numbers can't diverge; Talent's Save/Invite and
Hiring's Move-stage actually mutate shared state). 35 (a new Community
post actually appears in the feed after posting).

Not claimed in Phase 2 (explicitly deferred, see Scope boundary above):
10 (full role lifecycle actions beyond what Phase 1's wizard already
does), 16 (Vera contextual guidance beyond what already exists on
Dashboard/Roles — woven in per-page starting Phase 3+), 17 (Settings
functionality — Phase 8), 24 (drag-and-drop Pipeline — Phase 4), 34 (role
data changes propagating to Analytics — true today only insofar as both
read the same static array; genuine cross-entity propagation on write
lands with Phase 4's real `applications` entity), 36 (fully connected
system feel — the end state after all phases, not Phase 2 alone).
