
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FooterContact = () => {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '+33663068980';
    const message = encodeURIComponent('Bonjour! Je suis intéressé(e) par vos produits Perle d\'Atlas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@atlasperle.com';
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
          <span>📧 contact@atlasperle.com</span>
        </button>
      </div>

      {/* WhatsApp Contact */}
      <div className="mb-4">
        <button 
          onClick={handleWhatsAppClick}
          className="flex items-center space-x-2 text-sand-300 hover:text-green-400 transition-colors text-sm group"
        >
          <Phone className="h-4 w-4 group-hover:text-green-400" />
          <span>WhatsApp : 06 63 06 89 80</span>
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
            <p>822 C Street #11, Hayward, CA 94541</p>
          </div>
        </div>

        <div className="flex items-start space-x-2 text-sand-300 text-sm">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-amber-300 mb-1">
              Bureau Maroc :
            </p>
            <p>Casablanca, Maroc</p>
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
        {[
          'FAQ',
          language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy',
          language === 'fr' ? 'Mentions légales' : 'Legal Notice'
        ].map((item) => (
          <li key={item}>
            <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContact;
