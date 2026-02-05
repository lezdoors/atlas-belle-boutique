import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, ShoppingBag } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/contexts/CartContext';
import CartSidebar from '@/components/cart/CartSidebar';
import ShopMegaMenu from './ShopMegaMenu';

const MaisonChapuisHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const { user } = useAuth();
  const { totalItems } = useCart();

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar */}
        <div className="bg-stone-50 text-stone-600 text-xs py-2">
          <div className="text-center font-light tracking-wide">
            Free shipping on all orders over €150
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`bg-white transition-transform duration-300 relative ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="w-full px-6 lg:px-8">
            <div className="flex items-center justify-center h-16 gap-24">

              {/* Navigation - Left */}
              <nav className="hidden lg:flex items-center space-x-8">
                {/* Shop with Mega Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsShopMenuOpen(true)}
                  onMouseLeave={() => setIsShopMenuOpen(false)}
                >
                  <button className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors">
                    Shop
                  </button>
                  <ShopMegaMenu
                    isOpen={isShopMenuOpen}
                    onClose={() => setIsShopMenuOpen(false)}
                  />
                </div>

                {/* Collections */}
                <Link
                  to="/collections/nouveautes"
                  className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors"
                >
                  Collections
                </Link>

                {/* Heritage */}
                <Link
                  to="/notre-heritage"
                  className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors"
                >
                  Heritage
                </Link>

                {/* Journal */}
                <Link
                  to="/blog"
                  className="text-sm font-light text-stone-700 hover:text-stone-900 transition-colors"
                >
                  Journal
                </Link>
              </nav>

              {/* Center - Logo */}
              <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
                <Link to="/" className="text-2xl font-serif text-stone-900 tracking-tight">
                  Maison Chapuis
                </Link>
              </div>

              {/* Right side - Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-6 ml-auto">
                <button className="text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>

                <Link to={user ? "/dashboard" : "/auth"} className="text-stone-600 hover:text-stone-900 transition-colors">
                  <User className="h-4 w-4" />
                </Link>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Button and Actions */}
              <div className="flex lg:hidden items-center space-x-4 ml-auto">
                <button className="text-stone-600 hover:text-stone-900 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-stone-200 bg-white">
                <nav className="py-6 px-4">
                  <div className="space-y-6">
                    {/* Shop Section */}
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone-400 mb-3 font-serif">
                        Shop
                      </div>
                      <div className="space-y-3 pl-4">
                        <Link to="/categories/tagines" className="block text-base font-light text-stone-700" onClick={() => setIsMobileMenuOpen(false)}>
                          Tagines
                        </Link>
                        <Link to="/categories/assiettes" className="block text-base font-light text-stone-700" onClick={() => setIsMobileMenuOpen(false)}>
                          Plates
                        </Link>
                        <Link to="/categories/verres-the" className="block text-base font-light text-stone-700" onClick={() => setIsMobileMenuOpen(false)}>
                          Glasses
                        </Link>
                        <Link to="/categories/services" className="block text-base font-light text-stone-700" onClick={() => setIsMobileMenuOpen(false)}>
                          Serving
                        </Link>
                      </div>
                    </div>

                    <Link to="/collections/nouveautes" className="block text-lg font-light text-stone-700 hover:text-stone-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Collections
                    </Link>

                    <Link to="/notre-heritage" className="block text-lg font-light text-stone-700 hover:text-stone-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Heritage
                    </Link>

                    <Link to="/blog" className="block text-lg font-light text-stone-700 hover:text-stone-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Journal
                    </Link>

                    <div className="border-t border-stone-200 pt-6">
                      <Link
                        to={user ? "/dashboard" : "/auth"}
                        className="block text-lg font-light text-stone-700 hover:text-stone-900 transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Account
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default MaisonChapuisHeader;
