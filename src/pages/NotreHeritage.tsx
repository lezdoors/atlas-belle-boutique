
import React, { useEffect, useRef, useState } from 'react';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import { useLanguage } from '@/contexts/LanguageContext';

const NotreHeritage = () => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        setVideoLoaded(true);
        video.play().catch(console.error);
      };
      
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      
      // Force load the video
      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/videos/Riyad-entrance.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback background */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900"></div>
        )}
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center text-white px-6 lg:px-8 max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
            Notre Héritage
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide uppercase opacity-90">
            Une histoire enracinée entre botanique et artisanat marocain
          </p>
        </div>
      </section>

      {/* Storytelling Block */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <blockquote className="font-serif text-3xl md:text-4xl font-light text-stone-800 leading-relaxed mb-8 italic">
              "Dans chaque geste de nos artisans résonne l'écho des siècles passés, 
              où la botanique et l'art de vivre se rencontrent dans l'harmonie parfaite."
            </blockquote>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-center font-serif text-stone-700">
            <p className="text-xl leading-relaxed mb-8">
              Depuis des générations, dans les vallées de l'Atlas et les jardins secrets de Fès, 
              une tradition se perpétue. Les maîtres parfumeurs berbères, gardiens d'un savoir ancestral, 
              transmettent leurs secrets de mère en fille, de maître à apprenti.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-stone-600">
              Cette tradition millénaire trouve ses racines dans la rencontre entre les botanistes andalous 
              et les herboristes berbères, créant une alchimie unique où la science botanique européenne 
              épouse la sagesse traditionnelle marocaine.
            </p>
            <p className="text-lg leading-relaxed text-stone-600">
              Aujourd'hui, nous honorons cet héritage en préservant ces techniques séculaires, 
              tout en les adaptant aux aspirations contemporaines d'authenticité et de qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-6">
              Les Racines de Notre Héritage
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-amber-600 via-indigo-600 to-amber-600 opacity-30"></div>
            
            <div className="space-y-16">
              {/* Timeline Item 1 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-4">XIe Siècle</h3>
                  <h4 className="font-serif text-xl text-indigo-700 mb-3">Médecine Berbère Traditionnelle</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Les guérisseurs berbères développent l'art de l'extraction d'huiles essentielles 
                    dans les montagnes de l'Atlas, créant les premières formules thérapeutiques.
                  </p>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-4">XIIe-XVe Siècles</h3>
                  <h4 className="font-serif text-xl text-indigo-700 mb-3">L'Âge d'Or de la Parfumerie Andalouse</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Les parfumeurs d'Al-Andalus perfectionnent les techniques de distillation, 
                    créant des fragrances sophistiquées à base de rose, d'oud et de jasmin.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-4">XVIe-XVIIe Siècles</h3>
                  <h4 className="font-serif text-xl text-indigo-700 mb-3">Renaissance de l'Artisanat Marocain</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Les dynasties Saadienne et Alaouite encouragent le développement des arts décoratifs 
                    et de la parfumerie, établissant les ateliers de Fès et Meknès.
                  </p>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12"></div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-4">XXIe Siècle</h3>
                  <h4 className="font-serif text-xl text-indigo-700 mb-3">Renaissance Contemporaine</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Une nouvelle génération d'artisans perpétue la tradition tout en l'adaptant 
                    aux standards internationaux de qualité et de durabilité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Grid - Refined Heritage Ingredients */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-800 mb-6">
              Les Trésors de Notre Terre
            </h2>
            <p className="font-serif text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Chaque ingrédient raconte l'histoire d'un terroir, d'un savoir-faire, d'une tradition préservée
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Argan */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Argan</h3>
                <p className="text-sm text-stone-500 font-light">L'or liquide de l'Atlas</p>
              </div>
            </div>

            {/* Rose */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-rose-400/20 to-rose-600/20 border-2 border-rose-400/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-rose-600"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Rose</h3>
                <p className="text-sm text-stone-500 font-light">La reine des jardins de Kelâa</p>
              </div>
            </div>

            {/* Oud */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-amber-800/20 to-amber-900/20 border-2 border-amber-800/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-800 to-amber-900"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Oud</h3>
                <p className="text-sm text-stone-500 font-light">Le bois sacré d'Orient</p>
              </div>
            </div>

            {/* Atlas */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 border-2 border-indigo-400/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Atlas</h3>
                <p className="text-sm text-stone-500 font-light">Les montagnes éternelles</p>
              </div>
            </div>

            {/* Jasmin */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border-2 border-emerald-400/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Jasmin</h3>
                <p className="text-sm text-stone-500 font-light">La fleur de la nuit</p>
              </div>
            </div>

            {/* Cèdre */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-teal-400/20 to-teal-600/20 border-2 border-teal-400/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Cèdre</h3>
                <p className="text-sm text-stone-500 font-light">Le gardien des forêts</p>
              </div>
            </div>

            {/* Safran */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-orange-400/20 to-orange-600/20 border-2 border-orange-400/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Safran</h3>
                <p className="text-sm text-stone-500 font-light">L'épice précieuse de Taliouine</p>
              </div>
            </div>

            {/* Menthe */}
            <div className="group relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-stone-200/50">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br from-green-400/20 to-green-600/20 border-2 border-green-400/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600"></div>
                </div>
                <h3 className="font-serif text-xl font-medium text-stone-800 mb-2">Menthe</h3>
                <p className="text-sm text-stone-500 font-light">La fraîcheur des jardins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Heritage Statement */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-800 mb-8">
              Un Héritage Vivant
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-indigo-600 to-transparent mx-auto mb-8"></div>
          </div>
          
          <blockquote className="font-serif text-2xl md:text-3xl font-light text-stone-700 leading-relaxed mb-8 italic">
            "Nous ne préservons pas seulement des recettes ou des techniques, 
            nous transmettons une âme, un art de vivre, une philosophie de beauté 
            qui transcende les époques."
          </blockquote>
          
          <p className="font-serif text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
            Chaque création porte en elle cette richesse culturelle millénaire, 
            cette passion pour l'excellence artisanale, cette quête perpétuelle 
            de l'harmonie entre tradition et modernité.
          </p>
        </div>
      </section>

      <ModernElegantFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default NotreHeritage;
