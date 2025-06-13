
import { Bell, Check, X, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/dashboard/Header";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New user registration",
      message: "John Doe has registered for your service",
      time: "2 minutes ago",
      type: "info",
      read: false
    },
    {
      id: 2,
      title: "Payment received",
      message: "Payment of $299 has been processed successfully",
      time: "1 hour ago",
      type: "success",
      read: false
    },
    {
      id: 3,
      title: "Server maintenance",
      message: "Scheduled maintenance will begin at 2:00 AM",
      time: "3 hours ago",
      type: "warning",
      read: true
    },
    {
      id: 4,
      title: "System alert",
      message: "High CPU usage detected on server 2",
      time: "5 hours ago",
      type: "error",
      read: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "success":
        return <Check className="h-4 w-4 text-green-600" />;
      case "warning":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Bell className="h-4 w-4 text-blue-600" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100 border-green-200";
      case "warning":
        return "bg-yellow-100 border-yellow-200";
      case "error":
        return "bg-red-100 border-red-200";
      default:
        return "bg-blue-100 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your latest activities</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              {notifications.filter(n => !n.read).length} Unread
            </Badge>
          </div>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`${getTypeColor(notification.type)} ${!notification.read ? 'border-l-4' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {getTypeIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-600'}`}>
                        {notification.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-sm text-gray-500 mt-2">{notification.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
