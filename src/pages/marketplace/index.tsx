
import React, { useState } from 'react';
import MarketplaceHeader from './components/MarketplaceHeader';
import SearchAndFilters from './components/SearchAndFilters';
import CategoryTabs from './components/CategoryTabs';
import CallToAction from './components/CallToAction';
import { carListings } from './data/carListings';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredListings, setFilteredListings] = useState(carListings);

  // Filter function that would normally use more sophisticated filtering
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = carListings.filter(car => 
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredListings(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <MarketplaceHeader />
      
      <main className="container px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-8">
          {/* Page Title */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Vehicle Marketplace</h1>
            <p className="mt-2 text-muted-foreground">
              Browse our selection of high-quality vehicles for sale
            </p>
          </div>

          <SearchAndFilters 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            handleSearch={handleSearch} 
          />
          
          <CategoryTabs filteredListings={filteredListings} />
          
          <CallToAction />
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
