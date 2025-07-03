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

const Ghassoul = () => {
  const { language } = useLanguage();

  const seoContent = {
    fr: {
      title: "Ghassoul Argile Rouge du Maroc | Masque Purifiant Naturel",
      description: "Argile ghassoul pure des montagnes de l'Atlas. Masque visage et cheveux naturel, purifie, nettoie et absorbe l'excès de sébum. Terre volcanique marocaine.",
      keywords: [
        "ghassoul maroc",
        "argile rouge naturelle",
        "masque argile visage",
        "soin cheveux naturel",
        "terre volcanique",
        "masque purifiant",
        "argile atlas",
        "cosmétique minéral",
        "beauté naturelle maroc"
      ]
    },
    en: {
      title: "Ghassoul Red Clay from Morocco | Natural Purifying Mask",
      description: "Pure ghassoul clay from the Atlas Mountains. Natural face and hair mask, purifies, cleanses and absorbs excess sebum. Moroccan volcanic earth.",
      keywords: [
        "ghassoul morocco",
        "natural red clay",
        "clay face mask",
        "natural hair care",
        "volcanic earth",
        "purifying mask",
        "atlas clay",
        "mineral cosmetics",
        "natural beauty morocco"
      ]
    }
  };

  const productData = {
    fr: {
      name: "Ghassoul Argile Rouge Premium",
      shortDesc: "L'argile miracle des montagnes de l'Atlas",
      longDesc: "Notre ghassoul est une argile volcanique naturelle extraite des montagnes de l'Atlas. Riche en minéraux, cette terre rouge millénaire purifie et régénère la peau tout en absorbant l'excès de sébum sans dessécher.",
      benefits: [
        "Purifie et détoxifie la peau",
        "Absorbe l'excès de sébum",
        "Nettoie les cheveux naturellement",
        "Resserre les pores",
        "Riche en minéraux essentiels"
      ],
      usage: "Mélangez avec de l'eau ou de l'eau de rose pour former une pâte. Appliquez en masque 10-15 minutes puis rincez.",
      origin: "Montagnes de l'Atlas, Maroc",
      certifications: ["100% Naturel", "Non Traité", "Extraction Traditionnelle"]
    },
    en: {
      name: "Premium Red Ghassoul Clay",
      shortDesc: "The miracle clay from the Atlas Mountains",
      longDesc: "Our ghassoul is a natural volcanic clay extracted from the Atlas Mountains. Rich in minerals, this thousand-year-old red earth purifies and regenerates the skin while absorbing excess sebum without drying.",
      benefits: [
        "Purifies and detoxifies skin",
        "Absorbs excess sebum",
        "Naturally cleanses hair",
        "Tightens pores",
        "Rich in essential minerals"
      ],
      usage: "Mix with water or rose water to form a paste. Apply as a mask for 10-15 minutes then rinse.",
      origin: "Atlas Mountains, Morocco",
      certifications: ["100% Natural", "Untreated", "Traditional Extraction"]
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
          price: "22.00",
          currency: "EUR",
          brand: "Perle de l'Atlas",
          description: product.longDesc,
          image: "/lovable-uploads/ghassoul-clay.jpg",
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
                  src="/lovable-uploads/ghassoul-clay.jpg" 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square bg-stone-200 rounded overflow-hidden cursor-pointer hover:opacity-80">
                    <img 
                      src={`/lovable-uploads/ghassoul-${i}.jpg`} 
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
                <Badge className="mb-4 bg-red-100 text-red-800">
                  {language === 'fr' ? 'Terre Volcanique' : 'Volcanic Earth'}
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
                  <span className="text-stone-600">(156 avis)</span>
                </div>

                <div className="text-3xl font-bold text-stone-800 mb-8">
                  22,00 € <span className="text-lg font-normal text-stone-600">/ 250g</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                {product.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-stone-100 px-3 py-2 rounded-lg">
                    <Award className="h-4 w-4 text-red-600" />
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
                  {language === 'fr' ? 'L\'Argile des Berbères' : 'The Berber Clay'}
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
                    <Shield className="h-6 w-6 text-red-600" />
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
                    {language === 'fr' ? 'Composition' : 'Composition'}
                  </h3>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p>• {language === 'fr' ? 'Silice (58%)' : 'Silica (58%)'}</p>
                    <p>• {language === 'fr' ? 'Magnésium (25%)' : 'Magnesium (25%)'}</p>
                    <p>• {language === 'fr' ? 'Potassium (3%)' : 'Potassium (3%)'}</p>
                    <p>• {language === 'fr' ? 'Oligo-éléments' : 'Trace elements'}</p>
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

export default Ghassoul;