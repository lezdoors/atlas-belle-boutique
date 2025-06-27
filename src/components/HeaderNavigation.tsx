
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const HeaderNavigation = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Refined luxury navigation - removed duplicates
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
      href: '/heritage', 
      label: language === 'fr' ? 'Notre Héritage' : 'Our Heritage' 
    },
    { 
      href: '/contact', 
      label: 'Contact' 
    }
  ];

  return (
    <nav className="flex items-center justify-center h-full">
      <ul className="flex items-center space-x-8 lg:space-x-12 h-full">
        {navItems.map((item) => (
          <li key={item.href} className="h-full flex items-center">
            <Link
              to={item.href}
              className={`h-full flex items-center text-sm lg:text-base font-light tracking-wide transition-all duration-500 relative group px-3 py-2 font-serif ${
                location.pathname === item.href 
                  ? `${isScrolled ? 'text-copper-700' : 'text-copper-200'} font-medium` 
                  : `${isScrolled ? 'text-clay-800 hover:text-copper-700' : 'text-white hover:text-copper-200'}`
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r transition-all duration-500 transform origin-center ${
                isScrolled 
                  ? 'from-copper-500 to-copper-700' 
                  : 'from-copper-200 to-copper-300'
              } ${
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
