import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TerminalHero() {
  const [text, setText] = useState("");
  const fullText = "Initializing n3u.dev...\nLoading Modules...\n> Full Stack Developer\n> Backend Specialist\n> Automation Engineer\n\n> Access Granted.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col justify-center p-8 font-mono">
      <div className="max-w-3xl">
        <div className="text-[#00FF41] text-xl md:text-3xl whitespace-pre-wrap leading-relaxed">
          {text}
          <span className="cursor-blink">_</span>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-12"
      >
        <p className="text-muted-foreground text-sm mb-2">// Scroll to explore system</p>
        <div className="w-6 h-10 border-2 border-[#00FF41] rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-[#00FF41] rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
