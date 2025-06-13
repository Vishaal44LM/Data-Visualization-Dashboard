
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  DollarSign,
} from "lucide-react";
import Header from "./dashboard/Header";
import MetricsCard from "./dashboard/MetricsCard";
import RevenueChart from "./dashboard/RevenueChart";
import UserGrowthChart from "./dashboard/UserGrowthChart";
import TrafficAreaChart from "./dashboard/TrafficAreaChart";
import CategoryPieChart from "./dashboard/CategoryPieChart";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  const metrics = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
      description: "from last month"
    },
    {
      title: "Revenue",
      value: "$48,392",
      change: "+8.2%",
      trend: "up" as const,
      icon: DollarSign,
      description: "from last month"
    },
    {
      title: "Orders",
      value: "1,429",
      change: "-2.1%",
      trend: "down" as const,
      icon: ShoppingCart,
      description: "from last month"
    },
    {
      title: "Growth Rate",
      value: "23.4%",
      change: "+4.3%",
      trend: "up" as const,
      icon: TrendingUp,
      description: "from last month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Track your business metrics and performance</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <CategoryPieChart />
            </CardContent>
          </Card>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <UserGrowthChart />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <TrafficAreaChart />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
