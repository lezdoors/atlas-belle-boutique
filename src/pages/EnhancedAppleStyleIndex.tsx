
import { useState } from 'react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import EnhancedAppleStyleHero from '@/components/EnhancedAppleStyleHero';
import AppleStyleProductGrid from '@/components/AppleStyleProductGrid';
import AppleStyleAbout from '@/components/AppleStyleAbout';
import EarlyAccessSignup from '@/components/EarlyAccessSignup';
import LuxuryNewsletterSection from '@/components/newsletter/LuxuryNewsletterSection';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import EnhancedSamraChatbot from '@/components/chatbot/EnhancedSamraChatbot';
import StickyTopBanner from '@/components/StickyTopBanner';

const EnhancedAppleStyleIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBanner />
      <div className="pt-10">
        <AppleStyleHeader />
        <EnhancedAppleStyleHero />
        <AppleStyleProductGrid />
        <AppleStyleAbout />
        <EarlyAccessSignup />
        <LuxuryNewsletterSection />
        <AppleStyleFooter />
        <EnhancedSamraChatbot />
      </div>
    </div>
  );
};

export default EnhancedAppleStyleIndex;
