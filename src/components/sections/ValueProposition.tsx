
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the leading automotive advertising platform</h2>
            <p className="text-xl text-muted-foreground">
              Our platform is built specifically for automotive professionals, with features designed to showcase your vehicles and connect with qualified buyers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">For Dealerships</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                  </span>
                  <span>Bulk listing management tools</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                  </span>
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                  </span>
                  <span>Branded virtual showrooms</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/get-started" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Learn more 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">For Private Sellers</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                  </span>
                  <span>Easy-to-use listing creator</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                  </span>
                  <span>Secure messaging with buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    </svg>
                  </span>
                  <span>Market price comparison tools</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/marketplace" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Visit marketplace 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
