
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, Box, BarChart3, Users, Settings, PieChart, TrendingUp } from 'lucide-react';

// Sample data for charts
const inventoryData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

const productData = [
  { category: 'Electronics', count: 45, stock: 78 },
  { category: 'Clothing', count: 32, stock: 24 },
  { category: 'Home Goods', count: 18, stock: 36 },
  { category: 'Accessories', count: 25, stock: 42 },
];

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button>Sign Up Free</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6 md:px-6 md:py-8 lg:py-12">
        <div className="flex flex-col gap-8">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">AutoStock Demo</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Experience how AutoStock can transform your inventory management
            </p>
          </div>

          {/* Dashboard Demo */}
          <div className="grid gap-6">
            <Tabs defaultValue="overview" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="inventory">Inventory</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                      <Box className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,248</div>
                      <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45</div>
                      <p className="text-xs text-muted-foreground">+5 since yesterday</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">+2 new this week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">-3 from last week</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Inventory Overview</CardTitle>
                      <CardDescription>Stock levels over the last 6 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={inventoryData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Product Categories</CardTitle>
                      <CardDescription>Distribution by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {productData.map((item) => (
                          <div key={item.category} className="flex items-center">
                            <div className="w-1/3 font-medium">{item.category}</div>
                            <div className="w-2/3">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-full rounded-full bg-secondary">
                                  <div
                                    className="h-full rounded-full bg-primary"
                                    style={{ width: `${(item.stock / 100) * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm text-muted-foreground">{item.count}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="inventory" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Inventory Management</CardTitle>
                    <CardDescription>
                      Track, manage, and optimize your inventory in real-time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4">
                      <p className="text-center text-muted-foreground">
                        This is a demo view. In the actual application, you would see your complete inventory
                        with filtering, sorting, and management capabilities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Analytics</CardTitle>
                    <CardDescription>
                      Gain insights from your inventory data with powerful analytics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4">
                      <p className="text-center text-muted-foreground">
                        This is a demo view. In the actual application, you would see detailed analytics
                        including sales trends, inventory turnover, and predictive stock recommendations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Features Showcase */}
          <div className="grid gap-6 mt-12">
            <h2 className="text-2xl font-bold text-center">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Box className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Inventory Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track stock levels, product locations, and movement history across multiple warehouses in real-time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Analytics & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Generate comprehensive reports and visualize data with customizable dashboards and charts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Settings className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Automations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set up automated reordering, alerts for low stock, and integrate with your existing tools and platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Inventory?</h2>
            <p className="text-muted-foreground mb-6">
              Start with AutoStock today and transform how you manage inventory.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Start Free Trial</Button>
              <Button size="lg" variant="outline">Contact Sales</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
