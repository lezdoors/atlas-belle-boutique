
import { useLanguage } from '@/contexts/LanguageContext';
import { Package, Gift, Leaf } from 'lucide-react';

const WrappedWithCare = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Package,
      title: language === 'fr' ? 'Emballé à la main au Maroc' : 'Hand-packed in Morocco',
      description: language === 'fr' 
        ? 'Chaque commande est soigneusement préparée par nos artisans'
        : 'Every order is carefully prepared by our artisans'
    },
    {
      icon: Gift,
      title: language === 'fr' ? 'Prêt à offrir' : 'Gift-ready presentation',
      description: language === 'fr' 
        ? 'Présentation élégante pour vos cadeaux les plus précieux'
        : 'Elegant presentation for your most precious gifts'
    },
    {
      icon: Leaf,
      title: language === 'fr' ? 'Expédition sans plastique' : 'Plastic-free shipping',
      description: language === 'fr' 
        ? 'Matériaux naturels et recyclables pour protéger notre planète'
        : 'Natural and recyclable materials to protect our planet'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extralight text-black mb-4 tracking-tight">
            {language === 'fr' ? 'Emballé avec Soin' : 'Wrapped With Care'}
          </h2>
          <p className="text-lg font-light text-black/60 max-w-2xl mx-auto mb-8">
            {language === 'fr' 
              ? 'Chaque détail compte dans notre approche respectueuse de l\'artisanat et de l\'environnement'
              : 'Every detail matters in our respectful approach to craftsmanship and the environment'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-light text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-black/60 font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-black/60 hover:text-black font-light underline underline-offset-4 transition-colors">
            {language === 'fr' ? 'En savoir plus sur notre emballage' : 'Learn more about our packaging'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WrappedWithCare;
