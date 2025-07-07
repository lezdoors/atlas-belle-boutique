
import { useState, useEffect } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import NewsletterTopBanner from '@/components/NewsletterTopBanner';
import CountdownBanner from '@/components/CountdownBanner';
import AppleStyleHero from '@/components/AppleStyleHero';
import IngredientOriginMap from '@/components/IngredientOriginMap';
import SignatureCollections from '@/components/SignatureCollections';
import ArtDeVivreSection from '@/components/ArtDeVivreSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import SpecialOffers from '@/components/SpecialOffers';
import WrappedWithCare from '@/components/WrappedWithCare';
import AppleStyleAbout from '@/components/AppleStyleAbout';
import EarlyAccessSignup from '@/components/EarlyAccessSignup';
import NewsletterSignup from '@/components/NewsletterSignup';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import StickyTopBanner from '@/components/StickyTopBanner';
import AppleCountdownBanner from '@/components/AppleCountdownBanner';
import CategoryShowcase from '@/components/CategoryShowcase';
import MediaLogoBanner from '@/components/MediaLogoBanner';
import CertificationBanner from '@/components/CertificationBanner';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const { language } = useLanguage();

  const seoContent = {
    fr: {
      title: "Artisanat Marocain Authentique & Céramiques Traditionnelles",
      description: "Découvrez Maison Chapuis : vaisselle artisanale marocaine, tagines traditionnels, service à thé authentique et objets d'art. Livraison gratuite dès $125.",
      keywords: [
        "vaisselle artisanale maroc",
        "tagine traditionnel",
        "service à thé marocain",
        "céramique artisanale",
        "verre marocain soufflé",
        "art de vivre marocain",
        "décoration orientale",
        "artisanat marocain authentique",
        "bols céramique",
        "plateaux métal ciselé"
      ]
    },
    en: {
      title: "Authentic Moroccan Crafts & Traditional Ceramics",
      description: "Discover Maison Chapuis: Moroccan artisan tableware, traditional tagines, authentic tea service and art objects. Free shipping from $125.",
      keywords: [
        "moroccan artisan tableware",
        "traditional tagine",
        "moroccan tea service", 
        "artisan ceramics",
        "moroccan blown glass",
        "moroccan art of living",
        "oriental decoration",
        "authentic moroccan crafts",
        "ceramic bowls",
        "carved metal trays"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <SEOHead
        title={seoContent[language].title}
        description={seoContent[language].description}
        keywords={seoContent[language].keywords}
        type="website"
        schemaType="WebPage"
      />
      {/* Main Header */}
      <MaisonStyleHeaderNew />
      
      <div className="pt-32 w-full">
        {/* Full-width Hero Section */}
        <div className="w-full">
          <AppleStyleHero />
        </div>
        
        {/* Media Logo Banner */}
        <MediaLogoBanner />
        
        {/* Certification Banner */}
        <CertificationBanner />
        
        {/* Clean Newsletter + Countdown Section */}
        <section id="banniere-infos" className="w-full bg-white py-16">
          <div className="w-full px-6 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Newsletter Section */}
              <div>
                <NewsletterTopBanner />
              </div>
              
              {/* Countdown Section */}
              <div>
                <CountdownBanner />
              </div>
            </div>
          </div>
        </section>

        {/* Art de Vivre Section */}
        <ArtDeVivreSection />

        {/* Category Showcase Section */}
        <div id="categories">
          <CategoryShowcase />
        </div>
        
        {/* Signature Collections */}
        <SignatureCollections />
        <FeaturedCollections />
        <SpecialOffers />
        <WrappedWithCare />
        <AppleStyleAbout />
        <ModernElegantFooter />
        <SamraRefactoredChatbot videoEnded={videoEnded} />
      </div>
      
      {/* Keep existing banners for backwards compatibility */}
      <div className="hidden">
        <StickyTopBanner />
        <AppleCountdownBanner />
      </div>
    </div>
  );
};

export default Index;
