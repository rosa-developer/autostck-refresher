
import React from 'react';
import { Car } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VehicleListings from './VehicleListings';
import FeaturedListings from './FeaturedListings';
import TabPlaceholder from './TabPlaceholder';
import { CarListingType } from '../types';

interface CategoryTabsProps {
  filteredListings: CarListingType[];
}

const CategoryTabs = ({ filteredListings }: CategoryTabsProps) => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="all">All Vehicles</TabsTrigger>
        <TabsTrigger value="new">New</TabsTrigger>
        <TabsTrigger value="used">Used</TabsTrigger>
        <TabsTrigger value="electric">Electric</TabsTrigger>
        <TabsTrigger value="luxury">Luxury</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="mt-0">
        {/* Featured Listings */}
        <FeaturedListings filteredListings={filteredListings} />
        
        {/* All Listings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">All Listings</h2>
          <VehicleListings listings={filteredListings} />
        </div>
      </TabsContent>
      
      <TabsContent value="new" className="mt-0">
        <TabPlaceholder title="New Vehicle Listings" description="Brand new vehicles with factory warranty will appear here." />
      </TabsContent>
      
      <TabsContent value="used" className="mt-0">
        <TabPlaceholder title="Used Vehicle Listings" description="Quality pre-owned vehicles with detailed history reports will appear here." />
      </TabsContent>
      
      <TabsContent value="electric" className="mt-0">
        <TabPlaceholder title="Electric Vehicle Listings" description="Browse electric and hybrid vehicles with eco-friendly features." />
      </TabsContent>
      
      <TabsContent value="luxury" className="mt-0">
        <TabPlaceholder title="Luxury Vehicle Listings" description="Premium and luxury vehicles from top manufacturers will appear here." />
      </TabsContent>
    </Tabs>
  );
};

export default CategoryTabs;
