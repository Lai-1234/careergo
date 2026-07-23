const DATA = {
  jobs: [
    {
      id: "job-product-designer",
      title: "Product Designer",
      company: "Maybank",
      location: "Kuala Lumpur",
      salary: "RM 6k - 8.2k / month",
      type: "Hybrid",
      level: "Junior",
      industry: "Banking",
      match: 92,
      posted: "2d ago",
      skills: ["Figma", "Design Systems", "Research", "Prototyping"],
      why: [
        "Strong fit with your product design portfolio.",
        "Salary is above your current target.",
        "Banking design teams are hiring actively."
      ],
      caution: "Interview process has a high case-study load.",
      description: "Design mobile banking journeys, improve customer onboarding, and work with product managers, engineers, and researchers."
    },
    {
      id: "job-data-analyst",
      title: "Data Analyst",
      company: "Grab",
      location: "Petaling Jaya",
      salary: "RM 5.5k - 7.7k / month",
      type: "Onsite",
      level: "Entry",
      industry: "Technology",
      match: 84,
      posted: "4d ago",
      skills: ["SQL", "Python", "Dashboards", "Experimentation"],
      why: [
        "Good pivot path into product analytics.",
        "Strong brand signal for future roles.",
        "Clear skill-growth runway."
      ],
      caution: "You need stronger SQL project evidence.",
      description: "Build dashboards, analyze growth metrics, and help operations teams make better marketplace decisions."
    },
    {
      id: "job-ux-researcher",
      title: "Graduate UX Researcher",
      company: "CIMB",
      location: "Kuala Lumpur",
      salary: "RM 4.5k - 5.8k / month",
      type: "Hybrid",
      level: "Entry",
      industry: "Banking",
      match: 88,
      posted: "1w ago",
      skills: ["User Interviews", "Survey Design", "Synthesis", "Journey Mapping"],
      why: [
        "Excellent first-role learning environment.",
        "Strong match with your communication profile.",
        "Good mentorship score from reviews."
      ],
      caution: "Lower salary ceiling than product design roles.",
      description: "Run research studies, turn customer signals into insights, and support banking product teams."
    },
    {
      id: "job-ai-product",
      title: "AI Product Associate",
      company: "Petronas Digital",
      location: "Kuala Lumpur",
      salary: "RM 6.8k - 9.7k / month",
      type: "Hybrid",
      level: "Junior",
      industry: "Energy Tech",
      match: 79,
      posted: "3d ago",
      skills: ["Product Strategy", "AI Literacy", "Stakeholder Management", "Roadmapping"],
      why: [
        "High market-growth role.",
        "Builds AI product credibility.",
        "Strong long-term salary path."
      ],
      caution: "Requires more product strategy proof.",
      description: "Shape AI-enabled enterprise tools for energy teams and translate business problems into product requirements."
    },
    {
      id: "job-career-advisor",
      title: "Campus Career Advisor",
      company: "Taylor's University",
      location: "Subang Jaya",
      salary: "RM 5k - 6.8k / month",
      type: "Onsite",
      level: "Junior",
      industry: "Education",
      match: 73,
      posted: "5d ago",
      skills: ["Coaching", "Graduate Outcomes", "Employer Relations", "Workshops"],
      why: [
        "Strong fit if you want education-impact work.",
        "Uses coaching and portfolio review skills.",
        "Good stepping stone into employability strategy."
      ],
      caution: "Less aligned with your design leadership target.",
      description: "Coach students, coordinate employer programs, and improve graduate readiness."
    }
  ],
  companies: [
    {
      id: "maybank",
      name: "Maybank",
      type: "Company",
      industry: "Banking",
      location: "Kuala Lumpur",
      size: "10,000+ employees",
      rating: 4.4,
      reviews: 1284,
      open: 18,
      signal: "Stable graduate pathway",
      salary: "RM 4.2k - 12k / month",
      externalUrl: "https://www.maybank.com/en/careers.page",
      tags: ["Stable", "Graduate friendly", "Large teams"],
      summary: "Malaysia's largest financial group with strong graduate programs, structured teams, and broad digital transformation work.",
      scores: { culture: 4.2, growth: 4.3, pay: 4.1, balance: 4.0 },
      highlights: ["Strong training and rotation programs", "Good brand value for early career", "Structured promotion paths"],
      watchouts: ["Large-company pace can feel slower", "Some teams report layered approvals"]
    },
    {
      id: "grab",
      name: "Grab",
      type: "Company",
      industry: "Technology",
      location: "Petaling Jaya",
      size: "5,000+ employees",
      rating: 4.1,
      reviews: 923,
      open: 12,
      signal: "High-growth product exposure",
      salary: "RM 5.5k - 16k / month",
      externalUrl: "https://grab.careers",
      tags: ["Fast paced", "Regional exposure", "Tech"],
      summary: "Regional technology company with strong product, data, and operations teams across Southeast Asia.",
      scores: { culture: 4.0, growth: 4.5, pay: 4.2, balance: 3.6 },
      highlights: ["High-growth projects", "Strong data culture", "Regional career mobility"],
      watchouts: ["Workload can spike", "Competition for roles is high"]
    },
    {
      id: "cimb",
      name: "CIMB",
      type: "Company",
      industry: "Banking",
      location: "Kuala Lumpur",
      size: "10,000+ employees",
      rating: 4.0,
      reviews: 807,
      open: 9,
      signal: "Good mentorship for first roles",
      salary: "RM 4k - 11k / month",
      tags: ["Banking", "Mentorship", "ASEAN"],
      summary: "ASEAN banking group with opportunities in digital banking, analytics, product, and customer experience.",
      scores: { culture: 3.9, growth: 4.0, pay: 3.9, balance: 3.8 },
      highlights: ["Good exposure to financial services", "Established graduate structure", "Regional network"],
      watchouts: ["Processes vary by division", "Innovation speed depends on team"]
    },
    {
      id: "petronas",
      name: "Petronas Digital",
      type: "Company",
      industry: "Energy Tech",
      location: "Kuala Lumpur",
      size: "1,000+ employees",
      rating: 4.3,
      reviews: 441,
      open: 7,
      signal: "Enterprise AI and data work",
      salary: "RM 5k - 15k / month",
      externalUrl: "https://www.petronas.com/careers",
      tags: ["AI", "Enterprise", "Energy"],
      summary: "Digital arm focused on enterprise technology, data, AI, and transformation across the energy sector.",
      scores: { culture: 4.1, growth: 4.4, pay: 4.3, balance: 3.9 },
      highlights: ["High-impact enterprise problems", "Good technical learning curve", "Stable benefits"],
      watchouts: ["Complex stakeholder environment", "Domain learning takes time"]
    }
  ],
  universities: [
    {
      id: "um",
      name: "University of Malaya",
      type: "University",
      industry: "Public University",
      location: "Kuala Lumpur",
      size: "30,000 students",
      rating: 4.5,
      reviews: 652,
      open: 24,
      signal: "Strong employer recognition",
      salary: "86% employed in 6 months",
      externalUrl: "https://www.um.edu.my",
      tags: ["Research", "Strong alumni", "Public"],
      summary: "Top public university with strong research profile, employer recognition, and broad alumni network.",
      scores: { culture: 4.2, growth: 4.5, pay: 4.2, balance: 4.0 },
      highlights: ["Strong employer brand", "Large alumni network", "Wide program selection"],
      watchouts: ["Competitive environment", "Administrative processes can be slow"],
      requirements: {
        qualification: "STPM / A-Level / Matriculation / Foundation",
        cgpa: 3.7,
        english: "MUET Band 4+",
        subjects: ["Mathematics", "English", "Programme-specific science subjects"],
        intakes: "September & February"
      }
    },
    {
      id: "taylors",
      name: "Taylor's University",
      type: "University",
      industry: "Private University",
      location: "Subang Jaya",
      size: "18,000 students",
      rating: 4.4,
      reviews: 489,
      open: 16,
      signal: "Industry-linked projects",
      salary: "83% employed in 6 months",
      tags: ["Industry projects", "Design", "Business"],
      summary: "Private university known for industry-linked learning, business, hospitality, design, and graduate employability programs.",
      scores: { culture: 4.4, growth: 4.3, pay: 4.0, balance: 4.1 },
      highlights: ["Industry-connected coursework", "Strong student support", "Modern facilities"],
      watchouts: ["Higher tuition cost", "Program quality varies by faculty"],
      requirements: {
        qualification: "SPM / O-Level with Foundation, or STPM / A-Level / UEC",
        cgpa: 2.8,
        english: "MUET Band 3+ or IELTS 5.5",
        subjects: ["English", "Mathematics (programme dependent)"],
        intakes: "January, March & August"
      }
    },
    {
      id: "monash",
      name: "Monash University Malaysia",
      type: "University",
      industry: "Private University",
      location: "Bandar Sunway",
      size: "9,000 students",
      rating: 4.3,
      reviews: 376,
      open: 11,
      signal: "International curriculum",
      salary: "82% employed in 6 months",
      externalUrl: "https://www.monash.edu.my",
      tags: ["International", "Research", "Business"],
      summary: "International university campus with strong research links, global curriculum, and business/engineering pathways.",
      scores: { culture: 4.1, growth: 4.3, pay: 4.0, balance: 3.9 },
      highlights: ["International recognition", "Research-led teaching", "Good transfer pathways"],
      watchouts: ["Higher academic intensity", "Cost can be significant"],
      requirements: {
        qualification: "STPM / A-Level / IB / Monash Foundation Year",
        cgpa: 3.3,
        english: "IELTS 6.5 or MUET Band 4.5",
        subjects: ["Mathematics", "English", "Science (for STEM programmes)"],
        intakes: "February, July & October"
      }
    },
    {
      id: "apu",
      name: "Asia Pacific University",
      type: "University",
      industry: "Private University",
      location: "Bukit Jalil",
      size: "13,000 students",
      rating: 4.1,
      reviews: 318,
      open: 14,
      signal: "Technology career focus",
      salary: "80% employed in 6 months",
      tags: ["Technology", "Computing", "Employability"],
      summary: "Technology-oriented university with strong computing, business IT, and digital career pathways.",
      scores: { culture: 4.0, growth: 4.2, pay: 3.9, balance: 3.8 },
      highlights: ["Strong computing focus", "Career-oriented programs", "Diverse student community"],
      watchouts: ["Fast academic pace", "Campus location may affect commute"],
      requirements: {
        qualification: "SPM / O-Level with Foundation, or STPM / A-Level / Diploma",
        cgpa: 2.5,
        english: "MUET Band 3+ or IELTS 5.0",
        subjects: ["Mathematics", "English"],
        intakes: "February, April & September"
      }
    }
  ],
  reviews: [
    { id: "r1", targetId: "maybank", author: "Graduate Trainee", rating: 4.6, title: "Structured and safe first career step", body: "The training was clear and managers gave useful feedback. Best for people who want a stable learning curve.", date: "Jun 2026" },
    { id: "r2", targetId: "grab", author: "Data Analyst", rating: 4.1, title: "Fast learning, intense rhythm", body: "You learn quickly because the problems are real and regional. Balance depends heavily on the team.", date: "Jun 2026" },
    { id: "r3", targetId: "taylors", author: "Final Year Student", rating: 4.5, title: "Helpful career office and practical projects", body: "The employer projects helped me explain my work better during interviews.", date: "May 2026" },
    { id: "r4", targetId: "um", author: "Computer Science Graduate", rating: 4.4, title: "Strong name and alumni reach", body: "The reputation opens doors, but you still need to build your own portfolio early.", date: "May 2026" },
    { id: "r5", targetId: "maybank", author: "Product Analyst, 2 years", rating: 4.0, title: "Good exposure, slower decision cycles", body: "You see real banking-scale problems and the benefits are solid. Expect layered approvals before anything ships.", date: "Apr 2026" },
    { id: "r6", targetId: "grab", author: "Former Operations Associate", rating: 3.8, title: "Great brand, protect your boundaries", body: "The name helps your resume and the data culture is real. Workload spikes during regional launches, so choose your team carefully.", date: "Mar 2026" },
    { id: "r7", targetId: "cimb", author: "Management Trainee", rating: 4.2, title: "Mentorship made the difference", body: "My manager reviewed my work weekly and pushed me toward analytics projects. Growth depends a lot on which division you land in.", date: "Jun 2026" },
    { id: "r8", targetId: "cimb", author: "Digital Banking Intern", rating: 3.9, title: "Solid internship, uneven tooling", body: "Real customer projects and kind teammates. Some internal tools feel dated, but you learn how a large bank actually operates.", date: "Feb 2026" },
    { id: "r9", targetId: "petronas", author: "Data Engineer", rating: 4.4, title: "Enterprise-scale AI problems", body: "The data problems are genuinely hard and the learning curve is steep in a good way. Stakeholder alignment takes patience.", date: "May 2026" },
    { id: "r10", targetId: "petronas", author: "Graduate Technologist", rating: 4.1, title: "Stable, serious, and well resourced", body: "Benefits and training budgets are strong. Domain knowledge takes months, so be patient with your first quarter.", date: "Jan 2026" },
    { id: "r11", targetId: "setel", author: "Product Manager", rating: 4.3, title: "Small squads, real ownership", body: "You own outcomes end to end and ship fast. The payments domain is complex, which is exactly why the learning is good.", date: "Apr 2026" },
    { id: "r12", targetId: "um", author: "Engineering Alumna", rating: 4.2, title: "Competitive but worth it", body: "Classes are demanding and the curve is real. Employers respond to the degree, and the alumni network keeps paying off.", date: "Mar 2026" },
    { id: "r13", targetId: "monash", author: "Business Graduate", rating: 4.3, title: "International curriculum, global options", body: "The Australian curriculum and transfer options opened doors abroad. Budget for the fees and the academic intensity.", date: "Apr 2026" },
    { id: "r14", targetId: "monash", author: "Second Year Student", rating: 4.0, title: "Research-led teaching is genuine", body: "Lecturers bring live research into class. Assessment standards are strict, so keep up from week one.", date: "Feb 2026" },
    { id: "r15", targetId: "apu", author: "Software Engineering Graduate", rating: 4.1, title: "Career-focused computing programmes", body: "Industry projects and the dual-degree option helped my first job search. The pace is fast, especially in final year.", date: "May 2026" },
    { id: "r16", targetId: "apu", author: "Current IT Student", rating: 3.9, title: "Strong labs, plan your commute", body: "Good facilities and hands-on modules. The Bukit Jalil campus is great but factor in travel time if you live far.", date: "Jan 2026" },
    { id: "r17", targetId: "carsome", author: "PM - 2 yrs", rating: 4, title: "Real marketplace complexity", body: "Learned a lot about cross-side dynamics.", pros: "Scope, autonomy.", watch: "Ops-heavy problem space.", date: "May 2026" }
  ],
  people: [
    { id: "aisha", name: "Aisha Rahman", role: "Recruiter", company: "Grab Malaysia", university: "", industry: "Technology", tag: "Recruiter", bio: "Talent lead at Grab Malaysia, focused on product and analytics hiring across Southeast Asia.", signal: "Reviewed your saved role at Grab this week." },
    { id: "ravi", name: "Ravi Iyer", role: "Head of Product", company: "Vercel", university: "", industry: "Technology", tag: "Mentor", bio: "Leads product at Vercel; mentors career switchers moving into product management.", signal: "Offered to review your PM portfolio." },
    { id: "nurul", name: "Nurul Adlina", role: "Hiring Manager", company: "Setel", university: "", industry: "Fintech", tag: "Hiring manager", bio: "Hiring manager at Setel, running the take-home process for Product Manager candidates.", signal: "Sent you a take-home exercise." },
    { id: "shreya", name: "Shreya Kapoor", role: "Product Manager", company: "Figma", university: "", industry: "Technology", tag: "Connection", bio: "Made the jump from design to product; happy to share how she framed a design background for PM interviews.", signal: "Made the same design -> PM switch you're considering." },
    { id: "aisyah-r", name: "Aisyah R.", role: "Product Manager", company: "Setel", university: "um", industry: "Fintech", tag: "Mentor", bio: "4y journey from designer to PM at Setel - started with a design background, just like you.", signal: "82% path overlap with your roadmap." },
    { id: "rohan-s", name: "Rohan S.", role: "AI Product Manager", company: "StoreHub", university: "", industry: "SaaS", tag: "Mentor", bio: "3y journey from design engineering to AI PM at StoreHub, using a similar skill stack to yours.", signal: "76% path overlap with your roadmap." },
    { id: "meera-k", name: "Meera K.", role: "Head of Product", company: "", university: "", industry: "Technology", tag: "Mentor", bio: "6y journey from product designer to Head of Product - a long-term direction if you follow the 3-year roadmap.", signal: "68% path overlap with your roadmap." },
    { id: "daniel-l", name: "Daniel L.", role: "Founding PM", company: "KL seed startup", university: "", industry: "Technology", tag: "Mentor", bio: "5y journey from PM to Founding PM at a KL seed startup - took the founding PM leap you're considering.", signal: "71% path overlap with your roadmap." }
  ],
  profile: null,
  futures: [
    { role: "Senior Product Designer", probability: 82, salary: "RM 108k - 142k", timeline: "12-18 months", risk: "Needs stronger product strategy proof" },
    { role: "AI Product Associate", probability: 67, salary: "RM 96k - 132k", timeline: "9-15 months", risk: "Needs AI product vocabulary and metrics" },
    { role: "UX Research Specialist", probability: 76, salary: "RM 86k - 118k", timeline: "6-12 months", risk: "Lower salary ceiling than product path" }
  ],
  missions: [
    { id: "m1", title: "Compare 3 organizations", body: "Review culture, pay, growth, and watchouts before applying.", xp: 120, progress: 66, href: "discover-companies.html" },
    { id: "m2", title: "Upgrade one case study", body: "Add trade-offs, metric impact, and stakeholder decisions.", xp: 180, progress: 35, href: "grow.html" },
    { id: "m3", title: "Practice interview story", body: "Record one STAR answer for ambiguity and feedback.", xp: 90, progress: 20, href: "grow.html#interview-coach" }
  ],
  marketRoles: [
    { role: "Product Designer", current: 92000, fair: 104000, potential: 138000, demand: "High", trend: "+18%", skills: ["Design Systems", "Research", "Product Strategy"] },
    { role: "Data Analyst", current: 82000, fair: 96000, potential: 128000, demand: "Very high", trend: "+24%", skills: ["SQL", "Python", "Experimentation"] },
    { role: "AI Product Associate", current: 104000, fair: 118000, potential: 162000, demand: "Surging", trend: "+31%", skills: ["AI Literacy", "Roadmapping", "Stakeholders"] }
  ],
  pulse: [
    { title: "AI literacy is becoming a product baseline", body: "Product, design, and analytics roles increasingly ask for AI workflow fluency.", impact: "Add one AI-assisted project story" },
    { title: "Banking graduate roles are steady", body: "Maybank and CIMB continue showing structured early-career pathways.", impact: "Use stability as a first-role strategy" },
    { title: "Portfolio evidence beats certificate volume", body: "Employers respond better to proof of outcomes than long course lists.", impact: "Polish one measurable case study" }
  ],
  communityPosts: [
    { id: "p1", author: "Nadia, UX Intern", title: "How I explained a messy university project in interviews", body: "I reframed it around constraints, decisions, and what changed after testing.", reactions: 42 },
    { id: "p2", author: "Jason, Data Analyst", title: "SQL portfolio tip", body: "One clear dashboard with a business question is stronger than five disconnected notebooks.", reactions: 36 },
    { id: "p3", author: "Vera", title: "Weekly career prompt", body: "Before applying, write the one sentence evidence you would use to prove fit for the role.", reactions: 88 }
  ],
  autopilotEvents: [
    { id: "a1", type: "recommended", title: "Product Designer at Maybank", reason: "92% fit, strong salary, hybrid setup", status: "Ready to review" },
    { id: "a2", type: "saved", title: "Graduate UX Researcher at CIMB", reason: "Mentorship score is high", status: "Saved" },
    { id: "a3", type: "skipped", title: "Data Analyst at Grab", reason: "Below current SQL evidence threshold", status: "Needs skill proof" }
  ],
  candidates: [
    { id: "c1", name: "Siti Nur", privacy: "Public profile", role: "Product Designer", stage: "Screen", fit: 92, location: "Kuala Lumpur", availability: "2 weeks", salary: "RM 5k - 7k / month", education: "BA Design, Taylor's", experience: "1 year internship", careerStage: "Fresh Graduate", portfolio: "Strong", skills: ["Figma", "Research", "Design Systems"], reason: "Portfolio shows banking onboarding work and strong research evidence." },
    { id: "c2", name: "Daniel Lim", privacy: "Anonymized", role: "Data Analyst", stage: "Interview", fit: 88, location: "Petaling Jaya", availability: "Immediate", salary: "RM 4.8k - 6.5k / month", education: "BSc Statistics, UM", experience: "Graduate projects", careerStage: "Looking for first full-time job", portfolio: "Moderate", skills: ["SQL", "Python", "Dashboards"], reason: "Strong SQL dashboard proof and clear interest in marketplace analytics." },
    { id: "c3", name: "Priya Nair", privacy: "Public profile", role: "Frontend Developer", stage: "Saved", fit: 84, location: "Remote / Selangor", availability: "1 month", salary: "RM 6k - 8k / month", education: "Diploma Software Engineering", experience: "2 years freelance", careerStage: "Career Switcher", portfolio: "Strong", skills: ["React", "TypeScript", "Testing"], reason: "Transferable freelance delivery evidence with strong component testing habits." }
  ],
  employerRoles: [
    { id: "er1", title: "Product Design Intern", applicants: 84, qualified: 21, status: "Active" },
    { id: "er2", title: "Junior Data Analyst", applicants: 126, qualified: 34, status: "Active" },
    { id: "er3", title: "Graduate UX Researcher", applicants: 47, qualified: 16, status: "Draft" }
  ]
};

const STORE_KEY = "careergo-v4-state";

const ROLE_TYPES = [
  "Student",
  "Fresh Graduate",
  "Working Professional",
  "Career Switcher",
  "Freelancer",
  "Unemployed / Job Seeking",
  "Returning to Work",
  "Senior Professional",
  "Employer / Recruiter"
];

const CAREER_STAGES = [
  "Still studying",
  "Looking for internship",
  "Looking for first full-time job",
  "Currently employed but exploring",
  "Actively job hunting",
  "Planning to switch career",
  "Building freelance/side income",
  "Returning after a career break",
  "Growing into leadership",
  "Preparing for retirement or advisory work"
];

const DASHBOARD_TOUR_STEPS = [
  {
    target: "[data-tour-target='dashboard-hero']",
    title: "Your personal Career OS",
    body: "This dashboard changes based on your career stage, goals, skills, and preferences. It is the home base Vera uses to guide your next move.",
    mission: "Start here whenever you feel unsure what to do next."
  },
  {
    target: "[data-tour-target='workspace-nav']",
    title: "Your workspace tabs",
    body: "Move between your daily brief, job discovery, coaching, market value, and pipeline tracking from these tabs. The search bar next to them jumps straight to Vera.",
    mission: "Try Cmd/Ctrl + K to ask Vera something right now."
  },
  {
    target: "[data-tour-target='metrics']",
    title: "Readiness at a glance",
    body: "These are quick signals, not fake precision. They show whether CareerGo has enough evidence to recommend roles, resume actions, and next steps.",
    mission: "Improve the weakest signal first."
  },
  {
    target: "[data-tour-target='vera']",
    title: "Vera is your coach",
    body: "Vera is designed to act like a mentor, teacher, and life coach for your career. She uses your profile instead of giving generic chatbot answers.",
    mission: "Ask Vera for a 7-day plan after this tour."
  },
  {
    target: "[data-tour-target='applications']",
    title: "Application journey",
    body: "Track saved jobs, applications, follow-ups, and interview prep so your search feels organized instead of scattered.",
    mission: "Save or review one role that matches your roadmap."
  },
  {
    target: "[data-tour-target='missions']",
    title: "Small missions",
    body: "Missions turn career growth into manageable actions. Complete them to build evidence, confidence, and better recommendations.",
    mission: "Finish one beginner mission today."
  },
  {
    target: "[data-tour-target='growth']",
    title: "Long-term growth",
    body: "These are the bigger bets that compound over the next 6-18 months: career simulations, fair-pay benchmarks, your roadmap, and company research.",
    mission: "Open one long-term card and see where it leads."
  }
];

const APPLICATION_STAGES = [
  { key: "saved", label: "Saved", icon: "bookmark", tone: "gold" },
  { key: "applied", label: "Applied", icon: "send", tone: "cyan" },
  { key: "screening", label: "Screening", icon: "scan-search", tone: "cyan" },
  { key: "interview", label: "Interview", icon: "messages-square", tone: "green" },
  { key: "offer", label: "Offer", icon: "badge-check", tone: "green" },
  { key: "rejected", label: "Rejected", icon: "x-circle", tone: "red" },
  { key: "archived", label: "Archived", icon: "archive", tone: "" }
];

function readState() {
  const fallback = {
    auth: { users: [] },
    session: { loggedIn: false, role: "guest", currentUserId: null, name: "", isDemo: false },
    onboarding: { candidateDone: false, employerDone: false, currentStep: 0, lastSavedAt: "" },
    profile: createEmptyProfile(),
    savedJobs: [],
    applications: [],
    applicationRecords: {},
    ignoredJobs: [],
    comparedJobs: [],
    savedOrgs: [],
    missionProgress: {},
    missionStreak: { count: 0, lastDate: "" },
    marketPlan: null,
    growGoals: null,
    growMovesStarted: [],
    interviewChecklist: null,
    guidedTour: { dashboard: { status: "new", step: 0 } },
    reviews: DATA.reviews,
    chat: [],
    notifications: [],
    autopilotRules: {
      salary: "", location: "", threshold: 75, scanOnly: true, exclude: "",
      roleTargets: "Product Manager, Data Analyst, Software Engineer",
      experienceLevels: ["Junior", "Mid-level"],
      employmentTypes: ["Full-time"],
      minSalary: "5000",
      currency: "MYR",
      rulesLocation: "Kuala Lumpur",
      workArrangement: ["Remote", "Hybrid"],
      relocate: "No",
      companySize: ["Startup", "SME"],
      industries: ["Fintech", "AI"],
      cultureSignals: ["Mentorship", "Work-life"],
      preferredCompanies: "Grab, Setel, StoreHub",
      avoidCompanies: "",
      avoidIndustries: "Direct sales",
      avoidKeywords: "commission-only, unpaid internship",
      strictness: "Balanced",
      requiredSkills: "SQL, Product sense",
      niceToHave: "Figma, Amplitude",
      portfolioRequired: "No",
      acceptVague: "No",
      excludedRoles: "Sales, Telemarketing",
      excludedIndustries: "Gambling, MLM",
      actionMode: "recommend",
      autoApplyThreshold: 85,
      autoApplyCap: 3
    },
    autopilotLog: [],
    autopilotPaused: false,
    autopilotAutoApplyLog: [],
    autopilotAutoApplyExcluded: [],
    posts: DATA.communityPosts
  };
  try {
    return normalizeState({ ...fallback, ...JSON.parse(localStorage.getItem(STORE_KEY) || "{}") });
  } catch {
    return fallback;
  }
}

function writeState(next) {
  localStorage.setItem(STORE_KEY, JSON.stringify(next));
}

function nowStamp() {
  return new Date().toISOString();
}

/* ---- Notifications model -------------------------------------------------
   A notification is { id, type, title, body, icon, ts (ISO), read, href }.
   `type` drives the icon + accent; `ts` drives relative time + recency
   grouping; `read` drives the unread dot and bell badge count; `href` deep
   links the row to the relevant surface. Legacy items ({id,title,body}) are
   upgraded by normalizeNotification so old writers keep working. */
const NOTIFICATION_TYPE_ICON = {
  interview: "calendar-check",
  recruiter: "message-square-text",
  autopilot: "bot",
  application: "briefcase-business",
  worth: "trending-up",
  network: "user-round-plus",
  growth: "graduation-cap",
  vera: "sparkles",
  role: "sparkles",
  system: "info"
};

function notificationIconFor(note) {
  if (note && note.icon) return note.icon;
  return NOTIFICATION_TYPE_ICON[note && note.type] || "bell";
}

function normalizeNotification(note) {
  if (!note || typeof note !== "object") return null;
  const type = note.type || "vera";
  return {
    id: note.id || `n-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type,
    title: note.title || "",
    body: note.body || "",
    icon: note.icon || NOTIFICATION_TYPE_ICON[type] || "bell",
    ts: note.ts || nowStamp(),
    read: Boolean(note.read),
    href: note.href || ""
  };
}

function normalizeNotifications(list) {
  if (!Array.isArray(list)) return [];
  return list.map(normalizeNotification).filter(Boolean);
}

/* Prepend a notification onto state (dedupes by id, newest first).
   Unlike the old inline writers this does NOT cap the list at 5 - the
   dropdown slices to 5 itself, but notifications.html needs the history. */
function pushNotification(state, note) {
  const next = normalizeNotification(note);
  if (!next) return state;
  const existing = normalizeNotifications(state.notifications).filter(item => item.id !== next.id);
  state.notifications = [next, ...existing].slice(0, 60);
  return state;
}

function unreadNotificationCount(state) {
  return normalizeNotifications(state && state.notifications).filter(note => !note.read).length;
}

function markNotificationRead(id) {
  const state = readState();
  state.notifications = normalizeNotifications(state.notifications).map(note => note.id === id ? { ...note, read: true } : note);
  writeState(syncCurrentUser(state));
}

function markAllNotificationsRead() {
  const state = readState();
  state.notifications = normalizeNotifications(state.notifications).map(note => ({ ...note, read: true }));
  writeState(syncCurrentUser(state));
}

function dismissNotification(id) {
  const state = readState();
  state.notifications = normalizeNotifications(state.notifications).filter(note => note.id !== id);
  writeState(syncCurrentUser(state));
}

/* Compact relative time: "just now", "12m", "5h", "2d", "3w", else a date. */
function relativeTime(ts) {
  const then = new Date(ts).getTime();
  if (!then || Number.isNaN(then)) return "";
  const diff = Date.now() - then;
  if (diff < 0) return "now";
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "now";
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks}w`;
  return new Date(ts).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/* Recency bucket for the All Notifications page: Today / This week / Earlier. */
function notificationRecencyBucket(ts) {
  const then = new Date(ts).getTime();
  if (!then || Number.isNaN(then)) return "Earlier";
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if (then >= startOfToday) return "Today";
  if (then >= startOfToday - 6 * 86400000) return "This week";
  return "Earlier";
}

/* Realistic seed feed - specific, timestamped events drawn from features that
   actually exist in the product, replacing the old generic system messages. */
function seedNotifications() {
  const now = Date.now();
  const at = ms => new Date(now - ms).toISOString();
  const MIN = 60000, HOUR = 3600000, DAY = 86400000;
  return [
    { id: "n-interview", type: "interview", title: "Grab PM interview confirmed - Tue 10:00 AM", body: "Aisha (Recruiter) sent the calendar hold. Prep opens in Growth.", ts: at(12 * MIN), read: false, href: "grow.html#interview-coach" },
    { id: "n-autopilot", type: "autopilot", title: "Autopilot found 8 new matches", body: "3 strong fits at Grab, Stripe and Setel while you slept.", ts: at(2 * HOUR), read: false, href: "autopilot.html#autopilot-matches" },
    { id: "n-recruiter", type: "recruiter", title: "Notion recruiter replied", body: "\"Would love to move you to the case round - how's next week?\"", ts: at(5 * HOUR), read: false, href: "posts.html#messages" },
    { id: "n-worth", type: "worth", title: "Career Value trending up this week", body: "Finishing SQL for PMs pushed you into the top 22% of your cohort.", ts: at(1 * DAY), read: true, href: "market.html" },
    { id: "n-network", type: "network", title: "Priya at Stripe accepted your connection", body: "She's open to a 15-min intro this month.", ts: at(2 * DAY), read: true, href: "posts.html#messages" },
    { id: "n-application", type: "application", title: "Stripe moved you to Round 2", body: "Your APAC Payments application advanced - case round next.", ts: at(3 * DAY), read: true, href: "autopilot.html#pipeline-board" },
    { id: "n-growth", type: "growth", title: "You finished \"SQL for Product Managers\"", body: "+7% interview readiness and 40 more roles unlocked.", ts: at(4 * DAY), read: true, href: "grow.html#recommended-growth" },
    { id: "n-vera", type: "vera", title: "Vera drafted your 7-day switcher roadmap", body: "Review the Product Analyst path when you have a minute.", ts: at(6 * DAY), read: true, href: "grow.html#growth-journey" }
  ];
}

function createEmptyProfile(seed = {}) {
  const createdAt = nowStamp();
  return {
    id: seed.id || `user-${Date.now()}`,
    personal: {
      fullName: seed.fullName || "",
      email: seed.email || "",
      phone: seed.phone || "",
      ageRange: seed.ageRange || "",
      country: seed.country || "Malaysia",
      cityState: seed.cityState || "",
      preferredLanguage: seed.preferredLanguage || "English",
      roleType: seed.roleType || ""
    },
    careerStage: "",
    background: {
      school: "",
      educationLevel: "",
      courseMajor: "",
      expectedGraduationYear: "",
      academicPerformance: "",
      internshipExperience: "",
      projectExperience: "",
      clubLeadership: "",
      currentRole: "",
      industry: "",
      yearsExperience: "",
      currentSalaryRange: "",
      companySize: "",
      managementExperience: "",
      previousRoles: "",
      reasonForCareerGo: "",
      currentCareerField: "",
      targetCareerField: "",
      transferableSkills: "",
      switchConcerns: "",
      transitionTimeline: "",
      lastRole: "",
      careerGapDuration: "",
      gapReason: "",
      preferredWorkType: "",
      confidenceLevel: "",
      supportNeeded: "",
      expertiseArea: "",
      leadershipExperience: "",
      mentoringInterest: "",
      advisoryInterest: "",
      preferredWorkload: ""
    },
    goals: [],
    skills: {
      technical: [],
      soft: [],
      tools: [],
      certifications: [],
      languages: [],
      workExperience: "",
      projects: [],
      achievements: [],
      portfolioLinks: "",
      linkedin: "",
      github: "",
      website: ""
    },
    preferences: {
      industries: [],
      roles: [],
      locations: [],
      workMode: "Hybrid",
      employmentTypes: [],
      minimumSalary: "",
      relocate: "Maybe",
      companySize: "",
      workCulture: "",
      workLifeBalance: "Balanced",
      riskTolerance: "Medium",
      learningIntensity: "Moderate",
      ambitionLevel: "Steady growth"
    },
    resume: { name: "", uploaded: false },
    coach: {
      worry: "",
      supportStyle: "",
      growthPreference: "Stable growth",
      explanationStyle: "Simple guidance",
      missionFrequency: "Weekly",
      confidenceToday: "Medium"
    },
    privacy: {
      profileVisibility: "Private",
      allowEmployerDiscovery: false,
      allowCoachMemory: true
    },
    notifications: {
      weeklyDigest: true,
      interviewReminders: true,
      roadmapNudges: true,
      employerActivity: true,
      productUpdates: false
    },
    intelligence: generateCareerIntelligence({ careerStage: "", goals: [], skills: { technical: [], projects: [] }, resume: { uploaded: false }, preferences: {} }),
    onboardingStatus: { started: false, completed: false, currentStep: 0 },
    createdAt,
    updatedAt: createdAt
  };
}

function normalizeVeraConversations(state) {
  let conversations = Array.isArray(state.veraConversations)
    ? state.veraConversations.filter(c => c && typeof c === "object" && Array.isArray(c.messages))
    : [];
  if (!conversations.length) {
    const legacyMessages = Array.isArray(state.chat) ? state.chat : [];
    const now = Date.now();
    conversations = [{
      id: "conv-default",
      title: legacyMessages.find(m => m.from === "user")?.text || "New chat",
      createdAt: now,
      updatedAt: now,
      messages: legacyMessages
    }];
  } else {
    const withMessages = conversations.filter(c => c.messages.length > 0);
    if (withMessages.length) conversations = withMessages;
  }
  let activeId = state.activeVeraConversationId;
  if (!activeId || !conversations.some(c => c.id === activeId)) activeId = conversations[0].id;
  return { conversations, activeId };
}

function normalizeState(state) {
  const profile = normalizeProfile(state.profile || createEmptyProfile());
  const session = { loggedIn: false, role: "guest", currentUserId: null, name: "", isDemo: false, ...(state.session || {}) };
  if (session.loggedIn && !session.name) session.name = profile.personal.fullName;
  const { conversations: veraConversations, activeId: activeVeraConversationId } = normalizeVeraConversations(state);
  const activeVeraConversation = veraConversations.find(c => c.id === activeVeraConversationId);
  return ensureGuidedTour({
    ...state,
    auth: state.auth || { users: [] },
    session,
    onboarding: { candidateDone: false, employerDone: false, currentStep: 0, lastSavedAt: "", ...(state.onboarding || {}) },
    profile,
    veraConversations,
    activeVeraConversationId,
    chat: activeVeraConversation.messages,
    veraLastReadAt: Number(state.veraLastReadAt) || 0,
    notifications: normalizeNotifications(state.notifications),
    savedJobs: Array.isArray(state.savedJobs) ? state.savedJobs : [],
    applications: Array.isArray(state.applications) ? state.applications : [],
    applicationRecords: normalizeApplicationRecords(state),
    ignoredJobs: Array.isArray(state.ignoredJobs) ? state.ignoredJobs : [],
    comparedJobs: Array.isArray(state.comparedJobs) ? state.comparedJobs : [],
    savedOrgs: Array.isArray(state.savedOrgs) ? state.savedOrgs : [],
    followingUsers: Array.isArray(state.followingUsers) ? state.followingUsers : [],
    connectionStatus: state.connectionStatus && typeof state.connectionStatus === "object" ? state.connectionStatus : {},
    peopleSearchHistory: Array.isArray(state.peopleSearchHistory) ? state.peopleSearchHistory : [],
    marketPlan: state.marketPlan && typeof state.marketPlan === "object" ? state.marketPlan : null,
    growGoals: state.growGoals && typeof state.growGoals === "object" ? state.growGoals : null,
    growMovesStarted: Array.isArray(state.growMovesStarted) ? state.growMovesStarted : [],
    growMovesCompleted: Array.isArray(state.growMovesCompleted) ? state.growMovesCompleted : [],
    growMoveProgress: state.growMoveProgress && typeof state.growMoveProgress === "object" ? state.growMoveProgress : {},
    interviewChecklist: Array.isArray(state.interviewChecklist) ? state.interviewChecklist : null,
    autopilotRules: {
      salary: "", location: "", threshold: 75, scanOnly: true, exclude: "",
      roleTargets: "Product Manager, Data Analyst, Software Engineer",
      experienceLevels: ["Junior", "Mid-level"],
      employmentTypes: ["Full-time"],
      minSalary: "5000",
      currency: "MYR",
      rulesLocation: "Kuala Lumpur",
      workArrangement: ["Remote", "Hybrid"],
      relocate: "No",
      companySize: ["Startup", "SME"],
      industries: ["Fintech", "AI"],
      cultureSignals: ["Mentorship", "Work-life"],
      preferredCompanies: "Grab, Setel, StoreHub",
      avoidCompanies: "",
      avoidIndustries: "Direct sales",
      avoidKeywords: "commission-only, unpaid internship",
      strictness: "Balanced",
      requiredSkills: "SQL, Product sense",
      niceToHave: "Figma, Amplitude",
      portfolioRequired: "No",
      acceptVague: "No",
      excludedRoles: "Sales, Telemarketing",
      excludedIndustries: "Gambling, MLM",
      actionMode: "recommend",
      autoApplyThreshold: 85,
      autoApplyCap: 3,
      ...(state.autopilotRules || {})
    },
    autopilotLog: Array.isArray(state.autopilotLog) ? state.autopilotLog : [],
    autopilotPaused: Boolean(state.autopilotPaused),
    autopilotAutoApplyLog: Array.isArray(state.autopilotAutoApplyLog) ? state.autopilotAutoApplyLog : [],
    autopilotAutoApplyExcluded: Array.isArray(state.autopilotAutoApplyExcluded) ? state.autopilotAutoApplyExcluded : [],
    autopilotSavedRoles: Array.isArray(state.autopilotSavedRoles) ? state.autopilotSavedRoles : [],
    autopilotAppliedRoles: Array.isArray(state.autopilotAppliedRoles) ? state.autopilotAppliedRoles : [],
    autopilotDismissedRoles: Array.isArray(state.autopilotDismissedRoles) ? state.autopilotDismissedRoles : [],
    posts: Array.isArray(state.posts) ? state.posts : DATA.communityPosts,
    userRoles: normalizeUserRoles(state.userRoles),
    educationEntries: normalizeEducationEntries(state.educationEntries)
  });
}

/* ---- Resume data model (structured experience + education) ---------------
   The resume generator composes from EVERY source the user maintains:
   profile.* (Edit Career Data + Profile form) AND the structured stores
   state.userRoles / state.educationEntries / state.portfolioProjects that the
   Profile page's Add-role / Add-education modals write to. These two
   normalizers upgrade the older shapes in place (non-destructive - the legacy
   `date` and `body` fields are kept) so existing saved profiles keep working:
     userRoles:        date "Jun 2025 - Aug 2025" -> startDate/endDate,
                       body paragraph -> bullets[], + location
     educationEntries: years "2016 - 2020" -> graduationDate, + location   */
function splitDateRange(raw) {
  const parts = String(raw || "").split(/\s*[-–]\s*/).map(part => part.trim()).filter(Boolean);
  if (!parts.length) return ["", ""];
  if (parts.length === 1) return [parts[0], ""];
  return [parts[0], /present|current|now/i.test(parts[1]) ? "Present" : parts[1]];
}

function bodyToBullets(body) {
  return String(body || "")
    .split(/(?<=[.!?])\s+|\n+/)
    .map(line => line.trim().replace(/^[-•*]\s*/, ""))
    .filter(Boolean)
    .slice(0, 5);
}

function normalizeUserRoles(list) {
  if (!Array.isArray(list)) return [];
  return list.map(role => {
    const [start, end] = splitDateRange(role.date);
    return {
      ...role,
      org: role.org || "",
      location: role.location || "",
      startDate: role.startDate || start,
      endDate: role.endDate || end,
      bullets: Array.isArray(role.bullets) && role.bullets.length ? role.bullets : bodyToBullets(role.body),
      chips: Array.isArray(role.chips) ? role.chips : []
    };
  });
}

function normalizeEducationEntries(list) {
  if (!Array.isArray(list)) return [];
  return list.map(entry => ({
    ...entry,
    location: entry.location || "",
    graduationDate: entry.graduationDate || splitDateRange(entry.years)[1] || String(entry.years || "").trim(),
    bullets: Array.isArray(entry.bullets) ? entry.bullets : []
  }));
}

const TOUR_PAGE_KEYS = ["dashboard", "discover", "grow", "market", "autopilot", "posts"];

function ensureGuidedTour(state) {
  const guidedTour = state.guidedTour || {};
  TOUR_PAGE_KEYS.forEach(key => {
    guidedTour[key] = {
      status: "new",
      step: 0,
      ...(guidedTour[key] || {})
    };
  });
  state.guidedTour = guidedTour;
  return state;
}

function normalizeProfile(profile) {
  if (profile.personal) {
    const base = createEmptyProfile({ id: profile.id });
    return {
      ...base,
      ...profile,
      personal: { ...base.personal, ...profile.personal },
      background: { ...base.background, ...(profile.background || {}) },
      skills: { ...base.skills, ...(profile.skills || {}) },
      preferences: { ...base.preferences, ...(profile.preferences || {}) },
      resume: { ...base.resume, ...(profile.resume || {}) },
      coach: { ...base.coach, ...(profile.coach || {}) },
      privacy: { ...base.privacy, ...(profile.privacy || {}) },
      notifications: { ...base.notifications, ...(profile.notifications || {}) },
      onboardingStatus: { ...base.onboardingStatus, ...(profile.onboardingStatus || {}) },
      intelligence: profile.intelligence || generateCareerIntelligence(profile)
    };
  }
  const migrated = createEmptyProfile();
  migrated.personal.fullName = profile.name && profile.name !== "CareerGo User" ? profile.name : "";
  migrated.personal.email = profile.email || "";
  migrated.personal.cityState = profile.location || "";
  migrated.personal.roleType = profile.experience || "";
  migrated.careerStage = "";
  migrated.background.currentRole = profile.role || "";
  migrated.goals = profile.goal && profile.goal !== "Choose a target role" ? [profile.goal] : [];
  migrated.preferences.industries = profile.preferredIndustry ? [profile.preferredIndustry] : [];
  migrated.preferences.workMode = profile.workStyle || "Hybrid";
  migrated.skills.technical = Array.isArray(profile.skills) ? profile.skills : [];
  migrated.skills.projects = Array.isArray(profile.projects) ? profile.projects : [];
  migrated.resume.name = profile.resumeName || "";
  migrated.intelligence = generateCareerIntelligence(migrated);
  return migrated;
}

function createDemoProfile() {
  const profile = createEmptyProfile({
    id: "careergo-demo-user",
    fullName: "Mira Tan",
    email: "judge.demo@careergo.local",
    phone: "+60 12-345 6789",
    ageRange: "25-34",
    country: "Malaysia",
    cityState: "Petaling Jaya, Selangor",
    preferredLanguage: "English",
    roleType: "Career Switcher"
  });
  profile.careerStage = "Planning to switch career";
  profile.background = {
    ...profile.background,
    // Kept in step with mockEducationEntries() - the Edit Career Data page
    // reads these summary fields while the profile page reads the structured
    // education store, and a blank summary made the demo persona look
    // half-filled on the edit screen.
    educationLevel: "Bachelor degree",
    school: "Universiti Malaya",
    courseMajor: "Business Administration",
    expectedGraduationYear: "2020",
    academicPerformance: "CGPA 3.42 - Dean's List 2019",
    clubLeadership: "Business Analytics Club - events lead",
    currentRole: "Operations Executive",
    industry: "Marketplace Operations",
    yearsExperience: "3 years",
    currentSalaryRange: "RM 4,500 - RM 5,500 / month",
    companySize: "500-1,000 employees",
    previousRoles: "Customer operations intern, marketplace operations associate",
    reasonForCareerGo: "I want a clear path into product analytics without starting from zero.",
    currentCareerField: "Operations",
    targetCareerField: "Product Analytics",
    transferableSkills: "Process improvement, stakeholder communication, reporting, customer journey analysis",
    switchConcerns: "I need stronger SQL and portfolio proof before applying.",
    transitionTimeline: "3-6 months"
  };
  profile.goals = ["Find a job", "Improve resume", "Know my market salary", "Switch career", "Learn new skills", "Prepare for interview", "Build portfolio"];
  profile.skills = {
    ...profile.skills,
    technical: ["SQL basics", "Excel", "Looker Studio", "Figma", "Customer journey mapping"],
    soft: ["Stakeholder communication", "Problem solving", "Adaptability", "Presentation"],
    tools: ["Google Sheets", "Notion", "Jira", "Looker Studio", "Figma"],
    certifications: ["Google Data Analytics certificate in progress"],
    languages: ["English", "Bahasa Malaysia", "Mandarin"],
    workExperience: "3 years improving marketplace operations workflows, reporting weekly performance, and coordinating with product teams.",
    projects: ["Built a churn analysis dashboard for support tickets", "Mapped onboarding pain points for new sellers", "Created weekly operations scorecard"],
    // Job-tied metrics now live in the bullets of the role they belong to
    // (see mockUserRoles) - this list is reserved for awards/recognitions
    // that aren't attached to a specific job, per the resume spec.
    achievements: [],
    portfolioLinks: "notion.site/mira-product-analytics",
    linkedin: "linkedin.com/in/miratan-demo",
    github: "github.com/miratan-demo"
  };
  profile.preferences = {
    ...profile.preferences,
    industries: ["Technology", "Banking", "Marketplace"],
    roles: ["Product Analyst", "Data Analyst", "Associate Product Manager"],
    locations: ["Kuala Lumpur", "Petaling Jaya", "Remote Malaysia"],
    workMode: "Hybrid",
    employmentTypes: ["Full-time", "Contract"],
    minimumSalary: "RM 5,500 / month",
    relocate: "Maybe",
    companySize: "Growth-stage or enterprise",
    workCulture: "Mentorship, clear feedback, data-driven teams",
    workLifeBalance: "Balanced",
    riskTolerance: "Medium",
    learningIntensity: "High",
    ambitionLevel: "Fast but sustainable growth"
  };
  profile.resume = { name: "Mira_Tan_Product_Analytics_Resume.pdf", uploaded: true };
  profile.coach = {
    worry: "I worry employers will not believe my operations experience is relevant.",
    supportStyle: "Give me structured steps, confidence support, and honest trade-off analysis.",
    growthPreference: "Fast growth",
    explanationStyle: "Detailed explanations",
    missionFrequency: "Weekly",
    confidenceToday: "Medium"
  };
  // "Private" + employer discovery ON was contradictory, and it showed:
  // public-profile.html read the discovery flag and said "Live to employers"
  // while Settings said "Private". The demo persona is actively job hunting.
  profile.privacy = {
    profileVisibility: "Visible to employers",
    allowEmployerDiscovery: true,
    allowCoachMemory: true
  };
  profile.onboardingStatus = { started: true, completed: true, currentStep: 6 };
  profile.intelligence = generateCareerIntelligence(profile);
  profile.updatedAt = nowStamp();
  return profile;
}

/* Structured career history for the demo persona (Mira Tan). MVP has no AI
   API, so "Generate resume" is deterministic composition rather than model
   output - which means the seeded data has to carry the substance the resume
   shows: real company, location, start/end dates, and 3-5 quantified bullets
   per role. Achievement metrics live INSIDE the role they belong to (rather
   than a separate Achievements list), matching the reference layout. */
function mockUserRoles() {
  return [
    {
      id: "role-ops-exec", org: "ShopMatrix Sdn Bhd", initials: "SS",
      title: "Operations Executive — Marketplace Operations",
      location: "Petaling Jaya", startDate: "Jan 2023", endDate: "Present",
      date: "Jan 2023 - Present",
      chips: ["SQL", "Looker Studio", "Google Sheets"],
      bullets: [
        "Built a churn analysis dashboard from support ticket data, surfacing the top 3 drop-off causes for the ops team",
        "Reduced manual weekly reporting time by 40% by automating data pulls with Google Sheets and Looker Studio",
        "Mapped onboarding pain points for new sellers and proposed fixes now used across the 800+ seller base",
        "Coordinated weekly syncs between operations and product teams to prioritize workflow improvements"
      ]
    },
    {
      id: "role-ops-assoc", org: "ShopMatrix Sdn Bhd", initials: "SS",
      title: "Marketplace Operations Associate",
      location: "Petaling Jaya", startDate: "Jun 2021", endDate: "Dec 2022",
      date: "Jun 2021 - Dec 2022",
      chips: ["Reporting", "Process mapping"],
      bullets: [
        "Created a weekly operations scorecard tracking fulfillment and seller response metrics",
        "Supported a seller onboarding workflow that scaled to 800+ active accounts"
      ]
    },
    {
      id: "role-ops-intern", org: "ShopMatrix Sdn Bhd", initials: "SS",
      title: "Customer Operations Intern",
      location: "Petaling Jaya", startDate: "Jan 2021", endDate: "May 2021",
      date: "Jan 2021 - May 2021",
      chips: ["Customer support"],
      bullets: [
        "Handled first-line customer escalations and logged recurring issues for the operations team"
      ]
    }
  ];
}

function mockEducationEntries() {
  return [
    {
      id: "edu-um", icon: "graduation-cap",
      title: "Universiti Malaya",
      subtitle: "Bachelor of Business Administration",
      location: "Kuala Lumpur",
      years: "2016 - 2020", graduationDate: "Graduated 2020",
      score: "", bullets: []
    }
  ];
}

function applyDemoAccount(state) {
  const profile = createDemoProfile();
  const previewAccount = {
    id: profile.id,
    email: profile.personal.email,
    password: "",
    fullName: profile.personal.fullName,
    role: "candidate",
    profile,
    createdAt: profile.createdAt,
    isDemo: true
  };
  state.auth = state.auth || { users: [] };
  state.auth.users = [
    ...state.auth.users.filter(user => user.id !== previewAccount.id),
    previewAccount
  ];
  state.session = { loggedIn: true, role: "candidate", currentUserId: profile.id, name: profile.personal.fullName, isDemo: true };
  state.profile = profile;
  state.userRoles = mockUserRoles();
  state.educationEntries = mockEducationEntries();
  state.onboarding = { ...state.onboarding, candidateDone: true, currentStep: 6, lastSavedAt: nowStamp() };
  // Populate every pipeline column so the Live pipeline board reads as a real
  // funnel out of the box: 2 saved, 1 applied, 1 screening, 1 interviewing,
  // 1 offer. savedJobs holds every tracked id (the app's invariant - see
  // updateApplicationStage); applications holds everything applied+.
  state.applicationRecords = {
    "job-ai-product": createApplicationRecord("job-ai-product", "saved", {
      nextAction: "Ask Vera whether this is a stretch role or a strategic long-term target.",
      deadline: "This week",
      note: "High upside, but product strategy proof is still light - decide before applying."
    }),
    "job-ux-researcher": createApplicationRecord("job-ux-researcher", "saved", {
      nextAction: "Skim two recent case studies and tailor one portfolio piece before you apply.",
      deadline: "Fri",
      note: "Strong archetype match (88%). Worth applying this week."
    }),
    "job-product-designer": createApplicationRecord("job-product-designer", "applied", {
      appliedAt: "3 days ago",
      updatedLabel: "3 days ago",
      nextAction: "Send a short follow-up if there's no reply by the weekend.",
      deadline: "Next 3 days",
      note: "Application submitted. Employer hasn't opened it yet."
    }),
    "job-career-advisor": createApplicationRecord("job-career-advisor", "screening", {
      appliedAt: "6 days ago",
      updatedLabel: "2 days ago",
      nextAction: "Prepare proof for your two strongest skills - recruiter screen is next.",
      deadline: "Next 3 days",
      note: "Recruiter is reviewing your application."
    }),
    "job-data-analyst": createApplicationRecord("job-data-analyst", "interview", {
      appliedAt: "1 week ago",
      updatedLabel: "2 days ago",
      nextAction: "Practice one SQL case and prepare a short dashboard walkthrough before Friday.",
      deadline: "Friday",
      note: "Round 2 scheduled. Vera flagged SQL proof as the interview risk."
    }),
    // Autopilot-sourced role (resolved via autopilotMatchAsJob in getTrackedJobs),
    // so the Offer column is populated end to end.
    "ap-setel-apm": createApplicationRecord("ap-setel-apm", "offer", {
      appliedAt: "3 weeks ago",
      updatedLabel: "1 day ago",
      nextAction: "Counter at RM 10,300 - 72% acceptance. Bring your Career Value data.",
      deadline: "Mon",
      note: "Offer is RM 1,400 below your Fair Pay range - room to negotiate."
    })
  };
  state.savedJobs = Object.keys(state.applicationRecords);
  state.applications = Object.entries(state.applicationRecords)
    .filter(([, record]) => stageIndex(record.stage) >= stageIndex("applied"))
    .map(([id]) => id);
  state.savedOrgs = ["grab", "maybank", "taylors"];
  state.missionProgress = {
    ...state.missionProgress,
    "pm1": 45,
    "pm2": 30,
    "pm3": 20,
    "tour-profile": 60
  };
  if (!state.missionStreak || !state.missionStreak.lastDate) {
    state.missionStreak = { count: 12, lastDate: new Date().toISOString().slice(0, 10) };
  }
  state.guidedTour = { dashboard: { status: "new", step: 0, startedAt: "" } };
  state.notifications = seedNotifications();
  return state;
}

function startDemoDashboard() {
  const next = applyDemoAccount(readState());
  writeState(next);
  location.href = "dashboard.html";
}

/* Employer counterpart to applyDemoAccount() - opens a judge preview of the
   Employer OS (candidate search, hiring pipeline, talent pool) rather than
   the candidate workspace. Employer-app.html reads mostly from the static
   DATA.candidates seed, so this just needs a session + a filled-in company
   profile, not the rich application-record seeding the candidate path does. */
function applyDemoEmployerAccount(state) {
  seedMockEmployerProfile(state);
  state.session = { loggedIn: true, role: "employer", currentUserId: "demo-employer", name: "Priya Menon", isDemo: true };
  state.onboarding = { ...state.onboarding, employerDone: true, lastSavedAt: nowStamp() };
  return state;
}

function wireStaticLoginForm() {
  const form = qs(".login-form-card");
  if (!form || form.dataset.wired) return;
  form.dataset.wired = "true";

  const roleTabs = qsa("[data-login-role]", form);
  const emailInput = qs("[data-login-email]", form);
  let selectedLoginRole = normalizeAuthRole(getInitialAuthRole());

  function applyLoginRole(role) {
    selectedLoginRole = normalizeAuthRole(role);
    persistAuthRole(selectedLoginRole);
    roleTabs.forEach(tab => {
      const active = tab.dataset.loginRole === selectedLoginRole;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    if (emailInput) emailInput.placeholder = selectedLoginRole === "employer" ? "you@company.com" : "you@email.com";
  }
  roleTabs.forEach(tab => tab.addEventListener("click", () => applyLoginRole(tab.dataset.loginRole)));
  applyLoginRole(selectedLoginRole);

  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    const next = readState();
    const redirectTarget = sanitizeRedirectPath(new URLSearchParams(location.search).get("redirect"));
    const isEmployer = selectedLoginRole === "employer";
    const goToDestination = () => {
      if (isEmployer) { location.href = redirectTarget || "employer-app.html"; return; }
      location.href = redirectTarget || (next.onboarding.candidateDone ? "dashboard.html" : "onboarding.html");
    };
    if (!email && !password) {
      if (isEmployer) applyDemoEmployerAccount(next);
      else applyDemoAccount(next);
      writeState(next);
      showToast("Demo workspace opened.");
      goToDestination();
      return;
    }
    if (!email || !password) {
      showToast("Enter both email and password, or leave both empty for the judge preview.", "info");
      return;
    }
    const user = next.auth.users.find(item => item.email === email && item.password === password);
    if (!user) {
      showToast("No matching account found on this device.", "info");
      return;
    }
    next.session = { loggedIn: true, role: user.role || "candidate", currentUserId: user.id, name: user.fullName };
    if (user.profile) next.profile = normalizeProfile(user.profile);
    writeState(next);
    showToast("Welcome back.");
    location.href = redirectTarget || (user.role === "employer" ? "employer-app.html" : (next.onboarding.candidateDone ? "dashboard.html" : "onboarding.html"));
  });
}

function ensureDemoDashboardSession() {
  if (document.body.dataset.page !== "dashboard") return;
  const state = readState();
  if (state.session.loggedIn && state.session.role === "candidate" && state.onboarding.candidateDone) return;
  writeState(applyDemoAccount(state));
}

function splitList(value) {
  return String(value || "").split(",").map(item => item.trim()).filter(Boolean);
}

function stageIndex(stage) {
  return Math.max(0, APPLICATION_STAGES.findIndex(item => item.key === stage));
}

function stageMeta(stage) {
  return APPLICATION_STAGES.find(item => item.key === stage) || APPLICATION_STAGES[0];
}

function createApplicationRecord(jobId, stage = "saved", seed = {}) {
  const job = DATA.jobs.find(item => item.id === jobId) || DATA.jobs[0];
  const now = seed.createdAt || nowStamp();
  const stageLabel = stageMeta(stage).label;
  const timeline = seed.timeline || [
    { label: "Saved role", date: seed.savedAt || "Today", done: true },
    { label: "Resume tailored", date: stageIndex(stage) >= stageIndex("applied") ? "Today" : "Next", done: stageIndex(stage) >= stageIndex("applied") },
    { label: "Applied", date: stageIndex(stage) >= stageIndex("applied") ? "Today" : "Pending", done: stageIndex(stage) >= stageIndex("applied") },
    { label: "Screening", date: stageIndex(stage) >= stageIndex("screening") ? "In progress" : "Pending", done: stageIndex(stage) >= stageIndex("screening") },
    { label: "Interview", date: stageIndex(stage) >= stageIndex("interview") ? "Scheduled" : "Pending", done: stageIndex(stage) >= stageIndex("interview") },
    { label: "Outcome", date: stageIndex(stage) >= stageIndex("offer") ? stageLabel : "Pending", done: ["offer", "rejected", "archived"].includes(stage) }
  ];
  return {
    jobId,
    stage,
    savedAt: seed.savedAt || "Today",
    appliedAt: seed.appliedAt || (stageIndex(stage) >= stageIndex("applied") ? "Today" : ""),
    deadline: seed.deadline || (stage === "saved" ? "This week" : "Next 3 days"),
    nextAction: seed.nextAction || defaultApplicationAction(job, stage),
    note: seed.note || `Vera is watching for ${job.skills[0]} proof and company-fit signals.`,
    updatedLabel: seed.updatedLabel || defaultUpdatedLabel(stage),
    timeline,
    updatedAt: now
  };
}

function defaultUpdatedLabel(stage) {
  if (stage === "saved") return "1 week ago";
  if (stage === "applied") return "4 days ago";
  if (stage === "screening") return "3 days ago";
  if (stage === "interview") return "2 days ago";
  if (stage === "offer") return "1 day ago";
  if (stage === "rejected") return "2 weeks ago";
  return "3 weeks ago";
}

function defaultApplicationAction(job, stage) {
  if (stage === "saved") return `Research ${job.company} and decide whether this belongs in your shortlist.`;
  if (stage === "applied") return "Send a thoughtful follow-up if there is no update after 5-7 days.";
  if (stage === "screening") return `Prepare proof for ${job.skills[0]} and ${job.skills[1]}.`;
  if (stage === "interview") return "Practice one role-specific story and one salary expectation answer.";
  if (stage === "offer") return "Compare salary, growth, culture, and long-term fit before accepting.";
  if (stage === "rejected") return "Ask Vera to convert feedback into a next-application improvement.";
  return "Archive or revisit later if your goals change.";
}

function applicationContinueHref(job, record) {
  if (record.stage === "interview") return "grow.html#interview-coach";
  if (record.stage === "offer") return "market.html#salary-negotiation";
  const topic = (record.nextAction || `next steps for ${job.title} at ${job.company}`).replace(/^ask vera\s+/i, "");
  return `posts.html?topic=${encodeURIComponent(topic)}#messages`;
}

function normalizeApplicationRecords(state) {
  const records = { ...(state.applicationRecords || {}) };
  (Array.isArray(state.savedJobs) ? state.savedJobs : []).forEach(jobId => {
    if (!records[jobId]) records[jobId] = createApplicationRecord(jobId, "saved");
  });
  (Array.isArray(state.applications) ? state.applications : []).forEach(jobId => {
    if (!records[jobId]) records[jobId] = createApplicationRecord(jobId, "applied");
    if (records[jobId].stage === "saved") records[jobId] = { ...records[jobId], stage: "applied", appliedAt: records[jobId].appliedAt || "Today" };
  });
  Object.keys(records).forEach(jobId => {
    records[jobId] = { ...createApplicationRecord(jobId, records[jobId].stage || "saved"), ...records[jobId] };
  });
  return records;
}

function autopilotMatchAsJob(role) {
  return {
    id: role.id,
    title: role.title,
    company: role.company,
    location: role.location,
    salary: role.salary,
    type: role.workMode || "Hybrid",
    level: "",
    industry: "",
    match: role.match,
    posted: role.found,
    skills: [],
    why: [role.why].filter(Boolean),
    caution: role.watch || "",
    description: role.why || ""
  };
}

function getTrackedJobs(state = readState()) {
  return Object.values(state.applicationRecords || {})
    .map(record => {
      const job = DATA.jobs.find(item => item.id === record.jobId)
        || (() => {
          const role = AUTOPILOT_MATCHES.find(item => item.id === record.jobId);
          return role ? autopilotMatchAsJob(role) : null;
        })();
      return { record, job };
    })
    .filter(item => item.job);
}

function updateApplicationStage(jobId, stage) {
  const state = readState();
  const existing = state.applicationRecords?.[jobId] || createApplicationRecord(jobId, stage);
  const job = DATA.jobs.find(item => item.id === jobId) || DATA.jobs[0];
  const record = createApplicationRecord(jobId, stage, {
    ...existing,
    stage,
    appliedAt: stageIndex(stage) >= stageIndex("applied") ? existing.appliedAt || "Today" : existing.appliedAt,
    nextAction: defaultApplicationAction(job, stage),
    updatedAt: nowStamp()
  });
  state.applicationRecords = { ...(state.applicationRecords || {}), [jobId]: record };
  if (!state.savedJobs.includes(jobId)) state.savedJobs.push(jobId);
  if (stageIndex(stage) >= stageIndex("applied") && !state.applications.includes(jobId)) state.applications.push(jobId);
  if (stage === "saved") state.applications = state.applications.filter(id => id !== jobId);
  writeState(syncCurrentUser(state));
  return record;
}

function applicationStagePill(stage) {
  const meta = stageMeta(stage);
  return `<span class="pill ${meta.tone}">${icon(meta.icon)} ${meta.label}</span>`;
}

function applicationProgress(record) {
  const max = APPLICATION_STAGES.length - 3;
  const progress = Math.min(100, Math.round((Math.min(stageIndex(record.stage), max) / max) * 100));
  return progressBar(progress);
}

function applicationSummaryCounts(state = readState()) {
  const tracked = getTrackedJobs(state);
  return APPLICATION_STAGES.reduce((acc, stage) => {
    acc[stage.key] = tracked.filter(item => item.record.stage === stage.key).length;
    return acc;
  }, {});
}

/* ---------------------------------------------------------------------------
 * Live pipeline board (Pipeline page → Applications tab).
 *
 * The board is now driven entirely by the app's real application store
 * (state.applicationRecords via getTrackedJobs), the SAME store the Dashboard,
 * Discover, Saved and role.html pages write to. So a role applied to anywhere
 * in the app appears here automatically, and moves made here show up there.
 *
 * The five funnel columns fold the seven APPLICATION_STAGES down to the stages
 * a candidate actually thinks in: Saved (interested, not applied) → Applied
 * (submitted, incl. recruiter screening) → Interviewing → Offer → Closed
 * (rejected/archived, kept for the record). "Closed" only renders when it has
 * cards.
 *
 * Employer integration is mocked in this MVP: normally the employer advances
 * you when they review your application, so every active card also carries a
 * manual "Move" control as the backup path the user asked for.
 * ------------------------------------------------------------------------- */
const PIPELINE_BOARD_COLUMNS = [
  { key: "saved", label: "Saved", kind: "saved", stages: ["saved"], addStage: "saved" },
  { key: "applied", label: "Applied", kind: "active", stages: ["applied", "screening"], addStage: "applied" },
  { key: "interview", label: "Interviewing", kind: "active", stages: ["interview"], addStage: "interview" },
  { key: "offer", label: "Offer", kind: "active", stages: ["offer"], addStage: "offer" },
  { key: "closed", label: "Closed", kind: "closed", stages: ["rejected", "archived"], addStage: "archived" }
];

function pipelineBoardData(state = readState()) {
  const tracked = getTrackedJobs(state);
  return PIPELINE_BOARD_COLUMNS
    .map(column => ({ ...column, items: tracked.filter(item => column.stages.includes(item.record.stage)) }))
    // Closed is noise until there's something in it.
    .filter(column => column.key !== "closed" || column.items.length);
}

/* Momentum for an applied+ card, derived from stage progress and recency -
 * an honest "how alive is this application" read, NOT the role's match score
 * (a great match you applied to 3 weeks ago with silence has low momentum). */
function pipelineMomentum(record) {
  const stale = /2 weeks|3 weeks|month/i.test(record.updatedLabel || "");
  let score;
  if (record.stage === "offer") score = 96;
  else if (record.stage === "interview") score = stale ? 60 : 88;
  else if (record.stage === "screening") score = stale ? 47 : 73;
  else if (record.stage === "applied") score = stale ? 39 : 66;
  else score = 52;
  return { score, ...pipelineMomentumStatus(score) };
}

/* The concrete next step for an active card, phrased as an employer-review
 * status + the manual fallback. */
function pipelineActiveStatus(record) {
  if (record.stage === "applied") return "Awaiting employer review";
  if (record.stage === "screening") return "Recruiter screening in progress";
  if (record.stage === "interview") return "Interview loop";
  if (record.stage === "offer") return "Offer on the table";
  if (record.stage === "rejected") return "Not moving forward";
  return "Archived";
}

function untrackApplication(jobId) {
  const state = readState();
  const records = { ...(state.applicationRecords || {}) };
  delete records[jobId];
  state.applicationRecords = records;
  state.savedJobs = (state.savedJobs || []).filter(id => id !== jobId);
  state.applications = (state.applications || []).filter(id => id !== jobId);
  writeState(syncCurrentUser(state));
}

// The stages a card can walk through, in funnel order. Rejected/archived sit
// off this line and are only reachable via the "Move to" menu.
const PIPELINE_FUNNEL = ["saved", "applied", "screening", "interview", "offer"];

function pipelineJobHref(job) {
  // The per-role detail page is role.html (findRoleById resolves DATA.jobs +
  // RECOMMENDED_ROLES); Autopilot-only matches (ap-*) live on job-detail.html.
  // NOT discover.html?job= - that param is only read by discover's dead
  // legacy branch, so it just dumped the user at the top of Discover.
  return String(job.id).startsWith("ap-")
    ? `job-detail.html?role=${encodeURIComponent(job.id)}`
    : `role.html?role=${encodeURIComponent(job.id)}`;
}

/* One pipeline card. Saved roles (interested, not applied) get a lighter,
 * always-open card that leads with Apply - there's no application to track yet,
 * so no momentum or stage stepper. Everything applied+ gets the collapsible
 * card with momentum, an employer-review status, a stage stepper and the manual
 * Move control. */
function pipelineBoardCardMarkup(column, item) {
  const { job, record } = item;
  const esc = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const secondLine = [job.title, job.location].filter(Boolean).join(" &middot; ");
  const jobHref = pipelineJobHref(job);

  if (column.kind === "saved") {
    return `
      <section class="cg-pipeline-card cg-pipeline-card--saved" data-pipeline-card="${esc(job.id)}">
        <div class="cg-pipeline-saved-head">
          <span class="cg-pipeline-card-icon">${icon("building-2")}</span>
          <span class="cg-pipeline-card-heading"><h4>${esc(job.company)}</h4><p>${secondLine}</p></span>
          <span class="cg-pipeline-saved-tag">${icon("bookmark")} Saved</span>
        </div>
        ${record.note ? `<p class="cg-pipeline-saved-note">${esc(record.note)}</p>` : ""}
        <div class="cg-pipeline-saved-meta">
          <span>${icon("clock")} Apply by ${esc(record.deadline || "soon")}</span>
          ${Number(job.match) ? `<span>${icon("target")} ${esc(job.match)}% match</span>` : ""}
        </div>
        <div class="cg-pipeline-card-actions">
          <button type="button" class="cg-pipeline-btn cg-pipeline-btn--primary" data-pipeline-apply="${esc(job.id)}">${icon("send")} Apply now</button>
          <a class="cg-pipeline-btn" href="${jobHref}">${icon("external-link")} View job</a>
          <button type="button" class="cg-pipeline-btn cg-pipeline-btn--ghost" data-pipeline-remove="${esc(job.id)}">${icon("trash-2")} Remove</button>
        </div>
      </section>
    `;
  }

  const momentum = pipelineMomentum(record);
  const detailId = `cg-pipeline-card-${String(job.id).replace(/[^a-z0-9]+/gi, "-")}`;
  const funnelIndex = PIPELINE_FUNNEL.indexOf(record.stage);
  const nextStage = funnelIndex >= 0 && funnelIndex < PIPELINE_FUNNEL.length - 1 ? PIPELINE_FUNNEL[funnelIndex + 1] : "";
  const stepper = PIPELINE_FUNNEL.map(stageKey => {
    const done = stageIndex(record.stage) > stageIndex(stageKey) || (["rejected", "archived"].includes(record.stage) && stageKey !== "offer");
    const current = record.stage === stageKey;
    return `<span class="cg-pipeline-step${current ? " is-current" : done ? " is-done" : ""}" title="${esc(stageMeta(stageKey).label)}"><i></i><small>${esc(stageMeta(stageKey).label)}</small></span>`;
  }).join("");
  const moveOptions = APPLICATION_STAGES
    .map(stage => `<option value="${stage.key}"${stage.key === record.stage ? " selected" : ""}>${esc(stage.label)}</option>`)
    .join("");

  return `
    <section class="cg-pipeline-card" data-pipeline-card="${esc(job.id)}">
      <button type="button" class="cg-pipeline-card-summary" data-pipeline-card-toggle aria-expanded="false" aria-controls="${detailId}">
        <span class="cg-pipeline-card-icon">${icon("building-2")}</span>
        <span class="cg-pipeline-card-heading"><h4>${esc(job.company)}</h4><p>${secondLine}</p></span>
        <span class="cg-pipeline-card-score" title="Momentum reflects how recent your last activity is and how far you are through this employer's process.">
          <i class="cg-pipeline-momentum-dot tone-${momentum.tone}"></i>
          <small>Momentum - ${momentum.label}</small>
          <b>${momentum.score}%</b>
        </span>
        <span class="cg-pipeline-card-next">Due ${esc(record.deadline || "soon")}</span>
        <span class="cg-pipeline-card-chevron">${icon("chevron-down")}</span>
      </button>
      <div class="cg-pipeline-card-detail" id="${detailId}">
        <div class="cg-pipeline-card-detail-inner">
          <div class="cg-pipeline-stepper">${stepper}</div>
          <span class="cg-pipeline-timeline">${icon("clock")} ${esc(pipelineActiveStatus(record))} &middot; updated ${esc(record.updatedLabel || "recently")}</span>
          ${record.note ? `<p>${esc(record.note)}</p>` : ""}
          ${record.nextAction ? `<blockquote>${icon("sparkles")} Next - ${esc(record.nextAction)}</blockquote>` : ""}
          <div class="cg-pipeline-move">
            ${nextStage ? `<button type="button" class="cg-pipeline-btn cg-pipeline-btn--primary" data-pipeline-advance="${esc(job.id)}" data-pipeline-advance-stage="${nextStage}">${icon("arrow-right")} Move to ${esc(stageMeta(nextStage).label)}</button>` : ""}
            <label class="cg-pipeline-move-select">${icon("git-branch")}
              <select data-pipeline-move="${esc(job.id)}" aria-label="Move ${esc(job.company)} to another stage">${moveOptions}</select>
            </label>
          </div>
          <footer>
            <a href="${jobHref}">${icon("external-link")} View job</a>
            <a href="posts.html?topic=${encodeURIComponent((record.nextAction || `next steps for ${job.title} at ${job.company}`))}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</a>
          </footer>
        </div>
      </div>
    </section>
  `;
}

/* "Add to pipeline" picker - lists every role the user hasn't tracked yet,
 * from both the job catalogue and Autopilot matches, and drops the chosen one
 * straight into the column's stage. This replaces the "+" that used to just
 * bounce to the top of Discover. */
function openAddToPipelineModal(stageKey, onDone) {
  const state = readState();
  const tracked = new Set(Object.keys(state.applicationRecords || {}));
  const catalogue = [...DATA.jobs, ...AUTOPILOT_MATCHES.map(autopilotMatchAsJob)];
  const seen = new Set();
  const candidates = catalogue.filter(job => {
    if (tracked.has(job.id) || seen.has(job.id)) return false;
    seen.add(job.id);
    return true;
  });
  const stageLabel = stageMeta(stageKey).label;
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const rowMarkup = job => `
    <button type="button" class="cg-addpipe-row" data-addpipe-job="${esc2(job.id)}">
      <span class="cg-addpipe-logo">${icon("building-2")}</span>
      <span class="cg-addpipe-copy">
        <strong>${esc2(job.title)}</strong>
        <small>${esc2(job.company)}${job.location ? ` &middot; ${esc2(job.location)}` : ""}${job.salary ? ` &middot; ${esc2(job.salary)}` : ""}</small>
      </span>
      ${Number(job.match) ? `<span class="cg-addpipe-match">${esc2(job.match)}%</span>` : ""}
      <span class="cg-addpipe-add">${icon("plus")} Add</span>
    </button>
  `;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-addpipe-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-addpipe-modal" role="dialog" aria-label="Add to ${esc2(stageLabel)}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${icon("plus")} Add to ${esc2(stageLabel)}</div>
          <h2>Track a role in your pipeline</h2>
          <p class="cg-h2-sub">Pick a role to drop straight into <strong>${esc2(stageLabel)}</strong>. You can move it anytime.</p>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      ${candidates.length ? `<label class="cg-addpipe-search">${icon("search")}<input type="text" data-addpipe-search placeholder="Search roles or companies..." aria-label="Search roles"></label>` : ""}
      <div class="cg-addpipe-list" data-addpipe-list>
        ${candidates.length
          ? candidates.map(rowMarkup).join("")
          : `<p class="cg-addpipe-empty">${icon("check-circle-2")} Every role in your catalogue is already in your pipeline. Discover more in <a href="discover.html">Discover</a>.</p>`}
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  const close = () => { backdrop.remove(); document.removeEventListener("keydown", onEsc); };
  function onEsc(event) { if (event.key === "Escape") close(); }
  document.addEventListener("keydown", onEsc);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) close(); });
  const search = qs("[data-addpipe-search]", backdrop);
  search?.addEventListener("input", () => {
    const term = search.value.trim().toLowerCase();
    qsa("[data-addpipe-job]", backdrop).forEach(row => {
      row.style.display = !term || row.textContent.toLowerCase().includes(term) ? "" : "none";
    });
  });
  qsa("[data-addpipe-job]", backdrop).forEach(row => row.addEventListener("click", () => {
    const job = candidates.find(item => item.id === row.dataset.addpipeJob);
    if (!job) return;
    updateApplicationStage(job.id, stageKey);
    close();
    showToast(`Added ${job.title} at ${job.company} to ${stageLabel}.`);
    onDone?.();
  }));
  search?.focus();
  createIcons();
}

function checkboxValues(form, name) {
  return form.getAll(name).map(value => String(value));
}

function getUserName(state = readState()) {
  return state.profile.personal.fullName || state.session.name || "CareerGo member";
}

function getFirstName(state = readState()) {
  return getUserName(state).split(" ")[0] || "there";
}

function getTargetLabel(profile) {
  const preferences = profile.preferences || {};
  const background = profile.background || {};
  const goals = profile.goals || [];
  return (preferences.roles || [])[0] || goals[0] || background.targetCareerField || background.currentRole || "your next career step";
}

function generateCareerIntelligence(profile) {
  const technical = profile.skills?.technical?.length || 0;
  const projects = profile.skills?.projects?.length || 0;
  const hasResume = Boolean(profile.resume?.uploaded || profile.resume?.name);
  const goals = profile.goals || [];
  const stage = profile.careerStage || "Not selected yet";
  const confidence = profile.coach?.confidenceToday || profile.background?.confidenceLevel || "Medium";
  const evidence = technical + projects + (hasResume ? 2 : 0);
  const readinessLevel = evidence >= 7 ? "Strong" : evidence >= 3 ? "Moderate" : "Early";
  const resumeReadiness = hasResume ? "Resume available for review" : "Resume not uploaded yet";
  const atsReadiness = hasResume && technical >= 3 ? "Likely workable, needs role-specific keywords" : hasResume ? "Needs keyword and evidence review" : "Cannot estimate until a resume or manual profile is added";
  const marketFit = goals.includes("Know my market salary") || goals.includes("Understand my career value") || goals.includes("Get promoted") ? "Market value should be benchmarked next" : "Market fit depends on target roles selected";
  const salaryPositioning = profile.preferences?.minimumSalary ? `Target starts around ${profile.preferences.minimumSalary}` : "No salary target set yet";
  const learningPriority = profile.background?.targetCareerField && profile.background?.currentCareerField
    ? `Bridge skills from ${profile.background.currentCareerField} to ${profile.background.targetCareerField}`
    : technical ? "Turn existing skills into stronger proof" : "Add 3-5 core skills for your chosen path";
  return {
    readinessLevel,
    confidence,
    summary: `You appear ${readinessLevel.toLowerCase()} for ${getTargetLabel(profile)}. This is based on your current stage, profile detail, resume availability, and evidence added so far.`,
    careerStage: stage,
    resumeReadiness,
    atsReadiness,
    skillCompetitiveness: technical >= 5 ? "Competitive skill base" : technical >= 2 ? "Developing skill base" : "Skill base still unclear",
    marketFit,
    salaryPositioning,
    learningPriority,
    recommendedPaths: recommendedPathsFor(profile),
    immediateActions: nextActionsFor(profile),
    longTermOpportunities: longTermFor(profile),
    readinessScore: readinessLevel === "Strong" ? 84 : readinessLevel === "Moderate" ? 66 : 42,
    updatedAt: nowStamp()
  };
}

function confidenceProgress(confidence) {
  const normalized = String(confidence || "Medium").toLowerCase();
  if (normalized.includes("high")) return 85;
  if (normalized.includes("low")) return 35;
  return 60;
}

function healthRing(intel, includeConfidenceWord = true) {
  const progress = confidenceProgress(intel.confidence);
  const subtitle = includeConfidenceWord ? `${intel.confidence} confidence` : intel.confidence;
  return `
    <div class="health-ring" style="--progress:${progress}">
      <svg class="health-ring-svg" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <linearGradient id="health-ring-gradient" x1="24" y1="96" x2="96" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#1B3A34" />
            <stop offset="100%" stop-color="#2FAE7A" />
          </linearGradient>
        </defs>
        <circle class="health-ring-track" cx="60" cy="60" r="50" pathLength="100"></circle>
        <circle class="health-ring-progress" cx="60" cy="60" r="50" pathLength="100"></circle>
      </svg>
      <div class="health-ring-copy">
        <span>${intel.readinessLevel}</span>
        <small>${subtitle}</small>
      </div>
    </div>
  `;
}

function recommendedPathsFor(profile) {
  const stage = profile.careerStage;
  if (stage === "Still studying" || stage === "Looking for internship") return ["Internship pathway", "Portfolio-building path", "Scholarship or university outcome planning"];
  if (stage === "Planning to switch career") return ["Transition pathway", "Bridge role pathway", "Portfolio proof pathway"];
  if (stage === "Growing into leadership") return ["Promotion pathway", "People leadership pathway", "Strategic specialist pathway"];
  if (stage === "Preparing for retirement or advisory work") return ["Advisory work", "Mentoring", "Part-time expert roles"];
  if (stage === "Returning after a career break") return ["Returnship pathway", "Flexible work pathway", "Confidence rebuilding plan"];
  if (stage === "Building freelance/side income") return ["Freelance positioning", "Portfolio packaging", "Client acquisition"];
  return ["Job search pathway", "Skill growth pathway", "Market value pathway"];
}

function nextActionsFor(profile) {
  const actions = [];
  if (!profile.resume?.uploaded && !profile.resume?.name) actions.push("Upload a resume or build your profile manually.");
  if (!profile.skills?.technical?.length) actions.push("Add your top technical or domain skills.");
  if (!profile.preferences?.roles?.length) actions.push("Choose 1-3 preferred roles so job matching improves.");
  if (profile.careerStage === "Planning to switch career") actions.push("Map transferable skills and transition risks.");
  if (profile.careerStage === "Still studying") actions.push("Add projects, clubs, and internship experience.");
  if (!actions.length) actions.push("Ask Vera to create your next 7-day mission plan.");
  return actions.slice(0, 4);
}

function longTermFor(profile) {
  if (profile.careerStage === "Preparing for retirement or advisory work") return ["Advisory boards", "Mentoring programs", "Flexible consulting"];
  if (profile.careerStage === "Growing into leadership") return ["Manager track", "Team lead roles", "Strategic ownership"];
  if (profile.careerStage === "Planning to switch career") return ["Bridge role", "Entry specialist role", "Hybrid role using past experience"];
  return ["Higher-fit roles", "Salary growth", "Specialist or leadership path"];
}

function personalizedMissions(profile) {
  const target = getTargetLabel(profile);
  if (profile.careerStage === "Still studying" || profile.careerStage === "Looking for internship") {
    return [
      { id: "pm1", title: "Internship readiness", body: "Add one project, one club/leadership example, and one preferred industry.", xp: 80, progress: 35, href: "grow.html" },
      { id: "pm2", title: "Resume checklist", body: "Create a one-page student resume with projects and activities.", xp: 70, progress: 20, href: "grow.html" },
      { id: "pm3", title: "Find internship matches", body: "Search roles and save two internships or trainee programs.", xp: 90, progress: 15, href: "discover.html" }
    ];
  }
  if (profile.careerStage === "Planning to switch career") {
    return [
      { id: "pm1", title: "Transition map", body: "List transferable skills and the first bridge role toward your target field.", xp: 100, progress: 40, href: "grow.html" },
      { id: "pm2", title: "Risk check", body: "Compare salary, timeline, and skill gaps before making a move.", xp: 80, progress: 25, href: "market.html" },
      { id: "pm3", title: "Bridge skill sprint", body: `Pick one missing skill for ${target} and create proof this week.`, xp: 120, progress: 20, href: "vera.html#skills" }
    ];
  }
  if (profile.careerStage === "Growing into leadership") {
    return [
      { id: "pm1", title: "Promotion readiness", body: "Document one leadership outcome, not only task execution.", xp: 120, progress: 45, href: "grow.html" },
      { id: "pm2", title: "Salary benchmark", body: "Check market value for your next-level role.", xp: 70, progress: 35, href: "market.html" },
      { id: "pm3", title: "Leadership interview", body: "Practice a conflict, coaching, and stakeholder story.", xp: 90, progress: 20, href: "grow.html#interview-coach" }
    ];
  }
  if (profile.careerStage === "Preparing for retirement or advisory work") {
    return [
      { id: "pm1", title: "Advisory profile", body: "Package your expertise into clear advisory topics.", xp: 90, progress: 30, href: "grow.html" },
      { id: "pm2", title: "Flexible work filters", body: "Set workload, location, and advisory preferences.", xp: 60, progress: 25, href: "grow.html" },
      { id: "pm3", title: "Mentoring options", body: "Ask Vera to draft a mentoring/advisory positioning statement.", xp: 80, progress: 20, href: "vera.html" }
    ];
  }
  return [
    { id: "pm1", title: "Profile baseline", body: "Complete your profile so CareerGo can improve your roadmap.", xp: 90, progress: 45, href: "edit-career-data.html" },
    { id: "pm2", title: "Role shortlist", body: "Save two roles that match your preferred path.", xp: 80, progress: 30, href: "discover.html" },
    { id: "pm3", title: "Coach plan", body: "Ask Vera to create a simple 7-day action plan.", xp: 70, progress: 20, href: `posts.html?topic=${encodeURIComponent("a simple 7-day action plan")}#messages` }
  ];
}

function starterMissions(profile) {
  return [
    {
      id: "tour-profile",
      title: "Complete one profile section",
      body: "Add or review skills, projects, or preferences so recommendations become more accurate.",
      href: "grow.html",
      icon: "user-round"
    },
    {
      id: "tour-vera",
      title: "Ask Vera for a plan",
      body: `Get a simple 7-day plan for ${getTargetLabel(profile)} with actions you can actually finish.`,
      href: `posts.html?topic=${encodeURIComponent(`a 7-day plan for ${getTargetLabel(profile)}`)}#messages`,
      icon: "sparkles"
    },
    {
      id: "tour-job",
      title: "Review one job match",
      body: "Open a suggested role, check why it matches, then save or compare it.",
      href: "discover.html",
      icon: "briefcase"
    },
    {
      id: "tour-research",
      title: "Research an organization",
      body: "Check ratings, background, salary or outcome signals, and review themes before deciding.",
      href: "discover-companies.html",
      icon: "building-2"
    },
    {
      id: "tour-market",
      title: "Check market value",
      body: "Use salary and skill-payoff insights to choose your next learning priority.",
      href: "market.html",
      icon: "trending-up"
    }
  ];
}

function recordMissionStreak(state) {
  const today = new Date().toISOString().slice(0, 10);
  const streak = state.missionStreak || { count: 0, lastDate: "" };
  if (streak.lastDate === today) {
    state.missionStreak = streak;
    return state.missionStreak;
  }
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const count = streak.lastDate === yesterday ? streak.count + 1 : 1;
  state.missionStreak = { count, lastDate: today };
  return state.missionStreak;
}

function bindMissionActions(taskLookup = {}) {
  qsa("[data-complete-mission]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      const id = button.dataset.completeMission;
      if ((readState().missionProgress[id] || 0) >= 100) return;
      const task = taskLookup[id];
      if (!task) return;
      openMissionModal(task);
    });
  });
}

/* Dashboard tour is now just the unified page-tour engine keyed "dashboard"
   (see showTourStep/initPageTour below). Kept as a thin wrapper so the
   existing call site in renderDashboard() doesn't need to change. */
function initDashboardTour() {
  initPageTour("dashboard");
}

const TOUR_STEPS = {
  discover: [
    {
      target: ".cg-discover-hero",
      title: "Your career discovery hub",
      body: "Discover surfaces roles, companies, universities, and mentors tuned to your target career and Kuala Lumpur's market - all searchable from one place.",
      mission: "Try typing a company or role name to see live matches."
    },
    {
      target: ".cg-discover-question-grid",
      title: "Start with a question",
      body: "Not sure where to begin? These quick prompts jump straight to the answer Vera already has ready for you.",
      mission: "Tap one question to see Vera's answer."
    },
    {
      target: "#vera-top-pick",
      title: "Vera's Top Pick",
      body: "The single role Vera rates highest against your skills, roadmap, and salary target this week - not a generic listing.",
      mission: "Check why Vera ranked this role first."
    },
    {
      target: "#market-pulse",
      title: "Market Pulse in Malaysia",
      body: "Live hiring, pay, and growth signals refreshed from real postings - so you know what's actually moving before you commit time to it.",
      mission: "Open Explore more to see every tracked segment."
    },
    {
      target: "[data-tour-target='discover-orgs']",
      title: "Companies and universities",
      body: "Browse employers and institutions Vera is watching for you - open a card for ratings, reviews, and entry requirements matched to your profile.",
      mission: "Save one company or university to compare later."
    },
    {
      target: "[data-tour-target='discover-mentors']",
      title: "Mentors you can reach out to",
      body: "People a few steps ahead of you on a similar path, ranked by how closely their journey overlaps with yours.",
      mission: "Message one mentor with a specific question."
    }
  ],
  grow: [
    {
      target: ".cg-grow-stats",
      title: "You're improving",
      body: "Interview readiness, skill percentile, matching jobs, and estimated pay - tracked over the last 14 days so progress is visible, not just felt.",
      mission: "Check which stat moved most this week."
    },
    {
      target: ".cg-skill-graph",
      title: "Your skill graph",
      body: "How you stack up against the Product Manager archetype in the KL market, skill by skill - this is what drives every recommendation below it.",
      mission: "Find your single biggest skill gap."
    },
    {
      target: ".cg-grow-journey",
      title: "Your growth journey",
      body: "The milestones between you and your target role, with the current one highlighted so you always know what's next.",
      mission: "Open your current milestone."
    },
    {
      target: "#interview-coach",
      title: "Interview Coach",
      body: "Company-specific prep, practice drills, and your readiness breakdown - built around your next actual interview, not a generic question bank.",
      mission: "Try one 15-minute practice drill today."
    },
    {
      target: "#recommended-growth",
      title: "Recommended Growth",
      body: "The learning moves with the highest return for your target role right now - each one opens into real practice, a course, or a guided writing exercise.",
      mission: "Start the highest-return learning move."
    }
  ],
  market: [
    {
      target: ".cg-worth-hero",
      title: "Know your worth",
      body: "Your Career Value is a live estimate built from your skills, roadmap progress, and thousands of verified Malaysian offers - not a guess.",
      mission: "See your fair-value gap at a glance."
    },
    {
      target: ".cg-worth-action",
      title: "Vera's highest-value action today",
      body: "Of everything you could do next, this is the single move that moves your Career Value the most for the least effort.",
      mission: "Ask Vera why this is today's top move."
    },
    {
      target: "[data-tour-target='worth-drivers']",
      title: "Top value drivers",
      body: "Ranked by expected monthly pay lift, weighted by how likely you are to actually complete each one.",
      mission: "Pick one value driver to close first."
    },
    {
      target: "#salary-negotiation",
      title: "Salary negotiation",
      body: "Vera benchmarks a defensible ask against verified market data, your skill match, and your pipeline leverage.",
      mission: "Generate your negotiation points."
    },
    {
      target: ".cg-worth-timeline",
      title: "Career Value Timetable",
      body: "Vera projects how each roadmap action lifts your monthly Career Value, so you can see the payoff before you start.",
      mission: "See how each roadmap action lifts your value."
    }
  ],
  autopilot: [
    {
      target: "[data-pipeline-tabs]",
      title: "Applications, Autopilot, Follow-ups",
      body: "Switch between your live pipeline, what Vera found and queued overnight, and the relationships waiting on a reply.",
      mission: "Switch to Autopilot to see what Vera found overnight."
    },
    {
      target: ".cg-pipeline-one-move",
      title: "The one move today",
      body: "Every open thread and application, ranked down to the single highest-leverage action for right now.",
      mission: "Draft your reply with Vera."
    },
    {
      target: ".cg-pipeline-impact",
      title: "Vera - today's highest impact",
      body: "A ranked task list built from your actual pipeline, not a generic to-do list - each one shows the expected lift and time cost.",
      mission: "Open your #1 highest-impact task."
    },
    {
      target: ".cg-pipeline-board-section",
      title: "Live pipeline board",
      body: "Every application, auto-scored and sorted by stage, so your search feels organized instead of scattered across emails.",
      mission: "Move one application to its next stage."
    },
    {
      target: ".cg-pipeline-review",
      title: "Week in review",
      body: "A running record of your momentum - applications sent, replies, interviews booked - so you can see the search accelerating.",
      mission: "Plan next week with Vera."
    }
  ],
  posts: [
    {
      target: ".cg-feed-left",
      title: "Your feed sections",
      body: "Move between what's new, your network, communities, and what's trending in the Product Management world right now.",
      mission: "Check what's trending today."
    },
    {
      target: ".cg-feed-composer",
      title: "Share your progress",
      body: "Post a milestone, a lesson learned, or a question - the same feed hiring managers and mentors are reading.",
      mission: "Share one milestone or question."
    },
    {
      target: ".cg-feed-tabs",
      title: "Filter by type",
      body: "Narrow the feed to milestones, discussions, or hiring signals depending on what you're looking for today.",
      mission: "Filter to Hiring to see who's recruiting."
    }
  ]
};

/* ============================================================
   Guided tour v2 - one engine for every page (dashboard + the
   TOUR_STEPS pages). A step highlights its target with a real
   spotlight (a positioned dimmer that cuts a hole over the target
   via a huge box-shadow, so it works regardless of DOM nesting -
   the old z-index-on-a-nested-element approach couldn't lift the
   target above a body-level backdrop) and anchors a Vera popover
   beside it, auto-flipping so it never covers the target.
   ============================================================ */
const TOUR_PAGE_LABELS = {
  dashboard: "Dashboard",
  discover: "Discover",
  grow: "Growth",
  market: "Career Value",
  autopilot: "Pipeline",
  posts: "Feed"
};

function tourStepsFor(pageKey) {
  return pageKey === "dashboard" ? DASHBOARD_TOUR_STEPS : (TOUR_STEPS[pageKey] || []);
}

function getTourState(pageKey) {
  const state = readState();
  return state.guidedTour?.[pageKey] || { status: "new", step: 0 };
}

function saveTourState(pageKey, partial) {
  const state = readState();
  state.guidedTour = state.guidedTour || {};
  state.guidedTour[pageKey] = {
    status: "new",
    step: 0,
    ...(state.guidedTour[pageKey] || {}),
    ...partial
  };
  writeState(syncCurrentUser(state));
}

function markTourIntroSeen() {
  const state = readState();
  state.guidedTour = state.guidedTour || {};
  if (!state.guidedTour.introSeen) {
    state.guidedTour.introSeen = true;
    writeState(syncCurrentUser(state));
  }
}

function removeTourLauncher() {
  qsa("[data-tour-launcher]").forEach(item => item.remove());
}

function removePageTour() {
  qsa(".tour-highlight").forEach(item => item.classList.remove("tour-highlight"));
  qsa("[data-tour-layer]").forEach(item => item.remove());
  document.body.classList.remove("cg-tour-active");
  if (window.__cgTourTrack) {
    window.removeEventListener("resize", window.__cgTourTrack);
    window.removeEventListener("scroll", window.__cgTourTrack, true);
    window.__cgTourTrack = null;
  }
}

/* Place the spotlight over the target and anchor the popover to the first
   side (right -> left -> below -> above) where it fully fits without
   covering the target; falls back to a clamped centre position, and a
   bottom sheet on narrow screens. Also positions the arrow toward the
   target. Runs on every scroll/resize so it tracks the target live. */
/* A full-width section can't have a tooltip beside OR fully below it in a
   normal viewport, so for wide targets we spotlight only the section's top
   band (capped height) - the card then sits cleanly below that band and
   never covers it. Narrow/short targets use their real rect. */
function tourAnchorRect(target) {
  const rect = target.getBoundingClientRect();
  const isWide = rect.width > window.innerWidth * 0.6;
  const height = isWide ? Math.min(rect.height, 300) : rect.height;
  return { left: rect.left, top: rect.top, width: rect.width, height, right: rect.left + rect.width, bottom: rect.top + height, isWide };
}

function positionTourLayers(pop, spot, arrow, target) {
  const a = tourAnchorRect(target);
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const pad = 8;
  const sx = Math.max(4, a.left - pad);
  const sy = Math.max(4, a.top - pad);
  spot.style.left = `${sx}px`;
  spot.style.top = `${sy}px`;
  spot.style.width = `${Math.min(vw - 8, a.width + pad * 2)}px`;
  spot.style.height = `${Math.min(vh - 8, a.height + pad * 2)}px`;

  if (vw <= 760) {
    pop.style.left = "16px";
    pop.style.right = "16px";
    pop.style.width = "auto";
    pop.style.top = "auto";
    pop.style.bottom = "20px";
    arrow.style.display = "none";
    return;
  }

  pop.style.right = "auto";
  pop.style.bottom = "auto";
  pop.style.width = "";
  // Reset any height cap from a previous frame BEFORE measuring, so popW/popH
  // are always the card's natural size and the fit checks stay consistent
  // frame-to-frame (otherwise a capped height gets re-measured and the card
  // oscillates back into overlapping the target).
  pop.style.maxHeight = "";
  pop.style.overflowY = "";
  const popW = pop.offsetWidth;
  const popH = pop.offsetHeight;
  const gap = 18;
  const edge = 16;
  const clampTop = v => Math.max(edge, Math.min(vh - popH - edge, v));
  const clampLeft = v => Math.max(edge, Math.min(vw - popW - edge, v));
  const midY = a.top + a.height / 2 - popH / 2;
  const midX = a.left + a.width / 2 - popW / 2;

  const candidates = [
    { side: "right", left: a.right + gap, top: clampTop(midY), ok: a.right + gap + popW <= vw - edge },
    { side: "left", left: a.left - gap - popW, top: clampTop(midY), ok: a.left - gap - popW >= edge },
    { side: "bottom", left: clampLeft(midX), top: a.bottom + gap, ok: a.bottom + gap + popH <= vh - edge },
    { side: "top", left: clampLeft(midX), top: a.top - gap - popH, ok: a.top - gap - popH >= edge }
  ];
  let choice = candidates.find(c => c.ok);
  if (choice) {
    // A side fully fits - clear any height cap from an earlier constrained frame.
    pop.style.maxHeight = "";
    pop.style.overflowY = "";
  } else {
    // Nothing fits (e.g. a full-width section at the page bottom that can't
    // scroll higher): place on the vertical side with the most room and cap
    // the card height to that room so it still never covers the target.
    const topSpace = a.top - gap - edge;
    const bottomSpace = vh - a.bottom - gap - edge;
    if (bottomSpace >= topSpace) {
      const h = Math.max(180, Math.min(popH, bottomSpace));
      choice = { side: "bottom", left: clampLeft(midX), top: a.bottom + gap };
      pop.style.maxHeight = `${h}px`;
    } else {
      const h = Math.max(180, Math.min(popH, topSpace));
      choice = { side: "top", left: clampLeft(midX), top: a.top - gap - h };
      pop.style.maxHeight = `${h}px`;
    }
    pop.style.overflowY = "auto";
  }
  pop.style.left = `${choice.left}px`;
  pop.style.top = `${choice.top}px`;

  arrow.style.display = "block";
  const popRect = pop.getBoundingClientRect();
  const size = 14;
  if (choice.side === "right" || choice.side === "left") {
    let ay = a.top + a.height / 2 - popRect.top - size / 2;
    ay = Math.max(16, Math.min(popRect.height - size - 16, ay));
    arrow.style.top = `${ay}px`;
    arrow.style.bottom = "auto";
    arrow.style.left = choice.side === "right" ? `${-size / 2}px` : "auto";
    arrow.style.right = choice.side === "left" ? `${-size / 2}px` : "auto";
  } else {
    let ax = a.left + a.width / 2 - popRect.left - size / 2;
    ax = Math.max(16, Math.min(popRect.width - size - 16, ax));
    arrow.style.left = `${ax}px`;
    arrow.style.right = "auto";
    arrow.style.top = choice.side === "bottom" ? `${-size / 2}px` : "auto";
    arrow.style.bottom = choice.side === "top" ? `${-size / 2}px` : "auto";
  }
}

function showTourStep(pageKey, index) {
  const steps = tourStepsFor(pageKey);
  if (!steps.length) return;
  const stepIndex = Math.max(0, Math.min(steps.length - 1, index));
  const step = steps[stepIndex];
  const target = qs(step.target);
  if (!target) {
    // Target isn't on this page/state - advance past it rather than dead-stop.
    if (stepIndex < steps.length - 1) { showTourStep(pageKey, stepIndex + 1); return; }
    removePageTour();
    return;
  }
  removePageTour();
  removeTourLauncher();
  saveTourState(pageKey, { status: "active", step: stepIndex, startedAt: getTourState(pageKey).startedAt || nowStamp() });
  document.body.classList.add("cg-tour-active");
  target.classList.add("tour-highlight");

  // Wide sections: scroll their top band near the top so the popover has
  // room below it; smaller targets: centre them so a side placement fits.
  const startRect = target.getBoundingClientRect();
  if (startRect.width > vwFraction(0.6)) {
    const absTop = startRect.top + window.scrollY;
    window.scrollTo({ top: Math.max(0, absTop - 108), behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }

  const guard = document.createElement("div");
  guard.className = "cg-tour-guard";
  guard.dataset.tourLayer = "";
  guard.setAttribute("aria-hidden", "true");

  const spot = document.createElement("div");
  spot.className = "cg-tour-spot";
  spot.dataset.tourLayer = "";
  spot.setAttribute("aria-hidden", "true");

  const pop = document.createElement("aside");
  pop.className = "cg-tour-pop";
  pop.dataset.tourLayer = "";
  pop.setAttribute("role", "dialog");
  pop.setAttribute("aria-live", "polite");
  pop.innerHTML = `
    <span class="cg-tour-arrow" data-tour-arrow></span>
    <header class="cg-tour-head">
      <span class="cg-tour-avatar"><img src="assets/vera-ai-coach.png" alt="Vera"></span>
      <div class="cg-tour-meta">
        <span class="cg-tour-count">${TOUR_PAGE_LABELS[pageKey] || "Tour"} &middot; Step ${stepIndex + 1} of ${steps.length}</span>
        <div class="cg-tour-dots">${steps.map((_, dotIndex) => `<i class="${dotIndex === stepIndex ? "active" : dotIndex < stepIndex ? "done" : ""}"></i>`).join("")}</div>
      </div>
    </header>
    <h2>${step.title}</h2>
    <p>${step.body}</p>
    <div class="cg-tour-try">
      <span class="cg-tour-try-label">${icon("sparkles")} Try this</span>
      <span class="cg-tour-try-text">${step.mission}</span>
    </div>
    <div class="cg-tour-nav">
      <button class="cg-tour-skip" type="button" data-tour-skip>Skip tour</button>
      <div class="cg-tour-nav-right">
        <button class="cg-tour-btn ghost" type="button" data-tour-back ${stepIndex === 0 ? "disabled" : ""}>${icon("arrow-left")} Back</button>
        <button class="cg-tour-btn primary" type="button" data-tour-next>${stepIndex === steps.length - 1 ? `${icon("check")} Done` : `Next ${icon("arrow-right")}`}</button>
      </div>
    </div>
  `;
  document.body.append(guard, spot, pop);
  const arrow = qs("[data-tour-arrow]", pop);

  const track = () => positionTourLayers(pop, spot, arrow, target);
  track();
  window.setTimeout(track, 240);
  window.setTimeout(track, 520);
  window.setTimeout(track, 900);
  window.__cgTourTrack = track;
  window.addEventListener("resize", track);
  window.addEventListener("scroll", track, true);

  qs("[data-tour-skip]", pop).addEventListener("click", () => {
    saveTourState(pageKey, { status: "skipped", step: stepIndex, skippedAt: nowStamp() });
    markTourIntroSeen();
    removePageTour();
  });
  qs("[data-tour-back]", pop).addEventListener("click", () => { if (stepIndex > 0) showTourStep(pageKey, stepIndex - 1); });
  qs("[data-tour-next]", pop).addEventListener("click", () => {
    if (stepIndex === steps.length - 1) {
      saveTourState(pageKey, { status: "completed", step: stepIndex, completedAt: nowStamp() });
      markTourIntroSeen();
      removePageTour();
      showToast(`${TOUR_PAGE_LABELS[pageKey] || "Tour"} tour complete.`);
      return;
    }
    showTourStep(pageKey, stepIndex + 1);
  });
  createIcons();
}

function vwFraction(f) { return window.innerWidth * f; }
function vhFraction(f) { return window.innerHeight * f; }

/* Lighter, non-blocking entry point for secondary pages: a dismissible
   "Take the {page} tour" chip instead of auto-launching a full overlay. */
function showTourLauncher(pageKey) {
  if (qs("[data-tour-layer]")) return; // a tour is already open
  removeTourLauncher();
  const label = TOUR_PAGE_LABELS[pageKey] || "page";
  const chip = document.createElement("div");
  chip.className = "cg-tour-launch";
  chip.dataset.tourLauncher = "";
  chip.innerHTML = `
    <button type="button" class="cg-tour-launch-main" data-tour-launch>
      <span class="cg-tour-launch-avatar"><img src="assets/vera-ai-coach.png" alt=""></span>
      <span><b>New here?</b> Take the ${label} tour</span>
    </button>
    <button type="button" class="cg-tour-launch-close" data-tour-launch-dismiss aria-label="Dismiss tour prompt">${icon("x")}</button>
  `;
  document.body.appendChild(chip);
  createIcons();
  qs("[data-tour-launch]", chip).addEventListener("click", () => {
    removeTourLauncher();
    showTourStep(pageKey, 0);
  });
  qs("[data-tour-launch-dismiss]", chip).addEventListener("click", () => {
    saveTourState(pageKey, { status: "skipped", step: 0, skippedAt: nowStamp() });
    removeTourLauncher();
  });
}

function initPageTour(pageKey) {
  const state = readState();
  if (!state.session.loggedIn || !state.onboarding.candidateDone) return;
  const tour = getTourState(pageKey);
  if (tour.status === "completed" || tour.status === "skipped") return;
  if (pageKey === "dashboard") {
    // The guided intro auto-runs once, on the landing page, for a new user.
    window.setTimeout(() => showTourStep("dashboard", tour.step || 0), 200);
  } else {
    // Every other page politely offers its own tour instead of forcing it.
    window.setTimeout(() => showTourLauncher(pageKey), 200);
  }
}

function sanitizeRedirectPath(raw) {
  if (!raw) return "";
  if (!/^[a-zA-Z0-9][a-zA-Z0-9/_-]*\.html(\?[^\s]*)?(#[^\s]*)?$/.test(raw)) return "";
  if (raw.includes("://") || raw.startsWith("//")) return "";
  return raw;
}

function loginRedirectHref(target) {
  const safeTarget = sanitizeRedirectPath(target);
  return safeTarget ? `login.html?redirect=${encodeURIComponent(safeTarget)}` : "login.html";
}

function requireAccount(root, purpose = "open this workspace") {
  const state = readState();
  if (state.session.loggedIn) return true;
  root.innerHTML = `
    <div class="locked-state-wrap">
      <div class="locked-state glass-card">
        <div class="eyebrow"><span class="spark">*</span> Account required</div>
        <h1 class="section-title">Create your account to ${purpose}.</h1>
        <p class="section-sub">CareerGo personalizes your roadmap, Vera's coaching style, job matching, and dashboard from your own career situation.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" data-enter-demo>${icon("monitor-play")} Enter demo dashboard</button>
          <a class="btn btn-primary" href="register.html">${icon("user-plus")} Create account</a>
          <a class="btn btn-ghost" href="login.html">${icon("log-in")} Log in</a>
        </div>
      </div>
      <div class="locked-panel glass-card">
        <div class="eyebrow"><span class="spark">*</span> Why CareerGo?</div>
        <div class="locked-panel-stats">
          <div class="locked-stat">
            <div class="locked-stat-icon">${icon("brain-circuit")}</div>
            <div>
              <strong>AI-Personalized Roadmap</strong>
              <p>Vera adapts your career plan, coaching tone, and job suggestions based on your real profile - not templates.</p>
            </div>
          </div>
          <div class="locked-stat">
            <div class="locked-stat-icon">${icon("bar-chart-2")}</div>
            <div>
              <strong>Career Readiness Score</strong>
              <p>Get a live ATS score, skill gap analysis, and actionable missions updated as you grow.</p>
            </div>
          </div>
          <div class="locked-stat">
            <div class="locked-stat-icon">${icon("radar")}</div>
            <div>
              <strong>Autopilot Job Matching</strong>
              <p>Set your criteria once. CareerGo surfaces high-fit openings and tracks applications automatically.</p>
            </div>
          </div>
        </div>
        <div class="locked-panel-footer">
          <span class="locked-badge">${icon("shield-check")} Free to start &middot; No credit card</span>
        </div>
      </div>
    </div>
  `;
  createIcons();
  return false;
}

function roleLabel(role) {
  return role === "employer" ? "Employer OS" : "Job Seeker OS";
}

function requireRole(root, allowedRole = "candidate", purpose = "open this workspace") {
  const state = readState();
  if (!requireAccount(root, purpose)) return false;
  if (state.session.role === allowedRole) return true;
  root.innerHTML = `
    <div class="locked-state-wrap">
      <div class="locked-state glass-card">
        <div class="eyebrow"><span class="spark">*</span> Role switch needed</div>
        <h1 class="section-title">You are currently in ${roleLabel(state.session.role)}.</h1>
        <p class="section-sub">CareerGo keeps job seeker and employer workspaces separate so candidates do not accidentally enter hiring tools, and employers do not land in candidate dashboards.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${state.session.role === "employer" ? "employer-app.html" : "dashboard.html"}">${icon("layout-dashboard")} Return to ${roleLabel(state.session.role)}</a>
          <a class="btn btn-ghost" href="login.html">${icon("repeat-2")} Log in as another role</a>
        </div>
      </div>
    </div>
  `;
  createIcons();
  return false;
}

function needsOnboarding(root) {
  const state = readState();
  if (state.onboarding.candidateDone || state.session.role === "employer") return false;
  root.innerHTML = `
    <div class="locked-state glass-card">
      <div class="eyebrow"><span class="spark">*</span> Personalization needed</div>
      <h1 class="section-title">Finish onboarding to generate your Career Intelligence Profile.</h1>
      <p class="section-sub">We use this to personalize your dashboard, job matching, Vera's tone, and roadmap. You can edit everything anytime.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="onboarding.html">${icon("route")} Continue onboarding</a>
        <a class="btn btn-ghost" href="profile.html">${icon("user-round")} Edit profile manually</a>
      </div>
    </div>
  `;
  createIcons();
  return true;
}

function bindGlobalActions() {
  qsa("[data-logout]").forEach(btn => btn.addEventListener("click", () => {
    const next = readState();
    next.session = { loggedIn: false, role: "guest", currentUserId: null, name: "" };
    writeState(next);
    location.href = "index.html";
  }));
  qsa("[data-enter-demo]").forEach(btn => btn.addEventListener("click", startDemoDashboard));
  document.addEventListener("click", event => {
    const link = event.target.closest("a[href*='posts.html?topic=']");
    if (!link) return;
    const state = readState();
    if (!state.session.loggedIn) return;
    event.preventDefault();
    const url = new URL(link.getAttribute("href"), location.href);
    const topic = url.searchParams.get("topic") || "";
    openVeraPanel({ seedTopic: topic });
  });
}

function bindAccountMenu() {
  const toggle = qs("[data-account-menu-toggle]");
  const menu = qs("[data-account-menu]");
  if (!toggle || !menu) return;
  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  };
  const open = () => {
    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  };
  toggle.addEventListener("click", event => {
    event.stopPropagation();
    menu.hidden ? open() : close();
  });
  menu.addEventListener("click", event => event.stopPropagation());
  document.addEventListener("click", close);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });
}

function publicNav() {
  return `
    <a class="brand public-site-brand" href="index.html"><img class="brand-logo" src="assets/careergo-logo-script.png" alt="CareerGo logo"><span class="brand-text"><strong>CareerGo</strong><span>Career OS</span></span></a>
    <nav class="nav-links public-site-nav" aria-label="Public navigation">
      ${[
        ["explore", "Explore", "explore.html"],
        ["companies", "Opportunities", "companies.html"],
        ["community", "Community", "community.html"]
      ].map(([, label, href]) => `<a href="${href}">${label}</a>`).join("")}
    </nav>
    <div class="nav-actions public-site-actions">
      <a class="btn btn-ghost" href="login.html">Login</a>
      <a class="btn btn-primary cg-nav-cta" href="register.html">Create Account ${icon("arrow-right")}</a>
    </div>
  `;
}

/* Section lists for the workspace nav's hover dropdown, keyed by nav item.
   Dashboard and Feed (posts) are deliberately absent - Dashboard stays a
   plain link, and Feed's 3-column layout (tab rail + scrolling list +
   fixed sidebar) isn't shaped like "scroll past A to reach B", so it has
   no jump-to-section list. Pipeline's list depends on which of its tabs
   is active (see navSectionsFor below) - Follow-ups is intentionally
   absent pending confirmation of its own section list. */
const NAV_SECTION_MAP = {
  discover: [
    { id: "vera-top-pick", label: "Vera's Top Pick" },
    { id: "open-roles", label: "Roles worth your week" },
    { id: "market-pulse", label: "Market Pulse in Malaysia" },
    { id: "curated-collections", label: "Curated Collections by Vera" },
    { id: "featured-companies", label: "Featured Companies" },
    { id: "featured-universities", label: "Featured Universities" },
    { id: "recommended-programmes", label: "Recommended Programmes" },
    { id: "discover-mentors", label: "Mentors You can reach out to" }
  ],
  grow: [
    { id: "growth-journey", label: "Your growth journey" },
    { id: "career-paths", label: "Career Paths" },
    { id: "interview-coach", label: "Interview Coach · Powered by Vera" },
    { id: "recommended-growth", label: "Recommended Growth" }
  ],
  market: [
    { id: "worth-drivers", label: "Top value drivers" },
    { id: "value-growth", label: "Value Growth" },
    { id: "worth-scenarios", label: "Career Value Scenarios" },
    { id: "salary-negotiation", label: "Salary negotiation" }
  ],
  autopilot: {
    applications: [
      { id: "pipeline-impact", label: "Today's highest impact" },
      { id: "pipeline-board", label: "Live pipeline" }
    ],
    autopilot: [
      { id: "autopilot-matches", label: "Autopilot found for you" },
      { id: "autopilot-console", label: "Ruleset" }
    ]
  }
};

function navSectionsForKey(key) {
  if (key === "autopilot") return NAV_SECTION_MAP.autopilot[pipelineActiveTab] || null;
  return NAV_SECTION_MAP[key] || null;
}

/* Icon badge for a notification - Vera keeps her owl mark, every other type
   uses its lucide icon from NOTIFICATION_TYPE_ICON. */
function notificationBadgeMarkup(note) {
  if (note.type === "vera") {
    return `<span class="notification-icon type-vera"><img src="assets/vera-ai-coach.png" alt="Vera"></span>`;
  }
  return `<span class="notification-icon type-${note.type || "system"}">${icon(notificationIconFor(note))}</span>`;
}

/* One dropdown row - a flat row (no per-item card), unread dot on the left,
   soft circular icon, title + relative time, body. Clicking navigates. */
function notificationRowMarkup(note) {
  const navAttr = note.href ? ` data-notification-nav="${note.href}"` : "";
  return `
    <div class="cg-nd-item${note.read ? "" : " is-unread"}" data-notification-id="${note.id}"${navAttr} role="button" tabindex="0" aria-label="${note.title}">
      <span class="cg-nd-dot" aria-hidden="true"></span>
      ${notificationBadgeMarkup(note)}
      <span class="cg-nd-copy">
        <span class="cg-nd-top"><strong>${note.title}</strong><time>${relativeTime(note.ts)}</time></span>
        <small>${note.body}</small>
      </span>
    </div>
  `;
}

/* Shared bell dropdown for both the candidate and employer workspace navs.
   One continuous panel, thin row dividers, understated footer. */
function notificationMenuMarkup(notifications) {
  const unread = notifications.filter(note => !note.read).length;
  return `
    <div class="notification-menu-wrap">
      <button class="btn btn-ghost notification-trigger" type="button" data-notification-toggle aria-haspopup="dialog" aria-expanded="false" aria-label="Open notifications">
        ${icon("bell")} ${unread ? `<strong>${unread}</strong>` : ""}
      </button>
      <div class="notification-menu cg-nd-panel glass-card" data-notification-menu hidden role="dialog" aria-label="Notifications">
        <div class="cg-nd-head">
          <div>
            <span class="cg-nd-kicker">Notifications</span>
            <strong>${unread ? `${unread} new update${unread === 1 ? "" : "s"}` : "You're all caught up"}</strong>
          </div>
          ${unread ? `<button class="cg-nd-markall" type="button" data-mark-all-read>${icon("check")} Mark all read</button>` : ""}
        </div>
        <div class="cg-nd-list">
          ${notifications.length ? notifications.slice(0, 5).map(notificationRowMarkup).join("") : `
            <div class="cg-nd-empty">
              ${icon("check-circle")}
              <strong>No new updates</strong>
              <small>CareerGo will surface interviews, matches, and Vera's moves here.</small>
            </div>
          `}
        </div>
        <div class="cg-nd-foot">
          <small>Vera surfaces what actually matters.</small>
          <a href="notifications.html">View all</a>
        </div>
      </div>
    </div>
  `;
}

function workspaceTopNav() {
  const state = readState();
  const isEmployer = state.session.role === "employer";
  const notifications = Array.isArray(state.notifications) ? state.notifications : [];
  const page = document.body.dataset.page || "";
  if (!isEmployer) {
    const workspaceLinks = [
      ["dashboard", "Dashboard", "dashboard.html"],
      ["discover", "Discover", "discover.html"],
      ["grow", "Growth", "grow.html"],
      ["market", "Career Value", "market.html"],
      ["autopilot", "Pipeline", "autopilot.html"],
      ["posts", "Feed", "posts.html"]
    ];
    const isWorkspaceTabActive = key => {
      if (key === "discover") return page === "discover";
      if (key === "grow") return page === "grow";
      if (key === "posts") return page === "saved" || (page === "posts" && location.hash !== "#messages");
      return page === key;
    };
    const initials = String(getFirstName(state) || "A").slice(0, 2).toUpperCase();
    return `
      <a class="brand cg-top-brand" href="dashboard.html" aria-label="CareerGo dashboard">
        <img class="cg-navbar-logo" src="assets/careergo-logo-script.png" alt="CareerGo">
      </a>
      <nav class="nav-links cg-workspace-tabs" aria-label="CareerGo workspace" data-tour-target="workspace-nav">
        ${workspaceLinks.map(([key, label, href]) => {
          const activeClass = isWorkspaceTabActive(key) ? "active" : "";
          const sections = navSectionsForKey(key);
          if (!sections || !sections.length) {
            return `<a data-nav="${key}" class="${activeClass}" href="${href}">${label}</a>`;
          }
          return `
            <div class="cg-nav-item-wrap">
              <a data-nav="${key}" class="${activeClass}" href="${href}">${label}</a>
              <button type="button" class="cg-nav-dropdown-toggle" aria-label="${label} sections" aria-haspopup="true" aria-expanded="false">${icon("chevron-down")}</button>
              <div class="cg-nav-dropdown" role="menu">
                ${sections.map(section => `<a role="menuitem" data-nav-section-link href="${href}#${section.id}">${section.label}</a>`).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </nav>
      <div class="cg-search-shell" data-search-shell>
        <form class="workspace-search cg-vera-search" role="search" data-workspace-search data-tour-target="workspace-search" style="grid-template-columns:24px minmax(0,1fr) !important">
          ${icon("search")}
          <input name="q" aria-label="Ask Vera" placeholder="Ask Vera anything..." autocomplete="off">
        </form>
        <div class="cg-search-panel" data-search-panel hidden></div>
      </div>
      <div class="nav-actions cg-user-actions">
        <a class="btn btn-ghost cg-message-trigger" href="posts.html#messages" aria-label="Messages">
          ${icon("message-circle")}
        </a>
        ${notificationMenuMarkup(notifications)}
        <div class="account-menu-wrap">
          <button class="btn btn-primary account-menu-trigger cg-avatar-trigger" type="button" data-account-menu-toggle aria-haspopup="menu" aria-expanded="false">
            <span>${initials}</span>
          </button>
          <div class="account-menu glass-card" data-account-menu hidden role="menu">
            <a role="menuitem" href="profile.html">${icon("user-round")} Profile</a>
            <a role="menuitem" href="settings.html">${icon("settings")} Settings</a>
            <a role="menuitem" href="posts.html#saved">${icon("bookmark")} Saved Items</a>
            <button role="menuitem" type="button" data-logout>${icon("log-out")} Logout</button>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <a class="brand" href="${isEmployer ? "employer-app.html" : "dashboard.html"}"><img class="brand-logo" src="assets/careergo-logo-script.png" alt="CareerGo logo"><span class="brand-text"><strong>CareerGo</strong><span>${isEmployer ? "Employer OS" : "Workspace"}</span></span></a>
    <form class="workspace-search" role="search" data-workspace-search data-tour-target="workspace-search">
      ${icon("search")}
      <input name="q" aria-label="Search workspace" placeholder="${isEmployer ? "Search candidates, roles, applicants" : "Search jobs, companies, universities"}">
    </form>
    <div class="nav-actions">
      ${notificationMenuMarkup(notifications)}
      <div class="account-menu-wrap">
        <button class="btn btn-primary account-menu-trigger" type="button" data-account-menu-toggle aria-haspopup="menu" aria-expanded="false">
          <span class="account-avatar-icon">${icon(isEmployer ? "building-2" : "user-round")}</span><span>${getFirstName(state)}</span>
        </button>
        <div class="account-menu glass-card" data-account-menu hidden role="menu">
          <a role="menuitem" href="${isEmployer ? "employer-app.html#company-profile" : "profile.html"}">${icon(isEmployer ? "building-2" : "user-round")} ${isEmployer ? "Company Profile" : "Profile"}</a>
          <a role="menuitem" href="${isEmployer ? "employer-app.html#settings" : "settings.html"}">${icon("settings")} Settings</a>
          ${isEmployer ? `<a role="menuitem" href="employer-app.html#talent-pool">${icon("bookmark")} Talent Pool</a>` : `<a role="menuitem" href="posts.html#saved">${icon("bookmark")} Saved Items</a>`}
          <button role="menuitem" type="button" data-logout>${icon("log-out")} Logout</button>
        </div>
      </div>
    </div>
  `;
}

function ensureWorkspaceNavbarStyles() {
  if (document.getElementById("careergo-workspace-navbar-style")) return;
  const style = document.createElement("style");
  style.id = "careergo-workspace-navbar-style";
  style.textContent = `
    html body .topbar:has(.cg-workspace-tabs),
    html body .topbar:has(.cg-vera-search) {
      position: sticky !important;
      top: 0 !important;
      z-index: 1000 !important;
      height: 78px !important;
      min-height: 78px !important;
      padding: 0 !important;
      border-bottom: 1px solid rgba(14, 44, 37, 0.1) !important;
      background: rgba(248, 244, 235, 0.92) !important;
      box-shadow: none !important;
      backdrop-filter: blur(18px) !important;
      -webkit-backdrop-filter: blur(18px) !important;
    }

    html body .topbar:has(.cg-workspace-tabs)::before,
    html body .topbar:has(.cg-vera-search)::before,
    html body .topbar:has(.cg-workspace-tabs)::after,
    html body .topbar:has(.cg-vera-search)::after {
      content: none !important;
      display: none !important;
      box-shadow: none !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .nav-inner,
    html body .topbar:has(.cg-vera-search) .nav-inner {
      width: min(1460px, calc(100% - 76px)) !important;
      height: 78px !important;
      min-height: 78px !important;
      margin: 0 auto !important;
      padding: 0 !important;
      display: grid !important;
      grid-template-columns: auto minmax(420px, 1fr) minmax(270px, 0.55fr) auto !important;
      align-items: center !important;
      gap: 26px !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-top-brand {
      justify-self: start !important;
      display: inline-flex !important;
      align-items: center !important;
      width: auto !important;
      min-width: 154px !important;
      height: 46px !important;
      padding: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      overflow: visible !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-navbar-logo {
      display: block !important;
      width: 154px !important;
      max-width: 154px !important;
      height: auto !important;
      max-height: 48px !important;
      object-fit: contain !important;
      object-position: left center !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-brand-mark,
    html body .topbar:has(.cg-workspace-tabs) .cg-top-brand .brand-text {
      display: none !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs {
      justify-self: start !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 10px !important;
      min-width: 0 !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs a {
      min-width: 0 !important;
      min-height: 42px !important;
      height: 42px !important;
      padding: 0 17px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 0 !important;
      border-radius: 999px !important;
      color: #4c5b55 !important;
      -webkit-text-fill-color: #4c5b55 !important;
      background: transparent !important;
      box-shadow: none !important;
      font-family: var(--font-sans, Inter, sans-serif) !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      line-height: 1 !important;
      text-decoration: none !important;
      letter-spacing: 0 !important;
      white-space: nowrap !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs a.active,
    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs a:hover {
      color: #fffaf2 !important;
      -webkit-text-fill-color: #fffaf2 !important;
      background: #07382f !important;
      box-shadow: 0 10px 22px rgba(7, 56, 47, 0.18) !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search {
      justify-self: end !important;
      width: min(310px, 100%) !important;
      max-width: 310px !important;
      min-width: 0 !important;
      height: 40px !important;
      min-height: 40px !important;
      padding: 0 10px 0 14px !important;
      display: grid !important;
      grid-template-columns: 18px minmax(0, 1fr) auto !important;
      align-items: center !important;
      gap: 8px !important;
      border: 1px solid rgba(14, 44, 37, 0.1) !important;
      border-radius: 999px !important;
      background: rgba(255, 255, 255, 0.76) !important;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.65), 0 10px 28px rgba(28, 40, 33, 0.06) !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search svg {
      width: 18px !important;
      height: 18px !important;
      color: #53668a !important;
      stroke: #53668a !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search input {
      width: 100% !important;
      min-width: 0 !important;
      height: 100% !important;
      padding: 0 !important;
      border: 0 !important;
      outline: 0 !important;
      color: #46534e !important;
      -webkit-text-fill-color: #46534e !important;
      background: transparent !important;
      font-size: 14px !important;
      font-weight: 700 !important;
      box-shadow: none !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search input::placeholder {
      color: #7584a2 !important;
      -webkit-text-fill-color: #7584a2 !important;
      opacity: 1 !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-user-actions {
      justify-self: end !important;
      display: flex !important;
      align-items: center !important;
      gap: 14px !important;
      min-width: 0 !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-message-trigger,
    html body .topbar:has(.cg-workspace-tabs) .notification-trigger {
      width: 34px !important;
      min-width: 34px !important;
      height: 34px !important;
      min-height: 34px !important;
      padding: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid rgba(14, 44, 37, 0.1) !important;
      border-radius: 999px !important;
      color: #07382f !important;
      -webkit-text-fill-color: #07382f !important;
      background: rgba(255, 255, 255, 0.72) !important;
      box-shadow: 0 10px 22px rgba(7, 56, 47, 0.08) !important;
      position: relative !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-message-trigger svg,
    html body .topbar:has(.cg-workspace-tabs) .notification-trigger svg {
      width: 20px !important;
      height: 20px !important;
      color: #07382f !important;
      stroke: #07382f !important;
      margin: 0 !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .notification-trigger strong {
      position: absolute !important;
      right: -5px !important;
      bottom: -7px !important;
      width: 20px !important;
      height: 20px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border-radius: 999px !important;
      color: #fffaf2 !important;
      -webkit-text-fill-color: #fffaf2 !important;
      background: #42c99a !important;
      font-size: 11px !important;
      font-weight: 900 !important;
      box-shadow: 0 0 0 3px rgba(248, 244, 235, 0.95) !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .account-menu-trigger,
    html body .topbar:has(.cg-workspace-tabs) .nav-actions .account-menu-trigger,
    html body .topbar:has(.cg-workspace-tabs) .cg-avatar-trigger {
      width: 46px !important;
      min-width: 46px !important;
      height: 46px !important;
      min-height: 46px !important;
      padding: 0 !important;
      border: 0 !important;
      border-radius: 999px !important;
      color: #fffaf2 !important;
      -webkit-text-fill-color: #fffaf2 !important;
      background: #07382f !important;
      box-shadow: 0 10px 24px rgba(7, 56, 47, 0.18) !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .account-menu-trigger :is(span, strong, i),
    html body .topbar:has(.cg-workspace-tabs) .nav-actions .account-menu-trigger :is(span, strong, i),
    html body .topbar:has(.cg-workspace-tabs) .cg-avatar-trigger span {
      color: #fffaf2 !important;
      -webkit-text-fill-color: #fffaf2 !important;
      font-size: 17px !important;
      font-weight: 850 !important;
      line-height: 1 !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .account-menu {
      top: calc(100% + 10px) !important;
      right: 0 !important;
    }

    @media (max-width: 1180px) {
      html body .topbar:has(.cg-workspace-tabs) .nav-inner,
      html body .topbar:has(.cg-vera-search) .nav-inner {
        width: min(100% - 32px, 1460px) !important;
        grid-template-columns: auto 1fr auto !important;
        gap: 18px !important;
      }

      html body .topbar:has(.cg-vera-search) .cg-vera-search {
        display: none !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs {
        overflow-x: auto !important;
        scrollbar-width: none !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs::-webkit-scrollbar {
        display: none !important;
      }
    }

    @media (max-width: 760px) {
      html body .topbar:has(.cg-workspace-tabs) {
        height: auto !important;
        min-height: 74px !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .nav-inner {
        width: min(100% - 24px, 1460px) !important;
        min-height: 74px !important;
        grid-template-columns: auto auto !important;
        grid-template-areas: "brand actions" "tabs tabs" !important;
        row-gap: 8px !important;
        padding: 10px 0 !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .cg-top-brand {
        grid-area: brand !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs {
        grid-area: tabs !important;
        width: 100% !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .cg-user-actions {
        grid-area: actions !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .cg-navbar-logo {
        width: 132px !important;
      }

      html body .topbar:has(.cg-workspace-tabs) .cg-message-trigger {
        display: none !important;
      }
    }
  `;
  style.textContent += `
    html body .topbar:has(.cg-workspace-tabs),
    html body .topbar:has(.cg-vera-search) {
      height: 64px !important;
      min-height: 64px !important;
      border-bottom: 1px solid rgba(227, 220, 200, 0.7) !important;
      background: rgba(248, 244, 234, 0.78) !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .nav-inner,
    html body .topbar:has(.cg-vera-search) .nav-inner {
      width: min(1240px, calc(100% - 48px)) !important;
      height: 64px !important;
      min-height: 64px !important;
      grid-template-columns: auto minmax(360px, 1fr) minmax(250px, 0.55fr) auto !important;
      gap: 32px !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs {
      gap: 4px !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs a {
      min-height: 40px !important;
      height: 40px !important;
      padding: 0 16px !important;
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      font-family: "Inter", ui-sans-serif, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      line-height: 1 !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs a.active,
    html body .topbar:has(.cg-workspace-tabs) .cg-workspace-tabs a:hover {
      color: #f8f4ea !important;
      -webkit-text-fill-color: #f8f4ea !important;
      background: #1f332c !important;
      box-shadow: 0 4px 14px -4px rgba(31, 51, 44, 0.4) !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-navbar-logo {
      width: 154px !important;
      max-width: 154px !important;
      max-height: 42px !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search {
      width: min(290px, 100%) !important;
      max-width: 290px !important;
      height: 32px !important;
      min-height: 32px !important;
      padding: 0 8px 0 12px !important;
      border-radius: 9999px !important;
      border-color: rgba(227, 220, 200, 0.9) !important;
      background: rgba(255, 255, 255, 0.62) !important;
      box-shadow: none !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search input {
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      font-size: 12px !important;
      font-weight: 400 !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search input::placeholder {
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      opacity: 0.82 !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-message-trigger,
    html body .topbar:has(.cg-workspace-tabs) .notification-trigger {
      width: 36px !important;
      min-width: 36px !important;
      height: 36px !important;
      min-height: 36px !important;
      border: 1px solid rgba(227, 220, 200, 0.86) !important;
      background: rgba(255, 255, 255, 0.66) !important;
      color: #1f332c !important;
      -webkit-text-fill-color: #1f332c !important;
      box-shadow: 0 1px 2px rgba(31, 51, 44, 0.04), 0 2px 8px -2px rgba(31, 51, 44, 0.08) !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .cg-message-trigger svg,
    html body .topbar:has(.cg-workspace-tabs) .notification-trigger svg {
      color: #1f332c !important;
      stroke: #1f332c !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .account-menu-trigger,
    html body .topbar:has(.cg-workspace-tabs) .cg-avatar-trigger {
      width: 36px !important;
      min-width: 36px !important;
      height: 36px !important;
      min-height: 36px !important;
      color: #f8f4ea !important;
      -webkit-text-fill-color: #f8f4ea !important;
      background: #1f332c !important;
      box-shadow: 0 4px 14px -4px rgba(31, 51, 44, 0.4) !important;
    }

    html body .topbar:has(.cg-workspace-tabs) .account-menu-trigger :is(span, strong, i),
    html body .topbar:has(.cg-workspace-tabs) .cg-avatar-trigger span {
      color: #f8f4ea !important;
      -webkit-text-fill-color: #f8f4ea !important;
      font-size: 14px !important;
      font-weight: 700 !important;
    }

    @media (max-width: 1180px) {
      html body .topbar:has(.cg-workspace-tabs) .nav-inner,
      html body .topbar:has(.cg-vera-search) .nav-inner {
        width: min(100% - 32px, 1240px) !important;
        grid-template-columns: auto 1fr auto !important;
        gap: 18px !important;
      }
    }

    html body:is([data-page="grow"], [data-page="dashboard"], [data-page="discover"], [data-page="market"], [data-page="autopilot"]) main > .workspace-page-container,
    html body[data-page="dashboard"] main > .container.os-layout.workspace-page-container,
    html body[data-page="market"]:has(.cg-worth) main > .container.os-layout.workspace-page-container,
    html body[data-page="autopilot"]:has(.cg-pipeline) main > .container.os-layout.workspace-page-container,
    html body[data-page="discover"] main.workspace-page-container[data-jobs-page],
    html body[data-page="discover"] main[data-jobs-page] > .workspace-page-container,
    html body[data-page="jobs"] main.workspace-page-container[data-jobs-page],
    html body[data-page="jobs"] main[data-jobs-page] > .workspace-page-container,
    html body[data-page="jobs"] main[data-jobs-page] > .page-hero > .container,
    html body[data-page="jobs"] main[data-jobs-page] > .jobs-page-layout {
      width: min(1200px, calc(100% - 48px)) !important;
      max-width: 1200px !important;
      margin-inline: auto !important;
      padding-inline: 0 !important;
      box-sizing: border-box !important;
    }

    @media (max-width: 1180px) {
      html body:is([data-page="grow"], [data-page="dashboard"], [data-page="discover"], [data-page="market"], [data-page="autopilot"]) main > .workspace-page-container,
      html body[data-page="dashboard"] main > .container.os-layout.workspace-page-container,
      html body[data-page="market"]:has(.cg-worth) main > .container.os-layout.workspace-page-container,
      html body[data-page="autopilot"]:has(.cg-pipeline) main > .container.os-layout.workspace-page-container,
      html body[data-page="discover"] main.workspace-page-container[data-jobs-page],
      html body[data-page="discover"] main[data-jobs-page] > .workspace-page-container,
      html body[data-page="jobs"] main.workspace-page-container[data-jobs-page],
      html body[data-page="jobs"] main[data-jobs-page] > .workspace-page-container,
      html body[data-page="jobs"] main[data-jobs-page] > .page-hero > .container,
      html body[data-page="jobs"] main[data-jobs-page] > .jobs-page-layout {
        width: min(100% - 32px, 1200px) !important;
      }
    }

    html body .topbar.workspace-topbar {
      position: sticky !important;
      top: 0 !important;
      z-index: 1000 !important;
      height: 64px !important;
      min-height: 64px !important;
      padding: 0 !important;
      border-bottom: 1px solid rgba(227, 220, 200, 0.7) !important;
      background: rgba(248, 244, 234, 0.78) !important;
      box-shadow: none !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
    }

    html body .topbar.workspace-topbar::before,
    html body .topbar.workspace-topbar::after {
      content: none !important;
      display: none !important;
    }

    html body .topbar.workspace-topbar .nav-inner {
      width: min(1240px, calc(100% - 48px)) !important;
      max-width: 1240px !important;
      height: 64px !important;
      min-height: 64px !important;
      margin: 0 auto !important;
      padding: 0 !important;
      display: grid !important;
      grid-template-columns: auto minmax(360px, 1fr) minmax(250px, 0.55fr) auto !important;
      align-items: center !important;
      gap: 32px !important;
    }

    html body .topbar.workspace-topbar .cg-top-brand {
      justify-self: start !important;
      display: inline-flex !important;
      align-items: center !important;
      min-width: 154px !important;
      height: 42px !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
    }

    html body .topbar.workspace-topbar .cg-navbar-logo {
      display: block !important;
      width: 154px !important;
      max-width: 154px !important;
      height: auto !important;
      max-height: 42px !important;
      object-fit: contain !important;
      object-position: left center !important;
    }

    html body .topbar.workspace-topbar .cg-brand-mark,
    html body .topbar.workspace-topbar .cg-top-brand .brand-text {
      display: none !important;
    }

    html body .topbar.workspace-topbar .cg-workspace-tabs {
      justify-self: start !important;
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
      min-width: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
    }

    html body .topbar.workspace-topbar .cg-workspace-tabs a {
      min-width: 0 !important;
      width: auto !important;
      height: 40px !important;
      min-height: 40px !important;
      padding: 0 16px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 0 !important;
      border-radius: 9999px !important;
      background: transparent !important;
      box-shadow: none !important;
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      font-family: "Inter", ui-sans-serif, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 400 !important;
      line-height: 1 !important;
      letter-spacing: 0 !important;
      text-decoration: none !important;
      white-space: nowrap !important;
    }

    html body .topbar.workspace-topbar .cg-workspace-tabs a.active,
    html body .topbar.workspace-topbar .cg-workspace-tabs a:hover {
      color: #f8f4ea !important;
      -webkit-text-fill-color: #f8f4ea !important;
      background: #1f332c !important;
      box-shadow: 0 4px 14px -4px rgba(31, 51, 44, 0.4) !important;
    }

    html body .topbar.workspace-topbar .cg-vera-search {
      justify-self: end !important;
      width: min(290px, 100%) !important;
      max-width: 290px !important;
      height: 32px !important;
      min-height: 32px !important;
      margin: 0 !important;
      padding: 0 8px 0 12px !important;
      display: grid !important;
      grid-template-columns: 16px minmax(0, 1fr) auto !important;
      align-items: center !important;
      gap: 8px !important;
      border: 1px solid rgba(227, 220, 200, 0.9) !important;
      border-radius: 9999px !important;
      background: rgba(255, 255, 255, 0.62) !important;
      box-shadow: none !important;
    }

    html body .topbar.workspace-topbar .cg-vera-search svg {
      width: 16px !important;
      height: 16px !important;
      color: #6a7a9a !important;
      stroke: #6a7a9a !important;
    }

    html body .topbar.workspace-topbar .cg-vera-search input {
      width: 100% !important;
      min-width: 0 !important;
      height: 100% !important;
      padding: 0 !important;
      border: 0 !important;
      outline: 0 !important;
      background: transparent !important;
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      font-family: "Inter", ui-sans-serif, system-ui, sans-serif !important;
      font-size: 12px !important;
      font-weight: 400 !important;
      line-height: 1 !important;
    }

    html body .topbar.workspace-topbar .cg-vera-search input::placeholder {
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      opacity: 0.82 !important;
    }

    html body .topbar.workspace-topbar .cg-user-actions {
      justify-self: end !important;
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    html body .topbar.workspace-topbar .cg-message-trigger,
    html body .topbar.workspace-topbar .notification-trigger {
      position: relative !important;
      width: 36px !important;
      min-width: 36px !important;
      height: 36px !important;
      min-height: 36px !important;
      margin: 0 !important;
      padding: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid rgba(227, 220, 200, 0.86) !important;
      border-radius: 9999px !important;
      background: rgba(255, 255, 255, 0.66) !important;
      color: #1f332c !important;
      -webkit-text-fill-color: #1f332c !important;
      box-shadow: 0 1px 2px rgba(31, 51, 44, 0.04), 0 2px 8px -2px rgba(31, 51, 44, 0.08) !important;
    }

    html body .topbar.workspace-topbar .cg-message-trigger svg,
    html body .topbar.workspace-topbar .notification-trigger svg {
      width: 20px !important;
      height: 20px !important;
      color: #1f332c !important;
      stroke: #1f332c !important;
    }

    html body .topbar.workspace-topbar .notification-trigger strong {
      position: absolute !important;
      right: -5px !important;
      top: -5px !important;
      width: 18px !important;
      height: 18px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border-radius: 9999px !important;
      background: #4db6ac !important;
      color: #ffffff !important;
      -webkit-text-fill-color: #ffffff !important;
      font-size: 10px !important;
      font-weight: 700 !important;
      line-height: 1 !important;
    }

    html body .topbar.workspace-topbar .account-menu-trigger,
    html body .topbar.workspace-topbar .nav-actions .account-menu-trigger,
    html body .topbar.workspace-topbar .cg-avatar-trigger {
      width: 36px !important;
      min-width: 36px !important;
      height: 36px !important;
      min-height: 36px !important;
      margin: 0 !important;
      padding: 0 !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 0 !important;
      border-radius: 9999px !important;
      background: #1f332c !important;
      box-shadow: 0 4px 14px -4px rgba(31, 51, 44, 0.4) !important;
      color: #f8f4ea !important;
      -webkit-text-fill-color: #f8f4ea !important;
    }

    html body .topbar.workspace-topbar .account-menu-trigger :is(span, strong, i),
    html body .topbar.workspace-topbar .nav-actions .account-menu-trigger :is(span, strong, i),
    html body .topbar.workspace-topbar .cg-avatar-trigger span {
      color: #f8f4ea !important;
      -webkit-text-fill-color: #f8f4ea !important;
      font-family: "Inter", ui-sans-serif, system-ui, sans-serif !important;
      font-size: 14px !important;
      font-weight: 700 !important;
      line-height: 1 !important;
      letter-spacing: 0 !important;
    }

    html body .topbar.workspace-topbar .account-menu {
      top: calc(100% + 10px) !important;
      right: 0 !important;
    }

    @media (max-width: 1180px) {
      html body .topbar.workspace-topbar .nav-inner {
        width: min(100% - 32px, 1240px) !important;
        grid-template-columns: auto 1fr auto !important;
        gap: 18px !important;
      }

      html body .topbar.workspace-topbar .cg-vera-search {
        display: none !important;
      }

      html body .topbar.workspace-topbar .cg-workspace-tabs {
        overflow-x: auto !important;
        scrollbar-width: none !important;
      }

      html body .topbar.workspace-topbar .cg-workspace-tabs::-webkit-scrollbar {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}

function renderNavigation() {
  const topbar = qs(".topbar");
  if (!topbar) return;
  const page = document.body.dataset.page || "home";
  const isOnboardWizard = page === "register" || page === "onboarding" || Boolean(qs("[data-employer-onboarding]"));
  if (isOnboardWizard) {
    topbar.hidden = true;
    return;
  }
  topbar.hidden = false;
  const navInner = qs(".nav-inner", topbar);
  const mobileNav = qs(".mobile-nav", topbar);
  if (!navInner) return;
  const state = readState();
  const loggedIn = Boolean(state.session.loggedIn);
  const publicPages = new Set(["home", "login", "register", "explore", "companies", "universities", "community"]);
  const workspacePages = new Set(["dashboard", "discover", "grow", "market", "autopilot", "posts", "profile"]);
  const forcePublicNav = publicPages.has(page);
  const useWorkspaceNav = workspacePages.has(page) || (loggedIn && !forcePublicNav);
  topbar.classList.toggle("workspace-topbar", useWorkspaceNav);
  topbar.classList.toggle("public-topbar", !useWorkspaceNav);
  topbar.dataset.navMode = useWorkspaceNav ? "workspace" : "public";
  navInner.innerHTML = useWorkspaceNav ? workspaceTopNav() : publicNav();
  ensureWorkspaceNavbarStyles();
  if (mobileNav) {
    mobileNav.innerHTML = useWorkspaceNav
      ? ""
      : `<a href="explore.html">Explore</a><a href="companies.html">Opportunities</a><a href="community.html">Community</a><a href="login.html">Login</a><a href="register.html">Create Account</a>`;
  }
  createIcons();
  setActiveNav();
  bindAccountMenu();
  bindNotificationMenu();
  bindWorkspaceNavDropdowns();
  const workspaceSearchForm = qs("[data-workspace-search]");
  if (workspaceSearchForm?.classList.contains("cg-vera-search")) {
    attachLiveSearch(workspaceSearchForm, query => renderSearchPanelContent(query, "workspace", readState()), () => renderSearchDefaultContent(readState()));
  }
  /* Both the plain workspace-search (employer/no-live-dropdown variant) and
     the cg-vera-search "Ask Vera anything" variant need this SAME
     navigate-on-submit handler - attachLiveSearch() only ever re-renders
     the inline preview dropdown and calls preventDefault(), it never
     navigates, so without this the nav search was a dead end whenever a
     user pressed Enter instead of clicking a dropdown result. Destination
     falls through to recommended-roles.html (not discover.html) for a
     plain role/job query because that's the page that actually reads and
     applies ?q= (verified) - discover.html's own search box does too, but
     only for its OWN in-page form, not for a ?q= param on initial load. */
  if (workspaceSearchForm) {
    workspaceSearchForm.addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const q = String(form.get("q") || "").trim();
      if (!q) return;
      const lower = q.toLowerCase();
      const destination = state.session.role === "employer"
        ? "employer-app.html"
        : lower.includes("university") || lower.includes("college") || lower.includes("degree") || lower.includes("scholarship")
        ? "discover-universities.html"
        : lower.includes("company") || lower.includes("culture") || lower.includes("review") || lower.includes("maybank") || lower.includes("grab") || lower.includes("cimb")
          ? "discover-companies.html"
          : "recommended-roles.html";
      location.href = state.session.role === "employer" ? `${destination}?q=${encodeURIComponent(q)}#candidates` : `${destination}?q=${encodeURIComponent(q)}`;
    });
  }
}

function bindNotificationMenu() {
  const toggle = qs("[data-notification-toggle]");
  const menu = qs("[data-notification-menu]");
  if (!toggle || !menu) return;
  const close = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };
  toggle.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    menu.hidden ? open() : close();
  });
  menu.addEventListener("click", event => event.stopPropagation());
  qsa("[data-notification-nav]", menu).forEach(item => {
    const go = () => {
      markNotificationRead(item.dataset.notificationId);
      location.href = item.dataset.notificationNav;
    };
    item.addEventListener("click", go);
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        go();
      }
    });
  });
  qs("[data-mark-all-read]", menu)?.addEventListener("click", event => {
    event.preventDefault();
    markAllNotificationsRead();
    renderNavigation();
    showToast("All notifications marked as read.");
  });
  document.addEventListener("click", close);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });
}

/* Workspace nav hover dropdowns (Discover/Growth/Career Value/Pipeline -
   not Dashboard or Feed, see NAV_SECTION_MAP). Hover is handled purely in
   CSS; this only wires the explicit tap-to-open toggle (mobile/touch, and
   an alternative to hover on desktop) and same-page smooth-scroll vs.
   cross-page navigation for the section links themselves. */
function bindWorkspaceNavDropdowns() {
  const wraps = qsa(".cg-nav-item-wrap");
  if (!wraps.length) return;
  const closeTimers = new WeakMap();
  const cancelCloseTimer = wrap => {
    const timer = closeTimers.get(wrap);
    if (timer) {
      clearTimeout(timer);
      closeTimers.delete(wrap);
    }
  };
  const closeAll = () => wraps.forEach(wrap => {
    cancelCloseTimer(wrap);
    wrap.classList.remove("is-open", "hover-open");
    qs(".cg-nav-dropdown-toggle", wrap)?.setAttribute("aria-expanded", "false");
  });
  wraps.forEach(wrap => {
    const toggle = qs(".cg-nav-dropdown-toggle", wrap);
    toggle?.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      const wasOpen = wrap.classList.contains("is-open");
      closeAll();
      if (!wasOpen) {
        wrap.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
    // Grace period so the dropdown doesn't snap shut while the pointer is
    // crossing the visual gap between the nav pill and the panel below it.
    wrap.addEventListener("mouseenter", () => {
      cancelCloseTimer(wrap);
      wrap.classList.add("hover-open");
    });
    wrap.addEventListener("mouseleave", () => {
      cancelCloseTimer(wrap);
      closeTimers.set(wrap, setTimeout(() => {
        wrap.classList.remove("hover-open");
        closeTimers.delete(wrap);
      }, 220));
    });
    qsa("[data-nav-section-link]", wrap).forEach(link => {
      link.addEventListener("click", event => {
        const [hrefPage, hash] = link.getAttribute("href").split("#");
        const currentPage = location.pathname.split("/").pop() || "";
        if (!hash) return;
        if (hrefPage === currentPage) {
          event.preventDefault();
          qs(`#${hash}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        closeAll();
      });
    });
  });
  document.addEventListener("click", closeAll);
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    closeAll();
    if (document.activeElement?.closest(".cg-nav-item-wrap")) document.activeElement.blur();
  });
}

function syncCurrentUser(state) {
  if (!state.session?.currentUserId || !state.auth?.users) return state;
  state.auth.users = state.auth.users.map(user => user.id === state.session.currentUserId
    ? { ...user, fullName: state.profile.personal.fullName, profile: state.profile, updatedAt: nowStamp() }
    : user
  );
  return state;
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

/* Scrolls to the element matching the current #hash, if any - used after a
   render() call so the workspace nav's hover-dropdown section links work
   even though the target ids don't exist in the DOM until the page's own
   JS has rendered (a plain browser #hash-on-load can't find them yet). */
function scrollToHashSection(root) {
  if (!location.hash) return;
  window.setTimeout(() => {
    let target;
    try {
      target = qs(location.hash, root || document);
    } catch {
      return;
    }
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 60);
}

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function createIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function ensureBrandFonts() {
  if (document.getElementById("careergo-brand-fonts")) return;
  const link = document.createElement("link");
  link.id = "careergo-brand-fonts";
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700;800;900&display=swap";
  document.head.appendChild(link);
}

function renderSiteFooter() {
  const host = qs(".site-shell") || document.body;
  const page = document.body.dataset.page || "home";
  const footerPages = new Set(["home", "community"]);
  const existingFooter = qs(".site-footer");

  if (!footerPages.has(page)) {
    existingFooter?.remove();
    return;
  }

  let footer = existingFooter;
  if (!footer) {
    footer = document.createElement("footer");
    footer.className = "site-footer";
    host.appendChild(footer);
  }

  footer.innerHTML = `
      <div class="footer-wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-brand-mark"><img class="footer-logo-icon" src="assets/careergo-logo-script.png" alt="CareerGo logo"></div>
            <p>The AI-guided career platform &mdash; find jobs, research companies and universities, and grow with Vera.</p>
          </div>
          <nav class="footer-column" aria-label="Product">
            <h3>Product</h3>
            <a href="explore.html">Explore</a>
            <a href="companies.html">Companies</a>
            <a href="universities.html">Universities</a>
            <a href="community.html">Community</a>
            <a href="about.html">About</a>
          </nav>
          <nav class="footer-column" aria-label="For employers">
            <h3>For Employers</h3>
            <a href="employers.html">Employer entry</a>
            <a href="register.html">Create employer account</a>
            <a href="employer-app.html#candidates">Candidate search</a>
            <a href="employer-app.html#pipeline">Hiring pipeline</a>
          </nav>
          <nav class="footer-column" aria-label="Company">
            <h3>Company</h3>
            <a href="about.html">About</a>
            <a href="employers.html">Careers</a>
            <a href="about.html">Contact</a>
            <a href="#">Privacy</a>
          </nav>
        </div>
        <div class="footer-bottom">
          <span>(c) 2026 CareerGo. All rights reserved.</span>
        </div>
      </div>
    `;
  footer.querySelector(".footer-bottom").innerHTML = `<span>&copy; 2026 CareerGo &bull; Career OS</span>`;
}

function initCustomSelect(select) {
  const root = select?.closest("[data-custom-select]");
  if (!root || root.dataset.customSelectReady === "true") return;
  const trigger = qs("[data-custom-select-trigger]", root);
  const valueLabel = qs("[data-custom-select-value]", root);
  const panel = qs("[data-custom-select-panel]", root);
  if (!trigger || !valueLabel || !panel) return;

  root.dataset.customSelectReady = "true";

  const options = () => [...select.options].map(option => option.value || option.textContent);
  const optionButtons = () => qsa("[data-custom-select-option]", panel);
  const selectedIndex = () => Math.max(0, options().indexOf(select.value));

  function sync() {
    const label = select.value || options()[0] || "";
    valueLabel.textContent = label;
    optionButtons().forEach(button => {
      const active = button.dataset.value === label;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
  }

  function renderOptions() {
    panel.innerHTML = options().map((value, index) => `
      <button class="custom-select-option" type="button" role="option" data-custom-select-option data-value="${value}" tabindex="-1" aria-selected="${value === select.value}">
        ${value}
      </button>
    `).join("");
    optionButtons().forEach((button, index) => {
      button.addEventListener("click", () => choose(index));
      button.addEventListener("keydown", event => handleOptionKey(event, index));
    });
    sync();
  }

  function open(focusIndex = selectedIndex(), focusOption = true) {
    const group = root.closest(".filter-stack") || root.parentElement;
    qsa("[data-custom-select].open", group).forEach(item => {
      if (item === root) return;
      item.classList.remove("open");
      qs("[data-custom-select-trigger]", item)?.setAttribute("aria-expanded", "false");
      const itemPanel = qs("[data-custom-select-panel]", item);
      if (itemPanel) itemPanel.hidden = true;
    });
    root.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    if (focusOption) optionButtons()[focusIndex]?.focus();
  }

  function close(returnFocus = false) {
    root.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    if (returnFocus) trigger.focus();
  }

  function choose(index) {
    const next = options()[index];
    if (!next) return;
    select.value = next;
    sync();
    select.dispatchEvent(new Event("input", { bubbles: true }));
    select.dispatchEvent(new Event("change", { bubbles: true }));
    close(true);
  }

  function handleTriggerKey(event) {
    if (["ArrowDown", "Enter", " "].includes(event.key)) {
      event.preventDefault();
      open(selectedIndex());
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      open(Math.max(0, selectedIndex() - 1));
    } else if (event.key === "Escape") {
      close();
    }
  }

  function handleOptionKey(event, index) {
    const last = optionButtons().length - 1;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      optionButtons()[Math.min(last, index + 1)]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      optionButtons()[Math.max(0, index - 1)]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      optionButtons()[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      optionButtons()[last]?.focus();
    } else if (["Enter", " "].includes(event.key)) {
      event.preventDefault();
      choose(index);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close(true);
    }
  }

  panel.hidden = true;
  renderOptions();
  trigger.addEventListener("click", event => {
    event.stopPropagation();
    root.classList.contains("open") ? close() : open(selectedIndex(), false);
  });
  trigger.addEventListener("keydown", handleTriggerKey);
  select.addEventListener("change", sync);
  document.addEventListener("click", event => {
    if (!root.contains(event.target)) close();
  });
}

function orgsFor(type) {
  if (type === "universities") return DATA.universities;
  if (type === "companies") return DATA.companies;
  return [...DATA.companies, ...DATA.universities];
}

function orgForJob(job) {
  const hay = `${job.company} ${job.title}`.toLowerCase();
  return [...DATA.companies, ...DATA.universities].find(org => {
    const name = org.name.toLowerCase();
    const first = name.split(/\s+/)[0];
    return hay.includes(name) || hay.includes(first);
  }) || DATA.companies[0];
}

function rating(value) {
  return `<span class="rating" data-no-number-animation>${icon("star")} ${Number(value).toFixed(1)}</span>`;
}

function pills(items, extra = "") {
  return `<div class="pill-row">${items.map(item => `<span class="pill ${extra}">${item}</span>`).join("")}</div>`;
}

function progressBar(value) {
  return `<div class="progress" aria-label="${value}% complete"><span style="width:${Math.max(0, Math.min(100, value))}%"></span></div>`;
}

function pipelineMomentumStatus(score) {
  if (score >= 85) return { label: "Strong", tone: "strong" };
  if (score >= 60) return { label: "Steady", tone: "steady" };
  if (score >= 45) return { label: "Slipping", tone: "slipping" };
  return { label: "Stalled", tone: "stalled" };
}

function miniProgressRing(percent, size = 34) {
  const clamped = Math.max(0, Math.min(100, percent));
  const radius = (size - 4) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);
  return `
    <svg class="cg-kpi-ring" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img" aria-label="${clamped}% complete">
      <circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="none" stroke="rgba(11,109,101,0.16)" stroke-width="3"></circle>
      <circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="none" stroke="#0b6d65" stroke-width="3" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" transform="rotate(-90 ${size / 2} ${size / 2})"></circle>
    </svg>
  `;
}

function miniSparkline() {
  return `
    <svg class="cg-kpi-sparkline" viewBox="0 0 60 24" width="60" height="24" preserveAspectRatio="none" role="img" aria-label="Trending up">
      <polyline points="0,20 12,17 24,18 36,10 48,8 60,2" fill="none" stroke="#0b6d65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
    </svg>
  `;
}

function marketWeekLabels(count = 12) {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (count - 1 - i) * 7);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });
}

function marketWeeklySeries(startValue, endValue, seed, count = 12) {
  const amplitude = Math.max(1, (endValue - startValue) * 0.12);
  return Array.from({ length: count }, (_, i) => {
    const linear = startValue + (endValue - startValue) * (i / (count - 1));
    const wiggle = i === count - 1 ? 0 : Math.sin(i * 1.7 + seed) * amplitude;
    return Math.max(1, Math.round(linear + wiggle));
  });
}

let marketTooltipEl = null;

function getMarketTooltip() {
  if (marketTooltipEl && document.body.contains(marketTooltipEl)) return marketTooltipEl;
  marketTooltipEl = document.createElement("div");
  marketTooltipEl.className = "cg-bar-tooltip";
  marketTooltipEl.setAttribute("role", "tooltip");
  marketTooltipEl.innerHTML = `<span class="cg-bar-tooltip-text"></span><i class="cg-bar-tooltip-arrow"></i>`;
  document.body.appendChild(marketTooltipEl);
  return marketTooltipEl;
}

function showMarketTooltip(bar) {
  const label = bar.dataset.tooltip;
  if (!label) return;
  const tooltip = getMarketTooltip();
  qs(".cg-bar-tooltip-text", tooltip).textContent = label;
  tooltip.classList.add("is-visible");
  tooltip.classList.remove("is-below");

  const margin = 8;
  const gap = 10;
  const barRect = bar.getBoundingClientRect();
  const tipRect = tooltip.getBoundingClientRect();
  const barCenterX = barRect.left + barRect.width / 2;

  let left = barCenterX - tipRect.width / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - tipRect.width - margin));

  let top = barRect.top - tipRect.height - gap;
  let below = false;
  if (top < margin) {
    top = barRect.bottom + gap;
    below = true;
  }
  tooltip.classList.toggle("is-below", below);
  tooltip.style.left = `${Math.round(left)}px`;
  tooltip.style.top = `${Math.round(top)}px`;

  const arrow = qs(".cg-bar-tooltip-arrow", tooltip);
  const arrowLeft = Math.max(10, Math.min(barCenterX - left, tipRect.width - 10));
  arrow.style.left = `${Math.round(arrowLeft)}px`;
}

function hideMarketTooltip() {
  marketTooltipEl?.classList.remove("is-visible");
}

function bindMarketTooltips(root) {
  qsa(".cg-bars i[data-tooltip]", root).forEach(bar => {
    bar.addEventListener("mouseenter", () => showMarketTooltip(bar));
    bar.addEventListener("mouseleave", hideMarketTooltip);
    bar.addEventListener("focus", () => showMarketTooltip(bar));
    bar.addEventListener("blur", hideMarketTooltip);
  });
}

function money(value) {
  return `RM${Number(value).toLocaleString("en-MY")}`;
}

function showToast(message, type = "success") {
  let stack = qs("[data-toast-stack]");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    stack.dataset.toastStack = "";
    document.body.appendChild(stack);
  }
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<strong>${type === "success" ? "Done" : "Note"}</strong><span>${message}</span>`;
  stack.appendChild(toast);
  setTimeout(() => toast.remove(), 3600);
}

function showSignupPrompt(reason = "unlock CareerGo personalization") {
  const existing = qs("[data-signup-prompt]");
  if (existing) existing.remove();
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.dataset.signupPrompt = "";
  backdrop.innerHTML = `
    <div class="modal glass-card">
      <div class="modal-head">
        <div>
          <div class="section-kicker">CareerGo account</div>
          <h2>Create an account to ${reason}.</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <p class="section-sub">Public browsing stays open. A CareerGo account unlocks saving, Vera coaching, personalized recommendations, and application tracking.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="register.html">${icon("user-plus")} Create Account</a>
        <a class="btn btn-ghost" href="login.html">${icon("log-in")} Login</a>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  createIcons();
}

function bindProtectedPrompts(root = document) {
  qsa("[data-auth-prompt]", root).forEach(item => item.addEventListener("click", event => {
    event.preventDefault();
    showSignupPrompt(item.dataset.authPrompt || "continue");
  }));
}

function appShell(active, content, options = {}) {
  return `<div class="os-main">${content}</div>`;
}

function initSidebarToggle() {
  if (!qs(".os-sidebar")) return;
  // Inject hamburger button into topbar nav-actions if on an OS page
  const navActions = qs(".nav-actions");
  if (navActions && !qs("#sidebar-open-btn")) {
    const btn = document.createElement("button");
    btn.id = "sidebar-open-btn";
    btn.className = "sidebar-toggle";
    btn.setAttribute("aria-label", "Open navigation");
    btn.innerHTML = icon("menu");
    navActions.prepend(btn);
    createIcons(); // re-render icons in new button
  }

  const openBtn = qs("#sidebar-open-btn");
  const closeBtn = qs("#sidebar-close-btn");
  const overlay = qs("#sidebar-overlay");

  function openSidebar() { document.body.classList.add("sidebar-open"); }
  function closeSidebar() { document.body.classList.remove("sidebar-open"); }

  if (openBtn) openBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  }, { once: false });
}

function initWorkspaceRailTooltips() {
  qsa(".workspace-rail .rail-item").forEach(item => {
    if (item.dataset.railTooltipReady === "true") return;
    item.dataset.railTooltipReady = "true";
    let tooltipTimer;
    item.addEventListener("mouseenter", () => {
      const rail = item.closest(".workspace-rail");
      if (!rail || rail.getBoundingClientRect().width > 90) return;
      item.classList.add("show-rail-tooltip");
      window.clearTimeout(tooltipTimer);
      tooltipTimer = window.setTimeout(() => item.classList.remove("show-rail-tooltip"), 220);
    });
    item.addEventListener("mouseleave", () => {
      window.clearTimeout(tooltipTimer);
      item.classList.remove("show-rail-tooltip");
    });
  });
}

function initWorkspaceRailScrollSync() {
  if (document.body.dataset.workspaceRailScrollSyncReady === "true") return;
  document.body.dataset.workspaceRailScrollSyncReady = "true";

  const media = window.matchMedia("(min-width: 1021px)");
  let ticking = false;

  function sync() {
    ticking = false;
    qsa(".workspace-rail").forEach(rail => {
      if (!media.matches) {
        rail.style.removeProperty("--rail-scroll-y");
        return;
      }
      rail.style.setProperty("--rail-scroll-y", `${Math.max(0, window.scrollY || 0)}px`);
    });
  }

  function requestSync() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(sync);
  }

  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
  media.addEventListener?.("change", requestSync);
  sync();
}

function syncFeedSidebarSticky() {
  const shell = qs(".cg-feed-shell");
  if (!shell) return;
  const topOffset = 106;
  const shellRect = shell.getBoundingClientRect();
  const shellStyle = getComputedStyle(shell);
  const paddingTop = parseFloat(shellStyle.paddingTop) || 0;
  const paddingBottom = parseFloat(shellStyle.paddingBottom) || 0;
  const contentTop = shellRect.top + paddingTop;
  const contentHeight = shellRect.height - paddingTop - paddingBottom;
  qsa(".cg-feed-left, .cg-feed-aside", shell).forEach(el => {
    const elHeight = el.getBoundingClientRect().height;
    const maxTranslate = Math.max(0, contentHeight - elHeight);
    const translate = Math.min(Math.max(topOffset - contentTop, 0), maxTranslate);
    el.style.transform = translate > 0.5 ? `translateY(${translate}px)` : "";
  });
}

function initFeedSidebarStickySync() {
  if (document.body.dataset.feedSidebarStickyReady === "true") return;
  document.body.dataset.feedSidebarStickyReady = "true";
  let ticking = false;
  function requestSync() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      syncFeedSidebarSticky();
    });
  }
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
  requestSync();
}

function setActiveNav() {
  if (qs(".public-site-nav")) {
    qsa("[data-nav].active, .public-site-nav .active, .public-site-actions .active").forEach(link => {
      link.classList.remove("active");
    });
    return;
  }
  const page = document.body.dataset.page || "home";
  qsa("[data-nav]").forEach(link => {
    const isPostsMessages = link.dataset.nav === "posts" && page === "posts" && location.hash === "#messages";
    link.classList.toggle("active", link.dataset.nav === page && !isPostsMessages);
  });
}

function renderFeatured() {
  const jobRoot = qs("[data-featured-jobs]");
  if (jobRoot) {
    const cards = DATA.jobs.map(job => `
      <a class="list-card featured-job-card" href="explore.html?job=${job.id}">
        <div class="list-card-top">
          <div>
            <h3>${job.title}</h3>
            <div class="muted small">${job.company} - ${job.location}</div>
          </div>
          <span class="score">${job.match}%</span>
        </div>
        ${pills(job.skills.slice(0, 3), "cyan")}
      </a>
    `).join("");
    jobRoot.innerHTML = cards + cards;
  }
  const orgRoot = qs("[data-featured-orgs]");
  if (orgRoot) {
    const orgs = [...DATA.companies, ...DATA.universities];
    const cards = orgs.map(org => `
      <a class="list-card featured-org-card" href="${org.type === "University" ? "universities.html" : "companies.html"}?org=${org.id}">
        <div class="list-card-top">
          <div>
            <h3>${org.name}</h3>
            <div class="muted small">${org.industry} - ${org.location}</div>
          </div>
          ${rating(org.rating)}
        </div>
        ${pills(org.tags.slice(0, 3), "gold")}
      </a>
    `).join("");
    orgRoot.innerHTML = cards + cards;
  }
}

/* Public explore.html's "Featured Opportunities" - unified with the same
   .cg-role-unit card used on Dashboard/Roles/Discover (numeral + MATCH
   label, teal-green avatar) rather than its old bespoke circular match-ring
   card. This is a guest-facing marketing page (no session yet), so actions
   route to register.html instead of the logged-in save/compare/apply
   handlers - same visual system, different, guest-appropriate CTAs.
   Salaries are stored RAW here and run through convertSalaryToRM() lazily
   inside the card markup function below, NOT at this const's own
   initialization - convertSalaryToRM/USD_TO_RM are declared much later in
   this file (near normalizeRole), and calling them here at top-level parse
   time (rather than later, at render time inside a function body) would
   throw "Cannot access 'USD_TO_RM' before initialization" the moment
   app.js loads on ANY page, breaking the whole script. Shopee's Jakarta
   listing keeps its own local currency (IDR) deliberately, same as
   elsewhere in the app for non-Malaysian roles. */
const EXPLORE_FEATURED_ROLES = [
  { avatar: "S", company: "Stripe", title: "Applied AI Engineer", match: 94, location: "Singapore", mode: "Hybrid", salary: "$140k - 180k", posted: "Posted 2d ago" },
  { avatar: "N", company: "Notion", title: "Senior Product Manager", match: 91, location: "Remote - APAC", mode: "Remote", salary: "$150k - 200k", posted: "Posted 5h ago" },
  { avatar: "G", company: "Grab", title: "Data Scientist, Marketplace", match: 88, location: "Kuala Lumpur", mode: "On-site", salary: "RM 12k - 18k", posted: "Posted 1d ago" },
  { avatar: "S", company: "Shopee", title: "UI/UX Designer, Growth", match: 85, location: "Jakarta", mode: "Hybrid", salary: "IDR 25M - 40M", posted: "Posted 3d ago" },
  { avatar: "P", company: "Petronas", title: "Graduate Engineer, Digital", match: 82, location: "Kuala Lumpur", mode: "On-site", salary: "RM 4.5k - 6k", posted: "Posted 1w ago" },
  { avatar: "L", company: "Linear", title: "Founding Design Engineer", match: 90, location: "Remote", mode: "Remote", salary: "$160k - 210k", posted: "Posted 6h ago" }
];

function exploreFeaturedRoleCardMarkup(role) {
  return `
    <article class="cg-role-unit">
      <a class="cg-role-unit-open" href="register.html" aria-label="Preview ${role.title} at ${role.company}">
        <div class="cg-role-unit-head">
          <span class="cg-role-unit-avatar">${role.avatar}</span>
          <div class="cg-role-unit-id"><small>${role.company}</small><h3>${role.title}</h3></div>
          <span class="cg-role-unit-match"><strong>${role.match}</strong><small>Match</small></span>
        </div>
        <p class="cg-role-unit-meta">${icon("map-pin")} ${role.location} <i>&middot;</i> ${role.mode} <i>&middot;</i> ${convertSalaryToRM(role.salary)}</p>
        <p class="cg-role-unit-why">${icon("clock")} ${role.posted}</p>
      </a>
      <div class="cg-role-unit-actions">
        <a class="btn btn-primary cg-role-unit-view" href="register.html">Preview ${icon("arrow-up-right")}</a>
        <a class="cg-role-unit-icon" href="register.html" aria-label="Save ${role.title} at ${role.company}" title="Save">${icon("bookmark")}</a>
      </div>
    </article>
  `;
}

function renderExploreFeaturedOpportunities() {
  const root = qs("[data-explore-featured-roles]");
  if (!root) return;
  root.innerHTML = EXPLORE_FEATURED_ROLES.map(exploreFeaturedRoleCardMarkup).join("");
  createIcons();
}

function initFeaturedRolesCarousel() {
  const carousel = qs("[data-featured-carousel]");
  if (!carousel || carousel.dataset.carouselReady === "true") return;
  const track = qs("[data-featured-jobs]", carousel);
  if (!track) return;
  carousel.dataset.carouselReady = "true";

  const prev = qs("[data-featured-prev]", carousel);
  const next = qs("[data-featured-next]", carousel);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let autoFrame = 0;
  let lastTime = 0;
  let paused = reducedMotion.matches;
  let resumeTimer = 0;
  let virtualScroll = track.scrollLeft;
  const speed = 34;
  const loopWidth = () => {
    const duplicateStart = track.children[Math.floor(track.children.length / 2)];
    return duplicateStart ? duplicateStart.offsetLeft : track.scrollWidth / 2;
  };
  const normalizeScroll = () => {
    const width = loopWidth();
    if (!width) return;
    if (virtualScroll >= width) virtualScroll -= width;
    if (virtualScroll < 0) virtualScroll += width;
    track.scrollLeft = virtualScroll;
  };
  const pauseForInteraction = () => {
    paused = true;
    window.clearTimeout(resumeTimer);
  };
  const resumeSoon = () => {
    window.clearTimeout(resumeTimer);
    if (reducedMotion.matches) return;
    resumeTimer = window.setTimeout(() => {
      paused = false;
      lastTime = performance.now();
    }, 2400);
  };
  const getStep = () => {
    const card = qs(".featured-job-card", track);
    if (!card) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    return card.getBoundingClientRect().width + gap;
  };
  const updateState = () => {
    carousel.classList.toggle("is-at-start", track.scrollLeft <= 2);
  };
  const scrollByCard = direction => {
    pauseForInteraction();
    virtualScroll = track.scrollLeft + getStep() * direction;
    normalizeScroll();
    track.scrollTo({ left: virtualScroll, behavior: "smooth" });
    resumeSoon();
  };
  const tick = now => {
    if (!lastTime) lastTime = now;
    const delta = now - lastTime;
    lastTime = now;
    if (!paused && track.scrollWidth > track.clientWidth) {
      virtualScroll += (speed * delta) / 1000;
      normalizeScroll();
    }
    autoFrame = requestAnimationFrame(tick);
  };

  prev?.addEventListener("click", () => scrollByCard(-1));
  next?.addEventListener("click", () => scrollByCard(1));
  track.addEventListener("scroll", updateState, { passive: true });
  window.addEventListener("resize", updateState);

  track.addEventListener("wheel", event => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    if (track.scrollWidth <= track.clientWidth) return;
    event.preventDefault();
    pauseForInteraction();
    virtualScroll = track.scrollLeft + event.deltaY;
    normalizeScroll();
    resumeSoon();
  }, { passive: false });

  let isDragging = false;
  let suppressClick = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  track.addEventListener("pointerdown", event => {
    if (event.pointerType === "touch") return;
    pauseForInteraction();
    isDragging = true;
    suppressClick = false;
    dragStartX = event.clientX;
    dragStartScroll = track.scrollLeft;
    virtualScroll = track.scrollLeft;
    track.classList.add("is-dragging");
    track.setPointerCapture?.(event.pointerId);
  });
  track.addEventListener("pointermove", event => {
    if (!isDragging) return;
    event.preventDefault();
    if (Math.abs(event.clientX - dragStartX) > 6) suppressClick = true;
    virtualScroll = dragStartScroll - (event.clientX - dragStartX);
    normalizeScroll();
  });
  track.addEventListener("pointerup", event => {
    isDragging = false;
    track.classList.remove("is-dragging");
    track.releasePointerCapture?.(event.pointerId);
    resumeSoon();
  });
  track.addEventListener("pointercancel", () => {
    isDragging = false;
    track.classList.remove("is-dragging");
    resumeSoon();
  });
  track.addEventListener("click", event => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);
  reducedMotion.addEventListener?.("change", event => {
    paused = event.matches;
    if (!event.matches) lastTime = performance.now();
  });

  updateState();
  autoFrame = requestAnimationFrame(tick);
}

function initResearchMarquee() {
  const marquee = qs("[data-research-marquee]");
  if (!marquee || marquee.dataset.marqueeReady === "true") return;
  const track = qs("[data-featured-orgs]", marquee);
  if (!track) return;
  marquee.dataset.marqueeReady = "true";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let animationFrame = 0;
  let lastTime = 0;
  let paused = reducedMotion.matches;
  let resumeTimer = 0;
  let isDragging = false;
  let suppressClick = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let virtualScroll = track.scrollLeft;
  const speed = 36;

  const loopWidth = () => {
    const duplicateStart = track.children[Math.floor(track.children.length / 2)];
    return duplicateStart ? duplicateStart.offsetLeft : track.scrollWidth / 2;
  };
  const normalizeScroll = () => {
    const width = loopWidth();
    if (!width) return;
    if (virtualScroll >= width) virtualScroll -= width;
    if (virtualScroll < 0) virtualScroll += width;
    track.scrollLeft = virtualScroll;
  };
  const pause = () => {
    paused = true;
    marquee.dataset.marqueePaused = "true";
    window.clearTimeout(resumeTimer);
  };
  const resumeSoon = () => {
    window.clearTimeout(resumeTimer);
    if (reducedMotion.matches) return;
    resumeTimer = window.setTimeout(() => {
      paused = false;
      marquee.dataset.marqueePaused = "false";
      lastTime = performance.now();
    }, 3000);
  };
  const tick = now => {
    if (!lastTime) lastTime = now;
    const delta = now - lastTime;
    lastTime = now;
    if (!paused && track.scrollWidth > track.clientWidth) {
      virtualScroll += (speed * delta) / 1000;
      normalizeScroll();
    }
    animationFrame = requestAnimationFrame(tick);
  };

  marquee.addEventListener("mouseenter", pause);
  marquee.addEventListener("mouseleave", () => {
    if (!reducedMotion.matches) {
      paused = false;
      marquee.dataset.marqueePaused = "false";
      lastTime = performance.now();
    }
  });
  marquee.addEventListener("touchstart", pause, { passive: true });
  marquee.addEventListener("touchend", resumeSoon, { passive: true });

  track.addEventListener("wheel", event => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    if (track.scrollWidth <= track.clientWidth) return;
    event.preventDefault();
    pause();
    virtualScroll = track.scrollLeft + event.deltaY;
    normalizeScroll();
    resumeSoon();
  }, { passive: false });

  track.addEventListener("scroll", () => {
    if (!isDragging) return;
    virtualScroll = track.scrollLeft;
    normalizeScroll();
  }, { passive: true });

  track.addEventListener("pointerdown", event => {
    if (event.pointerType === "touch") return;
    pause();
    isDragging = true;
    suppressClick = false;
    dragStartX = event.clientX;
    dragStartScroll = track.scrollLeft;
    virtualScroll = track.scrollLeft;
    track.classList.add("is-dragging");
    track.setPointerCapture?.(event.pointerId);
  });
  track.addEventListener("pointermove", event => {
    if (!isDragging) return;
    event.preventDefault();
    if (Math.abs(event.clientX - dragStartX) > 6) suppressClick = true;
    virtualScroll = dragStartScroll - (event.clientX - dragStartX);
    normalizeScroll();
  });
  track.addEventListener("pointerup", event => {
    isDragging = false;
    track.classList.remove("is-dragging");
    track.releasePointerCapture?.(event.pointerId);
    resumeSoon();
  });
  track.addEventListener("pointercancel", () => {
    isDragging = false;
    track.classList.remove("is-dragging");
    resumeSoon();
  });
  track.addEventListener("click", event => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);

  reducedMotion.addEventListener?.("change", event => {
    paused = event.matches;
    marquee.dataset.marqueePaused = String(paused);
    if (!event.matches) lastTime = performance.now();
  });

  marquee.dataset.marqueePaused = String(paused);
  animationFrame = requestAnimationFrame(tick);
}

function initHomeMetricCountUp() {
  const root = qs(".home-metrics");
  if (!root || root.dataset.countupInitialized) return;
  root.dataset.countupInitialized = "true";
  root.dataset.countupReady = "true";

  const cards = qsa(".home-metrics-grid > div", root);
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const formatValue = (value, decimals, format) => {
    if (format === "compact") {
      if (value >= 100000) return `${Math.round(value / 1000)}k`;
      if (value >= 1000) return `${Math.round(value / 100) / 10}k`;
    }
    return decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString();
  };

  function animateCounter(el) {
    const target = Number(el.dataset.countTo || 0);
    const duration = Number(el.dataset.countDuration || 1400);
    const decimals = Number(el.dataset.countDecimals || 0);
    const suffix = el.dataset.countSuffix || "";
    const format = el.dataset.countFormat || (el.textContent.toLowerCase().includes("k") ? "compact" : "standard");
    const startedAt = performance.now();

    function tick(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = easeOut(progress);
      const value = target * eased;
      el.textContent = `${formatValue(value, decimals, format)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${formatValue(target, decimals, format)}${suffix}`;
        el.classList.add("count-complete");
      }
    }

    el.classList.remove("count-complete");
    requestAnimationFrame(tick);
  }

  function run() {
    cards.forEach((card, index) => {
      window.setTimeout(() => {
        card.classList.add("is-visible");
        const counter = qs("strong[data-count-to]", card);
        if (counter) animateCounter(counter);
      }, index * 100);
    });
  }

  if (!("IntersectionObserver" in window)) {
    run();
    return;
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    run();
    observer.disconnect();
  }, { threshold: 0.1, rootMargin: "0px 0px 1200px 0px" });

  observer.observe(root);
}

function initGlobalNumberAnimations() {
  if (document.body.dataset.globalNumberAnimationsReady === "true") return;
  document.body.dataset.globalNumberAnimationsReady = "true";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const selector = "strong, b, span, td, th, small";
  const animated = new WeakSet();
  const formatNumber = (value, config) => {
    const rounded = config.decimals > 0 ? value.toFixed(config.decimals) : Math.round(value).toString();
    const [whole, fraction] = rounded.split(".");
    const wholeText = config.useGrouping ? Number(whole).toLocaleString("en-MY") : whole;
    return `${config.prefix}${wholeText}${fraction ? `.${fraction}` : ""}${config.suffix}`;
  };
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function parseNumericText(text) {
    const trimmed = text.trim();
    if (!trimmed || trimmed.length > 18) return null;
    const match = trimmed.match(/^([+\-]?\s*(?:RM\s*)?)(\d[\d,]*(?:\.\d+)?)(\s*(?:%|[dkmw])?|\s*\/\s*\d[\d,]*)$/i);
    if (!match) return null;
    const rawNumber = match[2];
    const value = Number(rawNumber.replace(/,/g, ""));
    if (!Number.isFinite(value)) return null;
    return {
      original: trimmed,
      value,
      prefix: match[1].replace(/\s+/g, ""),
      suffix: match[3].replace(/\s+/g, ""),
      decimals: rawNumber.includes(".") ? rawNumber.split(".")[1].length : 0,
      useGrouping: rawNumber.includes(",") || value >= 1000
    };
  }

  function shouldSkip(el) {
    if (animated.has(el)) return true;
    if (el.children.length) return true;
    if (el.closest("input, textarea, select, option, script, style, [data-no-number-animation], [data-comparison-score], .rating, .application-overview, .application-kpi-grid, .application-stage-filter, .home-metrics")) return true;
    return false;
  }

  function animateNumber(el, config) {
    animated.add(el);
    el.dataset.numberAnimated = "true";
    if (reducedMotion.matches || config.value === 0) {
      el.textContent = config.original;
      el.classList.add("number-counted");
      return;
    }

    const duration = Math.min(1450, Math.max(720, 620 + String(Math.round(config.value)).length * 90));
    const startedAt = performance.now();
    el.classList.add("number-counting");

    function tick(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const value = config.value * easeOut(progress);
      el.textContent = progress < 1 ? formatNumber(value, config) : config.original;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.classList.remove("number-counting");
        el.classList.add("number-counted");
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const config = entry.target.__numberAnimationConfig;
        if (config) animateNumber(entry.target, config);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px 160px 0px" })
    : null;

  function prepare(el) {
    if (shouldSkip(el)) return;
    const config = parseNumericText(el.textContent);
    if (!config) return;
    el.__numberAnimationConfig = config;
    if (observer) observer.observe(el);
    else animateNumber(el, config);
  }

  function scan(root = document.body) {
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    if (root.matches?.(selector)) prepare(root);
    root.querySelectorAll?.(selector).forEach(prepare);
  }

  let scanQueued = false;
  function queueScan() {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => {
      scanQueued = false;
      scan();
    });
  }

  scan();

  const mutationObserver = new MutationObserver(mutations => {
    if (mutations.some(mutation => mutation.addedNodes.length)) queueScan();
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

function initGlobalInteractionAnimations() {
  if (document.body.dataset.globalInteractionAnimationsReady === "true") return;
  document.body.dataset.globalInteractionAnimationsReady = "true";
  document.body.classList.add("interaction-motion-ready");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const interactiveSelector = [
    "button",
    "a.btn",
    "[role='button']",
    ".btn",
    ".home-btn",
    ".pill",
    ".pipeline-stage",
    ".application-stage-actions button",
    ".tab-row button",
    ".custom-select-trigger",
    ".custom-select-option",
    ".rail-item",
    ".os-nav-button",
    ".account-menu-trigger",
    ".notification-trigger",
    ".plan-task-check",
    ".market-plan-task a",
    ".plan-task a",
    ".list-card[href]",
    "button[data-job-tab]",
    "button[data-vera-tab]",
    "button[data-market-role]"
  ].join(",");

  function animatePress(target) {
    if (reducedMotion.matches) return;
    target.classList.add("is-pressed");
    window.setTimeout(() => target.classList.remove("is-pressed"), 180);
  }

  function addRipple(target, event) {
    if (reducedMotion.matches || target.dataset.noRipple === "true") return;
    const rect = target.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.className = "interaction-ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  }

  document.addEventListener("mousedown", event => {
    if (event.button !== 0) return;
    const target = event.target.closest(interactiveSelector);
    if (!target || target.disabled || target.getAttribute("aria-disabled") === "true") return;
    animatePress(target);
    if (target.matches("button, a.btn, [role='button'], .btn, .home-btn, .pipeline-stage, .application-stage-actions button, .tab-row button, .pill")) {
      addRipple(target, event);
    }
  }, { passive: true });

  document.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target.closest(interactiveSelector);
    if (!target || target.disabled || target.getAttribute("aria-disabled") === "true") return;
    animatePress(target);
  });
}

function initHomeStageAnimation() {
  const root = qs(".home-stage-section");
  if (!root || root.dataset.stageAnimationReady === "true") return;
  root.dataset.stageAnimationReady = "true";

  const reveal = () => root.classList.add("is-visible");

  if (!("IntersectionObserver" in window)) {
    reveal();
    return;
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    reveal();
    observer.disconnect();
  }, { threshold: 0.01, rootMargin: "0px 0px 10000px 0px" });

  observer.observe(root);
}

function routeCandidateEntry() {
  const state = readState();
  if (!state.session.loggedIn) return false;
  if (state.session.role === "candidate") {
    location.href = state.onboarding.candidateDone ? "dashboard.html" : "onboarding.html";
    return true;
  }
  return false;
}

function renderJobSeekerEntry() {
  const root = qs("[data-job-seeker-entry]");
  if (!root) return;
  if (routeCandidateEntry()) return;
  const state = readState();
  if (state.session.loggedIn && state.session.role === "employer") {
    root.innerHTML = `
      <section class="container section">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Role switch needed</div>
          <h1 class="section-title">You are signed in as an employer.</h1>
          <p class="section-sub">Job seeker onboarding creates a candidate profile. Return to Employer OS or log in with a candidate account.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="employer-app.html">${icon("layout-dashboard")} Employer Dashboard</a><a class="btn btn-ghost" href="login.html">${icon("repeat-2")} Switch role</a></div>
        </div>
      </section>
    `;
    createIcons();
    return;
  }
  root.innerHTML = `
    <section class="entry-hero">
      <div class="container entry-grid">
        <div>
          <div class="page-back-actions">
            <a class="btn btn-ghost" href="index.html">${icon("arrow-left")} Back to Home</a>
          </div>
          <div class="eyebrow"><span class="spark">*</span> Job Seeker Journey</div>
          <h1 class="section-title">Build a career profile before you chase job posts.</h1>
          <p class="section-sub">CareerGo turns your background, goals, skills, and preferences into a Career Intelligence Profile, then Vera guides the next useful step.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="register.html">${icon("user-plus")} Create Job Seeker Account</a>
            <a class="btn btn-ghost" href="login.html">${icon("log-in")} Login</a>
            <a class="btn btn-cyan" href="explore.html">${icon("search")} Browse Jobs as Guest</a>
          </div>
        </div>
        <div class="glass-card entry-panel">
          <h2 class="section-title mini">What unlocks after signup</h2>
          <div class="entry-list">
            ${[
              ["Career Intelligence", "Generate readiness, ATS, market fit, and next-action guidance.", "brain-circuit"],
              ["Resume and profile", "Upload a resume or build your profile manually.", "file-text"],
              ["Matched jobs", "See why roles fit, save them, apply, and track every stage.", "briefcase"],
              ["Company research", "Compare company ratings, reviews, salaries, and open roles.", "building-2"],
              ["Vera coaching", "Ask Vera for career plans, interview prep, and decision support.", "sparkles"]
            ].map(([title, body, ic]) => `<div class="locked-stat"><div class="locked-stat-icon">${icon(ic)}</div><div><strong>${title}</strong><p>${body}</p></div></div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
  createIcons();
}

function renderAboutPage() {
  const root = qs("[data-about]");
  if (!root) return;
  root.innerHTML = `
    <section class="container section">
      <div class="section-head">
        <div>
          <div class="section-kicker">About CareerGo</div>
          <h1 class="section-title">An AI Career Operating System for real career decisions.</h1>
          <p class="section-sub">CareerGo connects job discovery, company and university research, readiness analysis, application tracking, and Vera's coaching into one product journey.</p>
        </div>
      </div>
      <div class="grid-3">
        ${[
          ["For job seekers", "Personalized profiles, roadmaps, jobs, applications, salary signals, and career missions.", "user-round"],
          ["For employers", "Candidate search, talent pools, job posts, applicants, hiring pipeline, and fit explanations.", "building-2"],
          ["For education paths", "University research, reviews, graduate outcomes, and pathway guidance.", "graduation-cap"]
        ].map(([title, body, ic]) => `<article class="card"><div class="feature-icon">${icon(ic)}</div><h3>${title}</h3><p>${body}</p></article>`).join("")}
      </div>
    </section>
  `;
  createIcons();
}

function renderCommunityPage() {
  const root = qs("[data-community]");
  if (!root) return;
  root.innerHTML = `
    <section class="container section">
      <div class="section-head">
        <div>
          <div class="section-kicker">Community</div>
          <h1 class="section-title">Why CareerGo?</h1>
        </div>
        <a class="btn btn-primary" href="register.html">${icon("user-plus")} Join CareerGo</a>
      </div>
      <div class="grid-3">
        ${DATA.communityPosts.map(post => `<article class="card"><div class="muted small">${post.author}</div><h3>${post.title}</h3><p>${post.body}</p><span class="pill gold">${post.reactions} reactions</span></article>`).join("")}
      </div>
    </section>
  `;
  createIcons();
}

function universityRequirementChecks(uni, profile) {
  const req = uni.requirements;
  if (!req) return [];
  const checks = [];
  const level = String(profile?.background?.educationLevel || "").trim();
  checks.push({
    label: `Minimum qualification: ${req.qualification}`,
    status: level ? "ok" : "info",
    note: level ? `Your profile lists: ${level}.` : "Add your education level in Edit Career Data."
  });
  const cgpaMatch = String(profile?.background?.academicPerformance || "").match(/\d+(?:\.\d+)?/);
  const cgpa = cgpaMatch ? Number(cgpaMatch[0]) : null;
  const cgpaKnown = cgpa !== null && cgpa <= 4;
  checks.push({
    label: `CGPA ${req.cgpa.toFixed(1)}+ or equivalent`,
    status: !cgpaKnown ? "info" : cgpa >= req.cgpa ? "ok" : "gap",
    note: !cgpaKnown
      ? "Add your CGPA in Edit Career Data to check this."
      : cgpa >= req.cgpa
        ? `Your CGPA ${cgpa.toFixed(2)} meets this requirement.`
        : `Your CGPA ${cgpa.toFixed(2)} is below this - ask Vera about foundation or appeal routes.`
  });
  const hasEnglish = (profile?.skills?.languages || []).some(lang => /english/i.test(lang));
  checks.push({
    label: `English: ${req.english}`,
    status: hasEnglish ? "ok" : "info",
    note: hasEnglish ? "English is on your profile - attach your MUET / IELTS result when applying." : "Add your English proficiency to your profile."
  });
  checks.push({
    label: `Required subjects: ${req.subjects.join(", ")}`,
    status: "info",
    note: `Intakes: ${req.intakes}.`
  });
  return checks;
}

function universityRequirementsPanel(uni, profile) {
  const checks = universityRequirementChecks(uni, profile);
  if (!checks.length) return "";
  const met = checks.filter(check => check.status === "ok").length;
  return `
    <button type="button" class="cg-uni-requirements-trigger" data-uni-requirements="${uni.id}">
      ${icon("clipboard-list")} Entry requirements <b>${met}/${checks.length} matched</b> ${icon("chevron-right")}
    </button>
  `;
}

function openUniversityRequirementsModal(uniId) {
  const uni = DATA.universities.find(item => item.id === uniId);
  if (!uni) return;
  const checks = universityRequirementChecks(uni, readState().profile);
  const statusIcon = { ok: "check-circle-2", gap: "alert-triangle", info: "info" };
  const met = checks.filter(check => check.status === "ok").length;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-org-browse-modal cg-uni-requirements-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${uni.name}</div>
          <h2>Entry requirements</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <p class="cg-uni-requirements-match">${icon("clipboard-list")} <b>${met}/${checks.length} matched</b> against your profile</p>
      <div class="cg-uni-requirements">
        <ul>
          ${checks.map(check => `
            <li class="${check.status}">
              ${icon(statusIcon[check.status])}
              <div><strong>${check.label}</strong><p>${check.note}</p></div>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  function close() {
    backdrop.remove();
    document.removeEventListener("keydown", onEsc);
  }
  function onEsc(event) {
    if (event.key === "Escape") close();
  }
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) close();
  });
  document.addEventListener("keydown", onEsc);
  createIcons();
}

const MARKET_PULSE_CATEGORIES = [
  { tag: "In your market", trend: "Hiring +34%", title: "AI Product roles", salary: "RM 145k / year", salaryRange: "RM 118k - 172k / year", remote: "67% remote-friendly", openings: "312 new openings", tone: "teal", latestWeekly: 38, skills: ["Product strategy", "SQL", "Roadmapping"], companies: ["Setel", "Aerodyne", "Grab"] },
  { tag: "Missing from your profile", trend: "Hiring +62%", title: "Prompt engineering", salary: "RM 9,500 / month", salaryRange: "RM 7k - 13k / month", remote: "82% remote-friendly", openings: "48 new openings", tone: "blue", latestWeekly: 9, skills: ["Prompt design", "LLM evaluation", "Python"], companies: ["Aerodyne", "Grab"] },
  { tag: "Matches your background", trend: "Hiring +21%", title: "Design-first PMs", salary: "RM 132k / year", salaryRange: "RM 104k - 156k / year", remote: "54% remote-friendly", openings: "96 new openings", tone: "gold", latestWeekly: 16, skills: ["Design systems", "User research", "Figma"], companies: ["StoreHub", "Carsome"] },
  { tag: "Your region", trend: "Hiring +12%", title: "KL fintech product hubs", salary: "RM 128k / year", salaryRange: "RM 98k - 158k / year", remote: "38% remote-friendly", openings: "204 new openings", tone: "rose", latestWeekly: 26, skills: ["Fintech compliance", "Payments", "Stakeholder management"], companies: ["Setel", "Carsome"] },
  { tag: "Growing fast", trend: "Hiring +48%", title: "AI/ML infrastructure roles", salary: "RM 138k / year", salaryRange: "RM 108k - 168k / year", remote: "58% remote-friendly", openings: "72 new openings", tone: "teal", latestWeekly: 21, skills: ["MLOps", "Python", "Data pipelines"], companies: ["Aerodyne", "Grab"] },
  { tag: "High salary ceiling", trend: "Hiring +9%", title: "Fintech engineering leads", salary: "RM 168k / year", salaryRange: "RM 132k - 210k / year", remote: "44% remote-friendly", openings: "58 new openings", tone: "blue", latestWeekly: 19, skills: ["System design", "Payments", "Team leadership"], companies: ["Setel", "Grab"] },
  { tag: "New this quarter", trend: "Hiring +71%", title: "Sustainability & GreenTech roles", salary: "RM 112k / year", salaryRange: "RM 86k - 138k / year", remote: "49% remote-friendly", openings: "34 new openings", tone: "gold", latestWeekly: 6, skills: ["ESG reporting", "Data analysis", "Stakeholder management"], companies: ["Aerodyne"] },
  { tag: "Cooling slightly", trend: "Hiring -6%", title: "Generalist marketplace ops", salary: "RM 96k / year", salaryRange: "RM 78k - 118k / year", remote: "36% remote-friendly", openings: "41 new openings", tone: "rose", latestWeekly: 24, skills: ["Operations", "Vendor management", "SQL"], companies: ["Carsome", "StoreHub"] }
];

const MARKET_TONE_RAMP = {
  teal: ["#b9d9d4", "#a0cbc6", "#87beb8", "#6eb0aa", "#56a39c", "#3d958e", "#248880", "#0b7a72"],
  blue: ["#cae4ee", "#b5d5e3", "#a0c7d8", "#8bb8cd", "#75a9c2", "#609ab7", "#4b8cac", "#367da1"],
  gold: ["#eadfbf", "#e2d3aa", "#dbc696", "#d3ba81", "#ccae6c", "#c4a257", "#bd9543", "#b5892e"],
  rose: ["#ecd5cf", "#e4c8c1", "#ddbcb2", "#d5afa4", "#cea296", "#c69588", "#bf8979", "#b77c6b"]
};

function renderJobsPage() {
  const root = qs("[data-jobs-page]");
  if (!root) return;
  let state = readState();
  const isDiscoverPage = document.body.dataset.page === "discover";
  if (state.session.loggedIn && state.session.role === "employer") {
    root.innerHTML = `
      <section class="container section">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Employer account</div>
          <h1 class="section-title">This page is for public job discovery and candidate job tracking.</h1>
          <p class="section-sub">Your employer workspace has job posts, candidate search, applicants, and hiring pipeline tools.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="employer-app.html">${icon("layout-dashboard")} Open Employer Dashboard</a><a class="btn btn-ghost" href="explore.html?guest=1">${icon("search")} Browse public jobs</a></div>
        </div>
      </section>
    `;
    createIcons();
    return;
  }
  if (state.session.loggedIn && isDiscoverPage && needsOnboarding(root)) return;
  if (isDiscoverPage) {
    const topPick = DATA.jobs.find(job => job.id === "job-ai-product") || DATA.jobs[0];
    const topPickSaved = state.savedJobs.includes(topPick.id);
    const marketPulse = MARKET_PULSE_CATEGORIES.slice(0, 4).map(c => [c.tag, c.trend, c.title, c.salary, c.remote, c.openings, c.tone, c.latestWeekly]);
    const marketWeeks = marketWeekLabels(12);
    const barRamp = MARKET_TONE_RAMP;
    const collections = [
      ["12 companies", "Fast-growing AI companies hiring PMs in Malaysia", "12 teams where the AI stack IS the product. Weighted by funding velocity, headcount growth in KL/Penang, and open PM roles.", "Because your last 4 saved roles were AI-native.", "large"],
      ["8 companies", "Startups with strong work-life balance", "Async-first Malaysian teams. Median 34h weeks, no on-call PM culture, hybrid-friendly.", "Matches your working-style profile.", ""],
      ["17 roles", "Roles you could apply to today", "No upskilling required - your current skills already cover 85%+ of the job spec.", "Skill overlap >= 85%.", "small"]
    ];
    const featuredCompanyWhy = {
      setel: "AI-native squad; matches your saved roles.",
      carsome: "3 alumni from your uni joined PM here.",
      storehub: "Async culture; matches your working style.",
      aerodyne: "AI-native org; roadmap-aligned."
    };
    const orgCatalog = buildOrgCatalog().catalog;
    const featuredCompanies = Object.keys(featuredCompanyWhy)
      .map(id => orgCatalog.find(company => company.id === id))
      .filter(Boolean)
      .map(org => ({
        org,
        verified: (org.tags || []).includes("Verified"),
        tag: (org.tags || []).find(t => t !== "Verified") || "",
        why: featuredCompanyWhy[org.id]
      }));
    const universityWhy = {
      um: "Your alma mater - 312 PM alumni active.",
      taylors: "Industry-linked projects match your portfolio goal.",
      monash: "International curriculum fits your 3-yr plan.",
      apu: "AI programme partners - closes your top skill gap."
    };
    const universities = DATA.universities.map(uni => ({
      uni,
      verified: (uni.tags || []).includes("Verified"),
      tag: (uni.tags || []).find(t => t !== "Verified") || "",
      why: universityWhy[uni.id] || uni.signal
    }));
    const roleDirections = [
      ["AI Product Manager", "One step above your current level", "91% match", "RM 145k / yr", "+34%", "Your SQL + design background is exactly what AI product teams in KL are hiring for."],
      ["Design Engineer", "Leans into your design background", "78% match", "RM 118k / yr", "+22%", "Rare hybrid role - few Malaysian designers code, few engineers design."],
      ["Founding PM (Seed startup)", "Fits your risk profile", "72% match", "RM 130k + equity / yr", "+12%", "You've saved 3 seed-stage KL startups this month."]
    ];
    const programs = [
      ["Reforge - AI Product Management", "6-week online sprint", "Est. +18% market value", "Cost: RM 9,400 (~USD 2,000)", "6 weeks - part-time", "Closes your top skill gap: LLM product design."],
      ["Asia School of Business - Exec Ed", "Product leadership - MIT-linked", "Est. +12% market value", "Cost: RM 12,000", "5 weekends", "Matches your 3-year plan toward Head of Product."],
      ["Stanford Online - AI Product Certificate", "Self-paced certificate", "Asked for by 4 employers you follow", "Cost: RM 8,200 (~USD 1,750)", "8 weeks - self-paced", "Setel, Carsome, and 2 others list this as a plus."]
    ];
    const mentors = [
      ["Aisyah R.", "4y journey", "Designer -> PM at Setel", "Started with a design background just like you.", "82% path overlap"],
      ["Rohan S.", "3y journey", "Design Eng -> AI PM at StoreHub", "Made the AI PM jump using a similar skill stack.", "76% path overlap"],
      ["Meera K.", "6y journey", "Product designer -> Head of Product", "Long-term direction if you follow the 3-yr roadmap.", "68% path overlap"],
      ["Daniel L.", "5y journey", "PM -> Founding PM at KL seed startup", "Took the founding PM leap you're considering.", "71% path overlap"]
    ];
    root.innerHTML = `
      <section class="cg-discover cg-discover-v2">
        <header class="cg-discover-hero">
          <h1>Discover</h1>
          <p>Roles, companies, universities, and mentors tuned to Kuala Lumpur's Product Management market and your career goals.</p>
          <div class="cg-search-shell cg-discover-search-shell" data-search-shell>
            <form class="cg-discover-search" data-discover-search-form>
              ${icon("search")}
              <input name="q" data-discover-search-input aria-label="Search Discover" placeholder="Search companies, jobs, universities, industries, salaries...">
              <button type="button" class="cg-search-chip" data-discover-opportunities-toggle aria-pressed="false">Opportunities only</button>
              <button type="button" data-discover-filters>${icon("sliders-horizontal")} Filters</button>
            </form>
            <div class="cg-search-panel" data-search-panel hidden></div>
          </div>
          <p class="cg-discover-network-note">Looking for people, mentors or recruiters? <a href="posts.html#messages">Head to Network</a>.</p>
        </header>

        <section class="cg-discover-question-grid" aria-label="Start with a question">
          <div class="cg-section-kicker">Start with a question</div>
          <a class="cg-question-card" href="#vera-top-pick">
            <span>${icon("compass")}</span>
            <strong>What roles fit me?</strong>
            <small>14 matched</small>
            <i>${icon("arrow-up-right")}</i>
          </a>
          <button type="button" class="cg-question-card" data-org-browse-open="companies">
            <span>${icon("building-2")}</span>
            <strong>Which companies match my style?</strong>
            <small>22 curated</small>
            <i>${icon("arrow-up-right")}</i>
          </button>
          <a class="cg-question-card" href="grow.html#career-paths">
            <span>${icon("rocket")}</span>
            <strong>Where could my career go next?</strong>
            <small>6 directions</small>
            <i>${icon("arrow-up-right")}</i>
          </a>
          <a class="cg-question-card" href="#market-pulse">
            <span>${icon("trending-up")}</span>
            <strong>Which industries are growing in Malaysia?</strong>
            <small>4 hot right now</small>
            <i>${icon("arrow-up-right")}</i>
          </a>
          <button type="button" class="cg-question-card" data-discover-browse="programs">
            <span>${icon("graduation-cap")}</span>
            <strong>What could accelerate my goals?</strong>
            <small>9 programs</small>
            <i>${icon("arrow-up-right")}</i>
          </button>
          <button type="button" class="cg-question-card" data-discover-browse="mentors">
            <span>${icon("users-round")}</span>
            <strong>Who inspires this path?</strong>
            <small>12 mentors</small>
            <i>${icon("arrow-up-right")}</i>
          </button>
        </section>

        <section class="cg-discover-feature" id="vera-top-pick">
          <h2>Vera's Top Pick</h2>
          <p class="cg-h2-sub">The one role Vera rates highest against your skills, roadmap, and salary target this week.</p>
          <article class="cg-top-pick-card">
            <div class="cg-top-pick-main">
              <div class="cg-pill-row"><span class="dark">${icon("sparkles")} Vera found this</span><span>${icon("flame")} ${topPick.match}% roadmap match</span><small>Posted ${topPick.posted} - 34 applicants</small></div>
              <h3>${topPick.title}</h3>
              <p class="cg-role-line">${icon("building-2")} ${topPick.company} - ${icon("map-pin")} ${topPick.location} - ${topPick.type}</p>
              <p class="cg-salary"><span>Estimated monthly salary (Malaysia)</span> ${topPick.salary}</p>
              <div class="cg-why-card">
                <span>${icon("sparkles")} Why Vera recommends this</span>
                <p>${icon("check-circle-2")} You completed SQL for PM this month.</p>
                <p>${icon("check-circle-2")} Your roadmap targets AI Product Management.</p>
                <p>${icon("check-circle-2")} You saved 3 AI-native startups recently.</p>
              </div>
              <div class="cg-action-row">
                <button type="button" class="btn btn-primary" data-toppick-explore>Explore role ${icon("arrow-up-right")}</button>
                <button class="btn btn-ghost" type="button" data-toppick-save>${icon(topPickSaved ? "bookmark-check" : "bookmark")} ${topPickSaved ? "Saved" : "Save"}</button>
                <a class="btn btn-ghost" href="posts.html?topic=Tell me more about this role#messages">Ask Vera more</a>
              </div>
            </div>
            <aside class="cg-top-pick-side">
              <div><span>Career match</span><strong>${topPick.match}%</strong><small>based on your roadmap</small></div>
              <div><span>${icon("target")} Skills you already have</span><p>${topPick.skills.map(skill => `<b>${skill}</b>`).join("")}</p><span>${icon("lightbulb")} Skills to strengthen</span><p><em>LLM product design</em><em>Prompt evaluation</em></p></div>
              <div class="mini"><span>Interview difficulty</span><strong>Medium</strong><small>3 rounds - case study</small></div>
              <div class="mini"><span>Success odds after roadmap</span><strong>76%</strong><small>if you finish Grow plan</small></div>
              <div class="mini"><span>Applicant strength</span><strong>Top 22%</strong><small>vs. this role</small></div>
              <div class="mini"><span>Company hiring trend</span><strong>+18%</strong><small>PM headcount, 6 mo</small></div>
            </aside>
          </article>
        </section>

        <section class="cg-discover-section" id="open-roles">
          <div class="cg-discover-section-head">
            <div><h2>Roles worth your week</h2><p class="cg-h2-sub">Open roles Vera ranked highest for you right now - open any card for full details.</p></div>
            <a class="cg-discover-link-btn" href="recommended-roles.html">Browse all roles ${icon("arrow-right")}</a>
          </div>
          <div class="cg-role-rail" data-role-rail>
            ${allNormalizedRoles().sort((a, b) => b.match - a.match).slice(0, 6).map(role => roleCardMarkup(role, { chips: false })).join("")}
          </div>
        </section>

        <section class="cg-discover-section" id="market-pulse">
          <div class="cg-discover-section-head">
            <div><h2>Market Pulse in Malaysia</h2><p class="cg-h2-sub">What's hiring, paying, and growing around you right now - refreshed from live postings.</p></div>
            <a class="cg-discover-link-btn" href="market-pulse.html">Explore more ${icon("arrow-right")}</a>
          </div>
          <div class="cg-market-grid">
            ${marketPulse.map(([tag, trend, title, salary, remote, openings, tone, latestWeekly], index) => {
              const trendPct = Number((trend.match(/-?\d+(\.\d+)?/) || [0])[0]);
              const startWeekly = Math.max(1, Math.round(latestWeekly / (1 + trendPct / 100)));
              const series = marketWeeklySeries(startWeekly, latestWeekly, index);
              const seriesMin = Math.min(...series);
              const seriesRange = Math.max(1, Math.max(...series) - seriesMin);
              const heightFor = value => 10 + Math.round(((value - seriesMin) / seriesRange) * 38);
              const chartSummary = `Hiring trend ${trendPct >= 0 ? "up" : "down"} ${Math.abs(trendPct)}% over the last 12 weeks, from ${series[0]} to ${series[series.length - 1]} postings a week.`;
              return `
              <article class="cg-market-card tone-${tone}">
                <div><span>${icon("zap")} ${tag}</span><small>${icon("trending-up")} ${trend}</small></div>
                <h3>${title}</h3><a href="posts.html?topic=${encodeURIComponent(title)}#messages" aria-label="Explore ${title}">${icon("arrow-up-right")}</a>
                <div class="cg-bars">
                  <span class="sr-only">${chartSummary}</span>
                  ${series.map((value, i) => {
                    const isCurrent = i === series.length - 1;
                    const barLabel = `Week of ${marketWeeks[i]}${isCurrent ? " (this week)" : ""}: ${value} postings`;
                    return `<i tabindex="0" role="img" class="${isCurrent ? "is-current" : ""}" style="height:${heightFor(value)}px;background:${isCurrent ? barRamp[tone][7] : barRamp[tone][2]}" data-tooltip="${barLabel}" aria-label="${barLabel}"></i>`;
                  }).join("")}
                </div>
                <p class="cg-bars-caption">Last 12 weeks - <strong>${latestWeekly} postings this week</strong></p>
                <dl><dt>Avg. salary (MY)</dt><dd>${salary}</dd><dt>Remote share</dt><dd>${remote}</dd><dt>Openings</dt><dd>${openings}</dd></dl>
              </article>
            `;
            }).join("")}
          </div>
        </section>

        <section class="cg-discover-section" id="curated-collections">
          <h2>Curated Collections by Vera.</h2>
          <p class="cg-h2-sub">Hand-built groups of companies and roles that fit your next step, not generic tags.</p>
          <div class="cg-collection-grid">
            ${collections.map(([count, title, copy, why, size]) => `
              <article class="cg-collection-card ${size}" data-collection-kind="${/companies/i.test(count) ? "companies" : "roles"}" tabindex="0" aria-label="Open ${title}"><span>${count}</span><i>${icon("arrow-up-right")}</i><h3>${title}</h3><p>${copy}</p><footer><b>${icon("sparkles")} Why this</b> ${why}</footer></article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section" id="featured-companies" data-tour-target="discover-orgs">
          <div class="cg-discover-section-head">
            <div><h2>Featured Companies</h2><p class="cg-h2-sub">Employers Vera is watching for you - tap a card for ratings and reviews.</p></div>
            <a class="cg-discover-link-btn" href="discover-companies.html">More Companies ${icon("arrow-right")}</a>
          </div>
          <div class="cg-featured-org-grid">
            ${featuredCompanies.map(({ org, verified, tag, why }) => `
              <article class="cg-featured-org-card" data-org-detail="${org.id}" tabindex="0" aria-label="Open ${org.name} reviews and details">
                <header><span>${org.name.charAt(0)}</span><div><h3>${org.name}${verified ? ` ${icon("badge-check")}` : ""}</h3><p>${org.industry} - ${org.location}</p></div></header>
                <div class="cg-featured-org-tags">${tag ? `<b>${tag}</b>` : ""}<strong>${org.open} open role${org.open === 1 ? "" : "s"}</strong></div>
                <footer>${icon("sparkles")} ${why}</footer>
                <button type="button" class="btn btn-primary btn-wide" data-org-cta="${org.id}">View company ${icon("arrow-right")}</button>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section" id="featured-universities">
          <div class="cg-discover-section-head">
            <div><h2>Featured Universities</h2><p class="cg-h2-sub">Institutions that fit your path - open Entry requirements on each card to check your eligibility.</p></div>
            <a class="cg-discover-link-btn" href="discover-universities.html">More Universities ${icon("arrow-right")}</a>
          </div>
          <div class="cg-featured-org-grid">
            ${universities.map(({ uni, verified, tag, why }) => `
              <article class="cg-featured-org-card university" data-org-detail="${uni.id}" tabindex="0" aria-label="Open ${uni.name} reviews and details">
                <header><span>${icon("graduation-cap")}</span><div><h3>${uni.name}${verified ? ` ${icon("badge-check")}` : ""}</h3><p>${icon("map-pin")} ${uni.location}</p></div></header>
                <div class="cg-featured-org-tags">${tag ? `<b>${tag}</b>` : ""}<strong>${uni.salary}</strong></div>
                <footer>${icon("sparkles")} ${why}</footer>
                ${universityRequirementsPanel(uni, state.profile)}
                <button type="button" class="btn btn-primary btn-wide" data-org-cta="${uni.id}">View university ${icon("arrow-right")}</button>
              </article>
            `).join("")}
          </div>
        </section>


        <section class="cg-discover-section" id="recommended-programmes">
          <div class="cg-discover-section-head">
            <div><h2>Recommended Programmes</h2><p class="cg-h2-sub">Courses and certificates ranked by the career return Vera expects for you.</p></div>
            <button type="button" class="cg-discover-link-btn" data-discover-browse="programs">Explore all programmes ${icon("arrow-right")}</button>
          </div>
          <div class="cg-program-card-grid">
            ${programs.map(([name, sub, tag, cost, duration, why]) => `
              <article class="cg-program-card">
                <header><div><h3>${name}</h3><p>${sub}</p></div><b>${tag}</b></header>
                <dl><dd>${cost}</dd><dd>${duration}</dd></dl>
                <footer>${icon("sparkles")} ${why}</footer>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section" id="discover-mentors" data-tour-target="discover-mentors">
          <div class="cg-discover-section-head">
            <div><h2>Mentors You can reach out to</h2><p class="cg-h2-sub">People a few steps ahead of you on a similar route, ranked by path overlap.</p></div>
            <button type="button" class="cg-discover-link-btn" data-discover-browse="mentors">Browse all mentors ${icon("arrow-right")}</button>
          </div>
          <div class="cg-mentor-grid">
            ${mentors.map(([name, years, path, why, overlap]) => `
              <article class="cg-mentor-card"><header><span>${name.charAt(0)}</span><div><h3>${name}</h3><p>${years}</p></div></header><strong>${path}</strong><p>${icon("sparkles")} ${why}</p><footer><small>${icon("lightbulb")} ${overlap}</small><a href="posts.html?topic=${encodeURIComponent(`Show me a path like ${name}`)}#messages">See path -></a></footer></article>
            `).join("")}
          </div>
        </section>
      </section>
      ${veraWidgetMarkup()}
    `;
    createIcons();
    wireVeraWidget(root);
    bindMarketTooltips(root);
    qsa("[data-org-browse-open]", root).forEach(button => button.addEventListener("click", () => openOrgBrowserModal(button.dataset.orgBrowseOpen)));
    qsa("[data-org-detail]", root).forEach(card => {
      card.addEventListener("click", () => openOrgDetailModal(card.dataset.orgDetail));
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openOrgDetailModal(card.dataset.orgDetail);
        }
      });
    });
    qsa("[data-org-cta]", root).forEach(button => {
      const triggerOrgDetail = event => {
        event.stopPropagation();
        if (event.type === "keydown") {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
        }
        openOrgDetailModal(button.dataset.orgCta);
      };
      button.addEventListener("click", triggerOrgDetail);
      button.addEventListener("keydown", triggerOrgDetail);
    });
    qs("[data-toppick-explore]", root)?.addEventListener("click", () => goToRole(topPick.id));
    bindRoleCardActions(root);
    qs("[data-toppick-save]", root)?.addEventListener("click", event => {
      const next = readState();
      const nowSaved = !next.savedJobs.includes(topPick.id);
      next.savedJobs = nowSaved ? [...next.savedJobs, topPick.id] : next.savedJobs.filter(id => id !== topPick.id);
      if (!next.applicationRecords) next.applicationRecords = {};
      if (nowSaved) next.applicationRecords[topPick.id] = next.applicationRecords[topPick.id] || createApplicationRecord(topPick.id, "saved");
      else if (!next.applications.includes(topPick.id)) delete next.applicationRecords[topPick.id];
      writeState(next);
      event.currentTarget.innerHTML = `${icon(nowSaved ? "bookmark-check" : "bookmark")} ${nowSaved ? "Saved" : "Save"}`;
      createIcons();
      showToast(nowSaved ? "Role saved to your dashboard." : "Role removed from saved jobs.");
    });
    qsa("[data-discover-browse]", root).forEach(button => button.addEventListener("click", () => {
      const kind = button.dataset.discoverBrowse;
      if (kind === "paths") openDiscoverListModal("All career paths", roleDirections.map(discoverPathCard).join(""));
      if (kind === "programs") openDiscoverListModal("All recommended programmes", programs.map(discoverProgramCard).join(""));
      if (kind === "mentors") openDiscoverListModal("All mentors", mentors.map(discoverMentorCard).join(""));
    }));
    qsa("[data-collection-kind]", root).forEach(card => {
      const openCollection = () => {
        const collectionTitle = qs("h3", card)?.textContent || "Collection";
        if (card.dataset.collectionKind === "companies") {
          openOrgBrowserModal("companies");
          return;
        }
        openDiscoverListModal(collectionTitle, DATA.jobs.map(discoverRoleCard).join(""), backdrop => {
          qsa("[data-org-browse-role]", backdrop).forEach(item => {
            item.addEventListener("click", () => openApplicationDetailsModal(item.dataset.orgBrowseRole));
            item.addEventListener("keydown", event => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openApplicationDetailsModal(item.dataset.orgBrowseRole);
              }
            });
          });
        });
      };
      card.addEventListener("click", openCollection);
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openCollection();
        }
      });
    });
    qsa("[data-uni-requirements]", root).forEach(button => button.addEventListener("click", event => {
      event.stopPropagation();
      openUniversityRequirementsModal(button.dataset.uniRequirements);
    }));
    qs("[data-discover-opportunities-toggle]", root)?.addEventListener("click", event => {
      const btn = event.currentTarget;
      const pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
      btn.classList.toggle("active", !pressed);
    });
    qs("[data-discover-filters]", root)?.addEventListener("click", () => {
      openDiscoverFiltersModal(summary => {
        const query = (qs("[data-discover-search-input]", root)?.value || "").trim();
        const topic = [query, summary].filter(Boolean).join(" - ") || "matching roles";
        openVeraPanel({ seedTopic: topic });
      });
    });
    attachLiveSearch(qs("[data-discover-search-form]", root), query => renderSearchPanelContent(query, "workspace", state), () => renderSearchDefaultContent(state));
    qs("[data-discover-search-form]", root)?.addEventListener("submit", event => {
      event.preventDefault();
      const query = (qs("[data-discover-search-input]", root)?.value || "").trim();
      location.href = query ? `recommended-roles.html?q=${encodeURIComponent(query)}` : "recommended-roles.html";
    });
    initPageTour("discover");
    scrollToHashSection(root);
    return;
  }
  if (state.session.loggedIn && document.body.dataset.page === "workspace-jobs") {
    const topPick = DATA.jobs.find(job => job.id === "job-ai-product") || DATA.jobs[0];
    const roleDirections = [
      ["AI Product Manager", "One step above your current level", "91% match", "RM 145k / yr", "+34%", "High", "Medium", "Common", "91%", "Your SQL + design background is exactly what AI product teams in KL are hiring for."],
      ["Design Engineer", "Leans into your design background", "78% match", "RM 118k / yr", "+22%", "High", "Low", "Common", "78%", "Rare hybrid role - few Malaysian designers code, few engineers design."],
      ["Founding PM (Seed startup)", "Fits your risk profile", "72% match", "RM 130k + equity / yr", "+12%", "Very high", "High", "Sometimes", "72%", "You've saved 3 seed-stage KL startups this month."],
      ["Head of Product (Seed)", "3-year direction from your current roadmap", "64% match", "RM 200k / yr", "+18%", "High", "High", "Sometimes", "64%", "Reachable within 3 years if you complete the Grow plan and lead 1 launch."]
    ];
    const marketPulse = [
      ["In your market", "Hiring +34%", "AI Product roles", "RM 145k / year", "67% remote-friendly", "312 new openings", "teal"],
      ["Missing from your profile", "Hiring +62%", "Prompt engineering", "RM 9,500 / month", "82% remote-friendly", "48 new openings", "blue"],
      ["Matches your background", "Hiring +21%", "Design-first PMs", "RM 132k / year", "54% remote-friendly", "96 new openings", "gold"],
      ["Your region", "Hiring +12%", "KL fintech product hubs", "RM 128k / year", "38% remote-friendly", "204 new openings", "rose"]
    ];
    const companies = [
      ["Setel", "Fintech  - PETRONAS Digital", "4 open roles", "RM 9k-14k / mo expected", "Hybrid (KL)", "Interview: Medium", "+22% headcount", "Matches your fintech interest and hires PMs from design."],
      ["Carsome", "Marketplace  - Series E", "3 open roles", "RM 10k-15k / mo expected", "Hybrid (KL)", "Interview: Medium-high", "+14% headcount", "3 people from your university joined PM here in the last year."],
      ["StoreHub", "SaaS for SMB  - Craft-led", "2 open roles", "RM 8k-12k / mo expected", "Remote-friendly", "Interview: Medium", "+18% headcount", "Async-first culture, close to your working-style profile."],
      ["Aerodyne", "Drone + AI  - Global HQ in KL", "5 open roles", "RM 11k-16k / mo expected", "Hybrid", "Interview: High", "+27% headcount", "AI-native org - matches your saved roles pattern."]
    ];
    const programs = [
      ["Reforge - AI Product Management", "6-week online sprint", "Est. +18% market value", "Cost: USD 2,000 (~RM 9,400)", "Duration: 6 weeks  - part-time", "Closes your top skill gap: LLM product design."],
      ["Asia School of Business - Exec Ed", "Product leadership  - MIT-linked", "Est. +12% market value", "Cost: RM 12,000", "Duration: 5 weekends", "Matches your 3-year plan toward Head of Product."],
      ["Stanford Online - AI Product Certificate", "Self-paced certificate", "Asked for by 4 employers you follow", "Cost: USD 1,750 (~RM 8,200)", "Duration: 8 weeks  - self-paced", "Setel, Carsome, and 2 others list this as a plus."],
      ["MBA - Universiti Malaya (Weekend)", "Part-time MBA", "Closes the credential gap for senior roles", "Cost: RM 38,000", "Duration: 2 years", "Only if you target Director-level within 5 years."]
    ];
    const mentors = [
      ["Aisyah R.", "4y journey", "Designer -> PM at Setel", "Started with a design background just like you.", "82% path overlap"],
      ["Rohan S.", "3y journey", "Design Eng -> AI PM at StoreHub", "Made the AI PM jump using a similar skill stack.", "76% path overlap"],
      ["Meera K.", "6y journey", "Product designer -> Head of Product", "Long-term direction if you follow the 3-yr roadmap.", "68% path overlap"]
    ];
    root.innerHTML = `
      <section class="cg-discover">
        <header class="cg-discover-hero">
          <div class="cg-discover-kicker"><span>${icon("sparkles")} Discover</span><small>${icon("map-pin")} Malaysia  - Kuala Lumpur  - Tuned for your Product Management journey</small></div>
          <h1>What should you explore next, <em>and why should you care?</em></h1>
          <p>Vera reads your roadmap, your skills, and the Malaysian market - then explains why each opportunity matters for the next step in your career.</p>
          <form class="cg-discover-search" action="posts.html#messages">
            ${icon("search")}
            <input name="topic" aria-label="Ask Vera about Discover" placeholder="Try 'PM roles in KL paying above RM10k' or 'remote design-led startups hiring in Malaysia'">
            <button type="button">${icon("sliders-horizontal")} Filters</button>
            <button type="submit"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</button>
          </form>
        </header>

        <section class="cg-discover-question-grid" aria-label="Start with a question">
          <div class="cg-section-kicker">Start with a question</div>
          ${[
            ["What roles fit me?", "14 matched", "compass"],
            ["Which companies match my style?", "22 curated", "building-2"],
            ["Where could my career go next?", "6 directions", "rocket"],
            ["Which industries are growing in Malaysia?", "4 hot right now", "trending-up"],
            ["What could accelerate my goals?", "9 programs", "graduation-cap"],
            ["Who inspires this path?", "12 mentors", "users-round"]
          ].map(([title, sub, ic]) => `
            <a class="cg-question-card" href="#${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
              <span>${icon(ic)}</span>
              <strong>${title}</strong>
              <small>${sub}</small>
              <i>${icon("arrow-up-right")}</i>
            </a>
          `).join("")}
        </section>

        <section class="cg-discover-feature">
          <div class="cg-section-kicker">Vera's top pick this week</div>
          <h2>The single move most likely to move your career forward.</h2>
          <article class="cg-top-pick-card">
            <div class="cg-top-pick-main">
              <div class="cg-pill-row"><span class="dark">${icon("sparkles")} Vera found this</span><span>${icon("flame")} 91% roadmap match</span><small>Posted 2 days ago  - 34 applicants</small></div>
              <h3>Senior Product Manager, AI Platform</h3>
              <p class="cg-role-line">${icon("building-2")} Setel (PETRONAS Digital)  - ${icon("map-pin")} Kuala Lumpur  - Hybrid</p>
              <p class="cg-salary"><span>Estimated monthly salary (Malaysia)</span> RM 11.7k - 14k <small>/ month</small></p>
              <div class="cg-why-card">
                <span>${icon("sparkles")} Why Vera recommends this</span>
                <p>${icon("check-circle-2")} You completed SQL for PM this month.</p>
                <p>${icon("check-circle-2")} Your roadmap targets AI Product Management.</p>
                <p>${icon("check-circle-2")} You saved 3 AI-native startups recently.</p>
              </div>
              <div class="cg-action-row">
                <a class="btn btn-primary" href="discover.html?job=${topPick.id}">Explore role ${icon("arrow-up-right")}</a>
                <button class="btn btn-ghost" type="button">${icon("bookmark")} Save</button>
                <a class="btn btn-ghost" href="posts.html?topic=Tell me more about this role#messages">Ask Vera more</a>
              </div>
            </div>
            <aside class="cg-top-pick-side">
              <div><span>Career match</span><strong>91%</strong><small>based on your roadmap</small></div>
              <div><span>${icon("target")} Skills you already have</span><p><b>Product discovery</b><b>User research</b><b>SQL for PM</b><b>Design systems</b></p><span>${icon("lightbulb")} Skills to strengthen</span><p><em>LLM product design</em><em>Prompt evaluation</em></p></div>
              <div class="mini"><span>Interview difficulty</span><strong>Medium</strong><small>3 rounds  - case study</small></div>
              <div class="mini"><span>Success odds after roadmap</span><strong>76%</strong><small>if you finish Grow plan</small></div>
              <div class="mini"><span>Applicant strength</span><strong>Top 22%</strong><small>vs. this role</small></div>
              <div class="mini"><span>Company hiring trend</span><strong>+18%</strong><small>PM headcount, 6 mo</small></div>
            </aside>
          </article>
        </section>

        <section class="cg-discover-section">
          <div class="cg-section-kicker">Market pulse  - Malaysia</div>
          <h2>Quick intelligence on what's heating up around you.</h2>
          <div class="cg-market-grid">
            ${marketPulse.map(([tag, trend, title, salary, remote, openings, tone], index) => `
              <article class="cg-market-card tone-${tone}">
                <div><span>${icon("zap")} ${tag}</span><small>${icon("trending-up")} ${trend}</small></div>
                <h3>${title}</h3>
                <div class="cg-bars">${Array.from({ length: 12 }, (_, i) => `<i style="height:${14 + ((i + index) % 8) * 5}px"></i>`).join("")}</div>
                <dl><dt>Avg. salary (MY)</dt><dd>${salary}</dd><dt>Remote share</dt><dd>${remote}</dd><dt>Openings</dt><dd>${openings}</dd></dl>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section">
          <div class="cg-section-kicker">Curated by Vera</div>
          <h2>Collections built around your next step, not tags.</h2>
          <div class="cg-collection-grid">
            <article class="cg-collection-card large"><span>12 companies</span><i>${icon("arrow-up-right")}</i><h3>Fast-growing AI companies hiring PMs in Malaysia</h3><p>12 teams where the AI stack IS the product. Weighted by funding velocity, headcount growth in KL/Penang, and open PM roles.</p><footer><b>${icon("sparkles")} Why this</b> Because your last 4 saved roles were AI-native.</footer></article>
            <article class="cg-collection-card"><span>8 companies</span><i>${icon("arrow-up-right")}</i><h3>Startups with strong work-life balance</h3><p>Async-first Malaysian teams. Median 34h weeks, no on-call PM culture, hybrid-friendly.</p><footer><b>${icon("sparkles")} Why this</b> Matches your working-style profile.</footer></article>
            <article class="cg-collection-card"><span>17 roles</span><i>${icon("arrow-up-right")}</i><h3>Roles you could apply to today</h3><p>No upskilling required - your current skills already cover 85%+ of the job spec.</p><footer><b>${icon("sparkles")} Why this</b> Skill overlap >= 85%.</footer></article>
          </div>
        </section>

        <section class="cg-discover-section">
          <div class="cg-section-kicker">Where your career could go next</div>
          <h2>Career directions, not job titles.</h2>
          <div class="cg-direction-grid">
            ${roleDirections.map(([title, sub, match, salary, demand, growth, competition, remote, careerMatch, why]) => `
              <article class="cg-direction-card">
                <span>${match}</span>
                <h3>${title}</h3>
                <p>${sub}</p>
                <dl>
                  <dt>Estimated salary</dt><dd>${salary}<small>Malaysia  - median</small></dd>
                  <dt>Market demand</dt><dd>${demand}<small>last 30 days</small></dd>
                  <dt>Growth potential</dt><dd>${growth}</dd>
                  <dt>Competition</dt><dd>${competition}</dd>
                  <dt>Remote options</dt><dd>${remote}</dd>
                  <dt>Career match</dt><dd>${careerMatch}</dd>
                </dl>
                <footer>${icon("sparkles")} Why you're seeing this - ${why}</footer>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-two-col">
          <article class="cg-list-panel">
            <header><div><h2>${icon("building-2")} Companies matching your working style</h2><p>Malaysia  - async-friendly  - craft-led  - design-forward</p></div><a href="#companies">See all</a></header>
            ${companies.map(([name, sub, open, salary, mode, interview, growth, why]) => `
              <div class="cg-list-row"><span>${name.charAt(0)}</span><div><h3>${name}</h3><p>${sub}</p><dl><dd>${salary}</dd><dd>${mode}</dd><dd>${interview}</dd><dd>${growth}</dd></dl><small>${icon("sparkles")} ${why}</small></div><b>${icon("briefcase-business")} ${open}</b></div>
            `).join("")}
          </article>
          <article class="cg-list-panel">
            <header><div><h2>${icon("graduation-cap")} Programs that could accelerate your goals</h2><p>Weighted by Malaysian employer demand + your roadmap</p></div><a href="#programs">See all</a></header>
            ${programs.map(([name, sub, tag, cost, duration, why]) => `
              <div class="cg-program-row"><div><h3>${name}</h3><p>${sub}</p><dl><dd>${cost}</dd><dd>${duration}</dd></dl><small>${icon("sparkles")} ${why}</small></div><b>${tag}</b></div>
            `).join("")}
          </article>
        </section>

        <section class="cg-discover-section">
          <div class="cg-section-kicker">Who inspires this path</div>
          <h2>People whose career journeys rhyme with yours.</h2>
          <div class="cg-mentor-grid">
            ${mentors.map(([name, years, path, why, overlap]) => `
              <article class="cg-mentor-card"><header><span>${name.charAt(0)}</span><div><h3>${name}</h3><p>${years}</p></div></header><strong>${path}</strong><p>${icon("sparkles")} ${why}</p><footer><small>${icon("lightbulb")} ${overlap}</small><a href="posts.html?topic=${encodeURIComponent(`Show me a path like ${name}`)}#messages">See path -></a></footer></article>
            `).join("")}
          </div>
        </section>
      </section>
    `;
    createIcons();
    return;
  }
  if (state.session.loggedIn) {
    root.innerHTML = `
      <section class="container os-layout workspace-page-container">
        ${appShell("jobs", `
          <section class="glass-card dashboard-hero jobs-hero-card">
            <div>
              <div class="eyebrow"><span class="spark">*</span> Job workspace</div>
              <h1 class="section-title">Matches, saved roles, and applications in one calm place.</h1>
              <p class="section-sub">Review only the strongest roles, move applications through stages, and ask Vera what to do next.</p>
            </div>
          </section>
          <section class="jobs-workspace">
            <aside class="filters card compact-filter jobs-filter-bar">
              <h2 class="filter-title">Search jobs</h2>
              <div class="filter-stack">
                <div class="field"><i data-lucide="search"></i><input data-job-query placeholder="Role, company, skill"></div>
                <div class="field custom-select-field" data-custom-select="job-industry">
                  <i data-lucide="layers"></i>
                  <select class="native-select-proxy" data-job-industry aria-hidden="true" tabindex="-1"></select>
                  <button class="custom-select-trigger" type="button" data-custom-select-trigger aria-haspopup="listbox" aria-expanded="false">
                    <span data-custom-select-value>All</span>
                    <i class="custom-select-chevron" data-lucide="chevron-down"></i>
                  </button>
                  <div class="custom-select-panel" role="listbox" data-custom-select-panel></div>
                </div>
                <div class="field custom-select-field" data-custom-select="job-level">
                  <i data-lucide="user-round"></i>
                  <select class="native-select-proxy" data-job-level aria-hidden="true" tabindex="-1"></select>
                  <button class="custom-select-trigger" type="button" data-custom-select-trigger aria-haspopup="listbox" aria-expanded="false">
                    <span data-custom-select-value>All</span>
                    <i class="custom-select-chevron" data-lucide="chevron-down"></i>
                  </button>
                  <div class="custom-select-panel" role="listbox" data-custom-select-panel></div>
                </div>
                <div class="field custom-select-field" data-custom-select="job-type">
                  <i data-lucide="map-pin"></i>
                  <select class="native-select-proxy" data-job-type aria-hidden="true" tabindex="-1"></select>
                  <button class="custom-select-trigger" type="button" data-custom-select-trigger aria-haspopup="listbox" aria-expanded="false">
                    <span data-custom-select-value>All</span>
                    <i class="custom-select-chevron" data-lucide="chevron-down"></i>
                  </button>
                  <div class="custom-select-panel" role="listbox" data-custom-select-panel></div>
                </div>
                <label class="range-field"><span>Minimum match <strong data-threshold-label>70%</strong></span><input data-job-threshold type="range" min="60" max="95" value="70"></label>
                <label class="check-field custom-checkbox"><input data-job-compare-mode type="checkbox"> Compare roles</label>
                <a class="btn btn-cyan btn-wide" href="posts.html?topic=job search#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</a>
              </div>
            </aside>
            <div class="jobs-main">
              <div class="tab-row os-tabs">
                <button class="pill cyan active" data-job-tab="matches">Matches</button>
                <button class="pill" data-job-tab="saved">Saved</button>
                <button class="pill" data-job-tab="applied">Applied</button>
                <button class="pill" data-job-tab="vera">Vera Picks</button>
                <button class="pill" data-job-tab="tracker">Tracker</button>
              </div>
              <div class="jobs-split">
                <section class="list-stack" data-job-list></section>
                <section class="detail-panel glass-card" data-job-detail></section>
              </div>
            </div>
          </section>
        `, { title: "Jobs", subtitle: "Move from discovery to applied, interview, offer, or archive without losing context." })}
      </section>
    `;
    createIcons();
    initSidebarToggle();
    return;
  }
  if (!state.session.loggedIn) {
    const layout = qs(".jobs-page-layout", root);
    if (layout && !qs(".public-discovery-intro", root)) {
      layout.insertAdjacentHTML("afterbegin", `
        <section class="public-discovery-intro">
          <div class="glass-card public-discovery-card">
            <div>
              <div class="section-kicker">Public job discovery</div>
              <h2 class="section-title mini">Browse opportunities first. Personalize after you are ready.</h2>
              <p class="section-sub">Guests can search roles, inspect company previews, and understand market demand. Create an account to save, apply, track, ask Vera, and unlock personalized match reasoning.</p>
            </div>
            <div class="hero-actions compact-actions">
              <a class="btn btn-primary" href="job-seeker.html">${icon("user-plus")} Create Job Seeker Account</a>
              <a class="btn btn-ghost" href="login.html">${icon("log-in")} Login</a>
            </div>
          </div>
        </section>
      `);
    }
  }
  let activeId = new URLSearchParams(location.search).get("job") || DATA.jobs[0].id;
  let active = DATA.jobs.find(job => job.id === activeId) || DATA.jobs[0];
  let activeTab = location.hash === "#tracker" ? "tracker" : (new URLSearchParams(location.search).get("tab") || "matches");
  let contactOpen = false;

  const listRoot = qs("[data-job-list]");
  const detailRoot = qs("[data-job-detail]");
  const queryInput = qs("[data-job-query]");
  const industrySelect = qs("[data-job-industry]");
  const levelSelect = qs("[data-job-level]");
  const typeSelect = qs("[data-job-type]");
  const thresholdInput = qs("[data-job-threshold]");
  const thresholdLabel = qs("[data-threshold-label]");
  const compareMode = qs("[data-job-compare-mode]");

  function syncJobDetailView({ resetScroll = false, reveal = false } = {}) {
    if (!detailRoot) return;
    if (resetScroll) {
      detailRoot.scrollTop = 0;
      detailRoot.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
    }
    if (!reveal) return;
    window.requestAnimationFrame(() => {
      if (resetScroll) {
        detailRoot.scrollTop = 0;
        detailRoot.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
      }
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const topbar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cg-topbar")) || 72;
      const offset = topbar + 18;
      const rect = detailRoot.getBoundingClientRect();
      const targetTop = Math.max(0, window.scrollY + rect.top - offset);
      window.scrollTo({
        top: targetTop,
        behavior: reducedMotion ? "auto" : "smooth"
      });
    });
  }

  industrySelect.innerHTML = ["All", ...new Set(DATA.jobs.map(j => j.industry))].map(x => `<option>${x}</option>`).join("");
  initCustomSelect(industrySelect);
  levelSelect.innerHTML = ["All", ...new Set(DATA.jobs.map(j => j.level))].map(x => `<option>${x}</option>`).join("");
  initCustomSelect(levelSelect);
  if (typeSelect) typeSelect.innerHTML = ["All", ...new Set(DATA.jobs.map(j => j.type))].map(x => `<option>${x}</option>`).join("");
  initCustomSelect(typeSelect);
  queryInput.value = new URLSearchParams(location.search).get("q") || "";
  if (!state.session.loggedIn) qs('[data-job-tab="community"]')?.remove();

  function filteredJobs() {
    const q = queryInput.value.trim().toLowerCase();
    const industry = industrySelect.value;
    const level = levelSelect.value;
    const type = typeSelect?.value || "All";
    const threshold = Number(thresholdInput?.value || 70);
    return DATA.jobs.filter(job => {
      const hay = [job.title, job.company, job.location, job.industry, ...job.skills].join(" ").toLowerCase();
      return hay.includes(q)
        && (industry === "All" || job.industry === industry)
        && (level === "All" || job.level === level)
        && (type === "All" || job.type === type)
        && job.match >= threshold
        && !state.ignoredJobs.includes(job.id);
    });
  }

  function jobsForActiveTab() {
    const base = filteredJobs();
    if (activeTab === "saved") return DATA.jobs.filter(job => state.savedJobs.includes(job.id) && !state.ignoredJobs.includes(job.id));
    if (activeTab === "applied") return getTrackedJobs(state)
      .filter(({ record }) => stageIndex(record.stage) >= stageIndex("applied") && !["archived"].includes(record.stage))
      .map(({ job }) => job);
    if (activeTab === "vera") return base
      .filter(job => job.match >= 80)
      .sort((a, b) => b.match - a.match)
      .slice(0, 4);
    return base;
  }

  function renderTracker() {
    const tracked = getTrackedJobs(state);
    const counts = applicationSummaryCounts(state);
    listRoot.innerHTML = `
      <div class="tracker-panel">
        <div class="section-head compact-section-head">
          <div><div class="section-kicker">Application tracker</div><h2 class="section-title mini">Know exactly where every role stands.</h2></div>
          <a class="btn btn-cyan" href="posts.html?topic=application follow up#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</a>
        </div>
        <div class="pipeline-strip">
          ${APPLICATION_STAGES.slice(0, 6).map(stage => `<button class="pipeline-stage" type="button" data-filter-stage="${stage.key}"><span>${stage.label}</span><strong>${counts[stage.key] || 0}</strong></button>`).join("")}
        </div>
        <div class="list-stack spacious-list">
          ${tracked.length ? tracked.map(({ job, record }) => `
            <article class="list-card application-row ${job.id === active.id ? "active" : ""}" data-job-id="${job.id}">
              <div class="list-card-top">
                <div><h3>${job.title}</h3><div class="muted small">${job.company} - ${record.deadline}</div></div>
                ${applicationStagePill(record.stage)}
              </div>
              <p class="muted">${record.nextAction}</p>
              ${applicationProgress(record)}
            </article>
          `).join("") : `<div class="card">No tracked roles yet. Save or apply to a job to start your tracker.</div>`}
        </div>
      </div>
    `;
    qsa("[data-job-id]", listRoot).forEach(card => card.addEventListener("click", () => {
      const previousJobId = active.id;
      active = DATA.jobs.find(job => job.id === card.dataset.jobId) || active;
      history.replaceState(null, "", `discover.html?job=${active.id}#tracker`);
      renderList();
      renderDetail({ resetScroll: active.id !== previousJobId, reveal: true });
    }));
    qsa("[data-filter-stage]", listRoot).forEach(btn => btn.addEventListener("click", () => {
      const found = tracked.find(({ record }) => record.stage === btn.dataset.filterStage);
      if (found) {
        const previousJobId = active.id;
        active = found.job;
        renderList();
        renderDetail({ resetScroll: active.id !== previousJobId, reveal: true });
      }
    }));
    createIcons();
  }

  function renderList() {
    state = readState();
    if (thresholdLabel && thresholdInput) thresholdLabel.textContent = `${thresholdInput.value}%`;
    if (activeTab === "tracker") {
      renderTracker();
      return;
    }
    if (activeTab === "community" && state.session.loggedIn) {
      listRoot.innerHTML = state.posts.map(post => `
        <article class="list-card">
          <div class="list-card-top"><div><h3>${post.title}</h3><div class="muted small">${post.author}</div></div><span class="pill gold">${post.reactions} likes</span></div>
          <p class="muted">${post.body}</p>
          <div class="hero-actions"><button class="btn btn-ghost" data-like-post="${post.id}">${icon("heart")} Like</button><a class="btn btn-cyan" href="posts.html">${icon("messages-square")} Open posts</a></div>
        </article>
      `).join("");
      qsa("[data-like-post]", listRoot).forEach(btn => btn.addEventListener("click", () => {
        const next = readState();
        next.posts = next.posts.map(post => post.id === btn.dataset.likePost ? { ...post, reactions: post.reactions + 1 } : post);
        writeState(next);
        showToast("Reaction added to the community feed.");
        renderList();
      }));
      createIcons();
      return;
    }
    const jobs = jobsForActiveTab();
    listRoot.innerHTML = jobs.map(job => `
      <button class="list-card ${job.id === active.id ? "active" : ""}" data-job-id="${job.id}">
        <div class="list-card-top">
          <div>
            <h3>${job.title}</h3>
            <div class="muted small">${job.company} - ${job.location}</div>
          </div>
          <span class="score">${job.match}%</span>
        </div>
        <div class="muted small" style="margin-top:12px">${job.salary} - ${job.type} - ${job.posted}</div>
        ${state.applicationRecords[job.id] ? `<div class="job-card-status">${applicationStagePill(state.applicationRecords[job.id].stage)}<span class="muted small">${state.applicationRecords[job.id].nextAction}</span></div>` : ""}
        ${compareMode?.checked ? `<label class="check-field inline custom-checkbox"><input type="checkbox" data-compare-job="${job.id}" ${state.comparedJobs.includes(job.id) ? "checked" : ""}> Compare</label>` : ""}
        ${pills(job.skills.slice(0, 3), "cyan")}
      </button>
    `).join("") || `<div class="card">No matching roles yet. Try a broader search.</div>`;
    qsa("[data-job-id]", listRoot).forEach(btn => {
      btn.addEventListener("click", () => {
        const previousJobId = active.id;
        active = DATA.jobs.find(job => job.id === btn.dataset.jobId);
        history.replaceState(null, "", `discover.html?job=${active.id}`);
        renderList();
        renderDetail({ resetScroll: active.id !== previousJobId, reveal: true });
      });
    });
    qsa("[data-compare-job]", listRoot).forEach(input => {
      input.addEventListener("click", event => event.stopPropagation());
      input.addEventListener("change", () => {
        const next = readState();
        next.comparedJobs = input.checked
          ? [...new Set([...next.comparedJobs, input.dataset.compareJob])].slice(-3)
          : next.comparedJobs.filter(id => id !== input.dataset.compareJob);
        writeState(next);
        renderDetail();
      });
    });
    createIcons();
  }

  function renderDetail({ resetScroll = false, reveal = false } = {}) {
    state = readState();
    const loggedIn = Boolean(state.session.loggedIn);
    const saved = state.savedJobs.includes(active.id);
    const record = state.applicationRecords?.[active.id];
    const applied = Boolean(record && stageIndex(record.stage) >= stageIndex("applied"));
    const compared = DATA.jobs.filter(job => state.comparedJobs.includes(job.id));
    const hiringOrg = orgForJob(active);
    const orgReviews = (state.reviews || []).filter(review => review.targetId === hiringOrg.id);
    const featuredReview = orgReviews[0] || DATA.reviews.find(review => review.targetId === hiringOrg.id);
    const orgHref = `${hiringOrg.type === "University" ? "universities" : "companies"}.html?org=${hiringOrg.id}`;
    detailRoot.innerHTML = `
      <div class="detail-head">
        <div>
          <span class="job-detail-label">Detail</span>
          <span class="pill cyan">${active.industry}</span>
          <h2>${active.title}</h2>
          <div class="muted">${active.company} - ${active.location} - ${active.salary}</div>
        </div>
        <div class="detail-score-stack"><span class="score">${active.match}%</span>${record ? applicationStagePill(record.stage) : ""}</div>
      </div>
      ${record ? `
        <div class="detail-section application-control">
          <div class="section-head compact-section-head"><div><div class="section-kicker">Application progress</div><h3>${record.nextAction}</h3></div><span class="pill gold">${record.deadline}</span></div>
          ${applicationProgress(record)}
          <div class="stage-control" aria-label="Application stages">
            ${APPLICATION_STAGES.map(stage => `<button class="${record.stage === stage.key ? "active" : ""}" type="button" data-stage="${stage.key}">${icon(stage.icon)} ${stage.label}</button>`).join("")}
          </div>
          <div class="timeline compact-timeline">
            ${record.timeline.map(item => `<div class="timeline-item ${item.done ? "done" : ""}"><h3>${item.label}</h3><p class="muted">${item.date}</p></div>`).join("")}
          </div>
        </div>
      ` : ""}
      <div class="detail-section">
        <div class="vera-box">
          <h3>${icon("sparkles")} Vera's read</h3>
          <p class="muted">This is a ${active.match >= 85 ? "priority" : "stretch"} fit for ${getTargetLabel(readState().profile)}. Vera recommends preparing evidence around ${active.skills[0]} and ${active.skills[1]} before applying.</p>
          <div class="score-grid compact">
            <div class="score-tile"><span>Career impact</span><strong>${active.match >= 85 ? "High" : "Medium"}</strong></div>
            <div class="score-tile"><span>Difficulty</span><strong>${active.match >= 85 ? "Ready" : "Stretch"}</strong></div>
            <div class="score-tile"><span>Growth</span><strong>${active.industry === "Technology" || active.title.includes("AI") ? "Fast" : "Steady"}</strong></div>
            <div class="score-tile"><span>Mode</span><strong>${active.type}</strong></div>
          </div>
        </div>
      </div>
      <div class="detail-section">
        <h3>Why CareerGo recommends this</h3>
        <ul class="check-list">${active.why.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="detail-section">
        <h3>Role description</h3>
        <p class="muted">${active.description}</p>
        ${pills(active.skills, "cyan")}
      </div>
      <div class="detail-section content-grid info-card-row">
        <a class="card company-review-preview" href="${orgHref}">
          <div class="company-review-head">
            <div>
              <span class="section-kicker">Hiring company</span>
              <h3>${hiringOrg.name}</h3>
              <p class="muted small">${hiringOrg.industry} - ${hiringOrg.location}</p>
            </div>
            <div class="company-rating-stack">
              ${rating(hiringOrg.rating)}
              <span>${hiringOrg.reviews + orgReviews.length} reviews</span>
            </div>
          </div>
          <p class="muted">${hiringOrg.summary}</p>
          <div class="company-score-strip">
            ${Object.entries(hiringOrg.scores).slice(0, 4).map(([label, value]) => `<span><strong>${value.toFixed(1)}</strong>${label}</span>`).join("")}
          </div>
          ${featuredReview ? `
            <div class="company-review-quote">
              <strong>${featuredReview.title}</strong>
              <span>${featuredReview.body}</span>
            </div>
          ` : ""}
          <span class="company-review-link">${icon("building-2")} View company details</span>
        </a>
        <div class="card market-demand-card">
          <div class="market-demand-head">
            <div>
              <span class="section-kicker">Market signal</span>
              <h3>Market demand</h3>
            </div>
            <span class="pill cyan">${active.match >= 85 ? "Strong" : "Steady"}</span>
          </div>
          <p class="muted">${active.industry} roles are showing ${active.match >= 85 ? "strong" : "steady"} demand in CareerGo's sample market pulse.</p>
          <div class="market-demand-meter" aria-label="${active.match >= 85 ? "Strong" : "Steady"} demand"><span style="width:${Math.min(96, Math.max(58, active.match))}%"></span></div>
          <div class="market-demand-grid">
            <span><strong>${active.industry}</strong>Sector</span>
            <span><strong>${active.type}</strong>Work mode</span>
            <span><strong>${active.match}%</strong>Readiness</span>
          </div>
          <p class="muted small">Create a profile for a personalized salary and readiness read.</p>
        </div>
      </div>
      <div class="detail-section warning-box job-watchout-card">
        <h3>${icon("alert-triangle")} Watch out</h3>
        <p class="muted">${active.caution}</p>
      </div>
      ${compared.length ? `
        <div class="detail-section">
          <h3>${icon("scale")} Compare selected roles</h3>
          <div class="table-wrap">
            <table class="comparison-table">
              <thead><tr><th>Role</th><th>Match</th><th>Salary</th><th>Risk</th></tr></thead>
              <tbody>${compared.map(job => `<tr><td><strong>${job.title}</strong><br><span class="muted small">${job.company}</span></td><td>${job.match}%</td><td>${job.salary}</td><td>${job.caution}</td></tr>`).join("")}</tbody>
            </table>
          </div>
        </div>` : ""}
      <div class="job-detail-actions">
        ${loggedIn ? `
          <div class="job-detail-action-row">
            <button class="btn btn-ghost" data-save>${icon(saved ? "bookmark-check" : "bookmark")} ${saved ? "Saved" : "Save role"}</button>
            <button class="btn btn-primary" data-apply>${icon(applied ? "check" : "send")} ${applied ? "Applied" : "Apply now"}</button>
          </div>
          <div class="job-detail-action-row">
            <button class="btn btn-cyan" type="button" data-contact-job>${icon("messages-square")} Contact hiring team</button>
            <a class="btn btn-cyan" href="posts.html?topic=${encodeURIComponent(active.title)}#messages">${icon("message-circle")} Ask Vera</a>
          </div>
          ${contactOpen ? `
            <form class="job-contact-card" data-job-contact-form>
              <div>
                <div class="section-kicker">Contact about this role</div>
                <h3>Ask ${active.company} about ${active.title}</h3>
                <p class="muted small">Send a concise question about role status, hiring timeline, requirements, or interview process.</p>
              </div>
              <div class="job-contact-grid">
                <label>Question type
                  <select name="topic">
                    <option>Hiring timeline</option>
                    <option>Role requirements</option>
                    <option>Interview process</option>
                    <option>Work mode and team fit</option>
                  </select>
                </label>
                <label>Your question
                  <textarea name="message" rows="3">Hi ${active.company} team, I am interested in the ${active.title} role. Could you share the current hiring status and next steps?</textarea>
                </label>
              </div>
              <div class="job-contact-actions">
                <button class="btn btn-primary" type="submit">${icon("send")} Send inquiry</button>
                <button class="btn btn-ghost" type="button" data-contact-cancel>${icon("x")} Cancel</button>
              </div>
            </form>
          ` : ""}
          <div class="job-detail-secondary-actions">
            <button class="btn btn-ghost" data-screen>${icon("scan-search")} Move to screening</button>
            <button class="btn btn-ghost" data-ignore>${icon("thumbs-down")} Not interested</button>
          </div>
        ` : `
          <div class="job-detail-action-row">
            <button class="btn btn-primary" data-auth-prompt="save jobs and track applications">${icon("bookmark")} Save role</button>
            <button class="btn btn-ghost" data-auth-prompt="apply and track progress">${icon("send")} Apply</button>
          </div>
          <button class="btn btn-cyan job-detail-action-wide" data-auth-prompt="ask Vera for personalized coaching">${icon("message-circle")} Ask Vera</button>
          <button class="btn btn-ghost job-detail-action-wide" data-auth-prompt="contact hiring teams about jobs">${icon("messages-square")} Contact hiring team</button>
        `}
      </div>
    `;
    syncJobDetailView({ resetScroll, reveal });
    if (!loggedIn) {
      bindProtectedPrompts(detailRoot);
      createIcons();
      return;
    }
    qs("[data-save]", detailRoot).addEventListener("click", () => {
      const next = readState();
      next.savedJobs = next.savedJobs.includes(active.id) ? next.savedJobs.filter(id => id !== active.id) : [...next.savedJobs, active.id];
      if (!next.applicationRecords) next.applicationRecords = {};
      if (next.savedJobs.includes(active.id)) next.applicationRecords[active.id] = next.applicationRecords[active.id] || createApplicationRecord(active.id, "saved");
      if (!next.savedJobs.includes(active.id) && !next.applications.includes(active.id)) delete next.applicationRecords[active.id];
      writeState(next);
      showToast(next.savedJobs.includes(active.id) ? "Role saved to your dashboard." : "Role removed from saved jobs.");
      renderList();
      renderDetail();
    });
    qs("[data-apply]", detailRoot).addEventListener("click", () => {
      updateApplicationStage(active.id, "applied");
      showToast("Application added to your tracker.");
      renderList();
      renderDetail();
    });
    qs("[data-contact-job]", detailRoot)?.addEventListener("click", () => {
      contactOpen = !contactOpen;
      renderDetail();
    });
    qs("[data-contact-cancel]", detailRoot)?.addEventListener("click", () => {
      contactOpen = false;
      renderDetail();
    });
    qs("[data-job-contact-form]", detailRoot)?.addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const topic = String(form.get("topic") || "Role inquiry");
      const next = readState();
      pushNotification(next, {
        id: `n-contact-${active.id}-${Date.now()}`,
        type: "recruiter",
        title: "Job inquiry prepared",
        body: `${topic} question for ${active.title} at ${active.company} was added to your follow-up queue.`,
        href: "posts.html#messages"
      });
      writeState(syncCurrentUser(next));
      contactOpen = false;
      showToast("Inquiry prepared for follow-up.");
      renderNavigation();
      renderDetail();
    });
    qs("[data-screen]", detailRoot).addEventListener("click", () => {
      updateApplicationStage(active.id, "screening");
      showToast("Application moved to screening.");
      renderList();
      renderDetail();
    });
    qsa("[data-stage]", detailRoot).forEach(btn => btn.addEventListener("click", () => {
      const stage = btn.dataset.stage;
      updateApplicationStage(active.id, stage);
      showToast(`Moved to ${stageMeta(stage).label}.`);
      renderList();
      renderDetail();
    }));
    qs("[data-ignore]", detailRoot).addEventListener("click", () => {
      const next = readState();
      if (!next.ignoredJobs.includes(active.id)) next.ignoredJobs.push(active.id);
      writeState(next);
      showToast("Vera will learn from that preference.", "info");
      const jobs = filteredJobs();
      const previousJobId = active.id;
      active = jobs[0] || DATA.jobs.find(job => !next.ignoredJobs.includes(job.id)) || DATA.jobs[0];
      renderList();
      renderDetail({ resetScroll: active.id !== previousJobId, reveal: true });
    });
    createIcons();
  }

  qsa("[data-job-tab]").forEach(btn => btn.addEventListener("click", () => {
    qsa("[data-job-tab]").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    activeTab = btn.dataset.jobTab;
    history.replaceState(null, "", activeTab === "tracker" ? `discover.html?job=${active.id}#tracker` : `discover.html?job=${active.id}&tab=${activeTab}`);
    renderList();
    renderDetail();
  }));
  qsa("[data-job-tab]").forEach(btn => btn.classList.toggle("active", btn.dataset.jobTab === activeTab));
  [queryInput, industrySelect, levelSelect, typeSelect, thresholdInput, compareMode].filter(Boolean).forEach(el => el.addEventListener("input", renderList));
  renderList();
  renderDetail();
}

function orgInitials(name) {
  return String(name || "CG").split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
}

function buildOrgCatalog() {
  const extraCompanies = [
    { id: "shell", name: "Shell", industry: "Energy", location: "Kuala Lumpur", rating: 4.4, reviews: 612, open: 10, signal: "Structured graduate rotations", externalUrl: "https://www.shell.com.my/careers.html", tags: ["Verified", "Graduates' Choice", "Hiring at scale"], summary: "Global energy employer with commercial rotations, digital product work, and established graduate pathways.", salary: "RM 5k - 14k / month", size: "10,000+ employees", type: "Company", highlights: ["Global rotations build broad commercial experience.", "Structured graduate pathway reduces early-career risk."], watchouts: ["Large-company pace can feel slow for fast movers."] },
    { id: "setel", name: "Setel", industry: "Fintech", location: "Kuala Lumpur", rating: 4.3, reviews: 288, open: 4, signal: "AI-native product squad", externalUrl: "https://www.setel.com/careers", tags: ["Verified", "Fast responders", "Product"], summary: "Fintech product team close to PETRONAS Digital, useful for PMs who want payments and mobility products.", salary: "RM 9k - 14k / month", size: "250+ employees", type: "Company", highlights: ["Fintech and mobility products give real ownership.", "Close proximity to PETRONAS Digital widens your network."], watchouts: ["Small team means limited backup during crunch."] },
    { id: "carsome", name: "Carsome", industry: "Marketplace", location: "Kuala Lumpur", rating: 4.2, reviews: 356, open: 3, signal: "Regional marketplace scale", externalUrl: "https://careers.carsome.com", tags: ["Fast growing", "Hybrid", "Product"], summary: "Regional marketplace company with operations, analytics, product growth, and customer platform roles.", salary: "RM 10k - 15k / month", size: "1,000+ employees", type: "Company", highlights: ["Marketplace patterns will stretch your product skills.", "Alumni network here is real leverage."], watchouts: ["Ops-heavy problem space - comfort with logistics matters."] },
    { id: "storehub", name: "StoreHub", industry: "SaaS", location: "Kuala Lumpur", rating: 4.2, reviews: 204, open: 2, signal: "Remote-first craft culture", externalUrl: "https://www.storehub.com/careers/", tags: ["Remote-first", "SaaS", "Async"], summary: "Craft-led SaaS company with strong SMB product problems and close user feedback loops.", salary: "RM 8k - 12k / month", size: "300+ employees", type: "Company", highlights: ["Remote-first culture rewards clear async writing.", "Small teams mean fast, visible impact."], watchouts: ["Less structure than a bigger company - you set your own rhythm."] },
    { id: "aerodyne", name: "Aerodyne", industry: "AI", location: "Kuala Lumpur", rating: 4.1, reviews: 172, open: 5, signal: "Drone and AI platform work", externalUrl: "https://aerodyne.group/careers/", tags: ["AI", "Global HQ", "Product"], summary: "Malaysia-born AI and drone company with global operations, data-heavy products, and technical PM paths.", salary: "RM 11k - 16k / month", size: "800+ employees", type: "Company", highlights: ["Drone and AI platform work is genuinely technical.", "Global footprint gives cross-market exposure."], watchouts: ["Domain knowledge in aviation and data takes time to build."] },
    { id: "public-bank", name: "Public Bank", industry: "Banking", location: "Kuala Lumpur", rating: 4.2, reviews: 534, open: 11, signal: "Conservative, stable career track", tags: ["Stable", "Graduate friendly", "Banking"], summary: "One of Malaysia's largest banking groups, known for prudent management, steady promotion cycles, and strong retail banking presence.", salary: "RM 3.8k - 10k / month", size: "18,000+ employees", type: "Company" },
    { id: "rhb", name: "RHB Bank", industry: "Banking", location: "Kuala Lumpur", rating: 4.0, reviews: 412, open: 8, signal: "Digital banking transformation roles", tags: ["Banking", "Digital", "ASEAN"], summary: "Regional banking group investing heavily in digital transformation, analytics, and customer experience roles.", salary: "RM 4k - 11k / month", size: "10,000+ employees", type: "Company" },
    { id: "hong-leong-bank", name: "Hong Leong Bank", industry: "Banking", location: "Kuala Lumpur", rating: 4.1, reviews: 389, open: 7, signal: "Tech-forward banking culture", tags: ["Banking", "Digital", "Fintech"], summary: "Malaysian banking group recognised for its digital banking app and fintech partnerships, with growing product and data teams.", salary: "RM 4.2k - 11.5k / month", size: "8,000+ employees", type: "Company" },
    { id: "iflix", name: "iflix", industry: "Streaming", location: "Kuala Lumpur", rating: 3.9, reviews: 148, open: 2, signal: "Content and product experimentation", tags: ["Media", "Streaming", "Product"], summary: "Southeast Asian streaming pioneer with product, content operations, and data teams focused on emerging-market viewing habits.", salary: "RM 6k - 13k / month", size: "200+ employees", type: "Company" },
    { id: "propertyguru", name: "PropertyGuru Malaysia", industry: "PropTech", location: "Kuala Lumpur", rating: 4.1, reviews: 176, open: 4, signal: "Regional proptech product scale", tags: ["PropTech", "Product", "Regional"], summary: "Leading property technology platform with product, growth, and data science teams shaping how Malaysians search for property.", salary: "RM 7k - 14k / month", size: "400+ employees", type: "Company" },
    { id: "petronas-group", name: "Petronas", industry: "Energy", location: "Kuala Lumpur", rating: 4.3, reviews: 1024, open: 22, signal: "National energy leader, deep graduate programme", tags: ["Energy", "Graduate friendly", "Stable"], summary: "Malaysia's national oil and gas company, offering large-scale structured graduate programmes across engineering, commercial, and digital functions.", salary: "RM 5k - 16k / month", size: "40,000+ employees", type: "Company" },
    { id: "sime-darby", name: "Sime Darby Berhad", industry: "Conglomerate", location: "Kuala Lumpur", rating: 4.0, reviews: 298, open: 9, signal: "Diversified industrial and trading roles", tags: ["Industrial", "Trading", "Stable"], summary: "Diversified Malaysian conglomerate spanning industrial equipment, motors, property, and logistics, with structured management trainee tracks.", salary: "RM 4.5k - 12k / month", size: "20,000+ employees", type: "Company" },
    { id: "maxis", name: "Maxis", industry: "Telco", location: "Kuala Lumpur", rating: 4.1, reviews: 467, open: 10, signal: "5G and digital services push", tags: ["Telco", "Digital", "5G"], summary: "Malaysia's leading telco investing in 5G rollout, digital services, and enterprise solutions, with strong product and data roles.", salary: "RM 5k - 13k / month", size: "4,000+ employees", type: "Company" },
    { id: "celcomdigi", name: "CelcomDigi", industry: "Telco", location: "Shah Alam", rating: 4.0, reviews: 401, open: 12, signal: "Post-merger scale and digital growth", tags: ["Telco", "Merger scale", "Digital"], summary: "Malaysia's largest telco by subscribers following the Celcom-Digi merger, with growing product, data, and network technology teams.", salary: "RM 4.8k - 12.5k / month", size: "3,500+ employees", type: "Company" },
    { id: "u-mobile", name: "U Mobile", industry: "Telco", location: "Kuala Lumpur", rating: 3.9, reviews: 187, open: 6, signal: "Challenger brand, fast decisions", tags: ["Telco", "Fast paced", "Challenger"], summary: "Challenger telco known for agile decision-making, value-driven plans, and lean product teams compared to the larger incumbents.", salary: "RM 4.5k - 11k / month", size: "1,500+ employees", type: "Company" },
    { id: "axiata", name: "Axiata Group", industry: "Telco", location: "Kuala Lumpur", rating: 4.0, reviews: 256, open: 7, signal: "Regional telco and digital portfolio", tags: ["Telco", "Regional", "Digital"], summary: "Regional telecommunications group with digital businesses spanning fintech, infrastructure, and connectivity across Asia.", salary: "RM 5k - 13.5k / month", size: "12,000+ employees", type: "Company" },
    { id: "astro", name: "Astro Malaysia", industry: "Media", location: "Petaling Jaya", rating: 3.9, reviews: 312, open: 5, signal: "Content, streaming, and ad-tech roles", tags: ["Media", "Streaming", "Content"], summary: "Malaysia's leading media group spanning pay-TV, streaming, radio, and content production, with growing digital ad-tech teams.", salary: "RM 4.5k - 11k / month", size: "3,000+ employees", type: "Company" },
    { id: "airasia", name: "AirAsia (Capital A)", industry: "Aviation & Tech", location: "Sepang", rating: 3.8, reviews: 389, open: 8, signal: "Airline-to-super-app transformation", tags: ["Aviation", "Super app", "Fast paced"], summary: "Low-cost airline group turned digital super-app business, with product, data, and logistics teams building beyond travel.", salary: "RM 5k - 14k / month", size: "8,000+ employees", type: "Company" },
    { id: "tnb", name: "Tenaga Nasional (TNB)", industry: "Utilities", location: "Kuala Lumpur", rating: 4.1, reviews: 543, open: 13, signal: "Energy transition and grid digitalisation", tags: ["Utilities", "Energy transition", "Stable"], summary: "Malaysia's national electricity utility, expanding into renewable energy and grid digitalisation with new data and engineering roles.", salary: "RM 4.5k - 12k / month", size: "30,000+ employees", type: "Company" }
  ];
  const extraUniversities = [
    { id: "sunway", name: "Sunway University", industry: "Private University", location: "Selangor", rating: 4.4, reviews: 438, open: 18, signal: "Fintech partnerships", externalUrl: "https://university.sunway.edu.my", tags: ["91% employment", "Industry links", "Business"], summary: "Private university with strong employer links, business programmes, and a growing tech ecosystem.", salary: "91% employed in 6 months", size: "18,000 students", type: "University" },
    { id: "asb", name: "Asia School of Business", industry: "Business School", location: "Kuala Lumpur", rating: 4.5, reviews: 196, open: 9, signal: "MIT-linked executive education", tags: ["MIT-linked", "Exec Ed", "Leadership"], summary: "Business school focused on leadership, analytics, and regional management programmes.", salary: "88% employed in 6 months", size: "1,200 learners", type: "University" },
    { id: "iim-bangalore", name: "IIM Bangalore", industry: "Business School", location: "Online", rating: 4.6, reviews: 524, open: 7, signal: "Product leadership alumni", tags: ["Online", "Leadership", "Product"], summary: "Executive programmes and alumni networks useful for product, strategy, and leadership transitions.", salary: "Global alumni network", size: "Executive cohorts", type: "University" },
    { id: "ukm", name: "Universiti Kebangsaan Malaysia (UKM)", industry: "Public University", location: "Bangi", rating: 4.3, reviews: 412, open: 20, signal: "Strong research output", tags: ["Public", "Research", "STEM"], summary: "Public research university with strong programmes in science, engineering, and Islamic studies, and a large national alumni base.", salary: "84% employed in 6 months", size: "27,000 students", type: "University" },
    { id: "usm", name: "Universiti Sains Malaysia (USM)", industry: "Public University", location: "Penang", rating: 4.3, reviews: 388, open: 19, signal: "APEX research university status", tags: ["Public", "Research", "Sciences"], summary: "One of Malaysia's APEX research universities, known for strong sciences, pharmacy, and engineering programmes based in Penang.", salary: "83% employed in 6 months", size: "25,000 students", type: "University" },
    { id: "upm", name: "Universiti Putra Malaysia (UPM)", industry: "Public University", location: "Serdang", rating: 4.2, reviews: 356, open: 17, signal: "Agriculture and applied sciences leader", tags: ["Public", "Agriculture", "Applied sciences"], summary: "Leading public university for agriculture, veterinary science, and applied sciences, with growing business and computer science faculties.", salary: "82% employed in 6 months", size: "24,000 students", type: "University" },
    { id: "inti", name: "INTI International University", industry: "Private University", location: "Nilai", rating: 4.0, reviews: 214, open: 10, signal: "American degree transfer pathways", tags: ["Private", "Twinning", "Business"], summary: "Private university known for American degree transfer programmes, business, and IT pathways with strong industry placement support.", salary: "78% employed in 6 months", size: "8,000 students", type: "University" },
    { id: "mmu", name: "Multimedia University (MMU)", industry: "Private University", location: "Cyberjaya", rating: 4.1, reviews: 267, open: 13, signal: "Engineering and multimedia specialism", tags: ["Private", "Engineering", "Technology"], summary: "Technology-focused private university in the heart of Cyberjaya, with strong engineering, multimedia, and computer science programmes.", salary: "81% employed in 6 months", size: "10,000 students", type: "University" },
    { id: "ucsi", name: "UCSI University", industry: "Private University", location: "Kuala Lumpur", rating: 4.0, reviews: 231, open: 12, signal: "Practice-oriented education model", tags: ["Private", "Practice-based", "Business"], summary: "Private university with a practice-oriented education philosophy, strong hospitality, pharmacy, and business programmes.", salary: "79% employed in 6 months", size: "12,000 students", type: "University" },
    { id: "heriot-watt", name: "Heriot-Watt University Malaysia", industry: "Private University", location: "Putrajaya", rating: 4.2, reviews: 156, open: 8, signal: "UK-accredited engineering and business degrees", tags: ["Private", "UK-accredited", "Engineering"], summary: "Malaysian branch campus of the UK's Heriot-Watt University, offering UK-accredited engineering, business, and design degrees.", salary: "80% employed in 6 months", size: "3,000 students", type: "University" }
  ];
  const companies = [...DATA.companies, ...extraCompanies]
    .filter((org, index, all) => all.findIndex(item => item.id === org.id) === index)
    .map((org, index) => ({ ...org, category: "companies", response: index % 3 === 0 ? "Replies ~1d" : index % 3 === 1 ? "Hiring at scale" : "Strong learning path" }));
  const universities = [...DATA.universities, ...extraUniversities]
    .filter((org, index, all) => all.findIndex(item => item.id === org.id) === index)
    .map((org, index) => ({ ...org, category: "universities", response: index % 3 === 0 ? "Employer linked" : index % 3 === 1 ? "High outcomes" : "Strong alumni" }));
  const catalog = [...companies, ...universities].map(org => ({
    ...org,
    following: org.type === "University" ? `${Math.max(12, Math.round(org.reviews / 10))}k alumni signals` : `${Math.max(3, Math.round(org.reviews / 80))}k following`,
    programme: org.type === "University" ? (org.tags?.[0] || "Career outcomes") : (org.tags?.[1] || "Verified")
  }));
  return { companies, universities, catalog };
}

const WORKSPACE_SEARCH_SECTIONS = [
  { label: "Today", href: "dashboard.html", icon: "layout-dashboard", keywords: ["today", "dashboard", "home", "daily brief", "brief"] },
  { label: "Discover", href: "discover.html", icon: "compass", keywords: ["discover", "browse jobs", "explore roles", "find jobs"] },
  { label: "Growth", href: "grow.html", icon: "route", keywords: ["grow", "growth", "coaching", "skills", "interview prep", "milestones", "roadmap"] },
  { label: "Career Value", href: "market.html", icon: "bar-chart-2", keywords: ["worth", "career value", "market value", "salary", "benchmark", "negotiation", "pay"] },
  { label: "Pipeline", href: "autopilot.html", icon: "list-checks", keywords: ["pipeline", "applications", "autopilot", "tracker", "applied"] },
  { label: "Feed", href: "posts.html", icon: "message-circle", keywords: ["feed", "community", "posts", "inbox", "messages"] },
  { label: "Profile", href: "profile.html", icon: "user-round", keywords: ["profile", "resume", "cv"] },
  { label: "Settings", href: "settings.html", icon: "settings", keywords: ["settings", "account", "privacy"] },
  { label: "Saved Items", href: "posts.html#saved", icon: "bookmark", keywords: ["saved", "bookmarks", "shortlist"] }
];

const CAREER_VALUE_SEARCH_INDEX = [
  { title: "Career Value score", body: "Your projected RM 8,300-9,800/mo range and 6-month target.", href: "market.html", keywords: ["career value", "value score", "salary range", "worth"] },
  { title: "Market benchmark vs. peers", body: "Compare your pay against KL PMs and top-tier companies like Grab and Shopee.", href: "market.html", keywords: ["benchmark", "market pulse", "peers", "compare"] },
  { title: "Career scenario planner", body: "Model switching industry, going remote, or relocating to Singapore.", href: "market.html", keywords: ["scenario", "relocate", "remote", "switch industry", "singapore"] },
  { title: "Salary negotiation prep", body: "Vera's highest-value action to raise your Career Value this month.", href: "market.html", keywords: ["negotiation", "raise", "offer", "highest value action"] }
];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function escapeRegExp(value) {
  return String(value ?? "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightMatch(text, query) {
  const safeText = escapeHtml(text);
  const pattern = escapeRegExp(escapeHtml(query.trim()));
  if (!pattern) return safeText;
  return safeText.replace(new RegExp(pattern, "gi"), match => `<span class="cg-search-hit">${match}</span>`);
}

function matchesQuery(parts, query) {
  return parts.filter(Boolean).join(" ").toLowerCase().includes(query);
}

function searchPublicCatalog(query, limit = 5) {
  const q = query.trim().toLowerCase();
  if (!q) return { companies: [], jobs: [], universities: [], totals: { companies: 0, jobs: 0, universities: 0 } };
  const { companies, universities } = buildOrgCatalog();
  const orgMatch = org => matchesQuery([org.name, org.industry, org.location, org.summary, org.signal, ...(org.tags || [])], q);
  const jobMatch = job => matchesQuery([job.title, job.company, job.location, job.industry, job.type, job.level, ...(job.skills || [])], q);
  const matchedCompanies = companies.filter(orgMatch);
  const matchedJobs = DATA.jobs.filter(jobMatch);
  const matchedUniversities = universities.filter(orgMatch);
  return {
    companies: matchedCompanies.slice(0, limit),
    jobs: matchedJobs.slice(0, limit),
    universities: matchedUniversities.slice(0, limit),
    totals: { companies: matchedCompanies.length, jobs: matchedJobs.length, universities: matchedUniversities.length }
  };
}

function searchWorkspaceCatalog(query, state) {
  const base = searchPublicCatalog(query);
  const q = query.trim().toLowerCase();
  if (!q) return { ...base, people: [], pipeline: [], growth: [], value: [], sections: [], totals: { ...base.totals, people: 0, pipeline: 0, growth: 0, value: 0, sections: 0 } };

  const matchedPeople = DATA.people
    .filter(person => matchesQuery([person.name, person.role, person.company, person.industry, person.tag], q));

  const matchedPipeline = getTrackedJobs(state)
    .filter(item => ["saved", "applied", "interview", "offer"].includes(item.record.stage))
    .filter(item => matchesQuery([item.job.title, item.job.company, stageMeta(item.record.stage).label], q));

  const matchedGrowth = personalizedMissions(state.profile || {})
    .filter(mission => matchesQuery([mission.title, mission.body], q));

  const matchedValue = CAREER_VALUE_SEARCH_INDEX
    .filter(item => matchesQuery([item.title, item.body, ...(item.keywords || [])], q));

  const matchedSections = WORKSPACE_SEARCH_SECTIONS
    .filter(section => matchesQuery([section.label, ...(section.keywords || [])], q));

  return {
    ...base,
    people: matchedPeople.slice(0, 5),
    pipeline: matchedPipeline.slice(0, 5),
    growth: matchedGrowth.slice(0, 5),
    value: matchedValue.slice(0, 5),
    sections: matchedSections.slice(0, 5),
    totals: {
      ...base.totals,
      people: matchedPeople.length,
      pipeline: matchedPipeline.length,
      growth: matchedGrowth.length,
      value: matchedValue.length,
      sections: matchedSections.length
    }
  };
}

function renderSearchPanelContent(query, scope, state) {
  const q = query.trim();
  if (!q) return "";
  const results = scope === "workspace" ? searchWorkspaceCatalog(q, state) : searchPublicCatalog(q);
  const jobHref = job => scope === "workspace" ? `role.html?role=${encodeURIComponent(job.id)}` : `explore.html#featured-opportunities`;
  const companyHref = org => scope === "workspace" ? `discover-companies.html?q=${encodeURIComponent(org.name)}` : `companies.html?q=${encodeURIComponent(org.name)}`;
  const universityHref = org => scope === "workspace" ? `discover-universities.html?q=${encodeURIComponent(org.name)}` : `universities.html?q=${encodeURIComponent(org.name)}`;
  const groups = [];

  if (scope === "workspace" && results.sections.length) {
    groups.push({
      title: "Go to",
      items: results.sections.map(section => ({ href: section.href, title: section.label, meta: "Jump to this section", icon: section.icon }))
    });
  }
  if (scope === "workspace" && results.people?.length) {
    groups.push({
      title: "People",
      items: results.people.map(person => ({ href: `user-profile.html?id=${encodeURIComponent(person.id)}`, title: person.name, meta: [person.role, person.company].filter(Boolean).join(" - "), icon: "user-round", personId: person.id }))
    });
  }
  if (results.companies.length) {
    groups.push({
      title: "Companies",
      items: results.companies.map(org => ({ href: companyHref(org), title: org.name, meta: `${org.industry} - ${org.location}`, icon: "building-2" }))
    });
  }
  if (results.jobs.length) {
    const jobItems = results.jobs.map(job => ({ href: jobHref(job), title: job.title, meta: `${job.company} - ${job.location} - ${job.salary}`, icon: "briefcase" }));
    if (scope === "workspace") {
      jobItems.push({ href: `recommended-roles.html?q=${encodeURIComponent(q)}`, title: `View all roles matching "${q}"`, meta: "See full results on the Roles page", icon: "arrow-right" });
    }
    groups.push({ title: "Jobs", items: jobItems });
  }
  if (results.universities.length) {
    groups.push({
      title: "Universities",
      items: results.universities.map(org => ({ href: universityHref(org), title: org.name, meta: `${org.industry} - ${org.location}`, icon: "graduation-cap" }))
    });
  }
  if (scope === "workspace") {
    if (results.pipeline.length) {
      groups.push({
        title: "Your pipeline",
        items: results.pipeline.map(({ record, job }) => ({ href: "autopilot.html", title: job.title, meta: `${job.company} - ${stageMeta(record.stage).label}`, icon: stageMeta(record.stage).icon }))
      });
    }
    if (results.growth.length) {
      groups.push({
        title: "Growth & roadmap",
        items: results.growth.map(mission => ({ href: mission.href || "grow.html", title: mission.title, meta: mission.body, icon: "route" }))
      });
    }
    if (results.value.length) {
      groups.push({
        title: "Career value",
        items: results.value.map(item => ({ href: item.href || "market.html", title: item.title, meta: item.body, icon: "bar-chart-2" }))
      });
    }
  }

  if (!groups.length) {
    return `<div class="cg-search-empty">${icon("search")} No matches for "${escapeHtml(q)}"</div>`;
  }

  const totalAvailable = Object.values(results.totals || {}).reduce((sum, n) => sum + n, 0);
  const totalShown = groups.reduce((sum, group) => sum + group.items.length, 0);
  const footer = totalAvailable > totalShown
    ? `<div class="cg-search-footer">Showing top ${totalShown} of ${totalAvailable} match${totalAvailable === 1 ? "" : "es"}</div>`
    : "";

  return groups.map(group => `
    <div class="cg-search-group">
      <span class="cg-search-group-title">${escapeHtml(group.title)}</span>
      ${group.items.map(item => `
        <a class="cg-search-result" href="${item.href}" ${item.personId ? `data-person-id="${escapeHtml(item.personId)}"` : ""}>
          <span class="cg-search-result-icon">${icon(item.icon)}</span>
          <span class="cg-search-result-body"><strong>${highlightMatch(item.title, q)}</strong><small>${escapeHtml(item.meta)}</small></span>
        </a>
      `).join("")}
    </div>
  `).join("") + footer;
}

function recommendedPeopleFor(state) {
  const almaMater = "um";
  const targetIndustries = state.profile?.preferences?.industries || [];
  const scored = DATA.people.map(person => {
    let score = 0;
    if (person.tag === "Mentor") score += 2;
    if (person.university && person.university === almaMater) score += 3;
    if (targetIndustries.includes(person.industry)) score += 1;
    return { person, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 4).map(item => item.person);
}

function personSearchResultHtml(person) {
  return `
    <a class="cg-search-result" href="user-profile.html?id=${encodeURIComponent(person.id)}" data-person-id="${person.id}">
      <span class="cg-search-result-icon">${icon("user-round")}</span>
      <span class="cg-search-result-body"><strong>${escapeHtml(person.name)}</strong><small>${escapeHtml([person.role, person.company].filter(Boolean).join(" - "))}</small></span>
    </a>
  `;
}

function renderSearchDefaultContent(state) {
  const recommended = recommendedPeopleFor(state);
  const historyIds = Array.isArray(state.peopleSearchHistory) ? state.peopleSearchHistory : [];
  const history = historyIds.map(id => DATA.people.find(person => person.id === id)).filter(Boolean).slice(0, 6);
  const groups = [];
  if (history.length) {
    groups.push(`
      <div class="cg-search-group">
        <span class="cg-search-group-title">Recent searches<button type="button" class="cg-search-clear-history" data-clear-people-history>Clear</button></span>
        ${history.map(personSearchResultHtml).join("")}
      </div>
    `);
  }
  if (recommended.length) {
    groups.push(`
      <div class="cg-search-group">
        <span class="cg-search-group-title">Recommended for you</span>
        ${recommended.map(personSearchResultHtml).join("")}
      </div>
    `);
  }
  return groups.join("") || `<div class="cg-search-empty">${icon("search")} Search companies, jobs, universities, or people.</div>`;
}

function recordPeopleSearchHistory(personId) {
  if (!personId) return;
  const next = readState();
  const list = Array.isArray(next.peopleSearchHistory) ? next.peopleSearchHistory : [];
  next.peopleSearchHistory = [personId, ...list.filter(id => id !== personId)].slice(0, 8);
  writeState(next);
}

function attachLiveSearch(form, buildResultsHtml, buildDefaultHtml) {
  if (!form || form.dataset.liveSearchBound) return;
  form.dataset.liveSearchBound = "1";
  const shell = form.closest("[data-search-shell]");
  const panel = shell ? qs("[data-search-panel]", shell) : null;
  const input = qs("input[name='q']", form);
  if (!shell || !panel || !input) return;

  const bindPanelInteractions = () => {
    qsa("a", panel).forEach(link => link.addEventListener("click", () => {
      if (link.dataset.personId) recordPeopleSearchHistory(link.dataset.personId);
      panel.hidden = true;
    }));
    qs("[data-clear-people-history]", panel)?.addEventListener("click", () => {
      const next = readState();
      next.peopleSearchHistory = [];
      writeState(next);
      renderNow();
    });
  };

  const renderNow = () => {
    const query = input.value || "";
    if (!query.trim()) {
      if (!buildDefaultHtml) {
        panel.hidden = true;
        panel.innerHTML = "";
        return;
      }
      panel.innerHTML = buildDefaultHtml();
      panel.hidden = false;
      createIcons();
      bindPanelInteractions();
      return;
    }
    panel.innerHTML = buildResultsHtml(query);
    panel.hidden = false;
    createIcons();
    bindPanelInteractions();
  };

  let debounceId;
  input.addEventListener("input", () => {
    clearTimeout(debounceId);
    debounceId = setTimeout(renderNow, 120);
  });
  input.addEventListener("focus", () => {
    if (input.value.trim() || buildDefaultHtml) renderNow();
  });
  shell.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      panel.hidden = true;
      input.focus();
      return;
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    if (panel.hidden) return;
    event.preventDefault();
    const items = qsa(".cg-search-result", panel);
    if (!items.length) return;
    const currentIndex = items.indexOf(document.activeElement);
    let nextIndex;
    if (currentIndex === -1) {
      nextIndex = event.key === "ArrowDown" ? 0 : items.length - 1;
    } else if (event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % items.length;
    } else {
      nextIndex = (currentIndex - 1 + items.length) % items.length;
    }
    items[nextIndex].focus();
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    renderNow();
  });
  document.addEventListener("click", event => {
    if (!shell.contains(event.target)) panel.hidden = true;
  });
}

function initPublicHeroSearch() {
  qsa(".home-search").forEach(form => {
    if (!form.hasAttribute("data-search-shell")) {
      form.classList.add("cg-search-shell");
      form.setAttribute("data-search-shell", "");
      const panel = document.createElement("div");
      panel.className = "cg-search-panel";
      panel.setAttribute("data-search-panel", "");
      panel.hidden = true;
      form.appendChild(panel);
    }
    attachLiveSearch(form, query => renderSearchPanelContent(query, "public"));
  });
}

function discoverPathCard([title, sub, match, salary, demand, why]) {
  return `
    <article class="cg-org-browse-card">
      <span class="cg-org-browse-logo">${match.replace(" match", "")}</span>
      <div class="cg-org-browse-body">
        <h3>${title}</h3>
        <p>${sub}</p>
        <div class="cg-org-browse-tags"><span>${salary}</span><span>${demand} demand</span></div>
        <p class="cg-org-browse-signal">${icon("sparkles")} ${why}</p>
      </div>
      <div class="cg-org-browse-actions">
        <a class="btn btn-ghost" href="posts.html?topic=${encodeURIComponent(`Tell me more about the ${title} path`)}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</a>
      </div>
    </article>
  `;
}

function discoverProgramCard([name, sub, tag, cost, duration, why]) {
  return `
    <article class="cg-org-browse-card">
      <span class="cg-org-browse-logo">${icon("graduation-cap")}</span>
      <div class="cg-org-browse-body">
        <h3>${name}</h3>
        <p>${sub}</p>
        <div class="cg-org-browse-tags"><span>${cost}</span><span>${duration}</span></div>
        <p class="cg-org-browse-signal">${icon("sparkles")} ${why}</p>
      </div>
      <div class="cg-org-browse-actions">
        <a class="btn btn-ghost" href="posts.html?topic=${encodeURIComponent(`Tell me more about ${name}`)}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</a>
      </div>
    </article>
  `;
}

function discoverMentorCard([name, years, path, why, overlap]) {
  return `
    <article class="cg-org-browse-card">
      <span class="cg-org-browse-logo">${name.charAt(0)}</span>
      <div class="cg-org-browse-body">
        <h3>${name}</h3>
        <p>${years} &middot; ${path}</p>
        <div class="cg-org-browse-tags"><span>${overlap}</span></div>
        <p class="cg-org-browse-signal">${icon("sparkles")} ${why}</p>
      </div>
      <div class="cg-org-browse-actions">
        <a class="btn btn-ghost" href="posts.html?topic=${encodeURIComponent(`Show me a path like ${name}`)}#messages">${icon("message-circle")} See path</a>
      </div>
    </article>
  `;
}

function discoverRoleCard(job) {
  return `
    <article class="cg-org-browse-card" data-org-browse-role="${job.id}" tabindex="0" aria-label="Open ${job.title} details">
      <span class="cg-org-browse-logo">${job.company.charAt(0)}</span>
      <div class="cg-org-browse-body">
        <h3>${job.title}</h3>
        <p>${job.company} &middot; ${job.location} &middot; ${job.salary}</p>
        <div class="cg-org-browse-tags"><span>${job.match}% match</span><span>${job.type}</span></div>
        <p class="cg-org-browse-signal">${icon("sparkles")} ${(job.why && job.why[0]) || "Matches your profile."}</p>
      </div>
      <div class="cg-org-browse-actions">
        <b>${job.posted}</b>
      </div>
    </article>
  `;
}

function openDiscoverListModal(title, cardsHtml, onRender) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-org-browse-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Discover</div>
          <h2>${title}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-org-browse-list">${cardsHtml}</div>
    </div>
  `;
  document.body.appendChild(backdrop);
  function close() {
    backdrop.remove();
    document.removeEventListener("keydown", onEsc);
  }
  function onEsc(event) {
    if (event.key === "Escape") close();
  }
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) close();
  });
  document.addEventListener("keydown", onEsc);
  if (typeof onRender === "function") onRender(backdrop);
  createIcons();
}

function openDiscoverFiltersModal(onApply) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <form class="modal card" data-discover-filters-form>
      <div class="modal-head">
        <div>
          <div class="section-kicker">Refine your search</div>
          <h2>Filters</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="form-grid">
        <label>Role type
          <select name="roleType">
            <option value="">Any role type</option>
            <option>Full-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </label>
        <label>Work mode
          <select name="mode">
            <option value="">Any work mode</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite</option>
          </select>
        </label>
        <label>Minimum salary (RM / month)
          <select name="salary">
            <option value="">No minimum</option>
            <option>4,000+</option>
            <option>6,000+</option>
            <option>10,000+</option>
          </select>
        </label>
        <label>Location
          <select name="location">
            <option value="">Anywhere in Malaysia</option>
            <option>Kuala Lumpur</option>
            <option>Petaling Jaya</option>
            <option>Selangor</option>
          </select>
        </label>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" type="submit">${icon("sparkles")} Apply filters</button>
        <button class="btn btn-ghost" type="button" data-close>Cancel</button>
      </div>
    </form>
  `;
  document.body.appendChild(backdrop);
  function close() {
    backdrop.remove();
    document.removeEventListener("keydown", onEsc);
  }
  function onEsc(event) {
    if (event.key === "Escape") close();
  }
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) close();
  });
  document.addEventListener("keydown", onEsc);
  qs("[data-discover-filters-form]", backdrop).addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const salary = form.get("salary");
    const parts = [form.get("roleType"), form.get("mode"), form.get("location"), salary ? `RM ${salary}/month` : ""].filter(Boolean);
    close();
    if (typeof onApply === "function") onApply(parts.join(", "));
  });
  createIcons();
}

function openOrgBrowserModal(kind) {
  const { catalog } = buildOrgCatalog();
  const items = catalog.filter(org => org.category === kind);
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.dataset.orgBrowser = "";
  backdrop.innerHTML = `
    <div class="modal card cg-org-browse-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Directory</div>
          <h2>${kind === "companies" ? "All companies" : "All universities"}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <label class="cg-org-browse-search">${icon("search")}<input type="text" placeholder="Search ${kind === "companies" ? "companies" : "universities"}..." data-org-browse-search></label>
      <div class="cg-org-browse-list" data-org-browse-list></div>
    </div>
  `;
  document.body.appendChild(backdrop);

  const list = qs("[data-org-browse-list]", backdrop);
  const searchInput = qs("[data-org-browse-search]", backdrop);

  function renderList() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const savedOrgs = Array.isArray(readState().savedOrgs) ? readState().savedOrgs : [];
    const filtered = items.filter(org => {
      if (!query) return true;
      const hay = [org.name, org.industry, org.location, org.signal, ...(org.tags || [])].join(" ").toLowerCase();
      return hay.includes(query);
    });
    list.innerHTML = filtered.map(org => {
      const isSaved = savedOrgs.includes(org.id);
      return `
        <article class="cg-org-browse-card" data-org-browse-detail="${org.id}" tabindex="0" aria-label="Open ${org.name} reviews and details">
          <span class="cg-org-browse-logo">${orgInitials(org.name)}</span>
          <div class="cg-org-browse-body">
            <h3>${org.name}</h3>
            <p>${org.industry} &middot; ${org.location} &middot; ${icon("star")} ${Number(org.rating).toFixed(1)}</p>
            <div class="cg-org-browse-tags">${(org.tags || []).slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}</div>
            <p class="cg-org-browse-signal">${icon("sparkles")} ${org.signal}</p>
          </div>
          <div class="cg-org-browse-actions">
            <b>${org.type === "University" ? org.salary : `${org.open} open roles`}</b>
            <button type="button" data-org-browse-save="${org.id}">${icon(isSaved ? "bookmark-check" : "bookmark")} ${isSaved ? "Saved" : "Save"}</button>
          </div>
        </article>
      `;
    }).join("") || `<p class="cg-org-browse-empty">No matches yet. Try a different search.</p>`;
    qsa("[data-org-browse-save]", list).forEach(button => button.addEventListener("click", event => {
      event.stopPropagation();
      const next = readState();
      next.savedOrgs = Array.isArray(next.savedOrgs) ? next.savedOrgs : [];
      const id = button.dataset.orgBrowseSave;
      next.savedOrgs = next.savedOrgs.includes(id) ? next.savedOrgs.filter(savedId => savedId !== id) : [...next.savedOrgs, id];
      writeState(next);
      renderList();
      showToast(next.savedOrgs.includes(id) ? "Saved for comparison." : "Removed from saved.");
    }));
    qsa("[data-org-browse-detail]", list).forEach(card => {
      card.addEventListener("click", () => openOrgDetailModal(card.dataset.orgBrowseDetail));
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openOrgDetailModal(card.dataset.orgBrowseDetail);
        }
      });
    });
    createIcons();
  }

  function close() {
    backdrop.remove();
    document.removeEventListener("keydown", onEsc);
  }
  function onEsc(event) {
    if (event.key === "Escape") close();
  }
  searchInput.addEventListener("input", renderList);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) close();
  });
  document.addEventListener("keydown", onEsc);
  renderList();
  createIcons();
}

function renderMarketPulsePage() {
  const root = qs("[data-market-pulse-page]");
  if (!root) return;
  if (!requireAccount(root, "explore the full Malaysia market pulse")) return;
  const marketWeeks = marketWeekLabels(12);
  const tags = [...new Set(MARKET_PULSE_CATEGORIES.map(c => c.tag))];
  const parseOpenings = str => Number((str.match(/[\d,]+/) || ["0"])[0].replace(/,/g, ""));
  const parseTrend = str => Number((str.match(/-?\d+(\.\d+)?/) || [0])[0]);
  const parseSalary = c => {
    const value = Number((c.salary.match(/[\d,.]+/) || ["0"])[0].replace(/,/g, ""));
    return /month/.test(c.salary) ? value * 12 : value * 1000;
  };
  root.innerHTML = `
    <section class="cg-discover cg-discover-v2 cg-market-pulse-page">
      <header class="cg-discover-hero">
        <a class="cg-back-link" href="discover.html">${icon("arrow-left")} Discover</a>
        <span class="cg-overline">Browse career places</span>
        <h1>Market Pulse in Malaysia.</h1>
        <p>Every market segment Vera is tracking for hiring trends, pay, and remote share across the Malaysian Product Management market.</p>
      </header>
      <section class="cg-discover-section">
        <div class="cg-org-filters" aria-label="Market pulse filters">
          <form class="cg-org-search-field" data-market-pulse-search-form>
            ${icon("search")}
            <input name="q" data-market-pulse-search placeholder="Search market segments, skills, or companies...">
          </form>
          <select data-market-pulse-sort aria-label="Sort">
            <option value="growth">Highest hiring growth</option>
            <option value="salary">Highest avg salary</option>
            <option value="openings">Most openings</option>
          </select>
        </div>
        <div class="cg-org-chips">
          ${tags.map(tag => `<button type="button" data-market-pulse-chip="${tag}">${icon("zap")} ${tag}</button>`).join("")}
        </div>
        <p class="cg-org-count"><strong data-market-pulse-count>0</strong> shown &middot; Market segments &middot; sorted by <span data-market-pulse-sort-label>highest hiring growth</span></p>
        <div class="cg-market-grid" data-market-pulse-grid></div>
      </section>
    </section>
  `;
  const grid = qs("[data-market-pulse-grid]", root);
  const countNode = qs("[data-market-pulse-count]", root);
  const sortLabelNode = qs("[data-market-pulse-sort-label]", root);
  const searchInput = qs("[data-market-pulse-search]", root);
  const sortSelect = qs("[data-market-pulse-sort]", root);
  const chipButtons = qsa("[data-market-pulse-chip]", root);
  const sortLabels = { growth: "highest hiring growth", salary: "highest avg salary", openings: "most openings" };
  if (searchInput) searchInput.value = new URLSearchParams(location.search).get("q") || "";

  function currentItems() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const activeChip = qs("[data-market-pulse-chip].active", root)?.dataset.marketPulseChip || "";
    let filtered = MARKET_PULSE_CATEGORIES.filter(c => {
      const hay = [c.tag, c.title, c.salary, c.remote, ...c.skills, ...c.companies].join(" ").toLowerCase();
      if (query && !hay.includes(query)) return false;
      if (activeChip && c.tag !== activeChip) return false;
      return true;
    });
    const sort = sortSelect?.value || "growth";
    return filtered.slice().sort((a, b) => {
      if (sort === "salary") return parseSalary(b) - parseSalary(a);
      if (sort === "openings") return parseOpenings(b.openings) - parseOpenings(a.openings);
      return parseTrend(b.trend) - parseTrend(a.trend);
    });
  }

  function renderGrid() {
    const filtered = currentItems();
    countNode.textContent = String(filtered.length);
    if (sortLabelNode) sortLabelNode.textContent = sortLabels[sortSelect?.value || "growth"];
    grid.innerHTML = filtered.map(c => {
      const trendPct = parseTrend(c.trend);
      const startWeekly = Math.max(1, Math.round(c.latestWeekly / (1 + trendPct / 100)));
      const series = marketWeeklySeries(startWeekly, c.latestWeekly, MARKET_PULSE_CATEGORIES.indexOf(c));
      const seriesMin = Math.min(...series);
      const seriesRange = Math.max(1, Math.max(...series) - seriesMin);
      const heightFor = value => 10 + Math.round(((value - seriesMin) / seriesRange) * 38);
      const chartSummary = `Hiring trend ${trendPct >= 0 ? "up" : "down"} ${Math.abs(trendPct)}% over the last 12 weeks, from ${series[0]} to ${series[series.length - 1]} postings a week.`;
      return `
        <article class="cg-market-card tone-${c.tone}">
          <div><span>${icon("zap")} ${c.tag}</span><small>${icon("trending-up")} ${c.trend}</small></div>
          <h3>${c.title}</h3><a href="posts.html?topic=${encodeURIComponent(c.title)}#messages" aria-label="Ask Vera about ${c.title}">${icon("arrow-up-right")}</a>
          <div class="cg-bars">
            <span class="sr-only">${chartSummary}</span>
            ${series.map((value, i) => {
              const isCurrent = i === series.length - 1;
              const barLabel = `Week of ${marketWeeks[i]}${isCurrent ? " (this week)" : ""}: ${value} postings`;
              return `<i tabindex="0" role="img" class="${isCurrent ? "is-current" : ""}" style="height:${heightFor(value)}px;background:${isCurrent ? MARKET_TONE_RAMP[c.tone][7] : MARKET_TONE_RAMP[c.tone][2]}" data-tooltip="${barLabel}" aria-label="${barLabel}"></i>`;
            }).join("")}
          </div>
          <p class="cg-bars-caption">Last 12 weeks - <strong>${c.latestWeekly} postings this week</strong></p>
          <dl>
            <dt>Avg. salary (MY)</dt><dd>${c.salary}</dd>
            <dt>Salary range (MY)</dt><dd>${c.salaryRange}</dd>
            <dt>Remote share</dt><dd>${c.remote}</dd>
            <dt>Openings</dt><dd>${c.openings}</dd>
          </dl>
          <p class="cg-market-extra"><span>${icon("sparkles")} Skills in demand</span>${c.skills.join(" - ")}</p>
          <p class="cg-market-extra"><span>${icon("building-2")} Hiring now</span>${c.companies.join(" - ")}</p>
        </article>
      `;
    }).join("") || `<p class="cg-org-browse-empty">No market segments match yet. Try clearing a filter or searching a broader term.</p>`;
    createIcons();
    bindMarketTooltips(grid);
  }

  qs("[data-market-pulse-search-form]", root)?.addEventListener("submit", event => event.preventDefault());
  searchInput?.addEventListener("input", renderGrid);
  sortSelect?.addEventListener("input", renderGrid);
  chipButtons.forEach(button => button.addEventListener("click", () => {
    const wasActive = button.classList.contains("active");
    chipButtons.forEach(item => item.classList.remove("active"));
    if (!wasActive) button.classList.add("active");
    renderGrid();
  }));
  renderGrid();
  createIcons();
}

function directoryTagVariant(tag) {
  if (/verified/i.test(tag)) return "verified";
  if (/choice/i.test(tag)) return "choice";
  if (/hiring at scale|actively hiring|fast responders?/i.test(tag)) return "momentum";
  return "";
}

function renderDirectoryPage(kind) {
  const root = qs("[data-directory-page]");
  if (!root) return;
  const isDiscoverContext = document.body.dataset.page === "discover";
  if (isDiscoverContext && !requireAccount(root, kind === "universities" ? "browse every university Vera is tracking" : "browse every company Vera is tracking")) return;
  const state = readState();
  const loggedIn = Boolean(state.session.loggedIn);
  if (loggedIn && state.session.role === "employer") {
    root.innerHTML = `
      <section class="container section">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Employer workspace</div>
          <h1 class="section-title">Company and university research is part of the job seeker workspace.</h1>
          <p class="section-sub">Employers should use Company Profile, Candidate Search, Talent Pool, Applicants, and Analytics inside Employer OS.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="employer-app.html">${icon("layout-dashboard")} Open Employer OS</a><a class="btn btn-ghost" href="employers.html">${icon("info")} Employer entry</a></div>
        </div>
      </section>
    `;
    createIcons();
    return;
  }

  const { catalog } = buildOrgCatalog();
  let activeKind = isDiscoverContext
    ? (kind === "universities" ? "universities" : "companies")
    : (location.hash || "").replace("#", "") || (kind === "universities" ? "universities" : "companies");
  if (!["companies", "universities"].includes(activeKind)) activeKind = "companies";
  const title = isDiscoverContext
    ? (activeKind === "universities" ? "All universities." : "All companies.")
    : "Career places worth knowing.";
  const copy = isDiscoverContext
    ? (activeKind === "universities" ? "Every institution Vera is tracking for your career path in Malaysia." : "Every employer Vera is tracking for your Product Management search in Malaysia.")
    : "Browse verified companies and universities in one place. Use categories and filters to compare employer signals, graduate outcomes, locations, programmes, and career fit.";
  const pageMarkup = `
    <section class="cg-directory-browser cg-directory-unified" data-cg-directory-browser>
      <header class="cg-directory-hero">
        ${isDiscoverContext ? `<a class="cg-back-link" href="discover.html">${icon("arrow-left")} Discover</a>` : ""}
        <span class="cg-overline">Browse career places</span>
        <h1>${title}</h1>
        <p>${copy}</p>
      </header>
      <nav class="cg-directory-tabs" aria-label="Directory category">
        ${isDiscoverContext ? `
          <a href="discover-companies.html" class="${activeKind === "companies" ? "active" : ""}">${icon("building-2")} Companies</a>
          <a href="discover-universities.html" class="${activeKind === "universities" ? "active" : ""}">${icon("graduation-cap")} Universities</a>
        ` : `
          <button type="button" data-directory-kind="companies">${icon("building-2")} Companies</button>
          <button type="button" data-directory-kind="universities">${icon("graduation-cap")} Universities</button>
        `}
      </nav>
      <section class="cg-directory-controls" aria-label="Directory filters">
        <div class="cg-directory-controls-row cg-directory-controls-primary">
          <label class="cg-directory-search">${icon("search")}<input data-directory-search placeholder="Search companies, universities, programmes, locations..."></label>
          <select data-directory-sort aria-label="Sort directory">
            <option value="top">Top rated</option>
            <option value="open">Most openings / programmes</option>
            <option value="reviews">Most signals</option>
          </select>
        </div>
        <div class="cg-directory-controls-row cg-directory-controls-filters">
          <select data-directory-filter="industry" aria-label="Filter sector"><option value="">All sectors</option></select>
          <select data-directory-filter="location" aria-label="Filter location"><option value="">All locations</option></select>
          <select data-directory-filter="rating" aria-label="Filter rating">
            <option value="">Any rating</option><option value="4.5">4.5+</option><option value="4.3">4.3+</option><option value="4.1">4.1+</option>
          </select>
          <select data-directory-filter="programme" aria-label="Filter signal"><option value="">All signals</option></select>
        </div>
        <div class="cg-directory-chips">
          <button type="button" data-chip-filter="Verified">${icon("badge-check")} Verified only</button>
          <button type="button" data-chip-filter="Graduates">${icon("award")} Graduates' Choice</button>
          <button type="button" data-chip-filter="Fast">${icon("zap")} Fast responders</button>
        </div>
      </section>
      <p class="cg-directory-count"><strong data-directory-count>0</strong> shown &middot; <span data-directory-mode>Companies</span> &middot; sorted by top rated</p>
      <section class="cg-directory-grid" data-directory-grid></section>
    </section>
  `;
  if (loggedIn) {
    root.innerHTML = `<section class="container os-layout workspace-page-container">${appShell("jobs", pageMarkup, { title: "Career Directory", subtitle: copy })}</section>`;
    initSidebarToggle();
  } else {
    root.innerHTML = `<section class="container">${pageMarkup}</section>`;
  }

  const searchInput = qs("[data-directory-search]", root);
  const sortSelect = qs("[data-directory-sort]", root);
  const filterControls = qsa("[data-directory-filter]", root);
  const chipButtons = qsa("[data-chip-filter]", root);
  const kindButtons = qsa("button[data-directory-kind]", root);
  const countNode = qs("[data-directory-count]", root);
  const modeNode = qs("[data-directory-mode]", root);
  const grid = qs("[data-directory-grid]", root);
  const params = new URLSearchParams(location.search);
  if (searchInput) searchInput.value = params.get("q") || "";

  const initials = orgInitials;

  function activeCatalog() {
    return catalog.filter(org => org.category === activeKind);
  }

  function syncFilters() {
    const items = activeCatalog();
    const industry = qs('[data-directory-filter="industry"]', root);
    const location = qs('[data-directory-filter="location"]', root);
    const programme = qs('[data-directory-filter="programme"]', root);
    const fill = (select, label, values) => {
      const previous = select.value;
      select.innerHTML = `<option value="">${label}</option>${values.map(value => `<option value="${value}">${value}</option>`).join("")}`;
      if (values.includes(previous)) select.value = previous;
    };
    fill(industry, activeKind === "companies" ? "All sectors" : "All institution types", [...new Set(items.map(org => org.industry))].sort());
    fill(location, "All locations", [...new Set(items.map(org => org.location))].sort());
    fill(programme, "All signals", [...new Set(items.flatMap(org => org.tags || []))].sort());
    kindButtons.forEach(button => button.classList.toggle("active", button.dataset.directoryKind === activeKind));
    if (modeNode) modeNode.textContent = activeKind === "companies" ? "Companies" : "Universities";
  }

  function currentItems() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const selected = Object.fromEntries(filterControls.map(control => [control.dataset.directoryFilter, control.value]));
    const activeChip = qs("[data-chip-filter].active", root)?.dataset.chipFilter || "";
    let items = activeCatalog().filter(org => {
      const hay = [org.name, org.industry, org.location, org.signal, org.programme, org.summary, ...(org.tags || [])].join(" ").toLowerCase();
      if (query && !hay.includes(query)) return false;
      if (selected.industry && org.industry !== selected.industry) return false;
      if (selected.location && org.location !== selected.location) return false;
      if (selected.rating && Number(org.rating) < Number(selected.rating)) return false;
      if (selected.programme && !hay.includes(selected.programme.toLowerCase())) return false;
      if (activeChip && !hay.includes(activeChip.toLowerCase())) return false;
      return true;
    });
    const sort = sortSelect?.value || "top";
    items = items.sort((a, b) => {
      if (sort === "open") return Number(b.open || 0) - Number(a.open || 0);
      if (sort === "reviews") return Number(b.reviews || 0) - Number(a.reviews || 0);
      return Number(b.rating || 0) - Number(a.rating || 0);
    });
    return items;
  }

  function renderCards() {
    const items = currentItems();
    if (countNode) countNode.textContent = String(items.length);
    grid.innerHTML = items.map(org => {
      const savedOrgs = Array.isArray(readState().savedOrgs) ? readState().savedOrgs : [];
      const isSaved = savedOrgs.includes(org.id);
      const verified = org.tags?.some(tag => /verified|choice|employment|industry/i.test(tag));
      return `
        <article class="cg-directory-card ${org.category}">
          <div class="cg-directory-card-body">
            <header class="cg-directory-card-head">
              <span class="cg-directory-logo">${initials(org.name)}</span>
              <div>
                <small class="cg-directory-type">${org.type}</small>
                <h2>${org.name} ${verified ? icon("badge-check") : ""}</h2>
                <p>${org.industry} &middot; ${org.location}</p>
                <small>${icon("star")} ${Number(org.rating).toFixed(1)} &middot; ${org.following}</small>
              </div>
            </header>
            <section class="cg-directory-special">
              <span>What stands out</span>
              <div>
                <b>${icon("sparkles")} ${org.signal}</b>
                <b>${icon(org.type === "University" ? "graduation-cap" : "briefcase")} ${org.response}</b>
              </div>
            </section>
            <section class="cg-directory-signals">
              <span>Signals</span>
              <div>
                ${(org.tags || []).slice(0, 4).map(tag => {
                  const variant = directoryTagVariant(tag);
                  return `<b${variant ? ` class="cg-tag-${variant}"` : ""}>${tag}</b>`;
                }).join("")}
              </div>
            </section>
            <p>${org.summary}</p>
            <footer>
              <span class="cg-directory-footer-count">${org.type === "University" ? org.salary : `${org.open} open role${org.open === 1 ? "" : "s"}`}</span>
              <div class="cg-directory-footer-actions">
                <button type="button" class="cg-directory-icon-btn" data-directory-detail="${org.id}" aria-label="Reviews" title="Reviews">${icon("message-square-text")}</button>
                <button type="button" class="cg-directory-icon-btn" data-directory-save="${org.id}" aria-label="${isSaved ? "Saved" : "Save"}" title="${isSaved ? "Saved" : "Save"}">${icon(isSaved ? "bookmark-check" : "bookmark")}</button>
                ${readState().session.loggedIn
                  ? `<a class="cg-directory-ask-vera" href="posts.html?topic=${encodeURIComponent(`${org.name} ${org.type.toLowerCase()} research`)}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</a>`
                  : `<a class="cg-directory-ask-vera" href="#" data-auth-prompt="ask Vera about ${org.name}"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</a>`}
              </div>
            </footer>
          </div>
        </article>
      `;
    }).join("") || `<article class="cg-directory-empty"><h2>No matches yet.</h2><p>Try clearing a filter or searching a broader term.</p></article>`;
    qsa("[data-directory-detail]", grid).forEach(button => button.addEventListener("click", () => openOrgDetailModal(button.dataset.directoryDetail)));
    qsa("[data-directory-save]", grid).forEach(button => button.addEventListener("click", () => {
      if (!readState().session.loggedIn) {
        showToast("Create an account to save research.", "note");
        return;
      }
      const next = readState();
      next.savedOrgs = Array.isArray(next.savedOrgs) ? next.savedOrgs : [];
      const id = button.dataset.directorySave;
      next.savedOrgs = next.savedOrgs.includes(id) ? next.savedOrgs.filter(savedId => savedId !== id) : [...next.savedOrgs, id];
      writeState(next);
      renderCards();
      showToast(next.savedOrgs.includes(id) ? "Saved for comparison." : "Removed from saved.");
    }));
    bindProtectedPrompts(grid);
    createIcons();
  }

  function refresh() {
    syncFilters();
    renderCards();
  }

  kindButtons.forEach(button => button.addEventListener("click", () => {
    activeKind = button.dataset.directoryKind;
    history.replaceState(null, "", `${location.pathname}#${activeKind}`);
    chipButtons.forEach(item => item.classList.remove("active"));
    refresh();
  }));
  [searchInput, sortSelect, ...filterControls].filter(Boolean).forEach(control => control.addEventListener("input", renderCards));
  chipButtons.forEach(button => button.addEventListener("click", () => {
    const wasActive = button.classList.contains("active");
    chipButtons.forEach(item => item.classList.remove("active"));
    if (!wasActive) button.classList.add("active");
    renderCards();
  }));
  refresh();
}
function reviewStars(rating) {
  const rounded = Math.round(Number(rating) || 0);
  return `<span class="cg-review-stars" aria-label="${(Number(rating) || 0).toFixed(1)} out of 5">${[1, 2, 3, 4, 5].map(step => `<b class="${step <= rounded ? "filled" : ""}">${icon("star")}</b>`).join("")}</span>`;
}

function historyTrendSummary(attempts) {
  const first = attempts[0], last = attempts[attempts.length - 1];
  const verb = last.score > first.score ? "improved" : last.score < first.score ? "declined" : "held steady";
  return `Mock interview scores ${verb} from ${first.score}% to ${last.score}% over ${attempts.length} attempt${attempts.length === 1 ? "" : "s"}.`;
}

function historyTrendSvg(attempts, width = 600) {
  const height = 190, padX = 60, topY = 30, bottomY = 140;
  const points = attempts.map((attempt, index) => ({
    ...attempt,
    x: attempts.length === 1 ? width / 2 : padX + (index * (width - padX * 2)) / (attempts.length - 1),
    y: bottomY - (attempt.score / 100) * (bottomY - topY)
  }));
  const linePoints = points.map(p => `${p.x},${p.y}`).join(" ");
  const gridlines = [0, 25, 50, 75, 100].map(mark => {
    const y = bottomY - (mark / 100) * (bottomY - topY);
    return `<line x1="${padX}" y1="${y}" x2="${width - 20}" y2="${y}" stroke="#1b2e28" stroke-opacity="${mark === 0 ? 0.16 : 0.08}" stroke-width="1" ${mark === 0 ? "" : 'stroke-dasharray="4 4"'}/>
      <text x="${padX - 10}" y="${y + 4}" text-anchor="end" class="cg-history-axis-label">${mark}%</text>`;
  }).join("");
  return `<svg class="cg-history-trend" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
    <g aria-hidden="true">${gridlines}</g>
    <polyline points="${linePoints}"></polyline>
    ${points.map((p, index) => {
      const parts = [`Attempt ${index + 1}`, p.dateLabel, `${p.score}%`].filter(Boolean).join(" - ");
      const tooltip = p.feedback ? `${parts} - “${p.feedback}”` : parts;
      return `
      <g>
        <circle cx="${p.x}" cy="${p.y}" r="7" tabindex="0" role="img" aria-label="${tooltip}" data-tooltip="${tooltip}"></circle>
        <text x="${p.x}" y="${Math.max(22, p.y - 20)}" text-anchor="${index === 0 ? "start" : index === points.length - 1 ? "end" : "middle"}" class="cg-history-value" aria-hidden="true">${p.score}%</text>
        <text x="${p.x}" y="${height - 15}" text-anchor="middle" class="cg-history-label" aria-hidden="true">Attempt ${index + 1}</text>
      </g>
    `;
    }).join("")}
  </svg>`;
}

function bindHistoryTooltips(root) {
  qsa(".cg-history-trend circle[data-tooltip]", root).forEach(point => {
    point.addEventListener("mouseenter", () => showMarketTooltip(point));
    point.addEventListener("mouseleave", hideMarketTooltip);
    point.addEventListener("focus", () => showMarketTooltip(point));
    point.addEventListener("blur", hideMarketTooltip);
  });
}

function worthTimelineGrowthPct(points) {
  const first = points[0].value;
  const last = points[points.length - 1].value;
  return Math.round(((last - first) / first) * 100);
}

function worthTimelineSummary(points) {
  const first = points[0];
  const last = points[points.length - 1];
  const growthPct = worthTimelineGrowthPct(points);
  const milestones = points.slice(1).map(p => `${p.display} at ${p.label} (${p.body})`).join(", ");
  return `Projected Career Value grows from ${first.display} (${first.label}) to ${last.display} (${last.label}), a ${growthPct}% increase across milestones: ${milestones}.`;
}

function worthTimelineCaption(points) {
  const first = points[0];
  const last = points[points.length - 1];
  const growthPct = worthTimelineGrowthPct(points);
  return `<strong>${first.display} to ${last.display} (+${growthPct}%)</strong> projected. Checkpoints shown are roadmap milestones, not evenly spaced in time.`;
}

function worthTimelineSvg(points, width = 1200, height = 360) {
  const padX = 16;
  const topPad = 46;
  const bottomPad = 24;
  const plotTop = topPad;
  const plotBottom = height - bottomPad;
  const values = points.map(p => p.value);
  const min = Math.min(...values), max = Math.max(...values), range = (max - min) || 1;
  const scaled = points.map(p => ({
    ...p,
    x: padX + (p.xPct / 100) * (width - padX * 2),
    y: plotBottom - ((p.value - min) / range) * (plotBottom - plotTop)
  }));
  const firstX = scaled[0].x;
  const lastX = scaled[scaled.length - 1].x;
  const linePoints = scaled.map(p => `${p.x},${p.y}`).join(" ");
  const areaPath = `M${scaled.map(p => `${p.x} ${p.y}`).join(" L")} L${lastX} ${plotBottom} L${firstX} ${plotBottom} Z`;
  const gridlines = [0.2, 0.4, 0.6, 0.8].map(frac => {
    const y = plotBottom - frac * (plotBottom - plotTop);
    return `<line x1="${firstX}" y1="${y}" x2="${lastX}" y2="${y}" stroke="#1b2e28" stroke-opacity="0.08" stroke-width="1" stroke-dasharray="4 4"/>`;
  }).join("");
  const baseline = `<line x1="${firstX}" y1="${plotBottom}" x2="${lastX}" y2="${plotBottom}" stroke="#1b2e28" stroke-opacity="0.14" stroke-width="1"/>`;
  return `<svg class="cg-worth-chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${worthTimelineSummary(points)}">
    <defs><linearGradient id="worthFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0b6d65" stop-opacity=".28"/><stop offset="100%" stop-color="#0b6d65" stop-opacity="0"/></linearGradient></defs>
    <g aria-hidden="true">${gridlines}${baseline}</g>
    <path d="${areaPath}" fill="url(#worthFill)"/>
    <polyline points="${linePoints}" fill="none" stroke="#0b5d58" stroke-width="5"/>
    ${scaled.map((p, i) => `
      <g>
        <circle cx="${p.x}" cy="${p.y}" r="9" fill="#0b5d58" stroke="#fffaf2" stroke-width="4"></circle>
        <text x="${p.x}" y="${Math.max(28, p.y - 24)}" text-anchor="${i === 0 ? "start" : i === scaled.length - 1 ? "end" : "middle"}" class="cg-worth-chart-value">${p.display}</text>
      </g>
    `).join("")}
  </svg>`;
}

/* Small no-axis sparkline for the Value Growth momentum block - conveys the
   trend/shape only, deliberately without printing any RM figures (career
   value doesn't move in exact ringgit day to day). */
function momentumSparkline(values, width = 240, height = 60) {
  const min = Math.min(...values), max = Math.max(...values), range = (max - min) || 1;
  const stepX = width / (values.length - 1);
  const pts = values.map((v, i) => ({ x: i * stepX, y: height - 7 - ((v - min) / range) * (height - 14) }));
  const line = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `M${pts.map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L")} L${width} ${height} L0 ${height} Z`;
  const last = pts[pts.length - 1];
  return `<svg class="cg-momentum-spark-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Career Value trending gently upward over the last month">
    <defs><linearGradient id="momSpark" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0b6d65" stop-opacity=".22"/><stop offset="100%" stop-color="#0b6d65" stop-opacity="0"/></linearGradient></defs>
    <path d="${area}" fill="url(#momSpark)"/>
    <polyline points="${line}" fill="none" stroke="#0b6d65" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${last.x.toFixed(1)}" cy="${last.y.toFixed(1)}" r="4.5" fill="#0b6d65" stroke="#fffaf2" stroke-width="2.5"/>
  </svg>`;
}

const OPEN_ROLE_POOL = {
  Banking: ["Product Analyst", "Data Analyst", "Digital Banking Associate", "Risk Analyst"],
  Technology: ["Product Manager", "Data Analyst", "Software Engineer", "Growth Associate"],
  "Energy Tech": ["AI Product Manager", "Data Engineer", "Business Analyst", "Digital Transformation Associate"],
  Energy: ["Graduate Product Analyst", "Data Analyst", "Commercial Analyst", "Digital Product Associate"],
  Fintech: ["Product Manager, Payments", "Data Analyst", "Backend Engineer", "Risk & Fraud Analyst"],
  Marketplace: ["Growth Product Manager", "Data Analyst", "Operations Analyst", "Platform Engineer"],
  SaaS: ["Product Manager", "Customer Success Manager", "Full-stack Engineer", "Product Designer"],
  AI: ["AI Product Manager", "Machine Learning Engineer", "Data Scientist", "Platform Engineer"]
};
const DEFAULT_OPEN_ROLES = ["Product Manager", "Data Analyst", "Business Analyst", "Associate"];

function openRolesForOrg(org) {
  const realJobs = DATA.jobs.filter(job => job.company === org.name);
  const pool = OPEN_ROLE_POOL[org.industry] || DEFAULT_OPEN_ROLES;
  const usedTitles = new Set(realJobs.map(job => job.title));
  const placeholderCount = Math.max(0, Math.min(4, org.open || 0) - realJobs.length);
  const placeholders = pool.filter(title => !usedTitles.has(title)).slice(0, placeholderCount);
  return [
    ...realJobs.map(job => ({ title: job.title, real: true, job })),
    ...placeholders.map(title => ({ title, real: false }))
  ];
}

function openOrgDetailModal(orgId) {
  const { catalog } = buildOrgCatalog();
  const org = catalog.find(item => item.id === orgId) || [...DATA.companies, ...DATA.universities].find(item => item.id === orgId);
  if (!org) return;
  const scoreRows = org.scores
    ? [["Culture", org.scores.culture], ["Growth", org.scores.growth], ["Pay", org.scores.pay], ["Balance", org.scores.balance]]
    : [];
  const allOpenRoles = org.type !== "University" ? openRolesForOrg(org) : [];
  const openRoles = allOpenRoles.slice(0, 3);
  const loggedIn = Boolean(readState().session.loggedIn);
  const veraMark = `<img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI">`;
  const askVeraLink = (topic, label) => loggedIn
    ? `<a class="btn btn-cyan" href="posts.html?topic=${encodeURIComponent(topic)}#messages">${veraMark} ${label}</a>`
    : `<button type="button" class="btn btn-cyan" data-auth-prompt="ask Vera about ${org.name}">${veraMark} ${label}</button>`;
  const rolesSectionHref = `company-profile.html?org=${org.id}#open-roles`;
  const viewRoleLink = () => `<a class="cg-org-detail-role-link" href="${loggedIn ? rolesSectionHref : loginRedirectHref(rolesSectionHref)}">View role ${icon("arrow-right")}</a>`;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-org-detail-modal" role="dialog" aria-label="${org.name} details and reviews">
      <div class="modal-head">
        <div class="cg-org-detail-title">
          <span class="cg-directory-logo">${orgInitials(org.name)}</span>
          <div>
            <div class="section-kicker">${org.type} - ${org.industry}</div>
            <h2>${org.name}</h2>
            <p class="muted small">${org.location}${org.size ? ` - ${org.size}` : ""}</p>
          </div>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-org-detail-rating">
        <strong>${Number(org.rating).toFixed(1)}</strong>
        ${reviewStars(org.rating)}
        <span>${org.reviews} review signals</span>
        ${loggedIn
          ? `<a class="btn btn-primary" href="company-profile.html?org=${org.id}">${icon("arrow-up-right")} View full profile</a>`
          : `<a class="btn btn-primary" href="${loginRedirectHref(`company-profile.html?org=${org.id}`)}">${icon("arrow-up-right")} View full profile</a>`}
        <button class="btn btn-ghost" type="button" data-write-review>${icon("pen-line")} Write a review</button>
      </div>
      ${openRoles.length ? `
        <div class="cg-org-detail-roles">
          <div class="cg-org-detail-roles-head">
            <h3>${icon("briefcase")} Open roles <span>(${org.open})</span></h3>
            ${askVeraLink(`open roles at ${org.name}`, "Ask Vera")}
          </div>
          ${openRoles.map(role => role.real ? `
            <article>
              <div><h4>${role.job.title}</h4><p>${role.job.location} - ${role.job.salary}</p></div>
              <button type="button" class="cg-org-detail-role-link" data-org-role-details="${role.job.id}">View role ${icon("arrow-right")}</button>
            </article>
          ` : `
            <article>
              <div><h4>${role.title}</h4><p>${org.location} - ${org.salary}</p></div>
              ${viewRoleLink()}
            </article>
          `).join("")}
          ${org.open > openRoles.length ? `<p class="cg-org-detail-roles-more">+${org.open - openRoles.length} more roles - view the full profile for the complete list.</p>` : ""}
        </div>
      ` : ""}
      ${scoreRows.length ? `
        <div class="cg-org-detail-scores">
          ${scoreRows.map(([label, value]) => `<div><span>${label}</span><i><em style="width:${Math.round((Number(value) / 5) * 100)}%"></em></i><b>${Number(value).toFixed(1)}</b></div>`).join("")}
        </div>
      ` : ""}
      ${(org.highlights?.length || org.watchouts?.length) ? `
        <div class="cg-org-detail-proscons">
          ${org.highlights?.length ? `<section><h3>${icon("thumbs-up")} What people like</h3><ul>${org.highlights.slice(0, 1).map(item => `<li>${item}</li>`).join("")}</ul>${org.highlights.length > 1 ? `<p class="cg-org-detail-more">+${org.highlights.length - 1} more in full profile</p>` : ""}</section>` : ""}
          ${org.watchouts?.length ? `<section class="cons"><h3>${icon("thumbs-down")} Watch out for</h3><ul>${org.watchouts.slice(0, 1).map(item => `<li>${item}</li>`).join("")}</ul>${org.watchouts.length > 1 ? `<p class="cg-org-detail-more">+${org.watchouts.length - 1} more in full profile</p>` : ""}</section>` : ""}
        </div>
      ` : ""}
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  bindProtectedPrompts(backdrop);
  qs("[data-write-review]", backdrop)?.addEventListener("click", () => {
    openReviewModal(org, () => {
      backdrop.remove();
      openOrgDetailModal(org.id);
    });
  });
  qsa("[data-org-role-details]", backdrop).forEach(btn => btn.addEventListener("click", () => {
    backdrop.remove();
    openApplicationDetailsModal(btn.dataset.orgRoleDetails);
  }));
  createIcons();
}

function openReviewModal(target, onSubmitted) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <form class="modal card" data-review-form>
      <div class="modal-head">
        <div>
          <div class="section-kicker">Write review</div>
          <h2>${target.name}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <div class="form-grid">
        <label>Rating <input class="field" name="rating" type="number" min="1" max="5" step="0.1" value="4.5"></label>
        <label>Your role <input class="field" name="author" placeholder="Intern, graduate, employee"></label>
        <label>Title <input class="field" name="title" placeholder="What should others know?"></label>
        <label>Review <textarea class="field" name="body" rows="5" placeholder="Share your honest experience"></textarea></label>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" type="submit">${icon("send")} Submit review</button>
        <button class="btn btn-ghost" type="button" data-close>Cancel</button>
      </div>
    </form>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  qs("[data-review-form]", backdrop).addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") || "").trim();
    const body = String(form.get("body") || "").trim();
    if (!title || !body) return;
    const state = readState();
    state.reviews.unshift({
      id: `r-${Date.now()}`,
      targetId: target.id,
      author: String(form.get("author") || "CareerGo user").trim() || "CareerGo user",
      rating: Number(form.get("rating") || 4.5),
      title,
      body,
      date: "Today"
    });
    writeState(state);
    backdrop.remove();
    showToast("Review submitted. Thanks for helping others decide.");
    if (typeof onSubmitted === "function") onSubmitted();
    else location.reload();
  });
  createIcons();
}

const INDUSTRY_DEPARTMENTS = {
  Banking: "Retail Banking &middot; Risk &middot; Digital &middot; Operations",
  Technology: "Product &middot; Engineering &middot; Growth &middot; Operations &middot; Finance",
  "Energy Tech": "Data & AI &middot; Enterprise Platforms &middot; Operations",
  Energy: "Commercial &middot; Digital &middot; Operations &middot; Sustainability",
  Fintech: "Product &middot; Payments &middot; Risk &middot; Engineering",
  Marketplace: "Product &middot; Engineering &middot; Growth &middot; Operations &middot; Finance",
  SaaS: "Product &middot; Engineering &middot; Customer Success &middot; Growth",
  AI: "AI Research &middot; Product &middot; Platform Engineering &middot; Operations",
  "Private University": "Business &middot; Technology &middot; Design &middot; Student Affairs",
  "Public University": "Science &amp; Engineering &middot; Business &middot; Computer Science &middot; Arts &amp; Social Science",
  "Business School": "Faculty &middot; Admissions &middot; Careers &middot; Alumni Relations"
};
const INDUSTRY_SKILLS = {
  Banking: "Stakeholder management, Risk analysis, Communication",
  Technology: "Product sense, Analytics, Cross-functional",
  "Energy Tech": "Data literacy, Enterprise workflows, Stakeholder alignment",
  Energy: "Commercial analysis, Stakeholder management, Reporting",
  Fintech: "Payments domain, Risk thinking, Cross-functional",
  Marketplace: "Marketplace intuition, Analytics, Cross-functional",
  SaaS: "Customer empathy, Product craft, Async communication",
  AI: "ML literacy, Data intuition, Technical communication"
};
const INDUSTRY_TOOLS = {
  Banking: "Excel, Tableau, SQL",
  Technology: "Figma, Jira, Amplitude",
  "Energy Tech": "Power BI, SQL, Confluence",
  Energy: "Excel, SAP, Power BI",
  Fintech: "SQL, Metabase, Jira",
  Marketplace: "Amplitude, Metabase, Jira",
  SaaS: "Figma, Linear, Mixpanel",
  AI: "Python notebooks, MLflow, Jira"
};

function orgWorkMode(org) {
  const tags = (org.tags || []).join(" ").toLowerCase();
  if (tags.includes("remote-first") || tags.includes("async")) return "Remote";
  if (tags.includes("on-site") || tags.includes("onsite")) return "On-site";
  return "Hybrid";
}

function orgHiringPct(org) {
  return Math.min(28, 6 + Math.round((org.open || 0) * 3));
}

function orgGrowingTag(org) {
  return (org.tags || []).find(tag => /fast|growing|scale|hiring/i.test(tag)) || "Actively hiring";
}

function orgOffices(org) {
  const offices = [org.location];
  if (/1,000\+|5,000\+|10,000\+/.test(org.size || "")) offices.push("Jakarta", "Bangkok");
  return offices;
}

function parseSalaryBand(salaryText) {
  const match = String(salaryText || "").match(/RM\s*([\d.]+)k\s*-\s*([\d.]+)k/i);
  if (!match) return null;
  return { min: Math.round(Number(match[1]) * 1000), max: Math.round(Number(match[2]) * 1000) };
}

function formatRM(value) {
  return `RM ${Math.round(value).toLocaleString("en-MY")}`;
}

function roleSalaryLabel(org, title, realJobSalary) {
  if (realJobSalary) return realJobSalary;
  const band = parseSalaryBand(org.salary);
  if (!band) return org.salary || "Ask Vera";
  const multiplier = /senior|lead|principal/i.test(title) ? 1.3 : /analyst|associate|intern/i.test(title) ? 0.8 : 1;
  return `${formatRM(band.min * multiplier)} - ${formatRM(band.max * multiplier)}`;
}

function roleMatchLabel(job, index) {
  if (job) return job.match;
  return Math.max(58, 88 - index * 11);
}

function similarOrgsFor(org, catalog) {
  const sameIndustry = catalog.filter(item => item.id !== org.id && item.type === org.type && item.industry === org.industry);
  const rest = catalog.filter(item => item.id !== org.id && item.type === org.type && item.industry !== org.industry).reverse();
  return [...sameIndustry, ...rest].slice(0, 3);
}

function renderCompanyProfile() {
  const root = qs("[data-company-profile]");
  if (!root) return;
  if (!readState().session.loggedIn) {
    location.href = loginRedirectHref(`company-profile.html${location.search}`);
    return;
  }
  const { catalog } = buildOrgCatalog();
  const orgId = new URLSearchParams(location.search).get("org");
  const org = catalog.find(item => item.id === orgId);
  if (!org) {
    root.innerHTML = `
      <div class="locked-state-wrap">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Company not found</div>
          <h1 class="section-title">We could not find that company profile.</h1>
          <p class="section-sub">It may have been removed, or the link is out of date.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="discover-companies.html">${icon("arrow-left")} Back to companies</a></div>
        </div>
      </div>
    `;
    createIcons();
    return;
  }
  const state = readState();
  const isCompany = org.type !== "University";
  const isSaved = (state.savedOrgs || []).includes(org.id);
  const workMode = orgWorkMode(org);
  const hiringPct = orgHiringPct(org);
  const growingTag = orgGrowingTag(org);
  const reviews = [...(state.reviews || []), ...DATA.reviews]
    .filter((review, index, all) => all.findIndex(item => item.id === review.id) === index)
    .filter(review => review.targetId === org.id);
  const openRoles = isCompany ? openRolesForOrg(org) : [];
  const departments = INDUSTRY_DEPARTMENTS[org.industry] || "Product &middot; Operations &middot; Growth";
  const commonRolesList = [...new Set(openRoles.map(role => role.title))].slice(0, 3);
  const commonRoles = commonRolesList.length ? commonRolesList.join(" &middot; ") : (OPEN_ROLE_POOL[org.industry] || DEFAULT_OPEN_ROLES).slice(0, 3).join(" &middot; ");
  const offices = orgOffices(org);
  const salaryBand = parseSalaryBand(org.salary);
  const skills = INDUSTRY_SKILLS[org.industry] || "Analytics, Communication, Cross-functional";
  const tools = INDUSTRY_TOOLS[org.industry] || "Slack, Notion, Jira";
  const cultureRow = {
    mentorship: /mentor|graduate/i.test((org.tags || []).join(" ")) ? "Structured pairing." : "Ad-hoc.",
    workLife: workMode === "Remote" ? "Flexible, async-friendly." : "Balanced with sprint peaks."
  };
  const similar = similarOrgsFor(org, catalog);
  const requirementChecks = isCompany ? [] : universityRequirementChecks(org, state.profile);
  const requirementsMet = requirementChecks.filter(check => check.status === "ok").length;
  const requirementStatusIcon = { ok: "check-circle-2", gap: "alert-triangle", info: "info" };
  const gradEmploymentMatch = isCompany ? null : String(org.salary || "").match(/\d+%/);

  root.innerHTML = `
    <section class="cg-cp">
      <a class="cg-cp-back" href="${isCompany ? "discover-companies.html" : "discover-universities.html"}">${icon("arrow-left")} ${isCompany ? "Companies" : "Universities"}</a>

      <article class="cg-cp-hero">
        <div class="cg-cp-hero-top">
          <span class="cg-cp-mono">${orgInitials(org.name)}</span>
          <div class="cg-cp-hero-id">
            <span class="cg-section-kicker">${isCompany ? "Company profile" : "University profile"}</span>
            <h1>${org.name}</h1>
            <p class="cg-cp-hero-meta">${icon("building-2")} ${org.industry} &middot; ${icon("map-pin")} ${org.location} &middot; ${org.size} &middot; ${workMode}</p>
          </div>
          <div class="cg-cp-hero-actions">
            ${isCompany ? `<a class="btn btn-primary" href="#open-roles">View ${org.open} open role${org.open === 1 ? "" : "s"} ${icon("arrow-right")}</a>` : ""}
            <button type="button" class="btn btn-ghost" data-cp-save="${org.id}">${icon(isSaved ? "bookmark-check" : "bookmark")} ${isSaved ? "Saved" : "Save"}</button>
            ${isCompany ? `<a class="pill cg-cp-autopilot-pill" href="autopilot.html#autopilot-console">${icon("bot")} Monitor with Autopilot</a>` : ""}
          </div>
        </div>
        <div class="cg-cp-hero-stats">
          <span>${icon("star")} <strong>${Number(org.rating).toFixed(1)}</strong> &middot; ${org.reviews} reviews</span>
          <span>${icon("trending-up")} ${hiringPct}% hiring</span>
          <span class="pill">${growingTag}</span>
        </div>
        <div class="cg-cp-vera">
          <span class="cg-cp-vera-label">${icon("bot")} Vera's read</span>
          <p>${org.highlights?.length ? org.highlights.slice(0, 2).join(" ") : (org.summary || org.signal)}</p>
          ${org.watchouts?.length ? `<p class="cg-cp-vera-watch"><b>Watch:</b> ${org.watchouts[0]}</p>` : ""}
        </div>
      </article>

      <div class="cg-cp-row">
        <article class="cg-cp-card cg-cp-overview">
          <h2>Overview</h2>
          <p>${org.summary}</p>
          <div class="cg-cp-overview-grid">
            <div><span class="cg-cp-label">What they do</span><p>${org.summary}</p></div>
            <div><span class="cg-cp-label">Who they hire</span><p>${commonRolesList.length ? `${commonRolesList.join(", ")} roles.` : "Product, growth, and operations roles."}</p></div>
          </div>
        </article>
        <aside class="cg-cp-card cg-cp-glance">
          <span class="cg-section-kicker">At a glance</span>
          <div class="cg-cp-glance-row"><span>Open roles</span><strong>${org.open}</strong></div>
          <div class="cg-cp-glance-row"><span>Size</span><strong>${org.size}</strong></div>
          <div class="cg-cp-glance-row"><span>Work mode</span><strong>${workMode}</strong></div>
          <div class="cg-cp-glance-row"><span>Hiring</span><strong>${icon("trending-up")} ${hiringPct}%</strong></div>
          <div class="cg-cp-glance-row"><span>Rating</span><strong>${Number(org.rating).toFixed(1)} / 5</strong></div>
          ${org.externalUrl ? `
            <div class="cg-cp-glance-row">
              <span>${isCompany ? "Careers page" : "Admissions page"}</span>
              <strong><a class="cg-cp-external-link" href="${org.externalUrl}" target="_blank" rel="noopener">Visit ${icon("external-link")}</a></strong>
            </div>
          ` : ""}
        </aside>
      </div>

      ${isCompany ? `
      <div class="cg-cp-row">
        <article class="cg-cp-card">
          <div class="cg-cp-two-col">
            <div>
              <span class="cg-cp-label">Departments</span><p>${departments}</p>
              <span class="cg-cp-label">Common roles</span><p>${commonRoles}</p>
            </div>
            <div><span class="cg-cp-label">Offices</span><p>${offices.join(" &middot; ")}</p></div>
          </div>
        </article>
        <aside class="cg-cp-card cg-cp-autopilot-card">
          <span class="cg-section-kicker">${icon("bot")} Autopilot</span>
          <p>Let Autopilot monitor new roles at ${org.name} and surface them when they match your rules.</p>
          <a class="btn btn-primary" href="autopilot.html#autopilot-console">Set up Autopilot rule ${icon("arrow-right")}</a>
        </aside>
      </div>

      <section class="cg-cp-roles" id="open-roles">
        <span class="cg-section-kicker">Open roles</span>
        <h2>${org.open} role${org.open === 1 ? "" : "s"} at ${org.name}</h2>
        <div class="cg-cp-role-list">
          ${openRoles.map((role, index) => {
            const job = role.real ? role.job : null;
            const match = roleMatchLabel(job, index);
            const salary = roleSalaryLabel(org, role.title, job?.salary);
            return `
            <article class="cg-cp-role-row">
              <div>
                <h3>${role.title} <span class="cg-cp-role-match">${match}% match</span></h3>
                <p>${icon("map-pin")} ${org.location} &middot; ${workMode} &middot; ${icon("briefcase")} ${salary}</p>
              </div>
              <div class="cg-cp-role-actions">
                <button type="button" class="btn btn-ghost" data-cp-role-save="${job ? job.id : `${org.id}-${index}`}">${icon("bookmark")} Save</button>
                ${job ? `<button type="button" class="btn btn-primary" data-cp-role-apply="${job.id}">${icon("send")} Apply ${icon("arrow-right")}</button>` : `<a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent(`the ${role.title} role at ${org.name}`)}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera ${icon("arrow-right")}</a>`}
              </div>
            </article>
          `;
          }).join("")}
        </div>
        <p class="cg-cp-roles-footer">${icon("bot")} <a href="autopilot.html#autopilot-console">Autopilot: monitor similar roles at ${org.name}</a></p>
      </section>

      <div class="cg-cp-row">
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Requirements</span>
          <h2>What they look for</h2>
          <div class="cg-cp-kv"><span>Education</span><strong>Bachelor's or equivalent experience.</strong></div>
          <div class="cg-cp-kv"><span>Experience</span><strong>2+ years typical for PM.</strong></div>
          <div class="cg-cp-kv"><span>Portfolio</span><strong>Optional for PM.</strong></div>
          <div class="cg-cp-kv"><span>Language</span><strong>English.</strong></div>
          <div class="cg-cp-kv"><span>Skills</span><strong>${skills}</strong></div>
          <div class="cg-cp-kv"><span>Tools</span><strong>${tools}</strong></div>
        </article>
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Hiring process</span>
          <h2>What to expect</h2>
          <ol class="cg-cp-steps">
            <li><b>1</b><div><strong>Application review</strong><span>1 week.</span></div></li>
            <li><b>2</b><div><strong>Recruiter screen</strong><span>30 min.</span></div></li>
            <li><b>3</b><div><strong>Manager interview</strong><span>45 min.</span></div></li>
            <li><b>4</b><div><strong>Case</strong><span>Take-home.</span></div></li>
            <li><b>5</b><div><strong>Panel</strong><span>2 interviews.</span></div></li>
          </ol>
        </article>
      </div>

      <div class="cg-cp-row">
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Salary</span>
          <h2>Typical bands</h2>
          ${salaryBand ? `
            <div class="cg-cp-kv"><span>PM</span><strong>${formatRM(salaryBand.min)} - ${formatRM(salaryBand.max)}</strong></div>
            <div class="cg-cp-kv"><span>Senior PM</span><strong>${formatRM(salaryBand.min * 1.3)} - ${formatRM(salaryBand.max * 1.3)}</strong></div>
          ` : `<p class="muted">Ask Vera for a benchmark on this employer.</p>`}
        </article>
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Benefits</span>
          <h2>What comes with the role</h2>
          <div class="cg-cp-benefits">
            <span>${icon("check-circle")} Medical</span>
            <span>${icon("check-circle")} ${workMode}</span>
            <span>${icon("check-circle")} Learning budget</span>
            <span>${icon("check-circle")} Bonus</span>
          </div>
        </article>
      </div>

      <article class="cg-cp-card">
        <span class="cg-section-kicker">Growth &amp; culture</span>
        <h2>How teams operate here</h2>
        <div class="cg-cp-culture-grid">
          <div><span class="cg-cp-label">Mentorship</span><p>${cultureRow.mentorship}</p></div>
          <div><span class="cg-cp-label">Training</span><p>Internal knowledge shares.</p></div>
          <div><span class="cg-cp-label">Promotion</span><p>Every ~18 months.</p></div>
          <div><span class="cg-cp-label">Work-life</span><p>${cultureRow.workLife}</p></div>
          <div><span class="cg-cp-label">Management</span><p>OKRs; regular 1:1s.</p></div>
          <div><span class="cg-cp-label">Overtime</span><p>Occasional.</p></div>
        </div>
      </article>
      ` : `
      <div class="cg-cp-row">
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Programmes</span>
          <h2>Faculties &amp; programme areas</h2>
          <p>${departments}</p>
        </article>
        <aside class="cg-cp-card cg-cp-glance">
          <span class="cg-section-kicker">Graduate outcomes</span>
          ${gradEmploymentMatch ? `<div class="cg-cp-glance-row"><span>Employed within 6 months</span><strong>${gradEmploymentMatch[0]}</strong></div>` : ""}
          <div class="cg-cp-glance-row"><span>Alumni network</span><strong>${org.following}</strong></div>
        </aside>
      </div>

      ${requirementChecks.length ? `
      <article class="cg-cp-card">
        <span class="cg-section-kicker">Entry requirements</span>
        <h2>Your match against admission requirements</h2>
        <p class="cg-uni-requirements-match">${icon("clipboard-list")} <b>${requirementsMet}/${requirementChecks.length} matched</b> against your profile</p>
        <div class="cg-uni-requirements">
          <ul>
            ${requirementChecks.map(check => `
              <li class="${check.status}">
                ${icon(requirementStatusIcon[check.status])}
                <div><strong>${check.label}</strong><p>${check.note}</p></div>
              </li>
            `).join("")}
          </ul>
        </div>
      </article>
      ` : ""}

      <div class="cg-cp-row">
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Campus</span>
          <h2>Where you'd study</h2>
          <div class="cg-cp-kv"><span>Location</span><strong>${org.location}</strong></div>
          <div class="cg-cp-kv"><span>Student body</span><strong>${org.size}</strong></div>
          <div class="cg-cp-kv"><span>Study mode</span><strong>${workMode}</strong></div>
        </article>
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Alumni</span>
          <h2>Network signal</h2>
          <p>${org.following}, based on graduate engagement and reviews shared on CareerGo.</p>
        </article>
      </div>
      `}

      <section class="cg-cp-reviews">
        <span class="cg-section-kicker">Reviews</span>
        <h2>What ${org.reviews} people say</h2>
        <div class="cg-cp-review-list">
          ${reviews.length ? reviews.map(review => `
            <article class="cg-cp-review-card">
              <header><span>${review.author}</span>${reviewStars(review.rating)}</header>
              <h3>${review.title}</h3>
              <p>${review.body}</p>
              ${review.pros ? `<p class="cg-cp-review-pros"><b>Pros:</b> ${review.pros}</p>` : ""}
              ${review.watch ? `<p class="cg-cp-review-watch"><b>Watch:</b> ${review.watch}</p>` : ""}
            </article>
          `).join("") : `<p class="cg-cp-review-empty">No reviews yet. Be the first to share your experience.</p>`}
        </div>
        <button type="button" class="btn btn-ghost" data-cp-write-review>${icon("pen-line")} Write a review</button>
      </section>

      ${similar.length ? `
      <section class="cg-cp-similar">
        <span class="cg-section-kicker">Similar ${isCompany ? "companies" : "universities"}</span>
        <h2>Also worth exploring</h2>
        <div class="cg-cp-similar-grid">
          ${similar.map(item => `
            <a class="cg-cp-similar-card" href="company-profile.html?org=${item.id}">
              <span class="cg-cp-mono small">${orgInitials(item.name)}</span>
              <div><h3>${item.name}</h3><p>${item.industry}</p></div>
              <small>${item.signal}</small>
            </a>
          `).join("")}
        </div>
      </section>
      ` : ""}

      ${veraWidgetMarkup()}
    </section>
  `;
  createIcons();
  if (location.hash === "#open-roles") {
    window.setTimeout(() => qs(location.hash, root)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }
  wireVeraWidget(root);
  qs("[data-cp-save]", root)?.addEventListener("click", () => {
    const next = readState();
    next.savedOrgs = Array.isArray(next.savedOrgs) ? next.savedOrgs : [];
    next.savedOrgs = next.savedOrgs.includes(org.id) ? next.savedOrgs.filter(id => id !== org.id) : [...next.savedOrgs, org.id];
    writeState(next);
    showToast(next.savedOrgs.includes(org.id) ? "Saved for comparison." : "Removed from saved.");
    renderCompanyProfile();
  });
  qs("[data-cp-write-review]", root)?.addEventListener("click", () => {
    openReviewModal(org, () => renderCompanyProfile());
  });
  qsa("[data-cp-role-apply]", root).forEach(btn => btn.addEventListener("click", () => {
    const jobId = btn.dataset.cpRoleApply;
    const job = DATA.jobs.find(item => item.id === jobId);
    updateApplicationStage(jobId, "applied");
    showToast(job ? `Applied to ${job.title} at ${job.company}.` : "Application added to your tracker.");
    renderCompanyProfile();
  }));
  qsa("[data-cp-role-save]", root).forEach(btn => btn.addEventListener("click", () => {
    const jobId = btn.dataset.cpRoleSave;
    const job = DATA.jobs.find(item => item.id === jobId);
    if (job) {
      const next = readState();
      const nowSaved = next.savedJobs.includes(jobId);
      next.savedJobs = nowSaved ? next.savedJobs.filter(id => id !== jobId) : [...next.savedJobs, jobId];
      writeState(next);
      showToast(nowSaved ? "Role removed from saved jobs." : "Role saved to your dashboard.");
    } else {
      showToast("Role saved. Vera will track it for you.");
    }
  }));
}

const MISSION_MODAL_STEPS = {
  Interview: [
    "Practice the core story or case out loud once",
    "Write down two follow-up questions you might get"
  ],
  Learning: [
    "Name the specific skill gap you're closing",
    "Finish one practice exercise or resource on it"
  ],
  Application: [
    "Review the role or company notes for context",
    "Take the next outreach or application action"
  ],
  Networking: [
    "Find one specific detail about the contact or company",
    "Send or draft a short, specific note"
  ]
};

function openMissionModal(task) {
  const mission = task.mission;
  if (!mission) return;
  const category = task.category || (task.meta || "").split(" - ")[0];
  const steps = MISSION_MODAL_STEPS[category] || MISSION_MODAL_STEPS.Application;
  const checked = new Set();

  const current = readState();
  if (!((current.missionProgress[mission.id] || 0) > 0)) {
    current.missionProgress = { ...current.missionProgress, [mission.id]: 50 };
    writeState(current);
    renderDashboard();
  }

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-mission-modal" role="dialog" aria-label="${task.title}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${task.meta}</div>
          <h2>${task.title}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <p class="cg-mission-modal-body">${icon("sparkles")} ${task.body}</p>
      <div class="cg-mission-steps">
        ${steps.map((step, index) => `
          <p data-mission-step="${index}" role="button" tabindex="0" aria-pressed="false">${icon("circle")} ${step}</p>
        `).join("")}
      </div>
      <label class="cg-mission-notes">
        <span>Notes for your record (optional)</span>
        <textarea class="field" rows="3" placeholder="What did you actually do?"></textarea>
      </label>
      <div class="hero-actions">
        <button class="btn btn-primary" type="button" data-mission-confirm disabled>${icon("check")} Mark as done</button>
        <button class="btn btn-ghost" type="button" data-close>Not yet</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);

  const confirmBtn = qs("[data-mission-confirm]", backdrop);
  const syncConfirmState = () => {
    confirmBtn.disabled = checked.size < steps.length;
  };
  qsa("[data-mission-step]", backdrop).forEach(row => {
    const toggle = () => {
      const index = Number(row.dataset.missionStep);
      const isDone = checked.has(index);
      if (isDone) checked.delete(index); else checked.add(index);
      row.classList.toggle("done", !isDone);
      row.setAttribute("aria-pressed", String(!isDone));
      row.innerHTML = `${icon(!isDone ? "check-circle-2" : "circle")} ${steps[index]}`;
      createIcons();
      syncConfirmState();
    };
    row.addEventListener("click", toggle);
    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });

  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });

  confirmBtn.addEventListener("click", () => {
    if (confirmBtn.disabled) return;
    const next = readState();
    next.missionProgress = { ...next.missionProgress, [mission.id]: 100 };
    recordMissionStreak(next);
    pushNotification(next, { id: `n-${mission.id}`, type: "growth", title: "Mission completed", body: `${mission.title || "Your mission"} is done - CareerGo updated your progress.`, href: "dashboard.html" });
    writeState(syncCurrentUser(next));
    backdrop.remove();
    showToast("Mission marked complete.");
    renderDashboard();
  });

  createIcons();
}

let dashboardTaskFilter = "";
let activePostsThread = "";
let activeInboxFilter = "All";
let dashboardFocusSnoozed = false;

function renderDashboard() {
  const root = qs("[data-dashboard]");
  if (!root) return;
  if (!requireRole(root, "candidate", "view your personalized Career OS")) return;
  if (needsOnboarding(root)) return;
  qs(".page-hero")?.classList.add("is-hidden");
  const state = readState();
  const savedJobs = DATA.jobs.filter(job => state.savedJobs.includes(job.id));
  const applications = DATA.jobs.filter(job => state.applications.includes(job.id));
  const trackedJobs = getTrackedJobs(state);
  const counts = applicationSummaryCounts(state);
  const apReviewCount = AUTOPILOT_MATCHES.filter(role => !(state.autopilotDismissedRoles || []).includes(role.id)).length;
  const profile = state.profile;
  const intel = profile.intelligence || generateCareerIntelligence(profile);
  const missions = personalizedMissions(profile);
  const beginnerMissions = starterMissions(profile);
  const visibleBeginnerMissions = beginnerMissions.slice(0, 3);
  const target = getTargetLabel(profile);
  const savedOrgs = [...DATA.companies, ...DATA.universities].filter(org => state.savedOrgs.includes(org.id));
  const experienceItems = Array.isArray(profile.experience?.roles) ? profile.experience.roles : Array.isArray(profile.experience?.work) ? profile.experience.work : [];
  const profileCompletion = Math.min(100, 45
    + (profile.skills.technical.length ? 15 : 0)
    + (experienceItems.length ? 15 : 0)
    + (profile.resume.uploaded || profile.resume.name ? 15 : 0)
    + (profile.preferences.roles.length ? 10 : 0));
  const topJobs = DATA.jobs
    .filter(job => !state.ignoredJobs.includes(job.id))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
  const urgentRecord = trackedJobs.find(item => ["interview", "screening"].includes(item.record.stage)) || trackedJobs[0];
  const focusDetail = intel.summary || "Vera is using your profile, saved roles, and application signals to keep the next step focused.";
  const activeApps = trackedJobs.length || applications.length;
  const interviewCount = trackedJobs.filter(item => item.record.stage === "interview").length || counts.interview || 0;
  const offerCount = counts.offer || 0;
  const kpis = [
    ["Profile strength", `${profileCompletion}%`, profileCompletion, "3 items to complete", "user-round"],
    ["Career worth", "RM 8.3–9.8k", 62, "Monthly range · trending up", "wallet"],
    ["Roadmap", `${Math.round(intel.readinessScore || 44)}%`, intel.readinessScore || 44, "Week 7 / 16 - on track", "target"],
    ["Applications", `${activeApps} active`, Math.min(100, activeApps * 16), `${interviewCount} interviewing - ${offerCount} offer stage`, "briefcase-business"]
  ];
  const dailyTasks = [
    {
      mission: missions[0] || beginnerMissions[0],
      priority: "High",
      meta: "Interview - 30 min",
      title: urgentRecord ? `Prep for ${urgentRecord.job.company} ${urgentRecord.job.title}` : "Sharpen one interview story",
      body: urgentRecord ? urgentRecord.record.nextAction : "Turn one project into a clear problem, decision, result story.",
      progress: 68
    },
    {
      mission: missions[1] || beginnerMissions[1],
      priority: "Medium",
      meta: "Learning - 20 min",
      title: `Close one ${target} skill gap`,
      body: intel.learningPriority,
      progress: 60
    },
    {
      mission: beginnerMissions[0],
      priority: "High",
      meta: "Application - 5 min",
      title: urgentRecord ? `Move ${urgentRecord.job.company} forward` : "Save one role that fits your roadmap",
      body: urgentRecord ? urgentRecord.record.nextAction : "CareerGo needs one current role signal to tune recommendations.",
      progress: 42
    },
    {
      mission: beginnerMissions[1],
      priority: "Low",
      meta: "Networking - 10 min",
      title: "Reach out to one warm contact",
      body: "Use one company insight to write a specific, low-pressure note.",
      progress: 26
    }
  ];
  const taskCategories = ["Interview", "Learning", "Application", "Networking"];
  const taskPriorityRank = { High: 0, Medium: 1, Low: 2 };
  const visibleTasks = dailyTasks
    .map((task, index) => ({ ...task, originalIndex: index, category: task.meta.split(" - ")[0] }))
    .filter(task => !dashboardTaskFilter || task.category === dashboardTaskFilter)
    .sort((a, b) => taskPriorityRank[a.priority] - taskPriorityRank[b.priority]);
  const taskLookup = {};
  const streakCount = state.missionStreak?.count || 0;
  const applicationCards = (trackedJobs.length
    ? trackedJobs.slice(0, 2)
    : topJobs.slice(0, 2).map(job => ({ job, record: createApplicationRecord(job.id, "saved") })));
  const longArcCards = [
    ["Career Simulation", "See where your career could be in 5 years", "compass", "grow.html"],
    ["Fair Pay", "Your market value increased 6% this month", "chart-line", "market.html"],
    ["Career Planning", "Continue your 3-year roadmap", "target", "market.html#roadmap"],
    ["Company Research", `${savedOrgs.length || 12} new insights on companies you follow`, "building-2", "discover-companies.html"]
  ];
  root.innerHTML = appShell("dashboard", `
    <section class="cg-dashboard">
      <header class="cg-dash-hero" data-tour-target="dashboard-hero">
        <div>
          <div class="cg-overline">${icon("calendar-days")} Today - Week 7 of your ${target} transition</div>
          <h1>Good morning, ${getFirstName(state)}.</h1>
          <p>You are making steady progress - ahead of 72% of candidates on the same path.</p>
        </div>
      </header>

      <section class="cg-kpi-grid" data-tour-target="metrics">
        ${kpis.map(([label, value, progress, detail, ic], index) => `
          <a class="cg-kpi-card tone-${index + 1}" href="${index === 3 ? "discover.html#tracker" : index === 1 ? "market.html" : "grow.html"}">
            <span class="cg-card-icon">${icon(ic)}</span>
            <span class="cg-kpi-label">${label}</span>
            ${index === 0 || index === 1
              ? `<div class="cg-kpi-value-row"><strong>${value}</strong>${index === 0 ? miniProgressRing(progress) : miniSparkline()}</div>`
              : `<strong>${value}</strong>`}
            ${index === 3
              ? `<div class="cg-kpi-detail-row"><small>${detail}</small><span class="cg-mini-bars"><i></i><i></i><i></i></span></div>`
              : `<small>${detail}</small>`}
            ${index === 2 ? `<div class="cg-kpi-progress-row">${progressBar(progress)}<small class="cg-kpi-progress-label">${value}</small></div>` : ""}
          </a>
        `).join("")}
      </section>

      <section class="cg-focus-grid">
        <article class="cg-focus-card" data-tour-target="vera">
          ${dashboardFocusSnoozed ? `
            <div class="cg-focus-meta">
              <span>${icon("moon")} Today's focus - snoozed</span>
            </div>
            <h2>Snoozed for today.</h2>
            <p>Vera will bring this focus item back tomorrow morning. Nothing else on your dashboard is affected.</p>
            <div class="cg-action-row">
              <button type="button" class="btn btn-primary" data-unsnooze-focus>${icon("rotate-ccw")} Show today's focus</button>
            </div>
          ` : `
            <div class="cg-focus-meta">
              <span><img class="cg-focus-meta-icon" src="assets/vera-ai-coach.png" alt="Vera AI"> Today's focus &middot; by Vera</span>
              <span>${icon("clock")} 45 min - Deep work</span>
            </div>
            <h2>Hi, I'm Vera, your AI career coach.</h2>
            <p>${focusDetail}</p>
            <div class="cg-action-row">
              <a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent("today's focus")}#messages">Start with Vera ${icon("arrow-up-right")}</a>
              <button type="button" class="btn btn-ghost" data-snooze-focus>${icon("moon")} Snooze</button>
              <span class="cg-confidence">${icon("gauge")} Confidence: ${intel.confidence}</span>
            </div>
          `}
        </article>
        <article class="cg-autopilot-card">
          <div class="cg-section-line">
            <div class="cg-autopilot-heading">
              <span class="cg-autopilot-icon"><img src="assets/vera-ai-coach.png" alt="Vera AI"></span>
              <div>
                <span class="cg-overline">Autopilot</span>
                <h2>Vera worked while you slept.</h2>
                <p class="cg-h2-sub">Overnight scans, saved matches, and drafts waiting for your review.</p>
              </div>
            </div>
            <span class="cg-pill">${icon("zap")} High confidence</span>
          </div>
          <div class="cg-activity-list">
            ${[
              ["search", "Scanned 128 new jobs across your target companies", "03:12"],
              ["check-circle-2", `Saved ${savedJobs.length || 6} that match your roadmap`, "03:41"],
              ["send", "Drafted 2 outreach notes to hiring managers", "05:04"],
              ["badge-dollar-sign", "Refreshed your Fair Pay benchmark (+6%)", "05:22"]
            ].map(([ic, text, time], index, arr) => `<div class="cg-activity-item${index === arr.length - 1 ? " is-last" : ""}"><span class="cg-activity-dot">${icon(ic)}</span><p>${text}</p><time>${time}</time></div>`).join("")}
          </div>
          <div class="cg-action-row compact-actions">
            <a class="btn btn-primary" href="autopilot.html#autopilot-matches">Review ${apReviewCount} item${apReviewCount === 1 ? "" : "s"} ${icon("chevron-right")}</a>
            <a class="btn btn-ghost" href="autopilot.html#autopilot-console">Tune</a>
          </div>
        </article>
      </section>

      <section class="cg-applications" data-tour-target="applications">
        <div class="cg-section-line">
          <div>
            <h2>Recent Applications</h2>
            <p class="cg-h2-sub">Where each application stands and the next move that keeps it alive.</p>
          </div>
          <a href="autopilot.html">Open Pipeline ${icon("chevron-right")}</a>
        </div>
        <div class="cg-application-grid">
          ${applicationCards.map(({ job, record }) => `
            <article class="cg-application-card">
              <div class="cg-job-head">
                <span class="cg-company-mark">${job.company.charAt(0)}</span>
                <div><small>${job.company}</small><h3>${job.title}</h3></div>
                <span class="cg-job-status">
                  <span class="cg-update-time">${record.updatedLabel}</span>
                  ${applicationStagePill(record.stage)}
                </span>
              </div>
              <div class="cg-stage-track"><i></i><i></i><i></i><i></i></div>
              <div class="cg-stage-labels"><span>Applied</span><span>Screen</span><span>Interview</span><span>Offer</span></div>
              <p class="cg-application-meta">${icon("calendar")} ${record.deadline || "Due in 2 days"} ${icon("clock")} ${record.nextAction}</p>
              <div class="cg-note">${icon("sparkles")} ${record.nextAction}</div>
              <div class="cg-action-row">
                <a class="btn btn-primary" href="${applicationContinueHref(job, record)}">Continue ${icon("arrow-up-right")}</a>
                <button type="button" class="btn btn-ghost" data-app-details="${job.id}">Details</button>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="cg-insight-band">
          <span>${icon("trending-up")} Interview readiness +18% this month</span>
          <span>${icon("sparkles")} Ahead of 72% of candidates on your path</span>
          <span>${icon("zap")} One project separates you from median ${target}</span>
        </div>
      </section>

      <section class="cg-task-section glass-card" data-tour-target="missions">
        <div class="cg-section-line">
          <div>
            <h2>Explore something today!</h2>
            <p class="cg-h2-sub">Small daily missions that build proof for your target role.</p>
          </div>
          <span class="cg-streak">${icon("flame")} Streak - ${streakCount} day${streakCount === 1 ? "" : "s"}</span>
        </div>
        <div class="cg-task-filters">
          ${taskCategories.map(cat => `<button type="button" class="pill ${dashboardTaskFilter === cat ? "active" : ""}" data-task-filter="${cat}">${cat}</button>`).join("")}
        </div>
        <div class="cg-task-grid">
          ${visibleTasks.map(task => {
            const mission = task.mission || visibleBeginnerMissions[task.originalIndex % Math.max(1, visibleBeginnerMissions.length)];
            const savedProgress = mission ? (state.missionProgress[mission.id] || 0) : 0;
            const status = savedProgress >= 100 ? "done" : savedProgress > 0 ? "in-progress" : "not-started";
            const barValue = status === "done" ? 100 : status === "in-progress" ? savedProgress : task.progress;
            if (mission) taskLookup[mission.id] = { ...task, mission };
            return `
              <article class="cg-task-card ${status === "done" ? "complete" : ""} ${status === "in-progress" ? "in-progress" : ""}" data-mission-card="${mission?.id || ""}">
                <span class="cg-check">${status === "done" ? icon("check") : ""}</span>
                <div>
                  <div class="cg-task-meta"><span>${task.meta}</span>${status === "in-progress" ? `<span class="cg-task-status">In progress</span>` : ""}</div>
                  <h3>${task.title}</h3>
                  <p>${icon("sparkles")} ${task.body}</p>
                  ${progressBar(barValue)}
                </div>
                ${mission ? `<button class="btn btn-ghost" type="button" data-complete-mission="${mission.id}" ${status === "done" ? "disabled" : ""}>${status === "done" ? `${icon("check")} Done` : status === "in-progress" ? `Continue ${icon("arrow-up-right")}` : `Start ${icon("arrow-up-right")}`}</button>` : `<a class="btn btn-ghost" href="posts.html?topic=${encodeURIComponent(task.title || "this task")}#messages">Start ${icon("arrow-up-right")}</a>`}
              </article>
            `;
          }).join("")}
        </div>
      </section>

      <section class="cg-roles-section">
        <div class="cg-section-line">
          <div>
            <span class="cg-overline">For you</span>
            <h2>Vera's Recommended Roles</h2>
            <p class="cg-h2-sub">Matched to your skills, salary target, and the roles you keep saving.</p>
          </div>
          <a href="recommended-roles.html">See More ${icon("chevron-right")}</a>
        </div>
        <div class="cg-role-grid cg-role-unit-grid">
          ${topJobs.map(job => roleCardMarkup(normalizeRole(job))).join("")}
        </div>
      </section>

      <section class="cg-long-arc" data-tour-target="growth">
        <div>
          <span class="cg-overline">For the long arc</span>
          <h2>Long-term growth</h2>
          <p class="cg-h2-sub">Bigger bets that compound over the next 6-18 months of your career.</p>
        </div>
        <div class="cg-long-grid">
          ${longArcCards.map(([title, body, ic, href], index) => `
            <a class="cg-long-card tone-${index + 1}" href="${href}">
              <span class="cg-card-icon">${icon(ic)}</span>
              <span class="cg-open-icon">${icon("arrow-up-right")}</span>
              <h3>${title}</h3>
              <p>${body}</p>
            </a>
          `).join("")}
        </div>
      </section>

      ${veraWidgetMarkup()}
    </section>
  `);
  createIcons();
  bindMissionActions(taskLookup);
  qsa("[data-task-filter]", root).forEach(btn => btn.addEventListener("click", () => {
    dashboardTaskFilter = dashboardTaskFilter === btn.dataset.taskFilter ? "" : btn.dataset.taskFilter;
    renderDashboard();
  }));
  qsa("[data-app-details]", root).forEach(btn => btn.addEventListener("click", () => openApplicationDetailsModal(btn.dataset.appDetails)));
  qs("[data-snooze-focus]", root)?.addEventListener("click", () => {
    dashboardFocusSnoozed = true;
    showToast("Snoozed. Vera will bring today's focus back tomorrow.");
    renderDashboard();
  });
  qs("[data-unsnooze-focus]", root)?.addEventListener("click", () => {
    dashboardFocusSnoozed = false;
    renderDashboard();
  });
  bindRoleCardActions(root);
  wireVeraWidget(root);
  initDashboardTour();
}

const RECOMMENDED_ROLES = [
  { id: "rr-linear", company: "Linear", title: "Product Manager, Growth", match: 94, location: "San Francisco", mode: "Remote", salary: "RM 71k - 83k / month", insight: "Matches your PM roadmap - Design-adjacent - Series C", warmIntro: false },
  { id: "rr-notion", company: "Notion", title: "Associate PM", match: 88, location: "New York", mode: "Hybrid", salary: "RM 59k - 68k / month", insight: "Warm intro available - APM-friendly team", warmIntro: true },
  { id: "rr-perplexity", company: "Perplexity", title: "PM, AI Products", match: 82, location: "Remote", mode: "Remote", salary: "RM 67k - 78k / month", insight: "Your LLM eval posts align - Fast-moving team", warmIntro: false },
  { id: "rr-setel", company: "Setel", title: "Senior PM, Payments", match: 91, location: "Kuala Lumpur", mode: "Hybrid", salary: "RM 14k - 18k / month", insight: "AI-native squad - Matches saved roles", warmIntro: false },
  { id: "rr-carsome", company: "Carsome", title: "Product Manager, Marketplace", match: 87, location: "Kuala Lumpur", mode: "On-site", salary: "RM 12k - 16k / month", insight: "3 alumni from your uni in PM", warmIntro: false },
  { id: "rr-storehub", company: "StoreHub", title: "PM, Merchant Growth", match: 85, location: "Remote (MY)", mode: "Remote", salary: "RM 11k - 15k / month", insight: "Async culture matches your style", warmIntro: false },
  { id: "rr-figma", company: "Figma", title: "Product Manager, Platform", match: 80, location: "Remote", mode: "Remote", salary: "RM 63k - 74k / month", insight: "Design-tool fluency valued - Warm intro via Priya", warmIntro: true },
  { id: "rr-grab", company: "Grab", title: "Senior PM, Fintech", match: 78, location: "Kuala Lumpur", mode: "Hybrid", salary: "RM 13k - 17k / month", insight: "Fintech domain match - Saved company", warmIntro: false },
  { id: "rr-stripe", company: "Stripe", title: "PM, APAC Payments", match: 90, location: "Remote (SEA)", mode: "Remote", salary: "RM 68k - 80k / month", insight: "Already in your pipeline - Round 2 booked", warmIntro: true }
];

/* ---- Roles/Jobs unified model (Workstream B) -----------------------------
   DATA.jobs (rich: description/skills/why/caution) and RECOMMENDED_ROLES
   (match/mode/warmIntro/insight) have different shapes. normalizeRole maps
   either into one shape so a single card/detail/compare renderer serves both. */
/* Currency policy (Part 3): CareerGo is a Malaysia-first product and every
   salary target the user sets in onboarding is in RM, so ALL compensation is
   displayed in RM for one consistent yardstick. Any legacy mock figure written
   in USD ("$180k - 210k") is converted here at ~4.7 MYR/USD, keeping the same
   annual "k" magnitude, rather than showing mixed currencies across the app. */
const USD_TO_RM = 4.7;
function convertSalaryToRM(salary) {
  const s = String(salary || "").trim();
  if (!s || !s.includes("$")) return s;
  const conv = n => Math.round((Number(n) * USD_TO_RM) / 10) * 10;
  const range = s.match(/\$\s?(\d+(?:\.\d+)?)k\s*[-–]\s*(\d+(?:\.\d+)?)k/i);
  if (range) return `RM ${conv(range[1])}k - ${conv(range[2])}k`;
  const single = s.match(/\$\s?(\d+(?:\.\d+)?)k/i);
  if (single) return `RM ${conv(single[1])}k`;
  return s.replace(/US\$|\$/g, "RM ");
}

function normalizeRole(role) {
  if (!role) return null;
  const why = Array.isArray(role.why) && role.why.length
    ? role.why
    : (role.insight ? String(role.insight).split(/\s+-\s+|,\s*/).map(s => s.trim()).filter(Boolean) : []);
  const mode = role.mode || role.type || "On-site";
  return {
    id: role.id,
    title: role.title,
    company: role.company,
    location: role.location || "",
    mode,
    salary: convertSalaryToRM(role.salary || "Undisclosed"),
    match: Number(role.match) || 0,
    posted: role.posted || "Recently",
    industry: role.industry || "",
    level: role.level || "",
    skills: Array.isArray(role.skills) ? role.skills : [],
    why,
    caution: role.caution || "",
    warmIntro: Boolean(role.warmIntro),
    description: role.description || `${role.title} at ${role.company}${role.location ? ` in ${role.location}` : ""}.${why[0] ? ` ${why[0]}` : ""}`
  };
}

/* Classify a role by title keyword so the generated job-posting content
   (responsibilities/requirements/benefits) reads specific to the kind of
   work, not generic filler - falls back to "pm" since most seed roles are
   product-management-flavored. */
function roleContentCategory(title) {
  const t = String(title || "").toLowerCase();
  if (t.includes("designer")) return "design";
  if (t.includes("analyst")) return "analyst";
  if (t.includes("research")) return "research";
  if (t.includes("advisor") || t.includes("coach")) return "advisory";
  return "pm";
}

const ROLE_CONTENT_TEMPLATES = {
  design: {
    intro: "shape how people experience the product day to day",
    responsibilities: [
      "Design end-to-end user flows and high-fidelity interfaces for core product surfaces",
      "Partner closely with product managers and engineers to scope and ship features",
      "Run usability tests and iterate on designs based on qualitative and quantitative feedback",
      "Maintain and evolve the shared design system, keeping patterns consistent across surfaces",
      "Present design rationale to stakeholders and incorporate cross-functional feedback"
    ],
    niceToHave: ["Motion or prototyping in Framer", "Experience designing for a regulated industry", "A public portfolio with shipped case studies"]
  },
  analyst: {
    intro: "turn raw data into decisions the business can act on",
    responsibilities: [
      "Build and maintain dashboards tracking key product and business metrics",
      "Partner with product and operations teams to answer ad-hoc data questions",
      "Design and analyze experiments (A/B tests) to guide product decisions",
      "Translate data into clear, actionable recommendations for non-technical stakeholders",
      "Improve data pipelines and reporting infrastructure over time"
    ],
    niceToHave: ["Experience with a BI tool such as Looker or Tableau", "Familiarity with experimentation/causal inference", "Comfort presenting findings to leadership"]
  },
  research: {
    intro: "make sure customer voice shapes every major product decision",
    responsibilities: [
      "Plan and conduct qualitative research - interviews, usability studies, diary studies",
      "Design and field quantitative surveys, then synthesize findings into clear insights",
      "Partner with design and product teams to translate research into product decisions",
      "Maintain a repository of research findings, personas, and journey maps",
      "Present research readouts to stakeholders across the organization"
    ],
    niceToHave: ["Experience with survey tooling such as Qualtrics", "Comfort moderating sessions in Bahasa Malaysia and English", "A background in psychology, HCI, or a related field"]
  },
  advisory: {
    intro: "help students turn potential into a real career outcome",
    responsibilities: [
      "Coach students one-on-one on career planning, resumes, and interview preparation",
      "Coordinate employer partnerships and campus recruitment programs",
      "Run workshops on career readiness, portfolio building, and job search strategy",
      "Track graduate outcomes and report on program effectiveness",
      "Partner with faculty to embed employability into the curriculum"
    ],
    niceToHave: ["A career coaching certification", "Experience with employer/alumni outreach", "Familiarity with graduate labour market trends in Malaysia"]
  },
  pm: {
    intro: "own outcomes for a product area end to end",
    responsibilities: [
      "Own the roadmap and prioritization for your product area, balancing user needs and business goals",
      "Partner with design, engineering, and data to ship features end-to-end",
      "Define success metrics and monitor product performance after launch",
      "Run discovery with users and translate insights into clear requirements",
      "Communicate progress, trade-offs, and outcomes to stakeholders and leadership"
    ],
    niceToHave: ["Experience shipping a 0-to-1 product", "A technical background (CS degree or equivalent)", "Comfort working directly with engineering on scoping"]
  }
};

/* Generate a plausible, complete job posting (about copy, responsibilities,
   requirements split into must-have/nice-to-have, and benefits) from a
   normalized role's existing fields. Real postings aren't wired up yet, so
   this keeps every role - across both DATA.jobs and RECOMMENDED_ROLES - from
   reading like a bare summary card, per the category templates above. */
function generateJobPosting(role) {
  const category = roleContentCategory(role.title);
  const template = ROLE_CONTENT_TEMPLATES[category];
  const yearsByMatch = role.match >= 90 ? "5-8" : role.match >= 82 ? "3-5" : role.match >= 75 ? "2-4" : "0-2";
  const industryClause = role.industry ? ` in ${role.industry.toLowerCase()}` : "";
  const locationClause = role.location ? ` out of ${role.location}` : "";

  const about = [
    `${role.company} is hiring a ${role.title}${locationClause}${role.mode ? ` (${role.mode})` : ""} to ${template.intro}. ${role.description}`,
    `You'll join a team that ships fast and expects ownership - this is a role for someone who wants real scope${industryClause}, not just a seat on a roadmap someone else wrote. ${role.why[0] || "Vera flagged this as a strong fit against your current profile."}`
  ];

  const mustHave = [
    `${yearsByMatch} years of relevant experience`,
    ...role.skills.slice(0, 4)
  ];

  const benefits = [
    "Health & wellness coverage",
    "Annual learning & development budget",
    "Generous paid time off",
    role.mode === "Remote" ? "Fully remote-first culture, async-friendly" : role.mode === "Hybrid" ? "Hybrid schedule with flexible in-office days" : "Modern office space, team lunches",
    role.warmIntro ? "Fast-tracked interview process via your CareerGo network" : (role.industry === "Banking" ? "Structured professional development programs" : "Competitive equity / ESOP participation")
  ];

  return { about, responsibilities: template.responsibilities, mustHave, niceToHave: template.niceToHave, benefits };
}

/* Every role Vera knows about, merged from both catalogs and deduped by id. */
function allNormalizedRoles() {
  const seen = new Set();
  const out = [];
  [...DATA.jobs, ...RECOMMENDED_ROLES].forEach(role => {
    if (!role || seen.has(role.id)) return;
    seen.add(role.id);
    out.push(normalizeRole(role));
  });
  return out;
}

function findRoleById(id) {
  const raw = DATA.jobs.find(job => job.id === id) || RECOMMENDED_ROLES.find(role => role.id === id);
  return raw ? normalizeRole(raw) : null;
}

/* Resolve a role's employer to an org in the directory catalog (for the
   "View company" cross-link), tolerating partial name matches like "Grab". */
function findOrgByName(name) {
  if (!name) return null;
  const target = String(name).toLowerCase().trim();
  const { catalog } = buildOrgCatalog();
  return catalog.find(org => org.name.toLowerCase() === target)
    || catalog.find(org => org.name.toLowerCase().includes(target) || target.includes(org.name.toLowerCase()))
    || null;
}

const MAX_COMPARE_ROLES = 3;

function comparedRoleIds() {
  const state = readState();
  return Array.isArray(state.comparedJobs) ? state.comparedJobs : [];
}

/* Toggle a role into the compare tray (cap MAX_COMPARE_ROLES). Returns the
   new membership state so callers can update their button label. */
function toggleRoleCompare(id) {
  const state = readState();
  const list = Array.isArray(state.comparedJobs) ? state.comparedJobs : [];
  if (list.includes(id)) {
    state.comparedJobs = list.filter(item => item !== id);
    writeState(state);
    return false;
  }
  if (list.length >= MAX_COMPARE_ROLES) {
    showToast(`You can compare up to ${MAX_COMPARE_ROLES} roles at once.`);
    return false;
  }
  state.comparedJobs = [...list, id];
  writeState(state);
  return true;
}

function toggleRoleSaved(id) {
  const state = readState();
  const saved = Array.isArray(state.savedJobs) ? state.savedJobs : [];
  const nowSaved = !saved.includes(id);
  state.savedJobs = nowSaved ? [...saved, id] : saved.filter(item => item !== id);
  if (!state.applicationRecords) state.applicationRecords = {};
  if (nowSaved) state.applicationRecords[id] = state.applicationRecords[id] || createApplicationRecord(id, "saved");
  else if (!(state.applications || []).includes(id)) delete state.applicationRecords[id];
  writeState(syncCurrentUser(state));
  return nowSaved;
}

/* The floating compare tray, mounted once and refreshed on demand. Appears
   whenever 1+ roles are staged for comparison, on any workspace page. */
function renderCompareTray() {
  const existing = qs("[data-compare-tray]");
  const ids = comparedRoleIds();
  if (!ids.length || !readState().session.loggedIn) {
    if (existing) existing.remove();
    return;
  }
  const roles = ids.map(findRoleById).filter(Boolean);
  const tray = existing || document.createElement("div");
  tray.className = "cg-compare-tray";
  tray.setAttribute("data-compare-tray", "");
  tray.innerHTML = `
    <div class="cg-compare-tray-inner">
      <div class="cg-compare-tray-chips">
        <span class="cg-compare-tray-label">${icon("git-compare")} Compare</span>
        ${roles.map(role => `<span class="cg-compare-chip">${role.title}<button type="button" data-compare-remove="${role.id}" aria-label="Remove ${role.title}">${icon("x")}</button></span>`).join("")}
      </div>
      <div class="cg-compare-tray-actions">
        <button type="button" class="btn btn-ghost" data-compare-clear>Clear</button>
        <button type="button" class="btn btn-primary" data-compare-open ${roles.length < 2 ? "disabled" : ""}>Compare ${roles.length} role${roles.length === 1 ? "" : "s"} ${icon("arrow-right")}</button>
      </div>
    </div>
  `;
  if (!existing) document.body.appendChild(tray);
  createIcons(tray);
  qsa("[data-compare-remove]", tray).forEach(btn => btn.addEventListener("click", () => {
    toggleRoleCompare(btn.dataset.compareRemove);
    renderCompareTray();
  }));
  qs("[data-compare-clear]", tray)?.addEventListener("click", () => {
    const state = readState();
    state.comparedJobs = [];
    writeState(state);
    renderCompareTray();
  });
  qs("[data-compare-open]", tray)?.addEventListener("click", () => openRoleCompareModal());
}

function openRoleCompareModal() {
  const roles = comparedRoleIds().map(findRoleById).filter(Boolean);
  if (roles.length < 2) {
    showToast("Add at least two roles to compare.");
    return;
  }
  const rows = [
    ["Match", role => `<strong class="cg-compare-match">${role.match}%</strong>`],
    ["Salary", role => role.salary],
    ["Work mode", role => role.mode],
    ["Location", role => role.location || "-"],
    ["Warm intro", role => role.warmIntro ? `${icon("check")} Available` : "-"],
    ["Why Vera matched", role => role.why.length ? `<ul>${role.why.slice(0, 3).map(w => `<li>${w}</li>`).join("")}</ul>` : "-"],
    ["Key skills", role => role.skills.length ? role.skills.slice(0, 5).map(s => `<span class="cg-compare-skill">${s}</span>`).join("") : "-"]
  ];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-compare-modal" role="dialog" aria-label="Compare roles">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Side by side</div>
          <h2>Compare ${roles.length} roles</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-compare-scroll">
        <table class="cg-compare-table">
          <thead>
            <tr>
              <th></th>
              ${roles.map(role => `<th><span class="cg-compare-co">${role.company}</span><span class="cg-compare-role">${role.title}</span></th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${rows.map(([label, render]) => `<tr><th scope="row">${label}</th>${roles.map(role => `<td>${render(role)}</td>`).join("")}</tr>`).join("")}
            <tr>
              <th scope="row"></th>
              ${roles.map(role => `<td><button type="button" class="btn btn-primary btn-sm" data-compare-view="${role.id}">View role</button></td>`).join("")}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  qsa("[data-compare-view]", backdrop).forEach(btn => btn.addEventListener("click", () => {
    backdrop.remove();
    goToRole(btn.dataset.compareView);
  }));
  createIcons(backdrop);
}

/* Navigate to the shared role detail page. Used wherever a "View role" action
   is triggered from JS rather than a plain <a> link. */
function goToRole(roleId) {
  if (!roleId) return;
  location.href = `role.html?role=${encodeURIComponent(roleId)}`;
}

/* Where the role-detail "back" control should return to. Returns
   { href, label, useHistory }.

   The RELIABLE mechanism is window.history.back() (the click handler), because
   it works whether the app is served over http(s) OR opened straight off disk
   as file:// - and this app is routinely opened as file://, where
   `document.referrer` is ALWAYS empty. (An earlier referrer-only version of
   this looked correct over localhost but silently fell back to "All roles" for
   every file:// user.) role.html adds no pushState/replaceState of its own, so
   the previous history entry is always the page you came from, and back()
   restores its scroll position too.

   document.referrer is used only as a bonus to NAME the button ("Discover",
   "Pipeline", …) when it happens to be available (http). Under file:// it's
   empty so the label is a generic "Back" - still correct, just unnamed.

   The hard "All roles" href fallback is used only when there's genuinely no
   session history to pop (a direct link / fresh tab), per the spec. */
function roleDetailBackTarget() {
  const fallback = { href: "recommended-roles.html", label: "All roles", useHistory: false };
  const canGoBack = typeof window !== "undefined" && !!window.history && window.history.length > 1;
  const LABELS = {
    "autopilot.html": "Pipeline",
    "discover.html": "Discover",
    "recommended-roles.html": "All roles",
    "dashboard.html": "Dashboard",
    "saved.html": "Saved",
    "grow.html": "Growth",
    "market.html": "Career Value",
    "posts.html": "Feed",
    "vera.html": "Vera",
    "discover-companies.html": "Companies",
    "discover-universities.html": "Universities",
    "company-profile.html": "Company",
    "job-detail.html": "Pipeline",
    "profile.html": "Profile",
    "public-profile.html": "Profile"
  };
  // Try to name the origin from the referrer (only populated over http(s)).
  let named = null;
  const ref = document.referrer;
  if (ref) {
    try {
      const url = new URL(ref);
      const page = (url.pathname.split("/").pop() || "").toLowerCase();
      if (url.origin === location.origin && page !== "role.html" && LABELS[page]) {
        named = { href: url.pathname + url.search, label: LABELS[page] };
      }
    } catch (error) { /* malformed referrer - ignore, fall through */ }
  }
  if (canGoBack) {
    return { href: (named && named.href) || fallback.href, label: (named && named.label) || "Back", useHistory: true };
  }
  // No history to pop (direct link / fresh tab / refresh into a new session).
  return named ? { ...named, useHistory: false } : fallback;
}

/* THE unified role card - one component reused on Dashboard, the Roles browse
   page, Discover, and (compact variant) the role detail page's "Similar
   roles" rail. Dark-green company avatar, number + MATCH label top-right,
   a "why this matches" sparkle line, optional tag chips, and a dark "View
   role" button flanked by compare + save icon buttons. `role` is a
   normalized role. Pass `{ compact: true }` for a condensed card (avatar +
   title + meta + a plain "View role" link, no why-line/chips/action-icons) -
   used where several cards need to sit in a tight row, like recommendations. */
function roleCardMarkup(role, opts = {}) {
  const showChips = opts.chips !== false;
  const compact = Boolean(opts.compact);
  const href = `role.html?role=${encodeURIComponent(role.id)}`;

  if (compact) {
    return `
      <a class="cg-role-unit cg-role-unit-compact" href="${href}" aria-label="View ${role.title} at ${role.company}">
        <div class="cg-role-unit-head">
          <span class="cg-role-unit-avatar">${role.company.charAt(0)}</span>
          <div class="cg-role-unit-id"><small>${role.company}</small><h3>${role.title}</h3></div>
          <span class="cg-role-unit-match"><strong>${role.match}</strong><small>Match</small></span>
        </div>
        <p class="cg-role-unit-meta">${icon("map-pin")} ${role.location || "Flexible"} <i>&middot;</i> ${role.mode}</p>
        <span class="cg-role-unit-compact-cta">View role ${icon("arrow-right")}</span>
      </a>
    `;
  }

  const state = readState();
  const isSaved = (state.savedJobs || []).includes(role.id);
  const isApplied = (state.applications || []).includes(role.id);
  const inCompare = comparedRoleIds().includes(role.id);
  const chips = showChips ? `
    <div class="cg-role-unit-tags">
      ${isApplied ? `<span class="cg-role-unit-tag applied">${icon("check")} Applied</span>` : ""}
      ${role.warmIntro ? `<span class="cg-role-unit-tag warm">${icon("sparkles")} Warm intro</span>` : ""}
      ${role.skills.slice(0, 3).map(skill => `<span class="cg-role-unit-tag">${skill}</span>`).join("")}
    </div>` : "";
  return `
    <article class="cg-role-unit" data-role-id="${role.id}">
      <a class="cg-role-unit-open" href="${href}" aria-label="View ${role.title} at ${role.company}">
        <div class="cg-role-unit-head">
          <span class="cg-role-unit-avatar">${role.company.charAt(0)}</span>
          <div class="cg-role-unit-id"><small>${role.company}</small><h3>${role.title}</h3></div>
          <span class="cg-role-unit-match"><strong>${role.match}</strong><small>Match</small></span>
        </div>
        <p class="cg-role-unit-meta">${icon("map-pin")} ${role.location || "Flexible"} <i>&middot;</i> ${role.mode} <i>&middot;</i> ${role.salary}</p>
        <p class="cg-role-unit-why">${icon("sparkles")} ${role.why[0] || role.description}</p>
        ${(showChips && (isApplied || role.warmIntro || role.skills.length)) ? chips : ""}
      </a>
      <div class="cg-role-unit-actions">
        <a class="btn btn-primary cg-role-unit-view" href="${href}">View role ${icon("chevron-right")}</a>
        <button type="button" class="cg-role-unit-icon${inCompare ? " active" : ""}" data-role-compare="${role.id}" aria-label="Compare role" title="Compare">${icon("git-compare")}</button>
        <button type="button" class="cg-role-unit-icon${isSaved ? " active" : ""}" data-role-save="${role.id}" aria-label="${isSaved ? "Saved" : "Save role"}" title="${isSaved ? "Saved" : "Save"}">${icon(isSaved ? "bookmark-check" : "bookmark")}</button>
      </div>
    </article>
  `;
}

/* Wire the compare + save icon buttons on any container of unified role cards.
   `onChange` lets the host refresh its own grid after a toggle. */
function bindRoleCardActions(root, onChange) {
  qsa("[data-role-save]", root).forEach(btn => btn.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const nowSaved = toggleRoleSaved(btn.dataset.roleSave);
    btn.classList.toggle("active", nowSaved);
    btn.innerHTML = icon(nowSaved ? "bookmark-check" : "bookmark");
    btn.setAttribute("aria-label", nowSaved ? "Saved" : "Save role");
    btn.setAttribute("title", nowSaved ? "Saved" : "Save");
    createIcons();
    showToast(nowSaved ? "Role saved." : "Removed from saved.");
    renderNavigation();
    if (onChange) onChange();
  }));
  qsa("[data-role-compare]", root).forEach(btn => btn.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const inCompare = toggleRoleCompare(btn.dataset.roleCompare);
    btn.classList.toggle("active", inCompare);
    renderCompareTray();
    if (onChange) onChange();
  }));
}

/* Full role detail PAGE (role.html?role=<id>) - the destination for every
   "View role" / "View details" action. Full description, requirements, salary
   in RM, company info, why Vera matched, and functional apply/save/compare. */
function renderRoleDetailPage() {
  const root = qs("[data-role-detail-page]");
  if (!root) return;
  if (!requireAccount(root, "view this role")) return;
  const roleId = new URLSearchParams(location.search).get("role");
  const role = roleId ? findRoleById(roleId) : null;
  const back = roleDetailBackTarget();
  const backLinkMarkup = `<a class="cg-role-page-back" href="${back.href}"${back.useHistory ? " data-role-back" : ""}>${icon("arrow-left")} ${back.label}</a>`;
  const wireRoleBack = () => qs("[data-role-back]", root)?.addEventListener("click", event => {
    // Prefer real history so the origin page's scroll position is restored;
    // the href is the fallback when there's no in-page history to pop.
    if (window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  });
  if (!role) {
    root.innerHTML = `
      <section class="cg-role-page">
        ${backLinkMarkup}
        <div class="cg-role-page-empty">
          ${icon("search-x")}
          <h1>Role not found</h1>
          <p>This role may have been filled or is no longer tracked by Vera.</p>
          <a class="btn btn-primary" href="recommended-roles.html">Browse all roles ${icon("arrow-right")}</a>
        </div>
        ${veraWidgetMarkup()}
      </section>
    `;
    createIcons();
    wireVeraWidget(root);
    wireRoleBack();
    return;
  }
  const state = readState();
  const loggedIn = Boolean(state.session.loggedIn);
  const isSaved = (state.savedJobs || []).includes(role.id);
  const isApplied = (state.applications || []).includes(role.id);
  const inCompare = comparedRoleIds().includes(role.id);
  const org = findOrgByName(role.company);
  const ownedSkills = [
    ...((state.profile?.skills?.technical) || []),
    ...((state.profile?.skills?.tools) || [])
  ];
  const skillRows = role.skills.map(skill => ({ skill, have: skillIsCovered(skill, ownedSkills) }));
  const veraMark = `<img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI">`;
  const similar = allNormalizedRoles().filter(other => other.id !== role.id).sort((a, b) => b.match - a.match).slice(0, 3);
  const posting = generateJobPosting(role);

  root.innerHTML = `
    <section class="cg-role-page">
      ${backLinkMarkup}
      <header class="cg-role-page-hero">
        <span class="cg-role-page-avatar">${role.company.charAt(0)}</span>
        <div class="cg-role-page-hero-copy">
          <div class="section-kicker">${role.company}${role.industry ? ` &middot; ${role.industry}` : ""}</div>
          <h1>${role.title}</h1>
          <p class="cg-role-page-meta">${icon("map-pin")} ${role.location || "Flexible"} <i>&middot;</i> ${role.mode} <i>&middot;</i> ${role.posted}</p>
        </div>
        <span class="cg-role-page-match"><strong>${role.match}</strong><small>Match</small></span>
      </header>

      <div class="cg-role-page-grid">
        <div class="cg-role-page-main">
          ${role.why.length ? `
            <div class="cg-role-detail-why">
              <h3>${veraMark} Why Vera matched this</h3>
              <ul>${role.why.slice(0, 4).map(reason => `<li>${icon("check-circle-2")} ${reason}</li>`).join("")}</ul>
            </div>
          ` : ""}
          <div class="cg-role-detail-section">
            <h3>${icon("file-text")} About the role</h3>
            ${posting.about.map(paragraph => `<p>${paragraph}</p>`).join("")}
          </div>

          <div class="cg-role-detail-section">
            <h3>${icon("list-checks")} What you'll do</h3>
            <ul class="cg-role-detail-list">
              ${posting.responsibilities.map(item => `<li>${icon("chevron-right")} ${item}</li>`).join("")}
            </ul>
          </div>

          ${skillRows.length ? `
            <div class="cg-role-detail-section">
              <h3>${icon("target")} Requirements &amp; skills</h3>
              <div class="cg-role-detail-skills">
                ${skillRows.map(row => `<span class="cg-role-skill${row.have ? " have" : ""}">${icon(row.have ? "check" : "circle")} ${row.skill}</span>`).join("")}
              </div>
              <p class="muted small">${skillRows.filter(r => r.have).length}/${skillRows.length} matched to your profile.</p>
              <div class="cg-role-detail-req-split">
                <div><span>Must-have</span><ul>${posting.mustHave.map(item => `<li>${item}</li>`).join("")}</ul></div>
                <div><span>Nice-to-have</span><ul>${posting.niceToHave.map(item => `<li>${item}</li>`).join("")}</ul></div>
              </div>
            </div>
          ` : ""}

          <div class="cg-role-detail-section">
            <h3>${icon("gift")} Benefits &amp; perks</h3>
            <div class="cg-role-detail-benefits">
              ${posting.benefits.map(item => `<span class="cg-role-benefit-chip">${icon("check")} ${item}</span>`).join("")}
            </div>
          </div>

          ${role.caution ? `<div class="cg-role-detail-caution">${icon("triangle-alert")} ${role.caution}</div>` : ""}

          <div class="cg-role-detail-section">
            <h3>${icon("building-2")} About ${role.company}</h3>
            <p>${org ? org.summary : `${role.company} is one of the employers Vera actively tracks roles for${role.industry ? ` in ${role.industry.toLowerCase()}` : ""}${role.location ? `, based in ${role.location}` : ""}.`}</p>
            ${org ? `<a class="cg-role-detail-company-link" href="company-profile.html?org=${org.id}">View full company profile ${icon("arrow-right")}</a>` : ""}
          </div>

          ${similar.length ? `
            <div class="cg-role-detail-similar">
              <h3>Similar roles</h3>
              <div class="cg-role-detail-similar-grid">
                ${similar.map(other => roleCardMarkup(other, { compact: true })).join("")}
              </div>
            </div>
          ` : ""}
        </div>

        <aside class="cg-role-page-side">
          <div class="cg-role-page-card">
            <div class="cg-role-detail-stats">
              <div><span>Vera match</span><strong>${role.match}%</strong></div>
              <div><span>Salary</span><strong>${role.salary}</strong></div>
              <div><span>Work mode</span><strong>${role.mode}</strong></div>
              ${role.warmIntro ? `<div class="warm"><span>Warm intro</span><strong>${icon("sparkles")} Available</strong></div>` : ""}
            </div>
            <div class="cg-role-page-actions">
              <button type="button" class="btn btn-primary" data-role-apply="${role.id}">${icon(isApplied ? "check" : "send")} ${isApplied ? "Applied" : "Quick apply"}</button>
              <button type="button" class="btn btn-ghost" data-role-save="${role.id}">${icon(isSaved ? "bookmark-check" : "bookmark")} ${isSaved ? "Saved" : "Save role"}</button>
              <button type="button" class="btn btn-ghost" data-role-compare="${role.id}">${icon("git-compare")} ${inCompare ? "In compare" : "Compare"}</button>
              <a class="btn btn-ghost" href="${loggedIn ? `posts.html?topic=${encodeURIComponent(`Tell me more about ${role.title} at ${role.company}`)}#messages` : "login.html"}">${veraMark} Ask Vera</a>
            </div>
          </div>
          ${org ? `
            <div class="cg-role-page-card cg-role-detail-company">
              <div>
                <span class="cg-directory-logo small">${org.name.charAt(0)}</span>
                <div><h4>${org.name}</h4><p>${org.industry} &middot; ${org.location} &middot; ${Number(org.rating).toFixed(1)} ★</p></div>
              </div>
              <a class="btn btn-ghost btn-sm" href="company-profile.html?org=${org.id}">View company ${icon("arrow-right")}</a>
            </div>
          ` : ""}
        </aside>
      </div>
      ${veraWidgetMarkup()}
    </section>
  `;
  createIcons();
  wireVeraWidget(root);

  qs("[data-role-apply]", root)?.addEventListener("click", () => {
    if ((readState().applications || []).includes(role.id)) return;
    updateApplicationStage(role.id, "applied");
    showToast(`Applied to ${role.title} at ${role.company}.`);
    renderRoleDetailPage();
    renderNavigation();
  });
  qs("[data-role-save]", root)?.addEventListener("click", () => {
    const nowSaved = toggleRoleSaved(role.id);
    showToast(nowSaved ? `Saved ${role.title}.` : "Removed from saved.");
    renderRoleDetailPage();
    renderNavigation();
  });
  qs("[data-role-compare]", root)?.addEventListener("click", () => {
    toggleRoleCompare(role.id);
    renderCompareTray();
    renderRoleDetailPage();
  });
  wireRoleBack();
}

/* Re-render whichever role-bearing page is currently mounted, so save/apply
   from the modal reflects immediately without a full reload. */
function refreshRoleSurfaces() {
  const page = document.body.dataset.page;
  if (page === "dashboard") renderDashboard();
  else if (document.querySelector("[data-recommended-roles]")) renderRecommendedRoles();
  renderNavigation();
}

function renderUserProfile() {
  const root = qs("[data-user-profile]");
  if (!root) return;
  if (!requireAccount(root, "view other members' profiles")) return;
  const personId = new URLSearchParams(location.search).get("id");
  const person = DATA.people.find(item => item.id === personId);
  if (!person) {
    root.innerHTML = `
      <div class="locked-state-wrap">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Profile not found</div>
          <h1 class="section-title">We could not find that member profile.</h1>
          <p class="section-sub">The link may be out of date, or this person is no longer on CareerGo.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="discover.html">${icon("arrow-left")} Back to Discover</a></div>
        </div>
      </div>
    `;
    createIcons();
    return;
  }
  const state = readState();
  const isFollowing = (state.followingUsers || []).includes(person.id);
  const connectionState = (state.connectionStatus || {})[person.id] || "none";
  const connectionLabel = { none: "Add Friend", pending: "Request Sent", connected: "Connected" }[connectionState];
  const connectionIcon = { none: "user-plus", pending: "clock", connected: "user-check" }[connectionState];
  const targetIndustries = state.profile?.preferences?.industries || [];
  const sharedSignals = [];
  if (person.university === "um") sharedSignals.push("You're both connected to University of Malaya.");
  if (person.industry && targetIndustries.includes(person.industry)) sharedSignals.push(`You're both focused on ${person.industry}.`);
  if (person.tag === "Mentor") sharedSignals.push("Vera matched this mentor to your roadmap.");
  const initials = orgInitials(person.name);

  root.innerHTML = `
    <section class="cg-cp">
      <a class="cg-cp-back" href="discover.html">${icon("arrow-left")} Discover</a>

      <article class="cg-cp-hero">
        <div class="cg-cp-hero-top">
          <span class="cg-cp-mono">${initials}</span>
          <div class="cg-cp-hero-id">
            <span class="cg-section-kicker">${escapeHtml(person.tag)}</span>
            <h1>${escapeHtml(person.name)}</h1>
            <p class="cg-cp-hero-meta">${icon("briefcase")} ${escapeHtml(person.role)}${person.company ? ` &middot; ${icon("building-2")} ${escapeHtml(person.company)}` : ""}</p>
          </div>
          <div class="cg-cp-hero-actions">
            <button type="button" class="btn btn-primary" data-user-follow="${person.id}">${icon(isFollowing ? "user-check" : "user-plus")} ${isFollowing ? "Following" : "Follow"}</button>
            <a class="btn btn-ghost" href="posts.html?person=${encodeURIComponent(person.id)}#messages">${icon("send")} Message</a>
            <button type="button" class="btn btn-ghost" data-user-connect="${person.id}" ${connectionState !== "none" ? "disabled" : ""}>${icon(connectionIcon)} ${connectionLabel}</button>
          </div>
        </div>
        <div class="cg-cp-vera">
          <span class="cg-cp-vera-label">${icon("bot")} Vera's read</span>
          <p>${escapeHtml(person.bio)}</p>
          ${person.signal ? `<p class="cg-cp-vera-watch"><b>Recent:</b> ${escapeHtml(person.signal)}</p>` : ""}
        </div>
      </article>

      ${sharedSignals.length ? `
      <article class="cg-cp-card">
        <span class="cg-section-kicker">Shared with you</span>
        <h2>Why Vera surfaced this connection</h2>
        <ul class="cg-uni-requirements">
          ${sharedSignals.map(signal => `<li class="ok">${icon("check-circle-2")}<div><p>${escapeHtml(signal)}</p></div></li>`).join("")}
        </ul>
      </article>
      ` : ""}
    </section>
  `;
  createIcons();
  qs("[data-user-follow]", root)?.addEventListener("click", () => {
    const next = readState();
    next.followingUsers = Array.isArray(next.followingUsers) ? next.followingUsers : [];
    const nowFollowing = next.followingUsers.includes(person.id);
    next.followingUsers = nowFollowing ? next.followingUsers.filter(id => id !== person.id) : [...next.followingUsers, person.id];
    writeState(next);
    showToast(nowFollowing ? `Unfollowed ${person.name}.` : `Following ${person.name}.`);
    renderUserProfile();
  });
  qs("[data-user-connect]", root)?.addEventListener("click", () => {
    const next = readState();
    next.connectionStatus = next.connectionStatus && typeof next.connectionStatus === "object" ? next.connectionStatus : {};
    if (next.connectionStatus[person.id]) return;
    next.connectionStatus[person.id] = "pending";
    writeState(next);
    showToast(`Connection request sent to ${person.name}.`);
    renderUserProfile();
  });
}

let recommendedRolesFilter = "all";

let notificationsFilterTab = "all";
let notificationsVisibleCount = 15;

function renderNotificationsPage() {
  const root = qs("[data-notifications-page]");
  if (!root) return;
  if (!requireAccount(root, "see your notifications")) return;
  const state = readState();
  const all = normalizeNotifications(state.notifications);
  const unreadCount = all.filter(note => !note.read).length;
  const tabs = [["all", `All ${all.length}`], ["unread", `Unread ${unreadCount}`]];
  const filtered = notificationsFilterTab === "unread" ? all.filter(note => !note.read) : all;
  const visible = filtered.slice(0, notificationsVisibleCount);
  const hasMore = filtered.length > visible.length;

  const buckets = [["Today", []], ["This week", []], ["Earlier", []]];
  const bucketIndex = { "Today": 0, "This week": 1, "Earlier": 2 };
  visible.forEach(note => buckets[bucketIndex[notificationRecencyBucket(note.ts)]][1].push(note));

  const groupsHtml = buckets.filter(([, items]) => items.length).map(([label, items]) => `
    <section class="cg-notif-group">
      <h2 class="cg-notif-group-title">${label}</h2>
      <div class="cg-notif-list">
        ${items.map(note => {
          const navAttr = note.href ? ` data-notification-nav="${note.href}"` : "";
          return `
          <article class="cg-notif-row${note.read ? "" : " is-unread"}" data-notification-id="${note.id}"${navAttr} role="button" tabindex="0" aria-label="${note.title}">
            ${notificationBadgeMarkup(note)}
            <div class="cg-notif-body">
              <div class="cg-notif-row-top"><h3>${note.title}</h3><time>${relativeTime(note.ts)}</time></div>
              <p>${note.body}</p>
            </div>
            <div class="cg-notif-row-actions">
              ${note.read ? "" : `<button type="button" class="cg-notif-icon-btn" data-notif-read="${note.id}" aria-label="Mark as read" title="Mark as read">${icon("check")}</button>`}
              <button type="button" class="cg-notif-icon-btn" data-notif-dismiss="${note.id}" aria-label="Dismiss" title="Dismiss">${icon("x")}</button>
            </div>
            ${note.read ? "" : `<i class="cg-notif-dot" aria-hidden="true"></i>`}
          </article>
        `;
        }).join("")}
      </div>
    </section>
  `).join("");

  root.innerHTML = `
    <section class="cg-notif-page">
      <a class="cg-notif-back" href="dashboard.html">${icon("arrow-left")} Back to Today</a>
      <header class="cg-notif-hero">
        <div>
          <span class="cg-section-kicker">Activity</span>
          <h1>Notifications</h1>
          <p>Everything Vera surfaced for you - interviews, matches, recruiter replies, and career-value moves.</p>
        </div>
        ${unreadCount ? `<button type="button" class="btn btn-ghost" data-notif-mark-all>${icon("check-check")} Mark all read</button>` : ""}
      </header>
      <div class="cg-notif-tabs">
        ${tabs.map(([key, label]) => `<button type="button" class="pill${notificationsFilterTab === key ? " active" : ""}" data-notif-tab="${key}">${label}</button>`).join("")}
      </div>
      ${visible.length ? groupsHtml : `
        <div class="cg-notif-empty">
          ${icon("bell-off")}
          <strong>${notificationsFilterTab === "unread" ? "No unread notifications" : "Nothing here yet"}</strong>
          <small>${notificationsFilterTab === "unread" ? "You're all caught up." : "CareerGo will surface interviews, matches, and Vera's moves here."}</small>
        </div>
      `}
      ${hasMore ? `<div class="cg-notif-more"><button type="button" class="btn btn-ghost" data-notif-load-more>${icon("chevron-down")} Load older</button></div>` : ""}
    </section>
  `;
  createIcons();

  qsa("[data-notif-tab]", root).forEach(btn => btn.addEventListener("click", () => {
    notificationsFilterTab = btn.dataset.notifTab;
    notificationsVisibleCount = 15;
    renderNotificationsPage();
  }));
  qs("[data-notif-mark-all]", root)?.addEventListener("click", () => {
    markAllNotificationsRead();
    renderNavigation();
    renderNotificationsPage();
    showToast("All notifications marked as read.");
  });
  qs("[data-notif-load-more]", root)?.addEventListener("click", () => {
    notificationsVisibleCount += 15;
    renderNotificationsPage();
  });
  qsa("[data-notif-read]", root).forEach(btn => btn.addEventListener("click", event => {
    event.stopPropagation();
    markNotificationRead(btn.dataset.notifRead);
    renderNavigation();
    renderNotificationsPage();
  }));
  qsa("[data-notif-dismiss]", root).forEach(btn => btn.addEventListener("click", event => {
    event.stopPropagation();
    dismissNotification(btn.dataset.notifDismiss);
    renderNavigation();
    renderNotificationsPage();
    showToast("Notification dismissed.");
  }));
  qsa("[data-notification-nav]", root).forEach(item => {
    const go = () => {
      markNotificationRead(item.dataset.notificationId);
      location.href = item.dataset.notificationNav;
    };
    item.addEventListener("click", go);
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        go();
      }
    });
  });
}

let rolesDirState = { q: "", mode: "", minMatch: 0, sort: "match", initialized: false };

function renderRecommendedRoles() {
  const root = qs("[data-recommended-roles]");
  if (!root) return;
  if (!requireAccount(root, "browse roles picked by Vera")) return;
  if (needsOnboarding(root)) return;

  if (!rolesDirState.initialized) {
    const qParam = new URLSearchParams(location.search).get("q");
    if (qParam) rolesDirState.q = qParam;
    rolesDirState.initialized = true;
  }

  const allRoles = allNormalizedRoles();
  const pillFilters = [
    ["all", "All"],
    ["top", "Top match"],
    ["warm", "Warm intros"],
    ["remote", "Remote"],
    ["hybrid", "Hybrid"],
    ["saved", "Saved"]
  ];

  function applyFilters() {
    const state = readState();
    const q = rolesDirState.q.trim().toLowerCase();
    let list = allRoles.filter(role => {
      if (q) {
        const hay = `${role.title} ${role.company} ${role.location} ${role.industry} ${role.skills.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (rolesDirState.mode && role.mode !== rolesDirState.mode) return false;
      if (rolesDirState.minMatch && role.match < rolesDirState.minMatch) return false;
      if (recommendedRolesFilter === "top" && role.match < 90) return false;
      if (recommendedRolesFilter === "warm" && !role.warmIntro) return false;
      if (recommendedRolesFilter === "remote" && role.mode !== "Remote") return false;
      if (recommendedRolesFilter === "hybrid" && role.mode !== "Hybrid") return false;
      if (recommendedRolesFilter === "saved" && !(state.savedJobs || []).includes(role.id)) return false;
      return true;
    });
    if (rolesDirState.sort === "match") list = list.sort((a, b) => b.match - a.match);
    else if (rolesDirState.sort === "title") list = list.sort((a, b) => a.title.localeCompare(b.title));
    else if (rolesDirState.sort === "company") list = list.sort((a, b) => a.company.localeCompare(b.company));
    return list;
  }

  function gridMarkup(list) {
    if (!list.length) return `<p class="cg-rp-empty">No roles match your search yet - try clearing a filter.</p>`;
    return list.map(role => roleCardMarkup(role)).join("");
  }

  root.innerHTML = `
    <section class="cg-rp">
      <a class="cg-rp-back" href="discover.html">${icon("arrow-left")} Discover</a>
      <header class="cg-rp-hero">
        <div>
          <span class="cg-section-kicker">All roles</span>
          <h1>Every role Vera is <em>tracking for you.</em></h1>
          <p>Search and filter the full set of open roles matched to your Product Management journey - ranked by fit, warm intros, and trajectory.</p>
        </div>
        <span class="pill cg-rp-ai-pill">${icon("bot")} Ranked by AI match</span>
      </header>

      <div class="cg-rp-toolbar">
        <label class="cg-rp-search">${icon("search")}<input data-rp-search placeholder="Search by title, company, location, or skill..." value="${rolesDirState.q.replace(/"/g, "&quot;")}"></label>
        <select data-rp-mode aria-label="Work mode">
          <option value="">All work modes</option>
          <option value="Remote"${rolesDirState.mode === "Remote" ? " selected" : ""}>Remote</option>
          <option value="Hybrid"${rolesDirState.mode === "Hybrid" ? " selected" : ""}>Hybrid</option>
          <option value="On-site"${rolesDirState.mode === "On-site" ? " selected" : ""}>On-site</option>
          <option value="Onsite"${rolesDirState.mode === "Onsite" ? " selected" : ""}>Onsite</option>
        </select>
        <select data-rp-match aria-label="Minimum match">
          <option value="0">Any match</option>
          <option value="80"${rolesDirState.minMatch === 80 ? " selected" : ""}>80%+ match</option>
          <option value="85"${rolesDirState.minMatch === 85 ? " selected" : ""}>85%+ match</option>
          <option value="90"${rolesDirState.minMatch === 90 ? " selected" : ""}>90%+ match</option>
        </select>
        <select data-rp-sort aria-label="Sort roles">
          <option value="match"${rolesDirState.sort === "match" ? " selected" : ""}>Sort: Top match</option>
          <option value="title"${rolesDirState.sort === "title" ? " selected" : ""}>Sort: Title A-Z</option>
          <option value="company"${rolesDirState.sort === "company" ? " selected" : ""}>Sort: Company A-Z</option>
        </select>
      </div>

      <div class="cg-rp-filters">
        <div class="cg-rp-filter-pills">
          ${pillFilters.map(([key, label]) => `<button type="button" class="pill${recommendedRolesFilter === key ? " active" : ""}" data-rp-filter="${key}">${label}</button>`).join("")}
        </div>
        <p class="cg-rp-count"><strong data-rp-count>0</strong> role<span data-rp-count-plural></span> shown</p>
      </div>

      <div class="cg-rp-grid" data-rp-grid></div>
      ${veraWidgetMarkup()}
    </section>
  `;

  const grid = qs("[data-rp-grid]", root);
  const countNode = qs("[data-rp-count]", root);
  const pluralNode = qs("[data-rp-count-plural]", root);

  function refreshGrid() {
    const list = applyFilters();
    grid.innerHTML = gridMarkup(list);
    if (countNode) countNode.textContent = String(list.length);
    if (pluralNode) pluralNode.textContent = list.length === 1 ? "" : "s";
    createIcons();
    bindGridActions();
  }

  function bindGridActions() {
    bindRoleCardActions(grid, () => {
      // Re-filter only when the "Saved" quick-filter is active, so a card that
      // was just unsaved leaves the view; otherwise inline update is enough.
      if (recommendedRolesFilter === "saved") refreshGrid();
    });
  }

  qs("[data-rp-search]", root)?.addEventListener("input", event => {
    rolesDirState.q = event.target.value;
    refreshGrid();
  });
  qs("[data-rp-mode]", root)?.addEventListener("change", event => { rolesDirState.mode = event.target.value; refreshGrid(); });
  qs("[data-rp-match]", root)?.addEventListener("change", event => { rolesDirState.minMatch = Number(event.target.value) || 0; refreshGrid(); });
  qs("[data-rp-sort]", root)?.addEventListener("change", event => { rolesDirState.sort = event.target.value; refreshGrid(); });
  qsa("[data-rp-filter]", root).forEach(btn => btn.addEventListener("click", () => {
    recommendedRolesFilter = recommendedRolesFilter === btn.dataset.rpFilter ? "all" : btn.dataset.rpFilter;
    qsa("[data-rp-filter]", root).forEach(b => b.classList.toggle("active", b.dataset.rpFilter === recommendedRolesFilter));
    refreshGrid();
  }));

  refreshGrid();
  createIcons();
  wireVeraWidget(root);
}

function normalizeSkillToken(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function skillIsCovered(skillLabel, ownedSkills) {
  const target = normalizeSkillToken(skillLabel);
  if (!target) return false;
  return (ownedSkills || []).some(owned => {
    const ownedNorm = normalizeSkillToken(owned);
    return Boolean(ownedNorm) && (ownedNorm.includes(target) || target.includes(ownedNorm));
  });
}

function formatKRM(value) {
  return `RM ${(value / 1000).toFixed(1)}k`;
}

function marketRoleFor(job) {
  if (!job) return null;
  return DATA.marketRoles.find(role => role.role === job.title)
    || DATA.marketRoles.find(role => job.skills.some(skill => role.skills.some(roleSkill => normalizeSkillToken(roleSkill) === normalizeSkillToken(skill))))
    || null;
}

function veraInsight(state) {
  const profile = state.profile;
  const technical = profile.skills?.technical || [];
  const targetLabel = getTargetLabel(profile);
  const savedJobs = DATA.jobs
    .filter(job => (state.savedJobs || []).includes(job.id))
    .sort((a, b) => b.match - a.match);

  if (!savedJobs.length) {
    return {
      bubble1: `You haven't saved any roles yet. Save a few roles you like for ${targetLabel} and I'll start spotting the gaps that matter most against your profile.`,
      question: "Where should I start looking?",
      bubble2: `Head to Discover, filter for roles in ${targetLabel}, and save 3-4 of them. Once they're saved I'll compare their requirements against your skills and flag your biggest blocker.`,
      moveTitle: profile.intelligence?.immediateActions?.[0] || `Save your first roles for ${targetLabel}`,
      stats: [
        { label: "Readiness", value: `${profile.intelligence?.readinessScore ?? 42}%` },
        { label: "Saved roles", value: "0" },
        { label: "Pay target", value: profile.preferences?.minimumSalary || "Not set" }
      ]
    };
  }

  const topJob = savedJobs[0];
  const missing = topJob.skills.filter(skill => !skillIsCovered(skill, technical));
  const market = marketRoleFor(topJob);

  if (!missing.length) {
    return {
      bubble1: `Your strongest saved match, ${topJob.title} at ${topJob.company} (${topJob.match}% match), doesn't have any skill gaps against your profile right now.`,
      question: "So what's actually holding this one back?",
      bubble2: `At this point it's proof, not skills. Add one project or metric that shows you've used ${topJob.skills[0]} in a real situation - that usually moves reviewers faster than another course.`,
      moveTitle: `Add one proof point for ${topJob.skills[0]}`,
      stats: [
        { label: "Readiness", value: `${topJob.match}%` },
        { label: "Saved roles", value: String(savedJobs.length) },
        { label: "Pay band", value: market ? formatKRM(market.fair) : (profile.preferences?.minimumSalary || "Not set") }
      ]
    };
  }

  const gapCounts = {};
  missing.forEach(skill => {
    gapCounts[skill] = savedJobs.filter(job => job.skills.some(s => normalizeSkillToken(s) === normalizeSkillToken(skill))).length;
  });
  const gapSkill = Object.entries(gapCounts).sort((a, b) => b[1] - a[1])[0][0];
  const affectedRoles = gapCounts[gapSkill];
  const coverageDelta = Math.round((1 / topJob.skills.length) * 100);
  const projectedMatch = Math.min(99, topJob.match + coverageDelta);
  const minutes = Math.min(60, 20 + missing.length * 10);

  return {
    bubble1: `I noticed something. You've saved ${savedJobs.length} role${savedJobs.length === 1 ? "" : "s"} this week for ${targetLabel} - ${affectedRoles} of them ask for ${gapSkill} in the JD. That's a real gap against your profile right now.`,
    question: `How much would closing the ${gapSkill} gap actually change?`,
    bubble2: `For ${topJob.title} at ${topJob.company}: closing this gap moves your fit from ${topJob.match}% toward ${projectedMatch}%${market ? `, in a role that typically pays ${formatKRM(market.current)} to ${formatKRM(market.fair)}` : ""}. ${minutes} focused minutes on ${gapSkill} gets the first pass done.`,
    moveTitle: `${minutes}-min ${gapSkill} practice session`,
    stats: [
      { label: "Readiness", value: `+${coverageDelta}%` },
      { label: "Saved roles", value: `${affectedRoles} role${affectedRoles === 1 ? "" : "s"}` },
      { label: "Pay band", value: market ? `+${formatKRM(market.fair - market.current)}` : "Set a target" }
    ]
  };
}

const VERA_QUICK_PROMPTS = [
  "What should I do this week?",
  "Which skill gap should I close first?",
  "What should I do about my active application?",
  "Compare my saved roles by career impact",
  "Review my next application strategy"
];

function getActiveVeraConversation(state) {
  return state.veraConversations.find(c => c.id === state.activeVeraConversationId) || state.veraConversations[0];
}

function veraConversationTitle(conv) {
  if (conv.title && conv.title !== "New chat") return conv.title;
  const firstUser = conv.messages.find(m => m.from === "user");
  return firstUser ? firstUser.text : "New chat";
}

function relativeConversationTime(ts) {
  const diffMin = Math.round((Date.now() - ts) / 60000);
  if (diffMin < 1) return "now";
  if (diffMin < 60) return `${diffMin}m`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h`;
  return `${Math.round(diffHr / 24)}d`;
}

function createVeraConversation(state, seedTopic) {
  const now = Date.now();
  const id = `conv-${now}-${Math.random().toString(36).slice(2, 7)}`;
  const messages = seedTopic
    ? [
        { from: "user", text: `Help me with ${seedTopic}` },
        { from: "vera", text: veraReply(seedTopic) }
      ]
    : [];
  const conv = { id, title: seedTopic || "New chat", createdAt: now, updatedAt: now, messages };
  state.veraConversations = [conv, ...state.veraConversations];
  state.activeVeraConversationId = id;
  state.chat = conv.messages;
  return state;
}

function appendVeraMessage(state, from, text) {
  const conv = getActiveVeraConversation(state);
  conv.messages.push({ from, text });
  conv.updatedAt = Date.now();
  if ((!conv.title || conv.title === "New chat") && from === "user") conv.title = text;
  state.chat = conv.messages;
  return state;
}

function veraHistoryItemHtml(conv, activeId) {
  return `
    <button type="button" class="cg-vera-history-item ${conv.id === activeId ? "active" : ""}" data-vera-history-item="${conv.id}">
      <strong>${escapeHtml(veraConversationTitle(conv))}</strong>
      <small>${relativeConversationTime(conv.updatedAt)}</small>
    </button>
  `;
}

function veraVisibleConversations(state) {
  return state.veraConversations.filter(c => c.messages.length > 0).sort((a, b) => b.updatedAt - a.updatedAt);
}

function veraMessagesHtml(messages, firstName) {
  const shown = messages.length ? messages : [{ from: "vera", text: `Welcome back, ${firstName}. What can I help you with today?` }];
  return shown.map(msg => `<p class="${msg.from === "vera" ? "incoming" : "outgoing"}">${msg.text}</p>`).join("")
    + `<div class="cg-vera-quick-prompts" role="group" aria-label="Quick questions for Vera">${VERA_QUICK_PROMPTS.map(prompt => `<button type="button" class="cg-vera-quick-chip" data-vera-chat-quick-prompt="${escapeHtml(prompt)}">${prompt}</button>`).join("")}</div>`;
}

function veraChatPanelMarkup(state) {
  const conversations = veraVisibleConversations(state);
  const active = getActiveVeraConversation(state);
  return `
    <div class="cg-vera-chat-panel" data-vera-chat-panel hidden>
      <div class="cg-vera-chat-backdrop" data-vera-chat-backdrop></div>
      <aside class="cg-vera-chat-sheet" role="dialog" aria-modal="true" aria-label="Coach Vera chat">
        <div class="cg-vera-chat-history">
          <div class="cg-vera-chat-history-head">
            <span>Conversations</span>
            <button type="button" data-vera-new-chat>${icon("plus")} New chat</button>
          </div>
          <div class="cg-vera-chat-history-list" data-vera-history-list>
            ${conversations.map(conv => veraHistoryItemHtml(conv, active.id)).join("")}
          </div>
        </div>
        <div class="cg-vera-chat-main">
          <header class="cg-vera-chat-head">
            <div><h2>Coach Vera</h2><p>Your AI career coach &middot; always online</p></div>
            <span class="cg-vera-chat-badge">Personalized to your profile</span>
            <button type="button" class="cg-vera-chat-close" data-vera-chat-close aria-label="Close Vera chat">${icon("x")}</button>
          </header>
          <section class="cg-chat-thread" data-vera-chat-messages aria-label="Conversation with Coach Vera">
            ${veraMessagesHtml(active.messages, getFirstName(state))}
          </section>
          <form class="cg-message-composer" data-vera-chat-composer>
            <input placeholder="Write a message..." data-vera-chat-input>
            <button type="submit">${icon("send")} Send</button>
          </form>
        </div>
      </aside>
    </div>
  `;
}

function veraPanelEls() {
  const panel = qs("[data-vera-chat-panel]");
  if (!panel) return null;
  return {
    panel,
    backdrop: qs("[data-vera-chat-backdrop]", panel),
    closeBtn: qs("[data-vera-chat-close]", panel),
    historyList: qs("[data-vera-history-list]", panel),
    messagesPane: qs("[data-vera-chat-messages]", panel),
    composer: qs("[data-vera-chat-composer]", panel),
    input: qs("[data-vera-chat-input]", panel),
    newChatBtn: qs("[data-vera-new-chat]", panel)
  };
}

function refreshVeraPanel() {
  const els = veraPanelEls();
  if (!els) return;
  const state = readState();
  const isDraft = els.panel.dataset.draftMode === "1";
  const conversations = veraVisibleConversations(state);
  const active = getActiveVeraConversation(state);
  const highlightId = isDraft ? null : active.id;
  els.historyList.innerHTML = conversations.map(conv => veraHistoryItemHtml(conv, highlightId)).join("");
  els.messagesPane.innerHTML = veraMessagesHtml(isDraft ? [] : active.messages, getFirstName(state));
  createIcons();
  els.messagesPane.scrollTop = els.messagesPane.scrollHeight;
}

function sendVeraChatMessage(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const els = veraPanelEls();
  let state = readState();
  if (els && els.panel.dataset.draftMode === "1") {
    state = createVeraConversation(state, null);
    delete els.panel.dataset.draftMode;
  }
  state = appendVeraMessage(state, "user", trimmed);
  state = appendVeraMessage(state, "vera", veraReply(trimmed));
  writeState(state);
  refreshVeraPanel();
}

function openVeraPanel(options = {}) {
  const els = veraPanelEls();
  if (!els) return;
  if (options.seedTopic) {
    let state = readState();
    state = createVeraConversation(state, options.seedTopic);
    writeState(state);
    delete els.panel.dataset.draftMode;
  }
  const state = readState();
  state.veraLastReadAt = Date.now();
  writeState(state);
  els.panel.hidden = false;
  document.body.classList.add("cg-vera-chat-open");
  refreshVeraPanel();
  els.input.focus();
}

function closeVeraPanel() {
  const els = veraPanelEls();
  if (!els) return;
  els.panel.hidden = true;
  document.body.classList.remove("cg-vera-chat-open");
}

function wireVeraChatPanel() {
  const els = veraPanelEls();
  if (!els || els.panel.dataset.wired) return;
  els.panel.dataset.wired = "1";
  els.newChatBtn.addEventListener("click", () => {
    els.panel.dataset.draftMode = "1";
    refreshVeraPanel();
    els.input.focus();
  });
  els.historyList.addEventListener("click", event => {
    const item = event.target.closest("[data-vera-history-item]");
    if (!item) return;
    delete els.panel.dataset.draftMode;
    const state = readState();
    state.activeVeraConversationId = item.dataset.veraHistoryItem;
    writeState(state);
    refreshVeraPanel();
  });
  els.messagesPane.addEventListener("click", event => {
    const chip = event.target.closest("[data-vera-chat-quick-prompt]");
    if (!chip) return;
    sendVeraChatMessage(chip.dataset.veraChatQuickPrompt);
  });
  els.composer.addEventListener("submit", event => {
    event.preventDefault();
    const text = els.input.value;
    els.input.value = "";
    sendVeraChatMessage(text);
  });
  els.closeBtn.addEventListener("click", closeVeraPanel);
  els.backdrop.addEventListener("click", closeVeraPanel);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !els.panel.hidden) closeVeraPanel();
  });
}

function veraWidgetMarkup() {
  const state = readState();
  const insight = veraInsight(state);
  const thread = (state.chat || []).map(msg => msg.from === "vera"
    ? `<div class="cg-vera-pop-bubble">${msg.text}</div>`
    : `<div class="cg-vera-pop-question">${msg.text}</div>`
  ).join("");
  return `
      <div class="cg-vera-widget" data-vera-widget>
        <div class="cg-vera-popover" data-vera-popover hidden>
          <div class="cg-vera-pop-head">
            <span>Coach Vera</span>
            <b class="cg-vera-pop-online">online</b>
            <button type="button" class="cg-vera-pop-expand" data-vera-pop-expand aria-label="Open full conversation">${icon("external-link")}</button>
            <button type="button" class="cg-vera-pop-close" data-vera-close aria-label="Close Vera">${icon("x")}</button>
          </div>
          <div class="cg-vera-pop-body" data-vera-pop-body>
            <div class="cg-vera-pop-bubble">${insight.bubble1}</div>
            <div class="cg-vera-pop-question">${insight.question}</div>
            <div class="cg-vera-pop-bubble">${insight.bubble2}</div>
            <div class="cg-vera-pop-move">
              <span>Vera's suggested move today</span>
              <h4>${insight.moveTitle}</h4>
              <div class="cg-vera-pop-stats">
                ${insight.stats.map(stat => `<div><span>${stat.label}</span><strong>${stat.value}</strong></div>`).join("")}
              </div>
            </div>
            <div class="cg-vera-pop-thread" data-vera-pop-thread>${thread}</div>
          </div>
          <div class="cg-vera-pop-quick" data-vera-pop-quick hidden role="group" aria-label="Quick questions for Vera">
            ${VERA_QUICK_PROMPTS.map(prompt => `<button type="button" class="cg-vera-pop-quick-chip" data-vera-pop-quick-prompt="${prompt}">${prompt}</button>`).join("")}
          </div>
          <form class="cg-vera-pop-composer" data-vera-pop-form>
            <input name="message" placeholder="Ask Vera anything about your career..." aria-label="Ask Vera" autocomplete="off" data-vera-pop-input>
            <button type="submit" aria-label="Send">${icon("send")}</button>
          </form>
        </div>
        <button type="button" class="cg-vera-trigger" data-vera-trigger aria-label="Ask Vera">
          <img class="cg-vera-trigger-logo" src="assets/vera-ai-coach.png" alt="Vera AI">
        </button>
      </div>
      ${veraChatPanelMarkup(state)}
  `;
}

function wireVeraWidget(root) {
  const widget = qs("[data-vera-widget]", root);
  if (!widget) return;
  const popover = qs("[data-vera-popover]", widget);
  const trigger = qs("[data-vera-trigger]", widget);
  const body = qs("[data-vera-pop-body]", popover);
  const thread = qs("[data-vera-pop-thread]", popover);
  const form = qs("[data-vera-pop-form]", popover);
  const input = qs("[data-vera-pop-input]", form);
  const quick = qs("[data-vera-pop-quick]", popover);
  const openPopover = () => {
    popover.hidden = false;
    body.scrollTop = body.scrollHeight;
  };
  const closePopover = () => {
    popover.hidden = true;
    quick.hidden = true;
  };
  const sendMessage = text => {
    const reply = veraReply(text);
    let next = readState();
    next = appendVeraMessage(next, "user", text);
    next = appendVeraMessage(next, "vera", reply);
    writeState(next);
    thread.insertAdjacentHTML("beforeend", `<div class="cg-vera-pop-question">${text}</div><div class="cg-vera-pop-bubble">${reply}</div>`);
    body.scrollTop = body.scrollHeight;
    refreshVeraPanel();
  };
  trigger.addEventListener("click", () => {
    if (popover.hidden) openPopover(); else closePopover();
  });
  qs("[data-vera-close]", popover).addEventListener("click", closePopover);
  qs("[data-vera-pop-expand]", popover)?.addEventListener("click", () => {
    closePopover();
    openVeraPanel();
  });
  qsa("[data-vera-open]", root).forEach(btn => btn.addEventListener("click", event => {
    event.stopPropagation();
    openPopover();
  }));
  wireVeraChatPanel();
  document.addEventListener("click", event => {
    if (!widget.contains(event.target)) closePopover();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closePopover();
  });
  input.addEventListener("focus", () => {
    quick.hidden = false;
  });
  input.addEventListener("blur", () => {
    window.setTimeout(() => { quick.hidden = true; }, 120);
  });
  quick.addEventListener("mousedown", event => {
    if (event.target.closest("[data-vera-pop-quick-prompt]")) event.preventDefault();
  });
  quick.addEventListener("click", event => {
    const chip = event.target.closest("[data-vera-pop-quick-prompt]");
    if (!chip) return;
    quick.hidden = true;
    sendMessage(chip.dataset.veraPopQuickPrompt);
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    quick.hidden = true;
    sendMessage(text);
  });
}

function renderVera() {
  const root = qs("[data-vera]");
  if (!root) return;
  const state = readState();
  if (!state.session.loggedIn) {
    root.innerHTML = `
      <aside class="glass-card"><div class="eyebrow"><span class="spark">*</span> Coach Vera</div><h2 class="section-title" style="font-size:36px">Create an account so Vera can coach your real journey.</h2><p class="section-sub">Vera adapts tone, mission difficulty, and roadmap style from your onboarding answers.</p><div class="hero-actions"><a class="btn btn-primary" href="register.html">${icon("user-plus")} Create account</a><a class="btn btn-ghost" href="login.html">${icon("log-in")} Log in</a></div></aside>
      <section class="glass-card"><h2 class="section-title mini">What Vera personalizes</h2><div class="grid-2"><div class="tool-card"><h3>Career stage</h3><p>Student, switcher, returning user, senior professional, and more.</p></div><div class="tool-card"><h3>Coach style</h3><p>Simple guidance, detailed explanations, confidence support, or direct missions.</p></div></div></section>
    `;
    createIcons();
    return;
  }
  qs(".page-hero")?.classList.add("is-hidden");

  const skillsContent = `
    <section class="glass-card">
      <div class="section-head"><div><div class="section-kicker">Skills growth</div><h2 class="section-title mini">Roadmap Vera recommends now.</h2></div><span class="pill cyan">Demand-led</span></div>
      <div class="timeline">
        ${[
          ["Product strategy", "Write one decision memo from your strongest project.", 45],
          ["SQL basics", "Complete dashboard query practice for product metrics.", 30],
          ["Metrics storytelling", "Add before/after impact to your portfolio case study.", 60]
        ].map(([title, body, progress]) => `<article class="timeline-item"><h3>${title}</h3><p class="muted">${body}</p>${progressBar(progress)}</article>`).join("")}
      </div>
    </section>
  `;

  root.className = "container os-layout";
  const veraContent = `
    <section class="vera-module">
    <aside class="glass-card">
      <div class="eyebrow"><span class="spark">*</span> Coach Vera</div>
      <h2 class="section-title" style="font-size:36px">Your AI career mentor.</h2>
      <p class="section-sub">Vera is designed like a teacher and life coach: proactive, warm, specific, and connected to the whole website.</p>
      <div class="detail-section vera-box">
        <h3>Vera knows</h3>
        <p class="muted">${state.profile.careerStage || "Your career stage"} - ${getTargetLabel(state.profile)} - ${state.applications.length} active application${state.applications.length === 1 ? "" : "s"}.</p>
        <div class="pill-row">${["Plan my week", "Compare companies", "Fix my resume", "Prep interview", "Explain application status"].map(x => `<a class="pill gold" href="posts.html?topic=${encodeURIComponent(x)}#messages">${x}</a>`).join("")}</div>
      </div>
    </aside>
    <div data-vera-panel>${skillsContent}</div>
    </section>
  `;
  root.innerHTML = appShell("vera", veraContent, { title: "Vera", subtitle: "Ask for coaching while keeping your dashboard, jobs, and profile one click away." });
  createIcons();
}

function veraReply(text) {
  const t = text.toLowerCase();
  if (t.includes("90-day") || t.includes("90 day")) return "For the 90-day plan, treat each phase as an evidence sprint. First lock your target and baseline, then build proof for the top gap, then apply selectively and prepare decision-quality interview stories.";
  if (t.includes("7-day") || t.includes("7 day") || t.includes("job search plan")) return "Here is your 7-day plan: Day 1 choose one target role, Day 2 polish one proof-heavy case study, Day 3 compare three companies, Day 4 save five roles, Day 5 apply to the best two, Day 6 practice one interview story, Day 7 review what got responses and adjust your filters.";
  if (t.includes("active application") || t.includes("application status") || t.includes("follow up")) return "For your active application, do three things: prepare a 60-second fit story, map the job requirements to two concrete projects, and send a short follow-up if there has been no update after five working days.";
  if (t.includes("skill gap") || t.includes("close first") || t.includes("gap should")) return "Close the proof gap first, not the certificate gap. For your target path, the strongest next proof is a product strategy memo with a metric, a trade-off, and one stakeholder decision.";
  if (t.includes("saved roles") || t.includes("career impact")) return "Compare saved roles by four signals: match score, promotion runway, learning curve, and company proof value. Pick the role that gives you the strongest future story, not only the easiest application.";
  if (t.includes("product analyst") || t.includes("switch into")) return "For a Product Analyst switch, start with SQL plus product metrics. Build one dashboard around activation, retention, or conversion, then write a short insight memo that explains what decision the data would change.";
  if (t.includes("case-study") || t.includes("case study")) return "For a case-study interview, structure your answer as context, constraints, options, decision, result, and reflection. The missing piece most candidates skip is the trade-off: say what you chose not to do and why.";
  if (t.includes("application strategy") || t.includes("before i apply")) return "Before applying, write one evidence sentence: 'I fit this role because I have done X, improved Y, and can prove it with Z.' If you cannot write that sentence, improve the role evidence first.";
  if (t.includes("company") || t.includes("compare")) return "Start with growth, balance, salary, and review themes. Maybank is safer and structured; Grab is faster and more intense; CIMB is a good mentorship middle path.";
  if (t.includes("resume") || t.includes("portfolio")) return "Your next portfolio update should prove product strategy. Add one case study with problem, trade-offs, metric, and stakeholder story.";
  if (t.includes("interview")) return "Prepare one STAR story for ambiguity, one for conflict, and one for measurable design impact. I would practice the case-study walkthrough first.";
  if (t.includes("market") || t.includes("salary") || t.includes("value")) return "Your fair-value gap is about RM12k. The fastest lift is product strategy plus metrics storytelling, because those are tied to higher-paying product roles.";
  if (t.includes("week") || t.includes("plan")) return "This week: research 3 organizations, save 2 high-fit roles, apply to 1 role above 85% match, and strengthen one missing proof point.";
  return "I would turn that into a decision. First define your goal, then compare the role or organization against growth, salary, culture, and evidence you can show.";
}

const AUTH_ROLE_KEY = "careergo-auth-role";
const AUTH_ROLE_CANDIDATE_TYPE = ROLE_TYPES.find(role => role !== "Employer / Recruiter") || "Student";
const AUTH_ROLE_EMPLOYER_TYPE = "Employer / Recruiter";

function normalizeAuthRole(value) {
  const role = String(value || "").trim().toLowerCase();
  if (["employer", "employer-os", "employer os", "employer / recruiter", "recruiter"].includes(role)) return "employer";
  return "candidate";
}

function getInitialAuthRole() {
  const params = new URLSearchParams(location.search);
  const roleParam = params.get("role") || params.get("workspace") || params.get("os");
  if (roleParam) return normalizeAuthRole(roleParam);
  try {
    return normalizeAuthRole(localStorage.getItem(AUTH_ROLE_KEY));
  } catch (error) {
    return "candidate";
  }
}

function persistAuthRole(role) {
  try {
    localStorage.setItem(AUTH_ROLE_KEY, normalizeAuthRole(role));
  } catch (error) {
    /* Selection still works for the current page if storage is unavailable. */
  }
}

const ONBOARD_WIZARD_STEPS = 5;

/* Shared onboarding preview (Part 1) - one component rendered on both the
   talent flow (Living Portfolio) and the employer flow (Company Card). It
   re-renders live as the form is filled. */
function onboardPreviewCard(mode, data) {
  const esc = value => String(value ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  if (mode === "employer") {
    const metaLine = [data.industry, data.size ? `${data.size} employees` : ""].filter(Boolean).join(" · ");
    return `
      <aside class="cg-onboard-preview">
        <div class="cg-onboard-preview-head">
          <span class="cg-onboard-preview-kicker">Company card · Preview</span>
          <h3>${esc(data.company) || "Your company"}</h3>
          <p>${esc(data.pitch) || "Add a short pitch and Vera shows it here."}</p>
          <small>${esc(metaLine) || "Industry · Company size"}</small>
        </div>
        <div class="cg-onboard-preview-body">
          <section>
            <span class="cg-onboard-preview-label">Hiring for</span>
            ${(data.roles && data.roles.length)
              ? `<div class="cg-onboard-preview-chips">${data.roles.map(role => `<span class="cg-onboard-preview-chip">${esc(role)}</span>`).join("")}</div>`
              : `<p class="cg-onboard-preview-empty">Pick the roles you're hiring for and they appear here.</p>`}
          </section>
          ${data.roleFocus ? `<section><span class="cg-onboard-preview-label">Your focus</span><p>${esc(data.roleFocus)}</p></section>` : ""}
        </div>
        <div class="cg-onboard-preview-verify">${icon("check")} Verified by CareerGo as you complete it</div>
      </aside>
    `;
  }
  const contactLine = [data.email, data.location, data.status].filter(Boolean).join(" · ");
  return `
    <aside class="cg-onboard-preview">
      <div class="cg-onboard-preview-head">
        <span class="cg-onboard-preview-kicker">Living portfolio · Preview</span>
        <h3>${esc(data.name) || "Your name"}</h3>
        <p>${esc(data.headline) || "Add a headline that sums you up."}</p>
        <small>${esc(contactLine) || "email · location · status"}</small>
      </div>
      <div class="cg-onboard-preview-body">
        ${data.education ? `<section><span class="cg-onboard-preview-label">Education</span><p>${esc(data.education)}</p></section>` : ""}
        ${(data.skills && data.skills.length) ? `<section><span class="cg-onboard-preview-label">Top skills</span><div class="cg-onboard-preview-chips">${data.skills.map(skill => `<span class="cg-onboard-preview-chip">${esc(skill)}</span>`).join("")}</div></section>` : ""}
        ${data.highlight ? `<section><span class="cg-onboard-preview-label">${esc(data.highlightLabel) || "Projects & proof"}</span><p>${esc(data.highlight)}</p></section>` : ""}
        ${(!data.education && !(data.skills && data.skills.length) && !data.highlight) ? `<section><p class="cg-onboard-preview-empty">Vera drafts your summary, skills and experience here as you fill the form.</p></section>` : ""}
      </div>
      <div class="cg-onboard-preview-verify">${icon("check")} Verified by CareerGo as you complete it</div>
    </aside>
  `;
}

const ONBOARD_SKILL_OPTIONS = ["Python", "SQL", "JavaScript", "Data analysis", "Excel", "Communication", "Project management", "Design", "Marketing", "Leadership", "Research", "Product"];
const ONBOARD_WORKTYPE_OPTIONS = ["Full-time", "Internship", "Contract", "Remote", "Graduate programme"];
const ONBOARD_STATUS_OPTIONS = ["Student", "Fresh graduate", "Working professional", "Career switcher"];
const ONBOARD_ELIGIBILITY_OPTIONS = ["Malaysian citizen", "Permanent resident", "Work visa holder", "Student visa", "Requires sponsorship"];
const ONBOARD_LEVEL_OPTIONS = ["SPM / O-Level", "Foundation", "Diploma", "Bachelor's degree", "Master's degree", "PhD", "Professional certificate"];
const ONBOARD_AVAILABILITY_OPTIONS = ["Immediately", "Within 1 month", "1-3 months", "3+ months", "Just exploring"];

function onboardWizardChrome(stepIndex, topRightHtml) {
  return `
    <header class="cg-onboard-topbar">
      <a class="cg-onboard-brand" href="index.html" aria-label="CareerGo home"><img src="assets/careergo-logo-script.png" alt="CareerGo"></a>
      <div class="cg-onboard-progress-group">
        <div class="cg-onboard-progress" role="progressbar" aria-valuenow="${stepIndex + 1}" aria-valuemin="1" aria-valuemax="${ONBOARD_WIZARD_STEPS}">
          ${Array.from({ length: ONBOARD_WIZARD_STEPS }, (_, i) => `<i class="${i <= stepIndex ? "done" : ""}"></i>`).join("")}
        </div>
        <span class="cg-onboard-progress-label">Step ${stepIndex + 1} of ${ONBOARD_WIZARD_STEPS}</span>
      </div>
      <div class="cg-onboard-topbar-right">${topRightHtml}</div>
    </header>
  `;
}

function deriveNameFromEmail(email) {
  const local = String(email || "").split("@")[0] || "";
  const words = local.replace(/[._-]+/g, " ").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "";
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function wireOnboardPasswordToggle(root) {
  qsa("[data-toggle-password]", root).forEach(btn => btn.addEventListener("click", () => {
    const input = qs(`#${btn.dataset.togglePassword}`, root);
    if (!input) return;
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.innerHTML = icon(show ? "eye-off" : "eye");
    createIcons();
  }));
}

function renderAuth() {
  const root = qs("[data-auth]");
  if (!root) return;
  const mode = root.dataset.auth;
  if (mode !== "register") {
    renderLegacyLoginAuth(root, mode);
    return;
  }
  renderCreateAccountWizard(root);
}

function renderLegacyLoginAuth(root, mode) {
  const initialAuthRole = getInitialAuthRole();
  const roleOptions = ROLE_TYPES.map(role => `<option value="${role}">${role}</option>`).join("");
  root.innerHTML = `
    <div class="auth-shell">
      <aside class="glass-card auth-side">
        <h2 class="section-title mini">Role entry</h2>
        <div class="grid-2 auth-role-grid" role="radiogroup" aria-label="Choose workspace role" data-auth-role-group>
          <div class="tool-card auth-role-card" role="radio" aria-checked="false" tabindex="-1" data-auth-role="candidate">
            <span class="auth-role-indicator" aria-hidden="true">${icon("check")}</span>
            <h3>Candidate OS</h3>
            <p>Resume analysis, career score, missions, Vera, jobs, market value.</p>
            <a class="auth-role-learn" href="onboarding.html">Learn more ${icon("arrow-right")}</a>
          </div>
          <div class="tool-card auth-role-card" role="radio" aria-checked="false" tabindex="-1" data-auth-role="employer">
            <span class="auth-role-indicator" aria-hidden="true">${icon("check")}</span>
            <h3>Employer OS</h3>
            <p>Hiring cockpit, roles, candidate discovery, pipeline, and AI hiring assistant.</p>
            <a class="auth-role-learn" href="employer-onboarding.html">Learn more ${icon("arrow-right")}</a>
          </div>
        </div>
      </aside>
      <section class="glass-card auth-panel">
        <div class="eyebrow"><span class="spark">*</span> Welcome back</div>
        <h1 class="section-title">Open your CareerGo workspace.</h1>
        <p class="section-sub">Log in with an account created on this device. This mock auth layer can later be replaced by Firebase, Supabase, or a custom backend.</p>
        <form class="form-grid" data-auth-form>
          <label>Email <input name="email" type="email" autocomplete="email" placeholder="you@example.com"></label>
          <label>Password <input name="password" type="password" autocomplete="current-password"></label>
          <p class="auth-tip">${icon("info")} <span>Judges can press Log in with empty fields to open a personalized preview account.</span></p>
          <button class="btn btn-primary" type="submit">${icon("rocket")} Log in</button>
          <button class="btn btn-cyan" type="button" data-enter-demo>${icon("monitor-play")} Open demo user dashboard</button>
        </form>
      </section>
    </div>
  `;
  const formEl = qs("[data-auth-form]");
  const roleTypeSelect = qs('select[name="roleType"]', formEl);
  const roleCards = qsa("[data-auth-role]", root);
  let selectedAuthRole = initialAuthRole;

  function selectAuthRole(role, syncForm = true) {
    selectedAuthRole = normalizeAuthRole(role);
    persistAuthRole(selectedAuthRole);
    roleCards.forEach(card => {
      const checked = card.dataset.authRole === selectedAuthRole;
      card.setAttribute("aria-checked", String(checked));
      card.tabIndex = checked ? 0 : -1;
      card.classList.toggle("is-selected", checked);
    });
    if (syncForm && roleTypeSelect) {
      roleTypeSelect.value = selectedAuthRole === "employer" ? AUTH_ROLE_EMPLOYER_TYPE : AUTH_ROLE_CANDIDATE_TYPE;
    }
  }

  roleCards.forEach((card, index) => {
    card.addEventListener("click", event => {
      if (event.target.closest(".auth-role-learn")) return;
      selectAuthRole(card.dataset.authRole);
    });
    card.addEventListener("keydown", event => {
      if (event.target.closest(".auth-role-learn")) return;
      const isNext = event.key === "ArrowRight" || event.key === "ArrowDown";
      const isPrevious = event.key === "ArrowLeft" || event.key === "ArrowUp";
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        selectAuthRole(card.dataset.authRole);
        card.focus();
      } else if (isNext || isPrevious) {
        event.preventDefault();
        const offset = isNext ? 1 : -1;
        const nextCard = roleCards[(index + offset + roleCards.length) % roleCards.length];
        selectAuthRole(nextCard.dataset.authRole);
        nextCard.focus();
      }
    });
  });
  qsa(".auth-role-learn", root).forEach(link => {
    link.addEventListener("click", event => event.stopPropagation());
  });
  roleTypeSelect?.addEventListener("change", event => {
    selectAuthRole(event.currentTarget.value === AUTH_ROLE_EMPLOYER_TYPE ? "employer" : "candidate", false);
  });
  selectAuthRole(initialAuthRole);

  formEl.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    const email = String(form.get("email") || "").trim().toLowerCase();
    const password = String(form.get("password") || "");
    if (!email && !password) {
      applyDemoAccount(next);
      next.session = { ...next.session, role: selectedAuthRole };
      writeState(next);
      showToast("Demo workspace opened.");
      location.href = selectedAuthRole === "employer" ? "employer-app.html" : "dashboard.html";
      return;
    }
    if (!email || !password) {
      showToast("Enter both email and password, or leave both empty for the judge preview.", "info");
      return;
    }
    const user = next.auth.users.find(item => item.email === email && item.password === password);
    if (!user) {
      showToast("No matching account found on this device.", "info");
      return;
    }
    next.session = { loggedIn: true, role: selectedAuthRole, currentUserId: user.id, name: user.fullName };
    if (user.profile) next.profile = normalizeProfile(user.profile);
    writeState(next);
    showToast("Welcome back.");
    location.href = selectedAuthRole === "employer" ? "employer-app.html" : next.onboarding.candidateDone ? "dashboard.html" : "onboarding.html";
  });
  createIcons();
}

/* Demo/hackathon build: seed a brand-new signup with a realistic, fully
   filled profile (name, headline, education, skills, goals, preferences)
   rather than leaving it blank, so a judge/user can click straight through
   onboarding without typing anything first, while still being able to
   change any of it. Uses the SAME "Mira Tan" persona as the judge-preview
   dashboard (createDemoProfile()/applyDemoAccount()) - Operations Executive
   switching into Product Analyst roles - so a real signup and the seeded
   demo dashboard never show two different people. This only fills profile
   fields (name/education/skills/goals); it never touches applications,
   mission streak or roadmap progress, so it can't imply prior product
   usage the way the logged-in Dashboard's "Week N of your transition"
   framing does. */
function seedMockCandidateProfile(profile) {
  profile.personal.fullName = "Mira Tan";
  profile.personal.headline = "Operations executive moving into product analytics roles";
  profile.personal.cityState = "Petaling Jaya, Selangor";
  profile.personal.roleType = "Career Switcher";
  profile.personal.workEligibility = "Malaysian citizen";
  profile.careerStage = ONBOARD_ROLE_STAGE_MAP["Career Switcher"] || profile.careerStage;
  profile.background.school = "Universiti Malaya";
  profile.background.courseMajor = "Business Administration";
  profile.background.educationLevel = "Bachelor's degree";
  profile.background.projectExperience = "3 years as an Operations Executive in marketplace operations - built a churn analysis dashboard for support tickets and a weekly ops scorecard using SQL and Looker Studio.";
  profile.skills.technical = ["SQL", "Excel", "Data analysis"];
  profile.skills.languages = ["English", "Malay", "Mandarin"];
  profile.goals = ["Find a job", "Explore career directions", "Grow my skills"];
  profile.preferences.industries = ["Data", "Product", "Business"];
  profile.preferences.roles = ["Product Analyst"];
  profile.preferences.minimumSalary = "RM 5,500 / month";
  profile.preferences.employmentTypes = ["Full-time", "Contract"];
  profile.preferences.availability = "3+ months";
  profile.privacy = { ...(profile.privacy || {}), consentAccepted: true, allowEmployerDiscovery: true };
  return profile;
}

/* Same idea for a fresh employer signup - company branding + hiring roles
   pre-filled so the employer onboarding wizard is also click-through-able. */
function seedMockEmployerProfile(state) {
  state.employerProfile = {
    ...(state.employerProfile || {}),
    roleDescription: "Hiring Manager",
    purposes: ["Create and publish roles", "Discover candidates"],
    company: "Nimbus Labs",
    companySize: "51-200",
    industry: "Technology",
    pitch: "Nimbus Labs builds developer tools that help engineering teams ship faster - trusted by 400+ startups across Southeast Asia.",
    hiringRoles: ["Software Engineer", "Product Manager"],
    updatedAt: nowStamp()
  };
  return state;
}

function renderCreateAccountWizard(root) {
  let wizardStep = 0;
  let selectedRole = normalizeAuthRole(getInitialAuthRole());
  const redirectTarget = sanitizeRedirectPath(new URLSearchParams(location.search).get("redirect"));
  if (redirectTarget) sessionStorage.setItem("cg-post-auth-redirect", redirectTarget);
  const loginHref = redirectTarget ? loginRedirectHref(redirectTarget) : "login.html";

  function renderStep() {
    persistAuthRole(selectedRole);
    const isEmployer = selectedRole === "employer";
    const topRight = `<a href="${loginHref}">Log in</a>`;
    root.innerHTML = wizardStep === 0 ? `
      ${onboardWizardChrome(0, topRight)}
      <section class="cg-onboard-shell cg-onboard-shell-wide">
        <div class="cg-onboard-eyebrow">Welcome</div>
        <h1>What brings you to CareerGo?</h1>
        <p class="cg-onboard-sub">Choose how you want to use CareerGo. You can update your goals later.</p>
        <div class="cg-onboard-role-grid" role="radiogroup" aria-label="Choose account type">
          <label class="cg-onboard-role-card ${!isEmployer ? "selected" : ""}">
            <input type="radio" name="wizardRole" value="candidate" ${!isEmployer ? "checked" : ""}>
            <span class="cg-onboard-role-icon">${icon("compass")}</span>
            <span class="cg-onboard-role-radio"></span>
            <b>Candidate account</b>
            <h3>I'm looking for opportunities</h3>
            <p>From student to senior professional, discover opportunities and grow the skills that fit you.</p>
            <ul><li>${icon("check")} Personalised roadmap — from school to senior roles</li><li>${icon("check")} Curated opportunities, at every career stage</li><li>${icon("check")} AI-guided growth, tailored to you</li></ul>
          </label>
          <label class="cg-onboard-role-card ${isEmployer ? "selected" : ""}">
            <input type="radio" name="wizardRole" value="employer" ${isEmployer ? "checked" : ""}>
            <span class="cg-onboard-role-icon">${icon("building-2")}</span>
            <span class="cg-onboard-role-radio"></span>
            <b>Employer account</b>
            <h3>I'm hiring</h3>
            <p>Create roles, manage candidates and discover people for your team.</p>
            <ul><li>${icon("check")} Publish roles</li><li>${icon("check")} Talent discovery</li><li>${icon("check")} Structured pipelines</li></ul>
          </label>
        </div>
        <p class="cg-onboard-vera-line"><img src="assets/vera-ai-coach.png" alt=""> Vera will personalise CareerGo around the path you choose.</p>
        <footer class="cg-onboard-footer">
          <a href="${loginHref}">Already have an account? Log in</a>
          <button class="cg-onboard-btn-primary" type="button" data-wizard-continue>Continue ${icon("arrow-right")}</button>
        </footer>
      </section>
    ` : `
      ${onboardWizardChrome(1, topRight)}
      <section class="cg-onboard-shell">
        <div class="cg-onboard-eyebrow">Your account</div>
        <h1>Create your CareerGo account.</h1>
        <p class="cg-onboard-sub">Save your progress and continue from any device.</p>
        <form class="cg-onboard-card" data-account-form>
          <button class="cg-onboard-social" type="button" data-enter-demo>${icon("chrome")} Continue with Google</button>
          <button class="cg-onboard-social" type="button" data-enter-demo>${icon("linkedin")} Continue with LinkedIn</button>
          <button class="cg-onboard-social" type="button" data-enter-demo>${icon("github")} Continue with GitHub</button>
          <div class="cg-onboard-divider"><span>OR</span></div>
          <label class="cg-onboard-field">
            <span>${isEmployer ? "Work email" : "Email"}</span>
            <input name="email" type="email" required autocomplete="email" placeholder="${isEmployer ? "you@company.com" : "you@email.com"}" value="${isEmployer ? "hiring@nimbuslabs.com" : "mira.tan@email.com"}">
          </label>
          <label class="cg-onboard-field">
            <span>Password</span>
            <span class="cg-onboard-field-shell">
              <input id="wizard-password" name="password" type="password" required minlength="8" autocomplete="new-password" placeholder="At least 8 characters" value="Career2026!">
              <button type="button" class="cg-onboard-eye" data-toggle-password="wizard-password" aria-label="Show password">${icon("eye")}</button>
            </span>
          </label>
          <label class="cg-onboard-field">
            <span>Confirm password</span>
            <input name="confirmPassword" type="password" required minlength="8" autocomplete="new-password" placeholder="Re-enter your password" value="Career2026!">
          </label>
          <button class="cg-onboard-btn-primary cg-onboard-btn-block" type="submit">Create account ${icon("arrow-right")}</button>
        </form>
        <p class="cg-onboard-terms">By creating an account, you agree to CareerGo's <a href="about.html">Terms</a> and <a href="about.html">Privacy Policy</a>.</p>
        <p class="cg-onboard-terms">Demo build - re-testing signup? <button type="button" class="cg-onboard-link" data-clear-demo-data>Clear local demo data</button> to reuse the same email.</p>
        <footer class="cg-onboard-footer">
          <button class="cg-onboard-link" type="button" data-wizard-back>${icon("arrow-left")} Back</button>
          <a href="${loginHref}">Already have an account? Log in</a>
        </footer>
      </section>
    `;
    createIcons();
    wireOnboardPasswordToggle(root);

    if (wizardStep === 0) {
      qsa('input[name="wizardRole"]', root).forEach(input => input.addEventListener("change", () => {
        selectedRole = input.value === "employer" ? "employer" : "candidate";
        renderStep();
      }));
      qs("[data-wizard-continue]", root)?.addEventListener("click", () => {
        wizardStep = 1;
        renderStep();
      });
      return;
    }

    qs("[data-wizard-back]", root)?.addEventListener("click", () => {
      wizardStep = 0;
      renderStep();
    });
    qs("[data-clear-demo-data]", root)?.addEventListener("click", () => {
      localStorage.removeItem(STORE_KEY);
      showToast("Local demo data cleared - you can reuse the same email.");
      renderStep();
    });
    qsa("[data-enter-demo]", root).forEach(btn => btn.addEventListener("click", startDemoDashboard));
    qs("[data-account-form]", root)?.addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const next = readState();
      const email = String(form.get("email") || "").trim().toLowerCase();
      const password = String(form.get("password") || "");
      const confirm = String(form.get("confirmPassword") || "");
      if (!email || !password) {
        showToast("Enter an email and password to continue.", "info");
        return;
      }
      if (password !== confirm) {
        showToast("Passwords do not match.", "info");
        return;
      }
      if (next.auth.users.some(item => item.email === email)) {
        showToast("An account with this email already exists on this device.", "info");
        return;
      }
      const authRole = selectedRole === "employer" ? "employer" : "candidate";
      const roleType = authRole === "employer" ? AUTH_ROLE_EMPLOYER_TYPE : AUTH_ROLE_CANDIDATE_TYPE;
      const fullName = deriveNameFromEmail(email);
      const profile = createEmptyProfile({ fullName, email, country: "Malaysia", preferredLanguage: "English", roleType });
      profile.personal.roleType = roleType;
      profile.onboardingStatus.started = true;
      profile.updatedAt = nowStamp();
      if (authRole !== "employer") {
        seedMockCandidateProfile(profile);
        // Structured career history so "Generate resume" has real experience +
        // education to compose from straight after signup (MVP has no AI/API).
        next.userRoles = mockUserRoles();
        next.educationEntries = mockEducationEntries();
      }
      next.auth.users.push({ id: profile.id, email, password, fullName: profile.personal.fullName, role: authRole, profile, createdAt: profile.createdAt });
      next.session = { loggedIn: true, role: authRole, currentUserId: profile.id, name: profile.personal.fullName };
      next.profile = profile;
      next.onboarding = { ...next.onboarding, candidateDone: false, employerDone: false, currentStep: 0, lastSavedAt: nowStamp() };
      if (authRole === "employer") seedMockEmployerProfile(next);
      next.notifications = normalizeNotifications([{ id: "n-welcome", type: "vera", title: "Welcome to CareerGo", body: "A little more context helps Vera personalize your workspace.", href: "dashboard.html" }]);
      writeState(next);
      showToast("Account created.");
      location.href = authRole === "employer" ? "employer-onboarding.html" : "onboarding.html";
    });
  }

  renderStep();
}

const ONBOARD_ROLE_STAGE_MAP = {
  "Student": "Still studying",
  "Fresh Graduate": "Looking for first full-time job",
  "Working Professional": "Currently employed but exploring",
  "Career Switcher": "Planning to switch career"
};

const ONBOARD_PURPOSE_OPTIONS = ["Find a job", "Explore career directions", "Grow my skills", "Prepare for interviews", "Understand my career value", "Build my professional network"];
const ONBOARD_INTEREST_OPTIONS = ["AI & Machine Learning", "Software Engineering", "Data", "Product", "Design", "Business", "Cybersecurity", "Marketing", "Finance"];
const ONBOARD_EXPERIENCE_OPTIONS = ["No professional experience yet", "Less than 2 years", "2-5 years", "5-8 years", "8+ years"];

function onboardChipGroup(name, options, selected, multi) {
  return `
    <div class="cg-onboard-chip-group" data-chip-group="${name}" data-multi="${multi ? "1" : "0"}">
      ${options.map(option => `<button type="button" class="cg-onboard-chip ${selected.includes(option) ? "selected" : ""}" data-chip-value="${option}">${option}</button>`).join("")}
    </div>
  `;
}

function renderCandidateOnboarding() {
  const root = qs("[data-onboarding]");
  if (!root) return;
  if (!requireAccount(root, "start your personalized onboarding")) return;
  let wizardStep = 0;

  function renderStep() {
    const state = readState();
    const profile = state.profile;
    let selectedStage = ["Student", "Fresh Graduate", "Working Professional", "Career Switcher"].find(item => item === profile.personal.roleType) || "Student";
    let selectedPurposes = profile.goals.filter(goal => ONBOARD_PURPOSE_OPTIONS.includes(goal));
    let selectedInterests = [...profile.preferences.industries];
    let selectedExperience = ONBOARD_EXPERIENCE_OPTIONS.includes(profile.background.yearsExperience) ? profile.background.yearsExperience : "";

    if (wizardStep === 0) {
      root.innerHTML = `
        ${onboardWizardChrome(2, `<a href="dashboard.html">Save & exit</a>`)}
        <section class="cg-onboard-shell cg-onboard-shell-split">
          <div class="cg-onboard-main">
            <div class="cg-onboard-eyebrow">Personalise</div>
            <h1>A little context helps Vera get you started.</h1>
            <p class="cg-onboard-sub">Choose what fits today. You can change everything later.</p>
            <div class="cg-onboard-question">
              <header><span>${icon("compass")} Where are you now?</span><small>Choose one</small></header>
              ${onboardChipGroup("stage", ["Student", "Fresh Graduate", "Working Professional", "Career Switcher"], [selectedStage], false)}
            </div>
            <div class="cg-onboard-question">
              <header><span>${icon("target")} What are you here to do?</span><small>Select any</small></header>
              ${onboardChipGroup("purpose", ONBOARD_PURPOSE_OPTIONS, selectedPurposes, true)}
            </div>
            <div class="cg-onboard-question">
              <header><span>${icon("sparkles")} What areas interest you?</span><small>Add any that matter</small></header>
              <label class="cg-onboard-search"><i>${icon("search")}</i><input type="text" placeholder="Search interests" data-interest-search></label>
              ${onboardChipGroup("interest", ONBOARD_INTEREST_OPTIONS, selectedInterests, true)}
            </div>
            <div class="cg-onboard-question">
              <header><span>${icon("user-round")} Experience level</span><small>Optional</small></header>
              ${onboardChipGroup("experience", ONBOARD_EXPERIENCE_OPTIONS, [selectedExperience], false)}
            </div>
            <footer class="cg-onboard-footer">
              <a href="register.html">${icon("arrow-left")} Back</a>
              <button class="cg-onboard-btn-primary" type="button" data-wizard-continue>Continue ${icon("arrow-right")}</button>
            </footer>
          </div>
          <aside class="cg-onboard-vera-card">
            <span class="cg-onboard-vera-kicker">${icon("sparkles")} Vera - AI coach</span>
            <h3>Vera is listening.</h3>
            <p>The more you share, the more precisely Vera can shape your first roadmap. Nothing here is final.</p>
          </aside>
        </section>
      `;
      createIcons();
      qsa("[data-chip-group]", root).forEach(group => {
        const multi = group.dataset.multi === "1";
        qsa("[data-chip-value]", group).forEach(chip => chip.addEventListener("click", () => {
          if (multi) {
            chip.classList.toggle("selected");
          } else {
            qsa("[data-chip-value]", group).forEach(item => item.classList.toggle("selected", item === chip));
          }
        }));
      });
      qs("[data-interest-search]", root)?.addEventListener("input", event => {
        const query = event.currentTarget.value.trim().toLowerCase();
        qsa('[data-chip-group="interest"] [data-chip-value]', root).forEach(chip => {
          chip.hidden = query.length > 0 && !chip.dataset.chipValue.toLowerCase().includes(query);
        });
      });
      qs("[data-wizard-continue]", root)?.addEventListener("click", () => {
        const stageChip = qs('[data-chip-group="stage"] .selected', root);
        const purposeChips = qsa('[data-chip-group="purpose"] .selected', root);
        const interestChips = qsa('[data-chip-group="interest"] .selected', root);
        const experienceChip = qs('[data-chip-group="experience"] .selected', root);
        const next = readState();
        const stageLabel = stageChip?.dataset.chipValue || "Student";
        next.profile.personal.roleType = stageLabel;
        next.profile.careerStage = ONBOARD_ROLE_STAGE_MAP[stageLabel] || next.profile.careerStage;
        next.profile.goals = purposeChips.map(chip => chip.dataset.chipValue);
        next.profile.preferences.industries = interestChips.map(chip => chip.dataset.chipValue);
        if (experienceChip) next.profile.background.yearsExperience = experienceChip.dataset.chipValue;
        next.profile.intelligence = generateCareerIntelligence(next.profile);
        next.profile.updatedAt = nowStamp();
        next.onboarding.lastSavedAt = nowStamp();
        syncCurrentUser(next);
        writeState(next);
        wizardStep = 1;
        renderStep();
      });
      return;
    }

    // Step 1 (NEW): capture real profile substance with a live Living Portfolio preview.
    if (wizardStep === 1) {
      const esc = value => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      const optionsFor = (list, current) => list.map(opt => `<option value="${esc(opt)}"${opt === current ? " selected" : ""}>${esc(opt)}</option>`).join("");
      const statusDefault = ONBOARD_STATUS_OPTIONS.find(opt => opt.toLowerCase() === String(profile.personal.roleType || "").toLowerCase())
        || (profile.personal.roleType === "Fresh Graduate" ? "Fresh graduate" : profile.personal.roleType === "Working Professional" ? "Working professional" : profile.personal.roleType === "Career Switcher" ? "Career switcher" : "Student");
      const savedSkills = (profile.skills.technical || []).filter(skill => ONBOARD_SKILL_OPTIONS.includes(skill)).slice(0, 5);
      const savedWorkTypes = (profile.preferences.employmentTypes || []).filter(type => ONBOARD_WORKTYPE_OPTIONS.includes(type));

      root.innerHTML = `
        ${onboardWizardChrome(3, `<a href="dashboard.html">Save & exit</a>`)}
        <section class="cg-onboard-shell cg-onboard-shell-split cg-onboard-profile-shell">
          <div class="cg-onboard-main" data-onboard-form>
            <div class="cg-onboard-eyebrow">Your profile</div>
            <h1>Let's build your living portfolio.</h1>
            <p class="cg-onboard-sub">Fill what you can now - Vera drafts the rest, and nothing here is final.</p>

            <div class="cg-onboard-resume">
              <label class="cg-onboard-dropzone" data-resume-drop tabindex="0">
                <input type="file" accept=".pdf,.doc,.docx" hidden data-resume-input>
                <span>${icon("upload")}</span>
                <b>Upload your resume</b>
                <small data-resume-name>PDF or Word, up to 5MB - Vera reads it to pre-fill your profile.</small>
              </label>
              <div class="cg-onboard-or"><span>OR</span></div>
              <button type="button" class="cg-onboard-build" data-build-vera>${icon("sparkles")} Build my profile with Vera - no upload needed</button>
            </div>

            <div class="cg-onboard-question">
              <header><span>${icon("user-round")} About you</span></header>
              <div class="cg-onboard-grid2">
                <label class="cg-onboard-field"><span>Full name</span><input data-f="name" value="${esc(profile.personal.fullName)}" placeholder="Your name"></label>
                <label class="cg-onboard-field"><span>Current status</span><select data-f="status">${optionsFor(ONBOARD_STATUS_OPTIONS, statusDefault)}</select></label>
              </div>
              <label class="cg-onboard-field"><span>Headline <i>(one line that sums you up)</i></span><input data-f="headline" value="${esc(profile.personal.headline || "")}" placeholder="e.g. Operations executive moving into product analytics roles"></label>
              <div class="cg-onboard-grid2">
                <label class="cg-onboard-field"><span>Location</span><input data-f="location" value="${esc(profile.personal.cityState)}" placeholder="Kuala Lumpur"></label>
                <label class="cg-onboard-field"><span>Work eligibility</span><select data-f="eligibility">${optionsFor(ONBOARD_ELIGIBILITY_OPTIONS, profile.personal.workEligibility || "Malaysian citizen")}</select></label>
              </div>
              <label class="cg-onboard-field"><span>Languages</span><input data-f="languages" value="${esc((profile.skills.languages || []).join(", "))}" placeholder="English, Malay, Mandarin"></label>
            </div>

            <div class="cg-onboard-question">
              <header><span>${icon("graduation-cap")} Education</span></header>
              <label class="cg-onboard-field"><span>Institution</span><input data-f="institution" value="${esc(profile.background.school)}" placeholder="University of Malaya"></label>
              <div class="cg-onboard-grid2">
                <label class="cg-onboard-field"><span>Field of study</span><input data-f="field" value="${esc(profile.background.courseMajor)}" placeholder="Computer Science"></label>
                <label class="cg-onboard-field"><span>Level</span><select data-f="level">${optionsFor(ONBOARD_LEVEL_OPTIONS, profile.background.educationLevel || "Bachelor's degree")}</select></label>
              </div>
            </div>

            <div class="cg-onboard-question">
              <header><span>${icon("sparkles")} Top skills</span><small>Tap up to 5</small></header>
              ${onboardChipGroup("skills", ONBOARD_SKILL_OPTIONS, savedSkills, true)}
            </div>

            <div class="cg-onboard-question">
              <header><span>${icon("folder-open")} Projects, coursework or certifications</span><small>Optional - great if you have no formal work yet</small></header>
              <textarea class="cg-onboard-textarea" data-f="highlight" rows="3" placeholder="e.g. Built a sales dashboard in Python for a class project; Google Data Analytics certificate">${esc(profile.background.projectExperience || "")}</textarea>
            </div>

            <div class="cg-onboard-question">
              <header><span>${icon("briefcase-business")} Role &amp; preferences</span></header>
              <div class="cg-onboard-grid2">
                <label class="cg-onboard-field"><span>Preferred role</span><input data-f="role" value="${esc(profile.preferences.roles[0] || "")}" placeholder="Data Analyst"></label>
                <label class="cg-onboard-field"><span>Expected salary (RM/month)</span><input data-f="salary" value="${esc(profile.preferences.minimumSalary)}" placeholder="3,800 - 5,000"></label>
              </div>
              <p class="cg-onboard-subquestion">Work type</p>
              ${onboardChipGroup("worktype", ONBOARD_WORKTYPE_OPTIONS, savedWorkTypes, true)}
              <label class="cg-onboard-field"><span>Availability to start</span><select data-f="availability">${optionsFor(ONBOARD_AVAILABILITY_OPTIONS, profile.preferences.availability || "Immediately")}</select></label>
            </div>

            <label class="cg-onboard-consent"><input type="checkbox" data-consent ${profile.privacy && profile.privacy.consentAccepted ? "checked" : ""}><span>I agree to the Terms and Privacy Policy, and consent to CareerGo using my details to match me with employers.</span></label>

            <footer class="cg-onboard-footer">
              <button class="cg-onboard-link" type="button" data-wizard-back>${icon("arrow-left")} Back</button>
              <button class="cg-onboard-btn-primary" type="button" data-wizard-continue>Continue ${icon("arrow-right")}</button>
            </footer>
          </div>
          <div class="cg-onboard-preview-col" data-preview-col></div>
        </section>
      `;
      createIcons();

      const formRoot = qs("[data-onboard-form]", root);
      const previewCol = qs("[data-preview-col]", root);

      function selectedChips(name) {
        return qsa(`[data-chip-group="${name}"] .selected`, formRoot).map(chip => chip.dataset.chipValue);
      }
      function fieldVal(key) {
        return String(qs(`[data-f="${key}"]`, formRoot)?.value || "").trim();
      }
      function collectData() {
        const eduBits = [fieldVal("field"), fieldVal("institution"), fieldVal("level")].filter(Boolean);
        return {
          name: fieldVal("name"),
          headline: fieldVal("headline"),
          email: profile.personal.email,
          location: fieldVal("location"),
          status: fieldVal("status"),
          education: eduBits.join(" · "),
          skills: selectedChips("skills"),
          highlight: fieldVal("highlight"),
          highlightLabel: "Projects & proof"
        };
      }
      function renderPreview() {
        previewCol.innerHTML = onboardPreviewCard("talent", collectData());
        createIcons();
      }
      renderPreview();

      qsa("[data-chip-group]", formRoot).forEach(group => {
        const multi = group.dataset.multi === "1";
        qsa("[data-chip-value]", group).forEach(chip => chip.addEventListener("click", () => {
          if (multi) {
            const isSkills = group.dataset.chipGroup === "skills";
            if (isSkills && !chip.classList.contains("selected") && qsa(".selected", group).length >= 5) {
              showToast("Pick your top 5 skills.");
              return;
            }
            chip.classList.toggle("selected");
          } else {
            qsa("[data-chip-value]", group).forEach(item => item.classList.toggle("selected", item === chip));
          }
          renderPreview();
        }));
      });
      formRoot.addEventListener("input", renderPreview);
      formRoot.addEventListener("change", renderPreview);

      // Resume upload -> simulated parse pre-fill.
      function prefillFromResume(fileName) {
        const setIfEmpty = (key, value) => {
          const el = qs(`[data-f="${key}"]`, formRoot);
          if (el && !el.value.trim()) el.value = value;
        };
        setIfEmpty("name", profile.personal.fullName || "Mira Tan");
        setIfEmpty("headline", "Operations executive moving into product analytics roles");
        setIfEmpty("location", "Petaling Jaya, Selangor");
        setIfEmpty("institution", "Universiti Malaya");
        setIfEmpty("field", "Business Administration");
        setIfEmpty("languages", "English, Malay, Mandarin");
        setIfEmpty("role", "Product Analyst");
        setIfEmpty("salary", "5,500");
        setIfEmpty("highlight", "3 years as an Operations Executive in marketplace operations - built a churn analysis dashboard for support tickets and a weekly ops scorecard using SQL and Looker Studio.");
        ["SQL", "Excel", "Data analysis"].forEach(skill => {
          const chip = qs(`[data-chip-group="skills"] [data-chip-value="${skill}"]`, formRoot);
          if (chip) chip.classList.add("selected");
        });
        const nameNote = qs("[data-resume-name]", formRoot);
        if (nameNote) nameNote.textContent = `${fileName} - Vera pre-filled your profile below.`;
        renderPreview();
        showToast("Vera read your resume and pre-filled your profile.");
      }
      qs("[data-resume-input]", formRoot)?.addEventListener("change", event => {
        const file = event.target.files && event.target.files[0];
        prefillFromResume(file ? file.name : "resume.pdf");
      });
      qs("[data-build-vera]", formRoot)?.addEventListener("click", () => prefillFromResume("Vera draft"));

      qs("[data-wizard-back]", root)?.addEventListener("click", () => { wizardStep = 0; renderStep(); });
      qs("[data-wizard-continue]", root)?.addEventListener("click", () => {
        if (!qs("[data-consent]", formRoot)?.checked) {
          showToast("Please accept the Terms and consent to continue.");
          return;
        }
        const data = collectData();
        const next = readState();
        next.profile.personal.fullName = data.name || next.profile.personal.fullName;
        next.profile.personal.headline = data.headline;
        next.profile.personal.cityState = data.location;
        next.profile.personal.roleType = data.status || next.profile.personal.roleType;
        next.profile.personal.workEligibility = fieldVal("eligibility");
        next.profile.background.school = fieldVal("institution");
        next.profile.background.courseMajor = fieldVal("field");
        next.profile.background.educationLevel = fieldVal("level");
        next.profile.background.projectExperience = data.highlight;
        next.profile.skills.technical = data.skills;
        next.profile.skills.languages = fieldVal("languages").split(",").map(s => s.trim()).filter(Boolean);
        next.profile.preferences.roles = fieldVal("role") ? [fieldVal("role")] : next.profile.preferences.roles;
        next.profile.preferences.minimumSalary = fieldVal("salary") ? `RM ${fieldVal("salary")} / month` : next.profile.preferences.minimumSalary;
        next.profile.preferences.employmentTypes = selectedChips("worktype");
        next.profile.preferences.availability = fieldVal("availability");
        next.profile.privacy = { ...(next.profile.privacy || {}), consentAccepted: true, allowEmployerDiscovery: true };
        next.profile.intelligence = generateCareerIntelligence(next.profile);
        next.profile.updatedAt = nowStamp();
        next.onboarding.lastSavedAt = nowStamp();
        syncCurrentUser(next);
        writeState(next);
        wizardStep = 2;
        renderStep();
      });
      return;
    }

    const filledChecks = [
      ["Career interests", (profile.goals || []).length > 0 || (profile.preferences.industries || []).length > 0],
      ["Headline & bio", Boolean(profile.personal.headline)],
      ["Skills", (profile.skills.technical || []).length > 0],
      ["Education", Boolean(profile.background.school)],
      ["Role & salary", Boolean(profile.preferences.roles[0]) || Boolean(profile.preferences.minimumSalary)],
      ["Consent & preferences", Boolean(profile.privacy && profile.privacy.consentAccepted)]
    ];
    const doneCount = 1 + filledChecks.filter(([, done]) => done).length;
    const totalCount = 7;
    const purposeCount = Math.max(1, selectedPurposes.length);
    root.innerHTML = `
      ${onboardWizardChrome(4, `<a href="dashboard.html">Save & exit</a>`)}
      <section class="cg-onboard-shell cg-onboard-shell-wide">
        <div class="cg-onboard-finish-grid">
          <article class="cg-onboard-meet-card">
            <span class="cg-onboard-meet-avatar"><img src="assets/vera-ai-coach.png" alt="Vera"></span>
            <b>You're in</b>
            <h2>Meet Vera.</h2>
            <p>Your CareerGo coach will help you understand what matters, what to improve and what to do next.</p>
          </article>
          <div class="cg-onboard-finish-right">
            <article class="cg-onboard-prepared-card">
              <span class="cg-onboard-vera-kicker">${icon("sparkles")} Prepared for you</span>
              <h3>Based on what you told us, Vera will begin with:</h3>
              <div class="cg-onboard-prepared-list">
                <div><span>${icon("compass")}</span>${purposeCount} career direction${purposeCount === 1 ? "" : "s"} to explore</div>
                <div><span>${icon("briefcase-business")}</span>Opportunities matching your interests</div>
                <div><span>${icon("route")}</span>One recommended next step this week</div>
              </div>
            </article>
            <article class="cg-onboard-completion-card">
              <div class="cg-onboard-completion-head"><span>Profile completion</span><b>${doneCount}/${totalCount} done</b></div>
              <h3>${Math.round((doneCount / totalCount) * 100)}% complete</h3>
              ${progressBar(Math.round((doneCount / totalCount) * 100))}
              <div class="cg-onboard-checklist">
                <div class="done"><span>${icon("check-circle-2")}</span>Basic information</div>
                ${filledChecks.map(([label, done]) => done
                  ? `<div class="done"><span>${icon("check-circle-2")}</span>${label}</div>`
                  : `<div><span>${label}</span><a href="edit-career-data.html">Add</a></div>`).join("")}
              </div>
            </article>
            <footer class="cg-onboard-footer">
              <button class="cg-onboard-link" type="button" data-finish-later>Finish later</button>
              <button class="cg-onboard-btn-primary" type="button" data-go-dashboard>Go to dashboard ${icon("arrow-right")}</button>
            </footer>
          </div>
        </div>
      </section>
    `;
    createIcons();

    function finishOnboarding() {
      const next = readState();
      next.profile.onboardingStatus.completed = true;
      next.profile.updatedAt = nowStamp();
      next.onboarding.candidateDone = true;
      next.notifications = normalizeNotifications([
        { id: "n-profile", type: "vera", title: "Your Career Intelligence Profile is ready", body: `${next.profile.intelligence.readinessLevel} readiness with ${next.profile.intelligence.confidence.toLowerCase()} confidence.`, href: "grow.html" },
        { id: "n-next", type: "growth", title: "Vera's first suggested move", body: next.profile.intelligence.immediateActions[0], href: "grow.html#recommended-growth" }
      ]);
      syncCurrentUser(next);
      writeState(next);
      showToast("Career Intelligence Profile generated.");
      const redirectTarget = sessionStorage.getItem("cg-post-auth-redirect");
      sessionStorage.removeItem("cg-post-auth-redirect");
      location.href = redirectTarget || "dashboard.html";
    }
    qs("[data-go-dashboard]", root)?.addEventListener("click", finishOnboarding);
    qs("[data-finish-later]", root)?.addEventListener("click", finishOnboarding);
  }

  renderStep();
}

const ONBOARD_EMPLOYER_ROLE_OPTIONS = ["Hiring Manager", "Recruiter / Talent Acquisition", "HR / People Team", "Founder / Business Owner", "Employer Brand / University Relations"];
const ONBOARD_EMPLOYER_PURPOSE_OPTIONS = ["Create and publish roles", "Review applications", "Manage interviews", "Discover candidates", "Build talent pools", "Strengthen employer presence", "Connect with universities"];
const ONBOARD_EMPLOYER_SIZE_OPTIONS = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
const ONBOARD_EMPLOYER_INDUSTRY_OPTIONS = ["Technology", "Finance", "Consulting", "Healthcare", "Energy", "Retail", "Public sector", "Media"];
const ONBOARD_EMPLOYER_HIRING_ROLES = ["Software Engineer", "Data Analyst", "Product Manager", "Designer", "Sales", "Marketing", "Operations", "Finance", "HR / People", "Customer Success", "Intern / Graduate"];

function renderEmployerOnboarding() {
  const root = qs("[data-employer-onboarding]");
  if (!root) return;
  if (!requireAccount(root, "set up your employer workspace")) return;
  let wizardStep = 0;

  function renderStep() {
    const state = readState();
    const employerProfile = state.employerProfile || {};

    if (wizardStep === 0) {
      root.innerHTML = `
        ${onboardWizardChrome(2, `<a href="employer-app.html">Save & exit</a>`)}
        <section class="cg-onboard-shell cg-onboard-shell-split">
          <div class="cg-onboard-main">
            <div class="cg-onboard-eyebrow">Personalise</div>
            <h1>Tell us how you hire.</h1>
            <p class="cg-onboard-sub">CareerGo will tailor the workspace around your responsibilities.</p>
            <div class="cg-onboard-question">
              <header><span>${icon("user-round")} What best describes your role?</span><small>Choose one</small></header>
              ${onboardChipGroup("role", ONBOARD_EMPLOYER_ROLE_OPTIONS, [employerProfile.roleDescription || ""], false)}
            </div>
            <div class="cg-onboard-question">
              <header><span>${icon("target")} What are you here to do?</span><small>Select any</small></header>
              ${onboardChipGroup("purpose", ONBOARD_EMPLOYER_PURPOSE_OPTIONS, employerProfile.purposes || [], true)}
            </div>
            <div class="cg-onboard-question">
              <header><span>${icon("building-2")} Company information</span><small>Kept lightweight</small></header>
              <label class="cg-onboard-field"><span>Company name</span><input type="text" placeholder="e.g. CareerGo" data-company-name value="${employerProfile.company || ""}"></label>
              <p class="cg-onboard-subquestion">Company size</p>
              ${onboardChipGroup("size", ONBOARD_EMPLOYER_SIZE_OPTIONS, [employerProfile.companySize || ""], false)}
              <p class="cg-onboard-subquestion">Industry</p>
              ${onboardChipGroup("industry", ONBOARD_EMPLOYER_INDUSTRY_OPTIONS, [employerProfile.industry || ""], false)}
            </div>
            <footer class="cg-onboard-footer">
              <a href="register.html">${icon("arrow-left")} Back</a>
              <button class="cg-onboard-btn-primary" type="button" data-wizard-continue>Continue ${icon("arrow-right")}</button>
            </footer>
          </div>
          <aside class="cg-onboard-vera-card">
            <span class="cg-onboard-vera-kicker">${icon("sparkles")} Vera - AI coach</span>
            <h3>Built for hiring teams.</h3>
            <p>Vera will use this to shape your workspace, dashboards and the first candidates we surface.</p>
          </aside>
        </section>
      `;
      createIcons();
      qsa("[data-chip-group]", root).forEach(group => {
        const multi = group.dataset.multi === "1";
        qsa("[data-chip-value]", group).forEach(chip => chip.addEventListener("click", () => {
          if (multi) {
            chip.classList.toggle("selected");
          } else {
            qsa("[data-chip-value]", group).forEach(item => item.classList.toggle("selected", item === chip));
          }
        }));
      });
      qs("[data-wizard-continue]", root)?.addEventListener("click", () => {
        const roleChip = qs('[data-chip-group="role"] .selected', root);
        const purposeChips = qsa('[data-chip-group="purpose"] .selected', root);
        const sizeChip = qs('[data-chip-group="size"] .selected', root);
        const industryChip = qs('[data-chip-group="industry"] .selected', root);
        const next = readState();
        next.employerProfile = {
          ...(next.employerProfile || {}),
          roleDescription: roleChip?.dataset.chipValue || "",
          purposes: purposeChips.map(chip => chip.dataset.chipValue),
          company: String(qs("[data-company-name]", root)?.value || "").trim(),
          companySize: sizeChip?.dataset.chipValue || "",
          industry: industryChip?.dataset.chipValue || "",
          updatedAt: nowStamp()
        };
        writeState(next);
        wizardStep = 1;
        renderStep();
      });
      return;
    }

    // Step 1 (NEW): company branding + hiring roles with a live Company Card preview.
    if (wizardStep === 1) {
      const esc = value => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      const savedRoles = (employerProfile.hiringRoles || []).filter(role => ONBOARD_EMPLOYER_HIRING_ROLES.includes(role));

      root.innerHTML = `
        ${onboardWizardChrome(3, `<a href="employer-app.html">Save & exit</a>`)}
        <section class="cg-onboard-shell cg-onboard-shell-split cg-onboard-profile-shell">
          <div class="cg-onboard-main" data-onboard-form>
            <div class="cg-onboard-eyebrow">Company profile</div>
            <h1>Give candidates a reason to say yes.</h1>
            <p class="cg-onboard-sub">A logo and a short pitch help Vera present your roles well. Edit anytime.</p>

            <div class="cg-onboard-question">
              <header><span>${icon("image")} Company branding</span></header>
              <div class="cg-onboard-logo-row">
                <span class="cg-onboard-logo-tile" data-logo-tile>${(employerProfile.company || "C").charAt(0).toUpperCase()}</span>
                <div>
                  <label class="cg-onboard-logo-upload" data-logo-drop tabindex="0">
                    <input type="file" accept="image/*" hidden data-logo-input>
                    ${icon("upload")} Upload logo
                  </label>
                  <small data-logo-name>PNG or SVG - shown on your roles and company card.</small>
                </div>
              </div>
              <label class="cg-onboard-field"><span>Company name</span><input data-f="company" value="${esc(employerProfile.company || "")}" placeholder="e.g. CareerGo"></label>
              <label class="cg-onboard-field"><span>Company pitch <i>(2-3 sentences)</i></span><textarea class="cg-onboard-textarea" data-f="pitch" rows="3" placeholder="What you do, who you serve, and why people love working with you.">${esc(employerProfile.pitch || "")}</textarea></label>
            </div>

            <div class="cg-onboard-question">
              <header><span>${icon("briefcase-business")} What roles are you hiring for?</span><small>Select any</small></header>
              ${onboardChipGroup("hiringroles", ONBOARD_EMPLOYER_HIRING_ROLES, savedRoles, true)}
            </div>

            <footer class="cg-onboard-footer">
              <button class="cg-onboard-link" type="button" data-wizard-back>${icon("arrow-left")} Back</button>
              <button class="cg-onboard-btn-primary" type="button" data-wizard-continue>Continue ${icon("arrow-right")}</button>
            </footer>
          </div>
          <div class="cg-onboard-preview-col" data-preview-col></div>
        </section>
      `;
      createIcons();

      const formRoot = qs("[data-onboard-form]", root);
      const previewCol = qs("[data-preview-col]", root);
      const fieldVal = key => String(qs(`[data-f="${key}"]`, formRoot)?.value || "").trim();
      const selectedRoles = () => qsa('[data-chip-group="hiringroles"] .selected', formRoot).map(chip => chip.dataset.chipValue);

      function collectData() {
        return {
          company: fieldVal("company"),
          pitch: fieldVal("pitch"),
          industry: employerProfile.industry,
          size: employerProfile.companySize,
          roles: selectedRoles(),
          roleFocus: employerProfile.roleDescription
        };
      }
      function renderPreview() {
        previewCol.innerHTML = onboardPreviewCard("employer", collectData());
        const tile = qs("[data-logo-tile]", formRoot);
        if (tile) tile.textContent = (fieldVal("company") || "C").charAt(0).toUpperCase();
        createIcons();
      }
      renderPreview();

      qsa("[data-chip-group]", formRoot).forEach(group => {
        qsa("[data-chip-value]", group).forEach(chip => chip.addEventListener("click", () => {
          chip.classList.toggle("selected");
          renderPreview();
        }));
      });
      formRoot.addEventListener("input", renderPreview);
      qs("[data-logo-input]", formRoot)?.addEventListener("change", event => {
        const file = event.target.files && event.target.files[0];
        const nameNote = qs("[data-logo-name]", formRoot);
        if (nameNote) nameNote.textContent = `${file ? file.name : "logo"} - looks great on your company card.`;
        showToast("Logo added to your company card.");
      });

      qs("[data-wizard-back]", root)?.addEventListener("click", () => { wizardStep = 0; renderStep(); });
      qs("[data-wizard-continue]", root)?.addEventListener("click", () => {
        const next = readState();
        next.employerProfile = {
          ...(next.employerProfile || {}),
          company: fieldVal("company") || (next.employerProfile || {}).company || "",
          pitch: fieldVal("pitch"),
          hiringRoles: selectedRoles(),
          updatedAt: nowStamp()
        };
        writeState(next);
        wizardStep = 2;
        renderStep();
      });
      return;
    }

    const employerChecks = [
      ["Hiring context", Boolean(employerProfile.roleDescription) || (employerProfile.purposes || []).length > 0],
      ["Company details", Boolean(employerProfile.company) && Boolean(employerProfile.companySize)],
      ["Company pitch", Boolean(employerProfile.pitch)],
      ["Hiring roles", (employerProfile.hiringRoles || []).length > 0]
    ];
    const empDone = 1 + employerChecks.filter(([, done]) => done).length;
    const empTotal = 6;
    root.innerHTML = `
      ${onboardWizardChrome(4, `<a href="employer-app.html">Save & exit</a>`)}
      <section class="cg-onboard-shell cg-onboard-shell-wide">
        <div class="cg-onboard-finish-grid">
          <article class="cg-onboard-meet-card">
            <span class="cg-onboard-meet-avatar"><img src="assets/vera-ai-coach.png" alt="Vera"></span>
            <b>You're in</b>
            <h2>Meet Vera.</h2>
            <p>Vera will help you understand your roles, candidates and hiring priorities - while leaving every final decision to you.</p>
          </article>
          <div class="cg-onboard-finish-right">
            <article class="cg-onboard-prepared-card">
              <span class="cg-onboard-vera-kicker">${icon("sparkles")} Prepared for you</span>
              <h3>Vera will help you start with:</h3>
              <div class="cg-onboard-prepared-list">
                <div><span>${icon("plus")}</span>${(employerProfile.hiringRoles || []).length ? `${employerProfile.hiringRoles.length} role${employerProfile.hiringRoles.length === 1 ? "" : "s"} ready to publish` : "Set up your first role"}</div>
                <div><span>${icon("users-round")}</span>Understand candidate activity</div>
                <div><span>${icon("route")}</span>Matched candidates for your open roles</div>
              </div>
            </article>
            <article class="cg-onboard-completion-card">
              <div class="cg-onboard-completion-head"><span>Profile completion</span><b>${empDone}/${empTotal} done</b></div>
              <h3>${Math.round((empDone / empTotal) * 100)}% complete</h3>
              ${progressBar(Math.round((empDone / empTotal) * 100))}
              <div class="cg-onboard-checklist">
                <div class="done"><span>${icon("check-circle-2")}</span>Basic information</div>
                ${employerChecks.map(([label, done]) => done
                  ? `<div class="done"><span>${icon("check-circle-2")}</span>${label}</div>`
                  : `<div><span>${label}</span><a href="employer-app.html">Add</a></div>`).join("")}
                <div><span>Invite team member</span><a href="employer-app.html">Add</a></div>
              </div>
            </article>
            <footer class="cg-onboard-footer">
              <button class="cg-onboard-link" type="button" data-finish-later>Finish later</button>
              <button class="cg-onboard-btn-primary" type="button" data-go-dashboard>Go to dashboard ${icon("arrow-right")}</button>
            </footer>
          </div>
        </div>
      </section>
    `;
    createIcons();

    function finishOnboarding() {
      const next = readState();
      next.onboarding.employerDone = true;
      next.session = { ...next.session, loggedIn: true, role: "employer", name: getUserName(next) };
      next.employerProfile = { ...(next.employerProfile || {}), updatedAt: nowStamp() };
      syncCurrentUser(next);
      writeState(next);
      showToast("Employer portal is ready.");
      location.href = "employer-app.html";
    }
    qs("[data-go-dashboard]", root)?.addEventListener("click", finishOnboarding);
    qs("[data-finish-later]", root)?.addEventListener("click", finishOnboarding);
  }

  renderStep();
}

function openAdjustGoalsModal() {
  const state = readState();
  const goals = state.growGoals || {};
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <form class="modal card" data-adjust-goals-form>
      <div class="modal-head">
        <div>
          <div class="section-kicker">Growth journey</div>
          <h2>Adjust your goals</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="form-grid">
        <label>Target role <input class="field" name="role" value="${goals.role || ""}" placeholder="e.g. Product Manager, KL"></label>
        <label>Target offer date <input class="field" name="targetDate" type="date" value="${goals.targetDate || ""}"></label>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" type="submit">${icon("check")} Save goals</button>
        <button class="btn btn-ghost" type="button" data-close>Cancel</button>
      </div>
    </form>
  `;
  document.body.appendChild(backdrop);
  function close() {
    backdrop.remove();
    document.removeEventListener("keydown", onEsc);
  }
  function onEsc(event) {
    if (event.key === "Escape") close();
  }
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) close();
  });
  document.addEventListener("keydown", onEsc);
  qs("[data-adjust-goals-form]", backdrop).addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    next.growGoals = {
      role: String(form.get("role") || "").trim(),
      targetDate: String(form.get("targetDate") || "").trim()
    };
    writeState(next);
    close();
    showToast("Growth goals updated.");
    renderGrow();
  });
  createIcons();
}

const GROWTH_MOVES = [
  {
    id: "move-sql", kind: "Practice", time: "3h - Beginner", title: "SQL for Product Managers", source: "DataLemur",
    why: "Chosen because: 78% of your saved PM roles list SQL as required.",
    metrics: [["Interview readiness", "+8%"], ["New matching jobs", "+31"], ["Skill gap closed", "Data fluency"]],
    practice: {
      intro: "Five SQL exercises PMs are actually asked in interviews - joins, aggregation, and cohort thinking.",
      questions: [
        { id: "q1", title: "Join two tables", prompt: "Write a query joining `orders` and `users` to list each order with the customer's name and signup date." },
        { id: "q2", title: "Aggregate with GROUP BY", prompt: "Find the total revenue per product category for the last 30 days." },
        { id: "q3", title: "Window function", prompt: "Rank customers by lifetime spend within each country using a window function." },
        { id: "q4", title: "Cohort retention", prompt: "Write a query that buckets users into signup-month cohorts and shows month-1 retention." },
        { id: "q5", title: "Funnel conversion", prompt: "Calculate the conversion rate from `viewed` to `purchased` events per day." }
      ]
    }
  },
  {
    id: "move-strategy", kind: "Course", time: "6h - Intermediate", title: "Product Strategy sprint", source: "Reforge",
    why: "Chosen because: Completes Milestone 1 and matches your Grab & Setel targets.",
    metrics: [["Interview readiness", "+11%"], ["Pay band shift", "+RM 900"], ["Milestone", "Closes M1"]],
    course: {
      modules: [
        { id: "m1", title: "Frame the strategic bet", summary: "Turn a vague direction into a testable strategic bet with a clear north-star metric." },
        { id: "m2", title: "Map the competitive landscape", summary: "Position your product against Grab and Setel's current strategic moves." },
        { id: "m3", title: "Prioritize with a strategy canvas", summary: "Use a strategy canvas to cut your roadmap down to the 3 bets that matter." },
        { id: "m4", title: "Pressure-test with stakeholders", summary: "Rehearse defending your strategy against a skeptical VP of Product." }
      ]
    }
  },
  {
    id: "move-essay", kind: "Essay pack", time: "45m - Any", title: "Write a crisp problem statement", source: "Vera curated",
    why: "Chosen because: Your written comms is your strongest signal - publish once to lock Top 18%.",
    metrics: [["Callback rate", "x1.4"], ["Portfolio proof", "+1 artifact"], ["Milestone", "Feeds M3"]],
    essay: {
      template: "In 150-200 words: name the user, the pain, the evidence it's real, and why now is the moment to solve it.",
      criteria: [
        "Names a specific user segment, not \"users\" in general",
        "Backed by one concrete evidence point (data, quote, or observed behavior)",
        "States why this problem is more urgent now than 6 months ago",
        "Ends with the outcome that solving it unlocks"
      ]
    }
  }
];

function growMoveCompletionBonus(state) {
  const completed = Array.isArray(state.growMovesCompleted) ? state.growMovesCompleted : [];
  const bonus = { readiness: 0, matchingJobs: 0, pay: 0 };
  GROWTH_MOVES.filter(move => completed.includes(move.id)).forEach(move => {
    move.metrics.forEach(([label, value]) => {
      if (/interview readiness/i.test(label)) bonus.readiness += parseInt(value, 10) || 0;
      if (/matching jobs/i.test(label)) bonus.matchingJobs += parseInt(value.replace(/[^\d-]/g, ""), 10) || 0;
      if (/pay band/i.test(label)) bonus.pay += parseInt(value.replace(/[^\d-]/g, ""), 10) || 0;
    });
  });
  return bonus;
}

function parsePathMetricValue(value) {
  const match = String(value || "").match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
}

const CAREER_PATH_SORTS = {
  match: { label: "Highest match", sortIndex: 2 },
  salary: { label: "Highest salary", sortIndex: 3 },
  demand: { label: "Highest demand", sortIndex: 4 }
};

function sortCareerPaths(paths, sortKey) {
  const sortIndex = (CAREER_PATH_SORTS[sortKey] || CAREER_PATH_SORTS.match).sortIndex;
  return [...paths].sort((a, b) => parsePathMetricValue(b[sortIndex]) - parsePathMetricValue(a[sortIndex]));
}

function careerPathCardMarkup(path, opts = {}) {
  const [title, sub, match, salary, demand, why] = path;
  const safeTitle = escapeHtml(title);
  const askVeraHref = `posts.html?topic=${encodeURIComponent(`Tell me more about the ${title} path`)}#messages`;
  const askVeraControl = opts.iconOnlyVera
    ? `<a class="cg-vera-ask-btn icon-only" href="${askVeraHref}" aria-label="Ask Vera about ${safeTitle}" title="Ask Vera about this path"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt=""></a>`
    : `<a class="cg-vera-ask-btn" href="${askVeraHref}" aria-label="Ask Vera about ${safeTitle}" title="Ask Vera about this path"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="">Ask Vera</a>`;
  return `
    <article class="cg-direction-card" data-path-card data-path-title="${safeTitle}">
      <span>${match}</span>
      <h3>${title}</h3>
      <p>${sub}</p>
      <div class="cg-direction-stats">
        <div><dt>Estimated salary</dt><dd><span>${salary}</span><small>MY - median</small></dd></div>
        <div><dt>Market demand</dt><dd><span>${icon("triangle")}${demand}</span><small>last 30 days</small></dd></div>
      </div>
      <p class="cg-direction-why">${icon("sparkles")} Why - ${why}</p>
      <footer class="cg-direction-card-actions">
        ${opts.showViewDetails ? `<a class="cg-plain-link" href="#" data-view-path="${safeTitle}">View details ${icon("arrow-right")}</a>` : ""}
        ${askVeraControl}
      </footer>
    </article>
  `;
}

function openCareerPathsModal(paths, opts = {}) {
  let sortKey = "match";
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-path-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Career Paths</div>
          <h2>All career paths for you</h2>
          <p class="cg-h2-sub">Directions your profile could realistically take next, with salary and demand for each.</p>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <label class="cg-path-sort">
        <span>Sort by</span>
        <select data-path-sort>
          ${Object.entries(CAREER_PATH_SORTS).map(([key, { label }]) => `<option value="${key}">${label}</option>`).join("")}
        </select>
        ${icon("chevron-down")}
      </label>
      <div class="cg-direction-grid cg-path-modal-grid" data-path-modal-grid></div>
    </div>
  `;
  document.body.appendChild(backdrop);

  function renderGrid() {
    const grid = qs("[data-path-modal-grid]", backdrop);
    grid.innerHTML = sortCareerPaths(paths, sortKey).map(path => careerPathCardMarkup(path, { iconOnlyVera: true })).join("");
    createIcons();
    if (opts.focusTitle) {
      const focusCard = qs(`[data-path-card][data-path-title="${CSS.escape(opts.focusTitle)}"]`, grid);
      if (focusCard) {
        focusCard.classList.add("is-focused");
        focusCard.scrollIntoView({ block: "center" });
      }
    }
  }
  renderGrid();

  qs("[data-path-sort]", backdrop)?.addEventListener("change", event => {
    sortKey = event.target.value;
    renderGrid();
  });

  function close() {
    backdrop.remove();
    document.removeEventListener("keydown", onEsc);
  }
  function onEsc(event) {
    if (event.key === "Escape") close();
  }
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) close();
  });
  document.addEventListener("keydown", onEsc);
  createIcons();
}

function renderGrow() {
  const root = qs("[data-grow]");
  if (!root) return;
  if (!requireAccount(root, "edit your Career Intelligence Profile")) return;
  const state = readState();
  const profile = state.profile;
  const intel = profile.intelligence || generateCareerIntelligence(profile);
  const growCoachInsight = veraInsight(state);
  const moveBonus = growMoveCompletionBonus(state);
  const growMovesCompleted = Array.isArray(state.growMovesCompleted) ? state.growMovesCompleted : [];
  const sqlDone = growMovesCompleted.includes("move-sql");
  const essayDone = growMovesCompleted.includes("move-essay");
  // Estimated pay has to agree with the single source-of-truth model on the
  // Career Value page: a RANGE (RM 8,300-9,800/mo, same as the Dashboard's
  // "Career worth" KPI), never one exact figure, and a percentage delta rather
  // than an exact ringgit gain. Completing growth moves still shifts the whole
  // band by moveBonus.pay, so the reward for finishing a move stays visible.
  const payLow = (8300 + moveBonus.pay) / 1000;
  const payHigh = (9800 + moveBonus.pay) / 1000;
  const growthStats = [
    ["Interview readiness", `${74 + moveBonus.readiness}%`, "6"],
    ["Skill percentile", "Top 31%", "11"],
    ["Matching jobs", String(153 + moveBonus.matchingJobs), "35"],
    // ~half of Career Value's documented "+5% this month", for a 14-day window.
    ["Estimated pay", `RM ${payLow.toFixed(1)}–${payHigh.toFixed(1)}k`, "3%"]
  ];
  const dataFluencyValue = Math.min(100, 58 + (sqlDone ? 20 : 0));
  const writtenCommsValue = Math.min(100, 86 + (essayDone ? 6 : 0));
  const skillGraph = [
    ["Product strategy", "Strong", "Near target - one artifact away from proof.", "Top 30%", 78, "strong"],
    ["Data fluency", sqlDone ? "Growing" : "Needs work", sqlDone ? "SQL for Product Managers is done - keep shipping proof." : "Closing this unlocks 40+ PM roles in KL.", "Largest hiring blocker", dataFluencyValue, sqlDone ? "growing" : "needs"],
    ["Written communication", "Strong", essayDone ? "Published your problem statement - locked in." : "Ship one public essay to lock it in.", "Top 18%", writtenCommsValue, "strong"],
    ["Technical depth", "Growing", "2 more shipped projects to reach target.", "Bottom 45%", 46, "growing"],
    ["User research", "On track", "One study away from target.", "Top 38%", 74, "track"]
  ];
  const milestones = [
    ["Milestone 1", "Interview foundation", "Warm up SQL, storytelling, and metric intuition.", "Ends Fri", "+8% readiness  - +40 role matches", 62, "In progress"],
    ["Milestone 2", "Data confidence", "Ship 2 dashboards. Own a metric end-to-end.", "~2 weeks", "Closes largest skill gap  - +RM 1.3k pay band", 0, ""],
    ["Milestone 3", "Portfolio proof", "One public case study Vera helps you write.", "~3 weeks", "Lifts interview callback rate ~2.3x", 0, ""],
    ["Milestone 4", "Application sprint", "5 applications  - 2 warm intros via Vera.", "~4 weeks", "Median offer RM 10.2k  - 3 expected interviews", 0, ""]
  ];
  const moves = GROWTH_MOVES;
  const careerPaths = [
    ["AI Product Manager", "One step above your current level", "91% match", "RM 145k / yr", "+34%", "Your SQL + design background is exactly what AI product teams in KL are hiring for."],
    ["Design Engineer", "Leans into your design background", "78% match", "RM 118k / yr", "+22%", "Rare hybrid role - few Malaysian designers code, few engineers design."],
    ["Founding PM (Seed startup)", "Fits your risk profile", "72% match", "RM 130k + equity / yr", "+12%", "You've saved 3 seed-stage KL startups this month."],
    ["Head of Product (Seed)", "3-year direction from your current roadmap", "64% match", "RM 200k / yr", "+18%", "Reachable within 3 years if you complete the Grow plan and lead one launch."]
  ];
  const growGoals = state.growGoals || {};
  const growMovesStarted = Array.isArray(state.growMovesStarted) ? state.growMovesStarted : [];
  const checklistItems = [
    ["resume-tailored", "Resume tailored to Grab PM JD"],
    ["company-research", "Company research completed"],
    ["star-stories", "STAR stories prepared (5)"],
    ["mock-interview", "Mock interview completed"],
    ["interviewer-questions", "Questions for interviewer prepared"],
    ["portfolio-rehearsed", "Portfolio case rehearsed out loud"]
  ];
  const defaultChecklistDone = ["resume-tailored", "company-research", "star-stories", "mock-interview"];
  const checklistDone = Array.isArray(state.interviewChecklist) ? state.interviewChecklist : defaultChecklistDone;
  const checklistDoneCount = checklistItems.filter(([id]) => checklistDone.includes(id)).length;
  const checklistPercent = Math.round((checklistDoneCount / checklistItems.length) * 100);
  const checklistRemaining = checklistItems.length - checklistDoneCount;
  const practiceItems = [
    ["Mock interview", "15 min", "15-min PM mock — marketplace pricing", "Product thinking", "+4% readiness", "mic"],
    ["Case study", "25 min", "Design a driver-incentive experiment", "Experiment design", "+3% readiness", "target"],
    ["Behavioral", "20 min", "3 STAR stories — conflict & prioritization", "Communication", "+2% readiness", "message-square"],
    ["SQL drill", "30 min", "Joins, window functions, cohort query", "SQL fluency", "+7% readiness", "zap"]
  ];
  const mockInterviewFeedback = "Strong framing. Tighten prioritization + numbers.";
  const mockInterviewAttempts = [
    { score: 58, dateLabel: "3 weeks ago" },
    { score: 67, dateLabel: "2 weeks ago" },
    { score: 76, dateLabel: "This week", feedback: mockInterviewFeedback }
  ];
  const readinessRows = [
    ["Communication", 82, "teal"],
    ["Product thinking", 75, "teal"],
    ["Behavioral", 68, "teal"],
    ["SQL", 54, "amber"],
    ["Execution", 79, "teal"]
  ];
  const coachingCards = [
    ["Grab", "Marketplace thinking", "Product metrics", "Experiment design", "teal"],
    ["Google", "Product sense", "Leadership", "Analytical thinking", "blue"],
    ["Maybank", "Stakeholder management", "Digital transformation", "Business strategy", "gold"]
  ];
  root.innerHTML = appShell("intelligence", `
    <section class="cg-grow">
      <header class="cg-grow-hero">
        <h1>Your next move, <em>coached by Vera.</em></h1>
        <p>I watch what the market rewards for the roles you're chasing, then coach you toward the smallest move with the biggest career return.</p>
      </header>

      <section class="cg-grow-win">
        <span>${icon("award")}</span>
        <div>
          <small>Nice work this week</small>
          <h2>You just moved into the <em>Top 31%</em> of PM candidates in KL.</h2>
          <p>Interview readiness climbed 6 points and you unlocked 23 additional matching roles. Keep the streak alive - Milestone 2 is one focused week away.</p>
          <div><b>${icon("zap")} +6% readiness</b><b>${icon("briefcase-business")} +23 matching jobs</b><b>${icon("flame")} 6-day streak</b></div>
        </div>
      </section>

      <section class="cg-grow-stats">
        <div class="cg-section-kicker">${icon("trending-up")} You're improving  - last 14 days</div>
        <div class="cg-grow-stat-grid">
          ${growthStats.map(([label, value, delta]) => `
            <article>
              <span>${label}</span>
              <strong>${value}<span class="cg-grow-stat-delta">${icon("arrow-up")}${delta}</span></strong>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="cg-grow-coach-grid">
        <article class="cg-skill-graph">
          <header><h2>${icon("brain-circuit")} Your skill graph</h2><small>vs. PM archetype  - KL market</small></header>
          ${skillGraph.map(([skill, status, note, rank, value, tone]) => `
            <div class="cg-skill-row tone-${tone}">
              <div><strong>${skill}</strong><span>${status}</span></div>
              <i><b style="width:${value}%"></b></i>
              <footer><small>${note}</small><small>${rank}</small></footer>
            </div>
          `).join("")}
        </article>

        <article class="cg-grow-coach">
          <div class="cg-grow-coach-head"><span><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Coach Vera</span><b>online</b></div>
          <div class="cg-chat-bubble">${growCoachInsight.bubble1}</div>
          <div class="cg-chat-question">${growCoachInsight.question}</div>
          <div class="cg-chat-bubble">${growCoachInsight.bubble2}</div>
          <div class="cg-grow-move">
            <span>Vera's suggested move today</span>
            <h3>${growCoachInsight.moveTitle}</h3>
            <dl>${growCoachInsight.stats.map(stat => `<dt>${stat.label}</dt><dd>${stat.value}</dd>`).join("")}</dl>
          </div>
          <form class="cg-grow-chat" action="posts.html#messages">
            <input name="topic" placeholder="Ask Vera anything about your career...">
            <button type="submit">${icon("send")}</button>
          </form>
        </article>
      </section>

      <section class="cg-grow-journey" id="growth-journey">
        <header>
          <div>
            <span class="cg-section-kicker">Goals</span>
            <h2>Your growth journey - ${growGoals.role || "Product Manager, KL"}</h2>
            <p class="cg-h2-sub">Milestones between you and your target role, with the current one highlighted.</p>
          </div>
          <button class="btn btn-ghost" type="button" data-adjust-goals>${icon("target")} Adjust goals</button>
        </header>
        <div class="cg-grow-progress"><i></i><span>18% overall  - est. offer by ${growGoals.targetDate ? new Date(growGoals.targetDate).toLocaleDateString("en-US", { month: "long", day: "numeric" }) : "mid-August"}</span><b>${icon("flame")} 6-day streak</b></div>
        <div class="cg-milestone-list">
          ${milestones.map(([label, title, body, time, result, progress, stateLabel], index) => `
            <article class="cg-milestone-card">
              <span class="cg-timeline-dot">${index === 0 ? icon("target") : ""}</span>
              <time>${time}</time>
              <small>${label}</small>
              <h3>${title}</h3>
              <p>${body}</p>
              <b>${icon("trophy")} ${result}</b>
              ${progress ? `<div class="cg-milestone-progress"><span>${stateLabel}</span><i><em style="width:${progress}%"></em></i><strong>${progress}%</strong></div>` : ""}
            </article>
          `).join("")}
        </div>
        <article class="cg-interview-checklist">
          <header><span>${icon("clipboard-check")} Interview in 3 days  - Grab PM</span><div><i><em style="width:${checklistPercent}%"></em></i><b>${checklistDoneCount}/${checklistItems.length}  - ${checklistPercent}% ready</b></div></header>
          <div>
            ${checklistItems.map(([id, item]) => {
              const done = checklistDone.includes(id);
              return `<p class="${done ? "done" : ""}" data-checklist-item="${id}" role="button" tabindex="0" aria-pressed="${done}">${icon(done ? "check-circle-2" : "circle")} ${item}</p>`;
            }).join("")}
          </div>
          <footer><span>${checklistRemaining > 0 ? `Finish the last ${checklistRemaining} to reach <strong>81%</strong> ready.` : `All prep steps done - you're on track for <strong>81%</strong> ready.`}</span><a class="btn btn-ghost" href="#interview-coach">Continue preparation ${icon("arrow-right")}</a></footer>
        </article>
      </section>

      <section class="cg-grow-section cg-grow-paths" id="career-paths">
        <div class="cg-grow-section-head">
          <div><h2>Career Paths</h2><p class="cg-h2-sub">Directions your profile could realistically take next, with salary and demand for each.</p></div>
          <a class="cg-plain-link" href="#" data-grow-browse-paths>Explore all career paths ${icon("arrow-right")}</a>
        </div>
        <div class="cg-direction-grid">
          ${sortCareerPaths(careerPaths, "match").slice(0, 3).map(path => careerPathCardMarkup(path, { showViewDetails: true })).join("")}
        </div>
      </section>

      <section class="cg-interview-coach" id="interview-coach">
        <div class="cg-grow-section-head">
          <div><h2 class="cg-interview-coach-title">Interview Coach &middot; Powered by Vera</h2><p class="cg-h2-sub">Walk into every interview already prepared.</p></div>
          <span class="cg-soft-pill">${icon("shield-check")} Adaptive to each company</span>
        </div>
        <div class="cg-interview-top">
          <article class="cg-upcoming-interview">
            <small>${icon("calendar-clock")} Upcoming interview</small>
            <header><div><h3>Product Manager</h3><p>${icon("building-2")} Grab Malaysia &middot; Round 2 &middot; Hiring Manager + Case</p></div><time>Tuesday, 9 Jul &middot; 10:00 AM<span>3 days remaining</span></time></header>
            <div class="cg-interview-kpis">
              <div><span>Interview readiness</span><strong>74%</strong></div>
              <div><span>Difficulty</span><strong>High</strong></div>
              <div><span>Your confidence</span><strong>Medium</strong></div>
            </div>
            <footer><p>Closing SQL + metric gaps this week is expected to lift readiness to 81% by interview day.</p><a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent("today's SQL and metrics prep plan for Grab PM")}#messages">Start today's plan ${icon("arrow-right")}</a></footer>
          </article>
          <article class="cg-vera-focus">
            <small><span class="cg-vera-focus-icon"><img src="assets/vera-ai-coach.png" alt="Vera AI"></span> Vera's focus for Grab</small>
            <p>I compared Grab's PM interview style with your current profile. Today's highest-impact prep is SQL and product metrics &mdash; your weakest areas and the two topics Grab tests in almost every PM loop.</p>
            <ul>
              <li>Grab often opens with a marketplace pricing prompt &mdash; practice one today.</li>
              <li>Expect a live SQL round: joins + one window function.</li>
              <li>Behavioral panel favours "conflict + prioritization" STAR stories.</li>
            </ul>
          </article>
        </div>
        <div class="cg-practice-grid">
          <article class="cg-practice-panel">
            <header><h3>${icon("play")} Today's interview practice</h3><span>~90 min total</span></header>
            <div class="cg-practice-cards">
              ${practiceItems.map(([kind, time, title, focus, lift, kindIcon]) => `
                <div class="cg-practice-card"><header><span>${icon(kindIcon)} ${kind}</span><small>${icon("clock")} ${time}</small></header><h4>${title}</h4><p>${focus}<b>${lift}</b></p><a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent(`practice: ${title}`)}#messages">${icon("play")} Start practice</a></div>
              `).join("")}
            </div>
          </article>
          <article class="cg-readiness-card">
            <header><h3>${icon("target")} Readiness breakdown</h3><strong>74%</strong></header>
            ${readinessRows.map(([label, value, tone]) => `<div class="cg-ready-row tone-${tone}"><div><span>${label}</span><b>${value}%</b></div><i><em style="width:${value}%"></em></i></div>`).join("")}
            <p>SQL is your biggest interview blocker. Bringing it to 70% is projected to lift overall readiness to ~81%.</p>
          </article>
        </div>
        <div class="cg-interview-history-grid">
          <article class="cg-mock-history">
            <h3>${icon("history")} Mock interview history</h3>
            ${historyTrendSvg(mockInterviewAttempts)}
            <span class="sr-only">${historyTrendSummary(mockInterviewAttempts)}</span>
            <p><span>Latest feedback</span>"${mockInterviewFeedback}"</p>
          </article>
          <article class="cg-company-coaching">
            <header>
              <h3>${icon("building-2")} Company-specific coaching</h3>
            </header>
            <div data-company-cards>${coachingCards.map(([company, a, b, c, tone]) => `<section class="tone-${tone}"><span>Focus areas</span><h4>${company}</h4><ul><li>${a}</li><li>${b}</li><li>${c}</li></ul></section>`).join("")}</div>
          </article>
        </div>
      </section>

      <section class="cg-grow-section" id="recommended-growth">
        <div class="cg-grow-section-head"><div><h2>Recommended Growth</h2><p class="cg-h2-sub">The learning moves with the highest return for your target role right now.</p></div><a href="vera.html#skills">Browse all</a></div>
        <div class="cg-move-grid">
          ${moves.map(move => {
            const { id, kind, time, title, source, why, metrics } = move;
            const completed = growMovesCompleted.includes(id);
            const started = completed || growMovesStarted.includes(id);
            const buttonIcon = completed ? "check-circle-2" : started ? "arrow-right" : "play";
            const buttonLabel = completed ? "Completed" : started ? "In progress" : "Start";
            return `
            <article class="cg-move-card ${started ? "started" : ""} ${completed ? "completed" : ""}">
              <header><span>${kind}</span><small>${icon("clock")} ${time}</small></header>
              <h3>${title}</h3>
              <p>${icon("book-open")} ${source}</p>
              <div class="cg-move-why">${icon("lightbulb")} ${why}</div>
              <dl>${metrics.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
              <a class="btn btn-primary" href="growth-move.html?id=${encodeURIComponent(id)}">${icon(buttonIcon)} ${buttonLabel}</a>
            </article>
          `;
          }).join("")}
        </div>
      </section>
    </section>
    ${veraWidgetMarkup()}
  `);
  qs("[data-adjust-goals]", root)?.addEventListener("click", () => openAdjustGoalsModal());
  qs("[data-grow-browse-paths]", root)?.addEventListener("click", event => {
    event.preventDefault();
    openCareerPathsModal(careerPaths);
  });
  qsa("[data-view-path]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    openCareerPathsModal(careerPaths, { focusTitle: link.dataset.viewPath });
  }));
  function toggleChecklistItem(id) {
    const next = readState();
    const current = Array.isArray(next.interviewChecklist) ? next.interviewChecklist : defaultChecklistDone;
    next.interviewChecklist = current.includes(id) ? current.filter(item => item !== id) : [...current, id];
    writeState(next);
    renderGrow();
  }
  qsa("[data-checklist-item]", root).forEach(item => {
    item.addEventListener("click", () => toggleChecklistItem(item.dataset.checklistItem));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleChecklistItem(item.dataset.checklistItem);
      }
    });
  });
  createIcons();
  wireVeraWidget(root);
  if (["#growth-journey", "#career-paths", "#interview-coach", "#recommended-growth"].includes(location.hash)) {
    window.setTimeout(() => qs(location.hash, root)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }
  const historySvg = qs(".cg-history-trend", root);
  if (historySvg) {
    const measuredWidth = Math.round(historySvg.getBoundingClientRect().width);
    if (measuredWidth > 0 && Math.abs(measuredWidth - 600) > 4) {
      historySvg.outerHTML = historyTrendSvg(mockInterviewAttempts, measuredWidth);
      createIcons();
    }
  }
  bindHistoryTooltips(root);
  initPageTour("grow");
  return;
  root.innerHTML = appShell("intelligence", `
    <section class="glass-card dashboard-hero profile-intel-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Private Career Intelligence</div><h1 class="section-title">Resume profile and career data.</h1><p class="section-sub">${intel.summary}</p></div>
      ${healthRing(intel, false)}
    </section>
    <section class="glass-card generated-profile-card">
      <div class="section-kicker">Generated profile</div>
      <div class="grid-3">
        ${[
          ["Career stage", intel.careerStage],
          ["Resume readiness", intel.resumeReadiness],
          ["ATS readiness", intel.atsReadiness],
          ["Skill competitiveness", intel.skillCompetitiveness],
          ["Market fit", intel.marketFit],
          ["Learning priority", intel.learningPriority]
        ].map(([label, value]) => `<div class="score-tile"><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>
    </section>
    <form class="profile-form" data-profile-form>
      <section class="profile-form-columns">
        <div class="profile-form-column">
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Personal Information</h2>
          <label>Full name <input name="fullName" value="${profile.personal.fullName}"></label>
          <div class="grid-2"><label>Email <input name="email" type="email" value="${profile.personal.email}"></label><label>Phone optional <input name="phone" value="${profile.personal.phone}"></label></div>
          <div class="grid-2"><label>Age range <input name="ageRange" value="${profile.personal.ageRange}"></label><label>Preferred language <input name="preferredLanguage" value="${profile.personal.preferredLanguage}"></label></div>
          <div class="grid-2"><label>Country <input name="country" value="${profile.personal.country}"></label><label>City / State <input name="cityState" value="${profile.personal.cityState}"></label></div>
          <label>Role type <select name="roleType">${ROLE_TYPES.map(role => `<option value="${role}" ${profile.personal.roleType === role ? "selected" : ""}>${role}</option>`).join("")}</select></label>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Education</h2>
          <label>School / university <input name="school" value="${profile.background.school}"></label>
          <div class="grid-2"><label>Education level <input name="educationLevel" value="${profile.background.educationLevel}"></label><label>Course / major <input name="courseMajor" value="${profile.background.courseMajor}"></label></div>
          <div class="grid-2"><label>Expected graduation year <input name="expectedGraduationYear" value="${profile.background.expectedGraduationYear}"></label><label>Academic performance optional <input name="academicPerformance" value="${profile.background.academicPerformance}"></label></div>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Skills</h2>
          <label>Technical / domain skills <textarea name="technical">${profile.skills.technical.join(", ")}</textarea></label>
          <label>Soft skills <textarea name="soft">${profile.skills.soft.join(", ")}</textarea></label>
          <label>Tools <textarea name="tools">${profile.skills.tools.join(", ")}</textarea></label>
          <label>Certifications <textarea name="certifications">${profile.skills.certifications.join(", ")}</textarea></label>
          <label>Languages <input name="languages" value="${profile.skills.languages.join(", ")}"></label>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Job Preferences</h2>
          <label>Preferred locations <textarea name="locations">${profile.preferences.locations.join(", ")}</textarea></label>
          <div class="grid-2"><label>Work mode <input name="workMode" value="${profile.preferences.workMode}"></label><label>Employment types <input name="employmentTypes" value="${profile.preferences.employmentTypes.join(", ")}"></label></div>
          <div class="grid-2"><label>Minimum salary optional <input name="minimumSalary" value="${profile.preferences.minimumSalary}"></label><label>Relocate <input name="relocate" value="${profile.preferences.relocate}"></label></div>
          <div class="grid-2"><label>Work culture <input name="workCulture" value="${profile.preferences.workCulture}"></label><label>Risk tolerance <input name="riskTolerance" value="${profile.preferences.riskTolerance}"></label></div>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Privacy Settings</h2>
          <label>Profile visibility <select name="profileVisibility"><option>${profile.privacy.profileVisibility}</option><option>Private</option><option>Visible to employers</option><option>Visible for advisory opportunities</option></select></label>
          <label class="check-field custom-checkbox"><input name="allowEmployerDiscovery" type="checkbox" ${profile.privacy.allowEmployerDiscovery ? "checked" : ""}> Allow employer discovery</label>
          <label class="check-field custom-checkbox"><input name="allowCoachMemory" type="checkbox" ${profile.privacy.allowCoachMemory ? "checked" : ""}> Allow Vera to remember coaching context</label>
        </div>
        </div>
        <div class="profile-form-column">
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Career Goals</h2>
          <label>Career stage <select name="careerStage">${CAREER_STAGES.map(stage => `<option value="${stage}" ${profile.careerStage === stage ? "selected" : ""}>${stage}</option>`).join("")}</select></label>
          <label>Goals <textarea name="goals">${profile.goals.join(", ")}</textarea></label>
          <label>Preferred roles <textarea name="roles">${profile.preferences.roles.join(", ")}</textarea></label>
          <label>Preferred industries <textarea name="industries">${profile.preferences.industries.join(", ")}</textarea></label>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Experience</h2>
          <div class="grid-2"><label>Current / last role <input name="currentRole" value="${profile.background.currentRole || profile.background.lastRole}"></label><label>Industry <input name="industry" value="${profile.background.industry}"></label></div>
          <div class="grid-2"><label>Years of experience <input name="yearsExperience" value="${profile.background.yearsExperience}"></label><label>Management experience <input name="managementExperience" value="${profile.background.managementExperience}"></label></div>
          <label>Previous roles / work experience <textarea name="previousRoles">${profile.background.previousRoles || profile.skills.workExperience}</textarea></label>
          <label>Career switch / gap / senior context <textarea name="careerContext">${profile.background.switchConcerns || profile.background.gapReason || profile.background.leadershipExperience}</textarea></label>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Projects & Links</h2>
          <label>Projects <textarea name="projects">${profile.skills.projects.join(", ")}</textarea></label>
          <label>Achievements <textarea name="achievements">${profile.skills.achievements.join(", ")}</textarea></label>
          <label>Portfolio links <input name="portfolioLinks" value="${profile.skills.portfolioLinks}"></label>
          <div class="grid-2"><label>LinkedIn <input name="linkedin" value="${profile.skills.linkedin}"></label><label>GitHub <input name="github" value="${profile.skills.github}"></label></div>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">Resume & Documents</h2>
          <p class="muted">Current resume: ${profile.resume.name || "No resume uploaded yet"}</p>
          <label>Replace resume <input name="resume" type="file" accept=".pdf,.doc,.docx"></label>
          <div class="hero-actions"><button class="btn btn-cyan" type="button" data-analyze>${icon("scan-search")} Refresh analysis</button><button class="btn btn-ghost" type="button" data-export>${icon("download")} Export profile</button></div>
        </div>
        <div class="glass-card form-grid profile-card">
          <h2 class="section-title mini">AI Coach Preferences</h2>
          <label>Career worry <textarea name="worry">${profile.coach.worry}</textarea></label>
          <label>Support wanted from Vera <textarea name="supportStyle">${profile.coach.supportStyle}</textarea></label>
          <div class="grid-2"><label>Growth preference <input name="growthPreference" value="${profile.coach.growthPreference}"></label><label>Explanation style <input name="explanationStyle" value="${profile.coach.explanationStyle}"></label></div>
          <div class="grid-2"><label>Mission frequency <input name="missionFrequency" value="${profile.coach.missionFrequency}"></label><label>Confidence today <input name="confidenceToday" value="${profile.coach.confidenceToday}"></label></div>
        </div>
        </div>
      </section>
      <button class="btn btn-primary btn-wide" type="submit">${icon("save")} Save profile and refresh recommendations</button>
    </form>
  `);
  qs("[data-profile-form]").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    const p = next.profile;
    p.personal.fullName = String(form.get("fullName") || "");
    p.personal.email = String(form.get("email") || "");
    p.personal.phone = String(form.get("phone") || "");
    p.personal.ageRange = String(form.get("ageRange") || "");
    p.personal.preferredLanguage = String(form.get("preferredLanguage") || "");
    p.personal.country = String(form.get("country") || "");
    p.personal.cityState = String(form.get("cityState") || "");
    p.personal.roleType = String(form.get("roleType") || "");
    p.careerStage = String(form.get("careerStage") || "");
    p.goals = splitList(form.get("goals"));
    p.background.school = String(form.get("school") || "");
    p.background.educationLevel = String(form.get("educationLevel") || "");
    p.background.courseMajor = String(form.get("courseMajor") || "");
    p.background.expectedGraduationYear = String(form.get("expectedGraduationYear") || "");
    p.background.academicPerformance = String(form.get("academicPerformance") || "");
    p.background.currentRole = String(form.get("currentRole") || "");
    p.background.lastRole = String(form.get("currentRole") || "");
    p.background.industry = String(form.get("industry") || "");
    p.background.yearsExperience = String(form.get("yearsExperience") || "");
    p.background.managementExperience = String(form.get("managementExperience") || "");
    p.background.previousRoles = String(form.get("previousRoles") || "");
    p.background.switchConcerns = String(form.get("careerContext") || "");
    p.skills.technical = splitList(form.get("technical"));
    p.skills.soft = splitList(form.get("soft"));
    p.skills.tools = splitList(form.get("tools"));
    p.skills.certifications = splitList(form.get("certifications"));
    p.skills.languages = splitList(form.get("languages"));
    p.skills.projects = splitList(form.get("projects"));
    p.skills.achievements = splitList(form.get("achievements"));
    p.skills.portfolioLinks = String(form.get("portfolioLinks") || "");
    p.skills.linkedin = String(form.get("linkedin") || "");
    p.skills.github = String(form.get("github") || "");
    p.preferences.roles = splitList(form.get("roles"));
    p.preferences.industries = splitList(form.get("industries"));
    p.preferences.locations = splitList(form.get("locations"));
    p.preferences.workMode = String(form.get("workMode") || "");
    p.preferences.employmentTypes = splitList(form.get("employmentTypes"));
    p.preferences.minimumSalary = String(form.get("minimumSalary") || "");
    p.preferences.relocate = String(form.get("relocate") || "");
    p.preferences.workCulture = String(form.get("workCulture") || "");
    p.preferences.riskTolerance = String(form.get("riskTolerance") || "");
    p.privacy.profileVisibility = String(form.get("profileVisibility") || "Private");
    p.privacy.allowEmployerDiscovery = Boolean(form.get("allowEmployerDiscovery"));
    p.privacy.allowCoachMemory = Boolean(form.get("allowCoachMemory"));
    p.coach.worry = String(form.get("worry") || "");
    p.coach.supportStyle = String(form.get("supportStyle") || "");
    p.coach.growthPreference = String(form.get("growthPreference") || "");
    p.coach.explanationStyle = String(form.get("explanationStyle") || "");
    p.coach.missionFrequency = String(form.get("missionFrequency") || "");
    p.coach.confidenceToday = String(form.get("confidenceToday") || "");
    const file = event.currentTarget.resume.files[0];
    if (file) p.resume = { name: file.name, uploaded: true };
    p.intelligence = generateCareerIntelligence(p);
    p.updatedAt = nowStamp();
    next.session.name = p.personal.fullName;
    syncCurrentUser(next);
    writeState(next);
    showToast("Profile updated and recommendations refreshed.");
    renderProfile();
  });
  qs("[data-analyze]").addEventListener("click", () => showToast("Vera refreshed your profile analysis."));
  qs("[data-export]").addEventListener("click", () => {
    const blob = new Blob([`${getUserName(state)}\nStage: ${profile.careerStage}\nGoals: ${profile.goals.join(", ")}\nSkills: ${profile.skills.technical.join(", ")}\nProjects: ${profile.skills.projects.join("; ")}\nSummary: ${intel.summary}`], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CareerGo-profile-export.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  });
  createIcons();
}

function renderGrowthMovePage() {
  const root = qs("[data-growth-move]");
  if (!root) return;
  if (!requireAccount(root, "continue this learning move")) return;
  const moveId = new URLSearchParams(location.search).get("id");
  const move = GROWTH_MOVES.find(item => item.id === moveId);
  if (!move) {
    root.innerHTML = `
      <div class="locked-state-wrap">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Move not found</div>
          <h1 class="section-title">We could not find that learning move.</h1>
          <p class="section-sub">The link may be out of date.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="grow.html#recommended-growth">${icon("arrow-left")} Back to Growth</a></div>
        </div>
      </div>
    `;
    createIcons();
    return;
  }
  let state = readState();
  if (!state.growMovesStarted.includes(move.id) && !state.growMovesCompleted.includes(move.id)) {
    state.growMovesStarted = [...state.growMovesStarted, move.id];
    writeState(state);
    state = readState();
  }
  const completed = state.growMovesCompleted.includes(move.id);
  const progress = state.growMoveProgress[move.id] || {};
  const kindIcon = { Practice: "zap", Course: "book-open", "Essay pack": "pen-line" }[move.kind] || "sparkles";

  let bodyHtml = "";
  if (move.kind === "Practice") {
    const doneIds = Array.isArray(progress.doneQuestions) ? progress.doneQuestions : [];
    const total = move.practice.questions.length;
    bodyHtml = `
      <article class="cg-cp-card">
        <span class="cg-section-kicker">Practice</span>
        <h2>${total} SQL exercises</h2>
        <p>${move.practice.intro}</p>
        <p class="cg-move-detail-progress">${doneIds.length}/${total} completed</p>
        <div class="cg-move-detail-list">
          ${move.practice.questions.map(q => {
            const done = doneIds.includes(q.id);
            return `
              <article class="cg-move-detail-item ${done ? "done" : ""}">
                <button type="button" class="cg-move-detail-check" data-practice-toggle="${q.id}" aria-pressed="${done}">${icon(done ? "check-circle-2" : "circle")}</button>
                <div><strong>${escapeHtml(q.title)}</strong><p>${escapeHtml(q.prompt)}</p></div>
              </article>
            `;
          }).join("")}
        </div>
      </article>
    `;
  } else if (move.kind === "Course") {
    const doneIds = Array.isArray(progress.doneModules) ? progress.doneModules : [];
    const total = move.course.modules.length;
    bodyHtml = `
      <article class="cg-cp-card">
        <span class="cg-section-kicker">Course &middot; ${escapeHtml(move.source)}</span>
        <h2>${total} modules</h2>
        <p class="cg-move-detail-progress">${doneIds.length}/${total} completed</p>
        <ol class="cg-move-detail-modules">
          ${move.course.modules.map((m, index) => {
            const done = doneIds.includes(m.id);
            return `
              <li class="${done ? "done" : ""}">
                <span>${done ? icon("check-circle-2") : index + 1}</span>
                <div><strong>${escapeHtml(m.title)}</strong><p>${escapeHtml(m.summary)}</p></div>
                <button type="button" class="btn ${done ? "btn-ghost" : "btn-primary"}" data-module-toggle="${m.id}">${done ? "Completed" : "Mark complete"}</button>
              </li>
            `;
          }).join("")}
        </ol>
      </article>
    `;
  } else if (move.kind === "Essay pack") {
    const draft = progress.draft || "";
    const published = Boolean(progress.published);
    bodyHtml = `
      <article class="cg-cp-card">
        <span class="cg-section-kicker">Prompt</span>
        <h2>Write your problem statement</h2>
        <p>${escapeHtml(move.essay.template)}</p>
      </article>
      <article class="cg-cp-card">
        <span class="cg-section-kicker">What makes it strong</span>
        <h2>Guidance</h2>
        <div class="cg-uni-requirements"><ul>${move.essay.criteria.map(c => `<li class="ok">${icon("check-circle-2")}<div><p>${escapeHtml(c)}</p></div></li>`).join("")}</ul></div>
      </article>
      <article class="cg-cp-card">
        <span class="cg-section-kicker">Your draft</span>
        <h2>${published ? "Published" : "Draft"}</h2>
        <textarea class="cg-essay-editor" data-essay-draft placeholder="Write your problem statement here..." ${published ? "disabled" : ""}>${escapeHtml(draft)}</textarea>
        <div class="cg-action-row">
          ${published
            ? `<span class="cg-cp-vera-watch">${icon("check-circle-2")} Published - counted toward your portfolio proof.</span>`
            : `<button type="button" class="btn btn-ghost" data-essay-save>${icon("save")} Save draft</button><button type="button" class="btn btn-primary" data-essay-publish>${icon("upload")} Publish</button>`}
        </div>
      </article>
    `;
  }

  root.innerHTML = `
    <section class="cg-cp">
      <a class="cg-cp-back" href="grow.html#recommended-growth">${icon("arrow-left")} Growth</a>
      <article class="cg-cp-hero">
        <div class="cg-cp-hero-top">
          <span class="cg-cp-mono">${move.kind.slice(0, 2).toUpperCase()}</span>
          <div class="cg-cp-hero-id">
            <span class="cg-section-kicker">${escapeHtml(move.kind)} &middot; ${escapeHtml(move.time)}</span>
            <h1>${escapeHtml(move.title)}</h1>
            <p class="cg-cp-hero-meta">${icon("book-open")} ${escapeHtml(move.source)}</p>
          </div>
          <div class="cg-cp-hero-actions">
            ${completed ? `<span class="pill">${icon("check-circle-2")} Completed</span>` : ""}
          </div>
        </div>
        <div class="cg-cp-vera">
          <span class="cg-cp-vera-label">${icon("lightbulb")} Why Vera chose this</span>
          <p>${escapeHtml(move.why.replace(/^Chosen because:\s*/, ""))}</p>
        </div>
        <div class="cg-move-detail-stats">
          ${move.metrics.map(([k, v]) => `<div><span>${escapeHtml(k)}</span><strong>${escapeHtml(v)}</strong></div>`).join("")}
        </div>
      </article>
      ${bodyHtml}
    </section>
  `;
  createIcons();

  function updateProgress(mutator) {
    const next = readState();
    next.growMoveProgress = next.growMoveProgress && typeof next.growMoveProgress === "object" ? next.growMoveProgress : {};
    const current = next.growMoveProgress[move.id] || {};
    next.growMoveProgress[move.id] = mutator({ ...current });
    return next;
  }
  function markCompletedIfDone(next, isDone) {
    if (!isDone) return next;
    next.growMovesCompleted = Array.isArray(next.growMovesCompleted) ? next.growMovesCompleted : [];
    if (!next.growMovesCompleted.includes(move.id)) {
      next.growMovesCompleted = [...next.growMovesCompleted, move.id];
      showToast(`${move.title} completed - stats updated on your Growth page.`);
    }
    return next;
  }

  qsa("[data-practice-toggle]", root).forEach(btn => btn.addEventListener("click", () => {
    const qId = btn.dataset.practiceToggle;
    let next = updateProgress(current => {
      const doneQuestions = Array.isArray(current.doneQuestions) ? current.doneQuestions : [];
      current.doneQuestions = doneQuestions.includes(qId) ? doneQuestions.filter(id => id !== qId) : [...doneQuestions, qId];
      return current;
    });
    const allDone = next.growMoveProgress[move.id].doneQuestions.length === move.practice.questions.length;
    next = markCompletedIfDone(next, allDone);
    writeState(next);
    renderGrowthMovePage();
  }));

  qsa("[data-module-toggle]", root).forEach(btn => btn.addEventListener("click", () => {
    const mId = btn.dataset.moduleToggle;
    let next = updateProgress(current => {
      const doneModules = Array.isArray(current.doneModules) ? current.doneModules : [];
      if (!doneModules.includes(mId)) current.doneModules = [...doneModules, mId];
      return current;
    });
    const allDone = next.growMoveProgress[move.id].doneModules.length === move.course.modules.length;
    const wasCompleted = next.growMovesCompleted.includes(move.id);
    next = markCompletedIfDone(next, allDone);
    writeState(next);
    if (!allDone || wasCompleted) showToast("Module marked complete.");
    renderGrowthMovePage();
  }));

  qs("[data-essay-save]", root)?.addEventListener("click", () => {
    const text = qs("[data-essay-draft]", root)?.value || "";
    const next = updateProgress(current => ({ ...current, draft: text }));
    writeState(next);
    showToast("Draft saved.");
  });

  qs("[data-essay-publish]", root)?.addEventListener("click", () => {
    const text = qs("[data-essay-draft]", root)?.value || "";
    if (!text.trim()) {
      showToast("Write a draft before publishing.", "note");
      return;
    }
    let next = updateProgress(current => ({ ...current, draft: text, published: true }));
    next = markCompletedIfDone(next, true);
    writeState(next);
    renderGrowthMovePage();
  });
}

function renderProfileLegacy() {
  const root = qs("[data-profile]");
  if (!root) return;
  if (!requireAccount(root, "edit your CareerGo profile")) return;

  const state = readState();
  const profile = normalizeProfile(state.profile);
  const intel = profile.intelligence || generateCareerIntelligence(profile);
  const name = profile.personal.fullName || state.session.name || "Mira Tan";
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "MI";
  const targetRole = profile.preferences.roles[0] || profile.background.currentRole || "Product Analyst Candidate";
  const stage = profile.careerStage || "Career Switcher";
  const locationLabel = [profile.personal.cityState, profile.personal.country].filter(Boolean).join(", ") || "Kuala Lumpur, Malaysia";
  const school = profile.background.school || "Universiti Malaya";
  const course = profile.background.courseMajor || "Product Analytics path";
  const visibility = profile.privacy.profileVisibility || "Private";
  const publicUrl = `careergo.app/u/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`;
  const profileStrength = Math.min(100, 45
    + (profile.resume.uploaded || profile.resume.name ? 15 : 0)
    + (profile.skills.technical.length ? 15 : 0)
    + (profile.preferences.roles.length ? 10 : 0)
    + (profile.preferences.industries.length ? 10 : 0)
    + (profile.skills.projects.length ? 5 : 0));
  const listValue = value => Array.isArray(value) ? value.join(", ") : String(value || "");
  const htmlValue = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const option = (value, selected) => `<option value="${htmlValue(value)}" ${value === selected ? "selected" : ""}>${value}</option>`;
  const field = (label, name, value, placeholder = "") => `<label>${label}<input name="${name}" value="${htmlValue(value)}" placeholder="${htmlValue(placeholder)}"></label>`;
  const area = (label, name, value, placeholder = "") => `<label class="cg-profile-wide">${label}<textarea name="${name}" placeholder="${htmlValue(placeholder)}">${htmlValue(value)}</textarea></label>`;
  const formSections = [
    ["Personal Information", "user-round", [
      field("Full name", "fullName", profile.personal.fullName, "Mira Tan"),
      field("Email", "email", profile.personal.email, "mira@email.com"),
      field("Phone", "phone", profile.personal.phone, "+60"),
      field("City / State", "cityState", profile.personal.cityState, "Kuala Lumpur"),
      field("Country", "country", profile.personal.country, "Malaysia"),
      field("Preferred language", "preferredLanguage", profile.personal.preferredLanguage, "English"),
      `<label>Role type<select name="roleType">${["", ...ROLE_TYPES].map(value => option(value, profile.personal.roleType || "")).join("")}</select></label>`,
      field("Age range", "ageRange", profile.personal.ageRange, "18-24")
    ]],
    ["Education", "graduation-cap", [
      field("School / university", "school", profile.background.school, "Universiti Malaya"),
      field("Education level", "educationLevel", profile.background.educationLevel, "Degree"),
      field("Course / major", "courseMajor", profile.background.courseMajor, "Business Analytics"),
      field("Expected graduation year", "expectedGraduationYear", profile.background.expectedGraduationYear, "2027"),
      field("Academic performance", "academicPerformance", profile.background.academicPerformance, "CGPA 3.7"),
      area("Projects and club leadership", "clubLeadership", profile.background.clubLeadership || profile.background.projectExperience, "Case competitions, student clubs, leadership roles")
    ]],
    ["Experience", "briefcase-business", [
      field("Current / last role", "currentRole", profile.background.currentRole || profile.background.lastRole, "Product Designer"),
      field("Industry", "industry", profile.background.industry, "Fintech"),
      field("Years of experience", "yearsExperience", profile.background.yearsExperience, "2"),
      field("Current salary range", "currentSalaryRange", profile.background.currentSalaryRange, "RM 7k - 9k"),
      field("Management experience", "managementExperience", profile.background.managementExperience, "None"),
      area("Previous roles / work experience", "previousRoles", profile.background.previousRoles || profile.skills.workExperience, "Internships, freelance work, part-time roles")
    ]],
    ["Skills", "sparkles", [
      area("Technical skills", "technical", listValue(profile.skills.technical), "SQL, product analytics, user research"),
      area("Soft skills", "soft", listValue(profile.skills.soft), "Storytelling, stakeholder management"),
      area("Tools", "tools", listValue(profile.skills.tools), "Figma, Notion, Mixpanel"),
      area("Certifications", "certifications", listValue(profile.skills.certifications), "Google Analytics, DataCamp"),
      field("Languages", "languages", listValue(profile.skills.languages), "English, Malay, Mandarin")
    ]],
    ["Career Goals", "target", [
      `<label>Career stage<select name="careerStage">${["", ...CAREER_STAGES].map(value => option(value, profile.careerStage || "")).join("")}</select></label>`,
      area("Goals", "goals", listValue(profile.goals), "Move into product analytics, prepare for PM interviews"),
      area("Preferred roles", "roles", listValue(profile.preferences.roles), "Product Analyst, Associate PM"),
      area("Target industries", "industries", listValue(profile.preferences.industries), "Fintech, AI, SaaS"),
      area("Career context", "careerContext", profile.background.switchConcerns || profile.background.gapReason || profile.background.reasonForCareerGo, "What should Vera understand about your transition?")
    ]],
    ["Projects & Links", "link", [
      area("Projects", "projects", listValue(profile.skills.projects), "Portfolio case study, dashboard, research project"),
      area("Achievements", "achievements", listValue(profile.skills.achievements), "Awards, shipped outcomes, leadership wins"),
      field("Portfolio links", "portfolioLinks", profile.skills.portfolioLinks, "https://"),
      field("LinkedIn", "linkedin", profile.skills.linkedin, "https://linkedin.com/in/..."),
      field("GitHub", "github", profile.skills.github, "https://github.com/..."),
      field("Website", "website", profile.skills.website, "https://")
    ]],
    ["Job Preferences", "sliders-horizontal", [
      area("Preferred locations", "locations", listValue(profile.preferences.locations), "Kuala Lumpur, Remote"),
      field("Work mode", "workMode", profile.preferences.workMode, "Hybrid"),
      field("Employment types", "employmentTypes", listValue(profile.preferences.employmentTypes), "Full-time, internship"),
      field("Minimum salary", "minimumSalary", profile.preferences.minimumSalary, "RM 8,000"),
      field("Relocate", "relocate", profile.preferences.relocate, "Maybe"),
      field("Company size", "companySize", profile.preferences.companySize, "Startup, scaleup"),
      field("Work culture", "workCulture", profile.preferences.workCulture, "Async, craft-led"),
      field("Risk tolerance", "riskTolerance", profile.preferences.riskTolerance, "Medium")
    ]],
    ["Resume & Documents", "file-text", [
      `<div class="cg-profile-upload"><span>${icon("file-check-2")}</span><strong>${profile.resume.name || "No resume uploaded yet"}</strong><p>Upload a resume so Vera can refresh job fit, profile strength, and interview readiness.</p><input name="resume" type="file" accept=".pdf,.doc,.docx"></div>`
    ]],
    ["Privacy Settings", "shield-check", [
      `<label>Profile visibility<select name="profileVisibility">${["Private", "Public", "Visible to employers", "Visible for advisory opportunities"].map(value => option(value, visibility)).join("")}</select></label>`,
      `<label class="cg-profile-check"><input name="allowEmployerDiscovery" type="checkbox" ${profile.privacy.allowEmployerDiscovery ? "checked" : ""}> Allow employer discovery</label>`,
      `<label class="cg-profile-check"><input name="allowCoachMemory" type="checkbox" ${profile.privacy.allowCoachMemory ? "checked" : ""}> Allow Vera to remember coaching context</label>`
    ]],
    ["AI Coach Preferences", "bot", [
      area("Career worry", "worry", profile.coach.worry, "Confidence, interviews, salary, direction"),
      area("Support wanted from Vera", "supportStyle", profile.coach.supportStyle, "Direct feedback, encouragement, detailed planning"),
      field("Growth preference", "growthPreference", profile.coach.growthPreference, "Stable growth"),
      field("Explanation style", "explanationStyle", profile.coach.explanationStyle, "Simple guidance"),
      field("Mission frequency", "missionFrequency", profile.coach.missionFrequency, "Weekly"),
      field("Confidence today", "confidenceToday", profile.coach.confidenceToday, "Medium")
    ]]
  ];

  root.innerHTML = appShell("profile", `
    <section class="cg-profile-page">
      <div class="cg-profile-shell">
        <main class="cg-profile-main">
          <section class="cg-profile-hero-card">
            <div class="cg-profile-cover">
              <button class="cg-profile-cover-edit" type="button" aria-label="Edit cover">${icon("camera")}</button>
            </div>
            <div class="cg-profile-intro">
              <div class="cg-profile-avatar-wrap">
                <div class="cg-profile-avatar">${initials}</div>
                <button type="button" aria-label="Upload profile photo">${icon("plus")}</button>
              </div>
              <button class="cg-profile-edit-btn" type="button" aria-label="Edit profile">${icon("pencil")}</button>
              <div class="cg-profile-identity">
                <h1>${name}</h1>
                <p>${targetRole} - ${stage}</p>
                <div class="cg-profile-meta">
                  <span>${icon("graduation-cap")} ${school} - ${course}</span>
                  <span>${icon("map-pin")} ${locationLabel}</span>
                  <a href="settings.html">${icon("mail")} Contact info</a>
                </div>
              </div>
              <div class="cg-profile-actions">
                <button class="cg-profile-primary" type="button">${icon("toggle-right")} Open to work</button>
                <a class="cg-profile-secondary" href="#profile-form">${icon("plus")} Add section</a>
                <button class="cg-profile-secondary" type="button" data-analyze>${icon("scan-search")} Refresh analysis</button>
                <button class="cg-profile-more" type="button" aria-label="More actions">${icon("ellipsis")}</button>
              </div>
              <div class="cg-profile-nudges" aria-label="Profile improvement suggestions">
                ${[
                  ["file-up", "Add your resume to unlock better matches", "Get started"],
                  ["sparkles", "Complete your skills section", "Get started"],
                  ["target", "Add target industries for sharper recommendations", "Get started"]
                ].map(([iconName, text, action]) => `<article><span>${icon(iconName)}</span><p>${text}</p><a href="#profile-form">${action}</a><button type="button" aria-label="Dismiss">${icon("x")}</button></article>`).join("")}
              </div>
            </div>
          </section>

          <section class="cg-profile-suggested">
            <header><div><span>Suggested for you</span><h2>Small updates that improve Vera's signal.</h2></div><small>${profileStrength}% profile strength</small></header>
            <div>
              ${[
                ["briefcase-business", "Add your target industries", "Vera can compare your skills against roles in the markets you actually want.", "Add industries"],
                ["camera", "Upload a profile photo", "A simple avatar helps your profile feel complete across saved items and employer views.", "Upload photo"]
              ].map(([iconName, title, body, action]) => `<article><button type="button" aria-label="Dismiss">${icon("x")}</button><span>${icon(iconName)}</span><h3>${title}</h3><p>${body}</p><a href="#profile-form">${action}</a></article>`).join("")}
            </div>
          </section>
        </main>

        <aside class="cg-profile-sidebar">
          <article class="cg-profile-side-card">
            <header><h2>Profile visibility</h2><button type="button">${icon("pencil")}</button></header>
            <p>${visibility}</p>
            <div class="cg-mini-progress"><i style="width:${profile.privacy.allowEmployerDiscovery ? 82 : 42}%"></i></div>
            <small>${profile.privacy.allowEmployerDiscovery ? "Employers can discover your profile." : "Private until you switch visibility on."}</small>
          </article>
          <article class="cg-profile-side-card">
            <header><h2>Public profile & URL</h2><button type="button">${icon("copy")}</button></header>
            <p>${publicUrl}</p>
            <a href="public-profile.html">Preview public profile ${icon("arrow-right")}</a>
          </article>
          <article class="cg-profile-side-card cg-next-steps">
            <h2>Suggested next steps</h2>
            ${[
              ["target", "Complete Career Goals", profile.preferences.roles.length ? "Done" : "Complete"],
              ["sparkles", "Add 2 more skills to reach 90% strength", profile.skills.technical.length >= 2 ? "Done" : "Complete"],
              ["file-text", "Upload resume for fresh analysis", profile.resume.uploaded || profile.resume.name ? "Done" : "Complete"]
            ].map(([iconName, text, action]) => `<section><span>${icon(iconName)}</span><p>${text}</p><a href="#profile-form">${action}</a></section>`).join("")}
          </article>
        </aside>
      </div>

      <form class="cg-profile-form" id="profile-form" data-profile-form>
        <header class="cg-profile-form-head">
          <div><span>Career data</span><h2>Edit the details Vera uses.</h2><p>${intel.summary}</p></div>
          <button class="cg-profile-primary" type="submit">${icon("save")} Save profile and refresh recommendations</button>
        </header>
        <div class="cg-profile-form-grid">
          ${formSections.map(([title, iconName, controls]) => `
            <section class="cg-profile-form-card">
              <header><span>${icon(iconName)}</span><div><small>${title}</small><h3>${title}</h3></div></header>
              <div class="cg-profile-fields">${controls.join("")}</div>
            </section>
          `).join("")}
        </div>
        <footer class="cg-profile-savebar">
          <span>${icon("shield-check")} Saved data updates your account, Career Worth, matching, and Vera recommendations.</span>
          <div>
            <button class="cg-profile-secondary" type="button" data-export>${icon("download")} Export profile</button>
            <button class="cg-profile-primary" type="submit">${icon("save")} Save profile</button>
          </div>
        </footer>
      </form>
    </section>
  `);

  qsa(".cg-profile-nudges article button, .cg-profile-suggested article button", root).forEach(button => {
    button.addEventListener("click", () => button.closest("article")?.remove());
  });
  qs("[data-analyze]", root)?.addEventListener("click", () => showToast("Vera refreshed your profile analysis."));
  qs("[data-export]", root)?.addEventListener("click", () => {
    const blob = new Blob([`${name}\nStage: ${profile.careerStage}\nGoals: ${profile.goals.join(", ")}\nSkills: ${profile.skills.technical.join(", ")}\nProjects: ${profile.skills.projects.join("; ")}\nSummary: ${intel.summary}`], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CareerGo-profile-export.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  });
  qs("[data-profile-form]", root)?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const splitField = name => splitList(form.get(name));
    const next = readState();
    const p = normalizeProfile(next.profile);
    ["fullName", "email", "phone", "ageRange", "preferredLanguage", "country", "cityState", "roleType"].forEach(key => {
      p.personal[key] = String(form.get(key) || "").trim();
    });
    p.careerStage = String(form.get("careerStage") || "").trim();
    ["school", "educationLevel", "courseMajor", "expectedGraduationYear", "academicPerformance", "clubLeadership", "currentRole", "industry", "yearsExperience", "currentSalaryRange", "managementExperience", "previousRoles"].forEach(key => {
      p.background[key] = String(form.get(key) || "").trim();
    });
    p.background.lastRole = p.background.currentRole;
    p.background.switchConcerns = String(form.get("careerContext") || "").trim();
    p.goals = splitField("goals");
    p.skills.technical = splitField("technical");
    p.skills.soft = splitField("soft");
    p.skills.tools = splitField("tools");
    p.skills.certifications = splitField("certifications");
    p.skills.languages = splitField("languages");
    p.skills.projects = splitField("projects");
    p.skills.achievements = splitField("achievements");
    ["portfolioLinks", "linkedin", "github", "website"].forEach(key => {
      p.skills[key] = String(form.get(key) || "").trim();
    });
    p.preferences.roles = splitField("roles");
    p.preferences.industries = splitField("industries");
    p.preferences.locations = splitField("locations");
    p.preferences.workMode = String(form.get("workMode") || "Hybrid").trim();
    p.preferences.employmentTypes = splitField("employmentTypes");
    p.preferences.minimumSalary = String(form.get("minimumSalary") || "").trim();
    p.preferences.relocate = String(form.get("relocate") || "Maybe").trim();
    p.preferences.companySize = String(form.get("companySize") || "").trim();
    p.preferences.workCulture = String(form.get("workCulture") || "").trim();
    p.preferences.riskTolerance = String(form.get("riskTolerance") || "Medium").trim();
    p.privacy.profileVisibility = String(form.get("profileVisibility") || "Private");
    p.privacy.allowEmployerDiscovery = Boolean(form.get("allowEmployerDiscovery"));
    p.privacy.allowCoachMemory = Boolean(form.get("allowCoachMemory"));
    p.coach.worry = String(form.get("worry") || "").trim();
    p.coach.supportStyle = String(form.get("supportStyle") || "").trim();
    p.coach.growthPreference = String(form.get("growthPreference") || "Stable growth").trim();
    p.coach.explanationStyle = String(form.get("explanationStyle") || "Simple guidance").trim();
    p.coach.missionFrequency = String(form.get("missionFrequency") || "Weekly").trim();
    p.coach.confidenceToday = String(form.get("confidenceToday") || "Medium").trim();
    const file = event.currentTarget.resume?.files?.[0];
    if (file) p.resume = { name: file.name, uploaded: true };
    p.intelligence = generateCareerIntelligence(p);
    p.updatedAt = nowStamp();
    next.profile = p;
    next.session.name = p.personal.fullName;
    syncCurrentUser(next);
    writeState(next);
    showToast("Profile updated and recommendations refreshed.");
    renderProfile();
  });
  createIcons();
}

/* Composes a 2-3 sentence, third-person professional summary from the user's
   own data (identity + years/domain + top skills + forward-looking value).
   Deterministic, not AI - MVP has no model API - and deliberately never
   emits first-person "I want..." phrasing the way the old summary did (it
   piped background.reasonForCareerGo straight through). */
function buildProfessionalSummary(profile, roles) {
  const identity = profile.background.currentRole || profile.personal.roleType || "Professional";
  const years = profile.background.yearsExperience || "";
  const domain = profile.background.industry || profile.background.currentCareerField || "";
  const skills = [...(profile.skills.technical || []), ...(profile.skills.tools || [])].filter(Boolean).slice(0, 4);
  const target = profile.preferences.roles[0] || profile.background.targetCareerField || "";
  const metric = (roles || []).flatMap(role => role.bullets || []).find(line => /\d+\s?%|\d+x|RM\s?\d|\d{3,}\+/.test(line)) || "";
  const metricPhrase = metric ? metric.charAt(0).toLowerCase() + metric.slice(1) : "";
  return [
    `${identity}${years ? ` with ${years} of experience` : ""}${domain ? ` in ${domain.toLowerCase()}` : ""}${metricPhrase ? ` — ${metricPhrase}` : ""}.`,
    skills.length ? `Hands-on with ${skills.join(", ")}.` : "",
    target ? `Now applying that foundation to ${target.toLowerCase()} roles.` : ""
  ].filter(Boolean).join(" ");
}

/* Which required resume inputs are still missing. Drives both the gate on the
   "Generate resume" button and the checklist shown to the user, so we never
   silently emit a thin resume. */
function resumeReadiness(state) {
  const roles = Array.isArray(state.userRoles) ? state.userRoles : [];
  const education = Array.isArray(state.educationEntries) ? state.educationEntries : [];
  const missing = [];
  if (!roles.length) missing.push("Add at least one work experience entry");
  roles.forEach(role => {
    const label = role.title || "a role";
    if (!role.org) missing.push(`Company name for “${label}”`);
    if (!role.startDate) missing.push(`Start date for “${label}”`);
    if (!(role.bullets || []).length) missing.push(`What you did in “${label}”`);
  });
  if (!education.length) missing.push("Add at least one education entry");
  return { ready: !missing.length, missing };
}

function buildResumeMarkup(profile, job, state = readState()) {
  const esc = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const name = profile.personal.fullName || "CareerGo Member";
  const targetRole = job ? job.title : (profile.preferences.roles[0] || profile.background.targetCareerField || profile.background.currentRole || "Early-career professional");
  const contact = [profile.personal.email, profile.personal.phone, [profile.personal.cityState, profile.personal.country].filter(Boolean).join(", ")].filter(Boolean);
  const links = [profile.skills.linkedin, profile.skills.portfolioLinks, profile.skills.github, profile.skills.website].filter(Boolean);
  const jobSkills = job ? job.skills.map(skill => skill.toLowerCase()) : [];
  const matchesJob = skill => jobSkills.some(want => {
    const have = String(skill).toLowerCase();
    return have === want || have.includes(want) || want.includes(have);
  });
  const allSkills = [...new Set([...(profile.skills.technical || []), ...(profile.skills.tools || [])])];
  const orderedSkills = job ? [...allSkills].sort((a, b) => Number(matchesJob(b)) - Number(matchesJob(a))) : allSkills;
  const softSkills = profile.skills.soft || [];
  const summary = job
    ? `${profile.background.currentRole || profile.careerStage || "Motivated candidate"} targeting the ${job.title} role at ${job.company}. ${profile.background.transferableSkills ? `Brings ${profile.background.transferableSkills.toLowerCase()}.` : "Brings proof-first projects and a clear growth plan."}`
    : profile.background.reasonForCareerGo || profile.intelligence?.summary || `${profile.careerStage || "Professional"} focused on ${targetRole}.`;
  // Structured stores the Profile page maintains - the resume now composes
  // from these as well as profile.*, so nothing the user enters is invisible.
  const roles = Array.isArray(state.userRoles) ? state.userRoles : [];
  const education = Array.isArray(state.educationEntries) ? state.educationEntries : [];
  const portfolio = Array.isArray(state.portfolioProjects) ? state.portfolioProjects : [];
  const projects = [
    ...portfolio.map(item => [item.title, item.subtitle].filter(Boolean).join(" — ")),
    ...(profile.skills.projects || [])
  ].filter(Boolean);
  const achievements = profile.skills.achievements || [];
  const certifications = profile.skills.certifications || [];
  const languages = profile.skills.languages || [];
  const resumeSummary = job
    ? summary
    : (profile.summary || buildProfessionalSummary(profile, roles));
  const section = (title, body) => body ? `<section class="r-sec"><h3 class="r-h">${title}</h3>${body}</section>` : "";
  const entry = (title, dates, meta, bullets) => `
    <article class="r-entry">
      <div class="r-entry-head">
        <h4 class="r-title">${esc(title)}</h4>
        ${dates ? `<span class="r-dates">${esc(dates)}</span>` : ""}
      </div>
      ${meta ? `<p class="r-org">${esc(meta)}</p>` : ""}
      ${(bullets || []).length ? `<ul>${bullets.map(line => `<li>${esc(line)}</li>`).join("")}</ul>` : ""}
    </article>`;

  return `
    ${job ? `<div class="cg-resume-tailored-note">${icon("sparkles")} Tailored by Vera for <strong>${esc(job.title)}</strong> at <strong>${esc(job.company)}</strong> - matched skills highlighted.</div>` : ""}
    <header class="cg-resume-header r-head">
      <h2 class="r-name">${esc(name)}</h2>
      ${targetRole ? `<p class="r-role">${esc(targetRole)}</p>` : ""}
      ${contact.length ? `<p class="r-meta">${contact.map(esc).join(" &middot; ")}</p>` : ""}
      ${links.length ? `<p class="r-meta">${links.map(esc).join(" &middot; ")}</p>` : ""}
    </header>

    ${section("Summary", resumeSummary ? `<p>${esc(resumeSummary)}</p>` : "")}

    ${section("Skills", orderedSkills.length || softSkills.length ? `
      <div class="r-skills">
        ${orderedSkills.length ? `<div><h4 class="r-sub">Technical</h4><p>${orderedSkills.map(skill => job && matchesJob(skill) ? `<strong>${esc(skill)}</strong>` : esc(skill)).join(", ")}</p></div>` : ""}
        ${softSkills.length ? `<div><h4 class="r-sub">Core</h4><p>${softSkills.map(esc).join(", ")}</p></div>` : ""}
      </div>` : "")}

    ${section("Experience", roles.length
      ? roles.map(role => entry(
          role.title,
          [role.startDate, role.endDate].filter(Boolean).join(" – "),
          [role.org, role.location].filter(Boolean).join(", "),
          role.bullets
        )).join("")
      : "")}

    ${section("Projects", projects.length ? `<ul>${projects.map(project => `<li>${esc(project)}</li>`).join("")}</ul>` : "")}

    ${section("Education", education.length
      ? education.map(item => entry(
          item.subtitle || item.title,
          item.graduationDate,
          [item.title, item.location].filter(Boolean).join(", "),
          item.bullets
        )).join("")
      : "")}

    ${section("Certifications", certifications.length ? `<p>${certifications.map(esc).join(", ")}</p>` : "")}
    ${section("Languages", languages.length ? `<p>${languages.map(esc).join(", ")}</p>` : "")}
    ${section("Achievements", achievements.length ? `<ul>${achievements.map(item => `<li>${esc(item)}</li>`).join("")}</ul>` : "")}
  `;
}

function openResumeModal(jobId) {
  const state = readState();
  const profile = normalizeProfile(state.profile);
  const job = jobId ? DATA.jobs.find(item => item.id === jobId) : null;
  const readiness = resumeReadiness(state);
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-resume-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-resume-modal" role="dialog" aria-label="Resume preview">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${job ? "Tailored resume" : "Generated resume"}</div>
          <h2>${job ? `${job.title} - ${job.company}` : "Your CareerGo resume"}</h2>
        </div>
        <div class="cg-resume-actions">
          <button type="button" class="btn btn-primary" data-resume-print>${icon("printer")} Print / Save PDF</button>
          <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
        </div>
      </div>
      <p class="cg-resume-hint">${icon("info")} Built from your full profile and career data. Update it in <a href="edit-career-data.html">Edit Career Data</a> or on your <a href="profile.html">profile</a>, then regenerate.</p>
      ${readiness.ready ? "" : `
        <div class="cg-resume-gaps">
          <strong>${icon("alert-circle")} Complete these to generate a full resume</strong>
          <ul>${readiness.missing.map(item => `<li>${item}</li>`).join("")}</ul>
          <a class="btn btn-primary" href="edit-career-data.html">${icon("pencil")} Update career data</a>
        </div>`}
      <div class="cg-resume-sheet">${buildResumeMarkup(profile, job, state)}</div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-resume-print]", backdrop)?.addEventListener("click", () => {
    document.body.classList.add("cg-resume-print");
    const cleanup = () => document.body.classList.remove("cg-resume-print");
    window.addEventListener("afterprint", cleanup, { once: true });
    window.print();
    window.setTimeout(cleanup, 1000);
  });
  createIcons();
}

function openApplicationDetailsModal(jobId) {
  const state = readState();
  const job = DATA.jobs.find(item => item.id === jobId);
  if (!job) return;
  const record = state.applicationRecords?.[jobId] || createApplicationRecord(jobId, "saved");
  const forwardStages = APPLICATION_STAGES.slice(0, 5);
  const currentIndex = forwardStages.findIndex(stage => stage.key === record.stage);
  const nextStage = currentIndex >= 0 && currentIndex < forwardStages.length - 1 ? forwardStages[currentIndex + 1] : null;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-app-details-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-app-details-modal" role="dialog" aria-label="Application details">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${job.company}</div>
          <h2>${job.title}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-app-details-meta">
        ${applicationStagePill(record.stage)}
        <span class="muted small">${icon("calendar")} Deadline: ${record.deadline}</span>
      </div>
      <div class="cg-pipeline-steps">
        ${record.timeline.map((step, index) => `<article class="${step.done ? "done" : ""}"><b>${step.done ? icon("check") : index + 1}</b><i></i><span>${step.label}</span><small>${step.date}</small></article>`).join("")}
      </div>
      <div class="cg-note">${icon("sparkles")} ${record.note}</div>
      <div class="hero-actions compact-actions">
        ${nextStage ? `<button type="button" class="btn btn-primary" data-app-advance="${nextStage.key}">${icon("arrow-up-right")} Mark as ${nextStage.label}</button>` : ""}
        <a class="btn ${nextStage ? "btn-ghost" : "btn-primary"}" href="posts.html?topic=${encodeURIComponent(record.nextAction)}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera about this</a>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-app-advance]", backdrop)?.addEventListener("click", event => {
    const nextStageKey = event.currentTarget.dataset.appAdvance;
    updateApplicationStage(jobId, nextStageKey);
    showToast(`${job.title} moved to ${stageMeta(nextStageKey).label}.`);
    backdrop.remove();
    renderDashboard();
  });
  createIcons();
}

/* ---------------------------------------------------------------------------
 * Shared profile presenters.
 *
 * profile.html (the owner's editable view) and public-profile.html (the
 * external/employer view) render the SAME person, so anything derived from
 * profile data has to be computed in one place or the two pages drift.
 * Everything below reads from real state instead of the hard-coded
 * AI-engineer filler these panels used to carry, which contradicted whichever
 * persona was actually signed in.
 * ------------------------------------------------------------------------- */

/* portfolioProjects/portfolioGallery have no normalizeState() migration (unlike
 * userRoles/educationEntries), so whichever profile page loads first has to
 * seed the showcase demo content. Both pages call this so the public view is
 * never emptier than the private one. */
function ensurePortfolioShowcase(state) {
  let dirty = false;
  if (!Array.isArray(state.portfolioProjects)) {
    state.portfolioProjects = [
      {
        id: "marketpulse",
        title: "MarketPulse - fair-pay salary intelligence",
        label: "Pinned",
        verified: true,
        body: "Percentile salary bands per role, location and experience - winner of UMHack 2025 fintech track.",
        meta: [["Role", "Full-stack + ML"], ["Duration", "3 months"], ["Team", "2"]],
        impact: "12k+ salary data points modeled",
        chips: ["FastAPI", "PostgreSQL", "React", "XGBoost"],
        tone: "dark",
        links: { code: "https://github.com/mira-tan/marketpulse", demo: "https://marketpulse-demo.vercel.app" }
      },
      {
        id: "kubu",
        title: "Kubu - student mentor matching",
        label: "Vera verified",
        verified: true,
        body: "Two-sided platform pairing final-year students with industry mentors using an embedding-based match.",
        meta: [["Role", "Founding Engineer"], ["Duration", "6 months"], ["Team", "4"]],
        impact: "1,200 sign-ups in 8 weeks",
        chips: ["TypeScript", "Supabase", "Tailwind"],
        tone: "mint",
        links: { code: "https://github.com/mira-tan/kubu", demo: "https://kubu-app.vercel.app" }
      }
    ];
    dirty = true;
  }
  if (!Array.isArray(state.portfolioGallery)) {
    state.portfolioGallery = [
      { id: "gallery-1", label: "Screenshot", title: "Vera-Lite UI", tone: "mint" },
      { id: "gallery-2", label: "Screenshot", title: "MarketPulse dashboard", tone: "aqua" },
      { id: "gallery-3", label: "Video", title: "UMHack demo", tone: "dark" },
      { id: "gallery-4", label: "Design", title: "Kubu onboarding", tone: "mint" },
      { id: "gallery-5", label: "Certificate", title: "Kaggle certificate", tone: "dark" },
      { id: "gallery-6", label: "Slides", title: "IEEE presentation", tone: "aqua" }
    ];
    dirty = true;
  }
  return dirty;
}

/* "2016 - 2020 - 3.86 / 4.00", or just "2016 - 2020" when there's no score -
 * the old inline template always printed the separator and left a dangling
 * dash on every entry saved without one. */
function educationMetaLine(entry) {
  return [entry.years, entry.score].map(part => String(part || "").trim()).filter(Boolean).join(" - ");
}

/* Sidebar "Skill signal" panels. Scores are positional, not invented per
 * skill: the order the user listed their skills in IS the ranking, so the
 * numbers stay stable across reloads and match between both profile pages. */
function profileSkillPanels(profile) {
  const clean = list => (Array.isArray(list) ? list : []).map(item => String(item || "").trim()).filter(Boolean);
  const technical = clean(profile.skills.technical);
  const tools = clean(profile.skills.tools);
  const soft = clean(profile.skills.soft);
  const seen = new Set();
  const take = (list, count) => {
    const out = [];
    for (const item of list) {
      const key = item.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(item);
      if (out.length === count) break;
    }
    return out;
  };
  const rows = (list, scores) => list.map((label, index) => [label, scores[index]]);
  const panels = [];
  const tech = take(technical, 3);
  if (tech.length) panels.push({ caption: "Technical depth", rows: rows(tech, [92, 84, 78]) });
  const tool = take(tools, 3);
  if (tool.length) panels.push({ caption: "Tools", rows: rows(tool, [88, 81, 75]) });
  const strengths = take(soft, 3);
  if (strengths.length) panels.push({ caption: "Strengths", rows: rows(strengths, [90, 83, 77]) });
  const preferred = String(profile.personal.preferredLanguage || "English").trim() || "English";
  const languages = [[preferred, 95], ...(preferred.toLowerCase() === "malay" ? [["English", 90]] : [["Malay", 100]])];
  panels.push({ caption: "Languages", rows: languages });
  return panels;
}

/* The employer-facing "Why hire X" pitch, built from what the profile can
 * actually evidence rather than a fixed three-line boast. */
function profileWhyHire(profile, projects, roles, targetRole) {
  const points = [];
  if (projects.length) {
    const withImpact = projects.filter(project => String(project.impact || "").trim());
    points.push(`${projects.length} portfolio proof item${projects.length === 1 ? "" : "s"}${withImpact.length ? ` with measured impact - ${withImpact[0].impact}` : ""}`);
  }
  if (roles.length) {
    points.push(`${roles.length} documented role${roles.length === 1 ? "" : "s"} at ${roles[0].org}${roles.length > 1 ? " and beyond" : ""}`);
  }
  const technical = (profile.skills.technical || []).filter(Boolean).slice(0, 3);
  if (technical.length) points.push(`Verified working skills in ${technical.join(", ")}`);
  const certifications = (profile.skills.certifications || []).filter(Boolean);
  if (certifications.length) points.push(certifications[0]);
  if (!points.length) points.push("Profile is still being built out - check back soon.");
  return { score: 92, points: points.slice(0, 4), targetRole };
}

/* Recent activity, generated from the profile's own records so the feed can
 * never describe work the signed-in person never did. */
function profileActivityFeed(profile, projects, roles, educationEntries) {
  const items = [];
  if (roles[0]) items.push(["briefcase-business", `${roles[0].title} at ${roles[0].org}`, `${roles[0].startDate || roles[0].date || "Current"} - Role`]);
  if (projects[0]) items.push(["rocket", `Published ${projects[0].title}`, `${projects[0].label || "Portfolio"} - Proof`]);
  (profile.skills.certifications || []).filter(Boolean).slice(0, 1).forEach(cert => items.push(["award", cert, "Certificate"]));
  if (educationEntries[0]) items.push(["graduation-cap", educationEntries[0].title, `${educationEntries[0].subtitle || "Education"}${educationEntries[0].years ? ` - ${educationEntries[0].years}` : ""}`]);
  if (projects[1]) items.push(["book-open", `Published ${projects[1].title}`, `${projects[1].label || "Portfolio"} - Proof`]);
  if (roles[1]) items.push(["history", `${roles[1].title} at ${roles[1].org}`, `${roles[1].date || "Previous"} - Role`]);
  return items.slice(0, 5);
}

function renderProfile() {
  const root = qs("[data-profile]");
  if (!root) return;
  if (!requireAccount(root, "view your CareerGo profile")) return;

  const state = readState();
  const profile = normalizeProfile(state.profile);
  const resumeGate = resumeReadiness(state);
  const name = profile.personal.fullName || state.session.name || "Aisyah Rahman";
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "AR";
  const firstName = name.split(/\s+/).filter(Boolean)[0] || "Aisyah";
  const locationLabel = [profile.personal.cityState, profile.personal.country].filter(Boolean).join(", ") || "Kuala Lumpur, Malaysia";
  const targetRole = profile.preferences.roles[0] || profile.background.currentRole || "Applied AI Engineer";
  const school = profile.background.school || "Universiti Malaya";
  const major = profile.background.courseMajor || "Computer Science - AI specialisation";
  const esc = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const chip = text => `<span class="cg-up-chip">${esc(text)}</span>`;
  const skillBar = (label, value) => `
    <div class="cg-up-skill-row">
      <div><span>${esc(label)}</span><strong>${value}</strong></div>
      <i><b style="width:${value}%"></b></i>
    </div>
  `;
  const PROOF_CAP = 4;
  const ROLE_CAP = 3;
  const EDU_CAP = 3;
  const GALLERY_CAP = 6;
  const itemActions = (kind, id) => `
    <div class="cg-up-item-actions">
      <button type="button" class="cg-up-item-edit" data-edit-${kind}="${esc(id)}" aria-label="Edit">${icon("pencil")}</button>
      <button type="button" class="cg-up-item-delete" data-delete-${kind}="${esc(id)}" aria-label="Delete">${icon("trash-2")}</button>
    </div>
  `;
  // userRoles / educationEntries are guaranteed arrays by normalizeState(); only
  // the portfolio stores still need seeding, and that is shared with the public view.
  if (ensurePortfolioShowcase(state)) writeState(state);
  const projects = state.portfolioProjects;
  const roles = state.userRoles;
  const gallery = state.portfolioGallery;
  const educationEntries = state.educationEntries;
  const activities = profileActivityFeed(profile, projects, roles, educationEntries);
  const whyHire = profileWhyHire(profile, projects, roles, targetRole);
  const skillPanels = profileSkillPanels(profile);

  const avatarUrl = profile.personal.avatarDataUrl || "";
  root.innerHTML = appShell("", `
    <section class="cg-user-profile-v2">
      <header class="cg-up-hero">
        <div class="cg-up-cover">
          <div class="cg-up-avatar" ${avatarUrl ? `style="background-image:url('${esc(avatarUrl)}');background-size:cover;background-position:center"` : ""}>${avatarUrl ? "" : initials}</div>
          <button class="cg-up-camera" type="button" aria-label="Upload photo" data-upload-photo>${icon("camera")}</button>
        </div>
        <div class="cg-up-identity">
          <div>
            <span class="cg-up-kicker">Vera verified profile</span>
            <h1>${esc(name)}</h1>
            <p>${esc(targetRole)} - ${esc(locationLabel)}</p>
            <div class="cg-up-meta">
              <span>${icon("graduation-cap")} ${esc(school)}</span>
              <span>${icon("map-pin")} ${esc(locationLabel)}</span>
              <a href="settings.html">${icon("mail")} Contact info</a>
            </div>
          </div>
          <div class="cg-up-actions">
            <button class="cg-up-primary" type="button" data-generate-resume${resumeGate.ready ? "" : ' disabled aria-disabled="true" title="Add your experience, dates and education first"'}>${icon("file-text")} Generate resume</button>
            <a class="cg-up-secondary" href="edit-career-data.html">${icon("pencil")} Edit career data</a>
            <a class="cg-up-secondary" href="public-profile.html">${icon("eye")} Public view</a>
            <a class="cg-up-secondary" href="settings.html">${icon("settings")} Settings</a>
            ${resumeGate.ready ? "" : `<small class="cg-up-resume-hint">${icon("alert-circle")} ${resumeGate.missing.length} item${resumeGate.missing.length === 1 ? "" : "s"} missing - <a href="edit-career-data.html">complete your career data</a> to enable this.</small>`}
          </div>
        </div>
        <div class="cg-up-stats">
          ${[
            ["Portfolio readiness", "92%", "Recommended hire"],
            ["Career fit", "88%", ""],
            ["Profile strength", "94%", "Employer-ready"],
            ["Followers", "1,284", ""]
          ].map(([label, value, badge]) => `<article><span>${esc(label)}</span><div class="cg-up-stat-value"><strong>${esc(value)}</strong>${badge ? `<b class="cg-up-stat-badge">${esc(badge)}</b>` : ""}</div></article>`).join("")}
        </div>
      </header>

      <div class="cg-up-layout">
        <main class="cg-up-main">
          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Portfolio proof</h2><p class="cg-up-section-caption">Proof employers can scan in seconds.</p></div>
              <button type="button" class="cg-up-mini-btn" data-add-proof>${icon("plus")} Add proof</button>
            </div>
            <div class="cg-up-project-grid">
              ${projects.slice(0, PROOF_CAP).map(project => `
                <article class="cg-up-project-card">
                  ${itemActions("proof", project.id)}
                  <div class="cg-up-project-art ${project.tone}">
                    <div>
                      <span>${esc(project.label)}</span>
                      ${project.verified ? `<span>${icon("sparkles")} Vera verified</span>` : ""}
                    </div>
                    <h3>${esc(project.title)}</h3>
                    <a href="#" data-project-case-study="${esc(project.id)}" aria-label="Open project">${icon("arrow-up-right")}</a>
                  </div>
                  <div class="cg-up-project-body">
                    <p>${esc(project.body)}</p>
                    <dl>${project.meta.map(([key, value]) => `<div><dt>${esc(key)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>
                    <strong>Impact - ${esc(project.impact)}</strong>
                    <div class="cg-up-chip-row">${project.chips.map(chip).join("")}</div>
                    <footer>${project.links.code ? `<a href="${esc(project.links.code)}" target="_blank" rel="noopener">${icon("github")} Code</a>` : ""}${project.links.demo ? `<a href="${esc(project.links.demo)}" target="_blank" rel="noopener">${icon("external-link")} Demo</a>` : ""}<a href="#" data-project-case-study="${esc(project.id)}">${icon("file-text")} Case study</a><a href="#" data-project-case-study="${esc(project.id)}">Read ${icon("arrow-right")}</a></footer>
                  </div>
                </article>
              `).join("")}
            </div>
            ${projects.length > PROOF_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="proof">View all ${projects.length} proof items ${icon("arrow-right")}</button>` : ""}
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Experience</h2><p class="cg-up-section-caption">Roles & impact</p></div>
              <button type="button" class="cg-up-mini-btn" data-add-role>${icon("plus")} Add role</button>
            </div>
            <div class="cg-up-role-list">
              ${roles.slice(0, ROLE_CAP).map(role => `
                <article class="cg-up-role-card">
                  ${itemActions("role", role.id)}
                  <div class="cg-up-logo-tile">${esc(role.initials)}</div>
                  <div>
                    <h3>${esc(role.title)}</h3>
                    <p>${esc(role.org)} - ${esc(role.date)}</p>
                    <strong>${esc(role.body)}</strong>
                    <div class="cg-up-chip-row">${role.chips.map(chip).join("")}</div>
                  </div>
                  <a href="#" aria-label="Open role" data-role-detail="${esc(role.id)}">${icon("arrow-up-right")}</a>
                </article>
              `).join("")}
            </div>
            ${roles.length > ROLE_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="role">View all ${roles.length} roles ${icon("arrow-right")}</button>` : ""}
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Education</h2><p class="cg-up-section-caption">Learning path</p></div>
              <button type="button" class="cg-up-mini-btn" data-add-education>${icon("plus")} Add education</button>
            </div>
            <div class="cg-up-education-grid">
              ${educationEntries.slice(0, EDU_CAP).map(entry => `
                <article class="cg-up-edu-card">
                  ${itemActions("education", entry.id)}
                  <span>${icon(entry.icon)}</span>
                  <div>
                    <h3>${esc(entry.title)}</h3>
                    <p>${esc(entry.subtitle)}</p>
                    <small>${esc(educationMetaLine(entry))}</small>
                    <ul>${(entry.bullets || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>
                  </div>
                </article>
              `).join("")}
            </div>
            ${educationEntries.length > EDU_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="education">View all ${educationEntries.length} entries ${icon("arrow-right")}</button>` : ""}
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Portfolio gallery</h2><p class="cg-up-section-caption">Visual work</p></div>
              <button type="button" class="cg-up-mini-btn" data-upload-gallery>${icon("plus")} Upload</button>
            </div>
            <div class="cg-up-gallery">
              ${gallery.slice(0, GALLERY_CAP).map(item => `
                <article class="cg-up-gallery-card ${item.tone}">
                  ${itemActions("gallery", item.id)}
                  <span>${esc(item.label)}</span>
                  ${item.label === "Video" ? `<button type="button" aria-label="Play video" data-gallery-preview="${esc(item.id)}">${icon("play")}</button>` : ""}
                  <strong>${esc(item.title)}</strong>
                  <a href="#" aria-label="Open ${esc(item.title)}" data-gallery-preview="${esc(item.id)}">${icon("arrow-up-right")}</a>
                </article>
              `).join("")}
            </div>
            ${gallery.length > GALLERY_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="gallery">View all ${gallery.length} items ${icon("arrow-right")}</button>` : ""}
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head"><div><h2>Activity</h2><p class="cg-up-section-caption">Recent professional activity</p></div></div>
            <article class="cg-up-activity-card">
              ${activities.map(([iconName, title, meta], index) => `
                <a href="#" data-activity-detail="${index}">
                  <span class="${index === 0 ? "active" : ""}">${icon(iconName)}</span>
                  <div><strong>${esc(title)}</strong><small>${esc(meta)}</small></div>
                  ${icon("arrow-up-right")}
                </a>
              `).join("")}
            </article>
          </section>
        </main>

        <aside class="cg-up-sidebar">
          <section class="cg-up-hire-card">
            <h2>Why hire ${esc(firstName)}</h2>
            <div>
              <span>${icon("trending-up")} Recommended hire</span>
              <strong>${whyHire.score} <small>/ 100 match for ${esc(targetRole)}</small></strong>
              ${whyHire.points.map(point => `<p>${icon("check-circle-2")} ${esc(point)}</p>`).join("")}
            </div>
          </section>
          <section class="cg-up-side-panel cg-up-network">
            <h2>Network</h2>
            <p class="cg-up-section-caption">Professional circle</p>
            <div>
              <p><span>Followers</span><strong>1,284</strong></p>
              <p><span>Following</span><strong>312</strong></p>
              <p><span>Mentors</span><strong>6</strong></p>
              <p><span>Companies followed</span><strong>24</strong></p>
            </div>
            <footer><b>AI</b><b>MK</b><b>JT</b><b>SR</b><b>NH</b><em>+32 mutual</em></footer>
          </section>
          ${skillPanels.map(panel => `
          <section class="cg-up-side-panel">
            <a class="cg-up-panel-edit-link" href="edit-career-data.html" aria-label="Edit skills in Career Data" title="Edit in Career Data">${icon("pencil")}</a>
            <h2>Skill signal</h2>
            <p class="cg-up-section-caption">${esc(panel.caption)}</p>
            ${panel.rows.map(([label, value]) => skillBar(label, value)).join("")}
          </section>
          `).join("")}
        </aside>
      </div>
    </section>
  `);

  const profileSections = {
    proof: { stateKey: "portfolioProjects", label: "proof item", nounPlural: "proof items" },
    role: { stateKey: "userRoles", label: "role", nounPlural: "roles" },
    education: { stateKey: "educationEntries", label: "education entry", nounPlural: "education entries" },
    gallery: { stateKey: "portfolioGallery", label: "gallery item", nounPlural: "gallery items" }
  };
  const deleteProfileItem = (kind, id) => {
    const meta = profileSections[kind];
    const next = readState();
    const list = Array.isArray(next[meta.stateKey]) ? next[meta.stateKey] : [];
    next[meta.stateKey] = list.filter(item => item.id !== id);
    writeState(next);
    showToast(`Removed that ${meta.label}.`);
    renderProfile();
  };
  const openEditForKind = (kind, id) => {
    if (kind === "proof") {
      const project = projects.find(item => item.id === id);
      if (project) openProofFormModal(project, () => renderProfile());
    } else if (kind === "role") {
      const role = roles.find(item => item.id === id);
      if (role) openRoleFormModal(role, () => renderProfile());
    } else if (kind === "education") {
      const entry = educationEntries.find(item => item.id === id);
      if (entry) openEducationFormModal(entry, () => renderProfile());
    } else if (kind === "gallery") {
      const item = gallery.find(entry => entry.id === id);
      if (item) openGalleryFormModal(item, () => renderProfile());
    }
  };

  qs("[data-generate-resume]", root)?.addEventListener("click", () => openResumeModal());
  qsa("[data-project-case-study]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const project = projects.find(item => item.id === link.dataset.projectCaseStudy);
    if (project) openProjectCaseStudyModal(project);
  }));
  qs("[data-add-proof]", root)?.addEventListener("click", () => openProofFormModal(null, () => renderProfile()));
  qs("[data-add-role]", root)?.addEventListener("click", () => openRoleFormModal(null, () => renderProfile()));
  qs("[data-add-education]", root)?.addEventListener("click", () => openEducationFormModal(null, () => renderProfile()));
  qs("[data-upload-gallery]", root)?.addEventListener("click", () => openGalleryFormModal(null, () => renderProfile()));
  qsa("[data-gallery-preview]", root).forEach(trigger => trigger.addEventListener("click", event => {
    event.preventDefault();
    const match = gallery.find(item => item.id === trigger.dataset.galleryPreview);
    if (match) openGalleryPreviewModal(match);
  }));
  qs("[data-upload-photo]", root)?.addEventListener("click", () => openUploadPhotoModal(() => renderProfile()));
  qsa("[data-role-detail]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const role = roles.find(item => item.id === link.dataset.roleDetail);
    if (role) openExperienceRoleModal(role);
  }));
  qsa("[data-activity-detail]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const activity = activities[Number(link.dataset.activityDetail)];
    if (activity) openActivityDetailModal(activity);
  }));

  Object.keys(profileSections).forEach(kind => {
    qsa(`[data-edit-${kind}]`, root).forEach(btn => btn.addEventListener("click", event => {
      event.preventDefault();
      openEditForKind(kind, event.currentTarget.dataset[`edit${kind[0].toUpperCase()}${kind.slice(1)}`]);
    }));
    qsa(`[data-delete-${kind}]`, root).forEach(btn => btn.addEventListener("click", event => {
      event.preventDefault();
      const id = event.currentTarget.dataset[`delete${kind[0].toUpperCase()}${kind.slice(1)}`];
      const meta = profileSections[kind];
      openConfirmModal({
        title: `Remove this ${meta.label}?`,
        body: "This can't be undone.",
        confirmLabel: "Remove",
        onConfirm: () => deleteProfileItem(kind, id)
      });
    }));
  });
  qs('[data-view-all="proof"]', root)?.addEventListener("click", () => openProfileViewAllModal("proof", projects, () => renderProfile()));
  qs('[data-view-all="role"]', root)?.addEventListener("click", () => openProfileViewAllModal("role", roles, () => renderProfile()));
  qs('[data-view-all="education"]', root)?.addEventListener("click", () => openProfileViewAllModal("education", educationEntries, () => renderProfile()));
  qs('[data-view-all="gallery"]', root)?.addEventListener("click", () => openProfileViewAllModal("gallery", gallery, () => renderProfile()));

  createIcons();
}

function openUploadPhotoModal(onUploaded) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal cg-add-proof-modal" role="dialog" aria-label="Upload profile photo">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Profile photo</div>
          <h2>Upload photo</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <form data-upload-photo-form>
        <label>Photo <small>(JPG or PNG, shown as your profile avatar)</small>
          <input type="file" name="photo" accept="image/*" required data-photo-file>
        </label>
        <div class="hero-actions compact-actions">
          <button type="submit" class="btn btn-primary">${icon("upload")} Save photo</button>
          <button type="button" class="btn btn-ghost" data-close>Cancel</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-upload-photo-form]", backdrop)?.addEventListener("submit", event => {
    event.preventDefault();
    const file = qs("[data-photo-file]", backdrop)?.files?.[0];
    if (!file) {
      showToast("Choose a photo first.", "info");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const next = readState();
      next.profile.personal.avatarDataUrl = String(reader.result || "");
      writeState(next);
      showToast("Profile photo updated.");
      backdrop.remove();
      onUploaded?.();
    };
    reader.onerror = () => showToast("Could not read that file. Try a different photo.", "info");
    reader.readAsDataURL(file);
  });
  createIcons();
}

function openExperienceRoleModal(role) {
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal" role="dialog" aria-label="${esc2(role.title)} at ${esc2(role.org)}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${esc2(role.org)}</div>
          <h2>${esc2(role.title)}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-project-modal-body">
        <p><strong>${esc2(role.date)}</strong></p>
        <p>${esc2(role.body)}</p>
        <div class="cg-up-chip-row">${role.chips.map(item => `<span class="cg-up-chip">${esc2(item)}</span>`).join("")}</div>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  createIcons();
}

function openActivityDetailModal([iconName, title, meta]) {
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const [metaWhen, metaType, metaExtra] = String(meta || "").split(" - ");
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal" role="dialog" aria-label="${esc2(title)}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${esc2(metaType || "Activity")}</div>
          <h2>${esc2(title)}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-project-modal-body">
        <p>${icon(iconName)} ${esc2(metaWhen || meta)}${metaExtra ? ` - ${esc2(metaExtra)}` : ""}</p>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  createIcons();
}

function openGalleryPreviewModal(item) {
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const { label, title, tone } = item;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-gallery-preview-modal" role="dialog" aria-label="${esc2(title)} preview">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${esc2(label)}</div>
          <h2>${esc2(title)}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-gallery-preview-art cg-up-gallery-card ${esc2(tone || "")}">${icon(label === "Video" ? "play" : label === "Certificate" ? "award" : label === "Slides" ? "presentation" : "image")}</div>
      <p class="cg-project-modal-body">${icon("info")} This is a preview placeholder - the full ${esc2(label).toLowerCase()} file lives in your uploaded portfolio media.</p>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  createIcons();
}

/* Generic confirm-before-delete dialog, reused by every profile section so
   the "are you sure" pattern looks and behaves identically everywhere. */
function openConfirmModal({ title, body, confirmLabel, onConfirm }) {
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-confirm-modal" role="alertdialog" aria-label="${title}">
      <div class="modal-head">
        <div><h2>${title}</h2></div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <p class="cg-project-modal-body">${body}</p>
      <div class="hero-actions compact-actions">
        <button type="button" class="btn btn-danger" data-confirm-delete>${icon("trash-2")} ${confirmLabel}</button>
        <button type="button" class="btn btn-ghost" data-close>Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-confirm-delete]", backdrop)?.addEventListener("click", () => {
    backdrop.remove();
    onConfirm?.();
  });
  createIcons();
}

/* Generic "view all" list for a profile section - shows every item (not
   just the inline cap) with the same edit/delete controls as the main
   page. Closes itself after an edit/delete since that re-renders the
   profile page underneath; reopen "View all" to keep going. */
function openProfileViewAllModal(kind, items, onChanged, options = {}) {
  // readOnly is used by the public profile, where an external viewer must be
  // able to browse every item but never edit or delete one.
  const readOnly = options.readOnly === true;
  const titles = { proof: "All portfolio proof", role: "All experience", education: "All education", gallery: "All portfolio gallery items" };
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const rowLabel = item => {
    if (kind === "proof") return [item.title, item.body];
    if (kind === "role") return [item.title, `${item.org} - ${item.date}`];
    if (kind === "education") return [item.title, item.subtitle];
    return [item.title, item.label];
  };
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-viewall-modal" role="dialog" aria-label="${titles[kind]}">
      <div class="modal-head">
        <div><h2>${titles[kind]}</h2></div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <div class="cg-viewall-list">
        ${items.map(item => {
          const [title, sub] = rowLabel(item);
          return `
            <article class="cg-viewall-row">
              <div><strong>${esc2(title)}</strong><p>${esc2(sub)}</p></div>
              ${readOnly ? "" : `<div class="cg-up-item-actions cg-viewall-actions">
                <button type="button" class="cg-up-item-edit" data-viewall-edit="${esc2(item.id)}" aria-label="Edit">${icon("pencil")}</button>
                <button type="button" class="cg-up-item-delete" data-viewall-delete="${esc2(item.id)}" aria-label="Delete">${icon("trash-2")}</button>
              </div>`}
            </article>
          `;
        }).join("")}
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qsa("[data-viewall-edit]", backdrop).forEach(btn => btn.addEventListener("click", () => {
    const item = items.find(entry => entry.id === btn.dataset.viewallEdit);
    if (!item) return;
    backdrop.remove();
    if (kind === "proof") openProofFormModal(item, onChanged);
    else if (kind === "role") openRoleFormModal(item, onChanged);
    else if (kind === "education") openEducationFormModal(item, onChanged);
    else openGalleryFormModal(item, onChanged);
  }));
  qsa("[data-viewall-delete]", backdrop).forEach(btn => btn.addEventListener("click", () => {
    const id = btn.dataset.viewallDelete;
    const meta = { proof: "proof item", role: "role", education: "education entry", gallery: "gallery item" }[kind];
    const stateKey = { proof: "portfolioProjects", role: "userRoles", education: "educationEntries", gallery: "portfolioGallery" }[kind];
    openConfirmModal({
      title: `Remove this ${meta}?`,
      body: "This can't be undone.",
      confirmLabel: "Remove",
      onConfirm: () => {
        const next = readState();
        next[stateKey] = (Array.isArray(next[stateKey]) ? next[stateKey] : []).filter(entry => entry.id !== id);
        writeState(next);
        showToast(`Removed that ${meta}.`);
        backdrop.remove();
        onChanged?.();
      }
    });
  }));
  createIcons();
}

function openGalleryFormModal(existing, onSaved) {
  const categories = ["Screenshot", "Video", "Design", "Certificate", "Slides"];
  const tones = ["mint", "aqua", "dark"];
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal cg-add-proof-modal" role="dialog" aria-label="${existing ? "Edit gallery item" : "Upload to portfolio gallery"}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Portfolio gallery</div>
          <h2>${existing ? "Edit item" : "Upload"}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <form data-upload-gallery-form>
        ${existing ? "" : `<label>File <small>(screenshot, video, slides, or certificate)</small>
          <input type="file" name="file" accept="image/*,video/*,.pdf,.ppt,.pptx" data-gallery-file>
        </label>`}
        <div class="cg-add-proof-grid-2">
          <label>Title<input name="title" required placeholder="e.g. Design system audit" value="${esc2(existing?.title || "")}"></label>
          <label>Category
            <select name="label">${categories.map(cat => `<option value="${cat}" ${existing?.label === cat ? "selected" : ""}>${cat}</option>`).join("")}</select>
          </label>
        </div>
        <div class="hero-actions compact-actions">
          <button type="submit" class="btn btn-primary">${existing ? icon("check") : icon("upload")} ${existing ? "Save changes" : "Upload"}</button>
          <button type="button" class="btn btn-ghost" data-close>Cancel</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-upload-gallery-form]", backdrop)?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const file = qs("[data-gallery-file]", backdrop)?.files?.[0];
    const title = String(form.get("title") || "").trim() || file?.name || "Untitled upload";
    const label = String(form.get("label") || "Screenshot");
    const next = readState();
    next.portfolioGallery = Array.isArray(next.portfolioGallery) ? next.portfolioGallery : [];
    if (existing) {
      const item = next.portfolioGallery.find(entry => entry.id === existing.id);
      if (item) { item.title = title; item.label = label; }
    } else {
      const tone = tones[next.portfolioGallery.length % tones.length];
      next.portfolioGallery.unshift({ id: `gallery-${Date.now()}`, label, title, tone });
    }
    writeState(next);
    showToast(existing ? "Gallery item updated." : "Added to your portfolio gallery.");
    backdrop.remove();
    onSaved?.();
  });
  createIcons();
}

function openProofFormModal(existing, onSaved) {
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const metaValue = key => existing?.meta?.find(([k]) => k === key)?.[1] || "";
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal cg-add-proof-modal" role="dialog" aria-label="${existing ? "Edit portfolio proof" : "Add portfolio proof"}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Portfolio proof</div>
          <h2>${existing ? "Edit proof" : "Add proof"}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <form data-add-proof-form>
        <label>Project title<input name="title" required placeholder="e.g. CareerGo mobile redesign" value="${esc2(existing?.title || "")}"></label>
        <label>Description<textarea name="body" required placeholder="What did you build, and why does it matter?">${esc2(existing?.body || "")}</textarea></label>
        <div class="cg-add-proof-grid-3">
          <label>Role<input name="role" placeholder="Full-stack" value="${esc2(metaValue("Role"))}"></label>
          <label>Duration<input name="duration" placeholder="3 months" value="${esc2(metaValue("Duration"))}"></label>
          <label>Team<input name="team" placeholder="2" value="${esc2(metaValue("Team"))}"></label>
        </div>
        <label>Impact<input name="impact" placeholder="e.g. 12k+ data points modeled" value="${esc2(existing?.impact || "")}"></label>
        <label>Tech / tools <small>(comma separated)</small><input name="chips" placeholder="React, Node, PostgreSQL" value="${esc2((existing?.chips || []).join(", "))}"></label>
        <div class="cg-add-proof-grid-2">
          <label>Code link<input name="code" type="url" placeholder="https://github.com/..." value="${esc2(existing?.links?.code || "")}"></label>
          <label>Demo link<input name="demo" type="url" placeholder="https://..." value="${esc2(existing?.links?.demo || "")}"></label>
        </div>
        <div class="hero-actions compact-actions">
          <button type="submit" class="btn btn-primary">${existing ? icon("check") : icon("plus")} ${existing ? "Save changes" : "Add to profile"}</button>
          <button type="button" class="btn btn-ghost" data-close>Cancel</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-add-proof-form]", backdrop)?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") || "").trim();
    const body = String(form.get("body") || "").trim();
    if (!title || !body) return showToast("Add a title and description first.", "note");
    const meta = [
      ["Role", String(form.get("role") || "").trim()],
      ["Duration", String(form.get("duration") || "").trim()],
      ["Team", String(form.get("team") || "").trim()]
    ].filter(([, value]) => value);
    const chips = String(form.get("chips") || "").split(",").map(item => item.trim()).filter(Boolean);
    const code = String(form.get("code") || "").trim();
    const demo = String(form.get("demo") || "").trim();
    const impact = String(form.get("impact") || "").trim() || "Added by you";
    const next = readState();
    next.portfolioProjects = Array.isArray(next.portfolioProjects) ? next.portfolioProjects : [];
    if (existing) {
      const item = next.portfolioProjects.find(entry => entry.id === existing.id);
      if (item) Object.assign(item, { title, body, meta, chips, impact, links: { code, demo } });
    } else {
      next.portfolioProjects.unshift({
        id: `user-project-${Date.now()}`,
        title,
        label: "New",
        verified: false,
        body,
        meta,
        impact,
        chips,
        tone: "",
        links: { code, demo }
      });
    }
    writeState(next);
    showToast(existing ? "Proof updated." : "Proof added to your profile.");
    backdrop.remove();
    onSaved?.();
  });
  createIcons();
}

function openRoleFormModal(existing, onSaved) {
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal cg-add-proof-modal" role="dialog" aria-label="${existing ? "Edit role" : "Add role"}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Experience</div>
          <h2>${existing ? "Edit role" : "Add role"}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <form data-add-role-form>
        <div class="cg-add-proof-grid-2">
          <label>Job title<input name="title" required placeholder="e.g. Data Analyst Intern" value="${esc2(existing?.title || "")}"></label>
          <label>Company<input name="org" required placeholder="e.g. Grab" value="${esc2(existing?.org || "")}"></label>
        </div>
        <div class="cg-add-proof-grid-3">
          <label>Location<input name="location" placeholder="e.g. Petaling Jaya" value="${esc2(existing?.location || "")}"></label>
          <label>Start date<input name="startDate" required placeholder="e.g. Jan 2023" value="${esc2(existing?.startDate || "")}"></label>
          <label>End date <small>(blank = Present)</small><input name="endDate" placeholder="Present" value="${esc2(existing?.endDate || "")}"></label>
        </div>
        <label>What you did <small>(one bullet per line - start with an action verb, include a number where you have one)</small>
          <textarea name="bullets" rows="5" required placeholder="Reduced manual weekly reporting time by 40% by automating data pulls&#10;Built a churn dashboard surfacing the top 3 drop-off causes">${esc2((existing?.bullets || []).join("\n"))}</textarea></label>
        <label>Skills <small>(comma separated)</small><input name="chips" placeholder="SQL, Python, Tableau" value="${esc2((existing?.chips || []).join(", "))}"></label>
        <div class="hero-actions compact-actions">
          <button type="submit" class="btn btn-primary">${existing ? icon("check") : icon("plus")} ${existing ? "Save changes" : "Add to profile"}</button>
          <button type="button" class="btn btn-ghost" data-close>Cancel</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-add-role-form]", backdrop)?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") || "").trim();
    const org = String(form.get("org") || "").trim();
    const location = String(form.get("location") || "").trim();
    const startDate = String(form.get("startDate") || "").trim();
    const endDate = String(form.get("endDate") || "").trim() || "Present";
    const bullets = String(form.get("bullets") || "")
      .split("\n").map(line => line.trim().replace(/^[-•*]\s*/, "")).filter(Boolean).slice(0, 6);
    if (!title || !org || !startDate || !bullets.length) {
      return showToast("Add a job title, company, start date, and at least one bullet.", "note");
    }
    const initials = org.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "?";
    const chips = String(form.get("chips") || "").split(",").map(item => item.trim()).filter(Boolean);
    // `date` and `body` are derived so the older profile cards and the role
    // detail modal (which still read them) keep rendering correctly.
    const date = [startDate, endDate].filter(Boolean).join(" - ");
    const body = bullets.join(" ");
    const fields = { org, initials, title, location, startDate, endDate, bullets, date, body, chips };
    const next = readState();
    next.userRoles = Array.isArray(next.userRoles) ? next.userRoles : [];
    if (existing) {
      const item = next.userRoles.find(entry => entry.id === existing.id);
      if (item) Object.assign(item, fields);
    } else {
      next.userRoles.unshift({ id: `role-${Date.now()}`, ...fields });
    }
    writeState(next);
    showToast(existing ? "Role updated." : "Role added to your profile.");
    backdrop.remove();
    onSaved?.();
  });
  createIcons();
}

function openEducationFormModal(existing, onSaved) {
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const iconOptions = ["graduation-cap", "brain", "book-open", "award"];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal cg-add-proof-modal" role="dialog" aria-label="${existing ? "Edit education" : "Add education"}">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Education</div>
          <h2>${existing ? "Edit entry" : "Add education"}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <form data-add-education-form>
        <div class="cg-add-proof-grid-2">
          <label>Institution<input name="title" required placeholder="e.g. Universiti Malaya" value="${esc2(existing?.title || "")}"></label>
          <label>Degree / programme<input name="subtitle" required placeholder="e.g. Bachelor of Business Administration" value="${esc2(existing?.subtitle || "")}"></label>
        </div>
        <div class="cg-add-proof-grid-3">
          <label>Location<input name="location" placeholder="e.g. Kuala Lumpur" value="${esc2(existing?.location || "")}"></label>
          <label>Years<input name="years" placeholder="2016 - 2020" value="${esc2(existing?.years || "")}"></label>
          <label>Graduation<input name="graduationDate" placeholder="e.g. Graduated 2020" value="${esc2(existing?.graduationDate || "")}"></label>
        </div>
        <div class="cg-add-proof-grid-2">
          <label>Score / status<input name="score" placeholder="3.86 / 4.00" value="${esc2(existing?.score || "")}"></label>
          <label>Icon
            <select name="icon">${iconOptions.map(name => `<option value="${name}" ${existing?.icon === name ? "selected" : ""}>${name}</option>`).join("")}</select>
          </label>
        </div>
        <label>Highlights <small>(one per line)</small><textarea name="bullets" placeholder="Dean's List - 4 semesters">${esc2((existing?.bullets || []).join("\n"))}</textarea></label>
        <div class="hero-actions compact-actions">
          <button type="submit" class="btn btn-primary">${existing ? icon("check") : icon("plus")} ${existing ? "Save changes" : "Add to profile"}</button>
          <button type="button" class="btn btn-ghost" data-close>Cancel</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  qs("[data-add-education-form]", backdrop)?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") || "").trim();
    const subtitle = String(form.get("subtitle") || "").trim();
    if (!title || !subtitle) return showToast("Add an institution and degree/programme first.", "note");
    const years = String(form.get("years") || "").trim();
    const location = String(form.get("location") || "").trim();
    // Fall back to the tail of the years range so the resume always has a
    // graduation date to print (e.g. "2016 - 2020" -> "2020").
    const graduationDate = String(form.get("graduationDate") || "").trim() || splitDateRange(years)[1] || years;
    const score = String(form.get("score") || "").trim();
    const iconName = String(form.get("icon") || "graduation-cap");
    const bullets = String(form.get("bullets") || "").split("\n").map(line => line.trim().replace(/^[-•*]\s*/, "")).filter(Boolean);
    const next = readState();
    next.educationEntries = Array.isArray(next.educationEntries) ? next.educationEntries : [];
    const fields = { title, subtitle, location, years, graduationDate, score, icon: iconName, bullets };
    if (existing) {
      const item = next.educationEntries.find(entry => entry.id === existing.id);
      if (item) Object.assign(item, fields);
    } else {
      next.educationEntries.unshift({ id: `edu-${Date.now()}`, ...fields });
    }
    writeState(next);
    showToast(existing ? "Education entry updated." : "Education entry added.");
    backdrop.remove();
    onSaved?.();
  });
  createIcons();
}

function openProjectCaseStudyModal(project) {
  const esc2 = value => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop cg-project-backdrop";
  backdrop.innerHTML = `
    <div class="modal card cg-project-modal" role="dialog" aria-label="${esc2(project.title)} case study">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${project.verified ? "Vera verified case study" : "Case study"}</div>
          <h2>${esc2(project.title)}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close aria-label="Close">${icon("x")}</button>
      </div>
      <p class="cg-project-modal-body">${esc2(project.body)}</p>
      <dl class="cg-project-modal-meta">${project.meta.map(([key, value]) => `<div><dt>${esc2(key)}</dt><dd>${esc2(value)}</dd></div>`).join("")}</dl>
      <div class="cg-note">${icon("sparkles")} Impact - ${esc2(project.impact)}</div>
      <div class="cg-up-chip-row">${project.chips.map(c => `<span class="cg-up-chip">${esc2(c)}</span>`).join("")}</div>
      <div class="hero-actions compact-actions">
        ${project.links.code ? `<a class="btn btn-primary" href="${esc2(project.links.code)}" target="_blank" rel="noopener">${icon("github")} View code</a>` : ""}
        ${project.links.demo ? `<a class="btn ${project.links.code ? "btn-ghost" : "btn-primary"}" href="${esc2(project.links.demo)}" target="_blank" rel="noopener">${icon("external-link")} Open demo</a>` : ""}
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) backdrop.remove();
  });
  createIcons();
}

/*
 * public-profile.html — the OUTSIDE view of the logged-in user's profile.
 *
 * This is deliberately a different file/route from profile.html because the
 * content and the available actions genuinely differ for an external viewer:
 * profile.html is the owner's editable workspace (Generate resume, Edit career
 * data, Settings, per-item edit/delete, readiness gaps), whereas this page is
 * what an employer or recruiter sees when the profile is shared with them.
 *
 * It intentionally reuses profile.html's `cg-up-*` markup and stylesheet
 * (profile-final.css) so the two never drift into looking like two different
 * products — the difference is WHICH sections and actions render, not the
 * visual language.
 *
 * Everything private stays out: coaching notes (profile.coach.*), resume
 * readiness gaps, privacy toggles, account settings, and all editing affordances.
 */
function renderPublicProfile() {
  const root = qs("[data-public-profile]");
  if (!root) return;
  if (!requireAccount(root, "preview your public profile")) return;

  const state = readState();
  const profile = normalizeProfile(state.profile);
  const name = profile.personal.fullName || state.session.name || getUserName(state);
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "CG";
  const firstName = name.split(/\s+/).filter(Boolean)[0] || name;
  const locationLabel = [profile.personal.cityState, profile.personal.country].filter(Boolean).join(", ") || "Kuala Lumpur, Malaysia";
  const targetRole = profile.preferences.roles[0] || profile.background.currentRole || getTargetLabel(profile);
  const school = profile.background.school || "Universiti Malaya";
  const workMode = profile.preferences.workMode || "Hybrid";
  const esc = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const chip = text => `<span class="cg-up-chip">${esc(text)}</span>`;
  const skillBar = (label, value) => `
    <div class="cg-up-skill-row">
      <div><span>${esc(label)}</span><strong>${value}</strong></div>
      <i><b style="width:${value}%"></b></i>
    </div>
  `;
  const PROOF_CAP = 4;
  const ROLE_CAP = 3;
  const EDU_CAP = 3;
  const GALLERY_CAP = 6;

  // Seed the same showcase content profile.html seeds, so an employer never
  // lands on a thinner page than the owner sees. Nothing else here writes state.
  if (ensurePortfolioShowcase(state)) writeState(state);
  const projects = Array.isArray(state.portfolioProjects) ? state.portfolioProjects : [];
  const roles = Array.isArray(state.userRoles) ? state.userRoles : [];
  const educationEntries = Array.isArray(state.educationEntries) ? state.educationEntries : [];
  const gallery = Array.isArray(state.portfolioGallery) ? state.portfolioGallery : [];
  const activities = profileActivityFeed(profile, projects, roles, educationEntries);
  const whyHire = profileWhyHire(profile, projects, roles, targetRole);
  const skillPanels = profileSkillPanels(profile);

  const discoverable = profile.privacy.allowEmployerDiscovery;
  const visibilityLabel = profile.privacy.profileVisibility || "Private";
  const publicUrl = `careergo.my/${(name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "member")}`;
  const avatarUrl = profile.personal.avatarDataUrl || "";
  const emptyNote = text => `<p class="cg-pp-empty">${icon("circle-dashed")} ${esc(text)}</p>`;

  root.innerHTML = appShell("", `
    <section class="cg-user-profile-v2 cg-pp">
      <div class="cg-pp-bar">
        <div class="cg-pp-bar-copy">
          <span class="cg-pp-bar-tag">${icon("eye")} Public view</span>
          <p>This is exactly what an employer or recruiter sees. Your coaching notes, readiness gaps, and account settings stay private.</p>
        </div>
        <div class="cg-pp-bar-actions">
          <span class="cg-pp-visibility ${discoverable ? "on" : "off"}" title="Profile visibility: ${esc(visibilityLabel)}">${icon(discoverable ? "globe" : "lock")} ${discoverable ? "Live to employers" : "Not live yet"}</span>
          <button type="button" class="cg-pp-bar-btn" data-copy-link="${esc(publicUrl)}">${icon("link-2")} Copy link</button>
          <a class="cg-pp-bar-btn" href="profile.html">${icon("arrow-left")} Back to my profile</a>
        </div>
      </div>

      ${discoverable ? "" : `
      <div class="cg-pp-hidden-note">
        ${icon("lock")}
        <div>
          <strong>Employer discovery is off, so this page is not live yet.</strong>
          <p>You can still preview it. Turn on employer discovery in <a href="settings.html">Settings</a> to let matching employers find this profile.</p>
        </div>
      </div>`}

      <header class="cg-up-hero">
        <div class="cg-up-cover">
          <div class="cg-up-avatar" ${avatarUrl ? `style="background-image:url('${esc(avatarUrl)}');background-size:cover;background-position:center"` : ""}>${avatarUrl ? "" : initials}</div>
        </div>
        <div class="cg-up-identity">
          <div>
            <span class="cg-up-kicker">Vera verified profile</span>
            <h1>${esc(name)}</h1>
            <p>${esc(targetRole)} - ${esc(locationLabel)}</p>
            <div class="cg-up-meta">
              <span>${icon("graduation-cap")} ${esc(school)}</span>
              <span>${icon("map-pin")} ${esc(locationLabel)}</span>
              <span>${icon("briefcase-business")} Open to ${esc(workMode.toLowerCase())} roles</span>
            </div>
          </div>
          <div class="cg-up-actions">
            <button class="cg-up-primary" type="button" data-employer-action="Request intro">${icon("send")} Request intro</button>
            <button class="cg-up-secondary" type="button" data-employer-action="Message">${icon("mail")} Message</button>
            <button class="cg-up-secondary" type="button" data-employer-action="Save candidate">${icon("bookmark")} Save candidate</button>
            <button class="cg-up-secondary" type="button" data-copy-link="${esc(publicUrl)}">${icon("link-2")} Share</button>
          </div>
        </div>
        <div class="cg-up-stats">
          ${[
            ["Portfolio readiness", "92%", "Recommended hire"],
            ["Career fit", "88%", ""],
            ["Profile strength", "94%", "Employer-ready"],
            ["Followers", "1,284", ""]
          ].map(([label, value, badge]) => `<article><span>${esc(label)}</span><div class="cg-up-stat-value"><strong>${esc(value)}</strong>${badge ? `<b class="cg-up-stat-badge">${esc(badge)}</b>` : ""}</div></article>`).join("")}
        </div>
      </header>

      <div class="cg-up-layout">
        <main class="cg-up-main">
          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Portfolio proof</h2><p class="cg-up-section-caption">Proof employers can scan in seconds.</p></div>
            </div>
            ${projects.length ? `
            <div class="cg-up-project-grid">
              ${projects.slice(0, PROOF_CAP).map(project => `
                <article class="cg-up-project-card">
                  <div class="cg-up-project-art ${project.tone}">
                    <div>
                      <span>${esc(project.label)}</span>
                      ${project.verified ? `<span>${icon("sparkles")} Vera verified</span>` : ""}
                    </div>
                    <h3>${esc(project.title)}</h3>
                    <a href="#" data-project-case-study="${esc(project.id)}" aria-label="Open project">${icon("arrow-up-right")}</a>
                  </div>
                  <div class="cg-up-project-body">
                    <p>${esc(project.body)}</p>
                    <dl>${(project.meta || []).map(([key, value]) => `<div><dt>${esc(key)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>
                    <strong>Impact - ${esc(project.impact)}</strong>
                    <div class="cg-up-chip-row">${(project.chips || []).map(chip).join("")}</div>
                    <footer>${project.links?.code ? `<a href="${esc(project.links.code)}" target="_blank" rel="noopener">${icon("github")} Code</a>` : ""}${project.links?.demo ? `<a href="${esc(project.links.demo)}" target="_blank" rel="noopener">${icon("external-link")} Demo</a>` : ""}<a href="#" data-project-case-study="${esc(project.id)}">${icon("file-text")} Case study</a><a href="#" data-project-case-study="${esc(project.id)}">Read ${icon("arrow-right")}</a></footer>
                  </div>
                </article>
              `).join("")}
            </div>
            ${projects.length > PROOF_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="proof">View all ${projects.length} proof items ${icon("arrow-right")}</button>` : ""}
            ` : emptyNote("No public proof published yet.")}
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Experience</h2><p class="cg-up-section-caption">Roles & impact</p></div>
            </div>
            ${roles.length ? `
            <div class="cg-up-role-list">
              ${roles.slice(0, ROLE_CAP).map(role => `
                <article class="cg-up-role-card">
                  <div class="cg-up-logo-tile">${esc(role.initials)}</div>
                  <div>
                    <h3>${esc(role.title)}</h3>
                    <p>${esc(role.org)} - ${esc(role.date)}</p>
                    <strong>${esc(role.body)}</strong>
                    <div class="cg-up-chip-row">${(role.chips || []).map(chip).join("")}</div>
                  </div>
                  <a href="#" aria-label="Open role" data-role-detail="${esc(role.id)}">${icon("arrow-up-right")}</a>
                </article>
              `).join("")}
            </div>
            ${roles.length > ROLE_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="role">View all ${roles.length} roles ${icon("arrow-right")}</button>` : ""}
            ` : emptyNote("No experience published yet.")}
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Education</h2><p class="cg-up-section-caption">Learning path</p></div>
            </div>
            ${educationEntries.length ? `
            <div class="cg-up-education-grid">
              ${educationEntries.slice(0, EDU_CAP).map(entry => `
                <article class="cg-up-edu-card">
                  <span>${icon(entry.icon || "graduation-cap")}</span>
                  <div>
                    <h3>${esc(entry.title)}</h3>
                    <p>${esc(entry.subtitle)}</p>
                    <small>${esc(educationMetaLine(entry))}</small>
                    <ul>${(entry.bullets || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul>
                  </div>
                </article>
              `).join("")}
            </div>
            ${educationEntries.length > EDU_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="education">View all ${educationEntries.length} entries ${icon("arrow-right")}</button>` : ""}
            ` : emptyNote("No education published yet.")}
          </section>

          ${gallery.length ? `
          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><h2>Portfolio gallery</h2><p class="cg-up-section-caption">Visual work</p></div>
            </div>
            <div class="cg-up-gallery">
              ${gallery.slice(0, GALLERY_CAP).map(item => `
                <article class="cg-up-gallery-card ${item.tone}">
                  <span>${esc(item.label)}</span>
                  ${item.label === "Video" ? `<button type="button" aria-label="Play video" data-gallery-preview="${esc(item.id)}">${icon("play")}</button>` : ""}
                  <strong>${esc(item.title)}</strong>
                  <a href="#" aria-label="Open ${esc(item.title)}" data-gallery-preview="${esc(item.id)}">${icon("arrow-up-right")}</a>
                </article>
              `).join("")}
            </div>
            ${gallery.length > GALLERY_CAP ? `<button type="button" class="cg-up-view-all" data-view-all="gallery">View all ${gallery.length} items ${icon("arrow-right")}</button>` : ""}
          </section>` : ""}

          <section class="cg-up-section">
            <div class="cg-up-section-head"><div><h2>Activity</h2><p class="cg-up-section-caption">Recent professional activity</p></div></div>
            <article class="cg-up-activity-card">
              ${activities.map(([iconName, title, meta], index) => `
                <a href="#" data-activity-detail="${index}">
                  <span class="${index === 0 ? "active" : ""}">${icon(iconName)}</span>
                  <div><strong>${esc(title)}</strong><small>${esc(meta)}</small></div>
                  ${icon("arrow-up-right")}
                </a>
              `).join("")}
            </article>
          </section>
        </main>

        <aside class="cg-up-sidebar">
          <section class="cg-up-hire-card">
            <h2>Why hire ${esc(firstName)}</h2>
            <div>
              <span>${icon("trending-up")} Recommended hire</span>
              <strong>${whyHire.score} <small>/ 100 match for ${esc(targetRole)}</small></strong>
              ${whyHire.points.map(point => `<p>${icon("check-circle-2")} ${esc(point)}</p>`).join("")}
            </div>
          </section>

          <section class="cg-up-side-panel cg-pp-contact">
            <h2>Contact ${esc(firstName)}</h2>
            <p class="cg-up-section-caption">Typically replies within 2 days</p>
            <button class="cg-pp-contact-primary" type="button" data-employer-action="Request intro">${icon("send")} Request intro</button>
            <button class="cg-pp-contact-secondary" type="button" data-employer-action="Message">${icon("mail")} Message</button>
            <ul class="cg-pp-contact-facts">
              <li>${icon("map-pin")} ${esc(locationLabel)}</li>
              <li>${icon("briefcase-business")} Open to ${esc(workMode.toLowerCase())} roles</li>
              <li>${icon("target")} Targeting ${esc(targetRole)}</li>
            </ul>
            ${[["portfolioLinks", "folder-open", "Portfolio"], ["linkedin", "linkedin", "LinkedIn"], ["github", "github", "GitHub"], ["website", "globe", "Website"]]
              .filter(([key]) => profile.skills[key])
              .map(([key, ic, label]) => `<a class="cg-pp-contact-link" href="${esc(profile.skills[key])}" target="_blank" rel="noopener">${icon(ic)} ${label} ${icon("arrow-up-right")}</a>`)
              .join("")}
          </section>

          <section class="cg-up-side-panel cg-up-network">
            <h2>Network</h2>
            <p class="cg-up-section-caption">Professional circle</p>
            <div>
              <p><span>Followers</span><strong>1,284</strong></p>
              <p><span>Following</span><strong>312</strong></p>
              <p><span>Mentors</span><strong>6</strong></p>
              <p><span>Companies followed</span><strong>24</strong></p>
            </div>
            <footer><b>AI</b><b>MK</b><b>JT</b><b>SR</b><b>NH</b><em>+32 mutual</em></footer>
          </section>

          ${skillPanels.map(panel => `
          <section class="cg-up-side-panel">
            <h2>Skill signal</h2>
            <p class="cg-up-section-caption">${esc(panel.caption)}</p>
            ${panel.rows.map(([label, value]) => skillBar(label, value)).join("")}
          </section>
          `).join("")}
        </aside>
      </div>

      <footer class="cg-pp-foot">
        ${icon("shield-check")}
        <p>Verified by Vera - CareerGo checks that every proof item on this page links to real, published work. Private coaching notes and readiness analysis are never shown here.</p>
      </footer>
    </section>
  `);

  // External-viewer actions are demonstrative in this MVP: there is no employer
  // account signed in here, so say so plainly rather than faking a flow.
  qsa("[data-employer-action]", root).forEach(btn => btn.addEventListener("click", () => {
    showToast(`"${btn.dataset.employerAction}" is what an employer sees here - it is inactive in your own preview.`, "info");
  }));
  qsa("[data-copy-link]", root).forEach(btn => btn.addEventListener("click", () => {
    const url = btn.dataset.copyLink;
    navigator.clipboard?.writeText(`https://${url}`).then(
      () => showToast("Public profile link copied."),
      () => showToast(`Your public link is ${url}`, "info")
    );
  }));
  qsa("[data-project-case-study]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const project = projects.find(item => item.id === link.dataset.projectCaseStudy);
    if (project) openProjectCaseStudyModal(project);
  }));
  qsa("[data-gallery-preview]", root).forEach(trigger => trigger.addEventListener("click", event => {
    event.preventDefault();
    const match = gallery.find(item => item.id === trigger.dataset.galleryPreview);
    if (match) openGalleryPreviewModal(match);
  }));
  qsa("[data-role-detail]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const role = roles.find(item => item.id === link.dataset.roleDetail);
    if (role) openExperienceRoleModal(role);
  }));
  qsa("[data-activity-detail]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const activity = activities[Number(link.dataset.activityDetail)];
    if (activity) openActivityDetailModal(activity);
  }));
  qs('[data-view-all="proof"]', root)?.addEventListener("click", () => openProfileViewAllModal("proof", projects, null, { readOnly: true }));
  qs('[data-view-all="role"]', root)?.addEventListener("click", () => openProfileViewAllModal("role", roles, null, { readOnly: true }));
  qs('[data-view-all="education"]', root)?.addEventListener("click", () => openProfileViewAllModal("education", educationEntries, null, { readOnly: true }));
  qs('[data-view-all="gallery"]', root)?.addEventListener("click", () => openProfileViewAllModal("gallery", gallery, null, { readOnly: true }));

  createIcons();
}

/* What each profile-visibility option actually means, in plain words. Shown
 * live under the select so the choice isn't three unexplained labels — and so
 * the page can state the one rule that ties visibility to employer discovery. */
const SETTINGS_VISIBILITY = {
  "Private": {
    icon: "lock",
    body: "Only you can see your profile. Employers cannot find you in search, and employer discovery stays off."
  },
  "Visible to employers": {
    icon: "globe",
    body: "Employers hiring for your target roles can find your public profile and contact you."
  },
  "Visible for advisory opportunities": {
    icon: "users",
    body: "Mentors and advisory requests can reach you. Hiring teams cannot see your profile."
  }
};

function renderSettings() {
  const root = qs("[data-settings]");
  if (!root) return;
  if (!requireAccount(root, "manage account and privacy settings")) return;
  const state = readState();
  const profile = normalizeProfile(state.profile);
  const esc = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const name = getUserName(state);
  const email = state.session.email || profile.personal.email || "";
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "CG";
  const visibility = profile.privacy.profileVisibility || "Private";
  const isPrivate = visibility === "Private";
  const notifications = profile.notifications;

  const option = (value, current) => `<option value="${esc(value)}" ${value === current ? "selected" : ""}>${esc(value)}</option>`;
  const toggle = (fieldName, title, body, checked, extra = "") => `
    <label class="cg-set-toggle${extra ? " is-locked" : ""}">
      <span><strong>${esc(title)}</strong><small>${esc(body)}</small>${extra ? `<b class="cg-set-locked-note">${icon("lock")} ${esc(extra)}</b>` : ""}</span>
      <input name="${esc(fieldName)}" type="checkbox" ${checked ? "checked" : ""} ${extra ? "disabled" : ""}>
      <i class="cg-set-switch" aria-hidden="true"></i>
    </label>
  `;
  const sections = [
    { id: "visibility", icon: "shield", kicker: "Privacy", title: "Profile visibility" },
    { id: "notifications", icon: "bell", kicker: "Alerts", title: "Notifications" },
    { id: "vera", icon: "sparkles", kicker: "Vera", title: "Coach preferences" },
    { id: "account", icon: "user-round", kicker: "Account", title: "Account and data" }
  ];
  const cardHead = section => `
    <header>
      <span>${icon(section.icon)}</span>
      <div><small>${section.kicker}</small><h2>${section.title}</h2></div>
    </header>
  `;

  root.innerHTML = appShell("", `
    <section class="cg-set">
      <header class="cg-set-hero">
        <div>
          <span class="cg-section-kicker">${icon("settings")} Settings</span>
          <h1>Account, privacy, and Vera.</h1>
          <p>Control what employers can see, what CareerGo sends you, and how Vera coaches.</p>
        </div>
        <a class="btn btn-ghost" href="profile.html">${icon("user-round")} View profile</a>
      </header>

      <form class="cg-set-form" id="settings-form" data-settings-form>
        <aside class="cg-set-rail">
          <div class="cg-set-identity">
            <div class="cg-set-avatar">${esc(initials)}</div>
            <div class="cg-set-identity-copy">
              <strong>${esc(name)}</strong>
              <small>${esc(email || "No email on file")}</small>
            </div>
            <ul>
              <li>${icon("map-pin")} ${esc(profile.personal.cityState || "Location not set")}</li>
              <li>${icon("briefcase-business")} ${esc(getTargetLabel(profile))}</li>
            </ul>
            <a href="edit-career-data.html">${icon("pencil")} Edit career data</a>
          </div>

          <nav class="cg-set-nav" aria-label="Settings sections">
            ${sections.map(section => `
              <a href="#set-${section.id}" data-set-nav="${section.id}">
                <i>${icon(section.icon)}</i><span>${section.title}</span>
              </a>
            `).join("")}
          </nav>
        </aside>

        <div class="cg-set-stack">
          <section class="cg-set-card" id="set-visibility" data-set-section="visibility">
            ${cardHead(sections[0])}
            <label class="cg-set-field">Who can see your profile
              <select name="profileVisibility" data-visibility-select>
                ${Object.keys(SETTINGS_VISIBILITY).map(value => option(value, visibility)).join("")}
              </select>
            </label>
            <p class="cg-set-explain" data-visibility-explain>
              ${icon(SETTINGS_VISIBILITY[visibility]?.icon || "lock")}
              <span>${esc(SETTINGS_VISIBILITY[visibility]?.body || SETTINGS_VISIBILITY.Private.body)}</span>
            </p>
            <div class="cg-set-toggle-group" data-discovery-group>
              ${toggle("allowEmployerDiscovery", "Allow employer discovery", "Let matching employers find your public proof.", profile.privacy.allowEmployerDiscovery && !isPrivate, isPrivate ? "Unavailable while your profile is Private" : "")}
            </div>
            <a class="cg-set-inline-link" href="public-profile.html">${icon("eye")} See exactly what an employer sees ${icon("arrow-right")}</a>
          </section>

          <section class="cg-set-card" id="set-notifications" data-set-section="notifications">
            ${cardHead(sections[1])}
            <div class="cg-set-toggle-group">
              ${toggle("weeklyDigest", "Weekly digest", "One Monday summary of your progress and new matches.", notifications.weeklyDigest)}
              ${toggle("interviewReminders", "Interview reminders", "Nudges before scheduled interviews and mock sessions.", notifications.interviewReminders)}
              ${toggle("roadmapNudges", "Roadmap nudges", "Reminders when a growth move or milestone is due.", notifications.roadmapNudges)}
              ${toggle("employerActivity", "Employer activity", "When an employer views your profile or moves your application.", notifications.employerActivity)}
              ${toggle("productUpdates", "Product updates", "Occasional news about new CareerGo features.", notifications.productUpdates)}
            </div>
            <p class="cg-set-note">${icon("info")} These control the bell in your top bar. <a href="notifications.html">Open notifications</a></p>
          </section>

          <section class="cg-set-card" id="set-vera" data-set-section="vera">
            ${cardHead(sections[2])}
            <div class="cg-set-grid">
              <label class="cg-set-field">Explanation style
                <select name="explanationStyle">
                  ${["Detailed explanations", "Simple guidance", "Direct missions"].map(value => option(value, profile.coach.explanationStyle || "Simple guidance")).join("")}
                </select>
              </label>
              <label class="cg-set-field">Mission frequency
                <select name="missionFrequency">
                  ${["Weekly", "Twice a week", "Monthly"].map(value => option(value, profile.coach.missionFrequency || "Weekly")).join("")}
                </select>
              </label>
              <label class="cg-set-field cg-set-wide">How Vera should support you
                <textarea name="supportStyle" rows="2" placeholder="Structured steps, honest trade-offs, confidence support...">${esc(profile.coach.supportStyle)}</textarea>
              </label>
            </div>
            <div class="cg-set-toggle-group">
              ${toggle("allowCoachMemory", "Allow Vera memory", "Use your recent actions to personalize coaching.", profile.privacy.allowCoachMemory)}
            </div>
          </section>

          <section class="cg-set-card" id="set-account" data-set-section="account">
            ${cardHead(sections[3])}
            <div class="cg-set-rows">
              <div class="cg-set-row">
                <div><strong>Password</strong><small>Changed from the security section of your career data.</small></div>
                <a class="cg-set-row-btn" href="edit-career-data.html#sec-security">${icon("shield-check")} Change password</a>
              </div>
              <div class="cg-set-row">
                <div><strong>Sign out</strong><small>End this session on this device.</small></div>
                <button class="cg-set-row-btn" type="button" data-logout>${icon("log-out")} Sign out</button>
              </div>
              <div class="cg-set-row cg-set-row-danger">
                <div><strong>Clear local demo data</strong><small>Wipes this browser's saved CareerGo state so you can sign up again with the same email.</small></div>
                <button class="cg-set-row-btn danger" type="button" data-clear-local-data>${icon("trash-2")} Clear data</button>
              </div>
            </div>
          </section>

          <footer class="cg-set-savebar" data-savebar>
            <span data-save-status>${icon("shield-check")} Saved settings apply across CareerGo immediately.</span>
            <div>
              <a class="btn btn-ghost" href="dashboard.html">Cancel</a>
              <button class="btn btn-primary" type="submit">${icon("save")} Save settings</button>
            </div>
          </footer>
        </div>
      </form>
    </section>
  `);

  const form = qs("[data-settings-form]", root);

  // Visibility drives employer discovery: "Private" makes discovery meaningless,
  // so the toggle is switched off and locked rather than left contradicting it.
  const visibilitySelect = qs("[data-visibility-select]", root);
  // Remembered across a Private round-trip: switching to Private and back must
  // not silently discard the user's discovery preference.
  let discoveryMemory = profile.privacy.allowEmployerDiscovery;
  let discoveryLocked = isPrivate;
  const syncVisibility = () => {
    const chosen = visibilitySelect?.value || "Private";
    const meta = SETTINGS_VISIBILITY[chosen] || SETTINGS_VISIBILITY.Private;
    const explain = qs("[data-visibility-explain]", root);
    if (explain) {
      explain.innerHTML = `${icon(meta.icon)}<span>${esc(meta.body)}</span>`;
    }
    const group = qs("[data-discovery-group]", root);
    const input = qs('input[name="allowEmployerDiscovery"]', root);
    const locked = chosen === "Private";
    if (input) {
      if (locked && !discoveryLocked) discoveryMemory = input.checked;
      if (!locked && discoveryLocked) input.checked = discoveryMemory;
      if (locked) input.checked = false;
      input.disabled = locked;
    }
    discoveryLocked = locked;
    qs(".cg-set-toggle", group)?.classList.toggle("is-locked", locked);
    const note = qs(".cg-set-locked-note", group);
    if (locked && !note) {
      const holder = qs(".cg-set-toggle span", group);
      const tag = document.createElement("b");
      tag.className = "cg-set-locked-note";
      tag.innerHTML = `${icon("lock")} Unavailable while your profile is Private`;
      holder?.appendChild(tag);
    } else if (!locked && note) {
      note.remove();
    }
    createIcons();
  };
  visibilitySelect?.addEventListener("change", syncVisibility);

  const status = qs("[data-save-status]", root);
  const savebar = qs("[data-savebar]", root);
  const markDirty = () => {
    if (savebar?.dataset.dirty === "true") return;
    if (savebar) savebar.dataset.dirty = "true";
    if (status) status.innerHTML = `${icon("circle-dot")} Unsaved changes.`;
    createIcons();
  };
  form?.addEventListener("input", markDirty);
  form?.addEventListener("change", markDirty);

  const navLinks = qsa("[data-set-nav]", root);
  let navLockUntil = 0;
  navLinks.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const target = qs(`#set-${link.dataset.setNav}`, root);
    if (!target) return;
    navLinks.forEach(other => other.classList.toggle("active", other === link));
    navLockUntil = Date.now() + 900;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
  }));
  const cards = qsa("[data-set-section]", root);
  if (cards.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      // Ignore the observer while a nav click's smooth scroll is still running.
      // Without this the sections passing through the band overwrite the clicked
      // link, and a bottom section on a short page can never reach the band at
      // all - so clicking the last item always left the previous one highlighted.
      if (Date.now() < navLockUntil) return;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.dataset.setSection;
        navLinks.forEach(link => link.classList.toggle("active", link.dataset.setNav === id));
      });
    }, { rootMargin: "-120px 0px -65% 0px", threshold: 0 });
    cards.forEach(card => spy.observe(card));
  }

  // One form, one save — privacy, notifications and Vera used to be two
  // separate cards with two separate submit buttons.
  form?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = readState();
    const chosenVisibility = String(data.get("profileVisibility") || "Private");
    next.profile.privacy.profileVisibility = chosenVisibility;
    next.profile.privacy.allowEmployerDiscovery = chosenVisibility !== "Private" && Boolean(data.get("allowEmployerDiscovery"));
    next.profile.privacy.allowCoachMemory = Boolean(data.get("allowCoachMemory"));
    next.profile.notifications = {
      weeklyDigest: Boolean(data.get("weeklyDigest")),
      interviewReminders: Boolean(data.get("interviewReminders")),
      roadmapNudges: Boolean(data.get("roadmapNudges")),
      employerActivity: Boolean(data.get("employerActivity")),
      productUpdates: Boolean(data.get("productUpdates"))
    };
    next.profile.coach.supportStyle = String(data.get("supportStyle") || "");
    next.profile.coach.explanationStyle = String(data.get("explanationStyle") || next.profile.coach.explanationStyle);
    next.profile.coach.missionFrequency = String(data.get("missionFrequency") || next.profile.coach.missionFrequency);
    next.profile.updatedAt = nowStamp();
    syncCurrentUser(next);
    writeState(next);
    showToast("Settings saved.");
    renderSettings();
  });

  qs("[data-clear-local-data]", root)?.addEventListener("click", () => {
    openConfirmModal({
      title: "Clear local demo data?",
      body: "This wipes this browser's saved CareerGo state - profile, roles, applications and settings - and signs you out. It cannot be undone.",
      confirmLabel: "Clear data",
      onConfirm: () => {
        localStorage.removeItem(STORE_KEY);
        showToast("Local demo data cleared.");
        setTimeout(() => { location.href = "index.html"; }, 600);
      }
    });
  });

  // Wired locally rather than via bindGlobalActions(), which also registers a
  // document-level click listener and would double-bind it on every re-render.
  qs("[data-logout]", root)?.addEventListener("click", () => {
    const next = readState();
    next.session = { loggedIn: false, role: "guest", currentUserId: null, name: "" };
    writeState(next);
    location.href = "index.html";
  });

  createIcons();
}

/* Comma-separated list fields on the Edit Career Data page render as a tag
 * editor instead of a tall empty textarea. The visible chips are cosmetic —
 * the value the form actually submits lives in the hidden input, so the
 * existing submit handler keeps reading `form.get(name)` unchanged. */
function tagFieldMarkup(name, label, values, hint) {
  const escAttr = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const list = (Array.isArray(values) ? values : String(values || "").split(","))
    .map(item => String(item || "").trim())
    .filter(Boolean);
  return `
    <div class="cg-edit-wide cg-tagfield-wrap" data-tagfield>
      <span class="cg-tagfield-label">${escAttr(label)}</span>
      <div class="cg-tagfield" role="group" aria-label="${escAttr(label)}">
        ${list.map(item => `<span class="cg-tag">${escAttr(item)}<button type="button" data-tag-remove aria-label="Remove ${escAttr(item)}">${icon("x")}</button></span>`).join("")}
        <input type="text" class="cg-tagfield-input" data-tag-input placeholder="${list.length ? "Add another" : "Type and press Enter"}" aria-label="Add to ${escAttr(label)}">
      </div>
      <input type="hidden" name="${escAttr(name)}" value="${escAttr(list.join(", "))}" data-tag-value>
      ${hint ? `<small>${escAttr(hint)}</small>` : ""}
    </div>
  `;
}

/* Turns the static markup above into a working editor. Called after render. */
function wireTagFields(root) {
  qsa("[data-tagfield]", root).forEach(field => {
    const box = qs(".cg-tagfield", field);
    const input = qs("[data-tag-input]", field);
    const hidden = qs("[data-tag-value]", field);
    if (!box || !input || !hidden) return;
    const sync = () => {
      const values = qsa(".cg-tag", box).map(tag => tag.dataset.value || tag.textContent.trim()).filter(Boolean);
      hidden.value = values.join(", ");
      input.placeholder = values.length ? "Add another" : "Type and press Enter";
      hidden.dispatchEvent(new Event("input", { bubbles: true }));
    };
    qsa(".cg-tag", box).forEach(tag => {
      tag.dataset.value = tag.textContent.trim();
    });
    const addValue = raw => {
      const parts = String(raw || "").split(",").map(part => part.trim()).filter(Boolean);
      const existing = new Set(qsa(".cg-tag", box).map(tag => (tag.dataset.value || "").toLowerCase()));
      parts.forEach(part => {
        if (existing.has(part.toLowerCase())) return;
        existing.add(part.toLowerCase());
        const tag = document.createElement("span");
        tag.className = "cg-tag";
        tag.dataset.value = part;
        tag.textContent = part;
        const remove = document.createElement("button");
        remove.type = "button";
        remove.setAttribute("data-tag-remove", "");
        remove.setAttribute("aria-label", `Remove ${part}`);
        remove.innerHTML = icon("x");
        tag.appendChild(remove);
        box.insertBefore(tag, input);
      });
      input.value = "";
      sync();
      createIcons();
    };
    input.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        addValue(input.value);
      } else if (event.key === "Backspace" && !input.value) {
        const tags = qsa(".cg-tag", box);
        if (tags.length) {
          tags[tags.length - 1].remove();
          sync();
        }
      }
    });
    input.addEventListener("blur", () => addValue(input.value));
    box.addEventListener("click", event => {
      const remove = event.target.closest("[data-tag-remove]");
      if (remove) {
        remove.closest(".cg-tag")?.remove();
        sync();
        return;
      }
      if (event.target === box) input.focus();
    });
  });
}

function renderEditCareerData() {
  const root = qs("[data-edit-career-data]");
  if (!root) return;
  if (!requireAccount(root, "edit your career data")) return;
  const state = readState();
  const profile = state.profile;
  const htmlValue = value => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  const listValue = value => htmlValue(Array.isArray(value) ? value.join(", ") : value);
  const option = (value, current) => `<option value="${htmlValue(value)}" ${value === current ? "selected" : ""}>${htmlValue(value)}</option>`;
  const targetLabel = htmlValue(getTargetLabel(profile));
  const skillCount = [
    ...(profile.skills.technical || []),
    ...(profile.skills.soft || []),
    ...(profile.skills.tools || [])
  ].filter(Boolean).length;

  // Per-section completeness. Drives the rail's progress numbers AND the
  // headline percentage, so the "82%" is no longer a hard-coded fiction.
  const filled = value => (Array.isArray(value) ? value.filter(Boolean).length > 0 : String(value || "").trim().length > 0);
  const sections = [
    { id: "account", icon: "user-round", kicker: "Account", title: "Basic details", values: [profile.personal.fullName, profile.personal.email, profile.personal.phone, profile.personal.cityState, profile.personal.country, profile.personal.preferredLanguage] },
    { id: "education", icon: "graduation-cap", kicker: "Education", title: "School and background", values: [profile.background.educationLevel, profile.background.school, profile.background.courseMajor, profile.background.expectedGraduationYear, profile.background.academicPerformance, profile.background.clubLeadership] },
    { id: "career", icon: "briefcase-business", kicker: "Career", title: "Current path and target", values: [profile.personal.roleType, profile.careerStage, profile.background.currentRole, profile.background.industry, profile.background.yearsExperience, profile.background.currentSalaryRange, profile.goals, profile.background.reasonForCareerGo] },
    { id: "skills", icon: "sparkles", kicker: "Skills", title: "Proof Vera can use", values: [profile.skills.technical, profile.skills.soft, profile.skills.tools, profile.skills.certifications, profile.skills.projects, profile.skills.achievements] },
    { id: "portfolio", icon: "link", kicker: "Portfolio", title: "Public proof links", values: [profile.skills.portfolioLinks, profile.skills.linkedin, profile.skills.github, profile.skills.website] },
    { id: "preferences", icon: "sliders-horizontal", kicker: "Preferences", title: "Job preferences", values: [profile.preferences.roles, profile.preferences.industries, profile.preferences.locations, profile.preferences.workMode, profile.preferences.minimumSalary, profile.preferences.relocate, profile.preferences.companySize, profile.preferences.workCulture] },
    { id: "coaching", icon: "bot", kicker: "Vera context", title: "Coaching signal", values: [profile.coach.worry, profile.coach.supportStyle, profile.coach.growthPreference, profile.coach.confidenceToday] },
    { id: "security", icon: "shield-check", kicker: "Security", title: "Password and login", values: null }
  ].map(section => {
    const total = section.values ? section.values.length : 0;
    const done = section.values ? section.values.filter(filled).length : 0;
    return { ...section, total, done, complete: total > 0 && done === total };
  });
  const scored = sections.filter(section => section.total > 0);
  const strength = Math.round((scored.reduce((sum, section) => sum + section.done, 0) / scored.reduce((sum, section) => sum + section.total, 0)) * 100) || 0;
  const incomplete = scored.filter(section => !section.complete);

  const cardHead = section => `
    <header>
      <span>${icon(section.icon)}</span>
      <div><small>${section.kicker}</small><h2>${section.title}</h2></div>
      ${section.total ? `<b class="cg-edit-card-count ${section.complete ? "done" : ""}">${section.complete ? `${icon("check")} Complete` : `${section.done}/${section.total}`}</b>` : ""}
    </header>
  `;
  const byId = id => sections.find(section => section.id === id);

  root.innerHTML = appShell("", `
    <section class="cg-edit-career">
      <header class="cg-edit-hero">
        <div>
          <span class="cg-section-kicker">${icon("pencil")} Edit career data</span>
          <h1>Keep your CareerGo profile accurate.</h1>
          <p>Everything Vera uses across Today, Discover, Growth, Career Value, Pipeline, and Feed.</p>
        </div>
        <div class="cg-edit-hero-side">
          <div class="cg-edit-hero-meta">
            <span>${icon("briefcase-business")} ${targetLabel}</span>
            <span>${icon("sparkles")} ${skillCount || 0} skills</span>
            <span>${icon("map-pin")} ${htmlValue(profile.personal.cityState || "Kuala Lumpur")}</span>
          </div>
          <a class="btn btn-ghost" href="profile.html">${icon("user-round")} View profile</a>
        </div>
      </header>

      <form class="cg-edit-form" id="career-data-form" data-career-data-form>
        <aside class="cg-edit-rail">
          <div class="cg-edit-strength">
            <div class="cg-edit-strength-top">
              <div>
                <small>Profile strength</small>
                <strong>${strength}%</strong>
              </div>
              <span class="cg-edit-strength-chip ${strength >= 85 ? "good" : strength >= 60 ? "ok" : "low"}">${strength >= 85 ? "Employer-ready" : strength >= 60 ? "Almost there" : "Needs detail"}</span>
            </div>
            <div class="cg-edit-meter"><span style="width:${strength}%"></span></div>
            <p>${incomplete.length ? `${incomplete.length} section${incomplete.length === 1 ? "" : "s"} still have blank fields.` : "Every field Vera reads is filled in."}</p>
          </div>

          <nav class="cg-edit-nav" aria-label="Career data sections">
            ${sections.map(section => `
              <a href="#sec-${section.id}" data-edit-nav="${section.id}">
                <i>${icon(section.icon)}</i>
                <span>${section.title}</span>
                ${section.total ? `<b class="${section.complete ? "done" : ""}">${section.complete ? icon("check") : `${section.done}/${section.total}`}</b>` : ""}
              </a>
            `).join("")}
          </nav>

          ${(() => {
            // Experience and education live in the structured stores edited from
            // the Profile page, so surface what the resume is still missing here
            // and link to where it is actually editable.
            const readiness = resumeReadiness(state);
            return readiness.ready ? "" : `
            <div class="cg-edit-gaps">
              <strong>${icon("alert-circle")} Resume needs</strong>
              <ul>${readiness.missing.map(item => `<li>${htmlValue(item)}</li>`).join("")}</ul>
              <a href="profile.html">${icon("plus")} Add experience &amp; education</a>
            </div>`;
          })()}
        </aside>

        <div class="cg-edit-stack">
          <section class="cg-edit-card" id="sec-account" data-edit-section="account">
            ${cardHead(byId("account"))}
            <div class="cg-edit-grid">
              <label>Full name<input name="fullName" value="${htmlValue(profile.personal.fullName || getUserName(state))}" autocomplete="name"></label>
              <label>Email<input name="email" type="email" value="${htmlValue(profile.personal.email || state.session.email || "")}" autocomplete="email"></label>
              <label>Phone<input name="phone" value="${htmlValue(profile.personal.phone || "")}" autocomplete="tel" placeholder="+60 12-345 6789"></label>
              <label>City / state<input name="cityState" value="${htmlValue(profile.personal.cityState || "")}" placeholder="Kuala Lumpur"></label>
              <label>Country<input name="country" value="${htmlValue(profile.personal.country || "Malaysia")}"></label>
              <label>Preferred language<input name="preferredLanguage" value="${htmlValue(profile.personal.preferredLanguage || "English")}"></label>
            </div>
          </section>

          <section class="cg-edit-card" id="sec-education" data-edit-section="education">
            ${cardHead(byId("education"))}
            <div class="cg-edit-grid">
              <label>Education level
                <select name="educationLevel">
                  ${["", "High school", "Diploma", "Bachelor degree", "Master degree", "PhD", "Bootcamp / certificate"].map(value => option(value, profile.background.educationLevel || "")).join("")}
                </select>
              </label>
              <label>School / university<input name="school" value="${htmlValue(profile.background.school || "")}" placeholder="Universiti Malaya"></label>
              <label>Course / major<input name="courseMajor" value="${htmlValue(profile.background.courseMajor || "")}" placeholder="Business Administration"></label>
              <label>Graduation year<input name="expectedGraduationYear" value="${htmlValue(profile.background.expectedGraduationYear || "")}" placeholder="2027"></label>
              <label>Academic performance<input name="academicPerformance" value="${htmlValue(profile.background.academicPerformance || "")}" placeholder="CGPA, awards, dean list"></label>
              <label>Club / leadership<input name="clubLeadership" value="${htmlValue(profile.background.clubLeadership || "")}" placeholder="Product club, student council"></label>
            </div>
            <p class="cg-edit-note">${icon("info")} Full degree entries with dates live on your <a href="profile.html">profile</a> - this is the summary Vera reads.</p>
          </section>

          <section class="cg-edit-card" id="sec-career" data-edit-section="career">
            ${cardHead(byId("career"))}
            <div class="cg-edit-grid">
              <label>Role type
                <select name="roleType">
                  ${["", ...ROLE_TYPES].map(value => option(value, profile.personal.roleType || "")).join("")}
                </select>
              </label>
              <label>Career stage
                <select name="careerStage">
                  ${["", ...CAREER_STAGES].map(value => option(value, profile.careerStage || "")).join("")}
                </select>
              </label>
              <label>Current role<input name="currentRole" value="${htmlValue(profile.background.currentRole || "")}" placeholder="Operations Executive"></label>
              <label>Industry<input name="industry" value="${htmlValue(profile.background.industry || "")}" placeholder="Fintech, AI, education"></label>
              <label>Years of experience<input name="yearsExperience" value="${htmlValue(profile.background.yearsExperience || "")}" placeholder="3"></label>
              <label>Current salary<input name="currentSalaryRange" value="${htmlValue(profile.background.currentSalaryRange || "")}" placeholder="RM 4,500 - RM 5,500 / month"></label>
              ${tagFieldMarkup("goals", "Career goals", profile.goals, "What you want CareerGo to help you do.")}
              <label class="cg-edit-wide">Why you are using CareerGo<textarea name="reasonForCareerGo" rows="2" placeholder="One line is enough.">${htmlValue(profile.background.reasonForCareerGo || "")}</textarea></label>
            </div>
          </section>

          <section class="cg-edit-card" id="sec-skills" data-edit-section="skills">
            ${cardHead(byId("skills"))}
            <div class="cg-edit-grid">
              ${tagFieldMarkup("technical", "Technical skills", profile.skills.technical, "SQL, Figma, product analytics.")}
              ${tagFieldMarkup("soft", "Soft skills", profile.skills.soft, "")}
              ${tagFieldMarkup("tools", "Tools", profile.skills.tools, "")}
              ${tagFieldMarkup("certifications", "Certifications", profile.skills.certifications, "")}
              ${tagFieldMarkup("projects", "Projects", profile.skills.projects, "")}
              ${tagFieldMarkup("achievements", "Achievements", profile.skills.achievements, "Awards and recognition not tied to one job.")}
            </div>
          </section>

          <section class="cg-edit-card" id="sec-portfolio" data-edit-section="portfolio">
            ${cardHead(byId("portfolio"))}
            <div class="cg-edit-grid">
              <label>Portfolio<input name="portfolioLinks" value="${htmlValue(profile.skills.portfolioLinks || "")}" placeholder="https://"></label>
              <label>LinkedIn<input name="linkedin" value="${htmlValue(profile.skills.linkedin || "")}" placeholder="linkedin.com/in/..."></label>
              <label>GitHub<input name="github" value="${htmlValue(profile.skills.github || "")}" placeholder="github.com/..."></label>
              <label>Website<input name="website" value="${htmlValue(profile.skills.website || "")}" placeholder="https://"></label>
            </div>
          </section>

          <section class="cg-edit-card" id="sec-preferences" data-edit-section="preferences">
            ${cardHead(byId("preferences"))}
            <div class="cg-edit-grid">
              ${tagFieldMarkup("roles", "Target roles", profile.preferences.roles, "")}
              ${tagFieldMarkup("industries", "Industries", profile.preferences.industries, "")}
              ${tagFieldMarkup("locations", "Locations", profile.preferences.locations, "")}
              <label>Work mode
                <select name="workMode">${["Remote", "Hybrid", "Onsite", "Flexible"].map(value => option(value, profile.preferences.workMode || "Hybrid")).join("")}</select>
              </label>
              <label>Minimum salary<input name="minimumSalary" value="${htmlValue(profile.preferences.minimumSalary || "")}" placeholder="RM 5,500 / month"></label>
              <label>Open to relocating
                <select name="relocate">${["Yes", "Maybe", "No"].map(value => option(value, profile.preferences.relocate || "Maybe")).join("")}</select>
              </label>
              <label>Company size<input name="companySize" value="${htmlValue(profile.preferences.companySize || "")}" placeholder="Startup, scaleup, enterprise"></label>
              <label class="cg-edit-wide">Work culture<input name="workCulture" value="${htmlValue(profile.preferences.workCulture || "")}" placeholder="Async, craft-led, fast-moving"></label>
            </div>
          </section>

          <section class="cg-edit-card" id="sec-coaching" data-edit-section="coaching">
            ${cardHead(byId("coaching"))}
            <div class="cg-edit-grid">
              <label class="cg-edit-wide">What worries you right now<textarea name="worry" rows="2">${htmlValue(profile.coach.worry || "")}</textarea></label>
              <label class="cg-edit-wide">How Vera should support you<textarea name="supportStyle" rows="2">${htmlValue(profile.coach.supportStyle || "")}</textarea></label>
              <label>Growth preference
                <select name="growthPreference">${["Fast growth", "Stable growth", "Balanced"].map(value => option(value, profile.coach.growthPreference || "Stable growth")).join("")}</select>
              </label>
              <label>Confidence today
                <select name="confidenceToday">${["Low", "Medium", "High"].map(value => option(value, profile.coach.confidenceToday || "Medium")).join("")}</select>
              </label>
            </div>
          </section>

          <section class="cg-edit-card cg-edit-card-quiet" id="sec-security" data-edit-section="security">
            ${cardHead(byId("security"))}
            <div class="cg-edit-grid">
              <label class="cg-edit-wide">Current password
                <span class="cg-onboard-field-shell">
                  <input id="security-current-password" name="currentPassword" type="password" autocomplete="current-password" placeholder="Enter current password">
                  <button type="button" class="cg-onboard-eye" data-toggle-password="security-current-password" aria-label="Show current password">${icon("eye")}</button>
                </span>
              </label>
              <label>New password
                <span class="cg-onboard-field-shell">
                  <input id="security-new-password" name="newPassword" type="password" autocomplete="new-password" minlength="8" placeholder="At least 8 characters">
                  <button type="button" class="cg-onboard-eye" data-toggle-password="security-new-password" aria-label="Show new password">${icon("eye")}</button>
                </span>
              </label>
              <label>Confirm new password
                <span class="cg-onboard-field-shell">
                  <input id="security-confirm-password" name="confirmPassword" type="password" autocomplete="new-password" minlength="8" placeholder="Re-enter new password">
                  <button type="button" class="cg-onboard-eye" data-toggle-password="security-confirm-password" aria-label="Show confirm password">${icon("eye")}</button>
                </span>
              </label>
              <div class="cg-edit-wide cg-edit-password-action">
                <p>${icon("info")} Your password is changed on its own - the Save button below does not touch it.</p>
                <button type="button" class="btn btn-ghost" data-update-password>${icon("shield-check")} Update password</button>
              </div>
            </div>
          </section>

          <footer class="cg-edit-savebar" data-savebar>
            <span data-save-status>${icon("shield-check")} Saved data updates your account and Vera recommendations.</span>
            <div>
              <a class="btn btn-ghost" href="profile.html">Cancel</a>
              <button class="btn btn-primary" type="submit">${icon("save")} Save career data</button>
            </div>
          </footer>
        </div>
      </form>
    </section>
  `);

  const form = qs("[data-career-data-form]", root);
  wireTagFields(root);

  // Unsaved-changes indicator: the page is long enough that the save bar
  // needs to say whether there is anything to save.
  const status = qs("[data-save-status]", root);
  const savebar = qs("[data-savebar]", root);
  const markDirty = () => {
    if (savebar?.dataset.dirty === "true") return;
    if (savebar) savebar.dataset.dirty = "true";
    if (status) status.innerHTML = `${icon("circle-dot")} Unsaved changes.`;
    createIcons();
  };
  form?.addEventListener("input", markDirty);
  form?.addEventListener("change", markDirty);

  // Section nav: smooth anchor scroll that clears the sticky topbar, plus a
  // scroll-spy so the rail always shows where you are.
  const navLinks = qsa("[data-edit-nav]", root);
  let navLockUntil = 0;
  navLinks.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const target = qs(`#sec-${link.dataset.editNav}`, root);
    if (!target) return;
    // See the settings page: the spy alone can't highlight a bottom section.
    navLinks.forEach(other => other.classList.toggle("active", other === link));
    navLockUntil = Date.now() + 900;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
  }));
  const cards = qsa("[data-edit-section]", root);
  if (cards.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      if (Date.now() < navLockUntil) return;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.dataset.editSection;
        navLinks.forEach(link => link.classList.toggle("active", link.dataset.editNav === id));
      });
    }, { rootMargin: "-120px 0px -65% 0px", threshold: 0 });
    cards.forEach(card => spy.observe(card));
  }

  form?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const splitList = name => String(data.get(name) || "")
      .split(",")
      .map(item => item.trim())
      .filter(Boolean);
    const next = readState();
    const nextProfile = next.profile;
    nextProfile.personal.fullName = String(data.get("fullName") || "").trim();
    nextProfile.personal.email = String(data.get("email") || "").trim();
    nextProfile.personal.phone = String(data.get("phone") || "").trim();
    nextProfile.personal.cityState = String(data.get("cityState") || "").trim();
    nextProfile.personal.country = String(data.get("country") || "Malaysia").trim();
    nextProfile.personal.preferredLanguage = String(data.get("preferredLanguage") || "English").trim();
    nextProfile.personal.roleType = String(data.get("roleType") || "").trim();
    nextProfile.careerStage = String(data.get("careerStage") || "").trim();
    ["educationLevel", "school", "courseMajor", "expectedGraduationYear", "academicPerformance", "clubLeadership", "currentRole", "industry", "yearsExperience", "currentSalaryRange", "reasonForCareerGo"].forEach(key => {
      nextProfile.background[key] = String(data.get(key) || "").trim();
    });
    nextProfile.goals = splitList("goals");
    nextProfile.skills.technical = splitList("technical");
    nextProfile.skills.soft = splitList("soft");
    nextProfile.skills.tools = splitList("tools");
    nextProfile.skills.certifications = splitList("certifications");
    nextProfile.skills.projects = splitList("projects");
    nextProfile.skills.achievements = splitList("achievements");
    ["portfolioLinks", "linkedin", "github", "website"].forEach(key => {
      nextProfile.skills[key] = String(data.get(key) || "").trim();
    });
    nextProfile.preferences.roles = splitList("roles");
    nextProfile.preferences.industries = splitList("industries");
    nextProfile.preferences.locations = splitList("locations");
    nextProfile.preferences.workMode = String(data.get("workMode") || "Hybrid");
    nextProfile.preferences.minimumSalary = String(data.get("minimumSalary") || "").trim();
    nextProfile.preferences.relocate = String(data.get("relocate") || "Maybe");
    nextProfile.preferences.companySize = String(data.get("companySize") || "").trim();
    nextProfile.preferences.workCulture = String(data.get("workCulture") || "").trim();
    nextProfile.coach.worry = String(data.get("worry") || "").trim();
    nextProfile.coach.supportStyle = String(data.get("supportStyle") || "").trim();
    nextProfile.coach.growthPreference = String(data.get("growthPreference") || "Stable growth").trim();
    nextProfile.coach.confidenceToday = String(data.get("confidenceToday") || "Medium").trim();
    nextProfile.intelligence = generateCareerIntelligence(nextProfile);
    nextProfile.updatedAt = nowStamp();
    syncCurrentUser(next);
    writeState(next);
    showToast("Career data saved.");
    renderEditCareerData();
  });

  qs("[data-update-password]", root)?.addEventListener("click", () => {
    const currentInput = qs("#security-current-password");
    const newInput = qs("#security-new-password");
    const confirmInput = qs("#security-confirm-password");
    const currentPassword = String(currentInput?.value || "");
    const newPassword = String(newInput?.value || "");
    const confirmPassword = String(confirmInput?.value || "");
    const next = readState();
    const account = (next.auth?.users || []).find(user => user.id === next.session.currentUserId);
    if (!account) {
      showToast("We could not find your account. Try logging in again.", "info");
      return;
    }
    if (account.password && account.password !== currentPassword) {
      showToast("Current password is incorrect.", "info");
      return;
    }
    if (newPassword.length < 8) {
      showToast("New password must be at least 8 characters.", "info");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("New passwords do not match.", "info");
      return;
    }
    account.password = newPassword;
    writeState(next);
    showToast("Password updated.");
    if (currentInput) currentInput.value = "";
    if (newInput) newInput.value = "";
    if (confirmInput) confirmInput.value = "";
  });
  wireOnboardPasswordToggle(root);
  createIcons();
}

function renderSavedItems() {
  const root = qs("[data-saved]");
  if (!root) return;
  if (!requireAccount(root, "review your saved items")) return;
  const state = readState();
  const savedJobs = DATA.jobs.filter(job => state.savedJobs.includes(job.id));
  const savedOrgs = [...DATA.companies, ...DATA.universities].filter(org => state.savedOrgs.includes(org.id));
  root.innerHTML = appShell("saved", `
    <section class="glass-card dashboard-hero compact-dashboard-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Saved Items</div><h1 class="section-title">Your saved jobs, research, and posts.</h1><p class="section-sub">Keep career decisions organized without crowding the main dashboard.</p></div>
    </section>
    <section class="saved-items-stack">
      <article class="glass-card"><div class="section-head compact-section-head"><div><div class="section-kicker">Saved jobs</div><h2 class="section-title mini">${savedJobs.length} roles</h2></div><a class="btn btn-ghost" href="discover.html">${icon("briefcase")} Jobs</a></div><div class="list-stack">${savedJobs.map(job => `<a class="list-card quiet" href="role.html?role=${job.id}"><div class="list-card-top"><div><h3>${job.title}</h3><div class="muted small">${job.company} - ${job.salary}</div></div><span class="score">${job.match}%</span></div></a>`).join("") || `<p class="muted">No saved jobs yet.</p>`}</div></article>
      <article class="glass-card"><div class="section-head compact-section-head"><div><div class="section-kicker">Saved research</div><h2 class="section-title mini">${savedOrgs.length} organizations</h2></div><a class="btn btn-ghost" href="discover-companies.html">${icon("search")} Research</a></div><div class="list-stack">${savedOrgs.map(org => `<a class="list-card quiet" href="${org.type === "University" ? "discover-universities.html" : "discover-companies.html"}?org=${org.id}"><div class="list-card-top"><div><h3>${org.name}</h3><div class="muted small">${org.signal}</div></div>${rating(org.rating)}</div></a>`).join("") || `<p class="muted">No saved companies or universities yet.</p>`}</div></article>
    </section>
    <section class="glass-card"><div class="section-kicker">Saved posts</div><div class="grid-3">${DATA.communityPosts.slice(0, 3).map(post => `<article class="tool-card"><h3>${post.title}</h3><p>${post.body}</p><span class="pill gold">${post.reactions} reactions</span></article>`).join("")}</div></section>
  `, { title: "Saved Items", subtitle: "Saved jobs, companies, universities, and posts in one place." });
  createIcons();
}

function renderMarket() {
  const root = qs("[data-market]");
  if (!root) return;
  if (!requireAccount(root, "view your market intelligence")) return;
  if (needsOnboarding(root)) return;
  const state = readState();
  if (state.session.loggedIn) {
    const valueDrivers = [
      ["target", "Product Analytics", "Unlocks senior PM roles at Grab, Setel, Carsome.", 13, "Effort - 12 hrs - 3 weeks", [["Market pulse", 8], ["Peer review", 3], ["Mentor input", 2]]],
      ["zap", "SQL fluency", "Removes your #1 interview blocker in KL fintechs.", 9, "Effort - 8 hrs - 2 weeks", [["Market pulse", 6], ["Peer review", 2], ["Mentor input", 1]]],
      ["briefcase-business", "Portfolio case study", "Recruiter response rate lifts ~2.1x when linked.", 7, "Effort - 6 hrs - 1 weekend", [["Market pulse", 5], ["Peer review", 1], ["Mentor input", 1]]],
      ["rocket", "Leadership experience", "Lead one cross-team initiative this quarter.", 5, "Effort - Ongoing", [["Market pulse", 3], ["Peer review", 1], ["Mentor input", 1]]]
    ];
    const worthPieColors = ["#1baf7a", "#2a78d6", "#eda100"];
    const worthDriverPie = breakdown => {
      const total = breakdown.reduce((sum, [, value]) => sum + value, 0);
      let cumulative = 0;
      const segments = breakdown.map(([label, value], i) => {
        const frac = total ? (value / total) * 100 : 0;
        const dashoffset = 25 - cumulative;
        cumulative += frac;
        return `<circle class="cg-worth-pie-seg" cx="21" cy="21" r="15.9155" fill="transparent" stroke="${worthPieColors[i % worthPieColors.length]}" stroke-width="6" stroke-dasharray="${frac} ${100 - frac}" stroke-dashoffset="${dashoffset}"><title>${label} - ${value}% of value</title></circle>`;
      }).join("");
      const legend = breakdown.map(([label, value], i) => `<li><i style="background:${worthPieColors[i % worthPieColors.length]}"></i>${label}<b>${value}%</b></li>`).join("");
      return `
        <div class="cg-worth-pie" role="img" aria-label="Value breakdown: ${breakdown.map(([label, value]) => `${label} ${value}%`).join(", ")}">
          <svg viewBox="0 0 42 42">${segments}</svg>
          <ul class="cg-worth-pie-legend">${legend}</ul>
        </div>
      `;
    };
    // Value Growth is now a momentum story, not four near-identical RM figures.
    // Qualitative events only (no $ per event); the trend shape is the sparkline.
    const momentumEvents = [
      ["Today", "Portfolio milestone shipped this morning", true],
      ["Yesterday", "Two Grab recruiters viewed your profile", false],
      ["Last week", "Resume rewrite lifted your recruiter reply rate", false],
      ["Last month", "Started the SQL sprint in Growth", false]
    ];
    const momentumSpark = [8450, 8600, 8780, 8900]; // last month -> today, shape only
    const scenarios = [
      ["compass", "Stay on current path", "No new skills, no move", 50, "RM 8,900", "muted"],
      ["target", "Complete Vera's roadmap", "Ship SQL + Analytics in 6 mo.", 58, "RM 10,200", "teal"],
      ["wallet-cards", "Switch industry - fintech", "Setel, BigPay, Boost", 64, "RM 11,400", "teal"],
      ["globe-2", "Remote international (APAC)", "USD-linked, remote MY", 90, "RM 16,000", "dark"],
      ["map-pin", "Relocate to Singapore", "PM - SG cost adjusted", 100, "RM 18,000", "dark"]
    ];
    const benchmarks = [
      ["Vs. PMs in KL", "-RM 900 / mo", "Below median for your years", "warn"],
      ["Vs. top-tier co. (Grab, Shopee)", "+22% ceiling", "You're within reach with roadmap", "good"],
      ["Vs. peers w/ your skills", "on par", "Skills match archetype cleanly", ""],
      ["Fair pay confidence", "High", "234 verified data points", ""]
    ];
    // Re-baselined to land on the ~RM 10.2-10.5k 6-month roadmap target used
    // everywhere else on this page (was ending at 12.1k / +36%, which read as
    // an exaggerated hockey-stick and contradicted the stated target).
    const worthTimelinePoints = [
      { xPct: 0, value: 8900, display: "RM 8.9k", label: "Today", body: "where you are" },
      { xPct: 24, value: 9200, display: "RM 9.2k", label: "Week 3", body: "Complete SQL sprint" },
      { xPct: 47, value: 9600, display: "RM 9.6k", label: "Week 6", body: "Publish portfolio case" },
      { xPct: 70, value: 10000, display: "RM 10.0k", label: "Month 3", body: "First PM interview cycle" },
      { xPct: 98, value: 10400, display: "RM 10.4k", label: "Month 6", body: "Roadmap complete" }
    ];
    root.innerHTML = appShell("market", `
      <section class="cg-worth">
        <section class="cg-worth-hero">
          <span class="cg-section-kicker">${icon("sparkles")} Your career value - Malaysia</span>
          <span class="cg-worth-pill">${icon("flame")} Vera believes you're underpriced</span>
          <div class="cg-worth-hero-grid">
            <div>
              <h1><span>RM</span>8,300-9,800<small>/ month</small></h1>
              <p>Typical range for Product Managers with your profile in Malaysia - exact offers vary by company, industry, and negotiation.</p>
            </div>
            <div class="cg-worth-side">
              <b>${icon("trending-up")} Trending up since yesterday</b>
            </div>
          </div>
          <article class="cg-worth-vera-note">
            <span>${icon("sparkles")}</span>
            <p><strong>Vera</strong> - you've grown +13% since October. Two things are still capping you: Product Analytics and SQL fluency. If you finish both this month, I expect your value to sit near RM 10,200-RM 10,500 - that assumes you keep pace on the roadmap in Grow.</p>
            <small>Prediction - 72% confidence - widens as you complete milestones</small>
          </article>
          <div class="cg-worth-range">
            <div><span>RM 5k</span><span>Product Manager - Malaysia - monthly base</span><span>RM 18k</span></div>
            <i><em></em><b></b><strong></strong></i>
            <div><span>You today - RM 8,900</span><span>Vera's 6-month target - RM 10,200</span></div>
          </div>
        </section>

        <section class="cg-worth-action">
          <header><span>${icon("sparkles")} Vera - highest-value action today</span><small>1 of 47 possible moves</small></header>
          <div>
            <article>
              <h2>Complete the Product Analytics sprint.</h2>
              <p>Of every roadmap step, portfolio push and referral request open to you, this one moves your Career Value the most for the least effort. It also unlocks the Stripe and Grab interview rubrics in Pipeline.</p>
              <div class="cg-worth-chips"><span>${icon("trending-up")} +RM 1,300 / month expected</span><span>${icon("clock")} 12 hrs over 3 weeks</span><span>${icon("target")} 92% probability of completion</span></div>
              <div class="cg-worth-actions"><a class="btn btn-primary" href="grow.html">${icon("sparkles")} Start in Growth</a><a class="btn btn-ghost" href="posts.html?topic=${encodeURIComponent("why the Product Analytics sprint is today's highest-value move")}#messages">Why this one? ${icon("arrow-right")}</a></div>
            </article>
            <aside>
              <span>Why Vera picked this</span>
              <p>${icon("check")} Highest RM-per-hour of any action open to you.</p>
              <p>${icon("check")} Solves the #1 blocker Grab flagged in your last screen.</p>
              <p>${icon("check")} Everything else - negotiation, referrals - compounds after this.</p>
            </aside>
          </div>
        </section>

        <section class="cg-worth-section" id="worth-drivers" data-tour-target="worth-drivers">
          <div class="cg-worth-section-head"><div><h2>Top value drivers</h2><p>Ranked by expected monthly pay lift, weighted by how likely you are to complete it.</p></div><a href="posts.html?topic=${encodeURIComponent("how my top value drivers are ranked")}#messages">Explain how ${icon("arrow-right")}</a></div>
          <div class="cg-worth-driver-grid">
            ${valueDrivers.map(([ic, title, body, pct, effort, breakdown]) => `
              <article>
                <span>${icon(ic)}</span>
                <div><h3>${title}</h3><p>${body}</p><small>${effort}</small></div>
                <div class="cg-worth-driver-value">
                  <strong>+${pct}<small>% Value</small></strong>
                  ${worthDriverPie(breakdown)}
                </div>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-worth-momentum" id="value-growth">
          <div class="cg-worth-section-head"><div><h2>Value Growth</h2><p>Small changes compound. Here's the story your Career Value has been telling.</p></div><a href="posts.html?topic=${encodeURIComponent("my Career Value growth story")}#messages">Explain how ${icon("arrow-right")}</a></div>
          <div class="cg-momentum-top">
            <div class="cg-momentum-figure">
              <span class="cg-momentum-trend">${icon("trending-up")} Trending up</span>
              <strong>+5%<small>this month</small></strong>
              <small>≈ +13% since October</small>
            </div>
            <div class="cg-momentum-spark">${momentumSparkline(momentumSpark)}</div>
          </div>
          <ul class="cg-momentum-events">
            ${momentumEvents.map(([when, text, recent]) => `<li class="${recent ? "is-recent" : ""}"><span class="cg-momentum-dot"></span><div><b>${when}</b>${text}</div></li>`).join("")}
          </ul>
          <p class="cg-worth-note">${icon("activity")} Vera keeps a running record of every skill you finish, every project you ship, and every recruiter reply. Momentum is the strongest signal in your prediction - you've had 11 positive events in the last 30 days.</p>
        </section>

        <section class="cg-worth-section" id="worth-scenarios">
          <div class="cg-worth-section-head"><div><h2>Career Value Scenarios</h2><p>How different moves - staying, switching, or upskilling - change your value over time.</p></div><a href="posts.html?topic=${encodeURIComponent("these Career Value scenarios")}#messages">Explain how ${icon("arrow-right")}</a></div>
          <div class="cg-worth-scenarios">
            ${scenarios.map(([ic, title, body, width, value, tone]) => `
              <article class="tone-${tone}">
                <span>${icon(ic)}</span>
                <div><h3>${title}</h3><p>${body}</p></div>
                <i><em style="width:${width}%"></em></i>
                <strong>${value}<small>/mo</small></strong>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-worth-negotiation" id="salary-negotiation">
          <article>
            <span class="cg-section-kicker">${icon("scale")} Salary negotiation - Grab Malaysia</span>
            <h2>Vera thinks you can ask for <em>RM 10,300.</em></h2>
            <p class="cg-neg-sub">Your defensible ask sits just above fair market value - backed by your skill scarcity and pipeline leverage.</p>
            <div class="cg-neg-slider">
              <div class="cg-neg-track">
                <i class="cg-neg-fill" style="width:61%"></i>
                <span class="cg-neg-fair" style="left:55%"><em></em><small>Fair &middot; RM 10,100</small></span>
                <span class="cg-neg-handle" style="left:61%"><b>Ask RM 10,300</b></span>
              </div>
              <div class="cg-neg-scale"><span>Lowball<b>RM 8,400</b></span><span>Ambitious<b>RM 11,500</b></span></div>
            </div>
            <div class="cg-neg-meta">
              <span class="cg-neg-conf">${icon("shield-check")} <b>72%</b> confidence this holds</span>
              <a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent("generating negotiation points for my next offer")}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Generate negotiation points</a>
            </div>
          </article>
          <div class="cg-grow-coach">
            <div class="cg-grow-coach-head"><span><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Coach Vera</span><b>online</b></div>
            <div class="cg-worth-coach-message">
              <div>
                <h3>Why RM 10,300 is defensible</h3>
                ${[
                  "Your SQL + Analytics combo is present in only 34% of KL PMs at your level.",
                  "Median fintech PM base in KL is RM 10,100 - you sit above the archetype floor.",
                  "You've shipped 2 revenue features; Grab weights this heavily in banding.",
                  "Two active offers in your pipeline strengthen your BATNA."
                ].map(point => `<div class="cg-chat-bubble">${point}</div>`).join("")}
              </div>
            </div>
            <form class="cg-grow-chat" action="posts.html#messages">
              <input name="topic" placeholder="Ask Vera anything about your career...">
              <button type="submit">${icon("send")}</button>
            </form>
          </div>
        </section>

        <section class="cg-worth-timeline">
          <h2>Career Value Timetable</h2>
          <p>Vera projects how each roadmap action lifts your monthly Career Value.</p>
          <div class="cg-worth-chart">
            ${worthTimelineSvg(worthTimelinePoints)}
            ${worthTimelinePoints.map(p => `<div class="cg-worth-point" style="left:${p.xPct}%"><span>${p.label}</span><small>${p.body}</small></div>`).join("")}
          </div>
          <p class="cg-worth-chart-caption">${worthTimelineCaption(worthTimelinePoints)}</p>
          <p class="sr-only">${worthTimelineSummary(worthTimelinePoints)}</p>
        </section>

        <section class="cg-worth-section">
          <div class="cg-worth-section-head"><div><h2>Benchmark -In Malaysia</h2><p>Live Fair Pay data from KL, Penang, Johor, and remote Malaysia postings.</p></div><a href="posts.html?topic=${encodeURIComponent("the Malaysia pay benchmark data")}#messages">Explain how ${icon("arrow-right")}</a></div>
          <div class="cg-worth-benchmarks">
            ${benchmarks.map(([label, value, body, tone]) => `<article class="tone-${tone}"><span>${label}</span><strong>${value}</strong><p>${body}</p></article>`).join("")}
          </div>
          <p class="cg-worth-note">${icon("info")} Career Value blends your live skill graph, roadmap velocity, and 6,400+ verified Malaysian offers. It updates every time you complete a roadmap step, ship a project, or receive an offer.</p>
        </section>
      </section>
      ${veraWidgetMarkup()}
    `);
    createIcons();
    wireVeraWidget(root);
    const worthChartSvg = qs(".cg-worth-chart-svg", root);
    if (worthChartSvg) {
      const chartRect = worthChartSvg.getBoundingClientRect();
      const measuredWidth = Math.round(chartRect.width);
      const measuredHeight = Math.round(chartRect.height);
      if (measuredWidth > 0 && measuredHeight > 0 && (Math.abs(measuredWidth - 1200) > 4 || Math.abs(measuredHeight - 360) > 4)) {
        worthChartSvg.outerHTML = worthTimelineSvg(worthTimelinePoints, measuredWidth, measuredHeight);
      }
    }
    if (["#worth-drivers", "#value-growth", "#worth-scenarios", "#salary-negotiation"].includes(location.hash)) {
      window.setTimeout(() => qs(location.hash, root)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    }
    initPageTour("market");
    return;
  }
  const target = getTargetLabel(state.profile).toLowerCase();
  const roleFromHash = decodeURIComponent((location.hash || "").replace("#role=", ""));
  const current = DATA.marketRoles.find(role => role.role === roleFromHash)
    || DATA.marketRoles.find(role => target.includes(role.role.toLowerCase()) || role.role.toLowerCase().includes(target))
    || DATA.marketRoles[0];
  const intel = state.profile.intelligence || generateCareerIntelligence(state.profile);
  const targetWorth = Math.round(current.fair * 1.15);
  const gap = Math.max(0, current.fair - current.current);
  const breakdown = [
    ["Experience", 28000, "Years, project scope, delivery ownership"],
    ["Core skills", 18000, current.skills.slice(0, 2).join(", ")],
    ["Industry premium", 12000, "High-demand sectors and domain signal"],
    ["Location", 8000, state.profile.personal.cityState || "Malaysia"],
    ["Leadership proof", 15000, "Stakeholder and decision evidence"],
    ["Market demand", 11000, `${current.demand} demand, ${current.trend} trend`]
  ];
  const maxBreakdown = Math.max(...breakdown.map(item => item[1]));
  const scenarios = [
    ["Current profile", [], current.current],
    ["Close proof gap", ["Case study", "Metrics"], Math.round(current.current * 1.08)],
    ["Add strategy signal", ["Product strategy", "Roadmap"], Math.round(current.current * 1.18)],
    ["AI-ready path", ["AI literacy", "Workflow design"], current.potential]
  ];
  const locations = [
    ["Kuala Lumpur", money(current.fair), "42%", "Medium"],
    ["Petaling Jaya", money(Math.round(current.fair * 0.96)), "38%", "Medium"],
    ["Singapore remote", money(Math.round(current.fair * 1.42)), "61%", "High"],
    ["Penang", money(Math.round(current.fair * 0.88)), "29%", "Low"]
  ];
  const emergingRoles = [
    ["AI Product Manager", "+31%", "Very high"],
    ["Product Analytics Specialist", "+24%", "High"],
    ["AI UX Designer", "+28%", "High"],
    ["Growth Product Designer", "+19%", "High"]
  ];
  const marketPlan = state.marketPlan?.role === current.role ? state.marketPlan : null;
  const marketPlanTasks = marketPlan?.tasks || [];
  const marketPlanDone = marketPlanTasks.filter(task => task.done).length;
  const marketPlanPercent = marketPlanTasks.length ? Math.round((marketPlanDone / marketPlanTasks.length) * 100) : 0;
  root.innerHTML = appShell("market", `
    <section class="glass-card dashboard-hero market-hero">
      <div>
        <div class="eyebrow"><span class="spark">*</span> Market Intelligence</div>
        <h1 class="section-title">Know your worth and the market direction.</h1>
        <p class="section-sub">${intel.salaryPositioning}. CareerGo uses ranges and direction signals here, not fake exact pay promises.</p>
      </div>
      <div class="market-hero-meter">
        <span>Fair value gap</span>
        <strong>${gap ? money(gap) : "On track"}</strong>
        ${progressBar(Math.min(100, Math.round((current.current / current.potential) * 100)))}
      </div>
    </section>
    <section class="market-worth-grid">
      ${[
        ["Current worth", money(current.current), "Your current estimated profile value"],
        ["Target worth", money(targetWorth), "Reachable with stronger proof"],
        ["Potential worth", money(current.potential), "Upper range for this path"],
        ["Market demand", current.demand, `${current.trend} hiring trend`]
      ].map(([label, value, body]) => `<article class="market-worth-card"><span>${label}</span><strong>${value}</strong><p>${body}</p></article>`).join("")}
    </section>
    <section class="glass-card market-workbench">
      <div class="section-head compact-section-head">
        <div><div class="section-kicker">Career value explorer</div><h2 class="section-title mini">${current.role}</h2></div>
        <span class="pill green">${current.trend}</span>
      </div>
      <div class="market-role-tabs">
        ${DATA.marketRoles.map(role => `<button class="pill ${role.role === current.role ? "cyan active" : ""}" type="button" data-market-role="${role.role}">${role.role}</button>`).join("")}
      </div>
      <div class="market-detail-grid">
        <div class="market-breakdown">
          <h3>Worth breakdown</h3>
          ${breakdown.map(([label, value, note], index) => `
            <div class="market-breakdown-row" style="--row-index:${index}; --breakdown-target:${Math.round((value / maxBreakdown) * 100)}%;">
              <div><strong>${label}</strong><span>${note}</span></div>
              <div class="market-breakdown-bar"><i></i></div>
              <b>+${money(value)}</b>
            </div>
          `).join("")}
        </div>
        <div class="market-role-card">
          <h3>Role signals</h3>
          <div class="score-grid compact">
            <div class="score-tile"><span>Fair value</span><strong>${money(current.fair)}</strong></div>
            <div class="score-tile"><span>Potential</span><strong>${money(current.potential)}</strong></div>
            <div class="score-tile"><span>Demand</span><strong>${current.demand}</strong></div>
            <div class="score-tile"><span>Trend</span><strong>${current.trend}</strong></div>
          </div>
          ${pills(current.skills, "cyan")}
          <div class="plan-outcome"><strong>Vera read</strong><span>The fastest salary lift is proving ${current.skills[0]} through a project with measurable impact and a clear trade-off.</span></div>
        </div>
      </div>
    </section>
    <section class="glass-card market-simulator">
      <div class="section-head compact-section-head"><div><div class="section-kicker">Growth simulator</div><h2 class="section-title mini">What changes your value?</h2></div><button class="btn btn-cyan" type="button" data-market-plan>${icon("route")} Build value plan</button></div>
      <div class="market-scenario-grid">
        ${scenarios.map(([title, skills, value], index) => `<article class="market-scenario-card ${index === scenarios.length - 1 ? "highlight" : ""}"><span>Scenario ${index + 1}</span><strong>${money(value)}</strong><p>${title}</p>${skills.length ? pills(skills, index === scenarios.length - 1 ? "gold" : "cyan") : `<div class="muted small">Current evidence</div>`}</article>`).join("")}
      </div>
      ${marketPlan ? `
        <div class="market-value-plan">
          <div class="section-head compact-section-head">
            <div>
              <div class="section-kicker">Value plan active</div>
              <h2 class="section-title mini">${marketPlan.title}</h2>
              <p class="section-sub">${marketPlan.summary}</p>
            </div>
            <span class="pill ${marketPlanPercent === 100 ? "green" : "cyan"}">${marketPlanPercent}% complete</span>
          </div>
          <div class="plan-summary-grid">
            <article class="plan-summary-card"><span>Value target</span><strong>${money(marketPlan.targetValue)}</strong><p class="muted small">Current: ${money(current.current)}</p></article>
            <article class="plan-summary-card"><span>Expected lift</span><strong>+${money(marketPlan.expectedLift)}</strong><p class="muted small">From proof, strategy, and AI readiness</p></article>
            <article class="plan-summary-card"><span>Progress</span><strong>${marketPlanDone}/${marketPlanTasks.length}</strong>${progressBar(marketPlanPercent)}</article>
          </div>
          <div class="plan-task-list">
            ${marketPlanTasks.map(task => `
              <div class="plan-task ${task.done ? "complete" : ""}">
                <button type="button" class="plan-task-check" data-market-task="${task.id}" aria-label="${task.done ? "Mark incomplete" : "Mark complete"}">${icon(task.done ? "check" : "circle")}</button>
                <span><strong>${task.title}</strong><small>${task.body}</small></span>
                <a href="${task.href}" aria-label="Open related page">${icon("arrow-up-right")}</a>
              </div>
            `).join("")}
          </div>
          <div class="plan-command-row">
            <a class="btn btn-cyan" href="posts.html?topic=${encodeURIComponent("my Career Value plan")}#messages">${icon("message-circle")} Discuss with Vera</a>
            <a class="btn btn-ghost" href="grow.html">${icon("brain-circuit")} Update proof</a>
            <button class="btn btn-ghost" type="button" data-market-plan-reset>${icon("rotate-ccw")} Reset value plan</button>
          </div>
        </div>
      ` : ""}
    </section>
    <section class="market-signal-grid">
      <article class="glass-card">
        <div class="section-kicker">Market pulse</div>
        <div class="list-stack">${DATA.pulse.map(signal => `<div class="list-card quiet"><h3>${signal.title}</h3><p class="muted">${signal.body}</p><span class="pill gold">${signal.impact}</span></div>`).join("")}</div>
      </article>
      <article class="glass-card">
        <div class="section-kicker">Emerging roles</div>
        <div class="list-stack">${emergingRoles.map(([role, trend, demand]) => `<div class="list-card quiet"><div class="list-card-top"><h3>${role}</h3><span class="pill green">${trend}</span></div><p class="muted small">${demand} demand in adjacent markets</p></div>`).join("")}</div>
      </article>
    </section>
    <section class="content-grid">
      <article class="glass-card">
        <div class="section-kicker">Location opportunity</div>
        <div class="table-wrap"><table class="comparison-table"><thead><tr><th>Location</th><th>Avg salary</th><th>Remote %</th><th>Competition</th></tr></thead><tbody>${locations.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      </article>
      <article class="glass-card">
        <div class="section-kicker">AI market insights</div>
        <div class="chat-insight-list">
          ${[
            `Your profile is closest to ${current.role}; build proof for ${current.skills[0]} first.`,
            `Roles above ${money(targetWorth)} need stronger business impact and stakeholder evidence.`,
            "Remote and Singapore-linked roles improve upside, but competition rises sharply."
          ].map(item => `<div class="chat-insight"><strong>${icon("lightbulb")} Insight</strong><span>${item}</span></div>`).join("")}
        </div>
      </article>
    </section>
  `);
  qsa("[data-market-role]").forEach(btn => btn.addEventListener("click", () => {
    location.hash = `role=${encodeURIComponent(btn.dataset.marketRole)}`;
    renderMarket();
  }));
  qs("[data-market-plan]")?.addEventListener("click", () => {
    const next = readState();
    const expectedLift = Math.max(8000, Math.round(current.fair * 0.14));
    next.marketPlan = {
      role: current.role,
      title: `${current.role} value lift plan`,
      summary: `A 30-day plan to move from ${money(current.current)} toward ${money(Math.min(current.potential, current.current + expectedLift))} by proving ${current.skills[0]}, measurable impact, and market-ready positioning.`,
      targetValue: Math.min(current.potential, current.current + expectedLift),
      expectedLift,
      createdAt: nowStamp(),
      tasks: [
        { id: "market-proof", title: `Prove ${current.skills[0]}`, body: "Add one project story with context, trade-off, metric, and result.", href: "grow.html", done: false },
        { id: "market-benchmark", title: "Benchmark 5 roles", body: "Compare salary range, demand, competition, and required proof.", href: "discover.html", done: false },
        { id: "market-signal", title: "Add one market signal", body: `Build evidence around ${current.skills[1] || "a high-demand skill"} using a concrete artifact.`, href: "vera.html#skills", done: false },
        { id: "market-story", title: "Practice value story", body: "Prepare a 60-second answer explaining why your market value has increased.", href: "grow.html#interview-coach", done: false }
      ]
    };
    next.chat = [
      ...next.chat,
      { from: "vera", text: `I built a value plan for ${current.role}. Start with ${current.skills[0]}, benchmark five roles, then prove the lift with one measurable project story.` }
    ];
    writeState(next);
    showToast("Vera built your market value plan.");
    renderMarket();
  });
  qsa("[data-market-task]").forEach(btn => btn.addEventListener("click", () => {
    const next = readState();
    if (!next.marketPlan?.tasks) return;
    next.marketPlan.tasks = next.marketPlan.tasks.map(task => task.id === btn.dataset.marketTask ? { ...task, done: !task.done } : task);
    writeState(next);
    showToast("Market value plan updated.");
    renderMarket();
  }));
  qs("[data-market-plan-reset]")?.addEventListener("click", () => {
    const next = readState();
    next.marketPlan = null;
    writeState(next);
    showToast("Market value plan reset.");
    renderMarket();
  });
  createIcons();
}

function autopilotSalaryMax(job) {
  const numbers = (String(job.salary || "").match(/\d+(?:\.\d+)?/g) || []).map(Number);
  if (!numbers.length) return 0;
  const max = Math.max(...numbers);
  return /k/i.test(job.salary) ? max * 1000 : max;
}

function autopilotProfileSkills(state) {
  const skills = state.profile?.skills || {};
  return [...new Set([...(skills.technical || []), ...(skills.tools || []), ...(skills.soft || [])])];
}

function autopilotAssessJob(job, state) {
  const rules = state.autopilotRules || {};
  const mine = autopilotProfileSkills(state).map(skill => String(skill).toLowerCase());
  const hits = job.skills.filter(skill => {
    const want = skill.toLowerCase();
    return mine.some(have => have === want || have.includes(want) || want.includes(have));
  });
  const reasons = [];
  const threshold = Number(rules.threshold) || 0;
  if (threshold && job.match < threshold) reasons.push(`Match ${job.match}% is below your ${threshold}% rule.`);
  // Job salaries are now stored as monthly (matching the app-wide RM/month
  // convention), so compare directly against the user's monthly min-salary
  // rule - no annualization.
  const minSalary = Number(rules.salary) || 0;
  if (minSalary && autopilotSalaryMax(job) < minSalary) reasons.push(`Salary tops out below RM ${minSalary.toLocaleString()} / month.`);
  if (rules.location && !`${job.location} ${job.type}`.toLowerCase().includes(rules.location.trim().toLowerCase())) {
    reasons.push(`Outside your location rule "${rules.location}".`);
  }
  if (rules.exclude) {
    const banned = rules.exclude.split(",").map(word => word.trim().toLowerCase()).filter(Boolean);
    const hay = `${job.title} ${job.company} ${job.industry} ${job.type}`.toLowerCase();
    const blocked = banned.find(word => hay.includes(word));
    if (blocked) reasons.push(`Matches your exclude rule "${blocked}".`);
  }
  return { eligible: !reasons.length, reasons, hits };
}

function autopilotQueue(state) {
  return DATA.jobs
    .filter(job => !state.ignoredJobs.includes(job.id))
    .filter(job => {
      const record = state.applicationRecords?.[job.id];
      return !record || record.stage === "saved";
    })
    .map(job => ({ job, ...autopilotAssessJob(job, state) }))
    .sort((a, b) => Number(b.eligible) - Number(a.eligible) || b.job.match - a.job.match);
}

function logAutopilotEvent(state, entry) {
  state.autopilotLog = [
    { id: `ap-${Date.now()}-${entry.jobId}`, at: nowStamp(), ...entry },
    ...(Array.isArray(state.autopilotLog) ? state.autopilotLog : [])
  ].slice(0, 30);
}

function autopilotTimeLabel(at) {
  const stamp = new Date(at);
  if (Number.isNaN(stamp.getTime())) return "Just now";
  const mins = Math.round((Date.now() - stamp.getTime()) / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return stamp.toLocaleDateString("en-MY", { month: "short", day: "numeric" });
}

function autopilotApplyJob(jobId) {
  const job = DATA.jobs.find(item => item.id === jobId);
  if (!job) return;
  updateApplicationStage(jobId, "applied");
  const next = readState();
  const { hits } = autopilotAssessJob(job, next);
  next.applicationRecords[jobId] = {
    ...next.applicationRecords[jobId],
    viaAutopilot: true,
    nextAction: "Vera applied with a tailored resume. Watch for the recruiter's first reply."
  };
  logAutopilotEvent(next, {
    jobId,
    title: job.title,
    company: job.company,
    status: "applied",
    reason: hits.length
      ? `${job.match}% match - your profile covers ${hits.slice(0, 3).join(", ")}.`
      : `${job.match}% match with your target role and rules.`
  });
  writeState(syncCurrentUser(next));
}

function runAutopilot() {
  const state = readState();
  const scanOnly = Boolean(state.autopilotRules.scanOnly);
  const eligible = autopilotQueue(state).filter(item => item.eligible);
  if (!eligible.length) {
    showToast("Scan complete. No new roles pass your rules right now.");
    renderAutopilot();
    return;
  }
  if (scanOnly) {
    showToast(`Scan complete. ${eligible.length} role${eligible.length === 1 ? "" : "s"} pass your rules - turn Autopilot on to let Vera apply.`);
    renderAutopilot();
    return;
  }
  eligible.forEach(item => autopilotApplyJob(item.job.id));
  showToast(`Vera applied to ${eligible.length} role${eligible.length === 1 ? "" : "s"} within your rules.`);
  renderAutopilot();
}

let pipelineActiveTab = "applications";
// Remembers which Live pipeline column is open across re-renders (moving a card
// re-renders the page, and losing the user's place would be jarring).
let pipelineActiveStageIndex = 0;

const AUTOPILOT_MATCHES = [
  { id: "ap-grab-product-analyst", org: "grab", title: "Product Analyst", company: "Grab", match: 86, mode: "Queue for review", location: "Kuala Lumpur", workMode: "Hybrid", salary: "RM 5,500 - RM 7,500 / month", found: "Found 2 hours ago", why: "Matches your salary floor, product analytics interest and hybrid preference.", watch: "Requires SQL case study." },
  { id: "ap-setel-apm", org: "setel", title: "Associate Product Manager", company: "Setel", match: 91, mode: "Save automatically", location: "Kuala Lumpur", workMode: "Hybrid", salary: "RM 8,000 - RM 11,000 / month", found: "Found 4 hours ago", why: "Fintech match + hybrid + saved company. Above match threshold.", watch: "" },
  { id: "ap-carsome-pm-growth", org: "carsome", title: "Product Manager, Growth", company: "Carsome", match: 82, mode: "Queue for review", location: "Kuala Lumpur", workMode: "Hybrid", salary: "RM 11,000 - RM 15,000 / month", found: "Found Yesterday", why: "Strong marketplace fit; alumni signal.", watch: "Company size preference uncertain (2,000+)." },
  { id: "ap-aerodyne-ai-pm", org: "aerodyne", title: "AI Product Manager", company: "Aerodyne", match: 90, mode: "Recommend only", location: "Kuala Lumpur", workMode: "Hybrid", salary: "RM 15,000 - RM 20,000 / month", found: "Found Yesterday", why: "AI product exposure closes your top skill gap.", watch: "" },
  { id: "ap-storehub-senior-pm", org: "storehub", title: "Senior Product Manager (Remote)", company: "StoreHub", match: 89, mode: "Queue for review", location: "Remote", workMode: "MY - Remote", salary: "RM 13,000 - RM 17,000 / month", found: "Found 2 days ago", why: "Remote-first + async matches your working style.", watch: "" }
];

function apRoleActionState(state, roleId) {
  return {
    saved: (state.autopilotSavedRoles || []).includes(roleId),
    applied: (state.autopilotAppliedRoles || []).includes(roleId)
  };
}

function pushAutopilotLog(state, entry) {
  return [entry, ...(Array.isArray(state.autopilotLog) ? state.autopilotLog : [])].slice(0, 8);
}

function toggleApSaveRole(role) {
  const next = readState();
  const list = Array.isArray(next.autopilotSavedRoles) ? next.autopilotSavedRoles : [];
  const isSaved = list.includes(role.id);
  next.autopilotSavedRoles = isSaved ? list.filter(id => id !== role.id) : [...list, role.id];
  if (!isSaved) {
    next.autopilotLog = pushAutopilotLog(next, { time: "Just now", status: "Saved", tone: "teal", title: `${role.title} at ${role.company}`, body: "Added to your shortlist from Autopilot matches." });
  }
  writeState(syncCurrentUser(next));
  showToast(isSaved ? "Removed from your shortlist." : "Saved to your shortlist.");
}

function applyApRole(role) {
  const next = readState();
  const applied = Array.isArray(next.autopilotAppliedRoles) ? next.autopilotAppliedRoles : [];
  if (applied.includes(role.id)) {
    showToast("Already queued for application.");
    return;
  }
  next.autopilotAppliedRoles = [...applied, role.id];
  const saved = Array.isArray(next.autopilotSavedRoles) ? next.autopilotSavedRoles : [];
  if (!saved.includes(role.id)) next.autopilotSavedRoles = [...saved, role.id];
  next.autopilotLog = pushAutopilotLog(next, { time: "Just now", status: "Queued", tone: "tan", title: `${role.title} at ${role.company}`, body: "Vera prepared a tailored application - review it before it sends." });
  writeState(syncCurrentUser(next));
  showToast(`Vera queued a tailored application for ${role.title} at ${role.company}.`);
}

function dismissApRole(role) {
  const next = readState();
  const dismissed = Array.isArray(next.autopilotDismissedRoles) ? next.autopilotDismissedRoles : [];
  if (dismissed.includes(role.id)) return;
  next.autopilotDismissedRoles = [...dismissed, role.id];
  next.autopilotLog = pushAutopilotLog(next, { time: "Just now", status: "Dismissed", tone: "tan", title: `${role.title} at ${role.company}`, body: "Vera will not surface this role again." });
  writeState(syncCurrentUser(next));
  showToast("Vera will not surface this role again.");
}

function autopilotMatchSalaryMax(role) {
  // Robust to BOTH "k" format ("RM 6.8k - 9.7k / month" -> 9700) and comma
  // format ("RM 5,500 - RM 7,500 / month" -> 7500), all monthly. The old
  // [\d,]+ parse ignored the "k" (so "RM 14k" compared as 14 < 5000 and was
  // wrongly flagged) and split "5,500" into 5 and 500.
  const s = String(role.salary || "");
  const numbers = (s.match(/\d[\d,]*(?:\.\d+)?/g) || []).map(n => Number(n.replace(/,/g, "")));
  if (!numbers.length) return 0;
  const max = Math.max(...numbers);
  return /k/i.test(s) ? max * 1000 : max;
}

function autopilotWeeklyAutoApplyCount(state) {
  const log = Array.isArray(state.autopilotAutoApplyLog) ? state.autopilotAutoApplyLog : [];
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  return log.filter(entry => new Date(entry.at).getTime() >= weekAgo).length;
}

function autopilotAutoApplyEligibility(role, rules, state) {
  const reasons = [];
  const threshold = Number(rules.autoApplyThreshold) || 85;
  if (role.match < threshold) reasons.push(`${role.match}% match is below your ${threshold}% auto-apply threshold.`);
  const minSalary = Number(rules.minSalary) || 0;
  if (minSalary && autopilotMatchSalaryMax(role) < minSalary) reasons.push(`Salary tops out below RM ${minSalary.toLocaleString()} / month.`);
  const avoidCompanies = String(rules.avoidCompanies || "").split(",").map(v => v.trim().toLowerCase()).filter(Boolean);
  if (avoidCompanies.some(name => role.company.toLowerCase().includes(name))) reasons.push(`${role.company} is on your avoid-companies list.`);
  const avoidKeywords = String(rules.avoidKeywords || "").split(",").map(v => v.trim().toLowerCase()).filter(Boolean);
  const hay = `${role.title} ${role.company} ${role.why || ""}`.toLowerCase();
  const blockedKeyword = avoidKeywords.find(word => hay.includes(word));
  if (blockedKeyword) reasons.push(`Matches your avoid-keywords rule "${blockedKeyword}".`);
  const excludedRoles = String(rules.excludedRoles || "").split(",").map(v => v.trim().toLowerCase()).filter(Boolean);
  if (excludedRoles.some(word => role.title.toLowerCase().includes(word))) reasons.push(`Title matches your excluded-roles rule.`);
  const cap = Number(rules.autoApplyCap) || 0;
  const used = autopilotWeeklyAutoApplyCount(state);
  if (cap && used >= cap) reasons.push(`Weekly auto-apply cap (${cap}) already reached.`);
  return { eligible: !reasons.length, reasons };
}

function createAutopilotApplicationRecord(role) {
  const now = nowStamp();
  return {
    jobId: role.id,
    stage: "applied",
    savedAt: "Today",
    appliedAt: "Today",
    deadline: "This week",
    nextAction: "Vera auto-applied with a tailored resume. Watch for the recruiter's first reply.",
    note: `Auto-applied at ${role.match}% match - ${role.why || "matches your Autopilot rules"}.`,
    updatedLabel: "Just now",
    viaAutopilot: true,
    timeline: [
      { label: "Saved role", date: "Today", done: true },
      { label: "Resume tailored", date: "Today", done: true },
      { label: "Applied", date: "Today", done: true },
      { label: "Screening", date: "Pending", done: false },
      { label: "Interview", date: "Pending", done: false },
      { label: "Outcome", date: "Pending", done: false }
    ],
    updatedAt: now
  };
}

let autopilotAutoApplyCheckedThisLoad = false;

function runAutoApply(state) {
  if (autopilotAutoApplyCheckedThisLoad) return { state, applied: [] };
  autopilotAutoApplyCheckedThisLoad = true;
  const rules = state.autopilotRules || {};
  if (rules.actionMode !== "autoapply" || state.autopilotPaused) return { state, applied: [] };
  const dismissed = Array.isArray(state.autopilotDismissedRoles) ? state.autopilotDismissedRoles : [];
  const alreadyApplied = Array.isArray(state.autopilotAppliedRoles) ? state.autopilotAppliedRoles : [];
  const excluded = Array.isArray(state.autopilotAutoApplyExcluded) ? state.autopilotAutoApplyExcluded : [];
  const candidates = AUTOPILOT_MATCHES.filter(role => !dismissed.includes(role.id) && !alreadyApplied.includes(role.id) && !excluded.includes(role.id));
  const applied = [];
  candidates.forEach(role => {
    const { eligible } = autopilotAutoApplyEligibility(role, rules, state);
    if (!eligible) return;
    state.autopilotAppliedRoles = [...(Array.isArray(state.autopilotAppliedRoles) ? state.autopilotAppliedRoles : []), role.id];
    const savedRoles = Array.isArray(state.autopilotSavedRoles) ? state.autopilotSavedRoles : [];
    if (!savedRoles.includes(role.id)) state.autopilotSavedRoles = [...savedRoles, role.id];
    state.applicationRecords = { ...(state.applicationRecords || {}), [role.id]: createAutopilotApplicationRecord(role) };
    const now = nowStamp();
    state.autopilotAutoApplyLog = [{ id: `apauto-${Date.now()}-${role.id}`, roleId: role.id, at: now }, ...(Array.isArray(state.autopilotAutoApplyLog) ? state.autopilotAutoApplyLog : [])];
    state.autopilotLog = pushAutopilotLog(state, { time: "Just now", status: "Applied", tone: "teal", title: `${role.title} at ${role.company}`, body: `Auto-applied at ${role.match}% match, within your rules and weekly cap.`, autoApplyLogId: state.autopilotAutoApplyLog[0].id });
    pushNotification(state, { id: `n-autoapply-${Date.now()}-${role.id}`, type: "autopilot", title: "Vera auto-applied for you", body: `${role.title} at ${role.company} - ${role.match}% match. Review it in Autopilot's Activity log.`, href: "autopilot.html#autopilot-console" });
    applied.push(role);
  });
  return { state, applied };
}

function undoAutoApply(autoApplyLogId) {
  const state = readState();
  const entry = (state.autopilotAutoApplyLog || []).find(item => item.id === autoApplyLogId);
  if (!entry) return;
  state.autopilotAutoApplyLog = state.autopilotAutoApplyLog.filter(item => item.id !== autoApplyLogId);
  state.autopilotAppliedRoles = (state.autopilotAppliedRoles || []).filter(id => id !== entry.roleId);
  const excluded = Array.isArray(state.autopilotAutoApplyExcluded) ? state.autopilotAutoApplyExcluded : [];
  if (!excluded.includes(entry.roleId)) state.autopilotAutoApplyExcluded = [...excluded, entry.roleId];
  if (state.applicationRecords) delete state.applicationRecords[entry.roleId];
  const role = AUTOPILOT_MATCHES.find(item => item.id === entry.roleId);
  state.autopilotLog = pushAutopilotLog(state, { time: "Just now", status: "Rule changed", tone: "tan", title: role ? `${role.title} at ${role.company}` : "Auto-applied role", body: "Auto-application undone - reverted to Saved. Vera will not auto-apply to this role again." });
  writeState(syncCurrentUser(state));
  showToast("Auto-application undone.");
  renderAutopilot();
  renderDashboard();
}

function apRuleCardFor(role) {
  const text = `${role.why || ""} ${role.watch || ""}`.toLowerCase();
  if (/salary|remote|hybrid|location|relocate|on-site/.test(text)) return 2;
  if (/compan(y|ies) size|industry|fintech|culture|marketplace|alumni/.test(text)) return 3;
  if (/skill|threshold|match|portfolio|exposure/.test(text)) return 5;
  return 1;
}

function renderAutopilot() {
  const root = qs("[data-autopilot]");
  if (!root) return;
  if (!requireAccount(root, "use Autopilot")) return;
  if (needsOnboarding(root)) return;
  const state = readState();
  if (state.session.loggedIn) {
    const autoApplyResult = runAutoApply(state);
    if (autoApplyResult.applied.length) {
      writeState(syncCurrentUser(state));
      showToast(`Vera auto-applied to ${autoApplyResult.applied.length} role${autoApplyResult.applied.length === 1 ? "" : "s"} within your rules.`);
    }
    const urgencyRank = { Urgent: 0, High: 1, Medium: 2 };
    const impactTasks = [
      ["Reply to Grab recruiter", "Grab responds within 48h - silence past today drops your callback rate by 31%.", "+14% interview odds", "5 min", "Draft reply", "Urgent"],
      ["Finish Airtable take-home", "Deadline is Friday EOD. Late submissions are rejected 82% of the time.", "Keeps offer alive", "2 hrs", "Open brief", "High"],
      ["Prep for Stripe Round 2", "Tue 2:30 PM. Your product-sense score is 68 - Vera has 3 targeted drills.", "+21% pass rate", "45 min", "Start drill", "High"],
      ["Ask Priya for a Notion referral", "Referrals get 4.2x more responses at Notion. Priya opened your last DM.", "Unlocks 1 warm intro", "3 min", "Compose ask", "Medium"]
    ].sort((a, b) => urgencyRank[a[5]] - urgencyRank[b[5]]);
    const pipelineBoard = pipelineBoardData(state);
    const pipelineTrackedTotal = pipelineBoard.reduce((sum, column) => sum + column.items.length, 0);
    const pipelineActiveTotal = pipelineBoard
      .filter(column => column.kind === "active")
      .reduce((sum, column) => sum + column.items.length, 0);
    const pipelineInterviewTotal = (pipelineBoard.find(column => column.key === "interview")?.items.length) || 0;
    const pipelineOfferTotal = (pipelineBoard.find(column => column.key === "offer")?.items.length) || 0;
    if (pipelineActiveStageIndex >= pipelineBoard.length) pipelineActiveStageIndex = 0;
    const memory = [
      ["Last month", "1 conversation", "0 interviews - 0 offers"],
      ["3 weeks ago", "4 conversations", "1 recruiter reply"],
      ["Last week", "8 conversations", "3 interviews booked"],
      ["Today", "12 conversations", "2 offers within reach"]
    ];
    const relationships = [
      ["Grab Malaysia", "Aisha Rahman - Talent Lead", 88, "Opened your note 2h ago", "Viewed profile - Warm intro exists", "Reply probability 88% - Best time: Today, before 6 PM", "Draft reply"],
      ["Stripe APAC", "Priya Menon - PM Manager", 74, "Rated your intro 4.5/5 last Thu", "Round 2 scheduled - flagged strong storytelling", "Reply probability 71% - Best time: Send thank-you after Tue interview", "Compose note"],
      ["Notion", "Priya Wong - 2nd-degree connection", 42, "Opened your last DM - no reply", "Referral available - has posted about hiring", "Reply probability 38% - Best time: Nudge with a soft ask this week", "Ask for referral"]
    ];
    const calendar = [
      ["Tue", "07", "Stripe - Round 2", "Product sense - with Priya Menon", "2:30 PM", "video"],
      ["Wed", "08", "Grab MY - recruiter chat", "30 min - intro call", "11:00 AM", "message-square"],
      ["Fri", "10", "Airtable - take-home due", "Case: pricing for platform tier", "EOD", "file-text"],
      ["Mon", "13", "Aerodyne - offer discussion", "Bring Fair Pay data - negotiation", "4:00 PM", "handshake"]
    ];
    const followUps = [
      ["Grab Malaysia", "Reply to Aisha - she opened your last note 2h ago.", "Draft with Vera", "send"],
      ["Notion", "Ask Priya for a warm referral (2nd-degree connection).", "Compose ask", "message-square"],
      ["Aerodyne", "Negotiate offer up to RM 10,300 - 72% accept rate.", "Generate script", "handshake"],
      ["Stripe", "Thank-you note to Priya after Round 2.", "Send now", "check-circle"]
    ];
    const signals = [
      "Your interview probability rose 4% overnight because two recruiters viewed your profile yesterday.",
      "Applications sent on Tuesday morning get replies 1.8x faster than the rest of the week for your archetype.",
      "Every offer in your pipeline is at a Malaysian company that pays above your current Fair Pay range."
    ];
    const esc = value => String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const apRules = state.autopilotRules || {};
    const selected = (list, value) => (Array.isArray(list) ? list : []).includes(value);
    const apMatches = AUTOPILOT_MATCHES.filter(role => !(state.autopilotDismissedRoles || []).includes(role.id));
    const apActivityLog = [
      { time: "2:14 PM", status: "Skipped", tone: "tan", title: "Product Analyst at Grab", body: "Salary below RM 5,000 floor." },
      { time: "1:30 PM", status: "Saved", tone: "teal", title: "Data Analyst at Maybank", body: "Matched salary, location and SQL requirement." },
      { time: "12:05 PM", status: "Queued", tone: "tan", title: "Product Associate at Shopee", body: "Strong match but company size preference uncertain." },
      { time: "10:48 AM", status: "Scanned", tone: "tan", title: "Growth PM at iflix", body: "Below match threshold (68%)." },
      { time: "09:20 AM", status: "Recommended", tone: "teal", title: "AI Product Manager at Aerodyne", body: "Above 85% match; matches saved AI PM path." },
      { time: "Yesterday", status: "Applied", tone: "teal", title: "APM at Setel", body: "Auto-apply enabled for saved companies at 90%+ match." },
      { time: "Yesterday", status: "Dismissed", tone: "tan", title: "Sales PM at Anonymous", body: "Company missing name - required rule." },
      { time: "2 days ago", status: "Rule changed", tone: "tan", title: "Ruleset updated", body: "Raised salary floor from RM 4,500 to RM 5,000." }
    ];
    const apActionModes = [
      { key: "recommend", title: "Recommend only", body: "Autopilot finds matches and shows them to you." },
      { key: "save", title: "Save automatically", body: "Autopilot saves jobs that meet your rules." },
      { key: "queue", title: "Queue for review", body: "Autopilot prepares applications but asks you before applying." },
      { key: "autoapply", title: "Auto-apply", body: "Autopilot applies only when all required rules are met." }
    ];
    const apStrictnessCaptions = { Strict: "Only near-perfect matches.", Balanced: "Strong matches with minor gaps.", Open: "Wider net, more roles to review." };
    const apPaused = Boolean(state.autopilotPaused);
    const apScanned = 128;
    const apStrongMatches = apMatches.filter(role => role.match >= 85).length;
    const apSavedCount = (state.autopilotSavedRoles || []).length;
    const apAppliedCount = (state.autopilotAppliedRoles || []).length;
    const apAutoAppliedCount = (state.autopilotAutoApplyLog || []).length;
    const apAutoApplyCap = Number(apRules.autoApplyCap) || 0;
    const apAutoApplyUsedThisWeek = autopilotWeeklyAutoApplyCount(state);
    const apNeedsReview = apMatches.filter(role => role.mode === "Queue for review").length;
    const apLastScan = (apMatches[0]?.found || "Found recently").replace(/^Found /, "");
    const apRestrictiveFilters = [
      apRules.workArrangement?.length === 1 ? apRules.workArrangement[0].toLowerCase() + "-only" : null,
      apRules.minSalary ? `RM ${esc(apRules.minSalary)} salary floor` : null
    ].filter(Boolean).join(" and ");
    const apInsight = apRestrictiveFilters
      ? `Your ${apRestrictiveFilters} rule${apRestrictiveFilters.includes(" and ") ? "s" : ""} may be filtering out roles that are otherwise a strong fit. Loosening it slightly could surface more matches this week.`
      : `Your ${(apRules.strictness || "Balanced").toLowerCase()} match rules and ${apRules.threshold || 75}% threshold currently return ${apMatches.length} role${apMatches.length === 1 ? "" : "s"}. Widening the threshold a little could surface more.`;
    const autopilotHashTargets = ["#autopilot-console", "#autopilot-matches", "#autopilot-activity-log"];
    const pipelineApplicationsHashTargets = ["#pipeline-impact", "#pipeline-board"];
    if (autopilotHashTargets.includes(location.hash)) pipelineActiveTab = "autopilot";
    else if (pipelineApplicationsHashTargets.includes(location.hash)) pipelineActiveTab = "applications";
    root.innerHTML = appShell("autopilot", `
      <section class="cg-pipeline">
        <div class="cg-pipeline-tabs" data-pipeline-tabs>
          <button type="button" class="${pipelineActiveTab === "applications" ? "active" : ""}" data-pipeline-view="applications">Applications</button>
          <button type="button" class="${pipelineActiveTab === "autopilot" ? "active" : ""}" data-pipeline-view="autopilot">Autopilot</button>
          <button type="button" class="${pipelineActiveTab === "followups" ? "active" : ""}" data-pipeline-view="followups">Follow-ups</button>
        </div>

        <div class="cg-pipeline-view${pipelineActiveTab === "applications" ? " active" : ""}" data-pipeline-panel-view="applications">
        <header class="cg-pipeline-hero">
          <h1>Your <em>Application Pipeline.</em></h1>
          <p>Vera is tracking ${pipelineTrackedTotal} role${pipelineTrackedTotal === 1 ? "" : "s"} across your funnel${pipelineOfferTotal ? `, with ${pipelineOfferTotal} offer${pipelineOfferTotal === 1 ? "" : "s"} on the table` : ""}. Predicted first offer: <strong>28 Nov - 64% confidence.</strong></p>
          <button type="button" class="btn btn-primary" data-pipeline-add="saved">${icon("plus")} Add application</button>
        </header>

        <section class="cg-pipeline-kpis">
          ${[
            ["Active applications", String(pipelineActiveTotal), `${pipelineTrackedTotal} tracked in total`, "file-text"],
            ["Interviewing", String(pipelineInterviewTotal), pipelineInterviewTotal ? "Keep the momentum up" : "Land your first loop", "video"],
            ["Offers", String(pipelineOfferTotal), pipelineOfferTotal ? "Compare before you accept" : "None yet - stay consistent", "trophy"],
            ["If you apply to 5 more matches", "3 offers", "Vera can queue them", "zap"]
          ].map(([label, value, body, ic], index) => `<article class="${index === 3 ? "dark" : ""}"><span>${label}${icon(ic)}</span><strong>${value}</strong><p>${body}</p>${index === 3 ? `<button type="button" class="cg-pipeline-kpi-link" data-pipeline-add="saved">Add a role ${icon("arrow-right")}</button>` : ""}</article>`).join("")}
        </section>

        <section class="cg-pipeline-one-move">
          <header><span>${icon("flame")} The one move today</span><small>Beats the next-best action by 2.3x</small></header>
          <div>
            <article>
              <h2>Reply to Aisha at <em>Grab</em> before 6 PM.</h2>
              <p>She opened your last note 2 hours ago and rated your intro 4.5/5. Grab's recruiters typically ghost after 48h of silence - you have roughly 9 hours of goodwill left.</p>
              <div><span>${icon("trending-up")} +14% interview odds</span><span>${icon("clock")} 5 min</span><span>${icon("target")} 88% reply probability</span></div>
              <footer><a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent("drafting a reply to Aisha at Grab")}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Draft with Vera</a><a class="btn btn-ghost" href="posts.html?topic=${encodeURIComponent("why replying to Aisha at Grab is today's top move")}#messages">Why this one? ${icon("arrow-right")}</a></footer>
            </article>
            <aside>
              <span>Why Vera picked this</span>
              <p>${icon("check-circle-2")} Warmest signal in your pipeline right now.</p>
              <p>${icon("check-circle-2")} Grab is your highest Career Value employer - RM 10.3k band.</p>
              <p>${icon("check-circle-2")} Every hour of delay costs ~1.5% callback rate.</p>
            </aside>
          </div>
        </section>

        <section class="cg-pipeline-impact" id="pipeline-impact">
          <header class="cg-pipeline-impact-toggle-row" data-pipeline-impact-toggle role="button" tabindex="0" aria-expanded="false" aria-controls="cg-pipeline-impact-list">
            <div class="cg-pipeline-impact-heading">
              <span class="cg-pipeline-impact-icon"><img src="assets/vera-ai-coach.png" alt="Vera AI"></span>
              <span class="cg-pipeline-impact-eyebrow">Vera &middot; Today's highest impact</span>
            </div>
            <div class="cg-pipeline-impact-header-right">
              <small>${icon("clock")} ~3 hr total</small>
              <span class="cg-pipeline-impact-chevron">${icon("chevron-down")}</span>
            </div>
          </header>
          <div class="cg-pipeline-impact-list" id="cg-pipeline-impact-list">
            <div class="cg-pipeline-impact-list-inner">
              ${impactTasks.map(([title, body, lift, time, action], index) => `
                <article>
                  <span>${index + 1}</span>
                  <div><h3>${title}</h3><p>${body}</p><small><b>${icon("trending-up")} ${lift}</b><b>${icon("clock")} ${time}</b></small></div>
                  <a href="posts.html?topic=${encodeURIComponent(title)}#messages">${icon("sparkles")} ${action}</a>
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        <div class="cg-pipeline-board-head" id="pipeline-board">
          <h2>Live pipeline</h2>
          <span>${icon("info")} Employers move you as they review - or update any card yourself.</span>
        </div>
        <section class="cg-pipeline-board-section">
          <div class="cg-pipeline-board">
            <nav class="cg-pipeline-stage-nav">
              ${pipelineBoard.map((column, index) => `
                <div class="cg-pipeline-stage-row">
                  <button type="button" class="cg-pipeline-stage-btn${index === pipelineActiveStageIndex ? " active" : ""}" data-pipeline-stage="${index}">
                    <span>${column.label}</span><b>${column.items.length}</b>
                  </button>
                  <button type="button" class="cg-pipeline-stage-add" data-pipeline-add="${column.addStage}" aria-label="Add role to ${column.label}">${icon("plus")}</button>
                </div>
              `).join("")}
            </nav>
            <div class="cg-pipeline-stage-panel">
              ${pipelineBoard.map((column, index) => `
                <article class="cg-pipeline-column${index === pipelineActiveStageIndex ? " active" : ""}" data-pipeline-panel="${index}">
                  ${column.items.length
                    ? column.items.map(item => pipelineBoardCardMarkup(column, item)).join("")
                    : `<div class="cg-pipeline-empty">
                        <span>${icon(column.kind === "saved" ? "bookmark" : "inbox")}</span>
                        <p>${column.kind === "saved" ? "No saved roles yet. Bookmark roles you're interested in from Discover." : `Nothing in ${column.label.toLowerCase()} yet.`}</p>
                        <button type="button" class="cg-pipeline-empty-add" data-pipeline-add="${column.addStage}">${icon("plus")} Add a role</button>
                      </div>`}
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="cg-pipeline-memory">
          <span class="cg-section-kicker">${icon("history")} Vera remembers</span>
          <h2>Four weeks ago you had one conversation. Today you have twelve.</h2>
          <p>Momentum is the strongest signal in your forecast. Here's how it's been building.</p>
          <div>${memory.map(([label, value, body], index) => `<article class="${index === memory.length - 1 ? "active" : ""}"><span>${label}</span><strong>${value}</strong><p>${body}</p></article>`).join("")}</div>
          <footer>Vera - your offer probability is up <strong>+12%</strong> this week, mostly because your resume quality score jumped and Grab's recruiter engaged. If you keep this pace, expect <strong>2 offers by 28 Nov</strong> (64% confidence, widens as more evidence comes in).</footer>
        </section>

        <section class="cg-pipeline-ripple">
          <span class="cg-section-kicker">${icon("zap")} How one action ripples through CareerGo</span>
          <h2>Finish SQL in Grow. Watch every other page shift.</h2>
          <p class="cg-h2-sub">One completed skill updates your missions, market value, pipeline odds, and daily brief.</p>
          <div>
            <article><span>Grow</span><p>SQL sprint becomes today's mission - 4 days of drills queued.</p></article>
            <article><span>Worth</span><p>Career Value rises +RM 900 / month within 3 weeks.</p></article>
            <article class="active"><span>Pipeline</span><p>+21% pass rate at Stripe Round 2 - unlocks Setel + BigPay.</p></article>
            <article><span>Today</span><p>Interview readiness moves from 68 -> 79 by Friday.</p></article>
          </div>
        </section>

        <section class="cg-pipeline-review">
          <article>
            <span class="cg-section-kicker">${icon("chart-no-axes-column-increasing")} Week in review</span>
            <h2>Your job search is <em>accelerating.</em></h2>
            <p>Offer probability rose <strong>+12%</strong> this week. Vera credits your improved resume and faster recruiter replies.</p>
            <a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent("planning next week's job search")}#messages"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Plan next week with Vera</a>
          </article>
          <div>
            ${[["Applications sent", "6"], ["Recruiters replied", "3"], ["Interviews booked", "2"], ["Offer probability", "+12%", "up", "teal"], ["Biggest win", "Resume quality"], ["Biggest blocker", "SQL screening", null, "amber"]].map(([label, value, ic, tone]) => `<section><span>${label}</span><strong class="${tone ? `tone-${tone}` : ""}">${ic ? icon("arrow-up") : ""}${value}</strong></section>`).join("")}
          </div>
          <footer>${icon("info")} Recommended focus next week - <strong>Practice SQL interviews.</strong> Vera has a 4-day plan queued in Grow. <a href="grow.html">Open plan ${icon("arrow-right")}</a></footer>
        </section>
        </div>

        <div class="cg-pipeline-view cg-ap-view${pipelineActiveTab === "autopilot" ? " active" : ""}" data-pipeline-panel-view="autopilot">
        <section class="cg-ap-hero">
          <span class="cg-ap-hero-badge">${icon("bot")} Autopilot</span>
          <h1>Let CareerGo <em>search</em> while you focus.</h1>
          <p>Set your rules once. Autopilot scans opportunities, filters out noise and surfaces only the roles that genuinely match your standards. You stay in control - Autopilot never applies unless you tell it to.</p>
          <div class="cg-ap-status-card">
            <div class="cg-ap-status-row">
              <div class="cg-ap-status-left">
                <span class="cg-ap-status-pill${apPaused ? " is-paused" : ""}">${icon(apPaused ? "pause" : "radio")} Autopilot ${apPaused ? "paused" : "ON"}</span>
                <span class="cg-ap-status-scan">${icon("clock")} Last scan &middot; ${apLastScan}</span>
              </div>
              <div class="cg-ap-status-actions">
                <button type="button" class="btn btn-ghost" data-ap-pause-toggle>${icon(apPaused ? "play" : "pause")} ${apPaused ? "Resume" : "Pause"}</button>
                <a class="btn btn-ghost" href="#autopilot-console" data-ap-scroll-to="autopilot-console">${icon("settings-2")} Edit rules</a>
                <a class="btn btn-ghost" href="#autopilot-activity-log" data-ap-scroll-to="autopilot-activity-log">${icon("history")} Activity log</a>
              </div>
            </div>
            <div class="cg-ap-stat-row">
              <div><span>Scanned</span><strong>${apScanned}</strong></div>
              <div><span>Strong matches</span><strong>${apStrongMatches}</strong></div>
              <div><span>Saved</span><strong>${apSavedCount}</strong></div>
              <div><span>Applied</span><strong>${apAppliedCount}${apAutoAppliedCount ? ` <small class="cg-ap-auto-badge">(${apAutoAppliedCount} auto)</small>` : ""}</strong></div>
              <div><span>Needs review</span><strong>${apNeedsReview}</strong></div>
            </div>
            <div class="cg-ap-insight" data-ap-insight>
              <span class="cg-ap-insight-label">${icon("sparkles")} Vera noticed</span>
              <p>${apInsight}</p>
              <div class="cg-ap-insight-actions">
                <a class="btn btn-primary" href="posts.html?topic=${encodeURIComponent("adjusting my Autopilot rules to surface more matches")}#messages">Draft rule change</a>
                <button type="button" class="btn btn-ghost" data-ap-insight-dismiss>Not now</button>
              </div>
            </div>
          </div>
        </section>

        <section class="cg-ap-matches" id="autopilot-matches">
          <header>
            <div>
              <span class="cg-section-kicker">${icon("bot")} Autopilot found for you</span>
              <h1>${apMatches.length} roles matched your rules</h1>
            </div>
            <button type="button" class="pill" data-ap-toast="Showing roles sorted by match percentage.">${icon("sliders-horizontal")} Sorted by match</button>
          </header>
          <div class="cg-ap-match-list">
            ${apMatches.length ? apMatches.map(role => {
              const { saved, applied } = apRoleActionState(state, role.id);
              const viaAutopilot = Boolean(state.applicationRecords?.[role.id]?.viaAutopilot);
              return `
              <article class="cg-ap-match-card">
                <div class="cg-ap-match-head">
                  <div class="cg-ap-match-title">
                    <h3>${role.title}</h3>
                    <span class="cg-ap-sep">&middot;</span>
                    <span class="cg-ap-company">${role.company}</span>
                    <span class="cg-ap-match-pct">${role.match}% match</span>
                    <span class="pill">${role.mode}</span>
                    ${viaAutopilot ? `<span class="pill cg-ap-auto-pill">${icon("bot")} Auto-applied</span>` : ""}
                  </div>
                  <span class="cg-ap-found">${role.found}</span>
                </div>
                <div class="cg-ap-match-meta">
                  <span>${icon("map-pin")} ${role.location} &middot; ${role.workMode}</span>
                  <span>${icon("briefcase")} ${role.salary}</span>
                </div>
                <div class="cg-ap-why">
                  <span class="cg-ap-why-label"><span class="cg-ap-why-icon"><img src="assets/vera-ai-coach.png" alt="Vera AI"></span> Why it matched</span>
                  <p>${role.why}</p>
                  ${role.watch ? `<p class="cg-ap-watch"><b>Watch:</b> ${role.watch}</p>` : ""}
                </div>
                <div class="cg-ap-match-actions">
                  <a class="btn btn-primary" href="job-detail.html?role=${encodeURIComponent(role.id)}">View job ${icon("chevron-right")}</a>
                  <button class="btn btn-ghost" type="button" data-ap-save="${role.id}">${icon(saved ? "bookmark-check" : "bookmark")} ${saved ? "Saved" : "Save"}</button>
                  <button class="btn btn-ghost" type="button" data-ap-apply="${role.id}"${applied ? " disabled" : ""}>${icon(applied ? "check" : "send")} ${viaAutopilot ? "Auto-applied" : applied ? "Applied" : "Apply"}</button>
                  <button class="btn btn-ghost" type="button" data-ap-dismiss="${role.id}">${icon("x")} Dismiss</button>
                  <button class="btn btn-ghost" type="button" data-ap-edit-rule="${role.id}">${icon("settings-2")} Edit rule</button>
                </div>
              </article>
            `;
            }).join("") : `<p class="cg-ap-matches-empty">${icon("check-circle-2")} You've reviewed every match. Vera keeps scanning and will surface new roles here.</p>`}
          </div>
        </section>

        <section class="cg-ap-ruleset" id="autopilot-console">
          <span class="cg-section-kicker">${icon("shield-check")} Ruleset</span>
          <h1>Tell Autopilot exactly what you want</h1>
          <form data-autopilot-ruleset-form>
            <article class="cg-ap-rule-card" data-rule-card="1">
              <h3>1. Role Targets</h3>
              <label class="cg-ap-field">Target roles<input name="roleTargets" value="${esc(apRules.roleTargets)}"></label>
              <div class="cg-ap-field-group">
                <div><span class="cg-ap-label">Experience level</span><div class="cg-ap-pillgroup" data-select-group="experienceLevels" data-select-mode="multi">
                  ${["Entry", "Junior", "Mid-level", "Senior"].map(v => `<button type="button" class="pill${selected(apRules.experienceLevels, v) ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
                </div></div>
                <div><span class="cg-ap-label">Employment type</span><div class="cg-ap-pillgroup" data-select-group="employmentTypes" data-select-mode="multi">
                  ${["Internship", "Full-time", "Part-time", "Contract", "Graduate programme"].map(v => `<button type="button" class="pill${selected(apRules.employmentTypes, v) ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
                </div></div>
              </div>
            </article>

            <article class="cg-ap-rule-card" data-rule-card="2">
              <h3>2. Salary &amp; Location</h3>
              <div class="cg-ap-field-row">
                <label class="cg-ap-field">Minimum salary<input name="minSalary" value="${esc(apRules.minSalary)}"></label>
                <label class="cg-ap-field">Currency<input name="currency" value="${esc(apRules.currency)}"></label>
              </div>
              <label class="cg-ap-field">Location<input name="rulesLocation" value="${esc(apRules.rulesLocation)}"></label>
              <div class="cg-ap-field-group">
                <div><span class="cg-ap-label">Work arrangement</span><div class="cg-ap-pillgroup" data-select-group="workArrangement" data-select-mode="multi">
                  ${["Remote", "Hybrid", "On-site"].map(v => `<button type="button" class="pill${selected(apRules.workArrangement, v) ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
                </div></div>
                <div><span class="cg-ap-label">Willing to relocate</span><div class="cg-ap-pillgroup" data-select-group="relocate" data-select-mode="single">
                  ${["Yes", "No"].map(v => `<button type="button" class="pill${apRules.relocate === v ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
                </div></div>
              </div>
            </article>

            <article class="cg-ap-rule-card" data-rule-card="3">
              <h3>3. Work Preferences</h3>
              <div><span class="cg-ap-label">Company size</span><div class="cg-ap-pillgroup" data-select-group="companySize" data-select-mode="multi">
                ${["Startup", "SME", "Large company", "MNC", "GLC"].map(v => `<button type="button" class="pill${selected(apRules.companySize, v) ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
              </div></div>
              <div><span class="cg-ap-label">Preferred industries</span><div class="cg-ap-pillgroup" data-select-group="industries" data-select-mode="multi">
                ${["Fintech", "SaaS", "AI", "Marketplace", "E-commerce"].map(v => `<button type="button" class="pill${selected(apRules.industries, v) ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
              </div></div>
              <div><span class="cg-ap-label">Culture signals</span><div class="cg-ap-pillgroup" data-select-group="cultureSignals" data-select-mode="multi">
                ${["Mentorship", "Training", "Work-life", "Fast growth", "Remote flex"].map(v => `<button type="button" class="pill${selected(apRules.cultureSignals, v) ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
              </div></div>
            </article>

            <article class="cg-ap-rule-card" data-rule-card="4">
              <h3>4. Company Preferences</h3>
              <label class="cg-ap-field">Preferred companies<input name="preferredCompanies" value="${esc(apRules.preferredCompanies)}"></label>
              <label class="cg-ap-field">Avoid companies<input name="avoidCompanies" value="${esc(apRules.avoidCompanies)}" placeholder="-"></label>
              <label class="cg-ap-field">Avoid industries<input name="avoidIndustries" value="${esc(apRules.avoidIndustries)}"></label>
              <label class="cg-ap-field">Avoid keywords<input name="avoidKeywords" value="${esc(apRules.avoidKeywords)}"></label>
            </article>

            <article class="cg-ap-rule-card" data-rule-card="5">
              <h3>5. Match Rules</h3>
              <div><span class="cg-ap-label">Strictness</span>
                <div class="cg-ap-strictness-row">
                  <div class="cg-ap-pillgroup" data-select-group="strictness" data-select-mode="single">
                    ${["Strict", "Balanced", "Open"].map(v => `<button type="button" class="pill${apRules.strictness === v ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
                  </div>
                  <small data-strictness-caption>${apStrictnessCaptions[apRules.strictness] || ""}</small>
                </div>
              </div>
              <label class="cg-ap-field">Minimum match threshold<input name="threshold" type="number" min="50" max="99" value="${esc(apRules.threshold || 75)}"></label>
              <label class="cg-ap-field">Required skills<input name="requiredSkills" value="${esc(apRules.requiredSkills)}"></label>
              <label class="cg-ap-field">Nice-to-have<input name="niceToHave" value="${esc(apRules.niceToHave)}"></label>
              <div class="cg-ap-field-group">
                <div><span class="cg-ap-label">Portfolio required?</span><div class="cg-ap-pillgroup" data-select-group="portfolioRequired" data-select-mode="single">
                  ${["Yes", "No"].map(v => `<button type="button" class="pill${apRules.portfolioRequired === v ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
                </div></div>
                <div><span class="cg-ap-label">Accept vague descriptions?</span><div class="cg-ap-pillgroup" data-select-group="acceptVague" data-select-mode="single">
                  ${["Yes", "No"].map(v => `<button type="button" class="pill${apRules.acceptVague === v ? " active" : ""}" data-select-value="${v}">${v}</button>`).join("")}
                </div></div>
              </div>
            </article>

            <article class="cg-ap-rule-card" data-rule-card="6">
              <h3>6. Exclusions</h3>
              <label class="cg-ap-field">Excluded roles / titles<input name="excludedRoles" value="${esc(apRules.excludedRoles)}"></label>
              <label class="cg-ap-field">Excluded industries<input name="excludedIndustries" value="${esc(apRules.excludedIndustries)}"></label>
            </article>

            <article class="cg-ap-rule-card" data-rule-card="7">
              <h3>7. Action Mode</h3>
              <div class="cg-ap-mode-grid" data-select-group="actionMode" data-select-mode="single">
                ${apActionModes.map(m => `
                  <button type="button" class="cg-ap-mode-card${apRules.actionMode === m.key ? " active" : ""}" data-select-value="${m.key}">
                    <strong>${apRules.actionMode === m.key ? `${icon("check")} ` : ""}${m.title}</strong>
                    <p>${m.body}</p>
                  </button>
                `).join("")}
              </div>
              ${apRules.actionMode === "autoapply" ? `
                <div class="cg-ap-autoapply-fields">
                  <label class="cg-ap-field">Auto-apply threshold (% match)<input name="autoApplyThreshold" type="number" min="50" max="99" value="${esc(apRules.autoApplyThreshold)}"></label>
                  <label class="cg-ap-field">Max auto-applies per week<input name="autoApplyCap" type="number" min="1" max="20" value="${esc(apRules.autoApplyCap)}"></label>
                  <p class="cg-ap-autoapply-note">${icon("shield-check")} ${apAutoApplyUsedThisWeek} of ${apAutoApplyCap || "unlimited"} auto-applies used this week.</p>
                </div>
              ` : ""}
            </article>

            <div class="cg-ap-save-row">
              <button class="btn btn-primary" type="submit">Save rules ${icon("arrow-right")}</button>
              <span>Rules apply on next scan. You can pause Autopilot anytime.</span>
            </div>
          </form>
        </section>

        <section class="cg-ap-activity" id="autopilot-activity-log">
          <span class="cg-section-kicker">${icon("history")} Autopilot activity</span>
          <h1>A transparent record of what Autopilot did</h1>
          <div class="cg-ap-log">
            ${[...(Array.isArray(state.autopilotLog) ? state.autopilotLog : []), ...apActivityLog].map(entry => `
              <article>
                <small>${entry.time}</small>
                <span class="pill cg-ap-status-${entry.tone}">${entry.status}</span>
                <div><h3>${entry.title}</h3><p>${entry.body}</p>${entry.autoApplyLogId ? `<button type="button" class="btn btn-ghost cg-ap-undo" data-ap-undo-autoapply="${entry.autoApplyLogId}">${icon("undo-2")} Undo</button>` : ""}</div>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-ap-safety">
          <span>${icon("shield-check")} Safety</span>
          <p>Autopilot will never apply to excluded companies, industries, roles below your salary floor, roles below your match threshold or roles missing key information. You can pause Autopilot or change any rule anytime.</p>
          ${apRules.actionMode === "autoapply" ? `<p class="cg-ap-safety-cap">${icon("gauge")} ${apAutoApplyUsedThisWeek} of ${apAutoApplyCap || "unlimited"} weekly auto-applies used. Every auto-application is logged above and can be undone.</p>` : ""}
        </section>
        </div>

        <div class="cg-pipeline-view${pipelineActiveTab === "followups" ? " active" : ""}" data-pipeline-panel-view="followups">
        <section class="cg-pipeline-relationships">
          <span class="cg-section-kicker">${icon("heart")} Relationships, not applications</span>
          <h2>Who to nurture. When to reach out.</h2>
          <p>Vera watches recruiter behaviour across your pipeline and tells you exactly when a warm signal is worth acting on.</p>
          ${relationships.map(([company, person, strength, signal, context, probability, action], index) => `
            <article>
              <div><h3>${company}</h3><p>${person}</p><i><em style="width:${strength}%"></em></i><small>Strength ${strength}</small></div>
              <div><p>${icon("eye")} ${signal}</p><p>${context}</p><p>${probability}</p></div>
              <a href="posts.html?topic=${encodeURIComponent(`${action} for ${person} at ${company}`)}#messages">${icon("sparkles")} ${action}</a>
            </article>
          `).join("")}
        </section>

        <section class="cg-pipeline-calendar-grid">
          <article class="cg-pipeline-calendar">
            <header><h2>${icon("calendar")} This week's calendar</h2><span>Synced with Google</span></header>
            ${calendar.map(([day, date, title, body, time, ic]) => `<section><time><span>${day}</span><strong>${date}</strong></time><div><h3>${title}</h3><p>${body}</p></div><small>${icon(ic)} ${time}</small></section>`).join("")}
          </article>
          <article class="cg-pipeline-followups">
            <header><h2>${icon("briefcase")} Vera's follow-up desk</h2><span>4 drafts ready</span></header>
            ${followUps.map(([name, body, action, ic]) => `<section><div><h3>${name}</h3><p>${body}</p></div><span>${icon(ic)}</span><a href="posts.html?topic=${encodeURIComponent(`${action} for ${name}`)}#messages">${icon("sparkles")} ${action}</a></section>`).join("")}
          </article>
        </section>

        <section class="cg-pipeline-signals">
          <span class="cg-section-kicker">${icon("sparkles")} Vera noticed</span>
          <h2>Signals you would have missed.</h2>
          <p class="cg-h2-sub">Patterns Vera spotted across your pipeline, profile views, and market data.</p>
          <div>${signals.map(signal => `<article><span>${icon("trending-up")}</span><p>${signal}</p></article>`).join("")}</div>
        </section>
        </div>
      </section>
      ${veraWidgetMarkup()}
    `);
    createIcons();
    if (autopilotHashTargets.includes(location.hash) || pipelineApplicationsHashTargets.includes(location.hash)) {
      window.setTimeout(() => qs(location.hash, root)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    }
    wireVeraWidget(root);
    qsa("[data-pipeline-view]", root).forEach(btn => btn.addEventListener("click", () => {
      pipelineActiveTab = btn.dataset.pipelineView;
      qsa("[data-pipeline-view]", root).forEach(b => b.classList.toggle("active", b === btn));
      qsa("[data-pipeline-panel-view]", root).forEach(panel => panel.classList.toggle("active", panel.dataset.pipelinePanelView === pipelineActiveTab));
      renderNavigation();
    }));
    qsa("[data-select-group]", root).forEach(group => {
      const key = group.dataset.selectGroup;
      const mode = group.dataset.selectMode;
      qsa("[data-select-value]", group).forEach(btn => btn.addEventListener("click", () => {
        const current = readState();
        const rules = current.autopilotRules || {};
        if (mode === "single") {
          current.autopilotRules = { ...rules, [key]: btn.dataset.selectValue };
        } else {
          const list = Array.isArray(rules[key]) ? rules[key] : [];
          const value = btn.dataset.selectValue;
          current.autopilotRules = { ...rules, [key]: list.includes(value) ? list.filter(v => v !== value) : [...list, value] };
        }
        writeState(syncCurrentUser(current));
        renderAutopilot();
      }));
    });
    qs("[data-autopilot-ruleset-form]", root)?.addEventListener("submit", event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const next = readState();
      next.autopilotRules = {
        ...next.autopilotRules,
        roleTargets: String(form.get("roleTargets") || "").trim(),
        minSalary: String(form.get("minSalary") || "").trim(),
        currency: String(form.get("currency") || "").trim(),
        rulesLocation: String(form.get("rulesLocation") || "").trim(),
        preferredCompanies: String(form.get("preferredCompanies") || "").trim(),
        avoidCompanies: String(form.get("avoidCompanies") || "").trim(),
        avoidIndustries: String(form.get("avoidIndustries") || "").trim(),
        avoidKeywords: String(form.get("avoidKeywords") || "").trim(),
        threshold: Number(form.get("threshold")) || 75,
        requiredSkills: String(form.get("requiredSkills") || "").trim(),
        niceToHave: String(form.get("niceToHave") || "").trim(),
        excludedRoles: String(form.get("excludedRoles") || "").trim(),
        excludedIndustries: String(form.get("excludedIndustries") || "").trim(),
        autoApplyThreshold: Number(form.get("autoApplyThreshold")) || next.autopilotRules.autoApplyThreshold,
        autoApplyCap: Number(form.get("autoApplyCap")) || next.autopilotRules.autoApplyCap
      };
      writeState(syncCurrentUser(next));
      showToast("Autopilot rules saved.");
      renderAutopilot();
    });
    qsa("[data-ap-toast]", root).forEach(btn => btn.addEventListener("click", () => showToast(btn.dataset.apToast)));
    qsa("[data-ap-save]", root).forEach(btn => btn.addEventListener("click", () => {
      const role = apMatches.find(item => item.id === btn.dataset.apSave);
      if (!role) return;
      toggleApSaveRole(role);
      renderAutopilot();
    }));
    qsa("[data-ap-apply]", root).forEach(btn => btn.addEventListener("click", () => {
      const role = apMatches.find(item => item.id === btn.dataset.apApply);
      if (!role || apRoleActionState(readState(), role.id).applied) return;
      applyApRole(role);
      renderAutopilot();
    }));
    qsa("[data-ap-dismiss]", root).forEach(btn => btn.addEventListener("click", () => {
      const role = apMatches.find(item => item.id === btn.dataset.apDismiss);
      if (!role) return;
      dismissApRole(role);
      renderAutopilot();
    }));
    qsa("[data-ap-undo-autoapply]", root).forEach(btn => btn.addEventListener("click", () => {
      undoAutoApply(btn.dataset.apUndoAutoapply);
    }));
    qsa("[data-ap-edit-rule]", root).forEach(btn => btn.addEventListener("click", () => {
      const role = apMatches.find(item => item.id === btn.dataset.apEditRule);
      const cardNumber = role ? apRuleCardFor(role) : 1;
      const card = qs(`[data-rule-card="${cardNumber}"]`, root);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("cg-ap-flash");
        window.setTimeout(() => card.classList.remove("cg-ap-flash"), 1600);
      }
      showToast("Opened the rule that matched this role.");
    }));
    qs("[data-ap-pause-toggle]", root)?.addEventListener("click", () => {
      const next = readState();
      next.autopilotPaused = !next.autopilotPaused;
      next.autopilotLog = pushAutopilotLog(next, next.autopilotPaused
        ? { time: "Just now", status: "Rule changed", tone: "tan", title: "Autopilot paused", body: "Vera will stop scanning until you resume." }
        : { time: "Just now", status: "Rule changed", tone: "teal", title: "Autopilot resumed", body: "Vera is scanning for new matches again." });
      writeState(syncCurrentUser(next));
      renderAutopilot();
    });
    qsa("[data-ap-scroll-to]", root).forEach(link => link.addEventListener("click", event => {
      event.preventDefault();
      qs(`#${link.dataset.apScrollTo}`, root)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    qs("[data-ap-insight-dismiss]", root)?.addEventListener("click", () => {
      qs("[data-ap-insight]", root)?.remove();
    });
    qsa("[data-pipeline-stage]", root).forEach(btn => btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-pipeline-stage");
      pipelineActiveStageIndex = Number(index) || 0;
      qsa("[data-pipeline-stage]", root).forEach(b => b.classList.toggle("active", b === btn));
      qsa("[data-pipeline-panel]", root).forEach(panel => panel.classList.toggle("active", panel.getAttribute("data-pipeline-panel") === index));
    }));
    qsa("[data-pipeline-card-toggle]", root).forEach(btn => btn.addEventListener("click", () => {
      const card = btn.closest(".cg-pipeline-card");
      const open = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    }));
    // Live pipeline: the "+" buttons, Apply, Advance, Move-to, and Remove all
    // write to the same applicationRecords store the rest of the app reads.
    qsa("[data-pipeline-add]", root).forEach(btn => btn.addEventListener("click", () => {
      openAddToPipelineModal(btn.dataset.pipelineAdd, () => renderAutopilot());
    }));
    qsa("[data-pipeline-apply]", root).forEach(btn => btn.addEventListener("click", () => {
      updateApplicationStage(btn.dataset.pipelineApply, "applied");
      pipelineActiveStageIndex = PIPELINE_BOARD_COLUMNS.findIndex(column => column.key === "applied");
      showToast("Application recorded - moved to Applied.");
      renderAutopilot();
    }));
    qsa("[data-pipeline-advance]", root).forEach(btn => btn.addEventListener("click", () => {
      const stageKey = btn.dataset.pipelineAdvanceStage;
      updateApplicationStage(btn.dataset.pipelineAdvance, stageKey);
      showToast(`Moved to ${stageMeta(stageKey).label}.`);
      renderAutopilot();
    }));
    qsa("[data-pipeline-move]", root).forEach(select => select.addEventListener("change", () => {
      updateApplicationStage(select.dataset.pipelineMove, select.value);
      showToast(`Moved to ${stageMeta(select.value).label}.`);
      renderAutopilot();
    }));
    qsa("[data-pipeline-remove]", root).forEach(btn => btn.addEventListener("click", () => {
      const jobId = btn.dataset.pipelineRemove;
      openConfirmModal({
        title: "Remove this role?",
        body: "It will be taken out of your pipeline. You can add it again anytime.",
        confirmLabel: "Remove",
        onConfirm: () => {
          untrackApplication(jobId);
          showToast("Removed from your pipeline.");
          renderAutopilot();
        }
      });
    }));
    qsa("[data-pipeline-impact-toggle]", root).forEach(header => {
      const toggleImpact = () => {
        const section = header.closest(".cg-pipeline-impact");
        const open = section.classList.toggle("is-open");
        header.setAttribute("aria-expanded", String(open));
      };
      header.addEventListener("click", toggleImpact);
      header.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleImpact();
        }
      });
    });
    if (pipelineActiveTab === "applications") initPageTour("autopilot");
    return;
  }
  const tracked = getTrackedJobs(state);
  const counts = applicationSummaryCounts(state);
  const activeStage = (location.hash || "").replace("#stage=", "") || "all";
  const filteredTracked = activeStage === "all" ? tracked : tracked.filter(({ record }) => record.stage === activeStage);
  const activeId = new URLSearchParams(location.search).get("app") || new URLSearchParams(location.search).get("job") || filteredTracked[0]?.job.id || tracked[0]?.job.id;
  const activeItem = tracked.find(({ job }) => job.id === activeId) || filteredTracked[0] || tracked[0];
  const dueSoon = tracked.filter(({ record }) => /today|tomorrow|next 3 days/i.test(record.deadline)).length;
  const activeApps = tracked.filter(({ record }) => !["archived", "rejected"].includes(record.stage)).length;
  const interviewCount = counts.interview || 0;
  const suggestedJobs = DATA.jobs.filter(job => !state.applicationRecords?.[job.id] && !state.ignoredJobs.includes(job.id)).slice(0, 3);
  const recruitmentSteps = [
    { key: "saved", label: "Shortlist", detail: "Company research and fit check", icon: "bookmark" },
    { key: "applied", label: "Application sent", detail: "Resume and profile submitted", icon: "send" },
    { key: "screening", label: "Recruiter screen", detail: "HR/recruiter review or phone call", icon: "scan-search" },
    { key: "interview", label: "Interview loop", detail: "Case, portfolio, technical, or team interview", icon: "messages-square" },
    { key: "offer", label: "Offer decision", detail: "Offer, negotiation, or final outcome", icon: "badge-check" }
  ];
  const recruitmentStepIndex = stage => {
    if (stage === "rejected" || stage === "archived") return recruitmentSteps.length - 1;
    return Math.max(0, recruitmentSteps.findIndex(step => step.key === stage));
  };
  const recruitmentProgress = record => Math.round(((recruitmentStepIndex(record.stage) + 1) / recruitmentSteps.length) * 100);
  const recruitmentStatusText = record => {
    if (record.stage === "offer") return "Offer stage - compare package, growth, and fit.";
    if (record.stage === "rejected") return "Closed - capture feedback and improve the next application.";
    if (record.stage === "archived") return "Archived - no current action needed.";
    return `${recruitmentSteps[recruitmentStepIndex(record.stage)]?.label || "In progress"} - ${record.nextAction}`;
  };
  root.innerHTML = appShell("autopilot", `
    <section class="glass-card dashboard-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Company hiring process</div><h1 class="section-title">Know exactly where every recruitment process stands.</h1><p class="section-sub">Track each company's hiring stage, next action, deadline, Vera advice, and notes from shortlist to offer.</p></div>
      <div class="radar"><span></span></div>
    </section>
    <section class="glass-card application-overview" data-no-number-animation>
      <div class="section-head">
        <div><div class="section-kicker">Application command center</div><h2 class="section-title mini">Nothing disappears after you apply.</h2></div>
        <div class="hero-actions compact-actions"><a class="btn btn-primary" href="discover.html#tracker">${icon("briefcase")} Manage in Jobs</a><button class="btn btn-cyan" type="button" data-add-best-role>${icon("plus")} Track best match</button></div>
      </div>
      <div class="application-kpi-grid">
        ${[
          ["Active", activeApps, "Live roles in your search", "kanban"],
          ["Due soon", dueSoon, "Needs action now", "clock"],
          ["Interviews", interviewCount, "Prep with Vera", "messages-square"],
          ["Tracked", tracked.length, "Saved to outcome", "list-checks"]
        ].map(([label, value, body, ic]) => `<article class="application-kpi-card">${icon(ic)}<span>${label}</span><strong>${value}</strong><p>${body}</p></article>`).join("")}
      </div>
      <div class="pipeline-strip application-stage-filter">
        <button class="pipeline-stage ${activeStage === "all" ? "active" : ""}" type="button" data-app-filter="all"><span>All</span><strong>${tracked.length}</strong></button>
        ${APPLICATION_STAGES.slice(0, 6).map(stage => `<button class="pipeline-stage ${activeStage === stage.key ? "active" : ""}" type="button" data-app-filter="${stage.key}"><span>${stage.label}</span><strong>${counts[stage.key] || 0}</strong></button>`).join("")}
      </div>
        <div class="applications-workspace">
        <div class="applications-list list-stack spacious-list" data-application-list>
          ${filteredTracked.length ? filteredTracked.map(({ job, record }) => `
            <article class="list-card application-row ${activeItem?.job.id === job.id ? "active" : ""}" data-application-select="${job.id}">
              <div class="list-card-top"><div><h3>${job.title}</h3><div class="muted small">${job.company} - ${job.salary}</div></div><span class="score">${job.match}%</span></div>
              <div class="application-row-meta">${applicationStagePill(record.stage)}<span class="pill gold">${record.deadline}</span></div>
              <p class="muted">${record.nextAction}</p>
              <div class="recruitment-mini-flow" aria-label="${job.company} recruitment progress">
                ${recruitmentSteps.map((step, index) => `<span class="${index <= recruitmentStepIndex(record.stage) ? "done" : ""} ${index === recruitmentStepIndex(record.stage) ? "current" : ""}" title="${step.label}"></span>`).join("")}
              </div>
              ${applicationProgress(record)}
            </article>
          `).join("") : `<div class="card">No applications match this stage yet.</div>`}
        </div>
        <aside class="glass-card application-detail-card" data-application-detail>
          ${activeItem ? `
            <div class="detail-head"><div><h2>${activeItem.job.title}</h2><div class="muted">${activeItem.job.company} - ${activeItem.job.location}</div></div>${applicationStagePill(activeItem.record.stage)}</div>
            <section class="recruitment-status-card">
              <div>
                <span class="section-kicker">Current recruitment progress</span>
                <h3>${recruitmentSteps[recruitmentStepIndex(activeItem.record.stage)]?.label || "In progress"}</h3>
                <p>${recruitmentStatusText(activeItem.record)}</p>
              </div>
              <strong>${recruitmentProgress(activeItem.record)}%</strong>
            </section>
            <section class="recruitment-process-map">
              ${recruitmentSteps.map((step, index) => `
                <article class="${index <= recruitmentStepIndex(activeItem.record.stage) ? "done" : ""} ${index === recruitmentStepIndex(activeItem.record.stage) ? "current" : ""}">
                  <span>${icon(step.icon)}</span>
                  <div><h3>${step.label}</h3><p>${step.detail}</p></div>
                </article>
              `).join("")}
            </section>
            <div class="score-grid compact">
              <div class="score-tile"><span>Match</span><strong>${activeItem.job.match}%</strong></div>
              <div class="score-tile"><span>Deadline</span><strong>${activeItem.record.deadline}</strong></div>
              <div class="score-tile"><span>Mode</span><strong>${activeItem.job.type}</strong></div>
              <div class="score-tile"><span>Salary</span><strong>${activeItem.job.salary}</strong></div>
            </div>
            <div class="application-stage-actions">
              ${APPLICATION_STAGES.slice(0, 6).map(stage => `<button class="${activeItem.record.stage === stage.key ? "active" : ""}" type="button" data-app-stage="${stage.key}" data-app-id="${activeItem.job.id}">${icon(stage.icon)} ${stage.label}</button>`).join("")}
            </div>
            <div class="detail-section compact-timeline">
              ${activeItem.record.timeline.map(item => `<div class="timeline-item ${item.done ? "complete" : ""}"><h3>${item.label}</h3><p class="muted small">${item.date}</p></div>`).join("")}
            </div>
            <form class="application-note-form" data-application-note="${activeItem.job.id}">
              <label>Vera note <textarea name="note">${activeItem.record.note || ""}</textarea></label>
              <button class="btn btn-ghost note-save-button" type="submit">${icon("save")} Save note</button>
            </form>
            <div class="plan-outcome"><strong>Next action</strong><span>${activeItem.record.nextAction}</span></div>
            <div class="plan-command-row">
              <button class="btn btn-cyan" type="button" data-app-vera="${activeItem.job.id}"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</button>
              <a class="btn btn-ghost" href="discover.html?job=${activeItem.job.id}#tracker">${icon("external-link")} Open job</a>
              <button class="btn btn-ghost" type="button" data-app-stage="archived" data-app-id="${activeItem.job.id}">${icon("archive")} Archive</button>
              <button class="btn btn-ghost" type="button" data-back-app-list>${icon("arrow-up")} Back to list</button>
            </div>
          ` : `
            <h2 class="section-title mini">Start tracking applications.</h2>
            <p class="muted">Save or apply to a role, then CareerGo will show timeline, next action, and Vera coaching here.</p>
          `}
        </aside>
      </div>
      ${suggestedJobs.length ? `
        <div class="application-suggestion-strip">
          <div><div class="section-kicker">Suggested to track</div><h3>High-fit roles not in your pipeline yet.</h3></div>
          <div class="application-suggestion-list">${suggestedJobs.map(job => `<button class="pill cyan" type="button" data-track-role="${job.id}">${icon("plus")} ${job.title}  - ${job.match}%</button>`).join("")}</div>
        </div>
      ` : ""}
    </section>
    <section class="application-automation-stack">
      <form class="glass-card form-grid" data-rules-form>
        <h2 class="section-title mini">Rules panel</h2>
        <label>Minimum salary <input name="salary" type="number" value="${state.autopilotRules.salary}"></label>
        <label>Location / mode <input name="location" value="${state.autopilotRules.location}"></label>
        <label>Minimum match <input name="threshold" type="number" min="60" max="98" value="${state.autopilotRules.threshold}"></label>
        <label>Exclude <input name="exclude" value="${state.autopilotRules.exclude}"></label>
        <label class="check-field"><input name="scanOnly" type="checkbox" ${state.autopilotRules.scanOnly ? "checked" : ""}> Scan only, do not auto-apply</label>
        <button class="btn btn-primary" type="submit">${icon("shield-check")} Save rules</button>
      </form>
      <div class="glass-card">
        <h2 class="section-title mini">Agent commands</h2>
        <div class="hero-actions"><button class="btn btn-cyan" data-scan>${icon("radar")} Scan jobs only</button><button class="btn btn-primary" data-apply-agent>${icon("send")} Apply within rules</button></div>
        <div class="detail-section">${progressBar(86)}<p class="muted">Radar confidence based on saved roles, ignored roles, salary rule, and target skills.</p></div>
      </div>
    </section>
    <section class="glass-card">
      <div class="section-kicker">Activity log</div>
      <div class="list-stack">${DATA.autopilotEvents.map(event => `<div class="list-card"><div class="list-card-top"><div><h3>${event.title}</h3><div class="muted small">${event.reason}</div></div><span class="pill ${event.type === "skipped" ? "red" : event.type === "saved" ? "gold" : "green"}">${event.status}</span></div></div>`).join("")}</div>
    </section>
  `, { title: "Applications", subtitle: "Track status, follow-ups, deadlines, and Vera's next actions." });
  qsa("[data-app-filter]").forEach(btn => btn.addEventListener("click", () => {
    location.hash = `stage=${btn.dataset.appFilter}`;
    renderAutopilot();
  }));
  qsa("[data-application-select]").forEach(card => card.addEventListener("click", () => {
    const url = new URL(location.href);
    url.searchParams.set("app", card.dataset.applicationSelect);
    history.replaceState(null, "", `${url.pathname}${url.search}${location.hash}`);
    renderAutopilot();
    window.setTimeout(() => qs("[data-application-detail]")?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }));
  qs("[data-back-app-list]")?.addEventListener("click", () => {
    qs("[data-application-list]")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  qsa("[data-app-stage]").forEach(btn => btn.addEventListener("click", () => {
    updateApplicationStage(btn.dataset.appId, btn.dataset.appStage);
    showToast(`Application moved to ${stageMeta(btn.dataset.appStage).label}.`);
    renderAutopilot();
  }));
  qsa("[data-application-note]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const jobId = form.dataset.applicationNote;
    const next = readState();
    const record = next.applicationRecords?.[jobId];
    if (!record) return;
    next.applicationRecords = {
      ...(next.applicationRecords || {}),
      [jobId]: { ...record, note: form.note.value.trim(), updatedAt: nowStamp() }
    };
    writeState(syncCurrentUser(next));
    showToast("Application note saved.");
    renderAutopilot();
  }));
  qsa("[data-app-vera]").forEach(btn => btn.addEventListener("click", () => {
    const next = readState();
    const job = DATA.jobs.find(item => item.id === btn.dataset.appVera);
    if (!job) return;
    next.chat = [
      ...next.chat,
      { from: "user", text: `Help me with my ${job.title} application at ${job.company}` },
      { from: "vera", text: `For ${job.title} at ${job.company}, prepare proof for ${job.skills.slice(0, 2).join(" and ")}. Your next move is to connect one project outcome to the role requirements and decide the follow-up timing.` }
    ];
    writeState(next);
    showToast("Vera added application coaching to chat.");
  }));
  qsa("[data-track-role]").forEach(btn => btn.addEventListener("click", () => {
    updateApplicationStage(btn.dataset.trackRole, "saved");
    showToast("Role added to Applications.");
    renderAutopilot();
  }));
  qs("[data-add-best-role]")?.addEventListener("click", () => {
    const best = DATA.jobs
      .filter(job => !readState().applicationRecords?.[job.id])
      .sort((a, b) => b.match - a.match)[0];
    if (!best) return showToast("All recommended roles are already tracked.");
    updateApplicationStage(best.id, "saved");
    showToast(`${best.title} added to Applications.`);
    renderAutopilot();
  });
  qs("[data-rules-form]").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    next.autopilotRules = {
      salary: Number(form.get("salary")),
      location: String(form.get("location")),
      threshold: Number(form.get("threshold")),
      exclude: String(form.get("exclude")),
      scanOnly: Boolean(form.get("scanOnly"))
    };
    writeState(next);
    showToast("Autopilot rules saved.");
  });
  qs("[data-scan]").addEventListener("click", () => showToast("Autopilot scanned roles and kept everything in review mode."));
  qs("[data-apply-agent]").addEventListener("click", () => showToast("Autopilot prepared applications that match your rules."));
  createIcons();
}

function apRoleRequirements(role, org) {
  const seniorish = /senior|lead|principal/i.test(role.title);
  const juniorish = /analyst|associate|intern/i.test(role.title);
  return {
    education: "Bachelor's or equivalent experience.",
    experience: seniorish ? "5+ years, with prior team or project leadership." : juniorish ? "1-3 years, or a strong internship/project track record." : "2+ years in a similar role.",
    portfolio: /designer|research/i.test(role.title) ? "Required - share 2-3 case studies." : "Optional, but strengthens your application.",
    skills: INDUSTRY_SKILLS[org?.industry] || "Analytics, Communication, Cross-functional",
    tools: INDUSTRY_TOOLS[org?.industry] || "Slack, Notion, Jira"
  };
}

function renderAutopilotJobDetail() {
  const root = qs("[data-ap-job-detail]");
  if (!root) return;
  if (!requireAccount(root, "view this job's requirements")) return;
  const roleId = new URLSearchParams(location.search).get("role");
  const role = AUTOPILOT_MATCHES.find(item => item.id === roleId);
  if (!role) {
    root.innerHTML = `
      <div class="locked-state-wrap">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Role not found</div>
          <h1 class="section-title">We could not find that matched role.</h1>
          <p class="section-sub">It may have been dismissed, or the link is out of date.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="autopilot.html#autopilot-console">${icon("arrow-left")} Back to Autopilot</a></div>
        </div>
      </div>
    `;
    createIcons();
    return;
  }
  const state = readState();
  const { catalog } = buildOrgCatalog();
  const org = catalog.find(item => item.id === role.org);
  const { saved, applied } = apRoleActionState(state, role.id);
  const req = apRoleRequirements(role, org);

  root.innerHTML = `
    <section class="cg-cp cg-apjob">
      <a class="cg-cp-back" href="autopilot.html#autopilot-console">${icon("arrow-left")} Autopilot</a>

      <article class="cg-cp-hero">
        <div class="cg-cp-hero-top">
          <span class="cg-cp-mono">${orgInitials(role.company)}</span>
          <div class="cg-cp-hero-id">
            <span class="cg-section-kicker">${role.company} &middot; ${role.match}% match</span>
            <h1>${role.title}</h1>
            <p class="cg-cp-hero-meta">${icon("map-pin")} ${role.location} &middot; ${role.workMode} &middot; ${icon("briefcase")} ${role.salary}</p>
          </div>
          <div class="cg-cp-hero-actions">
            <button type="button" class="btn btn-ghost" data-apjob-save>${icon(saved ? "bookmark-check" : "bookmark")} ${saved ? "Saved" : "Save"}</button>
            <button type="button" class="btn btn-primary" data-apjob-apply${applied ? " disabled" : ""}>${icon(applied ? "check" : "send")} ${applied ? "Applied" : "Apply"}</button>
          </div>
        </div>
        <div class="cg-cp-hero-stats">
          <span class="pill">${role.mode}</span>
          <span>${icon("clock")} ${role.found}</span>
          ${org ? `<a class="pill" href="company-profile.html?org=${org.id}">${icon("building-2")} ${org.name} profile</a>` : ""}
        </div>
        <div class="cg-cp-vera">
          <span class="cg-cp-vera-label">${icon("bot")} Why it matched</span>
          <p>${role.why}</p>
          ${role.watch ? `<p class="cg-cp-vera-watch"><b>Watch:</b> ${role.watch}</p>` : ""}
        </div>
      </article>

      <div class="cg-cp-row">
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Requirements</span>
          <h2>What they look for</h2>
          <div class="cg-cp-kv"><span>Education</span><strong>${req.education}</strong></div>
          <div class="cg-cp-kv"><span>Experience</span><strong>${req.experience}</strong></div>
          <div class="cg-cp-kv"><span>Portfolio</span><strong>${req.portfolio}</strong></div>
          <div class="cg-cp-kv"><span>Skills</span><strong>${req.skills}</strong></div>
          <div class="cg-cp-kv"><span>Tools</span><strong>${req.tools}</strong></div>
        </article>
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Conditions</span>
          <h2>Employment details</h2>
          <div class="cg-cp-kv"><span>Employment type</span><strong>Full-time</strong></div>
          <div class="cg-cp-kv"><span>Work arrangement</span><strong>${role.workMode}</strong></div>
          <div class="cg-cp-kv"><span>Location</span><strong>${role.location}</strong></div>
          <div class="cg-cp-kv"><span>Salary</span><strong>${role.salary}</strong></div>
          <div class="cg-cp-kv"><span>Autopilot mode</span><strong>${role.mode}</strong></div>
        </article>
      </div>

      <div class="cg-cp-row">
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Hiring process</span>
          <h2>What to expect</h2>
          <ol class="cg-cp-steps">
            <li><b>1</b><div><strong>Application review</strong><span>1 week.</span></div></li>
            <li><b>2</b><div><strong>Recruiter screen</strong><span>30 min.</span></div></li>
            <li><b>3</b><div><strong>Manager interview</strong><span>45 min.</span></div></li>
            <li><b>4</b><div><strong>Case</strong><span>Take-home.</span></div></li>
            <li><b>5</b><div><strong>Panel</strong><span>2 interviews.</span></div></li>
          </ol>
        </article>
        <article class="cg-cp-card">
          <span class="cg-section-kicker">Benefits</span>
          <h2>What comes with the role</h2>
          <div class="cg-cp-benefits">
            <span>${icon("check-circle")} Medical</span>
            <span>${icon("check-circle")} ${role.workMode}</span>
            <span>${icon("check-circle")} Learning budget</span>
            <span>${icon("check-circle")} Bonus</span>
          </div>
        </article>
      </div>

      <div class="cg-apjob-footer">
        <button type="button" class="btn btn-ghost" data-apjob-dismiss>${icon("x")} Dismiss this match</button>
      </div>

      ${veraWidgetMarkup()}
    </section>
  `;
  createIcons();
  wireVeraWidget(root);
  qs("[data-apjob-save]", root)?.addEventListener("click", () => {
    toggleApSaveRole(role);
    renderAutopilotJobDetail();
  });
  qs("[data-apjob-apply]", root)?.addEventListener("click", () => {
    if (apRoleActionState(readState(), role.id).applied) return;
    applyApRole(role);
    renderAutopilotJobDetail();
  });
  qs("[data-apjob-dismiss]", root)?.addEventListener("click", () => {
    dismissApRole(role);
    location.href = "autopilot.html#autopilot-console";
  });
}

function renderPosts() {
  const root = qs("[data-posts]");
  if (!root) return;
  if (!requireAccount(root, "join the professional feed")) return;
  if (document.body.dataset.postsHashReady !== "true") {
    document.body.dataset.postsHashReady = "true";
    window.addEventListener("hashchange", () => {
      if (document.body.dataset.page === "posts") {
        renderPosts();
        setActiveNav();
      }
    });
  }
  const state = readState();
  qs(".page-hero")?.classList.add("is-hidden");
  const activeTab = (location.hash || "#for-you").replace("#", "");
  const feedTabs = [
    ["milestones", "Milestones"],
    ["discussions", "Discussions"],
    ["hiring", "Hiring"]
  ];
  const trendItems = [
    { id: "pm-transitions", title: "PM transitions", count: "1.2k posts today", icon: "trending-up", keywords: ["pm", "product", "transition", "switch"] },
    { id: "ai-product-roles", title: "AI product roles", count: "840 posts today", icon: "sparkles", keywords: ["ai", "product", "role"] },
    { id: "interview-teardowns", title: "Interview teardowns", count: "612 posts today", icon: "message-circle", keywords: ["interview", "teardown", "framework"] },
    { id: "fair-pay-reports", title: "Fair Pay reports", count: "298 posts today", icon: "file-text", keywords: ["pay", "salary", "worth", "market"] }
  ];
  const activeTrend = activeTab.startsWith("trend-") ? activeTab.replace("trend-", "") : "";
  const followingList = Array.isArray(state.followingFeed) ? state.followingFeed : [];
  const referenceFeedPosts = [
    {
      id: "feed-priya-menon-discussion",
      author: "Priya Menon",
      title: "Sr. PM - Stripe",
      body: "The best PM interview prep isn't more frameworks - it's writing three teardowns of products you love. Interviewers can feel the difference between a memorized answer and a real point of view.",
      reactions: 214,
      comments: 32,
      category: "discussion",
      time: "2h"
    },
    {
      id: "feed-rohan-milestone",
      author: "Rohan S.",
      title: "Design Eng - StoreHub",
      body: "I stopped describing my portfolio as screens and started explaining constraints, tradeoffs, and what changed after testing. That shift changed the interview.",
      reactions: 138,
      comments: 18,
      category: "milestone",
      time: "4h"
    },
    {
      id: "feed-aisha-hiring",
      author: "Aisha Rahman",
      title: "Recruiter - Grab Malaysia",
      body: "Warm intros help, but the strongest PM applications this week came with one short artifact: a teardown, dashboard, or strategy memo tied to the role.",
      reactions: 96,
      comments: 21,
      category: "hiring",
      time: "Yesterday"
    }
  ];
  const statePostsById = new Map((state.posts || []).map(post => [post.id, post]));
  const mergedReferencePosts = referenceFeedPosts.map(reference => statePostsById.has(reference.id) ? { ...reference, ...statePostsById.get(reference.id) } : reference);
  const userPosts = (state.posts || []).filter(post => !referenceFeedPosts.some(reference => reference.id === post.id));
  const enrichedPosts = [...mergedReferencePosts, ...userPosts].map((post, index) => ({
    category: ["discussion", "milestone", "hiring", "discussion", "milestone"][index % 5],
    time: ["2h", "4h", "Yesterday", "2d"][index % 4],
    baseComments: Number.isFinite(Number(post.comments)) ? Number(post.comments) : 32 + index * 7,
    commentsList: Array.isArray(post.commentsList) ? post.commentsList : [],
    commentsOpen: Boolean(post.commentsOpen),
    saved: Boolean(post.saved),
    liked: Boolean(post.liked),
    ...post
  }));
  const filteredPosts = enrichedPosts.filter(post => {
    if (activeTrend) {
      const trend = trendItems.find(item => item.id === activeTrend);
      const hay = `${post.author} ${post.title} ${post.body}`.toLowerCase();
      return trend ? trend.keywords.some(keyword => hay.includes(keyword)) : true;
    }
    if (activeTab === "milestones") return post.category === "milestone" || /learned|progress|project|portfolio/i.test(post.title);
    if (activeTab === "discussions") return post.category === "discussion";
    if (activeTab === "hiring") return post.category === "hiring" || /job|role|apply|interview/i.test(`${post.title} ${post.body}`);
    return true;
  });
  const feedPosts = filteredPosts.length ? filteredPosts : enrichedPosts;
  const profileInitial = getFirstName(state).charAt(0).toUpperCase() || "A";
  const postInitials = value => String(value || "CG")
    .split(/[,\s]/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
  if (activeTab === "messages") {
    const requestedPerson = new URLSearchParams(location.search).get("person");
    if (requestedPerson && DATA.people.some(person => person.id === requestedPerson)) activePostsThread = requestedPerson;
    if (!activePostsThread || activePostsThread === "vera") activePostsThread = "aisha";

    const humanThreads = [
      {
        id: "aisha", name: "Aisha Rahman", role: "Recruiter  - Grab Malaysia", tag: "Recruiter", preview: "Would you be free Thursday 3p...", time: "2h", unread: "2",
        messages: [
          { dir: "incoming", text: "Hi Aarav - loved your portfolio. Would you be open to a 30-min chat about the Sr. PM role next week?" },
          { dir: "outgoing", text: "Yes, definitely. Thursday afternoon works for me. I can also share a short teardown of GrabFood I did last month." },
          { dir: "incoming", text: "Perfect. Would you be free Thursday 3pm for the case round?", delivered: true }
        ],
        veraSuggest: "\"Thursday 3pm works. I'll prep a short GrabFood teardown and bring 2 metric-tradeoff questions I'd love your take on.\""
      },
      {
        id: "ravi", name: "Ravi Iyer", role: "Head of Product  - Vercel", tag: "Mentor", preview: "Happy to look at your PM portfolio - s...", time: "1d", unread: "",
        messages: [
          { dir: "incoming", text: "Hey! Happy to look at your PM portfolio - send over what you've got and I'll give honest feedback this weekend." },
          { dir: "outgoing", text: "That would mean a lot. I'll share the Grab case study and the dashboard I built - could use your read on the metrics section especially." },
          { dir: "incoming", text: "Perfect, that's the part most candidates get wrong. Send it over and I'll mark it up directly.", delivered: true }
        ]
      },
      {
        id: "nurul", name: "Nurul Adlina", role: "Hiring Manager  - Setel", tag: "Hiring manager", preview: "Great chat. Sharing the take...", time: "2d", unread: "1",
        messages: [
          { dir: "incoming", text: "Great chat today! Sharing the take-home exercise now - due end of next week, no rush." },
          { dir: "outgoing", text: "Thank you, I'll get started this weekend. Should I loop in any specific stakeholders while drafting the proposal?" },
          { dir: "incoming", text: "Just focus on the merchant experience - that's the piece our panel cares about most.", delivered: true }
        ]
      },
      {
        id: "shreya", name: "Shreya Kapoor", role: "Design -> Product  - Figma", tag: "Connection", preview: "Yes, I made the same jump - let m...", time: "4d", unread: "",
        messages: [
          { dir: "outgoing", text: "Saw you made the jump from design to product - I'm considering the same move. Any advice on how you framed it?" },
          { dir: "incoming", text: "Yes, I made the same jump - let me know if you want to grab 15 minutes, happy to share how I positioned my design background as a PM strength.", delivered: true }
        ]
      }
    ];
    DATA.people.filter(person => !humanThreads.some(thread => thread.id === person.id)).forEach(person => {
      humanThreads.push({
        id: person.id, name: person.name, role: `${person.role}  - ${person.company || "CareerGo"}`, tag: person.tag,
        preview: "Say hello to start the conversation.", time: "", unread: "", messages: []
      });
    });
    const humanThreadReplies = state.humanThreadReplies && typeof state.humanThreadReplies === "object" ? state.humanThreadReplies : {};
    humanThreads.forEach(thread => {
      const sent = Array.isArray(humanThreadReplies[thread.id]) ? humanThreadReplies[thread.id] : [];
      if (sent.length) {
        thread.messages = [...thread.messages, ...sent];
        thread.preview = sent[sent.length - 1].text;
        thread.time = "Just now";
        thread.unread = "";
      }
    });
    const inboxFilters = ["All", "Recruiters", "Mentors", "Hiring", "Connections"];
    const inboxFilterTag = { Recruiters: "Recruiter", Mentors: "Mentor", Hiring: "Hiring manager", Connections: "Connection" };
    if (!inboxFilters.includes(activeInboxFilter)) activeInboxFilter = "All";
    const inboxThreads = humanThreads;
    const activeThread = inboxThreads.find(thread => thread.id === activePostsThread) || inboxThreads[0];
    const visibleThreads = activeInboxFilter === "All"
      ? inboxThreads
      : inboxThreads.filter(thread => thread.tag === inboxFilterTag[activeInboxFilter]);

    const threadPanel = `
          <header>
            <div><h2>${activeThread.name}</h2><p>${activeThread.role}  - Usually replies within 2h</p></div>
            <span>Warm - 3 replies this week</span>
          </header>
          <section class="cg-chat-thread" aria-label="Conversation with ${activeThread.name}">
            ${activeThread.messages.length ? activeThread.messages.map(msg => `<p class="${msg.dir}${msg.delivered ? " delivered" : ""}">${msg.text}${msg.delivered ? `<small>${icon("check-check")} Delivered</small>` : ""}</p>`).join("") : `<p class="cg-inbox-empty">Say hello to start the conversation with ${activeThread.name}.</p>`}
            ${activeThread.veraSuggest ? `
              <article class="cg-vera-suggests">
                <span><img src="assets/vera-ai-coach.png" alt="Vera"> Vera suggests</span>
                <p>${activeThread.veraSuggest}</p>
                <footer><button type="button" data-vera-suggest-use>Use draft</button><button type="button" data-vera-suggest-rewrite>Rewrite</button></footer>
              </article>
            ` : ""}
          </section>
          <form class="cg-message-composer" data-human-thread-composer>
            <input placeholder="Write a message..." data-human-thread-input>
            <button type="submit">${icon("send")} Send</button>
          </form>
    `;

    root.innerHTML = appShell("posts", `
      <section class="cg-messages-shell">
        <aside class="cg-inbox-panel">
          <span class="cg-overline">Messages</span>
          <h1>Inbox</h1>
          <label class="cg-inbox-search">${icon("search")}<input placeholder="Search people or messages"></label>
          <div class="cg-inbox-filters">
            ${inboxFilters.map(label => `<button class="${label === activeInboxFilter ? "active" : ""}" type="button" data-inbox-filter="${label}">${label}</button>`).join("")}
          </div>
          <div class="cg-thread-list">
            ${visibleThreads.length ? visibleThreads.map(thread => `
              <article class="cg-thread-card ${thread.id === activeThread.id ? "active" : ""}" data-thread-id="${thread.id}">
                <span class="cg-feed-avatar">${postInitials(thread.name)}</span>
                <div>
                  <header><strong>${thread.name}</strong>${thread.id === activeThread.id ? icon("pin") : ""}<time>${thread.time}</time></header>
                  <small>${thread.role}</small>
                  <p><b>${thread.tag}</b> ${thread.preview}</p>
                </div>
                ${thread.unread ? `<i>${thread.unread}</i>` : ""}
              </article>
            `).join("") : `<p class="cg-inbox-empty">No conversations in this category yet.</p>`}
          </div>
          <p class="cg-inbox-foot">Looking to message someone new? Go to <a href="posts.html#network">Network</a>.</p>
        </aside>
        <main class="cg-message-thread">
          ${threadPanel}
        </main>
      </section>
      ${veraWidgetMarkup()}
    `);
    createIcons();
    wireVeraWidget(root);
    qsa("[data-thread-id]", root).forEach(card => card.addEventListener("click", () => {
      activePostsThread = card.dataset.threadId;
      renderPosts();
    }));
    qsa("[data-inbox-filter]", root).forEach(button => button.addEventListener("click", () => {
      activeInboxFilter = button.dataset.inboxFilter;
      renderPosts();
    }));
    const humanComposer = qs("[data-human-thread-composer]", root);
    const humanInput = qs("[data-human-thread-input]", root);
    if (humanComposer && humanInput) {
      humanComposer.addEventListener("submit", event => {
        event.preventDefault();
        const trimmed = humanInput.value.trim();
        if (!trimmed) return;
        const next = readState();
        next.humanThreadReplies = next.humanThreadReplies && typeof next.humanThreadReplies === "object" ? next.humanThreadReplies : {};
        const list = Array.isArray(next.humanThreadReplies[activeThread.id]) ? next.humanThreadReplies[activeThread.id] : [];
        next.humanThreadReplies[activeThread.id] = [...list, { dir: "outgoing", text: trimmed }];
        writeState(next);
        showToast(`Message sent to ${activeThread.name}.`);
        renderPosts();
      });
    }
    qs("[data-vera-suggest-use]", root)?.addEventListener("click", () => {
      if (!humanInput) return;
      humanInput.value = String(activeThread.veraSuggest || "").replace(/^"|"$/g, "");
      humanInput.focus();
      showToast("Draft added - edit and send.");
    });
    qs("[data-vera-suggest-rewrite]", root)?.addEventListener("click", () => {
      if (!humanInput) return;
      const draft = String(activeThread.veraSuggest || "").replace(/^"|"$/g, "");
      const shorter = draft.split(". ")[0].trim();
      humanInput.value = shorter.endsWith(".") ? shorter : `${shorter}.`;
      humanInput.focus();
      showToast("Vera shortened the draft - edit and send.");
    });
    return;
  }
  const commentSeed = post => [
    { author: "Vera", body: "Strong framing. Try adding one metric or user signal to make the lesson interview-ready.", time: "1h" },
    { author: "CareerGo member", body: "This is exactly how I started turning class projects into portfolio stories.", time: "34m" }
  ].slice(0, Math.min(2, Math.max(0, post.baseComments ? 2 : 0)));
  const classifyPost = (title, body) => {
    const text = `${title} ${body}`.toLowerCase();
    if (/hiring|job|role|apply|recruiter/.test(text)) return "hiring";
    if (/milestone|launched|finished|completed|progress|offer/.test(text)) return "milestone";
    return "discussion";
  };
  const orgCard = org => {
    const isSaved = state.savedOrgs.includes(org.id);
    return `
      <article class="cg-feed-post cg-feed-org-card">
        <div class="cg-feed-post-head">
          <span class="cg-feed-avatar">${postInitials(org.name)}</span>
          <div>
            <h2>${org.name}</h2>
            <p>${org.type} - ${org.location}</p>
          </div>
          <span class="cg-feed-tag">${org.open} open</span>
        </div>
        <p class="cg-feed-body">${org.summary}</p>
        <div class="cg-feed-org-meta">
          <span>${icon("star")} ${org.rating} rating</span>
          <span>${icon("message-square")} ${org.reviews} reviews</span>
          <span>${icon("briefcase")} ${org.signal}</span>
        </div>
        <div class="cg-feed-actions">
          <button type="button" data-feed-save-org="${org.id}" class="${isSaved ? "active" : ""}">${icon("bookmark")} ${isSaved ? "Saved" : "Save"}</button>
          <button type="button" data-feed-org-chat="${org.id}"><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Ask Vera</button>
        </div>
      </article>
    `;
  };
  const savedJobCard = job => `
    <article class="cg-feed-post cg-feed-org-card">
      <div class="cg-feed-post-head">
        <span class="cg-feed-avatar">${postInitials(job.company)}</span>
        <div>
          <h2>${job.title}</h2>
          <p>${job.company} - ${job.location}</p>
        </div>
        <span class="cg-feed-tag">${job.match}% match</span>
      </div>
      <p class="cg-feed-body">${job.description}</p>
      <div class="cg-feed-org-meta">
        <span>${icon("badge-dollar-sign")} ${job.salary}</span>
        <span>${icon("map-pin")} ${job.type}</span>
        <span>${icon("sparkles")} ${job.why[0]}</span>
      </div>
      <div class="cg-feed-actions">
        <a href="discover.html?job=${job.id}">${icon("briefcase")} Open role</a>
        <button type="button" data-feed-unsave-job="${job.id}">${icon("bookmark-x")} Remove</button>
      </div>
    </article>
  `;
  const savedJobs = DATA.jobs.filter(job => state.savedJobs.includes(job.id));
  const savedOrgs = [...DATA.companies, ...DATA.universities].filter(org => state.savedOrgs.includes(org.id));
  const isDirectoryTab = ["companies", "universities", "saved"].includes(activeTab);
  const feedTitle = activeTab === "companies"
    ? "Companies people are watching."
    : activeTab === "universities"
      ? "Universities shaping career paths."
      : "Everything you saved for later.";
  const directoryContent = activeTab === "companies"
    ? DATA.companies.map(orgCard).join("")
    : activeTab === "universities"
      ? DATA.universities.map(orgCard).join("")
      : activeTab === "saved"
        ? [
          ...savedJobs.map(savedJobCard),
          ...savedOrgs.map(orgCard),
          ...enrichedPosts.filter(post => post.saved).map(post => `
            <article class="cg-feed-post">
              <div class="cg-feed-post-head">
                <span class="cg-feed-avatar">${postInitials(post.author)}</span>
                <div><h2>${post.author || "CareerGo member"}</h2><p>${post.title}</p></div>
                <time>${post.time}</time>
              </div>
              <span class="cg-feed-tag">Saved post</span>
              <p class="cg-feed-body">${post.body}</p>
            </article>
          `)
        ].join("") || `<article class="cg-feed-post"><h2>Nothing saved yet.</h2><p class="cg-feed-body">Save companies, universities, jobs, or posts and they will stay here inside Feed.</p></article>`
        : "";
  root.innerHTML = appShell("posts", `
    <section class="cg-feed-shell">
      <aside class="cg-feed-left" aria-label="Feed sections">
        ${[
          ["for-you", "For you", "sparkles"],
          ["network", "Network", "users-round"],
          ["communities", "Communities", "hash"],
          ["trend-pm-transitions", "Trending", "flame"]
        ].map(([key, label, ic]) => `<a class="${activeTab === key || (key === "for-you" && !activeTrend && activeTab === "for-you") ? "active" : ""}" href="#${key}" data-feed-tab-link>${icon(ic)} <span>${label}</span></a>`).join("")}
        <article class="cg-feed-left-note">
          <span class="cg-feed-left-note-icon">${icon("compass")}</span>
          <strong>Looking for opportunities?</strong>
          <p>Companies, universities, and roles now live in Discover.</p>
          <a class="btn btn-primary" href="discover.html">Discover ${icon("arrow-right")}</a>
          <small>Saved items are in your Profile.</small>
        </article>
      </aside>
      <main class="cg-feed-main">
        <header class="cg-feed-hero ${isDirectoryTab ? "" : "cg-feed-hero-compact"}">
          ${isDirectoryTab ? `<span class="cg-overline">${activeTab}</span><h1>${feedTitle}</h1>` : `<h1>Feed</h1>`}
        </header>

        ${isDirectoryTab ? "" : `<form class="cg-feed-composer" data-post-form>
          <span class="cg-feed-avatar cg-feed-avatar-add" aria-hidden="true">${icon("plus")}</span>
          <input name="body" aria-label="Post body" placeholder="Share a milestone, lesson, or question...">
          <input data-post-media name="media" type="file" accept="image/*,.pdf,.doc,.docx" hidden>
          <button class="btn btn-ghost" type="button" data-media-post>${icon("image")} Media</button>
          <button class="btn btn-primary" type="submit">${icon("plus")} Post</button>
          <div class="cg-media-preview" data-media-preview hidden></div>
        </form>`}

        ${activeTrend ? `<div class="cg-active-trend"><span>${icon("flame")} ${trendItems.find(item => item.id === activeTrend)?.title || "Trending"}</span><a href="#for-you" data-feed-tab-link>Clear</a></div>` : ""}

        ${isDirectoryTab ? "" : `<nav class="cg-feed-tabs" aria-label="Feed filters">
          ${feedTabs.map(([key, label]) => `<a class="${activeTab === key ? "active" : ""}" href="#${key}" data-feed-tab-link>${label}</a>`).join("")}
        </nav>`}

        <section class="cg-feed-list" aria-label="Career feed">
          ${isDirectoryTab ? directoryContent : feedPosts.map(post => `
            <article class="cg-feed-post">
              <div class="cg-feed-post-head">
                <span class="cg-feed-avatar">${postInitials(post.author)}</span>
                <div>
                  <h2>${post.author || "CareerGo member"}</h2>
                  <p>${post.title}</p>
                </div>
                <time>${post.time}</time>
              </div>
              <span class="cg-feed-tag">${post.category === "milestone" ? "Milestone" : post.category === "hiring" ? "Hiring" : "Discussion"}</span>
              <p class="cg-feed-body" data-feed-body="${post.id}">${post.body}</p>
              <button type="button" class="cg-feed-expand" data-feed-expand="${post.id}" hidden>Show more</button>
              ${post.mediaName ? `<div class="cg-post-media">${icon("paperclip")} <span>${post.mediaName}</span></div>` : ""}
              <div class="cg-feed-actions">
                <button type="button" data-like-post="${post.id}" class="${post.liked ? "active" : ""}">${icon("heart")} ${post.reactions || 0}</button>
                <button type="button" data-comment-toggle="${post.id}" class="${post.commentsOpen ? "active" : ""}">${icon("message-circle")} ${(post.baseComments || 0) + post.commentsList.length}</button>
                <button type="button" data-save-post="${post.id}" class="${post.saved ? "active" : ""}">${icon("bookmark")} ${post.saved ? "Saved" : "Save"}</button>
                <button type="button" data-share-post="${post.id}">${icon("send")} Share</button>
              </div>
              <section class="cg-feed-comments ${post.commentsOpen ? "open" : ""}" aria-label="Comments">
                <div class="cg-comment-list">
                  ${[...commentSeed(post), ...post.commentsList].map(comment => `
                    <article class="cg-comment">
                      <span class="cg-comment-avatar">${postInitials(comment.author)}</span>
                      <div>
                        <strong>${comment.author}</strong>
                        <p>${comment.body}</p>
                        <small>${comment.time}</small>
                      </div>
                    </article>
                  `).join("")}
                </div>
                <form class="cg-comment-form" data-comment-form="${post.id}">
                  <span class="cg-comment-avatar">${profileInitial}</span>
                  <input name="comment" placeholder="Add a thoughtful reply...">
                  <button type="submit">${icon("send")}</button>
                </form>
              </section>
            </article>
          `).join("")}
        </section>
      </main>

      <aside class="cg-feed-aside">
        <section>
          <span class="cg-overline">Trending</span>
          ${trendItems.map(item => `<a class="cg-trend ${activeTrend === item.id ? "active" : ""}" href="#trend-${item.id}" data-feed-tab-link><span class="cg-trend-icon">${icon(item.icon)}</span><span class="cg-trend-text"><strong>${item.title}</strong><small>${item.count}</small></span></a>`).join("")}
        </section>
        <section>
          <span class="cg-overline">Suggested to follow</span>
          ${[
            ["Notion", "Company - hiring 8 roles", "building-2"],
            ["IIM Bangalore", "University", "graduation-cap"],
            ["Ravi Iyer", "Head of Product - Vercel", "users-round"]
          ].map(([name, sub, ic]) => {
            const isFollowing = followingList.includes(name);
            return `<div class="cg-follow-card ${isFollowing ? "following" : ""}"><span>${icon(ic)}</span><div><strong>${name}</strong><small>${sub}</small></div><button type="button" data-follow="${name}" ${isFollowing ? "disabled" : ""}>${isFollowing ? "Following" : "Follow"}</button></div>`;
          }).join("")}
        </section>
        <section class="cg-feed-grow-card">
          <span class="cg-feed-grow-icon">${icon("sprout")}</span>
          <h3>Grow your network, find your next opportunity.</h3>
          <p>Connect with mentors, peers and top companies.</p>
          <a class="btn btn-primary" href="posts.html#network">Explore Network ${icon("arrow-right")}</a>
        </section>
      </aside>
    </section>
    ${veraWidgetMarkup()}
  `);
  const mediaInput = qs("[data-post-media]", root);
  const mediaPreview = qs("[data-media-preview]", root);
  qs("[data-post-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title") || "").trim();
    const body = String(form.get("body") || "").trim();
    if (!body) return showToast("Write a short lesson, milestone, or question first.", "note");
    const next = readState();
    const mediaName = mediaInput?.files?.[0]?.name || "";
    next.posts.unshift({ id: `post-${Date.now()}`, author: getUserName(next), title: title || "Career update", body, reactions: 0, comments: 0, commentsList: [], category: classifyPost(title, body), liked: false, saved: false, commentsOpen: true, mediaName });
    writeState(next);
    showToast("Post published.");
    renderPosts();
  });
  qs("[data-media-post]", root)?.addEventListener("click", () => mediaInput?.click());
  mediaInput?.addEventListener("change", () => {
    const file = mediaInput.files?.[0];
    if (!mediaPreview) return;
    if (!file) {
      mediaPreview.hidden = true;
      mediaPreview.innerHTML = "";
      return;
    }
    mediaPreview.hidden = false;
    mediaPreview.innerHTML = `${icon("paperclip")} <span>${file.name}</span><button type="button" data-clear-media>${icon("x")}</button>`;
    createIcons();
    qs("[data-clear-media]", mediaPreview)?.addEventListener("click", () => {
      mediaInput.value = "";
      mediaPreview.hidden = true;
      mediaPreview.innerHTML = "";
    });
  });
  qsa("[data-feed-tab-link]", root).forEach(link => link.addEventListener("click", () => window.setTimeout(renderPosts, 0)));
  const findOrSeedPost = (next, id) => {
    let post = next.posts.find(item => item.id === id);
    if (!post) {
      const seed = referenceFeedPosts.find(item => item.id === id);
      if (!seed) return null;
      post = { ...seed, commentsList: [], commentsOpen: false, saved: false, liked: false };
      next.posts.push(post);
    }
    return post;
  };
  qsa("[data-like-post]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const post = findOrSeedPost(next, button.dataset.likePost);
    if (!post) return;
    post.liked = !post.liked;
    post.reactions = Math.max(0, (post.reactions || 0) + (post.liked ? 1 : -1));
    writeState(next);
    renderPosts();
  }));
  qsa("[data-save-post]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const post = findOrSeedPost(next, button.dataset.savePost);
    if (!post) return;
    post.saved = !post.saved;
    writeState(next);
    showToast(post.saved ? "Post saved." : "Post removed from saved.");
    renderPosts();
  }));
  qsa("[data-comment-toggle]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const post = findOrSeedPost(next, button.dataset.commentToggle);
    if (!post) return;
    post.commentsOpen = !post.commentsOpen;
    writeState(next);
    renderPosts();
  }));
  qsa("[data-comment-form]", root).forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const comment = String(new FormData(form).get("comment") || "").trim();
    if (!comment) return;
    const next = readState();
    const post = findOrSeedPost(next, form.dataset.commentForm);
    if (!post) return;
    post.commentsList = Array.isArray(post.commentsList) ? post.commentsList : [];
    post.commentsList.push({ author: getUserName(next), body: comment, time: "Just now" });
    post.commentsOpen = true;
    writeState(next);
    showToast("Reply added.");
    renderPosts();
  }));
  qsa("[data-share-post]", root).forEach(button => button.addEventListener("click", async () => {
    const shareUrl = `${location.origin}${location.pathname}#post-${button.dataset.sharePost}`;
    try {
      await navigator.clipboard?.writeText(shareUrl);
      showToast("Share link copied.");
    } catch {
      showToast("Share link ready.");
    }
  }));
  qsa("[data-feed-save-org]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const id = button.dataset.feedSaveOrg;
    next.savedOrgs = next.savedOrgs.includes(id)
      ? next.savedOrgs.filter(item => item !== id)
      : [...next.savedOrgs, id];
    writeState(syncCurrentUser(next));
    showToast(next.savedOrgs.includes(id) ? "Saved inside Feed." : "Removed from saved.");
    renderPosts();
  }));
  qsa("[data-feed-unsave-job]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const id = button.dataset.feedUnsaveJob;
    next.savedJobs = next.savedJobs.filter(item => item !== id);
    if (!next.applications.includes(id)) delete next.applicationRecords[id];
    writeState(syncCurrentUser(next));
    showToast("Removed from saved roles.");
    renderPosts();
  }));
  qsa("[data-feed-org-chat]", root).forEach(button => button.addEventListener("click", () => {
    const org = [...DATA.companies, ...DATA.universities].find(item => item.id === button.dataset.feedOrgChat);
    if (!org) return;
    let next = readState();
    next = appendVeraMessage(next, "user", `Help me evaluate ${org.name}`);
    next = appendVeraMessage(next, "vera", `${org.name} looks strongest for ${org.signal.toLowerCase()}. Compare culture, growth, pay, and whether its watchouts match your tolerance before making it a priority.`);
    writeState(next);
    showToast("Vera added this research note to chat.");
  }));
  qsa("[data-follow]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    next.followingFeed = Array.isArray(next.followingFeed) ? next.followingFeed : [];
    if (!next.followingFeed.includes(button.dataset.follow)) next.followingFeed.push(button.dataset.follow);
    writeState(next);
    showToast(`${button.dataset.follow} added to your feed.`);
    renderPosts();
  }));
  createIcons();
  wireVeraWidget(root);
  qsa("[data-feed-body]", root).forEach(body => {
    const toggle = qs(`[data-feed-expand="${body.dataset.feedBody}"]`, root);
    if (!toggle) return;
    if (body.scrollHeight - body.clientHeight > 2) toggle.hidden = false;
    toggle.addEventListener("click", () => {
      const expanded = body.classList.toggle("is-expanded");
      toggle.textContent = expanded ? "Show less" : "Show more";
    });
  });
  syncFeedSidebarSticky();
  if (!isDirectoryTab) initPageTour("posts");
}

function renderEmployerPortal() {
  const root = qs("[data-employer-app]");
  if (!root) return;
  if (!requireRole(root, "employer", "open your employer portal")) return;
  const pipeline = ["Saved", "Screen", "Interview", "Offer"];
  const state = readState();
  const employer = state.employerProfile || {};
  const currentHash = location.hash || "#cockpit";
  const query = new URLSearchParams(location.search).get("q") || "";
  const talentPool = DATA.candidates.filter(candidate => ["Saved", "Screen", "Interview"].includes(candidate.stage));
  root.innerHTML = `
    <section class="workspace-nav glass-card">
      <nav class="os-nav" id="employer-os-nav" aria-label="Employer OS navigation">
        ${[
          ["#cockpit", "Employer Dashboard", "layout-dashboard"],
          ["#candidates", "Candidate Search", "search"],
          ["#talent-pool", "Talent Pool", "bookmark"],
          ["#roles", "Job Posts", "briefcase"],
          ["#applicants", "Applicants", "users"],
          ["#pipeline", "Hiring Pipeline", "kanban"],
          ["#company-profile", "Company Profile", "building-2"],
          ["#analytics", "Analytics", "bar-chart-3"],
          ["#settings", "Settings", "settings"]
        ].map(([href, label, ic]) => `<a class="${currentHash === href ? "active" : ""}" href="${href}">${icon(ic)} ${label}</a>`).join("")}
        <button class="os-nav-button" type="button" data-logout>${icon("log-out")} Logout</button>
      </nav>
    </section>
    <div class="os-main">
      <section class="glass-card" id="cockpit"><div class="eyebrow"><span class="spark">*</span> Hiring cockpit</div><h1 class="section-title">Fit, pipeline, reputation, and action in one place.</h1><div class="metric-strip"><div class="metric"><strong>257</strong><span>Applicants</span></div><div class="metric"><strong>71</strong><span>Qualified</span></div><div class="metric"><strong>21d</strong><span>Time to hire</span></div><div class="metric"><strong>86%</strong><span>Offer acceptance</span></div></div></section>
      <section class="glass-card employer-search" id="candidates">
        <div class="section-head"><div><div class="section-kicker">Candidate Search</div><h2 class="section-title mini">Find job seekers by fit, skills, stage, and evidence.</h2></div><span class="pill cyan">Privacy-aware</span></div>
        <div class="candidate-filter-bar">
          <div class="field"><i data-lucide="search"></i><input data-candidate-query value="${query}" placeholder="Search role, skill, education, location"></div>
          <div class="field"><i data-lucide="briefcase"></i><input data-candidate-role placeholder="Role interest"></div>
          <div class="field"><i data-lucide="map-pin"></i><input data-candidate-location placeholder="Location"></div>
        </div>
        <div class="candidate-grid" data-candidate-list>
          ${DATA.candidates.map(candidate => candidateCard(candidate)).join("")}
        </div>
      </section>
      <section class="content-grid" id="talent-pool"><div class="glass-card"><div class="section-kicker">Talent Pool</div>${talentPool.map(candidate => `<div class="list-card"><div class="list-card-top"><div><h3>${safeCandidateName(candidate)}</h3><div class="muted small">${candidate.role} - ${candidate.availability}</div></div><span class="pill gold">${candidate.stage}</span></div></div>`).join("")}</div><div class="glass-card vera-box"><h2 class="section-title mini">Fit explanation</h2><p class="muted">CareerGo explains why a person may fit a role using visible skills, portfolio evidence, career stage, availability, and role interest. Private profile fields stay hidden.</p></div></section>
      <section class="content-grid" id="roles"><div class="glass-card"><div class="section-kicker">Job Posts</div>${DATA.employerRoles.map(role => `<div class="list-card"><div class="list-card-top"><div><h3>${role.title}</h3><div class="muted small">${role.applicants} applicants - ${role.qualified} qualified</div></div><span class="pill ${role.status === "Active" ? "green" : "gold"}">${role.status}</span></div></div>`).join("")}</div><form class="glass-card form-grid" id="company-profile" data-employer-profile-form><h2 class="section-title mini">Company Profile</h2><label>Company <input name="company" value="${employer.company || ""}" placeholder="Company name"></label><label>Brand note <textarea name="hiringGoal" placeholder="Describe your hiring brand and candidate promise">${employer.hiringGoal || ""}</textarea></label><button class="btn btn-primary" type="submit">${icon("save")} Save profile</button></form></section>
      <section class="glass-card" id="applicants"><div class="section-head"><div><div class="section-kicker">Applicants</div><h2 class="section-title mini">Review applicants by fit and pipeline stage.</h2></div><button class="btn btn-cyan" type="button" data-invite-all-applicants>${icon("user-plus")} Invite candidates</button></div><div class="grid-3">${DATA.candidates.map(candidate => candidateCard(candidate, true)).join("")}</div></section>
      <section class="glass-card" id="pipeline"><div class="section-kicker">Hiring pipeline</div><div class="kanban">${pipeline.map(stage => `<div class="kanban-col"><h3>${stage}</h3>${DATA.candidates.filter(c => c.stage === stage || (stage === "Saved" && c.stage === "Saved")).map(c => `<div class="review-card"><strong>${c.name}</strong><p class="muted small">${c.role} - ${c.fit}% fit</p></div>`).join("") || `<div class="review-card"><p class="muted small">No candidates yet</p></div>`}</div>`).join("")}</div></section>
      <section class="content-grid" id="analytics"><div class="glass-card"><div class="section-kicker">Analytics</div><div class="metric-strip"><div class="metric"><strong>34%</strong><span>Qualified rate</span></div><div class="metric"><strong>11</strong><span>Saved candidates</span></div><div class="metric"><strong>4.2</strong><span>Candidate experience</span></div></div></div><div class="glass-card" id="settings"><div class="section-kicker">Settings</div><h2 class="section-title mini">Hiring preferences</h2><p class="muted">Set screening priorities, privacy rules, interview stages, and notification preferences.</p></div></section>
      <section class="content-grid" id="assistant"><div class="glass-card"><div class="section-kicker">Posts and updates</div>${DATA.communityPosts.slice(0, 2).map(post => `<div class="list-card"><h3>${post.title}</h3><p class="muted">${post.body}</p></div>`).join("")}</div><div class="glass-card vera-box"><h2 class="section-title mini">AI hiring assistant</h2><p class="muted">Vera can summarize candidates, draft outreach, generate interview questions, and explain pipeline bottlenecks.</p><div class="hero-actions"><button class="btn btn-primary" type="button" data-vera-draft-outreach>${icon("sparkles")} Draft outreach</button><button class="btn btn-cyan" type="button" data-vera-interview-questions>${icon("list-checks")} Interview questions</button></div></div></section>
    </div>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `;
  createIcons();
  
  // Wire up nav links to update active state and close drawer on mobile
  const navLinks = root.querySelectorAll("#employer-os-nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      document.body.classList.remove("sidebar-open");
    });
  });
  function bindCandidateActions(scope = root) {
    qsa("[data-save-candidate], [data-invite-candidate]", scope).forEach(button => {
    button.addEventListener("click", () => showToast(button.dataset.saveCandidate ? "Candidate saved to Talent Pool." : "Invite prepared with role context."));
    });
  }
  bindCandidateActions();
  const candidateList = qs("[data-candidate-list]", root);
  const candidateInputs = qsa("[data-candidate-query], [data-candidate-role], [data-candidate-location]", root);
  function renderCandidateResults() {
    if (!candidateList) return;
    const general = String(qs("[data-candidate-query]", root)?.value || "").toLowerCase();
    const role = String(qs("[data-candidate-role]", root)?.value || "").toLowerCase();
    const locationValue = String(qs("[data-candidate-location]", root)?.value || "").toLowerCase();
    const matches = DATA.candidates.filter(candidate => {
      const hay = [candidate.name, candidate.role, candidate.location, candidate.education, candidate.experience, candidate.careerStage, candidate.portfolio, ...candidate.skills].join(" ").toLowerCase();
      return hay.includes(general) && candidate.role.toLowerCase().includes(role) && candidate.location.toLowerCase().includes(locationValue);
    });
    candidateList.innerHTML = matches.map(candidate => candidateCard(candidate)).join("") || `<div class="card">No candidates match those filters yet.</div>`;
    createIcons();
    bindCandidateActions(candidateList);
  }
  candidateInputs.forEach(input => input.addEventListener("input", renderCandidateResults));

  qs("[data-employer-profile-form]", root)?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    next.employerProfile = {
      ...(next.employerProfile || {}),
      company: String(form.get("company") || "").trim(),
      hiringGoal: String(form.get("hiringGoal") || "").trim(),
      updatedAt: nowStamp()
    };
    writeState(next);
    showToast("Company profile saved.");
  });
  qs("[data-invite-all-applicants]", root)?.addEventListener("click", () => {
    showToast(`Invite drafted for ${DATA.candidates.length} qualified applicants.`);
  });
  qs("[data-vera-draft-outreach]", root)?.addEventListener("click", () => {
    showToast("Vera drafted outreach messages for your shortlisted candidates.");
  });
  qs("[data-vera-interview-questions]", root)?.addEventListener("click", () => {
    showToast("Vera generated interview questions based on your active roles.");
  });
}

function safeCandidateName(candidate) {
  return candidate.privacy === "Anonymized" ? `${candidate.role} candidate` : candidate.name;
}

function candidateCard(candidate, compact = false) {
  return `
    <article class="tool-card candidate-card">
      <div class="list-card-top"><div><h3>${safeCandidateName(candidate)}</h3><div class="muted small">${candidate.careerStage} - ${candidate.location}</div></div><span class="score">${candidate.fit}%</span></div>
      <p>${candidate.role}</p>
      ${pills(candidate.skills, "cyan")}
      ${compact ? "" : `
        <div class="candidate-facts">
          <span>${icon("graduation-cap")} ${candidate.education}</span>
          <span>${icon("clock")} ${candidate.availability}</span>
          <span>${icon("folder-open")} ${candidate.portfolio} portfolio</span>
          <span>${icon("wallet")} ${candidate.salary}</span>
        </div>
        <div class="vera-box subtle"><strong>Match reason</strong><p class="muted small">${candidate.reason}</p></div>
      `}
      <div class="hero-actions compact-actions">
        <button class="btn btn-ghost" data-save-candidate="${candidate.id}">${icon("bookmark")} Save</button>
        <button class="btn btn-primary" data-invite-candidate="${candidate.id}">${icon("send")} Invite</button>
      </div>
    </article>
  `;
}

function renderEmployers() {
  const root = qs("[data-employers]");
  if (!root) return;
  const state = readState();
  if (state.session.loggedIn && state.session.role === "employer") {
    location.href = "employer-app.html";
    return;
  }
  root.innerHTML = `
    <div class="glass-card employer-entry-card">
      <div>
        <div class="eyebrow"><span class="spark">*</span> Employer Journey</div>
        <h2 class="section-title">Hire based on fit, skills, and career trajectory.</h2>
        <p class="section-sub">CareerGo helps employers post roles, discover candidates, review talent profiles, manage applicants, and reduce noisy keyword-only screening.</p>
      </div>
      <div class="hero-actions employer-entry-actions">
        <a class="btn btn-primary" href="register.html">${icon("user-plus")} Create Employer Account</a>
        <a class="btn btn-ghost" href="login.html">${icon("log-in")} Login</a>
        <a class="btn btn-cyan" href="#learn-more">${icon("arrow-down")} Learn More</a>
      </div>
    </div>
    <div class="grid-3 employer-feature-grid">
      ${[
        ["Talent discovery", "Search candidates by readiness, skill trajectory, and Vera-verified evidence.", "users"],
        ["Company reputation", "Understand reviews, culture signals, candidate concerns, and hiring conversion.", "building-2"],
        ["University outcomes", "Track graduate readiness, employer demand, internship pipelines, and alumni feedback.", "graduation-cap"]
      ].map(([title, body, ic]) => `
        <div class="card">
          <div class="feature-icon">${icon(ic)}</div>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
      `).join("")}
    </div>
    <div class="glass-card employer-dashboard-card" id="learn-more">
      <div class="section-head employer-dashboard-head">
        <div>
          <div class="section-kicker">Hiring dashboard</div>
          <h2 class="section-title">A cleaner view of fit, pipeline, and reputation.</h2>
        </div>
        <a class="btn btn-primary" href="register.html">${icon("layout-dashboard")} Create employer workspace</a>
      </div>
      <div class="metric-strip">
        <div class="metric"><strong>126</strong><span>Candidates</span></div>
        <div class="metric"><strong>21d</strong><span>Time to hire</span></div>
        <div class="metric"><strong>86%</strong><span>Offer acceptance</span></div>
        <div class="metric"><strong>4.4</strong><span>Reputation</span></div>
      </div>
    </div>
  `;
  createIcons();
}

function renderComparison() {
  const root = qs("[data-comparison]");
  if (!root) return;
  const orgs = [...DATA.companies, ...DATA.universities].slice(0, 5);
  const animatedScore = (value, type = "rating") => `
    <span class="comparison-score ${type}" data-comparison-score="${value.toFixed(1)}">
      <span class="comparison-score-main">
        ${icon(type === "growth" ? "trending-up" : "star")}
        <span class="comparison-score-number">${value.toFixed(1)}</span>
      </span>
      <span class="comparison-score-bar" aria-hidden="true"><span></span></span>
    </span>
  `;
  root.innerHTML = `
    <div class="table-wrap">
      <table class="comparison-table" data-comparison-table>
        <thead><tr><th>Name</th><th>Type</th><th>Rating</th><th>Growth</th><th>Pay / Outcome</th><th>Best signal</th></tr></thead>
        <tbody>
          ${orgs.map(org => `<tr><td><strong>${org.name}</strong></td><td>${org.type}</td><td>${animatedScore(org.rating, "rating")}</td><td>${animatedScore(org.scores.growth, "growth")}</td><td>${org.salary}</td><td>${org.signal}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function initComparisonTableAnimation() {
  const card = qs("[data-comparison-card]");
  if (!card || card.dataset.comparisonAnimationReady === "true") return;
  const table = qs("[data-comparison-table]", card);
  if (!table) return;
  card.dataset.comparisonAnimationReady = "true";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const titleBlock = qs(".section-head", card);
  const header = qs("thead tr", table);
  const rows = qsa("tbody tr", table);
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  if (reducedMotion) {
    card.classList.add("comparison-animated");
    qsa("[data-comparison-score]", table).forEach(score => {
      const target = Number(score.dataset.comparisonScore || 0);
      qs(".comparison-score-number", score).textContent = target.toFixed(1);
      qs(".comparison-score-bar span", score).style.width = `${Math.min(100, (target / 5) * 100)}%`;
    });
    return;
  }

  titleBlock?.classList.add("comparison-reveal-title");
  header?.classList.add("comparison-reveal-header");
  rows.forEach(row => row.classList.add("comparison-reveal-row"));
  qsa("[data-comparison-score]", table).forEach(score => {
    const target = Number(score.dataset.comparisonScore || 0);
    qs(".comparison-score-number", score).textContent = target.toFixed(1);
    qs(".comparison-score-bar span", score).style.width = `${Math.min(100, (target / 5) * 100)}%`;
  });

  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    card.classList.add("comparison-animated");

    window.setTimeout(() => header?.classList.add("is-visible"), 250);
    rows.forEach((row, index) => {
      window.setTimeout(() => {
        row.classList.add("is-visible");
      }, 420 + index * 100);
    });

    observer.disconnect();
  }, { threshold: 0.3 });

  observer.observe(card);
}

function initGlobalBackToTop() {
  if (document.body.dataset.backTopReady === "true") return;
  document.body.dataset.backTopReady = "true";
  let button = qs(".home-back-top");
  if (!button) {
    button = document.createElement("button");
    button.type = "button";
    button.className = "home-back-top";
    button.setAttribute("aria-label", "Back to top");
    button.innerHTML = icon("arrow-up");
    document.body.appendChild(button);
    createIcons();
  }
  const sync = () => {
    button.classList.toggle("is-visible", window.scrollY > 520);
  };
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", sync, { passive: true });
  sync();
}

function init() {
  ensureBrandFonts();
  ensureDemoDashboardSession();
  wireStaticLoginForm();
  renderNavigation();
  renderFeatured();
  renderJobSeekerEntry();
  renderAboutPage();
  renderCommunityPage();
  renderJobsPage();
  renderDirectoryPage(document.body.dataset.directory || "");
  renderMarketPulsePage();
  renderCompanyProfile();
  renderUserProfile();
  renderDashboard();
  renderRecommendedRoles();
  renderRoleDetailPage();
  renderNotificationsPage();
  renderCompareTray();
  renderVera();
  renderAuth();
  renderCandidateOnboarding();
  renderEmployerOnboarding();
  renderGrow();
  renderGrowthMovePage();
  renderProfile();
  renderPublicProfile();
  renderSettings();
  renderEditCareerData();
  renderSavedItems();
  renderMarket();
  renderAutopilot();
  renderAutopilotJobDetail();
  renderPosts();
  renderEmployerPortal();
  renderEmployers();
  renderComparison();
  renderSiteFooter();
  renderExploreFeaturedOpportunities();
  initFeaturedRolesCarousel();
  initResearchMarquee();
  initHomeMetricCountUp();
  initGlobalNumberAnimations();
  initGlobalInteractionAnimations();
  initHomeStageAnimation();
  initComparisonTableAnimation();
  initGlobalBackToTop();
  initPublicHeroSearch();
  bindGlobalActions();
  createIcons();
  initSidebarToggle();
  initWorkspaceRailTooltips();
  initWorkspaceRailScrollSync();
  initFeedSidebarStickySync();
}

function loadDesignSystem() {
  if (document.getElementById("careergo-design-system")) return Promise.resolve();

  return new Promise(resolve => {
    const stylesheet = document.createElement("link");
    stylesheet.id = "careergo-design-system";
    stylesheet.rel = "stylesheet";
    stylesheet.href = "design-system.css";
    stylesheet.addEventListener("load", resolve, { once: true });
    stylesheet.addEventListener("error", resolve, { once: true });
    document.head.appendChild(stylesheet);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadDesignSystem();
  init();
});
