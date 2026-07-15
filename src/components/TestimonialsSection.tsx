import { useState, useEffect, useRef, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Building2, MapPin } from "lucide-react";
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

const AUTOPLAY_MS = 4000;

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Timer bookkeeping so the progress bar and the actual auto-advance
  // stay perfectly in sync, including pause/resume from hover.
  const timeoutRef = useRef(null);
  const remainingRef = useRef(AUTOPLAY_MS);
  const startedAtRef = useRef(null);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = useCallback(() => {
    setIsAnimating(true);
    setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  // Whenever the slide changes, reset the countdown to a full interval.
  useEffect(() => {
    remainingRef.current = AUTOPLAY_MS;
  }, [idx]);

  // Core autoplay engine: starts/pauses/resumes based on isPaused,
  // and restarts fresh whenever the slide changes.
  useEffect(() => {
    if (isPaused) {
      clearTimeout(timeoutRef.current);
      return;
    }

    startedAtRef.current = Date.now();
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, remainingRef.current);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, isPaused]);

  const handleMouseEnter = () => {
    // freeze remaining time at the point of hover
    const elapsed = Date.now() - (startedAtRef.current || Date.now());
    remainingRef.current = Math.max(remainingRef.current - elapsed, 0);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleDotClick = (i) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIdx(i);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const t = testimonials[idx];

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '2.8s', animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }} />
        <div className="absolute bottom-10 right-1/3 w-2.5 h-2.5 bg-orange-400/20 rounded-full animate-ping" style={{ animationDuration: '3.7s', animationDelay: '0.3s' }} />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%23f97316' fill-opacity='0.03' d='M100 0L200 200H0L100 0z'/%3E%3C/svg%3E')] bg-repeat opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-orange-600 dark:text-orange-400 text-sm tracking-widest uppercase mb-3 font-semibold animate-pulse">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 relative inline-block group">
            What Our Clients Say
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            <span className="absolute -bottom-3 left-1/2 w-20 h-1 bg-orange-500 rounded-full blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out -translate-x-1/2" />
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {/* Card with glassmorphism effect and animated border */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Rotating border */}
              <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full rounded-3xl" style={{
                  background: 'conic-gradient(from var(--angle, 0deg), transparent, rgba(251, 146, 60, 0.3), transparent 60%)',
                  animation: 'spin 4s linear infinite'
                }} />
              </div>

              {/* Main card */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 transition-all duration-500 hover:shadow-orange-500/20 hover:scale-[1.01]">

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:via-orange-500/5 group-hover:to-orange-600/5 transition-all duration-700 pointer-events-none" />

                {/* Card shine effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Large decorative quote icon with animation */}
                <div className="absolute top-6 left-6 text-orange-200 dark:text-orange-800/30 animate-pulse" style={{ animationDuration: '3s' }}>
                  <Quote className="w-16 h-16" />
                </div>

                {/* Counter badge */}
                <div className="absolute top-6 right-6 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 text-xs font-bold px-3 py-1 rounded-full border border-orange-200 dark:border-orange-700">
                  {idx + 1} / {testimonials.length}
                </div>

                <div className="relative z-10">
                  {/* Stars with animation */}
                  <div className="flex justify-center gap-1.5 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 transition-all duration-300 ${
                          i < t.rating
                            ? "fill-orange-500 text-orange-500 animate-[starPop_0.5s_ease-out]"
                            : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                        }`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial text with fade animation */}
                  <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                    <blockquote className="text-center text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed font-medium mb-8 relative">
                      <span className="absolute -left-4 -top-2 text-4xl text-orange-400/30 dark:text-orange-500/20">"</span>
                      {t.text}
                      <span className="absolute -right-4 bottom-0 text-4xl text-orange-400/30 dark:text-orange-500/20">"</span>
                    </blockquote>

                    {/* Client info with slide animation */}
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <Building2 className="w-4 h-4" />
                        <span>{t.role}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{t.location}</span>
                      </div>
                      {t.project && (
                        <div className="inline-block mt-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-medium px-3 py-1 rounded-full border border-orange-200 dark:border-orange-700">
                          {t.project}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Autoplay loading bar - fills up over the interval, pauses on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-700/50 rounded-b-3xl overflow-hidden">
                  <div
                    key={idx}
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                    style={{
                      animation: `loadProgress ${AUTOPLAY_MS}ms linear forwards`,
                      animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation buttons with enhanced animations */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="group w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-[-5deg] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
              </button>

              {/* Center indicator with progress */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-20 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500"
                    style={{ width: `${((idx + 1) / testimonials.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                  {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>

              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="group w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-[5deg] disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
              </button>
            </div>

            {/* Dots indicator with animation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === idx
                      ? "w-10 h-2.5 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30"
                      : "w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-125"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes spin {
          to { --angle: 360deg; }
        }
        @keyframes starPop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes loadProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;