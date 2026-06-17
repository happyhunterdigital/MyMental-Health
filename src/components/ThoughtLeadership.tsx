import React, { useState } from "react";
import { 
  FileText, Calendar, Clock, ArrowRight, BookOpen, Search, Filter, 
  ChevronRight, Bookmark, X, Shield, Lock, Award, CornerDownRight 
} from "lucide-react";

interface Article {
  id: string;
  category: "HPCSA Compliance" | "POPI Act & Privacy" | "Litigation Defense" | "Dispute Resolution";
  title: string;
  excerpt: string;
  content: string;
  keyTakeaways: string[];
  pubDate: string;
  readTime: string;
  author: string;
  role: string;
}

export const insightsArticles: Article[] = [
  {
    id: "art-001",
    category: "HPCSA Compliance",
    title: "The HPCSA Section 41 Playbook: Constructing a Compliant Explanatory Narrative",
    excerpt: "A tactical breakdown of structural defense strategies for clinical practitioners during the rigid 40-day regulatory board response window.",
    pubDate: "2026-06-10",
    readTime: "6 min read",
    author: "Dr. Christopher Mushwana",
    role: "Lead Medical Law Consultant",
    keyTakeaways: [
      "Submit clinical summaries utilizing the SOAP methodology (Subjective, Objective, Assessment, Plan).",
      "Avoid retroactive modifications to existing patient electronic medical records.",
      "Involve specialized medicolegal counsel before releasing information to patient representatives."
    ],
    content: "When a formal complaint is referred under Section 41 of the Health Professions Act, the HPCSA delivers an official citation demanding a verified explanation within 40 calendar days. Many clinicians write defense accounts independently, risking litigation exposure by using subjective descriptions. High-quality responses ground themselves strictly in objective diagnostic records, informed-consent logs, and verified timeline templates. This playbook explores critical drafting practices, including structural analysis of clinical trials and the avoidance of common legal traps."
  },
  {
    id: "art-002",
    category: "POPI Act & Privacy",
    title: "Clinical POPI Act Compliance: Double-Layer Security for Digital Health Files",
    excerpt: "Practical regulatory mandates for South African medical practices to safeguard digital databases, prevent fines, and protect patient trust.",
    pubDate: "2026-05-24",
    readTime: "8 min read",
    author: "Advocate Lillian Sibanda",
    role: "Senior Legal Data Counsel",
    keyTakeaways: [
      "Perform end-to-end cloud database encryption on all active patient records.",
      "Establish strict access controls tracking every personnel file access attempt.",
      "Maintain physical logs of hard-copy consultation summaries with secure disposal registers."
    ],
    content: "Under the Protection of Personal Information Act (POPIA), healthcare practices act as 'Responsible Parties' managing high-risk 'Special Personal Information'. The South African Information Regulator expects double-layered encryption for both rest and transit databases. Failing to implement physical and network access walls leaves clinicians personally liable, both to regulatory fines of up to R10 million and to professional misconduct proceedings before the HPCSA."
  },
  {
    id: "art-003",
    category: "Dispute Resolution",
    title: "The Strategic Advantage of Uniform Rule 41A Clinical Mediation",
    excerpt: "How pre-trial mediation preserves professional reputations, curtails legal cycles, and gives clinicians contract veto power.",
    pubDate: "2026-04-18",
    readTime: "5 min read",
    author: "Dr. Christopher Mushwana",
    role: "Mediation Registrar & Clinical Director",
    keyTakeaways: [
      "Use Rule 41A immediately upon receipt of summons to signal good-faith resolution.",
      "Protect sensitive internal clinical case reviews under complete mediation privilege.",
      "Contractually demand a personal signature veto to retain absolute decision dominance."
    ],
    content: "South African High Courts actively return medical litigation disputes back to arbitration panels where parties bypass Uniform Rule 41A prerequisites. Certified SAMLA mediation processes resolve delicate claims in an average of 45 days, compared to the 3-5 year lifespan of standard actions. This maintains absolute confidentiality, shields medical reputations, and prevents the emotional drainage associated with cross-examinations."
  },
  {
    id: "art-004",
    category: "Litigation Defense",
    title: "Obstetric Claims Defense: Navigating Sessional Liability Boundaries",
    excerpt: "Dissecting indemnity structures and state sessional program exposures under the expanded R125 Million reinstated limits.",
    pubDate: "2026-03-30",
    readTime: "7 min read",
    author: "Advocate Lillian Sibanda",
    role: "Senior Litigation Counsel",
    keyTakeaways: [
      "Validate that state hospital sessional activities do not breach sessional limitations.",
      "Secure pre-written Section 30 approvals for all outside public service work.",
      "Audit the informed consent trail for every high-risk maternal delivery sessional program."
    ],
    content: "Obstetrics and sessional surgery continue to face a rising trend of litigation exposure. When clinicians work within state sessional assignments, they must verify where state indemnity ends and personal professional liability begins. Many clinicians find themselves vulnerable to indemnity gaps if their primary policies lack explicit sessional coverage. MMHFSP's R125 Million reinstated tier addresses these exact vulnerabilities with customized protection shields."
  }
];

export default function ThoughtLeadership() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "HPCSA Compliance", "POPI Act & Privacy", "Litigation Defense", "Dispute Resolution"];

  const filteredArticles = insightsArticles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-cream/35 scroll-mt-20 border-b border-slate-200" id="insights">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-mint text-xs font-mono font-bold uppercase shadow-sm mb-4">
              <BookOpen className="w-4 h-4 text-mint" />
              MEDICO-LEGAL INSIGHTS & INTEL
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
              Thought Leadership Forum
            </h2>
            <p className="text-slate-600 text-sm mt-4 font-sans leading-relaxed">
              Dr. Christopher Mushwana and guest legal experts compile critical brief reviews, POPIA defense playbooks, and clinical-legal precedents to keep practices protected.
            </p>
          </div>

          {/* Search Controls */}
          <div className="w-full lg:w-72 relative">
            <input
              type="text"
              placeholder="Search legal briefs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-250 text-slate-800 text-xs rounded-xl pl-9 pr-4 py-3 placeholder:text-slate-400 focus:outline-none focus:border-orange-active transition-colors font-sans"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200" id="insights-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer font-sans ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white hover:bg-slate-100/80 border border-slate-200 text-slate-650"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="insights-articles-grid">
            {filteredArticles.map((art) => (
              <div 
                key={art.id}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Accent band */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-150 group-hover:bg-gradient-to-r group-hover:from-orange-active group-hover:to-indigo-500 transition-all" />

                <div className="space-y-4">
                  
                  {/* Category & Date metadata */}
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold select-none text-slate-500">
                    <span className="text-[#FF7A3D] uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.pubDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-slate-900 text-lg sm:text-lg group-hover:text-orange-active transition-colors leading-snug">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {art.excerpt}
                  </p>

                </div>

                {/* Footer and Read button */}
                <div className="border-t border-slate-100 pt-5 mt-6 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 select-none">
                    <div className="bg-slate-100 p-1 rounded font-sans text-[10px] font-bold text-slate-500">
                      📝 {art.readTime}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-[11px] font-mono font-black uppercase text-[#667EEA] hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    Open Full Briefing
                    <ArrowRight className="w-4 h-4 text-[#667EEA]" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-slate-200 p-12 text-center rounded-3xl text-slate-400 font-sans">
            No professional briefs matching your specified filters. Type a different query.
          </div>
        )}

      </div>

      {/* ARTICLE BRIEF MODAL VIEWPORT */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          id="insight-briefing-modal"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* High visual accent header */}
            <div className="h-2 bg-gradient-brand-sunset" />

            {/* Modal dismiss bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 select-none">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] bg-slate-100 text-[#FF7A3D] px-2 py-1 rounded border border-slate-200 uppercase font-black tracking-wide">
                  {selectedArticle.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-bold">
                  Published: {selectedArticle.pubDate}
                </span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-700 p-1.5 hover:bg-slate-100 rounded-lg transition-all"
                aria-label="Dismiss insight view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main content body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400">
                  <span>Author: {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.role}</span>
                </div>
              </div>

              {/* Main article text */}
              <div className="text-slate-700 text-sm leading-relaxed font-sans select-text space-y-4">
                <p className="font-semibold text-slate-800 text-base leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
                <p>
                  {selectedArticle.content}
                </p>
                <p>
                  Practice-level risks require immediate, continuous attention. Dr. Mushwana and our team counsel clinicians to perform regular, documented process updates to preserve compliance standing.
                </p>
              </div>

              {/* Takeaways block */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-3 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#FF7A3D] to-indigo-600" />
                <div className="flex items-center space-x-1.5 mb-1 select-none">
                  <Shield className="w-4.5 h-4.5 text-indigo-700" />
                  <span className="text-[11px] font-mono font-black tracking-widest text-[#FF7A3D] uppercase">
                    Risk Reduction Actions Required:
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-sans leading-relaxed">
                      <CornerDownRight className="w-4 h-4 text-orange-active shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Footer triggers */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-150 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[10.5px] text-slate-400 font-sans font-medium text-center sm:text-left">
                Protect your medical practice from HPCSA and clinical liability exposure.
              </span>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  const contactBlock = document.getElementById("contact");
                  if (contactBlock) {
                    contactBlock.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                Request Sessional Risk Advisory
                <ArrowRight className="w-3.5 h-3.5 text-mint" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
