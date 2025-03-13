
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MarketplaceHeader = () => {
  return (
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
  );
};

export default MarketplaceHeader;
