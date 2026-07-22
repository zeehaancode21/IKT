import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
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
      setActiveSection(sectionId);
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
            {/* Animated ring behind logo */}
            <div className={`absolute inset-0 rounded-full border-2 border-orange-500/20 animate-pulse-slow ${scrolled ? 'opacity-50' : 'opacity-30'}`} />
            <img
              src="/logo.svg"
              alt="IKT Logo"
              className="w-12 h-12 object-contain rounded-sm relative z-10 transition-transform duration-300 group-hover:scale-110"
              style={{
                mixBlendMode: 'multiply',
              }}
            />
          </div>
          <div className="flex flex-col items-start gap-0">
            <span
              className={`font-display font-bold text-lg tracking-tight transition-all duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              } group-hover:text-orange-500`}
            >
              I K Tangience
            </span>
            <span
              className={`font-mono text-[10px] tracking-[3px] uppercase mt-0.5 transition-all duration-300 ${
                scrolled ? "text-orange-600" : "text-orange-300"
              } group-hover:text-orange-400`}
            >
              WE SPEAK FLUENT STEEL
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href.substring(1);
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollToSection(e, l.href.substring(1))}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  scrolled 
                    ? "text-gray-600 hover:text-orange-600" 
                    : "text-white/80 hover:text-white"
                } ${isActive ? 'text-orange-500' : ''}`}
              >
                {l.label}
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full animate-slide-in" />
                )}
                {/* Hover underline */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                  !isActive && 'group-hover:w-4'
                }`} />
              </a>
            );
          })}
          
          {/* CTA Button */}
          <button
            className={`ml-4 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
              scrolled
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105"
                : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:scale-105"
            }`}
            onClick={() => window.open('mailto:info@iktangience.com')}
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
            scrolled 
              ? "text-gray-900 hover:bg-gray-100" 
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl border-t border-gray-100" 
            : "bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.substring(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    scrollToSection(e, l.href.substring(1));
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    scrolled 
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50" 
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  } ${isActive ? 'text-orange-500 bg-orange-50/10' : ''}`}
                >
                  {l.label}
                  {isActive && (
                    <span className="ml-2 text-orange-500">•</span>
                  )}
                </a>
              );
            })}
            
            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                scrollToSection(e, "contact");
                setMobileOpen(false);
              }}
              className={`mt-2 px-4 py-3 rounded-full text-sm font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                scrolled
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        @keyframes slide-in {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 24px;
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;