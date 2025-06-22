
import { useState, useEffect } from 'react';
import { Sparkles, Leaf, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeautyTip {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  ingredient: string;
  link: string;
  bgGradient: string;
}

const beautyTips: BeautyTip[] = [
  {
    id: 1,
    icon: <Sparkles className="h-6 w-6" />,
    title: "Astuce Beauté du Jour",
    description: "Appliquez l'huile d'argan sur peau légèrement humide pour une absorption optimale.",
    ingredient: "Huile d'Argan Premium",
    link: "#",
    bgGradient: "from-copper-100 to-amber-50"
  },
  {
    id: 2,
    icon: <Leaf className="h-6 w-6" />,
    title: "Ingrédient Vedette",
    description: "Le ghassoul de l'Atlas purifie en douceur tout en respectant l'équilibre naturel de votre peau.",
    ingredient: "Ghassoul de l'Atlas",
    link: "#",
    bgGradient: "from-clay-100 to-beige-50"
  },
  {
    id: 3,
    icon: <BookOpen className="h-6 w-6" />,
    title: "Rituel Traditionnel",
    description: "Découvrez le secret du hammam royal : gommage au ghassoul suivi d'un massage à l'huile d'argan.",
    ingredient: "Rituel Hammam Royal",
    link: "#",
    bgGradient: "from-pearl-100 to-copper-50"
  }
];

const DynamicBeautyBanner = () => {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % beautyTips.length);
    }, 8000); // Change every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const tip = beautyTips[currentTip];

  return (
    <div className="my-8 mx-4">
      <div className={`bg-gradient-to-r ${tip.bgGradient} rounded-2xl p-6 md:p-8 luxury-shadow transition-all duration-1000 ease-in-out`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center text-clay-700">
              {tip.icon}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg md:text-xl font-semibold text-clay-800 mb-2">
              {tip.title}
            </h3>
            
            <p className="text-clay-600 text-sm md:text-base leading-relaxed mb-3">
              {tip.description}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="inline-flex items-center bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs md:text-sm font-medium text-clay-700">
                ✨ {tip.ingredient}
              </span>
              
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/80 hover:bg-white border-clay-200 text-clay-700 hover:text-clay-800 text-xs md:text-sm"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {beautyTips.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTip(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTip 
                  ? 'bg-clay-600 w-6' 
                  : 'bg-clay-300 hover:bg-clay-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicBeautyBanner;
