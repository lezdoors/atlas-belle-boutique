
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import FeaturedProductsHeader from '@/components/FeaturedProductsHeader';
import FeaturedProductsInfoBar from '@/components/FeaturedProductsInfoBar';
import ProductCard from '@/components/ProductCard';

const FeaturedProducts = () => {
  const { language } = useLanguage();

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil',
      priceMAD: 958,
      originalPriceMAD: 1172,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 124,
      badge: { type: 'bestseller' as const },
      description: language === 'fr' 
        ? 'Huile pure d\'argan pressée à froid'
        : 'Pure cold-pressed argan oil'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Parfum Oud & Rose' : 'Oud & Rose Perfume',
      priceMAD: 1560,
      originalPriceMAD: 1775,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 89,
      badge: { type: 'new' as const },
      description: language === 'fr'
        ? 'Fragrance envoûtante aux notes orientales'
        : 'Enchanting fragrance with oriental notes'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Masque à l\'Argile Rouge' : 'Red Clay Mask',
      priceMAD: 484,
      originalPriceMAD: 591,
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 156,
      badge: { type: 'limited' as const },
      description: language === 'fr'
        ? 'Masque purifiant à l\'argile du Maroc'
        : 'Purifying mask with Moroccan clay'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Crème Anti-Âge Précieuse' : 'Precious Anti-Aging Cream',
      priceMAD: 1344,
      originalPriceMAD: 1560,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 203,
      badge: { type: 'discount' as const, discount: 25 },
      description: language === 'fr'
        ? 'Soin anti-âge aux extraits de cactus'
        : 'Anti-aging care with cactus extracts'
    }
  ];

  return (
    <section id="featured-products" className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FeaturedProductsHeader />

        {/* Info Bar */}
        <FeaturedProductsInfoBar />

        {/* Products Grid with Enhanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 luxury-shadow">
          <h3 className="font-display font-bold text-2xl text-clay-800 mb-4">
            {language === 'fr' ? 'Découvrez Toute Notre Collection' : 'Discover Our Complete Collection'}
          </h3>
          <p className="elegant-text text-clay-600 mb-8 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Plus de 150 produits authentiques vous attendent, chacun racontant une histoire unique du Maroc'
              : 'Over 150 authentic products await you, each telling a unique story of Morocco'
            }
          </p>
          <Button 
            size="lg"
            className="copper-gradient text-white px-12 py-4 text-lg font-medium rounded-full hover-scale luxury-shadow border-0 tracking-wide"
          >
            {language === 'fr' ? 'Voir toute la collection' : 'View entire collection'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
