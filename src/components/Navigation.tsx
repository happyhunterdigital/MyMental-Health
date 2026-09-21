import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { profileMeta } from "../data";

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Endorsements", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Events", href: "#gallery" },
    { name: "Chambers", href: "#locations" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled ? "max-w-5xl" : "max-w-7xl"
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-2xl px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              : "bg-transparent px-2 py-2"
          }`}>
            
            {/* Brand */}
            <div className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/dka0498ns/image/upload/f_auto,q_auto,w_128/v1785274897/MyMental_Health_Consultancy_Logo_oeubfx.png"
                alt="MMHFSP logo"
                className="w-9 h-9 rounded-lg object-cover bg-slate-900"
                width={36}
                height={36}
                decoding="async"
              />
              <div className="flex items-center space-x-2">
                <span className={`font-display font-bold text-sm tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}>
                  MMHFSP
                </span>
                <span className={`text-[8px] font-mono tracking-wider px-1.5 py-0.5 rounded font-bold uppercase transition-colors duration-500 ${
                  scrolled
                    ? "bg-slate-900 text-emerald-400"
                    : "bg-white/15 text-white/80"
                }`}>
                  FSP 53666
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-[13px] font-medium px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                    scrolled
                      ? "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${profileMeta.contact.phone.replace(/[^0-9+]/g, "")}`}
                className={`flex items-center text-[11px] font-medium transition-colors duration-300 ${
                  scrolled ? "text-slate-400 hover:text-slate-700" : "text-white/50 hover:text-white/80"
                }`}
              >
                <Phone className="w-3 h-3 mr-1" />
                {profileMeta.contact.phone}
              </a>
              <button
                onClick={onContactClick}
                className={`text-[12px] font-display font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-white text-slate-900 hover:bg-white/90"
                }`}
              >
                Get Protected
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[49] lg:hidden">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 left-0 right-0 bg-white pt-24 pb-8 px-6 shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => { setIsOpen(false); onContactClick(); }}
                className="w-full bg-slate-900 text-white font-display font-semibold py-3 rounded-lg text-sm cursor-pointer"
              >
                Get Protected
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
