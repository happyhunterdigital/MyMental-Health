import { Shield, Scale, FileCheck, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { profileMeta } from "../data";

export default function AboutUs() {
  return (
    <motion.section
      className="py-24 bg-white px-4 text-slate-800 scroll-mt-20 border-b border-slate-200"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 text-xs font-mono font-bold uppercase shadow-sm mb-4">
            <Users className="w-4 h-4 text-emerald-400" />
            About Our Firm
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Who We Are
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-sans">
            {profileMeta.headline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4">
              <h3 className="font-display font-extrabold text-xl text-slate-900">
                {profileMeta.fullName}
              </h3>
              <div className="flex flex-wrap gap-2">
                {profileMeta.credentials.map((cred, i) => (
                  <span key={i} className="text-[10px] font-mono font-bold bg-slate-900 text-emerald-400 px-3 py-1 rounded-full uppercase">
                    {cred}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                {profileMeta.bioIntro}
              </p>
            </div>

            <div className="bg-gradient-brand-indigo text-white rounded-3xl p-8 space-y-4">
              <h3 className="font-display font-extrabold text-xl">Our Mission</h3>
              <p className="text-sm leading-relaxed font-sans text-white/90">
                To provide South African, Namibian, and Eswatini healthcare professionals with contractually guaranteed, non-discretionary legal insurance and professional malpractice indemnity — bridging the critical gap between clinical delivery and corporate risk underwriting.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-[10px] font-mono font-black bg-white/15 px-3 py-1.5 rounded-full uppercase">
                  FSP License {profileMeta.fspLicense}
                </span>
                <span className="text-[10px] font-mono font-black bg-white/15 px-3 py-1.5 rounded-full uppercase">
                  Underwritten by {profileMeta.underwriterName}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: Shield,
                title: "Contract-Backed Protection",
                desc: "Unlike mutual defense organizations offering discretionary cover, MMHFSP provides legally binding, non-discretionary insurance contracts.",
              },
              {
                icon: Scale,
                title: "Clinical-Legal Translation",
                desc: `${profileMeta.bioDetailed}`,
              },
              {
                icon: FileCheck,
                title: "FSCA-Regulated Compliance",
                desc: `Operating under FSP License ${profileMeta.fspLicense}, administered through ${profileMeta.underwriterName} (FSP ${profileMeta.underwriterFsp}), with reinsurance backstops from Swiss Re and Munich Re.`,
              },
              {
                icon: Heart,
                title: "Practitioner-First Philosophy",
                desc: "No malpractice claim is ever settled without the explicit, informed, and written consent of the doctor. Your reputation matters as much as your indemnity.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-sky-500/40 hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-slate-900 rounded-xl shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stat: "15+", label: "Years Clinical Practice" },
            { stat: "FSP 53666", label: "Authorized Provider" },
            { stat: "3", label: "Countries Served" },
            { stat: "R125M", label: "Indemnity Pool Capacity" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-emerald-400/40 transition-all duration-300">
              <span className="font-display font-black text-3xl text-sky-600 block">{s.stat}</span>
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-2 block">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
