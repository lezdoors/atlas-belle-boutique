
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
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-clay-700 hover:text-amber-600 transition-all duration-300 h-10 w-10 lg:h-11 lg:w-11 rounded-full hover:bg-amber-50/80 group"
        >
          <User className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-clay-700 hover:text-amber-600 transition-all duration-300 h-10 w-10 lg:h-11 lg:w-11 rounded-full hover:bg-amber-50/80 group"
        >
          <User className="h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-200 group-hover:scale-110" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-white/98 backdrop-blur-xl border border-amber-100/60 shadow-xl rounded-2xl p-3"
      >
        <div className="px-3 py-2 text-sm font-light text-clay-700 border-b border-amber-100/60 mb-2">
          {user.email}
        </div>
        <DropdownMenuItem asChild className="rounded-xl hover:bg-amber-50/80 transition-colors duration-200 py-3">
          <Link to="/ma-selection" className="flex items-center cursor-pointer">
            <Heart className="mr-3 h-4 w-4 text-amber-600" />
            <span className="font-light">{language === 'fr' ? 'Ma sélection' : 'My Selection'}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="rounded-xl hover:bg-amber-50/80 transition-colors duration-200 py-3">
          <Link to="/orders" className="flex items-center cursor-pointer">
            <Package className="mr-3 h-4 w-4 text-amber-600" />
            <span className="font-light">{language === 'fr' ? 'Mes commandes' : 'My Orders'}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="rounded-xl hover:bg-amber-50/80 transition-colors duration-200 py-3">
          <Link to="/profile" className="flex items-center cursor-pointer">
            <Settings className="mr-3 h-4 w-4 text-amber-600" />
            <span className="font-light">{language === 'fr' ? 'Profil' : 'Profile'}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-amber-100/60 my-2" />
        <DropdownMenuItem 
          onClick={handleSignOut} 
          disabled={isLoading} 
          className="cursor-pointer rounded-xl hover:bg-red-50/80 text-red-600 transition-colors duration-200 py-3"
        >
          <LogOut className="mr-3 h-4 w-4" />
          <span className="font-light">
            {isLoading ? (language === 'fr' ? 'Déconnexion...' : 'Signing out...') : (language === 'fr' ? 'Déconnexion' : 'Sign Out')}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
