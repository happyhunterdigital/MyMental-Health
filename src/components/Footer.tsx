import { useState } from "react";
import { Send, Check } from "lucide-react";
import { profileMeta } from "../data";
import DocumentModal from "./DocumentModal";
import type { DocPage } from "./DocumentModal";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [activeDoc, setActiveDoc] = useState<"privacy" | "fsp" | "conflict" | "disclaimer" | "complaints" | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-6 sm:px-8 lg:px-12" id="brand-footer">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Row: Brand + Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 pb-12 border-b border-white/[0.06]">
          
          <div className="max-w-sm">
            <div className="flex items-center space-x-3 mb-5">
              <img
                src="https://res.cloudinary.com/dka0498ns/image/upload/f_auto,q_auto,w_128/v1785274897/MyMental_Health_Consultancy_Logo_oeubfx.png"
                alt="MMHFSP logo"
                className="w-9 h-9 rounded-lg object-cover bg-white/5"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="font-display font-bold text-sm text-white tracking-wide block leading-none">
                  MMHFSP
                </span>
                <span className="text-[8px] font-mono text-emerald-400/70 tracking-wider mt-0.5 block">
                  FSP 53666
                </span>
              </div>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              MyMental Health Consulting (Pty) Ltd — Authorized Financial Services Provider specializing in professional risk advisory, medical malpractice indemnity, and healthcare labor defense.
            </p>
          </div>

          {/* Newsletter */}
          <div className="max-w-sm w-full">
            <h4 className="font-display font-semibold text-white text-sm mb-3">
              Regulatory Updates
            </h4>
            <p className="text-[12px] text-slate-500 mb-4 leading-relaxed">
              Sessional updates, POPI directives, and medical-legal briefs.
            </p>
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-[13px] text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Subscribed.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const cleanEmail = newsletterEmail.trim().toLowerCase();
                  if (cleanEmail && cleanEmail.includes("@")) {
                    setNewsletterSubscribed(true);
                  }
                }}
                className="flex gap-2"
              >
                <input
                  required
                  type="email"
                  placeholder="professional@email.co.za"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] text-white text-[13px] rounded-lg px-4 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-white/20 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-white/[0.06] hover:bg-white/[0.1] text-white px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Row: Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-b border-white/[0.06]">
          
          <div>
            <h5 className="font-display font-semibold text-white text-[13px] mb-4">Navigate</h5>
            <ul className="space-y-2.5">
              {["About", "Services", "Events", "FAQ"].map((name) => (
                <li key={name}>
                  <button
                    onClick={() => scrollToSection(name.toLowerCase() === "about" ? "about" : name.toLowerCase() === "services" ? "services" : name.toLowerCase() === "events" ? "gallery" : "faq")}
                    className="text-[13px] text-slate-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display font-semibold text-white text-[13px] mb-4">Documents</h5>
            <ul className="space-y-2.5">
              <li>
                <a href="/privacy" className="text-[13px] text-slate-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-[13px] text-slate-500 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              {(["privacy", "fsp", "conflict", "disclaimer", "complaints"] as const).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveDoc(key)}
                    className="text-[13px] text-slate-500 hover:text-white transition-colors cursor-pointer capitalize"
                  >
                    {key === "fsp" ? "FSP Disclosure" : key === "conflict" ? "Conflict of Interest" : key}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display font-semibold text-white text-[13px] mb-4">Regulatory</h5>
            <ul className="space-y-2.5 text-[13px] text-slate-500">
              <li>FSCA Licensed</li>
              <li>POPIA Compliant</li>
              <li>FAIS Act Aligned</li>
              <li>Rule 41A Mediation</li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-semibold text-white text-[13px] mb-4">Contact</h5>
            <ul className="space-y-2.5 text-[13px] text-slate-500">
              <li>{profileMeta.contact.phone}</li>
              <li className="break-all">{profileMeta.contact.email}</li>
              <li className="leading-relaxed">
                {profileMeta.address.street},<br />
                {profileMeta.address.city}, {profileMeta.address.province}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] font-mono text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} MyMental Health Consulting (Pty) Ltd. All rights reserved.
          </p>
          <p>
            FSP No. 53666 &middot; Republic of South Africa
          </p>
        </div>
      </div>

      <DocumentModal activeDoc={activeDoc} onClose={() => setActiveDoc(null)} />
    </footer>
  );
}
