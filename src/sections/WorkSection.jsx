import React from "react";
import { motion } from "framer-motion";

export default function WorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="section" id="work">
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          Work
        </motion.div>
        
        <motion.div 
          className="display" 
          style={{ fontSize: "48px", marginBottom: "48px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Featured<br /><em>Projects.</em>
        </motion.div>
        
        <motion.div 
          className="proj-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="proj-item" variants={itemVariants}>
            <div>
              <div className="proj-no">01</div>
              <div className="proj-name">ReelOps — AI Content Publishing Platform</div>
              <p className="proj-desc">
                Production-grade SaaS automating YouTube publishing via Google Data API. Features a fault-tolerant job scheduler, AES-encrypted OAuth tokens, live WebSocket streaming, and Groq AI metadata generation.
              </p>
              <div className="proj-tech">
                <span className="proj-tech-tag">React.js</span>
                <span className="proj-tech-tag">Node.js</span>
                <span className="proj-tech-tag">MongoDB</span>
                <span className="proj-tech-tag">GCP</span>
                <span className="proj-tech-tag">Docker</span>
              </div>
            </div>
            <div className="proj-status-col">
              <span className="proj-badge live">Live</span>
              <div className="proj-links-col">
                <a className="proj-link" href="https://github.com/Ekaaanshhhh/ReelOps" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="proj-link" href="https://reel-ops.vercel.app/" target="_blank" rel="noreferrer">Live ↗</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="proj-item" variants={itemVariants}>
            <div>
              <div className="proj-no">02</div>
              <div className="proj-name">Civix — Civic Issue Reporting Platform</div>
              <p className="proj-desc">
                Full-stack web app for real-time civic issue reporting with photo uploads, status tracking, and role-based workflows. Secured 9th at TechSprint by GDG, NIT Patna 2026.
              </p>
              <div className="proj-tech">
                <span className="proj-tech-tag">React.js</span>
                <span className="proj-tech-tag">Firebase</span>
                <span className="proj-tech-tag">Firestore</span>
                <span className="proj-tech-tag">RBAC</span>
              </div>
            </div>
            <div className="proj-status-col">
              <span className="proj-badge live">Live</span>
              <div className="proj-links-col">
                <a className="proj-link" href="https://github.com/shristi482004/Civix" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="proj-link" href="https://civix-7f8d2.web.app/" target="_blank" rel="noreferrer">Live ↗</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="proj-item" variants={itemVariants}>
            <div>
              <div className="proj-no">03</div>
              <div className="proj-name">DevPortfolio — Neo-Brutalist Portfolio</div>
              <p className="proj-desc">
                A bold, neo-brutalism personal portfolio featuring thick borders, hard box-shadows, vivid accents, and snappy Framer Motion animations — designed to stand out and make a statement.
              </p>
              <div className="proj-tech">
                <span className="proj-tech-tag">React.js</span>
                <span className="proj-tech-tag">Tailwind CSS</span>
                <span className="proj-tech-tag">Framer Motion</span>
                <span className="proj-tech-tag">UI/UX</span>
              </div>
            </div>
            <div className="proj-status-col">
              <span className="proj-badge live">Live</span>
              <div className="proj-links-col">
                <a className="proj-link" href="https://github.com/Ekaaanshhhh/DevPortfolio" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="proj-link" href="https://ekanshsatsangi.netlify.app" target="_blank" rel="noreferrer">Live ↗</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="proj-item" style={{ opacity: 0.5 }} variants={itemVariants}>
            <div>
              <div className="proj-no">04</div>
              <div className="proj-name" style={{ color: "var(--text3)" }}>
                More projects coming soon
              </div>
              <p className="proj-desc">Something new is being built. Watch this space.</p>
            </div>
            <div className="proj-status-col">
              <span className="proj-badge building">Building</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}