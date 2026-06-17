import { Activity, ShieldCheck, Scale, Award, ArrowRight, CheckCircle2, FileText, HelpCircle, Download } from "lucide-react";
import { profileMeta } from "../data";
import { generateDoctorProfilePDF } from "../utils/pdfGenerator";
import { motion } from "framer-motion";

interface HeroProps {
  onContactClick: () => void;
  onFaqClick: () => void;
}

export default function Hero({ onContactClick, onFaqClick }: HeroProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-cream px-4 overflow-hidden border-b border-slate-200" id="hero">
      
      {/* Soft calming background accents utilizing ocean blue and sage green gradients */}
      <div className="absolute top-1/4 left-5 w-[450px] h-[450px] bg-mint/40 rounded-full blur-3xl opacity-50 select-none pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl opacity-60 select-none pointer-events-none" />
      
      {/* Decorative vector dots grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Left Hand: Content Block with Framer Motion */}
        <motion.div 
          className="w-full lg:w-3/5 text-left flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 border border-slate-800 shadow-sm">
              <Award className="w-4 h-4 mr-1.5 text-emerald-400" />
              MBChB Clinical Expertise
            </span>
            <span className="inline-flex items-center text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-sm">
              FSCA Authorized: FSP 53666
            </span>
            <span className="inline-flex items-center text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/50">
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

          {/* Quick Clear Value Proposition Grid - Emphasizing Safety & Confidentiality */}
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

          {/* CTA Buttons - Color mapped to calming blue/green */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onContactClick}
              className="bg-sky-600 hover:bg-sky-700 text-white font-display font-extrabold px-6 py-4 rounded-xl shadow-lg shadow-sky-600/10 transform hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer text-sm sm:text-base shrink-0"
            >
              Secure Sessional Quote Case
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={onFaqClick}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-5 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 shadow-md cursor-pointer border border-slate-800 shrink-0"
            >
              Review FSP FAQ Directory
              <HelpCircle className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={generateDoctorProfilePDF}
              className="bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm px-5 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 shadow-md cursor-pointer border border-slate-200 group shrink-0"
              title="Download Dr. Christopher Mushwana's verified clinical research, credentials, and malpractice advisory stations in PDF format"
            >
              Download Profile PDF
              <Download className="w-4 h-4 text-sky-600 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Hand: Visual Certificate & Underwriting Terminal Card with Framer Motion */}
        <motion.div 
          className="w-full lg:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            
            {/* Visual Header with Calming Blue-Green Stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-brand-indigo" />
            
            {/* Background geometric accents */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl" />
            
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
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-extrabold">
                FSP No. 53666
              </span>
            </div>

            {/* Clinician Profile Panel */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-5 relative">
              <div className="absolute top-2 right-2">
                <span className="text-[8px] font-mono bg-slate-900 text-white px-2 py-0.5 rounded-md font-extrabold tracking-widest leading-none">
                  LICENSED RSA
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Visual Medical-Malpractice Shield Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand-indigo flex flex-col items-center justify-center shrink-0 text-white shadow relative">
                  <Activity className="w-6 h-6 text-white animate-pulse" />
                  <div className="absolute -bottom-1 flex items-center justify-center bg-sky-600 rounded-full p-0.5 border-2 border-white">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-slate-900 text-lg leading-snug">
                    Christopher Mushwana
                  </h3>
                  <p className="text-xs text-sky-600 font-mono font-bold">
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
                  <ShieldCheck className="w-4.5 h-4.5 text-sky-700" />
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
                  <Scale className="w-4.5 h-4.5 text-sky-600" />
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
                <div className="text-[10px] text-sky-700 font-extrabold flex items-center gap-1.5 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                  STANDBY
                </div>
              </div>
            </div>

            {/* Corporate Summary Indicators */}
            <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 mt-5 text-center font-mono">
              <div>
                <p className="text-[15px] font-black text-slate-900 leading-none">100%</p>
                <p className="text-[8px] text-slate-500 uppercase tracking-tight mt-1">Contract Certainty</p>
              </div>
              <div className="border-x border-slate-100">
                <p className="text-[15px] font-black text-sky-600 leading-none">R40M</p>
                <p className="text-[8px] text-slate-500 uppercase tracking-tight mt-1">Mediation Limit</p>
              </div>
              <div>
                <p className="text-[15px] font-black text-slate-900 leading-none">2,500+</p>
                <p className="text-[8px] text-slate-500 uppercase tracking-tight mt-1">Active Defenses</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
