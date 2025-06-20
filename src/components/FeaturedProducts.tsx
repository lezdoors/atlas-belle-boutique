
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
    <section id="featured-products" className="py-20 bg-gradient-to-br from-sand-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FeaturedProductsHeader />

        {/* Info Bar */}
        <FeaturedProductsInfoBar />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-gold-500 hover:from-amber-600 hover:to-gold-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {language === 'fr' ? 'Voir toute la collection' : 'View entire collection'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
