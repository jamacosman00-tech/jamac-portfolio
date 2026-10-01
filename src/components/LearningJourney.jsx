import { Calendar } from "lucide-react";
import journeyMilestones from "../data/journey";

function LearningJourney() {
  return (
    <section
      id="journey"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Evolution &amp; Growth
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            My Learning <span className="text-emerald-400">Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            A realistic step-by-step roadmap documenting my progression from
            first principles to hands-on development.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mx-auto max-w-4xl">
          <div className="relative border-l-2 border-emerald-500/20 pl-6 sm:pl-10 space-y-12">
            {journeyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-emerald-400 bg-[#051c15] transition group-hover:scale-125 group-hover:bg-emerald-400">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 group-hover:bg-black transition" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md transition duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04]">
                  {/* Top Bar with Year */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold text-emerald-300">
                      <Calendar size={13} />
                      {milestone.year}
                    </span>

                    <span className="text-xs text-gray-500 font-mono">
                      Phase {idx + 1} of {journeyMilestones.length}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl group-hover:text-emerald-300 transition">
                    {milestone.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400/90 mt-1">
                    {milestone.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {milestone.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
