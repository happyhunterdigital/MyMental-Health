import { ShieldCheck, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { profileMeta } from "../data";

const partners = [
  { name: "Santam", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281225/Santam_ff5bid.jpg" },
  { name: "SAFIRE", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281225/SAFIRE_y4rlep.jpg" },
  { name: "PPS", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281224/pps_wsiu5u.jpg" },
  { name: "Old Mutual", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281223/Old-Mutual_m6m9px.jpg" },
  { name: "MiWay", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281223/MIWAY_zu5cc6.jpg" },
  { name: "Kedari", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281223/KEDARI_gfoeut.jpg" },
  { name: "Hollard", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281222/hollard_reb4yg.jpg" },
  { name: "Generic", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281221/Genric_okwxau.jpg" },
  { name: "Allan Gray", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281220/Allan-Gray_ahkzs8.jpg" },
  { name: "Clientele", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281220/Clientele_ny7ugn.jpg" },
  { name: "Aluma Capital", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281220/Aluma-Capital_bueoyw.jpg" },
  { name: "1-Life", src: "https://res.cloudinary.com/dka0498ns/image/upload/v1785281220/1-life_zhvb7x.jpg" },
];

const consultants = [
  {
    name: "Dr Herman Edeling",
    role: "Medical Mediator",
    credential: "SAMLA Chairperson",
    desc: "Leading clinical mediation frameworks under Uniform Rule 41A. Guiding structured alternative dispute resolution for medical practitioners across South African High Court jurisdictions.",
  },
  {
    name: "Mosidi Shomang",
    role: "Insurance Consultant",
    credential: "FSCA Registered",
    desc: "Specialist in sessional indemnity structuring and HPCSA compliance portfolios. Ensuring practitioners receive contractually guaranteed, non-discretionary cover.",
  },
];

function PartnersCarousel() {
  return (
    <div className="relative overflow-hidden py-6">
      <div className="flex" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{ x: [0, -50 * partners.length * 20] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          onMouseEnter={(e) => { (e.currentTarget.closest(".carousel-wrapper") as HTMLElement)?.style.setProperty("animation-play-state", "paused") }}
          style={{ display: "flex", gap: "1.5rem" }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl w-[200px] h-[90px] flex items-center justify-center p-5 shrink-0 grayscale hover:grayscale-0 hover:-translate-y-2 hover:shadow-xl hover:border-sky-500/30 transition-all duration-500 cursor-default"
            >
              <img src={p.src} alt={p.name} className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function StrategicNetwork() {
  return (
    <section className="py-24 bg-white scroll-mt-20 border-b border-slate-200" id="network">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 text-xs font-mono font-bold uppercase shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Strategic Partners & Consultants
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-3">
            Our Strategic Network
          </h2>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mb-4" />
          <p className="text-slate-500 text-sm leading-relaxed font-sans">
            Medical professionals have legal rights too. Through our team of experts, we strive to provide an exceptional and impactful experience for medical professionals that is unmatched in the industry.
          </p>
          <span className="inline-block mt-3 text-[10px] font-mono font-black bg-slate-100 text-sky-700 px-3 py-1 rounded-full uppercase tracking-wider">
            Authorized Financial Services Provider FSP {profileMeta.fspLicense} of non-life insurance
          </span>
        </motion.div>

        <PartnersCarousel />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://res.cloudinary.com/dka0498ns/image/upload/v1785275217/MyMental-Health-logo-Event2_cnazx5.jpg"
              alt="MMHFSP Strategic Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-white text-xs font-mono font-bold bg-slate-900/70 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                Industry Conferences & Engagements
              </span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
              Why Medical Professionals Trust MMHFSP
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Our strategic network is built on years of rigorous vetting and mutual trust. We partner with top-tier insurance providers — Santam, Hollard, Old Mutual, PPS and more — to ensure our clients receive the most robust protection available in the medico-legal landscape, backed by global reinsurers Swiss Re and Munich Re.
            </p>
            <ul className="space-y-3">
              {[
                "Vetted for regulatory compliance under FSCA and FAIS Act",
                "Global reinsurance backing from Swiss Re and Munich Re",
                "Contractually guaranteed, non-discretionary legal cover",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="p-1 bg-emerald-50 rounded-full shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold uppercase mb-4">
              <Users className="w-4 h-4 text-sky-600" />
              Our Resident Consultants
            </div>
            <h3 className="font-display font-black text-2xl text-slate-900">
              Expert Guidance You Can Rely On
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultants.map((c, idx) => (
              <motion.div
                key={c.name}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col sm:flex-row items-start gap-6 hover:shadow-lg hover:border-sky-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0">
                  <span className="text-emerald-400 font-display font-black text-xl">
                    {c.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-display font-extrabold text-lg text-slate-900">{c.name}</h4>
                    <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider">
                      {c.role} &bull; {c.credential}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
