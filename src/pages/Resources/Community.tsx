
import React from 'react';
import { ArrowLeft, Users, Calendar, User, MessageSquare, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceLayout from './ResourceLayout';

const Community = () => {
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
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className="text-muted-foreground max-w-2xl">Connect with other vehicle enthusiasts, share experiences, and learn from each other</p>
        </div>
        
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold mb-3">Join Our Vehicle Community</h2>
              <p className="text-muted-foreground mb-6">
                Connect with thousands of car enthusiasts, first-time buyers, and experienced owners.
                Share knowledge, get advice, and participate in discussions about all things automotive.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">Join Community</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="flex-shrink-0 relative w-64 h-64 overflow-hidden rounded-xl">
              <div className="absolute -right-16 -top-10 w-40 h-40 rounded-full bg-primary/20 filter blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-blue-500/20 filter blur-2xl"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <Users className="h-24 w-24 text-primary opacity-80" />
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="forums" className="p-6">
            <TabsList className="mb-4">
              <TabsTrigger value="forums" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Discussion Forums
              </TabsTrigger>
              <TabsTrigger value="events" className="gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="leaders" className="gap-2">
                <User className="h-4 w-4" />
                Community Leaders
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="forums" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "New Buyer Discussion",
                    description: "Ask questions and get advice on purchasing your first vehicle.",
                    topics: 234,
                    posts: 1820,
                    latestPost: "2 hours ago"
                  },
                  {
                    title: "Electric Vehicles",
                    description: "Discuss EVs, charging infrastructure, range, and more.",
                    topics: 187,
                    posts: 2103,
                    latestPost: "45 minutes ago",
                    isPopular: true
                  },
                  {
                    title: "Maintenance & Repairs",
                    description: "Share DIY tips and get help with vehicle maintenance issues.",
                    topics: 512,
                    posts: 4731,
                    latestPost: "10 minutes ago",
                    isPopular: true
                  },
                  {
                    title: "Vehicle Financing",
                    description: "Discuss loans, leasing, credit scores, and financing strategies.",
                    topics: 168,
                    posts: 1394,
                    latestPost: "3 hours ago"
                  },
                  {
                    title: "Vehicle Reviews",
                    description: "Read and share real owner reviews of different models.",
                    topics: 302,
                    posts: 2819,
                    latestPost: "30 minutes ago"
                  },
                  {
                    title: "Canadian Driving Laws",
                    description: "Discuss provincial regulations, insurance, and legal matters.",
                    topics: 145,
                    posts: 980,
                    latestPost: "6 hours ago"
                  }
                ].map((forum, index) => (
                  <div key={index} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium">{forum.title}</h3>
                      {forum.isPopular && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Popular</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{forum.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <div>
                        <span className="font-medium text-foreground">{forum.topics}</span> topics
                        <span className="mx-2">•</span>
                        <span className="font-medium text-foreground">{forum.posts}</span> posts
                      </div>
                      <div>
                        Latest: <span className="text-primary">{forum.latestPost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button>View All Forums</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Electric Vehicle Expo",
                    date: "October 15-17, 2023",
                    location: "Vancouver Convention Centre",
                    description: "Explore the latest in electric vehicle technology with test drives, presentations, and exhibits.",
                    attendees: 834,
                    image: "/placeholder.svg"
                  },
                  {
                    title: "Classic Car Show & Swap Meet",
                    date: "September 24-25, 2023",
                    location: "Exhibition Place, Toronto",
                    description: "Canada's largest gathering of classic car enthusiasts featuring hundreds of vintage vehicles.",
                    attendees: 1204,
                    image: "/placeholder.svg",
                    featured: true
                  },
                  {
                    title: "First-Time Buyer Workshop",
                    date: "November 5, 2023",
                    location: "Virtual Event",
                    description: "Learn everything you need to know about purchasing your first vehicle with expert guidance.",
                    attendees: 342,
                    image: "/placeholder.svg"
                  },
                  {
                    title: "Car Maintenance Basics",
                    date: "November 19, 2023",
                    location: "Calgary AutoTech Center",
                    description: "Hands-on workshop covering essential vehicle maintenance skills every owner should know.",
                    attendees: 128,
                    image: "/placeholder.svg"
                  }
                ].map((event, index) => (
                  <div key={index} className={`border rounded-lg overflow-hidden hover:shadow-md transition-shadow ${event.featured ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
                    <div className="aspect-video bg-secondary relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                      {event.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary text-white">Featured Event</Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-medium text-lg mb-1">{event.title}</h3>
                      <div className="flex items-center gap-2 mb-3 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                        <span className="text-muted-foreground">•</span>
                        <span>{event.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">{event.attendees}</span> attending
                        </div>
                        <Button size="sm">RSVP</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="mr-3">View Calendar</Button>
                <Button>All Events</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="leaders" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "EV Specialist",
                    posts: 1824,
                    joined: "Mar 2018",
                    expertise: ["Electric Vehicles", "Charging", "Battery Tech"],
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Michael Chen",
                    role: "Maintenance Guru",
                    posts: 3651,
                    joined: "Jul 2016",
                    expertise: ["DIY Repairs", "Diagnostics", "Tools"],
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Amina Patel",
                    role: "Finance Expert",
                    posts: 962,
                    joined: "Feb 2020",
                    expertise: ["Loans", "Leasing", "Credit Optimization"],
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Robert Wilson",
                    role: "Classic Car Restorer",
                    posts: 2481,
                    joined: "Aug 2017",
                    expertise: ["Vintage Vehicles", "Restoration", "Parts Sourcing"],
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Jessica Moore",
                    role: "New Buyer Advocate",
                    posts: 1125,
                    joined: "Nov 2019",
                    expertise: ["First-Time Buyers", "Test Driving", "Negotiation"],
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "David Kim",
                    role: "Moderator",
                    posts: 1892,
                    joined: "Oct 2017",
                    expertise: ["Community Guidelines", "Forum Support", "Events"],
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Emma Tremblay",
                    role: "Insurance Specialist",
                    posts: 873,
                    joined: "Apr 2020",
                    expertise: ["Insurance", "Claims", "Policy Selection"],
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Omar Hassan",
                    role: "Performance Tuning Expert",
                    posts: 2103,
                    joined: "Sep 2018",
                    expertise: ["Modifications", "Performance", "Tuning"],
                    avatar: "/placeholder.svg"
                  }
                ].map((leader, index) => (
                  <div key={index} className="border rounded-lg p-5 text-center hover:shadow-md transition-shadow bg-white">
                    <div className="mb-3 flex justify-center">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={leader.avatar} alt={leader.name} />
                        <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="font-medium">{leader.name}</h3>
                    <div className="text-sm text-primary mb-2">{leader.role}</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      <span className="font-medium text-foreground">{leader.posts}</span> posts
                      <span className="mx-1">•</span>
                      Joined {leader.joined}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center mb-3">
                      {leader.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-secondary/50">{skill}</Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full">View Profile</Button>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-secondary/30 rounded-xl p-6 border">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Megaphone className="h-5 w-5 text-primary" />
                      Become a Community Leader
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Share your automotive expertise and help others by becoming a community leader.
                      Leaders get special recognition, early access to features, and exclusive benefits.
                    </p>
                    <Button>Apply Now</Button>
                  </div>
                  <div className="md:w-1/3 bg-white rounded-lg p-4 border">
                    <h4 className="font-medium mb-2">Requirements</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">1</div>
                        <span>Active member for at least 3 months</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">2</div>
                        <span>Minimum 50 quality posts or replies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">3</div>
                        <span>Demonstrated expertise in one or more automotive areas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default Community;
