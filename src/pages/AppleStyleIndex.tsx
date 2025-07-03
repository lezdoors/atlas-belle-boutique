
import { useState, useEffect } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import AppleStyleHero from '@/components/AppleStyleHero';
import AppleStyleProductGrid from '@/components/AppleStyleProductGrid';
import AppleStyleAbout from '@/components/AppleStyleAbout';
import EarlyAccessSignup from '@/components/EarlyAccessSignup';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import StickyTopBanner from '@/components/StickyTopBanner';
import AppleCountdownBanner from '@/components/AppleCountdownBanner';

const AppleStyleIndex = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <StickyTopBanner />
      <AppleCountdownBanner />
      <div className="pt-10">
        <MaisonStyleHeaderNew />
        <AppleStyleHero />
        <AppleStyleProductGrid />
        <AppleStyleAbout />
        <EarlyAccessSignup />
        <ModernElegantFooter />
        <SamraRefactoredChatbot videoEnded={videoEnded} />
      </div>
    </div>
  );
};

export default AppleStyleIndex;
