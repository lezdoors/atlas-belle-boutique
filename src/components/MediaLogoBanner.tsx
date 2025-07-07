import { useLanguage } from '@/contexts/LanguageContext';

const MediaLogoBanner = () => {
  const { language } = useLanguage();

  const mediaLogos = [
    { 
      name: 'Artisan Vogue',
      url: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/artisan-vogue-.png',
      ariaLabel: language === 'fr' ? 'Vu dans Artisan Vogue' : 'As seen in Artisan Vogue'
    },
    { 
      name: 'Forbes Morocco',
      url: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/forbe-morocco.png.webp',
      ariaLabel: language === 'fr' ? 'Vu dans Forbes Morocco' : 'As seen in Forbes Morocco'
    },
    { 
      name: 'Wall Street Journal',
      url: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/kisspng-the-wall-street-journal-newspaper-wsj-magazine-5afaba4c23f5b8.7339908015263811321473.jpg',
      ariaLabel: language === 'fr' ? 'Vu dans Wall Street Journal' : 'As seen in Wall Street Journal'
    },
    { 
      name: 'Epicurious',
      url: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/epicurious-logo.png',
      ariaLabel: language === 'fr' ? 'Vu dans Epicurious' : 'As seen in Epicurious'
    },
    { 
      name: 'Real Simple',
      url: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/real-simple-logo.png',
      ariaLabel: language === 'fr' ? 'Vu dans Real Simple' : 'As seen in Real Simple'
    },
    { 
      name: 'Morocco World News',
      url: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/Morocco_World_News_Logo.svg.png',
      ariaLabel: language === 'fr' ? 'Vu dans Morocco World News' : 'As seen in Morocco World News'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-stone-50/50 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-light text-stone-800 mb-4">
            {language === 'fr' ? 'Ils Parlent de Nous' : 'As Seen In'}
          </h3>
          <p className="text-sm font-light text-stone-600 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Notre travail a été remarqué par des médias de renom à travers le monde.' 
              : 'Our work has been featured in acclaimed media worldwide.'
            }
          </p>
        </div>

        {/* Logos Grid - Two Rows */}
        <div className="space-y-8">
          {/* Row 1: First 3 logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-items-center">
            {mediaLogos.slice(0, 3).map((logo, index) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center px-6 py-4 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
                aria-label={logo.ariaLabel}
                role="img"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-12 w-auto filter grayscale transition-all duration-300 group-hover:filter-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 2: Last 3 logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-items-center">
            {mediaLogos.slice(3, 6).map((logo, index) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center px-6 py-4 transition-all duration-300"
                style={{
                  animationDelay: `${(index + 3) * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
                aria-label={logo.ariaLabel}
                role="img"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-12 w-auto filter grayscale transition-all duration-300 group-hover:filter-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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