import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import emuskiLogo from "@/assets/emuski-logo.jpg";

interface SidebarProps {
  sections?: { id: string; label: string }[];
}

const Sidebar = ({ sections = [] }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const mainNavItems = [
    { path: "/", label: "Brand Guidelines" },
    { path: "/logo", label: "Logo" },
    { path: "/typography", label: "Typography" },
    { path: "/colors", label: "Color" },
    { path: "/voice", label: "Brand Voice" },
    { path: "/engineering", label: "Engineering" },
    { path: "/manufacturing", label: "Manufacturing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      const currentSection = sectionElements.find((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border lg:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={emuskiLogo} alt="EMuski" className="h-8 w-8 rounded-full" />
            <span className="text-lg font-semibold">emuski</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-background border-r border-border z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          {/* Logo */}
          <Link to="/" className="hidden lg:flex items-center gap-3 mb-12">
            <img src={emuskiLogo} alt="EMuski" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-semibold">emuski</span>
          </Link>

          {/* Main Title */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl font-light text-foreground">
              {mainNavItems.find((item) => item.path === location.pathname)?.label || "Brand Guidelines"}
            </h2>
          </div>

          {/* Section Navigation */}
          {sections.length > 0 && (
            <nav className="flex-1 space-y-1 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-0 py-2 text-sm transition-colors ${
                    activeSection === section.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          )}

          {/* Bottom Navigation */}
          <nav className="mt-auto pt-8 border-t border-border space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-0 py-2 text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
