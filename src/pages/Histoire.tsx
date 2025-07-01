
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useLanguage } from '@/contexts/LanguageContext';

const Histoire = () => {
  const { language } = useLanguage();

  const storySection = [
    {
      title: language === 'fr' ? 'Les Origines' : 'The Origins',
      content: language === 'fr' 
        ? 'Tout a commencé dans les souks parfumés de Marrakech, où nos fondateurs ont découvert les secrets ancestraux de la beauté marocaine. Fascinés par la richesse des traditions berbères et la pureté des ingrédients naturels, ils ont entrepris un voyage à travers le Maroc pour rencontrer les artisans locaux et apprendre leurs techniques millénaires.'
        : 'It all began in the fragrant souks of Marrakech, where our founders discovered the ancestral secrets of Moroccan beauty. Fascinated by the richness of Berber traditions and the purity of natural ingredients, they embarked on a journey across Morocco to meet local artisans and learn their thousand-year-old techniques.',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: language === 'fr' ? 'L\'Inspiration' : 'The Inspiration',
      content: language === 'fr'
        ? 'L\'Atlas marocain, avec ses sommets enneigés et ses vallées verdoyantes, a toujours été le berceau de trésors botaniques exceptionnels. L\'huile d\'argan, appelée "or liquide", pousse uniquement dans cette région du monde. Cette rareté et cette beauté naturelle ont inspiré notre vision : créer une marque qui honore et partage ces merveilles avec le monde entier.'
        : 'The Moroccan Atlas, with its snow-capped peaks and verdant valleys, has always been the cradle of exceptional botanical treasures. Argan oil, called "liquid gold," grows only in this region of the world. This rarity and natural beauty inspired our vision: to create a brand that honors and shares these wonders with the world.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: language === 'fr' ? 'Le Maroc au Cœur' : 'Morocco at Heart',
      content: language === 'fr'
        ? 'Chaque produit Perle d\'Atlas est le fruit d\'une collaboration étroite avec les communautés locales. Nous travaillons directement avec les coopératives féminines berbères, garantissant un commerce équitable et le respect des traditions. Notre engagement va au-delà de la beauté : il s\'agit de préserver un patrimoine culturel et de soutenir les femmes artisanes du Maroc.'
        : 'Every Perle d\'Atlas product is the result of close collaboration with local communities. We work directly with Berber women\'s cooperatives, ensuring fair trade and respect for traditions. Our commitment goes beyond beauty: it\'s about preserving cultural heritage and supporting Morocco\'s artisan women.',
      image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pearl-100 to-yellow-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1200&q=80"
              alt="Notre Histoire"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="font-serif font-bold text-5xl md:text-7xl mb-6 tracking-tight text-shadow-lg">
                {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
              </h1>
              <p className="font-serif text-xl md:text-2xl font-light leading-relaxed opacity-90">
                {language === 'fr' 
                  ? 'Un voyage à travers les traditions millénaires du Maroc'
                  : 'A journey through Morocco\'s thousand-year-old traditions'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Story Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-32">
              {storySection.map((section, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Text Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-flex items-center bg-copper-100 px-6 py-2 rounded-full">
                      <span className="text-sm font-medium text-copper-800 tracking-wide font-serif">
                        {language === 'fr' ? 'Chapitre' : 'Chapter'} {index + 1}
                      </span>
                    </div>
                    
                    <h2 className="font-serif font-bold text-4xl lg:text-5xl text-clay-800 leading-tight">
                      {section.title}
                    </h2>
                    
                    <p className="font-serif text-lg lg:text-xl leading-relaxed text-clay-600 tracking-wide">
                      {section.content}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                      <img 
                        src={section.image}
                        alt={section.title}
                        className="w-full h-96 lg:h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-copper-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-8 leading-tight">
                {language === 'fr' 
                  ? 'Découvrez nos créations authentiques'
                  : 'Discover our authentic creations'
                }
              </h2>
              <p className="font-serif text-xl text-white/90 mb-10 leading-relaxed">
                {language === 'fr'
                  ? 'Chaque produit raconte une histoire, chaque fragrance évoque un souvenir'
                  : 'Every product tells a story, every fragrance evokes a memory'
                }
              </p>
              <a 
                href="/catalogue"
                className="inline-flex items-center bg-white text-copper-700 px-8 py-4 rounded-full font-serif font-semibold text-lg hover:bg-pearl-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {language === 'fr' ? 'Explorer notre catalogue' : 'Explore our catalog'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Histoire;
