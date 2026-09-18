import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { 
  CalendarCheck, 
  Activity, 
  LayoutDashboard, 
  Share2, 
  X, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

// 1. Import your local images from your assets folder here
import iktLogo from "../assets/IKT.png";
import clientPortalImg from "../assets/client.jpg";
import resourceOpsImg from "../assets/project-management.jpg";
import trackingImg from "../assets/time-track.jpg";
import coreHubImg from "../assets/management.jpg";

// 2. Assign the imported image variables directly to the feature objects
const features = [
  {
    id: "client-portal",
    isHighlighted: true,
    icon: Share2,
    badge: "Key Feature",
    tag: "Client Experience",
    title: "Real-Time Client Tracking Portal",
    desc: "Clients get dedicated, 24/7 access to live project status dashboards to track progress, milestones, and updates as they happen.",
    image: clientPortalImg, // Local image variable
    modalDetails: {
      subtitle: "On-Demand Transparency for Clients",
      whatItIs: "A secure, client-facing live interface that gives external stakeholders a direct window into internal project progress without friction.",
      whatItDoes: [
        "Provides 24/7 access to live milestone percentages, progress meters, and task completions.",
        "Generates secure live tracking links for direct, effortless viewing across devices.",
        "Delivers real-time status updates, active deliverables, and automated progress notifications.",
        "Eliminates status report delays by replacing weekly check-ins with raw, transparent data."
      ],
      impact: "Builds unshakeable client trust through complete operational transparency and real-time clarity."
    }
  },
  {
    id: "resource-ops",
    isHighlighted: false,
    icon: CalendarCheck,
    tag: "Workforce Continuity",
    title: "Resource Allocation & Capacity Governance",
    desc: "Centralized schedules, active bandwidth planning, and standardized time-off protocols for seamless continuity.",
    image: resourceOpsImg, // Local image variable
    modalDetails: {
      subtitle: "Unified Capacity & Availability Engine",
      whatItIs: "An enterprise management framework that regulates team bandwidth, planned availability, and operational schedules.",
      whatItDoes: [
        "Monitors team capacity and project assignment schedules in real time.",
        "Standardizes time-off protocols, availability requests, and leadership approvals.",
        "Ensures uninterrupted project momentum by anticipating team allocation gaps in advance."
      ],
      impact: "Maintains optimal project staffing and guarantees delivery schedules remain unaffected."
    }
  },
  {
    id: "tracking",
    isHighlighted: false,
    icon: Activity,
    tag: "Real-Time Tracking",
    title: "Live Internal Status Engine",
    desc: "Internal status dashboards that keep teams aligned on active work cycles and immediate blockers.",
    image: trackingImg, // Local image variable
    modalDetails: {
      subtitle: "Live Development & Status Feeds",
      whatItIs: "A real-time tracking engine built to eliminate progress ambiguity across active internal projects.",
      whatItDoes: [
        "Displays real-time completion percentages and stage updates.",
        "Flags active blockers and immediate action items automatically.",
        "Maintains an immutable record of historical deliverables."
      ],
      impact: "Keeps all internal teams in complete synchronization without endless status meetings."
    }
  },
  {
    id: "core",
    isHighlighted: false,
    icon: LayoutDashboard,
    tag: "Ecosystem Strategy",
    title: "Centralized & Transparent Hub",
    desc: "Every administrative and operational layer unified into one accountable workspace.",
    image: coreHubImg, // Local image variable
    modalDetails: {
      subtitle: "The Foundation of Our Workspace",
      whatItIs: "The central operational framework linking internal activities directly to client deliverables.",
      whatItDoes: [
        "Unifies administrative tools, activity logs, and status dashboards.",
        "Establishes absolute accountability across every operational layer.",
        "Drives seamless cross-departmental coordination."
      ],
      impact: "Ensures high operational integrity, turning internal coordination into consistent external quality."
    }
  }
];

const IKTSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section
      id="ikt"
      className="relative overflow-hidden bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 text-slate-100 min-h-screen flex flex-col justify-center"
    >
      {/* Background Ambient Glow Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] z-[1]"
        />

        <motion.div
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 80, -80, 0],
            scale: [1, 0.85, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] z-[1]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 z-[2]" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-slate-900/90 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6 shadow-lg shadow-orange-500/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-orange-400 text-xs font-mono tracking-widest uppercase font-semibold">
              Proprietary Workspace
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
            IKT Ecosystem
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Our central hub unifying internal capacity, task tracking, 
            and <span className="text-orange-400 font-medium border-b border-orange-500/40 pb-0.5">real-time client visibility</span> into one live platform.
          </p>
        </AnimatedSection>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            if (feature.isHighlighted) {
              return (
                <AnimatedSection key={feature.id} delay={0} className="md:col-span-2 lg:col-span-2">
                  <motion.button
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveFeature(feature)}
                    className="group relative w-full h-full text-left p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-300 shadow-2xl shadow-orange-500/10 flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 rounded-2xl bg-orange-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-orange-500/30">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[10px] font-mono tracking-wider text-orange-400 uppercase font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                            {feature.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-xs text-slate-300 font-mono">
                          <Globe className="w-3.5 h-3.5 text-orange-400" />
                          <span>Client Portal Shared Live</span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-orange-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-2xl">
                        {feature.desc}
                      </p>

                      <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                          <Zap className="w-4 h-4 text-orange-400 shrink-0" />
                          <div>
                            <p className="text-slate-500 text-[10px] font-mono">STREAM</p>
                            <p className="font-semibold text-slate-200">24/7 Live Feed</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-slate-500 text-[10px] font-mono">SECURITY</p>
                            <p className="font-semibold text-slate-200">Direct Link</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                          <ExternalLink className="w-4 h-4 text-orange-400 shrink-0" />
                          <div>
                            <p className="text-slate-500 text-[10px] font-mono">LATENCY</p>
                            <p className="font-semibold text-slate-200">Real-Time Data</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs font-semibold text-orange-400">
                      <span>Click to view feature preview</span>
                      <div className="flex items-center gap-1 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/20">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.button>
                </AnimatedSection>
              );
            }

            return (
              <AnimatedSection key={feature.id} delay={i * 0.08}>
                <motion.button
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveFeature(feature)}
                  className="group relative w-full h-full text-left p-6 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-slate-950 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 group-hover:text-orange-400 transition-colors">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {feature.desc}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-semibold text-orange-400 gap-1 mt-auto group-hover:translate-x-1.5 transition-transform">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.button>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Footer Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <img src={iktLogo} alt="IKT" className="w-6 h-6 opacity-60 object-contain" />
            <span>IKT Workspace Engine</span>
          </div>
          <div className="flex gap-6 font-mono text-[11px]">
            <span>• Centralized</span>
            <span>• Real-Time</span>
            <span>• Client-Transparent</span>
            <span>• Coordinated</span>
          </div>
        </div>
      </div>

      {/* Popup Modal with Local Asset Preview */}
      <AnimatePresence>
        {activeFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFeature(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden z-10 shadow-2xl my-auto"
            >
              {/* Local Asset Banner */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-950">
                <img 
                  src={activeFeature.image} 
                  alt={activeFeature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                <button
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-950 transition-colors backdrop-blur-md border border-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <activeFeature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                      {activeFeature.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeFeature.title}
                    </h3>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-2">
                    Overview
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {activeFeature.modalDetails.whatItIs}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-3">
                    Core Mechanics & Features
                  </h4>
                  <ul className="space-y-2.5">
                    {activeFeature.modalDetails.whatItDoes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-orange-400 mb-1">
                    Systemic Value
                  </h4>
                  <p className="text-xs text-orange-200/90 leading-relaxed">
                    {activeFeature.modalDetails.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IKTSection;