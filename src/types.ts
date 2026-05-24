/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Frontend" | "Backend" | "Full-Stack" | "Cloud / AI" | "Embedded Systems" | "Research";
  githubUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  highlights: string[];
  demoCodeSnippet?: string;
  imageAlt?: string;
}

export interface Skill {
  name: string;
  level: number; // 1 to 5 stars or percentage
  category: "Languages" | "Backend & APIs" | "Data & Streaming" | "DevOps & Cloud";
  iconName: string;
}

export interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  details: string[];
  techStack: string[];
  links?: { label: string; url: string }[];
}

export type CodeFocusClass = "all" | "frontend" | "backend" | "cloud";
