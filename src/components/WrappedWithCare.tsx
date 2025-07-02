
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
    <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="w-full max-w-none px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-stone-100 text-stone-700 px-6 py-3 rounded-full mb-8">
              <Package className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Notre Engagement' : 'Our Commitment'}
              </span>
            </div>
            <h2 className="heading-display text-3xl lg:text-4xl text-foreground mb-6 tracking-tight">
              {language === 'fr' ? 'Emballé avec Soin' : 'Wrapped With Care'}
            </h2>
            <p className="body-text text-lg max-w-3xl mx-auto text-stone-600 leading-relaxed">
              {language === 'fr' 
                ? 'Chaque détail compte dans notre approche respectueuse de l\'artisanat et de l\'environnement'
                : 'Every detail matters in our respectful approach to craftsmanship and the environment'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white border border-stone-200 rounded-full mb-8 shadow-elegant group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-stone-600" />
                </div>
                <h3 className="heading-display text-xl text-foreground mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="body-text text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="body-text text-stone-600 hover:text-foreground font-light underline underline-offset-4 transition-colors duration-300">
              {language === 'fr' ? 'En savoir plus sur notre emballage' : 'Learn more about our packaging'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrappedWithCare;
