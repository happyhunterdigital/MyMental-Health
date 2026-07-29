import { Shield, MapPin, Clock, Phone, Mail, Building, AlertTriangle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { profileMeta, practiceLocations } from "../data";
import ServiceSelector from "./ServiceSelector";

const defensePortfolios = [
  {
    title: "HPCSA Council Disciplinary Representation",
    ref: "Health Professions Act 56 of 1974, Section 41",
    desc: "Automatic, contractually binding legal representation to defend registration, reputation, and livelihood during HPCSA misconduct inquiries. Expert-drafted responses within the strict 40-working-day window.",
  },
  {
    title: "Medical Malpractice & Indemnity Structuring",
    ref: "FSCA Insurer Regulations, FSP License 53666",
    desc: "Structuring customizable, non-discretionary contractual medical malpractice insurance policies backstopped by registered underwriters and reinsurers. Covers private hospitals, specialists, GPs, and allied practitioners.",
  },
  {
    title: "Rule 41A Clinical Mediation & ADR",
    ref: "Uniform Rule 41A of the High Court of South Africa",
    desc: "Integrating structured mediation-first layers into malpractice claims mitigation to save professional reputation and reduce extreme court litigations. 100% practitioner consent guarantee — no settlement without signature.",
  },
  {
    title: "CCMA Labor Defense & RWOPS Regulatory Compliance",
    ref: "Section 30 of the Public Service Act of 1994",
    desc: "Legal advice and courtroom representation for state-employed and private healthcare practitioners facing complex employment disputes. Sessional workplan compliance design and CCMA tribunal defence.",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-cream font-sans antialiased">
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dka0498ns/image/upload/v1785274897/MyMental_Health_Consultancy_Logo_oeubfx.png"
              alt="MMHFSP"
              className="w-8 h-8 rounded-lg border border-emerald-500/40 object-cover"
            />
            <span className="text-white font-display font-extrabold text-sm">MMHFSP</span>
            <span className="text-[9px] font-mono font-bold bg-emerald-400/20 text-emerald-400 px-1.5 py-0.5 rounded">FSP {profileMeta.fspLicense}</span>
          </div>
          <a
            href="https://mymental-health-a6aff.web.app"
            className="flex items-center gap-1.5 text-sky-400 hover:text-white text-xs font-mono font-bold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Main Site
          </a>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-rose-400 text-xs font-mono font-bold uppercase shadow-sm mb-4">
              Confidential Professional Credential Briefing
            </div>
            <span className="text-[10px] font-mono font-black bg-sky-50 text-sky-700 border border-sky-200 px-2 py-1 rounded-full uppercase inline-block mb-3">
              FSP License: {profileMeta.fspLicense} &bull; Authorized Healthcare Indemnity Register
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              Dr. Christopher Mushwana
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-mono font-bold">MBChB | Clinical Trials Principal Investigator | Medicolegal Risk Consultant</p>
          </motion.div>

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm sticky top-24">
                <div className="aspect-[3/4] bg-slate-100 relative">
                  <img
                    src="https://res.cloudinary.com/dka0498ns/image/upload/v1785275402/WhatsApp_Image_2026-07-22_at_15.08.35_pwsu3s.jpg"
                    alt={profileMeta.fullName}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                    <span className="text-white text-xs font-mono font-black uppercase tracking-wider">FSP No. {profileMeta.fspLicense}</span>
                    <p className="text-white/80 text-[11px] font-sans">{profileMeta.firmName}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {profileMeta.credentials.map((c, i) => (
                      <span key={i} className="text-[10px] font-mono font-bold bg-slate-100 text-sky-700 px-2 py-1 rounded-full">{c}</span>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    <a href={`tel:${profileMeta.contact.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-2 text-xs font-mono text-sky-600 hover:text-sky-800 font-bold">
                      <Phone className="w-3.5 h-3.5" /> {profileMeta.contact.phone}
                    </a>
                    <a href={`mailto:${profileMeta.contact.email}`} className="flex items-center gap-2 text-xs font-mono text-sky-600 hover:text-sky-800 font-bold">
                      <Mail className="w-3.5 h-3.5" /> {profileMeta.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Executive Overview */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
                <h2 className="font-display font-extrabold text-lg text-slate-900 uppercase tracking-wide">Executive Overview & Underwriting Value Prop</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{profileMeta.bioIntro}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{profileMeta.bioDetailed}</p>
              </div>

              {/* Regulatory Summary */}
              <div className="bg-gradient-brand-sunset rounded-3xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
                {[
                  { icon: Shield, label: "FSCA License", value: `FSP ${profileMeta.fspLicense}` },
                  { icon: Building, label: "Underwriter", value: `${profileMeta.underwriterName} (FSP ${profileMeta.underwriterFsp})` },
                  { icon: Building, label: "Corporate Entity", value: "MyMental Health Consulting (Pty) Ltd" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/10 rounded-xl">
                    <item.icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-wider block">{item.label}</span>
                      <span className="text-xs font-bold">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Selector */}
              <ServiceSelector />

              {/* Defense Portfolios */}
              <div className="space-y-3">
                <h2 className="font-display font-extrabold text-lg text-slate-900 uppercase tracking-wide">Core Medico-Legal Clinical Defense Portfolios</h2>
                {defensePortfolios.map((p, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-sky-500/30 hover:shadow-md transition-all">
                    <h3 className="font-display font-bold text-slate-900 text-sm">{p.title}</h3>
                    <span className="text-[10px] font-mono text-sky-600 font-bold uppercase block mt-0.5">Regulatory Precedent: {p.ref}</span>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* Practice Locations */}
              <div className="space-y-3">
                <h2 className="font-display font-extrabold text-lg text-slate-900 uppercase tracking-wide">Licensed Practice Locations & Consult Stations</h2>
                <div className="space-y-3">
                  {practiceLocations.map((loc) => (
                    <div key={loc.id} className="bg-white border border-slate-200 rounded-2xl p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-slate-900 rounded-lg shrink-0">
                          <MapPin className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-slate-900 text-sm">{loc.name}</h3>
                          <span className="text-[10px] font-mono font-bold text-sky-600 uppercase">{loc.type}</span>
                        </div>
                      </div>
                      <div className="space-y-1.5 ml-11 text-xs text-slate-600">
                        <p>{loc.address}</p>
                        <p className="flex items-center gap-1.5 text-slate-500"><Clock className="w-3 h-3" /> {loc.operatingHours}</p>
                        <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-sky-600" /> {loc.phone}</p>
                        <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-sky-600" /> {loc.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal Compliance */}
              <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-extrabold text-sm text-slate-900 mb-1">Important Legal & Ethical Compliance Revelation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {profileMeta.firmName} t/a MMHFSP is an Authorized Financial Services Provider registered in South Africa (FSP No: {profileMeta.fspLicense}). This documents legal expenses cover administration and sessional clinical risk assessment protocols under the FSCA and Health Professions Act 56 of 1974. Dr. Christopher Mushwana consults strictly as a medicolegal expert and expert underwriter director, and does not conduct direct sessional clinical psychotherapy or psychiatry counseling care.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 text-xs py-8 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-mono font-bold uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {profileMeta.firmName} &bull; FSP No. {profileMeta.fspLicense}
          </p>
          <p className="mt-1 text-slate-500 font-sans">
            Authorized Financial Services Provider — All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
