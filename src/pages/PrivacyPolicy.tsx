import { ShieldCheck, ArrowLeft } from "lucide-react";
import { profileMeta } from "../data";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function goHome(section?: string) {
  if (section) {
    window.location.href = `/?section=${section}`;
  } else {
    window.location.href = "/";
  }
}

export default function PrivacyPolicy() {
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
          <span className="text-[11px] font-mono font-medium tracking-[0.05em] uppercase text-slate-400 block mb-4">
            POPIA &amp; GDPR Compliant
          </span>
          <h1 className="font-display font-black text-3xl text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-500 mb-8">
            MyMental Health Consulting (Pty) Ltd t/a MMHFSP (FSP No. 53666) &bull; Last updated: September 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-slate-600">
            <p className="font-semibold text-slate-800">
              MyMental Health Consulting (Pty) Ltd, trading as MMHFSP (FSP No: {profileMeta.fspLicense}),
              is committed to protecting your personal information in accordance with the Protection of
              Personal Information Act (POPI Act No. 4 of 2013, South Africa), the EU General Data
              Protection Regulation (GDPR) where applicable, Health Professions Council of South Africa
              (HPCSA) confidentiality rules, and Financial Sector Conduct Authority (FSCA) record-keeping
              requirements.
            </p>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">1. Information Officer</h2>
              <p>
                Information Officer: Christopher Mushwana (Key Individual). Contact:{" "}
                <a className="text-sky-700 font-semibold" href={`mailto:${profileMeta.contact.email}`}>
                  {profileMeta.contact.email}
                </a>{" "}
                &bull; {profileMeta.contact.phone} &bull; {profileMeta.address.street},{" "}
                {profileMeta.address.suburb}, {profileMeta.address.city},{" "}
                {profileMeta.address.province}, {profileMeta.address.code}, {profileMeta.address.country}.
                You may also lodge complaints with the Information Regulator of South Africa
                (inforegulator.org.za).
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">2. Information we collect</h2>
              <p>
                We collect only minimal, relevant data: names and credentials, HPCSA or practice
                registration numbers, practice addresses, email addresses, telephone numbers, mandate and
                underwriting details you supply, and technical data (device, pages visited). We do not
                collect special personal information (health, biometric, criminal) without your explicit
                written consent, and we never request clinical patient records through this website.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">3. Purpose of processing (POPIA s11 / GDPR Art. 6)</h2>
              <p>
                Information is processed on the lawful bases of consent, contract, and legal obligation,
                exclusively for: underwriting risk assessment, issuing sessional indemnity certifications,
                formulating HPCSA Section 41 advisory narratives, Rule 41A mediation intake,
                complaints handling, and FSCA/FAIS regulatory compliance. We do not use your data for
                unrelated marketing without opt-in consent.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">4. HPCSA confidentiality</h2>
              <p>
                All practitioner communications are treated as confidential under HPCSA ethical rules on
                professional confidentiality. Intake statements are shared with instructed counsel,
                underwriters or reinsurers only where strictly
                necessary to fulfil your mandate and with appropriate confidentiality safeguards.
                Nothing on this website creates a doctor–patient, attorney–client, or insurer–insured
                relationship until a written mandate is signed.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">5. FSCA record-keeping (5-year retention)</h2>
              <p>
                In compliance with the FAIS Act General Code of Conduct, we retain mandates, advice
                records, policy schedules, and complaints records for a minimum of five (5) years after
                termination of the product or finalisation of a complaint. Records are stored encrypted
                (TLS in transit, encrypted at rest via Firebase/Firestore) with role-based access.
                Physical notes are kept in locked, access-controlled facilities under the custodianship
                of Christopher Mushwana.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">6. Data subject rights</h2>
              <p>
                You have the right to access, correct, delete, object to, or restrict processing of your
                personal information, to withdraw consent, and to data portability (GDPR). To exercise
                these rights, email{" "}
                <a className="text-sky-700 font-semibold" href={`mailto:${profileMeta.contact.email}`}>
                  {profileMeta.contact.email}
                </a>
                . We respond within 30 days. EU/UK visitors may also complain to their supervisory authority.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">7. Third-party disclosure &amp; cross-border transfer</h2>
              <p>
                We do not sell personal information. Disclosure occurs only with consent or where required
                by law or regulators (HPCSA, FSCA, FAIS Ombud, courts). Services operate in South Africa,
                South Africa; cross-border transfers use GDPR Chapter V safeguards (adequacy or
                standard contractual clauses). Processors (hosting, email) are bound by written agreements.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">8. Cookies</h2>
              <p>
                This site uses strictly necessary cookies/localStorage (e.g. cookie consent choice,
                intake drafts). No advertising or third-party tracking cookies are deployed without your
                opt-in. Manage your choice any time via the cookie banner or by clearing site data. See
                our Cookie Notice in the site banner for details.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">9. Security &amp; breach notification</h2>
              <p>
                We apply industry-standard safeguards: HTTPS/HSTS, encrypted storage, least-privilege
                access, and input validation. Suspected breaches are assessed promptly and notified to the
                Information Regulator and affected subjects where legally required.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">10. Children</h2>
              <p>
                This site serves healthcare professionals and is not directed at children. We do not
                knowingly collect children&apos;s data.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">11. Important disclaimers</h2>
              <p>
                MMHFSP is an Authorised Financial Services Provider (FSP 53666). It is not a medical
                scheme, not a law firm, and does not provide clinical diagnosis or treatment. Website
                content is general information only, not legal, medical, or financial advice.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-slate-900 mb-1">12. Policy updates</h2>
              <p>
                This policy is reviewed annually. Material changes are posted here with a revised date.
                Continued use of the site constitutes acceptance of the current version.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer scrollToSection={(id) => goHome(id)} />
    </div>
  );
}
