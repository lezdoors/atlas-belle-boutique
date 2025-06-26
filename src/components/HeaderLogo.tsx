
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  const { language } = useLanguage();
  
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <img 
          src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//atlas-logo.png"
          alt="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
          className="h-8 w-auto lg:h-10 object-contain filter drop-shadow-sm"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
