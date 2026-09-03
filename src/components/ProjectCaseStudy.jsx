import React from 'react';
import { 
  AlertCircle, 
  Compass, 
  Code2, 
  Star, 
  Flame, 
  CheckCircle2, 
  Trophy, 
  Rocket, 
  ChevronUp 
} from 'lucide-react';

export const ProjectCaseStudy = ({ caseStudy, onClose }) => {
  const sections = [
    {
      num: "01",
      title: "Problem Statement",
      icon: AlertCircle,
      content: caseStudy.problem,
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      num: "02",
      title: "Approach & Architecture",
      icon: Compass,
      content: caseStudy.approach,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      num: "03",
      title: "Technologies & Tools",
      icon: Code2,
      list: caseStudy.technologies,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      num: "04",
      title: "Key Engineered Features",
      icon: Star,
      list: caseStudy.keyFeatures,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      num: "05",
      title: "Challenges Overcome",
      icon: Flame,
      list: caseStudy.challenges,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      num: "06",
      title: "Solution & Optimization",
      icon: CheckCircle2,
      content: caseStudy.solution,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      num: "07",
      title: "Result & Deployment",
      icon: Trophy,
      content: caseStudy.result,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      num: "08",
      title: "Future Improvements",
      icon: Rocket,
      list: caseStudy.futureImprovements,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <div 
      id="case-study-expanded-view"
      className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>In-Depth Project Case Study</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 font-mono font-semibold">
              8 Architectural Sections
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Detailed engineering breakdown of architectural decisions, problem solving, telemetry pipelines, and technical execution.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://transit-ai-1mot.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all cursor-pointer shadow-md"
          >
            <span>Live App</span>
            <Rocket className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Collapse</span>
            <ChevronUp className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>

      {/* Recruiter Metric Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
        <div className="text-center p-2">
          <div className="text-lg sm:text-xl font-mono font-extrabold text-blue-400">2.5s</div>
          <div className="text-[11px] text-slate-400 font-medium">Asynchronous Polling</div>
        </div>
        <div className="text-center p-2">
          <div className="text-lg sm:text-xl font-mono font-extrabold text-emerald-400">-60%</div>
          <div className="text-[11px] text-slate-400 font-medium">Bandwidth via Delta Cache</div>
        </div>
        <div className="text-center p-2">
          <div className="text-lg sm:text-xl font-mono font-extrabold text-purple-400">100%</div>
          <div className="text-[11px] text-slate-400 font-medium">Mobile Responsive UI</div>
        </div>
        <div className="text-center p-2">
          <div className="text-lg sm:text-xl font-mono font-extrabold text-amber-400">99.9%</div>
          <div className="text-[11px] text-slate-400 font-medium">Cloud Uptime & Deploy</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.num}
              id={`case-study-section-${section.num}`}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-400/30 transition-all space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className={`p-1.5 rounded-lg ${section.bg} ${section.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-white">
                    {section.title}
                  </h4>
                </div>
                <span className="font-mono text-xs font-bold text-slate-500">
                  {section.num}
                </span>
              </div>

              {section.content && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
