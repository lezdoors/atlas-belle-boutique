import React from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Utensils, Coffee, Flame, Star, Heart, ShoppingCart } from 'lucide-react';

const Tableware = () => {
  const { language } = useLanguage();

  const collections = [
    {
      name: language === 'fr' ? 'Collection Tagine' : 'Tagine Collection',
      description: language === 'fr' 
        ? 'Authentiques tagines en terre cuite de Salé, parfaits pour des plats mijotés savoureux.'
        : 'Authentic terracotta tagines from Salé, perfect for flavorful slow-cooked dishes.',
      items: [
        {
          name: language === 'fr' ? 'Tagine Royal 30cm' : 'Royal Tagine 30cm',
          price: 'MAD 450',
          image: '/lovable-uploads/royal-tagine.jpg',
          features: language === 'fr' ? ['Terre cuite authentique', 'Motifs berbères', 'Cuisson lente'] : ['Authentic terracotta', 'Berber motifs', 'Slow cooking']
        },
        {
          name: language === 'fr' ? 'Tagine Familial 35cm' : 'Family Tagine 35cm',
          price: 'MAD 520',
          image: '/lovable-uploads/family-tagine.jpg',
          features: language === 'fr' ? ['Grande capacité', 'Finition artisanale', 'Usage quotidien'] : ['Large capacity', 'Artisan finish', 'Daily use']
        }
      ]
    },
    {
      name: language === 'fr' ? 'Art du Thé' : 'Tea Art',
      description: language === 'fr'
        ? 'Redécouvrez le rituel du thé marocain avec nos services authentiques en métal argenté.'
        : 'Rediscover the Moroccan tea ritual with our authentic silver-plated services.',
      items: [
        {
          name: language === 'fr' ? 'Service à Thé Fassi' : 'Fassi Tea Service',
          price: 'MAD 890',
          image: '/lovable-uploads/tea-service.jpg',
          features: language === 'fr' ? ['6 verres gravés', 'Plateau ciselé', 'Théière traditionnelle'] : ['6 engraved glasses', 'Chiseled tray', 'Traditional teapot']
        },
        {
          name: language === 'fr' ? 'Verres à Thé Dorés' : 'Golden Tea Glasses',
          price: 'MAD 180',
          image: '/lovable-uploads/golden-glasses.jpg',
          features: language === 'fr' ? ['Set de 6 verres', 'Dorure artisanale', 'Résistant à la chaleur'] : ['Set of 6 glasses', 'Artisan gilding', 'Heat resistant']
        }
      ]
    },
    {
      name: language === 'fr' ? 'Céramique de Fès' : 'Fès Ceramics',
      description: language === 'fr'
        ? 'Vaisselle en céramique émaillée aux motifs géométriques traditionnels de Fès.'
        : 'Glazed ceramic tableware with traditional geometric patterns from Fès.',
      items: [
        {
          name: language === 'fr' ? 'Assiettes Zellige' : 'Zellige Plates',
          price: 'MAD 320',
          image: '/lovable-uploads/zellige-plates.jpg',
          features: language === 'fr' ? ['Set de 6 assiettes', 'Motifs zellige', 'Fabrication manuelle'] : ['Set of 6 plates', 'Zellige patterns', 'Handmade']
        },
        {
          name: language === 'fr' ? 'Bols à Couscous' : 'Couscous Bowls',
          price: 'MAD 420',
          image: '/lovable-uploads/couscous-bowls.jpg',
          features: language === 'fr' ? ['Céramique émaillée', 'Forme traditionnelle', 'Facile d\'entretien'] : ['Glazed ceramic', 'Traditional shape', 'Easy maintenance']
        }
      ]
    }
  ];

  const features = [
    {
      icon: <Utensils className="h-6 w-6" />,
      title: language === 'fr' ? 'Fait Main' : 'Handmade',
      description: language === 'fr' ? 'Chaque pièce est unique, façonnée par des artisans experts' : 'Each piece is unique, shaped by expert artisans'
    },
    {
      icon: <Flame className="h-6 w-6" />,
      title: language === 'fr' ? 'Cuisson Traditionnelle' : 'Traditional Firing',
      description: language === 'fr' ? 'Méthodes ancestrales de cuisson au four en terre' : 'Ancestral methods of earth oven firing'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: language === 'fr' ? 'Usage Quotidien' : 'Daily Use',
      description: language === 'fr' ? 'Résistant et fonctionnel pour un usage régulier' : 'Durable and functional for regular use'
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
                {language === 'fr' ? 'Art de la Table' : 'Tableware'}
              </Badge>
              <h1 className="font-serif text-5xl md:text-6xl font-light text-stone-800 mb-6">
                {language === 'fr' ? 'L\'Art de Recevoir' : 'The Art of Hospitality'}
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
                {language === 'fr'
                  ? 'Transformez chaque repas en célébration avec notre collection de vaisselle artisanale marocaine.'
                  : 'Transform every meal into a celebration with our collection of Moroccan artisan tableware.'
                }
              </p>
              <Button size="lg" className="bg-stone-800 hover:bg-stone-900 text-white">
                {language === 'fr' ? 'Découvrir la Collection' : 'Discover Collection'}
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-stone-100 rounded-full mx-auto mb-4">
                    <div className="text-stone-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        {collections.map((collection, collectionIndex) => (
          <section key={collectionIndex} className={`py-16 ${collectionIndex % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}>
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="font-serif text-3xl font-light text-stone-800 mb-4">
                  {collection.name}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {collection.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {collection.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden hover:shadow-luxury transition-all duration-300 group">
                    <div className="relative h-64 bg-stone-200">
                      <Badge className="absolute top-4 left-4 z-10 bg-white/90 text-stone-800">
                        {language === 'fr' ? 'Artisanal' : 'Handcrafted'}
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

        {/* CTA Section */}
        <section className="py-20 bg-stone-800">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Star className="h-12 w-12 text-white mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-light text-white mb-4">
                {language === 'fr' ? 'Créez Votre Service Personnalisé' : 'Create Your Custom Service'}
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                {language === 'fr'
                  ? 'Nos artisans peuvent créer des pièces uniques selon vos souhaits. Contactez-nous pour un service sur mesure.'
                  : 'Our artisans can create unique pieces according to your wishes. Contact us for a custom service.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-stone-800">
                  {language === 'fr' ? 'Demander un Devis' : 'Request Quote'}
                </Button>
                <Link to="/catalogue">
                  <Button className="bg-white text-stone-800 hover:bg-stone-100">
                    {language === 'fr' ? 'Voir Tout le Catalogue' : 'View Full Catalog'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default Tableware;