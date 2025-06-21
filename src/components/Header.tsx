
import { useState, useEffect } from 'react';
import LanguageDropdown from '@/components/LanguageDropdown';
import NewsletterModal from '@/components/NewsletterModal';
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

  // Show newsletter modal only once per session
  useEffect(() => {
    const hasShownModal = sessionStorage.getItem('newsletter-modal-shown');
    
    if (!hasShownModal) {
      const timer = setTimeout(() => {
        setShowNewsletterModal(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Here you would implement the actual search functionality
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand-200 luxury-shadow">
        {/* Top Bar */}
        <HeaderTopBar />

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - More responsive */}
            <HeaderLogo />

            {/* Desktop Navigation */}
            <HeaderNavigation />

            {/* Action Icons */}
            <HeaderActions 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              setShowMobileSearch={setShowMobileSearch}
              handleSearch={handleSearch}
            />
          </div>

          {/* Mobile Language Dropdown - Only visible when menu is closed */}
          <div className="md:hidden mt-4 flex justify-center">
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

      {/* Newsletter Modal - Only shows once per session */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </>
  );
};

export default Header;
