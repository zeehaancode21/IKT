import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const teamMembers = [
  { name: "Noor", role: "Founder", img: "https://i.pravatar.cc/150?img=33" },
  { name: "Harish", role: "Structural Engineer", img: "https://i.pravatar.cc/150?img=18" },
  { name: "Shouib", role: "Steel Detailer", img: "https://i.pravatar.cc/150?img=11" },
  { name: "Nithesh", role: "Project Manager", img: "https://i.pravatar.cc/150?img=3" },
  { name: "Naveen", role: "Design Engineer", img: "https://i.pravatar.cc/150?img=68" },
  { name: "Dhikshitha", role: "3D Modeler", img: "https://i.pravatar.cc/150?img=5" },
  { name: "Panchakshari", role: "Connection Designer", img: "https://i.pravatar.cc/150?img=53" },
  { name: "Nachiketh", role: "Drafting Engineer", img: "https://i.pravatar.cc/150?img=7" },
  { name: "Amruth", role: "QA Engineer", img: "https://i.pravatar.cc/150?img=8" },
  { name: "Soundharya", role: "Site Engineer", img: "https://i.pravatar.cc/150?img=9" },
  { name: "Deepu H D", role: "Coordinator", img: "https://i.pravatar.cc/150?img=30" },
  { name: "Darshan", role: "Fabrication Expert", img: "https://i.pravatar.cc/150?img=55" },
  { name: "Afridi", role: "BIM Engineer", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Sunil", role: "Steel Analyst", img: "https://i.pravatar.cc/150?img=14" },
  { name: "Giridhara Swamy", role: "Steel Engineer", img: "https://i.pravatar.cc/150?img=67" },
  { name: "Kantharaj", role: "Fabrication Engineer", img: "https://i.pravatar.cc/150?img=13" },
  { name: "Zeeshan", role: "Trainee", img: "https://i.pravatar.cc/150?img=52" },
];

const TeamSection = () => {
  const [hovered, setHovered] = useState<null | typeof teamMembers[0]>(null);

  return (
    <section id="team" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%23f97316' fill-opacity='0.03' d='M100 0L200 200H0L100 0z'/%3E%3C/svg%3E')] bg-repeat opacity-30 pointer-events-none" />

      {/* Hover preview overlay (centered large image) */}
      {hovered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300" />
          <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl animate-in zoom-in duration-300">
            <img
              src={hovered.img}
              alt={hovered.name}
              className="w-full h-full object-cover"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
              <p className="text-white font-bold text-lg">{hovered.name}</p>
              <p className="text-orange-200 text-sm">{hovered.role}</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-orange-600 dark:text-orange-400 text-sm tracking-widest uppercase mb-3 font-semibold">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            Meet Our Experts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A dedicated group of structural engineering professionals delivering precision and excellence.
          </p>
        </AnimatedSection>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.02}>
              <div
                className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setHovered(member)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image container */}
                <div className="relative w-28 h-28 mx-auto mb-3">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                  <img
                    src={member.img}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-2 border-orange-200 dark:border-orange-800 group-hover:scale-105 transition-transform duration-300 shadow-md"
                  />
                </div>

                {/* Name */}
                <h4 className="font-display font-bold text-gray-800 dark:text-white text-sm group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  {member.role}
                </p>

                {/* Decorative line on hover */}
                <div className="w-8 h-0.5 bg-orange-500 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;