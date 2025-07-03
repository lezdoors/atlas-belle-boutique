
import { useState, useEffect } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import NewsletterTopBanner from '@/components/NewsletterTopBanner';
import CountdownBanner from '@/components/CountdownBanner';
import AppleStyleHero from '@/components/AppleStyleHero';
import IngredientOriginMap from '@/components/IngredientOriginMap';
import AppleStyleProductGrid from '@/components/AppleStyleProductGrid';
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

const Index = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-white w-full">
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

        {/* Interactive Map Section */}
        <IngredientOriginMap />
        
        {/* Category Showcase Section */}
        <div id="categories">
          <CategoryShowcase />
        </div>
        
        <AppleStyleProductGrid />
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
