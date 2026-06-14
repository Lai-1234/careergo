# CareerGo Batch A — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Onboarding Tutorial (Change 1), Dashboard Redesign (Change 2), and Career Companion Redesign (Change 3) in `careergo.html`.

**Architecture:** All changes are edits to the single file `c:\careergo\careergo.html`. New React components are inserted into the existing `<script type="text/babel">` block in definition order (new components before the first component that uses them). CSS additions go into the existing `<style>` block. No new files, no new CDN dependencies.

**Tech Stack:** React 18 (CDN), Babel Standalone (in-browser JSX), Tailwind CSS (CDN), Lucide icons via `window.lucide` (always use `<Icon name="..."/>` wrapper — never Lucide directly). Single HTML file, open in browser to test.

**Branch:** `candidate_dashboard`

**Verification method:** Open `careergo.html` in browser after each task. No test runner — verify visually per task checklist.

---

## File map

| Area | Location anchor | What changes |
|------|----------------|-------------|
| CSS `<style>` block | Near top of file | Add spotlight, tour-tooltip, career-health-ring, fade-up keyframes |
| `USER` constant | Line ~688 | Add `weeklyDeltas`, `newMatches`, `profileComplete`, `currentLevel`, `nextMilestone` |
| `CHECKLIST` constant | Line ~735 | Add `paths` array to each item |
| `CANDIDATE_NAV` constant | Line ~2488 | Add `tourId` field to each entry |
| Sidebar nav buttons in `CandidateApp` | Line ~2526–2533 | Add `data-tour` attributes |
| Before `CandidateApp` | Insert after line ~2497 | New `OnboardingTour` component |
| `CandidateApp` | Line ~2498 | Add `tourActive` state, render `<OnboardingTour/>` |
| Before `CandidateDashboard` | Insert ~2330 | New `CareerHealthRing` + `DashHero` components |
| `CandidateDashboard` | Line ~2334–2483 | Replace hero, upgrade metric cards, stat cards, Career Futures, Vera widget |
| `CareerCompanion` | Line ~2924–3191 | Add Vera header, personalise Planning tab, Skills tab, Interview Coach tab |

---

## Task 1: CSS additions

**Files:**
- Modify: `c:\careergo\careergo.html` — `<style>` block

- [ ] **Step 1: Add new CSS classes to the `<style>` block**

Find the closing `</style>` tag and insert before it:

```css
/* ── Onboarding Tour ── */
.tour-backdrop{position:fixed;inset:0;z-index:9000;pointer-events:all}
.tour-spotlight{position:fixed;z-index:9001;pointer-events:none;border-radius:14px;transition:all 300ms cubic-bezier(.4,0,.2,1)}
.tour-tooltip{position:fixed;z-index:9002;width:320px;background:#fff;border-radius:18px;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,.38);transition:opacity 200ms ease,transform 200ms ease}
.tour-tooltip.entering{opacity:0;transform:translateY(8px)}
.tour-tooltip.visible{opacity:1;transform:none}
.tour-dot{width:8px;height:8px;border-radius:50%;display:inline-block;margin:0 3px;transition:background 200ms}
/* ── Career Health Ring ── */
@keyframes ringDraw{from{stroke-dashoffset:var(--ring-full)}to{stroke-dashoffset:var(--ring-target)}}
.health-arc{animation:ringDraw 1.2s cubic-bezier(.4,0,.2,1) both}
/* ── Metric card tooltip ── */
.metric-tip{position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:#1a0a3d;color:#fff;font-size:11px;line-height:1.5;padding:8px 12px;border-radius:10px;width:200px;text-align:center;white-space:normal;opacity:0;pointer-events:none;transition:opacity 150ms;z-index:20}
.metric-tip-anchor{position:relative;display:inline-flex;align-items:center}
.metric-tip-anchor:hover .metric-tip{opacity:1}
/* ── Streak progress bar ── */
@keyframes streakGlow{0%,100%{box-shadow:0 0 4px rgba(253,186,45,.4)}50%{box-shadow:0 0 10px rgba(253,186,45,.7)}}
.streak-bar-fill{animation:streakGlow 2s ease-in-out infinite}
/* ── Career Futures path cards ── */
.future-card{border-radius:14px;border-width:1px;border-style:solid;padding:20px;border-left-width:4px;transition:transform 150ms,box-shadow 150ms}
.future-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08)}
/* ── Quick reply chips ── */
.quick-chip{display:inline-flex;align-items:center;font-size:12px;font-weight:600;padding:6px 14px;border-radius:20px;border:1px solid #C4B8FF;background:#EEEDFE;color:#534AB7;cursor:pointer;transition:background 150ms,border-color 150ms;white-space:nowrap}
.quick-chip:hover{background:#DDD9FF;border-color:#8A63FF}
/* ── Interview setup panel ── */
.interview-type-chip{padding:6px 14px;border-radius:10px;font-size:13px;font-weight:600;border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;cursor:pointer;transition:all 150ms}
.interview-type-chip.active{background:#5B2EFF;color:#fff;border-color:#5B2EFF}
/* ── Score dimension bar ── */
.dim-bar-track{height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden}
.dim-bar-fill{height:100%;border-radius:3px;transition:width 800ms cubic-bezier(.4,0,.2,1)}
```

- [ ] **Step 2: Verify in browser**

Open `careergo.html`. No visual change expected yet — confirm no console errors.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "style: add onboarding tour, health ring, metric tooltip, and companion CSS"
```

---

## Task 2: Extend USER mock data and CHECKLIST

**Files:**
- Modify: `c:\careergo\careergo.html` — `USER` constant and `CHECKLIST` constant

- [ ] **Step 1: Replace the USER constant**

Find:
```js
const USER = {
  name:'Aisha Rahman', firstName:'Aisha',
  role:'Product Designer', seniority:'Mid-level', yoe:5,
  location:'Kuala Lumpur, MY',
  email:'aisha.rahman@email.com',
  marketValue:92000, marketMin:55000, marketMax:140000,
  careerScore:78, atsScore:84, readiness:71,
  skills:['UI Design','Figma','Design Systems','User Research','Prototyping','A/B Testing'],
  xp:2340, level:7, streak:12,
};
```

Replace with:
```js
const USER = {
  name:'Aisha Rahman', firstName:'Aisha',
  role:'Product Designer', seniority:'Mid-level', yoe:5,
  location:'Kuala Lumpur, MY', industry:'Fintech',
  email:'aisha.rahman@email.com',
  marketValue:92000, marketMin:55000, marketMax:140000,
  careerScore:78, atsScore:84, readiness:71,
  skills:['UI Design','Figma','Design Systems','User Research','Prototyping','A/B Testing'],
  xp:2340, level:7, streak:12,
  weeklyDeltas:{careerScore:3, atsScore:0, readiness:5, marketValue:2},
  newMatches:3,
  profileComplete:true,
  currentLevel:'Senior Product Designer',
  nextMilestone:'Staff Product Designer',
  nextMilestoneEta:'~14 months',
};
```

- [ ] **Step 2: Extend CHECKLIST items with `paths` field**

Find the `CHECKLIST` constant and add a `paths` array to each item. Replace:
```js
const CHECKLIST = [
  {id:1,skill:'Team leadership & 1:1 coaching',for:'Design Manager',done:false},
  {id:2,skill:'Stakeholder storytelling',for:'UX Lead',done:true},
```

With:
```js
const CHECKLIST = [
  {id:1,skill:'Team leadership & 1:1 coaching',for:'Design Manager',done:false,paths:['design-manager'],why:'Needed for Design Manager · High demand (+38%) · Learn in 4–6 mo'},
  {id:2,skill:'Stakeholder storytelling',for:'UX Lead',done:true,paths:['design-manager','staff-ic'],why:'Core for any lead role · Builds cross-team credibility'},
```

For the remaining CHECKLIST items, add appropriate `paths` and `why` fields. Read the full CHECKLIST block and add to every item:
- Items `for:'Design Manager'` → `paths:['design-manager']`
- Items `for:'Staff IC'` or craft-related → `paths:['staff-ic']`
- Items `for:'All paths'` or generic → `paths:['design-manager','staff-ic','pm']`
- `why`: one-line explanation of relevance + demand signal

- [ ] **Step 3: Verify**

Open `careergo.html`, log `USER.weeklyDeltas` in browser console (temporarily add `console.log(USER)` just after the const, remove after check). Confirm new fields present.

- [ ] **Step 4: Commit**

```bash
git add careergo.html
git commit -m "data: extend USER with weeklyDeltas/newMatches/profileComplete and CHECKLIST with paths"
```

---

## Task 3: Add data-tour attributes to sidebar

**Files:**
- Modify: `c:\careergo\careergo.html` — `CANDIDATE_NAV` and sidebar buttons in `CandidateApp`

- [ ] **Step 1: Add tourStep to CANDIDATE_NAV**

Find:
```js
const CANDIDATE_NAV=[
  {id:'dashboard',icon:'layout-dashboard',tk:'appDashboard'},
  {id:'profile',icon:'brain-circuit',tk:'appProfile'},
  {id:'jobs',icon:'briefcase',tk:'appJobs'},
  {id:'companion',icon:'bot',tk:'appCompanion'},
  {id:'pay',icon:'gauge',tk:'appPay'},
  {id:'pulse',icon:'activity',tk:'appPulse'},
  {id:'auto',icon:'radar',tk:'appAuto'},
];
```

Replace with:
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

- [ ] **Step 2: Add data-tour attributes to sidebar nav buttons**

Find the nav button render inside `CandidateApp`:
```jsx
{CANDIDATE_NAV.map(n=>(
  <button key={n.id} onClick={()=>{ setView(n.id); setMobileOpen(false); }}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${view===n.id?'bg-white/15 text-white shadow-inner':'text-brand-200 hover:bg-white/8 hover:text-white'}`}>
    <Icon name={n.icon} size={18}/>
    <span>{t(n.tk)}</span>
    {view===n.id&&<span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400"/>}
  </button>
))}
```

Replace with:
```jsx
{CANDIDATE_NAV.map(n=>(
  <button key={n.id}
    {...(n.tourStep?{'data-tour':`step-${n.tourStep}`}:{})}
    onClick={()=>{ setView(n.id); setMobileOpen(false); }}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${view===n.id?'bg-white/15 text-white shadow-inner':'text-brand-200 hover:bg-white/8 hover:text-white'}`}
    style={{position:'relative'}}>
    <Icon name={n.icon} size={18}/>
    <span>{t(n.tk)}</span>
    {view===n.id&&<span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400"/>}
  </button>
))}
```

- [ ] **Step 3: Verify**

Open browser → Inspect the sidebar → Confirm `data-tour="step-1"` on Career Profile button, `data-tour="step-2"` on Career Companion, etc.

- [ ] **Step 4: Commit**

```bash
git add careergo.html
git commit -m "feat: add data-tour attributes to sidebar nav for onboarding spotlight"
```

---

## Task 4: Build OnboardingTour component

**Files:**
- Modify: `c:\careergo\careergo.html` — insert new component before `CandidateApp` function

- [ ] **Step 1: Insert OnboardingTour component**

Find the line `function CandidateApp({ lang, toggleLang, go, toast }){` and insert the following **before** it:

```jsx
/* ── Onboarding Tour ── */
const TOUR_STEPS=[
  {target:'step-1',title:'Start here — build your Career Profile',body:'Upload your resume or fill in your details. CareerGo analyses your skills, ATS readiness, and market positioning to build your Career Intelligence Report — the foundation for everything else.',cta:'Got it →'},
  {target:'step-2',title:'Meet Coach Vera, your AI career mentor',body:"Vera isn't a chatbot. She knows your profile, tracks your goals, and gives you personalised weekly missions. Ask her anything — from salary negotiation to career pivots.",cta:'Got it →'},
  {target:'step-3',title:'Know your true market value',body:'See your real salary range based on your verified skills, not job post guesses. Add skills to the Skill Payoff Calculator to instantly see how your earning potential changes.',cta:'Got it →'},
  {target:'step-4',title:'Track where the market is moving',body:'Like a Bloomberg terminal for your career. See which skills are surging, which industries are hiring, and where opportunities are shifting — updated in real time.',cta:'Got it →'},
  {target:'step-5',title:'Let CareerGo hunt for you',body:'Set your rules once — minimum salary, location, work arrangement. Autopilot scans opportunities continuously and applies on your behalf when a 90%+ match is found. Full daily log, always transparent.',cta:'Got it →'},
  {target:'step-6',title:"You're all set. Your Career OS is live.",body:'Your dashboard shows your career score, upcoming missions, live matches, and simulated futures — all in one place. CareerGo works in the background so you can focus on growing.',cta:'Start exploring →'},
];

function OnboardingTour({ onDone }){
  const [step,setStep]=useState(0);
  const [rect,setRect]=useState(null);
  const [entering,setEntering]=useState(true);
  const PAD=10;

  useEffect(()=>{
    const target=document.querySelector(`[data-tour="${TOUR_STEPS[step].target}"]`);
    if(target){
      const r=target.getBoundingClientRect();
      setRect(r);
      target.style.position='relative';
      target.style.zIndex='9002';
    }
    setEntering(true);
    const t=setTimeout(()=>setEntering(false),20);
    return ()=>{
      clearTimeout(t);
      if(target) target.style.zIndex='';
    };
  },[step]);

  const advance=()=>{
    if(step<TOUR_STEPS.length-1){ setStep(s=>s+1); }
    else { localStorage.setItem('cg_tour_done','1'); onDone(); }
  };
  const skip=()=>{ localStorage.setItem('cg_tour_done','1'); onDone(); };

  if(!rect) return null;
  const s=TOUR_STEPS[step];
  const isLast=step===TOUR_STEPS.length-1;
  // Tooltip placement: steps 1-5 are sidebar (left) → tooltip to right; step 6 is center → tooltip above
  const isSidebar=step<5;
  const tooltipStyle=isSidebar
    ?{top:rect.top-PAD,left:rect.right+PAD+16}
    :{bottom:window.innerHeight-rect.top+16,left:Math.max(16,rect.left+rect.width/2-160)};

  return (
    <div>
      {/* Backdrop */}
      <div className="tour-backdrop" style={{background:'rgba(0,0,0,0.72)'}} onClick={skip}/>
      {/* Spotlight ring */}
      <div className="tour-spotlight" style={{
        top:rect.top-PAD, left:rect.left-PAD,
        width:rect.width+PAD*2, height:rect.height+PAD*2,
        boxShadow:`0 0 0 4px #FDBA2D, 0 0 0 9999px rgba(0,0,0,0.72)`,
      }}/>
      {/* Tooltip */}
      <div className={`tour-tooltip ${entering?'entering':'visible'}`} style={tooltipStyle}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-1">
            {TOUR_STEPS.map((_,i)=>(
              <span key={i} className="tour-dot" style={{background:i===step?'#5B2EFF':'rgba(0,0,0,0.18)'}}/>
            ))}
          </div>
          <button onClick={skip} style={{fontSize:12,color:'#9CA3AF',background:'none',border:'none',cursor:'pointer'}}>Skip tour</button>
        </div>
        <h3 style={{fontSize:17,fontWeight:700,color:'#1a0a3d',marginBottom:10}}>{s.title}</h3>
        <p style={{fontSize:14,color:'#4B5563',lineHeight:1.65,marginBottom:20}}>{s.body}</p>
        <button onClick={advance} className="cta-gold inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold w-full justify-center" style={{borderRadius:12}}>
          {s.cta}
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the component is syntactically correct**

Open `careergo.html` in browser. No tour will appear yet (not wired in). Confirm no Babel/console errors.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: add OnboardingTour component with 6-step spotlight overlay"
```

---

## Task 5: Wire OnboardingTour into CandidateApp

**Files:**
- Modify: `c:\careergo\careergo.html` — `CandidateApp` function

- [ ] **Step 1: Add tourActive state and mount check**

Find the top of `CandidateApp`:
```jsx
function CandidateApp({ lang, toggleLang, go, toast }){
  const t=useT(lang);
  const [view,setView]=useState('dashboard');
  const [mobileOpen,setMobileOpen]=useState(false);
```

Replace with:
```jsx
function CandidateApp({ lang, toggleLang, go, toast }){
  const t=useT(lang);
  const [view,setView]=useState('dashboard');
  const [mobileOpen,setMobileOpen]=useState(false);
  const [tourActive,setTourActive]=useState(false);
  useEffect(()=>{
    if(!localStorage.getItem('cg_tour_done')) setTourActive(true);
  },[]);
```

- [ ] **Step 2: Render OnboardingTour inside CandidateApp**

Find the return statement in `CandidateApp`. It starts with:
```jsx
  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
```

Add `{tourActive&&<OnboardingTour onDone={()=>setTourActive(false)}/>}` as the **first child** of that div:
```jsx
  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
      {tourActive&&<OnboardingTour onDone={()=>setTourActive(false)}/>}
```

- [ ] **Step 3: Verify tour fires on first load**

1. Open `careergo.html` → log in as candidate → the onboarding tour overlay should appear
2. Spotlight should highlight the "Career Profile" sidebar item (step 1)
3. Tooltip should appear to the right of the spotlight with correct title and body
4. Click "Got it →" → advances to step 2 (Career Companion highlighted)
5. Continue through all 6 steps → on "Start exploring →", tour dismisses
6. Refresh page → tour should NOT appear again (localStorage flag set)
7. To re-test: open DevTools → Application → Local Storage → delete `cg_tour_done` key → refresh

- [ ] **Step 4: Commit**

```bash
git add careergo.html
git commit -m "feat: wire OnboardingTour into CandidateApp with localStorage persistence"
```

---

## Task 6: Build CareerHealthRing and DashHero components

**Files:**
- Modify: `c:\careergo\careergo.html` — insert before `CandidateDashboard`

- [ ] **Step 1: Insert CareerHealthRing component**

Find `function CandidateDashboard(` and insert the following **before** it:

```jsx
function CareerHealthRing({ careerScore, atsScore, readiness }){
  const score=Math.round((careerScore+atsScore+readiness)/3);
  const SIZE=120; const STROKE=10; const R=(SIZE-STROKE*2)/2;
  const CIRC=2*Math.PI*R;
  const offset=CIRC*(1-score/100);
  return (
    <div className="flex flex-col items-center">
      <svg width={SIZE} height={SIZE} style={{'--ring-full':CIRC,'--ring-target':offset}}>
        {/* Track */}
        <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={STROKE}/>
        {/* Arc */}
        <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none"
          stroke="#FDBA2D" strokeWidth={STROKE}
          strokeDasharray={CIRC} strokeDashoffset={CIRC}
          strokeLinecap="round"
          transform={`rotate(-90 ${SIZE/2} ${SIZE/2})`}
          className="health-arc"
          style={{'--ring-full':CIRC,'--ring-target':offset,animationFillMode:'forwards'}}/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fill="white" fontSize="26" fontWeight="800">{score}</text>
      </svg>
      <div style={{color:'rgba(255,255,255,0.6)',fontSize:11,marginTop:4,fontWeight:600,letterSpacing:'0.05em'}}>CAREER HEALTH</div>
    </div>
  );
}

function DashHero({ setView }){
  const hasActions=!USER.profileComplete||USER.newMatches>0;
  return (
    <div className="rounded-3xl p-7 relative overflow-hidden" style={{background:'linear-gradient(135deg,#1A0146 0%,#0d0222 55%,#1a1060 100%)'}}>
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(91,46,255,0.2)'}}/>
      <div className="absolute right-8 bottom-0 w-40 h-40 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(138,99,255,0.15)'}}/>
      <div className="relative flex items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" style={{animation:'liveDot 2s ease-in-out infinite'}}/>
            <span style={{fontSize:12,color:'rgba(255,255,255,0.5)',fontWeight:600}}>Career OS · Active</span>
          </div>
          <h1 style={{fontSize:26,fontWeight:800,color:'#fff',marginBottom:6}}>Good morning, {USER.firstName} 👋</h1>
          <p style={{fontSize:14,color:'rgba(255,255,255,0.7)',marginBottom:4,maxWidth:480}}>
            Your ATS score is strong — you&rsquo;re in the top 18% for Product Designers in KL.
          </p>
          <p style={{fontSize:14,color:'rgba(255,255,255,0.55)',maxWidth:480}}>
            One skill gap stands between you and a RM 145k role.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {!USER.profileComplete&&(
              <button onClick={()=>setView('profile')} className="cta-gold inline-flex items-center gap-2 px-4 py-2 text-sm font-bold" style={{borderRadius:10}}>
                <Icon name="user-check" size={14}/> Complete your profile
              </button>
            )}
            {USER.newMatches>0&&(
              <button onClick={()=>setView('jobs')} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white" style={{background:'rgba(91,46,255,0.7)',border:'1px solid rgba(138,99,255,0.5)',borderRadius:10}}>
                <Icon name="target" size={14}/> View {USER.newMatches} new matches
              </button>
            )}
            <button onClick={()=>setView('companion')} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white" style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.18)',borderRadius:10}}>
              <Icon name="bot" size={14}/> Ask Coach Vera
            </button>
          </div>
        </div>
        <div className="shrink-0 hidden sm:block">
          <CareerHealthRing careerScore={USER.careerScore} atsScore={USER.atsScore} readiness={USER.readiness}/>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

Open `careergo.html` → no visual change yet (not wired into dashboard). Confirm no Babel errors in console.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: add CareerHealthRing SVG and DashHero components"
```

---

## Task 7: Replace dashboard hero with DashHero

**Files:**
- Modify: `c:\careergo\careergo.html` — `CandidateDashboard`, hero section

- [ ] **Step 1: Replace the hero greeting block**

In `CandidateDashboard`, find and replace the entire hero `div` block:
```jsx
      {/* Hero greeting */}
      <div className="rounded-3xl bg-gradient-to-br from-brand-950 via-brand-900 to-[#1e1560] p-7 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-brand-500/15 rounded-full blur-3xl"/>
        <div className="absolute right-12 bottom-0 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl"/>
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>
            <span className="text-xs text-brand-300 font-medium">Career OS · Active</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Good morning, {USER.firstName}.</h1>
          <p className="text-brand-200 max-w-lg">You're being noticed — <span className="text-gold-400 font-semibold">3 new matches</span> this week and your market value is up <span className="text-emerald-400 font-semibold">+4%</span>.</p>
          <div className="flex flex-wrap gap-3 mt-5">
            <Btn size="sm" onClick={()=>setView('companion')} className="bg-white/15 border border-white/25 text-white hover:bg-white/25">
              <Icon name="bot" size={15}/> Ask Coach Vera
            </Btn>
            <Btn size="sm" onClick={()=>setView('jobs')} className="bg-white/15 border border-white/25 text-white hover:bg-white/25">
              <Icon name="target" size={15}/> View matches
            </Btn>
            <Btn size="sm" onClick={()=>setView('auto')} className="bg-white/15 border border-white/25 text-white hover:bg-white/25">
              <Icon name="radar" size={15}/> Autopilot status
            </Btn>
          </div>
        </div>
      </div>
```

With:
```jsx
      {/* Hero */}
      <DashHero setView={setView}/>
```

- [ ] **Step 2: Verify**

Open `careergo.html` → log in → dashboard shows the new gradient hero with greeting, 2 status lines, contextual buttons, and the gold career health ring on the right. Ring animates on load.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: replace dashboard hero with DashHero + CareerHealthRing"
```

---

## Task 8: Upgrade metric cards row

**Files:**
- Modify: `c:\careergo\careergo.html` — scores row in `CandidateDashboard`

- [ ] **Step 1: Replace the scores row**

Find and replace the entire `{/* Scores row */}` block:
```jsx
      {/* Scores row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 lg:col-span-1 flex flex-col items-center">
          <ScoreRing score={USER.careerScore} size={80} color="#7c3aed"/>
          <div className="text-sm font-semibold text-slate-700 mt-2">Career Score</div>
          <Badge tone="brand" className="mt-1">+3 this week</Badge>
        </Card>
        <Card className="p-5 lg:col-span-1 flex flex-col items-center">
          <ScoreRing score={USER.atsScore} size={80} color="#22c55e"/>
          <div className="text-sm font-semibold text-slate-700 mt-2">ATS Score</div>
          <Badge tone="green">Well optimised</Badge>
        </Card>
        <Card className="p-5 lg:col-span-1 flex flex-col items-center">
          <ScoreRing score={USER.readiness} size={80} color="#f59e0b"/>
          <div className="text-sm font-semibold text-slate-700 mt-2">Readiness</div>
          <Badge tone="amber">2 gaps left</Badge>
        </Card>
        <Card className="p-5 lg:col-span-1 flex flex-col items-center justify-center gap-1">
          <div className="text-3xl font-extrabold text-brand-950">${(USER.marketValue/1000).toFixed(0)}k</div>
          <div className="text-sm font-semibold text-slate-700">Market Value</div>
          <div className="text-xs text-emerald-600 font-medium flex items-center gap-1"><Icon name="trending-up" size={12}/> +4% vs last month</div>
          <button onClick={()=>setView('pay')} className="text-xs text-brand-600 hover:text-brand-900 font-semibold mt-1">See breakdown →</button>
        </Card>
      </div>
```

With:
```jsx
      {/* Scores row */}
      <div className="rounded-2xl p-1" style={{background:'#F8F7FF'}}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {[
            {label:'Career Score',score:USER.careerScore,color:'#7c3aed',delta:USER.weeklyDeltas.careerScore,tip:'Overall measure of your career readiness, profile strength, and market positioning.'},
            {label:'ATS Score',score:USER.atsScore,color:'#22c55e',delta:USER.weeklyDeltas.atsScore,tip:'How likely your resume is to pass automated screening filters used by most employers.'},
            {label:'Readiness',score:USER.readiness,color:'#f59e0b',delta:USER.weeklyDeltas.readiness,tip:'How prepared you are for interviews and applications based on your practice history.'},
          ].map(({label,score,color,delta,tip})=>(
            <div key={label} className="bg-white rounded-xl p-5 flex flex-col items-center relative">
              <div className="metric-tip-anchor mb-1" style={{position:'absolute',top:10,right:10}}>
                <span style={{fontSize:13,color:'#94a3b8',cursor:'default'}}>ⓘ</span>
                <div className="metric-tip">{tip}</div>
              </div>
              <ScoreRing score={score} size={80} color={color}/>
              <div className="text-sm font-semibold text-slate-700 mt-2">{label}</div>
              {delta!==0&&(
                <span className="mt-1 text-xs font-bold px-2 py-0.5 rounded-full" style={{background:'rgba(29,158,117,0.1)',color:'#1D9E75'}}>
                  {delta>0?'+':''}{delta} this week
                </span>
              )}
            </div>
          ))}
          <div className="bg-white rounded-xl p-5 flex flex-col items-center justify-center gap-1 relative">
            <div className="metric-tip-anchor" style={{position:'absolute',top:10,right:10}}>
              <span style={{fontSize:13,color:'#94a3b8',cursor:'default'}}>ⓘ</span>
              <div className="metric-tip">Your estimated salary range based on your verified skills and current market demand.</div>
            </div>
            <div className="text-3xl font-extrabold text-brand-950">RM {(USER.marketValue/1000).toFixed(0)}k</div>
            <div className="text-sm font-semibold text-slate-700">Market Value</div>
            <div className="text-xs font-medium flex items-center gap-1" style={{color:'#1D9E75'}}>
              <Icon name="trending-up" size={12}/> +{USER.weeklyDeltas.marketValue}% this week
            </div>
            <button onClick={()=>setView('pay')} className="text-xs font-semibold mt-1" style={{color:'#5B2EFF'}}>See breakdown →</button>
          </div>
        </div>
      </div>
```

- [ ] **Step 2: Verify**

Dashboard scores row shows 4 cards on a light lavender shared background. Each card has a `ⓘ` icon top-right that reveals a tooltip on hover. Career Score and Readiness cards show `+3 this week` and `+5 this week` green pills. ATS Score card shows nothing (delta = 0).

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: upgrade dashboard metric cards with delta badges and hover tooltips"
```

---

## Task 9: Upgrade activity/stat cards

**Files:**
- Modify: `c:\careergo\careergo.html` — stat cards in `CandidateDashboard`

- [ ] **Step 1: Replace the stat cards block**

Find:
```jsx
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="send" label="Applications" value="9" sub="4 in conversation" tone="brand" onClick={()=>setView('jobs')}/>
        <StatCard icon="bookmark" label="Saved jobs" value="12" sub="3 closing this week" tone="amber" onClick={()=>setView('jobs')}/>
        <StatCard icon="calendar-check" label="Interviews" value="2" sub="Next: Mon 10am" tone="green" onClick={()=>setView('jobs')}/>
        <StatCard icon="flame" label="Streak" value={`${USER.streak} days`} sub="Keep it going!" tone="blue" onClick={()=>setView('companion')}/>
      </div>
```

Replace with:
```jsx
      {/* Activity cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div onClick={()=>setView('jobs')} className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:'#EEEDFE',color:'#5B2EFF'}}><Icon name="send" size={16}/></div>
            <span className="text-xs font-semibold text-slate-500">Applications</span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">9</div>
          <div className="text-xs text-slate-400 mt-1">4 in conversation</div>
        </div>
        <div onClick={()=>setView('jobs')} className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:'#FAEEDA',color:'#EF9F27'}}><Icon name="bookmark" size={16}/></div>
            <span className="text-xs font-semibold text-slate-500">Saved Jobs</span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">12</div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{background:'rgba(239,159,39,0.12)',color:'#EF9F27'}}>3 closing this week</span>
          </div>
        </div>
        <div onClick={()=>setView('jobs')} className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:'#E1F5EE',color:'#1D9E75'}}><Icon name="calendar-check" size={16}/></div>
            <span className="text-xs font-semibold text-slate-500">Interviews</span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">2</div>
          <div className="flex items-center gap-1 mt-1" style={{color:'#1D9E75',fontSize:11,fontWeight:600}}>
            <Icon name="clock" size={11}/> Next: Mon 10am
          </div>
        </div>
        <div onClick={()=>setView('companion')} className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:'rgba(253,186,45,0.15)',color:'#FDBA2D'}}><Icon name="flame" size={16}/></div>
            <span className="text-xs font-semibold text-slate-500">Streak</span>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">{USER.streak} <span className="text-base font-semibold text-slate-400">days</span></div>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-slate-400 mb-1"><span>{USER.streak}/30 day goal</span></div>
            <div className="h-1.5 rounded-full" style={{background:'rgba(253,186,45,0.15)'}}>
              <div className="h-1.5 rounded-full streak-bar-fill" style={{width:`${(USER.streak/30)*100}%`,background:'#FDBA2D'}}/>
            </div>
          </div>
        </div>
      </div>
```

- [ ] **Step 2: Verify**

Activity cards: all 4 are clickable (hover shows shadow lift). Saved Jobs card shows amber `3 closing this week` pill. Interviews card shows green `Next: Mon 10am`. Streak card shows gold progress bar at 40% (12/30).

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: upgrade dashboard activity cards with urgency signals and streak progress bar"
```

---

## Task 10: Upgrade Career Futures section

**Files:**
- Modify: `c:\careergo\careergo.html` — Career Futures + Vera widget section in `CandidateDashboard`

- [ ] **Step 1: Replace the Career Futures + AI Summary grid**

Find and replace the entire `{/* Career Futures + AI Summary */}` block (the `<div className="grid lg:grid-cols-3 gap-6">` that contains both the Career Futures card and Coach Vera card):

```jsx
      {/* Career Futures */}
      <div className="bg-white rounded-2xl p-6" data-tour="step-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">Your Career Futures</h2>
            <p className="text-sm text-slate-500 mt-0.5">Three realistic paths from your current profile — with honest trade-offs.</p>
          </div>
          <button onClick={()=>setView('companion')} className="text-xs font-semibold flex items-center gap-1 shrink-0 ml-4" style={{color:'#5B2EFF'}}>
            Run full simulation <Icon name="arrow-right" size={13}/>
          </button>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {CAREER_PATHS[USER.role].map((p,i)=>{
            const borderColors={Low:'#1D9E75',Med:'#EF9F27',Higher:'#5B2EFF',High:'#5B2EFF'};
            const bgColors={Low:'#F0FBF7',Med:'#FFFBF0',Higher:'#F4F0FF',High:'#F4F0FF'};
            const barColors={Low:'#1D9E75',Med:'#EF9F27',Higher:'#5B2EFF',High:'#5B2EFF'};
            return (
              <div key={i} className="future-card" style={{background:bgColors[p.risk],borderColor:'#e5e7eb',borderLeftColor:borderColors[p.risk]}}>
                <div className="flex items-center justify-between mb-3">
                  <Badge tone={p.risk==='Low'?'green':p.risk==='Med'?'amber':'violet'}>{p.risk} risk</Badge>
                  <span className="text-xs text-slate-400">{p.years}</span>
                </div>
                <div className="font-bold text-slate-900 text-sm mb-0.5">{p.path}</div>
                <div className="text-xs mb-3" style={{color:borderColors[p.risk]}}>→ {p.role}</div>
                <div className="text-xl font-extrabold text-slate-900 mb-3">{p.range}</div>
                <div className="mb-1">
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Probability</span><span className="font-bold">{p.prob}%</span></div>
                  <div className="h-1.5 rounded-full" style={{background:'rgba(0,0,0,0.06)'}}>
                    <div className="h-1.5 rounded-full" style={{width:`${p.prob}%`,background:barColors[p.risk]}}/>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 italic">{p.trade}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coach Vera widget */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{background:'linear-gradient(135deg,#5B2EFF,#8A63FF)'}}>
              <Icon name="sparkles" size={18}/>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white" style={{background:'#1D9E75',animation:'liveDot 2s ease-in-out infinite'}}/>
          </div>
          <div>
            <div className="font-bold text-slate-900">Coach Vera</div>
            <div className="text-xs font-semibold" style={{color:'#1D9E75'}}>Online · 24/7</div>
          </div>
        </div>
        <div className="rounded-xl p-4 mb-4 text-sm leading-relaxed" style={{background:'#F4F0FF',color:'#374151'}}>
          Your ATS score is {USER.atsScore} — adding quantified results to 2 experience bullets would push you to 90+, putting you in the top 10% for your role.
        </div>
        <div className="mb-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Next mission</div>
          {MISSIONS.filter(m=>!m.done).slice(0,1).map(m=>(
            <div key={m.id} className="flex items-center gap-2 p-3 rounded-xl" style={{background:'#F8F7FF',border:'1px solid #EEEDFE'}}>
              <Icon name="circle" size={15} className="text-slate-300"/>
              <span className="text-xs text-slate-700 flex-1">{m.text}</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{background:'rgba(253,186,45,0.15)',color:'#B8890A'}}>+{m.xp} XP</span>
            </div>
          ))}
        </div>
        <button onClick={()=>setView('companion')} className="w-full py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2" style={{background:'#5B2EFF'}}>
          <Icon name="message-circle" size={15}/> Chat with Vera →
        </button>
      </div>
```

- [ ] **Step 2: Verify**

Career Futures section: full-width, 3 path cards with colour-coded left borders (teal/amber/purple). Each card shows risk badge, path name, arrow + role, salary range, probability bar, trade-off sentence. "Run full simulation →" link top-right navigates to companion tab. The `data-tour="step-6"` attribute is on the section heading container.

Coach Vera widget: sparkles avatar with green online dot, data-aware insight referencing `USER.atsScore`, next mission with XP gold pill, "Chat with Vera →" purple button.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: upgrade Career Futures to full-width with colour-coded borders and redesign Vera widget"
```

---

## Task 11: Career Companion — Vera header

**Files:**
- Modify: `c:\careergo\careergo.html` — top of `CareerCompanion` return

- [ ] **Step 1: Replace the plain title with Vera header**

In `CareerCompanion`, find:
```jsx
    <div className="space-y-6 fade-up">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Career Companion</h1>
        <p className="text-slate-500">Your AI mentor — 24/7. Three modes: planning, growth, and interview practice.</p>
      </div>

      {/* Mode tabs */}
```

Replace with:
```jsx
    <div className="space-y-6 fade-up">
      {/* Vera header */}
      <div className="bg-white rounded-2xl p-5 flex items-center gap-4" style={{border:'1px solid #EEEDFE'}}>
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white" style={{background:'linear-gradient(135deg,#5B2EFF,#8A63FF)'}}>
            <Icon name="sparkles" size={22}/>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white" style={{background:'#1D9E75',animation:'liveDot 2s ease-in-out infinite'}}/>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900" style={{fontSize:16}}>Coach Vera</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{background:'rgba(91,46,255,0.08)',color:'#5B2EFF'}}>
              {mode==='planning'?'Career Planning mode':mode==='skills'?'Skills Coach mode':'Interview Prep mode'}
            </span>
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Based on your profile: {USER.role} · {USER.yoe} yrs · {USER.industry} · {USER.location.split(',')[0]}</div>
        </div>
        <div className="shrink-0 text-xs font-semibold" style={{color:'#1D9E75'}}>● Online</div>
      </div>

      {/* Mode tabs */}
```

- [ ] **Step 2: Verify**

Career Companion page shows Vera header above the tabs: sparkles avatar with green dot, "Coach Vera" name, mode label that changes when switching tabs, context line with profile data. Online indicator top-right.

- [ ] **Step 3: Commit**

```bash
git add careergo.html
git commit -m "feat: add Coach Vera context header to Career Companion with dynamic mode label"
```

---

## Task 12: Career Companion — Career Planning tab personalisation

**Files:**
- Modify: `c:\careergo\careergo.html` — `CareerCompanion`, initial chat state + planning tab JSX

- [ ] **Step 1: Replace initial chat message and add quick-reply state**

In `CareerCompanion`, find:
```jsx
  const [chatMsgs,setChatMsgs]=useState([
    {from:'coach',text:`Hi ${USER.firstName} 👋 I've reviewed your full profile. You're strongest in craft & design systems. Want to aim for Staff IC or the management track? I'll build the roadmap either way.`},
  ]);
```

Replace with:
```jsx
  const [chatMsgs,setChatMsgs]=useState([
    {from:'coach',text:`Hi ${USER.firstName} 👋 I've reviewed your full profile. You're strongest in craft & design systems — top 12% for your role in KL.\n\nThe one gap before your next raise: no cross-team project ownership on your record. Want me to build you a 90-day plan to fix that, or would you rather explore the Staff IC vs Design Manager fork first?`},
  ]);
  const [quickRepliesDone,setQuickRepliesDone]=useState(false);
```

- [ ] **Step 2: Add quick reply canned responses to the `replies` array**

Find the `replies` array and add targeted canned responses at the start:
```jsx
  const QUICK_REPLIES=[
    {label:"Build my 90-day plan",response:"Here's your 90-day plan to fix the cross-team gap:\n\nMonth 1: Identify a live project across eng or data that needs design input. Volunteer to lead the design decisions.\nMonth 2: Run one cross-functional design review with 3+ stakeholders. Document it.\nMonth 3: Publish a short internal write-up on the outcomes. This becomes your portfolio proof.\n\nI'll add these as missions. Want me to set reminders?"},
    {label:"Staff IC vs Design Manager — show me both",response:"Staff IC path: Higher craft autonomy, individual contributor. Typical timeline 3–4 years. Salary ceiling RM 110–145k. Requires: design systems ownership, a signature project, visible technical depth.\n\nDesign Manager path: People leadership, 1:1s, hiring. Timeline 4–5 years. Ceiling RM 130–200k. Requires: cross-team ownership (your current gap), stakeholder alignment track record, a direct report you've grown.\n\nMy recommendation: fix the cross-team gap first — it unlocks BOTH paths."},
    {label:"What's blocking my next raise?",response:"Three things, in priority order:\n\n1. Cross-team project (critical) — no record of leading work outside your immediate squad.\n2. Case study gap — your Bloompay work is strong but undocumented publicly.\n3. Salary anchor — you haven't renegotiated since joining. Market moved +12% since then.\n\nFix #1 first. It's the fastest lever and unlocks everything else."},
  ];
```

- [ ] **Step 3: Add quick-reply chip UI below the opening message**

In the planning tab chat area, find the `{/* Suggested prompts */}` section:
```jsx
            {/* Suggested prompts */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto">
              {['How do I reach Staff in 2 years?','What\'s blocking my next raise?','Should I pivot to PM?'].map(p=>(
                <button key={p} onClick={()=>{setChatInput(p);}} className="shrink-0 text-xs text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full hover:bg-brand-100 transition whitespace-nowrap">{p}</button>
              ))}
            </div>
```

Replace with:
```jsx
            {/* Quick replies / Suggested prompts */}
            {!quickRepliesDone&&chatMsgs.filter(m=>m.from==='user').length===0?(
              <div className="px-4 py-2 flex gap-2 overflow-x-auto">
                {QUICK_REPLIES.map(qr=>(
                  <button key={qr.label} onClick={()=>{
                    setChatMsgs(m=>[...m,{from:'user',text:qr.label},{from:'coach',text:qr.response}]);
                    setQuickRepliesDone(true);
                  }} className="quick-chip shrink-0">{qr.label}</button>
                ))}
              </div>
            ):(
              <div className="px-4 py-2 flex gap-2 overflow-x-auto">
                {['How do I reach Staff in 2 years?','What\'s blocking my next raise?','Should I pivot to PM?'].map(p=>(
                  <button key={p} onClick={()=>setChatInput(p)} className="shrink-0 text-xs text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full hover:bg-brand-100 transition whitespace-nowrap">{p}</button>
                ))}
              </div>
            )}
```

- [ ] **Step 4: Update roadmap panel with USER data**

In the planning tab, find the hardcoded roadmap array:
```jsx
              {[{t:'Now',d:'Mid Product Designer',on:true},{t:'6 mo',d:'Own a cross-team project',on:false},{t:'18 mo',d:'Senior Product Designer',on:false},{t:'3–4 yr',d:'Staff / Design Manager',on:false}].map((s,i)=>(
```

Replace with:
```jsx
              {[{t:'Now',d:USER.currentLevel,on:true},{t:'6 mo',d:'Lead a cross-team initiative',on:false},{t:'14 mo',d:USER.nextMilestone+' ('+USER.nextMilestoneEta+')',on:false},{t:'4–5 yr',d:'Design Manager / Director',on:false}].map((s,i)=>(
```

- [ ] **Step 5: Verify**

Career Planning tab: opening Vera message is personalised (references top 12%, cross-team gap). Three purple quick-reply chips appear below the message. Clicking a chip sends it as user message + Vera responds with canned answer. After a chip is clicked, chips disappear and standard prompts appear. Roadmap panel shows `USER.currentLevel` and `USER.nextMilestone`.

- [ ] **Step 6: Commit**

```bash
git add careergo.html
git commit -m "feat: personalise Career Planning tab with Vera opening message and quick-reply chips"
```

---

## Task 13: Career Companion — Skills Growth tab

**Files:**
- Modify: `c:\careergo\careergo.html` — skills mode in `CareerCompanion`

- [ ] **Step 1: Add skillFilter state**

At the top of `CareerCompanion`, after the existing state declarations, add:
```jsx
  const [skillFilter,setSkillFilter]=useState('all');
```

- [ ] **Step 2: Replace the skills tab content**

Find and replace the entire `{/* MODE 2: Skills Growth */}` block:
```jsx
      {/* MODE 2: Skills Growth */}
      {mode==='skills'&&(
        <div className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Learning Checklist</h3>
```

Replace the entire skills mode block with:
```jsx
      {/* MODE 2: Skills Growth */}
      {mode==='skills'&&(
        <div className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6">
              <div className="mb-4">
                <h3 className="font-bold text-slate-900">Skills Growth — personalised for {USER.firstName}&rsquo;s path to Design Manager</h3>
                <p className="text-xs text-slate-400 mt-0.5">Based on your current skills and career trajectory</p>
              </div>
              {/* Path filter */}
              <div className="flex gap-2 flex-wrap mb-5">
                {[{id:'all',label:'All paths'},{id:'design-manager',label:'Design Manager'},{id:'staff-ic',label:'Staff IC'},{id:'pm',label:'Product Manager'}].map(f=>(
                  <button key={f.id} onClick={()=>setSkillFilter(f.id)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${skillFilter===f.id?'bg-brand-700 text-white border-brand-700':'bg-white text-slate-600 border-slate-200 hover:border-brand-300'}`}>
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-right"><span className="text-2xl font-extrabold text-brand-950">{checkPct}%</span><div className="text-xs text-slate-400">complete</div></div>
              </div>
              <ProgressBar value={checkPct} className="mb-5"/>
              <div className="grid sm:grid-cols-2 gap-3">
                {checklist.filter(item=>skillFilter==='all'||item.paths?.includes(skillFilter)).map(item=>(
                  <button key={item.id} onClick={()=>setChecklist(l=>l.map(x=>x.id===item.id?{...x,done:!x.done}:x))}
                    className={`flex items-start gap-3 p-3 rounded-xl border text-left transition ${item.done?'bg-emerald-50 border-emerald-100':'bg-white border-slate-100 hover:border-brand-200'}`}>
                    <Icon name={item.done?'check-circle-2':'circle'} size={18} className={`${item.done?'text-emerald-500':'text-slate-300'} shrink-0 mt-0.5`}/>
                    <div>
                      <div className={`text-sm font-medium ${item.done?'text-emerald-700 line-through':'text-slate-700'}`}>{item.skill}</div>
                      {item.why&&<div className="text-xs text-slate-400 mt-0.5">{item.why}</div>}
                    </div>
                  </button>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Skill demand signals</h3>
              <div className="space-y-3">
                {PULSE_SKILLS.slice(0,6).map(s=>{
                  const userHas=USER.skills.some(us=>us.toLowerCase().includes(s.name.toLowerCase().split(' ')[0]));
                  const isClose=!userHas&&USER.skills.some(us=>['Figma','Design Systems','User Research'].includes(us)&&['React','Next.js','Framer'].includes(s.name));
                  return (
                    <div key={s.name}>
                      <div className="flex justify-between text-xs mb-1 items-center">
                        <span className="font-medium text-slate-700">{s.name}</span>
                        <div className="flex items-center gap-1.5">
                          {userHas&&<span className="text-xs font-bold px-1.5 py-0.5 rounded-full" style={{background:'rgba(29,158,117,0.1)',color:'#1D9E75'}}>You have this ✓</span>}
                          {isClose&&<span className="text-xs font-bold px-1.5 py-0.5 rounded-full" style={{background:'rgba(239,159,39,0.1)',color:'#BA7517'}}>You&rsquo;re close</span>}
                          <span className={`font-bold ${s.chg.startsWith('+')?'text-emerald-600':'text-red-500'}`}>{s.chg}</span>
                        </div>
                      </div>
                      <ProgressBar value={s.idx} tone={s.idx>70?'brand':s.idx>40?'amber':'green'}/>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      )}
```

- [ ] **Step 3: Verify**

Skills tab header: "Skills Growth — personalised for Aisha's path to Design Manager". Path filter chips work — "Design Manager" filter shows only items with `paths` including `design-manager`. Each checklist item shows a `why` line in grey below the skill name. Demand signals panel: if any USER skill matches a PULSE_SKILLS name, it shows "You have this ✓" green badge.

- [ ] **Step 4: Commit**

```bash
git add careergo.html
git commit -m "feat: personalise Skills Growth tab with path filter, WHY lines, and skill match badges"
```

---

## Task 14: Career Companion — Interview Coach tab overhaul

**Files:**
- Modify: `c:\careergo\careergo.html` — `CareerCompanion`, interview mode state and JSX

- [ ] **Step 1: Add interview setup state**

At the top of `CareerCompanion`, after the existing state:
```jsx
  const [interviewSetupDone,setInterviewSetupDone]=useState(false);
  const [interviewRole,setInterviewRole]=useState('Senior Product Designer at Nimbus Labs');
  const [interviewType,setInterviewType]=useState('behavioural');
  const [interviewFocus,setInterviewFocus]=useState('leadership');
```

- [ ] **Step 2: Add role-aware questions data**

Add this constant inside `CareerCompanion` (after state declarations, before the `sendMsg` function):
```jsx
  const ROLE_QUESTIONS={
    behavioural:{
      leadership:"Nimbus Labs focuses on B2B SaaS. Tell me about a time you had to align multiple stakeholder types around a design decision for a complex enterprise workflow.",
      'design-process':"Walk me through your end-to-end design process for a feature that required significant iteration before reaching the right solution at Nimbus Labs.",
      'stakeholder-management':"Describe a situation at a B2B product company where you had to manage conflicting feedback from sales, engineering, and the end-user simultaneously.",
    },
    technical:{
      leadership:"How would you structure a design system handoff process for a distributed team at Nimbus Labs?",
      'design-process':"Explain your approach to conducting usability testing for an enterprise dashboard with limited access to real end-users.",
      'stakeholder-management':"How do you document and communicate design decisions to ensure engineering buy-in at scale?",
    },
    portfolio:{
      leadership:"Walk me through a project where you drove a significant design direction change. What was your process for getting alignment?",
      'design-process':"Show me a project in your portfolio where the final solution was significantly different from your initial concept. What changed and why?",
      'stakeholder-management':"Tell me about a case study where you navigated pushback from a stakeholder who fundamentally disagreed with your design approach.",
    },
  };
  const currentQ=ROLE_QUESTIONS[mockMode]?.[interviewFocus]||qs[mockQ];
```

- [ ] **Step 3: Replace the interview coach mode block**

Find and replace the entire `{/* MODE 3: Interview Coach */}` block:

```jsx
      {/* MODE 3: Interview Coach */}
      {mode==='interview'&&(
        <div className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 space-y-5">
              {!interviewSetupDone?(
                /* ── Setup panel ── */
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Interview Setup</h3>
                  <p className="text-xs text-slate-400 mb-5">Configure your practice session for the most relevant preparation.</p>
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-2">Preparing for</label>
                      <select value={interviewRole} onChange={e=>setInterviewRole(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 ring-brand-200 bg-white">
                        {JOBS.map(j=><option key={j.id}>{j.title} at {j.company}</option>)}
                        <option>Custom role</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-2">Interview type</label>
                      <div className="flex gap-2 flex-wrap">
                        {[{id:'behavioural',label:'Behavioural'},{id:'technical',label:'Technical'},{id:'portfolio',label:'Portfolio Review'}].map(t=>(
                          <button key={t.id} onClick={()=>setMockMode(t.id)} className={`interview-type-chip ${mockMode===t.id?'active':''}`}>{t.label}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-2">Focus area</label>
                      <div className="flex gap-2 flex-wrap">
                        {[{id:'leadership',label:'Leadership'},{id:'design-process',label:'Design Process'},{id:'stakeholder-management',label:'Stakeholder Management'}].map(f=>(
                          <button key={f.id} onClick={()=>setInterviewFocus(f.id)} className={`interview-type-chip ${interviewFocus===f.id?'active':''}`}>{f.label}</button>
                        ))}
                      </div>
                    </div>
                    <Btn onClick={()=>setInterviewSetupDone(true)}>
                      <Icon name="play" size={15}/> Start Practice →
                    </Btn>
                  </div>
                </div>
              ):(
                /* ── Practice panel ── */
                <div className="space-y-5">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h3 className="font-bold text-slate-900">Mock Interview</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{interviewRole} · {mockMode.charAt(0).toUpperCase()+mockMode.slice(1)} · {interviewFocus.split('-').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ')}</p>
                    </div>
                    <button onClick={()=>{setInterviewSetupDone(false);setMockFeedback(null);setMockAns('');}} className="text-xs text-slate-400 hover:text-slate-600 underline">Change setup</button>
                  </div>
                  <div className="rounded-xl p-4" style={{background:'#F4F0FF',border:'1px solid #EEEDFE'}}>
                    <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{color:'#5B2EFF'}}>Your question</div>
                    <p className="text-slate-800 font-medium text-sm leading-relaxed">{currentQ}</p>
                  </div>
                  <label className="block">
                    <span className="text-xs font-semibold text-slate-500 mb-2 block">Your answer — speak naturally, in your own words</span>
                    <textarea value={mockAns} onChange={e=>setMockAns(e.target.value)} rows={5}
                      placeholder="Start typing your answer…"
                      className="w-full bg-slate-50 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ring-brand-200 resize-none"/>
                  </label>
                  <div className="flex gap-2">
                    <Btn size="sm" onClick={submitAnswer} disabled={!mockAns.trim()}>
                      <Icon name="send" size={15}/> Get AI Feedback
                    </Btn>
                    <Btn size="sm" variant="secondary" onClick={()=>{setMockAns('');setMockFeedback(null);}}>
                      <Icon name="refresh-cw" size={15}/> New question
                    </Btn>
                  </div>
                  {mockFeedback&&(
                    <div className="border border-slate-100 rounded-2xl p-5 space-y-4 bg-white fade-up">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">AI Feedback</span>
                        <ScoreRing score={mockFeedback.score} size={52} color="#7c3aed"/>
                      </div>
                      {/* 4-dimension bars */}
                      <div className="space-y-3">
                        {[
                          {dim:'STAR Method',score:78,note:'Good structure. Lead with the Situation more clearly.'},
                          {dim:'Specificity',score:65,note:'Add 1–2 concrete metrics to make the impact memorable.'},
                          {dim:'Relevance to role',score:88,note:'Well aligned with B2B SaaS context and stakeholder complexity.'},
                          {dim:'Confidence signals',score:72,note:'Avoid hedging phrases ("I think", "sort of"). State outcomes directly.'},
                        ].map(({dim,score,note})=>(
                          <div key={dim}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-semibold text-slate-700">{dim}</span>
                              <span className="font-bold text-slate-500">{score}/100</span>
                            </div>
                            <div className="dim-bar-track">
                              <div className="dim-bar-fill" style={{width:`${score}%`,background:score>=80?'#1D9E75':score>=65?'#EF9F27':'#E24B4A'}}/>
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">{note}</div>
                          </div>
                        ))}
                      </div>
                      {/* Model answer */}
                      <details className="border border-slate-100 rounded-xl overflow-hidden">
                        <summary className="px-4 py-3 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-50">Example answer structure</summary>
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                          <strong>Situation:</strong> "At Bloompay, we were redesigning the merchant onboarding flow with 3 stakeholder teams pulling in different directions."<br/>
                          <strong>Task:</strong> "I needed to align sales (wanted speed), compliance (wanted rigour), and the end merchants (wanted simplicity)."<br/>
                          <strong>Action:</strong> "I ran a 2-hour design sprint with reps from each team, mapped their non-negotiables, and found the 80% overlap. Prototyped that version in 3 days."<br/>
                          <strong>Result:</strong> "Onboarding time dropped 34%. Compliance signed off first attempt. Sales used it as a selling point in the next quarter."
                        </div>
                      </details>
                      <button onClick={()=>{setMockAns('');setMockFeedback(null);}} className="text-xs font-semibold" style={{color:'#5B2EFF'}}>Try again with this structure →</button>
                    </div>
                  )}
                </div>
              )}
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Interview Readiness</h3>
              <div className="flex justify-center mb-4"><ScoreRing score={74} size={96} color="#7c3aed" label="Readiness"/></div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Session 3 · 5 questions answered</div>
              <div className="space-y-3 mb-4">
                {[['STAR Method',78,'amber'],['Technical depth',65,'amber'],['Conciseness',72,'amber'],['Confidence',80,'green']].map(([l,s,t])=>(
                  <div key={l}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-600">{l}</span>
                      <Badge tone={t}>{s}/100</Badge>
                    </div>
                    <div className="dim-bar-track">
                      <div className="dim-bar-fill" style={{width:`${s}%`,background:t==='green'?'#1D9E75':'#EF9F27'}}/>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl text-xs text-slate-500" style={{background:'#F8F7FF'}}>Practice 3 more behavioural questions to reach 85+ readiness score.</div>
            </Card>
          </div>
        </div>
      )}
```

- [ ] **Step 4: Verify**

Interview Coach tab shows setup panel on first load: "Preparing for" dropdown pre-filled with JOBS[0], type chips (Behavioural/Technical/Portfolio Review), focus area chips. "Start Practice →" reveals the practice panel with a role-specific question. Post-answer "Get AI Feedback" shows 4 dimension score bars with notes. "Example answer structure" is an expandable `<details>` block. "Try again with this structure →" resets the textarea.

- [ ] **Step 5: Commit**

```bash
git add careergo.html
git commit -m "feat: overhaul Interview Coach with setup panel, role-specific questions, and 4-dimension feedback"
```

---

## Task 15: Final verification pass

- [ ] **Step 1: Full demo flow walkthrough**

Open `careergo.html` in browser. Walk through the judge demo flow:

1. **Onboarding tour** — clear `cg_tour_done` from localStorage, refresh, log in. Tour fires automatically. All 6 steps spotlight correct elements. Step 6 tooltip appears above Career Futures heading. "Start exploring →" dismisses tour. Refresh → no tour.

2. **Dashboard overview** — new gradient hero visible. Career Health ring animates. Status lines present. "View 3 new matches" button visible (USER.newMatches=3). Metric cards show lavender shared background, delta pills, ⓘ hover tooltips. Activity cards are clickable with urgency signals. Career Futures 3 cards show colour-coded left borders. Vera widget shows data-aware insight.

3. **Career Intelligence Profile** — navigate via sidebar (unchanged from pre-Batch A).

4. **Career Companion → Career Planning** — Vera header visible with avatar + mode label + context line. Opening message is personalised. 3 quick-reply chips visible. Clicking a chip shows Vera response.

5. **Career Companion → Interview Coach** — setup panel shown. Select Behavioural + Leadership → Start Practice → role-specific question appears. Type answer → Get AI Feedback → 4-dimension bars animate in.

6. **Skills Growth tab** — path filter chips work. Each skill item shows WHY line. Demand signals show "You have this ✓" for matching skills.

- [ ] **Step 2: Fix any regressions found in step 1**

Common issues to check:
- Babel syntax errors (missing JSX closing tags, unclosed template literals)
- `QUICK_REPLIES` defined inside `CareerCompanion` — must be before first `return`
- `currentQ` references `mockMode` which needs to match the key used in `ROLE_QUESTIONS` ('behavioural' not 'behavioral') — confirm spelling consistency

- [ ] **Step 3: Commit final state**

```bash
git add careergo.html
git commit -m "feat: Batch A complete — onboarding tour, dashboard redesign, career companion overhaul"
```

- [ ] **Step 4: Push to GitHub**

```bash
git push https://<your-token>@github.com/Lai-1234/careergo.git candidate_dashboard
```

---

## Self-review notes

**Spec coverage check:**

| Spec item | Covered by task |
|-----------|----------------|
| 6-step onboarding spotlight | Tasks 4, 5 |
| localStorage persistence | Task 5 |
| `data-tour` attributes | Task 3 |
| DashHero gradient hero | Tasks 6, 7 |
| CareerHealthRing animated SVG | Task 6 |
| 3 contextual action buttons | Task 6 |
| Metric card delta badges | Task 8 |
| ⓘ hover tooltip per metric | Task 8 |
| Shared metric card background | Task 8 |
| Clickable activity cards | Task 9 |
| Urgency amber pills | Task 9 |
| Streak progress bar | Task 9 |
| Career Futures full-width, 3 cards | Task 10 |
| Colour-coded left borders | Task 10 |
| "Run full simulation →" button | Task 10 |
| Vera widget data-aware insight | Task 10 |
| Vera widget XP chip | Task 10 |
| Vera header in companion | Task 11 |
| Dynamic mode label | Task 11 |
| Profile context line | Task 11 |
| Planning tab personalised opening | Task 12 |
| Quick-reply chips | Task 12 |
| Roadmap uses USER data | Task 12 |
| Skills Growth personalised header | Task 13 |
| WHY lines on checklist | Task 13 |
| Path filter chips | Task 13 |
| "You have this ✓" demand badge | Task 13 |
| Interview setup panel | Task 14 |
| Role-specific questions | Task 14 |
| 4-dimension feedback | Task 14 |
| Model answer expandable | Task 14 |
| Readiness tracker | Task 14 |

**Type/naming consistency:**
- `mockMode` values: use `'behavioural'` (British spelling) throughout — matches `ROLE_QUESTIONS` keys. The old code used `'behavioral'` — Task 14 switches to `'behavioural'`. Ensure the `setMockMode` call in the new setup chips also uses `'behavioural'`.
- `setView` vs `go`: `CandidateDashboard` receives `setView` prop. `go()` is the App-level router. Don't mix them.
- `QUICK_REPLIES` is defined inside `CareerCompanion` — not a module-level constant — so it has access to `USER` and `USER.firstName`.
