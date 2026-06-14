# CareerGo Batch C — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Implement Change 6c/6d (micro-interactions + nav), 6f (notification bell), 7d (score breakdown), 8 (jobs improvements), and 5d (application tracker tab).

**Architecture:** Single HTML file (`c:\careergo\careergo.html`). All edits are surgical replacements — no file splits. React 18 + Babel Standalone + Tailwind CDN.

**Tech Stack:** JSX in `<script type="text/babel">`, Tailwind CDN classes, inline CSS in `<style>` block, Lucide icons via `<Icon name="kebab-case">` wrapper only.

**Branch:** `candidate_dashboard`

---

### Task 1: CSS additions for Batch C

**Files:**
- Modify: `c:\careergo\careergo.html` — `<style>` block (around line 60–270)

- [ ] **Step 1: Add CSS classes after the existing Batch B CSS**

Find the end of the existing CSS block (look for `.profile-dim-fill` or the last Batch B rule). Add after it:

```css
/* Batch C */
.nav-link{position:relative;transition:background 150ms;border-left:3px solid transparent;border-radius:0 10px 10px 0;}
.nav-link:hover{background:rgba(255,255,255,0.06);border-left-color:rgba(255,255,255,0.2);}
.nav-link.active{background:rgba(91,46,255,0.18);border-left-color:#5B2EFF;}
.nav-gold-dot{width:7px;height:7px;border-radius:50%;background:#FDBA2D;flex-shrink:0;}
.hover-lift{transition:transform 180ms ease,box-shadow 180ms ease;}
.hover-lift:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,0.10);}
.skill-badge{transition:transform 120ms,box-shadow 120ms;display:inline-block;}
.skill-badge:hover{transform:scale(1.05);box-shadow:0 2px 8px rgba(91,46,255,0.20);}
.impact-tip{position:relative;cursor:default;}
.impact-tip .impact-tooltip{display:none;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);width:220px;background:#1a0a3d;color:#fff;font-size:11px;line-height:1.5;border-radius:10px;padding:10px 12px;z-index:100;pointer-events:none;white-space:normal;}
.impact-tip:hover .impact-tooltip{display:block;}
.notif-dropdown{position:absolute;top:calc(100% + 8px);right:0;width:300px;background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.15);border:1px solid #f1f5f9;z-index:200;overflow:hidden;}
```

- [ ] **Step 2: Commit**

```
git add c:\careergo\careergo.html
git commit -m "style: add Batch C CSS — nav links, hover lift, skill badge, impact tooltip, notif dropdown"
```

---

### Task 2: Nav active state + micro-interactions (6c + 6d)

**Files:**
- Modify: `c:\careergo\careergo.html` — `CandidateApp` sidebar nav render (around lines 2790–2840)

**Context:** The sidebar nav is rendered inside `CandidateApp`. Each nav item is currently rendered something like:
```jsx
<button onClick={()=>setView(n.id)} data-tour={n.tourStep?`step-${n.tourStep}`:undefined}
  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition ... ${view===n.id?'bg-white/15 text-white':'text-white/60 hover:text-white hover:bg-white/8'}`}>
  <Icon name={n.icon} size={18}/>
  <span className="text-sm font-semibold">{t(n.tk)}</span>
</button>
```

- [ ] **Step 1: Read the sidebar nav render in CandidateApp**

Read lines 2790–2845 to find the exact nav button structure.

- [ ] **Step 2: Update nav button to use `.nav-link` class + gold dot**

Replace the nav button className logic. The key changes:
1. Add `nav-link` class to each nav item button
2. Add `active` class when `view === n.id` (remove the old conditional background classes that conflict)
3. Add gold dot for the jobs nav item when `USER.newMatches > 0`

The new button should look like:
```jsx
<button
  onClick={()=>setView(n.id)}
  data-tour={n.tourStep?`step-${n.tourStep}`:undefined}
  className={`nav-link w-full flex items-center gap-3 px-4 py-3 text-left ${view===n.id?'active text-white':'text-white/60 hover:text-white'}`}>
  <Icon name={n.icon} size={18}/>
  <span className="text-sm font-semibold flex-1">{t(n.tk)}</span>
  {n.id==='jobs'&&USER.newMatches>0&&<span className="nav-gold-dot"/>}
</button>
```

- [ ] **Step 3: Add `.hover-lift` to job cards in `JobsOpportunities`**

Find the job card wrapper div in `JobsOpportunities` (search for "job-card" or the outer `<Card>` or `<div>` wrapping each JOBS item). Add `hover-lift` class to each card wrapper.

The job cards are rendered via `filteredJobs.map(...)`. The outer wrapper per card should get `className="hover-lift"` added.

- [ ] **Step 4: Add `.hover-lift` to career path cards in `CandidateDashboard`**

Find the career path cards (they have `.future-card` class or are inside the Career Futures section). Add `hover-lift` to the card wrapper.

- [ ] **Step 5: Add `.skill-badge` to skill chips in CareerCompanion Skills tab**

Find skill chip elements in the Skills Growth tab (in `CareerCompanion`). The chips that show skill names should get `className="skill-badge ..."` added to their existing classes.

- [ ] **Step 6: Commit**

```
git commit -m "feat: nav active state with brand border + micro-interactions hover lift and skill badge (6c+6d)"
```

---

### Task 3: Notification Bell (6f)

**Files:**
- Modify: `c:\careergo\careergo.html` — add `NotificationBell` component before `CandidateApp`, update header in `CandidateApp`

**Context:** `CandidateApp` has a top `<header>` bar. Find it (search for `<header` in CandidateApp). It currently shows the page title and user avatar. Add the bell between them.

- [ ] **Step 1: Add `NotificationBell` component before `CandidateApp`**

Insert this component just before `function CandidateApp`:

```jsx
function NotificationBell(){
  const [open,setOpen]=useState(false);
  const [read,setRead]=useState(false);
  const NOTIFS=[
    {icon:'briefcase',bg:'rgba(91,46,255,0.12)',color:'#5B2EFF',text:'3 new job matches today',sub:'94%, 91%, 88% fit',time:'2m ago'},
    {icon:'sparkles',bg:'rgba(253,186,45,0.12)',color:'#FDBA2D',text:"Coach Vera has a new mission",sub:'+150 XP available',time:'1h ago'},
    {icon:'trending-up',bg:'rgba(29,158,117,0.12)',color:'#1D9E75',text:'ATS score improved +3 pts',sub:'Now at 84 — top 18%',time:'3h ago'},
    {icon:'zap',bg:'rgba(239,159,39,0.12)',color:'#EF9F27',text:'Market alert: Generative AI up 42%',sub:'See Market Signals →',time:'Today'},
  ];
  return (
    <div className="relative">
      <button onClick={()=>setOpen(o=>!o)} className="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-slate-100 transition text-slate-500">
        <Icon name="bell" size={18}/>
        {!read&&<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"/>}
      </button>
      {open&&<>
        <div className="fixed inset-0 z-[199]" onClick={()=>setOpen(false)}/>
        <div className="notif-dropdown">
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <span className="font-bold text-slate-900 text-sm">Notifications</span>
            <button onClick={()=>{setRead(true);setOpen(false);}} className="text-xs text-brand-600 font-semibold hover:underline">Mark all read</button>
          </div>
          <div className="divide-y divide-slate-50">
            {NOTIFS.map((n,i)=>(
              <div key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition cursor-pointer">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{background:n.bg}}>
                  <Icon name={n.icon} size={14} style={{color:n.color}}/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 leading-snug">{n.text}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{n.sub}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0 mt-0.5">{n.time}</span>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-slate-100 text-center">
            <button className="text-xs text-brand-600 font-semibold hover:underline">View all notifications</button>
          </div>
        </div>
      </>}
    </div>
  );
}
```

Note: `<Icon>` does not support `style` prop for color — use a wrapping span or `className` for color. Replace `style={{color:n.color}}` with a wrapper:
```jsx
<span style={{color:n.color}}><Icon name={n.icon} size={14}/></span>
```

- [ ] **Step 2: Add `<NotificationBell/>` to CandidateApp header**

Find the `<header>` element in `CandidateApp`. It should have an `<Avatar>` and possibly other elements. Add `<NotificationBell/>` just before the `<Avatar>` (right side of header, before avatar).

- [ ] **Step 3: Commit**

```
git commit -m "feat: notification bell dropdown with 4 alerts (6f)"
```

---

### Task 4: Jobs improvements (Change 8)

**Files:**
- Modify: `c:\careergo\careergo.html` — `JobsOpportunities` component (around lines 3100–3250)

**Context:** `JobsOpportunities` renders a list of job cards from `JOBS` mock data. Each card shows title, company, salary, fit score, tags, "Why it fits", Save button. Read the function to understand the current structure before editing.

- [ ] **Step 1: Read `JobsOpportunities` to understand current structure**

Read the function (search for `function JobsOpportunities`). Note:
- Current state variables (saved, filters, etc.)
- How `filteredJobs` is derived
- Job card structure (what wraps each card, what buttons exist)

- [ ] **Step 2: Add new state variables**

Inside `JobsOpportunities`, add:
```jsx
const [compareIds,setCompareIds]=useState([]);
const [impactFilter,setImpactFilter]=useState(false);
const [notAppliedFilter,setNotAppliedFilter]=useState(false);
```

- [ ] **Step 3: Update filter logic**

The `filteredJobs` derivation currently filters by score/salary/location. Add:
```jsx
.filter(j=>!impactFilter||j.impact==='High')
.filter(j=>!notAppliedFilter||!j.applied)
```
(If `j.applied` doesn't exist in mock data, add `applied: false` to all JOBS entries or just skip this filter.)

- [ ] **Step 4: Add filter chips to the filter bar**

Find where the filter buttons/chips are rendered. Add two new pill chips after the existing filters:
```jsx
<button onClick={()=>setImpactFilter(v=>!v)}
  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${impactFilter?'bg-amber-500 text-white border-amber-500':'bg-white text-slate-600 border-slate-200 hover:border-amber-400'}`}>
  <Icon name="zap" size={12} className="inline mr-1"/> High impact only
</button>
<button onClick={()=>setNotAppliedFilter(v=>!v)}
  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${notAppliedFilter?'bg-brand-600 text-white border-brand-600':'bg-white text-slate-600 border-slate-200 hover:border-brand-300'}`}>
  Not yet applied
</button>
```

- [ ] **Step 5: Update each job card**

Add to each card wrapper:
1. `group` Tailwind class (for group-hover on child elements)
2. `hover-lift` class

Add inside each card:
- Compare checkbox (top-right corner):
```jsx
<input type="checkbox" checked={compareIds.includes(j.id)}
  onChange={e=>setCompareIds(ids=>e.target.checked?[...ids,j.id]:ids.filter(i=>i!==j.id))}
  className="absolute top-3 right-3 w-4 h-4 accent-brand-600 opacity-0 group-hover:opacity-100 transition"/>
```

- "Not interested" button (next to Save):
```jsx
<button onClick={()=>toast('Preference noted — Autopilot will learn from this','x')}
  className="text-xs text-slate-400 hover:text-rose-500 px-2 py-1 rounded-lg hover:bg-rose-50 transition opacity-0 group-hover:opacity-100">
  Not interested
</button>
```

- Career impact badge upgrade (wrap existing impact badge with `.impact-tip` and add tooltip):

Find where "Career impact" is displayed. Wrap it:
```jsx
<span className="impact-tip">
  <Badge tone="amber">Career impact: High</Badge>
  <span className="impact-tooltip">
    Why high for you:<br/>• Moves you toward Staff IC path<br/>• +RM 18k salary potential<br/>• Builds cross-team leadership gap
  </span>
</span>
```

- [ ] **Step 6: Add compare sticky bar**

Just before the closing `</div>` of the `JobsOpportunities` return:
```jsx
{compareIds.length>=2&&(
  <div className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl text-white font-semibold text-sm shadow-glow" style={{background:'#5B2EFF',transform:'translateX(-50%)'}}>
    <Icon name="columns-2" size={16}/> Comparing {compareIds.length} roles
    <button onClick={()=>toast('Compare view — coming soon in full release','layers')} className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-xs transition">Compare now →</button>
    <button onClick={()=>setCompareIds([])} className="text-white/60 hover:text-white ml-1"><Icon name="x" size={14}/></button>
  </div>
)}
```

- [ ] **Step 7: Commit**

```
git commit -m "feat: jobs improvements — compare mode, not interested, impact tooltip, filter chips (change 8)"
```

---

### Task 5: Career Score Breakdown (7d)

**Files:**
- Modify: `c:\careergo\careergo.html` — `CareerProfile` component, after the Profile Strength + Skill Gap section

**Context:** After Task 9 (Batch B), `CareerProfile` has:
1. Dark intelligence banner (lines ~2892–2940)
2. Profile Strength + Skill Gap 2-col (lines ~2941–2990)
3. Editor + Preview 2-col grid (lines ~2992+)

Insert the score breakdown between items 2 and 3.

- [ ] **Step 1: Read around line 2990–3000 to find the exact insert point**

Find the closing `</div>` of the `grid lg:grid-cols-3` Profile Strength section, and the opening of the `grid lg:grid-cols-2` Editor section.

- [ ] **Step 2: Insert the expandable breakdown panel**

Add this between the two grid sections:
```jsx
{/* Career Score Breakdown */}
{(()=>{
  const [scoreOpen,setScoreOpen]=React.useState(false);
  const dims=[
    {label:'Profile completeness',score:22,max:25},
    {label:'Skill relevance',score:19,max:25},
    {label:'Experience quality',score:18,max:25},
    {label:'Market positioning',score:19,max:25},
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <button onClick={()=>setScoreOpen(o=>!o)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'rgba(91,46,255,0.1)'}}>
            <Icon name="bar-chart-2" size={18} className="text-brand-600"/>
          </div>
          <div>
            <span className="font-bold text-slate-900">Career Score: 78</span>
            <span className="text-sm text-slate-400 ml-2">· How this is calculated</span>
          </div>
        </div>
        <Icon name={scoreOpen?'chevron-up':'chevron-down'} size={18} className="text-slate-400"/>
      </button>
      {scoreOpen&&(
        <div className="px-6 pb-5 space-y-4 border-t border-slate-100">
          {dims.map(d=>(
            <div key={d.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-slate-600">{d.label}</span>
                <span className="text-sm font-bold text-slate-800">{d.score}/{d.max}</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{width:`${(d.score/d.max)*100}%`,background:'#5B2EFF'}}/>
              </div>
            </div>
          ))}
          <p className="text-xs text-slate-400 pt-1">Total: 78/100 · Updated today</p>
        </div>
      )}
    </div>
  );
})()}
```

Note: IIFE pattern `{(()=>{...})()}` is needed since `useState` can't be called at arbitrary JSX positions. Alternative: extract as a named component `ScoreBreakdown` inserted before `CareerProfile`. **Preferred approach: extract as a separate `ScoreBreakdown` component** to avoid IIFE complexity.

Better implementation — add `function ScoreBreakdown()` just before `CareerProfile`, then use `<ScoreBreakdown/>` in the JSX.

- [ ] **Step 3: Commit**

```
git commit -m "feat: career score breakdown expandable panel (7d)"
```

---

### Task 6: Application Tracker Tab (5d)

**Files:**
- Modify: `c:\careergo\careergo.html` — `AutopilotProxy` component + add `TRACKED_APPS` mock data before it

**Context:** `AutopilotProxy` currently has a dark command header at top, then a `grid lg:grid-cols-3` with Preferences (left) and Activity Log (right). Task 6 adds a tab bar between the command header and the grid.

- [ ] **Step 1: Add `TRACKED_APPS` mock data before `AutopilotProxy`**

Find the line just before `function AutopilotProxy`. Insert:
```js
const TRACKED_APPS=[
  {id:1,role:'Senior Product Designer',company:'Nimbus Labs',fit:94,date:'Jun 14',status:'Interview scheduled',statusTone:'green'},
  {id:2,role:'Head of Design',company:'Finovo',fit:89,date:'Jun 13',status:'Applied',statusTone:'brand'},
  {id:3,role:'Product Design Lead',company:'HealthOS',fit:91,date:'Jun 12',status:'Applied',statusTone:'brand'},
  {id:4,role:'UX Designer III',company:'Orbit Health',fit:76,date:'Jun 11',status:'Rejected',statusTone:'red'},
  {id:5,role:'Senior UX Designer',company:'ByteStack',fit:88,date:'Jun 10',status:'Applied',statusTone:'brand'},
];
```

- [ ] **Step 2: Add `apTab` state to `AutopilotProxy`**

Inside `AutopilotProxy` state declarations, add:
```jsx
const [apTab,setApTab]=useState('activity');
```

- [ ] **Step 3: Add tab bar after command header, before the preferences grid**

Find the line just before `<div className="grid lg:grid-cols-3 gap-6">` in `AutopilotProxy`. Insert the tab bar before it:
```jsx
{/* Tab bar */}
<div className="flex gap-1 p-1 rounded-xl w-fit" style={{background:'#f1f5f9'}}>
  <button onClick={()=>setApTab('activity')} className={`market-tab ${apTab==='activity'?'active':''}`}>
    <Icon name="activity" size={13} className="inline mr-1.5"/> Agent Activity
  </button>
  <button onClick={()=>setApTab('tracker')} className={`market-tab ${apTab==='tracker'?'active':''}`}>
    <Icon name="list" size={13} className="inline mr-1.5"/> Application Tracker
  </button>
</div>
```

Note: `.market-tab` and `.market-tab.active` CSS classes already exist from Batch B Task 1.

- [ ] **Step 4: Conditionally render content below tab bar**

Wrap the existing `<div className="grid lg:grid-cols-3 gap-6">...` in `{apTab==='activity'&&...}`.

Then add the tracker view:
```jsx
{apTab==='tracker'&&(
  <Card className="p-6">
    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
      <Icon name="list" size={15} className="text-brand-600"/> Application Tracker
      <Badge tone="brand">{TRACKED_APPS.length} total</Badge>
    </h3>
    <div className="space-y-2">
      {/* Header row */}
      <div className="grid items-center gap-3 px-3 pb-2 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wide"
        style={{gridTemplateColumns:'48px 1fr 80px 140px 60px'}}>
        <span>Fit</span><span>Role</span><span>Date</span><span>Status</span><span></span>
      </div>
      {TRACKED_APPS.map(a=>(
        <div key={a.id} className="grid items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition"
          style={{gridTemplateColumns:'48px 1fr 80px 140px 60px'}}>
          <Badge tone={a.fit>=90?'green':'brand'}>{a.fit}%</Badge>
          <div>
            <div className="text-sm font-semibold text-slate-800">{a.role}</div>
            <div className="text-xs text-slate-400">{a.company}</div>
          </div>
          <span className="text-xs text-slate-400">{a.date}</span>
          <Badge tone={a.statusTone==='red'?'slate':a.statusTone}>{a.status}</Badge>
          <button onClick={()=>toast(`Opening ${a.company} application…`,'external-link')}
            className="text-xs font-semibold text-brand-600 hover:underline">View →</button>
        </div>
      ))}
    </div>
  </Card>
)}
```

- [ ] **Step 5: Commit**

```
git commit -m "feat: autopilot application tracker tab with mock data (5d)"
```

---

### Task 7: Final verification + push to GitHub

- [ ] **Step 1: Verify file opens in browser** — `start c:\careergo\careergo.html`

- [ ] **Step 2: Check git log shows all 6 new commits**

```
git log --oneline -8
```

- [ ] **Step 3: Push to GitHub**

```
git push origin candidate_dashboard
```

- [ ] **Step 4: Confirm push succeeded**
