import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MythbustersCarousel from "@/components/MythbustersCarousel";
import FestivalsCarousel from "@/components/FestivalsCarousel";
import KnowledgeCards from "@/components/KnowledgeCards";
import ServicesList from "@/components/ServicesList";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <MythbustersCarousel />
      <FestivalsCarousel />
      <KnowledgeCards />
      <ServicesList />
      <CommunityCTA />
      <Footer />
    </main>
  );
}
