
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto text-center luxury-shadow border-0 rounded-3xl overflow-hidden">
          <div className="copper-gradient p-12 text-white">
            <Sparkles className="h-16 w-16 mx-auto mb-6" />
            <h2 className="font-display font-bold text-2xl mb-4">
              {language === 'fr' ? 'Prêt à rejoindre le Cercle Perle ?' : 'Ready to join the Pearl Circle?'}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === 'fr'
                ? 'Commencez dès maintenant à accumuler des points et découvrez vos privilèges'
                : 'Start accumulating points now and discover your privileges'
              }
            </p>
            <Button 
              size="lg"
              className="bg-white text-copper-600 hover:bg-pearl-100 rounded-full px-8 py-4 font-medium"
            >
              {language === 'fr' ? 'Rejoindre maintenant' : 'Join now'}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
