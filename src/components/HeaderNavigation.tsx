
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeaderNavigation = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const navItems = [
    { 
      href: '/', 
      label: language === 'fr' ? 'Accueil' : 'Home' 
    },
    { 
      href: '/boutique', 
      label: language === 'fr' ? 'Boutique' : 'Shop' 
    },
    { 
      href: '/collections', 
      label: language === 'fr' ? 'Collections' : 'Collections' 
    },
    { 
      href: '/about', 
      label: language === 'fr' ? 'Notre Mission' : 'Our Mission' 
    },
    { 
      href: '/testimonials', 
      label: language === 'fr' ? 'Témoignages' : 'Testimonials' 
    },
    { 
      href: '/contact', 
      label: 'Contact' 
    }
  ];

  return (
    <nav className="flex items-center justify-center h-full">
      <ul className="flex items-center space-x-12 h-full">
        {navItems.map((item) => (
          <li key={item.href} className="h-full flex items-center">
            <Link
              to={item.href}
              className={`h-full flex items-center text-sm font-normal font-sans tracking-wider transition-all duration-300 relative group px-1 ${
                location.pathname === item.href ? 'text-amber-600' : 'text-clay-800 hover:text-amber-600'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 ${
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
