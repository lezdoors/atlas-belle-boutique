
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
    <nav className="flex items-center justify-center h-full">
      <ul className="flex items-center space-x-8 h-full">
        {navItems.map((item) => (
          <li key={item.href} className="h-full flex items-center">
            <Link
              to={item.href}
              className={`h-full flex items-center text-sm font-medium font-serif tracking-wide transition-all duration-300 hover:text-copper-600 relative group px-2 ${
                location.pathname === item.href ? 'text-copper-600' : 'text-clay-700'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-copper-600 transition-all duration-300 ${
                location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
