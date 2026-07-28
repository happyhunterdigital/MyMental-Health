import { ShieldAlert, Stethoscope, GitMerge, Scale, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { serviceAreas } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldAlert, Stethoscope, GitMerge, Scale,
};

export default function ServicesProducts() {
  return (
    <motion.section
      className="py-24 bg-slate-50/50 px-4 text-slate-800 scroll-mt-20 border-b border-slate-200"
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 text-xs font-mono font-bold uppercase shadow-sm mb-4">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            Services & Products
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Our Services & Products
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-sans max-w-2xl mx-auto">
            Comprehensive medico-legal protection portfolios designed for healthcare professionals across South Africa, Namibia, and Eswatini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceAreas.map((area) => {
            const Icon = iconMap[area.icon] || ShieldAlert;
            return (
              <div
                key={area.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col hover:shadow-xl hover:border-sky-500/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-brand-indigo scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="p-3.5 bg-slate-900 rounded-2xl shrink-0 shadow-md">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs text-sky-600 font-mono font-bold mt-1 uppercase tracking-wide">
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed font-sans mb-5">
                  {area.description}
                </p>

                <ul className="space-y-2.5 mb-5 flex-grow">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-orange-active animate-pulse" />
                    <span className="text-[10px] font-mono font-extrabold text-orange-active uppercase tracking-wider">
                      Risk Factor
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium italic leading-relaxed">
                    {area.riskFactor}
                  </p>
                  {area.regulatoryReference && (
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wide border-t border-slate-100 pt-2 mt-2">
                      {area.regulatoryReference}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 text-center text-white">
          <h3 className="font-display font-extrabold text-2xl mb-3">Need a Custom Indemnity Portfolio?</h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6 font-sans">
            Dr. Christopher Mushwana personally structures each policy to match your specific clinical risk profile, specialty, and jurisdictional requirements.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-display font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-sky-600/25 transition-all cursor-pointer"
          >
            Request Advisory Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
