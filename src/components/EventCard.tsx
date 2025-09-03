import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
    registeredCount: number;
    maxCapacity: number;
    organizerName: string;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const isFull = event.registeredCount >= event.maxCapacity;
  
  return (
    <Card className="group hover:shadow-glow transition-all duration-300 border-border hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <Badge 
              variant="secondary" 
              className="bg-warm-accent-light text-warm-accent-foreground"
            >
              {event.category}
            </Badge>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {event.description}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
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
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{event.registeredCount}/{event.maxCapacity}</span>
          </div>
        </div>
        
        <div className="pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              by {event.organizerName}
            </span>
            <Button 
              size="sm" 
              disabled={isFull}
              className="bg-gradient-primary text-white border-0 disabled:opacity-50"
            >
              {isFull ? 'Full' : 'Register'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;