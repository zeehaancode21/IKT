import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import analysisImg from "../images/Analysis.jpg";
import consultationImg from "../images/Consultation.jpg";
import detailingImg from "../images/Detailing.jpg";
import connectionImg from "../images/Connections.jpg";
import miscImg from "../images/Misc.jpg";
import estimationImg from "../images/Estimation.jpg";

import analysisModalImg from "../images/detailed/analysis.jpg";
import detailedModalImg from "../images/detailed/detailing.jpg";
import designModelImg from "../images/detailed/design.jpg";
import miscModalImg from "../images/detailed/misc.jpg";
import estimationModalImg from "../images/detailed/estimation.jpg";
import consultationModalImg from "../images/detailed/services.jpg";


const services = [
  {
    image: analysisImg,
    modalImage: analysisModalImg, 
    title: "Structural Steel Member Analysis",
    desc: "Comprehensive analysis of steel members including beams, columns, and bracing systems to ensure strength, stability, and compliance with design standards.",
    icon: "🔬",
    detailedDesc: "Our structural steel member analysis service ensures every component of your steel structure meets the highest standards of safety and performance. Using advanced engineering software and proven methodologies, we evaluate beams, columns, bracing systems, and connections for optimal load-bearing capacity, stability, and compliance with international codes including AISC, IS, and Eurocode. Our comprehensive analysis identifies potential issues early, enabling cost-effective design modifications and ensuring structural integrity throughout the building's lifecycle.",
    keyFeatures: [
      "Full structural load analysis and stress testing",
      "Compliance with AISC, IS, and Eurocode standards",
      "Optimization of member sizes for cost efficiency",
      "Advanced software modeling and simulation",
      "Detailed structural reports and documentation"
    ],
    deliverables: "Structural analysis reports, load calculation sheets, design optimization recommendations, and compliance certificates."
  },
  {
    image: detailingImg,
    modalImage: detailedModalImg, 
    title: "Structural Steel Detailing",
    desc: "Accurate and detailed fabrication drawings with dimensions, sections, and BOM to support seamless manufacturing and construction workflows.",
    icon: "📐",
    detailedDesc: "Our structural steel detailing service transforms engineering designs into precise, fabrication-ready drawings. We create comprehensive shop and erection drawings that serve as the blueprint for your entire steel construction project. Every connection, dimension, and section is meticulously detailed to ensure seamless fabrication, assembly, and installation. Our detailing process identifies potential conflicts early, reducing costly field modifications and ensuring project timelines are met.",
    keyFeatures: [
      "Precise shop and erection drawings",
      "Comprehensive bill of materials (BOM)",
      "3D model coordination with BIM workflow",
      "AISC and industry standard compliance",
      "RFI and change management support"
    ],
    deliverables: "Shop drawings, erection drawings, bolt lists, material take-offs, and 3D BIM models."
  },
  {
    image: connectionImg,
    modalImage: designModelImg, 
    title: "Structural Steel Connection Design",
    desc: "Design and detailing of bolted and welded connections ensuring safety and compliance with AISC, IS, and Eurocode standards.",
    icon: "🔗",
    detailedDesc: "Our connection design service ensures that every bolted and welded joint in your steel structure meets rigorous safety standards while optimizing material usage and installation efficiency. We specialize in designing connections that balance structural integrity, constructability, and cost-effectiveness. Our team follows AISC, IS, and Eurocode standards to deliver connection solutions that integrate seamlessly with your overall structural design, reducing complexity and accelerating project delivery.",
    keyFeatures: [
      "Bolted and welded connection design",
      "Connection optimization for cost and performance",
      "Compliance with international standards",
      "Detailed connection drawings and specifications",
      "Structural integrity and fatigue analysis"
    ],
    deliverables: "Connection design calculations, detailed connection drawings, connection schedules, and fabrication instructions."
  },
  {
    image: miscImg,
    modalImage: miscModalImg, 
    title: "Miscellaneous Steel Detailing",
    desc: "Detailing of stairs, handrails, ladders, platforms, and other non-structural steel components with precision.",
    icon: "⚙️",
    detailedDesc: "Our miscellaneous steel detailing service ensures that every secondary steel component in your project is designed and detailed with the same precision as your primary structure. From stairs and handrails to ladders, platforms, and decorative elements, we create detailed drawings that ensure safe installation, aesthetic appeal, and structural integrity. Our team works closely with architects and engineers to ensure that these components seamlessly integrate with your overall design vision.",
    keyFeatures: [
      "Precision detailing of secondary steel components",
      "Aesthetic and functional design integration",
      "Compliance with safety codes and standards",
      "Coordination with architectural elements",
      "Fabrication-ready drawings"
    ],
    deliverables: "Detailed shop drawings for stairs, handrails, ladders, platforms, canopies, and other miscellaneous steel components."
  },
  {
    image: estimationImg,
    modalImage: estimationModalImg, 
    title: "3D Model-Based Estimation",
    desc: "Accurate quantity take-offs and cost estimation using advanced 3D BIM models for better planning.",
    icon: "📊",
    detailedDesc: "Our 3D model-based estimation service leverages advanced BIM technology to deliver accurate quantity take-offs and cost projections that form the foundation of successful project planning. By extracting precise data from 3D models, we provide you with comprehensive material quantities, labor requirements, and cost estimates that enable better project planning, budget control, and resource allocation. Our transparent estimation process minimizes surprises and helps you make informed decisions from the earliest project stages.",
    keyFeatures: [
      "Automated quantity take-offs from 3D models",
      "Accurate material and cost estimation",
      "BIM-based project planning",
      "Budget forecasting and cost control",
      "Transparent and detailed reports"
    ],
    deliverables: "Quantity take-off reports, cost estimation sheets, material schedules, and budget forecasts."
  },
  {
    image: consultationImg,
    modalImage: consultationModalImg, 
    title: "Consultation Services",
    desc: "Expert consultation for steel detailing, coordination, and constructability to improve efficiency and reduce errors.",
    icon: "💡",
    detailedDesc: "Our consultation services provide you with expert guidance on every aspect of your steel construction project. From design review and detailing coordination to constructability analysis and quality assurance, our experienced team helps you navigate complex project challenges with confidence. We identify opportunities for cost savings, schedule acceleration, and quality improvement while ensuring your project meets all applicable codes and standards. Partner with us to reduce risks and achieve project excellence.",
    keyFeatures: [
      "Design review and optimization",
      "Detailing and coordination support",
      "Constructability analysis",
      "Quality assurance and quality control",
      "Project risk identification and mitigation"
    ],
    deliverables: "Consultation reports, design recommendations, coordination plans, and quality assurance guidelines."
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section
      id="services"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-orange-200/20 rounded-full filter blur-3xl animate-float-slow"
          style={{ 
            top: '10%', 
            left: '5%',
            animationDuration: '12s',
          }} 
        />
        <div 
          className="absolute w-80 h-80 bg-amber-200/20 rounded-full filter blur-3xl animate-float-slower"
          style={{ 
            bottom: '15%', 
            right: '8%',
            animationDuration: '14s',
            animationDelay: '2s',
          }} 
        />
        
        <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-dot-move" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-1/3 left-20 w-1.5 h-1.5 bg-amber-400/20 rounded-full animate-dot-move" style={{ animationDuration: '12s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-400/20 rounded-full animate-dot-move" style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER — now centered */}
        <AnimatedSection className="max-w-3xl mb-16 mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-sm font-mono tracking-[3px] uppercase font-semibold">Our Services</span>
          </div>

          <h2 className="section-title mb-6 animate-fade-in-up">
            Comprehensive Steel Engineering Solutions
          </h2>

          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            From concept to fabrication-ready drawings,
            we cover every stage of the structural steel workflow.
          </p>

          <div className="mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-header-underline" />
        </AnimatedSection>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection
              key={s.title}
              delay={i * 0.1}
            >
              <div 
                className="group relative h-[250px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(s)}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy" 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/10 transition-all duration-500" />

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/30 via-amber-500/30 to-orange-500/30 blur-sm" />
                  <div className="absolute inset-[1px] rounded-2xl bg-transparent" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                  <div className="mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-4px]">
                    <span className="text-3xl md:text-4xl group-hover:animate-bounce-soft inline-block">
                      {s.icon}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 leading-tight transition-all duration-300 group-hover:text-orange-400">
                    {s.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-200/90 group-hover:text-white transition-colors duration-300 line-clamp-3">
                    {s.desc}
                  </p>

                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 mt-4 rounded-full group-hover:w-20 transition-all duration-500" />

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 tracking-wider uppercase">
                      Learn More
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedService && createPortal(
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300"
            onClick={closeModal}
          >
            <div 
              className="relative flex w-full max-w-3xl max-h-[94vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-modal-in md:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-[10000] flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Compact header: small thumbnail + title, no full-width banner eating vertical space */}
              <div className="flex shrink-0 items-center gap-3 border-b border-gray-100 px-5 py-4 pr-14 md:px-6">
                <img
                  src={selectedService.modalImage}
                  alt={selectedService.title}
                  className="h-12 w-12 md:h-14 md:w-14 shrink-0 rounded-xl object-cover shadow-sm"
                />
                <div className="min-w-0">
                  <span className="text-xl md:text-2xl leading-none">{selectedService.icon}</span>
                  <h3 className="mt-0.5 truncate text-base md:text-lg font-bold leading-tight text-gray-900">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Content — two columns on desktop so it fits in one view without scrolling */}
              <div className="modal-scroll overflow-y-auto px-5 py-4 md:px-6 md:py-5">
                <div className="grid gap-5 md:grid-cols-5">
                  {/* Overview */}
                  <div className="md:col-span-3">
                    <h4 className="mb-1 text-[11px] font-mono uppercase tracking-wider text-orange-500">Overview</h4>
                    <p className="text-[13px] md:text-sm leading-snug text-gray-700">
                      {selectedService.detailedDesc}
                    </p>
                  </div>

                  {/* Key Features + Deliverables */}
                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <h4 className="mb-1.5 text-[11px] font-mono uppercase tracking-wider text-orange-500">Key Features</h4>
                      <ul className="space-y-1">
                        {selectedService.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[13px] leading-snug text-gray-600">
                            <span className="mt-0.5 shrink-0 text-orange-500">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 p-3">
                      <h4 className="mb-0.5 text-[11px] font-mono uppercase tracking-wider text-orange-500">Deliverables</h4>
                      <p className="text-[13px] leading-snug text-gray-700">{selectedService.deliverables}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA stays pinned to the bottom, always visible without scrolling */}
              <div className="shrink-0 border-t border-gray-100 bg-white px-5 py-3 md:px-6">
                <button
                  onClick={() => {
                    closeModal();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <span>Get Started with This Service</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-xs text-gray-400 font-mono">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-orange-400" />
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-gray-500">Trusted by leading engineering firms</span>
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
          50% { transform: scale(1.15); }
        }
        .animate-bounce-soft {
          animation: bounce-soft 1s ease-in-out;
        }
        
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes header-underline {
          from { width: 0; opacity: 0; }
          to { width: 4rem; opacity: 1; }
        }
        .animate-header-underline {
          animation: header-underline 0.9s ease-out 0.4s both;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .modal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(249, 115, 22, 0.25);
          border-radius: 9999px;
        }
        .modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(249, 115, 22, 0.25) transparent;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;