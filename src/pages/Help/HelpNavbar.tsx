
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HelpNavbar = () => (
  <header className="border-b">
    <div className="container flex h-16 items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-lg font-semibold">
          Auto Advertise
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/marketplace">
          <Button variant="outline">Marketplace</Button>
        </Link>
        <Link to="/get-started">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  </header>
);

export default HelpNavbar;
