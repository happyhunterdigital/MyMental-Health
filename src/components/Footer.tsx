import { useState } from "react";
import { Heart, Send, Check } from "lucide-react";
import { profileMeta } from "../data";
import DocumentModal from "./DocumentModal";
import type { DocPage } from "./DocumentModal";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<"privacy" | "fsp" | "conflict" | "disclaimer" | "complaints" | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 font-sans relative border-t-4 border-orange-active" id="brand-footer">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:20px_20px] opacity-10 select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 pb-12 mb-12">
          
          {/* Column 1: Firm Meta */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <img
                src="https://res.cloudinary.com/dka0498ns/image/upload/v1785274897/MyMental_Health_Consultancy_Logo_oeubfx.png"
                alt="MMHFSP Logo"
                className="w-10 h-10 rounded-lg border border-mint/40 object-cover bg-slate-950"
              />
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-widest block leading-none">
                  MMHFSP
                </span>
                <span className="text-[9px] font-mono text-[#090d16] bg-mint px-2 py-0.5 rounded font-extrabold mt-1 inline-block uppercase tracking-wider">
                  FSP License 53666
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              MyMental Health Consulting (Pty) Ltd operates as an Authorized Financial Services Provider (FSP No. 53666), specializing in professional risk advisory, medical malpractice indemnity planning, and sessional healthcare labor defense architectures.
            </p>

            {/* Cross-Border Footprint */}
            <div className="pt-2">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2">
                Regulated Territories of Operations
              </span>
              <div className="flex flex-wrap gap-2">
                {["Republic of South Africa (RSA)", "Namibia", "Eswatini"].map((country) => (
                  <span
                    key={country}
                    className="text-[10px] bg-slate-950/60 border border-slate-800 px-2.5 py-1 rounded text-slate-300 font-mono"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Legal Citations & Compliances */}
          <div className="md:col-span-3 space-y-3 font-mono text-slate-400 text-[11px] leading-relaxed">
            <div className="font-display font-bold text-xs text-mint uppercase tracking-wider mb-2">
              Regulatory Underwriting & Alignment
            </div>
            <p>
              &bull; Short-Term non-life legal expense policies are underwritten by <span className="text-white font-medium">New Era Life Insurance (FSP 2736)</span>.
            </p>
            <p>
              &bull; Reinsurance pool capacity is collateralized in direct alignments with Swiss Re and Munich Re.
            </p>
            <p>
              &bull; Operational mediation protocols adhere directly to <span className="text-white font-medium">Uniform Rule 41A</span> directives under South African High Court legal frameworks.
            </p>
          </div>

          {/* Column 3: Index Navigation */}
          <div className="md:col-span-1 space-y-3">
            <div className="font-display font-bold text-xs text-slate-300 uppercase tracking-wider mb-2">
              Navigate
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("gallery")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  Events
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory Documents */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs text-slate-300 uppercase tracking-wider mb-2">
              Documents
            </div>
            <ul className="space-y-2 text-xs">
              {([
                { key: "privacy", label: "Privacy Policy" },
                { key: "fsp", label: "FSP 53666 Disclosure" },
                { key: "conflict", label: "Conflict of Interest Policy" },
                { key: "disclaimer", label: "Website Disclaimer" },
                { key: "complaints", label: "Complaints Management" },
              ] as const).map(({ key, label }) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveDoc(key)}
                    className="text-mint hover:text-orange-active transition cursor-pointer font-bold text-left block"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter Signup Form */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs text-slate-300 uppercase tracking-wider mb-2">
              Regulatory Newsletter
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive crucial sessional updates, POPI directives, and South African medical-legal briefs.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-slate-950/80 border border-mint/30 p-3 rounded-xl flex items-center gap-2 text-xs text-mint font-sans">
                <Check className="w-4 h-4 text-mint shrink-0" />
                <span>Subscribed successfully! Thank you.</span>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  // Apply defensive input sanitization: lowercase and trim
                  const cleanEmail = newsletterEmail.trim().toLowerCase();
                  if (cleanEmail && cleanEmail.includes("@")) {
                    setNewsletterSubscribed(true);
                  }
                }}
                className="space-y-2 mt-2"
              >
                <div className="relative">
                  <input
                    required
                    type="email"
                    placeholder="Enter professional email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl pl-3 pr-10 py-3 placeholder:text-slate-500 focus:outline-none focus:border-orange-active transition-colors font-sans"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 text-slate-400 hover:text-orange-active top-1 p-2 bg-slate-900 hover:bg-slate-850 rounded-lg transition-colors cursor-pointer"
                    title="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 font-mono">
                  Under POPIA standards. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} MyMental Health Consulting (Pty) Ltd • FSP No. 53666 • All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 transition">
            <span className="text-slate-600 hover:text-slate-400 cursor-pointer" onClick={() => setIsPrivacyOpen(true)}>POPIA Audited Compliant</span>
            <Heart className="w-3.5 h-3.5 text-orange-active fill-orange-active" />
          </p>
        </div>

      </div>

      {/* Document Modal */}
      <DocumentModal activeDoc={activeDoc} onClose={() => setActiveDoc(null)} />

    </footer>
  );
}
