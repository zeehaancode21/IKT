import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    role: "Project Manager, Barone Steel Fabricators",
    location: "New York, USA",
    text: "They kept postponing the shutdown of production, but we are finally in a position to hoist the structure. Everything looks very simple and well-executed. Thank you to you and your team for a job well done.",
    rating: 5,
    project: "6th Avenue RFP Tower"
  },
  {
    role: "Senior Steel Fabricator, Barone Steel Fabricators",
    location: "New York, USA",
    text: "Halletts Point required complex shop drawings for mixed‑use framing. The clarity of the steel detailing reduced fabrication errors by over 30%. A benchmark for quality.",
    rating: 5,
    project: "Halletts Point Residential Complex"
  },
  {
    role: "Structural Design Lead, Barone Steel Fabricators",
    location: "New York, USA",
    text: "55 Hudson Yards demanded high‑rise steel framing under a tight schedule. The engineering team delivered shop drawings ahead of every milestone. Exceptional reliability.",
    rating: 5,
    project: "55 Hudson Yards"
  },
  {
    role: "Construction Manager, Acadian Steel Fabricators",
    location: "Asheville, USA",
    text: "The Asheville ATC Facility required seismic‑resistant steel connections. Every detail was thought through – from fabrication to erection. Zero RFIs on structural steel.",
    rating: 5,
    project: "Asheville Air Traffic Control Tower"
  },
  {
    role: "Project Superintendent, Tri-state Iron Works Inc.",
    location: "Pittsburgh, USA",
    text: "For Brownsville Road Elementary, the educational steel structure came together seamlessly. The team anticipated field challenges and provided clear solutions. Great value.",
    rating: 4,
    project: "Brownsville Road Elementary School"
  },
  {
    role: "Project Manager, Tri-state Iron Works Inc.",
    location: "Georgia, USA",
    text: "The restaurant & retail steel package for Georgia Blue Southaven was delivered on time and under budget. The shop drawings were accurate, and the on‑site support was outstanding.",
    rating: 5,
    project: "Georgia Blue Southaven"
  },
  {
    role: "Project Director, Tri-state Iron Works Inc.",
    location: "Mississippi, USA",
    text: "Working on a military readiness center requires absolute precision. The steel detailing met all DoD specs, and the team’s responsiveness was second to none. Trusted partner.",
    rating: 5,
    project: "National Guard Readiness Center"
  },
  {
    role: "Senior Steel Fabricator, Tri-state Iron Works Inc.",
    location: "Memphis, USA",
    text: "The New Frayser Library’s architectural steel design blends form and function perfectly. The cantilevered roof details were executed exactly as envisioned. A civic landmark.",
    rating: 5,
    project: "New Frayser Library"
  },
  {
    role: "Senior Steel Erector, Trinity Steel",
    location: "Pennsylvania, USA",
    text: "Norwin Stadium’s roof structure is complex, but the erection drawings were so clear that we had zero bolt mismatches. That’s rare. This team knows sports construction.",
    rating: 5,
    project: "Norwin Stadium"
  }
];

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%23f97316' fill-opacity='0.03' d='M100 0L200 200H0L100 0z'/%3E%3C/svg%3E')] bg-repeat opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-orange-600 dark:text-orange-400 text-sm tracking-widest uppercase mb-3 font-semibold">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {/* Card with glassmorphism effect */}
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 transition-all duration-300 hover:shadow-orange-500/20">
              {/* Large decorative quote icon */}
              <div className="absolute top-6 left-6 text-orange-200 dark:text-orange-800/30">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < t.rating
                          ? "fill-orange-500 text-orange-500"
                          : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-center text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed font-medium mb-8">
                  "{t.text}"
                </blockquote>

                {/* Client info */}
                <div className="text-center">
                  {/* <p className="font-display font-bold text-gray-900 dark:text-white text-lg">
                    {t.name}
                  </p> */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="group w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center shadow-sm hover:shadow-md hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
              </button>
              <button
                onClick={next}
                className="group w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center shadow-sm hover:shadow-md hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === idx
                      ? "w-8 h-2 bg-orange-500"
                      : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;