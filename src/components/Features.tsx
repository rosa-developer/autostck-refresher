
import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle2, Settings, Users, Shield, Clock, Zap, Activity, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Customization",
      description: "Tailor your vehicle listings with custom fields and branded templates."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-secondary to-background" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary">
            <span className="font-medium">POWERFUL FEATURES</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-5",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}>
            Everything you need to sell faster
          </h2>
          <p className={cn(
            "text-xl text-muted-foreground max-w-3xl mx-auto",
            isVisible ? "animate-slide-up animation-delay-100" : "opacity-0"
          )}>
            Our comprehensive suite of tools helps you showcase your vehicles and connect with qualified buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-2xl p-8 shadow-sm border border-white/50",
                "hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1",
                isVisible ? "animate-scale-in" : "opacity-0",
                { [`animation-delay-${(index + 2) * 100}`]: isVisible }
              )}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
