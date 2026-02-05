import { Link } from 'react-router-dom';

interface ShopMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShopMegaMenu = ({ isOpen, onClose }: ShopMegaMenuProps) => {
  if (!isOpen) return null;

  const categories = [
    { name: 'Tagines', href: '/categories/tagines' },
    { name: 'Plates', href: '/categories/assiettes' },
    { name: 'Glasses', href: '/categories/verres-the' },
    { name: 'Serving', href: '/categories/services' },
  ];

  const curations = [
    { name: 'New Arrivals', href: '/collections/nouveautes' },
    { name: 'Seasonal Table', href: '/collections/seasonal' },
    { name: 'Essentials', href: '/collections/essentials' },
  ];

  return (
    <div
      className="absolute left-0 right-0 top-full w-full bg-white shadow-lg border-t border-stone-100"
      onMouseLeave={onClose}
    >
      <div className="max-w-5xl mx-auto py-12 px-8">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column - Categories */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-wider text-stone-400 mb-6">
              Categories
            </h3>
            <nav className="space-y-4">
              {categories.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="block text-stone-700 hover:text-stone-900 transition-colors text-base font-light"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column - Curations */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-wider text-stone-400 mb-6">
              Curations
            </h3>
            <nav className="space-y-4">
              {curations.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="block text-stone-700 hover:text-stone-900 transition-colors text-base font-light"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMegaMenu;
