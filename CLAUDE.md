# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the prototype

Open `careergo.html` directly in a browser — no build step, no server required. All dependencies load from CDN at runtime. Double-click the file or use `start careergo.html` on Windows.

## Architecture

Single HTML file (`careergo.html`) — all markup, styles, and logic live here. React 18 is loaded via CDN; Babel Standalone compiles JSX in the browser at runtime.

**CDN dependencies (in `<head>`):**
- `react@18` + `react-dom@18` (production builds)
- `@babel/standalone` (in-browser JSX compilation)
- Tailwind CSS CDN with a custom `tailwind.config` block
- `lucide@latest` (exposes icons on `window.lucide`)

**`<script type="text/babel" data-presets="react">` block order:**
1. `LANG` translations object + `useT(lang)` hook (EN ↔ BM)
2. `Icon` component — wraps Lucide via DOM refs (see below)
3. `LogoMark` SVG + `LogoFull`
4. Design atoms: `Btn`, `Card`, `GlassCard`, `Badge`, `SectionLabel`, `Avatar`, `ProgressBar`, `ScoreRing`, `Gauge`
5. Mock data constants: `USER`, `CAREER_PATHS`, `JOBS`, `CHECKLIST`, `PAYOFF_SKILLS`, `PULSE_JOBS`, `PULSE_SKILLS`, `TESTIMONIALS`, etc.
6. `ToastContainer`
7. Landing page components (LandingNav → FooterSection → LandingPage)
8. Auth pages: `LoginPage`, `RegisterPage` (wrapped in `AuthShell`)
9. `CandidateOnboarding` (5 steps), `EmployerOnboarding` (5 steps)
10. Candidate app: `CandidateDashboard`, `CandidateApp` shell + modules (CareerProfile, JobsOpportunities, CareerCompanion, FairPayEngine, MarketPulseModule, AutopilotProxy)
11. Employer app: `EmployerDash`, `TalentDiscovery`, `AIHiringAssistant`, `EmployerApp`
12. `App` (top-level router) + `ReactDOM.createRoot`

## Critical patterns

### Icon component
**Never** use Lucide icons directly in JSX. The library exposes icons on `window.lucide` but React reconciliation conflicts with Lucide's DOM manipulation. Always use the `Icon` wrapper:

```jsx
<Icon name="trending-up" size={20} className="text-emerald-600"/>
```

The `Icon` component uses `useRef` + `useEffect` to build SVG elements imperatively via DOM APIs. Icon names use kebab-case (`brain-circuit`, `arrow-right`).

### LogoMark gradient IDs
`LogoMark` generates a unique random prefix per instance with `useMemo(()=>'lg'+Math.random()...,[])` to avoid SVG gradient ID collisions when rendered in multiple places (nav, sidebar, auth pages).

### Routing
Simple `page` state in `App` component. Navigation uses a `go(page, opts)` callback passed down as props. No router library. Valid page keys: `landing`, `login`, `register`, `onboard-candidate`, `onboard-employer`, `app`, `employer`.

### Translation system
`LANG` object has `en` and `bm` keys. `useT(lang)` returns a `(key) => string` function. BM translation is active on the landing page only; the language toggle in the app shows a "coming soon" toast.

### Tailwind custom tokens
Defined in the inline `tailwind.config` block:
- `brand.50–950`, `deep:'#1e0a3c'`
- `gold.300/400/500`, `cyn.300/400`
- `boxShadow`: `soft`, `card`, `glow`, `glow-sm`
- `backgroundImage`: `hero-gradient`, `sidebar-gradient`, `card-gradient`

### Brand colors (landing page)
- Primary purple: `#534AB7` (dark), `#7F77DD` (mid), `#EEEDFE` (tint)
- Hero/dark sections background: `#1a0a3d`
- Gold accent: `#F5A623` (CTA buttons)
- Success teal: `#1D9E75`

### Scroll-reveal system (landing page)
- Add `reveal` class to section wrappers → fades in via IntersectionObserver in `LandingPage` useEffect
- Add `stagger-reveal` to card grids + `stagger-child` to each card → cards animate in with 80ms stagger
- Add `step-item` to How-It-Works steps → sequential reveal via local `useEffect` with `stepsRef`

### Gold CTA button
Use the `.cta-gold` CSS class (not Tailwind `Btn` component) for gold shimmer buttons:
```jsx
<button className="cta-gold inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold" style={{borderRadius:20}}>
```

## Mock data notes
- `CAREER_PATHS` — salary ranges in RM (Malaysian Ringgit). Used in both landing page sim widget and candidate app career profile.
- `JOBS` + `EMP_CANDIDATES` — still use USD figures (app-only, not yet localised)
- `USER.marketValue` — used in `Gauge` component which formats with `$`; app-only
