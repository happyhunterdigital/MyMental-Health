import React, { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, Compass, Navigation as NavIcon, 
  ExternalLink, ListChecks, Car, Train, Building, Info, HelpCircle, ChevronRight
} from "lucide-react";
import { practiceLocations } from "../data";
import { PracticeLocation } from "../types";

export default function PracticeLocations() {
  const [activeLocId, setActiveLocId] = useState<string>("loc-jhb");
  const [userStartLocation, setUserStartLocation] = useState<string>("");
  const [routingResult, setRoutingResult] = useState<{
    text: string;
    landmarks: string[];
    estDuration: string;
  } | null>(null);

  const selectedLoc = practiceLocations.find(l => l.id === activeLocId) || practiceLocations[0];

  // Simulated router database for South African clinical clients seeking directions
  const simulatedRoutes: Record<string, Record<string, { text: string; landmarks: string[]; estDuration: string }>> = {
    "loc-jhb": {
      "sandton": {
        text: "Take Sandton Dr to Ontdekkers Rd. Merge onto N1 Western Bypass South, then take the 14th Avenue exit towards Roodepoort/Florida. Continue south-west past Constantia Office Park, then turn right onto William Nicol Dr and right onto Rhodes Avenue. The Rhodes Park office estate is on your left.",
        landmarks: ["Constantia Office Park", "Flora Clinic Hospital", "Ontdekkers Road Shell"],
        estDuration: "22 mins"
      },
      "soweto": {
        text: "Drive north along Elias Motsoaledi Rd/R558. Join Ontdekkers Rd heading east towards Roodepoort. Turn left onto William Nicol Dr, followed by a quick right onto Rhodes Avenue into the Rhodes Park medical/corporate cluster.",
        landmarks: ["Westgate Shopping Centre", "Roodepoort Athletics Stadium", "Jubilee Park"],
        estDuration: "18 mins"
      },
      "pretoria": {
        text: "Merge onto N1 South towards Johannesburg/Roodepoort. Keep right at the split to remain on N1 Western Bypass. Exit at 14th Avenue, head past the corporate parks and Flora Clinic onto Ontdekkers, then complete approach via William Nicol Dr directly onto Rhodes Avenue.",
        landmarks: ["14th Avenue Interchange", "Flora Clinic Area", "Rhodes Park Block"],
        estDuration: "38 mins"
      }
    },
    "loc-pta": {
      "sandton": {
        text: "Take N1 North towards Pretoria. Take exit 145 for M2/Pretoria/Pretorius St. Keep left/straight onto Pretorius St, then turn right onto Richard St, then right onto Arcadia Street. Hatfield Medical Centre is located on your right-hand side.",
        landmarks: ["Hatfield Plaza", "University of Pretoria Campus", "Gautrain Hatfield Station"],
        estDuration: "32 mins"
      },
      "centurion": {
        text: "Drive north on the Jean Avenue interchange onto N14. Connect to Pretorius Street (M2) entering Pretoria city centre. Make a right onto Grosvenor Street, then left onto Arcadia Street to park in Hatfield Medical Centre basement.",
        landmarks: ["Loftus Versfeld Stadium", "Hatfield Plaza Mall", "Embassy Corridor"],
        estDuration: "15 mins"
      },
      "brooklyn": {
        text: "Drive north along Jan Shoba Street (formerly Duncan Street) past Brooklyn Mall. Head past the University campuses, turn left onto Arcadia Street. Hatfield Medical Centre is situated near the Richard Street corner.",
        landmarks: ["University of Pretoria sports fields", "Hatfield Plaza", "Grosvenor crossing"],
        estDuration: "8 mins"
      }
    },
    "loc-sz": {
      "ezulwini": {
        text: "Take the MR3 Highway west towards Mbabane. Continue up the hill, entering Mbabane. Turn left onto Sozisa Road, then link onto Johnstone Street/Johnston Street. Embassy House is located adjacent to major sovereign diplomatic suites.",
        landmarks: ["Mbabane Central Bus Terminal", "Swazi Plaza", "The Mbabane Club"],
        estDuration: "12 mins"
      },
      "manzini": {
        text: "Follow MR3 Highway Westbound directly from Manzini through Ezulwini valley and up the Mbabane bypass. Exit towards Johnston Street city center direction. Embassy House 4A is on your right side.",
        landmarks: ["Ezulwini Valley", "The Gables Shopping Complex", "Embassy Row"],
        estDuration: "35 mins"
      }
    }
  };

  const handleCalculateDirections = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userStartLocation.trim()) return;

    const normalizeQuery = userStartLocation.toLowerCase().trim();
    const locRoutes = simulatedRoutes[activeLocId];
    
    // Attempt best match
    let patchKey = "";
    if (normalizeQuery.includes("sandton") || normalizeQuery.includes("joburg") || normalizeQuery.includes("randburg")) {
      patchKey = "sandton";
    } else if (normalizeQuery.includes("soweto") || normalizeQuery.includes("lasthill") || normalizeQuery.includes("baragwanath")) {
      patchKey = "soweto";
    } else if (normalizeQuery.includes("centurion") || normalizeQuery.includes("midrand")) {
      patchKey = "centurion";
    } else if (normalizeQuery.includes("brooklyn") || normalizeQuery.includes("menlyn") || normalizeQuery.includes("hatfield")) {
      patchKey = "brooklyn";
    } else if (normalizeQuery.includes("ezulwini") || normalizeQuery.includes("lobamba")) {
      patchKey = "ezulwini";
    } else if (normalizeQuery.includes("manzini") || normalizeQuery.includes("mhlambanyatsi")) {
      patchKey = "manzini";
    } else {
      // Default to pretoria or sandton depending on active office
      patchKey = activeLocId === "loc-jhb" ? "sandton" : activeLocId === "loc-pta" ? "centurion" : "ezulwini";
    }

    if (locRoutes && locRoutes[patchKey]) {
      setRoutingResult(locRoutes[patchKey]);
    } else {
      // Fallback
      setRoutingResult({
        text: `Consult direct driving directions to the ${selectedLoc.address} address. Standard routes run via adjacent main commercial arteries with regular Gautrain/shuttle links.`,
        landmarks: ["Local municipal buildings", "Municipal intersections", "Suburban signs"],
        estDuration: "Approx. 15-20 mins"
      });
    }
  };

  return (
    <section className="py-24 bg-white px-4 text-slate-800 scroll-mt-20 border-b border-slate-200" id="locations">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-mint text-xs font-mono font-bold uppercase shadow-sm mb-4">
            <Compass className="w-4 h-4 text-mint" />
            Licensed Medico-Legal Service Points
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Our Chambers & Consult Stations
          </h2>
          
          <p className="text-slate-550 text-slate-650 text-slate-500 text-sm mt-4 leading-relaxed font-sans">
            Dr. Christopher Mushwana provides physical access and secure rooms for pre-trial audits, HPCSA Section 41 preparation, and Rule 41A clinical mediations across South Africa and Eswatini.
          </p>
        </div>

        {/* Dynamic Location Viewport Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Location Listing, Interactive Tabs, Details Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tab Selection buttons */}
            <div className="bg-cream/75 p-2 rounded-2xl border border-slate-250 flex flex-col gap-2">
              <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-wider pl-2 pt-1 selection:bg-transparent">
                Select Active Advisory Chambers:
              </span>
              
              {practiceLocations.map((loc) => {
                const isActive = loc.id === activeLocId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => {
                      setActiveLocId(loc.id);
                      setRoutingResult(null);
                      setUserStartLocation("");
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? "bg-slate-900 border-slate-800 text-white shadow-md shadow-slate-900/10"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-350 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3 select-none">
                      <div className={`p-2 rounded-lg ${isActive ? "bg-slate-955 bg-slate-950 text-mint" : "bg-slate-100 text-slate-500"}`}>
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-extrabold uppercase tracking-wide opacity-75">
                          {loc.type}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold font-display leading-tight truncate max-w-[190px] sm:max-w-none">
                          {loc.name.split(" ")[0]} Chambers
                        </h4>
                      </div>
                    </div>
                    <span className={`text-[9px] font-mono font-extrabold px-2 py-0.5 rounded ${
                      isActive ? "bg-mint text-slate-900" : "bg-slate-100 text-slate-500"
                    }`}>
                      {loc.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Chamber Metadata Details */}
            <div className="bg-cream/45 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none select-none font-sans font-black text-8xl text-slate-900">
                GPS
              </div>

              <div>
                <span className="text-[10px] font-mono font-black bg-slate-900 text-mint px-2 py-1 rounded-md uppercase tracking-wide">
                  {selectedLoc.type} PROFILE
                </span>
                <h3 className="font-display font-extrabold text-[#111827] text-lg sm:text-xl mt-3 leading-snug">
                  {selectedLoc.name}
                </h3>
              </div>

              {/* Precise Address */}
              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-active shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-905 text-slate-900 block font-bold leading-normal">Physical Location Address:</strong>
                    <p className="text-slate-600 mt-0.5 font-sans break-words select-text">{selectedLoc.address}</p>
                    {selectedLoc.gps.plusCode && (
                      <span className="inline-block mt-1 font-mono text-[10px] bg-white border border-slate-150 text-indigo-700 px-1.5 py-0.5 rounded">
                        Plus Code: {selectedLoc.gps.plusCode}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-905 text-slate-900 block font-bold">Standard Sessional Hours:</strong>
                    <p className="text-slate-605 text-slate-600 mt-0.5 font-sans select-text">{selectedLoc.operatingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-905 text-slate-900 block font-bold">Secure Contact Coordinates:</strong>
                    <div className="flex flex-col gap-1 mt-0.5 text-slate-600 font-sans">
                      <a href={`tel:${selectedLoc.phone}`} className="hover:text-orange-active transition select-text">
                        Phone: {selectedLoc.phone}
                      </a>
                      <a href={`mailto:${selectedLoc.email}`} className="hover:text-orange-active transition select-text">
                        Email: {selectedLoc.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Facilities Checklists */}
              <div className="border-t border-slate-200 pt-5 space-y-3">
                <span className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-widest block select-none">
                  Chambers Protection Suit Assets:
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedLoc.facilities.map((fac, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Dynamic Interactive Map Viewport and simulated router */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Integrated Interactive Map Component */}
            <div className="bg-white border border-slate-350/60 rounded-3xl overflow-hidden shadow-lg relative flex flex-col">
              
              {/* Map Viewport Area */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100 flex items-center justify-center">
                
                {/* Standard map embed within safe, standard HTML iframe */}
                <iframe
                  title={`Map location of ${selectedLoc.name}`}
                  src={selectedLoc.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full relative z-10"
                />

                {/* Overlaid Custom descriptive floating visual marker on the map for confidence building */}
                <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md text-white border border-slate-800 p-3 rounded-2xl shadow-md max-w-[240px] hidden sm:block select-none pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75 animate-duration-1000"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint"></span>
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-slate-950 px-1.5 py-0.5 rounded text-white font-extrabold">
                      ACTIVE ADVISOR
                    </span>
                  </div>
                  <h5 className="text-xs font-bold leading-tight mt-2 text-slate-100 font-display">
                    Dr. Chris Mushwana
                  </h5>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-mono font-extrabold truncate">
                    FSP 53666 CONSULT STATION
                  </p>
                </div>

                {/* Satellite map view disclaimer icon */}
                <div className="absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-sm text-slate-850 p-1.5 rounded-lg text-[9px] font-sans font-bold flex items-center gap-1 border border-slate-200 shadow-sm pointer-events-none select-none">
                  <Info className="w-3.5 h-3.5 text-indigo-700" />
                  Interactive GIS Viewport
                </div>
              </div>

              {/* Map Actions controls footer bar */}
              <div className="bg-slate-50 border-t border-slate-150 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-slate-505 text-slate-500">
                  <div className="bg-slate-900 text-white rounded p-1">
                    <Compass className="w-3.5 h-3.5 text-mint" />
                  </div>
                  <span>GPS: {selectedLoc.gps.lat}, {selectedLoc.gps.lng}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                  <a
                    href={selectedLoc.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center text-xs font-bold bg-white text-slate-800 border border-slate-205 py-2.5 px-4 rounded-xl hover:bg-slate-50 hover:border-slate-350 transition gap-1.5 cursor-pointer"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  
                  <button 
                    onClick={() => {
                      const instructionsDiv = document.getElementById("transit-instructions-expanded");
                      if (instructionsDiv) {
                        instructionsDiv.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center text-xs font-bold bg-slate-900 text-white py-2.5 px-4 rounded-xl hover:bg-slate-800 transition gap-1.5 cursor-pointer"
                  >
                    <NavIcon className="w-3.5 h-3.5 text-mint animate-bounce" />
                    How to Get Here
                  </button>
                </div>
              </div>

            </div>

            {/* INTEGRATED ROUTING CALCULATOR */}
            <div className="bg-cream/20 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-6 shadow-sm" id="transit-instructions-expanded">
              
              <div className="border-b border-slate-150 pb-4">
                <h4 className="font-display font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <NavIcon className="w-5 h-5 text-indigo-700" />
                  Alternative Route Advisor & Travel Planner
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-normal font-sans">
                  Enter your origin point to view customized local transit guidelines, Gautrain routes, and secure parking access.
                </p>
              </div>

              {/* Driving/Transit prompt input */}
              <form onSubmit={handleCalculateDirections} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="text"
                    required
                    value={userStartLocation}
                    onChange={(e) => setUserStartLocation(e.target.value)}
                    placeholder="e.g. Sandton, Soweto, Centurion, Ezulwini..."
                    className="w-full bg-white border border-slate-200 focus:border-orange-active rounded-xl py-2.5 px-4 text-slate-800 text-sm focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-active hover:bg-orange-active/90 text-white font-bold text-xs px-5 py-3 rounded-xl transition cursor-pointer shrink-0 flex items-center justify-center gap-1"
                >
                  Calculate Access Route
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>

              {/* Travel Advisory Calculation Output */}
              {routingResult ? (
                <div className="bg-white border border-slate-300/80 p-5 rounded-2xl shadow-inner space-y-4 animate-fadeIn">
                  
                  {/* Results top row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-mono font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                      CALCULATED ROAD ROUTE
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-orange-active" />
                      EST. ADVISORY TRAVEL TIME: {routingResult.estDuration}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed font-sans select-text">
                    {routingResult.text}
                  </p>

                  {/* Landmarks highlights */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-widest block mb-1.5">
                      Key Medical & Urban Landmarks to Spot:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {routingResult.landmarks.map((lmd, keyIdx) => (
                        <span key={keyIdx} className="bg-slate-50 border border-slate-150 text-[10.5px] font-sans font-bold text-slate-600 px-2.5 py-1 rounded-md">
                          📍 {lmd}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                <div className="bg-slate-50 border border-dashed border-slate-200 p-5 rounded-2xl text-center text-slate-400 text-xs sm:text-sm font-sans">
                  Enter your local city above (e.g., &ldquo;<strong className="text-slate-600 cursor-pointer hover:underline" onClick={() => setUserStartLocation("Sandton")}>Sandton</strong>&rdquo; or &ldquo;<strong className="text-slate-600 cursor-pointer hover:underline" onClick={() => setUserStartLocation("Ezulwini")}>Ezulwini</strong>&rdquo;) to render specific sessional transit directions instantly.
                </div>
              )}

              {/* Universal access specs panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                  <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs sm:text-sm mb-2 select-none">
                    <Car className="w-4 h-4" />
                    <span>Secure Parking Protocol</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans select-text">
                    {selectedLoc.directionsDesc.parking}
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                  <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs sm:text-sm mb-2 select-none">
                    <Train className="w-4 h-4" />
                    <span>Transit Connections</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans select-text">
                    {selectedLoc.directionsDesc.transit}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
