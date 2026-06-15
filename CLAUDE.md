# CLAUDE.md

This file provides guidance for teammates working on this prototype.

## Running the prototype

Open `careergo.html` directly in a browser. There is no build step and no local server required.

Windows example:

```powershell
start careergo.html
```

All dependencies load from CDN at runtime.

## Architecture

The prototype is a single HTML file:

- `careergo.html`

All markup, styles, mock data, and React logic live in this file. React 18 is loaded from CDN and JSX is compiled in the browser with Babel Standalone.

### Main runtime pieces

- React + ReactDOM from CDN
- Babel Standalone for in-browser JSX
- Tailwind CSS CDN with inline `tailwind.config`
- Lucide icons exposed on `window.lucide`

### Important script ordering

Inside the main `<script type="text/babel" data-presets="react">` block, the rough order is:

1. `LANG` translations and `useT(lang)`
2. `Icon`
3. `LogoMark` and `LogoFull`
4. design atoms such as `Btn`, `Card`, `Badge`, `Avatar`, `ProgressBar`
5. mock data constants
6. landing/auth/onboarding flows
7. candidate app modules
8. employer app modules
9. top-level `App`

## Critical patterns

### Icon usage

Do not use Lucide icons directly in JSX. Always use the local `Icon` wrapper:

```jsx
<Icon name="trending-up" size={20} className="text-emerald-600" />
```

The wrapper uses DOM refs and `window.lucide` to build SVGs safely.

### Routing

Routing is simple state-based navigation inside `App`. There is no router library.

Main page keys:

- `landing`
- `login`
- `register`
- `onboard-candidate`
- `onboard-employer`
- `app`
- `employer`

Employer inner navigation is handled separately inside `EmployerApp`.

### Translation system

Translations live in the `LANG` object with:

- `en`
- `bm`

`useT(lang)` returns a `t(key)` helper.

### Design atoms

Common reusable atoms include:

- `Btn`
- `Card`
- `GlassCard`
- `Badge`
- `SectionLabel`
- `Avatar`
- `ProgressBar`
- `ScoreRing`
- `Gauge`

Follow existing patterns before introducing new abstractions.

## Employer Handoff Notes

This section is written as a pass-off for the next teammate working on the employer side.

### Current mounted employer views

The active employer shell is `EmployerApp` in `careergo.html`.

Mounted views:

- `emp-home` -> `EmployerCommandDashboard`
- `emp-jobs` -> `EmployerRolesWorkspaceV2`
- `emp-talent` -> `EmployerTalentDiscoveryV2`
- `emp-pipeline` -> `EmployerHiringPipeline`
- `emp-ai` -> `EmployerAIHiringAssistantV2`
- `emp-profile` -> `EmployerProfileV2`

There are older employer components still present in the file, including earlier dashboard/assistant variants. The routing now points to the components above, so treat older employer variants as legacy unless we intentionally clean them up.

### Summary of recent employer-side changes

#### 1. Employer dashboard was replaced with a more decision-driven home

The old employer dashboard felt like a generic admin template. A new dashboard component, `EmployerCommandDashboard`, was added and is now the active `emp-home` route.

What it now focuses on:

- a top "hiring cockpit" section
- a recommended next move area
- an action queue using live pipeline items
- a talent radar panel
- a pipeline shape summary
- a role health panel
- a content engine panel to reinforce employer-brand posting

Important:

- `EmployerDashboardV2` still exists in the file
- it is no longer the mounted home dashboard

#### 2. Employer posting is now positioned as a professional/social feed

The employer posting workspace is no longer framed as only a hiring feed. It is now closer to a LinkedIn-style professional feed.

Visible naming changes:

- employer nav label `empJobs` -> `Posts & Updates`
- employer nav label `empPipeline` -> `Candidate Pipeline`
- page title `Hiring Feed` -> `Professional Feed`
- tab labels `Post Feed / Edit Post` -> `Feed / Post Editor`

Intended content types now include:

- hiring updates
- team stories
- events
- industry insights
- employer-brand content

#### 3. Feed post data now supports categories

`EMP_SOCIAL_POSTS` now includes `category`.

Current sample categories:

- `Hiring update`
- `Industry insight`
- `Team story`

The feed UI uses `category` to change:

- the label shown in the post card
- whether the CTA says `View role` or `Related role`

`onCreatePost()` now preserves `category`, defaulting to `Hiring update`.

#### 4. Post editor and feed workspace were improved

`EmployerRolesWorkspaceV2` was improved so it is easier to use:

- feed browsing and editing stay separated
- only the feed post list scrolls in feed mode
- editor mode expands wider and no longer leaves a large empty space on the right
- copy was updated so the editor supports broader professional content, not only recruitment ads

#### 5. Employer profile now includes account settings

`EmployerProfileV2` now includes:

- editable workspace/account settings
- password eye toggle
- aligned button styling for `Share profile` and `Save changes`
- account snapshot panel

### Employer sidebar notes

The employer sidebar was restyled with IG-inspired motion and custom classes.

Relevant CSS classes:

- `.emp-ig-sidebar`
- `.emp-ig-logo`
- `.emp-ig-nav`
- `.emp-ig-item`
- `.emp-ig-icon`
- `.emp-ig-label`
- `.emp-ig-panel`
- `.emp-ig-account`
- `.emp-ig-switch`

These are applied in `EmployerApp`. Hover behavior was tuned to avoid horizontal scrollbar flicker.

### Product direction to preserve

The employer side is in transition from:

- "recruiter dashboard only"

to:

- "professional hiring workspace + employer brand/social layer"

If continuing this area, keep these principles consistent:

- do not make every surface only about vacancy management
- balance hiring execution with employer-brand/community posting
- make the experience useful for weekly operating work, not only status reporting

### Good next tasks

These are the best next improvements for the next teammate:

- add a real post type selector in `Post Editor`
- suggested types: `Hiring update`, `Team story`, `Event`, `Insight`
- rename internal field `role` to something more general like `headline`
- clean up older unused employer components once the team confirms the new mounted versions are stable
- unify visible labels and internal route naming where useful
- improve the AI assistant so it can generate both hiring content and employer-brand/social posts more explicitly
- do a stronger mobile pass on the new employer dashboard

### Merge and collaboration caution

This repo still keeps a lot of UI logic in one large file:

- `careergo.html`

That means branch merges will likely conflict in that file.

If merging with another branch such as `candidate_dashboard`:

- expect manual conflict resolution
- preserve the mounted employer components listed in this handoff
- be careful around route wiring in `EmployerApp`

### Git context

Branch used during this phase:

- `employee_dashboard`

Recent pushed commit relevant to this handoff:

- `8e5d71d improve employee dashboard`
