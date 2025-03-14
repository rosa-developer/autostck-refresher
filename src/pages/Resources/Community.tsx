
import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
          <p className="text-muted-foreground">Connect with other users, share insights, and grow together</p>
        </div>
        
        {/* Community Forums Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Discussion Forums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "New User Introductions",
                description: "Introduce yourself to the community and connect with other users",
                postCount: 1243,
                icon: "👋"
              },
              {
                title: "General Discussions",
                description: "Talk about automotive topics, industry news, and marketplace trends",
                postCount: 3547,
                icon: "💬"
              },
              {
                title: "Buying Advice",
                description: "Get recommendations and feedback on potential purchases",
                postCount: 2865,
                icon: "🔍"
              },
              {
                title: "Selling Tips",
                description: "Learn how to maximize your vehicle's value and attract buyers",
                postCount: 1984,
                icon: "📈"
              },
              {
                title: "Technical Support",
                description: "Get help with platform-related issues from our community",
                postCount: 4123,
                icon: "🛠️"
              },
              {
                title: "Feature Requests",
                description: "Suggest improvements and vote on ideas from other users",
                postCount: 876,
                icon: "💡"
              }
            ].map((forum, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">{forum.icon}</div>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {forum.postCount} posts
                  </span>
                </div>
                <h3 className="text-lg font-medium mb-2">{forum.title}</h3>
                <p className="text-muted-foreground mb-4">{forum.description}</p>
                <Button variant="outline" className="w-full">View Forum</Button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Community Events Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Upcoming Community Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Virtual Meetup: Electric Vehicle Owners",
                date: "June 15, 2023",
                time: "7:00 PM EST",
                attendees: 126,
                location: "Online (Zoom)"
              },
              {
                title: "Classic Car Showcase Weekend",
                date: "July 8-9, 2023",
                time: "10:00 AM - 6:00 PM",
                attendees: 324,
                location: "Toronto Convention Center"
              },
              {
                title: "New User Orientation Webinar",
                date: "June 22, 2023",
                time: "1:00 PM EST",
                attendees: 78,
                location: "Online (Zoom)"
              },
              {
                title: "Summer Automotive Networking Mixer",
                date: "July 28, 2023",
                time: "6:30 PM - 9:00 PM",
                attendees: 210,
                location: "Vancouver Waterfront Hotel"
              }
            ].map((event, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-all">
                <h3 className="text-lg font-medium mb-2">{event.title}</h3>
                <div className="mb-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <span className="font-medium text-foreground mr-2">Date:</span>
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <span className="font-medium text-foreground mr-2">Time:</span>
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <span className="font-medium text-foreground mr-2">Location:</span>
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium text-foreground mr-2">Attendees:</span>
                    {event.attendees} registered
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1">Register</Button>
                  <Button variant="outline" className="flex-1">Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Community Leaders Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Community Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Forum Moderator",
                expertise: "Electric Vehicles",
                avatar: "https://placehold.co/100x100"
              },
              {
                name: "Michael Chen",
                role: "Technical Expert",
                expertise: "Classic Cars",
                avatar: "https://placehold.co/100x100"
              },
              {
                name: "Priya Patel",
                role: "Community Manager",
                expertise: "Marketplace Dynamics",
                avatar: "https://placehold.co/100x100"
              },
              {
                name: "David Wilson",
                role: "Events Coordinator",
                expertise: "SUVs & Trucks",
                avatar: "https://placehold.co/100x100"
              }
            ].map((leader, index) => (
              <div key={index} className="border rounded-lg p-6 text-center hover:shadow-md transition-all">
                <div className="h-20 w-20 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                  {/* This would be an actual image in production */}
                  <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                    Avatar
                  </div>
                </div>
                <h3 className="font-medium mb-1">{leader.name}</h3>
                <p className="text-sm text-primary mb-1">{leader.role}</p>
                <p className="text-xs text-muted-foreground mb-4">Expert in {leader.expertise}</p>
                <Button variant="outline" size="sm" className="w-full">View Profile</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default Community;
