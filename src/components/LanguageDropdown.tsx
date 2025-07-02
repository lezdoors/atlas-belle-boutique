
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
          className="border-black/20 hover:bg-black/5 text-black bg-white rounded-full font-light"
        >
          <Globe className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'FR' : 'EN'} ({currency})
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white border border-black/10 shadow-lg z-50 rounded-xl"
      >
        <DropdownMenuItem
          onClick={() => handleLanguageChange('fr')}
          className={`cursor-pointer hover:bg-black/5 rounded-lg ${
            language === 'fr' ? 'bg-black/5 text-black' : ''
          }`}
        >
          🇫🇷 Français (EUR)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange('en')}
          className={`cursor-pointer hover:bg-black/5 rounded-lg ${
            language === 'en' ? 'bg-black/5 text-black' : ''
          }`}
        >
          🇺🇸 English (USD)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
