# CLAUDE.md

This file gives future agents the current working rules for the CareerGo repository.

**Critical rule:** Never push code to GitHub or run destructive git commands unless the user explicitly asks for it.

## Project Status

CareerGo is now a static, multi-page prototype. Do not treat it as the older single React/CDN app. Most user-facing screens are plain HTML files styled by shared CSS.

Open pages directly in the browser. No build step is required.

Primary files:

- Public marketing pages: `index.html`, `explore.html`, `companies.html`, `universities.html`, `community.html`, `login.html`, `register.html`
- Logged-in workspace pages: `dashboard.html`, `discover.html`, `grow.html`, `market.html`, `autopilot.html`, `posts.html`, `profile.html`, `settings.html`, `saved.html`, `edit-career-data.html`, `vera.html`
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

Use the current CareerGo cream and forest-green editorial design system.

### Colors

Primary values:

- Page background: `#F8F7F4`
- Primary text / deep slate: `#1E293B`
- Main brand green: `#0F4C5C`
- New public CTA teal: `#0b6d65`
- Deep teal hover: `#004a41`
- Dark priority surface start: `#07382f`
- Mint accent: `#4DB6AC`
- Muted surface: `#F2F3F5`
- Border: `#E5E7EB`
- Error: `#B91C1C`
- Warning recommendation: `#D97706`

Signature gradients:

```css
linear-gradient(120deg, #07382f 0%, #004a41 45%, #0b6d65 100%)
linear-gradient(90deg, #004a41 0%, #0b6d65 100%)
linear-gradient(180deg, #0b6d65 0%, #004a41 100%)
```

Public primary CTAs on `index.html`, `explore.html`, `companies.html`, `universities.html`, and `community.html` should use the new teal gradient, not the older blue-teal button color.

### Typography

Use two font families:

- Inter for UI, body, buttons, labels
- Fraunces for large editorial headings and display metrics

Expected sizing:

- Hero H1: Fraunces 48-72px, weight 500, line-height about 1.05
- Section H2: Fraunces 28-36px, weight 500
- Large card title: Fraunces 22-24px
- Card title H3: Fraunces 18px
- Display metric: Fraunces 24-30px
- Body large: Inter 18px, line-height 1.6
- Body: Inter 14px, line-height 1.55
- Body small: Inter 13px
- Caption: Inter 12px
- Eyebrow label: Inter 11-12px, weight 500, uppercase, letter-spacing about 0.18em
- Nav link: Inter 14px
- Default button: Inter 14px, weight 500

Avoid negative letter spacing except where already established for Fraunces headings.

### Layout

Standard content rhythm:

- Max content width: 1200px unless the existing page intentionally uses a wider hero surface
- Page horizontal padding: 24px
- Section vertical spacing: 64px mobile, 80-96px desktop
- Dashboard section gap: 32px
- Card grid gap: 16px compact, 24px default
- Default card padding: 20px
- Featured/hero card padding: 24-32px
- Header height: 64px

Use shared container classes already present in the repo where possible. Keep horizontal spacing consistent with `grow.html` for logged-in workspace pages.

### Radius And Shadows

- Pill buttons: full radius
- Inline chips: 12-16px
- Inputs: 12px
- Standard cards: 16px
- Hero preview outer cards: 28px
- Hero preview inner cards: 22px
- List rows: 8-10px
- Progress bars: full radius

Shadow tokens in use:

```css
--shadow-soft: 0 1px 2px rgba(15,23,42,.04), 0 2px 8px -2px rgba(15,23,42,.06)
--shadow-elegant: 0 1px 2px rgba(15,76,92,.04), 0 8px 24px -12px rgba(15,76,92,.12)
--shadow-lift: 0 2px 4px rgba(15,23,42,.04), 0 24px 48px -16px rgba(15,76,92,.18)
```

Use subtle shadows. The design should feel premium and calm, not heavy.

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
- White or soft cream cards with 16px radius
- Pastel mint icon badges
- Two-column card grids where useful
- Portfolio/gallery cards may use teal grid-gradient preview surfaces
- Right sidebar cards are acceptable for professional circle, hiring proof, suggested next steps

`profile.html` is the public/user profile surface.
`edit-career-data.html` is for editing account, education, skills, goals, preferences, documents, privacy, and Vera settings.
`settings.html` is for application/account settings.

## Implementation Guidance

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

