
import { useState, useEffect } from 'react';
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

  // Enhanced scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
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
      }, 8000); // Increased delay for better UX

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Here you would implement the actual search functionality
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-sand-200 luxury-shadow' 
          : 'bg-white/90 backdrop-blur-md border-b border-transparent'
      }`}>
        {/* Top Bar - Hide on scroll for cleaner look */}
        <div className={`transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          <HeaderTopBar />
        </div>

        {/* Main Header - Enhanced alignment and spacing */}
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Enhanced spacing */}
            <HeaderLogo />

            {/* Desktop Navigation - Better vertical alignment */}
            <div className="hidden lg:flex items-center h-full">
              <HeaderNavigation />
            </div>

            {/* Action Icons - Improved alignment */}
            <HeaderActions 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              setShowMobileSearch={setShowMobileSearch}
              handleSearch={handleSearch}
            />
          </div>

          {/* Mobile Language Dropdown - Only visible when menu is closed */}
          <div className={`md:hidden mt-3 flex justify-center transition-all duration-200 ${
            isMenuOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          }`}>
            <LanguageDropdown />
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
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

      {/* Enhanced Newsletter Modal */}
      <EnhancedNewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </>
  );
};

export default Header;
