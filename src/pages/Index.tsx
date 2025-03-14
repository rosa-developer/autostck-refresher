
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
        
        {/* Featured Image Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070" 
                  alt="Modern car showroom with luxury vehicles" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="bg-primary/5 p-6 text-center">
                <h3 className="text-xl font-semibold text-primary">Showcase Your Inventory with Style</h3>
                <p className="text-muted-foreground mt-2">Professional photography and premium listings to help your vehicles stand out</p>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        <Testimonials />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
