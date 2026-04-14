export const siteData = {
  name: "Zaheer Jan",
  title: "Lead Platform Engineer",
  tagline: "Software Engineer | Founder of Zedtac",
  description:
    "Building scalable backend systems, APIs, and digital solutions that power modern businesses.",
  email: "zaheerjan0@gmail.com",
  phone: "+92 332 836 4441",
  location: "Quetta, Pakistan",
  linkedin: "https://www.linkedin.com/in/zaheer-jan-7a472067",
  github: "https://github.com/janzaheer",
  resumeUrl: "/resume.pdf",
};

export const aboutText = [
  "A professional Software Engineer with over 10 years of experience in software development, deployment, and system infrastructure. I specialize in building scalable backend systems, RESTful APIs, and automation pipelines that drive real business outcomes.",
  "My expertise lies in Python/Django ecosystem, where I've architected and shipped production systems for privacy-focused products, international remittance platforms, e-commerce solutions, and marketing automation engines.",
  "As the founder of Zedtac, I bridge the gap between software engineering and digital marketing — building custom solutions for ads tracking, conversion systems, and SaaS platforms that help businesses scale.",
  "I'm a self-learner who thrives in fast-paced environments, adapts quickly to new challenges, and delivers high-quality code with minimal supervision. My background spans backend development, cloud infrastructure (AWS), DevOps practices, and frontend development with Vue.js.",
];

export const skills = {
  backend: {
    title: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "Celery",
      "REST APIs",
      "Ruby on Rails",
    ],
  },
  frontend: {
    title: "Frontend",
    items: ["Vue.js", "Angular", "JavaScript", "HTML/CSS", "Bootstrap"],
  },
  integrations: {
    title: "Integrations & APIs",
    items: [
      "Meta Ads API",
      "Google Ads API",
      "SendGrid",
      "Customer.io",
      "OneLink API",
      "Bandwidth",
    ],
  },
  databases: {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "FaunaDB"],
  },
  devops: {
    title: "DevOps & Infrastructure",
    items: [
      "AWS",
      "Docker",
      "Pulumi",
      "Ansible",
      "Linux/Unix",
      "Git",
      "CircleCI",
      "Heroku",
      "Netlify",
    ],
  },
  tools: {
    title: "Tools & Practices",
    items: [
      "Agile/Scrum",
      "TDD",
      "Sentry",
      "Coralogix",
      "Redis",
      "Elasticsearch",
      "Jira",
      "Trello",
    ],
  },
};

export const services = [
  {
    title: "Backend Development",
    description:
      "Robust, scalable backend systems built with Python/Django that handle millions of requests. From database design to API architecture, I build systems that grow with your business.",
    benefits: [
      "Scalable architecture",
      "Clean, maintainable code",
      "Production-ready systems",
    ],
    icon: "server",
  },
  {
    title: "API Development & Integration",
    description:
      "Custom RESTful APIs and third-party integrations that connect your systems seamlessly. Experience with Meta, Google, SendGrid, and dozens of other platforms.",
    benefits: [
      "RESTful API design",
      "Third-party integrations",
      "Webhook systems",
    ],
    icon: "api",
  },
  {
    title: "Marketing Automation Systems",
    description:
      "End-to-end marketing automation pipelines — from email sequences and customer journeys to data-driven workflows that nurture leads and drive conversions.",
    benefits: [
      "Automated workflows",
      "Email automation",
      "Lead scoring systems",
    ],
    icon: "automation",
  },
  {
    title: "Ads Tracking & Conversion Systems",
    description:
      "Custom tracking and attribution systems for Meta Ads, Google Ads, and other platforms. Accurate conversion data to optimize your ad spend and maximize ROI.",
    benefits: [
      "Conversion tracking",
      "Attribution modeling",
      "ROI optimization",
    ],
    icon: "tracking",
  },
  {
    title: "SaaS Development",
    description:
      "Full-stack SaaS product development from concept to launch. Multi-tenant architecture, subscription billing, user management, and scalable infrastructure.",
    benefits: [
      "Multi-tenant architecture",
      "Subscription systems",
      "Scalable infrastructure",
    ],
    icon: "saas",
  },
  {
    title: "Performance & Scaling",
    description:
      "Optimize existing systems for speed and scale. Database optimization, caching strategies, async processing, and infrastructure tuning for high-traffic applications.",
    benefits: [
      "Database optimization",
      "Caching strategies",
      "Load handling",
    ],
    icon: "performance",
  },
];

export const experience = [
  {
    company: "Cloaked",
    url: "https://cloaked.app/",
    role: "Lead Platform Engineer",
    location: "USA (Remote)",
    period: "June 2021 – Present",
    description:
      "Leading platform engineering for a privacy-focused product company. Architecting and building scalable backend systems, managing cloud infrastructure, and driving engineering best practices.",
    achievements: [
      "Led backend architecture using Python, Django, and DRF",
      "Managed AWS infrastructure with Pulumi (Infrastructure as Code)",
      "Built containerized microservices with Docker",
      "Integrated critical services: SendGrid, Bandwidth, Sentry, Coralogix",
      "Established CI/CD pipelines with CircleCI and automated deployments",
    ],
    tech: ["Python", "Django", "DRF", "Vue.js", "AWS", "Pulumi", "Docker", "PostgreSQL"],
  },
  {
    company: "Creative Chaos",
    url: "http://csquareonline.com/",
    role: "Principal Software Engineer",
    location: "Karachi, Pakistan",
    period: "Sep 2019 – Jun 2021",
    description:
      "Led development teams on multiple enterprise projects including international remittance systems and childcare platforms.",
    achievements: [
      "Architected Bwallet & Efloos International Remittance system",
      "Built Xplor platform with Python, Flask, and PostgreSQL",
      "Managed team workflows and project architecture decisions",
      "Deployed and managed applications on AWS",
    ],
    tech: ["Ruby on Rails", "Angular", "Python", "Flask", "PostgreSQL", "AWS"],
  },
  {
    company: "Partum Solutions",
    url: "http://partumsolutions.com/",
    role: "Senior Software Engineer",
    location: "Quetta, Pakistan",
    period: "Feb 2018 – Present",
    description:
      "Building management systems, ticketing platforms, e-commerce sites, and custom business solutions using Django and Vue.js.",
    achievements: [
      "Designed architecture for multiple client projects",
      "Built REST APIs with Django REST Framework",
      "Led team and conducted code reviews",
      "Managed Docker-based development environments with Redis & Elasticsearch",
    ],
    tech: ["Python", "Django", "DRF", "Vue.js", "MySQL", "Docker", "Redis"],
  },
  {
    company: "YouGotaGift.com",
    url: "http://yougotagift.com/",
    role: "Software Engineer",
    location: "Dubai, UAE",
    period: "May 2015 – Oct 2017",
    description:
      "Built functional e-commerce systems including shopping carts, dashboards, financial reporting, and real-time notification systems.",
    achievements: [
      "Developed Shopping Cart and Instructor Dashboard modules",
      "Built Financial Reporting and Real-Time Notification systems",
      "Created Proctored and Timed Exam features",
      "Initialized a Microservice for Brevis URL shortener",
      "Implemented Elasticsearch, Redis, and Celery for scalability",
    ],
    tech: ["Python", "Django", "MySQL", "JavaScript", "Redis", "Celery", "Elasticsearch"],
  },
  {
    company: "ngnware",
    url: "http://www.ngnware.com/",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Jan 2013 – May 2015",
    description:
      "Python development and Linux scripting for telecom-grade network virtualization and OpenStack infrastructure.",
    achievements: [
      "Enhanced Juniper's OpenContrail distribution for OpenStack",
      "Designed and developed NFVO for Telecommunications companies",
      "Developed OpenStack Horizon module features",
      "Automated deployments using DevOps tools",
    ],
    tech: ["Python", "Django", "DRF", "OpenStack", "Linux", "DevOps"],
  },
];

export const projects = [
  {
    title: "Ads Conversion Tracking System",
    description:
      "A custom-built conversion tracking and attribution system that integrates with Meta Ads and Google Ads APIs. Provides accurate, real-time conversion data to optimize advertising spend and maximize ROI across multiple ad platforms.",
    tech: ["Python", "Django", "Meta Ads API", "Google Ads API", "PostgreSQL", "Celery"],
    outcome:
      "Improved ad attribution accuracy by 40%, enabling data-driven budget allocation across campaigns.",
    category: "Marketing Tech",
  },
  {
    title: "Django SaaS Platform",
    description:
      "A multi-tenant SaaS platform built with Django featuring subscription management, user authentication, role-based access control, and a REST API layer for third-party integrations.",
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker"],
    outcome:
      "Served 500+ active users with 99.9% uptime and sub-200ms API response times.",
    category: "SaaS",
  },
  {
    title: "Marketing Automation Engine",
    description:
      "An end-to-end marketing automation system handling email sequences, customer journey mapping, lead scoring, and behavioral triggers using SendGrid and Customer.io integrations.",
    tech: ["Python", "Django", "SendGrid", "Customer.io", "Celery", "Redis"],
    outcome:
      "Automated 80% of manual marketing workflows, increasing lead conversion rates by 25%.",
    category: "Automation",
  },
  {
    title: "API Aggregation System",
    description:
      "A unified API gateway that aggregates multiple third-party services (payment gateways, ad platforms, communication APIs) into a single, consistent interface for client applications.",
    tech: ["Python", "Django", "DRF", "Docker", "Redis", "PostgreSQL"],
    outcome:
      "Reduced integration complexity for client teams by 60% with standardized API contracts.",
    category: "Infrastructure",
  },
  {
    title: "Privacy-First User Platform",
    description:
      "Core backend infrastructure for a privacy-focused consumer product handling user data encryption, secure communications, and identity management at scale on AWS.",
    tech: ["Python", "Django", "AWS", "Pulumi", "Docker", "PostgreSQL", "FaunaDB"],
    outcome:
      "Processing millions of secure transactions daily with zero data breaches.",
    category: "Privacy & Security",
  },
  {
    title: "International Remittance System",
    description:
      "A full-stack international remittance platform enabling cross-border money transfers with compliance checks, exchange rate management, and transaction tracking.",
    tech: ["Ruby on Rails", "Angular", "MySQL", "REST APIs"],
    outcome:
      "Enabled seamless cross-border transactions for thousands of users with regulatory compliance.",
    category: "FinTech",
  },
];

export const education = {
  institution:
    "Baluchistan University of Information Technology and Management Sciences",
  degree: "Bachelor of Information Technology",
  major: "Computer Engineering",
  period: "2008 – 2012",
  achievements: [
    "3rd position in FICT (Faculty of Information Computer Technologies)",
    "Merit Scholarship — 6 times",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
