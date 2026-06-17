import { jsPDF } from "jspdf";
import { profileMeta, serviceAreas, practiceLocations } from "../data";

export function generateDoctorProfilePDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageHeight = doc.internal.pageSize.height; // A4: 297mm
  let y = 20;

  // Helper to check if content overflows and add a new page
  const checkPageOverflow = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - 20) {
      doc.addPage();
      y = 20;
      drawPageBorder();
    }
  };

  const drawPageBorder = () => {
    // Elegant tiny border around the page
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.3);
    doc.rect(10, 10, 190, 277);
    
    // Tiny header tag on every page
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text("CONFIDENTIAL PROFESSIONAL CREDENTIAL BRIEFING", 15, 15);
    doc.text(`FSP LICENSE: ${profileMeta.fspLicense}`, 145, 15);
  };

  // Draw border on first page
  drawPageBorder();

  // Draw visual header block
  y = 25;
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(15, y, 180, 28, "F");

  // Accent orange bar
  doc.setFillColor(255, 122, 61); // orange-active
  doc.rect(15, y + 28, 180, 2, "F");

  // Header Text
  doc.setTextColor(149, 217, 192); // mint green
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.text("AUTHORIZED HEALTHCARE INDEMNITY REGISTER", 20, y + 8);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text(profileMeta.fullName.toUpperCase(), 20, y + 17);

  doc.setFontSize(9);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(226, 232, 240); // slate-200
  doc.text(`${profileMeta.credentials.join("  |  ")}`, 20, y + 23);

  y += 40;

  // Main Columns Setup
  doc.setTextColor(15, 23, 42); // slate-900
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.text("EXECUTIVE OVERVIEW & UNDERWRITING VALUE PROP", 15, y);
  
  doc.setDrawColor(255, 122, 61); // orange accent
  doc.setLineWidth(0.5);
  doc.line(15, y + 2, 110, y + 2);

  y += 7;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105); // slate-600

  const overviewParagraph = profileMeta.bioIntro + "\n\n" + profileMeta.bioDetailed;
  const splitContext = doc.splitTextToSize(overviewParagraph, 178);
  doc.text(splitContext, 15, y);
  y += (splitContext.length * 4.5) + 6;

  // Practice Licensure details block
  checkPageOverflow(28);
  doc.setFillColor(248, 250, 252); // slate-50
  doc.rect(15, y, 180, 24, "F");
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.3);
  doc.rect(15, y, 180, 24);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text("REGULATORY & UNDERWRITING SUMMARY STATUS", 20, y + 5);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text(`FSCA License ID: FSP ${profileMeta.fspLicense} (Short-term Insurance Legal Expenses Category)`, 20, y + 10);
  doc.text(`Official Underwriter Account: ${profileMeta.underwriterName} (FSP License ${profileMeta.underwriterFsp})`, 20, y + 15);
  doc.text(`Corporate Legal Structure: ${profileMeta.firmName}`, 20, y + 20);
  y += 32;

  // Section 2: Clinical Risk Portfolios & Services
  checkPageOverflow(40);
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text("CORE MEDICO-LEGAL CLINICAL DEFENSE PORTFOLIOS", 15, y);
  
  doc.setDrawColor(255, 122, 61); // orange accent
  doc.setLineWidth(0.5);
  doc.line(15, y + 2, 115, y + 2);
  y += 7;

  serviceAreas.forEach((service) => {
    checkPageOverflow(32);
    
    // Draw Service Heading
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(service.title.toUpperCase(), 15, y);
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(99, 102, 241); // indigo-500
    doc.text(`Regulatory Precedent: ${service.regulatoryReference}`, 15, y + 4.5);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105); // slate-600
    const descSplits = doc.splitTextToSize(service.description, 175);
    doc.text(descSplits, 15, y + 9);
    y += (descSplits.length * 4) + 12;
  });

  // Section 3: Practice Locations
  checkPageOverflow(40);
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text("LICENSED PRACTICE LOCATIONS & CONSULT STATIONS", 15, y);
  doc.setDrawColor(255, 122, 61); // orange accent
  doc.line(15, y + 2, 115, y + 2);
  y += 7;

  practiceLocations.forEach((loc) => {
    checkPageOverflow(24);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text(`${loc.name} (${loc.type})`, 15, y);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(`Address: ${loc.address}`, 15, y + 4);
    doc.text(`Operating Hours: ${loc.operatingHours}`, 15, y + 7.5);
    doc.text(`Contact Coordinate: Phone ${loc.phone}  |  Email ${loc.email}`, 15, y + 11);
    
    y += 16;
  });

  // Stamp / Legal Disclaimer footer at end
  checkPageOverflow(30);
  doc.setFillColor(254, 243, 199); // light orange/amber tone bg
  doc.rect(15, y, 180, 24, "F");
  
  doc.setDrawColor(251, 191, 36);
  doc.setLineWidth(0.3);
  doc.rect(15, y, 180, 24);

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(146, 64, 14); // amber-800
  doc.text("IMPORTANT LEGAL & ETHICAL COMPLIANCE REVELATION", 20, y + 5);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(180, 83, 9); // amber-700
  const legalText = "MyMental Health Consulting (Pty) Ltd t/a MMHFSP is an Authorized Financial Services Provider registered in South Africa (FSP No: 53666). This documents legal expenses cover administration and sessional clinical risk assessment protocols under the FSCA and Health Professions Act 56 of 1974. Dr. Christopher Mushwana consults strictly as a medicolegal expert and expert underwriter director, and does not conduct direct sessional clinical psychotherapy or psychiatry counseling care.";
  const legalSplits = doc.splitTextToSize(legalText, 170);
  doc.text(legalSplits, 20, y + 9);

  // Download trigger
  const fileName = `Dr_Christopher_Mushwana_Professional_Credentials_Portfolio.pdf`;
  doc.save(fileName);
}
