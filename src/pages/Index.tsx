import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import GridBackground from "@/components/GridBackground";
import { Card } from "@/components/ui/card";

const Index = () => {
  const sections = [
    {
      number: "01",
      title: "Logo",
      path: "/logo",
      description: "Brand mark usage, clearspace, and variations",
    },
    {
      number: "02",
      title: "Typography",
      path: "/typography",
      description: "Typeface selection and hierarchy guidelines",
    },
    {
      number: "03",
      title: "Colors",
      path: "/colors",
      description: "Color palette and usage specifications",
    },
    {
      number: "04",
      title: "Brand Voice",
      path: "/voice",
      description: "Mission, vision, and communication principles",
    },
    {
      number: "05",
      title: "Engineering",
      path: "/engineering",
      description: "Cost estimation, VAVE, and sourcing services",
    },
    {
      number: "06",
      title: "Manufacturing",
      path: "/manufacturing",
      description: "Rapid prototyping and production capabilities",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-teal">
        <GridBackground />
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none tracking-tight">
              Brand
              <br />
              Guidelines
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Just like our technology, our brand is designed to constantly flex and grow.
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                We are in a rapidly advancing field. The landscape shifts constantly. So our
                brand—like our platform—is built to be a clear and consistent framework to hold
                that continual change.
              </p>
              <p>
                This is a guidebook, not a rule book. It's designed to empower, not restrict, your
                creative development. Our goal is not only to help the EMuski brand feel powerful,
                clean, and consistent—but also to help spark new ideas for how to help it evolve
                and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-12">Contents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.path} to={section.path} className="group">
                <Card className="p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-primary hover:-translate-y-1 bg-card">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                        {section.number}
                      </span>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 EMuski. Technology-Driven Engineering & Manufacturing Excellence.
            </p>
            <p className="text-muted-foreground text-sm">www.emuski.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
