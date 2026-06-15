# CareerGo Batch D — Design Spec
**Date:** 2026-06-15  
**Scope:** Autopilot redesign, Market Intelligence redesign, Jobs & Opportunities redesign  
**File:** `c:\careergo\careergo.html`  
**Branch:** `candidate_dashboard`

---

## Design System

Same tokens as Batches A–C. App area uses white cards on `#F8FAFC` background, dark gradient banners for headers.

| Token | Value |
|-------|-------|
| Brand purple | `#5B2EFF` |
| Light purple | `#8A63FF` |
| Gold | `#FDBA2D` |
| Teal | `#1D9E75` |
| Amber | `#EF9F27` |
| Dark header bg | `linear-gradient(135deg,#1A0146 0%,#0d0222 60%,#1a1060 100%)` |

---

## Part 1 — Autopilot Redesign

### 1a. "Scan Jobs Only" secondary button

In the dark command header (left section), below the Start/Pause button, add a secondary ghost button:

```jsx
<button className="mt-2 flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border transition"
  style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.7)'}}
  onClick={()=>toast('Scanning market — no applications sent','search')}>
  <Icon name="search" size={14}/> Scan Jobs Only
</button>
```

### 1b. Autopilot Status Card

Replace the empty grid right-col placeholder (currently `<Card className="lg:col-span-2 p-6"/>`) — wait, that was replaced by Activity Log in Task 7. The status card should be a new row ABOVE the preferences grid (below the tab bar, before the grid — but only visible on the "activity" tab).

Add a Status Card row above the preferences/activity grid when `apTab === 'activity'`:

```
┌─────────────────────────────────────────────────┐
│ ● Active  │ Last scan: 2 min ago                │
│ Scanned: 127 · Recommended: 16 · Applied: 7 · Saved: 12 │
└─────────────────────────────────────────────────┘
```

Style: white card, `border-radius: 16px`, single row with status pill left, stats right.

```jsx
<Card className="p-4 flex items-center justify-between flex-wrap gap-3">
  <div className="flex items-center gap-3">
    <span className="flex items-center gap-1.5 text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"/> {active?'Active — Scanning':'Paused'}
    </span>
    <span className="text-sm text-slate-400">Last scan: {active?'2 min ago':'—'}</span>
  </div>
  <div className="flex items-center gap-5 text-center">
    {[
      {n:scanned.toLocaleString(), l:'Scanned', c:'text-slate-800'},
      {n:'16', l:'Recommended', c:'text-brand-700'},
      {n:appliedCount, l:'Applied', c:'text-teal-600'},
      {n:'12', l:'Saved', c:'text-amber-600'},
    ].map(({n,l,c})=>(
      <div key={l}>
        <div className={`text-lg font-extrabold ${c}`}>{n}</div>
        <div className="text-xs text-slate-400">{l}</div>
      </div>
    ))}
  </div>
</Card>
```

### 1c. Rules Panel Redesign

Replace the current Preferences Card content (left col) with a richer rules panel.

**Structure (inside the Card):**
1. Header: lock icon + "Your Rules" (kept)
2. Minimum Salary slider (kept, RM)
3. Preferred Location select (kept)
4. **Work Arrangement:** 3 pill chips — Remote / Hybrid / Onsite (multi-select state)
5. **Employment Type:** 4 pill chips — Full-time / Part-time / Internship / Contract
6. **Experience Level:** 5 pill chips — Entry / Junior / Mid / Senior / Lead
7. **Company Size:** 4 pill chips — Startup / SME / Enterprise / Any
8. **Industry:** dropdown select (Tech / Fintech / Healthcare / SaaS / E-commerce / Any)
9. **Match Threshold:** 4 pill selector — 70% / 80% / 90% / 95%
10. **Toggle row:** Visa Sponsorship, Relocation, Exclude Weekend, Exclude Shift (use `.ap-toggle`)
11. **Excluded Companies / Keywords:** simple text input tags (comma-separated display)
12. **"Advanced AI Rules"** card at bottom:
```jsx
<div className="rounded-xl border border-dashed border-brand-200 bg-brand-50 p-4">
  <div className="flex items-center gap-2 mb-1">
    <Icon name="bot" size={14} className="text-brand-600"/>
    <span className="text-sm font-bold text-brand-900">Advanced AI Rules</span>
  </div>
  <p className="text-xs text-slate-500 mb-3">Manage complex career preferences and application strategies through AI Assistant.</p>
  <button className="text-xs font-bold text-brand-600 border border-brand-200 px-3 py-1.5 rounded-lg hover:bg-brand-100 transition">
    Configure in AI Assistant →
  </button>
</div>
```

**Pill chip pattern (reusable inline):**
```jsx
// Multi-select chip group
const [workArr, setWorkArr] = useState(['Remote']);
const toggle = (arr, set, val) => set(a => a.includes(val) ? a.filter(x=>x!==val) : [...a, val]);

// Chip:
<button onClick={()=>toggle(workArr, setWorkArr, 'Remote')}
  className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${workArr.includes('Remote')
    ? 'bg-brand-700 text-white border-brand-700'
    : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300'}`}>
  Remote
</button>
```

### 1d. Activity Log Redesign

The existing Activity Log (right `lg:col-span-2` card) gets these upgrades:

**Default view:** Show only 5 items. "See All Activity →" button below reveals all.

**Activity Filters bar** (above items):
- Status pills: All / Applied / Saved / Recommended / Skipped
- Match score pills: 70+ / 80+ / 90+
- Date: Today / 7 Days / 30 Days

**Skipped Reason display:** For skipped items, show the reason in a muted tag below the note:
```jsx
{!item.applied && <span className="text-xs text-rose-400 mt-0.5">Reason: {item.skipReason || 'Low match score'}</span>}
```

**Add `skipReason` to INBOX_ITEMS mock data.**

**Activity Summary Bar** (at bottom, styled):
```jsx
<div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-100">
  {[{l:'Scanned',n:scanned.toLocaleString()},{l:'Recommended',n:16},{l:'Applied',n:appliedCount},{l:'Skipped',n:3}].map(...)
```

---

## Part 2 — Market Intelligence Redesign

### 2a. `FairPayContent` → Career Worth Dashboard

**Replace** the old FairPayContent body with a new "Career Worth" layout:

**Top: 3 value cards in a row**
```
Current Worth    Target Worth     Potential Worth
RM 92,000        RM 120,000       RM 145,000
Your profile     +30% achievable   Full potential
```
Color: Current = slate, Target = brand purple, Potential = gold

**Below: Breakdown Card** (horizontal bar chart, CSS only)
6 contribution rows:
- Experience (5 yrs): +RM 28k
- Skills (Figma, Systems): +RM 18k
- Industry Premium (Fintech): +RM 12k
- Location (KL): +RM 8k
- Leadership (potential): +RM 15k
- Market Demand: +RM 11k

Each row: label + bar (width = % of max contribution) + value

**Career Value Explorer** (below breakdown):
Role switcher row — 6 roles as pill tabs. Active role shows updated stats table:

| Metric | Value |
|--------|-------|
| Salary Range | RM 85k–105k |
| Market Demand | Very High |
| Growth Potential | Strong |
| Remote Opportunities | 68% |
| Hiring Trend | +24% YoY |

**Market Value Growth Simulator** (replaces Skill Payoff):
4 scenario cards in a 2×2 grid:

| Scenario | Skills Added | Value |
|----------|-------------|-------|
| Current | — | RM 92k |
| + Leadership | Team Leadership | RM 104k |
| + Leadership + Strategy | + Product Strategy | RM 118k |
| + AI Product Skills | + AI/Prompt Design | RM 128k |

Each card: scenario number + badge + skill tags + value in brand purple + "+X% growth" teal badge.

### 2b. `MarketSignalsContent` → Enhanced Market Signals

Keep existing structure (Job Market Ticker, Skill Demand Index, Location Index). Add new sections:

**Emerging Roles Section** (new card after Job Market Ticker):
5 roles in a grid: AI Product Manager / Prompt Engineer / AI UX Designer / AI Operations Specialist / AI Business Analyst
Each: role name + demand badge (Very High/High) + hiring trend % + "Explore →" link

**Skills to Watch** (new card):
8 skills: Generative AI / Prompt Engineering / LLM Development / AI Product Strategy / System Design / Cybersecurity / Cloud Architecture / Data Engineering
Each: skill name + demand indicator bar + "Rising" / "Stable" badge

**Salary Trend Forecast** (new card):
3 time horizons: 12mo / 24mo / 36mo
CSS bar chart showing projected RM values for user's role.
Labels: Rising (green) / Stable (slate) / Declining (red)

**Industry Outlook** (new card, 5 industries):
AI → Very Strong (emerald), Cybersecurity → Strong, Fintech → Strong, Healthcare Tech → Stable, Green Tech → Emerging

**Remote Hiring Trend** (new card):
3 bars: Remote Growth +38% / Hybrid Growth +24% / Onsite -8%

**Location Opportunity Table** (upgrade existing):
Keep existing 4 locations but add columns: Avg Salary / Remote % / Competition

**AI Market Insights** (new card at bottom):
3 mock insight strings with sparkles icon. Background: brand-50.

---

## Part 3 — Jobs & Opportunities Redesign

### 3a. Community Tab

Add "Community" tab alongside existing content. State: `const [jobsTab, setJobsTab] = useState('jobs')`.

Tab bar at top of `JobsOpportunities`:
```jsx
<div className="flex gap-1 p-1 rounded-xl w-fit" style={{background:'#f1f5f9'}}>
  <button className={`market-tab ${jobsTab==='jobs'?'active':''}`} onClick={()=>setJobsTab('jobs')}>
    <Icon name="briefcase" size={13} className="inline mr-1.5"/> Jobs
  </button>
  <button className={`market-tab ${jobsTab==='community'?'active':''}`} onClick={()=>setJobsTab('community')}>
    <Icon name="users" size={13} className="inline mr-1.5"/> Community
  </button>
</div>
```

Wrap existing job content in `{jobsTab==='jobs'&&...}`.

**Community Feed** (`jobsTab==='community'`):

5 mock posts. Each post card:
```
[Avatar] Name · Title · Time
Content text (career tip, question, experience share)
[Like N] [Comment N] [Share] [Bookmark]
```

Mock `COMMUNITY_POSTS` data:
```js
const COMMUNITY_POSTS = [
  {id:1, name:'Sarah Chen', title:'Senior PM at Grab', time:'2h ago',
   content:'Just negotiated a 35% raise by showing market data from 3 different salary surveys. Data > feelings every time.',
   likes:142, comments:38, bookmarks:24, avatar:'SC'},
  {id:2, name:'Farid Azman', title:'Frontend Engineer · Open to work', time:'5h ago',
   content:'Question: Is it worth taking a 10% salary cut for a role at a top-tier company? Trying to decide between a startup at RM95k and a FAANG-adjacent role at RM86k.',
   likes:89, comments:61, bookmarks:12, avatar:'FA'},
  {id:3, name:'Priya Nair', title:'Product Designer → Design Manager', time:'1d ago',
   content:'6 months into my first Design Manager role. Biggest surprise: 70% of the job is people, not design. If you\'re aiming for DM, start building your coaching skills NOW.',
   likes:234, comments:45, bookmarks:78, avatar:'PN'},
  {id:4, name:'Wei Lin Tan', title:'UX Researcher at GoTo', time:'2d ago',
   content:'Interview tip: When they ask "Where do you see yourself in 5 years?" — answer with skills you want to build, not job titles. Showed me as growth-oriented, got the offer.',
   likes:67, comments:19, bookmarks:31, avatar:'WT'},
  {id:5, name:'Amirul Hakimi', title:'Data Analyst · Fintech', time:'3d ago',
   content:'For everyone asking about transitioning into data science: SQL + Python fundamentals took me 4 months. Got a 28% raise switching roles. Best investment of my career so far.',
   likes:198, comments:52, bookmarks:89, avatar:'AH'},
];
```

Each post card has like/bookmark state via `useState` maps.

### 3b. Job Card Redesign

Each job card gains two collapsible sections (toggled by an expand chevron):

**"Why Recommended" section:**
```jsx
<div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
  <div className="text-xs font-bold text-emerald-700 mb-2 flex items-center gap-1.5">
    <Icon name="check-circle-2" size={12}/> Why CareerGo recommends this
  </div>
  {j.reasons.map(r => <div key={r} className="text-xs text-emerald-700 flex items-center gap-1.5"><Icon name="check" size={11}/>  {r}</div>)}
</div>
```

**"Why Not Recommended" section** (shown when `j.cautions.length > 0`):
```jsx
<div className="bg-rose-50 rounded-xl p-3 border border-rose-100">
  <div className="text-xs font-bold text-rose-600 mb-2">Gaps to be aware of</div>
  {j.cautions.map(c => <div key={c} className="text-xs text-rose-500 flex items-center gap-1.5"><Icon name="alert-triangle" size={11}/> {c}</div>)}
</div>
```

Add `reasons` and `cautions` to each JOBS entry.

**Additional metadata badges** (below existing badges):
```jsx
<div className="flex gap-2 flex-wrap mt-2">
  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1">
    <Icon name="trending-up" size={11}/> Growth: {j.growth}
  </span>
  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1">
    <Icon name="award" size={11}/> Promo: {j.promo}
  </span>
  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1">
    <Icon name="signal" size={11}/> Competition: {j.competition}
  </span>
  {j.remote&&<span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
    <Icon name="globe" size={11}/> Remote friendly
  </span>}
</div>
```

**AI Match Explanation** (expandable, below why-recommended):
```jsx
<div className="border border-brand-100 rounded-xl p-3 bg-brand-50">
  <div className="text-xs font-bold text-brand-800 mb-2 flex items-center gap-1.5">
    <Icon name="sparkles" size={12}/> CareerGo AI Match Explanation
  </div>
  <p className="text-xs text-brand-700 mb-2">Your profile aligns with: {j.alignedSkills.join(' · ')}</p>
  <div className="flex items-center gap-3">
    <span className="text-xs font-bold text-brand-700">Match: {j.match}%</span>
    <span className="text-xs font-bold text-emerald-600">Career Impact: {j.impact}</span>
    <span className="text-xs font-bold text-amber-600">Outlook: {j.outlook}</span>
  </div>
</div>
```

### 3c. Filter Improvements

**Add to filter state:**
```js
const [industryFilter, setIndustryFilter] = useState('All');
const [companyFilter, setCompanyFilter] = useState('All');
const [growthFilter, setGrowthFilter] = useState(false);
```

**New filter row** (second row below existing filters):
- Industry dropdown: All / Fintech / Healthcare / SaaS / E-commerce
- Company Size dropdown: All / Startup / SME / Enterprise
- "High Growth only" toggle chip
- "Remote only" toggle chip (if not already there)

---

## Architecture Notes

### New mock data fields

Add to each `JOBS` entry:
```js
{
  reasons: ['Matches 12 verified skills','Salary exceeds expectation','High industry growth','Remote friendly'],
  cautions: ['Leadership experience gap'],
  promo: 'High',
  competition: 'Medium',
  remote: true,
  alignedSkills: ['Product Thinking','Design Systems','Stakeholder Mgmt'],
  outlook: 'Strong',
}
```

Add to `INBOX_ITEMS`:
```js
skipReason: 'Salary Too Low' // for non-applied items
```

### New constants
- `COMMUNITY_POSTS` — 5 mock community posts
- `CAREER_ROLES` — 6 role progression entries for Career Value Explorer
- `SALARY_SCENARIOS` — 4 growth simulator scenarios

### CSS additions
```css
.jobs-tab{...same pattern as .market-tab...}
/* or just reuse .market-tab class */
.community-card{transition:box-shadow 150ms;border-radius:16px;}
.community-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.08);}
.scenario-card{border-radius:14px;border:1px solid #e8e3ff;background:white;transition:border-color 150ms,box-shadow 150ms;}
.scenario-card:hover{border-color:#5B2EFF;box-shadow:0 4px 20px rgba(91,46,255,0.10);}
```

### File size projection
Batch D adds ~600–800 lines. Final size ~5,700–5,900 lines.
