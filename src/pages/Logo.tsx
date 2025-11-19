import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import emuski from "@/assets/emuski-logo.jpg";

const Logo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-semibold mb-4 block">01</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Logo</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              The EMuski logo represents the convergence of precision engineering and innovative
              technology. The circular geometric pattern symbolizes continuous improvement and
              interconnected solutions.
            </p>
          </div>

          {/* Primary Logo */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Primary Logo</h2>
            <Card className="p-12 bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center min-h-[400px]">
              <img
                src={emuski}
                alt="EMuski Primary Logo"
                className="w-64 h-64 object-contain"
              />
            </Card>
            <p className="text-muted-foreground mt-6">
              The primary logo features our signature cyan and blue circular pattern. Use this
              version on dark backgrounds for maximum impact.
            </p>
          </section>

          {/* Logo Variations */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Logo on Different Backgrounds</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-12 bg-white flex items-center justify-center min-h-[300px]">
                <img
                  src={emuski}
                  alt="Logo on Light"
                  className="w-48 h-48 object-contain"
                />
              </Card>
              <Card className="p-12 bg-background flex items-center justify-center min-h-[300px]">
                <img
                  src={emuski}
                  alt="Logo on Dark"
                  className="w-48 h-48 object-contain"
                />
              </Card>
            </div>
          </section>

          {/* Clear Space */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Clear Space</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              To ensure visibility and impact, maintain adequate clear space around the logo. The
              minimum clear space should be equal to the height of the "M" in the circular pattern.
            </p>
            <Card className="p-12 bg-secondary/50 flex items-center justify-center min-h-[400px] relative">
              <div className="relative">
                <img
                  src={emuski}
                  alt="Logo Clear Space"
                  className="w-48 h-48 object-contain"
                />
                <div className="absolute -inset-12 border-2 border-dashed border-primary/30"></div>
              </div>
            </Card>
          </section>

          {/* Minimum Size */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Minimum Size</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              To maintain legibility, the logo should never appear smaller than 32px in digital
              applications or 0.5 inches in print materials.
            </p>
            <div className="flex items-end gap-8">
              <div className="space-y-2">
                <img src={emuski} alt="32px logo" className="w-8 h-8 object-contain" />
                <p className="text-xs text-muted-foreground">32px minimum</p>
              </div>
              <div className="space-y-2">
                <img src={emuski} alt="48px logo" className="w-12 h-12 object-contain" />
                <p className="text-xs text-muted-foreground">48px recommended</p>
              </div>
              <div className="space-y-2">
                <img src={emuski} alt="64px logo" className="w-16 h-16 object-contain" />
                <p className="text-xs text-muted-foreground">64px optimal</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Logo;
