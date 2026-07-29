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
    <div className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col overflow-hidden bg-surface-cream">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        >
          <source src="https://res.cloudinary.com/dka0498ns/video/upload/v1785347881/Dr._Chris_Mushwana_lwjsac.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-cream via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 z-50">
        <img
          src="https://res.cloudinary.com/dka0498ns/image/upload/v1785274897/MyMental_Health_Consultancy_Logo_oeubfx.png"
          alt="MMHFSP"
          className="w-8 h-8 rounded-full border border-white/20 object-cover"
        />
        <a
          href="https://mymental-health-a6aff.web.app"
          className="text-white hover:text-sky-200 text-xs font-mono font-bold transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full"
        >
          Back to Main Site
        </a>
      </nav>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Partner Logo Trust Bar */}
      <section className="w-full py-4 sm:py-5 mt-auto bg-white/90 backdrop-blur-sm border-t border-white/20 z-40 overflow-hidden">
        <div
          className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap px-4"
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[...partners, ...partners].map((p, i) => (
            <div key={`${p.name}-${i}`} className="flex-shrink-0 w-32 h-14 sm:w-40 sm:h-16 bg-white rounded-xl flex items-center justify-center border border-slate-100 hover:shadow-md transition-shadow">
              <img src={p.src} alt={p.name} className="max-w-[75%] max-h-[65%] object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
