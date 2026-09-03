import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  FileCheck2 
} from 'lucide-react';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl">
            Verified assessments and coursework validating core technical concepts in programming, database querying, and data analytics.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-white/5 text-slate-300 border border-white/5">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-blue-400 mb-4">
                  {cert.issuer}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-slate-300 border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Credential
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
