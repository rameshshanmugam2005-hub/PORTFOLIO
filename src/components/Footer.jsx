import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Linkedin, 
  Github, 
  ArrowUp, 
  Mail,
  Phone
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050E] text-slate-400 py-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Computer Science & Engineering | Frontend & Software Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-social-linkedin"
              href="https://www.linkedin.com/in/ramesh045/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-[#0a66c2] hover:bg-white/10 border border-white/5 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-social-github"
              href="https://github.com/rameshshanmugam2005-hub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-social-leetcode"
              href="https://leetcode.com/u/rameshshanmugam45/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-amber-400 hover:bg-white/10 border border-white/5 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-blue-400 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono text-center sm:text-left">
          <div>
            © 2026 Ramesh S. All rights reserved.
          </div>
          <div>
            Engineered with Semantic HTML5, Modern CSS3 & JavaScript
          </div>
        </div>

      </div>
    </footer>
  );
};
