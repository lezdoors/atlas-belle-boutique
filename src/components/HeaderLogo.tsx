
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import PerleAtlasOfficialLogo from './PerleAtlasOfficialLogo';

const HeaderLogo = () => {
  const { language } = useLanguage();
  
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <PerleAtlasOfficialLogo 
          size="sm"
          variant="header"
          className="filter drop-shadow-sm max-w-[120px] lg:max-w-[140px]"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
