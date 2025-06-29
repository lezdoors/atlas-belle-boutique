
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import HeritageHero from '@/components/heritage/HeritageHero';
import HeritageStory from '@/components/heritage/HeritageStory';
import HeritageCollections from '@/components/heritage/HeritageCollections';
import CartDrawer from '@/components/CartDrawer';
import FloatingCart from '@/components/FloatingCart';
import BackToTop from '@/components/BackToTop';

const NotreHeritage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-light antialiased">
      <AppleStyleHeader />
      <main>
        <HeritageHero />
        <HeritageStory />
        <HeritageCollections />
      </main>
      <AppleStyleFooter />
      <CartDrawer />
      <FloatingCart />
      <BackToTop />
    </div>
  );
};

export default NotreHeritage;
