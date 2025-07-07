
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const FeaturedCollections = () => {
  const { language } = useLanguage();

  const collections = [
    {
      id: 'tajines',
      name: language === 'fr' ? 'Tajines Artisanaux' : 'Handcrafted Tajines',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//fakkhar-tajine-white.JPG',
      description: language === 'fr' ? 'L\'art culinaire marocain' : 'The art of Moroccan cuisine',
      link: '/product/tajine-artisanal'
    },
    {
      id: 'verre',
      name: language === 'fr' ? 'Verre Marocain' : 'Moroccan Glassware',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//fakhar-glass-white1.JPG',
      description: language === 'fr' ? 'Élégance cristalline' : 'Crystal elegance',
      link: '/product/verre-marocain'
    },
    {
      id: 'textiles',
      name: language === 'fr' ? 'Textiles Berbères' : 'Berber Textiles',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
      description: language === 'fr' ? 'Traditions tissées' : 'Woven traditions',
      link: '/catalog/textiles'
    },
    {
      id: 'soins',
      name: language === 'fr' ? 'Soins Naturels' : 'Natural Skincare',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80',
      description: language === 'fr' ? 'Beauté authentique' : 'Authentic beauty',
      link: '/catalog/skincare'
    },
    {
      id: 'parfums',
      name: language === 'fr' ? 'Parfums d\'Orient' : 'Oriental Fragrances',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//tagine3.jpg.webp',
      description: language === 'fr' ? 'Essence du Maroc' : 'Essence of Morocco',
      link: '/catalog/fragrances'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extralight text-black mb-4 tracking-tight">
            {language === 'fr' ? 'Collections Phares' : 'Featured Collections'}
          </h2>
          <p className="text-lg font-light text-black/60 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez nos créations les plus emblématiques, façonnées par des artisans marocains talentueux'
              : 'Discover our most iconic creations, crafted by talented Moroccan artisans'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={collection.link}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-50 aspect-[4/5] mb-6">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-light text-black mb-2 group-hover:text-black/70 transition-colors">
                {collection.name}
              </h3>
              <p className="text-black/60 font-light">
                {collection.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
