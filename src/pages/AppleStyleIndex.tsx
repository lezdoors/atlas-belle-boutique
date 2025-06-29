
import AppleStyleHeader from "@/components/AppleStyleHeader";
import AppleStyleHero from "@/components/AppleStyleHero";
import AppleStyleProductGrid from "@/components/AppleStyleProductGrid";
import AppleStyleAbout from "@/components/AppleStyleAbout";
import AppleStyleFooter from "@/components/AppleStyleFooter";
import AppleStyleChatbot from "@/components/AppleStyleChatbot";
import EnhancedFragranceShowcase from "@/components/enhanced/EnhancedFragranceShowcase";
import Categories from "@/components/Categories";
import FourSeasons from "@/components/FourSeasons";
import IngredientOriginMap from "@/components/IngredientOriginMap";
import MissionSection from "@/components/MissionSection";
import OurArtisans from "@/components/OurArtisans";
import CartDrawer from "@/components/CartDrawer";
import FloatingCart from "@/components/FloatingCart";
import BackToTop from "@/components/BackToTop";
import GDPRConsent from "@/components/GDPRConsent";
import PullToRefresh from "@/components/PullToRefresh";
import MobileOptimizer from "@/components/MobileOptimizer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import BottomNavigation from "@/components/mobile/BottomNavigation";
import { SeasonalThemeProvider } from "@/components/seasonal/SeasonalThemeProvider";
import HistoricalStoryBlock from "@/components/storytelling/HistoricalStoryBlock";
import SeasonRitualsSection from "@/components/storytelling/SeasonRitualsSection";
import ArtisanSpotlight from "@/components/storytelling/ArtisanSpotlight";

const AppleStyleIndex = () => {
  const handleRefresh = async () => {
    window.location.reload();
  };

  return (
    <SeasonalThemeProvider>
      <MobileOptimizer />
      <PerformanceOptimizer />
      
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen bg-white font-light antialiased">
          <AppleStyleHeader />
          <main className="pb-20 lg:pb-0">
            <AppleStyleHero />
            
            {/* Historical Journey Begins */}
            <HistoricalStoryBlock
              title="L'Héritage des Montagnes de l'Atlas"
              subtitle="Depuis des Millénaires"
              content="Au cœur des montagnes de l'Atlas, là où les traditions se transmettent de mère en fille depuis des générations, naît notre histoire. Chaque produit Perle d'Atlas puise ses racines dans ce savoir ancestral, préservé et sublimé par nos artisans."
              image="/lovable-uploads/hero-image-atlas-landscape.jpg"
            />

            <AppleStyleAbout />
            
            {/* Seasonal Rituals */}
            <SeasonRitualsSection />
            
            <EnhancedFragranceShowcase />
            <AppleStyleProductGrid />
            <Categories />
            
            {/* Interactive Ingredient Origin Map */}
            <IngredientOriginMap />
            
            <FourSeasons />
            
            {/* Artisan Stories */}
            <ArtisanSpotlight />
            
            <HistoricalStoryBlock
              title="La Philosophie du Temps Naturel"
              subtitle="Rythmes Ancestraux"
              content="Nous suivons le calendrier de la nature, respectant les cycles lunaires pour la récolte, les saisons pour la production. Cette approche nous permet de créer des produits d'une qualité exceptionnelle, en harmonie avec les rythmes naturels du Maroc."
              image="/lovable-uploads/moroccan-architecture.jpg"
              reversed
            />
            
            <MissionSection />
            <div className="pb-12">
              <OurArtisans />
            </div>
          </main>
          <AppleStyleFooter />
          <AppleStyleChatbot />
          <CartDrawer />
          <FloatingCart />
          <BackToTop />
          <GDPRConsent />
          <BottomNavigation />
        </div>
      </PullToRefresh>
    </SeasonalThemeProvider>
  );
};

export default AppleStyleIndex;
