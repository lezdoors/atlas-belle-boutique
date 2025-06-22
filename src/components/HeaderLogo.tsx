
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import PerleAtlasLuxuryLogo from './PerleAtlasLuxuryLogo';

const HeaderLogo = () => {
  const { language } = useLanguage();
  
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <PerleAtlasLuxuryLogo 
          size="md"
          variant="compact"
          withBackground={false}
          className="filter drop-shadow-sm h-12 md:h-16"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
