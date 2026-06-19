import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onFaqClick: () => void;
}

export default function Hero({ onContactClick, onFaqClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden font-sans" id="hero">

      {/* SVG Filters for soft, organic glows */}
      <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#e0f2fe" />
            <stop offset="70%" stopColor="#d1fae5" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* ═══════════════════════════════════════════════════
          CSS-ONLY MESH GRADIENT BACKGROUND
          Replaces @paper-design/shaders-react MeshGradient
          ═══════════════════════════════════════════════════ */}

      {/* Primary animated mesh layer — soft blues, greens, and deep slate */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(2,132,199,0.55) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(16,185,129,0.45) 0%, transparent 55%),
            radial-gradient(ellipse at 60% 80%, rgba(3,105,161,0.5) 0%, transparent 50%)
          `,
          backgroundColor: "#0f172a",
          animation: "meshFloat 25s ease-in-out infinite",
        }}
      />

      {/* Secondary depth layer — muted overlay for organic feel */}
      <div
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 70% 60%, rgba(56,189,248,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 30%, rgba(52,211,153,0.35) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 90%, rgba(255,255,255,0.08) 0%, transparent 40%)
          `,
          animation: "meshFloat 35s ease-in-out infinite reverse",
        }}
      />

      {/* Wireframe overlay for subtle geometric depth */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "meshWireframe 20s linear infinite",
        }}
      />

      {/* Grain texture overlay for premium feel */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ═══════════════════════════════
          HERO CONTENT
          ═══════════════════════════════ */}
      <main className="absolute inset-0 z-20 flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">

          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md mb-8 relative border border-white/10"
            style={{ filter: "url(#glass-effect)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide">
              FSP No. 53666 | MyMental Health Consulting (Pty) Ltd
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block font-light text-white/90 text-3xl md:text-5xl mb-3 tracking-wide">
              Medical Malpractice
            </span>
            <span
              className="block font-extrabold pb-2"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #38bdf8 30%, #34d399 70%, #ffffff 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
                animation: "gradientShift 10s linear infinite",
              }}
            >
              Insurance Specialist
            </span>
            <span className="block font-light text-white/80 text-4xl md:text-6xl mt-1">
              Christopher Mushwana
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl font-light text-slate-200 mb-10 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Bridging the complex gap between clinical healthcare delivery and corporate risk management. 
            Delivering institutional-grade medical malpractice insurance structuring and clinical indemnity solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-sky-900 font-semibold text-sm transition-all duration-300 hover:bg-sky-50 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Practice Areas
            </motion.button>
          </motion.div>
        </div>
      </main>

      {/* ══════════════════════════════════════════════════════
          AMBIENT PULSING ORB — CSS-only
          Replaces @paper-design/shaders-react PulsingBorder
          ══════════════════════════════════════════════════════ */}
      <div className="absolute bottom-10 right-10 z-30 hidden md:block opacity-60">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div
            className="rounded-full"
            style={{
              width: "80px",
              height: "80px",
              border: "2px solid rgba(2,132,199,0.5)",
              background: "radial-gradient(circle at center, rgba(16,185,129,0.12) 0%, rgba(2,132,199,0.06) 50%, transparent 70%)",
              animation: "pulseOrb 5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

    </section>
  );
}
