import { useState } from 'react';
import { Star, Heart, ShoppingBag, Truck, Shield, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import ArtisanProfileCard from '@/components/artisan/ArtisanProfileCard';
import PremiumShippingTracker from '@/components/shipping/PremiumShippingTracker';

interface ProductVariant {
  id: string;
  name: string;
  color: string;
  glaze: string;
  size: string;
  priceUSD: number;
  priceEUR: number;
  inStock: boolean;
  image: string;
}

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    region: string;
    technique: string;
    careInstructions: string;
    foodSafe: boolean;
    variants: ProductVariant[];
    artisan: any;
    images: string[];
    rating: number;
    reviewCount: number;
  };
}

const PremiumProductDetail = ({ product }: ProductDetailProps) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showCareGuide, setShowCareGuide] = useState(false);

  const handleAddToCart = () => {
    // Simple cart addition - will be enhanced later
    console.log('Adding to cart:', selectedVariant.id);
  };

  const techniques = {
    'hand-throwing': {
      fr: 'Tournage à la main sur tour de potier traditionnel',
      en: 'Hand-throwing on traditional pottery wheel'
    },
    'glazing': {
      fr: 'Application manuelle de glaçures minérales naturelles',
      en: 'Hand application of natural mineral glazes'
    },
    'firing': {
      fr: 'Cuisson en four traditionnel à haute température',
      en: 'Traditional high-temperature kiln firing'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Product Gallery & Info */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index ? 'border-stone-400' : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? 'text-amber-400 fill-current' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-stone-600">({product.reviewCount} avis)</span>
              </div>
              
              <h1 className="font-serif text-3xl lg:text-4xl text-stone-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-6 mb-6">
                <span className="text-2xl font-serif text-stone-900">
                  {language === 'fr' ? `€${selectedVariant.priceEUR}` : `$${selectedVariant.priceUSD}`}
                </span>
                <div className="flex items-center space-x-2 text-sm text-stone-600">
                  <Truck className="w-4 h-4" />
                  <span>{language === 'fr' ? '7-10 jours • Maroc' : '7-10 days • Morocco'}</span>
                </div>
              </div>
            </div>

            {/* Variant Selection */}
            <div className="space-y-4">
              <h3 className="font-medium text-stone-900">
                {language === 'fr' ? 'Choisir votre finition' : 'Choose your finish'}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedVariant.id === variant.id
                        ? 'border-stone-400 bg-stone-50'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-stone-900">{variant.name}</div>
                        <div className="text-sm text-stone-600">{variant.glaze} • {variant.size}</div>
                      </div>
                      <div className="text-lg font-serif text-stone-900">
                        {language === 'fr' ? `€${variant.priceEUR}` : `$${variant.priceUSD}`}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedVariant.inStock}
                className="w-full bg-stone-900 text-white hover:bg-stone-800 py-4 text-lg font-light rounded-xl"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                {selectedVariant.inStock
                  ? (language === 'fr' ? 'Ajouter au Panier' : 'Add to Cart')
                  : (language === 'fr' ? 'Rupture de Stock' : 'Out of Stock')
                }
              </Button>
              
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1 py-4 rounded-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  {language === 'fr' ? 'Favori' : 'Wishlist'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowCareGuide(!showCareGuide)}
                  className="flex-1 py-4 rounded-xl"
                >
                  <Info className="w-5 h-5 mr-2" />
                  {language === 'fr' ? 'Entretien' : 'Care Guide'}
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-200">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm font-medium text-stone-900">
                    {language === 'fr' ? 'Sans Danger' : 'Food Safe'}
                  </div>
                  <div className="text-xs text-stone-600">
                    {language === 'fr' ? 'Certifié UE' : 'EU Certified'}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm font-medium text-stone-900">
                    {language === 'fr' ? 'Protection Casse' : 'Breakage Protection'}
                  </div>
                  <div className="text-xs text-stone-600">
                    {language === 'fr' ? 'Incluse' : 'Included'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Guide Modal */}
      {showCareGuide && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl text-stone-900">
                  {language === 'fr' ? 'Guide d\'Entretien' : 'Care Instructions'}
                </h2>
                <button
                  onClick={() => setShowCareGuide(false)}
                  className="text-stone-500 hover:text-stone-700"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-stone-900 mb-3">
                    {language === 'fr' ? 'Nettoyage Quotidien' : 'Daily Cleaning'}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {product.careInstructions}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-stone-900 mb-3">
                    {language === 'fr' ? 'Technique de Fabrication' : 'Crafting Technique'}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {language === 'fr' ? techniques[product.technique as keyof typeof techniques]?.fr : techniques[product.technique as keyof typeof techniques]?.en}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {/* Description */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-stone-900 mb-6">
            {language === 'fr' ? 'Description' : 'Description'}
          </h2>
          <p className="text-stone-700 font-light leading-relaxed text-lg">
            {product.description}
          </p>
        </div>

        {/* Artisan Profile */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl text-stone-900 mb-6">
            {language === 'fr' ? 'Rencontrez Votre Artisan' : 'Meet Your Artisan'}
          </h2>
          <ArtisanProfileCard artisan={product.artisan} />
        </div>

        {/* Shipping Journey */}
        <div>
          <h2 className="font-serif text-2xl text-stone-900 mb-6">
            {language === 'fr' ? 'Votre Voyage Artisanal' : 'Your Artisan Journey'}
          </h2>
          <PremiumShippingTracker />
        </div>
      </div>
    </div>
  );
};

export default PremiumProductDetail;