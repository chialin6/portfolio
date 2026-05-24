/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ArrowUpRight, Github, ExternalLink, X, Code2, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Frontend" | "Cloud / AI" | "Embedded Systems" | "Research">("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const categories = ["All", "Frontend", "Cloud / AI", "Embedded Systems", "Research"] as const;

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const activeIndex = activeProject ? filteredProjects.findIndex(p => p.id === activeProject.id) : -1;

  const navigateTo = (idx: number) => {
    if (idx >= 0 && idx < filteredProjects.length) {
      setCopiedSnippet(false);
      setActiveProject(filteredProjects[idx]);
    }
  };

  useEffect(() => {
    if (!activeProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigateTo(activeIndex - 1);
      if (e.key === "ArrowRight") navigateTo(activeIndex + 1);
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject, activeIndex]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="projects" className="py-24 scroll-mt-20 bg-zinc-950 border-t border-zinc-900 text-zinc-100 relative">
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-zinc-800/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white">
            <FolderGit2 className="w-4 h-4" />
            <span>03 / PROJECTS_ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Architectural Shipments & Projects
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            A selective breakdown of tools, edge processors, and open-source packages built for high performative capability.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-zinc-900 pb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-zinc-850 text-white border border-zinc-700"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                onClick={() => setActiveProject(project)}
                className="group p-6 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 rounded-xl relative cursor-pointer flex flex-col justify-between h-80 transition"
              >
                {/* Glowing subtle card outline action */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/3 group-hover:to-white/3 duration-300 pointer-events-none" />

                <div>
                   {/* Card head: category label and details indicator */}
                   <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-zinc-300 bg-zinc-900 px-2.5 py-0.5 rounded-full border border-zinc-800 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition duration-250 flex items-center gap-1">
                      <span>Explore Overview</span>
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </span>
                  </div>

                  {/* Title and Short Description */}
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-white transition duration-150 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags row */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-zinc-950">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-zinc-450 bg-zinc-950 px-2 py-0.5 rounded-md border border-zinc-900"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-zinc-500 px-1 py-0.5">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Detailed case study explorer MODAL POPUP */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/90 backdrop-blur-md">
              {/* Tap backdrop to exit */}
              <div 
                className="absolute inset-0 cursor-default" 
                onClick={() => setActiveProject(null)} 
              />

              <motion.div
                layoutId={`card-${activeProject.id}`}
                className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl relative w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Fixed modal header */}
                <div className="flex items-center justify-between px-6 py-4 bg-zinc-950 border-b border-zinc-850 sticky top-0 z-20">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-300 bg-zinc-900 px-2.5 py-0.5 rounded-full border border-zinc-800">
                      {activeProject.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateTo(activeIndex - 1)}
                      disabled={activeIndex <= 0}
                      className="p-1 px-1.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-750 text-zinc-400 hover:text-white rounded-md transition cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] font-mono text-zinc-500 tabular-nums">
                      {activeIndex + 1} / {filteredProjects.length}
                    </span>
                    <button
                      onClick={() => navigateTo(activeIndex + 1)}
                      disabled={activeIndex >= filteredProjects.length - 1}
                      className="p-1 px-1.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-750 text-zinc-400 hover:text-white rounded-md transition cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveProject(null)}
                      className="p-1 px-1.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-750 text-zinc-400 hover:text-white rounded-md transition cursor-pointer ml-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Modal main body */}
                <div className="p-6 md:p-8 flex flex-col gap-8">
                  {/* Overview Summary Grid */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
                      {activeProject.title}
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  {/* Split Details: Architecture highlights vs Live Code Sandbox */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Architectural highlights checklist */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                      <h4 className="text-xs font-mono text-white flex items-center gap-1.5 uppercase font-semibold">
                        <Sparkles className="w-4 h-4 text-zinc-400" />
                        <span>Core Deliverables</span>
                      </h4>
                      <ul className="space-y-3">
                        {activeProject.highlights.map((hlt, hidx) => (
                          <li key={hidx} className="flex gap-2.5 text-xs text-zinc-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                            <span>{hlt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Code Repo Links */}
                      <div className="flex flex-wrap gap-2.5 mt-4 pt-4 border-t border-zinc-800">
                        {activeProject.githubUrl && (
                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-950 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold transition cursor-pointer"
                          >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {activeProject.liveUrl && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-zinc-200 text-black font-semibold rounded-lg text-xs transition cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{activeProject.liveUrlLabel ?? "Live Site"}</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Integrated IDE simulation / Code view */}
                    {activeProject.demoCodeSnippet && (
                      <div className="lg:col-span-7 flex flex-col border border-zinc-805 bg-zinc-950 rounded-lg overflow-hidden">
                        {/* IDE Tab Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-850">
                          <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                            <Code2 className="w-3 text-white" />
                            <span>example_architecture.ts</span>
                          </span>
                          <button
                            onClick={() => handleCopyCode(activeProject.demoCodeSnippet || "")}
                            className="text-[10px] font-mono text-zinc-500 hover:text-white transition"
                          >
                            {copiedSnippet ? "COPIED" : "COPY CODE"}
                          </button>
                        </div>
                        {/* IDE Console screen */}
                        <pre className="p-4 overflow-x-auto font-mono text-[11px] text-zinc-300 leading-5">
                          <code>{activeProject.demoCodeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>

                  {/* Footer Tag badge collections */}
                  <div className="pt-4 border-t border-zinc-850">
                    <span className="text-[10px] font-mono text-zinc-400 block mb-2 font-semibold">TECHNOLOGY STACK INTEGRATION:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-zinc-350 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
