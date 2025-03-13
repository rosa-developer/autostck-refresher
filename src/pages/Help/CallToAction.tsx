
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => (
  <div className="bg-primary/5 border-t">
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to find your next vehicle?</h2>
        <p className="text-muted-foreground mb-8">
          Browse thousands of listings from verified sellers with all the details you need to make an informed purchase.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/marketplace">
            <Button size="lg" variant="outline">Browse Vehicles</Button>
          </Link>
          <Link to="/get-started">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CallToAction;
