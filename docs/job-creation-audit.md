# Employer Job-Creation Wizard — Field & Architecture Audit

Scope: the 5-step "Create a role" wizard in `app.js` (`renderEmployerRoleBuilder`, app.js:11545-12230+), rendered inside `employer-app.html`. Steps: **Role Basics → Role Details → Candidate Profile → Offer & Hiring Setup → Preview & Publish**. All line references are to `app.js` unless noted. Read-only audit — no files other than this report were changed.

---

## 0. Executive summary

- The wizard's live state is a single JS object (`draft`) held in a closure inside `renderEmployerRoleBuilder`. Every step's inputs and the Step‑5 "Publication readiness" checklist read and write **the same object** — there is no dual-store bug (see §2).
- The Step‑5 checklist ("MISSING" bug) is explained by a **field-coverage gap** in the "Create with Vera" guided flow (`department` is never asked about or generated) plus a **silent partial-apply** in that flow's section‑by‑section review (unaccepted fields are dropped with no warning, while the UI displays their full suggested text as if applied). See §3.
- The checklist is **purely advisory** — `data-emp-publish` calls `commitDraft()` unconditionally (app.js:12056), so a role can be published while every checklist row reads "Missing."
- There are **three independent, non-agreeing "completion" implementations** (`getPublishReadinessChecks`, `computeDraftVeraReview`, `calculateDraftCompletion`/`DRAFT_REQUIRED_SECTIONS`) with different field sets, different pass/fail thresholds, and different math. See §2 and §4.
- Published roles (`DATA.employerRoles`) and the candidate-facing job list (`DATA.jobs`) are **two entirely separate hard-coded mock arrays** with no code path connecting them (confirmed: no `push`/`concat`/spread from one into the other anywhere in app.js). Publishing a role in this prototype never makes it appear in candidate-side job search, job detail, or application flows. The only "candidate view" of a drafted role is the employer-side **Preview job** modal, which simulates the candidate view but is not wired to the real candidate app. This materially changes the answer to §5: almost nothing in the wizard is genuinely `CANDIDATE_VISIBLE` today — most of what looks candidate-facing is `CANDIDATE_VISIBLE (preview-only, simulated)`.
- No field in the wizard uses an HTML `required` attribute (confirmed via search) — "required" is a soft, checklist-only concept, never enforced by the form itself.

---

## 1. Field inventory

Legend for **Persisted where** (same for every row, abbreviated per-row as **D→LS→R**): field lives on the in-memory `draft` object (closure in `renderEmployerRoleBuilder`, app.js:11549) → autosaved (900ms debounce, app.js:11583-11587) into `localStorage` under `state.employerRoleDrafts[draftId]` (app.js:800-841) → on Save Draft/Publish, merged into a role object pushed into `DATA.employerRoles`, an **in-memory-only array** (app.js:11875-11892) that is *not* itself persisted to `localStorage`, so committed roles do not survive a page reload.

### Step 1 — Role Basics (app.js:11745-11763)

| Field label | Component | State key | Required? | Validation | Persisted |
|---|---|---|---|---|---|
| Role title | text input | `title` | Checklist-required (Role basics) | `has()` non-empty check, checklist only | D→LS→R |
| Internal job ID | text input, tagged *Optional* | `internalJobId` | No | none | D→LS→R |
| Department | text input | `department` | Checklist-required (Role basics), **not tagged Optional but not visually marked required either** | `has()` non-empty check, checklist only | D→LS→R |
| Job category | text input, tagged *Optional* | `jobCategory` | No | none | D→LS→R |
| Seniority | select (`SENIORITY_LEVELS`, 9 opts, app.js:10618) | `seniority` | Default `"Entry level"`, never checked as unset | drives `juniorish` warning logic (app.js:10967, 11099) | D→LS→R |
| Employment type | select (`EMPLOYMENT_TYPES`, 8 opts, app.js:10617) | `employmentType` | Checklist-required (Role basics) | `has()` | D→LS→R |
| Number of openings | number input, min 1 | `openings` | Not referenced by any checklist | `Number(...) || 1` on input | D→LS→R |
| Hiring urgency | select (Standard/Urgent/Critical) | `urgency` | Not referenced by any checklist | none | D→LS→R |
| Reports to | text input, tagged *Optional* | `reportsTo` | No | none | D→LS→R |
| Hiring owner | text input, tagged *Optional* | `hiringOwner` | No | none | D→LS→R |
| Target start date | date input, tagged *Optional* | `targetStartDate` | No | none | D→LS→R |
| Visa sponsorship | select (3 opts) | `visaSponsorship` | No | none | D→LS→R |
| Contract duration | text input, conditional | `contractDuration` | No | only rendered if `employmentType` ∈ {Contract, Temporary, Internship, Freelance} (app.js:11761) | D→LS→R |

### Step 2 — Role Details (app.js:11764-11782)

| Field label | Component | State key | Required? | Validation | Persisted |
|---|---|---|---|---|---|
| Why this role exists | textarea, tagged *Optional* | `rolePurpose` | No | none | D→LS→R |
| Role summary | textarea | `roleSummary` | Checklist-required | `.trim().length > 20` (app.js:11140, 11094) | D→LS→R |
| Key responsibilities | dynamic repeating list (add/remove/reorder, app.js:11632-11675) | `responsibilities[]` | Checklist-required (≥3) | `filter(r=>r.trim()).length >= 3` → Complete; `>0` → "Needs attention"; `0` → "Missing" (app.js:11141) | D→LS→R |
| First 90-day outcomes | textarea, tagged *Optional* | `firstNinetyDays` | No | none | D→LS→R |
| Long-term success looks like | textarea, tagged *Optional* | `successLooksLike` | No | none | D→LS→R |
| Team structure | text input, tagged *Optional* | `teamStructure` | No | none | D→LS→R |
| Key stakeholders | text input, tagged *Optional* | `stakeholders` | No | none | D→LS→R |
| Tools & technologies | text input, tagged *Optional* | `tools` | No | none | D→LS→R |
| Working hours | text input, tagged *Optional* | `workingHours` | No | none — see §4 duplicate #4 | D→LS→R |
| Travel expectations | text input, tagged *Optional* | `travelExpectations` | No | none | D→LS→R |

### Step 3 — Candidate Profile (app.js:11783-11804)

| Field label | Component | State key | Required? | Validation | Persisted |
|---|---|---|---|---|---|
| Must-have skills | tag input (`renderTagInput`) | `mustHaveSkills[]` | Checklist-required (paired w/ minExperience) | `length > 0` | D→LS→R |
| Nice-to-have skills | tag input | `niceToHaveSkills[]` | No | none | D→LS→R |
| Trainable skills | tag input | `trainableSkills[]` | No | feeds `getRequirementWarnings` portfolio-warning only (app.js:10977) | D→LS→R |
| Minimum experience | select (5 opts) | `minExperience` | Checklist-required (paired w/ mustHaveSkills) | `has()`, default `"No experience required"` already satisfies it | D→LS→R |
| Equivalent experience accepted | checkbox | `equivalentExperienceAccepted` | No | feeds degree-requirement warning (app.js:10974) | D→LS→R |
| Education or certification | text input, tagged *Optional* | `educationOrCertification` | No | feeds degree-requirement warning | D→LS→R |
| Required licences | text input, tagged *Optional* | `requiredLicences` | No | none | D→LS→R |
| Language requirements | text input, tagged *Optional* | `languageRequirements` | No | none | D→LS→R |
| Portfolio / work sample | select (Optional/Preferred/Required) | `portfolioRequirement` | No | feeds portfolio-warning (app.js:10977) — see §4 duplicate #2 | D→LS→R |
| Domain knowledge | text input, tagged *Optional* | `domainKnowledge` | No | none | D→LS→R |
| Behavioural competencies | text input, tagged *Optional* | `behaviouralCompetencies` | No | none | D→LS→R |
| Availability requirement | text input, tagged *Optional* | `availabilityRequirement` | No | none | D→LS→R |
| Work authorization | text input, tagged *Optional* | `workAuthorization` | No | none | D→LS→R |
| Accessibility considerations | textarea, tagged *Optional* | `accessibilityConsiderations` | No | none — see §4 duplicate #1 | D→LS→R |

### Step 4 — Offer & Hiring Setup (app.js:11805-11868)

| Field label | Component | State key | Required? | Validation | Persisted |
|---|---|---|---|---|---|
| Minimum salary | number input | `salary.min` | Checklist-required (paired w/ max + location) | truthy check | D→LS→R |
| Maximum salary | number input | `salary.max` | Checklist-required | truthy check | D→LS→R |
| Pay period | select (Monthly/Annual/Hourly) | `salary.period` | No | none | D→LS→R |
| Currency | select (MYR/USD/SGD) | `salary.currency` | No | none | D→LS→R |
| Salary visibility | select (3 opts) | `salary.visibility` | No | none, never read by any checklist or preview | D→LS→R |
| Negotiable | checkbox | `salary.negotiable` | No | none | D→LS→R |
| Bonus | text input, tagged *Optional* | `bonus` | No | none | D→LS→R |
| Commission | text input, tagged *Optional* | `commission` | No | none | D→LS→R |
| Allowances | text input, tagged *Optional* | `allowances` | No | none | D→LS→R |
| Overtime policy | text input, tagged *Optional* | `overtimePolicy` | No | none | D→LS→R |
| Equity | text input, tagged *Optional* | `equity` | No | none | D→LS→R |
| Benefits | checkbox grid, 14 `BENEFIT_OPTIONS` (app.js:10619) | `benefits[]` | Checklist status: `Complete`/`Optional` (never "Missing") | `length > 0` | D→LS→R |
| Location | text input | `location` | Checklist-required (paired w/ salary) | `has()` | D→LS→R |
| Work mode | select (On-site/Hybrid/Remote) | `workMode` | Not in `getPublishReadinessChecks`; counted in the separate readiness % if truthy | see §4 duplicate #4 | D→LS→R |
| Exact office location | text input, tagged *Optional* | `officeLocation` | No | none | D→LS→R |
| Hybrid attendance | text input, tagged *Optional* | `hybridDays` | No | none — see §4 duplicate #4 | D→LS→R |
| Working days | text input, tagged *Optional* | `workingDays` | No | none — see §4 duplicate #4 | D→LS→R |
| Shift pattern | text input, tagged *Optional* | `shiftPattern` | No | none — see §4 duplicate #4 | D→LS→R |
| Match threshold | select (60/70/80/90%) | `matchThreshold` | No | stored, not read by any matching/filter logic found in app.js | D→LS→R |
| Hiring stages | dynamic list × {name, duration, owner, format} (app.js:11018-11039) | `hiringStages[]` | Checklist-required (`length > 0`); pre-populated with 4 default stages | `length > 5` → warn too many; `>0` → strength | D→LS→R |
| Application deadline | date input, tagged *Optional* | `applicationDeadline` | Checklist status `Complete`/`Needs attention` (paired w/ contactPerson, resumeRequired) | `has(contactPerson) OR has(applicationDeadline) OR resumeRequired` (app.js:11146) | D→LS→R |
| Contact person | text input, tagged *Optional* | `contactPerson` | same pairing as above | — | D→LS→R |
| Required documents | text input, tagged *Optional*, freeform | `requiredDocuments` | No | never read by any checklist or preview — see §4 duplicate #3 | D→LS→R |
| Resume required | checkbox, default `true` | `resumeRequired` | Feeds "Application method configured" | — | D→LS→R |
| Cover letter | select (Optional/Required/Not requested) | `coverLetterRequired` | No | never read by any checklist or preview — see §4 duplicate #3 | D→LS→R |
| Portfolio link | url input, tagged *Optional* | `applicationPortfolioLink` | No | never read by any checklist or preview — see §4 duplicates #2/#3 | D→LS→R |
| Screening questions | dynamic list (app.js:11004-11016) | `screeningQuestions[]` | No | none | D→LS→R |
| Require candidate consent checkbox | checkbox | `candidateConsent` | No | none | D→LS→R |
| Distribution channels | checkbox list, 6 channels (`DISTRIBUTION_CHANNELS_CONFIG`, app.js:10828) | `distributionChannels[]` | Checklist status `Complete`/`Needs attention` | `length > 0`; defaults to `["CareerGo"]` so this is effectively always "Complete" out of the box | D→LS→R |
| External posting URL | url input, tagged *Optional* | `externalPostingUrl` | No | none | D→LS→R |
| Tracking source | text input, tagged *Optional* | `trackingSource` | No | none | D→LS→R |
| Campaign name | text input, tagged *Optional* | `campaignName` | No | none | D→LS→R |
| Expiry date | date input, tagged *Optional* | `distributionExpiry` | No | none | D→LS→R |
| Company introduction | textarea + "Use company profile" button | `companySummary`, `useCompanyProfile` | Checklist status `Complete`/`Optional` | `has(companySummary)` | D→LS→R |
| Accommodation statement | textarea, pre-filled boilerplate default | `accommodationStatement` | Checklist status `Complete`/`Optional` | `has()` — pre-filled default already satisfies it | D→LS→R; **also rendered in the candidate Preview modal** (app.js:11989) — see §4 duplicate #1 |

### Step 5 — Preview & Publish (meta fields)

| Field label | Component | State key | Required? | Validation | Persisted |
|---|---|---|---|---|---|
| (implicit) Preview reviewed | set as a side effect of opening the preview modal, no dedicated input | `previewReviewed` | Checklist status `Complete`/`Needs attention` | Set to `true` the instant `openRolePreviewModal()` runs (app.js:11994-11996) — **merely opening the modal satisfies this, no scrolling/closing/confirmation required** | D→LS→R |
| (implicit) Last saved | display-only, not user-editable | `lastSavedAt` | No | ISO timestamp set by `persistDraft()` | D→LS→R |

---

## 2. State trace

**Source of truth for wizard form state:** the `draft` object created at app.js:11549:
```js
const draft = seedState.employerRoleDrafts[draftId] || makeEmployerRoleDraft(existing);
```
`draftId` is `existing.id` when editing a published role, or `` `draft-${Date.now()}` `` when creating a new one (app.js:11547). `draft` lives in the closure of `renderEmployerRoleBuilder` for the lifetime of that single view-mount; every `bindField`/`bindSelect`/`bindCheckbox`/`bindTagInput`/etc. helper (app.js:11594-11741) mutates this exact object, and every step's markup (`renderWizardStepContent`, app.js:11743) reads from this exact object. Re-rendering steps (`draw()`, app.js:12060) does **not** re-fetch state — it reuses the same in-memory `draft`.

**Source the Step 5 checklist reads:** the same `draft` object, passed directly:
```js
// app.js:11908-11909
const checks = getPublishReadinessChecks(draft);
const review = computeDraftVeraReview(draft);
```
Both calls are inside `renderPreviewPublishStep()`, itself a closure function of `renderEmployerRoleBuilder`, so `draft` here is the identical reference used by every step's field bindings. **Form and checklist read the same store** — confirmed by tracing both call sites back to the single `const draft = ...` declaration; there is no second `readState()` call, no `existing`-vs-`draft` mix-up, and no re-instantiation of `draft` between steps.

**Exact completion predicate per checklist item** (`getPublishReadinessChecks`, app.js:11135-11152, quoted verbatim):
```js
function getPublishReadinessChecks(draft) {
  const has = v => !!(v && String(v).trim());
  const respCount = draft.responsibilities.filter(r => r.trim()).length;
  return [
    { label: "Role basics complete", status: has(draft.title) && has(draft.department) && has(draft.employmentType) ? "Complete" : "Missing" },
    { label: "Role summary added", status: draft.roleSummary && draft.roleSummary.trim().length > 20 ? "Complete" : "Missing" },
    { label: "Responsibilities added", status: respCount >= 3 ? "Complete" : respCount > 0 ? "Needs attention" : "Missing" },
    { label: "Candidate requirements complete", status: draft.mustHaveSkills.length > 0 && has(draft.minExperience) ? "Complete" : "Missing" },
    { label: "Salary and location complete", status: draft.salary.min && draft.salary.max && has(draft.location) ? "Complete" : "Missing" },
    { label: "Benefits reviewed", status: draft.benefits.length > 0 ? "Complete" : "Optional" },
    { label: "Hiring process configured", status: draft.hiringStages.length > 0 ? "Complete" : "Missing" },
    { label: "Application method configured", status: (has(draft.contactPerson) || has(draft.applicationDeadline) || draft.resumeRequired) ? "Complete" : "Needs attention" },
    { label: "Company introduction available", status: has(draft.companySummary) ? "Complete" : "Optional" },
    { label: "Accommodation statement reviewed", status: has(draft.accommodationStatement) ? "Complete" : "Optional" },
    { label: "Distribution channels selected", status: draft.distributionChannels.length > 0 ? "Complete" : "Needs attention" },
    { label: "Preview reviewed", status: draft.previewReviewed ? "Complete" : "Needs attention" }
  ];
}
```

**Exact formula for "Role readiness: N%"** — this is a *different, independently-computed* number, not derived from the checklist above. It comes from `computeDraftVeraReview(draft)` (app.js:11086-11133) and is rendered at app.js:11933 (`Role readiness: <strong>${review.readiness}%</strong>`). The formula:
```js
// app.js:11130-11131
const total = strengths.length + needsAttention.length;
const readiness = total ? Math.round((strengths.length / total) * 100) : 0;
```
`strengths`/`needsAttention` are built by 9 ad-hoc checks earlier in the same function (app.js:11091-11128), and the checks are **asymmetric**: some push to *either* `strengths` *or* `needsAttention` (salary, roleSummary, benefits, companySummary — each always contributes 1 to `total`), one pushes to `strengths` only when truthy with no `needsAttention` counterpart (`workMode`), one pushes to `strengths` only conditionally (`hiringStages`, only when `0 < length ≤ 5`), and two push to `needsAttention` only, with **no matching strength ever added even when the condition is satisfied** — most importantly:
```js
// app.js:11122-11124
if (draft.responsibilities.filter(r => r.trim()).length < 3) {
  needsAttention.push({ text: "Fewer than 3 responsibilities are listed.", action: null });
}
```
Having ≥3 responsibilities contributes **nothing** to `total` or `strengths` — it can only ever hurt the score (when under 3), never help it. The same asymmetry applies to the `mustHaveSkills.length > 8` check and the juniorish/experience-conflict check. Because `total` is not a fixed denominator, "Role readiness: N%" is not a stable, comparable percentage — two drafts with the same objective completeness can score differently depending on which conditional checks happened to fire, and it is architecturally decoupled from the pass/fail checklist immediately to its left. A third, separate percentage (`calculateDraftCompletion` / `DRAFT_REQUIRED_SECTIONS`, app.js:9944-9962, `percent = round(doneCount/10*100)`) exists for **already-published Draft-status roles** on the Roles List and in the Ask-Vera drawer (app.js:9209, 9302, 10122, 10172) — it uses yet another field set and a clean `doneCount/10` formula, and operates on committed `DATA.employerRoles` entries, never on the in-progress wizard `draft`. Three different "how done is this role" numbers exist in the codebase, none of which agree with each other by construction.

---

## 3. Bug confirmation

**Reported symptom:** with title, seniority, employment type, openings, urgency, role summary, and 4 responsibilities all populated, the checklist still shows `Role basics complete: MISSING`, `Role summary added: MISSING`, `Responsibilities added: MISSING`, and readiness 29%.

**Do form and checklist read the same store? Yes.** Traced in §2: both are the single `draft` closure object; there is no stale cache, no second `readState()` read, and no divergent object reference. `bindField`/`bindResponsibilityList` write straight into `draft.roleSummary` / `draft.responsibilities[i]` on every keystroke (app.js:11594-11599, 11650-11654), and `getPublishReadinessChecks(draft)` (app.js:11908) reads the identical object. A plain, direct, manually-typed-in-the-form path was traced field-by-field and contains no code defect — if an employer types a >20-character role summary and 3+ non-empty responsibilities directly into Step 2's textbox/list, the checklist will correctly flip to "Complete."

**Root cause — two field-coverage/UX defects that reproduce exactly the reported symptom set:**

1. **`department` is structurally unreachable from the "Create with Vera" guided flow.** The 11-question conversation (`CREATE_VERA_QUESTIONS`, app.js:10621-10633) asks about `title`, `seniority`, `location`, `workMode`, `employmentType`, `salary`, `mustHaveSkills`, `niceToHaveSkills`, `minExperience`, `educationOrCertification`, `urgency` — **`department` is not among them**, and the content-generation step (`buildCreateVeraSuggestions`, app.js:11361-11386) never derives or suggests it either. Yet `getPublishReadinessChecks` requires `has(draft.department)` for "Role basics complete" (app.js:11139). An employer who builds the role primarily through Vera — which the product explicitly positions as the guided, AI-first path — will have `title`, `seniority`, `employmentType`, and `urgency` populated (exactly 4 of the 7 fields the bug report calls "populated") while `department` sits at its default `""` (app.js:10846) forever, with no prompt anywhere in that flow telling them it's still needed. This alone fully explains `"Role basics complete: MISSING"`.

2. **The Vera review's "accept per field" step silently drops anything left pending, and its UI makes pending suggestions look identical to applied ones.** `roleSummary` and `responsibilities` are generated after the conversation (`generateRoleSummary`/`generateResponsibilities`, app.js:10794-10806 — both always produce well-formed output: full sentences and exactly 4 responsibilities, so they are not the source of a length/count failure). They are only written into `draft` when the employer clicks "Apply all" (app.js:11466-11471, writes every suggested field) **or**, in "Review section by section" mode, when each field is individually marked `accept` and then "Apply accepted changes" is clicked:
   ```js
   // app.js:11494-11501
   qs("[data-create-vera-apply-decisions]", card)?.addEventListener("click", () => {
     const acceptedFields = Object.keys(createVeraDecisions).filter(f => createVeraDecisions[f] === "accept");
     if (!acceptedFields.length) { showToast("Accept at least one section first.", "info"); return; }
     applyCreateVeraSuggestions(draft, createVeraDraftSuggestions, acceptedFields);
     ...
   ```
   The guard on line 11496 only blocks a **fully empty** acceptance set. If an employer accepts `title`/`seniority`/`employmentType`/`urgency` (the obvious, easy-to-accept direct answers) but leaves `roleSummary`/`responsibilities` in the default `pending` state — plausible, since those two rows also carry a "Regenerate" button (app.js:11302) inviting further review rather than an immediate accept — clicking "Apply accepted changes" writes only the 4 accepted fields and **silently discards** the other two, with no confirmation of what was skipped. Compounding this, the section-review row (app.js:11292-11304) renders the full suggested text next to `Current: —` regardless of accept state, so a field that was only *read*, not *accepted*, is visually indistinguishable on screen from one that is already in the draft. This produces exactly the reported combination: title/seniority/employmentType/urgency present, roleSummary/responsibilities visibly "seen" by the employer but never actually written to `draft.roleSummary`/`draft.responsibilities` (still `""`/`[]`, app.js:10850), so both checklist rows read `respCount === 0` / empty string and report **`Missing`** (not the softer "Needs attention," which only appears at `1 ≤ respCount ≤ 2`).

**On the 29% figure:** given the field-state implied above (salary unset, benefits unset, companySummary unset, department unset, roleSummary/responsibilities unset, workMode/hiringStages at their non-empty defaults), `computeDraftVeraReview`'s asymmetric strengths/needsAttention formula (§2) produces a low score by construction — most of the checks that are unmet (salary, benefits, companySummary, plus roleSummary itself) count fully against the score, while the two checklist items that specifically say "Missing" in the bug report (responsibilities) **cannot even contribute a strength** once satisfied, and don't contribute anything while unsatisfied at 0 either besides one `needsAttention` entry. The exact 29% depends on the precise field values in that session (not fully specified in the bug report) and was not independently re-derived byte-for-byte in this static-code audit, but the mechanism — a small, unstable denominator dominated by a handful of unmet checks — is confirmed directly from the quoted formula in §2, and is architecturally a *different number* from the checklist rows shown next to it, which is itself worth flagging as confusing regardless of the specific value.

**Additional, compounding finding:** the checklist never gates anything. `data-emp-publish`'s handler is `() => commitDraft(existing ? existing.status : "Open")` (app.js:12056) — it does not check `getPublishReadinessChecks` at all. An employer can click "Publish role" while every row reads "Missing" and the role will publish immediately. The checklist is advisory-only; the actual risk of this bug is not that it blocks publishing, but that it can either (a) mislead an employer into thinking their AI-drafted role is incomplete when title/seniority/employmentType/urgency genuinely are set, or (b) mask that role summary and responsibilities are in fact still empty on a role that gets published anyway.

---

## 4. Duplicate concepts

| # | Concept | Locations | Detail |
|---|---|---|---|
| 1 | **Accessibility** | Step 3 `accessibilityConsiderations` (textarea, app.js:11802) vs. Step 4 `accommodationStatement` (textarea, app.js:11868, under an explicit "Accessibility & accommodations" subheading) | Two free-text boxes for the same concept. `accommodationStatement` ships with pre-filled boilerplate ("Candidates who require an accommodation…", app.js:10868) and **is** rendered in the candidate-facing Preview modal under an "Accessibility" heading (app.js:11989). `accessibilityConsiderations` has no default text and is never read anywhere outside the wizard's own render/bind — it is effectively an orphan next to a field that already covers the same ground and is the one that actually reaches a candidate view. |
| 2 | **Portfolio** | Step 3 `portfolioRequirement` (select: Optional/Preferred/Required, app.js:11796) vs. Step 4 `applicationPortfolioLink` (single URL input, app.js:11853) | `portfolioRequirement` sets a policy ("is a portfolio required of candidates") and is read by Vera's requirement-warning logic (app.js:10977). `applicationPortfolioLink` collects one literal URL in the "Application setup" block, ambiguously placed among candidate-submission fields (Resume required, Cover letter) even though a single static URL can't represent "each candidate's own portfolio" — it reads more like a leftover placeholder than a real per-application mechanism, and it is never cross-checked against `portfolioRequirement` (e.g., nothing warns if `portfolioRequirement === "Required"` but this URL is blank). |
| 3 | **Required documents — 4 overlapping controls** | Step 4: `requiredDocuments` (freeform text, placeholder "e.g. Resume, portfolio link," app.js:11850), `resumeRequired` (checkbox, app.js:11851), `coverLetterRequired` (select, app.js:11852), `applicationPortfolioLink` (url, app.js:11853) | `requiredDocuments` is a free-text restatement of exactly what the other three structured controls already capture. None of the four are cross-validated (an employer could type "Resume, cover letter" into `requiredDocuments` while `resumeRequired` is unchecked and `coverLetterRequired` is "Not requested," with nothing flagging the contradiction). Only `resumeRequired`/`applicationDeadline`/`contactPerson` feed the "Application method configured" checklist row (app.js:11146); `requiredDocuments`, `coverLetterRequired`, and `applicationPortfolioLink` are not read by any checklist, review, or preview code path found. |
| 4 | **Schedule fields — Step 2 + Step 4** | Step 2: `workingHours` (freeform, "e.g. 9am-6pm, flexible," app.js:11779) vs. Step 4: `workMode` (select, app.js:11832), `hybridDays` (freeform, "e.g. 3 days in office," app.js:11834), `workingDays` (freeform, "e.g. Mon-Fri," app.js:11835), `shiftPattern` (freeform, app.js:11836) | Five separate controls, split across two non-adjacent steps, all describing when/how the person works, with no shared vocabulary (e.g., `workingHours` could restate what `shiftPattern` says, `hybridDays` and `workingDays` can contradict each other, and none of the four freeform ones are validated against `workMode`). None of `workingHours`/`hybridDays`/`workingDays`/`shiftPattern` are read anywhere outside the wizard's own render/bind. |

---

## 5. Destination audit

**Governing structural finding:** `DATA.employerRoles` (what this wizard publishes) and `DATA.jobs` (what the candidate-facing Jobs page, job detail, and application flow actually render — confirmed via `DATA.jobs.find(...)` call sites throughout candidate-side rendering code, e.g. app.js:1185, 2943, 4108-4149) are **two separate hard-coded mock arrays**. No line in app.js pushes, concats, or spreads `DATA.employerRoles` into `DATA.jobs` or vice versa. **A role published through this wizard is never shown to a candidate anywhere in the live candidate app.** The only place a drafted role's fields are rendered in a candidate-like layout is the employer-side "Preview job" modal (`renderJobPreviewContent`, app.js:11969-11991), which simulates the candidate view for the employer's benefit but is not connected to `DATA.jobs`. Fields below marked `CANDIDATE_VISIBLE` therefore mean *visible in that simulated preview only*, not in a real candidate-facing surface.

**CANDIDATE_VISIBLE (preview-modal only — `renderJobPreviewContent`, app.js:11969-11991):**
`title`, `location`, `workMode`, `employmentType`, `salary.min`/`salary.max`/`salary.currency`/`salary.period`, `roleSummary`, `responsibilities[]`, `successLooksLike`, `mustHaveSkills[]`, `niceToHaveSkills[]`, `benefits[]`, `hiringStages[].name`/`.duration`, `companySummary`, `accommodationStatement`.

**INTERNAL_MECHANIC (employer-side consumers other than the field's own step):**
- `mustHaveSkills[]` — Vera requirement warnings (app.js:10971-10972, 10977) and Talent Pipeline candidate-drawer skill-gap display (`role.mustHaveSkills.filter(...)`, app.js:12445).
- `trainableSkills[]`, `portfolioRequirement`, `educationOrCertification`, `equivalentExperienceAccepted`, `seniority`, `minExperience` — feed `getRequirementWarnings` (app.js:10965-10981) and/or `computeDraftVeraReview`'s juniorish-conflict check (app.js:11099-11103).
- `salary.min`/`salary.max`, `roleSummary`, `benefits[]`, `hiringStages[]`, `companySummary`, `workMode` — feed `computeDraftVeraReview` (app.js:11086-11133) strengths/needsAttention scoring.
- `title`, `department`, `employmentType`, `roleSummary`, `responsibilities[]`, `mustHaveSkills[]`, `minExperience`, `salary.min`/`.max`, `location`, `workMode`, `hiringStages[]`, `applicationDeadline`/`contactPerson`, `companySummary`, `accommodationStatement`, `distributionChannels[]`, `previewReviewed` — feed `getPublishReadinessChecks` (app.js:11135-11152) and/or `DRAFT_REQUIRED_SECTIONS`/`calculateDraftCompletion` (app.js:9944-9962), the latter only after the role is committed and shown on the Roles List "Drafts" tab (`renderDraftRow`, app.js:10171-10184) and the Ask-Vera drawer (app.js:9207-9221, 9296-9316).
- `title` — also used for `buildPlainTextJobPosting`'s plain-text export (app.js:11074-11083), the archetype-matching keyword source for Vera's content generator (`pickCreateVeraArchetype`, app.js:10789-10791).

**ORPHAN (no candidate-facing render, no internal consumer beyond the wizard's own read/write):**
`internalJobId`, `jobCategory`, `openings`, `urgency`, `reportsTo`, `hiringOwner`, `targetStartDate`, `contractDuration`, `visaSponsorship`, `rolePurpose`, `firstNinetyDays`, `teamStructure`, `stakeholders`, `tools`, `workingHours`, `travelExpectations`, `accessibilityConsiderations`, `requiredLicences`, `languageRequirements`, `domainKnowledge`, `behaviouralCompetencies`, `availabilityRequirement`, `workAuthorization`, `salary.visibility`, `salary.negotiable`, `bonus`, `commission`, `allowances`, `overtimePolicy`, `equity`, `officeLocation`, `hybridDays`, `workingDays`, `shiftPattern`, `matchThreshold` (rendered as a select and stored, but no filter/scoring function in app.js reads `draft.matchThreshold` or `role.matchThreshold`), `requiredDocuments`, `coverLetterRequired`, `applicationPortfolioLink`, `screeningQuestions[]`, `candidateConsent`, `externalPostingUrl`, `trackingSource`, `campaignName`, `distributionExpiry`, `useCompanyProfile` (only re-enables the `companySummary` textarea via a button handler — no other consumer), `hiringStages[].owner`/`.format` (the list itself is read by the checklist and preview, but these two per-stage sub-fields are collected and displayed only inside the wizard's own editor, app.js:11018-11039, and never surfaced in `renderJobPreviewContent` or read by any checklist).

This is roughly two-thirds of the wizard's ~70 fields. Combined with the `DATA.employerRoles`/`DATA.jobs` split above, the practical read is: most of Steps 1, 2 (except `roleSummary`/`responsibilities`), and large parts of Step 4 (distribution, application-method detail, compensation detail beyond min/max) are captured, autosaved, and displayed back to the employer inside the wizard, but have no downstream effect on any other screen in the current build.

---

## 6. Design tokens

The employer wizard (`.emp-app-shell` scope) sits on top of a much older, unscoped global stylesheet (`styles.css`, 13,600+ lines total) that itself contains **multiple competing `:root` blocks**, several using `!important`, redefining the same custom properties to different values later in the same cascade (e.g. `:root` at line 3, then again at 9108, 9417, 10110, each with different `--muted`/`--red`/`--gold` values). The Employer OS section was recently patched (per the current branch's commit history) to force its own tokens to win via doubled-class specificity (`.emp-app-shell.emp-app-shell ...`) rather than fixing the root cascade — the wizard-relevant token layer is `.emp-app-shell` (styles.css:12419-12453).

### Color tokens actually in effect for the wizard (`.emp-app-shell`, styles.css:12419-12453)
| Token | Value | Used for |
|---|---|---|
| `--emp-bg` | `#f8f4eb` | app shell background |
| `--emp-ink` | `#082f27` | primary text |
| `--emp-muted` | `#607069` | secondary text |
| `--emp-line` | `rgba(14, 44, 37, 0.12)` | borders |
| `--emp-green` | `#07382f` | primary/brand |
| `--emp-green-2` | `#052f29` | — |
| `--emp-green-nav` | `#1f332c` | active-tab background |
| `--emp-teal` | `#6aa59d` | accents, hover borders |
| `--emp-cream-text` | `#fffaf2` | text-on-dark |

### Font tokens
| Token | Value |
|---|---|
| `--emp-serif` | `"Fraunces", Georgia, "Times New Roman", serif` (headings) |
| `--emp-sans` | `"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` (body/controls) |

Global (non-emp, still loaded, `styles.css:1,25-26`): same Fraunces/Inter pair under `--font`/`--font-serif`, imported from Google Fonts CDN.

### Font-size tokens
| Token | Value |
|---|---|
| `--emp-title-xl` | `clamp(40px, 4.4vw, 58px)` |
| `--emp-title-lg` | `26px` |
| `--emp-title-md` | `18px` |
| `--emp-body` | `14px` |
| `--emp-body-sm` | `13px` |
| `--emp-label` | `11px` |
| `--emp-metric-lg` | `34px` |
| `--emp-metric-sm` | `20px` |

### Radius / shadow / container tokens
| Token | Value |
|---|---|
| `--emp-radius-card` | `20px` |
| `--emp-radius-hero` | `28px` |
| `--emp-shadow-card` | `0 18px 44px rgba(35, 29, 18, 0.065)` |
| `--emp-shadow-card-hover` | `0 26px 60px rgba(35, 29, 18, 0.105)` |
| `--emp-shadow-hero` | `0 26px 64px rgba(7, 56, 47, 0.22)` |
| `--emp-container-max` | `1240px` (`.emp-app-main`, styles.css:12619-12626: `width: min(var(--emp-container-max,1240px), calc(100% - 48px))`) |

### Spacing / input-height
No formal spacing scale token exists (no `--emp-space-*` variables). Actual values in wizard CSS cluster ad hoc around 6/8/10/12/14/16/18/20/22px (e.g. `.emp-wizard-form { padding: 22px; gap: 16px; }`, styles.css:12854; `.emp-form-grid-2 { gap: 14px 18px; }`, styles.css:13516). There is likewise no `--emp-input-height` token — wizard inputs get their height implicitly from `padding: 10px 12px` + `font-size: 14px` + a 1px border (styles.css:12856-12858), yielding roughly 38–40px, not a shared, reusable value.

### Places a token is bypassed with a hardcoded value
All within the same "Employer OS" CSS block that otherwise deliberately migrated `.card`/`.btn`/`.pill` to `--emp-*` tokens (styles.css:12403-12510):
- `.emp-wizard-step.done .emp-wizard-step-index { background: #059669; }` (styles.css:12852) — raw green, not `--emp-green` (`#07382f`) or `--emp-teal`.
- `.emp-wizard-step.active { border-color: rgba(37, 99, 235, 0.4); color: var(--blue); }` (styles.css:12851) — uses the legacy global `--blue` token, which itself resolves to `#1B3A34` (a dark teal, not blue — see the root-token collapse noted below) rather than any `--emp-*` value.
- `.emp-callout-label.warn`, `.emp-checklist li.warn` → `color: #b45309;` (styles.css:12866, 12892) — raw amber.
- Checklist status colors are a completely separate, ungoverned palette, none of which reference `--emp-*` or `--soft`/`--muted`: `.emp-check-complete` → `#0a7a4c` (styles.css:13558), `.emp-check-missing` → `#b91c1c` (styles.css:13560), `.emp-check-needs-attention` → `#b45309` (styles.css:13562) — three more hardcoded hexes not defined as tokens anywhere, each reused verbatim rather than referenced from a variable, so a future rebrand would require a manual find/replace across all four/five of these usages.
- `.emp-section-label { color: #67756f; }` (styles.css:12634-12637) — hardcoded, and notably *not even equal to* `--emp-muted` (`#607069`), i.e. a near-duplicate value that has drifted from the token it should be referencing.
- `.emp-save-indicator.emp-save-error`, `.emp-save-retry`, `.btn-danger` → `#b91c1c` / `#991b1b` (styles.css:13541-13543, 13463-13466) — same raw red repeated rather than tokenized.
- `.emp-cv-bubble-employer { background: var(--emp-green, #07382f); }` and similar chat-bubble/chip rules (styles.css:13594, 13599) use `var(--token, hardcoded-fallback)` — technically token-first, but the literal fallback duplicates the token's current value inline, so the two will silently diverge if `--emp-green` is ever changed without updating every fallback.
- Upstream of all of the above: the base, unscoped `:root` (styles.css:3-27) sets `--muted`, `--purple`, `--magenta`, `--blue`, `--red`, `--dark` to the **same literal value** `#1B3A34`, i.e. five semantically distinct color names have been collapsed to one hardcoded hex at the root, then selectively "corrected" again in later `!important` `:root` blocks (styles.css:9108-9128, 9417-9436) that restore some (not all) of them to distinct values. Any wizard rule that still references the legacy `--blue`/`--red`/`--muted` tokens (several do, per above) inherits whichever of these competing definitions happens to win the cascade at that point in the file, rather than a single source of truth.
