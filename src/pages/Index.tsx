
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ShopByRegion from '@/components/ShopByRegion';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Categories from '@/components/Categories';
import BrandStory from '@/components/BrandStory';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <ShopByRegion />
          <FeaturedProducts />
          <Testimonials />
          <Categories />
          <BrandStory />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
