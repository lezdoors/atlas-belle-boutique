
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Leaf, ShieldCheck, Award } from 'lucide-react';

const NotreHeritage = () => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const values = [
    {
      icon: Leaf,
      title: "100% naturel",
      description: language === 'fr' ? 'Ingrédients purs des montagnes de l\'Atlas' : 'Pure ingredients from the Atlas mountains'
    },
    {
      icon: Heart,
      title: "Fait main au Maroc", 
      description: language === 'fr' ? 'Artisanat traditionnel authentique' : 'Authentic traditional craftsmanship'
    },
    {
      icon: ShieldCheck,
      title: "Sans cruauté",
      description: language === 'fr' ? 'Respectueux des animaux et de la nature' : 'Respectful of animals and nature'
    },
    {
      icon: Award,
      title: "Certifié biologique",
      description: language === 'fr' ? 'Certifications biologiques reconnues' : 'Recognized organic certifications'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MaisonStyleHeaderNew />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/videos/Riyad-entrance.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight">
            Notre Héritage
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Un voyage entre traditions marocaines et élégance moderne.
          </p>
        </div>
      </section>

      {/* Section 1: Un Savoir-Faire Ancien */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
                Un Savoir-Faire Ancien
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                Née au cœur de l'Atlas, Perle de l'Atlas puise son inspiration dans les secrets ancestraux transmis de génération en génération. Chaque fragrance, chaque élixir, raconte une histoire marocaine — celle des femmes, des terres, et du temps.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="/lovable-uploads/moroccan-architecture.jpg"
                alt="Moroccan Architecture"
                className="w-full h-96 object-cover rounded-3xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Timeline Style */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-2 animate-fade-in">
              <img
                src="/lovable-uploads/coastal-natural-beauty.jpg"
                alt="Moroccan Landscape"
                className="w-full h-96 object-cover rounded-3xl shadow-luxury"
              />
            </div>
            <div className="lg:order-1 animate-fade-in">
              <div className="text-sm font-light text-black/60 mb-4 tracking-wide">
                200 ans plus tard…
              </div>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                Nos racines plongent dans les vallées berbères et les traditions de beauté du désert. Aujourd'hui, nous honorons cet héritage en créant des produits qui lient l'âme du passé à la pureté contemporaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Family & Legacy */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
              Toujours une histoire de famille
            </h2>
            <p className="text-lg font-light text-black/70 leading-relaxed max-w-4xl mx-auto">
              Perle de l'Atlas est née d'une volonté familiale de préserver et célébrer l'artisanat marocain. Nos fondateurs perpétuent un héritage à travers des gestes simples mais précieux : distiller, infuser, composer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
            <div className="text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-refined">
                <img
                  src="/lovable-uploads/6d0913b6-03ca-40b5-9002-ea188762b64f.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-black mb-2">Yasmine Atlas</h3>
              <p className="text-black/60 font-light text-sm">
                Co-fondatrice
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-refined">
                <img
                  src="/lovable-uploads/6fde7854-c65c-40e6-8df6-8d9ca69c3fc8.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light text-black mb-2">Karim Atlas</h3>
              <p className="text-black/60 font-light text-sm">
                Co-fondateur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Values Icons */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-elegant">
                  <value.icon className="h-8 w-8 text-black/70" />
                </div>
                <h3 className="text-lg font-light text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="py-24 lg:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Notre histoire ne fait que commencer…
          </h2>
          <Link 
            to="/catalogue"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-light transition-all duration-300 hover:bg-white/90 hover:scale-105"
          >
            Découvrir la collection →
          </Link>
        </div>
      </section>

      <ModernElegantFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default NotreHeritage;
