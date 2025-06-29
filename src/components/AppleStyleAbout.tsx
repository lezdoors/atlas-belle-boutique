
import { useLanguage } from '@/contexts/LanguageContext';

const AppleStyleAbout = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black mb-8 tracking-tight leading-tight">
              {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
            </h2>
            <div className="space-y-6 text-lg font-light text-black/70 leading-relaxed">
              <p>
                {language === 'fr'
                  ? 'Depuis des générations, les artisans des montagnes de l\'Atlas préservent un savoir-faire unique, transmis de père en fils avec une précision remarquable.'
                  : 'For generations, craftsmen from the Atlas Mountains have preserved unique know-how, passed down from father to son with remarkable precision.'
                }
              </p>
              <p>
                {language === 'fr'
                  ? 'Chaque création Perle d\'Atlas naît de cette tradition millénaire, alliant respect des techniques ancestrales et vision contemporaine de l\'élégance.'
                  : 'Each Perle d\'Atlas creation is born from this thousand-year-old tradition, combining respect for ancestral techniques with a contemporary vision of elegance.'
                }
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/moroccan-architecture.jpg"
              alt="Moroccan Architecture"
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl shadow-black/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleStyleAbout;
