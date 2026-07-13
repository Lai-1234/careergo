(function () {
  const pageKey = (location.pathname || "").toLowerCase();
  if (!pageKey.endsWith("jobs.html")) return;

  const styleId = "jobs-layout-final-v2-style";
  const icon = {
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>',
    trend: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 17 6-6 4 4 7-7"></path><path d="M14 8h6v6"></path></svg>',
    map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M3 12h18"></path></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
    cap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 10-10-5-10 5 10 5 10-5Z"></path><path d="M6 12v5c3 2 9 2 12 0v-5"></path></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v16l-6-3-6 3V4Z"></path></svg>'
  };

  const jobs = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "Hybrid", "94% match"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "Remote", "91% match"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "On-site", "88% match"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "Hybrid", "85% match"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "On-site", "82% match"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "Remote", "90% match"]
  ];

  const careers = [
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
    ["Internship", "Google STEP", "Google"],
    ["Graduate", "Petronas Graduate Programme", "Petronas"],
    ["Graduate", "Shopee Graduate Programme", "Shopee"],
    ["Rotational", "Grab MET", "Grab"]
  ];

  const collections = [
    ["Highest paying graduate jobs", "The grad roles paying the most in 2026."],
    ["Remote-friendly companies", "Teams that thrive without an office."],
    ["Fast-growing AI companies", "Where the AI market is scaling now."],
    ["Best internships this month", "Open now for students and grads."],
    ["Top graduate employers", "Ranked by graduate satisfaction."],
    ["Companies hiring senior talent", "Leadership seats opening this quarter."]
  ];

  function injectStyles() {
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      body.jobs-final-v2 {
        background: #f8f7f4 !important;
        color: #1e293b !important;
      }

      body.jobs-final-v2 main.jobs-final-v2 {
        display: block !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: #f8f7f4 !important;
        color: #1e293b !important;
      }

      body.jobs-final-v2 main.jobs-final-v2 ~ footer {
        display: none !important;
      }

      .jobs-final-v2,
      .jobs-final-v2 * {
        box-sizing: border-box;
      }

      .jobs-final-v2 svg {
        width: 18px;
        height: 18px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .jf-wrap {
        width: min(1200px, calc(100% - 48px));
        margin: 0 auto;
      }

      .jf-hero {
        min-height: 620px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e5e7eb;
        text-align: center;
      }

      .jf-hero-inner {
        width: 100%;
        padding: 90px 0 82px;
      }

      .jf-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 18px;
        color: #0f4c5c;
        font: 600 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
        letter-spacing: .18em;
        text-transform: uppercase;
      }

      .jf-eyebrow::before {
        content: "";
        width: 48px;
        height: 1px;
        background: #b8c9c5;
      }

      .jf-hero h1,
      .jf-section h2,
      .jf-cta h2 {
        font-family: Fraunces, Georgia, serif;
        font-weight: 500;
        letter-spacing: -.02em;
        color: #1e293b;
      }

      .jf-hero h1 {
        margin: 30px 0 22px;
        font-size: clamp(50px, 5.4vw, 72px);
        line-height: 1.05;
      }

      .jf-hero p {
        max-width: 690px;
        margin: 0 auto;
        color: #64748b;
        font: 400 18px/1.6 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-search {
        width: min(760px, 100%);
        height: 56px;
        margin: 36px auto 18px;
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 2px 4px rgba(15,23,42,.04), 0 24px 48px -16px rgba(15,76,92,.18);
      }

      .jf-search-icon {
        color: #4db6ac;
        display: inline-flex;
        padding-left: 10px;
      }

      .jf-search input {
        min-width: 0;
        flex: 1;
        border: 0;
        outline: 0;
        background: transparent;
        color: #1e293b;
        font: 400 14px/1.4 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-search input::placeholder {
        color: #64748b;
      }

      .jf-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 40px;
        padding: 0 22px;
        border: 0;
        border-radius: 999px;
        background: #0f4c5c;
        color: #f8f7f4;
        font: 600 14px/1 Inter, ui-sans-serif, system-ui, sans-serif;
        text-decoration: none;
        box-shadow: 0 8px 24px -12px rgba(15,76,92,.45);
        cursor: pointer;
      }

      .jf-btn svg {
        width: 16px;
        height: 16px;
      }

      .jf-chips {
        display: flex !important;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        color: #64748b;
        font: 400 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-chip {
        display: inline-flex;
        align-items: center;
        min-height: 26px;
        padding: 0 14px;
        border-radius: 999px;
        background: #fff;
        border: 1px solid #e5e7eb;
        box-shadow: 0 1px 2px rgba(15,23,42,.04);
        color: #64748b;
      }

      .jf-section {
        padding: 82px 0;
        border-bottom: 1px solid #e5e7eb;
      }

      .jf-section-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 32px;
        margin-bottom: 32px;
      }

      .jf-section h2 {
        margin: 20px 0 12px;
        font-size: clamp(32px, 3vw, 42px);
        line-height: 1.12;
      }

      .jf-section p {
        margin: 0;
        color: #64748b;
        font: 400 16px/1.55 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
        color: #0f4c5c;
        text-decoration: none;
        font: 600 14px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-grid-3,
      .jf-grid-4,
      .jf-grid-6 {
        display: grid !important;
        gap: 24px !important;
      }

      .jf-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .jf-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .jf-grid-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }

      .jf-card {
        position: relative;
        min-width: 0;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,76,92,.12);
      }

      .jf-card:hover {
        border-color: rgba(15,76,92,.25);
        box-shadow: 0 1px 2px rgba(15,76,92,.04), 0 16px 32px -14px rgba(15,76,92,.18);
        transform: translateY(-2px);
      }

      .jf-logo {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        background: #f2f3f5;
        color: #0f4c5c;
        font: 500 18px/1 Fraunces, Georgia, serif;
      }

      .jf-job {
        min-height: 150px;
      }

      .jf-job-top {
        display: grid;
        grid-template-columns: 44px minmax(0, 1fr) auto;
        gap: 14px;
        align-items: start;
      }

      .jf-company {
        color: #64748b;
        font: 400 13px/1.2 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-job-title,
      .jf-card-title {
        margin: 4px 0 0;
        color: #1e293b;
        font: 600 18px/1.2 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-match {
        align-self: start;
        padding: 7px 10px;
        border-radius: 999px;
        background: rgba(77,182,172,.16);
        color: #0f4c5c;
        font: 600 11px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin: 22px 0 18px;
        color: #64748b;
        font: 400 13px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-meta span {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .jf-meta svg {
        width: 14px;
        height: 14px;
        color: #0f4c5c;
      }

      .jf-divider {
        height: 1px;
        background: #e5e7eb;
        margin: 0 0 18px;
      }

      .jf-job-foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .jf-pay {
        color: #1e293b;
        font: 500 18px/1.2 Fraunces, Georgia, serif;
      }

      .jf-mode {
        margin-top: 4px;
        color: #64748b;
        font: 500 11px/1 Inter, ui-sans-serif, system-ui, sans-serif;
        letter-spacing: .12em;
        text-transform: uppercase;
      }

      .jf-mini-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 34px;
        padding: 0 16px;
        border-radius: 999px;
        background: #0f4c5c;
        color: #f8f7f4;
        text-decoration: none;
        font: 600 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-career .jf-card-title {
        font-family: Fraunces, Georgia, serif;
        font-weight: 500;
        font-size: 24px;
      }

      .jf-stat-line {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        margin-top: 14px;
        color: #64748b;
        font: 400 13px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-stat-line strong {
        color: #1e293b;
        font-weight: 600;
      }

      .jf-company-card {
        min-height: 160px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .jf-company-card .jf-card-title {
        margin: 4px 0 0;
        font-family: Fraunces, Georgia, serif;
        font-weight: 500;
      }

      .jf-company-card .jf-mode {
        color: #64748b;
      }

      .jf-open {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 24px;
        padding: 0 10px;
        border-radius: 999px;
        background: #f2f3f5;
        color: #64748b;
        font: 500 11px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-programme,
      .jf-collection {
        min-height: 150px;
      }

      .jf-programme .jf-card-title,
      .jf-collection .jf-card-title {
        margin-top: 28px;
        font-family: Fraunces, Georgia, serif;
        font-weight: 500;
        font-size: 22px;
      }

      .jf-programme-link {
        position: absolute;
        left: 20px;
        bottom: 20px;
        color: #0f4c5c;
        text-decoration: none;
        font: 600 13px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-collection-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #0f4c5c;
        font: 400 13px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-cta-wrap {
        padding: 96px 0;
      }

      .jf-cta {
        position: relative;
        overflow: hidden;
        min-height: 220px;
        display: grid;
        place-items: center;
        text-align: center;
        border-radius: 28px;
        padding: 48px 24px;
        color: #f8f7f4;
        background:
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(135deg, #0f4c5c 0%, #146c78 100%);
        background-size: 64px 64px, 64px 64px, auto;
        box-shadow: 0 24px 48px -16px rgba(15,76,92,.18);
      }

      .jf-cta h2 {
        margin: 0 0 16px;
        color: #f8f7f4 !important;
        font-size: clamp(30px, 3.4vw, 42px);
      }

      .jf-cta p {
        margin: 0 0 28px;
        color: rgba(248,247,244,.82) !important;
        font: 400 16px/1.5 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-cta .jf-btn {
        background: #f8f7f4;
        color: #0f4c5c;
      }

      .jf-footer {
        padding: 28px 0;
        border-top: 1px solid #e5e7eb;
        color: #64748b;
        font: 400 12px/1.4 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jf-footer .jf-wrap {
        display: flex;
        justify-content: space-between;
        gap: 24px;
      }

      @media (max-width: 1000px) {
        .jf-grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .jf-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .jf-grid-6 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      }

      @media (max-width: 720px) {
        .jf-wrap { width: min(100% - 32px, 1200px); }
        .jf-hero { min-height: auto; }
        .jf-hero-inner { padding: 72px 0 64px; }
        .jf-hero h1 { font-size: 44px; }
        .jf-search { height: auto; align-items: stretch; flex-wrap: wrap; }
        .jf-search .jf-btn { width: 100%; }
        .jf-section-head { align-items: flex-start; flex-direction: column; }
        .jf-grid-3,
        .jf-grid-4,
        .jf-grid-6 { grid-template-columns: 1fr; }
        .jf-footer .jf-wrap { flex-direction: column; }
      }
    `;
    document.head.appendChild(style);
  }

  function jobCard(job) {
    return `
      <article class="jf-card jf-job">
        <div class="jf-job-top">
          <div class="jf-logo">${job[0]}</div>
          <div>
            <div class="jf-company">${job[1]}</div>
            <h3 class="jf-job-title">${job[2]}</h3>
          </div>
          <span class="jf-match">${job[8]}</span>
        </div>
        <div class="jf-meta">
          <span>${icon.map}${job[3]}</span>
          <span>${icon.briefcase}${job[4]}</span>
          <span>${icon.clock}${job[5]}</span>
        </div>
        <div class="jf-divider"></div>
        <div class="jf-job-foot">
          <div>
            <div class="jf-pay">${job[6]}</div>
            <div class="jf-mode">${job[7]}</div>
          </div>
          <a class="jf-mini-btn" href="login.html">Preview ${icon.arrow}</a>
        </div>
      </article>
    `;
  }

  function render() {
    injectStyles();
    document.body.classList.add("jobs-final-v2");

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

    main.className = "jobs-final-v2";
    main.innerHTML = `
      <section class="jf-hero">
        <div class="jf-wrap jf-hero-inner">
          <div class="jf-eyebrow">Explore</div>
          <h1>Discover your next move.</h1>
          <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
          <form class="jf-search" action="login.html">
            <span class="jf-search-icon">${icon.search}</span>
            <input aria-label="Search careers" placeholder="Search AI Engineer..." />
            <button class="jf-btn" type="submit">${icon.search}Search</button>
          </form>
          <div class="jf-chips">
            <span>Trending</span>
            <span class="jf-chip">AI Engineer</span>
            <span class="jf-chip">Software Engineer</span>
            <span class="jf-chip">Data Scientist</span>
            <span class="jf-chip">Product Manager</span>
            <span class="jf-chip">UI/UX Designer</span>
          </div>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-section-head">
            <div>
              <div class="jf-eyebrow">Featured Opportunities</div>
              <h2>Curated roles, matched to real careers.</h2>
              <p>Hand-picked openings from companies actively hiring this week.</p>
            </div>
            <a class="jf-link" href="login.html">Browse all jobs ${icon.arrow}</a>
          </div>
          <div class="jf-grid-3">${jobs.map(jobCard).join("")}</div>
          <p style="text-align:center;margin-top:28px;font-size:13px;">To apply, create a free CareerGo account.</p>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-section-head">
            <div>
              <div class="jf-eyebrow">Trending Careers</div>
              <h2>What the market is moving toward.</h2>
              <p>Live signals from thousands of openings and salary reports.</p>
            </div>
            <a class="jf-link" href="companies.html">Explore more ${icon.arrow}</a>
          </div>
          <div class="jf-grid-4">
            ${careers.map(item => `
              <article class="jf-card jf-career">
                <div class="jf-company" style="display:flex;align-items:center;gap:8px;color:#0f4c5c;">${icon.trend}Trending</div>
                <h3 class="jf-card-title">${item[0]}</h3>
                <div class="jf-stat-line"><span>Avg salary</span><strong>${item[1]}</strong></div>
                <div class="jf-stat-line"><span>Demand</span><strong>${item[2]}</strong></div>
                <div class="jf-stat-line"><span>Growth</span><strong style="color:#0f4c5c;">${item[3]}</strong></div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-section-head">
            <div>
              <div class="jf-eyebrow">Featured Companies</div>
              <h2>Teams hiring on CareerGo.</h2>
            </div>
            <a class="jf-link" href="companies.html">View all companies ${icon.arrow}</a>
          </div>
          <div class="jf-grid-6">
            ${companies.map(item => `
              <article class="jf-card jf-company-card">
                <div class="jf-logo">${item[0]}</div>
                <h3 class="jf-card-title">${item[1]}</h3>
                <div class="jf-mode">${item[2]}</div>
                <span class="jf-open">${icon.briefcase}${item[3]}</span>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-section-head">
            <div>
              <div class="jf-eyebrow">Graduate Opportunities</div>
              <h2>Programmes that launch careers.</h2>
            </div>
            <a class="jf-link" href="companies.html">View all opportunities ${icon.arrow}</a>
          </div>
          <div class="jf-grid-4">
            ${programmes.map(item => `
              <article class="jf-card jf-programme">
                <div style="display:flex;align-items:center;justify-content:space-between;color:#0f4c5c;">
                  ${icon.cap}<span class="jf-match">${item[0]}</span>
                </div>
                <h3 class="jf-card-title">${item[1]}</h3>
                <p>${item[2]}</p>
                <a class="jf-programme-link" href="login.html">Learn more ${icon.arrow}</a>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div>
            <div class="jf-eyebrow">Career Collections</div>
            <h2>Curated lists, updated weekly.</h2>
          </div>
          <div class="jf-grid-3" style="margin-top:32px;">
            ${collections.map(item => `
              <article class="jf-card jf-collection">
                <div class="jf-collection-top"><span>${icon.bookmark} Collection</span>${icon.arrow}</div>
                <h3 class="jf-card-title">${item[0]}</h3>
                <p>${item[1]}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jf-cta-wrap">
        <div class="jf-wrap">
          <div class="jf-cta">
            <div>
              <h2>Ready to build your career roadmap?</h2>
              <p>Create your free CareerGo account and let Vera plan your next move.</p>
              <a class="jf-btn" href="register.html">Create your free account ${icon.arrow}</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="jf-footer">
        <div class="jf-wrap">
          <span>© 2026 CareerGo. All rights reserved.</span>
          <span>Designed for every stage of your career.</span>
        </div>
      </footer>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }

  [100, 400, 1000, 2000].forEach((delay) => window.setTimeout(render, delay));
})();
