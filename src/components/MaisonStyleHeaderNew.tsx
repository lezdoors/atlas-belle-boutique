import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, User, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TajineIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 12c0-1.5 1-3 3-3h12c2 0 3 1.5 3 3v6c0 1.5-1 3-3 3H6c-2 0-3-1.5-3-3v-6z"/>
    <path d="M8 9V6c0-1.5 1-2.5 2.5-2.5h3c1.5 0 2.5 1 2.5 2.5v3"/>
    <circle cx="12" cy="4" r="1"/>
  </svg>
);

const PerleAtlasLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 280 40" fill="none">
    <text x="0" y="28" fontFamily="serif" fontSize="24" fontWeight="400" fill="currentColor" letterSpacing="0.5">
      Perle de l'Atlas
    </text>
    <circle cx="260" cy="20" r="8" fill="#D4AF37" opacity="0.7"/>
    <circle cx="268" cy="15" r="4" fill="#B8860B" opacity="0.5"/>
  </svg>
);

const MaisonStyleHeaderNew = () => {
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
    { name: 'Shop All', href: '/shop' },
    { name: 'Tableware', href: '/tableware' },
    { name: 'Home Decor', href: '/decor' },
    { name: 'Gifts', href: '/gifts' },
    { name: 'Story', href: '/story' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-stone-100 text-stone-700 text-sm py-2">
        <div className="text-center font-light tracking-wide">
          Free Shipping for U.S. Orders Over $150 (Shipped from Morocco)
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`bg-white border-b border-stone-200 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full px-6 lg:px-12 max-w-none">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-20">
              
              {/* Left side - empty for balance */}
              <div className="flex-1 lg:flex hidden">
              </div>

              {/* Center - Logo */}
              <div className="flex items-center justify-center flex-1 lg:flex-initial">
                <a href="/" className="flex items-center">
                  <PerleAtlasLogo className="h-8 text-stone-800 hover:text-stone-600 transition-colors" />
                </a>
              </div>

              {/* Right side - Desktop Actions */}
              <div className="hidden lg:flex items-center justify-end space-x-6 flex-1">
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <a href="/login" className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <User className="h-4 w-4" />
                </a>
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <TajineIcon className="h-5 w-5" />
                </button>
                
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="text-xs text-stone-600 hover:text-stone-900 transition-colors px-2 py-1 border border-stone-200 rounded"
                >
                  {language === 'fr' ? 'EN' : 'FR'}
                </button>
              </div>

              {/* Mobile Menu Button and Actions */}
              <div className="flex lg:hidden items-center space-x-3">
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
                  <TajineIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Desktop Navigation - Below Logo */}
            <div className="hidden lg:block border-t border-stone-100">
              <nav className="py-4">
                <div className="flex items-center justify-center space-x-12">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-stone-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-stone-200 bg-white">
                <nav className="py-6 space-y-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors px-4 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="border-t border-stone-200 pt-6 px-4">
                    <a href="/login" className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2">
                      Account
                    </a>
                    <button
                      onClick={toggleLanguage}
                      className="block text-base font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
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
    </div>
  );
};

export default MaisonStyleHeaderNew;