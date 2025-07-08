import { useState, useEffect } from 'react';
import { Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const CollectionPreview = () => {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to Spring 2024 - March 20th
    const targetDate = new Date('2024-03-20T00:00:00');
    
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

  const previewItems = [
    {
      name: language === 'fr' ? 'Service à Thé Traditionnel' : 'Traditional Tea Service',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/orange%20rose%20and%20bottle%20behind%20it.jpg',
      price: '€179'
    },
    {
      name: language === 'fr' ? 'Tagine Authentique' : 'Authentic Tagine',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/coastal-natural-beauty.jpg',
      price: '€135'
    },
    {
      name: language === 'fr' ? 'Verres Soufflés' : 'Blown Glasses',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/moroccan-architecture.jpg',
      price: '€89'
    }
  ];

  return (
    <div className="bg-stone-50/30 border border-stone-200/60 rounded-2xl p-8">
      <div className="text-center mb-8">
        <Clock className="h-6 w-6 text-stone-600 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-light text-stone-800 mb-3">
          {language === 'fr' ? 'Collection Printemps 2024' : 'Spring 2024 Collection'}
        </h3>
        <p className="text-sm text-stone-600 mb-6 font-light">
          {language === 'fr' 
            ? 'Première exclusivité : nos pièces signature arrivent bientôt'
            : 'First exclusive: our signature pieces coming soon'
          }
        </p>
      </div>

      {/* Preview Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {previewItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-stone-100">
            <div className="aspect-square bg-stone-100 rounded-lg mb-3 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-medium text-stone-800 text-sm mb-2">{item.name}</h4>
            <div className="flex items-center justify-between">
              <span className="text-stone-600 font-light">{item.price}</span>
              <div className="flex items-center text-amber-500">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="text-center">
        <Link to="/collections/printemps">
          <Button 
            className="bg-stone-900 text-white hover:bg-stone-800 px-8 py-3 text-sm font-light tracking-wide"
          >
            {language === 'fr' ? 'Découvrir la Collection' : 'Discover Collection'}
          </Button>
        </Link>
        <p className="text-xs text-stone-500 mt-3 font-light">
          {language === 'fr' 
            ? 'Livraison gratuite en France • Garantie 2 ans'
            : 'Free shipping in France • 2-year warranty'
          }
        </p>
      </div>
    </div>
  );
};

export default CollectionPreview;