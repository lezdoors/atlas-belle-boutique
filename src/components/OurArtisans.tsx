import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const OurArtisans = () => {
  const { language } = useLanguage();

  const artisans = [
    {
      id: 1,
      name: 'Fatima Amrani',
      region: 'Essaouira',
      specialty: language === 'fr' ? 'Extraction d\'huile d\'argan' : 'Argan oil extraction',
      experience: 25,
      image: '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
      story: language === 'fr' 
        ? 'Fatima perpétue la tradition familiale de l\'extraction d\'huile d\'argan depuis 25 ans. Son savoir-faire ancestral garantit la pureté exceptionnelle de nos huiles.'
        : 'Fatima continues the family tradition of argan oil extraction for 25 years. Her ancestral expertise guarantees the exceptional purity of our oils.',
      cooperative: 'Coopérative Tissaouine'
    },
    {
      id: 2,
      name: 'Ahmed Benali',
      region: 'Fès',
      specialty: language === 'fr' ? 'Maître parfumeur' : 'Master perfumer',
      experience: 30,
      image: '/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png',
      story: language === 'fr'
        ? 'Ahmed crée nos parfums uniques en mélangeant les essences traditionnelles avec des techniques modernes. Chaque fragrance raconte une histoire du Maroc.'
        : 'Ahmed creates our unique perfumes by blending traditional essences with modern techniques. Each fragrance tells a story of Morocco.',
      cooperative: 'Atelier des Parfums Traditionnels'
    },
    {
      id: 3,
      name: 'Aicha Tazi',
      region: 'Atlas',
      specialty: language === 'fr' ? 'Poterie traditionnelle' : 'Traditional pottery',
      experience: 18,
      image: '/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png',
      story: language === 'fr'
        ? 'Aicha façonne l\'argile rouge de l\'Atlas avec un savoir-faire transmis de mère en fille, créant des contenants uniques pour nos produits de beauté.'
        : 'Aicha shapes red clay from the Atlas with know-how passed from mother to daughter, creating unique containers for our beauty products.',
      cooperative: 'Coopérative de l\'Argile Précieuse'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-beige-50 to-pearl-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-copper-100 text-copper-700 px-6 py-3 rounded-full mb-6">
            <Heart className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">
              {language === 'fr' ? 'Nos Artisans' : 'Our Artisans'}
            </span>
          </div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' 
              ? 'Les Mains Expertes Derrière Nos Produits'
              : 'The Expert Hands Behind Our Products'
            }
          </h2>
          <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
            {language === 'fr'
              ? 'Découvrez les artisans passionnés qui perpétuent les traditions ancestrales du Maroc et donnent vie à chaque produit Perle d\'Atlas'
              : 'Meet the passionate artisans who perpetuate the ancestral traditions of Morocco and bring every Perle d\'Atlas product to life'
            }
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <Card 
              key={artisan.id}
              className="group hover-scale bg-white/90 backdrop-blur-sm border-0 luxury-shadow overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Artisan Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-copper-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {artisan.experience} {language === 'fr' ? 'ans' : 'years'}
                  </div>

                  {/* Name and Location Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-xl mb-1">{artisan.name}</h3>
                    <div className="flex items-center text-white/90">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{artisan.region}</span>
                    </div>
                  </div>
                </div>

                {/* Artisan Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {artisan.specialty}
                    </span>
                    <p className="elegant-text text-clay-600 text-sm leading-relaxed">
                      {artisan.story}
                    </p>
                  </div>

                  {/* Cooperative */}
                  <div className="pt-4 border-t border-pearl-200">
                    <div className="text-xs text-clay-500 uppercase tracking-wide mb-1">
                      {language === 'fr' ? 'Coopérative' : 'Cooperative'}
                    </div>
                    <div className="text-sm font-medium text-clay-700">
                      {artisan.cooperative}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 luxury-shadow max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-clay-800 mb-4">
              {language === 'fr' ? 'Soutenez l\'Artisanat Local' : 'Support Local Craftsmanship'}
            </h3>
            <p className="elegant-text text-clay-600 mb-6">
              {language === 'fr'
                ? 'Chaque achat soutient directement nos artisans et leurs communautés, préservant les traditions séculaires du Maroc.'
                : 'Every purchase directly supports our artisans and their communities, preserving Morocco\'s centuries-old traditions.'
              }
            </p>
            <div className="flex items-center justify-center text-copper-600">
              <Heart className="h-5 w-5 mr-2" />
              <span className="font-medium">
                {language === 'fr' ? 'Commerce équitable certifié' : 'Certified fair trade'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurArtisans;
