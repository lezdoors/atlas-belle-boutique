
import React from 'react';
import AppleStyleHeader from '@/components/AppleStyleHeader';
import HeritageHero from '@/components/heritage/HeritageHero';
import HeritageStory from '@/components/heritage/HeritageStory';
import HeritageCollections from '@/components/heritage/HeritageCollections';
import AppleStyleFooter from '@/components/AppleStyleFooter';
import SamraRefactoredChatbot from '@/components/SamraRefactoredChatbot';

const NotreHeritage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AppleStyleHeader />
      <HeritageHero />
      <HeritageStory />
      <HeritageCollections />
      <AppleStyleFooter />
      <SamraRefactoredChatbot />
    </div>
  );
};

export default NotreHeritage;
