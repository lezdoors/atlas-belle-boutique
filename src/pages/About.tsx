
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Leaf, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: language === 'fr' ? 'Passion' : 'Passion',
      description: language === 'fr' 
        ? 'Notre amour pour la beauté naturelle du Maroc guide chacune de nos créations'
        : 'Our love for Morocco\'s natural beauty guides each of our creations'
    },
    {
      icon: Leaf,
      title: language === 'fr' ? 'Naturel' : 'Natural',
      description: language === 'fr'
        ? 'Nous privilégions les ingrédients purs et respectueux de l\'environnement'
        : 'We favor pure ingredients that respect the environment'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Communauté' : 'Community',
      description: language === 'fr'
        ? 'Nous soutenons les artisans locaux et préservons les savoir-faire traditionnels'
        : 'We support local artisans and preserve traditional know-how'
    },
    {
      icon: Award,
      title: language === 'fr' ? 'Excellence' : 'Excellence',
      description: language === 'fr'
        ? 'Nous nous engageons à offrir la plus haute qualité dans chaque produit'
        : 'We are committed to offering the highest quality in every product'
    }
  ];

  const founders = [
    {
      name: 'Aicha Benali',
      role: language === 'fr' ? 'Co-fondatrice & Directrice Créative' : 'Co-founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b35c?w=300',
      story: language === 'fr'
        ? 'Née à Marrakech, Aicha a grandi entourée des traditions cosmétiques berbères transmises par sa grand-mère.'
        : 'Born in Marrakech, Aicha grew up surrounded by Berber cosmetic traditions passed down by her grandmother.'
    },
    {
      name: 'Youssef Alami',
      role: language === 'fr' ? 'Co-fondateur & Directeur Innovation' : 'Co-founder & Innovation Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      story: language === 'fr'
        ? 'Ingénieur cosmétique passionné, Youssef modernise les recettes ancestrales avec une approche scientifique.'
        : 'Passionate cosmetic engineer, Youssef modernizes ancestral recipes with a scientific approach.'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-100 to-pearl-200 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-clay-800 mb-6">
              {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
            </h1>
            <p className="hero-subtitle text-clay-600 mb-8">
              {language === 'fr' 
                ? 'Découvrez l\'histoire de Perle d\'Atlas, née de la rencontre entre tradition millénaire et innovation moderne'
                : 'Discover the story of Perle d\'Atlas, born from the meeting between millennial tradition and modern innovation'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title text-clay-800 mb-6">
                {language === 'fr' ? 'L\'Essence de notre Marque' : 'The Essence of our Brand'}
              </h2>
              <p className="elegant-text text-clay-700 leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Perle d\'Atlas est née d\'une vision : révéler au monde la richesse inestimable des traditions cosmétiques marocaines. Depuis des siècles, les femmes berbères ont développé des rituels de beauté utilisant les trésors botaniques de cette terre généreuse.'
                  : 'Perle d\'Atlas was born from a vision: to reveal to the world the invaluable richness of Moroccan cosmetic traditions. For centuries, Berber women have developed beauty rituals using the botanical treasures of this generous land.'
                }
              </p>
              <p className="elegant-text text-clay-700 leading-relaxed">
                {language === 'fr'
                  ? 'Aujourd\'hui, nous perpétuons cet héritage en créant des produits authentiques qui allient savoir-faire ancestral et techniques modernes, pour révéler la beauté naturelle de chaque femme.'
                  : 'Today, we perpetuate this heritage by creating authentic products that combine ancestral know-how and modern techniques, to reveal the natural beauty of every woman.'
                }
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600" 
                alt="Brand story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardContent className="p-8">
                  <div className="w-16 h-16 copper-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-clay-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="elegant-text text-clay-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-clay-800 mb-6">
              {language === 'fr' ? 'Nos Fondateurs' : 'Our Founders'}
            </h2>
            <p className="elegant-text text-clay-600 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Rencontrez les visionnaires qui ont donné naissance à Perle d\'Atlas'
                : 'Meet the visionaries who gave birth to Perle d\'Atlas'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-clay-800 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-copper-600 font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="elegant-text text-clay-600 leading-relaxed">
                    {founder.story}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Ethics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600" 
                alt="Sourcing ethics"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-title text-clay-800 mb-6">
                {language === 'fr' ? 'Éthique et Sourcing' : 'Ethics and Sourcing'}
              </h2>
              <p className="elegant-text text-clay-700 leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Nous travaillons directement avec les coopératives locales pour garantir un commerce équitable et soutenir les communautés rurales. Chaque ingrédient est soigneusement sélectionné pour sa pureté et sa traçabilité.'
                  : 'We work directly with local cooperatives to guarantee fair trade and support rural communities. Each ingredient is carefully selected for its purity and traceability.'
                }
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-copper-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-clay-800 mb-1">
                      {language === 'fr' ? 'Commerce équitable' : 'Fair trade'}
                    </h4>
                    <p className="text-clay-600 text-sm">
                      {language === 'fr'
                        ? 'Rémunération juste des producteurs locaux'
                        : 'Fair compensation for local producers'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-copper-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-clay-800 mb-1">
                      {language === 'fr' ? 'Développement durable' : 'Sustainable development'}
                    </h4>
                    <p className="text-clay-600 text-sm">
                      {language === 'fr'
                        ? 'Pratiques respectueuses de l\'environnement'
                        : 'Environmentally friendly practices'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-copper-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-clay-800 mb-1">
                      {language === 'fr' ? 'Traçabilité complète' : 'Complete traceability'}
                    </h4>
                    <p className="text-clay-600 text-sm">
                      {language === 'fr'
                        ? 'Origine connue de chaque ingrédient'
                        : 'Known origin of each ingredient'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default About;
