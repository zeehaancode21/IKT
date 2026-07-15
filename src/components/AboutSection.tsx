import AnimatedSection from "./AnimatedSection";
import { useInView, useCounter } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const metrics = [
  { value: 200, suffix: "+", label: "Projects Completed", icon: "🏗️" },
  { value: 14, suffix: "+", label: "Years Experience", icon: "📅" },
  { value: 20, suffix: "+", label: "Clients", icon: "🤝" },
  { value: 72, suffix: "+", label: "Engineering Professionals", icon: "👷" },
];

const MetricCard = ({ value, suffix, label, icon }: { value: number; suffix: string; label: string; icon: string }) => {
  const { ref, isInView } = useInView(0.3);
  const count = useCounter(value, 2000, isInView);
  
  return (
    <div 
      ref={ref} 
      className="group relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-500 group-hover:animate-bounce-soft">
        {icon}
      </div>
      
      {/* Number */}
      <div className="metric-number bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      
      {/* Label */}
      <p className="text-gray-400 mt-2 font-body text-sm group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </p>
      
      {/* Decorative line */}
      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-3 rounded-full group-hover:w-12 transition-all duration-500" />
    </div>
  );
};

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-100 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-orange-200/20 rounded-full filter blur-3xl animate-float-slow"
          style={{ 
            top: '10%', 
            right: '5%',
            animationDuration: '12s',
          }} 
        />
        <div 
          className="absolute w-80 h-80 bg-amber-200/20 rounded-full filter blur-3xl animate-float-slower"
          style={{ 
            bottom: '15%', 
            left: '8%',
            animationDuration: '14s',
            animationDelay: '2s',
          }} 
        />
        
        {/* Subtle moving dots */}
        <div className="absolute top-1/4 left-10 w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-dot-move" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-1/3 right-10 w-1.5 h-1.5 bg-amber-400/20 rounded-full animate-dot-move" style={{ animationDuration: '12s', animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-orange-400/20 rounded-full animate-dot-move" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        
        {/* Mouse-following glow - subtle */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-full filter blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: `calc(50% + ${mousePosition.x}px)`,
            top: `calc(50% + ${mousePosition.y}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with enhanced animations */}
        <AnimatedSection className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-sm font-mono tracking-[3px] uppercase font-semibold">About Us</span>
          </div>

          <h2 className="section-title mb-6 animate-fade-in-up">
            A Specialized Structural Engineering Service Provider
          </h2>
          
          {/* Enhanced Description with better visual appeal */}
          <div className="relative animate-fade-in-up animation-delay-200">
            {/* Decorative quote mark */}
            <div className="absolute -top-2 -left-2 text-6xl text-orange-500/10 font-serif select-none">"</div>
            
            <div className="space-y-4 relative z-10">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg pl-6 border-l-4 border-orange-400/50">
                <span className="font-semibold text-gray-800">IK TANGEINCE LLP</span> is a forward-thinking steel structural design, drafting, and detailing firm, committed to excellence in the steel construction industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6">
                <div className="flex items-start gap-3 group">
                  <span className="text-orange-500 text-lg mt-0.5">▸</span>
                  <span className="text-gray-600 text-sm md:text-base">
                    <span className="font-semibold text-gray-800">200+ Projects</span> delivered across diverse sectors since 2012
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-orange-500 text-lg mt-0.5">▸</span>
                  <span className="text-gray-600 text-sm md:text-base">
                    Strict adherence to <span className="font-semibold text-gray-800">AISC standards</span> and industry best practices
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-orange-500 text-lg mt-0.5">▸</span>
                  <span className="text-gray-600 text-sm md:text-base">
                    Advanced <span className="font-semibold text-gray-800">3D modeling</span> for precise and efficient designs
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-orange-500 text-lg mt-0.5">▸</span>
                  <span className="text-gray-600 text-sm md:text-base">
                    <span className="font-semibold text-gray-800">Dedicated team</span> committed to accuracy, reliability, and timely delivery
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base md:text-lg pl-6 border-l-4 border-amber-400/50 bg-gradient-to-r from-orange-50/50 to-transparent p-4 rounded-r-lg">
                Our experienced team consistently exceeds client expectations while meeting ambitious project milestones.
              </p>
            </div>
            
            {/* Decorative closing quote mark */}
            <div className="absolute -bottom-2 -right-2 text-6xl text-orange-500/10 font-serif select-none rotate-180">"</div>
          </div>
        </AnimatedSection>

        {/* Metrics with enhanced animations */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-gray-200/50">
            {metrics.map((m, index) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </AnimatedSection>

        {/* Trust indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-xs text-gray-400 font-mono">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-orange-400" />
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-gray-500">Committed to excellence since 2012</span>
              <span className="w-1 h-1 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-orange-400" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(20px, -15px) rotate(3deg); }
          50% { transform: translate(-15px, -25px) rotate(-3deg); }
          75% { transform: translate(25px, -10px) rotate(2deg); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(-25px, 20px) rotate(-5deg); }
          50% { transform: translate(15px, 30px) rotate(5deg); }
          75% { transform: translate(-20px, 15px) rotate(-3deg); }
        }
        .animate-float-slower {
          animation: float-slower 14s ease-in-out infinite;
        }
        
        @keyframes dot-move {
          0% { transform: translate(0, 0); opacity: 0; }
          25% { opacity: 0.5; }
          75% { opacity: 0.5; }
          100% { transform: translate(60px, -40px); opacity: 0; }
        }
        .animate-dot-move {
          animation: dot-move 10s linear infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-bounce-soft {
          animation: bounce-soft 1s ease-in-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        /* Metric number styling */
        .metric-number {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.02em;
        }
        
        @media (min-width: 768px) {
          .metric-number {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;