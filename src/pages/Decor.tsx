import React from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Lightbulb, Palette, Heart, ShoppingCart, Sparkles } from 'lucide-react';

const Decor = () => {
  const { language } = useLanguage();

  const categories = [
    {
      name: language === 'fr' ? 'Éclairage' : 'Lighting',
      icon: <Lightbulb className="h-6 w-6" />,
      description: language === 'fr' 
        ? 'Lanternes en laiton et luminaires traditionnels pour une ambiance chaleureuse.'
        : 'Brass lanterns and traditional lighting for a warm atmosphere.',
      items: [
        {
          name: language === 'fr' ? 'Lanterne Marrakech' : 'Marrakech Lantern',
          price: 'MAD 680',
          image: '/lovable-uploads/marrakech-lantern.jpg',
          features: language === 'fr' ? ['Laiton ciselé', 'Verre coloré', 'Fait main'] : ['Chiseled brass', 'Colored glass', 'Handmade']
        },
        {
          name: language === 'fr' ? 'Applique Orientale' : 'Oriental Wall Light',
          price: 'MAD 420',
          image: '/lovable-uploads/wall-light.jpg',
          features: language === 'fr' ? ['Métal patiné', 'Motifs géométriques', 'LED compatible'] : ['Patinated metal', 'Geometric patterns', 'LED compatible']
        }
      ]
    },
    {
      name: language === 'fr' ? 'Tapis & Textiles' : 'Rugs & Textiles',
      icon: <Palette className="h-6 w-6" />,
      description: language === 'fr'
        ? 'Tapis berbères authentiques et coussins brodés à la main.'
        : 'Authentic Berber rugs and hand-embroidered cushions.',
      items: [
        {
          name: language === 'fr' ? 'Tapis Beni Ouarain' : 'Beni Ouarain Rug',
          price: 'MAD 2,200',
          image: '/lovable-uploads/beni-ouarain.jpg',
          features: language === 'fr' ? ['Laine pure', '200x300cm', 'Motifs berbères'] : ['Pure wool', '200x300cm', 'Berber patterns']
        },
        {
          name: language === 'fr' ? 'Coussins Brodés' : 'Embroidered Cushions',
          price: 'MAD 280',
          image: '/lovable-uploads/embroidered-cushions.jpg',
          features: language === 'fr' ? ['Set de 4', 'Soie et coton', 'Broderie main'] : ['Set of 4', 'Silk and cotton', 'Hand embroidery']
        }
      ]
    },
    {
      name: language === 'fr' ? 'Objets d\'Art' : 'Art Objects',
      icon: <Sparkles className="h-6 w-6" />,
      description: language === 'fr'
        ? 'Sculptures, vases et objets décoratifs créés par des maîtres artisans.'
        : 'Sculptures, vases and decorative objects created by master artisans.',
      items: [
        {
          name: language === 'fr' ? 'Vase Zellige' : 'Zellige Vase',
          price: 'MAD 450',
          image: '/lovable-uploads/zellige-vase.jpg',
          features: language === 'fr' ? ['Céramique émaillée', 'Forme unique', 'Fès traditionnel'] : ['Glazed ceramic', 'Unique shape', 'Traditional Fez']
        },
        {
          name: language === 'fr' ? 'Miroir Soleil' : 'Sun Mirror',
          price: 'MAD 890',
          image: '/lovable-uploads/sun-mirror.jpg',
          features: language === 'fr' ? ['Métal doré', 'Diamètre 80cm', 'Design contemporain'] : ['Golden metal', '80cm diameter', 'Contemporary design']
        }
      ]
    }
  ];

  const inspirations = [
    {
      title: language === 'fr' ? 'Salon Marocain Moderne' : 'Modern Moroccan Living Room',
      description: language === 'fr' 
        ? 'Alliez tradition et modernité avec des pièces choisies qui transforment votre espace.'
        : 'Combine tradition and modernity with carefully chosen pieces that transform your space.',
      image: '/lovable-uploads/modern-moroccan-living.jpg'
    },
    {
      title: language === 'fr' ? 'Chambre Orientale' : 'Oriental Bedroom',
      description: language === 'fr'
        ? 'Créez un havre de paix avec nos textiles et éclairages inspirés du Maroc.'
        : 'Create a haven of peace with our textiles and lighting inspired by Morocco.',
      image: '/lovable-uploads/oriental-bedroom.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-stone-800 text-white">
                {language === 'fr' ? 'Décoration' : 'Home Décor'}
              </Badge>
              <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-800 mb-6">
                {language === 'fr' ? 'Votre Maison, Votre Riad' : 'Your Home, Your Riad'}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
                {language === 'fr'
                  ? 'Transformez votre intérieur avec l\'élégance intemporelle de l\'artisanat marocain.'
                  : 'Transform your interior with the timeless elegance of Moroccan craftsmanship.'
                }
              </p>
              <Button size="lg" className="bg-stone-800 hover:bg-stone-900 text-white">
                {language === 'fr' ? 'Explorer les Collections' : 'Explore Collections'}
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-stone-800 rounded-full mx-auto mb-4">
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h2 className="font-serif text-3xl font-light text-stone-800 mb-4">
                  {category.name}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden hover:shadow-luxury transition-all duration-300 group">
                    <div className="relative h-64 bg-stone-200">
                      <Badge className="absolute top-4 left-4 z-10 bg-white/90 text-stone-800">
                        {language === 'fr' ? 'Authentique' : 'Authentic'}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-medium text-stone-800 mb-3">
                        {item.name}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-stone-800">
                          {item.price}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="p-2">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-stone-800 hover:bg-stone-900">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            {language === 'fr' ? 'Ajouter' : 'Add'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Inspiration Section */}
        <section className="py-20 bg-stone-800">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl font-light text-white mb-4">
                {language === 'fr' ? 'Inspirations Déco' : 'Décor Inspirations'}
              </h2>
              <p className="text-stone-300 leading-relaxed">
                {language === 'fr'
                  ? 'Découvrez comment intégrer l\'art marocain dans votre intérieur moderne.'
                  : 'Discover how to integrate Moroccan art into your modern interior.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {inspirations.map((inspiration, index) => (
                <Card key={index} className="bg-white/10 border-white/20 overflow-hidden">
                  <div className="h-48 bg-stone-700"></div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium text-white mb-3">
                      {inspiration.title}
                    </h3>
                    <p className="text-stone-300 leading-relaxed">
                      {inspiration.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-stone-800">
                {language === 'fr' ? 'Voir Plus d\'Inspirations' : 'See More Inspirations'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Decor;