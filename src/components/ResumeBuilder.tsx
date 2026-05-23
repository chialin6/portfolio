/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Sliders, Copy, Printer, CheckCircle, HelpCircle, HardDrive, Cpu, CloudLightning } from "lucide-react";
import { profileInfo, experienceData, skillsData } from "../data";

type FocusType = "FullStack" | "Frontend" | "Backend";
type LayoutStyle = "Modern" | "Traditional";

export default function ResumeBuilder() {
  const [focus, setFocus] = useState<FocusType>("FullStack");
  const [layout, setLayout] = useState<LayoutStyle>("Modern");
  const [copied, setCopied] = useState(false);

  // Filter skills and highlights in real time based on active recruiter focus
  const getFilteredSkills = () => {
    switch (focus) {
      case "Frontend":
        return skillsData.filter(s => s.category === "Backend & APIs" || s.category === "Languages").slice(0, 10);
      case "Backend":
        return skillsData.filter(s => s.category === "Backend & APIs" || s.category === "Data & Streaming").slice(0, 10);
      default:
        return skillsData.slice(0, 10);
    }
  };

  const getFilteredExperience = () => {
    return experienceData.map(job => {
      let filteredDetails = [...job.details];
      if (focus === "Frontend") {
        // Enforce frontend related achievements first
        filteredDetails = job.details.filter(d => 
          d.toLowerCase().includes("react") || 
          d.toLowerCase().includes("rendering") || 
          d.toLowerCase().includes("interface") || 
          d.toLowerCase().includes("ui") ||
          d.toLowerCase().includes("consistency") ||
          d.toLowerCase().includes("optimized") ||
          d.toLowerCase().includes("design")
        );
      } else if (focus === "Backend") {
        // Enforce backend related achievements first
        filteredDetails = job.details.filter(d => 
          d.toLowerCase().includes("api") || 
          d.toLowerCase().includes("query") || 
          d.toLowerCase().includes("database") || 
          d.toLowerCase().includes("ci/cd") ||
          d.toLowerCase().includes("cloud") ||
          d.toLowerCase().includes("serverless") ||
          d.toLowerCase().includes("pipeline")
        );
      }
      
      // If filtering leaves empty list, fall back to entire details
      return {
        ...job,
        details: filteredDetails.length > 0 ? filteredDetails : job.details,
        techStack: focus === "Frontend" 
          ? job.techStack.filter(t => !["GCP", "Kubernetes", "PostgreSQL", "Prisma", "Docker", "Database"].includes(t))
          : focus === "Backend"
          ? job.techStack.filter(t => !["Figma", "Svelte", "Redux", "Tailwind CSS", "Canvas API"].includes(t))
          : job.techStack
      };
    });
  };

  const handleCopyMarkdown = () => {
    const skillsList = getFilteredSkills().map(s => `* **${s.name}** - Level: ${s.level}/5`).join("\n");
    const expList = getFilteredExperience().map(j => 
      `### ${j.role} | ${j.company}\n_${j.period} - ${j.location}_\n\n${j.description}\n\n${j.details.map(d => `* ${d}`).join("\n")}\n\n**Technologies:** ${j.techStack.join(", ")}`
    ).join("\n\n");

    const markdown = `# RESUME - ${profileInfo.name.toUpperCase()}\n## ${profileInfo.title}\n\nEmail: ${profileInfo.email} | Location: ${profileInfo.location}\n\n---\n\n## SUMMARY\n${profileInfo.shortBio}\n\n---\n\n## SHARPENED SKILLS\n${skillsList}\n\n---\n\n## PROFESSIONAL ADVENTURES\n${expList}`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentSkills = getFilteredSkills();
  const currentExp = getFilteredExperience();

  return (
    <section id="resumebuilder" className="py-24 bg-zinc-950 border-t border-zinc-900 text-zinc-100 relative print:bg-white print:text-zinc-950 print:p-0 print:m-0">
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 w-[30rem] h-[30rem] rounded-full bg-zinc-800/5 blur-[120px] pointer-events-none print:hidden" />

      <div className="max-w-6xl mx-auto px-6 print:px-0">
        {/* Section Heading */}
        <div className="mb-14 print:hidden">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white">
            <FileText className="w-4 h-4" />
            <span>04 / RECRUITER_CENTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Interactive Resume Customizer
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Recruiter sandbox: Tailor my professional timeline to reflect precisely what you are seeking in your open position.
          </p>
        </div>

        {/* Dashboard Grid split: Builder Side controls vs Interactive Resume Preview sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls column (Hidden on print) */}
          <div className="lg:col-span-4 flex flex-col gap-6 print:hidden">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <h3 className="font-display font-bold text-white text-base mb-4 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-white" />
                <span>Customization Panel</span>
              </h3>

              {/* Set Core Professional Focus */}
              <div className="mb-6">
                <label className="text-xs font-mono text-zinc-400 block mb-2 font-semibold">ROLE FOCUS FILTERS:</label>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setFocus("FullStack")}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left border transition flex items-center gap-2.5 cursor-pointer ${
                      focus === "FullStack" 
                        ? "bg-zinc-800 text-white border-zinc-700" 
                        : "bg-zinc-950 border-zinc-900 text-zinc-455 hover:text-white"
                    }`}
                  >
                    <Sliders className="w-4 h-4" />
                    <span>Cross-Functional Full-Stack</span>
                  </button>
                  <button 
                    onClick={() => setFocus("Frontend")}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left border transition flex items-center gap-2.5 cursor-pointer ${
                      focus === "Frontend" 
                        ? "bg-zinc-800 text-white border-zinc-700" 
                        : "bg-zinc-950 border-zinc-900 text-zinc-455 hover:text-white"
                    }`}
                  >
                    <Cpu className="w-4 h-4" />
                    <span>Client UX & Application Focus</span>
                  </button>
                  <button 
                    onClick={() => setFocus("Backend")}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left border transition flex items-center gap-2.5 cursor-pointer ${
                      focus === "Backend" 
                        ? "bg-zinc-800 text-white border-zinc-700" 
                        : "bg-zinc-950 border-zinc-900 text-zinc-455 hover:text-white"
                    }`}
                  >
                    <HardDrive className="w-4 h-4" />
                    <span>APIs & Cloud Systems Focus</span>
                  </button>
                </div>
              </div>

              {/* Set Visual Layout Theme of resume */}
              <div className="mb-6 border-t border-zinc-800 pt-5">
                <label className="text-xs font-mono text-zinc-400 block mb-2 font-semibold">SHEET PREVIEW STYLE:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setLayout("Modern")}
                    className={`px-3 py-2 rounded-lg text-xs font-medium border transition cursor-pointer ${
                      layout === "Modern" 
                        ? "bg-zinc-805 text-white border-zinc-700" 
                        : "bg-zinc-950 border-zinc-900 text-zinc-455 hover:text-white"
                    }`}
                  >
                    Modern Slate
                  </button>
                  <button 
                    onClick={() => setLayout("Traditional")}
                    className={`px-3 py-2 rounded-lg text-xs font-medium border transition cursor-pointer ${
                      layout === "Traditional" 
                        ? "bg-zinc-805 text-white border-zinc-700" 
                        : "bg-zinc-950 border-zinc-900 text-zinc-455 hover:text-white"
                    }`}
                  >
                    Traditional Mono
                  </button>
                </div>
              </div>

              {/* Quick Export tools */}
              <div className="flex flex-col gap-2 pt-5 border-t border-zinc-800">
                <button 
                  onClick={handleCopyMarkdown}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-950 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white rounded-lg text-xs font-bold transition cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? "Copied Markdown!" : "Copy Markdown Code"}</span>
                </button>
                <button 
                  onClick={handlePrint}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-zinc-250 text-black font-bold rounded-lg text-xs transition cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Execute Print / Save PDF</span>
                </button>
              </div>

            </div>

            {/* Micro recruiter tips */}
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-400 leading-relaxed">
              <p className="flex gap-2 items-start">
                <HelpCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Adjusting focus filters directly changes the summary achievements list shown in the panel to reflect targeted specialties contextually.</span>
              </p>
            </div>
          </div>

          {/* Interactive Resume Canvas Preview */}
          <div className="lg:col-span-8 w-full border border-zinc-800 print:border-none shadow-2xl rounded-xl overflow-hidden bg-white text-slate-900 p-6 md:p-10 relative">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-zinc-650 print:hidden" />

            {/* Resume Top Header Block */}
            <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-slate-200 pb-6 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-slate-950">
                  {profileInfo.name}
                </h1>
                <p className={`text-sm font-semibold tracking-tight mt-1 ${
                  layout === "Modern" ? "text-zinc-600" : "text-slate-800 font-mono"
                }`}>
                  {profileInfo.title}
                </p>
                <p className="text-xs text-slate-500 font-sans mt-2">
                  Location: {profileInfo.location}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right text-xs font-mono text-slate-600 leading-5">
                <p>Email: {profileInfo.email}</p>
                <p>GitHub: github.com/aliceliu</p>
                <p>LinkedIn: linkedin.com/in/aliceliu</p>
              </div>
            </div>

            {/* Summary / Bio */}
            <div className="mb-6">
              <h3 className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                layout === "Modern" ? "text-zinc-700 font-display font-extrabold" : "text-slate-900 font-mono border-b border-slate-100 pb-1"
              }`}>
                SYSTEM SUMMARY PROFILE
              </h3>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-sans">
                {profileInfo.shortBio}
              </p>
            </div>

            {/* Filtered Skills Block */}
            <div className="mb-6">
              <h3 className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                layout === "Modern" ? "text-zinc-700 font-display font-extrabold" : "text-slate-900 font-mono border-b border-slate-100 pb-1"
              }`}>
                SHARPENED SKILLS ({focus})
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentSkills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="text-[10px] md:text-xs font-mono text-slate-800 bg-slate-100 px-2.5 py-1 rounded border border-slate-200/60"
                  >
                    {skill.name} (Level {skill.level}/5)
                  </span>
                ))}
              </div>
            </div>

            {/* Filtered Career Achievements */}
            <div>
              <h3 className={`text-xs font-bold tracking-widest uppercase mb-4 ${
                layout === "Modern" ? "text-zinc-700 font-display font-extrabold" : "text-slate-900 font-mono border-b border-slate-100 pb-1"
              }`}>
                SELECTED ENGINEERING TIMELINE ({focus} HIGHLIGHTS)
              </h3>
              <div className="space-y-6">
                {currentExp.map((job) => (
                  <div key={job.id} className="group">
                    {/* Header line */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs md:text-sm font-bold text-slate-950 font-sans">
                          {job.role}
                        </h4>
                        <span className="text-[10px] bg-zinc-100 text-zinc-800 font-semibold px-2 py-0.5 rounded border border-zinc-200 font-mono">
                          {job.company}
                        </span>
                      </div>
                      <span className="text-[10px] md:text-xs font-mono text-slate-500 whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>

                    {/* Role description and highlights points */}
                    <p className="text-xs text-slate-600 mb-3 italic">
                      "{job.description}"
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 font-sans list-disc pl-4">
                      {job.details.map((dtl, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">
                          {dtl}
                        </li>
                      ))}
                    </ul>

                    {/* Role technologies */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {job.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[9px] font-mono text-slate-500 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
