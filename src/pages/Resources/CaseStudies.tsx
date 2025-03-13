
import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResourceLayout from './ResourceLayout';

const CaseStudies = () => {
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
          <h1 className="text-3xl font-bold mb-2">Community Case Studies</h1>
          <p className="text-muted-foreground">Real stories from our users showcasing successful implementations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "How Smith Motors Increased Sales by 45%",
              category: "Dealership",
              image: "https://placehold.co/600x400",
              snippet: "Smith Motors, a family-owned dealership, transformed their business by implementing our platform to manage their inventory and connect with customers online.",
              readTime: "12 min read"
            },
            {
              title: "Martinez Family's Journey to Finding Their Perfect Vehicle",
              category: "Buyer Success",
              image: "https://placehold.co/600x400",
              snippet: "After months of frustration with traditional car shopping, the Martinez family shares how our platform simplified their search for the ideal family SUV.",
              readTime: "8 min read"
            },
            {
              title: "AutoTech's Integration Success Story",
              category: "Developer",
              image: "https://placehold.co/600x400",
              snippet: "Learn how AutoTech used our API to create a custom solution that seamlessly connects their internal systems with our vehicle marketplace.",
              readTime: "15 min read"
            },
            {
              title: "City Fleet Management: Streamlining Operations",
              category: "Fleet Management",
              image: "https://placehold.co/600x400",
              snippet: "How a mid-sized city government used our platform to manage their diverse vehicle fleet, reducing administrative overhead by 30%.",
              readTime: "10 min read"
            },
            {
              title: "From Startup to Market Leader: GreenAuto's Story",
              category: "Business Growth",
              image: "https://placehold.co/600x400",
              snippet: "GreenAuto shares how they leveraged our marketplace to establish themselves as a leading electric vehicle retailer in their region.",
              readTime: "14 min read"
            },
            {
              title: "Community Auto Club's Member Engagement Success",
              category: "Community",
              image: "https://placehold.co/600x400",
              snippet: "This local auto enthusiast club used our platform to connect members, organize events, and share vehicle knowledge within their community.",
              readTime: "9 min read"
            }
          ].map((study, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-video bg-muted relative">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Case Study Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-4 w-4 text-primary mr-2" />
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{study.category}</span>
                </div>
                <h3 className="text-lg font-medium mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.snippet}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{study.readTime}</span>
                  <Button variant="outline">Read Case Study</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default CaseStudies;
