import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Colors = () => {
  const primaryColors = [
    { name: "Cyan Primary", class: "bg-brand-cyan", hex: "#00BFFF", hsl: "192 95% 50%" },
    { name: "Cyan Light", class: "bg-brand-cyan-light", hex: "#42D4F5", hsl: "192 85% 65%" },
    { name: "Cyan Dark", class: "bg-brand-cyan-dark", hex: "#0095B3", hsl: "192 100% 35%" },
  ];

  const secondaryColors = [
    { name: "Navy", class: "bg-brand-navy", hex: "#1A2F3F", hsl: "210 50% 15%", dark: true },
    { name: "Navy Light", class: "bg-brand-navy-light", hex: "#2A4456", hsl: "210 40% 25%", dark: true },
    { name: "Teal", class: "bg-brand-teal", hex: "#29738F", hsl: "185 60% 40%", dark: true },
  ];

  const neutralColors = [
    { name: "Background", class: "bg-background", hex: "#FFFFFF", hsl: "0 0% 100%" },
    { name: "Foreground", class: "bg-foreground", hex: "#1F3238", hsl: "200 15% 15%", dark: true },
    { name: "Muted", class: "bg-muted", hex: "#EDF2F4", hsl: "200 15% 95%" },
    { name: "Border", class: "bg-border", hex: "#D9E5EA", hsl: "200 20% 90%" },
  ];

  const ColorCard = ({ name, colorClass, hex, hsl, dark }: any) => (
    <Card className="overflow-hidden">
      <div className={`h-32 ${colorClass}`}></div>
      <div className="p-4 space-y-2">
        <h3 className={`font-semibold ${dark ? 'text-foreground' : 'text-foreground'}`}>{name}</h3>
        <div className="space-y-1 text-xs">
          <p className="text-muted-foreground">HEX: {hex}</p>
          <p className="text-muted-foreground">HSL: {hsl}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <span className="text-primary font-semibold mb-4 block">03</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Colors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our color palette embodies the precision and innovation of EMuski. Cyan represents
              cutting-edge technology and clarity, while navy conveys trust, professionalism, and
              depth.
            </p>
          </div>

          {/* Color Psychology */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Color Psychology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-brand-cyan/10 to-brand-cyan/5 border-brand-cyan/20">
                <div className="w-12 h-12 rounded-lg bg-brand-cyan mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-3">Cyan - Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Represents technology, precision, and forward-thinking. Cyan evokes feelings of
                  clarity, intelligence, and cutting-edge innovation—perfect for a company at the
                  forefront of AI-driven manufacturing.
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-brand-navy/10 to-brand-navy/5 border-brand-navy/20">
                <div className="w-12 h-12 rounded-lg bg-brand-navy mb-4"></div>
                <h3 className="text-xl font-bold text-foreground mb-3">Navy - Trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conveys professionalism, reliability, and depth of expertise. Navy blue
                  establishes confidence and stability—essential qualities for strategic partners
                  in engineering and manufacturing.
                </p>
              </Card>
            </div>
          </section>

          {/* Primary Colors */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Primary Colors</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              The primary color palette is built around our signature cyan. Use these colors for
              primary actions, key highlights, and brand moments.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {primaryColors.map((color) => (
                <ColorCard key={color.name} name={color.name} colorClass={color.class} hex={color.hex} hsl={color.hsl} />
              ))}
            </div>
          </section>

          {/* Secondary Colors */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Secondary Colors</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Secondary colors provide depth and contrast. Use navy for backgrounds and large
              surfaces, teal for accents and supporting elements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {secondaryColors.map((color) => (
                <ColorCard key={color.name} name={color.name} colorClass={color.class} hex={color.hex} hsl={color.hsl} dark={color.dark} />
              ))}
            </div>
          </section>

          {/* Neutral Colors */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Neutral Colors</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Neutral colors provide balance and ensure readability. Use these for backgrounds,
              text, borders, and UI elements.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {neutralColors.map((color) => (
                <ColorCard key={color.name} name={color.name} colorClass={color.class} hex={color.hex} hsl={color.hsl} dark={color.dark} />
              ))}
            </div>
          </section>

          {/* Gradients */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Gradients</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Use gradients to create visual interest and depth. Apply them to hero sections,
              cards, and feature highlights.
            </p>
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark min-h-[200px] flex items-center justify-center">
                <p className="text-2xl font-bold text-white">Brand Cyan Gradient</p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-teal min-h-[200px] flex items-center justify-center">
                <p className="text-2xl font-bold text-white">Hero Gradient</p>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Colors;
