import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
  SiFramer,
} from "react-icons/si";
import { Reveal } from "@/components/shared/Reveal";

const TECHS = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiPhp, name: "PHP", color: "#777BB4" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { icon: SiCss, name: "CSS", color: "#1572B6" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  { icon: SiVite, name: "Vite", color: "#B73BFE" },
  { icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
];

export function TechStack() {
  return (
    <section id="tecnologie" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-[#22D3EE] tracking-wide uppercase">
            Tecnologie
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white">
            Lo stack che uso ogni giorno
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Strumenti moderni e affidabili, scelti per garantire qualità,
            velocità e scalabilità nel tempo.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {TECHS.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 0.03}>
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center justify-center gap-3 rounded-xl glass p-6 h-full"
              >
                <tech.icon
                  className="h-8 w-8 transition-transform duration-300"
                  style={{ color: tech.color }}
                />
                <span className="text-xs font-medium text-slate-400 text-center">
                  {tech.name}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
