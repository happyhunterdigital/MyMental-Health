import { Shield, Award, GraduationCap, Briefcase, Globe, FileCheck, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { profileMeta } from "../data";

const credentials = [
  { icon: GraduationCap, label: "Medical Degree", value: "MBChB — Medical Practitioner" },
  { icon: Award, label: "Specialization", value: "Clinical Trials Principal Investigator" },
  { icon: Briefcase, label: "Practice Years", value: "15+ Years Active Clinical & Advisory Practice" },
  { icon: Shield, label: "FSP License", value: `FSP No. ${profileMeta.fspLicense} — Key Individual` },
  { icon: Globe, label: "Jurisdictions", value: "South Africa, Namibia, Eswatini" },
  { icon: FileCheck, label: "Reinsurance Partners", value: "Swiss Re, Munich Re" },
];

const expertise = [
  {
    title: "Medical Malpractice Indemnity Structuring",
    desc: "Designing customizable, non-discretionary contractual insurance policies for private hospitals, specialists, and allied healthcare practitioners. Direct negotiation with A-rated global reinsurers.",
  },
  {
    title: "HPCSA Section 41 Defense Strategy",
    desc: "Authoritative clinical-legal narrative construction within the strict 40-working-day regulatory window. Over 15 years of successful preliminary committee dismissals.",
  },
  {
    title: "Rule 41A Clinical Mediation",
    desc: "Certified medical mediation registrar operating under SAMLA frameworks. Structured ADR that resolves claims 80% faster than court litigation with absolute practitioner consent guarantees.",
  },
  {
    title: "RWOPS Compliance & Labor Defense",
    desc: "Section 30 Public Service Act compliance design for state-employed clinicians. CCMA and Labour Court representation for unfair labor practice disputes.",
  },
];

export default function ChrisProfile() {
  return (
    <section className="py-24 bg-cream scroll-mt-20 border-b border-slate-200" id="profile">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 text-xs font-mono font-bold uppercase shadow-sm mb-4">
            <Star className="w-4 h-4 text-emerald-400" />
            Lead Consultant Profile
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            {profileMeta.fullName}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-sans">
            {profileMeta.headline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm sticky top-24">
              <div className="aspect-square bg-slate-100 relative">
                <img
                  src="https://res.cloudinary.com/dka0498ns/image/upload/v1785275402/WhatsApp_Image_2026-07-22_at_15.08.35_pwsu3s.jpg"
                  alt={profileMeta.fullName}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900">{profileMeta.shortName}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {profileMeta.credentials.map((c, i) => (
                      <span key={i} className="text-[10px] font-mono font-bold bg-slate-100 text-sky-700 px-2 py-1 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-slate-500 space-y-1 font-sans">
                  <p className="font-semibold text-slate-700">{profileMeta.firmName}</p>
                  <p>{profileMeta.address.street}, {profileMeta.address.suburb}</p>
                  <p>{profileMeta.address.city}, {profileMeta.address.province}, {profileMeta.address.code}</p>
                  <p>{profileMeta.address.country}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <a href={`tel:${profileMeta.contact.phone.replace(/[^0-9+]/g, "")}`} className="block text-xs font-mono text-sky-600 hover:text-sky-800 font-bold">
                    {profileMeta.contact.phone}
                  </a>
                  <a href={`mailto:${profileMeta.contact.email}`} className="block text-xs font-mono text-sky-600 hover:text-sky-800 font-bold">
                    {profileMeta.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
              <h3 className="font-display font-extrabold text-xl text-slate-900">Professional Biography</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">{profileMeta.bioIntro}</p>
              <p className="text-slate-600 text-sm leading-relaxed font-sans">{profileMeta.bioDetailed}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:border-sky-500/30 transition-all">
                  <div className="p-2.5 bg-slate-900 rounded-xl shrink-0">
                    <item.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{item.label}</span>
                    <p className="text-xs font-bold text-slate-800 mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-xl text-slate-900">Areas of Expertise</h3>
              <div className="space-y-4">
                {expertise.map((exp, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all">
                    <div className="p-2 bg-sky-50 rounded-lg shrink-0 mt-0.5">
                      <Shield className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-sm">{exp.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-brand-indigo text-white rounded-3xl p-8">
              <h3 className="font-display font-extrabold text-xl mb-3">Why Choose Dr. Christopher Mushwana?</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6 font-sans">
                Unlike traditional insurance brokers who lack medical background, Dr. Mushwana&apos;s clinical expertise (MBChB) enables him to translate clinical realities into precise, contractually guaranteed underwriting terms backed by global reinsurers Swiss Re and Munich Re.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-white text-sky-700 font-display font-extrabold px-6 py-3 rounded-xl hover:bg-sky-50 transition-all cursor-pointer text-sm"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
