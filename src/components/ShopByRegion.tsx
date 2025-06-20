
import { useLanguage } from '@/contexts/LanguageContext';

const ShopByRegion = () => {
  const { language } = useLanguage();

  const regions = [
    {
      id: 'atlas',
      name: language === 'fr' ? 'Atlas' : 'Atlas',
      description: language === 'fr' ? 'Huiles précieuses des montagnes' : 'Precious mountain oils',
      image: '/placeholder.svg',
      color: 'from-copper-400 to-copper-600'
    },
    {
      id: 'sahara',
      name: language === 'fr' ? 'Sahara' : 'Sahara',
      description: language === 'fr' ? 'Parfums envoûtants du désert' : 'Enchanting desert fragrances',
      image: '/placeholder.svg',
      color: 'from-clay-400 to-clay-600'
    },
    {
      id: 'cote',
      name: language === 'fr' ? 'Côte' : 'Coast',
      description: language === 'fr' ? 'Soins rafraîchissants marins' : 'Refreshing marine treatments',
      image: '/placeholder.svg',
      color: 'from-beige-400 to-beige-600'
    },
    {
      id: 'vallees',
      name: language === 'fr' ? 'Vallées' : 'Valleys',
      description: language === 'fr' ? 'Essences florales délicates' : 'Delicate floral essences',
      image: '/placeholder.svg',
      color: 'from-pearl-400 to-pearl-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-copper-400 to-copper-600 mx-auto rounded-full mb-8"></div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Explorez par Région' : 'Shop by Region'}
          </h2>
          <p className="elegant-text text-xl text-clay-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Chaque région du Maroc offre ses propres trésors de beauté, reflétant la diversité et la richesse de cette terre magique'
              : 'Each region of Morocco offers its own beauty treasures, reflecting the diversity and richness of this magical land'
            }
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <div 
              key={region.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white luxury-shadow hover-scale h-80">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${region.color} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                  <h3 className="font-display font-bold text-2xl mb-2 tracking-wide">
                    {region.name}
                  </h3>
                  <p className="elegant-text text-sm opacity-90 leading-relaxed">
                    {region.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByRegion;
