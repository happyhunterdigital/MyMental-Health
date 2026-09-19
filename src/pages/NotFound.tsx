import { FileQuestion, ArrowLeft, Phone, Mail } from "lucide-react";
import { profileMeta } from "../data";

export default function NotFound() {
  const go = (target: string) => {
    window.location.href = target;
  };

  return (
    <div className="min-h-screen bg-cream text-slate-800 font-sans antialiased flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-center">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mb-5">
          <FileQuestion className="w-7 h-7 text-emerald-400" />
        </div>
        <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
          Error 404
        </p>
        <h1 className="font-display font-black text-2xl text-slate-900 mb-2">
          Page not found
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          The page you requested does not exist or was moved. MMHFSP (FSP 53666) medico-legal
          advisory content lives on our home page, privacy policy, or terms of service.
        </p>
        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => go("/")}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition"
          >
            <ArrowLeft className="w-4 h-4" /> Return to home
          </button>
          <div className="flex gap-2.5">
            <button
              onClick={() => go("/privacy")}
              className="flex-1 border border-slate-200 hover:bg-slate-50 font-bold text-xs text-slate-700 px-4 py-3 rounded-xl transition cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => go("/terms")}
              className="flex-1 border border-slate-200 hover:bg-slate-50 font-bold text-xs text-slate-700 px-4 py-3 rounded-xl transition cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
          <p className="font-semibold text-slate-700">Need urgent medico-legal help?</p>
          <a href={`tel:${profileMeta.contact.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center justify-center gap-1.5 hover:text-sky-700">
            <Phone className="w-3.5 h-3.5" /> {profileMeta.contact.phone}
          </a>
          <a href={`mailto:${profileMeta.contact.email}`} className="flex items-center justify-center gap-1.5 hover:text-sky-700 break-all">
            <Mail className="w-3.5 h-3.5" /> {profileMeta.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
