
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const HeaderNavigation = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Enhanced scroll detection for color inversion
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      label: 'Collections'
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
      <ul className="flex items-center space-x-8 lg:space-x-12 h-full">
        {navItems.map((item) => (
          <li key={item.href} className="h-full flex items-center">
            <Link
              to={item.href}
              className={`h-full flex items-center text-sm lg:text-base font-light tracking-wide transition-all duration-700 relative group px-2 py-1 ${
                location.pathname === item.href 
                  ? `${isScrolled ? 'text-amber-700' : 'text-amber-200'} font-medium` 
                  : `${isScrolled ? 'text-clay-900 hover:text-amber-700' : 'text-white hover:text-amber-200'}`
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r transition-all duration-300 transform origin-center ${
                isScrolled 
                  ? 'from-amber-400 to-amber-600' 
                  : 'from-amber-200 to-amber-300'
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
