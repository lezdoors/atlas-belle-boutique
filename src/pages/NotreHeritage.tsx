
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

      {/* Heritage Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-serif text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
            Notre héritage est un tissage vivant de traditions, d'histoires et d'artisanat transmis à travers les générations. À travers Perle de l'Atlas, nous célébrons cet héritage en le rendant accessible au monde entier, avec respect, passion et fierté.
          </p>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <blockquote className="font-serif text-xl md:text-2xl italic text-stone-700 leading-relaxed">
              "Comme un verre de thé à la menthe au lever du jour — c'est toute une mémoire marocaine que je retrouve dans chaque parfum."
            </blockquote>
            <blockquote className="font-serif text-xl md:text-2xl italic text-stone-700 leading-relaxed">
              "Chaque flacon est un peu comme un tajine qui mijote lentement — il révèle des secrets d'antan, couche par couche."
            </blockquote>
            <cite className="text-sm text-stone-500 font-light tracking-wide">
              — Perle de l'Atlas
            </cite>
          </div>
        </div>
      </section>

      {/* Botanical Legacy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-serif text-lg font-light text-stone-700 leading-relaxed">
            Louis Marie Aubert du Petit-Thouars, pionnier de la botanique française, a exploré Madagascar, La Réunion et l'île Maurice durant son exil révolutionnaire. Il y découvrit plus de 2000 espèces végétales avant de rentrer en France, où il fut élu à l'Académie des Sciences. Son héritage inspire aujourd'hui notre démarche — entre science botanique et art de vivre marocain.
          </p>
        </div>
      </section>

      <ModernElegantFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default NotreHeritage;
