(function () {
  const isJobsPage = /(^|\/)jobs\.html($|[?#])/.test(window.location.pathname);
  if (!isJobsPage) return;

  const jobs = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "HYBRID", "94% match"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "REMOTE", "91% match"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "ON-SITE", "88% match"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "HYBRID", "85% match"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "ON-SITE", "82% match"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "REMOTE", "90% match"],
  ];

  const careers = [
    ["Applied AI Engineer", "$150k avg", "Very High", "+42%"],
    ["Product Manager", "$135k avg", "High", "+18%"],
    ["Data Scientist", "$128k avg", "High", "+22%"],
    ["UX Researcher", "$110k avg", "Growing", "+27%"],
  ];

  const companies = [
    ["S", "Stripe", "FINTECH", "42 open"],
    ["N", "Notion", "PRODUCTIVITY", "18 open"],
    ["G", "Grab", "SUPERAPP", "87 open"],
    ["S", "Shopee", "E-COMMERCE", "64 open"],
    ["P", "Petronas", "ENERGY", "31 open"],
    ["M", "Maybank", "BANKING", "22 open"],
  ];

  const programmes = [
    ["Internship", "Google STEP", "Google"],
    ["Graduate", "Petronas Graduate Programme", "Petronas"],
    ["Graduate", "Shopee Graduate Programme", "Shopee"],
    ["Rotational", "Grab MET", "Grab"],
  ];

  const collections = [
    ["Highest paying graduate jobs", "The grad roles paying the most in 2026."],
    ["Remote-friendly companies", "Teams that thrive without an office."],
    ["Fast-growing AI companies", "Where the AI market is scaling now."],
    ["Best internships this month", "Open now for students and grads."],
    ["Top graduate employers", "Ranked by graduate satisfaction."],
    ["Companies hiring senior talent", "Leadership seats opening this quarter."],
  ];

  function icon(name) {
    const map = {
      search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m16.5 16.5 4 4"></path></svg>',
      arrow: '<svg viewBox="0 0 24 24"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>',
      trend: '<svg viewBox="0 0 24 24"><path d="m3 17 6-6 4 4 7-7"></path><path d="M14 8h6v6"></path></svg>',
      pin: '<svg viewBox="0 0 24 24"><path d="M19 21 5 7"></path><path d="M8 10 4 14l6 6 4-4"></path><path d="m14 4 6 6-4 4L10 8z"></path></svg>',
      brief: '<svg viewBox="0 0 24 24"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"></path><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M3 12h18"></path></svg>',
      clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
      star: '<svg viewBox="0 0 24 24"><path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5z"></path></svg>',
      grad: '<svg viewBox="0 0 24 24"><path d="m22 10-10-5-10 5 10 5z"></path><path d="M6 12v5c3 2 9 2 12 0v-5"></path></svg>',
      bookmark: '<svg viewBox="0 0 24 24"><path d="M6 4h12v17l-6-4-6 4z"></path></svg>',
    };
    return map[name] || "";
  }

  function sectionHeader(kicker, title, action) {
    return `
      <div class="jf-section-head">
        <div>
          <p class="jf-kicker"><span></span>${kicker}</p>
          <h2>${title}</h2>
        </div>
        ${action ? `<a class="jf-text-link" href="#">${action} ${icon("arrow")}</a>` : ""}
      </div>
    `;
  }

  function render() {
    const main = document.querySelector("main");
    if (!main) return;
    document.body.classList.add("jobs-final-page");
    main.className = "jobs-final";
    main.innerHTML = `
      <section class="jf-hero">
        <p class="jf-kicker jf-center"><span></span>EXPLORE</p>
        <h1>Discover your next move.</h1>
        <p class="jf-lede">Jobs, career paths, salaries and market signals — curated by CareerGo's AI, updated in real time.</p>
        <div class="jf-search">
          <span class="jf-search-icon">${icon("star")}</span>
          <input aria-label="Search careers" placeholder="Search AI Engineer..." />
          <button>${icon("search")} Search</button>
        </div>
        <div class="jf-trends">
          <span>Trending</span>
          <button>AI Engineer</button>
          <button>Software Engineer</button>
          <button>Data Scientist</button>
          <button>Product Manager</button>
          <button>UI/UX Designer</button>
        </div>
      </section>

      <section class="jf-section">
        ${sectionHeader("FEATURED OPPORTUNITIES", "Curated roles, matched to real careers.", "Browse all jobs")}
        <p class="jf-subcopy">Hand-picked openings from companies actively hiring this week.</p>
        <div class="jf-job-grid">
          ${jobs.map((job) => `
            <article class="jf-job-card">
              <div class="jf-job-top">
                <div class="jf-logo">${job[0]}</div>
                <div><p>${job[1]}</p><h3>${job[2]}</h3></div>
                <span class="jf-match">${job[8]}</span>
              </div>
              <div class="jf-meta">
                <span>${job[3]}</span><span>${job[4]}</span><span>${job[5]}</span>
              </div>
              <div class="jf-card-foot">
                <div><strong>${job[6]}</strong><small>${job[7]}</small></div>
                <a href="#">Preview ${icon("arrow")}</a>
              </div>
            </article>
          `).join("")}
        </div>
        <p class="jf-apply-note">To apply, create a free CareerGo account.</p>
      </section>

      <section class="jf-section">
        ${sectionHeader("TRENDING CAREERS", "What the market is moving toward.", "Explore more")}
        <p class="jf-subcopy">Live signals from thousands of openings and salary reports.</p>
        <div class="jf-career-grid">
          ${careers.map((career) => `
            <article class="jf-small-card">
              <p class="jf-chipline">${icon("trend")} Trending</p>
              <h3>${career[0]}</h3>
              <dl>
                <div><dt>Avg salary</dt><dd>${career[1]}</dd></div>
                <div><dt>Demand</dt><dd>${career[2]}</dd></div>
                <div><dt>Growth</dt><dd>${career[3]}</dd></div>
              </dl>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="jf-section">
        ${sectionHeader("FEATURED COMPANIES", "Teams hiring on CareerGo.", "View all companies")}
        <div class="jf-company-grid">
          ${companies.map((company) => `
            <article class="jf-company-card">
              <div class="jf-logo">${company[0]}</div>
              <h3>${company[1]}</h3>
              <p>${company[2]}</p>
              <span>${icon("brief")} ${company[3]}</span>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="jf-section">
        ${sectionHeader("GRADUATE OPPORTUNITIES", "Programmes that launch careers.", "View all opportunities")}
        <div class="jf-programme-grid">
          ${programmes.map((programme) => `
            <article class="jf-programme-card">
              <span>${icon("grad")}</span>
              <em>${programme[0]}</em>
              <h3>${programme[1]}</h3>
              <p>${programme[2]}</p>
              <a href="#">Learn more ${icon("arrow")}</a>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="jf-section">
        ${sectionHeader("CAREER COLLECTIONS", "Curated lists, updated weekly.")}
        <div class="jf-collection-grid">
          ${collections.map((collection) => `
            <article class="jf-collection-card">
              <p>${icon("bookmark")} Collection ${icon("arrow")}</p>
              <h3>${collection[0]}</h3>
              <span>${collection[1]}</span>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="jf-cta">
        <h2>Ready to build your career roadmap?</h2>
        <p>Create your free CareerGo account and let Vera plan your next move.</p>
        <a href="register.html">Create your free account ${icon("arrow")}</a>
      </section>
    `;
  }

  function injectStyles() {
    if (document.getElementById("jobs-final-patch-style")) return;
    const style = document.createElement("style");
    style.id = "jobs-final-patch-style";
    style.textContent = `
      body.jobs-final-page { background:#f8f7f4; color:#1e293b; }
      body.jobs-final-page > footer:not(.marketing-footer) { display:none !important; }
      .jobs-final { max-width:1200px; margin:0 auto; padding:96px 24px 64px; font-family:Inter, ui-sans-serif, system-ui, sans-serif; }
      .jobs-final svg { width:18px; height:18px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; vertical-align:middle; }
      .jf-hero { min-height:520px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; border-bottom:1px solid #e5e7eb; margin-inline:calc(50% - 50vw); padding-inline:24px; }
      .jf-kicker { display:flex; align-items:center; gap:18px; margin:0 0 24px; color:#0f4c5c; font-size:12px; font-weight:600; letter-spacing:.18em; }
      .jf-kicker span { width:36px; height:1px; background:#a6c2bd; display:inline-block; }
      .jf-center { justify-content:center; }
      .jf-hero h1 { margin:0; font-family:Fraunces, Georgia, serif; font-size:clamp(44px,6vw,72px); line-height:1.05; letter-spacing:-.02em; color:#1e293b; font-weight:500; }
      .jf-lede { max-width:640px; margin:28px auto 42px; font-size:18px; line-height:1.6; color:#64748b; }
      .jf-search { width:min(640px,100%); height:56px; display:flex; align-items:center; gap:12px; background:white; border:1px solid #e5e7eb; border-radius:18px; padding:8px 8px 8px 18px; box-shadow:0 24px 48px -16px rgba(15,76,92,.18); }
      .jf-search-icon { color:#4db6ac; }
      .jf-search input { flex:1; border:0; outline:0; background:transparent; font-size:14px; color:#1e293b; min-width:0; }
      .jf-search input::placeholder { color:#64748b; }
      .jf-search button, .jf-job-card a, .jf-cta a { border:0; border-radius:999px; background:#0f4c5c; color:#fff; font-weight:600; font-size:14px; padding:13px 22px; display:inline-flex; align-items:center; gap:8px; text-decoration:none; box-shadow:0 8px 24px -12px rgba(15,76,92,.28); }
      .jf-trends { margin-top:24px; display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap; color:#64748b; font-size:13px; }
      .jf-trends button { border:1px solid #e5e7eb; background:white; color:#64748b; border-radius:999px; padding:8px 16px; box-shadow:0 1px 2px rgba(15,23,42,.04), 0 2px 8px -2px rgba(15,23,42,.06); }
      .jf-section { padding:88px 0; border-bottom:1px solid #e5e7eb; }
      .jf-section-head { display:flex; justify-content:space-between; align-items:end; gap:24px; margin-bottom:18px; }
      .jf-section-head h2 { margin:0; font-family:Fraunces, Georgia, serif; font-size:clamp(30px,4vw,44px); line-height:1.1; letter-spacing:-.02em; color:#1e293b; font-weight:500; }
      .jf-subcopy { margin:0 0 34px; font-size:16px; color:#64748b; }
      .jf-text-link { display:inline-flex; align-items:center; gap:8px; color:#0f4c5c; font-size:14px; font-weight:600; text-decoration:none; background:white; border:1px solid #e5e7eb; border-radius:999px; padding:12px 18px; box-shadow:0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,76,92,.12); white-space:nowrap; }
      .jf-job-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; }
      .jf-job-card, .jf-small-card, .jf-company-card, .jf-programme-card, .jf-collection-card { background:#fff; border:1px solid #e5e7eb; border-radius:16px; box-shadow:0 1px 2px rgba(15,23,42,.04), 0 2px 8px -2px rgba(15,23,42,.06); }
      .jf-job-card { padding:20px; min-height:178px; display:flex; flex-direction:column; justify-content:space-between; }
      .jf-job-top { display:grid; grid-template-columns:42px 1fr auto; align-items:start; gap:14px; }
      .jf-logo { width:42px; height:42px; display:grid; place-items:center; border-radius:14px; background:#f2f3f5; color:#0f4c5c; font-family:Fraunces, Georgia, serif; font-weight:500; font-size:18px; }
      .jf-job-top p { margin:0 0 4px; color:#64748b; font-size:13px; }
      .jf-job-top h3 { margin:0; font-size:18px; line-height:1.25; color:#1e293b; font-weight:600; }
      .jf-match { padding:6px 10px; border-radius:999px; background:rgba(77,182,172,.12); color:#0f4c5c; font-size:12px; font-weight:600; white-space:nowrap; }
      .jf-meta { display:flex; gap:16px; color:#64748b; font-size:13px; padding:18px 0; border-bottom:1px solid #e5e7eb; flex-wrap:wrap; }
      .jf-card-foot { display:flex; align-items:center; justify-content:space-between; gap:14px; padding-top:16px; }
      .jf-card-foot strong { display:block; font-family:Fraunces, Georgia, serif; font-size:18px; color:#1e293b; font-weight:500; }
      .jf-card-foot small { display:block; margin-top:4px; color:#64748b; font-size:11px; letter-spacing:.12em; }
      .jf-card-foot a { padding:10px 16px; font-size:12px; }
      .jf-apply-note { text-align:center; color:#64748b; margin:28px 0 0; font-size:13px; }
      .jf-career-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; }
      .jf-small-card { padding:20px; min-height:170px; }
      .jf-chipline { margin:0 0 18px; display:flex; gap:8px; align-items:center; color:#0f4c5c; font-size:13px; }
      .jf-small-card h3 { margin:0 0 22px; font-family:Fraunces, Georgia, serif; font-size:22px; line-height:1.15; color:#1e293b; font-weight:500; }
      .jf-small-card dl { display:grid; gap:8px; margin:0; }
      .jf-small-card div { display:flex; justify-content:space-between; gap:16px; }
      .jf-small-card dt { color:#64748b; font-size:13px; }
      .jf-small-card dd { margin:0; color:#1e293b; font-size:13px; font-weight:600; }
      .jf-company-grid { display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:16px; }
      .jf-company-card { min-height:150px; padding:22px; text-align:center; display:grid; place-items:center; gap:8px; }
      .jf-company-card h3 { margin:0; font-size:18px; color:#1e293b; }
      .jf-company-card p { margin:0; color:#64748b; font-size:11px; letter-spacing:.12em; }
      .jf-company-card span { display:inline-flex; align-items:center; gap:6px; background:#f2f3f5; border-radius:999px; padding:6px 10px; color:#64748b; font-size:12px; }
      .jf-company-card .jf-logo { width:50px; height:50px; border-radius:18px; }
      .jf-programme-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; }
      .jf-programme-card { padding:20px; min-height:164px; display:flex; flex-direction:column; align-items:flex-start; gap:10px; }
      .jf-programme-card > span { color:#0f4c5c; }
      .jf-programme-card em { margin-left:auto; background:#f2f3f5; color:#0f4c5c; padding:5px 10px; border-radius:999px; font-size:11px; font-style:normal; }
      .jf-programme-card h3, .jf-collection-card h3 { margin:0; font-family:Fraunces, Georgia, serif; font-size:21px; line-height:1.15; color:#1e293b; font-weight:500; }
      .jf-programme-card p, .jf-collection-card span { margin:0; color:#64748b; font-size:14px; }
      .jf-programme-card a { margin-top:auto; color:#0f4c5c; display:inline-flex; gap:8px; align-items:center; text-decoration:none; font-size:13px; font-weight:600; }
      .jf-collection-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
      .jf-collection-card { padding:20px; min-height:130px; }
      .jf-collection-card p { margin:0 0 18px; display:flex; align-items:center; gap:8px; color:#0f4c5c; font-size:13px; }
      .jf-collection-card p svg:last-child { margin-left:auto; }
      .jf-cta { margin:96px 0 24px; padding:56px 32px; text-align:center; border-radius:24px; color:#f8f7f4; background:linear-gradient(135deg,#0f4c5c 0%,#146c78 100%); box-shadow:0 24px 48px -16px rgba(15,76,92,.18); position:relative; overflow:hidden; }
      .jf-cta::before { content:""; position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size:64px 64px; opacity:.45; }
      .jf-cta > * { position:relative; z-index:1; }
      .jf-cta h2 { margin:0; font-family:Fraunces, Georgia, serif; font-size:34px; font-weight:500; color:#fffaf2; }
      .jf-cta p { margin:18px 0 28px; color:rgba(248,247,244,.84); }
      .jf-cta a { background:#f8f7f4; color:#0f4c5c; box-shadow:none; }
      @media (max-width: 960px) {
        .jobs-final { padding-top:72px; }
        .jf-section-head { align-items:flex-start; flex-direction:column; }
        .jf-job-grid, .jf-career-grid, .jf-programme-grid, .jf-collection-grid { grid-template-columns:1fr 1fr; }
        .jf-company-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
      }
      @media (max-width: 640px) {
        .jf-hero { min-height:auto; padding-top:80px; padding-bottom:80px; }
        .jf-search { height:auto; flex-wrap:wrap; }
        .jf-search button { width:100%; justify-content:center; }
        .jf-job-grid, .jf-career-grid, .jf-company-grid, .jf-programme-grid, .jf-collection-grid { grid-template-columns:1fr; }
      }
    `;
    document.head.appendChild(style);
  }

  function boot() {
    injectStyles();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
  setTimeout(boot, 50);
  setTimeout(boot, 250);
  setTimeout(boot, 800);
})();
