import { motion, useSpring } from "framer-motion";
import { useState, useRef } from "react";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const springX = useSpring(rotate.x, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotate.y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
      }}
      className="relative group bg-white/5 backdrop-blur-xl 
      border border-white/10 rounded-2xl overflow-hidden 
      shadow-xl transition-transform duration-300"
    >

      {/* Animated Gradient Border Glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none
        bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-pink-500/20
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
      />

      {/* Image */}
<div className="relative h-48 overflow-hidden">
  
  {/* Status Badge */}
  <span
    className={`absolute top-3 right-3 z-20 text-xs px-3 py-1 rounded-full 
    backdrop-blur-md transition-all duration-300
    ${
      project.status === "Live"
        ? "bg-green-500/60 text-green-300 border border-green-500/30"
        : project.status === "Ongoing"
        ? "bg-yellow-500/60 text-yellow-300 border border-yellow-500/30"
        : "bg-purple-500/60 text-purple-300 border border-purple-500/30"
    }`}
  >
    {project.status}
  </span>

  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.6 }}
    className="h-full w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${project.image})` }}
  />

  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
</div>

      {/* Content */}
      <div className="p-6 relative z-10">


        <motion.h3
          whileHover={{ x: 5 }}
          className="text-xl font-semibold text-white mb-3 transition"
        >
          {project.title}
        </motion.h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-xs px-3 py-1 bg-purple-500/10 
              text-purple-300 rounded-full 
              border border-purple-500/20 
              hover:bg-purple-500/20 transition"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-6 text-sm font-medium">
          <motion.a
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            className="text-white hover:text-purple-400 transition"
          >
            GitHub →
          </motion.a>

          <motion.a
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            className="text-white hover:text-cyan-400 transition"
          >
            Live →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}