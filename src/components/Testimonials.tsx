import { useState } from "react";
import { Quote, ShieldCheck, Award, Star, CornerDownRight } from "lucide-react";
import { testimonials, caseStudies } from "../data";

export default function Testimonials() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);

  return (
    <section className="py-24 bg-cream px-4 text-slate-800 scroll-mt-20 border-b border-slate-200" id="testimonials">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-250 text-slate-800 text-xs font-mono font-bold uppercase shadow-sm">
            <Star className="w-4 h-4 text-orange-active fill-orange-active" />
            Verified Practitioner Testimonials
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4 mt-4">
            Trusted by Elite Physicians & Boards
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-sans">
            Hear from leading medical specialists, gynaecologists, and group hospital risk managers who secured contractual certainty and career protection under Dr. Chris&apos;s guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-orange-active/40 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Giant decorative quote graphic mark */}
              <div className="absolute top-4 right-4 text-slate-100 pointer-events-none select-none">
                <Quote className="w-10 h-10 group-hover:scale-110 group-hover:text-mint transition-colors duration-300" />
              </div>

              <div>
                {/* Verified Support badge */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded font-extrabold uppercase tracking-wide">
                    {test.helpType}
                  </span>
                  {test.verifiedBadge && (
                    <span className="flex items-center text-[9px] font-mono text-emerald-600 font-extrabold uppercase gap-1 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      SECURE MEMBER
                    </span>
                  )}
                </div>

                {/* Testimonial Core Content */}
                <p className="text-slate-650 text-slate-600 text-sm italic leading-relaxed font-sans mb-6 select-text">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Author signature block */}
              <div className="border-t border-slate-100 pt-4 mt-6">
                <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                  {test.author}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {test.role}
                </p>
                <p className="text-[10px] text-orange-active font-mono font-bold mt-1 uppercase">
                  {test.organization}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* CASE PRECEDENT VISUAL DOCK */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Selector panel styled contractually in charcoal contrast */}
          <div className="lg:col-span-5 bg-slate-900 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between text-white">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950 text-mint border border-slate-850 text-[10px] font-mono font-bold uppercase mb-4">
                <Award className="w-3.5 h-3.5 text-mint animate-pulse" />
                Proven Case Precedents
              </div>
              
              <h3 className="font-display font-black text-2.5xl text-white tracking-tight leading-none mb-3">
                Precedents of Clinical Veto & Defense
              </h3>
              
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans mb-8">
                Explore real occurrences in high-risk South African gynecological and surgical groups resolved without admission of liability, preserving direct reputation.
              </p>
            </div>

            <div className="space-y-3">
              {caseStudies.map((cs, idx) => (
                <button
                  key={cs.id}
                  onClick={() => setActiveCaseIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    activeCaseIdx === idx
                      ? "bg-slate-950 border-mint text-white shadow-md shadow-slate-950"
                      : "bg-slate-950/40 border-slate-850 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mint">
                      CASE PRECEDENT 0{idx + 1}
                    </span>
                    <CornerDownRight className={`w-3.5 h-3.5 transition-all ${activeCaseIdx === idx ? "text-mint translate-x-0.5" : "text-slate-650 text-slate-600"}`} />
                  </div>
                  <p className="text-xs font-bold text-white leading-snug mt-1.5 font-display">
                    {cs.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Precedent details card in warm cream */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-cream/30 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-200 pb-3">
                <span className="text-xs lg:text-sm font-mono font-bold text-indigo-700 uppercase tracking-wider">
                  {caseStudies[activeCaseIdx].clientType}
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold bg-white border border-slate-200 px-2.5 py-1 rounded">
                  CASE ADVISORY ID: {caseStudies[activeCaseIdx].id.toUpperCase()}
                </span>
              </div>

              {/* Description boxes */}
              <div className="space-y-4 font-sans text-slate-700">
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-extrabold">The Threatening Challenge:</h4>
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mt-1 font-medium select-text">
                    {caseStudies[activeCaseIdx].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-extrabold">Advisory & Courtroom Strategy:</h4>
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mt-1 font-medium select-text">
                    {caseStudies[activeCaseIdx].strategy}
                  </p>
                </div>
              </div>
            </div>

            {/* Resolved Outcome block with Sunset highlight gradient */}
            <div className="bg-white border border-slate-205 p-5 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-brand-sunset" />
              <span className="text-[10px] uppercase font-mono tracking-wider text-orange-active font-extrabold block mb-1">
                Advisory Outcome:
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-905 text-slate-800 italic leading-relaxed select-text">
                &ldquo;{caseStudies[activeCaseIdx].outcome}&rdquo;
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
