
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FragranceShowcaseHeader from '@/components/fragrance/FragranceShowcaseHeader';
import FragranceViewAllButton from '@/components/fragrance/FragranceViewAllButton';
import FragranceProductCard from '@/components/fragrance/FragranceProductCard';

const FragranceShowcase = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Define fragrance categories with the correct Supabase images
  const fragranceCategories = [
    {
      id: 1,
      name: language === 'fr' ? 'Collection Prestige' : 'Prestige Collection',
      description: language === 'fr' 
        ? 'Découvrez nos créations d\'exception, inspirées des traditions millénaires du Maroc'
        : 'Discover our exceptional creations, inspired by Morocco\'s ancient traditions',
      products: [
        {
          id: 11,
          name: language === 'fr' ? 'Collection Prestige' : 'Prestige Collection',
          price: 150,
          image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/women%20face%20covered.jpg',
          rating: 4.9,
          reviews: 127
        },
        {
          id: 12,
          name: language === 'fr' ? 'Crème Précieuse Atlas' : 'Atlas Precious Cream',
          price: 89,
          image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/orange%20rose%20and%20bottle%20behind%20it.jpg',
          rating: 4.7,
          reviews: 89
        }
      ]
    },
    {
      id: 2,
      name: language === 'fr' ? 'Collection Parfums' : 'Perfume Collection',
      description: language === 'fr' 
        ? 'Des senteurs délicates inspirées des jardins marocains'
        : 'Delicate scents inspired by Moroccan gardens',
      products: [
        {
          id: 21,
          name: language === 'fr' ? 'Parfum Royal Argan' : 'Royal Argan Perfume',
          price: 95,
          image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/perfume%20bottle%20roses%20in%20it.jpg',
          rating: 4.8,
          reviews: 156
        },
        {
          id: 22,
          name: language === 'fr' ? 'Neroli Précieux' : 'Precious Neroli',
          price: 72,
          image: '/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png',
          rating: 4.5,
          reviews: 98
        }
      ]
    },
    {
      id: 3,
      name: language === 'fr' ? 'Collection Boisée' : 'Woody Collection',
      description: language === 'fr' 
        ? 'Des compositions chaleureuses aux notes de bois précieux'
        : 'Warm compositions with precious wood notes',
      products: [
        {
          id: 31,
          name: language === 'fr' ? 'Cèdre Atlas' : 'Atlas Cedar',
          price: 82,
          image: '/lovable-uploads/673f0b19-2270-4e9f-a2e5-59b15f441af5.png',
          rating: 4.9,
          reviews: 67
        },
        {
          id: 32,
          name: language === 'fr' ? 'Santal Mystique' : 'Mystic Sandalwood',
          price: 95,
          image: '/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png',
          rating: 4.8,
          reviews: 134
        }
      ]
    }
  ];
  
  // Show first 2 categories initially, all when expanded
  const displayedCategories = showAll ? fragranceCategories : fragranceCategories.slice(0, 2);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        <FragranceShowcaseHeader />
        
        {/* Desktop Grid Layout */}
        <div className="space-y-12 lg:space-y-16">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              {/* Category Header */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-clay-800 mb-3">
                  {category.name}
                </h3>
                <p className="text-clay-600 text-lg max-w-2xl mx-auto lg:mx-0">
                  {category.description}
                </p>
              </div>

              {/* Products Grid - Desktop Layout: 2 columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {category.products.map((product) => (
                  <FragranceProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && fragranceCategories.length > 2 && (
          <div className="text-center mt-12 lg:mt-16">
            <FragranceViewAllButton 
              onClick={() => setShowAll(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FragranceShowcase;
