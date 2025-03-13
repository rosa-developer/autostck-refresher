
import React from 'react';
import { ArrowLeft, Users, Building, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResourceLayout from './ResourceLayout';

const Partners = () => {
  return (
    <ResourceLayout>
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/help" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Help Center
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Partners</h1>
          <p className="text-muted-foreground">Connect with our trusted partners for additional services and solutions</p>
        </div>
        
        {/* Featured Partners */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "AutoFinance Pro",
                logo: "https://placehold.co/150",
                description: "Specialized vehicle financing solutions with competitive rates and flexible terms.",
                category: "Financing"
              },
              {
                name: "SecureAuto Insurance",
                logo: "https://placehold.co/150",
                description: "Comprehensive insurance coverage tailored specifically for vehicle owners and dealers.",
                category: "Insurance"
              },
              {
                name: "InspectPro Services",
                logo: "https://placehold.co/150",
                description: "Professional vehicle inspection services available nationwide with detailed reports.",
                category: "Inspection"
              }
            ].map((partner, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow text-center">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{partner.name}</h3>
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-3">
                  {partner.category}
                </span>
                <p className="text-muted-foreground mb-4">{partner.description}</p>
                <Button className="w-full">
                  Learn More
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partner Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Partner Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Financing", count: 12 },
              { name: "Insurance", count: 8 },
              { name: "Inspection", count: 15 },
              { name: "Transportation", count: 9 },
              { name: "Maintenance", count: 14 },
              { name: "Parts & Accessories", count: 23 },
              { name: "Detailing", count: 7 },
              { name: "Technology", count: 11 }
            ].map((category, index) => (
              <div key={index} className="border rounded-lg p-4 text-center hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} partners</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Become a Partner */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Become a Partner</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join our partner network to reach new customers, grow your business, and provide valuable services to our community of vehicle owners and dealers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Apply Now</Button>
            <Button variant="outline">Learn About Benefits</Button>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default Partners;
