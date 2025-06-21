
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FooterServices = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
        {language === 'fr' ? 'Services' : 'Services'}
      </h4>
      <ul className="space-y-3">
        {[
          { name: language === 'fr' ? 'Quiz Peau' : 'Skin Quiz', href: '/quiz-peau' },
          { name: language === 'fr' ? 'Programme Fidélité' : 'Loyalty Program', href: '/programme-fidelite' },
          { name: language === 'fr' ? 'Professionnels' : 'Professionals', href: '/professionnels' },
          { name: language === 'fr' ? 'Grossistes' : 'Wholesalers', href: '/grossistes' },
          { name: language === 'fr' ? 'Blog' : 'Blog', href: '/blog' },
          { name: language === 'fr' ? 'Contact' : 'Contact', href: '/contact' }
        ].map((item) => (
          <li key={item.name}>
            <Link to={item.href} className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterServices;
