"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

function makeCandidates() {
  return [
    {
      id: "c1", name: "Daniel Lim", roleId: "r1", role: "Backend Engineer", stage: "Interview",
      fit: 88, skills: ["SQL", "Python"], salaryExpectation: "RM 4.8k - 6.5k",
      strength: "Strong SQL dashboard proof.", concern: null,
      interview: { nextInterview: { type: "Recruiter Screen", date: "Tomorrow", time: "2:30 PM" } },
      finalReview: null, offer: null
    },
    {
      id: "c2", name: "Ahmad Zulkifli", roleId: "r1", role: "Backend Engineer", stage: "New",
      fit: 79, skills: ["Java", "SQL"], salaryExpectation: "RM 6k - 8k",
      strength: "Relevant side project.", concern: null,
      interview: null, finalReview: null, offer: null
    },
    {
      id: "c3", name: "Farah Alia", roleId: "r2", role: "Software Engineer", stage: "Final Review",
      fit: 90, skills: ["React", "Node.js"], salaryExpectation: "RM 7k - 8k",
      strength: "Strong system design answers.", concern: "Limited large-team collaboration experience.",
      interview: null, finalReview: { openQuestions: [] }, offer: null
    },
    {
      id: "c4", name: "Wei Jun Tan", roleId: "r1", role: "Backend Engineer", stage: "Interview",
      fit: 81, skills: ["SQL"], salaryExpectation: "RM 5k - 5.5k",
      strength: "Strong coursework portfolio.", concern: null,
      interview: { nextInterview: null }, finalReview: null, offer: null
    },
    {
      id: "c5", name: "Priya Nair", roleId: "r2", role: "Software Engineer", stage: "Offer",
      fit: 84, skills: ["React", "TypeScript"], salaryExpectation: "RM 6k - 8k",
      strength: "Transferable freelance delivery evidence.", concern: null,
      interview: null, finalReview: null, offer: { status: "Sent" }
    }
  ];
}

function makeRoles() {
  return [
    { id: "r1", title: "Backend Engineer", mustHaveSkills: ["SQL", "Java", "AWS"] },
    { id: "r2", title: "Software Engineer", mustHaveSkills: ["React", "Node.js"] }
  ];
}

test("computePipelineInsights returns exactly 6 fixed cards", () => {
  const insights = app.computePipelineInsights(makeCandidates(), makeRoles());
  assert.equal(insights.length, 6);
  const ids = insights.map(i => i.id);
  assert.deepEqual(ids, ["recommendation", "bottleneck", "skill-gap", "salary", "time-to-hire", "pipeline-health"]);
});

test("computePipelineInsights every card has why, confidence, and an action", () => {
  const insights = app.computePipelineInsights(makeCandidates(), makeRoles());
  for (const card of insights) {
    assert.equal(typeof card.title, "string");
    assert.equal(typeof card.why, "string");
    assert.ok(["High", "Medium", "Low"].includes(card.confidence));
    assert.equal(typeof card.action.label, "string");
  }
});

test("computePipelineInsights recommendation card names the priority candidate", () => {
  // Of this fixture, only Ahmad Zulkifli (stage "New") and Priya Nair (offer
  // outstanding) need action; Priya has the higher fit (84 vs 79), so she's
  // the one pickPriorityCandidate should surface.
  const insights = app.computePipelineInsights(makeCandidates(), makeRoles());
  const rec = insights.find(i => i.id === "recommendation");
  assert.match(rec.why, /Priya Nair/);
});

test("computePipelineInsights skill-gap card identifies AWS as the most common missing must-have", () => {
  const insights = app.computePipelineInsights(makeCandidates(), makeRoles());
  const gap = insights.find(i => i.id === "skill-gap");
  assert.match(gap.why, /AWS/);
});

test("computePipelineInsights pipeline-health card reflects candidate count", () => {
  const insights = app.computePipelineInsights(makeCandidates(), makeRoles());
  const health = insights.find(i => i.id === "pipeline-health");
  assert.match(health.why, /5/);
});

test("computePipelineInsights confidence is Low when a signal has very little supporting data", () => {
  const insights = app.computePipelineInsights([makeCandidates()[0]], makeRoles());
  const rec = insights.find(i => i.id === "recommendation");
  assert.equal(rec.confidence, "Low");
});
