
import { useState, useEffect } from 'react';
import MaisonStyleHeader from '@/components/MaisonStyleHeader';
import NewsletterTopBanner from '@/components/NewsletterTopBanner';
import CountdownBanner from '@/components/CountdownBanner';
import AppleStyleHero from '@/components/AppleStyleHero';
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

const Index = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header */}
      <MaisonStyleHeader />
      
      {/* Main Content - with proper top spacing for fixed header */}
      <div className="pt-20">
        <AppleStyleHero />
        
        {/* Countdown + Newsletter Section */}
        <section className="bg-gradient-to-b from-amber-50/30 to-stone-50/50 border-b border-stone-200">
          <div className="container-refined py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Newsletter Section */}
              <div className="flex-1">
                <NewsletterTopBanner />
              </div>
              
              {/* Countdown Section */}
              <div className="flex-1">
                <CountdownBanner />
              </div>
            </div>
          </div>
        </section>
        
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
