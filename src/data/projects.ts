export interface TradeoffOption {
  label: string;
  description: string;
  pros: string;
  cons: string;
  complexity?: "Low" | "Medium" | "High" | string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  scope: string;
  timeline: string;
  overview: string;
  problem: string;
  context: string;
  approach: string[];
  productThinking: string[];
  execution: string[];
  outcome: string[];
  learnings: string[];

  externalLink?: string;
  extensionLink?: string;
  status?: string;
  category?: string;
  headline?: string;
  productCategory?: string;
  capabilities?: string[];
  independent?: boolean;

  discovery?: string[];
  keyInsight?: string;
  options?: TradeoffOption[];
  decision?: string;
  notBuilt?: string;
  owned?: string[];
  collaborated?: string[];
}

/* =========================================================
   PROJECTS
========================================================= */

export const projects: Project[] = [
  {
    slug: "bracket",
    title: "Bracket",
    subtitle:
      "A financial decision platform designed to help young people make better decisions about budgeting, saving, and investing.",
    year: "2025",
    role: "Product Manager / Founder",
    scope: "Product Discovery, Product Strategy, UX, 0→1",
    timeline: "2025",
    category: "Fintech",
    status: "Independent product",

    overview:
      "Bracket was an independent product experiment focused on helping young people make better financial decisions. Rather than becoming another financial-content library, I explored how a product could turn fragmented information into clearer, more actionable decisions.",

    problem:
      "Young people have access to an enormous amount of financial information, but information availability does not necessarily translate into confident action. Advice is fragmented across sources such as YouTube, ChatGPT, social media, and financial websites, making it difficult to know what to trust or what to do next.",

    context:
      "I started with the hypothesis that the problem was not simply a lack of financial education. Young people could already find information. The bigger opportunity was helping them navigate that information and turn it into practical decisions.",

    approach: [
      "Interviewed 20+ students about their financial habits, weekly routines, and how they currently make financial decisions",
      "Reviewed existing sources and products students use for financial information, including YouTube and ChatGPT",
      "Explored potential product features and prioritized the smallest useful experience",
      "Started with wireframes before moving to Lovable to accelerate prototyping and product iteration",
      "Released the product publicly and used early user behavior to identify areas for improvement",
    ],

    productThinking: [
      "Start with the user's decision rather than the information they might consume",
      "Use discovery to understand existing behavior before designing features",
      "Prioritize a focused experience instead of trying to solve every financial problem",
      "Use rapid prototyping to test product assumptions before investing heavily in implementation",
      "Treat early adoption and retention as learning signals rather than assuming launch equals product-market fit",
    ],

    execution: [
      "Conducted qualitative discovery with 20+ students",
      "Mapped existing alternatives and information sources",
      "Created initial wireframes",
      "Transitioned to Lovable to accelerate the build-test-learn cycle",
      "Launched the product and acquired 100+ users during the early product period",
    ],

    outcome: [
      "100+ users joined the platform during the early product period",
      "The product generated real-world usage beyond the initial research participants",
      "Early churn was higher than desired, creating a clear signal that acquisition alone was not enough",
    ],

    learnings: [
      "Access to information is not the same as confidence in making a decision",
      "User interviews helped distinguish the underlying problem from the obvious feature opportunity",
      "Rapid building made it possible to test the product with real users much earlier",
      "100+ users demonstrated initial interest, but retention exposed weaknesses that acquisition numbers alone could hide",
      "The next product question became less about adding features and more about understanding why users did not continue",
    ],

    headline:
      "Turned 20+ student interviews into a financial decision product used by 100+ early users — then used churn to identify what still wasn't working.",

    productCategory: "0→1 · Fintech · Product Discovery",

    capabilities: [
      "0→1 product discovery",
      "User research",
      "Product strategy",
      "Prioritization",
      "Rapid prototyping",
      "Behavioral product thinking",
    ],

    independent: true,

    discovery: [
      "Interviewed 20+ students about their financial habits, weekly routines, and how they currently make financial decisions",
      "Explored what sources students already used to answer financial questions",
      "Reviewed products and information sources including YouTube and ChatGPT",
      "Identified the gap between finding financial information and knowing how to act on it",
    ],

    keyInsight:
      "The problem was not simply that young people lacked financial information. They already had many places to find it. The opportunity was to make the path from information to decision clearer and more reliable.",

    options: [
      {
        label: "Content library",
        description:
          "Create a centralized destination for financial education and information.",
        pros:
          "Broad coverage and relatively straightforward to build. Could become a useful reference resource.",
        cons:
          "Would compete directly with sources students already use, including YouTube and ChatGPT, without necessarily solving the decision-making problem.",
        complexity: "Low",
      },
      {
        label: "Guided decision experience",
        description:
          "Organize financial questions into structured flows that lead users toward a practical next step.",
        pros:
          "Addresses the decision gap directly and creates a more differentiated experience.",
        cons:
          "Requires careful design of individual decision flows and can initially cover fewer topics.",
        complexity: "Medium",
      },
      {
        label: "Full financial automation",
        description:
          "Connect financial accounts and automate budgeting, saving, or investing decisions.",
        pros:
          "Potentially much deeper long-term value and automation.",
        cons:
          "Much higher technical, integration, trust, and compliance complexity before the core user problem is validated.",
        complexity: "High",
      },
    ],

    decision:
      "Prioritized a focused decision-oriented product rather than building a broad financial content library or immediately pursuing financial account aggregation.",

    notBuilt:
      "Did not attempt to become a comprehensive financial platform, build account aggregation, or automate financial transactions before validating whether users would consistently engage with the core decision experience.",

    owned: [
      "Product problem definition",
      "User discovery and interview design",
      "Competitive and alternative-product research",
      "Feature prioritization",
      "Wireframes and product experience",
      "Rapid prototype/build using Lovable",
      "Early user acquisition and product iteration",
    ],

    collaborated: [
      "Early users and student interview participants",
      "Independent development and product iteration",
    ],

    externalLink: "https://bracketos.lovable.app/",
  },

  {
    slug: "ede",
    title: "Ede",
    subtitle:
      "An NLP product exploring language understanding for African languages in a low-resource environment.",
    year: "2025",
    role: "Builder / Product Lead",
    scope: "AI Product, NLP, Data, 0→1",
    timeline: "2025",
    category: "AI / NLP",
    status: "Independent experiment",

    overview:
      "Ede is an independent NLP experiment exploring how AI systems perform on African languages and how product design can make experimentation with low-resource language technology more accessible.",

    problem:
      "African languages remain comparatively underrepresented in modern language technology. General-purpose AI systems can perform unevenly across languages, creating a gap between the capabilities users expect from AI and the experience available in lower-resource languages.",

    context:
      "Rather than attempting to compete with large foundation models, Ede was scoped as an experiment: understand the limitations, explore available data, test approaches, and make the result accessible through a public product.",

    approach: [
      "Explored the performance of general-purpose models on African language inputs",
      "Reviewed available datasets and identified coverage limitations",
      "Experimented with model and prompting approaches",
      "Focused on a public demonstration rather than building a large proprietary infrastructure stack",
    ],

    productThinking: [
      "Validate the actual language problem before optimizing model architecture",
      "Prioritize learning velocity when working with limited resources",
      "Make experiments accessible so they can be evaluated outside the development environment",
      "Treat data coverage and evaluation quality as first-class product constraints",
    ],

    execution: [
      "Curated and evaluated African-language data",
      "Experimented with model and prompting approaches",
      "Built and deployed a public Hugging Face experience",
      "Iterated based on observed model behavior",
    ],

    outcome: [
      "Released a public African NLP experimentation product",
      "Established a practical environment for testing low-resource language behavior",
      "Identified data coverage and evaluation as important constraints on future improvement",
    ],

    learnings: [
      "Model selection alone cannot solve a data coverage problem",
      "Evaluation needs to be defined before optimization can be meaningful",
      "A small public experiment can generate more useful learning than an oversized private build",
    ],

    headline:
      "Explored the gap between general-purpose AI and African languages through a public NLP product.",

    productCategory: "AI / LLM · NLP · 0→1",

    capabilities: [
      "AI product development",
      "Technical product strategy",
      "Data and evaluation thinking",
      "0→1 experimentation",
      "Rapid prototyping",
    ],

    independent: true,

    discovery: [
      "Tested general-purpose language models against African-language inputs",
      "Reviewed available open datasets and their language coverage",
      "Identified evaluation as a prerequisite for judging model improvements",
    ],

    keyInsight:
      "The limiting factor was not simply choosing a better model. Without sufficient data coverage and a reliable evaluation signal, it was difficult to determine whether changes represented meaningful progress.",

    options: [
      {
        label: "Large-model fine-tuning",
        description:
          "Attempt to fine-tune a larger model specifically for African languages.",
        pros: "Potentially higher quality ceiling.",
        cons:
          "High compute and data requirements relative to the available resources.",
        complexity: "High",
      },
      {
        label: "Focused experimentation",
        description:
          "Use available models, curated data, prompting, and evaluation to learn quickly.",
        pros: "Low iteration cost and faster learning.",
        cons:
          "Quality remains constrained by underlying model and data limitations.",
        complexity: "Medium",
      },
      {
        label: "Simple AI wrapper",
        description:
          "Expose a general-purpose model through a basic interface without addressing language coverage.",
        pros: "Fastest implementation.",
        cons:
          "Does not meaningfully address the underlying low-resource language problem.",
        complexity: "Low",
      },
    ],

    decision:
      "Chose focused experimentation because the immediate objective was to understand the problem and establish an evaluation loop rather than build expensive infrastructure.",

    notBuilt:
      "Did not build a large-scale model-training infrastructure or proprietary annotation platform.",

    owned: [
      "Problem framing",
      "Product scope",
      "Data exploration",
      "Model experimentation",
      "Evaluation approach",
      "Public product release",
    ],

    collaborated: [],

    externalLink:
      "https://ede-kay-jasanyas-projects.vercel.app/?kind=word&q=kind",
  },

  {
    slug: "gradezy",
    extensionLink: "https://microsoftedge.microsoft.com/addons/detail/gradezy-%E2%80%94-assessment-comp/iocfhndobdbbiemehcnpfnippohngocn",
    title: "Gradezy",
    subtitle:
      "An assessment workflow tool designed to reduce repetitive grading and review work.",
    year: "2026",
    role: "Product Manager / Builder",
    scope: "Workflow Automation, Data Product, Education",
    timeline: "2026",
    category: "EdTech",
    status: "Independent product",

    overview:
      "Gradezy is a workflow automation product focused on reducing repetitive work in assessment review. The product explores how structured data, automation, and existing institutional workflows can be combined to make assessment operations more efficient.",

    problem:
      "Assessment teams often move between spreadsheets, learning platforms, email, and other systems to review student work and identify records that require attention. Repetitive manual steps create unnecessary operational overhead and increase the opportunity for mistakes.",

    context:
      "The product was designed around a real assessment workflow rather than a generic productivity problem. The key opportunity was to remove unnecessary steps while keeping the underlying institutional process intact.",

    approach: [
      "Mapped the assessment review workflow and identified repetitive manual steps",
      "Structured student and assessment data around the fields needed for review",
      "Automated record identification and processing",
      "Reduced unnecessary file-handling steps",
      "Built the workflow as a practical tool rather than introducing a completely new assessment process",
    ],

    productThinking: [
      "Automate the repetitive part of an existing workflow rather than forcing users to adopt a new process",
      "Remove unnecessary handoffs and duplicate data entry",
      "Keep the user's existing systems as the source of truth where possible",
      "Design around the exception that needs human attention rather than making humans process every record",
    ],

    execution: [
      "Mapped the end-to-end assessment review workflow",
      "Identified opportunities for automation",
      "Built the application and data-processing flow",
      "Iterated on the workflow to reduce unnecessary manual steps",
      "Used GitHub Actions and deployment automation as part of the product delivery process",
    ],

    outcome: [
      "Created a working assessment automation workflow",
      "Reduced unnecessary manual handling in the review process",
      "Established a foundation for further assessment workflow automation",
    ],

    learnings: [
      "The best automation often removes steps rather than adding more features",
      "Understanding the real workflow is more important than starting with the technology",
      "Keeping humans in the loop is valuable when the workflow contains exceptions or judgment calls",
    ],

    headline:
      "Turned a repetitive assessment-review workflow into a structured automation tool.",

    productCategory: "Data Product · Automation · EdTech",

    capabilities: [
      "Workflow analysis",
      "Automation",
      "Data product design",
      "Technical product development",
      "Process improvement",
    ],

    independent: true,

    discovery: [
      "Mapped the existing assessment review workflow",
      "Identified repetitive data-handling and record-review steps",
      "Separated steps requiring human judgment from steps that could be automated",
      "Looked for opportunities to remove unnecessary file and data handoffs",
    ],

    keyInsight:
      "The biggest opportunity was not creating another assessment system. It was removing repetitive operational steps from the workflow that already existed.",

    options: [
      {
        label: "Manual workflow improvement",
        description:
          "Keep the existing process and improve documentation and training.",
        pros:
          "Lowest technical complexity and easiest institutional adoption.",
        cons:
          "Does not remove the underlying repetitive work.",
        complexity: "Low",
      },
      {
        label: "Targeted workflow automation",
        description:
          "Automate repetitive data processing while preserving human review where judgment is required.",
        pros:
          "Removes operational overhead without requiring a completely new workflow.",
        cons:
          "Requires careful handling of edge cases and data quality.",
        complexity: "Medium",
      },
      {
        label: "Fully automated assessment system",
        description:
          "Replace the broader assessment workflow with a new end-to-end platform.",
        pros:
          "Potentially much larger efficiency gain.",
        cons:
          "High adoption, integration, and institutional-change burden.",
        complexity: "High",
      },
    ],

    decision:
      "Focused on targeted workflow automation rather than attempting to replace the broader assessment system.",

    notBuilt:
      "Did not attempt to replace the institution's entire assessment infrastructure or automate decisions that require human judgment.",

    owned: [
      "Workflow mapping",
      "Product definition",
      "Automation opportunities",
      "Data-flow design",
      "Application development",
      "Iteration and deployment",
    ],

    collaborated: [
      "Assessment workflow stakeholders",
      "Users of the assessment review process",
    ],
  },

  {
    slug: "citiwatch",
    title: "CitiWatch Cameras",
    subtitle:
      "Using city camera data and analytics to explore a more proactive approach to illegal dumping.",
    year: "2024–2025",
    role: "Data Product Analyst",
    scope: "Data Product, AI/ML, Civic Technology",
    timeline: "2024–2025",
    category: "Civic Tech",
    status: "City of Baltimore",

    overview:
      "CitiWatch Cameras explored how Baltimore's existing camera network could be used more proactively to identify patterns associated with illegal dumping and support more targeted city response.",

    problem:
      "Illegal dumping negatively affected neighborhoods, while existing reporting mechanisms were largely reactive. The city had a substantial camera network, but the challenge was determining how that infrastructure could generate actionable intelligence rather than simply recording events.",

    context:
      "The initiative sat at the intersection of public safety, data analytics, city operations, and community impact. Any solution needed to balance technical feasibility with operational usefulness, privacy considerations, and city leadership priorities.",

    approach: [
      "Explored camera and incident data for patterns associated with illegal dumping",
      "Analyzed geographic patterns to identify higher-impact areas",
      "Worked with Google AI/ML resources to explore detection capabilities",
      "Translated technical findings into recommendations for city leadership",
      "Framed the opportunity around detection and prevention rather than surveillance alone",
    ],

    productThinking: [
      "Start with the operational decision the city needs to make, not the technology available",
      "Use existing infrastructure where possible before proposing new infrastructure",
      "Prioritize high-impact locations rather than attempting uniform coverage",
      "Balance technical capability with privacy, policy, and operational constraints",
      "Translate analytical findings into decisions city leaders can act on",
    ],

    execution: [
      "Analyzed CitiWatch camera coverage and relevant incident patterns",
      "Developed geographic analysis of higher-impact areas",
      "Worked with Google AI/ML partners on potential detection approaches",
      "Created strategic recommendations for camera optimization",
      "Presented analytical findings to city stakeholders",
    ],

    outcome: [
      "Demonstrated a data-driven approach for prioritizing camera coverage",
      "Established a framework for exploring AI-assisted illegal-dumping detection",
      "Produced analysis intended to inform city-wide camera optimization",
    ],

    learnings: [
      "The technical ability to detect an event is only useful if the city can act on the signal",
      "Civic technology requires policy and operational feasibility alongside technical feasibility",
      "Geographic prioritization can make limited infrastructure more useful",
      "Data storytelling is critical when technical analysis needs to influence executive decisions",
    ],

    headline:
      "Turned an underused camera network into a data product opportunity for more proactive illegal-dumping response.",

    productCategory: "Civic Tech · Data & AI · Operational Analytics",

    capabilities: [
      "Data product strategy",
      "AI/ML product thinking",
      "Geospatial analysis",
      "Stakeholder alignment",
      "Executive communication",
      "Civic technology",
    ],

    independent: false,

    discovery: [
      "Examined how illegal dumping was reported and detected",
      "Reviewed camera coverage and geographic patterns",
      "Explored where proactive detection could have the greatest operational value",
      "Worked with technical partners to understand AI/ML detection feasibility",
    ],

    keyInsight:
      "The opportunity was not simply to add AI to cameras. The real product question was where better detection would create an actionable city response.",

    options: [
      {
        label: "Reactive reporting",
        description:
          "Continue relying primarily on citizen reports and existing response processes.",
        pros: "Existing process with no significant technology investment.",
        cons:
          "Reactive and dependent on someone observing and reporting the event.",
        complexity: "Low",
      },
      {
        label: "Targeted camera analytics",
        description:
          "Use existing camera infrastructure and analytics to prioritize high-impact locations.",
        pros:
          "Builds on existing infrastructure and creates a more targeted operating model.",
        cons:
          "Requires reliable detection, operational processes, and careful governance.",
        complexity: "Medium",
      },
      {
        label: "City-wide automated detection",
        description:
          "Deploy automated AI detection across the full camera network.",
        pros: "Potentially broad coverage and continuous monitoring.",
        cons:
          "Greater technical, operational, privacy, and governance complexity.",
        complexity: "High",
      },
    ],

    decision:
      "Focused on targeted camera analytics and geographic prioritization rather than assuming that city-wide automated detection was immediately the right answer.",

    notBuilt:
      "Did not propose an unrestricted city-wide automated surveillance system. The work remained focused on actionable detection, optimization, and responsible use of existing infrastructure.",

    owned: [
      "Problem framing",
      "Data analysis",
      "Geographic prioritization",
      "Product opportunity definition",
      "AI/ML opportunity exploration",
      "Executive presentation and stakeholder communication",
    ],

    collaborated: [
      "Google AI/ML",
      "City leadership",
      "Office of Performance and Innovation stakeholders",
      "Civic technology and operational stakeholders",
    ],

    externalLink:
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uiJ5BM4AAAAJ&citation_for_view=uiJ5BM4AAAAJ:UeHWp8X0CEIC",
  },
];

/* =========================================================
   SELECTED WORK
========================================================= */

export const selectedSlugs = [
  "bracket",
  "ede",
  "gradezy",
  "citiwatch",
];

export const selectedWork: Project[] = selectedSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

/* =========================================================
   IMPACT METRICS
========================================================= */

export const impactMetrics = [
  {
    value: "41K+",
    label: "service records analyzed",
    detail:
      "Analyzed more than 41,000 city service records as part of work exploring systemic drivers of illegal dumping and opportunities for more targeted intervention.",
  },
  {
    value: "25%",
    label: "projected reduction opportunity",
    detail:
      "Developed data-driven recommendations around illegal dumping that identified interventions projected to reduce incidents by approximately 25%.",
  },
  {
    value: "15+",
    label: "agencies supported",
    detail:
      "Built and scaled a centralized reporting platform used across more than 15 agencies, improving access to operational information.",
  },
  {
    value: "90%",
    label: "increase in analytical throughput",
    detail:
      "Designed and automated reporting pipelines that substantially reduced repetitive analytical work and increased analytical throughput by approximately 90%.",
  },
  {
    value: "100+",
    label: "early Bracket users",
    detail:
      "Launched Bracket publicly and acquired more than 100 early users, providing real-world behavioral signals for subsequent product iteration.",
  },
  {
    value: "20+",
    label: "student interviews",
    detail:
      "Conducted qualitative discovery with more than 20 students to understand financial decision-making behavior before building Bracket.",
  },
];

/* =========================================================
   HOW I WORK
========================================================= */

export const howIWork = [
  {
    title: "Start with the decision",
    description:
      "I begin by identifying the decision the user, organization, or customer needs to make. The technology and feature set should support that decision rather than become the objective themselves.",
  },
  {
    title: "Understand the workflow",
    description:
      "I map how work happens today before proposing a solution. This helps distinguish genuine problems from symptoms and identifies where automation or product intervention can create the most leverage.",
  },
  {
    title: "Make trade-offs explicit",
    description:
      "I compare realistic options across user value, technical complexity, operational feasibility, risk, and time to learn. The goal is not to find a theoretically perfect solution but the best decision for the current stage.",
  },
  {
    title: "Prototype before overbuilding",
    description:
      "I prefer lightweight prototypes and real user feedback before committing significant engineering resources. A fast learning loop is often more valuable than an elaborate first release.",
  },
  {
    title: "Measure what matters",
    description:
      "I distinguish activity metrics from evidence of product value. Adoption, retention, workflow improvement, and decision quality matter more than simply shipping features.",
  },
];

/* =========================================================
   CAPABILITY GROUPS
========================================================= */

export const capabilityGroups = [
  {
    title: "Product Strategy",
    items: [
      "Product discovery",
      "Product strategy",
      "Roadmapping",
      "Prioritization",
      "0→1 development",
      "Stakeholder alignment",
    ],
    tools: "Tools: Jira · Aha! · Notion · Figma",
  },
  {
    title: "Data & Analytics",
    items: [
      "Data products",
      "Analytics",
      "SQL",
      "Dashboarding",
      "Data pipelines",
      "Experimentation",
    ],
    tools: "Tools: SQL · Excel · Power BI · Tableau · Grafana",
  },
  {
    title: "AI & Technical Product",
    items: [
      "AI product strategy",
      "LLM experimentation",
      "NLP",
      "AI/ML evaluation",
      "Technical discovery",
      "Rapid prototyping",
    ],
    tools: "Tools: Python · React · TypeScript · Supabase · APIs",
  },
  {
    title: "Execution",
    items: [
      "User research",
      "Requirements definition",
      "Workflow mapping",
      "Prototyping",
      "Cross-functional delivery",
      "Product iteration",
    ],
    tools: "Tools: Figma · GitHub · GitHub Actions · Lovable",
  },
];

/* =========================================================
   BOOKMARKS
========================================================= */

// export interface BookmarkItem {
//   title: string;
//   year?: string;
//   description?: string;
//   url?: string;
// }

// export interface BookmarkGroup {
//   label: string;
//   items: BookmarkItem[];
// }

// export const bookmarks: BookmarkGroup[] = [
//   {
//     label: "Recognition",
//     items: [
//       {
//         title: "PSPO II — Professional Scrum Product Owner II",
//         year: "2026",
//       },
//       {
//         title: "Professional Scrum Master I",
//         year: "2021",
//       },
//       {
//         title: "HBCUvc Fellowship",
//         year: "2021",
//       },
//       {
//         title: "Morgan State University — Engineering / Technology Recognition",
//         year: "2020",
//       },
//       {
//         title: "Bloomberg Market Concepts",
//         year: "2023",
//       },
//       {
//         title: "Google Project Management Certificate",
//         year: "2023",
//       },
//     ],
//   },
//   {
//     label: "Reading",
//     items: [
//       {
//         title: "Inspired — Marty Cagan",
//       },
//       {
//         title: "Continuous Discovery Habits — Teresa Torres",
//       },
//       {
//         title: "The Mom Test — Rob Fitzpatrick",
//       },
//     ],
//   },
//   {
//     label: "Tools",
//     items: [
//       {
//         title: "Figma",
//       },
//       {
//         title: "GitHub",
//       },
//       {
//         title: "Supabase",
//       },
//       {
//         title: "Lovable",
//       },
//     ],
//   },
// ];

/* =========================================================
   SITE LINKS
========================================================= */

export const siteLinks = {
  email: "iamjasanyakay@gmail.com",
  linkedin: "https://www.linkedin.com/in/jaskay/",
  github: "https://github.com/JasKay",
};

/* =========================================================
   THOUGHTS
========================================================= */

export const thoughts = [
  {
    title: "Homecoming, Mentorship, and the Power of HBCU Connections",
    description:
      "HBCU mentorship and the power of giving back through connection and community.",
    date: "Oct 2025",
    link: "https://jaskay.medium.com/homecoming-mentorship-and-the-power-of-hbcu-connections-db51a3d5ea08",
    category: "Impact",
  },
  {
    title:
      "Decoding Success: A Comprehensive Investment Thesis on Vertical SaaS",
    description:
      "Deep dive into the vertical SaaS landscape, exploring market opportunities and investment strategies.",
    date: "Dec 2023",
    link: "https://jaskay.medium.com/investment-thesis-vertical-saas-7f3ad770873c",
    category: "Venture Capital",
  },
  {
    title: "Project GiiV — Revolutionizing Charity Giving in Nigeria",
    description:
      "Building a platform to transform charitable donations using technology and social impact.",
    date: "Nov 2023",
    link: "https://jaskay.medium.com/project-giiv-revolutionizing-charity-giving-in-nigeria-f6f1fbc07377",
    category: "Impact",
  },
  {
    title: "Product Review #3: Masterclass",
    description:
      "Analyzing Masterclass's product strategy and how they've created a premium learning platform.",
    date: "Jan 2023",
    link: "https://jaskay.medium.com/product-review-3-masterclass-b9daee74b5ad",
    category: "Product Strategy",
  },
  {
    title: "Bob Iger Teaches Business Strategy and Leadership",
    description:
      "Key insights from Bob Iger's Masterclass on building Disney through strategic vision.",
    date: "Nov 2023",
    link: "https://jaskay.medium.com/bob-iger-teaches-business-strategy-and-leadership-12d7c9ea00a0",
    category: "Leadership",
  },
  {
    title: "Startup Categories #1: Intro",
    description:
      "Introduction to understanding different startup categories and evaluation frameworks.",
    date: "Oct 2022",
    link: "https://jaskay.medium.com/startup-categories-1-intro-b0941ae14e45",
    category: "Venture Capital",
  },
  {
    title: "Exploring Ruttl: A Deep Dive into UX and Features",
    description:
      "Product review analyzing Ruttl's approach to design collaboration and feedback tools.",
    date: "Oct 2022",
    link: "https://jaskay.medium.com/product-review-2-ruttl-19eab887f7eb",
    category: "Product Strategy",
  },
  {
    title: "Product Review #1: Mailscribe",
    description:
      "Review of Mailscribe's email productivity tool, covering UX and product positioning.",
    date: "Sep 2022",
    link: "https://jaskay.medium.com/product-review-1-mailscribe-abf59b32804",
    category: "Product Strategy",
  },
];
