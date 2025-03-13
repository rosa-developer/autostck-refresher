
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

export default FAQSection;
