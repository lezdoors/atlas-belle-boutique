
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock } from 'lucide-react';

const AppleCountdownBanner = () => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (you can adjust this date)
  const launchDate = new Date('2025-09-01T00:00:00Z').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="bg-white/95 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-black/5 rounded-full">
            <Clock className="h-6 w-6 text-black/60" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extralight text-black mb-3 tracking-tight">
          {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-light text-black/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          {language === 'fr' 
            ? 'Soyez les premiers à découvrir nos trésors artisanaux du Maroc.'
            : 'Be the first to discover our handcrafted treasures from Morocco.'
          }
        </p>

        {/* Countdown */}
        <div className="flex justify-center items-center space-x-8 md:space-x-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extralight text-black mb-2">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-sm font-light text-black/60 uppercase tracking-wider">
              {language === 'fr' ? 'Jours' : 'Days'}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extralight text-black mb-2">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-sm font-light text-black/60 uppercase tracking-wider">
              {language === 'fr' ? 'Heures' : 'Hours'}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extralight text-black mb-2">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-sm font-light text-black/60 uppercase tracking-wider">
              {language === 'fr' ? 'Minutes' : 'Minutes'}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-extralight text-black mb-2">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-sm font-light text-black/60 uppercase tracking-wider">
              {language === 'fr' ? 'Secondes' : 'Seconds'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleCountdownBanner;
