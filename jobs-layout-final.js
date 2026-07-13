(function () {
  if (!/jobs\.html$/i.test(window.location.pathname)) return;

  const jobs = [
    { logo: "S", company: "Stripe", role: "Applied AI Engineer", place: "Singapore", type: "Full-time", time: "2d", pay: "$140k - $180k", mode: "HYBRID", match: "94% match" },
    { logo: "N", company: "Notion", role: "Senior Product Manager", place: "Remote - APAC", type: "Full-time", time: "5h", pay: "$150k - $200k", mode: "REMOTE", match: "91% match" },
    { logo: "G", company: "Grab", role: "Data Scientist, Marketplace", place: "Kuala Lumpur", type: "Full-time", time: "1d", pay: "RM 12k - 18k", mode: "ON-SITE", match: "88% match" },
    { logo: "S", company: "Shopee", role: "UI/UX Designer, Growth", place: "Jakarta", type: "Full-time", time: "3d", pay: "IDR 25M - 40M", mode: "HYBRID", match: "85% match" },
    { logo: "P", company: "Petronas", role: "Graduate Engineer, Digital", place: "Kuala Lumpur", type: "Graduate", time: "1w", pay: "RM 4.5k - 6k", mode: "ON-SITE", match: "82% match" },
    { logo: "L", company: "Linear", role: "Founding Design Engineer", place: "Remote", type: "Full-time", time: "6h", pay: "$160k - $210k", mode: "REMOTE", match: "90% match" }
  ];

  const careers = [
    { title: "Applied AI Engineer", salary: "$150k avg", demand: "Very High", growth: "+42%" },
    { title: "Product Manager", salary: "$135k avg", demand: "High", growth: "+18%" },
    { title: "Data Scientist", salary: "$128k avg", demand: "High", growth: "+22%" },
    { title: "UX Researcher", salary: "$110k avg", demand: "Growing", growth: "+27%" }
  ];

  const companies = [
    { logo: "S", name: "Stripe", sector: "FINTECH", open: "42 open" },
    { logo: "N", name: "Notion", sector: "PRODUCTIVITY", open: "18 open" },
    { logo: "G", name: "Grab", sector: "SUPERAPP", open: "87 open" },
    { logo: "S", name: "Shopee", sector: "E-COMMERCE", open: "64 open" },
    { logo: "P", name: "Petronas", sector: "ENERGY", open: "31 open" },
    { logo: "M", name: "Maybank", sector: "BANKING", open: "22 open" }
  ];

  const programmes = [
    { title: "Google STEP", org: "Google", tag: "Internship" },
    { title: "Petronas Graduate Programme", org: "Petronas", tag: "Graduate" },
    { title: "Shopee Graduate Programme", org: "Shopee", tag: "Graduate" },
    { title: "Grab MET", org: "Grab", tag: "Rotational" }
  ];

  const collections = [
    { title: "Highest paying graduate jobs", desc: "The grad roles paying the most in 2026." },
    { title: "Remote-friendly companies", desc: "Teams that thrive without an office." },
    { title: "Fast-growing AI companies", desc: "Where the AI market is scaling now." },
    { title: "Best internships this month", desc: "Open now for students and grads." },
    { title: "Top graduate employers", desc: "Ranked by graduate satisfaction." },
    { title: "Companies hiring senior talent", desc: "Leadership seats opening this quarter." }
  ];

  function installStyles() {
    if (document.getElementById("jobs-layout-final-style")) return;

    const style = document.createElement("style");
    style.id = "jobs-layout-final-style";
    style.textContent = `
      body.jobs-final-page {
        background: #f8f7f4;
        color: #1e293b;
      }

      body.jobs-final-page main.jobs-final {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        background: #f8f7f4;
        overflow: hidden;
      }

      .jf-wrap {
        width: min(1200px, calc(100% - 48px));
        margin: 0 auto;
      }

      .jf-hero {
        min-height: 560px;
        display: flex;
        align-items: center;
        text-align: center;
        border-bottom: 1px solid rgba(15, 76, 92, 0.08);
        background: #f8f7f4;
      }

      .jf-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 18px;
        color: #0f4c5c;
        font: 500 12px/1.4 Inter, system-ui, sans-serif;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .jf-eyebrow::before {
        content: "";
        width: 42px;
        height: 1px;
        background: rgba(15, 76, 92, 0.35);
      }

      .jf-hero h1,
      .jf-section-title {
        margin: 24px 0 0;
        font-family: Fraunces, Georgia, serif;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: #1e293b;
      }

      .jf-hero h1 {
        font-size: clamp(48px, 6vw, 72px);
        line-height: 1.05;
      }

      .jf-hero p {
        max-width: 700px;
        margin: 22px auto 0;
        color: #64748b;
        font: 400 18px/1.6 Inter, system-ui, sans-serif;
      }

      .jf-search {
        width: min(640px, 100%);
        height: 56px;
        margin: 34px auto 0;
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px -16px rgba(15, 76, 92, 0.18);
      }

      .jf-search-mark {
        width: 36px;
        display: inline-grid;
        place-items: center;
        color: #4db6ac;
        font-size: 22px;
      }

      .jf-search input {
        flex: 1;
        min-width: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: #1e293b;
        font: 400 14px/1.4 Inter, system-ui, sans-serif;
      }

      .jf-search button,
      .jf-primary {
        border: 0;
        border-radius: 999px;
        background: #0f4c5c;
        color: #f8f7f4;
        font: 600 14px/1 Inter, system-ui, sans-serif;
        padding: 14px 24px;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 76, 92, 0.24);
        cursor: pointer;
      }

      .jf-chip-row {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 18px;
        color: #64748b;
        font: 400 12px/1 Inter, system-ui, sans-serif;
      }

      .jf-chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 28px;
        padding: 0 14px;
        border-radius: 999px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        color: #64748b;
        white-space: nowrap;
      }

      .jf-section {
        padding: 88px 0;
        border-bottom: 1px solid rgba(15, 76, 92, 0.08);
      }

      .jf-section-head {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        align-items: end;
        margin-bottom: 32px;
      }

      .jf-section-title {
        font-size: clamp(32px, 3.4vw, 44px);
        line-height: 1.1;
      }

      .jf-section-copy {
        margin-top: 18px;
        color: #64748b;
        font: 400 15px/1.55 Inter, system-ui, sans-serif;
      }

      .jf-link {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #0f4c5c;
        font: 500 14px/1 Inter, system-ui, sans-serif;
        text-decoration: none;
        white-space: nowrap;
      }

      .jf-grid {
        display: grid;
        gap: 24px;
        min-width: 0;
      }

      .jf-grid.jobs { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .jf-grid.careers { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .jf-grid.companies { grid-template-columns: repeat(6, minmax(0, 1fr)); }
      .jf-grid.programmes { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .jf-grid.collections { grid-template-columns: repeat(3, minmax(0, 1fr)); }

      .jf-card {
        min-width: 0;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 2px 8px -2px rgba(15, 23, 42, 0.06);
        color: #1e293b;
      }

      .jf-job-card {
        display: grid;
        gap: 18px;
      }

      .jf-job-top {
        display: grid;
        grid-template-columns: 44px 1fr auto;
        gap: 14px;
        align-items: start;
      }

      .jf-logo {
        width: 44px;
        height: 44px;
        display: inline-grid;
        place-items: center;
        border-radius: 16px;
        background: #f2f3f5;
        color: #0f4c5c;
        font: 500 18px/1 Fraunces, Georgia, serif;
      }

      .jf-muted {
        color: #64748b;
        font: 400 13px/1.45 Inter, system-ui, sans-serif;
      }

      .jf-title-sm {
        margin: 3px 0 0;
        color: #1e293b;
        font: 500 18px/1.25 Fraunces, Georgia, serif;
        letter-spacing: -0.02em;
      }

      .jf-match {
        display: inline-flex;
        align-items: center;
        min-height: 24px;
        padding: 0 10px;
        border-radius: 999px;
        background: rgba(77, 182, 172, 0.12);
        color: #0f4c5c;
        font: 500 11px/1 Inter, system-ui, sans-serif;
        white-space: nowrap;
      }

      .jf-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        color: #64748b;
        font: 400 13px/1 Inter, system-ui, sans-serif;
      }

      .jf-job-bottom {
        border-top: 1px solid #e5e7eb;
        padding-top: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .jf-pay {
        color: #1e293b;
        font: 500 18px/1.2 Fraunces, Georgia, serif;
        letter-spacing: -0.02em;
      }

      .jf-mode {
        margin-top: 4px;
        color: #64748b;
        font: 500 11px/1 Inter, system-ui, sans-serif;
        letter-spacing: 0.12em;
      }

      .jf-preview {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border-radius: 999px;
        background: #0f4c5c;
        color: #f8f7f4;
        padding: 10px 16px;
        font: 600 12px/1 Inter, system-ui, sans-serif;
        text-decoration: none;
        white-space: nowrap;
      }

      .jf-career-card {
        min-height: 148px;
      }

      .jf-mini-label {
        color: #0f4c5c;
        font: 400 13px/1 Inter, system-ui, sans-serif;
        margin-bottom: 20px;
      }

      .jf-stat-row {
        display: flex;
        justify-content: space-between;
        gap: 18px;
        color: #64748b;
        font: 400 13px/1.7 Inter, system-ui, sans-serif;
      }

      .jf-stat-row strong {
        color: #1e293b;
        font-weight: 500;
      }

      .jf-company-card {
        text-align: center;
        min-height: 150px;
        display: grid;
        justify-items: center;
        align-content: center;
        gap: 10px;
      }

      .jf-company-card .jf-logo {
        background: #f8fafc;
      }

      .jf-company-name {
        color: #1e293b;
        font: 500 18px/1.15 Fraunces, Georgia, serif;
      }

      .jf-company-sector,
      .jf-programme-tag {
        color: #64748b;
        font: 500 11px/1 Inter, system-ui, sans-serif;
        letter-spacing: 0.12em;
      }

      .jf-open-pill,
      .jf-programme-tag {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        background: #f2f3f5;
        padding: 6px 10px;
      }

      .jf-programme-card {
        min-height: 170px;
        display: grid;
        align-content: space-between;
      }

      .jf-programme-top {
        display: flex;
        justify-content: space-between;
        gap: 16px;
      }

      .jf-collection-card {
        min-height: 112px;
        display: grid;
        gap: 12px;
      }

      .jf-collection-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #0f4c5c;
        font: 400 13px/1 Inter, system-ui, sans-serif;
      }

      .jf-cta {
        margin: 96px auto;
        width: min(1200px, calc(100% - 48px));
        min-height: 280px;
        border-radius: 24px;
        display: grid;
        place-items: center;
        text-align: center;
        color: #f8f7f4;
        background:
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(135deg, #0f4c5c 0%, #146c78 100%);
        background-size: 64px 64px, 64px 64px, auto;
        box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px -16px rgba(15, 76, 92, 0.18);
        padding: 48px 24px;
      }

      .jf-cta h2 {
        margin: 0;
        color: #f8f7f4;
        font: 500 clamp(28px, 3vw, 40px)/1.1 Fraunces, Georgia, serif;
        letter-spacing: -0.02em;
      }

      .jf-cta p {
        margin: 18px auto 28px;
        color: rgba(248, 247, 244, 0.82);
        font: 400 15px/1.6 Inter, system-ui, sans-serif;
      }

      .jf-cta .jf-primary {
        background: #f8f7f4;
        color: #0f4c5c;
      }

      .jf-footer {
        border-top: 1px solid rgba(15, 76, 92, 0.08);
        color: #64748b;
        padding: 32px 0;
        font: 400 12px/1.4 Inter, system-ui, sans-serif;
      }

      .jf-footer .jf-wrap {
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }

      @media (max-width: 980px) {
        .jf-grid.jobs,
        .jf-grid.collections { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .jf-grid.careers,
        .jf-grid.companies,
        .jf-grid.programmes { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .jf-hero { min-height: 500px; }
      }

      @media (max-width: 640px) {
        .jf-wrap,
        .jf-cta { width: min(100% - 32px, 1200px); }
        .jf-hero { min-height: auto; padding: 72px 0; }
        .jf-section { padding: 64px 0; }
        .jf-section-head { display: block; }
        .jf-link { margin-top: 18px; }
        .jf-grid.jobs,
        .jf-grid.careers,
        .jf-grid.companies,
        .jf-grid.programmes,
        .jf-grid.collections { grid-template-columns: 1fr; }
        .jf-search { height: auto; align-items: stretch; flex-wrap: wrap; }
        .jf-search input { min-height: 40px; }
        .jf-search button { width: 100%; }
        .jf-footer .jf-wrap { flex-direction: column; }
      }
    `;
    document.head.appendChild(style);
  }

  function jobCard(job) {
    return `
      <article class="jf-card jf-job-card">
        <div class="jf-job-top">
          <div class="jf-logo">${job.logo}</div>
          <div>
            <div class="jf-muted">${job.company}</div>
            <h3 class="jf-title-sm">${job.role}</h3>
          </div>
          <span class="jf-match">${job.match}</span>
        </div>
        <div class="jf-meta">
          <span>${job.place}</span>
          <span>${job.type}</span>
          <span>${job.time}</span>
        </div>
        <div class="jf-job-bottom">
          <div>
            <div class="jf-pay">${job.pay}</div>
            <div class="jf-mode">${job.mode}</div>
          </div>
          <a class="jf-preview" href="login.html">Preview &rarr;</a>
        </div>
      </article>
    `;
  }

  function careerCard(career) {
    return `
      <article class="jf-card jf-career-card">
        <div class="jf-mini-label">Trending</div>
        <h3 class="jf-title-sm">${career.title}</h3>
        <div class="jf-stat-row" style="margin-top: 22px;">
          <span>Avg salary<br><strong>${career.salary}</strong></span>
          <span>Demand<br><strong>${career.demand}</strong></span>
          <span>Growth<br><strong>${career.growth}</strong></span>
        </div>
      </article>
    `;
  }

  function companyCard(company) {
    return `
      <article class="jf-card jf-company-card">
        <div class="jf-logo">${company.logo}</div>
        <div>
          <div class="jf-company-name">${company.name}</div>
          <div class="jf-company-sector">${company.sector}</div>
        </div>
        <span class="jf-open-pill">${company.open}</span>
      </article>
    `;
  }

  function programmeCard(programme) {
    return `
      <article class="jf-card jf-programme-card">
        <div class="jf-programme-top">
          <span style="color:#0f4c5c;">Graduation</span>
          <span class="jf-programme-tag">${programme.tag}</span>
        </div>
        <div>
          <h3 class="jf-title-sm">${programme.title}</h3>
          <p class="jf-muted" style="margin: 8px 0 0;">${programme.org}</p>
        </div>
        <a class="jf-link" href="register.html">Learn more &rarr;</a>
      </article>
    `;
  }

  function collectionCard(collection) {
    return `
      <article class="jf-card jf-collection-card">
        <div class="jf-collection-top">
          <span>Collection</span>
          <span>&rarr;</span>
        </div>
        <h3 class="jf-title-sm">${collection.title}</h3>
        <p class="jf-muted" style="margin:0;">${collection.desc}</p>
      </article>
    `;
  }

  function render() {
    installStyles();

    const main = document.querySelector("main");
    if (!main) return;

    document.body.classList.add("jobs-final-page");
    main.className = "jobs-final";
    main.innerHTML = `
      <section class="jf-hero">
        <div class="jf-wrap">
          <div class="jf-eyebrow">Explore</div>
          <h1>Discover your next move.</h1>
          <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
          <form class="jf-search">
            <span class="jf-search-mark">*</span>
            <input type="search" aria-label="Search careers" placeholder="Search AI Engineer..." />
            <button type="button">Search</button>
          </form>
          <div class="jf-chip-row">
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
              <div class="jf-eyebrow">Featured opportunities</div>
              <h2 class="jf-section-title">Curated roles, matched to real careers.</h2>
              <p class="jf-section-copy">Hand-picked openings from companies actively hiring this week.</p>
            </div>
            <a class="jf-link" href="register.html">Browse all jobs &rarr;</a>
          </div>
          <div class="jf-grid jobs">${jobs.map(jobCard).join("")}</div>
          <p class="jf-muted" style="text-align:center; margin:28px 0 0;">To apply, create a free CareerGo account.</p>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-section-head">
            <div>
              <div class="jf-eyebrow">Trending careers</div>
              <h2 class="jf-section-title">What the market is moving toward.</h2>
              <p class="jf-section-copy">Live signals from thousands of openings and salary reports.</p>
            </div>
            <a class="jf-link" href="register.html">Explore more &rarr;</a>
          </div>
          <div class="jf-grid careers">${careers.map(careerCard).join("")}</div>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-section-head">
            <div>
              <div class="jf-eyebrow">Featured companies</div>
              <h2 class="jf-section-title">Teams hiring on CareerGo.</h2>
            </div>
            <a class="jf-link" href="companies.html">View all companies &rarr;</a>
          </div>
          <div class="jf-grid companies">${companies.map(companyCard).join("")}</div>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-section-head">
            <div>
              <div class="jf-eyebrow">Graduate opportunities</div>
              <h2 class="jf-section-title">Programmes that launch careers.</h2>
            </div>
            <a class="jf-link" href="register.html">View all opportunities &rarr;</a>
          </div>
          <div class="jf-grid programmes">${programmes.map(programmeCard).join("")}</div>
        </div>
      </section>

      <section class="jf-section">
        <div class="jf-wrap">
          <div class="jf-eyebrow">Career collections</div>
          <h2 class="jf-section-title">Curated lists, updated weekly.</h2>
          <div class="jf-grid collections" style="margin-top:32px;">${collections.map(collectionCard).join("")}</div>
        </div>
      </section>

      <section class="jf-cta">
        <div>
          <h2>Ready to build your career roadmap?</h2>
          <p>Create your free CareerGo account and let Vera plan your next move.</p>
          <a class="jf-primary" href="register.html" style="display:inline-flex; text-decoration:none;">Create your free account &rarr;</a>
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
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  [50, 250, 800, 1800].forEach(function (delay) {
    window.setTimeout(render, delay);
  });
})();
