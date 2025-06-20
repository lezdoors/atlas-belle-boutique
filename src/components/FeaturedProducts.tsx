
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';
import ProductBadge from '@/components/ProductBadge';

const FeaturedProducts = () => {
  const { language, currency } = useLanguage();

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil',
      priceMAD: 958, // Original price in MAD
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
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 mx-auto rounded-full mb-8"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand-800 mb-4">
            {language === 'fr' ? 'Nos Produits Phares' : 'Our Featured Products'}
          </h2>
          <p className="text-lg md:text-xl text-sand-700 max-w-2xl mx-auto leading-relaxed mb-8">
            {language === 'fr' 
              ? 'Découvrez notre sélection de produits de beauté authentiques, créés à partir d\'ingrédients précieux du Maroc'
              : 'Discover our selection of authentic beauty products, created from precious Moroccan ingredients'
            }
          </p>

          {/* Info Bar */}
          <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center text-sm text-sand-600">
              <span className="flex items-center">
                {language === 'fr' 
                  ? `✨ Livraison gratuite dès 150€ • Échantillons offerts`
                  : `✨ Free shipping from $150 • Free samples`
                }
              </span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 luxury-shadow h-full flex flex-col">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg aspect-[3/4]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <ProductBadge 
                    type={product.badge.type} 
                    discount={product.badge.type === 'discount' ? 25 : undefined}
                  />

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white hover:text-red-500 transition-colors rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Quick Actions */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-amber-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-sand-600 ml-2">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-serif font-semibold text-sand-800 mb-2 text-lg">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sand-600 text-sm mb-4 flex-grow">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-amber-600">
                        {convertAndFormat(product.priceMAD, currency)}
                      </span>
                      {product.originalPriceMAD && (
                        <span className="text-sm text-sand-500 line-through">
                          {convertAndFormat(product.originalPriceMAD, currency)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
