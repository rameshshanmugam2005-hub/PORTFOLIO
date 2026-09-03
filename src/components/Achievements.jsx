<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 51cb539543f58e1137bbcba2687bedee4d2b2016
import { ACHIEVEMENTS } from '../data/portfolioData';
import { 
  Trophy, 
  Rocket, 
  Code2, 
  Users, 
<<<<<<< HEAD
  Sparkles, 
  ShieldCheck,
  Target,
  Award,
  Zap,
  TrendingUp,
  Compass,
  HeartHandshake,
  CheckCircle2,
  Quote,
  Briefcase,
  Layers,
  ArrowRight,
  Flame,
  Check
} from 'lucide-react';

export const Achievements = () => {
  const [activeTab, setActiveTab] = useState('sports'); // 'sports' | 'engineering' | 'philosophy'

=======
  Star, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';

export const Achievements = () => {
>>>>>>> 51cb539543f58e1137bbcba2687bedee4d2b2016
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Leadership': return Users;
      case 'Deployment': return Rocket;
      case 'Coding': return Code2;
      default: return Trophy;
    }
  };

<<<<<<< HEAD
  const executiveMetrics = [
    {
      icon: Trophy,
      label: "Zonal Champion",
      sublabel: "Anna University Zone Tournament",
      badge: "Divisional Runner-Up",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/25"
    },
    {
      icon: Users,
      label: "100+ Athletes",
      sublabel: "Captained, Mentored & Coordinated",
      badge: "Team Leadership",
      color: "text-sky-400 bg-sky-500/10 border-sky-500/25"
    },
    {
      icon: Rocket,
      label: "Production Delivery",
      sublabel: "Transit AI Live in Cloud",
      badge: "Full-Stack Tech Lead",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25"
    },
    {
      icon: Award,
      label: "8.02 CGPA & 100% SSC",
      sublabel: "Academic Rigor & Consistency",
      badge: "Excellence Driven",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/25"
    }
  ];

  const sportsLeadershipFrameworks = [
    {
      title: "Composure Under Pressure & Crisis Management",
      subtitle: "High-Stakes Decision Making",
      description: "When games enter decisive closing quarters or face sudden momentum shifts, maintaining emotional stability and laser focus directly influences the entire team's confidence and execution.",
      methodology: "Instituted calm tactical resets during timeouts, replacing panic with clear situational assignments and reassuring verbal reinforcement.",
      corporateRelevance: "Translates directly to engineering incidents, tight production release deadlines, and mission-critical system escalations.",
      deliverable: "Secured clean-sheet defensive stands in final rounds to earn Zonal Championship honors."
    },
    {
      title: "Inclusive Culture & 100+ Player Mentorship",
      subtitle: "Unlocking Latent Potential",
      description: "Effective leadership requires elevating every squad member—from junior recruits to seasoned seniors—ensuring everyone understands their strategic value to the team.",
      methodology: "Structured peer pairing routines, individualized goal-setting, and an open feedback culture celebrating micro-improvements and team-first sacrifice.",
      corporateRelevance: "Cultivates an inclusive workplace where junior engineers receive constructive onboarding and feel psychologically safe to innovate.",
      deliverable: "Maintained 98%+ squad retention, high team morale, and seamless cross-department sports coordination."
    },
    {
      title: "Strategic Planning & Agile In-Game Adaptation",
      subtitle: "Outcome-Driven Execution",
      description: "Pre-match preparation must quickly adapt to real-time opposition formations and emerging game variables without losing collective cohesion.",
      methodology: "Conducted video study, established rapid formation pivoting signals, and delegated defensive sub-captains for distributed execution.",
      corporateRelevance: "Directly mirrors Agile sprint retrospectives, pivot strategies during product roadmap shifts, and proactive risk mitigation.",
      deliverable: "Pivoted tactical formations mid-match during the Anna University Zonal final to seal championship victory."
    }
  ];

  const engineeringLeadershipFrameworks = [
    {
      title: "Proactive Architecture & Dependency Triage",
      subtitle: "Eliminating Engineering Friction",
      description: "Tech leadership starts with anticipating systemic bottlenecks before they block developers, ensuring the development path is transparent and frictionless.",
      methodology: "Defined strict REST contract specifications, structured state stores, and isolated third-party API dependencies early in the Transit AI sprint cycle.",
      corporateRelevance: "Reduces cycle times, avoids costly architectural refactors late in development, and boosts peer velocity.",
      deliverable: "Delivered full-stack Transit AI with sub-second API telemetry in cloud production ahead of scheduled timeline."
    },
    {
      title: "Empathetic Code Reviews & Technical Mentorship",
      subtitle: "Upholding Craft While Building Confidence",
      description: "Code reviews should serve as collaborative teaching moments that inspire technical pride rather than adversarial gatekeeping.",
      methodology: "Paired detailed, kind inline suggestions with modular architectural examples, encouraging teammates to independently formulate scalable design patterns.",
      corporateRelevance: "Builds a high-trust engineering culture characterized by low bug regression rates and strong collective code ownership.",
      deliverable: "Zero high-severity bugs recorded in production releases; established reusable frontend component conventions.",
    },
    {
      title: "End-to-End Ownership & Production Accountability",
      subtitle: "From Local Repository to Scalable Cloud",
      description: "Leadership means taking full responsibility for the entire product lifecycle—from user experience design to automated deployment and cloud uptime.",
      methodology: "Implemented automated build pipelines, cross-browser verification, fallback health checks, and responsive layouts across all device tiers.",
      corporateRelevance: "Fosters a mindset of extreme ownership where reliability, performance, and user satisfaction are prioritized equally.",
      deliverable: "Maintained 99.9% uptime on live cloud instances with real-time route query handling."
    }
  ];

  const leadershipPrinciples = [
    {
      icon: Compass,
      title: "Strategic Clarity",
      headline: "Direction in Ambiguity",
      text: "Diagnosing complex technical or organizational challenges, translating ambiguous goals into crystal-clear milestones, and maintaining steady focus on what matters most.",
      badge: "Vision"
    },
    {
      icon: HeartHandshake,
      title: "Empathetic Empowerment",
      headline: "People First, Always",
      text: "Building environments of deep psychological safety where team members are motivated to stretch their capabilities, share unconventional ideas, and thrive.",
      badge: "Culture"
    },
    {
      icon: Flame,
      title: "Relentless Optimism",
      headline: "Unshakable Energy",
      text: "Viewing obstacles not as roadblocks, but as opportunities for collective growth and innovation. Approaching every setback with solution-oriented momentum.",
      badge: "Mindset"
    },
    {
      icon: Target,
      title: "Extreme Ownership",
      headline: "Accountability in Action",
      text: "Taking personal responsibility for team results, celebrating peer achievements visibly, and holding oneself to the highest standard of craftsmanship and integrity.",
      badge: "Execution"
    }
  ];

  return (
    <section id="achievements" className="py-24 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#050b1d] to-[#030712]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-amber-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/25 mb-3 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-tech tracking-wider uppercase">EXECUTIVE LEADERSHIP & PROFESSIONAL IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-modern-display">
            Leadership In Action & Professional Caliber
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
            Grounded in varsity championship captaincy and full-stack engineering delivery. Combining strategic clarity, relentless optimism, and empathetic mentorship to lead teams toward exceptional outcomes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-sky-400 to-indigo-500 rounded-full mt-5 shadow-sm" />
        </div>

        {/* EXECUTIVE METRICS RIBBON */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {executiveMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg hover:border-white/20 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className={`p-3 rounded-xl border ${item.color} shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-white font-modern-display">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-sans mt-0.5">
                    {item.sublabel}
                  </div>
                  <div className="mt-1.5 inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                    {item.badge}
                  </div>
=======
  return (
    <section id="achievements" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Leadership & Key Achievements
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Key milestones highlighting leadership, teamwork, full-stack deployment, and continuous competitive problem solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((ach) => {
            const Icon = getCategoryIcon(ach.category);
            return (
              <div
                key={ach.id}
                id={`achievement-card-${ach.id}`}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    {ach.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {ach.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {ach.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Category: {ach.category}</span>
>>>>>>> 51cb539543f58e1137bbcba2687bedee4d2b2016
                </div>
              </div>
            );
          })}
        </div>

<<<<<<< HEAD
        {/* LEADERSHIP PHILOSOPHY SPOTLIGHT CARD */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            <div className="p-4 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30 shrink-0">
              <Quote className="w-8 h-8" />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30">
                <span>OPTIMISTIC LEADERSHIP ETHOS</span>
              </div>
              
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-white font-serif-luxury italic leading-snug">
                "Leadership is not defined by authority; it is defined by the capacity to translate collective potential into tangible excellence. When we pair ambitious standards with genuine empathy and relentless optimism, teams don’t just meet expectations—they shatter them."
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="text-white font-semibold font-tech text-sm">— Ramesh S</span>
                <span className="text-slate-600">•</span>
                <span>Varsity Captain & Full-Stack Tech Lead</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Growth-Mindset Advocate</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 CORE LEADERSHIP PRINCIPLES */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-modern-display">
              Core Leadership Pillars
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Guiding principles forged on the sports pitch, sharpened through software engineering sprints, and applied consistently across team endeavors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadershipPrinciples.map((principle, pIdx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                        {principle.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white font-modern-display mb-1">
                      {principle.title}
                    </h4>
                    <div className="text-xs font-semibold text-amber-400 mb-2 font-tech">
                      {principle.headline}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {principle.text}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Practiced In Every Project</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE LEADERSHIP DOMAINS: ATHLETIC CAPTAINCY vs. ENGINEERING TECH LEAD */}
        <div className="mb-20 rounded-3xl bg-slate-900/80 border border-slate-700/80 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
          
          {/* Domain Tab Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                  Professional Leadership Domains
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-modern-display">
                Strategic Playbooks & Tangible Impact
              </h3>
            </div>

            {/* Tab Buttons */}
            <div className="bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 flex items-center gap-1.5 self-start sm:self-auto">
              <button
                id="btn-tab-sports-leadership"
                onClick={() => setActiveTab('sports')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold font-tech flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'sports'
                    ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>Athletic Captaincy</span>
              </button>

              <button
                id="btn-tab-engineering-leadership"
                onClick={() => setActiveTab('engineering')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold font-tech flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'engineering'
                    ? 'bg-sky-500 text-white shadow-md font-extrabold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Rocket className="w-4 h-4" />
                <span>Engineering Tech Lead</span>
              </button>
            </div>
          </div>

          {/* TAB 1: ATHLETIC CAPTAINCY PLAYBOOK */}
          {activeTab === 'sports' && (
            <div className="mt-8 space-y-6">
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-amber-300 font-tech uppercase tracking-wider">
                    Domain Overview: Varsity Hockey Team Captain
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-sans">
                    Steered the college varsity squad to an Anna University Zonal Championship and Divisional Runner-Up finish. Supervised daily high-intensity training, coordinated competitive logistics, and built unity across 100+ athletes.
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-amber-500/30 text-xs font-mono text-amber-400 whitespace-nowrap">
                  100+ Athletes Mentored
                </div>
              </div>

              {/* Case Studies Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {sportsLeadershipFrameworks.map((fw, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                          Framework #{fIdx + 1}
                        </span>
                        <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          <Trophy className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white font-modern-display">
                        {fw.title}
                      </h4>
                      <div className="text-xs font-semibold text-slate-400 font-tech">
                        {fw.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {fw.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                        <div>
                          <span className="text-amber-400 font-mono font-semibold">Strategic Execution: </span>
                          <span className="text-slate-300">{fw.methodology}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-800">
                          <span className="text-sky-400 font-mono font-semibold">Professional Transfer: </span>
                          <span className="text-slate-300">{fw.corporateRelevance}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-start gap-2 text-xs font-mono text-emerald-400">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{fw.deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: ENGINEERING TECH LEAD PLAYBOOK */}
          {activeTab === 'engineering' && (
            <div className="mt-8 space-y-6">
              <div className="p-5 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-sky-300 font-tech uppercase tracking-wider">
                    Domain Overview: Full-Stack Project Tech Lead
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-sans">
                    Architected and deployed full-stack web applications including Transit AI in live cloud production. Spearheaded API design contracts, facilitated agile sprints, and mentored team members through code reviews and collaborative pair programming.
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-sky-500/30 text-xs font-mono text-sky-400 whitespace-nowrap">
                  Production Cloud Deployments
                </div>
              </div>

              {/* Case Studies Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {engineeringLeadershipFrameworks.map((fw, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-wider">
                          Framework #{fIdx + 1}
                        </span>
                        <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          <Rocket className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white font-modern-display">
                        {fw.title}
                      </h4>
                      <div className="text-xs font-semibold text-slate-400 font-tech">
                        {fw.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {fw.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                        <div>
                          <span className="text-sky-400 font-mono font-semibold">Strategic Execution: </span>
                          <span className="text-slate-300">{fw.methodology}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-800">
                          <span className="text-emerald-400 font-mono font-semibold">Professional Transfer: </span>
                          <span className="text-slate-300">{fw.corporateRelevance}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-start gap-2 text-xs font-mono text-emerald-400">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{fw.deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ACHIEVEMENTS MILESTONE CARDS */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-modern-display">
              Key Verified Milestones
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Tangible evidence of competitive distinction, full-stack deployment, and continuous algorithmic mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ACHIEVEMENTS.map((ach) => {
              const Icon = getCategoryIcon(ach.category);
              return (
                <div
                  key={ach.id}
                  id={`achievement-card-${ach.id}`}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-amber-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      {ach.highlight && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          {ach.highlight}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 font-modern-display">
                      {ach.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {ach.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{ach.category}</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Verified Distinction</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

=======
>>>>>>> 51cb539543f58e1137bbcba2687bedee4d2b2016
      </div>
    </section>
  );
};
