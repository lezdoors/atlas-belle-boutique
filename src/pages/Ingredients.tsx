import { useState } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Leaf, Heart, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Ingredients = () => {
  const { language } = useLanguage();

  const ingredients = [
    {
      id: 1,
      name: language === 'fr' ? 'Huile d\'Argan' : 'Argan Oil',
      scientificName: 'Argania Spinosa',
      region: 'Atlas',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      description: language === 'fr'
        ? 'Extraite des noyaux de l\'arganier, cette huile précieuse est riche en vitamine E et en acides gras essentiels.'
        : 'Extracted from argan tree kernels, this precious oil is rich in vitamin E and essential fatty acids.',
      benefits: language === 'fr'
        ? ['Hydratation intense', 'Anti-âge naturel', 'Protection antioxydante', 'Réparation cellulaire']
        : ['Intense hydration', 'Natural anti-aging', 'Antioxidant protection', 'Cellular repair'],
      skinTypes: language === 'fr'
        ? ['Tous types de peau', 'Peau sèche', 'Peau mature']
        : ['All skin types', 'Dry skin', 'Mature skin'],
      harvestSeason: language === 'fr' ? 'Été - Automne' : 'Summer - Autumn',
      sustainability: language === 'fr'
        ? 'Récolte traditionnelle par les coopératives féminines berbères'
        : 'Traditional harvest by Berber women\'s cooperatives'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Rose de Damas' : 'Damascus Rose',
      scientificName: 'Rosa Damascena',
      region: language === 'fr' ? 'Vallées du Sud' : 'Southern Valleys',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
      description: language === 'fr'
        ? 'Cultivée dans les vallées du Dadès, cette rose précieuse offre des propriétés apaisantes et régénérantes.'
        : 'Grown in the Dadès valleys, this precious rose offers soothing and regenerating properties.',
      benefits: language === 'fr'
        ? ['Apaisement cutané', 'Hydratation douce', 'Anti-inflammatoire', 'Parfum naturel']
        : ['Skin soothing', 'Gentle hydration', 'Anti-inflammatory', 'Natural fragrance'],
      skinTypes: language === 'fr'
        ? ['Peau sensible', 'Peau irritée', 'Tous types de peau']
        : ['Sensitive skin', 'Irritated skin', 'All skin types'],
      harvestSeason: language === 'fr' ? 'Printemps' : 'Spring',
      sustainability: language === 'fr'
        ? 'Culture biologique sans pesticides'
        : 'Organic cultivation without pesticides'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Ghassoul' : 'Ghassoul Clay',
      scientificName: 'Rhassoul Marocain',
      region: 'Atlas',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400',
      description: language === 'fr'
        ? 'Argile volcanique naturelle extraite des montagnes de l\'Atlas, reconnue pour ses propriétés purifiantes.'
        : 'Natural volcanic clay extracted from the Atlas mountains, renowned for its purifying properties.',
      benefits: language === 'fr'
        ? ['Purification profonde', 'Absorption des impuretés', 'Exfoliation douce', 'Reminéralisation']
        : ['Deep purification', 'Impurity absorption', 'Gentle exfoliation', 'Remineralization'],
      skinTypes: language === 'fr'
        ? ['Peau grasse', 'Peau mixte', 'Peau à problèmes']
        : ['Oily skin', 'Combination skin', 'Problem skin'],
      harvestSeason: language === 'fr' ? 'Toute l\'année' : 'Year-round',
      sustainability: language === 'fr'
        ? 'Extraction respectueuse de l\'environnement'
        : 'Environmentally respectful extraction'
    },
    {
      id: 4,
      name: language === 'fr' ? 'Figue de Barbarie' : 'Prickly Pear',
      scientificName: 'Opuntia Ficus-Indica',
      region: 'Sahara',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400',
      description: language === 'fr'
        ? 'Cactus du désert marocain dont l\'huile de graines offre des propriétés anti-âge exceptionnelles.'
        : 'Desert cactus from Morocco whose seed oil offers exceptional anti-aging properties.',
      benefits: language === 'fr'
        ? ['Anti-âge puissant', 'Régénération cellulaire', 'Hydratation profonde', 'Protection UV']
        : ['Powerful anti-aging', 'Cellular regeneration', 'Deep hydration', 'UV protection'],
      skinTypes: language === 'fr'
        ? ['Peau mature', 'Peau déshydratée', 'Tous types de peau']
        : ['Mature skin', 'Dehydrated skin', 'All skin types'],
      harvestSeason: language === 'fr' ? 'Automne' : 'Autumn',
      sustainability: language === 'fr'
        ? 'Récolte manuelle respectueuse de la plante'
        : 'Manual harvest respectful of the plant'
    },
    {
      id: 5,
      name: language === 'fr' ? 'Henné' : 'Henna',
      scientificName: 'Lawsonia Inermis',
      region: language === 'fr' ? 'Vallées du Sud' : 'Southern Valleys',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400',
      description: language === 'fr'
        ? 'Plante tinctoriale traditionnelle aux propriétés fortifiantes et protectrices pour cheveux et ongles.'
        : 'Traditional dyeing plant with strengthening and protective properties for hair and nails.',
      benefits: language === 'fr'
        ? ['Fortification capillaire', 'Coloration naturelle', 'Protection UV', 'Propriétés antimicrobiennes']
        : ['Hair strengthening', 'Natural coloring', 'UV protection', 'Antimicrobial properties'],
      skinTypes: language === 'fr'
        ? ['Tous types de cheveux', 'Cheveux fragiles', 'Cuir chevelu sensible']
        : ['All hair types', 'Fragile hair', 'Sensitive scalp'],
      harvestSeason: language === 'fr' ? 'Été' : 'Summer',
      sustainability: language === 'fr'
        ? 'Culture traditionnelle sans irrigation intensive'
        : 'Traditional cultivation without intensive irrigation'
    },
    {
      id: 6,
      name: language === 'fr' ? 'Huile d\'Olive' : 'Olive Oil',
      scientificName: 'Olea Europaea',
      region: language === 'fr' ? 'Côte Atlantique' : 'Atlantic Coast',
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
      description: language === 'fr'
        ? 'Extraite des oliviers centenaires de la côte atlantique, riche en antioxydants et en vitamines.'
        : 'Extracted from century-old olive trees on the Atlantic coast, rich in antioxidants and vitamins.',
      benefits: language === 'fr'
        ? ['Nourrissement intense', 'Réparation cutanée', 'Anti-oxydation', 'Assouplissement']
        : ['Intense nourishment', 'Skin repair', 'Anti-oxidation', 'Softening'],
      skinTypes: language === 'fr'
        ? ['Peau sèche', 'Peau abîmée', 'Peau mature']
        : ['Dry skin', 'Damaged skin', 'Mature skin'],
      harvestSeason: language === 'fr' ? 'Automne - Hiver' : 'Autumn - Winter',
      sustainability: language === 'fr'
        ? 'Agriculture biologique certifiée'
        : 'Certified organic agriculture'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: language === 'fr' ? 'Tous' : 'All' },
    { id: 'huiles', name: language === 'fr' ? 'Huiles' : 'Oils' },
    { id: 'fleurs', name: language === 'fr' ? 'Fleurs' : 'Flowers' },
    { id: 'argiles', name: language === 'fr' ? 'Argiles' : 'Clays' },
    { id: 'fruits', name: language === 'fr' ? 'Fruits' : 'Fruits' }
  ];

  const filteredIngredients = ingredients.filter(ingredient => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'huiles') return ingredient.name.toLowerCase().includes('huile') || ingredient.name.toLowerCase().includes('oil');
    if (selectedCategory === 'fleurs') return ingredient.name.toLowerCase().includes('rose') || ingredient.name.toLowerCase().includes('flower');
    if (selectedCategory === 'argiles') return ingredient.name.toLowerCase().includes('ghassoul') || ingredient.name.toLowerCase().includes('clay');
    if (selectedCategory === 'fruits') return ingredient.name.toLowerCase().includes('figue') || ingredient.name.toLowerCase().includes('prickly');
    return true;
  });

  return (
    <div className="min-h-screen bg-pearl-100">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' ? 'Nos Ingrédients' : 'Our Ingredients'}
            </h1>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Découvrez les trésors botaniques du Maroc sélectionnés avec soin pour leurs propriétés exceptionnelles'
                : 'Discover the botanical treasures of Morocco carefully selected for their exceptional properties'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "copper-gradient text-white" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIngredients.map((ingredient) => (
              <Card key={ingredient.id} className="hover-scale overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-xl text-clay-800">
                      {ingredient.name}
                    </h3>
                    <span className="text-xs text-copper-600 bg-copper-100 px-2 py-1 rounded-full">
                      {ingredient.region}
                    </span>
                  </div>
                  
                  <p className="text-sm text-clay-500 italic mb-3">
                    {ingredient.scientificName}
                  </p>
                  
                  <p className="elegant-text text-clay-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {ingredient.description}
                  </p>

                  <div className="space-y-3">
                    {/* Benefits Preview */}
                    <div>
                      <h4 className="text-xs font-semibold text-clay-800 mb-2 uppercase tracking-wide">
                        {language === 'fr' ? 'Bienfaits principaux' : 'Main benefits'}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {ingredient.benefits.slice(0, 2).map((benefit, idx) => (
                          <span
                            key={idx}
                            className="bg-beige-100 text-clay-600 px-2 py-1 rounded-full text-xs"
                          >
                            {benefit}
                          </span>
                        ))}
                        {ingredient.benefits.length > 2 && (
                          <span className="text-xs text-copper-600">
                            +{ingredient.benefits.length - 2} {language === 'fr' ? 'autres' : 'more'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center text-2xl">
                            <Leaf className="h-6 w-6 text-copper-600 mr-2" />
                            {ingredient.name}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          {/* Image */}
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img 
                              src={ingredient.image} 
                              alt={ingredient.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Basic Info */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-copper-600 mr-2" />
                              <div>
                                <div className="text-xs text-clay-500 uppercase tracking-wide">
                                  {language === 'fr' ? 'Région' : 'Region'}
                                </div>
                                <div className="font-medium text-clay-800">{ingredient.region}</div>
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-clay-500 uppercase tracking-wide">
                                {language === 'fr' ? 'Récolte' : 'Harvest'}
                              </div>
                              <div className="font-medium text-clay-800">{ingredient.harvestSeason}</div>
                            </div>
                          </div>

                          {/* Description */}
                          <div>
                            <h4 className="font-semibold text-clay-800 mb-2">
                              {language === 'fr' ? 'Description' : 'Description'}
                            </h4>
                            <p className="elegant-text text-clay-700 leading-relaxed">
                              {ingredient.description}
                            </p>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-semibold text-clay-800 mb-3">
                              {language === 'fr' ? 'Bienfaits' : 'Benefits'}
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {ingredient.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center">
                                  <Heart className="h-3 w-3 text-copper-600 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-clay-700">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Skin Types */}
                          <div>
                            <h4 className="font-semibold text-clay-800 mb-3">
                              {language === 'fr' ? 'Types de peau recommandés' : 'Recommended skin types'}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {ingredient.skinTypes.map((type, idx) => (
                                <span
                                  key={idx}
                                  className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm"
                                >
                                  {type}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Sustainability */}
                          <div>
                            <h4 className="font-semibold text-clay-800 mb-2">
                              {language === 'fr' ? 'Durabilité' : 'Sustainability'}
                            </h4>
                            <p className="elegant-text text-clay-700 text-sm leading-relaxed">
                              {ingredient.sustainability}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default Ingredients;
