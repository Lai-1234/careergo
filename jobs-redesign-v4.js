(function () {
  if (!/jobs\.html$/i.test(window.location.pathname)) return;

  const css = `
    body.jobs-v4-ready { background: #f8f7f4; color: #1e293b; }
    body.jobs-v4-ready main.jobs-v4 { display: block; }
    .jobs-v4 {
      min-height: 100vh;
      background: #f8f7f4;
      color: #1e293b;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px;
      line-height: 1.55;
    }
    .jr-container {
      width: min(1200px, calc(100% - 48px));
      margin: 0 auto;
    }
    .jr-hero {
      min-height: 560px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 88px 0 76px;
      border-bottom: 1px solid rgba(229, 231, 235, .72);
    }
    .jr-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 16px;
      color: #0f4c5c;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: .18em;
      text-transform: uppercase;
      line-height: 1.4;
    }
    .jr-eyebrow::before {
      content: "";
      width: 46px;
      height: 1px;
      background: rgba(15, 76, 92, .28);
    }
    .jr-hero h1,
    .jr-section h2,
    .jr-card h3,
    .jr-cta h2 {
      font-family: Fraunces, Georgia, serif;
      font-weight: 500;
      letter-spacing: -.02em;
      color: #1e293b;
      margin: 0;
    }
    .jr-hero h1 {
      margin-top: 24px;
      font-size: clamp(46px, 6vw, 72px);
      line-height: 1.05;
    }
    .jr-hero p {
      width: min(640px, 100%);
      margin: 24px auto 0;
      color: #64748b;
      font-size: 18px;
      line-height: 1.6;
    }
    .jr-search {
      width: min(760px, 100%);
      height: 56px;
      margin: 34px auto 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      box-shadow: 0 24px 48px -16px rgba(15, 76, 92, .18);
    }
    .jr-search-icon {
      width: 28px;
      height: 28px;
      display: grid;
      place-items: center;
      color: #4db6ac;
      font-size: 22px;
      flex: 0 0 auto;
    }
    .jr-search input {
      flex: 1;
      min-width: 0;
      border: 0;
      outline: 0;
      background: transparent;
      color: #1e293b;
      font: inherit;
      font-size: 14px;
    }
    .jr-search input::placeholder { color: #64748b; }
    .jr-button {
      border: 0;
      border-radius: 999px;
      background: #0f4c5c;
      color: #f8f7f4;
      min-height: 40px;
      padding: 0 24px;
      font: inherit;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      box-shadow: 0 8px 24px -12px rgba(15, 76, 92, .35);
      text-decoration: none;
      white-space: nowrap;
    }
    .jr-button:hover { background: #146c78; }
    .jr-ghost {
      background: #fff;
      color: #1e293b;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 2px rgba(15, 23, 42, .04), 0 8px 24px -18px rgba(15, 23, 42, .2);
    }
    .jr-ghost:hover { background: #fff; border-color: rgba(15, 76, 92, .25); }
    .jr-chips {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #64748b;
    }
    .jr-chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 28px;
      padding: 4px 12px;
      border: 1px solid #e5e7eb;
      border-radius: 999px;
      background: #fff;
      box-shadow: 0 1px 2px rgba(15, 23, 42, .04);
      color: #64748b;
      font-size: 12px;
      line-height: 1;
      white-space: nowrap;
    }
    .jr-section {
      padding: 88px 0;
      border-bottom: 1px solid rgba(229, 231, 235, .72);
    }
    .jr-section-head {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 34px;
    }
    .jr-section h2 {
      margin-top: 18px;
      font-size: clamp(30px, 4vw, 40px);
      line-height: 1.1;
    }
    .jr-section-copy {
      margin: 16px 0 0;
      color: #64748b;
      font-size: 16px;
    }
    .jr-grid-3,
    .jr-grid-4,
    .jr-grid-6,
    .jr-collections {
      display: grid;
      gap: 16px;
    }
    .jr-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .jr-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .jr-grid-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
    .jr-collections { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .jr-card {
      background: #fff;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 1px 2px rgba(15, 23, 42, .04), 0 8px 24px -12px rgba(15, 76, 92, .12);
      overflow: hidden;
    }
    .jr-card:hover {
      border-color: rgba(15, 76, 92, .25);
      box-shadow: 0 1px 2px rgba(15, 76, 92, .04), 0 8px 24px -12px rgba(15, 76, 92, .16);
      transform: translateY(-2px);
    }
    .jr-job-top {
      display: grid;
      grid-template-columns: 44px 1fr auto;
      gap: 14px;
      align-items: start;
    }
    .jr-logo-tile {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      background: #f2f3f5;
      color: #0f4c5c;
      font-family: Fraunces, Georgia, serif;
      font-size: 19px;
    }
    .jr-company {
      color: #64748b;
      font-size: 13px;
      margin-bottom: 2px;
    }
    .jr-card h3 {
      font-size: 18px;
      line-height: 1.25;
    }
    .jr-match {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(77, 182, 172, .12);
      color: #0f4c5c;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
    }
    .jr-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin: 22px 0 18px;
      color: #64748b;
      font-size: 13px;
    }
    .jr-divider { height: 1px; background: #e5e7eb; margin: 0 0 18px; }
    .jr-pay-row {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 14px;
    }
    .jr-pay {
      color: #1e293b;
      font-family: Fraunces, Georgia, serif;
      font-size: 17px;
      font-weight: 500;
    }
    .jr-mode {
      margin-top: 2px;
      color: #64748b;
      font-size: 11px;
      letter-spacing: .12em;
      text-transform: uppercase;
    }
    .jr-mini-stat {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
      margin-top: 12px;
      color: #64748b;
    }
    .jr-mini-stat strong {
      color: #1e293b;
      font-weight: 600;
    }
    .jr-company-card {
      text-align: center;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .jr-company-card .jr-logo-tile {
      width: 56px;
      height: 56px;
      border-radius: 999px;
      margin-bottom: 4px;
    }
    .jr-company-card h3,
    .jr-program-card h3,
    .jr-collection-card h3 {
      font-size: 18px;
    }
    .jr-kicker {
      color: #64748b;
      font-size: 11px;
      letter-spacing: .12em;
      text-transform: uppercase;
    }
    .jr-open {
      margin-top: 8px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 10px;
      border-radius: 999px;
      background: #f2f3f5;
      color: #64748b;
      font-size: 12px;
    }
    .jr-program-card {
      min-height: 180px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .jr-program-card .jr-link { margin-top: auto; }
    .jr-collection-card {
      min-height: 118px;
      display: grid;
      gap: 10px;
      position: relative;
    }
    .jr-link {
      color: #0f4c5c;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .jr-cta-wrap {
      padding: 96px 0 80px;
      border-bottom: 1px solid rgba(229, 231, 235, .72);
    }
    .jr-cta {
      min-height: 280px;
      border-radius: 28px;
      background:
        linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px),
        linear-gradient(135deg, #0f4c5c 0%, #146c78 100%);
      background-size: 64px 64px, 64px 64px, auto;
      color: #f8f7f4;
      display: grid;
      place-items: center;
      text-align: center;
      padding: 40px;
      box-shadow: 0 24px 48px -16px rgba(15, 76, 92, .18);
    }
    .jr-cta h2 {
      color: #f8f7f4;
      font-size: clamp(30px, 4vw, 40px);
    }
    .jr-cta p {
      color: rgba(248, 247, 244, .78);
      margin: 16px 0 28px;
      font-size: 16px;
    }
    .jr-cta .jr-button {
      background: #f8f7f4;
      color: #0f4c5c;
    }
    .jr-footer {
      padding: 32px 0;
      color: #64748b;
      font-size: 12px;
    }
    .jr-footer .jr-container {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
    @media (max-width: 980px) {
      .jr-grid-3, .jr-grid-4, .jr-collections { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .jr-grid-6 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .jr-section-head { align-items: start; flex-direction: column; }
    }
    @media (max-width: 640px) {
      .jr-container { width: min(100% - 32px, 1200px); }
      .jr-hero { min-height: auto; padding: 64px 0; }
      .jr-hero h1 { font-size: 42px; }
      .jr-search { height: auto; align-items: stretch; flex-wrap: wrap; }
      .jr-search input { flex-basis: calc(100% - 50px); min-height: 40px; }
      .jr-search .jr-button { width: 100%; }
      .jr-grid-3, .jr-grid-4, .jr-grid-6, .jr-collections { grid-template-columns: 1fr; }
      .jr-pay-row { align-items: start; flex-direction: column; }
      .jr-footer .jr-container { flex-direction: column; }
    }
  `;

  const jobs = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "Hybrid", "94%"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "Remote", "91%"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "On-site", "88%"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "Hybrid", "85%"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "On-site", "82%"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "Remote", "90%"]
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
  const programs = [
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

  const h = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));

  const jobCard = (job) => `
    <article class="jr-card">
      <div class="jr-job-top">
        <div class="jr-logo-tile">${h(job[0])}</div>
        <div>
          <div class="jr-company">${h(job[1])}</div>
          <h3>${h(job[2])}</h3>
        </div>
        <span class="jr-match">${h(job[8])} match</span>
      </div>
      <div class="jr-meta">
        <span>${h(job[3])}</span>
        <span>${h(job[4])}</span>
        <span>${h(job[5])}</span>
      </div>
      <div class="jr-divider"></div>
      <div class="jr-pay-row">
        <div>
          <div class="jr-pay">${h(job[6])}</div>
          <div class="jr-mode">${h(job[7])}</div>
        </div>
        <a class="jr-button" href="login.html">Preview &rarr;</a>
      </div>
    </article>`;

  const trendCard = (item) => `
    <article class="jr-card">
      <div class="jr-link" style="font-weight:500;">Trending</div>
      <h3 style="margin-top:16px;">${h(item[0])}</h3>
      <div class="jr-mini-stat"><span>Avg salary</span><strong>${h(item[1])}</strong></div>
      <div class="jr-mini-stat"><span>Demand</span><strong>${h(item[2])}</strong></div>
      <div class="jr-mini-stat"><span>Growth</span><strong>${h(item[3])}</strong></div>
    </article>`;

  const companyCard = (item) => `
    <article class="jr-card jr-company-card">
      <div class="jr-logo-tile">${h(item[0])}</div>
      <h3>${h(item[1])}</h3>
      <div class="jr-kicker">${h(item[2])}</div>
      <div class="jr-open">${h(item[3])}</div>
    </article>`;

  const programCard = (item) => `
    <article class="jr-card jr-program-card">
      <div class="jr-link" style="font-weight:500;">${h(item[0])}</div>
      <h3>${h(item[1])}</h3>
      <p class="jr-section-copy" style="font-size:14px;margin:0;">${h(item[2])}</p>
      <a class="jr-link" href="register.html">Learn more &rarr;</a>
    </article>`;

  const collectionCard = (item) => `
    <article class="jr-card jr-collection-card">
      <div class="jr-link" style="font-weight:500;">Collection <span style="margin-left:auto;">&rarr;</span></div>
      <h3>${h(item[0])}</h3>
      <p class="jr-section-copy" style="font-size:14px;margin:0;">${h(item[1])}</p>
    </article>`;

  function render() {
    if (!document.getElementById("jobs-redesign-v4-style")) {
      const style = document.createElement("style");
      style.id = "jobs-redesign-v4-style";
      style.textContent = css;
      document.head.appendChild(style);
    }

    document.body.classList.add("jobs-v4-ready");
    document.querySelectorAll("footer:not(.jr-footer)").forEach((node) => { node.hidden = true; });

    let main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      const nav = document.querySelector("header, nav");
      if (nav && nav.parentNode) nav.parentNode.insertBefore(main, nav.nextSibling);
      else document.body.insertBefore(main, document.body.firstChild);
    }

    main.className = "jobs-v4";
    main.innerHTML = `
      <section class="jr-hero">
        <div class="jr-container">
          <div class="jr-eyebrow">Explore</div>
          <h1>Discover your next move.</h1>
          <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
          <form class="jr-search">
            <span class="jr-search-icon">*</span>
            <input type="search" placeholder="Search AI Engineer..." aria-label="Search jobs">
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
        <div class="jr-container">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Featured opportunities</div>
              <h2>Curated roles, matched to real careers.</h2>
              <p class="jr-section-copy">Hand-picked openings from companies actively hiring this week.</p>
            </div>
            <a class="jr-button jr-ghost" href="register.html">Browse all jobs &rarr;</a>
          </div>
          <div class="jr-grid-3">${jobs.map(jobCard).join("")}</div>
          <p style="text-align:center;color:#64748b;margin:28px 0 0;">To apply, create a free CareerGo account.</p>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Trending careers</div>
              <h2>What the market is moving toward.</h2>
              <p class="jr-section-copy">Live signals from thousands of openings and salary reports.</p>
            </div>
            <a class="jr-button jr-ghost" href="register.html">Explore more &rarr;</a>
          </div>
          <div class="jr-grid-4">${trends.map(trendCard).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Featured companies</div>
              <h2>Teams hiring on CareerGo.</h2>
            </div>
            <a class="jr-button jr-ghost" href="companies.html">View all companies &rarr;</a>
          </div>
          <div class="jr-grid-6">${companies.map(companyCard).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head">
            <div>
              <div class="jr-eyebrow">Graduate opportunities</div>
              <h2>Programmes that launch careers.</h2>
            </div>
            <a class="jr-button jr-ghost" href="register.html">View all opportunities &rarr;</a>
          </div>
          <div class="jr-grid-4">${programs.map(programCard).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-eyebrow">Career collections</div>
          <h2 style="margin:18px 0 34px;">Curated lists, updated weekly.</h2>
          <div class="jr-collections">${collections.map(collectionCard).join("")}</div>
        </div>
      </section>

      <section class="jr-cta-wrap">
        <div class="jr-container">
          <div class="jr-cta">
            <div>
              <h2>Ready to build your career roadmap?</h2>
              <p>Create your free CareerGo account and let Vera plan your next move.</p>
              <a class="jr-button" href="register.html">Create your free account &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="jr-footer">
        <div class="jr-container">
          <span>&copy; 2026 CareerGo. All rights reserved.</span>
          <span>Designed for every stage of your career.</span>
        </div>
      </footer>`;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  [150, 900, 1800].forEach((delay) => window.setTimeout(render, delay));
})();
