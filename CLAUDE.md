# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**CRITICAL RULE:** 任何代码上传（如 `git push`）到 GitHub 之前，必须先询问用户并获得明确同意。

## Running the prototype

Open `careergo.html` directly in a browser — no build step, no server required. All dependencies load from CDN at runtime. Double-click the file or use `start careergo.html` on Windows.

## Project context

CareerGo v3 is an **AI-guided career platform** and Career Operating System. It should feel like a complete, useful website rather than a visual-only hackathon demo. The product should help candidates make real career decisions across jobs, company research, university research, applications, market value, and mentoring.

**Product narrative:** The platform helps users navigate their long-term career journey with intelligence, research, applications, simulation, automation, and active mentorship from Vera. The core flow is: Start with Vera -> explore jobs -> research companies/universities -> compare choices -> apply with evidence -> track progress.

**Vera product principle:** Vera is not a simple chatbot or passive Q&A box. Vera should feel like the user's career life coach, gym coach, and teacher combined: warm from day one, aware of the user's profile, and proactive about what the user should do next. Chat is only one surface for Vera; the larger idea is that CareerGo is AI-guided everywhere.

**Research principle:** Company and university research is a first-class workflow. Users should be able to check backgrounds, ratings, review themes, culture, salary/outcome signals, highlights, watchouts, and comparisons before applying or choosing a career path.

**What should feel real:** UI/UX, workflows, mock data, visual polish, product storytelling, organization research, reviews, comparison, and Vera's continuous mentor presence.
**What is simulated:** AI reasoning, market data, salary figures, job matches, ratings, reviews, and analytics are local mock data for the current static build. Interactions such as saving jobs, applying, filtering, comparing, and writing reviews should work in-session.

## Architecture

Single HTML app mirrored in both `index.html` and `careergo.html`. All markup, styles, data, and logic live in the file. React 18 is loaded via CDN; Babel Standalone compiles JSX in the browser at runtime.

**CDN dependencies (in `<head>`):**
- `react@18` + `react-dom@18` (production builds)
- `@babel/standalone` (in-browser JSX compilation)
- Tailwind CSS CDN with a custom `tailwind.config` block
- `lucide@latest` (exposes icons on `window.lucide`)

**`<script type="text/babel" data-presets="react">` block order (v3):**
1. `Icon` component — wraps Lucide via DOM refs
2. Mock data: `jobs`, `companies`, `universities`, `baseReviews`, `profile`
3. Shared UI: `Rating`, `Button`, `SectionTitle`, `VeraCard`, `TopNav`
4. Main pages: `Home`, `JobsPage`, `ResearchPage`, `Dashboard`, `EmployersPage`
5. Review workflow: `ReviewModal`
6. `App` top-level router with query-string support (`?page=jobs`, `?page=research`, etc.)

## Critical patterns

### Icon component
**Never** use Lucide icons directly in JSX. Always use the `Icon` wrapper:
```jsx
<Icon name="trending-up" size={20} className="text-emerald-600"/>
```
Icon names use kebab-case (`brain-circuit`, `arrow-right`). For icon color via inline style, wrap in a span:
```jsx
<span style={{color:'#FDBA2D'}}><Icon name="sparkles" size={14}/></span>
```

### Routing
Simple `page` state in `App`. Navigation via `go(page, opts)` callback. Valid page keys: `landing`, `login`, `register`, `onboard-candidate`, `onboard-employer`, `app`, `employer`.

Candidate app sub-views are in `CandidateApp`'s `views` object, keyed by string id: `dashboard`, `profile`, `jobs`, `companion`, `pay`, `auto`.

### CANDIDATE_NAV (current)
```js
const CANDIDATE_NAV=[
  {id:'dashboard', icon:'layout-dashboard', tk:'appDashboard', tourStep:null},
  {id:'profile',   icon:'brain-circuit',    tk:'appProfile',   tourStep:1},
  {id:'jobs',      icon:'briefcase',         tk:'appJobs',      tourStep:4},
  {id:'companion', icon:'bot',               tk:'appCompanion', tourStep:2},
  {id:'pay',       icon:'bar-chart-2',       tk:'appMarket',    tourStep:3},
  {id:'auto',      icon:'radar',             tk:'appAuto',      tourStep:5},
];
```

### Translation system
`LANG` object has `en` and `bm` keys. `useT(lang)` returns a `(key) => string` function. BM only active on landing page; app shows "coming soon" toast.

### Tailwind custom tokens
```js
theme.extend: {
  colors: { brand: {50–950}, deep:'#1e0a3c', gold:{300/400/500}, cyn:{300/400} },
  boxShadow: { soft, card, glow, 'glow-sm' },
  backgroundImage: { 'hero-gradient', 'sidebar-gradient', 'card-gradient' }
}
```

### Design system — app (candidate dashboard area)
| Role | Value |
|------|-------|
| Brand purple | `#5B2EFF` (Tailwind: `brand-700`) |
| Light purple | `#8A63FF` |
| Gold accent | `#FDBA2D` (Tailwind: `gold-400`) |
| Teal success | `#1D9E75` |
| Amber warning | `#EF9F27` |
| Dark bg | `#0d0222` / `#1A0146` |
| Card bg | white |
| App background | `#F8FAFC` (slate-50) |

For dark section headers (Autopilot command, Career Intelligence banner, Dashboard hero):
```js
background: 'linear-gradient(135deg,#1A0146 0%,#0d0222 60%,#1a1060 100%)'
```

### CSS class reference (custom, in `<style>` block)
**Batch A:** `.tour-backdrop`, `.tour-spotlight`, `.tour-tooltip`, `.tour-dot`, `@keyframes ringDraw`, `.health-arc`, `.metric-tip`, `.metric-tip-anchor`, `@keyframes streakGlow`, `.streak-bar-fill`, `.future-card`, `.quick-chip`, `.interview-type-chip`, `.dim-bar-track`, `.dim-bar-fill`

**Batch B:** `@keyframes radarPing`, `.radar-ping`, `.ap-toggle`, `.ap-toggle.on`, `.ap-toggle-thumb`, `.market-tab`, `.market-tab.active`, `.profile-dim-bar`, `.profile-dim-fill`

**Batch C:** `.nav-link`, `.nav-link:hover`, `.nav-link.active`, `.nav-gold-dot`, `.hover-lift`, `.skill-badge`, `.impact-tip`, `.impact-tooltip`, `.notif-dropdown`

### LogoMark gradient IDs
`LogoMark` uses `useMemo(()=>'lg'+Math.random()...,[])` to avoid SVG gradient ID collisions.

### Scroll-reveal system (landing page only)
- `reveal` class → fades in via IntersectionObserver
- `stagger-reveal` + `stagger-child` → 80ms stagger on card grids
- `step-item` → sequential reveal via `stepsRef`

### Gold CTA button (landing page)
```jsx
<button className="cta-gold inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold" style={{borderRadius:20}}>
```

## Mock data reference

| Constant | Purpose |
|----------|---------|
| `USER` | User profile — name, scores, skills, XP, market value |
| `CAREER_PATHS` | Career path simulations (salary in RM) |
| `JOBS` | 5 mock job listings with match %, impact, growth |
| `CHECKLIST` | Skills growth checklist items |
| `PAYOFF_SKILLS` | Skill → salary uplift mapping |
| `PULSE_JOBS` | Job demand trend data |
| `PULSE_SKILLS` | Skill demand index |
| `INBOX_ITEMS` | Autopilot activity log items |
| `TRACKED_APPS` | Application tracker mock entries |

Currency: All in-app salary figures use RM (Malaysian Ringgit). `USER.marketValue` = 92000 (RM).

## Current improvement targets (Prompt 1 — Batch D)

Next implementation batch covers these 3 pages:

### Autopilot redesign
- "Scan Jobs Only" secondary button (scan only, no auto-apply)
- Autopilot Status Card (Active status, Last Scan, Scanned/Recommended/Applied/Saved stats)
- Rules Panel expansion: work arrangement chips, employment type, experience level, company size, industry dropdown, visa/relocation toggles, commute slider, match threshold selector (70/80/90/95%), excluded companies tag input, excluded keywords tag input
- "Advanced AI Rules" card pointing to AI Assistant
- Activity Log: show 5 by default + "See All", status/score/date/industry filters, skipped-reason filter, summary bar

### Market Intelligence redesign  
- Career Worth Dashboard: Current (RM92k) / Target (RM120k) / Potential (RM145k) with breakdown by experience/skills/industry/location/leadership/demand
- Career Value Explorer: role switcher (Product Designer → Senior → Lead → Design Manager → PM → Head of Product) that updates salary range + demand + hiring trend
- Market Value Growth Simulator: replaces Skill Payoff — shows 4 scenarios with progressive value increases
- Enhanced Market Signals: Emerging Roles section, Skills to Watch, Salary Trend Forecast (12/24/36mo), Industry Outlook, Remote Hiring Trend, Location Opportunity table
- AI Market Insights panel: 3–5 mock AI-generated career insights

### Jobs & Opportunities redesign
- Community tab alongside Jobs tab: LinkedIn-style feed with ~5 mock posts, like/comment/bookmark interactions
- Job card: "Why Recommended" checklist (✓ bullets) + "Why Not Recommended" (missing skills etc.)
- Enhanced job metadata: Growth Potential, Promotion Potential, Interview Difficulty, Competition Level, Remote Friendliness, Career Alignment Score
- AI Match Explanation section on each card
- Filter improvements: Industry, Company Size, Salary Range, Career Impact, Growth Potential, Interview Difficulty, Work Arrangement
