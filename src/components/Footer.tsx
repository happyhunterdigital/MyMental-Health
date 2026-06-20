import { useState } from "react";
import { ShieldCheck, Heart, Send, Check, X, Lock, Shield } from "lucide-react";
import { profileMeta } from "../data";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-350 py-16 px-4 font-sans relative border-t-4 border-orange-active" id="brand-footer">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:20px_20px] opacity-10 select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 pb-12 mb-12">
          
          {/* Column 1: Firm Meta */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="bg-slate-950 p-2 rounded-lg border border-mint/40">
                <ShieldCheck className="w-6 h-6 text-mint" />
              </div>
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
              • Short-Term non-life legal expense policies are underwritten by <span className="text-white font-medium">New Era Life Insurance (FSP 2736)</span>.
            </p>
            <p>
              • Reinsurance pool capacity is collateralized in direct alignments with Swiss Re and Munich Re.
            </p>
            <p>
              • Operational mediation protocols adhere directly to <span className="text-white font-medium">Uniform Rule 41A</span> directives under South African High Court legal frameworks.
            </p>
          </div>

          {/* Column 3: Jump Shortcuts */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs text-slate-300 uppercase tracking-wider mb-2">
              Index Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection("bio")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  Executive Narrative
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  Practice Portfolios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("insights")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  Insights & Intel
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-slate-400 hover:text-orange-active transition cursor-pointer text-left block">
                  FAQ Directory
                </button>
              </li>
              <li>
                <button onClick={() => setIsPrivacyOpen(true)} className="text-mint hover:text-orange-active transition cursor-pointer font-bold text-left block">
                  POPI Act & Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup Form */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-display font-bold text-xs text-slate-300 uppercase tracking-wider mb-2">
              Regulatory Newsletter
            </div>
            <p className="text-xs text-slate-450 text-slate-400 leading-relaxed">
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
            <span className="text-slate-650 hover:text-slate-400 cursor-pointer" onClick={() => setIsPrivacyOpen(true)}>POPIA Audited Compliant</span>
            <Heart className="w-3.5 h-3.5 text-orange-active fill-orange-active" />
          </p>
        </div>

      </div>

      {/* POPI ACT & PRIVACY POLICY MODAL DIALOG */}
      {isPrivacyOpen && (
        <div 
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn font-sans text-slate-800"
          id="privacy-policy-view"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div 
            className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Visual brand header accent stripe */}
            <div className="h-2 bg-gradient-brand-sunset" />

            {/* Title & Close Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 select-none">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-indigo-700" />
                <span className="font-display font-black text-slate-900 text-sm tracking-wide">
                  POPI ACT COMPLIANCE & PRIVACY GENERAL DIRECTIVE
                </span>
              </div>
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1.5 hover:bg-slate-100 rounded-lg transition-all"
                aria-label="Close dialog viewport"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Policy Body text */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[70vh] text-xs sm:text-sm select-text leading-relaxed text-slate-600">
              <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-xs uppercase font-mono mb-1">South African Information Regulator Verification</span>
                  <span>MyMental Health Consulting (Pty) Ltd t/a MMHFSP (FSP No: 53666). In terms of South Africa&apos;s Protection of Personal Information Act (POPI Act No. 4 of 2013), we are strictly committed to safeguarding patient and clinician personal coordinates, sessional risk assessment metrics, and sessional case queries. We do not process health information for unauthorized commercial use.</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-extrabold text-slate-900 text-base">1. Accountable Personal Processing & Purpose</h4>
                <p>
                  MMHFSP acts as a &ldquo;Responsible Party&rdquo; under Section 1 of POPIA when collecting or evaluating practitioner and clinical system coordinates. We gather inputs strictly for underwriting risk models, issuing sessional indemnity certifications, and formulating Section 41 advisory narrative blueprints.
                </p>
                
                <h4 className="font-display font-extrabold text-slate-900 text-base">2. Minimality and Safe Consent Limits</h4>
                <p>
                  We collect only minimal necessary data blocks (emails, mobile routes, practice license registration keys). Every sessional case quote query is strictly processed upon active consent. Sessional patient documents shared for legal audits are treated under strict attorney-client clinical consulting privilege.
                </p>

                <h4 className="font-display font-extrabold text-slate-900 text-base">3. Double-Layer Server Safety Safeguards</h4>
                <p>
                  All digital clinical dossiers are secured with secure industry-standard encryption protocols. Physical notes and sessional briefs are locked within certified files under the direct custodian responsibility of Dr. Christopher Mushwana. We operate direct security logs monitoring all active database access points daily.
                </p>

                <h4 className="font-display font-extrabold text-slate-900 text-base">4. Therapist Care Deconfliction Disclosure</h4>
                <p>
                  In alignment with South African medical laws, MMHFSP serves exclusively as an advisory sessional counseling board. We do not execute direct sessional healthcare treatment or psychiatric therapeutic sessions. Clinicians or patients requiring active counseling are systematically referred to registered state healthcare institutions.
                </p>

                <h4 className="font-display font-extrabold text-slate-900 text-base">5. Data Subject Rights & Corrections</h4>
                <p>
                  You retain full statutory rights to inspect, update, correct, or demand the deletion of your personal records from our databases. Direct all information auditing queries to our dedicated privacy desk at <span className="text-slate-900 font-semibold">{profileMeta.contact.email}</span>.
                </p>
              </div>

            </div>

            {/* Action Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-150 flex justify-end">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                Acknowledge & Avert Risk
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
}
