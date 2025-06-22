
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import PerleAtlasRefinedLogo from './PerleAtlasRefinedLogo';

const HeaderLogo = () => {
  const { language } = useLanguage();
  
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <PerleAtlasRefinedLogo 
          size="md"
          variant="header"
          withBackground={false}
          className="filter drop-shadow-sm bg-transparent"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
