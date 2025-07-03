
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import WholesaleHero from '@/components/wholesale/WholesaleHero';
import WholesaleBenefits from '@/components/wholesale/WholesaleBenefits';
import WholesaleForm from '@/components/wholesale/WholesaleForm';

const Wholesale = () => {
  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      <main className="pt-24 pb-16">
        <WholesaleHero />
        <WholesaleBenefits />
        <WholesaleForm />
      </main>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default Wholesale;
