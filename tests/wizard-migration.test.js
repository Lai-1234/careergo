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

test("retired domainKnowledge/behaviouralCompetencies/accessibilityConsiderations content folds into rolePurpose, once", () => {
  const legacy = {
    rolePurpose: "Own the checkout experience.",
    domainKnowledge: "Payments and fraud detection",
    behaviouralCompetencies: "Comfortable with ambiguity",
    accessibilityConsiderations: "Screen-reader-friendly onboarding required"
  };
  const draft = app.makeEmployerRoleDraft(legacy);
  assert.ok(draft.rolePurpose.includes("Own the checkout experience."));
  assert.ok(draft.rolePurpose.includes("Domain knowledge: Payments and fraud detection"));
  assert.ok(draft.rolePurpose.includes("Behavioural competencies: Comfortable with ambiguity"));
  assert.ok(draft.rolePurpose.includes("Accessibility considerations: Screen-reader-friendly onboarding required"));

  // Re-running the merge against the already-migrated draft must not duplicate the notes.
  const reMigrated = app.makeEmployerRoleDraft(draft);
  const occurrences = (reMigrated.rolePurpose.match(/Domain knowledge:/g) || []).length;
  assert.equal(occurrences, 1);
});
