# CareerGo Batch D — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Redesign Autopilot, Market Intelligence, and Jobs & Opportunities pages for hackathon demo quality.

**Architecture:** Single HTML file `c:\careergo\careergo.html` (~5,100 lines). React 18 + Babel Standalone + Tailwind CDN. All data is hardcoded mock. Branch: `candidate_dashboard`.

**Key constraints:**
- Always `<Icon name="kebab-case">` — never Lucide directly
- `.market-tab`/`.market-tab.active` already exist for tab buttons
- `.ap-toggle`/`.ap-toggle-thumb` already exist for pill toggles
- `Badge`, `Card`, `Btn`, `Icon` components available globally

---

### Task 1: CSS + mock data additions

**Files:** `c:\careergo\careergo.html` — `<style>` block + mock data section

- [ ] **Step 1: Add CSS after existing Batch C rules**

Find `.notif-dropdown` (last Batch C rule). Add after it:

```css
/* Batch D */
.community-card{border-radius:16px;background:white;border:1px solid #f1f5f9;transition:box-shadow 150ms;}
.community-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.08);}
.scenario-card{border-radius:14px;border:1px solid #ede9fe;background:white;padding:16px;transition:border-color 150ms,box-shadow 150ms;}
.scenario-card:hover{border-color:#5B2EFF;box-shadow:0 4px 20px rgba(91,46,255,0.10);}
.contrib-bar-track{height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden;flex:1;}
.contrib-bar-fill{height:100%;border-radius:3px;background:#5B2EFF;transition:width 800ms cubic-bezier(.4,0,.2,1);}
.worth-card{border-radius:16px;padding:20px;text-align:center;}
.chip-multi{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;border:1px solid;cursor:pointer;transition:all 150ms;}
.chip-multi.on{background:#5B2EFF;color:#fff;border-color:#5B2EFF;}
.chip-multi.off{background:white;color:#475569;border-color:#e2e8f0;}
.chip-multi.off:hover{border-color:#8B5CF6;}
```

- [ ] **Step 2: Add new mock data constants**

Find `const INBOX_ITEMS=[` and add `skipReason` to non-applied items (the items where `applied: false`). Add `skipReason: 'Salary Too Low'` to first skipped, `skipReason: 'Location Mismatch'` to second, etc.

Find `const JOBS=[` and add these fields to each job entry. Example for job 1:
```js
{id:1,title:'Senior Product Designer',company:'Nimbus Labs',logo:'N',salary:'$108k–$128k',type:'Remote',match:94,impact:'High',growth:'Strong',
 why:'Your design-systems work and 5 yrs in fintech line up almost exactly.',tags:['Design Systems','Figma','Fintech'],
 reasons:['Matches 12 verified skills','Salary exceeds RM target','High industry growth','Remote-first culture'],
 cautions:['Cross-team leadership gap (manageable)'],
 promo:'High',competition:'Medium',remote:true,
 alignedSkills:['Product Thinking','Design Systems','Stakeholder Mgmt'],outlook:'Strong'},
```

Add for all 5 JOBS entries (adapt reasons/cautions/promo/competition/remote/alignedSkills/outlook per role).

After INBOX_ITEMS, add these new constants:

```js
const COMMUNITY_POSTS=[
  {id:1,name:'Sarah Chen',title:'Senior PM at Grab',time:'2h ago',content:"Just negotiated a 35% raise by showing market data from 3 salary surveys. Data > feelings every time. Happy to share the template I used — comment below!",likes:142,comments:38,bookmarks:24,avatar:'SC'},
  {id:2,name:'Farid Azman',title:'Frontend Engineer · Open to work',time:'5h ago',content:"Question for the community: worth taking a 10% salary cut for a brand-name company? Torn between a startup at RM95k and a bigger tech firm at RM86k. What would you do?",likes:89,comments:61,bookmarks:12,avatar:'FA'},
  {id:3,name:'Priya Nair',title:'Product Designer → Design Manager',time:'1d ago',content:"6 months into my first Design Manager role. Biggest surprise: 70% of the job is people work, not design work. If you're aiming for DM, start building coaching skills NOW.",likes:234,comments:45,bookmarks:78,avatar:'PN'},
  {id:4,name:'Wei Lin Tan',title:'UX Researcher at GoTo',time:'2d ago',content:"Interview tip: When asked 'Where do you see yourself in 5 years?' — answer with skills, not job titles. It signals growth mindset. Got the offer using this approach.",likes:67,comments:19,bookmarks:31,avatar:'WT'},
  {id:5,name:'Amirul Hakimi',title:'Data Analyst · Fintech',time:'3d ago',content:"SQL + Python fundamentals took me 4 months to learn. Switched roles, got a 28% raise. For everyone asking about transitioning into data — just start. The compound effect is real.",likes:198,comments:52,bookmarks:89,avatar:'AH'},
];

const CAREER_ROLES=[
  {role:'Product Designer',range:'RM 72k–95k',demand:'High',growth:'Strong',remote:62,trend:'+18%'},
  {role:'Senior Product Designer',range:'RM 88k–115k',demand:'Very High',growth:'Strong',remote:68,trend:'+24%'},
  {role:'Lead Product Designer',range:'RM 105k–135k',demand:'High',growth:'Very Strong',remote:65,trend:'+19%'},
  {role:'Design Manager',range:'RM 120k–155k',demand:'High',growth:'Strong',remote:55,trend:'+22%'},
  {role:'Product Manager',range:'RM 115k–148k',demand:'Very High',growth:'Very Strong',remote:71,trend:'+31%'},
  {role:'Head of Product',range:'RM 148k–200k+',demand:'Moderate',growth:'Strong',remote:58,trend:'+15%'},
];

const SALARY_SCENARIOS=[
  {id:1,label:'Current',skills:[],value:'RM 92,000',gain:'',color:'#64748b'},
  {id:2,label:'+ Leadership',skills:['Team Leadership'],value:'RM 104,000',gain:'+13%',color:'#5B2EFF'},
  {id:3,label:'+ Strategy',skills:['Team Leadership','Product Strategy'],value:'RM 118,000',gain:'+28%',color:'#7C3AED'},
  {id:4,label:'+ AI Skills',skills:['Team Leadership','Product Strategy','AI Product Design'],value:'RM 128,000',gain:'+39%',color:'#1D9E75'},
];
```

- [ ] **Step 3: Commit**
```
git commit -m "style+data: Batch D CSS classes and mock data (COMMUNITY_POSTS, CAREER_ROLES, SALARY_SCENARIOS, JOBS fields)"
```

---

### Task 2: Autopilot — Status Card + Scan Jobs Only button

**Files:** `c:\careergo\careergo.html` — `AutopilotProxy` component

**Context:** Read `AutopilotProxy` function. The command header has a left section with title + badge + start/pause button. The tab bar is below. The status card should appear above the preferences/activity grid when `apTab==='activity'`.

- [ ] **Step 1: Add "Scan Jobs Only" button to command header**

In the left section of the dark command header (after the Start/Pause button), add:
```jsx
<button onClick={()=>toast('Scanning market — no applications sent','search')}
  className="mt-2 flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border transition"
  style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.65)'}}>
  <Icon name="search" size={13}/> Scan Jobs Only
</button>
```

- [ ] **Step 2: Add Status Card inside apTab==='activity' section**

Find `{apTab==='activity'&&(` and add the status card as first child inside that conditional, before the grid:
```jsx
<Card className="p-4 flex items-center justify-between flex-wrap gap-4">
  <div className="flex items-center gap-3">
    <span className={`flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-full ${active?'bg-emerald-50 text-emerald-600':'bg-slate-100 text-slate-500'}`}>
      <span className={`w-2 h-2 rounded-full inline-block ${active?'bg-emerald-500':'bg-slate-300'}`}/>
      {active?'Active — Scanning':'Paused'}
    </span>
    <span className="text-sm text-slate-400">Last scan: {active?'2 min ago':'—'}</span>
  </div>
  <div className="flex items-center gap-6">
    {[
      {n:scanned.toLocaleString(),l:'Scanned',c:'text-slate-800'},
      {n:'16',l:'Recommended',c:'text-brand-700'},
      {n:appliedCount,l:'Applied',c:'text-emerald-600'},
      {n:'12',l:'Saved',c:'text-amber-600'},
    ].map(({n,l,c})=>(
      <div key={l} className="text-center">
        <div className={`text-lg font-extrabold ${c}`}>{n}</div>
        <div className="text-xs text-slate-400">{l}</div>
      </div>
    ))}
  </div>
</Card>
```

- [ ] **Step 3: Commit**
```
git commit -m "feat: autopilot scan-jobs-only button + status card (batch D)"
```

---

### Task 3: Autopilot — Rules Panel Redesign

**Files:** `c:\careergo\careergo.html` — Preferences Card inside `AutopilotProxy`

**Context:** The Preferences Card (`<Card className="p-6 space-y-5">`) is the left col of the `lg:grid-cols-3` grid. Read it before editing to know the current exact content.

- [ ] **Step 1: Read current Preferences Card content**

Find and read the Preferences Card in AutopilotProxy (~lines 4460–4520 after Batch C edits).

- [ ] **Step 2: Replace Preferences Card content with expanded rules**

Replace everything inside `<Card className="p-6 space-y-5">` with the new rules panel. Add state vars at top of `AutopilotProxy`:

```jsx
const [workArr,setWorkArr]=useState(['Remote']);
const [empType,setEmpType]=useState(['Full-time']);
const [expLevel,setExpLevel]=useState(['Mid']);
const [compSize,setCompSize]=useState(['Any']);
const [industry,setIndustry]=useState('Any');
const [matchThreshold,setMatchThreshold]=useState(90);
const [visaToggle,setVisaToggle]=useState(false);
const [relocToggle,setRelocToggle]=useState(false);
const [excludedCo,setExcludedCo]=useState('');
const [excludedKw,setExcludedKw]=useState('');
```

Helper function (add inside AutopilotProxy before return):
```jsx
const toggleChip=(arr,set,val)=>set(a=>a.includes(val)?a.filter(x=>x!==val):[...a,val]);
```

New Preferences Card content:

```jsx
<Card className="p-5 space-y-4 overflow-y-auto" style={{maxHeight:600}}>
  <h3 className="font-bold text-slate-900 flex items-center gap-2">
    <Icon name="lock" size={15} className="text-brand-600"/> Your Rules
  </h3>

  {/* Min salary */}
  <div>
    <div className="flex justify-between text-sm mb-1.5">
      <span className="font-medium text-slate-600">Minimum salary</span>
      <span className="font-bold text-brand-700">RM {minPay}k+</span>
    </div>
    <input type="range" min="60" max="150" value={minPay} onChange={e=>setMinPay(+e.target.value)} className="w-full accent-brand-700"/>
  </div>

  {/* Location */}
  <div>
    <span className="text-sm font-medium text-slate-600 block mb-1.5">Location</span>
    <select value={location} onChange={e=>setLocation(e.target.value)} className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 ring-brand-200">
      <option>Remote / KL</option><option>Remote only</option><option>Hybrid · KL</option><option>Anywhere in SEA</option>
    </select>
  </div>

  {/* Work Arrangement */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Work Arrangement</span>
    <div className="flex gap-2 flex-wrap">
      {['Remote','Hybrid','Onsite'].map(v=>(
        <button key={v} onClick={()=>toggleChip(workArr,setWorkArr,v)}
          className={`chip-multi ${workArr.includes(v)?'on':'off'}`}>{v}</button>
      ))}
    </div>
  </div>

  {/* Employment Type */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Employment Type</span>
    <div className="flex gap-2 flex-wrap">
      {['Full-time','Part-time','Internship','Contract'].map(v=>(
        <button key={v} onClick={()=>toggleChip(empType,setEmpType,v)}
          className={`chip-multi ${empType.includes(v)?'on':'off'}`}>{v}</button>
      ))}
    </div>
  </div>

  {/* Experience Level */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Experience Level</span>
    <div className="flex gap-2 flex-wrap">
      {['Entry','Junior','Mid','Senior','Lead'].map(v=>(
        <button key={v} onClick={()=>toggleChip(expLevel,setExpLevel,v)}
          className={`chip-multi ${expLevel.includes(v)?'on':'off'}`}>{v}</button>
      ))}
    </div>
  </div>

  {/* Company Size */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Company Size</span>
    <div className="flex gap-2 flex-wrap">
      {['Startup','SME','Enterprise','Any'].map(v=>(
        <button key={v} onClick={()=>toggleChip(compSize,setCompSize,v)}
          className={`chip-multi ${compSize.includes(v)?'on':'off'}`}>{v}</button>
      ))}
    </div>
  </div>

  {/* Industry */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Industry</span>
    <select value={industry} onChange={e=>setIndustry(e.target.value)} className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 ring-brand-200">
      <option>Any</option><option>Tech</option><option>Fintech</option><option>Healthcare</option><option>SaaS</option><option>E-commerce</option>
    </select>
  </div>

  {/* Match Threshold */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Auto-Apply Threshold</span>
    <div className="flex gap-2">
      {[70,80,90,95].map(v=>(
        <button key={v} onClick={()=>setMatchThreshold(v)}
          className={`chip-multi flex-1 justify-center ${matchThreshold===v?'on':'off'}`}>{v}%</button>
      ))}
    </div>
  </div>

  {/* Toggles */}
  <div className="space-y-3 pt-1 border-t border-slate-100">
    {[
      {label:'Visa Sponsorship',on:visaToggle,set:setVisaToggle},
      {label:'Open to Relocation',on:relocToggle,set:setRelocToggle},
      {label:'Exclude Weekend Work',on:noWeekend,set:setNoWeekend},
      {label:'Exclude Shift Work',on:noContracts,set:setNoContracts},
    ].map(({label,on,set})=>(
      <div key={label} className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <button onClick={()=>set(v=>!v)} className={`ap-toggle${on?' on':''}`}>
          <span className="ap-toggle-thumb"/>
        </button>
      </div>
    ))}
  </div>

  {/* Excluded companies */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">Excluded Companies</span>
    <input value={excludedCo} onChange={e=>setExcludedCo(e.target.value)} placeholder="e.g. Acme Corp, XYZ Ltd"
      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 ring-brand-200"/>
  </div>

  {/* Excluded keywords */}
  <div>
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1.5">Excluded Keywords</span>
    <input value={excludedKw} onChange={e=>setExcludedKw(e.target.value)} placeholder="e.g. Insurance Sales, MLM, Commission Only"
      className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 ring-brand-200"/>
  </div>

  {/* Advanced AI Rules */}
  <div className="rounded-xl border border-dashed border-brand-200 bg-brand-50 p-4">
    <div className="flex items-center gap-2 mb-1">
      <Icon name="bot" size={14} className="text-brand-600"/>
      <span className="text-sm font-bold text-brand-900">Advanced AI Rules</span>
    </div>
    <p className="text-xs text-slate-500 mb-3">Manage complex career preferences and application strategies through AI Assistant.</p>
    <button onClick={()=>toast('Opening AI Assistant…','bot')} className="text-xs font-bold text-brand-600 border border-brand-200 px-3 py-1.5 rounded-lg hover:bg-brand-100 transition">
      Configure in AI Assistant →
    </button>
  </div>

  <div className="flex items-center gap-2 rounded-xl p-3 text-xs font-semibold" style={{background:'rgba(29,158,117,0.1)',color:'#1D9E75'}}>
    <Icon name="check-circle" size={14}/> Rules saved · Agent respects all filters
  </div>
</Card>
```

- [ ] **Step 3: Commit**
```
git commit -m "feat: autopilot rules panel redesign with work arrangement, employment type, threshold, excludes (batch D)"
```

---

### Task 4: Autopilot — Activity Log Redesign

**Files:** `c:\careergo\careergo.html` — Activity Log Card in `AutopilotProxy` (right `lg:col-span-2`)

**Context:** The Activity Log card currently shows all INBOX_ITEMS. Read it before editing.

- [ ] **Step 1: Read current Activity Log card**

Find the `<Card className="lg:col-span-2 p-6">` that contains "Agent Activity Log" and all INBOX_ITEMS.

- [ ] **Step 2: Add state vars to AutopilotProxy for activity filters**

After existing state vars, add:
```jsx
const [actFilter,setActFilter]=useState('All');
const [scoreFilter,setScoreFilter]=useState(0);
const [dateFilter,setDateFilter]=useState('Today');
const [showAll,setShowAll]=useState(false);
```

- [ ] **Step 3: Replace Activity Log card content**

Replace the entire `<Card className="lg:col-span-2 p-6">` content with:

```jsx
<Card className="lg:col-span-2 p-6 flex flex-col">
  <div className="flex items-center justify-between mb-3">
    <h3 className="font-bold text-slate-900 flex items-center gap-2">
      <Icon name="activity" size={15} className="text-brand-600"/> Agent Activity Log
    </h3>
    <span className="text-xs text-slate-400">Today, {new Date().toLocaleDateString()}</span>
  </div>

  {/* Filters */}
  <div className="space-y-2 mb-4">
    <div className="flex gap-1.5 flex-wrap">
      {['All','Applied','Saved','Recommended','Skipped'].map(f=>(
        <button key={f} onClick={()=>setActFilter(f)}
          className={`text-xs font-semibold px-3 py-1 rounded-full border transition ${actFilter===f?'bg-brand-700 text-white border-brand-700':'bg-white text-slate-500 border-slate-200 hover:border-brand-300'}`}>
          {f}
        </button>
      ))}
    </div>
    <div className="flex gap-1.5 flex-wrap">
      {[0,70,80,90].map(s=>(
        <button key={s} onClick={()=>setScoreFilter(s)}
          className={`text-xs font-semibold px-3 py-1 rounded-full border transition ${scoreFilter===s?'bg-slate-800 text-white border-slate-800':'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>
          {s===0?'All scores':`${s}%+`}
        </button>
      ))}
      {['Today','7 Days','30 Days'].map(d=>(
        <button key={d} onClick={()=>setDateFilter(d)}
          className={`text-xs font-semibold px-3 py-1 rounded-full border transition ${dateFilter===d?'bg-slate-800 text-white border-slate-800':'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>
          {d}
        </button>
      ))}
    </div>
  </div>

  {/* Activity items */}
  <div className="space-y-2 flex-1">
    {(showAll?INBOX_ITEMS:INBOX_ITEMS.slice(0,5)).map(item=>(
      <div key={item.id} className="flex items-start gap-3 p-3.5 rounded-xl border transition hover:shadow-sm"
        style={{borderColor:item.applied?'rgba(29,158,117,0.2)':'rgba(239,159,39,0.2)',background:item.applied?'rgba(29,158,117,0.04)':'rgba(239,159,39,0.04)'}}>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.applied?'bg-emerald-100 text-emerald-600':'bg-amber-100 text-amber-600'}`}>
          <Icon name={item.applied?'check':'shield'} size={14}/>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-800 text-sm">{item.title}</span>
            <span className="text-xs text-slate-400">· {item.company}</span>
            <Badge tone={item.match>=90?'green':'brand'}>{item.match}% fit</Badge>
            {item.applied?<Badge tone="green">Applied</Badge>:<Badge tone="amber">Held by rules</Badge>}
          </div>
          <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
          {!item.applied&&item.skipReason&&(
            <span className="text-xs text-rose-400 mt-0.5 block">Reason: {item.skipReason}</span>
          )}
        </div>
        <span className="text-xs text-slate-400 shrink-0">{item.time}</span>
      </div>
    ))}
  </div>

  {!showAll&&INBOX_ITEMS.length>5&&(
    <button onClick={()=>setShowAll(true)} className="mt-3 text-sm font-semibold text-brand-600 hover:underline text-center w-full">
      See All Activity ({INBOX_ITEMS.length} entries) →
    </button>
  )}

  {/* Summary bar */}
  <div className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-100">
    {[
      {l:'Scanned',n:scanned.toLocaleString()},
      {l:'Recommended',n:16},
      {l:'Applied',n:appliedCount},
      {l:'Skipped',n:3},
    ].map(({l,n})=>(
      <div key={l} className="text-center">
        <div className="text-base font-extrabold text-slate-800">{n}</div>
        <div className="text-xs text-slate-400">{l}</div>
      </div>
    ))}
  </div>
</Card>
```

- [ ] **Step 4: Commit**
```
git commit -m "feat: autopilot activity log with filters, show-5-default, summary bar (batch D)"
```

---

### Task 5: Market Intelligence — Career Worth Dashboard (My Value tab)

**Files:** `c:\careergo\careergo.html` — `FairPayContent` component

**Context:** `FairPayContent` is the content of the "My Value" tab in `MarketIntelligence`. It currently shows a Market Value Meter, skill payoff calculator, compensation breakdown, and pay growth projection. Find `function FairPayContent` and read it fully before editing.

Replace the ENTIRE body of `FairPayContent` with:

```jsx
function FairPayContent(){
  const [roleIdx,setRoleIdx]=useState(1); // default to Senior PD
  const role=CAREER_ROLES[roleIdx];

  return (
    <div className="space-y-6">

      {/* Career Worth Dashboard */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-slate-900">Career Worth Dashboard</h2>
          <span className="text-xs text-slate-400">Based on your verified profile · KL Market</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            {label:'Current Worth',value:'RM 92,000',sub:'Your profile today',bg:'#f8fafc',border:'#e2e8f0',vc:'#1e293b'},
            {label:'Target Worth',value:'RM 120,000',sub:'+30% achievable',bg:'#f4f0ff',border:'#c4b5fd',vc:'#5B2EFF'},
            {label:'Potential Worth',value:'RM 145,000',sub:'Full skill potential',bg:'#fffbeb',border:'#fde68a',vc:'#FDBA2D'},
          ].map(w=>(
            <div key={w.label} className="worth-card" style={{background:w.bg,border:`1px solid ${w.border}`}}>
              <p className="text-xs font-semibold text-slate-400 mb-1">{w.label}</p>
              <p className="text-2xl font-extrabold" style={{color:w.vc}}>{w.value}</p>
              <p className="text-xs text-slate-400 mt-1">{w.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contribution Breakdown */}
      <Card className="p-5">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Icon name="pie-chart" size={15} className="text-brand-600"/> Value Breakdown</h3>
        <div className="space-y-3">
          {[
            {label:'Experience (5 yrs)',value:28000,max:30000},
            {label:'Skills (Figma, Systems, Research)',value:18000,max:30000},
            {label:'Industry Premium (Fintech)',value:12000,max:30000},
            {label:'Location (Kuala Lumpur)',value:8000,max:30000},
            {label:'Leadership Potential',value:15000,max:30000},
            {label:'Market Demand',value:11000,max:30000},
          ].map(c=>(
            <div key={c.label} className="flex items-center gap-3">
              <span className="text-sm text-slate-600 w-52 shrink-0">{c.label}</span>
              <div className="contrib-bar-track">
                <div className="contrib-bar-fill" style={{width:`${(c.value/c.max)*100}%`}}/>
              </div>
              <span className="text-sm font-bold text-slate-700 w-20 text-right shrink-0">+RM {(c.value/1000).toFixed(0)}k</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Career Value Explorer */}
      <Card className="p-5">
        <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Icon name="layers" size={15} className="text-brand-600"/> Career Value Explorer</h3>
        <div className="flex gap-1.5 flex-wrap mb-4">
          {CAREER_ROLES.map((r,i)=>(
            <button key={r.role} onClick={()=>setRoleIdx(i)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${roleIdx===i?'bg-brand-700 text-white border-brand-700':'bg-white text-slate-600 border-slate-200 hover:border-brand-300'}`}>
              {r.role}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {label:'Salary Range',value:role.range,icon:'banknote'},
            {label:'Market Demand',value:role.demand,icon:'trending-up'},
            {label:'Growth Potential',value:role.growth,icon:'rocket'},
            {label:'Remote Opps',value:`${role.remote}%`,icon:'globe'},
            {label:'Hiring Trend',value:role.trend,icon:'bar-chart'},
          ].map(m=>(
            <div key={m.label} className="bg-slate-50 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1"><Icon name={m.icon} size={12}/>{m.label}</div>
              <div className="text-sm font-bold text-slate-800">{m.value}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Market Value Growth Simulator */}
      <Card className="p-5">
        <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2"><Icon name="zap" size={15} className="text-amber-500"/> Market Value Growth Simulator</h3>
        <p className="text-sm text-slate-400 mb-4">See how adding skills compounds your career worth</p>
        <div className="grid grid-cols-2 gap-3">
          {SALARY_SCENARIOS.map(s=>(
            <div key={s.id} className="scenario-card">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400">Scenario {s.id}</span>
                {s.gain&&<span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{background:'rgba(29,158,117,0.1)',color:'#1D9E75'}}>{s.gain} growth</span>}
              </div>
              <div className="text-xl font-extrabold mb-2" style={{color:s.color}}>{s.value}</div>
              {s.skills.length>0
                ? <div className="flex flex-wrap gap-1">{s.skills.map(sk=><span key={sk} className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{sk}</span>)}</div>
                : <span className="text-xs text-slate-400">Current profile</span>}
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}
```

- [ ] **Step 1: Read current `FairPayContent` function fully**
- [ ] **Step 2: Replace entire `FairPayContent` body with the new version above**
- [ ] **Step 3: Commit**
```
git commit -m "feat: market intelligence career worth dashboard, value explorer, growth simulator (batch D)"
```

---

### Task 6: Market Intelligence — Enhanced Market Signals

**Files:** `c:\careergo\careergo.html` — `MarketSignalsContent` component

**Context:** `MarketSignalsContent` is the "Market Signals" tab content. It currently shows: subtitle, Job Market Ticker, Skill Demand Index, Industry Growth Tracker, Location Opportunity Index, Future Outlook. Read the function fully before editing.

Add new sections AFTER the existing content (append, don't replace):

After the last existing card (Future Outlook or Location Index), add:

**Section: Emerging Roles**
```jsx
<Card className="p-5">
  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Icon name="sparkles" size={15} className="text-brand-600"/> Emerging Roles in Your Field</h3>
  <div className="space-y-3">
    {[
      {role:'AI Product Manager',demand:'Very High',trend:'+67%',hot:true},
      {role:'Prompt Engineer',demand:'Very High',trend:'+89%',hot:true},
      {role:'AI UX Designer',demand:'High',trend:'+44%',hot:true},
      {role:'AI Operations Specialist',demand:'High',trend:'+38%',hot:false},
      {role:'AI Business Analyst',demand:'High',trend:'+31%',hot:false},
    ].map(r=>(
      <div key={r.role} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-brand-50 transition">
        <div className="flex items-center gap-2">
          {r.hot&&<span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"/>}
          <span className="text-sm font-semibold text-slate-800">{r.role}</span>
          <Badge tone={r.demand==='Very High'?'green':'brand'}>{r.demand}</Badge>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-emerald-600">{r.trend}</span>
          <button onClick={()=>toast(`Exploring ${r.role} opportunities…`,'search')} className="text-xs text-brand-600 font-semibold hover:underline">Explore →</button>
        </div>
      </div>
    ))}
  </div>
</Card>
```

**Section: Skills to Watch**
```jsx
<Card className="p-5">
  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Icon name="eye" size={15} className="text-amber-500"/> Skills to Watch</h3>
  <div className="space-y-3">
    {[
      {skill:'Generative AI',pct:94,trend:'Rising'},
      {skill:'Prompt Engineering',pct:89,trend:'Rising'},
      {skill:'LLM Development',pct:82,trend:'Rising'},
      {skill:'AI Product Strategy',pct:76,trend:'Rising'},
      {skill:'System Design',pct:71,trend:'Stable'},
      {skill:'Cybersecurity',pct:68,trend:'Rising'},
      {skill:'Cloud Architecture',pct:65,trend:'Stable'},
    ].map(s=>(
      <div key={s.skill} className="flex items-center gap-3">
        <span className="text-sm text-slate-700 w-44 shrink-0">{s.skill}</span>
        <div className="contrib-bar-track flex-1">
          <div className="contrib-bar-fill" style={{width:`${s.pct}%`,background:s.trend==='Rising'?'#5B2EFF':'#64748b'}}/>
        </div>
        <Badge tone={s.trend==='Rising'?'green':'slate'}>{s.trend}</Badge>
      </div>
    ))}
  </div>
</Card>
```

**Section: Salary Trend Forecast**
```jsx
<Card className="p-5">
  <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2"><Icon name="trending-up" size={15} className="text-emerald-600"/> Salary Trend Forecast — Product Design, KL</h3>
  <p className="text-xs text-slate-400 mb-4">Projected median for your role cluster</p>
  <div className="flex items-end gap-4">
    {[
      {period:'Now',value:92,label:'RM 92k',color:'#8B5CF6'},
      {period:'12 Months',value:101,label:'RM 101k',color:'#5B2EFF'},
      {period:'24 Months',value:112,label:'RM 112k',color:'#1D9E75'},
      {period:'36 Months',value:128,label:'RM 128k',color:'#FDBA2D'},
    ].map((b,i)=>(
      <div key={b.period} className="flex-1 flex flex-col items-center gap-1">
        <span className="text-xs font-bold" style={{color:b.color}}>{b.label}</span>
        <div className="w-full rounded-t-lg" style={{height:`${(b.value/128)*120}px`,background:b.color,opacity:0.8+i*0.07}}/>
        <span className="text-xs text-slate-400">{b.period}</span>
        {i>0&&<Badge tone="green" className="text-xs">Rising</Badge>}
      </div>
    ))}
  </div>
</Card>
```

**Section: Industry Outlook**
```jsx
<Card className="p-5">
  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Icon name="building-2" size={15} className="text-brand-600"/> Industry Outlook</h3>
  <div className="space-y-2">
    {[
      {ind:'AI / Machine Learning',outlook:'Very Strong',pct:96,c:'#1D9E75'},
      {ind:'Cybersecurity',outlook:'Very Strong',pct:91,c:'#1D9E75'},
      {ind:'Fintech',outlook:'Strong',pct:78,c:'#5B2EFF'},
      {ind:'Healthcare Technology',outlook:'Strong',pct:74,c:'#5B2EFF'},
      {ind:'Green Technology',outlook:'Emerging',pct:62,c:'#FDBA2D'},
    ].map(x=>(
      <div key={x.ind} className="flex items-center gap-3">
        <span className="text-sm text-slate-700 flex-1">{x.ind}</span>
        <div className="contrib-bar-track w-32">
          <div className="contrib-bar-fill" style={{width:`${x.pct}%`,background:x.c}}/>
        </div>
        <span className="text-xs font-bold w-24 text-right shrink-0" style={{color:x.c}}>{x.outlook}</span>
      </div>
    ))}
  </div>
</Card>
```

**Section: AI Market Insights**
```jsx
<Card className="p-5 bg-brand-50 border border-brand-100">
  <h3 className="font-bold text-brand-900 mb-3 flex items-center gap-2"><Icon name="sparkles" size={15} className="text-brand-600"/> AI Market Insights</h3>
  <div className="space-y-2.5">
    {[
      'AI Product Management demand is projected to grow significantly over the next 3 years as companies accelerate AI adoption.',
      'Cybersecurity remains one of the most resilient technology sectors, with demand consistently outpacing supply.',
      'Remote-first opportunities continue growing for senior professionals — 68% of Product Design roles above RM100k now offer remote options.',
      'Professionals with both design and AI literacy are commanding a 28–40% market premium in the SEA region.',
    ].map((insight,i)=>(
      <div key={i} className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-brand-100">
        <Icon name="lightbulb" size={14} className="text-brand-600 mt-0.5 shrink-0"/>
        <p className="text-sm text-brand-900">{insight}</p>
      </div>
    ))}
  </div>
</Card>
```

- [ ] **Step 1: Read current `MarketSignalsContent` function**
- [ ] **Step 2: Append the 5 new sections at the end of the function's return (before closing `</div>`)**
- [ ] **Step 3: Commit**
```
git commit -m "feat: market signals enhanced — emerging roles, skills to watch, salary forecast, industry outlook, AI insights (batch D)"
```

---

### Task 7: Jobs — Community Tab

**Files:** `c:\careergo\careergo.html` — `JobsOpportunities` component

**Context:** `JobsOpportunities` currently has smart match banner, search+filter, and job cards. Add a tab bar and Community view.

- [ ] **Step 1: Add `jobsTab` state**

After `const [notAppliedFilter,setNotAppliedFilter]=useState(false);`, add:
```jsx
const [jobsTab,setJobsTab]=useState('jobs');
const [postLikes,setPostLikes]=useState({});
const [postBookmarks,setPostBookmarks]=useState({});
```

- [ ] **Step 2: Add tab bar at top of return, below the title**

Find the `{/* Smart match banner */}` div. Insert tab bar BEFORE it:
```jsx
<div className="flex gap-1 p-1 rounded-xl w-fit" style={{background:'#f1f5f9'}}>
  <button onClick={()=>setJobsTab('jobs')} className={`market-tab ${jobsTab==='jobs'?'active':''}`}>
    <Icon name="briefcase" size={13} className="inline mr-1.5"/> Jobs
  </button>
  <button onClick={()=>setJobsTab('community')} className={`market-tab ${jobsTab==='community'?'active':''}`}>
    <Icon name="users" size={13} className="inline mr-1.5"/> Community
  </button>
</div>
```

- [ ] **Step 3: Wrap existing content in `{jobsTab==='jobs'&&...}`**

Everything from `{/* Smart match banner */}` through the compare sticky bar (end of current return) should be wrapped in `{jobsTab==='jobs'&&(<>...</>)}`.

- [ ] **Step 4: Add Community feed**

After the jobs conditional block, add:
```jsx
{jobsTab==='community'&&(
  <div className="space-y-4">
    {/* Post composer */}
    <Card className="p-4 flex items-center gap-3">
      <Avatar name={USER.name} size="xs"/>
      <button onClick={()=>toast('Post composer coming soon','pen-line')}
        className="flex-1 text-left text-sm text-slate-400 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 hover:border-brand-300 transition">
        Share a career insight, question, or tip…
      </button>
      <Btn size="sm" onClick={()=>toast('Post created!','check')}>Post</Btn>
    </Card>
    {/* Posts */}
    {COMMUNITY_POSTS.map(post=>(
      <div key={post.id} className="community-card p-5">
        <div className="flex items-start gap-3 mb-3">
          <Avatar name={post.avatar} size="sm"/>
          <div>
            <div className="font-semibold text-slate-900 text-sm">{post.name}</div>
            <div className="text-xs text-slate-400">{post.title} · {post.time}</div>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed mb-4">{post.content}</p>
        <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
          <button onClick={()=>setPostLikes(l=>({...l,[post.id]:!l[post.id]}))}
            className={`flex items-center gap-1.5 text-sm font-medium transition ${postLikes[post.id]?'text-brand-600':'text-slate-400 hover:text-brand-600'}`}>
            <Icon name="thumbs-up" size={15}/> {post.likes+(postLikes[post.id]?1:0)}
          </button>
          <button onClick={()=>toast('Comments coming soon','message-circle')}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 font-medium transition">
            <Icon name="message-circle" size={15}/> {post.comments}
          </button>
          <button onClick={()=>toast('Post shared!','share')}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 font-medium transition">
            <Icon name="share-2" size={15}/> Share
          </button>
          <button onClick={()=>setPostBookmarks(b=>({...b,[post.id]:!b[post.id]}))}
            className={`flex items-center gap-1.5 text-sm font-medium ml-auto transition ${postBookmarks[post.id]?'text-amber-500':'text-slate-400 hover:text-amber-500'}`}>
            <Icon name={postBookmarks[post.id]?'bookmark-check':'bookmark'} size={15}/>
            {post.bookmarks+(postBookmarks[post.id]?1:0)}
          </button>
        </div>
      </div>
    ))}
  </div>
)}
```

- [ ] **Step 5: Commit**
```
git commit -m "feat: jobs community tab with LinkedIn-style feed and interactions (batch D)"
```

---

### Task 8: Jobs — Card Redesign (Why Recommended + metadata + AI Explanation)

**Files:** `c:\careergo\careergo.html` — job card render loop in `JobsOpportunities`

**Context:** Each job card is inside `{list.map(j=>(...))}`. Read the current card structure first. The JOBS data now has `reasons`, `cautions`, `promo`, `competition`, `remote`, `alignedSkills`, `outlook` fields (added in Task 1).

- [ ] **Step 1: Read current job card structure**

Read the `list.map(j=>...)` section to see exact current structure.

- [ ] **Step 2: Add `expandedJob` state for card expansion**

Add: `const [expandedJob,setExpandedJob]=useState(null);`

- [ ] **Step 3: Update each job card**

Inside the card (after the existing "Why it fits" box and tags), add three new sections:

**Additional metadata badges:**
```jsx
<div className="flex flex-wrap gap-1.5 mt-2">
  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1">
    <Icon name="trending-up" size={11}/> Promo: {j.promo||'High'}
  </span>
  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1">
    <Icon name="signal" size={11}/> Competition: {j.competition||'Medium'}
  </span>
  {j.remote&&<span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
    <Icon name="globe" size={11}/> Remote
  </span>}
</div>
```

**Expand/collapse toggle:**
```jsx
<button onClick={()=>setExpandedJob(expandedJob===j.id?null:j.id)}
  className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 mt-3 hover:underline">
  <Icon name={expandedJob===j.id?'chevron-up':'chevron-down'} size={13}/>
  {expandedJob===j.id?'Show less':'Full AI analysis'}
</button>
```

**Expanded content (show when `expandedJob===j.id`):**
```jsx
{expandedJob===j.id&&(
  <div className="mt-3 space-y-3">
    {j.reasons&&j.reasons.length>0&&(
      <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
        <div className="text-xs font-bold text-emerald-700 mb-2 flex items-center gap-1.5">
          <Icon name="check-circle-2" size={12}/> Why CareerGo recommends this
        </div>
        {j.reasons.map(r=>(
          <div key={r} className="text-xs text-emerald-700 flex items-center gap-1.5 mb-0.5">
            <Icon name="check" size={11}/> {r}
          </div>
        ))}
      </div>
    )}
    {j.cautions&&j.cautions.length>0&&(
      <div className="bg-rose-50 rounded-xl p-3 border border-rose-100">
        <div className="text-xs font-bold text-rose-600 mb-2 flex items-center gap-1.5">
          <Icon name="alert-triangle" size={12}/> Gaps to be aware of
        </div>
        {j.cautions.map(c=>(
          <div key={c} className="text-xs text-rose-500 flex items-center gap-1.5 mb-0.5">
            <Icon name="alert-triangle" size={11}/> {c}
          </div>
        ))}
      </div>
    )}
    <div className="border border-brand-100 rounded-xl p-3 bg-brand-50">
      <div className="text-xs font-bold text-brand-800 mb-2 flex items-center gap-1.5">
        <Icon name="sparkles" size={12}/> CareerGo AI Match Explanation
      </div>
      <p className="text-xs text-brand-700 mb-2">Your profile aligns with: {(j.alignedSkills||[]).join(' · ')}</p>
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-xs font-bold text-brand-700">Match: {j.match}%</span>
        <span className="text-xs font-bold text-emerald-600">Impact: {j.impact}</span>
        <span className="text-xs font-bold text-amber-600">Outlook: {j.outlook||'Strong'}</span>
      </div>
    </div>
  </div>
)}
```

- [ ] **Step 4: Add filter improvements**

Add after existing filter chips in the filter card:
```jsx
{/* Second filter row */}
<div className="flex gap-2 flex-wrap pt-2 border-t border-slate-100">
  <select value={industryFilter||'All'} onChange={e=>setIndustryFilter(e.target.value)}
    className="text-sm bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none text-slate-600">
    <option value="All">All Industries</option>
    <option>Fintech</option><option>Healthcare</option><option>SaaS</option><option>E-commerce</option>
  </select>
  <select value={companyFilter||'All'} onChange={e=>setCompanyFilter(e.target.value)}
    className="text-sm bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none text-slate-600">
    <option value="All">All Company Sizes</option>
    <option>Startup</option><option>SME</option><option>Enterprise</option>
  </select>
</div>
```

Add state vars `industryFilter` and `companyFilter` at top of `JobsOpportunities`.

- [ ] **Step 5: Commit**
```
git commit -m "feat: job card why-recommended, why-not, AI match explanation, expanded metadata, filter improvements (batch D)"
```

---

### Task 9: Final verification + push

- [ ] **Step 1: Check git log**
```
git log --oneline -10
```

- [ ] **Step 2: Verify file is valid** (no obvious JSX errors — check for unclosed tags by reading the last 50 lines of the file)

- [ ] **Step 3: Push to GitHub**
```
git push origin candidate_dashboard
```
