
import React, { useEffect, useRef, useState } from 'react';
import { useSeasonalTheme } from '../seasonal/SeasonalThemeProvider';

interface HistoricalStoryBlockProps {
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  reversed?: boolean;
  children?: React.ReactNode;
}

const HistoricalStoryBlock: React.FC<HistoricalStoryBlockProps> = ({
  title,
  subtitle,
  content,
  image,
  reversed = false,
  children
}) => {
  const { theme } = useSeasonalTheme();
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={blockRef}
      className={`py-20 px-4 ${reversed ? 'bg-seasonal-light' : 'bg-white'}`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reversed ? 'lg:grid-flow-col-dense' : ''
        }`}>
          
          {/* Content Side */}
          <div className={`space-y-8 ${reversed ? 'lg:col-start-2' : ''}`}>
            <div className={`storytelling-reveal ${isVisible ? 'in-view' : ''}`}>
              {subtitle && (
                <div className="inline-flex items-center bg-seasonal-accent px-6 py-2 rounded-full mb-6">
                  <span className="text-sm font-medium text-seasonal-dark tracking-wide font-serif">
                    {subtitle}
                  </span>
                </div>
              )}
              
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-seasonal-dark leading-tight mb-6">
                {title}
              </h2>
              
              <p className="font-serif text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                {content}
              </p>
              
              {children}
            </div>
          </div>

          {/* Image Side */}
          <div className={`${reversed ? 'lg:col-start-1' : ''}`}>
            <div className={`storytelling-reveal ${isVisible ? 'in-view' : ''}`} 
                 style={{ transitionDelay: '0.3s' }}>
              {image && (
                <div className="relative overflow-hidden rounded-3xl luxury-shadow group">
                  <img 
                    src={image}
                    alt={title}
                    className="w-full h-96 lg:h-[500px] object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Decorative overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-seasonal-primary rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-seasonal-dark">
                          Tradition Millénaire
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalStoryBlock;
