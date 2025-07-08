import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'tajines',
    title: 'Tajines Artisanaux',
    cta: 'Voir les ustensiles',
    image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//tagine-glassy_4.jpg.webp',
    link: '/boutique'
  },
  {
    id: 'verres',
    title: 'Verre Marocain',
    cta: 'Voir les verres',
    image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//fakhar-glass-white1.JPG',
    link: '/boutique'
  },
  {
    id: 'textile',
    title: 'Céramique Artisanale',
    cta: 'Découvrir les céramiques',
    image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//fakkhar-tajine-white.JPG',
    link: '/boutique'
  },
  {
    id: 'decoration',
    title: 'Décoration Berbère',
    cta: 'Explorer la décoration',
    image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Tente-light.jpg',
    link: '/boutique'
  },
  {
    id: 'verres-marocains',
    title: 'Verres Marocains',
    cta: 'Couleurs Authentiques',
    image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//beldi-glass-multicolor.JPG',
    link: '/boutique'
  },
  {
    id: 'elegance',
    title: 'Élégance Authentique',
    cta: 'Découvrir l\'élégance',
    image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//coffe%20grain%20oil%20bottle.jpg',
    link: '/boutique'
  }
];

const CategoryShowcase = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-stone-50">
      <div className="w-full">
        {/* Section Header */}
        <div className="container-refined mb-8 md:mb-12">
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-center text-stone-800 mb-4">
            Nos Collections
          </h2>
          <p className="body-text text-center text-stone-600 max-w-2xl mx-auto">
            Découvrez l'artisanat marocain authentique à travers nos collections soigneusement sélectionnées
          </p>
        </div>

        {/* Categories Grid */}
        <div className="w-full">
          {/* Desktop: 3 columns for first row, 2 columns for second */}
          <div className="hidden lg:block">
            {/* First Row: 3 items */}
            <div className="grid grid-cols-3 gap-0 mb-0">
              {categories.slice(0, 3).map((category) => (
                <CategoryBlock key={category.id} category={category} />
              ))}
            </div>
            {/* Second Row: 3 items */}
            <div className="grid grid-cols-3 gap-0">
              {categories.slice(3, 6).map((category) => (
                <CategoryBlock key={category.id} category={category} />
              ))}
            </div>
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-0">
              {categories.map((category) => (
                <CategoryBlock key={category.id} category={category} />
              ))}
            </div>
          </div>

          {/* Mobile: 1 column */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-0">
              {categories.map((category) => (
                <CategoryBlock key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryBlock = ({ category }: { category: typeof categories[0] }) => {
  return (
    <Link 
      to={category.link}
      className="group relative block overflow-hidden aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="heading-display text-white text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">
            {category.title}
          </h3>
          
          <div className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
            <span className="body-text text-sm md:text-base font-medium">
              {category.cta}
            </span>
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Subtle accent line */}
        <div className="absolute bottom-0 left-6 md:left-8 lg:left-10 right-6 md:right-8 lg:right-10 h-px bg-gradient-to-r from-amber-400 via-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  );
};

export default CategoryShowcase;