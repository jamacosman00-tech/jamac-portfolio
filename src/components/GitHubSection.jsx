import { FolderGit2, ExternalLink, GitBranch, Terminal } from "lucide-react";

// Placeholder GitHub URL: Replace with your actual GitHub username URL
const GITHUB_PROFILE_URL = "https://github.com/JamaOsman";

function GitHubSection() {
  return (
    <section className="relative border-t border-emerald-500/10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12 backdrop-blur-xl">
          {/* Subtle Background Glow */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1.5 text-xs font-semibold text-emerald-400">
                <GitBranch size={14} />
                <span>Open Source &amp; Version Control</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Explore My <span className="text-emerald-400">Code</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                Most of my learning happens through practical projects. Explore
                my GitHub repositories to see what I am building and learning.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1">
                  <Terminal size={12} className="text-emerald-400" />
                  git commit -m "Learning by building"
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start lg:col-span-4 lg:items-end justify-center">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              >
                <FolderGit2 size={18} />
                <span>Visit GitHub Profile</span>
                <ExternalLink size={16} />
              </a>

              <span className="mt-2 text-[11px] text-gray-500">
                Opens GitHub in a new tab
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubSection;
