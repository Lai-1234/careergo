(function () {
  const isJobsPage = /(^|\/)jobs\.html$/i.test(window.location.pathname);
  if (!isJobsPage) return;

  const jobs = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "HYBRID", "94% match"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "REMOTE", "91% match"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "ON-SITE", "88% match"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "HYBRID", "85% match"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "ON-SITE", "82% match"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "REMOTE", "90% match"],
  ];

  const trends = [
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

  function addStyles() {
    if (document.getElementById("jobs-redesign-v3-style")) return;
    const style = document.createElement("style");
    style.id = "jobs-redesign-v3-style";
    style.textContent = `
      body.jobs-v3-ready { background:#f8f7f4 !important; color:#1e293b; }
      body.jobs-v3-ready footer:not(.jr-footer) { display:none !important; }
      .jobs-v3 { font-family: Inter, system-ui, -apple-system, Segoe UI, sans-serif; background:#f8f7f4; color:#1e293b; overflow:hidden; }
      .jr-container { width:min(1200px, calc(100% - 48px)); margin:0 auto; }
      .jr-hero { min-height:520px; display:flex; align-items:center; justify-content:center; text-align:center; padding:86px 0 72px; border-bottom:1px solid #e5e7eb; }
      .jr-eyebrow { display:inline-flex; align-items:center; gap:16px; color:#0f4c5c; font-size:11px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; }
      .jr-eyebrow:before { content:""; width:46px; height:1px; background:rgba(15,76,92,.35); }
      .jr-hero h1, .jr-section h2, .jr-cta h2 { font-family: Fraunces, Georgia, serif; font-weight:500; letter-spacing:-.02em; }
      .jr-hero h1 { margin:26px 0 20px; font-size:clamp(48px, 7vw, 72px); line-height:1.05; color:#1e293b; }
      .jr-hero p { margin:0 auto; max-width:650px; color:#64748b; font-size:18px; line-height:1.6; }
      .jr-search { margin:42px auto 22px; max-width:760px; height:56px; padding:8px; display:flex; align-items:center; gap:12px; background:#fff; border:1px solid #e5e7eb; border-radius:16px; box-shadow:0 24px 48px -16px rgba(15,76,92,.18); }
      .jr-search-icon { color:#4db6ac; font-size:24px; padding-left:12px; }
      .jr-search input { flex:1; min-width:0; border:0; outline:0; background:transparent; color:#1e293b; font-size:14px; }
      .jr-search input::placeholder { color:#64748b; }
      .jr-btn { border:0; border-radius:999px; height:40px; padding:0 24px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:linear-gradient(135deg,#0f4c5c,#146c78); color:#f8f7f4; font-weight:600; font-size:14px; text-decoration:none; box-shadow:0 8px 24px -12px rgba(15,76,92,.38); white-space:nowrap; }
      .jr-btn-light { background:#f8f7f4; color:#0f4c5c; box-shadow:0 8px 24px -14px rgba(15,23,42,.25); }
      .jr-trending { display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap; color:#64748b; font-size:13px; }
      .jr-chip { display:inline-flex; align-items:center; height:28px; padding:0 14px; border-radius:999px; background:#fff; border:1px solid #e5e7eb; box-shadow:0 2px 8px -4px rgba(15,23,42,.22); color:#64748b; }
      .jr-section { padding:92px 0; border-bottom:1px solid rgba(229,231,235,.8); }
      .jr-section-head { display:flex; justify-content:space-between; align-items:end; gap:24px; margin-bottom:34px; }
      .jr-section h2 { margin:22px 0 0; font-size:36px; line-height:1.1; color:#1e293b; }
      .jr-section p { color:#64748b; font-size:16px; line-height:1.55; margin:0; }
      .jr-link { color:#0f4c5c; font-size:14px; font-weight:500; text-decoration:none; display:inline-flex; align-items:center; gap:10px; white-space:nowrap; }
      .jr-grid { display:grid; gap:16px; }
      .jr-grid-3 { grid-template-columns:repeat(3,minmax(0,1fr)); }
      .jr-grid-4 { grid-template-columns:repeat(4,minmax(0,1fr)); }
      .jr-grid-6 { grid-template-columns:repeat(6,minmax(0,1fr)); }
      .jr-card { background:#fff; border:1px solid #e5e7eb; border-radius:16px; box-shadow:0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,76,92,.12); padding:20px; min-width:0; }
      .jr-job { min-height:168px; display:flex; flex-direction:column; justify-content:space-between; }
      .jr-job-top { display:grid; grid-template-columns:42px 1fr auto; gap:14px; align-items:start; }
      .jr-logo { width:42px; height:42px; border-radius:16px; background:#f2f3f5; display:grid; place-items:center; font-family:Fraunces, Georgia, serif; color:#0f4c5c; font-size:18px; }
      .jr-company { color:#64748b; font-size:13px; margin-bottom:2px; }
      .jr-title { font-family:Fraunces, Georgia, serif; color:#1e293b; font-size:18px; line-height:1.15; margin:0; }
      .jr-match { border-radius:999px; background:rgba(77,182,172,.12); color:#0f4c5c; font-size:12px; font-weight:600; padding:6px 10px; white-space:nowrap; }
      .jr-meta { display:flex; flex-wrap:wrap; gap:14px; color:#64748b; font-size:13px; margin:20px 0 16px; }
      .jr-divider { border-top:1px solid #e5e7eb; padding-top:16px; display:flex; align-items:center; justify-content:space-between; gap:14px; }
      .jr-salary { color:#1e293b; font-family:Fraunces, Georgia, serif; font-size:17px; }
      .jr-mode { margin-top:3px; color:#64748b; font-size:11px; letter-spacing:.12em; }
      .jr-preview { min-width:92px; height:32px; padding:0 14px; }
      .jr-trend { min-height:142px; }
      .jr-trend-label { color:#0f4c5c; font-size:13px; margin-bottom:20px; }
      .jr-trend h3, .jr-program h3, .jr-collection h3 { margin:0; font-family:Fraunces, Georgia, serif; color:#1e293b; font-size:22px; font-weight:500; line-height:1.15; }
      .jr-stats { margin-top:22px; display:grid; gap:8px; font-size:13px; color:#64748b; }
      .jr-stat-row { display:flex; justify-content:space-between; gap:12px; }
      .jr-stat-row strong { color:#1e293b; font-weight:600; }
      .jr-company-card { text-align:center; min-height:150px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; }
      .jr-company-card .jr-logo { width:54px; height:54px; border-radius:999px; }
      .jr-company-card h3 { margin:0; font-family:Fraunces, Georgia, serif; color:#1e293b; font-size:20px; }
      .jr-company-card span { color:#64748b; font-size:11px; letter-spacing:.12em; }
      .jr-open { background:#f2f3f5; border-radius:999px; padding:5px 10px; color:#64748b; font-size:12px; }
      .jr-program { min-height:156px; display:flex; flex-direction:column; justify-content:space-between; }
      .jr-program-top { display:flex; justify-content:space-between; gap:12px; color:#0f4c5c; font-size:13px; }
      .jr-program p, .jr-collection p { margin-top:10px; }
      .jr-collection { min-height:120px; position:relative; }
      .jr-collection:after { content:"↗"; position:absolute; right:20px; top:18px; color:#64748b; }
      .jr-cta { margin:92px auto; padding:58px 32px; text-align:center; border-radius:22px; color:#f8f7f4; background:
        linear-gradient(rgba(248,247,244,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(248,247,244,.08) 1px, transparent 1px),
        linear-gradient(135deg,#0f4c5c,#146c78);
        background-size:64px 64px,64px 64px,auto; box-shadow:0 24px 48px -16px rgba(15,76,92,.22); }
      .jr-cta h2 { margin:0 0 14px; color:#f8f7f4; font-size:36px; }
      .jr-cta p { color:rgba(248,247,244,.78); margin:0 0 28px; }
      .jr-footer { border-top:1px solid #e5e7eb; padding:34px 0; color:#64748b; font-size:13px; }
      .jr-footer .jr-container { display:flex; justify-content:space-between; gap:24px; }
      @media (max-width: 980px) { .jr-grid-3,.jr-grid-4,.jr-grid-6 { grid-template-columns:repeat(2,minmax(0,1fr)); } .jr-section-head { align-items:start; flex-direction:column; } }
      @media (max-width: 640px) { .jr-container { width:min(100% - 32px, 1200px); } .jr-hero { min-height:auto; padding:64px 0; } .jr-search { height:auto; flex-wrap:wrap; } .jr-search input { flex-basis:calc(100% - 48px); } .jr-grid-3,.jr-grid-4,.jr-grid-6 { grid-template-columns:1fr; } .jr-footer .jr-container { flex-direction:column; } }
    `;
    document.head.appendChild(style);
  }

  function roleCard(role) {
    const [initial, company, title, location, type, time, salary, mode, match] = role;
    return `<article class="jr-card jr-job">
      <div>
        <div class="jr-job-top">
          <div class="jr-logo">${initial}</div>
          <div><div class="jr-company">${company}</div><h3 class="jr-title">${title}</h3></div>
          <span class="jr-match">${match}</span>
        </div>
        <div class="jr-meta"><span>⌖ ${location}</span><span>▣ ${type}</span><span>◷ ${time}</span></div>
      </div>
      <div class="jr-divider"><div><div class="jr-salary">${salary}</div><div class="jr-mode">${mode}</div></div><a class="jr-btn jr-preview" href="login.html">Preview ↗</a></div>
    </article>`;
  }

  function render() {
    addStyles();
    document.body.classList.add("jobs-v3-ready");
    let main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      const nav = document.querySelector("header, nav");
      (nav && nav.parentNode ? nav.parentNode : document.body).insertBefore(main, nav ? nav.nextSibling : document.body.firstChild);
    }
    main.className = "jobs-v3";
    main.innerHTML = `
      <section class="jr-hero">
        <div class="jr-container">
          <div class="jr-eyebrow">Explore</div>
          <h1>Discover your next move.</h1>
          <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
          <form class="jr-search">
            <span class="jr-search-icon">✣</span>
            <input aria-label="Search careers" placeholder="Search AI Engineer..." />
            <button class="jr-btn" type="submit">Search</button>
          </form>
          <div class="jr-trending"><span>Trending</span>${["AI Engineer","Software Engineer","Data Scientist","Product Manager","UI/UX Designer"].map(x => `<span class="jr-chip">${x}</span>`).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head"><div><div class="jr-eyebrow">Featured opportunities</div><h2>Curated roles, matched to real careers.</h2><p>Hand-picked openings from companies actively hiring this week.</p></div><a class="jr-link" href="companies.html">Browse all jobs →</a></div>
          <div class="jr-grid jr-grid-3">${jobs.map(roleCard).join("")}</div>
          <p style="text-align:center;margin-top:28px;">To apply, create a free CareerGo account.</p>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head"><div><div class="jr-eyebrow">Trending careers</div><h2>What the market is moving toward.</h2><p>Live signals from thousands of openings and salary reports.</p></div><a class="jr-link" href="#">Explore more →</a></div>
          <div class="jr-grid jr-grid-4">${trends.map(t => `<article class="jr-card jr-trend"><div class="jr-trend-label">↗ Trending</div><h3>${t[0]}</h3><div class="jr-stats"><div class="jr-stat-row"><span>Avg salary</span><strong>${t[1]}</strong></div><div class="jr-stat-row"><span>Demand</span><strong>${t[2]}</strong></div><div class="jr-stat-row"><span>Growth</span><strong>${t[3]}</strong></div></div></article>`).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head"><div><div class="jr-eyebrow">Featured companies</div><h2>Teams hiring on CareerGo.</h2></div><a class="jr-link" href="companies.html">View all companies →</a></div>
          <div class="jr-grid jr-grid-6">${companies.map(c => `<article class="jr-card jr-company-card"><div class="jr-logo">${c[0]}</div><h3>${c[1]}</h3><span>${c[2]}</span><div class="jr-open">▣ ${c[3]}</div></article>`).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-section-head"><div><div class="jr-eyebrow">Graduate opportunities</div><h2>Programmes that launch careers.</h2></div><a class="jr-link" href="companies.html">View all opportunities →</a></div>
          <div class="jr-grid jr-grid-4">${programmes.map(p => `<article class="jr-card jr-program"><div class="jr-program-top"><span>▱ ${p[0]}</span></div><div><h3>${p[1]}</h3><p>${p[2]}</p></div><a class="jr-link" href="#">Learn more →</a></article>`).join("")}</div>
        </div>
      </section>

      <section class="jr-section">
        <div class="jr-container">
          <div class="jr-eyebrow">Career collections</div><h2>Curated lists, updated weekly.</h2>
          <div class="jr-grid jr-grid-3" style="margin-top:34px;">${collections.map(c => `<article class="jr-card jr-collection"><span class="jr-link">▱ Collection</span><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join("")}</div>
        </div>
      </section>

      <section class="jr-container jr-cta"><h2>Ready to build your career roadmap?</h2><p>Create your free CareerGo account and let Vera plan your next move.</p><a class="jr-btn jr-btn-light" href="register.html">Create your free account →</a></section>
    `;

    let footer = document.querySelector(".jr-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "jr-footer";
      footer.innerHTML = `<div class="jr-container"><span>&copy; 2026 CareerGo. All rights reserved.</span><span>Designed for every stage of your career.</span></div>`;
      main.after(footer);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
  setTimeout(render, 150);
  setTimeout(render, 700);
})();
