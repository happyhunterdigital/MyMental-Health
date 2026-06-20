import { ChevronUp, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import NewsTicker from "./components/NewsTicker";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import FAQSection from "./components/FAQSection";
import Testimonials from "./components/Testimonials";
import PracticeLocations from "./components/PracticeLocations";
import ContactForm from "./components/ContactForm";
import ThoughtLeadership from "./components/ThoughtLeadership";
import Footer from "./components/Footer";
import { masterJsonLd } from "./data";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAppLoading, setIsAppLoading] = useState(true);

  // Pre-loader fallback timeout guarantees rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Safe query parameter parsing & validation
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const targetSection = params.get("section");
      if (targetSection && /^[a-zA-Z0-9_-]+$/.test(targetSection)) {
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    } catch (e) {
      console.error("Query parameter validation failed", e);
    }
  }, []);

  // Monitor scroll height and calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inject the master JSON-LD schema silently in the HTML header for Background SEO/RAG indexing
  useEffect(() => {
    const existing = document.getElementById("master-seo-schema");
    if (existing) {
      existing.remove();
    }
    const script = document.createElement("script");
    script.id = "master-seo-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(masterJsonLd);
    document.head.appendChild(script);
    return () => {
       const scriptToRemove = document.getElementById("master-seo-schema");
       if (scriptToRemove) {
         scriptToRemove.remove();
       }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isAppLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream text-slate-800 font-sans antialiased flex flex-col justify-between relative" id="applet-root">
      
      {/* Scroll Progress Indicator at top of viewport */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-slate-100/10 z-[99999] pointer-events-none"
        id="scroll-progress-container"
      >
        <div 
          className="h-full bg-gradient-to-r from-orange-active via-[#FF8D4D] to-indigo-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
          id="scroll-progress-bar"
        />
      </div>

      {/* Navigation Header */}
      <Navigation
        onContactClick={() => scrollToSection("contact")}
      />

      <main className="flex-grow pt-20">
        
        {/* Scrolling Industry-Specific Medico-Legal Advisory updates */}
        <NewsTicker />
        
        {/* Hero Section */}
        <Hero
          onContactClick={() => scrollToSection("contact")}
          onFaqClick={() => scrollToSection("faq")}
        />

        {/* Practice Portfolios, Bio & Clinical-Legal Skills */}
        <PracticeAreas onContactClick={() => scrollToSection("contact")} />

        {/* Interactive Case precedents & Endorsements */}
        <Testimonials />

        {/* Consumer-directed FAQ Directory */}
        <FAQSection />

        {/* Chambers & Regional Sessional Rooms map section */}
        <PracticeLocations />

        {/* Thought Leadership Articles & Briefings */}
        <ThoughtLeadership />

        {/* Secure Admissions Inquiry Form */}
        <ContactForm />

      </main>

      <Footer scrollToSection={scrollToSection} />

    </div>
  );
}
