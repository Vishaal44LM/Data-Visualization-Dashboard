
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "./dashboard/Header";
import MetricsCard from "./dashboard/MetricsCard";
import RevenueChart from "./dashboard/RevenueChart";
import UserGrowthChart from "./dashboard/UserGrowthChart";
import CategoryPieChart from "./dashboard/CategoryPieChart";
import TrafficAreaChart from "./dashboard/TrafficAreaChart";
import { TrendingUp, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

const Dashboard = () => {
  const metricsData = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      description: "from last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      trend: "up",
      icon: Users,
      description: "from last month"
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19%",
      trend: "up",
      icon: ShoppingCart,
      description: "from last month"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+5.4%",
      trend: "up",
      icon: Activity,
      description: "from last month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Metrics Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {metricsData.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Revenue and User Growth Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Revenue Overview
                  </CardTitle>
                  <CardDescription>
                    Monthly revenue trends for the past year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RevenueChart />
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    User Growth
                  </CardTitle>
                  <CardDescription>
                    New user registrations over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <UserGrowthChart />
                </CardContent>
              </Card>
            </div>

            {/* Category Distribution and Traffic */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Category Distribution</CardTitle>
                  <CardDescription>
                    Sales breakdown by product categories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CategoryPieChart />
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                  <CardDescription>
                    Daily visitors and page views
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TrafficAreaChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Detailed insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Advanced analytics features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
                <CardDescription>
                  Generate and export custom reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom reporting tools coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
