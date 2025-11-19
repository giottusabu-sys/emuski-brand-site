import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";

const Typography = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-semibold mb-4 block">02</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Typography</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our typography system balances technical precision with modern accessibility. Clean,
              geometric sans-serif fonts reflect our commitment to clarity and innovation.
            </p>
          </div>

          {/* Primary Typeface */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Primary Typeface</h2>
            <Card className="p-12 bg-gradient-to-br from-brand-navy/5 to-primary/5">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">System Font Stack</p>
                  <p className="text-6xl font-bold text-foreground">Inter</p>
                  <p className="text-muted-foreground mt-2">
                    Primary font for headings and body text
                  </p>
                </div>
                <div className="pt-8 border-t border-border">
                  <p className="text-4xl font-light text-foreground">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</p>
                  <p className="text-4xl font-light text-foreground mt-2">Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                  <p className="text-4xl font-light text-foreground mt-2">0 1 2 3 4 5 6 7 8 9</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Type Scale */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Type Scale</h2>
            <Card className="p-12 bg-card">
              <div className="space-y-8">
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-3">Display / 96px</p>
                  <h1 className="text-8xl font-bold text-foreground leading-none">
                    Engineering Excellence
                  </h1>
                </div>
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-3">Heading 1 / 60px</p>
                  <h1 className="text-6xl font-bold text-foreground leading-tight">
                    Precision Manufacturing
                  </h1>
                </div>
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-3">Heading 2 / 48px</p>
                  <h2 className="text-5xl font-bold text-foreground leading-tight">
                    AI-Driven Innovation
                  </h2>
                </div>
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-3">Heading 3 / 36px</p>
                  <h3 className="text-4xl font-semibold text-foreground">
                    Cost Optimization Solutions
                  </h3>
                </div>
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-3">Heading 4 / 24px</p>
                  <h4 className="text-2xl font-semibold text-foreground">
                    Strategic Sourcing Support
                  </h4>
                </div>
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-3">Body Large / 20px</p>
                  <p className="text-xl text-foreground">
                    At EMuski, we combine engineering expertise, manufacturing mastery, and
                    AI-driven digital innovation to support OEMs at every stage.
                  </p>
                </div>
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-3">Body / 16px</p>
                  <p className="text-base text-foreground">
                    Our services are structured across three complementary pillars to deliver
                    end-to-end value, cost efficiency, and speed to market.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Body Small / 14px</p>
                  <p className="text-sm text-foreground">
                    Driven by technology, EMuski is building an AI-assisted digital platform to
                    simplify the entire manufacturing and supply chain process.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Font Weights */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Font Weights</h2>
            <Card className="p-12 bg-card">
              <div className="space-y-6">
                <div className="flex items-baseline gap-8">
                  <span className="text-sm text-muted-foreground w-32">Light / 300</span>
                  <p className="text-3xl font-light text-foreground">Innovation Through Precision</p>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="text-sm text-muted-foreground w-32">Regular / 400</span>
                  <p className="text-3xl font-normal text-foreground">Innovation Through Precision</p>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="text-sm text-muted-foreground w-32">Medium / 500</span>
                  <p className="text-3xl font-medium text-foreground">Innovation Through Precision</p>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="text-sm text-muted-foreground w-32">Semibold / 600</span>
                  <p className="text-3xl font-semibold text-foreground">Innovation Through Precision</p>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="text-sm text-muted-foreground w-32">Bold / 700</span>
                  <p className="text-3xl font-bold text-foreground">Innovation Through Precision</p>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Typography;
