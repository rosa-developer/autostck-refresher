
import React from 'react';
import VehicleCard from './VehicleCard';
import { CarListingType } from '../types';

interface VehicleListingsProps {
  listings: CarListingType[];
}

const VehicleListings = ({ listings }: VehicleListingsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehicleListings;
