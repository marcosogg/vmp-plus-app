"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bell, Home, Import, Search, Users } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-6 container mx-auto">
          <h1 className="text-xl font-semibold">Vendor Management</h1>
          <div className="ml-auto flex items-center space-x-4">
            <form className="flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 mr-2"
              />
              <Button type="submit" size="sm">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>
  );
}
