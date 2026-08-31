import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/generatePdf';
import { PdfViewer } from './PdfViewer';
import { 
  FileDown, 
  Printer, 
  X, 
  ExternalLink,
  Check,
  FolderOpen,
  FileText,
  FileCode,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState('ats'); // 'ats' | 'pdf'
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [scale, setScale] = useState(1);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleOpenDrive = () => {
    window.open(PERSONAL_INFO.resumeDriveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    try {
      setDownloading(true);
      const link = document.createElement('a');
      link.href = "/resume.pdf";
      link.download = "Ramesh_S_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloading(false);
        setDownloadSuccess(false);
      }, 2000);
    } catch (err) {
      console.error("PDF download fallback:", err);
      downloadResumePdf("Ramesh_S_Resume.pdf");
      setDownloading(false);
    }
  };

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden flex flex-col h-[94vh] max-h-[960px]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Toolbar */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between shrink-0 gap-2 select-none">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0" />
            <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
            
            {/* View Mode Switcher */}
            <div className="ml-1 sm:ml-2 bg-slate-800/90 p-0.5 rounded-lg border border-slate-700 flex items-center gap-1">
              <button
                id="btn-view-ats"
                onClick={() => { setViewMode('ats'); setScale(1); }}
                className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'ats' 
                    ? 'bg-amber-500 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>ATS Resume</span>
              </button>
              <button
                id="btn-view-pdf"
                onClick={() => { setViewMode('pdf'); }}
                className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'pdf' 
                    ? 'bg-amber-500 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Original PDF</span>
              </button>
            </div>

            {/* Zoom Controls (ATS Mode) */}
            {viewMode === 'ats' && (
              <div className="hidden md:flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700 text-xs text-slate-300">
                <button 
                  onClick={() => setScale(s => Math.max(0.75, Number((s - 0.1).toFixed(2))))}
                  className="p-1 hover:text-white hover:bg-slate-700 rounded transition cursor-pointer"
                  title="Zoom out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="w-11 text-center font-mono text-[11px] font-semibold">{Math.round(scale * 100)}%</span>
                <button 
                  onClick={() => setScale(s => Math.min(1.3, Number((s + 0.1).toFixed(2))))}
                  className="p-1 hover:text-white hover:bg-slate-700 rounded transition cursor-pointer"
                  title="Zoom in"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {scale !== 1 && (
                  <button 
                    onClick={() => setScale(1)}
                    className="p-1 hover:text-amber-400 hover:bg-slate-700 rounded transition cursor-pointer ml-0.5 text-slate-400"
                    title="Reset zoom"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Google Drive Link Button */}
            <button
              id="resume-open-drive-btn"
              onClick={handleOpenDrive}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/40 hover:border-blue-400 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              title="Open verified resume directly from Google Drive"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Google Drive</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-slate-200 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Download PDF Button */}
            <button
              id="modal-download-pdf-btn"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-950" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5 text-slate-950" />
                  <span>{downloading ? "Downloading..." : "Download PDF"}</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Drive Notice Bar */}
        <div className="bg-blue-950/60 border-b border-blue-800/40 px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between text-xs text-blue-200 gap-2 shrink-0 select-none">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Official Google Drive Resume Link Attached:</span>
          </div>
          <a
            href={PERSONAL_INFO.resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white font-medium underline flex items-center gap-1"
          >
            drive.google.com/drive/folders/... <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Main Document Body */}
        {viewMode === 'pdf' ? (
          <PdfViewer pdfUrl="/resume.pdf" />
        ) : (
          <div className="flex-1 min-h-0 overflow-y-auto bg-slate-950 p-3 sm:p-8 flex justify-center items-start">
            
            {/* A4 White Sheet Container matching exact authentic font, sizes, lines, and layout */}
            <div 
              id="printable-resume-sheet"
              style={{ 
                transform: scale !== 1 ? `scale(${scale})` : undefined, 
                transformOrigin: 'top center',
                backgroundColor: '#ffffff',
                color: '#000000',
                fontFamily: "'Times New Roman', Times, 'Nimbus Roman No9 L', serif"
              }}
              className="w-full max-w-[780px] bg-white text-black px-6 sm:px-12 py-8 sm:py-10 shadow-2xl rounded-none text-[12.5px] leading-[1.4] space-y-3.5 border border-slate-200 select-text transition-transform duration-150 shrink-0 mb-8"
            >
              
              {/* Centered Header */}
              <div className="text-center pb-0.5">
                <h1 className="text-[24px] sm:text-[26px] font-bold text-black tracking-wide uppercase leading-tight font-serif">
                  RAMESH S
                </h1>
                
                <div className="text-[12px] text-black mt-1 font-normal font-serif">
                  <span>Email: <a href="mailto:rameshshanmugam2005@gmail.com" className="text-black hover:underline">rameshshanmugam2005@gmail.com</a></span>
                  <span className="mx-1.5">|</span>
                  <span>Phone: <a href="tel:+919150963465" className="text-black hover:underline">+91 91509 63465</a></span>
                </div>

                <div className="text-[11.5px] text-[#1a0dab] mt-0.5 font-normal font-serif flex flex-wrap justify-center gap-x-1.5">
                  <span>LinkedIn: <a href="https://www.linkedin.com/in/ramesh045/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">linkedin.com/in/ramesh045</a></span>
                  <span className="text-black">|</span>
                  <span>GitHub: <a href="https://github.com/rameshshanmugam2005-hub" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">github.com/rameshshanmugam2005-hub</a></span>
                  <span className="text-black">|</span>
                  <span>LeetCode: <a href="https://leetcode.com/u/rameshshanmugam45/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">leetcode.com/u/rameshshanmugam45</a></span>
                </div>
              </div>

              {/* CAREER OBJECTIVE */}
              <div className="space-y-1">
                <div className="font-bold text-[13px] text-black tracking-wider uppercase border-b border-black pb-0.5 font-serif">
                  CAREER OBJECTIVE
                </div>
                <p className="text-[12px] text-black text-justify leading-relaxed pt-0.5 font-serif">
                  Computer Science and Engineering student with hands-on experience in frontend development, JavaScript, Java, and AI-powered web applications. Passionate about building responsive, user-centric software solutions. Seeking a Software Development Engineer (SDE) or Frontend Developer role to contribute while continuously enhancing technically expertised And Recently Explored AIML
                </p>
              </div>

              {/* TECHNICAL SKILL */}
              <div className="space-y-1">
                <div className="font-bold text-[13px] text-black tracking-wider uppercase border-b border-black pb-0.5 font-serif">
                  TECHNICAL SKILL
                </div>
                <div className="text-[12px] text-black space-y-0.5 pt-0.5 font-serif">
                  <div><span className="font-bold">Languages:</span> Java, SQL</div>
                  <div><span className="font-bold">Web:</span> HTML5, CSS3, JavaScript</div>
                  <div><span className="font-bold">Tools:</span> Git, GitHub, VS Code</div>
                  <div><span className="font-bold">Core:</span> Computer Network and Web Technologies</div>
                </div>
              </div>

              {/* INTERNSHIP */}
              <div className="space-y-1">
                <div className="font-bold text-[13px] text-black tracking-wider uppercase border-b border-black pb-0.5 font-serif">
                  INTERNSHIP
                </div>
                <div className="pt-0.5 font-serif">
                  <div className="text-[12px] font-bold text-black">
                    Full Stack Development Intern – Viruzver Solution (Dec 2025 – Jan 2026)
                  </div>
                  <ul className="text-[12px] text-black space-y-0.5 mt-0.5 pl-4 list-disc">
                    <li>Developed responsive cross-browser web pages using HTML, CSS and JavaScript.</li>
                    <li>Collaborated on frontend features, debugging, UI improvements and Git-based workflows.</li>
                  </ul>
                </div>
              </div>

              {/* PROJECT */}
              <div className="space-y-1">
                <div className="font-bold text-[13px] text-black tracking-wider uppercase border-b border-black pb-0.5 font-serif">
                  PROJECT
                </div>
                <div className="pt-0.5 font-serif">
                  <div className="text-[12px]">
                    <span className="font-bold text-[#1a0dab]">TRANSIT AI -RealTime Public Transit & AI Assistant</span>
                    <span className="text-black ml-1">| JavaScript, HTML5, CSS3, Node.js, Express.js & API</span>
                  </div>
                  <ul className="text-[12px] text-black space-y-0.5 mt-0.5 pl-4 list-disc">
                    <li><strong className="font-bold">Developed a full-stack public transit web application</strong> using JavaScript, HTML5, CSS3, Node.js, and Express.js with responsive and interactive interfaces for real-time transit information.</li>
                    <li><strong className="font-bold">Built and integrated backend APIs</strong> for bus telemetry, routes, schedules, passenger occupancy, and congestion data, enabling dynamic frontend-backend communication and real-time data updates.</li>
                    <li><strong className="font-bold">Implemented AI-powered transit assistance, QR ticket validation, congestion visualization, occupancy monitoring, and bandwidth-efficient polling</strong> for practical real-world transit use cases.</li>
                  </ul>
                  <p className="text-[12px] text-black mt-1 font-serif">
                    <span className="font-bold">Key Learning:</span> Strengthened JavaScript and frontend development skills while gaining hands-on experience in Node.js, Express.js, API integration, backend development, real-time data handling, responsive UI design, and full-stack application deployment.
                  </p>
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div className="space-y-1">
                <div className="font-bold text-[13px] text-black tracking-wider uppercase border-b border-black pb-0.5 font-serif">
                  CERTIFICATIONS
                </div>
                <div className="text-[12px] text-black pt-0.5 font-serif">
                  Big Data Analytics - NPTEL (2025) || SQL (Basic, Intermediate) || Java (Basics)- HACKER RANK(2026)
                </div>
              </div>

              {/* EDUCATION */}
              <div className="space-y-1">
                <div className="font-bold text-[13px] text-black tracking-wider uppercase border-b border-black pb-0.5 font-serif">
                  EDUCATION
                </div>
                <div className="text-[12px] text-black space-y-0.5 pt-0.5 font-serif">
                  <div>
                    B.E. (CSE) | VSB College of Engineering and Technical Campus | CBE| 2023–2027 | CGPA: 8.02
                  </div>
                  <div>
                    H.S.C. | Siwalik Matric Higher Secondary School | Pollachi | 2022–2023 | 69%
                  </div>
                  <div>
                    S.S.C. | Siwalik Matric Higher Secondary School | Pollachi | 2020–2021 | 100%
                  </div>
                </div>
              </div>

              {/* LEADERSHIP & ACHIEVEMENTS */}
              <div className="space-y-1">
                <div className="font-bold text-[13px] text-black tracking-wider uppercase border-b border-black pb-0.5 font-serif">
                  LEADERSHIP & ACHIEVEMENTS
                </div>
                <div className="text-[12px] text-black space-y-1 pt-0.5 font-serif">
                  <p>
                    Built and deployed Transit AI, completed a Full-Stack Development Internship, actively solved problems on LeetCode, and maintained software projects on GitHub.
                  </p>
                  <p>
                    Led the hockey team to a Zonal Championship and Divisional Runner-Up finish through effective training, tactics, and team coordination. demonstrating leadership, team management, and strategic planning across 100+ students.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Modal Bottom Footer */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 shrink-0 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span>Single-Page A4 ATS Resume • Formatted for Recruiters & Hiring Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 font-medium border border-blue-500/30 transition-colors flex items-center gap-1.5"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Google Drive Link</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
