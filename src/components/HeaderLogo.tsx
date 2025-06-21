
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  const { language } = useLanguage();
  
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <img 
          src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/397b8d88-7594-4433-8004-050f047a13b6.png"
          alt="Perle d'Atlas"
          className="h-10 md:h-12 w-auto object-contain"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
