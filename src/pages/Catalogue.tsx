
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
    { id: 'All', name: language === 'fr' ? 'Tout' : 'All' },
    { id: 'Parfums', name: 'Parfums' },
    { id: 'Soins', name: 'Soins' },
    { id: 'Maison', name: 'Maison' }
  ];

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Huile d\'Argan Précieuse' : 'Precious Argan Oil',
      category: 'Soins',
      price: 45,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Huile pure des montagnes de l\'Atlas, pour une peau éclatante' : 'Pure oil from Atlas mountains, for radiant skin',
      rating: 4.8
    },
    {
      id: 2,
      name: language === 'fr' ? 'Parfum Rose de Damas' : 'Damascus Rose Perfume',
      category: 'Parfums',
      price: 85,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Essence pure de roses cultivées dans la vallée du Dadès' : 'Pure essence of roses grown in Dadès valley',
      rating: 4.9
    },
    {
      id: 3,
      name: language === 'fr' ? 'Savon Noir Traditionnel' : 'Traditional Black Soap',
      category: 'Soins',
      price: 25,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Savon artisanal aux olives noires, gommage doux' : 'Artisanal soap with black olives, gentle exfoliation',
      rating: 4.7
    },
    {
      id: 4,
      name: language === 'fr' ? 'Bougie Ambre & Oud' : 'Amber & Oud Candle',
      category: 'Maison',
      price: 35,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Bougie parfumée aux senteurs orientales authentiques' : 'Scented candle with authentic oriental fragrances',
      rating: 4.6
    },
    {
      id: 5,
      name: language === 'fr' ? 'Eau de Fleur d\'Oranger' : 'Orange Blossom Water',
      category: 'Parfums',
      price: 28,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Eau florale distillée, fraîcheur et délicatesse' : 'Distilled floral water, freshness and delicacy',
      rating: 4.5
    },
    {
      id: 6,
      name: language === 'fr' ? 'Diffuseur Cèdre de l\'Atlas' : 'Atlas Cedar Diffuser',
      category: 'Maison',
      price: 55,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300',
      description: language === 'fr' ? 'Diffuseur en céramique artisanale avec huiles essentielles' : 'Artisanal ceramic diffuser with essential oils',
      rating: 4.8
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
        <section className="relative py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
          <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-bold text-5xl md:text-6xl text-clay-800 mb-6 tracking-tight">
                {language === 'fr' ? 'Découvrez nos créations' : 'Discover our creations'}
              </h1>
              <p className="font-serif text-xl text-clay-600 leading-relaxed">
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
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden border-2 border-transparent hover:border-copper-200">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 bg-copper-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price}€
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
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
                      <span className="text-sm text-clay-600 ml-2 font-medium">
                        {product.rating}
                      </span>
                    </div>

                    <h3 className="font-serif font-semibold text-xl text-clay-800 mb-3 leading-tight">
                      {product.name}
                    </h3>
                    
                    <p className="font-serif text-clay-600 text-sm mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-copper-600 hover:bg-copper-700 text-white rounded-full py-3 font-serif font-medium transition-all duration-300 hover:scale-105"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                    </Button>
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
