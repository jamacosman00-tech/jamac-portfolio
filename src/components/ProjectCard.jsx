import { useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Layers,
  Code2,
  Terminal,
} from "lucide-react";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  const isInProgress = project.status === "In Progress";

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.04]">
      <div>
        {/* Card Header: Icon & Status */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition group-hover:scale-105">
            <FolderGit2 size={24} />
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              isInProgress
                ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isInProgress ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
              }`}
            />
            {project.status}
          </span>
        </div>

        {/* Category */}
        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-emerald-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Technologies Badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Toggle Details Button */}
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition hover:text-emerald-300 focus:outline-none"
        >
          <span>{showDetails ? "Hide Project Details" : "View Project Details"}</span>
          {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {/* Expandable Project Details */}
        {showDetails && (
          <div className="mt-4 space-y-4 rounded-xl border border-emerald-500/20 bg-black/30 p-5 text-xs text-gray-300 animate-in fade-in duration-200">
            {project.overview && (
              <div>
                <p className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-white">
                  <Layers size={13} className="text-emerald-400" />
                  Overview
                </p>
                <p className="mt-1.5 leading-relaxed text-gray-400">
                  {project.overview}
                </p>
              </div>
            )}

            {project.problem && (
              <div>
                <p className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-white">
                  <Terminal size={13} className="text-emerald-400" />
                  Problem &amp; Objective
                </p>
                <p className="mt-1.5 leading-relaxed text-gray-400">
                  {project.problem}
                </p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <p className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-white">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  Key Features
                </p>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="mt-0.5 text-emerald-400 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.role && (
              <div>
                <p className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-white">
                  <Code2 size={13} className="text-emerald-400" />
                  My Role &amp; Contribution
                </p>
                <p className="mt-1.5 leading-relaxed text-gray-400">
                  {project.role}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Links (GitHub & Live Demo) */}
      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <a
          href={project.github && project.github !== "#" ? project.github : "https://github.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-semibold text-gray-300 transition duration-150 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
        >
          <FolderGit2 size={14} />
          <span>GitHub</span>
          <ExternalLink size={12} />
        </a>

        {project.demo && project.demo !== "#" ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-black transition duration-150 hover:bg-emerald-400"
          >
            <span>Live Demo</span>
            <ExternalLink size={12} />
          </a>
        ) : (
          <button
            type="button"
            disabled
            title="Live demo available upon deployment"
            className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.01] px-3.5 py-2 text-xs font-medium text-gray-600"
          >
            <span>Demo In Lab</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;