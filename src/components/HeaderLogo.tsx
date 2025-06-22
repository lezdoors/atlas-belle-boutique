
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
      {/* Brand name with correct spelling */}
      <div className="ml-3 hidden sm:block">
        <h1 className="font-display text-xl font-bold text-clay-800 tracking-wide">
          Perle de l'Atlas
        </h1>
        <p className="text-xs text-clay-500 font-serif italic -mt-1">
          Du Maroc avec Amour
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
