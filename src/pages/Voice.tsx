import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const Voice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-semibold mb-4 block">04</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Brand Voice</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our brand voice reflects who we are: precise, innovative, and committed to
              partnership. We communicate with clarity and confidence, always focusing on value.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-foreground leading-relaxed">
                  At our core, we aspire to be the premier choice for OEMs, adeptly managing their
                  supply chain and empowering them with cutting-edge AI-driven solutions.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <Eye className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-foreground leading-relaxed">
                  We aim to empower society to consume products at a justified value, bridging the
                  gap between innovation and accessibility through intelligent manufacturing.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 border-brand-teal/20">
                <Heart className="h-12 w-12 text-brand-teal mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Our Values</h3>
                <ul className="text-foreground leading-relaxed space-y-2">
                  <li>• Integrity</li>
                  <li>• Transparency</li>
                  <li>• Responsibility</li>
                  <li>• Action Ownership</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Brand Philosophy */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Brand Philosophy</h2>
            <Card className="p-12 bg-gradient-to-br from-brand-navy/5 to-primary/5">
              <div className="space-y-6 text-foreground text-lg leading-relaxed">
                <p>
                  At EMuski, we are shaping the future of manufacturing by combining engineering
                  expertise, manufacturing mastery, and cutting-edge technology. We believe great
                  products are born at the intersection of innovation, intelligence, and speed.
                </p>
                <p>
                  What sets EMuski apart is the synergy of engineering, manufacturing, and
                  technology. We don't just solve today's challenges—we build solutions that
                  anticipate tomorrow's needs. Guided by our values of partnership, precision, and
                  progress, we act as a true innovation partner.
                </p>
              </div>
            </Card>
          </section>

          {/* Tone of Voice */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Tone of Voice</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">We are</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Professional:</strong> Clear, confident, and authoritative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Innovative:</strong> Forward-thinking and technology-driven</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Precise:</strong> Detail-oriented and accuracy-focused</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span><strong>Partnership-minded:</strong> Collaborative and supportive</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-destructive mb-4">We are not</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span><strong>Casual:</strong> Avoid overly informal language</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span><strong>Vague:</strong> Never compromise on clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span><strong>Overly technical:</strong> Balance expertise with accessibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span><strong>Sales-heavy:</strong> Focus on value, not pushing</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Messaging Pillars */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Key Messaging Pillars</h2>
            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Cost and Quality Meet Profitability
                </h3>
                <p className="text-muted-foreground">
                  "At EMuski, where cost and quality meets profitability in manufacturing"
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-accent">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  You Design It, We Build It
                </h3>
                <p className="text-muted-foreground">
                  "Justified cost, peerless quality — from concept to your door"
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-l-brand-teal">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Technology-Driven Excellence
                </h3>
                <p className="text-muted-foreground">
                  "Empowering OEMs with intelligence, agility, and precision across the product
                  lifecycle"
                </p>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Voice;
