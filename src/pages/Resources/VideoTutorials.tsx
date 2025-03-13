
import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResourceLayout from './ResourceLayout';

const VideoTutorials = () => {
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
          <h1 className="text-3xl font-bold mb-2">Video Tutorials</h1>
          <p className="text-muted-foreground">Visual guides to help you through every step of your vehicle journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "How to Inspect a Used Vehicle", duration: "8:24", views: "24.5K" },
            { title: "Understanding Vehicle Financing", duration: "12:15", views: "18.2K" },
            { title: "Test Drive Best Practices", duration: "6:42", views: "32.1K" },
            { title: "Negotiating with Confidence", duration: "10:37", views: "15.8K" },
            { title: "Decoding the Vehicle History Report", duration: "7:19", views: "22.3K" },
            { title: "Red Flags to Watch For", duration: "9:05", views: "29.7K" },
            { title: "Maintenance Tips for New Owners", duration: "11:28", views: "17.6K" },
            { title: "Understanding Warranties", duration: "8:53", views: "14.9K" },
            { title: "The Art of Negotiating Trade-Ins", duration: "13:42", views: "20.5K" }
          ].map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video bg-secondary relative rounded-md overflow-hidden mb-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{video.title}</h4>
              <div className="flex justify-between">
                <p className="text-xs text-muted-foreground">{video.duration}</p>
                <p className="text-xs text-muted-foreground">{video.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResourceLayout>
  );
};

export default VideoTutorials;
