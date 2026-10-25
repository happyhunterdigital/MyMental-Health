import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { CONSENT_OPEN_EVENT, getConsent, setConsent } from "../lib/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    const open = () => setVisible(true);
    document.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => document.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  const choose = (value: "accepted" | "declined") => {
    setConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[99990] bg-slate-900 text-slate-200 border border-slate-700 rounded-2xl shadow-2xl p-5"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-800 rounded-xl shrink-0">
          <Cookie className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-white mb-1">We value your privacy</p>
          <p className="text-xs leading-relaxed text-slate-300">
            We use strictly necessary storage (e.g. remembering this choice) and no advertising
            trackers. Analytics and optional third-party scripts stay off until you accept. See our{" "}
            <a href="/privacy" className="text-emerald-400 font-semibold underline underline-offset-2 hover:text-emerald-300">
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => choose("accepted")}
              className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition cursor-pointer"
            >
              Accept
            </button>
            <button
              onClick={() => choose("declined")}
              className="flex-1 border border-slate-600 hover:bg-slate-800 text-slate-200 font-bold text-xs px-4 py-2.5 rounded-xl transition cursor-pointer"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          onClick={() => choose("declined")}
          aria-label="Dismiss cookie notice"
          className="text-slate-500 hover:text-slate-300 p-1 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
