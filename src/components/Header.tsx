
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

  // Enhanced scroll detection for transparent header overlay
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Increased threshold for better effect
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
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-amber-100/50' 
          : 'bg-transparent backdrop-blur-sm'
      }`}>
        {/* Top Bar - Hide on all devices for clean overlay effect */}
        <div className="hidden">
          <HeaderTopBar />
        </div>

        {/* Main Header - Transparent overlay design */}
        <div className="w-full px-4 lg:px-6 py-4 lg:py-5">
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <HeaderLogo />
            </div>

            {/* Desktop Navigation - Centered with elegant spacing */}
            <div className="hidden lg:flex items-center h-full flex-1 justify-center mx-8">
              <HeaderNavigation />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Desktop Language Dropdown - Remove French flag styling */}
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
                  className={`transition-all duration-300 h-10 w-10 rounded-full hover:bg-white/20 ml-2 ${
                    isScrolled ? 'text-clay-700 hover:text-amber-600' : 'text-white hover:text-amber-200'
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

      {/* Newsletter Modal */}
      <EnhancedNewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </>
  );
};

export default Header;
