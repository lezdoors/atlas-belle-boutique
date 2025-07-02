
import { Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LoyaltyHero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative bg-white section-padding">
      <div className="container-refined">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <div className="mb-8">
            <Crown className="h-12 w-12 text-stone-500 mx-auto mb-6" />
          </div>
          <h1 className="heading-display text-5xl md:text-6xl text-foreground mb-8">
            {language === 'fr' ? 'Cercle Perle' : 'Pearl Circle'}
          </h1>
          <p className="body-text text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
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
