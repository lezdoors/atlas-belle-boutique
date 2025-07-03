
import React from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Leaf, Users, Award, Mountain, Star } from 'lucide-react';

const NotreHeritage = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: language === 'fr' ? 'Authenticité' : 'Authenticity',
      description: language === 'fr' 
        ? 'Chaque création respecte les traditions ancestrales transmises de génération en génération'
        : 'Each creation respects ancestral traditions passed down from generation to generation'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Artisanat' : 'Small-batch',
      description: language === 'fr'
        ? 'Productions limitées qui préservent la qualité et l\'unicité de chaque pièce'
        : 'Limited productions that preserve the quality and uniqueness of each piece'
    },
    {
      icon: Award,
      title: language === 'fr' ? 'Fait Main' : 'Handmade',
      description: language === 'fr'
        ? 'Chaque objet naît des mains expertes d\'artisans maîtres de leur art'
        : 'Each object is born from the expert hands of artisans who master their craft'
    },
    {
      icon: Leaf,
      title: language === 'fr' ? 'Biologique' : 'Organic',
      description: language === 'fr'
        ? 'Matériaux naturels et processus respectueux de l\'environnement'
        : 'Natural materials and environmentally respectful processes'
    },
    {
      icon: Star,
      title: language === 'fr' ? 'Éthique' : 'Ethical',
      description: language === 'fr'
        ? 'Commerce équitable et soutien direct aux communautés artisanales'
        : 'Fair trade and direct support to artisan communities'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extralight text-black mb-8 tracking-tight">
            {language === 'fr' ? 'Notre Héritage' : 'Our Heritage'}
          </h1>
          <p className="text-xl md:text-2xl font-light text-black/60 leading-relaxed max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Au cœur des montagnes de l\'Atlas, où le soleil caresse des terres millénaires, naissent des créations qui portent l\'âme du Maroc. Chaque geste, chaque tradition, chaque savoir-faire raconte une histoire de beauté intemporelle.'
              : 'In the heart of the Atlas Mountains, where the sun caresses thousand-year-old lands, creations are born that carry the soul of Morocco. Each gesture, each tradition, each craft tells a story of timeless beauty.'
            }
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-extralight text-black mb-6 tracking-tight">
                {language === 'fr' ? 'Une Histoire de Famille' : 'A Family Story'}
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Perle de l\'Atlas est né de la rencontre entre deux mondes : l\'héritage marocain de nos fondateurs et leur vision moderne du partage culturel. Cette famille maroco-américaine a voulu créer un pont entre les traditions séculaires du Maroc et les amoureux de l\'artisanat authentique à travers le monde.'
                  : 'Perle de l\'Atlas was born from the meeting of two worlds: the Moroccan heritage of our founders and their modern vision of cultural sharing. This Moroccan-American family wanted to create a bridge between Morocco\'s secular traditions and lovers of authentic craftsmanship around the world.'
                }
              </p>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                {language === 'fr'
                  ? 'Chaque voyage au Maroc renforce notre conviction : ces trésors artisanaux méritent d\'être partagés, célébrés et préservés. C\'est ainsi qu\'est née notre mission de révéler au monde la beauté intemporelle de l\'artisanat marocain.'
                  : 'Each trip to Morocco reinforces our conviction: these artisanal treasures deserve to be shared, celebrated and preserved. This is how our mission was born to reveal to the world the timeless beauty of Moroccan craftsmanship.'
                }
              </p>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/397b8d88-7594-4433-8004-050f047a13b6.png"
                alt="Heritage"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-extralight text-black mb-12 text-center tracking-tight">
              {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                  <value.icon className="h-10 w-10 mx-auto mb-4 text-black/60" />
                  <h3 className="text-xl font-light text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-black/60 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From Atlas to You Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mountain className="h-12 w-12 mx-auto mb-6 text-black/60" />
            <h2 className="text-3xl md:text-4xl font-extralight text-black mb-6 tracking-tight">
              {language === 'fr' ? 'De l\'Atlas jusqu\'à chez Vous' : 'From the Atlas Mountains to You'}
            </h2>
            <p className="text-lg font-light text-black/60 leading-relaxed max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Découvrez les visages et les histoires des artisans qui donnent vie à nos créations. Chaque main qui façonne, chaque geste qui crée, porte en lui des siècles de savoir-faire et de passion.'
                : 'Discover the faces and stories of the artisans who bring our creations to life. Each hand that shapes, each gesture that creates, carries within it centuries of know-how and passion.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png"
                  alt="Artisan 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2">Maître Hassan</h3>
              <p className="text-black/60 font-light text-sm">
                {language === 'fr' ? 'Potier traditionnel, Salé' : 'Traditional potter, Salé'}
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="/lovable-uploads/6fde7854-c65c-40e6-8df6-8d9ca69c3fc8.png"
                  alt="Artisan 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2">Aicha</h3>
              <p className="text-black/60 font-light text-sm">
                {language === 'fr' ? 'Tisseuse experte, Atlas' : 'Expert weaver, Atlas'}
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="/lovable-uploads/754f1a74-0a9c-4277-8cff-2105a643bcf8.png"
                  alt="Artisan 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-light text-black mb-2">Mohammed</h3>
              <p className="text-black/60 font-light text-sm">
                {language === 'fr' ? 'Maître verrier, Fès' : 'Master glassblower, Fez'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extralight mb-6 tracking-tight">
            {language === 'fr' ? 'Rejoignez Notre Histoire' : 'Join Our Story'}
          </h2>
          <p className="text-xl font-light text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Chaque création que vous choisissez soutient directement nos artisans partenaires et perpétue un héritage millénaire. Ensemble, célébrons la beauté de l\'artisanat marocain.'
              : 'Each creation you choose directly supports our partner artisans and perpetuates a thousand-year-old heritage. Together, let\'s celebrate the beauty of Moroccan craftsmanship.'
            }
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-light transition-all duration-300 hover:bg-white/90">
            {language === 'fr' ? 'Découvrir nos Créations' : 'Discover our Creations'}
          </button>
        </div>
      </section>

      <ModernElegantFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default NotreHeritage;
