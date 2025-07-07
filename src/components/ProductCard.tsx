
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import ProductCardImage from '@/components/product/ProductCardImage';
import ProductCardInfo from '@/components/product/ProductCardInfo';
import ProductCardPricing from '@/components/product/ProductCardPricing';

interface Product {
  id: number;
  name: string;
  priceMAD: number;
  originalPriceMAD?: number;
  image: string;
  rating: number;
  reviews: number;
  badge: { type: 'new' | 'bestseller' | 'limited' | 'discount'; discount?: number };
  description: string;
  longDescription?: string;
  ingredients?: string[];
  skinType?: string[];
  region?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();

  // Ensure authentic product images
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
  const productImages = [authenticImage, authenticImage, authenticImage];

  const enhancedProduct = {
    ...product,
    image: authenticImage,
    longDescription: product.longDescription || (language === 'fr' 
      ? 'Création artisanale authentique du Maroc, élaborée selon les traditions ancestrales pour révéler votre beauté naturelle.'
      : 'Authentic artisanal creation from Morocco, crafted according to ancestral traditions to reveal your natural beauty.'),
    ingredients: product.ingredients || (language === 'fr' 
      ? ['Huile d\'argan', 'Beurre de karité', 'Essence de rose'] 
      : ['Argan oil', 'Shea butter', 'Rose essence']),
    skinType: product.skinType || (language === 'fr' 
      ? ['Tous types de peau'] 
      : ['All skin types']),
    region: product.region || 'Atlas Mountains'
  };

  const handleAddToCart = () => {
    const productForCart = {
      id: product.id.toString(),
      name_fr: product.name,
      name_en: product.name,
      price: product.priceMAD,
      images: [authenticImage],
      category: 'accessories' as const,
      in_stock: true,
      created_at: new Date().toISOString()
    };
    addToCart(productForCart);
  };

  const saveForLaterItem = {
    id: product.id,
    name: product.name,
    price: product.priceMAD,
    image: authenticImage
  };

  return (
    <Card className="group hover-sophisticate bg-white/95 backdrop-blur-sm border-0 luxury-shadow h-full flex flex-col overflow-hidden rounded-3xl transition-all duration-500">
      <CardContent className="p-0 flex flex-col h-full">
        <ProductCardImage
          productImages={productImages}
          productName={product.name}
          productId={product.id}
          badge={product.badge}
          enhancedProduct={enhancedProduct}
          saveForLaterItem={saveForLaterItem}
          onAddToCart={handleAddToCart}
        />

        <ProductCardInfo
          productName={product.name}
          description={product.description}
          rating={product.rating}
          reviews={product.reviews}
        />

        <ProductCardPricing
          priceMAD={product.priceMAD}
          originalPriceMAD={product.originalPriceMAD}
        />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
