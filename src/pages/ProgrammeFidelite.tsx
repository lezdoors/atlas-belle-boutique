import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import LoyaltyHero from '@/components/loyalty/LoyaltyHero';
import UserProgressSection from '@/components/loyalty/UserProgressSection';
import TiersSection from '@/components/loyalty/TiersSection';
import RewardsSection from '@/components/loyalty/RewardsSection';
import HowItWorksSection from '@/components/loyalty/HowItWorksSection';
import CTASection from '@/components/loyalty/CTASection';

const ProgrammeFidelite = () => {
  // Mock user data - in real app this would come from Supabase
  const userPoints = 450;
  const nextTierPoints = 750;
  const currentTier = 'Ambre';

  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      <LoyaltyHero />
      
      <UserProgressSection 
        userPoints={userPoints}
        nextTierPoints={nextTierPoints}
        currentTier={currentTier}
      />

      <TiersSection 
        currentTier={currentTier}
        userPoints={userPoints}
      />

      <RewardsSection userPoints={userPoints} />

      <HowItWorksSection />

      <CTASection />

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default ProgrammeFidelite;
