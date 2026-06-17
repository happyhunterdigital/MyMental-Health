import { Activity, ShieldCheck, Scale, Award, ArrowRight, CheckCircle2, FileText, HelpCircle, Download } from "lucide-react";
import { profileMeta } from "../data";
import { generateDoctorProfilePDF } from "../utils/pdfGenerator";

interface HeroProps {
  onContactClick: () => void;
  onFaqClick: () => void;
}

export default function Hero({ onContactClick, onFaqClick }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 bg-cream px-4 overflow-hidden border-b border-slate-200" id="hero">
      
      {/* Visual background decorative accents utilizing premium gradients */}
      <div className="absolute top-1/4 left-5 w-[400px] h-[400px] bg-mint/20 rounded-full blur-3xl opacity-60 select-none pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-peach/10 rounded-full blur-3xl opacity-50 select-none pointer-events-none" />
      
      {/* Decorative vector dots grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#95D9C0_1px,transparent_1px)] [background-size:24px_24px] opacity-15 select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Left Hand: Content Block */}
        <div className="w-full lg:w-3/5 text-left flex flex-col justify-center">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-slate-900 text-mint border border-slate-800 shadow-sm">
              <Award className="w-4 h-4 mr-1.5" />
              MBChB Clinical Expertise
            </span>
            <span className="inline-flex items-center text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-cream text-slate-700 border border-slate-350 shadow-sm">
              FSCA Authorized: FSP 53666
            </span>
            <span className="inline-flex items-center text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-orange-active/10 text-orange-active border border-orange-active/20">
              Contract-Backed Certainty
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-none mb-6">
            Bridging Clinical Delivery &{" "}
            <span className="text-gradient-brand-indigo font-black">Corporate Risk</span>{" "}
            Underwriting
          </h1>

          {/* Executive Intro */}
          <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-sans">
            As a veteran General Practitioner (MBChB) and medical indemnity director,{" "}
            <strong className="text-slate-900 font-extrabold">Dr. Christopher Mushwana</strong>{" "}
            structures institutional-grade malpractice portfolios that eliminate communication gaps, securing legally binding asset protection in South Africa, Namibia, and Eswatini.
          </p>

          {/* Quick Clear Value Proposition Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 text-slate-700">
            <div className="flex items-start gap-3">
              <div className="bg-gradient-brand-indigo p-1 rounded-full shrink-0 shadow-sm mt-0.5">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <strong className="text-sm font-extrabold text-slate-900 block">Rule 41A Mediation-First</strong>
                <span className="text-xs text-slate-600">Strict clinician consent required for any claim settlement</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-gradient-brand-indigo p-1 rounded-full shrink-0 shadow-sm mt-0.5">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <strong className="text-sm font-extrabold text-slate-900 block">HPCSA Section 41 Defense</strong>
                <span className="text-xs text-slate-600">Immediate specialist panel drafting in the 40-day window</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gradient-brand-indigo p-1 rounded-full shrink-0 shadow-sm mt-0.5">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <strong className="text-sm font-extrabold text-slate-900 block">Underwritten by New Era Life</strong>
                <span className="text-xs text-slate-600">Backed by FSP 2736 with global A-rated reinsurer pools</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gradient-brand-indigo p-1 rounded-full shrink-0 shadow-sm mt-0.5">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <strong className="text-sm font-extrabold text-slate-900 block">Labour Court & RWOPS Advice</strong>
                <span className="text-xs text-slate-600">Defense for sessional state medical officers (Section 30)</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-4">
            <button
              onClick={onContactClick}
              className="bg-orange-active hover:bg-orange-active/90 text-white font-display font-extrabold px-6 py-4 rounded-xl shadow-lg shadow-orange-active/20 transform hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer text-sm sm:text-base shrink-0"
            >
              Secure Sessional Quote Case
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={onFaqClick}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-5 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 shadow-md cursor-pointer border border-slate-850 shrink-0"
            >
              Review FSP FAQ Directory
              <HelpCircle className="w-4 h-4 text-mint" />
            </button>
            <button
              onClick={generateDoctorProfilePDF}
              className="bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm px-5 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 shadow-md cursor-pointer border border-slate-300 shadow-slate-100/10 hover:border-slate-400 group shrink-0"
              title="Download Dr. Christopher Mushwana's verified clinical research, credentials, and malpractice advisory stations in PDF format"
            >
              Download Profile PDF
              <Download className="w-4 h-4 text-[#FF7A3D] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Hand: Visual Certificate & Underwriting Terminal Card */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            
            {/* Visual Header with Sunset Gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand-sunset" />
            
            {/* Background geometric accents */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-mint/10 rounded-full blur-xl" />
            
            {/* Card Header Status */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div className="flex items-center space-x-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs text-slate-500 tracking-wider font-extrabold uppercase">
                  MMHFSP SECURE SHIELD
                </span>
              </div>
              <span className="text-[10px] font-mono bg-slate-150 text-slate-605 bg-slate-100 px-2 py-0.5 rounded font-extrabold text-slate-600">
                FSP No. 53666
              </span>
            </div>

            {/* Clinician Profile Panel */}
            <div className="bg-cream/60 rounded-2xl p-4 border border-slate-200/80 mb-5 relative">
              <div className="absolute top-2 right-2">
                <span className="text-[8px] font-mono bg-slate-900 text-white px-2 py-0.5 rounded-md font-extrabold tracking-widest leading-none">
                  LICENSED RSA
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Visual Medical-Malpractice Shield Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand-indigo flex flex-col items-center justify-center shrink-0 text-white shadow relative">
                  <Activity className="w-6 h-6 text-white animate-pulse" />
                  <div className="absolute -bottom-1 flex items-center justify-center bg-orange-active rounded-full p-0.5 border-2 border-white">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-snug">
                    Christopher Mushwana
                  </h3>
                  <p className="text-xs text-orange-active font-mono font-bold">
                    MBChB Clinician & Director
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5 font-sans">
                    MyMental Health Consulting (Pty) Ltd
                  </p>
                </div>
              </div>
            </div>

            {/* Standard Corporate Underwriting Assets */}
            <div className="space-y-3 font-mono text-xs">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                Active Liability Channels:
              </div>

              {/* Channel 1 */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-indigo-700" />
                  <div>
                    <div className="text-[11px] text-slate-800 font-extrabold">New Era Life Insurance</div>
                    <div className="text-[9px] text-slate-500">Underwriting Principal • FSP 2736</div>
                  </div>
                </div>
                <div className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  CONNECTED
                </div>
              </div>

              {/* Channel 2 */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <Scale className="w-4.5 h-4.5 text-orange-active" />
                  <div>
                    <div className="text-[11px] text-slate-800 font-extrabold">Swiss Re / Munich Re</div>
                    <div className="text-[9px] text-slate-500">Reinsurance Liquidity Pool</div>
                  </div>
                </div>
                <div className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  SECURED
                </div>
              </div>

              {/* Channel 3 */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <FileText className="w-4.5 h-4.5 text-slate-700" />
                  <div>
                    <div className="text-[11px] text-slate-800 font-extrabold">Section 41 Defense Panel</div>
                    <div className="text-[9px] text-slate-500">Medical Litigation Attorneys</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#2c3e50] font-extrabold flex items-center gap-1.5 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 text-indigo-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                  STANDBY
                </div>
              </div>
            </div>

            {/* Corporate Summary Indicators */}
            <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 mt-5 text-center font-mono">
              <div>
                <p className="text-[15px] font-black text-slate-900 leading-none">100%</p>
                <p className="text-[8px] text-slate-505 text-slate-500 uppercase tracking-tight mt-1">Contract Certainty</p>
              </div>
              <div className="border-x border-slate-100">
                <p className="text-[15px] font-black text-orange-active leading-none">R40M</p>
                <p className="text-[8px] text-slate-505 text-slate-500 uppercase tracking-tight mt-1">Mediation Limit</p>
              </div>
              <div>
                <p className="text-[15px] font-black text-slate-900 leading-none">2,500+</p>
                <p className="text-[8px] text-slate-505 text-slate-500 uppercase tracking-tight mt-1">Active Defenses</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
