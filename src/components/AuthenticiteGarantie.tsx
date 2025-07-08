import { Award, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AuthenticiteGarantie = () => {
  const { language } = useLanguage();

  const guarantees = [
    {
      icon: Award,
      titleFr: 'Artisans Certifiés',
      titleEn: 'Certified Artisans',
      descriptionFr: 'Chaque artisan est sélectionné pour son expertise et son respect des techniques traditionnelles',
      descriptionEn: 'Each artisan is selected for their expertise and respect for traditional techniques'
    },
    {
      icon: Users,
      titleFr: 'Commerce Direct',
      titleEn: 'Direct Trade',
      descriptionFr: 'Nous travaillons directement avec nos artisans, garantissant un commerce équitable',
      descriptionEn: 'We work directly with our artisans, ensuring fair trade'
    },
    {
      icon: Sparkles,
      titleFr: 'Héritage Préservé',
      titleEn: 'Preserved Heritage',
      descriptionFr: 'Chaque pièce perpétue un savoir-faire ancestral transmis de génération en génération',
      descriptionEn: 'Each piece perpetuates ancestral know-how passed down through generations'
    }
  ];

  return (
    <section className="w-full bg-stone-800 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-white/90 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3">
            {language === 'fr' ? 'Authenticité Garantie' : 'Authenticity Guaranteed'}
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed px-4">
            {language === 'fr' ? 'Un engagement envers l\'artisanat authentique' : 'A commitment to authentic craftsmanship'}
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center transition-all duration-300 hover:scale-105 px-4"
            >
              {/* Icon */}
              <div className="relative mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <guarantee.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white/90 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                <h3 className="font-medium text-base sm:text-lg tracking-wide mb-2 sm:mb-3">
                  {language === 'fr' ? guarantee.titleFr : guarantee.titleEn}
                </h3>
                <p className="text-xs sm:text-sm font-light text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                  {language === 'fr' ? guarantee.descriptionFr : guarantee.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticiteGarantie;