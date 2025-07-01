
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CheckoutBreadcrumb = () => {
  const { language } = useLanguage();

  return (
    <nav className="flex items-center space-x-2 text-sm text-clay-600 mb-8">
      <Link to="/" className="hover:text-copper-600">
        {language === 'fr' ? 'Accueil' : 'Home'}
      </Link>
      <span>/</span>
      <Link to="/boutique" className="hover:text-copper-600">
        {language === 'fr' ? 'Boutique' : 'Shop'}
      </Link>
      <span>/</span>
      <span className="text-clay-800">
        {language === 'fr' ? 'Commande' : 'Checkout'}
      </span>
    </nav>
  );
};

export default CheckoutBreadcrumb;
