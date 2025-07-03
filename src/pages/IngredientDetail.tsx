
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraEnhancedChatbot from '@/components/SamraEnhancedChatbot';
import FloatingCart from '@/components/FloatingCart';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { MapPin, Award, Leaf, Star, Users, Calendar, ArrowRight } from 'lucide-react';

const IngredientDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  // Mock data - in a real app, this would come from an API based on the ID
  const ingredient = {
    id: 'argan-oil',
    name: language === 'fr' ? 'Huile d\'Argan' : 'Argan Oil',
    scientificName: 'Argania spinosa',
    origin: language === 'fr' ? 'Sud-Ouest du Maroc' : 'Southwest Morocco',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
    description: language === 'fr'
      ? 'L\'huile d\'argan, surnommée "l\'or liquide du Maroc", est extraite des noix de l\'arganier, un arbre endémique du sud-ouest marocain. Utilisée depuis des siècles par les femmes berbères, elle est reconnue pour ses propriétés nourrissantes et régénérantes exceptionnelles.'
      : 'Argan oil, nicknamed "liquid gold of Morocco", is extracted from the nuts of the argan tree, an endemic tree of southwestern Morocco. Used for centuries by Berber women, it is recognized for its exceptional nourishing and regenerating properties.',
    benefits: [
      {
        name: language === 'fr' ? 'Hydratation Profonde' : 'Deep Hydration',
        description: language === 'fr' ? 'Nourrit en profondeur grâce aux acides gras essentiels' : 'Deeply nourishes with essential fatty acids',
        percentage: 95
      },
      {
        name: language === 'fr' ? 'Anti-âge' : 'Anti-aging',
        description: language === 'fr' ? 'Riche en vitamine E et antioxydants' : 'Rich in vitamin E and antioxidants',
        percentage: 90
      },
      {
        name: language === 'fr' ? 'Réparation' : 'Repair',
        description: language === 'fr' ? 'Restaure la barrière cutanée naturelle' : 'Restores natural skin barrier',
        percentage: 88
      },
      {
        name: language === 'fr' ? 'Protection' : 'Protection',
        description: language === 'fr' ? 'Protège contre les agressions extérieures' : 'Protects against external aggressions',
        percentage: 85
      }
    ],
    composition: [
      { component: language === 'fr' ? 'Acide oléique' : 'Oleic acid', percentage: 45 },
      { component: language === 'fr' ? 'Acide linoléique' : 'Linoleic acid', percentage: 35 },
      { component: language === 'fr' ? 'Vitamine E' : 'Vitamin E', percentage: 15 },
      { component: language === 'fr' ? 'Autres composés' : 'Other compounds', percentage: 5 }
    ],
    certifications: [
      { name: 'Bio EU', icon: Leaf },
      { name: 'Fair Trade', icon: Users },
      { name: 'USDA Organic', icon: Award }
    ],
    harvestingProcess: [
      {
        step: 1,
        title: language === 'fr' ? 'Récolte' : 'Harvest',
        description: language === 'fr' ? 'Collecte manuelle des fruits d\'argan mûrs' : 'Manual collection of ripe argan fruits'
      },
      {
        step: 2,
        title: language === 'fr' ? 'Séchage' : 'Drying',
        description: language === 'fr' ? 'Séchage naturel au soleil pendant plusieurs semaines' : 'Natural sun drying for several weeks'
      },
      {
        step: 3,
        title: language === 'fr' ? 'Concassage' : 'Cracking',
        description: language === 'fr' ? 'Ouverture des noyaux à la main pour extraire les amandons' : 'Hand cracking of kernels to extract almonds'
      },
      {
        step: 4,
        title: language === 'fr' ? 'Pressage' : 'Pressing',
        description: language === 'fr' ? 'Extraction à froid pour préserver toutes les propriétés' : 'Cold extraction to preserve all properties'
      }
    ],
    testimonials: [
      {
        name: 'Sophie L.',
        rating: 5,
        comment: language === 'fr'
          ? 'Une huile exceptionnelle qui a transformé ma peau. Plus douce, plus éclatante !'
          : 'An exceptional oil that transformed my skin. Softer, more radiant!'
      },
      {
        name: 'Maria G.',
        rating: 5,
        comment: language === 'fr'
          ? 'J\'utilise cette huile depuis 6 mois, résultats visibles dès les premières applications.'
          : 'I\'ve been using this oil for 6 months, visible results from the first applications.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-pearl-50">
      <MaisonStyleHeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="rounded-2xl luxury-shadow w-full"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-copper-600 text-white">
                    {language === 'fr' ? 'Ingrédient Premium' : 'Premium Ingredient'}
                  </Badge>
                </div>
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-clay-800 mb-4">
                  {ingredient.name}
                </h1>
                <p className="text-lg text-clay-600 font-serif mb-6 italic">
                  {ingredient.scientificName}
                </p>
                <div className="flex items-center text-clay-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{ingredient.origin}</span>
                </div>
                <p className="text-clay-700 font-serif text-lg leading-relaxed mb-8">
                  {ingredient.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {ingredient.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full luxury-shadow">
                      <cert.icon className="h-4 w-4 text-copper-600 mr-2" />
                      <span className="text-sm font-medium">{cert.name}</span>
                    </div>
                  ))}
                </div>
                <Button className="copper-gradient text-white">
                  {language === 'fr' ? 'Voir les Produits' : 'View Products'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 text-center mb-16">
              {language === 'fr' ? 'Bienfaits Prouvés' : 'Proven Benefits'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ingredient.benefits.map((benefit, index) => (
                <Card key={index} className="border-0 luxury-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-lg text-clay-800">{benefit.name}</h3>
                      <span className="text-copper-600 font-bold">{benefit.percentage}%</span>
                    </div>
                    <Progress value={benefit.percentage} className="mb-3" />
                    <p className="text-clay-600 font-serif">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Composition */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 mb-8">
                  {language === 'fr' ? 'Composition Naturelle' : 'Natural Composition'}
                </h2>
                <div className="space-y-4">
                  {ingredient.composition.map((comp, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-clay-700">{comp.component}</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-pearl-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-copper-600 h-2 rounded-full"
                            style={{ width: `${comp.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-copper-600 font-bold">{comp.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
                  alt="Composition analysis"
                  className="rounded-2xl luxury-shadow w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Harvesting Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 text-center mb-16">
              {language === 'fr' ? 'Processus de Récolte Traditionnel' : 'Traditional Harvesting Process'}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {ingredient.harvestingProcess.map((process, index) => (
                <Card key={index} className="border-0 luxury-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-copper-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-copper-600">{process.step}</span>
                    </div>
                    <h3 className="font-bold text-lg text-clay-800 mb-3">{process.title}</h3>
                    <p className="text-clay-600 font-serif text-sm">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 text-center mb-16">
              {language === 'fr' ? 'Témoignages Clients' : 'Customer Testimonials'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ingredient.testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 luxury-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 font-medium text-clay-700">{testimonial.name}</span>
                    </div>
                    <p className="text-clay-600 font-serif italic">{testimonial.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-copper-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-clay-800 mb-4">
              {language === 'fr' ? 'Découvrez Nos Produits à l\'Huile d\'Argan' : 'Discover Our Argan Oil Products'}
            </h2>
            <p className="text-clay-600 font-serif mb-8">
              {language === 'fr'
                ? 'Explorez notre gamme complète de produits enrichis à l\'huile d\'argan premium.'
                : 'Explore our complete range of products enriched with premium argan oil.'
              }
            </p>
            <Button className="copper-gradient text-white">
              {language === 'fr' ? 'Voir la Collection' : 'View Collection'}
            </Button>
          </div>
        </section>
      </main>
      
      <ModernElegantFooter />
      <SamraEnhancedChatbot />
      <FloatingCart />
      <BackToTop />
    </div>
  );
};

export default IngredientDetail;
