# CLAUDE.md

This file gives future agents the current working rules for the CareerGo repository.

**Critical rule:** Never push code to GitHub or run destructive git commands unless the user explicitly asks for it.

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

Primary files:

- Public marketing pages: `index.html`, `explore.html`, `companies.html`, `universities.html`, `community.html`, `login.html`, `register.html`
- Logged-in workspace pages: `dashboard.html`, `discover.html`, `grow.html`, `market.html`, `autopilot.html`, `posts.html`, `profile.html`, `settings.html`, `saved.html`, `edit-career-data.html`, `vera.html`
- Discover sub-pages (logged-in only, `data-page="discover"`): `discover-companies.html`, `discover-universities.html` — full "browse all" grids opened from the "More Companies" / "More Universities" links on `discover.html`. Distinct from the public `companies.html`/`universities.html` directory pages; do not merge them.
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

- White background
- CareerGo logo image on the left
- Nav links: `Explore` (links to `explore.html`), `Opportunities` (links to `companies.html`), `Community`
- No bold active-state styling
- Right actions: `Login` plain text and `Create Account` teal pill CTA
- Shared markup should use `data-public-topbar` where present

Do not make `companies.html` or `universities.html` use a different active-bold public nav. They should visually match the homepage navbar.

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
- Search bar says `Ask Vera anything...` with `⌘ K`
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

Profile/settings/saved/edit-career-data are account pages. Keep the same workspace navbar but do not invent new top-level nav labels unless the user asks.

## CSS File Roles

`enterprise.css` is the broad shared stylesheet. Most global visual language, nav normalization, page spacing, and public CTA colors live here.

`directory-final.css` loads after `enterprise.css` on `companies.html` and `universities.html`. Any directory-specific override here wins over `enterprise.css`, so public navbar and CTA parity rules for directory pages may need to be repeated here.

`feed-final.css` styles `posts.html`.

`profile-final.css` styles `profile.html`.

`explore-final.css` loads after `enterprise.css` on `explore.html` and holds the page's hero, opportunity, and card-grid layout.

When fixing visual issues:

- Prefer adding or editing the final relevant CSS layer rather than scattering inline styles.
- Keep `data-page` selectors narrow.
- Avoid touching unrelated pages.
- Preserve existing HTML content unless the user asks for content changes.

## Public Directory Pages

`companies.html` and `universities.html` intentionally share one directory browser design. They use:

- `data-page="companies"` or `data-page="universities"`
- `data-directory="companies"` or `data-directory="universities"`
- `directory-final.css`

Companies and universities should be browseable in the same visual system and separable via tabs/categories. Do not use a gold premier ribbon unless the user explicitly asks for it.

## User Profile Pages

Profile work should follow the user page design system:

- Cream/off-white page background
- Large Fraunces editorial headings
- White or soft cream cards with 18px radius
- Pastel teal-soft icon badges
- Two-column card grids where useful
- Portfolio/gallery cards may use teal grid-gradient preview surfaces
- Right sidebar cards are acceptable for professional circle, hiring proof, suggested next steps

`profile.html` is the public/user profile surface.
`edit-career-data.html` is for editing account, education, skills, goals, preferences, documents, privacy, and Vera settings.
`settings.html` is for application/account settings.

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

