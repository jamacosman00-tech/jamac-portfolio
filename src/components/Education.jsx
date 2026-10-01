import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import educationData from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Academic Background
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Education <span className="text-emerald-400">Timeline</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            My formal academic journey from secondary school graduation to my
            ongoing studies in Computer Science.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mx-auto max-w-4xl">
          <div className="relative border-l-2 border-emerald-500/20 pl-6 sm:pl-10 space-y-12">
            {educationData.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-emerald-400 bg-[#051c15] shadow-md shadow-emerald-500/20 transition group-hover:scale-125 group-hover:bg-emerald-400">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 group-hover:bg-black transition" />
                </div>

                {/* Card Container */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md transition duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-semibold text-emerald-400">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>

                    <span className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-0.5 text-xs text-gray-400">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl group-hover:text-emerald-300 transition">
                    {item.degree}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                      <GraduationCap size={16} />
                      {item.institution}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{item.faculty}</span>
                    <span className="text-gray-500">•</span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 border-t border-white/5 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                      Key Highlights &amp; Activities:
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default Education;
