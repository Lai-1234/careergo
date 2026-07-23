# Guided Vera Job-Creation Conversation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the "Create with Vera" paste-and-parse flow in the Employer Role Builder with a step-by-step guided conversation that asks 11 questions, generates a role summary/responsibilities/benefits from the answers, and feeds everything into the existing per-field review-and-apply UI.

**Architecture:** Everything lives in `app.js` as top-level (global-scope) functions and `let` state, matching the file's existing pattern for this feature (see `createVeraDraftSuggestions` etc. at app.js:11009-11012). No new files, no build step — `app.js` is a plain `<script src>`, not a module, so every top-level `function`/`let` is reachable as `window.X` for verification. Three phases: **conversation** (11 questions, chat-transcript UI) → **generating** (brief templated-content synthesis) → **review** (existing `renderCreateVeraReviewPhase`, extended, unchanged trust model: nothing touches the draft until the employer explicitly applies it).

**Tech Stack:** Vanilla JS, hand-rolled DOM rendering (`innerHTML` + re-render on every state change), Tailwind-free custom CSS in `styles.css` under the `.emp-app-shell` scope. Verification via Playwright driving the real file in installed Chrome (no test framework exists in this repo — `package.json`'s `test` script is a placeholder).

## Global Constraints

- Never invent new values for fixed enums — reuse `SENIORITY_LEVELS`, `EMPLOYMENT_TYPES`, `BENEFIT_OPTIONS`, and the literal `minExperience`/`urgency`/`workMode` option lists exactly as they already exist in `app.js` (see Task 1).
- `draft.benefits` is bound to a checkbox grid over `BENEFIT_OPTIONS` only (app.js:11456) — generated benefit values must always be members of that array.
- `draft.responsibilities` publish-readiness check requires ≥3 non-empty entries (app.js:9947, 10914) — generated responsibilities must produce at least 3 (we produce 4).
- Do not touch `enterprise.css` or any candidate-side file — this work is scoped to `employer-app.html` / the `.emp-*` CSS namespace in `styles.css`.
- Nothing may write into `draft` except through the existing "Apply"/"Apply all" actions the employer explicitly clicks — Vera only ever populates `createVeraDraftSuggestions` for review.
- Employer theme tokens (confirmed in styles.css:12419-12444): `--emp-green: #07382f`, `--emp-teal: #6aa59d`, `--emp-line: rgba(14,44,37,0.12)`, `--emp-muted: #607069`, `--emp-bg: #f8f4eb`. New CSS must use these, not the candidate purple/gold tokens from CLAUDE.md.
- Commit only when explicitly asked by the user — do not `git commit` automatically as part of executing this plan (repo-wide instruction; overrides the plan-skill's default "commit every step").

---

### Task 1: Question definitions + content-generation engine

**Files:**
- Modify: `app.js` (insert after line 10619, right after the existing `BENEFIT_OPTIONS` constant, and before the `/* ---------- Create with Vera ---------- */` comment block at line 10946)

**Interfaces:**
- Produces: `CREATE_VERA_QUESTIONS` (array of 11 question objects, each `{ field, prompt, type, options?, autocomplete?, placeholder?, required?, skippable? }`), `pickCreateVeraArchetype(title)`, `generateRoleSummary(answers, seed=0)`, `generateResponsibilities(answers, seed=0)`, `generateBenefits(answers, seed=0)`, `generateRoleContentFromAnswers(answers)` returning `{ roleSummary: string, responsibilities: string[], benefits: string[] }`.
- Consumes: nothing new — reuses existing top-level `SENIORITY_LEVELS`, `EMPLOYMENT_TYPES`, `BENEFIT_OPTIONS`, `CREATE_VERA_LOCATIONS`, `CREATE_VERA_SKILL_VOCAB` (all already defined earlier in the file).

This task is purely additive — no existing function is modified or called yet, so the current paste-based "Create with Vera" keeps working unchanged after this task.

- [ ] **Step 1: Add the question list and archetype/template bank**

Insert this block into `app.js` immediately after the `BENEFIT_OPTIONS` line (line 10619):

```js
const CREATE_VERA_QUESTIONS = [
  { field: "title", prompt: "What role are you hiring for?", type: "text", required: true, placeholder: "e.g. Backend Engineer" },
  { field: "seniority", prompt: "What level is this role?", type: "chips", options: SENIORITY_LEVELS },
  { field: "location", prompt: "Where is this role located?", type: "text", placeholder: "e.g. Kuala Lumpur", autocomplete: () => CREATE_VERA_LOCATIONS },
  { field: "workMode", prompt: "What's the work arrangement?", type: "chips", options: ["On-site", "Hybrid", "Remote"] },
  { field: "employmentType", prompt: "What's the employment type?", type: "chips", options: EMPLOYMENT_TYPES },
  { field: "salary", prompt: "What's the salary range? (RM / month)", type: "salary", required: true },
  { field: "mustHaveSkills", prompt: "What skills are required?", type: "tags", required: true, autocomplete: () => CREATE_VERA_SKILL_VOCAB },
  { field: "niceToHaveSkills", prompt: "Any nice-to-have skills?", type: "tags", skippable: true, autocomplete: () => CREATE_VERA_SKILL_VOCAB },
  { field: "minExperience", prompt: "What's the minimum experience?", type: "chips", options: ["No experience required", "Less than 1 year", "1-2 years", "3-5 years", "5+ years"] },
  { field: "educationOrCertification", prompt: "Any required education or certification?", type: "text", skippable: true, placeholder: "e.g. Bachelor's degree preferred" },
  { field: "urgency", prompt: "How urgent is this hire?", type: "chips", options: ["Standard", "Urgent", "Critical"] }
];

const CREATE_VERA_ARCHETYPES = [
  {
    id: "engineer", match: /engineer|developer|programmer/i,
    summaryVariants: [
      (a, skill) => `Build and ship ${skill ? `${skill}-powered ` : ""}features across the product, from design to deployment.`,
      (a, skill) => `Own end-to-end delivery of reliable, well-tested systems${skill ? ` built with ${skill}` : ""}.`
    ],
    responsibilityPool: [
      "Design, build, and maintain core product features.",
      "Write clean, tested, and well-documented code.",
      "Participate in code review and technical design discussions.",
      "Debug and resolve production issues in a timely manner.",
      "Collaborate with product and design on technical feasibility.",
      "Improve engineering practices, tooling, and test coverage."
    ]
  },
  {
    id: "designer", match: /designer|ux|ui\b/i,
    summaryVariants: [
      (a, skill) => `Design and prototype product experiences${skill ? ` in ${skill}` : ""}, working closely with product and engineering.`,
      (a, skill) => `Shape end-to-end user experience${skill ? ` using ${skill}` : ""}, from research through polished UI.`
    ],
    responsibilityPool: [
      "Conduct user research and usability testing.",
      "Design and prototype product flows and interfaces.",
      "Contribute to and maintain the design system.",
      "Collaborate with product and engineering on feasibility.",
      "Present design rationale to stakeholders.",
      "Iterate on designs based on user feedback and data."
    ]
  },
  {
    id: "analyst", match: /analyst|data|bi\b/i,
    summaryVariants: [
      (a, skill) => `Turn data into decisions${skill ? ` using ${skill}` : ""}, building dashboards and analysis for the business.`,
      (a, skill) => `Partner with the business to answer key questions with data${skill ? `, primarily in ${skill}` : ""}.`
    ],
    responsibilityPool: [
      "Build and maintain dashboards and reports.",
      "Write queries and analyze data to answer business questions.",
      "Partner with stakeholders to define metrics.",
      "Present findings and recommendations to the team.",
      "Ensure data quality and consistency across sources.",
      "Support ad-hoc analysis for cross-functional teams."
    ]
  },
  {
    id: "manager", match: /manager|lead|head\b/i,
    summaryVariants: [
      (a) => `Lead a team to deliver on ${a.title ? a.title.replace(/manager|lead/i, "").trim() || "key" : "key"} priorities, setting direction and unblocking execution.`,
      () => `Own team outcomes end-to-end, balancing delivery, people growth, and cross-functional alignment.`
    ],
    responsibilityPool: [
      "Set team priorities and hold the roadmap accountable.",
      "Coach and develop team members.",
      "Partner cross-functionally to align on goals.",
      "Report on progress and remove execution blockers.",
      "Run planning and performance conversations for the team.",
      "Represent the team in leadership and stakeholder reviews."
    ]
  },
  {
    id: "marketing", match: /marketing|campaign|brand/i,
    summaryVariants: [
      () => `Plan and execute marketing campaigns that grow the business and strengthen the brand.`,
      () => `Drive demand and brand awareness through integrated marketing campaigns.`
    ],
    responsibilityPool: [
      "Plan and execute campaign calendars.",
      "Coordinate with design and content on creative assets.",
      "Report on campaign performance and ROI.",
      "Manage budget and vendor relationships.",
      "Own messaging and positioning for key initiatives.",
      "Analyze channel performance and optimize spend."
    ]
  },
  {
    id: "sales", match: /sales|account executive|business development/i,
    summaryVariants: [
      () => `Drive revenue growth by building relationships and closing new business.`,
      () => `Own the full sales cycle, from prospecting through close, to hit revenue targets.`
    ],
    responsibilityPool: [
      "Prospect and qualify new business opportunities.",
      "Run the sales cycle from pitch to close.",
      "Maintain accurate pipeline records.",
      "Build long-term relationships with key accounts.",
      "Collaborate with marketing on lead quality and handoff.",
      "Forecast revenue and report on quota attainment."
    ]
  },
  {
    id: "finance", match: /finance|accounting|account(ant)?\b/i,
    summaryVariants: [
      () => `Support financial reporting, budgeting, and compliance for the business.`,
      () => `Keep the numbers accurate and timely, supporting sound financial decisions.`
    ],
    responsibilityPool: [
      "Support financial reporting and reconciliation.",
      "Assist with budgeting and forecasting.",
      "Ensure compliance with financial policies.",
      "Prepare periodic financial reports.",
      "Support month-end and year-end close processes.",
      "Identify and help resolve accounting discrepancies."
    ]
  },
  {
    id: "support", match: /support|customer|service/i,
    summaryVariants: [
      () => `Resolve customer issues and maintain a high standard of service quality.`,
      () => `Be the front line for customers, solving problems quickly and clearly.`
    ],
    responsibilityPool: [
      "Handle customer inquiries and issues.",
      "Maintain service quality standards.",
      "Escalate complex cases appropriately.",
      "Support process improvement initiatives.",
      "Document common issues and resolutions.",
      "Track and report on customer satisfaction metrics."
    ]
  },
  {
    id: "admin", match: /admin|coordinator|operations|office/i,
    summaryVariants: [
      () => `Keep day-to-day operations running smoothly and support the wider team.`,
      () => `Own operational logistics so the rest of the team can focus on their work.`
    ],
    responsibilityPool: [
      "Coordinate vendors, supplies, and logistics.",
      "Support onboarding and administrative processes.",
      "Maintain accurate records and documentation.",
      "Assist the team with day-to-day operational needs.",
      "Schedule and coordinate meetings and events.",
      "Help maintain office/operational compliance."
    ]
  }
];

const CREATE_VERA_FALLBACK_ARCHETYPE = {
  id: "general",
  summaryVariants: [
    (a, skill) => `Take ownership of ${a.title || "this role"}${skill ? `, applying ${skill}` : ""} to help the team achieve its goals.`,
    (a) => `Drive outcomes for ${a.title || "this role"}, working closely with the wider team.`
  ],
  responsibilityPool: [
    "Own day-to-day delivery for this role.",
    "Collaborate with the wider team on shared goals.",
    "Maintain clear communication on progress and blockers.",
    "Continuously improve ways of working.",
    "Support cross-functional initiatives as needed.",
    "Report on progress against goals."
  ]
};

function pickCreateVeraArchetype(title) {
  const t = title || "";
  return CREATE_VERA_ARCHETYPES.find(a => a.match.test(t)) || CREATE_VERA_FALLBACK_ARCHETYPE;
}

function generateRoleSummary(answers, seed = 0) {
  const archetype = pickCreateVeraArchetype(answers.title);
  const topSkill = (answers.mustHaveSkills || []).slice(0, 2).join(" and ");
  const variants = archetype.summaryVariants;
  return variants[seed % variants.length](answers, topSkill);
}

function generateResponsibilities(answers, seed = 0) {
  const archetype = pickCreateVeraArchetype(answers.title);
  const pool = archetype.responsibilityPool;
  const offset = seed % pool.length;
  return [0, 1, 2, 3].map(i => pool[(offset + i) % pool.length]);
}

function generateBenefits(answers, seed = 0) {
  const benefits = [];
  const addBenefit = b => { if (!benefits.includes(b) && BENEFIT_OPTIONS.includes(b)) benefits.push(b); };
  addBenefit("Medical coverage");
  addBenefit("Paid leave");
  if (answers.workMode === "Remote") addBenefit("Remote-work support");
  else if (answers.workMode === "Hybrid") addBenefit("Flexible working");
  if (["Senior", "Lead", "Manager", "Director", "Executive"].includes(answers.seniority)) addBenefit("Training budget");
  if (seed % 2 === 1) addBenefit("Certification support");
  return benefits.slice(0, 4);
}

function generateRoleContentFromAnswers(answers) {
  return {
    roleSummary: generateRoleSummary(answers, 0),
    responsibilities: generateResponsibilities(answers, 0),
    benefits: generateBenefits(answers, 0)
  };
}
```

Note: `autocomplete` is a zero-arg function (not a plain array) so it always reads the current value of `CREATE_VERA_LOCATIONS`/`CREATE_VERA_SKILL_VOCAB` even though those constants are declared later in the file — by the time any question actually renders (user interaction, after full script parse), both are defined, so the indirection is only needed to avoid a temporal-dead-zone error if this block were ever evaluated before them. Since `const` declarations don't hoist their initializer, keep this block *before* `CREATE_VERA_LOCATIONS`/`CREATE_VERA_SKILL_VOCAB`'s own usage sites but the functions themselves are fine to reference identifiers that resolve at call time, not parse time.

- [ ] **Step 2: Extend `CREATE_VERA_FIELD_LABELS`**

Find this block (app.js:10952-10956):

```js
const CREATE_VERA_FIELD_LABELS = {
  title: "Role title", employmentType: "Employment type", seniority: "Seniority",
  location: "Location", workMode: "Work mode", salary: "Salary range",
  mustHaveSkills: "Must-have skills", roleSummary: "Role summary"
};
```

Replace with:

```js
const CREATE_VERA_FIELD_LABELS = {
  title: "Role title", employmentType: "Employment type", seniority: "Seniority",
  location: "Location", workMode: "Work mode", salary: "Salary range",
  mustHaveSkills: "Must-have skills", roleSummary: "Role summary",
  niceToHaveSkills: "Nice-to-have skills", minExperience: "Minimum experience",
  educationOrCertification: "Education / certification", urgency: "Hiring urgency",
  responsibilities: "Responsibilities", benefits: "Benefits"
};
```

- [ ] **Step 3: Verify with Playwright**

Create `C:\Users\laisi\AppData\Local\Temp\claude\c--Users-laisi-careergo\b8579927-ba04-46e0-b749-a782ae0cfa29\scratchpad\verify-task1.mjs`:

```js
import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";

const url = pathToFileURL(path.resolve("c:/Users/laisi/careergo/employer-app.html")).href;
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", e => errors.push(String(e)));
page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
await page.goto(url);
await page.waitForLoadState("domcontentloaded");

const result = await page.evaluate(() => {
  const out = {};
  out.questionCount = window.CREATE_VERA_QUESTIONS.length;
  out.firstField = window.CREATE_VERA_QUESTIONS[0].field;
  out.lastField = window.CREATE_VERA_QUESTIONS[window.CREATE_VERA_QUESTIONS.length - 1].field;
  out.labelUrgency = window.CREATE_VERA_FIELD_LABELS.urgency;
  out.labelResponsibilities = window.CREATE_VERA_FIELD_LABELS.responsibilities;

  const answers = { title: "Senior Backend Engineer", seniority: "Senior", workMode: "Remote", mustHaveSkills: ["Node.js", "SQL"] };
  const content = window.generateRoleContentFromAnswers(answers);
  out.responsibilitiesCount = content.responsibilities.length;
  out.benefitsAllValid = content.benefits.every(b => window.BENEFIT_OPTIONS.includes(b));
  out.summarySeed0 = window.generateRoleSummary(answers, 0);
  out.summarySeed1 = window.generateRoleSummary(answers, 1);

  const entryAnswers = { title: "Office Coordinator", seniority: "Entry level", workMode: "On-site" };
  out.benefitsSeed0 = window.generateBenefits(entryAnswers, 0);
  out.benefitsSeed1 = window.generateBenefits(entryAnswers, 1);
  return out;
});

console.log(JSON.stringify(result, null, 2));
console.log("console/page errors:", errors);
await browser.close();

const assertions = [
  [result.questionCount === 11, "expected 11 questions"],
  [result.firstField === "title", "expected first question field=title"],
  [result.lastField === "urgency", "expected last question field=urgency"],
  [result.labelUrgency === "Hiring urgency", "urgency label mismatch"],
  [result.labelResponsibilities === "Responsibilities", "responsibilities label mismatch"],
  [result.responsibilitiesCount === 4, "expected 4 responsibilities"],
  [result.benefitsAllValid, "generated benefits must all be in BENEFIT_OPTIONS"],
  [result.summarySeed0 !== result.summarySeed1, "seed 0 and 1 summaries should differ"],
  [JSON.stringify(result.benefitsSeed0) !== JSON.stringify(result.benefitsSeed1), "seed 0 and 1 benefits should differ for entry-level on-site"],
  [errors.length === 0, "expected zero console/page errors"]
];
const failed = assertions.filter(([ok]) => !ok);
if (failed.length) { console.error("FAILED:", failed.map(([, msg]) => msg)); process.exit(1); }
console.log("Task 1 verification PASSED");
```

Run:
```bash
cd "c:/Users/laisi/careergo" && npm install --no-save playwright && node "C:\Users\laisi\AppData\Local\Temp\claude\c--Users-laisi-careergo\b8579927-ba04-46e0-b749-a782ae0cfa29\scratchpad\verify-task1.mjs"
```
Expected: `Task 1 verification PASSED`, zero console/page errors printed.

- [ ] **Step 4: Confirm nothing else broke**

Reload `employer-app.html#role-builder` and click the existing "Create with Vera" button — the old paste-textarea flow must still work exactly as before (this task hasn't wired anything new in yet). Paste any sample text, click "Generate draft", confirm the review screen still appears. Close the modal.

---

### Task 2: Conversation state and rendering (not yet wired to the modal)

**Files:**
- Modify: `app.js` (insert after Task 1's block, still before `renderEmployerRoleBuilder` at line 11174; exact insertion point is right after the existing `let createVeraDecisions = {};` at line 11012)

**Interfaces:**
- Consumes: `CREATE_VERA_QUESTIONS` (Task 1), `icon()`, `escapeHtml()` (existing global helpers used throughout app.js).
- Produces: state vars `createVeraStep`, `createVeraAnswers`, `createVeraTranscript`, `createVeraGenerating`, `createVeraRegenerateSeeds`; render functions `renderCreateVeraConversationPhase()`, `renderCreateVeraQuestionInput(question)`, `renderCreateVeraGeneratingPhase()`. These are additive and not called from anywhere yet — Task 3 wires them in.

- [ ] **Step 1: Add conversation state**

Insert immediately after `let createVeraDecisions = {};` (app.js:11012):

```js
let createVeraStep = 0;
let createVeraAnswers = {};
let createVeraTranscript = [];
let createVeraGenerating = false;
let createVeraRegenerateSeeds = {};
```

- [ ] **Step 2: Add the question-input renderer**

```js
function renderCreateVeraQuestionInput(question) {
  const prior = createVeraAnswers[question.field];
  if (question.type === "chips") {
    return `
      <div class="emp-cv-chips" data-cv-chip-group>
        ${question.options.map(opt => `<button type="button" class="emp-cv-chip ${prior === opt ? "active" : ""}" data-cv-chip="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`).join("")}
      </div>
    `;
  }
  if (question.type === "salary") {
    const salary = prior || {};
    return `
      <div class="emp-cv-salary-row">
        <span class="emp-cv-salary-prefix">RM</span>
        <input type="number" min="0" data-cv-salary-min placeholder="Min" value="${salary.min || ""}">
        <span>–</span>
        <input type="number" min="0" data-cv-salary-max placeholder="Max" value="${salary.max || ""}">
        <span class="emp-cv-salary-suffix">/ month</span>
      </div>
    `;
  }
  if (question.type === "tags") {
    const tags = prior || [];
    const options = question.autocomplete ? question.autocomplete() : [];
    return `
      <div class="emp-cv-tags-input">
        <div class="pill-row" data-cv-tag-list>${tags.map(t => `<span class="pill">${escapeHtml(t)} <button type="button" data-cv-tag-remove="${escapeHtml(t)}" aria-label="Remove ${escapeHtml(t)}">${icon("x")}</button></span>`).join("")}</div>
        <div class="emp-cv-tag-add-row">
          <input type="text" data-cv-tag-input list="emp-cv-tag-datalist" placeholder="Type a skill and press Add">
          <button type="button" class="btn btn-ghost btn-sm" data-cv-tag-add>Add</button>
        </div>
        <datalist id="emp-cv-tag-datalist">${options.map(s => `<option value="${escapeHtml(s)}">`).join("")}</datalist>
      </div>
    `;
  }
  const options = question.autocomplete ? question.autocomplete() : null;
  return `
    <div class="emp-cv-text-input">
      <input type="text" data-cv-text-input ${options ? `list="emp-cv-text-datalist"` : ""} placeholder="${escapeHtml(question.placeholder || "")}" value="${escapeHtml(prior || "")}">
      ${options ? `<datalist id="emp-cv-text-datalist">${options.map(s => `<option value="${escapeHtml(s)}">`).join("")}</datalist>` : ""}
    </div>
  `;
}
```

- [ ] **Step 3: Add the conversation-phase and generating-phase renderers**

```js
function renderCreateVeraConversationPhase() {
  const total = CREATE_VERA_QUESTIONS.length;
  const current = createVeraStep < total ? CREATE_VERA_QUESTIONS[createVeraStep] : null;

  const transcriptHtml = createVeraTranscript.map(entry =>
    `<div class="emp-cv-bubble emp-cv-bubble-${entry.role}">${escapeHtml(entry.text)}</div>`
  ).join("");

  return `
    <div class="emp-create-vera-head">
      <div>
        <span class="emp-vera-context">Create with Vera</span>
        <h2>Tell Vera about the role</h2>
        <p>${current ? `Question ${createVeraStep + 1} of ${total}` : ""}</p>
      </div>
      <button type="button" class="btn btn-ghost btn-sm" data-emp-modal-close aria-label="Close">${icon("x")}</button>
    </div>
    <div class="emp-cv-transcript" data-cv-transcript>
      ${transcriptHtml}
      ${current ? `<div class="emp-cv-bubble emp-cv-bubble-vera">${escapeHtml(current.prompt)}</div>` : ""}
    </div>
    ${current ? renderCreateVeraQuestionInput(current) : ""}
    <div class="emp-compose-actions emp-cv-nav">
      <button type="button" class="btn btn-ghost" data-cv-back ${createVeraStep === 0 ? "disabled" : ""}>Back</button>
      ${current && current.skippable ? `<button type="button" class="btn btn-ghost" data-cv-skip>Skip</button>` : ""}
      ${current && current.type !== "chips" ? `<button type="button" class="btn btn-primary" data-cv-next>Next</button>` : ""}
    </div>
  `;
}

function renderCreateVeraGeneratingPhase() {
  return `
    <div class="emp-create-vera-head">
      <div><span class="emp-vera-context">Create with Vera</span><h2>Generating professional job...</h2></div>
    </div>
    <div class="emp-cv-generating">
      <div class="emp-cv-generating-spinner">${icon("sparkles")}</div>
      <p>Vera is drafting a role summary, responsibilities, and benefits from your answers.</p>
    </div>
  `;
}
```

- [ ] **Step 4: Verify with Playwright**

Create `...scratchpad/verify-task2.mjs` (same header boilerplate as Task 1's script — reuse the import/launch/goto block), then:

```js
const result = await page.evaluate(() => {
  window.createVeraStep = 0;
  window.createVeraAnswers = {};
  window.createVeraTranscript = [];
  const html1 = window.renderCreateVeraConversationPhase();

  window.createVeraStep = 1;
  window.createVeraTranscript = [{ role: "vera", text: "What role are you hiring for?" }, { role: "employer", text: "Backend Engineer" }];
  const html2 = window.renderCreateVeraConversationPhase();

  window.createVeraStep = 6;
  const html3 = window.renderCreateVeraConversationPhase();

  const genHtml = window.renderCreateVeraGeneratingPhase();

  return {
    html1HasQ1: html1.includes("What role are you hiring for?"),
    html1HasNext: html1.includes("data-cv-next"),
    html2HasTranscriptBubble: html2.includes("Backend Engineer") && html2.includes("emp-cv-bubble-employer"),
    html2HasSeniorityChips: html2.includes('data-cv-chip="Senior"') && html2.includes('data-cv-chip="Mid-level"'),
    html2HasNoNextButton: !html2.includes("data-cv-next"),
    html3HasTagsInput: html3.includes("data-cv-tag-input") && html3.includes("data-cv-tag-add"),
    genHtmlText: genHtml.includes("Generating professional job")
  };
});
```
Then assert every value in `result` is `true` (build the same assertions-array + exit(1) pattern as Task 1's script). Run the same way as Task 1.

- [ ] **Step 5: Confirm nothing else broke**

Reload the app and click "Create with Vera" again — still the old paste flow (this task's new functions aren't called from anywhere yet). Confirm no console errors on page load (`console --errors`-equivalent: check the Playwright `errors` array from step 4 is empty, which it already asserts).

---

### Task 3: Wire the conversation into the modal, remove the old paste flow

**Files:**
- Modify: `app.js`:
  - Replace `renderCreateVeraInputPhase` (app.js:11014-11031) — delete it entirely.
  - Delete `parseJobInputText` (app.js:10962-11007) and `titleCase` (app.js:10958-10960) — both are dead once the paste entry point is gone (confirmed only caller of `titleCase` is inside `parseJobInputText`).
  - Delete `let createVeraInputText = "";` (app.js:11009).
  - Replace `refreshCreateVeraModal`, `bindCreateVeraModal`, `openCreateWithVeraModal` (app.js:11109-11172) with new versions below.
  - Add `advanceCreateVeraQuestion`, `commitCreateVeraAnswer`, `validateCreateVeraAnswer`, `formatCreateVeraAnswerForTranscript`, `addCreateVeraTag`, `buildCreateVeraSuggestions`, `bindCreateVeraConversationEvents`.

**Interfaces:**
- Consumes: everything from Task 1 and Task 2, plus existing `openEmpModal`, `closeEmpModal`, `showToast`, `qs`, `qsa`, `createIcons`, `renderCreateVeraReviewPhase` (unchanged signature).
- Produces: `openCreateWithVeraModal(draft, onApplied)` — same public signature as before, still the single entry point called from `renderEmployerRoleBuilder`'s `data-emp-create-vera` handler (app.js:11742) — **no change needed at that call site**.

- [ ] **Step 1: Delete the paste-parser and its helpers**

Delete these three blocks from `app.js` in one pass (search for each, remove entirely):
1. `function titleCase(str) { ... }` (app.js:10958-10960)
2. `function parseJobInputText(text) { ... }` through its closing `return suggestions; }` (app.js:10962-11007)
3. `let createVeraInputText = "";` (app.js:11009)
4. `function renderCreateVeraInputPhase() { ... }` (app.js:11014-11031)

Keep `CREATE_VERA_SKILL_VOCAB`, `CREATE_VERA_LOCATIONS`, and `CREATE_VERA_FIELD_LABELS` — all three are still used (by Task 1's question definitions and by the review phase).

- [ ] **Step 2: Add the answer-commit and validation helpers**

```js
function validateCreateVeraAnswer(question) {
  if (!question.required) return true;
  const value = createVeraAnswers[question.field];
  if (question.type === "tags") return Array.isArray(value) && value.length > 0;
  if (question.type === "salary") return Boolean(value && (value.min || value.max));
  return Boolean(value && String(value).trim());
}

function formatCreateVeraAnswerForTranscript(question) {
  const value = createVeraAnswers[question.field];
  if (question.type === "tags") return (value || []).length ? value.join(", ") : "None";
  if (question.type === "salary") return value && (value.min || value.max) ? `RM ${value.min || "?"} - RM ${value.max || "?"}` : "Not specified";
  return value ? String(value) : "Not specified";
}

function commitCreateVeraAnswer(question, answerText) {
  createVeraTranscript.push({ role: "vera", text: question.prompt });
  createVeraTranscript.push({ role: "employer", text: answerText });
}

function buildCreateVeraSuggestions(answers) {
  const suggestions = {};
  const directReason = "You answered this in the conversation.";
  const addIfPresent = (field, value) => { if (value !== undefined && value !== "" && !(Array.isArray(value) && value.length === 0)) suggestions[field] = { value, reason: directReason }; };

  addIfPresent("title", answers.title);
  addIfPresent("seniority", answers.seniority);
  addIfPresent("location", answers.location);
  addIfPresent("workMode", answers.workMode);
  addIfPresent("employmentType", answers.employmentType);
  if (answers.salary && (answers.salary.min || answers.salary.max)) {
    suggestions.salary = { value: { min: answers.salary.min, max: answers.salary.max, currency: "MYR" }, reason: directReason };
  }
  addIfPresent("mustHaveSkills", answers.mustHaveSkills);
  addIfPresent("niceToHaveSkills", answers.niceToHaveSkills);
  addIfPresent("minExperience", answers.minExperience);
  addIfPresent("educationOrCertification", answers.educationOrCertification);
  addIfPresent("urgency", answers.urgency);

  const generatedReason = "Vera generated this from your answers — edit or regenerate below.";
  const generated = generateRoleContentFromAnswers(answers);
  suggestions.roleSummary = { value: generated.roleSummary, reason: generatedReason, generated: true };
  suggestions.responsibilities = { value: generated.responsibilities, reason: generatedReason, generated: true };
  suggestions.benefits = { value: generated.benefits, reason: generatedReason, generated: true };
  return suggestions;
}
```

- [ ] **Step 3: Add the question-advancement flow and tag-input handler**

```js
function advanceCreateVeraQuestion(draft, onApplied) {
  createVeraStep += 1;
  if (createVeraStep >= CREATE_VERA_QUESTIONS.length) {
    createVeraGenerating = true;
    refreshCreateVeraModal(draft, onApplied);
    setTimeout(() => {
      createVeraGenerating = false;
      createVeraDraftSuggestions = buildCreateVeraSuggestions(createVeraAnswers);
      createVeraReviewMode = "summary";
      createVeraDecisions = {};
      refreshCreateVeraModal(draft, onApplied);
    }, 900);
  } else {
    refreshCreateVeraModal(draft, onApplied);
  }
}

function addCreateVeraTag(card, question, draft, onApplied) {
  const input = qs("[data-cv-tag-input]", card);
  const value = (input?.value || "").trim();
  if (!value) return;
  const tags = createVeraAnswers[question.field] || [];
  if (!tags.includes(value)) tags.push(value);
  createVeraAnswers[question.field] = tags;
  refreshCreateVeraModal(draft, onApplied);
}
```

- [ ] **Step 4: Add `bindCreateVeraConversationEvents`**

```js
function bindCreateVeraConversationEvents(card, draft, onApplied) {
  const question = CREATE_VERA_QUESTIONS[createVeraStep];
  if (!question) return;

  qsa("[data-cv-chip]", card).forEach(btn => btn.addEventListener("click", () => {
    createVeraAnswers[question.field] = btn.dataset.cvChip;
    commitCreateVeraAnswer(question, btn.dataset.cvChip);
    advanceCreateVeraQuestion(draft, onApplied);
  }));

  qs("[data-cv-tag-add]", card)?.addEventListener("click", () => addCreateVeraTag(card, question, draft, onApplied));
  qs("[data-cv-tag-input]", card)?.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); addCreateVeraTag(card, question, draft, onApplied); }
  });
  qsa("[data-cv-tag-remove]", card).forEach(btn => btn.addEventListener("click", () => {
    const tags = createVeraAnswers[question.field] || [];
    createVeraAnswers[question.field] = tags.filter(t => t !== btn.dataset.cvTagRemove);
    refreshCreateVeraModal(draft, onApplied);
  }));

  qs("[data-cv-back]", card)?.addEventListener("click", () => {
    if (createVeraStep === 0) return;
    createVeraStep -= 1;
    createVeraTranscript.splice(-2, 2);
    refreshCreateVeraModal(draft, onApplied);
  });
  qs("[data-cv-skip]", card)?.addEventListener("click", () => {
    createVeraAnswers[question.field] = question.type === "tags" ? [] : "";
    commitCreateVeraAnswer(question, "Skipped");
    advanceCreateVeraQuestion(draft, onApplied);
  });
  qs("[data-cv-next]", card)?.addEventListener("click", () => {
    if (question.type === "text") createVeraAnswers[question.field] = (qs("[data-cv-text-input]", card)?.value || "").trim();
    if (question.type === "salary") {
      const min = Number(qs("[data-cv-salary-min]", card)?.value || 0) || null;
      const max = Number(qs("[data-cv-salary-max]", card)?.value || 0) || null;
      createVeraAnswers.salary = { min, max };
    }
    if (!validateCreateVeraAnswer(question)) { showToast("Please answer this question first.", "info"); return; }
    commitCreateVeraAnswer(question, formatCreateVeraAnswerForTranscript(question));
    advanceCreateVeraQuestion(draft, onApplied);
  });
}
```

- [ ] **Step 5: Replace `refreshCreateVeraModal`, `bindCreateVeraModal`, `openCreateWithVeraModal`**

Replace the three functions at app.js:11109-11172 (after the earlier deletions, exact line numbers will have shifted — locate by function name) with:

```js
function refreshCreateVeraModal(draft, onApplied) {
  const host = qs("[data-emp-modal-root]");
  const card = qs(".emp-modal-card", host);
  if (!card) return;
  card.innerHTML = createVeraDraftSuggestions
    ? renderCreateVeraReviewPhase(draft, createVeraDraftSuggestions)
    : createVeraGenerating
      ? renderCreateVeraGeneratingPhase()
      : renderCreateVeraConversationPhase();
  createIcons();
  bindCreateVeraModal(host, draft, onApplied);
}

function bindCreateVeraModal(host, draft, onApplied) {
  const card = qs(".emp-modal-card", host);
  if (!card) return;
  if (createVeraDraftSuggestions) {
    bindCreateVeraReviewEvents(card, draft, onApplied);
  } else if (!createVeraGenerating) {
    bindCreateVeraConversationEvents(card, draft, onApplied);
  }
}

function openCreateWithVeraModal(draft, onApplied) {
  createVeraStep = 0;
  createVeraAnswers = {};
  createVeraTranscript = [];
  createVeraGenerating = false;
  createVeraDraftSuggestions = null;
  createVeraReviewMode = "summary";
  createVeraDecisions = {};
  createVeraRegenerateSeeds = {};
  openEmpModal("create-with-vera", renderCreateVeraConversationPhase(), {
    label: "Create with Vera",
    className: "emp-create-vera-card",
    onOpen: host => bindCreateVeraModal(host, draft, onApplied)
  });
}
```

Note: `bindCreateVeraReviewEvents` is defined in Task 4 — Task 3 will not fully work end-to-end (review phase binding will be missing) until Task 4 lands. That's expected; verify Task 3 by confirming the conversation runs through all 11 questions and reaches the generating→review transition with `createVeraDraftSuggestions` correctly populated (read via `page.evaluate`), even though clicking buttons in the rendered review screen won't do anything yet.

- [ ] **Step 6: Verify with Playwright — drive the actual DOM through all 11 questions**

Create `...scratchpad/verify-task3.mjs` (reuse the launch/goto boilerplate, but this time interact with the real page instead of `page.evaluate`-only calls). Navigate to `employer-app.html#role-builder`, then:

```js
await page.click('[data-emp-create-vera]');
await page.waitForSelector('.emp-create-vera-card');

// Q1 title (text)
await page.fill('[data-cv-text-input]', 'Senior Backend Engineer');
await page.click('[data-cv-next]');

// Q2 seniority (chip)
await page.click('[data-cv-chip="Senior"]');

// Q3 location (text)
await page.fill('[data-cv-text-input]', 'Kuala Lumpur');
await page.click('[data-cv-next]');

// Q4 workMode (chip)
await page.click('[data-cv-chip="Remote"]');

// Q5 employmentType (chip)
await page.click('[data-cv-chip="Full-time"]');

// Q6 salary
await page.fill('[data-cv-salary-min]', '7000');
await page.fill('[data-cv-salary-max]', '10000');
await page.click('[data-cv-next]');

// Q7 mustHaveSkills (tags) — add two, then Next
await page.fill('[data-cv-tag-input]', 'Node.js');
await page.click('[data-cv-tag-add]');
await page.fill('[data-cv-tag-input]', 'SQL');
await page.click('[data-cv-tag-add]');
await page.click('[data-cv-next]');

// Q8 niceToHaveSkills — skip
await page.click('[data-cv-skip]');

// Q9 minExperience (chip)
await page.click('[data-cv-chip="3-5 years"]');

// Q10 educationOrCertification — skip
await page.click('[data-cv-skip]');

// Q11 urgency (chip) — triggers generating -> review
await page.click('[data-cv-chip="Urgent"]');

await page.waitForSelector('.emp-checklist', { timeout: 3000 });

const state = await page.evaluate(() => ({
  suggestions: window.createVeraDraftSuggestions,
  answers: window.createVeraAnswers
}));
```

Assert (in Node, not the browser):
```js
const s = state.suggestions;
const checks = [
  [s.title.value === "Senior Backend Engineer", "title"],
  [s.seniority.value === "Senior", "seniority"],
  [s.location.value === "Kuala Lumpur", "location"],
  [s.workMode.value === "Remote", "workMode"],
  [s.employmentType.value === "Full-time", "employmentType"],
  [s.salary.value.min === 7000 && s.salary.value.max === 10000, "salary"],
  [JSON.stringify(s.mustHaveSkills.value) === JSON.stringify(["Node.js", "SQL"]), "mustHaveSkills"],
  [s.niceToHaveSkills === undefined, "niceToHaveSkills should be omitted when skipped"],
  [s.minExperience.value === "3-5 years", "minExperience"],
  [s.educationOrCertification === undefined, "educationOrCertification should be omitted when skipped"],
  [s.urgency.value === "Urgent", "urgency"],
  [s.roleSummary.generated === true && typeof s.roleSummary.value === "string" && s.roleSummary.value.length > 0, "roleSummary generated"],
  [Array.isArray(s.responsibilities.value) && s.responsibilities.value.length === 4, "responsibilities generated"],
  [Array.isArray(s.benefits.value) && s.benefits.value.length > 0, "benefits generated"],
  [errors.length === 0, "zero console/page errors"]
];
```
Run the same way as Task 1/2. Expected: all checks pass, printed `Task 3 verification PASSED`.

- [ ] **Step 7: Manually confirm Back navigation**

In the same script (or a quick manual browser check via the already-open Chrome from `PowerShell Start-Process`), open "Create with Vera", answer Q1 and Q2, click Back once, and confirm: you land back on Q2 with "Senior" still shown as the active chip, and the transcript no longer shows the Q2 exchange (it will be re-added once you pick a chip again).

---

### Task 4: Review-phase extensions (Regenerate, niceToHaveSkills merge)

**Files:**
- Modify: `app.js`:
  - `applyCreateVeraSuggestions` (app.js:11099-11107)
  - `renderCreateVeraReviewPhase`'s sections-mode row template (the `.emp-cvs-actions` div, inside the block at app.js:11033-11097)
  - Add `bindCreateVeraReviewEvents` (this is the renamed/extended body of the *old* `bindCreateVeraModal`, referenced by Task 3's Step 5 but not yet defined)

**Interfaces:**
- Consumes: `createVeraDraftSuggestions`, `createVeraRegenerateSeeds` (Task 2/3), `generateRoleSummary`/`generateResponsibilities`/`generateBenefits` (Task 1).
- Produces: `bindCreateVeraReviewEvents(card, draft, onApplied)` — completes the wiring Task 3 left dangling.

- [ ] **Step 1: Update `applyCreateVeraSuggestions` to merge `niceToHaveSkills` like `mustHaveSkills`**

Replace:
```js
function applyCreateVeraSuggestions(draft, suggestions, fields) {
  fields.forEach(f => {
    const s = suggestions[f];
    if (!s) return;
    if (f === "salary") { draft.salary.min = s.value.min; draft.salary.max = s.value.max; draft.salary.currency = s.value.currency; }
    else if (f === "mustHaveSkills") s.value.forEach(skill => { if (!draft.mustHaveSkills.includes(skill)) draft.mustHaveSkills.push(skill); });
    else draft[f] = s.value;
  });
}
```
with:
```js
function applyCreateVeraSuggestions(draft, suggestions, fields) {
  fields.forEach(f => {
    const s = suggestions[f];
    if (!s) return;
    if (f === "salary") { draft.salary.min = s.value.min; draft.salary.max = s.value.max; draft.salary.currency = s.value.currency; }
    else if (f === "mustHaveSkills" || f === "niceToHaveSkills") s.value.forEach(skill => { if (!draft[f].includes(skill)) draft[f].push(skill); });
    else draft[f] = s.value;
  });
}
```

- [ ] **Step 2: Add the Regenerate button to the sections-mode row**

In `renderCreateVeraReviewPhase`, find (inside the `createVeraReviewMode === "sections"` branch):
```js
              <div class="emp-cvs-actions">
                <button type="button" class="btn btn-primary btn-sm" data-cvs-accept="${f}">Accept</button>
                <button type="button" class="btn btn-ghost btn-sm" data-cvs-skip="${f}">Skip</button>
              </div>
```
Replace with:
```js
              <div class="emp-cvs-actions">
                <button type="button" class="btn btn-primary btn-sm" data-cvs-accept="${f}">Accept</button>
                <button type="button" class="btn btn-ghost btn-sm" data-cvs-skip="${f}">Skip</button>
                ${s.generated ? `<button type="button" class="btn btn-ghost btn-sm" data-cvs-regenerate="${f}">${icon("refresh-cw")} Regenerate</button>` : ""}
              </div>
```

- [ ] **Step 3: Add `bindCreateVeraReviewEvents`**

Add this function (it replaces what was inline in the old `bindCreateVeraModal` before Task 3 renamed the container function — this is the full body Task 3's `bindCreateVeraModal` now delegates to):

```js
function bindCreateVeraReviewEvents(card, draft, onApplied) {
  qs("[data-create-vera-back]", card)?.addEventListener("click", () => {
    createVeraDraftSuggestions = null;
    createVeraStep = Math.max(0, CREATE_VERA_QUESTIONS.length - 1);
    createVeraTranscript.splice(-2, 2);
    refreshCreateVeraModal(draft, onApplied);
  });
  qs("[data-create-vera-apply-all]", card)?.addEventListener("click", () => {
    applyCreateVeraSuggestions(draft, createVeraDraftSuggestions, Object.keys(createVeraDraftSuggestions));
    closeEmpModal();
    onApplied();
    showToast("Applied Vera's suggested role draft.");
  });
  qs("[data-create-vera-sections]", card)?.addEventListener("click", () => {
    createVeraReviewMode = "sections";
    refreshCreateVeraModal(draft, onApplied);
  });
  qsa("[data-cvs-accept]", card).forEach(btn => btn.addEventListener("click", () => {
    createVeraDecisions[btn.dataset.cvsAccept] = "accept";
    refreshCreateVeraModal(draft, onApplied);
  }));
  qsa("[data-cvs-skip]", card).forEach(btn => btn.addEventListener("click", () => {
    createVeraDecisions[btn.dataset.cvsSkip] = "skip";
    refreshCreateVeraModal(draft, onApplied);
  }));
  qsa("[data-cvs-regenerate]", card).forEach(btn => btn.addEventListener("click", () => {
    const f = btn.dataset.cvsRegenerate;
    createVeraRegenerateSeeds[f] = (createVeraRegenerateSeeds[f] || 0) + 1;
    const seed = createVeraRegenerateSeeds[f];
    const value = f === "roleSummary" ? generateRoleSummary(createVeraAnswers, seed)
      : f === "responsibilities" ? generateResponsibilities(createVeraAnswers, seed)
      : generateBenefits(createVeraAnswers, seed);
    createVeraDraftSuggestions[f] = { value, reason: "Vera generated this from your answers — edit or regenerate below.", generated: true };
    refreshCreateVeraModal(draft, onApplied);
  }));
  qs("[data-create-vera-apply-decisions]", card)?.addEventListener("click", () => {
    const acceptedFields = Object.keys(createVeraDecisions).filter(f => createVeraDecisions[f] === "accept");
    if (!acceptedFields.length) { showToast("Accept at least one section first.", "info"); return; }
    applyCreateVeraSuggestions(draft, createVeraDraftSuggestions, acceptedFields);
    closeEmpModal();
    onApplied();
    showToast(`Applied ${acceptedFields.length} accepted section${acceptedFields.length === 1 ? "" : "s"}.`);
  });
}
```

Place it directly above `refreshCreateVeraModal` (i.e., right before the block Task 3 Step 5 replaced), so `bindCreateVeraModal`'s reference to it resolves.

- [ ] **Step 4: Verify with Playwright**

Extend `verify-task3.mjs`'s flow into a new `verify-task4.mjs` (same 11-question walk from Task 3, but continue past the review screen):

```js
// ... after the Q11 chip click and waitForSelector('.emp-checklist') from Task 3 ...
await page.click('[data-create-vera-sections]');
await page.waitForSelector('[data-cvs-regenerate="responsibilities"]');

const before = await page.evaluate(() => window.createVeraDraftSuggestions.responsibilities.value);
await page.click('[data-cvs-regenerate="responsibilities"]');
const after = await page.evaluate(() => window.createVeraDraftSuggestions.responsibilities.value);

const summaryBefore = await page.evaluate(() => window.createVeraDraftSuggestions.roleSummary.value);
await page.click('[data-cvs-regenerate="responsibilities"]'); // regenerate again, should not touch roleSummary
const summaryAfter = await page.evaluate(() => window.createVeraDraftSuggestions.roleSummary.value);

await page.click('[data-cvs-accept="title"]');
await page.click('[data-cvs-accept="mustHaveSkills"]');
await page.click('[data-cvs-accept="responsibilities"]');
await page.click('[data-cvs-accept="benefits"]');
await page.click('[data-create-vera-apply-decisions]');

const draftState = await page.evaluate(() => {
  const state = JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k => k.includes("careergo")) || "")) || {};
  return state; // fallback inspection only if needed
});
```

Assertions:
```js
[JSON.stringify(before) !== JSON.stringify(after), "responsibilities should change after regenerate"],
[summaryBefore === summaryAfter, "regenerating responsibilities must not change roleSummary"],
```

For confirming the applied draft, instead of reading localStorage directly (brittle key name), navigate the wizard back to Step 1 (`data-emp-step="0"`, already the active step after apply) and read the rendered input value directly (app.js:11378 confirms the exact attribute is `data-field-title`):
```js
const titleValue = await page.inputValue('[data-field-title]');
```
Assert `titleValue === "Senior Backend Engineer"`. Must-have skills render via `renderTagInput("mustHaveSkills", draft.mustHaveSkills)` (app.js:10684-10693), which produces `<div class="emp-tag-input" data-tag-field="mustHaveSkills">` containing `<span class="pill emp-tag-pill">` per skill — assert:
```js
const skillPills = await page.$$eval('[data-tag-field="mustHaveSkills"] .emp-tag-pill', els => els.map(el => el.textContent.trim()));
```
contains entries starting with `Node.js` and `SQL` (the pill text also includes the trailing remove-button's accessible text, so use `.includes` substring checks, not exact equality). Also assert that the Preview & Publish step (`data-emp-step="4"`) shows the "Candidate requirements" and responsibilities-related readiness checks (app.js:9947-9948) marked complete — read via `page.evaluate(() => Array.from(document.querySelectorAll('.emp-checklist--status li')).map(li => li.textContent.trim()))` and confirm none contain "Missing".

---

### Task 5: CSS for the chat transcript, chips, tags, and generating state

**Files:**
- Modify: `styles.css` (insert after `.emp-cvs-actions { display: flex; gap: 8px; }` at line 13581, before the `@media (max-width: 900px)` block)

- [ ] **Step 1: Add the CSS block**

```css
.emp-cv-transcript { display: flex; flex-direction: column; gap: 8px; max-height: 260px; overflow-y: auto; margin-bottom: 14px; padding-right: 4px; }
.emp-cv-bubble { max-width: 80%; padding: 9px 13px; border-radius: 14px; font-size: 13px; line-height: 1.5; }
.emp-cv-bubble-vera { align-self: flex-start; background: rgba(7, 56, 47, 0.06); color: var(--emp-ink, var(--text)); border-bottom-left-radius: 4px; }
.emp-cv-bubble-employer { align-self: flex-end; background: var(--emp-green, #07382f); color: var(--emp-cream-text, #fff); border-bottom-right-radius: 4px; }

.emp-cv-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.emp-cv-chip { padding: 8px 14px; border-radius: 999px; border: 1px solid var(--emp-line, var(--line)); background: transparent; font-size: 13px; font-weight: 600; cursor: pointer; transition: background 150ms, border-color 150ms, color 150ms; }
.emp-cv-chip:hover { border-color: var(--emp-teal, var(--line)); }
.emp-cv-chip.active { background: var(--emp-green, #07382f); border-color: var(--emp-green, #07382f); color: var(--emp-cream-text, #fff); }

.emp-cv-salary-row { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
.emp-cv-salary-row input { flex: 1; padding: 10px 12px; border: 1px solid var(--emp-line, var(--line)); border-radius: 10px; font-size: 14px; }
.emp-cv-salary-prefix, .emp-cv-salary-suffix { font-size: 12px; color: var(--emp-muted, var(--muted)); white-space: nowrap; }

.emp-cv-text-input { margin-bottom: 14px; }
.emp-cv-text-input input { width: 100%; padding: 10px 12px; border: 1px solid var(--emp-line, var(--line)); border-radius: 10px; font-size: 14px; }

.emp-cv-tags-input { margin-bottom: 14px; }
.emp-cv-tag-add-row { display: flex; gap: 8px; margin-top: 8px; }
.emp-cv-tag-add-row input { flex: 1; padding: 9px 12px; border: 1px solid var(--emp-line, var(--line)); border-radius: 10px; font-size: 13px; }

.emp-cv-nav { justify-content: flex-end; }
.emp-cv-nav [data-cv-back] { margin-right: auto; }

.emp-cv-generating { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 36px 12px; text-align: center; color: var(--emp-muted, var(--muted)); }
.emp-cv-generating-spinner { animation: emp-cv-spin 1.1s linear infinite; color: var(--emp-green, #07382f); }
@keyframes emp-cv-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
```

- [ ] **Step 2: Verify visually**

Reuse the Playwright session: after answering a couple of questions, call `page.screenshot({ path: "...scratchpad/task5-conversation.png" })` mid-conversation (chips visible, one bubble in transcript), and one more during the generating phase. Read both screenshots with the Read tool and confirm: chips render as pill buttons with a visible active state, the employer's transcript bubble is right-aligned in the dark green fill, the generating view shows the spinner icon and copy, nothing overflows the modal width.

---

### Task 6: Full end-to-end walkthrough and final verification

**Files:** none (verification only)

- [ ] **Step 1: Clean-state full run**

Create `...scratchpad/verify-task6.mjs`: launch Chrome, `page.evaluate(() => localStorage.clear())`, reload `employer-app.html#role-builder`, then repeat the full Task 3 Step 6 flow but answer *every* question (including the two skippable ones instead of skipping) to exercise the tags-question and text-question paths fully, then use "Apply all" (not per-section) from the summary review screen.

- [ ] **Step 2: Confirm the wizard reflects every applied field**

Navigate through all 5 wizard steps (`data-emp-step="0"` through `"4"`) via `page.click('[data-emp-step="N"]')` and, for each, read the relevant field values via `page.evaluate` (e.g. `document.querySelector('[data-field-title]').value`, `draft.responsibilities` via the exposed `window` state if accessible, or the rendered pill text for skills/benefits). Confirm: title, location, salary, skills, responsibilities (≥3 non-empty, satisfying the readiness check), and benefits all show the values from the conversation.

- [ ] **Step 3: Confirm zero console errors across the whole run**

Assert the accumulated `errors` array (from `page.on("pageerror")` / `page.on("console")` filtering `type()==="error"`) is empty across the entire script from Step 1 through Step 2.

- [ ] **Step 4: Manual final check**

Use `PowerShell Start-Process "c:\Users\laisi\careergo\employer-app.html"` to open it in the user's actual default browser (not headless Chrome), click through "Create with Vera" once by hand, and visually confirm the experience reads naturally as a conversation (this is a subjective UX check the automated script can't cover).

- [ ] **Step 5: Report results to the user**

Summarize what was built, what was verified (automated Playwright pass + manual visual check), and explicitly note: **no commit has been made** — offer to commit if the user wants it.
