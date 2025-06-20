
import { useState, useEffect } from 'react';
import { User, ShoppingCart, Menu, X, Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageDropdown from '@/components/LanguageDropdown';
import SearchBar from '@/components/SearchBar';
import NewsletterModal from '@/components/NewsletterModal';
import MobileSearch from '@/components/MobileSearch';
import CulturalNavigation from '@/components/CulturalNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { language } = useLanguage();

  // Show newsletter modal after 5 seconds (for demo purposes)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletterModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const categories = language === 'fr' 
    ? [
        { name: 'Parfums', href: '/parfums' },
        { name: 'Huiles', href: '/huiles' },
        { name: 'Crèmes', href: '/cremes' },
        { name: 'Masques', href: '/masques' },
        { name: 'Nouveautés', href: '/nouveautes' },
      ]
    : [
        { name: 'Perfumes', href: '/perfumes' },
        { name: 'Oils', href: '/oils' },
        { name: 'Creams', href: '/creams' },
        { name: 'Masks', href: '/masks' },
        { name: 'New Arrivals', href: '/new-arrivals' },
      ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Here you would implement the actual search functionality
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sand-200 luxury-shadow">
        {/* Top Bar */}
        <div className="bg-sand-50 text-sand-800 text-sm py-2">
          <div className="container mx-auto px-4 text-center">
            {language === 'fr' 
              ? 'Livraison gratuite à partir de 150€ • Échantillons offerts'
              : 'Free shipping from $150 • Free samples included'
            }
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - More responsive */}
            <div className="flex items-center flex-shrink-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-700">
                Perle d'Atlas
              </h1>
              <div className="hidden md:block ml-2 text-xs text-sand-600 font-light">
                {language === 'fr' 
                  ? 'La beauté ancestrale du Maroc'
                  : 'Ancestral beauty of Morocco'
                }
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <CulturalNavigation />
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {category.name}
                </a>
              ))}
              <a
                href="/rituels"
                className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals'}
              </a>
            </nav>

            {/* Desktop Search Bar & Language Dropdown */}
            <div className="hidden md:flex items-center space-x-4">
              <SearchBar onSearch={handleSearch} className="w-48 lg:w-64" />
              <LanguageDropdown />
            </div>

            {/* Action Icons - More touch-friendly */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile Search Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden h-10 w-10"
                onClick={() => setShowMobileSearch(true)}
              >
                <SearchIcon className="h-5 w-5 text-sand-700" />
              </Button>

              <Button variant="ghost" size="icon" className="hidden sm:flex h-10 w-10">
                <User className="h-5 w-5 text-sand-700" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative h-10 w-10">
                <ShoppingCart className="h-5 w-5 text-sand-700" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-10 w-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-sand-700" />
                ) : (
                  <Menu className="h-5 w-5 text-sand-700" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Language Dropdown - Only visible when menu is closed */}
          <div className="md:hidden mt-4 flex justify-center">
            <LanguageDropdown />
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-sand-200 animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-6">
                {/* Cultural Navigation for Mobile */}
                <div className="pb-4 border-b border-sand-100">
                  <CulturalNavigation />
                </div>

                {/* Main Categories */}
                <div className="space-y-4">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg border-b border-sand-100 last:border-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </a>
                  ))}
                  <a
                    href="/rituels"
                    className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg border-b border-sand-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals'}
                  </a>
                </div>

                {/* Account Section */}
                <div className="pt-6 border-t border-sand-200">
                  <a
                    href="/compte"
                    className="flex items-center text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-3 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5 mr-3" />
                    {language === 'fr' ? 'Mon compte' : 'My account'}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Search Modal */}
      <MobileSearch 
        isOpen={showMobileSearch} 
        onClose={() => setShowMobileSearch(false)} 
      />

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </>
  );
};

export default Header;
