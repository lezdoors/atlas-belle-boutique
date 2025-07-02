import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CountdownBanner = () => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 6,
    minutes: 36,
    seconds: 4
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-stone-50 border-b border-stone-200">
      <div className="container-refined py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <Clock className="h-6 w-6 text-stone-400 mx-auto mb-4" />
          </div>
          
          <h2 className="heading-display text-3xl lg:text-4xl text-foreground mb-4">
            {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
          </h2>
          
          <p className="body-text text-stone-600 mb-8">
            {language === 'fr' 
              ? 'Soyez les premiers à découvrir nos trésors artisanaux du Maroc.'
              : 'Be the first to discover our artisanal treasures from Morocco.'
            }
          </p>

          {/* Countdown Display */}
          <div className="flex justify-center items-center space-x-8 lg:space-x-12 mb-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-foreground mb-2">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-xs uppercase tracking-wide text-stone-500">
                {language === 'fr' ? 'Jours' : 'Days'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-foreground mb-2">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs uppercase tracking-wide text-stone-500">
                {language === 'fr' ? 'Heures' : 'Hours'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-foreground mb-2">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs uppercase tracking-wide text-stone-500">
                {language === 'fr' ? 'Minutes' : 'Minutes'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-foreground mb-2">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs uppercase tracking-wide text-stone-500">
                {language === 'fr' ? 'Secondes' : 'Seconds'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;