import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavigationDropdownProps {
  title: string;
  items: DropdownItem[];
  className?: string;
}

const NavigationDropdown = ({ title, items, className = '' }: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 text-sm font-light text-stone-700 hover:text-stone-900 transition-colors tracking-wide py-2"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <div className={`
        absolute top-full left-0 mt-2 w-64 bg-white border border-stone-200 rounded-xl shadow-lg z-50
        transition-all duration-200 ease-out
        ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
      `}>
        <div className="p-4 space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block p-3 rounded-lg hover:bg-stone-50 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-stone-900 group-hover:text-amber-600 transition-colors">
                {item.label}
              </div>
              {item.description && (
                <div className="text-xs text-stone-500 mt-1">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;