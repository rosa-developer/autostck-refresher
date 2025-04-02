
import React, { useRef } from 'react';
import { ArrowRight, Car, CheckCircle, Zap, Shield, BarChart3, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    "30-day free trial with all premium features",
    "No credit card required to get started",
    "Dedicated support team for automotive dealers",
    "Cancel anytime with no commitments"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-24" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-5xl mx-auto rounded-3xl p-8 md:p-16 overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-blue-600/90 to-violet-600/90 -z-10" />
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10 -z-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-blue-500/30 blur-xl"
            animate={{ 
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-violet-500/30 blur-xl"
            animate={{ 
              x: [0, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="md:flex-1">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                Ready to transform your automotive advertising?
              </motion.h2>
              <motion.p 
                className="text-lg text-white/90 max-w-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of successful dealerships who have boosted their sales with our premium advertising platform.
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-8"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center text-white"
                    variants={item}
                  >
                    <CheckCircle className="mr-3 h-5 w-5 text-white" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              className="md:flex-shrink-0 w-full md:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Start your free trial</h3>
                <p className="text-white/80 mb-6">No credit card required. Upgrade anytime.</p>
                <Link
                  to="/get-started"
                  className="button-hover w-full flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-medium text-primary shadow-lg transition-colors hover:bg-white/90"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex justify-center">
                        <Zap className="h-5 w-5 text-yellow-300" />
                      </div>
                      <p className="text-xs text-white/70 mt-1">Instant Setup</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        <Shield className="h-5 w-5 text-green-300" />
                      </div>
                      <p className="text-xs text-white/70 mt-1">Secure Platform</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        <BarChart3 className="h-5 w-5 text-blue-300" />
                      </div>
                      <p className="text-xs text-white/70 mt-1">Live Analytics</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        <MessageCircle className="h-5 w-5 text-purple-300" />
                      </div>
                      <p className="text-xs text-white/70 mt-1">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
