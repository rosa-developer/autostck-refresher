
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Car, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const benefits = [
    "30-day free trial with all premium features",
    "No credit card required to get started",
    "Dedicated support team for automotive dealers",
    "Cancel anytime with no commitments"
  ];

  return (
    <section className="py-24" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className={cn(
          "max-w-5xl mx-auto rounded-3xl p-8 md:p-16 overflow-hidden relative",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/90 -z-10" />
          
          {/* Background pattern */}
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
          
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="md:flex-1">
              <h2 className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white",
                isVisible ? "animate-slide-up" : "opacity-0"
              )}>
                Ready to transform your automotive advertising?
              </h2>
              <p className={cn(
                "text-lg text-white/80 max-w-2xl mb-8",
                isVisible ? "animate-slide-up animation-delay-100" : "opacity-0"
              )}>
                Join thousands of successful dealerships who have boosted their sales with our premium advertising platform.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center text-white",
                      isVisible ? "animate-slide-up" : "opacity-0", 
                      { [`animation-delay-${(index + 2) * 100}`]: isVisible }
                    )}
                  >
                    <CheckCircle className="mr-3 h-5 w-5 text-white" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={cn(
              "md:flex-shrink-0 w-full md:w-auto",
              isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
            )}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
