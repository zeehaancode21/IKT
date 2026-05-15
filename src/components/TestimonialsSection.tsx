import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Skip Brock",
    role: "339 W Olive Ave, Memphis, TN 38106, United States",
    text: "They kept postponing the shutdown of production, but we are finally in a position to hoist the structure. Everything looks very simple and well-executed. Thank you to you and your team for a job well done.",
    rating: 5,
  },
  {
    name: "Skip Brock",
    role: "339 W Olive Ave, Memphis, TN 38106, United States",
    text: "They kept postponing the shutdown of production, but we are now ready to proceed with the structural hoisting. The execution is clear and well-coordinated. Thank you and your team for the excellent work.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section className="section-padding bg-surface-elevated">
      <div className="section-container">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-body">
              "{t.text}"
            </blockquote>
            <p className="font-display font-bold text-primary">{t.name}</p>
            <p className="text-secondary text-sm">{t.role}</p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
