import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingDown, Network, Users } from "lucide-react";

const Engineering = () => {
  const services = [
    {
      icon: Calculator,
      title: "Product Cost Estimation",
      description:
        "We offer cost estimation services for manufactured products, catering mainly in the automotive sector, throughout the concept design, prototyping, and production phases, utilizing a real-time cost database.",
      features: [
        "Real-time cost database",
        "Concept to production pricing",
        "Automotive sector expertise",
        "Multi-phase analysis",
      ],
    },
    {
      icon: TrendingDown,
      title: "VAVE - Teardown & Benchmarking",
      description:
        "We offer teardown and benchmarking activity by analyzing the cost drivers of both our customer's vehicle and their competitors' vehicles by dismantling them, identifying all cost and cost driver differences.",
      features: [
        "Competitive analysis",
        "Cost driver identification",
        "Detailed dismantling",
        "Value engineering insights",
      ],
    },
    {
      icon: Network,
      title: "Strategic Sourcing Support",
      description:
        "We offer clients in identifying the right sources in India for their unique business requirements. Ensuring the right connection with manufacturing partners can save time, money, and minimize supplier inefficiencies.",
      features: [
        "Supplier identification",
        "Quality assessment",
        "Cost optimization",
        "Risk mitigation",
      ],
    },
    {
      icon: Users,
      title: "Expert Engineer Support",
      description:
        "Access our team of specialized engineers with expertise in software development, manufacturing, supply chain, and business development. We deliver excellence through our exceptional team.",
      features: [
        "Dedicated engineering team",
        "Cross-functional expertise",
        "On-demand consultation",
        "Long-term partnerships",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-semibold mb-4 block">05</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Engineering Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Driving product value, cost optimization, and supply chain strength through deep
              expertise and technology. Our engineering services help OEMs make smarter decisions
              and achieve justified costs.
            </p>
          </div>

          {/* Overview */}
          <section className="mb-20">
            <Card className="p-12 bg-gradient-to-br from-brand-navy/5 to-primary/5">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Technology-Driven Engineering Solutions
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                EMuski specializes in cost estimation, cost benchmarking/teardown activity, supply
                chain management, and customized costing software development for the manufacturing
                sector.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With our deep understanding of cost analysis, a large network of trusted suppliers,
                and integrated software tool solutions, our unique approach not only sets us apart
                from competition but also ensures that our pricing is always fair and well-justified.
              </p>
            </Card>
          </section>

          {/* Services Grid */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Our Services</h2>
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
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Components Costed</div>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-accent/5 to-transparent">
                <div className="text-4xl font-bold text-accent mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-brand-teal/5 to-transparent">
                <div className="text-4xl font-bold text-brand-teal mb-2">12</div>
                <div className="text-sm text-muted-foreground">Expert Engineers</div>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Partnership</div>
              </Card>
            </div>
          </section>

          {/* Expertise Areas */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="font-bold text-foreground mb-2">Professional</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized in cost estimation, cost benchmarking, and supply chain management
                  for manufacturing.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-accent">
                <h3 className="font-bold text-foreground mb-2">Talented</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of cost analysis with a large network of trusted suppliers and
                  integrated software solutions.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-brand-teal">
                <h3 className="font-bold text-foreground mb-2">Creative</h3>
                <p className="text-sm text-muted-foreground">
                  Win-win solutions bridging customers and suppliers through value-based
                  negotiations and unique partnerships.
                </p>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Engineering;
