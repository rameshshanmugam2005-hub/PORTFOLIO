import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  Building, 
  CheckCircle2, 
  PlusCircle, 
  Sparkles, 
  Layers,
  GraduationCap
} from 'lucide-react';

export const Experience = () => {
  const [showAddPlaceholder, setShowAddPlaceholder] = useState(false);

  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience & Learning
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl leading-relaxed">
            Currently building practical projects and continuously improving my technical and problem-solving skills while looking for opportunities to apply them in a professional environment.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              id={`experience-item-${exp.id}`}
              className="relative pl-6 sm:pl-8 border-l-2 border-white/10 hover:border-blue-500 transition-colors"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#030712] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-4">
                  <Building className="w-4 h-4 text-blue-400" />
                  <span>{exp.organization}</span>
                </div>

                {/* Description Bullets */}
                <div className="space-y-2 mb-4">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Professional Engineering Practices Showcase */}
          <div className="pt-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-950/20 via-slate-900/30 to-purple-950/20 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENGINEERING WORKFLOW STANDARDS</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                Practiced Team & Production Disciplines
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Demonstrating rigorous developer habits refined through internship execution, continuous open-source projects, and collaborative engineering.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Git & PR Workflows</span>
                    <span className="text-[11px] text-slate-400 leading-normal">Feature branching, atomic commits, and pull request reviews.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Cross-Browser & a11y Audits</span>
                    <span className="text-[11px] text-slate-400 leading-normal">WCAG standards, semantic elements, and device responsive QA.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">REST API Integration</span>
                    <span className="text-[11px] text-slate-400 leading-normal">HTTP status conventions, error handling boundaries, and JSON schemas.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Continuous Delivery</span>
                    <span className="text-[11px] text-slate-400 leading-normal">Automated cloud deployment with live health monitoring and zero-downtime builds.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
