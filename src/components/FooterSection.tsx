import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail, ChevronRight, ArrowUp, Building2, Shield, Clock, Award, MessageCircle, X, Send, PhoneCall } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

const FooterSection = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [expertsOnline, setExpertsOnline] = useState(() => Math.floor(Math.random() * 6) + 2); 
  const chatRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [toastId, setToastId] = useState<string | number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!showChat) return;

    const interval = setInterval(() => {
      setExpertsOnline(Math.floor(Math.random() * 6) + 2);
    }, 8000);

    return () => clearInterval(interval);
  }, [showChat]);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatRef.current && 
        !chatRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowChat(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close toast when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const toastElement = document.querySelector('[data-sonner-toast]');
      if (toastElement && !toastElement.contains(event.target as Node)) {
        toast.dismiss();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      scrollToTop();
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowChat(false);
  };

  // Auto-dismiss toast after 4 seconds
  const showAutoDismissToast = (message: string, description?: string) => {
    const id = toast.info(message, {
      description: description,
      duration: 4000,
      style: {
        background: "#1e293b",
        color: "#fff",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        borderRadius: "12px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      },
      className: "shadow-xl",
    });
    setToastId(id);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '2.8s', animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }} />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%233b82f6' fill-opacity='0.02' d='M100 0L200 200H0L100 0z'/%3E%3C/svg%3E')] bg-repeat opacity-20 pointer-events-none" />
      
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo-footer.png"
                  alt="IKT Logo"
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/logo.svg";
                  }}
                />
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">
                IK Tangience <span className="text-white-500">LLP</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Precision structural steel design, drafting, and detailing services for the global construction industry.
            </p>
            {/* Trust indicators with enhanced animations */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 text-xs">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showAutoDismissToast("ISO Certified", "Quality Management System");
                  }}
                  className="flex items-center gap-1.5 text-gray-500 hover:text-orange-400 transition-all duration-300 group cursor-pointer"
                >
                  <span className="relative">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse absolute -left-2 top-1/2 -translate-y-1/2" />
                    <Shield className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">ISO Certified</span>
                </a>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showAutoDismissToast("24/7 Support", "Always here to help you");
                  }}
                  className="flex items-center gap-1.5 text-gray-500 hover:text-orange-400 transition-all duration-300 group cursor-pointer"
                >
                  <span className="relative">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse absolute -left-2 top-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }} />
                    <Clock className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">24/7 Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={l === "Home" ? "#home" : `#${l.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, l === "Home" ? "#home" : `#${l.toLowerCase()}`)}
                    className="group/link flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:translate-x-2"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-all duration-300 -translate-x-2 group-hover/link:translate-x-0 text-orange-500" />
                    <span>{l}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - All links go to #services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {["Steel Design", "Steel Detailing", "3D Modeling", "Shop Drawings", "Connection Design"].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, "#services")}
                    className="group/service block text-gray-400 text-sm transition-all duration-300 hover:text-orange-400 hover:translate-x-1 cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - All links go to #contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-orange-400 transition-all duration-300 group cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Mysuru, Karnataka 570001</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange-400 transition-all duration-300 group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+91 996 418 2464</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange-400 transition-all duration-300 group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">info@iktangience.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with enhanced animations */}
        <div className="relative border-t border-white/10 pt-8">
          {/* Animated gradient line */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent animate-pulse" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright with hover animation */}
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-gray-500 text-sm hover:text-orange-400 transition-all duration-300 group cursor-pointer flex items-center gap-2"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                © 2012 IK Tangience Engineering. All rights reserved.
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">✨</span>
            </a>
            
            <div className="flex items-center gap-6 text-xs">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  showAutoDismissToast("Privacy Policy", "Your data is secure with us");
                }}
                className="text-gray-500 hover:text-orange-400 transition-all duration-300 group relative"
              >
                <span className="relative">
                  Privacy Policy
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                </span>
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  showAutoDismissToast("Terms of Service", "Terms and conditions apply");
                }}
                className="text-gray-500 hover:text-orange-400 transition-all duration-300 group relative"
              >
                <span className="relative">
                  Terms of Service
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                </span>
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  showAutoDismissToast("Sitemap", "Navigate our website easily");
                }}
                className="text-gray-500 hover:text-orange-400 transition-all duration-300 group relative"
              >
                <span className="relative">
                  Sitemap
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Decorative bottom gradient */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-20 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 transition-all duration-500 hover:shadow-orange-500/50 hover:scale-110 group ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto transition-transform duration-300 group-hover:-translate-y-1" />
      </button>

      {/* Professional Floating Chat Button with Call/Text Options */}
      <div className="fixed bottom-24 right-8 z-40">
        {/* Chat Popup */}
        <div 
          ref={chatRef}
          className={`absolute bottom-16 right-0 mb-2 w-80 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-500/20 overflow-hidden transition-all duration-300 ease-out transform origin-bottom-right ${
            showChat ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          }`}
        >
          {/* Chat header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-semibold text-sm block">Chat with us</span>
                <span className="text-orange-100/70 text-xs">We're here to help!</span>
              </div>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Chat body */}
          <div className="p-5 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-orange-400 text-sm">👋</span>
              </div>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Hi there! How can we assist you with your steel detailing needs today?
                </p>
                <span className="text-gray-500 text-xs mt-1 inline-block">Online • Just now</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, "#contact");
                  setShowChat(false);
                }}
                className="flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
              >
                <Send className="w-4 h-4" />
                Send us a message
              </a>
              <a
                href="tel:+919964182464"
                className="flex items-center justify-center gap-2 text-sm bg-white/5 hover:bg-white/10 text-gray-300 px-4 py-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-orange-500/30"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                Call us now
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 border-2 border-slate-800 flex items-center justify-center text-[10px]">👨‍💼</div>
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border-2 border-slate-800 flex items-center justify-center text-[10px]">👩‍💻</div>
                <div className="w-6 h-6 rounded-full bg-green-500/20 border-2 border-slate-800 flex items-center justify-center text-[10px]">🧑‍🏭</div>
              </div>
              <p className="text-gray-500 text-xs">
                <span className="text-green-400">●</span> {expertsOnline} expert{expertsOnline !== 1 ? 's' : ''} online
              </p>
            </div>
          </div>
        </div>

        {/* Chat Button - Professional Design */}
        <button
          ref={buttonRef}
          onClick={() => setShowChat(!showChat)}
          className="relative group w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/40 transition-all duration-300 hover:scale-110 hover:shadow-orange-500/60 flex items-center justify-center"
        >
          {/* Pulsing rings */}
          <span className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping" style={{ animationDuration: '2s' }} />
          <span className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          <span className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          
          {/* Icon with rotation */}
          <div className="relative w-7 h-7">
            <MessageCircle
              className={`w-7 h-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                showChat ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'
              }`}
            />
            <X
              className={`w-7 h-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                showChat ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'
              }`}
            />
          </div>
          
          {/* Notification dot with pulse */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </span>

          {/* Tooltip on hover */}
          <span className="absolute -top-12 right-1/2 translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10">
            Need help? Chat with us
          </span>
        </button>
      </div>

      <style>{`
        @keyframes spin {
          to { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;