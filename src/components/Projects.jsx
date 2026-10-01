import { useState } from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured" },
  { id: "web", label: "Web & Full-Stack" },
  { id: "systems", label: "Desktop & Security" },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return [1, 2, 3].includes(project.id);
    if (activeFilter === "web")
      return (
        project.category.toLowerCase().includes("web") ||
        project.category.toLowerCase().includes("full-stack")
      );
    if (activeFilter === "systems")
      return (
        project.category.toLowerCase().includes("desktop") ||
        project.category.toLowerCase().includes("cybersecurity") ||
        project.category.toLowerCase().includes("computer science")
      );
    return true;
  });

  return (
    <section
      id="projects"
      className="relative border-t border-emerald-500/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Portfolio Showcase
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Practical <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
            A documented collection of my university coursework, desktop
            applications, full-stack systems, and cybersecurity practice labs.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition duration-200 ${
                  isActive
                    ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                    : "border border-white/10 bg-white/[0.02] text-gray-400 hover:border-emerald-500/30 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Counter */}
        <div className="mb-8 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <FolderGit2 size={16} className="text-emerald-400" />
            <span>
              Showing {filteredProjects.length} of {projects.length} documented projects
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-gray-500">
            <Sparkles size={14} className="text-emerald-400" />
            <span>Click any card for in-depth architecture details</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;