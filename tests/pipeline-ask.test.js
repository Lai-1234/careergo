"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadApp } = require("./helpers/loadApp.js");

const app = loadApp();

function makeCandidates() {
  return [
    {
      id: "c1", name: "Daniel Lim", roleId: "r1", role: "Backend Engineer", stage: "Interview",
      fit: 88, skills: ["SQL", "Python"], careerStage: "Looking for first full-time job",
      strength: "Strong SQL dashboard proof.", concern: null,
      interview: { nextInterview: { type: "Recruiter Screen", date: "Tomorrow", time: "2:30 PM" } },
      finalReview: null, offer: null, notes: []
    },
    {
      id: "c2", name: "Ahmad Zulkifli", roleId: "r1", role: "Backend Engineer", stage: "New",
      fit: 79, skills: ["Java", "SQL"], careerStage: "Early career",
      strength: "Relevant side project.", concern: null,
      interview: null, finalReview: null, offer: null, notes: []
    },
    {
      id: "c3", name: "Farah Alia", roleId: "r2", role: "Software Engineer", stage: "Final Review",
      fit: 90, skills: ["React", "Node.js"], careerStage: "Early career",
      strength: "Strong system design answers.", concern: "Limited large-team collaboration experience.",
      interview: null, finalReview: { openQuestions: [] }, offer: null, notes: []
    },
    {
      id: "c4", name: "Wei Jun Tan", roleId: "r1", role: "Backend Engineer", stage: "Offer",
      fit: 81, skills: ["SQL", "Power BI"], careerStage: "Fresh Graduate",
      strength: "Strong coursework portfolio.", concern: null,
      interview: null, finalReview: null, offer: { status: "Sent" }, notes: []
    },
    {
      id: "c5", name: "Priya Nair", roleId: "r2", role: "Software Engineer", stage: "Shortlisted",
      fit: 84, skills: ["React", "TypeScript"], careerStage: "Career Switcher",
      strength: "Transferable freelance delivery evidence.", concern: null,
      interview: null, finalReview: null, offer: null, notes: []
    }
  ];
}

function makeRoles() {
  return [
    { id: "r1", title: "Backend Engineer", mustHaveSkills: ["SQL", "Java", "AWS"] },
    { id: "r2", title: "Software Engineer", mustHaveSkills: ["React", "Node.js"] }
  ];
}

test("answerPipelineQuery finds a candidate by name", () => {
  const result = app.answerPipelineQuery("find Daniel Lim", makeCandidates(), makeRoles());
  assert.match(result.answer, /Daniel Lim/);
  assert.deepEqual(result.matchedCandidateIds, ["c1"]);
});

test("answerPipelineQuery answers 'strongest <skill>' with the highest-fit matching candidate", () => {
  const result = app.answerPipelineQuery("who is the strongest SQL developer", makeCandidates(), makeRoles());
  assert.match(result.answer, /Daniel Lim/);
});

test("answerPipelineQuery answers 'who is ready for offer'", () => {
  const result = app.answerPipelineQuery("who is ready for offer", makeCandidates(), makeRoles());
  assert.match(result.answer, /Farah Alia/);
  assert.match(result.answer, /Wei Jun Tan/);
});

test("answerPipelineQuery answers 'who has interview tomorrow'", () => {
  const result = app.answerPipelineQuery("who has interview tomorrow", makeCandidates(), makeRoles());
  assert.match(result.answer, /Daniel Lim/);
});

test("answerPipelineQuery answers 'compare X and Y'", () => {
  const result = app.answerPipelineQuery("compare Daniel Lim and Ahmad Zulkifli", makeCandidates(), makeRoles());
  assert.match(result.answer, /Daniel Lim/);
  assert.match(result.answer, /Ahmad Zulkifli/);
});

test("answerPipelineQuery answers 'why did X score N%'", () => {
  const result = app.answerPipelineQuery("why did Daniel Lim score 88%", makeCandidates(), makeRoles());
  assert.match(result.answer, /88%/);
});

test("answerPipelineQuery answers 'who's missing <skill>'", () => {
  const result = app.answerPipelineQuery("who is missing AWS", makeCandidates(), makeRoles());
  assert.match(result.answer, /Daniel Lim/);
  assert.match(result.answer, /Ahmad Zulkifli/);
});

test("answerPipelineQuery answers 'strongest fresh graduate'", () => {
  const result = app.answerPipelineQuery("find the strongest fresh graduate", makeCandidates(), makeRoles());
  assert.match(result.answer, /Wei Jun Tan/);
});

test("answerPipelineQuery answers 'who should I interview first'", () => {
  const result = app.answerPipelineQuery("who should I interview first", makeCandidates(), makeRoles());
  assert.equal(typeof result.answer, "string");
  assert.ok(result.answer.length > 0);
});

test("answerPipelineQuery answers 'summarize the pipeline'", () => {
  const result = app.answerPipelineQuery("summarize the pipeline", makeCandidates(), makeRoles());
  assert.match(result.answer, /5 candidates|5 active/i);
});

test("answerPipelineQuery answers 'which candidates are risky'", () => {
  const result = app.answerPipelineQuery("which candidates are risky", makeCandidates(), makeRoles());
  assert.match(result.answer, /Farah Alia/);
});

test("answerPipelineQuery answers 'generate interview questions for X'", () => {
  const result = app.answerPipelineQuery("generate interview questions for Daniel Lim", makeCandidates(), makeRoles());
  assert.match(result.answer, /SQL|Python/);
});

test("answerPipelineQuery answers 'draft an email to X'", () => {
  const result = app.answerPipelineQuery("draft an email to Daniel Lim", makeCandidates(), makeRoles());
  assert.match(result.answer, /Subject/i);
});

test("answerPipelineQuery answers 'summarize X'", () => {
  const result = app.answerPipelineQuery("summarize Daniel Lim", makeCandidates(), makeRoles());
  assert.match(result.answer, /Daniel Lim/);
});

test("answerPipelineQuery answers 'should I hire X'", () => {
  const result = app.answerPipelineQuery("should I hire Farah Alia", makeCandidates(), makeRoles());
  assert.match(result.answer, /Farah Alia/);
});

test("answerPipelineQuery falls back honestly for an unrecognized question", () => {
  const result = app.answerPipelineQuery("what is the weather today", makeCandidates(), makeRoles());
  assert.match(result.answer, /try|didn't|couldn't|not sure/i);
  assert.equal(result.matchedCandidateIds.length, 0);
});

test("answerPipelineQuery is case-insensitive", () => {
  const result = app.answerPipelineQuery("FIND DANIEL LIM", makeCandidates(), makeRoles());
  assert.match(result.answer, /Daniel Lim/);
});
