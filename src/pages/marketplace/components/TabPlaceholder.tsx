
import React from 'react';
import { Car } from 'lucide-react';

interface TabPlaceholderProps {
  title: string;
  description: string;
}

const TabPlaceholder = ({ title, description }: TabPlaceholderProps) => {
  return (
    <div className="text-center p-8">
      <Car className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default TabPlaceholder;
