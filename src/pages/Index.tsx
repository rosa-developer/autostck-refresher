
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowDown, BarChart3, CarFront, Users } from 'lucide-react';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to section if hash is present in URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top on initial load
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center text-center mb-8 md:mb-0">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">2M+</h3>
                <p className="text-muted-foreground">Monthly Active Buyers</p>
              </div>
              <div className="flex flex-col items-center text-center mb-8 md:mb-0">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</h3>
                <p className="text-muted-foreground">Vehicles Sold Monthly</p>
              </div>
              <div className="flex flex-col items-center text-center mb-8 md:mb-0">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">4,200+</h3>
                <p className="text-muted-foreground">Partner Dealerships</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">32%</h3>
                <p className="text-muted-foreground">Faster Sales Cycle</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Showroom Experience</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our platform creates stunning digital showrooms that help your vehicles stand out from the competition.
                </p>
              </div>
              
              <div className="rounded-3xl overflow-hidden shadow-xl relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070" 
                    alt="Modern car showroom with luxury vehicles" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                
                {/* Overlay with feature callouts */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      <CarFront className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold">360° Tours</h4>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      <BarChart3 className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold">Market Analytics</h4>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      <Users className="h-6 w-6 text-primary mb-2" />
                      <h4 className="font-semibold">Lead Generation</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a href="#features" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Explore more features
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        <Testimonials />
        <Pricing />
        
        {/* Additional value proposition before final CTA */}
        <section className="py-20 bg-secondary">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the leading automotive advertising platform</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Our platform is built specifically for automotive professionals, with features designed to showcase your vehicles and connect with qualified buyers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4">For Dealerships</h3>
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
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4">For Private Sellers</h3>
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
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
