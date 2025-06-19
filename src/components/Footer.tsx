
import { Mail, Map, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sand-800 text-sand-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">
                Perle d'Atlas
              </h3>
              <p className="text-sand-300 mb-6 leading-relaxed">
                La beauté ancestrale du Maroc, réinventée pour la femme moderne. 
                Découvrez nos rituels authentiques inspirés des traditions séculaires.
              </p>
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

            {/* Collections */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
                Nos Collections
              </h4>
              <ul className="space-y-3">
                {['Parfums', 'Huiles précieuses', 'Crèmes nourrissantes', 'Masques purifiants', 'Nouveautés'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Rituels de beauté',
                  'Conseils personnalisés',
                  'Livraison express',
                  'Échantillons gratuits',
                  'Programme fidélité'
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h4 className="text-lg font-serif font-semibold text-amber-400 mb-6">
                Contact & Informations
              </h4>
              <ul className="space-y-3">
                {[
                  'Nous contacter',
                  'FAQ',
                  'Livraison & Retours',
                  'CGV',
                  'Politique de confidentialité',
                  'Mentions légales'
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sand-300 hover:text-amber-400 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sand-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sand-400">
              <div className="mb-4 md:mb-0">
                © 2024 Perle d'Atlas. Tous droits réservés.
              </div>
              <div className="flex space-x-6">
                <span>Paiement sécurisé</span>
                <span>•</span>
                <span>Livraison suivie</span>
                <span>•</span>
                <span>Service client 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
