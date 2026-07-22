import AnimatedSection from "./AnimatedSection";
import { MessageSquare, BarChart3, Box, Ruler, CheckCircle, HardHat } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "Understanding project scope and requirements." },
  { icon: BarChart3, title: "Structural Analysis", desc: "Load calculations and structural evaluation." },
  { icon: Box, title: "3D Modeling", desc: "BIM-ready 3D model creation in Tekla." },
  { icon: Ruler, title: "Steel Detailing", desc: "Fabrication and erection drawing production." },
  { icon: CheckCircle, title: "Drawing Approval", desc: "Client review and revision cycles." },
  { icon: HardHat, title: "Fabrication Support", desc: "On-site coordination and RFI support." },
];

const WorkflowSection = () => (
  <section id="process" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    {/* Animated floating particles */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '2.8s', animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }} />
    </div>

    {/* Subtle dot pattern background */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:opacity-10 pointer-events-none" />
    
    <div className="relative z-10 max-w-7xl mx-auto">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <p className="font-mono text-orange-600 dark:text-orange-400 text-sm tracking-widest uppercase mb-3 font-semibold animate-pulse">
          Our Process
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] pb-1 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 relative inline-block group">
          Engineering Workflow
          {/* Animated underline */}
          <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
          <span className="absolute -bottom-3 left-1/2 w-20 h-1 bg-orange-500 rounded-full blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out -translate-x-1/2" />
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          A systematic approach from consultation to fabrication support.
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Gradient timeline line - animated sweep */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent dark:via-orange-500 animate-[sweepLine_4s_ease-in-out_infinite_alternate] bg-[length:300%_100%]" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="group relative h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-orange-400/5 dark:bg-orange-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                
                {/* Rotating border on hover */}
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-r from-orange-400/30 via-orange-500/30 to-orange-400/30 animate-[spin_4s_linear_infinite]" style={{ 
                    background: 'conic-gradient(from var(--angle, 0deg), transparent, rgba(251, 146, 60, 0.3), transparent 60%)',
                  }} />
                </div>
                
                <div className="relative h-full flex flex-col p-5 rounded-2xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] group-hover:shadow-orange-500/10">
                  
                  {/* Step number badge with bounce on hover */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/60 flex items-center justify-center text-xs font-bold text-orange-600 dark:text-orange-400 shadow-sm z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon container with enhanced animation */}
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-xl group-hover:shadow-orange-500/40 relative overflow-hidden">
                      {/* Icon shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <s.icon className="w-6 h-6 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-gray-800 dark:text-white text-center text-sm mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {s.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed text-center flex-grow transition-all duration-300 group-hover:translate-y-[-2px]">
                    {s.desc}
                  </p>

                  {/* Bottom accent bar on hover */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 group-hover:w-3/4 group-hover:left-[12.5%]" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>

    {/* Add custom keyframes for animations */}
    <style>{`
      @keyframes sweepLine {
        0% { background-position: 0% 0%; }
        100% { background-position: 100% 0%; }
      }
      @keyframes spin {
        to { --angle: 360deg; }
      }
      @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      .animate-sweep {
        animation: sweepLine 4s ease-in-out infinite alternate;
        background-size: 300% 100%;
      }
    `}</style>
  </section>
);

export default WorkflowSection;