
import { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { convertAndFormat } from '@/utils/currencyConverter';
import { toast } from 'sonner';
import TrustBadge from '@/components/TrustBadge';

interface ProductInfoProps {
  product: {
    id: number;
    name: string;
    priceMAD: number;
    originalPriceMAD?: number;
    rating: number;
    reviews: number;
    description: string;
    image: string;
  };
  onOrderNow?: (quantity: number) => void;
}

const ProductInfo = ({ product, onOrderNow }: ProductInfoProps) => {
  const { language, currency } = useLanguage();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  // Mock sizes for demonstration
  const sizes = ['50ml', '100ml', '200ml'];

  // Ensure we're using authentic Perle d'Atlas image
  const getAuthenticImage = (originalImage: string) => {
    const imageMap: { [key: string]: string } = {
      'photo-1465146344425-f00d5f5c8f07': '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      'photo-1482881497185-d4a9ddbe4151': '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
      'photo-1500673922987-e212871fec22': '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
      'photo-1506744038136-46273834b3fb': '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
      'photo-1469474968028-56623f02e42e': '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png'
    };

    for (const [stockId, authenticImage] of Object.entries(imageMap)) {
      if (originalImage.includes(stockId)) {
        return authenticImage;
      }
    }
    return originalImage;
  };

  const authenticImage = getAuthenticImage(product.image);

  const handleAddToCart = () => {
    if (!user) {
      toast.error(language === 'fr' ? 'Veuillez vous connecter pour ajouter au panier' : 'Please sign in to add to cart');
      return;
    }

    if (!selectedSize) {
      toast.error(language === 'fr' ? 'Veuillez sélectionner une taille' : 'Please select a size');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      priceMAD: product.priceMAD,
      image: authenticImage,
      size: selectedSize
    }, quantity);

    toast.success(language === 'fr' ? 'Produit ajouté au panier' : 'Product added to cart');
  };

  const handleOrderNow = () => {
    if (!user) {
      toast.error(language === 'fr' ? 'Veuillez vous connecter pour commander' : 'Please sign in to order');
      return;
    }

    if (!selectedSize) {
      toast.error(language === 'fr' ? 'Veuillez sélectionner une taille' : 'Please select a size');
      return;
    }

    if (onOrderNow) {
      onOrderNow(quantity);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="section-title text-clay-800 mb-4">{product.name}</h1>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating) 
                    ? 'text-copper-500 fill-current' 
                    : 'text-pearl-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-clay-600 ml-2">
            {product.rating} ({product.reviews} {language === 'fr' ? 'avis' : 'reviews'})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-3xl font-bold text-copper-600">
            {convertAndFormat(product.priceMAD, currency)}
          </span>
          {product.originalPriceMAD && (
            <span className="text-xl text-clay-400 line-through">
              {convertAndFormat(product.originalPriceMAD, currency)}
            </span>
          )}
          {product.originalPriceMAD && (
            <span className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm font-medium">
              -{Math.round(((product.originalPriceMAD - product.priceMAD) / product.originalPriceMAD) * 100)}%
            </span>
          )}
        </div>

        {/* Description */}
        <p className="elegant-text text-clay-700 leading-relaxed mb-6">
          {product.description}
        </p>
      </div>

      {/* Size Selection */}
      <div className="space-y-4">
        <div>
          <label className="text-clay-700 font-medium mb-3 block">
            {language === 'fr' ? 'Taille:' : 'Size:'}
          </label>
          <div className="flex space-x-3">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size ? "copper-gradient text-white" : ""}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center space-x-4">
          <label className="text-clay-700 font-medium">
            {language === 'fr' ? 'Quantité:' : 'Quantity:'}
          </label>
          <div className="flex items-center border border-sand-300 rounded-lg">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-sand-100 transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 border-x border-sand-300 min-w-[3rem] text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 hover:bg-sand-100 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button 
            size="lg" 
            className="flex-1 copper-gradient text-white rounded-full min-h-[48px]"
            onClick={handleAddToCart}
            disabled={!selectedSize}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}
          </Button>
          {onOrderNow && (
            <Button 
              size="lg" 
              variant="outline"
              className="flex-1 rounded-full min-h-[48px]"
              onClick={handleOrderNow}
              disabled={!selectedSize}
            >
              {language === 'fr' ? 'Commander maintenant' : 'Buy Now'}
            </Button>
          )}
          <Button variant="outline" size="lg" className="rounded-full min-h-[48px]">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full min-h-[48px]">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Trust Badge */}
        <TrustBadge />
      </div>
    </div>
  );
};

export default ProductInfo;
