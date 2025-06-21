
import { User, ShoppingCart, Search as SearchIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import LanguageDropdown from '@/components/LanguageDropdown';

interface HeaderActionsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setShowMobileSearch: (show: boolean) => void;
  handleSearch: (query: string) => void;
}

const HeaderActionsProps: React.FC<HeaderActionsProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  setShowMobileSearch,
  handleSearch
}) => {
  return (
    <>
      {/* Desktop Search Bar & Language Dropdown */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <SearchBar onSearch={handleSearch} className="w-48 lg:w-64" />
        <LanguageDropdown />
      </div>

      {/* Action Icons - Enhanced mobile tap targets */}
      <div className="flex items-center space-x-2">
        {/* Mobile Search Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden h-10 w-10 hover:bg-copper-50 transition-colors"
          onClick={() => setShowMobileSearch(true)}
        >
          <SearchIcon className="h-5 w-5 text-clay-700" />
        </Button>

        {/* User Account Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="hidden sm:flex h-10 w-10 hover:bg-copper-50 transition-colors"
        >
          <User className="h-5 w-5 text-clay-700" />
        </Button>
        
        {/* Shopping Cart Button with enhanced styling */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-10 w-10 hover:bg-copper-50 transition-colors"
        >
          <ShoppingCart className="h-5 w-5 text-clay-700" />
          <span className="absolute -top-1 -right-1 bg-copper-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-[11px] font-medium luxury-shadow">
            0
          </span>
        </Button>

        {/* Mobile Menu Button with enhanced animation */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-10 w-10 ml-2 hover:bg-copper-50 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative">
            <Menu className={`h-5 w-5 text-clay-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
            <X className={`h-5 w-5 text-clay-700 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`} />
          </div>
        </Button>
      </div>
    </>
  );
};

export default HeaderActionsProps;
