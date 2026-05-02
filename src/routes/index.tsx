import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Motors — Premium Automotive Collection" },
      { name: "description", content: "Discover the world's most exceptional vehicles. Luxury sports cars, SUVs, and electric vehicles curated for discerning drivers." },
      { property: "og:title", content: "Apex Motors — Premium Automotive Collection" },
      { property: "og:description", content: "Discover the world's most exceptional vehicles." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedSection />
      <Footer />
    </div>
  );
}
