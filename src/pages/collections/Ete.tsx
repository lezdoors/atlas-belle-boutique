
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

const Ete = () => {
  return (
    <div className="min-h-screen bg-pearl-50">
      <MaisonStyleHeaderNew />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-6 py-3 rounded-full mb-6">
              <Sun className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium tracking-wide">Collection Été</span>
            </div>
            <h1 className="section-title text-clay-800 mb-6">
              Éclat du Soleil
            </h1>
            <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
              Profitez de la chaleur estivale avec nos essences de citron, argan et menthe rafraîchissante
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 luxury-shadow rounded-2xl p-12 text-center">
            <CardContent>
              <h2 className="text-2xl font-semibold text-clay-800 mb-4">
                Collection à venir
              </h2>
              <p className="text-clay-600">
                Cette collection sera bientôt disponible. Restez connecté pour découvrir nos nouveautés estivales.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <ModernElegantFooter />
    </div>
  );
};

export default Ete;
