"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

function candidate(overrides) {
  return {
    id: "c1", name: "Test Candidate", archived: false, stage: "New", fit: 70,
    interview: null, offer: null, ...overrides
  };
}

test("pickPriorityCandidate returns null when no candidate needs action", () => {
  const candidates = [candidate({ stage: "Shortlisted", fit: 90 })];
  assert.equal(app.pickPriorityCandidate(candidates), null);
});

test("pickPriorityCandidate picks the highest-fit candidate among those needing action", () => {
  const candidates = [
    candidate({ id: "low", stage: "New", fit: 60 }),
    candidate({ id: "high", stage: "New", fit: 92 }),
    candidate({ id: "not-needed", stage: "Shortlisted", fit: 99 })
  ];
  assert.equal(app.pickPriorityCandidate(candidates).id, "high");
});

test("pickPriorityCandidate ignores archived candidates", () => {
  const candidates = [candidate({ id: "archived", stage: "New", fit: 99, archived: true })];
  assert.equal(app.pickPriorityCandidate(candidates), null);
});

test("pickPriorityCandidate treats feedback-waiting and offer-outstanding as needing action too", () => {
  const feedbackCandidate = candidate({ id: "fb", stage: "Interview", fit: 80, interview: { feedbackSubmitted: 1, feedbackTotal: 3 } });
  assert.equal(app.pickPriorityCandidate([feedbackCandidate]).id, "fb");

  const offerCandidate = candidate({ id: "off", stage: "Offer", fit: 75, offer: { status: "Sent" } });
  assert.equal(app.pickPriorityCandidate([offerCandidate]).id, "off");
});
