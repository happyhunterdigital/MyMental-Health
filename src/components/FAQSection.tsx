import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, Bookmark } from "lucide-react";
import { faqItems } from "../data";
import { motion } from "framer-motion";

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>("brand-mismatch");

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <motion.section 
      className="py-24 bg-white/70 px-4 text-slate-800 scroll-mt-20 border-b border-slate-200" 
      id="faq"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 text-xs font-mono font-bold uppercase shadow-sm mb-4">
            <Bookmark className="w-4 h-4 text-emerald-400" />
            Hospital & Practitioner Knowledge Base
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
            Guaranteed answers to the questions South African doctors, specialists, and hospital groups ask most about sessional legal cover compliance, private indemnity, and HPCSA Section 41 support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((faq) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-sky-500/50 shadow-lg bg-white/95"
                    : "border-slate-200 hover:border-slate-350 hover:bg-slate-50/50"
                }`}
              >
                {/* Header Question Bar */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className={`w-5.5 h-5.5 shrink-0 mt-0.5 transition-colors duration-300 ${
                      isExpanded ? "text-sky-600" : "text-slate-400"
                    }`} />
                    <span className="font-display font-bold text-slate-900 text-base sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-200 text-slate-500">
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-sky-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Answer Body */}
                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-7 sm:pb-8 border-t border-slate-100 pt-6 space-y-5 animate-fadeIn">
                    
                    {/* Golden Summary Answer Container */}
                    <div className="bg-slate-50 border border-slate-200 p-4.5 rounded-2xl flex items-start gap-3.5">
                      <div className="bg-slate-900 p-1.5 rounded-lg text-emerald-400 border border-slate-800 shrink-0 mt-0.5">
                        <span className="font-mono text-[9px] font-bold tracking-wider">SUMMARY</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                          Consolidated Advisory Answer:
                        </span>
                        <p className="text-slate-900 text-sm sm:text-base font-extrabold leading-relaxed select-text">
                          {faq.answerShort}
                        </p>
                      </div>
                    </div>

                    {/* Detailed regulatory specs */}
                    <div className="space-y-3.5 pl-1 sm:pl-3">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-sky-600 font-extrabold block">
                        Detailed Operational Specifications:
                      </span>
                      {faq.answerLong.map((para, pIdx) => (
                        <p key={pIdx} className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans select-text">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Quality badges */}
                    <div className="pt-4 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-extrabold block mb-3">
                        Regulatory Audit Alignment Properties:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {faq.keyTakeaways.map((takeaway, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center text-[10.5px] font-mono font-bold px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mr-2 shrink-0" />
                            {takeaway}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom help desk disclaimer */}
        <div className="mt-12 bg-slate-50 border border-slate-200 p-5 rounded-3xl flex items-start gap-3.5">
          <AlertCircle className="w-5.5 h-5.5 text-sky-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-500 leading-relaxed font-sans select-text">
            Regulatory Notice: MyMental Health Consulting (Pty) Ltd operates as an authorized administrator under sessional non-life legal insurance licenses (FSP 53666). The firm does not provide psychiatric treatment, clinical psychology, or psychiatric emergency response. Refer directly to the state FSCA registry for certificate validations.
          </p>
        </div>

      </div>
    </motion.section>
  );
}
