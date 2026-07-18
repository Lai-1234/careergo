"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

function populatedDraft() {
  const draft = app.makeEmployerRoleDraft();
  draft.title = "Backend Engineer";
  draft.seniority = "Mid-level";
  draft.employmentType = "Full-time";
  draft.openings = 2;
  draft.urgency = "Urgent";
  draft.roleSummary = "Own core backend services powering payments and order processing.";
  draft.responsibilities = [
    "Design and build distributed backend services in Java",
    "Operate Kafka-based event pipelines",
    "Improve system reliability and on-call practices",
    "Participate in code review and technical design discussions"
  ];
  return draft;
}

test("populated role basics/summary/responsibilities read Complete and readiness clears 50%", () => {
  const draft = populatedDraft();
  const predicates = app.getReadinessPredicates(draft);

  assert.equal(predicates.role_basics_complete, true);
  assert.equal(predicates.role_summary_added, true);
  assert.equal(predicates.responsibilities_added, true);
  assert.ok(predicates.readiness > 50, `expected readiness > 50, got ${predicates.readiness}`);
});

test("an empty draft has role basics/summary/responsibilities incomplete (negative control)", () => {
  const draft = app.makeEmployerRoleDraft();
  const predicates = app.getReadinessPredicates(draft);

  assert.equal(predicates.role_basics_complete, false);
  assert.equal(predicates.role_summary_added, false);
  assert.equal(predicates.responsibilities_added, false);
});

test("role basics complete does not require department (root cause of the MISSING bug)", () => {
  const draft = populatedDraft();
  draft.department = ""; // never asked about by the Create-with-Vera guided flow
  const predicates = app.getReadinessPredicates(draft);

  assert.equal(predicates.role_basics_complete, true);
});

test("checklist rows and readiness predicates agree — single source of truth", () => {
  const draft = populatedDraft();
  const checks = app.getPublishReadinessChecks(draft);
  const predicates = app.getReadinessPredicates(draft);

  const byKey = Object.fromEntries(checks.map(c => [c.key, c.status === "Complete"]));
  assert.equal(byKey.role_basics_complete, predicates.role_basics_complete);
  assert.equal(byKey.role_summary_added, predicates.role_summary_added);
  assert.equal(byKey.responsibilities_added, predicates.responsibilities_added);
});

test("Vera role review readiness matches getReadinessPredicates readiness for the same draft", () => {
  const draft = populatedDraft();
  const review = app.computeDraftVeraReview(draft);
  const predicates = app.getReadinessPredicates(draft);

  assert.equal(review.readiness, predicates.readiness);
});

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
