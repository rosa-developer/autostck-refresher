
import React from 'react';
import { ArrowLeft, Video, Calendar, Clock, UserRound, ExternalLink, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <p className="text-muted-foreground max-w-2xl">Live and recorded educational sessions to help you navigate vehicle purchasing in Canada</p>
        </div>
        
        {/* Featured Upcoming Webinar */}
        <div className="bg-white rounded-xl border shadow-md overflow-hidden mb-10">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-primary/10 to-blue-500/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <Badge className="mb-4 bg-primary text-white">Featured Webinar</Badge>
                <h2 className="text-2xl font-bold mb-6">Electric Vehicle Ownership in Canada: Comprehensive Guide</h2>
                <div className="inline-flex items-center justify-center space-x-3 text-sm mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5 text-primary" />
                    <span>Sept 28, 2023</span>
                  </div>
                  <div className="h-1 w-1 rounded-full bg-primary/50"></div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5 text-primary" />
                    <span>1:00 PM EST</span>
                  </div>
                </div>
                <Button size="lg" className="gap-2">
                  Reserve Your Spot
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="font-medium mb-4">What You'll Learn:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">1</div>
                  <span>Complete breakdown of EV costs including purchase, charging, and maintenance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">2</div>
                  <span>Overview of Canadian charging infrastructure and home charging options</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">3</div>
                  <span>Federal and provincial incentive programs and tax credits</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 flex-shrink-0 text-xs font-medium">4</div>
                  <span>Real experience from current EV owners in different Canadian regions</span>
                </li>
              </ul>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary mr-3 overflow-hidden">
                  <img src="/placeholder.svg" alt="Speaker" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">Dr. Emily Chen</div>
                  <div className="text-sm text-muted-foreground">EV Policy Researcher, University of Toronto</div>
                </div>
              </div>
              <div className="bg-secondary/30 rounded-lg p-3 text-sm flex items-center">
                <Bell className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span>All registrants will receive a recording even if they can't attend live</span>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="upcoming" className="mb-10">
          <TabsList className="w-full md:w-auto mb-6 justify-start">
            <TabsTrigger value="upcoming" className="gap-2">
              <Calendar className="h-4 w-4" />
              Upcoming Webinars
            </TabsTrigger>
            <TabsTrigger value="recorded" className="gap-2">
              <Video className="h-4 w-4" />
              Recorded Sessions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Financing vs. Leasing: Making the Right Choice",
                  date: "October 5, 2023",
                  time: "2:00 PM EST",
                  duration: "60 min",
                  speaker: "Mark Thompson",
                  role: "Automotive Finance Consultant",
                  category: "Financing"
                },
                {
                  title: "How to Inspect a Used Vehicle Like a Pro",
                  date: "October 12, 2023",
                  time: "12:00 PM EST",
                  duration: "90 min",
                  speaker: "Carlos Rodriguez",
                  role: "Master Mechanic",
                  category: "Used Vehicles"
                },
                {
                  title: "Understanding Vehicle Insurance in Canada",
                  date: "October 19, 2023",
                  time: "3:30 PM EST",
                  duration: "60 min",
                  speaker: "Jennifer Lee",
                  role: "Insurance Specialist",
                  category: "Insurance"
                },
                {
                  title: "Advanced Negotiation Tactics for Car Buying",
                  date: "October 26, 2023",
                  time: "1:00 PM EST",
                  duration: "75 min",
                  speaker: "David Wilson",
                  role: "Former Dealership Manager",
                  category: "Negotiation"
                }
              ].map((webinar, index) => (
                <div key={index} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{webinar.category}</Badge>
                    <h3 className="text-lg font-medium mb-3">{webinar.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm mb-5">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1.5 text-primary" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1.5 text-primary" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Video className="h-4 w-4 mr-1.5 text-primary" />
                        <span>{webinar.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-5">
                      <div className="w-8 h-8 rounded-full bg-secondary mr-3 overflow-hidden">
                        <img src="/placeholder.svg" alt={webinar.speaker} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{webinar.speaker}</div>
                        <div className="text-xs text-muted-foreground">{webinar.role}</div>
                      </div>
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" className="gap-2">
                View Full Calendar
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="recorded" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Essential Guide to Financing Your First Vehicle",
                  date: "August 15, 2023",
                  duration: "58 min",
                  views: 1872,
                  category: "Financing"
                },
                {
                  title: "The Future of Electric Vehicles in Canada",
                  date: "July 28, 2023",
                  duration: "65 min",
                  views: 2304,
                  category: "Electric Vehicles",
                  popular: true
                },
                {
                  title: "Understanding Vehicle Depreciation",
                  date: "July 12, 2023",
                  duration: "45 min",
                  views: 1165,
                  category: "Value"
                },
                {
                  title: "Winter Driving Safety and Maintenance",
                  date: "June 30, 2023",
                  duration: "72 min",
                  views: 1690,
                  category: "Maintenance"
                },
                {
                  title: "How to Read and Understand Vehicle History Reports",
                  date: "June 15, 2023",
                  duration: "38 min",
                  views: 2156,
                  category: "Used Vehicles",
                  popular: true
                },
                {
                  title: "SUV vs. Sedan: Which is Right for You?",
                  date: "May 30, 2023",
                  duration: "52 min",
                  views: 1348,
                  category: "Vehicle Selection"
                }
              ].map((webinar, index) => (
                <div key={index} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-secondary relative">
                    <img src="/placeholder.svg" alt={webinar.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-black/60 flex items-center justify-center">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {webinar.duration}
                    </div>
                    {webinar.popular && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary text-white">Popular</Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">{webinar.category}</Badge>
                    <h3 className="font-medium mb-2">{webinar.title}</h3>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <div>Recorded: {webinar.date}</div>
                      <div>{webinar.views.toLocaleString()} views</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button>View All Recordings</Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl border p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Suggest a Topic?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for new webinar ideas that would help Canadian vehicle buyers.
              Let us know what topics you'd like to see covered in future sessions.
            </p>
            <Button variant="outline" size="lg" className="bg-white hover:bg-white/80">Suggest a Topic</Button>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default Webinars;
