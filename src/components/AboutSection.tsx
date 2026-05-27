import AnimatedSection from "./AnimatedSection";
import { useInView, useCounter } from "@/hooks/useScrollAnimation";

const metrics = [
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Clients" },
  { value: 70, suffix: "+", label: "Engineering Professionals" },
];

const MetricCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, isInView } = useInView(0.3);
  const count = useCounter(value, 2000, isInView);
  return (
    <div ref={ref} className="text-center">
      <div className="metric-number">
        {count}{suffix}
      </div>
      <p className="text-secondary mt-2 font-body text-sm">{label}</p>
    </div>
  );
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-surface">
    <div className="section-container">
      <AnimatedSection className="max-w-3xl mb-16">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">About Us</p>
        <h2 className="section-title mb-6">A Specialized Structural Engineering Service Provider</h2>
        <p className="section-subtitle">
          IK TANGEINCE LLP is a forward-thinking steel structural design, drafting, and detailing firm, committed to excellence in the steel construction industry.       
          Since 2012, we have delivered over 200 projects across diverse sectors, adhering strictly to AISC standards, using advanced 3D modeling for precise and efficient designs.
          Our experienced team is dedicated to accuracy, reliability, and timely delivery, consistently exceeding client expectations while meeting ambitious project milestones.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-border">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
