
import { useState, useEffect } from 'react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import AppleStyleHero from '@/components/AppleStyleHero';
import AppleStyleProductGrid from '@/components/AppleStyleProductGrid';
import AppleStyleAbout from '@/components/AppleStyleAbout';
import EarlyAccessSignup from '@/components/EarlyAccessSignup';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';

const AppleStyleIndex = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <AppleStyleHeader />
      <AppleStyleHero />
      <AppleStyleProductGrid />
      <AppleStyleAbout />
      <EarlyAccessSignup />
      <AppleStyleFooter />
      <SamraRefactoredChatbot videoEnded={videoEnded} />
    </div>
  );
};

export default AppleStyleIndex;
