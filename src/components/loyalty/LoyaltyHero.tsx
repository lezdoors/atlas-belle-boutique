
import { Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LoyaltyHero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <Crown className="h-16 w-16 text-copper-600 mx-auto mb-6" />
          <h1 className="hero-title text-clay-800 mb-6">
            {language === 'fr' ? 'Cercle Perle' : 'Pearl Circle'}
          </h1>
          <p className="hero-subtitle text-clay-600 mb-8">
            {language === 'fr' 
              ? 'Rejoignez notre cercle d\'initiés et découvrez les secrets de beauté du Maroc avec des privilèges exclusifs'
              : 'Join our circle of initiates and discover the beauty secrets of Morocco with exclusive privileges'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyHero;
