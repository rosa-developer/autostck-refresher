
import React from 'react';
import { ArrowLeft, HelpCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ResourceLayout from './ResourceLayout';

const HelpCenter = () => {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer: "To create an account, click on the 'Get Started' button in the top navigation bar and follow the registration process. You'll need to provide an email address and create a password."
        },
        {
          question: "Is registration required to browse listings?",
          answer: "No, you can browse all vehicle listings without registering. However, creating an account allows you to save favorites, receive alerts, and contact sellers directly."
        },
        {
          question: "How do I reset my password?",
          answer: "Click on the 'Login' button, then select 'Forgot Password'. Enter your email address and follow the instructions sent to your inbox to reset your password."
        }
      ]
    },
    {
      category: "Using the Platform",
      questions: [
        {
          question: "How do I search for specific vehicles?",
          answer: "Use the search bar at the top of the Marketplace page to enter keywords. You can also use the filter options to narrow results by make, model, year, price range, and other criteria."
        },
        {
          question: "Can I save my favorite listings?",
          answer: "Yes, registered users can save listings by clicking the heart icon on any vehicle card. Access your saved listings from your account dashboard."
        },
        {
          question: "How do I contact a seller?",
          answer: "On each vehicle listing page, you'll find contact options including a message form, phone number (if provided by the seller), and sometimes email contact information."
        }
      ]
    },
    {
      category: "Account Management",
      questions: [
        {
          question: "How do I update my profile information?",
          answer: "Navigate to your account settings by clicking on your profile icon in the top right corner, then select 'Profile Settings'. From there you can update your personal information, contact details, and preferences."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can delete your account from the Account Settings page. Please note that this action is permanent and will remove all your saved listings, messages, and personal information from our system."
        },
        {
          question: "How can I change my notification preferences?",
          answer: "Go to Account Settings > Notifications to customize which alerts you receive. You can opt in or out of email notifications for new listings, price drops, messages, and system announcements."
        }
      ]
    }
  ];
  
  return (
    <ResourceLayout>
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/help" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Help Center
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-muted-foreground">Find answers to common questions and get the support you need</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6">
                    <h3 className="text-lg font-medium mb-2">{category.category}</h3>
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border rounded-md mb-2 bg-card">
                        <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
          
          <div>
            <div className="border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                Need More Help?
              </h3>
              <p className="text-muted-foreground mb-4">Our support team is ready to assist you with any questions or issues you may have.</p>
              <Button className="w-full">Contact Support</Button>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources/guides" className="flex items-center text-primary hover:underline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Guides & Articles
                  </Link>
                </li>
                <li>
                  <Link to="/resources/videos" className="flex items-center text-primary hover:underline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Video Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/resources/downloads" className="flex items-center text-primary hover:underline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Downloads & Checklists
                  </Link>
                </li>
                <li>
                  <Link to="/resources/documentation" className="flex items-center text-primary hover:underline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default HelpCenter;
