
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';

const ResourceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader variant="help" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ResourceLayout;
