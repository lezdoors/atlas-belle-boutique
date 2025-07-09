import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MegaMenuProps {
  isScrolled?: boolean;
}

const LuxuryMegaMenu: React.FC<MegaMenuProps> = ({ isScrolled = false }) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: 'Tagine Artisanal de Fès',
      image: '/api/placeholder/300/200',
      price: '75€',
      badge: 'Coup de Cœur',
      region: 'Fès'
    },
    {
      id: 2,
      name: 'Set de Verres Fakhar',
      image: '/api/placeholder/300/200',
      price: '45€',
      badge: 'Nouvelle Collection',
      region: 'Salé'
    },
    {
      id: 3,
      name: 'Coussin Berbère',
      image: '/api/placeholder/300/200',
      price: '65€',
      badge: 'Édition Limitée',
      region: 'Atlas'
    }
  ];

  const menuCategories = [
    {
      id: 'ceramiques',
      title: language === 'fr' ? 'Céramiques' : 'Ceramics',
      subtitle: language === 'fr' ? 'Art ancestral de la terre' : 'Ancient art of clay',
      href: '/categories/ceramiques',
      items: [
        { name: 'Tagines Traditionnels', href: '/products/tagines', featured: true },
        { name: 'Plats & Assiettes', href: '/products/plats', featured: false },
        { name: 'Bols & Saladiers', href: '/products/bols', featured: false },
        { name: 'Théières & Service à Thé', href: '/products/theieres', featured: false },
        { name: 'Carreaux Décoratifs', href: '/products/carreaux', featured: false }
      ]
    },
    {
      id: 'verrerie',
      title: language === 'fr' ? 'Verrerie' : 'Glassware',
      subtitle: language === 'fr' ? 'Transparence et lumière' : 'Transparency and light',
      href: '/categories/verrerie',
      items: [
        { name: 'Verres à Thé', href: '/products/verres-the', featured: true },
        { name: 'Carafes & Vases', href: '/products/carafes', featured: false },
        { name: 'Lanternes & Photophores', href: '/products/lanternes', featured: false },
        { name: 'Miroirs Artisanaux', href: '/products/miroirs', featured: false },
        { name: 'Art de la Table', href: '/products/art-table', featured: false }
      ]
    },
    {
      id: 'textiles',
      title: language === 'fr' ? 'Textiles' : 'Textiles',
      subtitle: language === 'fr' ? 'Douceur et tradition' : 'Softness and tradition',
      href: '/categories/textiles',
      items: [
        { name: 'Coussins Berbères', href: '/products/coussins', featured: true },
        { name: 'Tapis Authentiques', href: '/products/tapis', featured: false },
        { name: 'Jetés & Plaids', href: '/products/jetes', featured: false },
        { name: 'Poufs en Cuir', href: '/products/poufs', featured: false },
        { name: 'Broderies & Dentelles', href: '/products/broderies', featured: false }
      ]
    },
    {
      id: 'bijoux',
      title: language === 'fr' ? 'Bijoux' : 'Jewelry',
      subtitle: language === 'fr' ? 'Éclat et préciosité' : 'Brilliance and preciousness',
      href: '/categories/bijoux',
      items: [
        { name: 'Colliers Berbères', href: '/products/colliers', featured: true },
        { name: 'Bracelets Argent', href: '/products/bracelets', featured: false },
        { name: 'Boucles d\'Oreilles', href: '/products/boucles', featured: false },
        { name: 'Bagues Traditionnelles', href: '/products/bagues', featured: false },
        { name: 'Parures Complètes', href: '/products/parures', featured: false }
      ]
    }
  ];

  const collections = [
    { name: 'Nouvelles Arrivées', href: '/collections/nouveautes', badge: 'Nouveau' },
    { name: 'Collection Atlas', href: '/collections/atlas', badge: 'Exclusif' },
    { name: 'Artisans de Fès', href: '/collections/fes', badge: 'Authentique' },
    { name: 'Édition Limitée', href: '/collections/limitee', badge: 'Rare' }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Catalog Trigger */}
      <motion.button 
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium tracking-wide transition-all duration-500 group ${
          isScrolled 
            ? 'text-foreground hover:text-primary hover:bg-primary/5' 
            : 'text-white hover:text-amber-200 hover:bg-white/10'
        }`}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-display text-base">
          {language === 'fr' ? 'Collections' : 'Collections'}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
        
        {/* Moroccan geometric pattern accent */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-5" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-current opacity-20" />
        </div>
      </motion.button>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-7xl bg-white shadow-luxury border border-border/20 rounded-2xl z-50 mt-4 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Moroccan Pattern Header */}
            <div className="relative h-2 bg-gradient-to-r from-primary via-accent to-primary opacity-80">
              <div className="absolute inset-0 bg-repeat-x opacity-20" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 4L16 0h8l-4 4zm0 0l4 4h-8l4-4z' fill='%23000' fill-opacity='0.1'/%3E%3C/svg%3E")`
                   }} />
            </div>

            <div className="px-8 py-8">
              <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
                
                {/* Categories Section */}
                <div className="col-span-8">
                  <div className="mb-6">
                    <h3 className="heading-display text-2xl font-bold text-foreground mb-2">
                      {language === 'fr' ? 'Nos Collections Artisanales' : 'Our Artisan Collections'}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === 'fr' 
                        ? 'Découvrez l\'authenticité du savoir-faire marocain' 
                        : 'Discover the authenticity of Moroccan craftsmanship'
                      }
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {menuCategories.map((category, index) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-4"
                        onMouseEnter={() => setActiveCategory(category.id)}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        <Link 
                          to={category.href}
                          className="group block"
                        >
                          <div className="flex items-center space-x-3 mb-3 group-hover:text-primary transition-colors">
                            <h4 className="heading-display text-lg font-semibold">
                              {category.title}
                            </h4>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                          </div>
                          <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors">
                            {category.subtitle}
                          </p>
                        </Link>
                        
                        <ul className="space-y-2">
                          {category.items.slice(0, 4).map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                            >
                              <Link
                                to={item.href}
                                className={`block text-sm transition-all duration-200 hover:text-primary hover:translate-x-1 ${
                                  item.featured 
                                    ? 'text-foreground font-medium' 
                                    : 'text-muted-foreground'
                                }`}
                              >
                                <div className="flex items-center space-x-2">
                                  <span>{item.name}</span>
                                  {item.featured && (
                                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                      <Sparkles className="w-3 h-3 mr-1" />
                                      Vedette
                                    </Badge>
                                  )}
                                </div>
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Featured Products Sidebar */}
                <div className="col-span-4 border-l border-border/20 pl-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="heading-display text-lg font-semibold text-foreground mb-4">
                        {language === 'fr' ? 'Pièces d\'Exception' : 'Exceptional Pieces'}
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      {featuredProducts.slice(0, 2).map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + (index * 0.1) }}
                          className="group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-xl bg-white shadow-elegant hover:shadow-refined transition-all duration-300 group-hover:-translate-y-1">
                            <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200">
                              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                <div className="text-center">
                                  <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-primary" />
                                  </div>
                                  <p className="text-sm">{product.name}</p>
                                </div>
                              </div>
                            </div>
                            
                            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-primary/80 text-white text-xs">
                              {product.badge}
                            </Badge>
                            
                            <div className="p-4">
                              <h5 className="font-medium text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                                {product.name}
                              </h5>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                  {product.region}
                                </span>
                                <span className="font-bold text-primary">
                                  {product.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border-t border-border/20 pt-6 mt-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {collections.map((collection, index) => (
                      <motion.div
                        key={collection.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        <Link
                          to={collection.href}
                          className="group flex items-center space-x-2 px-4 py-2 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {collection.name}
                          </span>
                          <Badge variant="outline" className="text-xs bg-transparent">
                            {collection.badge}
                          </Badge>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-elegant"
                  >
                    <Link to="/products">
                      <span>{language === 'fr' ? 'Voir Tout' : 'View All'}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LuxuryMegaMenu;