
import { useLanguage } from '@/contexts/LanguageContext';

const FooterBottom = () => {
  const { language } = useLanguage();

  return (
    <div className="border-t border-sand-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sand-400">
          <div className="mb-4 md:mb-0 flex items-center">
            <span className="text-lg font-serif font-light tracking-tight">
              Maison Chapuis
            </span>
            <span className="ml-3">
              © 2024 Maison Chapuis. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </span>
          </div>
          <div className="flex space-x-6">
            <span>{language === 'fr' ? 'Paiement sécurisé' : 'Secure payment'}</span>
            <span>•</span>
            <span>{language === 'fr' ? 'Livraison suivie' : 'Tracked delivery'}</span>
            <span>•</span>
            <span>{language === 'fr' ? 'Service client 7j/7' : 'Customer service 24/7'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
