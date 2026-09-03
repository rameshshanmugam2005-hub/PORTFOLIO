import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Code2, 
  Mail, 
  Sparkles, 
  Target, 
  BookOpen, 
  Briefcase,
  CheckCircle2
} from 'lucide-react';

export const About = () => {
  const quickStats = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.E. Computer Science",
      detail: "VSB College of Engineering (2023–2027)",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: Code2,
      label: "Academics",
      value: "8.02 CGPA",
      detail: "Consistent high academic performance",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      detail: "Coimbatore / Pollachi Region",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Target,
      label: "Focus",
      value: "Software & Web Engineering",
      detail: "Full-Stack Web Systems & Distributed APIs",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Passionate software engineer and full-stack developer dedicated to building high-performance architectures, scalable REST APIs, and resilient web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {quickStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                id={`about-stat-${idx}`}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Narrative & Portrait Bento */}
        <div className="space-y-8">
          
          {/* Top Bento Row: Portrait Photo Card + Core Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Portrait Photo Column (Unmodified Image in Same Format) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none -z-10" />
              
              <div className="space-y-4">
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-xl group-hover:border-blue-500/40 transition-all duration-300">
                  <img
<<<<<<< HEAD
                    src="/profile.jpg"
                    alt="Ramesh S - Software Engineer"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "/ramesh_photo.png";
                    }}
=======
                    src="/ramesh_photo.png"
                    alt="Ramesh S - Frontend & Web Developer"
                    referrerPolicy="no-referrer"
>>>>>>> 51cb539543f58e1137bbcba2687bedee4d2b2016
                    className="w-full h-auto object-cover max-h-[460px] transform group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  
                  {/* Status Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-bold text-white tracking-wide">Ramesh S</span>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 font-semibold">
                      CSE (2023–2027)
                    </span>
                  </div>
                </div>

                {/* Quick Info Under Photo */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Role Focus</span>
                    <span className="font-bold text-white mt-0.5 block">Software Engineer</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Location</span>
                    <span className="font-bold text-white mt-0.5 block">Tamil Nadu, IN</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>✦ Verified Engineer</span>
                <span className="text-emerald-400 font-semibold">Available for Hire</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>ENGINEERING PROFILE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Software Engineer & Full-Stack Developer dedicated to engineering clean, accessible, and high-performance digital systems.
                </h3>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I am a <strong className="text-white font-semibold">Computer Science and Engineering undergraduate</strong> specializing in modern web architecture, frontend systems, scalable <strong className="text-purple-400 font-semibold">Node.js / Express</strong> backends, and relational <strong className="text-blue-400 font-semibold">SQL database schemas</strong>. I take pride in crafting pixel-perfect, accessible, and responsive user experiences with clean engineering discipline.
                </p>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Through my software development internship and end-to-end projects, I have engineered production-ready platforms such as <strong className="text-blue-400 font-semibold">Transit AI</strong>, delivering real-time vehicle telemetry, dynamic route tracking, asynchronous REST API data pipelines, and embedded conversational AI logic.
                </p>

                {/* Core Interests Tags */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Core Engineering Focus:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PERSONAL_INFO.interests.map((interest, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-3 py-1.5 rounded-lg text-xs bg-white/5 text-slate-200 border border-white/10 flex items-center gap-1.5 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Code2 className="w-4 h-4" />
                  Full-Stack Development • Modern Web Architecture
                </span>
                <span className="text-slate-400 font-sans">
                  Coimbatore / Pollachi, Tamil Nadu
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Bento Row: Technical DNA Checklist */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/30 via-slate-900/40 to-purple-950/30 border border-blue-500/20 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Technical DNA</span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white mb-6">
              What I Bring to Engineering Teams
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">Clean Semantic Web Design</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Writing structured HTML5, responsive CSS layouts, and modern ES6+ scripts with zero layout shifts and high a11y accessibility scores.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">Full-Stack Foundation</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Bridging responsive web interfaces with RESTful APIs, Node.js endpoints, and relational SQL database queries.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">Leadership & Collaboration</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Proven leadership as college hockey captain, coordinating high-pressure team execution, strategy, and mutual accountability.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-white mb-1">Relentless Problem Solving</h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Active algorithmic practice across data structures, LeetCode, Java OOP concepts, and practical browser debugging.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Availability: Immediate Joining</span>
              <span className="text-emerald-400 font-semibold">Ready for Frontend / SDE Roles</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
