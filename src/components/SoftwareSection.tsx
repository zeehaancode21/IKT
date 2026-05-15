import AnimatedSection from "./AnimatedSection";

const tools = [
  { name: "Tekla Structures", category: "3D Modeling & Detailing" },
  { name: "AutoCAD", category: "2D Drafting" },
];

const SoftwareSection = () => (
  <section className="section-padding bg-primary">
    <div className="section-container">
      <AnimatedSection className="text-center mb-16">
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">Software & Tools</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground tracking-tight mb-4">
          Industry-Leading Engineering Software
        </h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          We leverage the most advanced structural engineering software to deliver precise, BIM-ready outputs.
        </p>
      </AnimatedSection>

      {/* Centered flexible layout for exactly 2 items */}
      <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
        {tools.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="
              relative group rounded-2xl p-[1px]
              bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30
              hover:from-purple-400 hover:via-pink-400 hover:to-blue-400
              transition-all duration-500
              w-64 sm:w-72
            ">
              <div className="
                h-full w-full rounded-2xl p-6 text-center
                backdrop-blur-xl bg-white/5
                border border-white/10
                shadow-lg shadow-black/20
                group-hover:shadow-purple-500/20
                transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.03]
              ">
                <p className="
                  font-mono text-[10px] tracking-widest uppercase
                  text-pink-400/80 mb-3
                  group-hover:text-pink-300
                  transition-colors
                ">
                  {t.category}
                </p>
                <h3 className="
                  font-display font-semibold text-base md:text-lg
                  text-white/90
                  group-hover:text-white
                  transition-colors
                ">
                  {t.name}
                </h3>
                <div className="
                  absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100
                  bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10
                  blur-xl transition duration-500
                " />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SoftwareSection;