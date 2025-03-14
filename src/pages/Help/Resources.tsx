
import React from 'react';
import { Book, FileText, Users, Video, FileCode, BookOpen, Presentation, Building } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ResourceCard = ({ 
  icon, 
  title, 
  links, 
  buttonPath, 
  buttonText = "View All",
  isNew = false
}) => (
  <div className="border rounded-xl p-6 bg-white/50 hover:bg-white/80 transition-colors shadow-sm hover:shadow-md">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      {isNew && (
        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">New</Badge>
      )}
    </div>
    <ul className="space-y-3 mb-5">
      {links.map((link, i) => (
        <li key={i} className="flex items-center">
          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
          <Link to={link.path} className="text-primary hover:underline text-sm">{link.text}</Link>
        </li>
      ))}
    </ul>
    <div>
      <Button asChild variant="outline" className="w-full justify-center gap-2 hover:bg-primary hover:text-white transition-colors">
        <Link to={buttonPath}>
          {buttonText}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
            <path d="M7.5 3L11.5 7L7.5 11M11 7H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </Button>
    </div>
  </div>
);

const Resources = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResourceCard
        icon={<Book className="h-5 w-5 text-primary" />}
        title="Guides & Articles"
        links={[
          { text: "Ultimate Guide to Vehicle Financing", path: "/resources/guides" },
          { text: "New vs. Used: Making the Right Choice", path: "/resources/guides" },
          { text: "Understanding Vehicle Depreciation", path: "/resources/guides" },
          { text: "The Complete Guide to Electric Vehicles", path: "/resources/guides" },
        ]}
        buttonPath="/resources/guides"
      />
      
      <ResourceCard
        icon={<FileText className="h-5 w-5 text-primary" />}
        title="Downloads & Checklists"
        links={[
          { text: "Pre-Purchase Inspection Checklist (PDF)", path: "/resources/downloads" },
          { text: "Vehicle Comparison Worksheet (Excel)", path: "/resources/downloads" },
          { text: "Budget Planning Calculator (Excel)", path: "/resources/downloads" },
          { text: "Private Sale Documentation Kit (ZIP)", path: "/resources/downloads" },
        ]}
        buttonPath="/resources/downloads"
      />
      
      <ResourceCard
        icon={<BookOpen className="h-5 w-5 text-primary" />}
        title="Documentation"
        links={[
          { text: "Vehicle Owner's Manuals", path: "/resources/documentation" },
          { text: "Technical Specifications", path: "/resources/documentation" },
          { text: "Service Bulletins", path: "/resources/documentation" },
          { text: "Wiring Diagrams", path: "/resources/documentation" },
        ]}
        buttonPath="/resources/documentation"
      />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResourceCard
        icon={<Video className="h-5 w-5 text-primary" />}
        title="Video Tutorials"
        links={[
          { text: "How to Inspect a Used Vehicle", path: "/resources/videos" },
          { text: "Understanding Vehicle Financing", path: "/resources/videos" },
          { text: "Test Drive Best Practices", path: "/resources/videos" },
          { text: "Negotiating with Confidence", path: "/resources/videos" },
        ]}
        buttonPath="/resources/videos"
        isNew={true}
      />
      
      <ResourceCard
        icon={<Users className="h-5 w-5 text-primary" />}
        title="Community"
        links={[
          { text: "Discussion Forums", path: "/resources/community" },
          { text: "Owner Groups", path: "/resources/community" },
          { text: "Upcoming Meetups", path: "/resources/community" },
          { text: "Community Leaders", path: "/resources/community" },
        ]}
        buttonPath="/resources/community"
      />
      
      <ResourceCard
        icon={<FileCode className="h-5 w-5 text-primary" />}
        title="API Reference"
        links={[
          { text: "Getting Started with the API", path: "/resources/api-reference" },
          { text: "Authentication Methods", path: "/resources/api-reference" },
          { text: "Endpoints Documentation", path: "/resources/api-reference" },
          { text: "Rate Limiting Information", path: "/resources/api-reference" },
        ]}
        buttonPath="/resources/api-reference"
      />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResourceCard
        icon={<Presentation className="h-5 w-5 text-primary" />}
        title="Webinars"
        links={[
          { text: "Upcoming Webinar Schedule", path: "/resources/webinars" },
          { text: "Webinar Recordings Archive", path: "/resources/webinars" },
          { text: "Expert Panel Discussions", path: "/resources/webinars" },
          { text: "Interactive Q&A Sessions", path: "/resources/webinars" },
        ]}
        buttonPath="/resources/webinars"
      />
      
      <ResourceCard
        icon={<Building className="h-5 w-5 text-primary" />}
        title="Partners"
        links={[
          { text: "Dealership Partners", path: "/resources/partners" },
          { text: "Financial Services", path: "/resources/partners" },
          { text: "Insurance Providers", path: "/resources/partners" },
          { text: "Maintenance Services", path: "/resources/partners" },
        ]}
        buttonPath="/resources/partners"
      />
      
      <div className="border rounded-xl p-6 bg-gradient-to-br from-primary/5 to-blue-500/10 shadow-sm hover:shadow-md transition-all">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 mb-4 border">
          <h3 className="text-lg font-medium mb-2">Need more help?</h3>
          <p className="text-sm text-muted-foreground mb-4">Our support team is available to assist you with any questions about vehicle purchasing in Canada.</p>
          <Button asChild className="w-full justify-center">
            <Link to="/help/contact">Contact Support</Link>
          </Button>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border">
          <h3 className="text-lg font-medium mb-2">Case Studies</h3>
          <p className="text-sm text-muted-foreground mb-4">Read success stories from buyers who found their perfect vehicle.</p>
          <Button asChild variant="outline" className="w-full justify-center">
            <Link to="/resources/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Resources;
