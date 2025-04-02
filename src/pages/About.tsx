
import React from 'react';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, Award, Building, Timer, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader variant="default" />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-primary/5 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              About <span className="text-primary">AutoStock</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Leading the automotive inventory revolution since 2015.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2070" 
                alt="AutoStock team collaboration" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Founded in 2015, AutoStock started with a simple mission: to transform how dealerships manage their inventory. What began as a small startup in Toronto has grown into a nationwide leader in automotive inventory management solutions.
              </p>
              <p>
                Our founder, Jane Chen, experienced firsthand the challenges of managing inventory at her family's dealership. Frustrated with outdated systems and inefficient processes, she assembled a team of automotive experts and software engineers to create a better solution.
              </p>
              <p>
                Today, AutoStock serves over 500 dealerships across Canada, helping them streamline operations, improve visibility, and increase sales through our innovative platform. Our commitment to excellence and customer satisfaction remains at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AutoStock</h2>
            <p className="text-xl text-muted-foreground">
              We're more than just software - we're your partner in automotive success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Easy to Use",
                description: "Intuitive interface designed specifically for dealership operations."
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Dedicated Support",
                description: "Our customer success team is always ready to assist you."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Industry Leading",
                description: "Recognized as Canada's #1 inventory management solution."
              },
              {
                icon: <Building className="h-10 w-10 text-primary" />,
                title: "Scalable Solutions",
                description: "Perfect for both single-location dealers and multi-franchise groups."
              },
              {
                icon: <Timer className="h-10 w-10 text-primary" />,
                title: "Time-Saving",
                description: "Automate routine tasks and focus on selling more vehicles."
              },
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: "Canada-Wide",
                description: "Supporting dealerships across all provinces and territories."
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the experts guiding our mission to transform automotive retail.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Jane Chen",
                title: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                bio: "Former dealership manager with a passion for technology and innovation."
              },
              {
                name: "Michael Rodriguez",
                title: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
                bio: "Software engineer with 15+ years experience in automotive tech."
              },
              {
                name: "Sarah Williams",
                title: "VP of Customer Success",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                bio: "Dedicated to ensuring our clients achieve their business goals."
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.title}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Values</h2>
            
            <Tabs defaultValue="innovation" className="w-full">
              <TabsList className="w-full justify-start overflow-auto grid grid-cols-3 p-1 mb-8">
                <TabsTrigger value="innovation" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  Innovation
                </TabsTrigger>
                <TabsTrigger value="integrity" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  Integrity
                </TabsTrigger>
                <TabsTrigger value="customer" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  Customer First
                </TabsTrigger>
              </TabsList>
              
              <Card className="border-0 shadow-md">
                <TabsContent value="innovation" className="mt-0">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                    <p className="mb-4">
                      We believe in constantly pushing the boundaries of what's possible in automotive retail technology. Our dedicated R&D team works tirelessly to bring new features and solutions that keep our clients ahead of the competition.
                    </p>
                    <p>
                      From AI-powered inventory recommendations to advanced market analysis tools, innovation is at the heart of everything we build.
                    </p>
                  </CardContent>
                </TabsContent>
                
                <TabsContent value="integrity" className="mt-0">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
                    <p className="mb-4">
                      We believe in honest, transparent relationships with our clients and partners. We stand behind our product and make promises we can keep.
                    </p>
                    <p>
                      Our pricing is straightforward with no hidden fees, and we're always upfront about what our software can and cannot do. This commitment to integrity has earned us the trust of hundreds of dealerships across Canada.
                    </p>
                  </CardContent>
                </TabsContent>
                
                <TabsContent value="customer" className="mt-0">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold mb-4">Customer First</h3>
                    <p className="mb-4">
                      Our clients' success is our success. We listen carefully to dealer feedback and continuously improve our platform based on real-world needs.
                    </p>
                    <p>
                      Our customer success team doesn't just provide technical support – they partner with dealerships to ensure they're getting maximum value from our platform and achieving their business goals.
                    </p>
                  </CardContent>
                </TabsContent>
              </Card>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
