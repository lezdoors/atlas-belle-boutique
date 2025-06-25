
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MissionHero from '@/components/MissionHero';
import MissionSection from '@/components/MissionSection';
import ShopByRegion from '@/components/ShopByRegion';
import RegionalCollections from '@/components/RegionalCollections';
import FragranceShowcase from '@/components/FragranceShowcase';
import ProductStorySection from '@/components/ProductStorySection';
import IngredientSpotlight from '@/components/IngredientSpotlight';
import Testimonials from '@/components/Testimonials';
import Categories from '@/components/Categories';
import BrandStory from '@/components/BrandStory';
import Footer from '@/components/Footer';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import BackToTop from '@/components/BackToTop';
import FloatingCart from '@/components/FloatingCart';
import OurArtisans from '@/components/OurArtisans';
import IngredientOriginMap from '@/components/IngredientOriginMap';
import FourSeasons from '@/components/FourSeasons';
import PullToRefresh from '@/components/PullToRefresh';
import AboutSection from '@/components/AboutSection';
import SEOOptimizer from '@/components/SEOOptimizer';
import BottomNavigation from '@/components/mobile/BottomNavigation';

const Index = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleRefresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  };

  const handleVideoEnded = (ended: boolean) => {
    console.log('Video ended in Index:', ended);
    setVideoEnded(ended);
  };

  return (
    <>
      <SEOOptimizer 
        title="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
        description="Découvrez l'élégance naturelle du Maroc à travers nos soins rares et artisanaux."
        image="/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png"
      />
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen bg-pearl-50 pb-20 lg:pb-0">
          <Header />
          <main>
            <Hero onVideoEnded={handleVideoEnded} />
            <MissionHero />
            <AboutSection />
            <MissionSection />
            <ShopByRegion />
            <RegionalCollections />
            <FragranceShowcase />
            <ProductStorySection productId={1} productName="Huile d'Argan Premium" />
            <IngredientSpotlight />
            <OurArtisans />
            <IngredientOriginMap />
            <FourSeasons />
            <Testimonials />
            <Categories />
            <BrandStory />
          </main>
          <Footer />
          <SamraRefactoredChatbot videoEnded={videoEnded} />
          <FloatingCart />
          <BackToTop />
          <BottomNavigation />
        </div>
      </PullToRefresh>
    </>
  );
};

export default Index;
