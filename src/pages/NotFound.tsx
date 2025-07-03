import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      <main className="pt-32 flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-6xl font-serif font-bold text-stone-800 mb-4">404</h1>
          <h2 className="text-2xl font-serif text-stone-700 mb-4">
            {language === 'fr' ? 'Page introuvable' : 'Page Not Found'}
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            {language === 'fr' 
              ? 'La page que vous recherchez n\'existe pas ou a été déplacée.'
              : 'The page you are looking for does not exist or has been moved.'
            }
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-stone-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-stone-700"
          >
            {language === 'fr' ? 'Retour à l\'accueil' : 'Return to Home'}
          </Link>
        </div>
      </main>
      
      <ModernElegantFooter />
    </div>
  );
};

export default NotFound;
