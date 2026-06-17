export interface ServiceArea {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // lucide icon name
  description: string;
  points: string[];
  riskFactor: string;
  regulatoryReference?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answerShort: string; // The "fact block" optimized for AI overview
  answerLong: string[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  content: string;
  verifiedBadge: boolean;
  helpType: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  challenge: string;
  strategy: string;
  outcome: string;
}

export interface GEOAuditLog {
  query: string;
  clicks: number;
  impressions: number;
  intent: "Brand Navigational" | "Transactional" | "Informational" | "Regulatory Compliance";
  supportStatus: string;
}

export interface ClientInquiry {
  id: string;
  fullName: string;
  practiceName: string;
  role: string;
  email: string;
  phone: string;
  interestArea: string;
  message: string;
  createdAt: string;
  urgency: "Normal" | "High" | "Immediate Dr. Consultation Needed";
}

export interface RegulatoryUpdate {
  id: string;
  category: string;
  tag: string;
  title: string;
  shortSummary: string;
  fullDetails: string;
  recommendation: string;
  pubDate: string;
  isUrgent?: boolean;
}

export interface PracticeLocation {
  id: string;
  name: string;
  type: "Head Chambers" | "Sessional Rooms" | "Regional Desk";
  address: string;
  city: string;
  province: string;
  country: string;
  phone: string;
  email: string;
  gps: {
    lat: number;
    lng: number;
    plusCode?: string;
  };
  mapEmbedUrl: string;
  googleMapsUrl: string;
  operatingHours: string;
  facilities: string[];
  directionsDesc: {
    driving: string;
    transit: string;
    parking: string;
  };
}


