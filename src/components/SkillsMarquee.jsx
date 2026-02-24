import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
  SiRedux,
  SiVite,
  SiNextdotjs,
  SiPostman
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
];

export default function SkillsMarquee() {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-10">

      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#050816] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#050816] to-transparent z-10" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3
            bg-white/5 backdrop-blur-lg border border-white/10
            px-6 py-3 rounded-full
            text-gray-300
            hover:border-purple-500/40
            hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]
            transition"
          >
            <div className="text-lg">
              {skill.icon}
            </div>
            <span className="text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}