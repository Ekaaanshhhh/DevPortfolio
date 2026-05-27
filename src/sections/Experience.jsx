import React from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.div>
        
        <motion.div 
          className="display" 
          style={{ fontSize: "48px", marginBottom: "48px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Where I've<br /><em>Contributed.</em>
        </motion.div>
        
        <div className="rule wide"></div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="exp-item" variants={itemVariants}>
            <div>
              <div className="exp-date">May 2025 — Present</div>
              <div className="exp-org">HackSlash<br />Web Dev Team</div>
            </div>
            <div>
              <div className="exp-role">Web Developer</div>
              <p className="exp-desc">
                Designed and deployed scalable web solutions for college-wide hackathons at NIT Patna, applying OOP principles and agile practices. Maintained modular, version-controlled codebases and resolved performance bottlenecks under tight deadlines.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">React.js</span>
                <span className="exp-tag">Node.js</span>
                <span className="exp-tag">Git</span>
                <span className="exp-tag">Agile</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="exp-item" variants={itemVariants}>
            <div>
              <div className="exp-date">Apr 2025 — Present</div>
              <div className="exp-org">IEEE Student Branch<br />NIT Patna</div>
            </div>
            <div>
              <div className="exp-role">Technical Team Member</div>
              <p className="exp-desc">
                Attended hands-on workshops in ECE fundamentals, Arduino, ESP32, robotics, and AI/ML integrations, building practical exposure to embedded systems and intelligent hardware-software solutions.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">Arduino</span>
                <span className="exp-tag">ESP32</span>
                <span className="exp-tag">Robotics</span>
                <span className="exp-tag">AI/ML</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="exp-item" variants={itemVariants}>
            <div>
              <div className="exp-date">Jan 2025 — Present</div>
              <div className="exp-org">NSS Sankalp<br />NIT Patna</div>
            </div>
            <div>
              <div className="exp-role">Volunteer Teacher</div>
              <p className="exp-desc">
                Mentored underprivileged students from local communities in foundational subjects, fostering an inclusive learning environment and adapting teaching approaches to diverse learner needs.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">Teaching</span>
                <span className="exp-tag">Mentoring</span>
                <span className="exp-tag">Community</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
