
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import MegaMenu from '@/components/MegaMenu';

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

  // Updated navigation items - replacing boutique with catalog mega menu
  const navItems = [
    { 
      href: '/', 
      label: language === 'fr' ? 'Accueil' : 'Home' 
    },
    { 
      href: '/a-propos', 
      label: language === 'fr' ? 'À Propos' : 'About' 
    },
    { 
      href: '/notre-heritage', 
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
                  ? `${isScrolled ? 'text-amber-700' : 'text-amber-200'} font-medium` 
                  : `${isScrolled ? 'text-gray-800 hover:text-amber-700' : 'text-white hover:text-amber-200'}`
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r transition-all duration-500 transform origin-center ${
                isScrolled 
                  ? 'from-amber-500 to-amber-700' 
                  : 'from-amber-200 to-amber-300'
              } ${
                location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          </li>
        ))}
        
        {/* Mega Menu for Catalog */}
        <li className="h-full flex items-center">
          <MegaMenu />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
