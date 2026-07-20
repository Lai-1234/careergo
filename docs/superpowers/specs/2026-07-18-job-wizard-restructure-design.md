# Job-Creation Wizard Restructure — Design

## Context

This is "Task B" from the employer job-creation wizard audit (`docs/job-creation-audit.md`). Task A (readiness-checklist bug fix, named predicate functions, unit tests) already shipped on this branch. This spec covers restructuring the wizard's 5 steps to group fields more sensibly, collapse rarely-used fields behind "Advanced" disclosures, consolidate the required-documents controls the audit flagged as duplicated, and add a real completion indicator to the stepper.

This restructure is a prerequisite for a later "Vera as primary authoring surface" feature (not in scope here) — that feature's per-step behavior assumes the field layout defined in this spec (e.g. match threshold living in Step 3, not Step 4).

## Goals

- Regroup fields across the 5 steps per the target shape below.
- Collapse low-frequency Step 1 fields and Step 4 extra-compensation fields behind closed-by-default "Advanced" disclosures.
- Consolidate the 4 overlapping "what documents does the candidate submit" controls (audit §4, duplicate #3) into one multi-select.
- Add ✓ / amber-dot completion indicators to the step pills, driven by the same named predicates Task A introduced.
- Migrate every existing autosaved draft (`state.employerRoleDrafts[id]`) and every already-published role (`DATA.employerRoles`) to the new field layout without losing any previously-entered value.

## Non-goals

- No changes to the Vera guided-conversation flow, `computeDraftVeraReview`, or the readiness predicates themselves (Task A's output is reused as-is).
- No new candidate-facing surface (`renderJobPreviewContent` gets updated to read from the new fields where they moved, nothing more).
- The "Vera as primary authoring surface" feature is explicitly out of scope — this spec only makes the field layout it will need.

## Target step shape

**Step 1 — Role Basics:** `title`, `department`, `jobCategory`, `seniority`, `employmentType`, `openings`, `location` *(moved from Step 4)*, `workMode` *(moved from Step 4)*, `targetStartDate`, `urgency`. An "Advanced" `<details>` block, closed by default, holds `internalJobId`, `reportsTo`, `hiringOwner`, `visaSponsorship`, `contractDuration` (contractDuration keeps its existing conditional render inside the disclosure).

**Step 2 — Role Details:** unchanged except `workingHours` moves out (→ Step 4). Everything else (`rolePurpose`, `roleSummary`, `responsibilities`, `firstNinetyDays`, `successLooksLike`, `teamStructure`, `stakeholders`, `tools`, `travelExpectations`) stays as-is.

**Step 3 — Candidate Profile:** must-have / preferred / trainable tag buckets unchanged. `matchThreshold` *(moved from Step 4)* is added directly beneath the three buckets, immediately followed by a live pool-size estimate line ("~N candidates at this threshold"). `domainKnowledge` and `behaviouralCompetencies` are removed as standalone inputs; their content becomes free text the employer types directly into the Preferred-bucket area (see "Data model changes" — the two fields are retired, not hidden). `accessibilityConsiderations` and `portfolioRequirement` are removed from this step (see Step 5).

Pool-size estimate: `Math.max(3, Math.round(BASE_POOL / (1 + mustHaveSkills.length * 0.35) * (matchThreshold_factor)))` is overkill for a static mock — instead reuse the existing `computeDraftVeraReview`-style heuristic: derive a deterministic estimate from `mustHaveSkills.length` and `matchThreshold` against a fixed base pool per seniority (already the kind of number `roleIntelligence.talentAvailability` mock data represents elsewhere). Exact formula is an implementation detail, not a design decision — the requirement is: more must-haves and a higher threshold both move the estimate down, it's deterministic (same inputs → same output, no randomness), and it recomputes live as the employer edits those fields.

**Step 4 — Offer:** compensation core (`salary.*`), `benefits`, and schedule detail only: `hybridDays`, `workingDays`, `shiftPattern`, `workingHours` *(moved from Step 2)*, `travelExpectations` stays on Step 2 (travel is a role-detail, not a schedule-logistics field — not moved, despite living conceptually near the other schedule fields; flagging this explicitly since the source prompt didn't call it out and it would be an easy field to move by mistake). `bonus`, `commission`, `allowances`, `overtimePolicy`, `equity` are retired as standalone fields and replaced by one "Additional compensation" repeater (`type`, `value` pairs) behind an "Advanced" disclosure, closed by default. `location`/`workMode`/`matchThreshold` are gone from this step (moved to Steps 1/1/3 respectively).

**Step 5 — Hiring & Publish:** hiring process (`hiringStages`), application setup *(moved from Step 4)* — now using the consolidated required-documents control (see below) instead of `requiredDocuments`/`resumeRequired`/`coverLetterRequired`/`applicationPortfolioLink` — plus `screeningQuestions`, `candidateConsent`; job distribution *(moved from Step 4)*; company introduction *(moved from Step 4)*; and an "Accessibility & equal opportunity" section holding `accommodationStatement` (unchanged) as the sole accessibility field — this absorbs the intent of the retired Step-3 `accessibilityConsiderations` field (see migration). Right pane becomes a tab strip: **Preview | Readiness | Vera** (the "Vera" tab shows the existing `computeDraftVeraReview` panel content — no new Vera behavior yet, just relocating today's always-visible panel under a tab so Preview and the checklist aren't both fighting for the same column). The Publication Readiness checklist itself is unchanged (Task A's predicates), just needs a `department`-optional, `location`-in-basics-aware read — no predicate logic changes required since the predicates already read `draft.department`/`draft.location` by key, not by which step renders them.

## Data model changes

New field: `additionalCompensation: []` (array of `{type: string, value: string}`), added to `makeEmployerRoleDraft`'s base object.

Retired as standalone `draft` fields (removed from the base object in `makeEmployerRoleDraft`, but see migration — old drafts/roles that still carry them are not corrupted, just no longer rendered): `bonus`, `commission`, `allowances`, `overtimePolicy`, `equity`, `domainKnowledge`, `behaviouralCompetencies`, `accessibilityConsiderations`, `portfolioRequirement`, `requiredDocuments`, `applicationPortfolioLink`.

**Required-documents consolidation (resolves audit duplicate #3, plus folds in Step 3's `portfolioRequirement`):** new field `requiredDocumentTypes: { resume: "Required", coverLetter: "Optional", portfolio: "Optional" }` (an object keyed by document type, each value one of exactly `"Required"` / `"Optional"`). Replaces `resumeRequired` (boolean), `coverLetterRequired` (3-state), `portfolioRequirement` (3-state), and `requiredDocuments` (free text) entirely. `applicationPortfolioLink` (the free URL field) is dropped with no replacement — it duplicated `requiredDocumentTypes.portfolio` without adding information a real ATS needs at draft time. The "Application method configured" readiness predicate (`isApplicationMethodConfigured`) is updated to read `requiredDocumentTypes.resume === "Required" || hasText(contactPerson) || hasText(applicationDeadline)` instead of the retired `resumeRequired`.

## Migration

Runs inside `makeEmployerRoleDraft(existing)`'s merge branch (the one that already runs whenever a draft is loaded from `employerRoleDrafts` or seeded from a published role), so it applies uniformly to in-progress drafts and already-published roles alike, with no separate migration pass or version flag needed:

1. If `requiredDocumentTypes` is absent but any of the four legacy fields are present, synthesize it: `resume` = `"Required"` if `resumeRequired` was truthy else `"Optional"`; `coverLetter` = `"Required"` if `coverLetterRequired === "Required"` else `"Optional"` (the old `"Not requested"` state maps to `"Optional"` — a required-documents control with no "don't ask at all" state is the simplification this spec commits to); `portfolio` = `"Required"` if `portfolioRequirement === "Required"` else `"Optional"` (old `"Preferred"` also maps to `"Optional"`).
2. If `additionalCompensation` is absent, synthesize one row per non-empty legacy field among `bonus`/`commission`/`allowances`/`overtimePolicy`/`equity`, in that order, `type` set to the field's existing UI label ("Bonus", "Commission", "Allowances", "Overtime policy", "Equity").
3. `domainKnowledge`/`behaviouralCompetencies`/`accessibilityConsiderations`, if non-empty on an existing draft/role, are appended (once, with a labeled prefix, e.g. `"Domain knowledge: <value>"`) into `behaviouralCompetencies`'s nearest surviving home — concretely: appended to the Preferred-bucket free text is not a real field today, so instead: append to `rolePurpose` if non-empty content needs to survive, separated by a blank line. This is the one migration step with real information-shape loss (structured field → prose), called out here explicitly rather than left implicit — an editor reading this spec should be able to see that decision, not infer it.

No field is ever deleted from an existing `draft`/role object during migration — legacy keys are left in place, just unread by any render/predicate code after this change ships (matches the "no build step, static file" nature of the app: harmless dead JSON keys, not a real storage cost).

## Stepper indicators

`✓` when every readiness predicate whose fields live on that step (per the mapping below) is `true`; amber dot when any of them is `false` **and** the step has been visited at least once (tracked via a new, session-only `visitedSteps: Set` in `renderEmployerRoleBuilder`'s closure — not persisted to `draft`, since "visited" is a UI nicety, not role data); no indicator (default pill state) for an unvisited step with incomplete predicates, so a brand-new draft doesn't show 5 amber dots before the employer has touched anything.

Step → predicate mapping: Step 1 → `role_basics_complete`; Step 2 → `role_summary_added`, `responsibilities_added`; Step 3 → `candidate_requirements_complete`; Step 4 → `salary_and_location_complete`\* (\*location now lives on Step 1, so this predicate is genuinely split across two steps — Step 1's indicator additionally requires `location` to be set, Step 4's requires `salary.min`/`salary.max`); Step 5 → `hiring_process_configured`, `application_method_configured`, `distribution_channels_selected`, `preview_reviewed`. Click-to-jump navigation is unchanged (already works today).

## Testing

Extend `tests/readiness.test.js` (or a new `tests/wizard-migration.test.js` using the same `loadApp()` harness) with: (1) a migration test constructing a pre-restructure-shaped draft object (legacy fields populated, new fields absent) and asserting `makeEmployerRoleDraft(legacyDraft)` produces the correct `requiredDocumentTypes` and `additionalCompensation`; (2) a predicate test confirming `isRoleBasicsComplete` now also gates on `location` being present now that it's a Step 1 field (design decision to make, flagged for the plan: does `location` join `role_basics_complete`, or stay purely inside `salary_and_location_complete`? Recommendation: leave the predicate itself unchanged — `location` stays in `salary_and_location_complete` only — so Task A's predicates truly don't change in this spec; the Step 1 stepper indicator is the only place that needs the extra `location` check, per "Stepper indicators" above). No Playwright/visual test is required for this spec (no visual redesign, only field placement) — the earlier visual-polish pass's CSS still applies since class names (`emp-form-grid-2`, `emp-optional-tag`, etc.) are unchanged.
