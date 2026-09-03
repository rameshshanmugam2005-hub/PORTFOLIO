import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Profiles } from './components/Profiles';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#030712] text-[#F8FAFC] transition-colors duration-300 relative selection:bg-blue-500/30 selection:text-white">
        
        {/* Ambient background glow accents */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/[0.07] blur-[140px] rounded-full pointer-events-none -z-10" />
        
        {/* Sticky Responsive Navigation */}
        <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        <main id="main-content" className="relative z-10">
          {/* Hero Section */}
          <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Technical Skills Section */}
          <Skills />

          {/* Featured Project Section (Transit AI & Case Study) */}
          <FeaturedProject />

          {/* Experience & Learning Section */}
          <Experience />

          {/* Education Section */}
          <Education />

          {/* Certifications Section */}
          <Certifications />

          {/* Leadership & Achievements Section */}
          <Achievements />

          {/* Connect With Me (Coding & Professional Profiles) */}
          <Profiles />

          {/* Resume CTA Section */}
          <ResumeCTA onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Resume Preview & Download Modal */}
        <ResumeModal 
          isOpen={isResumeModalOpen} 
          onClose={() => setIsResumeModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}
