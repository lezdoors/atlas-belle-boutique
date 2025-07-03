import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CatalogueMegaMenu = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    {
      id: 'fragrances',
      name: language === 'fr' ? 'Parfums' : 'Fragrances',
      subtitle: language === 'fr' ? 'Découvrir la collection' : 'Discover Collection',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/rose-water-damascena.jpg',
      href: '/catalogue?category=Beauté'
    },
    {
      id: 'candles',
      name: language === 'fr' ? 'Bougies Parfumées' : 'Scented Candles',
      subtitle: language === 'fr' ? 'Découvrir la collection' : 'Discover Collection',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/candle-amber-oud.jpg',
      href: '/catalogue?category=Décoration'
    },
    {
      id: 'tableware',
      name: language === 'fr' ? 'Art de la Table' : 'Tableware',
      subtitle: language === 'fr' ? 'Découvrir la collection' : 'Discover Collection',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/tea-service-royal.jpg',
      href: '/catalogue?category=Vaisselle'
    },
    {
      id: 'gifts',
      name: language === 'fr' ? 'Coffrets Cadeaux' : 'Gift Sets',
      subtitle: language === 'fr' ? 'Découvrir la collection' : 'Discover Collection',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/gift-set-luxury.jpg',
      href: '/catalogue?category=Cadeaux'
    }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Catalogue Trigger */}
      <Link
        to="/catalogue"
        className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide relative group"
      >
        {language === 'fr' ? 'Catalogue' : 'Catalogue'}
        <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <>
          {/* Desktop Menu */}
          <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50">
            <div 
              className="bg-stone-50 rounded-2xl shadow-xl border border-stone-200/50 p-8 w-[800px] backdrop-blur-sm"
              style={{ 
                animation: 'fadeIn 300ms ease-out',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="grid grid-cols-4 gap-6">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.href}
                    className="group text-center"
                  >
                    <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif font-semibold text-stone-900 text-sm mb-1 tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-stone-600 font-light tracking-wide group-hover:text-stone-800 transition-colors">
                      {category.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Modal */}
          <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              style={{ animation: 'fadeIn 300ms ease-out' }}
            />
            <div 
              className="relative bg-stone-50 rounded-2xl shadow-xl border border-stone-200/50 p-6 w-full max-w-sm max-h-[80vh] overflow-y-auto"
              style={{ animation: 'fadeIn 300ms ease-out, slideUp 300ms ease-out' }}
            >
              <div className="space-y-6">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.href}
                    className="group block"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 overflow-hidden rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-stone-900 text-sm mb-1 tracking-tight">
                          {category.name}
                        </h3>
                        <p className="text-xs text-stone-600 font-light tracking-wide group-hover:text-stone-800 transition-colors">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default CatalogueMegaMenu;