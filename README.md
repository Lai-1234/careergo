# CareerGo — an AI Career Operating System

**Live demo:** https://lai-1234.github.io/careergo/

CareerGo is a submission for the **Talentbank Tech Hackathon 2026** ("Build Asia's Career OS"). It's built as a lifelong career companion — not just a job board — spanning career discovery, growth planning, applications, and pay negotiation for job seekers, plus a full hiring workspace for employers, unified around an AI coach, **Vera**.

## Try it now

No install, no sign-up required. Open the [live demo](https://lai-1234.github.io/careergo/) and:

- Click **"Enter demo dashboard"** on any locked page, or submit the login form with the email/password fields left blank, to open a fully seeded **candidate** workspace.
- From the homepage, choose **Employer** to open a fully seeded **employer** workspace the same way.
- Or click **Create Account** and go through onboarding yourself — every field is pre-filled with realistic defaults, so you can tab straight through without typing anything.

## What's inside

### For candidates
- **Dashboard** — a daily brief that adapts to career stage, goals, and progress
- **Discover** — role, company, and university recommendations with match reasoning
- **Growth** — a personalized skill roadmap with trackable moves and progress
- **Career Value** — a live pay-range estimate with market benchmarking and a negotiation simulator
- **Pipeline / Autopilot** — application tracking across Saved → Applied → Interview → Offer, plus automated job matching
- **Feed** — a professional community feed (posts, communities, trending topics, saved/liked library)
- **Vera** — an AI coach woven through every surface, with a persistent chat widget and full conversation history

### For employers
- **Employer OS** — a self-contained hiring workspace (`employer-app.html`)
- **Roles** — a 5-step job-creation wizard with salary benchmarking, bias-language scanning, and AI-assisted drafting
- **Talent Pipeline** — a 6-stage Kanban board (drag-and-drop) with candidate match-score breakdowns and an AI copilot
- **Company Profile** — hiring funnel analytics, salary-vs-market comparison, AI health score, and competitor comparison
- **Feed & Inbox** — an AI-assisted hiring-intelligence feed and a 2-pane candidate messaging inbox
- **Vera for hiring** — the same coach, reframed around hiring priorities, candidate context, and daily briefs

## Tech stack

Deliberately simple: **plain HTML, CSS, and vanilla JavaScript — no framework, no build step.** Every page is a static HTML file that loads a single shared `app.js`. State persists in the browser's `localStorage`, so the whole app runs entirely client-side.

- `app.js` — all application logic (rendering, state, routing)
- `styles.css` / `enterprise.css` — the core design system and shared components
- a handful of `*-final.css` files — scoped styles for specific components, kept separate from the two large stylesheets above
- `assets/` — logos and images
- `tests/` — a real `node:test` unit-test suite covering the matching/scoring/benchmarking logic (see below)

## Running locally

No build step. Just open `index.html` in a browser, or serve the folder with any static file server.

## Tests

```
npm install
npm test
```

Runs a `node:test` suite covering candidate-matching, AI insight generation, salary benchmarking, bias-language detection, and wizard data-migration logic — the "smart" parts of the product, not just markup.

## Project structure

```
├── index.html, dashboard.html, ...   Candidate-facing pages
├── employer-app.html, ...            Employer-facing pages
├── app.js                            All application logic
├── styles.css, enterprise.css, ...   Design system + component styles
├── assets/                           Images and logos
└── tests/                            Unit tests (node:test)
```
