import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface LuxuryMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const LuxuryMobileMenu: React.FC<LuxuryMobileMenuProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menuSections = [
    {
      id: 'main',
      title: language === 'fr' ? 'Navigation' : 'Navigation',
      items: [
        { name: language === 'fr' ? 'Accueil' : 'Home', href: '/', icon: '🏠' },
        { name: language === 'fr' ? 'Nos Artisans' : 'Our Artisans', href: '/nos-artisans', icon: '👨‍🎨' },
        { name: language === 'fr' ? 'Notre Héritage' : 'Our Heritage', href: '/notre-heritage', icon: '🏺' },
        { name: language === 'fr' ? 'À Propos' : 'About', href: '/a-propos', icon: '✨' },
        { name: 'Contact', href: '/contact', icon: '📞' }
      ]
    },
    {
      id: 'collections',
      title: language === 'fr' ? 'Collections' : 'Collections',
      items: [
        { name: language === 'fr' ? 'Céramiques' : 'Ceramics', href: '/categories/ceramiques', icon: '🏺', badge: 'Artisanal' },
        { name: language === 'fr' ? 'Verrerie' : 'Glassware', href: '/categories/verrerie', icon: '🥃', badge: 'Soufflé' },
        { name: language === 'fr' ? 'Textiles' : 'Textiles', href: '/categories/textiles', icon: '🧶', badge: 'Berbère' },
        { name: language === 'fr' ? 'Bijoux' : 'Jewelry', href: '/categories/bijoux', icon: '💎', badge: 'Argent' }
      ]
    },
    {
      id: 'featured',
      title: language === 'fr' ? 'Coup de Cœur' : 'Featured',
      items: [
        { name: language === 'fr' ? 'Nouvelles Arrivées' : 'New Arrivals', href: '/collections/nouveautes', icon: '✨', badge: 'Nouveau' },
        { name: language === 'fr' ? 'Édition Limitée' : 'Limited Edition', href: '/collections/limitee', icon: '🎭', badge: 'Exclusif' },
        { name: language === 'fr' ? 'Fait Main' : 'Handmade', href: '/collections/fait-main', icon: '🤲', badge: 'Authentique' }
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto"
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Container - Jewelry Box Style */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
              staggerChildren: 0.1
            }}
            className="fixed top-20 right-4 left-4 max-w-sm mx-auto bg-white rounded-3xl shadow-luxury border border-border/20 z-50 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Moroccan Pattern Header */}
            <div className="relative">
              <div className="h-3 bg-gradient-to-r from-primary via-accent to-primary">
                <div className="absolute inset-0 bg-repeat-x opacity-30" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L16 2h8l-4 4zm0 0l4 4h-8l4-4z' fill='%23fff' fill-opacity='0.3'/%3E%3C/svg%3E")`
                     }} />
              </div>
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 pb-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="heading-display text-xl font-bold text-foreground">
                    {language === 'fr' ? 'Menu' : 'Menu'}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === 'fr' ? 'Explorez nos créations' : 'Explore our creations'}
                  </p>
                </motion.div>
                
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </motion.button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="px-6 pb-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-6">
                {menuSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.id}
                    variants={itemVariants}
                    className="space-y-3"
                  >
                    <motion.button
                      onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="heading-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </span>
                      <motion.div
                        animate={{ rotate: activeSection === section.id ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {activeSection === section.id && (
                        <motion.div
                          variants={sectionVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ 
                            duration: 0.4, 
                            ease: "easeInOut",
                            staggerChildren: 0.05
                          }}
                          className="space-y-2 overflow-hidden"
                        >
                          {section.items.map((item, itemIndex) => (
                            <motion.div
                              key={item.href}
                              variants={itemVariants}
                            >
                              <Link
                                to={item.href}
                                onClick={onClose}
                                className="group flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-300"
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-lg">{item.icon}</span>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {item.name}
                                  </span>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  {item.badge && (
                                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                                      {item.badge}
                                    </Badge>
                                  )}
                                  <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Action */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-6 border-t border-border/20"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-elegant"
                  size="lg"
                >
                  <Link to="/products" onClick={onClose}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span>{language === 'fr' ? 'Voir Toutes les Collections' : 'View All Collections'}</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LuxuryMobileMenu;