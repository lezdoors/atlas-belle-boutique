
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageDropdown = () => {
  const { language, currency, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'fr' | 'en') => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-amber-200 hover:bg-amber-50 text-sand-700 bg-white"
        >
          <Globe className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Français' : 'English'} ({currency})
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white border border-sand-200 shadow-lg z-50"
      >
        <DropdownMenuItem
          onClick={() => handleLanguageChange('fr')}
          className={`cursor-pointer hover:bg-amber-50 ${
            language === 'fr' ? 'bg-amber-50 text-amber-700' : ''
          }`}
        >
          🇫🇷 Français (EUR)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en')}
          className={`cursor-pointer hover:bg-amber-50 ${
            language === 'en' ? 'bg-amber-50 text-amber-700' : ''
          }`}
        >
          🇺🇸 English (USD)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
