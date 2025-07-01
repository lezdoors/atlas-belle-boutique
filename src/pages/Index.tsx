
import { useState, useEffect } from 'react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import AppleStyleHero from '@/components/AppleStyleHero';
import AppleStyleProductGrid from '@/components/AppleStyleProductGrid';
import AppleStyleAbout from '@/components/AppleStyleAbout';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import AppleCountdownBanner from '@/components/AppleCountdownBanner';

const Index = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <AppleCountdownBanner />
      <AppleStyleHeader />
      <AppleStyleHero />
      <AppleStyleProductGrid />
      <AppleStyleAbout />
      <AppleStyleFooter />
      <SamraRefactoredChatbot videoEnded={videoEnded} />
    </div>
  );
};

export default Index;
