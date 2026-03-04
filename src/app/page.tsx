import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MythbustersCarousel from "@/components/MythbustersCarousel";
import KnowledgeCards from "@/components/KnowledgeCards";
import ServicesList from "@/components/ServicesList";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MythbustersCarousel />
      <KnowledgeCards />
      <ServicesList />
      <CommunityCTA />
      <Footer />
    </main>
  );
}
