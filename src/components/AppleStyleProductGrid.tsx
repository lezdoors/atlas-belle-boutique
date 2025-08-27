
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag, Eye, Plus, Minus } from 'lucide-react';
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

const AppleStyleProductGrid = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const getQuantity = (productId: number) => quantities[productId] || 1;
  const setQuantity = (productId: number, quantity: number) => {
    setQuantities(prev => ({...prev, [productId]: Math.max(1, quantity)}));
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
      subtitle: language === 'fr' ? 'Designs exclusifs Perle de l’Atlas' : 'Exclusive Perle de l’Atlas designs',
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
        price_eur: product.numericPrice,
        price_usd: product.numericPrice * 1.08,
        stock_quantity: product.inStock ? 10 : 0,
        images: [product.image],
        category: product.category as string,
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
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-black mb-8 tracking-tight font-serif">
            {language === 'fr' ? 'Collections' : 'Collections'}
          </h2>
          <div className="w-24 h-px bg-stone-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-stone-500 max-w-3xl mx-auto leading-relaxed tracking-wide">
            {language === 'fr'
              ? 'Artisanat authentique du Maroc'
              : 'Authentic Moroccan craftsmanship'
            }
          </p>
        </div>

        {/* 2x2 French Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 bg-gray-50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 overflow-hidden rounded-3xl relative"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Price Overlay - Always Visible */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-stone-900">{product.price}</span>
                </div>

                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-stone-900 text-white rounded-full px-3 py-1 text-xs font-light">
                      {language === 'fr' ? 'Nouveau' : 'New'}
                    </Badge>
                  )}
                  {product.isComingSoon && (
                    <Badge className="bg-amber-600 text-white rounded-full px-3 py-1 text-xs font-light">
                      {language === 'fr' ? 'Bientôt' : 'Coming Soon'}
                    </Badge>
                  )}
                  {!product.inStock && !product.isComingSoon && (
                    <Badge className="bg-red-600 text-white rounded-full px-3 py-1 text-xs font-light">
                      {language === 'fr' ? 'Épuisé' : 'Out of Stock'}
                    </Badge>
                  )}
                </div>

                {/* Hover Overlay with Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4 text-white">
                    {/* Quantity Selector */}
                    {product.inStock && (
                      <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-white hover:text-stone-900 hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setQuantity(product.id, getQuantity(product.id) - 1);
                          }}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="min-w-[2rem] text-center font-medium">
                          {getQuantity(product.id)}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-white hover:text-stone-900 hover:bg-white"
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
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-white text-stone-900 hover:bg-stone-100 px-6 py-2 rounded-full font-light tracking-wide"
                        asChild
                      >
                        <Link to={`/product/${product.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          {language === 'fr' ? 'Voir' : 'View'}
                        </Link>
                      </Button>
                      
                      {product.inStock && (
                        <Button
                          size="sm"
                          className="bg-stone-900 text-white hover:bg-stone-800 px-6 py-2 rounded-full font-light tracking-wide"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          {language === 'fr' ? 'Ajouter' : 'Add to Cart'}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-black/60 mb-4">
                  {product.subtitle}
                </p>
                
                {/* Stock Status */}
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-stone-900">
                    {product.price}
                  </p>
                  <span className={`text-sm font-light ${
                    product.inStock ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {product.inStock 
                      ? (language === 'fr' ? 'En stock' : 'In stock')
                      : (language === 'fr' ? 'Rupture de stock' : 'Out of stock')
                    }
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleStyleProductGrid;
