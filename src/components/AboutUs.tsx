import { Scale, FileCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { profileMeta } from "../data";

export default function AboutUs() {
  return (
    <section className="py-28 sm:py-36 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header — Left-aligned, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[11px] font-mono font-medium tracking-[0.05em] uppercase text-slate-400 block mb-4">
            About the Firm
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
            {profileMeta.headline}
          </h2>
        </motion.div>

        {/* Asymmetric Grid: 5/7 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column (5 cols): Profile + Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Profile Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 space-y-5">
              <div>
                <p className="font-display font-bold text-lg text-slate-900">
                  {profileMeta.fullName}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  {profileMeta.credentials.map((cred, i) => (
                    <span key={i} className="text-[10px] font-mono font-medium text-slate-500 tracking-wide">
                      {i > 0 && <span className="mr-2 text-slate-300">/</span>}
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-px bg-slate-200" />
              <p className="text-slate-500 text-sm leading-relaxed">
                {profileMeta.bioIntro}
              </p>
            </div>

            {/* Mission Block */}
            <div className="bg-slate-900 text-white rounded-2xl p-7 space-y-4">
              <h3 className="font-display font-bold text-sm tracking-wide uppercase text-white/60">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                To provide South African healthcare professionals with contractually guaranteed, non-discretionary legal insurance and professional malpractice indemnity — bridging the critical gap between clinical delivery and corporate risk underwriting.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[10px] font-mono font-medium text-white/40">
                  FSP {profileMeta.fspLicense}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Capabilities + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {[
              {
                icon: Scale,
                title: "Clinical-Legal Translation",
                desc: profileMeta.bioDetailed,
              },
              {
                icon: FileCheck,
                title: "FSCA-Regulated Compliance",
                desc: `Operating under FSP License ${profileMeta.fspLicense}, with reinsurance backstops from major global reinsurers.`,
              },
              {
                icon: Heart,
                title: "Practitioner-First Philosophy",
                desc: "Healthcare professionals' mental health matters. Whether it is an audit inquiry by the medical aids or a demanding letter from attorneys requesting clinical records, we take care of all communications to ensure your responses are in the legal framework whilst you continue with your clinical practice.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500"
              >
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl shrink-0 group-hover:bg-slate-900 group-hover:border-slate-900 transition-colors duration-500">
                  <item.icon className="w-4.5 h-4.5 text-slate-400 group-hover:text-emerald-400 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-slate-900 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-[13px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { stat: "15+", label: "Years Practice" },
                { stat: "FSP 53666", label: "Licensed Provider" },
                { stat: "1", label: "Country Served" },
                { stat: "R125M", label: "Indemnity Pool" },
              ].map((s) => (
                <div key={s.label} className="text-center py-5 border border-slate-100 rounded-xl">
                  <span className="font-display font-bold text-xl text-slate-900 block">{s.stat}</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-1.5 block">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
