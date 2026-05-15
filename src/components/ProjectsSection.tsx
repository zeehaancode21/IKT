import { useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import warehouseImg from "@/assets/project-warehouse.jpg";
import bridgeImg from "@/assets/project-bridge.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import shedImg from "@/assets/project-shed.jpg";
import stadiumImg from "@/assets/project-stadium.jpg";
import highriseImg from "@/assets/project-highrise.jpg";

const projects = [
  { img: warehouseImg, name: "Industrial Warehouse Complex", location: "Houston, TX", services: "Design, Detailing, Shop Drawings" },
  { img: bridgeImg, name: "Cable-Stayed Highway Bridge", location: "Dubai, UAE", services: "Structural Design, 3D Modeling" },
  { img: commercialImg, name: "Commercial Office Tower", location: "London, UK", services: "Steel Detailing, Connection Design" },
  { img: shedImg, name: "Manufacturing Facility", location: "Melbourne, Australia", services: "Erection Drawings, Detailing" },
  { img: stadiumImg, name: "Sports Arena Roof Structure", location: "Toronto, Canada", services: "3D Modeling, Erection Drawings" },
  { img: highriseImg, name: "High-Rise Steel Frame", location: "Mumbai, India", services: "Full Structural Design Package" },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24; // matches gap-6 (1.5rem = 24px)
    const scrollAmount = index * (cardWidth + gap);
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPos = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const newIndex = Math.round(scrollPos / (cardWidth + gap));
    setCurrentIndex(Math.min(newIndex, projects.length - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) scrollToIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  return (
    <section id="projects" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Ambient glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-orange-400 text-sm tracking-widest uppercase mb-3 font-semibold">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A selection of structural steel projects delivered across the globe.
          </p>
        </AnimatedSection>

        {/* Slider container */}
        <div className="relative group">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full p-2 transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-0 cursor-not-allowed"
                : "opacity-0 group-hover:opacity-100 hover:bg-white/20"
            }`}
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === projects.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full p-2 transition-all duration-300 ${
              currentIndex === projects.length - 1
                ? "opacity-0 cursor-not-allowed"
                : "opacity-0 group-hover:opacity-100 hover:bg-white/20"
            }`}
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {projects.map((p, i) => (
              <div
                key={p.name}
                className="flex-none w-[85vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] snap-center"
              >
                <div className="group/card relative rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl transition-all duration-500 hover:shadow-orange-500/20 hover:-translate-y-2 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display font-bold text-white text-xl mb-1">{p.name}</h3>
                    <p className="text-orange-300 text-sm mb-2 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {p.location}
                    </p>
                    <p className="text-gray-300 text-xs font-mono tracking-wider">{p.services}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-2 bg-orange-500"
                  : "w-2 h-2 bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;