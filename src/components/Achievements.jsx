import {
  Trophy,
  GraduationCap,
  ShieldCheck,
  Cpu,
  Users,
  MessageSquare,
  Globe2,
  BookOpen,
} from "lucide-react";
import achievements from "../data/achievements";

const categoryIconMap = {
  Academic: GraduationCap,
  Cybersecurity: ShieldCheck,
  "Technical Training": Cpu,
  "Leadership & Responsibility": Users,
  Communication: MessageSquare,
  "Practical Development": Globe2,
  "Self-Development": BookOpen,
};

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Milestones &amp; Involvement
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Key <span className="text-emerald-400">Achievements</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            Academic milestones, student leadership roles, competitive debate,
            and specialized extracurricular training.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = categoryIconMap[item.category] || Trophy;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.04]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition group-hover:scale-105">
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-gray-400">
                      {item.date}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {item.category}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-white transition group-hover:text-emerald-300">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="mt-1 text-xs text-gray-500">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/80">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    Verified Experience
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

export default Achievements;
