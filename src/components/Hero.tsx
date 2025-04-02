
import React from 'react';
import { ArrowRight, Car, CarFront, BarChart3, ShieldCheck, Star, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs rounded-full border bg-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ShieldCheck className="h-3.5 w-3.5 mr-2 text-primary" />
            <span className="font-medium">Trusted by 2000+ dealerships nationwide</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advertise your 
            <span className="relative text-primary ml-3">
              vehicles
              <svg
                className="absolute -bottom-2 -left-2 w-full h-3 text-primary/20"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 C25,12 75,12 100,0"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                />
              </svg>
            </span>
            <span className="block mt-2">with confidence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Connect with millions of potential buyers through our premium advertising platform designed specifically for automotive professionals.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/get-started"
              className="button-hover w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start Advertising
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/marketplace"
              className="button-hover w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md border bg-background/80 backdrop-blur-sm px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Browse Marketplace
            </Link>
          </motion.div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <CarFront className="h-6 w-6 text-primary" />,
              title: "Premium Exposure",
              description: "Reach qualified buyers with prominent vehicle listings optimized for maximum visibility.",
              delay: 0.7
            },
            {
              icon: <BarChart3 className="h-6 w-6 text-primary" />,
              title: "Real-time Analytics",
              description: "Track performance with comprehensive reporting on views, inquiries, and engagement.",
              delay: 0.8
            },
            {
              icon: <Car className="h-6 w-6 text-primary" />,
              title: "Dynamic Showrooms",
              description: "Create beautiful virtual showrooms that showcase your inventory with professional flair.",
              delay: 0.9
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="glass rounded-2xl p-8 border border-white/30 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-2 text-sm font-medium">Rated 4.9/5 by over 1,200 customers</span>
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-6">TRUSTED BY LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'].map((company, index) => (
              <motion.div 
                key={index}
                className="text-lg font-bold grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
