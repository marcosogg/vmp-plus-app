'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bell, Home, Import, Search, Users } from "lucide-react"

export function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 py-6 container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Welcome to Vendor Management</h2>
        <p className="text-muted-foreground mb-8">
          Streamline your vendor relationships, monitor performance, and make data-driven decisions with our comprehensive management tool.
        </p>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">682</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.30B</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Risk Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="quick-access" className="space-y-4">
          <TabsList>
            <TabsTrigger value="quick-access">Quick Access</TabsTrigger>
            <TabsTrigger value="recent-activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="vendor-news">Vendor News</TabsTrigger>
          </TabsList>
          <TabsContent value="quick-access" className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Vendor List
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Import className="mr-2 h-4 w-4" />
              Import Data
            </Button>
          </TabsContent>
          <TabsContent value="recent-activity" className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm">2024-07-31 17:51 - Import spend</p>
              <p className="text-sm">2024-07-31 17:51 - Import parts</p>
              <p className="text-sm">2024-07-31 17:51 - Import vendors</p>
              <p className="text-sm">2024-07-31 14:51 - Import parts</p>
              <p className="text-sm">2024-07-31 14:50 - Import spend</p>
            </div>
          </TabsContent>
          <TabsContent value="vendor-news" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Miniso unveils 200th US location in Santa Monica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Source: Retail Dive</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Rihanna's Savage X Fenty debuts at Selfridges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Source: Retail Dive</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Virtual try-on offers more sales: Perfect Corp.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Source: Retail Dive</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}