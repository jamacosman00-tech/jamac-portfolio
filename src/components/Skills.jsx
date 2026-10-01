import {
  Code,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Lightbulb,
} from "lucide-react";
import skillCategories from "../data/skills";

const iconMap = {
  programming: Code,
  frontend: Layout,
  backend: Server,
  databases: Database,
  cybersecurity: ShieldCheck,
  tools: Wrench,
  interests: Lightbulb,
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Technical Competencies
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Skills &amp; <span className="text-emerald-400">Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Practical skills, tools, and platforms I work with across software
            engineering, databases, web systems, and cybersecurity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.id] || Code;

            return (
              <div
                key={category.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.04]"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition group-hover:scale-105">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-gray-400">
                    {category.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-300 transition duration-150 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/5 pt-3">
                  <span className="text-[11px] font-mono text-gray-500">
                    Practical Application &amp; Academic Study
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
