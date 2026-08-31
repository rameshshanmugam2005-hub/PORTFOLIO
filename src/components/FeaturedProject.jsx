import React, { useState, useEffect } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from './ProjectCaseStudy';
import transitAiShowcaseImg from '../assets/images/transit_ai_showcase_1788155001101.jpg';
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp, 
  Bus, 
  QrCode, 
  Radio, 
  Users, 
  Bot, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Navigation,
  Clock,
  Gauge,
  Activity,
  Layers,
  Zap,
  ShieldCheck,
  Compass,
  Info
} from 'lucide-react';

export const FeaturedProject = () => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [activeSimTab, setActiveSimTab] = useState('visual'); // 'visual' | 'telemetry' | 'ai' | 'ticket' | 'architecture'
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [simulatedQueryIndex, setSimulatedQueryIndex] = useState(0);
  const [busProgress, setBusProgress] = useState(45);
  const [isZoomed, setIsZoomed] = useState(false);

  const project = FEATURED_PROJECTS[0];

  // Continuous subtle bus motion simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setBusProgress((prev) => (prev >= 90 ? 15 : prev + 1.5));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const aiQueries = [
    { 
      q: "What is the fastest bus to City Tech Campus?", 
      a: "Transit Express #24 arrives at Central Station in 3 mins. Current occupancy: 42% (Low congestion). Estimated transit time: 14 mins.",
      category: "Route Optimization"
    },
    { 
      q: "Is Route 12 running on time today?", 
      a: "Route 12 has a minor 3-minute signal delay near East Boulevard. Alternate Express #24 is recommended for faster arrival.",
      category: "Live Telemetry"
    },
    { 
      q: "Generate instant QR boarding pass for Express #24", 
      a: "QR Boarding Pass #TRX-9842 generated and verified. Fare $2.50 deducted. Present QR code at bus terminal scanner.",
      category: "Ticketing"
    }
  ];

  const hotspots = [
    {
      id: 'telemetry',
      title: 'Real-Time Bus Telemetry & GPS Hub',
      desc: 'Dynamic vehicle tracking engine polling bus telemetry at 2.5-second intervals with speed, route path, and live coordinates.',
      tech: 'Node.js • Express • Async Polling',
      x: '28%',
      y: '32%',
      badge: 'Live GPS'
    },
    {
      id: 'ai-assistant',
      title: 'AI Commuter Intelligence Widget',
      desc: 'Conversational assistant answering route queries, alternative transit schedules, and traffic delay predictions in real-time.',
      tech: 'AI Logic Engine • NLP Context',
      x: '75%',
      y: '28%',
      badge: 'AI Assistant'
    },
    {
      id: 'occupancy',
      title: 'Crowd Density & Congestion Analytics',
      desc: 'Real-time passenger density gauges and seat availability sensors to prevent overcrowding before boarding.',
      tech: 'Data Visualizers • Capacity Gauges',
      x: '35%',
      y: '68%',
      badge: 'Analytics'
    },
    {
      id: 'qr-ticket',
      title: 'Instant QR Boarding Pass Verification',
      desc: 'Cryptographic digital boarding passes with real-time scanner validation for seamless terminal boarding.',
      tech: 'QR Verification • Security API',
      x: '82%',
      y: '72%',
      badge: 'QR Validation'
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative bg-gradient-to-b from-[#030712] via-[#060e24] to-[#030712] overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Enhanced Display Typography */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-blue-400 bg-blue-500/10 border border-blue-500/25 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>FLAGSHIP PROJECT SHOWCASE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Engineering Work</span>
          </h2>
          
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            An end-to-end full-stack smart transit platform engineered with modern HTML5, CSS3, JavaScript (ES6+), Node.js/Express APIs, dynamic telemetry polling, and an AI commuter intelligence assistant.
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mt-5 shadow-lg shadow-blue-500/30" />
        </div>

        {/* Large Premium Project Card Container */}
        <div 
          id="featured-project-card"
          className="rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden transition-all duration-300 hover:border-white/20"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* Top Bar: Category, Project Identity & Quick Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider text-blue-300 bg-blue-500/15 border border-blue-400/30">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE PRODUCTION DEPLOYMENT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display pt-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 font-sans">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  id="project-live-demo-btn"
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Launch Live App</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  id="project-github-repo-btn"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 border border-white/15 hover:bg-white/10 text-white transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 items-start">
              
              {/* Left Column: Project Architecture, Highlights & Specs */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-400" />
                    PROJECT OVERVIEW
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics / Technical Stats */}
                <div className="grid grid-cols-3 gap-2.5 py-1">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <div className="text-lg font-extrabold text-blue-400 font-mono">2.5s</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Telemetry Polling</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <div className="text-lg font-extrabold text-emerald-400 font-mono">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Zero Lag UI</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <div className="text-lg font-extrabold text-purple-400 font-mono">AI-Ready</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">NLP Assistant</div>
                  </div>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1.5">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider font-mono flex items-center gap-1">
                      <span>⚠️ Problem Solved</span>
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1">
                      <span>✨ Engineering Solution</span>
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Engineered Features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    KEY ENGINEERED MODULES
                  </h4>
                  <div className="space-y-2">
                    {project.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    TECH STACK & TOOLS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono bg-white/5 text-slate-200 border border-white/10 hover:border-blue-400/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* My Contribution Card */}
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/25 space-y-1">
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                    MY CORE CONTRIBUTION
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {project.myContribution}
                  </p>
                </div>

              </div>

              {/* Right Column: Visual Image Stimulation & Interactive Mode Suite */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Simulator Control Container */}
                <div className="rounded-2xl bg-[#030712] border border-white/15 text-slate-100 overflow-hidden shadow-2xl">
                  
                  {/* Browser Bar Frame */}
                  <div className="bg-slate-950 px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/90" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
                      <span className="ml-2 text-xs font-mono text-slate-400 truncate max-w-[220px] sm:max-w-none">
                        https://transit-ai-1mot.onrender.com
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        ONLINE
                      </span>
                    </div>
                  </div>

                  {/* Interactive Simulation Modes Tabs */}
                  <div className="bg-slate-900/80 p-2 flex flex-wrap items-center gap-1.5 border-b border-white/10">
                    <button
                      id="sim-tab-visual"
                      onClick={() => { setActiveSimTab('visual'); setActiveHotspot(null); }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeSimTab === 'visual'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Visual UI Showcase</span>
                    </button>

                    <button
                      id="sim-tab-telemetry"
                      onClick={() => setActiveSimTab('telemetry')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeSimTab === 'telemetry'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <Bus className="w-3.5 h-3.5" />
                      <span>Live GPS Telemetry</span>
                    </button>

                    <button
                      id="sim-tab-ai"
                      onClick={() => setActiveSimTab('ai')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeSimTab === 'ai'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>AI Assistant</span>
                    </button>

                    <button
                      id="sim-tab-ticket"
                      onClick={() => setActiveSimTab('ticket')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        activeSimTab === 'ticket'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span>QR Boarding Pass</span>
                    </button>
                  </div>

                  {/* Tab 1: Visual Image Stimulation & Interactive Hotspots */}
                  {activeSimTab === 'visual' && (
                    <div className="relative animate-in fade-in duration-200">
                      
                      {/* High-Resolution Generated Project UI Screenshot Frame */}
                      <div className="relative group overflow-hidden bg-slate-950">
                        <img 
                          src={transitAiShowcaseImg} 
                          alt="Transit AI UI Simulation Interface"
                          className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />

                        {/* Dark gradient overlay for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Interactive Hotspot Pins Overlaid on Key Features */}
                        {hotspots.map((spot) => (
                          <div 
                            key={spot.id}
                            style={{ left: spot.x, top: spot.y }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                          >
                            <button
                              onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                              className="relative group/pin p-2 cursor-pointer focus:outline-none"
                              aria-label={`Explore ${spot.title}`}
                            >
                              {/* Glowing Ripple Ring */}
                              <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />
                              <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white border-2 border-white shadow-xl hover:scale-110 transition-transform">
                                <Sparkles className="w-3.5 h-3.5" />
                              </span>
                              <span className="absolute left-1/2 -translate-x-1/2 top-8 whitespace-nowrap px-2 py-0.5 rounded bg-slate-950/90 text-blue-300 text-[10px] font-mono border border-blue-500/30 opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none shadow-lg">
                                {spot.badge}
                              </span>
                            </button>
                          </div>
                        ))}

                        {/* Floating Live Telemetry HUD Card on the image */}
                        <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex flex-wrap items-center justify-between gap-2 shadow-2xl">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                              <Bus className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                <span>Transit AI • Route #24 Express</span>
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300">Tracking Active</span>
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">
                                Central Station ➔ Tech Campus • Next stop: 3m
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">
                              Occupancy: 42%
                            </span>
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition flex items-center gap-1 shadow"
                            >
                              <span>Try Live</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>

                      </div>

                      {/* Hotspot Technical Drawer (If a hotspot is clicked) */}
                      {activeHotspot && (
                        <div className="p-4 bg-slate-900 border-t border-blue-500/30 space-y-2 animate-in slide-in-from-bottom-2 duration-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                {activeHotspot.badge}
                              </span>
                              <h5 className="text-xs font-bold text-white font-mono">
                                {activeHotspot.title}
                              </h5>
                            </div>
                            <button
                              onClick={() => setActiveHotspot(null)}
                              className="text-xs text-slate-400 hover:text-white cursor-pointer"
                            >
                              ✕ Close
                            </button>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed font-sans">
                            {activeHotspot.desc}
                          </p>
                          <div className="text-[11px] font-mono text-emerald-400 pt-1">
                            Architecture: <span className="text-slate-300">{activeHotspot.tech}</span>
                          </div>
                        </div>
                      )}

                      {/* Tip caption below showcase */}
                      <div className="px-4 py-2 bg-slate-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-blue-400" />
                          Click on the glowing interactive pins to inspect engineered modules.
                        </span>
                        <span className="text-slate-500 hidden sm:inline">Visual Simulation • Transit AI</span>
                      </div>

                    </div>
                  )}

                  {/* Tab 2: Live GPS Telemetry Simulation */}
                  {activeSimTab === 'telemetry' && (
                    <div className="p-5 space-y-4 animate-in fade-in duration-200 bg-slate-950">
                      
                      {/* Active Route Tracker Progress */}
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white font-bold flex items-center gap-2">
                            <Compass className="w-4 h-4 text-blue-400 animate-spin" />
                            Live Route #24 Express Progress
                          </span>
                          <span className="font-mono text-blue-400 font-bold">Speed: 42 km/h</span>
                        </div>

                        {/* Animated Route Progress Bar */}
                        <div className="relative pt-4 pb-2">
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-700" 
                              style={{ width: `${busProgress}%` }}
                            />
                          </div>

                          {/* Stop Stations */}
                          <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
                            <div className="flex flex-col items-start">
                              <span className="text-emerald-400 font-bold">● Central Station</span>
                              <span className="text-[9px] text-slate-500">Departed 09:00</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-blue-400 font-bold">● Tech Park Stop</span>
                              <span className="text-[9px] text-blue-300">Approaching (3m)</span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-slate-400">● Tech Campus</span>
                              <span className="text-[9px] text-slate-500">ETA 09:18</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Passenger Occupancy & Density Metrics */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-purple-400" />
                              Passenger Density
                            </span>
                            <span className="font-mono font-bold text-amber-400">42% (Moderate)</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 w-[42%]" />
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                            <span>Low Congestion</span>
                            <span>Seats Open: 22</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-blue-400" />
                              Telemetry Polling Health
                            </span>
                            <span className="font-mono text-emerald-400 font-bold">200 OK</span>
                          </div>
                          <div className="text-[11px] font-mono text-slate-400">
                            Latency: <span className="text-emerald-300 font-bold">48ms</span> • Polling: <span className="text-blue-300">2.5s</span>
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Bandwidth-optimized JSON payload format
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Tab 3: AI Assistant Interactive Chat Simulator */}
                  {activeSimTab === 'ai' && (
                    <div className="p-5 space-y-4 animate-in fade-in duration-200 bg-slate-950">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-mono text-blue-400 flex items-center gap-2">
                          <Bot className="w-4 h-4 text-blue-400" />
                          <span>AI Transit Commuter Assistant (Live Query Demo)</span>
                        </div>
                        <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          NLP Assisted
                        </span>
                      </div>

                      {/* Interactive Sample Questions */}
                      <div className="space-y-2">
                        {aiQueries.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSimulatedQueryIndex(idx)}
                            className={`w-full text-left p-3 rounded-xl text-xs transition-all cursor-pointer ${
                              simulatedQueryIndex === idx
                                ? 'bg-blue-600/20 border border-blue-500/50 text-white shadow-lg'
                                : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-200">" {item.q} "</span>
                              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                                {item.category}
                              </span>
                            </div>
                            
                            {simulatedQueryIndex === idx && (
                              <div className="mt-2.5 pt-2.5 border-t border-blue-500/20 text-blue-200 font-sans text-xs leading-relaxed flex items-start gap-2 animate-in fade-in duration-150">
                                <div className="p-1 rounded bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                                  <Bot className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="font-semibold text-blue-300 text-[11px] font-mono mb-0.5">TRANSIT AI RESPONSE:</div>
                                  <div>{item.a}</div>
                                </div>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>

                    </div>
                  )}

                  {/* Tab 4: QR Boarding Pass Simulator */}
                  {activeSimTab === 'ticket' && (
                    <div className="p-6 space-y-4 animate-in fade-in duration-200 text-center bg-slate-950">
                      <div className="max-w-sm mx-auto p-5 rounded-2xl bg-white text-slate-950 shadow-2xl border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <div className="flex items-center gap-1.5">
                            <Bus className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-bold tracking-wider uppercase font-mono">TRANSIT AI BOARDING PASS</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                            VERIFIED
                          </span>
                        </div>

                        <div className="flex justify-center py-2">
                          <div className="p-3 bg-slate-900 rounded-xl">
                            <QrCode className="w-24 h-24 text-white" />
                          </div>
                        </div>

                        <div className="space-y-1 text-center">
                          <div className="text-sm font-extrabold font-mono text-slate-900">#TRX-2026-RAMESH-045</div>
                          <div className="text-xs text-slate-600 font-medium">Route #24 Express • Central ➔ Tech Hub</div>
                          <div className="text-[11px] text-slate-500 font-mono">Seat 14B • Zone A • Priority Boarding</div>
                        </div>

                        <div className="pt-2 border-t border-dashed border-slate-300 flex items-center justify-between text-[11px] font-mono text-slate-600">
                          <span>Valid for: Today</span>
                          <span className="text-emerald-600 font-bold">Scan at Turnstile</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Footer inside simulator */}
                  <div className="p-4 bg-slate-950 border-t border-white/10 flex items-center justify-between flex-wrap gap-2 text-xs">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Production Server Running on Render Cloud
                    </span>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-white font-medium transition"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold transition"
                      >
                        <span>Open Standalone App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Expand In-Depth Case Study Trigger */}
            <div className="mt-10 pt-6 border-t border-white/10 flex justify-center">
              <button
                id="toggle-case-study-btn"
                onClick={() => setShowCaseStudy(!showCaseStudy)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{showCaseStudy ? "Hide Technical Case Study" : "View Comprehensive Case Study (8 Technical Sections)"}</span>
                {showCaseStudy ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-blue-400" />}
              </button>
            </div>

            {/* Expanded Case Study Drawer */}
            {showCaseStudy && (
              <ProjectCaseStudy 
                caseStudy={project.caseStudy} 
                onClose={() => setShowCaseStudy(false)} 
              />
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
