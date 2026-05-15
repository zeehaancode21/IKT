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
    {/* Subtle dot pattern background */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:opacity-10 pointer-events-none" />
    
    <div className="relative z-10 max-w-7xl mx-auto">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <p className="font-mono text-orange-600 dark:text-orange-400 text-sm tracking-widest uppercase mb-3 font-semibold">Our Process</p>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
          Engineering Workflow
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          A systematic approach from consultation to fabrication support.
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Gradient timeline line */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent dark:via-orange-500" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="group relative h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-orange-400/5 dark:bg-orange-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                
                <div className="relative h-full flex flex-col p-5 rounded-2xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-900/60 flex items-center justify-center text-xs font-bold text-orange-600 dark:text-orange-400 shadow-sm z-10">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon container – now with vibrant orange gradient and shadow */}
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <s.icon className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-gray-800 dark:text-white text-center text-sm mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {s.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed text-center flex-grow">
                    {s.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowSection;