
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageDropdown from '@/components/LanguageDropdown';

interface HeaderMobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const HeaderMobileMenu = ({ isMenuOpen, setIsMenuOpen }: HeaderMobileMenuProps) => {
  const { language } = useLanguage();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const catalogCategories = [
    {
      title: language === 'fr' ? 'ÉLÉMENTS ARCHITECTURAUX' : 'ARCHITECTURAL ELEMENTS',
      id: 'architectural',
      items: [
        { name: language === 'fr' ? 'Boiseries, Écrans & Panneaux' : 'Woodwork, Screens & Panels', href: '/catalog/woodwork', available: true },
        { name: language === 'fr' ? 'Ferronnerie' : 'Metalwork', href: '/catalog/metalwork', available: true },
        { name: language === 'fr' ? 'Portes & Fenêtres Marocaines' : 'Moroccan Doors & Windows', href: '/catalog/doors-windows', available: true },
        { name: language === 'fr' ? 'Carreaux de Mosaïque' : 'Mosaic Tile', href: '/catalog/mosaic-tile', available: true }
      ]
    },
    {
      title: language === 'fr' ? 'ÉCLAIRAGE' : 'LIGHTING',  
      id: 'lighting',
      items: [
        { name: language === 'fr' ? 'Appliques Murales' : 'Wall Sconces', href: '/catalog/wall-sconces', available: true },
        { name: language === 'fr' ? 'Éclairage Extérieur' : 'Outdoor Lights', href: '/catalog/outdoor-lights', available: true },
        { name: language === 'fr' ? 'Suspensions' : 'Pendant Lights', href: '/catalog/pendant-lights', available: true },
        { name: language === 'fr' ? 'Lustres' : 'Chandeliers', href: '/catalog/chandeliers', available: true }
      ]
    },
    {
      title: language === 'fr' ? 'MOBILIER' : 'FURNITURE',
      id: 'furniture', 
      items: [
        { name: language === 'fr' ? 'Tables' : 'Tables', href: '/catalog/tables', available: true },
        { name: language === 'fr' ? 'Commodes & Armoires' : 'Dressers & Cabinets', href: '/catalog/storage', available: true },
        { name: language === 'fr' ? 'Chaises / Lits de Repos' : 'Chairs / Daybeds', href: '/catalog/seating', available: true }
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const mainNavItems = [
    { href: '/', label: language === 'fr' ? 'Accueil' : 'Home' },
    { href: '/heritage', label: language === 'fr' ? 'Notre Héritage' : 'Our Heritage' },
    { href: '/contact', label: 'Contact' }
  ];

  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-copper-100">
          <h2 className="font-display font-semibold text-xl text-clay-800">
            {language === 'fr' ? 'Menu' : 'Menu'}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            className="text-clay-600 hover:text-clay-800"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Navigation Content */}
        <div className="p-6 space-y-6">
          {/* Main Navigation */}
          <div className="space-y-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-clay-700 hover:text-copper-600 font-serif text-lg py-2 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Catalog Section */}
          <div className="border-t border-copper-100 pt-6">
            <h3 className="font-display font-semibold text-clay-800 text-lg mb-4">
              {language === 'fr' ? 'Catalogue' : 'Catalog'}
            </h3>
            
            <div className="space-y-2">
              {catalogCategories.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between py-3 text-left text-clay-700 hover:text-copper-600 font-serif transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">{category.title}</span>
                    {expandedCategory === category.id ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedCategory === category.id && (
                    <div className="pl-4 pb-2 space-y-2 border-l-2 border-copper-100">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.available ? (
                            <Link
                              to={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-clay-600 hover:text-copper-600 font-serif text-sm py-1 transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <span className="block text-clay-400 font-serif text-sm py-1">
                              {item.name}
                              <span className="ml-2 text-xs text-clay-400">
                                {language === 'fr' ? '(Bientôt)' : '(Coming Soon)'}
                              </span>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div className="border-t border-copper-100 pt-6">
            <div className="mb-4">
              <span className="font-display font-medium text-clay-800 text-sm">
                {language === 'fr' ? 'Langue' : 'Language'}
              </span>
            </div>
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
