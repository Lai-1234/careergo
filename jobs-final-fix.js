(function () {
  if (!/jobs\.html$/i.test(location.pathname) || document.documentElement.dataset.jobsFinalFixed) return;
  document.documentElement.dataset.jobsFinalFixed = "1";

  var style = document.createElement("style");
  style.textContent = `
.jobs-redesign{background:#f8f7f4;color:#173b33;font-family:Inter,system-ui,sans-serif}
.jobs-redesign *{box-sizing:border-box}
.jr-wrap{width:min(1200px,calc(100% - 48px));margin:0 auto}
.jr-hero{padding:104px 0 78px;text-align:center;border-bottom:1px solid rgba(15,76,92,.08)}
.jr-kicker{display:inline-flex;align-items:center;gap:16px;color:#0f4c5c;font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}
.jr-kicker:before{content:"";width:48px;height:1px;background:rgba(15,76,92,.35)}
.jr-title{margin:28px 0 0;font-family:Fraunces,Georgia,serif;font-size:clamp(44px,5vw,72px);font-weight:500;line-height:1.05;letter-spacing:-.02em;color:#1e293b}
.jr-copy{max-width:720px;margin:24px auto 0;color:#64748b;font-size:18px;line-height:1.6}
.jr-search{max-width:720px;height:56px;margin:42px auto 0;display:grid;grid-template-columns:1fr auto;align-items:center;gap:12px;padding:8px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 24px 48px -16px rgba(15,76,92,.18)}
.jr-search-left{display:flex;align-items:center;gap:12px;padding-left:12px;color:#64748b;font-size:14px}
.jr-btn{height:40px;border:0;border-radius:999px;background:#0f4c5c;color:#fff;font-weight:600;font-size:14px;padding:0 22px;display:inline-flex;align-items:center;gap:8px}
.jr-chips{display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;margin-top:20px;color:#64748b;font-size:12px}
.jr-chip{padding:8px 14px;border:1px solid #e5e7eb;border-radius:999px;background:#fff;box-shadow:0 1px 2px rgba(15,23,42,.04)}
.jr-section{padding:86px 0;border-bottom:1px solid rgba(15,76,92,.08)}
.jr-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:32px}
.jr-section h2{margin:0;font-family:Fraunces,Georgia,serif;font-size:clamp(34px,3vw,44px);font-weight:500;line-height:1.1;color:#1e293b}
.jr-section p{margin:14px 0 0;color:#64748b;font-size:16px;line-height:1.6}
.jr-link{display:inline-flex;align-items:center;gap:10px;color:#173b33;text-decoration:none;font-size:14px;font-weight:600;white-space:nowrap}
.jr-link-pill{padding:12px 18px;border:1px solid #e5e7eb;border-radius:999px;background:#fff;box-shadow:0 1px 2px rgba(15,23,42,.04)}
.jr-grid{display:grid;gap:24px}
.jr-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
.jr-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}
.jr-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}
.jr-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 2px 8px -2px rgba(15,23,42,.06);padding:20px}
.jr-card h3{margin:0;font-family:Fraunces,Georgia,serif;font-size:20px;font-weight:500;line-height:1.2;color:#1e293b}
.jr-role-top{display:grid;grid-template-columns:44px 1fr auto;gap:14px;align-items:start}
.jr-avatar{width:44px;height:44px;border-radius:14px;background:#f2f3f5;display:grid;place-items:center;color:#0f4c5c;font-family:Fraunces,Georgia,serif;font-size:18px}
.jr-company{color:#64748b;font-size:13px;margin-bottom:4px}
.jr-match{background:#dff3ef;color:#0f4c5c;border-radius:999px;padding:7px 10px;font-size:12px;font-weight:700;white-space:nowrap}
.jr-meta{display:flex;flex-wrap:wrap;gap:16px;margin:22px 0 18px;color:#64748b;font-size:13px}
.jr-meta span{display:inline-flex;align-items:center;gap:6px}
.jr-role-bottom{border-top:1px solid #e5e7eb;padding-top:16px;display:flex;align-items:center;justify-content:space-between;gap:14px}
.jr-pay{font-family:Fraunces,Georgia,serif;font-size:18px;color:#1e293b}
.jr-mode{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#64748b;margin-top:2px}
.jr-preview{height:34px;padding:0 16px;border-radius:999px;background:#0f4c5c;color:#fff;text-decoration:none;font-weight:700;font-size:12px;display:inline-flex;align-items:center;gap:8px}
.jr-stat{min-height:178px}
.jr-stat-row{display:grid;grid-template-columns:1fr auto;gap:12px;margin-top:10px;font-size:14px;color:#64748b}
.jr-stat-row strong{color:#1e293b}
.jr-company-card{text-align:center;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}
.jr-program{min-height:178px;display:flex;flex-direction:column;justify-content:space-between}
.jr-collection{min-height:126px;position:relative}
.jr-mini{display:flex;align-items:center;gap:8px;color:#0f4c5c;font-size:12px;margin-bottom:16px}
.jr-arrow{position:absolute;right:20px;top:20px}
.jr-cta{padding:72px 0 96px;border-bottom:1px solid rgba(15,76,92,.08)}
.jr-cta-box{position:relative;overflow:hidden;border-radius:24px;background:linear-gradient(135deg,#0f4c5c,#146c78);padding:64px 32px;text-align:center;color:#f8f7f4;box-shadow:0 24px 48px -16px rgba(15,76,92,.18)}
.jr-cta-box:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(248,247,244,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(248,247,244,.08) 1px,transparent 1px);background-size:48px 48px;opacity:.45}
.jr-cta-box>*{position:relative}
.jr-cta-box h2{margin:0;color:#f8f7f4;font-family:Fraunces,Georgia,serif;font-size:38px;font-weight:500}
.jr-cta-box p{color:rgba(248,247,244,.78)}
.jr-cta-box a{height:44px;padding:0 24px;border-radius:999px;background:#f8f7f4;color:#0f4c5c;text-decoration:none;display:inline-flex;align-items:center;gap:10px;font-weight:700}
.jr-footer{display:flex;justify-content:space-between;gap:24px;padding:32px 0;color:#64748b;font-size:12px}
@media(max-width:980px){.jr-cols-3,.jr-cols-4,.jr-cols-6{grid-template-columns:repeat(2,minmax(0,1fr))}.jr-head{align-items:flex-start;flex-direction:column}}
@media(max-width:640px){.jr-wrap{width:min(100% - 32px,1200px)}.jr-hero{padding:80px 0 64px}.jr-search{grid-template-columns:1fr;height:auto}.jr-btn{width:100%;justify-content:center}.jr-cols-3,.jr-cols-4,.jr-cols-6{grid-template-columns:1fr}.jr-title{font-size:44px}.jr-footer{flex-direction:column}}
`;
  document.head.appendChild(style);

  var roles = [
    ["S","Stripe","Applied AI Engineer","Singapore","Full-time","2d","$140k - $180k","HYBRID","94% match"],
    ["N","Notion","Senior Product Manager","Remote - APAC","Full-time","5h","$150k - $200k","REMOTE","91% match"],
    ["G","Grab","Data Scientist, Marketplace","Kuala Lumpur","Full-time","1d","RM 12k - 18k","ON-SITE","88% match"],
    ["S","Shopee","UI/UX Designer, Growth","Jakarta","Full-time","3d","IDR 25M - 40M","HYBRID","85% match"],
    ["P","Petronas","Graduate Engineer, Digital","Kuala Lumpur","Graduate","1w","RM 4.5k - 6k","ON-SITE","82% match"],
    ["L","Linear","Founding Design Engineer","Remote","Full-time","6h","$160k - $210k","REMOTE","90% match"]
  ];
  var careers = [["Applied AI Engineer","$150k avg","Very High","+42%"],["Product Manager","$135k avg","High","+18%"],["Data Scientist","$128k avg","High","+22%"],["UX Researcher","$110k avg","Growing","+27%"]];
  var companies = [["S","Stripe","FINTECH","42 open"],["N","Notion","PRODUCTIVITY","18 open"],["G","Grab","SUPERAPP","87 open"],["S","Shopee","E-COMMERCE","64 open"],["P","Petronas","ENERGY","31 open"],["M","Maybank","BANKING","22 open"]];
  var programs = [["Internship","Google STEP","Google"],["Graduate","Petronas Graduate Programme","Petronas"],["Graduate","Shopee Graduate Programme","Shopee"],["Rotational","Grab MET","Grab"]];
  var collections = [["Highest paying graduate jobs","The grad roles paying the most in 2026."],["Remote-friendly companies","Teams that thrive without an office."],["Fast-growing AI companies","Where the AI market is scaling now."],["Best internships this month","Open now for students and grads."],["Top graduate employers","Ranked by graduate satisfaction."],["Companies hiring senior talent","Leadership seats opening this quarter."]];

  function icon(n){ return '<i data-lucide="' + n + '"></i>'; }
  function role(r){ return '<article class="jr-card"><div class="jr-role-top"><div class="jr-avatar">'+r[0]+'</div><div><div class="jr-company">'+r[1]+'</div><h3>'+r[2]+'</h3></div><div class="jr-match">'+r[8]+'</div></div><div class="jr-meta"><span>'+icon('map-pin')+r[3]+'</span><span>'+icon('briefcase')+r[4]+'</span><span>'+icon('clock')+r[5]+'</span></div><div class="jr-role-bottom"><div><div class="jr-pay">'+r[6]+'</div><div class="jr-mode">'+r[7]+'</div></div><a class="jr-preview" href="register.html">Preview '+icon('arrow-up-right')+'</a></div></article>'; }
  function career(c){ return '<article class="jr-card jr-stat"><div class="jr-mini">'+icon('trending-up')+'Trending</div><h3>'+c[0]+'</h3><div class="jr-stat-row"><span>Avg salary</span><strong>'+c[1]+'</strong></div><div class="jr-stat-row"><span>Demand</span><strong>'+c[2]+'</strong></div><div class="jr-stat-row"><span>Growth</span><strong>'+c[3]+'</strong></div></article>'; }
  function company(c){ return '<article class="jr-card jr-company-card"><div class="jr-avatar">'+c[0]+'</div><h3>'+c[1]+'</h3><div class="jr-mode">'+c[2]+'</div><div>'+icon('briefcase')+' '+c[3]+'</div></article>'; }
  function program(p){ return '<article class="jr-card jr-program"><div><div class="jr-mini">'+icon('graduation-cap')+'<span class="jr-match">'+p[0]+'</span></div><h3>'+p[1]+'</h3><p>'+p[2]+'</p></div><a class="jr-link" href="register.html">Learn more '+icon('arrow-right')+'</a></article>'; }
  function collection(c){ return '<article class="jr-card jr-collection"><span class="jr-arrow">'+icon('arrow-up-right')+'</span><div class="jr-mini">'+icon('bookmark')+'Collection</div><h3>'+c[0]+'</h3><p>'+c[1]+'</p></article>'; }

  var main = document.querySelector("main") || document.body.appendChild(document.createElement("main"));
  main.className = "jobs-redesign";
  main.innerHTML =
    '<section class="jr-hero"><div class="jr-wrap"><div class="jr-kicker">Explore</div><h1 class="jr-title">Discover your next move.</h1><p class="jr-copy">Jobs, career paths, salaries and market signals - curated by CareerGo&apos;s AI, updated in real time.</p><div class="jr-search"><div class="jr-search-left">'+icon('sparkles')+'<span>Search AI Engineer...</span></div><button class="jr-btn" type="button">'+icon('search')+'Search</button></div><div class="jr-chips"><span>Trending</span><span class="jr-chip">AI Engineer</span><span class="jr-chip">Software Engineer</span><span class="jr-chip">Data Scientist</span><span class="jr-chip">Product Manager</span><span class="jr-chip">UI/UX Designer</span></div></div></section>' +
    '<section class="jr-section"><div class="jr-wrap"><div class="jr-head"><div><div class="jr-kicker">Featured opportunities</div><h2>Curated roles, matched to real careers.</h2><p>Hand-picked openings from companies actively hiring this week.</p></div><a class="jr-link jr-link-pill" href="register.html">Browse all jobs '+icon('arrow-right')+'</a></div><div class="jr-grid jr-cols-3">'+roles.map(role).join('')+'</div><p style="text-align:center;margin-top:28px;font-size:13px">To apply, create a free CareerGo account.</p></div></section>' +
    '<section class="jr-section"><div class="jr-wrap"><div class="jr-head"><div><div class="jr-kicker">Trending careers</div><h2>What the market is moving toward.</h2><p>Live signals from thousands of openings and salary reports.</p></div><a class="jr-link jr-link-pill" href="register.html">Explore more '+icon('arrow-right')+'</a></div><div class="jr-grid jr-cols-4">'+careers.map(career).join('')+'</div></div></section>' +
    '<section class="jr-section"><div class="jr-wrap"><div class="jr-head"><div><div class="jr-kicker">Featured companies</div><h2>Teams hiring on CareerGo.</h2></div><a class="jr-link jr-link-pill" href="companies.html">View all companies '+icon('arrow-right')+'</a></div><div class="jr-grid jr-cols-6">'+companies.map(company).join('')+'</div></div></section>' +
    '<section class="jr-section"><div class="jr-wrap"><div class="jr-head"><div><div class="jr-kicker">Graduate opportunities</div><h2>Programmes that launch careers.</h2></div><a class="jr-link jr-link-pill" href="register.html">View all opportunities '+icon('arrow-right')+'</a></div><div class="jr-grid jr-cols-4">'+programs.map(program).join('')+'</div></div></section>' +
    '<section class="jr-section"><div class="jr-wrap"><div class="jr-head"><div><div class="jr-kicker">Career collections</div><h2>Curated lists, updated weekly.</h2></div></div><div class="jr-grid jr-cols-3">'+collections.map(collection).join('')+'</div></div></section>' +
    '<section class="jr-cta"><div class="jr-wrap"><div class="jr-cta-box"><h2>Ready to build your career roadmap?</h2><p>Create your free CareerGo account and let Vera plan your next move.</p><a href="register.html">Create your free account '+icon('arrow-right')+'</a></div></div></section>' +
    '<footer class="jr-wrap jr-footer"><span>&copy; 2026 CareerGo. All rights reserved.</span><span>Designed for every stage of your career.</span></footer>';

  document.querySelectorAll("body > footer").forEach(function (footer) { footer.remove(); });
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
})();
