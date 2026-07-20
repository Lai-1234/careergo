"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

function baseDraft(overrides = {}) {
  return Object.assign({
    seniority: "Senior",
    salary: { min: null, max: null, period: "Monthly", currency: "MYR", visibility: "Visible to candidates", negotiable: false },
    roleSummary: "",
    responsibilities: []
  }, overrides);
}

test("computeSalaryBenchmark returns verdict 'none' when no salary entered", () => {
  const result = app.computeSalaryBenchmark(baseDraft());
  assert.equal(result.verdict, "none");
  assert.ok(result.benchmarkMin < result.benchmarkMax);
});

test("computeSalaryBenchmark returns 'below' when the entered range sits under the benchmark", () => {
  const result = app.computeSalaryBenchmark(baseDraft({ salary: { min: 3000, max: 3500, period: "Monthly", currency: "MYR" } }));
  assert.equal(result.verdict, "below");
});

test("computeSalaryBenchmark returns 'within' when the entered range sits inside the benchmark", () => {
  const result = app.computeSalaryBenchmark(baseDraft({ seniority: "Mid-level", salary: { min: 6000, max: 7000, period: "Monthly", currency: "MYR" } }));
  assert.equal(result.verdict, "within");
});

test("computeSalaryBenchmark returns 'above' when the entered range sits over the benchmark", () => {
  const result = app.computeSalaryBenchmark(baseDraft({ seniority: "Junior", salary: { min: 20000, max: 22000, period: "Monthly", currency: "MYR" } }));
  assert.equal(result.verdict, "above");
});

test("computeSalaryBenchmark normalizes annual salary to monthly before comparing", () => {
  const monthly = app.computeSalaryBenchmark(baseDraft({ seniority: "Mid-level", salary: { min: 6000, max: 7000, period: "Monthly", currency: "MYR" } }));
  const annual = app.computeSalaryBenchmark(baseDraft({ seniority: "Mid-level", salary: { min: 72000, max: 84000, period: "Annual", currency: "MYR" } }));
  assert.equal(monthly.verdict, annual.verdict);
});

test("computeSalaryBenchmark returns null for non-MYR currency", () => {
  const result = app.computeSalaryBenchmark(baseDraft({ salary: { min: 6000, max: 7000, period: "Monthly", currency: "USD" } }));
  assert.equal(result, null);
});

test("scanBiasLanguage finds a known term case-insensitively", () => {
  const hits = app.scanBiasLanguage("We need a Rockstar engineer who is aggressive about deadlines.");
  const terms = hits.map(h => h.term);
  assert.ok(terms.includes("rockstar"));
  assert.ok(terms.includes("aggressive"));
});

test("scanBiasLanguage does not false-positive on unrelated text", () => {
  const hits = app.scanBiasLanguage("Own delivery of the backend service and collaborate with design.");
  assert.equal(hits.length, 0);
});

test("scanBiasLanguage matches whole words only", () => {
  const hits = app.scanBiasLanguage("This role supports younger-skewing product lines.");
  assert.equal(hits.length, 0);
});

test("countSyllables returns at least 1 for any non-empty word", () => {
  assert.ok(app.countSyllables("a") >= 1);
  assert.ok(app.countSyllables("strengths") >= 1);
});

test("computeReadingLevel labels short simple sentences as clear", () => {
  const result = app.computeReadingLevel("We ship code. We help users. We work as a team.");
  assert.equal(result.label, "Clear and accessible");
});

test("computeReadingLevel labels long dense sentences as dense", () => {
  const result = app.computeReadingLevel(
    "The successful candidate will be responsible for orchestrating cross-functional collaboration " +
    "initiatives across multidisciplinary organizational stakeholders while simultaneously optimizing " +
    "operational infrastructure methodologies to maximize enterprise-wide efficiency transformations."
  );
  assert.equal(result.label, "Dense — consider simplifying");
});

test("scanJobPostingLanguage reports hasText false when the draft has no summary or responsibilities", () => {
  const result = app.scanJobPostingLanguage(baseDraft());
  assert.equal(result.hasText, false);
});

test("scanJobPostingLanguage combines roleSummary and responsibilities before scanning", () => {
  const result = app.scanJobPostingLanguage(baseDraft({ roleSummary: "Looking for a rockstar.", responsibilities: ["Ship features."] }));
  assert.equal(result.hasText, true);
  assert.ok(result.biasHits.some(h => h.term === "rockstar"));
});
