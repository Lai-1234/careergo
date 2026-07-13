(function () {
  if (!/jobs\.html$/i.test(location.pathname)) return;

  var STYLE_ID = "jobs-redesign-final-style";
  var ROOT_CLASS = "jobs-final-ready";

  function icon(name) {
    return '<i data-lucide="' + name + '"></i>';
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
body.${ROOT_CLASS}{background:#f8f7f4!important;color:#1e293b}
body.${ROOT_CLASS} main.jr-page{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8f7f4;color:#1e293b;overflow:hidden}
.jr-page *{box-sizing:border-box}
.jr-container{width:min(1200px,calc(100% - 48px));margin:0 auto}
.jr-hero{padding:112px 0 92px;text-align:center;border-bottom:1px solid rgba(229,231,235,.72)}
.jr-eyebrow{display:inline-flex;align-items:center;gap:16px;margin-bottom:28px;color:#0f4c5c;font:600 12px/1 Inter,sans-serif;letter-spacing:.18em;text-transform:uppercase}
.jr-eyebrow:before{content:"";width:48px;height:1px;background:#a8c3c5}
.jr-title{margin:0;color:#1e293b;font:500 clamp(46px,6vw,64px)/1.05 Fraunces,Georgia,serif;letter-spacing:-.02em}
.jr-copy{max-width:690px;margin:24px auto 36px;color:#64748b;font:400 18px/1.6 Inter,sans-serif}
.jr-search{width:min(720px,100%);min-height:56px;margin:0 auto;display:grid;grid-template-columns:42px 1fr auto;align-items:center;gap:10px;padding:8px 8px 8px 14px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 2px 4px rgba(15,23,42,.04),0 24px 48px -16px rgba(15,76,92,.16)}
.jr-search i{width:22px;height:22px;color:#4db6ac}.jr-search span{color:#64748b;text-align:left;font-size:14px}
.jr-primary{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;border-radius:999px;background:#0f4c5c;color:#f8f7f4!important;font:700 14px/1 Inter,sans-serif;padding:13px 24px;text-decoration:none;box-shadow:0 8px 24px -12px rgba(15,76,92,.45)}
.jr-primary i,.jr-link i,.jr-light-btn i{width:18px;height:18px}
.jr-trends{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:20px;color:#64748b;font-size:13px}
.jr-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 14px;border-radius:999px;background:#fff;color:#64748b;border:1px solid #e5e7eb;box-shadow:0 1px 2px rgba(15,23,42,.04)}
.jr-section{padding:90px 0;border-bottom:1px solid rgba(229,231,235,.72)}
.jr-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:34px}
.jr-section-label{display:flex;align-items:center;gap:18px;margin-bottom:18px;color:#0f4c5c;font:600 12px/1 Inter,sans-serif;letter-spacing:.18em;text-transform:uppercase}
.jr-section-label:before{content:"";width:48px;height:1px;background:#a8c3c5}
.jr-section h2{margin:0;color:#1e293b;font:500 clamp(30px,3.5vw,40px)/1.1 Fraunces,Georgia,serif;letter-spacing:-.02em}
.jr-section p{margin:16px 0 0;color:#64748b;font-size:16px;line-height:1.55}
.jr-link{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border:1px solid #e5e7eb;border-radius:999px;background:#fff;color:#1e293b;text-decoration:none;font-weight:600;box-shadow:0 1px 2px rgba(15,23,42,.04)}
.jr-grid-3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.jr-grid-4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px}
.jr-grid-6{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:18px}
.jr-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:20px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 8px 24px -12px rgba(15,76,92,.12);transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease}
.jr-card:hover{transform:translateY(-2px);border-color:rgba(15,76,92,.25);box-shadow:0 1px 2px rgba(15,76,92,.04),0 8px 24px -12px rgba(15,76,92,.22)}
.jr-job-top{display:grid;grid-template-columns:42px 1fr auto;gap:14px;align-items:start}
.jr-logo{width:42px;height:42px;border-radius:14px;background:#f2f3f5;color:#0f4c5c;display:grid;place-items:center;font:500 18px/1 Fraunces,Georgia,serif}
.jr-match{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:rgba(77,182,172,.12);color:#0f4c5c;padding:6px 10px;font-size:12px;font-weight:700;white-space:nowrap}
.jr-company{color:#64748b;font-size:13px;margin-bottom:5px}.jr-job-title{margin:0;color:#1e293b;font:600 18px/1.2 Inter,sans-serif}
.jr-meta{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:22px;color:#64748b;font-size:13px}.jr-meta span{display:inline-flex;align-items:center;gap:6px}.jr-meta i{width:15px;height:15px}
.jr-divider{height:1px;background:#e5e7eb;margin:18px 0}.jr-job-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px}.jr-salary{font:500 17px/1.2 Fraunces,Georgia,serif;color:#1e293b}.jr-mode{display:block;margin-top:5px;color:#64748b;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
.jr-small-btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;background:#0f4c5c;color:#f8f7f4!important;padding:10px 16px;text-decoration:none;font-size:13px;font-weight:700}
.jr-career h3,.jr-program h3,.jr-collection h3{margin:18px 0 16px;color:#1e293b;font:500 22px/1.15 Fraunces,Georgia,serif;letter-spacing:-.02em}
.jr-kv{display:grid;grid-template-columns:1fr auto;gap:10px;color:#64748b;font-size:13px}.jr-kv b{color:#1e293b}
.jr-company-card{text-align:center;padding:24px 16px}.jr-company-card .jr-logo{margin:0 auto 16px}.jr-company-card h3{margin:0;color:#1e293b;font:600 17px/1.2 Inter}.jr-company-card .jr-sector{margin-top:7px;color:#64748b;font-size:11px;letter-spacing:.12em;text-transform:uppercase}.jr-open{display:inline-flex;align-items:center;gap:6px;margin-top:15px;border-radius:999px;background:#f2f3f5;color:#64748b;padding:7px 10px;font-size:12px}.jr-open i{width:14px;height:14px}
.jr-program{min-height:184px;display:flex;flex-direction:column;align-items:flex-start}.jr-program .jr-tag{margin-left:auto}.jr-tag{display:inline-flex;align-items:center;border-radius:999px;background:rgba(77,182,172,.12);color:#0f4c5c;padding:5px 9px;font-size:11px;font-weight:700}.jr-learn{margin-top:auto;color:#0f4c5c;text-decoration:none;font-weight:700;font-size:14px;display:inline-flex;align-items:center;gap:8px}
.jr-collection{position:relative;min-height:126px}.jr-collection .jr-corner{position:absolute;right:18px;top:18px;width:18px;height:18px;color:#64748b}.jr-collection p{font-size:14px}
.jr-cta-wrap{padding:94px 0 72px}.jr-cta{min-height:240px;border-radius:24px;background:linear-gradient(135deg,#0f4c5c 0%,#146c78 100%);color:#f8f7f4;display:grid;place-items:center;text-align:center;padding:48px 24px;box-shadow:0 2px 4px rgba(15,23,42,.04),0 24px 48px -16px rgba(15,76,92,.18);position:relative;overflow:hidden}.jr-cta:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(248,247,244,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(248,247,244,.08) 1px,transparent 1px);background-size:48px 48px;opacity:.45}.jr-cta > div{position:relative;z-index:1}.jr-cta h2{margin:0;color:#f8f7f4;font:500 clamp(30px,3.8vw,42px)/1.12 Fraunces,Georgia,serif}.jr-cta p{margin:18px 0 28px;color:rgba(248,247,244,.78);font-size:16px}.jr-light-btn{display:inline-flex;align-items:center;gap:10px;border-radius:999px;background:#f8f7f4;color:#0f4c5c!important;padding:14px 24px;text-decoration:none;font-weight:700}
.jr-footer{padding:34px 0;color:#64748b;font-size:13px}.jr-footer .jr-container{display:flex;justify-content:space-between;gap:20px;border-top:1px solid rgba(229,231,235,.72);padding-top:34px}
@media(max-width:900px){.jr-container{width:min(100% - 32px,1200px)}.jr-hero{padding:76px 0 68px}.jr-section{padding:64px 0}.jr-grid-3,.jr-grid-4,.jr-grid-6{grid-template-columns:1fr 1fr}.jr-section-head{align-items:flex-start;flex-direction:column}.jr-search{grid-template-columns:34px 1fr}.jr-search .jr-primary{grid-column:1/-1;width:100%}}
@media(max-width:620px){.jr-title{font-size:42px}.jr-grid-3,.jr-grid-4,.jr-grid-6{grid-template-columns:1fr}.jr-job-bottom,.jr-footer .jr-container{align-items:flex-start;flex-direction:column}.jr-card{padding:18px}}
`;
    document.head.appendChild(style);
  }

  var jobs = [
    ["S", "Stripe", "Applied AI Engineer", "Singapore", "Full-time", "2d", "$140k - $180k", "HYBRID", "94% match"],
    ["N", "Notion", "Senior Product Manager", "Remote - APAC", "Full-time", "5h", "$150k - $200k", "REMOTE", "91% match"],
    ["G", "Grab", "Data Scientist, Marketplace", "Kuala Lumpur", "Full-time", "1d", "RM 12k - 18k", "ON-SITE", "88% match"],
    ["S", "Shopee", "UI/UX Designer, Growth", "Jakarta", "Full-time", "3d", "IDR 25M - 40M", "HYBRID", "85% match"],
    ["P", "Petronas", "Graduate Engineer, Digital", "Kuala Lumpur", "Graduate", "1w", "RM 4.5k - 6k", "ON-SITE", "82% match"],
    ["L", "Linear", "Founding Design Engineer", "Remote", "Full-time", "6h", "$160k - $210k", "REMOTE", "90% match"]
  ];
  var careers = [
    ["Applied AI Engineer", "$150k avg", "Very High", "+42%"],
    ["Product Manager", "$135k avg", "High", "+18%"],
    ["Data Scientist", "$128k avg", "High", "+22%"],
    ["UX Researcher", "$110k avg", "Growing", "+27%"]
  ];
  var companies = [
    ["S", "Stripe", "FINTECH", "42 open"], ["N", "Notion", "PRODUCTIVITY", "18 open"], ["G", "Grab", "SUPERAPP", "87 open"],
    ["S", "Shopee", "E-COMMERCE", "64 open"], ["P", "Petronas", "ENERGY", "31 open"], ["M", "Maybank", "BANKING", "22 open"]
  ];
  var programmes = [
    ["Google STEP", "Google", "Internship"], ["Petronas Graduate Programme", "Petronas", "Graduate"],
    ["Shopee Graduate Programme", "Shopee", "Graduate"], ["Grab MET", "Grab", "Rotational"]
  ];
  var collections = [
    ["Highest paying graduate jobs", "The grad roles paying the most in 2026."],
    ["Remote-friendly companies", "Teams that thrive without an office."],
    ["Fast-growing AI companies", "Where the AI market is scaling now."],
    ["Best internships this month", "Open now for students and grads."],
    ["Top graduate employers", "Ranked by graduate satisfaction."],
    ["Companies hiring senior talent", "Leadership seats opening this quarter."]
  ];

  function jobCard(j) {
    return '<article class="jr-card jr-job"><div class="jr-job-top"><div class="jr-logo">' + j[0] + '</div><div><div class="jr-company">' + j[1] + '</div><h3 class="jr-job-title">' + j[2] + '</h3></div><span class="jr-match">' + j[8] + '</span></div><div class="jr-meta"><span>' + icon("map-pin") + j[3] + '</span><span>' + icon("briefcase") + j[4] + '</span><span>' + icon("clock") + j[5] + '</span></div><div class="jr-divider"></div><div class="jr-job-bottom"><div><span class="jr-salary">' + j[6] + '</span><span class="jr-mode">' + j[7] + '</span></div><a class="jr-small-btn" href="login.html">Preview ' + icon("arrow-up-right") + '</a></div></article>';
  }
  function careerCard(c) {
    return '<article class="jr-card jr-career"><span class="jr-meta" style="margin-top:0">' + icon("trending-up") + 'Trending</span><h3>' + c[0] + '</h3><div class="jr-kv"><span>Avg salary</span><b>' + c[1] + '</b><span>Demand</span><b>' + c[2] + '</b><span>Growth</span><b>' + c[3] + '</b></div></article>';
  }
  function companyCard(c) {
    return '<article class="jr-card jr-company-card"><div class="jr-logo">' + c[0] + '</div><h3>' + c[1] + '</h3><div class="jr-sector">' + c[2] + '</div><span class="jr-open">' + icon("briefcase") + c[3] + '</span></article>';
  }
  function programCard(p) {
    return '<article class="jr-card jr-program">' + icon("graduation-cap") + '<span class="jr-tag">' + p[2] + '</span><h3>' + p[0] + '</h3><p>' + p[1] + '</p><a class="jr-learn" href="register.html">Learn more ' + icon("arrow-right") + '</a></article>';
  }
  function collectionCard(c) {
    return '<article class="jr-card jr-collection">' + icon("bookmark") + '<i class="jr-corner" data-lucide="arrow-up-right"></i><h3>' + c[0] + '</h3><p>' + c[1] + '</p></article>';
  }
  function section(label, title, copy, link, gridClass, cards) {
    return '<section class="jr-section"><div class="jr-container"><div class="jr-section-head"><div><div class="jr-section-label">' + label + '</div><h2>' + title + '</h2>' + (copy ? '<p>' + copy + '</p>' : '') + '</div>' + (link ? '<a class="jr-link" href="' + link[1] + '">' + link[0] + ' ' + icon("arrow-right") + '</a>' : '') + '</div><div class="' + gridClass + '">' + cards + '</div></div></section>';
  }

  function render() {
    addStyles();
    document.body.classList.add(ROOT_CLASS);
    var main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      var anchor = document.querySelector("header, nav");
      (anchor && anchor.parentNode ? anchor.parentNode : document.body).insertBefore(main, anchor ? anchor.nextSibling : document.body.firstChild);
    }
    if (main.querySelector(".jr-hero") && main.querySelector(".jr-cta")) return;
    main.className = "jr-page";
    main.innerHTML =
      '<section class="jr-hero"><div class="jr-container"><div class="jr-eyebrow">Explore</div><h1 class="jr-title">Discover your next move.</h1><p class="jr-copy">Jobs, career paths, salaries and market signals &mdash; curated by CareerGo&rsquo;s AI, updated in real time.</p><div class="jr-search">' + icon("sparkles") + '<span>Search AI Engineer...</span><a class="jr-primary" href="#">' + icon("search") + 'Search</a></div><div class="jr-trends"><span>Trending</span><span class="jr-chip">AI Engineer</span><span class="jr-chip">Software Engineer</span><span class="jr-chip">Data Scientist</span><span class="jr-chip">Product Manager</span><span class="jr-chip">UI/UX Designer</span></div></div></section>' +
      section("Featured Opportunities", "Curated roles, matched to real careers.", "Hand-picked openings from companies actively hiring this week.", ["Browse all jobs", "register.html"], "jr-grid-3", jobs.map(jobCard).join("")) +
      section("Trending Careers", "What the market is moving toward.", "Live signals from thousands of openings and salary reports.", ["Explore more", "register.html"], "jr-grid-4", careers.map(careerCard).join("")) +
      section("Featured Companies", "Teams hiring on CareerGo.", "", ["View all companies", "companies.html"], "jr-grid-6", companies.map(companyCard).join("")) +
      section("Graduate Opportunities", "Programmes that launch careers.", "", ["View all opportunities", "register.html"], "jr-grid-4", programmes.map(programCard).join("")) +
      section("Career Collections", "Curated lists, updated weekly.", "", null, "jr-grid-3", collections.map(collectionCard).join("")) +
      '<section class="jr-cta-wrap"><div class="jr-container"><div class="jr-cta"><div><h2>Ready to build your career roadmap?</h2><p>Create your free CareerGo account and let Vera plan your next move.</p><a class="jr-light-btn" href="register.html">Create your free account ' + icon("arrow-right") + '</a></div></div></div></section>' +
      '<footer class="jr-footer"><div class="jr-container"><span>&copy; 2026 CareerGo. All rights reserved.</span><span>Designed for every stage of your career.</span></div></footer>';
    document.querySelectorAll("footer").forEach(function (f) {
      if (!f.classList.contains("jr-footer")) f.style.display = "none";
    });
    if (window.lucide) window.lucide.createIcons();
  }

  function boot() {
    render();
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      render();
      if (tries > 10) clearInterval(timer);
    }, 250);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
