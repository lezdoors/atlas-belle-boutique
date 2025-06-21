
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
      <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
        <SearchBar onSearch={handleSearch} className="w-44 lg:w-64" />
        <LanguageDropdown />
      </div>

      {/* Action Icons - Better mobile spacing */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        {/* Mobile Search Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden h-9 w-9"
          onClick={() => setShowMobileSearch(true)}
        >
          <SearchIcon className="h-4 w-4 text-sand-700" />
        </Button>

        <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9">
          <User className="h-4 w-4 text-sand-700" />
        </Button>
        
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <ShoppingCart className="h-4 w-4 text-sand-700" />
          <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
            0
          </span>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-9 w-9 ml-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-4 w-4 text-sand-700" />
          ) : (
            <Menu className="h-4 w-4 text-sand-700" />
          )}
        </Button>
      </div>
    </>
  );
};

export default HeaderActions;
