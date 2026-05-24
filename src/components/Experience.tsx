/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Star, Award, ExternalLink } from "lucide-react";
import { experienceData } from "../data";

export default function Experience() {
  // If want to set auto-expand on landing, add the id to below
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  return (
    <section id="experience" className="py-24 scroll-mt-20 bg-zinc-900 border-t border-zinc-800 text-zinc-100 relative">
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-zinc-800/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white">
            <Briefcase className="w-4 h-4" />
            <span>02 / WORK_HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Work Experience Timeline
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            A comprehensive look at my engineering contributions across multi-cloud infrastructure and frontend architectures.
          </p>
        </div>

        {/* Timeline representation layout */}
        <div className="relative border-l border-zinc-800 ml-6 pl-10 space-y-10 py-4 max-w-3xl">
          {experienceData.map((job, idx) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <div key={job.id} className="relative group">
                {/* Timeline node icon */}
                <div className={`absolute -left-[48px] top-1 h-8 w-8 rounded-full border flex items-center justify-center transition duration-300 ${
                  isExpanded 
                    ? "bg-zinc-950 text-white border-zinc-700" 
                    : "bg-zinc-900 text-zinc-400 border-zinc-800 group-hover:border-zinc-750"
                }`}>
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Main Card */}
                <motion.div 
                  className={`p-5 md:p-6 rounded-xl border transition ${
                    isExpanded 
                      ? "bg-zinc-950 border-zinc-805" 
                      : "bg-zinc-950/40 hover:bg-zinc-950/65 border-zinc-900 hover:border-zinc-850"
                  }`}
                  layout
                >
                  {/* Card head metadata */}
                  <div 
                    onClick={() => toggleExpand(job.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg font-display font-bold text-white group-hover:text-white transition duration-150">
                          {job.role}
                        </h3>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-255 border border-zinc-800/85">
                          {job.company}
                        </span>
                      </div>
                      
                      {/* Meta links: Date / Locate */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-xs text-zinc-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-white" />
                          <span>{job.period}</span>
                        </span>
                        <span className="hidden sm:inline text-zinc-800">|</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-100" />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Interactive Toggler Arrow */}
                    <div className="self-end sm:self-center font-mono text-[10px] text-zinc-500 group-hover:text-white transition flex items-center gap-1.5 bg-zinc-900/60 px-2.5 py-1.5 rounded-md border border-zinc-850 animate-none">
                      <span>{isExpanded ? "COLLAPSE" : "EXPAND DETAILS"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* Collapsible/Expandable Core details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-col gap-5">
                          {/* Brief overview */}
                          <p className="text-sm text-zinc-305 leading-relaxed italic">
                            "{job.description}"
                          </p>

                          {/* Achievements bullet collection */}
                          <div className="flex flex-col gap-3">
                            <h4 className="text-[10px] font-mono text-white uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                              <Award className="w-4 h-4 text-zinc-400" />
                              <span>Key Architecture Shipments</span>
                            </h4>
                            <ul className="space-y-3.5 text-xs text-zinc-400 font-sans pl-1">
                              {job.details.map((dtl, didx) => (
                                <li key={didx} className="flex gap-2.5 items-start leading-relaxed">
                                  <span className="text-zinc-400 font-mono mt-0.5 shrink-0">&gt;</span>
                                  <span>{dtl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech stack badge list */}
                          <div className="pt-3 border-t border-zinc-950">
                            <span className="text-[10px] font-mono text-zinc-500 block mb-2 font-semibold">ROLE TECHNOLOGIES:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {job.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-mono text-zinc-300 bg-zinc-950 px-2 py-0.5 rounded-md border border-zinc-900"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* External links */}
                          {job.links && job.links.length > 0 && (
                            <div className="pt-3 border-t border-zinc-950">
                              <span className="text-[10px] font-mono text-zinc-500 block mb-2 font-semibold">REFERENCES:</span>
                              <div className="flex flex-wrap gap-2">
                                {job.links.map((link) => (
                                  <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800 hover:border-zinc-700 transition"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
