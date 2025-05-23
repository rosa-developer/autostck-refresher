
import React from 'react';
import { ArrowRight, Car, CarFront, BarChart3, ShieldCheck, Star, Medal, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      <div className="container px-4 mx-auto relative">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-500/40 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center px-5 py-2 mb-8 text-sm rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-purple-500/5 to-pink-500/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-4 w-4 mr-2 text-primary animate-pulse" />
            <span className="font-semibold gradient-text">Trusted by 2000+ dealerships nationwide</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advertise your 
            <span className="relative gradient-text ml-3 inline-block">
              vehicles
              <motion.svg
                className="absolute -bottom-3 -left-2 w-full h-4 text-primary/30"
                viewBox="0 0 100 16"
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.path
                  d="M0,8 Q25,0 50,8 T100,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <span className="block mt-4">with confidence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Connect with millions of potential buyers through our premium advertising platform designed specifically for automotive professionals.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/get-started"
              className="group button-hover w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-purple-600 px-10 text-lg font-semibold text-white shadow-2xl shadow-primary/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              Start Advertising
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/marketplace"
              className="group button-hover w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-2xl border-2 border-primary/20 bg-white/80 backdrop-blur-sm px-10 text-lg font-semibold shadow-xl shadow-primary/5 transition-all hover:bg-white hover:border-primary/40"
            >
              Browse Marketplace
              <motion.div 
                className="ml-3 h-5 w-5"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Car className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
        
        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <CarFront className="h-7 w-7 text-primary" />,
              title: "Premium Exposure",
              description: "Reach qualified buyers with prominent vehicle listings optimized for maximum visibility.",
              delay: 0.7,
              gradient: "from-primary/10 via-blue-500/5 to-transparent"
            },
            {
              icon: <BarChart3 className="h-7 w-7 text-purple-600" />,
              title: "Real-time Analytics",
              description: "Track performance with comprehensive reporting on views, inquiries, and engagement.",
              delay: 0.8,
              gradient: "from-purple-500/10 via-pink-500/5 to-transparent"
            },
            {
              icon: <Car className="h-7 w-7 text-pink-600" />,
              title: "Dynamic Showrooms",
              description: "Create beautiful virtual showrooms that showcase your inventory with professional flair.",
              delay: 0.9,
              gradient: "from-pink-500/10 via-orange-500/5 to-transparent"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className={`group glass rounded-3xl p-8 border-2 border-white/40 card-hover relative overflow-hidden bg-gradient-to-br ${feature.gradient}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/20 to-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Trust Indicators */}
        <motion.div 
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + (i * 0.1) }}
              >
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </motion.div>
            ))}
            <span className="ml-3 text-lg font-semibold">Rated 4.9/5 by over 1,200 customers</span>
          </div>
          <p className="text-sm font-bold text-muted-foreground mb-8 tracking-wider">TRUSTED BY LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'].map((company, index) => (
              <motion.div 
                key={index}
                className="text-xl font-bold grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
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
