
import { PricingTierData } from './PricingTier';

export const tiers: PricingTierData[] = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses just getting started with inventory management.",
    features: [
      "Up to 1,000 inventory items",
      "Basic analytics dashboard",
      "Email support",
      "Mobile app access",
      "CSV import/export",
    ],
    notIncluded: [
      "Advanced forecasting",
      "API access",
      "Custom reporting",
      "Team collaboration tools",
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses with moderate inventory needs.",
    features: [
      "Up to 10,000 inventory items",
      "Advanced analytics dashboard",
      "Priority support",
      "Mobile app access",
      "CSV import/export",
      "Advanced forecasting",
      "Basic API access",
      "Custom reporting",
    ],
    notIncluded: [
      "Team collaboration tools",
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Complete solution for large businesses with complex inventory needs.",
    features: [
      "Unlimited inventory items",
      "Advanced analytics dashboard",
      "Dedicated support team",
      "Mobile app access",
      "CSV import/export",
      "Advanced forecasting",
      "Full API access",
      "Custom reporting",
      "Team collaboration tools",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false
  }
];
