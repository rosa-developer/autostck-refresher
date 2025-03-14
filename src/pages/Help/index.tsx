
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HelpNavbar from './HelpNavbar';
import HelpHeader from './HelpHeader';
import BuyingGuide from './BuyingGuide';
import FAQSection from './FAQSection';
import Resources from './Resources';
import ContactForm from './ContactForm';
import CallToAction from './CallToAction';

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Navigation */}
      <HelpNavbar />

      {/* Hero Section */}
      <HelpHeader />

      {/* Main Content with Tabs */}
      <main className="container px-4 py-8 md:py-12 mx-auto">
        <Tabs defaultValue="buying-guide" className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-1 mb-8 overflow-hidden border">
            <TabsList className="w-full justify-start overflow-auto grid grid-cols-4 p-1">
              <TabsTrigger value="buying-guide" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Buying Guide</TabsTrigger>
              <TabsTrigger value="faq" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">FAQ</TabsTrigger>
              <TabsTrigger value="resources" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Resources</TabsTrigger>
              <TabsTrigger value="contact" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Get Help</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border">
            <TabsContent value="buying-guide" className="mt-0">
              <BuyingGuide />
            </TabsContent>
            
            <TabsContent value="faq" className="mt-0">
              <FAQSection />
            </TabsContent>
            
            <TabsContent value="resources" className="mt-0">
              <Resources />
            </TabsContent>
            
            <TabsContent value="contact" className="mt-0">
              <ContactForm />
            </TabsContent>
          </div>
        </Tabs>
      </main>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Help;
