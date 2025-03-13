
import React from 'react';
import { MapPin, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CarListingType } from '../types';

interface VehicleCardProps {
  vehicle: CarListingType;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={vehicle.image} 
          alt={vehicle.title} 
          className="w-full h-48 object-cover"
        />
        {vehicle.featured && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-xl font-bold line-clamp-1">{vehicle.title}</h3>
          <div className="flex items-center mt-1 text-muted-foreground text-sm">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{vehicle.location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2 mb-2">
          <span className="text-xs bg-secondary px-2 py-1 rounded-full">{vehicle.year}</span>
          <span className="text-xs bg-secondary px-2 py-1 rounded-full">{vehicle.fuelType}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1 text-primary" />
            <span className="font-bold text-lg">${vehicle.price.toLocaleString()}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {vehicle.mileage.toLocaleString()} miles
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">Details</Button>
        <Button size="sm">Contact Seller</Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
