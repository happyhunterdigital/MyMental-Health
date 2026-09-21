import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onFaqClick: () => void;
}

export default function Hero({ onContactClick, onFaqClick }: HeroProps) {
  return (
    <section className="relative min-h-[100dvh] bg-slate-900 overflow-hidden" id="hero">
      
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dka0498ns/image/upload/f_auto,q_auto,w_1920/v1785275217/MyMental-Health-logo-Event_ey5rat.jpg"
          alt="Christopher Mushwana at MMHFSP medico-legal conference"
          className="w-full h-full object-cover object-[center_25%] opacity-40"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
      </div>

      {/* Content — Editorial Split: text left, breathing room right */}
      <div className="relative z-10 min-h-[100dvh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-32 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Typography Block */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.15em] uppercase text-emerald-400/80">
                  <span className="w-8 h-px bg-emerald-400/40" />
                  FSP 53666 — Authorized Financial Services Provider
                </span>
              </motion.div>

              {/* Headline — max 2 lines */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-white leading-[1.08] tracking-tight max-w-2xl"
              >
                Protect Your Career.
                <br />
                <span className="text-white/50">Safeguard Your Future.</span>
              </motion.h1>

              {/* Subtext — max 20 words */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 text-base sm:text-lg text-white/50 leading-relaxed max-w-xl font-light"
              >
                Expert medico-legal representation for healthcare professionals facing regulatory battles, malpractice claims, and contractual disputes.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-col sm:flex-row items-start gap-4"
              >
                <button
                  onClick={onContactClick}
                  className="group inline-flex items-center gap-3 bg-white text-slate-900 font-display font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/90 active:scale-[0.98] cursor-pointer"
                >
                  Request Consultation
                  <span className="w-7 h-7 rounded-full bg-slate-900/5 flex items-center justify-center group-hover:bg-slate-900/10 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white px-4 py-3.5 transition-colors cursor-pointer"
                >
                  Explore Practice Areas
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </div>

            {/* Right: Visual accent — institutional seal / credential block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex lg:col-span-5 justify-end"
            >
              <div className="relative">
                {/* Credential Card */}
                <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 max-w-xs">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-white/30 block mb-2">
                        Key Individual
                      </span>
                      <p className="text-white font-display font-semibold text-lg leading-tight">
                        Christopher Mushwana
                      </p>
                      <p className="text-white/40 text-sm mt-1">MBChB</p>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-white/30 block mb-1">
                          FSP License
                        </span>
                        <p className="text-white font-display font-bold text-xl">53666</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-white/30 block mb-1">
                          Indemnity Pool
                        </span>
                        <p className="text-white font-display font-bold text-xl">R125M</p>
                      </div>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div>
                      <span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-white/30 block mb-1">
                        Jurisdiction
                      </span>
                      <p className="text-white/60 text-sm">Republic of South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
