import React from 'react';
import { EDUCATIONS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Building2, 
  MapPin, 
  Calendar, 
  Award, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Formal foundations in Computer Science and Engineering principles, mathematics, and software design.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATIONS.map((edu, idx) => (
            <div
              key={idx}
              id={`education-card-${idx}`}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  
                  {/* Degree Name */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location & Period Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.period}
                    </span>
                  </div>

                </div>

                {/* Score / Grade Badge */}
                <div className="sm:text-right shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/25 text-xs font-mono font-bold">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>{edu.score}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                  {edu.highlights.map((highlight, hIdx) => (
                    <p key={hIdx} className="text-xs sm:text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
