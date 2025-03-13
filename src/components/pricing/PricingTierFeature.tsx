
import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingTierFeatureProps {
  feature: string;
  included: boolean;
}

const PricingTierFeature = ({ feature, included }: PricingTierFeatureProps) => {
  if (included) {
    return (
      <li className="flex items-start">
        <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
        <span>{feature}</span>
      </li>
    );
  }
  
  return (
    <li className="flex items-start text-muted-foreground">
      <X className="h-5 w-5 text-muted-foreground shrink-0 mr-3" />
      <span>{feature}</span>
    </li>
  );
};

export default PricingTierFeature;
