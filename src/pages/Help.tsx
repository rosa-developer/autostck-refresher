
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, FileText, Book, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BuyingGuide = () => (
  <div className="space-y-6">
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">5 Steps to Buying Your Perfect Vehicle</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">1</div>
          <div>
            <h4 className="font-medium mb-1">Research and Budget Planning</h4>
            <p className="text-muted-foreground">Determine your budget, including financing options, insurance costs, fuel, and maintenance. Research different models that meet your needs.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">2</div>
          <div>
            <h4 className="font-medium mb-1">Narrow Down Your Options</h4>
            <p className="text-muted-foreground">Use our <Link to="/marketplace" className="text-primary underline">marketplace</Link> to filter vehicles by price, make, model, year, and features. Save your favorites for comparison.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">3</div>
          <div>
            <h4 className="font-medium mb-1">Check Vehicle History & Condition</h4>
            <p className="text-muted-foreground">Always review the vehicle history report. For used vehicles, look for accident history, title information, and service records.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">4</div>
          <div>
            <h4 className="font-medium mb-1">Test Drive & Inspection</h4>
            <p className="text-muted-foreground">Schedule a test drive through our platform. We recommend having the vehicle inspected by a trusted mechanic before purchasing.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">5</div>
          <div>
            <h4 className="font-medium mb-1">Negotiation & Purchase</h4>
            <p className="text-muted-foreground">Use our price comparison tools to ensure you're getting a fair deal. Complete the purchase through our secure platform with buyer protection.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Documentation Guide</h3>
            <p className="text-sm text-muted-foreground mb-4">Learn about all the paperwork needed for a smooth vehicle purchase.</p>
            <Button variant="outline" size="sm">View Guide</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Inspection Checklist</h3>
            <p className="text-sm text-muted-foreground mb-4">Download our comprehensive vehicle inspection checklist.</p>
            <Button variant="outline" size="sm">Download PDF</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Common Pitfalls</h3>
            <p className="text-sm text-muted-foreground mb-4">Avoid these common mistakes when purchasing a vehicle.</p>
            <Button variant="outline" size="sm">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const FAQSection = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>What documents do I need to buy a vehicle?</AccordionTrigger>
      <AccordionContent>
        <p>To purchase a vehicle, you'll typically need:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Valid driver's license</li>
          <li>Proof of insurance</li>
          <li>Method of payment or financing pre-approval</li>
          <li>Proof of address (utility bill, etc.)</li>
        </ul>
        <p className="mt-2">For private sales, you may also need to complete title transfer documents and bill of sale.</p>
      </AccordionContent>
    </AccordionItem>
    
    <AccordionItem value="item-2">
      <AccordionTrigger>How can I check a vehicle's history?</AccordionTrigger>
      <AccordionContent>
        We provide integrated vehicle history reports for all listings on our platform. These reports include accident history, title information, service records, and odometer readings. For additional verification, you can request the VIN and run reports through third-party services like Carfax or AutoCheck.
      </AccordionContent>
    </AccordionItem>
    
    <AccordionItem value="item-3">
      <AccordionTrigger>What financing options are available?</AccordionTrigger>
      <AccordionContent>
        Our platform partners with multiple lenders to provide competitive financing options. You can apply for pre-approval directly through our website, compare rates, and choose the best option for your situation. We also provide calculators to help you estimate monthly payments and the total cost of ownership.
      </AccordionContent>
    </AccordionItem>
    
    <AccordionItem value="item-4">
      <AccordionTrigger>How do I schedule a test drive?</AccordionTrigger>
      <AccordionContent>
        You can schedule a test drive directly through any vehicle listing on our marketplace. Simply click the "Schedule Test Drive" button, select your preferred date and time, and submit your request. The seller will confirm your appointment, and you'll receive directions to the vehicle's location.
      </AccordionContent>
    </AccordionItem>
    
    <AccordionItem value="item-5">
      <AccordionTrigger>Is there a return policy or warranty?</AccordionTrigger>
      <AccordionContent>
        Return policies vary by seller. Dealerships often offer limited return periods (typically 3-7 days), while private sellers generally sell vehicles "as-is." Warranties also vary - new vehicles come with manufacturer warranties, many used dealership vehicles include limited warranties, and certified pre-owned vehicles have extended warranty coverage. All warranty information is clearly displayed on each listing.
      </AccordionContent>
    </AccordionItem>
    
    <AccordionItem value="item-6">
      <AccordionTrigger>How does your buyer protection work?</AccordionTrigger>
      <AccordionContent>
        Our Buyer Protection Program provides security when purchasing through our platform. It includes secure payment processing, verification of seller identity, escrow services for private sales, and dispute resolution assistance. Additionally, we offer a 50-point inspection verification option for added peace of mind.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const Resources = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-6">
        <Book className="h-6 w-6 text-primary mb-4" />
        <h3 className="text-lg font-medium mb-2">Guides & Articles</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Ultimate Guide to Vehicle Financing</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">New vs. Used: Making the Right Choice</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Understanding Vehicle Depreciation</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">The Complete Guide to Electric Vehicles</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Negotiation Tactics for Vehicle Purchasing</a>
          </li>
        </ul>
      </div>
      
      <div className="border rounded-lg p-6">
        <FileText className="h-6 w-6 text-primary mb-4" />
        <h3 className="text-lg font-medium mb-2">Downloads & Checklists</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Pre-Purchase Inspection Checklist (PDF)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Vehicle Comparison Worksheet (Excel)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Budget Planning Calculator (Excel)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Private Sale Documentation Kit (ZIP)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Maintenance Schedule Templates (PDF)</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="border rounded-lg p-6">
      <h3 className="text-lg font-medium mb-4">Video Tutorials</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { title: "How to Inspect a Used Vehicle", duration: "8:24" },
          { title: "Understanding Vehicle Financing", duration: "12:15" },
          { title: "Test Drive Best Practices", duration: "6:42" },
          { title: "Negotiating with Confidence", duration: "10:37" },
          { title: "Decoding the Vehicle History Report", duration: "7:19" },
          { title: "Red Flags to Watch For", duration: "9:05" }
        ].map((video, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-video bg-secondary relative rounded-md overflow-hidden mb-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{video.title}</h4>
            <p className="text-xs text-muted-foreground">{video.duration}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

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

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero Section */}
      <div className="bg-secondary/30">
        <div className="container px-4 py-12 md:py-16 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Vehicle Buying Help & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about purchasing a vehicle - from research to signing the papers.
            </p>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Help;
