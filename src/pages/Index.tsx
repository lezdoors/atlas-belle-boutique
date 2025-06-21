import { useEffect, useState } from 'react';
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
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import BackToTop from '@/components/BackToTop';
import FloatingCart from '@/components/FloatingCart';
import OurArtisans from '@/components/OurArtisans';
import IngredientOriginMap from '@/components/IngredientOriginMap';
import PullToRefresh from '@/components/PullToRefresh';
import LogoLoadingAnimation from '@/components/LogoLoadingAnimation';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Show loading animation only once per session
    const hasSeenLoading = sessionStorage.getItem('perle-loading-shown');
    if (hasSeenLoading) {
      setShowLoading(false);
    } else {
      setHasShownLoading(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    if (hasShownLoading) {
      sessionStorage.setItem('perle-loading-shown', 'true');
    }
  };

  const handleRefresh = async () => {
    // Simulate refresh action
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.reload();
  };

  const handleVideoEnded = (ended: boolean) => {
    console.log('Video ended in Index:', ended);
    setVideoEnded(ended);
  };

  // Enhanced SEO meta tags
  useEffect(() => {
    // Update page title
    document.title = 'Perle d\'Atlas - Cosmétiques de Luxe Marocains | Tradition & Élégance';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez Perle d\'Atlas, la marque de cosmétiques de luxe marocains. Produits artisanaux authentiques alliant traditions ancestrales et élégance moderne. Huiles d\'argan, soins naturels du Maroc.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Découvrez Perle d\'Atlas, la marque de cosmétiques de luxe marocains. Produits artisanaux authentiques alliant traditions ancestrales et élégance moderne. Huiles d\'argan, soins naturels du Maroc.';
      document.head.appendChild(meta);
    }

    const ogTags = [
      { property: 'og:title', content: 'Perle d\'Atlas - Cosmétiques de Luxe Marocains' },
      { property: 'og:description', content: 'Découvrez nos produits de beauté artisanaux du Maroc, alliant traditions ancestrales et élégance contemporaine.' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Perle d\'Atlas - Cosmétiques de Luxe Marocains' },
      { name: 'twitter:description', content: 'Découvrez nos produits de beauté artisanaux du Maroc, alliant traditions ancestrales et élégance contemporaine.' },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Perle d'Atlas",
      "description": "Marque de cosmétiques de luxe marocains",
      "url": window.location.origin,
      "logo": `${window.location.origin}/favicon.svg`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+212-524-123-456",
        "contactType": "customer service"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const addedElements = document.querySelectorAll('meta[data-added="true"], script[type="application/ld+json"]');
      addedElements.forEach(el => el.remove());
    };
  }, []);

  return (
    <LanguageProvider>
      {showLoading && (
        <LogoLoadingAnimation onComplete={handleLoadingComplete} />
      )}
      
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen bg-pearl-50">
          <Header />
          <main>
            <Hero onVideoEnded={handleVideoEnded} />
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
          <SamraRefactoredChatbot videoEnded={videoEnded} />
          <FloatingCart />
          <BackToTop />
        </div>
      </PullToRefresh>
    </LanguageProvider>
  );
};

export default Index;
