
import React from 'react';
import { Book, FileText } from "lucide-react";

const Resources = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-6">
        <Book className="h-6 w-6 text-primary mb-4" />
        <h3 className="text-lg font-medium mb-2">Guides & Articles</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Ultimate Guide to Vehicle Financing</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">New vs. Used: Making the Right Choice</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Understanding Vehicle Depreciation</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">The Complete Guide to Electric Vehicles</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Negotiation Tactics for Vehicle Purchasing</a>
          </li>
        </ul>
      </div>
      
      <div className="border rounded-lg p-6">
        <FileText className="h-6 w-6 text-primary mb-4" />
        <h3 className="text-lg font-medium mb-2">Downloads & Checklists</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Pre-Purchase Inspection Checklist (PDF)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Vehicle Comparison Worksheet (Excel)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Budget Planning Calculator (Excel)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Private Sale Documentation Kit (ZIP)</a>
          </li>
          <li className="flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
            <a href="#" className="text-primary hover:underline">Maintenance Schedule Templates (PDF)</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="border rounded-lg p-6">
      <h3 className="text-lg font-medium mb-4">Video Tutorials</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { title: "How to Inspect a Used Vehicle", duration: "8:24" },
          { title: "Understanding Vehicle Financing", duration: "12:15" },
          { title: "Test Drive Best Practices", duration: "6:42" },
          { title: "Negotiating with Confidence", duration: "10:37" },
          { title: "Decoding the Vehicle History Report", duration: "7:19" },
          { title: "Red Flags to Watch For", duration: "9:05" }
        ].map((video, index) => (
          <div key={index} className="group cursor-pointer">
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
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Resources;
