
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageDropdown from '@/components/LanguageDropdown';
import MobileSearch from '@/components/MobileSearch';
import HeaderTopBar from '@/components/HeaderTopBar';
import HeaderLogo from '@/components/HeaderLogo';
import HeaderNavigation from '@/components/HeaderNavigation';
import HeaderActions from '@/components/HeaderActions';
import HeaderMobileMenu from '@/components/HeaderMobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Enhanced scroll detection for luxury transparent header transitions
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-amber-100/30' 
          : 'bg-transparent'
      }`}>
        {/* Luxury Main Header */}
        <div className="w-full px-4 lg:px-8 py-3 lg:py-4">
          <div className="w-full flex items-center justify-between h-12 lg:h-16">
            {/* Logo - Enhanced with luxury styling */}
            <div className="flex items-center flex-shrink-0">
              <HeaderLogo />
            </div>

            {/* Desktop Navigation - Simplified and elegant */}
            <div className="hidden lg:flex items-center h-full flex-1 justify-center mx-12">
              <HeaderNavigation />
            </div>

            {/* Right Side Actions - Refined */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Desktop Language Dropdown */}
              <div className="hidden lg:block">
                <LanguageDropdown />
              </div>

              {/* Action Icons */}
              <HeaderActions />

              {/* Mobile Hamburger Menu - Luxury styling */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`transition-all duration-500 h-11 w-11 rounded-full ml-2 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/80' 
                      : 'text-white hover:text-amber-200 hover:bg-white/20'
                  }`}
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <HeaderMobileMenu 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </header>

      {/* Mobile Search Modal */}
      <MobileSearch 
        isOpen={showMobileSearch} 
        onClose={() => setShowMobileSearch(false)} 
      />
    </>
  );
};

export default Header;
