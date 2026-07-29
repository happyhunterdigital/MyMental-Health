import { useState } from "react";
import { Menu, X, Phone, Building } from "lucide-react";
import { profileMeta } from "../data";

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Dr. Mushwana", href: "#profile" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-slate-200 text-slate-800 transition-all shadow-sm" id="nav-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & FSP Tag */}
          <div className="flex items-center space-x-3">
            <img
              src="https://res.cloudinary.com/dka0498ns/image/upload/v1785274897/MyMental_Health_Consultancy_Logo_oeubfx.png"
              alt="MMHFSP Logo"
              className="w-10 h-10 rounded-lg border border-emerald-500/40 object-cover bg-slate-900"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-black text-lg tracking-wider text-slate-900">
                  MMHFSP
                </span>
                <span className="text-[9px] font-mono tracking-wider bg-slate-900 text-emerald-400 px-1.5 py-0.5 rounded font-bold uppercase">
                  FSP 53666
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-tight font-sans">
                MyMental Health Consulting (Pty) Ltd
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Actions & Call to Action */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={`tel:${profileMeta.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-sky-600" />
              {profileMeta.contact.phone}
            </a>
            <button
              onClick={onContactClick}
              className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-display font-extrabold px-5 py-3 rounded-lg shadow-md shadow-sky-600/10 hover:scale-103 active:translate-y-0.5 transition-all cursor-pointer"
            >
              Secure Sessional Case Cover
            </button>
          </div>

          {/* Mobile menu, toggle button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100 transition focus:outline-none"
              aria-label="Toggle main menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-cream border-t border-slate-200 transition-all duration-305 shadow-inner">
          <div className="px-3 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left px-4 py-3 rounded-md text-base font-bold text-slate-700 hover:text-sky-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <div className="border-t border-slate-200 pt-4 mt-4 px-4 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <Building className="w-4 h-4 text-emerald-400 bg-slate-900 p-0.5 rounded" />
                <span>Underwritten by New Era Life</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-display font-extrabold py-3.5 px-4 rounded-xl text-center block text-sm shadow-md cursor-pointer transition-transform"
              >
                Secure Sessional Case Cover
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
