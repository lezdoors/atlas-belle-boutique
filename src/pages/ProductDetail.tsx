
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import CheckoutForm from '@/components/CheckoutForm';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import ProductDetailTabs from '@/components/ProductDetailTabs';
import RelatedProducts from '@/components/RelatedProducts';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: parseInt(id || '1'),
    name: language === 'fr' ? 'Huile d\'Argan Premium' : 'Premium Argan Oil',
    priceMAD: 299,
    originalPriceMAD: 399,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600', // Main product image
    images: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600',
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600'
    ],
    rating: 4.8,
    reviews: 156,
    description: language === 'fr' 
      ? 'Notre huile d\'argan premium est extraite à la main des kernels d\'arganiers centenaires de la région de l\'Atlas. Riche en vitamine E et en acides gras essentiels, elle nourrit et protège votre peau en profondeur.'
      : 'Our premium argan oil is hand-extracted from kernels of century-old argan trees from the Atlas region. Rich in vitamin E and essential fatty acids, it deeply nourishes and protects your skin.',
    longDescription: language === 'fr'
      ? 'Cette huile précieuse est le fruit d\'un savoir-faire traditionnel transmis de génération en génération par les femmes berbères. Chaque goutte renferme les bienfaits de cette terre généreuse du Maroc.'
      : 'This precious oil is the result of traditional know-how passed down from generation to generation by Berber women. Each drop contains the benefits of this generous Moroccan land.',
    ingredients: language === 'fr' 
      ? ['Huile d\'Argania Spinosa 100% pure', 'Vitamine E naturelle', 'Antioxydants naturels']
      : ['100% pure Argania Spinosa oil', 'Natural Vitamin E', 'Natural antioxidants'],
    benefits: language === 'fr'
      ? ['Hydrate intensément', 'Anti-âge naturel', 'Répare les cheveux', 'Apaise les irritations']
      : ['Intense hydration', 'Natural anti-aging', 'Hair repair', 'Soothes irritations'],
    usage: language === 'fr'
      ? 'Appliquer quelques gouttes sur peau propre, masser délicatement. Utiliser matin et soir.'
      : 'Apply a few drops to clean skin, massage gently. Use morning and evening.',
    region: 'Atlas',
    skinType: language === 'fr' ? ['Tous types de peau'] : ['All skin types']
  };

  // Mock related products
  const relatedProducts = [
    {
      id: 2,
      name: language === 'fr' ? 'Crème Hydratante Rose' : 'Rose Hydrating Cream',
      priceMAD: 189,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
      rating: 4.6,
      reviews: 89,
      badge: { type: 'new' as const },
      description: language === 'fr' 
        ? 'Crème nourrissante à base de pétales de rose'
        : 'Nourishing cream with rose petals'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Masque Purifiant Ghassoul' : 'Ghassoul Purifying Mask',
      priceMAD: 149,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400',
      rating: 4.7,
      reviews: 203,
      badge: { type: 'limited' as const },
      description: language === 'fr' 
        ? 'Masque d\'argile naturelle aux propriétés purifiantes'
        : 'Natural clay mask with purifying properties'
    }
  ];

  const handleOrderNow = (selectedQuantity: number) => {
    setQuantity(selectedQuantity);
    setShowCheckout(true);
  };

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-clay-600">
          <Link to="/" className="hover:text-copper-600">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <span>/</span>
          <Link to="/boutique" className="hover:text-copper-600">
            {language === 'fr' ? 'Boutique' : 'Shop'}
          </Link>
          <span>/</span>
          <span className="text-clay-800">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductImageGallery 
              images={product.images} 
              productName={product.name} 
            />
            <ProductInfo 
              product={product} 
              onOrderNow={handleOrderNow} 
            />
          </div>
        </div>
      </section>

      <ProductDetailTabs product={product} />

      <RelatedProducts products={relatedProducts} />

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <CheckoutForm
                product={{
                  id: product.id,
                  name: product.name,
                  priceMAD: product.priceMAD
                }}
                quantity={quantity}
                onClose={() => setShowCheckout(false)}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default ProductDetail;
