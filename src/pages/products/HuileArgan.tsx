import React from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Shield, Leaf, Award } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const HuileArgan = () => {
  const { language } = useLanguage();

  const seoContent = {
    fr: {
      title: "Huile d'Argan Bio Premium | Pressée à Froid | Perle de l'Atlas",
      description: "Huile d'argan 100% pure et bio des montagnes de l'Atlas. Pressée à froid, certifiée bio, produite par des coopératives féminines. Anti-âge et nourrissante.",
      keywords: [
        "huile d'argan bio",
        "huile d'argan pure",
        "huile argan anti age",
        "cosmétique naturel maroc",
        "soin visage bio",
        "huile pressée à froid",
        "coopérative féminine maroc",
        "beauté naturelle",
        "soin cheveux naturel"
      ]
    },
    en: {
      title: "Premium Organic Argan Oil | Cold Pressed | Perle de l'Atlas",
      description: "100% pure and organic argan oil from the Atlas Mountains. Cold pressed, certified organic, produced by women's cooperatives. Anti-aging and nourishing.",
      keywords: [
        "organic argan oil",
        "pure argan oil",
        "anti aging argan oil",
        "natural cosmetics morocco",
        "organic face care",
        "cold pressed oil",
        "women cooperative morocco",
        "natural beauty",
        "natural hair care"
      ]
    }
  };

  const productData = {
    fr: {
      name: "Huile d'Argan Bio Premium",
      shortDesc: "L'or liquide du Maroc pour une beauté naturelle",
      longDesc: "Notre huile d'argan premium est extraite des fruits de l'arganier centenaire, selon des méthodes traditionnelles transmises de génération en génération. Riche en vitamine E et en acides gras essentiels, elle nourrit intensément la peau et les cheveux.",
      benefits: [
        "Hydrate et nourrit en profondeur",
        "Action anti-âge prouvée",
        "Régénère les tissus cutanés",
        "Renforce et sublime les cheveux",
        "100% naturelle et bio"
      ],
      usage: "Appliquez quelques gouttes sur peau propre, matin et soir. Pour les cheveux, utilisez sur longueurs sèches.",
      origin: "Montagnes de l'Atlas, Maroc",
      certifications: ["Agriculture Biologique", "Commerce Équitable", "Pressée à Froid"]
    },
    en: {
      name: "Premium Organic Argan Oil",
      shortDesc: "Morocco's liquid gold for natural beauty",
      longDesc: "Our premium argan oil is extracted from century-old argan tree fruits, using traditional methods passed down through generations. Rich in vitamin E and essential fatty acids, it deeply nourishes skin and hair.",
      benefits: [
        "Deeply hydrates and nourishes",
        "Proven anti-aging action",
        "Regenerates skin tissue",
        "Strengthens and beautifies hair",
        "100% natural and organic"
      ],
      usage: "Apply a few drops to clean skin, morning and evening. For hair, use on dry lengths.",
      origin: "Atlas Mountains, Morocco",
      certifications: ["Organic Agriculture", "Fair Trade", "Cold Pressed"]
    }
  };

  const product = productData[language];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEOHead
        title={seoContent[language].title}
        description={seoContent[language].description}
        keywords={seoContent[language].keywords}
        type="product"
        schemaType="Product"
        productSchema={{
          name: product.name,
          price: "45.00",
          currency: "EUR",
          brand: "Perle de l'Atlas",
          description: product.longDesc,
          image: "/lovable-uploads/argan-oil-premium.jpg",
          availability: "InStock",
          category: "Beauty"
        }}
      />
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <nav className="text-sm text-stone-600">
            <Link to="/" className="hover:text-stone-800">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/boutique" className="hover:text-stone-800">Boutique</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-800">{product.name}</span>
          </nav>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/argan-oil-premium.jpg" 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square bg-stone-200 rounded overflow-hidden cursor-pointer hover:opacity-80">
                    <img 
                      src={`/lovable-uploads/argan-oil-premium-${i}.jpg`} 
                      alt={`${product.name} ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-800">
                  {language === 'fr' ? 'Bio Certifié' : 'Certified Organic'}
                </Badge>
                <h1 className="font-serif text-4xl font-light text-stone-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-stone-600 mb-6">
                  {product.shortDesc}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-stone-600">(127 avis)</span>
                </div>

                <div className="text-3xl font-bold text-stone-800 mb-8">
                  45,00 € <span className="text-lg font-normal text-stone-600">/ 50ml</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                {product.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-stone-100 px-3 py-2 rounded-lg">
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-stone-700">{cert}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1 bg-stone-800 hover:bg-stone-900">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {language === 'fr' ? 'Ajouter au Panier' : 'Add to Cart'}
                </Button>
                <Button size="lg" variant="outline" className="p-3">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">
                    {language === 'fr' ? 'Bienfaits' : 'Benefits'}
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Leaf className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-stone-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-medium text-stone-800 mb-6">
                  {language === 'fr' ? 'Description' : 'Description'}
                </h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  {product.longDesc}
                </p>
                
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">
                  {language === 'fr' ? 'Mode d\'emploi' : 'How to Use'}
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  {product.usage}
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                    <h3 className="font-medium text-stone-800">
                      {language === 'fr' ? 'Origine' : 'Origin'}
                    </h3>
                  </div>
                  <p className="text-stone-700">{product.origin}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-stone-800 mb-4">
                    {language === 'fr' ? 'Livraison' : 'Shipping'}
                  </h3>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p>• {language === 'fr' ? 'Livraison gratuite dès 149€' : 'Free shipping from €149'}</p>
                    <p>• {language === 'fr' ? 'Livraison 2-3 jours ouvrés' : '2-3 business days delivery'}</p>
                    <p>• {language === 'fr' ? 'Emballage soigné et durable' : 'Careful and sustainable packaging'}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default HuileArgan;