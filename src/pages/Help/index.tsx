
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <HelpNavbar />

      {/* Hero Section */}
      <HelpHeader />

      {/* Main Content with Tabs */}
      <main className="container px-4 py-8 md:py-12 mx-auto">
        <Tabs defaultValue="buying-guide" className="max-w-4xl mx-auto">
          <TabsList className="w-full mb-8 justify-start overflow-auto">
            <TabsTrigger value="buying-guide">Buying Guide</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="contact">Get Help</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buying-guide">
            <BuyingGuide />
          </TabsContent>
          
          <TabsContent value="faq">
            <FAQSection />
          </TabsContent>
          
          <TabsContent value="resources">
            <Resources />
          </TabsContent>
          
          <TabsContent value="contact">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </main>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Help;
