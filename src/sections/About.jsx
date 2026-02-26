import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-24 md:py-28 bg-gradient-to-b from-[#050816] via-[#060b1f] to-[#050816] overflow-hidden" id="about">

      {/* Animated background glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-0 top-40 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute right-0 bottom-40 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT SIDE — TEXT */}
          <div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              I’m an Electronics and Communication Engineering undergraduate from National Institute of Technology, Patna with a strong
              foundation in problem solving and full-stack development.
              I enjoy building modern, scalable web applications and continuously strengthening
              my understanding of data structures, algorithms, and system design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mt-6"
            >
              My work spans across frontend interfaces built with React and Tailwind,
              backend systems using Node.js and Express, and database integrations with
              MongoDB, Firebase, and Supabase. I focus on writing clean, maintainable code
              and building products that are both performant and user-centric.
            </motion.p>
            <motion.a
            href="https://drive.google.com/file/d/14RgOTnUIn5cpigWzOwyHxr_nJ4PSUg7r/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mt-10
            px-6 py-3
            bg-gradient-to-r from-purple-500/20 to-cyan-400/20
            border border-white/10
            rounded-xl
            text-white font-medium
            backdrop-blur-md
            hover:from-purple-500/30 hover:to-cyan-400/30
            hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
            transition-all duration-300"
          >
            View Resume
            <span className="text-lg">↗</span>
          </motion.a>

          </div>

          {/* RIGHT SIDE — 3D IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={
              !isMobile
                ? {
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                  }
                : {}
            }
            className="relative flex justify-center"
          >

            {/* Glow Behind Image */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96
              bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-pink-500/20
              blur-3xl rounded-full"
            />

            {/* Image Card */}
            <div className="relative w-64 h-80 md:w-80 md:h-[420px]
              bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl overflow-hidden shadow-2xl">

              {/* Replace with your image */}
              <img
                src="/assets/IMG_7591_Original 3.jpg"
                alt="Ekansh"
                className="w-full h-full object-cover"
              />

            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}