import { useState, useRef, useEffect } from "react";
import { Play, Pause, AlertTriangle, ArrowRight, X, Clock, ShieldAlert, Award, ChevronRight, Sparkles, Building2 } from "lucide-react";
import { regulatoryUpdates } from "../data";
import { RegulatoryUpdate } from "../types";

export default function NewsTicker() {
  const [selectedUpdate, setSelectedUpdate] = useState<RegulatoryUpdate | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Permanent slow duration set to 75s for relaxed editorial reading speed
  const duration = "75s";

  const handleOpenAlert = (update: RegulatoryUpdate) => {
    setSelectedUpdate(update);
    setIsPaused(true);
  };

  const handleCloseAlert = () => {
    setSelectedUpdate(null);
  };

  return (
    <div 
      className="bg-slate-900 border-b border-orange-active/40 text-white select-none relative z-40 shadow-md font-sans"
      id="news-ticker-container"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center">
        
        {/* News Indicator Block & Live Tag */}
        <div className="bg-slate-950 px-4 py-2 sm:py-3 md:py-4 shrink-0 flex items-center justify-between border-b md:border-b-0 md:border-r border-slate-800 relative z-11">
          <div className="flex items-center space-x-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-active opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-active"></span>
            </span>
            <span className="font-display font-extrabold text-xs tracking-wider text-white">
              MEDICO-LEGAL ADVISORIES
            </span>
            <span className="text-[9px] font-mono tracking-wider bg-mint text-slate-950 font-black px-1.5 py-0.5 rounded uppercase">
              LIVE
            </span>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 text-slate-400 hover:text-white transition"
              title={isPaused ? "Resume scrolling" : "Pause scrolling"}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Scrolling News Items Wrapper */}
        <div 
          className="flex-grow overflow-hidden relative flex items-center py-2 sm:py-2.5 group cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            // Only resume if we aren't displaying a modal
            if (!selectedUpdate) {
              setIsPaused(false);
            }
          }}
          onClick={(e) => {
            // Fallback click on ticker items
          }}
        >
          {/* Subtle horizontal gradient overlays for visual fading depth */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10 hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10 hidden sm:block" />

          {/* Scrolling tape container duplicated twice for a perfect loop */}
          <div 
            className="animate-marquee flex items-center space-x-12 whitespace-nowrap pl-4"
            style={{ 
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: duration
            }}
          >
            {/* Run 1 */}
            {regulatoryUpdates.map((upd) => (
              <button
                key={`${upd.id}-run1`}
                onClick={() => handleOpenAlert(upd)}
                className="flex items-center space-x-3 text-left focus:outline-none shrink-0 group/item cursor-pointer"
              >
                {upd.isUrgent ? (
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-black bg-orange-active text-white uppercase animate-pulse flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-white" />
                    CRITICAL URGENT
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-800 text-mint uppercase border border-slate-700">
                    {upd.tag}
                  </span>
                )}
                
                <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover/item:text-orange-active transition-colors select-none font-sans">
                  {upd.title}:
                </span>
                <span className="text-xs text-slate-350 select-none text-slate-300 font-sans font-medium whitespace-nowrap max-w-[280px] sm:max-w-none overflow-hidden text-ellipsis">
                  {upd.shortSummary}
                </span>

                <span className="text-[10px] font-mono font-bold text-[#667EEA] uppercase flex items-center gap-0.5 group-hover/item:translate-x-0.5 transition-transform">
                  Briefing Alert
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}

            {/* Duplicate Run 2 to enable seamless marquee cycling */}
            {regulatoryUpdates.map((upd) => (
              <button
                key={`${upd.id}-run2`}
                onClick={() => handleOpenAlert(upd)}
                className="flex items-center space-x-3 text-left focus:outline-none shrink-0 group/item cursor-pointer"
              >
                {upd.isUrgent ? (
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-black bg-orange-active text-white uppercase animate-pulse flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-white" />
                    CRITICAL URGENT
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-800 text-mint uppercase border border-slate-700">
                    {upd.tag}
                  </span>
                )}
                
                <span className="text-xs sm:text-sm font-bold text-slate-100 group-hover/item:text-orange-active transition-colors select-none font-sans">
                  {upd.title}:
                </span>
                <span className="text-xs text-slate-350 select-none text-slate-300 font-sans font-medium whitespace-nowrap max-w-[280px] sm:max-w-none overflow-hidden text-ellipsis">
                  {upd.shortSummary}
                </span>

                <span className="text-[10px] font-mono font-bold text-[#667EEA] uppercase flex items-center gap-0.5 group-hover/item:translate-x-0.5 transition-transform">
                  Briefing Alert
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Desktop Quick Control Hub */}
        <div className="hidden md:flex items-center space-x-4 px-4 bg-slate-950 shrink-0 border-l border-slate-800 z-11">
          
          {/* Pause / Play Trigger */}
          <div className="flex items-center space-x-1.5 py-4">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-900 transition flex items-center gap-1 text-[11px] font-mono font-bold cursor-pointer"
              title={isPaused ? "Lock ticker state in continuous motion" : "Freeze scrolling to read comfortably"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-mint" />
                  <span>PLAY</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-orange-active" />
                  <span>PAUSE</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* REGULATORY BRIEFING ALERT MODAL */}
      {selectedUpdate && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          id="ticker-alert-modal"
          onClick={handleCloseAlert}
        >
          <div 
            className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Visual Header Banner utilizing Sunset Highlight Gradient */}
            <div className="h-2 bg-gradient-brand-sunset" />

            {/* Top Bar with Dismiss */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <span className="flex h-2 w-2 rounded-full bg-orange-active animate-ping" />
                <span className="font-mono text-[10px] font-black text-indigo-700 bg-indigo-50 px-2 py-1 rounded border border-indigo-100 uppercase tracking-widest">
                  {selectedUpdate.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-semibold">
                  {selectedUpdate.pubDate}
                </span>
              </div>
              <button 
                onClick={handleCloseAlert}
                className="text-slate-400 hover:text-slate-700 p-1.5 hover:bg-slate-100 rounded-lg transition"
                aria-label="Close modal dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body content */}
            <div className="p-6 sm:p-7 space-y-5">
              
              <div>
                <span className="text-[9px] font-mono font-black text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded mb-2.5 inline-block uppercase tracking-wider">
                  Official Medico-Legal Briefing Case Ref: {selectedUpdate.id.toUpperCase()}
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                  {selectedUpdate.title}
                </h3>
              </div>

              {/* High Contrast Informational Fact block */}
              <div className="bg-cream/70 border border-slate-250 p-4 rounded-2xl flex items-start gap-3.5">
                <div className="bg-slate-900 p-1.5 rounded-lg text-mint border border-slate-800 shrink-0 mt-0.5 select-none">
                  <ShieldAlert className="w-4.5 h-4.5 text-mint" />
                </div>
                <p className="text-slate-800 text-sm leading-relaxed font-sans font-medium select-text">
                  {selectedUpdate.shortSummary}
                </p>
              </div>

              {/* Exhaustive Deep Regulatory Analysis */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Detailed Operational Analysis:
                </span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans select-text">
                  {selectedUpdate.fullDetails}
                </p>
              </div>

              {/* Clinician Risk Advisory Placement Recommendation */}
              <div className="bg-slate-50 border border-slate-200 p-4.5 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-orange-active" />
                <div className="flex items-center space-x-1.5 mb-1.5 select-none">
                  <Award className="w-4 h-4 text-orange-active" />
                  <span className="text-[10px] font-mono font-black tracking-widest text-[#FF7A3D] uppercase">
                    Dr. Mushwana&apos;s Risk Directive:
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans font-semibold italic select-text">
                  &ldquo;{selectedUpdate.recommendation}&rdquo;
                </p>
              </div>

            </div>

            {/* Sticky Actions in Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-[10.5px] text-slate-650 text-slate-505 font-medium text-slate-500 font-sans">
                Confidential advisory support is issued under FSP License 53666.
              </span>
              <button
                onClick={() => {
                  handleCloseAlert();
                  const formElement = document.getElementById("contact");
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                    
                    // Select context automatically if input elements exist
                    const areaSelect = document.querySelector("select[value]") as HTMLSelectElement;
                    if (areaSelect) {
                      // We can pre-populate values!
                    }
                  }
                }}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                Inquire For Professional Audit
                <ArrowRight className="w-3.5 h-3.5 text-mint" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
