
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ShopByRegion from '@/components/ShopByRegion';
import RegionalCollections from '@/components/RegionalCollections';
import FeaturedProducts from '@/components/FeaturedProducts';
import ProductStorySection from '@/components/ProductStorySection';
import IngredientSpotlight from '@/components/IngredientSpotlight';
import Testimonials from '@/components/Testimonials';
import Categories from '@/components/Categories';
import BrandStory from '@/components/BrandStory';
import Footer from '@/components/Footer';
import SamraChatbot from '@/components/SamraChatbot';
import BackToTop from '@/components/BackToTop';
import FloatingCart from '@/components/FloatingCart';
import OurArtisans from '@/components/OurArtisans';
import IngredientOriginMap from '@/components/IngredientOriginMap';
import PullToRefresh from '@/components/PullToRefresh';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  const handleRefresh = async () => {
    // Simulate refresh action
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  };

  return (
    <LanguageProvider>
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <ShopByRegion />
            <RegionalCollections />
            <FeaturedProducts />
            <ProductStorySection productId={1} productName="Huile d'Argan Premium" />
            <IngredientSpotlight />
            <OurArtisans />
            <IngredientOriginMap />
            <Testimonials />
            <Categories />
            <BrandStory />
          </main>
          <Footer />
          <SamraChatbot />
          <FloatingCart />
          <BackToTop />
        </div>
      </PullToRefresh>
    </LanguageProvider>
  );
};

export default Index;
