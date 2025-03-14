
import React from 'react';
import { ArrowLeft, Quote, ChevronRight, ThumbsUp, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
          <h1 className="text-3xl font-bold mb-2">Case Studies</h1>
          <p className="text-muted-foreground max-w-2xl">Real stories from Canadian vehicle buyers sharing their experiences and insights</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Featured Case Study */}
          <div className="bg-white rounded-xl border shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-secondary">
                <img 
                  src="/placeholder.svg"
                  alt="Feature case study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary text-white">Featured</Badge>
                  <Badge variant="outline">Electric Vehicle</Badge>
                </div>
                <h2 className="text-2xl font-bold mb-2">From Gas to Electric: My First Year with an EV</h2>
                <p className="text-muted-foreground mb-4">
                  Sarah's journey switching from a traditional gasoline vehicle to an electric car, 
                  including charging infrastructure challenges, cost savings, and lifestyle adjustments.
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-5">
                  <User className="h-4 w-4 mr-1" />
                  <span>Sarah Johnson</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>12 min read</span>
                  <span className="mx-2">•</span>
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>243 found helpful</span>
                </div>
                <Button className="gap-2">
                  Read Case Study
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Financing a Luxury Vehicle on a Budget",
                category: "Financing",
                author: "Michael Chen",
                readTime: "8 min",
                helpfulCount: 187,
                excerpt: "How I managed to purchase a premium vehicle by being strategic with financing options and timing."
              },
              {
                title: "My Experience with Vehicle Subscription",
                category: "Alternative Ownership",
                author: "Emma Tremblay",
                readTime: "6 min",
                helpfulCount: 132,
                excerpt: "Comparing traditional ownership with a flexible vehicle subscription program - pros, cons, and costs."
              },
              {
                title: "Navigating a Private Sale as a First-time Buyer",
                category: "Private Purchase",
                author: "Raj Patel",
                readTime: "10 min",
                helpfulCount: 215,
                excerpt: "A step-by-step account of buying my first car from a private seller - paperwork, inspection, and negotiation."
              },
              {
                title: "Three Years with a Hybrid SUV: The Real Costs",
                category: "Hybrid Vehicle",
                author: "Jessica Moore",
                readTime: "9 min",
                helpfulCount: 176,
                excerpt: "A detailed breakdown of purchase price, fuel savings, maintenance costs, and resale value of my hybrid SUV."
              },
              {
                title: "Leasing vs. Buying: My Experience with Both",
                category: "Financing",
                author: "David Kim",
                readTime: "7 min",
                helpfulCount: 203,
                excerpt: "After trying both financing options, here's my comparison of the true advantages and disadvantages of each."
              },
              {
                title: "Building Good Credit Through Auto Financing",
                category: "Credit Building",
                author: "Amina Hassan",
                readTime: "5 min",
                helpfulCount: 164,
                excerpt: "How I used a vehicle loan to establish and improve my credit score as a new Canadian."
              }
            ].map((study, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white h-full flex flex-col">
                <div className="h-48 bg-secondary">
                  <img src="/placeholder.svg" alt={study.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <Badge variant="outline" className="w-fit mb-2">{study.category}</Badge>
                  <h3 className="font-medium text-lg mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{study.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-3.5 w-3.5 mr-1" />
                      <span>{study.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>{study.readTime} read</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                      <span>{study.helpfulCount}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full justify-center gap-1">
                    Read More
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial */}
          <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl border p-8 mt-4">
            <div className="max-w-3xl mx-auto">
              <Quote className="h-10 w-10 text-primary/40 mb-4" />
              <blockquote className="text-xl font-medium italic mb-6">
                "Reading these case studies gave me the confidence to negotiate my first car purchase. 
                The practical experiences shared by real buyers helped me avoid common pitfalls and save nearly $3,000."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full mr-4">
                  <img src="/placeholder.svg" alt="Testimonial avatar" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <div className="font-medium">Thomas Wilson</div>
                  <div className="text-sm text-muted-foreground">First-time buyer, Ottawa</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Your Story */}
          <div className="bg-white rounded-xl border shadow-sm p-6 md:p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Share Your Vehicle Buying Experience</h2>
              <p className="text-muted-foreground mb-6">
                Help other Canadian buyers by sharing your vehicle purchasing journey. 
                Selected stories will be featured on our site and may qualify for incentives.
              </p>
              <Button size="lg">Submit Your Story</Button>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default CaseStudies;
