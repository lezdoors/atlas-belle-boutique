
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  rating: number;
}

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
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-display font-semibold text-lg mb-1">
                  Nos Trésors Artisanaux
                </h3>
                <p className="text-white/80 text-sm">
                  Découvrez notre sélection premium
                </p>
              </div>
              
              {/* Navigation buttons - hidden on mobile */}
              <div className="hidden md:flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="text-white hover:bg-white/20 rounded-full w-10 h-10 disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="text-white hover:bg-white/20 rounded-full w-10 h-10 disabled:opacity-50"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

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
                <div 
                  key={product.id}
                  className="flex-shrink-0 w-64 md:w-72"
                >
                  <Card className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden hover:bg-white/30 transition-all duration-300 hover-scale cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        {/* Product image */}
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden luxury-shadow flex-shrink-0">
                          <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Product info */}
                        <div className="flex-1 min-w-0">
                          <Badge 
                            variant="outline" 
                            className="bg-white/20 text-white border-white/30 text-xs mb-2"
                          >
                            {product.category}
                          </Badge>
                          
                          <h4 className="text-white font-medium text-sm mb-1 truncate">
                            {product.name}
                          </h4>
                          
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-amber-400 fill-current" />
                              <span className="text-white/80 text-xs ml-1">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-amber-300 font-semibold text-sm">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Mobile scroll indicator */}
            <div className="flex justify-center mt-3 md:hidden">
              <div className="flex space-x-1">
                {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
                  <div 
                    key={index}
                    className="w-2 h-2 rounded-full bg-white/30"
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FloatingProductBanner;
