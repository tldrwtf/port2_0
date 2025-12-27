import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    repo?: string;
  };
  index: number;
}

export function ProjectCard({ title, description, tags, links, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-black border border-[#00FF41]/30 hover:border-[#00FF41] transition-colors duration-300 group h-full flex flex-col">
        <CardHeader className="border-b border-[#00FF41]/20 pb-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00FF41]" />
              <CardTitle className="text-xl font-bold text-[#00FF41] group-hover:text-[#39FF14] transition-colors">
                {title}
              </CardTitle>
            </div>
            <div className="text-xs text-[#00FF41]/50 font-mono">
              [ID: {index.toString().padStart(3, '0')}]
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 flex-grow">
          <div className="mb-4 font-mono text-sm text-[#00FF41]/80 leading-relaxed border-l-2 border-[#00FF41]/20 pl-4">
            {description}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 border border-[#00FF41]/40 text-[#00FF41] bg-[#00FF41]/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-[#00FF41]/20 pt-4 gap-4">
          {links.demo && (
            <a 
              href={links.demo} 
              className="flex items-center gap-2 text-sm text-[#00FF41] hover:text-[#39FF14] hover:underline decoration-dashed underline-offset-4"
            >
              <ExternalLink className="w-4 h-4" />
              EXECUTE DEMO
            </a>
          )}
          {links.repo && (
            <a 
              href={links.repo} 
              className="flex items-center gap-2 text-sm text-[#00FF41] hover:text-[#39FF14] hover:underline decoration-dashed underline-offset-4"
            >
              <Github className="w-4 h-4" />
              VIEW SOURCE
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
