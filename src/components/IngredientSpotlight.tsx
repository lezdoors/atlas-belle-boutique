import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const IngredientSpotlight = () => {
  const { language } = useLanguage();

  const featuredIngredient = {
    name: language === 'fr' ? 'Huile d\'Argan' : 'Argan Oil',
    scientificName: 'Argania spinosa',
    origin: language === 'fr' ? 'Sud-ouest du Maroc' : 'Southwest Morocco',
    harvestSeason: language === 'fr' ? 'Juin - Septembre' : 'June - September',
    description: language === 'fr'
      ? 'L\'or liquide du Maroc, extrait des fruits de l\'arganier millénaire qui ne pousse que dans le sud-ouest du pays. Riche en vitamine E et acides gras essentiels.'
      : 'Morocco\'s liquid gold, extracted from the fruits of the thousand-year-old argan tree that only grows in the southwest of the country. Rich in vitamin E and essential fatty acids.',
    traditionalUse: language === 'fr'
      ? 'Utilisée depuis des siècles par les femmes berbères pour nourrir la peau et les cheveux, l\'huile d\'argan était traditionnellement préparée à la main dans les coopératives féminines.'
      : 'Used for centuries by Berber women to nourish skin and hair, argan oil was traditionally prepared by hand in women\'s cooperatives.',
    benefits: language === 'fr'
      ? ['Hydratation profonde', 'Anti-âge naturel', 'Réparation cellulaire', 'Protection antioxydante']
      : ['Deep hydration', 'Natural anti-aging', 'Cellular repair', 'Antioxidant protection'],
    image: '/lovable-uploads/7a850627-5f60-438f-b6e5-5db742e324e8.png',
    processImage: '/lovable-uploads/6fde7854-c65c-40e6-8df6-8d9ca69c3fc8.png'
  };

  return (
    <section className="py-20 bg-gradient-to-br from-beige-50 to-pearl-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-copper-100 text-copper-700 px-6 py-3 rounded-full mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">
              {language === 'fr' ? 'Ingrédient Vedette' : 'Ingredient Spotlight'}
            </span>
          </div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' 
              ? 'Découvrez l\'Or Liquide du Maroc'
              : 'Discover Morocco\'s Liquid Gold'
            }
          </h2>
        </div>

        {/* Main Ingredient Card */}
        <Card className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-3xl overflow-hidden mb-12">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={featuredIngredient.image} 
                  alt={featuredIngredient.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Ingredient Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="font-display font-bold text-2xl text-clay-800 mb-1">
                      {featuredIngredient.name}
                    </h3>
                    <p className="text-sm text-clay-600 italic">
                      {featuredIngredient.scientificName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-copper-600" />
                    <div>
                      <div className="text-xs text-clay-500 uppercase tracking-wide">
                        {language === 'fr' ? 'Origine' : 'Origin'}
                      </div>
                      <div className="text-sm font-medium text-clay-700">
                        {featuredIngredient.origin}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-copper-600" />
                    <div>
                      <div className="text-xs text-clay-500 uppercase tracking-wide">
                        {language === 'fr' ? 'Récolte' : 'Harvest'}
                      </div>
                      <div className="text-sm font-medium text-clay-700">
                        {featuredIngredient.harvestSeason}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="elegant-text text-clay-600 text-lg leading-relaxed mb-6">
                  {featuredIngredient.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="font-display font-semibold text-clay-800 mb-4">
                    {language === 'fr' ? 'Bienfaits principaux' : 'Key Benefits'}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {featuredIngredient.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-copper-400 rounded-full"></div>
                        <span className="text-sm text-clay-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="copper-gradient text-white rounded-full px-6 group">
                  {language === 'fr' ? 'Produits à l\'Argan' : 'Argan Products'}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traditional Process Section */}
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-0 luxury-shadow rounded-3xl overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Process Image */}
              <div className="lg:col-span-1">
                <div className="relative w-32 h-32 mx-auto lg:w-full lg:h-40 rounded-2xl overflow-hidden">
                  <img 
                    src={featuredIngredient.processImage} 
                    alt="Traditional extraction process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Traditional Use Story */}
              <div className="lg:col-span-2">
                <h4 className="font-display font-bold text-xl text-clay-800 mb-4">
                  {language === 'fr' ? 'Tradition Millénaire' : 'Millennial Tradition'}
                </h4>
                <p className="elegant-text text-clay-600 leading-relaxed">
                  {featuredIngredient.traditionalUse}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IngredientSpotlight;
