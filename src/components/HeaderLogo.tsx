
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import PerleAtlasSVGLogo from './PerleAtlasSVGLogo';

const HeaderLogo = () => {
  const { language } = useLanguage();
  
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <PerleAtlasSVGLogo 
          size="md"
          className="filter drop-shadow-sm"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
