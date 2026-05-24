/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Terminal, Menu, X, ArrowUp } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Shadow/backdrop header trigger
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Back to top trigger
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // 3. Simple intersection tracker for highlighting navbar tabs
      const sections = ["overview", "skills", "experience", "projects"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "overview", label: "OVERVIEW" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "CAREER" },
    { id: "projects", label: "PROJECTS" },
  ];

  const handleNavClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setActiveTab(id);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 tracking-normal antialiased selection:bg-white/10 selection:text-white">
      
      {/* Sleek Floating Header */}
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b print:hidden ${
        scrolled 
          ? "bg-zinc-950/90 backdrop-blur-md border-zinc-900 shadow-md py-4" 
          : "bg-transparent border-transparent py-6"
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo / Console brand indicator */}
          <div 
            onClick={() => handleNavClick("overview")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-100 group-hover:border-zinc-600 transition">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-sm tracking-widest text-white group-hover:text-zinc-300 transition">
              Jaelyn Liu
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/40 p-1 rounded-xl border border-zinc-900">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 text-[10px] font-mono font-bold tracking-wider rounded-lg transition relative cursor-pointer ${
                  activeTab === item.id
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "text-zinc-450 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-850 rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-zinc-950/98 backdrop-blur-md flex flex-col justify-center items-center gap-6 print:hidden">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-lg font-display font-bold tracking-widest ${
                activeTab === item.id ? "text-white underline underline-offset-4" : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Assembly Blocks */}
      <main className="relative">
        <Overview />
        <Skills />
        <Experience />
        <Projects />
      </main>

      {/* Fast Back To Top pill */}
      {showBackToTop && (
        <button
          onClick={() => handleNavClick("overview")}
          className="fixed bottom-6 right-6 p-3 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 rounded-xl shadow-2xl z-40 transition duration-300 animate-fade-in print:hidden cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
