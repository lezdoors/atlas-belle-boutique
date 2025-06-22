
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, LogOut, Settings, Package, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const { user, signOut } = useAuth();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  };

  if (!user) {
    return (
      <Link to="/auth">
        <Button variant="ghost" size="icon" className="text-clay-700 hover:text-copper-600 transition-colors h-10 w-10">
          <User className="h-5 w-5" />
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-clay-700 hover:text-copper-600 transition-colors h-10 w-10">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-medium text-clay-800">
          {user.email}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/ma-selection" className="flex items-center cursor-pointer">
            <Heart className="mr-2 h-4 w-4" />
            {language === 'fr' ? 'Ma sélection' : 'My Selection'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/orders" className="flex items-center cursor-pointer">
            <Package className="mr-2 h-4 w-4" />
            {language === 'fr' ? 'Mes commandes' : 'My Orders'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            {language === 'fr' ? 'Profil' : 'Profile'}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} disabled={isLoading} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          {isLoading ? (language === 'fr' ? 'Déconnexion...' : 'Signing out...') : (language === 'fr' ? 'Déconnexion' : 'Sign Out')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
