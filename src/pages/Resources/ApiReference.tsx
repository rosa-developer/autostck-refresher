
import React from 'react';
import { ArrowLeft, Code, Copy, FileJson, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceLayout from './ResourceLayout';

const ApiReference = () => {
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
          <h1 className="text-3xl font-bold mb-2">API Reference</h1>
          <p className="text-muted-foreground max-w-2xl">Comprehensive documentation for integrating with our vehicle data API platform</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-4 bg-white rounded-xl border p-5 shadow-sm">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                API Documentation
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="text-primary font-medium">Overview</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">Authentication</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">Endpoints</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">Rate Limits</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">Error Handling</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">Webhooks</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">SDK Downloads</li>
                <li className="text-muted-foreground hover:text-foreground transition-colors">API Changelog</li>
              </ul>
              
              <div className="border-t my-4 pt-4">
                <h3 className="font-medium mb-3">API Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Vehicle Data</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Listings</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Users</li>
                  <li className="text-muted-foreground hover:text-foreground transition-colors">Analytics</li>
                </ul>
              </div>
              
              <Button className="w-full mt-4" size="sm">
                Get API Key
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Getting Started</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Full Documentation
                </Button>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Our REST API gives you access to our comprehensive vehicle database, allowing you to 
                integrate vehicle data, listings, and more into your applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-secondary/30 rounded-lg p-4 border">
                  <h3 className="font-medium mb-2">Base URL</h3>
                  <div className="bg-secondary rounded p-2 flex justify-between items-center">
                    <code className="text-sm text-primary">https://api.vehicle.ca/v1</code>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4 border">
                  <h3 className="font-medium mb-2">API Version</h3>
                  <div className="bg-secondary rounded p-2 flex justify-between items-center">
                    <code className="text-sm text-primary">v1 (Current)</code>
                    <span className="text-xs text-muted-foreground">Stable</span>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4 border">
                  <h3 className="font-medium mb-2">Response Format</h3>
                  <div className="bg-secondary rounded p-2 flex justify-between items-center">
                    <code className="text-sm text-primary">JSON</code>
                    <FileJson className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Authentication</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  All API requests require an API key that should be included in the header:
                </p>
                <div className="bg-secondary rounded p-3">
                  <code className="text-sm text-primary font-mono">
                    X-API-Key: your_api_key_here
                  </code>
                </div>
              </div>
              
              <Tabs defaultValue="curl">
                <TabsList className="mb-2 bg-secondary/50">
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curl" className="mt-0">
                  <div className="bg-secondary rounded-lg p-4 relative">
                    <Button variant="ghost" size="icon" className="h-6 w-6 absolute right-2 top-2">
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                    <pre className="text-sm overflow-x-auto text-primary font-mono">
{`curl -X GET "https://api.vehicle.ca/v1/vehicles?make=toyota&year=2023" \\
-H "X-API-Key: your_api_key_here" \\
-H "Content-Type: application/json"`}
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="javascript" className="mt-0">
                  <div className="bg-secondary rounded-lg p-4 relative">
                    <Button variant="ghost" size="icon" className="h-6 w-6 absolute right-2 top-2">
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                    <pre className="text-sm overflow-x-auto text-primary font-mono">
{`fetch("https://api.vehicle.ca/v1/vehicles?make=toyota&year=2023", {
  method: "GET",
  headers: {
    "X-API-Key": "your_api_key_here",
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="python" className="mt-0">
                  <div className="bg-secondary rounded-lg p-4 relative">
                    <Button variant="ghost" size="icon" className="h-6 w-6 absolute right-2 top-2">
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                    <pre className="text-sm overflow-x-auto text-primary font-mono">
{`import requests

url = "https://api.vehicle.ca/v1/vehicles"
params = {"make": "toyota", "year": 2023}
headers = {
    "X-API-Key": "your_api_key_here",
    "Content-Type": "application/json"
}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(data)`}
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="php" className="mt-0">
                  <div className="bg-secondary rounded-lg p-4 relative">
                    <Button variant="ghost" size="icon" className="h-6 w-6 absolute right-2 top-2">
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                    <pre className="text-sm overflow-x-auto text-primary font-mono">
{`<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.vehicle.ca/v1/vehicles?make=toyota&year=2023",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "X-API-Key: your_api_key_here",
    "Content-Type: application/json"
  ],
]);

$response = curl_exec($curl);
$data = json_decode($response, true);
curl_close($curl);

print_r($data);
?>`}
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <FileJson className="h-5 w-5 text-primary" />
                  Sample Response
                </h3>
                <div className="bg-secondary rounded-lg p-4 relative h-64 overflow-auto">
                  <Button variant="ghost" size="icon" className="h-6 w-6 absolute right-2 top-2">
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                  <pre className="text-sm text-primary font-mono">
{`{
  "status": "success",
  "data": {
    "vehicles": [
      {
        "id": "v12345",
        "make": "Toyota",
        "model": "RAV4",
        "year": 2023,
        "trim": "XLE",
        "price": 34999,
        "mileage": 15000,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "body_style": "SUV",
        "exterior_color": "Magnetic Gray Metallic",
        "interior_color": "Black",
        "vin": "JTMWRREV2ND123456",
        "features": [
          "Adaptive Cruise Control",
          "Lane Departure Warning",
          "Blind Spot Monitor",
          "Apple CarPlay"
        ],
        "images": [
          "https://images.vehicle.ca/v12345/exterior-1.jpg",
          "https://images.vehicle.ca/v12345/exterior-2.jpg",
          "https://images.vehicle.ca/v12345/interior-1.jpg"
        ],
        "dealer_id": "d7890",
        "listing_date": "2023-09-15T14:30:00Z",
        "status": "available"
      }
    ],
    "pagination": {
      "total": 42,
      "page": 1,
      "per_page": 10,
      "pages": 5
    }
  }
}`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="font-medium mb-4">Popular API Endpoints</h3>
                <ul className="space-y-3">
                  {[
                    { path: "/vehicles", desc: "List or search vehicles" },
                    { path: "/vehicles/{id}", desc: "Get a specific vehicle" },
                    { path: "/makes", desc: "List all vehicle makes" },
                    { path: "/makes/{make}/models", desc: "List models for a make" },
                    { path: "/listings", desc: "Manage vehicle listings" },
                    { path: "/analytics/views", desc: "Get listing view data" },
                  ].map((endpoint, i) => (
                    <li key={i} className="border-b pb-3 last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <code className="text-sm font-mono text-primary bg-primary/5 px-2 py-1 rounded">{endpoint.path}</code>
                          <p className="text-sm text-muted-foreground mt-1">{endpoint.desc}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7">Docs</Button>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4">View All Endpoints</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default ApiReference;
