
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { convertAndFormat } from '@/utils/currencyConverter';

const ProductDetail = () => {
  const { id } = useParams();
  const { language, currency } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: parseInt(id || '1'),
    name: language === 'fr' ? 'Huile d\'Argan Premium' : 'Premium Argan Oil',
    priceMAD: 299,
    originalPriceMAD: 399,
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
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square overflow-hidden rounded-2xl luxury-shadow">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 aspect-square rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-copper-500' : ''
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

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-clay-700 font-medium">
                    {language === 'fr' ? 'Quantité:' : 'Quantity:'}
                  </label>
                  <div className="flex items-center border border-sand-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-sand-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-sand-300">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-sand-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button size="lg" className="flex-1 copper-gradient text-white rounded-full min-h-[48px]">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full min-h-[48px]">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full min-h-[48px]">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="description" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">
                {language === 'fr' ? 'Description' : 'Description'}
              </TabsTrigger>
              <TabsTrigger value="ingredients">
                {language === 'fr' ? 'Ingrédients' : 'Ingredients'}
              </TabsTrigger>
              <TabsTrigger value="usage">
                {language === 'fr' ? 'Utilisation' : 'Usage'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <p className="elegant-text text-clay-700 leading-relaxed mb-6">
                    {product.longDescription}
                  </p>
                  <div>
                    <h4 className="font-semibold text-clay-800 mb-4">
                      {language === 'fr' ? 'Bienfaits:' : 'Benefits:'}
                    </h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-clay-700">
                          <span className="w-2 h-2 bg-copper-500 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center text-clay-700">
                        <span className="w-2 h-2 bg-copper-500 rounded-full mr-3"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <p className="elegant-text text-clay-700 leading-relaxed">
                    {product.usage}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-clay-800 text-center mb-12">
            {language === 'fr' ? 'Produits recommandés' : 'Recommended products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/produit/${relatedProduct.id}`}>
                <ProductCard product={relatedProduct} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default ProductDetail;
