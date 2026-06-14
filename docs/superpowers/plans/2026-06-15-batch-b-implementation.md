# CareerGo Batch B — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Market Intelligence Hub (Change 4), Autopilot 2.0 (Change 5), and Career Intelligence (Change 7) in `careergo.html`.

**Architecture:** All changes are edits to the single file `c:\careergo\careergo.html`. New components replace old ones in definition order. CSS additions go into the existing `<style>` block.

**Branch:** `candidate_dashboard`

**Verification method:** Open `careergo.html` in browser after each task. No test runner — verify visually.

---

## File map

| Area | Location anchor | What changes |
|------|----------------|-------------|
| CSS `<style>` block | Near top of file | Add radar-ping animation, toggle switch styles |
| `LANG` object | Near top of `<script>` block | Add `appMarket` key to `en` and `bm` |
| `CANDIDATE_NAV` | Line ~2629 | Remove pulse, update pay→appMarket, add tourStep:4 to jobs |
| Sidebar nav buttons in `CandidateApp` | Line ~2663 | Update data-tour to match new nav |
| `TOUR_STEPS` | Line ~2640 | Update steps 2 and 3 (new target/text) |
| `CandidateApp` view redirect | Inside CandidateApp | Add useEffect for pulse→pay redirect |
| Before `CandidateDashboard` | Insert before CandidateDashboard | New `MarketIntelligence` component |
| Where `FairPayEngine` is rendered | Inside `CandidateApp` | Replace view==='pay' render |
| `AutopilotProxy` | Line ~3833 | Full replacement — CSS + new JSX |
| `CareerProfile` | Line ~2841 | Add intelligence banner + upgrade score section |

---

## Task 1: CSS additions for Batch B

**Files:**
- Modify: `c:\careergo\careergo.html` — `<style>` block

- [ ] **Step 1: Insert new CSS before `</style>`**

```css
/* ── Radar ping animation ── */
@keyframes radarPing{0%{transform:scale(0.5);opacity:0.8}100%{transform:scale(2.5);opacity:0}}
.radar-ping{position:absolute;width:10px;height:10px;border-radius:50%;background:#FDBA2D;animation:radarPing 1.8s ease-out infinite}
/* ── Autopilot toggle pill ── */
.ap-toggle{display:flex;align-items:center;gap:3px;width:44px;height:24px;border-radius:12px;background:#e2e8f0;cursor:pointer;transition:background 200ms;padding:2px}
.ap-toggle.on{background:#1D9E75}
.ap-toggle-thumb{width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);transition:transform 200ms}
.ap-toggle.on .ap-toggle-thumb{transform:translateX(20px)}
/* ── Market Intelligence tabs ── */
.market-tab{padding:8px 20px;border-radius:10px;font-size:13px;font-weight:600;color:#64748b;border:1px solid transparent;cursor:pointer;transition:all 150ms}
.market-tab.active{background:#5B2EFF;color:#fff;border-color:#5B2EFF}
/* ── Profile dimension bar ── */
.profile-dim-bar{height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden;margin-top:4px}
.profile-dim-fill{height:100%;border-radius:3px;background:#5B2EFF;transition:width 800ms cubic-bezier(.4,0,.2,1)}
```

- [ ] **Step 2: Verify**

Open `careergo.html` — no visual change expected, no console errors.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "style: add Batch B CSS — radar ping, toggle pill, market tabs, profile dimension bars"
```

---

## Task 2: Update LANG, CANDIDATE_NAV, and TOUR_STEPS

**Files:**
- Modify: `c:\careergo\careergo.html`

- [ ] **Step 1: Add appMarket to LANG**

Find the LANG object. Inside `LANG.en`, find the line with `appPay` and `appPulse`:
```js
    appPay:'Fair Pay Engine',appPulse:'Market Pulse',
```

Replace with:
```js
    appPay:'Fair Pay Engine',appPulse:'Market Pulse',appMarket:'Market Intelligence',
```

Find the same pattern in `LANG.bm`:
```js
    appPay:'Enjin Gaji Adil',appPulse:'Nadi Pasaran',
```

Replace with:
```js
    appPay:'Enjin Gaji Adil',appPulse:'Nadi Pasaran',appMarket:'Perisikan Pasaran',
```

- [ ] **Step 2: Update CANDIDATE_NAV**

Find:
```js
const CANDIDATE_NAV=[
  {id:'dashboard',icon:'layout-dashboard',tk:'appDashboard',tourStep:null},
  {id:'profile',icon:'brain-circuit',tk:'appProfile',tourStep:1},
  {id:'jobs',icon:'briefcase',tk:'appJobs',tourStep:null},
  {id:'companion',icon:'bot',tk:'appCompanion',tourStep:2},
  {id:'pay',icon:'gauge',tk:'appPay',tourStep:3},
  {id:'pulse',icon:'activity',tk:'appPulse',tourStep:4},
  {id:'auto',icon:'radar',tk:'appAuto',tourStep:5},
];
```

Replace with:
```js
const CANDIDATE_NAV=[
  {id:'dashboard',icon:'layout-dashboard',tk:'appDashboard',tourStep:null},
  {id:'profile',icon:'brain-circuit',tk:'appProfile',tourStep:1},
  {id:'jobs',icon:'briefcase',tk:'appJobs',tourStep:4},
  {id:'companion',icon:'bot',tk:'appCompanion',tourStep:2},
  {id:'pay',icon:'bar-chart-2',tk:'appMarket',tourStep:3},
  {id:'auto',icon:'radar',tk:'appAuto',tourStep:5},
];
```

- [ ] **Step 3: Update TOUR_STEPS**

Find `const TOUR_STEPS=[` and update the entries at index 2 and 3 (step-3 and step-4):

Find the step-3 entry:
```js
  {target:'step-3',title:'Know your true market value',body:'See your real salary range based on your verified skills, not job post guesses. Add skills to the Skill Payoff Calculator to instantly see how your earning potential changes.',cta:'Got it →'},
```
Replace with:
```js
  {target:'step-3',title:'Understand your market position',body:'See your real salary range, skill payoffs, and live market signals — all in one place. Know exactly what you\'re worth and where the market is heading.',cta:'Got it →'},
```

Find the step-4 entry:
```js
  {target:'step-4',title:'Track where the market is moving',body:'Like a Bloomberg terminal for your career. See which skills are surging, which industries are hiring, and where opportunities are shifting — updated in real time.',cta:'Got it →'},
```
Replace with:
```js
  {target:'step-4',title:'Browse and apply to matched jobs',body:'Every opportunity is scored against your profile. Filter by fit, salary, or growth signal. Apply in one click — Autopilot handles the rest for 90%+ matches.',cta:'Got it →'},
```

- [ ] **Step 4: Verify**

Open `careergo.html` — sidebar should now show 6 items (Market Intelligence replacing Fair Pay + Market Pulse). The pulse nav item is gone.

- [ ] **Step 5: Commit**

```bash
git add careergo.html
git commit -m "feat: merge Fair Pay + Market Pulse nav items into Market Intelligence, update tour steps"
```

---

## Task 3: Add pulse→pay redirect + build MarketIntelligence component skeleton

**Files:**
- Modify: `c:\careergo\careergo.html`

- [ ] **Step 1: Add view redirect in CandidateApp**

Inside `function CandidateApp(`, find the existing `useEffect` for tour:
```jsx
  useEffect(()=>{ if(!localStorage.getItem('cg_tour_done')) setTourActive(true); },[]);
```

Add a second useEffect after it:
```jsx
  useEffect(()=>{ if(view==='pulse') setView('pay'); },[view]);
```

- [ ] **Step 2: Find and replace the FairPayEngine render call**

Inside `CandidateApp`, find the part that renders `FairPayEngine`:
```jsx
          {view==='pay'&&<FairPayEngine lang={lang} go={go} toast={toast}/>}
          {view==='pulse'&&<MarketPulseModule lang={lang} go={go} toast={toast}/>}
```

Replace with:
```jsx
          {view==='pay'&&<MarketIntelligence lang={lang} go={go} toast={toast}/>}
```

- [ ] **Step 3: Build MarketIntelligence component**

Find `function FairPayEngine(` and insert a new `MarketIntelligence` component BEFORE it:

```jsx
function MarketIntelligence({ lang, go, toast }){
  const [mktTab,setMktTab]=useState('my-value');
  return (
    <div className="space-y-6 fade-up">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Market Intelligence</h1>
        <p className="text-slate-500">Your salary, skill payoffs, and live market signals — unified.</p>
      </div>
      {/* Tab bar */}
      <div className="flex gap-2 p-1 rounded-xl bg-slate-100 w-fit">
        <button onClick={()=>setMktTab('my-value')} className={`market-tab ${mktTab==='my-value'?'active':''}`}>
          <Icon name="gauge" size={14} className="inline mr-1.5"/> My Value
        </button>
        <button onClick={()=>setMktTab('signals')} className={`market-tab ${mktTab==='signals'?'active':''}`}>
          <Icon name="activity" size={14} className="inline mr-1.5"/> Market Signals
        </button>
      </div>
      {/* Tab content — delegated to existing components */}
      {mktTab==='my-value'&&<FairPayContent lang={lang} go={go} toast={toast}/>}
      {mktTab==='signals'&&<MarketSignalsContent lang={lang} go={go} toast={toast}/>}
    </div>
  );
}
```

- [ ] **Step 4: Verify**

Open `careergo.html` → navigate to Market Intelligence in sidebar. The module should load but `FairPayContent` and `MarketSignalsContent` don't exist yet (will give Babel error). That's expected — Tasks 4 and 5 add them.

Actually, to avoid a Babel error, temporarily use a placeholder:
```jsx
      {mktTab==='my-value'&&<div className="p-8 text-center text-slate-400">My Value tab — coming in Task 4</div>}
      {mktTab==='signals'&&<div className="p-8 text-center text-slate-400">Market Signals tab — coming in Task 5</div>}
```

- [ ] **Step 5: Commit**

```bash
git add careergo.html
git commit -m "feat: add MarketIntelligence shell component with tab navigation"
```

---

## Task 4: Build FairPayContent (My Value tab)

**Files:**
- Modify: `c:\careergo\careergo.html`

- [ ] **Step 1: Rename/extract FairPayEngine body into FairPayContent**

Find `function FairPayEngine(`. Copy its entire body and create a new function `FairPayContent` with the same props (`lang`, `go`, `toast`). The body is identical to `FairPayEngine` with two changes:
1. Remove the outer `<div className="space-y-6 fade-up">` wrapper and the header `<h1>` + `<p>` (these are now in `MarketIntelligence`)
2. Change all `$` signs to `RM` in displayed currency strings (there are 2-3 instances in the salary display)
3. In the Market Value header section, add a percentile line:
   ```jsx
   <div className="text-xs font-semibold mt-1" style={{color:'#1D9E75'}}>
     Top {Math.round((1-(USER.marketValue-USER.marketMin)/(USER.marketMax-USER.marketMin))*100)}% for your seniority and location
   </div>
   ```

The full extracted content starts after the `<div className="space-y-6 fade-up">` and before its closing `</div>` tag.

After creating `FairPayContent`, update `MarketIntelligence` to replace the placeholder:
```jsx
      {mktTab==='my-value'&&<FairPayContent lang={lang} go={go} toast={toast}/>}
```

- [ ] **Step 2: Verify**

Navigate to Market Intelligence → My Value tab. All Fair Pay Engine content shows including Gauge, location switcher, Skill Payoff Calculator, Compensation Breakdown, and Pay Growth Projection. Currency shows RM not $.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: extract Fair Pay content into FairPayContent component with RM currency"
```

---

## Task 5: Build MarketSignalsContent (Market Signals tab)

**Files:**
- Modify: `c:\careergo\careergo.html`

- [ ] **Step 1: Extract MarketPulseModule body into MarketSignalsContent**

Find `function MarketPulseModule(`. Copy its entire body and create a new function `MarketSignalsContent` with the same props. Changes:
1. Remove the outer `<div className="space-y-6 fade-up">` wrapper and header
2. Add a subtitle line at the top:
   ```jsx
   <div className="text-xs text-slate-400 mb-4">Data as of today · 847 sources</div>
   ```
3. In the Skill Demand Index section, add user skill cross-referencing:

   Find the `.map(s=>{` inside the PULSE_SKILLS section. Before the `return (`, add:
   ```jsx
                   const userHas=USER.skills.some(us=>us.toLowerCase().includes(s.name.toLowerCase().split(' ')[0]));
   ```
   
   Then inside the skill name row, after `<span className="font-medium text-slate-700">{s.name}</span>`, add:
   ```jsx
                       {userHas&&<span className="text-xs font-bold px-1.5 py-0.5 rounded-full ml-1.5" style={{background:'rgba(29,158,117,0.1)',color:'#1D9E75'}}>You have this ✓</span>}
   ```

After creating `MarketSignalsContent`, update `MarketIntelligence`:
```jsx
      {mktTab==='signals'&&<MarketSignalsContent lang={lang} go={go} toast={toast}/>}
```

- [ ] **Step 2: Verify**

Navigate to Market Intelligence → Market Signals tab. All Market Pulse content shows. Skills the user has (Figma, Design Systems, User Research, Prototyping, A/B Testing) show "You have this ✓" green badge if they appear in PULSE_SKILLS.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: extract Market Pulse into MarketSignalsContent with user skill cross-referencing"
```

---

## Task 6: Autopilot 2.0 — dark command header

**Files:**
- Modify: `c:\careergo\careergo.html` — top section of `AutopilotProxy`

- [ ] **Step 1: Replace Autopilot header and stats**

Inside `function AutopilotProxy(`, find and replace the entire top section — from the outer `<div className="space-y-6 fade-up">` up to (but not including) the `{/* Settings */}` comment:

The existing section looks like:
```jsx
    <div className="space-y-6 fade-up">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 ...>Autopilot <Badge ...>BETA</Badge></h1>
          <p ...>Your AI job agent...</p>
        </div>
        <Btn ...>...</Btn>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <Card ...> {/* Settings card */}
```

Replace the header part (before the settings card grid) with:
```jsx
    <div className="space-y-6 fade-up">
      {/* Command Header */}
      <div className="rounded-3xl relative overflow-hidden" style={{background:'linear-gradient(135deg,#1A0146 0%,#0d0222 60%,#1a1060 100%)',padding:'32px 36px'}}>
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(91,46,255,0.18)'}}/>
        <div className="relative flex items-center justify-between gap-8 flex-wrap">
          {/* Left: title + status */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-extrabold text-white">Autopilot</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{background:'rgba(253,186,45,0.15)',color:'#FDBA2D',border:'1px solid rgba(253,186,45,0.3)'}}>AI JOB AGENT</span>
            </div>
            <p style={{fontSize:13,color:'rgba(255,255,255,0.55)',maxWidth:280}}>Set your rules once. Autopilot scans, scores, and applies — 24/7.</p>
            <button
              onClick={()=>setActive(a=>!a)}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
              style={active
                ?{background:'rgba(229,57,53,0.15)',color:'#ef4444',border:'1px solid rgba(229,57,53,0.3)'}
                :{background:'rgba(29,158,117,0.15)',color:'#1D9E75',border:'1px solid rgba(29,158,117,0.3)'}}>
              <Icon name={active?'pause-circle':'play-circle'} size={16}/>
              {active?'Pause autopilot':'Start autopilot'}
            </button>
          </div>
          {/* Center: radar */}
          <div className="relative flex items-center justify-center" style={{width:120,height:120}}>
            {active&&<>
              <div className="radar-ping" style={{top:'50%',left:'50%',marginTop:-5,marginLeft:-5,animationDelay:'0s'}}/>
              <div className="radar-ping" style={{top:'20%',left:'70%',animationDelay:'0.6s'}}/>
              <div className="radar-ping" style={{top:'70%',left:'20%',animationDelay:'1.2s'}}/>
            </>}
            <div className="rounded-full flex items-center justify-center" style={{width:80,height:80,background:'rgba(91,46,255,0.2)',border:'2px solid rgba(138,99,255,0.4)'}}>
              <div className="rounded-full flex items-center justify-center" style={{width:56,height:56,background:'rgba(91,46,255,0.35)',border:'2px solid rgba(138,99,255,0.5)'}}>
                <Icon name="radar" size={24} className="text-white"/>
              </div>
            </div>
            {active&&<>
              <div className="absolute inset-0 rounded-full border-2 border-brand-400/20" style={{animation:'liveDot 2s ease-in-out infinite'}}/>
            </>}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap" style={{color:active?'#1D9E75':'rgba(255,255,255,0.35)'}}>
              {active?'● SCANNING':'○ PAUSED'}
            </div>
          </div>
          {/* Right: 4 live stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {label:'Scanned',value:scanned,color:'#FDBA2D'},
              {label:'Applied',value:appliedCount,color:'#1D9E75'},
              {label:'Held',value:Math.max(0,scanned-appliedCount-2),color:'#EF9F27'},
              {label:'Success rate',value:`${scanned>0?Math.round(appliedCount/scanned*100):0}%`,color:'#8A63FF'},
            ].map(({label,value,color})=>(
              <div key={label} className="text-center">
                <div className="text-2xl font-extrabold" style={{color}}>{value}</div>
                <div style={{fontSize:10,color:'rgba(255,255,255,0.45)',fontWeight:600,letterSpacing:'0.04em',marginTop:2}}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
```

- [ ] **Step 2: Verify**

Autopilot shows dark gradient command header with title, radar visualization, and 4 live stats. Start/pause button toggles active state. When active, radar pings appear.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: Autopilot 2.0 command header with dark gradient, radar pings, and live stats"
```

---

## Task 7: Autopilot 2.0 — Preferences panel and Activity Feed

**Files:**
- Modify: `c:\careergo\careergo.html` — lower sections of `AutopilotProxy`

- [ ] **Step 1: Replace the Settings card**

Inside `AutopilotProxy`, find the Settings card (left card of the grid):
```jsx
        <Card className="p-6">
          <h3 className="font-bold text-slate-900 mb-5">Preferences</h3>
```

Replace the entire Settings Card (from `<Card className="p-6">` to its closing `</Card>`) with:
```jsx
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <Icon name="lock" size={15} className="text-slate-400"/>
            <h3 className="font-bold text-slate-900">Your Rules</h3>
          </div>
          <div className="space-y-5">
            {/* Pay floor */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                <span>Minimum salary</span>
                <span className="font-bold text-slate-900">RM {minPay/1000}k+</span>
              </div>
              <input type="range" min="60000" max="150000" step="5000" value={minPay}
                onChange={e=>setMinPay(+e.target.value)}
                className="w-full accent-brand-600"/>
              <div className="flex justify-between text-xs text-slate-300 mt-1"><span>RM 60k</span><span>RM 150k</span></div>
            </div>
            {/* Location */}
            <div>
              <div className="text-xs font-semibold text-slate-500 mb-2">Location preference</div>
              <select value={location} onChange={e=>setLocation(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 ring-brand-200 bg-white">
                <option>Remote or KL</option>
                <option>Remote only</option>
                <option>Hybrid · KL</option>
                <option>Anywhere in SEA</option>
              </select>
            </div>
            {/* Toggles */}
            {[
              {label:'No weekend shifts',val:noWeekend,set:setNoWeekend},
              {label:'Auto-send résumé on 90%+ fit',val:autoSend,set:setAutoSend},
              {label:'No contract roles',val:noContracts,set:setNoContracts},
            ].map(({label,val,set})=>(
              <div key={label} className="flex items-center justify-between">
                <span className="text-sm text-slate-600">{label}</span>
                <div onClick={()=>set(v=>!v)} className={`ap-toggle ${val?'on':''}`}>
                  <div className="ap-toggle-thumb"/>
                </div>
              </div>
            ))}
            {/* Saved confirmation */}
            <div className="flex items-center gap-2 text-xs font-semibold rounded-lg px-3 py-2" style={{background:'rgba(29,158,117,0.08)',color:'#1D9E75'}}>
              <Icon name="check-circle-2" size={13}/> Rules saved · updates take effect immediately
            </div>
          </div>
        </Card>
```

- [ ] **Step 2: Replace the Daily Update Inbox**

Find the `{/* Daily update inbox */}` section (full-width block below the 2-card grid) and replace it with:
```jsx
      {/* Agent Activity Log */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-slate-900">Agent Activity Log</h3>
          <span className="text-xs text-slate-400">{new Date().toLocaleDateString('en-MY',{weekday:'short',month:'short',day:'numeric'})}</span>
        </div>
        <div className="space-y-3">
          {INBOX_ITEMS.map((item,i)=>(
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{background:item.action==='applied'?'rgba(29,158,117,0.05)':item.action==='held'?'rgba(239,159,39,0.05)':'rgba(226,75,74,0.05)',border:`1px solid ${item.action==='applied'?'rgba(29,158,117,0.15)':item.action==='held'?'rgba(239,159,39,0.15)':'rgba(226,75,74,0.15)'}`}}>
              <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5" style={{background:item.action==='applied'?'rgba(29,158,117,0.12)':item.action==='held'?'rgba(239,159,39,0.12)':'rgba(226,75,74,0.12)'}}>
                <Icon name={item.action==='applied'?'check':'shield'} size={13} className={item.action==='applied'?'text-emerald-600':item.action==='held'?'text-amber-500':'text-red-400'}/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-sm text-slate-800">{item.title}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{background:item.match>=90?'rgba(29,158,117,0.1)':'rgba(91,46,255,0.1)',color:item.match>=90?'#1D9E75':'#5B2EFF'}}>{item.match}% match</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{background:item.action==='applied'?'rgba(29,158,117,0.1)':'rgba(239,159,39,0.1)',color:item.action==='applied'?'#1D9E75':'#EF9F27'}}>
                    {item.action==='applied'?'Applied':'Held'}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{item.note}</div>
              </div>
              <div className="shrink-0 text-xs text-slate-300 whitespace-nowrap">{item.time}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Today · {scanned} scanned · {appliedCount} applied · {Math.max(0,scanned-appliedCount-2)} held</span>
          <button className="font-semibold" style={{color:'#5B2EFF'}}>View full log →</button>
        </div>
      </Card>
```

- [ ] **Step 3: Verify**

Autopilot: preferences panel shows lock icon + rules header, pay shows RM, toggles use pill-style `.ap-toggle`. Activity log shows colour-coded cards (green/amber) with match badges.

- [ ] **Step 4: Commit**

```bash
git add careergo.html
git commit -m "feat: Autopilot 2.0 — redesign preferences panel and activity log"
```

---

## Task 8: Career Intelligence — header banner

**Files:**
- Modify: `c:\careergo\careergo.html` — top of `CareerProfile` return

- [ ] **Step 1: Replace the profile header**

Inside `function CareerProfile(`, find the existing header section:
```jsx
    <div className="space-y-6 fade-up">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Career Intelligence</h1>
          <p className="text-slate-500">Your AI-powered career profile — the foundation of everything in CareerGo.</p>
        </div>
        <div className="flex gap-3">
          <Btn variant="secondary" size="sm"><Icon name="linkedin" size={14}/> Import LinkedIn</Btn>
          <Btn size="sm"><Icon name="download" size={14}/> Download PDF</Btn>
        </div>
      </div>
```

Replace with:
```jsx
    <div className="space-y-6 fade-up">
      {/* Intelligence Banner */}
      <div className="rounded-3xl relative overflow-hidden" style={{background:'linear-gradient(135deg,#1A0146 0%,#0d0222 60%,#1a1060 100%)',padding:'28px 32px'}}>
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(91,46,255,0.18)'}}/>
        <div className="relative">
          <div className="text-xs font-bold mb-3 flex items-center gap-2" style={{color:'rgba(255,255,255,0.45)',letterSpacing:'0.08em'}}>
            <span>CAREER INTELLIGENCE REPORT</span>
            <span style={{background:'rgba(29,158,117,0.2)',color:'#1D9E75',padding:'1px 8px',borderRadius:20}}>LIVE</span>
          </div>
          <h1 style={{fontSize:22,fontWeight:800,color:'#fff',marginBottom:4}}>{USER.name}</h1>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:20}}>{USER.seniority} {USER.role} · {USER.location} · {USER.yoe} years experience</p>
          {/* Score chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {[
              {label:'Career Score',value:USER.careerScore,color:'#C4B8FF'},
              {label:'ATS Score',value:USER.atsScore,color:'#86efac'},
              {label:'Readiness',value:USER.readiness,color:'#fcd34d'},
              {label:'Market Value',value:`RM ${(USER.marketValue/1000).toFixed(0)}k`,color:'#7dd3fc'},
            ].map(({label,value,color})=>(
              <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)'}}>
                <span style={{fontSize:11,color:'rgba(255,255,255,0.5)',fontWeight:600}}>{label}</span>
                <span style={{fontSize:13,fontWeight:800,color}}>{value}</span>
              </div>
            ))}
          </div>
          {/* AI insight */}
          <div className="flex items-center gap-2 mb-5">
            <Icon name="sparkles" size={14} className="text-yellow-300 shrink-0"/>
            <span style={{fontSize:13,color:'#FDBA2D',fontWeight:600}}>Your profile is strong — one skill gap is holding you back from your next level.</span>
          </div>
          {/* Action buttons */}
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold" style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff'}}>
              <Icon name="linkedin" size={14}/> Import LinkedIn
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold" style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.2)',color:'#fff'}}>
              <Icon name="download" size={14}/> Download PDF
            </button>
          </div>
        </div>
      </div>
```

- [ ] **Step 2: Verify**

Career Profile shows dark gradient banner with: "CAREER INTELLIGENCE REPORT" label, user name, 4 score chips in a row, gold AI insight line, 2 ghost action buttons.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: add Career Intelligence banner header to profile module"
```

---

## Task 9: Career Intelligence — profile strength dimensions

**Files:**
- Modify: `c:\careergo\careergo.html` — score cards section of `CareerProfile`

- [ ] **Step 1: Replace the score cards grid**

Inside `CareerProfile`, find the existing scores grid:
```jsx
      {/* Scores */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {scores.map(s=>(
          <Card key={s.label} className="p-5 flex flex-col items-center">
            <ScoreRing score={s.score} size={80} color={s.color}/>
            <div className="text-sm font-semibold text-slate-700 mt-2">{s.label}</div>
            <div className="text-xs text-slate-400 text-center mt-1">{s.note}</div>
          </Card>
        ))}
      </div>
```

Replace with:
```jsx
      {/* Profile Strength */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h3 className="font-bold text-slate-900 mb-5">Profile Strength</h3>
            <div className="space-y-4">
              {[
                {label:'Work history completeness',value:88,note:'2 roles with strong descriptions · 1 missing quantified results',icon:'briefcase'},
                {label:'Skills breadth',value:Math.round(USER.skills.length/10*100),note:`${USER.skills.length} verified skills · 3 high-demand skills not yet listed`,icon:'layers'},
                {label:'ATS optimisation',value:USER.atsScore,note:`${Math.round((100-USER.atsScore)/10)} keywords missing vs. top-ranking profiles in your role`,icon:'scan'},
                {label:'Market alignment',value:76,note:'Matches 47 active job postings in your city and seniority tier',icon:'target'},
                {label:'Interview readiness',value:USER.readiness,note:'Based on 5 practice sessions · Strong on STAR, needs more specificity',icon:'mic'},
              ].map(({label,value,note,icon})=>(
                <div key={label}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:'#EEEDFE'}}>
                        <Icon name={icon} size={13} className="text-brand-600"/>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{label}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-500">{value}%</span>
                  </div>
                  <div className="profile-dim-bar">
                    <div className="profile-dim-fill" style={{width:`${value}%`,background:value>=80?'#1D9E75':value>=60?'#5B2EFF':'#EF9F27'}}/>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">{note}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        {/* Skill Gap Analysis */}
        <Card className="p-6">
          <h3 className="font-bold text-slate-900 mb-4">Skill Gap Analysis</h3>
          <div className="space-y-3">
            {gaps.map(g=>(
              <div key={g.skill} className="p-3 rounded-xl" style={{background:'#F8F7FF',border:'1px solid #EEEDFE'}}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-sm font-semibold text-slate-800">{g.skill}</span>
                  <Badge tone={g.impact==='High'?'violet':'amber'}>{g.impact}</Badge>
                </div>
                <div className="text-xs text-slate-400 mb-2">For: {g.target} · {g.time}</div>
                <button onClick={()=>setView('companion')} className="text-xs font-semibold" style={{color:'#5B2EFF'}}>
                  Start learning →
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="text-xs text-slate-400 mb-2">Vera&rsquo;s priority recommendation</div>
            <div className="text-sm font-medium text-slate-700">Fix cross-team ownership first — it unblocks both Staff IC and Design Manager paths.</div>
          </div>
        </Card>
      </div>
```

Note: `setView` needs to be in scope. Check how CareerProfile receives it — it may receive `go` prop instead. If `setView` is not available, use `go('app',{tab:'companion'})`.

Actually, looking at the module structure: `CareerProfile` is rendered inside `CandidateApp` and receives props `{lang, go, toast, setView}` — check if `setView` is passed as a prop or if only `go` is available. If only `go`, use `go('app',{tab:'companion'})` for the "Start learning →" button.

- [ ] **Step 2: Verify**

Profile page: 5 dimension bars with icons, colour-coded fills (teal/purple/amber). Skill Gap Analysis on the right with 3 gap cards, each with a "Start learning →" link.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: Career Intelligence profile strength dimensions and upgraded skill gap analysis"
```

---

## Task 10: Career Intelligence — upgrade AI Suggestions card

**Files:**
- Modify: `c:\careergo\careergo.html` — AI Suggestions in CareerProfile

- [ ] **Step 1: Upgrade the AI Suggestions card header**

Inside `CareerProfile`, find:
```jsx
              <Card className="p-6">
                <h3 className="font-bold text-slate-900 mb-4">AI Suggestions</h3>
```

Replace the header line only:
```jsx
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="sparkles" size={16} className="text-yellow-400"/>
                  <h3 className="font-bold text-slate-900">Vera&rsquo;s Recommendations</h3>
                  <span className="text-xs font-bold ml-auto px-2 py-0.5 rounded-full" style={{background:'rgba(91,46,255,0.08)',color:'#5B2EFF'}}>{suggestions.length} actions</span>
                </div>
```

- [ ] **Step 2: Verify**

Career Profile AI suggestions card now shows sparkles icon + "Vera's Recommendations" + action count pill.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: upgrade AI Suggestions to Vera's Recommendations with sparkles icon and count"
```

---

## Task 11: Final verification + push

- [ ] **Step 1: Full demo flow**

Open `careergo.html`. Walk through:
1. **Sidebar** — 6 items (no Market Pulse, just Market Intelligence). Onboarding tour step 3 targets Market Intelligence, step 4 targets Jobs.
2. **Market Intelligence** — My Value tab shows Fair Pay content with RM currency. Market Signals tab shows Market Pulse with "You have this ✓" badges for matching skills.
3. **Autopilot** — Dark command header with radar, 4 stats, start/pause button. Preferences show RM + pill toggles. Activity log colour-coded.
4. **Career Intelligence** — Dark banner header with score chips and gold AI insight. 5 profile strength dimension bars. Skill gap analysis with "Start learning →" links.

- [ ] **Step 2: Fix any regressions**

Common issues:
- `setView` not in scope in `CareerProfile` — use `go('app',{tab:'companion'})` instead
- `INBOX_ITEMS` field names (`action`, `match`, `note`, `time`) — verify these exist in the mock constant
- `FairPayContent` / `MarketSignalsContent` render correctly with no duplicate state from parent

- [ ] **Step 3: Final commit**

```bash
git add careergo.html
git commit -m "feat: Batch B complete — Market Intelligence Hub, Autopilot 2.0, Career Intelligence"
```

- [ ] **Step 4: Push to GitHub**

```bash
git push origin candidate_dashboard
```

---

## Self-review notes

| Spec item | Task |
|-----------|------|
| Merge Fair Pay + Market Pulse nav | Task 2 |
| Market Intelligence tab shell | Task 3 |
| FairPayContent with RM currency | Task 4 |
| MarketSignalsContent with "You have this ✓" | Task 5 |
| Autopilot dark command header + radar | Task 6 |
| Autopilot preferences + activity log | Task 7 |
| Career Intelligence banner | Task 8 |
| Profile strength dimensions | Task 9 |
| Vera's Recommendations card | Task 10 |
