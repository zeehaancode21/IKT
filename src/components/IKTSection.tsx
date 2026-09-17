import AnimatedSection from "./AnimatedSection";
import { CalendarCheck, ClipboardList, ListChecks, LayoutDashboard } from "lucide-react";
import iktLogo from "../assets/IKT.png";

const features = [
  {
    icon: CalendarCheck,
    title: "Leave & Permission Management",
    desc: "A standardized way for employees to submit leave applications and permission requests, keeping approvals organized and on record.",
  },
  {
    icon: ClipboardList,
    title: "Work Reports & Task Tracking",
    desc: "Employees maintain daily and periodic work reports, giving clear visibility into tasks, progress, and overall office activity.",
  },
  {
    icon: ListChecks,
    title: "Project Status Updates",
    desc: "Teams update project progress in a consistent format, keeping ongoing activities visible and easy to coordinate across the office.",
  },
  {
    icon: LayoutDashboard,
    title: "Centralized Office Management",
    desc: "Related administrative and work-management activities live in one structured platform instead of scattered spreadsheets and emails.",
  },
];

const IKTSection = () => (
  <section
    id="ikt"
    className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-4 sm:px-6 lg:px-8"
  >
    {/* Subtle dot pattern background, consistent with the Workflow section */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:opacity-10 pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Centered Header Section */}
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full px-5 py-2 mb-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-orange-600 dark:text-orange-400 text-sm font-mono tracking-[3px] uppercase font-semibold">
            Structured Operations
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-900 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 relative inline-block group text-center">
          IKT Workspace
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-orange-500 rounded-full blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto text-center">
          IKT is our internal platform for standardizing day-to-day office operations, giving
          every employee a single, organized place to manage, record, and track their work.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-5 gap-10 items-center">
        {/* Feature list */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div className="group relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 flex items-center justify-center mb-4 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3">
                  <f.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-display font-bold text-base text-gray-800 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {f.desc}
                </p>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 group-hover:w-3/4 group-hover:left-[12.5%]" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Visual summary card */}
        <div className="lg:col-span-2">
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-lg p-8 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-3xl" />

              <div className="relative flex items-center gap-3 mb-6">
                <img src={iktLogo} alt="IKT" className="w-10 h-10 object-contain" />
                <div>
                  <p className="font-display font-bold text-gray-800 dark:text-white leading-tight">
                    IKT Workspace
                  </p>
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-orange-500">
                    Internal Platform
                  </p>
                </div>
              </div>

              <ul className="relative space-y-3 mb-6">
                {["Standardization", "Transparency", "Accountability", "Coordination"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="relative text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                Used internally by our team to keep every project, task, and approval organized
                — supporting the reliable, well-coordinated delivery our clients see on the outside.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default IKTSection;