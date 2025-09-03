import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, TrendingUp, Home, LogOut, User, Plus, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Events",
      value: "8",
      change: "+12%",
      icon: Calendar,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Total Participants",
      value: "2366",
      change: "+8%",
      icon: Users,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Upcoming Events",
      value: "3",
      change: "Active",
      icon: Clock,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Avg. Attendance",
      value: "92%",
      change: "+15%",
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const upcomingEvents = [
    {
      title: "Annual Science Symposium 2025",
      date: "2025-02-15 • 9:00 AM",
      category: "academic",
      registered: "245/300 registered",
      image: "🧪"
    },
    {
      title: "Cultural Night: Celebrating Diversity",
      date: "2025-02-20 • 6:00 PM",
      category: "cultural",
      registered: "387/500 registered",
      image: "🎭"
    },
    {
      title: "Web Development Workshop",
      date: "2025-02-10 • 2:00 PM",
      category: "workshop",
      registered: "48/50 registered",
      image: "💻"
    }
  ];

  const quickActions = [
    {
      title: "Create New Event",
      description: "Set up a new campus event",
      icon: Plus,
      color: "bg-primary text-white"
    },
    {
      title: "Manage Events",
      description: "View and edit existing events",
      icon: Calendar,
      color: "bg-emerald-500 text-white"
    }
  ];

  const recentActivity = [
    {
      title: "Inter-College Basketball Tournament",
      description: "Completed successfully",
      type: "success"
    },
    {
      title: "New registrations received",
      description: "25 new sign-ups today",
      type: "info"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg">CollegeEventHub</h1>
                <p className="text-sm text-muted-foreground">Event Management Platform</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button variant="ghost" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm font-medium">Dr. Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, Dr. Sarah Johnson!</h2>
          <p className="text-muted-foreground">Manage your events and track participation across the college.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Upcoming Events</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                      <div className="text-2xl">{event.image}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {event.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{event.registered}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button 
                      key={index}
                      variant="outline"
                      className="w-full h-auto p-4 justify-start"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color}`}>
                          <action.icon className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <h5 className="font-medium text-foreground">{action.title}</h5>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "success" ? "bg-green-500" : "bg-blue-500"
                      }`}></div>
                      <div>
                        <h5 className="font-medium text-foreground text-sm">{activity.title}</h5>
                        <p className="text-xs text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;