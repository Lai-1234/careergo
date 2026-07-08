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
      verified: true,
      type: "Company",
      industry: "Banking",
      location: "Kuala Lumpur",
      officeLocations: ["Kuala Lumpur", "Penang", "Johor"],
      founded: 1960,
      website: "maybank2u.com.my",
      followers: 8600,
      publicProfileStatus: "Live",
      lastUpdated: "2 days ago",
      size: "10,000+ employees",
      rating: 4.4,
      reviews: 1284,
      open: 18,
      signal: "Stable graduate pathway",
      salary: "RM 4.2k - 12k / month",
      tags: ["Stable", "Graduate friendly", "Large teams"],
      summary: "Malaysia's largest financial group with strong graduate programs, structured teams, and broad digital transformation work.",
      scores: { culture: 4.2, growth: 4.3, pay: 4.1, balance: 4.0 },
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Onsite / Hybrid",
      hiringDifficulty: "Medium",
      averageRequirements: { education: "Diploma/Degree depending on role", cgpa: "Usually 3.0+ preferred for graduate programs", experience: "Fresh graduate to 2 years for junior roles", commonSkills: ["Communication", "Excel", "Teamwork", "Problem solving"], techSkills: ["SQL", "Excel/VBA", "Basic data analysis"], englishRequirement: "Good written and spoken English", portfolio: "Not required for most roles", internshipPreferred: "Advantageous but not mandatory", certifications: "Professional banking/finance certifications advantageous" },
      hiringProcess: { steps: ["Application review", "Online assessment", "HR interview", "Manager interview", "Final interview (graduate programs)"], avgResponseTime: "2-4 weeks", difficulty: "Medium", assessmentNote: "Online assessment and assessment centre for graduate programs" },
      salaryBenefits: { freshGradSalary: "RM 3.2k - 4.5k / month", internshipAllowance: "RM 800 - 1.2k / month", bonus: "Annual performance bonus", medical: "Comprehensive medical coverage", training: "Structured graduate training program", flexibleWork: "Hybrid for eligible roles", leave: "Standard + study leave for certifications" },
      careerGrowth: { trainingQuality: "Strong structured training", promotionPath: "Clear grade-based progression", graduateProgram: "Available (Maybank Management Trainee)", mentorship: "Assigned mentors for new joiners", internalTransfer: "Common across departments", learningOpportunities: "Internal academy and certification support" },
      workCulture: { pace: "Steady, structured", teamStyle: "Large teams, defined roles", workLifeBalance: "Balanced, standard hours", managementStyle: "Hierarchical, process-driven", collaboration: "Cross-department coordination common", overtimeSignal: "Occasional during reporting periods", reviewThemes: "Stable, good for early career, slower pace" },
      veraNote: "Maybank is strong for fresh graduates who want a structured early-career path, stable environment, and broad banking exposure. Watch for slower approval processes and large-company hierarchy.",
      companyReviews: [
        { id: "cr-mb-1", title: "Solid first job with real structure", author: "Graduate Trainee", role: "Management Trainee", date: "May 2026", rating: 4.6, body: "The rotation program gave me exposure to multiple departments. Approvals can be slow but the learning is real." },
        { id: "cr-mb-2", title: "Good stability, steady pace", author: "Data Analyst", role: "Data Analyst", date: "Mar 2026", rating: 4.3, body: "Good work-life balance and supportive team, though systems can feel dated." }
      ],
      roles: [
        { id: "mb-mt", title: "Management Trainee", department: "Graduate Program", salaryRange: "RM 3.5k - 5k / month", employmentType: "Full-time (Rotational)", location: "Kuala Lumpur", workMode: "Onsite / Hybrid", experienceLevel: "Fresh graduate", educationRequirement: "Degree in any discipline", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Leadership potential", "Communication", "Adaptability"], preferredSkills: ["Prior internship experience", "Extracurricular leadership roles"], tools: ["Excel", "PowerPoint"], responsibilities: ["Rotate across business units", "Complete structured training modules", "Take on project assignments", "Build cross-functional experience"], hiringProcess: "Online assessment, assessment centre, panel interview", careerPath: "Management Trainee -> Executive -> Manager (post-rotation placement)", benefits: ["Structured mentorship", "Rotational exposure", "Fast-track promotion potential"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Highly competitive intake", "Placement after rotation is not guaranteed to be your first choice"] },
        { id: "mb-da", title: "Data Analyst", department: "Analytics", salaryRange: "RM 4k - 7k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Statistics, Computer Science, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["SQL", "Data visualization", "Analytical thinking"], preferredSkills: ["Python/R", "Dashboarding tools (Power BI/Tableau)", "Statistics"], tools: ["Excel", "SQL", "Power BI / Tableau"], responsibilities: ["Analyze business data and trends", "Build dashboards and reports", "Support data-driven decision making", "Work with stakeholders to define metrics"], hiringProcess: "Online assessment (SQL/case study), interview with hiring manager", careerPath: "Data Analyst -> Senior Analyst -> Analytics Manager / Data Scientist", benefits: ["Medical coverage", "Training allowance", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study round can be competitive", "Requires strong attention to detail"] },
        { id: "mb-fe", title: "Finance Executive", department: "Finance", salaryRange: "RM 3.5k - 6k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Finance, Accounting, or related field", cgpaRequirement: "3.2+ preferred", requiredSkills: ["Financial reporting", "Attention to detail", "Excel proficiency"], preferredSkills: ["Accounting software", "Basic taxation knowledge", "ACCA/CPA progress"], tools: ["Excel", "SAP/accounting ERP", "PowerPoint"], responsibilities: ["Support financial reporting and reconciliation", "Assist with budgeting and forecasting", "Ensure compliance with financial policies", "Prepare month-end reports"], hiringProcess: "Online assessment, interview with finance manager", careerPath: "Finance Executive -> Senior Executive -> Finance Manager", benefits: ["Medical coverage", "Study support for professional certification", "Performance bonus"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Month-end periods can be demanding", "High attention to detail required"] },
        { id: "mb-coa", title: "Customer Operations Associate", department: "Customer Operations", salaryRange: "RM 2.8k - 4k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in any discipline", cgpaRequirement: "Not strictly required", requiredSkills: ["Communication", "Problem solving", "Patience"], preferredSkills: ["CRM tools experience", "Multilingual ability", "Process improvement mindset"], tools: ["CRM/ticketing systems", "Excel"], responsibilities: ["Handle customer inquiries and issues", "Maintain service quality standards", "Escalate complex cases appropriately", "Support process improvement initiatives"], hiringProcess: "Interview with operations manager, situational assessment", careerPath: "Associate -> Senior Associate -> Team Lead", benefits: ["Medical coverage", "Shift allowance (if applicable)", "Performance incentives"], status: "Open", hiringDifficulty: "Easy", watchouts: ["May involve shift work", "High interaction volume during peak periods"] }
      ],
      highlights: ["Strong training and rotation programs", "Good brand value for early career", "Structured promotion paths"],
      watchouts: ["Large-company pace can feel slower", "Some teams report layered approvals"],
      profileGaps: [
        "Average interview timeline has not been confirmed for Finance Executive",
        "No team or workplace media uploaded",
        "Benefits have not been updated in 14 months",
        "Remote-work policy is unclear for 3 teams"
      ],
      candidateInterest: {
        profileViews: { value: 12480, period: "Last 30 days", trend: "+8% vs previous period" },
        saved: { value: 1284, percentOfViewers: 10.3, trend: "+3% vs previous period" },
        roleClicks: { value: 3860, trend: "+5% vs previous period" },
        applicationStarts: { value: 1140, trend: "-2% vs previous period" }
      },
      reputationSummary: {
        strongestSignal: { label: "Career growth", value: "4.3 / 5" },
        mostCommonPositive: "Structured graduate development",
        biggestQuestion: "Salary transparency",
        mostCommonWatchout: "Slow approval processes",
        basis: "Based on 1,285 employee reviews and candidate behaviour."
      },
      veraCompanyRead: {
        summary: "Maybank is landing strongest with graduates and early-career candidates who value structured development, stability and a recognised brand. Candidate interest drops when salary ranges and team-level work style are unclear. The highest-impact improvement would be publishing salary information and clearer hiring timelines for your most-viewed graduate roles.",
        whatIsWorking: ["Structured graduate programs", "Strong early-career brand", "Broad learning opportunities"],
        whatMayBeLimiting: ["Unclear role-level salary information", "Team-level work style varies", "Slower candidate response expectations"],
        nextBestImprovement: "Publish salary ranges and expected hiring timelines for your top 5 most-viewed roles."
      }
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
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Hybrid",
      hiringDifficulty: "Hard",
      averageRequirements: { education: "Degree in Computer Science, Engineering, Business, or related field", cgpa: "3.2+ preferred for competitive roles", experience: "Fresh graduate to 3 years", commonSkills: ["Problem solving", "Communication", "Ownership mindset", "Fast learning"], techSkills: ["SQL", "Python/Java", "Data analysis", "Cloud basics"], englishRequirement: "Strong written and spoken English", portfolio: "Helpful for tech/product roles", internshipPreferred: "Strongly preferred", certifications: "Not required, skills-based hiring" },
      hiringProcess: { steps: ["Application review", "Online assessment", "Technical/case interview", "Hiring manager interview", "Final panel"], avgResponseTime: "2-3 weeks", difficulty: "Hard", assessmentNote: "Technical assessment for engineering and analytics roles" },
      salaryBenefits: { freshGradSalary: "RM 4.5k - 6.5k / month", internshipAllowance: "RM 1.5k - 2.5k / month", bonus: "Performance bonus + equity for some roles", medical: "Comprehensive medical + wellness benefits", training: "GrabAcademy learning platform", flexibleWork: "Hybrid, flexible hours", leave: "Generous annual and wellness leave" },
      careerGrowth: { trainingQuality: "Strong, fast-paced learning", promotionPath: "Merit-based, can be fast for high performers", graduateProgram: "Available for select functions", mentorship: "Informal but accessible", internalTransfer: "Common across regional offices", learningOpportunities: "High exposure to cross-functional projects" },
      workCulture: { pace: "Fast, high-growth", teamStyle: "Small, agile squads", workLifeBalance: "Can be demanding during launches", managementStyle: "Flat, ownership-driven", collaboration: "High cross-functional collaboration", overtimeSignal: "Common during major launches", reviewThemes: "High growth, high expectations, competitive" },
      veraNote: "Grab is a strong choice for graduates who want fast growth and regional exposure in tech/product roles. Expect a competitive hiring process and periods of high workload around major launches.",
      companyReviews: [
        { id: "cr-gr-1", title: "Fast learning curve, real ownership", author: "Software Engineer", role: "Software Engineer", date: "Jun 2026", rating: 4.2, body: "You get real ownership early, but expect crunch during major launches." },
        { id: "cr-gr-2", title: "Great for career growth", author: "Business Analyst", role: "Business Analyst", date: "Apr 2026", rating: 4.0, body: "Learned more in a year here than in my previous role, but it's intense." }
      ],
      roles: [
        { id: "gr-se", title: "Software Engineer", department: "Technology", salaryRange: "RM 5k - 10k / month", employmentType: "Full-time", location: "Petaling Jaya", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in Computer Science or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Programming fundamentals", "Data structures & algorithms", "Problem solving"], preferredSkills: ["Git", "REST APIs", "Agile methodology"], tools: ["Java/Python/JavaScript", "SQL", "Cloud basics (AWS/Azure)"], responsibilities: ["Build and maintain product features", "Write clean, tested code", "Collaborate with cross-functional teams", "Participate in code reviews"], hiringProcess: "Online assessment, technical interview, hiring manager interview", careerPath: "Software Engineer -> Senior Engineer -> Tech Lead / Engineering Manager", benefits: ["Medical coverage", "Performance bonus", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Technical assessment can be challenging for freshers", "Fast-paced delivery expectations"] },
        { id: "gr-da", title: "Data Analyst", department: "Analytics", salaryRange: "RM 4.5k - 8k / month", employmentType: "Full-time", location: "Petaling Jaya", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Statistics, Computer Science, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["SQL", "Data visualization", "Analytical thinking"], preferredSkills: ["Python/R", "Dashboarding tools (Power BI/Tableau)", "Statistics"], tools: ["Excel", "SQL", "Power BI / Tableau"], responsibilities: ["Analyze business data and trends", "Build dashboards and reports", "Support data-driven decision making", "Work with stakeholders to define metrics"], hiringProcess: "Online assessment (SQL/case study), interview with hiring manager", careerPath: "Data Analyst -> Senior Analyst -> Analytics Manager / Data Scientist", benefits: ["Medical coverage", "Training allowance", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study round can be competitive", "Requires strong attention to detail"] },
        { id: "gr-pmi", title: "Product Manager Intern", department: "Product", salaryRange: "RM 2.5k - 3.5k / month", employmentType: "Internship", location: "Petaling Jaya", workMode: "Hybrid", experienceLevel: "Internship", educationRequirement: "Penultimate/final year student in any discipline", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Curiosity about products"], preferredSkills: ["Prior product/UX exposure", "Basic data analysis", "Wireframing tools"], tools: ["Figma basics", "Analytics dashboards", "Project tracking tools"], responsibilities: ["Support product research and user feedback analysis", "Assist in feature specification", "Coordinate with design and engineering teams", "Present findings to stakeholders"], hiringProcess: "Case study interview, team fit interview", careerPath: "Intern -> Associate Product Manager (return offer possible)", benefits: ["Internship allowance", "Mentorship", "Potential return offer"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Highly competitive intern intake", "Fixed-term, return offer not guaranteed"] },
        { id: "gr-ba", title: "Business Analyst", department: "Strategy & Operations", salaryRange: "RM 4k - 7k / month", employmentType: "Full-time", location: "Petaling Jaya", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Business, Economics, or related field", cgpaRequirement: "3.2+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Stakeholder management"], preferredSkills: ["Excel modeling", "Process mapping", "Presentation skills"], tools: ["Excel", "PowerPoint", "SQL basics"], responsibilities: ["Support business process analysis", "Prepare reports and presentations", "Coordinate with cross-functional teams", "Identify improvement opportunities"], hiringProcess: "Case study interview, panel interview", careerPath: "Business Analyst -> Senior Analyst -> Manager", benefits: ["Medical coverage", "Performance bonus", "Structured training"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study rounds can be competitive", "Cross-team coordination can be demanding"] }
      ],
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
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Onsite / Hybrid",
      hiringDifficulty: "Medium",
      averageRequirements: { education: "Diploma/Degree depending on role", cgpa: "3.0+ preferred for graduate programs", experience: "Fresh graduate to 2 years", commonSkills: ["Communication", "Excel", "Analytical thinking", "Teamwork"], techSkills: ["SQL basics", "Excel", "Digital banking tools"], englishRequirement: "Good written and spoken English", portfolio: "Not required for most roles", internshipPreferred: "Advantageous", certifications: "Banking/finance certifications advantageous" },
      hiringProcess: { steps: ["Application review", "Online assessment", "HR interview", "Manager interview"], avgResponseTime: "2-4 weeks", difficulty: "Medium", assessmentNote: "Online assessment for graduate programs" },
      salaryBenefits: { freshGradSalary: "RM 3k - 4.5k / month", internshipAllowance: "RM 700 - 1.1k / month", bonus: "Annual performance bonus", medical: "Comprehensive medical coverage", training: "Structured onboarding and mentorship", flexibleWork: "Hybrid for eligible roles", leave: "Standard annual leave" },
      careerGrowth: { trainingQuality: "Good structured training", promotionPath: "Grade-based progression", graduateProgram: "Available (CIMB Complete)", mentorship: "Assigned mentors in graduate program", internalTransfer: "Available across ASEAN offices", learningOpportunities: "Internal training academy" },
      workCulture: { pace: "Steady", teamStyle: "Structured, department-based", workLifeBalance: "Balanced", managementStyle: "Process-oriented, varies by division", collaboration: "Regional coordination", overtimeSignal: "Occasional during reporting periods", reviewThemes: "Good mentorship, process speed varies by team" },
      veraNote: "CIMB offers a solid entry point into banking with good mentorship for first roles. Innovation speed and process efficiency can vary noticeably between divisions.",
      companyReviews: [
        { id: "cr-cb-1", title: "Good mentorship for first job", author: "Graduate Trainee", role: "Management Trainee", date: "Feb 2026", rating: 4.1, body: "My manager was very supportive. Some systems and processes feel outdated though." }
      ],
      roles: [
        { id: "cb-mt", title: "Management Trainee", department: "Graduate Program", salaryRange: "RM 3.5k - 5k / month", employmentType: "Full-time (Rotational)", location: "Kuala Lumpur", workMode: "Onsite / Hybrid", experienceLevel: "Fresh graduate", educationRequirement: "Degree in any discipline", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Leadership potential", "Communication", "Adaptability"], preferredSkills: ["Prior internship experience", "Extracurricular leadership roles"], tools: ["Excel", "PowerPoint"], responsibilities: ["Rotate across business units", "Complete structured training modules", "Take on project assignments", "Build cross-functional experience"], hiringProcess: "Online assessment, assessment centre, panel interview", careerPath: "Management Trainee -> Executive -> Manager (post-rotation placement)", benefits: ["Structured mentorship", "Rotational exposure", "Fast-track promotion potential"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Highly competitive intake", "Placement after rotation is not guaranteed to be your first choice"] },
        { id: "cb-fe", title: "Finance Executive", department: "Finance", salaryRange: "RM 3.5k - 6k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Finance, Accounting, or related field", cgpaRequirement: "3.2+ preferred", requiredSkills: ["Financial reporting", "Attention to detail", "Excel proficiency"], preferredSkills: ["Accounting software", "Basic taxation knowledge", "ACCA/CPA progress"], tools: ["Excel", "SAP/accounting ERP", "PowerPoint"], responsibilities: ["Support financial reporting and reconciliation", "Assist with budgeting and forecasting", "Ensure compliance with financial policies", "Prepare month-end reports"], hiringProcess: "Online assessment, interview with finance manager", careerPath: "Finance Executive -> Senior Executive -> Finance Manager", benefits: ["Medical coverage", "Study support for professional certification", "Performance bonus"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Month-end periods can be demanding", "High attention to detail required"] },
        { id: "cb-da", title: "Data Analyst", department: "Analytics", salaryRange: "RM 4k - 7k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Statistics, Computer Science, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["SQL", "Data visualization", "Analytical thinking"], preferredSkills: ["Python/R", "Dashboarding tools (Power BI/Tableau)", "Statistics"], tools: ["Excel", "SQL", "Power BI / Tableau"], responsibilities: ["Analyze business data and trends", "Build dashboards and reports", "Support data-driven decision making", "Work with stakeholders to define metrics"], hiringProcess: "Online assessment (SQL/case study), interview with hiring manager", careerPath: "Data Analyst -> Senior Analyst -> Analytics Manager / Data Scientist", benefits: ["Medical coverage", "Training allowance", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study round can be competitive", "Requires strong attention to detail"] },
        { id: "cb-hr", title: "HR Executive", department: "Human Resources", salaryRange: "RM 3k - 5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Human Resources, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Communication", "Organization", "Confidentiality"], preferredSkills: ["HRIS systems", "Employment law basics", "Recruitment experience"], tools: ["HRIS/payroll systems", "Excel", "Applicant tracking systems"], responsibilities: ["Support recruitment and onboarding", "Maintain employee records", "Assist with HR programs and events", "Support employee relations matters"], hiringProcess: "Interview with HR manager, panel discussion", careerPath: "HR Executive -> Senior Executive -> HR Business Partner", benefits: ["Medical coverage", "Training and development programs", "Flexible work arrangement"], status: "Open", hiringDifficulty: "Easy", watchouts: ["Handles sensitive/confidential matters", "Can involve cross-department coordination"] }
      ],
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
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Hybrid",
      hiringDifficulty: "Medium",
      averageRequirements: { education: "Degree in Computer Science, IT, Engineering, or related field", cgpa: "3.2+ preferred", experience: "Fresh graduate to 3 years", commonSkills: ["Problem solving", "Communication", "Analytical thinking"], techSkills: ["SQL", "Python", "Cloud platforms", "Cybersecurity basics"], englishRequirement: "Good written and spoken English", portfolio: "Helpful for technical roles", internshipPreferred: "Advantageous", certifications: "Cloud/security certifications advantageous" },
      hiringProcess: { steps: ["Application review", "Online assessment", "Technical interview", "Hiring manager interview"], avgResponseTime: "2-3 weeks", difficulty: "Medium", assessmentNote: "Technical assessment for engineering and security roles" },
      salaryBenefits: { freshGradSalary: "RM 4k - 5.5k / month", internshipAllowance: "RM 1.2k - 1.8k / month", bonus: "Performance bonus", medical: "Comprehensive medical benefits", training: "Structured technical upskilling programs", flexibleWork: "Hybrid work arrangement", leave: "Standard + wellness leave" },
      careerGrowth: { trainingQuality: "Strong technical training", promotionPath: "Merit-based progression", graduateProgram: "Available for technical tracks", mentorship: "Assigned technical mentors", internalTransfer: "Available across enterprise tech teams", learningOpportunities: "Exposure to enterprise-scale systems" },
      workCulture: { pace: "Steady to moderate", teamStyle: "Cross-functional enterprise teams", workLifeBalance: "Balanced", managementStyle: "Structured, stakeholder-heavy", collaboration: "High, across business and tech teams", overtimeSignal: "Occasional during major rollouts", reviewThemes: "Good technical learning, complex stakeholder environment" },
      veraNote: "Petronas Digital is a good fit for graduates seeking enterprise-scale technical exposure with stable benefits. Expect a complex stakeholder environment and a learning curve around domain knowledge.",
      companyReviews: [
        { id: "cr-pd-1", title: "Great technical exposure", author: "Software Engineer", role: "Software Engineer", date: "Apr 2026", rating: 4.4, body: "Good mix of enterprise systems and modern tech stack. Stakeholder alignment takes time to learn." }
      ],
      roles: [
        { id: "pd-se", title: "Software Engineer", department: "Technology", salaryRange: "RM 5k - 9k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in Computer Science or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Programming fundamentals", "Data structures & algorithms", "Problem solving"], preferredSkills: ["Git", "REST APIs", "Agile methodology"], tools: ["Java/Python/JavaScript", "SQL", "Cloud basics (AWS/Azure)"], responsibilities: ["Build and maintain product features", "Write clean, tested code", "Collaborate with cross-functional teams", "Participate in code reviews"], hiringProcess: "Online assessment, technical interview, hiring manager interview", careerPath: "Software Engineer -> Senior Engineer -> Tech Lead / Engineering Manager", benefits: ["Medical coverage", "Performance bonus", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Technical assessment can be challenging for freshers", "Fast-paced delivery expectations"] },
        { id: "pd-cyb", title: "Cybersecurity Analyst", department: "IT Security", salaryRange: "RM 5k - 9k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Cybersecurity, Computer Science, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Network security fundamentals", "Risk assessment", "Analytical thinking"], preferredSkills: ["Security certifications (CEH/Security+)", "Incident response", "Scripting"], tools: ["SIEM tools", "Firewalls", "Vulnerability scanners"], responsibilities: ["Monitor systems for security threats", "Support incident response", "Conduct risk assessments", "Maintain security documentation"], hiringProcess: "Technical assessment, panel interview", careerPath: "Cybersecurity Analyst -> Senior Analyst -> Security Lead", benefits: ["Medical coverage", "Certification sponsorship", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["On-call responsibilities may apply", "Requires continuous upskilling"] },
        { id: "pd-da", title: "Data Analyst", department: "Analytics", salaryRange: "RM 4.5k - 8k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Statistics, Computer Science, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["SQL", "Data visualization", "Analytical thinking"], preferredSkills: ["Python/R", "Dashboarding tools (Power BI/Tableau)", "Statistics"], tools: ["Excel", "SQL", "Power BI / Tableau"], responsibilities: ["Analyze business data and trends", "Build dashboards and reports", "Support data-driven decision making", "Work with stakeholders to define metrics"], hiringProcess: "Online assessment (SQL/case study), interview with hiring manager", careerPath: "Data Analyst -> Senior Analyst -> Analytics Manager / Data Scientist", benefits: ["Medical coverage", "Training allowance", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study round can be competitive", "Requires strong attention to detail"] },
        { id: "pd-ba", title: "Business Analyst", department: "Strategy & Operations", salaryRange: "RM 4.5k - 7.5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Business, Economics, or related field", cgpaRequirement: "3.2+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Stakeholder management"], preferredSkills: ["Excel modeling", "Process mapping", "Presentation skills"], tools: ["Excel", "PowerPoint", "SQL basics"], responsibilities: ["Support business process analysis", "Prepare reports and presentations", "Coordinate with cross-functional teams", "Identify improvement opportunities"], hiringProcess: "Case study interview, panel interview", careerPath: "Business Analyst -> Senior Analyst -> Manager", benefits: ["Medical coverage", "Performance bonus", "Structured training"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study rounds can be competitive", "Cross-team coordination can be demanding"] }
      ],
      highlights: ["High-impact enterprise problems", "Good technical learning curve", "Stable benefits"],
      watchouts: ["Complex stakeholder environment", "Domain learning takes time"]
    },
    {
      id: "airasia",
      name: "AirAsia",
      type: "Company",
      industry: "Aviation & Travel Tech",
      location: "Sepang",
      size: "10,000+ employees",
      rating: 4.0,
      reviews: 512,
      open: 10,
      signal: "Dynamic travel/aviation exposure",
      salary: "RM 3k - 9k / month",
      tags: ["Fast-paced", "Travel perks", "Dynamic"],
      summary: "Leading Southeast Asian low-cost airline and travel tech group with fast-moving marketing, operations, and digital teams.",
      scores: { culture: 3.9, growth: 3.9, pay: 3.7, balance: 3.6 },
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Onsite / Hybrid",
      hiringDifficulty: "Easy",
      averageRequirements: { education: "Diploma/Degree in any discipline", cgpa: "Not strictly required for operations roles", experience: "Fresh graduate to 2 years", commonSkills: ["Communication", "Adaptability", "Customer focus"], techSkills: ["Excel", "CRM/booking systems basics"], englishRequirement: "Good spoken and written English", portfolio: "Helpful for marketing roles", internshipPreferred: "Advantageous", certifications: "Not typically required" },
      hiringProcess: { steps: ["Application review", "HR interview", "Department interview"], avgResponseTime: "1-3 weeks", difficulty: "Easy", assessmentNote: "Assessment mainly for marketing/analyst roles" },
      salaryBenefits: { freshGradSalary: "RM 2.8k - 4k / month", internshipAllowance: "RM 700 - 1k / month", bonus: "Performance-linked bonus", medical: "Medical coverage + travel benefits", training: "On-the-job training", flexibleWork: "Hybrid for office-based roles", leave: "Standard + staff travel perks" },
      careerGrowth: { trainingQuality: "Practical, on-the-job focus", promotionPath: "Available but pace varies by department", graduateProgram: "Limited structured program", mentorship: "Informal", internalTransfer: "Possible across departments", learningOpportunities: "Exposure to fast-moving travel/aviation industry" },
      workCulture: { pace: "Fast, dynamic", teamStyle: "Lean teams", workLifeBalance: "Can vary by department", managementStyle: "Informal, results-driven", collaboration: "Cross-department coordination common", overtimeSignal: "Occasional during peak travel seasons", reviewThemes: "Dynamic industry exposure, staff travel perks valued" },
      veraNote: "AirAsia suits graduates who want fast-paced exposure to the travel/aviation industry and don't mind a leaner, less structured environment. Staff travel perks are a notable plus.",
      companyReviews: [
        { id: "cr-aa-1", title: "Dynamic but rewarding", author: "Marketing Executive", role: "Marketing Executive", date: "Mar 2026", rating: 4.0, body: "Fast-paced and creative freedom, plus the travel perks are great." }
      ],
      roles: [
        { id: "aa-me", title: "Marketing Executive", department: "Marketing", salaryRange: "RM 3k - 5k / month", employmentType: "Full-time", location: "Sepang", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Marketing, Communications, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Communication", "Content creation", "Creativity"], preferredSkills: ["Social media management", "Basic design tools", "Campaign analytics"], tools: ["Canva/Adobe basics", "Social media platforms", "Excel"], responsibilities: ["Support marketing campaigns", "Create content for digital channels", "Track campaign performance", "Coordinate with agencies/vendors"], hiringProcess: "Portfolio/case review, interview with hiring manager", careerPath: "Marketing Executive -> Senior Executive -> Marketing Manager", benefits: ["Medical coverage", "Performance bonus", "Flexible work arrangement"], status: "Open", hiringDifficulty: "Easy", watchouts: ["Fast-paced campaign deadlines", "Creative feedback cycles can be demanding"] },
        { id: "aa-coa", title: "Customer Operations Associate", department: "Customer Operations", salaryRange: "RM 2.8k - 4k / month", employmentType: "Full-time", location: "Sepang", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in any discipline", cgpaRequirement: "Not strictly required", requiredSkills: ["Communication", "Problem solving", "Patience"], preferredSkills: ["CRM tools experience", "Multilingual ability", "Process improvement mindset"], tools: ["CRM/ticketing systems", "Excel"], responsibilities: ["Handle customer inquiries and issues", "Maintain service quality standards", "Escalate complex cases appropriately", "Support process improvement initiatives"], hiringProcess: "Interview with operations manager, situational assessment", careerPath: "Associate -> Senior Associate -> Team Lead", benefits: ["Medical coverage", "Staff travel perks", "Performance incentives"], status: "Open", hiringDifficulty: "Easy", watchouts: ["May involve shift work", "High interaction volume during peak periods"] },
        { id: "aa-ba", title: "Business Analyst", department: "Strategy & Operations", salaryRange: "RM 3.5k - 6k / month", employmentType: "Full-time", location: "Sepang", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Business, Economics, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Stakeholder management"], preferredSkills: ["Excel modeling", "Process mapping", "Presentation skills"], tools: ["Excel", "PowerPoint", "SQL basics"], responsibilities: ["Support business process analysis", "Prepare reports and presentations", "Coordinate with cross-functional teams", "Identify improvement opportunities"], hiringProcess: "Case study interview, panel interview", careerPath: "Business Analyst -> Senior Analyst -> Manager", benefits: ["Medical coverage", "Staff travel perks", "Structured training"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study rounds can be competitive", "Cross-team coordination can be demanding"] },
        { id: "aa-hr", title: "HR Executive", department: "Human Resources", salaryRange: "RM 3k - 5k / month", employmentType: "Full-time", location: "Sepang", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Human Resources, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Communication", "Organization", "Confidentiality"], preferredSkills: ["HRIS systems", "Employment law basics", "Recruitment experience"], tools: ["HRIS/payroll systems", "Excel", "Applicant tracking systems"], responsibilities: ["Support recruitment and onboarding", "Maintain employee records", "Assist with HR programs and events", "Support employee relations matters"], hiringProcess: "Interview with HR manager, panel discussion", careerPath: "HR Executive -> Senior Executive -> HR Business Partner", benefits: ["Medical coverage", "Staff travel perks", "Flexible work arrangement"], status: "Open", hiringDifficulty: "Easy", watchouts: ["Handles sensitive/confidential matters", "Can involve cross-department coordination"] }
      ],
      highlights: ["Dynamic travel industry exposure", "Staff travel perks", "Fast decision-making culture"],
      watchouts: ["Less structured than banks/MNCs", "Balance can vary by department"]
    },
    {
      id: "shopee",
      name: "Shopee",
      type: "Company",
      industry: "E-commerce",
      location: "Kuala Lumpur",
      size: "5,000+ employees",
      rating: 4.0,
      reviews: 678,
      open: 15,
      signal: "High-growth e-commerce exposure",
      salary: "RM 4.5k - 14k / month",
      tags: ["Fast paced", "E-commerce", "Regional"],
      summary: "Leading Southeast Asian e-commerce platform with fast-paced product, marketing, and operations teams.",
      scores: { culture: 3.8, growth: 4.4, pay: 4.1, balance: 3.4 },
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Onsite / Hybrid",
      hiringDifficulty: "Hard",
      averageRequirements: { education: "Degree in Computer Science, Business, Marketing, or related field", cgpa: "3.3+ preferred for competitive roles", experience: "Fresh graduate to 3 years", commonSkills: ["Fast learning", "Ownership", "Communication", "Data-driven thinking"], techSkills: ["SQL", "Python/Java", "E-commerce analytics tools"], englishRequirement: "Strong written and spoken English", portfolio: "Helpful for product/marketing roles", internshipPreferred: "Strongly preferred", certifications: "Not required, skills-based" },
      hiringProcess: { steps: ["Application review", "Online assessment", "Case/technical interview", "Hiring manager interview", "Final interview"], avgResponseTime: "2-3 weeks", difficulty: "Hard", assessmentNote: "Case study and technical assessment rounds" },
      salaryBenefits: { freshGradSalary: "RM 4.5k - 6.5k / month", internshipAllowance: "RM 1.5k - 2.2k / month", bonus: "Performance bonus", medical: "Comprehensive medical benefits", training: "Structured onboarding and rotational exposure", flexibleWork: "Hybrid, fast-paced office culture", leave: "Standard annual leave" },
      careerGrowth: { trainingQuality: "Strong, fast-paced", promotionPath: "Merit-based, can be rapid", graduateProgram: "Available (Shopee graduate tracks)", mentorship: "Structured buddy system", internalTransfer: "Common across regional teams", learningOpportunities: "High exposure to e-commerce scale challenges" },
      workCulture: { pace: "Very fast", teamStyle: "Lean, high-accountability teams", workLifeBalance: "Demanding, especially during campaigns", managementStyle: "Results-driven, data-heavy", collaboration: "High, cross-regional", overtimeSignal: "Common during major sales campaigns", reviewThemes: "High growth, intense pace, competitive culture" },
      veraNote: "Shopee offers strong growth and e-commerce exposure for graduates who thrive in a fast, competitive environment. Expect intense workload spikes around major sales campaigns.",
      companyReviews: [
        { id: "cr-sp-1", title: "Steep learning curve, high reward", author: "Business Analyst", role: "Business Analyst", date: "May 2026", rating: 3.9, body: "Campaign periods are intense but you learn fast and get real ownership." }
      ],
      roles: [
        { id: "sp-se", title: "Software Engineer", department: "Technology", salaryRange: "RM 5.5k - 10k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in Computer Science or related field", cgpaRequirement: "3.2+ preferred", requiredSkills: ["Programming fundamentals", "Data structures & algorithms", "Problem solving"], preferredSkills: ["Git", "REST APIs", "Agile methodology"], tools: ["Java/Python/JavaScript", "SQL", "Cloud basics (AWS/Azure)"], responsibilities: ["Build and maintain product features", "Write clean, tested code", "Collaborate with cross-functional teams", "Participate in code reviews"], hiringProcess: "Online assessment, technical interview, hiring manager interview", careerPath: "Software Engineer -> Senior Engineer -> Tech Lead / Engineering Manager", benefits: ["Medical coverage", "Performance bonus", "Hybrid work options"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Technical assessment can be challenging for freshers", "Fast-paced delivery expectations"] },
        { id: "sp-me", title: "Marketing Executive", department: "Marketing", salaryRange: "RM 3.5k - 6k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Marketing, Communications, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Communication", "Content creation", "Creativity"], preferredSkills: ["Social media management", "Basic design tools", "Campaign analytics"], tools: ["Canva/Adobe basics", "Social media platforms", "Excel"], responsibilities: ["Support marketing campaigns", "Create content for digital channels", "Track campaign performance", "Coordinate with agencies/vendors"], hiringProcess: "Portfolio/case review, interview with hiring manager", careerPath: "Marketing Executive -> Senior Executive -> Marketing Manager", benefits: ["Medical coverage", "Performance bonus", "Flexible work arrangement"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Fast-paced campaign deadlines", "Creative feedback cycles can be demanding"] },
        { id: "sp-ba", title: "Business Analyst", department: "Strategy & Operations", salaryRange: "RM 4.5k - 8k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Business, Economics, or related field", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Stakeholder management"], preferredSkills: ["Excel modeling", "Process mapping", "Presentation skills"], tools: ["Excel", "PowerPoint", "SQL basics"], responsibilities: ["Support business process analysis", "Prepare reports and presentations", "Coordinate with cross-functional teams", "Identify improvement opportunities"], hiringProcess: "Case study interview, panel interview", careerPath: "Business Analyst -> Senior Analyst -> Manager", benefits: ["Medical coverage", "Performance bonus", "Structured training"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Case study rounds can be competitive", "Cross-team coordination can be demanding"] },
        { id: "sp-pmi", title: "Product Manager Intern", department: "Product", salaryRange: "RM 2.5k - 3.5k / month", employmentType: "Internship", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Internship", educationRequirement: "Penultimate/final year student in any discipline", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Curiosity about products"], preferredSkills: ["Prior product/UX exposure", "Basic data analysis", "Wireframing tools"], tools: ["Figma basics", "Analytics dashboards", "Project tracking tools"], responsibilities: ["Support product research and user feedback analysis", "Assist in feature specification", "Coordinate with design and engineering teams", "Present findings to stakeholders"], hiringProcess: "Case study interview, team fit interview", careerPath: "Intern -> Associate Product Manager (return offer possible)", benefits: ["Internship allowance", "Mentorship", "Potential return offer"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Highly competitive intern intake", "Fixed-term, return offer not guaranteed"] }
      ],
      highlights: ["High-growth projects", "Strong data-driven culture", "Regional career mobility"],
      watchouts: ["Intense pace during campaigns", "Competition for roles is high"]
    },
    {
      id: "maxis",
      name: "Maxis",
      type: "Company",
      industry: "Telecommunications",
      location: "Kuala Lumpur",
      size: "3,000+ employees",
      rating: 4.1,
      reviews: 389,
      open: 8,
      signal: "Balanced growth with good perks",
      salary: "RM 3.5k - 12k / month",
      tags: ["Telco", "Balanced", "Digital services"],
      summary: "Leading Malaysian telecommunications provider with growing digital services, data, and customer experience teams.",
      scores: { culture: 4.0, growth: 3.9, pay: 3.9, balance: 4.0 },
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Hybrid",
      hiringDifficulty: "Medium",
      averageRequirements: { education: "Degree in Engineering, IT, Business, or related field", cgpa: "3.0+ preferred", experience: "Fresh graduate to 2 years", commonSkills: ["Communication", "Problem solving", "Customer focus"], techSkills: ["Excel", "Basic data analysis", "Telco/network basics for tech roles"], englishRequirement: "Good written and spoken English", portfolio: "Helpful for marketing/design roles", internshipPreferred: "Advantageous", certifications: "Not typically required" },
      hiringProcess: { steps: ["Application review", "Online assessment", "HR interview", "Department interview"], avgResponseTime: "2-3 weeks", difficulty: "Medium", assessmentNote: "Assessment for technical and analytics roles" },
      salaryBenefits: { freshGradSalary: "RM 3.2k - 4.8k / month", internshipAllowance: "RM 900 - 1.3k / month", bonus: "Performance bonus", medical: "Comprehensive medical + telco perks", training: "Structured onboarding programs", flexibleWork: "Hybrid work arrangement", leave: "Standard annual leave" },
      careerGrowth: { trainingQuality: "Good structured training", promotionPath: "Merit-based", graduateProgram: "Available for select functions", mentorship: "Assigned mentors for new joiners", internalTransfer: "Available across departments", learningOpportunities: "Exposure to telco and digital services" },
      workCulture: { pace: "Moderate", teamStyle: "Cross-functional teams", workLifeBalance: "Balanced", managementStyle: "Structured, collaborative", collaboration: "Cross-department coordination", overtimeSignal: "Occasional during product launches", reviewThemes: "Balanced pace, good perks, steady growth" },
      veraNote: "Maxis is a solid choice for graduates seeking steady growth in the telco/digital space with good work-life balance and employee perks.",
      companyReviews: [
        { id: "cr-mx-1", title: "Balanced and supportive", author: "Data Analyst", role: "Data Analyst", date: "Jan 2026", rating: 4.1, body: "Good work-life balance and supportive managers, growth pace could be faster." }
      ],
      roles: [
        { id: "mx-se", title: "Software Engineer", department: "Technology", salaryRange: "RM 4.5k - 8k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in Computer Science or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Programming fundamentals", "Data structures & algorithms", "Problem solving"], preferredSkills: ["Git", "REST APIs", "Agile methodology"], tools: ["Java/Python/JavaScript", "SQL", "Cloud basics (AWS/Azure)"], responsibilities: ["Build and maintain product features", "Write clean, tested code", "Collaborate with cross-functional teams", "Participate in code reviews"], hiringProcess: "Online assessment, technical interview, hiring manager interview", careerPath: "Software Engineer -> Senior Engineer -> Tech Lead / Engineering Manager", benefits: ["Medical coverage", "Performance bonus", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Technical assessment can be challenging for freshers", "Fast-paced delivery expectations"] },
        { id: "mx-me", title: "Marketing Executive", department: "Marketing", salaryRange: "RM 3.2k - 5.5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Marketing, Communications, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Communication", "Content creation", "Creativity"], preferredSkills: ["Social media management", "Basic design tools", "Campaign analytics"], tools: ["Canva/Adobe basics", "Social media platforms", "Excel"], responsibilities: ["Support marketing campaigns", "Create content for digital channels", "Track campaign performance", "Coordinate with agencies/vendors"], hiringProcess: "Portfolio/case review, interview with hiring manager", careerPath: "Marketing Executive -> Senior Executive -> Marketing Manager", benefits: ["Medical coverage", "Performance bonus", "Flexible work arrangement"], status: "Open", hiringDifficulty: "Easy", watchouts: ["Fast-paced campaign deadlines", "Creative feedback cycles can be demanding"] },
        { id: "mx-coa", title: "Customer Operations Associate", department: "Customer Operations", salaryRange: "RM 2.8k - 4.2k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in any discipline", cgpaRequirement: "Not strictly required", requiredSkills: ["Communication", "Problem solving", "Patience"], preferredSkills: ["CRM tools experience", "Multilingual ability", "Process improvement mindset"], tools: ["CRM/ticketing systems", "Excel"], responsibilities: ["Handle customer inquiries and issues", "Maintain service quality standards", "Escalate complex cases appropriately", "Support process improvement initiatives"], hiringProcess: "Interview with operations manager, situational assessment", careerPath: "Associate -> Senior Associate -> Team Lead", benefits: ["Medical coverage", "Telco perks", "Performance incentives"], status: "Open", hiringDifficulty: "Easy", watchouts: ["May involve shift work", "High interaction volume during peak periods"] },
        { id: "mx-da", title: "Data Analyst", department: "Analytics", salaryRange: "RM 4k - 7k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Statistics, Computer Science, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["SQL", "Data visualization", "Analytical thinking"], preferredSkills: ["Python/R", "Dashboarding tools (Power BI/Tableau)", "Statistics"], tools: ["Excel", "SQL", "Power BI / Tableau"], responsibilities: ["Analyze business data and trends", "Build dashboards and reports", "Support data-driven decision making", "Work with stakeholders to define metrics"], hiringProcess: "Online assessment (SQL/case study), interview with hiring manager", careerPath: "Data Analyst -> Senior Analyst -> Analytics Manager / Data Scientist", benefits: ["Medical coverage", "Training allowance", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study round can be competitive", "Requires strong attention to detail"] }
      ],
      highlights: ["Good work-life balance", "Steady growth path", "Attractive employee perks"],
      watchouts: ["Growth pace can feel moderate", "Legacy systems in some teams"]
    },
    {
      id: "deloitte",
      name: "Deloitte",
      type: "Company",
      industry: "Professional Services",
      location: "Kuala Lumpur",
      size: "5,000+ employees",
      rating: 4.1,
      reviews: 356,
      open: 11,
      signal: "Strong brand and structured training",
      salary: "RM 3.5k - 13k / month",
      tags: ["Consulting", "Big Four", "Structured training"],
      summary: "Global professional services firm offering audit, tax, consulting, and advisory career paths with strong structured training.",
      scores: { culture: 4.0, growth: 4.2, pay: 3.9, balance: 3.5 },
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Onsite / Hybrid",
      hiringDifficulty: "Hard",
      averageRequirements: { education: "Degree in Accounting, Business, Finance, or related field", cgpa: "3.3+ preferred", experience: "Fresh graduate to 2 years", commonSkills: ["Analytical thinking", "Communication", "Client management"], techSkills: ["Excel", "PowerPoint", "Basic data analysis tools"], englishRequirement: "Strong written and spoken English", portfolio: "Not typically required", internshipPreferred: "Strongly preferred", certifications: "ACCA/CPA progress advantageous" },
      hiringProcess: { steps: ["Application review", "Online assessment", "Case interview", "Partner/manager interview"], avgResponseTime: "3-5 weeks", difficulty: "Hard", assessmentNote: "Case study and numerical reasoning assessments" },
      salaryBenefits: { freshGradSalary: "RM 3.5k - 5k / month", internshipAllowance: "RM 1k - 1.5k / month", bonus: "Performance bonus", medical: "Comprehensive medical benefits", training: "Structured professional development and exam support", flexibleWork: "Hybrid, client-dependent", leave: "Standard + exam leave" },
      careerGrowth: { trainingQuality: "Excellent, structured professional development", promotionPath: "Clear up-or-out consulting track", graduateProgram: "Available (Deloitte graduate program)", mentorship: "Formal mentorship/coaching", internalTransfer: "Available across service lines", learningOpportunities: "High exposure to varied client projects" },
      workCulture: { pace: "Fast, project-based", teamStyle: "Project teams, client-facing", workLifeBalance: "Can be demanding during busy season", managementStyle: "Structured, up-or-out culture", collaboration: "High, client and team collaboration", overtimeSignal: "Common during audit/busy season", reviewThemes: "Strong brand and training, demanding hours during peak periods" },
      veraNote: "Deloitte offers strong brand value and structured professional development for graduates entering consulting or finance careers. Expect demanding hours during busy season and an up-or-out progression culture.",
      companyReviews: [
        { id: "cr-dt-1", title: "Great training, tough hours", author: "Business Analyst", role: "Business Analyst", date: "Feb 2026", rating: 4.0, body: "The professional development is excellent, but busy season hours are long." }
      ],
      roles: [
        { id: "dt-ba", title: "Business Analyst", department: "Consulting", salaryRange: "RM 3.8k - 6.5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Business, Economics, or related field", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Stakeholder management"], preferredSkills: ["Excel modeling", "Process mapping", "Presentation skills"], tools: ["Excel", "PowerPoint", "SQL basics"], responsibilities: ["Support client engagements", "Prepare reports and presentations", "Coordinate with project teams", "Identify improvement opportunities"], hiringProcess: "Case study interview, partner interview", careerPath: "Business Analyst -> Senior Consultant -> Manager", benefits: ["Medical coverage", "Performance bonus", "Structured training"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Case study rounds can be competitive", "Client deadlines can be demanding"] },
        { id: "dt-fe", title: "Finance Executive", department: "Finance Advisory", salaryRange: "RM 3.5k - 6k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Finance, Accounting, or related field", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Financial reporting", "Attention to detail", "Excel proficiency"], preferredSkills: ["Accounting software", "Basic taxation knowledge", "ACCA/CPA progress"], tools: ["Excel", "Audit/accounting software", "PowerPoint"], responsibilities: ["Support audit/advisory engagements", "Assist with financial analysis", "Ensure compliance with standards", "Prepare client deliverables"], hiringProcess: "Online assessment, interview with manager", careerPath: "Finance Executive -> Senior Associate -> Manager", benefits: ["Medical coverage", "Study support for professional certification", "Performance bonus"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Busy season hours can be long", "High attention to detail required"] },
        { id: "dt-hr", title: "HR Executive", department: "Human Resources", salaryRange: "RM 3k - 5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Human Resources, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Communication", "Organization", "Confidentiality"], preferredSkills: ["HRIS systems", "Employment law basics", "Recruitment experience"], tools: ["HRIS/payroll systems", "Excel", "Applicant tracking systems"], responsibilities: ["Support recruitment and onboarding", "Maintain employee records", "Assist with HR programs and events", "Support employee relations matters"], hiringProcess: "Interview with HR manager, panel discussion", careerPath: "HR Executive -> Senior Executive -> HR Business Partner", benefits: ["Medical coverage", "Training and development programs", "Flexible work arrangement"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Handles sensitive/confidential matters", "Can involve cross-department coordination"] },
        { id: "dt-mt", title: "Management Trainee", department: "Graduate Program", salaryRange: "RM 3.5k - 5.5k / month", employmentType: "Full-time (Rotational)", location: "Kuala Lumpur", workMode: "Onsite / Hybrid", experienceLevel: "Fresh graduate", educationRequirement: "Degree in any discipline", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Leadership potential", "Communication", "Adaptability"], preferredSkills: ["Prior internship experience", "Extracurricular leadership roles"], tools: ["Excel", "PowerPoint"], responsibilities: ["Rotate across service lines", "Complete structured training modules", "Take on client project assignments", "Build cross-functional experience"], hiringProcess: "Online assessment, assessment centre, partner interview", careerPath: "Management Trainee -> Senior Associate -> Manager (post-rotation placement)", benefits: ["Structured mentorship", "Rotational exposure", "Fast-track promotion potential"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Highly competitive intake", "Placement after rotation is not guaranteed to be your first choice"] }
      ],
      highlights: ["Excellent structured training", "Strong brand value", "Broad client exposure"],
      watchouts: ["Busy season hours can be long", "Up-or-out progression pressure"]
    },
    {
      id: "pwc",
      name: "PwC",
      type: "Company",
      industry: "Professional Services",
      location: "Kuala Lumpur",
      size: "5,000+ employees",
      rating: 4.0,
      reviews: 331,
      open: 10,
      signal: "Strong brand, Big Four training",
      salary: "RM 3.5k - 13k / month",
      tags: ["Audit", "Big Four", "Structured training"],
      summary: "Global professional services firm offering audit, tax, and consulting career paths with strong structured training and client exposure.",
      scores: { culture: 3.9, growth: 4.1, pay: 3.9, balance: 3.5 },
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Onsite / Hybrid",
      hiringDifficulty: "Hard",
      averageRequirements: { education: "Degree in Accounting, Finance, Business, or related field", cgpa: "3.3+ preferred", experience: "Fresh graduate to 2 years", commonSkills: ["Analytical thinking", "Attention to detail", "Client management"], techSkills: ["Excel", "Audit/accounting software", "Data analysis basics"], englishRequirement: "Strong written and spoken English", portfolio: "Not typically required", internshipPreferred: "Strongly preferred", certifications: "ACCA/CPA progress advantageous" },
      hiringProcess: { steps: ["Application review", "Online assessment", "Case interview", "Partner/manager interview"], avgResponseTime: "3-5 weeks", difficulty: "Hard", assessmentNote: "Case study and numerical/verbal reasoning assessments" },
      salaryBenefits: { freshGradSalary: "RM 3.5k - 5k / month", internshipAllowance: "RM 1k - 1.5k / month", bonus: "Performance bonus", medical: "Comprehensive medical benefits", training: "Structured professional development and exam support", flexibleWork: "Hybrid, client-dependent", leave: "Standard + exam leave" },
      careerGrowth: { trainingQuality: "Excellent, structured professional development", promotionPath: "Clear up-or-out consulting/audit track", graduateProgram: "Available (PwC graduate program)", mentorship: "Formal mentorship/coaching", internalTransfer: "Available across service lines", learningOpportunities: "High exposure to varied client projects" },
      workCulture: { pace: "Fast, project-based", teamStyle: "Project teams, client-facing", workLifeBalance: "Can be demanding during busy season", managementStyle: "Structured, up-or-out culture", collaboration: "High, client and team collaboration", overtimeSignal: "Common during audit/busy season", reviewThemes: "Strong brand and training, demanding hours during peak periods" },
      veraNote: "PwC is a strong pick for graduates targeting audit, tax, or consulting careers with excellent structured training. Busy season hours can be intense, consistent with the broader Big Four experience.",
      companyReviews: [
        { id: "cr-pw-1", title: "Excellent brand and training", author: "Finance Executive", role: "Finance Executive", date: "Apr 2026", rating: 4.1, body: "Great place to build a professional foundation, but expect long hours during audit season." }
      ],
      roles: [
        { id: "pw-fe", title: "Finance Executive", department: "Audit", salaryRange: "RM 3.5k - 6k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Finance, Accounting, or related field", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Financial reporting", "Attention to detail", "Excel proficiency"], preferredSkills: ["Accounting software", "Basic taxation knowledge", "ACCA/CPA progress"], tools: ["Excel", "Audit/accounting software", "PowerPoint"], responsibilities: ["Support audit engagements", "Assist with financial statement review", "Ensure compliance with standards", "Prepare client deliverables"], hiringProcess: "Online assessment, interview with manager", careerPath: "Finance Executive -> Senior Associate -> Manager", benefits: ["Medical coverage", "Study support for professional certification", "Performance bonus"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Busy season hours can be long", "High attention to detail required"] },
        { id: "pw-ba", title: "Business Analyst", department: "Consulting", salaryRange: "RM 3.8k - 6.5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Business, Economics, or related field", cgpaRequirement: "3.3+ preferred", requiredSkills: ["Analytical thinking", "Communication", "Stakeholder management"], preferredSkills: ["Excel modeling", "Process mapping", "Presentation skills"], tools: ["Excel", "PowerPoint", "SQL basics"], responsibilities: ["Support client engagements", "Prepare reports and presentations", "Coordinate with project teams", "Identify improvement opportunities"], hiringProcess: "Case study interview, partner interview", careerPath: "Business Analyst -> Senior Consultant -> Manager", benefits: ["Medical coverage", "Performance bonus", "Structured training"], status: "Open", hiringDifficulty: "Hard", watchouts: ["Case study rounds can be competitive", "Client deadlines can be demanding"] },
        { id: "pw-hr", title: "HR Executive", department: "Human Resources", salaryRange: "RM 3k - 5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Degree in Human Resources, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Communication", "Organization", "Confidentiality"], preferredSkills: ["HRIS systems", "Employment law basics", "Recruitment experience"], tools: ["HRIS/payroll systems", "Excel", "Applicant tracking systems"], responsibilities: ["Support recruitment and onboarding", "Maintain employee records", "Assist with HR programs and events", "Support employee relations matters"], hiringProcess: "Interview with HR manager, panel discussion", careerPath: "HR Executive -> Senior Executive -> HR Business Partner", benefits: ["Medical coverage", "Training and development programs", "Flexible work arrangement"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Handles sensitive/confidential matters", "Can involve cross-department coordination"] },
        { id: "pw-da", title: "Data Analyst", department: "Analytics", salaryRange: "RM 4k - 7k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Hybrid", experienceLevel: "Junior", educationRequirement: "Degree in Statistics, Computer Science, Business, or related field", cgpaRequirement: "3.2+ preferred", requiredSkills: ["SQL", "Data visualization", "Analytical thinking"], preferredSkills: ["Python/R", "Dashboarding tools (Power BI/Tableau)", "Statistics"], tools: ["Excel", "SQL", "Power BI / Tableau"], responsibilities: ["Analyze client and business data", "Build dashboards and reports", "Support data-driven decision making", "Work with stakeholders to define metrics"], hiringProcess: "Online assessment (SQL/case study), interview with hiring manager", careerPath: "Data Analyst -> Senior Analyst -> Analytics Manager", benefits: ["Medical coverage", "Training allowance", "Hybrid work options"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study round can be competitive", "Requires strong attention to detail"] }
      ],
      highlights: ["Excellent structured training", "Strong brand value", "Broad client exposure"],
      watchouts: ["Busy season hours can be long", "Up-or-out progression pressure"]
    },
    {
      id: "tnb",
      name: "TNB",
      type: "Company",
      industry: "Utilities & Energy",
      location: "Kuala Lumpur",
      size: "10,000+ employees",
      rating: 3.9,
      reviews: 298,
      open: 6,
      signal: "Stable, government-linked employment",
      salary: "RM 2.6k - 9k / month",
      tags: ["Stable", "Government-linked", "National infrastructure"],
      summary: "National electricity utility company offering stable careers across engineering, IT, and corporate functions with national-scale infrastructure projects.",
      scores: { culture: 3.8, growth: 3.6, pay: 3.7, balance: 3.9 },
      activelyHiring: true,
      freshGraduateFriendly: true,
      internshipAvailable: true,
      workMode: "Onsite",
      hiringDifficulty: "Medium",
      averageRequirements: { education: "Degree in Engineering, IT, Business, or related field", cgpa: "3.0+ preferred", experience: "Fresh graduate to 2 years", commonSkills: ["Communication", "Problem solving", "Reliability"], techSkills: ["Excel", "SQL basics", "Network/security fundamentals for IT roles"], englishRequirement: "Good written and spoken English", portfolio: "Not typically required", internshipPreferred: "Advantageous", certifications: "Engineering/security certifications advantageous" },
      hiringProcess: { steps: ["Application review", "Online assessment", "HR interview", "Technical interview"], avgResponseTime: "3-5 weeks", difficulty: "Medium", assessmentNote: "Technical assessment for engineering and IT roles" },
      salaryBenefits: { freshGradSalary: "RM 3k - 4.3k / month", internshipAllowance: "RM 800 - 1.2k / month", bonus: "Performance bonus", medical: "Comprehensive medical benefits", training: "Structured onboarding and technical training", flexibleWork: "Mostly onsite, limited hybrid", leave: "Standard annual leave" },
      careerGrowth: { trainingQuality: "Good structured technical training", promotionPath: "Grade-based, steady", graduateProgram: "Available for engineering tracks", mentorship: "Assigned mentors", internalTransfer: "Available across divisions", learningOpportunities: "Exposure to national utility infrastructure projects" },
      workCulture: { pace: "Steady", teamStyle: "Structured, department-based", workLifeBalance: "Balanced", managementStyle: "Hierarchical, process-driven", collaboration: "Cross-department coordination", overtimeSignal: "Occasional during infrastructure projects", reviewThemes: "Stable, government-linked pace, meaningful national-scale work" },
      veraNote: "TNB suits graduates who want stable, government-linked employment with exposure to national infrastructure and utility-scale projects. Expect a slower, more hierarchical pace than private tech companies.",
      companyReviews: [
        { id: "cr-tnb-1", title: "Stable and meaningful work", author: "Cybersecurity Analyst", role: "Cybersecurity Analyst", date: "Mar 2026", rating: 4.0, body: "Good stability and meaningful national-scale projects, though pace and processes are slower." }
      ],
      roles: [
        { id: "tnb-cyb", title: "Cybersecurity Analyst", department: "IT Security", salaryRange: "RM 4k - 7k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Junior", educationRequirement: "Degree in Cybersecurity, Computer Science, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Network security fundamentals", "Risk assessment", "Analytical thinking"], preferredSkills: ["Security certifications (CEH/Security+)", "Incident response", "Scripting"], tools: ["SIEM tools", "Firewalls", "Vulnerability scanners"], responsibilities: ["Monitor systems for security threats", "Support incident response", "Conduct risk assessments", "Maintain security documentation"], hiringProcess: "Technical assessment, panel interview", careerPath: "Cybersecurity Analyst -> Senior Analyst -> Security Lead", benefits: ["Medical coverage", "Certification sponsorship", "Stable employment"], status: "Open", hiringDifficulty: "Medium", watchouts: ["On-call responsibilities may apply", "Requires continuous upskilling"] },
        { id: "tnb-da", title: "Data Analyst", department: "Analytics", salaryRange: "RM 3.8k - 6.5k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Junior", educationRequirement: "Degree in Statistics, Computer Science, Business, or related field", cgpaRequirement: "3.0+ preferred", requiredSkills: ["SQL", "Data visualization", "Analytical thinking"], preferredSkills: ["Python/R", "Dashboarding tools (Power BI/Tableau)", "Statistics"], tools: ["Excel", "SQL", "Power BI / Tableau"], responsibilities: ["Analyze operational and business data", "Build dashboards and reports", "Support data-driven decision making", "Work with stakeholders to define metrics"], hiringProcess: "Online assessment (SQL/case study), interview with hiring manager", careerPath: "Data Analyst -> Senior Analyst -> Analytics Manager", benefits: ["Medical coverage", "Training allowance", "Stable employment"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Case study round can be competitive", "Requires strong attention to detail"] },
        { id: "tnb-mt", title: "Management Trainee", department: "Graduate Program", salaryRange: "RM 3.2k - 4.8k / month", employmentType: "Full-time (Rotational)", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate", educationRequirement: "Degree in any discipline", cgpaRequirement: "3.0+ preferred", requiredSkills: ["Leadership potential", "Communication", "Adaptability"], preferredSkills: ["Prior internship experience", "Extracurricular leadership roles"], tools: ["Excel", "PowerPoint"], responsibilities: ["Rotate across business units", "Complete structured training modules", "Take on project assignments", "Build cross-functional experience"], hiringProcess: "Online assessment, assessment centre, panel interview", careerPath: "Management Trainee -> Executive -> Manager (post-rotation placement)", benefits: ["Structured mentorship", "Rotational exposure", "Stable employment"], status: "Open", hiringDifficulty: "Medium", watchouts: ["Placement after rotation is not guaranteed to be your first choice", "Slower pace than private sector"] },
        { id: "tnb-coa", title: "Customer Operations Associate", department: "Customer Operations", salaryRange: "RM 2.6k - 3.8k / month", employmentType: "Full-time", location: "Kuala Lumpur", workMode: "Onsite", experienceLevel: "Fresh graduate / Junior", educationRequirement: "Diploma/Degree in any discipline", cgpaRequirement: "Not strictly required", requiredSkills: ["Communication", "Problem solving", "Patience"], preferredSkills: ["CRM tools experience", "Multilingual ability", "Process improvement mindset"], tools: ["CRM/ticketing systems", "Excel"], responsibilities: ["Handle customer inquiries and issues", "Maintain service quality standards", "Escalate complex cases appropriately", "Support process improvement initiatives"], hiringProcess: "Interview with operations manager, situational assessment", careerPath: "Associate -> Senior Associate -> Team Lead", benefits: ["Medical coverage", "Stable employment", "Performance incentives"], status: "Open", hiringDifficulty: "Easy", watchouts: ["May involve shift work", "High interaction volume during peak periods"] }
      ],
      highlights: ["Stable, government-linked employment", "Meaningful national-scale projects", "Good job security"],
      watchouts: ["Slower pace than private tech companies", "Hierarchical approval processes"]
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
      partnerCount: 85,
      signal: "Strong employer recognition",
      salary: "86% employed in 6 months",
      tags: ["Research", "Strong alumni", "Public"],
      summary: "Top public university with strong research profile, employer recognition, and broad alumni network.",
      scores: { growth: 4.5 },
      academics: { employabilityRate: 86, acceptanceRate: 35, tuitionRange: "RM 6k - 12k / year" },
      topPrograms: ["Medicine", "Computer Science", "Law"],
      strongPrograms: [
        { name: "Medicine", why: "Established teaching hospital, strong clinical exposure, and a highly ranked medical faculty.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Computer Science", why: "Strong research output, industry collaboration, and consistent graduate demand.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Law", why: "Long-established law faculty with strong bar exam pass rates and legal industry ties.", careerOutcome: "High", industryRelevance: "High" }
      ],
      programs: [
        { id: "um-med", name: "Medicine", overview: "A 5-year MBBS program combining pre-clinical foundations with hospital-based clinical training at UM's teaching hospital.", level: "Direct Degree (MBBS)", duration: "5 years", estimatedTuition: "RM 45,000 - RM 60,000 total", suitableForSPM: true, spmPathway: "Direct entry with excellent SPM results, or via STPM/Matriculation", entryRequirement: "5 credits including Biology, Chemistry, Physics/Maths; strong SPM/STPM results required", careerPaths: ["Medical Officer", "Doctor (post-housemanship)", "Clinical Researcher", "Public Health Officer"], mainSubjects: ["Anatomy", "Physiology", "Pharmacology", "Clinical Medicine", "Surgery"], mainSkills: ["Clinical diagnosis", "Patient care", "Medical research", "Communication"], internshipAvailability: "Compulsory clinical postings", industryExposure: "Clinical postings at University Malaya Medical Centre and partner hospitals from Year 3 onward.", industryRelevance: "High", employabilityOutcome: "Very high demand; graduates proceed to compulsory housemanship with strong placement rates.", accreditation: "Recognized by the Malaysian Medical Council (MMC) and Malaysian Qualifications Agency (MQA).", scholarshipAvailability: "JPA and university merit scholarships available (highly competitive).", programStrength: "Strong", watchouts: ["Extremely competitive entry", "Long study duration"] },
        { id: "um-law", name: "Law", overview: "A 4-year LLB program covering Malaysian civil law, common law principles, and legal practice skills.", level: "Direct Degree (LLB)", duration: "4 years", estimatedTuition: "RM 30,000 - RM 40,000 total", suitableForSPM: true, spmPathway: "STPM / Matriculation / Foundation in Law required before degree", entryRequirement: "5 credits in SPM plus qualifying STPM/Matriculation/Foundation results", careerPaths: ["Legal Associate", "Corporate Counsel", "Legal Consultant", "Compliance Officer"], mainSubjects: ["Contract Law", "Constitutional Law", "Criminal Law", "Law of Torts", "Legal Research Methods"], mainSkills: ["Legal research", "Case analysis", "Writing", "Argumentation"], internshipAvailability: "Available via legal clinics and chambering", industryExposure: "Legal clinics, moot court competitions, and chambering placements with law firms.", industryRelevance: "High", employabilityOutcome: "Strong outcomes for graduates who complete the Bar/CLP and secure chambering.", accreditation: "Recognized by the Malaysian Bar and MQA.", scholarshipAvailability: "Limited merit-based scholarships available.", programStrength: "Strong", watchouts: ["Requires further Bar/CLP after graduation"] },
        { id: "um-cs", name: "Computer Science", overview: "A research-linked computer science degree covering software engineering, data systems, and emerging technologies.", level: "Foundation/Matriculation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 24,000 - RM 32,000 total", suitableForSPM: true, spmPathway: "Foundation in Science or Matriculation in Computer Science", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Software Developer", "Data Analyst", "Cybersecurity Analyst", "AI/ML Engineer"], mainSubjects: ["Data Structures", "Database Systems", "Software Engineering", "Computer Networks", "Artificial Intelligence"], mainSkills: ["Programming", "Databases", "Web development", "Algorithms"], internshipAvailability: "Available (industry-linked)", industryExposure: "Industry-linked capstone projects and internships with tech and GLC employers.", industryRelevance: "High", employabilityOutcome: "High demand for software, data, and cybersecurity roles.", accreditation: "MQA accredited; aligned with industry computing standards.", scholarshipAvailability: "Merit-based scholarships and Yayasan-sponsored places available.", programStrength: "Strong", watchouts: ["Highly competitive intake"] },
        { id: "um-acc", name: "Accounting", overview: "An accounting degree covering financial reporting, auditing, and taxation with a pathway to professional certification.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 20,000 - RM 28,000 total", suitableForSPM: true, spmPathway: "Foundation in Accountancy or Matriculation", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Accountant", "Auditor", "Tax Consultant", "Finance Analyst"], mainSubjects: ["Financial Accounting", "Auditing", "Taxation", "Corporate Finance", "Business Law"], mainSkills: ["Financial reporting", "Auditing", "Taxation", "Excel/ERP tools"], internshipAvailability: "Available", industryExposure: "Internships with accounting firms and financial institutions.", industryRelevance: "High", employabilityOutcome: "Steady demand; strongest outcomes for graduates who pursue ACCA/CPA/MIA certification.", accreditation: "MQA accredited; recognized pathway toward MIA membership.", scholarshipAvailability: "University merit scholarships and firm-sponsored scholarships (e.g. Big Four) available.", programStrength: "Good", watchouts: ["Requires professional certification (e.g. ACCA/CPA) for full progression"] }
      ],
      spmPathway: { foundation: "SPM -> Foundation in Science/Law/Accountancy -> Degree", diploma: "SPM -> Diploma (limited programs) -> Degree Year 2 with credit transfer", degree: "SPM -> STPM/Matriculation/A-Level/Foundation -> Direct Degree (Medicine and Law require STPM/Matriculation or Foundation)", englishRequirement: "Minimum Band 2 MUET or equivalent (varies by faculty)", scholarship: "JPA, Yayasan, and university merit scholarships available (limited slots)", nextIntake: "September 2026" },
      outcomeInsights: { commonSkills: ["Research", "Critical thinking", "Communication", "Discipline-specific technical skills"], internshipNote: "Most faculties require or offer structured internships in the final year.", industryLinks: "Strong ties with government-linked companies, banks, and healthcare institutions.", careerReadiness: "High" },
      reviewBreakdown: { careerSupport: 4.2, teachingQuality: 4.5, facilities: 4.0 },
      studentReviews: [
        { id: "sr-um-1", title: "Strong name and alumni reach", author: "Computer Science Graduate", program: "Computer Science", date: "May 2026", rating: 4.4, body: "The reputation opens doors, but you still need to build your own portfolio early." },
        { id: "sr-um-2", title: "Excellent clinical exposure", author: "Medicine Student, Year 4", program: "Medicine", date: "Mar 2026", rating: 4.6, body: "Teaching hospital access from early years gives real clinical experience most other unis can't match." }
      ],
      topEmployers: [
        { name: "Maybank", count: 210, companyId: "maybank" },
        { name: "Petronas Digital", count: 95, companyId: "petronas" },
        { name: "PwC", count: 60 }
      ],
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
      partnerCount: 60,
      signal: "Industry-linked projects",
      salary: "83% employed in 6 months",
      tags: ["Industry projects", "Design", "Business"],
      summary: "Private university known for industry-linked learning, business, hospitality, design, and graduate employability programs.",
      scores: { growth: 4.3 },
      academics: { employabilityRate: 83, acceptanceRate: 68, tuitionRange: "RM 35k - 55k / year" },
      topPrograms: ["Hospitality", "Business", "Design"],
      strongPrograms: [
        { name: "Hospitality", why: "Award-winning hospitality school with strong hotel and F&B industry placements.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Business", why: "Strong industry-linked curriculum and consistent graduate employability.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Design", why: "Well-equipped studios and a strong creative industry portfolio culture.", careerOutcome: "Medium", industryRelevance: "Medium" }
      ],
      programs: [
        { id: "taylors-hosp", name: "Hospitality", overview: "An award-winning hospitality program combining hotel operations, F&B management, and event planning with compulsory industry placement.", level: "Diploma + Degree / Direct Degree", duration: "3 years degree (or 1 year Diploma top-up)", estimatedTuition: "RM 90,000 - RM 110,000 total", suitableForSPM: true, spmPathway: "Diploma in Culinary Arts / Hotel Management, or Foundation route", entryRequirement: "3 credits in SPM including English", careerPaths: ["Hotel Manager", "Event Manager", "F&B Manager", "Guest Relations Executive"], mainSubjects: ["Hotel Operations", "Food & Beverage Management", "Event Management", "Tourism Marketing", "Hospitality Law"], mainSkills: ["Guest service", "Operations management", "Event planning", "Communication"], internshipAvailability: "Compulsory industry placement (local & overseas)", industryExposure: "Compulsory local and overseas industry placements with partner hotels and resorts.", industryRelevance: "High", employabilityOutcome: "High demand in hotel, F&B, and event management roles across Asia.", accreditation: "Recognized by MQA; industry-endorsed curriculum.", scholarshipAvailability: "Taylor's merit scholarships and hospitality-industry sponsorships available.", programStrength: "Strong", watchouts: ["High tuition cost", "Shift-based industry placements"] },
        { id: "taylors-biz", name: "Business", overview: "A business degree with an industry-linked curriculum spanning marketing, finance, and management.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 75,000 - RM 95,000 total", suitableForSPM: true, spmPathway: "Foundation in Business or Diploma in Business Studies", entryRequirement: "5 credits in SPM including Mathematics and English", careerPaths: ["Marketing Executive", "Business Analyst", "Finance Executive", "Management Trainee"], mainSubjects: ["Marketing Principles", "Financial Management", "Organizational Behavior", "Business Analytics", "Strategic Management"], mainSkills: ["Business strategy", "Finance basics", "Marketing", "Communication"], internshipAvailability: "Available", industryExposure: "Industry consulting projects and internship placements with partner companies.", industryRelevance: "High", employabilityOutcome: "Consistent graduate employability across marketing, finance, and management trainee roles.", accreditation: "MQA accredited.", scholarshipAvailability: "Merit-based scholarships available.", programStrength: "Strong", watchouts: ["Competitive graduate job market"] },
        { id: "taylors-design", name: "Design", overview: "A design degree building a strong creative portfolio across UI/UX, graphic, and product design disciplines.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 80,000 - RM 100,000 total", suitableForSPM: true, spmPathway: "Foundation in Design or Diploma in Design", entryRequirement: "3 credits in SPM; portfolio may be required", careerPaths: ["UI/UX Designer", "Graphic Designer", "Product Designer", "Brand Designer"], mainSubjects: ["Visual Communication", "Typography", "User Experience Design", "Design Thinking", "Digital Media"], mainSkills: ["Visual design", "Design tools (Figma/Adobe)", "User research", "Prototyping"], internshipAvailability: "Available", industryExposure: "Studio-based projects with design agencies and industry critique sessions.", industryRelevance: "Medium", employabilityOutcome: "Outcomes depend heavily on portfolio quality; strong for graduates with a polished portfolio.", accreditation: "MQA accredited.", scholarshipAvailability: "Design talent scholarships available (portfolio-based).", programStrength: "Strong", watchouts: ["Portfolio quality matters more than grades for hiring"] },
        { id: "taylors-acc", name: "Accounting", overview: "An accounting program with strong industry linkages and a clear pathway to professional certification.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 70,000 - RM 90,000 total", suitableForSPM: true, spmPathway: "Foundation in Business/Accounting", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Accountant", "Auditor", "Tax Consultant", "Finance Analyst"], mainSubjects: ["Financial Accounting", "Management Accounting", "Auditing", "Taxation", "Corporate Reporting"], mainSkills: ["Financial reporting", "Auditing", "Taxation", "Excel/ERP tools"], internshipAvailability: "Available", industryExposure: "Internships with accounting and audit firms.", industryRelevance: "High", employabilityOutcome: "Steady demand; best outcomes with ACCA/CPA follow-through.", accreditation: "MQA accredited; recognized pathway toward MIA membership.", scholarshipAvailability: "Merit-based scholarships available.", programStrength: "Good", watchouts: ["Requires professional certification for full progression"] }
      ],
      spmPathway: { foundation: "SPM -> Foundation -> Degree", diploma: "SPM -> Diploma -> Degree Year 2 (credit transfer available for select programs)", degree: "Usually requires Foundation, STPM, A-Level, Diploma, or equivalent", englishRequirement: "Minimum Band 3 MUET or IELTS 5.5 (varies by program)", scholarship: "Taylor's merit scholarships and industry-sponsored scholarships available", nextIntake: "February / August 2026" },
      outcomeInsights: { commonSkills: ["Communication", "Teamwork", "Practical/technical skills", "Project experience"], internshipNote: "Structured industry placements built into most programs.", industryLinks: "Strong hospitality, business, and design industry partnerships.", careerReadiness: "High" },
      reviewBreakdown: { careerSupport: 4.5, teachingQuality: 4.3, facilities: 4.4 },
      studentReviews: [
        { id: "sr-tay-1", title: "Helpful career office and practical projects", author: "Final Year Student", program: "Business", date: "May 2026", rating: 4.5, body: "The employer projects helped me explain my work better during interviews." },
        { id: "sr-tay-2", title: "Hospitality placements are excellent", author: "Hospitality Graduate", program: "Hospitality", date: "Feb 2026", rating: 4.6, body: "Got placed at a 5-star hotel during my internship and received a job offer before graduating." }
      ],
      topEmployers: [
        { name: "Grab", count: 120, companyId: "grab" },
        { name: "CIMB", count: 70, companyId: "cimb" },
        { name: "Marriott International", count: 45 }
      ],
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
      partnerCount: 45,
      signal: "International curriculum",
      salary: "82% employed in 6 months",
      tags: ["International", "Research", "Business"],
      summary: "International university campus with strong research links, global curriculum, and business/engineering pathways.",
      scores: { growth: 4.3 },
      academics: { employabilityRate: 82, acceptanceRate: 58, tuitionRange: "RM 45k - 65k / year" },
      topPrograms: ["Engineering", "Data Analytics", "Business"],
      strongPrograms: [
        { name: "Engineering", why: "Internationally recognized engineering accreditation and strong research links.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Data Analytics", why: "Global curriculum with a strong quantitative and analytics focus.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Business", why: "Dual accreditation and international exchange opportunities.", careerOutcome: "Medium", industryRelevance: "High" }
      ],
      programs: [
        { id: "monash-eng", name: "Engineering", overview: "An internationally accredited engineering degree with a strong research foundation and industrial training component.", level: "Foundation + Degree", duration: "1 year Foundation + 4 years degree", estimatedTuition: "RM 100,000 - RM 130,000 total", suitableForSPM: true, spmPathway: "Foundation in Engineering or Matriculation", entryRequirement: "5 credits in SPM including Mathematics and Physics", careerPaths: ["Mechanical Engineer", "Project Engineer", "Maintenance Engineer", "Automation Engineer"], mainSubjects: ["Engineering Mathematics", "Mechanics of Materials", "Thermodynamics", "Control Systems", "Engineering Design"], mainSkills: ["Engineering mathematics", "CAD design", "Project management", "Problem solving"], internshipAvailability: "Available (industrial training semester)", industryExposure: "Industrial training semester with multinational engineering employers.", industryRelevance: "High", employabilityOutcome: "High demand, especially for graduates with completed industrial training.", accreditation: "Accredited by the Board of Engineers Malaysia (BEM) and Engineering Accreditation Council (EAC).", scholarshipAvailability: "Monash merit scholarships and need-based bursaries available.", programStrength: "Strong", watchouts: ["Longer duration than most degrees", "High tuition"] },
        { id: "monash-data", name: "Data Analytics", overview: "A quantitative analytics degree with a global curriculum covering statistics, data engineering, and business intelligence.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 95,000 - RM 115,000 total", suitableForSPM: true, spmPathway: "Foundation in Business or Science", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Data Analyst", "Business Intelligence Analyst", "Data Scientist", "Insights Consultant"], mainSubjects: ["Statistics", "Data Mining", "Business Intelligence", "Machine Learning Basics", "Data Visualization"], mainSkills: ["SQL", "Data visualization", "Statistics", "Python/R"], internshipAvailability: "Available", industryExposure: "Analytics projects with industry partners and international exchange opportunities.", industryRelevance: "High", employabilityOutcome: "High demand for data analyst and BI roles across banking, tech, and consulting.", accreditation: "MQA accredited; internationally benchmarked curriculum.", scholarshipAvailability: "Merit scholarships available.", programStrength: "Strong", watchouts: ["Requires strong quantitative aptitude"] },
        { id: "monash-biz", name: "Business", overview: "A dual-accredited business degree with international exchange opportunities and a broad management curriculum.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 90,000 - RM 110,000 total", suitableForSPM: true, spmPathway: "Foundation in Business or Diploma", entryRequirement: "5 credits in SPM", careerPaths: ["Marketing Executive", "Business Analyst", "Finance Executive", "Management Trainee"], mainSubjects: ["Microeconomics", "Marketing Management", "Corporate Finance", "Business Law", "International Business"], mainSkills: ["Business strategy", "Finance basics", "Marketing", "Communication"], internshipAvailability: "Available", industryExposure: "Case competitions and internship placements with multinational employers.", industryRelevance: "High", employabilityOutcome: "Solid outcomes across marketing, finance, and management trainee tracks.", accreditation: "MQA accredited; Australian dual-accreditation via Monash's global curriculum.", scholarshipAvailability: "Merit scholarships and international exchange bursaries available.", programStrength: "Good", watchouts: ["Large cohort sizes in some units"] },
        { id: "monash-acc", name: "Accounting", overview: "An accounting degree aligned with international standards and a pathway to professional certification.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 90,000 - RM 105,000 total", suitableForSPM: true, spmPathway: "Foundation in Business/Accounting", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Accountant", "Auditor", "Tax Consultant", "Finance Analyst"], mainSubjects: ["Financial Accounting", "Management Accounting", "Auditing", "Taxation", "Corporate Governance"], mainSkills: ["Financial reporting", "Auditing", "Taxation", "Excel/ERP tools"], internshipAvailability: "Available", industryExposure: "Internships with accounting and financial services firms.", industryRelevance: "Medium", employabilityOutcome: "Steady demand; strongest with ACCA/CPA follow-through.", accreditation: "MQA accredited; recognized pathway toward MIA/CPA Australia.", scholarshipAvailability: "Merit scholarships available.", programStrength: "Good", watchouts: ["Requires professional certification for full progression"] }
      ],
      spmPathway: { foundation: "SPM -> Foundation -> Degree", diploma: "Limited diploma pathways; most students enter via Foundation/A-Level", degree: "Usually requires Foundation, STPM, A-Level, or equivalent", englishRequirement: "IELTS 6.0 or equivalent (international curriculum)", scholarship: "Monash merit scholarships and need-based bursaries available", nextIntake: "March 2026" },
      outcomeInsights: { commonSkills: ["Analytical thinking", "Research", "Global perspective", "Technical skills"], internshipNote: "Industrial training semester built into engineering and analytics programs.", industryLinks: "Strong links with multinational engineering and analytics employers.", careerReadiness: "High" },
      reviewBreakdown: { careerSupport: 4.0, teachingQuality: 4.4, facilities: 4.2 },
      studentReviews: [
        { id: "sr-mon-1", title: "Strong name and international recognition", author: "Engineering Graduate", program: "Engineering", date: "Apr 2026", rating: 4.3, body: "The engineering accreditation made my qualification recognized when I applied for jobs overseas." }
      ],
      topEmployers: [
        { name: "Petronas Digital", count: 55, companyId: "petronas" },
        { name: "Grab", count: 40, companyId: "grab" },
        { name: "Deloitte", count: 38 }
      ],
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
      partnerCount: 70,
      signal: "Technology career focus",
      salary: "80% employed in 6 months",
      tags: ["Technology", "Computing", "Employability"],
      summary: "Technology-oriented university with strong computing, business IT, and digital career pathways.",
      scores: { growth: 4.2 },
      academics: { employabilityRate: 80, acceptanceRate: 72, tuitionRange: "RM 30k - 42k / year" },
      topPrograms: ["Computer Science", "Cybersecurity", "Data Analytics"],
      strongPrograms: [
        { name: "Computer Science", why: "Strong industry certifications embedded in the curriculum and consistent graduate hiring.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Cybersecurity", why: "Dedicated security labs and growing industry demand for graduates.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Data Analytics", why: "Curriculum closely aligned with in-demand analytics tooling and techniques.", careerOutcome: "High", industryRelevance: "High" }
      ],
      programs: [
        { id: "apu-cs", name: "Computer Science", overview: "A technology-focused computer science degree with embedded industry certifications and strong graduate hiring pipelines.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 55,000 - RM 70,000 total", suitableForSPM: true, spmPathway: "Foundation in Computing or Diploma in IT", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Software Developer", "Data Analyst", "Cybersecurity Analyst", "AI/ML Engineer"], mainSubjects: ["Data Structures", "Software Engineering", "Mobile App Development", "Cloud Computing", "Artificial Intelligence"], mainSkills: ["Programming", "Databases", "Web development", "Algorithms"], internshipAvailability: "Available (industry-linked)", industryExposure: "Industry-linked internships and hackathons with tech employers across Southeast Asia.", industryRelevance: "High", employabilityOutcome: "Very high demand; strong recruiter presence on campus.", accreditation: "MQA accredited; aligned with global tech certifications.", scholarshipAvailability: "APU merit scholarships and tech-industry sponsorships available.", programStrength: "Strong", watchouts: ["Fast-changing curriculum requires continuous self-learning"] },
        { id: "apu-cyber", name: "Cybersecurity", overview: "A cybersecurity degree with dedicated security labs covering network defense, ethical hacking, and risk management.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 58,000 - RM 72,000 total", suitableForSPM: true, spmPathway: "Foundation in Computing or Diploma in IT", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Cybersecurity Analyst", "Penetration Tester", "SOC Analyst", "Security Consultant"], mainSubjects: ["Network Security", "Ethical Hacking", "Digital Forensics", "Risk Management", "Security Governance"], mainSkills: ["Network security", "Ethical hacking", "Risk assessment", "Security tools"], internshipAvailability: "Available", industryExposure: "Security labs, capture-the-flag competitions, and industry-linked internships.", industryRelevance: "High", employabilityOutcome: "High and growing demand for cybersecurity analysts and SOC roles.", accreditation: "MQA accredited; aligned with CEH/security industry certifications.", scholarshipAvailability: "Tech-industry sponsored scholarships available.", programStrength: "Strong", watchouts: ["Requires continuous certification (e.g. CEH) to stay competitive"] },
        { id: "apu-data", name: "Data Analytics", overview: "A data analytics degree focused on in-demand analytics tooling, statistics, and business intelligence techniques.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 56,000 - RM 70,000 total", suitableForSPM: true, spmPathway: "Foundation in Computing", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Data Analyst", "Business Intelligence Analyst", "Data Scientist", "Insights Consultant"], mainSubjects: ["Statistics", "Data Mining", "Big Data Technologies", "Data Visualization", "Machine Learning Basics"], mainSkills: ["SQL", "Data visualization", "Statistics", "Python/R"], internshipAvailability: "Available", industryExposure: "Analytics internships and industry capstone projects.", industryRelevance: "High", employabilityOutcome: "High demand for data analyst and BI roles.", accreditation: "MQA accredited.", scholarshipAvailability: "Merit-based scholarships available.", programStrength: "Strong", watchouts: ["Requires strong quantitative aptitude"] },
        { id: "apu-biz", name: "Business", overview: "A business degree with a technology-oriented curriculum covering digital business and management fundamentals.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 48,000 - RM 60,000 total", suitableForSPM: true, spmPathway: "Foundation in Business", entryRequirement: "5 credits in SPM", careerPaths: ["Marketing Executive", "Business Analyst", "Finance Executive", "Management Trainee"], mainSubjects: ["Marketing Principles", "Digital Business", "Financial Management", "Organizational Behavior", "Entrepreneurship"], mainSkills: ["Business strategy", "Finance basics", "Marketing", "Communication"], internshipAvailability: "Available", industryExposure: "Internship placements with technology and digital-first companies.", industryRelevance: "Medium", employabilityOutcome: "Moderate demand; less industry focus than APU's tech programs.", accreditation: "MQA accredited.", scholarshipAvailability: "Merit-based scholarships available.", programStrength: "Good", watchouts: ["Less industry focus than the tech programs"] }
      ],
      spmPathway: { foundation: "SPM -> Foundation in Computing -> Degree", diploma: "SPM -> Diploma in IT/Computing -> Degree Year 2 with credit transfer", degree: "Usually requires Foundation, STPM, A-Level, Diploma, or equivalent", englishRequirement: "Minimum Band 2 MUET or equivalent", scholarship: "APU merit scholarships and tech-industry sponsored scholarships available", nextIntake: "January 2026" },
      outcomeInsights: { commonSkills: ["Programming", "Problem solving", "Technical certifications", "Teamwork"], internshipNote: "Strong industry-linked internship placements, especially in tech roles.", industryLinks: "Deep ties with tech and digital employers across Southeast Asia.", careerReadiness: "High" },
      reviewBreakdown: { careerSupport: 4.1, teachingQuality: 4.0, facilities: 4.2 },
      studentReviews: [
        { id: "sr-apu-1", title: "Great for landing a tech job fast", author: "Computer Science Graduate", program: "Computer Science", date: "Jun 2026", rating: 4.2, body: "Recruiters actively come to campus. I had two job offers before graduating." }
      ],
      topEmployers: [
        { name: "Grab", count: 65, companyId: "grab" },
        { name: "CIMB", count: 30, companyId: "cimb" },
        { name: "Accenture", count: 25 }
      ],
      highlights: ["Strong computing focus", "Career-oriented programs", "Diverse student community"],
      watchouts: ["Fast academic pace", "Campus location may affect commute"]
    },
    {
      id: "sunway",
      name: "Sunway University",
      type: "University",
      industry: "Private University",
      location: "Bandar Sunway",
      size: "7,500 students",
      rating: 4.3,
      reviews: 295,
      open: 12,
      partnerCount: 50,
      signal: "Strong business and hospitality reputation",
      salary: "81% employed in 6 months",
      tags: ["Business", "Hospitality", "Twinning programs"],
      summary: "Private university known for business, hospitality, design, and strong twinning/pathway programs to overseas universities.",
      scores: { growth: 4.2 },
      academics: { employabilityRate: 81, acceptanceRate: 64, tuitionRange: "RM 38k - 58k / year" },
      topPrograms: ["Business", "Hospitality", "Design"],
      strongPrograms: [
        { name: "Business", why: "Well-regarded business school with strong twinning pathways to overseas partner universities.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Hospitality", why: "Strong hotel and event management industry placements.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Design", why: "Creative facilities and growing design industry partnerships.", careerOutcome: "Medium", industryRelevance: "Medium" }
      ],
      programs: [
        { id: "sunway-biz", name: "Business", overview: "A business degree with strong twinning pathways to overseas partner universities and a practical management curriculum.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 85,000 - RM 105,000 total", suitableForSPM: true, spmPathway: "Foundation in Arts/Business or Diploma in Business", entryRequirement: "5 credits in SPM including Mathematics and English", careerPaths: ["Marketing Executive", "Business Analyst", "Finance Executive", "Management Trainee"], mainSubjects: ["Marketing Principles", "Financial Management", "Business Ethics", "Organizational Behavior", "International Business"], mainSkills: ["Business strategy", "Finance basics", "Marketing", "Communication"], internshipAvailability: "Available", industryExposure: "Internships and industry guest lectures across the Sunway Group ecosystem.", industryRelevance: "High", employabilityOutcome: "Consistent demand across marketing, finance, and management trainee roles.", accreditation: "MQA accredited; twinning pathway accredited by partner overseas universities.", scholarshipAvailability: "Sunway merit scholarships and need-based bursaries available.", programStrength: "Strong", watchouts: ["Competitive graduate job market"] },
        { id: "sunway-hosp", name: "Hospitality", overview: "A hospitality degree with strong hotel and event management industry placements.", level: "Diploma + Degree / Direct Degree", duration: "3 years (or 1 year Diploma top-up)", estimatedTuition: "RM 80,000 - RM 100,000 total", suitableForSPM: true, spmPathway: "Diploma in Hotel Management or Foundation route", entryRequirement: "3 credits in SPM including English", careerPaths: ["Hotel Manager", "Event Manager", "F&B Manager", "Guest Relations Executive"], mainSubjects: ["Hotel Operations", "Event Management", "Food & Beverage Management", "Tourism Marketing", "Service Quality Management"], mainSkills: ["Guest service", "Operations management", "Event planning", "Communication"], internshipAvailability: "Compulsory industry placement", industryExposure: "Compulsory industry placement with hotel and event partners.", industryRelevance: "High", employabilityOutcome: "High demand in hospitality and event management roles.", accreditation: "MQA accredited; industry-endorsed curriculum.", scholarshipAvailability: "Hospitality-industry sponsored scholarships available.", programStrength: "Strong", watchouts: ["Shift-based industry placements"] },
        { id: "sunway-design", name: "Design", overview: "A design degree with creative studio facilities and growing industry design partnerships.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 78,000 - RM 96,000 total", suitableForSPM: true, spmPathway: "Foundation in Design", entryRequirement: "3 credits in SPM; portfolio may be required", careerPaths: ["UI/UX Designer", "Graphic Designer", "Product Designer", "Brand Designer"], mainSubjects: ["Visual Communication", "Typography", "User Experience Design", "Branding", "Digital Media"], mainSkills: ["Visual design", "Design tools (Figma/Adobe)", "User research", "Prototyping"], internshipAvailability: "Available", industryExposure: "Studio critique sessions and design agency internships.", industryRelevance: "Medium", employabilityOutcome: "Outcomes depend on portfolio quality; growing demand in digital design roles.", accreditation: "MQA accredited.", scholarshipAvailability: "Design talent scholarships available (portfolio-based).", programStrength: "Good", watchouts: ["Portfolio quality matters more than grades for hiring"] },
        { id: "sunway-acc", name: "Accounting", overview: "An accounting degree with a practical curriculum and consistent internship placement support.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 75,000 - RM 92,000 total", suitableForSPM: true, spmPathway: "Foundation in Business/Accounting", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Accountant", "Auditor", "Tax Consultant", "Finance Analyst"], mainSubjects: ["Financial Accounting", "Management Accounting", "Auditing", "Taxation", "Business Law"], mainSkills: ["Financial reporting", "Auditing", "Taxation", "Excel/ERP tools"], internshipAvailability: "Available", industryExposure: "Internships with accounting and financial services firms.", industryRelevance: "Medium", employabilityOutcome: "Steady demand; strongest with ACCA/CPA follow-through.", accreditation: "MQA accredited; recognized pathway toward MIA membership.", scholarshipAvailability: "Merit-based scholarships available.", programStrength: "Good", watchouts: ["Requires professional certification for full progression"] }
      ],
      spmPathway: { foundation: "SPM -> Foundation -> Degree", diploma: "SPM -> Diploma -> Degree Year 2 (selected programs)", degree: "Usually requires Foundation, STPM, A-Level, Diploma, or equivalent", englishRequirement: "Minimum Band 3 MUET or IELTS 5.5", scholarship: "Sunway merit scholarships and need-based bursaries available", nextIntake: "February / August 2026" },
      outcomeInsights: { commonSkills: ["Communication", "Teamwork", "Business acumen", "Project experience"], internshipNote: "Structured internships across business and hospitality programs.", industryLinks: "Strong ties with the wider Sunway Group ecosystem and business/hospitality employers.", careerReadiness: "Medium" },
      reviewBreakdown: { careerSupport: 4.1, teachingQuality: 4.2, facilities: 4.3 },
      studentReviews: [
        { id: "sr-sun-1", title: "Great campus and pathway options", author: "Business Student, Year 3", program: "Business", date: "Apr 2026", rating: 4.3, body: "The twinning pathway to an overseas partner university was a big reason I chose Sunway." }
      ],
      topEmployers: [
        { name: "CIMB", count: 50, companyId: "cimb" },
        { name: "Grab", count: 35, companyId: "grab" },
        { name: "Sunway Group", count: 80 }
      ],
      highlights: ["Strong twinning/pathway options to overseas universities", "Vibrant integrated campus township", "Good industry placement support"],
      watchouts: ["Tuition can be high for twinning programs", "Large integrated campus can feel crowded"]
    },
    {
      id: "ucsi",
      name: "UCSI University",
      type: "University",
      industry: "Private University",
      location: "Cheras, Kuala Lumpur",
      size: "15,000 students",
      rating: 4.2,
      reviews: 341,
      open: 13,
      partnerCount: 55,
      signal: "Strong health sciences and engineering focus",
      salary: "79% employed in 6 months",
      tags: ["Medicine", "Engineering", "Music"],
      summary: "Private university recognized for health sciences, engineering, music, and actuarial studies with strong industry links.",
      scores: { growth: 4.1 },
      academics: { employabilityRate: 79, acceptanceRate: 66, tuitionRange: "RM 40k - 62k / year" },
      topPrograms: ["Medicine", "Engineering", "Business"],
      strongPrograms: [
        { name: "Medicine", why: "Well-established health sciences faculty with strong clinical training partnerships.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Engineering", why: "Strong industry-recognized engineering accreditation and labs.", careerOutcome: "High", industryRelevance: "High" },
        { name: "Business", why: "Practical curriculum with consistent internship placement support.", careerOutcome: "Medium", industryRelevance: "Medium" }
      ],
      programs: [
        { id: "ucsi-med", name: "Medicine", overview: "A 5-year MBBS program with strong clinical training partnerships across UCSI's affiliated hospitals.", level: "Direct Degree (MBBS)", duration: "5 years", estimatedTuition: "RM 400,000 - RM 480,000 total", suitableForSPM: true, spmPathway: "Foundation in Science or A-Level/STPM required before degree", entryRequirement: "5 credits including Biology, Chemistry, Physics/Maths; strong results required", careerPaths: ["Medical Officer", "Doctor (post-housemanship)", "Clinical Researcher", "Public Health Officer"], mainSubjects: ["Anatomy", "Physiology", "Pharmacology", "Clinical Medicine", "Community Health"], mainSkills: ["Clinical diagnosis", "Patient care", "Medical research", "Communication"], internshipAvailability: "Compulsory clinical postings", industryExposure: "Clinical postings at affiliated teaching hospitals from Year 3 onward.", industryRelevance: "High", employabilityOutcome: "High demand; graduates proceed to compulsory housemanship.", accreditation: "Recognized by the Malaysian Medical Council (MMC) and MQA.", scholarshipAvailability: "Limited merit scholarships available (high tuition offsets availability).", programStrength: "Strong", watchouts: ["Very high tuition cost", "Long study duration"] },
        { id: "ucsi-eng", name: "Engineering", overview: "An accredited engineering degree with strong labs and industry-recognized curriculum.", level: "Foundation + Degree", duration: "1 year Foundation + 4 years degree", estimatedTuition: "RM 90,000 - RM 115,000 total", suitableForSPM: true, spmPathway: "Foundation in Engineering", entryRequirement: "5 credits in SPM including Mathematics and Physics", careerPaths: ["Mechanical Engineer", "Project Engineer", "Maintenance Engineer", "Automation Engineer"], mainSubjects: ["Engineering Mathematics", "Mechanics of Materials", "Thermodynamics", "Control Systems", "Engineering Design"], mainSkills: ["Engineering mathematics", "CAD design", "Project management", "Problem solving"], internshipAvailability: "Available (industrial training semester)", industryExposure: "Industrial training semester with engineering and manufacturing employers.", industryRelevance: "High", employabilityOutcome: "High demand, especially for graduates with completed industrial training.", accreditation: "Accredited by the Board of Engineers Malaysia (BEM) and Engineering Accreditation Council (EAC).", scholarshipAvailability: "UCSI merit scholarships and need-based bursaries available.", programStrength: "Strong", watchouts: ["Longer duration than most degrees"] },
        { id: "ucsi-biz", name: "Business", overview: "A business degree with a practical curriculum and consistent internship placement support.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 70,000 - RM 90,000 total", suitableForSPM: true, spmPathway: "Foundation in Business", entryRequirement: "5 credits in SPM", careerPaths: ["Marketing Executive", "Business Analyst", "Finance Executive", "Management Trainee"], mainSubjects: ["Marketing Principles", "Financial Management", "Organizational Behavior", "Business Analytics", "Entrepreneurship"], mainSkills: ["Business strategy", "Finance basics", "Marketing", "Communication"], internshipAvailability: "Available", industryExposure: "Internship placements with regional employers.", industryRelevance: "Medium", employabilityOutcome: "Moderate, steady demand across marketing, finance, and management trainee roles.", accreditation: "MQA accredited.", scholarshipAvailability: "Merit-based scholarships available.", programStrength: "Good", watchouts: ["Competitive graduate job market"] },
        { id: "ucsi-data", name: "Data Analytics", overview: "A data analytics degree covering statistics, data visualization, and business intelligence tooling.", level: "Foundation + Degree", duration: "1 year Foundation + 3 years degree", estimatedTuition: "RM 65,000 - RM 82,000 total", suitableForSPM: true, spmPathway: "Foundation in Computing or Science", entryRequirement: "5 credits in SPM including Mathematics", careerPaths: ["Data Analyst", "Business Intelligence Analyst", "Data Scientist", "Insights Consultant"], mainSubjects: ["Statistics", "Data Mining", "Business Intelligence", "Data Visualization", "Machine Learning Basics"], mainSkills: ["SQL", "Data visualization", "Statistics", "Python/R"], internshipAvailability: "Available", industryExposure: "Analytics internships with industry partners.", industryRelevance: "High", employabilityOutcome: "High demand for data analyst and BI roles.", accreditation: "MQA accredited.", scholarshipAvailability: "Merit-based scholarships available.", programStrength: "Good", watchouts: ["Requires strong quantitative aptitude"] }
      ],
      spmPathway: { foundation: "SPM -> Foundation -> Degree", diploma: "SPM -> Diploma -> Degree Year 2 (selected programs)", degree: "Usually requires Foundation, STPM, A-Level, Diploma, or equivalent (Medicine requires strong Science results)", englishRequirement: "Minimum Band 3 MUET or IELTS 5.5", scholarship: "UCSI merit scholarships and need-based bursaries available", nextIntake: "January / May 2026" },
      outcomeInsights: { commonSkills: ["Technical skills", "Research", "Communication", "Problem solving"], internshipNote: "Clinical postings and industrial training built into health science and engineering programs.", industryLinks: "Strong ties with healthcare providers and engineering employers.", careerReadiness: "Medium" },
      reviewBreakdown: { careerSupport: 3.9, teachingQuality: 4.1, facilities: 4.0 },
      studentReviews: [
        { id: "sr-ucsi-1", title: "Solid engineering labs and facilities", author: "Engineering Student, Year 2", program: "Engineering", date: "Mar 2026", rating: 4.0, body: "The labs are well-equipped and lecturers have real industry experience." }
      ],
      topEmployers: [
        { name: "Petronas Digital", count: 40, companyId: "petronas" },
        { name: "Maybank", count: 30, companyId: "maybank" },
        { name: "IHH Healthcare", count: 55 }
      ],
      highlights: ["Strong health sciences and engineering facilities", "Diverse international student community", "Good scholarship availability"],
      watchouts: ["Medicine program tuition is very high", "Campus spread across multiple buildings"]
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
    { id: "p1", author: "Nadia, UX Intern", authorType: "candidate", verified: false, title: "How I explained a messy university project in interviews", body: "I reframed it around constraints, decisions, and what changed after testing.", reactions: 42 },
    { id: "p2", author: "Jason, Data Analyst", authorType: "candidate", verified: false, title: "SQL portfolio tip", body: "One clear dashboard with a business question is stronger than five disconnected notebooks.", reactions: 36 },
    { id: "p3", author: "Vera", authorType: "vera", verified: false, title: "Weekly career prompt", body: "Before applying, write the one sentence evidence you would use to prove fit for the role.", reactions: 88 },
    { id: "p4", author: "Maybank", authorType: "employer", verified: true, title: "What do early-career software engineers value most when choosing their first employer?", body: "We are reviewing how we communicate graduate development opportunities and would like to hear from students and recent graduates.", reactions: 14 }
  ],
  autopilotEvents: [
    { id: "a1", type: "recommended", title: "Product Designer at Maybank", reason: "92% fit, strong salary, hybrid setup", status: "Ready to review" },
    { id: "a2", type: "saved", title: "Graduate UX Researcher at CIMB", reason: "Mentorship score is high", status: "Saved" },
    { id: "a3", type: "skipped", title: "Data Analyst at Grab", reason: "Below current SQL evidence threshold", status: "Needs skill proof" }
  ],
  candidates: [
    {
      id: "c4", name: "Ahmad Zulkifli", roleId: "er5", role: "Backend Engineer", stage: "New", archived: false, rejection: null,
      source: "Applied", owner: "Jason", fit: 79, location: "Kuala Lumpur", availability: "3 weeks", salaryExpectation: "RM 6k - 8k",
      education: "BSc Computer Science, UPM", experience: "1.5 years", careerStage: "Early career", portfolio: "Moderate",
      skills: ["Java", "SQL", "Microservices"], strength: "Recently applied with a relevant microservices side project.", concern: null,
      interview: null, finalReview: null, offer: null, hired: null,
      timeline: [{ label: "Applied", date: "3 weeks ago", done: true }],
      notes: [], activity: [{ text: "Applied to Backend Engineer", date: "3 weeks ago" }]
    },
    {
      id: "c1", name: "Siti Nur", roleId: "er1", role: "Product Design Intern", stage: "Shortlisted", archived: false, rejection: null,
      source: "Applied", owner: "Mira", fit: 92, location: "Kuala Lumpur", availability: "2 weeks", salaryExpectation: "RM 2k - 2.5k",
      education: "BA Design, Taylor's", experience: "1 year internship", careerStage: "Fresh Graduate", portfolio: "Strong",
      skills: ["Figma", "User Research", "Design Systems"], strength: "Portfolio shows banking onboarding work and strong research evidence.", concern: "Limited experience with design systems at scale.",
      interview: null, finalReview: null, offer: null, hired: null,
      timeline: [{ label: "Applied", date: "9 days ago", done: true }, { label: "Reviewed", date: "6 days ago", done: true }, { label: "Shortlisted", date: "2 days ago", done: true }],
      notes: [{ author: "Mira", text: "Strong portfolio, worth a screening call.", date: "2 days ago" }],
      activity: [{ text: "Moved to Shortlisted", date: "2 days ago" }, { text: "Reviewed application", date: "6 days ago" }, { text: "Applied to Product Design Intern", date: "9 days ago" }]
    },
    {
      id: "c3", name: "Priya Nair", roleId: "er4", role: "Software Engineer", stage: "Shortlisted", archived: false, rejection: null,
      source: "Referral", owner: "Jason", fit: 84, location: "Remote / Selangor", availability: "1 month", salaryExpectation: "RM 6k - 8k",
      education: "Diploma Software Engineering", experience: "2 years freelance", careerStage: "Career Switcher", portfolio: "Strong",
      skills: ["React", "TypeScript", "Testing"], strength: "Transferable freelance delivery evidence with strong component testing habits.", concern: "No prior full-time employment.",
      interview: null, finalReview: null, offer: null, hired: null,
      timeline: [{ label: "Applied", date: "12 days ago", done: true }, { label: "Reviewed", date: "8 days ago", done: true }, { label: "Shortlisted", date: "4 days ago", done: true }],
      notes: [], activity: [{ text: "Moved to Shortlisted", date: "4 days ago" }, { text: "Referred by a current employee", date: "12 days ago" }]
    },
    {
      id: "c2", name: "Daniel Lim", roleId: "er2", role: "Junior Data Analyst", stage: "Interview", archived: false, rejection: null,
      source: "Applied", owner: "Mira", fit: 88, location: "Petaling Jaya", availability: "Immediate", salaryExpectation: "RM 4.8k - 6.5k",
      education: "BSc Statistics, UM", experience: "Graduate projects", careerStage: "Looking for first full-time job", portfolio: "Moderate",
      skills: ["SQL", "Python", "Dashboards"], strength: "Strong SQL dashboard proof and clear interest in marketplace analytics.", concern: null,
      interview: { round: 1, totalRounds: 2, nextInterview: { type: "Recruiter Screen", date: "Tomorrow", time: "2:30 PM" }, interviewers: ["Mira"], feedbackSubmitted: 0, feedbackTotal: 1, scorecards: [] },
      finalReview: null, offer: null, hired: null,
      timeline: [{ label: "Applied", date: "2 weeks ago", done: true }, { label: "Reviewed", date: "10 days ago", done: true }, { label: "Shortlisted", date: "6 days ago", done: true }, { label: "Interview scheduled", date: "1 day ago", done: true }, { label: "Feedback submitted", date: "", done: false }, { label: "Decision", date: "", done: false }],
      notes: [], activity: [{ text: "Interview scheduled: Recruiter Screen", date: "1 day ago" }, { text: "Moved to Interview", date: "6 days ago" }]
    },
    {
      id: "c6", name: "Farah Alia", roleId: "er4", role: "Software Engineer", stage: "Final Review", archived: false, rejection: null,
      source: "Applied", owner: "Jason", fit: 90, location: "Kuala Lumpur", availability: "2 weeks", salaryExpectation: "RM 7k - 8k",
      education: "BSc Computer Science, MMU", experience: "2 years", careerStage: "Early career", portfolio: "Strong",
      skills: ["React", "Node.js", "AWS"], strength: "Cleared technical rounds with strong system design answers.", concern: "Limited large-team collaboration experience.",
      interview: {
        round: 2, totalRounds: 2, nextInterview: null, interviewers: ["Jason", "Mira"], feedbackSubmitted: 2, feedbackTotal: 2,
        scorecards: [
          { interviewer: "Jason", recommendation: "Strong yes", strengths: ["System design depth", "Clear communication"], concerns: [], notes: "Confidently walked through a scalable order service design." },
          { interviewer: "Mira", recommendation: "Yes", strengths: ["Strong AWS fundamentals"], concerns: ["Limited large-team experience"], notes: "Good technical depth, slightly quiet in group discussion." }
        ]
      },
      finalReview: { overallResult: "Strong candidate", teamRecommendations: [{ name: "Jason", verdict: "Strong yes" }, { name: "Mira", verdict: "Yes" }], strengths: ["Strong system design answers", "Confident communicator"], concerns: ["Limited large-team collaboration experience"], openQuestions: ["Notice period confirmation"] },
      offer: null, hired: null,
      timeline: [{ label: "Applied", date: "5 weeks ago", done: true }, { label: "Reviewed", date: "4 weeks ago", done: true }, { label: "Shortlisted", date: "3 weeks ago", done: true }, { label: "Interview scheduled", date: "2 weeks ago", done: true }, { label: "Feedback submitted", date: "3 days ago", done: true }, { label: "Decision", date: "", done: false }],
      notes: [{ author: "Jason", text: "Ready to move to final decision once we confirm notice period.", date: "3 days ago" }],
      activity: [{ text: "Both scorecards submitted", date: "3 days ago" }, { text: "Round 2 interview completed", date: "3 days ago" }, { text: "Moved to Final Review", date: "3 days ago" }]
    },
    {
      id: "c5", name: "Wei Jun Tan", roleId: "er2", role: "Junior Data Analyst", stage: "Offer", archived: false, rejection: null,
      source: "Applied", owner: "Mira", fit: 81, location: "Petaling Jaya", availability: "Immediate", salaryExpectation: "RM 5k - 5.5k",
      education: "BSc Statistics, UM", experience: "Graduate projects", careerStage: "Fresh Graduate", portfolio: "Moderate",
      skills: ["SQL", "Power BI", "Excel"], strength: "Strong coursework portfolio, immediately available.", concern: null,
      interview: { round: 2, totalRounds: 2, nextInterview: null, interviewers: ["Mira"], feedbackSubmitted: 1, feedbackTotal: 1, scorecards: [{ interviewer: "Mira", recommendation: "Yes", strengths: ["Fast learner", "Solid SQL fundamentals"], concerns: [], notes: "Ready to contribute from day one." }] },
      finalReview: { overallResult: "Approved for offer", teamRecommendations: [{ name: "Mira", verdict: "Yes" }], strengths: ["Immediately available", "Strong coursework evidence"], concerns: [], openQuestions: [] },
      offer: { status: "Sent", amount: "RM 5,200 / month", sentDate: "3 days ago", expiryDate: "in 4 days", counterAmount: null, approvedRange: { min: "RM 4,500", max: "RM 5,500" } },
      hired: null,
      timeline: [{ label: "Applied", date: "6 weeks ago", done: true }, { label: "Reviewed", date: "5 weeks ago", done: true }, { label: "Shortlisted", date: "4 weeks ago", done: true }, { label: "Interview scheduled", date: "3 weeks ago", done: true }, { label: "Feedback submitted", date: "2 weeks ago", done: true }, { label: "Decision", date: "10 days ago", done: true }],
      notes: [], activity: [{ text: "Offer sent: RM 5,200 / month", date: "3 days ago" }, { text: "Decision: approved for offer", date: "10 days ago" }]
    },
    {
      id: "c7", name: "Kevin Ong", roleId: "er1", role: "Product Design Intern", stage: "Hired", archived: false, rejection: null,
      source: "Applied", owner: "Mira", fit: 95, location: "Kuala Lumpur", availability: "Accepted", salaryExpectation: "RM 2k - 2.5k",
      education: "BA Design, Taylor's", experience: "Internship-level", careerStage: "Fresh Graduate", portfolio: "Strong",
      skills: ["Figma", "Prototyping"], strength: "Accepted offer after a strong final-round portfolio review.", concern: null,
      interview: { round: 1, totalRounds: 1, nextInterview: null, interviewers: ["Mira"], feedbackSubmitted: 1, feedbackTotal: 1, scorecards: [{ interviewer: "Mira", recommendation: "Strong yes", strengths: ["Exceptional portfolio", "Strong prototyping skills"], concerns: [], notes: "Best portfolio review of the intern cycle." }] },
      finalReview: { overallResult: "Approved for offer", teamRecommendations: [{ name: "Mira", verdict: "Strong yes" }], strengths: ["Exceptional portfolio"], concerns: [], openQuestions: [] },
      offer: { status: "Accepted", amount: "RM 2,200 / month", sentDate: "3 weeks ago", expiryDate: null, counterAmount: null, approvedRange: { min: "RM 1,800", max: "RM 2,500" } },
      hired: { startDate: "3 Aug 2026", onboardingStatus: "Onboarding scheduled" },
      timeline: [{ label: "Applied", date: "8 weeks ago", done: true }, { label: "Reviewed", date: "7 weeks ago", done: true }, { label: "Shortlisted", date: "6 weeks ago", done: true }, { label: "Interview scheduled", date: "5 weeks ago", done: true }, { label: "Feedback submitted", date: "4 weeks ago", done: true }, { label: "Decision", date: "3 weeks ago", done: true }],
      notes: [], activity: [{ text: "Accepted offer", date: "3 weeks ago" }, { text: "Offer sent: RM 2,200 / month", date: "3 weeks ago" }]
    },
    {
      id: "c8", name: "Hafiz Rahman", roleId: "er5", role: "Backend Engineer", stage: null, archived: true,
      rejection: { reason: "Skill mismatch", message: "Thank you for applying — we've decided to move forward with candidates whose experience more closely matches our current distributed-systems requirements.", date: "1 week ago" },
      source: "Applied", owner: "Jason", fit: 58, location: "Kuala Lumpur", availability: "1 month", salaryExpectation: "RM 5.5k - 7k",
      education: "BSc Information Technology, UiTM", experience: "1 year", careerStage: "Early career", portfolio: "Moderate",
      skills: ["Java", "SQL"], strength: "Solid Java fundamentals.", concern: "No distributed systems or Kafka experience required for this role.",
      interview: null, finalReview: null, offer: null, hired: null,
      timeline: [{ label: "Applied", date: "3 weeks ago", done: true }, { label: "Reviewed", date: "2 weeks ago", done: true }, { label: "Rejected", date: "1 week ago", done: true }],
      notes: [], activity: [{ text: "Rejected: Skill mismatch", date: "1 week ago" }]
    }
  ],
  employerRoles: [
    {
      id: "er1", title: "Product Design Intern", status: "Open", closeReason: null,
      applicants: 84, qualified: 21, strongMatches: 9, talentSupply: "Good", daysOpen: 7, health: "Healthy",
      department: "Design", employmentType: "Internship", reportsTo: "Design Lead",
      roleSummary: "Support the design team on end-to-end product design work across research, prototyping, and design systems.",
      responsibilities: ["Conduct user research and usability tests", "Design and prototype product flows in Figma", "Contribute to and maintain the design system"],
      successLooksLike: "In the first 3 months, this person should have shipped one polished feature prototype and run two usability tests.",
      mustHaveSkills: ["Figma", "User Research", "Prototyping"], niceToHaveSkills: ["Motion Design", "Design Systems"],
      minExperience: "No experience required", educationOrCertification: "",
      salary: { min: 1800, max: 2500, currency: "MYR", period: "Monthly" }, location: "Kuala Lumpur", workMode: "Hybrid",
      matchThreshold: 70, portfolioRequirement: "Preferred",
      roleIntelligence: {
        talentAvailability: "Good", typicalExperience: "0-1 years", commonSalary: "RM 1.8k - 2.5k",
        commonSkills: ["Figma", "User Research", "Prototyping", "Design Systems"],
        potentialIssue: "No major mismatch between requirements and the current intern talent pool.",
        hiringCompetition: "Low", locationContext: "Kuala Lumpur + Remote Malaysia",
        dataContext: { region: "Malaysia", category: "Product Design (Intern)", confidence: "High" },
        strengths: ["Salary is aligned with the local intern market.", "Responsibilities are clear and specific.", "Hybrid work increases your available candidate pool."],
        concerns: [],
        suggestions: []
      }
    },
    {
      id: "er2", title: "Junior Data Analyst", status: "Open", closeReason: null,
      applicants: 126, qualified: 34, strongMatches: 8, talentSupply: "Strong", daysOpen: 12, health: "Needs attention",
      department: "Data & Analytics", employmentType: "Full-time", reportsTo: "Analytics Manager",
      roleSummary: "Own recurring reporting and ad-hoc analysis that helps the business understand what's working.",
      responsibilities: ["Build and maintain dashboards in Power BI", "Write SQL queries against the marketplace warehouse", "Partner with product and marketing on ad-hoc analysis"],
      successLooksLike: "In the first 6 months, this person should own the weekly business review dashboard end to end.",
      mustHaveSkills: ["SQL", "Excel"], niceToHaveSkills: ["Power BI", "Python", "AWS"],
      minExperience: "3-5 years", educationOrCertification: "",
      salary: { min: 3800, max: 6000, currency: "MYR", period: "Monthly" }, location: "Kuala Lumpur", workMode: "Hybrid",
      matchThreshold: 70, portfolioRequirement: "Optional",
      roleIntelligence: {
        talentAvailability: "Strong", typicalExperience: "0-2 years", commonSalary: "RM 3.8k - 6k",
        commonSkills: ["SQL", "Excel", "Power BI", "Python"],
        potentialIssue: "Requiring 3-5 years of experience may unnecessarily reduce your candidate pool for a junior title.",
        hiringCompetition: "Medium", locationContext: "Kuala Lumpur + Remote Malaysia",
        dataContext: { region: "Malaysia", category: "Data Analytics (Junior)", confidence: "High" },
        strengths: ["Salary is aligned with the local market.", "SQL and Excel as must-haves match what most similar roles require."],
        concerns: [{ issue: "5+ years of experience may unnecessarily reduce the candidate pool.", why: "Most candidates applying to a Junior Data Analyst title have 0-2 years of experience; a 3-5 year minimum filters most of them out before they can be reviewed." }],
        suggestions: [{
          recommendation: "Change minimum experience from 3-5 years to 1-2 years.",
          pros: ["Larger candidate pool", "Closer to the market norm for this title", "More strong matches"],
          cons: ["More candidate screening may be required", "Some candidates may need additional onboarding"],
          expectedEffect: "Larger eligible candidate pool", effectIsEstimated: true, confidence: "Medium",
          field: "minExperience", suggestedValue: "1-2 years"
        }]
      }
    },
    {
      id: "er3", title: "Graduate UX Researcher", status: "Draft", closeReason: null,
      applicants: 0, qualified: 0, strongMatches: 0, talentSupply: "Good", daysOpen: 0, health: "Healthy",
      department: "Design", employmentType: "Graduate programme", reportsTo: "Research Lead",
      roleSummary: "", responsibilities: [], successLooksLike: "",
      mustHaveSkills: [], niceToHaveSkills: [], minExperience: "No experience required", educationOrCertification: "",
      salary: { min: null, max: null, currency: "MYR", period: "Monthly" }, location: "", workMode: "Hybrid",
      matchThreshold: 70, portfolioRequirement: "Optional",
      roleIntelligence: {
        talentAvailability: "Good", typicalExperience: "0-1 years", commonSalary: "RM 3k - 4.5k",
        commonSkills: ["User Interviews", "Usability Testing", "Figma", "Survey Design"],
        potentialIssue: "Draft not yet published — no applicant data yet.",
        hiringCompetition: "Low", locationContext: "Kuala Lumpur + Remote Malaysia",
        dataContext: { region: "Malaysia", category: "UX Research (Graduate)", confidence: "Medium" },
        strengths: [], concerns: [], suggestions: []
      }
    },
    {
      id: "er4", title: "Software Engineer", status: "Open", closeReason: null,
      applicants: 84, qualified: 29, strongMatches: 11, talentSupply: "Strong", daysOpen: 7, health: "Healthy",
      department: "Engineering", employmentType: "Full-time", reportsTo: "Engineering Manager",
      roleSummary: "Build and ship customer-facing features across our web platform, from API to UI.",
      responsibilities: ["Build features across the React front end and Node.js API", "Write and maintain automated tests", "Participate in code review and technical design discussions"],
      successLooksLike: "In the first 6 months, this person should have shipped two customer-facing features end to end.",
      mustHaveSkills: ["React", "Node.js", "SQL"], niceToHaveSkills: ["AWS", "Kubernetes"],
      minExperience: "1-2 years", educationOrCertification: "",
      salary: { min: 4500, max: 7000, currency: "MYR", period: "Monthly" }, location: "Kuala Lumpur", workMode: "Hybrid",
      matchThreshold: 70, portfolioRequirement: "Optional",
      roleIntelligence: {
        talentAvailability: "Strong", typicalExperience: "1-3 years", commonSalary: "RM 4.5k - 7k",
        commonSkills: ["React", "Node.js", "SQL", "AWS"],
        potentialIssue: "No major mismatch between requirements and the current talent pool.",
        hiringCompetition: "Medium", locationContext: "Kuala Lumpur + Remote Malaysia",
        dataContext: { region: "Malaysia", category: "Software Engineering (Early Career)", confidence: "High" },
        strengths: ["Salary is aligned with the local market.", "Must-have skills match what most similar roles require.", "Hybrid work increases your available candidate pool."],
        concerns: [], suggestions: []
      }
    },
    {
      id: "er5", title: "Backend Engineer", status: "Paused", closeReason: null,
      applicants: 58, qualified: 19, strongMatches: 6, talentSupply: "Tight", daysOpen: 21, health: "Needs attention",
      department: "Engineering", employmentType: "Full-time", reportsTo: "Engineering Manager",
      roleSummary: "Own core backend services powering payments and order processing.",
      responsibilities: ["Design and build distributed backend services in Java", "Operate Kafka-based event pipelines", "Improve system reliability and on-call practices"],
      successLooksLike: "In the first 6 months, this person should have shipped one major service and improved system reliability.",
      mustHaveSkills: ["Java", "SQL", "Microservices"], niceToHaveSkills: ["Kafka", "Site Reliability"],
      minExperience: "5+ years", educationOrCertification: "",
      salary: { min: 7000, max: 10000, currency: "MYR", period: "Monthly" }, location: "Kuala Lumpur", workMode: "Hybrid",
      matchThreshold: 70, portfolioRequirement: "Optional",
      roleIntelligence: {
        talentAvailability: "Tight", typicalExperience: "3-5 years", commonSalary: "RM 7k - 10k",
        commonSkills: ["Java", "Microservices", "SQL", "Kafka"],
        potentialIssue: "The combination of a 5+ year requirement and Kafka-at-scale evidence is uncommon locally, narrowing supply.",
        hiringCompetition: "High", locationContext: "Kuala Lumpur + Remote Malaysia",
        dataContext: { region: "Malaysia", category: "Backend Engineering", confidence: "High" },
        strengths: ["Salary is aligned with the local market for senior backend roles.", "Responsibilities are clear and specific."],
        concerns: [
          { issue: "5+ years of experience may unnecessarily reduce the candidate pool.", why: "Most local candidates with distributed-systems experience have 3-5 years; a hard 5-year cutoff excludes many strong applicants before review." },
          { issue: "Kafka is currently marked as essential, but most similar roles treat it as preferred.", why: "Requiring Kafka-at-scale evidence on top of the experience bar compounds the talent pool reduction." }
        ],
        suggestions: [{
          recommendation: "Change minimum experience from 5+ years to 3-5 years.",
          pros: ["Larger candidate pool", "Closer to the market norm", "More strong matches"],
          cons: ["More candidate screening may be required", "Some candidates may need additional onboarding"],
          expectedEffect: "Larger eligible candidate pool", effectIsEstimated: true, confidence: "High",
          field: "minExperience", suggestedValue: "3-5 years"
        }]
      }
    },
    {
      id: "er6", title: "Marketing Coordinator", status: "Closed", closeReason: "Position filled",
      applicants: 72, qualified: 25, strongMatches: 10, talentSupply: "Good", daysOpen: 18, health: "Healthy",
      department: "Marketing", employmentType: "Full-time", reportsTo: "Marketing Manager",
      roleSummary: "Coordinate campaign execution across social, email, and events.",
      responsibilities: ["Plan and execute monthly campaign calendars", "Coordinate with design and content freelancers", "Report on campaign performance"],
      successLooksLike: "",
      mustHaveSkills: ["Campaign Management", "Copywriting"], niceToHaveSkills: ["Canva", "Meta Ads"],
      minExperience: "1-2 years", educationOrCertification: "",
      salary: { min: 3200, max: 4500, currency: "MYR", period: "Monthly" }, location: "Petaling Jaya", workMode: "On-site",
      matchThreshold: 70, portfolioRequirement: "Optional",
      roleIntelligence: {
        talentAvailability: "Good", typicalExperience: "1-2 years", commonSalary: "RM 3.2k - 4.5k",
        commonSkills: ["Campaign Management", "Copywriting", "Canva"],
        potentialIssue: "Role closed after filling — kept for historical reference.",
        hiringCompetition: "Low", locationContext: "Petaling Jaya",
        dataContext: { region: "Malaysia", category: "Marketing (Coordinator)", confidence: "Medium" },
        strengths: ["Filled within 18 days with 10 strong matches."], concerns: [], suggestions: []
      }
    },
    {
      id: "er7", title: "Office Administrator", status: "Archived", closeReason: "Role changed",
      applicants: 41, qualified: 12, strongMatches: 4, talentSupply: "Good", daysOpen: 35, health: "Needs attention",
      department: "Operations", employmentType: "Full-time", reportsTo: "Operations Manager",
      roleSummary: "Manage day-to-day office operations and vendor coordination.",
      responsibilities: ["Coordinate office vendors and supplies", "Support onboarding logistics for new hires"],
      successLooksLike: "",
      mustHaveSkills: ["Office Administration"], niceToHaveSkills: ["Vendor Management"],
      minExperience: "1-2 years", educationOrCertification: "",
      salary: { min: 2800, max: 3600, currency: "MYR", period: "Monthly" }, location: "Kuala Lumpur", workMode: "On-site",
      matchThreshold: 70, portfolioRequirement: "Optional",
      roleIntelligence: {
        talentAvailability: "Good", typicalExperience: "1-2 years", commonSalary: "RM 2.8k - 3.6k",
        commonSkills: ["Office Administration", "Vendor Management"],
        potentialIssue: "Role was restructured into a hybrid Operations Coordinator position — archived, not deleted.",
        hiringCompetition: "Low", locationContext: "Kuala Lumpur",
        dataContext: { region: "Malaysia", category: "Operations (Administrator)", confidence: "Medium" },
        strengths: [], concerns: [], suggestions: []
      }
    }
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
    comparedUniversities: [],
    comparedPrograms: [],
    comparedCompanies: [],
    comparedRoles: [],
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
    posts: DATA.communityPosts,
    employerTalentPools: [{ id: "pool-1", name: "Backend Prospects", candidateIds: [] }],
    employerInvitations: {},
    employerRoleDrafts: {},
    employerCompanyDraft: null
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
    comparedUniversities: Array.isArray(state.comparedUniversities) ? state.comparedUniversities : [],
    comparedPrograms: Array.isArray(state.comparedPrograms) ? state.comparedPrograms : [],
    comparedCompanies: Array.isArray(state.comparedCompanies) ? state.comparedCompanies : [],
    comparedRoles: Array.isArray(state.comparedRoles) ? state.comparedRoles : [],
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
            <stop offset="0%" stop-color="#2563eb" />
            <stop offset="100%" stop-color="#0ea5e9" />
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
  const page = document.body.dataset.page || "home";
  return `
    <a class="brand" href="index.html"><img class="brand-logo" src="assets/careergo-logo.png" alt="CareerGo logo"><span class="brand-text"><strong>CareerGo</strong><span>Career OS</span></span></a>
    <nav class="nav-links" aria-label="Public navigation">
      ${[
        ["home", "Home", "index.html"],
        ["jobs", "Jobs", "jobs.html"],
        ["companies", "Companies", "companies.html"],
        ["universities", "Universities", "universities.html"],
        ["community", "Community", "community.html"],
        ["about", "About", "about.html"]
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
  const isEmployer = state.session.role === "employer";
  return `
    <a class="brand" href="${isEmployer ? "employer-app.html" : "dashboard.html"}"><img class="brand-logo" src="assets/careergo-logo.png" alt="CareerGo logo"><span class="brand-text"><strong>CareerGo</strong><span>${isEmployer ? "Employer OS" : "Workspace"}</span></span></a>
    <form class="workspace-search" role="search" data-workspace-search data-tour-target="workspace-search">
      ${icon("search")}
      <input name="q" aria-label="Search workspace" placeholder="${isEmployer ? "Search candidates, roles, applicants" : "Search jobs, companies, universities"}">
    </form>
    <div class="nav-actions">
      <a class="btn btn-ghost" href="${isEmployer ? "employer-app.html#pipeline" : "autopilot.html"}">${icon("bell")} ${state.notifications?.length || 0}</a>
      <div class="account-menu-wrap">
        <button class="btn btn-primary account-menu-trigger" type="button" data-account-menu-toggle aria-haspopup="menu" aria-expanded="false">
          ${icon(isEmployer ? "building-2" : "user-round")} ${getFirstName(state)}
        </button>
        <div class="account-menu glass-card" data-account-menu hidden role="menu">
          <a role="menuitem" href="${isEmployer ? "employer-app.html#company" : "public-profile.html"}">${icon(isEmployer ? "building-2" : "user-round")} ${isEmployer ? "Company Profile" : "Profile"}</a>
          <a role="menuitem" href="${isEmployer ? "employer-app.html#settings" : "settings.html"}">${icon("settings")} Settings</a>
          ${isEmployer ? `<a role="menuitem" href="employer-app.html#pipeline">${icon("bookmark")} Talent Pipeline</a>` : `<a role="menuitem" href="saved.html">${icon("bookmark")} Saved Items</a>`}
          <button role="menuitem" type="button" data-logout>${icon("log-out")} Logout</button>
        </div>
      </div>
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
      ? ""
      : `<a data-nav="home" href="index.html">Home</a><a data-nav="jobs" href="jobs.html">Jobs</a><a data-nav="companies" href="companies.html">Companies</a><a data-nav="universities" href="universities.html">Universities</a><a data-nav="community" href="community.html">Community</a><a data-nav="about" href="about.html">About</a><a data-nav="login" href="login.html">Login</a><a data-nav="register" href="register.html">Create Account</a>`;
  }
  createIcons();
  setActiveNav();
  bindAccountMenu();
  qs("[data-workspace-search]")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const q = String(form.get("q") || "").trim();
    if (!q) return;
    const lower = q.toLowerCase();
    const destination = state.session.role === "employer"
      ? "employer-app.html"
      : lower.includes("university") || lower.includes("college") || lower.includes("degree") || lower.includes("scholarship")
      ? "universities.html"
      : lower.includes("company") || lower.includes("culture") || lower.includes("review") || lower.includes("maybank") || lower.includes("grab") || lower.includes("cimb")
        ? "companies.html"
        : "jobs.html";
    location.href = state.session.role === "employer" ? `${destination}?q=${encodeURIComponent(q)}#pipeline` : `${destination}?q=${encodeURIComponent(q)}`;
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

function renderSiteFooter() {
  const host = qs(".site-shell") || document.body;
  let footer = qs(".site-footer");
  if (!footer) {
    footer = document.createElement("footer");
    footer.className = "site-footer";
    host.appendChild(footer);
  }

  footer.innerHTML = `
    <div class="footer-wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <h2>CareerGo</h2>
          <p>The AI-guided career platform — find jobs, research companies and universities, and grow with Vera.</p>
        </div>
        <nav class="footer-column" aria-label="Product">
          <h3>Product</h3>
          <a href="jobs.html">Jobs</a>
          <a href="companies.html">Companies</a>
          <a href="universities.html">Universities</a>
          <a href="community.html">Community</a>
          <a href="about.html">About</a>
        </nav>
        <nav class="footer-column" aria-label="For employers">
          <h3>For Employers</h3>
          <a href="employers.html">Employer entry</a>
          <a href="register.html">Create employer account</a>
          <a href="employer-app.html#pipeline">Talent pipeline</a>
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
        <span>© 2026 CareerGo · Career OS</span>
      </div>
    </div>
  `;
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

  function open(focusIndex = selectedIndex()) {
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
    optionButtons()[focusIndex]?.focus();
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
    root.classList.contains("open") ? close() : open(selectedIndex());
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

function rating(value) {
  return `<span class="rating">${icon("star")} ${Number(value).toFixed(1)}</span>`;
}

function ratingText(value) {
  return `<span class="rating-text">${Number(value).toFixed(1)}/5</span>`;
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
  const primaryLinks = [
    ["dashboard", "Dashboard", "layout-dashboard", "dashboard.html"],
    ["intelligence", "Career Intelligence", "brain-circuit", "profile.html"],
    ["jobs", "Jobs", "briefcase", "jobs.html"],
    ["vera", "Vera", "sparkles", "vera.html"],
    ["market", "Market", "trending-up", "market.html"],
    ["autopilot", "Applications", "kanban", "autopilot.html"],
    ["search", "Search", "search", "companies.html"],
    ["saved", "Saved", "bookmark", "saved.html"]
  ];
  return `
    <section class="workspace-nav workspace-rail glass-card" data-tour-target="sidebar">
      <nav class="os-nav" aria-label="Career OS navigation">
        ${primaryLinks.map(([key, label, ic, href]) => {
          const isActive = active === key || (key === "search" && ["companies", "universities"].includes(active));
          return `<a class="rail-item ${isActive ? "active" : ""}" href="${href}" aria-label="${label}" data-label="${label}">${icon(ic)} <span class="rail-label">${label}</span></a>`;
        }).join("")}
        <button class="os-nav-button rail-item" type="button" data-logout aria-label="Logout" data-label="Logout">${icon("log-out")} <span class="rail-label">Logout</span></button>
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

function setActiveNav() {
  const page = document.body.dataset.page || "home";
  qsa("[data-nav]").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === page);
  });
}

function renderFeatured() {
  const jobRoot = qs("[data-featured-jobs]");
  if (jobRoot) {
    const cards = DATA.jobs.map(job => `
      <a class="list-card featured-job-card" href="jobs.html?job=${job.id}">
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
  const root = qs(".hero-metrics");
  if (!root || root.dataset.countupInitialized) return;
  root.dataset.countupInitialized = "true";
  root.dataset.countupReady = "true";

  const cards = qsa(".metric", root);
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const formatValue = (value, decimals) => decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();

  function animateCounter(el) {
    const target = Number(el.dataset.countTo || 0);
    const duration = Number(el.dataset.countDuration || 1400);
    const decimals = Number(el.dataset.countDecimals || 0);
    const suffix = el.dataset.countSuffix || "";
    const startedAt = performance.now();

    function tick(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = easeOut(progress);
      const value = target * eased;
      el.textContent = `${formatValue(value, decimals)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${formatValue(target, decimals)}${suffix}`;
      }
    }

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
  }, { threshold: 0.25, rootMargin: "0px 0px -10% 0px" });

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
            <a class="btn btn-cyan" href="jobs.html">${icon("search")} Browse Jobs as Guest</a>
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
  if (state.session.loggedIn && state.session.role === "employer") {
    root.innerHTML = `
      <section class="container section">
        <div class="locked-state glass-card">
          <div class="eyebrow"><span class="spark">*</span> Employer account</div>
          <h1 class="section-title">This page is for public job discovery and candidate job tracking.</h1>
          <p class="section-sub">Your employer workspace has job posts, candidate search, applicants, and hiring pipeline tools.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="employer-app.html">${icon("layout-dashboard")} Open Employer Dashboard</a><a class="btn btn-ghost" href="jobs.html?guest=1">${icon("search")} Browse public jobs</a></div>
        </div>
      </section>
    `;
    createIcons();
    return;
  }
  if (state.session.loggedIn && needsOnboarding(root)) return;
  if (state.session.loggedIn) {
    root.innerHTML = `
      <section class="container os-layout">
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
      history.replaceState(null, "", `jobs.html?job=${active.id}#tracker`);
      renderList();
      renderDetail({ resetScroll: active.id !== previousJobId });
    }));
    qsa("[data-filter-stage]", listRoot).forEach(btn => btn.addEventListener("click", () => {
      const found = tracked.find(({ record }) => record.stage === btn.dataset.filterStage);
      if (found) {
        const previousJobId = active.id;
        active = found.job;
        renderList();
        renderDetail({ resetScroll: active.id !== previousJobId });
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
        history.replaceState(null, "", `jobs.html?job=${active.id}`);
        renderList();
        renderDetail({ resetScroll: active.id !== previousJobId });
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

  function renderDetail({ resetScroll = false } = {}) {
    state = readState();
    const loggedIn = Boolean(state.session.loggedIn);
    const saved = state.savedJobs.includes(active.id);
    const record = state.applicationRecords?.[active.id];
    const applied = Boolean(record && stageIndex(record.stage) >= stageIndex("applied"));
    const compared = DATA.jobs.filter(job => state.comparedJobs.includes(job.id));
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
        <div class="card">
          <h3>Company preview</h3>
          <p class="muted">${(DATA.companies.find(company => active.company.toLowerCase().includes(company.name.toLowerCase().split(" ")[0])) || DATA.companies[0]).summary}</p>
          <a class="btn btn-ghost" href="companies.html?q=${encodeURIComponent(active.company)}">${icon("building-2")} Research company</a>
        </div>
        <div class="card">
          <h3>Market demand</h3>
          <p class="muted">${active.industry} roles are showing ${active.match >= 85 ? "strong" : "steady"} demand in CareerGo's sample market pulse. Create a profile for a personalized salary and readiness read.</p>
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
          <a class="btn btn-cyan job-detail-action-wide" href="vera.html?topic=${encodeURIComponent(active.title)}">${icon("message-circle")} Ask Vera</a>
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
        `}
      </div>
    `;
    if (resetScroll) detailRoot.scrollTop = 0;
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
      const previousJobId = active.id;
      active = jobs[0] || DATA.jobs.find(job => !next.ignoredJobs.includes(job.id)) || DATA.jobs[0];
      renderList();
      renderDetail({ resetScroll: active.id !== previousJobId });
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
  if (loggedIn && state.session.role === "employer" && ["companies", "universities"].includes(kind)) {
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
  if (!loggedIn) {
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
    const pool = orgsFor(kind === "all" ? selectedType.toLowerCase() : kind);
    if (!q && kind === "universities") {
      return [...pool].sort((a, b) => (b.rating - a.rating) || (b.academics.employabilityRate - a.academics.employabilityRate));
    }
    if (!q && kind === "companies") {
      return [...pool].sort((a, b) => (b.rating - a.rating) || (b.open - a.open));
    }
    return pool.filter(org => {
      const programNames = (org.programs || []).map(p => p.name);
      const strongNames = (org.strongPrograms || []).map(p => p.name);
      const careerFields = (org.programs || []).flatMap(p => p.careerPaths || []);
      const roleNames = (org.roles || []).map(r => r.title);
      const roleDepartments = (org.roles || []).map(r => r.department);
      const roleSkills = (org.roles || []).flatMap(r => r.requiredSkills || []);
      const derivedTerms = [org.workMode || "", org.freshGraduateFriendly ? "fresh graduate friendly" : "", org.internshipAvailable ? "internship" : ""];
      const hay = [org.name, org.industry, org.location, ...org.tags, ...programNames, ...strongNames, ...careerFields, ...roleNames, ...roleDepartments, ...roleSkills, ...derivedTerms].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }

  function renderList() {
    const state = readState();
    const q = queryInput.value.trim();
    const items = filteredOrgs();
    const isUni = kind === "universities";
    const isDashboardKind = kind === "universities" || kind === "companies";
    const compareStateKey = isUni ? "comparedUniversities" : "comparedCompanies";
    const headingRoot = qs("[data-org-list-heading]");
    if (headingRoot) {
      if (isDashboardKind && !q) {
        const heading = isUni ? "Recommended universities" : "Recommended companies";
        const subtitle = isUni ? "Based on rating, employability, program strength, and career outcomes." : "Based on ratings, open roles, salary signals, growth, and review themes.";
        headingRoot.innerHTML = `<div class="org-list-heading"><h3>${heading}</h3><p class="muted small">${subtitle}</p></div>`;
      } else if (isDashboardKind && items.length === 0) {
        const heading = isUni ? "No universities found" : "No companies found";
        const subtitle = isUni ? "Try searching by program, location, university name, or career field." : "Try searching by company, role, industry, location, or skill.";
        headingRoot.innerHTML = `<div class="org-list-empty"><h3>${heading}</h3><p class="muted small">${subtitle}</p></div>`;
      } else {
        headingRoot.innerHTML = "";
      }
    }
    listRoot.innerHTML = items.map(org => {
      const metricLine = isUni
        ? `${icon("trending-up")} ${org.academics.employabilityRate}% employability - ${org.academics.tuitionRange}`
        : `${icon("briefcase")} ${org.open} open roles - ${org.salary}`;
      return `
      <button class="list-card ${org.id === active.id ? "active" : ""}" data-org-id="${org.id}">
        <div class="list-card-top">
          <div>
            <h3>${org.name}</h3>
            <div class="muted small">${org.industry} - ${org.location}</div>
          </div>
          ${isDashboardKind ? ratingText(org.rating) : rating(org.rating)}
        </div>
        ${pills(org.tags.slice(0, isDashboardKind ? 2 : 3), "gold")}
        ${isDashboardKind ? `
          <div class="list-card-metric muted small">${metricLine}</div>
          <label class="check-field inline custom-checkbox list-card-compare"><input type="checkbox" data-compare-org="${org.id}" ${state[compareStateKey].includes(org.id) ? "checked" : ""}> Compare</label>
        ` : ""}
      </button>
    `;
    }).join("");
    qsa("[data-org-id]", listRoot).forEach(btn => {
      btn.addEventListener("click", () => {
        active = [...DATA.companies, ...DATA.universities].find(org => org.id === btn.dataset.orgId);
        history.replaceState(null, "", `${kind === "universities" ? "universities" : "companies"}.html?org=${active.id}`);
        renderList();
        renderDetail();
      });
    });
    qsa("[data-compare-org]", listRoot).forEach(input => {
      input.addEventListener("click", event => event.stopPropagation());
      input.addEventListener("change", () => {
        const next = readState();
        const stateKey = isUni ? "comparedUniversities" : "comparedCompanies";
        const label = isUni ? "universities" : "companies";
        if (input.checked) {
          if (next[stateKey].length >= 3 && !next[stateKey].includes(input.dataset.compareOrg)) {
            input.checked = false;
            showToast(`You can compare up to 3 ${label}.`, "info");
            return;
          }
          next[stateKey] = [...new Set([...next[stateKey], input.dataset.compareOrg])];
        } else {
          next[stateKey] = next[stateKey].filter(id => id !== input.dataset.compareOrg);
        }
        writeState(next);
        renderCompareBar(label);
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
    const isUniversity = active.type === "University";
    const bodyContent = `
      <div class="detail-head">
        <div>
          <div class="muted">${active.industry} - ${active.location}</div>
        </div>
        <div><div class="muted small">${ratingText(active.rating)} - ${active.reviews + reviews.length} reviews</div></div>
      </div>
      <div class="detail-section" ${isUniversity ? "" : 'id="cd-overview"'}>
        ${isUniversity ? "" : `<p class="muted small" style="margin:0 0 4px">${active.size}</p>`}
        <p class="muted" style="margin:0 0 8px">${active.summary}</p>
        ${isUniversity ? `<p class="muted small" style="margin:0 0 8px"><strong>Known for:</strong> ${active.strongPrograms.map(p => p.name).join(", ")}</p>` : ""}
        ${pills(active.tags.slice(0, isUniversity ? 2 : active.tags.length), isUniversity ? "cyan" : "gold")}
        ${isUniversity ? `<div style="margin-top:8px"><span class="muted small">Top programs</span> ${pills(active.topPrograms, "cyan")}</div>` : ""}
      </div>
      ${isUniversity ? `
        <div class="detail-section score-grid score-grid-6">
          <div class="score-tile"><span>Employability rate</span><strong>${active.academics.employabilityRate}%</strong></div>
          <div class="score-tile"><span>Acceptance rate</span><strong>${active.academics.acceptanceRate}%</strong></div>
          <div class="score-tile"><span>Avg tuition</span><strong class="long">${active.academics.tuitionRange}</strong></div>
          <div class="score-tile"><span>Reviews</span><strong>${active.reviews + reviews.length}</strong></div>
          <div class="score-tile"><span>Student size</span><strong class="long">${active.size}</strong></div>
          <div class="score-tile"><span>Partner employers</span><strong>${active.partnerCount}</strong></div>
        </div>
        <div class="detail-section">
          <div class="vera-box">
            <h3>${icon("sparkles")} Vera's research note</h3>
            <p class="muted">${active.signal}. ${active.academics.employabilityRate}% of graduates are employed within 6 months, and the acceptance rate is around ${active.academics.acceptanceRate}%. Compare this against your target field, budget, and preferred campus culture before deciding.</p>
          </div>
        </div>
        <div class="detail-section">
          <div class="card">
            <h3>${icon("star")} Strong programs</h3>
            <div class="strong-program-grid">
              ${active.strongPrograms.map(p => `
                <div class="strong-program-item">
                  <h4>${p.name}</h4>
                  <p class="muted small">${p.why}</p>
                  <div class="strong-program-labels">
                    <span class="pill green">Career outcome: ${p.careerOutcome}</span>
                    <span class="pill cyan">Industry relevance: ${p.industryRelevance}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <div class="detail-section">
          <div class="section-head" style="margin-bottom:14px"><h3>Popular programs</h3></div>
          <div class="program-list">
            ${active.programs.map(p => {
              const compositeId = `${active.id}__${p.id}`;
              const compared = currentState.comparedPrograms.includes(compositeId);
              const searchQuery = queryInput.value.trim().toLowerCase();
              const isMatch = Boolean(searchQuery) && p.name.toLowerCase().includes(searchQuery);
              return `
              <div class="program-row ${isMatch ? "program-row-highlight" : ""}" data-program-row="${p.id}">
                <div class="program-row-main">
                  <h4>${p.name}</h4>
                  <div class="muted small">Level: ${p.level} - Duration: ${p.duration} - ${p.estimatedTuition}</div>
                </div>
                <span class="pill ${p.programStrength === "Strong" ? "green" : "gold"}">${p.programStrength}</span>
                <div class="program-row-actions">
                  <button class="btn btn-ghost" type="button" data-program-details="${compositeId}">${icon("file-text")} See details</button>
                  <button class="btn ${compared ? "btn-cyan" : "btn-ghost"}" type="button" data-compare-program="${compositeId}">${icon("scale")} ${compared ? "Added to compare" : "Compare program"}</button>
                </div>
              </div>
            `;
            }).join("")}
          </div>
        </div>
        <div class="detail-section">
          <div class="card">
            <h3>${icon("route")} SPM entry pathway</h3>
            <p class="muted"><strong>Foundation route:</strong> ${active.spmPathway.foundation}</p>
            <p class="muted"><strong>Diploma route:</strong> ${active.spmPathway.diploma}</p>
            <p class="muted"><strong>Degree route:</strong> ${active.spmPathway.degree}</p>
            <div class="pill-row">
              <span class="pill">English requirement: ${active.spmPathway.englishRequirement}</span>
              <span class="pill">Scholarship: ${active.spmPathway.scholarship}</span>
              <span class="pill">Next intake: ${active.spmPathway.nextIntake}</span>
            </div>
          </div>
        </div>
        <div class="detail-section">
          <div class="card">
            <h3>${icon("briefcase")} Career outcomes by program</h3>
            <div class="career-outcome-grid">
              ${active.programs.map(p => `
                <div>
                  <h4>${p.name}</h4>
                  <ul class="check-list">${p.careerPaths.map(c => `<li>${c}</li>`).join("")}</ul>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <div class="detail-section">
          <div class="card">
            <h3>${icon("lightbulb")} Outcome insights</h3>
            <p class="muted"><strong>Common graduate skills:</strong> ${active.outcomeInsights.commonSkills.join(", ")}</p>
            <p class="muted"><strong>Internship opportunities:</strong> ${active.outcomeInsights.internshipNote}</p>
            <p class="muted"><strong>Industry links:</strong> ${active.outcomeInsights.industryLinks}</p>
            <span class="pill green">Career readiness: ${active.outcomeInsights.careerReadiness}</span>
          </div>
        </div>
      ` : `
        <div class="detail-section">
          <div class="vera-box">
            <h3>${icon("sparkles")} Vera's research note</h3>
            <p class="muted">${active.veraNote}</p>
          </div>
        </div>
        <div class="detail-section score-grid score-grid-6">
          <div class="score-tile"><span>Overall rating</span><strong>${active.rating.toFixed(1)}</strong></div>
          <div class="score-tile"><span>Culture</span><strong>${active.scores.culture.toFixed(1)}</strong></div>
          <div class="score-tile"><span>Growth</span><strong>${active.scores.growth.toFixed(1)}</strong></div>
          <div class="score-tile"><span>Pay</span><strong>${active.scores.pay.toFixed(1)}</strong></div>
          <div class="score-tile"><span>Work-life balance</span><strong>${active.scores.balance.toFixed(1)}</strong></div>
          <div class="score-tile"><span>Hiring difficulty</span><strong class="long">${active.hiringDifficulty}</strong></div>
        </div>
        <div class="detail-section" id="cd-jobs">
          <div class="section-head" style="margin-bottom:14px"><h3>Common roles</h3></div>
          <div class="program-list">
            ${active.roles.map(r => {
              const compositeId = `${active.id}__${r.id}`;
              const compared = currentState.comparedRoles.includes(compositeId);
              const searchQuery = queryInput.value.trim().toLowerCase();
              const isMatch = Boolean(searchQuery) && r.title.toLowerCase().includes(searchQuery);
              return `
              <div class="program-row ${isMatch ? "program-row-highlight" : ""}" data-role-row="${r.id}">
                <div class="program-row-main">
                  <h4>${r.title}</h4>
                  <div class="muted small">${r.department} - ${r.salaryRange} - ${r.experienceLevel}</div>
                </div>
                <span class="pill ${r.status === "Open" ? "green" : "gold"}">${r.status}</span>
                <div class="program-row-actions">
                  <button class="btn btn-ghost" type="button" data-role-details="${compositeId}">${icon("file-text")} See details</button>
                  <button class="btn ${compared ? "btn-cyan" : "btn-ghost"}" type="button" data-compare-role="${compositeId}">${icon("scale")} ${compared ? "Added to compare" : "Compare role"}</button>
                </div>
              </div>
            `;
            }).join("")}
          </div>
        </div>
        <div class="detail-section" id="cd-requirements">
          <div class="card">
            <h3>${icon("graduation-cap")} Average requirements</h3>
            <div class="requirements-grid">
              <p class="muted"><strong>Education:</strong> ${active.averageRequirements.education}</p>
              <p class="muted"><strong>CGPA:</strong> ${active.averageRequirements.cgpa}</p>
              <p class="muted"><strong>Experience:</strong> ${active.averageRequirements.experience}</p>
              <p class="muted"><strong>English:</strong> ${active.averageRequirements.englishRequirement}</p>
              <p class="muted"><strong>Portfolio:</strong> ${active.averageRequirements.portfolio}</p>
              <p class="muted"><strong>Internship experience:</strong> ${active.averageRequirements.internshipPreferred}</p>
              <p class="muted"><strong>Certifications:</strong> ${active.averageRequirements.certifications}</p>
            </div>
            <div style="margin-top:10px"><span class="muted small">Common skills</span> ${pills(active.averageRequirements.commonSkills, "cyan")}</div>
            <div style="margin-top:10px"><span class="muted small">Tech / tools</span> ${pills(active.averageRequirements.techSkills, "cyan")}</div>
          </div>
        </div>
        <div class="detail-section" id="cd-hiring">
          <div class="card">
            <h3>${icon("list-checks")} Hiring process</h3>
            <div class="hiring-steps">${active.hiringProcess.steps.map((s, i) => `<div class="hiring-step"><span class="hiring-step-index">${i + 1}</span><span>${s}</span></div>`).join("")}</div>
            <p class="muted" style="margin-top:10px"><strong>Average response time:</strong> ${active.hiringProcess.avgResponseTime}</p>
            <p class="muted"><strong>Hiring difficulty:</strong> ${active.hiringProcess.difficulty}</p>
            <p class="muted"><strong>Assessment:</strong> ${active.hiringProcess.assessmentNote}</p>
          </div>
        </div>
        <div class="detail-section" id="cd-salary">
          <div class="card">
            <h3>${icon("wallet")} Salary and benefits</h3>
            <div class="requirements-grid">
              <p class="muted"><strong>Average salary range:</strong> ${active.salary}</p>
              <p class="muted"><strong>Fresh graduate salary:</strong> ${active.salaryBenefits.freshGradSalary}</p>
              <p class="muted"><strong>Internship allowance:</strong> ${active.salaryBenefits.internshipAllowance}</p>
              <p class="muted"><strong>Bonus / incentives:</strong> ${active.salaryBenefits.bonus}</p>
              <p class="muted"><strong>Medical benefits:</strong> ${active.salaryBenefits.medical}</p>
              <p class="muted"><strong>Training:</strong> ${active.salaryBenefits.training}</p>
              <p class="muted"><strong>Flexible work:</strong> ${active.salaryBenefits.flexibleWork}</p>
              <p class="muted"><strong>Leave benefits:</strong> ${active.salaryBenefits.leave}</p>
            </div>
          </div>
        </div>
        <div class="detail-section">
          <div class="card">
            <h3>${icon("trending-up")} Career growth</h3>
            <div class="requirements-grid">
              <p class="muted"><strong>Training quality:</strong> ${active.careerGrowth.trainingQuality}</p>
              <p class="muted"><strong>Promotion path:</strong> ${active.careerGrowth.promotionPath}</p>
              <p class="muted"><strong>Graduate program:</strong> ${active.careerGrowth.graduateProgram}</p>
              <p class="muted"><strong>Mentorship:</strong> ${active.careerGrowth.mentorship}</p>
              <p class="muted"><strong>Internal transfer:</strong> ${active.careerGrowth.internalTransfer}</p>
              <p class="muted"><strong>Learning opportunities:</strong> ${active.careerGrowth.learningOpportunities}</p>
            </div>
          </div>
        </div>
        <div class="detail-section" id="cd-culture">
          <div class="card">
            <h3>${icon("users")} Work culture</h3>
            <div class="requirements-grid">
              <p class="muted"><strong>Pace:</strong> ${active.workCulture.pace}</p>
              <p class="muted"><strong>Team style:</strong> ${active.workCulture.teamStyle}</p>
              <p class="muted"><strong>Work-life balance:</strong> ${active.workCulture.workLifeBalance}</p>
              <p class="muted"><strong>Management style:</strong> ${active.workCulture.managementStyle}</p>
              <p class="muted"><strong>Collaboration:</strong> ${active.workCulture.collaboration}</p>
              <p class="muted"><strong>Overtime signal:</strong> ${active.workCulture.overtimeSignal}</p>
              <p class="muted"><strong>Review themes:</strong> ${active.workCulture.reviewThemes}</p>
            </div>
          </div>
        </div>
      `}
      <div class="detail-section content-grid info-card-row">
        <div class="card">
          <h3>Highlights</h3>
          <ul class="check-list">${active.highlights.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div class="warning-box">
          <h3>${icon("alert-circle")} Watchouts</h3>
          <ul class="check-list">${active.watchouts.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
      </div>
      ${isUniversity ? `
        <div class="detail-section">
          <div class="card">
            <h3>${icon("users")} Top employers of alumni</h3>
            <ul class="check-list">${active.topEmployers.map(emp => `<li>${emp.companyId ? `<a href="companies.html?org=${emp.companyId}">${emp.name}</a>` : emp.name} - ${emp.count} graduates</li>`).join("")}</ul>
          </div>
        </div>
      ` : ""}
      <div class="detail-section" ${isUniversity ? "" : 'id="cd-reviews"'}>
        <div class="section-head" style="margin-bottom:14px">
          <h3>${isUniversity ? "Student reviews" : "Employee reviews"}</h3>
        </div>
        <div class="score-grid review-breakdown-row">
          ${isUniversity ? `
            <div class="score-tile"><span>Overall</span><strong>${active.rating.toFixed(1)}</strong></div>
            <div class="score-tile"><span>Career support</span><strong>${active.reviewBreakdown.careerSupport.toFixed(1)}</strong></div>
            <div class="score-tile"><span>Teaching quality</span><strong>${active.reviewBreakdown.teachingQuality.toFixed(1)}</strong></div>
            <div class="score-tile"><span>Facilities</span><strong>${active.reviewBreakdown.facilities.toFixed(1)}</strong></div>
          ` : `
            <div class="score-tile"><span>Overall</span><strong>${active.rating.toFixed(1)}</strong></div>
            <div class="score-tile"><span>Culture</span><strong>${active.scores.culture.toFixed(1)}</strong></div>
            <div class="score-tile"><span>Growth</span><strong>${active.scores.growth.toFixed(1)}</strong></div>
            <div class="score-tile"><span>Pay</span><strong>${active.scores.pay.toFixed(1)}</strong></div>
            <div class="score-tile"><span>Balance</span><strong>${active.scores.balance.toFixed(1)}</strong></div>
          `}
        </div>
        <div>
          ${(isUniversity ? [...reviews, ...active.studentReviews] : [...reviews, ...active.companyReviews]).map(review => `
            <div class="review-card">
              <div class="review-head">
                <div>
                  <h4>${review.title}</h4>
                  <div class="muted small">${review.author}${(review.program || review.role) ? ` - ${review.program || review.role}` : ""} - ${review.date}</div>
                </div>
                ${ratingText(review.rating)}
              </div>
              <p class="muted">${review.body}</p>
            </div>
          `).join("") || `<div class="review-card"><p class="muted">No reviews yet. Be the first to help other users research this ${active.type.toLowerCase()}.</p></div>`}
        </div>
      </div>
    `;
    const titleActions = currentLoggedIn ? `
      <div class="university-title-actions">
        <button class="btn btn-ghost" data-save-org>${icon(saved ? "bookmark-check" : "bookmark")} ${saved ? "Saved" : "Save"}</button>
        <button class="btn btn-ghost" data-review>${icon("edit-3")} Review</button>
        ${isUniversity ? "" : `<a class="btn btn-ghost" href="vera.html?topic=${encodeURIComponent(`${active.name} contact strategy`)}">${icon("send")} Contact</a>`}
        <a class="btn btn-cyan" href="vera.html?topic=${encodeURIComponent(`${active.name} ${isUniversity ? "university" : "company"} research`)}">${icon("message-circle")} Ask Vera</a>
      </div>
    ` : `
      <div class="university-title-actions">
        <button class="btn btn-ghost" data-auth-prompt="save and compare ${isUniversity ? "university" : "company"} research">${icon("bookmark")} Save</button>
        <button class="btn btn-ghost" data-auth-prompt="write a review">${icon("edit-3")} Review</button>
        ${isUniversity ? "" : `<button class="btn btn-ghost" data-auth-prompt="contact this company">${icon("send")} Contact</button>`}
        <button class="btn btn-cyan" data-auth-prompt="ask Vera for personalized research">${icon("message-circle")} Ask Vera</button>
      </div>
    `;
    const detailTabs = isUniversity ? "" : `
      <nav class="company-detail-tabs" data-detail-nav>
        <a href="#cd-overview" data-jump="cd-overview">Overview</a>
        <a href="#cd-jobs" data-jump="cd-jobs">Jobs</a>
        <a href="#cd-requirements" data-jump="cd-requirements">Requirements</a>
        <a href="#cd-hiring" data-jump="cd-hiring">Hiring</a>
        <a href="#cd-salary" data-jump="cd-salary">Salary</a>
        <a href="#cd-culture" data-jump="cd-culture">Culture</a>
        <a href="#cd-reviews" data-jump="cd-reviews">Reviews</a>
      </nav>
    `;
    detailRoot.innerHTML = `<div class="fixed-university-title"><div class="university-title-row"><h2>${active.name}</h2>${titleActions}</div>${detailTabs}</div><div class="university-detail-scroll">${bodyContent}</div>`;
    qsa("[data-compare-program]", detailRoot).forEach(btn => {
      btn.addEventListener("click", () => {
        const compositeId = btn.dataset.compareProgram;
        const next = readState();
        const already = next.comparedPrograms.includes(compositeId);
        if (!already && next.comparedPrograms.length >= 3) {
          showToast("You can compare up to 3 programs.", "info");
          return;
        }
        next.comparedPrograms = already ? next.comparedPrograms.filter(x => x !== compositeId) : [...next.comparedPrograms, compositeId];
        writeState(next);
        renderCompareBar("programs");
        renderDetail();
      });
    });
    qsa("[data-program-details]", detailRoot).forEach(btn => {
      btn.addEventListener("click", () => openProgramDetailModal(btn.dataset.programDetails));
    });
    qsa("[data-compare-role]", detailRoot).forEach(btn => {
      btn.addEventListener("click", () => {
        const compositeId = btn.dataset.compareRole;
        const next = readState();
        const already = next.comparedRoles.includes(compositeId);
        if (!already && next.comparedRoles.length >= 3) {
          showToast("You can compare up to 3 roles.", "info");
          return;
        }
        next.comparedRoles = already ? next.comparedRoles.filter(x => x !== compositeId) : [...next.comparedRoles, compositeId];
        writeState(next);
        renderCompareBar("roles");
        renderDetail();
      });
    });
    qsa("[data-role-details]", detailRoot).forEach(btn => {
      btn.addEventListener("click", () => openRoleDetailModal(btn.dataset.roleDetails));
    });
    qs("[data-detail-nav]", detailRoot)?.addEventListener("click", event => {
      const link = event.target.closest("[data-jump]");
      if (!link) return;
      event.preventDefault();
      const target = qs(`#${link.dataset.jump}`, detailRoot);
      const scrollContainer = qs(".university-detail-scroll", detailRoot);
      if (!target || !scrollContainer) return;
      const offset = target.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top + scrollContainer.scrollTop;
      scrollContainer.scrollTo({ top: offset, behavior: "smooth" });
    });
    if (!currentLoggedIn) {
      bindProtectedPrompts(detailRoot);
      createIcons();
      return;
    }
    qs("[data-review]", detailRoot)?.addEventListener("click", () => openReviewModal(active));
    qs("[data-save-org]", detailRoot)?.addEventListener("click", () => {
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
  if (kind === "universities" || kind === "companies") {
    renderCompareBar(kind === "universities" ? "universities" : "companies");
    renderCompareBar(kind === "universities" ? "programs" : "roles");
    document.addEventListener("careergo:compare-refresh", () => {
      renderList();
      renderDetail();
    });
    const filterToggle = qs("[data-filter-toggle]");
    const filterPanel = qs("[data-filter-panel]");
    if (filterToggle && filterPanel) {
      filterToggle.addEventListener("click", () => {
        filterPanel.hidden = !filterPanel.hidden;
        filterToggle.classList.toggle("active", !filterPanel.hidden);
      });
      qsa(".filter-chip", filterPanel).forEach(chip => {
        chip.addEventListener("click", () => chip.classList.toggle("active"));
      });
      qs("[data-filter-clear]", filterPanel)?.addEventListener("click", () => {
        qsa(".filter-chip", filterPanel).forEach(chip => chip.classList.remove("active"));
      });
    }
  }
}

const COMPARE_BAR_CONFIG = {
  universities: {
    stateKey: "comparedUniversities", attr: "data-university-compare-bar", label: "universities", secondary: false,
    openModal: () => openUniversityCompareModal(),
    labelFor: id => DATA.universities.find(u => u.id === id)?.name || id
  },
  programs: {
    stateKey: "comparedPrograms", attr: "data-program-compare-bar", label: "programs", secondary: true,
    openModal: () => openProgramCompareModal(),
    labelFor: compositeId => {
      const [uniId, progId] = compositeId.split("__");
      const uni = DATA.universities.find(u => u.id === uniId);
      const program = uni?.programs.find(p => p.id === progId);
      return program && uni ? `${program.name} (${uni.name})` : compositeId;
    }
  },
  companies: {
    stateKey: "comparedCompanies", attr: "data-company-compare-bar", label: "companies", secondary: false,
    openModal: () => openCompanyCompareModal(),
    labelFor: id => DATA.companies.find(c => c.id === id)?.name || id
  },
  roles: {
    stateKey: "comparedRoles", attr: "data-role-compare-bar", label: "roles", secondary: true,
    openModal: () => openRoleCompareModal(),
    labelFor: compositeId => {
      const [companyId, roleId] = compositeId.split("__");
      const company = DATA.companies.find(c => c.id === companyId);
      const role = company?.roles.find(r => r.id === roleId);
      return role && company ? `${role.title} (${company.name})` : compositeId;
    }
  }
};

function renderCompareBar(kind) {
  const config = COMPARE_BAR_CONFIG[kind];
  const state = readState();
  const ids = state[config.stateKey];
  let bar = qs(`[${config.attr}]`);
  if (!ids.length) {
    bar?.remove();
    return;
  }
  if (!bar) {
    bar = document.createElement("div");
    bar.className = config.secondary ? "compare-bar compare-bar-programs" : "compare-bar";
    bar.setAttribute(config.attr, "");
    document.body.appendChild(bar);
  }
  const labels = ids.map(config.labelFor);
  bar.innerHTML = `
    <div class="compare-bar-inner">
      <div>
        <strong>Comparing ${ids.length} ${config.label}</strong>
        <div class="muted small">${labels.join(", ")}</div>
      </div>
      <div class="compare-bar-actions">
        <button class="btn btn-cyan" type="button" data-compare-view>${icon("scale")} View comparison</button>
        <button class="btn btn-ghost" type="button" data-compare-clear>${icon("x")} Clear</button>
      </div>
    </div>
  `;
  qs("[data-compare-view]", bar).addEventListener("click", () => config.openModal());
  qs("[data-compare-clear]", bar).addEventListener("click", () => {
    const next = readState();
    next[config.stateKey] = [];
    writeState(next);
    renderCompareBar(kind);
    document.dispatchEvent(new Event("careergo:compare-refresh"));
  });
  createIcons();
}

function openUniversityCompareModal() {
  const state = readState();
  const unis = DATA.universities.filter(u => state.comparedUniversities.includes(u.id));
  if (!unis.length) return;
  const rows = [
    ["Rating", u => u.rating.toFixed(1)],
    ["Reviews", u => u.reviews],
    ["Public/private", u => u.industry],
    ["Location", u => u.location],
    ["Employability rate", u => `${u.academics.employabilityRate}%`],
    ["Acceptance rate", u => `${u.academics.acceptanceRate}%`],
    ["Average tuition", u => u.academics.tuitionRange],
    ["Student size", u => u.size],
    ["Strong programs", u => u.strongPrograms.map(p => p.name).join(", ")],
    ["Popular programs", u => u.programs.map(p => p.name).join(", ")],
    ["SPM pathway", u => u.spmPathway.foundation],
    ["Scholarship availability", u => u.spmPathway.scholarship],
    ["Internship opportunities", u => u.outcomeInsights.internshipNote],
    ["Industry links", u => u.outcomeInsights.industryLinks],
    ["Top employers / alumni", u => u.topEmployers.map(e => e.name).join(", ")],
    ["Highlights", u => u.highlights.join("; ")],
    ["Watchouts", u => u.watchouts.join("; ")]
  ];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card compare-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Compare universities</div>
          <h2>${unis.map(u => u.name).join(" vs ")}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <div class="table-wrap">
        <table class="comparison-table compare-modal-table">
          <thead><tr><th>Aspect</th>${unis.map(u => `<th>${u.name}</th>`).join("")}</tr></thead>
          <tbody>${rows.map(([label, fn]) => `<tr><td><strong>${label}</strong></td>${unis.map(u => `<td>${fn(u)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  createIcons();
}

function openProgramDetailModal(compositeId) {
  const [uniId, progId] = compositeId.split("__");
  const uni = DATA.universities.find(u => u.id === uniId);
  const program = uni?.programs.find(p => p.id === progId);
  if (!uni || !program) return;
  const compared = readState().comparedPrograms.includes(compositeId);
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card program-detail-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${uni.name}</div>
          <h2>${program.name}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <div class="program-detail-body">
        <div class="program-detail-section"><h3>Overview</h3><p class="muted">${program.overview}</p></div>
        <div class="program-detail-section"><h3>Level</h3><p class="muted">${program.level}</p></div>
        <div class="program-detail-section"><h3>Duration</h3><p class="muted">${program.duration}</p></div>
        <div class="program-detail-section"><h3>Estimated tuition</h3><p class="muted">${program.estimatedTuition}</p></div>
        <div class="program-detail-section"><h3>Suitable for SPM graduates</h3><p class="muted">${program.suitableForSPM ? "Yes" : "No"}</p></div>
        <div class="program-detail-section"><h3>SPM pathway</h3><p class="muted">${program.spmPathway}</p></div>
        <div class="program-detail-section"><h3>Entry requirements</h3><p class="muted">${program.entryRequirement}</p></div>
        <div class="program-detail-section"><h3>Main subjects / skills learned</h3><ul class="check-list">${[...program.mainSubjects, ...program.mainSkills].map(x => `<li>${x}</li>`).join("")}</ul></div>
        <div class="program-detail-section"><h3>Career paths</h3><ul class="check-list">${program.careerPaths.map(c => `<li>${c}</li>`).join("")}</ul></div>
        <div class="program-detail-section"><h3>Internship / industry exposure</h3><p class="muted">${program.internshipAvailability}. ${program.industryExposure}</p></div>
        <div class="program-detail-section"><h3>Program strength</h3><p class="muted">${program.programStrength} - ${program.employabilityOutcome}</p></div>
        <div class="program-detail-section"><h3>Accreditation</h3><p class="muted">${program.accreditation}</p></div>
        <div class="program-detail-section"><h3>Scholarship availability</h3><p class="muted">${program.scholarshipAvailability}</p></div>
        <div class="program-detail-section"><h3>Watchouts</h3><ul class="check-list">${program.watchouts.map(w => `<li>${w}</li>`).join("")}</ul></div>
      </div>
      <div class="hero-actions" style="margin-top:16px">
        <button class="btn ${compared ? "btn-cyan" : "btn-ghost"}" type="button" data-compare-program="${compositeId}">${icon("scale")} ${compared ? "Added to compare" : "Compare program"}</button>
        <button class="btn btn-ghost" type="button" data-close>Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  qs("[data-compare-program]", backdrop).addEventListener("click", event => {
    const btn = event.currentTarget;
    const next = readState();
    const already = next.comparedPrograms.includes(compositeId);
    if (!already && next.comparedPrograms.length >= 3) {
      showToast("You can compare up to 3 programs.", "info");
      return;
    }
    next.comparedPrograms = already ? next.comparedPrograms.filter(x => x !== compositeId) : [...next.comparedPrograms, compositeId];
    writeState(next);
    renderCompareBar("programs");
    document.dispatchEvent(new Event("careergo:compare-refresh"));
    const nowCompared = !already;
    btn.classList.toggle("btn-cyan", nowCompared);
    btn.classList.toggle("btn-ghost", !nowCompared);
    btn.innerHTML = `${icon("scale")} ${nowCompared ? "Added to compare" : "Compare program"}`;
    createIcons();
  });
  createIcons();
}

function openProgramCompareModal() {
  const state = readState();
  const items = state.comparedPrograms.map(compositeId => {
    const [uniId, progId] = compositeId.split("__");
    const uni = DATA.universities.find(u => u.id === uniId);
    const program = uni?.programs.find(p => p.id === progId);
    return uni && program ? { uni, program } : null;
  }).filter(Boolean);
  if (!items.length) return;
  const rows = [
    ["University name", item => item.uni.name],
    ["Program name", item => item.program.name],
    ["Program strength", item => item.program.programStrength],
    ["Level", item => item.program.level],
    ["Duration", item => item.program.duration],
    ["Estimated tuition", item => item.program.estimatedTuition],
    ["Suitable for SPM graduates", item => item.program.suitableForSPM ? "Yes" : "No"],
    ["SPM pathway", item => item.program.spmPathway],
    ["Entry requirements", item => item.program.entryRequirement],
    ["Main subjects / skills learned", item => [...item.program.mainSubjects, ...item.program.mainSkills].join(", ")],
    ["Internship availability", item => item.program.internshipAvailability],
    ["Industry exposure", item => item.program.industryExposure],
    ["Industry relevance", item => item.program.industryRelevance],
    ["Career paths", item => item.program.careerPaths.join(", ")],
    ["Employability / career outcome label", item => item.program.employabilityOutcome],
    ["Professional recognition / accreditation", item => item.program.accreditation],
    ["Scholarship availability", item => item.program.scholarshipAvailability],
    ["Watchouts", item => item.program.watchouts.join("; ")]
  ];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card compare-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Compare programs</div>
          <h2>${items.map(item => `${item.program.name} (${item.uni.name})`).join(" vs ")}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <div class="table-wrap">
        <table class="comparison-table compare-modal-table">
          <thead><tr><th>Aspect</th>${items.map(item => `<th>${item.program.name}<br><span class="muted small">${item.uni.name}</span></th>`).join("")}</tr></thead>
          <tbody>${rows.map(([label, fn]) => `<tr><td><strong>${label}</strong></td>${items.map(item => `<td>${fn(item)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  createIcons();
}

function openCompanyCompareModal() {
  const state = readState();
  const companies = DATA.companies.filter(c => state.comparedCompanies.includes(c.id));
  if (!companies.length) return;
  const rows = [
    ["Rating", c => c.rating.toFixed(1)],
    ["Industry", c => c.industry],
    ["Location", c => c.location],
    ["Culture", c => c.scores.culture.toFixed(1)],
    ["Growth", c => c.scores.growth.toFixed(1)],
    ["Pay", c => c.scores.pay.toFixed(1)],
    ["Work-life balance", c => c.scores.balance.toFixed(1)],
    ["Open vacancies", c => c.open],
    ["Average salary range", c => c.salary],
    ["Fresh graduate friendly", c => c.freshGraduateFriendly ? "Yes" : "No"],
    ["Internship availability", c => c.internshipAvailable ? "Yes" : "No"],
    ["Remote/hybrid", c => c.workMode],
    ["Hiring difficulty", c => c.hiringDifficulty],
    ["Average requirements", c => `${c.averageRequirements.education}; CGPA ${c.averageRequirements.cgpa}`],
    ["Common roles", c => c.roles.map(r => r.title).join(", ")],
    ["Benefits", c => c.salaryBenefits.medical],
    ["Training / graduate program", c => c.careerGrowth.graduateProgram],
    ["Career growth", c => c.careerGrowth.promotionPath],
    ["Highlights", c => c.highlights.join("; ")],
    ["Watchouts", c => c.watchouts.join("; ")]
  ];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card compare-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Compare companies</div>
          <h2>${companies.map(c => c.name).join(" vs ")}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <div class="table-wrap">
        <table class="comparison-table compare-modal-table">
          <thead><tr><th>Aspect</th>${companies.map(c => `<th>${c.name}</th>`).join("")}</tr></thead>
          <tbody>${rows.map(([label, fn]) => `<tr><td><strong>${label}</strong></td>${companies.map(c => `<td>${fn(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  createIcons();
}

function openRoleDetailModal(compositeId) {
  const [companyId, roleId] = compositeId.split("__");
  const company = DATA.companies.find(c => c.id === companyId);
  const role = company?.roles.find(r => r.id === roleId);
  if (!company || !role) return;
  const compared = readState().comparedRoles.includes(compositeId);
  const overview = `${role.title} role in the ${role.department} team at ${company.name}. ${role.responsibilities[0]}`;
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card program-detail-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">${company.name}</div>
          <h2>${role.title}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <div class="program-detail-body">
        <div class="program-detail-section"><h3>Overview</h3><p class="muted">${overview}</p></div>
        <div class="program-detail-section"><h3>Salary range</h3><p class="muted">${role.salaryRange}</p></div>
        <div class="program-detail-section"><h3>Employment type</h3><p class="muted">${role.employmentType}</p></div>
        <div class="program-detail-section"><h3>Location</h3><p class="muted">${role.location}</p></div>
        <div class="program-detail-section"><h3>Work mode</h3><p class="muted">${role.workMode}</p></div>
        <div class="program-detail-section"><h3>Experience level</h3><p class="muted">${role.experienceLevel}</p></div>
        <div class="program-detail-section"><h3>Education requirement</h3><p class="muted">${role.educationRequirement} (CGPA: ${role.cgpaRequirement})</p></div>
        <div class="program-detail-section"><h3>Skills required</h3><ul class="check-list">${role.requiredSkills.map(s => `<li>${s}</li>`).join("")}</ul></div>
        <div class="program-detail-section"><h3>Preferred skills</h3><ul class="check-list">${role.preferredSkills.map(s => `<li>${s}</li>`).join("")}</ul></div>
        <div class="program-detail-section"><h3>Responsibilities</h3><ul class="check-list">${role.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul></div>
        <div class="program-detail-section"><h3>Hiring process</h3><p class="muted">${role.hiringProcess}</p></div>
        <div class="program-detail-section"><h3>Career path</h3><p class="muted">${role.careerPath}</p></div>
        <div class="program-detail-section"><h3>Watchouts</h3><ul class="check-list">${role.watchouts.map(w => `<li>${w}</li>`).join("")}</ul></div>
      </div>
      <div class="hero-actions" style="margin-top:16px">
        <button class="btn ${compared ? "btn-cyan" : "btn-ghost"}" type="button" data-compare-role="${compositeId}">${icon("scale")} ${compared ? "Added to compare" : "Compare role"}</button>
        <button class="btn btn-ghost" type="button" data-close>Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  qs("[data-compare-role]", backdrop).addEventListener("click", event => {
    const btn = event.currentTarget;
    const next = readState();
    const already = next.comparedRoles.includes(compositeId);
    if (!already && next.comparedRoles.length >= 3) {
      showToast("You can compare up to 3 roles.", "info");
      return;
    }
    next.comparedRoles = already ? next.comparedRoles.filter(x => x !== compositeId) : [...next.comparedRoles, compositeId];
    writeState(next);
    renderCompareBar("roles");
    document.dispatchEvent(new Event("careergo:compare-refresh"));
    const nowCompared = !already;
    btn.classList.toggle("btn-cyan", nowCompared);
    btn.classList.toggle("btn-ghost", !nowCompared);
    btn.innerHTML = `${icon("scale")} ${nowCompared ? "Added to compare" : "Compare role"}`;
    createIcons();
  });
  createIcons();
}

function openRoleCompareModal() {
  const state = readState();
  const items = state.comparedRoles.map(compositeId => {
    const [companyId, roleId] = compositeId.split("__");
    const company = DATA.companies.find(c => c.id === companyId);
    const role = company?.roles.find(r => r.id === roleId);
    return company && role ? { company, role } : null;
  }).filter(Boolean);
  if (!items.length) return;
  const rows = [
    ["Company", item => item.company.name],
    ["Role", item => item.role.title],
    ["Department", item => item.role.department],
    ["Salary range", item => item.role.salaryRange],
    ["Employment type", item => item.role.employmentType],
    ["Experience level", item => item.role.experienceLevel],
    ["Education requirement", item => item.role.educationRequirement],
    ["CGPA requirement", item => item.role.cgpaRequirement],
    ["Required skills", item => item.role.requiredSkills.join(", ")],
    ["Preferred skills", item => item.role.preferredSkills.join(", ")],
    ["Tools / technologies", item => item.role.tools.join(", ")],
    ["Work mode", item => item.role.workMode],
    ["Location", item => item.role.location],
    ["Hiring difficulty", item => item.role.hiringDifficulty],
    ["Application process", item => item.role.hiringProcess],
    ["Career path", item => item.role.careerPath],
    ["Benefits", item => item.role.benefits.join(", ")],
    ["Watchouts", item => item.role.watchouts.join("; ")]
  ];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal card compare-modal">
      <div class="modal-head">
        <div>
          <div class="section-kicker">Compare roles</div>
          <h2>${items.map(item => `${item.role.title} (${item.company.name})`).join(" vs ")}</h2>
        </div>
        <button type="button" class="btn btn-ghost" data-close>${icon("x")}</button>
      </div>
      <div class="table-wrap">
        <table class="comparison-table compare-modal-table">
          <thead><tr><th>Aspect</th>${items.map(item => `<th>${item.role.title}<br><span class="muted small">${item.company.name}</span></th>`).join("")}</tr></thead>
          <tbody>${rows.map(([label, fn]) => `<tr><td><strong>${label}</strong></td>${items.map(item => `<td>${fn(item)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  qsa("[data-close]", backdrop).forEach(btn => btn.addEventListener("click", () => backdrop.remove()));
  backdrop.addEventListener("click", event => { if (event.target === backdrop) backdrop.remove(); });
  createIcons();
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
  root.innerHTML = appShell("dashboard", `
    <section class="glass-card dashboard-hero" data-tour-target="dashboard-hero">
      <div>
        <div class="eyebrow"><span class="spark">*</span> My Career OS ${state.session.isDemo ? `<span class="demo-badge inline">${icon("monitor-play")} Demo Mode</span>` : ""}</div>
        <h1 class="section-title">Today, focus on one clear move.</h1>
        <p class="section-sub">Good morning, ${getFirstName(state)}. CareerGo is tuned for ${profile.careerStage.toLowerCase()} and will stay calm, practical, and updated as your profile changes.</p>
      </div>
      ${healthRing(intel)}
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
    <section class="career-os-grid">
      <article class="glass-card">
        <div class="section-head compact-section-head"><div><div class="section-kicker">Profile completion</div><h2 class="section-title mini">Make matching sharper.</h2></div><span class="score">${profileCompletion}%</span></div>
        ${progressBar(profileCompletion)}
        <ul class="check-list compact-list">
          <li>${profile.resume.uploaded || profile.resume.name ? "Resume evidence is available." : "Upload a resume for ATS and evidence checks."}</li>
          <li>${profile.skills.technical.length ? "Technical skills are mapped." : "Add technical skills to improve role fit."}</li>
          <li>${profile.preferences.roles.length ? "Role preferences are set." : "Set preferred roles and industries."}</li>
        </ul>
      </article>
      <article class="glass-card">
        <div class="section-head compact-section-head"><div><div class="section-kicker">Skill gap tracker</div><h2 class="section-title mini">Bridge skills for ${target}.</h2></div><a class="btn btn-ghost" href="market.html#roadmap">${icon("route")} Roadmap</a></div>
        ${["Portfolio evidence", "Interview story", "Market salary proof"].map((skill, index) => `<div class="insight-row"><span>${skill}</span><strong>${["Needs proof", "Practice", "Benchmark"][index]}</strong></div>`).join("")}
      </article>
      <article class="glass-card">
        <div class="section-head compact-section-head"><div><div class="section-kicker">Company recommendations</div><h2 class="section-title mini">Research before applying.</h2></div><a class="btn btn-ghost" href="companies.html">${icon("building-2")} Companies</a></div>
        <div class="list-stack">
          ${(savedOrgs.length ? savedOrgs : DATA.companies.slice(0, 2)).slice(0, 2).map(org => `<a class="list-card quiet" href="companies.html?org=${org.id}"><div class="list-card-top"><div><h3>${org.name}</h3><div class="muted small">${org.signal}</div></div>${rating(org.rating)}</div></a>`).join("")}
        </div>
      </article>
      <article class="glass-card">
        <div class="section-head compact-section-head"><div><div class="section-kicker">Market pulse</div><h2 class="section-title mini">Signals worth watching.</h2></div><a class="btn btn-ghost" href="market.html">${icon("trending-up")} Open</a></div>
        ${DATA.pulse.slice(0, 2).map(item => `<div class="review-card"><strong>${item.title}</strong><p class="muted small">${item.impact}</p></div>`).join("")}
      </article>
      <article class="glass-card">
        <div class="section-head compact-section-head"><div><div class="section-kicker">Upcoming interviews</div><h2 class="section-title mini">Prep with context.</h2></div><a class="btn btn-ghost" href="vera.html#interview">${icon("messages-square")} Practice</a></div>
        ${trackedJobs.filter(item => item.record.stage === "interview").slice(0, 2).map(({ job, record }) => `<div class="list-card quiet"><div class="list-card-top"><div><h3>${job.title}</h3><div class="muted small">${job.company}</div></div><span class="pill gold">${record.deadline}</span></div></div>`).join("") || `<p class="muted">No interviews yet. Vera will surface prep tasks when an application reaches interview stage.</p>`}
      </article>
      <article class="glass-card">
        <div class="section-head compact-section-head"><div><div class="section-kicker">Recent activity</div><h2 class="section-title mini">Your latest signals.</h2></div><span class="pill cyan">${state.notifications.length} notes</span></div>
        ${state.notifications.slice(0, 3).map(note => `<div class="review-card"><strong>${note.title}</strong><p class="muted small">${note.body}</p></div>`).join("")}
      </article>
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
    if (target) target.scrollTop = target.scrollHeight;
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
          ["baseline-profile", "Update Career Intelligence profile and resume baseline", "profile.html"],
          ["baseline-target", `Choose one target path: ${getTargetLabel(state.profile)}`, "jobs.html"],
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
          ["proof-strategy", "Write one product strategy memo from a past project", "profile.html"],
          ["proof-metrics", "Add before/after metrics to one case study", "profile.html"],
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
          ["apply-roles", "Apply to 5 roles above your match threshold", "jobs.html"],
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
  root.innerHTML = appShell("intelligence", `
    <section class="glass-card dashboard-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Private Career Intelligence</div><h1 class="section-title">Resume profile and career data.</h1><p class="section-sub">${intel.summary}</p></div>
      ${healthRing(intel, false)}
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
    <form class="os-main profile-form" data-profile-form>
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
  const educationSummary = [profile.background.school, profile.background.courseMajor].filter(Boolean).join(" - ") || "Education details available on request";
  root.innerHTML = appShell("", `
    <section class="public-profile-shell">
      <article class="glass-card public-profile-hero">
        <div class="public-avatar">${name.split(" ").map(part => part[0]).join("").slice(0, 2).toUpperCase()}</div>
        <div>
          <div class="eyebrow"><span class="spark">*</span> Public Profile Preview</div>
          <h1 class="section-title">${name}</h1>
          <p class="section-sub">${target} · ${locationLabel}</p>
          <p class="muted">CareerGo public profiles help employers and collaborators understand your headline, evidence, portfolio, skills, and visibility preferences without exposing private Career Intelligence notes.</p>
          <div class="hero-actions compact-actions">
            <button class="btn btn-primary" type="button">${icon("user-plus")} Connect</button>
            <button class="btn btn-ghost" type="button">${icon("send")} Contact</button>
            <a class="btn btn-cyan" href="profile.html">${icon("brain-circuit")} Edit career data</a>
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
          <p class="muted">${profile.background.educationLevel || "Education level"} ${profile.background.expectedGraduationYear ? `· ${profile.background.expectedGraduationYear}` : ""}</p>
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
    <section class="content-grid">
      <article class="glass-card"><div class="section-head compact-section-head"><div><div class="section-kicker">Saved jobs</div><h2 class="section-title mini">${savedJobs.length} roles</h2></div><a class="btn btn-ghost" href="jobs.html">${icon("briefcase")} Jobs</a></div><div class="list-stack">${savedJobs.map(job => `<a class="list-card quiet" href="jobs.html?job=${job.id}"><div class="list-card-top"><div><h3>${job.title}</h3><div class="muted small">${job.company} - ${job.salary}</div></div><span class="score">${job.match}%</span></div></a>`).join("") || `<p class="muted">No saved jobs yet.</p>`}</div></article>
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
          ${breakdown.map(([label, value, note]) => `
            <div class="market-breakdown-row">
              <div><strong>${label}</strong><span>${note}</span></div>
              <div class="market-breakdown-bar"><i style="width:${Math.round((value / maxBreakdown) * 100)}%"></i></div>
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
            <a class="btn btn-ghost" href="profile.html">${icon("brain-circuit")} Update proof</a>
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
        { id: "market-proof", title: `Prove ${current.skills[0]}`, body: "Add one project story with context, trade-off, metric, and result.", href: "profile.html", done: false },
        { id: "market-benchmark", title: "Benchmark 5 roles", body: "Compare salary range, demand, competition, and required proof.", href: "jobs.html", done: false },
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
  root.innerHTML = appShell("autopilot", `
    <section class="glass-card dashboard-hero">
      <div><div class="eyebrow"><span class="spark">*</span> Applications</div><h1 class="section-title">Track every role from saved to outcome.</h1><p class="section-sub">See status, next action, deadline, Vera advice, and automation rules in one place.</p></div>
      <div class="radar"><span></span></div>
    </section>
    <section class="glass-card application-overview">
      <div class="section-head">
        <div><div class="section-kicker">Application command center</div><h2 class="section-title mini">Nothing disappears after you apply.</h2></div>
        <div class="hero-actions compact-actions"><a class="btn btn-primary" href="jobs.html#tracker">${icon("briefcase")} Manage in Jobs</a><button class="btn btn-cyan" type="button" data-add-best-role>${icon("plus")} Track best match</button></div>
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
              ${applicationProgress(record)}
            </article>
          `).join("") : `<div class="card">No applications match this stage yet.</div>`}
        </div>
        <aside class="glass-card application-detail-card" data-application-detail>
          ${activeItem ? `
            <div class="detail-head"><div><h2>${activeItem.job.title}</h2><div class="muted">${activeItem.job.company} - ${activeItem.job.location}</div></div>${applicationStagePill(activeItem.record.stage)}</div>
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
              <button class="btn btn-ghost" type="submit">${icon("save")} Save note</button>
            </form>
            <div class="plan-outcome"><strong>Next action</strong><span>${activeItem.record.nextAction}</span></div>
            <div class="plan-command-row">
              <button class="btn btn-cyan" type="button" data-app-vera="${activeItem.job.id}">${icon("sparkles")} Ask Vera</button>
              <a class="btn btn-ghost" href="jobs.html?job=${activeItem.job.id}#tracker">${icon("external-link")} Open job</a>
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
          <div class="application-suggestion-list">${suggestedJobs.map(job => `<button class="pill cyan" type="button" data-track-role="${job.id}">${icon("plus")} ${job.title} · ${job.match}%</button>`).join("")}</div>
        </div>
      ` : ""}
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

const EMPLOYER_NAV_GROUPS = [
  { label: "Overview", items: [["dashboard", "Dashboard", "layout-dashboard"]] },
  { label: "Hire", items: [
    ["roles", "Roles", "briefcase"],
    ["pipeline", "Talent Pipeline", "kanban"]
  ] },
  { label: "Connect", items: [
    ["community", "Community", "messages-square"],
    ["company", "Company", "building-2"]
  ] },
  { label: "AI", items: [["vera", "Vera", "sparkles"]] },
  { label: "Account", items: [["settings", "Settings", "settings"]] }
];

const EMPLOYER_VIEW_KEYS = [...EMPLOYER_NAV_GROUPS.flatMap(group => group.items.map(([key]) => key)), "role-builder", "company-edit"];
const EMPLOYER_VIEW_TITLES = Object.fromEntries(EMPLOYER_NAV_GROUPS.flatMap(group => group.items.map(([key, label]) => [key, label])));

let employerRouteState = { view: "", params: {} };

function renderEmployerShell(root) {
  const state = readState();
  const employer = state.employerProfile || {};
  root.innerHTML = `
    <header class="emp-app-header">
      <div class="emp-app-header-left">
        <button type="button" class="emp-app-menu-btn" data-emp-menu-toggle aria-label="Open navigation">${icon("menu")}</button>
        <a class="emp-app-brand" href="index.html">${icon("layout-dashboard")}<span>CareerGo <small>Employer OS</small></span></a>
      </div>
      <div class="emp-app-header-search field">
        ${icon("search")}
        <input type="text" placeholder="Search candidates, roles, applicants..." data-emp-search-input autocomplete="off">
        <div class="emp-search-results" data-emp-search-results hidden></div>
      </div>
      <div class="emp-app-header-right">
        <button type="button" class="emp-app-icon-btn" aria-label="Notifications">${icon("bell")}</button>
        <button type="button" class="emp-app-identity">
          <span class="emp-app-avatar">${getFirstName(state).charAt(0).toUpperCase()}</span>
          <span class="emp-app-identity-text">${getFirstName(state)} <small>${employer.company || "Your Workspace"}</small></span>
        </button>
      </div>
    </header>
    <div class="emp-app-body">
      <aside class="emp-app-sidebar" data-emp-sidebar>
        <nav aria-label="Employer navigation">
          ${EMPLOYER_NAV_GROUPS.map(group => `
            <div class="emp-nav-group">
              <span class="emp-nav-group-label">${group.label}</span>
              ${group.items.map(([key, label, ic]) => `<a href="#${key}" class="emp-nav-item" data-emp-nav="${key}">${icon(ic)}<span>${label}</span></a>`).join("")}
            </div>
          `).join("")}
        </nav>
        <button type="button" class="emp-nav-item" data-logout>${icon("log-out")}<span>Logout</span></button>
      </aside>
      <div class="emp-app-sidebar-overlay" data-emp-sidebar-overlay></div>
      <main id="employer-view" class="emp-app-main"></main>
    </div>
  `;
  createIcons();

  qsa("[data-emp-nav]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    qs("[data-emp-sidebar]", root)?.classList.remove("emp-sidebar-hover");
    employerNavigateTo(link.dataset.empNav);
  }));
  qs("[data-emp-menu-toggle]", root)?.addEventListener("click", () => {
    qs("[data-emp-sidebar]", root)?.classList.toggle("emp-sidebar-hover");
  });
  qs("[data-emp-sidebar-overlay]", root)?.addEventListener("click", () => {
    qs("[data-emp-sidebar]", root)?.classList.remove("emp-sidebar-hover");
  });
  const sidebar = qs("[data-emp-sidebar]", root);
  if (sidebar) {
    let collapseTimer = null;
    const expand = () => {
      window.clearTimeout(collapseTimer);
      sidebar.classList.add("emp-sidebar-hover");
    };
    const scheduleCollapse = () => {
      window.clearTimeout(collapseTimer);
      collapseTimer = window.setTimeout(() => sidebar.classList.remove("emp-sidebar-hover"), 200);
    };
    sidebar.addEventListener("mouseenter", expand);
    sidebar.addEventListener("focusin", expand);
    sidebar.addEventListener("mouseleave", scheduleCollapse);
    sidebar.addEventListener("focusout", scheduleCollapse);

    if (window.matchMedia("(hover: none)").matches) {
      sidebar.addEventListener("click", event => {
        if (event.target.closest("[data-emp-nav], [data-logout]")) return;
        sidebar.classList.toggle("emp-sidebar-hover");
      });
      document.addEventListener("click", event => {
        if (!sidebar.contains(event.target)) sidebar.classList.remove("emp-sidebar-hover");
      });
    }
  }
}

function parseEmployerHash() {
  const raw = (location.hash || "").replace(/^#\/?/, "");
  const [view, id] = raw.split("/");
  return {
    view: EMPLOYER_VIEW_KEYS.includes(view) ? view : "dashboard",
    params: id ? { id } : {}
  };
}

function employerNavigateTo(view, params = {}, options = {}) {
  const root = qs("#employer-view");
  if (!root) return;
  const isSameRoute = employerRouteState.view === view && employerRouteState.params.id === params.id;
  if (isSameRoute && !options.force) return;

  employerRouteState = { view, params };
  qsa("[data-emp-nav]").forEach(link => link.classList.toggle("active", link.dataset.empNav === view));

  renderEmployerView(view, params, root);
  root.scrollTop = 0;

  const nextHash = `#${view}${params.id ? "/" + params.id : ""}`;
  if (location.hash !== nextHash) history.replaceState(null, "", nextHash);
}

function renderEmployerView(view, params, root) {
  switch (view) {
    case "dashboard": return renderEmployerDashboard(root);
    case "roles": return renderEmployerRolesList(root);
    case "role-builder": return renderEmployerRoleBuilder(root, params.id || null);
    case "pipeline": return renderEmployerTalentPipeline(root, params);
    case "community": return renderEmployerCommunity(root);
    case "company": return renderEmployerCompany(root);
    case "company-edit": return renderEmployerCompanyEdit(root);
    default: return renderEmployerPlaceholder(root, view);
  }
}

function renderEmployerDashboard(root) {
  const roles = DATA.employerRoles;
  const priorityRole = roles.find(r => r.health === "Needs attention") || roles[0];
  const activeCount = roles.filter(r => r.status === "Open").length;
  const newQualified = roles.reduce((sum, r) => sum + r.qualified, 0);
  const waitingTooLong = roles.filter(r => r.daysOpen > 14).length;

  root.innerHTML = `
    <div class="emp-view-header">
      <h1>Good morning, ${getFirstName(readState())}.</h1>
      <p>Here's what needs attention across your hiring today.</p>
    </div>

    <div class="card emp-priority-card">
      <div class="emp-priority-label">${icon("sparkles")} Your highest-impact action</div>
      <p class="emp-priority-body">The <strong>${priorityRole.title}</strong> role has ${priorityRole.roleIntelligence.talentAvailability.toLowerCase()} candidate supply, but ${priorityRole.roleIntelligence.potentialIssue.charAt(0).toLowerCase()}${priorityRole.roleIntelligence.potentialIssue.slice(1)}</p>
      <div class="emp-priority-impact">Potential impact: <strong>+${Math.max(12, priorityRole.qualified)} relevant candidates</strong></div>
      <div class="emp-priority-actions">
        <button type="button" class="btn btn-primary" data-emp-review-role="${priorityRole.id}">Review requirement</button>
        <button type="button" class="btn btn-ghost" data-emp-view-candidates>See affected candidates</button>
      </div>
    </div>

    <div class="emp-kpi-row">
      <div class="emp-kpi-tile"><strong>${activeCount}</strong><span>Active roles</span></div>
      <div class="emp-kpi-tile"><strong>${newQualified}</strong><span>New qualified candidates</span></div>
      <div class="emp-kpi-tile"><strong>4</strong><span>Interviews this week</span></div>
      <div class="emp-kpi-tile"><strong>${waitingTooLong}</strong><span>Roles waiting too long</span></div>
    </div>

    <div class="card emp-priorities-card">
      <h2>Today's priorities</h2>
      <ul class="emp-priority-list">
        <li><span>3 candidates are waiting for review on Junior Data Analyst.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>Review</button></li>
        <li><span>Interview with Sarah Lee at 2:00 PM today.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>Open</button></li>
        <li><span>2 strong new matches for Backend Engineer.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>View</button></li>
        <li><span>Product Designer candidate has waited 6 days without a response.</span><button type="button" class="btn btn-ghost" data-emp-view-candidates>Respond</button></li>
        <li><span>Junior Data Analyst salary range may be below market.</span><button type="button" class="btn btn-ghost" data-emp-review-role="er2">Review</button></li>
      </ul>
    </div>

    <div class="card emp-roles-card">
      <div class="emp-card-head"><h2>Active roles</h2><a href="#roles" class="btn btn-ghost" data-emp-nav="roles">See all roles</a></div>
      <div class="table-wrap">
        <table class="emp-table">
          <thead><tr><th>Role</th><th>Status</th><th>Applicants</th><th>Qualified</th><th>Strong fits</th><th>Days open</th><th>Health</th></tr></thead>
          <tbody>
            ${roles.map(r => `
              <tr class="emp-table-row" data-emp-open-role="${r.id}">
                <td>${r.title}</td>
                <td><span class="pill ${r.status === "Open" ? "green" : r.status === "Draft" ? "gold" : ""}">${r.status}</span></td>
                <td>${r.applicants}</td>
                <td>${r.qualified}</td>
                <td>${r.strongMatches}</td>
                <td>${r.daysOpen}d</td>
                <td><span class="pill ${r.health === "Healthy" ? "green" : "red"}">${r.health}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="card emp-pipeline-snapshot">
      <h2>Pipeline snapshot</h2>
      <div class="emp-stage-row">
        <div class="emp-stage-tile"><strong>18</strong><span>New</span></div>
        <div class="emp-stage-tile"><strong>24</strong><span>Review</span></div>
        <div class="emp-stage-tile"><strong>31</strong><span>Screen</span></div>
        <div class="emp-stage-tile"><strong>9</strong><span>Interview</span></div>
        <div class="emp-stage-tile"><strong>3</strong><span>Offer</span></div>
      </div>
      <p class="emp-pipeline-note">Largest bottleneck: <strong>Screen stage</strong> — average time <strong>8 days</strong>.</p>
    </div>
  `;
  createIcons();

  qsa("[data-emp-open-role], [data-emp-review-role]", root).forEach(el => el.addEventListener("click", () => {
    const id = el.dataset.empOpenRole || el.dataset.empReviewRole;
    employerNavigateTo("role-builder", { id });
  }));
  qsa("[data-emp-view-candidates]", root).forEach(el => el.addEventListener("click", () => {
    showToast("Candidate Search opens in a later phase.", "info");
  }));
  qsa("[data-emp-nav]", root).forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    employerNavigateTo(link.dataset.empNav);
  }));
}

function parseSalaryRangeMid(str) {
  if (!str) return null;
  const nums = str.match(/[\d.]+k?/gi);
  if (!nums || nums.length < 2) return null;
  const toNum = s => (/k$/i.test(s) ? parseFloat(s) * 1000 : parseFloat(s));
  return (toNum(nums[0]) + toNum(nums[1])) / 2;
}

function computeHiringMomentum(role) {
  if (role.status === "Draft" || role.status === "Archived") return null;
  const { applicants, strongMatches, daysOpen, minExperience } = role;

  const veryRestrictive = minExperience === "5+ years";
  const marketMid = parseSalaryRangeMid(role.roleIntelligence?.commonSalary);
  const roleMid = role.salary && role.salary.min && role.salary.max ? (role.salary.min + role.salary.max) / 2 : null;
  const belowMarket = !!(marketMid && roleMid && roleMid < marketMid * 0.9);
  const pendingCandidates = DATA.candidates.filter(c => c.role === role.title && ["New", "Review"].includes(c.stage)).length;
  const hasPendingActions = pendingCandidates >= 3;
  const lowMatchRate = applicants > 0 && strongMatches / applicants < 0.1;

  let riskScore = 0;
  if (veryRestrictive) riskScore += 1;
  if (belowMarket) riskScore += 1;
  if (lowMatchRate) riskScore += 1;

  let status;
  if (daysOpen >= 21 && strongMatches <= 2) status = "At Risk";
  else if (daysOpen >= 10 && (strongMatches < 6 || riskScore >= 2)) status = "Needs Attention";
  else if (riskScore >= 1 || hasPendingActions) status = "Needs Attention";
  else status = "On Track";

  const reasons = [
    `${applicants} applicant${applicants === 1 ? "" : "s"}`,
    `${strongMatches} strong match${strongMatches === 1 ? "" : "es"}`,
    `open ${daysOpen} day${daysOpen === 1 ? "" : "s"}`
  ];
  if (veryRestrictive) reasons.push("minimum experience requirement is on the high end");
  if (belowMarket) reasons.push("salary may be below the typical range");
  if (hasPendingActions) reasons.push(`${pendingCandidates} candidates waiting for review`);

  let nextAction;
  if (status === "On Track") nextAction = "Keep monitoring";
  else if (veryRestrictive) nextAction = "Review the minimum experience requirement";
  else if (belowMarket) nextAction = "Review salary against the market";
  else if (hasPendingActions) nextAction = `Review ${pendingCandidates} candidates waiting for a decision`;
  else nextAction = "Review requirements";

  const summary = status === "At Risk"
    ? `Open for ${daysOpen} days with only ${strongMatches} strong match${strongMatches === 1 ? "" : "es"}.`
    : status === "Needs Attention"
      ? `Only ${strongMatches} strong match${strongMatches === 1 ? "" : "es"} after ${daysOpen} days.`
      : `${strongMatches} strong match${strongMatches === 1 ? "" : "es"} in ${daysOpen} days.`;

  return { status, summary, reasons, nextAction };
}

const ROLE_STATUS_PILL_CLASS = { Open: "green", Draft: "gold", Paused: "cyan", Closed: "red", Archived: "" };
const ROLE_MOMENTUM_CLASS = { "On Track": "green", "Needs Attention": "gold", "At Risk": "red" };

const ROLE_STATUS_PRIMARY = {
  Draft: "Continue setup", Open: "View candidates", Paused: "Resume hiring", Closed: "View results", Archived: "View results"
};

const ROLE_STATUS_MENU = {
  Draft: [["Continue setup", "edit"], ["Preview draft", "preview"], ["Duplicate", "duplicate"], ["Delete draft", "delete"]],
  Open: [["View candidates", "candidates"], ["Preview public post", "preview"], ["Edit role", "edit"], ["Duplicate role", "duplicate"], ["Pause hiring", "pause"], ["Close role", "close"]],
  Paused: [["Resume hiring", "resume"], ["View candidates", "candidates"], ["Edit role", "edit"], ["Close role", "close"]],
  Closed: [["View results", "results"], ["View candidates", "candidates"], ["Reopen role", "reopen"], ["Duplicate role", "duplicate"], ["Archive", "archive"]],
  Archived: [["View results", "results"]]
};

const ROLE_CLOSE_REASONS = ["Position filled", "Hiring paused indefinitely", "Role changed", "Duplicate role", "Other"];

function changeRoleStatus(role, newStatus, reason = null) {
  role.status = newStatus;
  role.closeReason = newStatus === "Closed" ? reason : null;
}

function duplicateEmployerRole(role) {
  const copy = JSON.parse(JSON.stringify(role));
  copy.id = `er-${Date.now()}`;
  copy.title = `${role.title} (Copy)`;
  copy.status = "Draft";
  copy.closeReason = null;
  copy.applicants = 0; copy.qualified = 0; copy.strongMatches = 0; copy.daysOpen = 0;
  DATA.employerRoles.push(copy);
  return copy;
}

function renderEmployerRolesList(root) {
  let activeFilter = "All";
  const ROLE_STATUS_FILTERS = ["All", "Open", "Draft", "Paused", "Closed", "Archived"];

  function draw() {
    const roles = DATA.employerRoles.filter(r => activeFilter === "All" || r.status === activeFilter);
    root.innerHTML = `
      <div class="emp-view-header">
        <h1>Roles in your company</h1>
        <button type="button" class="btn btn-primary" data-emp-create-role>${icon("plus")} Create role</button>
      </div>
      <div class="emp-subtabs">
        ${ROLE_STATUS_FILTERS.map(f => `<button type="button" class="emp-subtab ${activeFilter === f ? "active" : ""}" data-emp-role-filter="${f}">${f}</button>`).join("")}
      </div>
      <div class="card">
        <div class="table-wrap">
          <table class="emp-table">
            <thead><tr><th>Role</th><th>Status</th><th>Applicants</th><th>Strong matches</th><th>Days open</th><th>Hiring momentum</th><th>Next action</th><th></th><th></th></tr></thead>
            <tbody>
              ${roles.length ? roles.map(r => {
                const momentum = computeHiringMomentum(r);
                return `
                <tr class="emp-table-row">
                  <td>${r.title}</td>
                  <td class="emp-table-actions">
                    ${ROLE_STATUS_MENU[r.status].length
                      ? `<button type="button" class="pill emp-status-pill ${ROLE_STATUS_PILL_CLASS[r.status]}" data-emp-role-menu="${r.id}">${r.status} ${icon("chevron-down")}</button>`
                      : `<span class="pill ${ROLE_STATUS_PILL_CLASS[r.status]}">${r.status}</span>`}
                  </td>
                  <td>${r.status === "Draft" ? "—" : r.applicants}</td>
                  <td>${r.status === "Draft" ? "—" : r.strongMatches}</td>
                  <td>${r.status === "Draft" ? "—" : `${r.daysOpen}d`}</td>
                  <td class="emp-momentum-cell">
                    ${momentum
                      ? `<button type="button" class="pill emp-momentum-pill ${ROLE_MOMENTUM_CLASS[momentum.status]}" data-emp-momentum="${r.id}">${momentum.status}</button>
                         <div class="emp-momentum-pop" data-emp-momentum-pop="${r.id}" hidden>
                           <strong>${momentum.status}</strong>
                           <span class="emp-momentum-why-label">Why:</span>
                           <ul class="emp-momentum-why">${momentum.reasons.map(r2 => `<li>${r2}</li>`).join("")}</ul>
                           <span class="emp-momentum-next">Suggested next step: ${momentum.nextAction}</span>
                         </div>`
                      : `<span class="emp-empty-hint">—</span>`}
                  </td>
                  <td>${momentum ? momentum.nextAction : (r.status === "Draft" ? "Complete setup" : "—")}</td>
                  <td class="emp-table-actions"><button type="button" class="btn btn-primary btn-sm" data-emp-primary="${r.id}">${ROLE_STATUS_PRIMARY[r.status]}</button></td>
                  <td class="emp-table-actions">
                    ${ROLE_STATUS_MENU[r.status].length ? `
                      <button type="button" class="btn btn-ghost btn-sm emp-menu-toggle" data-emp-role-menu="${r.id}">${icon("more-horizontal")}</button>
                      <div class="emp-actions-menu" data-emp-role-menu-panel="${r.id}" hidden>
                        ${ROLE_STATUS_MENU[r.status].map(([label, action]) => `<button type="button" data-emp-role-action="${action}" data-emp-role-id="${r.id}">${label}</button>`).join("")}
                      </div>
                    ` : ""}
                  </td>
                </tr>
              `; }).join("") : `<tr><td colspan="9"><p class="emp-empty-hint">No roles match this filter.</p></td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
      <div class="emp-compose-modal" data-emp-close-modal hidden>
        <div class="card emp-compose-card">
          <h2>Why are you closing this role?</h2>
          <p class="emp-preview-note">Closing this role stops new applications. Existing applicants and hiring history will remain available.</p>
          <div class="emp-close-reasons">
            ${ROLE_CLOSE_REASONS.map((reason, i) => `
              <label class="check-field custom-checkbox"><input type="radio" name="close-reason" value="${reason}" ${i === 0 ? "checked" : ""}> ${reason}</label>
            `).join("")}
          </div>
          <div class="emp-compose-actions">
            <button type="button" class="btn btn-ghost" data-emp-close-cancel>Cancel</button>
            <button type="button" class="btn btn-primary" data-emp-close-confirm>Close role</button>
          </div>
        </div>
      </div>
    `;
    createIcons();
    bind();
  }

  function bind() {
    qs("[data-emp-create-role]", root)?.addEventListener("click", () => employerNavigateTo("role-builder", {}));

    qsa("[data-emp-role-filter]", root).forEach(btn => btn.addEventListener("click", () => {
      activeFilter = btn.dataset.empRoleFilter;
      draw();
    }));

    qsa("[data-emp-momentum]", root).forEach(btn => {
      const pop = qs(`[data-emp-momentum-pop="${btn.dataset.empMomentum}"]`, root);
      btn.addEventListener("click", event => {
        event.stopPropagation();
        qsa("[data-emp-momentum-pop]", root).forEach(p => p.hidden = true);
        pop.hidden = false;
      });
      btn.addEventListener("mouseenter", () => {
        qsa("[data-emp-momentum-pop]", root).forEach(p => p.hidden = true);
        pop.hidden = false;
      });
      btn.parentElement.addEventListener("mouseleave", () => { pop.hidden = true; });
    });

    qsa("[data-emp-role-menu]", root).forEach(btn => btn.addEventListener("click", event => {
      event.stopPropagation();
      const panel = qs(`[data-emp-role-menu-panel="${btn.dataset.empRoleMenu}"]`, root);
      const isHidden = panel.hidden;
      qsa("[data-emp-role-menu-panel]", root).forEach(p => p.hidden = true);
      panel.hidden = !isHidden;
    }));

    document.addEventListener("click", () => {
      qsa("[data-emp-role-menu-panel], [data-emp-momentum-pop]", root).forEach(p => p.hidden = true);
    });

    qsa("[data-emp-primary]", root).forEach(btn => btn.addEventListener("click", () => {
      const role = DATA.employerRoles.find(r => r.id === btn.dataset.empPrimary);
      runRoleAction(role, role.status === "Draft" ? "edit" : role.status === "Paused" ? "resume" : role.status === "Open" ? "candidates" : "results");
    }));

    qsa("[data-emp-role-action]", root).forEach(btn => btn.addEventListener("click", () => {
      const role = DATA.employerRoles.find(r => r.id === btn.dataset.empRoleId);
      runRoleAction(role, btn.dataset.empRoleAction);
    }));

    qs("[data-emp-close-cancel]", root)?.addEventListener("click", () => { qs("[data-emp-close-modal]", root).hidden = true; });
    qs("[data-emp-close-confirm]", root)?.addEventListener("click", () => {
      const modal = qs("[data-emp-close-modal]", root);
      const reason = qs('input[name="close-reason"]:checked', root)?.value || "Other";
      const role = DATA.employerRoles.find(r => r.id === modal.dataset.roleId);
      changeRoleStatus(role, "Closed", reason);
      modal.hidden = true;
      draw();
      showToast(`${role.title} closed.`);
    });
  }

  function runRoleAction(role, action) {
    switch (action) {
      case "edit": case "preview":
        employerNavigateTo("role-builder", { id: role.id });
        break;
      case "candidates":
        employerNavigateTo("pipeline", { role: role.id });
        break;
      case "results":
        showToast("Results view opens in a later phase.", "info");
        break;
      case "duplicate": {
        const copy = duplicateEmployerRole(role);
        draw();
        showToast(`Duplicated as "${copy.title}".`);
        break;
      }
      case "delete":
        if (confirm(`Delete the draft "${role.title}"? This cannot be undone.`)) {
          DATA.employerRoles.splice(DATA.employerRoles.indexOf(role), 1);
          draw();
          showToast("Draft deleted.");
        }
        break;
      case "pause":
        changeRoleStatus(role, "Paused");
        draw();
        showToast(`${role.title} paused.`);
        break;
      case "resume":
        changeRoleStatus(role, "Open");
        draw();
        showToast(`${role.title} reopened for applicants.`);
        break;
      case "reopen":
        changeRoleStatus(role, "Open");
        draw();
        showToast(`${role.title} reopened.`);
        break;
      case "archive":
        changeRoleStatus(role, "Archived");
        draw();
        showToast(`${role.title} archived.`);
        break;
      case "close": {
        const modal = qs("[data-emp-close-modal]", root);
        modal.dataset.roleId = role.id;
        modal.hidden = false;
        break;
      }
    }
  }

  draw();
}

const EMPLOYER_ROLE_BUILDER_STEPS = ["Role Basics", "Role Details", "Candidate Profile", "Offer & Hiring Setup", "Preview & Publish"];

const FALLBACK_ROLE_INTELLIGENCE = {
  talentAvailability: "Not enough data", typicalExperience: "—", commonSalary: "—", commonSkills: [],
  potentialIssue: "", hiringCompetition: "—", locationContext: "",
  dataContext: { region: "Malaysia", category: "General", confidence: "Low" },
  strengths: [], concerns: [], suggestions: []
};

function makeEmployerRoleDraft(existing) {
  const base = {
    title: "", department: "", employmentType: "Full-time", reportsTo: "",
    roleSummary: "", responsibilities: [], successLooksLike: "",
    mustHaveSkills: [], niceToHaveSkills: [],
    minExperience: "No experience required", educationOrCertification: "",
    salary: { min: null, max: null, currency: "MYR", period: "Monthly" },
    location: "", workMode: "Hybrid",
    matchThreshold: 70, portfolioRequirement: "Optional",
    lastSavedAt: null
  };
  if (!existing) return base;
  return {
    ...base, title: existing.title, department: existing.department || "", employmentType: existing.employmentType || "Full-time",
    reportsTo: existing.reportsTo || "", roleSummary: existing.roleSummary || "",
    responsibilities: [...(existing.responsibilities || [])], successLooksLike: existing.successLooksLike || "",
    mustHaveSkills: [...(existing.mustHaveSkills || [])], niceToHaveSkills: [...(existing.niceToHaveSkills || [])],
    minExperience: existing.minExperience || "No experience required", educationOrCertification: existing.educationOrCertification || "",
    salary: { ...base.salary, ...(existing.salary || {}) },
    location: existing.location || "", workMode: existing.workMode || "Hybrid",
    matchThreshold: existing.matchThreshold || 70, portfolioRequirement: existing.portfolioRequirement || "Optional"
  };
}

function formatSavedLabel(iso) {
  if (!iso) return "Not saved yet";
  const secs = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (secs < 10) return "Saved just now";
  if (secs < 60) return `Saved ${secs}s ago`;
  const mins = Math.round(secs / 60);
  return `Saved ${mins} minute${mins === 1 ? "" : "s"} ago`;
}

function renderTagInput(field, values) {
  return `
    <div class="emp-tag-input" data-tag-field="${field}">
      <div class="pill-row" data-tag-list>
        ${values.map((v, i) => `<span class="pill emp-tag-pill">${v} <button type="button" data-tag-remove="${i}" aria-label="Remove ${v}">${icon("x")}</button></span>`).join("")}
      </div>
      <input type="text" data-tag-new placeholder="Type a skill and press Enter">
    </div>
  `;
}

function renderRoleIntelligencePanel(ri, pendingSuggestions, draft) {
  return `
    <div class="emp-callout-label">${icon("sparkles")} Role Intelligence</div>

    <div class="emp-intel-section">
      <h3 class="emp-intel-heading">Market snapshot</h3>
      <div class="emp-stat-row"><span>Talent availability</span><strong>${ri.talentAvailability}</strong></div>
      <div class="emp-stat-row"><span>Typical experience</span><strong>${ri.typicalExperience}</strong></div>
      <div class="emp-stat-row"><span>Typical salary</span><strong>${ri.commonSalary}</strong></div>
      <div class="emp-stat-row"><span>Hiring competition</span><strong>${ri.hiringCompetition}</strong></div>
      <div class="emp-stat-row"><span>Location context</span><strong>${ri.locationContext || "—"}</strong></div>
      ${ri.dataContext ? `<p class="emp-intel-datacontext">${ri.dataContext.region} · ${ri.dataContext.category} · Updated recently · Confidence: ${ri.dataContext.confidence}</p>` : ""}
    </div>

    ${ri.strengths && ri.strengths.length ? `
      <div class="emp-intel-section">
        <h3 class="emp-intel-heading">What looks strong</h3>
        <ul class="emp-intel-strengths">${ri.strengths.map(s => `<li>${icon("check")} ${s}</li>`).join("")}</ul>
      </div>
    ` : ""}

    ${ri.concerns && ri.concerns.length ? `
      <div class="emp-intel-section">
        <h3 class="emp-intel-heading">Potential concerns</h3>
        ${ri.concerns.map(c => `
          <div class="emp-callout emp-callout-warn">
            <div class="emp-callout-label warn">${icon("alert-triangle")} ${c.issue}</div>
            <p>${c.why}</p>
          </div>
        `).join("")}
      </div>
    ` : ""}

    ${pendingSuggestions.length ? `
      <div class="emp-intel-section">
        <h3 class="emp-intel-heading">Suggested adjustments</h3>
        ${pendingSuggestions.map(s => `
          <div class="card emp-suggestion-card">
            <p class="emp-suggestion-rec">${s.recommendation}</p>
            <div class="emp-suggestion-compare" data-suggestion-compare="${s.recommendation}" hidden>
              <span>Current: <strong>${(draft[s.field] ?? "—")}</strong></span>
              <span>Suggested: <strong>${s.suggestedValue}</strong></span>
            </div>
            <div class="emp-suggestion-grid">
              <div><span class="emp-tags-label">Pros</span><ul>${s.pros.map(p => `<li>${p}</li>`).join("")}</ul></div>
              <div><span class="emp-tags-label">Cons</span><ul>${s.cons.map(c => `<li>${c}</li>`).join("")}</ul></div>
            </div>
            <p class="emp-suggestion-effect">${s.effectIsEstimated ? "Estimated impact" : "Expected effect"}: ${s.expectedEffect} · Confidence: ${s.confidence}</p>
            <div class="emp-suggestion-actions">
              <button type="button" class="btn btn-ghost btn-sm" data-emp-compare-suggestion="${s.recommendation}">Compare change</button>
              <button type="button" class="btn btn-primary btn-sm" data-emp-apply-suggestion="${s.recommendation}">Apply suggestion</button>
              <button type="button" class="btn btn-ghost btn-sm" data-emp-keep-suggestion="${s.recommendation}">Keep current</button>
            </div>
          </div>
        `).join("")}
      </div>
    ` : ""}

    <p class="emp-vera-principle">${icon("shield-check")} Vera advises and explains. You make the final decision.</p>
  `;
}

function renderEmployerRoleBuilder(root, roleId) {
  let existing = roleId ? DATA.employerRoles.find(r => r.id === roleId) : null;
  const draftId = existing ? existing.id : `draft-${Date.now()}`;
  const seedState = readState();
  const draft = seedState.employerRoleDrafts[draftId] || makeEmployerRoleDraft(existing);
  if (!seedState.employerRoleDrafts[draftId]) {
    seedState.employerRoleDrafts[draftId] = draft;
    writeState(seedState);
  }
  let activeStep = 0;
  const dismissedSuggestions = new Set();
  const appliedSuggestions = new Set();

  function persistDraft() {
    draft.lastSavedAt = new Date().toISOString();
    const state = readState();
    state.employerRoleDrafts[draftId] = draft;
    writeState(state);
    const label = qs("[data-emp-saved-label]", root);
    if (label) label.textContent = formatSavedLabel(draft.lastSavedAt);
  }

  function bindField(selector, field) {
    const el = qs(selector, root);
    if (!el) return;
    el.addEventListener("input", () => { draft[field] = el.value; });
    el.addEventListener("blur", persistDraft);
  }

  function bindSelect(selector, field, isNumber) {
    const el = qs(selector, root);
    if (!el) return;
    el.addEventListener("change", () => { draft[field] = isNumber ? Number(el.value) : el.value; persistDraft(); });
  }

  function bindSalaryField(sub) {
    const el = qs(`[data-field-salary-${sub}]`, root);
    if (!el) return;
    el.addEventListener("input", () => { draft.salary[sub] = el.value === "" ? null : Number(el.value); });
    el.addEventListener("blur", persistDraft);
  }

  function bindSalarySelect(sub) {
    const el = qs(`[data-field-salary-${sub}]`, root);
    if (!el) return;
    el.addEventListener("change", () => { draft.salary[sub] = el.value; persistDraft(); });
  }

  function renderResponsibilityList() {
    return `
      <div data-resp-list>
        ${draft.responsibilities.map((r, i) => `
          <div class="emp-resp-row">
            <input type="text" data-resp-index="${i}" value="${r}" placeholder="e.g. Build and maintain backend services">
            <button type="button" class="btn btn-ghost btn-sm" data-resp-remove="${i}" aria-label="Remove">${icon("x")}</button>
          </div>
        `).join("")}
      </div>
      <button type="button" class="btn btn-ghost btn-sm" data-resp-add>${icon("plus")} Add responsibility</button>
    `;
  }

  function bindResponsibilityList() {
    qsa("[data-resp-index]", root).forEach(input => {
      input.addEventListener("input", () => { draft.responsibilities[Number(input.dataset.respIndex)] = input.value; });
      input.addEventListener("blur", persistDraft);
    });
    qsa("[data-resp-remove]", root).forEach(btn => btn.addEventListener("click", () => {
      draft.responsibilities.splice(Number(btn.dataset.respRemove), 1);
      persistDraft();
      draw();
    }));
    qs("[data-resp-add]", root)?.addEventListener("click", () => {
      draft.responsibilities.push("");
      persistDraft();
      draw();
      const inputs = qsa("[data-resp-index]", root);
      inputs[inputs.length - 1]?.focus();
    });
  }

  function bindTagInput(field) {
    const container = qs(`[data-tag-field="${field}"]`, root);
    if (!container) return;
    const input = qs("[data-tag-new]", container);
    input.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        const val = input.value.trim().replace(/,$/, "");
        if (val && !draft[field].includes(val)) {
          draft[field].push(val);
          persistDraft();
          draw();
          qs(`[data-tag-field="${field}"] [data-tag-new]`, root)?.focus();
        } else {
          input.value = "";
        }
      }
    });
    qsa("[data-tag-remove]", container).forEach(btn => btn.addEventListener("click", () => {
      draft[field].splice(Number(btn.dataset.tagRemove), 1);
      persistDraft();
      draw();
    }));
  }

  function renderWizardStepContent(step) {
    switch (step) {
      case 0:
        return `
          <div class="emp-form-section-head"><h2>${icon("briefcase")} Role Basics</h2><p>Start with the essentials candidates need to understand what this role is.</p></div>
          <label>Role title<input type="text" data-field-title value="${draft.title}" placeholder="e.g. Backend Engineer"></label>
          <label>Department<input type="text" data-field-department value="${draft.department}" placeholder="e.g. Engineering"></label>
          <label>Employment type<select data-field-employmentType>${["Full-time", "Part-time", "Contract", "Internship", "Graduate programme"].map(o => `<option ${draft.employmentType === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>
          <label>Reports to <span class="emp-optional-tag">Optional</span><input type="text" data-field-reportsTo value="${draft.reportsTo}" placeholder="e.g. Engineering Manager"></label>
        `;
      case 1:
        return `
          <div class="emp-form-section-head"><h2>${icon("list-checks")} Role Details</h2><p>Explain what this person will own, work on, and achieve.</p></div>
          <label>Role summary<textarea data-field-roleSummary rows="3" placeholder="Describe the role in 2-4 sentences. Focus on the purpose of the position.">${draft.roleSummary}</textarea></label>
          <div>
            <span class="emp-tags-label">Key responsibilities — recommended 3-6</span>
            ${renderResponsibilityList()}
          </div>
          <label>What success looks like <span class="emp-optional-tag">Optional</span><textarea data-field-successLooksLike rows="2" placeholder="e.g. In the first 6 months, this person should have shipped one major service.">${draft.successLooksLike}</textarea></label>
        `;
      case 2:
        return `
          <div class="emp-form-section-head"><h2>${icon("users")} Candidate Profile</h2><p>Define what is truly essential, what is preferred, and what can be learned.</p></div>
          <div><span class="emp-tags-label">Must-have skills — used for essential matching</span>${renderTagInput("mustHaveSkills", draft.mustHaveSkills)}</div>
          <div><span class="emp-tags-label">Nice-to-have skills — improves matching, won't reject candidates</span>${renderTagInput("niceToHaveSkills", draft.niceToHaveSkills)}</div>
          <label>Minimum experience<select data-field-minExperience>${["No experience required", "Less than 1 year", "1-2 years", "3-5 years", "5+ years"].map(o => `<option ${draft.minExperience === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>
          <label>Education or certification <span class="emp-optional-tag">Optional</span><input type="text" data-field-educationOrCertification value="${draft.educationOrCertification}" placeholder="e.g. Bachelor's degree preferred"></label>
        `;
      case 3:
        return `
          <div class="emp-form-section-head"><h2>${icon("wallet")} Offer & Hiring Setup</h2><p>Set the offer and tell CareerGo how you want candidates to be matched.</p></div>
          <div class="emp-salary-row">
            <label>Minimum (MYR)<input type="number" data-field-salary-min value="${draft.salary.min ?? ""}" placeholder="e.g. 4500"></label>
            <label>Maximum (MYR)<input type="number" data-field-salary-max value="${draft.salary.max ?? ""}" placeholder="e.g. 7000"></label>
            <label>Pay period<select data-field-salary-period>${["Monthly", "Annual", "Hourly"].map(o => `<option ${draft.salary.period === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>
          </div>
          <label>Location<input type="text" data-field-location value="${draft.location}" placeholder="e.g. Kuala Lumpur"></label>
          <label>Work mode<select data-field-workMode>${["On-site", "Hybrid", "Remote"].map(o => `<option ${draft.workMode === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>
          <label>Match threshold<select data-field-matchThreshold>
            ${[[60, "Broad pool — 60%"], [70, "Balanced — 70%"], [80, "Focused — 80%"], [90, "Very selective — 90%"]].map(([v, l]) => `<option value="${v}" ${draft.matchThreshold === v ? "selected" : ""}>${l}</option>`).join("")}
          </select></label>
          <p class="emp-field-help">Candidates above this match level will appear as Strong Matches. Higher threshold: fewer candidates, closer skill alignment. Lower threshold: larger candidate pool, more employer review required.</p>
          <label>Portfolio evidence<select data-field-portfolioRequirement>${["Optional", "Preferred", "Required"].map(o => `<option ${draft.portfolioRequirement === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>
        `;
      default:
        return "";
    }
  }

  function commitDraft(status) {
    const state = readState();
    if (existing) {
      Object.assign(existing, draft, { status });
    } else {
      const created = Object.assign({
        id: draftId, applicants: 0, qualified: 0, strongMatches: 0, daysOpen: 0, health: "Healthy", closeReason: null,
        roleIntelligence: FALLBACK_ROLE_INTELLIGENCE
      }, draft, { status });
      DATA.employerRoles.push(created);
      existing = created;
    }
    delete state.employerRoleDrafts[draftId];
    writeState(state);
    showToast(status === "Open" ? "Role published." : status === "Draft" ? "Draft saved." : "Role updated.");
    employerNavigateTo("roles", {}, { force: true });
  }

  function renderPreviewPublishStep() {
    const ri = existing ? existing.roleIntelligence : FALLBACK_ROLE_INTELLIGENCE;
    const company = DATA.companies.find(c => c.id === "maybank");
    const checklist = [
      { label: "Role basics complete", done: !!(draft.title && draft.department) },
      { label: "Responsibilities added", done: draft.responsibilities.filter(r => r.trim()).length > 0 },
      { label: "Salary and location complete", done: !!(draft.salary.min && draft.salary.max && draft.location) },
      { label: "Candidate requirements complete", done: draft.mustHaveSkills.length > 0 && !!draft.minExperience }
    ];
    const pendingSuggestions = (ri.suggestions || []).filter(s => !dismissedSuggestions.has(s.recommendation) && !appliedSuggestions.has(s.recommendation));
    const responsibilities = draft.responsibilities.filter(r => r.trim());

    return `
      <div class="card emp-publish-checklist">
        <div class="emp-callout-label">${icon("list-checks")} Ready to publish</div>
        <ul class="emp-checklist">
          ${checklist.map(item => `<li class="${item.done ? "done" : ""}">${icon(item.done ? "check" : "x")} ${item.label}</li>`).join("")}
          ${pendingSuggestions.length ? `<li class="warn">${icon("alert-triangle")} ${pendingSuggestions.length} Vera recommendation${pendingSuggestions.length === 1 ? "" : "s"} not applied</li>` : ""}
        </ul>
        <div class="emp-wizard-actions">
          <button type="button" class="btn btn-ghost" data-emp-prev>Back</button>
          <div class="emp-publish-buttons">
            ${existing
              ? `<button type="button" class="btn btn-ghost" data-emp-preview-public>Preview public post</button>
                 <button type="button" class="btn btn-primary" data-emp-publish>${icon("check")} Save changes</button>`
              : `<button type="button" class="btn btn-ghost" data-emp-save-draft>Save draft</button>
                 <button type="button" class="btn btn-primary" data-emp-publish>${icon("check")} Publish role</button>`}
          </div>
        </div>
      </div>
      <div class="emp-wizard-body">
        <div class="card emp-job-preview">
          <div class="emp-preview-toolbar">
            <span class="emp-tags-label">Preview as candidate</span>
            <div class="emp-preview-device-toggle">
              <button type="button" class="active" data-emp-preview-device="desktop">Desktop</button>
              <button type="button" data-emp-preview-device="mobile">Mobile</button>
            </div>
          </div>
          <div class="emp-job-preview-frame" data-emp-preview-frame>
            ${renderJobPreviewContent(company, responsibilities)}
          </div>
        </div>
        <div class="card emp-role-intelligence">
          ${renderRoleIntelligencePanel(ri, pendingSuggestions, draft)}
        </div>
      </div>
      <div class="emp-compose-modal" data-emp-public-preview-modal hidden>
        <div class="card emp-compose-card emp-public-preview-card">
          <div class="emp-preview-toolbar">
            <h2>Public post preview</h2>
            <button type="button" class="btn btn-ghost btn-sm" data-emp-close-public-preview>${icon("x")} Close</button>
          </div>
          <div class="emp-job-preview-frame">
            ${renderJobPreviewContent(company, responsibilities)}
          </div>
        </div>
      </div>
    `;
  }

  function renderJobPreviewContent(company, responsibilities) {
    const initial = (company ? company.name : "Y").charAt(0).toUpperCase();
    return `
      <div class="emp-job-preview-company">
        <span class="emp-job-preview-logo">${initial}</span>
        <strong>${company ? company.name : "Your Company"}</strong>
        ${company?.verified ? `<span class="pill cyan">Verified</span>` : ""}
      </div>
      <h2>${draft.title || "Role title"}</h2>
      <div class="emp-job-preview-meta">${[draft.location, draft.workMode, draft.employmentType].filter(Boolean).join(" · ") || "Location · Work mode · Employment type"}</div>
      ${draft.salary.min && draft.salary.max ? `<div class="emp-job-preview-salary">RM ${draft.salary.min.toLocaleString()} – RM ${draft.salary.max.toLocaleString()} / ${draft.salary.period.toLowerCase()}</div>` : ""}
      <h3>About the role</h3>
      <p>${draft.roleSummary || "Add a role summary in Role Details."}</p>
      ${responsibilities.length ? `<h3>What you'll do</h3><ul>${responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>` : ""}
      ${draft.successLooksLike ? `<h3>What success looks like</h3><p>${draft.successLooksLike}</p>` : ""}
      ${draft.mustHaveSkills.length ? `<h3>Must-have skills</h3><div class="pill-row">${draft.mustHaveSkills.map(s => `<span class="pill">${s}</span>`).join("")}</div>` : ""}
      ${draft.niceToHaveSkills.length ? `<h3>Nice-to-have</h3><div class="pill-row">${draft.niceToHaveSkills.map(s => `<span class="pill">${s}</span>`).join("")}</div>` : ""}
      <h3>Work style</h3>
      <p>${draft.workMode || "Hybrid"}</p>
      <button type="button" class="btn btn-primary" disabled>Apply</button>
    `;
  }

  function bindPreviewPublishEvents() {
    qsa("[data-emp-compare-suggestion]", root).forEach(btn => btn.addEventListener("click", () => {
      const panel = qs(`[data-suggestion-compare="${btn.dataset.empCompareSuggestion}"]`, root);
      if (panel) panel.hidden = !panel.hidden;
    }));
    qsa("[data-emp-apply-suggestion]", root).forEach(btn => btn.addEventListener("click", () => {
      const ri = existing ? existing.roleIntelligence : FALLBACK_ROLE_INTELLIGENCE;
      const suggestion = (ri.suggestions || []).find(s => s.recommendation === btn.dataset.empApplySuggestion);
      if (suggestion) {
        draft[suggestion.field] = suggestion.suggestedValue;
        appliedSuggestions.add(suggestion.recommendation);
        persistDraft();
        draw();
        showToast("Suggestion applied.");
      }
    }));
    qsa("[data-emp-keep-suggestion]", root).forEach(btn => btn.addEventListener("click", () => {
      dismissedSuggestions.add(btn.dataset.empKeepSuggestion);
      draw();
    }));
    qsa("[data-emp-preview-device]", root).forEach(btn => btn.addEventListener("click", () => {
      qsa("[data-emp-preview-device]", root).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      qs("[data-emp-preview-frame]", root)?.classList.toggle("emp-preview-mobile", btn.dataset.empPreviewDevice === "mobile");
    }));
    qs("[data-emp-save-draft]", root)?.addEventListener("click", () => commitDraft("Draft"));
    qs("[data-emp-publish]", root)?.addEventListener("click", () => commitDraft(existing ? existing.status : "Open"));
    qs("[data-emp-preview-public]", root)?.addEventListener("click", () => {
      qs("[data-emp-public-preview-modal]", root).hidden = false;
    });
    qs("[data-emp-close-public-preview]", root)?.addEventListener("click", () => {
      qs("[data-emp-public-preview-modal]", root).hidden = true;
    });
  }

  function draw() {
    root.innerHTML = `
      <div class="emp-view-header">
        <div>
          <h1>${existing ? "Edit your role" : "Create a role"}</h1>
          <p>${existing ? `${existing.title} · ` : "Set up the role candidates will see and CareerGo will match against. · "}<span data-emp-saved-label>${formatSavedLabel(draft.lastSavedAt)}</span></p>
        </div>
        <button type="button" class="btn btn-ghost" data-emp-nav="roles">${icon("x")} Cancel</button>
      </div>
      <div class="emp-wizard-steps">
        ${EMPLOYER_ROLE_BUILDER_STEPS.map((label, i) => `
          <button type="button" class="emp-wizard-step ${i === activeStep ? "active" : ""} ${i < activeStep ? "done" : ""}" data-emp-step="${i}">
            <span class="emp-wizard-step-index">${i + 1}</span><span>${label}</span>
          </button>
        `).join("")}
      </div>
      ${activeStep === 4 ? renderPreviewPublishStep() : `
        <div class="card emp-wizard-form">
          ${renderWizardStepContent(activeStep)}
          <div class="emp-wizard-actions">
            ${activeStep > 0 ? `<button type="button" class="btn btn-ghost" data-emp-prev>Back</button>` : "<span></span>"}
            <button type="button" class="btn btn-primary" data-emp-next>Continue</button>
          </div>
        </div>
      `}
    `;
    createIcons();
    bindEvents();
  }

  function bindEvents() {
    qsa("[data-emp-step]", root).forEach(btn => btn.addEventListener("click", () => {
      activeStep = Number(btn.dataset.empStep);
      draw();
    }));
    qs("[data-emp-prev]", root)?.addEventListener("click", () => { activeStep = Math.max(0, activeStep - 1); draw(); });
    qs("[data-emp-next]", root)?.addEventListener("click", () => { activeStep = Math.min(EMPLOYER_ROLE_BUILDER_STEPS.length - 1, activeStep + 1); draw(); });
    qs("[data-emp-nav]", root)?.addEventListener("click", event => {
      event.preventDefault();
      employerNavigateTo("roles");
    });

    if (activeStep === 0) {
      bindField("[data-field-title]", "title");
      bindField("[data-field-department]", "department");
      bindSelect("[data-field-employmentType]", "employmentType");
      bindField("[data-field-reportsTo]", "reportsTo");
    } else if (activeStep === 1) {
      bindField("[data-field-roleSummary]", "roleSummary");
      bindResponsibilityList();
      bindField("[data-field-successLooksLike]", "successLooksLike");
    } else if (activeStep === 2) {
      bindTagInput("mustHaveSkills");
      bindTagInput("niceToHaveSkills");
      bindSelect("[data-field-minExperience]", "minExperience");
      bindField("[data-field-educationOrCertification]", "educationOrCertification");
    } else if (activeStep === 3) {
      bindSalaryField("min");
      bindSalaryField("max");
      bindSalarySelect("period");
      bindField("[data-field-location]", "location");
      bindSelect("[data-field-workMode]", "workMode");
      bindSelect("[data-field-matchThreshold]", "matchThreshold", true);
      bindSelect("[data-field-portfolioRequirement]", "portfolioRequirement");
    } else if (activeStep === 4) {
      bindPreviewPublishEvents();
    }
  }

  draw();
}

function filterEmployerSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const groups = [];
  const roleMatches = DATA.employerRoles.filter(r => r.title.toLowerCase().includes(q));
  if (roleMatches.length) groups.push({ label: "Roles", items: roleMatches.map(r => ({ id: r.id, primary: r.title, secondary: r.status, view: "role-builder" })) });
  const candidateMatches = DATA.candidates.filter(c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q));
  if (candidateMatches.length) groups.push({ label: "Candidates", items: candidateMatches.map(c => ({ id: c.id, primary: c.name, secondary: c.role, view: "pipeline" })) });
  return groups;
}

function initEmployerGlobalSearch() {
  const input = qs("[data-emp-search-input]");
  const results = qs("[data-emp-search-results]");
  if (!input || !results) return;

  function close() {
    results.hidden = true;
    results.innerHTML = "";
  }

  input.addEventListener("input", () => {
    const groups = filterEmployerSearch(input.value);
    if (!groups.length) { close(); return; }
    results.innerHTML = groups.map(group => `
      <div class="emp-search-group">
        <span class="emp-search-group-label">${group.label}</span>
        ${group.items.map(item => `<button type="button" class="emp-search-result" data-emp-search-result data-view="${item.view}" data-id="${item.id}"><strong>${item.primary}</strong><span>${item.secondary}</span></button>`).join("")}
      </div>
    `).join("");
    results.hidden = false;
  });

  results.addEventListener("click", event => {
    const btn = event.target.closest("[data-emp-search-result]");
    if (!btn) return;
    employerNavigateTo(btn.dataset.view, { id: btn.dataset.id });
    input.value = "";
    close();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".emp-app-header-search")) close();
  });
}

const EMPLOYER_TALENT_PIPELINE_STAGES = ["New", "Shortlisted", "Interview", "Final Review", "Offer", "Hired"];
const REJECTION_REASONS_PIPELINE = ["Skill mismatch", "Experience mismatch", "Interview result", "Role closed", "Other candidate selected", "Availability mismatch", "Compensation mismatch"];
const INTERVIEW_TYPES_PIPELINE = ["Recruiter Screen", "Technical Interview", "Portfolio Review", "Case Interview", "Behavioural Interview", "Final Interview"];

function feedbackWaiting(c) { return !!(c.interview && c.interview.feedbackSubmitted < c.interview.feedbackTotal); }
function offerOutstanding(c) { return !!(c.offer && ["Sent", "Viewed", "Countered"].includes(c.offer.status)); }
function candidateNeedsAction(c) { return c.stage === "New" || feedbackWaiting(c) || offerOutstanding(c); }
function offerStatusTone(status) { return { Draft: "", Sent: "gold", Viewed: "gold", Countered: "cyan", Accepted: "green", Declined: "red" }[status] || ""; }

function primaryActionFor(c) {
  switch (c.stage) {
    case "New": return { label: "Review", action: "review" };
    case "Shortlisted": return { label: "Schedule interview", action: "schedule" };
    case "Interview": return { label: "Open interview", action: "review" };
    case "Final Review": return { label: "Compare & decide", action: "review" };
    case "Offer":
      if (c.offer?.status === "Draft") return { label: "Send offer", action: "send-offer" };
      if (c.offer?.status === "Countered") return { label: "Review counter", action: "review-counter" };
      if (c.offer?.status === "Accepted") return { label: "View offer", action: "review" };
      return { label: "Follow up", action: "follow-up" };
    case "Hired": return { label: "View onboarding", action: "review" };
    default: return { label: "View", action: "review" };
  }
}

function menuActionsFor(c) {
  const items = [];
  if (c.stage === "New") items.push(["Shortlist", "shortlist"], ["Reject", "reject"]);
  if (c.stage === "Shortlisted") items.push(["Compare", "compare"], ["Reject", "reject"]);
  if (c.stage === "Interview") items.push(["Reschedule", "reschedule"], ["Move to Final Review", "move-final"], ["Reject", "reject"]);
  if (c.stage === "Final Review") items.push(["Compare candidates", "compare"], ["Make offer", "make-offer"], ["Reject", "reject"]);
  if (c.stage === "Offer" && c.offer?.status !== "Accepted") items.push(["Follow up", "follow-up"]);
  items.push(["View profile", "review"]);
  return items;
}

function nextActionText(c) {
  if (c.stage === "New") return "Review application";
  if (c.stage === "Shortlisted") return "Schedule interview";
  if (c.stage === "Interview") return feedbackWaiting(c) ? "Collect feedback" : "Move to Final Review";
  if (c.stage === "Final Review") return "Compare and make a decision";
  if (c.stage === "Offer") return c.offer?.status === "Countered" ? "Review counter offer" : c.offer?.status === "Draft" ? "Send offer" : "Waiting on candidate";
  if (c.stage === "Hired") return "Prepare onboarding";
  return "";
}

function renderStageDetail(c) {
  if (c.stage === "Interview" && c.interview) {
    return `<div class="emp-cand-stage-detail">
      <span>Round ${c.interview.round} of ${c.interview.totalRounds}</span>
      <span>${c.interview.nextInterview ? `${c.interview.nextInterview.type} · ${c.interview.nextInterview.date} · ${c.interview.nextInterview.time}` : "No interview scheduled"}</span>
      <span>${c.interview.feedbackSubmitted} of ${c.interview.feedbackTotal} feedback submitted</span>
    </div>`;
  }
  if (c.stage === "Final Review" && c.finalReview) {
    return `<div class="emp-cand-stage-detail"><span>${c.finalReview.overallResult}</span><span>${c.finalReview.teamRecommendations.map(t => `${t.name}: ${t.verdict}`).join(", ")}</span></div>`;
  }
  if (c.stage === "Offer" && c.offer) {
    return `<div class="emp-cand-stage-detail"><span>${c.offer.amount}</span><span>Sent ${c.offer.sentDate}${c.offer.expiryDate ? ` · Expires ${c.offer.expiryDate}` : ""}</span><span class="pill ${offerStatusTone(c.offer.status)}">${c.offer.status}</span></div>`;
  }
  if (c.stage === "Hired" && c.hired) {
    return `<div class="emp-cand-stage-detail"><span>Starts ${c.hired.startDate}</span><span>${c.hired.onboardingStatus}</span></div>`;
  }
  return "";
}

function renderEmployerTalentPipeline(root, params = {}) {
  let roleFilter = params.role || "all";
  let query = "";
  let filtersOpen = false;
  let stageFilterX = "all", sourceFilterX = "all", ownerFilterX = "all", minFit = 0;
  let specialFilter = null;
  let viewMode = "board";
  let openDrawerId = params.id || null;
  let drawerTab = "overview";
  let pendingAction = null;

  function activeList() { return DATA.candidates.filter(c => !c.archived); }

  function filtered() {
    const q = query.trim().toLowerCase();
    return activeList().filter(c => {
      if (roleFilter !== "all" && c.roleId !== roleFilter) return false;
      if (stageFilterX !== "all" && c.stage !== stageFilterX) return false;
      if (sourceFilterX !== "all" && c.source !== sourceFilterX) return false;
      if (ownerFilterX !== "all" && c.owner !== ownerFilterX) return false;
      if (minFit && c.fit < minFit) return false;
      if (q && !(c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.skills.some(s => s.toLowerCase().includes(q)))) return false;
      if (specialFilter === "feedback" && !feedbackWaiting(c)) return false;
      if (specialFilter === "offers" && !offerOutstanding(c)) return false;
      if (specialFilter === "needs-action" && !candidateNeedsAction(c)) return false;
      return true;
    });
  }

  function moveStage(c, stage, label) {
    c.stage = stage;
    c.timeline.push({ label: label || stage, date: "Just now", done: true });
    c.activity.unshift({ text: `Moved to ${stage}`, date: "Just now" });
  }

  function renderCandidateCard(c) {
    const primary = primaryActionFor(c);
    const menu = menuActionsFor(c);
    return `
      <div class="card emp-cand-card" data-candidate-card="${c.id}">
        <div class="emp-cand-card-head">
          <strong>${c.name}</strong>
          <span class="pill ${c.fit >= 85 ? "green" : c.fit >= 70 ? "gold" : ""}">${c.fit}% fit</span>
        </div>
        <p class="emp-cand-meta">${c.role} · ${c.location}</p>
        <p class="emp-cand-evidence">${icon("check")} ${c.strength}</p>
        ${c.concern ? `<p class="emp-cand-concern">${icon("alert-triangle")} ${c.concern}</p>` : ""}
        ${renderStageDetail(c)}
        <div class="emp-cand-next"><span class="emp-tags-label">Next</span> ${nextActionText(c)}</div>
        <div class="emp-cand-actions">
          <button type="button" class="btn btn-primary btn-sm" data-candidate-primary="${c.id}">${primary.label}</button>
          ${menu.length ? `
            <button type="button" class="btn btn-ghost btn-sm emp-menu-toggle" data-candidate-menu="${c.id}">${icon("more-horizontal")}</button>
            <div class="emp-actions-menu" data-candidate-menu-panel="${c.id}" hidden>
              ${menu.map(([label, action]) => `<button type="button" data-candidate-action="${action}" data-candidate-id="${c.id}">${label}</button>`).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  function renderBoard(list) {
    return `
      <div class="emp-pipeline-board">
        ${EMPLOYER_TALENT_PIPELINE_STAGES.map(stage => {
          const stageCandidates = list.filter(c => c.stage === stage);
          return `
            <div class="emp-pipeline-col">
              <h3>${stage} <span class="pill">${stageCandidates.length}</span></h3>
              <div class="emp-pipeline-col-body">
                ${stageCandidates.length ? stageCandidates.map(c => renderCandidateCard(c)).join("") : `<p class="emp-empty-hint">No candidates.</p>`}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderListView(list) {
    return `
      <div class="card">
        <div class="table-wrap">
          <table class="emp-table">
            <thead><tr><th>Candidate</th><th>Role</th><th>Stage</th><th>Role fit</th><th>Source</th><th>Owner</th><th>Next action</th><th></th></tr></thead>
            <tbody>
              ${list.length ? list.map(c => `
                <tr class="emp-table-row" data-candidate-card="${c.id}">
                  <td>${c.name}</td><td>${c.role}</td><td>${c.stage}</td><td>${c.fit}%</td><td>${c.source}</td><td>${c.owner}</td><td>${nextActionText(c)}</td>
                  <td class="emp-table-actions"><button type="button" class="btn btn-primary btn-sm" data-candidate-primary="${c.id}">${primaryActionFor(c).label}</button></td>
                </tr>
              `).join("") : `<tr><td colspan="8"><p class="emp-empty-hint">No candidates match these filters.</p></td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderDrawer(id) {
    const c = DATA.candidates.find(cand => cand.id === id);
    if (!c) return "";
    const role = DATA.employerRoles.find(r => r.id === c.roleId);
    const missing = role ? (role.mustHaveSkills || []).filter(s => !c.skills.includes(s)) : [];
    const primary = primaryActionFor(c);
    const tabs = [["overview", "Overview"], ["why", "Why This Candidate"], ["application", "Application"], ["timeline", "Timeline"], ["notes", "Notes"], ["activity", "Activity"]];

    return `
      <div class="emp-drawer-backdrop" data-drawer-close></div>
      <div class="emp-drawer">
        <div class="emp-drawer-head">
          <div>
            <h2>${c.name}</h2>
            <p class="emp-cand-meta">${c.role} · ${c.location}</p>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" data-drawer-close>${icon("x")}</button>
        </div>
        <div class="emp-drawer-primary"><button type="button" class="btn btn-primary" data-candidate-primary="${c.id}">${primary.label}</button></div>
        <div class="emp-subtabs emp-drawer-tabs">
          ${tabs.map(([key, label]) => `<button type="button" class="emp-subtab ${drawerTab === key ? "active" : ""}" data-drawer-tab="${key}">${label}</button>`).join("")}
        </div>
        <div class="emp-drawer-body">
          ${drawerTab === "overview" ? `
            <div class="emp-stat-row"><span>Experience</span><strong>${c.experience}</strong></div>
            <div class="emp-stat-row"><span>Education</span><strong>${c.education}</strong></div>
            <div class="emp-stat-row"><span>Career stage</span><strong>${c.careerStage}</strong></div>
            <div class="emp-stat-row"><span>Portfolio</span><strong>${c.portfolio}</strong></div>
            <div class="emp-stat-row"><span>Availability</span><strong>${c.availability}</strong></div>
            <div class="emp-stat-row"><span>Salary expectation</span><strong>${c.salaryExpectation}</strong></div>
            <div class="emp-tags"><span class="emp-tags-label">Skills</span><div class="pill-row">${c.skills.map(s => `<span class="pill">${s}</span>`).join("")}</div></div>
          ` : ""}
          ${drawerTab === "why" ? `
            <p class="emp-cand-evidence">${icon("check")} ${c.strength}</p>
            ${c.concern ? `<p class="emp-cand-concern">${icon("alert-triangle")} ${c.concern}</p>` : ""}
            ${missing.length ? `<div class="emp-tags"><span class="emp-tags-label">Missing must-have skills for this role</span><div class="pill-row">${missing.map(s => `<span class="pill red">${s}</span>`).join("")}</div></div>` : `<p class="emp-empty-hint">No missing must-have skills for this role.</p>`}
          ` : ""}
          ${drawerTab === "application" ? `
            <div class="emp-stat-row"><span>Source</span><strong>${c.source}</strong></div>
            <div class="emp-stat-row"><span>Owner</span><strong>${c.owner}</strong></div>
            <div class="emp-stat-row"><span>Applied</span><strong>${c.timeline[0]?.date || "—"}</strong></div>
            <div class="emp-stat-row"><span>Resume</span><strong>On file</strong></div>
            <div class="emp-stat-row"><span>Portfolio</span><strong>${c.portfolio === "Not provided" ? "Not provided" : "Attached"}</strong></div>
          ` : ""}
          ${drawerTab === "timeline" ? `
            <ul class="emp-drawer-timeline">
              ${c.timeline.map(t => `<li class="${t.done ? "done" : ""}">${icon(t.done ? "check" : "circle")} <span>${t.label}</span>${t.date ? `<span class="emp-timeline-date">${t.date}</span>` : ""}</li>`).join("")}
            </ul>
            ${c.interview && c.interview.scorecards.length ? `
              <span class="emp-tags-label">Scorecards</span>
              ${c.interview.scorecards.map(sc => `
                <div class="card emp-scorecard-card">
                  <div class="emp-card-head"><strong>${sc.interviewer}</strong><span class="pill ${sc.recommendation.toLowerCase().includes("yes") ? "green" : ""}">${sc.recommendation}</span></div>
                  ${sc.strengths.length ? `<p><strong>Strengths:</strong> ${sc.strengths.join(", ")}</p>` : ""}
                  ${sc.concerns.length ? `<p><strong>Concerns:</strong> ${sc.concerns.join(", ")}</p>` : ""}
                  <p class="emp-talent-meta">${sc.notes}</p>
                </div>
              `).join("")}
            ` : ""}
          ` : ""}
          ${drawerTab === "notes" ? `
            <div class="emp-drawer-notes">
              ${c.notes.length ? c.notes.map(n => `<div class="emp-note-item"><strong>${n.author}</strong> <span class="emp-timeline-date">${n.date}</span><p>${n.text}</p></div>`).join("") : `<p class="emp-empty-hint">No internal notes yet.</p>`}
            </div>
            <textarea data-drawer-note-input rows="3" placeholder="Add an internal note (not visible to the candidate)"></textarea>
            <button type="button" class="btn btn-ghost btn-sm" data-drawer-add-note>${icon("plus")} Add note</button>
          ` : ""}
          ${drawerTab === "activity" ? `
            <ul class="emp-drawer-activity">${c.activity.map(a => `<li><span>${a.text}</span><span class="emp-timeline-date">${a.date}</span></li>`).join("")}</ul>
          ` : ""}
        </div>
      </div>
    `;
  }

  function renderActionModal({ type, id }) {
    const c = DATA.candidates.find(cand => cand.id === id);
    if (!c) return "";
    if (type === "reject") {
      return `
        <div class="emp-compose-modal">
          <div class="card emp-compose-card">
            <h2>Why are you rejecting ${c.name}?</h2>
            <div class="emp-close-reasons">
              ${REJECTION_REASONS_PIPELINE.map((r, i) => `<label class="check-field custom-checkbox"><input type="radio" name="reject-reason" value="${r}" ${i === 0 ? "checked" : ""}> ${r}</label>`).join("")}
            </div>
            <label>Candidate-facing message <span class="emp-optional-tag">Optional</span><textarea data-reject-message rows="3" placeholder="Vera can help draft a respectful message..."></textarea></label>
            <p class="emp-preview-note">Rejecting moves this candidate to Archive. Their history is preserved, not deleted.</p>
            <div class="emp-compose-actions">
              <button type="button" class="btn btn-ghost" data-action-cancel>Cancel</button>
              <button type="button" class="btn btn-primary" data-action-confirm="reject" data-candidate-id="${c.id}">Reject candidate</button>
            </div>
          </div>
        </div>
      `;
    }
    if (type === "schedule") {
      return `
        <div class="emp-compose-modal">
          <div class="card emp-compose-card">
            <h2>Schedule interview: ${c.name}</h2>
            <label>Interview type<select data-schedule-type>${INTERVIEW_TYPES_PIPELINE.map(t => `<option ${c.interview?.nextInterview?.type === t ? "selected" : ""}>${t}</option>`).join("")}</select></label>
            <label>Date<input type="text" data-schedule-date placeholder="e.g. Tue" value="${c.interview?.nextInterview?.date || ""}"></label>
            <label>Time<input type="text" data-schedule-time placeholder="e.g. 2:30 PM" value="${c.interview?.nextInterview?.time || ""}"></label>
            <div class="emp-compose-actions">
              <button type="button" class="btn btn-ghost" data-action-cancel>Cancel</button>
              <button type="button" class="btn btn-primary" data-action-confirm="schedule" data-candidate-id="${c.id}">Schedule</button>
            </div>
          </div>
        </div>
      `;
    }
    if (type === "offer") {
      return `
        <div class="emp-compose-modal">
          <div class="card emp-compose-card">
            <h2>Offer Builder: ${c.name}</h2>
            <label>Role<input type="text" value="${c.role}" disabled></label>
            <label>Base salary (RM / month)<input type="text" data-offer-amount placeholder="e.g. 5,200"></label>
            <label>Start date<input type="text" data-offer-start placeholder="e.g. 1 Sep 2026"></label>
            <label>Offer expiry<input type="text" data-offer-expiry placeholder="e.g. in 5 days"></label>
            <label>Optional message <span class="emp-optional-tag">Optional</span><textarea data-offer-message rows="2" placeholder="A short welcome note for the candidate"></textarea></label>
            <div class="emp-compose-actions">
              <button type="button" class="btn btn-ghost" data-action-cancel>Cancel</button>
              <button type="button" class="btn btn-ghost" data-action-confirm="save-offer-draft" data-candidate-id="${c.id}">Save draft</button>
              <button type="button" class="btn btn-primary" data-action-confirm="send-offer" data-candidate-id="${c.id}">Send offer</button>
            </div>
          </div>
        </div>
      `;
    }
    if (type === "counter") {
      return `
        <div class="emp-compose-modal">
          <div class="card emp-compose-card">
            <h2>Counter offer: ${c.name}</h2>
            <div class="emp-stat-row"><span>Candidate requested</span><strong>${c.offer.counterAmount}</strong></div>
            <div class="emp-stat-row"><span>Original offer</span><strong>${c.offer.amount}</strong></div>
            <div class="emp-stat-row"><span>Company-approved range</span><strong>${c.offer.approvedRange.min} – ${c.offer.approvedRange.max}</strong></div>
            <div class="emp-compose-actions">
              <button type="button" class="btn btn-ghost" data-action-confirm="decline-offer" data-candidate-id="${c.id}">Decline</button>
              <button type="button" class="btn btn-ghost" data-action-confirm="respond-offer" data-candidate-id="${c.id}">Respond</button>
              <button type="button" class="btn btn-primary" data-action-confirm="accept-offer" data-candidate-id="${c.id}">Accept</button>
            </div>
          </div>
        </div>
      `;
    }
    return "";
  }

  function runCandidateAction(c, action) {
    switch (action) {
      case "review": openDrawerId = c.id; drawerTab = "overview"; draw(); break;
      case "shortlist": moveStage(c, "Shortlisted"); draw(); showToast(`${c.name} shortlisted.`); break;
      case "schedule": case "reschedule": pendingAction = { type: "schedule", id: c.id }; draw(); break;
      case "move-final": moveStage(c, "Final Review"); draw(); showToast(`${c.name} moved to Final Review.`); break;
      case "make-offer": case "send-offer": pendingAction = { type: "offer", id: c.id }; draw(); break;
      case "review-counter": pendingAction = { type: "counter", id: c.id }; draw(); break;
      case "follow-up": showToast(`Follow-up reminder sent for ${c.name}.`); break;
      case "reject": pendingAction = { type: "reject", id: c.id }; draw(); break;
      case "compare": showToast("Candidate comparison is coming in the next update.", "info"); break;
    }
  }

  function draw() {
    const list = filtered();
    const openRoles = DATA.employerRoles.filter(r => ["Open", "Paused"].includes(r.status));
    const owners = [...new Set(activeList().map(c => c.owner))];
    const sources = [...new Set(activeList().map(c => c.source))];

    const activeCount = activeList().length;
    const interviewsThisWeek = activeList().filter(c => c.interview?.nextInterview).length;
    const feedbackWaitingCount = activeList().filter(feedbackWaiting).length;
    const offersOutstandingCount = activeList().filter(offerOutstanding).length;
    const newCount = activeList().filter(c => c.stage === "New").length;
    const hiredCount = activeList().filter(c => c.stage === "Hired").length;
    const offerDecidedCount = activeList().filter(c => c.offer && ["Accepted", "Declined"].includes(c.offer.status)).length;
    const offerAcceptanceRate = offerDecidedCount ? Math.round((hiredCount / offerDecidedCount) * 100) : null;
    const stalledCount = activeList().filter(c => c.stage === "Interview" && !c.interview?.nextInterview).length;

    const attentionChips = [];
    if (feedbackWaitingCount) attentionChips.push({ text: `${feedbackWaitingCount} feedback form${feedbackWaitingCount === 1 ? "" : "s"} overdue`, filter: "feedback" });
    if (newCount) attentionChips.push({ text: `${newCount} new application${newCount === 1 ? "" : "s"} not reviewed`, filter: "needs-action" });
    if (offersOutstandingCount) attentionChips.push({ text: `${offersOutstandingCount} offer${offersOutstandingCount === 1 ? "" : "s"} waiting on a response`, filter: "offers" });

    root.innerHTML = `
      <div class="emp-view-header">
        <div>
          <h1>Talent Pipeline</h1>
          <p>Manage every candidate from first signal to accepted offer — and discover high-fit talent before they apply.</p>
        </div>
      </div>

      <div class="emp-pipeline-controls">
        <label class="emp-pipeline-role-select">Viewing pipeline for
          <select data-pipeline-role>
            <option value="all" ${roleFilter === "all" ? "selected" : ""}>All open roles</option>
            ${openRoles.map(r => `<option value="${r.id}" ${roleFilter === r.id ? "selected" : ""}>${r.title}</option>`).join("")}
          </select>
        </label>
        <input type="text" data-pipeline-search placeholder="Search candidates" value="${query}">
        <button type="button" class="btn btn-ghost btn-sm" data-pipeline-filters-toggle>${icon("filter")} Filters</button>
      </div>

      ${filtersOpen ? `
        <div class="card emp-pipeline-filters">
          <label>Stage<select data-pipeline-filter="stage">
            <option value="all">Any stage</option>
            ${EMPLOYER_TALENT_PIPELINE_STAGES.map(s => `<option value="${s}" ${stageFilterX === s ? "selected" : ""}>${s}</option>`).join("")}
          </select></label>
          <label>Source<select data-pipeline-filter="source">
            <option value="all">Any source</option>
            ${sources.map(s => `<option value="${s}" ${sourceFilterX === s ? "selected" : ""}>${s}</option>`).join("")}
          </select></label>
          <label>Pipeline owner<select data-pipeline-filter="owner">
            <option value="all">Anyone</option>
            ${owners.map(o => `<option value="${o}" ${ownerFilterX === o ? "selected" : ""}>${o}</option>`).join("")}
          </select></label>
          <label>Min role fit<select data-pipeline-filter="fit">
            <option value="0" ${minFit === 0 ? "selected" : ""}>Any fit</option>
            <option value="70" ${minFit === 70 ? "selected" : ""}>70%+</option>
            <option value="80" ${minFit === 80 ? "selected" : ""}>80%+</option>
            <option value="90" ${minFit === 90 ? "selected" : ""}>90%+</option>
          </select></label>
          <button type="button" class="btn btn-ghost btn-sm" data-pipeline-clear-filters>Clear filters</button>
        </div>
      ` : ""}

      ${attentionChips.length ? `
        <div class="emp-attention-row">
          ${attentionChips.map(a => `<button type="button" class="emp-attention-chip" data-attention-filter="${a.filter}">${icon("alert-triangle")} ${a.text}</button>`).join("")}
          ${specialFilter ? `<button type="button" class="emp-attention-chip emp-attention-clear" data-attention-clear>${icon("x")} Clear filter</button>` : ""}
        </div>
      ` : ""}

      <div class="emp-kpi-row emp-snapshot-row">
        <button type="button" class="emp-kpi-tile emp-kpi-clickable" data-snapshot-metric="all"><strong>${activeCount}</strong><span>Active candidates</span></button>
        <button type="button" class="emp-kpi-tile emp-kpi-clickable" data-snapshot-metric="interviews"><strong>${interviewsThisWeek}</strong><span>Interviews this week</span></button>
        <button type="button" class="emp-kpi-tile emp-kpi-clickable" data-snapshot-metric="feedback"><strong>${feedbackWaitingCount}</strong><span>Feedback waiting</span></button>
        <button type="button" class="emp-kpi-tile emp-kpi-clickable" data-snapshot-metric="offers"><strong>${offersOutstandingCount}</strong><span>Offers outstanding</span></button>
      </div>
      <p class="emp-pipeline-health">${offerAcceptanceRate === null ? "No decided offers yet" : `Offer acceptance: <strong>${offerAcceptanceRate}%</strong>`} · Stalled in interview: <strong>${stalledCount}</strong></p>

      <div class="emp-pipeline-section-head">
        <div>
          <h2>Candidate Pipeline</h2>
          <p>See every active candidate, understand what needs to happen next, and move hiring forward.</p>
        </div>
        <div class="emp-pipeline-view-toggle">
          <button type="button" class="${viewMode === "board" ? "active" : ""}" data-pipeline-view="board">Board</button>
          <button type="button" class="${viewMode === "list" ? "active" : ""}" data-pipeline-view="list">List</button>
        </div>
      </div>

      ${viewMode === "board" ? renderBoard(list) : renderListView(list)}

      ${openDrawerId ? renderDrawer(openDrawerId) : ""}
      ${pendingAction ? renderActionModal(pendingAction) : ""}
    `;
    createIcons();
    bind();
  }

  function bind() {
    qs("[data-pipeline-role]", root)?.addEventListener("change", e => { roleFilter = e.target.value; draw(); });
    qs("[data-pipeline-search]", root)?.addEventListener("input", e => { query = e.target.value; draw(); });
    qs("[data-pipeline-filters-toggle]", root)?.addEventListener("click", () => { filtersOpen = !filtersOpen; draw(); });
    qsa("[data-pipeline-filter]", root).forEach(sel => sel.addEventListener("change", () => {
      const key = sel.dataset.pipelineFilter;
      if (key === "stage") stageFilterX = sel.value;
      if (key === "source") sourceFilterX = sel.value;
      if (key === "owner") ownerFilterX = sel.value;
      if (key === "fit") minFit = Number(sel.value);
      draw();
    }));
    qs("[data-pipeline-clear-filters]", root)?.addEventListener("click", () => {
      stageFilterX = "all"; sourceFilterX = "all"; ownerFilterX = "all"; minFit = 0; draw();
    });
    qsa("[data-attention-filter]", root).forEach(btn => btn.addEventListener("click", () => { specialFilter = btn.dataset.attentionFilter; draw(); }));
    qs("[data-attention-clear]", root)?.addEventListener("click", () => { specialFilter = null; draw(); });
    qsa("[data-snapshot-metric]", root).forEach(btn => btn.addEventListener("click", () => {
      const m = btn.dataset.snapshotMetric;
      specialFilter = m === "all" ? null : m;
      draw();
    }));
    qsa("[data-pipeline-view]", root).forEach(btn => btn.addEventListener("click", () => { viewMode = btn.dataset.pipelineView; draw(); }));

    qsa("[data-candidate-card]", root).forEach(el => el.addEventListener("click", event => {
      if (event.target.closest("[data-candidate-primary], [data-candidate-menu], [data-candidate-action]")) return;
      openDrawerId = el.dataset.candidateCard;
      drawerTab = "overview";
      draw();
    }));

    qsa("[data-candidate-menu]", root).forEach(btn => btn.addEventListener("click", event => {
      event.stopPropagation();
      const panel = qs(`[data-candidate-menu-panel="${btn.dataset.candidateMenu}"]`, root);
      const isHidden = panel.hidden;
      qsa("[data-candidate-menu-panel]", root).forEach(p => p.hidden = true);
      qsa(".emp-cand-card", root).forEach(card => card.classList.remove("emp-cand-card-menu-open"));
      panel.hidden = !isHidden;
      if (!panel.hidden) btn.closest(".emp-cand-card")?.classList.add("emp-cand-card-menu-open");
    }));
    document.addEventListener("click", () => {
      qsa("[data-candidate-menu-panel]", root).forEach(p => p.hidden = true);
      qsa(".emp-cand-card", root).forEach(card => card.classList.remove("emp-cand-card-menu-open"));
    });

    qsa("[data-candidate-primary]", root).forEach(btn => btn.addEventListener("click", event => {
      event.stopPropagation();
      const c = DATA.candidates.find(cand => cand.id === btn.dataset.candidatePrimary);
      runCandidateAction(c, primaryActionFor(c).action);
    }));
    qsa("[data-candidate-action]", root).forEach(btn => btn.addEventListener("click", event => {
      event.stopPropagation();
      const c = DATA.candidates.find(cand => cand.id === btn.dataset.candidateId);
      runCandidateAction(c, btn.dataset.candidateAction);
    }));

    qs("[data-drawer-close]", root)?.addEventListener("click", () => { openDrawerId = null; draw(); });
    qsa("[data-drawer-tab]", root).forEach(btn => btn.addEventListener("click", () => { drawerTab = btn.dataset.drawerTab; draw(); }));
    qs("[data-drawer-add-note]", root)?.addEventListener("click", () => {
      const textarea = qs("[data-drawer-note-input]", root);
      const text = textarea.value.trim();
      if (!text) return;
      const c = DATA.candidates.find(cand => cand.id === openDrawerId);
      c.notes.unshift({ author: "You", text, date: "Just now" });
      c.activity.unshift({ text: "Internal note added", date: "Just now" });
      draw();
    });

    qs("[data-action-cancel]", root)?.addEventListener("click", () => { pendingAction = null; draw(); });
    qsa("[data-action-confirm]", root).forEach(btn => btn.addEventListener("click", () => {
      const c = DATA.candidates.find(cand => cand.id === btn.dataset.candidateId);
      const kind = btn.dataset.actionConfirm;
      if (kind === "reject") {
        const reason = qs('input[name="reject-reason"]:checked', root)?.value || "Other";
        const message = qs("[data-reject-message]", root)?.value || "";
        c.archived = true; c.stage = null;
        c.rejection = { reason, message, date: "Just now" };
        c.activity.unshift({ text: `Rejected: ${reason}`, date: "Just now" });
        showToast(`${c.name} moved to Archive.`);
      }
      if (kind === "schedule") {
        const type = qs("[data-schedule-type]", root).value;
        const date = qs("[data-schedule-date]", root).value || "TBD";
        const time = qs("[data-schedule-time]", root).value || "TBD";
        if (c.stage === "Shortlisted") {
          c.interview = { round: 1, totalRounds: 2, nextInterview: { type, date, time }, interviewers: [], feedbackSubmitted: 0, feedbackTotal: 1, scorecards: [] };
          moveStage(c, "Interview", `Interview scheduled: ${type}`);
        } else {
          c.interview.nextInterview = { type, date, time };
          c.interview.round += 1;
          c.activity.unshift({ text: `Interview rescheduled: ${type}`, date: "Just now" });
        }
        showToast(`Interview scheduled for ${c.name}.`);
      }
      if (kind === "save-offer-draft" || kind === "send-offer") {
        const amount = qs("[data-offer-amount]", root).value || "0";
        const expiry = qs("[data-offer-expiry]", root).value || "";
        c.offer = {
          status: kind === "send-offer" ? "Sent" : "Draft",
          amount: `RM ${amount} / month`, sentDate: kind === "send-offer" ? "Just now" : null, expiryDate: expiry || null,
          counterAmount: null, approvedRange: c.offer?.approvedRange || { min: `RM ${amount}`, max: `RM ${amount}` }
        };
        if (c.stage !== "Offer") moveStage(c, "Offer", kind === "send-offer" ? "Offer sent" : "Offer drafted");
        c.activity.unshift({ text: kind === "send-offer" ? `Offer sent: ${c.offer.amount}` : "Offer draft saved", date: "Just now" });
        showToast(kind === "send-offer" ? `Offer sent to ${c.name}.` : "Offer draft saved.");
      }
      if (kind === "accept-offer") {
        c.offer.status = "Accepted";
        moveStage(c, "Hired", "Offer accepted");
        c.hired = { startDate: "TBD", onboardingStatus: "Onboarding not started" };
        showToast(`${c.name} hired!`);
      }
      if (kind === "decline-offer") {
        c.offer.status = "Declined";
        c.activity.unshift({ text: "Candidate declined the offer", date: "Just now" });
        showToast(`${c.name} declined the offer.`);
      }
      if (kind === "respond-offer") {
        c.offer.status = "Sent";
        c.activity.unshift({ text: "Responded to counter offer", date: "Just now" });
        showToast("Response sent to candidate.");
      }
      pendingAction = null;
      draw();
    }));
  }

  draw();
}

function renderEmployerCommunity(root) {
  function draw() {
    root.innerHTML = `
      <div class="emp-view-header"><h1>Community</h1><button type="button" class="btn btn-primary" data-community-compose>${icon("plus")} Create Post</button></div>
      <div class="emp-community-feed" data-community-feed></div>
      <div class="emp-compose-modal" data-community-modal hidden>
        <div class="card emp-compose-card">
          <h2>New post</h2>
          <textarea data-community-draft placeholder="Share a discussion, question, or hiring insight..." rows="4"></textarea>
          <div class="emp-compose-actions">
            <button type="button" class="btn btn-ghost" data-community-cancel>Cancel</button>
            <button type="button" class="btn btn-primary" data-community-submit>Post</button>
          </div>
        </div>
      </div>
    `;
    createIcons();
    renderFeed();

    qs("[data-community-compose]", root)?.addEventListener("click", () => {
      qs("[data-community-modal]", root).hidden = false;
    });
    qs("[data-community-cancel]", root)?.addEventListener("click", () => {
      qs("[data-community-modal]", root).hidden = true;
    });
    qs("[data-community-submit]", root)?.addEventListener("click", () => {
      const textarea = qs("[data-community-draft]", root);
      const body = textarea.value.trim();
      if (!body) return;
      DATA.communityPosts.unshift({ id: `p-${Date.now()}`, author: "Maybank", authorType: "employer", verified: true, title: "Company update", body, reactions: 0 });
      textarea.value = "";
      qs("[data-community-modal]", root).hidden = true;
      renderFeed();
      showToast("Post published.");
    });
  }

  function renderFeed() {
    const feed = qs("[data-community-feed]", root);
    feed.innerHTML = DATA.communityPosts.map(post => `
      <div class="card emp-post-card">
        <div class="emp-post-head">
          <strong>${post.author}</strong>
          ${post.verified ? `<span class="pill cyan">Verified Employer</span>` : ""}
        </div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <div class="emp-post-actions">
          <button type="button" class="btn btn-ghost btn-sm" data-community-react="${post.id}">${icon("heart")} ${post.reactions}</button>
        </div>
      </div>
    `).join("");
    qsa("[data-community-react]", feed).forEach(btn => btn.addEventListener("click", () => {
      const post = DATA.communityPosts.find(p => p.id === btn.dataset.communityReact);
      if (post) post.reactions += 1;
      renderFeed();
    }));
    createIcons();
  }

  draw();
}

function sourceTag(label) { return `<span class="emp-source-tag">${label}</span>`; }

function computeCompanyCompleteness(company) {
  const checks = [
    !!company.summary, !!company.averageRequirements, !!company.hiringProcess, !!company.salaryBenefits,
    !!company.careerGrowth, !!company.workCulture, !!(company.highlights && company.highlights.length),
    false // workplace media - not yet supported, counted as a gap
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function renderEmployerCompany(root) {
  const company = DATA.companies.find(c => c.id === "maybank");
  let showAllRoles = false;
  let showAllReviews = false;

  function formatRoleSalary(r) {
    if (!r.salary || !r.salary.min || !r.salary.max) return "Salary not published";
    const fmt = n => (n / 1000).toFixed(1).replace(".0", "");
    return `RM ${fmt(r.salary.min)}k–${fmt(r.salary.max)}k / ${r.salary.period.toLowerCase()}`;
  }

  function draw() {
    const openRoles = DATA.employerRoles.filter(r => r.status === "Open");
    const rolesToShow = showAllRoles ? openRoles : openRoles.slice(0, 4);
    const allReviews = [
      ...DATA.reviews.filter(r => r.targetId === company.id).map(r => ({ title: r.title, role: r.author, date: r.date, rating: r.rating, body: r.body })),
      ...company.companyReviews.map(r => ({ title: r.title, role: r.role, date: r.date, rating: r.rating, body: r.body }))
    ];
    const reviewsToShow = showAllReviews ? allReviews : allReviews.slice(0, 3);
    const completeness = computeCompanyCompleteness(company);

    root.innerHTML = `
      <div class="emp-view-header">
        <div>
          <h1>Company Profile</h1>
          <p>Manage how candidates see your company and understand what is shaping their interest.</p>
        </div>
      </div>

      <div class="card emp-company-header">
        <div class="emp-company-header-top">
          <div class="emp-company-header-identity">
            <span class="emp-company-logo">${company.name.charAt(0)}</span>
            <div>
              <div class="emp-company-name-row"><h2>${company.name}</h2>${company.verified ? `<span class="pill cyan">${icon("shield-check")} Verified company</span>` : ""}</div>
              <p class="emp-cand-meta">${company.industry} · ${company.location} · ${company.size}</p>
              <p class="emp-cand-meta">${company.workMode} · ${company.followers.toLocaleString()} followers · ${openRoles.length} open roles</p>
            </div>
          </div>
          <div class="emp-company-header-actions">
            <button type="button" class="btn btn-primary" data-company-edit>Edit profile</button>
            <a class="btn btn-ghost" href="companies.html?org=${company.id}" target="_blank" rel="noopener">${icon("external-link")} View as candidate</a>
            <button type="button" class="btn btn-ghost btn-sm emp-menu-toggle" data-company-menu>${icon("more-horizontal")}</button>
            <div class="emp-actions-menu" data-company-menu-panel hidden>
              <button type="button" data-company-share>Share public profile</button>
            </div>
          </div>
        </div>
        <div class="emp-company-header-status">
          <span><strong>Public profile:</strong> ${company.publicProfileStatus}</span>
          <span><strong>Profile completeness:</strong> ${completeness}%</span>
          <span>Last updated ${company.lastUpdated}</span>
        </div>
      </div>

      <div class="emp-detail-tabs" data-company-nav>
        <a href="#comp-overview" data-jump="comp-overview">Overview</a>
        <a href="#comp-roles" data-jump="comp-roles">Roles</a>
        <a href="#comp-requirements" data-jump="comp-requirements">Requirements</a>
        <a href="#comp-hiring" data-jump="comp-hiring">Hiring</a>
        <a href="#comp-salary" data-jump="comp-salary">Salary &amp; Benefits</a>
        <a href="#comp-growth" data-jump="comp-growth">Growth &amp; Culture</a>
        <a href="#comp-reviews" data-jump="comp-reviews">Reviews</a>
        <a href="#comp-insights" data-jump="comp-insights">Insights</a>
      </div>

      <div class="card emp-company-section" id="comp-overview">
        <div class="emp-company-section-head"><h2>Company at a Glance</h2>${sourceTag("Company provided")}</div>
        <div class="emp-requirements-grid">
          <div class="emp-stat-row"><span>Industry</span><strong>${company.industry}</strong></div>
          <div class="emp-stat-row"><span>Headquarters</span><strong>${company.location}</strong></div>
          <div class="emp-stat-row"><span>Company size</span><strong>${company.size}</strong></div>
          <div class="emp-stat-row"><span>Work mode</span><strong>${company.workMode}</strong></div>
          <div class="emp-stat-row"><span>Founded</span><strong>${company.founded}</strong></div>
          <div class="emp-stat-row"><span>Office locations</span><strong>${company.officeLocations.join(" · ")}</strong></div>
          <div class="emp-stat-row"><span>Website</span><strong>${company.website}</strong></div>
        </div>
        <p class="emp-company-description">${company.summary}</p>
        <div class="emp-tags">
          <span class="emp-tags-label">Profile characteristics ${sourceTag("Verified by CareerGo")}</span>
          <div class="pill-row">${company.tags.map(t => `<span class="pill">${t}</span>`).join("")}</div>
        </div>
      </div>

      <div class="card emp-company-section" id="comp-roles">
        <div class="emp-company-section-head">
          <div><h2>Roles Candidates Can Explore</h2><p>Current opportunities and common career paths associated with your company.</p></div>
          <button type="button" class="btn btn-ghost btn-sm" data-company-manage-roles>Manage roles</button>
        </div>
        <div class="emp-company-role-list">
          ${rolesToShow.length ? rolesToShow.map(r => `
            <div class="emp-company-role-row">
              <div>
                <strong>${r.title}</strong>
                <p class="emp-cand-meta">${r.department || "—"} · ${formatRoleSalary(r)} · ${r.minExperience}</p>
              </div>
              <span class="pill green">${r.status}</span>
              <button type="button" class="btn btn-ghost btn-sm" data-company-view-role="${r.id}">View role</button>
            </div>
          `).join("") : `<p class="emp-empty-hint">No open roles right now.</p>`}
        </div>
        ${openRoles.length > 4 ? `<button type="button" class="btn btn-ghost btn-sm" data-company-toggle-roles>${showAllRoles ? "Show fewer roles" : `Show all ${openRoles.length} roles`}</button>` : ""}
      </div>

      <div class="card emp-company-section" id="comp-requirements">
        <div class="emp-company-section-head"><h2>What Candidates Usually Need</h2>${sourceTag("Company provided")}</div>
        <p class="emp-company-section-desc">Typical requirements candidates should understand before applying.</p>
        <div class="emp-requirements-grid">
          <div class="emp-stat-row"><span>Education</span><strong>${company.averageRequirements.education}</strong></div>
          <div class="emp-stat-row"><span>CGPA</span><strong>${company.averageRequirements.cgpa}</strong></div>
          <div class="emp-stat-row"><span>Experience</span><strong>${company.averageRequirements.experience}</strong></div>
          <div class="emp-stat-row"><span>English</span><strong>${company.averageRequirements.englishRequirement}</strong></div>
          <div class="emp-stat-row"><span>Portfolio</span><strong>${company.averageRequirements.portfolio}</strong></div>
          <div class="emp-stat-row"><span>Internship experience</span><strong>${company.averageRequirements.internshipPreferred}</strong></div>
          <div class="emp-stat-row"><span>Certifications</span><strong>${company.averageRequirements.certifications}</strong></div>
        </div>
        <div class="emp-tags"><span class="emp-tags-label">Common skills</span><div class="pill-row">${company.averageRequirements.commonSkills.map(s => `<span class="pill">${s}</span>`).join("")}</div></div>
        <div class="emp-tags"><span class="emp-tags-label">Tech / tools</span><div class="pill-row">${company.averageRequirements.techSkills.map(s => `<span class="pill">${s}</span>`).join("")}</div></div>
      </div>

      <div class="card emp-company-section" id="comp-hiring">
        <div class="emp-company-section-head"><h2>How Hiring Works</h2>${sourceTag("Company provided")}</div>
        <p class="emp-company-section-desc">Help candidates understand what usually happens after they apply.</p>
        <ol class="emp-hiring-steps">
          ${company.hiringProcess.steps.map((s, i) => `<li><span class="emp-hiring-step-index">${i + 1}</span><span>${s}</span></li>`).join("")}
        </ol>
        <div class="emp-requirements-grid">
          <div class="emp-stat-row"><span>Typical duration</span><strong>${company.hiringProcess.avgResponseTime}</strong></div>
          <div class="emp-stat-row"><span>Interview rounds</span><strong>${company.hiringProcess.steps.length}</strong></div>
          <div class="emp-stat-row"><span>Assessment</span><strong>${company.hiringProcess.assessmentNote}</strong></div>
          <div class="emp-stat-row"><span>Candidate feedback</span><strong>Varies by role</strong></div>
        </div>
      </div>

      <div class="card emp-company-section" id="comp-salary">
        <div class="emp-company-section-head"><h2>Salary &amp; Benefits</h2>${sourceTag("Company provided + live roles")}</div>
        <p class="emp-company-section-desc">What candidates can realistically expect.</p>
        <div class="emp-requirements-grid">
          <div class="emp-stat-row"><span>Average salary range</span><strong>${company.salary}</strong></div>
          <div class="emp-stat-row"><span>Fresh graduate salary</span><strong>${company.salaryBenefits.freshGradSalary}</strong></div>
          <div class="emp-stat-row"><span>Internship allowance</span><strong>${company.salaryBenefits.internshipAllowance}</strong></div>
          <div class="emp-stat-row"><span>Bonus / incentives</span><strong>${company.salaryBenefits.bonus}</strong></div>
          <div class="emp-stat-row"><span>Medical benefits</span><strong>${company.salaryBenefits.medical}</strong></div>
          <div class="emp-stat-row"><span>Flexible work</span><strong>${company.salaryBenefits.flexibleWork}</strong></div>
          <div class="emp-stat-row"><span>Training</span><strong>${company.salaryBenefits.training}</strong></div>
          <div class="emp-stat-row"><span>Leave benefits</span><strong>${company.salaryBenefits.leave}</strong></div>
        </div>
      </div>

      <div class="card emp-company-section" id="comp-growth">
        <div class="emp-company-section-head"><h2>Growth &amp; Development</h2>${sourceTag("Company provided")}</div>
        <p class="emp-company-section-desc">How people learn, move and progress inside the company.</p>
        <div class="emp-requirements-grid">
          <div class="emp-stat-row"><span>Training quality</span><strong>${company.careerGrowth.trainingQuality}</strong></div>
          <div class="emp-stat-row"><span>Promotion path</span><strong>${company.careerGrowth.promotionPath}</strong></div>
          <div class="emp-stat-row"><span>Graduate program</span><strong>${company.careerGrowth.graduateProgram}</strong></div>
          <div class="emp-stat-row"><span>Mentorship</span><strong>${company.careerGrowth.mentorship}</strong></div>
          <div class="emp-stat-row"><span>Internal transfer</span><strong>${company.careerGrowth.internalTransfer}</strong></div>
          <div class="emp-stat-row"><span>Learning opportunities</span><strong>${company.careerGrowth.learningOpportunities}</strong></div>
        </div>
      </div>

      <div class="card emp-company-section">
        <div class="emp-company-section-head"><h2>Work Culture</h2></div>
        <p class="emp-company-section-desc">What day-to-day work may feel like.</p>
        <div class="emp-requirements-grid">
          <div class="emp-stat-row"><span>Pace</span><strong>${company.workCulture.pace}</strong></div>
          <div class="emp-stat-row"><span>Team style</span><strong>${company.workCulture.teamStyle}</strong></div>
          <div class="emp-stat-row"><span>Work-life balance</span><strong>${company.workCulture.workLifeBalance}</strong></div>
          <div class="emp-stat-row"><span>Management style ${sourceTag("Employee reviews")}</span><strong>${company.workCulture.managementStyle}</strong></div>
          <div class="emp-stat-row"><span>Collaboration</span><strong>${company.workCulture.collaboration}</strong></div>
          <div class="emp-stat-row"><span>Overtime signal ${sourceTag("Employee reviews")}</span><strong>${company.workCulture.overtimeSignal}</strong></div>
          <div class="emp-stat-row"><span>Review themes ${sourceTag("Employee reviews")}</span><strong>${company.workCulture.reviewThemes}</strong></div>
        </div>
        <div class="emp-highlight-watchout-grid">
          <div class="card emp-highlight-card">
            <div class="emp-callout-label">${icon("check")} What candidates like ${sourceTag("Vera synthesis")}</div>
            <ul>${company.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
          </div>
          <div class="card emp-watchout-card">
            <div class="emp-callout-label warn">${icon("alert-triangle")} What candidates should know ${sourceTag("Vera synthesis")}</div>
            <ul>${company.watchouts.map(w => `<li>${w}</li>`).join("")}</ul>
          </div>
        </div>
      </div>

      <div class="card emp-company-section" id="comp-reviews">
        <div class="emp-company-section-head"><h2>Reputation &amp; Employee Voice</h2>${sourceTag("Employee reviews")}</div>
        <p class="emp-company-section-desc">What employees consistently say about working here.</p>
        <div class="emp-score-grid">
          <div class="emp-score-tile main"><strong>${company.rating}</strong><span>Overall</span></div>
          <div class="emp-score-tile"><strong>${company.scores.culture}</strong><span>Culture</span></div>
          <div class="emp-score-tile"><strong>${company.scores.growth}</strong><span>Growth</span></div>
          <div class="emp-score-tile"><strong>${company.scores.pay}</strong><span>Pay</span></div>
          <div class="emp-score-tile"><strong>${company.scores.balance}</strong><span>Work-life balance</span></div>
        </div>
        <p class="emp-empty-hint">${company.reviews.toLocaleString()} reviews</p>
        <div class="emp-review-list">
          ${reviewsToShow.map(r => `
            <div class="card emp-review-card">
              <div class="emp-card-head"><h3>${r.title}</h3><span class="pill green">${r.rating} / 5</span></div>
              <p class="emp-cand-meta">${r.role} · ${r.date}</p>
              <p>${r.body}</p>
              <button type="button" class="btn btn-ghost btn-sm" data-company-respond-review>Respond to review</button>
            </div>
          `).join("")}
        </div>
        ${allReviews.length > 3 ? `<button type="button" class="btn btn-ghost btn-sm" data-company-toggle-reviews>${showAllReviews ? "Show fewer reviews" : "Show more reviews"}</button>` : ""}
      </div>

      <div class="card emp-company-section" id="comp-insights">
        <div class="emp-company-section-head"><h2>How Candidates See Your Company</h2></div>
        <p class="emp-company-section-desc">Candidate behaviour, profile quality and reputation signals — explained in one place.</p>

        <div class="emp-company-subsection">
          <span class="emp-tags-label">Candidate interest ${sourceTag("Candidate activity")}</span>
          <div class="emp-kpi-row">
            <div class="emp-kpi-tile"><strong>${company.candidateInterest.profileViews.value.toLocaleString()}</strong><span>Profile views</span><span class="emp-kpi-trend">${company.candidateInterest.profileViews.trend}</span></div>
            <div class="emp-kpi-tile"><strong>${company.candidateInterest.saved.value.toLocaleString()}</strong><span>Saved by candidates</span><span class="emp-kpi-trend">${company.candidateInterest.saved.percentOfViewers}% of viewers</span></div>
            <div class="emp-kpi-tile"><strong>${company.candidateInterest.roleClicks.value.toLocaleString()}</strong><span>Open-role clicks</span><span class="emp-kpi-trend">${company.candidateInterest.roleClicks.trend}</span></div>
            <div class="emp-kpi-tile"><strong>${company.candidateInterest.applicationStarts.value.toLocaleString()}</strong><span>Application starts</span><span class="emp-kpi-trend">${company.candidateInterest.applicationStarts.trend}</span></div>
          </div>
        </div>

        <div class="emp-company-subsection">
          <span class="emp-tags-label">Reputation summary ${sourceTag("Vera synthesis")}</span>
          <div class="emp-requirements-grid">
            <div class="emp-stat-row"><span>Strongest signal</span><strong>${company.reputationSummary.strongestSignal.label} — ${company.reputationSummary.strongestSignal.value}</strong></div>
            <div class="emp-stat-row"><span>Most common positive theme</span><strong>${company.reputationSummary.mostCommonPositive}</strong></div>
            <div class="emp-stat-row"><span>Biggest candidate question</span><strong>${company.reputationSummary.biggestQuestion}</strong></div>
            <div class="emp-stat-row"><span>Most common watchout</span><strong>${company.reputationSummary.mostCommonWatchout}</strong></div>
          </div>
          <p class="emp-empty-hint">${company.reputationSummary.basis}</p>
        </div>

        <div class="emp-company-subsection" id="comp-gaps">
          <span class="emp-tags-label">What candidates still need to know</span>
          <ul class="emp-gap-list">${company.profileGaps.map(g => `<li>${icon("alert-triangle")} ${g}</li>`).join("")}</ul>
        </div>

        <div class="emp-company-subsection emp-vera-read">
          <div class="emp-callout-label">${icon("sparkles")} Vera's Read</div>
          <p>${company.veraCompanyRead.summary}</p>
          <div class="emp-vera-read-grid">
            <div><span class="emp-tags-label">What is working</span><ul>${company.veraCompanyRead.whatIsWorking.map(w => `<li>${icon("check")} ${w}</li>`).join("")}</ul></div>
            <div><span class="emp-tags-label">What may be limiting interest</span><ul>${company.veraCompanyRead.whatMayBeLimiting.map(w => `<li>${icon("alert-triangle")} ${w}</li>`).join("")}</ul></div>
          </div>
          <div class="emp-callout emp-callout-suggest">
            <div class="emp-callout-label">${icon("lightbulb")} Next best improvement</div>
            <p>${company.veraCompanyRead.nextBestImprovement}</p>
          </div>
          <div class="emp-vera-read-actions">
            <button type="button" class="btn btn-primary" data-company-edit>Edit profile</button>
            <button type="button" class="btn btn-ghost" data-company-jump-gaps>Review missing information</button>
          </div>
        </div>
      </div>
    `;
    createIcons();
    bind();
  }

  function bind() {
    qsa("[data-company-edit]", root).forEach(btn => btn.addEventListener("click", () => employerNavigateTo("company-edit")));
    qs("[data-company-menu]", root)?.addEventListener("click", event => {
      event.stopPropagation();
      const panel = qs("[data-company-menu-panel]", root);
      panel.hidden = !panel.hidden;
    });
    document.addEventListener("click", () => { const p = qs("[data-company-menu-panel]", root); if (p) p.hidden = true; });
    qs("[data-company-share]", root)?.addEventListener("click", () => showToast("Public profile link copied."));
    qs("[data-company-nav]", root)?.addEventListener("click", event => {
      const link = event.target.closest("[data-jump]");
      if (!link) return;
      event.preventDefault();
      qs(`#${link.dataset.jump}`, root)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    qs("[data-company-manage-roles]", root)?.addEventListener("click", () => employerNavigateTo("roles"));
    qsa("[data-company-view-role]", root).forEach(btn => btn.addEventListener("click", () => employerNavigateTo("role-builder", { id: btn.dataset.companyViewRole })));
    qs("[data-company-toggle-roles]", root)?.addEventListener("click", () => { showAllRoles = !showAllRoles; draw(); });
    qs("[data-company-toggle-reviews]", root)?.addEventListener("click", () => { showAllReviews = !showAllReviews; draw(); });
    qsa("[data-company-respond-review]", root).forEach(btn => btn.addEventListener("click", () => showToast("Response drafted. Full response workflow is coming soon.", "info")));
    qs("[data-company-jump-gaps]", root)?.addEventListener("click", () => qs("#comp-insights", root)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  draw();
}

const COMPANY_EDIT_SECTIONS = [
  ["basics", "Company basics"],
  ["requirements", "Candidate requirements"],
  ["hiring", "Hiring process"],
  ["salary", "Salary & benefits"],
  ["growth", "Growth"],
  ["culture", "Culture"],
  ["media", "Media"]
];

function makeCompanyDraft(company) {
  return {
    name: company.name, industry: company.industry, location: company.location, size: company.size,
    workMode: company.workMode, website: company.website, founded: company.founded, summary: company.summary,
    requirements: { ...company.averageRequirements, commonSkills: [...company.averageRequirements.commonSkills], techSkills: [...company.averageRequirements.techSkills] },
    hiringSteps: [...company.hiringProcess.steps], avgResponseTime: company.hiringProcess.avgResponseTime, assessmentNote: company.hiringProcess.assessmentNote,
    salaryBenefits: { ...company.salaryBenefits }, salary: company.salary,
    careerGrowth: { ...company.careerGrowth },
    workCulture: { ...company.workCulture },
    lastSavedAt: null
  };
}

function renderEmployerCompanyEdit(root) {
  const company = DATA.companies.find(c => c.id === "maybank");
  const seedState = readState();
  const draft = seedState.employerCompanyDraft || makeCompanyDraft(company);
  let savedSnapshot = JSON.stringify(draft);

  function persistDraft() {
    draft.lastSavedAt = new Date().toISOString();
    const state = readState();
    state.employerCompanyDraft = draft;
    writeState(state);
    const label = qs("[data-company-saved-label]", root);
    if (label) label.textContent = formatSavedLabel(draft.lastSavedAt);
  }

  function bindField(selector, path) {
    const el = qs(selector, root);
    if (!el) return;
    const keys = path.split(".");
    el.addEventListener("input", () => {
      let obj = draft;
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = el.value;
    });
    el.addEventListener("blur", persistDraft);
  }

  function renderTagField(field, values) {
    return `
      <div class="emp-tag-input" data-company-tag-field="${field}">
        <div class="pill-row" data-tag-list>
          ${values.map((v, i) => `<span class="pill emp-tag-pill">${v} <button type="button" data-company-tag-remove="${i}" aria-label="Remove ${v}">${icon("x")}</button></span>`).join("")}
        </div>
        <input type="text" data-company-tag-new placeholder="Type a skill and press Enter">
      </div>
    `;
  }

  function bindTagField(field) {
    const container = qs(`[data-company-tag-field="${field}"]`, root);
    if (!container) return;
    const input = qs("[data-company-tag-new]", container);
    input.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        const val = input.value.trim().replace(/,$/, "");
        if (val && !draft.requirements[field].includes(val)) {
          draft.requirements[field].push(val);
          persistDraft();
          draw();
          qs(`[data-company-tag-field="${field}"] [data-company-tag-new]`, root)?.focus();
        } else { input.value = ""; }
      }
    });
    qsa("[data-company-tag-remove]", container).forEach(btn => btn.addEventListener("click", () => {
      draft.requirements[field].splice(Number(btn.dataset.companyTagRemove), 1);
      persistDraft();
      draw();
    }));
  }

  function bindHiringSteps() {
    qsa("[data-company-step-index]", root).forEach(input => {
      input.addEventListener("input", () => { draft.hiringSteps[Number(input.dataset.companyStepIndex)] = input.value; });
      input.addEventListener("blur", persistDraft);
    });
    qsa("[data-company-step-remove]", root).forEach(btn => btn.addEventListener("click", () => {
      draft.hiringSteps.splice(Number(btn.dataset.companyStepRemove), 1);
      persistDraft();
      draw();
    }));
    qs("[data-company-step-add]", root)?.addEventListener("click", () => {
      draft.hiringSteps.push("");
      persistDraft();
      draw();
      const inputs = qsa("[data-company-step-index]", root);
      inputs[inputs.length - 1]?.focus();
    });
  }

  function tempMergedCompany() {
    return {
      ...company, summary: draft.summary,
      averageRequirements: draft.requirements,
      hiringProcess: { steps: draft.hiringSteps, avgResponseTime: draft.avgResponseTime, assessmentNote: draft.assessmentNote },
      salaryBenefits: draft.salaryBenefits,
      careerGrowth: draft.careerGrowth,
      workCulture: draft.workCulture
    };
  }

  function commitPublish() {
    Object.assign(company, {
      name: draft.name, industry: draft.industry, location: draft.location, size: draft.size, workMode: draft.workMode,
      website: draft.website, founded: draft.founded, summary: draft.summary,
      averageRequirements: draft.requirements,
      hiringProcess: { steps: draft.hiringSteps, avgResponseTime: draft.avgResponseTime, assessmentNote: draft.assessmentNote },
      salaryBenefits: draft.salaryBenefits, salary: draft.salary,
      careerGrowth: draft.careerGrowth,
      workCulture: draft.workCulture,
      lastUpdated: "Just now"
    });
    const state = readState();
    state.employerCompanyDraft = null;
    writeState(state);
    savedSnapshot = JSON.stringify(draft);
    showToast("Company profile updated.");
    employerNavigateTo("company", {}, { force: true });
  }

  function draw() {
    root.innerHTML = `
      <div class="emp-view-header">
        <div>
          <h1>Edit Company Profile</h1>
          <p>Keep your public company information accurate, complete and useful to candidates. <span data-company-saved-label>${formatSavedLabel(draft.lastSavedAt)}</span></p>
        </div>
        <button type="button" class="btn btn-ghost" data-company-edit-cancel>${icon("x")} Cancel</button>
      </div>

      <div class="emp-detail-tabs" data-company-edit-nav>
        ${COMPANY_EDIT_SECTIONS.map(([id, label]) => `<a href="#edit-${id}" data-jump="edit-${id}">${label}</a>`).join("")}
      </div>

      <div class="emp-edit-layout">
        <div class="emp-edit-main">
          <div class="card emp-company-section" id="edit-basics">
            <h2>Company Basics</h2>
            <label>Company name<input type="text" data-field="name" value="${draft.name}"></label>
            <label>Industry<input type="text" data-field="industry" value="${draft.industry}"></label>
            <label>Headquarters<input type="text" data-field="location" value="${draft.location}"></label>
            <label>Company size<input type="text" data-field="size" value="${draft.size}"></label>
            <label>Work mode<input type="text" data-field="workMode" value="${draft.workMode}"></label>
            <label>Website<input type="text" data-field="website" value="${draft.website}"></label>
            <label>Founded<input type="text" data-field="founded" value="${draft.founded}"></label>
            <label>Description<textarea data-field="summary" rows="3">${draft.summary}</textarea></label>
            <p class="emp-field-help">Logo, cover image and office locations editing are coming in a future update.</p>
          </div>

          <div class="card emp-company-section" id="edit-requirements">
            <h2>Candidate Requirements</h2>
            <label>Typical education<input type="text" data-field="requirements.education" value="${draft.requirements.education}"></label>
            <label>CGPA expectation<input type="text" data-field="requirements.cgpa" value="${draft.requirements.cgpa}"></label>
            <label>Typical experience<input type="text" data-field="requirements.experience" value="${draft.requirements.experience}"></label>
            <label>English expectation<input type="text" data-field="requirements.englishRequirement" value="${draft.requirements.englishRequirement}"></label>
            <label>Portfolio expectation<input type="text" data-field="requirements.portfolio" value="${draft.requirements.portfolio}"></label>
            <label>Internship experience<input type="text" data-field="requirements.internshipPreferred" value="${draft.requirements.internshipPreferred}"></label>
            <label>Certifications<input type="text" data-field="requirements.certifications" value="${draft.requirements.certifications}"></label>
            <div><span class="emp-tags-label">Common skills</span>${renderTagField("commonSkills", draft.requirements.commonSkills)}</div>
            <div><span class="emp-tags-label">Common tools</span>${renderTagField("techSkills", draft.requirements.techSkills)}</div>
          </div>

          <div class="card emp-company-section" id="edit-hiring">
            <h2>Hiring Process</h2>
            <span class="emp-tags-label">Hiring stages</span>
            <div data-step-list>
              ${draft.hiringSteps.map((s, i) => `
                <div class="emp-resp-row">
                  <input type="text" data-company-step-index="${i}" value="${s}" placeholder="e.g. HR interview">
                  <button type="button" class="btn btn-ghost btn-sm" data-company-step-remove="${i}" aria-label="Remove">${icon("x")}</button>
                </div>
              `).join("")}
            </div>
            <button type="button" class="btn btn-ghost btn-sm" data-company-step-add>${icon("plus")} Add stage</button>
            <label>Average timeline<input type="text" data-field="avgResponseTime" value="${draft.avgResponseTime}"></label>
            <label>Assessment note<input type="text" data-field="assessmentNote" value="${draft.assessmentNote}"></label>
          </div>

          <div class="card emp-company-section" id="edit-salary">
            <h2>Salary &amp; Benefits</h2>
            <label>Average salary range<input type="text" data-field="salary" value="${draft.salary}"></label>
            <label>Fresh graduate salary<input type="text" data-field="salaryBenefits.freshGradSalary" value="${draft.salaryBenefits.freshGradSalary}"></label>
            <label>Internship allowance<input type="text" data-field="salaryBenefits.internshipAllowance" value="${draft.salaryBenefits.internshipAllowance}"></label>
            <label>Bonus / incentives<input type="text" data-field="salaryBenefits.bonus" value="${draft.salaryBenefits.bonus}"></label>
            <label>Medical benefits<input type="text" data-field="salaryBenefits.medical" value="${draft.salaryBenefits.medical}"></label>
            <label>Flexible work<input type="text" data-field="salaryBenefits.flexibleWork" value="${draft.salaryBenefits.flexibleWork}"></label>
            <label>Training support<input type="text" data-field="salaryBenefits.training" value="${draft.salaryBenefits.training}"></label>
            <label>Leave benefits<input type="text" data-field="salaryBenefits.leave" value="${draft.salaryBenefits.leave}"></label>
          </div>

          <div class="card emp-company-section" id="edit-growth">
            <h2>Growth &amp; Development</h2>
            <label>Training quality<input type="text" data-field="careerGrowth.trainingQuality" value="${draft.careerGrowth.trainingQuality}"></label>
            <label>Promotion path<input type="text" data-field="careerGrowth.promotionPath" value="${draft.careerGrowth.promotionPath}"></label>
            <label>Graduate program<input type="text" data-field="careerGrowth.graduateProgram" value="${draft.careerGrowth.graduateProgram}"></label>
            <label>Mentorship<input type="text" data-field="careerGrowth.mentorship" value="${draft.careerGrowth.mentorship}"></label>
            <label>Internal transfer<input type="text" data-field="careerGrowth.internalTransfer" value="${draft.careerGrowth.internalTransfer}"></label>
            <label>Learning opportunities<input type="text" data-field="careerGrowth.learningOpportunities" value="${draft.careerGrowth.learningOpportunities}"></label>
          </div>

          <div class="card emp-company-section" id="edit-culture">
            <h2>Culture</h2>
            <label>Team pace<input type="text" data-field="workCulture.pace" value="${draft.workCulture.pace}"></label>
            <label>Team style<input type="text" data-field="workCulture.teamStyle" value="${draft.workCulture.teamStyle}"></label>
            <label>Work-life balance<input type="text" data-field="workCulture.workLifeBalance" value="${draft.workCulture.workLifeBalance}"></label>
            <label>Collaboration style<input type="text" data-field="workCulture.collaboration" value="${draft.workCulture.collaboration}"></label>
            <p class="emp-field-help">Management style, overtime signal and review themes are derived from employee reviews and cannot be edited here.</p>
          </div>

          <div class="card emp-company-section" id="edit-media">
            <h2>Media</h2>
            <p class="emp-field-help">Workplace images, team photos, videos and graduate program media uploads are coming in a future update.</p>
          </div>

          <div class="emp-wizard-actions">
            <button type="button" class="btn btn-ghost" data-company-save-draft>Save draft</button>
            <div class="emp-publish-buttons">
              <button type="button" class="btn btn-ghost" data-company-preview>Preview changes</button>
              <button type="button" class="btn btn-primary" data-company-publish>${icon("check")} Publish changes</button>
            </div>
          </div>
        </div>

        <div class="emp-edit-side">
          <div class="card emp-edit-support">
            <div class="emp-callout-label">${icon("list-checks")} Profile completion</div>
            <p class="emp-metric-lg-value">${computeCompanyCompleteness(tempMergedCompany())}%</p>
            <span class="emp-tags-label">Missing information</span>
            <ul class="emp-gap-list">${company.profileGaps.map(g => `<li>${icon("alert-triangle")} ${g}</li>`).join("")}</ul>
          </div>
        </div>
      </div>

      <div class="emp-compose-modal" data-company-preview-modal hidden>
        <div class="card emp-compose-card emp-public-preview-card">
          <div class="emp-preview-toolbar"><h2>Preview: ${draft.name}</h2><button type="button" class="btn btn-ghost btn-sm" data-company-preview-close>${icon("x")} Close</button></div>
          <p class="emp-cand-meta">${draft.industry} · ${draft.location} · ${draft.size}</p>
          <p class="emp-company-description">${draft.summary}</p>
          <div class="emp-tags"><span class="emp-tags-label">Common skills</span><div class="pill-row">${draft.requirements.commonSkills.map(s => `<span class="pill">${s}</span>`).join("")}</div></div>
          <div class="emp-requirements-grid">
            <div class="emp-stat-row"><span>Average salary</span><strong>${draft.salary}</strong></div>
            <div class="emp-stat-row"><span>Hiring timeline</span><strong>${draft.avgResponseTime}</strong></div>
          </div>
        </div>
      </div>
    `;
    createIcons();
    bind();
  }

  function bind() {
    bindField("[data-field='name']", "name");
    bindField("[data-field='industry']", "industry");
    bindField("[data-field='location']", "location");
    bindField("[data-field='size']", "size");
    bindField("[data-field='workMode']", "workMode");
    bindField("[data-field='website']", "website");
    bindField("[data-field='founded']", "founded");
    bindField("[data-field='summary']", "summary");
    bindField("[data-field='requirements.education']", "requirements.education");
    bindField("[data-field='requirements.cgpa']", "requirements.cgpa");
    bindField("[data-field='requirements.experience']", "requirements.experience");
    bindField("[data-field='requirements.englishRequirement']", "requirements.englishRequirement");
    bindField("[data-field='requirements.portfolio']", "requirements.portfolio");
    bindField("[data-field='requirements.internshipPreferred']", "requirements.internshipPreferred");
    bindField("[data-field='requirements.certifications']", "requirements.certifications");
    bindField("[data-field='avgResponseTime']", "avgResponseTime");
    bindField("[data-field='assessmentNote']", "assessmentNote");
    bindField("[data-field='salary']", "salary");
    bindField("[data-field='salaryBenefits.freshGradSalary']", "salaryBenefits.freshGradSalary");
    bindField("[data-field='salaryBenefits.internshipAllowance']", "salaryBenefits.internshipAllowance");
    bindField("[data-field='salaryBenefits.bonus']", "salaryBenefits.bonus");
    bindField("[data-field='salaryBenefits.medical']", "salaryBenefits.medical");
    bindField("[data-field='salaryBenefits.flexibleWork']", "salaryBenefits.flexibleWork");
    bindField("[data-field='salaryBenefits.training']", "salaryBenefits.training");
    bindField("[data-field='salaryBenefits.leave']", "salaryBenefits.leave");
    bindField("[data-field='careerGrowth.trainingQuality']", "careerGrowth.trainingQuality");
    bindField("[data-field='careerGrowth.promotionPath']", "careerGrowth.promotionPath");
    bindField("[data-field='careerGrowth.graduateProgram']", "careerGrowth.graduateProgram");
    bindField("[data-field='careerGrowth.mentorship']", "careerGrowth.mentorship");
    bindField("[data-field='careerGrowth.internalTransfer']", "careerGrowth.internalTransfer");
    bindField("[data-field='careerGrowth.learningOpportunities']", "careerGrowth.learningOpportunities");
    bindField("[data-field='workCulture.pace']", "workCulture.pace");
    bindField("[data-field='workCulture.teamStyle']", "workCulture.teamStyle");
    bindField("[data-field='workCulture.workLifeBalance']", "workCulture.workLifeBalance");
    bindField("[data-field='workCulture.collaboration']", "workCulture.collaboration");
    bindTagField("commonSkills");
    bindTagField("techSkills");
    bindHiringSteps();

    qs("[data-company-edit-nav]", root)?.addEventListener("click", event => {
      const link = event.target.closest("[data-jump]");
      if (!link) return;
      event.preventDefault();
      qs(`#${link.dataset.jump}`, root)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    qs("[data-company-edit-cancel]", root)?.addEventListener("click", () => {
      if (JSON.stringify(draft) !== savedSnapshot) {
        if (!confirm("You have unsaved changes. Leave without saving?")) return;
      }
      employerNavigateTo("company");
    });

    qs("[data-company-save-draft]", root)?.addEventListener("click", () => {
      persistDraft();
      savedSnapshot = JSON.stringify(draft);
      showToast("Draft saved.");
    });
    qs("[data-company-preview]", root)?.addEventListener("click", () => { qs("[data-company-preview-modal]", root).hidden = false; });
    qs("[data-company-preview-close]", root)?.addEventListener("click", () => { qs("[data-company-preview-modal]", root).hidden = true; });
    qs("[data-company-publish]", root)?.addEventListener("click", commitPublish);
  }

  if (!seedState.employerCompanyDraft) {
    seedState.employerCompanyDraft = draft;
    writeState(seedState);
  }

  draw();
}

function renderEmployerPlaceholder(root, view) {
  const title = EMPLOYER_VIEW_TITLES[view] || "This view";
  root.innerHTML = `
    <div class="emp-view-header"><h1>${title}</h1></div>
    <div class="emp-empty-state card">
      <div class="feature-icon">${icon("hourglass")}</div>
      <h2>${title} is coming in a later phase.</h2>
      <p>This part of the employer workspace is being built next. Dashboard and Roles are fully wired up today.</p>
    </div>
  `;
  createIcons();
}

function initEmployerRouter() {
  const shellRoot = qs("[data-employer-app]");
  if (!shellRoot) return;
  if (!requireRole(shellRoot, "employer", "open your employer workspace")) return;

  renderEmployerShell(shellRoot);
  const initial = parseEmployerHash();
  employerNavigateTo(initial.view, initial.params, { force: true });

  window.addEventListener("hashchange", () => {
    const next = parseEmployerHash();
    employerNavigateTo(next.view, next.params);
  });
}

function renderEmployers() {
  if (!qs(".employer-page")) return;
  const state = readState();
  if (state.session.loggedIn && state.session.role === "employer") {
    location.href = "employer-app.html";
  }
}

function initEmployerTabs() {
  const tabs = qsa("[data-emp-tab]");
  if (!tabs.length) return;
  tabs.forEach(btn => btn.addEventListener("click", () => {
    tabs.forEach(item => {
      const active = item === btn;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });
    qsa("[data-emp-panel]").forEach(panel => {
      const active = panel.dataset.empPanel === btn.dataset.empTab;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  }));
}

const EMPLOYER_VERA_RESPONSES = {
  jd: "Here is a tighter draft: lead with impact and day-to-day ownership, list must-have skills separately from nice-to-haves, and state the salary range up front. Clear, specific listings attract stronger applicants.",
  realistic: "Two of your requirements appear stricter than the current market. \"3+ years of experience\" and \"AWS production experience\" are uncommon for junior analysts in Kuala Lumpur. Consider moving AWS production experience to preferred skills.",
  compare: "Sarah has the strongest immediate role alignment, Amir shows the highest growth potential, and Jason brings the strongest backend specialization. Compare their evidence side by side before deciding.",
  availability: "There are 34 matching candidates for this role right now, with 214 high-readiness profiles across the wider market. Availability is healthy for a junior-level opening.",
  salary: "Most candidates for this role expect RM 4.5k to 6k. Your posted budget of RM 4k to 6k sits within range, though the lower end may filter out some strong-fit candidates.",
  uni: "Three university pipelines are relevant here: University of Malaya, Asia Pacific University, and Taylor's University all produce graduates with strong analytics foundations.",
  interview: "Focus interview questions on SQL problem-solving, a walkthrough of a past analysis project, and how the candidate handles ambiguous data requests."
};

function initEmployerVera() {
  const actions = qs("[data-emp-vera-actions]");
  const answer = qs("[data-emp-vera-answer]");
  if (!actions || !answer) return;
  actions.addEventListener("click", event => {
    const btn = event.target.closest("[data-emp-vera]");
    if (!btn) return;
    qsa("[data-emp-vera]", actions).forEach(item => item.classList.toggle("active", item === btn));
    const response = EMPLOYER_VERA_RESPONSES[btn.dataset.empVera];
    if (response) answer.textContent = response;
  });
}

function initEmployerCompare() {
  const table = qs("[data-emp-compare]");
  if (!table) return;
  const focusColumn = col => {
    qsa("th, td", table).forEach(cell => cell.classList.remove("is-focused"));
    if (!col) return;
    qsa(`[data-emp-compare-col="${col}"]`, table).forEach(th => th.classList.add("is-focused"));
    qsa("tbody tr", table).forEach(row => {
      const cell = row.children[Number(col)];
      if (cell) cell.classList.add("is-focused");
    });
  };
  qsa("[data-emp-compare-col]", table).forEach(th => {
    th.addEventListener("click", () => {
      const active = th.classList.contains("is-focused");
      focusColumn(active ? null : th.dataset.empCompareCol);
    });
    th.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      th.click();
    });
  });
}

function renderComparison() {
  const root = qs("[data-comparison]");
  if (!root) return;
  const orgs = [...DATA.companies, ...DATA.universities].slice(0, 5);
  const animatedScore = value => `
    <span class="comparison-score" data-comparison-score="${value.toFixed(1)}">
      <span class="comparison-score-number">${value.toFixed(1)}</span>
      <span class="comparison-score-bar" aria-hidden="true"><span></span></span>
    </span>
  `;
  root.innerHTML = `
    <div class="table-wrap">
      <table class="comparison-table" data-comparison-table>
        <thead><tr><th>Name</th><th>Type</th><th>Rating</th><th>Growth</th><th>Pay / Outcome</th><th>Best signal</th></tr></thead>
        <tbody>
          ${orgs.map(org => `<tr><td><strong>${org.name}</strong></td><td>${org.type}</td><td>${animatedScore(org.rating)}</td><td>${animatedScore(org.scores.growth)}</td><td>${org.salary}</td><td>${org.signal}</td></tr>`).join("")}
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
    qs(".comparison-score-number", score).textContent = "0.0";
  });

  function animateScore(score) {
    const number = qs(".comparison-score-number", score);
    const bar = qs(".comparison-score-bar span", score);
    const target = Number(score.dataset.comparisonScore || 0);
    const startedAt = performance.now();
    const duration = 800;

    function tick(now) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const value = target * easeOut(progress);
      number.textContent = value.toFixed(1);
      bar.style.width = `${Math.min(100, (value / 5) * 100)}%`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    card.classList.add("comparison-animated");

    window.setTimeout(() => header?.classList.add("is-visible"), 250);
    rows.forEach((row, index) => {
      window.setTimeout(() => {
        row.classList.add("is-visible");
        qsa("[data-comparison-score]", row).forEach(animateScore);
      }, 420 + index * 100);
    });

    observer.disconnect();
  }, { threshold: 0.3 });

  observer.observe(card);
}

function init() {
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
  renderProfile();
  renderPublicProfile();
  renderSettings();
  renderSavedItems();
  renderMarket();
  renderAutopilot();
  renderPosts();
  initEmployerRouter();
  initEmployerGlobalSearch();
  renderEmployers();
  renderComparison();
  renderSiteFooter();
  initFeaturedRolesCarousel();
  initResearchMarquee();
  initHomeMetricCountUp();
  initComparisonTableAnimation();
  initEmployerTabs();
  initEmployerVera();
  initEmployerCompare();
  bindGlobalActions();
  createIcons();
  initSidebarToggle();
  initWorkspaceRailTooltips();
}

document.addEventListener("DOMContentLoaded", init);
