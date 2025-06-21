
import PerleAtlasLogo from '@/components/PerleAtlasLogo';
import { User, Mail, Map } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FooterBrand = () => {
  const { language } = useLanguage();

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center mb-6">
        <PerleAtlasLogo 
          size="small" 
          variant="light"
          className="mr-4"
        />
        <div>
          <h3 className="text-xl font-serif font-bold text-amber-400">
            Perle de l'Atlas
          </h3>
          <div className="text-sm text-sand-400 font-serif italic">
            Authenticité & Élégance
          </div>
        </div>
      </div>
      
      <p className="text-sand-300 mb-6 leading-relaxed">
        {language === 'fr'
          ? 'La beauté ancestrale du Maroc, réinventée pour la femme moderne. Découvrez nos rituels authentiques inspirés des traditions séculaires.'
          : 'The ancestral beauty of Morocco, reinvented for the modern woman. Discover our authentic rituals inspired by centuries-old traditions.'
        }
      </p>
      
      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
          <Mail className="h-5 w-5 text-white" />
        </div>
        <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
          <Map className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;
