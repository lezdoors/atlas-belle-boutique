import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Minus, Plus, Truck, Shield, RotateCcw, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import MaisonChapuisHeader from '@/components/navigation/MaisonChapuisHeader';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductRecommendations from '@/components/product/ProductRecommendations';
import CustomerReviews from '@/components/product/CustomerReviews';

// Sample product data - in a real app this would come from an API
const sampleProduct = {
  id: 'tagine-service-artisanal',
  name_fr: 'Tagine de Service Artisanal',
  name_en: 'Handcrafted Serving Tagine',
  price: 67,
  images: [
    '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
    '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
    '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
    '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png'
  ],
  description: "Curated from the renowned pottery workshops of Fez, this exquisite serving tagine represents four centuries of Moroccan ceramic mastery. Each piece is hand-thrown by master artisans and finished with traditional glazes that have been passed down through generations. Perfect for elegant dinner parties or intimate family meals.",
  specifications: {
    dimensions: '12" diameter × 8" height',
    material: 'Authentic Fez ceramic with food-safe glaze',
    weight: '3.2 lbs',
    care: 'Hand wash only, not microwave safe',
    origin: 'Fez, Morocco'
  },
  features: [
    'Hand-crafted by master artisans in Fez',
    'Traditional glazing techniques',
    'Food-safe ceramic construction',
    'Perfect for serving and presentation',
    'Each piece is unique with natural variations'
  ],
  rating: 4.8,
  reviewCount: 127,
  inStock: true,
  category: 'tagines'
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // In a real app, you'd fetch the product data based on the ID
  const product = sampleProduct;

  useEffect(() => {
    if (!product) {
      navigate('/404');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    const productForCart = {
      id: product.id,
      name_fr: product.name_fr,
      name_en: product.name_en,
      price: product.price,
      images: product.images,
      category: product.category as any,
      in_stock: product.inStock,
      created_at: new Date().toISOString()
    };

    addToCart(productForCart, quantity);
    toast.success(
      language === 'fr' 
        ? `${product.name_fr} ajouté au panier` 
        : `${product.name_en} added to cart`
    );
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-white">
      <MaisonChapuisHeader />
      
      {/* Product Detail Content */}
      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-stone-500 mb-8">
            <button onClick={() => navigate('/')} className="hover:text-stone-900 transition-colors">
              Accueil
            </button>
            <span>/</span>
            <button onClick={() => navigate('/boutique')} className="hover:text-stone-900 transition-colors">
              Boutique
            </button>
            <span>/</span>
            <span className="text-stone-900">Tagines</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <ProductImageGallery 
                images={product.images}
                productName={product.name_fr}
                selectedIndex={selectedImageIndex}
                onImageSelect={setSelectedImageIndex}
              />
            </div>

            {/* Product Information */}
            <div className="lg:pl-8">
              {/* Product Name & Rating */}
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-light text-stone-900 mb-2">
                  {product.name_fr}
                </h1>
                <p className="text-lg text-stone-600 font-light mb-4">
                  {product.name_en}
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-stone-600 ml-2">
                      {product.rating} ({product.reviewCount} {language === 'fr' ? 'avis' : 'reviews'})
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="text-3xl font-light text-stone-900">
                  ${product.price}
                </div>
                <p className="text-sm text-stone-500 mt-1">
                  {language === 'fr' ? 'Livraison gratuite dès $125' : 'Free shipping over $125'}
                </p>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    ✓ {language === 'fr' ? 'En stock' : 'In Stock'}
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    {language === 'fr' ? 'Rupture de stock' : 'Out of Stock'}
                  </Badge>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-stone-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-stone-900 mb-4">
                  {language === 'fr' ? 'Caractéristiques' : 'Features'}
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-stone-700">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector & Add to Cart */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-stone-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="h-10 w-10 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={incrementQuantity}
                      className="h-10 w-10 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <Button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    variant="outline"
                    size="sm"
                    className="h-10 w-10 p-0"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="w-full bg-stone-900 text-white hover:bg-stone-800 h-12 text-base font-medium"
                  >
                    {language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}
                  </Button>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg">
                  <Truck className="w-5 h-5 text-stone-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      {language === 'fr' ? 'Livraison gratuite' : 'Free Shipping'}
                    </p>
                    <p className="text-sm text-stone-600">
                      {language === 'fr' 
                        ? 'Livraison gratuite dès $125. Expédition sous 1-2 jours ouvrés.'
                        : 'Free shipping on orders over $125. Ships within 1-2 business days.'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg">
                  <RotateCcw className="w-5 h-5 text-stone-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      {language === 'fr' ? 'Retours faciles' : 'Easy Returns'}
                    </p>
                    <p className="text-sm text-stone-600">
                      {language === 'fr' 
                        ? 'Retours gratuits sous 30 jours. Remboursement intégral.'
                        : '30-day free returns. Full refund guaranteed.'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg">
                  <Shield className="w-5 h-5 text-stone-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      {language === 'fr' ? 'Authenticité garantie' : 'Authenticity Guaranteed'}
                    </p>
                    <p className="text-sm text-stone-600">
                      {language === 'fr' 
                        ? 'Chaque pièce est authentifiée par nos experts.'
                        : 'Every piece is authenticated by our experts.'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="border-t border-stone-200 pt-8">
                <h3 className="text-lg font-medium text-stone-900 mb-4">
                  {language === 'fr' ? 'Spécifications' : 'Specifications'}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2">
                    <span className="text-stone-600">{language === 'fr' ? 'Dimensions' : 'Dimensions'}</span>
                    <span className="text-stone-900 font-medium">{product.specifications.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-stone-600">{language === 'fr' ? 'Matériau' : 'Material'}</span>
                    <span className="text-stone-900 font-medium">{product.specifications.material}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-stone-600">{language === 'fr' ? 'Poids' : 'Weight'}</span>
                    <span className="text-stone-900 font-medium">{product.specifications.weight}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-stone-600">{language === 'fr' ? 'Entretien' : 'Care'}</span>
                    <span className="text-stone-900 font-medium">{product.specifications.care}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-stone-600">{language === 'fr' ? 'Origine' : 'Origin'}</span>
                    <span className="text-stone-900 font-medium">{product.specifications.origin}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete the Set Recommendations */}
          <div className="mt-24">
            <ProductRecommendations />
          </div>

          {/* Customer Reviews */}
          <div className="mt-24">
            <CustomerReviews 
              rating={product.rating}
              reviewCount={product.reviewCount}
              productId={product.id}
            />
          </div>
        </div>
      </div>

      <ModernElegantFooter />
    </div>
  );
};

export default ProductDetail;
