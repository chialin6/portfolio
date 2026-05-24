/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Cpu, Layers, HardDrive, Compass, Code, Terminal, Sparkles } from "lucide-react";
import { profileInfo, skillsData } from "../data";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Languages" | "Backend & APIs" | "Data & Streaming" | "DevOps & Cloud">("All");

  const categories = ["All", "Languages", "Backend & APIs", "Data & Streaming", "DevOps & Cloud"] as const;

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 scroll-mt-20 bg-zinc-900 border-t border-zinc-800 text-zinc-100 relative">
      <div className="hidden sm:block absolute top-1/3 right-10 w-96 h-96 rounded-full bg-zinc-800/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white">
              <User className="w-4 h-4" />
              <span>01 / SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-mono">
            {profileInfo.location}
          </p>
        </div>

        {/* Content Split: Bio & Background vs Interactive Skills Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-800/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white border border-zinc-850">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base">The Core Focus</h3>
                  <p className="text-xs text-zinc-500 font-mono">Backend Systems & Distributed APIs</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {profileInfo.shortBio}
              </p>
            </div>

            <div className="p-6 bg-zinc-950/50 border border-zinc-800/80 rounded-xl">
              <h4 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '6s' }} />
                <span>What I Value</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-zinc-400 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-mono mt-0.5">&gt;</span>
                  <span><strong>Collaborative Teams:</strong> I enjoy working closely with others, sharing knowledge openly, and building environments where people learn from each other.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-mono mt-0.5">&gt;</span>
                  <span><strong>Building New Things:</strong> I’m energized by fast-moving teams solving real problems, experimenting with ideas, and shipping products from the ground up.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-400 font-mono mt-0.5">&gt;</span>
                  <span><strong>Inclusive Culture:</strong> I value diverse and supportive environments where different perspectives are welcomed and people feel empowered to contribute.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Skills Dashboard Side */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 bg-zinc-950 border border-zinc-850 rounded-xl flex-grow flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-white" />
                    <span>Dynamic Skill Dashboard</span>
                  </h3>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Showing: {filteredSkills.length} Technologies
                  </div>
                </div>

                {/* Sub-navigation categories */}
                <div className="flex flex-wrap gap-1.5 mb-6 border-b border-zinc-900 pb-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-zinc-850 text-white border border-zinc-700"
                          : "text-zinc-450 hover:text-white hover:bg-zinc-900"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Content */}
              <div className="relative min-h-[280px]">
                <AnimatePresence mode="popLayout">
                  <motion.div 
                    key={selectedCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {filteredSkills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="p-3.5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 rounded-lg flex flex-col gap-2 group transition"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-display font-bold text-sm text-zinc-200 group-hover:text-white transition">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded-full border border-zinc-900">
                            {skill.category}
                          </span>
                        </div>

                        {/* Skill metric gauge */}
                        <div className="flex items-center gap-2 mt-1">
                          <div className="h-1.5 flex-grow bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                            <motion.div 
                              className="h-full bg-zinc-300 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level * 20}%` }}
                              transition={{ duration: 0.8, delay: index * 0.05 }}
                            />
                          </div>
                          <span className="text-[10px] font-mono text-zinc-400 w-6 text-right">
                            {skill.level === 5 ? "EXP" : `${skill.level * 20}%`}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Skill Footnote */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <Code className="w-3.5 h-3.5 text-white" />
                  <span>Interactive Stack</span>
                </span>
                <span>LEVELS REPORTED: CURRENT AS OF 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
