# Employer Workspace Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current single-`innerHTML`/anchor-nav `renderEmployerPortal()` with a real hash-routed single-page app shell (header + collapsible sidebar + one `#employer-view` main), and build the Dashboard and Roles (list + create/edit wizard with a Role Intelligence panel) views on top of it. Other sidebar destinations get lightweight placeholder views in this phase.

**Architecture:** One `<div data-employer-app>` container in `employer-app.html` gets a persistent shell (header/sidebar/main) rendered once by `renderEmployerShell()`. A single `hashchange` listener plus one `employerNavigateTo(view, params)` function fully replace `#employer-view`'s content per navigation — never multiple views mounted at once, never native anchor scrolling. `DATA.employerRoles` gains the richer fields (`status`, `applicants`, `qualified`, `strongFits`, `talentSupply`, `daysOpen`, `health`, `roleIntelligence{}`) the new views need.

**Tech Stack:** Vanilla JS (`app.js`), plain CSS (`styles.css`), static HTML (`employer-app.html`), Lucide icons via the existing `icon()`/`createIcons()` helpers, `localStorage` via the existing `readState()`/`writeState()` pair (plus one dedicated `localStorage` key for sidebar-collapse UI state). No build step, no test framework — verification is manual, in a browser, following the project's existing QA approach.

## Global Constraints

- No build step; changes must work opened via `file://` or plain static hosting (per `CLAUDE.md`).
- Hash-based routing only (no History API `pushState`) — see spec rationale.
- Never modify candidate-side `.os-*` classes/functions or the public marketing page's `.employer-page` classes/functions.
- New CSS is scoped under an `.emp-app-*` prefix (distinct from `.employer-page` used by the marketing page and `.os-*` used by the candidate OS) to avoid any collision, per the project's "prefer scoped selectors" convention already used for the marketing page rebuild.
- Employer-visible candidate data is limited to what the spec allows (skills, evidence, experience, readiness, career direction, availability, salary expectation) — not applicable to Phase 1 (no candidate data rendered yet) but keep in mind for later phases.
- Type scale/spacing tokens from the spec: page title 28-36px, section heading 20-26px, card title 15-18px, body 13-15px, labels 10-12px, metrics up to 30px; main content padding 24-32px, card padding 16-22px, card gaps 14-20px, section gaps 24-36px; no 100px+ section padding, no full-viewport sections.
- Acceptance criteria to satisfy (from the spec doc): no flash/reload loop on load; rapid nav clicks never show another view mid-transition; only one view ever mounted in `#employer-view`; no `hashchange` recursion; sidebar has correct single active state, collapses to icon-only, becomes a drawer under ~900px with no horizontal overflow; Dashboard has no "Posts and Updates"/candidate-facing content; Roles supports create/edit and shows Role Intelligence with at least one triggered warning; old anchor-nav/single-innerHTML code is deleted, not left mounted/hidden.

---

## File Structure

- **Modify: `app.js`**
  - `DATA.employerRoles` (~line 792-797): replace 3 thin entries with 5 richer entries.
  - Delete `renderEmployerPortal()`, `candidateCard()`, `safeCandidateName()` are **kept** (still used by nothing after this change — actually unused after deletion; see Task 6 for exact removal list).
  - Add: `EMPLOYER_NAV_GROUPS`, `renderEmployerShell(root)`, `parseEmployerHash()`, `employerNavigateTo(view, params, options)`, `renderEmployerView(view, params, root)`, `renderEmployerDashboard(root)`, `renderEmployerRolesList(root)`, `renderEmployerRoleBuilder(root, roleId)`, `renderEmployerPlaceholder(root, view)`, `initEmployerRouter()`.
  - Modify `init()` to call `initEmployerRouter()` before `bindGlobalActions()`, and remove the now-dead `renderEmployerPortal()` call.
- **Modify: `employer-app.html`** — replace the marketing `.topbar` + `.os-layout` shell with a single `<div data-employer-app></div>`.
- **Modify: `styles.css`** — append a new `.emp-app-*` scoped block (shell, sidebar, dashboard, roles list, role builder wizard).
- **No test files** — this repo has no test framework; verification is manual (documented per task).

## Interfaces (shared contract across tasks)

```js
// DATA.employerRoles[i] shape (Task 1 produces, Tasks 3-5 consume)
{
  id: "er1", title: "Product Design Intern", status: "Active" | "Draft" | "Paused",
  applicants: 84, qualified: 21, strongFits: 9,
  talentSupply: "Strong" | "Good" | "Tight",
  daysOpen: 7, health: "Healthy" | "Needs attention",
  roleIntelligence: {
    talentAvailability: "Strong" | "Good" | "Tight",
    typicalExperience: "0-2 years", commonSalary: "RM 3.8k-6k",
    commonSkills: ["SQL", "Excel"], requestedButLessCommon: ["AWS"],
    potentialIssue: "...", suggestedAdjustment: "..."
  }
}

// Router (Task 2 produces, Tasks 3-5 consume)
function employerNavigateTo(view /* string, one of EMPLOYER_VIEW_KEYS */, params = {} /* {id?: string} */, options = {} /* {force?: boolean} */)
function renderEmployerView(view, params, root /* #employer-view element */) // internal dispatcher, calls renderEmployer<View>(root, params)
```

---

### Task 1: Expand `DATA.employerRoles` mock data

**Files:**
- Modify: `app.js:792-797` (the `employerRoles:` array inside the `DATA` object)

**Interfaces:**
- Produces: `DATA.employerRoles` array in the shape shown above, 5 entries, `id`s `er1`-`er5`, with `er2` ("Junior Data Analyst") set to `health: "Needs attention"` and a real `potentialIssue`/`suggestedAdjustment` (this is what the Dashboard priority card and Roles Intelligence panel will surface in later tasks).

- [ ] **Step 1: Replace the array**

Find this block in `app.js`:

```js
  employerRoles: [
    { id: "er1", title: "Product Design Intern", applicants: 84, qualified: 21, status: "Active" },
    { id: "er2", title: "Junior Data Analyst", applicants: 126, qualified: 34, status: "Active" },
    { id: "er3", title: "Graduate UX Researcher", applicants: 47, qualified: 16, status: "Draft" }
  ]
```

Replace it with:

```js
  employerRoles: [
    {
      id: "er1", title: "Product Design Intern", status: "Active",
      applicants: 84, qualified: 21, strongFits: 9, talentSupply: "Good", daysOpen: 7, health: "Healthy",
      roleIntelligence: {
        talentAvailability: "Good", typicalExperience: "0-1 years", commonSalary: "RM 1.8k - 2.5k",
        commonSkills: ["Figma", "User Research", "Prototyping", "Design Systems"],
        requestedButLessCommon: ["Motion Design"],
        potentialIssue: "No major mismatch between requirements and the current intern talent pool.",
        suggestedAdjustment: "Requirements already align well with available candidates."
      }
    },
    {
      id: "er2", title: "Junior Data Analyst", status: "Active",
      applicants: 126, qualified: 34, strongFits: 8, talentSupply: "Strong", daysOpen: 12, health: "Needs attention",
      roleIntelligence: {
        talentAvailability: "Strong", typicalExperience: "0-2 years", commonSalary: "RM 3.8k - 6k",
        commonSkills: ["SQL", "Excel", "Power BI", "Python"],
        requestedButLessCommon: ["AWS", "ML in production"],
        potentialIssue: "Requiring 3+ years of experience may reduce your available candidate pool by 62%.",
        suggestedAdjustment: "1-3 years or strong project evidence."
      }
    },
    {
      id: "er3", title: "Graduate UX Researcher", status: "Draft",
      applicants: 47, qualified: 16, strongFits: 5, talentSupply: "Good", daysOpen: 3, health: "Healthy",
      roleIntelligence: {
        talentAvailability: "Good", typicalExperience: "0-1 years", commonSalary: "RM 3k - 4.5k",
        commonSkills: ["User Interviews", "Usability Testing", "Figma", "Survey Design"],
        requestedButLessCommon: ["Quantitative Research"],
        potentialIssue: "Draft not yet published — no applicant data yet.",
        suggestedAdjustment: "Publish the role to start receiving applicants."
      }
    },
    {
      id: "er4", title: "Software Engineer", status: "Active",
      applicants: 84, qualified: 29, strongFits: 11, talentSupply: "Strong", daysOpen: 7, health: "Healthy",
      roleIntelligence: {
        talentAvailability: "Strong", typicalExperience: "1-3 years", commonSalary: "RM 4.5k - 7k",
        commonSkills: ["React", "Node.js", "SQL", "AWS"],
        requestedButLessCommon: ["Kubernetes"],
        potentialIssue: "No major mismatch between requirements and the current talent pool.",
        suggestedAdjustment: "Requirements already align well with available candidates."
      }
    },
    {
      id: "er5", title: "Backend Engineer", status: "Paused",
      applicants: 58, qualified: 19, strongFits: 6, talentSupply: "Tight", daysOpen: 21, health: "Needs attention",
      roleIntelligence: {
        talentAvailability: "Tight", typicalExperience: "3-5 years", commonSalary: "RM 7k - 10k",
        commonSkills: ["Java", "Microservices", "SQL", "Kafka"],
        requestedButLessCommon: ["Kafka at scale", "Site reliability"],
        potentialIssue: "The combination of a 5+ year requirement and Kafka-at-scale evidence is uncommon locally, narrowing supply.",
        suggestedAdjustment: "Consider 3-5 years with strong distributed-systems evidence instead of a hard 5-year cutoff."
      }
    }
  ]
```

- [ ] **Step 2: Verify no syntax errors**

Run: `node --check app.js`
Expected: no output (exit code 0).

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: expand employer role mock data with intelligence fields"
```

---

### Task 2: Router core + persistent app shell

**Files:**
- Modify: `employer-app.html` (replace body markup)
- Modify: `app.js` (add router + shell functions; wire into `init()`)

**Interfaces:**
- Consumes: `qs`/`qsa`, `icon`, `createIcons`, `readState`, `writeState`, `requireRole(root, allowedRole, purpose)` (all existing, defined earlier in `app.js`).
- Produces: `employerNavigateTo(view, params, options)`, `renderEmployerView(view, params, root)`, `initEmployerRouter()` — consumed by Tasks 3-5. Also produces `renderEmployerPlaceholder(root, view)` for the not-yet-built sidebar destinations.

- [ ] **Step 1: Replace `employer-app.html`'s body**

Current file:

```html
<body data-page="employers">
  <header class="topbar"><div class="nav-inner">...</div></header>
  <main><section class="container os-layout" data-employer-app></section></main>
  <script src="app.js"></script>
</body>
```

Replace with:

```html
<body data-page="employers">
  <div class="emp-app-shell" data-employer-app></div>
  <script src="app.js"></script>
</body>
```

Also update the `<title>` from `Employer Portal - CareerGo` to `Employer OS - CareerGo`.

- [ ] **Step 2: Add the nav config and router state to `app.js`**

Add near the top of the employer-related functions (just above where `renderEmployerPortal()` currently is, i.e. around line 6017 — this whole function is deleted in Task 6, but add these new pieces in its place now):

```js
const EMPLOYER_NAV_GROUPS = [
  { label: "Overview", items: [["dashboard", "Dashboard", "layout-dashboard"]] },
  { label: "Hire", items: [
    ["roles", "Roles", "briefcase"],
    ["candidate-search", "Candidate Search", "search"],
    ["talent-pool", "Talent Pool", "bookmark"],
    ["hiring", "Hiring", "kanban"]
  ] },
  { label: "Intelligence", items: [
    ["analytics", "Analytics", "bar-chart-2"],
    ["university-talent", "University Talent", "graduation-cap"],
    ["company-profile", "Company Profile", "building-2"]
  ] },
  { label: "AI", items: [["vera", "Vera", "sparkles"]] },
  { label: "Account", items: [["settings", "Settings", "settings"]] }
];

const EMPLOYER_VIEW_KEYS = EMPLOYER_NAV_GROUPS.flatMap(group => group.items.map(([key]) => key));
const EMPLOYER_VIEW_TITLES = Object.fromEntries(EMPLOYER_NAV_GROUPS.flatMap(group => group.items.map(([key, label]) => [key, label])));

let employerRouteState = { view: "", params: {} };
```

- [ ] **Step 3: Add the shell renderer**

```js
function renderEmployerShell(root) {
  const state = readState();
  const employer = state.employerProfile || {};
  root.innerHTML = `
    <header class="emp-app-header">
      <div class="emp-app-header-left">
        <button type="button" class="emp-app-menu-btn" data-emp-menu-toggle aria-label="Open navigation">${icon("menu")}</button>
        <a class="emp-app-brand" href="index.html">${icon("layout-dashboard")}<span>CareerGo <small>Employer OS</small></span></a>
      </div>
      <div class="emp-app-header-search field">
        ${icon("search")}
        <input type="text" placeholder="Search candidates, roles, applicants..." disabled>
      </div>
      <div class="emp-app-header-right">
        <button type="button" class="emp-app-icon-btn" aria-label="Notifications">${icon("bell")}</button>
        <span class="emp-app-workspace">${employer.company || "Your Workspace"}</span>
        <span class="emp-app-avatar">${(employer.contactName || employer.company || "E").charAt(0).toUpperCase()}</span>
      </div>
    </header>
    <div class="emp-app-body">
      <aside class="emp-app-sidebar" data-emp-sidebar>
        <nav aria-label="Employer navigation">
          ${EMPLOYER_NAV_GROUPS.map(group => `
            <div class="emp-nav-group">
              <span class="emp-nav-group-label">${group.label}</span>
              ${group.items.map(([key, label, ic]) => `<a href="#${key}" class="emp-nav-item" data-emp-nav="${key}">${icon(ic)}<span>${label}</span></a>`).join("")}
            </div>
          `).join("")}
        </nav>
        <button type="button" class="emp-nav-item emp-app-collapse-btn" data-emp-collapse aria-label="Collapse sidebar">${icon("chevron-left")}<span>Collapse</span></button>
        <button type="button" class="emp-nav-item" data-logout>${icon("log-out")}<span>Logout</span></button>
      </aside>
      <div class="emp-app-sidebar-overlay" data-emp-sidebar-overlay></div>
      <main id="employer-view" class="emp-app-main"></main>
    </div>
  `;
  createIcons();

  qsa("[data-emp-nav]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    document.body.classList.remove("emp-sidebar-open");
    employerNavigateTo(link.dataset.empNav);
  }));
  qs("[data-emp-menu-toggle]", root)?.addEventListener("click", () => {
    document.body.classList.toggle("emp-sidebar-open");
  });
  qs("[data-emp-sidebar-overlay]", root)?.addEventListener("click", () => {
    document.body.classList.remove("emp-sidebar-open");
  });
  qs("[data-emp-collapse]", root)?.addEventListener("click", () => {
    const collapsed = document.body.classList.toggle("emp-sidebar-collapsed");
    localStorage.setItem("careergo-employer-sidebar-collapsed", collapsed ? "1" : "0");
  });
  if (localStorage.getItem("careergo-employer-sidebar-collapsed") === "1") {
    document.body.classList.add("emp-sidebar-collapsed");
  }
}
```

- [ ] **Step 4: Add the route parser, navigator, and view dispatcher**

```js
function parseEmployerHash() {
  const raw = (location.hash || "").replace(/^#\/?/, "");
  const [view, id] = raw.split("/");
  return {
    view: EMPLOYER_VIEW_KEYS.includes(view) ? view : "dashboard",
    params: id ? { id } : {}
  };
}

function employerNavigateTo(view, params = {}, options = {}) {
  const root = qs("#employer-view");
  if (!root) return;
  const isSameRoute = employerRouteState.view === view && employerRouteState.params.id === params.id;
  if (isSameRoute && !options.force) return;

  employerRouteState = { view, params };
  qsa("[data-emp-nav]").forEach(link => link.classList.toggle("active", link.dataset.empNav === view));

  renderEmployerView(view, params, root);
  root.scrollTop = 0;

  const nextHash = `#${view}${params.id ? "/" + params.id : ""}`;
  if (location.hash !== nextHash) history.replaceState(null, "", nextHash);
}

function renderEmployerView(view, params, root) {
  switch (view) {
    case "dashboard": return renderEmployerDashboard(root);
    case "roles": return renderEmployerRolesList(root);
    case "role-builder": return renderEmployerRoleBuilder(root, params.id || null);
    default: return renderEmployerPlaceholder(root, view);
  }
}

function renderEmployerPlaceholder(root, view) {
  const title = EMPLOYER_VIEW_TITLES[view] || "This view";
  root.innerHTML = `
    <div class="emp-view-header"><h1>${title}</h1></div>
    <div class="emp-empty-state card">
      <div class="feature-icon">${icon("hourglass")}</div>
      <h2>${title} is coming in a later phase.</h2>
      <p>This part of the employer workspace is being built next. Dashboard and Roles are fully wired up today.</p>
    </div>
  `;
  createIcons();
}
```

- [ ] **Step 5: Add the router bootstrap and wire it into `init()`**

```js
function initEmployerRouter() {
  const shellRoot = qs("[data-employer-app]");
  if (!shellRoot) return;
  if (!requireRole(shellRoot, "employer", "open your employer workspace")) return;

  renderEmployerShell(shellRoot);
  const initial = parseEmployerHash();
  employerNavigateTo(initial.view, initial.params, { force: true });

  window.addEventListener("hashchange", () => {
    const next = parseEmployerHash();
    employerNavigateTo(next.view, next.params);
  });
}
```

Find the `init()` function's call list (ends with `renderEmployerPortal();` — see Task 6 for its removal) and, for this task, temporarily add the new call right after where `renderEmployerPortal();` currently is:

```js
  renderEmployerPortal();
  initEmployerRouter();
```

(Task 6 removes the `renderEmployerPortal();` line and the function itself once Tasks 3-5 exist, so both can coexist safely during this task — `initEmployerRouter()` returns early via `requireRole`/`qs` guards exactly like `renderEmployerPortal()` did, so having both temporarily active does not double-render anything since `renderEmployerPortal()` still only targets `[data-employer-app]`, which no longer exists as a real DOM match until Task 2 Step 1 lands — at that point delete the `renderEmployerPortal();` call immediately rather than waiting for Task 6, to avoid a dangling reference to a function using a selector that no longer resolves usefully.)

- [ ] **Step 6: Verify no syntax errors**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 7: Manual verification**

Serve the repo root with a static server (e.g. `python -m http.server 8934`) and open `http://localhost:8934/login.html`, log in with empty fields (per the existing "Judges can press Log in with empty fields" preview-account flow) selecting the employer role, or navigate to `employer-onboarding.html` first if no employer session exists yet. Then open `employer-app.html` and confirm:
- The header (logo/"Employer OS" label, search box, notifications/workspace/avatar) and sidebar (5 groups, Dashboard/Roles/Candidate Search/Talent Pool/Hiring/Analytics/University Talent/Company Profile/Vera/Settings/Logout) render immediately with no flash of any other content.
- Clicking each sidebar item swaps `#employer-view`'s content with no other view briefly appearing; unbuilt views show the "coming in a later phase" placeholder.
- Reloading the page while `#roles` is in the URL bar re-opens directly on the Roles placeholder (not Dashboard-then-jump).
- Resizing the browser under ~900px turns the sidebar into a drawer opened by the header's menu button, with no horizontal scrollbar on the page.

- [ ] **Step 8: Commit**

```bash
git add app.js employer-app.html
git commit -m "feat: add employer workspace app shell and hash router"
```

---

### Task 3: Dashboard view

**Files:**
- Modify: `app.js` (add `renderEmployerDashboard`)

**Interfaces:**
- Consumes: `DATA.employerRoles` (Task 1 shape), `icon`, `qs`/`qsa`, `employerNavigateTo` (Task 2), `showToast` (existing).
- Produces: `renderEmployerDashboard(root)`, called by `renderEmployerView` (Task 2) for the `dashboard` route.

- [ ] **Step 1: Implement the Dashboard renderer**

```js
function renderEmployerDashboard(root) {
  const roles = DATA.employerRoles;
  const priorityRole = roles.find(r => r.health === "Needs attention") || roles[0];
  const activeCount = roles.filter(r => r.status === "Active").length;
  const newQualified = roles.reduce((sum, r) => sum + r.qualified, 0);
  const waitingTooLong = roles.filter(r => r.daysOpen > 14).length;

  root.innerHTML = `
    <div class="emp-view-header">
      <h1>Good morning, ${(readState().employerProfile?.contactName) || "there"}.</h1>
      <p>Here's what needs attention across your hiring today.</p>
    </div>

    <div class="card emp-priority-card">
      <div class="emp-priority-label">${icon("sparkles")} Your highest-impact action</div>
      <p class="emp-priority-body">The <strong>${priorityRole.title}</strong> role has ${priorityRole.roleIntelligence.talentAvailability.toLowerCase()} candidate supply, but ${priorityRole.roleIntelligence.potentialIssue.charAt(0).toLowerCase()}${priorityRole.roleIntelligence.potentialIssue.slice(1)}</p>
      <div class="emp-priority-impact">Potential impact: <strong>+${Math.max(12, priorityRole.qualified)} relevant candidates</strong></div>
      <div class="emp-priority-actions">
        <button type="button" class="btn btn-primary" data-emp-review-role="${priorityRole.id}">Review requirement</button>
        <button type="button" class="btn btn-ghost" data-emp-view-candidates>See affected candidates</button>
      </div>
    </div>

    <div class="emp-kpi-row">
      <div class="emp-kpi-tile"><strong>${activeCount}</strong><span>Active roles</span></div>
      <div class="emp-kpi-tile"><strong>${newQualified}</strong><span>New qualified candidates</span></div>
      <div class="emp-kpi-tile"><strong>4</strong><span>Interviews this week</span></div>
      <div class="emp-kpi-tile"><strong>${waitingTooLong}</strong><span>Roles waiting too long</span></div>
    </div>

    <div class="card emp-priorities-card">
      <h2>Today's priorities</h2>
      <ul class="emp-priority-list">
        <li><span>3 candidates are waiting for review on Junior Data Analyst.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>Review</button></li>
        <li><span>Interview with Sarah Lee at 2:00 PM today.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>Open</button></li>
        <li><span>2 strong new matches for Backend Engineer.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>View</button></li>
        <li><span>Product Designer candidate has waited 6 days without a response.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>Respond</button></li>
        <li><span>Junior Data Analyst salary range may be below market.</span><button type="button" class="btn btn-ghost" data-emp-review-role="er2">Review</button></li>
      </ul>
    </div>

    <div class="card emp-roles-card">
      <div class="emp-card-head"><h2>Active roles</h2><a href="#roles" class="btn btn-ghost" data-emp-nav="roles">See all roles</a></div>
      <div class="table-wrap">
        <table class="emp-table">
          <thead><tr><th>Role</th><th>Status</th><th>Applicants</th><th>Qualified</th><th>Strong fits</th><th>Days open</th><th>Health</th></tr></thead>
          <tbody>
            ${roles.map(r => `
              <tr class="emp-table-row" data-emp-open-role="${r.id}">
                <td>${r.title}</td>
                <td><span class="pill ${r.status === "Active" ? "green" : r.status === "Draft" ? "gold" : ""}">${r.status}</span></td>
                <td>${r.applicants}</td>
                <td>${r.qualified}</td>
                <td>${r.strongFits}</td>
                <td>${r.daysOpen}d</td>
                <td><span class="pill ${r.health === "Healthy" ? "green" : "red"}">${r.health}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card emp-pipeline-snapshot">
      <h2>Pipeline snapshot</h2>
      <div class="emp-stage-row">
        <div class="emp-stage-tile"><strong>18</strong><span>New</span></div>
        <div class="emp-stage-tile"><strong>24</strong><span>Review</span></div>
        <div class="emp-stage-tile"><strong>31</strong><span>Screen</span></div>
        <div class="emp-stage-tile"><strong>9</strong><span>Interview</span></div>
        <div class="emp-stage-tile"><strong>3</strong><span>Offer</span></div>
      </div>
      <p class="emp-pipeline-note">Largest bottleneck: <strong>Screen stage</strong> — average time <strong>8 days</strong>.</p>
    </div>
  `;
  createIcons();

  qsa("[data-emp-open-role], [data-emp-review-role]", root).forEach(el => el.addEventListener("click", () => {
    const id = el.dataset.empOpenRole || el.dataset.empReviewRole;
    employerNavigateTo("role-builder", { id });
  }));
  qsa("[data-emp-view-candidates]", root).forEach(el => el.addEventListener("click", () => {
    showToast("Candidate Search opens in a later phase.", "info");
  }));
  qsa("[data-emp-nav]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    employerNavigateTo(link.dataset.empNav);
  }));
}
```

Note: clicking "Active roles" rows or the priority card's "Review requirement" button navigates to `role-builder` for that role id — this is implemented in Task 5, but the click wiring is correct now regardless of build order since `renderEmployerView`'s `role-builder` case is already registered in Task 2.

- [ ] **Step 2: Verify no syntax errors**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 3: Manual verification**

With the dev server running, navigate to `employer-app.html#dashboard` and confirm: greeting renders, priority card names a specific role and shows two working buttons (Review requirement navigates — will 404 into an unfinished role-builder view until Task 5 lands, that's expected at this point), KPI row shows 4 values, 5 priority rows each have a button, active roles table lists all 5 roles with correct status/health pill colors, pipeline snapshot shows 5 stage tiles + bottleneck line. No "Posts and Updates" content anywhere.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: add employer Dashboard view"
```

---

### Task 4: Roles list view

**Files:**
- Modify: `app.js` (add `renderEmployerRolesList`)

**Interfaces:**
- Consumes: `DATA.employerRoles`, `icon`, `employerNavigateTo`.
- Produces: `renderEmployerRolesList(root)`, called by `renderEmployerView` for the `roles` route.

- [ ] **Step 1: Implement the Roles list renderer**

```js
function renderEmployerRolesList(root) {
  const roles = DATA.employerRoles;
  root.innerHTML = `
    <div class="emp-view-header">
      <h1>Roles</h1>
      <button type="button" class="btn btn-primary" data-emp-create-role>${icon("plus")} Create role</button>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table class="emp-table">
          <thead><tr><th>Role</th><th>Status</th><th>Applicants</th><th>Qualified</th><th>Strong fits</th><th>Talent supply</th><th>Days open</th><th>Health</th><th></th></tr></thead>
          <tbody>
            ${roles.map(r => `
              <tr class="emp-table-row">
                <td>${r.title}</td>
                <td><span class="pill ${r.status === "Active" ? "green" : r.status === "Draft" ? "gold" : ""}">${r.status}</span></td>
                <td>${r.applicants}</td>
                <td>${r.qualified}</td>
                <td>${r.strongFits}</td>
                <td>${r.talentSupply}</td>
                <td>${r.daysOpen}d</td>
                <td><span class="pill ${r.health === "Healthy" ? "green" : "red"}">${r.health}</span></td>
                <td class="emp-table-actions">
                  <button type="button" class="btn btn-ghost btn-sm" data-emp-edit-role="${r.id}">Edit</button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
  createIcons();

  qs("[data-emp-create-role]", root)?.addEventListener("click", () => employerNavigateTo("role-builder", {}));
  qsa("[data-emp-edit-role]", root).forEach(btn => btn.addEventListener("click", () => {
    employerNavigateTo("role-builder", { id: btn.dataset.empEditRole });
  }));
}
```

- [ ] **Step 2: Verify no syntax errors**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 3: Manual verification**

Navigate to `employer-app.html#roles`. Confirm all 5 roles list with correct columns, "Create role" and each row's "Edit" button are present (will 404 into an unfinished builder view until Task 5 lands).

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: add employer Roles list view"
```

---

### Task 5: Role builder wizard + Role Intelligence panel

**Files:**
- Modify: `app.js` (add `renderEmployerRoleBuilder` and its step-navigation helper)

**Interfaces:**
- Consumes: `DATA.employerRoles`, `icon`, `employerNavigateTo`, `showToast`.
- Produces: `renderEmployerRoleBuilder(root, roleId)`, called by `renderEmployerView` for the `role-builder` route. Internal-only: `EMPLOYER_ROLE_BUILDER_STEPS`, local `activeStep` state held in a closure per render (no cross-render leakage since the whole view is torn down and rebuilt by `employerNavigateTo` on every navigation).

- [ ] **Step 1: Implement the wizard**

```js
const EMPLOYER_ROLE_BUILDER_STEPS = ["Basics", "Responsibilities", "Requirements", "Salary & Location", "Hiring Preferences", "Preview & Publish"];

function renderEmployerRoleBuilder(root, roleId) {
  const existing = roleId ? DATA.employerRoles.find(r => r.id === roleId) : null;
  let activeStep = existing ? 2 : 0; // jump straight to Requirements when editing, so Role Intelligence is visible immediately

  function draw() {
    const ri = existing?.roleIntelligence;
    root.innerHTML = `
      <div class="emp-view-header">
        <h1>${existing ? `Edit ${existing.title}` : "Create role"}</h1>
        <button type="button" class="btn btn-ghost" data-emp-nav="roles">${icon("x")} Cancel</button>
      </div>
      <div class="emp-wizard-steps">
        ${EMPLOYER_ROLE_BUILDER_STEPS.map((label, i) => `
          <button type="button" class="emp-wizard-step ${i === activeStep ? "active" : ""} ${i < activeStep ? "done" : ""}" data-emp-step="${i}">
            <span class="emp-wizard-step-index">${i + 1}</span><span>${label}</span>
          </button>
        `).join("")}
      </div>
      <div class="emp-wizard-body">
        <div class="card emp-wizard-form">
          ${renderWizardStepContent(activeStep, existing)}
          <div class="emp-wizard-actions">
            ${activeStep > 0 ? `<button type="button" class="btn btn-ghost" data-emp-prev>Back</button>` : "<span></span>"}
            ${activeStep < EMPLOYER_ROLE_BUILDER_STEPS.length - 1
              ? `<button type="button" class="btn btn-primary" data-emp-next>Continue</button>`
              : `<button type="button" class="btn btn-primary" data-emp-publish>${icon("check")} ${existing ? "Save changes" : "Publish role"}</button>`}
          </div>
        </div>
        ${(activeStep === 2 || activeStep === 3) && ri ? `
          <div class="card emp-role-intelligence">
            <div class="emp-callout-label">${icon("sparkles")} Role Intelligence</div>
            <div class="emp-stat-row"><span>Talent availability</span><strong>${ri.talentAvailability}</strong></div>
            <div class="emp-stat-row"><span>Typical experience</span><strong>${ri.typicalExperience}</strong></div>
            <div class="emp-stat-row"><span>Common salary</span><strong>${ri.commonSalary}</strong></div>
            <div class="emp-tags"><span class="emp-tags-label">Common skills</span><div class="pill-row">${ri.commonSkills.map(s => `<span class="pill">${s}</span>`).join("")}</div></div>
            <div class="emp-callout emp-callout-warn">
              <div class="emp-callout-label warn">${icon("alert-triangle")} Potential issue</div>
              <p>${ri.potentialIssue}</p>
            </div>
            <div class="emp-callout emp-callout-suggest">
              <div class="emp-callout-label">${icon("lightbulb")} Suggested adjustment</div>
              <p>${ri.suggestedAdjustment}</p>
            </div>
            <p class="emp-vera-principle">${icon("shield-check")} Vera advises and explains. You make the final decision.</p>
          </div>
        ` : ""}
      </div>
    `;
    createIcons();
    bindEvents();
  }

  function bindEvents() {
    qsa("[data-emp-step]", root).forEach(btn => btn.addEventListener("click", () => {
      activeStep = Number(btn.dataset.empStep);
      draw();
    }));
    qs("[data-emp-prev]", root)?.addEventListener("click", () => { activeStep = Math.max(0, activeStep - 1); draw(); });
    qs("[data-emp-next]", root)?.addEventListener("click", () => { activeStep = Math.min(EMPLOYER_ROLE_BUILDER_STEPS.length - 1, activeStep + 1); draw(); });
    qs("[data-emp-publish]", root)?.addEventListener("click", () => {
      showToast(existing ? "Role updated." : "Role published.");
      employerNavigateTo("roles", {}, { force: true });
    });
    qs("[data-emp-nav]", root)?.addEventListener("click", event => {
      event.preventDefault();
      employerNavigateTo("roles");
    });
  }

  draw();
}

function renderWizardStepContent(step, existing) {
  const v = field => existing ? (field === "title" ? existing.title : "") : "";
  switch (EMPLOYER_ROLE_BUILDER_STEPS[step]) {
    case "Basics":
      return `
        <label>Role title<input type="text" value="${v("title")}" placeholder="e.g. Junior Data Analyst"></label>
        <label>Department<input type="text" placeholder="e.g. Data & Analytics"></label>
        <label>Employment type<select><option>Full-time</option><option>Internship</option><option>Contract</option></select></label>
      `;
    case "Responsibilities":
      return `<label>Key responsibilities<textarea rows="6" placeholder="Describe the day-to-day ownership of this role"></textarea></label>`;
    case "Requirements":
      return `
        <label>Required skills<input type="text" placeholder="Comma-separated, e.g. SQL, Excel, Power BI"></label>
        <label>Minimum experience<input type="text" placeholder="e.g. 1-3 years"></label>
      `;
    case "Salary & Location":
      return `
        <label>Salary range<input type="text" placeholder="e.g. RM 3.8k - 6k"></label>
        <label>Location<input type="text" placeholder="e.g. Kuala Lumpur"></label>
        <label>Work mode<select><option>On-site</option><option>Hybrid</option><option>Remote</option></select></label>
      `;
    case "Hiring Preferences":
      return `
        <label>Match threshold<select><option>70%</option><option>80%</option><option>90%</option></select></label>
        <label class="check-field custom-checkbox"><input type="checkbox"> Require portfolio evidence</label>
      `;
    default: // Preview & Publish
      return `<p class="emp-preview-note">Review the details across the previous steps, then publish. Vera will keep monitoring talent availability against this role's requirements once it's live.</p>`;
  }
}
```

- [ ] **Step 2: Verify no syntax errors**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 3: Manual verification**

Navigate to `employer-app.html#roles`, click "Edit" on **Junior Data Analyst** — confirm it opens directly on the "Requirements" step with the Role Intelligence panel visible showing the "3+ years... may reduce your available candidate pool by 62%" warning and its suggested adjustment. Click through all 6 steps via both the step pills and Back/Continue, confirm the active step highlights correctly and Role Intelligence only shows on Requirements/Salary & Location. Click "Save changes" on the final step and confirm it toasts and returns to the Roles list. Then click "Create role" from the Roles list and confirm it opens on step 1 (Basics) with no Role Intelligence panel (no `roleIntelligence` data for a brand-new role) and empty fields.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: add employer Role builder wizard with Role Intelligence panel"
```

---

### Task 6: Delete legacy employer portal code

**Files:**
- Modify: `app.js` — remove `renderEmployerPortal()`, `candidateCard()`, `safeCandidateName()`, and the `renderEmployerPortal();` call in `init()`.

**Interfaces:**
- Consumes: nothing new.
- Produces: nothing new — this task only removes dead code now that Tasks 2-5 fully replace its behavior.

- [ ] **Step 1: Confirm nothing else calls the functions being removed**

Run: `grep -n "renderEmployerPortal\|candidateCard(\|safeCandidateName(" app.js`
Expected: only the definitions themselves and the one `init()` call site — if `candidateCard`/`safeCandidateName` are referenced anywhere outside the old `renderEmployerPortal()` body, keep them and only remove `renderEmployerPortal()` plus its `init()` call.

- [ ] **Step 2: Delete `renderEmployerPortal()`**

Remove the entire function (previously at `app.js:6017-6099`, i.e. from `function renderEmployerPortal() {` through its closing `}`), and, if Step 1 showed they're unused elsewhere, remove `safeCandidateName()` and `candidateCard()` too (previously at `app.js:6101-6126`).

- [ ] **Step 3: Remove the stale call in `init()`**

Find:

```js
  renderEmployerPortal();
  initEmployerRouter();
```

Replace with:

```js
  initEmployerRouter();
```

- [ ] **Step 4: Verify no syntax errors**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 5: Manual verification — full acceptance pass**

With the dev server running:
1. Open `employer-app.html` as a logged-in employer. Confirm no flash/reload loop (open DevTools Network tab — there must be exactly one `employer-app.html` request, not repeating).
2. Rapidly click Dashboard → Roles → Candidate Search → Talent Pool → Hiring → Analytics → back to Dashboard several times. Confirm no other view is ever briefly visible mid-click, and `document.querySelectorAll('#employer-view > *').length` style inspection (or just visual check) shows only the current view's markup — never two views' worth of content at once.
3. Confirm the sidebar's active item always matches the visible view.
4. Confirm collapsing the sidebar and reloading the page keeps it collapsed (persisted via `localStorage`).
5. Confirm `grep -n "renderEmployerPortal" app.js` now returns nothing.

- [ ] **Step 6: Commit**

```bash
git add app.js
git commit -m "refactor: remove legacy employer portal render function"
```

---

### Task 7: CSS for the employer app shell, Dashboard, Roles list, and Role builder

**Files:**
- Modify: `styles.css` (append new `.emp-app-*` scoped block, following the same append-at-end + scoped-prefix pattern already used for the `.employer-*` marketing page block)

**Interfaces:**
- Consumes: existing design tokens (`--text`, `--muted`, `--soft`, `--line`, `--blue`, `--cyan`, existing `.card`, `.pill`, `.btn-*`, `.field`, `.table-wrap` rules — reused, not redefined).
- Produces: visual styling for every class referenced in Tasks 2-5's markup (`.emp-app-shell`, `.emp-app-header*`, `.emp-app-body`, `.emp-app-sidebar*`, `.emp-nav-group*`, `.emp-nav-item`, `.emp-app-main`, `.emp-view-header`, `.emp-priority-card` and children, `.emp-kpi-row`/`.emp-kpi-tile`, `.emp-priorities-card`/`.emp-priority-list`, `.emp-roles-card`/`.emp-card-head`, `.emp-table*`, `.emp-pipeline-snapshot`/`.emp-stage-row`/`.emp-stage-tile`/`.emp-pipeline-note`, `.emp-empty-state`, `.emp-wizard-steps`/`.emp-wizard-step*`, `.emp-wizard-body`/`.emp-wizard-form`/`.emp-wizard-actions`, `.emp-role-intelligence` and its `.emp-callout*`/`.emp-stat-row`/`.emp-tags*`/`.emp-vera-principle` children, `.emp-sidebar-open`/`.emp-sidebar-collapsed` body-state classes).

- [ ] **Step 1: Append the CSS block**

Append to the end of `styles.css`:

```css
/* ============================================================
   Employer workspace app shell (employer-app.html)
   Scoped under .emp-app-* / .emp-* to avoid the candidate OS
   (.os-*) and the public marketing page (.employer-page /
   .employer-*) selectors.
   ============================================================ */

.emp-app-shell { display: flex; flex-direction: column; min-height: 100vh; }

.emp-app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 68px;
  padding: 0 20px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.9);
  flex: 0 0 auto;
}

.emp-app-header-left { display: flex; align-items: center; gap: 10px; flex: 0 0 auto; }
.emp-app-menu-btn { display: none; border: 0; background: none; padding: 6px; color: var(--text); }
.emp-app-brand { display: flex; align-items: center; gap: 8px; font-weight: 800; color: var(--text); }
.emp-app-brand small { display: block; font-size: 11px; font-weight: 700; color: var(--soft); }

.emp-app-header-search {
  flex: 1 1 auto;
  max-width: 420px;
  margin: 0 auto;
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--bg-2);
}
.emp-app-header-search input { flex: 1; border: 0; background: none; outline: 0; font-size: 14px; }

.emp-app-header-right { display: flex; align-items: center; gap: 12px; flex: 0 0 auto; }
.emp-app-icon-btn { border: 0; background: none; padding: 6px; color: var(--muted); }
.emp-app-workspace { font-size: 13px; font-weight: 700; color: var(--muted); }
.emp-app-avatar {
  display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #0ea5e9); color: #fff; font-size: 13px; font-weight: 800;
}

.emp-app-body { display: flex; flex: 1 1 auto; min-height: 0; }

.emp-app-sidebar {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 232px;
  flex: 0 0 auto;
  padding: 16px 12px;
  border-right: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.7);
  overflow-y: auto;
}

.emp-nav-group { display: flex; flex-direction: column; gap: 2px; margin-bottom: 12px; }
.emp-nav-group-label {
  padding: 6px 10px 4px;
  font-size: 10px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--soft);
}

.emp-nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px; border: 0; background: none;
  color: var(--muted); font-size: 14px; font-weight: 700; text-align: left; cursor: pointer;
}
.emp-nav-item:hover { background: rgba(37, 99, 235, 0.06); color: var(--text); }
.emp-nav-item.active { background: rgba(37, 99, 235, 0.1); color: var(--blue); }
.emp-nav-item i, .emp-nav-item svg { width: 16px; height: 16px; flex: 0 0 auto; }
.emp-app-collapse-btn { margin-top: auto; }

.emp-app-sidebar-overlay { display: none; }

.emp-app-main { flex: 1 1 auto; min-width: 0; padding: 28px 32px; overflow-y: auto; }

.emp-view-header {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  margin-bottom: 24px;
}
.emp-view-header h1 { margin: 0; font-size: 28px; letter-spacing: -0.02em; }
.emp-view-header p { margin: 4px 0 0; color: var(--muted); font-size: 14px; }

.emp-priority-card { padding: 20px 22px; margin-bottom: 20px; }
.emp-priority-label {
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
  font-size: 12px; font-weight: 900; letter-spacing: 0.05em; text-transform: uppercase; color: var(--blue);
}
.emp-priority-body { margin: 0; font-size: 15px; line-height: 1.5; }
.emp-priority-impact { margin-top: 10px; font-size: 13px; font-weight: 800; color: #059669; }
.emp-priority-actions { display: flex; gap: 10px; margin-top: 16px; }

.emp-kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 20px; }
.emp-kpi-tile { padding: 14px; border: 1px solid var(--line); border-radius: 14px; background: #fff; }
.emp-kpi-tile strong { display: block; font-size: 24px; }
.emp-kpi-tile span { display: block; margin-top: 4px; font-size: 12px; color: var(--soft); }

.emp-priorities-card, .emp-roles-card, .emp-pipeline-snapshot { padding: 20px 22px; margin-bottom: 20px; }
.emp-priorities-card h2, .emp-roles-card h2, .emp-pipeline-snapshot h2 { margin: 0 0 14px; font-size: 20px; }

.emp-priority-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.emp-priority-list li {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 10px 0; border-bottom: 1px solid var(--line); font-size: 14px;
}
.emp-priority-list li:last-child { border-bottom: 0; }

.emp-card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.emp-card-head h2 { margin: 0; font-size: 20px; }

.emp-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.emp-table th, .emp-table td { padding: 10px 12px; text-align: left; border-bottom: 1px solid var(--line); }
.emp-table th { font-size: 11px; color: var(--soft); text-transform: uppercase; letter-spacing: 0.04em; }
.emp-table-row:hover { background: rgba(37, 99, 235, 0.04); cursor: pointer; }
.emp-table-actions { white-space: nowrap; }

.emp-stage-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
.emp-stage-tile { padding: 12px; border: 1px solid var(--line); border-radius: 12px; text-align: center; }
.emp-stage-tile strong { display: block; font-size: 20px; }
.emp-stage-tile span { display: block; margin-top: 4px; font-size: 11px; color: var(--soft); }
.emp-pipeline-note { margin: 14px 0 0; font-size: 13px; color: var(--muted); }

.emp-empty-state { display: grid; justify-items: center; gap: 10px; padding: 48px 24px; text-align: center; }
.emp-empty-state h2 { margin: 0; font-size: 18px; }
.emp-empty-state p { margin: 0; max-width: 420px; color: var(--muted); font-size: 14px; }

.emp-wizard-steps { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.emp-wizard-step {
  display: flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px;
  border: 1px solid var(--line); background: #fff; color: var(--muted); font-size: 13px; font-weight: 700; cursor: pointer;
}
.emp-wizard-step-index {
  display: grid; place-items: center; width: 18px; height: 18px; border-radius: 50%;
  background: var(--bg-2); font-size: 11px;
}
.emp-wizard-step.active { border-color: rgba(37, 99, 235, 0.4); color: var(--blue); background: rgba(37, 99, 235, 0.06); }
.emp-wizard-step.done .emp-wizard-step-index { background: #059669; color: #fff; }

.emp-wizard-body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 20px; align-items: start; }
.emp-wizard-form { padding: 22px; display: grid; gap: 16px; }
.emp-wizard-form label { display: grid; gap: 6px; font-size: 13px; font-weight: 700; color: var(--muted); }
.emp-wizard-form input, .emp-wizard-form textarea, .emp-wizard-form select {
  padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px; font-size: 14px; font-family: inherit; color: var(--text);
}
.emp-wizard-actions { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; }
.emp-preview-note { margin: 0; font-size: 14px; color: var(--muted); line-height: 1.5; }

.emp-role-intelligence { padding: 20px 22px; }
.emp-callout-label {
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
  font-size: 12px; font-weight: 900; letter-spacing: 0.05em; text-transform: uppercase; color: var(--soft);
}
.emp-callout-label.warn { color: #b45309; }
.emp-callout { padding: 12px 0; border-top: 1px solid var(--line); margin-top: 12px; }
.emp-callout p { margin: 0; font-size: 13px; line-height: 1.5; }
.emp-stat-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; border-bottom: 1px solid var(--line); }
.emp-stat-row span { color: var(--muted); }
.emp-tags { margin-top: 10px; }
.emp-tags-label { display: block; margin-bottom: 6px; font-size: 11px; color: var(--soft); text-transform: uppercase; }
.emp-vera-principle { display: flex; gap: 6px; margin: 14px 0 0; padding-top: 12px; border-top: 1px solid var(--line); font-size: 11px; font-style: italic; color: var(--soft); }

@media (max-width: 900px) {
  .emp-app-menu-btn { display: inline-flex; }
  .emp-app-header-search { display: none; }
  .emp-app-sidebar {
    position: fixed; top: 68px; bottom: 0; left: 0; z-index: 60;
    transform: translateX(-100%); transition: transform 200ms ease; box-shadow: 0 20px 50px rgba(0,0,0,0.12);
  }
  body.emp-sidebar-open .emp-app-sidebar { transform: translateX(0); }
  body.emp-sidebar-open .emp-app-sidebar-overlay {
    display: block; position: fixed; inset: 68px 0 0 0; z-index: 55; background: rgba(15, 23, 42, 0.32);
  }
  .emp-app-main { padding: 20px; }
  .emp-kpi-row, .emp-stage-row { grid-template-columns: repeat(2, 1fr); }
  .emp-wizard-body { grid-template-columns: 1fr; }
  .emp-table { min-width: 640px; }
}

body.emp-sidebar-collapsed .emp-app-sidebar { width: 68px; }
body.emp-sidebar-collapsed .emp-nav-item span,
body.emp-sidebar-collapsed .emp-nav-group-label { display: none; }
```

- [ ] **Step 2: Manual verification**

Reload `employer-app.html#dashboard` and `#roles` and step through the Role builder. Confirm: no horizontal page overflow at 1440px, 900px, and 390px widths; sidebar collapses to icon-only and expands back; mobile drawer opens/closes via the header menu button and the overlay; KPI/stage tiles wrap to 2 columns under 900px; the wizard's two-column layout (form + Role Intelligence) stacks to one column under 900px.

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: add employer workspace shell/dashboard/roles CSS"
```

---

## Self-Review Notes

- **Spec coverage:** Router architecture (single listener, no anchor scroll, first-paint-correct, no stacked views) — Task 2. Shell (header/sidebar/collapse/drawer) — Tasks 2 & 7. Dashboard (greeting, priority card, KPI row, priorities, active roles table, pipeline snapshot, no Posts/candidate content) — Task 3. Roles (list + wizard + Role Intelligence, advisory framing) — Tasks 4-5. Legacy code removal — Task 6. Visual tokens/spacing — Task 7. Deferred sidebar destinations get a real (non-broken) placeholder — Task 2 Step 4. All Phase 1 acceptance criteria from the spec map to a task above.
- **Placeholder scan:** no "TBD"/"fill in later" left in any step; the one deliberately deferred area (Candidate Search etc.) is explicitly a placeholder view, not an implementation gap.
- **Type consistency:** `employerNavigateTo(view, params, options)` signature and `DATA.employerRoles[i]` shape are identical across Tasks 2-5.
- **Scope:** this plan covers Phase 1 only, as agreed; Phases 2-5 from the design doc are out of scope here and will get their own spec/plan when started.
