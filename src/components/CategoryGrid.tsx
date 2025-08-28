import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      name: 'Tagines',
      description: 'Traditional cooking vessels',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/ceramic-moden-tagine.jpg.webp',
      href: '/shop?category=tagines'
    },
    {
      name: 'Dinnerware',
      description: 'Plates, bowls & serving pieces',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/R2ONOXQ%20(1).jpg',
      href: '/shop?category=dinnerware'
    },
    {
      name: 'Glasses',
      description: 'Tea glasses & drinkware',
      image: 'https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/fez-ceramics/TASEEMPBLANC-1.jpg.webp',
      href: '/shop?category=glasses'
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
            Each piece tells a story of ancient craftsmanship and modern curation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-lg bg-stone-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={`${category.name} - ${category.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-light uppercase tracking-wider opacity-80 block mb-1">
                  Explore Collection
                </span>
                <h3 className="text-xl font-light mb-1">{category.name}</h3>
                <p className="text-sm font-light opacity-90">{category.description}</p>
                <span className="text-sm font-light mt-2 inline-block border-b border-white/50">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;