
import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary/50 to-background/30">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">2M+</h3>
            <p className="text-muted-foreground">Monthly Active Buyers</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</h3>
            <p className="text-muted-foreground">Vehicles Sold Monthly</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">4,200+</h3>
            <p className="text-muted-foreground">Partner Dealerships</p>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">32%</h3>
            <p className="text-muted-foreground">Faster Sales Cycle</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
