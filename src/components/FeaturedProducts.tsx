
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const [wishlist, setWishlist] = useState<number[]>([]);

  const featuredProducts = [
    {
      id: 1,
      name: language === 'fr' ? "Huile d'Argan Premium" : "Premium Argan Oil",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
      category: language === 'fr' ? "Huiles Précieuses" : "Precious Oils",
      description: language === 'fr' ? "100% pure, pressée à froid" : "100% pure, cold-pressed",
      rating: 4.9,
      reviews: 127,
      badge: language === 'fr' ? "Bestseller" : "Bestseller",
      isNew: false
    },
    {
      id: 2,
      name: language === 'fr' ? "Savon Noir Traditionnel" : "Traditional Black Soap",
      price: 35,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=500&q=80",
      category: language === 'fr' ? "Gommage & Purification" : "Exfoliation & Purification",
      description: language === 'fr' ? "Olive et eucalyptus" : "Olive and eucalyptus",
      rating: 4.7,
      reviews: 89,
      badge: language === 'fr' ? "Naturel" : "Natural",
      isNew: false
    },
    {
      id: 3,
      name: language === 'fr' ? "Ghassoul de l'Atlas" : "Atlas Ghassoul Clay",
      price: 42,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&q=80",
      category: language === 'fr' ? "Masques & Soins" : "Masks & Treatments",
      description: language === 'fr' ? "Argile purifiante volcanique" : "Volcanic purifying clay",
      rating: 4.8,
      reviews: 156,
      badge: language === 'fr' ? "Nouveau" : "New",
      isNew: true
    },
    {
      id: 4,
      name: language === 'fr' ? "Eau de Rose Damascena" : "Damascena Rose Water",
      price: 28,
      originalPrice: 35,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
      category: language === 'fr' ? "Hydrolats & Toniques" : "Hydrosols & Toners",
      description: language === 'fr' ? "Distillation artisanale" : "Artisanal distillation",
      rating: 4.6,
      reviews: 203,
      badge: language === 'fr' ? "Bio" : "Organic",
      isNew: false
    }
  ];

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(
      language === 'fr' 
        ? `${product.name} ajouté au panier` 
        : `${product.name} added to cart`
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section id="featured-products" className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Nos Produits Phares' : 'Our Featured Products'}
          </h2>
          <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
            {language === 'fr' 
              ? 'Découvrez notre sélection exclusive de produits de beauté marocains, chacun créé avec des ingrédients naturels de la plus haute qualité.'
              : 'Discover our exclusive selection of Moroccan beauty products, each crafted with the finest natural ingredients.'
            }
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group bg-white border-0 luxury-shadow rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-pearl-100 to-beige-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Temporary Image Badge */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {language === 'fr' ? 'Image Temporaire' : 'Temporary Image'}
                  </div>
                </div>

                {/* Product Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-emerald-500 text-white">
                      {product.badge}
                    </Badge>
                  )}
                  {!product.isNew && (
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      {product.badge}
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-white/90 hover:bg-white text-clay-700 rounded-full"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-white/90 hover:bg-white text-clay-700 rounded-full"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <p className="text-copper-600 text-sm font-medium mb-2">
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 className="font-display text-lg font-semibold text-clay-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-clay-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-clay-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-clay-800">
                      {product.price}€
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-clay-500 line-through">
                        {product.originalPrice}€
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full copper-gradient hover-scale text-white border-0"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-copper-500 text-copper-600 hover:bg-copper-500 hover:text-white transition-colors duration-300"
          >
            {language === 'fr' ? 'Voir tous les produits' : 'View all products'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
