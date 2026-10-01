import { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  MapPin,
  Sparkles,
  User,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import jamacPhoto from "../assets/jamac.jpeg";

function Hero() {
  const [activeView, setActiveView] = useState("photo"); // "photo" | "code"

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16 lg:pt-32"
    >
      {/* Background Ambient Primary Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left Content (Col 1-7) */}
        <div className="lg:col-span-7">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-sm shadow-emerald-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <Code2 size={14} className="text-emerald-400" />
            <span>Hormuud University • Computer Science Student</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Jama Osman{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Abdille
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-xl font-semibold text-gray-200 sm:text-2xl">
            Computer Science Student | Web Developer | Technology Enthusiast
          </h2>

          {/* Accurate Student Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            I am a Computer Science student passionate about building practical
            software projects, learning modern technologies, and developing my
            skills in web development, databases, cybersecurity, data analysis,
            and artificial intelligence.
          </p>

          {/* Location & University pill */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-gray-300">
            <span className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 font-medium text-emerald-300">
              <MapPin size={14} className="text-emerald-400" />
              Somalia
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 font-medium text-emerald-300">
              <GraduationCap size={14} className="text-emerald-400" />
              Hormuud University (2024 – Present)
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-gray-400">
              <Sparkles size={14} className="text-emerald-400" />
              Practical Systems &amp; Web Development
            </span>
          </div>

          {/* Action Buttons with Primary Colors */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition duration-200 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95"
            >
              <span>View My Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition duration-200 hover:bg-emerald-500/20 hover:border-emerald-400 active:scale-95"
            >
              <span>Contact Me</span>
              <Mail size={16} className="text-emerald-400" />
            </a>

            <a
              href="/high-school-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-gray-200 transition duration-200 hover:border-emerald-500/30 hover:bg-white/[0.07] active:scale-95"
            >
              <span>Download CV / Record</span>
              <Download size={16} />
            </a>
          </div>

          {/* Quick Profile Links */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-gray-500">
              Profiles:
            </span>
            <a
              href="https://github.com/JamaOsman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-gray-300 transition hover:border-emerald-500/40 hover:text-emerald-400"
              aria-label="GitHub Profile"
            >
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>
            <a
              href="https://linkedin.com/in/jama-osman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-gray-300 transition hover:border-emerald-500/40 hover:text-emerald-400"
              aria-label="LinkedIn Profile"
            >
              <span>LinkedIn</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Right Content: Portrait Showcase with View Switcher (Col 8-12) */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="w-full max-w-md">
            {/* View Switcher Controls */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-emerald-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Featured Visual
              </span>

              {/* View Toggle Buttons */}
              <div className="inline-flex items-center rounded-xl border border-emerald-500/20 bg-black/60 p-1 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setActiveView("photo")}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    activeView === "photo"
                      ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <User size={13} />
                  <span>Photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView("code")}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    activeView === "code"
                      ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Terminal size={13} />
                  <span>Code</span>
                </button>
              </div>
            </div>

            {/* VIEW 1: Jama's Portrait Photo */}
            {activeView === "photo" ? (
              <div className="relative group overflow-hidden rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 via-transparent to-black/60 p-2 shadow-2xl shadow-emerald-950/60 backdrop-blur-xl transition duration-300 hover:border-emerald-400/50 hover:shadow-emerald-500/15">
                {/* Photo Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black/40">
                  <img
                    src={jamacPhoto}
                    alt="Jama Osman Abdille - Computer Science Student"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Gradient Vignette Overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051c15] via-transparent to-transparent opacity-80" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 right-3 rounded-full border border-emerald-500/30 bg-[#051c15]/80 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    CS Undergrad
                  </div>

                  {/* Bottom Information Glass Card */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-emerald-500/30 bg-[#051c15]/90 p-3.5 backdrop-blur-md shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-white">
                          Jama Osman Abdille
                        </p>
                        <p className="text-xs font-medium text-emerald-400 font-mono mt-0.5">
                          Hormuud University • CS
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        <span>Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* VIEW 2: Developer Code Editor Window */
              <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-[#0B1612]/95 shadow-2xl shadow-emerald-950/60 backdrop-blur-xl transition hover:border-emerald-500/50">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-emerald-500/20 bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <Terminal size={12} className="text-emerald-400" />
                    <span>jama.config.js</span>
                  </div>
                  <div className="w-10 text-right">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Code Editor Body */}
                <div className="p-5 font-mono text-xs leading-relaxed sm:text-sm">
                  <div className="flex gap-4">
                    {/* Line Numbers */}
                    <div className="select-none text-right font-mono text-gray-600">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                    </div>

                    {/* Code Snippet with Primary Color Accents */}
                    <div className="flex-1 space-y-1">
                      <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-emerald-400 font-bold">jama</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-gray-400">&#123;</span>
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-300">name</span>
                        <span className="text-gray-400">:</span>{" "}
                        <span className="text-amber-300">"Jama Osman Abdille"</span>
                        <span className="text-gray-400">,</span>
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-300">field</span>
                        <span className="text-gray-400">:</span>{" "}
                        <span className="text-amber-300">"Computer Science"</span>
                        <span className="text-gray-400">,</span>
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-300">institution</span>
                        <span className="text-gray-400">:</span>{" "}
                        <span className="text-amber-300">"Hormuud University"</span>
                        <span className="text-gray-400">,</span>
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-300">focus</span>
                        <span className="text-gray-400">:</span>{" "}
                        <span className="text-gray-400">[</span>
                      </p>
                      <p className="pl-8">
                        <span className="text-emerald-300">"Web Development"</span>
                        <span className="text-gray-400">,</span>
                      </p>
                      <p className="pl-8">
                        <span className="text-emerald-300">"Cybersecurity"</span>
                        <span className="text-gray-400">,</span>
                      </p>
                      <p className="pl-8">
                        <span className="text-emerald-300">"Data"</span>
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-400">]</span>
                        <span className="text-gray-400">,</span>
                      </p>
                      <p className="pl-4">
                        <span className="text-gray-300">status</span>
                        <span className="text-gray-400">:</span>{" "}
                        <span className="text-emerald-400 font-bold">
                          "Always Learning"
                        </span>
                      </p>
                      <p>
                        <span className="text-gray-400">&#125;;</span>
                      </p>
                    </div>
                  </div>

                  {/* Terminal status bar */}
                  <div className="mt-4 flex items-center justify-between border-t border-emerald-500/10 pt-3 font-mono text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Node.js v24 • Ready
                    </span>
                    <span>UTF-8</span>
                  </div>
                </div>
              </div>
            )}

            {/* Subtle decorative glow beneath card */}
            <div className="mx-auto mt-2 h-2 w-3/4 rounded-full bg-emerald-500/20 blur-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;