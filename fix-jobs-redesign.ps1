$ErrorActionPreference = 'Stop'
try {
  $root = Split-Path -Parent $MyInvocation.MyCommand.Path
  if (-not $root) { $root = (Get-Location).Path }
  $htmlPath = Join-Path $root 'jobs.html'
  $html = [IO.File]::ReadAllText($htmlPath)

  $main = @"
<main class='jobs-redesign'>
  <section class='jobs-hero'>
    <div class='jobs-eyebrow'><span></span>EXPLORE</div>
    <h1>Discover your next move.</h1>
    <p>Jobs, career paths, salaries and market signals - curated by CareerGo's AI, updated in real time.</p>
    <form class='jobs-search' action='#'>
      <span class='jobs-search-icon'>✣</span>
      <input aria-label='Search careers' type='search' placeholder='Search AI Engineer...' />
      <button type='submit'>Search</button>
    </form>
    <div class='jobs-trending'>
      <span>Trending</span>
      <a href='#'>AI Engineer</a>
      <a href='#'>Software Engineer</a>
      <a href='#'>Data Scientist</a>
      <a href='#'>Product Manager</a>
      <a href='#'>UI/UX Designer</a>
    </div>
  </section>

  <section class='jobs-section jobs-featured'>
    <div class='jobs-section-head'>
      <div>
        <div class='jobs-kicker'><span></span>FEATURED OPPORTUNITIES</div>
        <h2>Curated roles, matched to real careers.</h2>
        <p>Hand-picked openings from companies actively hiring this week.</p>
      </div>
      <a class='jobs-text-link' href='#'>Browse all jobs <span>→</span></a>
    </div>
    <div class='jobs-role-grid'>
      <article class='jobs-role-card'>
        <div class='jobs-role-top'><div class='jobs-logo-tile'>S</div><div><span>Stripe</span><h3>Applied AI Engineer</h3></div><b>94% match</b></div>
        <div class='jobs-meta'><span>⌖ Singapore</span><span>▣ Full-time</span><span>◷ 2d</span></div>
        <div class='jobs-card-foot'><div><strong>USD 140k - 180k</strong><small>HYBRID</small></div><a href='#'>Preview ↗</a></div>
      </article>
      <article class='jobs-role-card'>
        <div class='jobs-role-top'><div class='jobs-logo-tile'>N</div><div><span>Notion</span><h3>Senior Product Manager</h3></div><b>91% match</b></div>
        <div class='jobs-meta'><span>⌖ Remote - APAC</span><span>▣ Full-time</span><span>◷ 5h</span></div>
        <div class='jobs-card-foot'><div><strong>USD 150k - 200k</strong><small>REMOTE</small></div><a href='#'>Preview ↗</a></div>
      </article>
      <article class='jobs-role-card'>
        <div class='jobs-role-top'><div class='jobs-logo-tile'>G</div><div><span>Grab</span><h3>Data Scientist, Marketplace</h3></div><b>88% match</b></div>
        <div class='jobs-meta'><span>⌖ Kuala Lumpur</span><span>▣ Full-time</span><span>◷ 1d</span></div>
        <div class='jobs-card-foot'><div><strong>RM 12k - 18k</strong><small>ON-SITE</small></div><a href='#'>Preview ↗</a></div>
      </article>
      <article class='jobs-role-card'>
        <div class='jobs-role-top'><div class='jobs-logo-tile'>S</div><div><span>Shopee</span><h3>UI/UX Designer, Growth</h3></div><b>85% match</b></div>
        <div class='jobs-meta'><span>⌖ Jakarta</span><span>▣ Full-time</span><span>◷ 3d</span></div>
        <div class='jobs-card-foot'><div><strong>IDR 25M - 40M</strong><small>HYBRID</small></div><a href='#'>Preview ↗</a></div>
      </article>
      <article class='jobs-role-card'>
        <div class='jobs-role-top'><div class='jobs-logo-tile'>P</div><div><span>Petronas</span><h3>Graduate Engineer, Digital</h3></div><b>82% match</b></div>
        <div class='jobs-meta'><span>⌖ Kuala Lumpur</span><span>▣ Graduate</span><span>◷ 1w</span></div>
        <div class='jobs-card-foot'><div><strong>RM 4.5k - 6k</strong><small>ON-SITE</small></div><a href='#'>Preview ↗</a></div>
      </article>
      <article class='jobs-role-card'>
        <div class='jobs-role-top'><div class='jobs-logo-tile'>L</div><div><span>Linear</span><h3>Founding Design Engineer</h3></div><b>90% match</b></div>
        <div class='jobs-meta'><span>⌖ Remote</span><span>▣ Full-time</span><span>◷ 6h</span></div>
        <div class='jobs-card-foot'><div><strong>USD 160k - 210k</strong><small>REMOTE</small></div><a href='#'>Preview ↗</a></div>
      </article>
    </div>
    <p class='jobs-note'>To apply, create a free CareerGo account.</p>
  </section>

  <section class='jobs-section'>
    <div class='jobs-section-head'>
      <div>
        <div class='jobs-kicker'><span></span>TRENDING CAREERS</div>
        <h2>What the market is moving toward.</h2>
        <p>Live signals from thousands of openings and salary reports.</p>
      </div>
      <a class='jobs-text-link' href='#'>Explore more <span>→</span></a>
    </div>
    <div class='jobs-career-grid'>
      <article class='jobs-career-card'><span>↗ Trending</span><h3>Applied AI Engineer</h3><dl><dt>Avg salary</dt><dd>USD 150k avg</dd><dt>Demand</dt><dd>Very High</dd><dt>Growth</dt><dd>+42%</dd></dl></article>
      <article class='jobs-career-card'><span>↗ Trending</span><h3>Product Manager</h3><dl><dt>Avg salary</dt><dd>USD 135k avg</dd><dt>Demand</dt><dd>High</dd><dt>Growth</dt><dd>+18%</dd></dl></article>
      <article class='jobs-career-card'><span>↗ Trending</span><h3>Data Scientist</h3><dl><dt>Avg salary</dt><dd>USD 128k avg</dd><dt>Demand</dt><dd>High</dd><dt>Growth</dt><dd>+22%</dd></dl></article>
      <article class='jobs-career-card'><span>↗ Trending</span><h3>UX Researcher</h3><dl><dt>Avg salary</dt><dd>USD 110k avg</dd><dt>Demand</dt><dd>Growing</dd><dt>Growth</dt><dd>+27%</dd></dl></article>
    </div>
  </section>

  <section class='jobs-section'>
    <div class='jobs-section-head'>
      <div>
        <div class='jobs-kicker'><span></span>FEATURED COMPANIES</div>
        <h2>Teams hiring on CareerGo.</h2>
      </div>
      <a class='jobs-text-link' href='companies.html'>View all companies <span>→</span></a>
    </div>
    <div class='jobs-company-row'>
      <article><div>S</div><h3>Stripe</h3><p>FINTECH</p><span>▣ 42 open</span></article>
      <article><div>N</div><h3>Notion</h3><p>PRODUCTIVITY</p><span>▣ 18 open</span></article>
      <article><div>G</div><h3>Grab</h3><p>SUPERAPP</p><span>▣ 87 open</span></article>
      <article><div>S</div><h3>Shopee</h3><p>E-COMMERCE</p><span>▣ 64 open</span></article>
      <article><div>P</div><h3>Petronas</h3><p>ENERGY</p><span>▣ 31 open</span></article>
      <article><div>M</div><h3>Maybank</h3><p>BANKING</p><span>▣ 22 open</span></article>
    </div>
  </section>

  <section class='jobs-section'>
    <div class='jobs-section-head'>
      <div>
        <div class='jobs-kicker'><span></span>GRADUATE OPPORTUNITIES</div>
        <h2>Programmes that launch careers.</h2>
      </div>
      <a class='jobs-text-link' href='#'>View all opportunities <span>→</span></a>
    </div>
    <div class='jobs-program-grid'>
      <article><span>▱ Internship</span><h3>Google STEP</h3><p>Google</p><a href='#'>Learn more →</a></article>
      <article><span>▱ Graduate</span><h3>Petronas Graduate Programme</h3><p>Petronas</p><a href='#'>Learn more →</a></article>
      <article><span>▱ Graduate</span><h3>Shopee Graduate Programme</h3><p>Shopee</p><a href='#'>Learn more →</a></article>
      <article><span>▱ Rotational</span><h3>Grab MET</h3><p>Grab</p><a href='#'>Learn more →</a></article>
    </div>
  </section>

  <section class='jobs-section'>
    <div class='jobs-kicker'><span></span>CAREER COLLECTIONS</div>
    <h2>Curated lists, updated weekly.</h2>
    <div class='jobs-collection-grid'>
      <article><span>▱ Collection ↗</span><h3>Highest paying graduate jobs</h3><p>The grad roles paying the most in 2026.</p></article>
      <article><span>▱ Collection ↗</span><h3>Remote-friendly companies</h3><p>Teams that thrive without an office.</p></article>
      <article><span>▱ Collection ↗</span><h3>Fast-growing AI companies</h3><p>Where the AI market is scaling now.</p></article>
      <article><span>▱ Collection ↗</span><h3>Best internships this month</h3><p>Open now for students and grads.</p></article>
      <article><span>▱ Collection ↗</span><h3>Top graduate employers</h3><p>Ranked by graduate satisfaction.</p></article>
      <article><span>▱ Collection ↗</span><h3>Companies hiring senior talent</h3><p>Leadership seats opening this quarter.</p></article>
    </div>
  </section>

  <section class='jobs-cta'>
    <h2>Ready to build your career roadmap?</h2>
    <p>Create your free CareerGo account and let Vera plan your next move.</p>
    <a href='register.html'>Create your free account <span>→</span></a>
  </section>
</main>
"@

  $rx = [regex]'(?is)<main\b.*?</main>'
  $eval = [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $main }
  if ($rx.IsMatch($html)) { $html = $rx.Replace($html, $eval, 1) }
  else { $html = $html -replace '(?is)</body>', ($main + "`r`n</body>") }
  [IO.File]::WriteAllText($htmlPath, $html, [Text.UTF8Encoding]::new($false))

  $cssBlock = @"
/* Jobs redesign final layout v6 */
.jobs-redesign{background:#F8F7F4;color:#1E293B;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;overflow:hidden}.jobs-redesign *{box-sizing:border-box}.jobs-redesign a{text-decoration:none;color:inherit}.jobs-hero,.jobs-section,.jobs-cta{max-width:1200px;margin:0 auto}.jobs-hero{min-height:620px;padding:150px 24px 90px;text-align:center;display:flex;flex-direction:column;align-items:center}.jobs-eyebrow,.jobs-kicker{display:flex;align-items:center;gap:18px;color:#0F4C5C;font-size:12px;font-weight:500;letter-spacing:.18em;line-height:1.4}.jobs-eyebrow span,.jobs-kicker span{display:block;width:48px;height:1px;background:rgba(15,76,92,.35)}.jobs-hero h1,.jobs-section h2,.jobs-cta h2{font-family:Fraunces,Georgia,serif;font-weight:500;letter-spacing:-.02em;color:#1E293B;margin:0}.jobs-hero h1{font-size:clamp(48px,6vw,72px);line-height:1.05;margin-top:34px}.jobs-hero p,.jobs-section-head p,.jobs-note,.jobs-cta p{font-size:18px;line-height:1.6;color:#64748B;margin:26px 0 0}.jobs-hero p{max-width:720px}.jobs-search{margin-top:44px;width:min(820px,100%);height:56px;padding:8px;display:grid!important;grid-template-columns:44px minmax(0,1fr)112px;align-items:center;background:#fff;border:1px solid #E5E7EB;border-radius:16px;box-shadow:0 2px 4px rgba(15,23,42,.04),0 24px 48px -16px rgba(15,76,92,.18)}.jobs-search-icon{font-size:22px;color:#4DB6AC}.jobs-search input{width:100%;height:40px;border:0!important;outline:0!important;background:transparent!important;color:#1E293B;font:400 14px/1.4 Inter,sans-serif}.jobs-search input::placeholder{color:#64748B}.jobs-search button{height:40px;border:0;border-radius:999px;background:#0F4C5C;color:#F8F7F4;font:600 14px/1 Inter,sans-serif;cursor:pointer}.jobs-trending{margin-top:24px;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;color:#64748B}.jobs-trending a{padding:8px 16px;border-radius:999px;background:#fff;border:1px solid #E5E7EB;box-shadow:0 1px 2px rgba(15,23,42,.04);font-size:13px}.jobs-section{padding:96px 24px;border-top:1px solid rgba(229,231,235,.75)}.jobs-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:36px}.jobs-section h2{font-size:clamp(32px,4vw,42px);line-height:1.1;margin-top:26px}.jobs-text-link{display:inline-flex;align-items:center;gap:10px;color:#0F4C5C;font-weight:500;font-size:14px;white-space:nowrap}.jobs-text-link span{font-size:28px;line-height:0}.jobs-role-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:24px!important}.jobs-role-card{display:flex!important;flex-direction:column!important;gap:18px!important;background:#fff!important;border:1px solid #E5E7EB!important;border-radius:16px!important;padding:20px!important;box-shadow:0 1px 2px rgba(15,23,42,.04),0 8px 24px -12px rgba(15,76,92,.12)!important;min-height:180px!important}.jobs-role-top{display:grid;grid-template-columns:44px 1fr auto;gap:14px;align-items:start}.jobs-logo-tile{width:44px;height:44px;border-radius:14px;background:#F2F3F5;color:#0F4C5C;display:grid;place-items:center;font-family:Fraunces,Georgia,serif;font-size:18px}.jobs-role-top span,.jobs-meta,.jobs-role-card small{color:#64748B;font-size:13px}.jobs-role-top h3{margin:2px 0 0;font-family:Inter,sans-serif;font-size:18px;line-height:1.25;color:#1E293B}.jobs-role-top b{padding:6px 10px;border-radius:999px;background:rgba(77,182,172,.12);color:#0F4C5C;font:600 12px/1 Inter,sans-serif;white-space:nowrap}.jobs-meta{display:flex;gap:16px;flex-wrap:wrap;padding-bottom:16px;border-bottom:1px solid #E5E7EB}.jobs-card-foot{margin-top:auto;display:flex;align-items:end;justify-content:space-between;gap:14px}.jobs-card-foot strong{display:block;color:#1E293B;font:500 18px/1.2 Fraunces,Georgia,serif}.jobs-card-foot small{display:block;margin-top:4px;letter-spacing:.12em}.jobs-card-foot a{padding:10px 18px;border-radius:999px;background:#0F4C5C;color:#F8F7F4;font-weight:600;font-size:13px}.jobs-note{text-align:center;font-size:14px;margin-top:34px}.jobs-career-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:24px!important}.jobs-career-card,.jobs-program-grid article,.jobs-collection-grid article{background:#fff;border:1px solid #E5E7EB;border-radius:16px;padding:24px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 8px 24px -12px rgba(15,76,92,.12)}.jobs-career-card span,.jobs-program-grid span,.jobs-collection-grid span{font-size:13px;color:#0F4C5C}.jobs-career-card h3,.jobs-program-grid h3,.jobs-collection-grid h3,.jobs-company-row h3{font-family:Fraunces,Georgia,serif;font-size:22px;line-height:1.15;color:#1E293B;margin:18px 0}.jobs-career-card dl{display:grid;grid-template-columns:1fr auto;gap:10px;margin:20px 0 0;color:#64748B;font-size:14px}.jobs-career-card dd{margin:0;color:#1E293B;font-weight:600}.jobs-company-row{display:grid!important;grid-template-columns:repeat(6,minmax(0,1fr))!important;gap:18px!important}.jobs-company-row article{text-align:center;background:#fff;border:1px solid #E5E7EB;border-radius:16px;padding:24px 16px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 8px 24px -12px rgba(15,76,92,.12)}.jobs-company-row article>div{width:56px;height:56px;margin:0 auto 18px;border-radius:999px;background:#F2F3F5;color:#0F4C5C;display:grid;place-items:center;font:500 22px/1 Fraunces,Georgia,serif}.jobs-company-row p{font-size:12px;letter-spacing:.12em;color:#64748B;margin:0 0 14px}.jobs-company-row span{display:inline-flex;padding:6px 12px;border-radius:999px;background:#F2F3F5;color:#64748B;font-size:12px}.jobs-program-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:24px!important}.jobs-program-grid p,.jobs-collection-grid p{color:#64748B;line-height:1.5}.jobs-program-grid a{display:inline-flex;margin-top:20px;color:#0F4C5C;font-weight:600}.jobs-collection-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:24px!important;margin-top:34px}.jobs-cta{margin-top:72px;margin-bottom:96px;padding:64px 24px;text-align:center;border-radius:24px;background:linear-gradient(135deg,#0F4C5C 0%,#0F4C5C 45%,#146C78 100%);box-shadow:0 2px 4px rgba(15,23,42,.04),0 24px 48px -16px rgba(15,76,92,.18);position:relative;overflow:hidden}.jobs-cta:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(248,247,244,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(248,247,244,.08) 1px,transparent 1px);background-size:48px 48px;opacity:.6}.jobs-cta>*{position:relative}.jobs-cta,.jobs-cta h2,.jobs-cta p{color:#F8F7F4!important}.jobs-cta p{opacity:.78}.jobs-cta a{display:inline-flex;margin-top:28px;padding:14px 24px;border-radius:999px;background:#F8F7F4!important;color:#0F4C5C!important;font-weight:600}.jobs-cta a span{font-size:22px;margin-left:8px}.jobs-featured{padding-top:96px}@media(max-width:1000px){.jobs-role-grid,.jobs-career-grid,.jobs-company-row,.jobs-program-grid,.jobs-collection-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}.jobs-section-head{align-items:flex-start;flex-direction:column}.jobs-hero{padding-top:110px}}@media(max-width:640px){.jobs-hero,.jobs-section{padding-left:18px;padding-right:18px}.jobs-search{height:auto;grid-template-columns:36px 1fr;gap:8px}.jobs-search button{grid-column:1/-1}.jobs-role-grid,.jobs-career-grid,.jobs-company-row,.jobs-program-grid,.jobs-collection-grid{grid-template-columns:1fr!important}.jobs-hero h1{font-size:44px}}
/* End jobs redesign final layout v6 */
"@

  foreach ($file in @('styles.css','enterprise.css')) {
    $path = Join-Path $root $file
    if (Test-Path $path) {
      $css = [IO.File]::ReadAllText($path)
      $css = [regex]::Replace($css, '(?s)/\* Jobs redesign final layout v\d+ \*/.*?/\* End jobs redesign final layout v\d+ \*/', '')
      [IO.File]::WriteAllText($path, ($css.TrimEnd() + "`r`n`r`n" + $cssBlock + "`r`n"), [Text.UTF8Encoding]::new($false))
    }
  }

  $h = [IO.File]::ReadAllText($htmlPath)
  $status = 'ok main=' + $h.Contains('jobs-redesign') + ' roles=' + ([regex]::Matches($h,'jobs-role-card')).Count + ' bad=' + ($h -match '鈴|锟|�')
  [IO.File]::WriteAllText((Join-Path $root 'jobs-fix-status.txt'), $status, [Text.UTF8Encoding]::new($false))
} catch {
  [IO.File]::WriteAllText((Join-Path (Get-Location).Path 'jobs-fix-status.txt'), ('error: ' + $_.Exception.Message), [Text.UTF8Encoding]::new($false))
  exit 1
}
