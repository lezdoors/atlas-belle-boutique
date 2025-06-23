
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageDropdown from '@/components/LanguageDropdown';
import EnhancedNewsletterModal from '@/components/EnhancedNewsletterModal';
import MobileSearch from '@/components/MobileSearch';
import HeaderTopBar from '@/components/HeaderTopBar';
import HeaderLogo from '@/components/HeaderLogo';
import HeaderNavigation from '@/components/HeaderNavigation';
import HeaderActions from '@/components/HeaderActions';
import HeaderMobileMenu from '@/components/HeaderMobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Enhanced scroll detection for luxury header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show newsletter modal only once per session
  useEffect(() => {
    const hasShownModal = sessionStorage.getItem('newsletter-modal-shown');
    
    if (!hasShownModal) {
      const timer = setTimeout(() => {
        setShowNewsletterModal(true);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-amber-100/50' 
          : 'bg-white/95 backdrop-blur-md'
      }`}>
        {/* Top Bar - Hide on scroll for cleaner look */}
        <div className={`hidden md:block transition-all duration-500 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <HeaderTopBar />
        </div>

        {/* Main Header - Luxury layout with generous spacing */}
        <div className="w-full px-6 lg:px-8 py-4">
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <HeaderLogo />
            </div>

            {/* Desktop Navigation - Centered with elegant spacing */}
            <div className="hidden lg:flex items-center h-full flex-1 justify-center mx-12">
              <HeaderNavigation />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Desktop Language Dropdown */}
              <div className="hidden lg:block">
                <LanguageDropdown />
              </div>

              {/* Action Icons */}
              <HeaderActions />

              {/* Mobile Hamburger Menu */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-clay-800 hover:text-amber-600 transition-all duration-300 h-11 w-11 rounded-full hover:bg-amber-50"
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

      {/* Newsletter Modal */}
      <EnhancedNewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </>
  );
};

export default Header;
