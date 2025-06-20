
import { useLanguage } from '@/contexts/LanguageContext';
import CulturalNavigation from '@/components/CulturalNavigation';

const HeaderNavigation = () => {
  const { language } = useLanguage();

  const categories = language === 'fr' 
    ? [
        { name: 'Parfums', href: '/parfums' },
        { name: 'Huiles', href: '/huiles' },
        { name: 'Crèmes', href: '/cremes' },
        { name: 'Masques', href: '/masques' },
        { name: 'Nouveautés', href: '/nouveautes' },
      ]
    : [
        { name: 'Perfumes', href: '/perfumes' },
        { name: 'Oils', href: '/oils' },
        { name: 'Creams', href: '/creams' },
        { name: 'Masks', href: '/masks' },
        { name: 'New Arrivals', href: '/new-arrivals' },
      ];

  return (
    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
      <CulturalNavigation />
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.href}
          className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm xl:text-base"
        >
          {category.name}
        </a>
      ))}
      <a
        href="/rituels"
        className="text-sand-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm xl:text-base"
      >
        {language === 'fr' ? 'Rituels de beauté' : 'Beauty rituals'}
      </a>
    </nav>
  );
};

export default HeaderNavigation;
