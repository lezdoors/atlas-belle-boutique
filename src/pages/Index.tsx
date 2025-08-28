import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import MaisonChapuisHero from '@/components/MaisonChapuisHero';
import CategoryGrid from '@/components/CategoryGrid';
import BestSellers from '@/components/BestSellers';
import FromTheAtelier from '@/components/FromTheAtelier';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const seoContent = {
    title: "Maison Chapuis — French-Curated Moroccan Ceramics",
    description: "Small-batch tableware and tagines, handmade in the Atlas, curated in France, shipped across the U.S. Authentic Moroccan ceramics for modern living.",
    keywords: [
      "moroccan ceramics",
      "handmade tagines",
      "moroccan dinnerware",
      "artisan pottery",
      "moroccan tea glasses",
      "french curated",
      "atlas mountains",
      "traditional crafts",
      "ceramic tableware",
      "moroccan art"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seoContent.title}
        description={seoContent.description}
        keywords={seoContent.keywords}
        type="website"
        schemaType="WebPage"
      />
      
      {/* Header */}
      <MaisonChapuisHeader />
      
      {/* Hero Section */}
      <MaisonChapuisHero />
      
      {/* Category Grid */}
      <CategoryGrid />
      
      {/* Best Sellers */}
      <BestSellers />
      
      {/* From the Atelier */}
      <FromTheAtelier />
      
      {/* Footer */}
      <ModernElegantFooter />
    </div>
  );
};

export default Index;