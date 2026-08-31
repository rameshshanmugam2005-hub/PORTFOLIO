import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileDown, 
  Linkedin, 
  Github, 
  Code2, 
  Sparkles,
  Terminal,
  Zap,
  Check,
  Copy,
  Eye,
  RefreshCw,
  Bus,
  Layers,
  Database,
  Globe,
  Flame,
  ArrowRight
} from 'lucide-react';

export const Hero = ({ onOpenResumeModal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState('js');
  const [showSandbox, setShowSandbox] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Dynamic typing role animation
  const roles = ["Full-Stack Developer", "Software Engineer", "Frontend & UI Architect", "Web Systems Engineer"];
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

  const codeSnippets = {
    html: `<!-- 🌐 index.html - Semantic HTML5 Architecture -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ramesh S | Frontend & Web Developer</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="bg-dark text-slate">

  <!-- Main Navigation -->
  <header class="header-nav" role="banner">
    <nav class="nav-links" aria-label="Main">
      <a href="#projects" class="active">Transit AI</a>
      <a href="#skills">HTML • CSS • JS</a>
      <a href="#contact" class="btn-connect">Get in Touch</a>
    </nav>
  </header>

  <!-- Live Telemetry Card -->
  <main id="telemetry-root">
    <div class="transit-card">
      <span class="live-badge">● LIVE TELEMETRY</span>
      <h2 id="bus-label">Active Route #45</h2>
      <p id="bus-status">Tracking 14 vehicles in real-time...</p>
    </div>
  </main>

  <script src="app.js"></script>
</body>
</html>`,

    css: `/* 🎨 styles.css - Modern CSS3 & Responsive Architecture */
:root {
  --primary-blue: #3b82f6;
  --accent-purple: #a855f7;
  --accent-amber: #f59e0b;
  --bg-midnight: #030712;
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(255, 255, 255, 0.1);
  --transition-smooth: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.transit-card {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  transition: var(--transition-smooth);
}

.transit-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
}

.live-badge {
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  animation: pulse-glow 2s infinite ease-in-out;
}`,

    js: `// ⚡ app.js - Modern Vanilla JavaScript (ES6+)
class TransitTelemetryEngine {
  constructor(endpoint = "/api/transit/live") {
    this.endpoint = endpoint;
    this.activeBuses = 14;
    this.isTracking = true;
    this.init();
  }

  init() {
    console.log("[✓] Initializing HTML5 + CSS3 + JS Engine...");
    this.bindEvents();
    this.pollTelemetryData();
  }

  async pollTelemetryData() {
    try {
      const response = await fetch(this.endpoint);
      const data = await response.json();
      this.updateDOM(data);
    } catch (err) {
      this.simulateRealtimeUpdates();
    }
  }

  updateDOM({ count, status, eta }) {
    const labelEl = document.getElementById("bus-label");
    const statusEl = document.getElementById("bus-status");
    if (labelEl) labelEl.textContent = \`Active Transit Units: \${count}\`;
    if (statusEl) statusEl.textContent = \`Estimated Arrival: \${eta} mins\`;
  }

  simulateRealtimeUpdates() {
    setInterval(() => {
      this.activeBuses = Math.floor(12 + Math.random() * 6);
      console.log(\`[Telemetry Ping] Active Buses: \${this.activeBuses}\`);
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.transitApp = new TransitTelemetryEngine();
});`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

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
            <div className="text-indigo-400 font-semibold text-sm sm:text-base tracking-wide">
              Welcome to my space
            </div>

            {/* Main Greeting and Name */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Dynamic Role Line with Cursor */}
            <div className="text-xl sm:text-2xl font-bold text-white flex items-center flex-wrap gap-1.5">
              <span>I'm a</span>
              <span className="text-blue-400 font-extrabold">
                {displayedText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-blue-400 animate-pulse ml-0.5" />
            </div>

            {/* Detailed Bio Paragraph matching reference style */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              Computer Science undergraduate passionate about engineering scalable, high-performance web applications and resilient full-stack systems. Specializing in modern JavaScript, React, RESTful backend APIs, and real-time cloud deployments.
            </p>

            {/* Action Row: Download Resume + Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Primary Amber-Orange Pill Button */}
              <button
                id="hero-download-resume-btn"
                onClick={onOpenResumeModal}
                className="px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-lg shadow-orange-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-slate-950" />
                <span>Download Resume</span>
              </button>

              {/* LinkedIn Circle Button */}
              <a
                id="hero-social-linkedin"
                href="https://www.linkedin.com/in/ramesh045/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
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
                className="w-11 h-11 rounded-full bg-slate-900/80 border border-slate-700/80 hover:border-amber-400 hover:bg-amber-600/20 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all hover:scale-105 shadow-md"
              >
                <span className="font-mono font-bold text-xs">{`>_`}</span>
              </a>

              {/* Interactive Code Sandbox Toggle Button */}
              <button
                onClick={() => setShowSandbox(!showSandbox)}
                className="px-3.5 py-2 rounded-full text-xs font-mono font-semibold text-slate-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>{showSandbox ? "Hide Code Sandbox" : "Open Code Sandbox"}</span>
              </button>
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
                
                {/* Photo: Unmodified original photo fitted cleanly into the circle */}
                <img
                  src="/ramesh_photo.png"
                  alt="Ramesh S - Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top scale-[1.08] translate-y-1 transform transition-transform duration-500 group-hover:scale-[1.11]"
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

        {/* Optional Collapsible Code Playground */}
        {showSandbox && (
          <div className="mt-14 p-6 rounded-3xl bg-[#030712]/95 border border-white/10 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-300 ml-2">web-sandbox/transit-ai-telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-600 text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{previewMode ? "Editor" : "Live Output"}</span>
                </button>
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 border border-white/10 text-xs flex items-center gap-1"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="pt-4">
              {!previewMode && (
                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setActiveCodeTab('js')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${activeCodeTab === 'js' ? 'bg-amber-400 text-black' : 'bg-white/5 text-slate-400'}`}
                  >
                    app.js
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('css')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${activeCodeTab === 'css' ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-400'}`}
                  >
                    styles.css
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('html')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${activeCodeTab === 'html' ? 'bg-orange-500 text-white' : 'bg-white/5 text-slate-400'}`}
                  >
                    index.html
                  </button>
                </div>
              )}

              {previewMode ? (
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span>● LIVE TELEMETRY SIMULATION</span>
                    <span>Route #45 Active</span>
                  </div>
                  <div className="text-lg font-bold text-white">Transit AI Telemetry Engine</div>
                  <p className="text-xs text-slate-400">Pure HTML5 + Modern CSS3 + Vanilla JavaScript ES6+ Engine.</p>
                </div>
              ) : (
                <pre className="p-4 rounded-2xl bg-black/60 font-mono text-xs text-slate-300 overflow-x-auto max-h-64 leading-relaxed">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

