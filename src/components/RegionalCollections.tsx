
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RegionalCollections = () => {
  const { language } = useLanguage();

  const collections = [
    {
      id: 'atlas',
      name: language === 'fr' ? 'Collection Atlas' : 'Atlas Collection',
      region: language === 'fr' ? 'Montagnes de l\'Atlas' : 'Atlas Mountains',
      description: language === 'fr' 
        ? 'Découvrez les trésors floraux des hautes montagnes marocaines, où la rose de Damas épanouit sa fragrance pure dans l\'air cristallin.'
        : 'Discover the floral treasures of the high Moroccan mountains, where Damask rose blooms its pure fragrance in the crystal air.',
      ingredients: language === 'fr' 
        ? ['Rose de Damas', 'Herbes de montagne', 'Eaux alpines', 'Miel de montagne']
        : ['Damask Rose', 'Mountain herbs', 'Alpine waters', 'Mountain honey'],
      image: '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      gradient: 'from-rose-400 to-pink-600',
      products: 4
    },
    {
      id: 'sahara',
      name: language === 'fr' ? 'Collection Sahara' : 'Sahara Collection',
      region: language === 'fr' ? 'Désert du Sahara' : 'Sahara Desert',
      description: language === 'fr'
        ? 'Explorez les secrets de beauté du grand désert, où le cactus de Barbarie révèle ses propriétés protectrices extraordinaires.'
        : 'Explore the beauty secrets of the great desert, where prickly pear cactus reveals its extraordinary protective properties.',
      ingredients: language === 'fr'
        ? ['Huile de figue de Barbarie', 'Minéraux du désert', 'Baumes protecteurs', 'Essences nomades']
        : ['Prickly pear oil', 'Desert minerals', 'Protective balms', 'Nomadic essences'],
      image: '/lovable-uploads/616bba28-fbf7-4dfb-bae7-e036ccd1e78b.png',
      gradient: 'from-amber-400 to-orange-600',
      products: 6
    },
    {
      id: 'atlantic',
      name: language === 'fr' ? 'Collection Atlantique' : 'Atlantic Collection',
      region: language === 'fr' ? 'Côte Atlantique' : 'Atlantic Coast',
      description: language === 'fr'
        ? 'Plongez dans les bienfaits marins de la côte atlantique, où les algues et sels marins purifient et revitalisent.'
        : 'Dive into the marine benefits of the Atlantic coast, where seaweed and marine salts purify and revitalize.',
      ingredients: language === 'fr'
        ? ['Extraits d\'algues', 'Sels marins', 'Parfums de brise', 'Minéraux océaniques']
        : ['Seaweed extracts', 'Marine salts', 'Breeze scents', 'Ocean minerals'],
      image: '/lovable-uploads/073dee32-d52c-4b0f-9910-d5d85832b4ef.png',
      gradient: 'from-teal-400 to-blue-600',
      products: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-copper-100 text-copper-700 px-6 py-3 rounded-full mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">
              {language === 'fr' ? 'Collections Régionales' : 'Regional Collections'}
            </span>
          </div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' 
              ? 'Chaque Région Raconte son Histoire'
              : 'Each Region Tells Its Story'
            }
          </h2>
          <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
            {language === 'fr'
              ? 'Explorez nos collections inspirées des terroirs uniques du Maroc, chacune capturant l\'essence authentique de sa région d\'origine'
              : 'Explore our collections inspired by Morocco\'s unique terroirs, each capturing the authentic essence of its region of origin'
            }
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.id}
              className="group hover-scale bg-white/90 backdrop-blur-sm border-0 luxury-shadow overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Collection Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  
                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 text-clay-700 px-3 py-1 rounded-full text-sm font-medium">
                    {collection.products} {language === 'fr' ? 'produits' : 'products'}
                  </div>

                  {/* Collection Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-xl mb-1">{collection.name}</h3>
                    <p className="text-white/90 text-sm">{collection.region}</p>
                  </div>
                </div>

                {/* Collection Details */}
                <div className="p-6">
                  <p className="elegant-text text-clay-600 mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-clay-700 mb-3">
                      {language === 'fr' ? 'Ingrédients phares :' : 'Signature ingredients:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {collection.ingredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="bg-copper-100 text-copper-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full copper-gradient text-white rounded-full border-0 group"
                  >
                    <span>{language === 'fr' ? 'Découvrir la Collection' : 'Explore Collection'}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-white/80 backdrop-blur-sm border-0 luxury-shadow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-2xl text-clay-800 mb-4">
                {language === 'fr' ? 'Explorez Toutes nos Régions' : 'Explore All Our Regions'}
              </h3>
              <p className="elegant-text text-clay-600 mb-6">
                {language === 'fr'
                  ? 'Découvrez la carte interactive de nos régions et plongez dans l\'histoire de chaque terroir marocain'
                  : 'Discover the interactive map of our regions and dive into the history of each Moroccan terroir'
                }
              </p>
              <Button className="copper-gradient text-white px-8 py-3 rounded-full">
                {language === 'fr' ? 'Voir la Carte des Régions' : 'View Regional Map'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegionalCollections;
