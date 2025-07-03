
import { useState, useEffect } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import NewsletterTopBanner from '@/components/NewsletterTopBanner';
import CountdownBanner from '@/components/CountdownBanner';
import AppleStyleHero from '@/components/AppleStyleHero';
import ThemedSections from '@/components/ThemedSections';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import StickyTopBanner from '@/components/StickyTopBanner';
import AppleCountdownBanner from '@/components/AppleCountdownBanner';

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
        
        {/* Clean Newsletter + Countdown Section */}
        <section className="w-full bg-white py-16">
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

        {/* Luxury Themed Sections */}
        <ThemedSections />
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
