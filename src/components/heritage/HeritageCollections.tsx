
import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const HeritageCollections = () => {
  const { language } = useLanguage();

  const collections = [
    {
      id: 1,
      name: language === 'fr' ? 'Céramiques' : 'Ceramics',
      description: language === 'fr' 
        ? 'Poteries traditionnelles façonnées selon des techniques ancestrales'
        : 'Traditional pottery shaped using ancestral techniques',
      image: 'https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//tagine1.jpg.webp'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Verrerie' : 'Glassware',
      description: language === 'fr'
        ? 'Verres soufflés à la main dans la pure tradition marocaine'
        : 'Hand-blown glasses in the pure Moroccan tradition',
      image: 'https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//baldi-glass-multi.JPG'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Art de Vivre & Décoration' : 'Lifestyle & Decor',
      description: language === 'fr'
        ? 'Objets décoratifs qui subliment votre intérieur'
        : 'Decorative objects that enhance your interior',
      image: 'https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//charbil-blue-orange.jpg.webp'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            {language === 'fr' ? 'Nos Collections' : 'Our Collections'}
          </h2>
          <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Découvrez nos collections d\'artisanat marocain, chacune reflétant un savoir-faire unique et une histoire riche'
              : 'Discover our Moroccan craft collections, each reflecting unique know-how and rich history'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group cursor-pointer border-0 bg-white hover:bg-gray-50 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-3 overflow-hidden rounded-3xl"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-black mb-3 tracking-tight">
                  {collection.name}
                </h3>
                <p className="font-serif text-lg text-gray-600 leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageCollections;
