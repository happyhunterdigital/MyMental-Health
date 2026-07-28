import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { motion } from "framer-motion";

const eventImages = [
  "https://res.cloudinary.com/dka0498ns/image/upload/v1785275218/MyMental-Health-logo-Event3_rjcnmq.jpg",
  "https://res.cloudinary.com/dka0498ns/image/upload/v1785275217/MyMental-Health-logo-Event_ey5rat.jpg",
  "https://res.cloudinary.com/dka0498ns/image/upload/v1785275216/MyMental_Health_Consultancy_Event6_hfkqdy.jpg",
  "https://res.cloudinary.com/dka0498ns/image/upload/v1785275216/MyMental_Health_Consultancy_Event4_xfhihs.jpg",
  "https://res.cloudinary.com/dka0498ns/image/upload/v1785275216/mymental_health_envent4_b9kyln.jpg",
  "https://res.cloudinary.com/dka0498ns/image/upload/v1785275215/MyMental_Health_Consultancy_Event2_ua3htn.jpg",
  "https://res.cloudinary.com/dka0498ns/image/upload/v1785275215/MyMental_Health_Consultancy_Event1_bvwtih.jpg",
];

export default function EventGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goTo = (dir: "prev" | "next") => {
    if (lightbox === null) return;
    const next = dir === "prev"
      ? (lightbox - 1 + eventImages.length) % eventImages.length
      : (lightbox + 1) % eventImages.length;
    setLightbox(next);
  };

  return (
    <motion.section
      className="py-24 bg-white px-4 text-slate-800 scroll-mt-20 border-b border-slate-200"
      id="gallery"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 text-xs font-mono font-bold uppercase shadow-sm mb-4">
            <Camera className="w-4 h-4 text-emerald-400" />
            Firm Events & Engagements
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mb-4">
            Conference & Event Gallery
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-sans">
            Dr. Christopher Mushwana engaging with healthcare professionals at medico-legal conferences, industry summits, and regulatory training sessions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {eventImages.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(idx)}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 group cursor-pointer relative bg-slate-100"
            >
              <img
                src={src}
                alt={`MMHFSP Event ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm animate-fadeIn p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10 cursor-pointer"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goTo("prev"); }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white p-3 z-10 cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goTo("next"); }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white p-3 z-10 cursor-pointer"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <img
            src={eventImages[lightbox]}
            alt={`MMHFSP Event ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 text-white/50 text-xs font-mono">
            {lightbox + 1} / {eventImages.length}
          </div>
        </div>
      )}
    </motion.section>
  );
}
