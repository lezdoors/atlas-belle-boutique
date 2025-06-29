
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MegaMenu = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories = [
    {
      title: language === 'fr' ? 'ÉLÉMENTS ARCHITECTURAUX' : 'ARCHITECTURAL ELEMENTS',
      items: [
        { name: language === 'fr' ? 'Boiseries, Écrans & Panneaux' : 'Woodwork, Screens & Panels', href: '/catalog/woodwork', available: true },
        { name: language === 'fr' ? 'Ferronnerie' : 'Metalwork', href: '/catalog/metalwork', available: true },
        { name: language === 'fr' ? 'Portes & Fenêtres Marocaines' : 'Moroccan Doors & Windows', href: '/catalog/doors-windows', available: true },
        { name: language === 'fr' ? 'Carreaux de Mosaïque' : 'Mosaic Tile', href: '/catalog/mosaic-tile', available: true }
      ]
    },
    {
      title: language === 'fr' ? 'ÉCLAIRAGE' : 'LIGHTING',
      items: [
        { name: language === 'fr' ? 'Appliques Murales' : 'Wall Sconces', href: '/catalog/wall-sconces', available: true },
        { name: language === 'fr' ? 'Éclairage Extérieur' : 'Outdoor Lights', href: '/catalog/outdoor-lights', available: true },
        { name: language === 'fr' ? 'Suspensions' : 'Pendant Lights', href: '/catalog/pendant-lights', available: true },
        { name: language === 'fr' ? 'Lustres' : 'Chandeliers', href: '/catalog/chandeliers', available: true },
        { name: language === 'fr' ? 'Plafonniers' : 'Flush Mount Lights', href: '/catalog/flush-mount', available: true },
        { name: language === 'fr' ? 'Lampes de Table' : 'Table Lamps', href: '/catalog/table-lamps', available: true },
        { name: language === 'fr' ? 'Éclairage Contemporain' : 'Contemporary Lights', href: '/catalog/contemporary-lights', available: false },
        { name: language === 'fr' ? 'Éclairage Vintage' : 'Vintage Lights', href: '/catalog/vintage-lights', available: false },
        { name: language === 'fr' ? 'Éclairage Hôtellerie' : 'Hospitality Lights', href: '/catalog/hospitality-lights', available: false }
      ]
    },
    {
      title: language === 'fr' ? 'MOBILIER' : 'FURNITURE',
      items: [
        { name: language === 'fr' ? 'Tables' : 'Tables', href: '/catalog/tables', available: true },
        { name: language === 'fr' ? 'Commodes, Armoires & Dressings' : 'Dressers, Cabinets & Armoires', href: '/catalog/storage', available: true },
        { name: language === 'fr' ? 'Trouvailles Spéciales' : 'Special Finds', href: '/catalog/special-finds', available: true },
        { name: language === 'fr' ? 'Chaises / Lits de Repos' : 'Chairs / Daybeds', href: '/catalog/seating', available: true }
      ]
    },
    {
      title: language === 'fr' ? 'DÉCORATION' : 'DECOR',
      items: [
        { name: language === 'fr' ? 'Plateaux' : 'Trays', href: '/catalog/trays', available: true },
        { name: language === 'fr' ? 'Poufs en Cuir' : 'Leather Poufs', href: '/catalog/leather-poufs', available: true },
        { name: language === 'fr' ? 'Miroirs' : 'Mirrors', href: '/catalog/mirrors', available: true },
        { name: language === 'fr' ? 'Céramiques' : 'Ceramics', href: '/catalog/ceramics', available: false },
        { name: language === 'fr' ? 'Verrerie' : 'Glassware', href: '/catalog/glassware', available: false },
        { name: language === 'fr' ? 'Art de Vivre & Décoration' : 'Lifestyle & Decor', href: '/catalog/lifestyle', available: false }
      ]
    },
    {
      title: language === 'fr' ? 'TEXTILES & COUSSINS' : 'TEXTILES & CUSHIONS',
      items: [
        { name: language === 'fr' ? 'Coussins' : 'Pillows', href: '/catalog/pillows', available: true },
        { name: language === 'fr' ? 'Pièces d\'Accent' : 'Accent Pieces', href: '/catalog/accent-pieces', available: true }
      ]
    },
    {
      title: language === 'fr' ? 'MOBILIER D\'EXTÉRIEUR' : 'OUTDOOR FURNITURE',
      items: [
        { name: language === 'fr' ? 'Tables Bistro' : 'Bistro Tables', href: '/catalog/bistro-tables', available: true },
        { name: language === 'fr' ? 'Tables de Salle à Manger' : 'Dining Tables', href: '/catalog/dining-tables', available: true },
        { name: language === 'fr' ? 'Tables Basses' : 'Coffee Tables', href: '/catalog/coffee-tables', available: true },
        { name: language === 'fr' ? 'Tables d\'Appoint' : 'End & Side Tables', href: '/catalog/side-tables', available: true },
        { name: language === 'fr' ? 'Tables de Patio' : 'Patio Tables', href: '/catalog/patio-tables', available: true },
        { name: language === 'fr' ? 'Fontaines en Mosaïque' : 'Mosaic Fountains', href: '/catalog/mosaic-fountains', available: true }
      ]
    }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Catalog Trigger */}
      <button className="flex items-center space-x-1 text-sm lg:text-base font-light tracking-wide transition-all duration-500 relative group px-3 py-2 font-serif text-white hover:text-amber-200">
        <span>{language === 'fr' ? 'Catalogue' : 'Catalog'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mega Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-white shadow-lg border-t border-neutral-100 z-50">
          <div className="grid grid-cols-3 gap-6 px-6 py-6 max-w-7xl mx-auto">
            {menuCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 border-b border-neutral-200 pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.available ? (
                        <Link
                          to={item.href}
                          className="block text-sm text-neutral-700 hover:text-black hover:underline transition leading-relaxed"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="block text-sm text-neutral-400 leading-relaxed cursor-not-allowed">
                          {item.name}
                          <span className="ml-2 text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">
                            {language === 'fr' ? 'Bientôt' : 'Coming Soon'}
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Featured Categories at Bottom */}
          <div className="border-t border-neutral-100 px-6 py-4 bg-neutral-50">
            <div className="flex justify-center space-x-4 max-w-7xl mx-auto">
              <Link
                to="/catalog/new-arrivals"
                className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-neutral-800 transition"
              >
                {language === 'fr' ? 'Nouvelles Arrivées' : 'New Arrivals'}
              </Link>
              <Link
                to="/catalog/bestsellers"
                className="border border-black text-black px-4 py-2 rounded text-sm font-medium hover:bg-black hover:text-white transition"
              >
                {language === 'fr' ? 'Meilleures Ventes' : 'Best Sellers'}
              </Link>
              <Link
                to="/catalog/custom-orders"
                className="text-neutral-600 px-4 py-2 text-sm hover:text-black transition"
              >
                {language === 'fr' ? 'Commandes Personnalisées' : 'Custom Orders'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
