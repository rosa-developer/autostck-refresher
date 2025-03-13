
import React from 'react';
import { ArrowLeft, Video, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceLayout from './ResourceLayout';

const Webinars = () => {
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
          <h1 className="text-3xl font-bold mb-2">Webinars</h1>
          <p className="text-muted-foreground">Live and recorded educational sessions to enhance your platform experience</p>
        </div>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 mb-6">
            <TabsTrigger value="upcoming">Upcoming Webinars</TabsTrigger>
            <TabsTrigger value="recorded">Recorded Sessions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-6">
            <div className="flex flex-col space-y-6">
              {[
                {
                  title: "Maximizing Your Listing's Visibility",
                  date: "June 15, 2023",
                  time: "2:00 PM - 3:30 PM EDT",
                  presenter: "Alex Johnson, Marketing Director",
                  description: "Learn proven strategies to make your vehicle listings stand out in a crowded marketplace and attract more potential buyers."
                },
                {
                  title: "Advanced Search Techniques for Buyers",
                  date: "June 22, 2023",
                  time: "1:00 PM - 2:00 PM EDT",
                  presenter: "Maria Garcia, User Experience Specialist",
                  description: "Discover how to use our advanced search features to find exactly the vehicle you're looking for, faster and more efficiently."
                },
                {
                  title: "Leveraging Data Analytics for Dealerships",
                  date: "July 5, 2023",
                  time: "11:00 AM - 12:30 PM EDT",
                  presenter: "David Park, Business Intelligence Manager",
                  description: "See how dealerships can use our analytics tools to make data-driven decisions about inventory, pricing, and marketing."
                }
              ].map((webinar, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-medium">{webinar.title}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{webinar.date} • {webinar.time}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{webinar.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-sm">
                      Presenter: <span className="font-medium">{webinar.presenter}</span>
                    </div>
                    <Button>Register Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recorded" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Introduction to Our Platform",
                  duration: "45 minutes",
                  date: "May 10, 2023",
                  views: "1.2K",
                  presenter: "Thomas Wilson"
                },
                {
                  title: "Photography Tips for Vehicle Listings",
                  duration: "38 minutes",
                  date: "April 22, 2023",
                  views: "3.5K",
                  presenter: "Jennifer Lee"
                },
                {
                  title: "Negotiation Strategies for Buyers",
                  duration: "52 minutes",
                  date: "April 5, 2023",
                  views: "2.8K",
                  presenter: "Robert Chen"
                },
                {
                  title: "Understanding Vehicle History Reports",
                  duration: "41 minutes",
                  date: "March 15, 2023",
                  views: "4.2K",
                  presenter: "Samantha Wright"
                },
                {
                  title: "API Integration for Developers",
                  duration: "65 minutes",
                  date: "March 3, 2023",
                  views: "1.9K",
                  presenter: "Michael Stevens"
                },
                {
                  title: "Optimizing Dealer Inventory Management",
                  duration: "49 minutes",
                  date: "February 18, 2023",
                  views: "2.3K",
                  presenter: "Nicole Anderson"
                }
              ].map((webinar, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-video bg-secondary relative rounded-md overflow-hidden mb-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{webinar.title}</h4>
                  <div className="flex justify-between">
                    <p className="text-xs text-muted-foreground">{webinar.presenter}</p>
                    <p className="text-xs text-muted-foreground">{webinar.duration}</p>
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-muted-foreground">{webinar.date}</p>
                    <p className="text-xs text-muted-foreground">{webinar.views} views</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ResourceLayout>
  );
};

export default Webinars;
