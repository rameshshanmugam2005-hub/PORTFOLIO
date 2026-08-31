import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { 
  Trophy, 
  Rocket, 
  Code2, 
  Users, 
  Star, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';

export const Achievements = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Leadership': return Users;
      case 'Deployment': return Rocket;
      case 'Coding': return Code2;
      default: return Trophy;
    }
  };

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
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
