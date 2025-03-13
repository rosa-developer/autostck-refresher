
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const MarketplaceHeader = () => {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-semibold">
            Auto Advertise <span className="text-primary">Canada</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center text-muted-foreground mr-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">Canada-wide listings</span>
          </div>
          <Link to="/help">
            <Button variant="outline" size="sm">
              Help Center
            </Button>
          </Link>
          <Link to="/get-started">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;
