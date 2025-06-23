import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from './banner/ProductCard';
import BannerHeader from './banner/BannerHeader';
import BannerScrollIndicator from './banner/BannerScrollIndicator';
import { Product } from './banner/types';

const FloatingProductBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products: Product[] = [
    {
      id: 1,
      name: "Huile d'Argan Premium",
      price: "À partir de 28€",
      image: "/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png",
      category: "Huiles",
      rating: 4.9
    },
    {
      id: 2,
      name: "Parfum Traditionnel",
      price: "À partir de 45€",
      image: "/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png",
      category: "Parfums",
      rating: 4.8
    },
    {
      id: 3,
      name: "Crème Hydratante",
      price: "À partir de 32€",
      image: "/lovable-uploads/d4ad8eb5-ea3d-4931-ae8c-008b30d0e998.png",
      category: "Crèmes",
      rating: 4.7
    },
    {
      id: 4,
      name: "Savon Artisanal",
      price: "À partir de 18€",
      image: "/lovable-uploads/2a2a9ecb-4fac-47ae-a550-649b0b123f47.png",
      category: "Savons",
      rating: 4.6
    },
    {
      id: 5,
      name: "Masque Purifiant",
      price: "À partir de 24€",
      image: "/lovable-uploads/5a6e176e-a311-4e23-a48f-5439e70ecb3f.png",
      category: "Masques",
      rating: 4.8
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="absolute bottom-8 left-4 right-4 z-30 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Glass-morphism banner */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl luxury-shadow overflow-hidden">
          <CardContent className="p-6">
            <BannerHeader
              canScrollLeft={canScrollLeft}
              canScrollRight={canScrollRight}
              onScrollLeft={() => scroll('left')}
              onScrollRight={() => scroll('right')}
            />

            {/* Scrollable product cards */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <BannerScrollIndicator productCount={products.length} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FloatingProductBanner;
