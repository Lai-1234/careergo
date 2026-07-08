# Employer Roles Redesign — Design Spec

Date: 2026-07-08
Status: Approved by user, proceeding to implementation plan.

## Goal

The Employer OS Roles system (Roles list, Role Builder wizard, Preview & Publish,
Role Intelligence) works but is fragmented, plain, and slightly over-engineered.
This redesign makes managing roles simpler, clearer, more useful, more
intelligent, and more professional — without adding feature count, without
introducing an analytics dashboard, and without touching anything outside the
Roles system (Employer OS nav, top search, sidebar, blue accent system, light
background, rounded cards, and typography hierarchy all stay as-is).

Explicitly in scope: Roles list, role status lifecycle, Role Builder
(create/edit), Preview & Publish, Role Intelligence.

Explicitly out of scope: Dashboard, Talent, Hiring, Intelligence's own
analytics tabs, Community, Company. These are untouched except for one
non-breaking data-shape compatibility requirement noted below.

## Current state (for context)

- `DATA.employerRoles` (`app.js:797-853`): 5 mock roles with `status`
  (`"Active"/"Draft"/"Paused"`, inert — no transition UI exists anywhere),
  `applicants`, `qualified`, `strongFits`, `talentSupply`, `daysOpen`,
  `health` (`"Healthy"/"Needs attention"`, a hardcoded label, not computed),
  and a `roleIntelligence` sub-object (`talentAvailability`,
  `typicalExperience`, `commonSalary`, `commonSkills[]`,
  `requestedButLessCommon[]` — dead, never rendered — `potentialIssue`,
  `suggestedAdjustment`).
- `renderEmployerRolesList` (`app.js:6305-6343`): a single flat table, columns
  Role/Status/Applicants/Qualified/Strong fits/Talent supply/Days
  open/Health/Edit. No filters, no search, one "Edit" button per row.
- `renderEmployerRoleBuilder` (`app.js:6345-6417`) + `renderWizardStepContent`
  (`app.js:6419-6449`): 6 steps (Basics, Responsibilities, Requirements,
  Salary & Location, Hiring Preferences, Preview & Publish). **No form state
  object exists** — `activeStep` is the only persisted closure variable;
  every field is blank on every render, even in edit mode (only `title`
  prefills). "Publish"/"Save changes" only shows a toast and navigates away;
  it never writes to `DATA.employerRoles`. "Preview & Publish" is a static
  paragraph, not a real preview.
- Role Intelligence renders in two places: inside the wizard
  (`app.js:6375-6392`, visible only on the Requirements/Salary steps and only
  when editing an existing role) and inside Intelligence → Talent Market
  (`app.js:6744-6756`, a smaller duplicate without the issue/suggestion
  callouts). Dashboard's priority card (`app.js:6228-6236`) also consumes
  `roleIntelligence.talentAvailability`/`potentialIssue` as interpolated
  prose.
- No status transition UI exists anywhere (no Pause/Resume/Close/Archive).

## Data model changes

`DATA.employerRoles` entries gain new fields. Existing flat `roleIntelligence`
fields (`talentAvailability`, `typicalExperience`, `commonSalary`,
`commonSkills`) are **kept as-is** — Dashboard's priority card and
Intelligence's Talent Market tab already read them and are out of scope for
this redesign, so they must keep working unmodified.

```js
{
  id, title,
  status: "Draft" | "Open" | "Paused" | "Closed" | "Archived", // was "Active"/"Draft"/"Paused"
  closeReason: null | "Position filled" | "Hiring paused indefinitely" | "Role changed" | "Duplicate role" | "Other",

  // Roles table fields
  applicants, strongMatches, daysOpen,     // strongMatches replaces strongFits; qualified/talentSupply/health removed as table fields

  // Role content (used by the builder + preview; blank/undefined until authored)
  department, employmentType, reportsTo,
  roleSummary, responsibilities: [string], successLooksLike,
  mustHaveSkills: [string], niceToHaveSkills: [string], minExperience, educationOrCertification,
  salary: { min, max, currency: "MYR", period: "Monthly"|"Annual"|"Hourly" },
  location, workMode: "On-site"|"Hybrid"|"Remote",
  matchThreshold: 60 | 70 | 80 | 90,
  portfolioRequirement: "Optional" | "Preferred" | "Required",

  roleIntelligence: {
    // existing flat fields, unchanged, still consumed by Dashboard/Intelligence:
    talentAvailability, typicalExperience, commonSalary, commonSkills: [string],
    potentialIssue,                // KEPT: Dashboard's priority card (app.js:6228-6236) reads this
                                    // directly as prose. Authored as a one-line summary, normally
                                    // mirroring concerns[0].issue. Do not remove.
    // new fields, used only by the redesigned Role Intelligence panel:
    hiringCompetition,             // e.g. "High"
    locationContext,               // e.g. "Kuala Lumpur + Remote Malaysia"
    dataContext: { region, category, confidence: "High"|"Medium"|"Low" },
    strengths: [string],           // "What looks strong" bullets
    concerns: [{ issue, why }],    // "Potential concerns"
    suggestions: [{
      recommendation, pros: [string], cons: [string],
      expectedEffect, effectIsEstimated: boolean, confidence: "High"|"Medium"|"Low",
      field, suggestedValue        // which draft field Apply should overwrite, and with what
    }]
  }
}
```

`requestedButLessCommon` (dead field, never rendered anywhere) and
`suggestedAdjustment` (only ever rendered inside the wizard panel being
redesigned here — confirmed via the Talent Market tab's code, which omits it
entirely) are dropped. `potentialIssue` is kept, per above, since Dashboard
depends on it directly.

Mock data: rewrite all 5 existing roles' `roleIntelligence` into the new
shape (hand-authored strengths/concerns/suggestions per role, consistent with
how every other "AI insight" in this codebase is static mock content — see
CLAUDE.md: "AI reasoning... analytics are local mock data"). Add 2 new mock
roles so Closed and Archived are demonstrable in the table (today only
Draft/Open/Paused exist).

New state (localStorage-backed via `readState()`/`writeState()`, same pattern
as `employerTalentPools`): `employerRoleDrafts: { [roleId]: { ...draftFields, lastSavedAt } }`
— holds in-progress builder edits so a Draft role's "Continue setup" and an
Open role's "Edit role" can actually resume with real data, and so nothing
typed is lost switching wizard steps.

## Hiring Momentum

Replaces "Health". A pure function, `computeHiringMomentum(role)`, returns
`{ status: "On Track"|"Needs Attention"|"At Risk", reason, nextAction }`
using deterministic, explainable thresholds over `applicants`,
`strongMatches`, `daysOpen` — no opaque score. Example rule shape:

- At Risk: `daysOpen >= 21 && strongMatches === 0`, or `daysOpen >= 28`
- Needs Attention: `daysOpen >= 10 && strongMatches < 3`
- On Track: otherwise

`reason` is a one-line string built from the actual numbers (e.g. "Only 2
strong matches after 12 days"). `nextAction` is a short suggested next step
string (e.g. "Review requirements"). Clicking/hovering the Hiring Momentum
pill shows the reason + next action in a tooltip/popover, matching Part 3 of
the request exactly.

## 1. Roles list (`renderEmployerRolesList`)

- Page title: "Roles in your company".
- Status filter row above the table: All / Open / Draft / Paused / Closed /
  Archived (segmented control, reusing the existing `.emp-subtabs` visual
  pattern). Not explicitly requested, but without it Closed/Archived roles
  would permanently clutter the "what needs attention" table with no way to
  hide them — this keeps the table as the sole focus while staying
  filterable, and archived roles are still reachable, never deleted.
- Table columns: **Role · Status · Applicants · Strong Matches · Days Open ·
  Hiring Momentum · Next Action · (primary button) · More (⋯)**.
  `Qualified`, `Talent Supply`, `Health`, and the always-present `Edit`
  button are removed as columns.
- Primary button is status-dependent (Draft → "Continue setup", Open → "View
  candidates", Paused → "Resume hiring", Closed → "View results", Archived →
  "View results", no primary action beyond that).
- ⋯ opens a small dropdown (reusing the existing `.notif-dropdown` CSS
  pattern) with the full action list for that status, per the table in Part
  4 of the request (Draft: Continue setup/Preview draft/Duplicate/Delete
  draft; Open: View candidates/Preview public post/Edit role/Duplicate
  role/Pause hiring/Close role; Paused: Resume hiring/View candidates/Edit
  role/Close role; Closed: View results/View candidates/Reopen role/Duplicate
  role/Archive; Archived: read-only, no destructive actions).

## 2. Status lifecycle

New helper `changeRoleStatus(role, newStatus, reason)` mutates `role.status`
(and `role.closeReason` when closing) in place on the shared `DATA.employerRoles`
array — same in-memory-mutation pattern already used by `renderEmployerHiring`
for candidate stage changes. Closing a role opens a small confirmation modal
asking "Why are you closing this role?" with the 5 reason options from Part
14, plus the explanatory copy that applicant history and pipeline data are
preserved. No candidate/applicant data is ever deleted on Pause/Close/Archive
— only the role's own status fields change, and Archived roles are simply
excluded from the default table filter and from Dashboard/Intelligence
aggregate counts (both already iterate `DATA.employerRoles` live, so this is
a filter added at the point of aggregation, not a data change).

The post-publish status control (Part 13) reuses the same ⋯-style dropdown,
anchored to a "OPEN ▾" / "PAUSED ▾" / "CLOSED ▾" pill shown on the role's own
context (table row and, if useful, role detail views already using
`roleIntelligence`).

## 3. Role Builder (create/edit)

Steps become **Role Basics → Role Details → Candidate Profile → Offer &
Hiring Setup → Preview & Publish** (4 input steps + preview, replacing the
current 6 non-preview + static-preview steps). `EMPLOYER_ROLE_BUILDER_STEPS`
is updated accordingly; step click/Back/Continue navigation behavior is
unchanged (in-memory `activeStep`, no hash sync — consistent with current
architecture, no regression here).

**Form state (the core structural fix):** a draft object is created per
builder session, seeded from `existing` (when editing) or blank defaults
(when creating), stored via `readState()`/`writeState()` under
`employerRoleDrafts[id]`. Every input in every step reads its value from,
and writes changes back into, this draft object — fixing today's bug where
typed values vanish between steps and Publish never persists anything. A
small "Saved just now" / "Last saved N minutes ago" indicator (mock
timestamp, updated on field blur) is shown per Part 8's "autosave state"
requirement.

**Step 1 — Role Basics:** Title, Department, Employment Type (select: Full-time
/ Part-time / Contract / Internship / Graduate programme), optional Reports
To. Grouped under a labeled card section with the explanation copy from the
request.

**Step 2 — Role Details:** Role Summary (textarea, 2-4 sentences), Key
Responsibilities (repeatable add/remove list control — new small reusable
widget, replacing the single free-text textarea), optional What Success
Looks Like.

**Step 3 — Candidate Profile:** Must-have Skills (tag input), Nice-to-have
Skills (tag input — new small reusable widget: type + Enter/comma to add a
pill, click × to remove), Minimum Experience (select: No experience
required / Less than 1 year / 1-2 years / 3-5 years / 5+ years), optional
Education or Certification. Copy clarifies must-have vs nice-to-have
matching semantics per the request.

**Step 4 — Offer & Hiring Setup:** Salary Range (Minimum/Maximum number
inputs, Currency fixed "MYR", Pay period select), Location (plain text
input — no live autocomplete data source exists in this mock app, so this
is a plain field, not a true autocomplete), Work Mode (On-site/Hybrid/Remote
select), Match Threshold (select with the 4 labeled options — Broad pool
60% / Balanced 70% / Focused 80% / Very selective 90% — defaulting to
Balanced 70%, with the higher/lower trade-off explanation text shown
inline), Portfolio Evidence (Optional/Preferred/Required select, replacing
the current checkbox).

**Page titles:** "Create a role" with the subtitle "Set up the role
candidates will see and CareerGo will match against." for new roles; "Edit
your role" with the role title and "Last saved N minutes ago" shown beneath
for existing roles (replacing "Edit {title}" as the `<h1>`).

## 4. Preview & Publish

Two-column layout on desktop (reusing the existing `.emp-wizard-body` grid,
already `1.4fr 1fr`, collapsing to one column under the existing narrow-
viewport media query).

**Left — real candidate-facing job post preview**, rendered from the live
draft object (not static copy): company block (logo/name/verified badge,
pulling the same Maybank entry from `DATA.companies` used elsewhere),
role title, meta row (location/work mode/employment type), salary range,
About the Role (roleSummary), What You'll Do (responsibilities), What
Success Looks Like (if provided), Must-have Skills, Nice-to-have Skills,
Work Style, and a disabled "Apply" button (this is a preview, not a live
post). A "Preview as candidate — Desktop/Mobile" toggle switches a max-width
class on the preview container (cosmetic layout change only, not a true
responsive re-simulation).

**Right — Role Intelligence panel** (see below), shown only on this step —
removed from its current appearance on the Requirements/Salary steps.

**Above the action buttons — Ready to Publish checklist** (Part 12):
computed from which draft fields are filled (Role Basics complete,
Responsibilities added, Salary and location complete, Candidate requirements
complete) plus a live count of any Role Intelligence suggestions not yet
applied ("1 Vera recommendation not applied"). Buttons: "Save draft" /
"Publish role" for new roles; "Save changes" / "Preview public post" for
existing roles. Publishing/saving now actually writes the draft into
`DATA.employerRoles` (creating a new entry or updating the existing one) and
sets `status` to `"Open"` (publish) or leaves/sets `"Draft"` (save draft) —
fixing today's no-op Publish button.

## 5. Role Intelligence panel

Redesigned into four sections, replacing the current single stat-block +
two-callout layout:

**A. Market Snapshot** — Talent availability, Typical experience, Typical
salary, Hiring competition, Location context, plus a small data-context line
(region / category / "Updated recently" / confidence level) using the
existing flat `roleIntelligence` fields plus the two new ones
(`hiringCompetition`, `locationContext`, `dataContext`).

**B. What Looks Strong** — 2-3 bullets from `roleIntelligence.strengths`.
New section; the current panel only ever criticizes.

**C. Potential Concerns** — from `roleIntelligence.concerns[]`, each
rendered as issue + why-it-matters, replacing the single `potentialIssue`
string.

**D. Suggested Adjustments** — from `roleIntelligence.suggestions[]`, each
rendered with Recommendation / Pros / Cons / Expected Effect (labeled
"Estimated impact" when `effectIsEstimated`) / Confidence, plus three
controls: **Compare change** (shows current vs. suggested value inline),
**Apply suggestion** (writes `suggestedValue` into the draft at `field` and
re-renders — the left-side preview updates live), **Keep current** (dismisses
the suggestion for this session). The existing "Vera advises and explains.
You make the final decision." footer line is kept unchanged.

The Intelligence page's Talent Market tab and Dashboard's priority card are
**not** touched — they keep reading the flat fields that remain unchanged.

## Explicitly out of scope

Dashboard, Talent, Hiring, Intelligence's own analytics tabs, Community,
Company, Vera, Settings, Employer OS nav/sidebar/search/visual language —
all unchanged.

## Self-review notes

- No placeholders/TBDs remain; every field and interaction listed has a
  concrete owner (data field, function, or UI control).
- Consistency check: the flat `roleIntelligence` fields are preserved
  exactly so Dashboard and Intelligence's Talent Market tab require zero
  changes — verified against their actual current code
  (`app.js:6228-6236`, `app.js:6744-6756`).
- Scope check: this is one cohesive feature area (Roles), comparable in size
  to Phase 1 of the Employer Workspace rebuild — a single implementation
  plan is appropriate, no further decomposition needed.
- Ambiguity check: "autocomplete" for Location is explicitly called out as a
  plain text input given no location-data source exists in this mock app,
  rather than silently guessing at a fake autocomplete implementation.
