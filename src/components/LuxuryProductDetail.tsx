import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Shield, Truck, Gift, ZoomIn, MapPin, Users, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type Product = Tables<'products'>;

const LuxuryProductDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct(id);
      fetchRelatedProducts();
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
      toast({
        title: "Error",
        description: "Failed to load product",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .limit(4);

      if (error) throw error;
      setRelatedProducts(data || []);
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;

    const cartProduct = {
      id: product.id,
      name_fr: product.name_fr,
      name_en: product.name_en,
      description: productDescription || '',
      price: product.price_eur,
      images: productImages,
      category: product.category as 'tagines' | 'tea-glasses' | 'bowls' | 'accessories',
      in_stock: (product.stock_quantity || 0) > 0,
      created_at: product.created_at || ''
    };

    try {
      await addToCart(cartProduct, quantity);
      toast({
        title: language === 'fr' ? "Ajouté au panier" : "Added to cart",
        description: language === 'fr' 
          ? `${quantity} ${product.name_fr} ajouté(s) au panier`
          : `${quantity} ${product.name_en} added to cart`
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add to cart",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">
          {language === 'fr' ? 'Produit non trouvé' : 'Product not found'}
        </h2>
        <Link to="/boutique">
          <Button variant="outline">
            {language === 'fr' ? 'Retour à la boutique' : 'Back to shop'}
          </Button>
        </Link>
      </div>
    );
  }

  const productImages = product.images as string[] || [];
  const stockLevel = product.stock_quantity || 0;
  const isLowStock = stockLevel <= 8;
  const productName = language === 'fr' ? product.name_fr : product.name_en;
  const productDescription = language === 'fr' ? product.description_fr : product.description_en;
  const price = language === 'fr' ? `${product.price_eur}€` : `$${product.price_usd}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <span>/</span>
          <Link to="/boutique" className="hover:text-primary transition-colors">
            {language === 'fr' ? 'Boutique' : 'Shop'}
          </Link>
          <span>/</span>
          <span className="text-foreground">{productName}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group">
              <div 
                className="aspect-square rounded-2xl overflow-hidden bg-muted cursor-zoom-in relative"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={productImages[selectedImage] || '/placeholder.svg'}
                  alt={productName}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              {/* Stock Badge */}
              {isLowStock && (
                <Badge variant="destructive" className="absolute top-4 left-4 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {language === 'fr' 
                    ? `Plus que ${stockLevel} en stock` 
                    : `Only ${stockLevel} remaining`
                  }
                </Badge>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {productImages.length > 1 && (
              <div className="flex space-x-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-primary shadow-lg' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productName} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            
            {/* Origin Story */}
            {product.origin_region && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  {language === 'fr' ? 'Fait à la main à' : 'Handcrafted in'} 
                </span>
                <span className="font-medium text-primary">{product.origin_region}</span>
              </div>
            )}

            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{productName}</h1>
              <p className="text-xl text-muted-foreground mb-4">{productDescription}</p>
              
              {/* Price and Authenticity */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-primary">{price}</span>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {language === 'fr' ? 'Authentique' : 'Authentic'}
                </Badge>
              </div>
            </div>

            {/* Emotional Storytelling */}
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'fr' 
                        ? 'Une pièce qui raconte une histoire' 
                        : 'A piece that tells a story'
                      }
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'fr'
                        ? 'Chaque pièce est créée par des artisans marocains utilisant des techniques transmises de génération en génération. En achetant cette pièce, vous soutenez directement leur savoir-faire ancestral.'
                        : 'Each piece is crafted by Moroccan artisans using techniques passed down through generations. By purchasing this piece, you directly support their ancestral craftsmanship.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cooperative Details */}
            {product.cooperative_region && (
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-medium">
                      {language === 'fr' ? 'Coopérative de' : 'Cooperative from'} {product.cooperative_region}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr'
                      ? 'Votre achat soutient directement les familles d\'artisans locaux'
                      : 'Your purchase directly supports local artisan families'
                    }
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">
                  {language === 'fr' ? 'Quantité:' : 'Quantity:'}
                </span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={handleAddToCart}
                  className="h-12 text-base font-semibold"
                  size="lg"
                >
                  {language === 'fr' ? 'Ajouter au panier' : 'Add to cart'}
                </Button>
                <Button variant="outline" size="lg" className="h-12">
                  <Heart className="w-4 h-4 mr-2" />
                  {language === 'fr' ? 'Favoris' : 'Wishlist'}
                </Button>
              </div>
            </div>

            {/* Premium Features */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Truck className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">
                    {language === 'fr' ? 'Livraison premium' : 'Premium shipping'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'fr' ? 'Livraison gratuite dès 100€' : 'Free shipping over $100'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Gift className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">
                    {language === 'fr' ? 'Emballage cadeau' : 'Gift wrapping'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'fr' ? 'Emballage luxe disponible' : 'Luxury packaging available'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">
                    {language === 'fr' ? 'Garantie authenticité' : 'Authenticity guarantee'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'fr' ? 'Certificat d\'authenticité inclus' : 'Certificate of authenticity included'}
                  </p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              {language === 'fr' ? 'Partager ce produit' : 'Share this product'}
            </Button>
          </div>
        </div>

        {/* Artisan Story Section */}
        {product.artisan_story && (
          <section className="mb-16">
            <Separator className="mb-8" />
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                {language === 'fr' ? 'L\'histoire de l\'artisan' : 'The Artisan\'s Story'}
              </h2>
              <Card className="p-8">
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.artisan_story}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Care Instructions */}
        {product.care_instructions && (
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                {language === 'fr' ? 'Guide d\'entretien premium' : 'Premium Care Guide'}
              </h2>
              <Card className="p-8 border-primary/20">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-3">
                        {language === 'fr' 
                          ? 'Préservez la beauté de votre pièce' 
                          : 'Preserve the beauty of your piece'
                        }
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {product.care_instructions}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <Separator className="mb-8" />
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                {language === 'fr' ? 'Complétez votre collection' : 'Complete your collection'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.slice(0, 4).map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/produit/${relatedProduct.id}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={(relatedProduct.images as string[])?.[0] || '/placeholder.svg'}
                          alt={language === 'fr' ? relatedProduct.name_fr : relatedProduct.name_en}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                          {language === 'fr' ? relatedProduct.name_fr : relatedProduct.name_en}
                        </h3>
                        <p className="text-primary font-bold">
                          {language === 'fr' ? `${relatedProduct.price_eur}€` : `$${relatedProduct.price_usd}`}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default LuxuryProductDetail;