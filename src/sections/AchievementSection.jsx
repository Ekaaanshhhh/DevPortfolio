import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const achievements = [
  {
    title: "Qualified JEE Advanced 2024",
    description: "Among 1.4M+ candidates nationwide",
    impact:
      "Demonstrated strong problem-solving ability and performance under extreme national-level competition.",
  },
  {
    title: "98.5 Percentile in JEE Mains 2023",
    description: "Top 1.5% in India",
    impact:
      "Ranked in the top percentile nationally, reflecting academic rigor and consistency.",
  },
  {
    title: "AlgoUniversity Technology Fellowship (ATF 2025)",
    description: "Top 8% Nationwide",
    impact:
      "Selected among high-performing engineers through a competitive evaluation process.",
  },
  {
    title: "ISC Class 12 – 93.5%",
    description: "Council for the Indian School Certificate Examinations",
    impact:
      "Strong academic foundation across mathematics, physics, and computer science.",
  },
  {
    title: "ICSE Class 10 – 97.4%",
    description: "Council for the Indian School Certificate Examinations",
    impact:
      "Demonstrated early academic excellence and disciplined preparation.",
  },
  {
    title: "Solved 200+ DSA Problems",
    description: "LeetCode • CodeChef • GFG",
    impact:
      "Built strong foundations in data structures and algorithms for technical interviews.",
    link: "https://leetcode.com/u/Ekanshflyfly/",
  },
];

export default function AchievementSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.6,
  });

  const lightPosition = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "98%"]
  );

  return (
    <section
      ref={ref}
      className="relative py-20 bg-[#050816] overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Achievements
          </h2>
        </div>

        <div className="relative">

          {/* Base faint line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10" />

          {/* Outer glow aura */}
          <motion.div
            style={{ scaleY: smoothProgress }}
            className="origin-top absolute left-1/2 top-0 -translate-x-1/2
            w-[10px] h-full
            bg-gradient-to-b from-purple-500/20 via-cyan-400/20 to-pink-500/20
            blur-xl"
          />

          {/* Main animated beam */}
          <motion.div
            style={{ scaleY: smoothProgress }}
            className="origin-top absolute left-1/2 top-0 -translate-x-1/2
            w-[4px] h-full rounded-full
            bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500
            shadow-[0_0_30px_rgba(168,85,247,0.9)]"
          />

          {/* Traveling glow (soft outer) */}
          <motion.div
            style={{ top: lightPosition }}
            className="absolute left-1/2 -translate-x-1/2
            w-10 h-10 rounded-full
            bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500
            blur-2xl opacity-70 pointer-events-none"
          />

          {/* Traveling glow core */}
          <motion.div
            style={{ top: lightPosition }}
            className="absolute left-1/2 -translate-x-1/2
            w-4 h-4 rounded-full bg-white
            shadow-[0_0_25px_rgba(168,85,247,1)]
            pointer-events-none"
          />

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className={`relative flex items-center mb-10 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div
                className="w-[48%] bg-white/5 backdrop-blur-xl border border-white/10
                p-7 rounded-2xl shadow-2xl
                hover:scale-[1.02] transition duration-300
                hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-cyan-400 transition duration-300
                      hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>

                <p className="text-purple-300 mt-2 text-sm">
                  {item.description}
                </p>

                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {item.impact}
                </p>

                {/* {item.link && (
                  <p className="text-xs text-gray-500 mt-2">
                    View Profile
                  </p>
                )} */}
              </div>

              {/* Timeline node */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2
                w-6 h-6 rounded-full
                bg-gradient-to-r from-purple-500 to-cyan-400"
                whileInView={{
                  boxShadow:
                    "0px 0px 25px rgba(168,85,247,0.9), 0px 0px 45px rgba(6,182,212,0.6)",
                  scale: 1.15,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}