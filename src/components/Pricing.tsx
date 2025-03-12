
import React, { useRef, useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses just getting started with inventory management.",
    features: [
      "Up to 1,000 inventory items",
      "Basic analytics dashboard",
      "Email support",
      "Mobile app access",
      "CSV import/export",
    ],
    notIncluded: [
      "Advanced forecasting",
      "API access",
      "Custom reporting",
      "Team collaboration tools",
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses with moderate inventory needs.",
    features: [
      "Up to 10,000 inventory items",
      "Advanced analytics dashboard",
      "Priority support",
      "Mobile app access",
      "CSV import/export",
      "Advanced forecasting",
      "Basic API access",
      "Custom reporting",
    ],
    notIncluded: [
      "Team collaboration tools",
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Complete solution for large businesses with complex inventory needs.",
    features: [
      "Unlimited inventory items",
      "Advanced analytics dashboard",
      "Dedicated support team",
      "Mobile app access",
      "CSV import/export",
      "Advanced forecasting",
      "Full API access",
      "Custom reporting",
      "Team collaboration tools",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
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
    <section id="pricing" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full border border-primary/20 bg-primary/5 text-primary">
            <span className="font-medium">Simple Pricing</span>
          </div>
          <h2 className={cn(
            "section-title mb-4",
            isVisible ? "animate-slide-up" : "opacity-0"
          )}>
            Choose the perfect plan for your business
          </h2>
          <p className={cn(
            "section-subtitle",
            isVisible ? "animate-slide-up animation-delay-100" : "opacity-0"
          )}>
            All plans include a 14-day free trial. No credit card required.
          </p>

          <div className={cn(
            "flex items-center justify-center mt-10 mb-12",
            isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
          )}>
            <span className={`mr-4 ${!isYearly ? 'font-medium' : 'text-muted-foreground'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              role="switch"
              aria-checked={isYearly}
            >
              <span 
                className={cn(
                  "inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform",
                  isYearly ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={`ml-4 ${isYearly ? 'font-medium' : 'text-muted-foreground'}`}>
              Yearly <span className="text-xs text-primary font-medium ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300 ease-in-out",
                tier.popular 
                  ? "shadow-lg border-2 border-primary" 
                  : "border border-white/50 shadow",
                isVisible ? "animate-scale-in" : "opacity-0",
                { "animation-delay-300": index === 0 },
                { "animation-delay-400": index === 1 },
                { "animation-delay-500": index === 2 },
                tier.popular ? "md:-mt-4 md:mb-4" : ""
              )}
            >
              {tier.popular && (
                <div className="bg-primary text-primary-foreground py-2 text-sm font-medium text-center">
                  Most Popular
                </div>
              )}
              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-5">{tier.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">${isYearly ? Math.round(tier.price * 0.8 * 12) : tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ {isYearly ? 'year' : 'month'}</span>
                </div>
                <Link
                  to={tier.name === "Enterprise" ? "/contact" : "/signup"}
                  className={cn(
                    "button-hover w-full inline-flex h-11 items-center justify-center rounded-md text-sm font-medium shadow transition-colors",
                    tier.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
              <div className="bg-background p-8">
                <h4 className="font-medium mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start text-muted-foreground">
                      <X className="h-5 w-5 text-muted-foreground shrink-0 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
