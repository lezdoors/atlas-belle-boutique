
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';

interface UserProgressSectionProps {
  userPoints: number;
  nextTierPoints: number;
  currentTier: string;
}

const UserProgressSection = ({ userPoints, nextTierPoints, currentTier }: UserProgressSectionProps) => {
  const { language } = useLanguage();
  const progressPercentage = (userPoints / nextTierPoints) * 100;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto luxury-shadow border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl text-clay-800 mb-4">
                {language === 'fr' ? 'Votre Statut' : 'Your Status'}
              </h2>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-copper-600">{userPoints}</div>
                  <div className="text-sm text-clay-600">
                    {language === 'fr' ? 'Points' : 'Points'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-clay-800">{currentTier}</div>
                  <div className="text-sm text-clay-600">
                    {language === 'fr' ? 'Niveau actuel' : 'Current tier'}
                  </div>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm text-clay-600 mb-2">
                  <span>{language === 'fr' ? 'Progression vers Sahara' : 'Progress to Sahara'}</span>
                  <span>{nextTierPoints - userPoints} {language === 'fr' ? 'points restants' : 'points remaining'}</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserProgressSection;
