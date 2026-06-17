import { useState, useEffect, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Copy, FileText, Trash2, Calendar, ShieldCheck, User, ShieldAlert } from "lucide-react";
import { profileMeta } from "../data";
import { ClientInquiry } from "../types";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [practiceName, setPracticeName] = useState("");
  const [role, setRole] = useState("Specialist Physician");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interestArea, setInterestArea] = useState("HPCSA Disciplinary (Section 41)");
  const [message, setMessage] = useState("");
  const [urgency, setUrgency] = useState<"Normal" | "High" | "Immediate Dr. Consultation Needed">("Normal");

  // Local storage inquiry state
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [submittedInquiry, setSubmittedInquiry] = useState<ClientInquiry | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Load inquiries on mount
  useEffect(() => {
    const saved = localStorage.getItem("mmhfsp_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse localized inquiries:", e);
      }
    } else {
      // Seed initial sample inquiry to demonstrate the corporate log
      const seed: ClientInquiry[] = [
        {
          id: "seq-101",
          fullName: "Dr. Thabo Motsumi",
          practiceName: "Motsumi Obstetric Chambers",
          role: "Chief Obstetrician Partner",
          email: "motsumitl@gmail.com",
          phone: "+27 (0) 73 898 2212",
          interestArea: "Rule 41A Clinical Mediation",
          message: "We need an assessment of an active maternity risk dispute to see if we can resolve it under Uniform Rule 41A prior to court litigation. Our indemnity broker has suggested a settlement which we do not consent to.",
          createdAt: "2026-06-16T14:24:00Z",
          urgency: "Immediate Dr. Consultation Needed"
        }
      ];
      setInquiries(seed);
      localStorage.setItem("mmhfsp_inquiries", JSON.stringify(seed));
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    const newInquiry: ClientInquiry = {
      id: `seq-${Math.floor(100 + Math.random() * 900)}`,
      fullName,
      practiceName: practiceName || "Private Medical Practice",
      role,
      email,
      phone,
      interestArea,
      message,
      createdAt: new Date().toISOString(),
      urgency
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("mmhfsp_inquiries", JSON.stringify(updated));

    setSubmittedInquiry(newInquiry);
    
    // Clear form fields
    setFullName("");
    setPracticeName("");
    setRole("Specialist Physician");
    setEmail("");
    setPhone("");
    setMessage("");
    setUrgency("Normal");
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem("mmhfsp_inquiries", JSON.stringify(updated));
    if (submittedInquiry?.id === id) {
      setSubmittedInquiry(null);
    }
  };

  // Generate automated legal-intake draft email
  const emailDraftText = submittedInquiry
    ? `Subject: Advisory Intake Request FSP 53666 [ID: ${submittedInquiry.id}]
To: ${profileMeta.contact.email}

Dear Dr. Christopher Mushwana,

I am writing to initiate a medicolegal advisory assessment for my medical practice under FSP 53666.

Practitioner Name: ${submittedInquiry.fullName}
Administrative Role: ${submittedInquiry.role}
Practice Entity: ${submittedInquiry.practiceName}
Direct Phone Vector: ${submittedInquiry.phone}
Target Focus Area: ${submittedInquiry.interestArea}
Client Urgency Status: ${submittedInquiry.urgency}

Intake Statement:
"${submittedInquiry.message || "No custom message provided. Seeking sessional underwriting audit."}"

Please let me know your availability for a secure clinical-legal evaluation block.

Warm regards,
${submittedInquiry.fullName}`
    : "";

  return (
    <section className="py-24 bg-cream px-4 text-slate-800 scroll-mt-20 border-b border-slate-200" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Professional Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-mint text-xs font-mono font-bold uppercase shadow-sm mb-4">
                <Calendar className="w-4 h-4 text-mint" />
                Confidential Case Consultations
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
                Secure Advisor Case Intake
              </h2>
              <p className="text-slate-605 text-slate-500 text-sm leading-relaxed">
                Connect directly with Dr. Christopher Mushwana to outline clinical malpractice cover requirements, HPCSA compliance audits, or alternative dispute mediation structures.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-3 bg-slate-900 rounded-xl text-mint shadow shrink-0">
                  <Phone className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 font-extrabold uppercase tracking-wider">Direct Phone Consultation</h4>
                  <a href={`tel:${profileMeta.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-orange-active font-extrabold text-slate-900 block mt-1 transition text-base">
                    {profileMeta.contact.phone}
                  </a>
                  <span className="text-[10px] text-slate-500 font-medium">Authorized telephonic review sessional line.</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-3 bg-slate-900 rounded-xl text-mint shadow shrink-0">
                  <Mail className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 font-extrabold uppercase tracking-wider">Secure Audit Email Inbox</h4>
                  <a href={`mailto:${profileMeta.contact.email}`} className="hover:text-orange-active font-extrabold text-slate-900 block mt-1 transition text-base break-all">
                    {profileMeta.contact.email}
                  </a>
                  <span className="text-[10px] text-slate-500 font-medium font-sans">For encrypted files and clinical histories.</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-3 bg-slate-900 rounded-xl text-mint shadow shrink-0">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 font-extrabold uppercase tracking-wider">Administrative Head Office</h4>
                  <p className="text-sm text-slate-900 font-bold mt-1 leading-normal">
                    {profileMeta.address.street}, {profileMeta.address.suburb}, {profileMeta.address.city}, {profileMeta.address.province}, {profileMeta.address.code}, {profileMeta.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-3 bg-slate-900 rounded-xl text-mint shadow shrink-0">
                  <Clock className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 font-extrabold uppercase tracking-wider">Consultation Windows</h4>
                  <p className="text-sm text-slate-900 font-bold mt-1">
                    Monday – Friday: 08:00 – 17:00 (SAST)
                  </p>
                  <span className="text-[10px] text-slate-500 font-medium">Confidential clinical-legal assessments are scheduled strictly by appointment.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Interactive Client Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl relative">
              
              {!submittedInquiry ? (
                // INPUT FORM STATE
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4.5 mb-2.5">
                    <h3 className="font-display font-extrabold text-xl text-slate-900">
                      Practice Underwriting & Case Assessment Intake
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      All diagnostic communications operate under strictly confidential clinician-legal privilege.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        Full Name & Credentials <span className="text-sky-600 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Thabo Motsumi"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        Practice/Hospital Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Motsumi Chambers"
                        value={practiceName}
                        onChange={(e) => setPracticeName(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        Your Professional Role
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Specialist Physician">Specialist Physician / Surgeon</option>
                        <option value="General Practitioner (GP)">General Practitioner (GP)</option>
                        <option value="Hospital Risk Architect">Hospital Risk Manager / Board</option>
                        <option value="Allied Healthcare Practitioner">Allied Healthcare Practitioner</option>
                        <option value="Broker Representative">Indemnity Broker Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        Target Risk Area
                      </label>
                      <select
                        value={interestArea}
                        onChange={(e) => setInterestArea(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="HPCSA Disciplinary (Section 41)">HPCSA Disciplinary (Section 41)</option>
                        <option value="Private Indemnity Cover Design">Private Indemnity Cover Design</option>
                        <option value="Rule 41A Clinical Mediation">Rule 41A Clinical Mediation</option>
                        <option value="RWOPS Compliance Audit Cover">RWOPS Compliance Cover</option>
                        <option value="CCMA Sessional Labor Hearing">CCMA Labor Hearing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        Secure Email Vector <span className="text-sky-600 font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. physician@chambers.co.za"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                        Direct Phone Vector <span className="text-sky-600 font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +27 (0) 73 125 4488"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Urgency block with custom high-contrast buttons */}
                  <div>
                    <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                      Client Case Urgency Indicator
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px] sm:text-xs font-bold">
                      {(["Normal", "High", "Immediate Dr. Consultation Needed"] as const).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setUrgency(lvl)}
                          className={`p-2.5 rounded-lg border transition-all cursor-pointer font-bold ${
                            urgency === lvl
                              ? lvl === "Immediate Dr. Consultation Needed"
                                ? "bg-rose-600 shadow-md text-white border-rose-600"
                                : lvl === "High"
                                ? "bg-sky-600 text-white border-sky-600"
                                : "bg-slate-900 text-emerald-400 border-slate-900"
                              : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          {lvl === "Immediate Dr. Consultation Needed" ? "Immediate Consultation" : lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                      Intake Case Statement & Clinical Context
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline any active HPCSA complaints, RWOPS notices, or sessional coverage details..."
                      className="w-full bg-slate-50/50 border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-display font-extrabold py-4 px-4 rounded-xl shadow-lg shadow-sky-600/10 transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-white" />
                    Register Secure Case Cover Application
                  </button>
                </form>
              ) : (
                // SUBMITTED CASE / PRIVILEGED EMAIL DRAFT STATE
                <div className="space-y-6">
                  <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                    <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-full border border-emerald-250 shrink-0">
                      <ShieldCheck className="w-6.5 h-6.5 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl text-slate-900 leading-snug">
                        Regulatory Case Logged Securely
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Intake Case registered under Reference Reference: {submittedInquiry.id}
                      </p>
                    </div>
                  </div>

                  {/* Privilege notice block */}
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex gap-3.5 text-xs leading-relaxed text-amber-900">
                    <ShieldAlert className="w-5.5 h-5.5 text-amber-600 shrink-0 mt-0.5 animate-bounce" />
                    <div>
                      <p className="font-extrabold text-slate-900">Case Privilege Active</p>
                      <p className="mt-0.5 text-slate-700 leading-relaxed text-[11.5px]">
                        To lock-in sessional coverage immediately, copy the generated intake draft email below and send it to Dr. Mushwana&apos;s secure address (<span className="text-slate-900 font-bold">{profileMeta.contact.email}</span>).
                      </p>
                    </div>
                  </div>

                  {/* Generated Email Draft */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="font-mono font-bold uppercase text-slate-400">
                        Generated Corporate Intake Email Text:
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(emailDraftText);
                          setCopiedDraft(true);
                          setTimeout(() => setCopiedDraft(false), 2000);
                        }}
                        className="text-sky-600 hover:text-sky-800 font-mono font-bold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        {copiedDraft ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy Draft Text
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-cream border border-slate-250 p-4.5 rounded-2xl font-mono text-slate-800 text-xs leading-relaxed max-h-[220px] overflow-y-auto select-all select-text">
                      <pre className="whitespace-pre-wrap">{emailDraftText}</pre>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={`mailto:${profileMeta.contact.email}?subject=Secure%20Malpractice%20Advisory%20Intake%20[ID:${submittedInquiry.id}]&body=${encodeURIComponent(
                        submittedInquiry.message || "Hi Dr. Chris, please review my medical practice sessional cover requirements."
                      )}`}
                      className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-lg text-center text-sm flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Dispatch Direct Email
                    </a>
                    <button
                      onClick={() => setSubmittedInquiry(null)}
                      className="border border-slate-250 hover:bg-slate-50 bg-white font-bold text-xs text-slate-700 px-5 py-3 rounded-lg text-center transition cursor-pointer"
                    >
                      Log Another Application
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

        {/* Private Local Admissions Log */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-600"></span>
                  </span>
                  <h3 className="font-display font-black text-slate-900 text-lg uppercase tracking-wider">
                    Client Inquiries & Admissions Vault
                  </h3>
                </div>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed font-sans">
                  Secure local log demonstrating how MMHFSP processes sessional filings in real-time. Saved strictly inside your local browser storage.
                </p>
              </div>

              {inquiries.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm("Purge all localized admissions history? This cannot be undone.")) {
                      localStorage.setItem("mmhfsp_inquiries", JSON.stringify([]));
                      setInquiries([]);
                      setSubmittedInquiry(null);
                    }
                  }}
                  className="text-xs font-mono font-bold text-rose-600 border border-slate-200 hover:border-rose-300 hover:bg-rose-50 px-3.5 py-2 rounded-xl transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Admissions Log
                </button>
              )}
            </div>

            {inquiries.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm font-sans border border-dashed border-slate-200 rounded-2xl">
                <FileText className="w-10 h-10 text-slate-200 mx-auto mb-3" />
                No inquiries active. Register an intake form above to see live entry mapping.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-cream/40 border border-slate-200 p-5 rounded-2xl space-y-3 relative group hover:border-slate-350 transition duration-300"
                  >
                    
                    {/* Urgency Badge */}
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono font-extrabold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                        Case FILE ID: {inq.id}
                      </span>
                      <span className={`text-[9px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                        inq.urgency === "Immediate Dr. Consultation Needed"
                          ? "bg-rose-50 border-rose-250 text-rose-700"
                          : inq.urgency === "High"
                          ? "bg-amber-100 border-amber-250 text-amber-800"
                          : "bg-emerald-50 border-emerald-250 text-emerald-700"
                      }`}>
                        {inq.urgency}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <User className="w-4.5 h-4.5 text-sky-600 bg-white shadow-sm p-1 rounded-full border" />
                        {inq.fullName}
                      </h4>
                      <div className="text-xs text-slate-500 font-bold">
                        {inq.role} • <span className="text-slate-900">{inq.practiceName}</span>
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        Focus: <span className="text-sky-600 font-extrabold">{inq.interestArea}</span>
                      </div>
                    </div>

                    <p className="text-slate-650 text-slate-700 text-xs sm:text-sm italic leading-relaxed bg-white/70 p-3.5 rounded-xl border border-slate-200/50 select-text">
                      &ldquo;{inq.message || "Awaiting supplementary documents or direct advisory callback."}&rdquo;
                    </p>

                    <div className="flex justify-between items-center text-[10px] text-slate-450 font-mono text-slate-450 border-t border-slate-150 pt-2.5">
                      <span>Submitted: {new Date(inq.createdAt).toLocaleDateString()}</span>
                      <button
                        onClick={() => handleDeleteInquiry(inq.id)}
                        className="text-slate-400 hover:text-rose-600 transition"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
