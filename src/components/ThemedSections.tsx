import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ThemedSection {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
}

const sections: ThemedSection[] = [
  {
    id: 'parfums',
    imageUrl: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//buttle-roses-inside.jpg',
    title: 'Parfums d\'Orient',
    description: 'Des senteurs précieuses, enracinées dans l\'âme du Maroc.',
    ctaText: 'Découvrir nos parfums',
    ctaHref: '/shop?category=parfums'
  },
  {
    id: 'soins',
    imageUrl: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//coffe%20grain%20oil%20bottle.jpg',
    title: 'Soin pur, artisanal et efficace',
    description: 'Huiles, élixirs et crèmes inspirés de rituels ancestraux.',
    ctaText: 'Explorer la collection beauté',
    ctaHref: '/shop?category=soins'
  },
  {
    id: 'argane',
    imageUrl: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//2%20bottles%20purple%20background.jpg',
    title: 'L\'or liquide du Maroc',
    description: 'Notre huile d\'argane bio est pressée à froid pour préserver chaque bienfait.',
    ctaText: 'Voir les soins à l\'argane',
    ctaHref: '/shop?category=argane'
  },
  {
    id: 'textiles',
    imageUrl: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//rugs.jpg',
    title: 'L\'âme berbère dans chaque fibre',
    description: 'Tapis noués à la main, tissages rares, et héritage vivant.',
    ctaText: 'Découvrir les textiles',
    ctaHref: '/shop?category=textiles'
  },
  {
    id: 'tajines',
    imageUrl: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//fakkhar-tajine-white.JPG',
    title: 'Fait main, feu doux, traditions chaudes',
    description: 'Chaque tajine porte la signature unique d\'un artisan.',
    ctaText: 'Explorer l\'art de la table',
    ctaHref: '/shop?category=tajines'
  },
  {
    id: 'verre',
    imageUrl: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//beldi-glass-multicolor.JPG',
    title: 'Le verre du peuple',
    description: 'Soufflé à la bouche, coloré à la main — le rituel marocain par excellence.',
    ctaText: 'Voir nos verreries',
    ctaHref: '/shop?category=verre'
  }
];

const ThemedSections = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <section 
          key={section.id}
          className={`relative w-full min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden ${
            index % 2 === 0 ? 'bg-stone-50' : 'bg-white'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={section.imageUrl}
              alt={section.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 lg:px-12 xl:px-16">
            <div className={`max-w-4xl mx-auto text-center ${
              index % 2 === 0 ? 'lg:text-left lg:ml-0' : 'lg:text-right lg:mr-0'
            }`}>
              
              {/* Title */}
              <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 animate-fade-in tracking-tight leading-tight">
                {section.title}
              </h2>
              
              {/* Description */}
              <p className="font-light text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {section.description}
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-white/10 text-white border border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => section.ctaHref && (window.location.href = section.ctaHref)}
              >
                {section.ctaText}
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-white/30">
            <div className="w-px h-8 bg-white/60 animate-pulse"></div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ThemedSections;