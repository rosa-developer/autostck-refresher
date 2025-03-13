
import React from 'react';
import { ArrowRight, Car, CarFront, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs rounded-full border bg-secondary animate-fade-in">
            <span className="font-medium">Drive your sales with effective advertising</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            Advertise your 
            <span className="relative text-primary ml-3">
              vehicles easily
              <svg
                className="absolute -bottom-2 -left-2 w-full h-3 text-primary/20"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 C25,12 75,12 100,0"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-100">
            A premium platform designed for dealerships and private sellers to showcase vehicles with powerful tools and reach millions of potential buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <Link
              to="/get-started"
              className="button-hover w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              List Your Vehicle
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/marketplace"
              className="button-hover w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border bg-background/80 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <CarFront className="h-5 w-5 text-primary" />,
              title: "Wide Exposure",
              description: "Reach thousands of potential buyers with optimized vehicle listings.",
              delay: 300
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-primary" />,
              title: "Analytics Dashboard",
              description: "Track views, inquiries, and engagement with detailed reporting.",
              delay: 400
            },
            {
              icon: <Car className="h-5 w-5 text-primary" />,
              title: "Custom Showrooms",
              description: "Create branded digital showrooms for your dealership inventory.",
              delay: 500
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass rounded-2xl p-6 border border-white/30 shadow-sm",
                "hover:shadow-md transition-all duration-300 ease-in-out",
                "animate-scale-in",
                { [`animation-delay-${feature.delay}`]: feature.delay }
              )}
            >
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6 animate-fade-in">Trusted by leading dealerships and manufacturers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'].map((company, index) => (
              <div 
                key={index}
                className={cn(
                  "text-lg font-bold animate-fade-in",
                  { "animation-delay-100": index === 0 },
                  { "animation-delay-200": index === 1 },
                  { "animation-delay-300": index === 2 },
                  { "animation-delay-400": index === 3 },
                  { "animation-delay-500": index === 4 }
                )}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
