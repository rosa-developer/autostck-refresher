
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <div className="mt-12 border rounded-lg p-8 bg-secondary/50 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to sell your vehicle?</h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        List your car, truck, or motorcycle on our marketplace and reach thousands of potential buyers.
      </p>
      <Button size="lg" className="mx-auto">Post Your Ad Now</Button>
    </div>
  );
};

export default CallToAction;
