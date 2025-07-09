
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LanguageDropdown from '@/components/LanguageDropdown';
import MobileSearch from '@/components/MobileSearch';
import HeaderTopBar from '@/components/HeaderTopBar';
import HeaderLogo from '@/components/HeaderLogo';
import HeaderNavigation from '@/components/HeaderNavigation';
import HeaderActions from '@/components/HeaderActions';
import HeaderMobileMenu from '@/components/HeaderMobileMenu';
import StickyTopBanner from '@/components/StickyTopBanner';
import LuxuryMobileMenu from '@/components/navigation/LuxuryMobileMenu';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

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
      <StickyTopBanner />
      <header className={`fixed top-10 left-0 right-0 z-50 w-full transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-amber-100/30' 
          : 'bg-transparent'
      }`}>
        {/* Luxury Main Header */}
        <div className="w-full px-4 lg:px-8 py-3 lg:py-4">
          <div className="w-full flex items-center justify-between h-12 lg:h-16">
            {/* Logo - Enhanced with luxury styling, positioned on far left for mobile */}
            <div className="flex items-center flex-shrink-0 order-1 lg:order-none">
              <HeaderLogo />
            </div>

            {/* Desktop Navigation - Simplified and elegant */}
            <div className="hidden lg:flex items-center h-full flex-1 justify-center mx-12">
              <HeaderNavigation />
            </div>

            {/* Right Side Actions - Refined */}
            <div className="flex items-center space-x-3 lg:space-x-4 order-2 lg:order-none">
              {/* Desktop Language Dropdown */}
              <div className="hidden lg:block">
                <LanguageDropdown />
              </div>

              {/* Desktop Action Icons */}
              <div className="hidden lg:flex">
                <HeaderActions />
              </div>

              {/* Mobile Action Icons */}
              <div className="flex lg:hidden items-center space-x-2">
                {/* Search Icon */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowMobileSearch(true)}
                  className={`transition-all duration-500 h-11 w-11 rounded-full touch-target ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/80' 
                      : 'text-white hover:text-amber-200 hover:bg-white/20'
                  }`}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>

                {/* Cart Icon with Badge */}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-all duration-500 h-11 w-11 rounded-full relative touch-target ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/80' 
                      : 'text-white hover:text-amber-200 hover:bg-white/20'
                  }`}
                  aria-label="Shopping cart"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-1 -right-1 bg-amber-600 text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs border-2 border-white">
                      {totalItems}
                    </Badge>
                  )}
                </Button>

                {/* Mobile Hamburger Menu - Luxury styling */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`transition-all duration-500 h-11 w-11 rounded-full touch-target ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/80' 
                      : 'text-white hover:text-amber-200 hover:bg-white/20'
                  }`}
                  aria-label="Toggle menu"
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Mobile Menu */}
        <div className="lg:hidden">
          <div id="luxury-mobile-menu-placeholder" />
        </div>
      </header>

      {/* Mobile Search Modal */}
      <MobileSearch 
        isOpen={showMobileSearch} 
        onClose={() => setShowMobileSearch(false)} 
      />

      {/* Luxury Mobile Navigation */}
      <LuxuryMobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
