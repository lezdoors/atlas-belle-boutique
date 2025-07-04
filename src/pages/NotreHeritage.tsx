
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

      {/* Secrets de la Terre - Luxury Ingredient Showcase */}
      <section className="py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8860b' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 mb-8">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-600"></div>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-stone-800 mb-8 tracking-tight">
              Secrets de la Terre
            </h2>
            <p className="font-serif text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Chaque essence révèle l'âme d'un terroir, chaque extraction dévoile des siècles de sagesse botanique. 
              Découvrez les trésors précieux qui composent nos créations d'exception.
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Argan - L'Or Liquide */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/argan%20tree.jpg"
                    alt="Arganier ancestral"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-500 to-amber-600"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Argan</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">L'or liquide de l'Atlas</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Pressé à froid dans les coopératives féminines du Sud marocain
                  </p>
                </div>
              </div>
            </div>

            {/* Rose - La Reine de Kelâa */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/pink%20flower.jpg"
                    alt="Rose de Damas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-500 to-rose-600"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Rose</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">La reine des jardins de Kelâa</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Cueillie à l'aube pour préserver sa délicate essence florale
                  </p>
                </div>
              </div>
            </div>

            {/* Cèdre - Le Gardien des Forêts */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/cedar-wood.jpg"
                    alt="Cèdre de l'Atlas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500 to-teal-600"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Cèdre</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">Le gardien des forêts</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Distillé selon les méthodes ancestrales des maîtres parfumeurs
                  </p>
                </div>
              </div>
            </div>

            {/* Atlas - Les Montagnes Éternelles */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/Atlas%20Mountains.jpg"
                    alt="Montagnes de l'Atlas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Atlas</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">Les montagnes éternelles</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Source pure des eaux cristallines et des plantes sauvages
                  </p>
                </div>
              </div>
            </div>

            {/* Jasmin - La Fleur de la Nuit */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/Jasmin.jpg"
                    alt="Fleurs de jasmin"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Jasmin</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">La fleur de la nuit</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Capturée au cœur de la nuit pour sa fragrance envoûtante
                  </p>
                </div>
              </div>
            </div>

            {/* Oud - Le Bois Sacré */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/Oud%20wood.jpg"
                    alt="Bois d'Oud"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-800 to-amber-900"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Oud</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">Le bois sacré d'Orient</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Précieux comme l'or, vénéré depuis des millénaires
                  </p>
                </div>
              </div>
            </div>

            {/* Safran - L'Épice Précieuse */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/Safran.jpg"
                    alt="Safran de Taliouine"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-orange-600"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Safran</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">L'épice précieuse de Taliouine</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Récolté à la main, stigmate par stigmate, au petit matin
                  </p>
                </div>
              </div>
            </div>

            {/* Menthe - La Fraîcheur des Jardins */}
            <div className="group relative">
              <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-stone-100">
                <div className="relative h-2/3 overflow-hidden">
                  <img 
                    src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/media/mint%20leaves.jpg"
                    alt="Menthe fraîche"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-green-600"></div>
                  </div>
                </div>
                <div className="p-8 h-1/3 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-800 mb-2">Menthe</h3>
                  <p className="text-sm text-stone-600 font-light mb-3">La fraîcheur des jardins</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Cultivée dans les jardins secrets de Fès depuis des siècles
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-20">
            <div className="max-w-3xl mx-auto">
              <p className="font-serif text-lg text-stone-600 leading-relaxed italic">
                "Chaque ingrédient est une promesse, chaque essence une révélation. 
                Nous ne créons pas simplement des parfums, nous révélons l'âme de la terre marocaine."
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
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
