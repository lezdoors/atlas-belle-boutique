import { useLanguage } from '@/contexts/LanguageContext';

const MediaLogoBanner = () => {
  const { language } = useLanguage();

  const mediaLogos = [
    { 
      name: 'Vogue', 
      ariaLabel: language === 'fr' ? 'Vu dans Vogue' : 'As seen in Vogue'
    },
    { 
      name: 'Forbes', 
      ariaLabel: language === 'fr' ? 'Vu dans Forbes' : 'As seen in Forbes'
    },
    { 
      name: 'WSJ', 
      ariaLabel: language === 'fr' ? 'Vu dans Wall Street Journal' : 'As seen in Wall Street Journal'
    },
    { 
      name: 'epicurious', 
      ariaLabel: language === 'fr' ? 'Vu dans Epicurious' : 'As seen in Epicurious'
    },
    { 
      name: 'FOOD&WINE', 
      ariaLabel: language === 'fr' ? 'Vu dans Food & Wine' : 'As seen in Food & Wine'
    },
    { 
      name: 'REAL SIMPLE', 
      ariaLabel: language === 'fr' ? 'Vu dans Real Simple' : 'As seen in Real Simple'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-stone-50/50 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-light text-stone-800 mb-4">
            {language === 'fr' ? 'Ils Parlent de Nous' : 'They Talk About Us'}
          </h3>
          <p className="text-sm font-light text-stone-500 tracking-wide uppercase">
            {language === 'fr' ? 'Vu dans les médias' : 'As seen in'}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center">
          {mediaLogos.map((logo, index) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center h-12 lg:h-16 transition-all duration-300 hover:scale-105 hover:opacity-70"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
              aria-label={logo.ariaLabel}
              role="img"
            >
              <span 
                className={`text-stone-700 font-light tracking-wide transition-all duration-300 group-hover:text-stone-900 ${
                  logo.name === 'VOGUE' ? 'text-xl lg:text-2xl font-serif' :
                  logo.name === 'Forbes' ? 'text-lg lg:text-xl font-serif' :
                  logo.name === 'WSJ' ? 'text-base lg:text-lg font-bold tracking-wider' :
                  logo.name === 'epicurious' ? 'text-lg lg:text-xl font-light italic' :
                  logo.name === 'FOOD&WINE' ? 'text-sm lg:text-base font-bold tracking-wider' :
                  'text-sm lg:text-base font-medium tracking-wide'
                }`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Subtle decoration line */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default MediaLogoBanner;