(function () {
  const isJobsPage = /(^|\/)jobs\.html$/i.test(window.location.pathname);
  if (!isJobsPage) return;

  const roles = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "HYBRID", "94% match"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "REMOTE", "91% match"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "ON-SITE", "88% match"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "HYBRID", "85% match"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "ON-SITE", "82% match"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "REMOTE", "90% match"]
  ];

  const trends = [
    ["Applied AI Engineer", "$150k avg", "Very High", "+42%"],
    ["Product Manager", "$135k avg", "High", "+18%"],
    ["Data Scientist", "$128k avg", "High", "+22%"],
    ["UX Researcher", "$110k avg", "Growing", "+27%"]
  ];

  const companies = [
    ["S", "Stripe", "FINTECH", "42 open"],
    ["N", "Notion", "PRODUCTIVITY", "18 open"],
    ["G", "Grab", "SUPERAPP", "87 open"],
    ["S", "Shopee", "E-COMMERCE", "64 open"],
    ["P", "Petronas", "ENERGY", "31 open"],
    ["M", "Maybank", "BANKING", "22 open"]
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
    if (document.getElementById("jobs-redesign-fix-style")) return;
    const style = document.createElement("style");
    style.id = "jobs-redesign-fix-style";
    style.textContent = `
      body.jobs-redesign-ready {
        background: #f8f7f4;
      }

      body.jobs-redesign-ready footer:not(.jr-footer) {
        display: none !important;
      }

      .jobs-redesign-v2 {
        color: #1e293b;
        background: #f8f7f4;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      .jobs-redesign-v2 *,
      .jobs-redesign-v2 *::before,
      .jobs-redesign-v2 *::after {
        box-sizing: border-box;
      }

      .jobs-redesign-v2 h1,
      .jobs-redesign-v2 h2,
      .jobs-redesign-v2 h3 {
        font-family: Fraunces, Georgia, serif;
        color: #1e293b;
        font-weight: 500;
        letter-spacing: -0.02em;
        margin: 0;
      }

      .jobs-redesign-v2 p {
        margin: 0;
        color: #64748b;
        line-height: 1.6;
      }

      .jr-container {
        width: min(1200px, calc(100% - 48px));
        margin: 0 auto;
      }

      .jr-hero {
        min-height: 560px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(229, 231, 235, 0.9);
        text-align: center;
      }

      .jr-hero-inner {
        width: min(820px, 100%);
        margin: 0 auto;
      }

      .jr-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        color: #0f4c5c;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .jr-eyebrow::before {
        content: "";
        display: inline-block;
        width: 46px;
        height: 1px;
        background: rgba(15, 76, 92, 0.32);
      }

      .jr-hero h1 {
        margin-top: 28px;
        font-size: clamp(48px, 6vw, 72px);
        line-height: 1.05;
      }

      .jr-hero p {
        max-width: 690px;
        margin: 24px auto 0;
        font-size: 18px;
      }

      .jr-search {
        width: min(760px, 100%);
        min-height: 56px;
        margin: 36px auto 18px;
        padding: 8px;
        display: grid;
        grid-template-columns: 42px 1fr auto;
        align-items: center;
        gap: 8px;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04), 0 24px 48px -16px rgba(15, 76, 92, 0.18);
      }

      .jr-search-icon {
        display: grid;
        place-items: center;
        color: #4db6ac;
        font-size: 24px;
        font-weight: 600;
      }

      .jr-search input {
        width: 100%;
        border: 0;
        outline: 0;
        background: transparent;
        color: #1e293b;
        font: 400 14px/1.4 Inter, sans-serif;
      }

      .jr-search input::placeholder {
        color: #64748b;
      }

      .jr-primary {
        border: 0;
        border-radius: 999px;
        background: #0f4c5c;
        color: #f8f7f4;
        min-height: 40px;
        padding: 0 24px;
        font: 600 14px/1 Inter, sans-serif;
        box-shadow: 0 8px 24px -12px rgba(15, 76, 92, 0.5);
        cursor: pointer;
      }

      .jr-trending {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        color: #64748b;
        font-size: 13px;
      }

      .jr-chip {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e5e7eb;
        border-radius: 999px;
        background: #fff;
        color: #64748b;
        min-height: 30px;
        padding: 0 14px;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
      }

      .jr-section {
        padding: 88px 0;
        border-bottom: 1px solid rgba(229, 231, 235, 0.9);
      }

      .jr-section-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 32px;
        margin-bottom: 32px;
      }

      .jr-section-copy h2 {
        margin-top: 18px;
        font-size: clamp(32px, 3.2vw, 44px);
        line-height: 1.1;
      }

      .jr-section-copy p {
        margin-top: 18px;
        font-size: 16px;
      }

      .jr-link-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-height: 44px;
        padding: 0 18px;
        border: 1px solid #e5e7eb;
        border-radius: 999px;
        background: #fff;
        color: #1e293b;
        font-weight: 500;
        text-decoration: none;
        white-space: nowrap;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
      }

      .jr-grid {
        display: grid;
        gap: 24px;
      }

      .jr-grid.jobs {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .jr-grid.trends {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .jr-grid.companies {
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }

      .jr-grid.programmes {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .jr-grid.collections {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .jr-card {
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 76, 92, 0.12);
      }

      .jr-card:hover {
        border-color: rgba(15, 76, 92, 0.25);
        box-shadow: 0 1px 2px rgba(15, 76, 92, 0.04), 0 8px 24px -12px rgba(15, 76, 92, 0.18);
        transform: translateY(-2px);
      }

      .jr-role-card {
        min-height: 164px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        transition: 180ms ease;
      }

      .jr-card-top,
      .jr-card-bottom {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
      }

      .jr-company-mark {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        flex: 0 0 auto;
        background: #f2f3f5;
        color: #0f4c5c;
        font-family: Fraunces, Georgia, serif;
        font-size: 20px;
      }

      .jr-role-main {
        display: flex;
        gap: 14px;
      }

      .jr-company-name {
        color: #64748b;
        font-size: 13px;
        margin-bottom: 4px;
      }

      .jr-role-title {
        color: #1e293b;
        font-size: 18px;
        line-height: 1.2;
        font-weight: 600;
      }

      .jr-match {
        border-radius: 999px;
        background: rgba(77, 182, 172, 0.12);
        color: #0f4c5c;
        padding: 6px 10px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
      }

      .jr-meta {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        color: #64748b;
        font-size: 13px;
      }

      .jr-divider {
        height: 1px;
        background: #e5e7eb;
      }

      .jr-pay {
        color: #1e293b;
        font-family: Fraunces, Georgia, serif;
        font-size: 18px;
        line-height: 1.1;
      }

      .jr-type {
        margin-top: 3px;
        color: #64748b;
        font-size: 11px;
        letter-spacing: 0.12em;
      }

      .jr-preview {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 34px;
        padding: 0 15px;
        border-radius: 999px;
        background: #0f4c5c;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
      }

      .jr-trend-card,
      .jr-company-card,
      .jr-programme-card,
      .jr-collection-card {
        padding: 22px;
        transition: 180ms ease;
      }

      .jr-trend-card h3,
      .jr-collection-card h3,
      .jr-programme-card h3 {
        margin-top: 18px;
        font-size: 23px;
        line-height: 1.15;
      }

      .jr-trend-row {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        margin-top: 14px;
        color: #64748b;
        font-size: 13px;
      }

      .jr-trend-row strong {
        color: #1e293b;
        font-weight: 600;
      }

      .jr-company-card {
        min-height: 142px;
        text-align: center;
      }

      .jr-company-card .jr-company-mark {
        margin: 0 auto 18px;
      }

      .jr-company-card h3 {
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0;
      }

      .jr-company-card .jr-type {
        margin-top: 6px;
      }

      .jr-openings {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: 18px;
        padding: 6px 10px;
        border-radius: 999px;
        background: #f2f3f5;
        color: #64748b;
        font-size: 12px;
      }

      .jr-programme-card {
        min-height: 190px;
        display: flex;
        flex-direction: column;
      }

      .jr-programme-card p,
      .jr-collection-card p {
        margin-top: 10px;
      }

      .jr-learn {
        margin-top: auto;
        color: #0f4c5c;
        font-weight: 600;
        text-decoration: none;
      }

      .jr-collection-card {
        min-height: 120px;
        position: relative;
      }

      .jr-arrow {
        position: absolute;
        top: 20px;
        right: 20px;
        color: #0f4c5c;
        font-size: 22px;
      }

      .jr-cta-wrap {
        padding: 88px 0 96px;
      }

      .jr-cta {
        border-radius: 24px;
        padding: 58px 32px;
        text-align: center;
        color: #f8f7f4;
        background:
          linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px),
          linear-gradient(135deg, #0f4c5c 0%, #146c78 48%, #0f4c5c 100%);
        background-size: 56px 56px, 56px 56px, auto;
        box-shadow: 0 24px 48px -16px rgba(15, 76, 92, 0.18);
      }

      .jr-cta h2,
      .jr-cta p {
        color: #f8f7f4;
      }

      .jr-cta h2 {
        font-size: clamp(32px, 3.4vw, 44px);
      }

      .jr-cta p {
        margin-top: 18px;
        opacity: 0.82;
      }

      .jr-cta .jr-primary {
        margin-top: 28px;
        background: #f8f7f4;
        color: #0f4c5c;
      }

      .jr-footer {
        border-top: 1px solid #e5e7eb;
        padding: 36px 0;
        color: #64748b;
        font-size: 12px;
      }

      .jr-footer .jr-container {
        display: flex;
        justify-content: space-between;
        gap: 24px;
      }

      @media (max-width: 1050px) {
        .jr-grid.jobs,
        .jr-grid.trends,
        .jr-grid.collections {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .jr-grid.companies,
        .jr-grid.programmes {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }

      @media (max-width: 720px) {
        .jr-container {
          width: min(100% - 32px, 1200px);
        }

        .jr-hero {
          min-height: auto;
          padding: 96px 0 72px;
        }

        .jr-search {
          grid-template-columns: 34px 1fr;
        }

        .jr-search .jr-primary {
          grid-column: 1 / -1;
          width: 100%;
        }

        .jr-trending {
          align-items: stretch;
        }

        .jr-section-head {
          align-items: flex-start;
          flex-direction: column;
        }

        .jr-grid.jobs,
        .jr-grid.trends,
        .jr-grid.companies,
        .jr-grid.programmes,
        .jr-grid.collections {
          grid-template-columns: 1fr;
        }

        .jr-footer .jr-container {
          flex-direction: column;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function roleCard(role) {
    const [initial, company, title, location, type, time, pay, mode, match] = role;
    return `
      <article class="jr-card jr-role-card">
        <div class="jr-card-top">
          <div class="jr-role-main">
            <div class="jr-company-mark">${initial}</div>
            <div>
              <div class="jr-company-name">${company}</div>
              <div class="jr-role-title">${title}</div>
            </div>
          </div>
          <span class="jr-match">${match}</span>
        </div>
        <div class="jr-meta">
          <span>${location}</span>
          <span>${type}</span>
          <span>${time}</span>
        </div>
        <div class="jr-divider"></div>
        <div class="jr-card-bottom">
          <div>
            <div class="jr-pay">${pay}</div>
            <div class="jr-type">${mode}</div>
          </div>
          <a class="jr-preview" href="register.html">Preview &rarr;</a>
        </div>
      </article>
    `;
  }

  function render() {
    injectStyles();
    document.body.classList.add("jobs-redesign-ready");

    let main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      const nav = document.querySelector("header, nav");
      if (nav && nav.parentNode) {
        nav.parentNode.insertBefore(main, nav.nextSibling);
      } else {
        document.body.insertBefore(main, document.body.firstChild);
      }
    }

    main.className = "jobs-redesign-v2";
    main.innerHTML = `
      <section class="jr-hero">
        <div class="jr-container">
          <div class="jr-hero-inner">
            <div class="jr-eyebrow">Explore</div>
            <h1>Discover your next move.</h1>
            <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
            <form class="jr-search">
              <span class="jr-search-icon">*</span>
              <input type="search" aria-label="Search jobs" placeholder="Search AI Engineer..." />
              <button class="jr-primary" type="button">Search</button>
            </form>
            <div class="jr-trending">
              <span>Trending</span>
              <span class="jr-chip">AI Engineer</span>
              <span class="jr-chip">Software Engineer</span>
              <span class="jr-chip">Data Scientist</span>
              <span class="jr-chip">Product Manager</span>
              <span class="jr-chip">UI/UX Designer</span>
            </div>
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head">
            <div class="jr-section-copy">
              <div class="jr-eyebrow">Featured Opportunities</div>
              <h2>Curated roles, matched to real careers.</h2>
              <p>Hand-picked openings from companies actively hiring this week.</p>
            </div>
            <a class="jr-link-pill" href="register.html">Browse all jobs &rarr;</a>
          </div>
          <div class="jr-grid jobs">${roles.map(roleCard).join("")}</div>
          <p style="text-align:center; margin-top:28px;">To apply, create a free CareerGo account.</p>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head">
            <div class="jr-section-copy">
              <div class="jr-eyebrow">Trending Careers</div>
              <h2>What the market is moving toward.</h2>
              <p>Live signals from thousands of openings and salary reports.</p>
            </div>
            <a class="jr-link-pill" href="register.html">Explore more &rarr;</a>
          </div>
          <div class="jr-grid trends">
            ${trends.map(([title, salary, demand, growth]) => `
              <article class="jr-card jr-trend-card">
                <span style="color:#0f4c5c;">Trending</span>
                <h3>${title}</h3>
                <div class="jr-trend-row"><span>Avg salary</span><strong>${salary}</strong></div>
                <div class="jr-trend-row"><span>Demand</span><strong>${demand}</strong></div>
                <div class="jr-trend-row"><span>Growth</span><strong>${growth}</strong></div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head">
            <div class="jr-section-copy">
              <div class="jr-eyebrow">Featured Companies</div>
              <h2>Teams hiring on CareerGo.</h2>
            </div>
            <a class="jr-link-pill" href="companies.html">View all companies &rarr;</a>
          </div>
          <div class="jr-grid companies">
            ${companies.map(([initial, name, category, open]) => `
              <article class="jr-card jr-company-card">
                <div class="jr-company-mark">${initial}</div>
                <h3>${name}</h3>
                <div class="jr-type">${category}</div>
                <span class="jr-openings">${open}</span>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head">
            <div class="jr-section-copy">
              <div class="jr-eyebrow">Graduate Opportunities</div>
              <h2>Programmes that launch careers.</h2>
            </div>
            <a class="jr-link-pill" href="register.html">View all opportunities &rarr;</a>
          </div>
          <div class="jr-grid programmes">
            ${programmes.map(([tag, title, org]) => `
              <article class="jr-card jr-programme-card">
                <span style="color:#0f4c5c;">${tag}</span>
                <h3>${title}</h3>
                <p>${org}</p>
                <a class="jr-learn" href="register.html">Learn more &rarr;</a>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-copy" style="margin-bottom:32px;">
            <div class="jr-eyebrow">Career Collections</div>
            <h2>Curated lists, updated weekly.</h2>
          </div>
          <div class="jr-grid collections">
            ${collections.map(([title, desc]) => `
              <article class="jr-card jr-collection-card">
                <span style="color:#0f4c5c;">Collection</span>
                <span class="jr-arrow">&rarr;</span>
                <h3>${title}</h3>
                <p>${desc}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jr-cta-wrap">
        <div class="jr-container">
          <div class="jr-cta">
            <h2>Ready to build your career roadmap?</h2>
            <p>Create your free CareerGo account and let Vera plan your next move.</p>
            <a class="jr-primary" href="register.html" style="display:inline-flex; align-items:center; text-decoration:none;">Create your free account &rarr;</a>
          </div>
        </div>
      </section>

      <footer class="jr-footer">
        <div class="jr-container">
          <span>&copy; 2026 CareerGo. All rights reserved.</span>
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

  setTimeout(render, 150);
  setTimeout(render, 600);
})();
