import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingProductCards = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: language === 'fr' ? 'Tagine Traditionnel' : 'Traditional Tagine',
      image: 'https://images.unsplash.com/photo-1543353071-10c720b2dbbf?w=400&q=80',
      price: '89€',
      craft: language === 'fr' ? 'Fès' : 'Fez'
    },
    {
      id: 2,
      name: language === 'fr' ? 'Verres à Thé' : 'Tea Glasses',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
      price: '45€',
      craft: language === 'fr' ? 'Safi' : 'Safi'
    },
    {
      id: 3,
      name: language === 'fr' ? 'Bol en Céramique' : 'Ceramic Bowl',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80',
      price: '32€',
      craft: language === 'fr' ? 'Salé' : 'Sale'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
      <div className="space-y-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group transition-all duration-1000 ${
              index === currentIndex 
                ? 'opacity-100 scale-100 translate-x-0' 
                : index < currentIndex 
                  ? 'opacity-60 scale-90 translate-x-8' 
                  : 'opacity-40 scale-85 translate-x-12'
            }`}
            style={{ 
              animationDelay: `${index * 0.2}s`,
              zIndex: products.length - Math.abs(index - currentIndex)
            }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 w-72 border border-white/20 shadow-luxury hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:bg-white/15">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="absolute top-3 right-3 bg-moroccan-rose-gold text-moroccan-blue px-3 py-1 rounded-full text-xs font-medium">
                  {product.craft}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-serif text-white text-lg font-medium">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-moroccan-sand font-light text-lg">
                    {product.price}
                  </span>
                  <span className="text-white/70 text-xs">
                    {language === 'fr' ? 'Fait main' : 'Handmade'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingProductCards;