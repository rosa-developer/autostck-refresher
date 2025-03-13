
import React from 'react';
import { ArrowLeft, FileJson, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
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
          <p className="text-muted-foreground">Comprehensive documentation for integrating with our platform</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {/* Introduction Section */}
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started with our API</h2>
            <p className="mb-4">Our REST API enables you to programmatically access vehicle data, listings, and other platform features.</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button>Get API Key</Button>
              <Button variant="outline">View SDKs</Button>
            </div>
            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm font-mono mb-2">Base URL:</p>
              <code className="bg-background p-2 block rounded border">https://api.vehicleplatform.example/v1</code>
            </div>
          </div>
          
          {/* API Endpoints */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Vehicle Listings",
                description: "Access and manage vehicle listings on the platform.",
                endpoints: ["GET /listings", "POST /listings", "GET /listings/{id}", "PUT /listings/{id}", "DELETE /listings/{id}"]
              },
              {
                title: "User Management",
                description: "Manage user accounts and authentication.",
                endpoints: ["POST /auth/login", "POST /auth/register", "GET /users/me", "PUT /users/me"]
              },
              {
                title: "Vehicle Data",
                description: "Query our database of vehicle specifications and details.",
                endpoints: ["GET /vehicles/makes", "GET /vehicles/models", "GET /vehicles/{make}/{model}"]
              },
              {
                title: "Search",
                description: "Perform advanced searches across vehicle listings.",
                endpoints: ["GET /search", "POST /search/advanced"]
              },
              {
                title: "Media",
                description: "Upload and retrieve images and other media files.",
                endpoints: ["POST /media/upload", "GET /media/{id}", "DELETE /media/{id}"]
              },
              {
                title: "Analytics",
                description: "Retrieve analytics data for your listings and user engagement.",
                endpoints: ["GET /analytics/listings", "GET /analytics/users", "GET /analytics/performance"]
              }
            ].map((section, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <FileJson className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium">{section.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <div className="space-y-2">
                  {section.endpoints.map((endpoint, endpointIndex) => (
                    <div key={endpointIndex} className="p-2 bg-muted rounded text-sm font-mono">
                      {endpoint}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  View Documentation
                </Button>
              </div>
            ))}
          </div>
          
          {/* Code Examples Section */}
          <div className="rounded-lg border p-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">JavaScript</h3>
                <pre className="p-4 bg-muted rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
{`fetch('https://api.vehicleplatform.example/v1/listings?make=Toyota&model=Camry')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
                  </code>
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Python</h3>
                <pre className="p-4 bg-muted rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
{`import requests

response = requests.get('https://api.vehicleplatform.example/v1/listings', 
                        params={'make': 'Toyota', 'model': 'Camry'})
data = response.json()
print(data)`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default ApiReference;
