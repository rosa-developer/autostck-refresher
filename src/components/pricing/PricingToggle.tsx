
import React from 'react';
import { cn } from '@/lib/utils';

interface PricingToggleProps {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
  isVisible: boolean;
}

const PricingToggle = ({ isYearly, setIsYearly, isVisible }: PricingToggleProps) => {
  return (
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
  );
};

export default PricingToggle;
