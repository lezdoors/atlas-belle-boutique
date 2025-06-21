
import { useLanguage } from '@/contexts/LanguageContext';

const FooterServices = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
        {language === 'fr' ? 'Services' : 'Services'}
      </h4>
      <ul className="space-y-3">
        {[
          language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals',
          language === 'fr' ? 'Conseils personnalisés' : 'Personalized advice',
          language === 'fr' ? 'Livraison express' : 'Express delivery',
          language === 'fr' ? 'Échantillons gratuits' : 'Free samples',
          language === 'fr' ? 'Programme fidélité' : 'Loyalty program'
        ].map((item) => (
          <li key={item}>
            <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterServices;
