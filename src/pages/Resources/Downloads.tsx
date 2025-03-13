
import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResourceLayout from './ResourceLayout';

const Downloads = () => {
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
          <h1 className="text-3xl font-bold mb-2">Downloads & Checklists</h1>
          <p className="text-muted-foreground">Practical tools and templates to streamline your vehicle purchase process</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Pre-Purchase Inspection Checklist",
              description: "A comprehensive checklist for inspecting a used vehicle before making a purchase decision.",
              format: "PDF",
              fileSize: "245 KB"
            },
            {
              title: "Vehicle Comparison Worksheet",
              description: "Compare different vehicles side-by-side with this detailed comparison worksheet.",
              format: "Excel",
              fileSize: "1.2 MB"
            },
            {
              title: "Budget Planning Calculator",
              description: "Calculate total cost of ownership including financing, insurance, maintenance, and fuel costs.",
              format: "Excel",
              fileSize: "850 KB"
            },
            {
              title: "Private Sale Documentation Kit",
              description: "All the legal documents you need for a private vehicle sale, including bill of sale and transfer forms.",
              format: "ZIP",
              fileSize: "3.5 MB"
            },
            {
              title: "Maintenance Schedule Templates",
              description: "Keep track of your vehicle's maintenance with these customizable schedule templates.",
              format: "PDF",
              fileSize: "420 KB"
            },
            {
              title: "Vehicle Financing Application Form",
              description: "Pre-filled financing application form to speed up the loan approval process.",
              format: "PDF",
              fileSize: "380 KB"
            },
            {
              title: "Test Drive Evaluation Sheet",
              description: "Evaluate and compare test drives with this structured evaluation form.",
              format: "PDF",
              fileSize: "290 KB"
            },
            {
              title: "Vehicle Feature Comparison Matrix",
              description: "A detailed matrix to compare features across different vehicle models and trims.",
              format: "Excel",
              fileSize: "1.4 MB"
            }
          ].map((download, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-2">{download.title}</h3>
              <p className="text-muted-foreground mb-4">{download.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{download.format} • {download.fileSize}</span>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default Downloads;
