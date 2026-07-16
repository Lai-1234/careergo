# CareerGo — UI Implementation Specification

> **Adaptation note (read first):** this document was originally written against a React/Tailwind/shadcn/TanStack-Router reference build (`src/routes/**`, `src/components/**`, Tailwind utility classes, OKLCH tokens). This repository is a static, multi-page HTML/CSS/JS prototype (`*.html` + `enterprise.css` + `app.js` — see `CLAUDE.md`), not that React app. The file paths, component names, and Tailwind class names below do **not** exist in this repo and should not be searched for or imported literally.
>
> What is binding here, and carries over directly, is the **design values**: the color tokens, spacing scale, typography ramp, radius/shadow scale, card/button/input measurements, density rules, and the "implement exactly, do not redesign" mandate. `CLAUDE.md`'s "UI Design Specification — Source Of Truth" and "Design System" sections are this document translated into plain CSS custom properties and pixel values for `enterprise.css`. When rebuilding or auditing a page, treat *this* file as the numeric reference and `CLAUDE.md` as the translated, repo-applicable version.

Status: Frozen. This document describes the current, approved UI. It is a build spec, not a redesign brief. Every measurable property below is normative: reproduce it exactly. Values are sourced from `src/styles.css`, `src/components/**`, and `src/routes/**` as currently shipped (in the original reference build).

Coordinate system: all sizes in CSS pixels unless suffixed. Tailwind class names are the source of truth; the pixel values in parentheses translate the Tailwind default scale (1 unit = 4px) for engineers not using Tailwind. Colors are OKLCH per the design system; hex fallbacks are approximate and MUST NOT replace the OKLCH tokens in code.

---

## 1. Global Design Tokens

All tokens are declared in `src/styles.css` under `:root` and exposed as Tailwind utilities via `@theme inline`. Never hardcode colors in components — always reference the token.

### 1.1 Brand palette (raw)

| Token          | OKLCH                     | Approx hex | Role                                        |
| -------------- | ------------------------- | ---------- | -------------------------------------------- |
| `--ivory`      | `oklch(0.977 0.012 90)`   | `#F7F3EA`  | App background (cream base)                 |
| `--ivory-deep` | `oklch(0.955 0.017 88)`   | `#EFE8D8`  | Subtle inset surfaces, monogram tiles       |
| `--teal`       | `oklch(0.38 0.06 195)`    | `#1F5560`  | Primary action, links, focus ring, accents  |
| `--teal-soft`  | `oklch(0.86 0.035 195)`   | `#C8DDDF`  | Chips, Vera surface, accent backgrounds     |
| `--aqua`       | `oklch(0.78 0.055 200)`   | `#A6CBD1`  | Secondary accent, highlight                 |
| `--forest`     | `oklch(0.24 0.035 165)`   | `#1B2E28`  | Foreground text, dark primary button bg     |

### 1.2 Semantic tokens (light theme, canonical)

| Token                    | Value                            | Usage                                     |
| ------------------------ | --------------------------------- | ------------------------------------------ |
| `--background`           | `var(--ivory)`                   | `<body>` background                       |
| `--foreground`           | `var(--forest)`                  | Default text color                        |
| `--card`                 | `oklch(1 0 0)` (pure white)      | Card surface                              |
| `--card-foreground`      | `var(--forest)`                  | Text on cards                             |
| `--popover`              | `oklch(1 0 0)`                   | Popovers, menus                           |
| `--primary`              | `var(--teal)`                    | Primary button bg, focus ring             |
| `--primary-foreground`   | `var(--ivory)`                   | Text on primary                           |
| `--secondary`            | `oklch(0.94 0.02 90)`            | Secondary button, muted chip              |
| `--secondary-foreground` | `var(--forest)`                  | Text on secondary                         |
| `--muted`                | `oklch(0.94 0.02 90)`            | Muted surface                             |
| `--muted-foreground`     | `oklch(0.45 0.025 175)`          | Secondary/tertiary copy                   |
| `--accent`               | `var(--teal-soft)`               | Hover fills, subtle emphasis              |
| `--accent-foreground`    | `var(--forest)`                  | Text on accent                            |
| `--destructive`          | `oklch(0.577 0.245 27.325)`      | Error, danger button                      |
| `--destructive-foreground` | `oklch(0.984 0.003 247.858)`   | Text on destructive                       |
| `--border`               | `oklch(0.9 0.018 90)`            | Default hairline (1px) border             |
| `--input`                | `oklch(0.9 0.018 90)`            | Input border                              |
| `--ring`                 | `var(--teal)`                    | Focus ring                                |

Success uses `--teal` (positive brand color); there is no separate green token. Warning is not currently defined — reuse `--chart-4` `oklch(0.828 0.189 84.429)` if needed. Error uses `--destructive`.

### 1.3 Interaction states

- Hover fill on ghost/link elements: `text-foreground` from `text-muted-foreground` (color change only, no bg).
- Hover fill on chip filters: `border-[var(--color-teal)]/50` + `text-foreground`.
- Active/selected chip/tab: `bg-[var(--color-forest)]` + `text-primary-foreground`.
- Disabled: `opacity-50`, `pointer-events-none` (shadcn default). No color mutation.
- Focus: `focus-visible:ring-2 ring-[var(--color-ring)] ring-offset-2 ring-offset-[var(--color-background)]` (shadcn default).

### 1.4 Radius scale

Base `--radius: 0.625rem` (10px). Derived: `sm` 6px, `md` 8px, `lg` 10px, `xl` 14px, `2xl` 18px, `3xl` 22px, `4xl` 26px. Cards use `rounded-2xl` (18px). Pills/chips use `rounded-full`. Inputs use `rounded-md` (8px). Monogram tiles use `rounded-xl` (14px).

### 1.5 Shadow scale

- `shadow-sm` (default card resting): `0 1px 2px 0 rgb(0 0 0 / 0.05)`.
- Card hover lift (`card-lift` utility): `0 18px 40px -24px oklch(0.24 0.035 165 / 0.35)` plus `translateY(-2px)`.
- Vera glow (`glow-teal` utility): `0 0 0 1px oklch(0.38 0.06 195 / 0.15), 0 20px 60px -30px oklch(0.38 0.06 195 / 0.5)`.
- Vera avatar chip: `0 1px 2px oklch(0.24 0.035 165 / 0.15)`.

---

## 2. Typography System

Two families only. Loaded via `<link>` in `src/routes/__root.tsx`.

- **Serif (display)**: `"Fraunces", ui-serif, Georgia, serif` — via `.font-display`. Optical sizing on; `letter-spacing: -0.01em`. Used ONLY for headlines, page titles, large metrics, monogram initials.
- **Sans (body)**: `"Inter", ui-sans-serif, system-ui, sans-serif` — body default. Feature settings `"ss01", "cv11"` on `<body>`.

### 2.1 Scale

| Style             | Family  | Weight | Size (px)       | Line height       | Tracking     | Transform | Used for                                              |
| ------------------ | ------- | ------ | ---------------- | ------------------ | ------------ | --------- | ------------------------------------------------------ |
| Hero Title        | Serif   | 400    | 44 (md 52–56)    | 1.05               | -0.01em      | none      | Landing/home page heros                               |
| Page Title        | Serif   | 400    | 36 (md 44)       | 1.05               | -0.01em      | none      | `<h1>` on every route (Discover, Autopilot, Company)  |
| Section Heading   | Serif   | 400    | 22–24            | 1.1                | -0.01em      | none      | Card-group titles inside a page                       |
| Card Heading      | Sans    | 500    | 14               | 1.3                | 0            | none      | Company/role/university card titles                   |
| Large Metric      | Serif   | 400    | 28–32            | 1.05               | -0.01em      | none      | Dashboard KPI values                                  |
| Body              | Sans    | 400    | 14               | 1.5                | 0            | none      | Default paragraph                                     |
| Small Body        | Sans    | 400    | 13               | 1.5                | 0            | none      | Card descriptions, secondary paragraph                |
| Caption           | Sans    | 400    | 12               | 1.4                | 0            | none      | Metadata under titles                                 |
| Micro Caption     | Sans    | 400    | 11               | 1.35               | 0            | none      | Chip counts, "Showing X of Y"                         |
| Overline / Label  | Sans    | 500    | 11               | 1.2                | 0.16em       | uppercase | Section eyebrows, back-links, facet titles            |
| Button            | Sans    | 500    | 13 (sm) / 14     | 1                  | 0            | none      | All buttons                                           |
| Nav item          | Sans    | 500    | 13               | 1                  | 0            | none      | TopNav links                                          |
| Tag / Chip        | Sans    | 400    | 10–12            | 1                  | 0            | none      | Badges inside cards                                   |
| Badge (inline)    | Sans    | 400    | 10               | 1                  | 0            | none      | "Verified", "Hiring", growth pill                     |

No additional variants. If a value is not in this table, do not invent one — pick the nearest row.

---

## 3. Spacing System

Tailwind spacing (4px base). Allowed values only: `4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96`.

| Value | Tailwind | Where used                                                                 |
| ----- | -------- | ---------------------------------------------------------------------------- |
| 4     | `1`      | Icon-to-text micro gap inside small chips                                  |
| 6     | `1.5`    | Chip inner gap (icon + label + count)                                      |
| 8     | `2`      | Tight stacks: badge row inside a card                                      |
| 12    | `3`      | Default card internal vertical rhythm; grid gap on card grids              |
| 16    | `4`      | Card padding (`p-4`); default input padding-x                              |
| 20    | `5`      | Section internal spacing                                                   |
| 24    | `6`      | Page horizontal padding on mobile (`px-6`); large card padding             |
| 32    | `8`      | Gap between sidebar and grid on Discover; gap between major sections       |
| 40    | `10`     | Page horizontal padding on `lg` (`lg:px-10`); mt on hero-to-content        |
| 48    | `12`     | Section top margin above heroes                                            |
| 64    | `16`     | Bottom of page above footer (`pb-16`+)                                     |
| 96    | `24`     | Bottom padding of full-height routes (`pb-24`)                             |

Rules:
- Vertical rhythm inside a card: 12px between the header row, badge row, meta row, and Vera insight footer.
- Horizontal rhythm between cards in a grid: 12px (`gap-3`).
- Between page sections: 32–40px (`mt-8` to `mt-10`).
- Between page hero title and first section: 32px (`mt-8`).
- Never use arbitrary values (`p-[13px]`). Snap to the scale.

---

## 4. Layout System

- **Max content width**: 1240px (`max-w-[1240px]`). Applied on `<main>` of every route.
- **Container**: `mx-auto w-full max-w-[1240px] px-6 pb-24 pt-10 lg:px-10`.
- **Grid on content-with-filters routes** (Discover companies/universities): `lg:grid-cols-[240px_1fr]` with `gap-8`.
- **Card grids**: `grid gap-3 sm:grid-cols-2 xl:grid-cols-3` (12px gap, 2-up at ≥640px, 3-up at ≥1280px).
- **Row gaps** inside a stacked column: 24px (`space-y-6`) for facets, 12px for card rows.
- **Section spacing (vertical)**: 40px top between hero and first grid; 32px between subsequent sections.
- **Breakpoints (Tailwind defaults, do not override)**:
  - `sm` 640px
  - `md` 768px
  - `lg` 1024px
  - `xl` 1280px
  - `2xl` 1536px
- **Alignment**: content is left-aligned everywhere except the top hero row which uses `flex-wrap items-end justify-between`.
- **Density rule**: cards are content-driven (`h-auto`). Grids never enforce equal heights. No `items-stretch` on card grids.
- **Viewport usage**: aim for max information density; never insert filler height. Vertical scroll is expected on all routes; horizontal scroll is forbidden.

---

## 5. Card Specifications

All cards share the base recipe unless overridden.

### 5.1 Base card

- Class: `rounded-2xl border border-border bg-card p-4 shadow-sm`.
- Radius: 18px. Border: 1px `--border`. Background: `--card` (white). Padding: 16px. Shadow: `shadow-sm`.
- Width: fluid within grid column. Min-width: none. Max-width: none. Height: auto (content-driven).
- Interactive card adds `card-lift` utility (see §13).
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2`.

### 5.2 Company card (Discover — Companies)

- Container: base card + `card-lift block text-left`.
- Header row: `flex items-center gap-3`.
  - Monogram tile: `h-10 w-10 rounded-xl bg-[var(--color-ivory-deep)]` grid-centered, serif 14px `--color-forest`, single initial.
  - Title: 14px/500 (Card Heading). Subtitle (industry · city): 11px (Micro Caption) `text-muted-foreground`.
- Badge row (`mt-3 flex flex-wrap gap-1.5`):
  - Primary badge: `rounded-full bg-[var(--color-teal-soft)]/40 px-2 py-0.5 text-[10px] text-[var(--color-forest)]`.
  - Size chip: `rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground` + `Building2` 12px icon.
  - Growth chip: same shape, `text-[var(--color-teal)]` + `TrendingUp` 12px.
- Meta row (`mt-2 text-[11px] text-muted-foreground`): "N open roles · KL" with `MapPin` 12px inline.
- Vera insight footer: `mt-3 flex items-start gap-1.5 border-t border-border pt-3 text-[11px] text-muted-foreground` with `Sparkles` 12px `text-[var(--color-teal)]`.

### 5.3 University card

Identical shell to §5.2. Substitute badge labels; use `GraduationCap`/`MapPin` iconography.

### 5.4 Dashboard metric card

- Base card. Content order: 11px overline label (uppercase, tracking 0.16em, `text-muted-foreground`), 28–32px serif value, 12px caption trend.
- Height: auto. Never stretched.

### 5.5 Role, candidate, pipeline, feed, recommendation, profile cards

All extend §5.1. Deltas:
- Role card: no monogram; title 14/500; salary/loc chips row; primary CTA `Apply` right-aligned in footer.
- Candidate card: 36px round avatar left, name + headline stack, right-side action buttons (icon-only 32px).
- Pipeline card: draggable variant — same shell; stage tag pinned top-right.
- Feed card: header row `avatar (36px) + name/date`, body body-14, footer action row of 4 icon buttons at 20px.
- Vera card (`glow-teal`): border removed, replace with `ring-1 ring-[var(--color-teal)]/20`; interior uses `bg-[var(--color-teal-soft)]/25`.

### 5.6 States (all cards)

- Hover: `card-lift` — `translateY(-2px)` and shadow upgrade (see §13).
- Pressed: reduce lift to `translateY(-1px)`, keep shadow.
- Focus: as §5.1.
- Disabled card: `opacity-60 pointer-events-none`.

---

## 6. Navigation Specification

`TopNav` (from `src/components/dashboard/Dashboard.tsx`):

- Height: 64px. Background: `bg-background/80 backdrop-blur`. Bottom hairline: `border-b border-border`.
- Sticky: `sticky top-0 z-40`.
- Container: `mx-auto max-w-[1240px] px-6 lg:px-10 h-16 flex items-center gap-8`.
- Logo lockup: serif 18px "CareerGo" + Vera owl bare 20×20 at `mr-2`. Full clickable area: 28px min.
- Primary nav: 13/500 sans, `gap-6`. Active link: `text-foreground`; inactive: `text-muted-foreground hover:text-foreground`. No underline; active state also carries `after:` 2px teal underline `w-4 mx-auto` optional (currently text-only).
- Right cluster: search input (see §8), 20px `Bell` icon button (32px hit), 32px round avatar. Gap 12px (`gap-3`).
- Dropdown: `mt-2` from trigger; `rounded-xl border border-border bg-popover shadow-md p-2`; item height 36px.

### 6.1 Sub-nav (Pipeline)

- Row of pill tabs, 32px height, `px-3`, 13/500, gap 8px. Active pill `bg-[var(--color-forest)] text-primary-foreground`; inactive `border border-border text-muted-foreground`.

---

## 7. Button Specification

Shadcn `<Button>` (variants unchanged). Common: `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:ring-2 ring-[var(--color-ring)] ring-offset-2`.

| Variant   | Height | Padding-x | Radius | BG                          | Text                          | Hover                                | Icon slot |
| --------- | ------ | --------- | ------ | ---------------------------- | ------------------------------ | -------------------------------------- | --------- |
| Primary   | 40     | 16        | 8      | `--primary` (teal)          | `--primary-foreground`        | `oklch(0.34 0.06 195)` (darker teal) | 16px      |
| Secondary | 40     | 16        | 8      | `--secondary`               | `--secondary-foreground`      | `--accent`                           | 16px      |
| Ghost     | 40     | 12        | 8      | transparent                 | `--foreground`                | `--accent`                           | 16px      |
| Text/Link | 20     | 0         | 0      | transparent                 | `--primary`                   | underline                            | 14px      |
| Icon      | 32     | 0 (w32)   | 8      | transparent → `--accent`    | `--muted-foreground` → `--fg` | `--accent`                           | 16–20px   |
| Danger    | 40     | 16        | 8      | `--destructive`             | `--destructive-foreground`    | darker destructive                   | 16px      |

Small variant (`sm`): height 32, padding-x 12, font 13. Large (`lg`): height 44, padding-x 20, font 14. Pill filter chips: height 30 (`py-1.5`), padding-x 12, `rounded-full`, 12/400.

Disabled: `opacity-50 pointer-events-none`. Focus: 2px ring in `--ring` with 2px offset.

---

## 8. Input Specification

- **Text field**: height 40, radius 8 (`rounded-md`), border 1px `--input`, padding `px-3 py-2`, font 14. Placeholder: `text-muted-foreground`. Focus: border `--ring` + 2px ring/20% opacity.
- **Search bar (page)**: outer wrapper `rounded-2xl border border-border bg-card p-2 shadow-sm flex items-center gap-2`; `Search` icon 16px `text-muted-foreground` at `ml-3`; input transparent, 14/400; trailing `Filters` ghost pill (height 30, `rounded-full`, 12/400).
- **Search bar (nav)**: height 36, `rounded-full`, `bg-muted`, `pl-9 pr-3`, icon at `left-3` 16px.
- **Dropdown/Select**: match text-field metrics; popover uses `rounded-xl` 14px; item height 36; hover `bg-accent`.
- **Checkbox**: 16×16, radius 4, border `--input`, checked bg `--primary`. `accent-[var(--color-teal)]` for native inputs.
- **Radio**: 16×16, radius full.
- **Switch**: track 36×20 radius full; thumb 16px; on `--primary`, off `--muted`.
- **Tag selector chip**: height 28, `rounded-full`, padding-x 12, 12/400. Selected: `bg-forest text-primary-foreground`.
- **Error state**: border `--destructive`, helper text 12/400 `--destructive`.

---

## 9. Icon Specification

Library: `lucide-react`. Default stroke width: 2. Never mix libraries.

| Size | Use                                                                 |
| ---- | ---------------------------------------------------------------------- |
| 12   | Inline meta icons in badges/chips (`MapPin`, `Building2`, `TrendingUp`, `Sparkles`) |
| 14   | Chip trailing icons, button icons inside `sm` buttons               |
| 16   | Default button icon, input leading icon, most inline actions        |
| 20   | Top-nav icons (`Bell`), tab icons, FAB inner icon                    |
| 24   | Section header decorative icons (rare)                              |
| 32   | Empty-state hero icons only                                         |

Placement: leading icon uses `gap-2` from label; trailing 6px (`gap-1.5`). Icons in overline/eyebrow rows use `gap-1.5`.

Vera identity: always the owl (`VeraIcon`/`VeraAvatar`/`VeraCompanion`), never `Sparkles` as a substitute for Vera. `Sparkles` is only a decorative "AI insight" cue inside footers.

---

## 10. White Space & Density Rules

The UI reads as premium because it is compact, not spacious. Follow these rules literally:

1. Cards hug their content. `h-auto` only. Never `min-h-*` unless a spec above says so.
2. Never enforce equal-height rows. No `items-stretch`, no `grid-auto-rows: 1fr`.
3. Card padding is 16 (`p-4`). Do not upgrade to 20/24 "for breathing room".
4. Vertical rhythm inside a card is 12 (`mt-3`). Do not upgrade to 16/20.
5. Grid gap between cards is 12 (`gap-3`). Do not widen to 16/24.
6. Page horizontal padding is 24 mobile / 40 desktop. No more.
7. Section-to-section vertical spacing is 32–40. Never 64+.
8. Copy is dense: 13–14 body, 11–12 meta. Do not upsize to 16 for legibility — the type ramp is already tuned.
9. Prefer horizontal chip rows over stacked lines for metadata.
10. Every card should show at least four discrete pieces of info (title, badge, meta, insight). If a card only carries a title, it is wrong.
11. Target ≥ 6 cards visible above the fold on a 1440×900 laptop for grid pages.
12. Whitespace is horizontal (page gutters, column gaps), not vertical.
13. Density reference: LinkedIn feed, Stripe dashboard, Linear inbox, Notion sidebar. Not Apple marketing pages.

---

## 11. Component-by-Component Measurements

All routes use the container: `max-w-[1240px] mx-auto px-6 lg:px-10 pt-10 pb-24`. All page titles: `font-display text-[36px] md:text-[44px] leading-[1.05] tracking-tight`.

### 11.1 Dashboard (`/`)

- Hero row: greeting overline 11/500 uppercase tracking 0.16em; H1 44/serif; subcopy 14/muted `max-w-xl mt-3`.
- Top strip of 4 KPI cards: `grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8`. Each card = §5.4.
- Two-column body: `grid lg:grid-cols-[1fr_320px] gap-6 mt-10`. Left = Today list; right = Autopilot status card.
- Today list rows: 56px min, border-b hairline, 12px vertical padding, avatar 36 + copy + right-side action.
- Autopilot status card: base card, header row 40px, body 12/muted, footer 32-height Primary + ghost buttons.

### 11.2 Discover (`/discover` + subroutes)

- Overline back-link: 11/500 uppercase, `ArrowLeft` 12, `gap-1.5`.
- Hero: H1 + 14/muted description `max-w-xl mt-3`; right eyebrow chip 11/400 `rounded-full border` with `Sparkles` 12 teal.
- Search bar: §8 spec, `mt-8`.
- Filter chip row: `mt-6 flex flex-wrap gap-2`; chip metrics: height 30, radius full, padding `px-3 py-1.5`, 12/400.
- Body grid: `mt-10 grid gap-8 lg:grid-cols-[240px_1fr]`.
- Sidebar: facet groups `space-y-6`; group title 11/500 uppercase tracking 0.16em; option row 13/muted with 16 checkbox and `gap-2`.
- Result meta bar: `mb-4 flex items-center justify-between text-[11px] text-muted-foreground`.
- Card grid: `grid gap-3 sm:grid-cols-2 xl:grid-cols-3`; cards = §5.2.

### 11.3 Growth (`/grow`), Career Value (`/worth`)

- Two-column layout `lg:grid-cols-[1fr_320px] gap-6 mt-8`.
- Chart cards use `p-4`, 220px inner chart height. Legend row 12/muted.

### 11.4 Pipeline (`/pipeline`)

- `PipelineSubNav` at top (§6.1), then Kanban: 3 columns, `gap-4`, each column width 320px, column header 13/500, cards §5 stacked with `space-y-3`.

### 11.5 Feed (`/feed`)

- Single column `max-w-[720px] mx-auto`. Feed cards `space-y-3`; card padding 16; author avatar 36; media block radius 14; action bar height 40 with 4 icon buttons at 32.

### 11.6 Employer routes

- Reuse Dashboard/Discover primitives. `employer.roles.tsx` uses the same Company-card recipe with role-specific badge labels.

### 11.7 Company profile (`/companies/$companyId`)

- Cover strip 160px, radius 22 (`rounded-3xl`), gradient placeholder if no image.
- Header block overlapping cover by -32: monogram 72 (radius 22), title 32/serif, badges row.
- Body grid `lg:grid-cols-[1fr_320px] gap-8 mt-10`. Left: About (14/body), Open Roles list, Hiring Process stepper, Culture chips, Reviews. Right: Vera insight card (§5.5), quick facts card.

### 11.8 University profile (`/universities/$universityId`)

- Same shell as §11.7. Body sections: Programmes grid (§5 recipe), Entry requirements table, Outcomes stats (§5.4), Scholarships list, Vera insight.

### 11.9 Autopilot (`/autopilot`)

- Header: overline "Pipeline / Autopilot", H1 36–44, status pill (On/Off/Paused) inline right.
- Layout `grid lg:grid-cols-[1fr_360px] gap-8 mt-8`. Left: activity log (rows 56, avatar 32, meta 12). Right: ruleset builder — grouped cards with 12 gap.

### 11.10 Candidate profile

- Left rail 240 (avatar 96 round + name serif 24 + meta), main area 720 with tabs (About, Applications, Notes). Tab bar height 40, active underline 2px teal.

---

## 12. Responsive Behaviour

| Breakpoint      | Columns (grid pages) | Sidebar               | Page padding | Title size | Notes                                     |
| ---------------- | --------------------- | ------------------------ | -------------- | ------------ | -------------------------------------------- |
| Desktop ≥1280   | 3                     | 240px visible          | 40            | 44         | 3-up card grid, sidebar sticky (`top-24`) |
| Laptop 1024–1279| 2                     | 240px visible          | 40            | 44         | 2-up card grid                            |
| Tablet 768–1023 | 2                     | Collapsed → Filter btn | 24            | 40         | Sidebar hidden behind `Filters` button    |
| Mobile <768     | 1                     | Sheet drawer            | 24            | 36         | Top nav collapses to logo + menu + avatar |

- Cards resize to column width; never wrap below 260px min. Below that, drop to 1-col.
- Text scales via H1 rule only (`text-[36px] md:text-[44px]`). Body sizes do not scale.
- Nav: primary links move into a sheet at `<md`. Search collapses to icon at `<md`.
- FAB (Ask Vera) stays fixed bottom-right, `bottom-6 right-6`, safe-area aware on iOS.

---

## 13. Motion

All transitions use `cubic-bezier(0.2, 0.7, 0.2, 1)` unless noted.

- Default color/background transition: 150ms.
- Button hover: 150ms `background-color`, `color`.
- Card hover (`card-lift`): 220ms `transform, box-shadow, border-color`; `translateY(-2px)`; shadow to `0 18px 40px -24px oklch(0.24 0.035 165 / 0.35)`.
- Page transition: none (route change is instant; loaders show skeletons).
- Loading skeleton: `shimmer-bar` utility, 2400ms linear infinite gradient sweep.
- Vera pulse dot: `pulse-dot` utility, 2200ms ease-in-out infinite (opacity 0.6–1, scale 1–1.25).
- Micro-interactions: chip select is instant (no bounce). Checkbox tick 120ms.
- Reduce motion: honor `prefers-reduced-motion: reduce` — disable `card-lift` transform and shimmer/pulse animations, keep color transitions.

---

## 14. Implementation Constraints

Non-negotiable. Any deviation is a bug.

1. Do not enlarge cards. `p-4` stays `p-4`. Radius 18 stays 18.
2. Do not increase spacing. Grid gap is 12; do not "let it breathe" at 16/24.
3. Do not normalize heights. Cards are content-driven — no `min-h`, no `items-stretch`, no 1fr rows.
4. Do not reinterpret the design. This document is the design.
5. Do not introduce additional typography variants beyond §2.1.
6. Do not add new font families. Fraunces + Inter, nothing else.
7. Do not substitute spacing values. Only the scale in §3.
8. Do not hardcode colors. Always use tokens from §1.
9. Do not replace Vera's owl with `Sparkles` or any other icon.
10. Do not use `react-router-dom`. Only `@tanstack/react-router`.
11. Do not add page-level animations, parallax, or hero video.
12. Do not swap `lucide-react` for another icon set.
13. Do not raise card shadows above `shadow-sm` at rest.
14. Do not center-align body copy. Left-align only.
15. Pixel accuracy is required. When in doubt, screenshot the current preview and diff.

*(Constraints 10 and 12 are React/Tailwind-specific and don't literally apply to this static-HTML repo — there is no router and icons load via the `lucide` CDN script, not an npm package. The intent — no extra dependencies, no icon-library mixing, no substituting Vera's mark — still applies.)*

---

End of specification.
