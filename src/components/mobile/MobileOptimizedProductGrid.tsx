import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Eye, Plus, Minus, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  numericPrice: number;
  image: string;
  isNew?: boolean;
  isComingSoon?: boolean;
  inStock?: boolean;
  category: string;
}

const MobileOptimizedProductGrid = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const getQuantity = (productId: number) => quantities[productId] || 1;
  const setQuantity = (productId: number, quantity: number) => {
    setQuantities(prev => ({...prev, [productId]: Math.max(1, quantity)}));
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
        toast.success(language === 'fr' ? 'Retiré de la liste de souhaits' : 'Removed from wishlist');
      } else {
        newWishlist.add(productId);
        toast.success(language === 'fr' ? 'Ajouté à la liste de souhaits' : 'Added to wishlist');
      }
      return newWishlist;
    });
  };

  const products: Product[] = [
    {
      id: 1,
      name: language === 'fr' ? 'Tagines Artisanaux' : 'Tagines Artisanaux',
      subtitle: language === 'fr' ? 'Tagines artisanaux de service et de cuisson' : 'Handcrafted serving and cooking tagines',
      price: language === 'fr' ? 'À partir de $67' : 'Starting at $67',
      numericPrice: 67,
      image: '/lovable-uploads/297c8b0f-3221-45a3-8488-e8e023e07fcc.png',
      isNew: true,
      inStock: true,
      category: 'tagines'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Verres à Thé Traditionnels' : 'Verres à Thé Traditionnels',
      subtitle: language === 'fr' ? 'Collections authentiques de verres à thé marocains' : 'Authentic Moroccan tea glass collections',
      price: language === 'fr' ? 'À partir de $42' : 'Starting at $42',
      numericPrice: 42,
      image: '/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png',
      inStock: true,
      category: 'tea-glasses'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Céramiques de Table' : 'Céramiques de Table',
      subtitle: language === 'fr' ? 'Bols, assiettes et pièces de service élégants' : 'Elegant bowls, plates, and serving pieces',
      price: language === 'fr' ? 'À partir de $38' : 'Starting at $38',
      numericPrice: 38,
      image: '/lovable-uploads/78b2a27c-3352-460a-b4bb-78efaec79db3.png',
      isComingSoon: true,
      inStock: false,
      category: 'bowls'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Collections Signature' : 'Collections Signature',
      subtitle: language === 'fr' ? 'Designs exclusifs Maison Chapuis' : 'Exclusive Maison Chapuis designs',
      price: language === 'fr' ? 'À partir de $125' : 'Starting at $125',
      numericPrice: 125,
      image: '/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png',
      inStock: true,
      category: 'accessories'
    }
  ];

  const handleAddToCart = async (product: Product) => {
    if (!product.inStock) return;
    
    const quantity = getQuantity(product.id);
    try {
      await addToCart({
        id: product.id.toString(),
        name_fr: product.name,
        name_en: product.name,
        price: product.numericPrice,
        images: [product.image],
        category: product.category as "tagines" | "tea-glasses" | "bowls" | "accessories",
        in_stock: product.inStock || false,
        created_at: new Date().toISOString()
      }, quantity);
      
      toast.success(
        language === 'fr' 
          ? `${product.name} ajouté au panier` 
          : `${product.name} added to cart`
      );
    } catch (error) {
      toast.error(
        language === 'fr' 
          ? 'Erreur lors de l\'ajout au panier' 
          : 'Error adding to cart'
      );
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light text-black mb-6 lg:mb-8 tracking-tight font-serif">
            {language === 'fr' ? 'Collections' : 'Collections'}
          </h2>
          <div className="w-16 lg:w-24 h-px bg-stone-300 mx-auto mb-6 lg:mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-stone-500 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed tracking-wide">
            {language === 'fr'
              ? 'Artisanat authentique du Maroc'
              : 'Authentic Moroccan craftsmanship'
            }
          </p>
        </div>

        {/* Mobile Grid - Single Column on Mobile, Two Columns on Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 bg-gray-50 hover:bg-white transition-all duration-300 hover:shadow-xl overflow-hidden rounded-2xl lg:rounded-3xl relative touch-manipulation"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Price Tag - Always Visible on Mobile */}
                <div className="absolute top-3 right-3 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm">
                  <span className="text-xs lg:text-sm font-medium text-stone-900">{product.price}</span>
                </div>

                {/* Wishlist Heart - Top Left */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-3 left-3 lg:top-6 lg:left-6 p-2 lg:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm touch-manipulation"
                >
                  <Heart className={`h-4 w-4 lg:h-5 lg:w-5 transition-colors ${
                    wishlist.has(product.id) ? 'fill-red-500 text-red-500' : 'text-stone-600'
                  }`} />
                </button>

                {/* Status Badges */}
                <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-stone-900 text-white rounded-full px-2 py-1 lg:px-3 lg:py-1 text-xs font-light">
                      {language === 'fr' ? 'Nouveau' : 'New'}
                    </Badge>
                  )}
                  {product.isComingSoon && (
                    <Badge className="bg-amber-600 text-white rounded-full px-2 py-1 lg:px-3 lg:py-1 text-xs font-light">
                      {language === 'fr' ? 'Bientôt' : 'Coming Soon'}
                    </Badge>
                  )}
                  {!product.inStock && !product.isComingSoon && (
                    <Badge className="bg-red-600 text-white rounded-full px-2 py-1 lg:px-3 lg:py-1 text-xs font-light">
                      {language === 'fr' ? 'Épuisé' : 'Out of Stock'}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="p-4 lg:p-8">
                <h3 className="text-lg lg:text-2xl font-light text-black mb-2 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm lg:text-base font-light text-black/60 mb-4 line-clamp-2">
                  {product.subtitle}
                </p>

                {/* Mobile Controls */}
                <div className="space-y-3 lg:space-y-4">
                  {/* Quantity Selector */}
                  {product.inStock && (
                    <div className="flex items-center justify-center gap-3 bg-stone-100 rounded-full p-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-10 w-10 p-0 text-stone-600 hover:text-stone-900 hover:bg-white rounded-full touch-manipulation"
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuantity(product.id, getQuantity(product.id) - 1);
                        }}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="min-w-[3rem] text-center font-medium text-stone-900">
                        {getQuantity(product.id)}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-10 w-10 p-0 text-stone-600 hover:text-stone-900 hover:bg-white rounded-full touch-manipulation"
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuantity(product.id, getQuantity(product.id) + 1);
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="py-3 lg:py-4 text-sm font-light tracking-wide rounded-full border-stone-300 hover:border-stone-400 touch-manipulation"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        {language === 'fr' ? 'Voir' : 'View'}
                      </Link>
                    </Button>
                    
                    {product.inStock ? (
                      <Button
                        size="sm"
                        className="bg-stone-900 text-white hover:bg-stone-800 py-3 lg:py-4 text-sm font-light tracking-wide rounded-full touch-manipulation"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        {language === 'fr' ? 'Ajouter' : 'Add'}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="py-3 lg:py-4 text-sm font-light tracking-wide rounded-full"
                      >
                        {language === 'fr' ? 'Épuisé' : 'Out of Stock'}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileOptimizedProductGrid;