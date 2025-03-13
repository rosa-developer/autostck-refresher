
import React from 'react';
import { HelpCircle } from "lucide-react";

const HelpHeader = () => (
  <div className="bg-secondary/30">
    <div className="container px-4 py-12 md:py-16 mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Canadian Vehicle Buying Help & Resources
        </h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about purchasing a vehicle in Canada - from research to signing the papers.
        </p>
      </div>
    </div>
  </div>
);

export default HelpHeader;
