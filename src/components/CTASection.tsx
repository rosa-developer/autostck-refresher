
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className={cn(
          "max-w-4xl mx-auto rounded-3xl p-8 md:p-16 glass overflow-hidden relative",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/10 rounded-full" />
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-glass-shine animate-pulse-slow" />
          </div>
          
          <div className="text-center">
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold tracking-tight mb-6",
              isVisible ? "animate-slide-up" : "opacity-0"
            )}>
              Ready to transform your inventory management?
            </h2>
            <p className={cn(
              "text-lg text-muted-foreground max-w-2xl mx-auto mb-10",
              isVisible ? "animate-slide-up animation-delay-100" : "opacity-0"
            )}>
              Join thousands of businesses that have streamlined their operations with AutoStock.
              Get started today with our 14-day free trial.
            </p>
            
            <div className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4",
              isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
            )}>
              <Link
                to="/get-started"
                className="button-hover w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/demo"
                className="button-hover w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border bg-background/80 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
