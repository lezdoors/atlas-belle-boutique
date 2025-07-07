import React, { useState } from 'react';
import { Star, ShoppingCart, Truck, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ProductData } from '@/data/ProductData';

interface ProductHeroProps {
  product: ProductData;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Extract numeric value from price string (e.g., "89€" -> 89)
    const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''), 10);
    
    const productForCart = {
      id: product.id.toString(),
      name_fr: product.name,
      name_en: product.name,
      price: numericPrice,
      images: [product.image],
      category: 'accessories' as const,
      in_stock: true,
      created_at: new Date().toISOString()
    };
    addToCart(productForCart, quantity);
  };

  return (
    <section className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-3xl bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extralight text-black mb-4 tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-xl font-light text-black/70 leading-relaxed mb-6">
                {product.poeticDescription}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-black/60">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-light text-black">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-black/40 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-black/20 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-black hover:bg-black/5 rounded-l-full transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-black min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-black hover:bg-black/5 rounded-r-full transition-colors"
                  >
                    +
                  </button>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white hover:bg-black/90 rounded-full px-8 py-3 text-base font-light transition-all duration-300"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/10">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-black/60" />
                  <span className="text-xs text-black/60">Livraison gratuite dès 149€</span>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-black/60" />
                  <span className="text-xs text-black/60">Paiement sécurisé</span>
                </div>
                <div className="text-center">
                  <Leaf className="h-6 w-6 mx-auto mb-2 text-black/60" />
                  <span className="text-xs text-black/60">Fait main</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
