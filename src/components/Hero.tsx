
import React from 'react';
import { ArrowRight, Car, CarFront, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs rounded-full border bg-secondary animate-fade-in">
            <ShieldCheck className="h-3.5 w-3.5 mr-2 text-primary" />
            <span className="font-medium">Trusted by 2000+ dealerships nationwide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Advertise your 
            <span className="relative text-primary ml-3">
              vehicles
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
            <span className="block mt-2">with confidence</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-100">
            Connect with millions of potential buyers through our premium advertising platform designed specifically for automotive professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <Link
              to="/get-started"
              className="button-hover w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start Advertising
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/marketplace"
              className="button-hover w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md border bg-background/80 backdrop-blur-sm px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent"
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: <CarFront className="h-6 w-6 text-primary" />,
              title: "Premium Exposure",
              description: "Reach qualified buyers with prominent vehicle listings optimized for maximum visibility.",
              delay: 300
            },
            {
              icon: <BarChart3 className="h-6 w-6 text-primary" />,
              title: "Real-time Analytics",
              description: "Track performance with comprehensive reporting on views, inquiries, and engagement.",
              delay: 400
            },
            {
              icon: <Car className="h-6 w-6 text-primary" />,
              title: "Dynamic Showrooms",
              description: "Create beautiful virtual showrooms that showcase your inventory with professional flair.",
              delay: 500
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass rounded-2xl p-8 border border-white/30 shadow-sm",
                "hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1",
                "animate-scale-in",
                { [`animation-delay-${feature.delay}`]: feature.delay }
              )}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6 animate-fade-in">TRUSTED BY LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'].map((company, index) => (
              <div 
                key={index}
                className={cn(
                  "text-lg font-bold animate-fade-in grayscale hover:grayscale-0 transition-all duration-300",
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
