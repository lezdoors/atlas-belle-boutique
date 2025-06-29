
import { useLanguage } from '@/contexts/LanguageContext';

const AppleStyleFooter = () => {
  const { language } = useLanguage();

  const footerSections = [
    {
      title: language === 'fr' ? 'Collections' : 'Collections',
      links: [
        language === 'fr' ? 'Luminaires' : 'Lighting',
        language === 'fr' ? 'Mobilier' : 'Furniture',
        language === 'fr' ? 'Décoration' : 'Decoration',
        language === 'fr' ? 'Textiles' : 'Textiles'
      ]
    },
    {
      title: language === 'fr' ? 'À propos' : 'About',
      links: [
        language === 'fr' ? 'Notre histoire' : 'Our story',
        language === 'fr' ? 'Artisans' : 'Artisans',
        language === 'fr' ? 'Savoir-faire' : 'Craftsmanship'
      ]
    },
    {
      title: language === 'fr' ? 'Aide' : 'Support',
      links: [
        'Contact',
        language === 'fr' ? 'Livraison' : 'Shipping',
        language === 'fr' ? 'Retours' : 'Returns'
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-black/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-light text-black mb-6 tracking-tight">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm font-light text-black/60 hover:text-black transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm font-light text-black/60">
            © 2025 Perle d'Atlas. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </div>
          <div className="text-2xl font-light tracking-tight text-black">
            Perle d'Atlas
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppleStyleFooter;
