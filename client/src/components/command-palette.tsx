import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CommandPalette() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const commands: Record<string, string> = {
    "help": "Available commands: help, about, projects, contact, clear, date, whoami",
    "about": "Navigating to About section...",
    "projects": "Navigating to Projects section...",
    "contact": "Opening communication channels...",
    "date": new Date().toLocaleString(),
    "whoami": "guest@portfolio-v1",
    "sudo": "Permission denied: You are not root.",
    "clear": "CLEAR_OUTPUT"
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (commands[cmd]) {
      if (commands[cmd] === "CLEAR_OUTPUT") {
        setOutput(null);
      } else {
        setOutput(`> ${cmd}\n${commands[cmd]}`);
        
        // Simulate navigation
        if (cmd === "about") document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        if (cmd === "projects") document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        if (cmd === "contact") document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setOutput(`> ${cmd}\nCommand not found: ${cmd}. Type 'help' for available commands.`);
    }
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
       <div className={`transition-all duration-300 ${isOpen ? 'w-80' : 'w-12'} bg-black border border-[#00FF41] shadow-[0_0_10px_rgba(0,255,65,0.2)] overflow-hidden rounded-sm`}>
         {!isOpen ? (
           <button 
             onClick={() => setIsOpen(true)}
             className="w-12 h-12 flex items-center justify-center text-[#00FF41] hover:bg-[#00FF41]/10 cursor-pointer"
           >
             <span className="font-mono text-xl">&gt;_</span>
           </button>
         ) : (
           <div className="p-4 font-mono text-sm">
             <div className="flex justify-between items-center mb-2 text-[#00FF41]/50 text-xs uppercase tracking-wider">
               <span>Terminal_Input</span>
               <button onClick={() => setIsOpen(false)} className="hover:text-[#00FF41]">X</button>
             </div>
             
             {output && (
               <div className="mb-2 text-[#00FF41]/80 whitespace-pre-wrap font-mono text-xs p-2 bg-[#00FF41]/5 border-l-2 border-[#00FF41]/30">
                 {output}
               </div>
             )}

             <form onSubmit={handleCommand} className="flex items-center gap-2">
               <span className="text-[#00FF41]">&gt;</span>
               <input
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 className="bg-transparent border-none outline-none text-[#00FF41] w-full font-mono focus:ring-0 placeholder:text-[#00FF41]/30"
                 placeholder="Type 'help'..."
                 autoFocus
               />
             </form>
           </div>
         )}
       </div>
    </div>
  );
}
