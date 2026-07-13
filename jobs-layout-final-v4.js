(function () {
  if (!/jobs\.html$/i.test(window.location.pathname)) return;

  var roles = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "HYBRID", "94%"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "REMOTE", "91%"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "ON-SITE", "88%"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "HYBRID", "85%"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "ON-SITE", "82%"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "REMOTE", "90%"]
  ];
  var careers = [
    ["Applied AI Engineer", "$150k avg", "Very High", "+42%"],
    ["Product Manager", "$135k avg", "High", "+18%"],
    ["Data Scientist", "$128k avg", "High", "+22%"],
    ["UX Researcher", "$110k avg", "Growing", "+27%"]
  ];
  var companies = [
    ["S", "Stripe", "FINTECH", "42 open"],
    ["N", "Notion", "PRODUCTIVITY", "18 open"],
    ["G", "Grab", "SUPERAPP", "87 open"],
    ["S", "Shopee", "E-COMMERCE", "64 open"],
    ["P", "Petronas", "ENERGY", "31 open"],
    ["M", "Maybank", "BANKING", "22 open"]
  ];
  var programmes = [
    ["Internship", "Google STEP", "Google"],
    ["Graduate", "Petronas Graduate Programme", "Petronas"],
    ["Graduate", "Shopee Graduate Programme", "Shopee"],
    ["Rotational", "Grab MET", "Grab"]
  ];
  var collections = [
    ["Highest paying graduate jobs", "The grad roles paying the most in 2026."],
    ["Remote-friendly companies", "Teams that thrive without an office."],
    ["Fast-growing AI companies", "Where the AI market is scaling now."],
    ["Best internships this month", "Open now for students and grads."],
    ["Top graduate employers", "Ranked by graduate satisfaction."],
    ["Companies hiring senior talent", "Leadership seats opening this quarter."]
  ];

  function addStyles() {
    if (document.getElementById("jobs-layout-final-v4-style")) return;
    var style = document.createElement("style");
    style.id = "jobs-layout-final-v4-style";
    style.textContent = [
      "body.jobs-v4-ready{background:#f8f7f4!important}",
      ".jobs-v4-main{background:#f8f7f4!important;color:#1e293b;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif!important;overflow:hidden}",
      ".jobs-v4-main *{box-sizing:border-box}",
      ".jv4-wrap{width:min(1200px,calc(100% - 48px));margin:0 auto}",
      ".jv4-hero{min-height:560px;padding:96px 0 72px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border-bottom:1px solid rgba(229,231,235,.75)}",
      ".jv4-eyebrow{display:inline-flex!important;align-items:center;justify-content:center;gap:18px;margin:0 0 28px;color:#0f4c5c;font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase}",
      ".jv4-eyebrow:before{content:'';width:46px;height:1px;background:#9ab6b5}",
      ".jv4-title{margin:0;font-family:Fraunces,Georgia,serif!important;font-size:clamp(44px,5.2vw,66px);line-height:1.05;font-weight:500;letter-spacing:-.02em;color:#1e293b}",
      ".jv4-lede{max-width:660px;margin:24px auto 0;color:#64748b;font-size:18px;line-height:1.6}",
      ".jv4-search{width:min(640px,100%);height:56px;margin:36px auto 0;padding:8px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;display:flex!important;align-items:center;gap:12px;box-shadow:0 2px 4px rgba(15,23,42,.04),0 24px 48px -16px rgba(15,76,92,.18)}",
      ".jv4-search-icon{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;color:#4db6ac;font-size:22px;flex:0 0 auto}",
      ".jv4-search input{min-width:0;flex:1;border:0!important;outline:0!important;background:transparent!important;font:400 14px/1.4 Inter,sans-serif!important;color:#1e293b!important}",
      ".jv4-primary{height:40px;border:0;border-radius:999px;background:#0f4c5c;color:#f8f7f4!important;padding:0 24px;font:600 14px/1 Inter,sans-serif;box-shadow:0 8px 24px -12px rgba(15,76,92,.45);white-space:nowrap}",
      ".jv4-chips{display:flex!important;flex-direction:row!important;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;margin:18px auto 0;color:#64748b}",
      ".jv4-chip{display:inline-flex!important;align-items:center;justify-content:center;width:auto!important;min-width:0!important;min-height:28px;padding:0 14px;border-radius:999px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(15,23,42,.04);font-size:12px;line-height:1;color:#64748b}",
      ".jv4-section{padding:80px 0;border-bottom:1px solid rgba(229,231,235,.78)}",
      ".jv4-section-head{display:flex!important;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:28px}",
      ".jv4-section-title{margin:0;font-family:Fraunces,Georgia,serif!important;font-size:clamp(30px,3vw,40px);line-height:1.12;font-weight:500;letter-spacing:-.02em;color:#1e293b}",
      ".jv4-copy{margin:18px 0 0;color:#64748b;font-size:16px;line-height:1.55}",
      ".jv4-link{display:inline-flex!important;align-items:center;gap:8px;border:1px solid #e5e7eb;border-radius:999px;padding:12px 18px;color:#1e293b!important;text-decoration:none;background:#fff;box-shadow:0 1px 2px rgba(15,23,42,.04);font-weight:500;white-space:nowrap}",
      ".jv4-grid3{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:16px!important}",
      ".jv4-grid4{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:16px!important}",
      ".jv4-grid6{display:grid!important;grid-template-columns:repeat(6,minmax(0,1fr))!important;gap:16px!important}",
      ".jv4-card{display:block!important;background:#fff!important;border:1px solid #e5e7eb!important;border-radius:16px!important;padding:20px!important;box-shadow:0 1px 2px rgba(15,23,42,.04),0 8px 24px -12px rgba(15,76,92,.12)!important;color:#1e293b!important;min-width:0!important}",
      ".jv4-role{min-height:160px;position:relative}",
      ".jv4-role-top{display:grid;grid-template-columns:44px 1fr auto;gap:14px;align-items:start}",
      ".jv4-logo{width:44px;height:44px;border-radius:16px;background:#f2f3f5;display:flex;align-items:center;justify-content:center;color:#0f4c5c;font-family:Fraunces,Georgia,serif;font-size:18px}",
      ".jv4-company-name{color:#64748b;font-size:13px;margin-bottom:4px}",
      ".jv4-card h3{margin:0;font-family:Fraunces,Georgia,serif!important;font-size:20px;line-height:1.2;font-weight:500;color:#1e293b}",
      ".jv4-match{border-radius:999px;background:rgba(77,182,172,.12);color:#0f4c5c;font-size:12px;font-weight:600;padding:6px 10px}",
      ".jv4-meta{display:flex!important;flex-wrap:wrap;gap:14px;margin:22px 0 16px;color:#64748b;font-size:13px}",
      ".jv4-divider{height:1px;background:#e5e7eb;margin:0 0 16px}",
      ".jv4-role-bottom{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}",
      ".jv4-pay{font-family:Fraunces,Georgia,serif;font-size:18px;color:#1e293b}",
      ".jv4-mode{font-size:11px;letter-spacing:.12em;color:#64748b;text-transform:uppercase;margin-top:4px}",
      ".jv4-preview{display:inline-flex;align-items:center;gap:6px;border-radius:999px;background:#0f4c5c;color:#fff!important;text-decoration:none;padding:10px 16px;font-size:12px;font-weight:600}",
      ".jv4-career h3{margin-bottom:22px}",
      ".jv4-stat-row{display:flex;justify-content:space-between;gap:16px;margin-top:10px;color:#64748b;font-size:13px}",
      ".jv4-stat-row strong{color:#1e293b;font-weight:600}",
      ".jv4-company{text-align:center;min-height:150px;display:flex!important;flex-direction:column;align-items:center;justify-content:center;gap:10px}",
      ".jv4-company .jv4-logo{margin:0 auto}",
      ".jv4-company h3{font-size:18px}",
      ".jv4-company p,.jv4-programme p,.jv4-collection p{margin:0;color:#64748b;font-size:13px}",
      ".jv4-open{display:inline-flex;align-items:center;gap:6px;border-radius:999px;background:#f2f3f5;color:#64748b;padding:6px 10px;font-size:12px}",
      ".jv4-programme{min-height:170px;display:flex!important;flex-direction:column;justify-content:space-between}",
      ".jv4-programme .jv4-badge{align-self:flex-start;border-radius:999px;background:#f2f3f5;color:#0f4c5c;padding:5px 10px;font-size:11px;font-weight:500}",
      ".jv4-small-link{color:#0f4c5c!important;text-decoration:none;font-weight:500;font-size:13px}",
      ".jv4-collection{min-height:120px;position:relative}",
      ".jv4-collection:after{content:'->';position:absolute;right:20px;top:20px;color:#0f4c5c}",
      ".jv4-collection .jv4-kicker{display:flex;align-items:center;gap:8px;color:#0f4c5c;font-size:12px;margin-bottom:18px}",
      ".jv4-cta{margin:24px auto 0;padding:64px 24px;text-align:center;border-radius:20px;background:linear-gradient(135deg,#0f4c5c 0%,#146c78 100%);box-shadow:0 24px 48px -16px rgba(15,76,92,.18);position:relative;overflow:hidden}",
      ".jv4-cta:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:48px 48px;opacity:.55}",
      ".jv4-cta>*{position:relative;color:#f8f7f4!important}",
      ".jv4-cta h2{margin:0;font-family:Fraunces,Georgia,serif!important;font-weight:500;font-size:36px;letter-spacing:-.02em}",
      ".jv4-cta p{margin:18px 0 28px;color:rgba(248,247,244,.78)!important}",
      ".jv4-cta-button{display:inline-flex!important;align-items:center;gap:8px;border-radius:999px;background:#f8f7f4;color:#0f4c5c!important;text-decoration:none;padding:14px 24px;font-weight:600}",
      ".jv4-note{text-align:center;color:#64748b;font-size:13px;margin-top:24px}",
      ".jv4-footer{padding:32px 0;color:#64748b;font-size:12px}",
      ".jv4-footer .jv4-wrap{display:flex;justify-content:space-between;gap:16px}",
      "@media(max-width:900px){.jv4-grid3,.jv4-grid4,.jv4-grid6{grid-template-columns:repeat(2,minmax(0,1fr))!important}.jv4-section-head{align-items:flex-start;flex-direction:column}.jv4-title{font-size:46px}.jv4-hero{min-height:500px}}",
      "@media(max-width:640px){.jv4-wrap{width:min(100% - 32px,1200px)}.jv4-grid3,.jv4-grid4,.jv4-grid6{grid-template-columns:1fr!important}.jv4-search{height:auto;align-items:stretch;flex-wrap:wrap}.jv4-primary{width:100%}.jv4-footer .jv4-wrap{flex-direction:column}.jv4-role-bottom{align-items:flex-start;flex-direction:column}}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function roleCard(item) {
    return '<article class="jv4-card jv4-role"><div class="jv4-role-top"><div class="jv4-logo">' + item[0] + '</div><div><div class="jv4-company-name">' + item[1] + '</div><h3>' + item[2] + '</h3></div><span class="jv4-match">' + item[8] + ' match</span></div><div class="jv4-meta"><span>' + item[3] + '</span><span>' + item[4] + '</span><span>' + item[5] + '</span></div><div class="jv4-divider"></div><div class="jv4-role-bottom"><div><div class="jv4-pay">' + item[6] + '</div><div class="jv4-mode">' + item[7] + '</div></div><a class="jv4-preview" href="register.html">Preview &rarr;</a></div></article>';
  }
  function careerCard(item) {
    return '<article class="jv4-card jv4-career"><div class="jv4-kicker">Trending</div><h3>' + item[0] + '</h3><div class="jv4-stat-row"><span>Avg salary</span><strong>' + item[1] + '</strong></div><div class="jv4-stat-row"><span>Demand</span><strong>' + item[2] + '</strong></div><div class="jv4-stat-row"><span>Growth</span><strong>' + item[3] + '</strong></div></article>';
  }
  function companyCard(item) {
    return '<article class="jv4-card jv4-company"><div class="jv4-logo">' + item[0] + '</div><h3>' + item[1] + '</h3><p>' + item[2] + '</p><span class="jv4-open">' + item[3] + '</span></article>';
  }
  function programmeCard(item) {
    return '<article class="jv4-card jv4-programme"><div><span class="jv4-badge">' + item[0] + '</span><h3>' + item[1] + '</h3><p>' + item[2] + '</p></div><a class="jv4-small-link" href="register.html">Learn more &rarr;</a></article>';
  }
  function collectionCard(item) {
    return '<article class="jv4-card jv4-collection"><div class="jv4-kicker">Collection</div><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>';
  }

  function render() {
    document.body.classList.add("jobs-v4-ready");
    var main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      var header = document.querySelector("header");
      if (header && header.parentNode) header.parentNode.insertBefore(main, header.nextSibling);
      else document.body.insertBefore(main, document.body.firstChild);
    }
    main.className = "jobs-v4-main";
    main.innerHTML =
      '<section class="jv4-hero"><div class="jv4-wrap"><div class="jv4-eyebrow">Explore</div><h1 class="jv4-title">Discover your next move.</h1><p class="jv4-lede">Jobs, career paths, salaries and market signals - curated by CareerGo AI, updated in real time.</p><form class="jv4-search" action="register.html"><span class="jv4-search-icon">*</span><input aria-label="Search careers" placeholder="Search AI Engineer..." /><button class="jv4-primary" type="submit">Search</button></form><div class="jv4-chips"><span>Trending</span><span class="jv4-chip">AI Engineer</span><span class="jv4-chip">Software Engineer</span><span class="jv4-chip">Data Scientist</span><span class="jv4-chip">Product Manager</span><span class="jv4-chip">UI/UX Designer</span></div></div></section>' +
      '<section class="jv4-section"><div class="jv4-wrap"><div class="jv4-eyebrow">Featured opportunities</div><div class="jv4-section-head"><div><h2 class="jv4-section-title">Curated roles, matched to real careers.</h2><p class="jv4-copy">Hand-picked openings from companies actively hiring this week.</p></div><a class="jv4-link" href="register.html">Browse all jobs &rarr;</a></div><div class="jv4-grid3">' + roles.map(roleCard).join("") + '</div><p class="jv4-note">To apply, create a free CareerGo account.</p></div></section>' +
      '<section class="jv4-section"><div class="jv4-wrap"><div class="jv4-eyebrow">Trending careers</div><div class="jv4-section-head"><div><h2 class="jv4-section-title">What the market is moving toward.</h2><p class="jv4-copy">Live signals from thousands of openings and salary reports.</p></div><a class="jv4-link" href="register.html">Explore more &rarr;</a></div><div class="jv4-grid4">' + careers.map(careerCard).join("") + '</div></div></section>' +
      '<section class="jv4-section"><div class="jv4-wrap"><div class="jv4-eyebrow">Featured companies</div><div class="jv4-section-head"><h2 class="jv4-section-title">Teams hiring on CareerGo.</h2><a class="jv4-link" href="companies.html">View all companies &rarr;</a></div><div class="jv4-grid6">' + companies.map(companyCard).join("") + '</div></div></section>' +
      '<section class="jv4-section"><div class="jv4-wrap"><div class="jv4-eyebrow">Graduate opportunities</div><div class="jv4-section-head"><h2 class="jv4-section-title">Programmes that launch careers.</h2><a class="jv4-link" href="register.html">View all opportunities &rarr;</a></div><div class="jv4-grid4">' + programmes.map(programmeCard).join("") + '</div></div></section>' +
      '<section class="jv4-section"><div class="jv4-wrap"><div class="jv4-eyebrow">Career collections</div><h2 class="jv4-section-title">Curated lists, updated weekly.</h2><div class="jv4-grid3" style="margin-top:28px">' + collections.map(collectionCard).join("") + '</div></div></section>' +
      '<section class="jv4-section"><div class="jv4-wrap"><div class="jv4-cta"><h2>Ready to build your career roadmap?</h2><p>Create your free CareerGo account and let Vera plan your next move.</p><a class="jv4-cta-button" href="register.html">Create your free account &rarr;</a></div></div></section>' +
      '<footer class="jv4-footer"><div class="jv4-wrap"><span>(c) 2026 CareerGo. All rights reserved.</span><span>Designed for every stage of your career.</span></div></footer>';
  }

  function schedule() {
    [0, 120, 420, 900, 1600].forEach(function (delay) {
      window.setTimeout(render, delay);
    });
  }

  function watch() {
    if (window.__jobsV4Watch) return;
    window.__jobsV4Watch = true;
    new MutationObserver(function () {
      var main = document.querySelector("main");
      if (main && !main.querySelector(".jv4-hero")) render();
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      addStyles();
      schedule();
      watch();
    });
  } else {
    addStyles();
    schedule();
    watch();
  }
})();
