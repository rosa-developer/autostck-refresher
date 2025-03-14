
import React from 'react';
import { Book, FileText, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Resources = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-6">
        <Book className="h-6 w-6 text-primary mb-4" />
        <h3 className="text-lg font-medium mb-2">Guides & Articles</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/guides" className="text-primary hover:underline">Ultimate Guide to Vehicle Financing</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/guides" className="text-primary hover:underline">New vs. Used: Making the Right Choice</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/guides" className="text-primary hover:underline">Understanding Vehicle Depreciation</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/guides" className="text-primary hover:underline">The Complete Guide to Electric Vehicles</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/guides" className="text-primary hover:underline">Negotiation Tactics for Vehicle Purchasing</Link>
          </li>
        </ul>
        <div className="mt-4">
          <Button asChild>
            <Link to="/resources/guides">View All Guides</Link>
          </Button>
        </div>
      </div>
      
      <div className="border rounded-lg p-6">
        <FileText className="h-6 w-6 text-primary mb-4" />
        <h3 className="text-lg font-medium mb-2">Downloads & Checklists</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/downloads" className="text-primary hover:underline">Pre-Purchase Inspection Checklist (PDF)</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/downloads" className="text-primary hover:underline">Vehicle Comparison Worksheet (Excel)</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/downloads" className="text-primary hover:underline">Budget Planning Calculator (Excel)</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/downloads" className="text-primary hover:underline">Private Sale Documentation Kit (ZIP)</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/downloads" className="text-primary hover:underline">Maintenance Schedule Templates (PDF)</Link>
          </li>
        </ul>
        <div className="mt-4">
          <Button asChild>
            <Link to="/resources/downloads">View All Downloads</Link>
          </Button>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Video Tutorials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "How to Inspect a Used Vehicle", duration: "8:24" },
            { title: "Understanding Vehicle Financing", duration: "12:15" },
            { title: "Test Drive Best Practices", duration: "6:42" },
            { title: "Negotiating with Confidence", duration: "10:37" },
          ].map((video, index) => (
            <Link to="/resources/videos" key={index} className="group cursor-pointer">
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
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Button asChild>
            <Link to="/resources/videos">View All Videos</Link>
          </Button>
        </div>
      </div>
      
      <div className="border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Additional Resources</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/documentation" className="text-primary hover:underline">Vehicle Technical Documentation</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/help-center" className="text-primary hover:underline">FAQ & Help Center</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/community" className="text-primary hover:underline">Community Forums</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/case-studies" className="text-primary hover:underline">Customer Case Studies</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/resources/api-reference" className="text-primary hover:underline">API Reference</Link>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <Link to="/help" className="text-primary hover:underline">Contact Support</Link>
          </li>
        </ul>
        <div className="mt-6">
          <p className="text-sm text-muted-foreground mb-4">Need personalized assistance? Our team is ready to help you with any questions.</p>
          <Button variant="outline" asChild className="w-full">
            <Link to="/help">Visit Help Center</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Resources;
