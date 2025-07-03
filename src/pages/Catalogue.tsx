
import React, { useState } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Catalogue = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', name: 'Tout' },
    { id: 'Vaisselle', name: 'Vaisselle' },
    { id: 'Décoration', name: 'Décoration' },
    { id: 'Cadeaux', name: 'Cadeaux' },
    { id: 'Beauté', name: 'Beauté' }
  ];

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Huile d\'Argan Précieuse' : 'Precious Argan Oil',
      category: 'Beauté',
      price: 45,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Huile pure des montagnes de l\'Atlas, pour une peau éclatante' : 'Pure oil from Atlas mountains, for radiant skin',
      rating: 4.8,
      stock: 'En stock',
      stockLevel: 'good'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Service à Thé Traditionnel' : 'Traditional Tea Service',
      category: 'Vaisselle',
      price: 125,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Service à thé en céramique artisanale, décoré à la main' : 'Handcrafted ceramic tea service, hand-decorated',
      rating: 4.9,
      stock: 'En stock',
      stockLevel: 'good'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Bougie Ambre & Oud' : 'Amber & Oud Candle',
      category: 'Décoration',
      price: 35,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Bougie parfumée aux senteurs orientales authentiques' : 'Scented candle with authentic oriental fragrances',
      rating: 4.6,
      stock: 'Bientôt épuisé',
      stockLevel: 'low'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Coffret Cadeau Argan' : 'Argan Gift Set',
      category: 'Cadeaux',
      price: 85,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Coffret cadeau avec huile d\'argan et produits de soin naturels' : 'Gift set with argan oil and natural skincare products',
      rating: 4.8,
      stock: 'En stock',
      stockLevel: 'good'
    },
    {
      id: 5,
      name: language === 'fr' ? 'Parfum Rose de Damas' : 'Damascus Rose Perfume',
      category: 'Beauté',
      price: 95,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Essence pure de roses cultivées dans la vallée du Dadès' : 'Pure essence of roses grown in Dadès valley',
      rating: 4.9,
      stock: 'En stock',
      stockLevel: 'good'
    },
    {
      id: 6,
      name: language === 'fr' ? 'Plat Tajine Artisanal' : 'Artisanal Tagine Dish',
      category: 'Vaisselle',
      price: 75,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Plat tajine traditionnel en terre cuite, fait à la main' : 'Traditional handmade clay tagine dish',
      rating: 4.7,
      stock: 'Stock limité',
      stockLevel: 'medium'
    },
    {
      id: 7,
      name: language === 'fr' ? 'Lampe Berbère Décorative' : 'Decorative Berber Lamp',
      category: 'Décoration',
      price: 120,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Lampe traditionnelle en métal ciselé, motifs berbères authentiques' : 'Traditional chiseled metal lamp with authentic Berber patterns',
      rating: 4.8,
      stock: 'En stock',
      stockLevel: 'good'
    },
    {
      id: 8,
      name: language === 'fr' ? 'Panier Cadeau Bien-être' : 'Wellness Gift Basket',
      category: 'Cadeaux',
      price: 150,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Panier cadeau complet avec produits de bien-être marocains' : 'Complete gift basket with Moroccan wellness products',
      rating: 4.9,
      stock: 'En stock',
      stockLevel: 'good'
    },
    {
      id: 9,
      name: language === 'fr' ? 'Savon Noir Traditionnel' : 'Traditional Black Soap',
      category: 'Beauté',
      price: 25,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Savon artisanal aux olives noires, gommage doux' : 'Artisanal soap with black olives, gentle exfoliation',
      rating: 4.7,
      stock: 'En stock',
      stockLevel: 'good'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      priceMAD: product.price * 10.5,
      image: product.image
    });
    
    toast.success(
      language === 'fr' 
        ? `${product.name} ajouté au panier` 
        : `${product.name} added to cart`
    );
  };

  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-br from-pearl-50 via-beige-50 to-amber-50">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B7956D' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-clay-800 mb-4 tracking-tight">
                {language === 'fr' ? 'Découvrez nos créations' : 'Discover our creations'}
              </h1>
              <p className="font-serif text-lg text-clay-600 leading-relaxed">
                {language === 'fr' 
                  ? 'Une collection exclusive de produits artisanaux marocains, créés avec passion et savoir-faire ancestral'
                  : 'An exclusive collection of Moroccan artisanal products, created with passion and ancestral know-how'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-3 rounded-full font-serif transition-all duration-300 border-2 ${
                    selectedCategory === category.id
                      ? 'bg-copper-600 hover:bg-copper-700 text-white border-copper-600'
                      : 'bg-white hover:bg-copper-50 text-clay-700 border-copper-200 hover:border-copper-400'
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-16 bg-gradient-to-b from-pearl-50 to-pearl-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-3xl overflow-hidden border-0 shadow-lg">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-clay-800 px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                      {product.price}€
                    </div>

                    {/* Stock Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      product.stockLevel === 'good' 
                        ? 'bg-green-100 text-green-700' 
                        : product.stockLevel === 'medium'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.stock}
                    </div>

                    {/* Hover Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 bg-copper-600 hover:bg-copper-700 text-white rounded-xl py-2 font-serif font-medium transition-all duration-300 shadow-lg"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {language === 'fr' ? 'Ajouter' : 'Add'}
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 bg-white/95 hover:bg-white text-clay-700 border-white/50 rounded-xl py-2 font-serif font-medium transition-all duration-300 shadow-lg"
                        >
                          {language === 'fr' ? 'Découvrir' : 'Discover'}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex items-center justify-between mb-3">
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
                        <span className="text-sm text-clay-600 ml-2 font-medium">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-serif font-semibold text-lg text-clay-800 mb-3 leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-serif text-clay-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Desktop Action Button */}
                    <div className="block lg:hidden">
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-copper-600 hover:bg-copper-700 text-white rounded-2xl py-3 font-serif font-medium transition-all duration-300 hover:scale-[1.02] shadow-md"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default Catalogue;
