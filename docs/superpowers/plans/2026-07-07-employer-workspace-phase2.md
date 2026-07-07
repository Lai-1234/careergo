# Employer Workspace Phase 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the employer workspace's navigation/IA to the final grouping, replace manual sidebar-collapse with hover-based expand/collapse, consolidate the header identity, add working global search, apply a typography/spacing token system, and replace every remaining placeholder view with minimum-viable real content for Talent, Hiring, Intelligence, Community, and Company (Vera and Settings stay placeholders — out of scope, per the spec).

**Architecture:** Reuses Phase 1's router unchanged (`employerNavigateTo`/`parseEmployerHash`/`initEmployerRouter`, single hash listener, single `#employer-view`). `EMPLOYER_NAV_GROUPS` gets restructured (new keys, new labels); each merged destination (`talent`, `hiring`, `intelligence`, `company`) is one view function that renders its own internal sub-tab row using the same self-contained click-wiring pattern the Role builder wizard already established for its step pills — no new routing concepts.

**Tech Stack:** Vanilla JS (`app.js`), plain CSS (`styles.css`), static HTML (`employer-app.html` — unchanged in this phase), Lucide icons via `icon()`/`createIcons()`, `localStorage` via `readState()`/`writeState()`. No build step, no test framework — verification is manual, in a browser.

## Global Constraints

- No build step; must work opened via `file://` or plain static hosting.
- Hash-based routing only, unchanged from Phase 1 — do not introduce sub-routes in the URL for sub-tabs (sub-tab state is in-memory only, reset to each view's default tab whenever that view is (re-)navigated to).
- Sidebar: collapsed by default, 68px; hover/focus expands to 240px as an **overlay** (`position: fixed`, never resizes `#employer-view`); `mouseleave`/`focusout` waits ~200ms (debounced) before collapsing; transition 180ms on `width`/`opacity` only; touch devices tap-to-toggle. No manual collapse button, no persisted collapse state.
- Typography: page titles `clamp(28px, 3vw, 34px)`, section titles 22px/650-700 weight, card titles 17px/600-700 weight, body 14px/400-500 weight, secondary text 13px, labels 11px uppercase (0.07em tracking), main KPI 26px, small metric 20px. No weight above 700 anywhere in `.emp-app-shell`. No paragraph wider than 72ch.
- Spacing scale: 4/8/12/16/20/24/32/40px only — no other values introduced in new CSS.
- Every visible button must perform a real (even if small) state change — never decorative.
- No page in the nav may show a bare "coming in a later phase" message after this phase, except `vera` and `settings` (explicitly out of scope).
- New CSS stays scoped under `.emp-app-*`/`.emp-*` — never touch `.os-*` (candidate OS) or `.employer-*`/`.employer-page` (public marketing page) selectors.

---

## File Structure

- **Modify: `app.js`**
  - `DATA.candidates` (currently ~line 787-791, 3 entries): expand to 7.
  - `DATA.communityPosts` (currently ~line 777-781, 3 entries): add `authorType`/`verified` fields, add 1 new employer-authored entry.
  - `readState()`'s fallback object (~line 952-977): add `employerTalentPools`, `employerInvitations`.
  - `EMPLOYER_NAV_GROUPS` (~line 6069-6084): restructure.
  - `renderEmployerShell` (~line 6091-6147): sidebar hover behavior, header identity consolidation, remove collapse button/localStorage collapse logic.
  - `renderEmployerDashboard` (~line 6183+): fix greeting to use `getFirstName`.
  - Add: `initEmployerGlobalSearch()`, `filterEmployerSearch(query)`, `renderEmployerTalent(root)`, `renderEmployerHiring(root)`, `renderEmployerIntelligence(root)`, `renderEmployerCommunity(root)`, `renderEmployerCompany(root)`.
  - `renderEmployerView`'s switch (~line 6174-6181): add the 5 new cases.
  - `init()`: add `initEmployerGlobalSearch();` call after `initEmployerRouter();`.
- **Modify: `styles.css`** — retrofit existing `.emp-*` rules to typography/spacing tokens; add sidebar-hover, header-identity, search-dropdown, and per-view CSS for Talent/Hiring/Intelligence/Community/Company.
- **No test files** — no test framework in this repo; verification is manual/browser-based.

## Interfaces (shared contract across tasks)

```js
// DATA.candidates[i] shape (Task 1 produces; Tasks 4-6 consume) — same
// shape as the existing 3 entries, just 4 more with these fields:
{ id, name, privacy, role, stage /* one of: New|Review|Screen|Interview|Final|Offer|Hired */,
  fit, location, availability, salary, education, experience, careerStage,
  portfolio, skills: [], reason }

// DATA.communityPosts[i] shape (Task 1 produces; Task 7 consumes)
{ id, author, authorType /* "candidate" | "employer" | "vera" */, verified /* bool */,
  title, body, reactions }

// readState() fallback additions (Task 1 produces; Tasks 4, 7 consume)
employerTalentPools: [{ id, name, candidateIds: [] }]  // seeded with one "Backend Prospects" pool
employerInvitations: {}  // candidateId -> "invited"

// Nav config (Task 2 produces; all later tasks' EMPLOYER_VIEW_KEYS-derived
// routing depends on this)
EMPLOYER_NAV_GROUPS  // new groups/keys: dashboard, roles, talent, hiring,
                     // intelligence, community, company, vera, settings
                     // (+ non-nav "role-builder" key, unchanged from Phase 1)

// View functions (Tasks 4-8 produce; renderEmployerView's switch consumes)
function renderEmployerTalent(root, params = {})  // params.id optionally focuses a candidate (from global search)
function renderEmployerHiring(root)
function renderEmployerIntelligence(root)
function renderEmployerCommunity(root)
function renderEmployerCompany(root)
```

---

### Task 1: Data additions

**Files:**
- Modify: `app.js:777-781` (`DATA.communityPosts`)
- Modify: `app.js:787-791` (`DATA.candidates`)
- Modify: `app.js:952-977` (`readState()` fallback)

**Interfaces:**
- Produces: the `DATA.candidates`/`DATA.communityPosts`/`employerTalentPools`/`employerInvitations` shapes shown above, consumed by Tasks 4-7.

- [ ] **Step 1: Expand `DATA.candidates`**

Find:

```js
  candidates: [
    { id: "c1", name: "Siti Nur", privacy: "Public profile", role: "Product Designer", stage: "Screen", fit: 92, location: "Kuala Lumpur", availability: "2 weeks", salary: "RM 5k - 7k", education: "BA Design, Taylor's", experience: "1 year internship", careerStage: "Fresh Graduate", portfolio: "Strong", skills: ["Figma", "Research", "Design Systems"], reason: "Portfolio shows banking onboarding work and strong research evidence." },
    { id: "c2", name: "Daniel Lim", privacy: "Anonymized", role: "Data Analyst", stage: "Interview", fit: 88, location: "Petaling Jaya", availability: "Immediate", salary: "RM 4.8k - 6.5k", education: "BSc Statistics, UM", experience: "Graduate projects", careerStage: "Looking for first full-time job", portfolio: "Moderate", skills: ["SQL", "Python", "Dashboards"], reason: "Strong SQL dashboard proof and clear interest in marketplace analytics." },
    { id: "c3", name: "Priya Nair", privacy: "Public profile", role: "Frontend Developer", stage: "Saved", fit: 84, location: "Remote / Selangor", availability: "1 month", salary: "RM 6k - 8k", education: "Diploma Software Engineering", experience: "2 years freelance", careerStage: "Career Switcher", portfolio: "Strong", skills: ["React", "TypeScript", "Testing"], reason: "Transferable freelance delivery evidence with strong component testing habits." }
  ],
```

Replace with (Priya Nair's stage moves from the non-pipeline `"Saved"` to `"Review"`; 4 new entries cover the remaining stages, so all 7 Pipeline stages — New, Review, Screen, Interview, Final, Offer, Hired — have exactly one candidate each across `c1`-`c7`):

```js
  candidates: [
    { id: "c1", name: "Siti Nur", privacy: "Public profile", role: "Product Designer", stage: "Screen", fit: 92, location: "Kuala Lumpur", availability: "2 weeks", salary: "RM 5k - 7k", education: "BA Design, Taylor's", experience: "1 year internship", careerStage: "Fresh Graduate", portfolio: "Strong", skills: ["Figma", "Research", "Design Systems"], reason: "Portfolio shows banking onboarding work and strong research evidence." },
    { id: "c2", name: "Daniel Lim", privacy: "Anonymized", role: "Data Analyst", stage: "Interview", fit: 88, location: "Petaling Jaya", availability: "Immediate", salary: "RM 4.8k - 6.5k", education: "BSc Statistics, UM", experience: "Graduate projects", careerStage: "Looking for first full-time job", portfolio: "Moderate", skills: ["SQL", "Python", "Dashboards"], reason: "Strong SQL dashboard proof and clear interest in marketplace analytics." },
    { id: "c3", name: "Priya Nair", privacy: "Public profile", role: "Frontend Developer", stage: "Review", fit: 84, location: "Remote / Selangor", availability: "1 month", salary: "RM 6k - 8k", education: "Diploma Software Engineering", experience: "2 years freelance", careerStage: "Career Switcher", portfolio: "Strong", skills: ["React", "TypeScript", "Testing"], reason: "Transferable freelance delivery evidence with strong component testing habits." },
    { id: "c4", name: "Ahmad Zulkifli", privacy: "Public profile", role: "Backend Engineer", stage: "New", fit: 79, location: "Kuala Lumpur", availability: "3 weeks", salary: "RM 6k - 8k", education: "BSc Computer Science, UPM", experience: "1.5 years", careerStage: "Early career", portfolio: "Moderate", skills: ["Java", "SQL", "Microservices"], reason: "Recently applied with a relevant microservices side project." },
    { id: "c5", name: "Wei Jun Tan", privacy: "Public profile", role: "Junior Data Analyst", stage: "Offer", fit: 81, location: "Petaling Jaya", availability: "Immediate", salary: "RM 4k - 5.5k", education: "BSc Statistics, UM", experience: "Graduate projects", careerStage: "Fresh Graduate", portfolio: "Moderate", skills: ["SQL", "Power BI", "Excel"], reason: "Strong coursework portfolio, immediately available." },
    { id: "c6", name: "Farah Alia", privacy: "Public profile", role: "Software Engineer", stage: "Final", fit: 90, location: "Kuala Lumpur", availability: "2 weeks", salary: "RM 6.5k - 8.5k", education: "BSc Computer Science, MMU", experience: "2 years", careerStage: "Early career", portfolio: "Strong", skills: ["React", "Node.js", "AWS"], reason: "Cleared technical rounds with strong system design answers." },
    { id: "c7", name: "Kevin Ong", privacy: "Public profile", role: "Product Design Intern", stage: "Hired", fit: 95, location: "Kuala Lumpur", availability: "Accepted", salary: "RM 2k - 2.5k", education: "BA Design, Taylor's", experience: "Internship-level", careerStage: "Fresh Graduate", portfolio: "Strong", skills: ["Figma", "Prototyping"], reason: "Accepted offer after a strong final-round portfolio review." }
  ],
```

`DATA.candidates` ends with **7** entries (`c1`-`c7`), one per Pipeline stage: `c1`=Screen, `c2`=Interview, `c3`=Review, `c4`=New, `c5`=Offer, `c6`=Final, `c7`=Hired.

- [ ] **Step 2: Add `authorType`/`verified` to `DATA.communityPosts`, and one new employer post**

Find:

```js
  communityPosts: [
    { id: "p1", author: "Nadia, UX Intern", title: "How I explained a messy university project in interviews", body: "I reframed it around constraints, decisions, and what changed after testing.", reactions: 42 },
    { id: "p2", author: "Jason, Data Analyst", title: "SQL portfolio tip", body: "One clear dashboard with a business question is stronger than five disconnected notebooks.", reactions: 36 },
    { id: "p3", author: "Vera", title: "Weekly career prompt", body: "Before applying, write the one sentence evidence you would use to prove fit for the role.", reactions: 88 }
  ],
```

Replace with:

```js
  communityPosts: [
    { id: "p1", author: "Nadia, UX Intern", authorType: "candidate", verified: false, title: "How I explained a messy university project in interviews", body: "I reframed it around constraints, decisions, and what changed after testing.", reactions: 42 },
    { id: "p2", author: "Jason, Data Analyst", authorType: "candidate", verified: false, title: "SQL portfolio tip", body: "One clear dashboard with a business question is stronger than five disconnected notebooks.", reactions: 36 },
    { id: "p3", author: "Vera", authorType: "vera", verified: false, title: "Weekly career prompt", body: "Before applying, write the one sentence evidence you would use to prove fit for the role.", reactions: 88 },
    { id: "p4", author: "Maybank", authorType: "employer", verified: true, title: "What do early-career software engineers value most when choosing their first employer?", body: "We are reviewing how we communicate graduate development opportunities and would like to hear from students and recent graduates.", reactions: 14 }
  ],
```

- [ ] **Step 3: Add new state slices to `readState()`'s fallback**

Find (inside the `fallback` object in `readState()`):

```js
    autopilotRules: { salary: "", location: "", threshold: 75, scanOnly: true, exclude: "" },
    posts: DATA.communityPosts
  };
```

Replace with:

```js
    autopilotRules: { salary: "", location: "", threshold: 75, scanOnly: true, exclude: "" },
    posts: DATA.communityPosts,
    employerTalentPools: [{ id: "pool-1", name: "Backend Prospects", candidateIds: [] }],
    employerInvitations: {}
  };
```

- [ ] **Step 4: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: expand candidate/community mock data and add talent pool state"
```

---

### Task 2: Nav restructure + sidebar hover behavior + header identity + greeting fix

**Files:**
- Modify: `app.js:6069-6147` (`EMPLOYER_NAV_GROUPS` through the end of `renderEmployerShell`)
- Modify: `app.js` (`renderEmployerDashboard`'s greeting line)

**Interfaces:**
- Consumes: `qs`/`qsa`, `icon`, `createIcons`, `readState`, `getFirstName` (existing helper, `app.js:1423-1425`, reads `getUserName(state).split(" ")[0] || "there"`).
- Produces: restructured `EMPLOYER_NAV_GROUPS`/`EMPLOYER_VIEW_KEYS`/`EMPLOYER_VIEW_TITLES`, a `renderEmployerShell` with hover-based sidebar and consolidated identity, consumed by every later task's navigation.

- [ ] **Step 1: Restructure `EMPLOYER_NAV_GROUPS`**

Find:

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
```

Replace with:

```js
const EMPLOYER_NAV_GROUPS = [
  { label: "Overview", items: [["dashboard", "Dashboard", "layout-dashboard"]] },
  { label: "Hire", items: [
    ["roles", "Roles", "briefcase"],
    ["talent", "Talent", "users"],
    ["hiring", "Hiring", "kanban"]
  ] },
  { label: "Intelligence", items: [["intelligence", "Intelligence", "bar-chart-2"]] },
  { label: "Connect", items: [
    ["community", "Community", "messages-square"],
    ["company", "Company", "building-2"]
  ] },
  { label: "AI", items: [["vera", "Vera", "sparkles"]] },
  { label: "Account", items: [["settings", "Settings", "settings"]] }
];
```

(`EMPLOYER_VIEW_KEYS`/`EMPLOYER_VIEW_TITLES` immediately below are derived from this array and need no direct edits — they'll pick up the new keys automatically.)

- [ ] **Step 2: Replace the header's right-hand identity block and remove the collapse button**

Find:

```js
      <div class="emp-app-header-right">
        <button type="button" class="emp-app-icon-btn" aria-label="Notifications">${icon("bell")}</button>
        <span class="emp-app-workspace">${employer.company || "Your Workspace"}</span>
        <span class="emp-app-avatar">${(employer.contactName || employer.company || "E").charAt(0).toUpperCase()}</span>
      </div>
```

Replace with:

```js
      <div class="emp-app-header-right">
        <button type="button" class="emp-app-icon-btn" aria-label="Notifications">${icon("bell")}</button>
        <button type="button" class="emp-app-identity">
          <span class="emp-app-avatar">${getFirstName(state).charAt(0).toUpperCase()}</span>
          <span class="emp-app-identity-text">${getFirstName(state)} <small>${employer.company || "Your Workspace"}</small></span>
        </button>
      </div>
```

Find:

```js
        <button type="button" class="emp-nav-item emp-app-collapse-btn" data-emp-collapse aria-label="Collapse sidebar">${icon("chevron-left")}<span>Collapse</span></button>
        <button type="button" class="emp-nav-item" data-logout>${icon("log-out")}<span>Logout</span></button>
```

Replace with:

```js
        <button type="button" class="emp-nav-item" data-logout>${icon("log-out")}<span>Logout</span></button>
```

- [ ] **Step 3: Replace the collapse-button/localStorage wiring with hover-based expand/collapse**

Find:

```js
  qs("[data-emp-collapse]", root)?.addEventListener("click", () => {
    const collapsed = document.body.classList.toggle("emp-sidebar-collapsed");
    localStorage.setItem("careergo-employer-sidebar-collapsed", collapsed ? "1" : "0");
  });
  if (localStorage.getItem("careergo-employer-sidebar-collapsed") === "1") {
    document.body.classList.add("emp-sidebar-collapsed");
  }
}
```

Replace with:

```js
  const sidebar = qs("[data-emp-sidebar]", root);
  if (sidebar) {
    let collapseTimer = null;
    const expand = () => {
      window.clearTimeout(collapseTimer);
      sidebar.classList.add("emp-sidebar-hover");
    };
    const scheduleCollapse = () => {
      window.clearTimeout(collapseTimer);
      collapseTimer = window.setTimeout(() => sidebar.classList.remove("emp-sidebar-hover"), 200);
    };
    sidebar.addEventListener("mouseenter", expand);
    sidebar.addEventListener("focusin", expand);
    sidebar.addEventListener("mouseleave", scheduleCollapse);
    sidebar.addEventListener("focusout", scheduleCollapse);

    if (window.matchMedia("(hover: none)").matches) {
      sidebar.addEventListener("click", event => {
        if (event.target.closest("[data-emp-nav], [data-logout]")) return;
        sidebar.classList.toggle("emp-sidebar-hover");
      });
      document.addEventListener("click", event => {
        if (!sidebar.contains(event.target)) sidebar.classList.remove("emp-sidebar-hover");
      });
    }
  }
}
```

- [ ] **Step 4: Fix the Dashboard greeting to use `getFirstName`**

Find:

```js
      <h1>Good morning, ${(readState().employerProfile?.contactName) || "there"}.</h1>
```

Replace with:

```js
      <h1>Good morning, ${getFirstName(readState())}.</h1>
```

- [ ] **Step 5: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 6: Manual verification**

Serve the repo (e.g. `python -m http.server 8934`), seed a logged-in employer session, open `employer-app.html#dashboard` and confirm: sidebar starts collapsed (68px, icons only); hovering it expands to ~240px, overlaying content (main view does not shift); moving the mouse away collapses it again after roughly 200ms without flicker when moving between nav items; no "Collapse" nav item exists anywhere; the header shows one avatar + one name/company text grouped together, no separate "Your Workspace"/initial pair; the Dashboard greets with a real first name (not "there") if a display name exists in the session, and "there" only if none does; sidebar items are `dashboard`, `roles`, `talent`, `hiring` under Hire, `intelligence` under Intelligence, `community`/`company` under Connect, `vera` under AI, `settings`/Logout under Account.

- [ ] **Step 7: Commit**

```bash
git add app.js
git commit -m "feat: restructure employer nav, add sidebar hover behavior, consolidate header identity"
```

---

### Task 3: Global search

**Files:**
- Modify: `app.js` (header search input + new `initEmployerGlobalSearch`/`filterEmployerSearch`)

**Interfaces:**
- Consumes: `qs`/`qsa`, `icon`, `createIcons`, `DATA.employerRoles`, `DATA.candidates`, `employerNavigateTo`.
- Produces: `filterEmployerSearch(query)`, `initEmployerGlobalSearch()` — the latter called once from `init()`.

- [ ] **Step 1: Make the header search input functional**

Find:

```js
      <div class="emp-app-header-search field">
        ${icon("search")}
        <input type="text" placeholder="Search candidates, roles, applicants..." disabled>
      </div>
```

Replace with:

```js
      <div class="emp-app-header-search field">
        ${icon("search")}
        <input type="text" placeholder="Search candidates, roles, applicants..." data-emp-search-input autocomplete="off">
        <div class="emp-search-results" data-emp-search-results hidden></div>
      </div>
```

- [ ] **Step 2: Add `filterEmployerSearch` and `initEmployerGlobalSearch`**

Add near `renderEmployerPlaceholder`:

```js
function filterEmployerSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const groups = [];
  const roleMatches = DATA.employerRoles.filter(r => r.title.toLowerCase().includes(q));
  if (roleMatches.length) groups.push({ label: "Roles", items: roleMatches.map(r => ({ id: r.id, primary: r.title, secondary: r.status, view: "role-builder" })) });
  const candidateMatches = DATA.candidates.filter(c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q));
  if (candidateMatches.length) groups.push({ label: "Candidates", items: candidateMatches.map(c => ({ id: c.id, primary: c.name, secondary: c.role, view: "talent" })) });
  return groups;
}

function initEmployerGlobalSearch() {
  const input = qs("[data-emp-search-input]");
  const results = qs("[data-emp-search-results]");
  if (!input || !results) return;

  function close() {
    results.hidden = true;
    results.innerHTML = "";
  }

  input.addEventListener("input", () => {
    const groups = filterEmployerSearch(input.value);
    if (!groups.length) { close(); return; }
    results.innerHTML = groups.map(group => `
      <div class="emp-search-group">
        <span class="emp-search-group-label">${group.label}</span>
        ${group.items.map(item => `<button type="button" class="emp-search-result" data-emp-search-result data-view="${item.view}" data-id="${item.id}"><strong>${item.primary}</strong><span>${item.secondary}</span></button>`).join("")}
      </div>
    `).join("");
    results.hidden = false;
  });

  results.addEventListener("click", event => {
    const btn = event.target.closest("[data-emp-search-result]");
    if (!btn) return;
    employerNavigateTo(btn.dataset.view, { id: btn.dataset.id });
    input.value = "";
    close();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".emp-app-header-search")) close();
  });
}
```

- [ ] **Step 3: Wire into `init()`**

Find:

```js
  initEmployerRouter();
```

Replace with:

```js
  initEmployerRouter();
  initEmployerGlobalSearch();
```

- [ ] **Step 4: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 5: Manual verification**

Type "junior" into the header search — confirm a "Roles" group appears with "Junior Data Analyst"; clicking it navigates to that role's builder. Type "siti" — confirm a "Candidates" group appears with "Siti Nur"; clicking it navigates to `talent` with the Discover search box pre-filled with "Siti Nur" (this depends on Task 4's `renderEmployerTalent(root, params)` — if Task 4 hasn't landed yet when verifying this task in isolation, confirm at minimum that navigation to `talent` happens with no flash, and re-check the pre-fill once Task 4 is done). Type a query matching nothing — confirm the dropdown stays hidden (not an empty box). Press Escape or click elsewhere — confirm the dropdown closes without navigating.

- [ ] **Step 6: Commit**

```bash
git add app.js
git commit -m "feat: add working global search across roles and candidates"
```

---

### Task 4: Talent view (Discover + Saved Pools)

**Files:**
- Modify: `app.js` (add `renderEmployerTalent`; add `case "talent"` to `renderEmployerView`)

**Interfaces:**
- Consumes: `DATA.candidates`, `readState`/`writeState`, `showToast`, `icon`, `qs`/`qsa`, `createIcons`.
- Produces: `renderEmployerTalent(root)`.

- [ ] **Step 1: Add the case to `renderEmployerView`**

Find:

```js
    case "role-builder": return renderEmployerRoleBuilder(root, params.id || null);
    default: return renderEmployerPlaceholder(root, view);
```

Replace with:

```js
    case "role-builder": return renderEmployerRoleBuilder(root, params.id || null);
    case "talent": return renderEmployerTalent(root, params);
    default: return renderEmployerPlaceholder(root, view);
```

- [ ] **Step 2: Implement `renderEmployerTalent`**

```js
function renderEmployerTalent(root, params = {}) {
  let activeTab = "discover";
  const focusedCandidate = params.id ? DATA.candidates.find(c => c.id === params.id) : null;

  function draw() {
    const state = readState();
    const pools = state.employerTalentPools;
    const invitations = state.employerInvitations;

    root.innerHTML = `
      <div class="emp-view-header"><h1>Talent</h1></div>
      <div class="emp-subtabs">
        <button type="button" class="emp-subtab ${activeTab === "discover" ? "active" : ""}" data-talent-tab="discover">Discover</button>
        <button type="button" class="emp-subtab ${activeTab === "saved-pools" ? "active" : ""}" data-talent-tab="saved-pools">Saved Pools</button>
      </div>

      <div class="emp-subpanel ${activeTab === "discover" ? "active" : ""}" ${activeTab === "discover" ? "" : "hidden"}>
        <div class="card emp-talent-filters">
          <input type="text" data-talent-query placeholder="Search by name, role, or skill" value="${focusedCandidate ? focusedCandidate.name : ""}">
          <select disabled><option>Any experience</option></select>
          <select disabled><option>Any location</option></select>
          <select disabled><option>Any work mode</option></select>
        </div>
        <div class="emp-talent-grid" data-talent-results></div>
      </div>

      <div class="emp-subpanel ${activeTab === "saved-pools" ? "active" : ""}" ${activeTab === "saved-pools" ? "" : "hidden"}>
        <div class="emp-view-header"><h2>Saved Pools</h2><button type="button" class="btn btn-ghost" data-talent-create-pool">${icon("plus")} Create Pool</button></div>
        ${pools.map(pool => `
          <div class="card emp-pool-card">
            <div class="emp-card-head"><h3>${pool.name}</h3><span class="pill">${pool.candidateIds.length} candidates</span></div>
            ${pool.candidateIds.length
              ? `<ul class="emp-pool-list">${pool.candidateIds.map(id => {
                  const c = DATA.candidates.find(cand => cand.id === id);
                  return c ? `<li>${c.name} — ${c.role}</li>` : "";
                }).join("")}</ul>`
              : `<p class="emp-empty-hint">No candidates saved to this pool yet.</p>`}
          </div>
        `).join("")}
      </div>
    `;
    createIcons();

    qsa("[data-talent-tab]", root).forEach(btn => btn.addEventListener("click", () => {
      activeTab = btn.dataset.talentTab;
      draw();
    }));

    function renderResults(query = "") {
      const q = query.trim().toLowerCase();
      const matches = DATA.candidates.filter(c => !q || c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.skills.some(s => s.toLowerCase().includes(q)));
      const list = qs("[data-talent-results]", root);
      list.innerHTML = matches.slice(0, 6).map(c => `
        <div class="card emp-talent-card">
          <div class="emp-card-head"><h3>${c.name}</h3><span class="pill ${c.fit >= 85 ? "green" : ""}">${c.fit}% fit</span></div>
          <p class="emp-talent-meta">${c.role} · ${c.location} · ${c.availability}</p>
          <div class="pill-row">${c.skills.map(s => `<span class="pill">${s}</span>`).join("")}</div>
          <p class="emp-talent-reason"><strong>Why this person may fit:</strong> ${c.reason}</p>
          <div class="emp-talent-actions">
            <button type="button" class="btn btn-ghost" data-talent-save="${c.id}">Save</button>
            <button type="button" class="btn btn-ghost" data-talent-compare="${c.id}">Compare</button>
            <button type="button" class="btn btn-primary" data-talent-invite="${c.id}">Invite</button>
          </div>
        </div>
      `).join("") || `<p class="emp-empty-hint">No candidates match that search.</p>`;

      qsa("[data-talent-save]", list).forEach(btn => btn.addEventListener("click", () => {
        const next = readState();
        const pool = next.employerTalentPools[0];
        if (!pool.candidateIds.includes(btn.dataset.talentSave)) pool.candidateIds.push(btn.dataset.talentSave);
        writeState(next);
        showToast("Candidate saved to Backend Prospects.");
      }));
      qsa("[data-talent-invite]", list).forEach(btn => btn.addEventListener("click", () => {
        const next = readState();
        next.employerInvitations[btn.dataset.talentInvite] = "invited";
        writeState(next);
        showToast("Invitation sent.");
      }));
      qsa("[data-talent-compare]", list).forEach(btn => btn.addEventListener("click", () => {
        showToast("Comparison view opens in a later phase.", "info");
      }));
    }

    if (activeTab === "discover") {
      renderResults(focusedCandidate ? focusedCandidate.name : "");
      qs("[data-talent-query]", root)?.addEventListener("input", event => renderResults(event.target.value));
    }

    qs("[data-talent-create-pool]", root)?.addEventListener("click", () => {
      const name = prompt("Pool name?");
      if (!name) return;
      const next = readState();
      next.employerTalentPools.push({ id: `pool-${Date.now()}`, name, candidateIds: [] });
      writeState(next);
      draw();
    });
  }

  draw();
}
```

- [ ] **Step 3: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 4: Manual verification**

Navigate to `employer-app.html#talent`. Confirm Discover shows candidate cards with a real "Why this person may fit" line; typing in the search box filters them; clicking "Save" on a candidate toasts and, after switching to Saved Pools, that candidate now appears listed under "Backend Prospects" with an updated count; clicking "Invite" toasts; "Create Pool" prompts for a name and adds a new pool card.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add employer Talent view (Discover + Saved Pools)"
```

---

### Task 5: Hiring view (Applicants + Pipeline + Interviews)

**Files:**
- Modify: `app.js` (add `renderEmployerHiring`; add `case "hiring"` to `renderEmployerView`)

**Interfaces:**
- Consumes: `DATA.candidates`, `readState`/`writeState`, `showToast`, `icon`, `qs`/`qsa`, `createIcons`.
- Produces: `renderEmployerHiring(root)`.

- [ ] **Step 1: Add the case to `renderEmployerView`**

Find:

```js
    case "talent": return renderEmployerTalent(root);
    default: return renderEmployerPlaceholder(root, view);
```

Replace with:

```js
    case "talent": return renderEmployerTalent(root);
    case "hiring": return renderEmployerHiring(root);
    default: return renderEmployerPlaceholder(root, view);
```

- [ ] **Step 2: Implement `renderEmployerHiring`**

```js
const EMPLOYER_PIPELINE_STAGES = ["New", "Review", "Screen", "Interview", "Final", "Offer", "Hired"];

function renderEmployerHiring(root) {
  let activeTab = "applicants";
  let openCandidateId = null;

  function draw() {
    root.innerHTML = `
      <div class="emp-view-header"><h1>Hiring</h1></div>
      <div class="emp-subtabs">
        <button type="button" class="emp-subtab ${activeTab === "applicants" ? "active" : ""}" data-hiring-tab="applicants">Applicants</button>
        <button type="button" class="emp-subtab ${activeTab === "pipeline" ? "active" : ""}" data-hiring-tab="pipeline">Pipeline</button>
        <button type="button" class="emp-subtab ${activeTab === "interviews" ? "active" : ""}" data-hiring-tab="interviews">Interviews</button>
      </div>

      <div class="emp-subpanel ${activeTab === "applicants" ? "active" : ""}" ${activeTab === "applicants" ? "" : "hidden"}>
        <div class="card">
          <div class="table-wrap">
            <table class="emp-table">
              <thead><tr><th>Candidate</th><th>Role</th><th>Stage</th><th>Role fit</th><th>Availability</th></tr></thead>
              <tbody>
                ${DATA.candidates.map(c => `
                  <tr class="emp-table-row" data-hiring-open="${c.id}">
                    <td>${c.name}</td><td>${c.role}</td><td>${c.stage}</td><td>${c.fit}%</td><td>${c.availability}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
        ${openCandidateId ? renderCandidateDetail(openCandidateId) : ""}
      </div>

      <div class="emp-subpanel ${activeTab === "pipeline" ? "active" : ""}" ${activeTab === "pipeline" ? "" : "hidden"}>
        <div class="emp-kanban">
          ${EMPLOYER_PIPELINE_STAGES.map(stage => `
            <div class="emp-kanban-col">
              <h3>${stage} <span class="pill">${DATA.candidates.filter(c => c.stage === stage).length}</span></h3>
              ${DATA.candidates.filter(c => c.stage === stage).map(c => `
                <div class="card emp-kanban-card">
                  <strong>${c.name}</strong>
                  <span class="emp-talent-meta">${c.role} · ${c.fit}% fit</span>
                  <select data-hiring-stage="${c.id}">
                    ${EMPLOYER_PIPELINE_STAGES.map(s => `<option value="${s}" ${s === c.stage ? "selected" : ""}>${s}</option>`).join("")}
                  </select>
                </div>
              `).join("") || `<p class="emp-empty-hint">No candidates.</p>`}
            </div>
          `).join("")}
        </div>
      </div>

      <div class="emp-subpanel ${activeTab === "interviews" ? "active" : ""}" ${activeTab === "interviews" ? "" : "hidden"}>
        <div class="card emp-interview-card">
          <div class="emp-card-head"><h3>Sarah Lee</h3><span class="pill gold">Upcoming</span></div>
          <p class="emp-talent-meta">Junior Data Analyst · Tomorrow, 2:00 PM · Round 1</p>
          <button type="button" class="btn btn-ghost" data-hiring-kit="upcoming">Open Interview Kit</button>
        </div>
        <div class="card emp-interview-card">
          <div class="emp-card-head"><h3>Daniel Lim</h3><span class="pill green">Completed</span></div>
          <p class="emp-talent-meta">Data Analyst · Last week · Round 2</p>
          <button type="button" class="btn btn-ghost" data-hiring-kit="completed">Add Feedback</button>
        </div>
      </div>
    `;
    createIcons();

    qsa("[data-hiring-tab]", root).forEach(btn => btn.addEventListener("click", () => {
      activeTab = btn.dataset.hiringTab;
      draw();
    }));
    qsa("[data-hiring-open]", root).forEach(row => row.addEventListener("click", () => {
      openCandidateId = row.dataset.hiringOpen;
      draw();
    }));
    qsa("[data-hiring-stage]", root).forEach(select => select.addEventListener("change", () => {
      const candidate = DATA.candidates.find(c => c.id === select.dataset.hiringStage);
      if (candidate) candidate.stage = select.value;
      draw();
    }));
    qsa("[data-hiring-kit]", root).forEach(btn => btn.addEventListener("click", () => {
      showToast("Full interview kit generation opens in a later phase.", "info");
    }));
  }

  function renderCandidateDetail(id) {
    const c = DATA.candidates.find(cand => cand.id === id);
    if (!c) return "";
    return `
      <div class="card emp-candidate-detail">
        <div class="emp-card-head"><h3>${c.name}</h3><span class="pill">${c.fit}% fit</span></div>
        <p class="emp-talent-meta">${c.role} · ${c.location} · ${c.salary}</p>
        <div class="pill-row">${c.skills.map(s => `<span class="pill">${s}</span>`).join("")}</div>
        <p class="emp-talent-reason">${c.reason}</p>
      </div>
    `;
  }

  draw();
}
```

- [ ] **Step 3: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 4: Manual verification**

Navigate to `employer-app.html#hiring`. Applicants tab: confirm the table lists all 7 candidates; clicking a row opens a detail panel below the table. Pipeline tab: confirm all 7 columns render with at least one card each; changing a card's stage `<select>` actually moves that candidate to the new column on re-render. Interviews tab: confirm one upcoming and one completed example, each with a working button that toasts.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add employer Hiring view (Applicants, Pipeline, Interviews)"
```

---

### Task 6: Intelligence view (Analytics + Market + University)

**Files:**
- Modify: `app.js` (add `renderEmployerIntelligence`; add `case "intelligence"` to `renderEmployerView`)

**Interfaces:**
- Consumes: `DATA.employerRoles`, `DATA.candidates`, `icon`, `qs`/`qsa`, `createIcons`.
- Produces: `renderEmployerIntelligence(root)`.

- [ ] **Step 1: Add the case to `renderEmployerView`**

Find:

```js
    case "hiring": return renderEmployerHiring(root);
    default: return renderEmployerPlaceholder(root, view);
```

Replace with:

```js
    case "hiring": return renderEmployerHiring(root);
    case "intelligence": return renderEmployerIntelligence(root);
    default: return renderEmployerPlaceholder(root, view);
```

- [ ] **Step 2: Implement `renderEmployerIntelligence`**

```js
function renderEmployerIntelligence(root) {
  let activeTab = "analytics";
  let selectedRoleId = DATA.employerRoles[0].id;

  function draw() {
    const roles = DATA.employerRoles;
    const candidates = DATA.candidates;
    const totalApplicants = roles.reduce((sum, r) => sum + r.applicants, 0);
    const totalQualified = roles.reduce((sum, r) => sum + r.qualified, 0);
    const qualifiedRate = Math.round((totalQualified / totalApplicants) * 100);
    const interviewCount = candidates.filter(c => ["Interview", "Final", "Offer", "Hired"].includes(c.stage)).length;
    const interviewRate = Math.round((interviewCount / candidates.length) * 100);
    const hiredCount = candidates.filter(c => c.stage === "Hired").length;
    const offerCount = candidates.filter(c => ["Offer", "Hired"].includes(c.stage)).length;
    const offerAcceptance = offerCount ? Math.round((hiredCount / offerCount) * 100) : 0;

    const selectedRole = roles.find(r => r.id === selectedRoleId);

    root.innerHTML = `
      <div class="emp-view-header"><h1>Intelligence</h1></div>
      <div class="emp-subtabs">
        <button type="button" class="emp-subtab ${activeTab === "analytics" ? "active" : ""}" data-intel-tab="analytics">Hiring Analytics</button>
        <button type="button" class="emp-subtab ${activeTab === "market" ? "active" : ""}" data-intel-tab="market">Talent Market</button>
        <button type="button" class="emp-subtab ${activeTab === "university" ? "active" : ""}" data-intel-tab="university">University Pipelines</button>
      </div>

      <div class="emp-subpanel ${activeTab === "analytics" ? "active" : ""}" ${activeTab === "analytics" ? "" : "hidden"}>
        <div class="emp-kpi-row">
          <div class="emp-kpi-tile"><strong>${totalApplicants}</strong><span>Applicants</span></div>
          <div class="emp-kpi-tile"><strong>${qualifiedRate}%</strong><span>Qualified rate</span></div>
          <div class="emp-kpi-tile"><strong>${interviewRate}%</strong><span>Interview rate</span></div>
          <div class="emp-kpi-tile"><strong>${offerAcceptance}%</strong><span>Offer acceptance</span></div>
        </div>
        <div class="card emp-funnel-card">
          <h2>Funnel</h2>
          <div class="emp-funnel-row">
            ${EMPLOYER_PIPELINE_STAGES.map(stage => `<div class="emp-funnel-stage"><strong>${candidates.filter(c => c.stage === stage).length}</strong><span>${stage}</span></div>`).join("")}
          </div>
        </div>
      </div>

      <div class="emp-subpanel ${activeTab === "market" ? "active" : ""}" ${activeTab === "market" ? "" : "hidden"}>
        <div class="card">
          <label class="emp-market-select">Role
            <select data-intel-role>
              ${roles.map(r => `<option value="${r.id}" ${r.id === selectedRoleId ? "selected" : ""}>${r.title}</option>`).join("")}
            </select>
          </label>
          <div class="emp-stat-row"><span>Talent availability</span><strong>${selectedRole.roleIntelligence.talentAvailability}</strong></div>
          <div class="emp-stat-row"><span>Typical experience</span><strong>${selectedRole.roleIntelligence.typicalExperience}</strong></div>
          <div class="emp-stat-row"><span>Typical salary</span><strong>${selectedRole.roleIntelligence.commonSalary}</strong></div>
          <div class="emp-tags"><span class="emp-tags-label">Common skills</span><div class="pill-row">${selectedRole.roleIntelligence.commonSkills.map(s => `<span class="pill">${s}</span>`).join("")}</div></div>
        </div>
      </div>

      <div class="emp-subpanel ${activeTab === "university" ? "active" : ""}" ${activeTab === "university" ? "" : "hidden"}>
        <div class="emp-university-grid">
          <div class="card"><h3>University of Malaya</h3><p class="emp-talent-meta">Strong research and technical foundation</p><a class="btn btn-ghost" href="universities.html">View university</a></div>
          <div class="card"><h3>Asia Pacific University</h3><p class="emp-talent-meta">Strong computing and technology pipeline</p><a class="btn btn-ghost" href="universities.html">View university</a></div>
          <div class="card"><h3>Taylor's University</h3><p class="emp-talent-meta">Strong industry project exposure</p><a class="btn btn-ghost" href="universities.html">View university</a></div>
        </div>
      </div>
    `;
    createIcons();

    qsa("[data-intel-tab]", root).forEach(btn => btn.addEventListener("click", () => {
      activeTab = btn.dataset.intelTab;
      draw();
    }));
    qs("[data-intel-role]", root)?.addEventListener("change", event => {
      selectedRoleId = event.target.value;
      draw();
    });
  }

  draw();
}
```

- [ ] **Step 3: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 4: Manual verification**

Navigate to `employer-app.html#intelligence`. Hiring Analytics tab: confirm 4 KPIs show real computed numbers (not hardcoded) and the funnel shows a count per stage that matches Hiring's Pipeline tab counts. Talent Market tab: confirm changing the role selector updates the shown intelligence fields. University Pipelines tab: confirm 3 cards with working links to `universities.html`.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add employer Intelligence view (Analytics, Market, University)"
```

---

### Task 7: Community view

**Files:**
- Modify: `app.js` (add `renderEmployerCommunity`; add `case "community"` to `renderEmployerView`)

**Interfaces:**
- Consumes: `DATA.communityPosts`, `writeState`/`readState`, `icon`, `qs`/`qsa`, `createIcons`.
- Produces: `renderEmployerCommunity(root)`.

- [ ] **Step 1: Add the case to `renderEmployerView`**

Find:

```js
    case "intelligence": return renderEmployerIntelligence(root);
    default: return renderEmployerPlaceholder(root, view);
```

Replace with:

```js
    case "intelligence": return renderEmployerIntelligence(root);
    case "community": return renderEmployerCommunity(root);
    default: return renderEmployerPlaceholder(root, view);
```

- [ ] **Step 2: Implement `renderEmployerCommunity`**

```js
function renderEmployerCommunity(root) {
  function draw() {
    root.innerHTML = `
      <div class="emp-view-header"><h1>Community</h1><button type="button" class="btn btn-primary" data-community-compose">${icon("plus")} Create Post</button></div>
      <div class="emp-community-feed" data-community-feed></div>
      <div class="emp-compose-modal" data-community-modal hidden>
        <div class="card emp-compose-card">
          <h2>New post</h2>
          <textarea data-community-draft placeholder="Share a discussion, question, or hiring insight..." rows="4"></textarea>
          <div class="emp-compose-actions">
            <button type="button" class="btn btn-ghost" data-community-cancel>Cancel</button>
            <button type="button" class="btn btn-primary" data-community-submit>Post</button>
          </div>
        </div>
      </div>
    `;
    createIcons();
    renderFeed();

    qs("[data-community-compose]", root)?.addEventListener("click", () => {
      qs("[data-community-modal]", root).hidden = false;
    });
    qs("[data-community-cancel]", root)?.addEventListener("click", () => {
      qs("[data-community-modal]", root).hidden = true;
    });
    qs("[data-community-submit]", root)?.addEventListener("click", () => {
      const textarea = qs("[data-community-draft]", root);
      const body = textarea.value.trim();
      if (!body) return;
      DATA.communityPosts.unshift({ id: `p-${Date.now()}`, author: "Maybank", authorType: "employer", verified: true, title: "Company update", body, reactions: 0 });
      textarea.value = "";
      qs("[data-community-modal]", root).hidden = true;
      renderFeed();
      showToast("Post published.");
    });
  }

  function renderFeed() {
    const feed = qs("[data-community-feed]", root);
    feed.innerHTML = DATA.communityPosts.map(post => `
      <div class="card emp-post-card">
        <div class="emp-post-head">
          <strong>${post.author}</strong>
          ${post.verified ? `<span class="pill cyan">Verified Employer</span>` : ""}
        </div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <div class="emp-post-actions">
          <button type="button" class="btn btn-ghost btn-sm" data-community-react="${post.id}">${icon("heart")} ${post.reactions}</button>
        </div>
      </div>
    `).join("");
    qsa("[data-community-react]", feed).forEach(btn => btn.addEventListener("click", () => {
      const post = DATA.communityPosts.find(p => p.id === btn.dataset.communityReact);
      if (post) post.reactions += 1;
      renderFeed();
    }));
    createIcons();
  }

  draw();
}
```

- [ ] **Step 3: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 4: Manual verification**

Navigate to `employer-app.html#community`. Confirm the feed shows the employer post ("Maybank · Verified Employer") plus the candidate/Vera posts. Clicking the heart/react button increments the count. Clicking "Create Post", typing text, and clicking "Post" actually adds a new post to the top of the feed and closes the modal.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add employer Community view"
```

---

### Task 8: Company view (Public Profile + Reputation)

**Files:**
- Modify: `app.js` (add `renderEmployerCompany`; add `case "company"` to `renderEmployerView`)

**Interfaces:**
- Consumes: `DATA.companies` (existing site-wide data — the `"maybank"` entry), `icon`, `qs`/`qsa`, `createIcons`.
- Produces: `renderEmployerCompany(root)`.

- [ ] **Step 1: Add the case to `renderEmployerView`**

Find:

```js
    case "community": return renderEmployerCommunity(root);
    default: return renderEmployerPlaceholder(root, view);
```

Replace with:

```js
    case "community": return renderEmployerCommunity(root);
    case "company": return renderEmployerCompany(root);
    default: return renderEmployerPlaceholder(root, view);
```

- [ ] **Step 2: Implement `renderEmployerCompany`**

```js
function renderEmployerCompany(root) {
  let activeTab = "profile";
  const company = DATA.companies.find(c => c.id === "maybank");

  function draw() {
    root.innerHTML = `
      <div class="emp-view-header"><h1>Company</h1></div>
      <div class="emp-subtabs">
        <button type="button" class="emp-subtab ${activeTab === "profile" ? "active" : ""}" data-company-tab="profile">Public Profile</button>
        <button type="button" class="emp-subtab ${activeTab === "reputation" ? "active" : ""}" data-company-tab="reputation">Reputation</button>
      </div>

      <div class="emp-subpanel ${activeTab === "profile" ? "active" : ""}" ${activeTab === "profile" ? "" : "hidden"}>
        <div class="card">
          <div class="emp-card-head"><h2>${company.name}</h2><a class="btn btn-ghost" href="companies.html?org=${company.id}">Preview public page</a></div>
          <div class="emp-stat-row"><span>Industry</span><strong>${company.industry}</strong></div>
          <div class="emp-stat-row"><span>Location</span><strong>${company.location}</strong></div>
          <div class="emp-stat-row"><span>Company size</span><strong>${company.size}</strong></div>
          <div class="emp-stat-row"><span>Work mode</span><strong>${company.workMode}</strong></div>
          <p class="emp-talent-reason">${company.summary}</p>
        </div>
      </div>

      <div class="emp-subpanel ${activeTab === "reputation" ? "active" : ""}" ${activeTab === "reputation" ? "" : "hidden"}>
        <div class="card">
          <div class="emp-rating-grid">
            <div class="emp-rating-tile main"><span>Overall</span><strong>${company.rating}/5</strong></div>
            <div class="emp-rating-tile"><span>Culture</span><strong>${company.scores.culture}</strong></div>
            <div class="emp-rating-tile"><span>Growth</span><strong>${company.scores.growth}</strong></div>
            <div class="emp-rating-tile"><span>Pay</span><strong>${company.scores.pay}</strong></div>
            <div class="emp-rating-tile"><span>Work-life balance</span><strong>${company.scores.balance}</strong></div>
          </div>
          <p class="emp-talent-reason"><strong>Vera:</strong> ${company.veraNote}</p>
        </div>
      </div>
    `;
    createIcons();
    qsa("[data-company-tab]", root).forEach(btn => btn.addEventListener("click", () => {
      activeTab = btn.dataset.companyTab;
      draw();
    }));
  }

  draw();
}
```

- [ ] **Step 3: Verify**

Run: `node --check app.js`
Expected: no output.

- [ ] **Step 4: Manual verification**

Navigate to `employer-app.html#company`. Public Profile tab: confirm Maybank's real data (industry, location, size, summary) renders, and "Preview public page" links to `companies.html?org=maybank`. Reputation tab: confirm the 5 rating tiles and Vera note render from the same `DATA.companies` record.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add employer Company view (Public Profile, Reputation)"
```

---

### Task 9: Typography, spacing, and new-view CSS

**Files:**
- Modify: `styles.css` (retrofit existing `.emp-*` rules; add sidebar-hover, header-identity, search-dropdown, sub-tab, and per-view CSS)

**Interfaces:**
- Consumes: existing tokens (`--text`, `--muted`, `--soft`, `--line`, `--blue`, `--cyan`, `--bg-2`) and existing reusable classes (`.card`, `.pill`, `.pill-row`, `.btn-*`, `.table-wrap`).
- Produces: visual styling for every class introduced/changed in Tasks 2-8.

- [ ] **Step 1: Add the token block and retrofit existing rules**

Find (the very first `.emp-app-shell` rule, near the start of the Phase 1 employer CSS block):

```css
.emp-app-shell { display: flex; flex-direction: column; min-height: 100vh; }
```

Replace with:

```css
.emp-app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  --emp-title-xl: clamp(28px, 3vw, 34px);
  --emp-title-lg: 22px;
  --emp-title-md: 17px;
  --emp-body: 14px;
  --emp-body-sm: 13px;
  --emp-label: 11px;
  --emp-metric-lg: 26px;
  --emp-metric-sm: 20px;
}
.emp-app-shell p { max-width: 72ch; }
```

Find:

```css
.emp-view-header h1 { margin: 0; font-size: 28px; letter-spacing: -0.02em; }
.emp-view-header p { margin: 4px 0 0; color: var(--muted); font-size: 14px; }
```

Replace with:

```css
.emp-view-header h1 { margin: 0; font-size: var(--emp-title-xl); font-weight: 700; letter-spacing: -0.02em; line-height: 1.15; }
.emp-view-header p { margin: 4px 0 0; color: var(--muted); font-size: var(--emp-body); line-height: 1.5; }
```

Find every `.emp-*-card h2`/`.emp-card-head h2` style and the `.emp-kpi-tile strong` style (currently `font-size: 20px;`/`24px`) — apply the size tokens: replace all `h2` selectors inside employer cards (`.emp-priorities-card h2, .emp-roles-card h2, .emp-pipeline-snapshot h2` and `.emp-card-head h2`) font-size from their current hardcoded `20px` to `var(--emp-title-lg)` with `font-weight: 700`, and `.emp-kpi-tile strong`/`.emp-market-stat strong` from `24px`/`20px` to `var(--emp-metric-lg)`. (Exact selector list depends on what Tasks 2-8 introduced — grep `styles.css` for `.emp-` `h2` and metric-`strong` rules before editing and apply the token substitution to each one found; this is a mechanical find/replace of literal px values to the new custom properties, not new rules.)

- [ ] **Step 2: Sidebar hover CSS**

Find:

```css
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
```

Replace with:

```css
.emp-app-sidebar {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 68px;
  flex: 0 0 auto;
  padding: 16px 8px;
  border-right: 1px solid var(--line);
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 68px;
  bottom: 0;
  left: 0;
  z-index: 40;
  box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04);
  transition: width 180ms ease, box-shadow 180ms ease;
}
.emp-app-sidebar.emp-sidebar-hover {
  width: 240px;
  padding: 16px 12px;
  box-shadow: 8px 0 24px rgba(15, 23, 42, 0.12);
}
.emp-app-sidebar .emp-nav-item span,
.emp-app-sidebar .emp-nav-group-label {
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 180ms ease, transform 180ms ease;
  white-space: nowrap;
}
.emp-app-sidebar.emp-sidebar-hover .emp-nav-item span,
.emp-app-sidebar.emp-sidebar-hover .emp-nav-group-label {
  opacity: 1;
  transform: translateX(0);
}
.emp-app-body { padding-left: 68px; }
```

Find:

```css
.emp-nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px; border: 0; background: none;
  color: var(--muted); font-size: 14px; font-weight: 700; text-align: left; cursor: pointer;
}
.emp-nav-item:hover { background: rgba(37, 99, 235, 0.06); color: var(--text); }
.emp-nav-item.active { background: rgba(37, 99, 235, 0.1); color: var(--blue); }
.emp-nav-item i, .emp-nav-item svg { width: 16px; height: 16px; flex: 0 0 auto; }
.emp-app-collapse-btn { margin-top: auto; }
```

Replace with:

```css
.emp-nav-item {
  display: flex; align-items: center; gap: 10px;
  height: 42px; padding: 0 10px; border-radius: 10px; border: 0; background: none;
  color: var(--muted); font-size: var(--emp-body-sm); font-weight: 600; text-align: left; cursor: pointer;
}
.emp-nav-item:hover { background: rgba(37, 99, 235, 0.06); color: var(--text); }
.emp-nav-item.active { background: rgba(37, 99, 235, 0.1); color: var(--blue); }
.emp-nav-item i, .emp-nav-item svg { width: 16px; height: 16px; flex: 0 0 auto; }
```

Remove the (now-orphaned) collapsed/open body-state rules entirely:

```css
body.emp-sidebar-collapsed .emp-app-sidebar { width: 68px; }
body.emp-sidebar-collapsed .emp-nav-item span,
body.emp-sidebar-collapsed .emp-nav-group-label { display: none; }
```

(delete this block — replaced by the `.emp-sidebar-hover` rules above) and inside the `@media (max-width: 900px)` block, remove the `body.emp-sidebar-open`-based transform rules and replace with tap-toggle equivalents:

Find (inside the existing `@media (max-width: 900px)` block):

```css
  .emp-app-sidebar {
    position: fixed; top: 68px; bottom: 0; left: 0; z-index: 60;
    transform: translateX(-100%); transition: transform 200ms ease; box-shadow: 0 20px 50px rgba(0,0,0,0.12);
  }
  body.emp-sidebar-open .emp-app-sidebar { transform: translateX(0); }
  body.emp-sidebar-open .emp-app-sidebar-overlay {
    display: block; position: fixed; inset: 68px 0 0 0; z-index: 55; background: rgba(15, 23, 42, 0.32);
  }
```

Replace with:

```css
  .emp-app-body { padding-left: 0; }
  .emp-app-sidebar { transform: translateX(-100%); transition: transform 200ms ease; box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
  .emp-app-sidebar.emp-sidebar-hover { transform: translateX(0); width: 240px; padding: 16px 12px; }
```

(The menu-toggle button and `[data-emp-menu-toggle]` click handler from Phase 1 are superseded by the sidebar's own tap-to-toggle handler added in Task 2 — leave the button markup as a visible affordance on mobile, but it now toggles the same `.emp-sidebar-hover` class via its existing listener in `renderEmployerShell`, which Task 2 did not change, so no further JS edit is needed here; only confirm during manual verification that tapping it does expand/collapse correctly given the CSS class rename from `.emp-sidebar-collapsed`/`body.emp-sidebar-open` to `.emp-sidebar-hover`.)

**Note:** `renderEmployerShell`'s `data-emp-menu-toggle` handler (from Phase 1, unchanged by Task 2) toggles `body` class `emp-sidebar-open`, which no longer has any effect after this CSS change. Since Task 2's hover logic toggles `.emp-sidebar-hover` on the **sidebar element**, not `body`, update that one handler for consistency:

Find (in `renderEmployerShell`, from Phase 1, still present):

```js
  qs("[data-emp-menu-toggle]", root)?.addEventListener("click", () => {
    document.body.classList.toggle("emp-sidebar-open");
  });
```

Replace with:

```js
  qs("[data-emp-menu-toggle]", root)?.addEventListener("click", () => {
    qs("[data-emp-sidebar]", root)?.classList.toggle("emp-sidebar-hover");
  });
```

(This is a one-line JS follow-up that belongs with this CSS task since it only matters once the class rename lands — note it in this task's commit rather than reopening Task 2.)

- [ ] **Step 3: Header identity + search dropdown CSS**

Add:

```css
.emp-app-identity {
  display: flex; align-items: center; gap: 8px;
  border: 0; background: none; padding: 4px 8px 4px 4px; border-radius: 999px; cursor: pointer;
}
.emp-app-identity:hover { background: rgba(37, 99, 235, 0.06); }
.emp-app-identity-text { font-size: var(--emp-body-sm); font-weight: 600; color: var(--text); text-align: left; }
.emp-app-identity-text small { display: block; font-size: 11px; font-weight: 500; color: var(--soft); }

.emp-app-header-search { position: relative; }
.emp-search-results {
  position: absolute; top: calc(100% + 6px); left: 0; right: 0;
  background: #fff; border: 1px solid var(--line); border-radius: 12px;
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.12); padding: 8px; z-index: 50; max-height: 320px; overflow-y: auto;
}
.emp-search-group + .emp-search-group { margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--line); }
.emp-search-group-label { display: block; padding: 4px 8px; font-size: 10px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: var(--soft); }
.emp-search-result {
  display: flex; flex-direction: column; width: 100%; text-align: left;
  padding: 8px; border: 0; background: none; border-radius: 8px; cursor: pointer;
}
.emp-search-result:hover { background: rgba(37, 99, 235, 0.06); }
.emp-search-result span { font-size: 12px; color: var(--muted); }
```

- [ ] **Step 4: Sub-tab pattern CSS**

Add:

```css
.emp-subtabs { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.emp-subtab {
  padding: 8px 14px; border-radius: 999px; border: 1px solid var(--line); background: #fff;
  color: var(--muted); font-size: var(--emp-body-sm); font-weight: 600; cursor: pointer;
}
.emp-subtab.active { border-color: rgba(37, 99, 235, 0.4); color: var(--blue); background: rgba(37, 99, 235, 0.06); }
.emp-subpanel { display: none; }
.emp-subpanel.active { display: block; }
```

- [ ] **Step 5: Per-view CSS (Talent, Hiring, Intelligence, Community, Company)**

Add:

```css
.emp-talent-filters { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 12px; padding: 16px; margin-bottom: 16px; }
.emp-talent-filters input, .emp-talent-filters select { padding: 8px 10px; border: 1px solid var(--line); border-radius: 10px; font-size: var(--emp-body); }
.emp-talent-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.emp-talent-card, .emp-pool-card, .emp-interview-card, .emp-candidate-detail, .emp-post-card { padding: 18px; }
.emp-talent-card h3, .emp-pool-card h3, .emp-interview-card h3, .emp-candidate-detail h3, .emp-post-card h3 { margin: 0; font-size: var(--emp-title-md); font-weight: 700; }
.emp-talent-meta { margin: 6px 0 10px; font-size: var(--emp-body-sm); color: var(--muted); }
.emp-talent-reason { margin: 10px 0 0; font-size: var(--emp-body-sm); line-height: 1.5; }
.emp-talent-actions { display: flex; gap: 8px; margin-top: 12px; }
.emp-pool-list { list-style: none; margin: 10px 0 0; padding: 0; font-size: var(--emp-body-sm); display: grid; gap: 6px; }
.emp-empty-hint { color: var(--soft); font-size: var(--emp-body-sm); }

.emp-kanban { display: grid; grid-template-columns: repeat(7, minmax(160px, 1fr)); gap: 12px; overflow-x: auto; }
.emp-kanban-col h3 { display: flex; align-items: center; gap: 6px; margin: 0 0 10px; font-size: var(--emp-body); font-weight: 700; }
.emp-kanban-card { padding: 12px; margin-bottom: 10px; display: grid; gap: 6px; }
.emp-kanban-card select { padding: 6px 8px; border: 1px solid var(--line); border-radius: 8px; font-size: 12px; }

.emp-funnel-card { padding: 20px; margin-top: 16px; }
.emp-funnel-row { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin-top: 12px; }
.emp-funnel-stage { text-align: center; padding: 10px; border: 1px solid var(--line); border-radius: 12px; }
.emp-funnel-stage strong { display: block; font-size: var(--emp-metric-sm); }
.emp-funnel-stage span { font-size: 11px; color: var(--soft); }
.emp-market-select { display: block; margin-bottom: 16px; font-size: var(--emp-body-sm); font-weight: 600; }
.emp-market-select select { display: block; margin-top: 6px; padding: 8px 10px; border: 1px solid var(--line); border-radius: 10px; width: 100%; max-width: 320px; }
.emp-university-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

.emp-post-head { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.emp-post-actions { margin-top: 12px; }
.emp-compose-modal { position: fixed; inset: 0; z-index: 80; display: grid; place-items: center; background: rgba(15, 23, 42, 0.32); }
.emp-compose-card { width: min(480px, calc(100vw - 32px)); }
.emp-compose-card textarea { width: 100%; margin-top: 12px; padding: 10px; border: 1px solid var(--line); border-radius: 10px; font-family: inherit; font-size: var(--emp-body); }
.emp-compose-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 14px; }

@media (max-width: 900px) {
  .emp-talent-filters { grid-template-columns: 1fr; }
  .emp-kanban { grid-template-columns: repeat(7, 200px); }
  .emp-funnel-row { grid-template-columns: repeat(4, 1fr); }
  .emp-university-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 6: Manual verification**

Reload every employer route (`#dashboard`, `#roles`, `#talent`, `#hiring`, `#intelligence`, `#community`, `#company`) at 1440px, 900px, and 390px widths. Confirm: sidebar hover/collapse and header identity look correct at all widths; no horizontal page overflow; Pipeline's 7-column Kanban scrolls horizontally on narrow viewports rather than overflowing the page; typography sizes visually match the token scale (page titles noticeably smaller than Phase 1's old 28px-fixed dashboard title only if the clamp reduces it at narrow widths — otherwise same visual size, just token-driven); no page has an unstyled/broken element.

- [ ] **Step 7: Commit**

```bash
git add app.js styles.css
git commit -m "feat: apply typography/spacing tokens and style all Phase 2 views"
```

---

### Task 10: Cleanup and full acceptance verification

**Files:**
- Modify: `app.js` (only if verification finds a stray reference — see steps)

**Interfaces:**
- Consumes: nothing new.
- Produces: nothing new — this task verifies and, only if needed, removes any leftover reference to the old nav keys.

- [ ] **Step 1: Confirm no dead references to the old nav keys remain**

Run: `grep -n "candidate-search\|talent-pool\|university-talent\|company-profile" app.js`
Expected: no matches (these keys were fully superseded by `talent`/`intelligence`/`company` in Task 2; if any stray reference is found — e.g. in a comment or an old CSS selector — remove it).

- [ ] **Step 2: Confirm `renderEmployerPlaceholder` is now only reachable for `vera` and `settings`**

Run: `grep -n 'case "' app.js | grep -A1 -B1 renderEmployerView` (or open `renderEmployerView` directly) and confirm the only route keys falling through to `default: return renderEmployerPlaceholder(root, view);` are `vera` and `settings` (every other key in `EMPLOYER_VIEW_KEYS` now has an explicit `case`).

- [ ] **Step 3: Full acceptance pass in a browser**

With a local static server running and a seeded logged-in employer session:
1. Confirm exactly one header, one search box, one identity element (no duplicate "Your Workspace"/avatar pair).
2. Confirm the sidebar starts collapsed, hover expands it as an overlay (main content does not shift), and it collapses ~200ms after the mouse leaves.
3. Confirm no "Collapse" nav item exists.
4. Click every sidebar item in rapid succession (`dashboard`, `roles`, `talent`, `hiring`, `intelligence`, `community`, `company`, `vera`, `settings`) and confirm no other view is ever briefly visible mid-transition, and only `vera`/`settings` show the "coming in a later phase" placeholder.
5. Confirm Dashboard's KPI numbers and Intelligence's Analytics numbers are both derived from `DATA.employerRoles`/`DATA.candidates` (spot-check one number, e.g. "Active roles" count, matches on both pages).
6. Confirm saving a candidate in Talent actually shows up in Saved Pools; changing a Pipeline card's stage actually moves it to the new column; posting in Community actually adds a new post to the feed.
7. Confirm global search returns grouped results and clicking one navigates correctly with no flash.

- [ ] **Step 4: Commit (only if Step 1 found something to remove)**

```bash
git add app.js
git commit -m "chore: remove stray references to superseded employer nav keys"
```

If Step 1 found nothing to remove, skip this commit — there's nothing to commit for this task.

## Self-Review Notes

- **Spec coverage:** Nav restructure (Task 2), sidebar hover behavior (Task 2 + CSS in Task 9), header identity consolidation (Task 2), global search (Task 3), typography/spacing tokens (Task 9), Talent/Hiring/Intelligence/Community/Company minimum-viable content (Tasks 4-8), data additions incl. the greeting-name bug fix (Tasks 1 & 2), no-placeholder acceptance criterion (Task 10 verifies only `vera`/`settings` remain placeholders, which the spec explicitly carves out). All Phase 2 acceptance-criteria numbers listed in the design doc map to a task above.
- **Placeholder scan:** no "TBD"/"fill in later" in any step; `vera`/`settings` remaining as placeholders is a deliberate, spec-approved scope boundary, not a gap.
- **Type consistency:** `renderEmployerTalent(root)`/`renderEmployerHiring(root)`/`renderEmployerIntelligence(root)`/`renderEmployerCommunity(root)`/`renderEmployerCompany(root)` signatures match what Task 2's `renderEmployerView` switch (as extended by Tasks 4-8) calls. `EMPLOYER_PIPELINE_STAGES` is defined once (Task 5) and reused as-is by Task 6's funnel — same array, no redefinition.
- **Scope:** Phase 2 only, per the design doc's explicit boundary; Vera contextual integration and Settings are separate future phases.
