// Capture specific interactive nav states at mobile width for visual review.
const { chromium } = require("playwright");
const path = require("path");

const BASE = "http://localhost:4173";
const SHOTS_DIR = path.resolve(__dirname, "shots");

async function shoot(page, name) {
  await page.screenshot({ path: path.join(SHOTS_DIR, `INTERACTION__${name}.png`) });
}

(async () => {
  const browser = await chromium.launch();
  const candidateState = path.join(SHOTS_DIR, ".storage-candidate.json");
  const employerState = path.join(SHOTS_DIR, ".storage-employer.json");

  // 1. Guest public nav on mobile - scroll mobile-nav row to its end to prove
  // every item (incl. the ones cut off at first paint) is reachable.
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 700 } });
    const page = await context.newPage();
    await page.goto(`${BASE}/index.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await page.evaluate(() => document.querySelector(".mobile-nav")?.scrollTo({ left: 9999 }));
    await page.waitForTimeout(150);
    await shoot(page, "public-mobile-nav-scrolled-end");
    await context.close();
  }

  // 2. Candidate workspace: account menu open at mobile width.
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 800 }, storageState: candidateState });
    const page = await context.newPage();
    await page.goto(`${BASE}/dashboard.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await page.click("[data-account-menu-toggle]");
    await page.waitForTimeout(200);
    await shoot(page, "candidate-account-menu-open-mobile");
    await context.close();
  }

  // 3. Candidate workspace: notification panel open at mobile width.
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 800 }, storageState: candidateState });
    const page = await context.newPage();
    await page.goto(`${BASE}/dashboard.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await page.click("[data-notification-toggle]");
    await page.waitForTimeout(200);
    await shoot(page, "candidate-notification-panel-open-mobile");
    await context.close();
  }

  // 4. Candidate workspace: nav dropdown (Discover chevron) open at mobile width.
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 800 }, storageState: candidateState });
    const page = await context.newPage();
    await page.goto(`${BASE}/dashboard.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const chevron = page.locator(".cg-nav-dropdown-toggle").first();
    await chevron.click();
    await page.waitForTimeout(200);
    await shoot(page, "candidate-workspace-dropdown-open-mobile");
    await context.close();
  }

  // 5. Candidate workspace: search bar focused/typed at mobile width (now visible).
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 800 }, storageState: candidateState });
    const page = await context.newPage();
    await page.goto(`${BASE}/dashboard.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    await page.click(".cg-vera-search input");
    await page.type(".cg-vera-search input", "product manager");
    await page.waitForTimeout(300);
    await shoot(page, "candidate-search-focused-mobile");
    await context.close();
  }

  // 6. Employer app: hamburger menu open at mobile width.
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 800 }, storageState: employerState });
    const page = await context.newPage();
    await page.goto(`${BASE}/employer-app.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const tourSkip = page.locator("[data-tour-skip]");
    if (await tourSkip.count()) {
      await tourSkip.first().click();
      await page.waitForTimeout(200);
    }
    const menuBtn = page.locator("[data-emp-menu-toggle]");
    if (await menuBtn.count()) {
      await menuBtn.click();
      await page.waitForTimeout(250);
    }
    await shoot(page, "employer-hamburger-open-mobile");
    await context.close();
  }

  // 7. Candidate dashboard: guided tour open at mobile width (fresh session, tour not dismissed).
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 800 } });
    const page = await context.newPage();
    await page.goto(`${BASE}/login.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    const submitBtn = page.locator(".login-form-card button[type=submit]");
    await submitBtn.first().click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(600);
    await shoot(page, "candidate-guided-tour-mobile");
    await context.close();
  }

  await browser.close();
  console.log("done");
})();
