
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const GetStarted = () => {
  const [step, setStep] = useState<number>(1);
  
  const steps = [
    { id: 1, title: "Create an account" },
    { id: 2, title: "Set up your inventory" },
    { id: 3, title: "Import your data" },
    { id: 4, title: "Invite your team" }
  ];

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with AutoStock</h1>
            <p className="text-xl text-muted-foreground">
              Follow these simple steps to set up your inventory management system.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center">
              {steps.map((s) => (
                <div 
                  key={s.id} 
                  className={cn(
                    "relative flex flex-col items-center",
                    "animate-fade-in",
                    { "animation-delay-100": s.id === 1 },
                    { "animation-delay-200": s.id === 2 },
                    { "animation-delay-300": s.id === 3 },
                    { "animation-delay-400": s.id === 4 }
                  )}
                >
                  <div 
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 transition-colors",
                      step === s.id && "bg-primary/10 border-primary text-primary",
                      step > s.id && "bg-primary border-primary text-white",
                      step < s.id && "bg-background border-border text-muted-foreground"
                    )}
                  >
                    {step > s.id ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <span>{s.id}</span>
                    )}
                  </div>
                  <span 
                    className={cn(
                      "text-sm font-medium hidden md:block",
                      step >= s.id && "text-foreground",
                      step < s.id && "text-muted-foreground"
                    )}
                  >
                    {s.title}
                  </span>
                  
                  {/* Connector line between steps */}
                  {s.id < steps.length && (
                    <div 
                      className={cn(
                        "absolute top-6 w-[calc(100%-3rem)] h-[2px] left-[calc(50%+1.5rem)]",
                        step > s.id ? "bg-primary" : "bg-border"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="md:hidden mt-4 flex justify-center">
              <span className="text-base font-medium">{steps[step-1].title}</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "glass rounded-xl p-8 md:p-12 mb-8 animate-fade-in",
              "shadow-lg"
            )}>
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Create your account</h2>
                  <p className="text-muted-foreground">
                    Start by setting up your AutoStock account with a few simple details.
                  </p>
                  <form className="space-y-4 max-w-md">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background" 
                        placeholder="you@example.com" 
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                      <input 
                        type="password" 
                        id="password" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background" 
                        placeholder="••••••••" 
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background" 
                        placeholder="Your Company" 
                      />
                    </div>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Set up your inventory</h2>
                  <p className="text-muted-foreground">
                    Configure your inventory settings to match your business needs.
                  </p>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium mb-1">Industry</label>
                      <select 
                        id="industry" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background"
                      >
                        <option value="">Select your industry</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="locations" className="block text-sm font-medium mb-1">Number of Locations</label>
                      <input 
                        type="number" 
                        id="locations" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background" 
                        placeholder="1" 
                        min="1"
                      />
                    </div>
                    <div>
                      <label htmlFor="items" className="block text-sm font-medium mb-1">Estimated Inventory Items</label>
                      <input 
                        type="number" 
                        id="items" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background" 
                        placeholder="100" 
                        min="1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Import your data</h2>
                  <p className="text-muted-foreground">
                    Bring your existing inventory data into AutoStock.
                  </p>
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                        </div>
                      </div>
                      <p className="mb-2 text-sm">Drop your file here or click to upload</p>
                      <p className="text-xs text-muted-foreground">Supports CSV, Excel, or JSON formats</p>
                      <input type="file" className="hidden" id="file-upload" />
                      <button 
                        onClick={() => document.getElementById('file-upload')?.click()}
                        className="mt-4 button-hover inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors"
                      >
                        Select File
                      </button>
                    </div>
                    <div className="flex items-center">
                      <div className="h-px flex-1 bg-border"></div>
                      <span className="px-4 text-xs text-muted-foreground">OR</span>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    <button className="w-full button-hover inline-flex h-10 items-center justify-center rounded-md bg-background border border-input px-4 py-2 text-sm font-medium shadow-sm">
                      Use Template to Add Items Manually
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Invite your team</h2>
                  <p className="text-muted-foreground">
                    Add team members to collaborate on inventory management.
                  </p>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label htmlFor="team-email" className="block text-sm font-medium mb-1">Email Address</label>
                      <div className="flex">
                        <input 
                          type="email" 
                          id="team-email" 
                          className="flex-grow h-10 px-3 rounded-l-md border border-input bg-background" 
                          placeholder="colleague@example.com" 
                        />
                        <button className="button-hover inline-flex h-10 items-center justify-center rounded-r-md border-y border-r border-input bg-background px-4 py-2 text-sm font-medium">
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-sm font-medium mb-2">Team Members</h3>
                      <p className="text-sm text-muted-foreground italic">No team members added yet</p>
                    </div>
                    
                    {/* Final Success Message */}
                    <div className="mt-10 text-center">
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                        <Rocket className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">You're all set!</h3>
                      <p className="text-muted-foreground mb-6">
                        You've completed all the steps to set up your AutoStock account.
                      </p>
                      <Link
                        to="/dashboard"
                        className="button-hover inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow"
                      >
                        Go to Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className={cn(
                  "button-hover inline-flex h-10 items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm",
                  step === 1 && "opacity-50 cursor-not-allowed"
                )}
                disabled={step === 1}
              >
                Previous
              </button>
              
              <button
                onClick={nextStep}
                className={cn(
                  "button-hover inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow",
                  step === steps.length && "opacity-50 cursor-not-allowed"
                )}
                disabled={step === steps.length}
              >
                {step < steps.length ? (
                  <>Next<ArrowRight className="ml-2 h-4 w-4" /></>
                ) : (
                  "Finish"
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
