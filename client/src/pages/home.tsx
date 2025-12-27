import { TerminalHero } from "@/components/terminal-hero";
import { ProjectCard } from "@/components/project-card";
import { NavBar } from "@/components/nav-bar";
import { CrtOverlay } from "@/components/crt-overlay";
import { MatrixRain } from "@/components/matrix-rain";
import { ScrambleHover } from "@/components/scramble-hover";
import { CommandPalette } from "@/components/command-palette";
import { motion } from "framer-motion";
import { Mail, Github, Terminal, Server, Cpu, Database } from "lucide-react";

const projects = [
  {
    title: "Steam_Gem_Key_Bot",
    description: "Free Steam trading bot for automated gem and key swaps. Handles trade offers, inventory management, and user interactions. 24+ stars on GitHub.",
    tags: ["JavaScript", "Node.js", "Steam API", "Automation"],
    links: { repo: "https://github.com/tldrwtf/Steam-Gem-Key-Bot" }
  },
  {
    title: "info",
    description: "Comprehensive full stack web development cheat sheets, guides, and compiled learning resources. Covers Python, Flask, React, and more.",
    tags: ["Python", "Flask", "React", "Documentation"],
    links: { demo: "https://tldrwtf.github.io/info/", repo: "https://github.com/tldrwtf/info" }
  },
  {
    title: "nVouches",
    description: "Discord bot for handling vouches and reputation tracking for services. Features automated vouch management and verification systems.",
    tags: ["Python", "Discord.py", "Bot", "Automation"],
    links: { repo: "https://github.com/tldrwtf/nVouches" }
  },
  {
    title: "pokedo",
    description: "Pokemon-themed task and wellbeing manager CLI application. Gamifies productivity with Pokemon mechanics and wellness tracking.",
    tags: ["Python", "CLI", "Task Manager", "Wellbeing"],
    links: { demo: "https://tldrwtf.github.io/pokedo/", repo: "https://github.com/tldrwtf/pokedo" }
  },
  {
    title: "go_library_steam_v2",
    description: "Library for building Steam bots using Go language. Provides abstractions for Steam authentication, trading, and inventory management.",
    tags: ["Go", "Steam API", "Library", "Backend"],
    links: { repo: "https://github.com/tldrwtf/go-library-steam-v2" }
  },
  {
    title: "nCombo",
    description: "Combo manager and editor utility tool. Features parsing, editing, and management of combo lists with various format support.",
    tags: ["Python", "CLI", "Utility", "Tool"],
    links: { repo: "https://github.com/tldrwtf/nCombo" }
  }
];

const skills = [
  { icon: Terminal, label: "Frontend", items: "React, Next.js, HTML5, Tailwind CSS" },
  { icon: Server, label: "Backend", items: "Node.js, Python, Go, Flask, Express" },
  { icon: Database, label: "Database", items: "PostgreSQL, SQLAlchemy, SQLite" },
  { icon: Cpu, label: "Tools", items: "Git, Docker, Discord.py, Steam API" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#00FF41] font-mono selection:bg-[#00FF41] selection:text-black pb-20 relative overflow-x-hidden">
      <CrtOverlay />
      <MatrixRain />
      <NavBar />
      <CommandPalette />
      
      <main className="container mx-auto px-6 md:px-12 pt-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center">
          <TerminalHero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-[#00FF41]/20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-[#00FF41]">
              <ScrambleHover text="SYSTEM_STATUS" />
            </h2>
            <div className="h-px bg-[#00FF41]/30 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-[#00FF41]/80 leading-relaxed">
              <p>
                &gt; IDENTITY: Wilson Garcia // n3u
                <br/>
                &gt; LOCATION: Remote // Working from home
                <br/>
                &gt; MISSION: Building robust backend systems and automation tools.
              </p>
              <p>
                Full Stack Developer with a focus on backend development. I specialize in building automation tools,
                Discord bots, and API integrations. My projects range from Steam trading bots to developer resource documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div 
                  key={skill.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 255, 65, 0.1)" }}
                  className="p-4 border border-[#00FF41]/20 bg-[#00FF41]/5 transition-colors cursor-crosshair group"
                >
                  <skill.icon className="w-8 h-8 mb-3 text-[#39FF14] group-hover:animate-pulse" />
                  <h3 className="font-bold mb-2">
                    <ScrambleHover text={skill.label} />
                  </h3>
                  <p className="text-xs text-[#00FF41]/70">{skill.items}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-[#00FF41]/20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-[#00FF41]">
              <ScrambleHover text="EXECUTABLE_MODULES" />
            </h2>
            <div className="h-px bg-[#00FF41]/30 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-[#00FF41]/20 mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-[#00FF41]">
              <ScrambleHover text="ESTABLISH_UPLINK" />
            </h2>
            <div className="h-px bg-[#00FF41]/30 flex-grow"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
             <a href="mailto:n3u.dev@gmail.com" className="group flex items-center gap-4 px-8 py-4 border border-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all duration-300 w-full md:w-auto justify-center">
              <Mail className="w-6 h-6 group-hover:animate-bounce" />
              <span className="font-bold tracking-wider">
                <ScrambleHover text="SEND_TRANSMISSION" />
              </span>
            </a>

            <div className="flex gap-4">
              <a href="https://github.com/tldrwtf" target="_blank" rel="noopener noreferrer" className="p-4 border border-[#00FF41]/50 hover:border-[#39FF14] hover:text-[#39FF14] transition-colors hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
        
        <footer className="text-center text-xs text-[#00FF41]/40 pt-12">
          <p>SYSTEM_ID: N3U-2025 // DEVELOPED_BY_WILSON_GARCIA</p>
        </footer>
      </main>
    </div>
  );
}
