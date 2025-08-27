import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star, ArrowLeft, Info, Truck, Shield, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import ProductGrid from '@/components/ProductGrid';
import { toast } from '@/hooks/use-toast';
import { Tables } from '@/integrations/supabase/types';

type DatabaseProduct = Tables<'products'>;

const ProductDetailLuxury = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<DatabaseProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'story' | 'care' | 'region'>('story');

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        return;
      }

      setProduct(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;

    const images = Array.isArray(product.images) ? product.images as string[] : [];

    await addToCart({
      id: product.id,
      name_fr: product.name_fr,
      name_en: product.name_en,
      price_eur: product.price_eur,
      price_usd: product.price_usd,
      stock_quantity: product.stock_quantity,
      images: images,
      category: product.category as any,
      created_at: product.created_at || '',
      featured: product.featured || false
    }, quantity);

    toast({
      title: language === 'fr' ? 'Ajouté au panier' : 'Added to cart',
      description: `${quantity}x ${language === 'fr' ? product.name_fr : product.name_en}`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-moroccan-blue"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-moroccan-blue mb-4">
            {language === 'fr' ? 'Produit non trouvé' : 'Product not found'}
          </h1>
          <Link to="/" className="text-moroccan-blue hover:underline">
            {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
          </Link>
        </div>
      </div>
    );
  }

  const productName = language === 'fr' ? product.name_fr : product.name_en;
  const productDescription = language === 'fr' ? product.description_fr : product.description_en;
  const images = Array.isArray(product.images) ? product.images as string[] : [];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-moroccan-blue hover:text-moroccan-blue/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Retour aux produits' : 'Back to products'}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="aspect-square rounded-lg overflow-hidden bg-moroccan-sand/10">
                <img
                  src={images[selectedImage] || '/placeholder.svg'}
                  alt={productName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                        selectedImage === index ? 'border-moroccan-blue' : 'border-transparent hover:border-moroccan-sand'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${productName} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              
              {/* Header */}
              <div>
                {product.origin_region && (
                  <Badge className="mb-4 bg-moroccan-sand text-moroccan-blue">
                    {product.origin_region}
                  </Badge>
                )}
                
                <h1 className="font-serif text-3xl lg:text-4xl text-moroccan-blue mb-4 font-light">
                  {productName}
                </h1>
                
                <div className="text-2xl text-moroccan-blue font-light mb-6">
                  {product.price_eur.toFixed(2)}€
                </div>

                {productDescription && (
                  <p className="text-stone-600 leading-relaxed font-light">
                    {productDescription}
                  </p>
                )}
              </div>

              {/* Material & Authenticity */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-moroccan-blue border-moroccan-blue/30">
                  Fait main
                </Badge>
                {product.material && (
                  <Badge variant="outline" className="text-stone-600 border-stone-300">
                    {product.material}
                  </Badge>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-light text-stone-600">
                    {language === 'fr' ? 'Quantité:' : 'Quantity:'}
                  </span>
                  <div className="flex items-center border border-stone-300 rounded-lg">
                    <button
                      className="px-4 py-2 hover:bg-stone-50 transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button
                      className="px-4 py-2 hover:bg-stone-50 transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-moroccan-blue text-white hover:bg-moroccan-blue/90 h-12 text-base font-light tracking-wide"
                    disabled={(product.stock_quantity || 0) === 0}
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    {(product.stock_quantity || 0) === 0 
                      ? (language === 'fr' ? 'Rupture de stock' : 'Out of Stock')
                      : (language === 'fr' ? 'Ajouter au panier' : 'Add to Cart')
                    }
                  </Button>
                  
                  <Button variant="outline" size="lg" className="px-6">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-moroccan-sand/20 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-moroccan-blue" />
                  <span className="text-sm font-light text-moroccan-blue">
                    {language === 'fr' ? 'Livraison gratuite dès 75€' : 'Free shipping from €75'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-moroccan-blue" />
                  <span className="text-sm font-light text-moroccan-blue">
                    {language === 'fr' ? 'Garantie authenticité' : 'Authenticity guarantee'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-moroccan-blue" />
                  <span className="text-sm font-light text-moroccan-blue">
                    {language === 'fr' ? 'Commerce équitable' : 'Fair trade'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-stone-200">
              <nav className="flex gap-8">
                <button
                  className={`pb-4 border-b-2 transition-colors ${
                    activeTab === 'story' 
                      ? 'border-moroccan-blue text-moroccan-blue' 
                      : 'border-transparent text-stone-600 hover:text-moroccan-blue'
                  }`}
                  onClick={() => setActiveTab('story')}
                >
                  {language === 'fr' ? 'Histoire de l\'Artisan' : 'Artisan Story'}
                </button>
                <button
                  className={`pb-4 border-b-2 transition-colors ${
                    activeTab === 'care' 
                      ? 'border-moroccan-blue text-moroccan-blue' 
                      : 'border-transparent text-stone-600 hover:text-moroccan-blue'
                  }`}
                  onClick={() => setActiveTab('care')}
                >
                  {language === 'fr' ? 'Entretien' : 'Care Instructions'}
                </button>
                <button
                  className={`pb-4 border-b-2 transition-colors ${
                    activeTab === 'region' 
                      ? 'border-moroccan-blue text-moroccan-blue' 
                      : 'border-transparent text-stone-600 hover:text-moroccan-blue'
                  }`}
                  onClick={() => setActiveTab('region')}
                >
                  {language === 'fr' ? 'Région & Coopérative' : 'Region & Cooperative'}
                </button>
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'story' && product.artisan_story && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-stone-600 font-light leading-relaxed italic">
                    "{product.artisan_story}"
                  </p>
                </div>
              )}
              
              {activeTab === 'care' && product.care_instructions && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-stone-600 font-light leading-relaxed">
                    {product.care_instructions}
                  </p>
                </div>
              )}
              
              {activeTab === 'region' && product.cooperative_region && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-stone-600 font-light leading-relaxed">
                    {language === 'fr' 
                      ? `Cette pièce provient de la région de ${product.cooperative_region}, réputée pour son savoir-faire artisanal ancestral et ses techniques de fabrication traditionnelles transmises de génération en génération.`
                      : `This piece comes from the ${product.cooperative_region} region, renowned for its ancestral craftsmanship and traditional manufacturing techniques passed down from generation to generation.`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <h2 className="font-serif text-3xl text-moroccan-blue mb-8 text-center font-light">
              {language === 'fr' ? 'Produits Similaires' : 'Related Products'}
            </h2>
            <ProductGrid category={product.category} className="max-w-6xl mx-auto" />
          </div>
        </div>
      </div>

      <ModernElegantFooter />
    </div>
  );
};

export default ProductDetailLuxury;