
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderLogo = () => {
  const { language } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Link to="/" className="flex items-center flex-shrink-0 group">
      <div className="transition-all duration-500 group-hover:scale-105">
        <img 
          src="https://gjmakezifpaglzzvuoid.supabase.co/storage/v1/object/public/pictures//Perle%20(Website)-4.png"
          alt="Perle de l'Atlas - Cosmétiques de Luxe Marocains"
          className={`h-20 w-auto lg:h-28 object-contain transition-all duration-700 ${
            imageLoaded ? 'opacity-100 animate-fade-in' : 'opacity-0'
          }`}
          style={{ 
            imageRendering: 'crisp-edges',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
        />
      </div>
    </Link>
  );
};

export default HeaderLogo;
