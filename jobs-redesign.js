(function () {
  const PAGE_RE = /(^|\/|\\)jobs\.html$/i;

  const style = `
    .jobs-redesign {
      --jr-bg: #f8f7f4;
      --jr-card: #ffffff;
      --jr-text: #1e293b;
      --jr-muted: #64748b;
      --jr-primary: #0f4c5c;
      --jr-primary-2: #146c78;
      --jr-accent: #4db6ac;
      --jr-border: #e5e7eb;
      --jr-soft: #f2f3f5;
      --jr-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 76, 92, 0.12);
      background: var(--jr-bg);
      color: var(--jr-text);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      min-height: 100vh;
      overflow: hidden;
    }

    .jobs-redesign *,
    .jobs-redesign *::before,
    .jobs-redesign *::after {
      box-sizing: border-box;
    }

    .jr-shell {
      width: min(1200px, calc(100% - 48px));
      margin: 0 auto;
    }

    .jr-hero {
      min-height: 560px;
      padding: 150px 0 88px;
      text-align: center;
      border-bottom: 1px solid rgba(229, 231, 235, 0.8);
    }

    .jr-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 22px;
      color: var(--jr-primary);
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.18em;
      line-height: 1.4;
      text-transform: uppercase;
    }

    .jr-eyebrow::before {
      content: "";
      width: 48px;
      height: 1px;
      background: color-mix(in srgb, var(--jr-primary) 32%, transparent);
    }

    .jr-hero h1,
    .jr-section h2,
    .jr-cta h2 {
      margin: 0;
      color: var(--jr-text);
      font-family: Fraunces, Georgia, serif;
      font-weight: 500;
      letter-spacing: -0.02em;
      line-height: 1.08;
    }

    .jr-hero h1 {
      margin-top: 28px;
      font-size: clamp(48px, 7vw, 72px);
    }

    .jr-hero p {
      max-width: 660px;
      margin: 28px auto 0;
      color: var(--jr-muted);
      font-size: 18px;
      line-height: 1.6;
    }

    .jr-search {
      display: flex;
      align-items: center;
      gap: 12px;
      width: min(680px, 100%);
      min-height: 56px;
      margin: 44px auto 0;
      padding: 8px;
      border: 1px solid var(--jr-border);
      border-radius: 16px;
      background: #fff;
      box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px -16px rgba(15, 76, 92, 0.18);
    }

    .jr-search-icon {
      display: grid;
      width: 40px;
      height: 40px;
      place-items: center;
      color: var(--jr-accent);
      font-size: 24px;
      font-weight: 700;
      flex: 0 0 auto;
    }

    .jr-search input {
      width: 100%;
      border: 0;
      outline: 0;
      background: transparent;
      color: var(--jr-text);
      font: 400 14px/1.4 Inter, sans-serif;
    }

    .jr-search input::placeholder {
      color: var(--jr-muted);
    }

    .jr-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 40px;
      padding: 0 20px;
      border: 1px solid transparent;
      border-radius: 9999px;
      background: linear-gradient(135deg, var(--jr-primary) 0%, var(--jr-primary) 45%, var(--jr-primary-2) 100%);
      color: #f8f7f4;
      font: 600 14px/1 Inter, sans-serif;
      text-decoration: none;
      box-shadow: 0 8px 24px -12px rgba(15, 76, 92, 0.35);
      white-space: nowrap;
    }

    .jr-button--light {
      background: #fff;
      color: var(--jr-text);
      border-color: var(--jr-border);
      box-shadow: var(--jr-shadow);
    }

    .jr-chips {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 24px;
      color: var(--jr-muted);
      font-size: 12px;
    }

    .jr-chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 28px;
      padding: 0 14px;
      border: 1px solid var(--jr-border);
      border-radius: 9999px;
      background: #fff;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
    }

    .jr-section {
      padding: 88px 0;
      border-bottom: 1px solid rgba(229, 231, 235, 0.78);
    }

    .jr-section-header {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 32px;
    }

    .jr-section h2 {
      margin-top: 22px;
      font-size: clamp(32px, 4vw, 44px);
    }

    .jr-section-lede {
      margin: 18px 0 0;
      color: var(--jr-muted);
      font-size: 18px;
      line-height: 1.6;
    }

    .jr-grid {
      display: grid;
      gap: 24px;
    }

    .jr-grid--3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .jr-grid--4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .jr-grid--6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    .jr-card {
      position: relative;
      border: 1px solid var(--jr-border);
      border-radius: 16px;
      background: var(--jr-card);
      box-shadow: var(--jr-shadow);
      transition: border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
    }

    .jr-card:hover {
      transform: translateY(-2px);
      border-color: rgba(15, 76, 92, 0.25);
      box-shadow: 0 1px 2px rgba(15, 76, 92, 0.04), 0 8px 24px -12px rgba(15, 76, 92, 0.18);
    }

    .jr-role-card {
      min-height: 160px;
      padding: 20px;
    }

    .jr-role-top {
      display: grid;
      grid-template-columns: 44px 1fr auto;
      gap: 14px;
      align-items: start;
    }

    .jr-logo-tile {
      display: grid;
      width: 44px;
      height: 44px;
      place-items: center;
      border-radius: 12px;
      background: var(--jr-soft);
      color: var(--jr-primary);
      font-family: Fraunces, Georgia, serif;
      font-size: 18px;
      font-weight: 500;
    }

    .jr-company {
      color: var(--jr-muted);
      font-size: 13px;
      line-height: 1.5;
    }

    .jr-role-title {
      margin-top: 2px;
      color: var(--jr-text);
      font-size: 18px;
      font-weight: 600;
      line-height: 1.25;
    }

    .jr-match {
      padding: 6px 10px;
      border-radius: 9999px;
      background: rgba(77, 182, 172, 0.12);
      color: var(--jr-primary);
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
    }

    .jr-meta {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--jr-border);
      color: var(--jr-muted);
      font-size: 13px;
    }

    .jr-role-bottom {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 16px;
      margin-top: 16px;
    }

    .jr-salary {
      color: var(--jr-text);
      font-family: Fraunces, Georgia, serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
    }

    .jr-mode {
      margin-top: 6px;
      color: var(--jr-muted);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .jr-card-link {
      color: var(--jr-primary);
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
    }

    .jr-footnote {
      margin-top: 30px;
      text-align: center;
      color: var(--jr-muted);
      font-size: 13px;
    }

    .jr-stat-card {
      padding: 24px;
      min-height: 190px;
    }

    .jr-stat-card h3,
    .jr-company-card h3,
    .jr-program-card h3,
    .jr-collection-card h3 {
      margin: 20px 0 16px;
      color: var(--jr-text);
      font-family: Fraunces, Georgia, serif;
      font-size: 22px;
      font-weight: 500;
      line-height: 1.15;
      letter-spacing: -0.02em;
    }

    .jr-stat-row {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      color: var(--jr-muted);
      font-size: 13px;
      line-height: 1.8;
    }

    .jr-stat-value {
      color: var(--jr-text);
      font-weight: 600;
      text-align: right;
    }

    .jr-company-card {
      min-height: 170px;
      padding: 24px 18px;
      text-align: center;
    }

    .jr-company-card .jr-logo-tile {
      margin: 0 auto;
      width: 56px;
      height: 56px;
      border-radius: 9999px;
      font-size: 20px;
    }

    .jr-company-card h3 {
      margin-bottom: 4px;
      font-size: 20px;
    }

    .jr-company-type {
      color: var(--jr-muted);
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .jr-open {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 18px;
      padding: 6px 10px;
      border-radius: 9999px;
      background: var(--jr-soft);
      color: var(--jr-muted);
      font-size: 12px;
    }

    .jr-program-card,
    .jr-collection-card {
      min-height: 190px;
      padding: 24px;
    }

    .jr-program-card .jr-tag {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .jr-tag {
      display: inline-flex;
      align-items: center;
      min-height: 24px;
      padding: 0 10px;
      border-radius: 9999px;
      background: rgba(77, 182, 172, 0.12);
      color: var(--jr-primary);
      font-size: 11px;
      font-weight: 500;
    }

    .jr-small-icon {
      color: var(--jr-primary);
      font-size: 20px;
      line-height: 1;
    }

    .jr-program-card p,
    .jr-collection-card p {
      margin: 0 0 24px;
      color: var(--jr-muted);
      font-size: 14px;
      line-height: 1.55;
    }

    .jr-cta-wrap {
      padding: 88px 0 96px;
    }

    .jr-cta {
      min-height: 240px;
      padding: 56px 32px;
      border-radius: 24px;
      background:
        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(135deg, var(--jr-primary) 0%, var(--jr-primary) 45%, var(--jr-primary-2) 100%);
      background-size: 56px 56px, 56px 56px, auto;
      box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px -16px rgba(15, 76, 92, 0.18);
      text-align: center;
    }

    .jr-cta h2 {
      color: #f8f7f4;
      font-size: clamp(28px, 4vw, 40px);
    }

    .jr-cta p {
      margin: 18px auto 28px;
      max-width: 560px;
      color: rgba(248, 247, 244, 0.78);
      font-size: 16px;
      line-height: 1.6;
    }

    .jr-cta .jr-button {
      background: #f8f7f4;
      color: var(--jr-primary);
      box-shadow: none;
    }

    @media (max-width: 980px) {
      .jr-grid--3,
      .jr-grid--4,
      .jr-grid--6 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .jr-section-header {
        align-items: start;
        flex-direction: column;
      }
    }

    @media (max-width: 640px) {
      .jr-shell {
        width: min(100% - 32px, 1200px);
      }

      .jr-hero {
        min-height: auto;
        padding: 96px 0 64px;
      }

      .jr-search {
        align-items: stretch;
        flex-direction: column;
      }

      .jr-grid--3,
      .jr-grid--4,
      .jr-grid--6 {
        grid-template-columns: 1fr;
      }

      .jr-role-bottom {
        align-items: stretch;
        flex-direction: column;
      }
    }
  `;

  const roles = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "Hybrid", "94% match"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "Remote", "91% match"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "On-site", "88% match"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "Hybrid", "85% match"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "On-site", "82% match"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "Remote", "90% match"]
  ];

  const trends = [
    ["Applied AI Engineer", "$150k avg", "Very High", "+42%"],
    ["Product Manager", "$135k avg", "High", "+18%"],
    ["Data Scientist", "$128k avg", "High", "+22%"],
    ["UX Researcher", "$110k avg", "Growing", "+27%"]
  ];

  const companies = [
    ["S", "Stripe", "Fintech", "42 open"],
    ["N", "Notion", "Productivity", "18 open"],
    ["G", "Grab", "Superapp", "87 open"],
    ["S", "Shopee", "E-commerce", "64 open"],
    ["P", "Petronas", "Energy", "31 open"],
    ["M", "Maybank", "Banking", "22 open"]
  ];

  const programmes = [
    ["Google STEP", "Google", "Internship"],
    ["Petronas Graduate Programme", "Petronas", "Graduate"],
    ["Shopee Graduate Programme", "Shopee", "Graduate"],
    ["Grab MET", "Grab", "Rotational"]
  ];

  const collections = [
    ["Highest paying graduate jobs", "The grad roles paying the most in 2026."],
    ["Remote-friendly companies", "Teams that thrive without an office."],
    ["Fast-growing AI companies", "Where the AI market is scaling now."],
    ["Best internships this month", "Open now for students and grads."],
    ["Top graduate employers", "Ranked by graduate satisfaction."],
    ["Companies hiring senior talent", "Leadership seats opening this quarter."]
  ];

  function ensureStyles() {
    if (document.getElementById("jobs-redesign-style")) return;
    const tag = document.createElement("style");
    tag.id = "jobs-redesign-style";
    tag.textContent = style;
    document.head.appendChild(tag);
  }

  function roleCard(role) {
    const [letter, company, title, location, type, age, salary, mode, match] = role;
    return `
      <article class="jr-card jr-role-card">
        <div class="jr-role-top">
          <div class="jr-logo-tile">${letter}</div>
          <div>
            <div class="jr-company">${company}</div>
            <div class="jr-role-title">${title}</div>
          </div>
          <span class="jr-match">${match}</span>
        </div>
        <div class="jr-meta">
          <span>${location}</span>
          <span>${type}</span>
          <span>${age}</span>
        </div>
        <div class="jr-role-bottom">
          <div>
            <div class="jr-salary">${salary}</div>
            <div class="jr-mode">${mode}</div>
          </div>
          <a class="jr-button" href="register.html">Preview -></a>
        </div>
      </article>
    `;
  }

  function trendCard(item) {
    const [title, salary, demand, growth] = item;
    return `
      <article class="jr-card jr-stat-card">
        <div class="jr-small-icon">↗ Trending</div>
        <h3>${title}</h3>
        <div class="jr-stat-row"><span>Avg salary</span><span class="jr-stat-value">${salary}</span></div>
        <div class="jr-stat-row"><span>Demand</span><span class="jr-stat-value">${demand}</span></div>
        <div class="jr-stat-row"><span>Growth</span><span class="jr-stat-value">${growth}</span></div>
      </article>
    `;
  }

  function companyCard(item) {
    const [letter, name, type, open] = item;
    return `
      <article class="jr-card jr-company-card">
        <div class="jr-logo-tile">${letter}</div>
        <h3>${name}</h3>
        <div class="jr-company-type">${type}</div>
        <div class="jr-open">▣ ${open}</div>
      </article>
    `;
  }

  function programmeCard(item) {
    const [title, org, tag] = item;
    return `
      <article class="jr-card jr-program-card">
        <span class="jr-small-icon">▱</span>
        <span class="jr-tag">${tag}</span>
        <h3>${title}</h3>
        <p>${org}</p>
        <a class="jr-card-link" href="register.html">Learn more -></a>
      </article>
    `;
  }

  function collectionCard(item) {
    const [title, body] = item;
    return `
      <article class="jr-card jr-collection-card">
        <div class="jr-small-icon">▯ Collection <span style="float:right">↗</span></div>
        <h3>${title}</h3>
        <p>${body}</p>
      </article>
    `;
  }

  function render() {
    if (!PAGE_RE.test(location.pathname)) return;
    ensureStyles();

    let main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      const anchor = document.querySelector("header, nav");
      if (anchor && anchor.parentNode) {
        anchor.parentNode.insertBefore(main, anchor.nextSibling);
      } else {
        document.body.insertBefore(main, document.body.firstChild);
      }
    }

    main.className = "jobs-redesign";
    main.innerHTML = `
      <section class="jr-hero">
        <div class="jr-shell">
          <div class="jr-eyebrow">Explore</div>
          <h1>Discover your next move.</h1>
          <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
          <form class="jr-search" action="register.html">
            <span class="jr-search-icon">*</span>
            <input aria-label="Search jobs" placeholder="Search AI Engineer..." />
            <button class="jr-button" type="submit">Search</button>
          </form>
          <div class="jr-chips">
            <span>Trending</span>
            <span class="jr-chip">AI Engineer</span>
            <span class="jr-chip">Software Engineer</span>
            <span class="jr-chip">Data Scientist</span>
            <span class="jr-chip">Product Manager</span>
            <span class="jr-chip">UI/UX Designer</span>
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-shell">
          <div class="jr-section-header">
            <div>
              <div class="jr-eyebrow">Featured opportunities</div>
              <h2>Curated roles, matched to real careers.</h2>
              <p class="jr-section-lede">Hand-picked openings from companies actively hiring this week.</p>
            </div>
            <a class="jr-button jr-button--light" href="register.html">Browse all jobs -></a>
          </div>
          <div class="jr-grid jr-grid--3">${roles.map(roleCard).join("")}</div>
          <p class="jr-footnote">To apply, create a free CareerGo account.</p>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-shell">
          <div class="jr-section-header">
            <div>
              <div class="jr-eyebrow">Trending careers</div>
              <h2>What the market is moving toward.</h2>
              <p class="jr-section-lede">Live signals from thousands of openings and salary reports.</p>
            </div>
            <a class="jr-button jr-button--light" href="register.html">Explore more -></a>
          </div>
          <div class="jr-grid jr-grid--4">${trends.map(trendCard).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-shell">
          <div class="jr-section-header">
            <div>
              <div class="jr-eyebrow">Featured companies</div>
              <h2>Teams hiring on CareerGo.</h2>
            </div>
            <a class="jr-button jr-button--light" href="companies.html">View all companies -></a>
          </div>
          <div class="jr-grid jr-grid--6">${companies.map(companyCard).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-shell">
          <div class="jr-section-header">
            <div>
              <div class="jr-eyebrow">Graduate opportunities</div>
              <h2>Programmes that launch careers.</h2>
            </div>
            <a class="jr-button jr-button--light" href="companies.html">View all opportunities -></a>
          </div>
          <div class="jr-grid jr-grid--4">${programmes.map(programmeCard).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-shell">
          <div class="jr-eyebrow">Career collections</div>
          <h2 style="margin: 22px 0 32px;">Curated lists, updated weekly.</h2>
          <div class="jr-grid jr-grid--3">${collections.map(collectionCard).join("")}</div>
        </div>
      </section>

      <section class="jr-cta-wrap">
        <div class="jr-shell">
          <div class="jr-cta">
            <h2>Ready to build your career roadmap?</h2>
            <p>Create your free CareerGo account and let Vera plan your next move.</p>
            <a class="jr-button" href="register.html">Create your free account -></a>
          </div>
        </div>
      </section>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
