/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Calendar, ArrowDown, ChevronRight, CheckCircle, Download } from "lucide-react";
import { profileInfo } from "../data";

export default function Overview() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Keep a stylish ticking clock reflecting active UTC development timezone or standard
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="overview" className="relative min-h-screen flex flex-col justify-center py-16 bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Abstract sleek background ambient circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-zinc-800/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-zinc-900/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col justify-between h-full">
        {/* Navigation rail / Tech Meta row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16 border-b border-zinc-900 pb-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
            <span>JAELYN // PORTFOLIO</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>{time || "2026-05-23 22:00:00 UTC"}</span>
            </span>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
          {/* Main Content Area */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs text-zinc-300 font-medium pt-1 pb-1">
                <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
                <span>Open to New Engagements</span>
              </span>
            </motion.div>

            {/* Display Header */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-none">
                Hi, I'm <span className="text-white hover:text-zinc-300 transition duration-300">{profileInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-zinc-300 tracking-tight mt-1">
                {profileInfo.title}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {profileInfo.tagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-200 text-black font-semibold rounded-lg shadow-lg shadow-zinc-500/5 transition duration-200 text-sm cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-850 active:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium rounded-lg transition duration-200 text-sm cursor-pointer animate-none"
              >
                <Mail className="w-4 h-4" />
                <span>{copied ? "Address Copied!" : "Copy Email"}</span>
                {copied && (
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-1 -right-1 bg-white text-black p-0.5 rounded-full"
                  >
                    <CheckCircle className="w-3.5 h-3.5 block" />
                  </motion.span>
                )}
              </button>
              <a
                href={`${import.meta.env.BASE_URL}jaelyn_resume_2026.pdf`}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium rounded-lg transition duration-200 text-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Quick social links row */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 mt-4 pt-4 border-t border-zinc-900">
              <a 
                href={profileInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-400 hover:text-white transition duration-200"
                title="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={profileInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-zinc-400 hover:text-white transition duration-200"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${profileInfo.email}`} 
                className="text-zinc-400 hover:text-white transition duration-200"
                title="Send direct email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <span className="text-zinc-700">|</span>
              <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-zinc-100" />
                {profileInfo.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="lg:col-span-5 w-full pr-0 lg:pr-4"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring" as const, stiffness: 80, damping: 15, delay: 0.4 }}
          >
            <div className="glow-effect rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
              {/* Dots header bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-650" />
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">{profileInfo.name}</span>
                <div className="w-12 h-2" />
              </div>

              {/* Landscape photo */}
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={profileInfo.avatarAlt}
                className="w-full object-cover object-center aspect-[3/2]"
              />

              {/* Code strip */}
              <div className="px-5 py-4 font-mono text-xs text-zinc-300 leading-6 border-t border-zinc-800 bg-zinc-950">
                <p className="text-zinc-600">// currently</p>
                <p>
                  <span className="text-pink-400">struct</span> <span className="text-zinc-100">Jaelyn</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-pink-400">std::string</span> role{"  "} = <span className="text-zinc-100">"Backend Engineer"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-pink-400">std::string</span> based = <span className="text-zinc-100">"New York, NY"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-pink-400">std::string</span> status = <span className="text-zinc-300">"having_fun"</span>;
                </p>
                <p>{"};"}  </p>
                <p className="mt-1"><span className="text-zinc-100">Jaelyn</span> me;</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down mouse indicator */}
        <div className="hidden sm:flex justify-center items-center mt-12 animate-bounce">
          <a href="#skills" className="flex flex-col items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition">
            <span>Discover More</span>
            <ArrowDown className="w-4 h-4 text-zinc-250 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
