import { X } from "lucide-react";
import { profileMeta } from "../data";

type DocPage = "privacy" | "fsp" | "conflict" | "disclaimer" | "complaints" | null;

interface DocumentModalProps {
  activeDoc: DocPage;
  onClose: () => void;
}

const docs: Record<NonNullable<DocPage>, { title: string; content: string[] }> = {
  privacy: {
    title: "Privacy Policy — POPI Act Compliance",
    content: [
      `MyMental Health Consulting (Pty) Ltd, trading as MMHFSP (FSP No: ${profileMeta.fspLicense}), is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPI Act No. 4 of 2013).`,
      "1. Information We Collect: We collect only minimal necessary data including names, professional registration numbers, practice addresses, email addresses, and contact numbers. We do not collect special personal information without explicit consent.",
      "2. Purpose of Processing: Information is processed exclusively for underwriting risk assessment, issuing sessional indemnity certifications, formulating Section 41 advisory narratives, and maintaining regulatory compliance records.",
      "3. Data Storage & Security: All digital records are secured with industry-standard encryption. Physical notes are stored in locked, access-controlled facilities under the direct custodianship of Dr. Christopher Mushwana.",
      "4. Data Subject Rights: You retain full statutory rights to access, update, correct, or request deletion of your personal information. Direct all inquiries to " + profileMeta.contact.email + ".",
      "5. Third-Party Disclosure: We do not sell, trade, or transfer personally identifiable information to external parties without consent, except when required by law or regulatory bodies such as the HPCSA or FSCA.",
      "6. Cookies & Tracking: This website uses essential session cookies for functionality. No tracking cookies or third-party analytics that capture personal data are deployed without consent.",
      "7. Policy Updates: This privacy policy is reviewed annually. Material changes will be communicated via the website. Last updated: July 2026.",
    ],
  },
  fsp: {
    title: "FSP 53666 — Financial Services Provider Disclosure",
    content: [
      `MyMental Health Consulting (Pty) Ltd is an Authorized Financial Services Provider licensed under the Financial Advisory and Intermediary Services Act (FAIS Act No. 37 of 2002).`,
      "FSP License Number: 53666",
      `Registered Name: MyMental Health Consulting (Pty) Ltd`,
      `Trading Name: MMHFSP`,
      "Category of License: Short-Term Insurance: Personal Lines and Commercial Lines",
      `Underwriter: New Era Life Insurance (FSP License 2736)`,
      `Key Individual: Dr. Christopher Mushwana (MBChB)`,
      `Registered Address: ${profileMeta.address.street}, ${profileMeta.address.suburb}, ${profileMeta.address.city}, ${profileMeta.address.province}, ${profileMeta.address.code}`,
      "Regulatory Body: Financial Sector Conduct Authority (FSCA)",
      "Complaints Resolution: Complaints may be directed to the FAIS Ombud. Contact details are available at www.faisombud.co.za or via telephone at 012 762 5000.",
      "Conflict of Interest: MMHFSP maintains a Conflict of Interest Management Policy available upon request. No advisor receives commissions that compromise objective risk assessment.",
      `Professional Indemnity Insurance: Maintained in accordance with FAIS Act requirements.`,
    ],
  },
  conflict: {
    title: "Conflict of Interest Policy",
    content: [
      `In compliance with Section 3A of the General Code of Conduct for Authorised Financial Services Providers, MyMental Health Consulting (Pty) Ltd (FSP ${profileMeta.fspLicense}) hereby publishes its Conflict of Interest Management Policy.`,
      "1. Objective: To establish mechanisms for the identification, avoidance, and transparent disclosure of any actual or potential conflicts of interest between MMHFSP and its clients.",
      "2. Identification: Potential conflicts are assessed in every client engagement including: (a) Relationships with third-party product providers, (b) Remuneration structures from insurers, (c) Personal interests of representatives and key individuals.",
      "3. Avoidance: MMHFSP avoids placing itself in positions where its obligations to one client conflict with obligations to another. Independent assessments are conducted for each policy placement.",
      "4. Disclosure: Where conflicts cannot be avoided, full written disclosure is made to the affected client before any transaction is concluded. Clients retain the right to refuse or terminate the engagement.",
      "5. Remuneration Transparency: All fees, commissions, and charges are disclosed in writing. No undisclosed financial incentives influence policy recommendations.",
      "6. Governance: This policy is reviewed annually by the Key Individual (Dr. Christopher Mushwana). All staff and representatives receive annual conflict of interest training.",
      `7. Reporting: Clients may report perceived conflicts to ${profileMeta.contact.email}. Complaints unresolved internally may be escalated to the FAIS Ombud.`,
    ],
  },
  disclaimer: {
    title: "Website Disclaimer",
    content: [
      "The information contained on this website is for general informational purposes only and does not constitute legal, medical, or financial advice.",
      "1. No Professional Relationship: Accessing this website does not create a client-advisor, attorney-client, or doctor-patient relationship. Formal engagement requires a written agreement.",
      "2. Accuracy: While MMHFSP endeavors to keep information current, regulatory and legal frameworks change. Verify critical information directly with qualified professionals.",
      "3. Limitation of Liability: MMHFSP, its directors, and representatives shall not be liable for any loss or damage arising from reliance on website content without formal professional consultation.",
      "4. External Links: This website may link to third-party resources. MMHFSP does not endorse and is not responsible for external content, products, or services.",
      "5. Not Clinical Advice: MMHFSP does not provide clinical psychology, psychiatric treatment, or medical diagnosis. Individuals requiring mental health support should contact registered healthcare providers.",
      "6. Jurisdiction: This website is governed by the laws of the Republic of South Africa. Disputes are subject to the jurisdiction of South African courts.",
      "7. Intellectual Property: All content, logos, and materials on this website are the property of MyMental Health Consulting (Pty) Ltd unless otherwise credited.",
    ],
  },
  complaints: {
    title: "Complaints Management Framework",
    content: [
      `MyMental Health Consulting (Pty) Ltd (FSP ${profileMeta.fspLicense}) is committed to fair, transparent, and timely resolution of all client complaints in compliance with FAIS Act and FSCA regulatory requirements.`,
      "1. Lodging a Complaint: Complaints may be submitted via email to " + profileMeta.contact.email + " or in writing to our registered address. Please include your name, policy details, and a clear description of the issue.",
      "2. Acknowledgment: All complaints are acknowledged in writing within 48 business hours. A reference number is provided for tracking.",
      "3. Investigation: An impartial investigation is conducted by a senior representative not directly involved in the subject matter. Additional documentation may be requested.",
      "4. Resolution Timeline: We aim to resolve complaints within 10 business days. Complex matters requiring external consultation may extend to 20 business days with written notification.",
      `5. Outcome Communication: The outcome is communicated in writing with clear reasoning. If remedial action is required, timelines are specified.`,
      "6. Escalation: If unsatisfied with the resolution, clients may escalate to the Key Individual, Dr. Christopher Mushwana, for final internal review.",
      "7. External Recourse: Clients retain the right to refer unresolved complaints to the FAIS Ombud at www.faisombud.co.za or by telephone at 012 762 5000.",
      "8. Record Keeping: All complaint records are maintained for a minimum of 5 years in compliance with FAIS Act record-keeping requirements.",
    ],
  },
};

export default function DocumentModal({ activeDoc, onClose }: DocumentModalProps) {
  const doc = activeDoc ? docs[activeDoc] : null;
  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 bg-gradient-brand-indigo" />

        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="font-display font-black text-slate-900 text-sm tracking-wide">
            {doc.title}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 hover:bg-slate-100 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5 overflow-y-auto max-h-[70vh] text-sm leading-relaxed text-slate-600 font-sans select-text">
          {doc.content.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "font-semibold text-slate-800" : ""}>
              {p}
            </p>
          ))}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-6 py-3 rounded-xl transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export { type DocPage };
