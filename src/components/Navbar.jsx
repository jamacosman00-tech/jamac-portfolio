import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Award,
  Trophy,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Achievements", href: "#achievements", icon: Trophy },
  { name: "Contact", href: "#contact", icon: Mail },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-emerald-500/20 bg-[#051c15]/90 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent py-2"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1 text-2xl font-bold tracking-tight text-white transition hover:text-emerald-400"
          aria-label="Jama Osman Abdille Home"
        >
          <span className="text-emerald-400 transition group-hover:-translate-x-0.5">&lt;</span>
          <span>Jama</span>
          <span className="text-emerald-400 transition group-hover:translate-x-0.5">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wider transition duration-200 ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Icon size={14} className={isActive ? "text-emerald-400" : "text-gray-400"} />
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-emerald-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button Desktop */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition duration-200 hover:bg-emerald-500 hover:text-black hover:border-emerald-400"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-gray-300 hover:border-emerald-500/30 hover:text-emerald-400 focus:outline-none lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 flex flex-col bg-[#051c15]/95 backdrop-blur-xl border-t border-emerald-500/20 px-6 py-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <Icon
                    size={18}
                    className={isActive ? "text-emerald-400" : "text-gray-400"}
                  />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
