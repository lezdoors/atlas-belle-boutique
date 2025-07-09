import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Star, Sparkles, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Product {
  id: string;
  name_en: string;
  name_fr: string;
  description_en?: string;
  description_fr?: string;
  price_eur: number;
  price_usd: number;
  images: string[];
  category: string;
  origin_region?: string;
  cooperative_region?: string;
  artisan_story?: string;
  sustainability_badges: string[];
  featured: boolean;
  material?: string;
}

interface ProductMasonryGridProps {
  products: Product[];
  category?: string;
  onAddToCart: (productId: string) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistItems: string[];
}

const regionalBadges = {
  'Fès': { text: 'Made in Fès', color: 'bg-gradient-to-r from-amber-500 to-orange-600' },
  'Salé': { text: 'Soufflé à Salé', color: 'bg-gradient-to-r from-blue-500 to-indigo-600' },
  'Meknès': { text: 'Forgé à Meknès', color: 'bg-gradient-to-r from-emerald-500 to-teal-600' },
  'Essaouira': { text: 'Essence d\'Essaouira', color: 'bg-gradient-to-r from-purple-500 to-pink-600' },
  'Marrakech': { text: 'Terre de Marrakech', color: 'bg-gradient-to-r from-red-500 to-rose-600' },
};

const getRegionalBadge = (region?: string) => {
  if (!region) return null;
  
  const found = Object.entries(regionalBadges).find(([key]) => 
    region.toLowerCase().includes(key.toLowerCase())
  );
  
  return found ? { text: found[1].text, color: found[1].color } : null;
};

const ProductCard: React.FC<{
  product: Product;
  index: number;
  onAddToCart: (productId: string) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}> = ({ product, index, onAddToCart, onToggleWishlist, isWishlisted }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const regionalBadge = getRegionalBadge(product.origin_region || product.cooperative_region);
  const mainImage = product.images?.[0] || '/placeholder.svg';
  
  // Dynamic height for masonry effect
  const cardHeight = index % 3 === 0 ? 'h-96' : index % 2 === 0 ? 'h-80' : 'h-72';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      whileHover={{ y: -8 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        layout: { duration: 0.3 }
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-elegant hover:shadow-luxury transition-all duration-700",
        cardHeight
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden">
        <motion.img
          src={mainImage}
          alt={product.name_en}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onLoad={() => setImageLoaded(true)}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: imageLoaded ? 1 : 1.1, 
            opacity: imageLoaded ? 1 : 0 
          }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Regional Badge */}
        {regionalBadge && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4"
          >
            <Badge className={cn(
              "px-3 py-1.5 text-xs font-medium text-white border-none shadow-luxury",
              regionalBadge.color
            )}>
              <MapPin className="w-3 h-3 mr-1.5" />
              {regionalBadge.text}
            </Badge>
          </motion.div>
        )}

        {/* Featured Badge */}
        {product.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute top-4 right-4"
          >
            <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-none shadow-luxury px-2 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Coup de Cœur
            </Badge>
          </motion.div>
        )}

        {/* Wishlist Button */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ display: product.featured ? 'none' : 'flex' }}
        >
          <Heart className={cn(
            "w-4 h-4 transition-colors duration-300",
            isWishlisted ? "fill-red-500 text-red-500" : "text-white"
          )} />
        </motion.button>

        {/* Product Info - Always Visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white font-display text-xl font-semibold mb-2 leading-tight">
              {product.name_fr}
            </h3>
            
            {/* Price with Premium Styling */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-white font-display">
                  {product.price_eur}€
                </span>
                <span className="text-sm text-white/80 line-through">
                  {Math.round(product.price_eur * 1.3)}€
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">4.9</span>
              </div>
            </div>
          </motion.div>

          {/* Hover Content - Artisan Details */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="space-y-3"
              >
                {product.artisan_story && (
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                    {product.artisan_story}
                  </p>
                )}
                
                {product.material && (
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                      {product.material}
                    </Badge>
                  </div>
                )}

                {/* Sustainability Badges */}
                {product.sustainability_badges?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {product.sustainability_badges.slice(0, 2).map((badge) => (
                      <Badge 
                        key={badge} 
                        variant="outline" 
                        className="bg-emerald-500/20 text-emerald-100 border-emerald-300/30 text-xs"
                      >
                        {badge.replace('_', ' ')}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product.id);
                    }}
                    className="w-full bg-white text-black hover:bg-white/90 font-medium shadow-luxury transition-all duration-300 hover:scale-105"
                    size="sm"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Ajouter au Panier
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export const ProductMasonryGrid: React.FC<ProductMasonryGridProps> = ({
  products,
  category,
  onAddToCart,
  onToggleWishlist,
  wishlistItems
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (category && category !== 'all') {
      setFilteredProducts(products.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      ));
    } else {
      setFilteredProducts(products);
    }
  }, [products, category]);

  return (
    <div className="w-full">
      <motion.div
        layout
        className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="break-inside-avoid">
              <ProductCard
                product={product}
                index={index}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistItems.includes(product.id)}
              />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};