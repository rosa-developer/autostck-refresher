
import React from 'react';
import { motion } from 'framer-motion';
import { CarFront, BarChart3, Users, ArrowDown } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const PorscheShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Performance Showcase</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover luxury performance vehicles that represent the pinnacle of automotive engineering and design excellence.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-3xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AspectRatio ratio={16 / 9}>
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070" 
                alt="Modern Porsche sports car in dynamic setting" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            
            {/* Overlay with feature callouts */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <div className="grid grid-cols-3 gap-4">
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <CarFront className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-semibold">Premium Listings</h4>
                </motion.div>
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <BarChart3 className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-semibold">Market Analytics</h4>
                </motion.div>
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-semibold">Lead Generation</h4>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <a href="#features" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              Explore more features
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PorscheShowcase;
