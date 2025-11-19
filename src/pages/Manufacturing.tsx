import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Zap, Cog, Package, Wrench } from "lucide-react";

const Manufacturing = () => {
  const services = [
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description:
        "Transform your concepts into physical prototypes quickly. We offer multiple prototyping technologies including CNC machining, 3D printing (SLA & SLS), vacuum casting, and injection molding for low-volume production.",
      capabilities: [
        "CNC/VMC Plastic & Metal",
        "5-Axis Precision Machining",
        "3D Printing SLA & SLS",
        "Vacuum Casting",
      ],
    },
    {
      icon: Cog,
      title: "On-Demand Manufacturing",
      description:
        "Flexible manufacturing solutions tailored to your needs. From single prototypes to low-volume production runs, we deliver quality parts with fast turnaround times using state-of-the-art equipment.",
      capabilities: [
        "Low-Volume Production",
        "Custom Part Manufacturing",
        "Fixture & Tooling",
        "Jig Manufacturing",
      ],
    },
    {
      icon: Package,
      title: "Strategic Sourcing",
      description:
        "Connect with the right manufacturing partners in India. Our extensive network and expertise help you find cost-effective, quality suppliers while minimizing risks and inefficiencies.",
      capabilities: [
        "Supplier Identification",
        "Quality Assurance",
        "Cost Negotiation",
        "Supply Chain Optimization",
      ],
    },
    {
      icon: Wrench,
      title: "Contract Manufacturing",
      description:
        "Full-service contract manufacturing from design to delivery. We manage your entire production process with comprehensive quality control and detailed documentation.",
      capabilities: [
        "Production Planning",
        "Quality Control",
        "Final Inspection",
        "Complete Documentation",
      ],
    },
  ];

  const solutions = [
    "CNC/VMC Plastic & Metal 5-Axis Precision Machining",
    "CNC/VMC Aluminum Machining Prototypes",
    "3D Printing SLA & SLS Prototypes",
    "Sheet Metal Prototypes",
    "Vacuum Casting Plastic Prototypes",
    "Injection Molding Low-Volume Prototypes",
    "Expert in Fixture, Tooling, and Jig Manufacturing",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-semibold mb-4 block">06</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Manufacturing Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Your custom prototype and manufacturing service expert. From rapid prototyping to
              full-scale production, we deliver precision-engineered solutions with justified costs
              and peerless quality.
            </p>
          </div>

          {/* Hero Statement */}
          <section className="mb-20">
            <Card className="p-12 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-teal text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Manufacturing Redefined
              </h2>
              <p className="text-xl leading-relaxed mb-4">
                You design it, we build it — Justified cost, peerless quality.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                At EMuski, we've accomplished more than 50+ projects in the last two years,
                delivering precisely engineered solutions to meet our customers' unique needs.
              </p>
            </Card>
          </section>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Our Manufacturing Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-lg hover:border-primary hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Solutions We Offer */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Solutions We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6 bg-secondary/30 border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-foreground font-medium leading-relaxed">
                      {solution}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Process Flow */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Our Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">
                  1
                </div>
                <h3 className="font-bold text-foreground mb-2">Design Review</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze your 2D/3D drawings and provide DFM feedback
                </p>
              </Card>
              <Card className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-accent">
                  2
                </div>
                <h3 className="font-bold text-foreground mb-2">Manufacturing</h3>
                <p className="text-sm text-muted-foreground">
                  Produce parts using optimal processes and supplier selection
                </p>
              </Card>
              <Card className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-brand-teal">
                  3
                </div>
                <h3 className="font-bold text-foreground mb-2">Quality & Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Final inspection, documentation, and delivery to your door
                </p>
              </Card>
            </div>
          </section>

          {/* Deliverables */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">What You Receive</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Our product deliverables ensure complete transparency and quality assurance.
            </p>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Manufacturing Process Plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Complete Project Details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Product Images</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Final Inspection Report</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Balloon Drawing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Part Details & Specifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Dock Audit Checklist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">Key Learnings Documentation</span>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Manufacturing;
