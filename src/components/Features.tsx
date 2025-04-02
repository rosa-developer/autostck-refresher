
import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle2, Settings, Users, Shield, Clock, Zap, Activity, Rocket, Monitor, MessageCircle, Search, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const features = [
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "Performance Tracking",
      description: "Monitor your listings' performance with real-time analytics and engagement metrics."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Enable seamless teamwork with role-based access controls for your dealership staff."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Transactions",
      description: "Enterprise-grade security ensures your business data remains protected at all times."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Boosted Visibility",
      description: "Put your vehicles in front of qualified buyers with premium placement options."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Performance",
      description: "Optimized for speed with instant content loading and responsive vehicle galleries."
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Cross-platform",
      description: "Reach buyers wherever they are with solutions optimized for desktop, tablet, and mobile."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Instant Messaging",
      description: "Connect with potential buyers in real-time through our integrated messaging platform."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Advanced Search",
      description: "Help buyers find exactly what they're looking for with powerful filtering capabilities."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile App",
      description: "Manage your listings on the go with our dedicated mobile app for iOS and Android."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-secondary/80 to-background" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary">
            <span className="font-medium">POWERFUL FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Everything you need to sell faster
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you showcase your vehicles and connect with qualified buyers.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-white/50 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              variants={item}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
