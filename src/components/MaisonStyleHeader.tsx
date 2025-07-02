import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MaisonStyleHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const navigation = [
    { name: 'Boutique', href: '/boutique' },
    { name: 'Nos Valeurs', href: '/about' },
    { name: 'Ingrédients', href: '/ingredients' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full max-w-none px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Perle%20(Website)-4.png"
                alt="Perle de l'Atlas"
                className="h-14 lg:h-16 w-auto"
              />
            </a>
          </div>

          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Actions - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <Search className="h-4 w-4" />
            </button>
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2"/>
                <path d="M6 6h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
                <circle cx="12" cy="14" r="2"/>
              </svg>
            </button>
            <a href="/login" className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <User className="h-4 w-4" />
            </a>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-xs text-stone-600 hover:text-stone-900 transition-colors px-2 py-1 border border-stone-200 rounded"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          {/* Mobile Menu Button and Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <Search className="h-4 w-4" />
            </button>
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2"/>
                <path d="M6 6h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
                <circle cx="12" cy="14" r="2"/>
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white">
            <nav className="py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-light text-stone-700 hover:text-stone-900 transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-stone-200 pt-4 px-4">
                <a href="/login" className="block text-sm font-light text-stone-700 hover:text-stone-900 transition-colors py-2">
                  Compte
                </a>
                <button
                  onClick={toggleLanguage}
                  className="block text-sm font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                >
                  {language === 'fr' ? 'English' : 'Français'}
                </button>
              </div>
            </nav>
          </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default MaisonStyleHeader;