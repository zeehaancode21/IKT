import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useInView, useCounter } from "@/hooks/useScrollAnimation";
import { Zap, Clock, TrendingUp, ShieldCheck, Calculator } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Automated Drafting Routines",
    desc: "Custom scripts automate repetitive sheet creation and repetitive detailing, reducing delivery schedules by more than half.",
  },
  {
    icon: Clock,
    title: "Compressed Turnarounds",
    desc: "Standardized execution pipelines accelerate drawing delivery without sacrificing structural precision or project specifications.",
  },
  {
    icon: TrendingUp,
    title: "Focused Engineering Talent",
    desc: "Automation handles routine drawing tasks so our senior detailers concentrate on critical coordination and complex connections.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous QA/QC",
    desc: "Automated validation routines run alongside detailer reviews to ensure error-free, fabrication-ready deliverables.",
  },
];

const EfficiencyBar = () => {
  const { ref, isInView } = useInView(0.4);

  // Realistically calibrated counters: 10 hours vs 4 hours
  const before = useCounter(10, 1400, isInView);
  const after = useCounter(4, 1400, isInView);

  // Dynamic Time-Savings Calculator state
  const [drawingCount, setDrawingCount] = useState<number>(50);

  // Calibrated calculations: 10 hrs conventional vs 4 hrs automated
  const conventionalHours = drawingCount * 10;
  const optimizedHours = drawingCount * 4;
  const hoursSaved = conventionalHours - optimizedHours;
  const daysSaved = (hoursSaved / 8).toFixed(1); // Standard 8-hour workday

  return (
    <div ref={ref} className="max-w-3xl mx-auto space-y-8">
      {/* Visual Benchmark Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Conventional */}
        <div className="relative rounded-2xl p-6 bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-inner">
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-gray-400 mb-4">
            Conventional Workflow
          </p>
          <div className="flex items-end gap-3">
            <span className="font-display font-extrabold text-5xl text-white/80 tabular-nums tracking-tight">
              {before}
            </span>
            <span className="text-gray-400 text-sm mb-1.5 font-medium">
              hrs / drawing sheet*
            </span>
          </div>
          <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-slate-500 transition-all duration-[1400ms] ease-out"
              style={{ width: isInView ? "100%" : "0%" }}
            />
          </div>
        </div>

        {/* Our Process */}
        <div className="relative rounded-2xl p-6 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent backdrop-blur-md border border-orange-400/40 shadow-xl shadow-orange-500/10">
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-[10px] font-mono uppercase tracking-wider text-orange-300 font-semibold">
            up to 60% Faster
          </div>
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-orange-400 mb-4 font-semibold">
            Our Automated Workflow
          </p>
          <div className="flex items-end gap-3">
            <span className="font-display font-extrabold text-5xl bg-gradient-to-r from-orange-400 via-amber-300 to-amber-400 bg-clip-text text-transparent tabular-nums tracking-tight">
              {after}
            </span>
            <span className="text-orange-200/90 text-sm mb-1.5 font-medium">
              hrs / drawing sheet*
            </span>
          </div>
          <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-[1400ms] ease-out"
              style={{ width: isInView ? "40%" : "0%" }}
            />
          </div>
        </div>
      </div>

      {/* Interactive Time-Savings Estimator */}
      <div className="rounded-2xl p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-400/20 text-orange-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-bold text-base">
              Project Time-Savings Estimator
            </h4>
            <p className="text-xs text-gray-400">
              Adjust drawing volume to estimate timeline savings for your project scope.
            </p>
          </div>
        </div>

        {/* Interactive Slider Input */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="drawing-range"
              className="text-sm font-medium text-gray-300"
            >
              Estimated Drawing Volume:
            </label>
            <span className="text-lg font-bold text-orange-400 font-mono">
              {drawingCount}{" "}
              <span className="text-xs font-normal text-gray-400">sheets</span>
            </span>
          </div>
          <input
            id="drawing-range"
            type="range"
            min="10"
            max="300"
            step="5"
            value={drawingCount}
            onChange={(e) => setDrawingCount(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
          />
          <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-1">
            <span>10 Sheets</span>
            <span>150 Sheets</span>
            <span>300 Sheets</span>
          </div>
        </div>

        {/* Dynamic Calculation Results */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block text-xs text-gray-400 uppercase font-mono mb-1">
              Conventional Est.
            </span>
            <span className="text-xl font-bold text-gray-300 font-mono">
              {conventionalHours} hrs
            </span>
          </div>
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <span className="block text-xs text-orange-300 uppercase font-mono mb-1">
              Our Optimized Est.
            </span>
            <span className="text-xl font-bold text-orange-400 font-mono">
              {optimizedHours} hrs
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <span className="block text-xs text-amber-300 uppercase font-mono mb-1">
              Schedule Saved
            </span>
            <span className="text-xl font-bold text-amber-400 font-mono">
              ~{daysSaved} business days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DrawingAutomationSection = () => {
  return (
    <section
      id="technology"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"
          style={{ top: "5%", right: "5%" }}
        />
        <div
          className="absolute w-[25rem] h-[25rem] bg-amber-500/10 rounded-full blur-[90px] animate-[pulse_10s_ease-in-out_infinite]"
          style={{ bottom: "10%", left: "5%", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-6 shadow-lg shadow-orange-500/5 hover:border-orange-500/30 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full animate-ping" />
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-xs font-mono tracking-[3px] uppercase font-bold">
              Predictable & Fast Deliveries
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Accelerated Delivery,
            <span className="block mt-1 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              Without Quality Compromise
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We integrate intelligent drafting automation into our detailing pipeline to eliminate manual repetition—consistently delivering fabrication-ready drawing sets significantly faster than conventional industry timelines.
          </p>
        </AnimatedSection>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-orange-500/50 hover:to-amber-500/30 transition-all duration-500 shadow-lg">
                <div className="relative h-full rounded-2xl p-6 bg-slate-900/80 backdrop-blur-xl border border-white/5 group-hover:border-transparent transition-all duration-500 group-hover:-translate-y-1.5">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-400 transition-all duration-500">
                    <h.icon className="w-6 h-6 text-orange-400 group-hover:text-slate-950 transition-colors duration-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-orange-300 transition-colors duration-300 mb-2">
                    {h.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {h.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Efficiency Benchmark & Estimator */}
        <AnimatedSection delay={0.15}>
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 tracking-tight">
              Workflow Performance Comparison
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Compare conventional manual drafting turnaround times against our optimized automation pipeline.
            </p>
          </div>

          <EfficiencyBar />

          <p className="text-center text-gray-500 text-xs mt-6 max-w-xl mx-auto leading-normal">
            *Performance benchmarks are based on standard detailing tasks suitable for automation scripts. Actual turnaround times depend on project geometry, coordination requirements, and total scope.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DrawingAutomationSection;