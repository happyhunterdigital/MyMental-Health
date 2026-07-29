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

export default function ProfileHero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-surface-cream">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto min-w-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/dka0498ns/video/upload/v1785347881/Dr._Chris_Mushwana_lwjsac.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-cream via-surface-cream/40 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 sm:px-8 py-6 z-50">
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dka0498ns/image/upload/v1785274897/MyMental_Health_Consultancy_Logo_oeubfx.png"
            alt="MMHFSP"
            className="w-8 h-8 rounded-full border border-brand-blue/30 object-cover"
          />
        </div>
        <a
          href="https://mymental-health-a6aff.web.app"
          className="flex items-center gap-1.5 text-sky-600 hover:text-sky-800 text-xs font-mono font-bold transition-colors"
        >
          Back to Main Site
        </a>
      </nav>

      {/* Hero Content */}
      <section className="flex-grow flex flex-col items-center justify-center relative px-4 text-center z-20">
        {/* Side vertical labels */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden lg:block" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-500 font-medium">Driven By Excellence</span>
        </div>
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:block" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-500 font-medium">Driven By Integrity</span>
        </div>

        {/* Massive headline */}
        <div className="relative z-10 select-none mb-4">
          <h1
            className="font-outfit font-black uppercase tracking-tighter text-slate-900 leading-[0.85]"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)", letterSpacing: "-0.05em" }}
          >
            Christopher
            <br />
            Mushwana
          </h1>
        </div>

        {/* Signature overlay */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden sm:block">
          <span className="font-['Mrs_Saint_Delafield',cursive] text-brand-blue text-[clamp(2rem,8vw,6rem)] whitespace-nowrap opacity-40">
            mmhfsp
          </span>
        </div>

        {/* Credentials block */}
        <div className="absolute right-6 sm:right-10 bottom-20 max-w-[280px] text-right z-30 hidden xl:block">
          <p className="text-[11px] font-bold leading-tight uppercase tracking-[0.15em] text-slate-800">
            MBChB | Clinical Trials Principal Investigator | Medicolegal Risk Consultant
          </p>
          <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-[0.15em] leading-relaxed">
            Leading excellence in medical law and clinical research with a focus on patient safety and legal compliance.
          </p>
        </div>
      </section>

      {/* Partner Logo Trust Bar */}
      <section className="w-full py-5 mt-auto bg-white border-t border-slate-100 z-40 overflow-hidden">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap px-4" onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")} onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}>
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 w-40 h-16 bg-white rounded-xl flex items-center justify-center border border-slate-200 hover:shadow-md transition-shadow mix-blend-multiply"
            >
              <img src={p.src} alt={p.name} className="max-w-[80%] max-h-[70%] object-contain" loading="lazy" style={{ mixBlendMode: "multiply" }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
