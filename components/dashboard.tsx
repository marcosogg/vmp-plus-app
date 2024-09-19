'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  BarChart3, 
  Bell, 
  DollarSign, 
  Menu, 
  Plus, 
  Search, 
  Settings, 
  ShieldCheck, 
  TrendingUp, 
  Users 
} from 'lucide-react'

export function Dashboard() {
  const vendorRankingData = [
    { name: 'TechGifts', region: 'NA', category: 'Electronics', spend: 1200000 },
    { name: 'FashionCards', region: 'EMEA', category: 'Fashion', spend: 980000 },
    { name: 'HomeEssentials', region: 'APAC', category: 'House & Home', spend: 850000 },
    { name: 'SportZone', region: 'NA', category: 'Sports & Recreation', spend: 720000 },
    { name: 'TravelJoy', region: 'EMEA', category: 'Travel', spend: 690000 },
  ]

  const vendorPerformanceData = [
    { name: 'TechGifts', country: 'USA', performance: 92, paymentTerms: 'NET30', leadTime: 5, avgDiscount: 6.5 },
    { name: 'FashionCards', country: 'France', performance: 88, paymentTerms: 'NET30', leadTime: 8, avgDiscount: 4.5 },
    { name: 'HomeEssentials', country: 'Japan', performance: 95, paymentTerms: 'NET30', leadTime: 6, avgDiscount: 5.2 },
    { name: 'SportZone', country: 'Canada', performance: 87, paymentTerms: 'PPAY', leadTime: 12, avgDiscount: 3.8 },
    { name: 'TravelJoy', country: 'UK', performance: 91, paymentTerms: 'NET30', leadTime: 7, avgDiscount: 5.5 },
  ]

  const recentActivityData = [
    { name: 'Anne Marie', role: 'Vendor Manager', action: 'Updated TechGifts performance metrics', time: '1 hour ago' },
    { name: 'Nataly', role: 'Sourcing Manager', action: 'Added new vendor HomeComfort to the system', time: '3 hours ago' },
    { name: 'Elaine', role: 'Buyer', action: 'Placed bulk order with FashionCards', time: '5 hours ago' },
    { name: 'John', role: 'Vendor Manager', action: 'Reviewed SportZone\'s latest contract', time: '1 day ago' },
    { name: 'Sarah', role: 'Sourcing Manager', action: 'Initiated vendor evaluation for TravelJoy', time: '2 days ago' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Procurement VMP+</h1>
        </div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-2 bg-indigo-800">
            <BarChart3 className="mr-3" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 hover:bg-indigo-600">
            <Users className="mr-3" />
            Vendors
          </a>
          <a href="#" className="flex items-center px-4 py-2 hover:bg-indigo-600">
            <Settings className="mr-3" />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button className="text-gray-500 focus:outline-none lg:hidden">
              <Menu />
            </button>
            <div className="relative w-64">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="w-5 h-5 text-gray-500" />
              </span>
              <Input 
                className="pl-10" 
                placeholder="Search vendors..." 
                type="text"
              />
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5 text-gray-500" />
              </Button>
              <Avatar className="ml-4">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
                <Users className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs">+5% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
                <DollarSign className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4.44M</div>
                <p className="text-xs">+12% from last quarter</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Performance</CardTitle>
                <TrendingUp className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">90.6%</div>
                <p className="text-xs">+3% from last assessment</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
                <ShieldCheck className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Low</div>
                <p className="text-xs">No change from last assessment</p>
              </CardContent>
            </Card>
          </div>

          {/* Vendor Ranking and Vendor Performance */}
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top 5 Gift Card Vendors by Spend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2">Vendor</th>
                        <th className="pb-2">Region</th>
                        <th className="pb-2">Category</th>
                        <th className="pb-2">Spend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendorRankingData.map((vendor, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-2 font-medium">{vendor.name}</td>
                          <td className="py-2">{vendor.region}</td>
                          <td className="py-2">{vendor.category}</td>
                          <td className="py-2">${(vendor.spend / 1000000).toFixed(2)}M</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vendor Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left">
                        <th className="pb-2">Vendor</th>
                        <th className="pb-2">Country</th>
                        <th className="pb-2">Performance</th>
                        <th className="pb-2">Payment Terms</th>
                        <th className="pb-2">Lead Time</th>
                        <th className="pb-2">Avg. Discount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendorPerformanceData.map((vendor, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-2 font-medium">{vendor.name}</td>
                          <td className="py-2">{vendor.country}</td>
                          <td className="py-2">{vendor.performance}%</td>
                          <td className="py-2">{vendor.paymentTerms}</td>
                          <td className="py-2">{vendor.leadTime}d</td>
                          <td className="py-2">{vendor.avgDiscount}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights and Recent Activity */}
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-green-100 text-green-500">
                      <TrendingUp size={18} />
                    </span>
                    <span>TechGifts has shown a 5% increase in customer satisfaction this quarter.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-yellow-100 text-yellow-500">
                      <DollarSign size={18} />
                    </span>
                    <span>Potential cost savings of 8% identified in the Electronics gift card category.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-red-100 text-red-500">
                      <ShieldCheck size={18} />
                    </span>
                    <span>Risk alert: SportZone's lead time has increased to 12 days, above the 7-day target.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentActivityData.map((activity, index) => (
                    <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={activity.name} />
                        <AvatarFallback>{activity.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{activity.name} - {activity.role}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Quick Actions Menu */}
      <div className="fixed bottom-8 right-8">
        <Button className="rounded-full h-14 w-14 bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}