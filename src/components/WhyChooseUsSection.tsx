import { Target, Shield, Zap, DollarSign, Cpu, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Target, title: "High Accuracy Detailing", desc: "Millimeter-precise detailing that minimizes fabrication errors." },
  { icon: Shield, title: "Code-Compliant Engineering Standards", desc: "Designed to meet AISC, AWS, NAAMM, and OSHA standards." },
  { icon: Zap, title: "Fast Delivery", desc: "Streamlined workflows for rapid turnaround on projects." },
  { icon: DollarSign, title: "Cost-Efficient Solutions", desc: "Optimized designs that reduce material waste and cost." },
  { icon: Cpu, title: "Advanced 3D Modeling", desc: "BIM-ready 3D models for clash-free construction." },
  { icon: Users, title: "Experienced Team", desc: "30+ engineers with deep domain expertise." },
];

const WhyChooseUsSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%238b5cf6' fill-opacity='0.03' d='M100 0L200 200H0L100 0z'/%3E%3C/svg%3E')] bg-repeat opacity-20 pointer-events-none" />
    
    <div className="relative z-10 max-w-7xl mx-auto">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <p className="font-mono text-indigo-600 dark:text-indigo-400 text-sm tracking-widest uppercase mb-3 font-semibold">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
          Built on Precision & Trust
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Engineering firms worldwide choose us for our commitment to quality, speed, and compliance.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.08}>
            <div className="group relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* 🟠 CHANGED: Hover border gradient – now uses orange */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-orange-500/20 group-hover:to-orange-500/20 transition-all duration-500 pointer-events-none" />
              
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  {/* 🟠 CHANGED: Icon background gradient – matches orange button */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <r.icon className="w-7 h-7 text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-xl text-gray-800 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;