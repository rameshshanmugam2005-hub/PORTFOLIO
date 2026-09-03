import React from 'react';
import { SOCIAL_PROFILES } from '../data/portfolioData';
import { 
  Linkedin, 
  Github, 
  Code2, 
  ExternalLink, 
  Sparkles, 
  Share2 
} from 'lucide-react';

export const Profiles = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'Linkedin': return Linkedin;
      case 'Github': return Github;
      case 'Code2': return Code2;
      default: return ExternalLink;
    }
  };

  return (
    <section id="profiles" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Share2 className="w-3.5 h-3.5" />
            <span>ONLINE PRESENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Connect With Me
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Explore my professional network, open-source repositories, and competitive programming problem solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Profiles Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
=======
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
>>>>>>> 51cb539543f58e1137bbcba2687bedee4d2b2016
          {SOCIAL_PROFILES.map((profile, idx) => {
            const Icon = getIcon(profile.iconName);
            return (
              <div
                key={idx}
                id={`profile-card-${profile.name.toLowerCase()}`}
                className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    {profile.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/5 text-slate-300 border border-white/5">
                        {profile.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {profile.name}
                  </h3>
                  
                  <p className="text-xs font-mono text-blue-400 mb-3 truncate">
                    {profile.username}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {profile.description}
                  </p>
                </div>

                <a
                  id={`profile-btn-${profile.name.toLowerCase()}`}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 text-white border border-white/10 hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer shadow-sm group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent"
                >
                  <span>{profile.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

<<<<<<< HEAD
        {/* LeetCode & GitHub Activity Deep-Dive Showcase */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider mb-1">
                <Code2 className="w-3.5 h-3.5" />
                <span>ACTIVE CODING DISCIPLINE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                LeetCode & GitHub Development Activity
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Daily Practice & Clean Commits</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* LeetCode Focus Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                      LeetCode
                    </span>
                    <span className="text-xs font-mono text-slate-400">@rameshshanmugam45</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">Active Practice</span>
                </div>

                <h4 className="text-sm font-bold text-white mb-2">Algorithmic Problem Solving</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Practicing data structure manipulations, time and space complexity optimizations, and modular problem decompositions in Java and JavaScript.
                </p>

                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Key Algorithmic Areas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Arrays & Hashing", "Two Pointers", "Sliding Window", "Binary Search", "String Algorithms", "Java OOP"].map((topic, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/rameshshanmugam45/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/30 transition-all cursor-pointer"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* GitHub Engineering Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                      GitHub
                    </span>
                    <span className="text-xs font-mono text-slate-400">@rameshshanmugam2005-hub</span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-400 font-semibold">Open Source</span>
                </div>

                <h4 className="text-sm font-bold text-white mb-2">Production & Academic Repositories</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Maintaining clean Git commit histories, semantic versioning, responsive frontend prototypes, and full-stack web applications deployed to the cloud.
                </p>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white">TRANSIT_AI</span>
                    <span className="text-[10px] font-mono text-emerald-400">Public Repo</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Real-time transit telemetry platform with Node.js, Express, async polling, AI assistant, and QR ticketing.
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/rameshshanmugam2005-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/30 transition-all cursor-pointer"
              >
                <span>Explore GitHub Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

=======
>>>>>>> 51cb539543f58e1137bbcba2687bedee4d2b2016
      </div>
    </section>
  );
};
