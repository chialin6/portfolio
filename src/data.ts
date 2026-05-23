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
    techStack: ["Ruby", "Java", "MongoDB", "S3", "GraphQL", "REST APIs", "API Design"]
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "Bloomberg",
    location: "New York, NY",
    period: "Jul 2021 - Jan 2025",
    description: "Built and maintained critical data pipeline infrastructure, microservices, and reporting systems supporting global financial data operations.",
    details: [
      "Designed critical microservice and database to automate client export billing, reducing manual operations by 95% and drastically cutting system debugging time.",
      "Re-architected data reporting pipeline with Airflow to add advanced observability and fallback retries; integrated corporate SSO for secure role-based access control.",
      "Managed cross-functional data integrations for upstream chat events, ensuring strict compliance with global privacy laws.",
      "Built automated monitoring watchdog for export pipelines, significantly improving report delivery SLAs.",
      "Led engineering culture initiatives by organizing 2 internal hackathons and participating in technical recruiting panels."
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
      "Automated ISP code generation pipelines, saving 800+ engineering hours across 200+ functional modules."
    ],
    techStack: ["Python", "C++", "CI/CD", "Automation Pipelines"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "VortexAnalytics Cloud Core",
    description: "A real-time metrics visualizer that pipes multi-cloud metrics into ultra-performant charting interfaces with offline fallback.",
    longDescription: "VortexAnalytics compiles cross-cloud performance metrics (AWS CloudWatch, GCP Cloud Operations, Kubernetes clusters) into a integrated single-pane interface. Built with precision performance standards directly in React 19, managing hundreds of updates per second smoothly. Utilizes local IndexedDB storages so team members don't lose key telemetry graphs during structural connection drops.",
    tags: ["React 19", "D3.js", "TypeScript", "Node.js", "SST Serverless"],
    category: "Full-Stack",
    githubUrl: "https://github.com/aliceliu/vortex-analytics",
    liveUrl: "https://vortex-demo.aliceliu.dev",
    highlights: [
      "Supports render updates of up to 400 events per second with pristine 60FPS browser response.",
      "Bespoke SVG-based charting module written from scratch to bypass bulky commercial graphing packages.",
      "Intelligent background synchronizer that queues outbound alerts, preventing telemetry gaps on transient networks."
    ],
    demoCodeSnippet: `// Custom high-frequency batch update reducer
export function useBatchTelemetry(intervalMs = 100) {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const queue = useRef<Metric[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (queue.current.length > 0) {
        setMetrics(current => {
          const merged = [...current, ...queue.current];
          return merged.slice(-100); // Retain active history ceiling
        });
        queue.current = [];
      }
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return { metrics, addMetric: (m: Metric) => queue.current.push(m) };
}`
  },
  {
    id: "proj-2",
    title: "Serverless Prisma-Edge Middleware",
    description: "Lightweight database connectivity proxy optimized for high-concurrency Edge runtimes with intelligent connection pooling.",
    longDescription: "Edge executions like Cloudflare Workers can experience database driver overhead. This Node-based gateway layer intercepts calls, pools outgoing query handles efficiently, and serves automated REST caching. Yields incredibly fast serverless responses with robust security standardizations and schema sanitizations built-in.",
    tags: ["Node.js", "Prisma", "PostgreSQL", "Docker", "Sentry"],
    category: "Backend",
    githubUrl: "https://github.com/aliceliu/prisma-edge",
    liveUrl: "https://prisma-edge-docs.aliceliu.dev",
    highlights: [
      "Cuts average Cold Start times on serverless handlers from 450ms down to a mere 35ms.",
      "Dynamic auto-scaling connection pooling handles up to 10,000 parallel database executions smoothly.",
      "Embedded logging relays securely push performance metrics directly to Sentry or OpenTelemetry."
    ],
    demoCodeSnippet: `// Multi-tenant database pooling gateway routing
export async function executePrismaQuery(tenantId: string, queryPayload: Query) {
  const cachedPool = await ConnectionRegistry.getOrCreatePool(tenantId);
  try {
    const result = await cachedPool.execute(queryPayload.sql, queryPayload.params);
    return { success: true, rows: result.rows, durationMs: result.executionTime };
  } catch (err) {
    Telemetry.reportError("DB_QUERY_FAILURE", { tenantId, err });
    throw new DatabaseDriverException("Edge query route failed securely", err);
  }
}`
  },
  {
    id: "proj-3",
    title: "QuantumScribe Modern Headless CMS",
    description: "A blazing fast, responsive content management canvas utilizing localized block editor engines and full MDX formatting presets.",
    longDescription: "QuantumScribe delivers visual article writing pipelines for highly demanding engineering documents. Built strictly upon modular architecture featuring fully structural nested block nodes. Seamlessly exports structured content into MDX, JSON Schema, or clean raw YAML formats in real-time.",
    tags: ["React", "Zustand", "Tailwind CSS", "MDX Parser", "Vite"],
    category: "Frontend",
    githubUrl: "https://github.com/aliceliu/quantum-scribe",
    liveUrl: "https://scribe.aliceliu.dev",
    highlights: [
      "Zero-dependency block renderer designed specifically for highly readable text layouts.",
      "Full keyboard interactive shortcuts (Vim or Standard modern styles) for instant authoring efficiency.",
      "Generates optimized responsive web outputs matching WCAG 2.1 AA accessibility guidelines."
    ],
    demoCodeSnippet: `// Type-safe editor node transformations
export interface ScribeBlock {
  id: string;
  type: "header" | "paragraph" | "code" | "callout";
  content: string;
}

export function transformNodeToMDX(block: ScribeBlock): string {
  switch (block.type) {
    case "header": return \`# \${block.content}\\n\`;
    case "code": return \`\\\`\\\`\\\`typescript\\n\${block.content}\\n\\\`\\\`\\\`\\n\`;
    case "callout": return \`> [!TIP]\\n> \${block.content.split('\\n').join('\\n> ')}\\n\`;
    default: return \`\${block.content}\\n\\n\`;
  }
}`
  },
  {
    id: "proj-4",
    title: "Athena Auto-IaC Provisioner",
    description: "An visual orchestration tool that lets teams layout complex GCP infrastructure topographies and compiles clean, bulletproof Terraform plans.",
    longDescription: "Athena eliminates manual errors during Terraform infrastructure modeling. Users visual drag-and-drop nodes representing GCP buckets, compute VMs, VPC networks, and firewalls on an infinite zoom stage. Instantly parses connected architectures to spit out production-grade, secure declarative Terraform configuration structures.",
    tags: ["TypeScript", "Terraform", "Canvas API", "GCP Stack", "Vite"],
    category: "Cloud / AI",
    githubUrl: "https://github.com/aliceliu/athena-iac",
    liveUrl: "https://athena.aliceliu.dev",
    highlights: [
      "Compiles visual drawings into syntactically valid HCL files within 50 milliseconds.",
      "Includes instant GCP security rule auditing warnings (Snyk/Chekov style) directly during canvas modeling.",
      "Fully responsive infinite-grid canvas implementing zoom, panning, and automatic alignment grids."
    ],
    demoCodeSnippet: `// Node connection validation and HCL code compilation
export function compileServiceNode(node: ServiceNode): string {
  return \`resource "google_compute_instance" "\${node.id}" {
  name         = "\${node.name}"
  machine_type = "\${node.instanceType || "e2-medium"}"
  zone         = "\${node.region || "us-central1-a"}"

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    network = "google_compute_network.custom_vpc.id"
  }
}\`;
}`
  }
];
