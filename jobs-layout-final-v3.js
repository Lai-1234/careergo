(function () {
  if (!/jobs\.html$/i.test(window.location.pathname)) return;

  const jobs = [
    { logo: "S", company: "Stripe", title: "Applied AI Engineer", place: "Singapore", type: "Full-time", time: "2d", pay: "$140k - $180k", mode: "Hybrid", match: "94%" },
    { logo: "N", company: "Notion", title: "Senior Product Manager", place: "Remote - APAC", type: "Full-time", time: "5h", pay: "$150k - $200k", mode: "Remote", match: "91%" },
    { logo: "G", company: "Grab", title: "Data Scientist, Marketplace", place: "Kuala Lumpur", type: "Full-time", time: "1d", pay: "RM 12k - 18k", mode: "On-site", match: "88%" },
    { logo: "S", company: "Shopee", title: "UI/UX Designer, Growth", place: "Jakarta", type: "Full-time", time: "3d", pay: "IDR 25M - 40M", mode: "Hybrid", match: "85%" },
    { logo: "P", company: "Petronas", title: "Graduate Engineer, Digital", place: "Kuala Lumpur", type: "Graduate", time: "1w", pay: "RM 4.5k - 6k", mode: "On-site", match: "82%" },
    { logo: "L", company: "Linear", title: "Founding Design Engineer", place: "Remote", type: "Full-time", time: "6h", pay: "$160k - $210k", mode: "Remote", match: "90%" }
  ];

  const careers = [
    { title: "Applied AI Engineer", salary: "$150k avg", demand: "Very High", growth: "+42%" },
    { title: "Product Manager", salary: "$135k avg", demand: "High", growth: "+18%" },
    { title: "Data Scientist", salary: "$128k avg", demand: "High", growth: "+22%" },
    { title: "UX Researcher", salary: "$110k avg", demand: "Growing", growth: "+27%" }
  ];

  const companies = [
    { logo: "S", name: "Stripe", field: "Fintech", open: "42 open" },
    { logo: "N", name: "Notion", field: "Productivity", open: "18 open" },
    { logo: "G", name: "Grab", field: "Superapp", open: "87 open" },
    { logo: "S", name: "Shopee", field: "E-commerce", open: "64 open" },
    { logo: "P", name: "Petronas", field: "Energy", open: "31 open" },
    { logo: "M", name: "Maybank", field: "Banking", open: "22 open" }
  ];

  const programmes = [
    { tag: "Internship", title: "Google STEP", org: "Google" },
    { tag: "Graduate", title: "Petronas Graduate Programme", org: "Petronas" },
    { tag: "Graduate", title: "Shopee Graduate Programme", org: "Shopee" },
    { tag: "Rotational", title: "Grab MET", org: "Grab" }
  ];

  const collections = [
    ["Highest paying graduate jobs", "The grad roles paying the most in 2026."],
    ["Remote-friendly companies", "Teams that thrive without an office."],
    ["Fast-growing AI companies", "Where the AI market is scaling now."],
    ["Best internships this month", "Open now for students and grads."],
    ["Top graduate employers", "Ranked by graduate satisfaction."],
    ["Companies hiring senior talent", "Leadership seats opening this quarter."]
  ];

  const icons = {
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>',
    map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 4.5-5 9-8 11-3-2-8-6.5-8-11a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="2"></circle></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><rect x="3" y="6" width="18" height="14" rx="2"></rect><path d="M3 12h18"></path></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
    trend: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 17 6-6 4 4 8-8"></path><path d="M14 7h7v7"></path></svg>',
    cap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 10-10-5-10 5 10 5 10-5Z"></path><path d="M6 12v5c3 2 9 2 12 0v-5"></path></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4V4Z"></path></svg>',
    sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"></path><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"></path></svg>'
  };

  function addStyle() {
    if (document.getElementById("jobs-layout-final-v3-style")) return;
    const style = document.createElement("style");
    style.id = "jobs-layout-final-v3-style";
    style.textContent = `
      body.jobs-v3-page {
        background: #f8f7f4;
        color: #1e293b;
      }

      .jobs-v3-main {
        background: #f8f7f4;
        color: #1e293b;
        overflow: hidden;
        padding-top: 72px;
      }

      .jv3-wrap {
        width: min(1200px, calc(100% - 48px));
        margin: 0 auto;
      }

      .jv3-hero {
        min-height: 560px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 88px 0 76px;
      }

      .jv3-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 14px;
        color: #0f4c5c;
        font: 500 12px/1.4 Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        letter-spacing: .18em;
        text-transform: uppercase;
      }

      .jv3-eyebrow::before {
        content: "";
        width: 40px;
        height: 1px;
        background: rgba(15, 76, 92, .35);
      }

      .jv3-h1 {
        margin: 26px 0 20px;
        max-width: 860px;
        color: #1e293b;
        font-family: Fraunces, Georgia, serif;
        font-size: clamp(48px, 6vw, 72px);
        font-weight: 500;
        line-height: 1.05;
        letter-spacing: -.02em;
      }

      .jv3-lede {
        max-width: 670px;
        margin: 0 auto;
        color: #64748b;
        font: 400 18px/1.6 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-search {
        width: min(760px, 100%);
        height: 56px;
        margin: 36px auto 0;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(15, 23, 42, .04), 0 24px 48px -16px rgba(15, 76, 92, .18);
      }

      .jv3-search svg,
      .jv3-link svg,
      .jv3-meta svg,
      .jv3-card svg {
        width: 18px;
        height: 18px;
        stroke: currentColor;
        stroke-width: 2;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex: 0 0 auto;
      }

      .jv3-search .jv3-spark {
        width: 24px;
        height: 24px;
        display: inline-grid;
        place-items: center;
        color: #4db6ac;
        margin-left: 8px;
      }

      .jv3-search input {
        flex: 1;
        min-width: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: #1e293b;
        font: 400 14px/1.4 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-search input::placeholder {
        color: #64748b;
      }

      .jv3-search button,
      .jv3-preview,
      .jv3-cta-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        border: 0;
        border-radius: 999px;
        background: #0f4c5c;
        color: #f8f7f4;
        font: 600 14px/1 Inter, ui-sans-serif, system-ui, sans-serif;
        text-decoration: none;
        box-shadow: 0 8px 24px -12px rgba(15, 76, 92, .5);
      }

      .jv3-search button {
        height: 40px;
        min-width: 112px;
      }

      .jv3-trending {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 18px;
        color: #64748b;
        font: 400 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-chip {
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        min-height: 28px;
        padding: 0 14px;
        border: 1px solid #e5e7eb;
        border-radius: 999px;
        background: #fff;
        color: #64748b;
        box-shadow: 0 1px 2px rgba(15, 23, 42, .04), 0 8px 24px -18px rgba(15, 76, 92, .22);
        white-space: nowrap;
      }

      .jv3-section {
        padding: 82px 0;
        border-top: 1px solid rgba(229, 231, 235, .75);
      }

      .jv3-section-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 30px;
      }

      .jv3-title {
        margin: 18px 0 0;
        color: #1e293b;
        font-family: Fraunces, Georgia, serif;
        font-size: clamp(34px, 3.2vw, 44px);
        font-weight: 500;
        line-height: 1.1;
        letter-spacing: -.02em;
      }

      .jv3-copy {
        margin: 18px 0 0;
        color: #64748b;
        font: 400 16px/1.55 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #0f4c5c;
        font: 500 14px/1 Inter, ui-sans-serif, system-ui, sans-serif;
        text-decoration: none;
        white-space: nowrap;
      }

      .jv3-grid-2,
      .jv3-grid-3,
      .jv3-grid-4,
      .jv3-grid-6 {
        display: grid !important;
        gap: 16px;
      }

      .jv3-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .jv3-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .jv3-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .jv3-grid-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }

      .jv3-card {
        position: relative;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        background: #fff;
        color: #1e293b;
        box-shadow: 0 1px 2px rgba(15, 23, 42, .04), 0 8px 24px -12px rgba(15, 76, 92, .12);
      }

      .jv3-job {
        min-height: 150px;
        padding: 20px;
        display: grid !important;
        grid-template-rows: auto auto 1fr auto;
        gap: 14px;
      }

      .jv3-job-top {
        display: grid;
        grid-template-columns: 44px 1fr auto;
        gap: 14px;
        align-items: start;
      }

      .jv3-logo {
        width: 44px;
        height: 44px;
        border-radius: 16px;
        display: grid;
        place-items: center;
        background: #f2f3f5;
        color: #0f4c5c;
        font-family: Fraunces, Georgia, serif;
        font-size: 18px;
        font-weight: 500;
      }

      .jv3-company,
      .jv3-small {
        color: #64748b;
        font: 400 13px/1.3 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-job h3,
      .jv3-career h3,
      .jv3-programme h3,
      .jv3-collection h3 {
        margin: 4px 0 0;
        color: #1e293b;
        font-family: Fraunces, Georgia, serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.15;
        letter-spacing: -.02em;
      }

      .jv3-match {
        border-radius: 999px;
        background: rgba(77, 182, 172, .14);
        color: #0f4c5c;
        padding: 6px 10px;
        font: 500 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
        white-space: nowrap;
      }

      .jv3-meta {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        color: #64748b;
        font: 400 13px/1.3 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-divider {
        height: 1px;
        background: #e5e7eb;
      }

      .jv3-job-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .jv3-pay {
        color: #1e293b;
        font: 500 16px/1.2 Fraunces, Georgia, serif;
      }

      .jv3-mode {
        margin-top: 4px;
        color: #64748b;
        font: 500 11px/1 Inter, ui-sans-serif, system-ui, sans-serif;
        letter-spacing: .12em;
        text-transform: uppercase;
      }

      .jv3-preview {
        height: 34px;
        min-width: 92px;
        padding: 0 14px;
      }

      .jv3-career,
      .jv3-programme,
      .jv3-collection {
        padding: 20px;
        min-height: 150px;
      }

      .jv3-career-tag,
      .jv3-programme-tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #0f4c5c;
        font: 400 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-stat-row {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 14px;
        margin-top: 16px;
        color: #64748b;
        font: 400 13px/1.45 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-stat-row strong {
        color: #1e293b;
        font-weight: 600;
      }

      .jv3-company-card {
        min-height: 150px;
        padding: 20px;
        text-align: center;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .jv3-company-card h3 {
        margin: 8px 0 0;
        color: #1e293b;
        font: 500 18px/1.15 Fraunces, Georgia, serif;
      }

      .jv3-company-card .jv3-small {
        text-transform: uppercase;
        letter-spacing: .12em;
      }

      .jv3-open {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        border-radius: 999px;
        background: #f2f3f5;
        color: #64748b;
        font: 400 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-programme {
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        gap: 24px;
      }

      .jv3-collection {
        min-height: 116px;
      }

      .jv3-collection-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #0f4c5c;
        font: 400 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-cta {
        margin: 86px auto;
        min-height: 220px;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 32px;
        color: #f8f7f4;
        background:
          linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px),
          linear-gradient(135deg, #0f4c5c 0%, #146c78 100%);
        background-size: 64px 64px, 64px 64px, auto;
        box-shadow: 0 24px 48px -16px rgba(15, 76, 92, .22);
      }

      .jv3-cta h2 {
        margin: 0;
        color: #f8f7f4;
        font: 500 clamp(30px, 3vw, 42px)/1.1 Fraunces, Georgia, serif;
        letter-spacing: -.02em;
      }

      .jv3-cta p {
        margin: 18px 0 28px;
        color: rgba(248, 247, 244, .84);
        font: 400 16px/1.55 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      .jv3-cta-btn {
        background: #f8f7f4;
        color: #0f4c5c;
        min-height: 46px;
        padding: 0 22px;
      }

      .jv3-foot {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 28px 0 40px;
        border-top: 1px solid #e5e7eb;
        color: #64748b;
        font: 400 12px/1.45 Inter, ui-sans-serif, system-ui, sans-serif;
      }

      @media (max-width: 980px) {
        .jv3-grid-3,
        .jv3-grid-4,
        .jv3-grid-6 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 680px) {
        .jv3-wrap {
          width: min(100% - 32px, 1200px);
        }

        .jobs-v3-main {
          padding-top: 48px;
        }

        .jv3-hero {
          min-height: auto;
          padding: 72px 0 56px;
        }

        .jv3-h1 {
          font-size: 44px;
        }

        .jv3-search {
          height: auto;
          align-items: stretch;
          flex-wrap: wrap;
        }

        .jv3-search input {
          min-height: 40px;
        }

        .jv3-search button {
          width: 100%;
        }

        .jv3-section-head,
        .jv3-job-bottom,
        .jv3-foot {
          align-items: flex-start;
          flex-direction: column;
        }

        .jv3-grid-2,
        .jv3-grid-3,
        .jv3-grid-4,
        .jv3-grid-6 {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function jobCard(job) {
    return `
      <article class="jv3-card jv3-job">
        <div class="jv3-job-top">
          <div class="jv3-logo">${job.logo}</div>
          <div>
            <div class="jv3-company">${job.company}</div>
            <h3>${job.title}</h3>
          </div>
          <span class="jv3-match">${job.match} match</span>
        </div>
        <div class="jv3-meta">
          <span>${icons.map}${job.place}</span>
          <span>${icons.briefcase}${job.type}</span>
          <span>${icons.clock}${job.time}</span>
        </div>
        <div class="jv3-divider"></div>
        <div class="jv3-job-bottom">
          <div>
            <div class="jv3-pay">${job.pay}</div>
            <div class="jv3-mode">${job.mode}</div>
          </div>
          <a class="jv3-preview" href="login.html">Preview ${icons.arrow}</a>
        </div>
      </article>
    `;
  }

  function render() {
    addStyle();
    document.body.classList.add("jobs-v3-page");
    let main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      const header = document.querySelector("header, nav");
      if (header && header.parentNode) {
        header.parentNode.insertBefore(main, header.nextSibling);
      } else {
        document.body.prepend(main);
      }
    }
    main.className = "jobs-v3-main";
    main.innerHTML = `
      <section class="jv3-hero jv3-wrap">
        <div class="jv3-eyebrow">Explore</div>
        <h1 class="jv3-h1">Discover your next move.</h1>
        <p class="jv3-lede">Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
        <form class="jv3-search" action="#" onsubmit="return false">
          <span class="jv3-spark">${icons.sparkle}</span>
          <input type="search" aria-label="Search jobs" placeholder="Search AI Engineer...">
          <button type="submit">${icons.search}<span>Search</span></button>
        </form>
        <div class="jv3-trending">
          <span>Trending</span>
          ${["AI Engineer", "Software Engineer", "Data Scientist", "Product Manager", "UI/UX Designer"].map((item) => `<span class="jv3-chip">${item}</span>`).join("")}
        </div>
      </section>

      <section class="jv3-section">
        <div class="jv3-wrap">
          <div class="jv3-section-head">
            <div>
              <div class="jv3-eyebrow">Featured opportunities</div>
              <h2 class="jv3-title">Curated roles, matched to real careers.</h2>
              <p class="jv3-copy">Hand-picked openings from companies actively hiring this week.</p>
            </div>
            <a class="jv3-link" href="login.html">Browse all jobs ${icons.arrow}</a>
          </div>
          <div class="jv3-grid-3">${jobs.map(jobCard).join("")}</div>
          <p class="jv3-copy" style="text-align:center;margin-top:28px;font-size:13px">To apply, create a free CareerGo account.</p>
        </div>
      </section>

      <section class="jv3-section">
        <div class="jv3-wrap">
          <div class="jv3-section-head">
            <div>
              <div class="jv3-eyebrow">Trending careers</div>
              <h2 class="jv3-title">What the market is moving toward.</h2>
              <p class="jv3-copy">Live signals from thousands of openings and salary reports.</p>
            </div>
            <a class="jv3-link" href="companies.html">Explore more ${icons.arrow}</a>
          </div>
          <div class="jv3-grid-4">
            ${careers.map((career) => `
              <article class="jv3-card jv3-career">
                <div class="jv3-career-tag">${icons.trend}Trending</div>
                <h3>${career.title}</h3>
                <div class="jv3-stat-row"><span>Avg salary</span><strong>${career.salary}</strong><span>Demand</span><strong>${career.demand}</strong><span>Growth</span><strong>${career.growth}</strong></div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jv3-section">
        <div class="jv3-wrap">
          <div class="jv3-section-head">
            <div>
              <div class="jv3-eyebrow">Featured companies</div>
              <h2 class="jv3-title">Teams hiring on CareerGo.</h2>
            </div>
            <a class="jv3-link" href="companies.html">View all companies ${icons.arrow}</a>
          </div>
          <div class="jv3-grid-6">
            ${companies.map((company) => `
              <article class="jv3-card jv3-company-card">
                <div class="jv3-logo">${company.logo}</div>
                <h3>${company.name}</h3>
                <div class="jv3-small">${company.field}</div>
                <span class="jv3-open">${icons.briefcase}${company.open}</span>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jv3-section">
        <div class="jv3-wrap">
          <div class="jv3-section-head">
            <div>
              <div class="jv3-eyebrow">Graduate opportunities</div>
              <h2 class="jv3-title">Programmes that launch careers.</h2>
            </div>
            <a class="jv3-link" href="companies.html">View all opportunities ${icons.arrow}</a>
          </div>
          <div class="jv3-grid-4">
            ${programmes.map((programme) => `
              <article class="jv3-card jv3-programme">
                <div>
                  <div class="jv3-programme-tag">${icons.cap}${programme.tag}</div>
                  <h3>${programme.title}</h3>
                  <p class="jv3-copy" style="font-size:13px;margin-top:8px">${programme.org}</p>
                </div>
                <a class="jv3-link" href="login.html">Learn more ${icons.arrow}</a>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jv3-section">
        <div class="jv3-wrap">
          <div class="jv3-section-head">
            <div>
              <div class="jv3-eyebrow">Career collections</div>
              <h2 class="jv3-title">Curated lists, updated weekly.</h2>
            </div>
          </div>
          <div class="jv3-grid-3">
            ${collections.map(([title, copy]) => `
              <article class="jv3-card jv3-collection">
                <div class="jv3-collection-head"><span>${icons.bookmark}Collection</span>${icons.arrow}</div>
                <h3>${title}</h3>
                <p class="jv3-copy" style="font-size:14px;margin-top:12px">${copy}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="jv3-wrap">
        <div class="jv3-cta">
          <h2>Ready to build your career roadmap?</h2>
          <p>Create your free CareerGo account and let Vera plan your next move.</p>
          <a class="jv3-cta-btn" href="register.html">Create your free account ${icons.arrow}</a>
        </div>
      </section>

      <footer class="jv3-wrap jv3-foot">
        <span>© 2026 CareerGo. All rights reserved.</span>
        <span>Designed for every stage of your career.</span>
      </footer>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
  [120, 500, 1200, 2500].forEach((delay) => window.setTimeout(render, delay));
})();
