
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EnhancedFragranceShowcase from "@/components/enhanced/EnhancedFragranceShowcase";
import Categories from "@/components/Categories";
import FourSeasons from "@/components/FourSeasons";
import MissionSection from "@/components/MissionSection";
import OurArtisans from "@/components/OurArtisans";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingCart from "@/components/FloatingCart";
import BackToTop from "@/components/BackToTop";
import GDPRConsent from "@/components/GDPRConsent";
import PullToRefresh from "@/components/PullToRefresh";

const Index = () => {
  const handleRefresh = async () => {
    // Simple page refresh functionality
    window.location.reload();
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <EnhancedFragranceShowcase />
          <Categories />
          <FourSeasons />
          <MissionSection />
          <OurArtisans />
          <Testimonials />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingCart />
        <BackToTop />
        <GDPRConsent />
      </div>
    </PullToRefresh>
  );
};

export default Index;
