
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SeasonGrid from './seasons/SeasonGrid';
import SeasonCarousel from './seasons/SeasonCarousel';
import SeasonCTA from './seasons/SeasonCTA';
import { createSeasonsData } from './seasons/seasonData';

const FourSeasons = () => {
  const { language } = useLanguage();
  const [currentSeason, setCurrentSeason] = useState(0);
  
  const seasons = createSeasonsData(language);

  const nextSeason = () => {
    setCurrentSeason((prev) => (prev + 1) % seasons.length);
  };

  const prevSeason = () => {
    setCurrentSeason((prev) => (prev - 1 + seasons.length) % seasons.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pearl-50 to-beige-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-copper-400 to-copper-600 mx-auto rounded-full mb-8"></div>
          <h2 className="section-title text-clay-800 mb-6">
            {language === 'fr' ? 'Les Quatre Saisons de la Beauté' : 'The Four Seasons of Beauty'}
          </h2>
          <p className="elegant-text text-xl text-clay-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Chaque saison révèle ses propres techniques artisanales, inspirées des cycles naturels du Maroc'
              : 'Each season reveals its own artisan techniques, inspired by the natural cycles of Morocco'
            }
          </p>
        </div>

        {/* Desktop Grid */}
        <SeasonGrid seasons={seasons} language={language} />

        {/* Mobile Carousel */}
        <SeasonCarousel 
          seasons={seasons}
          currentSeason={currentSeason}
          onPrevSeason={prevSeason}
          onNextSeason={nextSeason}
          onSetCurrentSeason={setCurrentSeason}
          language={language}
        />

        {/* Call to Action */}
        <SeasonCTA language={language} />
      </div>
    </section>
  );
};

export default FourSeasons;
