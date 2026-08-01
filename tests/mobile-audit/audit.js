/**
 * Mobile/tablet/desktop screenshot + overflow audit harness for CareerGo.
 *
 * Usage:
 *   node tests/mobile-audit/audit.js [--pages=dashboard,profile] [--widths=375,390,768,1440] [--out=shots]
 *
 * Requires the static server (server.js) already running on PORT (default 4173).
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE_URL || "http://localhost:4173";
// Resolve shots dir passed via env, fallback to local tests/mobile-audit/shots
const SHOTS_DIR = process.env.SHOTS_DIR || path.resolve(__dirname, "shots");

fs.mkdirSync(SHOTS_DIR, { recursive: true });

// deviceScaleFactor is pinned to 1 for every preset (even though real iPhones
// are 3x) so raster screenshot dimensions equal CSS px. This is a visual
// *layout* audit, not a pixel-density check, and keeping shots at 1x is what
// lets the segmented captures below land under the image viewer's ~2000px
// downscale threshold and stay actually legible instead of shrunk to a strip.
const WIDTH_PRESETS = {
  375: { width: 375, height: 812, deviceScaleFactor: 1, isMobile: true, hasTouch: true, label: "mobile-375-iphoneSE" },
  390: { width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true, label: "mobile-390-iphone13" },
  768: { width: 768, height: 1024, deviceScaleFactor: 1, isMobile: true, hasTouch: true, label: "tablet-768-ipad" },
  1440: { width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false, hasTouch: false, label: "desktop-1440" },
};

// All pages in the repo, tagged with the session role needed to see full content.
const ALL_PAGES = [
  { file: "index.html", role: "guest" },
  { file: "about.html", role: "guest" },
  { file: "autopilot.html", role: "candidate" },
  { file: "community.html", role: "guest" },
  { file: "companies.html", role: "guest" },
  { file: "company-profile.html", role: "guest" },
  { file: "dashboard.html", role: "candidate" },
  { file: "discover-companies.html", role: "guest" },
  { file: "discover-universities.html", role: "guest" },
  { file: "discover.html", role: "candidate" },
  { file: "edit-career-data.html", role: "candidate" },
  { file: "employer-app.html", role: "employer" },
  { file: "employer-onboarding.html", role: "employer" },
  { file: "employers.html", role: "guest" },
  { file: "explore.html", role: "guest" },
  { file: "grow.html", role: "candidate" },
  { file: "growth-move.html", role: "candidate" },
  { file: "job-detail.html", role: "candidate" },
  { file: "login.html", role: "guest" },
  { file: "market-pulse.html", role: "candidate" },
  { file: "market.html", role: "candidate" },
  { file: "notifications.html", role: "candidate" },
  { file: "onboarding.html", role: "guest" },
  { file: "posts.html", role: "candidate" },
  { file: "profile.html", role: "candidate" },
  { file: "public-profile.html", role: "guest" },
  { file: "recommended-roles.html", role: "candidate" },
  { file: "register.html", role: "guest" },
  { file: "role.html", role: "candidate" },
  { file: "settings.html", role: "candidate" },
  { file: "universities.html", role: "guest" },
  { file: "user-profile.html", role: "candidate" },
  { file: "vera.html", role: "candidate" },
];

function parseArgs() {
  const args = Object.fromEntries(
    process.argv.slice(2).map(a => {
      const [k, v] = a.replace(/^--/, "").split("=");
      return [k, v];
    })
  );
  return args;
}

async function getStorageState(browser, role) {
  if (role === "guest") return undefined;
  const stateFile = path.join(SHOTS_DIR, `.storage-${role}.json`);
  if (fs.existsSync(stateFile)) return stateFile;

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto(`${BASE}/login.html`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  if (role === "employer") {
    const employerTab = page.locator('[data-login-role="employer"]');
    if (await employerTab.count()) await employerTab.first().click();
    await page.waitForTimeout(150);
  }
  // Submit the login form with empty fields -> demo login for selected role.
  const submitBtn = page.locator(".login-form-card button[type=submit]");
  if (await submitBtn.count()) {
    await submitBtn.first().click();
  } else {
    await page.locator("[data-enter-demo]").first().click();
  }
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(300);

  {
    // Both the candidate dashboard and the employer app fire a first-visit
    // guided tour overlay (state.guidedTour.<page>.status === "new") that
    // otherwise intercepts every later click in the sweep. Dismiss it once
    // here so the SAVED storage state starts clean. The tour itself is
    // captured separately as a dedicated interactive-state screenshot.
    const landingPage = role === "employer" ? "employer-app.html" : "dashboard.html";
    if (!page.url().includes(landingPage)) {
      await page.goto(`${BASE}/${landingPage}`, { waitUntil: "networkidle" });
    }
    await page.waitForTimeout(500);
    const skipBtn = page.locator("[data-tour-skip]");
    if (await skipBtn.count()) {
      await skipBtn.first().click();
      await page.waitForTimeout(200);
    }
  }

  await context.storageState({ path: stateFile });
  await context.close();
  console.log(`  [auth] saved ${role} storage state -> ${stateFile}`);
  return stateFile;
}

const MAX_SEGMENTS = 14;

async function captureSegments(page, dir, slug, label, viewportWidth, viewportHeight) {
  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const segHeight = viewportHeight;
  const segCount = Math.min(MAX_SEGMENTS, Math.max(1, Math.ceil(scrollHeight / segHeight)));
  const paths = [];
  for (let i = 0; i < segCount; i++) {
    const y = Math.min(i * segHeight, Math.max(0, scrollHeight - segHeight));
    await page.evaluate(scrollY => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(120);
    const shotPath = path.join(dir, `${slug}__${label}__seg${String(i + 1).padStart(2, "0")}.png`);
    await page.screenshot({ path: shotPath, clip: { x: 0, y: 0, width: viewportWidth, height: Math.min(segHeight, scrollHeight) } });
    paths.push(shotPath);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  return { segCount, scrollHeight, paths };
}

async function auditPage(browser, storageStates, entry, widthKey) {
  const preset = WIDTH_PRESETS[widthKey];
  const storageState = storageStates[entry.role];
  const context = await browser.newContext({
    viewport: { width: preset.width, height: preset.height },
    deviceScaleFactor: preset.deviceScaleFactor,
    isMobile: preset.isMobile,
    hasTouch: preset.hasTouch,
    storageState,
  });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on("pageerror", e => consoleErrors.push(String(e)));

  const url = `${BASE}/${entry.file}`;
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(700); // app.js render + lucide createIcons()

  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const offenders = [];
    if (scrollWidth > docWidth + 2) {
      document.querySelectorAll("body *").forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.right > docWidth + 2 && r.width > 0) {
          offenders.push({
            tag: el.tagName,
            cls: (el.className || "").toString().slice(0, 120),
            right: Math.round(r.right),
            width: Math.round(r.width),
          });
        }
      });
    }
    return { docWidth, scrollWidth, hasOverflow: scrollWidth > docWidth + 2, offenders: offenders.slice(0, 15) };
  });

  const slug = entry.file.replace(".html", "");
  const shotPath = path.join(SHOTS_DIR, `${slug}__${preset.label}__FULL.png`);
  await page.screenshot({ path: shotPath, fullPage: true });

  let segments = null;
  if (process.env.SEGMENTS !== "0") {
    segments = await captureSegments(page, SHOTS_DIR, slug, preset.label, preset.width, preset.height);
  }

  await context.close();
  return { file: entry.file, width: widthKey, shotPath, overflow, consoleErrors, segments };
}

(async () => {
  const args = parseArgs();
  const widths = (args.widths ? args.widths.split(",") : Object.keys(WIDTH_PRESETS)).map(Number);
  const pageFilter = args.pages ? args.pages.split(",") : null;
  const pages = pageFilter ? ALL_PAGES.filter(p => pageFilter.includes(p.file.replace(".html", ""))) : ALL_PAGES;

  const browser = await chromium.launch();
  const storageStates = {
    guest: undefined,
    candidate: await getStorageState(browser, "candidate"),
    employer: await getStorageState(browser, "employer"),
  };

  const report = [];
  for (const entry of pages) {
    for (const w of widths) {
      process.stdout.write(`Auditing ${entry.file} @ ${w}...\n`);
      try {
        const result = await auditPage(browser, storageStates, entry, w);
        report.push(result);
        if (result.overflow.hasOverflow) {
          console.log(`  ⚠ OVERFLOW at ${w}px: scrollWidth=${result.overflow.scrollWidth} > ${result.overflow.docWidth}`);
          result.overflow.offenders.forEach(o => console.log(`     - <${o.tag} class="${o.cls}"> right=${o.right} width=${o.width}`));
        }
        if (result.consoleErrors.length) {
          console.log(`  ⚠ JS errors: ${result.consoleErrors.join(" | ")}`);
        }
      } catch (err) {
        console.log(`  ✗ FAILED ${entry.file} @ ${w}: ${err.message}`);
        report.push({ file: entry.file, width: w, error: err.message });
      }
    }
  }

  await browser.close();
  fs.writeFileSync(path.join(SHOTS_DIR, "_report.json"), JSON.stringify(report, null, 2));
  const overflowing = report.filter(r => r.overflow?.hasOverflow);
  console.log(`\nDone. ${report.length} shots. ${overflowing.length} pages with horizontal overflow.`);
  overflowing.forEach(r => console.log(`  - ${r.file} @ ${r.width}px`));
})();
