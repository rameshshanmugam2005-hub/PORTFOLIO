import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const PdfViewer = () => {
  const [scale, setScale] = useState(1);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-slate-950">
      {/* Zoom Bar for Original PDF */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-300 shrink-0 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-medium text-slate-200">Original Document • 300 DPI High Definition Preview</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Buttons */}
          <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg border border-slate-700">
            <button 
              onClick={() => setScale(s => Math.max(0.6, Number((s - 0.15).toFixed(2))))}
              className="p-1 hover:text-white hover:bg-slate-700 rounded transition cursor-pointer"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-12 text-center font-mono text-[11px] font-semibold">{Math.round(scale * 100)}%</span>
            <button 
              onClick={() => setScale(s => Math.min(1.8, Number((s + 0.15).toFixed(2))))}
              className="p-1 hover:text-white hover:bg-slate-700 rounded transition cursor-pointer"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            {scale !== 1 && (
              <button 
                onClick={() => setScale(1)}
                className="p-1 hover:text-amber-400 hover:bg-slate-700 rounded transition cursor-pointer ml-1 text-slate-400"
                title="Reset zoom"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Quick open raw PDF button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition"
          >
            <span>Open in Tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Document Viewport with high-res document */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start bg-slate-950/95">
        <div 
          style={{ 
            transform: scale !== 1 ? `scale(${scale})` : undefined, 
            transformOrigin: 'top center'
          }}
          className="shadow-2xl rounded-sm border border-slate-700 bg-white transition-transform duration-150 shrink-0 max-w-[800px] w-full"
        >
          <img 
            src="/resume_original.png" 
            alt="Ramesh S Resume Original Document"
            className="w-full h-auto block rounded-sm shadow-md"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
