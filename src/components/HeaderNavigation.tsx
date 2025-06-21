
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import CulturalNavigation from '@/components/CulturalNavigation';

const HeaderNavigation = () => {
  const { language } = useLanguage();

  const categories = language === 'fr' 
    ? [
        { name: 'Boutique', href: '/boutique' },
        { name: 'Régions', href: '/regions' },
        { name: 'Rituels', href: '/rituels' },
        { name: 'Ingrédients', href: '/ingredients' },
        { name: 'À propos', href: '/a-propos' },
      ]
    : [
        { name: 'Shop', href: '/boutique' },
        { name: 'Regions', href: '/regions' },
        { name: 'Rituals', href: '/rituels' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'About', href: '/a-propos' },
      ];

  return (
    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
      <CulturalNavigation />
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.href}
          className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm xl:text-base"
        >
          {category.name}
        </Link>
      ))}
      <Link
        to="/contact"
        className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm xl:text-base"
      >
        {language === 'fr' ? 'Contact' : 'Contact'}
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
