
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MaisonStyleHeaderNew from '@/components/MaisonStyleHeaderNew';
import ModernElegantFooter from '@/components/ModernElegantFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';
import { useLanguage } from '@/contexts/LanguageContext';

const NotreHeritage = () => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
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
          <source src="https://yiqvfmspqdrdlaqedlfv.supabase.co/storage/v1/object/public/videos//Riyad-entrance.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center text-white px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight animate-fade-in">
            Notre Héritage
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide uppercase opacity-90 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Une histoire enracinée entre botanique et artisanat marocain
          </p>
        </div>
      </section>

      {/* Heritage Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg font-light text-stone-700 leading-relaxed">
            Notre héritage est un tissage vivant de traditions, d'histoires et d'artisanat transmis à travers les générations. À travers Perle de l'Atlas, nous célébrons cet héritage en le rendant accessible au monde entier, avec respect, passion et fierté.
          </p>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
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
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <p className="text-lg font-light text-stone-700 leading-relaxed">
              Louis Marie Aubert du Petit-Thouars, pionnier de la botanique française, a exploré Madagascar, La Réunion et l'île Maurice durant son exil révolutionnaire. Il y découvrit plus de 2000 espèces végétales avant de rentrer en France, où il fut élu à l'Académie des Sciences. Son héritage inspire aujourd'hui notre démarche — entre science botanique et art de vivre marocain.
            </p>
          </div>
        </div>
      </section>

      <ModernElegantFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default NotreHeritage;
