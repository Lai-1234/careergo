# CareerGo Feature Recovery and Migration Inventory

Last updated: 2026-07-01

## Recovery Context

This document is the master reference for restoring the original CareerGo functionality into the new premium redesign. The goal is not to restore the old interface. The goal is:

Current premium UI + original complete functionality = definitive CareerGo.

Sources reviewed:

- Conversation history from the original CareerGo build and employer dashboard work.
- Current workspace on `redesign-v3`, including `app.js`, `index.html`, `dashboard.html`, `jobs.html`, `companies.html`, `universities.html`, `vera.html`, and `employers.html`.
- Original merged single-file app from `HEAD:careergo.html` / `main`.
- Local `employee_dashboard` branch implementation.
- Git history from initial prototype through Batches A-F and employer dashboard commits.
- `docs/superpowers/specs/*` and implementation plans for Batches A-D.

Current state note: the current redesign is a slimmer static multi-page website. The previous full Career OS existed mostly inside the React/Babel single-file app (`careergo.html` / mirrored `index.html`) and included far more candidate, employer, AI, profile, market, and automation workflows.

Status legend:

- ✅ Fully Preserved: current redesign still has the core feature and workflow.
- 🟡 Partially Preserved: current redesign keeps a simplified version but lost important states, logic, or subflows.
- 🔴 Missing: feature is absent from the current redesign.
- 🔵 Improved: current redesign offers a better version of the old feature.
- ⚪ Needs Rewrite: old implementation exists conceptually but should be rebuilt cleanly for the new architecture.

## Current Version Snapshot

The current redesign contains these pages:

- `index.html`: landing page, featured jobs, company/university comparison.
- `jobs.html`: searchable job list, job detail, Vera recommendation, save/apply local state.
- `companies.html`: company directory, company detail, reviews, write-review modal.
- `universities.html`: university directory, university detail, reviews, write-review modal.
- `dashboard.html`: simple personal dashboard with readiness, market value, saved roles, applications, weekly mission, application tracker.
- `vera.html`: Coach Vera chat with quick prompts and local chat history.
- `employers.html`: employer marketing/info page with basic hiring metrics.
- `app.js`: local mock data, localStorage state, rendering logic.

Major current limitation: the new redesign has better visual polish and clearer public-site structure, but it removed most of the original app-shell functionality, onboarding, dashboards, career intelligence, market intelligence, Autopilot, employer portal, and detailed AI workflows.

## Recovered Feature Inventory

### Candidate and Student Experience

| Feature Name | Purpose | User Value | Where It Existed | Completion Status | Dependencies | Related Components | Related Pages | Backend Requirements | AI Requirements | Priority |
|---|---|---|---|---|---|---|---|---|---|---|
| Public Landing Page | Explain CareerGo as a Career OS and convert users to candidate/employer flows. | Makes the product understandable before signup. | `LandingPage`, `HeroSection`, `InsightsStrip`, `FeaturesSection`, `SimulationSection`, `EmployerSection`, `FAQSection`, `CTASection`. | Implemented in original; redesigned in current. | Mock stats, routing, language state. | `LandingNav`, `LogoFull`, `Btn`, `Card`, `CareerSimWidget`. | Home / landing. | CMS/content API later. | Vera positioning copy, no live AI needed. | P1 |
| Landing Scroll Animations | Add polished reveal/stagger/hero particles. | Makes first impression feel premium. | Original landing CSS and hero particle components. | Implemented. | IntersectionObserver, CSS keyframes. | `HeroParticles`, reveal classes. | Home. | None. | None. | P2 |
| Language Toggle | Toggle English/BM on landing and show app-level coming-soon toast. | Supports Malaysian audience and demo localization. | `LANG`, `useT`, `toggleLang`. | Implemented. | Translation keys. | `LandingNav`, `FooterSection`. | Landing/auth. | Translation store later. | Optional translation AI. | P2 |
| Authentication: Login | Mock login into candidate app. | Lets demo user enter full Career OS. | `LoginPage`, `AuthShell`. | Implemented as mock. | Local state router. | `AuthShell`, `Btn`. | Login. | Real auth, sessions, password reset. | None. | P0 |
| Authentication: Register | Candidate/employer account creation path. | Lets different user types start correct onboarding. | `RegisterPage`. | Implemented as mock. | Role selection. | `AuthShell`. | Register. | User table, role table, email verification. | Optional onboarding personalization. | P0 |
| Candidate Onboarding | Multi-step setup: upload resume, goals, skills check, AI analysis, ready state. | Creates initial profile, scores, and personalization. | `CandidateOnboarding`, `CAND_STEPS`, `SKILL_OPTIONS`, `GOAL_ROLES`. | Implemented as mock. | File input, profile state, scoring mock. | Stepper, upload UI, skill chips. | Candidate onboarding. | Resume upload storage, profile DB, analysis records. | Resume parsing, skill extraction, score generation. | P0 |
| Employer Onboarding | Multi-step setup: company info, industry, hiring goals, first job, launch. | Lets employers reach portal with useful seeded context. | `EmployerOnboarding`, `EMP_STEPS`, `INDUSTRIES`. | Implemented as mock. | Company/job mock data. | Stepper, form cards. | Employer onboarding. | Company DB, employer user, role records. | JD quality analysis, hiring goal suggestions. | P1 |
| App Shell: Candidate OS | Sidebar, topbar, notifications, user state, view router. | Gives product a real logged-in workspace. | `CandidateApp`, `CANDIDATE_NAV`, `NotificationBell`. | Implemented. | React state, localStorage. | Sidebar nav, notification dropdown. | Candidate app. | Session/user preferences. | AI notification generation later. | P0 |
| Guided Onboarding Tour | 6-step spotlight tour through core modules. | Helps first-time users understand the product quickly. | `OnboardingTour`, `TOUR_STEPS`, `data-tour` attributes. | Implemented. | `localStorage cg_tour_done`, DOM measurements. | Tour overlay, tooltip, spotlight. | Candidate app. | User preference for completed tour. | None. | P1 |
| Candidate Dashboard | Main OS overview with career health, metrics, activity, futures, Vera. | Shows next actions and career state at a glance. | `CandidateDashboard`, `DashHero`, `CareerHealthRing`, `StatCard`. | Implemented. | `USER`, `CAREER_PATHS`, weekly deltas. | Metric cards, activity cards, futures cards, Vera widget. | Dashboard. | Profile, applications, jobs, coach tasks. | Data-aware daily insight. | P0 |
| Career Health Ring | Composite ring using career score, ATS score, readiness. | Makes readiness understandable in one score. | `CareerHealthRing`, dashboard hero. | Implemented. | `USER.careerScore`, `USER.atsScore`, `USER.readiness`. | SVG ring. | Dashboard. | Score records. | Score explanation. | P1 |
| Dashboard Metric Tooltips | Explain Career Score, ATS, Readiness, Market Value. | Helps users trust and understand metrics. | Batch A metric cards. | Implemented. | Tooltip CSS. | `ScoreRing`, metric tooltip. | Dashboard. | Score methodology metadata. | AI explanation optional. | P1 |
| Activity Cards and Streak | Applications, saved jobs, interviews, streak with urgency. | Turns dashboard into action hub. | `CandidateDashboard`. | Implemented. | Mock application stats. | Activity cards, streak progress. | Dashboard. | Application and event data. | Next-action suggestions. | P1 |
| Career Futures | Simulated career paths with probability, salary, timeline, risk. | Helps users compare realistic career options. | `CAREER_PATHS`, `Career Futures` section, `CareerSimWidget`. | Implemented. | Profile data, salary mock. | Future path cards, probability bars. | Dashboard, landing simulation, companion. | Career path model, salary bands. | Simulation/recommendation model. | P0 |
| Career Simulation | Role simulator across Product Designer, Frontend Developer, Data Analyst, Marketing Manager. | Lets users explore paths before committing. | `CareerSimWidget`, `SIM_ROLES`. | Implemented in landing/demo. | Mock role scenarios. | Simulation cards. | Landing, Career Companion. | Career graph data. | Scenario generation. | P1 |
| Future Me / Long-Term Projection | Show future roles, compensation, risk, tradeoffs. | Makes long-term planning tangible. | Career Futures and companion planning. | Implemented conceptually. | Career paths, profile. | Future cards, roadmap. | Dashboard, companion. | Longitudinal career model. | Career planning AI. | P1 |
| Career Intelligence Profile | Source-of-truth profile/report with scores, strengths, gaps, projects, recommendations. | Helps users understand and improve employability. | `CareerProfile`, `CareerProfileV2`, `ScoreBreakdown`. | Implemented. | `USER`, skills, projects, scores. | Banner, score chips, strength dimensions, skill gaps, recommendations. | Candidate profile. | Profile DB, project records, skill evidence. | Resume/profile analysis, recommendations. | P0 |
| Career Score Breakdown | Expandable explanation of how score is computed. | Builds trust in the score. | `ScoreBreakdown`. | Implemented. | Score dimensions. | Breakdown panel. | Career Intelligence. | Score calculation service. | AI narrative explanation. | P1 |
| Resume Upload and Analysis | Upload resume, run mock analysis, benchmark profile. | Core user value for job readiness. | Batch E `CareerProfile`, resume upload/mock analysis. | Implemented. | File input, jsPDF. | Upload panel, analysis cards. | Career Intelligence. | File storage, parsing, analysis history. | Resume parsing, ATS scoring, gap detection. | P0 |
| ATS Checker | Score resume against automated screening and missing keywords. | Improves interview chances. | ATS score, Career Intelligence dimensions, onboarding. | Implemented as mock scoring. | Resume/profile data. | ATS score chip, optimization dimension. | Dashboard, profile. | Resume parser, JD comparison. | ATS keyword and structure analysis. | P0 |
| PDF Resume Export | Generate polished A4 resume PDF from profile. | Lets users act immediately with improved assets. | Batch E/F `exportPDF` with jsPDF. | Implemented. | `jsPDF` loaded in old single app. | Export button, PDF sections. | Career Intelligence. | Resume templates, storage. | Resume rewriting optional. | P1 |
| Candidate Profile and Account Page | Editable candidate account/profile settings. | Allows users to manage personal details and preferences. | `CandidateProfilePage`, candidate account page commit. | Implemented late in candidate branch. | Candidate state. | Account fields, save action. | Candidate profile/account. | User/profile settings DB. | Profile recommendations. | P0 |
| Coach Vera Widget | Contextual dashboard coach with next mission and insight. | Makes AI present without forcing chat. | Dashboard Vera widget. | Implemented. | `USER`, missions. | Vera card, online dot, mission chip. | Dashboard. | Task/missions DB. | Contextual daily insight. | P0 |
| Career Companion / Coach Vera | Full AI coach with planning, skills, interview tabs. | Guides career decisions with concrete actions. | `CareerCompanion`. | Implemented and redesigned across batches. | Chat state, profile data, checklists. | Vera header, quick replies, chat, tabs. | Career Companion. | Conversation storage, context retrieval. | LLM coaching, plans, interview feedback. | P0 |
| Vera Personalized Opening | Profile-aware opening message with quick reply chips. | Feels proactive and mentor-like. | Batch A Career Planning tab. | Implemented. | `USER` role/skills/gaps. | Quick chips, chat messages. | Career Companion. | Profile context. | Personalized coach response. | P1 |
| 90-Day Plan | Vera can build a plan to close a career gap. | Gives actionable path instead of generic advice. | Career Planning tab. | Implemented as canned flow. | Roadmap data, gaps. | Roadmap panel, missions. | Career Companion. | Plan/task DB. | Plan generation. | P0 |
| Skills Growth Tab | Personalized learning checklist with path filters and demand signals. | Shows what to learn next and why. | `CHECKLIST`, `SKILL_ROADMAP`, `SKILL_GAPS`, Career Companion skills tab. | Implemented. | `PULSE_SKILLS`, user skills. | Skill checklist, path chips, demand badges. | Career Companion / Skill Paths. | Learning resources, progress tracking. | Skill gap prioritization. | P0 |
| Learning Roadmap | Roadmap milestones and active learning plans. | Turns skill advice into trackable growth. | `ROADMAP_MILESTONES`, `ACTIVE_LEARNING_PLANS`, `SKILL_ROADMAP`. | Implemented/planned in original data and companion. | Skill data. | Milestone cards, checklist. | Companion, profile. | Learning plan DB. | Learning plan generation. | P1 |
| Weekly Missions | Weekly tasks, XP rewards, and missions. | Keeps users engaged and progressing. | `DAILY_MISSIONS`, `WEEKLY_MISSIONS`, `MISSIONS`. | Implemented as mock. | User progress. | Mission cards, XP chips. | Dashboard, Vera. | Task/progress DB. | Mission generation. | P1 |
| Interview Coach | Setup panel, role/type/focus selection, generated questions, feedback dimensions. | Helps users prepare for interviews. | Career Companion interview tab, `INTERVIEW_CATEGORIES`, `INTERVIEW_PERSONALITIES`. | Implemented. | Jobs/profile data. | Interview setup, answer textarea, feedback panel, session tracker. | Career Companion. | Practice sessions and scores. | Question generation, answer critique. | P0 |
| AI Assistant / Mission Control | General assistant workspace selector, quick actions, chat. | Centralizes AI across job, profile, market, applications. | `AIAssistant`, `AI_WORKSPACES`, `AI_QUICK_ACTIONS`, later renamed Coach Vera. | Implemented. | Workspace state, canned responses. | AI page, quick action chips. | AI Assistant / Vera. | Conversation/context store. | LLM orchestration across modules. | P0 |
| Jobs and Opportunities | Search/filter jobs, view match, save/apply, compare, not interested. | Core job discovery and application workflow. | `JobsOpportunities`, `JOBS`. | Implemented. | Job data, local state, filters. | Job cards, filters, match badges. | Jobs. | Job DB, saved jobs, applications. | Match explanation. | P0 |
| Job Match Explanation | AI explains why a job fits and what gaps exist. | Makes matching credible and actionable. | Batch D job card redesign. | Implemented. | Job profile fields. | Why recommended, why not, AI explanation. | Jobs. | Match service. | Match reasoning generation. | P0 |
| Job Compare Mode | Compare selected jobs. | Helps decision-making. | Batch C jobs improvements. | Implemented. | Selected jobs state. | Compare UI. | Jobs. | Saved comparison records. | AI compare summary. | P1 |
| Not Interested Feedback | User can mark a job as not interested and teach Autopilot. | Personalizes future recommendations. | Batch C jobs improvements. | Implemented. | Local state/toast. | Dismiss button. | Jobs. | Preference feedback DB. | Preference learning. | P1 |
| Advanced Job Filters | Industry, company size, salary, career impact, growth, difficulty, remote, work arrangement. | Lets users find better-fit roles. | Batch D filters. | Implemented. | Enriched job mock fields. | Filter rows/chips. | Jobs. | Search index. | AI filter suggestions. | P0 |
| Job Community Feed | LinkedIn-style career community posts inside jobs page. | Supports social career learning, not just job boards. | `COMMUNITY_POSTS`, Jobs Community tab. | Implemented, later removed in Batch F. | Post mock data. | Community cards, like/comment/bookmark. | Jobs / Posts. | Posts DB, reactions, comments. | Content moderation/recommendations. | P1 |
| Candidate Posts and Updates | Candidate social/professional posting surface. | Lets candidates share experience, activities, updates. | `CandidatePosts`, candidate branch. | Implemented late. | `CAND_FEED_POSTS`. | Feed post cards. | Candidate posts. | Posts/reactions DB. | Post drafting/safety. | P1 |
| Saved Jobs | Save roles and review later. | Reduces lost opportunities. | Jobs state, dashboard saved roles. | Implemented. | localStorage. | Save buttons, saved count. | Jobs, dashboard. | Saved jobs table. | Reminder suggestions. | P0 |
| Apply Now / Applications | Mark jobs as applied and track them. | Converts discovery into action. | Jobs detail, dashboard tracker, Autopilot tracker. | Implemented. | localStorage, `TRACKED_APPS`. | Apply button, application tracker. | Jobs, dashboard, Autopilot. | Applications table/statuses. | Follow-up suggestion. | P0 |
| Application Tracker | Track roles Autopilot/user applied to with status. | Gives visibility after applying. | `TRACKED_APPS`, Autopilot application tracker. | Implemented. | Application mock data. | Tracker tab/table. | Autopilot, dashboard. | Application pipeline DB. | Follow-up generation. | P0 |
| Opportunity Radar | Scan/match opportunities and market signals. | Makes discovery feel intelligent and active. | Autopilot radar and jobs scan animation. | Implemented. | CSS animation, jobs. | Radar visualization. | Jobs, Autopilot. | Job ingestion/search. | Scoring/matching. | P1 |
| Autopilot Proxy | AI job agent scans, scores, applies/saves based on rules. | Reduces job search workload. | `AutopilotProxy`. | Implemented as mock. | `INBOX_ITEMS`, rules state, `TRACKED_APPS`. | Command header, radar, rules, activity log, tracker. | Autopilot. | Job search, application automation, user rules. | Match scoring, application drafting. | P0 |
| Autopilot Rules Panel | Salary, location, work arrangement, employment type, threshold, excludes, advanced rules. | Gives users control and trust. | Batch D Autopilot rules. | Implemented. | Form state. | Rule chips, toggles, inputs. | Autopilot. | User preference DB. | Natural-language rule interpretation. | P0 |
| Autopilot Activity Log | Show scanned, recommended, saved, applied, skipped with filters. | Explains what the agent did. | `INBOX_ITEMS`, Batch D activity log. | Implemented. | Mock event feed. | Activity cards, filters, summary. | Autopilot. | Agent event log. | Reason generation. | P0 |
| Scan Jobs Only | Scan without applying. | Safer mode for skeptical users. | Batch D Autopilot. | Implemented. | Toast. | Secondary button. | Autopilot. | Job scan endpoint. | Scoring. | P1 |
| Market Intelligence Hub | Unified Fair Pay Engine + Market Pulse. | Combines worth and market direction. | `MarketIntelligence`, `FairPayContent`, `MarketSignalsContent`. | Implemented. | `PAYOFF_SKILLS`, `PULSE_JOBS`, `PULSE_SKILLS`. | Tabs, KPI summary, market cards. | Market Intelligence. | Market salary/demand data. | AI market insights. | P0 |
| Fair Pay Engine | Estimate current/fair/potential salary and pay growth. | Helps users know their worth. | `FairPayEngine`, later `FairPayContent`. | Implemented. | Salary mock data. | Gauge, pay cards, growth projection. | Market Intelligence. | Salary data provider. | Pay interpretation. | P0 |
| Career Worth Dashboard | Current/target/potential worth, breakdown, role explorer, growth simulator. | Gives concrete compensation strategy. | Batch D Market Intelligence. | Implemented. | `CAREER_ROLES`, `SALARY_SCENARIOS`. | Worth cards, bar chart, role switcher. | Market Intelligence. | Salary benchmark DB. | Scenario generation. | P0 |
| Career Value Explorer | Compare role progression salary/demand/trend. | Helps users choose path. | `CAREER_ROLES`. | Implemented. | Role data. | Role tabs, stats table. | Market Intelligence. | Role taxonomy and salary data. | Path recommendation. | P1 |
| Market Value Growth Simulator | Show salary impact of added skills. | Helps users choose high-ROI skills. | `SALARY_SCENARIOS`. | Implemented. | Skills/salary data. | Scenario cards. | Market Intelligence. | Skills-market model. | ROI explanation. | P1 |
| Career Market Pulse | Job demand, skill demand, industry growth, location opportunity, future outlook. | Shows where the market is moving. | `MarketPulseModule`, later `MarketSignalsContent`. | Implemented. | `PULSE_JOBS`, `PULSE_SKILLS`. | Tickers, demand index, outlook cards. | Market Intelligence. | Market trend data. | Signal summarization. | P0 |
| Enhanced Market Signals | Emerging roles, skills to watch, salary forecast, industry outlook, remote trend, location table. | Gives rich career intelligence. | Batch D Market Signals. | Implemented. | Enriched market mock data. | Signal cards, charts, AI insights. | Market Intelligence. | Trend datasets. | AI market insights. | P1 |
| Notifications | Dropdown alerts for matches, Vera missions, ATS improvements, Autopilot. | Keeps users aware of important changes. | `NotificationBell`. | Implemented. | Notification mock array. | Bell, dropdown. | Candidate app shell. | Notifications table. | AI-prioritized alerts. | P1 |
| Toasts | Quick feedback for actions. | Makes prototype interactions feel real. | `ToastContainer`, `toast()`. | Implemented. | Toast state. | Toast list. | App-wide. | None required. | None. | P1 |
| Empty States | No candidates/jobs/activity states. | Prevents confusing blank screens. | Employer pipeline, jobs filters, reviews. | Implemented in spots. | Conditional rendering. | Empty cards. | Various. | None. | Suggested next action. | P2 |

### Employer Experience

| Feature Name | Purpose | User Value | Where It Existed | Completion Status | Dependencies | Related Components | Related Pages | Backend Requirements | AI Requirements | Priority |
|---|---|---|---|---|---|---|---|---|---|---|
| Employer App Shell | Logged-in employer workspace with sidebar and role/profile state. | Gives employers a real operating area. | `EmployerApp`, `EMP_NAV`. | Implemented. | Jobs, pipeline, saved candidates. | Sidebar, topbar, assistant button. | Employer portal. | Employer session, company, roles. | AI assistant context. | P0 |
| Employer Dashboard / Hiring Cockpit | Summarize open jobs, saved talent, qualified candidates, velocity, funnel, priorities. | Helps hiring managers know what to do today. | `EmployerDashboardV2`, `EmployerCommandDashboard`. | Implemented and improved on `employee_dashboard`. | `EMP_JOBS`, pipeline, posts. | Hero/cockpit cards, funnel, focus panel. | Employer dashboard. | Role/pipeline analytics. | Priority recommendations. | P0 |
| Employer Sidebar IG-Style Animation | Hover icon pop and delayed text slide-in, active-dot behavior. | Improves navigation feel. | Employer sidebar CSS/classes in `employee_dashboard`. | Implemented. | CSS animations. | Sidebar nav. | Employer portal. | None. | None. | P2 |
| Employer Avatar Opens Profile | Click employer account avatar to enter profile page. | Makes profile discoverable. | Conversation implementation. | Implemented after bug fix. | Click handlers. | Sidebar account block. | Employer portal/profile. | None. | None. | P1 |
| Employer Profile | Editable company/account profile with preview and suggestions. | Lets employer control public reputation and hiring message. | `EmployerProfileV2`. | Implemented. | Jobs/posts/profile state. | Company Basics, Hiring Owner, Employer Brand, Candidate Value Props, Active Roles, Public Preview, Profile Suggestions, Account Settings. | Employer profile. | Company profile DB, user settings, auth credentials. | Profile quality suggestions. | P0 |
| Employer Account Settings | Edit account details/password with eye toggle. | Required real account management. | Added to `EmployerProfileV2`. | Implemented. | Form state. | Password eye button, save changes. | Employer profile. | Auth/user settings. | Security recommendations optional. | P0 |
| Employer Public Preview | Preview company profile as candidates see it. | Improves trust and brand clarity. | `EmployerProfileV2`. | Implemented. | Profile data. | Preview card. | Employer profile. | Public company profile endpoint. | Brand summary generation. | P1 |
| Posts and Updates / Professional Feed | LinkedIn-like feed for work updates, roles, events, experience, and professional stories. | Makes CareerGo social and not only a job board. | `EmployerRolesWorkspaceV2`, `EMP_SOCIAL_POSTS`, `CandidatePosts`. | Implemented. | Posts state. | Feed tab, post cards, insights, comments, reactions. | Employer Posts & Updates. | Posts, comments, likes, shares, moderation. | Drafting, summarization, safety. | P0 |
| Feed and Post Editor Separation | Split post view from editing workspace. | Clearer mental model. | Conversation implementation in employer feed. | Implemented. | View/tab state. | Feed view, editor view. | Employer posts. | Post CRUD. | Post drafting. | P0 |
| Create Post | New post creation from employer feed. | Lets employer publish original updates. | Conversation implementation after create-post request. | Implemented. | Post form, posts array. | Create post button/form. | Employer posts. | Create post API. | Caption generation. | P0 |
| Edit Existing Post | Left column shows existing posts; click to edit. | Makes feed management practical. | Conversation implementation. | Implemented. | Selected post state. | Existing posts list, editor form. | Employer post editor. | Update post API. | Rewrite/improve post. | P0 |
| Live Preview Removal | Simplified edit workspace by removing live preview. | Reduces clutter. | Conversation implementation. | Implemented. | Layout change. | Editor layout. | Employer post editor. | None. | None. | P2 |
| Scrollable Feed Window | Keep feed screen fixed while only post list scrolls. | Keeps navigation/context visible. | Conversation implementation. | Implemented. | CSS overflow. | Feed content panel. | Employer posts. | None. | None. | P2 |
| Employer Role Workspace | Manage roles and job statuses. | Employer can operate active roles. | `EmployerRolesWorkspace`, `EmployerRolesWorkspaceV2`. | Implemented. | `EMP_JOBS`. | Role cards, status controls. | Employer roles/posts. | Role CRUD. | JD assistance. | P0 |
| Talent Discovery | Search and evaluate candidates by skills, AI fit, market value, trajectory. | Helps employers find better talent faster. | `EmployerTalentDiscoveryV2`, `TalentDiscovery`. | Implemented. | `EMP_CANDIDATES`, selected job. | Candidate list, selected candidate detail, skill chips, action buttons. | Talent Discovery. | Candidate search index, saved candidates. | Fit scoring, candidate summary. | P0 |
| Candidate Fit Score | AI fit score, market value, trajectory, why role fits. | Makes candidate review faster. | Employer Talent Discovery. | Implemented as mock. | Candidate/role data. | Fit score cards. | Talent Discovery. | Matching model. | Fit explanation. | P0 |
| Save Candidate | Save candidate to review later. | Supports sourcing workflow. | `savedCandidateIds`, toggle save. | Implemented. | Local state. | Save button/badge. | Talent Discovery. | Saved talent table. | Reminder suggestions. | P1 |
| Move Candidate to Screen | Add/move candidate into pipeline. | Connects sourcing to hiring flow. | `onAddToPipeline`, `movePipelineStage`. | Implemented. | Pipeline state. | Move to screen button. | Talent Discovery, Pipeline. | Pipeline records. | Stage recommendation. | P0 |
| Hiring Pipeline Kanban | Applied, Screen, Interview, Offer, Hired stages with candidate cards. | Gives hiring managers pipeline visibility. | `EmployerHiringPipeline`, `EMP_PIPELINE_STAGES`, `EMP_PIPELINE_SEED`. | Implemented. | Pipeline state, jobs. | Kanban columns, move buttons. | Candidate Pipeline. | Candidate applications/stages. | Next-step generation. | P0 |
| Add Candidates | Add new candidates into pipeline. | Completes pipeline intake. | Button existed in UI. | Partially implemented. | Candidate data. | Add candidates action. | Pipeline. | Candidate import/invite. | Candidate parsing/sourcing. | P1 |
| Draft Outreach | AI-assisted outreach from pipeline/dashboard. | Speeds employer communication. | `EmployerAIHiringAssistantV2`, pipeline buttons. | Implemented as mock. | Selected role/candidate. | Draft outreach button/chat. | Pipeline, AI Hiring Assistant. | Message templates/logs. | LLM outreach drafting. | P0 |
| AI Hiring Assistant | Chat assistant for JDs, screening, interview questions, outreach, feed captions. | Makes employer workflow faster. | `EmployerAIHiringAssistantV2`, `AIHiringAssistant`. | Implemented. | Selected job context. | Assistant chat, quick prompts. | Employer AI Assistant. | Conversation storage, role context. | LLM for JD/outreach/questions/summaries. | P0 |
| Hiring Feed Insights | Post count, likes, comments, questions, quick actions. | Shows content performance. | Employer Posts sidebar. | Implemented. | Post metrics. | Feed insights card. | Employer posts. | Analytics. | Insight generation. | P1 |
| Trending Candidate Questions | Candidate questions around roles. | Helps employer answer concerns publicly. | Employer Posts sidebar. | Implemented. | Mock questions. | Question chips/cards. | Employer posts. | Q&A/comment data. | Answer drafting. | P1 |
| Employer Handoff Notes | Document teammate handoff for employer work. | Helps collaboration. | `CLAUDE.md`, commit `Add employer handoff notes`. | Implemented. | Docs. | Handoff section. | Repo docs. | None. | None. | P2 |

### Shared Platform, Data, and Business Logic

| Feature Name | Purpose | User Value | Where It Existed | Completion Status | Dependencies | Related Components | Related Pages | Backend Requirements | AI Requirements | Priority |
|---|---|---|---|---|---|---|---|---|---|---|
| Mock Data Layer | Central constants for users, jobs, market, posts, employers, pipeline. | Enables rich prototype behavior. | `USER`, `JOBS`, `EMP_JOBS`, `EMP_SOCIAL_POSTS`, `EMP_CANDIDATES`, etc. | Implemented. | In-file JS constants. | All modules. | All app pages. | Replace with API/domain models. | Use as seed/test fixtures. | P0 |
| Local Routing | Switch pages/views without backend. | Simple prototype navigation. | `App`, `go()`, query-string tab support. | Implemented. | React state. | Candidate/employer shell. | Single-file app. | Real router. | None. | P0 |
| Current Static Routing | Multi-page HTML with shared `app.js`. | Simpler website deployment. | Current redesign files. | Implemented. | Static files. | Top nav. | All current pages. | Router/build system recommended. | None. | P1 |
| LocalStorage Persistence | Save tour, jobs, applications, reviews, chat. | Keeps demo state across refresh. | Original and current. | Implemented. | Browser localStorage. | `readState`, `writeState`, tour flags. | Current pages and old app. | Database persistence. | None. | P0 |
| Review Workflow | Users write company/university reviews. | Adds research trust and community data. | Current `openReviewModal`; original research concept. | Improved in current. | localStorage reviews. | Modal, review cards. | Companies, Universities. | Reviews DB, moderation. | Review summarization/moderation. | P1 |
| Company Research | Ratings, salary, background, highlights, watchouts. | Lets candidates make informed choices. | Current redesign improved this. | 🔵 Improved. | `DATA.companies`. | Directory/detail panels. | Companies. | Company profiles/reviews. | Vera research note. | P0 |
| University Research | Employability, reviews, program strengths, outcomes. | Supports students choosing schools. | Current redesign added first-class page. | 🔵 Improved. | `DATA.universities`. | Directory/detail panels. | Universities. | University profiles/reviews/outcomes. | Vera research note. | P1 |
| Organization Comparison | Compare companies and universities side-by-side. | Helps decisions across options. | Current landing comparison. | 🔵 Improved conceptually. | `renderComparison`. | Comparison table. | Landing. | Comparison endpoint. | AI comparison summary. | P1 |
| Responsive Layout | Works across desktop/mobile. | Accessibility and usability. | Original Tailwind, current CSS. | Implemented. | CSS breakpoints. | All pages. | All pages. | None. | None. | P1 |
| Loading States | Indicate AI/analysis progress. | Avoids blank uncertainty. | Candidate onboarding AI analysis, resume analysis. | Implemented in old prototype. | Component state/timeouts. | Analysis cards. | Onboarding/profile. | Job queues/status. | AI job status. | P1 |
| Empty States | Friendly empty cards. | Makes partial data usable. | Pipeline, reviews, filters. | Partially implemented. | Conditional rendering. | Empty cards. | Various. | None. | Suggested next action. | P2 |

## Comparison Against Current Redesign

### High-Level Outcome

The current redesign is visually cleaner and stronger as a public-facing website. It improves research pages and creates a more believable home/jobs/companies/universities experience. However, it currently behaves more like a polished static career website than the original Career Operating System. The biggest losses are logged-in app depth, onboarding, career intelligence, market intelligence, Autopilot, employer operations, and structured AI workflows.

### Candidate Feature Comparison

| Feature | Current Status | Why |
|---|---|---|
| Public landing page | 🔵 Improved | New landing is cleaner, more premium, and explains jobs/research/Vera better. |
| Landing animations | 🟡 Partially Preserved | Current styling is polished, but old hero particles, scroll-reveal system, simulation showcase depth are not fully present. |
| Login/register | 🔴 Missing | Current site has no authentication pages or role-based entry flow. |
| Candidate onboarding | 🔴 Missing | Resume/goals/skills/AI analysis setup was removed. |
| Employer onboarding | 🔴 Missing | Company setup and first-role launch flow was removed. |
| Candidate app shell | 🔴 Missing | Current redesign uses public top nav instead of logged-in Career OS sidebar. |
| Guided onboarding tour | 🔴 Missing | Tour overlay/localStorage flow removed. |
| Candidate dashboard | 🟡 Partially Preserved | `dashboard.html` has readiness, market value, saved roles, apps, mission, tracker, but lacks health ring, score cards, urgency, career futures, Vera widget depth. |
| Career Health Ring | 🔴 Missing | No composite score visualization. |
| Metric tooltips and deltas | 🔴 Missing | Current metrics are simple static numbers. |
| Career Futures / Future Me | 🔴 Missing | Current dashboard does not show path simulations or tradeoffs. |
| Career Simulation | 🔴 Missing | Old simulator removed from landing/app. |
| Career Intelligence Profile | 🔴 Missing | No profile/report page in current redesign. |
| Career Score Breakdown | 🔴 Missing | No score methodology or breakdown. |
| Resume upload and analysis | 🔴 Missing | Current redesign has no upload or resume analysis workflow. |
| ATS checker | 🔴 Missing | ATS score concept not active beyond simple readiness copy. |
| PDF resume export | 🔴 Missing | jsPDF export removed. |
| Candidate profile/account settings | 🔴 Missing | No editable candidate account/profile page. |
| Coach Vera widget | 🟡 Partially Preserved | Vera exists as page/chat, but dashboard contextual widget is gone. |
| Coach Vera full companion | 🟡 Partially Preserved | Current `vera.html` has chat and quick prompts, but lost planning/skills/interview tabs, structured feedback, and mission control. |
| 90-day plan | 🔴 Missing | No dedicated plan generator or roadmap UI. |
| Skills Growth / Learning Roadmap | 🔴 Missing | Current site has no learning plan/checklist. |
| Weekly missions | 🟡 Partially Preserved | Dashboard shows three mission cards, but no XP, progress, daily/weekly mission system. |
| Interview Coach | 🔴 Missing | No interview setup, generated questions, answer feedback, or session tracking. |
| AI Assistant / Mission Control | 🟡 Partially Preserved | Vera page exists, but no workspace selector or cross-module quick actions. |
| Jobs and Opportunities | 🟡 Partially Preserved | Current jobs page preserves search, filter, details, save, apply, Vera read. Lost advanced filters, compare, not interested, community tab, rich match logic. |
| Job match explanation | 🟡 Partially Preserved | Current has "Vera's read" and why list, but lacks AI explanation card, cautions, metadata richness. |
| Job compare mode | 🔴 Missing | Removed. |
| Not interested feedback | 🔴 Missing | Removed. |
| Advanced job filters | 🔴 Missing | Current only has keyword, industry, level. |
| Candidate/community feed | 🔴 Missing | Removed from jobs and candidate app. |
| Saved jobs | ✅ Fully Preserved | Current localStorage supports saved jobs and dashboard count. |
| Apply/application tracker | 🟡 Partially Preserved | Apply and simple tracker exist; old Autopilot tracker/status workflow missing. |
| Opportunity Radar | 🔴 Missing | Radar scan animation and active agent behavior removed. |
| Autopilot Proxy | 🔴 Missing | Entire module removed. |
| Market Intelligence Hub | 🔴 Missing | Entire module removed. |
| Fair Pay Engine | 🟡 Partially Preserved | Current dashboard shows `RM92k` only; no engine/workflow. |
| Career Market Pulse | 🔴 Missing | Removed. |
| Notifications | 🔴 Missing | No app notification bell/dropdown in current redesign. |
| Toasts | 🔴 Missing | Current UI updates state but no global toast system. |

### Employer Feature Comparison

| Feature | Current Status | Why |
|---|---|---|
| Employer marketing page | 🔵 Improved | New `employers.html` is visually cleaner for public explanation. |
| Employer app shell | 🔴 Missing | Current employer page is not an operational portal. |
| Employer dashboard/hiring cockpit | 🔴 Missing | Rich dashboard from `employee_dashboard` removed from current static redesign. |
| Employer sidebar animation | 🔴 Missing | No employer sidebar in current redesign. |
| Employer avatar opens profile | 🔴 Missing | No logged-in employer account block. |
| Employer profile/account settings | 🔴 Missing | Company profile editor, account settings, password eye toggle removed. |
| Posts & Updates / Professional Feed | 🔴 Missing | No social feed/editor for employers. |
| Create/edit post | 🔴 Missing | Removed. |
| Scrollable feed window | 🔴 Missing | Removed. |
| Role workspace | 🔴 Missing | Removed. |
| Talent Discovery | 🟡 Partially Preserved | Current employer page mentions talent discovery, but no searchable candidate workspace. |
| Candidate fit score/detail | 🔴 Missing | Removed. |
| Save candidate / move to screen | 🔴 Missing | Removed. |
| Hiring pipeline Kanban | 🔴 Missing | Removed. |
| AI Hiring Assistant | 🔴 Missing | Current Vera is candidate-focused; employer assistant removed. |
| Hiring feed insights/questions | 🔴 Missing | Removed. |

### Shared Platform Comparison

| Feature | Current Status | Why |
|---|---|---|
| Mock data layer | 🟡 Partially Preserved | Current `DATA` is clean but much smaller than original domain data. |
| LocalStorage persistence | ✅ Fully Preserved | Current uses `careergo-v4-state` for saved jobs, applications, reviews, chat. |
| Reviews | 🔵 Improved | Current company/university review modal is clean and useful. |
| Company research | 🔵 Improved | Current company directory is more focused and user-friendly. |
| University research | 🔵 Improved | New university page expands product direction beyond old app. |
| Organization comparison | 🔵 Improved | Current comparison table is useful, though basic. |
| Routing | ⚪ Needs Rewrite | Current static multi-page approach is simpler, but migrating old app functionality will need a cleaner router/app shell. |
| Backend/API readiness | ⚪ Needs Rewrite | Both old and current are mock/local-only; real product needs models and APIs. |

## Visual and Functional Page Comparison

Browser rendering was not available in this Codex session because the in-app browser automation tool was not exposed. Instead, this comparison is based on page source, component structure, git-recovered original implementation, and current HTML/JS behavior.

Functionality by current page:

- Home: preserves the public story and improves research-first positioning. Missing login/register CTAs, onboarding path, career simulation depth, and role-based app entry.
- Jobs: preserves search/filter/save/apply and a simple Vera read. Missing advanced filters, compare mode, not-interested learning, community posts, Autopilot scan, and rich match explanation.
- Companies: improves company research with ratings, highlights, watchouts, salary signals, reviews, and write-review flow. This is one of the strongest preserved/improved areas.
- Universities: newly strong research page for students. This supports the student portal direction but does not yet include student dashboard, roadmap, or outcome planning.
- Dashboard: preserves a small subset of OS behavior: readiness, market value, saved/app counts, weekly mission, application tracker. Missing the original core OS widgets: career health, score breakdown, career futures, Vera widget, notifications, Autopilot, market intelligence, profile actions.
- Vera: preserves a basic coach chat with local persistence and quick prompts. Missing the original structured Coach Vera experience: planning tab, skills growth, interview coach, workspace selector, AI quick actions, profile-aware context panels.
- Employers: preserves employer-facing narrative only. Missing the full employer portal, hiring cockpit, posts, profile, talent discovery, pipeline, and AI hiring assistant.

## Migration Roadmap

### P0: Restore Core Product Workflows

These are the features that make CareerGo feel like a real Career OS instead of a polished static site.

#### 1. Add Auth and Role Entry

- Priority: P0
- Estimated complexity: Medium
- Components to build: `LoginPage`, `RegisterPage`, role selector, session state, protected app shell.
- Reuse: Original `LoginPage`, `RegisterPage`, `AuthShell` logic; current premium visual tokens.
- Backend changes: users, auth sessions, roles, password reset.
- Database changes: `users`, `profiles`, `employer_accounts`, `sessions`.
- AI integration: none required.
- API requirements: `/auth/login`, `/auth/register`, `/auth/me`, `/auth/logout`.
- UI location in new design: top nav `Open OS`, landing CTA, separate auth pages using new visual system.

#### 2. Rebuild Candidate App Shell

- Priority: P0
- Estimated complexity: High
- Components to build: logged-in sidebar/topbar shell, candidate router, notification bell, toast system.
- Reuse: Original `CandidateApp`, `CANDIDATE_NAV`, `NotificationBell`, `ToastContainer`.
- Backend changes: user preferences and notifications.
- Database changes: `notifications`, `user_preferences`.
- AI integration: AI-prioritized alerts later.
- API requirements: `/notifications`, `/preferences`.
- UI location in new design: behind `dashboard.html` or a new `/app` route, preserving current premium visual language.

#### 3. Restore Candidate Onboarding + Resume Analysis

- Priority: P0
- Estimated complexity: High
- Components to build: onboarding stepper, resume upload, goal selector, skill chips, analysis result page.
- Reuse: Original `CandidateOnboarding`, `SKILL_OPTIONS`, `GOAL_ROLES`, resume analysis UI from Batch E.
- Backend changes: resume upload, parsing jobs, profile creation.
- Database changes: `resumes`, `skills`, `career_goals`, `analysis_results`.
- AI integration: resume parsing, skill extraction, ATS scoring, career summary.
- API requirements: `/resumes/upload`, `/profile/analyze`, `/onboarding/complete`.
- UI location in new design: after registration, before dashboard.

#### 4. Restore Career Intelligence Profile

- Priority: P0
- Estimated complexity: High
- Components to build: profile report, editable account fields, score breakdown, skill gaps, projects, recommendations, PDF export.
- Reuse: `CareerProfileV2`, `ScoreBreakdown`, jsPDF export logic.
- Backend changes: profile CRUD, projects, skill evidence, export endpoint optional.
- Database changes: `profiles`, `work_experience`, `projects`, `skills`, `career_scores`.
- AI integration: profile scoring, Vera recommendations, resume rewrite suggestions.
- API requirements: `/profile`, `/profile/score`, `/profile/recommendations`, `/resume/export`.
- UI location in new design: app sidebar item `Profile` or `Career Intelligence`.

#### 5. Restore Coach Vera as Structured Career Companion

- Priority: P0
- Estimated complexity: High
- Components to build: Vera workspace with tabs for planning, skills, interview, chat, quick actions.
- Reuse: `CareerCompanion`, `AIAssistant`, `AI_WORKSPACES`, `AI_QUICK_ACTIONS`, current `vera.html` chat styling.
- Backend changes: conversations, prompts, coach memory/context.
- Database changes: `conversations`, `messages`, `missions`, `learning_tasks`.
- AI integration: LLM chat, career plan generation, skill roadmap generation, interview feedback.
- API requirements: `/ai/chat`, `/ai/plan`, `/ai/interview-feedback`, `/ai/skill-roadmap`.
- UI location in new design: keep public `vera.html`, add logged-in Vera workspace in Candidate OS.

#### 6. Restore Jobs Advanced Workflow

- Priority: P0
- Estimated complexity: Medium
- Components to build: advanced filters, compare mode, not-interested feedback, richer match cards.
- Reuse: Current jobs page for layout; original `JobsOpportunities` logic and Batch D job card fields.
- Backend changes: job search/filter, recommendations, feedback.
- Database changes: `jobs`, `saved_jobs`, `applications`, `job_feedback`.
- AI integration: match explanation and gap analysis.
- API requirements: `/jobs/search`, `/jobs/:id/match`, `/jobs/save`, `/applications`.
- UI location in new design: current `jobs.html` detail/list layout.

#### 7. Restore Market Intelligence

- Priority: P0
- Estimated complexity: High
- Components to build: My Value tab, Market Signals tab, worth dashboard, growth simulator, market insights.
- Reuse: `MarketIntelligence`, `FairPayContent`, `MarketSignalsContent`, `CAREER_ROLES`, `SALARY_SCENARIOS`.
- Backend changes: market data ingestion, salary benchmarks.
- Database changes: `salary_benchmarks`, `market_signals`, `skill_demand`, `role_trends`.
- AI integration: market insight summaries, salary strategy.
- API requirements: `/market/value`, `/market/signals`, `/market/role-trends`.
- UI location in new design: Candidate OS sidebar item `Market Intelligence`; dashboard summary card links into it.

#### 8. Restore Autopilot

- Priority: P0
- Estimated complexity: High
- Components to build: radar command header, rules panel, activity log, application tracker, scan-only mode.
- Reuse: `AutopilotProxy`, `INBOX_ITEMS`, `TRACKED_APPS`, radar CSS.
- Backend changes: search jobs, score jobs, draft applications, enforce rules.
- Database changes: `autopilot_rules`, `autopilot_events`, `applications`, `job_matches`.
- AI integration: scoring, cover letter/application draft, skip reasons.
- API requirements: `/autopilot/rules`, `/autopilot/scan`, `/autopilot/events`, `/autopilot/apply`.
- UI location in new design: Candidate OS sidebar item `Autopilot`.

#### 9. Restore Employer Portal

- Priority: P0
- Estimated complexity: Very High
- Components to build: employer app shell, dashboard, roles, professional feed, profile, talent discovery, pipeline, AI assistant.
- Reuse: `EmployerApp`, `EmployerCommandDashboard`, `EmployerRolesWorkspaceV2`, `EmployerTalentDiscoveryV2`, `EmployerHiringPipeline`, `EmployerProfileV2`, `EmployerAIHiringAssistantV2`.
- Backend changes: employer accounts, company profiles, roles, posts, candidate search, pipeline.
- Database changes: `companies`, `employer_users`, `roles`, `employer_posts`, `candidates`, `pipeline_entries`, `saved_candidates`.
- AI integration: JD drafting, outreach, interview questions, candidate summaries, feed captions.
- API requirements: `/employer/dashboard`, `/employer/roles`, `/employer/posts`, `/employer/candidates/search`, `/employer/pipeline`, `/employer/ai`.
- UI location in new design: current `employers.html` stays marketing; logged-in employer portal should be `/employer-app` or protected employer dashboard.

### P1: Restore Engagement, Social, and Research Depth

#### 10. Professional Social Feed for Candidates and Employers

- Priority: P1
- Estimated complexity: High
- Components to build: feed cards, create/edit post, reactions, comments, bookmarks, post editor.
- Reuse: `CandidatePosts`, `EmployerRolesWorkspaceV2`, `EMP_SOCIAL_POSTS`, `COMMUNITY_POSTS`.
- Backend changes: posts, comments, reactions, moderation.
- Database changes: `posts`, `comments`, `post_reactions`, `post_saves`.
- AI integration: post drafting, moderation, topic recommendations.
- API requirements: `/posts`, `/posts/:id`, `/comments`, `/reactions`.
- UI location in new design: `Posts` in candidate and employer app shells; public community preview optional.

#### 11. Weekly Missions and Learning Roadmap

- Priority: P1
- Estimated complexity: Medium
- Components to build: mission cards, XP/progress, learning checklist, roadmap milestones.
- Reuse: `DAILY_MISSIONS`, `WEEKLY_MISSIONS`, `ROADMAP_MILESTONES`, `ACTIVE_LEARNING_PLANS`, `SKILL_ROADMAP`.
- Backend changes: task progress, learning resources.
- Database changes: `missions`, `mission_progress`, `learning_tasks`.
- AI integration: mission generation based on profile gaps.
- API requirements: `/missions`, `/learning-roadmap`.
- UI location in new design: dashboard mission section and Vera Skills tab.

#### 12. Interview Coach

- Priority: P1
- Estimated complexity: Medium
- Components to build: setup panel, generated question, answer input, 4-dimension feedback, session tracker.
- Reuse: Career Companion interview tab, `INTERVIEW_CATEGORIES`, `INTERVIEW_PERSONALITIES`.
- Backend changes: interview session records.
- Database changes: `interview_sessions`, `interview_answers`, `interview_scores`.
- AI integration: question generation and answer scoring.
- API requirements: `/interview/question`, `/interview/feedback`.
- UI location in new design: Vera logged-in workspace.

#### 13. Notifications and Toasts

- Priority: P1
- Estimated complexity: Low
- Components to build: notification bell, dropdown, toast stack.
- Reuse: `NotificationBell`, `ToastContainer`.
- Backend changes: notification service later.
- Database changes: `notifications`.
- AI integration: AI-prioritized notification copy optional.
- API requirements: `/notifications`.
- UI location in new design: logged-in topbar/app shell.

#### 14. Company/University Research Expansion

- Priority: P1
- Estimated complexity: Medium
- Components to build: comparison builder, review summaries, salary/outcome charts, saved organizations.
- Reuse: Current directory pages and `renderComparison`.
- Backend changes: org profiles, reviews, saved organizations.
- Database changes: `organizations`, `organization_reviews`, `saved_organizations`.
- AI integration: review summarization, watchout detection.
- API requirements: `/organizations`, `/reviews`, `/compare`.
- UI location in new design: current `companies.html` and `universities.html`.

### P2: Polish, Trust, and Product Completeness

#### 15. Onboarding Tour Rebuild

- Priority: P2
- Estimated complexity: Medium
- Components to build: spotlight tour compatible with new app shell.
- Reuse: `OnboardingTour` logic.
- Backend changes: completed-tour preference.
- Database changes: `user_preferences`.
- AI integration: none.
- API requirements: `/preferences/tour`.
- UI location in new design: first login to Candidate OS.

#### 16. Employer Sidebar Animation Rebuild

- Priority: P2
- Estimated complexity: Low
- Components to build: sidebar nav micro-interactions.
- Reuse: conversation CSS behavior from employer dashboard.
- Backend changes: none.
- Database changes: none.
- AI integration: none.
- API requirements: none.
- UI location in new design: employer app shell only.

#### 17. Empty, Loading, and Error States

- Priority: P2
- Estimated complexity: Medium
- Components to build: reusable empty/loading/error cards.
- Reuse: old empty pipeline cards and analysis loading states.
- Backend changes: API error formats.
- Database changes: none.
- AI integration: loading state for AI jobs.
- API requirements: standard errors and job status endpoints.
- UI location in new design: all app modules.

## Recommended Implementation Order

1. Stabilize architecture: choose whether the new design becomes a vanilla multi-page app, a rebuilt React SPA, or a lightweight routed app. Recommendation: rebuild a React app shell using the new visual language, because the original feature depth will become painful in plain static HTML.
2. Port shared data models and localStorage state first: users, profiles, jobs, applications, reviews, posts, employer roles, pipeline.
3. Restore candidate app shell, auth, onboarding, dashboard, and profile.
4. Restore Vera structured companion and connect it to profile/jobs/market context.
5. Restore jobs advanced workflow, Market Intelligence, and Autopilot.
6. Restore employer portal as a separate logged-in app area using the same design system.
7. Add social/professional feed to both candidate and employer sides.
8. Replace localStorage/mock data with backend APIs module by module.

## Minimum Definitive Product Scope

If we need the smallest version that feels professional and useful, keep this scope:

- Candidate auth + onboarding + resume analysis.
- Candidate dashboard with career health, missions, saved/applied jobs, and Vera next action.
- Career Intelligence Profile with editable profile, ATS score, recommendations, and PDF export.
- Jobs with matching, save/apply, match explanation, and application tracker.
- Vera with structured planning, skills, and interview coaching.
- Market Intelligence with worth and market signals.
- Employer portal with dashboard, posts, profile, talent discovery, pipeline, and AI hiring assistant.
- Company/university research with reviews and comparisons.

