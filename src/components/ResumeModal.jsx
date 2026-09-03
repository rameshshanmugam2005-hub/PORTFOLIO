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
  Sparkles 
} from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

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
            
            {/* Title / Badge */}
            <div className="ml-1 sm:ml-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-stylish font-bold tracking-wide">Original Resume Document (PDF)</span>
            </div>
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
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 font-display"
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
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct Authenticated Google Drive Resume Document:</span>
          </div>
          <a
            href={PERSONAL_INFO.resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white font-medium underline flex items-center gap-1"
          >
            drive.google.com/drive/folders/17... <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Main Document Body: Pure High-Fidelity Original PDF Viewer */}
        <PdfViewer pdfUrl="/resume.pdf" />

      </div>
    </div>
  );
};
