const DATA = {
  jobs: [
    {
      id: "job-product-designer",
      title: "Product Designer",
      company: "Maybank",
      location: "Kuala Lumpur",
      salary: "RM 72k - 98k",
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
      salary: "RM 66k - 92k",
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
      salary: "RM 54k - 70k",
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
      salary: "RM 82k - 116k",
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
      salary: "RM 60k - 82k",
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
      tags: ["Research", "Strong alumni", "Public"],
      summary: "Top public university with strong research profile, employer recognition, and broad alumni network.",
      scores: { culture: 4.2, growth: 4.5, pay: 4.2, balance: 4.0 },
      highlights: ["Strong employer brand", "Large alumni network", "Wide program selection"],
      watchouts: ["Competitive environment", "Administrative processes can be slow"]
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
      watchouts: ["Higher tuition cost", "Program quality varies by faculty"]
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
      tags: ["International", "Research", "Business"],
      summary: "International university campus with strong research links, global curriculum, and business/engineering pathways.",
      scores: { culture: 4.1, growth: 4.3, pay: 4.0, balance: 3.9 },
      highlights: ["International recognition", "Research-led teaching", "Good transfer pathways"],
      watchouts: ["Higher academic intensity", "Cost can be significant"]
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
      watchouts: ["Fast academic pace", "Campus location may affect commute"]
    }
  ],
  reviews: [
    { id: "r1", targetId: "maybank", author: "Graduate Trainee", rating: 4.6, title: "Structured and safe first career step", body: "The training was clear and managers gave useful feedback. Best for people who want a stable learning curve.", date: "Jun 2026" },
    { id: "r2", targetId: "grab", author: "Data Analyst", rating: 4.1, title: "Fast learning, intense rhythm", body: "You learn quickly because the problems are real and regional. Balance depends heavily on the team.", date: "Jun 2026" },
    { id: "r3", targetId: "taylors", author: "Final Year Student", rating: 4.5, title: "Helpful career office and practical projects", body: "The employer projects helped me explain my work better during interviews.", date: "May 2026" },
    { id: "r4", targetId: "um", author: "Computer Science Graduate", rating: 4.4, title: "Strong name and alumni reach", body: "The reputation opens doors, but you still need to build your own portfolio early.", date: "May 2026" }
  ],
  profile: null,
  futures: [
    { role: "Senior Product Designer", probability: 82, salary: "RM 108k - 142k", timeline: "12-18 months", risk: "Needs stronger product strategy proof" },
    { role: "AI Product Associate", probability: 67, salary: "RM 96k - 132k", timeline: "9-15 months", risk: "Needs AI product vocabulary and metrics" },
    { role: "UX Research Specialist", probability: 76, salary: "RM 86k - 118k", timeline: "6-12 months", risk: "Lower salary ceiling than product path" }
  ],
  missions: [
    { id: "m1", title: "Compare 3 organizations", body: "Review culture, pay, growth, and watchouts before applying.", xp: 120, progress: 66, href: "companies.html" },
    { id: "m2", title: "Upgrade one case study", body: "Add trade-offs, metric impact, and stakeholder decisions.", xp: 180, progress: 35, href: "profile.html" },
    { id: "m3", title: "Practice interview story", body: "Record one STAR answer for ambiguity and feedback.", xp: 90, progress: 20, href: "vera.html#interview" }
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
    { id: "c1", name: "Siti Nur", role: "Product Designer", fit: 92, skills: ["Figma", "Research", "Design Systems"], stage: "Screen" },
    { id: "c2", name: "Daniel Lim", role: "Data Analyst", fit: 88, skills: ["SQL", "Python", "Dashboards"], stage: "Interview" },
    { id: "c3", name: "Priya Nair", role: "Frontend Developer", fit: 84, skills: ["React", "TypeScript", "Testing"], stage: "Saved" }
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

const CAREER_GOALS = [
  "Find a job",
  "Find internship",
  "Improve resume",
  "Understand my career options",
  "Plan long-term career path",
  "Know my market salary",
  "Switch career",
  "Learn new skills",
  "Prepare for interview",
  "Build portfolio",
  "Get promoted",
  "Become manager / leader",
  "Find freelance work",
  "Return to work",
  "Explore part-time / advisory roles"
];

const DASHBOARD_TOUR_STEPS = [
  {
    target: "[data-tour-target='dashboard-hero']",
    title: "Your personal Career OS",
    body: "This dashboard changes based on your career stage, goals, skills, and preferences. It is the home base Vera uses to guide your next move.",
    mission: "Start here whenever you feel unsure what to do next."
  },
  {
    target: "[data-tour-target='sidebar']",
    title: "CareerGo navigation",
    body: "These sections are your operating system: profile intelligence, jobs, Vera, market insights, applications, and professional posts.",
    mission: "Open one area whenever you want deeper support."
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
    target: "[data-tour-target='intelligence']",
    title: "Career Intelligence Profile",
    body: "This section explains your resume readiness, ATS signals, skill competitiveness, and market fit using the information you have provided.",
    mission: "Update your profile whenever your situation changes."
  },
  {
    target: "[data-tour-target='missions']",
    title: "Small missions",
    body: "Missions turn career growth into manageable actions. Complete them to build evidence, confidence, and better recommendations.",
    mission: "Finish one beginner mission today."
  },
  {
    target: "[data-tour-target='applications']",
    title: "Application journey",
    body: "Track saved jobs, applications, follow-ups, and interview prep so your search feels organized instead of scattered.",
    mission: "Save or review one role that matches your roadmap."
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
    guidedTour: { dashboard: { status: "new", step: 0 } },
    reviews: DATA.reviews,
    chat: [],
    notifications: [],
    autopilotRules: { salary: "", location: "", threshold: 75, scanOnly: true, exclude: "" },
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
    intelligence: generateCareerIntelligence({ careerStage: "", goals: [], skills: { technical: [], projects: [] }, resume: { uploaded: false }, preferences: {} }),
    onboardingStatus: { started: false, completed: false, currentStep: 0 },
    createdAt,
    updatedAt: createdAt
  };
}

function normalizeState(state) {
  const profile = normalizeProfile(state.profile || createEmptyProfile());
  const session = { loggedIn: false, role: "guest", currentUserId: null, name: "", isDemo: false, ...(state.session || {}) };
  if (session.loggedIn && !session.name) session.name = profile.personal.fullName;
  return ensureGuidedTour({
    ...state,
    auth: state.auth || { users: [] },
    session,
    onboarding: { candidateDone: false, employerDone: false, currentStep: 0, lastSavedAt: "", ...(state.onboarding || {}) },
    profile,
    notifications: Array.isArray(state.notifications) ? state.notifications : [],
    savedJobs: Array.isArray(state.savedJobs) ? state.savedJobs : [],
    applications: Array.isArray(state.applications) ? state.applications : [],
    applicationRecords: normalizeApplicationRecords(state),
    ignoredJobs: Array.isArray(state.ignoredJobs) ? state.ignoredJobs : [],
    comparedJobs: Array.isArray(state.comparedJobs) ? state.comparedJobs : [],
    savedOrgs: Array.isArray(state.savedOrgs) ? state.savedOrgs : [],
    posts: Array.isArray(state.posts) ? state.posts : DATA.communityPosts
  });
}

function ensureGuidedTour(state) {
  const guidedTour = state.guidedTour || {};
  guidedTour.dashboard = {
    status: "new",
    step: 0,
    ...(guidedTour.dashboard || {})
  };
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
    achievements: ["Reduced manual reporting time by 40%", "Supported a seller onboarding workflow used by 800+ accounts"],
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
  profile.privacy = {
    profileVisibility: "Private",
    allowEmployerDiscovery: true,
    allowCoachMemory: true
  };
  profile.onboardingStatus = { started: true, completed: true, currentStep: 6 };
  profile.intelligence = generateCareerIntelligence(profile);
  profile.updatedAt = nowStamp();
  return profile;
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
  state.onboarding = { ...state.onboarding, candidateDone: true, currentStep: 6, lastSavedAt: nowStamp() };
  state.savedJobs = ["job-data-analyst", "job-ai-product", "job-product-designer"];
  state.applications = ["job-data-analyst"];
  state.applicationRecords = {
    "job-data-analyst": createApplicationRecord("job-data-analyst", "interview", {
      nextAction: "Practice one SQL case and prepare a short dashboard walkthrough before Friday.",
      deadline: "Friday",
      note: "Vera flagged SQL proof as the interview risk."
    }),
    "job-ai-product": createApplicationRecord("job-ai-product", "saved", {
      nextAction: "Ask Vera whether this is a stretch role or a strategic long-term target.",
      deadline: "This week",
      note: "High upside, but product strategy proof is still light."
    }),
    "job-product-designer": createApplicationRecord("job-product-designer", "screening", {
      nextAction: "Tailor resume bullets around research, journey mapping, and stakeholder outcomes.",
      deadline: "Tomorrow",
      note: "Recruiter review simulated for the judge preview."
    })
  };
  state.savedOrgs = ["grab", "maybank", "taylors"];
  state.missionProgress = {
    ...state.missionProgress,
    "pm1": 45,
    "pm2": 30,
    "pm3": 20,
    "tour-profile": 60
  };
  state.guidedTour = { dashboard: { status: "new", step: 0, startedAt: "" } };
  state.notifications = [
    { id: "n-demo", title: "Demo mode", body: "This judge preview uses a realistic personalized profile. You can explore safely." },
    { id: "n-vera", title: "Vera next step", body: "Ask for a 7-day switcher roadmap or review the Product Analyst path." }
  ];
  return state;
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
    timeline,
    updatedAt: now
  };
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

function getTrackedJobs(state = readState()) {
  return Object.values(state.applicationRecords || {})
    .map(record => ({ record, job: DATA.jobs.find(job => job.id === record.jobId) }))
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
  const marketFit = goals.includes("Know my market salary") || goals.includes("Get promoted") ? "Market value should be benchmarked next" : "Market fit depends on target roles selected";
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
      { id: "pm1", title: "Internship readiness", body: "Add one project, one club/leadership example, and one preferred industry.", xp: 80, progress: 35, href: "profile.html" },
      { id: "pm2", title: "Resume checklist", body: "Create a one-page student resume with projects and activities.", xp: 70, progress: 20, href: "profile.html" },
      { id: "pm3", title: "Find internship matches", body: "Search roles and save two internships or trainee programs.", xp: 90, progress: 15, href: "jobs.html" }
    ];
  }
  if (profile.careerStage === "Planning to switch career") {
    return [
      { id: "pm1", title: "Transition map", body: "List transferable skills and the first bridge role toward your target field.", xp: 100, progress: 40, href: "profile.html" },
      { id: "pm2", title: "Risk check", body: "Compare salary, timeline, and skill gaps before making a move.", xp: 80, progress: 25, href: "market.html" },
      { id: "pm3", title: "Bridge skill sprint", body: `Pick one missing skill for ${target} and create proof this week.`, xp: 120, progress: 20, href: "vera.html#skills" }
    ];
  }
  if (profile.careerStage === "Growing into leadership") {
    return [
      { id: "pm1", title: "Promotion readiness", body: "Document one leadership outcome, not only task execution.", xp: 120, progress: 45, href: "profile.html" },
      { id: "pm2", title: "Salary benchmark", body: "Check market value for your next-level role.", xp: 70, progress: 35, href: "market.html" },
      { id: "pm3", title: "Leadership interview", body: "Practice a conflict, coaching, and stakeholder story.", xp: 90, progress: 20, href: "vera.html#interview" }
    ];
  }
  if (profile.careerStage === "Preparing for retirement or advisory work") {
    return [
      { id: "pm1", title: "Advisory profile", body: "Package your expertise into clear advisory topics.", xp: 90, progress: 30, href: "profile.html" },
      { id: "pm2", title: "Flexible work filters", body: "Set workload, location, and advisory preferences.", xp: 60, progress: 25, href: "profile.html" },
      { id: "pm3", title: "Mentoring options", body: "Ask Vera to draft a mentoring/advisory positioning statement.", xp: 80, progress: 20, href: "vera.html" }
    ];
  }
  return [
    { id: "pm1", title: "Profile baseline", body: "Complete your profile so CareerGo can improve your roadmap.", xp: 90, progress: 45, href: "profile.html" },
    { id: "pm2", title: "Role shortlist", body: "Save two roles that match your preferred path.", xp: 80, progress: 30, href: "jobs.html" },
    { id: "pm3", title: "Coach plan", body: "Ask Vera to create a simple 7-day action plan.", xp: 70, progress: 20, href: "vera.html#plan" }
  ];
}

function starterMissions(profile) {
  return [
    {
      id: "tour-profile",
      title: "Complete one profile section",
      body: "Add or review skills, projects, or preferences so recommendations become more accurate.",
      href: "profile.html",
      icon: "user-round"
    },
    {
      id: "tour-vera",
      title: "Ask Vera for a plan",
      body: `Get a simple 7-day plan for ${getTargetLabel(profile)} with actions you can actually finish.`,
      href: "vera.html#plan",
      icon: "sparkles"
    },
    {
      id: "tour-job",
      title: "Review one job match",
      body: "Open a suggested role, check why it matches, then save or compare it.",
      href: "jobs.html",
      icon: "briefcase"
    },
    {
      id: "tour-research",
      title: "Research an organization",
      body: "Check ratings, background, salary or outcome signals, and review themes before deciding.",
      href: "companies.html",
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

function bindMissionActions() {
  qsa("[data-complete-mission]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      const id = button.dataset.completeMission;
      const state = readState();
      state.missionProgress = { ...state.missionProgress, [id]: 100 };
      state.notifications = [
        { id: `n-${id}`, title: "Mission completed", body: "CareerGo updated your mission progress." },
        ...state.notifications.filter(item => item.id !== `n-${id}`)
      ].slice(0, 5);
      writeState(syncCurrentUser(state));
      const card = qs(`[data-mission-card="${id}"]`);
      if (card) {
        card.classList.add("complete");
        const bar = qs(".progress span", card);
        if (bar) bar.style.width = "100%";
      }
      button.innerHTML = `${icon("check")} Done`;
      createIcons();
      showToast("Mission marked complete.");
    });
  });
}

function getDashboardTourState() {
  const state = readState();
  return state.guidedTour?.dashboard || { status: "new", step: 0 };
}

function saveDashboardTour(partial) {
  const state = readState();
  state.guidedTour = state.guidedTour || {};
  state.guidedTour.dashboard = {
    status: "new",
    step: 0,
    ...(state.guidedTour.dashboard || {}),
    ...partial
  };
  writeState(syncCurrentUser(state));
}

function initDashboardTour() {
  const root = qs("[data-dashboard]");
  if (!root) return;
  const state = readState();
  if (!state.session.loggedIn || !state.onboarding.candidateDone) return;
  const tour = getDashboardTourState();
  if (tour.status === "completed" || tour.status === "skipped") {
    injectTourRestart();
    return;
  }
  window.setTimeout(() => showDashboardTourStep(tour.step || 0), 180);
}

function injectTourRestart() {
  if (qs("[data-restart-tour]")) return;
  const target = qs("[data-tour-target='dashboard-hero'] .hero-actions") || qs("[data-tour-target='dashboard-hero']");
  if (!target) return;
  const btn = document.createElement("button");
  btn.className = "btn btn-ghost tour-restart-btn";
  btn.type = "button";
  btn.dataset.restartTour = "";
  btn.innerHTML = `${icon("map")} Replay tour`;
  btn.addEventListener("click", () => {
    saveDashboardTour({ status: "active", step: 0, startedAt: nowStamp() });
    showDashboardTourStep(0);
  });
  target.appendChild(btn);
  createIcons();
}

function removeDashboardTour() {
  qsa(".tour-highlight").forEach(item => item.classList.remove("tour-highlight"));
  qsa("[data-tour-layer]").forEach(item => item.remove());
  document.body.classList.remove("sidebar-open");
  if (window.__careergoTourReposition) window.removeEventListener("resize", window.__careergoTourReposition);
}

function showDashboardTourStep(index) {
  const stepIndex = Math.max(0, Math.min(DASHBOARD_TOUR_STEPS.length - 1, index));
  const step = DASHBOARD_TOUR_STEPS[stepIndex];
  const target = qs(step.target);
  if (!target) return;
  removeDashboardTour();
  saveDashboardTour({ status: "active", step: stepIndex, startedAt: getDashboardTourState().startedAt || nowStamp() });
  document.body.classList.toggle("sidebar-open", step.target.includes("sidebar") && window.innerWidth <= 1020);
  target.classList.add("tour-highlight");
  target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

  const backdrop = document.createElement("div");
  backdrop.className = "tour-backdrop";
  backdrop.dataset.tourLayer = "";
  backdrop.setAttribute("aria-hidden", "true");

  const card = document.createElement("aside");
  card.className = "tour-card glass-card";
  card.dataset.tourLayer = "";
  card.setAttribute("role", "dialog");
  card.setAttribute("aria-live", "polite");
  card.innerHTML = `
    <div class="tour-progress">
      <span>Step ${stepIndex + 1} of ${DASHBOARD_TOUR_STEPS.length}</span>
      <div class="tour-dots">${DASHBOARD_TOUR_STEPS.map((_, dotIndex) => `<i class="${dotIndex <= stepIndex ? "active" : ""}"></i>`).join("")}</div>
    </div>
    <h2>${step.title}</h2>
    <p>${step.body}</p>
    <div class="tour-mission">${icon("target")} ${step.mission}</div>
    <div class="tour-actions">
      <button class="btn btn-ghost" type="button" data-tour-skip>Skip</button>
      <div>
        <button class="btn btn-ghost" type="button" data-tour-back ${stepIndex === 0 ? "disabled" : ""}>Back</button>
        <button class="btn btn-primary" type="button" data-tour-next>${icon(stepIndex === DASHBOARD_TOUR_STEPS.length - 1 ? "check" : "arrow-right")} ${stepIndex === DASHBOARD_TOUR_STEPS.length - 1 ? "Finish" : "Next"}</button>
      </div>
    </div>
  `;
  document.body.append(backdrop, card);
  positionTourCard(card, target);
  window.setTimeout(() => positionTourCard(card, target), 260);
  window.__careergoTourReposition = () => positionTourCard(card, target);
  window.addEventListener("resize", window.__careergoTourReposition);

  qs("[data-tour-skip]", card).addEventListener("click", () => {
    saveDashboardTour({ status: "skipped", step: stepIndex, skippedAt: nowStamp() });
    removeDashboardTour();
    injectTourRestart();
  });
  qs("[data-tour-back]", card).addEventListener("click", () => showDashboardTourStep(stepIndex - 1));
  qs("[data-tour-next]", card).addEventListener("click", () => {
    if (stepIndex === DASHBOARD_TOUR_STEPS.length - 1) {
      saveDashboardTour({ status: "completed", step: stepIndex, completedAt: nowStamp() });
      removeDashboardTour();
      injectTourRestart();
      showToast("Tour completed. Your first missions are ready.");
      return;
    }
    showDashboardTourStep(stepIndex + 1);
  });
  createIcons();
}

function positionTourCard(card, target) {
  if (window.innerWidth <= 760) {
    card.style.left = "16px";
    card.style.right = "16px";
    card.style.top = "auto";
    card.style.bottom = "16px";
    return;
  }
  const rect = target.getBoundingClientRect();
  const width = Math.min(420, window.innerWidth - 40);
  card.style.width = `${width}px`;
  card.style.right = "auto";
  card.style.bottom = "auto";
  const leftCandidate = rect.right + 18;
  const left = leftCandidate + width < window.innerWidth - 20
    ? leftCandidate
    : Math.max(20, rect.left - width - 18);
  const top = Math.max(92, Math.min(window.innerHeight - 340, rect.top + rect.height / 2 - 170));
  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
}

function requireAccount(root, purpose = "open this workspace") {
  const state = readState();
  if (state.session.loggedIn) return true;
  root.innerHTML = `
    <div class="locked-state-wrap">
      <div class="locked-state glass-card">
        <div class="eyebrow"><span class="spark">*</span> Account required</div>
        <h1 class="section-title">Create your account to ${purpose}.</h1>
        <p class="section-sub">CareerGo personalizes your roadmap, Vera’s coaching style, job matching, and dashboard from your own career situation.</p>
        <div class="hero-actions">
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
              <p>Vera adapts your career plan, coaching tone, and job suggestions based on your real profile — not templates.</p>
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
}

function publicNav() {
  const page = document.body.dataset.page || "home";
  return `
    <a class="brand" href="index.html"><img class="brand-logo" src="assets/careergo-logo.png" alt="CareerGo logo"><span class="brand-text"><strong>CareerGo</strong><span>Career OS</span></span></a>
    <nav class="nav-links" aria-label="Public navigation">
      ${[
        ["home", "Home", "index.html"],
        ["jobs", "Jobs", "jobs.html"],
        ["companies", "Companies", "companies.html"],
        ["universities", "Universities", "universities.html"]
      ].map(([key, label, href]) => `<a data-nav="${key}" class="${page === key ? "active" : ""}" href="${href}">${label}</a>`).join("")}
    </nav>
    <div class="nav-actions">
      <a class="btn btn-ghost ${page === "login" ? "active" : ""}" href="login.html">Login</a>
      <a class="btn btn-primary ${page === "register" ? "active" : ""}" href="register.html">Create Account</a>
    </div>
  `;
}

function workspaceTopNav() {
  const state = readState();
  return `
    <a class="brand" href="dashboard.html"><img class="brand-logo" src="assets/careergo-logo.png" alt="CareerGo logo"><span class="brand-text"><strong>CareerGo</strong><span>Workspace</span></span></a>
    <form class="workspace-search" role="search" data-workspace-search data-tour-target="workspace-search">
      ${icon("search")}
      <input name="q" aria-label="Search workspace" placeholder="Search jobs, companies, universities">
    </form>
    <div class="nav-actions">
      <a class="btn btn-ghost" href="autopilot.html">${icon("bell")} ${state.notifications?.length || 0}</a>
      <a class="btn btn-primary" href="profile.html">${icon("user-round")} ${getFirstName(state)}</a>
    </div>
  `;
}

function renderNavigation() {
  const topbar = qs(".topbar");
  if (!topbar) return;
  const navInner = qs(".nav-inner", topbar);
  const mobileNav = qs(".mobile-nav", topbar);
  if (!navInner) return;
  const state = readState();
  const loggedIn = Boolean(state.session.loggedIn);
  navInner.innerHTML = loggedIn ? workspaceTopNav() : publicNav();
  if (mobileNav) {
    mobileNav.innerHTML = loggedIn
      ? `<a href="dashboard.html">Dashboard</a><a href="jobs.html">Jobs</a><a href="autopilot.html">Applications</a><a href="vera.html">Vera</a><a href="profile.html">Profile</a>`
      : `<a data-nav="home" href="index.html">Home</a><a data-nav="jobs" href="jobs.html">Jobs</a><a data-nav="companies" href="companies.html">Companies</a><a data-nav="universities" href="universities.html">Universities</a><a data-nav="login" href="login.html">Login</a><a data-nav="register" href="register.html">Create Account</a>`;
  }
  createIcons();
  setActiveNav();
  qs("[data-workspace-search]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const q = String(form.get("q") || "").trim();
    if (!q) return;
    const lower = q.toLowerCase();
    const destination = lower.includes("university") || lower.includes("college") || lower.includes("degree") || lower.includes("scholarship")
      ? "universities.html"
      : lower.includes("company") || lower.includes("culture") || lower.includes("review") || lower.includes("maybank") || lower.includes("grab") || lower.includes("cimb")
        ? "companies.html"
        : "jobs.html";
    location.href = `${destination}?q=${encodeURIComponent(q)}`;
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

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function createIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function orgsFor(type) {
  if (type === "universities") return DATA.universities;
  if (type === "companies") return DATA.companies;
  return [...DATA.companies, ...DATA.universities];
}

function rating(value) {
  return `<span class="rating">${icon("star")} ${Number(value).toFixed(1)}</span>`;
}

function pills(items, extra = "") {
  return `<div class="pill-row">${items.map(item => `<span class="pill ${extra}">${item}</span>`).join("")}</div>`;
}

function progressBar(value) {
  return `<div class="progress" aria-label="${value}% complete"><span style="width:${Math.max(0, Math.min(100, value))}%"></span></div>`;
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

function osNav(active = "") {
  const links = [
    ["dashboard", "Dashboard", "layout-dashboard", "dashboard.html"],
    ["profile", "Profile", "user-round", "profile.html"],
    ["jobs", "Jobs", "briefcase", "jobs.html"],
    ["vera", "Vera", "sparkles", "vera.html"],
    ["market", "Market", "trending-up", "market.html"],
    ["autopilot", "Applications", "kanban", "autopilot.html"]
  ];
  return `
    <section class="workspace-nav glass-card" data-tour-target="sidebar">
      <nav class="os-nav" aria-label="Career OS navigation">
        ${links.map(([key, label, ic, href]) => `<a class="${active === key ? "active" : ""}" href="${href}">${icon(ic)} ${label}</a>`).join("")}
        <button class="os-nav-button" type="button" data-logout>${icon("log-out")} Logout</button>
      </nav>
    </section>
  `;
}

function osModuleHeader(active, title, subtitle = "") {
  if (active === "dashboard") return "";
  return `
    <div class="os-module-header">
      <div>
        <div class="breadcrumb"><a href="dashboard.html">Dashboard</a><span>/</span><strong>${title}</strong></div>
        ${subtitle ? `<p>${subtitle}</p>` : ""}
      </div>
      <a class="btn btn-ghost" href="dashboard.html">${icon("arrow-left")} Back to Dashboard</a>
    </div>
  `;
}

function appShell(active, content, options = {}) {
  const title = options.title || active.charAt(0).toUpperCase() + active.slice(1);
  return `${osNav(active)}<div class="os-main">${osModuleHeader(active, title, options.subtitle || "")}${content}</div><div class="sidebar-overlay" id="sidebar-overlay"></div>`;
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

function setActiveNav() {
  const page = document.body.dataset.page || "home";
  qsa("[data-nav]").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === page);
  });
}

function renderFeatured() {
  const jobRoot = qs("[data-featured-jobs]");
  if (jobRoot) {
    jobRoot.innerHTML = DATA.jobs.slice(0, 3).map(job => `
      <a class="list-card" href="jobs.html?job=${job.id}">
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
  }
  const orgRoot = qs("[data-featured-orgs]");
  if (orgRoot) {
    orgRoot.innerHTML = [...DATA.companies, ...DATA.universities].slice(0, 4).map(org => `
      <a class="list-card" href="${org.type === "University" ? "universities.html" : "companies.html"}?org=${org.id}">
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
  }
}

function renderJobsPage() {
  const root = qs("[data-jobs-page]");
  if (!root) return;
  let state = readState();
  if (state.session.loggedIn && needsOnboarding(root)) return;
  if (state.session.loggedIn) {
    root.innerHTML = `
      <section class="page-hero os-page-hero">
        <div class="container">
          <div class="eyebrow"><span class="spark">*</span> Job workspace</div>
          <h1>Matches, saved roles, and applications in one calm place.</h1>
          <p class="page-copy">Review only the strongest roles, move applications through stages, and ask Vera what to do next.</p>
        </div>
      </section>
      <section class="container os-layout">
        ${appShell("jobs", `
          <section class="jobs-workspace">
            <aside class="filters card compact-filter">
              <h2 class="filter-title">Search jobs</h2>
              <div class="filter-stack">
                <div class="field"><i data-lucide="search"></i><input data-job-query placeholder="Role, company, skill"></div>
                <div class="field"><i data-lucide="layers"></i><select data-job-industry></select></div>
                <div class="field"><i data-lucide="user-round"></i><select data-job-level></select></div>
                <div class="field"><i data-lucide="map-pin"></i><select data-job-type></select></div>
                <label class="range-field"><span>Minimum match <strong data-threshold-label>70%</strong></span><input data-job-threshold type="range" min="60" max="95" value="70"></label>
                <label class="check-field"><input data-job-compare-mode type="checkbox"> Compare roles</label>
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
  }
  let activeId = new URLSearchParams(location.search).get("job") || DATA.jobs[0].id;
  let active = DATA.jobs.find(job => job.id === activeId) || DATA.jobs[0];
  let activeTab = location.hash === "#tracker" ? "tracker" : (new URLSearchParams(location.search).get("tab") || "matches");

  const listRoot = qs("[data-job-list]");
  const detailRoot = qs("[data-job-detail]");
  const queryInput = qs("[data-job-query]");
  const industrySelect = qs("[data-job-industry]");
  const levelSelect = qs("[data-job-level]");
  const typeSelect = qs("[data-job-type]");
  const thresholdInput = qs("[data-job-threshold]");
  const thresholdLabel = qs("[data-threshold-label]");
  const compareMode = qs("[data-job-compare-mode]");

  industrySelect.innerHTML = ["All", ...new Set(DATA.jobs.map(j => j.industry))].map(x => `<option>${x}</option>`).join("");
  levelSelect.innerHTML = ["All", ...new Set(DATA.jobs.map(j => j.level))].map(x => `<option>${x}</option>`).join("");
  if (typeSelect) typeSelect.innerHTML = ["All", ...new Set(DATA.jobs.map(j => j.type))].map(x => `<option>${x}</option>`).join("");
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
          <a class="btn btn-cyan" href="vera.html?topic=application follow up">${icon("sparkles")} Ask Vera</a>
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
      active = DATA.jobs.find(job => job.id === card.dataset.jobId) || active;
      history.replaceState(null, "", `jobs.html?job=${active.id}#tracker`);
      renderList();
      renderDetail();
    }));
    qsa("[data-filter-stage]", listRoot).forEach(btn => btn.addEventListener("click", () => {
      const found = tracked.find(({ record }) => record.stage === btn.dataset.filterStage);
      if (found) {
        active = found.job;
        renderList();
        renderDetail();
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
    if (activeTab === "community") {
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
        ${compareMode?.checked ? `<label class="check-field inline"><input type="checkbox" data-compare-job="${job.id}" ${state.comparedJobs.includes(job.id) ? "checked" : ""}> Compare</label>` : ""}
        ${pills(job.skills.slice(0, 3), "cyan")}
      </button>
    `).join("") || `<div class="card">No matching roles yet. Try a broader search.</div>`;
    qsa("[data-job-id]", listRoot).forEach(btn => {
      btn.addEventListener("click", () => {
        active = DATA.jobs.find(job => job.id === btn.dataset.jobId);
        history.replaceState(null, "", `jobs.html?job=${active.id}`);
        renderList();
        renderDetail();
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

  function renderDetail() {
    state = readState();
    const loggedIn = Boolean(state.session.loggedIn);
    const saved = state.savedJobs.includes(active.id);
    const record = state.applicationRecords?.[active.id];
    const applied = Boolean(record && stageIndex(record.stage) >= stageIndex("applied"));
    const compared = DATA.jobs.filter(job => state.comparedJobs.includes(job.id));
    detailRoot.innerHTML = `
      <div class="detail-head">
        <div>
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
      <div class="detail-section warning-box">
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
      <div class="hero-actions">
        ${loggedIn ? `
          <button class="btn btn-primary" data-apply>${icon(applied ? "check" : "send")} ${applied ? "Applied" : "Apply now"}</button>
          <button class="btn btn-ghost" data-save>${icon(saved ? "bookmark-check" : "bookmark")} ${saved ? "Saved" : "Save role"}</button>
          <button class="btn btn-ghost" data-screen>${icon("scan-search")} Move to screening</button>
          <button class="btn btn-ghost" data-ignore>${icon("thumbs-down")} Not interested</button>
          <a class="btn btn-cyan" href="vera.html?topic=${encodeURIComponent(active.title)}">${icon("message-circle")} Ask Vera</a>
        ` : `
          <button class="btn btn-primary" data-auth-prompt="save jobs and track applications">${icon("bookmark")} Save role</button>
          <button class="btn btn-ghost" data-auth-prompt="apply and track progress">${icon("send")} Apply</button>
          <button class="btn btn-cyan" data-auth-prompt="ask Vera for personalized coaching">${icon("message-circle")} Ask Vera</button>
        `}
      </div>
    `;
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
      active = jobs[0] || DATA.jobs.find(job => !next.ignoredJobs.includes(job.id)) || DATA.jobs[0];
      renderList();
      renderDetail();
    });
    createIcons();
  }

  qsa("[data-job-tab]").forEach(btn => btn.addEventListener("click", () => {
    qsa("[data-job-tab]").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    activeTab = btn.dataset.jobTab;
    history.replaceState(null, "", activeTab === "tracker" ? `jobs.html?job=${active.id}#tracker` : `jobs.html?job=${active.id}&tab=${activeTab}`);
    renderList();
    renderDetail();
  }));
  qsa("[data-job-tab]").forEach(btn => btn.classList.toggle("active", btn.dataset.jobTab === activeTab));
  [queryInput, industrySelect, levelSelect, typeSelect, thresholdInput, compareMode].filter(Boolean).forEach(el => el.addEventListener("input", renderList));
  renderList();
  renderDetail();
}

function renderDirectoryPage(kind) {
  const root = qs("[data-directory-page]");
  if (!root) return;
  const state = readState();
  const loggedIn = Boolean(state.session.loggedIn);
  if (loggedIn) {
    const title = kind === "universities" ? "Universities" : "Companies";
    const singular = kind === "universities" ? "university" : "company";
    root.innerHTML = `
      <section class="container os-layout">
        ${appShell(kind, `
          <section class="directory-workspace">
            <aside class="filters card compact-filter">
              <h2 class="filter-title">Find ${title.toLowerCase()}</h2>
              <div class="filter-stack">
                <div class="field"><i data-lucide="search"></i><input data-org-query placeholder="${title}, industry, location"></div>
                <a class="btn btn-cyan btn-wide" href="vera.html?topic=${singular} research">${icon("sparkles")} Ask Vera</a>
              </div>
            </aside>
            <div class="directory-split">
              <section class="list-stack" data-org-list></section>
              <section class="detail-panel glass-card" data-org-detail></section>
            </div>
          </section>
        `, { title, subtitle: `Research ${title.toLowerCase()}, reviews, outcomes, and fit from inside your CareerGo workspace.` })}
      </section>
    `;
    createIcons();
    initSidebarToggle();
  } else {
    qsa('a[href^="vera.html"]', root).forEach(link => {
      link.setAttribute("href", "#");
      link.dataset.authPrompt = "ask Vera for personalized research";
    });
    bindProtectedPrompts(root);
  }
  const orgs = orgsFor(kind);
  const params = new URLSearchParams(location.search);
  let active = orgs.find(org => org.id === params.get("org")) || orgs[0];
  const listRoot = qs("[data-org-list]");
  const detailRoot = qs("[data-org-detail]");
  const queryInput = qs("[data-org-query]");
  const typeButtons = qsa("[data-org-type]");
  if (queryInput) queryInput.value = params.get("q") || "";

  function filteredOrgs() {
    const q = queryInput.value.trim().toLowerCase();
    const selectedType = qs("[data-org-type].active")?.dataset.orgType || "All";
    return orgsFor(kind === "all" ? selectedType.toLowerCase() : kind).filter(org => {
      const hay = [org.name, org.industry, org.location, ...org.tags].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }

  function renderList() {
    const items = filteredOrgs();
    listRoot.innerHTML = items.map(org => `
      <button class="list-card ${org.id === active.id ? "active" : ""}" data-org-id="${org.id}">
        <div class="list-card-top">
          <div>
            <h3>${org.name}</h3>
            <div class="muted small">${org.industry} - ${org.location}</div>
          </div>
          ${rating(org.rating)}
        </div>
        ${pills(org.tags.slice(0, 3), "gold")}
      </button>
    `).join("");
    qsa("[data-org-id]", listRoot).forEach(btn => {
      btn.addEventListener("click", () => {
        active = [...DATA.companies, ...DATA.universities].find(org => org.id === btn.dataset.orgId);
        history.replaceState(null, "", `${kind === "universities" ? "universities" : "companies"}.html?org=${active.id}`);
        renderList();
        renderDetail();
      });
    });
    createIcons();
  }

  function renderDetail() {
    const currentState = readState();
    const currentLoggedIn = Boolean(currentState.session.loggedIn);
    const reviews = currentState.reviews.filter(r => r.targetId === active.id);
    const saved = currentState.savedOrgs.includes(active.id);
    detailRoot.innerHTML = `
      <div class="detail-head">
        <div>
          <span class="pill ${active.type === "University" ? "cyan" : "gold"}">${active.type}</span>
          <h2>${active.name}</h2>
          <div class="muted">${active.industry} - ${active.location}</div>
        </div>
        <div>${rating(active.rating)}<div class="muted small">${active.reviews + reviews.length} reviews</div></div>
      </div>
      <div class="detail-section">
        <p class="muted">${active.summary}</p>
        ${pills(active.tags, active.type === "University" ? "cyan" : "gold")}
      </div>
      <div class="detail-section score-grid">
        ${Object.entries(active.scores).map(([label, value]) => `<div class="score-tile"><span>${label}</span><strong>${value.toFixed(1)}</strong></div>`).join("")}
      </div>
      <div class="detail-section content-grid">
        <div class="vera-box">
          <h3>${icon("sparkles")} Vera's research note</h3>
          <p class="muted">${active.signal}. Review themes suggest ${active.scores.growth >= 4.3 ? "strong growth upside" : "steady growth"} with ${active.scores.balance >= 4 ? "healthy balance" : "some balance trade-offs"}. Compare this against your target role, preferred pace, salary expectations, and learning style before deciding.</p>
        </div>
        <div class="card">
          <h3>Background</h3>
          <p class="muted">Size: ${active.size}</p>
          <p class="muted">${active.type === "University" ? "Outcome" : "Salary"}: ${active.salary}</p>
          <p class="muted">Open roles / partners: ${active.open}</p>
        </div>
      </div>
      <div class="detail-section content-grid">
        <div class="card">
          <h3>Highlights</h3>
          <ul class="check-list">${active.highlights.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div class="warning-box">
          <h3>${icon("alert-circle")} Watchouts</h3>
          <ul class="check-list">${active.watchouts.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="detail-section">
        <div class="section-head" style="margin-bottom:14px">
          <h3>Reviews</h3>
          <div class="hero-actions" style="margin-top:0">
            ${currentLoggedIn ? `
              <button class="btn btn-ghost" data-save-org>${icon(saved ? "bookmark-check" : "bookmark")} ${saved ? "Saved" : "Save"}</button>
              <button class="btn btn-primary" data-review>${icon("pen-line")} Write review</button>
            ` : `
              <button class="btn btn-ghost" data-auth-prompt="save and compare ${active.type.toLowerCase()} research">${icon("bookmark")} Save</button>
              <button class="btn btn-primary" data-auth-prompt="write trusted reviews">${icon("pen-line")} Write review</button>
            `}
          </div>
        </div>
        <div>
          ${(reviews.length ? reviews : currentState.reviews.filter(r => r.targetId === active.id)).map(review => `
            <div class="review-card">
              <div class="review-head">
                <div>
                  <h4>${review.title}</h4>
                  <div class="muted small">${review.author} - ${review.date}</div>
                </div>
                ${rating(review.rating)}
              </div>
              <p class="muted">${review.body}</p>
            </div>
          `).join("") || `<div class="review-card"><p class="muted">No reviews yet. Be the first to help other users research this ${active.type.toLowerCase()}.</p></div>`}
        </div>
      </div>
    `;
    if (!currentLoggedIn) {
      bindProtectedPrompts(detailRoot);
      createIcons();
      return;
    }
    qs("[data-review]", detailRoot).addEventListener("click", () => openReviewModal(active));
    qs("[data-save-org]", detailRoot).addEventListener("click", () => {
      const next = readState();
      next.savedOrgs = next.savedOrgs.includes(active.id) ? next.savedOrgs.filter(id => id !== active.id) : [...next.savedOrgs, active.id];
      writeState(next);
      showToast(next.savedOrgs.includes(active.id) ? "Organization saved for comparison." : "Organization removed from saved list.");
      renderDetail();
    });
    createIcons();
  }

  typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      typeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      active = filteredOrgs()[0] || active;
      renderList();
      renderDetail();
    });
  });
  queryInput.addEventListener("input", renderList);
  renderList();
  renderDetail();
}

function openReviewModal(target) {
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
    location.reload();
  });
  createIcons();
}

function renderDashboard() {
  const root = qs("[data-dashboard]");
  if (!root) return;
  if (!requireAccount(root, "view your personalized Career OS")) return;
  if (needsOnboarding(root)) return;
  qs(".page-hero")?.classList.add("is-hidden");
  const state = readState();
  const savedJobs = DATA.jobs.filter(job => state.savedJobs.includes(job.id));
  const applications = DATA.jobs.filter(job => state.applications.includes(job.id));
  const trackedJobs = getTrackedJobs(state);
  const counts = applicationSummaryCounts(state);
  const profile = state.profile;
  const intel = profile.intelligence || generateCareerIntelligence(profile);
  const missions = personalizedMissions(profile);
  const beginnerMissions = starterMissions(profile);
  const visibleBeginnerMissions = beginnerMissions.slice(0, 3);
  const target = getTargetLabel(profile);
  const topJobs = DATA.jobs
    .filter(job => !state.ignoredJobs.includes(job.id))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
  const urgentRecord = trackedJobs.find(item => ["interview", "screening"].includes(item.record.stage)) || trackedJobs[0];
  root.innerHTML = appShell("dashboard", `
    <section class="glass-card dashboard-hero" data-tour-target="dashboard-hero">
      <div>
        <div class="eyebrow"><span class="spark">*</span> My Career OS ${state.session.isDemo ? `<span class="demo-badge inline">${icon("monitor-play")} Demo Mode</span>` : ""}</div>
        <h1 class="section-title">Today, focus on one clear move.</h1>
        <p class="section-sub">Good morning, ${getFirstName(state)}. CareerGo is tuned for ${profile.careerStage.toLowerCase()} and will stay calm, practical, and updated as your profile changes.</p>
      </div>
      <div class="health-ring" style="--score:${intel.readinessScore}">
        <span>${intel.readinessLevel}</span>
        <small>${intel.confidence} confidence</small>
      </div>
    </section>
    <section class="today-panel">
      <article class="glass-card today-primary" data-tour-target="vera">
        <div class="section-kicker">Vera says</div>
        <h2>${intel.immediateActions[0]}</h2>
        <p>${intel.summary}</p>
        <div class="hero-actions compact-actions">
          <a class="btn btn-primary" href="vera.html#plan">${icon("sparkles")} Ask Vera</a>
          <a class="btn btn-ghost" href="profile.html">${icon("user-round")} Improve profile</a>
        </div>
      </article>
      <article class="glass-card today-side">
        <div class="section-kicker">Next application action</div>
        ${urgentRecord ? `
          <div class="list-card quiet">
            <div class="list-card-top"><div><h3>${urgentRecord.job.title}</h3><div class="muted small">${urgentRecord.job.company} - ${urgentRecord.job.salary}</div></div>${applicationStagePill(urgentRecord.record.stage)}</div>
            <p class="muted">${urgentRecord.record.nextAction}</p>
            ${applicationProgress(urgentRecord.record)}
          </div>
        ` : `
          <p class="muted">Save one role to start your application tracker.</p>
          <a class="btn btn-cyan" href="jobs.html">${icon("briefcase")} Find matches</a>
        `}
      </article>
    </section>
    <section class="metric-strip airy" data-tour-target="metrics">
      <a class="metric" href="profile.html" title="Range-based profile readiness, not a fake precision score."><strong>${intel.readinessLevel}</strong><span>Readiness</span></a>
      <a class="metric" href="profile.html" title="${intel.atsReadiness}"><strong>${profile.resume.uploaded || profile.resume.name ? "Review ready" : "No resume"}</strong><span>Resume</span></a>
      <a class="metric" href="jobs.html" title="Roles you saved for later review."><strong>${savedJobs.length}</strong><span>Saved roles</span></a>
      <a class="metric" href="jobs.html" title="Applications currently in your tracker."><strong>${applications.length}</strong><span>Applications</span></a>
    </section>
    <section class="glass-card application-overview" data-tour-target="applications">
      <div class="section-head"><div><div class="section-kicker">Application progress</div><h2 class="section-title mini">Every job has a next step.</h2></div><a class="btn btn-primary" href="jobs.html#tracker">${icon("kanban")} Open tracker</a></div>
      <div class="pipeline-strip">
        ${APPLICATION_STAGES.slice(0, 6).map(stage => `<div class="pipeline-stage"><span>${stage.label}</span><strong>${counts[stage.key] || 0}</strong></div>`).join("")}
      </div>
      <div class="list-stack spacious-list">
        ${(trackedJobs.length ? trackedJobs.slice(0, 3) : topJobs.slice(0, 2).map(job => ({ job, record: createApplicationRecord(job.id, "saved") }))).map(({ job, record }) => `
          <a class="list-card application-row" href="jobs.html?job=${job.id}#tracker">
            <div class="list-card-top">
              <div><h3>${job.title}</h3><div class="muted small">${job.company} - ${job.location}</div></div>
              ${applicationStagePill(record.stage)}
            </div>
            <p class="muted">${record.nextAction}</p>
            ${applicationProgress(record)}
          </a>
        `).join("")}
      </div>
    </section>
    <section class="content-grid calm-grid">
      <div class="glass-card" data-tour-target="intelligence">
        <div class="section-kicker">Career Intelligence</div>
        ${[
          ["Resume", intel.resumeReadiness],
          ["ATS", intel.atsReadiness],
          ["Skills", intel.skillCompetitiveness],
          ["Market", intel.marketFit]
        ].map(([label, value]) => `<div class="insight-row"><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>
      <div class="glass-card">
        <div class="section-head"><div><div class="section-kicker">Top matches</div><h2 class="section-title mini">Only the best few.</h2></div><a class="btn btn-ghost" href="jobs.html">${icon("briefcase")} See jobs</a></div>
        <div class="list-stack">
          ${topJobs.slice(0, 2).map(job => `<a class="list-card quiet" href="jobs.html?job=${job.id}"><div class="list-card-top"><div><h3>${job.title}</h3><div class="muted small">${job.company} - ${job.salary}</div></div><span class="score">${job.match}%</span></div></a>`).join("")}
        </div>
      </div>
    </section>
    <section class="glass-card" data-tour-target="missions">
      <div class="section-head"><div><div class="section-kicker">Personalized missions</div><h2 class="section-title mini">${profile.coach.missionFrequency} pace, ${profile.coach.explanationStyle.toLowerCase()}.</h2></div><a class="btn btn-primary" href="vera.html#plan">${icon("route")} Build 90-day plan</a></div>
      <div class="mission-grid">
        ${missions.slice(0, 2).map(mission => `<a class="tool-card" href="${mission.href}"><div class="list-card-top"><h3>${mission.title}</h3><span class="pill gold">+${mission.xp} XP</span></div><p>${mission.body}</p>${progressBar(state.missionProgress[mission.id] || mission.progress)}</a>`).join("")}
      </div>
      <div class="section-head mission-head"><div><div class="section-kicker">Beginner mission path</div><h2 class="section-title mini">Use CareerGo without feeling lost.</h2></div><span class="pill cyan">${visibleBeginnerMissions.filter(mission => (state.missionProgress[mission.id] || 0) >= 100).length}/${visibleBeginnerMissions.length} shown</span></div>
      <div class="starter-mission-grid">
        ${visibleBeginnerMissions.map(mission => {
          const progress = state.missionProgress[mission.id] || 0;
          const done = progress >= 100;
          return `
            <article class="tool-card starter-mission ${done ? "complete" : ""}" data-mission-card="${mission.id}">
              <div class="mission-icon">${icon(done ? "check" : mission.icon)}</div>
              <h3>${mission.title}</h3>
              <p>${mission.body}</p>
              ${progressBar(done ? 100 : progress)}
              <div class="mission-actions">
                <a class="btn btn-ghost" href="${mission.href}">Open</a>
                <button class="btn btn-cyan" type="button" data-complete-mission="${mission.id}">${done ? icon("check") + " Done" : icon("circle-check") + " Mark done"}</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `);
  createIcons();
  bindMissionActions();
  initDashboardTour();
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
  const initialTopic = new URLSearchParams(location.search).get("topic");
  const messages = state.chat.length ? state.chat : [
    { from: "vera", text: `Welcome back, ${getFirstName(state)}. I checked your ${state.profile.careerStage || "career"} profile. Your best move today is: ${state.profile.intelligence.immediateActions[0]}` },
    ...(initialTopic ? [{ from: "user", text: `Help me with ${initialTopic}` }, { from: "vera", text: `Good choice. I will break ${initialTopic} into a clear next-step plan: evidence needed, risks, and the action you should take first.` }] : [])
  ];
  state.chat = messages;
  writeState(state);
  let activeTab = location.hash?.replace("#", "") || "plan";

  function renderMessages() {
    const target = qs("[data-message-list]");
    if (target) target.innerHTML = readState().chat.map(msg => `<div class="message ${msg.from === "vera" ? "vera" : "user"}">${msg.text}</div>`).join("");
  }

  function tabContent() {
    if (activeTab === "skills") {
      return `
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
    }
    if (activeTab === "interview") {
      return `
        <section class="glass-card">
          <div class="section-head"><div><div class="section-kicker">Interview coach</div><h2 class="section-title mini">Practice with structured feedback.</h2></div><span class="pill green">Live session</span></div>
          <div class="content-grid">
            <div class="tool-card"><h3>Question</h3><p class="muted">Walk me through a project where you had ambiguity, conflicting feedback, and a measurable product outcome.</p>${pills(["Product design", "Behavioral", "Case-study"], "cyan")}</div>
            <form class="tool-card" data-interview-form><h3>Your answer</h3><textarea class="input-area" name="answer" placeholder="Type your STAR answer..."></textarea><button class="btn btn-primary" type="submit">${icon("scan-text")} Get feedback</button></form>
          </div>
          <div class="detail-section" data-interview-feedback></div>
        </section>
      `;
    }
    if (activeTab === "chat") {
      return `
        <section class="chat-window glass-card">
          <div class="detail-head"><div><h2>Career session</h2><div class="muted">Vera uses your jobs, reviews, profile, market, and goals as context.</div></div><span class="pill green">Online</span></div>
          <div class="message-list" data-message-list></div>
          <form class="chat-input" data-chat-form>
            <div class="field"><input name="message" placeholder="Ask Vera what to do next..."></div>
            <button class="btn btn-primary" type="submit">${icon("send")} Send</button>
          </form>
        </section>
      `;
    }
    return `
      <section class="glass-card">
        <div class="section-head"><div><div class="section-kicker">90-day plan</div><h2 class="section-title mini">A mentor-led path from day one.</h2></div><button class="btn btn-primary" data-plan>${icon("sparkles")} Generate plan</button></div>
        <div class="timeline">
          ${[
            ["Days 1-30", "Set profile baseline, upload resume, benchmark ATS, and choose one target path."],
            ["Days 31-60", "Close top two gaps with proof: product strategy memo and metrics story."],
            ["Days 61-90", "Apply to five high-fit roles, practice interviews, and use company research before accepting."]
          ].map(([title, body]) => `<article class="timeline-item"><h3>${title}</h3><p class="muted">${body}</p></article>`).join("")}
        </div>
      </section>
    `;
  }

  root.className = "container os-layout";
  const veraContent = `
    <section class="vera-module">
    <aside class="glass-card">
      <div class="eyebrow"><span class="spark">*</span> Coach Vera</div>
      <h2 class="section-title" style="font-size:36px">Your AI career mentor.</h2>
      <p class="section-sub">Vera is designed like a teacher and life coach: proactive, warm, specific, and connected to the whole website.</p>
      <div class="pill-row">
        ${[
          ["plan", "90-day plan"],
          ["skills", "Skills"],
          ["interview", "Interview"],
          ["chat", "Chat"]
        ].map(([key, label]) => `<button class="pill ${activeTab === key ? "cyan active" : ""}" data-vera-tab="${key}">${label}</button>`).join("")}
      </div>
      <div class="detail-section vera-box">
        <h3>Vera knows</h3>
        <p class="muted">${state.profile.careerStage || "Your career stage"} - ${getTargetLabel(state.profile)} - ${state.applications.length} active application${state.applications.length === 1 ? "" : "s"}.</p>
        <div class="pill-row">${["Plan my week", "Compare companies", "Fix my resume", "Prep interview", "Explain application status"].map(x => `<button class="pill gold" data-quick="${x}">${x}</button>`).join("")}</div>
      </div>
    </aside>
    <div data-vera-panel>${tabContent()}</div>
    </section>
  `;
  root.innerHTML = appShell("vera", veraContent, { title: "Vera", subtitle: "Ask for coaching while keeping your dashboard, jobs, and profile one click away." });
  renderMessages();
  attachVeraEvents();

  function sendVera(text) {
    const state = readState();
    state.chat.push({ from: "user", text });
    state.chat.push({ from: "vera", text: veraReply(text) });
    writeState(state);
    activeTab = "chat";
    qs("[data-vera-panel]").innerHTML = tabContent();
    attachVeraEvents();
    renderMessages();
  }
  function attachVeraEvents() {
    qsa("[data-vera-tab]").forEach(btn => btn.addEventListener("click", () => {
      activeTab = btn.dataset.veraTab;
      location.hash = activeTab;
      renderVera();
    }));
    qsa("[data-quick]").forEach(btn => btn.addEventListener("click", () => sendVera(btn.dataset.quick)));
    qs("[data-plan]")?.addEventListener("click", () => showToast("Vera generated a 90-day plan from your profile and target role."));
    qs("[data-chat-form]")?.addEventListener("submit", event => {
      event.preventDefault();
      const input = event.currentTarget.message;
      const text = input.value.trim();
      if (!text) return;
      input.value = "";
      sendVera(text);
    });
    qs("[data-interview-form]")?.addEventListener("submit", event => {
      event.preventDefault();
      const answer = event.currentTarget.answer.value.trim();
      const score = answer.length > 120 ? 82 : 64;
      qs("[data-interview-feedback]").innerHTML = `
        <div class="score-grid">
          ${[
            ["Structure", score],
            ["Specificity", Math.max(58, score - 8)],
            ["Impact", Math.max(56, score - 12)],
            ["Confidence", Math.min(90, score + 4)]
          ].map(([label, value]) => `<div class="score-tile"><span>${label}</span><strong>${value}%</strong></div>`).join("")}
        </div>
        <div class="vera-box detail-section"><h3>Vera feedback</h3><p class="muted">Your answer needs a sharper metric and one clearer trade-off. Add what changed after your decision, then close with the result.</p></div>
      `;
      createIcons();
    });
    createIcons();
  }
  createIcons();
}

function veraReply(text) {
  const t = text.toLowerCase();
  if (t.includes("company") || t.includes("compare")) return "Start with growth, balance, salary, and review themes. Maybank is safer and structured; Grab is faster and more intense; CIMB is a good mentorship middle path.";
  if (t.includes("resume") || t.includes("portfolio")) return "Your next portfolio update should prove product strategy. Add one case study with problem, trade-offs, metric, and stakeholder story.";
  if (t.includes("interview")) return "Prepare one STAR story for ambiguity, one for conflict, and one for measurable design impact. I would practice the case-study walkthrough first.";
  if (t.includes("market") || t.includes("salary") || t.includes("value")) return "Your fair-value gap is about RM12k. The fastest lift is product strategy plus metrics storytelling, because those are tied to higher-paying product roles.";
  if (t.includes("week") || t.includes("plan")) return "This week: research 3 organizations, save 2 high-fit roles, apply to 1 role above 85% match, and strengthen one missing proof point.";
  return "I would turn that into a decision. First define your goal, then compare the role or organization against growth, salary, culture, and evidence you can show.";
}

function renderAuth() {
  const root = qs("[data-auth]");
  if (!root) return;
  const mode = root.dataset.auth;
  const roleOptions = ROLE_TYPES.map(role => `<option value="${role}">${role}</option>`).join("");
  root.innerHTML = `
    <div class="auth-shell">
      <section class="glass-card auth-panel">
        <div class="eyebrow"><span class="spark">*</span> ${mode === "register" ? "Create account" : "Welcome back"}</div>
        <h1 class="section-title">${mode === "register" ? "Begin a career journey that adapts to you." : "Open your CareerGo workspace."}</h1>
        <p class="section-sub">${mode === "register" ? "This is not a generic sign-up. We collect the essentials first, then Vera guides a short progressive onboarding you can finish now or later." : "Log in with an account created on this device. This mock auth layer can later be replaced by Firebase, Supabase, or a custom backend."}</p>
        <form class="form-grid" data-auth-form>
          ${mode === "register" ? `
            <label>Full name <input name="fullName" required autocomplete="name" placeholder="Your full name"></label>
            <label>Email <input name="email" type="email" required autocomplete="email" placeholder="you@example.com"></label>
            <div class="grid-2">
              <label>Password <input name="password" type="password" required minlength="6" autocomplete="new-password"></label>
              <label>Confirm password <input name="confirmPassword" type="password" required minlength="6" autocomplete="new-password"></label>
            </div>
            <div class="grid-2">
              <label>Phone number optional <input name="phone" autocomplete="tel" placeholder="+60..."></label>
              <label>Age range <select name="ageRange" required><option value="">Select</option><option>15-17</option><option>18-24</option><option>25-34</option><option>35-44</option><option>45-54</option><option>55-60</option><option>60+</option></select></label>
            </div>
            <div class="grid-2">
              <label>Country <input name="country" required value="Malaysia"></label>
              <label>City / State <input name="cityState" required placeholder="Kuala Lumpur, Selangor..."></label>
            </div>
            <div class="grid-2">
              <label>Preferred language <select name="preferredLanguage"><option>English</option><option>Bahasa Malaysia</option><option>Mandarin</option><option>Tamil</option><option>Other</option></select></label>
              <label>Role type <select name="roleType" required><option value="">Select</option>${roleOptions}</select></label>
            </div>
            <p class="muted small">We use this to personalize your career roadmap. You can edit it anytime.</p>
          ` : `
            <label>Email <input name="email" type="email" autocomplete="email" placeholder="you@example.com"></label>
            <label>Password <input name="password" type="password" autocomplete="current-password"></label>
            <p class="muted small">Judges can press Log in with empty fields to open a personalized preview account.</p>
          `}
          <button class="btn btn-primary" type="submit">${icon("rocket")} ${mode === "register" ? "Create account" : "Log in"}</button>
        </form>
      </section>
      <aside class="glass-card">
        <h2 class="section-title mini">Role entry</h2>
        <div class="grid-2">
          <a class="tool-card" href="onboarding.html"><h3>Candidate OS</h3><p>Resume analysis, career score, missions, Vera, jobs, market value.</p></a>
          <a class="tool-card" href="employer-onboarding.html"><h3>Employer OS</h3><p>Hiring cockpit, roles, candidate discovery, pipeline, and AI hiring assistant.</p></a>
        </div>
      </aside>
    </div>
  `;
  qs("[data-auth-form]").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    const email = String(form.get("email") || "").trim().toLowerCase();
    const password = String(form.get("password") || "");
    if (mode === "login") {
      if (!email && !password) {
        applyDemoAccount(next);
        writeState(next);
        showToast("Demo workspace opened.");
        location.href = "dashboard.html";
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
      next.session = { loggedIn: true, role: user.role, currentUserId: user.id, name: user.fullName };
      if (user.profile) next.profile = normalizeProfile(user.profile);
      writeState(next);
      showToast("Welcome back.");
      location.href = user.role === "employer" ? "employer-app.html" : next.onboarding.candidateDone ? "dashboard.html" : "onboarding.html";
      return;
    }
    const confirm = String(form.get("confirmPassword") || "");
    if (password !== confirm) {
      showToast("Passwords do not match.", "info");
      return;
    }
    if (next.auth.users.some(item => item.email === email)) {
      showToast("An account with this email already exists on this device.", "info");
      return;
    }
    const roleType = String(form.get("roleType") || "");
    const authRole = roleType === "Employer / Recruiter" ? "employer" : "candidate";
    const profile = createEmptyProfile({
      fullName: String(form.get("fullName") || "").trim(),
      email,
      phone: String(form.get("phone") || "").trim(),
      ageRange: String(form.get("ageRange") || ""),
      country: String(form.get("country") || "").trim(),
      cityState: String(form.get("cityState") || "").trim(),
      preferredLanguage: String(form.get("preferredLanguage") || "English"),
      roleType
    });
    profile.personal.roleType = roleType;
    profile.onboardingStatus.started = true;
    profile.updatedAt = nowStamp();
    next.auth.users.push({ id: profile.id, email, password, fullName: profile.personal.fullName, role: authRole, profile, createdAt: profile.createdAt });
    next.session = { loggedIn: true, role: authRole, currentUserId: profile.id, name: profile.personal.fullName };
    next.profile = profile;
    next.onboarding = { ...next.onboarding, candidateDone: false, currentStep: 0, lastSavedAt: nowStamp() };
    next.notifications = [{ id: "n-welcome", title: "Welcome to CareerGo", body: "Finish onboarding so Vera can personalize your roadmap." }];
    writeState(next);
    showToast("Account created. Let's personalize CareerGo.");
    location.href = authRole === "employer" ? "employer-onboarding.html" : "onboarding.html";
  });
  createIcons();
}

function renderCandidateOnboarding() {
  const root = qs("[data-onboarding]");
  if (!root) return;
  if (!requireAccount(root, "start your personalized onboarding")) return;
  const state = readState();
  const profile = state.profile;
  const step = Math.max(0, Math.min(6, state.onboarding.currentStep || profile.onboardingStatus.currentStep || 0));
  const stepLabels = ["Career stage", "Background", "Goals", "Skills", "Preferences", "Coach style", "Generate"];
  const stage = profile.careerStage;
  const goalChecks = CAREER_GOALS.map(goal => `<label class="check-card"><input type="checkbox" name="goals" value="${goal}" ${profile.goals.includes(goal) ? "checked" : ""}> <span>${goal}</span></label>`).join("");
  function backgroundFields() {
    if (["Still studying", "Looking for internship", "Looking for first full-time job"].includes(stage)) {
      return `
        <label>School / university <input name="school" value="${profile.background.school}" placeholder="Your school or university"></label>
        <div class="grid-2"><label>Education level <input name="educationLevel" value="${profile.background.educationLevel}" placeholder="SPM, Diploma, Degree..."></label><label>Course / major <input name="courseMajor" value="${profile.background.courseMajor}" placeholder="Business, CS, Design..."></label></div>
        <div class="grid-2"><label>Expected graduation year <input name="expectedGraduationYear" value="${profile.background.expectedGraduationYear}" placeholder="2027"></label><label>CGPA / performance optional <input name="academicPerformance" value="${profile.background.academicPerformance}" placeholder="Optional"></label></div>
        <label>Internship experience <textarea name="internshipExperience" placeholder="Any internship, part-time work, or shadowing experience">${profile.background.internshipExperience}</textarea></label>
        <label>Projects and club / leadership experience <textarea name="projectExperience" placeholder="Projects, competitions, clubs, leadership roles">${profile.background.projectExperience || profile.background.clubLeadership}</textarea></label>
      `;
    }
    if (stage === "Planning to switch career") {
      return `
        <div class="grid-2"><label>Current career field <input name="currentCareerField" value="${profile.background.currentCareerField}" placeholder="Retail, finance, teaching..."></label><label>Target career field <input name="targetCareerField" value="${profile.background.targetCareerField}" placeholder="Data, product, HR..."></label></div>
        <label>Transferable skills <textarea name="transferableSkills" placeholder="Communication, operations, leadership, analysis...">${profile.background.transferableSkills}</textarea></label>
        <label>Concerns about switching <textarea name="switchConcerns" placeholder="Salary drop, age, skills gap, confidence...">${profile.background.switchConcerns}</textarea></label>
        <label>Preferred transition timeline <input name="transitionTimeline" value="${profile.background.transitionTimeline}" placeholder="3 months, 1 year, gradual..."></label>
      `;
    }
    if (["Returning after a career break", "Actively job hunting"].includes(stage) || profile.personal.roleType === "Unemployed / Job Seeking" || profile.personal.roleType === "Returning to Work") {
      return `
        <label>Last role <input name="lastRole" value="${profile.background.lastRole}" placeholder="Your most recent role"></label>
        <div class="grid-2"><label>Career gap duration <input name="careerGapDuration" value="${profile.background.careerGapDuration}" placeholder="6 months, 2 years..."></label><label>Preferred work type <input name="preferredWorkType" value="${profile.background.preferredWorkType}" placeholder="Remote, part-time, full-time..."></label></div>
        <label>Reason for gap optional <textarea name="gapReason" placeholder="Optional. Share only what you are comfortable with.">${profile.background.gapReason}</textarea></label>
        <div class="grid-2"><label>Confidence level <select name="confidenceLevel"><option>${profile.background.confidenceLevel || "Medium"}</option><option>Low</option><option>Medium</option><option>High</option></select></label><label>Support needed <input name="supportNeeded" value="${profile.background.supportNeeded}" placeholder="Resume, confidence, interviews..."></label></div>
      `;
    }
    if (stage === "Preparing for retirement or advisory work" || profile.personal.roleType === "Senior Professional") {
      return `
        <label>Expertise area <input name="expertiseArea" value="${profile.background.expertiseArea}" placeholder="Finance leadership, operations, engineering..."></label>
        <label>Leadership experience <textarea name="leadershipExperience" placeholder="Teams led, business scope, achievements">${profile.background.leadershipExperience}</textarea></label>
        <div class="grid-2"><label>Mentoring interest <select name="mentoringInterest"><option>${profile.background.mentoringInterest || "Maybe"}</option><option>Yes</option><option>Maybe</option><option>No</option></select></label><label>Advisory / consulting interest <select name="advisoryInterest"><option>${profile.background.advisoryInterest || "Maybe"}</option><option>Yes</option><option>Maybe</option><option>No</option></select></label></div>
        <label>Preferred workload <input name="preferredWorkload" value="${profile.background.preferredWorkload}" placeholder="1 day/week, project-based, advisory only..."></label>
      `;
    }
    return `
      <div class="grid-2"><label>Current role <input name="currentRole" value="${profile.background.currentRole}" placeholder="Role title or current situation"></label><label>Industry <input name="industry" value="${profile.background.industry}" placeholder="Technology, education, healthcare..."></label></div>
      <div class="grid-2"><label>Years of experience <input name="yearsExperience" value="${profile.background.yearsExperience}" placeholder="0, 3, 12..."></label><label>Current salary range optional <input name="currentSalaryRange" value="${profile.background.currentSalaryRange}" placeholder="Optional"></label></div>
      <div class="grid-2"><label>Company size optional <input name="companySize" value="${profile.background.companySize}" placeholder="Startup, SME, enterprise..."></label><label>Management experience <input name="managementExperience" value="${profile.background.managementExperience}" placeholder="None, team lead, manager..."></label></div>
      <label>Previous roles <textarea name="previousRoles" placeholder="List relevant roles or experience">${profile.background.previousRoles}</textarea></label>
      <label>Reason for using CareerGo <textarea name="reasonForCareerGo" placeholder="Promotion, job search, salary clarity, career direction...">${profile.background.reasonForCareerGo}</textarea></label>
    `;
  }
  const stepContent = [
    `
      <div class="choice-grid">
        ${CAREER_STAGES.map(item => `<label class="choice-card ${profile.careerStage === item ? "active" : ""}"><input type="radio" name="careerStage" value="${item}" ${profile.careerStage === item ? "checked" : ""} required><span>${item}</span></label>`).join("")}
      </div>
      <p class="muted small">This shapes your dashboard, Vera's tone, roadmap, and recommended actions.</p>
    `,
    `
      <p class="muted">We ask different questions depending on your stage, so a student, career switcher, returning user, and senior professional do not get the same journey.</p>
      ${backgroundFields()}
    `,
    `
      <p class="muted">Select everything CareerGo should help with. Your dashboard modules will adapt from these goals.</p>
      <div class="choice-grid compact">${goalChecks}</div>
    `,
    `
      <div class="grid-2"><label>Technical / domain skills <textarea name="technical" placeholder="Excel, SQL, sales, Figma, teaching...">${profile.skills.technical.join(", ")}</textarea></label><label>Soft skills <textarea name="soft" placeholder="Communication, leadership, empathy...">${profile.skills.soft.join(", ")}</textarea></label></div>
      <div class="grid-2"><label>Tools used <textarea name="tools" placeholder="Canva, AutoCAD, Python, SAP...">${profile.skills.tools.join(", ")}</textarea></label><label>Certifications <textarea name="certifications" placeholder="Certificates, licenses, training">${profile.skills.certifications.join(", ")}</textarea></label></div>
      <label>Languages <input name="languages" value="${profile.skills.languages.join(", ")}" placeholder="English, Bahasa Malaysia, Mandarin..."></label>
      <label>Work experience summary <textarea name="workExperience" placeholder="Paid work, internships, freelance, volunteer, family business...">${profile.skills.workExperience}</textarea></label>
      <label>Projects / achievements <textarea name="projects" placeholder="Projects, outcomes, awards, leadership moments">${profile.skills.projects.join(", ")}</textarea></label>
      <div class="grid-2"><label>Portfolio / LinkedIn / GitHub links <input name="portfolioLinks" value="${profile.skills.portfolioLinks}" placeholder="Paste links"></label><label>Resume upload optional <input name="resume" type="file" accept=".pdf,.doc,.docx"></label></div>
      <p class="muted small">If you upload a resume, CareerGo can use it to pre-fill your profile later. For now, we store the filename locally.</p>
    `,
    `
      <div class="grid-2"><label>Preferred industries <input name="industries" value="${profile.preferences.industries.join(", ")}" placeholder="Technology, banking, healthcare..."></label><label>Preferred roles <input name="roles" value="${profile.preferences.roles.join(", ")}" placeholder="Data analyst, teacher, advisor..."></label></div>
      <label>Preferred locations <input name="locations" value="${profile.preferences.locations.join(", ")}" placeholder="Kuala Lumpur, Remote, Johor..."></label>
      <div class="grid-2"><label>Work mode <select name="workMode"><option>${profile.preferences.workMode}</option><option>Remote</option><option>Hybrid</option><option>Onsite</option></select></label><label>Employment type <input name="employmentTypes" value="${profile.preferences.employmentTypes.join(", ")}" placeholder="Full-time, part-time, internship, freelance..."></label></div>
      <div class="grid-2"><label>Minimum salary optional <input name="minimumSalary" value="${profile.preferences.minimumSalary}" placeholder="RM 4,000/month"></label><label>Willing to relocate <select name="relocate"><option>${profile.preferences.relocate}</option><option>Yes</option><option>Maybe</option><option>No</option></select></label></div>
      <div class="grid-2"><label>Preferred company size <input name="companySize" value="${profile.preferences.companySize}" placeholder="Startup, SME, enterprise..."></label><label>Work culture <input name="workCulture" value="${profile.preferences.workCulture}" placeholder="Structured, flexible, mission-driven..."></label></div>
      <div class="grid-2"><label>Work-life balance <select name="workLifeBalance"><option>${profile.preferences.workLifeBalance}</option><option>High balance</option><option>Balanced</option><option>Growth first</option></select></label><label>Risk tolerance <select name="riskTolerance"><option>${profile.preferences.riskTolerance}</option><option>Low</option><option>Medium</option><option>High</option></select></label></div>
      <div class="grid-2"><label>Learning intensity <select name="learningIntensity"><option>${profile.preferences.learningIntensity}</option><option>Light</option><option>Moderate</option><option>Intense</option></select></label><label>Career ambition level <select name="ambitionLevel"><option>${profile.preferences.ambitionLevel}</option><option>Stable growth</option><option>Fast growth</option><option>Leadership track</option><option>Flexible lifestyle</option></select></label></div>
    `,
    `
      <label>What worries you most about your career right now? <textarea name="worry" placeholder="Confidence, age, salary, interview, direction...">${profile.coach.worry}</textarea></label>
      <label>What kind of support do you want from Vera? <textarea name="supportStyle" placeholder="Encouragement, direct feedback, detailed planning...">${profile.coach.supportStyle}</textarea></label>
      <div class="grid-2"><label>Growth preference <select name="growthPreference"><option>${profile.coach.growthPreference}</option><option>Fast growth</option><option>Stable growth</option><option>Flexible growth</option></select></label><label>Explanation style <select name="explanationStyle"><option>${profile.coach.explanationStyle}</option><option>Simple guidance</option><option>Detailed explanations</option><option>Direct checklist</option></select></label></div>
      <div class="grid-2"><label>Career mission frequency <select name="missionFrequency"><option>${profile.coach.missionFrequency}</option><option>Daily</option><option>Weekly</option><option>Only when important</option></select></label><label>Confidence level today <select name="confidenceToday"><option>${profile.coach.confidenceToday}</option><option>Low</option><option>Medium</option><option>High</option></select></label></div>
    `,
    `
      <div class="vera-box">
        <h3>Your Career Intelligence Profile is ready to generate</h3>
        <p class="muted">CareerGo will use your stage, goals, skills, preferences, and coach settings to create a practical profile. It uses ranges and confidence levels, not fake precision.</p>
      </div>
      <div class="score-grid">
        <div class="score-tile"><span>Stage</span><strong>${profile.careerStage || "Pending"}</strong></div>
        <div class="score-tile"><span>Goals</span><strong>${profile.goals.length || 0}</strong></div>
        <div class="score-tile"><span>Skills</span><strong>${profile.skills.technical.length || 0}</strong></div>
        <div class="score-tile"><span>Confidence</span><strong>${profile.coach.confidenceToday}</strong></div>
      </div>
    `
  ][step];

  root.innerHTML = `
    <section class="glass-card">
      <div class="eyebrow"><span class="spark">*</span> Candidate onboarding</div>
      <h1 class="section-title">Let's understand your career situation.</h1>
      <p class="section-sub">Progressive onboarding keeps this simple. We use each answer to personalize your roadmap, dashboard, and Vera's coaching. You can edit everything later.</p>
      <div class="onboarding-progress">${stepLabels.map((label, index) => `<span class="${index === step ? "active" : index < step ? "done" : ""}">${index + 1}. ${label}</span>`).join("")}</div>
    </section>
    <form class="glass-card form-grid" data-onboarding-form data-step="${step}">
      <div class="section-kicker">Step ${step + 1} of ${stepLabels.length}</div>
      <h2 class="section-title mini">${stepLabels[step]}</h2>
      ${stepContent}
      <div class="hero-actions">
        ${step > 0 ? `<button class="btn btn-ghost" type="button" data-step-back>${icon("arrow-left")} Back</button>` : ""}
        <button class="btn btn-ghost" type="button" data-save-later>${icon("clock")} Save and finish later</button>
        <button class="btn btn-primary" type="submit">${icon(step === 6 ? "sparkles" : "arrow-right")} ${step === 6 ? "Generate profile" : "Save and continue"}</button>
      </div>
    </form>
  `;
  qs("[data-onboarding-form]").addEventListener("submit", event => {
    event.preventDefault();
    saveOnboardingStep(new FormData(event.currentTarget), step, event.currentTarget);
    const next = readState();
    if (step === 6) {
      next.profile.intelligence = generateCareerIntelligence(next.profile);
      next.profile.onboardingStatus.completed = true;
      next.profile.onboardingStatus.currentStep = 6;
      next.profile.updatedAt = nowStamp();
      next.onboarding.candidateDone = true;
      next.onboarding.currentStep = 6;
      next.notifications = [
        { id: "n-profile", title: "Profile generated", body: `${next.profile.intelligence.readinessLevel} readiness with ${next.profile.intelligence.confidence.toLowerCase()} confidence.` },
        { id: "n-next", title: "Next action", body: next.profile.intelligence.immediateActions[0] }
      ];
      syncCurrentUser(next);
      writeState(next);
      showToast("Career Intelligence Profile generated.");
      location.href = "dashboard.html";
      return;
    }
    const updated = readState();
    updated.onboarding.currentStep = step + 1;
    updated.profile.onboardingStatus.currentStep = step + 1;
    updated.profile.updatedAt = nowStamp();
    syncCurrentUser(updated);
    writeState(updated);
    renderCandidateOnboarding();
  });
  qs("[data-step-back]")?.addEventListener("click", () => {
    const next = readState();
    next.onboarding.currentStep = Math.max(0, step - 1);
    next.profile.onboardingStatus.currentStep = next.onboarding.currentStep;
    writeState(next);
    renderCandidateOnboarding();
  });
  qs("[data-save-later]")?.addEventListener("click", () => {
    const form = qs("[data-onboarding-form]");
    saveOnboardingStep(new FormData(form), step, form);
    showToast("Progress saved. You can finish onboarding later.");
  });
  createIcons();
}

function saveOnboardingStep(form, step, formEl) {
  const next = readState();
  const profile = next.profile;
  profile.onboardingStatus.started = true;
  if (step === 0) profile.careerStage = String(form.get("careerStage") || profile.careerStage);
  if (step === 1) {
    Object.keys(profile.background).forEach(key => {
      if (form.has(key)) profile.background[key] = String(form.get(key) || "");
    });
    if (form.has("projectExperience")) profile.background.clubLeadership = String(form.get("projectExperience") || "");
  }
  if (step === 2) profile.goals = checkboxValues(form, "goals");
  if (step === 3) {
    profile.skills.technical = splitList(form.get("technical"));
    profile.skills.soft = splitList(form.get("soft"));
    profile.skills.tools = splitList(form.get("tools"));
    profile.skills.certifications = splitList(form.get("certifications"));
    profile.skills.languages = splitList(form.get("languages"));
    profile.skills.workExperience = String(form.get("workExperience") || "");
    profile.skills.projects = splitList(form.get("projects"));
    profile.skills.portfolioLinks = String(form.get("portfolioLinks") || "");
    const file = formEl?.resume?.files?.[0];
    if (file) profile.resume = { name: file.name, uploaded: true };
  }
  if (step === 4) {
    profile.preferences.industries = splitList(form.get("industries"));
    profile.preferences.roles = splitList(form.get("roles"));
    profile.preferences.locations = splitList(form.get("locations"));
    profile.preferences.workMode = String(form.get("workMode") || profile.preferences.workMode);
    profile.preferences.employmentTypes = splitList(form.get("employmentTypes"));
    profile.preferences.minimumSalary = String(form.get("minimumSalary") || "");
    profile.preferences.relocate = String(form.get("relocate") || profile.preferences.relocate);
    profile.preferences.companySize = String(form.get("companySize") || "");
    profile.preferences.workCulture = String(form.get("workCulture") || "");
    profile.preferences.workLifeBalance = String(form.get("workLifeBalance") || profile.preferences.workLifeBalance);
    profile.preferences.riskTolerance = String(form.get("riskTolerance") || profile.preferences.riskTolerance);
    profile.preferences.learningIntensity = String(form.get("learningIntensity") || profile.preferences.learningIntensity);
    profile.preferences.ambitionLevel = String(form.get("ambitionLevel") || profile.preferences.ambitionLevel);
  }
  if (step === 5) {
    profile.coach.worry = String(form.get("worry") || "");
    profile.coach.supportStyle = String(form.get("supportStyle") || "");
    profile.coach.growthPreference = String(form.get("growthPreference") || profile.coach.growthPreference);
    profile.coach.explanationStyle = String(form.get("explanationStyle") || profile.coach.explanationStyle);
    profile.coach.missionFrequency = String(form.get("missionFrequency") || profile.coach.missionFrequency);
    profile.coach.confidenceToday = String(form.get("confidenceToday") || profile.coach.confidenceToday);
  }
  profile.intelligence = generateCareerIntelligence(profile);
  profile.updatedAt = nowStamp();
  next.onboarding.lastSavedAt = nowStamp();
  syncCurrentUser(next);
  writeState(next);
}

function renderEmployerOnboarding() {
  const root = qs("[data-employer-onboarding]");
  if (!root) return;
  if (!requireAccount(root, "set up your employer workspace")) return;
  const state = readState();
  root.innerHTML = `
    <section class="glass-card">
      <div class="eyebrow"><span class="spark">*</span> Employer onboarding</div>
      <h1 class="section-title">Set up the hiring cockpit.</h1>
      <p class="section-sub">Create company context, hiring goals, and a first role so the employer portal opens with useful data.</p>
    </section>
    <form class="glass-card form-grid" data-employer-onboarding-form>
      <label>Company name <input name="company" placeholder="Your company or hiring team"></label>
      <label>Industry <select name="industry"><option>Technology</option><option>Banking</option><option>Education</option><option>Energy Tech</option></select></label>
      <label>First role <input name="role" placeholder="Product Design Intern, Data Analyst..."></label>
      <label>Hiring goal <textarea name="goal" placeholder="What kind of candidates are you trying to find?"></textarea></label>
      <button class="btn btn-primary" type="submit">${icon("building-2")} Launch employer portal</button>
    </form>
  `;
  qs("[data-employer-onboarding-form]").addEventListener("submit", event => {
    event.preventDefault();
    const next = readState();
    next.onboarding.employerDone = true;
    next.session = { ...next.session, loggedIn: true, role: "employer", name: getUserName(next) };
    next.employerProfile = {
      company: String(new FormData(event.currentTarget).get("company") || "").trim(),
      industry: String(new FormData(event.currentTarget).get("industry") || ""),
      firstRole: String(new FormData(event.currentTarget).get("role") || "").trim(),
      hiringGoal: String(new FormData(event.currentTarget).get("goal") || "").trim(),
      updatedAt: nowStamp()
    };
    syncCurrentUser(next);
    writeState(next);
    showToast("Employer portal is ready.");
    location.href = "employer-app.html";
  });
  createIcons();
}

function renderProfile() {
  const root = qs("[data-profile]");
  if (!root) return;
  if (!requireAccount(root, "edit your Career Intelligence Profile")) return;
  const state = readState();
  const profile = state.profile;
  const intel = profile.intelligence || generateCareerIntelligence(profile);
  root.innerHTML = appShell("profile", `
    <section class="glass-card dashboard-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Career Intelligence</div><h1 class="section-title">${getUserName(state)}'s career profile.</h1><p class="section-sub">${intel.summary}</p></div>
      <div class="health-ring" style="--score:${intel.readinessScore}"><span>${intel.readinessLevel}</span><small>${intel.confidence}</small></div>
    </section>
    <section class="glass-card">
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
    <form class="os-main" data-profile-form>
      <section class="content-grid">
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Personal Information</h2>
          <label>Full name <input name="fullName" value="${profile.personal.fullName}"></label>
          <div class="grid-2"><label>Email <input name="email" type="email" value="${profile.personal.email}"></label><label>Phone optional <input name="phone" value="${profile.personal.phone}"></label></div>
          <div class="grid-2"><label>Age range <input name="ageRange" value="${profile.personal.ageRange}"></label><label>Preferred language <input name="preferredLanguage" value="${profile.personal.preferredLanguage}"></label></div>
          <div class="grid-2"><label>Country <input name="country" value="${profile.personal.country}"></label><label>City / State <input name="cityState" value="${profile.personal.cityState}"></label></div>
          <label>Role type <select name="roleType">${ROLE_TYPES.map(role => `<option value="${role}" ${profile.personal.roleType === role ? "selected" : ""}>${role}</option>`).join("")}</select></label>
        </div>
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Career Goals</h2>
          <label>Career stage <select name="careerStage">${CAREER_STAGES.map(stage => `<option value="${stage}" ${profile.careerStage === stage ? "selected" : ""}>${stage}</option>`).join("")}</select></label>
          <label>Goals <textarea name="goals">${profile.goals.join(", ")}</textarea></label>
          <label>Preferred roles <textarea name="roles">${profile.preferences.roles.join(", ")}</textarea></label>
          <label>Preferred industries <textarea name="industries">${profile.preferences.industries.join(", ")}</textarea></label>
        </div>
      </section>
      <section class="content-grid">
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Education</h2>
          <label>School / university <input name="school" value="${profile.background.school}"></label>
          <div class="grid-2"><label>Education level <input name="educationLevel" value="${profile.background.educationLevel}"></label><label>Course / major <input name="courseMajor" value="${profile.background.courseMajor}"></label></div>
          <div class="grid-2"><label>Expected graduation year <input name="expectedGraduationYear" value="${profile.background.expectedGraduationYear}"></label><label>Academic performance optional <input name="academicPerformance" value="${profile.background.academicPerformance}"></label></div>
        </div>
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Experience</h2>
          <div class="grid-2"><label>Current / last role <input name="currentRole" value="${profile.background.currentRole || profile.background.lastRole}"></label><label>Industry <input name="industry" value="${profile.background.industry}"></label></div>
          <div class="grid-2"><label>Years of experience <input name="yearsExperience" value="${profile.background.yearsExperience}"></label><label>Management experience <input name="managementExperience" value="${profile.background.managementExperience}"></label></div>
          <label>Previous roles / work experience <textarea name="previousRoles">${profile.background.previousRoles || profile.skills.workExperience}</textarea></label>
          <label>Career switch / gap / senior context <textarea name="careerContext">${profile.background.switchConcerns || profile.background.gapReason || profile.background.leadershipExperience}</textarea></label>
        </div>
      </section>
      <section class="content-grid">
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Skills</h2>
          <label>Technical / domain skills <textarea name="technical">${profile.skills.technical.join(", ")}</textarea></label>
          <label>Soft skills <textarea name="soft">${profile.skills.soft.join(", ")}</textarea></label>
          <label>Tools <textarea name="tools">${profile.skills.tools.join(", ")}</textarea></label>
          <label>Certifications <textarea name="certifications">${profile.skills.certifications.join(", ")}</textarea></label>
          <label>Languages <input name="languages" value="${profile.skills.languages.join(", ")}"></label>
        </div>
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Projects & Links</h2>
          <label>Projects <textarea name="projects">${profile.skills.projects.join(", ")}</textarea></label>
          <label>Achievements <textarea name="achievements">${profile.skills.achievements.join(", ")}</textarea></label>
          <label>Portfolio links <input name="portfolioLinks" value="${profile.skills.portfolioLinks}"></label>
          <div class="grid-2"><label>LinkedIn <input name="linkedin" value="${profile.skills.linkedin}"></label><label>GitHub <input name="github" value="${profile.skills.github}"></label></div>
        </div>
      </section>
      <section class="content-grid">
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Job Preferences</h2>
          <label>Preferred locations <textarea name="locations">${profile.preferences.locations.join(", ")}</textarea></label>
          <div class="grid-2"><label>Work mode <input name="workMode" value="${profile.preferences.workMode}"></label><label>Employment types <input name="employmentTypes" value="${profile.preferences.employmentTypes.join(", ")}"></label></div>
          <div class="grid-2"><label>Minimum salary optional <input name="minimumSalary" value="${profile.preferences.minimumSalary}"></label><label>Relocate <input name="relocate" value="${profile.preferences.relocate}"></label></div>
          <div class="grid-2"><label>Work culture <input name="workCulture" value="${profile.preferences.workCulture}"></label><label>Risk tolerance <input name="riskTolerance" value="${profile.preferences.riskTolerance}"></label></div>
        </div>
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Resume & Documents</h2>
          <p class="muted">Current resume: ${profile.resume.name || "No resume uploaded yet"}</p>
          <label>Replace resume <input name="resume" type="file" accept=".pdf,.doc,.docx"></label>
          <div class="hero-actions"><button class="btn btn-cyan" type="button" data-analyze>${icon("scan-search")} Refresh analysis</button><button class="btn btn-ghost" type="button" data-export>${icon("download")} Export profile</button></div>
        </div>
      </section>
      <section class="content-grid">
        <div class="glass-card form-grid">
          <h2 class="section-title mini">Privacy Settings</h2>
          <label>Profile visibility <select name="profileVisibility"><option>${profile.privacy.profileVisibility}</option><option>Private</option><option>Visible to employers</option><option>Visible for advisory opportunities</option></select></label>
          <label class="check-field"><input name="allowEmployerDiscovery" type="checkbox" ${profile.privacy.allowEmployerDiscovery ? "checked" : ""}> Allow employer discovery</label>
          <label class="check-field"><input name="allowCoachMemory" type="checkbox" ${profile.privacy.allowCoachMemory ? "checked" : ""}> Allow Vera to remember coaching context</label>
        </div>
        <div class="glass-card form-grid">
          <h2 class="section-title mini">AI Coach Preferences</h2>
          <label>Career worry <textarea name="worry">${profile.coach.worry}</textarea></label>
          <label>Support wanted from Vera <textarea name="supportStyle">${profile.coach.supportStyle}</textarea></label>
          <div class="grid-2"><label>Growth preference <input name="growthPreference" value="${profile.coach.growthPreference}"></label><label>Explanation style <input name="explanationStyle" value="${profile.coach.explanationStyle}"></label></div>
          <div class="grid-2"><label>Mission frequency <input name="missionFrequency" value="${profile.coach.missionFrequency}"></label><label>Confidence today <input name="confidenceToday" value="${profile.coach.confidenceToday}"></label></div>
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

function renderMarket() {
  const root = qs("[data-market]");
  if (!root) return;
  if (!requireAccount(root, "view your market intelligence")) return;
  if (needsOnboarding(root)) return;
  const state = readState();
  const target = getTargetLabel(state.profile).toLowerCase();
  const current = DATA.marketRoles.find(role => target.includes(role.role.toLowerCase()) || role.role.toLowerCase().includes(target)) || DATA.marketRoles[0];
  const intel = state.profile.intelligence || generateCareerIntelligence(state.profile);
  root.innerHTML = appShell("market", `
    <section class="glass-card">
      <div class="eyebrow"><span class="spark">*</span> Market Intelligence</div>
      <h1 class="section-title">Know your worth and the market direction.</h1>
      <p class="section-sub">${intel.salaryPositioning}. CareerGo uses ranges and direction signals here, not fake exact pay promises.</p>
    </section>
    <section class="score-grid">
      <div class="score-tile"><span>Current worth</span><strong>${money(current.current)}</strong></div>
      <div class="score-tile"><span>Fair value</span><strong>${money(current.fair)}</strong></div>
      <div class="score-tile"><span>Potential</span><strong>${money(current.potential)}</strong></div>
      <div class="score-tile"><span>Demand</span><strong>${current.demand}</strong></div>
    </section>
    <section class="content-grid">
      <div class="glass-card">
        <div class="section-kicker">Career value explorer</div>
        ${DATA.marketRoles.map(role => `<div class="list-card"><div class="list-card-top"><div><h3>${role.role}</h3><div class="muted small">${role.demand} demand - ${role.trend}</div></div><span class="pill green">${money(role.fair)}</span></div>${pills(role.skills, "cyan")}</div>`).join("")}
      </div>
      <div class="glass-card">
        <div class="section-kicker">Growth simulator</div>
        ${[
          ["Add product strategy case study", "+RM8k", 65],
          ["Add SQL dashboard proof", "+RM6k", 45],
          ["Add AI product workflow", "+RM12k", 72]
        ].map(([title, lift, value]) => `<div class="tool-card"><div class="list-card-top"><h3>${title}</h3><span class="pill gold">${lift}</span></div>${progressBar(value)}</div>`).join("")}
      </div>
    </section>
    <section class="glass-card">
      <div class="section-kicker">Market pulse</div>
      <div class="grid-3">${DATA.pulse.map(signal => `<article class="tool-card"><h3>${signal.title}</h3><p>${signal.body}</p><p class="muted small">${signal.impact}</p></article>`).join("")}</div>
    </section>
  `);
  createIcons();
}

function renderAutopilot() {
  const root = qs("[data-autopilot]");
  if (!root) return;
  if (!requireAccount(root, "use Autopilot")) return;
  if (needsOnboarding(root)) return;
  const state = readState();
  const tracked = getTrackedJobs(state);
  const counts = applicationSummaryCounts(state);
  root.innerHTML = appShell("autopilot", `
    <section class="glass-card dashboard-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Applications</div><h1 class="section-title">Track every role from saved to outcome.</h1><p class="section-sub">See status, next action, deadline, Vera advice, and automation rules in one place.</p></div>
      <div class="radar"><span></span></div>
    </section>
    <section class="glass-card application-overview">
      <div class="section-head"><div><div class="section-kicker">Pipeline</div><h2 class="section-title mini">Nothing disappears after you apply.</h2></div><a class="btn btn-primary" href="jobs.html#tracker">${icon("briefcase")} Manage in Jobs</a></div>
      <div class="pipeline-strip">
        ${APPLICATION_STAGES.slice(0, 6).map(stage => `<div class="pipeline-stage"><span>${stage.label}</span><strong>${counts[stage.key] || 0}</strong></div>`).join("")}
      </div>
      <div class="list-stack spacious-list">
        ${tracked.length ? tracked.map(({ job, record }) => `
          <a class="list-card application-row" href="jobs.html?job=${job.id}#tracker">
            <div class="list-card-top"><div><h3>${job.title}</h3><div class="muted small">${job.company} - ${record.deadline}</div></div>${applicationStagePill(record.stage)}</div>
            <p class="muted">${record.nextAction}</p>
            ${applicationProgress(record)}
          </a>
        `).join("") : `<div class="card">No applications yet. Save or apply to a job to start tracking progress.</div>`}
      </div>
    </section>
    <section class="content-grid">
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

function renderPosts() {
  const root = qs("[data-posts]");
  if (!root) return;
  if (!requireAccount(root, "join the professional feed")) return;
  const state = readState();
  root.innerHTML = appShell("posts", `
    <section class="glass-card">
      <div class="eyebrow"><span class="spark">*</span> Professional feed</div>
      <h1 class="section-title">Share progress and learn from career stories.</h1>
      <p class="section-sub">Candidate posts, reactions, bookmarks, and AI drafting support restore the community workflow.</p>
    </section>
    <section class="content-grid">
      <form class="glass-card form-grid" data-post-form>
        <h2 class="section-title mini">Create update</h2>
        <label>Title <input name="title" placeholder="What did you learn?"></label>
        <label>Post <textarea name="body" placeholder="Share a career lesson, interview story, or project update."></textarea></label>
        <button class="btn btn-primary" type="submit">${icon("send")} Publish</button>
      </form>
      <div class="glass-card list-stack">
        ${state.posts.map(post => `<article class="list-card"><div class="list-card-top"><div><h3>${post.title}</h3><div class="muted small">${post.author}</div></div><span class="pill gold">${post.reactions} reactions</span></div><p class="muted">${post.body}</p></article>`).join("")}
      </div>
    </section>
  `);
  qs("[data-post-form]").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = String(form.get("title")).trim();
    const body = String(form.get("body")).trim();
    if (!title || !body) return;
    const next = readState();
    next.posts.unshift({ id: `post-${Date.now()}`, author: getUserName(next), title, body, reactions: 0 });
    writeState(next);
    showToast("Post published.");
    renderPosts();
  });
  createIcons();
}

function renderEmployerPortal() {
  const root = qs("[data-employer-app]");
  if (!root) return;
  if (!requireAccount(root, "open your employer portal")) return;
  const pipeline = ["Saved", "Screen", "Interview", "Offer"];
  const state = readState();
  const employer = state.employerProfile || {};
  const currentHash = location.hash || "#cockpit";
  root.innerHTML = `
    <aside class="os-sidebar glass-card">
      <div class="os-user"><img class="brand-logo" src="assets/careergo-logo.png" alt="CareerGo logo"><div><strong>Employer OS</strong><span>Talent dashboard</span></div><button class="sidebar-toggle" id="sidebar-close-btn" aria-label="Close navigation" style="margin-left:auto">${icon("x")}</button></div>
      <nav class="os-nav" id="employer-os-nav"><a class="${currentHash === '#cockpit' ? 'active' : ''}" href="#cockpit">${icon("layout-dashboard")} Cockpit</a><a class="${currentHash === '#roles' ? 'active' : ''}" href="#roles">${icon("briefcase")} Roles</a><a class="${currentHash === '#talent' ? 'active' : ''}" href="#talent">${icon("users")} Talent</a><a class="${currentHash === '#pipeline' ? 'active' : ''}" href="#pipeline">${icon("kanban")} Pipeline</a><a class="${currentHash === '#assistant' ? 'active' : ''}" href="#assistant">${icon("sparkles")} AI Assistant</a></nav>
    </aside>
    <div class="os-main">
      <section class="glass-card"><div class="eyebrow"><span class="spark">*</span> Hiring cockpit</div><h1 class="section-title">Fit, pipeline, reputation, and action in one place.</h1><div class="metric-strip"><div class="metric"><strong>257</strong><span>Applicants</span></div><div class="metric"><strong>71</strong><span>Qualified</span></div><div class="metric"><strong>21d</strong><span>Time to hire</span></div><div class="metric"><strong>86%</strong><span>Offer acceptance</span></div></div></section>
      <section class="content-grid" id="roles"><div class="glass-card"><div class="section-kicker">Role workspace</div>${DATA.employerRoles.map(role => `<div class="list-card"><div class="list-card-top"><div><h3>${role.title}</h3><div class="muted small">${role.applicants} applicants - ${role.qualified} qualified</div></div><span class="pill ${role.status === "Active" ? "green" : "gold"}">${role.status}</span></div></div>`).join("")}</div><form class="glass-card form-grid"><h2 class="section-title mini">Company profile</h2><label>Company <input value="${employer.company || ""}" placeholder="Company name"></label><label>Brand note <textarea placeholder="Describe your hiring brand and candidate promise">${employer.hiringGoal || ""}</textarea></label><button class="btn btn-primary" type="button">${icon("save")} Save profile</button></form></section>
      <section class="glass-card" id="talent"><div class="section-head"><div><div class="section-kicker">Talent discovery</div><h2 class="section-title mini">Candidate fit scores</h2></div><button class="btn btn-cyan">${icon("user-plus")} Add candidates</button></div><div class="grid-3">${DATA.candidates.map(candidate => `<article class="tool-card"><div class="list-card-top"><h3>${candidate.name}</h3><span class="score">${candidate.fit}%</span></div><p>${candidate.role}</p>${pills(candidate.skills, "cyan")}<div class="hero-actions"><button class="btn btn-ghost">${icon("bookmark")} Save</button><button class="btn btn-primary">${icon("arrow-right")} Move to ${candidate.stage}</button></div></article>`).join("")}</div></section>
      <section class="glass-card" id="pipeline"><div class="section-kicker">Hiring pipeline</div><div class="kanban">${pipeline.map(stage => `<div class="kanban-col"><h3>${stage}</h3>${DATA.candidates.filter(c => c.stage === stage || (stage === "Saved" && c.stage === "Saved")).map(c => `<div class="review-card"><strong>${c.name}</strong><p class="muted small">${c.role} - ${c.fit}% fit</p></div>`).join("") || `<div class="review-card"><p class="muted small">No candidates yet</p></div>`}</div>`).join("")}</div></section>
      <section class="content-grid" id="assistant"><div class="glass-card"><div class="section-kicker">Posts and updates</div>${DATA.communityPosts.slice(0, 2).map(post => `<div class="list-card"><h3>${post.title}</h3><p class="muted">${post.body}</p></div>`).join("")}</div><div class="glass-card vera-box"><h2 class="section-title mini">AI hiring assistant</h2><p class="muted">Vera can summarize candidates, draft outreach, generate interview questions, and explain pipeline bottlenecks.</p><div class="hero-actions"><button class="btn btn-primary">${icon("sparkles")} Draft outreach</button><button class="btn btn-cyan">${icon("list-checks")} Interview questions</button></div></div></section>
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
}

function renderEmployers() {
  const root = qs("[data-employers]");
  if (!root) return;
  root.innerHTML = `
    <div class="grid-3">
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
    <div class="glass-card" style="margin-top:22px">
      <div class="section-head">
        <div>
          <div class="section-kicker">Hiring dashboard</div>
          <h2 class="section-title">A cleaner view of fit, pipeline, and reputation.</h2>
        </div>
        <a class="btn btn-primary" href="employer-app.html">${icon("layout-dashboard")} Open employer portal</a>
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
  root.innerHTML = `
    <div class="table-wrap">
      <table class="comparison-table">
        <thead><tr><th>Name</th><th>Type</th><th>Rating</th><th>Growth</th><th>Pay / Outcome</th><th>Best signal</th></tr></thead>
        <tbody>
          ${orgs.map(org => `<tr><td><strong>${org.name}</strong></td><td>${org.type}</td><td>${org.rating.toFixed(1)}</td><td>${org.scores.growth.toFixed(1)}</td><td>${org.salary}</td><td>${org.signal}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function init() {
  renderNavigation();
  renderFeatured();
  renderJobsPage();
  renderDirectoryPage(document.body.dataset.directory || "");
  renderDashboard();
  renderVera();
  renderAuth();
  renderCandidateOnboarding();
  renderEmployerOnboarding();
  renderProfile();
  renderMarket();
  renderAutopilot();
  renderPosts();
  renderEmployerPortal();
  renderEmployers();
  renderComparison();
  bindGlobalActions();
  createIcons();
  initSidebarToggle();
}

document.addEventListener("DOMContentLoaded", init);
