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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

      </div>
    </section>
  );
};
