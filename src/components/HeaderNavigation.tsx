
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeaderNavigation = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const navItems = [
    { 
      href: '/boutique', 
      label: language === 'fr' ? 'Boutique' : 'Shop' 
    },
    { 
      href: '/rituels', 
      label: language === 'fr' ? 'Rituels' : 'Rituals' 
    },
    { 
      href: '/programme-fidelite', 
      label: language === 'fr' ? 'Programme Fidélité' : 'Loyalty Program' 
    },
    { 
      href: '/regions', 
      label: language === 'fr' ? 'Régions' : 'Regions' 
    },
    { 
      href: '/ingredients', 
      label: language === 'fr' ? 'Ingrédients' : 'Ingredients' 
    },
    { 
      href: '/about', 
      label: language === 'fr' ? 'À propos' : 'About' 
    },
    { 
      href: '/contact', 
      label: 'Contact' 
    }
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`text-sm font-medium transition-colors hover:text-copper-600 relative group ${
            location.pathname === item.href ? 'text-copper-600' : 'text-clay-700'
          }`}
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-copper-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNavigation;
