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
    <div className="text-center">
      <div className="mb-4">
        <Clock className="h-5 w-5 text-stone-400 mx-auto mb-3" />
      </div>
      
      <h3 className="text-lg font-light text-stone-700 mb-2">
        {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
      </h3>
      
      <p className="text-sm text-stone-600 mb-6">
        {language === 'fr' 
          ? 'Découvrez nos trésors artisanaux'
          : 'Discover our artisanal treasures'
        }
      </p>

      {/* Countdown Display */}
      <div className="flex justify-center items-center space-x-6">
        <div className="text-center">
          <div className="text-2xl font-light text-foreground mb-1">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {language === 'fr' ? 'Jours' : 'Days'}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-light text-foreground mb-1">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {language === 'fr' ? 'Heures' : 'Hours'}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-light text-foreground mb-1">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {language === 'fr' ? 'Minutes' : 'Minutes'}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-light text-foreground mb-1">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wide text-stone-500">
            {language === 'fr' ? 'Secondes' : 'Seconds'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;