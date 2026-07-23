# CLAUDE.md

This file gives future agents the current working rules for the CareerGo repository.

**Critical rule:** Never push code to GitHub or run destructive git commands unless the user explicitly asks for it.

## Project Origin & Target Audience

CareerGo is being built as a submission for the **Talentbank Tech Hackathon 2026** ("Build Asia's Career OS"), organized by Talentbank (Malaysia-based career infrastructure company). Full brief: https://www.techhackathon.com/

**Target audience: ages 15–60.** CareerGo is meant to work as someone's "Career OS" across their entire working life — not just an early-career or job-searching tool. (The hackathon brief itself frames the end-user range even wider, "13-65+"; treat 15-60 as CareerGo's own product framing.) When auditing or adding content, check whether it skews toward one narrow age band — the current codebase leans heavily toward students/fresh graduates/early-career switchers (university entry-requirement matching, junior/entry/associate salary bands, mentors framed as "a few steps ahead"), which under-serves both the 15-18 (pre-university/career exploration) and 35-60 (senior/late-career, leadership pivots, encore careers) ends of the range.

**The brief's structure — three module tracks, judged together:**
- **Candidate**: Career Path Navigator, Living Portfolio, AI Career Coach, Fair Pay Engine
- **Employer**: Smart Talent Matching, Talent Retention Signals, Talent Re-Engagement
- **University**: Lifelong Outcome Loop, Future-State Curriculum Engine, Adaptive Readiness Profile

**Current build-out status** (last audited 2026-07-23, after merging the `employer-integration` branch — re-check as work continues, this will go stale):
- **Candidate track**: strong, actively developed — Dashboard, Discover, Grow, Career Value, Pipeline/Autopilot, Feed, people/social features, guided onboarding tours.
- **Employer track**: now also strong, actively developed — a full, self-contained Employer OS (`employer-app.html`, `.emp-app-shell`, see "Employer Module" section below for architecture) covering a 5-step job-creation wizard (salary benchmarking, bias-language checks, Vera-assisted generation), a Kanban-based Talent Pipeline (6 stages, drag-and-drop, match-score breakdown, floating Vera copilot), a deeply built-out Company Profile (hiring funnel, salary-vs-market comparison, plus dedicated AI Health Score / Competitor Comparison / FAQ / Executive Recommendations tabs), an Employer Feed rebuilt into an AI hiring-intelligence workspace, and a 2-pane Employer Inbox. It still doesn't explicitly frame its features around the three brief-named Employer modules as distinct, labeled capabilities — the Talent Pipeline's match-score/Vera-priority work is the closest fit to "Smart Talent Matching," but there is no dedicated "Talent Retention Signals" or "Talent Re-Engagement" surface yet.
- **University track**: **not built**. `universities.html`/`discover-universities.html` are candidate-facing "browse universities" pages, not an institution-facing portal — none of the three named University modules exist yet.

Since judging is framed around all three tracks together, the missing University track and the Employer track's not-yet-explicit mapping to its three named modules are worth surfacing in any project-direction discussion.

## UI Design Specification — Source Of Truth

`CAREERGO_UI_SPEC.md` (repo root) is the frozen, canonical design specification for CareerGo. It was originally written against a React/Tailwind/shadcn/TanStack-Router reference build, so its file paths (`src/routes/...`, `src/components/...`) and class names (Tailwind, shadcn `<Button>`) do not exist in this repo and must not be treated as literal instructions. What is binding, and carries over directly, is the design **values**: colors, spacing scale, typography ramp, radius/shadow scale, card/button/input measurements, and density rules. The "Design System" section below is that specification translated into plain CSS custom properties and pixel values for `enterprise.css` and this repo's other stylesheets.

Treat the specification as the single source of truth for all visual work, current and future:

- Do NOT redesign anything. Do NOT reinterpret anything. Do NOT "improve" anything. Do NOT substitute your own UI judgement for a value the spec already defines.
- Implement the specification exactly. A rebuilt section should be visually indistinguishable from the values below, not just functionally similar.
- If your instinct disagrees with the spec, the spec wins — never widen spacing, enlarge components, or add "breathing room" because it looks better to you.
- Never normalize or equalize card/row heights, never stretch cards vertically. Cards are content-driven (`height: auto`) — no forced `min-height` beyond what a rule below states.
- Match container widths, grid gaps, margins, padding, and breakpoints exactly. Do not estimate or round to a value you find more familiar.
- Use only the type sizes/weights and the spacing scale defined below (4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96px). Do not invent new ones or use arbitrary in-between values.
- The premium feel in this spec comes from density and restraint, not extra whitespace. When in doubt, pick the tighter, more compact value.
- Target near-pixel accuracy. If a rebuilt section looks larger, smaller, more spaced out, less dense, misaligned, or off in typography/proportions versus the spec, keep adjusting until it matches — don't stop at "functional."
- This overrides any older, wider spacing/sizing values a prior version of this file recorded. If a page still shows the old look because it hasn't been retrofitted yet, say so explicitly rather than silently mixing old and new values on the same page.

## Project Status

CareerGo is now a static, multi-page prototype. Do not treat it as the older single React/CDN app. Most user-facing screens are plain HTML files styled by shared CSS.

Open pages directly in the browser. No build step is required.

**The user runs this as `file://` — double-clicking the HTML files off disk (`C:\careeros\careergo\...`), not through a web server.** This is not a footnote: under `file://`, `document.referrer` is **always `""`** and `location.origin` is the string `"file://"`, so any feature built on either behaves differently than it does over `http://localhost`. A referrer-based "back to where I came from" fix once passed every localhost Playwright test yet did nothing for the user for exactly this reason (see "Role-detail back navigation" below). `window.history` still works normally under `file://`. **When a change touches `document.referrer`, `location.origin`, cross-page navigation, or caching, verify it over `file:///C:/careeros/careergo/...` — not just the local server** — or you'll ship a bug that's invisible in your own testing.

Primary files:

- Public marketing pages: `index.html`, `explore.html`, `companies.html`, `universities.html`, `community.html`, `login.html`, `register.html`
- Logged-in workspace pages: `dashboard.html`, `discover.html`, `grow.html`, `market.html`, `autopilot.html`, `posts.html`, `profile.html`, `settings.html`, `saved.html`, `edit-career-data.html`, `vera.html`, `notifications.html`, `role.html`, `recommended-roles.html`
- Discover sub-pages (logged-in only, `data-page="discover"`): `discover-companies.html`, `discover-universities.html` — full "browse all" grids opened from the "More Companies" / "More Universities" links on `discover.html`. **These now intentionally share the exact same renderer and markup as the public `companies.html`/`universities.html` directory pages** (see "Directory / Card Component" below) — do NOT re-diverge them into separate implementations; that was the pre-refactor state and caused the two to visibly drift out of sync (different toggle size, card density, card content).
- Detail/drill-down pages (all `data-page="discover"`, all follow the `?id=`/`?org=`/`?role=` query-param convention rather than one static file per record): `company-profile.html` (`?org=` — renders both company AND university profiles, branching on `org.type`), `user-profile.html` (`?id=`, another person's profile — see "People / social" below), `job-detail.html` (`?role=`, Autopilot-matched roles only), `market-pulse.html` (no param — full Market Pulse list), `growth-move.html` (`?id=`, a single Growth "Recommended Growth" move's practice/course/essay content — see "Growth moves" below)
- Shared public/user styling: `enterprise.css`
- Directory browser styling: `directory-final.css`
- Feed styling: `feed-final.css`
- Profile styling: `profile-final.css`
- Explore page styling: `explore-final.css`
- Browser interactions and shared behavior: `app.js`

Every page should keep a `body data-page="..."` attribute. Many final CSS rules depend on it.

## Product Direction

CareerGo is an AI-guided career operating system. It should feel polished, useful, and editorial, not like a generic admin dashboard.

Core product surfaces:

- Today: daily career brief, Vera focus, tasks, applications, roles, long-term growth
- Discover: logged-in career discovery hub for roles, companies, universities, programmes, mentors
- Grow: coaching, milestones, interview prep, skill graph, highest-return learning moves
- Worth: career value, market benchmarks, ROI, scenarios, salary negotiation
- Pipeline: applications, follow-ups, relationship signals, weekly job-search momentum
- Feed: community learning feed and inbox-style messaging
- Profile: professional user profile and career data, based on the user design system

Vera should feel proactive. She is not only a chat box. The UI should make Vera feel like a coach that reads the user's profile, market, pipeline, and next move.

## Page Separation Rules

There are two different concepts that must not be mixed:

- `explore.html` is the public Jobs/Explore page for guests and marketing visitors.
- `discover.html` is the logged-in Discover workspace page.

The logged-in workspace nav item `Discover` must link to `discover.html`, not `explore.html`.

Likewise:

- Public `companies.html` and `universities.html` are directory browser pages.
- Logged-in Discover sections may link to those public directory pages only when the user explicitly chooses "Explore companies" or "Browse all universities".
- `grow.html` is not a profile page. It must remain the Grow coaching page.
- `profile.html` is the user profile page.

## Design System

Use the CareerGo cream/forest editorial design system defined by `CAREERGO_UI_SPEC.md`, translated to plain CSS below. This replaces the older slate/teal palette and wider spacing values previously recorded in this file.

### Colors

Brand palette:

- Ivory (page background): `#F7F3EA`
- Ivory deep (inset surfaces, monogram tiles): `#EFE8D8`
- Teal (primary action, links, focus ring, accents): `#1F5560`
- Teal soft (chips, Vera surface, accent backgrounds): `#C8DDDF`
- Aqua (secondary accent / highlight): `#A6CBD1`
- Forest (foreground text, dark primary surfaces): `#1B2E28`

Semantic tokens:

- Background: Ivory `#F7F3EA`
- Foreground / default text: Forest `#1B2E28`
- Card surface: pure white `#FFFFFF`
- Primary button bg / focus ring: Teal `#1F5560`
- Primary foreground (text on primary): Ivory `#F7F3EA`
- Secondary / muted surface: approx `#EEEAE0`
- Secondary / muted foreground: approx `#5B6A66`
- Accent (hover fills, subtle emphasis): Teal soft `#C8DDDF`
- Destructive / error: approx `#D6342A`
- Border / input border: approx `#E4DFD3`
- Focus ring: Teal `#1F5560`

There is no separate success/green token — success reuses Teal. There is no defined warning token; use `#E0B34A` until the spec defines one.

Interaction states:

- Ghost/link hover: text goes from muted-foreground to foreground (color change only, no background change).
- Filter chip hover: border tints toward Teal at ~50% + text goes to foreground.
- Active/selected chip or tab: Forest background + Ivory text.
- Disabled: `opacity: 0.5`, `pointer-events: none`. No color swap.
- Focus visible: 2px Teal ring with 2px offset from the background.

Note: the spec is silent on the diagonal gradients already built into this site (hero sections, dark priority surfaces, gradient CTAs) — it favors flat solid fills. Don't rip out existing gradients as a side effect of unrelated work, but new or rebuilt surfaces should default to the flat colors above.

### Typography

Two font families only:

- Fraunces (serif/display): headlines, page titles, section headings, large metrics, monogram initials. Letter-spacing -0.01em.
- Inter for everything else, including card titles (this is a change from the old rule — card titles are now Inter, not Fraunces).

Sizing:

- Hero title (landing hero only): Fraunces 400, 44px (52-56px desktop), line-height 1.05
- Page title (H1 on every route): Fraunces 400, 36px (44px desktop), line-height 1.05
- Section heading (card-group titles): Fraunces 400, 22-24px, line-height 1.1
- Card heading (company/role/university card titles): Inter 500, 14px, line-height 1.3
- Large metric (KPI values): Fraunces 400, 28-32px, line-height 1.05
- Body (default paragraph): Inter 400, 14px, line-height 1.5
- Small body (card descriptions): Inter 400, 13px, line-height 1.5
- Caption (metadata under titles): Inter 400, 12px, line-height 1.4
- Micro caption (chip counts, "Showing X of Y"): Inter 400, 11px, line-height 1.35
- Overline / eyebrow label: Inter 500, 11px, uppercase, letter-spacing 0.16em
- Button: Inter 500, 13px (sm) / 14px
- Nav link: Inter 500, 13px
- Tag / chip: Inter 400, 10-12px
- Badge (inline): Inter 400, 10px

There is no "Body large / 18px" tier anymore — use Body (14px) instead. Do not invent a size outside this list; pick the nearest row.

### Layout

- Max content width: 1240px (was 1200px)
- Page horizontal padding: 24px mobile, 40px desktop (1024px+)
- Section-to-section vertical spacing: 32-40px — never 64px+ (replaces the old "64px mobile, 80-96px desktop" rule)
- Card grid gap: 12px standard — do not widen to 16/24 "for breathing room"
- Sidebar-to-grid / major-section gap: 32px
- Default card padding: 16px (was 20px)
- Vertical rhythm inside a card (header/badge/meta/footer rows): 12px
- Header height: 64px (unchanged)
- Breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px
- Cards are content-driven height (`height: auto`) — never force equal-height rows or filler `min-height`
- Horizontal scroll is forbidden on every page; vertical scroll is expected
- Spacing scale — only use: 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96px

### Radius And Shadows

Radius scale: 6px (sm), 8px (md), 10px (lg/base), 14px (xl), 18px (2xl), 22px (3xl), 26px (4xl).

- Pill buttons / chips: full radius
- Standard cards: 18px (was 16px)
- Inputs / buttons: 8px (was 12px)
- Monogram tiles: 14px
- Hero/cover surfaces (company/university profile cover): 22px
- List rows: 8px

Shadow scale (replaces the old `--shadow-soft` / `--shadow-elegant` / `--shadow-lift` trio):

- Resting card shadow: `0 1px 2px rgba(0,0,0,.05)`
- Card hover lift: `translateY(-2px)` + `0 18px 40px -24px rgba(27,46,40,.35)` (Forest-tinted)
- Vera glow surfaces: `0 0 0 1px rgba(31,85,96,.15), 0 20px 60px -30px rgba(31,85,96,.5)`
- Never raise a resting card shadow above the single resting level above — the lift only appears on hover.

### Cards

- Base recipe: 18px radius, 1px border, white background, 16px padding, resting shadow. Width fluid in its grid column, height auto.
- Interactive cards get the hover lift (`translateY(-2px)` + lift shadow) with a 220ms transform/box-shadow/border-color transition.
- Every card should carry at least four discrete pieces of info (title, badge, meta, insight/footer) — a card with just a title is under-built.
- See `CAREERGO_UI_SPEC.md` §5 for per-card-type deltas (monogram tile 40px/14px radius, avatar sizes, badge/chip shapes) when rebuilding a specific card type.

### Buttons And Inputs

- Button heights: Primary/Secondary/Ghost/Danger 40px (32px `sm`, 44px `lg`); icon buttons 32×32px; text/link buttons 20px, no padding.
- Button radius: 8px. Button label: Inter 13-14px/500.
- Text field: height 40px, radius 8px, 1px border, 14px font.
- Pill filter chip: 30px height, radius full, 12px horizontal padding, 12px/400 label.
- Switch track: 36×20px, full radius; thumb 16px. Checkbox: 16×16px, 4px radius. Radio: 16×16px, full radius.

### Icons

`lucide` icons only, 2px stroke, never mixed with another icon set. Vera is always represented by her owl mark, never a generic sparkle/AI icon (sparkles are only a decorative "AI insight" cue inside card footers). Sizes: 12px inline meta icons in chips, 16px default button/input icons, 20px top-nav icons, 32px empty-state icons only.

### White Space And Density

- The premium feel comes from density and restraint, not extra whitespace.
- Never add vertical padding "for breathing room" — 16px card padding and 12px internal rhythm are final.
- Prefer horizontal chip rows over stacked lines for metadata.
- Aim for max information density per viewport; never insert filler height.
- Density reference: LinkedIn feed / Stripe dashboard / Linear inbox, not a spacious marketing page.

### Motion

- Default transition easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- Color/background transitions: 150ms. Card hover lift: 220ms transform + box-shadow + border-color.
- No page-transition animation, no parallax, no hero video.
- Honor `prefers-reduced-motion: reduce` — disable hover-lift transforms and shimmer/pulse animations, keep color transitions.

## Navigation Rules

There are two nav systems.

### Public Navbar

Used on:

- `index.html`
- `explore.html`
- `companies.html`
- `universities.html`
- `community.html`
- `login.html`
- `register.html`

This navbar should match `index.html`:

- Background: solid `#ffffff` (opaque, no blur) — **the same token as the logged-in workspace navbar**, deliberately unified again at explicit user request so both read as one continuous brand, but now specifically so the nav reads as a *distinct white surface* against the cream page body beneath it (previously a translucent cream tint matching the page body, which was itself an earlier explicit request — that rationale reversed). Both variants are governed by one shared, specificity-boosted rule block at the very end of `enterprise.css` (search "Navbar parity pass"). **Not covered by this rule**: the logged-in Employer OS nav (`workspaceTopNav()`'s `isEmployer` branch, no `.cg-workspace-tabs`/`.public-site-nav`) — it's a structurally different, simpler markup (brand + search + account menu, no tab list) and still resolves to a lower-specificity translucent-cream `.topbar` rule earlier in the file. Flagged, not fixed, pending a decision on whether the employer surface should match too.
- CareerGo logo image on the left, 34px tall
- Nav links: `Explore` (links to `explore.html`), `Opportunities` (links to `companies.html`), `Community` — Inter 500/13px
- No bold active-state styling
- Right actions: `Login` plain text and `Create Account` — a **compact pill** (36px height, `border-radius: 9999px`, 15px/500 label, trailing arrow icon), not a large rounded-rect button
- Shared markup should use `data-public-topbar` where present

Do not make `companies.html` or `universities.html` use a different active-bold public nav. They should visually match the homepage navbar. Do not add page-local `.topbar` overrides anywhere (including `directory-final.css`) — this navbar has drifted out of sync from page-local overrides multiple times.
- **Correction / trap**: the line above used to claim the "Navbar parity pass" block in `enterprise.css` is *the only* place `.topbar` gets styled — that's false, and trusting it caused the white-nav fix to silently miss the Feed page. `posts.html` also loads `feed-final.css`, which has its own `html body[data-page="posts"]:not(#_) .topbar { background: ...; }` rule. The `:not(#_)` is a deliberate specificity-inflation hack (negating a nonexistent ID selector gives the rule ID-level specificity — (1,0,0) — which beats *any* number of stacked classes, including the `.topbar.topbar.topbar` trick used in the parity-pass block). **Before trusting that the parity-pass block is authoritative for a given page, check every stylesheet that page's `<link>` tags actually load** (`grep '\.css' <page>.html`), not just `enterprise.css` — `feed-final.css` (posts.html only), `directory-final.css` (companies/universities/discover-companies/discover-universities), and `explore-final.css` (explore.html) are all real, and any of them can carry a same-or-higher-specificity override for a shared class like `.topbar`. If a background/style change to a shared component doesn't seem to be taking effect on one specific page despite otherwise-correct specificity math, search that page's other loaded stylesheets for the class name (and specifically for `:not(#_)`) before assuming the parity-pass rule is losing on ordinary specificity grounds.

### Logged-In Workspace Navbar

Used on:

- `dashboard.html`
- `discover.html`
- `grow.html`
- `market.html`
- `autopilot.html`
- `posts.html`
- `profile.html`
- `settings.html`
- `saved.html`
- `edit-career-data.html`
- `vera.html`

This navbar should match the current dashboard workspace style:

- CareerGo logo on the left
- Tabs: `Today`, `Discover`, `Grow`, `Worth`, `Pipeline`, `Feed`
- Active tab is a solid forest-green pill
- Search bar says `Ask Vera anything...` (no `⌘ K` hint pill — removed; typing here shows live search results, it does not open chat)
- Chat and notification icon buttons
- User avatar initials on the far right
- Sticky at the top when scrolling

Mapping:

- `dashboard.html` -> Today
- `discover.html` -> Discover
- `grow.html` -> Grow
- `market.html` -> Worth
- `autopilot.html` -> Pipeline
- `posts.html` -> Feed

The bell icon opens a shared dropdown (`notificationMenuMarkup()`) with a "View all" link to `notifications.html`, a dedicated full-page notification center. Both use `.cg-nd-*`/`.cg-notif-*` classes.

Profile/settings/saved/edit-career-data are account pages. Keep the same workspace navbar but do not invent new top-level nav labels unless the user asks.

## CSS File Roles

`enterprise.css` is the broad shared stylesheet. Most global visual language, nav normalization, page spacing, and public CTA colors live here.

`directory-final.css` loads on **all four** directory pages — `companies.html`, `universities.html`, `discover-companies.html`, `discover-universities.html` (its `:is([data-page=...])` selectors are scoped to `companies`, `universities`, and `discover`) — since discover-companies/-universities now render through the same `renderDirectoryPage()` function and the same `.cg-directory-*` markup as the public directory pages. It owns the directory/card component's actual sizing and content styling (hero, tabs, search, filter chips, card grid, tag colors, footer). Do NOT add `.topbar`/navbar overrides here — the public navbar (height, logo, nav-link typography, nav-inner width, CTA styling) is governed entirely by the shared `:has(.public-site-nav)` rules at the end of `enterprise.css`, so every public page stays in sync automatically. This file previously carried ~6 duplicate `.topbar` override blocks that caused companies.html/universities.html's navbar to visibly drift from index.html; they were removed during a navbar refactor. If the public navbar ever needs to change, edit the shared block in `enterprise.css`, not this file.

**Unexplained quirk:** the "Ask Vera" directory-card button's gradient fill/icon rules live in `directory-final.css`, not `enterprise.css`, even though `enterprise.css` had an apparently-correct, higher-specificity, verbatim-identical-pattern rule for it. That `enterprise.css` copy silently never applied — confirmed via Chrome DevTools Protocol (`CSS.getMatchedStylesForNode`) that it was absent from the browser's actual matched-rules list for the element, despite `element.matches(selector)` returning `true` in plain JS and the raw stylesheet text (fetched from Chrome itself) being intact and correctly top-level (not trapped in an unclosed `@media` block — checked). Root cause never found. If a similarly "should obviously work but doesn't" CSS mismatch shows up again in `enterprise.css` (a 25k+ line file), don't burn hours on it — move the rule to `directory-final.css` or a fresh, small, isolated block instead and verify with a screenshot; that has reliably worked.

`feed-final.css` styles `posts.html`.

`profile-final.css` styles **both** `profile.html` and `public-profile.html` — its page-scoped rules use `body:is([data-page="profile"],[data-page="public-profile"])` and the `.cg-up-*` component rules are unscoped, so the two pages share one visual language by construction. `public-profile.html` loads it *after* `enterprise.css` so it wins ties on source order. Do not re-fork these into two stylesheets; that divergence is exactly what made the public profile look like an abandoned earlier product.

`explore-final.css` loads after `enterprise.css` on `explore.html` and holds the page's hero, opportunity, and card-grid layout.

When fixing visual issues:

- Prefer adding or editing the final relevant CSS layer rather than scattering inline styles.
- Keep `data-page` selectors narrow.
- Avoid touching unrelated pages.
- Preserve existing HTML content unless the user asks for content changes.

## Directory / Card Component (companies, universities, and their Discover equivalents)

`companies.html`, `universities.html`, `discover-companies.html`, and `discover-universities.html` all render through **one shared function**, `renderDirectoryPage(kind)` in `app.js`, and one shared markup/CSS component (`.cg-directory-*` classes, styled in `directory-final.css`). There used to be a second, separately-maintained implementation for the Discover pages (`renderDiscoverOrgDirectory()`, `.cg-featured-org-*`/`.cg-org-*` classes) — it was deleted; do not recreate it. Page context (marketing vs. Discover) is handled by branching inside the one function on `document.body.dataset.page === "discover"`:

- Discover context gets a `← Discover` back-link in the hero and account-gating (`requireAccount()`); marketing context does not.
- Discover context's hero copy is personalized ("All companies." / "Every employer Vera is tracking..."); marketing context's is generic ("Career places worth knowing.").
- Discover context's category toggle uses real `<a href="discover-companies.html">`/`<a href="discover-universities.html">` links (full navigation); marketing context uses in-place `<button data-directory-kind>` toggling via URL hash. Both render inside the same `.cg-directory-tabs` markup/CSS, so `.cg-directory-tabs :is(button, a)` selectors are used throughout, not just `button`.
- Card content (What Stands Out, Signals with color-coded tags, description, footer) is otherwise identical everywhere.

Body attributes:
- `data-page="companies"` / `"universities"` (marketing) or `data-page="discover"` (Discover) — the workspace nav and account-gating both depend on this.
- `data-directory="companies"` / `"universities"` on **every** one of the four pages — `renderDirectoryPage()` reads this to know which catalog to show.

**Card footer pattern:** thin top divider, an open-roles/programme count on the left, and on the right: two 32px icon-only buttons (Reviews, Save) plus one visually-prominent "Ask Vera" pill (owl icon, brand gradient fill) — not three same-weight text pills. **Signals tag colors:** `directoryTagVariant(tag)` in `app.js` classifies each tag by keyword match into `.cg-tag-verified` (teal), `.cg-tag-choice` (gold), `.cg-tag-momentum` (aqua), or unstyled/neutral beige — extend that function, don't hardcode colors inline, if new tag types need coding.

Companies and universities should be browseable in the same visual system and separable via tabs/categories. Do not use a gold premier ribbon unless the user explicitly asks for it.

**The Discover homepage's "Featured Companies"/"Featured Universities" teaser (`#featured-companies`/`#featured-universities` on `discover.html`, `.cg-featured-org-card`) is a separate, intentionally-condensed component** — not the deleted second implementation described above, and not to be merged into `renderDirectoryPage()`. It's a 4-per-row preview (logo/name/category-location, verified checkmark, 1 signal tag, one Vera "why" line, "View company" button) that deliberately excludes "What Stands Out", the description paragraph, the icon row, and Ask Vera — those stay exclusive to the full `.cg-directory-card`. Its CSS (`enterprise.css`, `[data-page="discover"] .cg-discover-v2 .cg-featured-org-card`) hand-matches `.cg-directory-card`'s values (pill/badge/logo/shadow treatment) rather than sharing the `directory-final.css` stylesheet or class names, because that stylesheet's `[data-page="discover"]`-scoped `.btn-primary`/`--cg-primary` overrides would recolor unrelated buttons across the whole homepage if loaded there — match values by hand when you touch either side, don't let them drift.
- **Gotcha**: sourcing the teaser cards' data — `DATA.companies` (top-level, ~20 seed employers) does **not** contain setel/carsome/storehub/aerodyne/shell/etc. Those, plus the matching university IDs, only exist in `buildOrgCatalog()`'s merged `catalog` (`DATA.companies` + a local `extraCompanies`/`extraUniversities` list, deduped by id) — the same source the browse pages and `openOrgDetailModal()` already use. Looking a featured-card id up against bare `DATA.companies` silently returns `undefined` and the section renders empty; call `buildOrgCatalog().catalog` instead.

## User Profile Pages

Profile work should follow the user page design system:

- Cream/off-white page background
- Large Fraunces editorial headings
- White or soft cream cards with 18px radius
- Pastel teal-soft icon badges
- Two-column card grids where useful
- Portfolio/gallery cards may use teal grid-gradient preview surfaces
- Right sidebar cards are acceptable for professional circle, hiring proof, suggested next steps

There are **three distinct profile routes** — don't collapse or cross-link them wrongly:

- **`profile.html`** (`renderProfile()`) — the signed-in user's own full profile and the only place portfolio proof / experience / education / gallery items are *editable* (add, edit, delete, upload photo, Generate resume). Every "View profile" link anywhere in the app means **this** page.
- **`public-profile.html`** (`renderPublicProfile()`) — the same person rendered as an **external employer/recruiter** sees them. Same `cg-up-*` markup and stylesheet as `profile.html`, minus everything private (coaching notes, resume-readiness gaps, privacy toggles, Settings/Edit links, all edit/delete/add affordances), plus external CTAs (Request intro / Message / Save candidate / Share) and a `.cg-pp-contact` sidebar card. Reached from the "Public view" button in `profile.html`'s hero. It renders behind `requireAccount()` and carries a `.cg-pp-bar` preview banner, because in this MVP the only viewer is the owner previewing themselves — the employer actions therefore toast "inactive in your own preview" rather than faking a flow.
- **`user-profile.html?id=<personId>`** (`renderUserProfile()`) — a *different* person from `DATA.people` (social/networking: Follow, Add Friend, Message). Unrelated to the two above.

Historical trap: `public-profile.html` used to render a stale copy of the pre-v2 self-profile (`.cg-user-profile`), complete with "Edit career data" and "Settings" buttons and the user's own privacy toggles shown as public metrics — i.e. it looked like a simpler, older product. The original public-preview implementation was still in the file as dead code after an early `return;` (see the dead-code quirk below). Both are gone. `enterprise.css`'s old `[data-page="public-profile"]` blocks that targeted `.cg-user-profile` / `.public-profile-shell` remain but are inert (those classes are no longer rendered); the page was also removed from the `:has(.cg-workspace-tabs):is(vera, companies, universities, saved, …)` selector family and from the `:is([data-page="public-profile"],[data-page="settings"])` layout family, since `profile.html` was in neither and that mismatch is what made them diverge.

**Shared profile presenters** (defined just above `renderProfile()`): `ensurePortfolioShowcase()`, `educationMetaLine()`, `profileSkillPanels()`, `profileWhyHire()`, `profileActivityFeed()`. Both profile pages render the same person, so anything derived from profile data goes here or the two drift. These replaced hard-coded AI-engineer filler ("3 production LLM projects", "LLM apps / RAG", "Shipped Vera-Lite v0.4") that contradicted whichever persona was signed in. Note `portfolioProjects`/`portfolioGallery` have **no `normalizeState()` migration** (unlike `userRoles`/`educationEntries`), so whichever profile page loads first must seed them — that's what `ensurePortfolioShowcase()` is for, and why the public view is never emptier than the private one.

`edit-career-data.html` is for editing account, education, skills, goals, preferences, and Vera settings.
`settings.html` is for application/account settings.

## Feature Notes (so this can be picked up cold)

These are the major features layered on since the base spec above was written. Each one reused existing patterns/state conventions rather than inventing new ones — check the referenced function/constant in `app.js` before changing behavior in these areas.

### Market Pulse (`discover.html` → `market-pulse.html`)
- `MARKET_PULSE_CATEGORIES` / `MARKET_TONE_RAMP` (top-level constants in `app.js`) hold 8 market segments. `discover.html`'s "Market Pulse" preview slices the first 4; `market-pulse.html` (`renderMarketPulsePage()`) shows all 8 with filter/sort.

### Coach Vera vs. human Messages (topbar chat-bubble icon)
- The topbar chat-bubble icon (`.cg-message-trigger`, in `workspaceTopNav()`) is a plain `<a href="posts.html#messages">` — it goes straight to the human Inbox, no picker. It used to open a dropdown with "Coach Vera" / "Messages" (`bindChatMenu()`), but Coach Vera was removed from it since Vera is already one click away via the floating bottom-right bubble (`.cg-vera-trigger` / `openVeraPanel()`) — keeping it in both places was redundant. If you're looking for `bindChatMenu()`, `data-chat-menu-toggle`, or `hasUnreadVeraMessage()`/`updateVeraBubbleBadge()` (the old unread-Vera dot on this icon), they're gone — removed with the dropdown rather than left as dead code.
- Existing "Ask Vera" links (`a[href*='posts.html?topic=']`) are unaffected — they're still caught by the global click interceptor in `bindGlobalActions()` and open the Vera panel directly.
- These are two genuinely separate systems — don't conflate them: Coach Vera's AI conversations live in `state.veraConversations` (sidebar built by `veraVisibleConversations()`); the human Inbox lives at `posts.html#messages` (`humanThreads`, replies in `state.humanThreadReplies`).

### People search, profiles, and social actions
- `DATA.people` is the seeded people directory (8 entries) — built from names already referenced elsewhere (Inbox contacts + Discover's "Mentors" list), not invented.
- `searchWorkspaceCatalog()` / `renderSearchPanelContent()` have a "People" result group (workspace search only, not the public/guest search). `attachLiveSearch()` takes an optional third `buildDefaultHtml` arg — when the search box is focused but empty, it shows "Recommended for you" / "Recent searches" (`renderSearchDefaultContent()`, `recordPeopleSearchHistory()`, history in `state.peopleSearchHistory`).
- `user-profile.html?id=<personId>` (`renderUserProfile()`): Follow (`state.followingUsers`), Add Friend (`state.connectionStatus`), Message (navigates to `posts.html?person=<id>#messages`).
- `renderPosts()`'s `humanThreads` is generated from `DATA.people` (any person without a scripted conversation gets a stub empty thread that becomes real once a message is sent) — it is not a fixed 4-person array anymore.

### Growth: real Practice/Course/Essay content
- `GROWTH_MOVES` (top-level constant) replaces the old display-only tuples behind Grow's "Recommended Growth" cards with real per-kind content (Practice = SQL questions, Course = modules, Essay pack = draft/publish flow).
- `growth-move.html?id=<moveId>` (`renderGrowthMovePage()`) tracks progress in `state.growMoveProgress` and completion in `state.growMovesCompleted`. Completing a move applies a real stat bump (`growMoveCompletionBonus()`) to Grow's readiness/matching-jobs/pay numbers and skill-graph rows, computed from that move's own already-stated metric deltas (no separate invented scoring model).

### Per-page guided tours (v2 — anchored spotlight)
- **ONE engine for every page.** The old duplicate dashboard-specific engine is gone: `initDashboardTour()` is now a thin wrapper around `initPageTour("dashboard")`, and `tourStepsFor(pageKey)` returns `DASHBOARD_TOUR_STEPS` for `"dashboard"` else `TOUR_STEPS[pageKey]`. `state.guidedTour` has one key per page plus a global `introSeen`. (`getDashboardTourState`/`saveDashboardTour`/`showDashboardTourStep`/`removeDashboardTour`/`positionTourCard` were all deleted.)
- **Real spotlight, not a flat dim.** `.cg-tour-spot` is a positioned element that cuts a hole over the target using `box-shadow: 0 0 0 9999px rgba(dim)` + a white/teal ring. This replaced the old approach (raise the target with `z-index` above a `.tour-backdrop`), which could never work — a nested element's `z-index` can't lift it above a `<body>`-level overlay when an ancestor forms a lower stacking context, so everything dimmed uniformly. A transparent `.cg-tour-guard` below the spot blocks clicks; all three layers are `position:fixed` on `<body>` so no nesting can trap them.
- **Anchored popover that never covers its target.** `positionTourLayers()` tries right → left → below → above and takes the first that fully fits, drawing an arrow on that side. Full-width sections are the hard case (a tooltip can't fit beside one, and can't fit below a tall one): `tourAnchorRect()` caps the spotlight to the section's top ~300px band for WIDE targets (>0.6vw) and scrolls that band near the top. If even that fails (last section on a page that can't scroll higher), a constrained fallback picks the side with more room and caps `maxHeight`. **Reset that height cap before measuring each frame** or the capped height gets re-measured, a side then "fits", the cap clears, and the card oscillates back into overlapping.
- **Welcoming, not naggy.** Only the **Dashboard** tour auto-runs, once. Every other page shows a small dismissible "New here? Take the {label} tour" chip (`showTourLauncher()`, `.cg-tour-launch`, bottom-centre so it clears the bottom-right owl and bottom-left back-to-top) instead of force-opening an overlay.
- Vera's owl is now an avatar **on the tour card**; while a tour runs, `body.cg-tour-active` hides `.cg-vera-widget`/`.cg-vera-trigger`/`.home-back-top` (needs `html body.cg-tour-active …` specificity + last-in-file to beat the widget's own page-scoped positioning rule). Missing-target steps gracefully advance instead of dead-stopping.
- New class namespace is `cg-tour-*`; the legacy `.tour-card`/`.tour-backdrop`/`.tour-highlight`/`.tour-mission` rules scattered across `styles.css` + `enterprise.css` are now dead (that markup is no longer emitted).

### Live pipeline board (Pipeline page → Applications tab)
The board is the visual funnel for the app's real application store — **not a separate dataset**. It renders from `pipelineBoardData(state)`, which groups `getTrackedJobs(state)` (i.e. `state.applicationRecords`) into five columns via `PIPELINE_BOARD_COLUMNS`. So a role applied to *anywhere* (Discover, role.html, Dashboard top-pick, Autopilot auto-apply) appears here automatically, and every move made here shows up on those pages. Before this, the board rendered from a **hardcoded `pipelineColumns` array** disconnected from real state — that array is gone.

- **Five columns fold the seven `APPLICATION_STAGES`**: Saved ← `saved`; Applied ← `applied`+`screening`; Interviewing ← `interview`; Offer ← `offer`; Closed ← `rejected`+`archived`. **Closed only renders when non-empty** (`pipelineBoardData` filters it out otherwise). If you add a stage to `APPLICATION_STAGES`, map it into a column here or it silently vanishes from the board.
- **Saved cards are deliberately a different component from applied cards** (`pipelineBoardCardMarkup` branches on `column.kind === "saved"`): dashed teal, always-open, led by **Apply now**, no momentum/stepper — because there's no application to have momentum yet. Applied+ cards keep the collapsible momentum card and gain a stage stepper + the manual **Move** control. Don't unify them.
- **`pipelineMomentum(record)` is stage+recency, NOT match score** — a great role applied to 3 weeks ago with silence has low momentum. `pipelineMomentumStatus()` (strong/steady/slipping/stalled) still maps the number to a dot tone.
- **Manual move is the MVP backup for the (mocked) employer integration.** Every active card has "Move to <next>" (advance along `PIPELINE_FUNNEL`) and a "Move to…" `<select>` (any stage incl. Rejected/Archived), both calling `updateApplicationStage()`. The board header says "Employers move you as they review — or update any card yourself." If a real employer backend ever lands, that's what would drive stage changes instead.
- **The "+" buttons open `openAddToPipelineModal(stageKey)`** — a picker of every untracked role (from `DATA.jobs` + `AUTOPILOT_MATCHES`), dropping the chosen one into that column's stage via `updateApplicationStage`. They used to be `<a href="discover.html">` that just bounced to the top of Discover.
- `pipelineActiveStageIndex` (module-level, like `pipelineActiveTab`) remembers the open column across the re-render that every move/add triggers.
- **"View job" routing** (`pipelineJobHref()`): `ap-*` ids → `job-detail.html?role=` (`renderAutopilotJobDetail`, reads `AUTOPILOT_MATCHES`); everything else → `role.html?role=` (`renderRoleDetailPage` → `findRoleById`, resolves `DATA.jobs` + `RECOMMENDED_ROLES`). **Never link a single job to `discover.html?job=<id>`** — that param is only read by discover's dead legacy branch (`renderJobsPage`'s `workspace-jobs` code after the `isDiscoverPage` return), so it silently dumps the user at the top of Discover. The Saved page's job list (`renderSavedItems`) had the same broken link and was fixed to `role.html?role=` at the same time.

### Role-detail back navigation (`role.html`)
The back control (`roleDetailBackTarget()` + the `[data-role-back]` handler) returns the user to the page they came from, not a hardcoded "All roles".

**The reliable mechanism is `window.history.back()`, NOT `document.referrer`.** This matters because **CareerGo is routinely opened straight off disk as `file://`** (double-clicking the HTML files), and under `file://` `document.referrer` is *always* empty and `location.origin` is `"file://"`. An earlier referrer-only version of this fix passed every Playwright test over `http://localhost` but silently fell back to "All roles" for every real `file://` user — a textbook http-vs-file environment mismatch. `window.history` works under both protocols (`history.length` was 3 under `file://` in testing), and `role.html` adds no `pushState`/`replaceState` of its own, so the previous history entry is always the origin page and `back()` restores its scroll too.

- `document.referrer` is used **only to name the button** ("Pipeline", "Discover", "Saved", …) when it's available (http). Under `file://` it's empty, so the label is a generic **"Back"** — still returns to the right page, just unnamed.
- Hard `recommended-roles.html` "All roles" href is the fallback **only when `history.length <= 1`** (a genuine direct-open as the first navigation). For everything reached via an in-app click, `useHistory` is true.
- **Lesson: always test `file://` for anything touching `document.referrer`, `location.origin`, cross-page nav, or caching — `http://localhost` hides a whole class of bugs this app hits in real use.**
- The `ap-*` `job-detail.html` page keeps its fixed "Autopilot" back — it's only ever reachable from Pipeline, so that's always correct.
- **Demo seed** (`applyDemoAccount`) populates all columns: 2 saved, 1 applied, 1 screening, 1 interview, 1 offer (the offer is an `ap-*` Autopilot id, resolved by `getTrackedJobs` via `autopilotMatchAsJob`). It maintains the app invariant: `savedJobs` = every tracked id, `applications` = everything applied+.

### Autopilot Auto-Apply
- The Action Mode rule card's existing "Auto-apply" option (`autopilotRules.actionMode === "autoapply"`) is the real toggle — no separate on/off switch. New rule fields: `autoApplyThreshold` (default 85% match) and `autoApplyCap` (default 3/week).
- `runAutoApply()` decides eligibility via `autopilotAutoApplyEligibility()` and applies **once per page load** — see the "run-once guard" quirk below for why. Applied roles are tagged `applicationRecords[id].viaAutopilot = true`, logged to the existing Activity Log with an **Undo** button, and pushed to `state.notifications`.
- Undoing an auto-applied role adds it to `state.autopilotAutoApplyExcluded` so it isn't immediately re-applied to backfill the freed weekly-cap slot.
- `getTrackedJobs()` also resolves `AUTOPILOT_MATCHES` ids (via `autopilotMatchAsJob()`), so auto-applied roles surface through Dashboard/Pipeline like any other tracked application.

### Site footer (`renderSiteFooter()` in `app.js`)
Shared footer component — logo mark (image only, no separate "CareerGo" text; the logo image already has the wordmark baked in), tagline, Product/For Employers/Company link columns, two-sided bottom row. Rendered/removed per page via a `footerPages` Set inside the function — currently `["home", "community"]`. If asked to add/remove the footer from a page, edit that Set; don't reintroduce the old pattern of a separate `if (page === "home") {...}` branch with a second near-duplicate `else` branch for other pages — that was dead code (see the "dead code after an early `return`" quirk above) once `footerPages` no longer had more than one entry, and got deleted.

### Onboarding / Create Account wizard (`onboardWizardChrome()` in `app.js`)
Shared header used by all 4 register.html steps and the employer-onboarding equivalent: logo left, step-progress bar + "Step X of 4" label truly centered in the bar (via `position: absolute; left: 50%; transform: translateX(-50%)` on `.cg-onboard-progress-group`, relative to `.cg-onboard-topbar` — NOT via CSS Grid centering, which looked centered but wasn't, since the logo and "Log in"/"Save & exit" side content have different widths and threw off a naive `1fr` middle column), "Log in"/"Save & exit" right. `.cg-onboard-progress` bar is a fixed `320px` (not a percentage — a percentage width inside the shrink-to-fit flex column collapsed the bar to ~55px in a real, since-fixed bug). `.cg-onboard-btn-primary` (Continue/Create account) is a full pill (`border-radius: 9999px`).

### Login page (`login.html`, static HTML)
Both panels (`.login-story-card`, `.login-form-card`) are flat `#FFFFFF` with a shared border/shadow — no gradients on either. Both use a `CAREERGO` eyebrow label above their headline (the right panel used to say "WELCOME BACK" above "Welcome back." — redundant; changed to match the left panel's `CAREERGO` eyebrow instead). See the "bare `main` gradient" quirk above for the root cause of this page's earlier background-seam bug.

### University profile enrichment
- `company-profile.html` (which renders both company and university profiles) has a working back button (was hardcoded to "Companies" regardless of org type) and 5 university-only sections — Faculties, Graduate Outcomes, Entry Requirements, Campus, Alumni. Each is gated on the underlying data actually existing (e.g. Entry Requirements only renders for the universities that carry a `.requirements` object) — don't assume every university has every section.
- **`org.externalUrl`** (optional, on `DATA.companies`/`DATA.universities` entries and `buildOrgCatalog()`'s `extraCompanies`/`extraUniversities`) is the org's own external site — a company's careers/hiring page, or a university's admissions page. Rendered as a "Careers page"/"Admissions page" row (label switches on `isCompany`) at the bottom of the `.cg-cp-glance` sidebar, `target="_blank" rel="noopener"`, only when the field is present — most orgs don't have it populated yet (only a representative subset: Maybank, Grab, Petronas Digital, Shell, Setel, Carsome, StoreHub, Aerodyne, University of Malaya, Monash Malaysia, Sunway), and that's intentional, not an oversight — don't backfill the rest speculatively without checking with the user first, since the URLs are best-effort real-world guesses, not verified.

### Workspace nav hover-dropdown section jump links
- Discover, Grow, Career Value ("Worth"), and Pipeline nav tabs each carry a hover/tap dropdown listing that page's actual content sections, so users can jump straight to one instead of scrolling. Dashboard ("Today") and Feed intentionally have no dropdown — they aren't section-shaped the same way.
- `NAV_SECTION_MAP` (top-level constant in `app.js`, just above `workspaceTopNav()`) is the single source of truth for which sections appear per nav key — it's a static list, not derived from the live DOM, since a page's dropdown must render while the user is on a *different* page. Pipeline resolves via `NAV_SECTION_MAP.autopilot[pipelineActiveTab]` (Applications and Autopilot tabs have separate lists; Follow-ups tab is not yet in scope — was flagged as section-shaped but never approved/built).
- Markup: `workspaceTopNav()` wraps dropdown-enabled tabs in `.cg-nav-item-wrap` (chevron toggle + `.cg-nav-dropdown` menu); `bindWorkspaceNavDropdowns()` (called from `renderNavigation()`) wires hover, toggle-click (for touch, no hover state), same-page scroll vs. cross-page navigate-then-scroll, click-outside-close, and Escape-close. CSS lives in the specificity-boosted nav-override block at the end of `enterprise.css`.
- Each in-scope render function (`renderJobsPage`'s Discover branch, `renderGrow`, `renderMarket`, `renderAutopilot`) has its own post-render hash-scroll check, since content is JS-rendered after page load — a plain browser `#hash` fires before the target element exists in the DOM. Pipeline keeps its hash arrays split by tab (`pipelineApplicationsHashTargets` vs. `autopilotHashTargets`) rather than merged, because the same array also drives `pipelineActiveTab` auto-switching.
- **The pill lives on `.cg-nav-item-wrap`, not the `<a>` inside it.** The label and chevron render as one visual unit (chevron rotates 180° when open) with the wrap's `background`/`color` driving the highlighted state; the inner `<a>` and `.cg-nav-dropdown-toggle` are transparent and inherit color. Only one nav item is ever highlighted at a time — the current-page tab shows the pill by default, but a `:has()` "engaged" check (`.cg-workspace-tabs:has(.cg-nav-item-wrap:hover, ...)`) suppresses it the instant a *different* tab is hovered/opened, so you never see two dark pills at once.
- **Hover-close has a ~220ms grace period, not raw CSS `:hover`.** `bindWorkspaceNavDropdowns()` adds a JS `.hover-open` class on `mouseenter`/`mouseleave` (per-wrap `setTimeout`, cancelled on re-entry) so the dropdown survives the pointer crossing the visual gap between the pill and the panel below it. The CSS reveal selector ORs together `:hover`, `:focus-within`, `.hover-open`, and `.is-open` — raw `:hover` is kept too as a redundant instant-open signal, but closing is controlled by the JS timer via `.hover-open`.
- **Quirk to watch for #1**: the dropdown's CSS reveal rule includes `:focus-within`, so if you touch the close logic again, remember that clearing the JS `is-open`/`hover-open` state alone isn't enough while the toggle button still has keyboard focus — the Escape handler must also blur the focused element, or the menu stays visually open despite the state being "closed."
- **Quirk to watch for #2**: don't add `visibility` to the `.cg-nav-dropdown` transition list. It was tried once — animating `visibility` stacks an extra ~140ms *after* the JS close timer before the dropdown actually reports `hidden`, which reads as sluggish and broke a timing-sensitive test. `opacity: 0` + `pointer-events: none` already fully hide/disable it; only `opacity`/`transform` need to transition.
- **Quirk to watch for #3**: a real mouse swipe (or Playwright's `.hover()`, which interpolates through intermediate points rather than jumping) crossing intervening nav items on the way to a farther one will make each of those items flash the pill and fade out via the grace-period timer — this is expected/harmless (same behavior most mega-menus have), not a bug to chase.
- New/rebuilt sections on these 4 pages should get a stable anchor `id` and a `NAV_SECTION_MAP` entry with a fixed kicker/label (not a literal dynamic heading) if they're a legitimate jump target; sections without real standalone headings, or KPI/stat strips, are intentionally left out of the dropdown.
- **Career Paths lives on Grow now, not Discover.** It was relocated (section + `NAV_SECTION_MAP` entry both moved from `.discover` to `.grow`) to sit between "Your growth journey" and "Interview Coach" — Discover no longer has a Career Paths section at all, freeing it to focus purely on roles/companies/universities/programmes/mentors. If you see `roleDirections`/`careerPaths`-shaped data, it's rendered inside `renderGrow()` (`.cg-grow-paths`, `id="career-paths"`), not `renderJobsPage()`.

### "View company/university" preview modal (`openOrgDetailModal()` in `app.js`)
- One shared function/markup (`.cg-org-detail-modal`) opens from every entry point — Discover homepage teaser cards, the full browse-page directory cards, and (indirectly) anywhere else that calls it — so a fix here always applies everywhere at once; there is no separate university variant to keep in sync.
- It's a **preview**, not the full page: at most 3 open roles (`openRolesForOrg(org).slice(0, 3)`, with a "+N more - view the full profile" line), 1 bullet each for highlights/watchouts (with a "+N more in full profile" hint), and no reviews list at all — the rating row's "N review signals" text plus "View full profile" are the only review surface in-modal. The complete lists only exist on `company-profile.html`.
- Only **one** "Ask Vera" button exists now, next to the "Open roles" heading (`.cg-org-detail-roles-head`) — not one per role. Per-role actions are lightweight text links (`.cg-org-detail-role-link`): real, job-backed roles (`role.real`, opens `openApplicationDetailsModal()`) say "View role →"; placeholder roles (no `job.id`, just a title from `OPEN_ROLE_POOL`) say "Ask Vera →" and route through the same per-topic Vera prompt as before, just restyled off the heavy `.btn.btn-primary` pill.
- Button hierarchy: "View full profile" is `.btn-primary` (solid, the one primary action); "Write a review" is `.btn-ghost` (outline) — it used to be `.btn-primary` too, which read as two equally-weighted CTAs.
- **Cross-page consistency of the shared modal is a real trap** — the markup is one thing but its look forked by which page opened it, because `directory-final.css` loads on the 4 directory pages (`companies` / `universities` / `discover-companies` / `discover-universities`) but NOT on `discover` / `dashboard`. Two symptoms were fixed by pinning the treatment in `enterprise.css` regardless of page: (1) the `.cg-directory-logo` initial tile was pale mint on discover/dashboard (base rule) but teal on directory pages — the base rule is now the teal gradient + white too, so it's teal everywhere; (2) "Write a review" (`[data-write-review]`) rendered as a dark-green primary fill on the directory pages — a high-specificity `html body .cg-org-detail-modal .cg-org-detail-rating button[data-write-review]` rule pins the white outline everywhere. If the modal ever looks different between a directory page and discover/dashboard, this split is why.
- **University preview enrichment** (`universitySection` inside `openOrgDetailModal`): universities were much thinner than companies (companies show an Open-roles list; universities showed only rating + score bars + pros/cons). They now get a middle section: a **fit/highlight line**, a **graduate-outcomes facts row** (employment % parsed from `org.salary`, intakes, community size), and the **student-relevant part** — a per-user **eligibility match** via `universityRequirementChecks(uni, profile)` (met/gap/info against the signed-in user's education level, CGPA, English), with a "Full checklist" drill-down to `openUniversityRequirementsModal`. Universities without `requirements` data (the many catalogue-only ones in `buildOrgCatalog`'s `extraUniversities`, e.g. IIM/ASB — several of which sort to the TOP of the guest list) fall back to a **"Known for"** block (specialism tags + summary) so no preview is ever bare.
- **Eligibility is gated on `session.loggedIn`, NOT on `readState().profile`** — this was a real privacy bug. A logged-out visitor's `readState().profile` is not empty; it's whatever persists in `localStorage` (often the demo persona from an earlier session), so an ungated match rendered "Your eligibility 2/4 matched — Your CGPA 3.42 is below this" to a guest. Signed-in → personalized match + "Why it fits you"; logged-out → neutral "Entry requirements" list (the university's own requirements, no per-user status/count) + a "Sign in to match" prompt, and the fit line's label becomes "Highlight" with a neutral `org.signal` value (never "Your alma mater"). **Any future per-user content in this shared modal must branch on `loggedIn`, not on whether a profile happens to exist in state.**

### Notifications (bell dropdown + `notifications.html`)
- Data model: `{id, type, title, body, icon, ts(ISO), read(bool), href}`. `pushNotification(state, note)` is the ONE way to add a notification (stamps `ts`, dedupes by id, no cap — the dropdown itself slices to 5). `relativeTime(ts)`, `markNotificationRead(id)`, `markAllNotificationsRead()`, `dismissNotification(id)`, `notificationRecencyBucket(ts)` (Today/This week/Earlier). `readState()`'s normalizer upgrades any legacy `{id,title,body}` shape automatically.
- Typed event catalog drives icon + tone: `interview`, `recruiter`, `autopilot`, `application`, `worth`, `network`, `growth`, `vera` (keeps the owl mark, never a generic icon), `role`. See `NOTIFICATION_TYPE_ICON`.
- Dropdown (`notificationMenuMarkup()`/`notificationRowMarkup()`/`notificationBadgeMarkup()`, shared by candidate + employer nav branches): ONE continuous panel (`.cg-nd-panel`) with flat rows (`.cg-nd-item`, flexbox — see quirk below), unread dot on the left, soft circular per-type icon badges (shared `.notification-icon` class, also used on the full page), "Mark all read", understated footer (tagline + plain "View all" link, not a pill).
- `notifications.html` (`renderNotificationsPage()`): All/Unread tabs, Today/This week/Earlier grouping, "Load older" pagination, per-item mark-read/dismiss. Does NOT call `veraWidgetMarkup()` — the owl widget was deliberately removed from this page (see quirk below for why).
- Seed data (`seedNotifications()`) is realistic and specific ("Grab PM interview confirmed", "Autopilot found 8 new matches") — never add generic "System message"-style seeds again.

### Roles/Jobs unification + `role.html` detail page
- ONE unified role card component, `roleCardMarkup(role, opts)` (`.cg-role-unit` classes: dark-green-turned-teal avatar, numeral + "MATCH" label, why-line, optional tag chips, View role + compare/save icon buttons) — used on Dashboard, `recommended-roles.html` ("All Roles" browse page, search + filters), and Discover's "Roles worth your week" horizontal rail (`.cg-role-rail`). Pass `{compact:true}` for the condensed variant (`.cg-role-unit-compact`) used in "Similar roles" rails. Pass `{chips:false}` to hide the tag row.
- `normalizeRole(role)` adapts both `DATA.jobs` (rich: description/skills/why/caution) and `RECOMMENDED_ROLES` (match/mode/warmIntro/insight, different shape) into one shape; `allNormalizedRoles()` merges + dedupes both catalogs. `findRoleById(id)` / `findOrgByName(company)` (cross-links to the org catalog for the "View company" mini-card).
- Role detail is a dedicated PAGE, `role.html` (`?role=<id>`, `renderRoleDetailPage()`), NOT a modal. `goToRole(id)` navigates there from JS. Two-column layout built with FLEXBOX (`.cg-role-page-grid`: main `flex:1 1 0`, sidebar hard `flex:0 0 320px`, sticky) — see the CSS-grid quirk below for why grid was abandoned here. Sidebar (Vera Match/Salary/Work Mode/Quick apply/Save/Compare/Ask Vera) is intentionally untouched by later content-only changes.
- `generateJobPosting(role)` (paired with `roleContentCategory(title)`: design/analyst/research/advisory/pm-default) synthesizes a full plausible posting — About (2 paragraphs), "What you'll do" responsibilities, must-have/nice-to-have requirements split, benefits chips — from the role's existing fields. Mock content only, no real job-posting data source exists.
- Compare: `state.comparedJobs` (max `MAX_COMPARE_ROLES = 3`), `toggleRoleCompare(id)`, a floating `renderCompareTray()` bottom bar, `openRoleCompareModal()` side-by-side view.
- Currency: `convertSalaryToRM(salary)` (`USD_TO_RM = 4.7`, keeps "k" magnitude) converts any `$Xk` string to RM — called AT RENDER TIME inside functions, never inside a top-level `const` initializer (see TDZ quirk below). CareerGo shows RM everywhere; a non-Malaysian listing may deliberately keep its own local currency (e.g. explore.html's Jakarta/Shopee listing stays in IDR) rather than force RM onto a market where RM wouldn't be realistic.
- **Salary unit policy: every job/role salary is MONTHLY and carries an explicit `/ month` label.** This is enforced at the DATA SOURCE (`DATA.jobs`, `RECOMMENDED_ROLES`, `AUTOPILOT_MATCHES`, `DATA.candidates` all store `"RM 6k - 8.2k / month"`-style strings) rather than at ~12 display sites, so every card/detail/compare/pipeline/search surface is monthly automatically. Annual figures were divided by 12 when this was standardised. **If you add a role/job fixture, store it monthly + labelled.** Deliberately NOT monthly: Market Pulse "trending careers" (`MARKET_PULSE_CATEGORIES`, aggregate market benchmarks, explicitly `/ year`), the public `EXPLORE_FEATURED_ROLES` marketing list (mixed USD/IDR/RM global roles), and org/company `.salary` bands (already `/ month`). The two autopilot parsers were reconciled to monthly at the same time — `autopilotAssessJob` no longer annualises the user's rule, and `autopilotMatchSalaryMax` is now both "k"-aware and comma-aware (it previously read `"RM 14k"` as 14 and split `"5,500"` into 5 and 500, so nearly every role was wrongly flagged under-salary).
- Company-initial avatars sitewide (`.cg-role-unit-avatar`, `.cg-role-page-avatar`, `.cg-directory-logo.small`, explore.html's Featured Opportunities) use the teal-green gradient `linear-gradient(145deg, #087a68, #0b3444)` with white text — both `color` AND `-webkit-text-fill-color` need `!important` or the letter silently renders dark (see quirk below).

### Onboarding depth (5-step wizard, mock-data prefill)
- `ONBOARD_WIZARD_STEPS = 5` (was 4). Talent flow adds a "Let's build your living portfolio" substance step (name/headline/education/skills/salary/work-type/availability + resume-upload-or-"Build with Vera" prefill + live preview) before Meet Vera; employer flow adds an equivalent company-branding step. `onboardPreviewCard(mode, data)` is the shared live-preview component (dark-green gradient card, light text) for both.
- **Demo/hackathon convenience:** `seedMockCandidateProfile(profile)` / `seedMockEmployerProfile(state)` populate a brand-new signup with a complete, realistic, fully-editable demo persona so a user can click straight through onboarding without typing anything first. Called from `renderCreateAccountWizard()`'s submit handler. Register step-2's email/password inputs also carry default `value=` attributes so the browser's native `required` validation doesn't block a no-typing click-through.
- **ONE demo persona sitewide: "Mira Tan"** — Operations Executive (marketplace ops) switching into Product Analyst, Petaling Jaya, Universiti Malaya, `mira.tan@email.com`. The signup prefill previously used a *second, unrelated* persona ("Aisyah Yusof," fresh CS grad), so a user who completed signup then landed on a Dashboard/Profile showing a completely different person. `seedMockCandidateProfile()` and `createDemoProfile()` must stay in sync. The persona's literal strings are duplicated across the resume-parse-simulation prefill, a headline placeholder, and the register email default — **grep the name/school/role verbatim, not just the seeding function**, before considering a persona edit complete. (The employer demo session uses a separate name, "Priya Menon", so an employer account never shows a candidate's name.)
- Login (`login.html`, genuinely static HTML, wired by `wireStaticLoginForm()` — NOT `renderAuth()`/`renderLegacyLoginAuth()`, an older, unused-by-this-page function with its own separate role-card selector) has a candidate/employer `.login-role-toggle` reusing `normalizeAuthRole()`/`getInitialAuthRole()`/`persistAuthRole()`. `applyDemoEmployerAccount(state)` is the employer counterpart to the candidate-only `applyDemoAccount()` for the empty-fields judge-preview shortcut.

### Career Value page (`market.html`) — range framing, not false precision
- **Career value is a RANGE, never a single exact figure.** The hero keeps `RM 8,300–9,800 / month`; the Dashboard's "Career worth" KPI shows `RM 8.3–9.8k` + "Monthly range · trending up" (it used to show a disconnected exact `RM142k`). One source-of-truth model everything traces back to: today ≈ **RM 8,900**, market range **8,300–9,800**, 6-month roadmap target **RM 10,200**, growth **+5%/month, +13% since Oct**, confidence **72%**, negotiation ask **RM 10,300**. The **Growth page's "Estimated pay" KPI** (`renderGrow()`) is part of this model too — it shows the same `RM 8.3–9.8k` range with a `↑3%` (not exact-ringgit) delta, and still shifts with `moveBonus.pay` when a growth move completes. Don't reintroduce a lone exact figure on any of these surfaces.
- **Density rule: no box shows more than ~2 primary numeric values.** Value Growth is a momentum block (big "+5% this month", a no-axis `momentumSparkline()`, and *qualitative* events with **zero per-event RM figures**) — it replaced four near-identical exact RM cards. Salary negotiation leads with the slider as hero (range + "Fair" tick + ask handle); the old 3-box Expected/Fair/Suggested grid and confidence donut are gone, confidence is a small chip.
- **"Top value drivers" keeps its ORIGINAL layout** — donut/pie (3-colour green/blue/amber ring via `worthDriverPie()`) + the Market pulse / Peer review / Mentor input breakdown **inline and always visible**. A weight-bar + collapsed `<details>` "Where this value comes from" variant was built and then **explicitly rejected by the user** — do not re-suggest hiding that breakdown behind an expander.
- The Career Value Timetable was re-baselined to end at **RM 10.4k (+17%)** at Month 6 (was 12.1k/+36%) so it matches the stated roadmap target instead of reading as an exaggerated hockey-stick. Keep chart endpoints consistent with the model above.

### Resume generator (`openResumeModal()` / `buildResumeMarkup()`)
- **Composes from the user's WHOLE profile + career data**, deterministically (MVP has no AI/API — "generation" is composition, not model output). Reads `profile.*` **and** the structured stores `state.userRoles`, `state.educationEntries`, `state.portfolioProjects`. Historically it read *only* `profile.*`, so structured jobs/education a user added on the Profile page were invisible to their resume.
- **`profile.experience` is a dead field — never written anywhere.** Don't use it. Experience lives in `state.userRoles`, education in `state.educationEntries`.
- Schema (migrated non-destructively in `normalizeState` via `normalizeUserRoles()`/`normalizeEducationEntries()`, helpers `splitDateRange()`/`bodyToBullets()`): roles gained `location`, `startDate`, `endDate`, `bullets[]`; education gained `location`, `graduationDate`. **Legacy `date`/`body` are still written on save** because the profile experience cards and `openExperienceRoleModal()` read them — dropping them blanks those cards.
- `buildProfessionalSummary()` composes a third-person 2–3 sentence summary (identity + years/domain + first quantified metric found in bullets + top skills + target). The old summary piped `background.reasonForCareerGo` straight through, which is stored first-person ("I want a clear path into…").
- Section order matches the ATS reference: Header / Summary / Skills (Technical + Core) / Experience / Projects / Education / Certifications / Languages. **ATS constraints:** single column, no tables or images carrying text, no icons as labels, Georgia (name) + Arial (body), real text headings. Job-tied metrics belong in that role's bullets; the standalone Achievements section is only for awards not tied to a job.
- `resumeReadiness(state)` gates the Generate-resume button (disabled + hint), renders a checklist in the modal, and shows a prompt in Edit Career Data. **Verify PDF text is selectable by checking the PDF for `/ToUnicode` CMaps + embedded fonts**, not by eyeballing it.
- Note the field traps: `background.previousRoles` is only written by the Profile form (NOT Edit Career Data), and `skills.workExperience` is written by **no form at all** (demo-seed only) — both pages merely show it as a read-only fallback placeholder inside the `previousRoles` textarea.

### Search handoff (Discover / nav "Ask Vera" → Roles)
- Search must never dead-end. `attachLiveSearch()` only renders the inline preview panel and `preventDefault()`s — it never navigates — so any search form ALSO needs its own submit handler. The nav "Ask Vera anything" box was broken for exactly this reason (an `if/else-if` gave the Vera variant the dropdown wiring *instead of* the navigate handler, so Enter silently did nothing).
- Job results in the dropdown link to `role.html?role=<id>`; a "View all roles matching …" row links to `recommended-roles.html?q=<query>`, which is the page that actually consumes `?q=`. `discover.html` does **not** read `?q=` on load.

### Edit Career Data (`edit-career-data.html`) — two-column workbench
- Layout is a sticky 262px rail (`.cg-edit-rail`) + card column. The rail holds a **computed** profile strength, a section nav with per-section `done/total` counts, and (when incomplete) the resume-gaps block. It was previously a full-width "82%" band above a single 8-card column — one hard-coded number and ~7 screens of scroll with no wayfinding.
- **Profile strength is real**, not a constant: the `sections` array in `renderEditCareerData()` lists each section's underlying `profile.*` values, and strength = filled/total across all of them. Adding a field to a card means adding it to that section's `values` array too, or the count silently lies.
- Section nav uses anchor scroll (`-110px` offset for the sticky topbar) plus an `IntersectionObserver` scroll-spy with `rootMargin: "-120px 0px -65% 0px"`. Cards carry `id="sec-<id>"` **and** `data-edit-section="<id>"` — the nav uses the first, the spy the second.
- **Comma-separated list fields render as tag editors** (`tagFieldMarkup()` / `wireTagFields()`), replacing ten ~96px-tall empty textareas. The chips are cosmetic; the value the form submits lives in a sibling `<input type="hidden" name="…">`, so the submit handler still just reads `form.get(name)` and splits on commas. **If you add a new list field, use `tagFieldMarkup()` and keep the hidden input's `name` identical to what the submit handler expects.** Enter/comma commits, Backspace-on-empty deletes the last chip, blur commits any pending text.
- The save bar is `position: sticky; bottom: 14px` and flips to a "Unsaved changes" state via `data-dirty` on the first `input`/`change` event. The hero's duplicate Save button was removed — one save affordance, always reachable.
- The Security/password card is **last** and visually quieter (`.cg-edit-card-quiet`); it sits inside the same `<form>` but its fields are never read by the submit handler, and its own button says so.

### Settings (`settings.html`) — same workbench as Edit Career Data
Deliberately built on the identical sticky-rail + card-column shell so the two account pages read as one product. New `cg-set-*` namespace; the old `.cg-settings-*` rules are still in `enterprise.css` but **inert** (those classes are no longer rendered) — same disposal pattern as the old public-profile rules, chosen over surgery because the settings CSS was interleaved with the dead `.cg-profile-*` rules across 139 lines.

- **The old four summary tiles are gone.** Three of them restated a control 300px further down the same page (Privacy/Vera memory), and the fourth ("Notifications — Digest + reminders") described settings that **did not exist anywhere in the app**.
- **Notification preferences are now real state**: `profile.notifications` (`weeklyDigest`, `interviewReminders`, `roadmapNudges`, `employerActivity`, `productUpdates`), defaulted in `createEmptyProfile()` and merged in `normalizeProfile()` so existing saved states migrate non-destructively. They are preference storage only — nothing filters the bell feed by them yet.
- **One form, one save.** Privacy and Vera used to be two cards with two separate submit buttons; they're now one `<form id="settings-form">` with a sticky save bar and the same `data-dirty` treatment as Edit Career Data. Any `<button>` added inside these cards **must** carry `type="button"` or it silently becomes a submit.
- **Visibility governs employer discovery.** `Private` forces the discovery toggle off, disables it, and shows a locked note; the submit handler re-applies the rule (`visibility !== "Private" && checked`) so it can't be bypassed. A `discoveryMemory` variable restores the user's prior choice if they switch to Private and back — without it, the round-trip silently discarded the setting. The demo profile used to seed `Private` + discovery `true`, which is contradictory and visibly leaked (public-profile said "Live to employers" while Settings said "Private"); it now seeds `Visible to employers`.
- **Sign out and Clear local demo data live here.** Clear-data was previously reachable *only* from a line of small print on the register page, which is why it was once impossible to find. It goes through `openConfirmModal()` then `localStorage.removeItem(STORE_KEY)`. Sign out is wired **locally**, not by calling `bindGlobalActions()` — that function also registers a `document`-level click listener and would double-bind it on every re-render.

### Section nav + scroll-spy (used by both account pages)
Both pages pair anchor-scroll nav links with an `IntersectionObserver`. Two non-obvious requirements, learned by testing rather than reading:
1. **Set `.active` on click, not only from the spy.** A section near the bottom of a short page can never scroll into the observer's band, so the last nav item would never highlight.
2. **Lock the spy during the smooth scroll** (`navLockUntil = Date.now() + 900`). Without it, the sections that pass through the band mid-scroll overwrite the class you just set on click — the click-set fix alone does nothing.

## Known Codebase Quirks

### "Dead code after an early `return`" — a recurring trap
`renderMarket()`, `renderGrow()`, and `renderAutopilot()` each contain a large block of **orphaned, unreachable legacy code** sitting after an early `return;` inside their `if (state.session.loggedIn) { ... }` block — leftovers from an earlier redesign that were never deleted. Anything appended *after* that `return` silently never runs (no error, no warning — it just never executes). This exact mistake was made and caught 3 separate times in one session (a scroll-into-view call, a tour-init call, an Auto-Apply hook). **Before adding a call to the end of one of these render functions**, grep the function body for `return;` and confirm what follows isn't a second, near-duplicate implementation — put your new code before the real `return`, not after it.
- `renderJobsPage()` has the same trap, worse: after `if (isDiscoverPage) { ... return; }`, everything from `if (state.session.loggedIn && document.body.dataset.page === "workspace-jobs") { ... }` onward (roughly the next 600+ lines — an entire second `.cg-discover` hero/search/path-card/program-card implementation, pre-dating the current `.cg-discover-v2` one) is dead. `renderJobsPage()` only ever does anything on `discover.html` (the only page with a `[data-jobs-page]` element), and that page's `data-page` is always `"discover"`, so `isDiscoverPage` is always true and the `workspace-jobs` branch can never be reached. Also dead: the standalone `discoverPathCard()`/`discoverProgramCard()` functions — defined, never called from anywhere. A text-based find/replace across `app.js` (e.g. an icon swap) can silently "succeed" against this code with zero visible effect — after any such sweep, verify each hit landed in a function/branch that's actually reachable, not just that the edit applied cleanly.

### Cache-busting
Every HTML file loads `app.js`, `enterprise.css`, and (where used) `styles.css` / `directory-final.css` / `explore-final.css` with a `?v=YYYYMMDDHHmm` query string — some files were missing a version param entirely at various points (e.g. `index.html`'s `enterprise.css`, several pages' `styles.css`) and just serve whatever's on disk; add one if editing a file that lacks it. After editing **any** CSS/JS file, bump its version string across **every** HTML file that references it in one pass before testing in a browser — a stale query string means the browser serves the cached old file and edits will appear not to have worked. Check with `grep -o '<file>\?v=[0-9]*' *.html | sort -u` first — this codebase has repeatedly ended up with two or three different version numbers in play across different files after a partial bump. `app.js` and `enterprise.css` are kept in lockstep at the SAME version number across all pages (bumped together every time either changes, even if only one actually changed) — simpler than tracking them separately. (As of the 2026-07-23 `employer-integration` merge, every page's `styles.css` reference carries a version param too — the previous gap on a handful of public/employer pages that loaded a bare, unversioned `styles.css` was closed as part of that merge's cache-bust pass.)

### A bare `main { background: ... }` rule with a per-page exclusion list
`enterprise.css` (~line 976) has an unscoped `main { background: linear-gradient(...) !important; }` that applies to every `<main>` element site-wide, with a second rule immediately below it (`html body:is([data-page="dashboard"], ...) main { background: none !important; }`) that opts specific pages back out. **Any new page whose `<main>` shouldn't show that gradient must be added to that exclusion list** — `login.html` was missing from it and had a second, independent background layer nobody had traced (its own `body[data-page="login"]` background had already been fixed once; the `<main>` gradient underneath it was a separate bug found only by walking the live ancestor chain in a browser, not by reading CSS source). If a page has an unexplained "seam" or two-tone background, check this rule's exclusion list before anything else.

### CSS bugs in this codebase are rarely findable by reading source alone
Across many sessions on this file, the actual bug has repeatedly turned out to be a *different* rule, in a *different file*, several thousand lines away — not the rule that looks related. When a style genuinely isn't applying despite the "obviously correct" selector existing: (1) walk the live DOM's ancestor chain and computed styles in a real browser (Playwright), don't reason from grep results; (2) if a specific rule *should* match but doesn't, verify with `element.matches(selector)` in-page first, and if that's `true` but `getComputedStyle` disagrees, use CDP's `CSS.getMatchedStylesForNode` (manual `document.styleSheets` walking is easy to get wrong — comma-splitting inside `:is(...)` breaks selector matching, silently). (3) If the mystery doesn't resolve quickly, don't keep digging — move the rule to a smaller, more isolated stylesheet/block and re-verify with a screenshot.

### `.modal-backdrop` z-index vs. `.topbar` z-index
`.modal-backdrop` (`styles.css`, the shared base for **every** modal in the app) was `z-index: 80`, while `.topbar` had separately drifted up to `z-index: 999`/`1000 !important` across several page-specific overrides (added for the nav-dropdown work). Net effect: any modal opened while near the top of a tall page rendered its header *underneath* the sticky navbar instead of the navbar being dimmed behind it. Fixed by raising `.modal-backdrop` to `z-index: 1300` (above the topbar and the Vera chat panel's `1200`) — a single shared-base-class fix that covers every modal at once, rather than patching one modal's stacking context. If you introduce a new persistently-fixed/sticky element with its own high z-index, check it against this value.

### CSS Grid is unreliable here for "stretch to fill parent" containers — prefer flexbox
Confirmed independently 4 times in one session (dropdown rows, the full notifications page, the role detail page's sidebar, and the Career Paths stat grid): a `display:grid` element with NO explicit `grid-template-columns`, when it is ITSELF a grid/flex item of an ancestor grid, does not reliably stretch to fill its track the way spec reasoning suggests it should — it can size to content instead, starving text of width and forcing severe wrapping, or (worse) let a `position:sticky` sidebar escape its intended column and visually overlap adjacent content. **Do not reach for nested `display:grid` with no template for a "just stack these children and fill the available width" container.** Use `display:flex; flex-direction:column;` (multi-row stacking, `align-items:stretch` is flex's reliable default) or a plain `display:block` box instead. Grid is fine when every level of nesting has a fully-specified, explicit template — the failure mode is specifically the "grid item that is itself an under-specified grid" pattern.

### A top-level `const` must never call a function that's declared later in the file, at its own initialization time
Function *declarations* are hoisted and safe to call lazily from inside another function's body no matter where they're defined in the file. But a top-level `const X = [...]` array/object literal is evaluated IMMEDIATELY, in file order, during the initial script run — if that literal calls a function (or references a `const`) that itself isn't declared until later in the file, it throws `ReferenceError: Cannot access '...' before initialization` (temporal dead zone) the instant `app.js` loads, breaking the ENTIRE script on every single page. This happened with a new `EXPLORE_FEATURED_ROLES` const calling `convertSalaryToRM()` (declared ~4000 lines later) directly in its initializer. Fix: store raw values in the const, and do the conversion/lookup lazily inside a function that's only invoked at render time (e.g. inside `init()`'s call chain), never inside another top-level const's own initializer. **After adding any new top-level `const` that calls a function, always run a fresh `node vm` smoke test that executes the whole file top-to-bottom** — this class of bug doesn't show up in `node --check` (pure syntax check), only in an actual full run.

### Unscoped, `!important`-boosted global text-color rules will silently beat a component's own color
Two separate instances this session: (1) `.cg-role-unit-avatar`'s `color:#fffaf2` (no `!important`) silently lost to nothing findable via search, fixed by mirroring the working "Featured Companies" reference's exact technique — both `color` AND `-webkit-text-fill-color` with `!important`. (2) `.cg-onboard-preview-head h3`'s `color:#fff` (no `!important`) lost to a genuinely-found, completely unscoped sitewide rule at **styles.css ~9471**: `:is(h1,h2,h3,h4,h5,h6,strong,b,label,.section-title,.card-title,.brand-text strong) { color:#1A1A1A !important; }` (near-duplicate at ~10019) — this forces dark text onto every heading/strong/b tag on every page, `!important`, full stop. **Any new light-on-dark component using an h1-h6/strong/b tag needs `!important` (and often `-webkit-text-fill-color` too) on its own color, unconditionally** — don't assume a plain `color` declaration will hold, this codebase's cascade order guarantees it usually won't for these tag types.

### `.os-layout`'s rail-grid squeezes any new page that lacks a `.workspace-rail`
Base `.os-layout` (enterprise.css ~1846) is `display:grid; grid-template-columns: var(--cg-rail) minmax(0,1fr)` (`--cg-rail: 76px`) — built for pages with a `.workspace-rail` sidebar as grid-item #1. **Any page whose `<main>` root is `<section class="container os-layout" data-X>` but has no real `.workspace-rail` element gets its single child silently auto-placed into the 76px rail track**, pinning the entire page into a narrow left sliver with the rest of the row empty — no error, no console warning, it just renders wrong. This is why `settings.html`, `saved.html`, `public-profile.html`, `edit-career-data.html`, `profile.html`, `posts.html` each carry their own `[data-page="X"] .container.os-layout { display:block !important; ... }` override; `notifications.html` and `role.html` needed the same fix added this session. **Any future new page built on the `.container.os-layout` shell without a real rail MUST add this override** or it ships broken invisibly. (`employer-app.html` no longer applies here — since the 2026-07-23 `employer-integration` merge it renders a bare `.emp-app-shell` div, not a `.container.os-layout` shell, so this quirk doesn't affect it.)

### Vera's floating owl widget + back-to-top button need their page added to a 40-times-repeated selector fragment
`.cg-vera-widget`/`.cg-vera-trigger` (the fixed bottom-right chat bubble) and `.home-back-top`'s positioning are governed entirely by page-scoped rules using the exact selector fragment `:is([data-page="dashboard"], [data-page="discover"], [data-page="grow"], [data-page="market"], [data-page="autopilot"], [data-page="posts"])`, repeated **40 times** across enterprise.css (position, trigger sizing, hover, animations, panel, back-to-top offset, etc.). A page not in that list gets ZERO of this styling and the widget renders as a plain, unstyled, oversized inline block wherever it sits in the DOM instead of a floating bubble. **Any new page that calls `veraWidgetMarkup()`/`wireVeraWidget()` must have its `data-page` value added to every one of these 40 occurrences** (a global find-and-replace on the exact selector substring is the only reliable way — hand-picking a subset misses some and produces inconsistent partial styling). `role`/`notifications` were added this session.

### Playwright is installed — use it for real visual verification, not just static analysis
`node_modules` + a Chromium browser binary are set up (`playwright` is already a devDependency in `package.json`; `npx playwright install chromium` if the browser binary needs reinstalling after a `node_modules` wipe). Since this is a static, build-step-free app, serve it with a minimal hand-rolled Node HTTP server (no framework needed) and drive it with Playwright — log in via `login.html`'s empty-fields judge-preview shortcut to reach authenticated pages (or seed state directly: `page.evaluate(() => writeState(applyDemoAccount(readState())))`). This is a dramatically stronger check than reasoning about CSS from source alone (see the "CSS bugs are rarely findable by reading source" quirk below) — prefer an actual before/after screenshot over static regex assertions whenever a visual bug report comes in and the mechanism isn't 100% certain from code alone. **But the local HTTP server is `http://` — it does NOT reproduce the user's `file://` runtime.** For anything involving navigation/referrer/origin/caching, ALSO drive Playwright against `file:///C:/careeros/careergo/<page>.html` (see the file:// note at the top); the server is fine for pure layout/interaction checks. Practical Playwright note: the dashboard guided tour auto-runs and its `.cg-tour-guard` overlay intercepts clicks — remove it first (`document.querySelectorAll('.cg-tour-guard,[data-tour-layer]').forEach(e=>e.remove())`) or seed `state.guidedTour.dashboard.status = "done"`.

### A second, higher-specificity duplicate rule for the same element often silently wins
Several components have **two** layout/colour rules for the same element in different parts of `enterprise.css`, and the later/more-specific one is the one actually in effect — so editing the "obvious" one changes nothing. Real cases: `.cg-role-detail-company` (base, `0,1,0`) vs `.cg-role-page-card.cg-role-detail-company` (`0,2,0`, wins) — the sidebar company card stayed a squeezed row until **both** were switched to a column; and the resume name stayed Arial because `html body[data-page="profile"] .cg-resume-modal .cg-resume-header h2` (`0,3,3`) out-specified a new `.r-name` rule (`0,2,2`), so the Georgia choice had to go into *that* rule. **When a style edit appears to do nothing, grep the class name across the whole file for a second definition before adding a third.** Related: when two rules both carry `!important`, normal specificity still decides — and if they tie, source order wins, so appending last is a legitimate tie-breaker.

### The global count-up animation rewrites numeric text — it will corrupt screenshots and can mangle formats
`initGlobalNumberAnimations()` (`app.js` ~4166) scans `strong, b, span, td, th, small` and animates any numeric-looking text from 0 to its final value on scroll-into-view (IntersectionObserver). Two consequences: (1) **a Playwright screenshot taken too early captures mid-count garbage** — a negotiation card was captured showing "RM1,686 / 17%" instead of "RM 8,400 / 72%", and the driver-card legend showed "0%" — always wait ~2s *after* the element is in view (scrolling to it re-triggers the animation) before screenshotting or asserting on numbers. (2) `parseNumericText()` only matches a string that is entirely ONE number, so ranges containing a dash (e.g. `"RM 8.3–9.8k"`) are skipped and render intact — which is why range-formatted values are safe, but a new single-number format could get reformatted unexpectedly. `shouldSkip()` honours a `[data-no-number-animation]` ancestor if you need to opt out.

### Icon-only modal close buttons
Every modal's close button is `<button class="btn btn-ghost" data-close>{x icon}</button>` inside `.modal-head` — but `.btn`/`.btn-ghost` are sized for text+icon pills (42px min-height, 16px horizontal padding), so an icon-only instance rendered as an oversized rectangle instead of a small corner icon button. Fixed once, generically, in `enterprise.css` via `.modal-head button[data-close]:has(svg)` (scoped with `:has(svg)` so the *text* `data-close` buttons used elsewhere, e.g. "Cancel"/"Not yet", are untouched) — don't add a one-off fix to a single modal's CSS if you hit this again elsewhere; it's already handled at the shared level.

### Two broad, unconditional color-cascade resets on the Employer side
Beyond the `.card`/`.page-hero`-ancestor-scoped color bug already described in the Employer Module section below, `styles.css` also carries two **fully unconditional** resets with no ancestor scoping at all: `.emp-app-shell.emp-app-shell :is(span, small, li) { color: var(--emp-muted) !important; }` and `.emp-app-shell.emp-app-shell :is(p, div) { color: var(--emp-ink) !important; }`. These hit *every* bare `span`/`small`/`li`/`p`/`div` anywhere inside `.emp-app-shell`, regardless of what card or component wraps them — broader than the ancestor-scoped pattern, and easy to miss because a plain `<span>` looks completely unremarkable until you check its computed color. Any new component that puts real content in a bare `span`/`p`/`div` (not already carrying a class with its own `!important` override) needs the same doubled-prefix `.emp-app-shell.emp-app-shell <selector> { color: ... !important; }` defense, checked via computed style, not just visual guess — this exact bug silently forced a chat bubble's white sent-message text to dark ink, and a `<span class="field-value">` showing "1960" to bright green, in one session.

### Global number count-up animation grabs any numeric-looking `span`/`strong`/`td`/`th`/`small`
`initGlobalNumberAnimations()` (app.js) scans the **whole page**, not just specific components, for elements matching `strong, b, span, td, th, small` whose text parses as a plain number, and animates them counting up from 0 on scroll-into-view. It has an existing opt-out — `shouldSkip()` checks `el.closest("input, textarea, select, ..., [data-no-number-animation], ...")` — but nothing opts a *new* numeric span out automatically. Any new editable/dynamic numeric display (a live-editable salary figure, a freshly-rendered stat span, etc.) needs `data-no-number-animation` added explicitly, or it will visibly show a wrong, mid-animation number on first reveal instead of its real value.

### Tab/section navigation that scrolls past the Reviews section can get silently truncated
Company Profile's Reviews section loads more reviews via an infinite-scroll `IntersectionObserver` on a sentinel node, which calls `draw()` (a full `root.innerHTML` replace) ~500ms after the sentinel becomes visible. Any `scrollIntoView()`-based navigation that passes *through* the Reviews section on its way to a section further down (Health Score, Compare, FAQ, Actions) triggers this sentinel, and the resulting `draw()` orphans the in-flight scroll's target node — the browser just stops scrolling wherever it was, and the destination tab never becomes active. If you add another scroll-into-view-based navigation on this page (or copy the pattern elsewhere), guard the reviews sentinel's `draw()` call against a shared "programmatic scroll in progress" flag (see `isProgrammaticScroll` in `renderEmployerCompany`), the same way the tab bar's own scrollspy already guards against it.

## Implementation Guidance

- For any visual/CSS work, check `CAREERGO_UI_SPEC.md` and the Design System section above first — implement the documented values exactly rather than judgment-calling a size, color, or spacing.
- Use `rg` first for searches.
- Use `apply_patch` for manual edits.
- Keep files ASCII unless an existing file already requires non-ASCII.
- Do not remove user changes you did not make.
- Do not confuse the public `explore.html` page with logged-in Discover (`discover.html`).
- Do not turn logged-in pages into public marketing pages.
- Do not change content when the user asked for styling only.
- When updating nav, prefer shared reusable markup/classes and keep the two nav systems separate.

## Verification Checklist

Before saying a change is complete, check the relevant pages for:

- Correct page destination links
- Correct navbar system for that page type
- Correct active workspace tab
- No old page accidentally reused for another purpose
- No light text on light background or dark text on dark background
- Cards do not overlap or crop text
- Buttons fit their labels
- Mobile-safe wrapping for headings and card rows
- Public CTA color uses the new deep teal gradient where requested
- New/rebuilt spacing, radius, type sizes, and colors match `CAREERGO_UI_SPEC.md` / the Design System section exactly — not just "close enough"

## Employer Module

The Employer OS is a separate, self-contained product surface, distinct from everything above. It does not fall under `CAREERGO_UI_SPEC.md` — that spec is silent on the Employer module and neither blesses nor blocks its own design system (below).

**Entry point:** `employer-app.html` — a bare `<div class="emp-app-shell" data-employer-app></div>` body, no shared marketing topbar and no `enterprise.css` link. The Employer OS renders its own header (logo, nav, global search, Ask Vera, Inbox, notifications, account menu) entirely inside that shell via `renderEmployerShell()`. Do not add the marketing `<header class="topbar">` back to this page — the app already has its own.

**Routing:** `renderEmployerShell()` renders the header once; `initEmployerRouter()`/`initEmployerGlobalSearch()` (called from `init()`) drive everything else. Page content renders into `<main id="employer-view">` via `renderEmployerView()`, keyed by `EMPLOYER_VIEW_KEYS` / `EMPLOYER_NAV_GROUPS`. Current route keys: `pipeline` (Talent Pipeline — the merged home of what used to be separate "Candidate Search" and "Talent Pool" views), `company` (Company Profile), `company-edit`, `role-builder`, `settings`, `messages` (Inbox), `saved-candidates`. Older code/docs may reference `candidates`, `talent-pool`, or `company-profile` as route keys — those were renamed; check `EMPLOYER_VIEW_KEYS` for the current list before trusting an old reference.

**CSS:** All Employer OS styling lives under the `.emp-` class prefix in `styles.css`, in one contiguous block at the end of the file — never in `enterprise.css`. Employer styling never reads the global `--green`/`--soft`/`--cyan`/`--purple-2`/`--text`/`--muted` tokens directly; it has its own separate namespace (`--emp-green`, `--emp-ink`, `--emp-muted`, `--emp-radius-card`, `--emp-shadow-card`, etc.) so the rest of the site's design system can evolve independently without visually affecting the Employer OS.

**Known recurring bug pattern:** an unscoped candidate-app rule (`body :is(.page-hero,...,.card,...) :is(p,span,small,li,div){color:...!important}`) silently forces candidate-app text colors onto any bare `div`/`p`/`span`/`li` nested inside a `.card`-classed ancestor anywhere on the page — including inside `.emp-app-shell`. New Employer OS elements need a proactive override in the same pattern already used throughout: `.emp-app-shell.emp-app-shell <selector> { color: var(--emp-muted, var(--soft)) !important; }` (swap the CSS variable for `--emp-ink`/`--emp-green` depending on semantic role). Check new stat tiles, card text, and list rows for this before considering a feature done — it won't show up in any automated check, only in a screenshot.

**Data model:** `DATA.candidates` is a pipeline-shaped dataset owned by the Employer module — fields include `roleId`, `archived`, `rejection`, `source`, `owner`, `salaryExpectation`, `strength`/`concern`, `interview`, `finalReview`, `offer`, `hired`, `timeline`, `notes`, `activity`, and a 6-value `stage` (`New → Shortlisted → Interview → Final Review → Offer → Hired`). This is unrelated to the separate candidate-application-tracker data model used elsewhere in the app (`stageMeta`, `applicationStagePill`, `normalizeApplicationRecords`, etc.) — the two do not share a stage vocabulary and should not be confused. `state.savedTalent`, `state.recentSearches`, `state.employerTalentPools`, `state.employerInvitations`, `state.employerRoleDrafts`, `state.employerCompanyDraft`, and the `feed*` keys (`feedFollowing`, `feedMuted`, `feedSavedPosts`, `feedPostingIdentity`, `feedConnections`, `feedDismissedCandidates`, `feedDrafts`, `feedScheduledPosts`) in `readState()`'s fallback object are all Employer-module state; nothing outside the Employer module reads them.

**Tests:** `tests/*.test.js` (run via `npm test`) cover pure Employer-module functions (role-draft readiness checks, salary benchmarking, bias-language scanning, pipeline insights, Vera Q&A) via a Node `module.exports` block at the bottom of `app.js`, imported through `tests/helpers/loadApp.js`. These are the only automated tests in the repo; everything else has been verified manually with ad hoc Playwright scripts per change, not committed as a permanent suite.

**Cache-busting:** `employer-app.html` now uses the `?v=YYYYMMDDHHmm` query string on `styles.css` and `app.js` (aligned with the rest of the repo — the old "known gap" is resolved). Bump it after editing `app.js`/`styles.css` so employer users don't get a stale cached bundle. Note it loads **only** `styles.css` + `app.js` (no `enterprise.css`).

### Employer Inbox (`renderEmployerMessages`, route `messages`)
Opened by the header chat-bubble button (`data-emp-messages`, `aria-label="Inbox"`) → `employerNavigateTo("messages")`. It is a **`.emp-dm-*` fork** of the candidate `.cg-*` Inbox (which lives in `renderPosts()` / `enterprise.css`) and was deliberately mirrored to that reference — the two are forked, not shared; never edit `.cg-*`/`renderPosts()` when changing the employer Inbox.

Current design (candidate-parity): plain **initials** as bold text (no avatar circle); a colored **stage pill** on line 3 that reuses the six-stage `PIPELINE_STAGE_ACCENT` scale (set inline via `--emp-stage-accent`, tinted with `color-mix`); a muted `role - Applied <time>` context line (hyphen separators, `--emp-muted`); a faint header hairline (`--emp-line`); a status pill plus a single **`•••` overflow menu** (`renderThreadMenuOverlay`, built on the shared `openFloatingOverlay`) holding save / pin / archive / shared-files / open-in-pipeline; a **text-field + Send** composer only; and the **Vera Suggests** card rendered *inside* `.emp-dm-thread-body` after the messages so it flows with the conversation. Deliberately removed for parity: composer mic + attach icons, the quick-reply type chips, the Schedule-interview / Generate-offer buttons, and the Vera-card dismiss ✕. The `•••` menu is the one intentional employer-only addition kept (its actions have no other home). `.emp-dm-thread-body` is `flex: 0 1 auto` (not `flex:1`) so short threads cluster messages + Vera card + composer near the top instead of stretching the composer to the bottom.

### Talent Pipeline scroll model + cards (`renderEmployerTalentPipeline`, route `pipeline`)
**This is the ONE employer view that scrolls as a normal document**, not the locked 100vh app-shell used by Dashboard / Roles / Company / Feed. The opt-out is CSS-only and keyed off the `.emp-pipeline-region` element that only this page renders: `html:has([data-employer-app] .emp-pipeline-region)`, the matching `body`, and `.emp-app-main:has(.emp-pipeline-region)` regain `height:auto; overflow:visible`. **Do not remove `.emp-pipeline-region`** — it is the scroll-unlock marker; without it the page snaps back to the locked shell. Back-to-top on this page targets `window` (see `syncEmployerBackToTop`), not an inner region.

The board is a **6-column CSS grid** (`repeat(6, minmax(0,1fr))`) with no horizontal scroll at any width — columns squeeze, never wrap, never scroll sideways. Each column caps at `STAGE_CARD_CAP` (5) cards with a "Show all N" / "Show less" toggle (`expandedStages` Set). Candidate cards are **content-height** (no fixed 128px): the action row (Move to / message / profile) is collapsed to zero height by default and expands **in flow** on hover (`@media (hover: hover)`), `:focus-within` (keyboard), or `.is-expanded` (touch tap-toggle set in JS via `matchMedia("(hover: none)")`) — it pushes the card taller and never overlaps the status badges above it.

