
import React from 'react';
import { HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HelpHeader = () => (
  <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 relative overflow-hidden">
    <div className="absolute inset-0 -z-10 opacity-30">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
    </div>
    
    <div className="container px-4 py-12 md:py-20 mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <div className="h-16 w-16 bg-white/80 backdrop-blur-sm shadow-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/50">
          <HelpCircle className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-slide-up">
          Canadian Vehicle Buying{" "}
          <span className="relative text-primary">
            Help & Resources
            <svg
              className="absolute -bottom-1 -left-1 w-full h-3 text-primary/20"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C25,12 75,12 100,0"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
              />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up animation-delay-100">
          Everything you need to know about purchasing a vehicle in Canada - from research to signing the papers.
        </p>
        
        <div className="relative max-w-xl mx-auto animate-slide-up animation-delay-200">
          <Input 
            type="text" 
            placeholder="Search for help articles..." 
            className="w-full h-12 pl-12 pr-4 rounded-full border-gray-200 shadow-sm bg-white/80 backdrop-blur-sm focus-visible:ring-primary"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 rounded-full px-5">
            Search
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default HelpHeader;
