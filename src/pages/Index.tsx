import { Link } from "react-router-dom";
import GridBackground from "@/components/GridBackground";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  const sections = [
    { number: "01", title: "Logo", path: "/logo" },
    { number: "02", title: "Typography", path: "/typography" },
    { number: "03", title: "Color", path: "/colors" },
    { number: "04", title: "Brand Voice", path: "/voice" },
    { number: "05", title: "Engineering", path: "/engineering" },
    { number: "06", title: "Manufacturing", path: "/manufacturing" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="lg:ml-64">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-teal">
          <GridBackground />
          <div className="relative z-10 max-w-5xl pt-20 lg:pt-0">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none tracking-tight mb-8">
              Brand
              <br />
              Guidelines
            </h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 lg:px-12 py-20 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-foreground leading-tight">
                Just like our technology, our brand is designed to constantly flex and grow.
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
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
        </section>

        {/* Contents */}
        <section className="px-6 lg:px-12 py-20 bg-secondary/20">
          <div className="max-w-7xl">
            <h2 className="text-xl font-medium text-foreground mb-12">Contents</h2>
            <div className="grid gap-0 divide-y divide-border">
              {sections.map((section) => (
                <Link
                  key={section.path}
                  to={section.path}
                  className="group py-8 flex items-center justify-between hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-6xl font-light text-primary/20 group-hover:text-primary/40 transition-colors w-24">
                      {section.number}
                    </span>
                    <h3 className="text-3xl font-light text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  <svg
                    className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
