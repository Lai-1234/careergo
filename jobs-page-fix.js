(function () {
  if (!/jobs\.html$/i.test(location.pathname)) return;

  const style = document.createElement("style");
  style.id = "jobs-page-fix-style";
  style.textContent = `
    .jobs-redesign{background:#f8f7f4;color:#123a31;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;min-height:100vh}
    .jobs-redesign *{box-sizing:border-box}
    .jr-shell{width:min(1200px,calc(100% - 48px));margin:0 auto}
    .jr-hero{padding:128px 0 96px;text-align:center;border-bottom:1px solid rgba(15,76,92,.08)}
    .jr-kicker{display:inline-flex;align-items:center;gap:14px;margin-bottom:26px;color:#0f4c5c;font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}
    .jr-kicker:before{content:"";width:56px;height:1px;background:rgba(15,76,92,.35)}
    .jr-title{margin:0;color:#1e293b;font-family:Fraunces,Georgia,serif;font-size:clamp(48px,6vw,72px);font-weight:500;letter-spacing:-.02em;line-height:1.05}
    .jr-subtitle{width:min(680px,100%);margin:26px auto 42px;color:#64748b;font-size:18px;line-height:1.6}
    .jr-search{width:min(800px,100%);height:64px;margin:0 auto;display:flex;align-items:center;gap:16px;padding:8px 10px 8px 24px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 2px 4px rgba(15,23,42,.04),0 24px 48px -16px rgba(15,76,92,.18)}
    .jr-search-icon{color:#4db6ac;font-size:22px;font-weight:700}
    .jr-search input{flex:1;border:0;outline:0;background:transparent;color:#1e293b;font-size:15px}
    .jr-search input::placeholder{color:#64748b}
    .jr-button{border:0;border-radius:999px;background:#0f4c5c;color:#fff;font-size:14px;font-weight:600;line-height:1;padding:14px 24px;box-shadow:0 8px 24px rgba(15,76,92,.18);cursor:pointer}
    .jr-button:hover{background:#146c78}
    .jr-trending{display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;margin-top:24px;color:#64748b;font-size:13px}
    .jr-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:7px 14px;border-radius:999px;background:#fff;border:1px solid #e5e7eb;color:#64748b;box-shadow:0 1px 2px rgba(15,23,42,.04)}
    .jr-section{padding:88px 0;border-bottom:1px solid rgba(15,76,92,.08)}
    .jr-section-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:34px}
    .jr-eyebrow{display:flex;align-items:center;gap:16px;margin-bottom:18px;color:#0f4c5c;font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}
    .jr-eyebrow:before{content:"";width:48px;height:1px;background:rgba(15,76,92,.35)}
    .jr-section h2{margin:0;color:#1e293b;font-family:Fraunces,Georgia,serif;font-size:clamp(32px,4vw,42px);font-weight:500;letter-spacing:-.02em;line-height:1.1}
    .jr-copy{margin:18px 0 0;color:#64748b;font-size:16px;line-height:1.6}
    .jr-link{display:inline-flex;align-items:center;gap:10px;white-space:nowrap;color:#123a31;text-decoration:none;font-weight:500;font-size:15px}
    .jr-grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
    .jr-grid-4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px}
    .jr-grid-6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:20px}
    .jr-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 8px 24px -12px rgba(15,76,92,.12)}
    .jr-card:hover{border-color:rgba(15,76,92,.25);box-shadow:0 1px 2px rgba(15,23,42,.04),0 18px 36px -18px rgba(15,76,92,.2);transform:translateY(-2px)}
    .jr-role{min-height:190px;padding:22px}
    .jr-role-top{display:grid;grid-template-columns:44px 1fr auto;gap:14px;align-items:start}
    .jr-logo-tile{width:44px;height:44px;border-radius:14px;background:#f2f3f5;color:#0f4c5c;display:grid;place-items:center;font-family:Fraunces,Georgia,serif;font-size:18px}
    .jr-muted{color:#64748b}
    .jr-company{font-size:13px;color:#64748b;margin-bottom:4px}
    .jr-role h3,.jr-trend h3,.jr-program h3,.jr-collection h3{margin:0;color:#1e293b;font-family:Fraunces,Georgia,serif;font-weight:500;letter-spacing:-.02em;line-height:1.15}
    .jr-role h3{font-size:20px}
    .jr-match{border-radius:999px;background:rgba(77,182,172,.13);color:#0f4c5c;font-size:12px;font-weight:600;padding:7px 10px}
    .jr-meta{display:flex;gap:16px;flex-wrap:wrap;margin-top:24px;padding-bottom:20px;border-bottom:1px solid #e5e7eb;color:#64748b;font-size:13px}
    .jr-role-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:20px}
    .jr-salary{font-family:Fraunces,Georgia,serif;color:#1e293b;font-size:20px;font-weight:500}
    .jr-type{margin-top:4px;color:#64748b;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
    .jr-preview{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:999px;background:#0f4c5c;color:#fff;text-decoration:none;font-size:13px;font-weight:600}
    .jr-note{text-align:center;color:#64748b;font-size:13px;margin-top:28px}
    .jr-trend{padding:24px;min-height:180px}
    .jr-trend-top{display:flex;align-items:center;gap:8px;color:#0f4c5c;font-size:13px;margin-bottom:22px}
    .jr-trend h3{font-size:22px;margin-bottom:24px}
    .jr-stat-row{display:grid;grid-template-columns:1fr auto;gap:12px;margin-top:10px;color:#64748b;font-size:13px}
    .jr-stat-row strong{color:#123a31;font-weight:600}
    .jr-company-card{text-align:center;min-height:180px;padding:28px 18px}
    .jr-company-card .jr-logo-tile{margin:0 auto 20px;width:58px;height:58px;border-radius:999px;font-size:22px}
    .jr-company-card h3{margin:0;color:#1e293b;font-family:Fraunces,Georgia,serif;font-size:20px;font-weight:500}
    .jr-sector{margin-top:8px;color:#64748b;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
    .jr-open{display:inline-flex;gap:6px;align-items:center;margin-top:18px;padding:7px 12px;border-radius:999px;background:#f2f3f5;color:#64748b;font-size:12px}
    .jr-program,.jr-collection{padding:24px;min-height:170px}
    .jr-program h3,.jr-collection h3{font-size:22px;margin:22px 0 10px}
    .jr-learn{display:inline-flex;align-items:center;gap:8px;margin-top:26px;color:#0f4c5c;text-decoration:none;font-weight:500}
    .jr-collections{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
    .jr-collection{min-height:120px}
    .jr-collection h3{margin-top:18px}
    .jr-cta{margin:88px auto 74px;padding:64px 28px;text-align:center;color:#fff;border-radius:20px;background:linear-gradient(135deg,#0f4c5c 0%,#146c78 100%);box-shadow:0 24px 48px -18px rgba(15,76,92,.35);position:relative;overflow:hidden}
    .jr-cta:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:54px 54px;opacity:.55}
    .jr-cta>*{position:relative}
    .jr-cta h2{margin:0;color:#fff;font-family:Fraunces,Georgia,serif;font-size:38px;font-weight:500}
    .jr-cta p{margin:18px 0 30px;color:rgba(255,255,255,.78);font-size:16px}
    .jr-cta .jr-button{background:#f8f7f4;color:#123a31;box-shadow:none}
    .jr-footer{display:flex;justify-content:space-between;gap:20px;color:#64748b;font-size:13px;padding:32px 0}
    @media (max-width:900px){.jr-grid-3,.jr-grid-4,.jr-grid-6,.jr-collections{grid-template-columns:1fr 1fr}.jr-section-head{align-items:start;flex-direction:column}.jr-hero{padding-top:80px}.jr-title{font-size:46px}}
    @media (max-width:620px){.jr-shell{width:min(100% - 32px,1200px)}.jr-grid-3,.jr-grid-4,.jr-grid-6,.jr-collections{grid-template-columns:1fr}.jr-search{height:auto;align-items:stretch;flex-direction:column;padding:16px}.jr-button{width:100%;min-height:44px}.jr-footer{flex-direction:column}.jr-section{padding:64px 0}}
  `;
  document.head.appendChild(style);

  const roles = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "Hybrid", "94% match"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "Remote", "91% match"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "On-site", "88% match"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "Hybrid", "85% match"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "On-site", "82% match"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "Remote", "90% match"],
  ];
  const trends = [
    ["Applied AI Engineer", "$150k avg", "Very High", "+42%"],
    ["Product Manager", "$135k avg", "High", "+18%"],
    ["Data Scientist", "$128k avg", "High", "+22%"],
    ["UX Researcher", "$110k avg", "Growing", "+27%"],
  ];
  const companies = [
    ["S", "Stripe", "Fintech", "42 open"],
    ["N", "Notion", "Productivity", "18 open"],
    ["G", "Grab", "Superapp", "87 open"],
    ["S", "Shopee", "E-commerce", "64 open"],
    ["P", "Petronas", "Energy", "31 open"],
    ["M", "Maybank", "Banking", "22 open"],
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

  function roleCard(role) {
    return `<article class="jr-card jr-role">
      <div class="jr-role-top">
        <div class="jr-logo-tile">${role[0]}</div>
        <div><div class="jr-company">${role[1]}</div><h3>${role[2]}</h3></div>
        <span class="jr-match">${role[8]}</span>
      </div>
      <div class="jr-meta"><span>${role[3]}</span><span>${role[4]}</span><span>${role[5]}</span></div>
      <div class="jr-role-bottom"><div><div class="jr-salary">${role[6]}</div><div class="jr-type">${role[7]}</div></div><a class="jr-preview" href="#">Preview -></a></div>
    </article>`;
  }
  function trendCard(item) {
    return `<article class="jr-card jr-trend">
      <div class="jr-trend-top">↗ <span>Trending</span></div><h3>${item[0]}</h3>
      <div class="jr-stat-row"><span>Avg salary</span><strong>${item[1]}</strong></div>
      <div class="jr-stat-row"><span>Demand</span><strong>${item[2]}</strong></div>
      <div class="jr-stat-row"><span>Growth</span><strong>${item[3]}</strong></div>
    </article>`;
  }
  function companyCard(item) {
    return `<article class="jr-card jr-company-card"><div class="jr-logo-tile">${item[0]}</div><h3>${item[1]}</h3><div class="jr-sector">${item[2]}</div><span class="jr-open">▣ ${item[3]}</span></article>`;
  }
  function programCard(item) {
    return `<article class="jr-card jr-program"><span class="jr-muted">▱ ${item[0]}</span><h3>${item[1]}</h3><p class="jr-muted">${item[2]}</p><a class="jr-learn" href="#">Learn more -></a></article>`;
  }
  function collectionCard(item) {
    return `<article class="jr-card jr-collection"><span class="jr-muted">▱ Collection -></span><h3>${item[0]}</h3><p class="jr-muted">${item[1]}</p></article>`;
  }

  const html = `
    <section class="jr-hero">
      <div class="jr-shell">
        <div class="jr-kicker">Explore</div>
        <h1 class="jr-title">Discover your next move.</h1>
        <p class="jr-subtitle">Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
        <form class="jr-search"><span class="jr-search-icon">✣</span><input aria-label="Search jobs" placeholder="Search AI Engineer..." /><button class="jr-button" type="button">Search</button></form>
        <div class="jr-trending"><span>Trending</span><span class="jr-chip">AI Engineer</span><span class="jr-chip">Software Engineer</span><span class="jr-chip">Data Scientist</span><span class="jr-chip">Product Manager</span><span class="jr-chip">UI/UX Designer</span></div>
      </div>
    </section>

    <section class="jr-section"><div class="jr-shell">
      <div class="jr-section-head"><div><div class="jr-eyebrow">Featured opportunities</div><h2>Curated roles, matched to real careers.</h2><p class="jr-copy">Hand-picked openings from companies actively hiring this week.</p></div><a class="jr-link" href="#">Browse all jobs -></a></div>
      <div class="jr-grid-3">${roles.map(roleCard).join("")}</div><p class="jr-note">To apply, create a free CareerGo account.</p>
    </div></section>

    <section class="jr-section"><div class="jr-shell">
      <div class="jr-section-head"><div><div class="jr-eyebrow">Trending careers</div><h2>What the market is moving toward.</h2><p class="jr-copy">Live signals from thousands of openings and salary reports.</p></div><a class="jr-link" href="#">Explore more -></a></div>
      <div class="jr-grid-4">${trends.map(trendCard).join("")}</div>
    </div></section>

    <section class="jr-section"><div class="jr-shell">
      <div class="jr-section-head"><div><div class="jr-eyebrow">Featured companies</div><h2>Teams hiring on CareerGo.</h2></div><a class="jr-link" href="companies.html">View all companies -></a></div>
      <div class="jr-grid-6">${companies.map(companyCard).join("")}</div>
    </div></section>

    <section class="jr-section"><div class="jr-shell">
      <div class="jr-section-head"><div><div class="jr-eyebrow">Graduate opportunities</div><h2>Programmes that launch careers.</h2></div><a class="jr-link" href="companies.html?tab=universities">View all opportunities -></a></div>
      <div class="jr-grid-4">${programmes.map(programCard).join("")}</div>
    </div></section>

    <section class="jr-section"><div class="jr-shell">
      <div><div class="jr-eyebrow">Career collections</div><h2>Curated lists, updated weekly.</h2></div>
      <div class="jr-collections" style="margin-top:34px">${collections.map(collectionCard).join("")}</div>
    </div></section>

    <section><div class="jr-shell"><div class="jr-cta"><h2>Ready to build your career roadmap?</h2><p>Create your free CareerGo account and let Vera plan your next move.</p><button class="jr-button" type="button">Create your free account -></button></div></div></section>
    <footer class="jr-shell jr-footer"><span>© 2026 CareerGo. All rights reserved.</span><span>Designed for every stage of your career.</span></footer>
  `;

  let main = document.querySelector("main");
  if (!main) {
    main = document.createElement("main");
    const header = document.querySelector("header");
    if (header && header.parentNode) header.parentNode.insertBefore(main, header.nextSibling);
    else document.body.prepend(main);
  }
  main.className = "jobs-redesign";
  main.innerHTML = html;
})();
