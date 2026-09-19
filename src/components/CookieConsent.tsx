import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const KEY = "mmhfsp_cookie_consent";
const MAX_AGE_DAYS = 180;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(raw) as { value: string; ts: number };
      const ageMs = Date.now() - (parsed.ts || 0);
      if (ageMs > MAX_AGE_DAYS * 24 * 60 * 60 * 1000) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ value, ts: Date.now() }));
    } catch {
      /* storage unavailable — banner simply hides */
    }
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
            trackers. Optional intake drafts stay on your device. See our{" "}
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
