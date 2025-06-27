
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FourSeasons = () => {
  const { language } = useLanguage();
  const [currentSeason, setCurrentSeason] = useState(0);

  const seasons = [
    {
      id: 'spring',
      name: language === 'fr' ? 'Printemps' : 'Spring',
      title: language === 'fr' ? 'Renaissance & Fraîcheur' : 'Renaissance & Freshness',
      description: language === 'fr' 
        ? 'Réveillez votre peau avec nos soins purifiants à l\'eau de rose et aux extraits floraux du Haut Atlas.'
        : 'Awaken your skin with our purifying treatments with rose water and floral extracts from the High Atlas.',
      image: '/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png',
      color: 'from-green-400 to-emerald-600',
      products: [
        {
          name: language === 'fr' ? 'Eau de Rose Damascena' : 'Damascena Rose Water',
          price: language === 'fr' ? '45€' : '$52'
        },
        {
          name: language === 'fr' ? 'Masque Purifiant Menthe' : 'Purifying Mint Mask',
          price: language === 'fr' ? '38€' : '$44'
        }
      ]
    },
    {
      id: 'summer',
      name: language === 'fr' ? 'Été' : 'Summer',
      title: language === 'fr' ? 'Protection & Éclat' : 'Protection & Radiance',
      description: language === 'fr'
        ? 'Protégez et nourrissez votre peau avec nos huiles précieuses d\'argan et de figue de barbarie.'
        : 'Protect and nourish your skin with our precious argan and prickly pear oils.',
      image: '/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png',
      color: 'from-yellow-400 to-orange-500',
      products: [
        {
          name: language === 'fr' ? 'Huile d\'Argan Bio' : 'Organic Argan Oil',
          price: language === 'fr' ? '65€' : '$75'
        },
        {
          name: language === 'fr' ? 'Sérum Figue de Barbarie' : 'Prickly Pear Serum',
          price: language === 'fr' ? '78€' : '$90'
        }
      ]
    },
    {
      id: 'autumn',
      name: language === 'fr' ? 'Automne' : 'Autumn',
      title: language === 'fr' ? 'Réparation & Confort' : 'Repair & Comfort',
      description: language === 'fr'
        ? 'Réparez et apaisez votre peau avec nos baumes riches au beurre de karité et à l\'huile d\'amande douce.'
        : 'Repair and soothe your skin with our rich balms with shea butter and sweet almond oil.',
      image: '/lovable-uploads/4d22e63c-9766-4547-889d-0462b7de47e6.png',
      color: 'from-orange-400 to-red-500',
      products: [
        {
          name: language === 'fr' ? 'Baume Karité Royal' : 'Royal Shea Balm',
          price: language === 'fr' ? '42€' : '$48'
        },
        {
          name: language === 'fr' ? 'Huile Amande Précieuse' : 'Precious Almond Oil',
          price: language === 'fr' ? '35€' : '$40'
        }
      ]
    },
    {
      id: 'winter',
      name: language === 'fr' ? 'Hiver' : 'Winter',
      title: language === 'fr' ? 'Nutrition & Protection' : 'Nutrition & Protection',
      description: language === 'fr'
        ? 'Nourrissez intensément votre peau avec nos crèmes onctueuses à l\'huile d\'olive et au miel de thym.'
        : 'Intensely nourish your skin with our creamy treatments with olive oil and thyme honey.',
      image: '/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png',
      color: 'from-blue-400 to-indigo-600',
      products: [
        {
          name: language === 'fr' ? 'Crème Nutrition Intense' : 'Intense Nutrition Cream',
          price: language === 'fr' ? '58€' : '$67'
        },
        {
          name: language === 'fr' ? 'Miel de Thym Sauvage' : 'Wild Thyme Honey',
          price: language === 'fr' ? '28€' : '$32'
        }
      ]
    }
  ];

  const nextSeason = () => {
    setCurrentSeason((prev) => (prev + 1) % seasons.length);
  };

  const prevSeason = () => {
    setCurrentSeason((prev) => (prev - 1 + seasons.length) % seasons.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-copper-400 to-copper-600 mx-auto rounded-full mb-8"></div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Les Quatre Saisons de la Beauté' : 'The Four Seasons of Beauty'}
          </h2>
          <p className="elegant-text text-xl text-clay-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Chaque saison révèle ses propres secrets de beauté, inspirés des cycles naturels du Maroc'
              : 'Each season reveals its own beauty secrets, inspired by the natural cycles of Morocco'
            }
          </p>
        </div>

        {/* Desktop: 4-Column Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-16">
          {seasons.map((season, index) => (
            <div 
              key={season.id}
              className="group animate-fade-in hover-scale cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden luxury-shadow h-full transition-all duration-300 hover:bg-white">
                {/* Season Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={season.image} 
                    alt={season.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${season.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                {/* Season Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-clay-800 mb-2">
                    {season.name}
                  </h3>
                  <h4 className="font-serif text-lg text-copper-600 mb-3">
                    {season.title}
                  </h4>
                  <p className="text-clay-600 text-sm leading-relaxed mb-4">
                    {season.description}
                  </p>

                  {/* Featured Products */}
                  <div className="space-y-2 mb-4">
                    {season.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex justify-between items-center text-xs">
                        <span className="text-clay-500">{product.name}</span>
                        <span className="font-semibold text-copper-600">{product.price}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-copper-300 text-copper-600 hover:bg-copper-50"
                  >
                    {language === 'fr' ? 'Découvrir la collection →' : 'Discover collection →'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden mb-16">
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden luxury-shadow">
              {/* Season Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={seasons[currentSeason].image} 
                  alt={seasons[currentSeason].name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${seasons[currentSeason].color} opacity-20`}></div>
              </div>

              {/* Season Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-clay-800 mb-2">
                  {seasons[currentSeason].name}
                </h3>
                <h4 className="font-serif text-xl text-copper-600 mb-4">
                  {seasons[currentSeason].title}
                </h4>
                <p className="text-clay-600 leading-relaxed mb-6">
                  {seasons[currentSeason].description}
                </p>

                {/* Featured Products */}
                <div className="space-y-3 mb-6">
                  {seasons[currentSeason].products.map((product, productIndex) => (
                    <div key={productIndex} className="flex justify-between items-center">
                      <span className="text-clay-600">{product.name}</span>
                      <span className="font-semibold text-copper-600 text-lg">{product.price}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="w-full copper-gradient text-white rounded-full font-medium tracking-wide hover-scale"
                >
                  {language === 'fr' ? 'Découvrir la collection →' : 'Discover collection →'}
                </Button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button 
                onClick={prevSeason}
                variant="outline"
                size="sm"
                className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
              >
                <ChevronLeft className="h-5 w-5 text-copper-600" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {seasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSeason(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSeason 
                        ? 'bg-copper-500 scale-125' 
                        : 'bg-copper-200 hover:bg-copper-300'
                    }`}
                  />
                ))}
              </div>

              <Button 
                onClick={nextSeason}
                variant="outline"
                size="sm"
                className="rounded-full w-12 h-12 p-0 border-copper-300 hover:bg-copper-50"
              >
                <ChevronRight className="h-5 w-5 text-copper-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 luxury-shadow max-w-2xl mx-auto hover-scale">
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-clay-800 mb-4">
              {language === 'fr' ? 'Votre Beauté au Rythme des Saisons' : 'Your Beauty Following the Seasons'}
            </h3>
            <p className="elegant-text text-clay-600 mb-6 text-lg">
              {language === 'fr' 
                ? 'Laissez-vous guider par la sagesse ancestrale du Maroc et découvrez les rituels adaptés à chaque moment de l\'année'
                : 'Let yourself be guided by the ancestral wisdom of Morocco and discover rituals adapted to each moment of the year'
              }
            </p>
            <Button className="copper-gradient text-white px-8 py-3 rounded-full font-medium tracking-wide border-0 hover-scale">
              {language === 'fr' ? 'Découvrir Tous nos Rituels' : 'Discover All Our Rituals'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourSeasons;
