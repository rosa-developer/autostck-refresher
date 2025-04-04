
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StatsSection from '@/components/sections/StatsSection';
import PorscheShowcase from '@/components/sections/PorscheShowcase';
import ValueProposition from '@/components/sections/ValueProposition';

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
        <StatsSection />
        <PorscheShowcase />
        <Features />
        <Testimonials />
        <Pricing />
        <ValueProposition />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
