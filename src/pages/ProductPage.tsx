
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, Leaf } from 'lucide-react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';

interface ProductData {
  id: string;
  name: string;
  poeticDescription: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  whyWeLoveIt: string;
  howItsMade: string;
  careAndUse: string;
  ingredients?: string[];
  region: string;
  artisanStory?: string;
  inStock: boolean;
}

// Mock product data - in a real app, this would come from your database
const productData: { [key: string]: ProductData } = {
  'tajine-artisanal': {
    id: 'tajine-artisanal',
    name: 'Tajine Artisanal Premium',
    poeticDescription: 'Un voyage culinaire au cœur de l'Atlas, où chaque plat devient une célébration des saveurs ancestrales du Maroc.',
    price: '89€',
    originalPrice: '120€',
    image: '/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png',
    rating: 4.9,
    reviews: 127,
    whyWeLoveIt: 'Ce tajine incarne l\'âme de la cuisine marocaine. Façonné par des artisans berbères dans les montagnes de l\'Atlas, il transforme chaque repas en moment de partage et de tradition. Sa forme conique unique permet une cuisson lente qui révèle tous les arômes.',
    howItsMade: 'Modelé à la main dans l\'argile rouge de Salé, ce tajine est cuit dans des fours traditionnels alimentés au bois d\'olivier. Chaque pièce nécessite 15 jours de travail minutieux, de la préparation de l\'argile au vernissage final. Les motifs berbères sont gravés selon des techniques transmises de génération en génération.',
    careAndUse: 'Avant la première utilisation, faites tremper votre tajine dans l\'eau pendant 2 heures. Utilisez toujours à feu doux et évitez les chocs thermiques. Lavage à la main uniquement avec de l\'eau tiède et du savon doux. Laissez sécher complètement avant de ranger.',
    region: 'Atlas Mountains, Morocco',
    artisanStory: 'Créé par Maître Hassan, artisan potier depuis 30 ans dans la région de Salé.',
    inStock: true
  },
  'verre-marocain': {
    id: 'verre-marocain',
    name: 'Verres à Thé Soufflés Main',
    poeticDescription: 'L\'élégance du thé à la menthe dans des verres qui capturent la lumière dorée du soleil marocain.',
    price: '45€',
    image: '/lovable-uploads/0e8aa0f1-02db-49c9-962e-3153840ac9ba.png',
    rating: 4.8,
    reviews: 89,
    whyWeLoveIt: 'Ces verres cristallins transforment chaque dégustation de thé en rituel sacré. Soufflés à la bouche selon l\'art verrier traditionnel de Fès, ils reflètent la lumière avec une grâce incomparable et révèlent toute la beauté du thé à la menthe.',
    howItsMade: 'Chaque verre naît du souffle expert des maîtres verriers de Fès. Le verre en fusion est travaillé à plus de 1000°C, façonné uniquement à la canne et au souffle. Cette technique ancestrale garantit l\'unicité de chaque pièce et leur résistance exceptionnelle aux chocs thermiques.',
    careAndUse: 'Lavage à la main recommandé pour préserver l\'éclat. Résistants aux boissons chaudes jusqu\'à 80°C. Évitez le lave-vaisselle et les éponges abrasives. Séchage à l\'air libre ou avec un linge doux.',
    region: 'Fès, Morocco',
    inStock: true
  }
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!slug || !productData[slug]) {
    return <Navigate to="/boutique" replace />;
  }

  const product = productData[slug];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      priceMAD: parseInt(product.price.replace('€', '')),
      image: product.image
    }, quantity);
  };

  return (
    <div className="min-h-screen bg-white">
      <AppleStyleHeader />
      
      {/* Product Hero Section */}
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

      {/* Product Details Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Why We Love It */}
          <div className="mb-16">
            <h2 className="text-3xl font-extralight text-black mb-6 tracking-tight">
              Pourquoi nous l'adorons
            </h2>
            <p className="text-lg font-light text-black/70 leading-relaxed">
              {product.whyWeLoveIt}
            </p>
          </div>

          {/* How It's Made */}
          <div className="mb-16">
            <h2 className="text-3xl font-extralight text-black mb-6 tracking-tight">
              Comment c'est fait
            </h2>
            <p className="text-lg font-light text-black/70 leading-relaxed mb-4">
              {product.howItsMade}
            </p>
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-sm font-medium text-black/60">
                  Région d'origine: {product.region}
                </span>
              </div>
            </div>
          </div>

          {/* Care & Use */}
          <div className="mb-16">
            <h2 className="text-3xl font-extralight text-black mb-6 tracking-tight">
              Entretien & Utilisation
            </h2>
            <p className="text-lg font-light text-black/70 leading-relaxed">
              {product.careAndUse}
            </p>
          </div>

          {/* Shipping Note */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <Truck className="h-8 w-8 mx-auto mb-4 text-black/60" />
            <h3 className="text-xl font-light text-black mb-2">
              Livraison internationale gratuite
            </h3>
            <p className="text-black/60">
              Expédition gratuite à partir de 149€ — Expédié depuis le Maroc
            </p>
          </div>
        </div>
      </section>

      <AppleStyleFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default ProductPage;
