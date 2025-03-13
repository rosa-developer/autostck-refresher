
import React from 'react';
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Get Personalized Help</h3>
        <p className="text-muted-foreground mb-6">
          Have questions not covered in our resources? Our team of vehicle purchasing experts is ready to help you with personalized guidance.
        </p>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <input
                id="name"
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="topic" className="block text-sm font-medium mb-1">What do you need help with?</label>
              <select
                id="topic"
                className="w-full p-2 rounded-md border border-input bg-background"
              >
                <option value="" disabled selected>Select a topic</option>
                <option value="financing">Financing Options</option>
                <option value="inspection">Vehicle Inspection</option>
                <option value="negotiation">Negotiation Advice</option>
                <option value="documentation">Documentation Help</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Your Question</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 rounded-md border border-input bg-background"
                placeholder="Please provide details about your question or concern..."
              ></textarea>
            </div>
          </div>
          
          <Button className="w-full">Submit Question</Button>
        </form>
      </div>
      
      <div className="border rounded-lg p-6 bg-secondary/50">
        <h3 className="text-xl font-semibold mb-4">Alternative Ways to Reach Us</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Phone Support</h4>
            <p className="text-muted-foreground">
              Call our vehicle purchasing experts at:
            </p>
            <p className="text-lg font-medium mt-1">1-800-555-AUTO</p>
            <p className="text-sm text-muted-foreground mt-1">
              Available Monday-Friday, 8am-8pm ET
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Email Support</h4>
            <p className="text-muted-foreground">
              Send your questions to our support team:
            </p>
            <p className="text-lg font-medium mt-1">help@autoadvertise.com</p>
            <p className="text-sm text-muted-foreground mt-1">
              We typically respond within 24 hours
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Visit a Partner Dealership</h4>
            <p className="text-muted-foreground">
              Get face-to-face assistance at one of our partner locations.
            </p>
            <Button variant="outline" className="mt-2">Find Nearest Location</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
