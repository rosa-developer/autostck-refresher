
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResourceLayout from './ResourceLayout';

const GuidesArticles = () => {
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
          <h1 className="text-3xl font-bold mb-2">Guides & Articles</h1>
          <p className="text-muted-foreground">Comprehensive resources to help you make informed decisions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Ultimate Guide to Vehicle Financing",
              description: "Learn about different financing options, interest rates, and how to secure the best deal for your budget.",
              estimatedReadTime: "15 min read"
            },
            {
              title: "New vs. Used: Making the Right Choice",
              description: "Compare the pros and cons of buying new versus used vehicles to determine which option best suits your needs.",
              estimatedReadTime: "12 min read"
            },
            {
              title: "Understanding Vehicle Depreciation",
              description: "Discover how vehicles lose value over time and strategies to minimize depreciation impact on your investment.",
              estimatedReadTime: "10 min read"
            },
            {
              title: "The Complete Guide to Electric Vehicles",
              description: "Everything you need to know about EVs, from charging infrastructure to cost of ownership and environmental benefits.",
              estimatedReadTime: "18 min read"
            },
            {
              title: "Negotiation Tactics for Vehicle Purchasing",
              description: "Master the art of negotiation with dealers to get the best possible price on your next vehicle purchase.",
              estimatedReadTime: "14 min read"
            },
            {
              title: "Understanding Vehicle History Reports",
              description: "Learn how to read and interpret vehicle history reports to avoid potential problems with used vehicles.",
              estimatedReadTime: "8 min read"
            },
            {
              title: "Seasonal Maintenance Guide",
              description: "Keep your vehicle in top condition year-round with these seasonal maintenance tips and checklists.",
              estimatedReadTime: "11 min read"
            },
            {
              title: "Insurance Options Explained",
              description: "Navigate the complex world of auto insurance to find the right coverage at the best price for your situation.",
              estimatedReadTime: "13 min read"
            }
          ].map((article, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{article.estimatedReadTime}</span>
                <Button variant="outline" asChild>
                  <Link to={`/resources/guides/${index + 1}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default GuidesArticles;
