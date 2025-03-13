
import React from 'react';
import { cn } from '@/lib/utils';

interface PricingHeaderProps {
  isVisible: boolean;
}

const PricingHeader = ({ isVisible }: PricingHeaderProps) => {
  return (
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
    </div>
  );
};

export default PricingHeader;
