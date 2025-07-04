import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CountdownBanner = () => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (e.g., 3 months from now - adjust as needed)
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 3);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return { days, hours, minutes, seconds };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-stone-50/30 border border-stone-200/60 rounded-2xl p-8 text-center">
      <div className="mb-6">
        <Clock className="h-6 w-6 text-stone-600 mx-auto mb-4" />
      </div>
      
      <h3 className="text-2xl font-serif font-light text-stone-800 mb-3">
        {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
      </h3>
      
      <p className="text-sm text-stone-600 mb-8 font-light">
        {language === 'fr' 
          ? 'Découvrez nos trésors artisanaux'
          : 'Discover our artisanal treasures'
        }
      </p>

      {/* Countdown Display */}
      <div className="flex justify-center items-center space-x-8">
        <div className="text-center">
          <div className="text-3xl font-light text-stone-800 mb-2 font-serif">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
            {language === 'fr' ? 'Jours' : 'Days'}
          </div>
        </div>
        
        <div className="text-stone-400 text-xl">:</div>
        
        <div className="text-center">
          <div className="text-3xl font-light text-stone-800 mb-2 font-serif">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
            {language === 'fr' ? 'Heures' : 'Hours'}
          </div>
        </div>
        
        <div className="text-stone-400 text-xl">:</div>
        
        <div className="text-center">
          <div className="text-3xl font-light text-stone-800 mb-2 font-serif">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
            {language === 'fr' ? 'Minutes' : 'Minutes'}
          </div>
        </div>
        
        <div className="text-stone-400 text-xl">:</div>
        
        <div className="text-center">
          <div className="text-3xl font-light text-stone-800 mb-2 font-serif">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
            {language === 'fr' ? 'Secondes' : 'Seconds'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;