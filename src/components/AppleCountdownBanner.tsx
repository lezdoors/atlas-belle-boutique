
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <div className="bg-white border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center space-x-8">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-black mb-1">
              {language === 'fr' ? 'Bientôt Disponible' : 'Coming Soon'}
            </h3>
          </div>

          {/* Countdown */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-lg font-light text-black tabular-nums">{timeLeft.days}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {language === 'fr' ? 'Jours' : 'Days'}
              </div>
            </div>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <div className="text-center">
              <div className="text-lg font-light text-black tabular-nums">{timeLeft.hours}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {language === 'fr' ? 'Heures' : 'Hours'}
              </div>
            </div>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <div className="text-center">
              <div className="text-lg font-light text-black tabular-nums">{timeLeft.minutes}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {language === 'fr' ? 'Min' : 'Min'}
              </div>
            </div>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <div className="text-center">
              <div className="text-lg font-light text-black tabular-nums">{timeLeft.seconds}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {language === 'fr' ? 'Sec' : 'Sec'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleCountdownBanner;
