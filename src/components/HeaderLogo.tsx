import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import PerleAtlasLogo from './PerleAtlasLogo';
const HeaderLogo = () => {
  const {
    language
  } = useLanguage();
  return <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <PerleAtlasLogo size="medium" variant="dark" className="mr-3" />
      </div>
      <div className="hidden md:block">
        
      </div>
    </Link>;
};
export default HeaderLogo;