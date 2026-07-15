import { Target, Shield, Zap, DollarSign, Cpu, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Target, title: "High Accuracy Detailing", desc: "Millimeter-precise detailing that minimizes fabrication errors." },
  { icon: Shield, title: "Code-Compliant Engineering Standards", desc: "Designed to meet AISC, AWS, NAAMM, and OSHA standards." },
  { icon: Zap, title: "Fast Delivery", desc: "Streamlined workflows for rapid turnaround on projects." },
  { icon: DollarSign, title: "Cost-Efficient Solutions", desc: "Optimized designs that reduce material waste and cost." },
  { icon: Cpu, title: "Advanced 3D Modeling", desc: "BIM-ready 3D models for clash-free construction." },
  { icon: Users, title: "Experienced Team", desc: "70+ engineers with deep domain expertise." },
];

const WhyChooseUsSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8">
    {/* Animated floating particles - orange theme */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 right-20 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '2.8s', animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }} />
      <div className="absolute bottom-10 right-1/3 w-2.5 h-2.5 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '3.7s', animationDelay: '0.3s' }} />
    </div>

    {/* Background pattern - orange tint */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%23f97316' fill-opacity='0.03' d='M100 0L200 200H0L100 0z'/%3E%3C/svg%3E')] bg-repeat opacity-20 pointer-events-none" />
    
    <div className="relative z-10 max-w-7xl mx-auto">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <p className="font-mono text-orange-600 dark:text-orange-400 text-sm tracking-widest uppercase mb-3 font-semibold animate-pulse">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 relative inline-block group">
          Built on Precision & Trust
          {/* Animated underline - orange */}
          <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
          <span className="absolute -bottom-3 left-1/2 w-20 h-1 bg-orange-500 rounded-full blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out -translate-x-1/2" />
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Engineering firms worldwide choose us for our commitment to quality, speed, and compliance.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.08}>
            <div className="group relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02]">
              {/* Rotating border on hover - orange */}
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full rounded-2xl" style={{ 
                  background: 'conic-gradient(from var(--angle, 0deg), transparent, rgba(251, 146, 60, 0.3), transparent 60%)',
                  animation: 'spin 4s linear infinite'
                }} />
              </div>

              {/* Gradient background on hover - orange */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:via-orange-500/5 group-hover:to-orange-600/5 transition-all duration-500 pointer-events-none" />
              
              {/* Card shine effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative flex gap-5">
                <div className="flex-shrink-0">
                  {/* Icon container with enhanced animation - orange */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-orange-500/30 relative overflow-hidden">
                    {/* Icon shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <r.icon className="w-7 h-7 text-orange-600 dark:text-orange-400 transition-all duration-300 group-hover:text-orange-700 dark:group-hover:text-orange-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-gray-800 dark:text-white mb-2 transition-all duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:translate-x-1">
                    {r.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-all duration-300 group-hover:translate-x-1">
                    {r.desc}
                  </p>
                </div>
              </div>

              {/* Bottom accent bar - orange gradient */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-500 group-hover:w-3/4 group-hover:left-[12.5%]" />
              
              {/* Corner accent dots - orange */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-orange-400/0 group-hover:bg-orange-400/50 transition-all duration-300" />
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-orange-400/0 group-hover:bg-orange-400/50 transition-all duration-300 delay-100" />
              
              {/* Top-left corner accent */}
              <div className="absolute top-3 left-3 w-1 h-1 rounded-full bg-orange-400/0 group-hover:bg-orange-400/30 transition-all duration-300 delay-150" />
              <div className="absolute bottom-3 right-3 w-1 h-1 rounded-full bg-orange-400/0 group-hover:bg-orange-400/30 transition-all duration-300 delay-200" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>

    {/* Custom styles */}
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
  </section>
);

export default WhyChooseUsSection;