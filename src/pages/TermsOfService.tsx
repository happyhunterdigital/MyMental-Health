import { Scale, ArrowLeft } from "lucide-react";
import { profileMeta } from "../data";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function goHome(section?: string) {
  window.location.href = section ? `/?section=${section}` : "/";
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream text-slate-800 font-sans antialiased flex flex-col">
      <Navigation onContactClick={() => goHome("contact")} />
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <button
            onClick={() => goHome()}
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 hover:text-sky-900 mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
            <Scale className="w-4 h-4" /> FAIS • FSP 53666
          </div>
          <h1 className="font-display font-black text-3xl text-slate-900 tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-slate-500 mb-8">
            MyMental Health Consulting (Pty) Ltd t/a MMHFSP (FSP No. 53666) • Last updated: September 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-slate-600">
            <p className="font-semibold text-slate-800">
              These Terms govern your use of www.mmhfsp.co.za and any advisory engagement with MyMental
              Health Consulting (Pty) Ltd, an Authorised Financial Services Provider licensed under the
              Financial Advisory and Intermediary Services Act 37 of 2002 (FSP No. 53666).
            </p>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">1. FAIS disclosure (s7 &amp; General Code of Conduct)</h2>
              <p>
                Registered name: MyMental Health Consulting (Pty) Ltd • Trading name: MMHFSP • FSP
                licence: 53666 • Category: Short-Term Insurance: Personal &amp; Commercial Lines •
                Underwriter: New Era Life Insurance (FSP 2736) • Key Individual: Dr. Christopher
                Mushwana (MBChB) • Address: {profileMeta.address.street}, {profileMeta.address.suburb},{" "}
                {profileMeta.address.city}, {profileMeta.address.province}, {profileMeta.address.code} •{" "}
                Regulator: Financial Sector Conduct Authority (FSCA). Professional indemnity cover is
                maintained per FAIS requirements. A Conflict of Interest Management Policy is available
                on request and in the site footer.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">2. Scope of services &amp; mandate</h2>
              <p>
                Services comprise professional risk advisory, medical malpractice indemnity structuring,
                HPCSA Section 41 disciplinary support, Rule 41A clinical mediation intake, and sessional
                labour-law (CCMA/RWOPS) representation support. No service is rendered until a written
                mandate, fee schedule, and policy documentation are signed. Website enquiries alone do not
                create cover.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">3. Fees &amp; remuneration</h2>
              <p>
                Advisory fees, commissions, and underwriter premiums are disclosed in writing before any
                transaction is concluded. You may request a full breakdown at any time. Unpaid fees may
                suspend further work after written notice, subject to professional duties to avoid
                prejudice in live matters.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">4. HPCSA Section 41 &amp; Rule 41A disclaimer</h2>
              <p>
                HPCSA disciplinary outcomes depend on the Council and cannot be guaranteed. Mediation
                under Uniform Rule 41A is voluntary and confidential; no malpractice claim is settled
                without your explicit, informed written consent. Strict procedural windows apply
                (including approximately 40 working days for HPCSA responses) — instruct us promptly and
                supply complete, truthful instructions.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">5. What we are not</h2>
              <p>
                MMHFSP is not a medical scheme (Medical Schemes Act), not a law firm, and no
                attorney–client privilege arises unless a separate written attorney engagement states so.
                We do not provide clinical diagnosis, therapy, or psychiatric treatment. Website content
                is general information only and is not legal, medical, or financial advice; obtain formal
                advice before acting.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">6. Client duties</h2>
              <p>
                You warrant that information you supply is true and complete, that you will disclose
                material facts (claims, complaints, HPCSA notices, RWOPS audits), meet deadlines, and use
                the site lawfully. Misleading information may void underwriting or mandate protections.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">7. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law (including the Consumer Protection Act 68 of
                2008), MMHFSP&apos;s liability for any claim arising from the site or services is limited
                to the fees paid for the relevant mandate in the preceding 12 months. Nothing limits
                liability for fraud, wilful misconduct, or liability that cannot lawfully be excluded.
                No liability is accepted for reliance on general website content without a formal mandate.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">8. Complaints &amp; FAIS Ombud</h2>
              <p>
                Lodge complaints at{" "}
                <a className="text-sky-700 font-semibold" href={`mailto:${profileMeta.contact.email}`}>
                  {profileMeta.contact.email}
                </a>{" "}
                with your name, policy/matter details, and description. We acknowledge within 48 business
                hours, investigate impartially, and aim to resolve within 10 business days (20 for
                complex matters). Unresolved complaints may be referred to the FAIS Ombud
                (www.faisombud.co.za, 012 762 5000) within 6 months of our final response. Records are
                kept for at least 5 years.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">9. Intellectual property &amp; acceptable use</h2>
              <p>
                All site content, logos, and materials belong to MyMental Health Consulting (Pty) Ltd
                unless credited otherwise. You may view and print for personal professional use only. Do
                not scrape, misrepresent, upload malicious code, or interfere with site security.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">10. Governing law &amp; jurisdiction</h2>
              <p>
                These Terms are governed by the laws of the Republic of South Africa. Disputes are
                subject to South African courts, without prejudice to FAIS Ombud jurisdiction over
                qualifying complaints. If any clause is unenforceable, the remainder continues in force.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">11. Changes &amp; contact</h2>
              <p>
                We may update these Terms; material changes are posted here with a revised date.
                Questions:{" "}
                <a className="text-sky-700 font-semibold" href={`mailto:${profileMeta.contact.email}`}>
                  {profileMeta.contact.email}
                </a>{" "}
                • {profileMeta.contact.phone}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer scrollToSection={(id) => goHome(id)} />
    </div>
  );
}
