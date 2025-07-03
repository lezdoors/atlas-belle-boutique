
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
      image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
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
      image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
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
      image: "/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png",
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
      image: "/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png",
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
      image: "/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png",
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
      image: "/lovable-uploads/eeff32cc-6bc0-4e17-9da7-c206afcf5509.png",
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
      image: "/lovable-uploads/ba21e7d0-cbef-422b-8a7d-1e701b06df53.png",
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
      image: "/lovable-uploads/6fde7854-c65c-40e6-8df6-8d9ca69c3fc8.png",
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
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container-refined text-center">
            <h1 className="heading-display text-5xl lg:text-6xl mb-6 text-balance">
              {language === 'fr' ? 'Notre Collection' : 'Our Collection'}
            </h1>
            <p className="body-text text-lg max-w-2xl mx-auto mb-12">
              {language === 'fr' 
                ? 'Découvrez nos créations artisanales, chaque pièce raconte une histoire unique du Maroc authentique'
                : 'Discover our artisanal creations, each piece tells a unique story of authentic Morocco'
              }
            </p>
          </div>
        </section>

        {/* Filters & Sort Section */}
        <section className="py-8 bg-stone-50 border-t border-stone-100">
          <div className="container-refined">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-stone-900 text-white hover:bg-stone-800'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-stone-600 font-light">
                  {language === 'fr' ? 'Trier par:' : 'Sort by:'}
                </span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-white border-stone-200">
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

        {/* Products Grid */}
        <section className="section-padding bg-white">
          <div className="container-refined">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="group bg-white border-0 shadow-elegant rounded-lg overflow-hidden hover:shadow-luxury transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative">
                    {/* Product Image */}
                    <div className="aspect-square overflow-hidden bg-stone-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-white/90 text-stone-800 text-xs px-2 py-1"
                      >
                        {product.badge}
                      </Badge>
                      {product.originalPrice && (
                        <Badge className="bg-red-100 text-red-800 text-xs px-2 py-1">
                          {language === 'fr' ? 'Promo' : 'Sale'}
                        </Badge>
                      )}
                    </div>

                    {/* Stock Status */}
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className={`text-xs px-2 py-1 ${
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
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white text-stone-700 rounded-full h-8 w-8"
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
                        />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white text-stone-700 rounded-full h-8 w-8"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-stone-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="heading-display text-lg font-normal text-stone-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="body-text text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-light text-stone-900">
                          {product.price}€
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-stone-500 line-through">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-stone-900 hover:bg-stone-800 text-white border-0 rounded-md py-2 font-light"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Results Info */}
            <div className="text-center mt-12 pt-8 border-t border-stone-100">
              <p className="body-text">
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
