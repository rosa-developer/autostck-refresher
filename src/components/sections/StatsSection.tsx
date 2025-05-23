
import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    {
      value: "2M+",
      label: "Monthly Active Buyers",
      gradient: "from-primary/20 via-blue-500/10 to-transparent"
    },
    {
      value: "50K+", 
      label: "Vehicles Sold Monthly",
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent"
    },
    {
      value: "4,200+",
      label: "Partner Dealerships", 
      gradient: "from-green-500/20 via-emerald-500/10 to-transparent"
    },
    {
      value: "32%",
      label: "Faster Sales Cycle",
      gradient: "from-orange-500/20 via-red-500/10 to-transparent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary/50 via-background to-primary/5">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={`group flex flex-col items-center text-center p-6 md:p-8 rounded-3xl glass border-2 border-white/40 card-hover relative overflow-hidden bg-gradient-to-br ${stat.gradient}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.h3 
                  className="text-4xl md:text-6xl font-bold gradient-text mb-3"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
