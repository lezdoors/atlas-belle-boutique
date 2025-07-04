
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import BackToTop from '@/components/BackToTop';
import CertificationBanner from '@/components/CertificationBanner';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Heart, Leaf, Users, Award, Globe, Target } from 'lucide-react';

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
      <MaisonStyleHeaderNew />
      
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
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//women%20face%20covered.jpg"
                    alt={language === 'fr' ? 'Femme marocaine traditionnelle' : 'Traditional Moroccan woman'}
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Morocco Address */}
                <div className="bg-white p-8 rounded-lg luxury-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-copper-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl text-clay-800 mb-2">
                        {language === 'fr' ? 'Maroc' : 'Morocco'}
                      </h3>
                      <p className="elegant-text text-clay-600">
                        {language === 'fr' ? 'Région de l\'Atlas' : 'Atlas Region'}<br />
                        {language === 'fr' ? 'Coopératives locales' : 'Local cooperatives'}<br />
                        {language === 'fr' ? 'Maroc' : 'Morocco'}
                      </p>
                    </div>
                  </div>
                </div>

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

        {/* Founder Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <img 
                      src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media//Tente-light.jpg"
                      alt={language === 'fr' ? 'Tente traditionnelle marocaine' : 'Traditional Moroccan tent'}
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <Target className="h-6 w-6 text-stone-600 mr-3" />
                    <span className="text-sm font-medium text-stone-600 tracking-wide uppercase">
                      {language === 'fr' ? 'Notre Fondatrice' : 'Our Founder'}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl font-light text-stone-800 mb-6">
                    {language === 'fr' ? 'Une Vision, Une Passion' : 'One Vision, One Passion'}
                  </h2>
                  <blockquote className="text-xl italic text-stone-700 mb-6 border-l-4 border-stone-300 pl-6">
                    "{language === 'fr' 
                      ? 'Chaque voyage au Maroc révélait des trésors cachés. J\'ai voulu partager cette beauté authentique avec le monde entier.'
                      : 'Every trip to Morocco revealed hidden treasures. I wanted to share this authentic beauty with the entire world.'
                    }"
                  </blockquote>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {language === 'fr'
                      ? 'Née d\'une passion pour l\'artisanat marocain et d\'un profond respect pour ses traditions, Perle d\'Atlas a vu le jour après des années de collaboration avec des coopératives locales. Chaque produit reflète notre engagement envers l\'authenticité et la qualité.'
                      : 'Born from a passion for Moroccan craftsmanship and deep respect for its traditions, Perle d\'Atlas came to life after years of collaboration with local cooperatives. Each product reflects our commitment to authenticity and quality.'
                    }
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-stone-800">15+</div>
                      <div className="text-sm text-stone-600">{language === 'fr' ? 'Années d\'expérience' : 'Years of experience'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-stone-800">50+</div>
                      <div className="text-sm text-stone-600">{language === 'fr' ? 'Artisans partenaires' : 'Partner artisans'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-stone-800">8</div>
                      <div className="text-sm text-stone-600">{language === 'fr' ? 'Régions du Maroc' : 'Regions of Morocco'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press & Recognition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-stone-600 mr-3" />
                <span className="text-sm font-medium text-stone-600 tracking-wide uppercase">
                  {language === 'fr' ? 'Reconnaissance' : 'Recognition'}
                </span>
              </div>
              <h2 className="font-serif text-3xl font-light text-stone-800 mb-4">
                {language === 'fr' ? 'Dans les Médias' : 'In the Media'}
              </h2>
              <p className="text-stone-600 mb-12 max-w-2xl mx-auto">
                {language === 'fr'
                  ? 'Notre engagement pour l\'artisanat authentique et la qualité a été reconnu par des publications prestigieuses.'
                  : 'Our commitment to authentic craftsmanship and quality has been recognized by prestigious publications.'
                }
              </p>
              
              {/* Press Quotes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-stone-50 p-8 rounded-lg">
                  <blockquote className="text-lg italic text-stone-700 mb-4">
                    "{language === 'fr'
                      ? 'Une collection exceptionnelle qui capture l\'essence même de l\'artisanat marocain.'
                      : 'An exceptional collection that captures the very essence of Moroccan craftsmanship.'
                    }"
                  </blockquote>
                  <cite className="text-sm font-medium text-stone-600">— Vogue Magazine</cite>
                </div>
                <div className="bg-stone-50 p-8 rounded-lg">
                  <blockquote className="text-lg italic text-stone-700 mb-4">
                    "{language === 'fr'
                      ? 'Des produits qui racontent l\'histoire riche du patrimoine marocain avec élégance.'
                      : 'Products that tell the rich story of Moroccan heritage with elegance.'
                    }"
                  </blockquote>
                  <cite className="text-sm font-medium text-stone-600">— Forbes Lifestyle</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <CertificationBanner />
      </main>

      <ModernElegantFooter />
      <BackToTop />
    </div>
  );
};

export default About;
