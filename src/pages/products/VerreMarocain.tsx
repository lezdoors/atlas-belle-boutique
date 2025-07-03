import React from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Shield, Sparkles, Award } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const VerreMarocain = () => {
  const { language } = useLanguage();

  const seoContent = {
    fr: {
      title: "Verre Marocain Soufflé à la Main | Art Verrier Traditionnel",
      description: "Verre marocain authentique soufflé à la main par des maîtres verriers. Collection unique de verres colorés, théières et objets décoratifs artisanaux.",
      keywords: [
        "verre marocain soufflé",
        "artisanat verre maroc",
        "verrier traditionnel",
        "décoration verre coloré",
        "art verrier marocain",
        "verre fait main",
        "théière marocaine verre",
        "objets décoratifs maroc",
        "verre artisanal"
      ]
    },
    en: {
      title: "Hand-Blown Moroccan Glass | Traditional Glassmaking Art",
      description: "Authentic Moroccan glass hand-blown by master glassmakers. Unique collection of colored glasses, teapots and handcrafted decorative objects.",
      keywords: [
        "moroccan blown glass",
        "morocco glass crafts",
        "traditional glassmaker",
        "colored glass decoration",
        "moroccan glass art",
        "handmade glass",
        "moroccan glass teapot",
        "moroccan decorative objects",
        "artisan glass"
      ]
    }
  };

  const productData = {
    fr: {
      name: "Verre Marocain Soufflé Collection",
      shortDesc: "L'art verrier marocain dans toute sa splendeur",
      longDesc: "Nos verres marocains sont soufflés à la main selon des techniques ancestrales transmises de génération en génération. Chaque pièce est unique, créée par des maîtres verriers dans les ateliers traditionnels de Marrakech et Fès.",
      benefits: [
        "Soufflé à la main par des maîtres artisans",
        "Chaque pièce est unique",
        "Techniques traditionnelles séculaires",
        "Résistant et durable",
        "Couleurs vibrantes et authentiques"
      ],
      usage: "Convient pour boissons chaudes et froides. Lavage à la main recommandé pour préserver l'éclat des couleurs.",
      origin: "Ateliers de Marrakech et Fès, Maroc",
      certifications: ["Fait Main", "Art Traditionnel", "Pièce Unique"]
    },
    en: {
      name: "Moroccan Blown Glass Collection",
      shortDesc: "Moroccan glassmaking art in all its splendor",
      longDesc: "Our Moroccan glasses are hand-blown using ancestral techniques passed down through generations. Each piece is unique, created by master glassmakers in traditional workshops in Marrakech and Fès.",
      benefits: [
        "Hand-blown by master artisans",
        "Each piece is unique",
        "Centuries-old traditional techniques",
        "Resistant and durable",
        "Vibrant and authentic colors"
      ],
      usage: "Suitable for hot and cold drinks. Hand washing recommended to preserve color brilliance.",
      origin: "Workshops of Marrakech and Fès, Morocco",
      certifications: ["Handmade", "Traditional Art", "Unique Piece"]
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
          price: "35.00",
          currency: "EUR",
          brand: "Perle de l'Atlas",
          description: product.longDesc,
          image: "/lovable-uploads/verre-marocain-souffle.jpg",
          availability: "InStock",
          category: "Home Decor"
        }}
      />
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <nav className="text-sm text-stone-600">
            <Link to="/" className="hover:text-stone-800">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/decor" className="hover:text-stone-800">Décoration</Link>
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
                  src="/lovable-uploads/verre-marocain-souffle.jpg" 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square bg-stone-200 rounded overflow-hidden cursor-pointer hover:opacity-80">
                    <img 
                      src={`/lovable-uploads/verre-marocain-${i}.jpg`} 
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
                <Badge className="mb-4 bg-blue-100 text-blue-800">
                  {language === 'fr' ? 'Art Verrier' : 'Glass Art'}
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
                  <span className="text-stone-600">(73 avis)</span>
                </div>

                <div className="text-3xl font-bold text-stone-800 mb-8">
                  35,00 € <span className="text-lg font-normal text-stone-600">/ set de 6</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                {product.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-stone-100 px-3 py-2 rounded-lg">
                    <Award className="h-4 w-4 text-blue-600" />
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
                    {language === 'fr' ? 'Caractéristiques' : 'Features'}
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Sparkles className="h-4 w-4 text-blue-600 flex-shrink-0" />
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
                  {language === 'fr' ? 'L\'Art du Soufflage' : 'The Art of Glassblowing'}
                </h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  {product.longDesc}
                </p>
                
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-4">
                  {language === 'fr' ? 'Entretien' : 'Care Instructions'}
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
                    <Shield className="h-6 w-6 text-blue-600" />
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
                    {language === 'fr' ? 'Couleurs Disponibles' : 'Available Colors'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow"></div>
                    <div className="w-6 h-6 bg-amber-500 rounded-full border-2 border-white shadow"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow"></div>
                    <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow"></div>
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

export default VerreMarocain;