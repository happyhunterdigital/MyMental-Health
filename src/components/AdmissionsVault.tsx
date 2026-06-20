import { Trash2, FileText, User } from "lucide-react";
import { ClientInquiry } from "../types";

interface AdmissionsVaultProps {
  inquiries: ClientInquiry[];
  setInquiries: React.Dispatch<React.SetStateAction<ClientInquiry[]>>;
  submittedInquiry: ClientInquiry | null;
  setSubmittedInquiry: React.Dispatch<React.SetStateAction<ClientInquiry | null>>;
  handleDeleteInquiry: (id: string) => void;
}

export default function AdmissionsVault({
  inquiries,
  setInquiries,
  submittedInquiry,
  setSubmittedInquiry,
  handleDeleteInquiry
}: AdmissionsVaultProps) {
  return (
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
  );
}
