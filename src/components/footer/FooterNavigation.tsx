
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FooterNavigation = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
        {language === 'fr' ? 'Navigation' : 'Navigation'}
      </h4>
      <ul className="space-y-3">
        {[
          { name: language === 'fr' ? 'Boutique' : 'Shop', href: '/boutique' },
          { name: language === 'fr' ? 'Régions' : 'Regions', href: '/regions' },
          { name: language === 'fr' ? 'Rituels' : 'Rituals', href: '/rituels' },
          { name: language === 'fr' ? 'Ingrédients' : 'Ingredients', href: '/ingredients' },
          { name: language === 'fr' ? 'À propos' : 'About', href: '/a-propos' }
        ].map((item) => (
          <li key={item.name}>
            <Link to={item.href} className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigation;
