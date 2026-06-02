import React from "react";
import { motion } from "framer-motion";

export default function CertificationsSection() {
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
    <section className="section" id="certifications">
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          Certifications
        </motion.div>
        
        <motion.div 
          className="display" 
          style={{ fontSize: "48px", marginBottom: "48px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Verified<br /><em>Credentials.</em>
        </motion.div>
        
        <motion.div 
          className="ach-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="ach-card featured" variants={itemVariants}>
            <div className="ach-index">01 — NPTEL</div>
            <div className="ach-title">Joy of Computing Using Python</div>
            <div className="ach-sub">Scored 94% · Top 5% Nationwide</div>
            <div className="ach-desc">
              Comprehensive understanding of Python programming and computational thinking through a rigorous academic curriculum.
            </div>
          </motion.div>

          <motion.div className="ach-card featured" variants={itemVariants}>
            <div className="ach-index">02 — Fellowship</div>
            <div className="ach-title">AlgoUniversity Technology Fellowship</div>
            <div className="ach-sub">Top 8% Nationwide out of 250,000</div>
            <div className="ach-desc">
              Stage 2 Candidate selected through an intensive competitive evaluation process in algorithms and software engineering.
            </div>
          </motion.div>

          <motion.div className="ach-card" variants={itemVariants}>
            <div className="ach-index">03 — Development</div>
            <div className="ach-title">Complete Web Development Course</div>
            <div className="ach-sub">Udemy</div>
            <div className="ach-desc">
              Mastered modern web development stacks, building full-scale responsive applications from scratch.
            </div>
          </motion.div>

          <motion.div className="ach-card" variants={itemVariants}>
            <div className="ach-index">04 — Simulation</div>
            <div className="ach-title">Commonwealth Bank Simulation</div>
            <div className="ach-sub">Software Engineering Virtual Job Simulation · Forage</div>
            <div className="ach-desc">
              Completed practical software engineering tasks modeled on real-world Commonwealth Bank operations and development workflows.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
