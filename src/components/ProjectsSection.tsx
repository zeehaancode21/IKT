import { useState, useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

// Extended project data with building type, tonnage, and 3D model PNG image
const projects = [
  {
    img: "/src/images/PROJECTS/6th avenue rfp || TNM.jpg",
    name: "6th Avenue RFP Tower",
    location: "New York, USA",
    services: "Structural Design & Detailing",
    buildingType: "Commercial High-Rise Office",
    tonnage: "1,300 tonnes",
    modelPng: "src/images/3 D Drawings/6th avenue.png"
  },
  {
    img: "/src/images/PROJECTS/20-30-halletts-point || TNM.jpg",
    name: "Halletts Point Residential Complex",
    location: "New York, USA",
    services: "Steel Detailing & Shop Drawings",
    buildingType: "Mixed-Use Residential",
    tonnage: "5,213 tonnes",
    modelPng: "src/images/3 D Drawings/halett point.png"
  },
  {
    img: "/src/images/PROJECTS/55 hudson || TNM.jpg",
    name: "55 Hudson Yards",
    location: "New York, USA",
    services: "High-Rise Steel Framing",
    buildingType: "Luxury Office Tower",
    tonnage: "560 tonnes",
    modelPng: "src/images/3 D Drawings/hudson.png"
  },
  {
    img: "/src/images/PROJECTS/ASHEVILLE ATCT FACILITY || ACADIAN STEEL.jpg",
    name: "Asheville Air Traffic Control Tower",
    location: "Asheville, USA",
    services: "Structural Steel Design",
    buildingType: "Transportation / ATC Facility",
    tonnage: "4,836 tonnes",
    modelPng: "src/images/3 D Drawings/ashville.png"
  },
  {
    img: "/src/images/PROJECTS/brownsville-rd-elementary-school || TS.jpg",
    name: "Brownsville Road Elementary School",
    location: "Pittsburgh, USA",
    services: "Educational Steel Structure",
    buildingType: "Educational / K-12 School",
    tonnage: "2,244 tonnes",
    modelPng: "src/images/3 D Drawings/brownville.png"
  },
  {
    img: "/src/images/PROJECTS/GEORGIA BLUE SOUTHAVEN || TS.jpg",
    name: "Georgia Blue Southaven",
    location: "Georgia, USA",
    services: "Commercial Steel Project",
    buildingType: "Restaurant & Retail",
    tonnage: "449 tonnes",
    modelPng: "src/images/3 D Drawings/george blue southaven.png"
  },
  {
    img: "/src/images/PROJECTS/National Guard Readiness || TS.jpg",
    name: "National Guard Readiness Center",
    location: "Mississippi, USA",
    services: "Military Facility Steel Structure",
    buildingType: "Military / Government Facility",
    tonnage: "1,765 tonnes",
    modelPng: "src/images/3 D Drawings/national guard readiness.png"
  },
  {
    img: "/src/images/PROJECTS/NEW FRAYSER LIBRARY || TS.jpg",
    name: "New Frayser Library",
    location: "Memphis, USA",
    services: "Architectural Steel Design",
    buildingType: "Public Library / Civic",
    tonnage: "3,654 tonnes",
    modelPng: "src/images/3 D Drawings/new frayer library.png"
  },
  {
    img: "/src/images/PROJECTS/Norwin Stadium || TRINITY.jpg",
    name: "Norwin Stadium",
    location: "Pennsylvania, USA",
    services: "Sports Stadium Roof Structure",
    buildingType: "Sports & Recreation Stadium",
    tonnage: "1,490 tonnes",
    modelPng: "src/images/3 D Drawings/norwin stadium.png"
  }
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const dragOccurredRef = useRef(false);
  const dragThreshold = 5;

  // Modal state
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload all model images on component mount
  useEffect(() => {
    projects.forEach(project => {
      const img = new Image();
      img.src = project.modelPng;
    });
  }, []);

  // Preload on hover for instant open
  const handleCardHover = (project: typeof projects[0]) => {
    const img = new Image();
    img.src = project.modelPng;
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setImageLoaded(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.children[0]?.clientWidth || 320;
    const gap = 24;
    const scrollAmount = index * (cardWidth + gap);
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPos = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 320;
    const gap = 24;
    const newIndex = Math.round(scrollPos / (cardWidth + gap));
    setCurrentIndex(Math.min(newIndex, projects.length - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragOccurredRef.current = false;
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.8;
    if (Math.abs(walk) > dragThreshold) {
      dragOccurredRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      dragOccurredRef.current = false;
    }, 50);
  };

  const handleCardClick = (project: typeof projects[0]) => {
    if (!dragOccurredRef.current) {
      setSelectedProject(project);
    }
  };

  const nextSlide = () => currentIndex < projects.length - 1 && scrollToIndex(currentIndex + 1);
  const prevSlide = () => currentIndex > 0 && scrollToIndex(currentIndex - 1);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm">
            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-sm font-mono tracking-[3px] uppercase font-semibold">Proven Performance</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Engineering <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering world-class structural steel solutions with precision, innovation, and uncompromising quality.
          </p>
        </AnimatedSection>

        {/* Slider */}
        <div className="relative group">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-gray-700 hover:text-white border border-gray-200 shadow-lg p-4 rounded-2xl transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:hover:bg-white/90 disabled:hover:text-gray-700 backdrop-blur-sm"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === projects.length - 1}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-gray-700 hover:text-white border border-gray-200 shadow-lg p-4 rounded-2xl transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:hover:bg-white/90 disabled:hover:text-gray-700 backdrop-blur-sm"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 scrollbar-hide cursor-grab active:cursor-grabbing"
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-[90vw] sm:w-[420px] snap-center cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => handleCardHover(project)}
              >
                <div className="group relative h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-100 contrast-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-orange-500 mb-4">
                      📍 <span className="text-sm text-gray-600">{project.location}</span>
                    </div>
                    <div className="inline-block bg-gray-100 hover:bg-orange-50 border border-gray-200 text-gray-700 text-xs font-mono tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 group-hover:border-orange-200 group-hover:text-orange-700">
                      {project.services}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots & Counter */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? "w-10 bg-orange-500 shadow-md shadow-orange-300" 
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-500 font-mono text-sm tracking-widest">
            {currentIndex + 1} / {projects.length}
          </p>
        </div>
      </div>

      {/* Modal - Light theme, clean, professional */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="relative max-w-[90vw] md:max-w-[85vw] max-h-[90vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-gray-100">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-orange-500 text-gray-700 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-md border border-gray-200"
            >
              ✕
            </button>

            <div className="w-full h-full flex items-center justify-center bg-gray-50 p-6">
              <div className="relative flex flex-col items-center justify-center min-h-[50vh]">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 border-3 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={selectedProject.modelPng}
                  alt={`3D Model of ${selectedProject.name}`}
                  className={`max-h-[75vh] w-auto max-w-full object-contain drop-shadow-xl transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ imageRendering: "crisp-edges" }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Details Bar - Light theme */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 md:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 text-gray-700">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 text-lg">🏗️</span>
                      <span className="text-gray-500">Type:</span>
                      <span className="font-semibold text-gray-800">{selectedProject.buildingType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 text-lg">📍</span>
                      <span className="text-gray-500">Location:</span>
                      <span className="font-semibold text-gray-800">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 text-lg">⚙️</span>
                      <span className="text-gray-500">Service:</span>
                      <span className="font-semibold text-gray-800">Engineering & Detailing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 text-lg">⚖️</span>
                      <span className="text-gray-500">Tonnage:</span>
                      <span className="font-bold text-orange-600">{selectedProject.tonnage}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono hidden sm:block">
                    {selectedProject.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-in {
          animation: fade-in 0.2s ease-out;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 0.6s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;