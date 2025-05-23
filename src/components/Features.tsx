
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
      description: "Monitor your listings' performance with real-time analytics and engagement metrics.",
      gradient: "from-primary/10 via-blue-500/5 to-transparent"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Team Collaboration",
      description: "Enable seamless teamwork with role-based access controls for your dealership staff.",
      gradient: "from-purple-500/10 via-pink-500/5 to-transparent"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Secure Transactions",
      description: "Enterprise-grade security ensures your business data remains protected at all times.",
      gradient: "from-green-500/10 via-emerald-500/5 to-transparent"
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-600" />,
      title: "Boosted Visibility",
      description: "Put your vehicles in front of qualified buyers with premium placement options.",
      gradient: "from-orange-500/10 via-red-500/5 to-transparent"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Fast Performance",
      description: "Optimized for speed with instant content loading and responsive vehicle galleries.",
      gradient: "from-yellow-500/10 via-amber-500/5 to-transparent"
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-600" />,
      title: "Cross-platform",
      description: "Reach buyers wherever they are with solutions optimized for desktop, tablet, and mobile.",
      gradient: "from-indigo-500/10 via-blue-500/5 to-transparent"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-pink-600" />,
      title: "Instant Messaging",
      description: "Connect with potential buyers in real-time through our integrated messaging platform.",
      gradient: "from-pink-500/10 via-rose-500/5 to-transparent"
    },
    {
      icon: <Search className="h-8 w-8 text-teal-600" />,
      title: "Advanced Search",
      description: "Help buyers find exactly what they're looking for with powerful filtering capabilities.",
      gradient: "from-teal-500/10 via-cyan-500/5 to-transparent"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-violet-600" />,
      title: "Mobile App",
      description: "Manage your listings on the go with our dedicated mobile app for iOS and Android.",
      gradient: "from-violet-500/10 via-purple-500/5 to-transparent"
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
    <section id="features" className="py-24 bg-gradient-to-b from-secondary/50 via-background to-primary/5" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 mb-8 text-sm rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-purple-500/5 to-pink-500/10 backdrop-blur-sm">
            <span className="font-bold gradient-text">POWERFUL FEATURES</span>
          </div>
          <h2 className="section-title mb-6">
            Everything you need to sell faster
          </h2>
          <p className="section-subtitle">
            Our comprehensive suite of tools helps you showcase your vehicles and connect with qualified buyers through cutting-edge technology.
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
              className={`group glass rounded-3xl p-8 border-2 border-white/40 card-hover relative overflow-hidden bg-gradient-to-br ${feature.gradient}`}
              variants={item}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/30 to-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
