import React from "react";
import { motion } from "framer-motion";

export default function AchievementSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="section" id="achievements">
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          Achievements
        </motion.div>
        
        <motion.div 
          className="display" 
          style={{ fontSize: "48px", marginBottom: "48px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          A Record of<br /><em>Excellence.</em>
        </motion.div>
        
        <motion.div 
          className="ach-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="ach-card featured" variants={itemVariants}>
            <div className="ach-index">01 — Academic</div>
            <div className="ach-title">Qualified JEE Advanced 2024</div>
            <div className="ach-sub">Among 1.8M+ candidates</div>
            <div className="ach-desc">
              Demonstrated strong analytical problem-solving under extreme national-level competition.
            </div>
          </motion.div>

          <motion.div className="ach-card featured" variants={itemVariants}>
            <div className="ach-index">02 — Academic</div>
            <div className="ach-title">98.5 Percentile — JEE Mains 2023</div>
            <div className="ach-sub">Top 1.5% in India</div>
            <div className="ach-desc">
              Ranked in the top percentile nationally across mathematics, physics, and chemistry.
            </div>
          </motion.div>

          <motion.div className="ach-card" variants={itemVariants}>
            <div className="ach-index">03 — Fellowship</div>
            <div className="ach-title">AlgoUniversity Technology Fellowship</div>
            <div className="ach-sub">ATF 2025 · Top 8% Nationwide</div>
            <div className="ach-desc">
              Stage 2 Candidate — selected through competitive evaluation in DSA &amp; software engineering.
            </div>
          </motion.div>

          <motion.div className="ach-card featured" variants={itemVariants} style={{ background: "var(--bg3)" }}>
            <div className="ach-index">04 — Athletics</div>
            <div className="ach-title">Badminton Gold — Tatva Sports Fest</div>
            <div className="ach-sub" style={{ color: "var(--accent)" }}>Gold Medal · NIT Patna</div>
            <div className="ach-desc">
              Won gold in badminton at Tatva, NIT Patna's annual sports fest — competitive spirit beyond the screen.
            </div>
          </motion.div>

          <motion.div className="ach-card" variants={itemVariants}>
            <div className="ach-index">05 — Engineering</div>
            <div className="ach-title">300+ DSA Problems Solved</div>
            <div className="ach-sub">LeetCode · CodeChef · GFG</div>
            <div className="ach-desc">
              Strong command of data structures and algorithms in Java, built for technical interviews at scale.
            </div>
          </motion.div>

          <motion.div className="ach-card" variants={itemVariants}>
            <div className="ach-index">06 — Cloud</div>
            <div className="ach-title">20+ Google Cloud Skill Badges</div>
            <div className="ach-sub">Google Cloud Study Jams</div>
            <div className="ach-desc">
              Hands-on GCP experience across infrastructure, data platforms, AI/ML, and cloud services.
            </div>
          </motion.div>

          <motion.div className="ach-card" variants={itemVariants}>
            <div className="ach-index">07 — Academic</div>
            <div className="ach-title">ISC Class 12 — 93.5%</div>
            <div className="ach-sub">CISCE</div>
            <div className="ach-desc">
              Strong foundation in mathematics, physics, and computer science.
            </div>
          </motion.div>

          <motion.div className="ach-card" variants={itemVariants}>
            <div className="ach-index">08 — Academic</div>
            <div className="ach-title">ICSE Class 10 — 97.4%</div>
            <div className="ach-sub">CISCE</div>
            <div className="ach-desc">
              Early academic excellence with disciplined and consistent preparation.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}