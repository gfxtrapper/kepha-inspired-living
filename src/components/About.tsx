import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Users, Target } from "lucide-react";
import mosesImage from "@/assets/moses-kepha.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description: "Every teaching is grounded in biblical truth and the love of Christ."
    },
    {
      icon: BookOpen,
      title: "Practical Wisdom",
      description: "Applicable insights for modern life challenges and daily growth."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building connections and fostering spiritual fellowship."
    },
    {
      icon: Target,
      title: "Purpose Driven",
      description: "Helping you discover and live out your God-given calling."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image and Introduction */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={mosesImage} 
                alt="Moses Kepha" 
                className="w-80 h-80 rounded-full mx-auto object-cover shadow-strong border-8 border-gold-light"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-medium">
                <Heart className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-4xl font-serif font-bold text-primary">Moses Kepha</h2>
              <p className="text-lg text-muted-foreground">
                Pastor, Teacher & Guide
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-semibold text-primary mb-6">
                Called to Transform Lives
              </h3>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  With a heart passionate for God's Word and a calling to serve others, Moses Kepha has dedicated his life to helping people discover their purpose and grow in their faith journey.
                </p>
                <p>
                  Through authentic teaching, practical wisdom, and genuine care, Moses creates a space where spiritual growth meets real-life application, empowering individuals to live boldly for Christ.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="golden" size="lg" className="w-full sm:w-auto">
              Learn More About My Ministry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;