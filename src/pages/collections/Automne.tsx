
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

const Automne = () => {
  return (
    <div className="min-h-screen bg-pearl-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-copper-100 text-copper-700 px-6 py-3 rounded-full mb-6">
              <Leaf className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium tracking-wide">Collection Automne</span>
            </div>
            <h1 className="section-title text-clay-800 mb-6">
              Chaleur Dorée
            </h1>
            <p className="elegant-text text-clay-600 max-w-3xl mx-auto text-lg">
              Embrassez la richesse automnale avec nos notes d'ambre, figue sèche et épices chaudes
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 luxury-shadow rounded-2xl p-12 text-center">
            <CardContent>
              <h2 className="text-2xl font-semibold text-clay-800 mb-4">
                Collection à venir
              </h2>
              <p className="text-clay-600">
                Cette collection sera bientôt disponible. Restez connecté pour découvrir nos nouveautés automnales.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Automne;
