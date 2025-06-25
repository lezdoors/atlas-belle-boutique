
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FragranceCredibilityMarkers = () => {
  const { language } = useLanguage();

  return (
    <div className="text-center mb-8">
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
        <Badge className="bg-gradient-to-r from-amber-500 to-gold-500 text-white px-6 py-2 text-sm font-medium">
          {language === 'fr' ? 'Maîtres Parfumeurs depuis 1950' : 'Master Perfumers Since 1950'}
        </Badge>
        <div className="text-sm text-clay-600 font-light">
          {language === 'fr' ? 'Lots limités - Seulement 50 flacons par parfum' : 'Limited Batches - Only 50 bottles per fragrance'}
        </div>
      </div>
      
      {/* Customer Testimonial */}
      <div className="max-w-2xl mx-auto mb-6">
        <blockquote className="text-clay-700 italic text-lg mb-2">
          "{language === 'fr' ? 'Tient 12+ heures, dépasse les attentes du luxe' : 'Lasts 12+ hours, exceeds luxury expectations'}"
        </blockquote>
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="text-clay-600 text-sm">
          {language === 'fr' ? 'Prix premium: 89€ - 149€' : 'Premium pricing: 89€ - 149€'}
        </div>
      </div>
    </div>
  );
};

export default FragranceCredibilityMarkers;
