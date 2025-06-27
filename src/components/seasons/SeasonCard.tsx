
import { Button } from '@/components/ui/button';

interface Product {
  name: string;
  price: string;
}

interface SeasonCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  color: string;
  products: Product[];
  language: 'fr' | 'en';
  animationDelay?: number;
}

const SeasonCard = ({ 
  id, 
  name, 
  title, 
  description, 
  image, 
  color, 
  products, 
  language,
  animationDelay = 0 
}: SeasonCardProps) => {
  return (
    <div 
      className="group animate-fade-in hover-scale cursor-pointer"
      style={{ animationDelay: `${animationDelay * 0.2}s` }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden luxury-shadow h-full transition-all duration-300 hover:bg-white">
        {/* Season Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
        </div>

        {/* Season Content */}
        <div className="p-6">
          <h3 className="font-display font-bold text-xl text-clay-800 mb-2">
            {name}
          </h3>
          <h4 className="font-serif text-lg text-copper-600 mb-3">
            {title}
          </h4>
          <p className="text-clay-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Featured Products */}
          <div className="space-y-2 mb-4">
            {products.map((product, productIndex) => (
              <div key={productIndex} className="flex justify-between items-center text-xs">
                <span className="text-clay-500">{product.name}</span>
                <span className="font-semibold text-copper-600">{product.price}</span>
              </div>
            ))}
          </div>

          <Button 
            variant="outline" 
            size="sm"
            className="w-full border-copper-300 text-copper-600 hover:bg-copper-50"
          >
            {language === 'fr' ? 'Découvrir la collection →' : 'Discover collection →'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;
