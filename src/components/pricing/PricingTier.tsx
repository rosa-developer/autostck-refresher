
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import PricingTierFeature from './PricingTierFeature';

export interface PricingTierData {
  name: string;
  price: number;
  description: string;
  features: string[];
  notIncluded: string[];
  cta: string;
  popular: boolean;
}

interface PricingTierProps {
  tier: PricingTierData;
  isYearly: boolean;
  isVisible: boolean;
  index: number;
}

const PricingTier = ({ tier, isYearly, isVisible, index }: PricingTierProps) => {
  return (
    <div 
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
            <PricingTierFeature key={feature} feature={feature} included={true} />
          ))}
          {tier.notIncluded.map((feature) => (
            <PricingTierFeature key={feature} feature={feature} included={false} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingTier;
