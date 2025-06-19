import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Huile d\'Argan Bio',
      price: '89€',
      originalPrice: '109€',
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      description: 'Huile pure d\'argan pressée à froid'
    },
    {
      id: 2,
      name: 'Parfum Oud & Rose',
      price: '145€',
      originalPrice: '165€',
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 89,
      badge: 'Nouveau',
      description: 'Fragrance envoûtante aux notes orientales'
    },
    {
      id: 3,
      name: 'Masque à l\'Argile Rouge',
      price: '45€',
      originalPrice: '55€',
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 156,
      badge: 'Bio',
      description: 'Masque purifiant à l\'argile du Maroc'
    },
    {
      id: 4,
      name: 'Crème Anti-Âge Précieuse',
      price: '125€',
      originalPrice: '145€',
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 203,
      badge: 'Premium',
      description: 'Soin anti-âge aux extraits de cactus'
    }
  ];

  return (
    <section id="featured-products" className="py-20 bg-gradient-to-br from-sand-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 mx-auto rounded-full mb-8"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand-800 mb-6">
            Nos Produits Phares
          </h2>
          <p className="text-lg md:text-xl text-sand-700 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection de produits de beauté authentiques, 
            créés à partir d'ingrédients précieux du Maroc
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 luxury-shadow">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full text-white ${
                      product.badge === 'Bestseller' ? 'bg-amber-500' :
                      product.badge === 'Nouveau' ? 'bg-green-500' :
                      product.badge === 'Bio' ? 'bg-emerald-500' :
                      'bg-purple-500'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Quick Actions */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Ajouter au panier
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
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
                  <p className="text-sand-600 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-amber-600">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-sand-500 line-through">
                          {product.originalPrice}
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
            Voir toute la collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
