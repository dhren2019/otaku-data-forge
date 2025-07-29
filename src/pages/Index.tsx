import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import PlatformShowcase from "@/components/PlatformShowcase";
import DragonBallAPI from "@/components/DragonBallAPI";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <PlatformShowcase />
      <DragonBallAPI />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;