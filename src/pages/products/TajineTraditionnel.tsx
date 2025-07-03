import React from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Shield, Flame, Award } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const TajineTraditionnel = () => {
  const { language } = useLanguage();

  const seoContent = {
    fr: {
      title: "Tajine Traditionnel en Terre Cuite | Cuisson Authentique Marocaine",
      description: "Tajine marocain authentique en terre cuite de Salé. Cuisson traditionnelle, fait main par des potiers experts. Parfait pour mijotés savoureux et plats marocains.",
      keywords: [
        "tajine traditionnel maroc",
        "tajine terre cuite",
        "ustensile cuisine marocaine",
        "plat tajine authentique",
        "poterie marocaine",
        "cuisson traditionnelle",
        "artisanat culinaire",
        "vaisselle berbère",
        "art culinaire maroc"
      ]
    },
    en: {
      title: "Traditional Terracotta Tagine | Authentic Moroccan Cooking",
      description: "Authentic Moroccan tagine in terracotta from Salé. Traditional cooking, handmade by expert potters. Perfect for flavorful stews and Moroccan dishes.",
      keywords: [
        "traditional moroccan tagine",
        "terracotta tagine",
        "moroccan cookware",
        "authentic tagine dish",
        "moroccan pottery",
        "traditional cooking",
        "culinary crafts",
        "berber tableware",
        "moroccan culinary art"
      ]
    }
  };

  const productData = {
    fr: {
      name: "Tajine Traditionnel en Terre Cuite",
      shortDesc: "L'ustensile emblématique de la cuisine marocaine",
      longDesc: "Notre tajine traditionnel est façonné à la main dans les ateliers de potiers de Salé, selon des techniques ancestrales. La terre cuite poreuse permet une cuisson douce et uniforme, concentrant les saveurs et préservant les arômes.",
      benefits: [
        "Cuisson douce et uniforme",
        "Concentre les saveurs naturellement",
        "Terre cuite poreuse de qualité",
        "Résistant aux variations de température",
        "Fait main par des artisans experts"
      ],
      usage: "Trempez 20 minutes dans l'eau avant première utilisation. Cuisson à feu doux recommandée. Compatible tous feux sauf induction.",
      origin: "Ateliers de Salé, Maroc",
      certifications: ["Terre Cuite Authentique", "Fait Main", "Tradition Potière"]
    },
    en: {
      name: "Traditional Terracotta Tagine",
      shortDesc: "The emblematic utensil of Moroccan cuisine",
      longDesc: "Our traditional tagine is handcrafted in the pottery workshops of Salé, using ancestral techniques. The porous terracotta allows gentle and uniform cooking, concentrating flavors and preserving aromas.",
      benefits: [
        "Gentle and uniform cooking",
        "Naturally concentrates flavors",
        "Quality porous terracotta",
        "Resistant to temperature variations",
        "Handmade by expert artisans"
      ],
      usage: "Soak for 20 minutes in water before first use. Low heat cooking recommended. Compatible with all heat sources except induction.",
      origin: "Salé Workshops, Morocco",
      certifications: ["Authentic Terracotta", "Handmade", "Pottery Tradition"]
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
          price: "65.00",
          currency: "EUR",
          brand: "Perle de l'Atlas",
          description: product.longDesc,
          image: "/lovable-uploads/tajine-traditionnel.jpg",
          availability: "InStock",
          category: "Tableware"
        }}
      />
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <nav className="text-sm text-stone-600">
            <Link to="/" className="hover:text-stone-800">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/tableware" className="hover:text-stone-800">Vaisselle</Link>
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
                  src="/lovable-uploads/tajine-traditionnel.jpg" 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square bg-stone-200 rounded overflow-hidden cursor-pointer hover:opacity-80">
                    <img 
                      src={`/lovable-uploads/tajine-${i}.jpg`} 
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
                <Badge className="mb-4 bg-orange-100 text-orange-800">
                  {language === 'fr' ? 'Artisanat Culinaire' : 'Culinary Craft'}
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
                  <span className="text-stone-600">(94 avis)</span>
                </div>

                <div className="text-3xl font-bold text-stone-800 mb-8">
                  65,00 € <span className="text-lg font-normal text-stone-600">/ 30cm</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                {product.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-stone-100 px-3 py-2 rounded-lg">
                    <Award className="h-4 w-4 text-orange-600" />
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
                    {language === 'fr' ? 'Avantages' : 'Advantages'}
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Flame className="h-4 w-4 text-orange-600 flex-shrink-0" />
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
                  {language === 'fr' ? 'L\'Art de la Poterie' : 'The Art of Pottery'}
                </h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  {product.longDesc}
                </p>
                
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">
                  {language === 'fr' ? 'Utilisation' : 'Usage'}
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
                    <Shield className="h-6 w-6 text-orange-600" />
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
                    {language === 'fr' ? 'Tailles Disponibles' : 'Available Sizes'}
                  </h3>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p>• 25cm - {language === 'fr' ? '2-3 personnes' : '2-3 people'}</p>
                    <p>• 30cm - {language === 'fr' ? '4-6 personnes' : '4-6 people'}</p>
                    <p>• 35cm - {language === 'fr' ? '6-8 personnes' : '6-8 people'}</p>
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

export default TajineTraditionnel;