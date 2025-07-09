import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LuxuryMegaMenu from './LuxuryMegaMenu';

interface LuxuryNavigationProps {
  isScrolled?: boolean;
}

const LuxuryNavigation: React.FC<LuxuryNavigationProps> = ({ isScrolled = false }) => {
  const { language } = useLanguage();
  const location = useLocation();

  const navItems = [
    { 
      href: '/', 
      label: language === 'fr' ? 'Accueil' : 'Home',
      description: language === 'fr' ? 'Découvrir notre univers' : 'Discover our world'
    },
    { 
      href: '/nos-artisans', 
      label: language === 'fr' ? 'Nos Artisans' : 'Our Artisans',
      description: language === 'fr' ? 'Les maîtres de l\'art' : 'Masters of craft'
    },
    { 
      href: '/notre-heritage', 
      label: language === 'fr' ? 'Notre Héritage' : 'Our Heritage',
      description: language === 'fr' ? 'Traditions millénaires' : 'Ancient traditions'
    },
    { 
      href: '/a-propos', 
      label: language === 'fr' ? 'À Propos' : 'About',
      description: language === 'fr' ? 'Notre histoire' : 'Our story'
    },
    { 
      href: '/contact', 
      label: 'Contact',
      description: language === 'fr' ? 'Nous contacter' : 'Get in touch'
    }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="flex items-center justify-center h-full">
      <div className="flex items-center space-x-8 lg:space-x-12 h-full">
        {navItems.map((item, index) => {
          const isActive = isActivePath(item.href);
          
          return (
            <motion.div
              key={item.href}
              className="relative h-full flex items-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.href}
                className={`relative h-full flex items-center px-3 py-2 font-display text-sm lg:text-base font-light tracking-wide transition-all duration-500 ${
                  isActive 
                    ? `${isScrolled ? 'text-primary' : 'text-amber-200'} font-medium` 
                    : `${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-amber-200'}`
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
                    isScrolled 
                      ? 'from-primary via-primary to-primary/60' 
                      : 'from-amber-200 via-amber-300 to-amber-200'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
                    isScrolled 
                      ? 'from-primary/50 via-primary to-primary/50' 
                      : 'from-amber-200/50 via-amber-300 to-amber-200/50'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: isActive ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Moroccan geometric pattern on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${isScrolled ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.05)'} 0%, transparent 100%)`
                  }}
                />

                {/* Subtle pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M10 2l8 8-8 8-8-8 8-8zm0 4l-4 4 4 4 4-4-4-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </Link>

              {/* Tooltip on hover */}
              <AnimatePresence>
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 0, y: 10, scale: 0.9 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white/95 backdrop-blur-sm text-foreground text-xs px-3 py-2 rounded-lg shadow-elegant border border-border/20 whitespace-nowrap">
                    {item.description}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/95 rotate-45 border-l border-t border-border/20" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          );
        })}
        
        {/* Luxury Mega Menu */}
        <motion.div
          className="h-full flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: navItems.length * 0.1 }}
        >
          <LuxuryMegaMenu isScrolled={isScrolled} />
        </motion.div>
      </div>
    </nav>
  );
};

export default LuxuryNavigation;