
import React, { useState } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Catalogue = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const categories = [
    { id: 'All', name: language === 'fr' ? 'Tout' : 'All' },
    { id: 'Beauté', name: language === 'fr' ? 'Beauté' : 'Beauty' },
    { id: 'Vaisselle', name: language === 'fr' ? 'Vaisselle' : 'Tableware' },
    { id: 'Décoration', name: language === 'fr' ? 'Décoration' : 'Decoration' },
    { id: 'Cadeaux', name: language === 'fr' ? 'Cadeaux' : 'Gifts' }
  ];

  const products = [
    {
      id: 1,
      name: language === 'fr' ? "Huile d'Argan Premium" : "Premium Argan Oil",
      category: 'Beauté',
      price: 89,
      originalPrice: 120,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/argan-oil-premium.jpg",
      description: language === 'fr' ? "100% pure, pressée à froid des montagnes de l'Atlas" : "100% pure, cold-pressed from Atlas mountains",
      rating: 4.9,
      reviews: 127,
      badge: language === 'fr' ? "Bestseller" : "Bestseller",
      stockLevel: 'good',
      stock: language === 'fr' ? 'En stock' : 'In stock'
    },
    {
      id: 2,
      name: language === 'fr' ? "Savon Noir Traditionnel" : "Traditional Black Soap",
      category: 'Beauté',
      price: 35,
      originalPrice: null,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/savon-noir-traditional.jpg",
      description: language === 'fr' ? "Gommage doux aux olives et eucalyptus" : "Gentle exfoliation with olives and eucalyptus",
      rating: 4.7,
      reviews: 89,
      badge: language === 'fr' ? "Naturel" : "Natural",
      stockLevel: 'good',
      stock: language === 'fr' ? 'En stock' : 'In stock'
    },
    {
      id: 3,
      name: language === 'fr' ? "Ghassoul de l'Atlas" : "Atlas Ghassoul Clay",
      category: 'Beauté',
      price: 42,
      originalPrice: null,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/ghassoul-atlas-clay.jpg",
      description: language === 'fr' ? "Argile purifiante volcanique des montagnes" : "Volcanic purifying clay from mountains",
      rating: 4.8,
      reviews: 156,
      badge: language === 'fr' ? "Nouveau" : "New",
      stockLevel: 'medium',
      stock: language === 'fr' ? 'Stock limité' : 'Limited stock'
    },
    {
      id: 4,
      name: language === 'fr' ? "Eau de Rose Damascena" : "Damascena Rose Water",
      category: 'Beauté',
      price: 28,
      originalPrice: 35,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/rose-water-damascena.jpg",
      description: language === 'fr' ? "Distillation artisanale de roses pures" : "Artisanal distillation of pure roses",
      rating: 4.6,
      reviews: 203,
      badge: language === 'fr' ? "Bio" : "Organic",
      stockLevel: 'good',
      stock: language === 'fr' ? 'En stock' : 'In stock'
    },
    {
      id: 5,
      name: language === 'fr' ? "Service à Thé Royal" : "Royal Tea Service",
      category: 'Vaisselle',
      price: 125,
      originalPrice: null,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/tea-service-royal.jpg",
      description: language === 'fr' ? "Céramique artisanale peinte à la main" : "Hand-painted artisanal ceramics",
      rating: 4.9,
      reviews: 78,
      badge: language === 'fr' ? "Artisanal" : "Artisanal",
      stockLevel: 'good',
      stock: language === 'fr' ? 'En stock' : 'In stock'
    },
    {
      id: 6,
      name: language === 'fr' ? "Bougie Ambre & Oud" : "Amber & Oud Candle",
      category: 'Décoration',
      price: 45,
      originalPrice: null,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/candle-amber-oud.jpg",
      description: language === 'fr' ? "Senteurs orientales authentiques" : "Authentic oriental fragrances",
      rating: 4.5,
      reviews: 92,
      badge: language === 'fr' ? "Exclusif" : "Exclusive",
      stockLevel: 'low',
      stock: language === 'fr' ? 'Bientôt épuisé' : 'Almost sold out'
    },
    {
      id: 7,
      name: language === 'fr' ? "Coffret Cadeau Luxe" : "Luxury Gift Set",
      category: 'Cadeaux',
      price: 150,
      originalPrice: 200,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/gift-set-luxury.jpg",
      description: language === 'fr' ? "Collection complète de produits authentiques" : "Complete collection of authentic products",
      rating: 4.8,
      reviews: 145,
      badge: language === 'fr' ? "Premium" : "Premium",
      stockLevel: 'good',
      stock: language === 'fr' ? 'En stock' : 'In stock'
    },
    {
      id: 8,
      name: language === 'fr' ? "Lampe Berbère" : "Berber Lamp",
      category: 'Décoration',
      price: 95,
      originalPrice: null,
      image: "https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/lamp-berber.jpg",
      description: language === 'fr' ? "Métal ciselé avec motifs traditionnels" : "Chiseled metal with traditional patterns",
      rating: 4.7,
      reviews: 67,
      badge: language === 'fr' ? "Unique" : "Unique",
      stockLevel: 'medium',
      stock: language === 'fr' ? 'Stock limité' : 'Limited stock'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

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

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <div className="pt-32 w-full">
        {/* Hero Section - matching homepage style */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden w-full">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: `url('https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/moroccan-patterns-bg.jpg')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95"></div>
          </div>

          <div className="relative z-10 text-center w-full px-6 lg:px-12 py-20">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 animate-fade-in opacity-0 tracking-tight" 
                style={{ lineHeight: '1.3', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {language === 'fr' ? 'Notre Collection' : 'Our Collection'}
            </h1>
            <p className="font-light text-base md:text-lg mb-12 animate-fade-in opacity-0 text-stone-600 leading-relaxed max-w-3xl mx-auto" 
               style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {language === 'fr' 
                ? 'Découvrez nos créations artisanales, chaque pièce raconte une histoire unique du Maroc authentique'
                : 'Discover our artisanal creations, each piece tells a unique story of authentic Morocco'
              }
            </p>
          </div>
        </section>

        {/* Filters & Sort Section - fixed button visibility */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Category Filters - matching homepage button style */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full text-sm font-light transition-all duration-300 border ${
                      selectedCategory === category.id
                        ? 'bg-black text-white border-black hover:bg-black/90'
                        : 'bg-white text-black hover:bg-gray-100 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-black/60 font-light">
                  {language === 'fr' ? 'Trier par:' : 'Sort by:'}
                </span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-white border-gray-200 text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">
                      {language === 'fr' ? 'Popularité' : 'Popularity'}
                    </SelectItem>
                    <SelectItem value="price-asc">
                      {language === 'fr' ? 'Prix croissant' : 'Price: Low to High'}
                    </SelectItem>
                    <SelectItem value="price-desc">
                      {language === 'fr' ? 'Prix décroissant' : 'Price: High to Low'}
                    </SelectItem>
                    <SelectItem value="rating">
                      {language === 'fr' ? 'Mieux notés' : 'Highest Rated'}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid - matching homepage card style */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {sortedProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="group cursor-pointer border-0 bg-gray-50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 overflow-hidden rounded-3xl"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Product Badges */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <Badge className="bg-black text-white rounded-full px-3 py-1 text-xs font-light">
                        {product.badge}
                      </Badge>
                      {product.originalPrice && (
                        <Badge className="bg-red-600 text-white rounded-full px-3 py-1 text-xs font-light">
                          {language === 'fr' ? 'Promo' : 'Sale'}
                        </Badge>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div className="absolute top-6 right-6">
                      <Badge 
                        className={`text-xs px-3 py-1 rounded-full font-light ${
                          product.stockLevel === 'good' 
                            ? 'bg-green-100 text-green-800' 
                            : product.stockLevel === 'medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.stock}
                      </Badge>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white hover:bg-gray-100 text-black rounded-full h-10 w-10"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white hover:bg-gray-100 text-black rounded-full h-10 w-10"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-black/60 font-light">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Product Name - matching homepage typography */}
                    <h3 className="text-2xl font-light text-black mb-2 tracking-tight">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-black/60 font-light mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-light text-black">
                          {product.price}€
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-black/40 line-through font-light">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button - matching homepage style */}
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-black hover:bg-black/90 text-white border-0 rounded-full py-3 font-light tracking-wide transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Results Info */}
            <div className="text-center mt-16 pt-8 border-t border-gray-100">
              <p className="text-lg font-light text-black/60">
                {language === 'fr' 
                  ? `${sortedProducts.length} produit${sortedProducts.length > 1 ? 's' : ''} affiché${sortedProducts.length > 1 ? 's' : ''}`
                  : `${sortedProducts.length} product${sortedProducts.length > 1 ? 's' : ''} shown`
                }
              </p>
            </div>
          </div>
        </section>

        <ModernElegantFooter />
        <BackToTop />
      </div>
    </div>
  );
};

export default Catalogue;
