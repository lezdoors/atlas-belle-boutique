import React from 'react';
import { motion } from 'framer-motion';
import { ProductShowcase } from '@/components/products/ProductShowcase';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-24 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-refined relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="text-sm font-medium">Collection Exclusive</span>
            </div>
            
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Artisanat d'Exception
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Chaque pièce raconte une histoire, chaque création porte l'âme de l'artisan. 
              Découvrez l'authenticité du savoir-faire marocain dans notre collection soigneusement sélectionnée.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Showcase */}
      <section className="container-refined pb-24">
        <ProductShowcase />
      </section>

      {/* Artisan Promise Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-stone-900 via-primary to-stone-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-refined relative">
          <div className="text-center space-y-8">
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl font-bold">
              Notre Promesse Artisanale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏺</span>
                </div>
                <h3 className="text-xl font-semibold">Authentique</h3>
                <p className="text-white/80">
                  Chaque pièce est créée selon les techniques ancestrales transmises de génération en génération.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold">Équitable</h3>
                <p className="text-white/80">
                  Nous travaillons directement avec les coopératives pour assurer une rémunération juste.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold">Durable</h3>
                <p className="text-white/80">
                  Matériaux naturels et processus respectueux de l'environnement pour un avenir préservé.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;