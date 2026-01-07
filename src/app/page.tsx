import Hero from "@/components/Hero";
import AboutSection from "@/components/home/AboutSection";
import CFPSection from "@/components/home/CFPSection";
import HostCountrySection from "@/components/home/HostCountrySection";
import HighlightsSection from "@/components/home/HighlightsSection";
import PartnersGrid from "@/components/home/PartnersGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Atlas Conference */}
      <AboutSection />

      {/* 3. Call for Papers 2026 Update */}
      <CFPSection />

      {/* 4. 2026 Host Country (Ghana) */}
      <HostCountrySection />

      {/* 5. 2025 Highlights */}
      <HighlightsSection />

      {/* 6. 2026 Partners */}
      <PartnersGrid />
    </div>
  );
}
