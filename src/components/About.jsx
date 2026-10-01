import {
  MapPin,
  BookOpen,
  Code2,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

function About() {
  const cards = [
    {
      label: "Location",
      value: "Somalia",
      subtext: "East Africa",
      icon: MapPin,
    },
    {
      label: "Field",
      value: "Computer Science",
      subtext: "Hormuud University",
      icon: BookOpen,
    },
    {
      label: "Focus",
      value: "Software & Web Development",
      subtext: "Full-Stack & Systems",
      icon: Code2,
    },
    {
      label: "Interests",
      value: "Cybersecurity, Data, AI & Tech",
      subtext: "Continuous Exploration",
      icon: Shield,
    },
  ];

  return (
    <section
      id="about"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            About Me
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Passionate About <span className="text-emerald-400">Learning &amp; Building</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            A transparent view into my academic background, technical focus, and
            goals as a Computer Science undergraduate.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Main Narrative Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition duration-300 hover:border-emerald-500/30 lg:col-span-7">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <Layers size={24} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Who I Am &amp; What Drives Me
            </h3>

            <p className="mt-6 text-base leading-relaxed text-gray-300">
              My name is <strong className="text-white">Jama Osman Abdille</strong>,
              and I am a Computer Science student interested in software
              development, databases, cybersecurity, and emerging technologies.
              I enjoy learning by building practical projects and continuously
              improving my technical skills.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-400">
              Rather than theoretical study alone, I believe true software
              competence comes from hands-on implementation—whether that means
              designing relational database schemas, configuring defensive
              security telemetry, or creating responsive web applications with
              clean architectures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <Sparkles size={14} />
                Student Mindset: Dedicated, Inquisitive, and Committed to Growth
              </span>
            </div>
          </div>

          {/* Key Information Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {card.label}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 transition group-hover:scale-110 group-hover:bg-emerald-500/10">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                      {card.value}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {card.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;