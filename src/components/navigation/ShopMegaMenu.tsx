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
      className="fixed left-0 right-0 top-[116px] w-full bg-white shadow-xl border-t border-stone-200 z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-6xl mx-auto py-16 px-12">
        <div className="grid grid-cols-2 gap-24">
          {/* Left Column - Categories */}
          <div>
            <h3 className="font-serif text-xs uppercase tracking-widest text-stone-500 mb-8 font-light">
              Categories
            </h3>
            <nav className="space-y-5">
              {categories.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="block text-stone-800 hover:text-stone-950 transition-colors text-lg font-light tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column - Curations */}
          <div>
            <h3 className="font-serif text-xs uppercase tracking-widest text-stone-500 mb-8 font-light">
              Curations
            </h3>
            <nav className="space-y-5">
              {curations.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className="block text-stone-800 hover:text-stone-950 transition-colors text-lg font-light tracking-wide"
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
