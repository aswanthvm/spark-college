import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, MapPin, ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CoordinatorDashboard = () => {
  const navigate = useNavigate();

  // Mock data for assigned events
  const assignedEvents = [
    {
      id: 1,
      title: "Tech Symposium 2024",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Main Auditorium",
      status: "upcoming",
      registrations: 45,
      capacity: 100,
      description: "Annual technology symposium featuring industry experts"
    },
    {
      id: 2,
      title: "Cultural Fest",
      date: "2024-03-20",
      time: "06:00 PM",
      location: "College Ground",
      status: "upcoming",
      registrations: 78,
      capacity: 150,
      description: "Celebrate diversity through cultural performances"
    },
    {
      id: 3,
      title: "Workshop: AI & ML",
      date: "2024-03-10",
      time: "02:00 PM",
      location: "Computer Lab",
      status: "completed",
      registrations: 30,
      capacity: 30,
      description: "Hands-on workshop on artificial intelligence"
    }
  ];

  // Mock data for registration requests
  const registrationRequests = [
    { id: 1, studentName: "John Doe", studentId: "CS2021001", event: "Tech Symposium 2024", status: "pending" },
    { id: 2, studentName: "Jane Smith", studentId: "IT2021045", event: "Cultural Fest", status: "pending" },
    { id: 3, studentName: "Mike Johnson", studentId: "EC2021023", event: "Tech Symposium 2024", status: "pending" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "bg-blue-500";
      case "completed": return "bg-green-500";
      case "cancelled": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const handleApproveRequest = (requestId: number) => {
    // Handle approval logic here
    console.log("Approved request:", requestId);
  };

  const handleRejectRequest = (requestId: number) => {
    // Handle rejection logic here
    console.log("Rejected request:", requestId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
                className="p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Coordinator Dashboard</h1>
                <p className="text-muted-foreground">Manage your assigned events</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
              Coordinator
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Assigned Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{assignedEvents.length}</div>
                <p className="text-xs text-muted-foreground">Total events assigned</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{registrationRequests.length}</div>
                <p className="text-xs text-muted-foreground">Registration requests</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {assignedEvents.reduce((sum, event) => sum + event.registrations, 0)}
                </div>
                <p className="text-xs text-muted-foreground">Across all events</p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-600" />
                <span>Registration Requests</span>
              </CardTitle>
              <CardDescription>
                Review and approve student registration requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {registrationRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{request.studentName}</h4>
                      <p className="text-sm text-muted-foreground">ID: {request.studentId}</p>
                      <p className="text-sm text-muted-foreground">Event: {request.event}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => handleApproveRequest(request.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRejectRequest(request.id)}
                        className="border-red-200 text-red-600 hover:bg-red-50"
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assigned Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span>Assigned Events</span>
              </CardTitle>
              <CardDescription>
                Events you are coordinating
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {assignedEvents.map((event) => (
                  <div key={event.id} className="border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-3">{event.description}</p>
                      </div>
                      <Badge className={`${getStatusColor(event.status)} text-white`}>
                        {event.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {event.registrations}/{event.capacity} registered
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorDashboard;