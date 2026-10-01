import { ExternalLink, Mail, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-emerald-500/20 bg-[#03130e] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-1 text-2xl font-bold tracking-tight text-white hover:text-emerald-400 transition"
              aria-label="Back to top"
            >
              <span className="text-emerald-400">&lt;</span>
              <span>Jama</span>
              <span className="text-emerald-400">/&gt;</span>
            </a>
            <p className="mt-2 text-xs text-gray-400">
              Computer Science Student | Building, Learning, and Growing.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/JamaOsman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2 text-gray-300 transition hover:border-emerald-500/30 hover:text-emerald-400"
            >
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://linkedin.com/in/jama-osman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2 text-gray-300 transition hover:border-emerald-500/30 hover:text-emerald-400"
            >
              <span>LinkedIn</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="mailto:jama.osman.dev@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2 text-gray-300 transition hover:border-emerald-500/30 hover:text-emerald-400"
            >
              <Mail size={12} />
              <span>Email</span>
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-gray-400 transition hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-gray-500">
          <p>© 2026 Jama Osman Abdille. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
