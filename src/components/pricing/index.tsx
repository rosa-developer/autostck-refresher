
import React, { useRef, useState, useEffect } from 'react';
import PricingHeader from './PricingHeader';
import PricingToggle from './PricingToggle';
import PricingTiers from './PricingTiers';

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
        <PricingHeader isVisible={isVisible} />
        <PricingToggle 
          isYearly={isYearly} 
          setIsYearly={setIsYearly} 
          isVisible={isVisible}
        />
        <PricingTiers isYearly={isYearly} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Pricing;
