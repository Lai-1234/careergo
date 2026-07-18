# Guided Vera Job-Creation Conversation — Design

## Context

This is sub-project 1 of the larger "CareerGo Employer Dashboard AI Integration" request. That request describes 7-8 independent subsystems (global floating Vera assistant, nav/IA restructure, guided job-creation conversation, per-field AI generate/rewrite buttons, live quality scoring, candidate-matching estimator, and page-specific Vera behaviors for Candidates/Interviews/Company/Analytics/Settings). This spec covers only the guided job-creation conversation, which replaces the existing "Create with Vera" paste-and-parse flow on the Employer Role Builder (`employer-app.html` / `app.js`).

### What already exists (do not rebuild)

- `renderCreateVeraInputPhase` / `renderCreateVeraReviewPhase` (app.js ~10946-11170): paste a block of text → `parseJobInputText` regex-matches it into `{field: {value, reason}}` suggestions → review phase shows original vs. suggested per field with individual accept/reject, applies into `draft` on confirm.
- `data-emp-create-vera` button in the Role Builder header opens this flow inside `openEmpModal`.
- Role draft schema fields relevant here: `title`, `seniority`, `location`, `workMode`, `employmentType`, `salary {min,max,currency,period}`, `mustHaveSkills[]`, `niceToHaveSkills[]`, `minExperience`, `educationOrCertification`, `roleSummary`, `responsibilities[]` (freeform, reorderable, recommended 3-8), `benefits[]` (fixed vocabulary — see below), `urgency`.
- Fixed enums to reuse (must not invent new values): `SENIORITY_LEVELS`, `EMPLOYMENT_TYPES`, `BENEFIT_OPTIONS`, workMode `["On-site","Hybrid","Remote"]`, `minExperience` options `["No experience required","Less than 1 year","1-2 years","3-5 years","5+ years"]`, urgency `["Standard","Urgent","Critical"]`.
- `draft.benefits` is bound to a checkbox grid over `BENEFIT_OPTIONS` (app.js:11456) — any generated benefit values must come from this exact list.
- Publish-readiness checks require `responsibilities` to have ≥3 non-empty entries (app.js:9947, 10914).

## Goals

1. Replace the paste-textarea entry with a step-by-step chat-style conversation that asks one question at a time, using real form enums for every categorical answer.
2. After the conversation, auto-generate `roleSummary`, `responsibilities[]`, and `benefits[]` from the structured answers via a template/keyword engine (mock generation, not a real model — matches the existing paste-parser's honesty level).
3. Feed everything into the existing review phase (extended to cover the newly-produced fields), preserving the current "Vera proposes, employer approves" trust model unchanged.
4. Non-goals (out of scope for this spec): floating global assistant, nav restructure, per-field inline rewrite menus, numeric quality score, candidate-matching estimate, Vera on other employer pages.

## Architecture

Everything lives inside the existing `data-emp-create-vera` modal flow in the Role Builder closure. Replace the `input` phase; keep `review` phase (extended).

**New state** (replacing `createVeraInputText`):
- `createVeraStep` — index into the question list, or `"generating"` / `"review"`.
- `createVeraAnswers` — `{ [fieldKey]: value }`, populated as the employer answers.
- `createVeraTranscript` — ordered list of `{ role: "vera"|"employer", text }` for rendering the chat log.

**Phase machine:** `conversation (Q1..Q11) → generating (brief timed transition) → review (existing renderer, extended) → apply`.

Closing the modal at any point discards `createVeraAnswers`/`createVeraTranscript`, same as the current paste flow discards `createVeraInputText`.

## Conversation flow

Rendered as a scrolling chat transcript inside the modal: each answered question becomes two transcript entries (Vera's question, the employer's answer as plain text even when it was answered via chips), then the next question renders as the active prompt. Categorical questions render as clickable chip buttons; open questions render a text input (with datalist-style autocomplete suggestions where noted) pinned below the transcript. A slim progress indicator ("Question 4 of 11") sits in the modal head. Every question has a **Back** button (returns to the previous question, transcript pops the last exchange, prior answer is prefilled if the employer goes back and re-forward). Questions marked *(skippable)* also show a **Skip** button.

| # | Field | Question | Input | Options |
|---|-------|----------|-------|---------|
| 1 | `title` | "What role are you hiring for?" | text | — |
| 2 | `seniority` | "What level is this role?" | chips | `SENIORITY_LEVELS` |
| 3 | `location` | "Where is this role located?" | text + autocomplete | `CREATE_VERA_LOCATIONS` |
| 4 | `workMode` | "What's the work arrangement?" | chips | On-site / Hybrid / Remote |
| 5 | `employmentType` | "What's the employment type?" | chips | `EMPLOYMENT_TYPES` |
| 6 | `salary` | "What's the salary range (RM/month)?" | two number inputs (min, max) | period fixed to "Monthly" |
| 7 | `mustHaveSkills` | "What skills are required?" | tag input + autocomplete | `CREATE_VERA_SKILL_VOCAB`, free-add allowed |
| 8 | `niceToHaveSkills` | "Any nice-to-have skills?" *(skippable)* | tag input | same vocab |
| 9 | `minExperience` | "What's the minimum experience?" | chips | existing `minExperience` options |
| 10 | `educationOrCertification` | "Any required education or certification?" *(skippable)* | text | — |
| 11 | `urgency` | "How urgent is this hire?" | chips | Standard / Urgent / Critical |

Validation: questions 1, 6, 7 require a non-empty answer to advance (title, at least one skill, at least a min or max salary value); all others can be skipped even without the Skip button being shown, if reasonable (e.g. leaving location blank isn't blocked) — practically, only the three explicitly-required ones block advancement.

## Content generation

Triggered once all 11 answers are collected. Shows a short "Generating professional job..." loading state (a fixed ~900ms delay is enough to read as a generation step; no real async work needed), then runs a template engine:

- **Archetype matching**: keyword-match `title` (and fall back to `mustHaveSkills`) against a small bank of role archetypes (engineer/developer, designer, analyst/data, manager/lead, marketing, sales, finance, admin/operations, customer/support) — mirroring the archetypes already present in the mock `JOBS` data (Product Designer, Data Analyst, Software Engineer, Backend Engineer, Marketing, Admin). A generic fallback archetype covers unmatched titles.
- **`roleSummary`**: one archetype-specific action-oriented sentence (matching the terse, concrete tone of existing mock summaries like "Build and ship customer-facing features across our web platform, from API to UI." — not "We are looking for..." boilerplate), parameterized with the top 1-2 answered skills and, where natural, work mode.
- **`responsibilities[]`**: 3-4 bullets from the matched archetype's template list, each already written as a complete sentence (same style as existing mock responsibilities). Skill placeholders in templates are filled from `mustHaveSkills` where the archetype calls for it.
- **`benefits[]`**: 2-3 items selected from `BENEFIT_OPTIONS` only (never invented) via simple rules — baseline `"Medical coverage"` + `"Paid leave"` always included; add `"Remote-work support"` if `workMode === "Remote"` or `"Flexible working"` if `"Hybrid"`; add `"Training budget"` or `"Certification support"` if seniority is Senior/Lead/Manager/Director/Executive; cap at 4 total, de-duplicated.

## Review & apply

Reuses `renderCreateVeraReviewPhase` and its accept/reject-per-field + "Apply all" mechanics unchanged. Extends the field list it iterates to include `roleSummary`, `responsibilities`, `benefits`, `niceToHaveSkills`, `minExperience`, `educationOrCertification`, `urgency` (previously only `title`, `employmentType`, `seniority`, `location`, `workMode`, `salary`, `mustHaveSkills`, `roleSummary` were handled by the parser — `roleSummary` already exists in the review renderer, the rest are additions). For directly-answered fields (not generated), the "reason" text reads as "You answered this in the conversation" instead of the paste-parser's "Detected X in your text" phrasing. For generated fields (`roleSummary`, `responsibilities`, `benefits`), the reason reads as "Vera generated this from your answers — edit or regenerate below," and each of those three fields gets a small "Regenerate" action that re-runs the template engine (useful if the employer wants a different phrasing without restarting the whole conversation).

`CREATE_VERA_FIELD_LABELS` gets the new keys added (`niceToHaveSkills: "Nice-to-have skills"`, `minExperience: "Minimum experience"`, `educationOrCertification: "Education / certification"`, `urgency: "Hiring urgency"`, `responsibilities: "Responsibilities"`, `benefits: "Benefits"`).

## UI/CSS

New chat-transcript styles scoped under a `.emp-create-vera-chat` container in `styles.css`, following the file's existing `.emp-*` naming and the `.emp-app-shell`-scoped positioning pattern noted in the prior redesign report (avoid leaking into candidate-side CSS). Chip buttons reuse the visual language of existing `.pill`/`.btn-ghost` treatments rather than introducing a new button style. No changes to `enterprise.css` or candidate-side files.

## Testing

Manual Playwright-driven pass against the file directly (same approach as the prior redesign): walk the full 11-question conversation including at least one Back and one Skip, verify the review phase shows all 11+3 fields with correct values, verify Apply-all writes into the draft and the wizard steps reflect the new values, verify closing mid-conversation discards state cleanly, verify `console --errors` is empty throughout.
