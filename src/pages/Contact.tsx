
import React, { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form and show success state
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    
    // Reset form state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader variant="default" />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary/10 to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Our friendly team is always here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 -mt-12 relative z-20">
        <div className="container px-4 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                title: "Our Location",
                description: "1234 Stock Avenue, Suite 500, Toronto, ON M5V 2A1",
                link: "https://maps.google.com",
                linkText: "Get Directions"
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Phone",
                description: "+1 (555) 123-4567",
                link: "tel:+15551234567",
                linkText: "Call Us"
              },
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email",
                description: "contact@autostock.com",
                link: "mailto:contact@autostock.com",
                linkText: "Send Email"
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Business Hours",
                description: "Mon-Fri: 9AM - 5PM EST",
                link: null,
                linkText: null
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-4">{item.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      className="text-primary hover:underline text-sm font-medium"
                      target={item.link.startsWith('http') ? "_blank" : undefined}
                      rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {item.linkText}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="bg-green-100 rounded-full p-4 mb-4">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          required 
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          placeholder="(555) 123-4567" 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          placeholder="Company Inc." 
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="How can we help you?" 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
            
            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1962342044985!2d-79.38923522346857!3d43.64296465116868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7b66a1af7%3A0xb1f5ac024726a5e!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1689201718565!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AutoStock Office Location"
                ></iframe>
              </div>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Immediate Support?</h3>
                  <p className="text-muted-foreground mb-6">
                    For urgent assistance, please call our customer support team directly at 
                    <a href="tel:+15551234567" className="text-primary font-medium ml-1">
                      +1 (555) 123-4567
                    </a>.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="mr-2" />
                      Call Support
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      <Mail className="mr-2" />
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions about AutoStock.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I get started with AutoStock?",
                  answer: "Most dealerships can be up and running with AutoStock in just 24-48 hours. Our onboarding team will guide you through the entire setup process, including data migration and staff training."
                },
                {
                  question: "Is AutoStock compatible with my DMS?",
                  answer: "Yes! AutoStock integrates with all major Dealer Management Systems in Canada, including CDK, Reynolds & Reynolds, Dealertrack, and more."
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "We provide comprehensive support including phone, email, and live chat during business hours. Emergency support is available 24/7 for critical issues."
                },
                {
                  question: "Can I cancel my subscription at any time?",
                  answer: "Absolutely. While we offer discounted rates for annual commitments, we also provide month-to-month options with no long-term contracts required."
                },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
