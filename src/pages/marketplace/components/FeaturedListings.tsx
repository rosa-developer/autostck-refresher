
import React from 'react';
import VehicleListings from './VehicleListings';
import { CarListingType } from '../types';

interface FeaturedListingsProps {
  filteredListings: CarListingType[];
}

const FeaturedListings = ({ filteredListings }: FeaturedListingsProps) => {
  const featuredListings = filteredListings.filter(car => car.featured);
  
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
      <VehicleListings listings={featuredListings} />
    </div>
  );
};

export default FeaturedListings;
