(function () {
  var isJobsPage = /(^|\/)jobs\.html$/i.test(window.location.pathname) || /jobs/i.test(document.title || "");
  if (!isJobsPage) return;

  var roles = [
    { initial: "S", company: "Stripe", title: "Applied AI Engineer", place: "Singapore", type: "Full-time", age: "2d", salary: "$140k - $180k", mode: "HYBRID", match: "94% match" },
    { initial: "N", company: "Notion", title: "Senior Product Manager", place: "Remote - APAC", type: "Full-time", age: "5h", salary: "$150k - $200k", mode: "REMOTE", match: "91% match" },
    { initial: "G", company: "Grab", title: "Data Scientist, Marketplace", place: "Kuala Lumpur", type: "Full-time", age: "1d", salary: "RM 12k - 18k", mode: "ON-SITE", match: "88% match" },
    { initial: "S", company: "Shopee", title: "UI/UX Designer, Growth", place: "Jakarta", type: "Full-time", age: "3d", salary: "IDR 25M - 40M", mode: "HYBRID", match: "85% match" },
    { initial: "P", company: "Petronas", title: "Graduate Engineer, Digital", place: "Kuala Lumpur", type: "Graduate", age: "1w", salary: "RM 4.5k - 6k", mode: "ON-SITE", match: "82% match" },
    { initial: "L", company: "Linear", title: "Founding Design Engineer", place: "Remote", type: "Full-time", age: "6h", salary: "$160k - $210k", mode: "REMOTE", match: "90% match" }
  ];

  var trends = [
    { title: "Applied AI Engineer", salary: "$150k avg", demand: "Very High", growth: "+42%" },
    { title: "Product Manager", salary: "$135k avg", demand: "High", growth: "+18%" },
    { title: "Data Scientist", salary: "$128k avg", demand: "High", growth: "+22%" },
    { title: "UX Researcher", salary: "$110k avg", demand: "Growing", growth: "+27%" }
  ];

  var companies = [
    { initial: "S", name: "Stripe", sector: "FINTECH", open: "42 open" },
    { initial: "N", name: "Notion", sector: "PRODUCTIVITY", open: "18 open" },
    { initial: "G", name: "Grab", sector: "SUPERAPP", open: "87 open" },
    { initial: "S", name: "Shopee", sector: "E-COMMERCE", open: "64 open" },
    { initial: "P", name: "Petronas", sector: "ENERGY", open: "31 open" },
    { initial: "M", name: "Maybank", sector: "BANKING", open: "22 open" }
  ];

  var programs = [
    { type: "Internship", title: "Google STEP", org: "Google" },
    { type: "Graduate", title: "Petronas Graduate Programme", org: "Petronas" },
    { type: "Graduate", title: "Shopee Graduate Programme", org: "Shopee" },
    { type: "Rotational", title: "Grab MET", org: "Grab" }
  ];

  var collections = [
    { title: "Highest paying graduate jobs", text: "The grad roles paying the most in 2026." },
    { title: "Remote-friendly companies", text: "Teams that thrive without an office." },
    { title: "Fast-growing AI companies", text: "Where the AI market is scaling now." },
    { title: "Best internships this month", text: "Open now for students and grads." },
    { title: "Top graduate employers", text: "Ranked by graduate satisfaction." },
    { title: "Companies hiring senior talent", text: "Leadership seats opening this quarter." }
  ];

  function icon(name) {
    return '<i data-lucide="' + name + '" aria-hidden="true"></i>';
  }

  function installStyles() {
    if (document.getElementById("jobs-final-fix-v2-style")) return;
    var style = document.createElement("style");
    style.id = "jobs-final-fix-v2-style";
    style.textContent = `
      .jobs-redesign {
        --jr-bg: #f8f7f4;
        --jr-card: #ffffff;
        --jr-text: #1e293b;
        --jr-muted: #64748b;
        --jr-green: #0f4c5c;
        --jr-green-2: #146c78;
        --jr-accent: #4db6ac;
        --jr-border: #e5e7eb;
        background: var(--jr-bg);
        color: var(--jr-text);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        min-height: 100vh;
        overflow: hidden;
      }

      .jobs-redesign * { box-sizing: border-box; }

      .jobs-redesign i[data-lucide] {
        width: 18px;
        height: 18px;
        stroke-width: 2;
        flex: 0 0 auto;
      }

      .jr-wrap {
        width: min(1200px, calc(100% - 48px));
        margin: 0 auto;
      }

      .jr-hero {
        padding: 104px 0 76px;
        text-align: center;
        border-bottom: 1px solid rgba(229, 231, 235, 0.78);
      }

      .jr-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 18px;
        color: var(--jr-green);
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        line-height: 1.4;
      }

      .jr-eyebrow::before {
        content: "";
        width: 48px;
        height: 1px;
        background: rgba(15, 76, 92, 0.32);
      }

      .jr-hero h1,
      .jr-section-title,
      .jr-cta h2 {
        font-family: Fraunces, Georgia, serif;
        font-weight: 500;
        letter-spacing: -0.02em;
        color: var(--jr-text);
      }

      .jr-hero h1 {
        margin: 28px auto 22px;
        font-size: clamp(48px, 7vw, 72px);
        line-height: 1.05;
        max-width: 900px;
      }

      .jr-hero p {
        max-width: 700px;
        margin: 0 auto;
        color: var(--jr-muted);
        font-size: 18px;
        line-height: 1.6;
      }

      .jr-search {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;
        width: min(820px, 100%);
        min-height: 56px;
        margin: 38px auto 20px;
        padding: 8px 8px 8px 18px;
        border: 1px solid var(--jr-border);
        border-radius: 16px;
        background: var(--jr-card);
        box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px -16px rgba(15, 76, 92, 0.18);
      }

      .jr-search-field {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--jr-muted);
        text-align: left;
        min-width: 0;
      }

      .jr-search-field span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }

      .jr-btn,
      .jr-card-btn {
        border: 0;
        border-radius: 999px;
        background: var(--jr-green);
        color: #f8f7f4;
        font: 500 14px/1 Inter, sans-serif;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        text-decoration: none;
        white-space: nowrap;
      }

      .jr-btn {
        min-height: 40px;
        padding: 0 20px;
        box-shadow: 0 8px 24px -12px rgba(15, 76, 92, 0.45);
      }

      .jr-card-btn {
        min-height: 34px;
        padding: 0 16px;
        font-size: 12px;
      }

      .jr-btn:hover,
      .jr-card-btn:hover {
        background: var(--jr-green-2);
      }

      .jr-tags {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        color: var(--jr-muted);
        font-size: 12px;
      }

      .jr-chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px;
        border-radius: 999px;
        border: 1px solid rgba(229, 231, 235, 0.95);
        background: #fff;
        color: var(--jr-muted);
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
      }

      .jr-section {
        padding: 88px 0;
        border-bottom: 1px solid rgba(229, 231, 235, 0.72);
      }

      .jr-section-head {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 30px;
      }

      .jr-section-title {
        margin: 18px 0 0;
        font-size: clamp(32px, 4.6vw, 42px);
        line-height: 1.1;
      }

      .jr-section-desc {
        margin: 18px 0 0;
        color: var(--jr-muted);
        font-size: 14px;
        line-height: 1.55;
      }

      .jr-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--jr-green);
        font-weight: 500;
        font-size: 14px;
        text-decoration: none;
        white-space: nowrap;
      }

      .jr-grid-3,
      .jr-grid-4,
      .jr-grid-6,
      .jr-collection-grid {
        display: grid;
        gap: 24px;
      }

      .jr-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .jr-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .jr-grid-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
      .jr-collection-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }

      .jr-card {
        background: var(--jr-card);
        border: 1px solid var(--jr-border);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 76, 92, 0.12);
        transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
      }

      .jr-card:hover {
        transform: translateY(-2px);
        border-color: rgba(15, 76, 92, 0.25);
        box-shadow: 0 1px 2px rgba(15, 76, 92, 0.04), 0 18px 36px -18px rgba(15, 76, 92, 0.2);
      }

      .jr-role-card {
        min-height: 154px;
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        gap: 14px;
      }

      .jr-role-top,
      .jr-company-card,
      .jr-program-top,
      .jr-collection-top {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 16px;
      }

      .jr-role-id,
      .jr-company-mark {
        width: 42px;
        height: 42px;
        border-radius: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #f2f3f5;
        color: var(--jr-green);
        font-family: Fraunces, Georgia, serif;
        font-size: 18px;
      }

      .jr-company-mark {
        width: 56px;
        height: 56px;
        border-radius: 999px;
        margin: 0 auto 18px;
      }

      .jr-match {
        border-radius: 999px;
        padding: 5px 10px;
        background: rgba(77, 182, 172, 0.14);
        color: var(--jr-green);
        font-size: 11px;
        font-weight: 500;
        white-space: nowrap;
      }

      .jr-company-name {
        color: var(--jr-muted);
        font-size: 13px;
        line-height: 1.4;
      }

      .jr-role-title,
      .jr-trend-title,
      .jr-company-title,
      .jr-program-title,
      .jr-collection-title {
        font-family: Fraunces, Georgia, serif;
        color: var(--jr-text);
        font-weight: 500;
        letter-spacing: -0.02em;
      }

      .jr-role-title {
        margin-top: 3px;
        font-size: 18px;
        line-height: 1.25;
      }

      .jr-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        color: var(--jr-muted);
        font-size: 12px;
      }

      .jr-meta span,
      .jr-note,
      .jr-stat-row {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .jr-role-bottom {
        border-top: 1px solid var(--jr-border);
        padding-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }

      .jr-salary {
        font-family: Fraunces, Georgia, serif;
        font-size: 16px;
        color: var(--jr-text);
      }

      .jr-mode {
        margin-top: 3px;
        font-size: 11px;
        color: var(--jr-muted);
        letter-spacing: 0.12em;
      }

      .jr-small-note {
        margin-top: 26px;
        text-align: center;
        color: var(--jr-muted);
        font-size: 12px;
      }

      .jr-trend-card {
        min-height: 184px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .jr-trend-title {
        margin: 20px 0 18px;
        font-size: 22px;
        line-height: 1.2;
      }

      .jr-stat-row {
        justify-content: space-between;
        color: var(--jr-muted);
        font-size: 13px;
        margin-top: 9px;
      }

      .jr-stat-row strong {
        color: var(--jr-text);
        font-weight: 500;
      }

      .jr-stat-row .positive {
        color: var(--jr-green);
      }

      .jr-company-tile {
        min-height: 150px;
        text-align: center;
      }

      .jr-company-title {
        font-size: 18px;
      }

      .jr-sector {
        margin-top: 6px;
        color: var(--jr-muted);
        font-size: 11px;
        letter-spacing: 0.12em;
      }

      .jr-open-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 16px;
        padding: 6px 10px;
        border-radius: 999px;
        background: #f2f3f5;
        color: var(--jr-muted);
        font-size: 11px;
      }

      .jr-program-card {
        min-height: 186px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .jr-program-title,
      .jr-collection-title {
        font-size: 20px;
        line-height: 1.22;
      }

      .jr-program-org,
      .jr-collection-text {
        color: var(--jr-muted);
        font-size: 14px;
        line-height: 1.5;
        margin-top: 8px;
      }

      .jr-collection-card {
        min-height: 118px;
      }

      .jr-cta {
        margin: 88px auto 82px;
        min-height: 280px;
        border-radius: 24px;
        padding: 56px 32px;
        text-align: center;
        color: #f8f7f4;
        background:
          linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
          linear-gradient(135deg, #0f4c5c 0%, #146c78 100%);
        background-size: 64px 64px, 64px 64px, auto;
        box-shadow: 0 24px 48px -16px rgba(15, 76, 92, 0.18);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .jr-cta h2 {
        color: #f8f7f4;
        margin: 0;
        font-size: clamp(30px, 4.5vw, 42px);
        line-height: 1.12;
      }

      .jr-cta p {
        color: rgba(248, 247, 244, 0.82);
        margin: 20px 0 30px;
        font-size: 16px;
      }

      .jr-cta .jr-btn {
        background: #f8f7f4;
        color: var(--jr-green);
      }

      .jr-footer {
        border-top: 1px solid var(--jr-border);
        padding: 34px 0;
        color: var(--jr-muted);
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
      }

      @media (max-width: 980px) {
        .jr-grid-3,
        .jr-grid-4,
        .jr-grid-6,
        .jr-collection-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .jr-section-head {
          align-items: start;
          flex-direction: column;
        }
      }

      @media (max-width: 640px) {
        .jr-wrap { width: min(100% - 32px, 1200px); }
        .jr-hero { padding: 72px 0 56px; }
        .jr-hero h1 { font-size: 44px; }
        .jr-search { grid-template-columns: 1fr; }
        .jr-search .jr-btn { width: 100%; }
        .jr-grid-3,
        .jr-grid-4,
        .jr-grid-6,
        .jr-collection-grid {
          grid-template-columns: 1fr;
        }
        .jr-role-bottom {
          align-items: start;
          flex-direction: column;
        }
        .jr-card-btn { width: 100%; }
        .jr-footer { flex-direction: column; }
      }
    `;
    document.head.appendChild(style);
  }

  function roleCard(role) {
    return `
      <article class="jr-card jr-role-card">
        <div class="jr-role-top">
          <div style="display:flex; gap:14px; align-items:start;">
            <div class="jr-role-id">${role.initial}</div>
            <div>
              <div class="jr-company-name">${role.company}</div>
              <div class="jr-role-title">${role.title}</div>
            </div>
          </div>
          <span class="jr-match">${role.match}</span>
        </div>
        <div class="jr-meta">
          <span>${icon("map-pin")} ${role.place}</span>
          <span>${icon("briefcase-business")} ${role.type}</span>
          <span>${icon("clock")} ${role.age}</span>
        </div>
        <div></div>
        <div class="jr-role-bottom">
          <div>
            <div class="jr-salary">${role.salary}</div>
            <div class="jr-mode">${role.mode}</div>
          </div>
          <a class="jr-card-btn" href="login.html">Preview ${icon("arrow-up-right")}</a>
        </div>
      </article>
    `;
  }

  function trendCard(item) {
    return `
      <article class="jr-card jr-trend-card">
        <div class="jr-note">${icon("trending-up")} Trending</div>
        <div class="jr-trend-title">${item.title}</div>
        <div>
          <div class="jr-stat-row"><span>Avg salary</span><strong>${item.salary}</strong></div>
          <div class="jr-stat-row"><span>Demand</span><strong>${item.demand}</strong></div>
          <div class="jr-stat-row"><span>Growth</span><strong class="positive">${item.growth}</strong></div>
        </div>
      </article>
    `;
  }

  function companyCard(company) {
    return `
      <article class="jr-card jr-company-tile">
        <div class="jr-company-mark">${company.initial}</div>
        <div class="jr-company-title">${company.name}</div>
        <div class="jr-sector">${company.sector}</div>
        <div class="jr-open-pill">${icon("briefcase-business")} ${company.open}</div>
      </article>
    `;
  }

  function programCard(program) {
    return `
      <article class="jr-card jr-program-card">
        <div>
          <div class="jr-program-top">
            <div class="jr-note">${icon("graduation-cap")} ${program.type}</div>
            <span class="jr-match">${program.type}</span>
          </div>
          <div style="margin-top:22px;">
            <div class="jr-program-title">${program.title}</div>
            <div class="jr-program-org">${program.org}</div>
          </div>
        </div>
        <a class="jr-link" href="register.html">Learn more ${icon("arrow-right")}</a>
      </article>
    `;
  }

  function collectionCard(item) {
    return `
      <article class="jr-card jr-collection-card">
        <div class="jr-collection-top">
          <div class="jr-note">${icon("bookmark")} Collection</div>
          ${icon("arrow-up-right")}
        </div>
        <div class="jr-collection-title" style="margin-top:18px;">${item.title}</div>
        <div class="jr-collection-text">${item.text}</div>
      </article>
    `;
  }

  function render() {
    installStyles();
    var main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      var top = document.querySelector("nav, header");
      if (top && top.parentNode) top.insertAdjacentElement("afterend", main);
      else document.body.appendChild(main);
    }

    main.className = "jobs-redesign";
    main.innerHTML = `
      <section class="jr-hero">
        <div class="jr-wrap">
          <div class="jr-eyebrow">Explore</div>
          <h1>Discover your next move.</h1>
          <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
          <div class="jr-search" role="search">
            <div class="jr-search-field">${icon("sparkles")} <span>Search AI Engineer...</span></div>
            <button class="jr-btn" type="button">${icon("search")} Search</button>
          </div>
          <div class="jr-tags">
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
        <div class="jr-wrap">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Featured opportunities</div>
              <h2 class="jr-section-title">Curated roles, matched to real careers.</h2>
              <p class="jr-section-desc">Hand-picked openings from companies actively hiring this week.</p>
            </div>
            <a class="jr-link" href="register.html">Browse all jobs ${icon("arrow-right")}</a>
          </div>
          <div class="jr-grid-3">
            ${roles.map(roleCard).join("")}
          </div>
          <div class="jr-small-note">To apply, create a free CareerGo account.</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-wrap">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Trending careers</div>
              <h2 class="jr-section-title">What the market is moving toward.</h2>
              <p class="jr-section-desc">Live signals from thousands of openings and salary reports.</p>
            </div>
            <a class="jr-link" href="register.html">Explore more ${icon("arrow-right")}</a>
          </div>
          <div class="jr-grid-4">
            ${trends.map(trendCard).join("")}
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-wrap">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Featured companies</div>
              <h2 class="jr-section-title">Teams hiring on CareerGo.</h2>
            </div>
            <a class="jr-link" href="companies.html">View all companies ${icon("arrow-right")}</a>
          </div>
          <div class="jr-grid-6">
            ${companies.map(companyCard).join("")}
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-wrap">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Graduate opportunities</div>
              <h2 class="jr-section-title">Programmes that launch careers.</h2>
            </div>
            <a class="jr-link" href="register.html">View all opportunities ${icon("arrow-right")}</a>
          </div>
          <div class="jr-grid-4">
            ${programs.map(programCard).join("")}
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-wrap">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Career collections</div>
              <h2 class="jr-section-title">Curated lists, updated weekly.</h2>
            </div>
          </div>
          <div class="jr-collection-grid">
            ${collections.map(collectionCard).join("")}
          </div>
        </div>
      </section>

      <section class="jr-wrap">
        <div class="jr-cta">
          <h2>Ready to build your career roadmap?</h2>
          <p>Create your free CareerGo account and let Vera plan your next move.</p>
          <a class="jr-btn" href="register.html">Create your free account ${icon("arrow-right")}</a>
        </div>
      </section>

      <footer class="jr-wrap jr-footer">
        <span>(c) 2026 CareerGo. All rights reserved.</span>
        <span>Designed for every stage of your career.</span>
      </footer>
    `;

    Array.prototype.slice.call(document.querySelectorAll("body > footer:not(.jr-footer)")).forEach(function (el) {
      el.remove();
    });

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }

  window.addEventListener("load", function () {
    setTimeout(render, 60);
  }, { once: true });
})();
