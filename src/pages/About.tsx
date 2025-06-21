
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Heart, Leaf, Users } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: language === 'fr' ? 'Sourçage Éthique' : 'Ethical Sourcing',
      description: language === 'fr' 
        ? 'Nous travaillons directement avec les communautés locales pour un commerce équitable.'
        : 'We work directly with local communities for fair trade.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: language === 'fr' ? 'Fait Main' : 'Handmade',
      description: language === 'fr'
        ? 'Chaque produit est créé avec soin en petites quantités par nos artisans.'
        : 'Each product is carefully crafted in small batches by our artisans.'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: language === 'fr' ? 'Respect de la Terre' : 'Respect for the Land',
      description: language === 'fr'
        ? 'Profond respect pour les ingrédients et l\'environnement marocain.'
        : 'Deep respect for ingredients and the Moroccan environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-100">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-pearl-50">
          <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title text-clay-800 mb-6">
                {language === 'fr' ? 'À Propos de Perle d\'Atlas' : 'About Perle d\'Atlas'}
              </h1>
              <p className="hero-subtitle text-clay-600 mb-8">
                {language === 'fr'
                  ? 'L\'alliance parfaite entre les traditions ancestrales marocaines et le mode de vie moderne'
                  : 'The perfect alliance between ancient Moroccan traditions and modern lifestyle'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-title text-clay-800 mb-6">
                    {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
                  </h2>
                  <p className="elegant-text text-clay-600 text-lg mb-6">
                    {language === 'fr'
                      ? 'Perle d\'Atlas est née de la passion de faire découvrir au monde entier les trésors de beauté du Maroc. Nous créons un pont entre les rituels ancestraux de bien-être marocains et les besoins de la femme moderne.'
                      : 'Perle d\'Atlas was born from the passion to introduce the world to Morocco\'s beauty treasures. We create a bridge between ancient Moroccan wellness rituals and the needs of the modern woman.'
                    }
                  </p>
                  <p className="elegant-text text-clay-600 text-lg">
                    {language === 'fr'
                      ? 'Chaque produit raconte une histoire, chaque ingrédient porte en lui des siècles de sagesse transmise de génération en génération.'
                      : 'Each product tells a story, each ingredient carries centuries of wisdom passed down from generation to generation.'
                    }
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80"
                    alt="Moroccan architecture"
                    className="rounded-lg luxury-shadow w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-pearl-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-lg luxury-shadow hover-scale">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-copper-100 rounded-full text-copper-600 mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-serif font-semibold text-xl text-clay-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="elegant-text text-clay-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-clay-800 mb-12 text-center">
                {language === 'fr' ? 'Nous Trouver' : 'Find Us'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* USA Address */}
                <div className="bg-white p-8 rounded-lg luxury-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-copper-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl text-clay-800 mb-2">
                        {language === 'fr' ? 'États-Unis' : 'United States'}
                      </h3>
                      <p className="elegant-text text-clay-600">
                        822 C Street #11<br />
                        Hayward, CA 94541<br />
                        États-Unis
                      </p>
                    </div>
                  </div>
                </div>

                {/* France Address - Coming Soon */}
                <div className="bg-pearl-100 p-8 rounded-lg border-2 border-dashed border-copper-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-copper-400 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl text-clay-600 mb-2">
                        France
                      </h3>
                      <p className="elegant-text text-clay-500 italic">
                        {language === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
                      </p>
                      <p className="elegant-text text-clay-500 text-sm mt-2">
                        {language === 'fr'
                          ? 'Nous préparons notre arrivée en France pour vous offrir une expérience encore plus proche.'
                          : 'We are preparing our arrival in France to offer you an even closer experience.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default About;
