import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileDown, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  CheckCircle2,
  FolderOpen,
  ExternalLink
} from 'lucide-react';

export const ResumeCTA = ({ onOpenResumeModal }) => {
  return (
    <section className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          id="resume-cta-banner"
          className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECRUITER READY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let's Build Something Together
            </h2>

            <p className="text-slate-300 text-sm sm:text-base sm:leading-relaxed max-w-2xl mx-auto">
              Interested in my profile? Download my resume or access it directly on Google Drive to learn more about my education, technical skills, projects, and experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
              <button
                id="cta-download-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white text-black shadow-lg hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                id="cta-google-drive-btn"
                href={PERSONAL_INFO.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 hover:text-white transition-all shadow-sm cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-blue-400" />
                <span>Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                id="cta-preview-resume-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>View Original PDF</span>
              </button>

              <a
                id="cta-contact-me-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Available Immediately
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                SDE & Frontend Roles
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                Relocation / Hybrid / Remote
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

