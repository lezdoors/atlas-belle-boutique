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
      <div className="container-refined">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Left Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.slice(0, 3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Centered Logo */}
          <div className="flex-1 lg:flex-none flex justify-center">
            <a href="/" className="flex items-center">
              <img
                src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Perle%20(Website)-4.png"
                alt="Perle de l'Atlas"
                className="h-8 lg:h-10 w-auto"
              />
            </a>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.slice(3).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
            
            {/* Account & Actions */}
            <div className="flex items-center space-x-4 ml-6">
              <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                <ShoppingBag className="h-4 w-4" />
              </button>
              <a href="/auth" className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
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
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <Search className="h-4 w-4" />
            </button>
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <ShoppingBag className="h-4 w-4" />
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
                <a href="/auth" className="block text-sm font-light text-stone-700 hover:text-stone-900 transition-colors py-2">
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
    </header>
  );
};

export default MaisonStyleHeader;