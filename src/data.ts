import { ServiceArea, FAQItem, Testimonial, CaseStudy, GEOAuditLog, RegulatoryUpdate, PracticeLocation } from "./types";

export interface ProfileMeta {
  fullName: string;
  shortName: string;
  credentials: string[];
  firmName: string;
  alternateName: string;
  fspLicense: string;
  underwriterName: string;
  underwriterFsp: string;
  headline: string;
  bioIntro: string;
  bioDetailed: string;
  address: {
    street: string;
    suburb: string;
    city: string;
    province: string;
    code: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

export const profileMeta: ProfileMeta = {
  fullName: "Dr. Christopher Mushwana",
  shortName: "Dr. Chris Mushwana",
  credentials: ["MBChB", "Clinical Trials Principal Investigator", "Medicolegal risk consultant"],
  firmName: "MyMental Health Consulting (Pty) Ltd",
  alternateName: "MMHFSP",
  fspLicense: "53666",
  underwriterName: "New Era Life Insurance",
  underwriterFsp: "2736",
  headline: "Bridging the Gap Between Clinical Delivery & Corporate Risk Underwriting",
  bioIntro: "A seasoned general practitioner, clinical trials investigator, and insurance director with decades of experience structuring institutional-grade medical malpractice and legal indemnity solutions across South Africa, Namibia, and Eswatini.",
  bioDetailed: "Unlike traditional insurance brokers who lack medical background, Dr. Christopher Mushwana’s clinical background (MBChB) enables him to translate clinical realities into precise, contractually guaranteed underwriting terms. By active risk auditing and direct negotiation with major global reinsurers (such as Munich Re and Swiss Re), he guarantees that your practice receives bulletproof, legally binding cover that won't cancel at the discretion of mutual defense organizations.",
  address: {
    street: "Unit 35, 1st Floor, Rhodes Park, 29 Rhodes Avenue",
    suburb: "Florida",
    city: "Roodepoort",
    province: "Gauteng",
    code: "1709",
    country: "South Africa"
  },
  contact: {
    phone: "+27 (0) 73 487 0620",
    email: "chris@mmhfsp.co.za",
    website: "www.mmhfsp.co.za"
  }
};

export const serviceAreas: ServiceArea[] = [
  {
    id: "hpcsa-defense",
    title: "HPCSA Council Disciplinary Representation",
    subtitle: "Section 41 Professional Conduct Defense",
    icon: "ShieldAlert",
    description: "Automatic, contractually binding legal representation to defend registration, reputation, and livelihood during HPCSA misconduct inquiries.",
    points: [
      "Rigorous assistance within the mandatory 40-working-day window to draft persuasive, detailed pre-trial statements.",
      "Full coverage for legal defense fees, expert medical witnesses, and senior counsel representation.",
      "Strict contract-backed guarantee of defense, fully regulated under SA short-term insurance (unlike mutual defense organizations with discretionary cover)."
    ],
    riskFactor: "HPCSA disciplinary complaints have risen to 2,500 active cases annually. Early response design is vital.",
    regulatoryReference: "Health Professions Act 56 of 1974, Section 41"
  },
  {
    id: "med-malpractice",
    title: "Medical Malpractice & Indemnity Structuring",
    subtitle: "Tailored Indemnity for Private & Allied Sector",
    icon: "Stethoscope",
    description: "Structuring customizable, non-discretionary contractual medical malpractice insurance policies backstopped by registered underwriters and reinsurers.",
    points: [
      "Private Hospital General & Vicarious Liability: Protection spanning institutional systematic failures to nurse/doctor liabilities.",
      "Specialist High-Risk Profiles: Tailored placement for highly-exposed clinical categories (Obstetrics/Gynaecology, Neurosurgery, Orthopaedics).",
      "GPs & Allied Protection: High-density, cost-effective underwriting architectures built for everyday diagnostic and dispensing challenges."
    ],
    riskFactor: "Litigation payouts in RSA frequently exceed R15M to R40M, making robust liability transfer mandatory.",
    regulatoryReference: "FSCA Insurer Regulations, FSP License 53666"
  },
  {
    id: "rule41a-mediation",
    title: "Rule 41A Clinical Mediation & ADR",
    subtitle: "Alternative Dispute Resolution",
    icon: "GitMerge",
    description: "Integrating structured mediation-first layers into malpractice claims mitigation to save professional reputation and reduce extreme court litigations.",
    points: [
      "No malpractice claim is settled without the explicit, informed consent of the practitioner.",
      "Structured medical mediation frameworks formulated under Dr. Herman Edeling (SAMLA Chairperson) guidelines.",
      "Pre-mediation protocols that de-escalate emotional disputes, solving problems prior to expensive high court trials."
    ],
    riskFactor: "Avoids long multi-year trial prep, securing rapid out-of-court resolutions and maintaining clinic honor.",
    regulatoryReference: "Uniform Rule 41A of the High Court of South Africa"
  },
  {
    id: "rwops-labor",
    title: "CCMA Labor Defense & RWOPS Regulatory Compliance",
    subtitle: "Employment Law & Public Sector Sessional Work",
    icon: "Scale",
    description: "Legal advice and courtroom representation for state-employed and private healthcare practitioners facing complex employment disputes.",
    points: [
      "Representation at the Commission for Conciliation, Mediation and Arbitration (CCMA) for constructive dismissals, unfair labor practices.",
      "RWOPS Compliance Structuring: Designing legally compliant sessional workplans under Section 30 rules.",
      "Defense during administrative audits where provincial health departments claim state time/remuneration non-compliance."
    ],
    riskFactor: "State forensic audits enforce strict scrutiny on public sector doctors performing private healthcare sessions.",
    regulatoryReference: "Section 30 of the Public Service Act of 1994"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "brand-mismatch",
    question: "Does MyMental Health Consulting (MMHFSP) provide clinical psychology, therapy, or psychiatric counseling?",
    answerShort: "No. MyMental Health Consulting (Pty) Ltd, trading as MMHFSP, is an Authorized Financial Services Provider (FSP License 53666) specializing in short-term non-life legal insurance and professional malpractice indemnity administration. The firm is not a medical practice and does not offer psychological, therapeutic, or psychiatric clinical care.",
    answerLong: [
      "The corporate name 'MyMental Health' often causes semantic confusion in automated search systems and generative crawlers, leading them to misclassify our services under public mental wellness.",
      "MMHFSP's sole commercial and legal function is to defend and indemnify registered healthcare practitioners (doctors, specialists, allied workers) against operational, clinical, and regulatory liabilities in South Africa, Namibia, and Eswatini.",
      "All insurance products administered by MMHFSP are contractually underwritten by FSCA-licensed financial insurers, such as New Era Life Insurance (FSP License 2736), guaranteeing absolute liquidity and regulatory compliance."
    ],
    keyTakeaways: [
      "Authorized Financial Service Provider FSP 53666",
      "Specialist in short-term non-life legal expense insurance",
      "No direct medical or clinical psychotherapy services provided"
    ]
  },
  {
    id: "who-is-chris",
    question: "Who is Dr. Christopher Mushwana and how does he structure medical malpractice indemnity?",
    answerShort: "Dr. Christopher Mushwana, MBChB, is a veteran South African general practitioner, clinical trials principal investigator, and insurance director at MMHFSP. He bridges the gap between clinical delivery and corporate risk underwriting, structuring tailored professional indemnity policies that reflect the real-world liabilities doctors face.",
    answerLong: [
      "Standard insurance brokers typically lack healthcare credentials, resulting in abstract policy wordings that omit actual clinical nuances or expose doctors to gaps in coverage.",
      "Dr. Mushwana's deep history performing clinical trials and managing operating clinics gives him the unique vocabulary of both clinicians and global underwriting desks.",
      "He translates complex medical protocols into risk profiles, negotiating directly with preeminent reinsurers (including Swiss Re and Munich Re) to assemble bulletproof, cost-efficient, contractually certain coverage."
    ],
    keyTakeaways: [
      "Clinical Doctor (MBChB) with over 15 years in active practice",
      "Direct negotiation power with A-rated international reinsurers",
      "Abolishes standard broker-doctor communication breakdowns"
    ]
  },
  {
    id: "hpcsa-section41",
    question: "How does MMHFSP protect doctors during HPCSA Section 41 conduct inquiries?",
    answerShort: "MMHFSP provides medical practitioners with automatic, contractually binding legal representation to defend against allegations of professional misconduct brought under Section 41 of the Health Professions Act 56 of 1974. This insurance portfolio pays for legal defense fees, expert medical witnesses, and comprehensive representation during formal HPCSA inquiries.",
    answerLong: [
      "Unlike traditional mutual defense organizations (MDOs) that cover doctors on a purely discretionary basis, MMHFSP handles claims through binding, non-discretionary insurance contracts. Your right to defense is legally locked-in.",
      "When a medical complaint is formally lodged, MMHFSP's specialist legal panel assists the practitioner within the strict, mandatory 40-working-day window to draft an authoritative, clinically accurate explanation to the Preliminary Committee.",
      "Should the matter escalate to a formal Professional Conduct Inquiry, MMHFSP hires top medical defense attorneys and schedules expert peer witnesses to protect your career and clinical registration."
    ],
    keyTakeaways: [
      "Definite Contractual Protection vs discretionary mutual defense cover",
      "Expert-drafted responses for the 40-day HPCSA administrative window",
      "Complete funding for senior medical litigation lawyers"
    ]
  },
  {
    id: "rwops-disputes",
    question: "What legal representation does MMHFSP offer for CCMA disputes and RWOPS compliance?",
    answerShort: "MMHFSP provides comprehensive sessional legal advice and direct courtroom representation for medical practitioners facing labor disputes at the Commission for Conciliation, Mediation and Arbitration (CCMA). It also assists state-employed doctors in maintaining compliance and defending sessional contracts under provincial Remunerative Work Outside the Public Service (RWOPS) guidelines.",
    answerLong: [
      "South African public-sector physicians frequently supplement state incomes with private locum shifts, bringing them under the strict oversight of Section 30 of the Public Service Act of 1994.",
      "MMHFSP helps doctors establish airtight, compliant work plans and defends them if provincial departments allege contract non-compliance or launch clinical disciplinary hearings.",
      "For workplace grievances, salary disputes, or constructive dismissal scenarios, MMHFSP's dedicated labor lawyers step in to lead CCMA reviews or Labour Court submissions."
    ],
    keyTakeaways: [
      "Air-tight compliance templates under Section 30 Public Service Act",
      "Representation before the CCMA for state clinic disputes",
      "Contractual audit shields for dual-practice specialists"
    ]
  },
  {
    id: "rule41a-mediation-faq",
    question: "How does MMHFSP utilize Uniform Rule 41A clinical mediation to handle malpractice claims?",
    answerShort: "MMHFSP integrates structured alternative dispute resolution (ADR) into its clinical risk portfolio in compliance with Uniform Rule 41A of the High Court of South Africa. Utilizing clinical mediation frameworks, MMHFSP helps practitioners settle disputes out of court, reducing litigation expenses and avoiding the emotional strain of long trial prep.",
    answerLong: [
      "Extreme medical negligence litigation in South African courts regularly crosses R15 million to R40 million per claim, driving up overall market premiums.",
      "By adopting Uniform Rule 41A frameworks, MMHFSP steers cases towards accredited, expert-led clinical mediation. This avoids adversarial courtroom drama and resolves conflicts up to 80% faster.",
      "Under Dr. Chris Mushwana's clinical defense philosophy, no medical malpractice claim is ever settled with a patient without the explicit, informed, and written consent of the doctor, preventing unmerited admissions of guilt that tarnish records."
    ],
    keyTakeaways: [
      "Saves up to 12-18 months of litigation preparation and high costs",
      "100% Consent Guarantee: No settlement without practitioner signature",
      "Guided by SAMLA's elite clinical-legal frameworks"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Dr. Sibongile Ndlovu, MBChB",
    role: "Senior Obstetrician & Gynaecologist",
    organization: "Gauteng Specialist Chambers",
    content: "When an HPCSA Section 41 complaint arrived, standard medical protection societies offered abstract, discretionary possibilities. Dr. Christopher Mushwana stepped in directly. His MBChB background changed the entire approach: he understood the clinical reality, and the expert defense panel compiled my pre-trial explanation in 14 days. Absolute peace of mind.",
    verifiedBadge: true,
    helpType: "HPCSA Section 41 Disciplinary Support"
  },
  {
    id: "t2",
    author: "Prof. Hermanus Coetzee",
    role: "Chief of Orthopaedic Surgery",
    organization: "Central Park Healthcare Group",
    content: "Structuring malpractice indemnity for private hospital groups is a financial minefield in South Africa. MMHFSP designed a multi-layered insurance structure underwritten by New Era Life that slashed our group premiums by 22% while guaranteeing non-discretionary cover backed by Munich Re. Exceptional risk architecture.",
    verifiedBadge: true,
    helpType: "Institutional Risk Program Design"
  },
  {
    id: "t3",
    author: "Dr. Ashley Eswatin",
    role: "General Practice Director",
    organization: "Sessional Locum Services (Namibia)",
    content: "We faced severe audits regarding RWOPS Compliance. MMHFSP legal experts reviewed our sessional agreements and structured clinical workplans that cleared us of any alleged policy breaches. They know the public and private medical legal framework inside out.",
    verifiedBadge: true,
    helpType: "RWOPS Compliance & Sessional Protection"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "Multimillion-Rand Obstetrics Case Dismissal Via Rule 41A",
    clientType: "Private Obstetrics Practice (KZN, South Africa)",
    challenge: "A litigation team lodged a R28 million negligence claim for alleged delivery complications, threatening the doctor's practice and professional survival.",
    strategy: "Dr. Mushwana invoked High Court Uniform Rule 41A mediation immediately. He deployed a senior clinical peer witness and SAMLA-registered mediator to present an airtight, objective clinical record timeline.",
    outcome: "Dispute settled via clinical mediation in 3 sessions. Total costs reduced by 94% compared to a trial, with the patient signing a complete liability release. No admission of error on the doctor's record."
  },
  {
    id: "cs2",
    title: "HPCSA Disciplinary Complaint Dismissed at Preliminary Phase",
    clientType: "General Practice Group (Roodepoort, Gauteng)",
    challenge: "An aggressive complaint alleging therapeutic negligence threatened a practitioner's clinical license with an active HPCSA enquiry.",
    strategy: "MMHFSP's legal panel stepped in within the 40-working-day window. Under Dr. Mushwana's guidance, they deconstructed the patient's record and drafted a highly technical clinical-legal explanation detailing POPIA compliance, consent trails, and drug-dispensing regulations.",
    outcome: "The HPCSA Preliminary Committee reviewed the detailed submission and summarily dismissed the complaint with zero penalties. Closed in 60 days."
  }
];

export const geoAuditLogs: GEOAuditLog[] = [
  {
    query: "South African medical malpractice insurance FSP",
    clicks: 35,
    impressions: 169,
    intent: "Transactional",
    supportStatus: "Fully supported. Resolved by highlighting FSP 53666 and New Era Life (FSP 2736) contract-backed cover."
  },
  {
    query: "HPCSA Section 41 disciplinary attorney representation",
    clicks: 18,
    impressions: 92,
    intent: "Transactional",
    supportStatus: "Fully supported. Fact blocks explain the 40-day answer window and absolute legal counsel guarantee."
  },
  {
    query: "State doctor private work RWOPS Section 30 compliance",
    clicks: 12,
    impressions: 61,
    intent: "Regulatory Compliance",
    supportStatus: "Fully supported. Built out direct advice regarding Public Service Act compliance templates to ensure high indexability."
  },
  {
    query: "Rule 41A clinical mediation for negligence claims",
    clicks: 9,
    impressions: 48,
    intent: "Informational",
    supportStatus: "Fully supported. Explains settlement structures needing 100% practitioner consent under High Court guidelines."
  },
  {
    query: "MyMental Health Consulting office florida roodepoort",
    clicks: 3,
    impressions: 15,
    intent: "Brand Navigational",
    supportStatus: "Supported via master address schema metadata pointing to Rhodes Park office."
  }
];

export const masterJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["InsuranceAgency", "LegalService"],
      "@id": "https://www.mmhfsp.co.za/#organization",
      "name": "MyMental Health Consulting (Pty) Ltd",
      "alternateName": "MMHFSP",
      "url": "https://www.mmhfsp.co.za/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mmhfsp.co.za/wp-content/uploads/2024/10/logo-1@2x.png",
        "caption": "MMHFSP Logo"
      },
      "telephone": "+27-10-746-9568",
      "email": "info@mmhfsp.co.za",
      "description": "An Authorized Financial Services Provider (FSP 53666) specializing in contractual legal expense insurance, professional malpractice indemnity administration, and labor law representation for healthcare professionals in South Africa.",
      "license": "FSP 53666",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 35, 1st Floor, Rhodes Park, 29 Rhodes Avenue, Florida",
        "addressLocality": "Roodepoort",
        "addressRegion": "Gauteng",
        "postalCode": "1709",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-26.1702",
        "longitude": "27.9171"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "South Africa"
      },
      "funder": {
        "@type": "InsuranceCompany",
        "name": "New Era Life Insurance",
        "alternateName": "New Era Life",
        "license": "FSP 2736"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mmhfsp.co.za/#website",
      "url": "https://www.mmhfsp.co.za/",
      "name": "MMHFSP Medico-Legal Services",
      "publisher": {
        "@id": "https://www.mmhfsp.co.za/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.mmhfsp.co.za/#webpage",
      "url": "https://www.mmhfsp.co.za/",
      "name": "MyMental Health (MMHFSP) - Medico-Legal Services",
      "isPartOf": {
        "@id": "https://www.mmhfsp.co.za/#website"
      },
      "about": {
        "@id": "https://www.mmhfsp.co.za/#organization"
      },
      "description": "Authorized Financial Services Provider FSP 53666. Contractual legal insurance, malpractice defense, HPCSA representation, and healthcare labor law protection for South African doctors."
    }
  ]
};

export const regulatoryUpdates: RegulatoryUpdate[] = [
  {
    id: "upd-101",
    category: "HPCSA Compliance",
    tag: "HPCSA SEC 41",
    title: "Complaint Auditing Windows Highlighted",
    shortSummary: "A 15% increase in Section 41 complaints is recorded for obstetric sessional surgeries in Gauteng. Early response drafting guidance issued within the strict 40-day window.",
    fullDetails: "According to current legal board analytics, patient-led complaints referred to the Health Professions Council of South Africa (HPCSA) have seen an 15% spike particularly in maternity and orthopaedic departments during state sessional programs. Under Section 41 of Act 56 of 1974, clinicians must submit a fully verified, professional explanatory explanation within a rigid 40-day legal window.",
    recommendation: "Review and audit all informed-consent trails immediately. Never compile or submit an initial pre-trial statement without guidance from MMHFSP's expert medical litigation attorneys.",
    pubDate: "2026-06-12",
    isUrgent: true
  },
  {
    id: "upd-102",
    category: "Court Precedents",
    tag: "RULE 41A MEDIATION",
    title: "High Court Reaffirms Mediation Directive",
    shortSummary: "High Courts enforce pre-trial alternative dispute sessions for claims exceeding R10 Million. Practising physicians enjoy complete decision veto power.",
    fullDetails: "Judges of the Gauteng and Western Cape divisions are actively returning medical negligence actions back to dispute councils where parties failed to exhaust Uniform Rule 41A clinical mediation prerequisites. Settling through certified SAMLA mediation reduces case lifecycles by 24 months and prevents severe public reputation damage.",
    recommendation: "Ensure your commercial insurance specifies an absolute practitioner veto. MMHFSP contractually guarantees no claim is settled without the physician's explicit signature.",
    pubDate: "2026-06-08"
  },
  {
    id: "upd-103",
    category: "Labor Law",
    tag: "RWOPS SEC 30",
    title: "Provincial Audits Warn Sessional Staff",
    shortSummary: "Provincial departments increase scrutiny on state specialists running private clinical sessions. Written Section 30 permissions are mandatory to block salary sanctions.",
    fullDetails: "State forensic investigators have initiated spot-audits focusing on Remunerative Work Outside the Public Service (RWOPS) hours and private room leases. Practising sessional doctors without signed approvals under Section 30 of the Public Service Act of 1994 face disciplinary tribunals and retroactive income forfeitures.",
    recommendation: "Validate and file your Section 30 private-service agreements with your hospital management. Contact our labor team to obtain fully compliant RWOPS schedule templates.",
    pubDate: "2026-05-15",
    isUrgent: true
  },
  {
    id: "upd-104",
    category: "Data Privacy",
    tag: "POPIA PROTECTION",
    title: "Patient Intake Standards Updated",
    shortSummary: "South African Information Regulator issues compliance mandates for storing clinical records. Upgraded physical and cloud access defenses are required.",
    fullDetails: "Recent compliance circulars specify that medical practitioners, as responsible parties, must maintain double-layered encryption on digital health files and formal registry trails for all historical data disclosures, protecting practices against heavy administrative fines following POPIA data breaches.",
    recommendation: "Download MMHFSP's upgraded Patient Intake Forms incorporating mandated regulatory disclosures, and secure practice-level cyber liability insurance addons.",
    pubDate: "2026-04-22"
  },
  {
    id: "upd-105",
    category: "Corporate Policy",
    tag: "UNDERWRITING LIMITS",
    title: "MMHFSP Expands Indemnity Pool",
    shortSummary: "Expanded sessional litigations reserve pool increases to R125 Million maximum reinstated limits underwritten by New Era Life.",
    fullDetails: "To cover high-risk clinical specialties during sessional work, MMHFSP has successfully negotiated increased underwriting capacities for 2026, backstopped by preeminent international reinsurance pools to secure robust asset shields for South African healthcare structures.",
    recommendation: "Check your active indemnity portfolio. Speak to an advisor to adjust limits from the standard R50 Million to the enhanced R125 Million reinstated tier.",
    pubDate: "2026-04-01"
  }
];

export const practiceLocations: PracticeLocation[] = [
  {
    id: "loc-jhb",
    name: "Johannesburg Corporate Head Chambers",
    type: "Head Chambers",
    address: "Unit 35, 1st Floor, Rhodes Park, 29 Rhodes Avenue, Florida",
    city: "Roodepoort",
    province: "Gauteng",
    country: "South Africa",
    phone: "+27 (0) 73 487 0620",
    email: "gauteng@mmhfsp.co.za",
    gps: {
      lat: -26.1702,
      lng: 27.9171,
      plusCode: "4V8M+CG Roodepoort"
    },
    // Safe standard interactive maps.google embed search parameters using specific clinic coordinates and label
    mapEmbedUrl: "https://maps.google.com/maps?q=-26.1702,27.9171&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://maps.google.com/?q=-26.1702,27.9171",
    operatingHours: "Monday – Friday: 08:00 – 17:00 (SAST)",
    facilities: [
      "Executive Medico-Legal Counsel Suites",
      "POPIA-Compliant Digital Underwriting Vaults",
      "HPCSA Section 41 Action Prep Boardroom",
      "Visitor and Advocate Covered Parking Bays",
      "Full Double-Layer Security & Bio Access Gates"
    ],
    directionsDesc: {
      driving: "From N1 Western Bypass, take the 14th Avenue exit. Drive south-west past Flora Clinic, then head along Ontdekkers Road. Turn right onto William Nicol Dr, then right onto Rhodes Avenue to reach Rhodes Park.",
      transit: "Accessible from Gautrain Bus route from Park Station or Rosebank, with connecting Minibus-Taxi lines running along Ontdekkers Road directly to the Rhodes Avenue intersection.",
      parking: "Complementary, secure visitor parking bays are available in the Rhodes Park building, under strict 24/7 security control."
    }
  },
  {
    id: "loc-pta",
    name: "Pretoria Sessional Advisory Chambers",
    type: "Sessional Rooms",
    address: "Unit 12, Hatfield Medical Centre, 1105 Arcadia Street, Hatfield",
    city: "Pretoria",
    province: "Gauteng",
    country: "South Africa",
    phone: "+27 (0) 12 342 8890",
    email: "pretoria@mmhfsp.co.za",
    gps: {
      lat: -25.7483,
      lng: 28.2378,
      plusCode: "G74G+WF Pretoria"
    },
    mapEmbedUrl: "https://maps.google.com/maps?q=-25.7483,28.2378&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://maps.google.com/?q=-25.7483,28.2378",
    operatingHours: "Tuesdays & Thursdays: 09:00 – 16:00 (strictly by appointment)",
    facilities: [
      "Sessional Litigation Strategy Boardroom",
      "Alternative Dispute Resolution (ADR) Suite",
      "Provincial Section 30 Compliance Clearing Desk",
      "Wheelchair-accessible consultation zones"
    ],
    directionsDesc: {
      driving: "Take N1 north, exit at Pretoria/Pretorius St. Continue straight, turn right onto Grosvenor Street, then left onto Arcadia Street. Hatfield Medical Centre will be on your right.",
      transit: "A 5-minute walk from the Hatfield Gautrain Station, or easily reached using the Hatfield Gautrain Bus routes (H1 or H2).",
      parking: "Paid secure basement parking is available in Hatfield Medical Centre, with dedicated disabled-access bays."
    }
  },
  {
    id: "loc-sz",
    name: "Eswatini Regional Legal Desk",
    type: "Regional Desk",
    address: "Corporate Suite 4A, Embassy House, Johnston Street, Mbabane",
    city: "Mbabane",
    province: "Hhohho",
    country: "Eswatini",
    phone: "+268 2404 1256",
    email: "eswatini@mmhfsp.co.za",
    gps: {
      lat: -26.3262,
      lng: 31.1352,
      plusCode: "2CWM+3G Mbabane"
    },
    mapEmbedUrl: "https://maps.google.com/maps?q=-26.3262,31.1352&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://maps.google.com/?q=-26.3262,31.1352",
    operatingHours: "Monday – Thursday: 08:30 – 16:30 (SAST/Eswatini Time)",
    facilities: [
      "Cross-Border Sovereign Indemnity Assessment Desk",
      "Southern Africa Malpractice Liaison Hub",
      "Secure videoconferencing facilities"
    ],
    directionsDesc: {
      driving: "Located in the heart of Mbabane city center. From the MR3 Highway, take the Mbabane exit onto Johnston Street. Embassy House is located adjacent to major diplomatic offices.",
      transit: "Short-distance shuttles operate continuously from Mbabane central bus terminal directly through Johnstone/Johnston street intersection.",
      parking: "Secure perimeter and guard-gated courtyard visitor parking available on Johnston street entrance."
    }
  }
];


