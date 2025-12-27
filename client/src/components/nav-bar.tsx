import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ScrambleHover } from "@/components/scramble-hover";

export function NavBar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "ROOT" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#00FF41]/20 h-16 flex items-center px-6 md:px-12 justify-between">
      <div className="text-[#00FF41] font-bold text-lg tracking-tighter hover:animate-pulse cursor-pointer flex items-center gap-2 group">
        <span className="text-[#39FF14] group-hover:rotate-90 transition-transform duration-300">&gt;</span> 
        <ScrambleHover text="SYSTEM_ADMIN" />
      </div>

      <div className="flex gap-6 md:gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "text-sm font-mono tracking-wide transition-all duration-200 hover:text-[#39FF14] hover:shadow-[0_0_10px_#00FF41]",
              location === item.href ? "text-[#00FF41] underline decoration-2 underline-offset-4" : "text-[#00FF41]/60"
            )}
          >
            [<ScrambleHover text={item.label} />]
          </a>
        ))}
      </div>
    </nav>
  );
}
