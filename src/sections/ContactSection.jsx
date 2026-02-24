import { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function ContactSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth spring rotation
  const springX = useSpring(rotate.x, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotate.y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18; // stronger tilt
    const rotateX = ((y / rect.height) - 0.5) * -18;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-28 overflow-hidden 
    bg-gradient-to-b from-[#050816] via-[#060b1f] to-[#050816]">

      {/* Ambient Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 top-40 w-[500px] h-[500px]
        bg-purple-600/20 blur-3xl rounded-full"
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* Centered Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400/70 tracking-widest uppercase text-xs">
            Interested?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Contact Me
          </h2>
        </div>

        {/* Centered Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={
            !isMobile
              ? {
                  transform: `perspective(1200px) rotateX(${springX.get()}deg) rotateY(${springY.get()}deg)`
                }
              : {}
          }
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10
          p-8 md:p-10 rounded-3xl shadow-2xl transition-transform duration-200"
        >

          {/* Subtle Neon Edge Glow */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none
            border border-transparent
            bg-gradient-to-r from-purple-500/10 via-cyan-400/10 to-pink-500/10
            opacity-30"
          />

          <form className="space-y-8 relative z-10">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#0b1120] border border-white/10
                rounded-xl px-4 py-3 text-white placeholder-gray-500
                focus:outline-none focus:border-purple-500/50
                focus:ring-2 focus:ring-purple-500/30 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#0b1120] border border-white/10
                rounded-xl px-4 py-3 text-white placeholder-gray-500
                focus:outline-none focus:border-cyan-400/50
                focus:ring-2 focus:ring-cyan-400/30 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Let's build something impactful."
                className="w-full bg-[#0b1120] border border-white/10
                rounded-xl px-4 py-3 text-white placeholder-gray-500
                focus:outline-none focus:border-pink-500/50
                focus:ring-2 focus:ring-pink-500/30 transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl
              bg-[#0b1120] border border-white/10
              text-white font-medium tracking-wide
              transition-all duration-300
              hover:border-purple-500/40
              hover:bg-[#111827]
              hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              Send Message
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}