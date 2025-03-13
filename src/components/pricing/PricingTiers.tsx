
import React from 'react';
import PricingTier from './PricingTier';
import { tiers } from './pricingData';

interface PricingTiersProps {
  isYearly: boolean;
  isVisible: boolean;
}

const PricingTiers = ({ isYearly, isVisible }: PricingTiersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {tiers.map((tier, index) => (
        <PricingTier 
          key={tier.name}
          tier={tier}
          isYearly={isYearly}
          isVisible={isVisible}
          index={index}
        />
      ))}
    </div>
  );
};

export default PricingTiers;
