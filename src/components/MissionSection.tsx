
import { Heart, Hand } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-16 bg-gradient-to-b from-sand-50 to-pearl-100 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-copper-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-gold-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon and Title */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/80 rounded-full shadow-md">
                <Heart className="h-6 w-6 text-copper-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-clay-800">
                {language === 'fr' 
                  ? 'Notre Mission : Du Maroc avec Amour'
                  : 'Our Mission: From Morocco with Love'
                }
              </h2>
              <div className="p-3 bg-white/80 rounded-full shadow-md">
                <Hand className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-copper-200 font-serif">"</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-copper-200 font-serif">"</div>
            
            <p className="text-lg md:text-xl leading-relaxed text-clay-700 font-serif italic px-8">
              {language === 'fr'
                ? "Chaque flacon incarne le savoir-faire ancestral de nos artisans marocains, l'authenticité des ingrédients rares, et l'amour transmis de génération en génération."
                : "Each bottle embodies the ancestral know-how of our Moroccan artisans, the authenticity of rare ingredients, and the love passed down from generation to generation."
              }
            </p>
          </div>

          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-copper-300 to-transparent w-32"></div>
            <div className="mx-4 w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-copper-300 to-transparent w-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
