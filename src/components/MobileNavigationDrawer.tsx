import { useState, useEffect } from 'react';
import { X, Search, ShoppingBag, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import LanguageDropdown from '@/components/LanguageDropdown';

interface MobileNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigationDrawer = ({ isOpen, onClose }: MobileNavigationDrawerProps) => {
  const { language } = useLanguage();
  const { totalItems } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      setTimeout(() => setIsAnimating(false), 300);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    {
      name: language === 'fr' ? 'Céramiques' : 'Ceramics',
      href: '/categories/ceramiques',
      hasSubmenu: true
    },
    {
      name: language === 'fr' ? 'Collections' : 'Collections',
      href: '/collections',
      hasSubmenu: true
    },
    {
      name: language === 'fr' ? 'Notre Histoire' : 'Our Story',
      href: '/notre-heritage'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];

  const handleMenuItemClick = (href: string) => {
    // Navigate to the page
    window.location.href = href;
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop with darkening overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-300 ease-out ${
          isOpen ? 'bg-opacity-40' : 'bg-opacity-0'
        }`}
        onClick={handleBackdropClick}
      />
      
      {/* Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[10000] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="text-xl font-serif text-stone-800">
            {language === 'fr' ? 'Menu' : 'Menu'}
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-stone-600 hover:text-stone-800 hover:bg-stone-100"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search bar */}
        <div className="p-6 border-b border-stone-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder={language === 'fr' ? 'Rechercher...' : 'Search...'}
              className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-sm placeholder:text-stone-400 focus:outline-none focus:border-stone-300 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-6 py-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMenuItemClick(item.href)}
                  className="flex items-center justify-between w-full py-4 px-4 text-left text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 group touch-target"
                >
                  <span className="font-light text-base tracking-wide">{item.name}</span>
                  {item.hasSubmenu && (
                    <ChevronRight className="h-4 w-4 text-stone-400 group-hover:text-stone-600 transition-colors" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Actions */}
        <div className="p-6 border-t border-stone-100 space-y-4">
          {/* Quick Actions */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full text-stone-600 hover:text-stone-800 hover:bg-stone-100 touch-target"
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full text-stone-600 hover:text-stone-800 hover:bg-stone-100 relative touch-target"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <div className="flex-1 flex justify-end">
              <LanguageDropdown />
            </div>
          </div>

          {/* Brand tagline */}
          <div className="text-center">
            <p className="text-xs text-stone-500 font-light tracking-wide">
              {language === 'fr' 
                ? 'Artisanat marocain authentique' 
                : 'Authentic Moroccan craftsmanship'
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigationDrawer;