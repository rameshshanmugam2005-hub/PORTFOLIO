import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileDown, 
  Linkedin, 
  Github, 
  Sparkles,
  Zap,
  Database,
  ArrowRight,
  Send,
  Mail,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export const Hero = ({ onOpenResumeModal }) => {
  // Dynamic typing role animation
  const roles = ["Software Engineer", "Frontend Developer", "Full-Stack Web Architect", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  // Orbit tech satellites data matching reference design
  const techOrbitItems = [
    {
      id: 'html5',
      name: 'HTML5 Semantic',
      position: 'top-[-18px] left-1/2 -translate-x-1/2',
      bg: 'bg-white/10 text-white border-white/20 hover:border-white shadow-lg',
      content: (
        <div className="w-5 h-5 flex items-center justify-center font-bold text-xs">
          ▲
        </div>
      )
    },
    {
      id: 'tailwind',
      name: 'Modern CSS3 & Tailwind',
      position: 'top-[8%] right-[8%]',
      bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:border-emerald-400',
      content: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      id: 'css3',
      name: 'CSS3 Styles',
      position: 'top-[30%] right-[-18px]',
      bg: 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-blue-400',
      content: (
        <span className="font-mono text-xs font-bold">{'</>'}</span>
      )
    },
    {
      id: 'postgres',
      name: 'PostgreSQL / SQL',
      position: 'bottom-[34%] right-[-14px]',
      bg: 'bg-blue-900/40 text-blue-300 border-blue-500/30 hover:border-blue-400',
      content: (
        <Database className="w-4 h-4" />
      )
    },
    {
      id: 'java',
      name: 'Java & Data Structures',
      position: 'bottom-[8%] right-[10%]',
      bg: 'bg-indigo-900/40 text-indigo-300 border-indigo-500/30 hover:border-indigo-400',
      content: (
        <span className="font-mono text-xs font-bold">☕</span>
      )
    },
    {
      id: 'graphql',
      name: 'APIs & Web Architecture',
      position: 'bottom-[-18px] left-1/2 -translate-x-1/2',
      bg: 'bg-pink-950/60 text-pink-400 border-pink-500/30 hover:border-pink-400',
      content: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
        </svg>
      )
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+)',
      position: 'bottom-[8%] left-[10%]',
      bg: 'bg-amber-400 text-black border-amber-300 shadow-md font-bold',
      content: (
        <span className="text-[11px] font-black font-sans leading-none">JS</span>
      )
    },
    {
      id: 'github',
      name: 'GitHub Version Control',
      position: 'bottom-[34%] left-[-14px]',
      bg: 'bg-slate-900/90 text-white border-slate-700 hover:border-white',
      content: (
        <Github className="w-4 h-4" />
      )
    },
    {
      id: 'react',
      name: 'Modern Web Frontend',
      position: 'top-[30%] left-[-18px]',
      bg: 'bg-blue-950/60 text-cyan-400 border-cyan-500/30 hover:border-cyan-400',
      content: (
        <span className="font-bold text-xs">▲</span>
      )
    },
    {
      id: 'vite',
      name: 'Vite & Web Tooling',
      position: 'top-[8%] left-[8%]',
      bg: 'bg-purple-950/60 text-amber-400 border-purple-500/30 hover:border-amber-400',
      content: (
        <Sparkles className="w-4 h-4 text-orange-400" />
      )
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#030712] via-[#050b1d] to-[#030712]"
    >
      {/* Subtle Background Glows matching reference */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Information matching reference photo */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* "Welcome to my space" Subheading */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-sky-300 bg-sky-500/10 border border-sky-500/20 backdrop-blur-md w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-widest uppercase font-tech">WELCOME TO MY DIGITAL SPACE</span>
            </div>

            {/* Main Greeting and Name with Distinct Luxury / Modern Typography */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif-luxury italic font-normal text-3xl sm:text-4xl lg:text-5xl text-slate-300 tracking-normal">
                  Hello, I’m
                </span>
              </div>
              <h1 className="font-modern-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Ramesh
                </span>{" "}
                <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                  S
                </span>
              </h1>
            </div>

            {/* Dynamic Role Line with Cursor */}
            <div className="text-xl sm:text-2xl font-bold text-white flex items-center flex-wrap gap-2 font-tech">
              <span className="text-slate-400 font-medium">I'm a</span>
              <span className="text-sky-400 font-extrabold tracking-wide">
                {displayedText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-sky-400 animate-pulse ml-0.5" />
            </div>

            {/* Detailed Bio Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              Computer Science undergraduate passionate about engineering scalable, high-performance web applications and resilient full-stack systems. Specializing in modern JavaScript, React, RESTful backend APIs, and real-time cloud architectures.
            </p>

            {/* Core Technology Highlights Chip Strip with Optimistic Styling */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Production Ready Stack
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-medium">
                  Optimized for speed, responsiveness & clean design
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { name: "React 18+", bg: "bg-blue-500/15 text-blue-300 border-blue-500/30 hover:bg-blue-500/25", dot: "bg-blue-400" },
                  { name: "JavaScript (ES6+)", bg: "bg-amber-500/15 text-amber-300 border-amber-500/30 hover:bg-amber-500/25", dot: "bg-amber-400" },
                  { name: "Node.js & Express", bg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/25", dot: "bg-emerald-400" },
                  { name: "PostgreSQL / SQL", bg: "bg-sky-500/15 text-sky-300 border-sky-500/30 hover:bg-sky-500/25", dot: "bg-sky-400" },
                  { name: "Java (OOP & DSA)", bg: "bg-orange-500/15 text-orange-300 border-orange-500/30 hover:bg-orange-500/25", dot: "bg-orange-400" },
                  { name: "Tailwind CSS", bg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/25", dot: "bg-cyan-400" },
                  { name: "Cloud & CI/CD", bg: "bg-purple-500/15 text-purple-300 border-purple-500/30 hover:bg-purple-500/25", dot: "bg-purple-400" }
                ].map((tech, i) => (
                  <span 
                    key={i} 
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium border transition-all duration-200 hover:scale-105 cursor-default shadow-sm ${tech.bg}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${tech.dot}`} />
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Row: Resume CTA, Contact CTA + Social Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              
              {/* Primary Amber-Orange Pill Button: Download Resume */}
              <button
                id="hero-download-resume-btn"
                onClick={onOpenResumeModal}
                className="px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-lg shadow-orange-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-slate-950" />
                <span>Download Resume</span>
              </button>

              {/* Secondary Contact CTA Button */}
              <a
                id="hero-contact-cta-btn"
                href="#contact"
                className="px-5 py-3 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              {/* LinkedIn Circle Button */}
              <a
                id="hero-social-linkedin"
                href="https://www.linkedin.com/in/ramesh045/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-blue-400 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all hover:scale-105 shadow-md"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub Circle Button */}
              <a
                id="hero-social-github"
                href="https://github.com/rameshshanmugam2005-hub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-purple-400 hover:bg-purple-600/20 text-slate-300 hover:text-purple-400 flex items-center justify-center transition-all hover:scale-105 shadow-md"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LeetCode / Terminal Circle Button */}
              <a
                id="hero-social-leetcode"
                href="https://leetcode.com/u/rameshshanmugam45/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                title="LeetCode Problem Solving"
                className="w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-amber-400 hover:bg-amber-600/20 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all hover:scale-105 shadow-md"
              >
                <span className="font-mono font-bold text-xs">{`>_`}</span>
              </a>
            </div>

            {/* Recruiter Quick Verification Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available Immediately
              </span>
              <span className="text-slate-600">•</span>
              <span>Coimbatore / Pollachi, TN</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">B.E. CSE (8.02 CGPA)</span>
            </div>

          </div>

          {/* Right Column: Exact Circular Photo Orbit matching the reference image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* The Central Circular Orbit System */}
            <div className="relative w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* Outer Circular Orbit Ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/25 shadow-[0_0_50px_rgba(99,102,241,0.15)] pointer-events-none" />
              
              {/* Orbiting Tech Satellite Badges */}
              {techOrbitItems.map((tech) => (
                <div
                  key={tech.id}
                  title={tech.name}
                  className={`absolute ${tech.position} w-9 h-9 sm:w-10 sm:h-10 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-115 cursor-pointer z-20 ${tech.bg}`}
                >
                  {tech.content}
                </div>
              ))}

              {/* Central Circular Avatar Frame */}
              <div className="relative w-[260px] h-[260px] sm:w-[315px] sm:h-[315px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-2xl shadow-indigo-950/80 bg-black/90 group">
                
                {/* Photo: Interchanged photo 1 to 2 cleanly fitted into the circle */}
                <img
                  src="/ramesh_photo.png"
                  alt="Ramesh S - Portrait"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/profile.jpg";
                  }}
                  className="w-full h-full object-cover object-top scale-[1.05] translate-y-1 transform transition-transform duration-500 group-hover:scale-[1.10]"
                />

                {/* Subtle bottom vignette to blend naturally */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

            {/* Bottom Status Under Photo matching reference */}
            <div className="mt-8 flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 bg-white/[0.04] px-4 py-2 rounded-full border border-white/10 shadow-sm backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Verified Coding Activity & Progress</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

