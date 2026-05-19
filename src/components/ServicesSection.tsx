import AnimatedSection from "./AnimatedSection";

import analysisImg from "../images/Analysis.jpg";
import consultationImg from "../images/Consultation.jpg";
import detailingImg from "../images/Detailing.jpg";
import connectionImg from "../images/Connections.jpg";
import miscImg from "../images/Misc.jpg";
import estimationImg from "../images/Estimation.jpg";

const services = [
  {
    image: analysisImg,
    title: "Structural Steel Member Analysis",
    desc: "Comprehensive analysis of steel members including beams, columns, and bracing systems to ensure strength, stability, and compliance with design standards.",
  },
  {
    image: detailingImg,
    title: "Structural Steel Detailing",
    desc: "Accurate and detailed fabrication drawings with dimensions, sections, and BOM to support seamless manufacturing and construction workflows.",
  },
  {
    image: connectionImg,
    title: "Structural Steel Connection Design",
    desc: "Design and detailing of bolted and welded connections ensuring safety and compliance with AISC, IS, and Eurocode standards.",
  },
  {
    image: miscImg,
    title: "Miscellaneous Steel Detailing",
    desc: "Detailing of stairs, handrails, ladders, platforms, and other non-structural steel components with precision.",
  },
  {
    image: estimationImg,
    title: "3D Model-Based Estimation",
    desc: "Accurate quantity take-offs and cost estimation using advanced 3D BIM models for better planning.",
  },
  {
    image: consultationImg,
    title: "Consultation Services",
    desc: "Expert consultation for steel detailing, coordination, and constructability to improve efficiency and reduce errors.",
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="section-padding bg-background"
  >
    <div className="section-container">

      {/* HEADER */}
      <AnimatedSection className="max-w-3xl mb-16">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
          Our Services
        </p>

        <h2 className="section-title mb-6">
          Comprehensive Steel Engineering Solutions
        </h2>

        <p className="section-subtitle">
          From concept to fabrication-ready drawings,
          we cover every stage of the structural steel workflow.
        </p>
      </AnimatedSection>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((s, i) => (
          <AnimatedSection
            key={s.title}
            delay={i * 0.1}
          >

            {/* CARD */}
            <div className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl">

              {/* FULL IMAGE */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6">

                <h3 className="font-display text-2xl font-bold text-white mb-3 leading-tight">
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-200">
                  {s.desc}
                </p>

              </div>

            </div>

          </AnimatedSection>
        ))}

      </div>
    </div>
  </section>
);

export default ServicesSection;