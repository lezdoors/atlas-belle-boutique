
import { useLanguage } from '@/contexts/LanguageContext';

const WholesaleHero = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 bg-pearl-50">
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-clay-800 mb-6">
            {language === 'fr' ? 'Professionnels & Grossistes' : 'Professionals & Wholesalers'}
          </h1>
          <p className="hero-subtitle text-clay-600 mb-8">
            {language === 'fr'
              ? 'Rejoignez notre réseau de partenaires et offrez l\'excellence marocaine à vos clients'
              : 'Join our partner network and offer Moroccan excellence to your customers'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default WholesaleHero;
