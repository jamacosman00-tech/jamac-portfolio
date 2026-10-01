import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import LearningJourney from "./components/LearningJourney";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#051c15] text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Primary Emerald Atmospheric Background Layers */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        {/* Base Rich Emerald Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07241b] via-[#051c15] to-[#03130e]" />
        
        {/* Radial Emerald Top Highlight */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.22),transparent_70%)]" />
        
        {/* Ambient Emerald Orb Overlays */}
        <div className="absolute top-1/4 -left-48 h-[600px] w-[600px] rounded-full bg-emerald-500/12 blur-[150px]" />
        <div className="absolute top-2/3 -right-48 h-[700px] w-[700px] rounded-full bg-teal-500/10 blur-[160px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Technical Skills */}
        <Skills />

        {/* Projects Showcase */}
        <Projects />

        {/* Certificates & Training */}
        <Certificates />

        {/* Achievements & Extracurriculars */}
        <Achievements />

        {/* Learning Journey Roadmap */}
        <LearningJourney />

        {/* GitHub Code Exploration */}
        <GitHubSection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;