
import React from 'react';
import { ArrowLeft, Building, ChevronRight, MapPin, ExternalLink, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceLayout from './ResourceLayout';

const PartnerCard = ({ partner }) => (
  <div className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow h-full flex flex-col">
    <div className="h-40 bg-secondary flex items-center justify-center p-4">
      <img 
        src="/placeholder.svg" 
        alt={partner.name} 
        className="max-h-full max-w-full object-contain" 
      />
    </div>
    <div className="p-5 flex-grow flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium">{partner.name}</h3>
        {partner.featured && (
          <Badge className="bg-primary/10 text-primary">Featured</Badge>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-3 flex-grow">{partner.description}</p>
      <div className="flex items-center text-xs text-muted-foreground mb-4">
        <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
        <span>{partner.location}</span>
      </div>
      <Button variant="outline" size="sm" className="w-full justify-center gap-1">
        Visit Partner
        <ChevronRight className="h-3 w-3" />
      </Button>
    </div>
  </div>
);

const Partners = () => {
  const dealerships = [
    {
      name: "Metropolitan Auto Group",
      description: "A premium dealership network with locations across Ontario offering new and used vehicles.",
      location: "Toronto, Ottawa, Hamilton",
      featured: true
    },
    {
      name: "Western Motors",
      description: "Family-owned dealership specializing in imported vehicles with excellent customer service.",
      location: "Vancouver, BC"
    },
    {
      name: "Prairie Auto Mall",
      description: "Multi-brand dealership serving the prairies with extensive inventory and financing options.",
      location: "Calgary, Edmonton, Regina"
    },
    {
      name: "Atlantic Vehicle Centre",
      description: "Eastern Canada's largest vehicle retailer with comprehensive services and aftermarket support.",
      location: "Halifax, NS"
    }
  ];
  
  const financial = [
    {
      name: "Maple Financial Services",
      description: "Specialized auto financing solutions with competitive rates and flexible terms for all credit profiles.",
      location: "National Coverage",
      featured: true
    },
    {
      name: "Northern Credit Union",
      description: "Member-owned financial institution offering vehicle loans with personalized service.",
      location: "Ontario, Quebec"
    },
    {
      name: "Pacific Leasing Group",
      description: "Vehicle leasing specialists with options for personal and business use.",
      location: "British Columbia, Alberta"
    }
  ];
  
  const insurance = [
    {
      name: "Shield Insurance",
      description: "Comprehensive auto insurance packages with special discounts for new drivers and multi-vehicle policies.",
      location: "National Coverage"
    },
    {
      name: "Dominion Protection",
      description: "Full-service insurance provider specializing in customized vehicle coverage plans.",
      location: "Ontario, Quebec, Maritimes",
      featured: true
    },
    {
      name: "Western Coverage Group",
      description: "Regional insurance experts with deep understanding of western Canadian driving conditions and needs.",
      location: "British Columbia, Alberta, Saskatchewan, Manitoba"
    }
  ];
  
  const maintenance = [
    {
      name: "AutoCare Network",
      description: "National chain of certified repair shops with standardized pricing and warranty on all services.",
      location: "50+ locations across Canada",
      featured: true
    },
    {
      name: "TechMasters",
      description: "Specializing in advanced diagnostics and repair for modern vehicles including hybrids and EVs.",
      location: "Major urban centers"
    },
    {
      name: "QuickService Garages",
      description: "Convenient maintenance centers focusing on routine services with no appointment necessary.",
      location: "100+ locations nationwide"
    }
  ];

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
          <p className="text-muted-foreground max-w-2xl">Our network of trusted partners for every stage of your vehicle ownership journey</p>
        </div>
        
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs rounded-full border bg-white/80 backdrop-blur-sm">
                <span className="font-medium">Trusted Partners Network</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Connecting You with Quality Service Providers</h2>
              <p className="text-muted-foreground mb-6">
                Our partner network includes carefully selected businesses that meet our high standards 
                for quality, reliability, and customer service. From vehicle purchasing to maintenance, 
                we've got you covered with trusted professionals.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border">
                  <Building className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Dealerships</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border">
                  <Building className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Financial Services</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border">
                  <Building className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Insurance</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border">
                  <Building className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Maintenance</div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="dealerships" className="p-6">
            <TabsList className="mb-6 justify-start w-full md:w-auto overflow-auto">
              <TabsTrigger value="dealerships">Dealerships</TabsTrigger>
              <TabsTrigger value="financial">Financial Services</TabsTrigger>
              <TabsTrigger value="insurance">Insurance Providers</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dealerships" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dealerships.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="financial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {financial.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="insurance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insurance.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="maintenance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {maintenance.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Partner Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">1</div>
                <span>Special rates and offers exclusively for our users</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">2</div>
                <span>Verified reviews and quality assurance</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">3</div>
                <span>Simplified referral process</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">4</div>
                <span>Nationwide coverage with local expertise</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">5</div>
                <span>Regular quality and customer satisfaction monitoring</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h3 className="text-lg font-medium mb-4">Become a Partner</h3>
            <p className="text-muted-foreground mb-4">
              Interested in joining our partner network? We're always looking for quality service providers 
              in the automotive industry. Apply today to reach our community of vehicle owners.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4 border">
              <h4 className="font-medium mb-2">Partnership Requirements:</h4>
              <ul className="text-sm space-y-2">
                <li>• Minimum 3 years in business</li>
                <li>• Excellent customer service record</li>
                <li>• Proper licensing and insurance</li>
                <li>• Commitment to transparent pricing</li>
              </ul>
            </div>
            <Button className="w-full">Apply to Become a Partner</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border shadow-sm p-6 md:p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-medium mb-6 text-center">Partner Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-1">Phone Support</h4>
                <p className="text-sm text-muted-foreground mb-3">Monday-Friday: 9AM-5PM EST</p>
                <a href="tel:+18005551234" className="text-primary hover:underline">1-800-555-1234</a>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-sm text-muted-foreground mb-3">Response within 24 hours</p>
                <a href="mailto:partners@example.com" className="text-primary hover:underline">partners@example.com</a>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <ExternalLink className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-1">Partner Portal</h4>
                <p className="text-sm text-muted-foreground mb-3">Exclusive partner resources</p>
                <a href="#" className="text-primary hover:underline">partner.example.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default Partners;
