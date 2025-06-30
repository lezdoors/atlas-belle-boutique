
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductBadge from '@/components/ProductBadge';
import WishlistButton from '@/components/WishlistButton';
import SaveForLaterButton from '@/components/SaveForLaterButton';
import QuickViewModal from '@/components/QuickViewModal';
import SwipeableGallery from '@/components/SwipeableGallery';

interface ProductCardImageProps {
  productImages: string[];
  productName: string;
  productId: number;
  badge: { type: 'new' | 'bestseller' | 'limited' | 'discount'; discount?: number };
  enhancedProduct: any;
  saveForLaterItem: any;
  onAddToCart: () => void;
}

const ProductCardImage: React.FC<ProductCardImageProps> = ({
  productImages,
  productName,
  productId,
  badge,
  enhancedProduct,
  saveForLaterItem,
  onAddToCart
}) => {
  const { language } = useLanguage();

  return (
    <div className="relative overflow-hidden aspect-[4/3] lg:aspect-square">
      <SwipeableGallery 
        images={productImages}
        alt={productName}
        className="h-full w-full transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      {/* Seasonal Edition Badge */}
      <div className="absolute top-3 left-3">
        <div className="bg-copper-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">
          {language === 'fr' ? 'Édition 2025' : '2025 Edition'}
        </div>
      </div>

      {/* Product Badge */}
      <ProductBadge 
        type={badge.type} 
        discount={badge.type === 'discount' ? 25 : undefined}
      />

      {/* Refined Action Buttons */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        <SaveForLaterButton item={saveForLaterItem} />
        <WishlistButton 
          productId={productId} 
          productName={productName}
          variant="icon"
          size="icon"
        />
        <QuickViewModal product={enhancedProduct}>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 hover:bg-white hover:text-copper-600 transition-all duration-300 rounded-full luxury-shadow h-10 w-10 backdrop-blur-sm"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </QuickViewModal>
      </div>

      {/* Enhanced Quick Add to Cart */}
      <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        <Button 
          size="sm" 
          onClick={onAddToCart}
          className="w-full copper-gradient text-white rounded-full luxury-shadow border-0 font-medium tracking-wide min-h-[44px] backdrop-blur-sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCardImage;
