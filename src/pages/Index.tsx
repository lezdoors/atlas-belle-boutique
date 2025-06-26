
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
import MobileOptimizer from "@/components/MobileOptimizer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import BottomNavigation from "@/components/mobile/BottomNavigation";

const Index = () => {
  const handleRefresh = async () => {
    // Simple page refresh functionality
    window.location.reload();
  };

  return (
    <>
      <MobileOptimizer />
      <PerformanceOptimizer />
      
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen bg-white">
          <Header />
          <main className="pb-20 lg:pb-0">
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
          <BottomNavigation />
        </div>
      </PullToRefresh>
    </>
  );
};

export default Index;
