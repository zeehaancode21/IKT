import { useState, useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import halettImg from "../images/projects/halett.jpg";
import halettPng from "../images/drawings/halett.png";
import hudsonImg from "../images/projects/hudson.jpg";
import hudsonPng from "../images/drawings/hudson.png";
import ashvilleImg from "../images/projects/ashville.jpg";
import brownsvilleImg from "../images/projects/brownville.jpg";
import georgiaBlueImg from "../images/projects/george.jpg";
import nationalGuardImg from "../images/projects/national.jpg";
import newFrayserImg from "../images/projects/library.jpg";
import norwinStadiumImg from "../images/projects/stadium.jpg";
import avenue6Img from "../images/projects/avenue.jpg";
import ashvillePng from "../images/drawings/ashville.png";
import brownsvillePng from "../images/drawings/brownville.png";
import georgiaBluePng from "../images/drawings/george.png";
import nationalGuardPng from "../images/drawings/national.png";
import newFrayserPng from "../images/drawings/library.png";
import norwinStadiumPng from "../images/drawings/stadium.png";
import avenue6Png from "../images/drawings/avenue.png";
import wylandImg from "../images/projects/wylandville.jpg";
import wylandPng from "../images/drawings/wylandville.png";

// Extended project data with building type, tonnage, and 3D model PNG image
const projects = [
  {
    img: halettImg,
    name: "Halletts Point Residential Complex",
    location: "New York, USA",
    services: "Steel Detailing & Shop Drawings",
    buildingType: "Mixed-Use Residential",
    tonnage: "5,213 tonnes",
    modelPng: halettPng
  },
  {
    img: hudsonImg,
    name: "55 Hudson Yards",
    location: "New York, USA",
    services: "High-Rise Steel Framing",
    buildingType: "Luxury Office Tower",
    tonnage: "560 tonnes",
    modelPng: hudsonPng
  },
  {
    img: ashvilleImg,
    name: "Asheville Air Traffic Control Tower",
    location: "Asheville, USA",
    services: "Structural Steel Design",
    buildingType: "Transportation / ATC Facility",
    tonnage: "4,836 tonnes",
    modelPng: ashvillePng
  },
  {
    img: brownsvilleImg,
    name: "Brownsville Road Elementary School",
    location: "Pittsburgh, USA",
    services: "Educational Steel Structure",
    buildingType: "Educational / K-12 School",
    tonnage: "2,244 tonnes",
    modelPng: brownsvillePng
  },
  {
    img: georgiaBlueImg,
    name: "Georgia Blue Southaven",
    location: "Georgia, USA",
    services: "Commercial Steel Project",
    buildingType: "Restaurant & Retail",
    tonnage: "449 tonnes",
    modelPng: georgiaBluePng
  },
  {
    img: nationalGuardImg,
    name: "National Guard Readiness Center",
    location: "Mississippi, USA",
    services: "Military Facility Steel Structure",
    buildingType: "Military / Government Facility",
    tonnage: "1,765 tonnes",
    modelPng: nationalGuardPng
  },
  {
    img: newFrayserImg,
    name: "New Frayser Library",
    location: "Memphis, USA",
    services: "Architectural Steel Design",
    buildingType: "Public Library / Civic",
    tonnage: "3,654 tonnes",
    modelPng: newFrayserPng
  },
  {
    img: norwinStadiumImg,
    name: "Norwin Stadium",
    location: "Pennsylvania, USA",
    services: "Sports Stadium Roof Structure",
    buildingType: "Sports & Recreation Stadium",
    tonnage: "1,490 tonnes",
    modelPng: norwinStadiumPng
  },
  {
    img: avenue6Img,
    name: "6th Avenue RFP Tower",
    location: "New York, USA",
    services: "Structural Design & Detailing",
    buildingType: "Commercial High-Rise Office",
    tonnage: "1,300 tonnes",
    modelPng: avenue6Png
  },
  {
    img: wylandImg,
    name: "Wylandville Elementary School",
    location: "Pennsylvania, USA",
    services: "Educational Steel Structure",
    buildingType: "Educational School",
    tonnage: "1,453 tonnes",
    modelPng: wylandPng
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const dragOccurredRef = useRef(false);
  const dragThreshold = 5;
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  // Modal state
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Preload all model images on component mount
  useEffect(() => {
    projects.forEach(project => {
      const img = new Image();
      img.src = project.modelPng;
    });
  }, []);

  // Auto-slide functionality with progress
  useEffect(() => {
    if (isAutoSliding) {
      let startTime = Date.now();
      let elapsed = 0;
      const interval = 100; // Update every 100ms for smooth progress
      
      autoSlideIntervalRef.current = setInterval(() => {
        elapsed += interval;
        const progressPercent = (elapsed / 4000) * 100;
        setProgress(Math.min(progressPercent, 100));
        
        if (elapsed >= 4000) {
          const nextIndex = (currentIndex + 1) % projects.length;
          scrollToIndex(nextIndex);
          setProgress(0);
          startTime = Date.now();
          elapsed = 0;
        }
      }, interval);
    }

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [currentIndex, isAutoSliding]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    setIsAutoSliding(false);
    setProgress(0);
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoSliding(true);
    setProgress(0);
  };

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
    setProgress(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragOccurredRef.current = false;
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    setIsAutoSliding(false);
    setProgress(0);
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
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
    setIsAutoSliding(true);
    setProgress(0);
  };

  const handleCardClick = (project: typeof projects[0]) => {
    if (!dragOccurredRef.current) {
      setSelectedProject(project);
    }
  };

  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(0);
    }
    setProgress(0);
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(projects.length - 1);
    }
    setProgress(0);
  };

  // Reset auto-slide on manual navigation
  const handleManualNav = (callback: () => void) => {
    setIsAutoSliding(false);
    setProgress(0);
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    callback();
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 3000);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-100 overflow-hidden">
      {/* Enhanced background with floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full filter blur-3xl animate-pulse-slow" />
        
        {/* Floating geometric particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/40 rounded-full animate-float-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-float-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-purple-400/30 rounded-full animate-float-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-orange-400/30 rounded-full animate-float-particle" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with enhanced animations */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-sm font-mono tracking-[3px] uppercase font-semibold">Proven Performance</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight animate-fade-in-up">
            Engineering <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent animate-gradient">Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Delivering world-class structural steel solutions with precision, innovation, and uncompromising quality.
          </p>
        </AnimatedSection>

        {/* Slider with enhanced navigation */}
        <div 
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Auto-slide indicator with progress bar */}
          <div className="absolute -top-12 right-0 z-30 flex items-center gap-3 text-xs text-gray-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isAutoSliding ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span>{isAutoSliding ? 'Auto-slide' : 'Paused'}</span>
            </span>
            <span className="w-px h-4 bg-gray-300" />
            <span className="flex items-center gap-2">
              <span className="text-orange-500 font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-gray-400">/ {String(projects.length).padStart(2, '0')}</span>
            </span>
          </div>

          {/* Progress bar */}
          <div className="absolute -bottom-2 left-0 right-0 z-30 h-0.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${isAutoSliding ? progress : 0}%` }}
            />
          </div>

          {/* Navigation buttons with enhanced styling */}
          <button
            onClick={() => handleManualNav(prevSlide)}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-gray-700 hover:text-white border border-gray-200 shadow-lg p-4 rounded-2xl transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:hover:bg-white/90 disabled:hover:text-gray-700 backdrop-blur-sm hover:shadow-orange-500/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => handleManualNav(nextSlide)}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-orange-500 text-gray-700 hover:text-white border border-gray-200 shadow-lg p-4 rounded-2xl transition-all duration-300 hover:scale-110 disabled:opacity-40 disabled:hover:bg-white/90 disabled:hover:text-gray-700 backdrop-blur-sm hover:shadow-orange-500/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
                className="flex-none w-[90vw] sm:w-[420px] snap-center cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => {
                  handleCardHover(project);
                  setHoveredCard(index);
                }}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`group relative h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  hoveredCard === index ? 'shadow-orange-500/20 border-orange-300' : ''
                }`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-100 group-hover:brightness-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-[length:200%_100%] animate-gradient-shift scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  </div>
                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-orange-500 mb-4">
                      <span className="text-lg">📍</span>
                      <span className="text-sm text-gray-600">{project.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-gray-100 hover:bg-orange-50 border border-gray-200 text-gray-700 text-xs font-mono tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 group-hover:border-orange-200 group-hover:text-orange-700">
                        {project.services}
                      </span>
                      <span className="inline-block bg-orange-50 text-orange-700 text-xs font-mono tracking-wider px-5 py-2.5 rounded-full border border-orange-200">
                        ⚖️ {project.tonnage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Dots & Counter */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleManualNav(() => scrollToIndex(idx))}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? "w-10 bg-orange-500 shadow-lg shadow-orange-300/50" 
                    : "w-2 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="relative max-w-[90vw] md:max-w-[85vw] max-h-[90vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-modal-in border border-gray-100/20">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-orange-500 text-gray-700 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg border border-gray-200 hover:scale-110 hover:shadow-orange-500/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6">
              <div className="relative flex flex-col items-center justify-center min-h-[50vh]">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin-slow"></div>
                  </div>
                )}
                <img
                  src={selectedProject.modelPng}
                  alt={`3D Model of ${selectedProject.name}`}
                  className={`max-h-[75vh] w-auto max-w-full object-contain drop-shadow-2xl transition-all duration-700 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ imageRendering: "crisp-edges" }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Enhanced Details Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 p-4 md:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 text-gray-700">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
                      <span className="text-orange-500 text-lg">🏗️</span>
                      <span className="text-gray-500 text-xs">Type:</span>
                      <span className="font-semibold text-gray-800 text-xs">{selectedProject.buildingType}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                      <span className="text-blue-500 text-lg">📍</span>
                      <span className="text-gray-500 text-xs">Location:</span>
                      <span className="font-semibold text-gray-800 text-xs">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100">
                      <span className="text-purple-500 text-lg">⚙️</span>
                      <span className="text-gray-500 text-xs">Service:</span>
                      <span className="font-semibold text-gray-800 text-xs">Engineering & Detailing</span>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                      <span className="text-amber-500 text-lg">⚖️</span>
                      <span className="text-gray-500 text-xs">Tonnage:</span>
                      <span className="font-bold text-orange-600 text-xs">{selectedProject.tonnage}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono hidden sm:block border-l border-gray-200 pl-4">
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
        
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 0.8s linear infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(30px) rotate(-5deg); }
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-50px) scale(1.5); opacity: 0.6; }
        }
        .animate-float-particle {
          animation: float-particle 6s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease-in-out infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;