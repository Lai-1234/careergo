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
    { id: "m2", title: "Upgrade one case study", body: "Add trade-offs, metric impact, and stakeholder decisions.", xp: 180, progress: 35, href: "grow.html" },
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
    { id: "c1", name: "Siti Nur", privacy: "Public profile", role: "Product Designer", stage: "Screen", fit: 92, location: "Kuala Lumpur", availability: "2 weeks", salary: "RM 5k - 7k", education: "BA Design, Taylor's", experience: "1 year internship", careerStage: "Fresh Graduate", portfolio: "Strong", skills: ["Figma", "Research", "Design Systems"], reason: "Portfolio shows banking onboarding work and strong research evidence." },
    { id: "c2", name: "Daniel Lim", privacy: "Anonymized", role: "Data Analyst", stage: "Interview", fit: 88, location: "Petaling Jaya", availability: "Immediate", salary: "RM 4.8k - 6.5k", education: "BSc Statistics, UM", experience: "Graduate projects", careerStage: "Looking for first full-time job", portfolio: "Moderate", skills: ["SQL", "Python", "Dashboards"], reason: "Strong SQL dashboard proof and clear interest in marketplace analytics." },
    { id: "c3", name: "Priya Nair", privacy: "Public profile", role: "Frontend Developer", stage: "Saved", fit: 84, location: "Remote / Selangor", availability: "1 month", salary: "RM 6k - 8k", education: "Diploma Software Engineering", experience: "2 years freelance", careerStage: "Career Switcher", portfolio: "Strong", skills: ["React", "TypeScript", "Testing"], reason: "Transferable freelance delivery evidence with strong component testing habits." }
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
    title: "Compact workspace rail",
    body: "The left rail stays icon-only to keep your workspace clean. Hover or tab into it to reveal labels for Career Intelligence, jobs, applications, Vera, research, saved items, and market signals.",
    mission: "Use the top search for companies, universities, roles, and saved research."
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
    planProgress: {},
    marketPlan: null,
    guidedTour: { dashboard: { status: "new", step: 0 } },
    reviews: DATA.reviews,
    chat: [],
    notifications: [],
    interviewCoach: { role: "", type: "Behavioral", focus: "Leadership", started: false, answer: "", feedback: null, sessions: [] },
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
    planProgress: state.planProgress && typeof state.planProgress === "object" ? state.planProgress : {},
    marketPlan: state.marketPlan && typeof state.marketPlan === "object" ? state.marketPlan : null,
    interviewCoach: {
      role: "",
      type: "Behavioral",
      focus: "Leadership",
      started: false,
      answer: "",
      feedback: null,
      sessions: [],
      ...(state.interviewCoach || {})
    },
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

function startDemoDashboard() {
  const next = applyDemoAccount(readState());
  writeState(next);
  location.href = "dashboard.html";
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
      { id: "pm3", title: "Leadership interview", body: "Practice a conflict, coaching, and stakeholder story.", xp: 90, progress: 20, href: "vera.html#interview" }
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
    { id: "pm3", title: "Coach plan", body: "Ask Vera to create a simple 7-day action plan.", xp: 70, progress: 20, href: "vera.html#plan" }
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
      href: "vera.html#plan",
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
    return;
  }
  window.setTimeout(() => showDashboardTourStep(tour.step || 0), 180);
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
  });
  qs("[data-tour-back]", card).addEventListener("click", () => showDashboardTourStep(stepIndex - 1));
  qs("[data-tour-next]", card).addEventListener("click", () => {
    if (stepIndex === DASHBOARD_TOUR_STEPS.length - 1) {
      saveDashboardTour({ status: "completed", step: stepIndex, completedAt: nowStamp() });
      removeDashboardTour();
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
    card.style.bottom = "88px";
    return;
  }
  const rect = target.getBoundingClientRect();
  const width = Math.min(390, window.innerWidth - 40);
  const height = Math.min(card.offsetHeight || 310, window.innerHeight - 120);
  card.style.width = `${width}px`;
  card.style.right = "auto";
  card.style.bottom = "auto";

  const margin = 22;
  const isWideTarget = rect.width > window.innerWidth * 0.56;
  let left;
  let top;

  if (isWideTarget) {
    left = window.innerWidth - width - margin;
    const belowTarget = rect.bottom + margin;
    top = belowTarget + height < window.innerHeight - margin
      ? belowTarget
      : Math.max(96, Math.min(window.innerHeight - height - margin, rect.top + margin));
  } else {
    const rightSide = rect.right + margin;
    const leftSide = rect.left - width - margin;
    left = rightSide + width < window.innerWidth - margin ? rightSide : Math.max(margin, leftSide);
    top = Math.max(96, Math.min(window.innerHeight - height - margin, rect.top + rect.height / 2 - height / 2));
  }

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
  qs("[data-enter-demo]", root)?.addEventListener("click", startDemoDashboard);
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
      <a class="btn btn-primary" href="register.html">Create Account</a>
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
      if (key === "posts") return ["posts", "saved"].includes(page);
      return page === key;
    };
    const initials = String(getFirstName(state) || "A").slice(0, 2).toUpperCase();
    return `
      <a class="brand cg-top-brand" href="dashboard.html" aria-label="CareerGo dashboard">
        <img class="cg-navbar-logo" src="assets/careergo-logo-script.png" alt="CareerGo">
      </a>
      <nav class="nav-links cg-workspace-tabs" aria-label="CareerGo workspace">
        ${workspaceLinks.map(([key, label, href]) => `<a data-nav="${key}" class="${isWorkspaceTabActive(key) ? "active" : ""}" href="${href}">${label}</a>`).join("")}
      </nav>
      <form class="workspace-search cg-vera-search" role="search" data-workspace-search data-tour-target="workspace-search">
        ${icon("search")}
        <input name="q" aria-label="Ask Vera" placeholder="Ask Vera anything...">
        <kbd>Cmd K</kbd>
      </form>
      <div class="nav-actions cg-user-actions">
        <a class="btn btn-ghost cg-message-trigger" href="posts.html#messages" aria-label="Open messages">
          ${icon("message-circle")}
        </a>
        <div class="notification-menu-wrap">
          <button class="btn btn-ghost notification-trigger" type="button" data-notification-toggle aria-haspopup="dialog" aria-expanded="false" aria-label="Open notifications">
            ${icon("bell")} ${notifications.length ? `<strong>${notifications.length}</strong>` : ""}
          </button>
          <div class="notification-menu glass-card" data-notification-menu hidden role="dialog" aria-label="Notifications">
            <div class="notification-menu-head">
              <div>
                <span class="section-kicker">Notifications</span>
                <strong>${notifications.length ? `${notifications.length} active` : "All clear"}</strong>
              </div>
              ${notifications.length ? `<button class="notification-clear" type="button" data-clear-notifications>Clear all</button>` : ""}
            </div>
            <div class="notification-menu-list">
              ${notifications.length ? notifications.slice(0, 5).map(note => `
                <article class="notification-item">
                  <span class="notification-icon">${icon(note.icon || "sparkles")}</span>
                  <span class="notification-copy">
                    <strong>${note.title}</strong>
                    <small>${note.body}</small>
                  </span>
                  <button class="notification-dismiss" type="button" data-dismiss-notification="${note.id}" aria-label="Dismiss ${note.title}">${icon("x")}</button>
                </article>
              `).join("") : `
                <div class="notification-empty">
                  ${icon("check-circle")}
                  <strong>No new updates</strong>
                  <small>CareerGo will surface tasks, role changes, and Vera recommendations here.</small>
                </div>
              `}
            </div>
            <a class="notification-footer" href="autopilot.html">${icon("list-checks")} Open action center</a>
          </div>
        </div>
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
      <div class="notification-menu-wrap">
        <button class="btn btn-ghost notification-trigger" type="button" data-notification-toggle aria-haspopup="dialog" aria-expanded="false" aria-label="Open notifications">
          ${icon("bell")} <strong>${notifications.length}</strong>
        </button>
        <div class="notification-menu glass-card" data-notification-menu hidden role="dialog" aria-label="Notifications">
          <div class="notification-menu-head">
            <div>
              <span class="section-kicker">Notifications</span>
              <strong>${notifications.length ? `${notifications.length} active` : "All clear"}</strong>
            </div>
            ${notifications.length ? `<button class="notification-clear" type="button" data-clear-notifications>Clear all</button>` : ""}
          </div>
          <div class="notification-menu-list">
            ${notifications.length ? notifications.slice(0, 5).map(note => `
              <article class="notification-item">
                <span class="notification-icon">${icon(note.icon || "sparkles")}</span>
                <span class="notification-copy">
                  <strong>${note.title}</strong>
                  <small>${note.body}</small>
                </span>
                <button class="notification-dismiss" type="button" data-dismiss-notification="${note.id}" aria-label="Dismiss ${note.title}">${icon("x")}</button>
              </article>
            `).join("") : `
              <div class="notification-empty">
                ${icon("check-circle")}
                <strong>No new updates</strong>
                <small>CareerGo will surface tasks, role changes, and Vera recommendations here.</small>
              </div>
            `}
          </div>
          <a class="notification-footer" href="${isEmployer ? "employer-app.html#pipeline" : "autopilot.html"}">
            ${icon(isEmployer ? "kanban-square" : "list-checks")} Open action center
          </a>
        </div>
      </div>
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

    html body .topbar:has(.cg-vera-search) .cg-vera-search kbd {
      width: auto !important;
      min-width: 44px !important;
      height: 24px !important;
      padding: 0 8px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid rgba(14, 44, 37, 0.09) !important;
      border-radius: 7px !important;
      color: transparent !important;
      -webkit-text-fill-color: transparent !important;
      background: rgba(255, 255, 255, 0.64) !important;
      font-size: 0 !important;
      font-family: var(--font-sans, Inter, sans-serif) !important;
      box-shadow: none !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search kbd::before {
      content: "\\2318 K" !important;
      color: #87908b !important;
      -webkit-text-fill-color: #87908b !important;
      font-size: 12px !important;
      font-weight: 800 !important;
      white-space: nowrap !important;
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

    html body .topbar:has(.cg-vera-search) .cg-vera-search kbd {
      min-width: 34px !important;
      height: 20px !important;
      padding: 0 6px !important;
      border-color: #e3dcc8 !important;
      color: transparent !important;
      -webkit-text-fill-color: transparent !important;
    }

    html body .topbar:has(.cg-vera-search) .cg-vera-search kbd::before {
      content: "Cmd K" !important;
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      font-size: 10px !important;
      font-weight: 500 !important;
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
      width: min(1240px, calc(100% - 48px)) !important;
      max-width: 1240px !important;
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
        width: min(100% - 32px, 1240px) !important;
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

    html body .topbar.workspace-topbar .cg-vera-search kbd {
      min-width: 34px !important;
      height: 20px !important;
      padding: 0 6px !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid #e3dcc8 !important;
      border-radius: 7px !important;
      background: rgba(255, 255, 255, 0.8) !important;
      color: transparent !important;
      -webkit-text-fill-color: transparent !important;
      font-size: 0 !important;
      line-height: 1 !important;
    }

    html body .topbar.workspace-topbar .cg-vera-search kbd::before {
      content: "Cmd K" !important;
      color: #5f7573 !important;
      -webkit-text-fill-color: #5f7573 !important;
      font-family: "Inter", ui-sans-serif, system-ui, sans-serif !important;
      font-size: 10px !important;
      font-weight: 500 !important;
      line-height: 1 !important;
      letter-spacing: 0 !important;
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
  const navInner = qs(".nav-inner", topbar);
  const mobileNav = qs(".mobile-nav", topbar);
  if (!navInner) return;
  const state = readState();
  const loggedIn = Boolean(state.session.loggedIn);
  const page = document.body.dataset.page || "home";
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
  qs("[data-workspace-search]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const q = String(form.get("q") || "").trim();
    if (!q) return;
    if (event.currentTarget.classList.contains("cg-vera-search")) {
      location.href = `vera.html?topic=${encodeURIComponent(q)}`;
      return;
    }
    const lower = q.toLowerCase();
    const destination = state.session.role === "employer"
      ? "employer-app.html"
      : lower.includes("university") || lower.includes("college") || lower.includes("degree") || lower.includes("scholarship")
      ? "universities.html"
      : lower.includes("company") || lower.includes("culture") || lower.includes("review") || lower.includes("maybank") || lower.includes("grab") || lower.includes("cimb")
        ? "companies.html"
        : "discover.html";
    location.href = state.session.role === "employer" ? `${destination}?q=${encodeURIComponent(q)}#candidates` : `${destination}?q=${encodeURIComponent(q)}`;
  });
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
  qsa("[data-dismiss-notification]", menu).forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      const id = button.dataset.dismissNotification;
      const state = readState();
      state.notifications = (state.notifications || []).filter(note => note.id !== id);
      writeState(syncCurrentUser(state));
      renderNavigation();
      showToast("Notification dismissed.");
    });
  });
  qs("[data-clear-notifications]", menu)?.addEventListener("click", event => {
    event.preventDefault();
    const state = readState();
    state.notifications = [];
    writeState(syncCurrentUser(state));
    renderNavigation();
    showToast("Notifications cleared.");
  });
  document.addEventListener("click", close);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
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
  const footerPages = new Set(["home", "explore", "companies", "universities", "community"]);
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

  if (page === "home") {
    footer.innerHTML = `
      <div class="footer-wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            <h2>CareerGo</h2>
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
    return;
  }

  footer.innerHTML = `
    <div class="footer-wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <h2>CareerGo</h2>
          <p>The AI-guided career platform - find jobs, research companies and universities, and grow with Vera.</p>
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
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>(c) 2026 CareerGo  - Career OS</span>
      </div>
    </div>
  `;
  footer.querySelector(".footer-brand p").innerHTML = `The AI-guided career platform &mdash; find jobs, research companies and universities, and grow with Vera.`;
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

function setActiveNav() {
  if (qs(".public-site-nav")) {
    qsa("[data-nav].active, .public-site-nav .active, .public-site-actions .active").forEach(link => {
      link.classList.remove("active");
    });
    return;
  }
  const page = document.body.dataset.page || "home";
  qsa("[data-nav]").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === page);
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
          <h1 class="section-title">Career questions, role stories, and weekly prompts.</h1>
          <p class="section-sub">Visitors can read public posts. Posting, saving, and personalized Vera follow-ups unlock inside the workspace.</p>
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
    const marketPulse = [
      ["In your market", "Hiring +34%", "AI Product roles", "RM 145k / year", "67% remote-friendly", "312 new openings", "teal"],
      ["Missing from your profile", "Hiring +62%", "Prompt engineering", "RM 9,500 / month", "82% remote-friendly", "48 new openings", "blue"],
      ["Matches your background", "Hiring +21%", "Design-first PMs", "RM 132k / year", "54% remote-friendly", "96 new openings", "gold"],
      ["Your region", "Hiring +12%", "KL fintech product hubs", "RM 128k / year", "38% remote-friendly", "204 new openings", "rose"]
    ];
    const barRamp = {
      teal: ["#b9d9d4", "#a0cbc6", "#87beb8", "#6eb0aa", "#56a39c", "#3d958e", "#248880", "#0b7a72"],
      blue: ["#cae4ee", "#b5d5e3", "#a0c7d8", "#8bb8cd", "#75a9c2", "#609ab7", "#4b8cac", "#367da1"],
      gold: ["#eadfbf", "#e2d3aa", "#dbc696", "#d3ba81", "#ccae6c", "#c4a257", "#bd9543", "#b5892e"],
      rose: ["#ecd5cf", "#e4c8c1", "#ddbcb2", "#d5afa4", "#cea296", "#c69588", "#bf8979", "#b77c6b"]
    };
    const collections = [
      ["12 companies", "Fast-growing AI companies hiring PMs in Malaysia", "12 teams where the AI stack IS the product. Weighted by funding velocity, headcount growth in KL/Penang, and open PM roles.", "Because your last 4 saved roles were AI-native.", "large"],
      ["8 companies", "Startups with strong work-life balance", "Async-first Malaysian teams. Median 34h weeks, no on-call PM culture, hybrid-friendly.", "Matches your working-style profile.", ""],
      ["17 roles", "Roles you could apply to today", "No upskilling required - your current skills already cover 85%+ of the job spec.", "Skill overlap >= 85%.", "small"]
    ];
    const featuredCompanies = [
      ["Setel", "Fintech - KL", "Hiring - Verified", "4 open roles", "AI-native squad; matches your saved roles."],
      ["Carsome", "Marketplace - KL", "Fast growing", "3 open roles", "3 alumni from your uni joined PM here."],
      ["StoreHub", "SaaS - KL", "Remote-first", "2 open roles", "Async culture; matches your working style."],
      ["Aerodyne", "AI - KL", "Top culture", "5 open roles", "AI-native org; roadmap-aligned."]
    ];
    const universities = [
      ["Universiti Malaya (UM)", "KL", "94% employment - 6 mo", "Your alma mater - 312 PM alumni active."],
      ["Sunway University", "Selangor", "91% employment - 6 mo", "Fintech partnerships you follow."],
      ["Asia School of Business", "KL", "MIT-linked - Exec Ed", "Matches your 3-yr Head of Product plan."],
      ["APU Malaysia", "KL", "AI programme partners", "AI product cert closes your top gap."]
    ];
    const roleDirections = [
      ["AI Product Manager", "One step above your current level", "91% match", "RM 145k / yr", "+34%", "Your SQL + design background is exactly what AI product teams in KL are hiring for."],
      ["Design Engineer", "Leans into your design background", "78% match", "RM 118k / yr", "+22%", "Rare hybrid role - few Malaysian designers code, few engineers design."],
      ["Founding PM (Seed startup)", "Fits your risk profile", "72% match", "RM 130k + equity / yr", "+12%", "You've saved 3 seed-stage KL startups this month."]
    ];
    const programs = [
      ["Reforge - AI Product Management", "6-week online sprint", "Est. +18% market value", "Cost: USD 2,000 (~RM 9,400)", "6 weeks - part-time", "Closes your top skill gap: LLM product design."],
      ["Asia School of Business - Exec Ed", "Product leadership - MIT-linked", "Est. +12% market value", "Cost: RM 12,000", "5 weekends", "Matches your 3-year plan toward Head of Product."],
      ["Stanford Online - AI Product Certificate", "Self-paced certificate", "Asked for by 4 employers you follow", "Cost: USD 1,750 (~RM 8,200)", "8 weeks - self-paced", "Setel, Carsome, and 2 others list this as a plus."]
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
          <div class="cg-discover-kicker"><span>${icon("sparkles")} Discover</span><small>${icon("map-pin")} Malaysia - Kuala Lumpur - Tuned for your Product Management journey</small></div>
          <h1>A discovery hub for <em>your next career move.</em></h1>
          <p>Curated highlights on this page. Dedicated explorers when you want to go deeper - companies, universities, career paths, programmes, mentors.</p>
          <form class="cg-discover-search" action="vera.html">
            ${icon("search")}
            <input name="topic" aria-label="Ask Vera about Discover" placeholder="Search companies, jobs, universities, industries, salaries...">
            <button type="button" class="cg-search-chip">Opportunities only</button>
            <button type="button">${icon("sliders-horizontal")} Filters</button>
            <button type="submit">${icon("sparkles")} Ask Vera</button>
          </form>
          <p class="cg-discover-network-note">Looking for people, mentors or recruiters? Head to Network.</p>
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
          <h2>Vera's Top Pick</h2>
          <article class="cg-top-pick-card">
            <div class="cg-top-pick-main">
              <div class="cg-pill-row"><span class="dark">${icon("sparkles")} Vera found this</span><span>${icon("flame")} 91% roadmap match</span><small>Posted 2 days ago - 34 applicants</small></div>
              <h3>Senior Product Manager, AI Platform</h3>
              <p class="cg-role-line">${icon("building-2")} Setel (PETRONAS Digital) - ${icon("map-pin")} Kuala Lumpur - Hybrid</p>
              <p class="cg-salary"><span>Estimated annual salary (Malaysia)</span> RM 140,000 - RM 168,000 <small>/ year</small></p>
              <div class="cg-why-card">
                <span>${icon("sparkles")} Why Vera recommends this</span>
                <p>${icon("check-circle-2")} You completed SQL for PM this month.</p>
                <p>${icon("check-circle-2")} Your roadmap targets AI Product Management.</p>
                <p>${icon("check-circle-2")} You saved 3 AI-native startups recently.</p>
              </div>
              <div class="cg-action-row">
                <a class="btn btn-primary" href="discover.html?job=${topPick.id}">Explore role ${icon("arrow-up-right")}</a>
                <button class="btn btn-ghost" type="button">${icon("bookmark")} Save</button>
                <a class="btn btn-ghost" href="vera.html?topic=Tell me more about this role">Ask Vera more</a>
              </div>
            </div>
            <aside class="cg-top-pick-side">
              <div><span>Career match</span><strong>91%</strong><small>based on your roadmap</small></div>
              <div><span>${icon("target")} Skills you already have</span><p><b>Product discovery</b><b>User research</b><b>SQL for PM</b><b>Design systems</b></p><span>${icon("lightbulb")} Skills to strengthen</span><p><em>LLM product design</em><em>Prompt evaluation</em></p></div>
              <div class="mini"><span>Interview difficulty</span><strong>Medium</strong><small>3 rounds - case study</small></div>
              <div class="mini"><span>Success odds after roadmap</span><strong>76%</strong><small>if you finish Grow plan</small></div>
              <div class="mini"><span>Applicant strength</span><strong>Top 22%</strong><small>vs. this role</small></div>
              <div class="mini"><span>Company hiring trend</span><strong>+18%</strong><small>PM headcount, 6 mo</small></div>
            </aside>
          </article>
        </section>

        <section class="cg-discover-section">
          <div class="cg-section-kicker">Market pulse - Malaysia</div>
          <h2>Market Pulse in Malaysia</h2>
          <div class="cg-market-grid">
            ${marketPulse.map(([tag, trend, title, salary, remote, openings, tone], index) => `
              <article class="cg-market-card tone-${tone}">
                <div><span>${icon("zap")} ${tag}</span><small>${icon("trending-up")} ${trend}</small></div>
                <h3>${title}</h3><a href="vera.html?topic=${encodeURIComponent(title)}" aria-label="Explore ${title}">${icon("arrow-up-right")}</a>
                <div class="cg-bars">${Array.from({ length: 12 }, (_, i) => { const step = (i + index) % 8; return `<i style="height:${14 + step * 5}px;background:${barRamp[tone][step]}"></i>`; }).join("")}</div>
                <dl><dt>Avg. salary (MY)</dt><dd>${salary}</dd><dt>Remote share</dt><dd>${remote}</dd><dt>Openings</dt><dd>${openings}</dd></dl>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section">
          <h2>Curated Collections by Vera.</h2>
          <div class="cg-collection-grid">
            ${collections.map(([count, title, copy, why, size]) => `
              <article class="cg-collection-card ${size}"><span>${count}</span><i>${icon("arrow-up-right")}</i><h3>${title}</h3><p>${copy}</p><footer><b>${icon("sparkles")} Why this</b> ${why}</footer></article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section">
          <div class="cg-discover-section-head">
            <div><h2>Featured Companies</h2></div>
            <a class="cg-discover-link-btn" href="companies.html#companies">Explore 1,240 companies ${icon("arrow-right")}</a>
          </div>
          <div class="cg-featured-org-grid">
            ${featuredCompanies.map(([name, sub, tag, roles, why]) => `
              <article class="cg-featured-org-card">
                <header><span>${name.charAt(0)}</span><div><h3>${name}</h3><p>${sub}</p></div></header>
                <b>${tag}</b><strong>${roles}</strong>
                <footer>${icon("sparkles")} ${why}</footer>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section">
          <div class="cg-discover-section-head">
            <div><h2>Featured Universities</h2></div>
            <a class="cg-discover-link-btn" href="companies.html#universities">Browse all universities ${icon("arrow-right")}</a>
          </div>
          <div class="cg-featured-org-grid">
            ${universities.map(([name, sub, tag, why]) => `
              <article class="cg-featured-org-card university">
                <header><span>${icon("graduation-cap")}</span><div><h3>${name}</h3><p>${icon("map-pin")} ${sub}</p></div></header>
                <b>${tag}</b>
                <footer>${icon("sparkles")} ${why}</footer>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section">
          <div class="cg-discover-section-head">
            <div><div class="cg-section-kicker">Where your career could go next</div><h2>Career Paths</h2></div>
            <a class="cg-discover-link-btn" href="vera.html?topic=career paths">Explore all career paths ${icon("arrow-right")}</a>
          </div>
          <div class="cg-direction-grid">
            ${roleDirections.map(([title, sub, match, salary, demand, why]) => `
              <article class="cg-direction-card">
                <span>${match}</span>
                <h3>${title}</h3>
                <p>${sub}</p>
                <dl><dt>Estimated salary</dt><dd>${salary}<small>MY - median</small></dd><dt>Market demand</dt><dd>${demand}<small>last 30 days</small></dd></dl>
                <footer>${icon("sparkles")} Why - ${why}</footer>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-discover-section">
          <div class="cg-discover-section-head">
            <div><div class="cg-section-kicker">Programmes that could accelerate you</div><h2>Recommended Programmes</h2></div>
            <a class="cg-discover-link-btn" href="vera.html?topic=programmes">Explore all programmes ${icon("arrow-right")}</a>
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

        <section class="cg-discover-section">
          <div class="cg-discover-section-head">
            <div><div class="cg-section-kicker">Who inspires this path</div><h2>Mentors You can reach out to</h2></div>
            <a class="cg-discover-link-btn" href="posts.html#messages">Browse all mentors ${icon("arrow-right")}</a>
          </div>
          <div class="cg-mentor-grid">
            ${mentors.map(([name, years, path, why, overlap]) => `
              <article class="cg-mentor-card"><header><span>${name.charAt(0)}</span><div><h3>${name}</h3><p>${years}</p></div></header><strong>${path}</strong><p>${icon("sparkles")} ${why}</p><footer><small>${icon("lightbulb")} ${overlap}</small><a href="vera.html?topic=${encodeURIComponent(`Show me a path like ${name}`)}">See path -></a></footer></article>
            `).join("")}
          </div>
        </section>
      </section>
    `;
    createIcons();
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
          <form class="cg-discover-search" action="vera.html">
            ${icon("search")}
            <input name="topic" aria-label="Ask Vera about Discover" placeholder="Try 'PM roles in KL paying above RM10k' or 'remote design-led startups hiring in Malaysia'">
            <button type="button">${icon("sliders-horizontal")} Filters</button>
            <button type="submit">${icon("sparkles")} Ask Vera</button>
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
              <p class="cg-salary"><span>Estimated annual salary (Malaysia)</span> RM 140,000 - RM 168,000 <small>/ year</small></p>
              <div class="cg-why-card">
                <span>${icon("sparkles")} Why Vera recommends this</span>
                <p>${icon("check-circle-2")} You completed SQL for PM this month.</p>
                <p>${icon("check-circle-2")} Your roadmap targets AI Product Management.</p>
                <p>${icon("check-circle-2")} You saved 3 AI-native startups recently.</p>
              </div>
              <div class="cg-action-row">
                <a class="btn btn-primary" href="discover.html?job=${topPick.id}">Explore role ${icon("arrow-up-right")}</a>
                <button class="btn btn-ghost" type="button">${icon("bookmark")} Save</button>
                <a class="btn btn-ghost" href="vera.html?topic=Tell me more about this role">Ask Vera more</a>
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
              <article class="cg-mentor-card"><header><span>${name.charAt(0)}</span><div><h3>${name}</h3><p>${years}</p></div></header><strong>${path}</strong><p>${icon("sparkles")} ${why}</p><footer><small>${icon("lightbulb")} ${overlap}</small><a href="vera.html?topic=${encodeURIComponent(`Show me a path like ${name}`)}">See path -></a></footer></article>
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
                <a class="btn btn-cyan btn-wide" href="vera.html?topic=job search">${icon("sparkles")} Ask Vera</a>
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
            <a class="btn btn-cyan" href="vera.html?topic=${encodeURIComponent(active.title)}">${icon("message-circle")} Ask Vera</a>
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
      next.notifications = [
        {
          id: `n-contact-${active.id}-${Date.now()}`,
          title: "Job inquiry prepared",
          body: `${topic} question for ${active.title} at ${active.company} was added to your follow-up queue.`,
          icon: "messages-square"
        },
        ...(next.notifications || [])
      ].slice(0, 5);
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

function renderDirectoryPage(kind) {
  const root = qs("[data-directory-page]");
  if (!root) return;
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

  const extraCompanies = [
    { id: "shell", name: "Shell", industry: "Energy", location: "Kuala Lumpur", rating: 4.4, reviews: 612, open: 10, signal: "Structured graduate rotations", tags: ["Verified", "Graduates' Choice", "Hiring at scale"], summary: "Global energy employer with commercial rotations, digital product work, and established graduate pathways.", salary: "RM 5k - 14k / month", size: "10,000+ employees", type: "Company" },
    { id: "setel", name: "Setel", industry: "Fintech", location: "Kuala Lumpur", rating: 4.3, reviews: 288, open: 4, signal: "AI-native product squad", tags: ["Verified", "Fast responders", "Product"], summary: "Fintech product team close to PETRONAS Digital, useful for PMs who want payments and mobility products.", salary: "RM 9k - 14k / month", size: "250+ employees", type: "Company" },
    { id: "carsome", name: "Carsome", industry: "Marketplace", location: "Kuala Lumpur", rating: 4.2, reviews: 356, open: 3, signal: "Regional marketplace scale", tags: ["Fast growing", "Hybrid", "Product"], summary: "Regional marketplace company with operations, analytics, product growth, and customer platform roles.", salary: "RM 10k - 15k / month", size: "1,000+ employees", type: "Company" },
    { id: "storehub", name: "StoreHub", industry: "SaaS", location: "Kuala Lumpur", rating: 4.2, reviews: 204, open: 2, signal: "Remote-first craft culture", tags: ["Remote-first", "SaaS", "Async"], summary: "Craft-led SaaS company with strong SMB product problems and close user feedback loops.", salary: "RM 8k - 12k / month", size: "300+ employees", type: "Company" },
    { id: "aerodyne", name: "Aerodyne", industry: "AI", location: "Kuala Lumpur", rating: 4.1, reviews: 172, open: 5, signal: "Drone and AI platform work", tags: ["AI", "Global HQ", "Product"], summary: "Malaysia-born AI and drone company with global operations, data-heavy products, and technical PM paths.", salary: "RM 11k - 16k / month", size: "800+ employees", type: "Company" }
  ];
  const extraUniversities = [
    { id: "sunway", name: "Sunway University", industry: "Private University", location: "Selangor", rating: 4.4, reviews: 438, open: 18, signal: "Fintech partnerships", tags: ["91% employment", "Industry links", "Business"], summary: "Private university with strong employer links, business programmes, and a growing tech ecosystem.", salary: "91% employed in 6 months", size: "18,000 students", type: "University" },
    { id: "asb", name: "Asia School of Business", industry: "Business School", location: "Kuala Lumpur", rating: 4.5, reviews: 196, open: 9, signal: "MIT-linked executive education", tags: ["MIT-linked", "Exec Ed", "Leadership"], summary: "Business school focused on leadership, analytics, and regional management programmes.", salary: "88% employed in 6 months", size: "1,200 learners", type: "University" },
    { id: "apu-malaysia", name: "APU Malaysia", industry: "Private University", location: "Kuala Lumpur", rating: 4.1, reviews: 318, open: 14, signal: "AI programme partners", tags: ["Technology", "AI", "Employability"], summary: "Technology-focused university with computing, AI, and business IT pathways.", salary: "80% employed in 6 months", size: "13,000 students", type: "University" },
    { id: "iim-bangalore", name: "IIM Bangalore", industry: "Business School", location: "Online", rating: 4.6, reviews: 524, open: 7, signal: "Product leadership alumni", tags: ["Online", "Leadership", "Product"], summary: "Executive programmes and alumni networks useful for product, strategy, and leadership transitions.", salary: "Global alumni network", size: "Executive cohorts", type: "University" }
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
  let activeKind = (location.hash || "").replace("#", "") || (kind === "universities" ? "universities" : "companies");
  if (!["companies", "universities"].includes(activeKind)) activeKind = "companies";
  const title = "Career places worth knowing.";
  const copy = "Browse verified companies and universities in one place. Use categories and filters to compare employer signals, graduate outcomes, locations, programmes, and career fit.";
  const pageMarkup = `
    <section class="cg-directory-browser cg-directory-unified" data-cg-directory-browser>
      <header class="cg-directory-hero">
        <span class="cg-overline">Browse career places</span>
        <h1>${title}</h1>
        <p>${copy}</p>
      </header>
      <nav class="cg-directory-tabs" aria-label="Directory category">
        <button type="button" data-directory-kind="companies">${icon("building-2")} Companies</button>
        <button type="button" data-directory-kind="universities">${icon("graduation-cap")} Universities</button>
      </nav>
      <section class="cg-directory-controls" aria-label="Directory filters">
        <label class="cg-directory-search">${icon("search")}<input data-directory-search placeholder="Search companies, universities, programmes, locations..."></label>
        <select data-directory-sort aria-label="Sort directory">
          <option value="top">Top rated</option>
          <option value="open">Most openings / programmes</option>
          <option value="reviews">Most signals</option>
        </select>
        <select data-directory-filter="industry" aria-label="Filter sector"><option value="">All sectors</option></select>
        <select data-directory-filter="location" aria-label="Filter location"><option value="">All locations</option></select>
        <select data-directory-filter="rating" aria-label="Filter rating">
          <option value="">Any rating</option><option value="4.5">4.5+</option><option value="4.3">4.3+</option><option value="4.1">4.1+</option>
        </select>
        <select data-directory-filter="programme" aria-label="Filter signal"><option value="">All signals</option></select>
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
  const kindButtons = qsa("[data-directory-kind]", root);
  const countNode = qs("[data-directory-count]", root);
  const modeNode = qs("[data-directory-mode]", root);
  const grid = qs("[data-directory-grid]", root);
  const params = new URLSearchParams(location.search);
  if (searchInput) searchInput.value = params.get("q") || "";

  function initials(name) {
    return String(name || "CG").split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
  }

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
                ${(org.tags || []).slice(0, 4).map(tag => `<b>${tag}</b>`).join("")}
                <b>${org.type === "University" ? org.salary : `${org.open} open roles`}</b>
              </div>
            </section>
            <p>${org.summary}</p>
            <footer>
              <button type="button" data-directory-save="${org.id}">${icon(isSaved ? "bookmark-check" : "bookmark")} ${isSaved ? "Saved" : "Save"}</button>
              <a href="vera.html?topic=${encodeURIComponent(`${org.name} ${org.type.toLowerCase()} research`)}">${icon("sparkles")} Ask Vera</a>
            </footer>
          </div>
        </article>
      `;
    }).join("") || `<article class="cg-directory-empty"><h2>No matches yet.</h2><p>Try clearing a filter or searching a broader term.</p></article>`;
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

let dashboardTaskFilter = "";

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
    ["Career worth", "RM142k", 62, "+RM8.4k this quarter", "wallet"],
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
  const applicationCards = (trackedJobs.length
    ? trackedJobs.slice(0, 2)
    : topJobs.slice(0, 2).map(job => ({ job, record: createApplicationRecord(job.id, "saved") })));
  const longArcCards = [
    ["Career Simulation", "See where your career could be in 5 years", "compass", "grow.html"],
    ["Fair Pay", "Your market value increased 6% this month", "chart-line", "market.html"],
    ["Career Planning", "Continue your 3-year roadmap", "target", "market.html#roadmap"],
    ["Company Research", `${savedOrgs.length || 12} new insights on companies you follow`, "building-2", "companies.html"]
  ];
  root.innerHTML = appShell("dashboard", `
    <section class="cg-dashboard" data-tour-target="dashboard-hero">
      <header class="cg-dash-hero">
        <div>
          <div class="cg-overline">${icon("calendar-days")} Today - Week 7 of your ${target} transition</div>
          <h1>Good morning, ${getFirstName(state)}.</h1>
          <p>You are making steady progress - ahead of 72% of candidates on the same path.</p>
        </div>
        <span class="cg-vera-status"><i></i> Vera is online - learning your patterns</span>
      </header>

      <section class="cg-kpi-grid" data-tour-target="metrics">
        ${kpis.map(([label, value, progress, detail, ic], index) => `
          <a class="cg-kpi-card tone-${index + 1}" href="${index === 3 ? "discover.html#tracker" : index === 1 ? "market.html" : "grow.html"}">
            <span class="cg-card-icon">${icon(ic)}</span>
            <span class="cg-kpi-label">${label}</span>
            <strong>${value}</strong>
            <small>${detail}</small>
            ${index === 3 ? `<span class="cg-mini-bars"><i></i><i></i><i></i></span>` : progressBar(progress)}
          </a>
        `).join("")}
      </section>

      <section class="cg-focus-grid">
        <article class="cg-focus-card" data-tour-target="vera">
          <div class="cg-focus-meta">
            <span>${icon("sparkles")} Today's focus - by Vera</span>
            <span>${icon("clock")} 45 min - Deep work</span>
          </div>
          <h2>Hi, I'm Vera, your AI career coach.</h2>
          <p>${focusDetail}</p>
          <div class="cg-action-row">
            <a class="btn btn-primary" href="vera.html#plan">Start with Vera ${icon("arrow-up-right")}</a>
            <a class="btn btn-ghost" href="grow.html">Snooze</a>
            <span class="cg-confidence">${icon("gauge")} Confidence: ${intel.confidence}</span>
          </div>
        </article>
        <article class="cg-autopilot-card">
          <div class="cg-section-line">
            <div>
              <span class="cg-overline">${icon("bot")} Autopilot</span>
              <h2>Vera worked while you slept.</h2>
            </div>
            <span class="cg-pill">High confidence</span>
          </div>
          <div class="cg-activity-list">
            ${[
              ["search", "Scanned 128 new jobs across your target companies", "03:12"],
              ["check-circle-2", `Saved ${savedJobs.length || 6} that match your roadmap`, "03:41"],
              ["send", "Drafted 2 outreach notes to hiring managers", "05:04"],
              ["badge-dollar-sign", "Refreshed your Fair Pay benchmark (+6%)", "05:22"]
            ].map(([ic, text, time]) => `<div class="cg-activity-item"><span>${icon(ic)}</span><p>${text}</p><time>${time}</time></div>`).join("")}
          </div>
          <div class="cg-action-row compact-actions">
            <a class="btn btn-primary" href="autopilot.html">Review 8 items ${icon("chevron-right")}</a>
            <a class="btn btn-ghost" href="vera.html">Tune</a>
          </div>
        </article>
      </section>

      <section class="cg-applications" data-tour-target="applications">
        <div class="cg-section-line">
          <div>
            <h2>Recent Applications</h2>
          </div>
          <a href="discover.html#tracker">Open Pipeline ${icon("chevron-right")}</a>
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
                <a class="btn btn-primary" href="discover.html?job=${job.id}#tracker">Continue ${icon("arrow-up-right")}</a>
                <a class="btn btn-ghost" href="discover.html?job=${job.id}">Details</a>
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
          </div>
          <span class="cg-streak">${icon("flame")} Streak - 12 days</span>
        </div>
        <div class="cg-task-filters">
          ${taskCategories.map(cat => `<button type="button" class="pill ${dashboardTaskFilter === cat ? "active" : ""}" data-task-filter="${cat}">${cat}</button>`).join("")}
        </div>
        <div class="cg-task-grid">
          ${visibleTasks.map(task => {
            const mission = task.mission || visibleBeginnerMissions[task.originalIndex % Math.max(1, visibleBeginnerMissions.length)];
            const progress = mission ? (state.missionProgress[mission.id] || 0) : 0;
            const done = progress >= 100;
            return `
              <article class="cg-task-card ${done ? "complete" : ""}" data-mission-card="${mission?.id || ""}">
                <span class="cg-check"></span>
                <div>
                  <div class="cg-task-meta"><span>${task.meta}</span></div>
                  <h3>${task.title}</h3>
                  <p>${icon("sparkles")} ${task.body}</p>
                  ${progressBar(done ? 100 : task.progress)}
                </div>
                ${mission ? `<button class="btn btn-ghost" type="button" data-complete-mission="${mission.id}">${done ? "Done" : "Start"} ${icon("arrow-up-right")}</button>` : `<a class="btn btn-ghost" href="vera.html#plan">Start ${icon("arrow-up-right")}</a>`}
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
          </div>
          <a href="discover.html">See all ${DATA.jobs.length} ${icon("chevron-right")}</a>
        </div>
        <div class="cg-role-grid">
          ${topJobs.map(job => `
            <article class="cg-role-card">
              <div class="cg-job-head">
                <span class="cg-company-mark">${job.company.charAt(0)}</span>
                <div><small>${job.company}</small><h3>${job.title}</h3></div>
                <span class="cg-match"><strong>${job.match}</strong><small>Match</small></span>
              </div>
              <p class="cg-role-meta">${icon("badge-dollar-sign")} ${job.salary} ${icon("map-pin")} ${job.location} <span>${job.type}</span></p>
              <ul>
                ${job.why.slice(0, 3).map(reason => `<li>${reason}</li>`).join("")}
              </ul>
              <div class="cg-action-row">
                <a class="btn btn-primary" href="discover.html?job=${job.id}">Quick apply</a>
                <a class="btn btn-ghost" href="discover.html?job=${job.id}">Save</a>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="cg-long-arc" data-tour-target="intelligence">
        <div>
          <span class="cg-overline">For the long arc</span>
          <h2>Long-term growth</h2>
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

      <a class="cg-ask-vera" href="vera.html">${icon("message-circle")} Ask Vera</a>
    </section>
  `);
  createIcons();
  bindMissionActions();
  qsa("[data-task-filter]", root).forEach(btn => btn.addEventListener("click", () => {
    dashboardTaskFilter = dashboardTaskFilter === btn.dataset.taskFilter ? "" : btn.dataset.taskFilter;
    renderDashboard();
  }));
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
    if (target) target.innerHTML = readState().chat.map(msg => {
      const isVera = msg.from === "vera";
      return `
        <div class="message ${isVera ? "vera" : "user"}">
          <span class="message-avatar">${icon(isVera ? "sparkles" : "user-round")}</span>
          <div class="message-bubble">
            <strong>${isVera ? "Vera" : getFirstName(readState())}</strong>
            <p>${msg.text}</p>
          </div>
        </div>
      `;
    }).join("");
    if (target) target.scrollTop = target.scrollHeight;
    createIcons();
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
      const coach = readState().interviewCoach || {};
      const targetRole = coach.role || DATA.jobs.find(job => state.applications.includes(job.id))?.title || DATA.jobs[0]?.title || getTargetLabel(state.profile);
      const typeOptions = ["Behavioral", "Case Study", "Portfolio Review", "Technical"];
      const focusOptions = ["Leadership", "Design Process", "Stakeholder Management", "Metrics", "Career Switch"];
      const questionBank = {
        "Behavioral|Leadership": `Tell me about a time you had to lead without authority while moving a ${targetRole} project forward.`,
        "Behavioral|Stakeholder Management": `Describe a moment when stakeholders disagreed with your recommendation. How did you align them and what changed?`,
        "Case Study|Design Process": `Walk me through how you would diagnose and improve a confusing onboarding journey for a product with falling activation.`,
        "Case Study|Metrics": `A feature shipped but engagement dropped after launch. How would you investigate the problem and decide the next move?`,
        "Portfolio Review|Design Process": `Choose one project from your portfolio and explain the constraints, trade-offs, impact, and what you would improve now.`,
        "Technical|Metrics": `How would you define success metrics for a product experiment, and how would you avoid misleading conclusions?`,
        "Behavioral|Career Switch": `Explain your career switch story in a way that makes your transferable skills feel like an advantage, not a risk.`
      };
      const question = questionBank[`${coach.type}|${coach.focus}`] || `For a ${targetRole} interview, tell me about a project where you handled ambiguity, made a trade-off, and created measurable impact.`;
      const feedback = coach.feedback;
      const avgScore = coach.sessions?.length
        ? Math.round(coach.sessions.reduce((sum, item) => sum + item.score, 0) / coach.sessions.length)
        : 0;
      return `
        <section class="glass-card interview-coach">
          <div class="section-head">
            <div><div class="section-kicker">Interview coach</div><h2 class="section-title mini">Practice with structured feedback.</h2><p class="section-sub">Vera scores your answer for structure, specificity, relevance, and confidence signals.</p></div>
            <span class="pill green">${coach.started ? "Live session" : "Setup"}</span>
          </div>
          <div class="interview-control-grid">
            <div class="tool-card interview-setup-card">
              <h3>Practice setup</h3>
              <label>Preparing for <input data-interview-role value="${targetRole}" placeholder="Role or company interview"></label>
              <div class="chat-presets-label">Interview type</div>
              <div class="pill-row">${typeOptions.map(type => `<button class="pill ${coach.type === type ? "cyan active" : ""}" type="button" data-interview-type="${type}">${type}</button>`).join("")}</div>
              <div class="chat-presets-label">Focus area</div>
              <div class="pill-row">${focusOptions.map(focus => `<button class="pill ${coach.focus === focus ? "gold active" : ""}" type="button" data-interview-focus="${focus}">${focus}</button>`).join("")}</div>
              <div class="hero-actions compact-actions">
                <button class="btn btn-primary" type="button" data-interview-start>${icon("play")} ${coach.started ? "Regenerate question" : "Start practice"}</button>
                <button class="btn btn-ghost" type="button" data-interview-reset>${icon("rotate-ccw")} Reset</button>
              </div>
            </div>
            <div class="tool-card interview-stats-card">
              <h3>Session tracker</h3>
              <div class="score-grid compact">
                <div class="score-tile"><span>Sessions</span><strong>${coach.sessions?.length || 0}</strong></div>
                <div class="score-tile"><span>Avg score</span><strong>${avgScore || "--"}${avgScore ? "%" : ""}</strong></div>
                <div class="score-tile"><span>Type</span><strong>${coach.type}</strong></div>
                <div class="score-tile"><span>Focus</span><strong>${coach.focus}</strong></div>
              </div>
              <div class="interview-history">${(coach.sessions || []).slice(-5).map((item, index) => `<span style="height:${Math.max(18, item.score)}%"><em>${item.score}</em></span>`).join("") || `<p class="muted small">No scored answers yet. Start one practice round.</p>`}</div>
            </div>
          </div>
          <div class="interview-practice-grid">
            <div class="tool-card interview-question-card">
              <div class="list-card-top"><h3>Question</h3><span class="pill cyan">${coach.type}</span></div>
              <p>${coach.started ? question : "Choose a setup, then start practice to generate a role-specific question."}</p>
              ${pills([targetRole, coach.focus, "Vera feedback"], "cyan")}
            </div>
            <form class="tool-card interview-answer-card" data-interview-form>
              <h3>Your answer</h3>
              <textarea class="input-area" name="answer" placeholder="Type your STAR answer with context, action, trade-off, and result..." ${coach.started ? "" : "disabled"}>${coach.answer || ""}</textarea>
              <div class="hero-actions compact-actions">
                <button class="btn btn-primary" type="submit" ${coach.started ? "" : "disabled"}>${icon("scan-text")} Get feedback</button>
                <button class="btn btn-ghost" type="button" data-interview-fill ${coach.started ? "" : "disabled"}>${icon("wand-sparkles")} Use sample structure</button>
              </div>
            </form>
          </div>
          <div class="detail-section" data-interview-feedback>
            ${feedback ? `
              <div class="score-grid">
                ${feedback.dimensions.map(item => `<div class="score-tile"><span>${item.label}</span><strong>${item.value}%</strong></div>`).join("")}
              </div>
              <div class="interview-feedback-grid">
                <div class="vera-box detail-section"><h3>Vera feedback</h3><p class="muted">${feedback.summary}</p><ul class="interview-note-list">${feedback.notes.map(note => `<li>${note}</li>`).join("")}</ul></div>
                <div class="vera-box detail-section"><h3>Model structure</h3><p class="muted">${feedback.model}</p></div>
              </div>
            ` : ""}
          </div>
        </section>
      `;
    }
    if (activeTab === "chat") {
      const chatPresets = [
        "Build me a 7-day job search plan",
        "What should I do about my active application?",
        "Which skill gap should I close first?",
        "Compare my saved roles by career impact"
      ];
      const draftAnswers = [
        "I want to switch into Product Analyst. What should I do first?",
        "Help me prepare for a case-study interview this week.",
        "Review my next application strategy before I apply."
      ];
      const savedCount = state.savedJobs.length;
      const appliedCount = state.applications.length;
      return `
        <section class="chat-window glass-card">
          <div class="detail-head"><div><h2>Career session</h2><div class="muted">Vera uses your jobs, reviews, profile, market, and goals as context.</div></div><span class="pill green">Online</span></div>
          <div class="career-session-grid">
            <div class="message-list" data-message-list></div>
            <aside class="chat-context-panel">
              <div>
                <div class="section-kicker">Session context</div>
                <h3>Vera is reading your current journey.</h3>
                <p class="muted small">${state.profile.careerStage || "Career planning"} - ${getTargetLabel(state.profile)} - ${savedCount} saved role${savedCount === 1 ? "" : "s"} - ${appliedCount} active application${appliedCount === 1 ? "" : "s"}.</p>
              </div>
              <div class="chat-insight-list">
                ${[
                  ["Best next move", state.profile.intelligence.immediateActions[0] || "Choose one target role and build proof around it."],
                  ["Application focus", appliedCount ? "Follow up, prepare role evidence, and practice interview stories." : "Save or apply to one high-fit role so Vera can track momentum."],
                  ["Research habit", "Compare culture, growth, salary signal, and watchouts before committing."]
                ].map(([title, body]) => `<div class="chat-insight"><strong>${title}</strong><span>${body}</span></div>`).join("")}
              </div>
            </aside>
          </div>
          <div class="chat-presets">
            <div class="chat-presets-label">Quick prompts</div>
            <div class="pill-row">${chatPresets.map(text => `<button class="pill cyan" type="button" data-chat-preset="${text}">${text}</button>`).join("")}</div>
            <div class="chat-presets-label">Draft into chat box</div>
            <div class="pill-row">${draftAnswers.map(text => `<button class="pill gold" type="button" data-chat-fill="${text}">${text}</button>`).join("")}</div>
          </div>
          <form class="chat-input" data-chat-form>
            <div class="chat-composer-field"><textarea name="message" rows="1" placeholder="Ask Vera what to do next..."></textarea></div>
            <button class="btn btn-primary" type="submit">${icon("send")} Send</button>
          </form>
        </section>
      `;
    }
    const planProgress = readState().planProgress || {};
    const planPhases = [
      {
        id: "baseline",
        title: "Days 1-30",
        theme: "Baseline and target clarity",
        body: "Set your profile baseline, choose one target path, and build a clean evidence map.",
        outcome: "A focused target role, ATS baseline, and one clear proof gap.",
        tasks: [
          ["baseline-profile", "Update Career Intelligence profile and resume baseline", "edit-career-data.html"],
          ["baseline-target", `Choose one target path: ${getTargetLabel(state.profile)}`, "discover.html"],
          ["baseline-research", "Compare 3 companies or universities before applying", "companies.html"]
        ]
      },
      {
        id: "proof",
        title: "Days 31-60",
        theme: "Proof-building sprint",
        body: "Close your top two gaps with visible proof: one strategy artifact and one metrics story.",
        outcome: "A portfolio-ready project story that proves judgment, impact, and trade-offs.",
        tasks: [
          ["proof-strategy", "Write one product strategy memo from a past project", "grow.html"],
          ["proof-metrics", "Add before/after metrics to one case study", "grow.html"],
          ["proof-skill", "Complete one high-value skill sprint from Vera's roadmap", "vera.html#skills"]
        ]
      },
      {
        id: "apply",
        title: "Days 61-90",
        theme: "Apply, interview, decide",
        body: "Apply selectively, practice high-signal interview stories, and use research before accepting.",
        outcome: "Five high-fit applications, stronger interview stories, and a decision framework.",
        tasks: [
          ["apply-roles", "Apply to 5 roles above your match threshold", "discover.html"],
          ["apply-interview", "Practice 3 interview answers with Vera feedback", "vera.html#interview"],
          ["apply-decision", "Compare offers or shortlists using growth, pay, and culture", "companies.html"]
        ]
      }
    ];
    const allPlanTasks = planPhases.flatMap(phase => phase.tasks);
    const completedPlanTasks = allPlanTasks.filter(([id]) => planProgress[id]).length;
    const planPercent = Math.round((completedPlanTasks / allPlanTasks.length) * 100);
    const nextTask = allPlanTasks.find(([id]) => !planProgress[id]);
    return `
      <section class="glass-card vera-plan">
        <div class="section-head">
          <div>
            <div class="section-kicker">90-day plan</div>
            <h2 class="section-title mini">A mentor-led path from day one.</h2>
            <p class="section-sub">Personalized around ${state.profile.careerStage || "your current stage"}, ${getTargetLabel(state.profile)}, and your saved application signals.</p>
          </div>
          <button class="btn btn-primary" data-plan>${icon("sparkles")} Regenerate plan</button>
        </div>
        <div class="plan-summary-grid">
          <article class="plan-summary-card"><span>Progress</span><strong>${planPercent}%</strong>${progressBar(planPercent)}</article>
          <article class="plan-summary-card"><span>Target</span><strong>${getTargetLabel(state.profile)}</strong><p class="muted small">${state.profile.preferences.workMode || "Hybrid"} work - ${state.profile.preferences.ambitionLevel || "steady growth"}</p></article>
          <article class="plan-summary-card"><span>Next action</span><strong>${nextTask ? nextTask[1] : "Plan complete"}</strong><p class="muted small">${completedPlanTasks}/${allPlanTasks.length} tasks done</p></article>
        </div>
        <div class="plan-phase-grid">
          ${planPhases.map(phase => {
            const done = phase.tasks.filter(([id]) => planProgress[id]).length;
            const percent = Math.round((done / phase.tasks.length) * 100);
            return `
              <article class="timeline-item plan-phase-card">
                <div class="list-card-top">
                  <div><h3>${phase.title}</h3><span class="muted small">${phase.theme}</span></div>
                  <span class="pill ${percent === 100 ? "green" : "cyan"}">${done}/${phase.tasks.length}</span>
                </div>
                <p class="muted">${phase.body}</p>
                ${progressBar(percent)}
                <div class="plan-task-list">
                  ${phase.tasks.map(([id, label, href]) => `
                    <div class="plan-task ${planProgress[id] ? "complete" : ""}">
                      <button type="button" class="plan-task-check" data-plan-task="${id}" aria-label="${planProgress[id] ? "Mark incomplete" : "Mark complete"}">${icon(planProgress[id] ? "check" : "circle")}</button>
                      <span>${label}</span>
                      <a href="${href}" aria-label="Open related page">${icon("arrow-up-right")}</a>
                    </div>
                  `).join("")}
                </div>
                <div class="plan-outcome"><strong>Outcome</strong><span>${phase.outcome}</span></div>
              </article>
            `;
          }).join("")}
        </div>
        <div class="plan-command-row">
          <button class="btn btn-cyan" type="button" data-plan-jump="chat">${icon("message-circle")} Ask Vera about this plan</button>
          <button class="btn btn-ghost" type="button" data-plan-jump="skills">${icon("list-checks")} Open skill roadmap</button>
          <button class="btn btn-ghost" type="button" data-plan-jump="interview">${icon("messages-square")} Practice interview</button>
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
    qsa("[data-chat-preset]").forEach(btn => btn.addEventListener("click", () => sendVera(btn.dataset.chatPreset)));
    qsa("[data-chat-fill]").forEach(btn => btn.addEventListener("click", () => {
      const input = qs("[data-chat-form] [name='message']");
      if (!input) return;
      input.value = btn.dataset.chatFill || "";
      input.focus();
    }));
    qs("[data-chat-form] textarea[name='message']")?.addEventListener("input", event => {
      const input = event.currentTarget;
      input.style.height = "auto";
      input.style.height = `${Math.min(input.scrollHeight, 132)}px`;
    });
    qs("[data-chat-form] textarea[name='message']")?.addEventListener("keydown", event => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        event.currentTarget.form.requestSubmit();
      }
    });
    qs("[data-plan]")?.addEventListener("click", () => {
      const next = readState();
      next.planProgress = {};
      next.chat = [
        ...next.chat,
        { from: "vera", text: "I regenerated your 90-day plan. Start with the first incomplete task, then use each phase outcome as your proof checklist." }
      ];
      writeState(next);
      showToast("Vera regenerated your 90-day plan.");
      renderVera();
    });
    qsa("[data-plan-task]").forEach(btn => btn.addEventListener("click", () => {
      const taskId = btn.dataset.planTask;
      const next = readState();
      next.planProgress = { ...(next.planProgress || {}), [taskId]: !next.planProgress?.[taskId] };
      writeState(next);
      showToast(next.planProgress[taskId] ? "Plan task marked complete." : "Plan task reopened.");
      renderVera();
    }));
    qsa("[data-plan-jump]").forEach(btn => btn.addEventListener("click", () => {
      activeTab = btn.dataset.planJump;
      location.hash = activeTab;
      if (activeTab === "chat") sendVera("Help me work through my 90-day plan");
      else renderVera();
    }));
    qs("[data-interview-role]")?.addEventListener("change", event => {
      const next = readState();
      next.interviewCoach = { ...(next.interviewCoach || {}), role: event.currentTarget.value.trim() };
      writeState(next);
    });
    qsa("[data-interview-type]").forEach(btn => btn.addEventListener("click", () => {
      const next = readState();
      next.interviewCoach = { ...(next.interviewCoach || {}), type: btn.dataset.interviewType, started: false, feedback: null };
      writeState(next);
      renderVera();
    }));
    qsa("[data-interview-focus]").forEach(btn => btn.addEventListener("click", () => {
      const next = readState();
      next.interviewCoach = { ...(next.interviewCoach || {}), focus: btn.dataset.interviewFocus, started: false, feedback: null };
      writeState(next);
      renderVera();
    }));
    qs("[data-interview-start]")?.addEventListener("click", () => {
      const next = readState();
      const role = qs("[data-interview-role]")?.value.trim();
      next.interviewCoach = { ...(next.interviewCoach || {}), role, started: true, answer: "", feedback: null };
      writeState(next);
      showToast("Interview question generated.");
      renderVera();
    });
    qs("[data-interview-reset]")?.addEventListener("click", () => {
      const next = readState();
      next.interviewCoach = { role: "", type: "Behavioral", focus: "Leadership", started: false, answer: "", feedback: null, sessions: next.interviewCoach?.sessions || [] };
      writeState(next);
      showToast("Interview setup reset.");
      renderVera();
    });
    qs("[data-interview-fill]")?.addEventListener("click", () => {
      const input = qs("[data-interview-form] textarea[name='answer']");
      if (!input) return;
      input.value = "Situation: The project had unclear goals and competing stakeholder priorities. Task: I needed to align the team around one measurable outcome. Action: I mapped the user journey, compared two solution paths, explained the trade-off, and tested the preferred direction. Result: We improved the target metric and I documented what I would do differently next time.";
      input.focus();
    });
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
      if (!answer) return;
      const hasMetric = /\d|%|rm|kpi|metric|increase|decrease|improve|reduced|growth/i.test(answer);
      const hasTradeoff = /trade[- ]?off|instead|chose|because|priorit/i.test(answer);
      const hasStructure = /situation|task|action|result|context|outcome/i.test(answer);
      const base = answer.length > 180 ? 76 : answer.length > 90 ? 66 : 56;
      const structure = Math.min(94, base + (hasStructure ? 12 : 0));
      const specificity = Math.min(92, base + (hasMetric ? 14 : 2));
      const relevance = Math.min(90, base + (hasTradeoff ? 12 : 4));
      const confidence = Math.min(93, Math.round((structure + specificity + relevance) / 3) + 3);
      const total = Math.round((structure + specificity + relevance + confidence) / 4);
      const next = readState();
      next.interviewCoach = {
        ...(next.interviewCoach || {}),
        answer,
        feedback: {
          score: total,
          dimensions: [
            { label: "Structure", value: structure },
            { label: "Specificity", value: specificity },
            { label: "Role relevance", value: relevance },
            { label: "Confidence", value: confidence }
          ],
          summary: total >= 82
            ? "Strong answer. Keep the structure, then make the final result even more concrete."
            : "Good start. Add clearer STAR structure, one measurable result, and one trade-off so the interviewer can see your judgment.",
          notes: [
            hasStructure ? "Your answer has a usable structure." : "Add a clearer Situation, Action, Result sequence.",
            hasMetric ? "You included measurable evidence." : "Add one number, signal, or before/after outcome.",
            hasTradeoff ? "The trade-off gives your answer stronger seniority." : "Name one option you rejected and why."
          ],
          model: "A stronger version: I started with the business problem, named the constraint, compared two paths, chose one based on user impact and delivery risk, measured the result, and closed with what I learned."
        },
        sessions: [...(next.interviewCoach?.sessions || []), { score: total, date: nowStamp() }].slice(-8)
      };
      writeState(next);
      showToast(`Interview feedback ready: ${total}%.`);
      renderVera();
    });
    createIcons();
  }
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

function renderAuth() {
  const root = qs("[data-auth]");
  if (!root) return;
  const mode = root.dataset.auth;
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
            <p class="auth-tip">${icon("info")} <span>Judges can press Log in with empty fields to open a personalized preview account.</span></p>
          `}
          <button class="btn btn-primary" type="submit">${icon("rocket")} ${mode === "register" ? "Create account" : "Log in"}</button>
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
    if (mode === "login") {
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
  qs("[data-enter-demo]", root)?.addEventListener("click", startDemoDashboard);
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

function renderGrow() {
  const root = qs("[data-grow]");
  if (!root) return;
  if (!requireAccount(root, "edit your Career Intelligence Profile")) return;
  const state = readState();
  const profile = state.profile;
  const intel = profile.intelligence || generateCareerIntelligence(profile);
  const growthStats = [
    ["Interview readiness", "74%", "6"],
    ["Skill percentile", "Top 31%", "11"],
    ["Matching jobs", "153", "35"],
    ["Estimated pay", "RM 8,900", "RM 1,100"]
  ];
  const skillGraph = [
    ["Product strategy", "Strong", "Near target - one artifact away from proof.", "Top 30%", 78, "strong"],
    ["Data fluency", "Needs work", "Closing this unlocks 40+ PM roles in KL.", "Largest hiring blocker", 58, "needs"],
    ["Written communication", "Strong", "Ship one public essay to lock it in.", "Top 18%", 86, "strong"],
    ["Technical depth", "Growing", "2 more shipped projects to reach target.", "Bottom 45%", 46, "growing"],
    ["User research", "On track", "One study away from target.", "Top 38%", 74, "track"]
  ];
  const milestones = [
    ["Milestone 1", "Interview foundation", "Warm up SQL, storytelling, and metric intuition.", "Ends Fri", "+8% readiness  - +40 role matches", 62, "In progress"],
    ["Milestone 2", "Data confidence", "Ship 2 dashboards. Own a metric end-to-end.", "~2 weeks", "Closes largest skill gap  - +RM 1.3k pay band", 0, ""],
    ["Milestone 3", "Portfolio proof", "One public case study Vera helps you write.", "~3 weeks", "Lifts interview callback rate ~2.3x", 0, ""],
    ["Milestone 4", "Application sprint", "5 applications  - 2 warm intros via Vera.", "~4 weeks", "Median offer RM 10.2k  - 3 expected interviews", 0, ""]
  ];
  const moves = [
    ["Practice", "3h  - Beginner", "SQL for Product Managers", "DataLemur", "Chosen because: 78% of your saved PM roles list SQL as required.", [["Interview readiness", "+8%"], ["New matching jobs", "+31"], ["Skill gap closed", "Data fluency"]]],
    ["Course", "6h  - Intermediate", "Product Strategy sprint", "Reforge", "Chosen because: Completes Milestone 1 and matches your Grab & Setel targets.", [["Interview readiness", "+11%"], ["Pay band shift", "+RM 900"], ["Milestone", "Closes M1"]]],
    ["Essay pack", "45m  - Any", "Write a crisp problem statement", "Vera curated", "Chosen because: Your written comms is your strongest signal - publish once to lock Top 18%.", [["Callback rate", "x1.4"], ["Portfolio proof", "+1 artifact"], ["Milestone", "Feeds M3"]]]
  ];
  const practiceItems = [
    ["Mock interview", "15 min", "15-min PM mock - marketplace pricing", "Product thinking", "+4% readiness"],
    ["Case study", "25 min", "Design a driver-incentive experiment", "Experiment design", "+3% readiness"],
    ["Behavioral", "20 min", "3 STAR stories - conflict & prioritization", "Communication", "+2% readiness"],
    ["SQL drill", "30 min", "Joins, window functions, cohort query", "SQL fluency", "+7% readiness"]
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
        <span class="cg-section-kicker">Growth</span>
        <h1>Your next move, <em>coached by Vera.</em></h1>
        <p>I watch what the market rewards for the roles you're chasing, then coach you toward the smallest move with the biggest career return.</p>
      </header>

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
          <div class="cg-chat-bubble">I noticed something. You've saved 4 Product Manager roles this week - 3 of them explicitly ask for SQL fluency in the JD. That's your largest hiring blocker right now.</div>
          <div class="cg-chat-question">How much would closing that gap actually change?</div>
          <div class="cg-chat-bubble">For your KL PM targets: unlocks ~40 more roles, lifts interview readiness by 8%, and shifts your median offer band from RM 8.9k to RM 10.2k. 30 focused minutes today gets you 60% of the way.</div>
          <div class="cg-grow-move">
            <span>Vera's suggested move today</span>
            <h3>30-min SQL warm-up - joins & aggregates</h3>
            <dl><dt>Readiness</dt><dd>+8%</dd><dt>New matches</dt><dd>+40 roles</dd><dt>Pay band</dt><dd>+RM 1.3k</dd></dl>
          </div>
          <form class="cg-grow-chat" action="vera.html">
            <input name="topic" placeholder="Ask Vera anything about your career...">
            <button type="submit">${icon("send")}</button>
          </form>
        </article>
      </section>

      <section class="cg-grow-journey">
        <header>
          <div>
            <span class="cg-section-kicker">Goals</span>
            <h2>Your growth journey - Product Manager, KL</h2>
          </div>
          <button class="btn btn-ghost" type="button">${icon("target")} Adjust goals</button>
        </header>
        <div class="cg-grow-progress"><i></i><span>18% overall  - est. offer by mid-August</span><b>${icon("flame")} 6-day streak</b></div>
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
          <header><span>${icon("clipboard-check")} Interview in 3 days  - Grab PM</span><div><i><em style="width:67%"></em></i><b>4/6  - 67% ready</b></div></header>
          <div>
            ${[
              ["Resume tailored to Grab PM JD", true],
              ["Company research completed", true],
              ["STAR stories prepared (5)", true],
              ["Mock interview completed", true],
              ["Questions for interviewer prepared", false],
              ["Portfolio case rehearsed out loud", false]
            ].map(([item, done]) => `<p class="${done ? "done" : ""}">${icon(done ? "check-circle-2" : "circle")} ${item}</p>`).join("")}
          </div>
          <footer><span>Finish the last two to reach <strong>81%</strong> ready.</span><a class="btn btn-ghost" href="vera.html#interview">Continue preparation ${icon("arrow-right")}</a></footer>
        </article>
      </section>

      <section class="cg-interview-coach">
        <div class="cg-grow-section-head">
          <div><h2>Interview Coach-Powered by Vera</h2></div>
          <span class="cg-soft-pill">${icon("shield-check")} Adaptive to each company</span>
        </div>
        <div class="cg-interview-top">
          <article class="cg-upcoming-interview">
            <small>${icon("calendar-clock")} Upcoming interview</small>
            <header><div><h3>Product Manager</h3><p>${icon("building-2")} Grab Malaysia  - Round 2  - Hiring Manager + Case</p></div><time>Tuesday, 9 Jul  - 10:00 AM<span>3 days remaining</span></time></header>
            <div class="cg-interview-kpis">
              <div><span>Interview readiness</span><strong>74%</strong></div>
              <div><span>Difficulty</span><strong>High</strong></div>
              <div><span>Your confidence</span><strong>Medium</strong></div>
            </div>
            <footer><p>Closing SQL + metric gaps this week is expected to lift readiness to 81% by interview day.</p><a class="btn btn-primary" href="vera.html#interview">Start today's plan ${icon("arrow-right")}</a></footer>
          </article>
          <article class="cg-vera-focus">
            <small>${icon("sparkles")} Vera's focus for Grab</small>
            <p>I compared Grab's PM interview style with your current profile. Today's highest-impact prep is SQL and product metrics - your weakest areas and the two topics Grab tests in almost every PM loop.</p>
            <ul>
              <li>Grab often opens with a marketplace pricing prompt - practice one today.</li>
              <li>Expect a live SQL round: joins + one window function.</li>
              <li>Behavioral panel favours "conflict + prioritization" STAR stories.</li>
            </ul>
          </article>
        </div>
        <div class="cg-practice-grid">
          <article class="cg-practice-panel">
            <header><h3>${icon("play")} Today's interview practice</h3><span>~90 min total</span></header>
            <div class="cg-practice-cards">
              ${practiceItems.map(([kind, time, title, focus, lift]) => `
                <div class="cg-practice-card"><header><span>${kind}</span><small>${icon("clock")} ${time}</small></header><h4>${title}</h4><p>${focus}<b>${lift}</b></p><a class="btn btn-primary" href="vera.html#interview">${icon("play")} Start practice</a></div>
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
            ${(() => {
              const scores = [58, 67, 76];
              const width = 600, height = 190, padX = 60, topY = 30, bottomY = 140;
              const min = Math.min(...scores), max = Math.max(...scores), range = (max - min) || 1;
              const points = scores.map((score, index) => ({
                x: scores.length === 1 ? width / 2 : padX + (index * (width - padX * 2)) / (scores.length - 1),
                y: bottomY - ((score - min) / range) * (bottomY - topY),
                score
              }));
              const linePoints = points.map(p => `${p.x},${p.y}`).join(" ");
              return `
                <svg class="cg-history-trend" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Mock interview score trend: ${scores.join(", ")}">
                  <polyline points="${linePoints}"></polyline>
                  ${points.map((p, index) => `
                    <g>
                      <circle cx="${p.x}" cy="${p.y}" r="7"></circle>
                      <text x="${p.x}" y="${p.y - 20}" text-anchor="middle" class="cg-history-value">${p.score}%</text>
                      <text x="${p.x}" y="${height - 15}" text-anchor="middle" class="cg-history-label">Attempt ${index + 1}</text>
                    </g>
                  `).join("")}
                </svg>
              `;
            })()}
            <p><span>Latest feedback</span>"Strong framing. Tighten prioritization + numbers."</p>
          </article>
          <article class="cg-company-coaching">
            <header>
              <h3>${icon("building-2")} Company-specific coaching</h3>
              <label class="cg-company-select">
                <select data-company-filter aria-label="Choose company">
                  <option value="">Choose company</option>
                  ${coachingCards.map(([company]) => `<option value="${company}">${company}</option>`).join("")}
                </select>
                ${icon("chevron-down")}
              </label>
            </header>
            <div data-company-cards>${coachingCards.map(([company, a, b, c, tone]) => `<section class="tone-${tone}" data-company="${company}"><span>Focus areas</span><h4>${company}</h4><ul><li>${a}</li><li>${b}</li><li>${c}</li></ul></section>`).join("")}</div>
          </article>
        </div>
      </section>

      <section class="cg-grow-section">
        <div class="cg-grow-section-head"><div><h2>Recommended Growth</h2></div><a href="vera.html#skills">Browse all</a></div>
        <div class="cg-move-grid">
          ${moves.map(([kind, time, title, source, why, metrics]) => `
            <article class="cg-move-card">
              <header><span>${kind}</span><small>${icon("clock")} ${time}</small></header>
              <h3>${title}</h3>
              <p>${icon("book-open")} ${source}</p>
              <div class="cg-move-why">${icon("lightbulb")} ${why}</div>
              <dl>${metrics.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
              <button class="btn btn-primary" type="button">${icon("play")} Start</button>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="cg-grow-win">
        <span>${icon("award")}</span>
        <div>
          <small>Nice work this week</small>
          <h2>You just moved into the <em>Top 31%</em> of PM candidates in KL.</h2>
          <p>Interview readiness climbed 6 points and you unlocked 23 additional matching roles. Keep the streak alive - Milestone 2 is one focused week away.</p>
          <div><b>${icon("zap")} +6% readiness</b><b>${icon("briefcase-business")} +23 matching jobs</b><b>${icon("flame")} 6-day streak</b></div>
        </div>
      </section>
    </section>
  `);
  qs("[data-company-filter]", root)?.addEventListener("change", event => {
    const chosen = event.target.value;
    qsa("[data-company-cards] section", root).forEach(section => {
      section.style.display = !chosen || section.dataset.company === chosen ? "" : "none";
    });
  });
  createIcons();
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

function renderProfile() {
  const root = qs("[data-profile]");
  if (!root) return;
  if (!requireAccount(root, "view your CareerGo profile")) return;

  const state = readState();
  const profile = normalizeProfile(state.profile);
  const name = profile.personal.fullName || state.session.name || "Aisyah Rahman";
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "AR";
  const firstName = name.split(/\s+/).filter(Boolean)[0] || "Aisyah";
  const locationLabel = [profile.personal.cityState, profile.personal.country].filter(Boolean).join(", ") || "Kuala Lumpur, Malaysia";
  const targetRole = profile.preferences.roles[0] || profile.background.currentRole || "Applied AI Engineer";
  const school = profile.background.school || "Universiti Malaya";
  const major = profile.background.courseMajor || "Computer Science - AI specialisation";
  const techSkills = profile.skills.technical.length ? profile.skills.technical : ["Python", "TypeScript", "PostgreSQL", "LangChain", "pgvector", "FastAPI", "Evals"];
  const softSkills = profile.skills.soft.length ? profile.skills.soft : ["Leadership", "Mentoring", "Public speaking"];
  const tools = profile.skills.tools.length ? profile.skills.tools : ["React", "Supabase", "Tailwind", "XGBoost"];
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
  const projects = [
    {
      title: "MarketPulse - fair-pay salary intelligence",
      label: "Pinned",
      verified: true,
      body: "Percentile salary bands per role, location and experience - winner of UMHack 2025 fintech track.",
      meta: [["Role", "Full-stack + ML"], ["Duration", "3 months"], ["Team", "2"]],
      impact: "12k+ salary data points modeled",
      chips: ["FastAPI", "PostgreSQL", "React", "XGBoost"],
      tone: "dark"
    },
    {
      title: "Kubu - student mentor matching",
      label: "Vera verified",
      verified: true,
      body: "Two-sided platform pairing final-year students with industry mentors using an embedding-based match.",
      meta: [["Role", "Founding Engineer"], ["Duration", "6 months"], ["Team", "4"]],
      impact: "1,200 sign-ups in 8 weeks",
      chips: ["TypeScript", "Supabase", "Tailwind"],
      tone: "mint"
    }
  ];
  const roles = [
    {
      org: "Petronas Digital",
      initials: "PD",
      title: "AI Engineer Intern",
      date: "Jan 2026 - Present - 6 mo",
      body: "Shipped Vera-Lite to 400 internal users; +32% retrieval accuracy.",
      chips: ["LLM apps", "Evaluation", "Python", "SQL"]
    },
    {
      org: "Maybank",
      initials: "MB",
      title: "Software Engineer Intern",
      date: "May 2025 - Aug 2025 - 4 mo",
      body: "Rebuilt fraud-review UI; reduced analyst handling time by 22%.",
      chips: ["React", "TypeScript", "Kafka", "PostgreSQL"]
    },
    {
      org: "UM AI Society",
      initials: "UM",
      title: "Technical Lead",
      date: "Aug 2024 - Apr 2025 - 9 mo",
      body: "Led 12 members, ran UMHack track with 480 participants.",
      chips: softSkills.slice(0, 3)
    }
  ];
  const gallery = [
    ["Screenshot", "Vera-Lite UI", "mint"],
    ["Screenshot", "MarketPulse dashboard", "aqua"],
    ["Video", "UMHack demo", "dark"],
    ["Design", "Kubu onboarding", "mint"],
    ["Certificate", "Kaggle certificate", "dark"],
    ["Slides", "IEEE presentation", "aqua"]
  ];
  const activities = [
    ["rocket", "Shipped Vera-Lite v0.4", "2 days ago - Project"],
    ["award", "Earned AWS ML Foundations", "1 week ago - Certificate"],
    ["book-open", "Wrote - 'Evals for RAG in production'", "2 weeks ago - Article - 3.4k reads"],
    ["users", "Mentored 3 first-year students", "3 weeks ago - Community"],
    ["zap", "Reached 1,000 followers on CareerGo", "1 month ago - Milestone"]
  ];

  root.innerHTML = appShell("", `
    <section class="cg-user-profile-v2">
      <header class="cg-up-hero">
        <div class="cg-up-cover">
          <div class="cg-up-avatar">${initials}</div>
          <button class="cg-up-camera" type="button" aria-label="Upload photo">${icon("camera")}</button>
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
            <a class="cg-up-primary" href="edit-career-data.html">${icon("pencil")} Edit career data</a>
            <a class="cg-up-secondary" href="settings.html">${icon("settings")} Settings</a>
          </div>
        </div>
        <div class="cg-up-stats">
          ${[
            ["Portfolio readiness", "92", "Recommended hire"],
            ["Career fit", "88", targetRole],
            ["Profile strength", "94", "Employer-ready"],
            ["Network signal", "1,284", "Followers"]
          ].map(([label, value, detail]) => `<article><span>${esc(label)}</span><strong>${esc(value)}</strong><small>${esc(detail)}</small></article>`).join("")}
        </div>
      </header>

      <div class="cg-up-layout">
        <main class="cg-up-main">
          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><span class="cg-up-kicker">Portfolio proof</span><h2>Proof employers can scan in seconds.</h2></div>
              <a class="cg-up-mini-btn" href="edit-career-data.html">${icon("plus")} Add proof</a>
            </div>
            <div class="cg-up-project-grid">
              ${projects.map(project => `
                <article class="cg-up-project-card">
                  <div class="cg-up-project-art ${project.tone}">
                    <div>
                      <span>${esc(project.label)}</span>
                      ${project.verified ? `<span>${icon("sparkles")} Vera verified</span>` : ""}
                    </div>
                    <h3>${esc(project.title)}</h3>
                    <a href="#" aria-label="Open project">${icon("arrow-up-right")}</a>
                  </div>
                  <div class="cg-up-project-body">
                    <p>${esc(project.body)}</p>
                    <dl>${project.meta.map(([key, value]) => `<div><dt>${esc(key)}</dt><dd>${esc(value)}</dd></div>`).join("")}</dl>
                    <strong>Impact - ${esc(project.impact)}</strong>
                    <div class="cg-up-chip-row">${project.chips.map(chip).join("")}</div>
                    <footer><span>${icon("github")} Code</span><span>${icon("external-link")} Demo</span><span>${icon("file-text")} Case study</span><a href="#">Read ${icon("arrow-right")}</a></footer>
                  </div>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head"><div><span class="cg-up-kicker">Experience</span><h2>Roles & impact</h2></div></div>
            <div class="cg-up-role-list">
              ${roles.map(role => `
                <article class="cg-up-role-card">
                  <div class="cg-up-logo-tile">${esc(role.initials)}</div>
                  <div>
                    <h3>${esc(role.title)}</h3>
                    <p>${esc(role.org)} - ${esc(role.date)}</p>
                    <strong>${esc(role.body)}</strong>
                    <div class="cg-up-chip-row">${role.chips.map(chip).join("")}</div>
                  </div>
                  <a href="#" aria-label="Open role">${icon("arrow-up-right")}</a>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head"><div><span class="cg-up-kicker">Education</span><h2>Learning path</h2></div></div>
            <div class="cg-up-education-grid">
              ${[
                ["graduation-cap", school, major, "2022 - 2026", "3.86 / 4.00", ["Dean's List - 4 semesters", "Research: LLM eval for low-resource languages", "Exchange: Kyoto University, Fall 2025"]],
                ["brain", "Deep Learning Specialization", "DeepLearning.AI - Andrew Ng", "2024", "Verified", ["5-course specialisation with capstone", "Focus: sequence models & transformers"]]
              ].map(([iconName, title, subtitle, years, score, bullets]) => `
                <article class="cg-up-edu-card">
                  <span>${icon(iconName)}</span>
                  <div>
                    <h3>${esc(title)}</h3>
                    <p>${esc(subtitle)}</p>
                    <small>${esc(years)} - ${esc(score)}</small>
                    <ul>${bullets.map(item => `<li>${esc(item)}</li>`).join("")}</ul>
                  </div>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head">
              <div><span class="cg-up-kicker">Portfolio gallery</span><h2>Visual work</h2></div>
              <a class="cg-up-mini-btn" href="edit-career-data.html">${icon("plus")} Upload</a>
            </div>
            <div class="cg-up-gallery">
              ${gallery.map(([label, title, tone]) => `
                <article class="cg-up-gallery-card ${tone}">
                  <span>${esc(label)}</span>
                  ${label === "Video" ? `<button type="button" aria-label="Play video">${icon("play")}</button>` : ""}
                  <strong>${esc(title)}</strong>
                  <i>${icon("arrow-up-right")}</i>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="cg-up-section">
            <div class="cg-up-section-head"><div><span class="cg-up-kicker">Activity</span><h2>Recent professional activity</h2></div></div>
            <article class="cg-up-activity-card">
              ${activities.map(([iconName, title, meta], index) => `
                <a href="#">
                  <span class="${index === 0 ? "active" : ""}">${icon(iconName)}</span>
                  <div><strong>${esc(title)}</strong><small>${esc(meta)}</small></div>
                  ${icon("arrow-up-right")}
                </a>
              `).join("")}
            </article>
          </section>
        </main>

        <aside class="cg-up-sidebar">
          <section class="cg-up-side-panel">
            <span class="cg-up-kicker">Skill signal</span>
            <h2>Technical depth</h2>
            ${skillBar(techSkills[0] || "Python", 92)}
            ${skillBar(techSkills[1] || "TypeScript", 84)}
            ${skillBar(techSkills[2] || "PostgreSQL", 78)}
          </section>
          <section class="cg-up-side-panel">
            <h2>AI & ML</h2>
            ${skillBar("LLM apps / RAG", 90)}
            ${skillBar("Evaluation", 82)}
            ${skillBar(tools[3] || "XGBoost", 74)}
          </section>
          <section class="cg-up-side-panel">
            <h2>Leadership</h2>
            ${skillBar("Mentoring", 80)}
            ${skillBar("Public speaking", 72)}
          </section>
          <section class="cg-up-side-panel">
            <h2>Languages</h2>
            ${skillBar("English", 95)}
            ${skillBar("Malay", 100)}
            ${skillBar("Japanese (N4)", 45)}
          </section>
          <section class="cg-up-side-panel cg-up-network">
            <span class="cg-up-kicker">Network</span>
            <h2>Professional circle</h2>
            <div>
              <p><span>Followers</span><strong>1,284</strong></p>
              <p><span>Following</span><strong>312</strong></p>
              <p><span>Mentors</span><strong>6</strong></p>
              <p><span>Companies followed</span><strong>24</strong></p>
            </div>
            <footer><b>AI</b><b>MK</b><b>JT</b><b>SR</b><b>NH</b><em>+32 mutual</em></footer>
          </section>
          <section class="cg-up-hire-card">
            <span class="cg-up-kicker">For employers</span>
            <h2>Why hire ${esc(firstName)}</h2>
            <div>
              <span>${icon("trending-up")} Recommended hire</span>
              <strong>92 <small>/ 100 match for ${esc(targetRole)}</small></strong>
              <p>${icon("check-circle-2")} 3 production LLM projects with measurable impact</p>
              <p>${icon("check-circle-2")} Verified engineering fundamentals (${esc(techSkills.slice(0, 3).join(", "))})</p>
              <p>${icon("check-circle-2")} Ships fast - 4 shipped features in the last 90 days</p>
            </div>
          </section>
        </aside>
      </div>
    </section>
  `);

  createIcons();
}

function renderPublicProfile() {
  const root = qs("[data-public-profile]");
  if (!root) return;
  if (!requireAccount(root, "view your public profile")) return;
  const state = readState();
  const profile = state.profile;
  const name = getUserName(state);
  const target = getTargetLabel(profile);
  const locationLabel = [profile.personal.cityState, profile.personal.country].filter(Boolean).join(", ") || "Malaysia";
  const experienceItems = Array.isArray(profile.experience?.work) ? profile.experience.work : Array.isArray(profile.experience?.roles) ? profile.experience.roles : [];
  const initials = name.split(" ").map(part => part[0]).join("").slice(0, 2).toUpperCase() || "AR";
  const cgEducationSummary = [profile.background.school, profile.background.courseMajor].filter(Boolean).join(" - ") || "Universiti Malaya - Product Management path";
  const skillList = [...(profile.skills.technical || []), ...(profile.skills.soft || [])].filter(Boolean);
  const proofCards = [
    ["Portfolio readiness", "74%", "2 public artifacts live", "target"],
    ["Employer visibility", profile.privacy.allowEmployerDiscovery ? "On" : "Off", profile.privacy.profileVisibility || "Private", "eye"],
    ["Profile strength", "82%", "3 items to complete", "sparkles"],
    ["Career focus", target, locationLabel, "map-pin"]
  ];
  root.innerHTML = appShell("", `
    <section class="cg-user-profile">
      <header class="cg-user-profile-hero">
        <div class="cg-user-avatar-xl">${initials}</div>
        <div>
          <span class="cg-section-kicker">Profile</span>
          <h1>${name}</h1>
          <p>${target} - ${locationLabel}</p>
          <div class="cg-profile-pill-row">
            <span>${icon("badge-check")} ${profile.privacy.profileVisibility || "Private"}</span>
            <span>${icon("briefcase-business")} ${state.applications.length || 6} active applications</span>
            <span>${icon("trending-up")} Ahead of 72% of candidates</span>
          </div>
        </div>
        <div class="cg-profile-actions">
          <a class="btn btn-primary" href="edit-career-data.html">${icon("pencil")} Edit career data</a>
          <a class="btn btn-ghost" href="settings.html">${icon("settings")} Settings</a>
        </div>
      </header>

      <section class="cg-profile-score-grid">
        ${proofCards.map(([label, value, note, ic]) => `
          <article>
            <span>${icon(ic)} ${label}</span>
            <strong>${value}</strong>
            <small>${note}</small>
          </article>
        `).join("")}
      </section>

      <section class="cg-profile-layout">
        <article class="cg-profile-card cg-profile-about">
          <span class="cg-section-kicker">About</span>
          <h2>Career story</h2>
          <p>${profile.coach.worry ? `Focused on ${target.toLowerCase()} while turning ${profile.coach.worry.toLowerCase()} into visible proof.` : `Building a focused ${target.toLowerCase()} profile around product judgment, metrics, and clear portfolio evidence.`}</p>
          <div class="cg-profile-links">
            <a href="${profile.skills.linkedin || "#"}">${icon("linkedin")} LinkedIn</a>
            <a href="${profile.skills.github || "#"}">${icon("github")} GitHub</a>
            <a href="${profile.skills.portfolioLinks || "#"}">${icon("folder-open")} Portfolio</a>
          </div>
        </article>

        <article class="cg-profile-card">
          <span class="cg-section-kicker">Proof</span>
          <h2>Skills employers can read quickly.</h2>
          <div class="cg-profile-skill-cloud">
            ${(skillList.length ? skillList : ["Product discovery", "SQL for PM", "User research", "Design systems", "Stakeholder management"]).slice(0, 12).map(skill => `<span>${skill}</span>`).join("")}
          </div>
        </article>
      </section>

      <section class="cg-profile-layout">
        <article class="cg-profile-card">
          <span class="cg-section-kicker">Experience</span>
          <h2>Work and project evidence.</h2>
          <div class="cg-profile-timeline">
            ${(experienceItems.length ? experienceItems.slice(0, 4) : ["GrabFood teardown - portfolio case", "SQL dashboard project", "Product strategy memo"]).map((item, index) => `
              <div>
                <i>${index + 1}</i>
                <strong>${typeof item === "string" ? item : item.title || item.role || "Experience"}</strong>
                <span>${typeof item === "string" ? "CareerGo proof item" : item.company || item.summary || "Public profile evidence"}</span>
              </div>
            `).join("")}
          </div>
        </article>

        <article class="cg-profile-card">
          <span class="cg-section-kicker">Education</span>
          <h2>${cgEducationSummary}</h2>
          <p>${profile.background.educationLevel || "Degree"} ${profile.background.expectedGraduationYear ? `- ${profile.background.expectedGraduationYear}` : "- Malaysia"}</p>
          <div class="cg-profile-note">${icon("sparkles")} Vera keeps private readiness notes hidden from this public profile.</div>
        </article>
      </section>
    </section>
  `);
  createIcons();
  return;
  const educationSummary = [profile.background.school, profile.background.courseMajor].filter(Boolean).join(" - ") || "Education details available on request";
  root.innerHTML = appShell("", `
    <section class="public-profile-shell">
      <article class="glass-card public-profile-hero">
        <div class="public-avatar">${name.split(" ").map(part => part[0]).join("").slice(0, 2).toUpperCase()}</div>
        <div>
          <div class="eyebrow"><span class="spark">*</span> Public Profile Preview</div>
          <h1 class="section-title">${name}</h1>
          <p class="section-sub">${target}  - ${locationLabel}</p>
          <p class="muted">CareerGo public profiles help employers and collaborators understand your headline, evidence, portfolio, skills, and visibility preferences without exposing private Career Intelligence notes.</p>
          <div class="hero-actions compact-actions">
            <button class="btn btn-primary" type="button">${icon("user-plus")} Connect</button>
            <button class="btn btn-ghost" type="button">${icon("send")} Contact</button>
            <a class="btn btn-cyan" href="edit-career-data.html">${icon("brain-circuit")} Edit career data</a>
          </div>
        </div>
      </article>
      <section class="content-grid">
        <article class="glass-card">
          <div class="section-kicker">About</div>
          <p class="muted">${profile.coach.worry ? `Currently focused on ${target.toLowerCase()} while working through: ${profile.coach.worry}` : `Exploring ${target} opportunities with a CareerGo profile built around skills, goals, and evidence.`}</p>
        </article>
        <article class="glass-card">
          <div class="section-kicker">Visibility</div>
          <div class="insight-row"><span>Profile status</span><strong>${profile.privacy.profileVisibility}</strong></div>
          <div class="insight-row"><span>Employer discovery</span><strong>${profile.privacy.allowEmployerDiscovery ? "Allowed" : "Off"}</strong></div>
        </article>
      </section>
      <section class="content-grid">
        <article class="glass-card">
          <div class="section-head compact-section-head"><div><div class="section-kicker">Experience</div><h2 class="section-title mini">Work and project evidence.</h2></div></div>
          <div class="list-stack">${experienceItems.length ? experienceItems.slice(0, 3).map(item => `<div class="list-card quiet"><h3>${typeof item === "string" ? item : item.title || item.role || "Experience"}</h3><p class="muted small">${typeof item === "string" ? "Added from CareerGo profile" : item.company || item.summary || "Public summary"}</p></div>`).join("") : `<div class="list-card quiet"><h3>Portfolio evidence</h3><p class="muted small">Add experience in Career Intelligence to make this profile stronger.</p></div>`}</div>
        </article>
        <article class="glass-card">
          <div class="section-kicker">Education</div>
          <h3>${educationSummary}</h3>
          <p class="muted">${profile.background.educationLevel || "Education level"} ${profile.background.expectedGraduationYear ? ` - ${profile.background.expectedGraduationYear}` : ""}</p>
        </article>
      </section>
      <section class="glass-card">
        <div class="section-head compact-section-head"><div><div class="section-kicker">Skills and portfolio</div><h2 class="section-title mini">Public proof signals.</h2></div><a class="btn btn-ghost" href="settings.html">${icon("shield")} Privacy</a></div>
        ${pills([...profile.skills.technical, ...profile.skills.soft].slice(0, 12), "cyan")}
        <div class="grid-3 public-proof-grid">
          ${[
            ["Portfolio", profile.skills.portfolioLinks || "Add portfolio link"],
            ["LinkedIn", profile.skills.linkedin || "Add LinkedIn"],
            ["GitHub", profile.skills.github || "Add GitHub"]
          ].map(([label, value]) => `<div class="score-tile"><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>
      </section>
      <section class="content-grid">
        <article class="glass-card"><div class="section-kicker">Achievements</div><p class="muted">${profile.skills.achievements?.length ? profile.skills.achievements.join(", ") : "Add achievements from Career Intelligence to show public proof."}</p></article>
        <article class="glass-card"><div class="section-kicker">Public posts</div>${DATA.communityPosts.slice(0, 2).map(post => `<div class="review-card"><strong>${post.title}</strong><p class="muted small">${post.body}</p></div>`).join("")}</article>
      </section>
    </section>
  `, { title: "Public Profile", subtitle: "This is the profile others can view. Private readiness analysis stays in Career Intelligence." });
  createIcons();
}

function renderSettings() {
  const root = qs("[data-settings]");
  if (!root) return;
  if (!requireAccount(root, "manage account and privacy settings")) return;
  const state = readState();
  const profile = state.profile;
  const cgSettingsTiles = [
    ["Account", getUserName(state), state.session.email || profile.personal.email || "careergo member", "user-round"],
    ["Privacy", profile.privacy.profileVisibility || "Private", profile.privacy.allowEmployerDiscovery ? "Employer discovery on" : "Employer discovery off", "shield"],
    ["Vera memory", profile.privacy.allowCoachMemory ? "Enabled" : "Paused", "Used for coaching context", "sparkles"],
    ["Notifications", "Digest + reminders", "Interview and roadmap nudges", "bell"]
  ];
  root.innerHTML = appShell("", `
    <section class="cg-settings-page">
      <header class="cg-settings-hero">
        <div>
          <span class="cg-section-kicker">Settings</span>
          <h1>Account, privacy, and Vera preferences.</h1>
          <p>Control how CareerGo uses your profile, what employers can discover, and how Vera supports your next move.</p>
        </div>
        <a class="btn btn-primary" href="public-profile.html">${icon("user-round")} View profile</a>
      </header>

      <section class="cg-settings-tile-grid">
        ${cgSettingsTiles.map(([label, value, note, ic]) => `
          <article>
            <span>${icon(ic)}</span>
            <small>${label}</small>
            <strong>${value}</strong>
            <p>${note}</p>
          </article>
        `).join("")}
      </section>

      <section class="cg-settings-layout">
        <form class="cg-settings-card" data-settings-form>
          <header><span class="cg-section-kicker">Privacy</span><h2>Profile visibility</h2></header>
          <label>Profile visibility
            <select name="profileVisibility">
              <option ${profile.privacy.profileVisibility === "Private" ? "selected" : ""}>Private</option>
              <option ${profile.privacy.profileVisibility === "Visible to employers" ? "selected" : ""}>Visible to employers</option>
              <option ${profile.privacy.profileVisibility === "Visible for advisory opportunities" ? "selected" : ""}>Visible for advisory opportunities</option>
            </select>
          </label>
          <label class="cg-toggle-row"><span><strong>Allow employer discovery</strong><small>Let matching employers find your public proof.</small></span><input name="allowEmployerDiscovery" type="checkbox" ${profile.privacy.allowEmployerDiscovery ? "checked" : ""}></label>
          <label class="cg-toggle-row"><span><strong>Allow Vera memory</strong><small>Use your recent actions to personalize coaching.</small></span><input name="allowCoachMemory" type="checkbox" ${profile.privacy.allowCoachMemory ? "checked" : ""}></label>
          <button class="btn btn-primary" type="submit">${icon("save")} Save privacy</button>
        </form>

        <form class="cg-settings-card" data-coach-settings-form>
          <header><span class="cg-section-kicker">Vera</span><h2>Coach preferences</h2></header>
          <label>Support style
            <textarea name="supportStyle">${profile.coach.supportStyle || ""}</textarea>
          </label>
          <label>Explanation style
            <select name="explanationStyle">
              <option ${profile.coach.explanationStyle === "Detailed explanations" ? "selected" : ""}>Detailed explanations</option>
              <option ${profile.coach.explanationStyle === "Simple guidance" ? "selected" : ""}>Simple guidance</option>
              <option ${profile.coach.explanationStyle === "Direct missions" ? "selected" : ""}>Direct missions</option>
            </select>
          </label>
          <label>Mission frequency
            <select name="missionFrequency">
              <option ${profile.coach.missionFrequency === "Weekly" ? "selected" : ""}>Weekly</option>
              <option ${profile.coach.missionFrequency === "Twice a week" ? "selected" : ""}>Twice a week</option>
              <option ${profile.coach.missionFrequency === "Monthly" ? "selected" : ""}>Monthly</option>
            </select>
          </label>
          <button class="btn btn-ghost" type="submit">${icon("sparkles")} Save Vera preferences</button>
        </form>
      </section>

      <section class="cg-settings-card cg-settings-wide">
        <header><span class="cg-section-kicker">Account</span><h2>Connected profile data</h2></header>
        <div class="cg-settings-data-row">
          <span>${icon("mail")} ${state.session.email || profile.personal.email || "No email added"}</span>
          <span>${icon("map-pin")} ${profile.personal.cityState || "Kuala Lumpur"}</span>
          <span>${icon("briefcase")} ${getTargetLabel(profile)}</span>
          <a href="edit-career-data.html">${icon("arrow-up-right")} Edit career data</a>
        </div>
      </section>
    </section>
  `);
  qs("[data-settings-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    next.profile.privacy.profileVisibility = String(form.get("profileVisibility") || "Private");
    next.profile.privacy.allowEmployerDiscovery = Boolean(form.get("allowEmployerDiscovery"));
    next.profile.privacy.allowCoachMemory = Boolean(form.get("allowCoachMemory"));
    syncCurrentUser(next);
    writeState(next);
    showToast("Privacy settings saved.");
    renderSettings();
  });
  qs("[data-coach-settings-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    next.profile.coach.supportStyle = String(form.get("supportStyle") || "");
    next.profile.coach.explanationStyle = String(form.get("explanationStyle") || next.profile.coach.explanationStyle);
    next.profile.coach.missionFrequency = String(form.get("missionFrequency") || next.profile.coach.missionFrequency);
    syncCurrentUser(next);
    writeState(next);
    showToast("Vera preferences saved.");
    renderSettings();
  });
  createIcons();
  return;
  root.innerHTML = appShell("", `
    <section class="glass-card dashboard-hero compact-dashboard-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Settings</div><h1 class="section-title">Account, privacy, and Vera preferences.</h1><p class="section-sub">Control how CareerGo uses your profile, what employers can discover, and how Vera supports you.</p></div>
    </section>
    <section class="settings-grid">
      <form class="glass-card form-grid profile-card" data-settings-form>
        <h2 class="section-title mini">Privacy</h2>
        <label>Profile visibility <select name="profileVisibility"><option ${profile.privacy.profileVisibility === "Private" ? "selected" : ""}>Private</option><option ${profile.privacy.profileVisibility === "Visible to employers" ? "selected" : ""}>Visible to employers</option><option ${profile.privacy.profileVisibility === "Visible for advisory opportunities" ? "selected" : ""}>Visible for advisory opportunities</option></select></label>
        <label class="check-field custom-checkbox"><input name="allowEmployerDiscovery" type="checkbox" ${profile.privacy.allowEmployerDiscovery ? "checked" : ""}> Allow employer discovery</label>
        <label class="check-field custom-checkbox"><input name="allowCoachMemory" type="checkbox" ${profile.privacy.allowCoachMemory ? "checked" : ""}> Allow Vera to remember coaching context</label>
        <button class="btn btn-primary" type="submit">${icon("save")} Save settings</button>
      </form>
      <form class="glass-card form-grid profile-card" data-coach-settings-form>
        <h2 class="section-title mini">AI Coach Preferences</h2>
        <label>Support style <textarea name="supportStyle">${profile.coach.supportStyle}</textarea></label>
        <label>Explanation style <select name="explanationStyle"><option ${profile.coach.explanationStyle === "Detailed explanations" ? "selected" : ""}>Detailed explanations</option><option ${profile.coach.explanationStyle === "Simple guidance" ? "selected" : ""}>Simple guidance</option></select></label>
        <label>Mission frequency <select name="missionFrequency"><option ${profile.coach.missionFrequency === "Weekly" ? "selected" : ""}>Weekly</option><option ${profile.coach.missionFrequency === "Twice a week" ? "selected" : ""}>Twice a week</option><option ${profile.coach.missionFrequency === "Monthly" ? "selected" : ""}>Monthly</option></select></label>
        <button class="btn btn-cyan" type="submit">${icon("sparkles")} Save Vera preferences</button>
      </form>
    </section>
  `, { title: "Settings", subtitle: "Account and privacy controls live here, separate from your public profile and Career Intelligence." });
  qs("[data-settings-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    next.profile.privacy.profileVisibility = String(form.get("profileVisibility") || "Private");
    next.profile.privacy.allowEmployerDiscovery = Boolean(form.get("allowEmployerDiscovery"));
    next.profile.privacy.allowCoachMemory = Boolean(form.get("allowCoachMemory"));
    syncCurrentUser(next);
    writeState(next);
    showToast("Privacy settings saved.");
  });
  qs("[data-coach-settings-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = readState();
    next.profile.coach.supportStyle = String(form.get("supportStyle") || "");
    next.profile.coach.explanationStyle = String(form.get("explanationStyle") || next.profile.coach.explanationStyle);
    next.profile.coach.missionFrequency = String(form.get("missionFrequency") || next.profile.coach.missionFrequency);
    syncCurrentUser(next);
    writeState(next);
    showToast("Vera preferences saved.");
  });
  createIcons();
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

  root.innerHTML = appShell("", `
    <section class="cg-edit-career">
      <header class="cg-edit-hero">
        <div>
          <span class="cg-section-kicker">${icon("pencil")} Edit career data</span>
          <h1>Keep your CareerGo profile accurate.</h1>
          <p>Update the account, education, skills, goals, and work preferences Vera uses across Today, Discover, Grow, Worth, Pipeline, and Feed.</p>
          <div class="cg-edit-hero-meta">
            <span>${icon("briefcase-business")} ${targetLabel}</span>
            <span>${icon("sparkles")} ${skillCount || 8} profile signals</span>
            <span>${icon("map-pin")} ${htmlValue(profile.personal.cityState || "Kuala Lumpur")}</span>
          </div>
        </div>
        <div class="cg-edit-hero-actions">
          <a class="btn btn-ghost" href="public-profile.html">${icon("user-round")} View profile</a>
          <button class="btn btn-primary" type="submit" form="career-data-form">${icon("save")} Save changes</button>
        </div>
      </header>

      <form class="cg-edit-form" id="career-data-form" data-career-data-form>
        <aside class="cg-edit-summary">
          <span class="cg-section-kicker">Profile strength</span>
          <strong>82%</strong>
          <p>Complete the fields Vera uses to explain role fit, salary range, and roadmap priority.</p>
          <div class="cg-edit-meter"><span style="width:82%"></span></div>
          <ul>
            <li>${icon("check-circle")} Account identity</li>
            <li>${icon("check-circle")} Education and role target</li>
            <li>${icon("circle")} Portfolio proof</li>
          </ul>
        </aside>

        <div class="cg-edit-stack">
          <section class="cg-edit-card">
            <header>
              <span>${icon("user-round")}</span>
              <div><small>Account</small><h2>Basic details</h2></div>
            </header>
            <div class="cg-edit-grid">
              <label>Full name<input name="fullName" value="${htmlValue(profile.personal.fullName || getUserName(state))}" autocomplete="name"></label>
              <label>Email<input name="email" type="email" value="${htmlValue(profile.personal.email || state.session.email || "")}" autocomplete="email"></label>
              <label>Phone<input name="phone" value="${htmlValue(profile.personal.phone || "")}" autocomplete="tel"></label>
              <label>City / state<input name="cityState" value="${htmlValue(profile.personal.cityState || "")}" placeholder="Kuala Lumpur"></label>
              <label>Country<input name="country" value="${htmlValue(profile.personal.country || "Malaysia")}"></label>
              <label>Preferred language<input name="preferredLanguage" value="${htmlValue(profile.personal.preferredLanguage || "English")}"></label>
            </div>
          </section>

          <section class="cg-edit-card">
            <header>
              <span>${icon("graduation-cap")}</span>
              <div><small>Education</small><h2>School and background</h2></div>
            </header>
            <div class="cg-edit-grid">
              <label>Education level
                <select name="educationLevel">
                  ${["", "High school", "Diploma", "Bachelor degree", "Master degree", "PhD", "Bootcamp / certificate"].map(value => option(value, profile.background.educationLevel || "")).join("")}
                </select>
              </label>
              <label>School / university<input name="school" value="${htmlValue(profile.background.school || "")}" placeholder="University of Malaya"></label>
              <label>Course / major<input name="courseMajor" value="${htmlValue(profile.background.courseMajor || "")}" placeholder="Product Design, Computer Science"></label>
              <label>Expected graduation year<input name="expectedGraduationYear" value="${htmlValue(profile.background.expectedGraduationYear || "")}" placeholder="2027"></label>
              <label>Academic performance<input name="academicPerformance" value="${htmlValue(profile.background.academicPerformance || "")}" placeholder="CGPA, awards, dean list"></label>
              <label>Club / leadership<input name="clubLeadership" value="${htmlValue(profile.background.clubLeadership || "")}" placeholder="Product club, student council"></label>
            </div>
          </section>

          <section class="cg-edit-card">
            <header>
              <span>${icon("briefcase-business")}</span>
              <div><small>Career</small><h2>Current path and target</h2></div>
            </header>
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
              <label>Current role<input name="currentRole" value="${htmlValue(profile.background.currentRole || "")}" placeholder="Product Designer"></label>
              <label>Industry<input name="industry" value="${htmlValue(profile.background.industry || "")}" placeholder="Fintech, AI, education"></label>
              <label>Years of experience<input name="yearsExperience" value="${htmlValue(profile.background.yearsExperience || "")}" placeholder="2"></label>
              <label>Current salary range<input name="currentSalaryRange" value="${htmlValue(profile.background.currentSalaryRange || "")}" placeholder="RM 7k - 9k"></label>
              <label class="cg-edit-wide">Career goals<textarea name="goals" placeholder="Find a PM role, prepare for interviews">${listValue(profile.goals)}</textarea><small>Separate with commas.</small></label>
              <label class="cg-edit-wide">Reason for using CareerGo<textarea name="reasonForCareerGo">${htmlValue(profile.background.reasonForCareerGo || "")}</textarea></label>
            </div>
          </section>

          <section class="cg-edit-card">
            <header>
              <span>${icon("sparkles")}</span>
              <div><small>Skills</small><h2>Proof Vera can use</h2></div>
            </header>
            <div class="cg-edit-grid">
              <label class="cg-edit-wide">Technical skills<textarea name="technical">${listValue(profile.skills.technical)}</textarea><small>Examples: SQL, Figma, product analytics.</small></label>
              <label class="cg-edit-wide">Soft skills<textarea name="soft">${listValue(profile.skills.soft)}</textarea></label>
              <label class="cg-edit-wide">Tools<textarea name="tools">${listValue(profile.skills.tools)}</textarea></label>
              <label class="cg-edit-wide">Certifications<textarea name="certifications">${listValue(profile.skills.certifications)}</textarea></label>
              <label class="cg-edit-wide">Projects<textarea name="projects">${listValue(profile.skills.projects)}</textarea></label>
              <label class="cg-edit-wide">Achievements<textarea name="achievements">${listValue(profile.skills.achievements)}</textarea></label>
            </div>
          </section>

          <section class="cg-edit-card">
            <header>
              <span>${icon("link")}</span>
              <div><small>Portfolio</small><h2>Public proof links</h2></div>
            </header>
            <div class="cg-edit-grid">
              <label>Portfolio<input name="portfolioLinks" value="${htmlValue(profile.skills.portfolioLinks || "")}" placeholder="https://"></label>
              <label>LinkedIn<input name="linkedin" value="${htmlValue(profile.skills.linkedin || "")}" placeholder="https://linkedin.com/in/..."></label>
              <label>GitHub<input name="github" value="${htmlValue(profile.skills.github || "")}" placeholder="https://github.com/..."></label>
              <label>Website<input name="website" value="${htmlValue(profile.skills.website || "")}" placeholder="https://"></label>
            </div>
          </section>

          <section class="cg-edit-card">
            <header>
              <span>${icon("sliders-horizontal")}</span>
              <div><small>Preferences</small><h2>What should CareerGo optimize for?</h2></div>
            </header>
            <div class="cg-edit-grid">
              <label class="cg-edit-wide">Target roles<textarea name="roles">${listValue(profile.preferences.roles)}</textarea></label>
              <label class="cg-edit-wide">Industries<textarea name="industries">${listValue(profile.preferences.industries)}</textarea></label>
              <label class="cg-edit-wide">Locations<textarea name="locations">${listValue(profile.preferences.locations)}</textarea></label>
              <label>Work mode
                <select name="workMode">${["Remote", "Hybrid", "Onsite", "Flexible"].map(value => option(value, profile.preferences.workMode || "Hybrid")).join("")}</select>
              </label>
              <label>Minimum salary<input name="minimumSalary" value="${htmlValue(profile.preferences.minimumSalary || "")}" placeholder="RM 8,000"></label>
              <label>Relocate
                <select name="relocate">${["Yes", "Maybe", "No"].map(value => option(value, profile.preferences.relocate || "Maybe")).join("")}</select>
              </label>
              <label>Company size<input name="companySize" value="${htmlValue(profile.preferences.companySize || "")}" placeholder="Startup, scaleup, enterprise"></label>
              <label>Work culture<input name="workCulture" value="${htmlValue(profile.preferences.workCulture || "")}" placeholder="Async, craft-led, fast-moving"></label>
            </div>
          </section>

          <section class="cg-edit-card">
            <header>
              <span>${icon("bot")}</span>
              <div><small>Vera context</small><h2>Coaching signal</h2></div>
            </header>
            <div class="cg-edit-grid">
              <label class="cg-edit-wide">Current worry<textarea name="worry">${htmlValue(profile.coach.worry || "")}</textarea></label>
              <label class="cg-edit-wide">Support style<textarea name="supportStyle">${htmlValue(profile.coach.supportStyle || "")}</textarea></label>
              <label>Growth preference<input name="growthPreference" value="${htmlValue(profile.coach.growthPreference || "Stable growth")}"></label>
              <label>Confidence today<input name="confidenceToday" value="${htmlValue(profile.coach.confidenceToday || "Medium")}"></label>
            </div>
          </section>

          <footer class="cg-edit-savebar">
            <span>${icon("shield-check")} Saved data updates your account and Vera recommendations.</span>
            <div>
              <a class="btn btn-ghost" href="settings.html">Cancel</a>
              <button class="btn btn-primary" type="submit">${icon("save")} Save career data</button>
            </div>
          </footer>
        </div>
      </form>
    </section>
  `);

  qs("[data-career-data-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const splitList = name => String(form.get(name) || "")
      .split(",")
      .map(item => item.trim())
      .filter(Boolean);
    const next = readState();
    const nextProfile = next.profile;
    nextProfile.personal.fullName = String(form.get("fullName") || "").trim();
    nextProfile.personal.email = String(form.get("email") || "").trim();
    nextProfile.personal.phone = String(form.get("phone") || "").trim();
    nextProfile.personal.cityState = String(form.get("cityState") || "").trim();
    nextProfile.personal.country = String(form.get("country") || "Malaysia").trim();
    nextProfile.personal.preferredLanguage = String(form.get("preferredLanguage") || "English").trim();
    nextProfile.personal.roleType = String(form.get("roleType") || "").trim();
    nextProfile.careerStage = String(form.get("careerStage") || "").trim();
    ["educationLevel", "school", "courseMajor", "expectedGraduationYear", "academicPerformance", "clubLeadership", "currentRole", "industry", "yearsExperience", "currentSalaryRange", "reasonForCareerGo"].forEach(key => {
      nextProfile.background[key] = String(form.get(key) || "").trim();
    });
    nextProfile.goals = splitList("goals");
    nextProfile.skills.technical = splitList("technical");
    nextProfile.skills.soft = splitList("soft");
    nextProfile.skills.tools = splitList("tools");
    nextProfile.skills.certifications = splitList("certifications");
    nextProfile.skills.projects = splitList("projects");
    nextProfile.skills.achievements = splitList("achievements");
    ["portfolioLinks", "linkedin", "github", "website"].forEach(key => {
      nextProfile.skills[key] = String(form.get(key) || "").trim();
    });
    nextProfile.preferences.roles = splitList("roles");
    nextProfile.preferences.industries = splitList("industries");
    nextProfile.preferences.locations = splitList("locations");
    nextProfile.preferences.workMode = String(form.get("workMode") || "Hybrid");
    nextProfile.preferences.minimumSalary = String(form.get("minimumSalary") || "").trim();
    nextProfile.preferences.relocate = String(form.get("relocate") || "Maybe");
    nextProfile.preferences.companySize = String(form.get("companySize") || "").trim();
    nextProfile.preferences.workCulture = String(form.get("workCulture") || "").trim();
    nextProfile.coach.worry = String(form.get("worry") || "").trim();
    nextProfile.coach.supportStyle = String(form.get("supportStyle") || "").trim();
    nextProfile.coach.growthPreference = String(form.get("growthPreference") || "Stable growth").trim();
    nextProfile.coach.confidenceToday = String(form.get("confidenceToday") || "Medium").trim();
    nextProfile.intelligence = generateCareerIntelligence(nextProfile);
    nextProfile.updatedAt = nowStamp();
    syncCurrentUser(next);
    writeState(next);
    showToast("Career data saved.");
    renderEditCareerData();
  });
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
      <article class="glass-card"><div class="section-head compact-section-head"><div><div class="section-kicker">Saved jobs</div><h2 class="section-title mini">${savedJobs.length} roles</h2></div><a class="btn btn-ghost" href="discover.html">${icon("briefcase")} Jobs</a></div><div class="list-stack">${savedJobs.map(job => `<a class="list-card quiet" href="discover.html?job=${job.id}"><div class="list-card-top"><div><h3>${job.title}</h3><div class="muted small">${job.company} - ${job.salary}</div></div><span class="score">${job.match}%</span></div></a>`).join("") || `<p class="muted">No saved jobs yet.</p>`}</div></article>
      <article class="glass-card"><div class="section-head compact-section-head"><div><div class="section-kicker">Saved research</div><h2 class="section-title mini">${savedOrgs.length} organizations</h2></div><a class="btn btn-ghost" href="companies.html">${icon("search")} Research</a></div><div class="list-stack">${savedOrgs.map(org => `<a class="list-card quiet" href="${org.type === "University" ? "universities.html" : "companies.html"}?org=${org.id}"><div class="list-card-top"><div><h3>${org.name}</h3><div class="muted small">${org.signal}</div></div>${rating(org.rating)}</div></a>`).join("") || `<p class="muted">No saved companies or universities yet.</p>`}</div></article>
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
    const memory = [
      ["Last month", "RM 8,450", "Before you started the SQL sprint"],
      ["Last week", "RM 8,780", "Resume rewrite lifted recruiter reply rate"],
      ["Yesterday", "RM 8,900", "Two Grab recruiters viewed your profile"],
      ["Today", "RM 8,950", "Portfolio milestone shipped this morning"]
    ];
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
    root.innerHTML = appShell("market", `
      <section class="cg-worth">
        <section class="cg-worth-hero">
          <span class="cg-section-kicker">${icon("sparkles")} Your career value - Malaysia</span>
          <span class="cg-worth-pill">${icon("flame")} Vera believes you're underpriced</span>
          <div class="cg-worth-hero-grid">
            <div>
              <h1><span>RM</span>8,950<small>/ month</small></h1>
            </div>
            <div class="cg-worth-side">
              <b>${icon("trending-up")} +RM 50 since yesterday</b>
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
            <div><span>You today - RM 8,950</span><span>Vera's 6-month target - RM 10,200</span></div>
          </div>
        </section>

        <section class="cg-worth-action">
          <header><span>${icon("sparkles")} Vera - highest-value action today</span><small>1 of 47 possible moves</small></header>
          <div>
            <article>
              <h2>Complete the Product Analytics sprint.</h2>
              <p>Of every roadmap step, portfolio push and referral request open to you, this one moves your Career Value the most for the least effort. It also unlocks the Stripe and Grab interview rubrics in Pipeline.</p>
              <div class="cg-worth-chips"><span>${icon("trending-up")} +RM 1,300 / month expected</span><span>${icon("clock")} 12 hrs over 3 weeks</span><span>${icon("target")} 92% probability of completion</span></div>
              <div class="cg-worth-actions"><a class="btn btn-primary" href="grow.html">${icon("sparkles")} Start in Grow</a><a class="btn btn-ghost" href="vera.html#chat">Why this one? ${icon("arrow-right")}</a></div>
            </article>
            <aside>
              <span>Why Vera picked this</span>
              <p>${icon("check")} Highest RM-per-hour of any action open to you.</p>
              <p>${icon("check")} Solves the #1 blocker Grab flagged in your last screen.</p>
              <p>${icon("check")} Everything else - negotiation, referrals - compounds after this.</p>
            </aside>
          </div>
        </section>

        <section class="cg-worth-section">
          <div class="cg-worth-section-head"><div><h2>Top value drivers</h2><p>Ranked by expected monthly pay lift, weighted by how likely you are to complete it.</p></div><a href="vera.html#chat">Explain how ${icon("arrow-right")}</a></div>
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

        <section class="cg-worth-memory">
          <div class="cg-worth-section-head"><div><h2>Value Growth</h2><p>Small changes compound. Here's the story your Career Value has been telling.</p></div><a href="vera.html#chat">Explain how ${icon("arrow-right")}</a></div>
          <div class="cg-worth-memory-grid">
            ${memory.map(([label, value, body], index) => `<article class="${index === memory.length - 1 ? "active" : ""}"><span>${icon("history")} ${label}</span><strong>${value}</strong><p>${body}</p></article>`).join("")}
          </div>
          <p class="cg-worth-note">${icon("activity")} Vera keeps a running record of every skill you finish, every project you ship, and every recruiter reply. Momentum is the strongest signal in your prediction - you've had 11 positive events in the last 30 days.</p>
        </section>

        <section class="cg-worth-section">
          <div class="cg-worth-section-head"><div><h2>Career Value Scenarios</h2></div><a href="vera.html#chat">Explain how ${icon("arrow-right")}</a></div>
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

        <section class="cg-worth-negotiation">
          <article>
            <span class="cg-section-kicker">${icon("scale")} Salary negotiation - Grab Malaysia</span>
            <h2>Vera thinks you can ask for <em>RM 10,300.</em></h2>
            <div class="cg-worth-offer-grid">
              ${[["Expected offer", "RM 9,200"], ["Fair market value", "RM 10,100"], ["Suggested ask", "RM 10,300"], ["Confidence", "72%"]].map(([label, value], index) => `<div class="${index === 2 ? "active" : ""}"><span>${label}</span><strong>${value}</strong></div>`).join("")}
            </div>
            <div class="cg-worth-slider"><i><em></em><b></b></i><div><span>Lowball - RM 8,400</span><span>Fair - RM 10,100</span><span>Ambitious - RM 11,500</span></div></div>
            <a class="btn btn-primary" href="vera.html#chat">${icon("sparkles")} Generate negotiation points</a>
          </article>
          <div class="cg-grow-coach">
            <div class="cg-grow-coach-head"><span><img class="cg-vera-mark" src="assets/vera-ai-coach.png" alt="Vera AI"> Coach Vera</span><b>online</b></div>
            <div class="cg-worth-coach-message">
              <span class="cg-worth-coach-avatar"><img src="assets/vera-ai-coach.png" alt="Vera AI"></span>
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
            <form class="cg-grow-chat" action="vera.html">
              <input name="topic" placeholder="Ask Vera anything about your career...">
              <button type="submit">${icon("send")}</button>
            </form>
          </div>
        </section>

        <section class="cg-worth-timeline">
          <h2>Career Value Timetable</h2>
          <p>Vera projects how each roadmap action lifts your monthly Career Value.</p>
          <div class="cg-worth-chart">
            <svg viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="worthFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0b6d65" stop-opacity=".28"/><stop offset="100%" stop-color="#0b6d65" stop-opacity="0"/></linearGradient></defs>
              <path d="M0 278 L290 232 L570 198 L850 142 L1200 82 L1200 360 L0 360 Z" fill="url(#worthFill)"/>
              <polyline points="0,278 290,232 570,198 850,142 1200,82" fill="none" stroke="#0b5d58" stroke-width="5"/>
            </svg>
            ${[
              ["0%", "8.9k", "Today", "where you are"],
              ["24%", "RM 9.7k", "Week 3", "Complete SQL sprint"],
              ["47%", "RM 10.3k", "Week 6", "Publish portfolio case"],
              ["70%", "RM 11.2k", "Month 3", "First PM interview cycle"],
              ["98%", "RM 12.1k", "Month 6", "Fintech switch ready"]
            ].map(([left, value, label, body]) => `<div class="cg-worth-point" style="left:${left}"><strong>${value}</strong><span>${label}</span><small>${body}</small></div>`).join("")}
          </div>
        </section>

        <section class="cg-worth-section">
          <div class="cg-worth-section-head"><div><h2>Benchmark -In Malaysia</h2><p>Live Fair Pay data from KL, Penang, Johor, and remote Malaysia postings.</p></div><a href="vera.html#chat">Explain how ${icon("arrow-right")}</a></div>
          <div class="cg-worth-benchmarks">
            ${benchmarks.map(([label, value, body, tone]) => `<article class="tone-${tone}"><span>${label}</span><strong>${value}</strong><p>${body}</p></article>`).join("")}
          </div>
          <p class="cg-worth-note">${icon("info")} Career Value blends your live skill graph, roadmap velocity, and 6,400+ verified Malaysian offers. It updates every time you complete a roadmap step, ship a project, or receive an offer.</p>
        </section>
      </section>
    `);
    createIcons();
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
            <a class="btn btn-cyan" href="vera.html#chat">${icon("message-circle")} Discuss with Vera</a>
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
        { id: "market-story", title: "Practice value story", body: "Prepare a 60-second answer explaining why your market value has increased.", href: "vera.html#interview", done: false }
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

function renderAutopilot() {
  const root = qs("[data-autopilot]");
  if (!root) return;
  if (!requireAccount(root, "use Autopilot")) return;
  if (needsOnboarding(root)) return;
  const state = readState();
  if (state.session.loggedIn) {
    const impactTasks = [
      ["Reply to Grab recruiter", "Grab responds within 48h - silence past today drops your callback rate by 31%.", "+14% interview odds", "5 min", "Draft reply"],
      ["Finish Airtable take-home", "Deadline is Friday EOD. Late submissions are rejected 82% of the time.", "Keeps offer alive", "2 hrs", "Open brief"],
      ["Prep for Stripe Round 2", "Tue 2:30 PM. Your product-sense score is 68 - Vera has 3 targeted drills.", "+21% pass rate", "45 min", "Start drill"],
      ["Ask Priya for a Notion referral", "Referrals get 4.2x more responses at Notion. Priya opened your last DM.", "Unlocks 1 warm intro", "3 min", "Compose ask"]
    ];
    const pipelineColumns = [
      ["Saved", "3", [
        ["Setel", "PM - Loyalty - Kuala Lu...", "Health - Warm", 74, "Strong archetype match", "Your resume matches 88% - apply before Fri.", "Apply this week"],
        ["Carsome", "Senior PM - KL - hybrid", "Health - Warm", 61, "Competitive posting", "", "Tailor resume"]
      ]],
      ["Applied", "5", [
        ["Grab Malaysia", "PM - Payments - KL", "Health - Healthy", 92, "Recruiter engaged", "Recruiter viewed your profile yesterday.", "Reply today"],
        ["Shopee MY", "PM - Growth - KL", "Health - Slowing", 58, "Applied 4d ago", "Shopee usually replies within 7 days.", "Wait 3 more days"],
        ["BigPay", "Product Lead - KL - hyb...", "Health - Cold", 38, "No activity in 12d", "Silent past their typical 10-day window.", "Archive or nudge"]
      ]],
      ["Interviewing", "3", [
        ["Stripe", "PM - APAC - Remote MY", "Health - Healthy", 88, "Round 2 - Tue 2:30", "Most candidates fail on Round 2 case.", "Prep product sense"],
        ["Airtable", "PM - Platform - Remote", "Health - Warm", 71, "Take-home due Fri", "Take-home weighting is 60% of decision.", "Submit by EOD"]
      ]],
      ["Offer", "1", [
        ["Aerodyne", "Senior PM - Cyberjaya", "Health - Healthy", 95, "RM 1,400 below Fair Pay", "Counter with RM 10,300 - 72% acceptance.", "Negotiate on Mon"]
      ]]
    ];
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
    root.innerHTML = appShell("autopilot", `
      <section class="cg-pipeline">
        <header class="cg-pipeline-hero">
          <span class="cg-pipeline-pill">${icon("radio")} Pipeline - live</span>
          <h1>Your job search is <em>accelerating.</em><br>One move today changes the week.</h1>
          <p>Vera is tracking 12 relationships, 3 recruiters who opened your profile this week, and 2 offers within striking distance. Predicted first offer: <strong>28 Nov - 64% confidence.</strong></p>
          <a class="btn btn-primary" href="discover.html">${icon("plus")} Add application</a>
        </header>

        <section class="cg-pipeline-one-move">
          <header><span>${icon("flame")} The one move today</span><small>Beats the next-best action by 2.3x</small></header>
          <div>
            <article>
              <h2>Reply to Aisha at <em>Grab</em> before 6 PM.</h2>
              <p>She opened your last note 2 hours ago and rated your intro 4.5/5. Grab's recruiters typically ghost after 48h of silence - you have roughly 9 hours of goodwill left.</p>
              <div><span>${icon("trending-up")} +14% interview odds</span><span>${icon("clock")} 5 min</span><span>${icon("target")} 88% reply probability</span></div>
              <footer><a class="btn btn-primary" href="vera.html#chat">${icon("sparkles")} Draft with Vera</a><a class="btn btn-ghost" href="vera.html#chat">Why this one? ${icon("arrow-right")}</a></footer>
            </article>
            <aside>
              <span>Why Vera picked this</span>
              <p>${icon("check-circle-2")} Warmest signal in your pipeline right now.</p>
              <p>${icon("check-circle-2")} Grab is your highest Career Value employer - RM 10.3k band.</p>
              <p>${icon("check-circle-2")} Every hour of delay costs ~1.5% callback rate.</p>
            </aside>
          </div>
        </section>

        <section class="cg-pipeline-impact">
          <header><div><span class="cg-section-kicker">${icon("briefcase-business")} Vera - today's highest impact</span><h2>Do these four things and your week shifts.</h2></div><small>${icon("clock")} ~3 hr total</small></header>
          ${impactTasks.map(([title, body, lift, time, action], index) => `
            <article>
              <span>${index + 1}</span>
              <div><h3>${title}</h3><p>${body}</p><small><b>${icon("trending-up")} ${lift}</b><b>${icon("clock")} ${time}</b></small></div>
              <a href="vera.html#chat">${icon("sparkles")} ${action}</a>
            </article>
          `).join("")}
        </section>

        <section class="cg-pipeline-kpis">
          ${[
            ["Active applications", "12", "+3 this week", "file-text"],
            ["Expected interviews", "5", "Next 3 weeks", "video"],
            ["Expected offers", "2", "Confidence 64%", "trophy"],
            ["If you apply to 5 more matches", "3 offers", "Vera can queue them", "zap"]
          ].map(([label, value, body, ic], index) => `<article class="${index === 3 ? "dark" : ""}"><span>${label}${icon(ic)}</span><strong>${value}</strong><p>${body}</p>${index === 3 ? `<a href="discover.html">Queue matches ${icon("arrow-right")}</a>` : ""}</article>`).join("")}
        </section>

        <section class="cg-pipeline-memory">
          <span class="cg-section-kicker">${icon("history")} Vera remembers</span>
          <h2>Four weeks ago you had one conversation. Today you have twelve.</h2>
          <p>Momentum is the strongest signal in your forecast. Here's how it's been building.</p>
          <div>${memory.map(([label, value, body], index) => `<article class="${index === memory.length - 1 ? "active" : ""}"><span>${label}</span><strong>${value}</strong><p>${body}</p></article>`).join("")}</div>
          <footer>Vera - your offer probability is up <strong>+12%</strong> this week, mostly because your resume quality score jumped and Grab's recruiter engaged. If you keep this pace, expect <strong>2 offers by 28 Nov</strong> (64% confidence, widens as more evidence comes in).</footer>
        </section>

        <section class="cg-pipeline-board-section">
          <div class="cg-pipeline-board-head"><h2>Live pipeline</h2><span>Auto-scored by Vera - updated 3 min ago</span></div>
          <div class="cg-pipeline-board">
            ${pipelineColumns.map(([stage, count, cards]) => `
              <article class="cg-pipeline-column">
                <header><h3>${stage} <b>${count}</b></h3><button type="button">+</button></header>
                ${cards.map(([name, role, health, score, note, vera, next], cardIndex) => `
                  <section>
                    <div><span>${icon("building-2")}</span><h4>${name}</h4><p>${role}</p></div>
                    <small>${health} <b>${score}%</b></small>
                    <i><em style="width:${score}%"></em></i>
                    <p>${note}</p>
                    ${vera ? `<blockquote>${icon("sparkles")} ${vera}</blockquote>` : ""}
                    <footer><span>Next - ${next}</span><a href="vera.html#chat">Do it ${icon("chevron-right")}</a></footer>
                  </section>
                `).join("")}
              </article>
            `).join("")}
          </div>
        </section>

        <section class="cg-pipeline-relationships">
          <span class="cg-section-kicker">${icon("heart")} Relationships, not applications</span>
          <h2>Who to nurture. When to reach out.</h2>
          <p>Vera watches recruiter behaviour across your pipeline and tells you exactly when a warm signal is worth acting on.</p>
          ${relationships.map(([company, person, strength, signal, context, probability, action], index) => `
            <article>
              <div><h3>${company}</h3><p>${person}</p><i><em style="width:${strength}%"></em></i><small>Strength ${strength}</small></div>
              <div><p>${icon("eye")} ${signal}</p><p>${context}</p><p>${probability}</p></div>
              <a href="vera.html#chat">${icon("sparkles")} ${action}</a>
            </article>
          `).join("")}
        </section>

        <section class="cg-pipeline-interview">
          <span class="cg-section-kicker">${icon("target")} Interview journey - Stripe</span>
          <h2>You're 2 steps from an offer.</h2>
          <small>Est. decision - 18 days</small>
          <div class="cg-pipeline-steps">
            ${["Recruiter chat", "Behavioral", "Product case", "Technical", "Team match", "Offer"].map((label, index) => `<article class="${index < 2 ? "done" : index === 2 ? "current" : ""}"><b>${index < 2 ? icon("check") : index + 1}</b><i></i><span>${label}</span>${index === 2 ? "<small>You are here</small>" : ""}</article>`).join("")}
          </div>
          <div class="cg-pipeline-feedback">
            <article class="active"><span>Recruiter chat</span><p>Priya rated your intro 4.5/5 - flagged strong storytelling.</p></article>
            <article><span>Behavioral</span><p>STAR structure landed. Weak area: conflict resolution.</p></article>
            <article><span>Product case (next)</span><p>Vera has 3 targeted drills based on Stripe's rubric.</p></article>
          </div>
        </section>

        <section class="cg-pipeline-calendar-grid">
          <article class="cg-pipeline-calendar">
            <header><h2>${icon("calendar")} This week's calendar</h2><span>Synced with Google</span></header>
            ${calendar.map(([day, date, title, body, time, ic]) => `<section><time><span>${day}</span><strong>${date}</strong></time><div><h3>${title}</h3><p>${body}</p></div><small>${icon(ic)} ${time}</small></section>`).join("")}
          </article>
          <article class="cg-pipeline-followups">
            <header><h2>${icon("briefcase")} Vera's follow-up desk</h2><span>4 drafts ready</span></header>
            ${followUps.map(([name, body, action, ic]) => `<section><div><h3>${name}</h3><p>${body}</p></div><span>${icon(ic)}</span><a href="vera.html#chat">${icon("sparkles")} ${action}</a></section>`).join("")}
          </article>
        </section>

        <section class="cg-pipeline-signals">
          <span class="cg-section-kicker">${icon("sparkles")} Vera noticed</span>
          <h2>Signals you would have missed.</h2>
          <div>${signals.map(signal => `<article><span>${icon("trending-up")}</span><p>${signal}</p></article>`).join("")}</div>
        </section>

        <section class="cg-pipeline-ripple">
          <span class="cg-section-kicker">${icon("zap")} How one action ripples through CareerGo</span>
          <h2>Finish SQL in Grow. Watch every other page shift.</h2>
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
            <a class="btn btn-primary" href="vera.html#chat">${icon("sparkles")} Plan next week with Vera</a>
          </article>
          <div>
            ${[["Applications sent", "6"], ["Recruiters replied", "3"], ["Interviews booked", "2"], ["Offer probability", "+12%"], ["Biggest win", "Resume quality"], ["Biggest blocker", "SQL screening"]].map(([label, value]) => `<section><span>${label}</span><strong>${value}</strong></section>`).join("")}
          </div>
          <footer>${icon("info")} Recommended focus next week - <strong>Practice SQL interviews.</strong> Vera has a 4-day plan queued in Grow. <a href="grow.html">Open plan ${icon("arrow-right")}</a></footer>
        </section>
      </section>
    `);
    createIcons();
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
              <button class="btn btn-cyan" type="button" data-app-vera="${activeItem.job.id}">${icon("sparkles")} Ask Vera</button>
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

function renderPosts() {
  const root = qs("[data-posts]");
  if (!root) return;
  if (!requireAccount(root, "join the professional feed")) return;
  if (document.body.dataset.postsHashReady !== "true") {
    document.body.dataset.postsHashReady = "true";
    window.addEventListener("hashchange", () => {
      if (document.body.dataset.page === "posts") renderPosts();
    });
  }
  const state = readState();
  qs(".page-hero")?.classList.add("is-hidden");
  const activeTab = (location.hash || "#for-you").replace("#", "");
  const feedTabs = [
    ["for-you", "For you"],
    ["following", "Following"],
    ["milestones", "Milestones"],
    ["discussions", "Discussions"],
    ["hiring", "Hiring"]
  ];
  const trendItems = [
    { id: "pm-transitions", title: "PM transitions", count: "1.2k posts today", keywords: ["pm", "product", "transition", "switch"] },
    { id: "ai-product-roles", title: "AI product roles", count: "840 posts today", keywords: ["ai", "product", "role"] },
    { id: "interview-teardowns", title: "Interview teardowns", count: "612 posts today", keywords: ["interview", "teardown", "framework"] },
    { id: "fair-pay-reports", title: "Fair Pay reports", count: "298 posts today", keywords: ["pay", "salary", "worth", "market"] }
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
  const userPosts = (state.posts || []).filter(post => !referenceFeedPosts.some(reference => reference.id === post.id));
  const enrichedPosts = [...referenceFeedPosts, ...userPosts].map((post, index) => ({
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
    if (activeTab === "following") return ["Nadia, UX Intern", "Priya Menon", "Jason, Data Analyst"].includes(post.author);
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
  const inboxThreads = [
    ["Aisha Rahman", "Recruiter  - Grab Malaysia", "Recruiter", "Would you be free Thursday 3p...", "2h", "2", true],
    ["Ravi Iyer", "Head of Product  - Vercel", "Mentor", "Happy to look at your PM portfolio - s...", "1d", "", false],
    ["Nurul Adlina", "Hiring Manager  - Setel", "Hiring manager", "Great chat. Sharing the take...", "2d", "1", false],
    ["Shreya Kapoor", "Design -> Product  - Figma", "Connection", "Yes, I made the same jump - let m...", "4d", "", false]
  ];
  if (activeTab === "messages") {
    root.innerHTML = appShell("posts", `
      <section class="cg-messages-shell">
        <aside class="cg-inbox-panel">
          <span class="cg-overline">Messages</span>
          <h1>Inbox</h1>
          <label class="cg-inbox-search">${icon("search")}<input placeholder="Search people or messages"></label>
          <div class="cg-inbox-filters">
            ${["All", "Recruiters", "Mentors", "Hiring", "Connections"].map((label, index) => `<button class="${index === 0 ? "active" : ""}" type="button">${label}</button>`).join("")}
          </div>
          <div class="cg-thread-list">
            ${inboxThreads.map(([name, role, tag, preview, time, unread, active]) => `
              <article class="cg-thread-card ${active ? "active" : ""}">
                <span class="cg-feed-avatar">${postInitials(name)}</span>
                <div>
                  <header><strong>${name}</strong>${active ? icon("pin") : ""}<time>${time}</time></header>
                  <small>${role}</small>
                  <p><b>${tag}</b> ${preview}</p>
                </div>
                ${unread ? `<i>${unread}</i>` : ""}
              </article>
            `).join("")}
          </div>
          <p class="cg-inbox-foot">Looking to message someone new? Go to <a href="posts.html#network">Network</a>.</p>
        </aside>
        <main class="cg-message-thread">
          <header>
            <div><h2>Aisha Rahman</h2><p>Recruiter  - Grab Malaysia  - Usually replies within 2h</p></div>
            <span>Warm - 3 replies this week</span>
          </header>
          <section class="cg-chat-thread" aria-label="Conversation with Aisha Rahman">
            <p class="incoming">Hi Aarav - loved your portfolio. Would you be open to a 30-min chat about the Sr. PM role next week?</p>
            <p class="outgoing">Yes, definitely. Thursday afternoon works for me. I can also share a short teardown of GrabFood I did last month.</p>
            <p class="incoming delivered">Perfect. Would you be free Thursday 3pm for the case round?<small>${icon("check-check")} Delivered</small></p>
            <article class="cg-vera-suggests">
              <span>${icon("sparkles")} Vera suggests</span>
              <p>"Thursday 3pm works. I'll prep a short GrabFood teardown and bring 2 metric-tradeoff questions I'd love your take on."</p>
              <footer><button type="button">Use draft</button><button type="button">Rewrite</button></footer>
            </article>
          </section>
          <form class="cg-message-composer">
            <input placeholder="Write a message...">
            <button type="button">${icon("send")} Send</button>
          </form>
        </main>
      </section>
    `);
    createIcons();
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
          <button type="button" data-feed-org-chat="${org.id}">${icon("sparkles")} Ask Vera</button>
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
      : activeTab === "saved"
        ? "Everything you saved for later."
        : "Learn from people building careers like yours.";
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
          ["following", "Following", "users-round"],
          ["network", "Network", "users-round"],
          ["communities", "Communities", "hash"],
          ["trend-pm-transitions", "Trending", "flame"]
        ].map(([key, label, ic]) => `<a class="${activeTab === key || (key === "for-you" && !activeTrend && activeTab === "for-you") ? "active" : ""}" href="#${key}" data-feed-tab-link>${icon(ic)} <span>${label}</span></a>`).join("")}
        <article class="cg-feed-left-note">
          <strong>${icon("compass")} Looking for opportunities?</strong>
          <p>Companies, universities, and roles now live in <a href="discover.html">Discover</a>. Saved items are in your Profile.</p>
        </article>
      </aside>
      <main class="cg-feed-main">
        <header class="cg-feed-hero">
          <span class="cg-overline">${isDirectoryTab ? activeTab : "Feed"}</span>
          <h1>${feedTitle}</h1>
        </header>

        ${isDirectoryTab ? "" : `<form class="cg-feed-composer" data-post-form>
          <span class="cg-feed-avatar">${profileInitial}</span>
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
              <p class="cg-feed-body">${post.body}</p>
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
          ${trendItems.map(item => `<a class="cg-trend ${activeTrend === item.id ? "active" : ""}" href="#trend-${item.id}" data-feed-tab-link><strong>${item.title}</strong><span>${item.count}</span></a>`).join("")}
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
      </aside>
    </section>
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
  qsa("[data-like-post]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const post = next.posts.find(item => item.id === button.dataset.likePost);
    if (!post) return;
    post.liked = !post.liked;
    post.reactions = Math.max(0, (post.reactions || 0) + (post.liked ? 1 : -1));
    writeState(next);
    renderPosts();
  }));
  qsa("[data-save-post]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const post = next.posts.find(item => item.id === button.dataset.savePost);
    if (!post) return;
    post.saved = !post.saved;
    writeState(next);
    showToast(post.saved ? "Post saved." : "Post removed from saved.");
    renderPosts();
  }));
  qsa("[data-comment-toggle]", root).forEach(button => button.addEventListener("click", () => {
    const next = readState();
    const post = next.posts.find(item => item.id === button.dataset.commentToggle);
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
    const post = next.posts.find(item => item.id === form.dataset.commentForm);
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
    const next = readState();
    next.chat = [
      ...next.chat,
      { from: "user", text: `Help me evaluate ${org.name}` },
      { from: "vera", text: `${org.name} looks strongest for ${org.signal.toLowerCase()}. Compare culture, growth, pay, and whether its watchouts match your tolerance before making it a priority.` }
    ];
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
      <section class="glass-card"><div class="eyebrow"><span class="spark">*</span> Hiring cockpit</div><h1 class="section-title">Fit, pipeline, reputation, and action in one place.</h1><div class="metric-strip"><div class="metric"><strong>257</strong><span>Applicants</span></div><div class="metric"><strong>71</strong><span>Qualified</span></div><div class="metric"><strong>21d</strong><span>Time to hire</span></div><div class="metric"><strong>86%</strong><span>Offer acceptance</span></div></div></section>
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
      <section class="content-grid" id="roles"><div class="glass-card"><div class="section-kicker">Job Posts</div>${DATA.employerRoles.map(role => `<div class="list-card"><div class="list-card-top"><div><h3>${role.title}</h3><div class="muted small">${role.applicants} applicants - ${role.qualified} qualified</div></div><span class="pill ${role.status === "Active" ? "green" : "gold"}">${role.status}</span></div></div>`).join("")}</div><form class="glass-card form-grid" id="company-profile"><h2 class="section-title mini">Company Profile</h2><label>Company <input value="${employer.company || ""}" placeholder="Company name"></label><label>Brand note <textarea placeholder="Describe your hiring brand and candidate promise">${employer.hiringGoal || ""}</textarea></label><button class="btn btn-primary" type="button">${icon("save")} Save profile</button></form></section>
      <section class="glass-card" id="applicants"><div class="section-head"><div><div class="section-kicker">Applicants</div><h2 class="section-title mini">Review applicants by fit and pipeline stage.</h2></div><button class="btn btn-cyan">${icon("user-plus")} Invite candidates</button></div><div class="grid-3">${DATA.candidates.map(candidate => candidateCard(candidate, true)).join("")}</div></section>
      <section class="glass-card" id="pipeline"><div class="section-kicker">Hiring pipeline</div><div class="kanban">${pipeline.map(stage => `<div class="kanban-col"><h3>${stage}</h3>${DATA.candidates.filter(c => c.stage === stage || (stage === "Saved" && c.stage === "Saved")).map(c => `<div class="review-card"><strong>${c.name}</strong><p class="muted small">${c.role} - ${c.fit}% fit</p></div>`).join("") || `<div class="review-card"><p class="muted small">No candidates yet</p></div>`}</div>`).join("")}</div></section>
      <section class="content-grid" id="analytics"><div class="glass-card"><div class="section-kicker">Analytics</div><div class="metric-strip"><div class="metric"><strong>34%</strong><span>Qualified rate</span></div><div class="metric"><strong>11</strong><span>Saved candidates</span></div><div class="metric"><strong>4.2</strong><span>Candidate experience</span></div></div></div><div class="glass-card" id="settings"><div class="section-kicker">Settings</div><h2 class="section-title mini">Hiring preferences</h2><p class="muted">Set screening priorities, privacy rules, interview stages, and notification preferences.</p></div></section>
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

function initHomeBackTop() {
  const button = qs("[data-home-back-top]");
  if (!button || button.dataset.backTopReady === "true") return;
  button.dataset.backTopReady = "true";
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
  renderNavigation();
  renderFeatured();
  renderJobSeekerEntry();
  renderAboutPage();
  renderCommunityPage();
  renderJobsPage();
  renderDirectoryPage(document.body.dataset.directory || "");
  renderDashboard();
  renderVera();
  renderAuth();
  renderCandidateOnboarding();
  renderEmployerOnboarding();
  renderGrow();
  renderProfile();
  renderPublicProfile();
  renderSettings();
  renderEditCareerData();
  renderSavedItems();
  renderMarket();
  renderAutopilot();
  renderPosts();
  renderEmployerPortal();
  renderEmployers();
  renderComparison();
  renderSiteFooter();
  initFeaturedRolesCarousel();
  initResearchMarquee();
  initHomeMetricCountUp();
  initGlobalNumberAnimations();
  initGlobalInteractionAnimations();
  initHomeStageAnimation();
  initComparisonTableAnimation();
  initHomeBackTop();
  bindGlobalActions();
  createIcons();
  initSidebarToggle();
  initWorkspaceRailTooltips();
  initWorkspaceRailScrollSync();
}

document.addEventListener("DOMContentLoaded", init);
