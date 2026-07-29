import { useState } from "react";
import { Search, ChevronDown, ArrowRight, Shield, Briefcase, HeartPulse } from "lucide-react";

type Category = "Medico-Legal Services" | "Insurance Products" | "Commercial Insurance";

interface ServiceOption {
  label: string;
  desc: string;
}

const serviceData: Record<Category, ServiceOption[]> = {
  "Medico-Legal Services": [
    { label: "Malpractice Cases and Inquiries", desc: "Assistance and representation as soon as notice or contact is received from a plaintiff's office." },
    { label: "Remuneration Outside the Public Service (RWOP)", desc: "Resolution and legal handling of employment disputes regarding RWOP." },
    { label: "CCMA Matters", desc: "Representation across all CCMA proceedings to protect against income loss and workplace disputes." },
    { label: "Malpractice Indemnity Cover", desc: "Handling professional indemnity policy repudiations and claim rejections." },
    { label: "General Legal Advice", desc: "Direct consultations and expert guidance for legal questions." },
    { label: "Non-Placement of Post-Community HCP", desc: "Advocacy to defend fair placement rights for post-community healthcare professionals." },
    { label: "Employment Contracts", desc: "Legality checks and contract reviews to contest unfair or illegal terms." },
    { label: "Medical Aid Payment Disputes", desc: "Defense against forced acknowledgment of debt and advocacy for direct payouts." },
    { label: "Business Practice Lease Contracts and Disputes", desc: "Contract reviews to protect practitioners in commercial leasing agreements." },
    { label: "Unfair Labour Practices", desc: "Defense against labor violations committed by public or private sector employers." },
    { label: "Default Court Judgments", desc: "Defense against default judgments in business or personal matters to block sheriff enforcement actions." },
  ],
  "Insurance Products": [
    { label: "Life Cover", desc: "Comprehensive life insurance tailored for healthcare professionals and their families." },
    { label: "Retirement Annuity", desc: "Structured retirement planning to secure your financial future beyond clinical practice." },
    { label: "Sickness Benefits", desc: "Income protection when illness prevents you from practicing." },
    { label: "Education Plan", desc: "Secure your children's education with dedicated investment vehicles." },
    { label: "Investments", desc: "Diversified investment portfolios designed for medical professionals." },
    { label: "Home Insurance", desc: "Comprehensive cover for your property and household contents." },
    { label: "Car Insurance", desc: "Tailored vehicle insurance for personal and practice vehicles." },
    { label: "Malpractice Cover", desc: "Professional indemnity insurance against clinical negligence claims." },
    { label: "Business Insurance/Assurance", desc: "Protection for your practice assets, equipment, and business continuity." },
    { label: "Cyber Insurance", desc: "Coverage against data breaches, ransomware, and digital liability." },
    { label: "Bonds of Security", desc: "Surety bonds for regulatory compliance and contractual obligations." },
    { label: "Legal Insurance", desc: "Cover for legal expenses arising from professional and personal matters." },
  ],
  "Commercial Insurance": [
    { label: "Business Insurance", desc: "Comprehensive protection for your practice including property, liability, and interruption cover." },
    { label: "Cyber Insurance", desc: "Defense against cyber threats, data breaches, and digital extortion targeting healthcare practices." },
    { label: "Car Insurance", desc: "Fleet and commercial vehicle insurance for practice operations." },
  ],
};

const categoryIcons: Record<Category, typeof Shield> = {
  "Medico-Legal Services": HeartPulse,
  "Insurance Products": Shield,
  "Commercial Insurance": Briefcase,
};

const categories: Category[] = ["Medico-Legal Services", "Insurance Products", "Commercial Insurance"];

export default function ServiceSelector() {
  const [activeCategory, setActiveCategory] = useState<Category>("Insurance Products");
  const [selectedService, setSelectedService] = useState("");

  const options = serviceData[activeCategory];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap gap-4 sm:gap-8 mb-10 justify-center">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSelectedService(""); }}
              className={`group flex flex-col items-center gap-3 transition-all duration-400 hover:scale-105 cursor-pointer`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-400 ${
                  isActive
                    ? "bg-sky-600 shadow-lg shadow-sky-600/20"
                    : "bg-slate-50 group-hover:bg-sky-50 group-hover:shadow-md"
                }`}
                style={isActive ? { animation: "pulse-glow 2s infinite" } : undefined}
              >
                <Icon
                  className={`w-7 h-7 transition-all duration-400 ${isActive ? "text-white" : "text-sky-600"}`}
                  fill={isActive ? "currentColor" : "none"}
                />
              </div>
              <span
                className={`text-xs font-mono font-bold uppercase tracking-wider transition-all duration-400 ${
                  isActive ? "text-sky-600" : "text-slate-500 group-hover:text-sky-600"
                }`}
              >
                {cat}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-stretch max-w-2xl mx-auto">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </div>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full pl-12 pr-10 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none font-sans text-sm text-slate-800 transition-all cursor-pointer"
          >
            <option value="">Select a specific service...</option>
            {options.map((opt) => (
              <option key={opt.label} value={opt.label}>{opt.label}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </div>
        </div>
        <button
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-sky-600 text-white px-8 py-4 rounded-xl font-display font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-sky-700 hover:shadow-lg active:scale-95 transition-all cursor-pointer group whitespace-nowrap"
        >
          Get Quotes
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>

      {selectedService && (
        <div className="mt-5 max-w-2xl mx-auto">
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
            <p className="text-sm font-bold text-sky-900">{selectedService}</p>
            <p className="text-xs text-sky-700 mt-1">
              {options.find((o) => o.label === selectedService)?.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
