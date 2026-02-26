import { useState, useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function ContactSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const springX = useSpring(rotate.x, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotate.y, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden
      bg-gradient-to-b from-[#050816] via-[#060b1f] to-[#050816]"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 top-40 
        w-[600px] h-[600px]
        bg-purple-600/20 blur-3xl rounded-full"
      />

      <div className="max-w-xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-purple-400/70 tracking-widest uppercase text-xs">
            Interested?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Contact Me
          </h2>
        </div>

        {/* 3D Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={
            !isMobile
              ? {
                  rotateX: springX,
                  rotateY: springY,
                  transformPerspective: 1400,
                }
              : {}
          }
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 
          p-10 md:p-12 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        >
          <form className="space-y-10 relative z-10">

            {/* Floating Input Component */}
            {[
              { label: "Name", value: name, setter: setName, type: "text" },
              { label: "Email", value: email, setter: setEmail, type: "email" },
            ].map((field, index) => (
              <div key={index} className="relative">
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  placeholder=" "
                  className="peer w-full bg-[#0b1120] border border-white/10
                  rounded-xl px-5 pt-6 pb-3 text-white
                  focus:outline-none focus:border-purple-500/40
                  focus:ring-2 focus:ring-purple-500/20 transition"
                />
                <label
                  className="absolute left-5 top-3 text-gray-400 text-sm
                  transition-all duration-200
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-500
                  peer-focus:top-3
                  peer-focus:text-sm
                  peer-focus:text-purple-400"
                >
                  {field.label}
                </label>
              </div>
            ))}

            {/* Message */}
            <div className="relative">
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder=" "
                className="peer w-full bg-[#0b1120] border border-white/10
                rounded-xl px-5 pt-6 pb-3 text-white resize-none
                focus:outline-none focus:border-pink-500/40
                focus:ring-2 focus:ring-pink-500/20 transition"
              />
              <label
                className="absolute left-5 top-3 text-gray-400 text-sm
                transition-all duration-200
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-500
                peer-focus:top-3
                peer-focus:text-sm
                peer-focus:text-pink-400"
              >
                Message
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl
              bg-[#0b1120] border border-white/10
              text-white font-medium tracking-wide
              transition-all duration-300
              hover:border-purple-500/40
              hover:bg-[#111827]
              hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            >
              Send Message
            </button>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10 flex justify-center gap-6 text-sm text-gray-400">
              <a
                href="https://www.instagram.com/ekaa_nshhhh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/ekansh-satsangi-154b40350/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Ekaaanshhhh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                GitHub
              </a>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}