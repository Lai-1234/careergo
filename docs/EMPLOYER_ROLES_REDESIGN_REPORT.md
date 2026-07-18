# CareerGo Employer OS — Roles & Create Role Redesign

Report of the redesign and functional rebuild of the Employer Roles area and Create Role workflow (`employer-app.html` / `app.js` / `styles.css`).

## 1. Files changed

- **`app.js`** — Roles list, Create Role wizard, Vera assistants, modal system (+2098/−~250 lines)
- **`styles.css`** — new component styles + one root-cause CSS fix (+224 lines)

## 2. Root cause of the button-growth bug

Two distinct bugs, both confirmed by instrumented Playwright testing (bounding-box measurements across 12 rapid clicks), not guesswork:

- **The real "growing button" bug**: `app.js` runs a shared press/ripple animation on every page (`initGlobalInteractionAnimations`), which appends a `<span class="interaction-ripple">` inside the clicked button on every click. Its `position: absolute` rule only exists in `enterprise.css` — which `employer-app.html` deliberately never loads (to keep candidate CSS from leaking into the Employer OS). Without that rule, each ripple rendered in normal flow, so the button's content box — and the visible button — grew a little on every click, compounding double each time (measured 50px → 237,560px over 12 clicks). Fixed by restating just the positioning rule scoped to `.emp-app-shell` in `styles.css`, not importing the whole file.
- **The duplicate-menu-listener leak**: `renderEmployerRolesList`'s `bind()` called `document.addEventListener("click", …)` to close the row action menu — and `bind()` re-ran on every `draw()` (every filter change, every action), permanently stacking a new listener each time. Fixed by registering the outside-click/Escape closer exactly once, and by moving all row actions to a single delegated listener bound once per page mount (`ensureRolesDelegation`) instead of rebinding per row per render.

A third, related bug was found and fixed while reusing the existing Vera answer component: `.emp-vera-answer-points li` used CSS grid auto-placement that pushed the body `<span>` into the 22px number-badge column, wrapping the text one word per line. This affected the pre-existing global Vera drawer too, not just the new modal — fixing it improved both.

## 3. Role actions / status transitions implemented

Open ↔ Paused (with pause-reason modal) → Closed (close-reason modal) → Archived (restore-to-Draft/Closed modal, permanent-delete confirmation), plus Duplicate, Delete draft, Save as template, Export summary (real file download), Share (real clipboard copy), and Ask Vera — all via one shared modal system (single-instance, Escape/backdrop close, focus return).

## 4. Create Role improvements

All 5 steps expanded per the spec's field lists (seniority, urgency, contract terms, team/tools, trainable skills, compensation/benefits grid, hiring-stage editor with reorder, distribution, company-profile reuse, accessibility); real debounced autosave with Saving/Saved/Unsaved/Retry states; Preview moved into a modal reachable from any step; Publish & Preview step now shows a real 12-item readiness checklist and a live-computed Vera review panel with actionable buttons; "Create with Vera" parses pasted text (regex/keyword-based) into a reviewable, section-by-section draft.

## 5. Still local mock data / no backend

Everything — roles, applicants, results, distribution states, templates. "Create with Vera" is pattern-matching, not a live AI model. External job boards (LinkedIn/JobStreet/Indeed) show honest "Manual posting required" states with copy/export actions — no real posting integration exists or is claimed.

## 6. Tests performed

Three Playwright scripts driving real Chromium against the file directly: all 6 filters' column sets, 12x-rapid-click bounding-box checks on multiple buttons (stable, no growth), menu single-instance + Escape + outside-click, modal idempotency, full Create Role walkthrough (fill → reorder → autosave → publish → verify appears in Roles), Create-with-Vera end-to-end using the spec's own example text, restore/export-download flows. Zero console errors in every run.

## 7. Known limitations

The public marketing footer renders under every Employer OS page (pre-existing `renderSiteFooter()` bug unrelated to Roles, left untouched per scope). Role "detail view" reuses the existing Role Builder + new Results modal rather than the full 10-tab page originally described. Save-failed/Retry UI is wired but unexercised since local writes don't actually fail in this prototype.
