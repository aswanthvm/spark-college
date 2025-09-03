import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock event data
  const mockEvents = [
    {
      id: "1",
      title: "Annual Tech Symposium",
      description: "Join industry leaders and students for cutting-edge discussions on technology trends, AI innovations, and career opportunities in tech.",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      category: "Academic",
      registeredCount: 145,
      maxCapacity: 200,
      organizerName: "Computer Science Dept."
    },
    {
      id: "2",
      title: "Cultural Night 2024",
      description: "Celebrate diversity through music, dance, and food from around the world. Showcase your talents and enjoy performances by fellow students.",
      date: "March 22, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Student Center",
      category: "Cultural",
      registeredCount: 89,
      maxCapacity: 150,
      organizerName: "International Club"
    },
    {
      id: "3",
      title: "Career Fair Spring 2024",
      description: "Connect with top employers, explore internship opportunities, and kickstart your career. Over 50 companies participating.",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Sports Complex",
      category: "Career",
      registeredCount: 320,
      maxCapacity: 500,
      organizerName: "Career Services"
    },
    {
      id: "4",
      title: "Sustainability Workshop",
      description: "Learn about sustainable practices, environmental conservation, and how students can make a positive impact on campus and beyond.",
      date: "March 28, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Green Building",
      category: "Workshop",
      registeredCount: 45,
      maxCapacity: 60,
      organizerName: "Environmental Club"
    }
  ];

  const categories = ["All", "Academic", "Cultural", "Career", "Workshop", "Sports"];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <HeroSection />
      
      {/* Events Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover amazing opportunities to learn, network, and grow. 
              Filter by category to find events that match your interests.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No events found matching your criteria. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
