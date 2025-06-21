
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import WholesaleHero from '@/components/wholesale/WholesaleHero';
import WholesaleBenefits from '@/components/wholesale/WholesaleBenefits';
import WholesaleForm from '@/components/wholesale/WholesaleForm';

const Wholesale = () => {
  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      <main className="pt-24 pb-16">
        <WholesaleHero />
        <WholesaleBenefits />
        <WholesaleForm />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default Wholesale;
