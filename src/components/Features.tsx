
import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle2, Settings, Users, Shield, Clock, Zap } from 'lucide-react';
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
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Advanced Customization",
      description: "Tailor the platform to your specific business needs with advanced configuration options."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Enable seamless teamwork with role-based access controls and real-time updates."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Security",
      description: "Enterprise-grade security ensures your inventory data remains protected at all times."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Automated Scheduling",
      description: "Schedule inventory checks and generate reports automatically at your preferred intervals."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Performance",
      description: "Optimized for speed with instant data processing even for large inventory catalogs."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Compliance Ready",
      description: "Built-in tools to help you stay compliant with industry regulations and standards."
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary">
            <span className="font-medium">Powerful Features</span>
          </div>
          <h2 className={cn(
            "section-title mb-4",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}>
            Everything you need to manage your inventory
          </h2>
          <p className={cn(
            "section-subtitle",
            isVisible ? "animate-slide-up animation-delay-100" : "opacity-0"
          )}>
            Our comprehensive suite of features streamlines your inventory management process, 
            giving you the tools to make informed decisions and optimize your stock levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-2xl p-8 shadow-sm border border-white/50",
                "hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1",
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
