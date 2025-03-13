import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Car, Filter, ArrowLeft, Tag, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

// Sample car listing data
const carListings = [
  {
    id: 1,
    title: "2020 Tesla Model 3 Performance",
    price: 49990,
    location: "Los Angeles, CA",
    mileage: 12500,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=600&auto=format&fit=crop",
    featured: true,
    year: 2020,
    make: "Tesla",
    model: "Model 3",
    fuelType: "Electric"
  },
  {
    id: 2,
    title: "2018 Toyota Camry XSE",
    price: 24995,
    location: "Seattle, WA",
    mileage: 35000,
    image: "https://images.unsplash.com/photo-1633859834591-67564c713fad?q=80&w=600&auto=format&fit=crop",
    featured: false,
    year: 2018,
    make: "Toyota",
    model: "Camry",
    fuelType: "Gasoline"
  },
  {
    id: 3,
    title: "2021 Ford Mustang GT Premium",
    price: 52755,
    location: "Miami, FL",
    mileage: 8900,
    image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?q=80&w=600&auto=format&fit=crop",
    featured: true,
    year: 2021,
    make: "Ford",
    model: "Mustang",
    fuelType: "Gasoline"
  },
  {
    id: 4,
    title: "2019 BMW X5 xDrive40i",
    price: 47850,
    location: "Chicago, IL",
    mileage: 28000,
    image: "https://images.unsplash.com/photo-1607853554248-9453a1d86d8c?q=80&w=600&auto=format&fit=crop",
    featured: false,
    year: 2019,
    make: "BMW",
    model: "X5",
    fuelType: "Gasoline"
  },
  {
    id: 5,
    title: "2022 Mercedes-Benz EQS 450+",
    price: 110000,
    location: "Denver, CO",
    mileage: 5000,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop",
    featured: true,
    year: 2022,
    make: "Mercedes-Benz",
    model: "EQS",
    fuelType: "Electric"
  },
  {
    id: 6,
    title: "2017 Honda Civic Type R",
    price: 32500,
    location: "Atlanta, GA",
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?q=80&w=600&auto=format&fit=crop",
    featured: false,
    year: 2017,
    make: "Honda",
    model: "Civic",
    fuelType: "Gasoline"
  }
];

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
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Post Ad</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-8">
          {/* Page Title */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Vehicle Marketplace</h1>
            <p className="mt-2 text-muted-foreground">
              Browse our selection of high-quality vehicles for sale
            </p>
          </div>

          {/* Search and Filters */}
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-8">
              <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search by make, model, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
            <div className="flex gap-2 md:col-span-4">
              <Select defaultValue="price">
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="mileage">Lowest Mileage</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
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
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredListings.filter(car => car.featured).map((car) => (
                    <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={car.image} 
                          alt={car.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <h3 className="text-xl font-bold line-clamp-1">{car.title}</h3>
                          <div className="flex items-center mt-1 text-muted-foreground text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{car.location}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center">
                            <Tag className="h-4 w-4 mr-1 text-primary" />
                            <span className="font-bold text-lg">${car.price.toLocaleString()}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {car.mileage.toLocaleString()} miles
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button variant="outline" size="sm">Details</Button>
                        <Button size="sm">Contact Seller</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* All Listings */}
              <div>
                <h2 className="text-2xl font-bold mb-4">All Listings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredListings.map((car) => (
                    <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={car.image} 
                          alt={car.title} 
                          className="w-full h-48 object-cover"
                        />
                        {car.featured && (
                          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <h3 className="text-xl font-bold line-clamp-1">{car.title}</h3>
                          <div className="flex items-center mt-1 text-muted-foreground text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{car.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2 mb-2">
                          <span className="text-xs bg-secondary px-2 py-1 rounded-full">{car.year}</span>
                          <span className="text-xs bg-secondary px-2 py-1 rounded-full">{car.fuelType}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center">
                            <Tag className="h-4 w-4 mr-1 text-primary" />
                            <span className="font-bold text-lg">${car.price.toLocaleString()}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {car.mileage.toLocaleString()} miles
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button variant="outline" size="sm">Details</Button>
                        <Button size="sm">Contact Seller</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-0">
              <div className="text-center p-8">
                <Car className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">New Vehicle Listings</h3>
                <p className="text-muted-foreground">
                  Brand new vehicles with factory warranty will appear here.
                </p>
              </div>
            </TabsContent>
            
            {/* Other tabs would have similar content */}
            <TabsContent value="used" className="mt-0">
              <div className="text-center p-8">
                <Car className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Used Vehicle Listings</h3>
                <p className="text-muted-foreground">
                  Quality pre-owned vehicles with detailed history reports will appear here.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="electric" className="mt-0">
              <div className="text-center p-8">
                <Car className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Electric Vehicle Listings</h3>
                <p className="text-muted-foreground">
                  Browse electric and hybrid vehicles with eco-friendly features.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="luxury" className="mt-0">
              <div className="text-center p-8">
                <Car className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Luxury Vehicle Listings</h3>
                <p className="text-muted-foreground">
                  Premium and luxury vehicles from top manufacturers will appear here.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="mt-12 border rounded-lg p-8 bg-secondary/50 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to sell your vehicle?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              List your car, truck, or motorcycle on our marketplace and reach thousands of potential buyers.
            </p>
            <Button size="lg" className="mx-auto">Post Your Ad Now</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
