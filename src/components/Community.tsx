import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Share2, Mail, Phone } from "lucide-react";
import communityImage from "@/assets/community.jpg";

const Community = () => {
  const connectionWays = [
    {
      icon: MessageCircle,
      title: "Join Discussions",
      description: "Share insights and grow together in our community forums"
    },
    {
      icon: Share2,
      title: "Share Your Story",
      description: "Inspire others by sharing your faith journey and testimonies"
    },
    {
      icon: Mail,
      title: "Weekly Newsletter",
      description: "Stay connected with weekly encouragement and updates"
    },
    {
      icon: Phone,
      title: "Prayer Requests",
      description: "Submit prayer requests and join our prayer community"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                You're not meant to walk this journey alone. Connect with fellow believers, share your experiences, and grow together in faith and purpose.
              </p>
            </div>

            {/* Connection Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {connectionWays.map((way, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:bg-gold-light transition-colors">
                      <way.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{way.title}</h3>
                      <p className="text-sm text-muted-foreground">{way.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Button 
                 variant="hero" 
                 size="lg"
                 onClick={() => alert('Join Community - Coming Soon!')}
               >
                 Join Community
               </Button>
               <Button 
                 variant="golden" 
                 size="lg"
                 onClick={() => alert('Newsletter subscription - Coming Soon!')}
               >
                 Subscribe to Newsletter
               </Button>
             </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={communityImage} 
                alt="Community gathering" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-strong border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-gold p-6 rounded-xl shadow-strong">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-primary">Prayer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;