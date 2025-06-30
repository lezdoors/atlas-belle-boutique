
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeritageCollections = () => {
  const { language } = useLanguage();

  const collections = [
    {
      id: 1,
      title: language === 'fr' ? 'Collection Argan' : 'Argan Collection',
      description: language === 'fr' 
        ? 'L\'or liquide du Maroc pour nourrir et régénérer votre peau en profondeur.'
        : 'Morocco\'s liquid gold to nourish and regenerate your skin deeply.',
      image: '/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png',
      gradient: 'from-amber-50 to-orange-50'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Collection Rose' : 'Rose Collection',
      description: language === 'fr'
        ? 'La délicatesse des roses de Dadès pour une peau douce et parfumée.'
        : 'The delicacy of Dadès roses for soft and fragrant skin.',
      image: '/lovable-uploads/2649b5ab-37a7-4b14-ab73-9976ba61320a.png',
      gradient: 'from-rose-50 to-pink-50'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Collection Ghassoul' : 'Ghassoul Collection',
      description: language === 'fr'
        ? 'L\'argile précieuse de l\'Atlas pour purifier et détoxifier naturellement.'
        : 'The precious clay of Atlas to purify and detoxify naturally.',
      image: '/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png',
      gradient: 'from-clay-50 to-stone-50'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black mb-8 leading-tight">
            {language === 'fr' ? 'Nos Collections' : 'Our Collections'}
          </h2>
          <p className="text-xl font-light text-black/70 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Découvrez nos gammes inspirées des trésors naturels du Maroc'
              : 'Discover our ranges inspired by Morocco\'s natural treasures'
            }
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${collection.gradient} p-8 flex items-center justify-center`}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-4 leading-tight">
                  {collection.title}
                </h3>
                <p className="text-black/70 font-light leading-relaxed mb-6">
                  {collection.description}
                </p>
                
                <button className="inline-flex items-center text-black hover:text-black/70 font-light tracking-wide transition-colors group-hover:translate-x-2 transition-transform duration-300">
                  {language === 'fr' ? 'Découvrir' : 'Discover'}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link to="/">
            <button className="bg-black text-white px-12 py-4 rounded-full text-lg font-light tracking-wide hover:bg-black/90 transition-all duration-300 hover:scale-105">
              {language === 'fr' ? 'Voir tous nos produits' : 'View all our products'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeritageCollections;
