
import { useState, useEffect } from 'react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
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
      <StickyTopBanner />
      <AppleCountdownBanner />
      <div className="pt-10">
        <AppleStyleHeader />
        <AppleStyleHero />
        <AppleStyleProductGrid />
        <FeaturedCollections />
        <SpecialOffers />
        <WrappedWithCare />
        <AppleStyleAbout />
        <EarlyAccessSignup />
        <NewsletterSignup />
        <ModernElegantFooter />
        <SamraRefactoredChatbot videoEnded={videoEnded} />
      </div>
    </div>
  );
};

export default Index;
