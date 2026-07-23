# Job-Creation Wizard Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the 5-step employer job-creation wizard's field layout per `docs/superpowers/specs/2026-07-18-job-wizard-restructure-design.md`, consolidate the required-documents controls, add an Additional-compensation repeater, migrate existing draft/role data losslessly, and add ✓/amber-dot stepper indicators.

**Architecture:** All changes live in `app.js` (data model in `makeEmployerRoleDraft`, migration in the same function's merge branch, step markup in `renderWizardStepContent`/`renderPreviewPublishStep`, binds in `bindEvents`) and `styles.css` (new `<details>`/repeater/tab-strip styles, reusing existing `--emp-*` tokens). No new files — the wizard is one cohesive closure-scoped component (`renderEmployerRoleBuilder`) and splitting it now is out of scope (matches existing codebase pattern of one large `app.js`).

**Tech Stack:** Vanilla JS (no framework, no build step), Node's built-in `node:test` for unit tests (established in Task A).

## Global Constraints

- No HTML `required` attributes (matches existing pattern — validation is checklist-only, per the audit).
- Every new/moved field keeps its existing `data-field-*` binding convention (`bindField`/`bindSelect`/`bindCheckbox`).
- No field is ever deleted from an existing `draft`/role object during migration — legacy keys are left in place, unread.
- Reuse existing `--emp-*` design tokens from the visual-polish pass; no new hardcoded colors.
- `node --check app.js` and `npm test` must pass after every task.

---

### Task 1: Data model — new fields, retire old ones, migration

**Files:**
- Modify: `app.js` — `makeEmployerRoleDraft` (currently ~app.js:10843-10881, confirm exact lines before editing since line numbers have shifted from earlier edits this session — locate via `function makeEmployerRoleDraft`)
- Test: `tests/wizard-migration.test.js` (new file)

**Interfaces:**
- Produces: `draft.additionalCompensation: Array<{type: string, value: string}>`, `draft.requiredDocumentTypes: {resume: "Required"|"Optional", coverLetter: "Required"|"Optional", portfolio: "Required"|"Optional"}`. Both consumed by Task 5 (Step 4 markup) and Task 6 (Step 5 markup).
- Consumes: nothing new (pure data-shape change).

- [ ] **Step 1: Write the failing migration tests**

Create `tests/wizard-migration.test.js`:

```js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

test("new draft has requiredDocumentTypes and additionalCompensation defaults", () => {
  const draft = app.makeEmployerRoleDraft();
  assert.deepEqual(draft.requiredDocumentTypes, { resume: "Required", coverLetter: "Optional", portfolio: "Optional" });
  assert.deepEqual(draft.additionalCompensation, []);
});

test("legacy resumeRequired/coverLetterRequired/portfolioRequirement migrate into requiredDocumentTypes", () => {
  const legacy = {
    resumeRequired: false,
    coverLetterRequired: "Required",
    portfolioRequirement: "Preferred"
  };
  const draft = app.makeEmployerRoleDraft(legacy);
  assert.deepEqual(draft.requiredDocumentTypes, { resume: "Optional", coverLetter: "Required", portfolio: "Optional" });
});

test("legacy bonus/commission/etc migrate into additionalCompensation rows, in order, skipping empty ones", () => {
  const legacy = { bonus: "RM 5,000 annual", commission: "", allowances: "RM 300/mo", overtimePolicy: "", equity: "0.1%" };
  const draft = app.makeEmployerRoleDraft(legacy);
  assert.deepEqual(draft.additionalCompensation, [
    { type: "Bonus", value: "RM 5,000 annual" },
    { type: "Allowances", value: "RM 300/mo" },
    { type: "Equity", value: "0.1%" }
  ]);
});

test("existing requiredDocumentTypes/additionalCompensation on a draft are preserved, not re-migrated", () => {
  const existing = {
    requiredDocumentTypes: { resume: "Optional", coverLetter: "Optional", portfolio: "Required" },
    additionalCompensation: [{ type: "Custom", value: "x" }],
    bonus: "should be ignored since requiredDocumentTypes/additionalCompensation already present"
  };
  const draft = app.makeEmployerRoleDraft(existing);
  assert.deepEqual(draft.requiredDocumentTypes, { resume: "Optional", coverLetter: "Optional", portfolio: "Required" });
  assert.deepEqual(draft.additionalCompensation, [{ type: "Custom", value: "x" }]);
});

test("legacy fields survive on the draft object after migration (not deleted)", () => {
  const draft = app.makeEmployerRoleDraft({ bonus: "RM 5,000" });
  assert.equal(draft.bonus, "RM 5,000");
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd c:/Users/laisi/careergo && npx --no-install node --test tests/wizard-migration.test.js` (or `node --test tests/wizard-migration.test.js` from repo root)
Expected: FAIL — `draft.requiredDocumentTypes` is `undefined`, `assert.deepEqual` throws.

- [ ] **Step 3: Add the new fields and migration logic**

In `makeEmployerRoleDraft`, add to the `base` object (near the existing `benefits: []` line, Step 4 section):

```js
requiredDocumentTypes: { resume: "Required", coverLetter: "Optional", portfolio: "Optional" },
additionalCompensation: [],
```

In the merge branch (`if (!existing) return base; const merged = { ...base }; ...`), before the `Object.keys(base).forEach(...)` loop, add:

```js
if (!existing.requiredDocumentTypes) {
  merged.requiredDocumentTypes = {
    resume: existing.resumeRequired ? "Required" : "Optional",
    coverLetter: existing.coverLetterRequired === "Required" ? "Required" : "Optional",
    portfolio: existing.portfolioRequirement === "Required" ? "Required" : "Optional"
  };
}
if (!existing.additionalCompensation) {
  const legacyComp = [
    ["Bonus", existing.bonus], ["Commission", existing.commission], ["Allowances", existing.allowances],
    ["Overtime policy", existing.overtimePolicy], ["Equity", existing.equity]
  ];
  merged.additionalCompensation = legacyComp.filter(([, value]) => value && String(value).trim()).map(([type, value]) => ({ type, value }));
}
```

Note: the existing `Object.keys(base).forEach` loop that follows will subsequently try to copy `existing.requiredDocumentTypes`/`existing.additionalCompensation` into `merged` if they exist on `existing` — since `requiredDocumentTypes` is a plain object (not an array), it hits the `else merged[key] = existing[key]` branch, which is correct (direct assignment, matching how `salary` is NOT handled — actually `salary` gets special-cased; `requiredDocumentTypes` doesn't need special-casing since we want a direct overwrite when present, not a partial merge). Verify this by re-reading the loop before editing — if `Array.isArray(base[key])` is checked first, `requiredDocumentTypes` (a plain object) falls through to the `else` branch correctly.

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test tests/wizard-migration.test.js`
Expected: all 5 tests PASS.

- [ ] **Step 5: Update `module.exports` and commit**

`makeEmployerRoleDraft` is already exported (Task A). No export changes needed.

```bash
git add app.js tests/wizard-migration.test.js
git commit -m "feat: add requiredDocumentTypes/additionalCompensation with lossless migration from legacy fields"
```

---

### Task 2: Update `isApplicationMethodConfigured` predicate

**Files:**
- Modify: `app.js` — `isApplicationMethodConfigured` (search `function isApplicationMethodConfigured`)
- Modify: `tests/readiness.test.js` (add one test)

**Interfaces:**
- Consumes: `draft.requiredDocumentTypes.resume` (from Task 1).
- Produces: same signature `isApplicationMethodConfigured(draft): boolean`, still consumed by `getPublishReadinessChecks`/`getReadinessPredicates` unchanged.

- [ ] **Step 1: Write the failing test**

Add to `tests/readiness.test.js`:

```js
test("application method configured reads requiredDocumentTypes.resume instead of the retired resumeRequired field", () => {
  const draft = app.makeEmployerRoleDraft();
  draft.requiredDocumentTypes.resume = "Optional";
  draft.contactPerson = "";
  draft.applicationDeadline = "";
  const predicates = app.getReadinessPredicates(draft);
  assert.equal(predicates.application_method_configured, false);

  draft.requiredDocumentTypes.resume = "Required";
  const predicates2 = app.getReadinessPredicates(draft);
  assert.equal(predicates2.application_method_configured, true);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `node --test tests/readiness.test.js`
Expected: FAIL on the second assertion — current code reads `draft.resumeRequired` (still `true` by default on a fresh draft regardless of `requiredDocumentTypes`), so the FIRST assertion (`false`) actually fails since `resumeRequired` defaulting `true` makes it `true` not `false`.

- [ ] **Step 3: Update the predicate**

Change:
```js
function isApplicationMethodConfigured(draft) { return hasText(draft.contactPerson) || hasText(draft.applicationDeadline) || !!draft.resumeRequired; }
```
to:
```js
function isApplicationMethodConfigured(draft) { return hasText(draft.contactPerson) || hasText(draft.applicationDeadline) || draft.requiredDocumentTypes.resume === "Required"; }
```

- [ ] **Step 4: Run to verify it passes**

Run: `node --test tests/readiness.test.js tests/wizard-migration.test.js`
Expected: all PASS.

- [ ] **Step 5: Commit**

```bash
git add app.js tests/readiness.test.js
git commit -m "feat: readiness predicate reads requiredDocumentTypes instead of retired resumeRequired"
```

---

### Task 3: Step 1 markup — add location/workMode, Advanced disclosure

**Files:**
- Modify: `app.js` — `renderWizardStepContent` case 0 (search `case 0:` inside `renderWizardStepContent`)
- Modify: `app.js` — `bindEvents`'s `if (activeStep === 0) { ... }` block

**Interfaces:**
- Consumes: `draft.location`, `draft.workMode` (existing keys, just newly rendered on this step), `draft.internalJobId`, `draft.reportsTo`, `draft.hiringOwner`, `draft.visaSponsorship`, `draft.contractDuration` (existing keys, moved inside a details block).
- Produces: nothing new for other tasks (this step is self-contained UI).

- [ ] **Step 1: Locate and read the current Step 1 markup block**

Read `app.js` from `case 0:` to the line before `case 1:` in `renderWizardStepContent` to get the exact current text (already known from this session, but re-confirm line numbers before editing — they will have shifted due to Task 1/2 edits).

- [ ] **Step 2: Replace the Step 1 template**

Replace the `case 0:` return template's `.emp-form-grid-2` block. New structure: the grid keeps `title`, `department`, `jobCategory`, `seniority`, `employmentType`, `openings`, `urgency`, `targetStartDate`, plus **new** `location` and `workMode` (copy the exact `<label>` markup for these two fields verbatim from the current Step 4 `case 3:` block — same `data-field-location`/`data-field-workMode` attributes, same options list for workMode `["On-site","Hybrid","Remote"]`). After the grid, replace the standalone `contractDuration` conditional `<label>` and remove `internalJobId`/`reportsTo`/`hiringOwner`/`visaSponsorship` from the grid, replacing with:

```html
<details class="emp-advanced-disclosure">
  <summary>Advanced</summary>
  <div class="emp-form-grid-2">
    <label>Internal job ID <span class="emp-optional-tag">Optional</span><input type="text" data-field-internalJobId value="${escapeHtml(draft.internalJobId)}" placeholder="e.g. ENG-2026-014"></label>
    <label>Reports to <span class="emp-optional-tag">Optional</span><input type="text" data-field-reportsTo value="${escapeHtml(draft.reportsTo)}" placeholder="e.g. Engineering Manager"></label>
    <label>Hiring owner <span class="emp-optional-tag">Optional</span><input type="text" data-field-hiringOwner value="${escapeHtml(draft.hiringOwner)}" placeholder="Who owns this hire internally"></label>
    <label>Visa sponsorship<select data-field-visaSponsorship>${["Not available", "Available", "Case by case"].map(o => `<option ${draft.visaSponsorship === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>
    ${["Contract", "Temporary", "Internship", "Freelance"].includes(draft.employmentType) ? `<label>Contract duration<input type="text" data-field-contractDuration value="${escapeHtml(draft.contractDuration)}" placeholder="e.g. 6 months"></label>` : ""}
  </div>
</details>
```

- [ ] **Step 3: Update `bindEvents`'s Step 1 block**

In `if (activeStep === 0) { ... }`, add (copy exact binding lines from the current Step 4 block for these two fields):
```js
bindField("[data-field-location]", "location");
qs("[data-field-workMode]", root)?.addEventListener("change", e => { draft.workMode = e.target.value; persistDraft(); draw(); });
```
Remove nothing from this block — the moved fields (`internalJobId`, `reportsTo`, `hiringOwner`, `visaSponsorship`, `contractDuration`) keep their exact existing `bindField`/`bindSelect` calls; a `<details>` element doesn't change how its descendants are queried by `qs`/`qsa` (they're still in `root`'s subtree), so these lines are unchanged, just now bind to elements inside the disclosure.

- [ ] **Step 4: Manual verification**

Run: `node --check app.js` — expect no syntax errors.
Then use the same Playwright harness from the visual-polish pass (`tests/../scratchpad` pattern is external to the repo; for this plan, write a throwaway script following the same `loadApp`-via-localStorage pattern used earlier this session, navigate to step 1, screenshot, confirm Location/Work mode appear in the main grid and the four Advanced fields are hidden until "Advanced" is clicked).

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: move location/workMode into Step 1, collapse rarely-used fields into Advanced disclosure"
```

---

### Task 4: Step 2 markup — remove working hours

**Files:**
- Modify: `app.js` — `renderWizardStepContent` case 1
- Modify: `app.js` — `bindEvents`'s `if (activeStep === 1) { ... }` block

**Interfaces:** none (self-contained; `workingHours` field itself is added back in Task 5 on Step 4).

- [ ] **Step 1: Remove the `workingHours` label** from the `case 1:` template's `.emp-form-grid-2` block (the `<label>Working hours ...` line).
- [ ] **Step 2: Remove `bindField("[data-field-workingHours]", "workingHours");`** from the `activeStep === 1` block in `bindEvents`.
- [ ] **Step 3: `node --check app.js`** — expect no errors.
- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: move working hours out of Step 2 (now lives on Step 4 with other schedule fields)"
```

---

### Task 5: Step 3 markup — match threshold + pool estimate, remove retired fields

**Files:**
- Modify: `app.js` — `renderWizardStepContent` case 2
- Modify: `app.js` — `bindEvents`'s `if (activeStep === 2) { ... }` block
- New function: `estimateCandidatePool(draft)`

**Interfaces:**
- Produces: `estimateCandidatePool(draft): number`, exported alongside the other pure functions for a unit test.
- Consumes: `draft.mustHaveSkills`, `draft.matchThreshold`, `draft.seniority`.

- [ ] **Step 1: Write the failing test for `estimateCandidatePool`**

Add to `tests/readiness.test.js` (it's testing a pure function, same pattern as the readiness predicates):
```js
test("estimateCandidatePool decreases as must-have count or match threshold increases", () => {
  const base = app.makeEmployerRoleDraft();
  base.mustHaveSkills = ["SQL"];
  base.matchThreshold = 60;
  const low = app.estimateCandidatePool(base);

  const moreSkills = { ...base, mustHaveSkills: ["SQL", "Python", "AWS", "Docker", "Kubernetes"] };
  assert.ok(app.estimateCandidatePool(moreSkills) < low);

  const higherThreshold = { ...base, matchThreshold: 90 };
  assert.ok(app.estimateCandidatePool(higherThreshold) < low);

  assert.ok(Number.isInteger(app.estimateCandidatePool(base)));
  assert.ok(app.estimateCandidatePool(base) >= 3);
});
```

- [ ] **Step 2: Run to verify it fails** — `estimateCandidatePool is not a function`.

- [ ] **Step 3: Implement `estimateCandidatePool`**

Add near `computeDraftVeraReview` (same section of `app.js`):
```js
const CANDIDATE_POOL_BASE_BY_SENIORITY = {
  "Internship": 400, "Entry level": 320, "Junior": 260, "Mid-level": 180,
  "Senior": 110, "Lead": 60, "Manager": 45, "Director": 20, "Executive": 10
};
function estimateCandidatePool(draft) {
  const base = CANDIDATE_POOL_BASE_BY_SENIORITY[draft.seniority] || 150;
  const skillPenalty = Math.pow(0.82, draft.mustHaveSkills.length);
  const thresholdPenalty = 1 - ((draft.matchThreshold - 50) / 100);
  return Math.max(3, Math.round(base * skillPenalty * thresholdPenalty));
}
```
This is deterministic (no randomness), decreases with more must-haves (`0.82^n` shrinks as `n` grows) and with a higher threshold (`thresholdPenalty` shrinks as `matchThreshold` rises past 50), matching the spec's requirement.

- [ ] **Step 4: Run to verify it passes** — `node --test tests/readiness.test.js`.

- [ ] **Step 5: Add `estimateCandidatePool` to `module.exports`.**

- [ ] **Step 6: Update the Step 3 template**

In `case 2:`, after the trainable-skills tag input block and before the `.emp-form-grid-2` for `minExperience`/etc, insert:
```html
<label>Match threshold<select data-field-matchThreshold>
  ${[[60, "Broad pool — 60%"], [70, "Balanced — 70%"], [80, "Focused — 80%"], [90, "Very selective — 90%"]].map(([v, l]) => `<option value="${v}" ${draft.matchThreshold === v ? "selected" : ""}>${l}</option>`).join("")}
</select></label>
<p class="emp-field-help">~${estimateCandidatePool(draft)} candidates at this threshold.</p>
```
(copy the `matchThreshold` `<select>` markup verbatim from the current Step 4 block). Remove the `<label>Domain knowledge ...`, `<label>Behavioural competencies ...`, and the standalone `<label>Accessibility considerations ...` textarea, and remove the `<label>Portfolio / work sample<select data-field-portfolioRequirement>...` line, from this step's `.emp-form-grid-2`.

- [ ] **Step 7: Update `bindEvents`'s Step 3 block**

Add:
```js
qs("[data-field-matchThreshold]", root)?.addEventListener("change", e => { draft.matchThreshold = Number(e.target.value); persistDraft(); draw(); });
```
Remove: `bindField("[data-field-domainKnowledge]", "domainKnowledge");`, `bindField("[data-field-behaviouralCompetencies]", "behaviouralCompetencies");`, `bindField("[data-field-accessibilityConsiderations]", "accessibilityConsiderations");`, and the `bindSelect("[data-field-portfolioRequirement]", "portfolioRequirement");` line.

- [ ] **Step 8: `node --check app.js`, run all tests, commit**

```bash
node --check app.js && npm test
git add app.js tests/readiness.test.js
git commit -m "feat: add match threshold + live pool estimate to Step 3, retire domain knowledge/behavioural competencies/accessibility/portfolio fields from this step"
```

---

### Task 6: Step 4 markup — schedule fields, Additional compensation repeater

**Files:**
- Modify: `app.js` — `renderWizardStepContent` case 3
- Modify: `app.js` — `bindEvents`'s `if (activeStep === 3) { ... }` block
- New function: `renderAdditionalCompensationEditor(draft)` + `bindAdditionalCompensationEditor()` (same pattern as `renderHiringStagesEditor`/`bindHiringStagesEditor`)

**Interfaces:**
- Consumes: `draft.additionalCompensation` (from Task 1).
- Produces: nothing consumed elsewhere.

- [ ] **Step 1: Remove moved-out fields from `case 3:`**

Remove the `location`/`workMode` labels (now on Step 1, Task 3) and the `matchThreshold` label + its help paragraph (now on Step 3, Task 5) from the Step 4 template. Remove the `bonus`/`commission`/`allowances`/`overtimePolicy`/`equity` labels from the `.emp-form-grid-2` under "Compensation".

- [ ] **Step 2: Add `workingHours` back, under Work arrangement's schedule fields**

In the `.emp-form-grid-2` under "Work arrangement" (`officeLocation`/`hybridDays`/`workingDays`/`shiftPattern`), add:
```html
<label>Working hours <span class="emp-optional-tag">Optional</span><input type="text" data-field-workingHours value="${escapeHtml(draft.workingHours)}" placeholder="e.g. 9am-6pm, flexible"></label>
```

- [ ] **Step 3: Write `renderAdditionalCompensationEditor` and `bindAdditionalCompensationEditor`**

Follow the exact pattern of `renderScreeningQuestionsList`/`bindScreeningQuestionsList` (2-field row instead of 1):
```js
function renderAdditionalCompensationEditor(draft) {
  return `
    <div data-addcomp-list>
      ${draft.additionalCompensation.map((c, i) => `
        <div class="emp-resp-row">
          <input type="text" data-addcomp-field="type" data-addcomp-index="${i}" value="${escapeHtml(c.type)}" placeholder="e.g. Signing bonus" list="emp-addcomp-type-options">
          <input type="text" data-addcomp-field="value" data-addcomp-index="${i}" value="${escapeHtml(c.value)}" placeholder="e.g. RM 5,000 one-time">
          <button type="button" class="btn btn-ghost btn-sm" data-addcomp-remove="${i}" aria-label="Remove">${icon("x")}</button>
        </div>
      `).join("")}
    </div>
    <datalist id="emp-addcomp-type-options">${["Bonus", "Commission", "Allowances", "Overtime policy", "Equity"].map(t => `<option value="${escapeHtml(t)}">`).join("")}</datalist>
    <button type="button" class="btn btn-ghost btn-sm" data-addcomp-add>${icon("plus")} Add compensation item</button>
  `;
}
```
```js
function bindAdditionalCompensationEditor() {
  qsa("[data-addcomp-field]", root).forEach(input => {
    input.addEventListener("input", () => {
      draft.additionalCompensation[Number(input.dataset.addcompIndex)][input.dataset.addcompField] = input.value;
      scheduleAutosave();
    });
    input.addEventListener("blur", flushAndPersist);
  });
  qsa("[data-addcomp-remove]", root).forEach(btn => btn.addEventListener("click", () => {
    draft.additionalCompensation.splice(Number(btn.dataset.addcompRemove), 1);
    persistDraft(); draw();
  }));
  qs("[data-addcomp-add]", root)?.addEventListener("click", () => {
    draft.additionalCompensation.push({ type: "", value: "" });
    persistDraft(); draw();
  });
}
```

- [ ] **Step 4: Insert the repeater into the Step 4 template inside an Advanced disclosure**

Under "Compensation" heading, after the base salary/currency/visibility/negotiable grid, add:
```html
<details class="emp-advanced-disclosure">
  <summary>Advanced — additional compensation</summary>
  ${renderAdditionalCompensationEditor(draft)}
</details>
```

- [ ] **Step 5: Update `bindEvents`'s Step 3 (now `activeStep === 3` for Offer) block**

Remove `bindField` calls for `bonus`/`commission`/`allowances`/`overtimePolicy`/`equity`, and the `location`/`workMode`/`matchThreshold` binds (moved to Tasks 3/5). Add `bindField("[data-field-workingHours]", "workingHours");` and `bindAdditionalCompensationEditor();`.

- [ ] **Step 6: `node --check app.js`, run all tests, commit**

```bash
node --check app.js && npm test
git add app.js
git commit -m "feat: Step 4 becomes compensation/benefits/schedule only, adds Additional compensation repeater behind Advanced"
```

---

### Task 7: Step 5 markup — application setup, distribution, company intro, required-documents control, tab strip

**Files:**
- Modify: `app.js` — `renderWizardStepContent` (Step 4's application-setup/distribution/company sections move into a **new** function `renderHiringAndPublishExtras(draft)` called from `renderPreviewPublishStep`, since Step 5 is no longer built via `renderWizardStepContent`'s switch — it's built by `renderPreviewPublishStep`)
- Modify: `app.js` — `renderPreviewPublishStep` (add tab strip, embed the new extras)
- Modify: `app.js` — `bindEvents`'s Step 5 handling
- New function: `renderRequiredDocumentsControl(draft)` + bind logic

**Interfaces:**
- Consumes: `draft.requiredDocumentTypes` (Task 1), `draft.hiringStages`, `draft.screeningQuestions`, `draft.candidateConsent`, `draft.distributionChannels`, `draft.companySummary`, `draft.useCompanyProfile`, `draft.accommodationStatement` (all existing keys).
- Produces: nothing consumed by other tasks.

- [ ] **Step 1: Write `renderRequiredDocumentsControl`**

```js
function renderRequiredDocumentsControl(draft) {
  const docs = [["resume", "Resume"], ["coverLetter", "Cover letter"], ["portfolio", "Portfolio"]];
  return `
    <div class="emp-required-docs">
      ${docs.map(([key, label]) => `
        <div class="emp-required-doc-row">
          <span>${label}</span>
          <div class="emp-required-doc-toggle" data-doc-toggle="${key}">
            <button type="button" class="${draft.requiredDocumentTypes[key] === "Required" ? "active" : ""}" data-doc-value="Required">Required</button>
            <button type="button" class="${draft.requiredDocumentTypes[key] === "Optional" ? "active" : ""}" data-doc-value="Optional">Optional</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
function bindRequiredDocumentsControl() {
  qsa("[data-doc-toggle]", root).forEach(group => {
    const key = group.dataset.docToggle;
    qsa("button", group).forEach(btn => btn.addEventListener("click", () => {
      draft.requiredDocumentTypes[key] = btn.dataset.docValue;
      persistDraft(); draw();
    }));
  });
}
```

- [ ] **Step 2: Write `renderHiringAndPublishExtras(draft)`**

Move the current Step 4 template's "Application setup" through "Accessibility & accommodations" sections into this new function, with two changes: (a) replace the `requiredDocuments`/`resumeRequired`/`coverLetterRequired`/`applicationPortfolioLink` block with `renderRequiredDocumentsControl(draft)`; (b) the section heading changes from "Accessibility & accommodations" to "Accessibility & equal opportunity" (copy text unchanged otherwise — `accommodationStatement` textarea is unchanged). Full function:

```js
function renderHiringAndPublishExtras(draft) {
  return `
    <h3 class="emp-form-subhead">Hiring process</h3>
    ${renderHiringStagesEditor(draft)}

    <h3 class="emp-form-subhead">Application setup</h3>
    <div class="emp-form-grid-2">
      <label>Application deadline <span class="emp-optional-tag">Optional</span><input type="date" data-field-applicationDeadline value="${draft.applicationDeadline}"></label>
      <label>Contact person <span class="emp-optional-tag">Optional</span><input type="text" data-field-contactPerson value="${escapeHtml(draft.contactPerson)}"></label>
    </div>
    ${renderRequiredDocumentsControl(draft)}
    <div>
      <span class="emp-tags-label">Screening questions shown at application</span>
      ${renderScreeningQuestionsList(draft)}
    </div>
    <label class="check-field custom-checkbox emp-checkbox-inline"><input type="checkbox" data-field-candidateConsent ${draft.candidateConsent ? "checked" : ""}> Require a candidate consent checkbox before applying</label>

    <h3 class="emp-form-subhead">Job distribution</h3>
    ${renderDistributionSection(draft)}

    <h3 class="emp-form-subhead">About the company</h3>
    ${renderCompanySection(draft)}

    <h3 class="emp-form-subhead">Accessibility & equal opportunity</h3>
    <label>Accommodation statement<textarea data-field-accommodationStatement rows="2">${escapeHtml(draft.accommodationStatement)}</textarea></label>
  `;
}
```

- [ ] **Step 3: Remove the moved sections from `case 3:` (Step 4 template)**

Delete "Application setup" through "Accessibility & accommodations" from the Step 4 template (everything now lives in `renderHiringAndPublishExtras`, Step 4 keeps only Compensation/Benefits/Work arrangement).

- [ ] **Step 4: Add the tab strip + extras to `renderPreviewPublishStep`**

`renderPreviewPublishStep` currently returns a two-column `.emp-publish-layout` (checklist left, Vera review right). Change to a three-column-worth-of-content layout: left column gains `renderHiringAndPublishExtras(draft)` above the existing checklist card (in its own `.card`), and the right column becomes a tab strip. Add module-level state (same pattern as `createVeraReviewMode`): `let publishActiveTab = "preview";` near the top of `renderEmployerRoleBuilder`'s closure variables. New right-column markup:

```html
<div class="emp-publish-right">
  <div class="emp-tab-strip">
    <button type="button" class="${publishActiveTab === "preview" ? "active" : ""}" data-publish-tab="preview">Preview</button>
    <button type="button" class="${publishActiveTab === "readiness" ? "active" : ""}" data-publish-tab="readiness">Readiness</button>
    <button type="button" class="${publishActiveTab === "vera" ? "active" : ""}" data-publish-tab="vera">Vera</button>
  </div>
  ${publishActiveTab === "preview" ? renderPublishPreviewTab(draft) : publishActiveTab === "readiness" ? renderPublishReadinessTab(checks) : renderPublishVeraTab(review, ri, pendingSuggestions, draft)}
</div>
```
Extract three small render functions (`renderPublishPreviewTab`, `renderPublishReadinessTab`, `renderPublishVeraTab`) from the content currently inline in `renderPreviewPublishStep`: `renderPublishReadinessTab(checks)` returns the existing `.emp-publish-checklist` card markup; `renderPublishVeraTab(...)` returns the existing "Vera role review" + Role Intelligence card markup; `renderPublishPreviewTab(draft)` is **new** — a lightweight inline preview (reuse `renderJobPreviewContent`, called with the same `company`/`responsibilities` args `openRolePreviewModal` uses, so the Preview tab shows the same content the "Preview job" modal shows, just docked instead of in a modal).

- [ ] **Step 5: Bind the tab strip and the new controls**

In `bindEvents`, in the `activeStep === 4` branch (or wherever Step 5's binds live — check if there's already an `else if (activeStep === 4)` for the wizard-step case; if Step 5 currently has no `bindEvents` branch because `renderPreviewPublishStep` handles its own binds inline, add the tab-strip binding there instead):
```js
qsa("[data-publish-tab]", root).forEach(btn => btn.addEventListener("click", () => { publishActiveTab = btn.dataset.publishTab; draw(); }));
bindRequiredDocumentsControl();
```
Also bind the moved Application-setup/distribution/company fields (`applicationDeadline`, `contactPerson`, `candidateConsent`, distribution checkboxes, company summary, accommodation statement, screening questions) — copy their exact existing `bindField`/`bindCheckbox`/screening-list bind calls from the current `activeStep === 3` block into wherever Step 5's binds now run.

- [ ] **Step 6: `node --check app.js`, run all tests, commit**

```bash
node --check app.js && npm test
git add app.js
git commit -m "feat: Step 5 gains application setup/distribution/company intro (moved from Step 4), consolidated required-documents control, Preview/Readiness/Vera tab strip"
```

---

### Task 8: Stepper ✓/amber-dot indicators

**Files:**
- Modify: `app.js` — `draw()` (the `EMPLOYER_ROLE_BUILDER_STEPS.map(...)` block) and `renderEmployerRoleBuilder`'s closure-scoped state

**Interfaces:**
- Consumes: `getReadinessPredicates(draft)` (Task A), `draft.location` (for the Step 1 special case per the design doc).

- [ ] **Step 1: Add `visitedSteps` state**

Near `let activeStep = 0;` in `renderEmployerRoleBuilder`, add: `const visitedSteps = new Set([0]);`. In `bindEvents`'s step-pill click handler and the `data-emp-next`/`data-emp-prev` handlers, add `visitedSteps.add(activeStep);` after each `activeStep = ...` assignment (4 call sites: step-pill click, prev, next, and any other place `activeStep` is reassigned).

- [ ] **Step 2: Write the per-step completion function**

```js
function isStepComplete(stepIndex, predicates) {
  if (stepIndex === 0) return predicates.role_basics_complete && hasText(draft.location);
  if (stepIndex === 1) return predicates.role_summary_added && predicates.responsibilities_added;
  if (stepIndex === 2) return predicates.candidate_requirements_complete;
  if (stepIndex === 3) return draft.salary.min && draft.salary.max;
  if (stepIndex === 4) return predicates.hiring_process_configured && predicates.application_method_configured && predicates.distribution_channels_selected && predicates.preview_reviewed;
  return false;
}
```
(Defined as a plain function inside `renderEmployerRoleBuilder`'s closure since it needs `draft`, not exported — it's UI-only per the design doc's recommendation not to change Task A's predicates themselves.)

- [ ] **Step 3: Update the step-pill markup in `draw()`**

```js
${EMPLOYER_ROLE_BUILDER_STEPS.map((label, i) => {
  const predicates = getReadinessPredicates(draft);
  const complete = isStepComplete(i, predicates);
  const showDot = !complete && visitedSteps.has(i);
  return `
    <button type="button" class="emp-wizard-step ${i === activeStep ? "active" : ""} ${complete ? "done" : ""}" data-emp-step="${i}">
      <span class="emp-wizard-step-index">${complete ? icon("check") : showDot ? "" : i + 1}</span>
      ${showDot ? `<span class="emp-wizard-step-dot"></span>` : ""}
      <span>${label}</span>
    </button>
  `;
}).join("")}
```

- [ ] **Step 4: `node --check app.js`, run all tests, commit**

```bash
node --check app.js && npm test
git add app.js
git commit -m "feat: stepper shows checkmark on complete steps, amber dot on visited-but-incomplete steps"
```

---

### Task 9: CSS for new elements

**Files:**
- Modify: `styles.css` (append near the other "Create Role wizard redesign" rules, ~styles.css:13537+ before this plan's edits shift line numbers)

- [ ] **Step 1: Add styles**

```css
.emp-advanced-disclosure { margin: 8px 0 4px; }
.emp-advanced-disclosure summary { cursor: pointer; font-size: 13px; font-weight: 700; color: var(--emp-muted); padding: 6px 0; list-style: none; }
.emp-advanced-disclosure summary::-webkit-details-marker { display: none; }
.emp-advanced-disclosure summary::before { content: "▸"; display: inline-block; margin-right: 6px; transition: transform 150ms; }
.emp-advanced-disclosure[open] summary::before { transform: rotate(90deg); }

.emp-required-docs { display: grid; gap: 8px; margin: 10px 0 16px; }
.emp-required-doc-row { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid var(--emp-line); border-radius: 10px; }
.emp-required-doc-toggle { display: flex; border: 1px solid var(--emp-line); border-radius: 999px; overflow: hidden; }
.emp-required-doc-toggle button { border: 0; background: none; padding: 6px 14px; font-size: 12px; font-weight: 700; color: var(--emp-muted); cursor: pointer; }
.emp-required-doc-toggle button.active { background: var(--emp-green); color: var(--emp-cream-text); }

.emp-tab-strip { display: flex; gap: 4px; border-bottom: 1px solid var(--emp-line); margin-bottom: 16px; }
.emp-tab-strip button { border: 0; background: none; padding: 10px 16px; font-size: 13px; font-weight: 700; color: var(--emp-muted); cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; }
.emp-tab-strip button.active { color: var(--emp-green); border-bottom-color: var(--emp-green); }

.emp-wizard-step-dot { width: 8px; height: 8px; border-radius: 50%; background: #b45309; display: inline-block; margin-right: 4px; }
```

- [ ] **Step 2: Verify CSS parses**

Run:
```bash
node -e "const css=require('fs').readFileSync('styles.css','utf8'); const o=(css.match(/\{/g)||[]).length,c=(css.match(/\}/g)||[]).length; console.log(o===c);"
```
Expected: `true`.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "style: add Advanced-disclosure, required-documents toggle, and tab-strip styles for the wizard restructure"
```

---

### Task 10: Full-flow visual verification

**Files:** none modified — verification only.

- [ ] **Step 1** Write and run a Playwright script (same pattern as the visual-polish pass: seed `careergo-v4-state` with an employer session via `page.evaluate`/`localStorage`, navigate `#role-builder`, screenshot each of the 5 steps, click "Advanced" on Step 1 and Step 4 and re-screenshot, toggle each Preview/Readiness/Vera tab on Step 5 and screenshot each).
- [ ] **Step 2** Confirm via `console --errors`-equivalent (`page.on('pageerror', ...)`) that no errors fire across the full flow: fill Step 1 (including opening Advanced), Step 2, Step 3 (check the pool estimate updates when a must-have skill is added), Step 4 (add an Additional-compensation row), Step 5 (toggle a required-document, switch all 3 tabs, confirm the stepper shows ✓ on steps with satisfied predicates).
- [ ] **Step 3** Confirm an existing (pre-restructure-shaped) draft loaded via `employerRoleDrafts` in `localStorage` renders without errors and shows migrated values (manually seed one legacy-shaped draft object in the seed script, per Task 1's migration tests, and load it through the actual UI, not just the unit-tested function).

## Self-Review Notes

- Spec coverage: all 5 steps' target shapes (Task 3/4/5/6/7), the two data-model decisions (Task 1), migration (Task 1), stepper indicators (Task 8) are each covered by a task. The design doc's "Testing" section maps directly onto Task 1/2/5's unit tests.
- No placeholders: every step has literal code, not descriptions.
- Type consistency: `requiredDocumentTypes` keys (`resume`/`coverLetter`/`portfolio`) and `additionalCompensation` shape (`{type,value}`) are defined once in Task 1 and referenced identically in Tasks 6/7/9.
