
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Heart, Recycle, Building } from 'lucide-react';

const NotreHeritage = () => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const engagements = [
    {
      icon: Leaf,
      title: "Ingrédients 100% naturels",
    },
    {
      icon: Heart,
      title: "Jamais testés sur les animaux", 
    },
    {
      icon: Recycle,
      title: "Emballages recyclables",
    },
    {
      icon: Building,
      title: "Fabriqué au Maroc, avec amour",
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
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
            Un voyage sensoriel à travers les traditions marocaines, les plantes sacrées et la beauté du désert.
          </p>
        </div>
      </section>

      {/* Section 1: Histoire Ancestrale */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-12 tracking-tight">
            Il y a des siècles…
          </h2>
          <p className="text-xl font-light text-black/70 leading-relaxed">
            Au cœur de l'Atlas, nos ancêtres utilisaient déjà les plantes pour parfumer, guérir et célébrer. Des recettes précieuses, transmises de génération en génération, sont aujourd'hui à la base de chaque création Perle de l'Atlas.
          </p>
        </div>
      </section>

      {/* Botanical Legacy Block */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <blockquote className="font-serif text-2xl md:text-3xl italic text-black/80 mb-6 leading-relaxed">
              "Des inconnus m'arrêtent pour me demander quel parfum je porte."
            </blockquote>
            <cite className="text-sm text-black/60 font-light">
              — Une cliente Perle de l'Atlas, Paris
            </cite>
          </div>
          
          <div className="text-center">
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-black mb-8">
              Une tradition botanique marocaine
            </h3>
            <p className="text-lg font-light text-black/70 leading-relaxed">
              Depuis des générations, les plantes du Haut Atlas sont utilisées pour soigner, parfumer et préserver la peau. Nos ancêtres connaissaient les secrets du ghassoul, de la rose de Damas, du figuier, du myrte sauvage…<br /><br />
              Aujourd'hui, Perle de l'Atlas perpétue cet héritage avec rigueur, amour et créativité — entre science et tradition, entre le passé et la beauté moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Renaissance Moderne */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
                Aujourd'hui…
              </h2>
              <p className="text-lg font-light text-black/70 leading-relaxed">
                Perle de l'Atlas est née du désir de marier tradition marocaine et esthétique contemporaine. Nous créons des parfums, des soins et des objets avec authenticité, respect et élégance.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="/lovable-uploads/coastal-natural-beauty.jpg"
                alt="Perle de l'Atlas Modern Renaissance"
                className="w-full h-96 object-cover rounded-3xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Une Histoire de Famille */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
              Toujours une affaire de famille
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-light text-black mb-4">Naoufal</h3>
              <p className="text-black/70 font-light leading-relaxed">
                Vision stratégique, passion du patrimoine marocain.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-light text-black mb-4">Nina</h3>
              <p className="text-black/70 font-light leading-relaxed">
                Créatrice visuelle, alchimiste des plantes et des mots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Engagements */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-black mb-8 tracking-tight">
              Notre promesse
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagements.map((engagement, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
                  <engagement.icon className="h-8 w-8 text-stone-700" />
                </div>
                <h3 className="text-lg font-light text-black">
                  {engagement.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 lg:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Perle de l'Atlas — là où les traditions deviennent luxe.
          </h2>
          <Link 
            to="/catalogue"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-light transition-all duration-300 hover:bg-white/90 hover:scale-105"
          >
            Découvrir nos créations →
          </Link>
        </div>
      </section>

      <ModernElegantFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default NotreHeritage;
