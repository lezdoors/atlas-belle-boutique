
import { useState, useEffect } from 'react';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageDropdown from '@/components/LanguageDropdown';
import SearchBar from '@/components/SearchBar';
import NewsletterModal from '@/components/NewsletterModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
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
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-amber-700">
                Perle d'Atlas
              </h1>
              <div className="hidden sm:block ml-2 text-xs text-sand-600 font-light">
                {language === 'fr' 
                  ? 'La beauté ancestrale du Maroc'
                  : 'Ancestral beauty of Morocco'
                }
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium"
                >
                  {category.name}
                </a>
              ))}
              <a
                href="/rituels"
                className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals'}
              </a>
            </nav>

            {/* Search Bar & Language Dropdown */}
            <div className="hidden md:flex items-center space-x-4">
              <SearchBar onSearch={handleSearch} className="w-64" />
              <LanguageDropdown />
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5 text-sand-700" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-sand-700" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
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

          {/* Mobile Search & Language Dropdown */}
          <div className="md:hidden mt-4 space-y-4">
            <SearchBar onSearch={handleSearch} />
            <div className="flex justify-center">
              <LanguageDropdown />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-sand-200 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </a>
                ))}
                <a
                  href="/rituels"
                  className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals'}
                </a>
                <div className="pt-4 border-t border-sand-200">
                  <a
                    href="/compte"
                    className="block text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === 'fr' ? 'Mon compte' : 'My account'}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </>
  );
};

export default Header;
