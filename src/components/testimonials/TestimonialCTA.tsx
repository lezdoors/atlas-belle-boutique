
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialCTA = () => {
  const { language } = useLanguage();

  return (
    <div className="text-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 luxury-shadow max-w-2xl mx-auto hover-scale">
        <h3 className="font-display font-bold text-2xl text-clay-800 mb-4">
          {language === 'fr' ? 'Rejoignez nos Clientes Satisfaites' : 'Join Our Satisfied Customers'}
        </h3>
        <p className="elegant-text text-clay-600 mb-6 text-lg">
          {language === 'fr' 
            ? 'Partagez votre expérience et inspirez d\'autres femmes à découvrir la beauté authentique du Maroc'
            : 'Share your experience and inspire other women to discover the authentic beauty of Morocco'
          }
        </p>
        <Button className="copper-gradient text-white px-8 py-3 rounded-full font-medium tracking-wide border-0 hover-scale">
          {language === 'fr' ? 'Laisser un Avis' : 'Leave a Review'}
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCTA;
