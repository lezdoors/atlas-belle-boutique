
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SITE_CONFIG, getWhatsAppUrl } from '@/utils/siteConfig';

const FooterContact = () => {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    const whatsappUrl = getWhatsAppUrl('Bonjour! Je suis intéressé(e) par vos produits Perle d\'Atlas.');
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${SITE_CONFIG.email}`;
  };

  return (
    <div>
      <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
        {language === 'fr' ? 'Contact' : 'Contact'}
      </h4>
      
      {/* Email Contact */}
      <div className="mb-4">
        <button 
          onClick={handleEmailClick}
          className="flex items-center space-x-2 text-sand-300 hover:text-amber-400 transition-colors text-sm group"
        >
          <span>📧 {SITE_CONFIG.email}</span>
        </button>
      </div>

      {/* WhatsApp Contact */}
      <div className="mb-4">
        <button 
          onClick={handleWhatsAppClick}
          className="flex items-center space-x-2 text-sand-300 hover:text-green-400 transition-colors text-sm group"
        >
          <Phone className="h-4 w-4 group-hover:text-green-400" />
          <span>WhatsApp : {SITE_CONFIG.whatsapp.displayNumber}</span>
        </button>
      </div>

      {/* Addresses */}
      <div className="space-y-3 mb-6">
        <div className="flex items-start space-x-2 text-sand-300 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-amber-300 mb-1">
              {language === 'fr' ? 'Adresse USA :' : 'USA Address:'}
            </p>
            <p>{SITE_CONFIG.addresses.usa}</p>
          </div>
        </div>

        <div className="flex items-start space-x-2 text-sand-300 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-amber-300 mb-1">
              Bureau Maroc :
            </p>
            <p>{SITE_CONFIG.addresses.morocco}</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-2 text-sand-300 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-amber-300 mb-1">
              {language === 'fr' ? 'Adresse France :' : 'France Address:'}
            </p>
            <p className="italic opacity-75">
              {language === 'fr' ? 'à venir' : 'coming soon'}
            </p>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <ul className="space-y-2">
        <li>
          <Link to="/contact" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
            {language === 'fr' ? 'Nous contacter' : 'Contact us'}
          </Link>
        </li>
        <li>
          <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
            {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
          </a>
        </li>
        <li>
          <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
            {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
          </a>
        </li>
        <li>
          <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
            {language === 'fr' ? 'Conditions générales de vente' : 'Terms of Sale'}
          </a>
        </li>
        <li>
          <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
