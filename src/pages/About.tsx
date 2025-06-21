
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SamraEnhancedChatbot from '@/components/SamraEnhancedChatbot';
import FloatingCart from '@/components/FloatingCart';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Leaf, Award, Users, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const teamMembers = [
    {
      name: 'Aicha Benali',
      role: language === 'fr' ? 'Fondatrice & Maître Artisan' : 'Founder & Master Artisan',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?auto=format&fit=crop&w=400&q=80',
      bio: language === 'fr' 
        ? 'Héritière de 4 générations d\'artisans berbères, Aicha perpétue les traditions ancestrales.'
        : 'Heir to 4 generations of Berber artisans, Aicha perpetuates ancestral traditions.'
    },
    {
      name: 'Youssef Tazi',
      role: language === 'fr' ? 'Expert en Ingrédients' : 'Ingredient Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: language === 'fr'
        ? 'Botaniste spécialisé dans la flore marocaine et les propriétés des plantes médicinales.'
        : 'Botanist specialized in Moroccan flora and medicinal plant properties.'
    },
    {
      name: 'Fatima Amrani',
      role: language === 'fr' ? 'Responsable Qualité' : 'Quality Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      bio: language === 'fr'
        ? 'Chimiste cosmétique certifiée, elle garantit la pureté et l\'efficacité de nos produits.'
        : 'Certified cosmetic chemist, she ensures the purity and effectiveness of our products.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: language === 'fr' ? 'Authenticité' : 'Authenticity',
      description: language === 'fr'
        ? 'Nous préservons les recettes ancestrales transmises de génération en génération.'
        : 'We preserve ancestral recipes passed down through generations.'
    },
    {
      icon: Leaf,
      title: language === 'fr' ? 'Durabilité' : 'Sustainability',
      description: language === 'fr'
        ? 'Commerce équitable et protection de l\'environnement au cœur de nos actions.'
        : 'Fair trade and environmental protection at the heart of our actions.'
    },
    {
      icon: Award,
      title: language === 'fr' ? 'Excellence' : 'Excellence',
      description: language === 'fr'
        ? 'Qualité premium garantie par nos certifications biologiques et notre savoir-faire.'
        : 'Premium quality guaranteed by our organic certifications and expertise.'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Communauté' : 'Community',
      description: language === 'fr'
        ? 'Soutien aux coopératives féminines et développement local durable.'
        : 'Support for women\'s cooperatives and sustainable local development.'
    }
  ];

  const milestones = [
    {
      year: '1987',
      title: language === 'fr' ? 'Fondation' : 'Foundation',
      description: language === 'fr'
        ? 'Création de la première coopérative d\'argan dans les montagnes de l\'Atlas.'
        : 'Creation of the first argan cooperative in the Atlas Mountains.'
    },
    {
      year: '2010',
      title: language === 'fr' ? 'Certification Bio' : 'Organic Certification',
      description: language === 'fr'
        ? 'Obtention des certifications biologiques européennes et américaines.'
        : 'Obtaining European and American organic certifications.'
    },
    {
      year: '2018',
      title: language === 'fr' ? 'Prix International' : 'International Award',
      description: language === 'fr'
        ? 'Reconnaissance mondiale pour nos pratiques durables et notre qualité.'
        : 'Global recognition for our sustainable practices and quality.'
    },
    {
      year: '2023',
      title: language === 'fr' ? 'Expansion' : 'Expansion',
      description: language === 'fr'
        ? 'Lancement de Perle d\'Atlas et ouverture à l\'international.'
        : 'Launch of Perle d\'Atlas and international expansion.'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-clay-900/80 to-copper-900/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
            </h1>
            <p className="text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Une aventure familiale née dans les montagnes de l\'Atlas, où tradition et innovation se rencontrent pour créer des produits de beauté d\'exception.'
                : 'A family adventure born in the Atlas Mountains, where tradition and innovation meet to create exceptional beauty products.'
              }
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 mb-6">
                  {language === 'fr' ? 'L\'Héritage de Nos Ancêtres' : 'The Legacy of Our Ancestors'}
                </h2>
                <div className="space-y-4 text-clay-700 font-serif text-lg">
                  <p>
                    {language === 'fr'
                      ? 'Depuis quatre générations, notre famille perpétue les secrets de beauté berbères dans les villages reculés de l\'Atlas marocain. Chaque recette, chaque geste, chaque ingrédient raconte une histoire millénaire.'
                      : 'For four generations, our family has perpetuated Berber beauty secrets in the remote villages of the Moroccan Atlas. Every recipe, every gesture, every ingredient tells a thousand-year-old story.'
                    }
                  </p>
                  <p>
                    {language === 'fr'
                      ? 'Perle d\'Atlas est née de cette passion pour l\'authenticité, alliant le savoir-faire ancestral aux standards de qualité les plus exigeants pour vous offrir le meilleur du Maroc.'
                      : 'Perle d\'Atlas was born from this passion for authenticity, combining ancestral know-how with the most demanding quality standards to offer you the best of Morocco.'
                    }
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80"
                  alt="Artisan at work"
                  className="rounded-2xl luxury-shadow w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl luxury-shadow">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-8 w-8 text-copper-600" />
                    <div>
                      <p className="font-bold text-clay-800">35+</p>
                      <p className="text-sm text-clay-600">
                        {language === 'fr' ? 'Années d\'expertise' : 'Years of expertise'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 mb-4">
                {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
              </h2>
              <p className="text-xl text-clay-600 font-serif max-w-2xl mx-auto">
                {language === 'fr'
                  ? 'Les principes qui guident chacune de nos actions et décisions.'
                  : 'The principles that guide each of our actions and decisions.'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 luxury-shadow hover-scale">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-copper-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-copper-600" />
                    </div>
                    <h3 className="font-bold text-xl text-clay-800 mb-4">{value.title}</h3>
                    <p className="text-clay-600 font-serif">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 mb-4">
                {language === 'fr' ? 'Notre Équipe' : 'Our Team'}
              </h2>
              <p className="text-xl text-clay-600 font-serif max-w-2xl mx-auto">
                {language === 'fr'
                  ? 'Les artisans passionnés qui donnent vie à nos produits d\'exception.'
                  : 'The passionate artisans who bring our exceptional products to life.'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-0 luxury-shadow hover-scale overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-clay-800 mb-2">{member.name}</h3>
                    <Badge className="mb-4 bg-copper-100 text-copper-700 hover:bg-copper-200">
                      {member.role}
                    </Badge>
                    <p className="text-clay-600 font-serif">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 mb-4">
                {language === 'fr' ? 'Notre Parcours' : 'Our Journey'}
              </h2>
              <p className="text-xl text-clay-600 font-serif max-w-2xl mx-auto">
                {language === 'fr'
                  ? 'Les moments clés qui ont façonné notre histoire.'
                  : 'The key moments that shaped our story.'
                }
              </p>
            </div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-copper-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-clay-800 mb-2">{milestone.title}</h3>
                    <p className="text-clay-600 font-serif">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artisan Partnerships */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
                  alt="Artisan partnership"
                  className="rounded-2xl luxury-shadow w-full"
                />
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl luxury-shadow">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-8 w-8 text-copper-600" />
                    <div>
                      <p className="font-bold text-clay-800">12</p>
                      <p className="text-sm text-clay-600">
                        {language === 'fr' ? 'Coopératives' : 'Cooperatives'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-clay-800 mb-6">
                  {language === 'fr' ? 'Nos Partenaires Artisans' : 'Our Artisan Partners'}
                </h2>
                <div className="space-y-4 text-clay-700 font-serif text-lg">
                  <p>
                    {language === 'fr'
                      ? 'Nous travaillons en partenariat direct avec 12 coopératives féminines réparties dans tout le Maroc, de l\'Atlas à l\'Anti-Atlas, en passant par les oasis du Sud.'
                      : 'We work in direct partnership with 12 women\'s cooperatives spread throughout Morocco, from the Atlas to the Anti-Atlas, including the southern oases.'
                    }
                  </p>
                  <p>
                    {language === 'fr'
                      ? 'Chaque partenariat garantit un commerce équitable, des salaires justes et le respect des traditions ancestrales. Ensemble, nous préservons un savoir-faire unique tout en créant des opportunités économiques durables.'
                      : 'Each partnership guarantees fair trade, fair wages and respect for ancestral traditions. Together, we preserve unique know-how while creating sustainable economic opportunities.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <SamraEnhancedChatbot />
      <FloatingCart />
      <BackToTop />
    </div>
  );
};

export default About;
