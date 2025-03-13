
import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResourceLayout from './ResourceLayout';

const Documentation = () => {
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
          <h1 className="text-3xl font-bold mb-2">Documentation</h1>
          <p className="text-muted-foreground">Comprehensive technical documentation for vehicle owners and enthusiasts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Vehicle Owner's Manuals",
              description: "Access digital versions of owner's manuals for popular vehicle makes and models.",
              category: "Owner's Documentation"
            },
            {
              title: "Technical Specifications",
              description: "Detailed technical specifications for engines, transmissions, and other vehicle systems.",
              category: "Technical Data"
            },
            {
              title: "Service Bulletins",
              description: "Important service bulletins and recall notices organized by manufacturer.",
              category: "Service Information"
            },
            {
              title: "Wiring Diagrams",
              description: "Electrical system wiring diagrams for troubleshooting and repair purposes.",
              category: "Technical Data"
            },
            {
              title: "Parts Catalogs",
              description: "Exploded view diagrams and parts listings for common vehicle components.",
              category: "Parts Information"
            },
            {
              title: "Diagnostic Trouble Codes",
              description: "Comprehensive database of OBD-II diagnostic trouble codes and their meanings.",
              category: "Technical Data"
            },
            {
              title: "Fluid Specifications",
              description: "Recommended fluids and capacities for engines, transmissions, and other systems.",
              category: "Technical Data"
            },
            {
              title: "Warranty Information",
              description: "Warranty terms and conditions for major vehicle manufacturers.",
              category: "Owner's Documentation"
            },
            {
              title: "Safety Recalls",
              description: "Database of vehicle safety recalls searchable by make, model, and year.",
              category: "Service Information"
            }
          ].map((doc, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-primary mr-2" />
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{doc.category}</span>
              </div>
              <h3 className="text-lg font-medium mb-2">{doc.title}</h3>
              <p className="text-muted-foreground mb-4">{doc.description}</p>
              <Button variant="outline">
                View Documentation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default Documentation;
