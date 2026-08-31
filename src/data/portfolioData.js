export const PERSONAL_INFO = {
  name: "Ramesh S",
  role: "Software Engineer & Full-Stack Developer",
  photoUrl: "/ramesh_photo.png",
  subheading: "Full-Stack Web Development • Modern Frontend Architecture • Cloud Deployments",
  tagline: "Engineering scalable, high-performance web applications and resilient systems with modern frontend architecture, REST APIs, and clean engineering principles.",
  detailedIntro: "I am a Computer Science & Engineering student and Software Developer focused on engineering resilient, high-performance web architectures. I specialize in modern JavaScript, frontend engineering, scalable Node.js backend services, relational database modeling, and real-time telemetry systems.",
  email: "rameshshanmugam2005@gmail.com",
  phone: "+91 91509 63465",
  location: "Coimbatore / Pollachi, Tamil Nadu, India",
  availability: "Open to Opportunities (Software Engineer / Full-Stack Developer / Frontend Developer)",
  educationStatus: "B.E. Computer Science & Engineering (2023–2027)",
  cgpa: "8.02",
  resumePath: "/resume.pdf",
  resumeDriveUrl: "https://drive.google.com/drive/folders/1iu3TYI3bija-SltyzQlq3zPEqeoUTLDa?usp=drive_link",
  interests: [
    "Full-Stack Web Architecture & Clean Code",
    "Modern Frontend Systems & UI Performance",
    "Scalable Node.js / Express RESTful APIs",
    "Relational Database Design & SQL Optimization",
    "Data Structures & Algorithmic Problem Solving",
    "Real-Time Telemetry & Asynchronous Protocols",
    "Cloud Deployments & CI/CD Pipelines"
  ]
};

export const SOCIAL_PROFILES = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ramesh045/",
    username: "linkedin.com/in/ramesh045",
    description: "Connect with me professionally, view recommendations, and discuss web development opportunities.",
    buttonText: "View LinkedIn",
    iconName: "Linkedin",
    color: "#0a66c2",
    badge: "Professional Network"
  },
  {
    name: "GitHub",
    url: "https://github.com/rameshshanmugam2005-hub",
    username: "github.com/rameshshanmugam2005-hub",
    description: "Explore my open-source web repositories, Transit AI, and HTML/CSS/JavaScript projects.",
    buttonText: "View GitHub",
    iconName: "Github",
    color: "#e2e8f0",
    badge: "Code & Repos"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/rameshshanmugam45/",
    username: "leetcode.com/u/rameshshanmugam45",
    description: "Explore my algorithmic problem solving, data structures, and JavaScript/Java coding journey.",
    buttonText: "View LeetCode",
    iconName: "Code2",
    color: "#f59e0b",
    badge: "Problem Solving"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering & UI Architecture",
    categoryKey: "frontend",
    iconName: "Code",
    skills: [
      {
        name: "JavaScript (ES6+) & TypeScript",
        iconName: "Zap",
        description: "Async/Await, Promises, Closures, DOM manipulation, Event delegation, Web APIs, and clean modular code"
      },
      {
        name: "React & Modern Component Systems",
        iconName: "Cpu",
        description: "Hooks, state management, component lifecycle, reusable UI design, and responsive client architectures"
      },
      {
        name: "Modern CSS3 & Tailwind CSS",
        iconName: "Palette",
        description: "Flexbox, CSS Grid, custom properties, smooth transitions, glassmorphism, fluid typography, and mobile-first design"
      },
      {
        name: "HTML5 & Semantic Web Standards",
        iconName: "Layout",
        description: "Accessible semantic structure, ARIA roles, Web Storage, Canvas 2D rendering, and SEO best practices"
      }
    ]
  },
  {
    title: "Backend Services & Distributed APIs",
    categoryKey: "backend",
    iconName: "Server",
    skills: [
      {
        name: "Node.js & Express.js",
        iconName: "Database",
        description: "RESTful API architectures, middleware design, asynchronous request routing, and microservices"
      },
      {
        name: "REST APIs & Asynchronous Polling",
        iconName: "Server",
        description: "HTTP/HTTPS communication, non-blocking telemetry endpoints, JSON payloads, and network error resilience"
      },
      {
        name: "AI & Telemetry Integration",
        iconName: "Cpu",
        description: "Embedding natural language assistant logic, predictive query algorithms, and real-time streaming data"
      }
    ]
  },
  {
    title: "Databases & Core Computer Science",
    categoryKey: "databases",
    iconName: "Database",
    skills: [
      {
        name: "PostgreSQL & Relational SQL",
        iconName: "Database",
        description: "Relational queries, schema modeling, joins, indexing, query optimization, and data integrity"
      },
      {
        name: "Java & OOP Principles",
        iconName: "Code2",
        description: "Object-oriented design, inheritance, interfaces, multi-threading basics, and modular class systems"
      },
      {
        name: "Data Structures & Algorithms",
        iconName: "Activity",
        description: "Array transformations, two-pointers, hash maps, binary search, recursion, and algorithmic complexity"
      }
    ]
  },
  {
    title: "DevOps, Cloud & Developer Tooling",
    categoryKey: "devops",
    iconName: "Wrench",
    skills: [
      {
        name: "Git & GitHub Workflows",
        iconName: "GitBranch",
        description: "Branching strategies, pull requests, semantic version control, code review, and collaborative repos"
      },
      {
        name: "Cloud Deployment (Render / Vercel)",
        iconName: "CloudSun",
        description: "Automated continuous deployment, environment config, web server hosting, and production build pipelines"
      },
      {
        name: "Linux Shell & Web Profiling",
        iconName: "Terminal",
        description: "Bash scripting, server navigation, Chrome DevTools profiling, Lighthouse optimization, and performance audits"
      }
    ]
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "transit-ai",
    title: "Transit AI",
    subtitle: "Real-Time Public Transit Telemetry & AI Commuter Intelligence Platform",
    category: "Full-Stack Web Architecture (Node.js • Express • Async REST • AI Assistant)",
    description: "Transit AI is a high-performance web application designed to deliver sub-second public transit vehicle telemetry, dynamic route tracking, real-time crowd occupancy analytics, and intelligent AI-powered commuter assistance.",
    liveDemoUrl: "https://transit-ai-1mot.onrender.com/",
    githubUrl: "https://github.com/rameshshanmugam2005-hub/TRANSIT_AI",
    problem: "Commuters frequently struggle with unpredictable bus schedules, lack of real-time crowd occupancy information, and confusing route transfers in public transit systems.",
    solution: "Transit AI solves this by combining a responsive frontend with dynamic asynchronous polling, real-time telemetry APIs, visual congestion gauges, QR boarding ticket verification, and an embedded AI conversational assistant.",
    technologies: [
      "JavaScript (ES6+)",
      "Node.js & Express.js",
      "RESTful APIs",
      "HTML5 & Semantic UI",
      "CSS3 & Responsive Grid",
      "QR Code Verification",
      "Asynchronous Polling",
      "Render Cloud"
    ],
    keyFeatures: [
      "Real-Time Telemetry Engine: Dynamic tracking of active transit routes and vehicle ETA with optimized polling",
      "AI Transit Intelligence: Conversational assistant for intelligent route suggestions, schedules, and transfers",
      "Occupancy & Congestion Analytics: Real-time visual gauge of passenger density and seat availability per bus",
      "QR Ticket Validation: Seamless verification for digital transit boarding passes with turnstile validation",
      "Bandwidth-Optimized Protocol: Lightweight JSON payload serialization ensuring low mobile latency"
    ],
    myContribution: "Architected and engineered the full-stack web platform from scratch. Designed responsive UI layouts, asynchronous client-server telemetry polling, Express REST endpoints, AI commuter assistant integration, and continuous production deployment on Render.",
    featured: true,
    caseStudy: {
      problem: "Public transit riders face significant uncertainty regarding actual bus arrival times, vehicle overcrowding, and optimal transfer points. Traditional static timetables fail to account for traffic delays and sudden route modifications.",
      approach: "Built a lightweight, high-performance web platform that pairs clean semantic frontend architecture with modular asynchronous JavaScript. Designed dynamic polling mechanisms to stream bus telemetry data, ensuring zero bloat, fast load times, and minimal cellular data consumption on mobile devices.",
      technologies: [
        "Modern JavaScript (ES6+) for reactive client-side rendering & event handling",
        "Node.js & Express.js for lightweight JSON backend routing and telemetry endpoints",
        "Semantic HTML5 for accessible and structured layouts",
        "Modern CSS3 (Flexbox, Grid, CSS Variables) for responsive styling",
        "Fetch API for asynchronous REST data exchange",
        "Render Cloud Platform for production hosting & continuous deployment"
      ],
      keyFeatures: [
        "Live route map and telemetry tracking with instant delay estimations",
        "Interactive AI Transit Assistant assisting commuters with multi-stop queries",
        "Live passenger density & congestion gauge (Low, Moderate, High)",
        "Digital QR ticket validation for paperless ticketing",
        "Low-bandwidth polling protocol optimized for cellular connectivity"
      ],
      challenges: [
        "Handling concurrent telemetry polling without causing UI lag or heavy client CPU load",
        "Designing an intuitive mobile-first interface that cleanly organizes both map telemetry and AI conversational query cards",
        "Implementing seamless QR validation flows with instantaneous visual feedback"
      ],
      solution: "Implemented debounced asynchronous polling with delta updates, cutting unnecessary network requests by 60%. Used fluid CSS grid and flex layouts to maintain crisp visual hierarchy on screens of all sizes.",
      result: "Successfully built and deployed a production-ready application hosted live on Render, accessible across desktop and mobile devices with zero lag and high accessibility scores.",
      futureImprovements: [
        "Progressive Web App (PWA) service worker integration for offline route caching",
        "WebSocket streaming for sub-second telemetry updates",
        "Multi-language voice query support for the AI Transit Assistant"
      ]
    }
  }
];

export const EXPERIENCES = [
  {
    id: "viruzver-internship",
    role: "Full Stack Development Intern",
    organization: "Viruzver Solution",
    period: "Dec 2025 – Jan 2026",
    type: "Internship",
    description: [
      "Developed responsive, cross-browser compatible web pages using HTML5, CSS3, and JavaScript.",
      "Collaborated on frontend feature engineering, UI optimization, code debugging, and Git-based collaborative workflows.",
      "Enhanced page load performance and implemented modern user interaction states across core deliverables."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Git", "Frontend Debugging", "Responsive Design"]
  },
  {
    id: "academic-projects",
    role: "Full-Stack Project Development & Research",
    organization: "VSB College of Engineering & Technical Campus",
    period: "2023 – Present",
    type: "Academic",
    description: [
      "Designed and deployed practical technology solutions including Transit AI with real-time API integrations.",
      "Practiced algorithm optimization, data structures in Java, and relational database schema modeling in SQL."
    ],
    skills: ["Java", "SQL", "Node.js", "Express.js", "Computer Networks", "Data Structures"]
  }
];

export const EDUCATIONS = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "VSB College of Engineering and Technical Campus",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 – 2027",
    score: "8.02 CGPA",
    scoreType: "CGPA",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (SQL), Computer Networks, Web Technologies, Operating Systems.",
      "Active participant in technical symposiums, coding competitions, and department sports activities."
    ]
  },
  {
    degree: "Higher Secondary Certificate (H.S.C. / 12th Grade)",
    institution: "Siwalik Matric Higher Secondary School",
    location: "Pollachi, Tamil Nadu",
    period: "2022 – 2023",
    score: "69%",
    scoreType: "Percentage",
    highlights: [
      "Focus: Physics, Chemistry, Mathematics, and Computer Science."
    ]
  },
  {
    degree: "Secondary School Certificate (S.S.C. / 10th Grade)",
    institution: "Siwalik Matric Higher Secondary School",
    location: "Pollachi, Tamil Nadu",
    period: "2020 – 2021",
    score: "100%",
    scoreType: "Percentage",
    highlights: [
      "Achieved a perfect 100% academic record in the State Board examinations."
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: "nptel-big-data",
    name: "Big Data Analytics",
    issuer: "NPTEL",
    year: "2025",
    topics: ["Big Data Architecture", "Data Processing", "Analytics Frameworks"]
  },
  {
    id: "hackerrank-sql",
    name: "SQL (Basic & Intermediate)",
    issuer: "HackerRank",
    year: "2026",
    topics: ["Relational Queries", "Joins & Subqueries", "Aggregations & Grouping"]
  },
  {
    id: "hackerrank-java",
    name: "Java (Basics)",
    issuer: "HackerRank",
    year: "2026",
    topics: ["Core Java", "OOP Principles", "Data Structures Basics"]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "leadership-hockey",
    title: "Hockey Team Captain & Leadership",
    category: "Leadership",
    description: "Led the college hockey team to a Zonal Championship and Divisional Runner-Up finish through strategic planning, effective training tactics, and team coordination across 100+ students.",
    highlight: "Zonal Champion & Divisional Runner-Up"
  },
  {
    id: "transit-ai-deploy",
    title: "Built & Deployed Transit AI",
    category: "Deployment",
    description: "Engineered and deployed a full-stack real-time transit web application on Render with interactive bus telemetry, AI assistant logic, and QR validation.",
    highlight: "Live Production Deployment"
  },
  {
    id: "leetcode-problem-solving",
    title: "Active Problem Solving & Algorithm Practice",
    category: "Coding",
    description: "Consistent problem solving on LeetCode focusing on array manipulations, string algorithms, two-pointers, hashing, and Java OOP concepts.",
    highlight: "LeetCode & GitHub Contributor"
  }
];
