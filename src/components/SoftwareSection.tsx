import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const tools = [
  { name: "Tekla Structures", category: "3D Modeling & Detailing", icon: "🏗️", description: "BIM-ready structural modeling" },
  { name: "AutoCAD", category: "2D Drafting", icon: "📐", description: "Precision engineering drawings" },
];

const SoftwareSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Animated background with moving particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs - moving slowly */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float-slow"
          style={{ 
            top: '10%', 
            left: '5%',
            animationDuration: '12s',
          }} 
        />
        <div 
          className="absolute w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl animate-float-slower"
          style={{ 
            bottom: '15%', 
            right: '8%',
            animationDuration: '14s',
            animationDelay: '2s',
          }} 
        />
        <div 
          className="absolute w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ 
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDuration: '8s',
          }} 
        />
        
        {/* Small moving dots - subtle */}
        <div className="absolute top-10 left-20 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-dot-move" style={{ animationDuration: '8s' }} />
        <div className="absolute top-20 right-32 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-dot-move" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-40 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-dot-move" style={{ animationDuration: '9s', animationDelay: '2s' }} />
        <div className="absolute bottom-24 right-20 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-dot-move" style={{ animationDuration: '11s', animationDelay: '0.5s' }} />

        {/* Mouse-following glow */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full filter blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: `calc(50% + ${mousePosition.x}px)`,
            top: `calc(50% + ${mousePosition.y}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with enhanced animations */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-6 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-sm font-mono tracking-[3px] uppercase font-semibold">
              Software & Tools
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight animate-fade-in-up">
            Industry-Leading
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Engineering Software
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We leverage the most advanced structural engineering software to deliver precise, BIM-ready outputs.
          </p>
        </AnimatedSection>

        {/* Cards with enhanced animations */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {tools.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="group relative w-72 sm:w-80">
                {/* Main card */}
                <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="relative h-full w-full rounded-2xl p-8 text-center bg-gradient-to-br from-slate-800/90 via-gray-900/90 to-slate-900/90 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
                    
                    {/* Icon and Category together */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-purple-400/30">
                          <span className="group-hover:animate-bounce">{t.icon}</span>
                        </div>
                        {/* Pulsing ring */}
                        <span className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '2s' }} />
                      </div>
                      
                      {/* Category badge next to icon */}
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
                        <p className="font-mono text-xs tracking-widest uppercase text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                          {t.category}
                        </p>
                      </div>
                    </div>

                    {/* Tool name */}
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors duration-300 mb-2">
                      {t.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {t.description}
                    </p>

                    {/* Decorative line */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-500" />

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 blur-xl transition duration-700" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-gray-500 text-xs font-mono">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500" />
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-purple-400/60">Trusted by leading engineering firms worldwide</span>
              <span className="w-1 h-1 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(5deg); }
          50% { transform: translate(-20px, -40px) rotate(-5deg); }
          75% { transform: translate(40px, -10px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(-40px, 30px) rotate(-8deg); }
          50% { transform: translate(20px, 50px) rotate(8deg); }
          75% { transform: translate(-30px, 20px) rotate(-5deg); }
        }
        .animate-float-slower {
          animation: float-slower 14s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        @keyframes dot-move {
          0% { transform: translate(0, 0); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translate(80px, -60px); opacity: 0; }
        }
        .animate-dot-move {
          animation: dot-move 10s linear infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
        
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default SoftwareSection;