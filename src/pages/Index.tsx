import Hero from "@/components/Hero";
import About from "@/components/About";
import ContentHub from "@/components/ContentHub";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ContentHub />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
