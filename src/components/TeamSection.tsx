import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Noor",
    role: "Founder/CEO",
    img: "https://i.pravatar.cc/150?img=33",
    description: "Visionary leader with 15+ years in structural innovation. Drives our mission to redefine steel engineering excellence."
  },
  {
    name: "Panchakshari",
    role: "Senior Checker",
    img: "https://i.pravatar.cc/150?img=53",
    description: "Final approval authority on all deliverable, ensuring zero defects and full code adherence."
  },
  {
    name: "Afridi",
    role: "Senior E‑Plan Editor",
    img: "https://i.pravatar.cc/150?img=12",
    description: "Brings deep BIM knowledge into the editing workflow, enriching drawings with intelligent metadata."
  },
  {
    name: "Amruth",
    role: "Senior E‑Plan Editor",
    img: "https://i.pravatar.cc/150?img=8",
    description: "Masters revision control and multi‑layer editing, guaranteeing every drawing reflects the latest design intent."
  },
  {
    name: "Darshan",
    role: "Quality Checker",
    img: "https://i.pravatar.cc/150?img=55",
    description: "Rigorously inspects drawings and models for compliance, catching inconsistencies before fabrication."
  },
  {
    name: "Deepu H D",
    role: "Senior E‑Plan Editor",
    img: "https://i.pravatar.cc/150?img=30",
    description: "Coordinates drawing sets across disciplines, ensuring consistency and version alignment."
  },
  {
    name: "Dhikshitha",
    role: "Modular BIM Coordinator",
    img: "https://i.pravatar.cc/150?img=5",
    description: "Merges modular thinking with BIM workflows to create clash‑free, ready‑to‑assemble digital twins."
  },
  {
    name: "Giridhara Swamy",
    role: "Technical Editor",
    img: "https://i.pravatar.cc/150?img=67",
    description: "Polishes technical documentation and drawing notes, enhancing clarity for shop and site teams."
  },
  {
    name: "Harish",
    role: "Modular Engineer",
    img: "https://i.pravatar.cc/150?img=18",
    description: "Specialist in prefabricated modular systems, accelerating project timelines without compromising structural integrity."
  },
  {
    name: "Kantharaj",
    role: "Senior E‑Plan Editor",
    img: "https://i.pravatar.cc/150?img=13",
    description: "Reviews and refines fabrication drawings, eliminating errors before they reach the shop floor."
  },
  {
    name: "Nachiketh",
    role: "E‑Plan Editor",
    img: "https://i.pravatar.cc/150?img=7",
    description: "Transforms redlined markups into clean, production‑ready digital sheets with fast turnaround."
  },
  {
    name: "Naveen",
    role: "Editor",
    img: "https://i.pravatar.cc/150?img=68",
    description: "Expert in high‑precision electronic plan editing, turning rough drafts into shop‑ready detailed drawings."
  },
  {
    name: "Nithesh",
    role: "Modular Engineer",
    img: "https://i.pravatar.cc/150?img=3",
    description: "Leads modular coordination, ensuring seamless integration of factory-built components into complex structures."
  },
  {
    name: "Shouib",
    role: "Modular Design Specialist",
    img: "https://i.pravatar.cc/150?img=11",
    description: "Designs repeatable, high-tolerance steel modules that simplify on-site assembly and reduce waste."
  },
  {
    name: "Soundharya",
    role: "E‑Plan Editor",
    img: "https://i.pravatar.cc/150?img=9",
    description: "Delivers meticulously formatted plans with a keen eye for annotations and scale accuracy."
  },
  {
    name: "Sunil",
    role: "E‑Plan Editor",
    img: "https://i.pravatar.cc/150?img=54",
    description: "Specialises in quick-turnaround plan updates without sacrificing dimensional precision."
  },
  {
    name: "Zeeshan",
    role: "Trainee",
    img: "https://i.pravatar.cc/150?img=52",
    description: "Eager learner with fresh perspectives, supporting senior engineers in daily tasks and growing into a future expert."
  }
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openModal = (member: TeamMember) => {
    console.log("Opening modal for:", member.name);
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section
        id="team"
        className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: "radial-gradient(circle at 10% 20%, rgba(249, 115, 22, 0.05), rgba(15, 23, 42, 0.02) 80%)",
        }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%23f97316' fill-opacity='0.03' d='M100 0L200 200H0L100 0z'/%3E%3C/svg%3E')] bg-repeat opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header with shimmering text */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-full px-5 py-2 mb-6 border border-white/30 dark:border-gray-700/40 shadow-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <p className="font-mono text-orange-600 dark:text-orange-300 text-xs tracking-[0.2em] uppercase font-semibold">
                The Minds Behind the Magic
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-800 via-orange-600 to-slate-800 dark:from-white dark:via-orange-400 dark:to-white bg-clip-text text-transparent bg-300% animate-shimmer mb-6">
              Meet Our Experts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-2xl p-4">
              A dedicated collective of structural engineering professionals delivering precision, innovation, and excellence in every project.
            </p>
          </AnimatedSection>

          {/* Team grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 lg:gap-7">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => openModal(member)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(member);
                  }
                }}
                aria-label={`View details of ${member.name}`}
              >
                <AnimatedSection delay={index * 0.02}>
                  <div className="group relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl p-5 text-center border border-white/40 dark:border-gray-700/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-orange-400/0 via-orange-500/0 to-orange-600/0 group-hover:from-orange-400/50 group-hover:via-orange-500/50 group-hover:to-orange-600/50 transition-all duration-500 pointer-events-none" />
                    <div className="relative w-28 h-28 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md animate-pulse" />
                      <div className="absolute inset-0 rounded-full ring-2 ring-orange-200/0 group-hover:ring-orange-400/50 transition-all duration-300" />
                      <img
                        src={member.img}
                        alt={`${member.name} - ${member.role}`}
                        className="relative w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md group-hover:scale-110 transition-transform duration-500 group-hover:shadow-xl animate-float"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-display font-bold text-gray-800 dark:text-gray-100 text-base group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5 font-medium tracking-wide">
                      {member.role}
                    </p>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full transform group-hover:w-14" />
                    <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-orange-500 dark:text-orange-400 text-xs font-medium">Click to view</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Completely separate from main section to avoid z-index issues */}
      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300"
          onClick={closeModal}
          role="presentation"
        >
          {/* Backdrop with lighter opacity */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal card */}
          <div
            className="relative bg-white dark:bg-gray-900 rounded-3xl max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100 opacity-100 border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-8 text-center">
              {/* Image */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-5">
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-full h-full rounded-full object-cover border-4 border-orange-200 dark:border-orange-800 shadow-lg"
                />
              </div>
              {/* Name */}
              <h3 id="modal-title" className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                {selectedMember.name}
              </h3>
              {/* Role */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-5">
                {selectedMember.role}
              </div>
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {selectedMember.description}
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-6 rounded-full" />
              {/* Close button only */}
              <button
                onClick={closeModal}
                className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default TeamSection;