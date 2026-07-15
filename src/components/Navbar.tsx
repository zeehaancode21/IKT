import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="section-container flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="flex flex-col items-start gap-0 cursor-pointer"
        >
          <div className="flex items-center gap-2">

            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="IKT Logo"
                className="w-8 h-8 object-contain rounded-sm"
                style={{
                  mixBlendMode: 'multiply',
                }}
              />

            </div>
            <span
              className={`font-display font-bold text-lg ${scrolled ? "text-primary" : "text-primary-foreground"
                }`}
            >
              I K Tangience
            </span>
          </div>
          <span
            className={`font-mono text-[10px] tracking-[2px] uppercase mt-0.5 ${scrolled ? "text-orange-600" : "text-orange-300"
              }`}
          >
            WE SPEAK FLUENT STEEL
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollToSection(e, l.href.substring(1))}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground/80"
                }`}
            >
              {l.label}
            </a>
          ))}
          <button
            className="btn-primary text-base flex items-center"
            onClick={() => window.open('mailto:info@iktangience.com')}
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-primary" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-border/50 mt-2">
          <div className="section-container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  scrollToSection(e, l.href.substring(1));
                  setMobileOpen(false);
                }}
                className="text-foreground text-sm font-medium py-2 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                scrollToSection(e, "contact");
                setMobileOpen(false);
              }}
              className="btn-primary text-sm !py-2.5 mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;