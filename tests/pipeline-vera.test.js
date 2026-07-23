"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

test("pickVeraContextCandidate returns the candidate matching the open drawer, when present", () => {
  const candidates = [
    { id: "c1", fit: 60, stage: "Shortlisted" },
    { id: "c2", fit: 90, stage: "New" }
  ];
  const result = app.pickVeraContextCandidate(candidates, "c1");
  assert.equal(result.id, "c1");
});

test("pickVeraContextCandidate falls back to the priority candidate when no drawer is open", () => {
  const candidates = [
    { id: "c1", fit: 60, stage: "New" },
    { id: "c2", fit: 90, stage: "New" }
  ];
  const result = app.pickVeraContextCandidate(candidates, null);
  assert.equal(result.id, "c2");
});

test("pickVeraContextCandidate falls back to the first candidate when nothing needs action", () => {
  const candidates = [
    { id: "c1", fit: 60, stage: "Hired" },
    { id: "c2", fit: 90, stage: "Hired" }
  ];
  const result = app.pickVeraContextCandidate(candidates, null);
  assert.equal(result.id, "c1");
});

test("pickVeraContextCandidate returns null for an empty candidate list", () => {
  const result = app.pickVeraContextCandidate([], null);
  assert.equal(result, null);
});

test("pickVeraContextCandidate ignores an openDrawerId not present in the given list", () => {
  const candidates = [
    { id: "c1", fit: 60, stage: "New" },
    { id: "c2", fit: 90, stage: "New" }
  ];
  const result = app.pickVeraContextCandidate(candidates, "c-not-in-list");
  assert.equal(result.id, "c2");
});
