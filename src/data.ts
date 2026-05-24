/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, Job } from "./types";

export const profileInfo = {
  name: "Jaelyn Liu",
  title: "Backend Software Engineer",
  tagline: "Engineer who takes her side quests as seriously as her main quest.",
  shortBio: "I’m a backend software engineer with 5 years of experience designing high-throughput payment APIs at Stripe and building data pipelines at Bloomberg. I specialize in distributed systems, event-driven architecture, and developer tooling. Outside of work, I’m busy being active.",
  email: "chialinliu.97+portfolio@gmail.com",
  github: "https://github.com/chialin6",
  linkedin: "https://linkedin.com/in/chialinliu",
  location: "New York, NY (Open to Remote / Hybrid)",
  status: "Available now for senior software engineer roles",
  avatarAlt: "Jaelyn Liu portrait"
};

export const skillsData: Skill[] = [
  // Languages
  { name: "Python", level: 5, category: "Languages", iconName: "Python" },
  { name: "Ruby", level: 3, category: "Languages", iconName: "Ruby" },
  { name: "Java", level: 3.5, category: "Languages", iconName: "Java" },
  { name: "C++", level: 4, category: "Languages", iconName: "Cpp" },

  // Backend & APIs
  { name: "API Design", level: 5, category: "Backend & APIs", iconName: "Api" },
  { name: "GraphQL", level: 4, category: "Backend & APIs", iconName: "GraphQL" },
  { name: "Microservices", level: 5, category: "Backend & APIs", iconName: "Microservices" },
  { name: "MongoDB", level: 4, category: "Backend & APIs", iconName: "Mongo" },
  { name: "SQL / PostgreSQL", level: 5, category: "Backend & APIs", iconName: "Database" },

  // Data & Streaming
  { name: "Apache Spark", level: 2, category: "Data & Streaming", iconName: "Spark" },
  { name: "Apache Airflow", level: 3.5, category: "Data & Streaming", iconName: "Airflow" },
  { name: "Apache Kafka", level: 4, category: "Data & Streaming", iconName: "Kafka" },
  { name: "RabbitMQ", level: 3, category: "Data & Streaming", iconName: "Queue" },

  // DevOps & Cloud
  { name: "AWS S3", level: 4, category: "DevOps & Cloud", iconName: "Aws" },
  { name: "CI/CD Pipelines", level: 4, category: "DevOps & Cloud", iconName: "Cicd" },
];

export const experienceData: Job[] = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "Stripe",
    location: "New York, NY",
    period: "Jan 2025 - Mar 2026",
    description: "Designed and architected payment infrastructure APIs supporting global payout systems, webhook event modeling, and stablecoin payouts at scale.",
    details: [
      "Architected end-to-end API design for Outbound Credential Reuse, removing authentication friction and unlocking Global Payout adoption; impacted 2M+ connected accounts and 325k users.",
      "Designed high-throughput credential projection workflow enabling batch processing at scale for enterprise platforms.",
      "Spearheaded Notification of Change system with v2 webhooks, eliminating engineering toil and establishing foundational asynchronous event modeling patterns.",
      "Delivered stablecoin payout support within v2 architecture to 100+ countries, driving 100% MoM volume growth.",
      "Designed integration testing framework for Payout Methods, intercepting multiple faulty rollouts pre-production.",
      "Accelerated developer velocity as an early adopter of LLM coding tools; hosted technical testing workshops that cut onboarding ramp-up times for new peers."
    ],
    techStack: ["Ruby", "Java", "MongoDB", "S3", "GraphQL", "REST APIs", "API Design"],
    links: [
      { label: "Outbound Setup Intents API Docs", url: "https://docs.stripe.com/api/v2/money-management/outbound-setup-intents?api-version=2026-02-25.preview" },
      { label: "Payout Methods API Docs", url: "https://docs.stripe.com/api/v2/money-management/payout-methods?api-version=2026-02-25.preview" }
    ]
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "Bloomberg",
    location: "New York, NY",
    period: "Jul 2021 - Jan 2025",
    description: "Built and maintained critical data pipeline infrastructure, microservices, and reporting systems supporting global financial data operations.",
    details: [
      "Designed and built a microservice and database to automate client data export billing, cutting manual operations by 95% and improving processing efficiency.",
      "Automated generation and distribution of formatted export details across multiple data sources and export types.",
      "Introduced an auditing feature tracking all generated and delivered reports, enhancing data integrity and reducing debugging time by 60%.",
      "Re-architected reporting orchestration pipeline with Airflow, improving observability and retry mechanisms to enhance overall pipeline reliability.",
      "Integrated Single Sign-On (SSO) for authentication and role-based access management, increasing security and streamlining user access.",
      "Represented team in a cross-functional project integrating new chat event types from upstream into client chat reports, ensuring data privacy and security compliance.",
      "Built a watchdog system to monitor daily export jobs, achieving a 10% increase in on-time report generation and improving operational efficiency.",
      "Led the Culture Council, organizing team-building events, co-hosting 2 hackathons, and authoring quarterly newsletters with team metrics and actionable insights.",
      "Actively participated in recruiting events, conducted candidate interviews, and supported diversity and inclusion initiatives."
    ],
    techStack: ["Python", "C++", "Apache Spark", "Airflow", "Kafka", "RabbitMQ", "SQL", "S3", "Microservices"]
  },
  {
    id: "exp-3",
    role: "Software Engineer Intern",
    company: "Qualcomm",
    location: "Remote",
    period: "Jun 2020 - Sep 2020",
    description: "Automated ISP code generation and testing infrastructure, accelerating engineering productivity across large-scale functional modules.",
    details: [
      "Automated image signal processor code generation to accelerate the entire development process.",
      "Saved more than 800 days of engineering effort by automatically generating bug-free C++ code for more than 200 modules."
    ],
    techStack: ["Python", "C++", "CI/CD", "Automation Pipelines"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Job Match Agent AI",
    description: "An AI agent built with Google Vertex AI SDK that evaluates job postings against my background and tells me whether a role is a good fit.",
    longDescription: "A personal AI agent for job hunting that uses Google Vertex AI to analyze job descriptions and match them against my skills, experience, and preferences. The agent reasons about fit across multiple dimensions — tech stack overlap, role level, company stage — and returns a structured recommendation so I can quickly triage opportunities.",
    tags: ["TypeScript", "Google Vertex AI", "AI Agent", "LLM"],
    category: "Cloud / AI",
    githubUrl: "https://github.com/chialin6/JobMatchAgentAI",
    highlights: [
      "Uses Google Vertex AI SDK to power multi-step reasoning over job descriptions.",
      "Evaluates fit across tech stack, seniority level, and role scope against personal profile.",
      "Returns structured match output to quickly triage job opportunities during search."
    ]
  },
  {
    id: "proj-2",
    title: "Personal Portfolio Website",
    description: "This portfolio site — a responsive single-page app built with React, TypeScript, and Tailwind CSS, deployed on GitHub Pages.",
    longDescription: "Designed and built from scratch as a living résumé and project showcase. Uses Vite for fast local development, Framer Motion for smooth animations, and Tailwind CSS for styling. Deployed continuously to GitHub Pages. All content is data-driven, making it easy to update experience, skills, and projects without touching component code.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    category: "Frontend",
    githubUrl: "https://github.com/chialin6/portfolio",
    liveUrl: "https://chialin6.github.io/portfolio/",
    liveUrlLabel: "Live Site",
    highlights: [
      "Built with AI",
      "Animated skill dashboard, timeline-based work history, and filterable project grid.",
      "Deployed to GitHub Pages with a resume PDF download served from the public directory."
    ]
  },
  {
    id: "proj-3",
    title: "Temperature & Humidity Display",
    description: "Embedded application on the CM0DK (ARM Cortex-M0) module that reads and displays real-time temperature and humidity sensor data.",
    longDescription: "A bare-metal embedded project built in 2017 on the ARM Cortex-M0 based CM0DK development board. Interfaced directly with temperature and humidity sensors over I2C, processed raw ADC readings, and rendered live sensor values on a connected display. Written in C without an RTOS.",
    tags: ["C#", "ARM Cortex-M0", "CM0DK", "Embedded Systems"],
    category: "Embedded Systems",
    highlights: [
      "Interfaced with I2C temperature and humidity sensors on ARM Cortex-M0 hardware.",
      "Processed raw ADC sensor readings and rendered live values on an attached display.",
      "Written in bare-metal C without an RTOS on the CM0DK development board (2017)."
    ]
  },
  {
    id: "proj-4",
    title: "Outfit-Based Fashion Popularity Prediction",
    description: "Computer vision research on predicting outfit popularity using deep learning — accepted as an oral paper at IEEE ICIP 2019.",
    longDescription: "Published research investigating whether outfit composition can predict social media popularity. Built a CNN-based pipeline to extract visual features from outfit images and trained models to predict engagement metrics. Accepted as an oral presentation at the IEEE International Conference on Image Processing 2019 — a competitive venue for computer vision research.",
    tags: ["Python", "Computer Vision", "Deep Learning", "CNN", "IEEE ICIP 2019"],
    category: "Research",
    liveUrl: "https://ieeexplore.ieee.org/document/8803461",
    liveUrlLabel: "View Publication",
    highlights: [
      "Accepted as an oral paper at IEEE International Conference on Image Processing 2019.",
      "Built a CNN-based pipeline to extract visual features from outfit images for popularity prediction.",
      "Explored the relationship between outfit composition and social media engagement metrics."
    ]
  }
];
