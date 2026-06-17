import React, { useState } from "react";
import { ShieldAlert, Stethoscope, GitMerge, Scale, ArrowRight, Award, GraduationCap, Building, CheckCircle2 } from "lucide-react";
import { serviceAreas, profileMeta } from "../data";

// Resolve actual types of Lucide Icon components
const iconMapper: Record<string, any> = {
  ShieldAlert: ShieldAlert,
  Stethoscope: Stethoscope,
  GitMerge: GitMerge,
  Scale: Scale,
};

interface PracticeAreasProps {
  onContactClick: () => void;
}

export default function PracticeAreas({ onContactClick }: PracticeAreasProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white/70 px-4 text-slate-800 scroll-mt-20 border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Executive Bio Segment */}
        <div id="bio" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 scroll-mt-24">
          
          {/* Bio Left: Standing & Achievement Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-mint text-xs font-mono font-bold uppercase shadow-sm">
              <GraduationCap className="w-4 h-4 text-mint" />
              Executive Profile & Biography
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              A Clinically-Led Defense Shield for Practitioners
            </h2>
            
            <p className="text-slate-650 text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
              {profileMeta.bioDetailed}
            </p>

            {/* Timelined standing blocks */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 shadow">
                  <Award className="w-4.5 h-4.5 text-mint" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">MBChB Medical Practitioner</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Direct clinical insights to eliminate the communication gaps standard insurance brokers ignore.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 shadow">
                  <Building className="w-4.5 h-4.5 text-orange-active" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Authorized Advisory Director • MMHFSP</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Designing contractually certain indemnity structures governed under FSCA FSP License 53666.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Right: Core Corporate Capabilities Grid */}
          <div className="lg:col-span-7 bg-cream border border-slate-350/50 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-[0.03] pointer-events-none select-none font-sans font-black text-[120px] text-slate-900 leading-none">
              BIO
            </div>

            <h3 className="font-display font-extrabold text-lg text-slate-905 text-slate-900 tracking-wide uppercase mb-6">
              Expert Capabilities & Underwriting Placement
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 bg-white/95 border border-slate-200/90 rounded-2xl shadow-sm">
                <strong className="text-gradient-brand-indigo font-mono text-xs font-bold uppercase mb-1.5 block">
                  REINSURER POOL NEGOTIATION
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Negotiating directly with <span className="text-slate-900 font-bold">Munich Re</span> and <span className="text-slate-900 font-bold">Swiss Re</span> to anchor custom, robust short-term indemnity layers.
                </p>
              </div>

              <div className="p-4 bg-white/95 border border-slate-200/90 rounded-2xl shadow-sm">
                <strong className="text-gradient-brand-indigo font-mono text-xs font-bold uppercase mb-1.5 block">
                  HPCSA PRE-TRIAL AUDIT
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Drafting comprehensive clinical evaluations to clear and de-escalate Patient complaints during the early 40-day panel window.
                </p>
              </div>

              <div className="p-4 bg-white/95 border border-slate-200/90 rounded-2xl shadow-sm">
                <strong className="text-orange-active font-mono text-xs font-bold uppercase mb-1.5 block">
                  RWOPS SECTION 30 COMPLIANCE
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Airtight compliance schedules for state specialists operating private rooms, fully proofing against provincial audit sanctions.
                </p>
              </div>

              <div className="p-4 bg-white/95 border border-slate-200/90 rounded-2xl shadow-sm">
                <strong className="text-emerald-600 font-mono text-xs font-bold uppercase mb-1.5 block font-bold">
                  UNIFORM RULE 41A MEDIATION
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Alternative dispute protocols that bypass judicial backlogs. The practitioner retains complete veto power on any settlement.
                </p>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Request a professional regulatory audit of your sessional medical rooms.
              </span>
              <button
                onClick={onContactClick}
                className="bg-orange-active hover:bg-orange-active/90 text-white font-display font-extrabold text-xs px-5 py-3 rounded-lg hover:scale-104 shadow-sm active:translate-y-0.5 transition-all cursor-pointer"
              >
                Inquire For Advisory Audit
              </button>
            </div>

          </div>

        </div>

        {/* Practice Portfolios Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-orange-active tracking-widest uppercase mb-3 block">
            Core Service Portfolios & Risk Solutions
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Tailored Medico-Legal Protection Architecture
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed font-sans">
            Designed to protect South African private, sessional, and group healthcare institutions under authorized FSCA licensed frameworks.
          </p>
        </div>

        {/* Service Portfolios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceAreas.map((area) => {
            const IconComponent = iconMapper[area.icon] || ShieldAlert;
            const isHovered = activeCard === area.id;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setActiveCard(area.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`bg-white border rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? "border-orange-active/60 shadow-xl shadow-slate-250 bg-white"
                    : "border-slate-200 shadow-md"
                }`}
              >
                
                {/* Visual accent left line utilizing our requested color structures */}
                <div className={`absolute top-0 left-0 w-1.5 h-full transition-all duration-300 ${
                  isHovered ? "bg-orange-active" : "bg-mint"
                }`} />

                <div>
                  {/* Card Header Status */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-900 p-3 rounded-xl flex items-center justify-center shrink-0 shadow">
                      <IconComponent className="w-5.5 h-5.5 text-mint" />
                    </div>
                    <span className="text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md font-extrabold uppercase tracking-wide">
                      {area.regulatoryReference}
                    </span>
                  </div>

                  {/* Title & Category subtitles */}
                  <h3 className="font-display font-extrabold text-xl text-slate-905 text-slate-900 hover:text-orange-active transition-colors mb-1.5">
                    {area.title}
                  </h3>
                  <p className="text-xs font-mono text-orange-active/90 tracking-wider mb-5 font-bold uppercase">
                    {area.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                    {area.description}
                  </p>

                  {/* Claims features bullet list */}
                  <ul className="space-y-3 mb-6 text-xs text-slate-700">
                    {area.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-orange-active shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Risk Indicator Segment */}
                <div className="border-t border-slate-100 pt-4 mt-4 bg-cream/30 p-4 rounded-xl border border-slate-200/50">
                  <span className="text-[10px] font-mono text-indigo-700 font-extrabold uppercase tracking-wide block mb-1">
                    Regulatory Risk Analysis:
                  </span>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed font-sans">
                    {area.riskFactor}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
