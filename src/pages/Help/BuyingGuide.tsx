
import React from 'react';
import { Link } from "react-router-dom";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BuyingGuide = () => (
  <div className="space-y-6">
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">5 Steps to Buying Your Perfect Vehicle</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">1</div>
          <div>
            <h4 className="font-medium mb-1">Research and Budget Planning</h4>
            <p className="text-muted-foreground">Determine your budget, including financing options, insurance costs, fuel, and maintenance. Research different models that meet your needs.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">2</div>
          <div>
            <h4 className="font-medium mb-1">Narrow Down Your Options</h4>
            <p className="text-muted-foreground">Use our <Link to="/marketplace" className="text-primary underline">marketplace</Link> to filter vehicles by price, make, model, year, and features. Save your favorites for comparison.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">3</div>
          <div>
            <h4 className="font-medium mb-1">Check Vehicle History & Condition</h4>
            <p className="text-muted-foreground">Always review the vehicle history report. For used vehicles, look for accident history, title information, and service records.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">4</div>
          <div>
            <h4 className="font-medium mb-1">Test Drive & Inspection</h4>
            <p className="text-muted-foreground">Schedule a test drive through our platform. We recommend having the vehicle inspected by a trusted mechanic before purchasing.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">5</div>
          <div>
            <h4 className="font-medium mb-1">Negotiation & Purchase</h4>
            <p className="text-muted-foreground">Use our price comparison tools to ensure you're getting a fair deal. Complete the purchase through our secure platform with buyer protection.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Documentation Guide</h3>
            <p className="text-sm text-muted-foreground mb-4">Learn about all the paperwork needed for a smooth vehicle purchase.</p>
            <Button variant="outline" size="sm">View Guide</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Inspection Checklist</h3>
            <p className="text-sm text-muted-foreground mb-4">Download our comprehensive vehicle inspection checklist.</p>
            <Button variant="outline" size="sm">Download PDF</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Common Pitfalls</h3>
            <p className="text-sm text-muted-foreground mb-4">Avoid these common mistakes when purchasing a vehicle.</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default BuyingGuide;
