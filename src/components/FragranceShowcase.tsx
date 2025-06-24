import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const FragranceShowcase = () => {
  const { addToCart } = useCart();
  const { language } = useLanguage();

  const fragranceCategories = [
    {
      id: 1,
      name: "Parfums Imperial",
      description: language === 'fr' ? "Collection royale d'essences rares" : "Royal collection of rare essences",
      products: [
        {
          id: 11,
          name: language === 'fr' ? "Oud Imperial" : "Imperial Oud",
          price: 149,
          image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
          rating: 4.9,
          reviews: 87
        },
        {
          id: 12,
          name: language === 'fr' ? "Rose de Marrakech" : "Rose of Marrakech",
          price: 129,
          image: "/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png",
          rating: 4.8,
          reviews: 124
        }
      ]
    },
    {
      id: 2,
      name: "Fragrances Atlas",
      description: language === 'fr' ? "Inspirées des sommets majestueux" : "Inspired by majestic peaks",
      products: [
        {
          id: 21,
          name: language === 'fr' ? "Cèdre d'Atlas" : "Atlas Cedar",
          price: 119,
          image: "/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png",
          rating: 4.7,
          reviews: 156
        },
        {
          id: 22,
          name: language === 'fr' ? "Thé des Montagnes" : "Mountain Tea",
          price: 109,
          image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
          rating: 4.6,
          reviews: 92
        }
      ]
    },
    {
      id: 3,
      name: "Parfums Sahara",
      description: language === 'fr' ? "Chaleur envoûtante du désert" : "Enchanting warmth of the desert",
      products: [
        {
          id: 31,
          name: language === 'fr' ? "Ambre Saharien" : "Saharan Amber",
          price: 139,
          image: "/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png",
          rating: 4.9,
          reviews: 203
        },
        {
          id: 32,
          name: language === 'fr' ? "Santal Mystique" : "Mystic Sandalwood",
          price: 125,
          image: "/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png",
          rating: 4.8,
          reviews: 178
        }
      ]
    },
    {
      id: 4,
      name: "Huiles Précieuses",
      description: language === 'fr' ? "Élixirs ancestraux du Maroc" : "Ancestral elixirs of Morocco",
      products: [
        {
          id: 41,
          name: language === 'fr' ? "Huile d'Argan Royal" : "Royal Argan Oil",
          price: 89,
          image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
          rating: 4.9,
          reviews: 267
        },
        {
          id: 42,
          name: language === 'fr' ? "Essence de Jasmin" : "Jasmine Essence",
          price: 95,
          image: "/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png",
          rating: 4.7,
          reviews: 145
        }
      ]
    }
  ];

  const handleQuickShop = (product: any) => {
    addToCart(product);
    toast.success(
      language === 'fr' 
        ? `${product.name} ajouté au panier` 
        : `${product.name} added to cart`
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Credibility Markers */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <Badge className="bg-gradient-to-r from-amber-500 to-gold-500 text-white px-6 py-2 text-sm font-medium">
              {language === 'fr' ? 'Maîtres Parfumeurs depuis 1950' : 'Master Perfumers Since 1950'}
            </Badge>
            <div className="text-sm text-clay-600 font-light">
              {language === 'fr' ? 'Lots limités - Seulement 50 flacons par parfum' : 'Limited Batches - Only 50 bottles per fragrance'}
            </div>
          </div>
          
          {/* Customer Testimonial */}
          <div className="max-w-2xl mx-auto mb-6">
            <blockquote className="text-clay-700 italic text-lg mb-2">
              "{language === 'fr' ? 'Tient 12+ heures, dépasse les attentes du luxe' : 'Lasts 12+ hours, exceeds luxury expectations'}"
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-clay-600 text-sm">
              {language === 'fr' ? 'Prix premium: 89€ - 149€' : 'Premium pricing: 89€ - 149€'}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Collections Exclusives de Parfums' : 'Exclusive Fragrance Collections'}
          </h2>
          <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
            {language === 'fr' 
              ? 'Découvrez nos créations parfumées uniques, inspirées des traditions ancestrales du Maroc et créées par nos maîtres parfumeurs.'
              : 'Discover our unique fragrant creations, inspired by the ancestral traditions of Morocco and created by our master perfumers.'
            }
          </p>
        </div>

        {/* Fragrance Categories - Mobile Horizontal Scroll */}
        <div className="space-y-12">
          {fragranceCategories.map((category) => (
            <div key={category.id} className="mb-12">
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-clay-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-clay-600">
                  {category.description}
                </p>
              </div>

              {/* Products - Horizontal scroll on mobile */}
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-2 lg:gap-8">
                  {category.products.map((product) => (
                    <Card 
                      key={product.id} 
                      className="group bg-white border-0 luxury-shadow rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-80 lg:w-auto"
                    >
                      <div className="relative">
                        {/* Product Image */}
                        <div className="aspect-square overflow-hidden bg-gradient-to-br from-pearl-100 to-beige-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                        {/* Product Name */}
                        <h4 className="font-display text-lg font-semibold text-clay-800 mb-2">
                          {product.name}
                        </h4>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
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
                          <span className="text-xl font-bold text-clay-800">
                            {product.price}€
                          </span>
                        </div>

                        {/* Quick Shop Button */}
                        <Button
                          onClick={() => handleQuickShop(product)}
                          className="w-full copper-gradient hover-scale text-white border-0"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {language === 'fr' ? 'Quick Shop' : 'Quick Shop'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-copper-500 text-copper-600 hover:bg-copper-500 hover:text-white transition-colors duration-300"
          >
            {language === 'fr' ? 'Voir toutes les collections' : 'View all collections'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FragranceShowcase;
