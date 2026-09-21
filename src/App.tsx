import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import NewsTicker from "./components/NewsTicker";
import Hero from "./components/Hero";
import StrategicNetwork from "./components/StrategicNetwork";
import AboutUs from "./components/AboutUs";
import ServicesProducts from "./components/ServicesProducts";
import PracticeAreas from "./components/PracticeAreas";
import FAQSection from "./components/FAQSection";
import Testimonials from "./components/Testimonials";
import EventGallery from "./components/EventGallery";
import PracticeLocations from "./components/PracticeLocations";
import ContactForm from "./components/ContactForm";
import ThoughtLeadership from "./components/ThoughtLeadership";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import { masterJsonLd } from "./data";

function getRoute(): "home" | "privacy" | "terms" | "404" {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return "home";
  if (path === "/privacy") return "privacy";
  if (path === "/terms") return "terms";
  return "404";
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [route, setRoute] = useState<"home" | "privacy" | "terms" | "404">(() =>
    typeof window !== "undefined" ? getRoute() : "home"
  );

  // SPA back/forward support for /privacy, /terms, 404
  useEffect(() => {
    const onPop = () => setRoute(getRoute());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Pre-loader fallback timeout guarantees rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Safe query parameter parsing & validation
  useEffect(() => {
    if (route !== "home") return;
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
  }, [route, isAppLoading]);

  // Monitor scroll height and calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/60 text-sm font-mono tracking-wide">Loading</span>
        </div>
      </div>
    );
  }

  if (route === "privacy") {
    return (
      <>
        <PrivacyPolicy />
        <CookieConsent />
      </>
    );
  }

  if (route === "terms") {
    return (
      <>
        <TermsOfService />
        <CookieConsent />
      </>
    );
  }

  if (route === "404") {
    return (
      <>
        <NotFound />
        <CookieConsent />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-cream text-slate-800 font-sans antialiased" id="applet-root">
      
      {/* Navigation */}
      <Navigation onContactClick={() => scrollToSection("contact")} />

      <main>
        <NewsTicker />
        <Hero
          onContactClick={() => scrollToSection("contact")}
          onFaqClick={() => scrollToSection("faq")}
        />
        <StrategicNetwork />
        <AboutUs />
        <ServicesProducts />
        <PracticeAreas onContactClick={() => scrollToSection("contact")} />
        <Testimonials />
        <FAQSection />
        <EventGallery />
        <PracticeLocations />
        <ThoughtLeadership />
        <ContactForm />
      </main>

      <Footer scrollToSection={scrollToSection} />

      <CookieConsent />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[99990] p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all duration-300 cursor-pointer"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
