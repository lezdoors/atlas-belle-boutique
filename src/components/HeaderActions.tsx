
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

const HeaderActions: React.FC<HeaderActionsProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  setShowMobileSearch,
  handleSearch
}) => {
  return (
    <>
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
    </>
  );
};

export default HeaderActions;
