import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, FileText, BookHeart, GraduationCap, Calendar, ArrowRight } from "lucide-react";

const ContentHub = () => {
  const contentTypes = [
    {
      icon: Mic,
      title: "Sermons & Messages",
      description: "Weekly teachings that inspire and challenge you to grow deeper in your faith journey.",
      count: "50+ Messages",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Blog & Articles",
      description: "Thoughtful insights on Christian living, personal growth, and navigating life's challenges.",
      count: "100+ Articles",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: BookHeart,
      title: "Daily Devotionals",
      description: "Start each day with purpose through Scripture-based reflections and prayers.",
      count: "365 Days",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Bible Studies",
      description: "Deep-dive study guides and courses to strengthen your biblical foundation.",
      count: "25+ Studies",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Calendar,
      title: "Events & Workshops",
      description: "Join live events, workshops, and community gatherings for fellowship and growth.",
      count: "Monthly Events",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Discover & Grow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore a rich collection of resources designed to nurture your spiritual journey and equip you for purposeful living.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentTypes.slice(0, 4).map((content, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 shadow-soft overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${content.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <content.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary-glow transition-colors">
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gold">{content.count}</span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-accent">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Featured Events Card */}
          <Card className="md:col-span-2 lg:col-span-1 group hover:shadow-strong transition-all duration-300 border-0 shadow-soft bg-gradient-to-br from-primary to-primary-glow text-primary-foreground overflow-hidden">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Events & Workshops
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-primary-foreground/90 leading-relaxed">
                Join live events, workshops, and community gatherings for fellowship and growth.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gold">Monthly Events</span>
                <Button variant="gentle" size="sm" className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
                  View Calendar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Access All Resources
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;