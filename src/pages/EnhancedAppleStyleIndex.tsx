
import { useState } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import EnhancedAppleStyleHero from '@/components/EnhancedAppleStyleHero';
import AppleStyleProductGrid from '@/components/AppleStyleProductGrid';
import AppleStyleAbout from '@/components/AppleStyleAbout';
import EarlyAccessSignup from '@/components/EarlyAccessSignup';
import LuxuryNewsletterSection from '@/components/newsletter/LuxuryNewsletterSection';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import EnhancedSamraChatbot from '@/components/chatbot/EnhancedSamraChatbot';
import StickyTopBanner from '@/components/StickyTopBanner';

const EnhancedAppleStyleIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBanner />
      <div className="pt-10">
        <MaisonStyleHeaderNew />
        <EnhancedAppleStyleHero />
        <AppleStyleProductGrid />
        <AppleStyleAbout />
        <EarlyAccessSignup />
        <LuxuryNewsletterSection />
        <ModernElegantFooter />
        <EnhancedSamraChatbot />
      </div>
    </div>
  );
};

export default EnhancedAppleStyleIndex;
