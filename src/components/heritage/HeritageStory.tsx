
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeritageStory = () => {
  const { language } = useLanguage();

  return (
    <section id="heritage-content" className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-black leading-tight">
              {language === 'fr' ? 'L\'Âme de l\'Atlas' : 'The Soul of Atlas'}
            </h2>
            
            <div className="space-y-6 text-lg font-light text-black/70 leading-relaxed">
              <p>
                {language === 'fr'
                  ? 'Au cœur des montagnes de l\'Atlas, là où les traditions se transmettent de génération en génération, naît notre histoire. Chaque produit Perle d\'Atlas puise ses racines dans ce savoir ancestral.'
                  : 'In the heart of the Atlas Mountains, where traditions are passed down from generation to generation, our story begins. Each Perle d\'Atlas product draws its roots from this ancestral knowledge.'
                }
              </p>
              
              <p>
                {language === 'fr'
                  ? 'Nos artisans berbères, gardiens de techniques millénaires, transforment les trésors de la terre marocaine en créations d\'exception. L\'huile d\'argan, le ghassoul, l\'eau de rose... autant d\'ingrédients précieux qui révèlent votre beauté naturelle.'
                  : 'Our Berber artisans, guardians of millenary techniques, transform the treasures of Moroccan land into exceptional creations. Argan oil, ghassoul, rose water... precious ingredients that reveal your natural beauty.'
                }
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl overflow-hidden">
              <img
                src="/lovable-uploads/hero-image-atlas-landscape.jpg"
                alt="Atlas Mountains"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-copper-200 to-clay-200 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Restez connectée Section */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 lg:p-20 mb-32">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extralight text-black mb-8">
              {language === 'fr' ? 'Restez connectée à nos créations' : 'Stay connected to our creations'}
            </h3>
            
            <p className="text-lg font-light text-black/70 mb-12 leading-relaxed">
              {language === 'fr'
                ? 'Découvrez en avant-première nos nouveautés, participez à nos ateliers beauté et recevez nos conseils personnalisés pour sublimer votre routine.'
                : 'Discover our latest creations in preview, participate in our beauty workshops and receive our personalized advice to enhance your routine.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1 max-w-sm">
                <input
                  type="email"
                  placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                  className="w-full px-6 py-4 rounded-full border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 text-center font-light"
                />
              </div>
              <button className="bg-black text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-black/90 transition-all duration-300 hover:scale-105">
                {language === 'fr' ? 'S\'abonner' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Rituel de Protection Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-copper-50 to-clay-50 rounded-3xl overflow-hidden">
              <img
                src="/lovable-uploads/moroccan-architecture.jpg"
                alt="Moroccan Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-copper-200 to-clay-200 rounded-full opacity-25"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-35"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-4xl md:text-5xl font-extralight text-black leading-tight">
              {language === 'fr' ? 'Rituel de Protection' : 'Protection Ritual'}
            </h3>
            
            <div className="space-y-6 text-lg font-light text-black/70 leading-relaxed">
              <p>
                {language === 'fr'
                  ? 'Inspiré des traditions berbères, notre rituel de protection unit les forces de la nature pour préserver et sublimer votre beauté. Chaque geste, chaque produit est pensé pour créer une harmonie parfaite.'
                  : 'Inspired by Berber traditions, our protection ritual unites the forces of nature to preserve and enhance your beauty. Every gesture, every product is designed to create perfect harmony.'
                }
              </p>
              
              <p>
                {language === 'fr'
                  ? 'De l\'huile d\'argan aux eaux florales, découvrez comment nos ancêtres protégeaient leur peau des agressions du désert tout en révélant leur éclat naturel.'
                  : 'From argan oil to floral waters, discover how our ancestors protected their skin from desert aggressions while revealing their natural radiance.'
                }
              </p>
            </div>

            <button className="border-2 border-black/20 text-black px-8 py-4 rounded-full font-light tracking-wide hover:bg-black/5 transition-all duration-300 hover:scale-105">
              {language === 'fr' ? 'Découvrir le rituel' : 'Discover the ritual'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageStory;
