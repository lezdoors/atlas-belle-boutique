
import { useState, useEffect } from 'react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import AppleStyleHero from '@/components/AppleStyleHero';
import FeaturedCollections from '@/components/FeaturedCollections';
import SpecialOffers from '@/components/SpecialOffers';
import WrappedWithCare from '@/components/WrappedWithCare';
import AppleStyleAbout from '@/components/AppleStyleAbout';
import NewsletterSignup from '@/components/NewsletterSignup';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import TopBanner from '@/components/TopBanner';

const Index = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <AppleStyleHeader />
      <AppleStyleHero />
      <FeaturedCollections />
      <SpecialOffers />
      <WrappedWithCare />
      <AppleStyleAbout />
      <NewsletterSignup />
      <AppleStyleFooter />
      <SamraRefactoredChatbot videoEnded={videoEnded} />
    </div>
  );
};

export default Index;
