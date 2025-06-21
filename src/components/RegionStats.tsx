
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const RegionStats = () => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-copper-50 border-0 rounded-2xl">
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-copper-600 mb-2">12+</div>
          <div className="text-sm text-clay-600">
            {language === 'fr' ? 'Régions sources' : 'Source regions'}
          </div>
        </CardContent>
      </Card>
      <Card className="bg-copper-50 border-0 rounded-2xl">
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-copper-600 mb-2">50+</div>
          <div className="text-sm text-clay-600">
            {language === 'fr' ? 'Ingrédients naturels' : 'Natural ingredients'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegionStats;
