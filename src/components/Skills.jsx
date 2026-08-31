import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Server, 
  Cloud,
  Sparkles,
  Terminal,
  Zap,
  CheckCircle,
  Cpu,
  Layers,
  Layout,
  Palette,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity
} from 'lucide-react';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePillarTab, setActivePillarTab] = useState('frontend');

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.categoryKey === selectedCategory);

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'frontend': return Code;
      case 'backend': return Server;
      case 'databases': return Database;
      case 'devops': return Wrench;
      default: return Layers;
    }
  };

  const engineeringPillars = {
    frontend: {
      title: "Frontend Engineering & Reactive UI",
      color: "from-blue-500/20 to-cyan-500/10",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      badge: "User Interface & Experience",
      description: "Architecting modular, accessible, and high-performance user interfaces utilizing modern JavaScript (ES6+), React component systems, Tailwind CSS, and fluid mobile-first layouts.",
      features: [
        "Modern Component Hierarchy: Reusable React patterns, hooks & state lifecycles",
        "JavaScript & TypeScript: Async/await, event delegation, closures & Web APIs",
        "Responsive Grid & Flexbox: Mobile-first responsive layouts from 320px to 4K displays",
        "Web Accessibility (a11y) & SEO: Semantic landmarks, ARIA roles, and high Lighthouse audits",
        "Micro-Interactions & Styling: GPU-accelerated CSS keyframe animations and glassmorphism"
      ]
    },
    backend: {
      title: "Backend Services & RESTful APIs",
      color: "from-purple-500/20 to-indigo-500/10",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      badge: "Server Architecture & APIs",
      description: "Developing scalable backend services, lightweight REST endpoints, asynchronous request pipelines, and secure data serialization with Node.js and Express.",
      features: [
        "RESTful API Design: Clean routing, status code conventions, and JSON serialization",
        "Asynchronous Telemetry: Non-blocking client-server polling with optimized bandwidth",
        "Middleware & Security: Request validation, error boundaries, and rate limiting",
        "AI Assistant Logic: Natural language query routers and real-time response handlers",
        "Microservices Integration: Decoupled service endpoints for modular scalability"
      ]
    },
    systems: {
      title: "Databases & Core Computer Science",
      color: "from-amber-500/20 to-orange-500/10",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/30",
      badge: "Data & Algorithmic Foundations",
      description: "Modeling normalized relational database schemas, writing optimized SQL queries, and implementing data structures and object-oriented architectures in Java.",
      features: [
        "Relational Schema Modeling: PostgreSQL / SQL queries, joins, indexes & constraints",
        "Object-Oriented Design: Java OOP principles, class abstraction & modular packaging",
        "Algorithmic Problem Solving: Consistent LeetCode practice on arrays, two-pointers, and hashing",
        "Data Integrity & ACID: Structured transactions and query performance tuning",
        "Clean Code Standards: Separation of concerns, design patterns, and maintainability"
      ]
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Stack & Engineering Mastery
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            A comprehensive breakdown of frontend architecture, backend services, relational databases, and modern developer tooling.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Featured Core Engineering Pillars Spotlight */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Engineering Focus
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Key Architectural Pillars
              </h3>
            </div>

            {/* Switch Tabs */}
            <div className="flex items-center p-1 bg-black/40 border border-white/10 rounded-2xl gap-1">
              <button
                onClick={() => setActivePillarTab('frontend')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePillarTab === 'frontend'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Frontend Systems</span>
              </button>

              <button
                onClick={() => setActivePillarTab('backend')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePillarTab === 'backend'
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span>Backend & APIs</span>
              </button>

              <button
                onClick={() => setActivePillarTab('systems')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePillarTab === 'systems'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>Databases & Logic</span>
              </button>
            </div>
          </div>

          {/* Active Highlight Card Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-white/5 border border-white/10 text-slate-300">
                {engineeringPillars[activePillarTab].badge}
              </div>
              <h4 className={`text-2xl font-extrabold ${engineeringPillars[activePillarTab].textColor}`}>
                {engineeringPillars[activePillarTab].title}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {engineeringPillars[activePillarTab].description}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-2.5 bg-black/40 p-5 rounded-2xl border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Core Capabilities & Architectural Patterns:
              </span>
              {engineeringPillars[activePillarTab].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${engineeringPillars[activePillarTab].textColor}`} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="skill-filter-all"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            All Competencies
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.categoryKey}
              id={`skill-filter-${cat.categoryKey}`}
              onClick={() => setSelectedCategory(cat.categoryKey)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.categoryKey
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const CategoryIcon = getCategoryIcon(category.categoryKey);
            return (
              <div
                key={category.categoryKey}
                id={`skill-category-${category.categoryKey}`}
                className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.skills.length} core proficiencies
                      </span>
                    </div>
                  </div>

                  {/* Skill Items Badges */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        id={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-400/30 hover:bg-white/[0.05] transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            {skill.name}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="mt-1 text-xs text-slate-400 leading-relaxed pl-3.5">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 font-medium shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>Passionate about writing modular code, scalable REST APIs, and responsive web systems.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
