"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

test("computeMatchBreakdown is deterministic for the same candidate", () => {
  const c = { id: "c2", fit: 88 };
  const first = app.computeMatchBreakdown(c);
  const second = app.computeMatchBreakdown(c);
  assert.deepEqual(first, second);
});

test("computeMatchBreakdown differs between candidates with different ids", () => {
  const a = app.computeMatchBreakdown({ id: "c2", fit: 88 });
  const b = app.computeMatchBreakdown({ id: "c5", fit: 88 });
  assert.notDeepEqual(a, b);
});

test("computeMatchBreakdown returns all five sub-scores within 40-99", () => {
  const breakdown = app.computeMatchBreakdown({ id: "c9", fit: 60 });
  for (const key of ["skills", "experience", "education", "culture", "salary"]) {
    assert.ok(breakdown[key] >= 40 && breakdown[key] <= 99, `${key}=${breakdown[key]} out of range`);
  }
});
