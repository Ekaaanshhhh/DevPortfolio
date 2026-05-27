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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="section" id="work">
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          Work
        </motion.div>
        
        <motion.div 
          className="display" 
          style={{ fontSize: "48px", marginBottom: "48px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
              <div className="proj-no">02</div>
              <div className="proj-name">SecureAuth — Industry-Grade MERN Auth</div>
              <p className="proj-desc">
                Production-ready auth system with JWT, bcrypt, RBAC, and Nodemailer email workflows on a scalable MongoDB backend.
              </p>
              <div className="proj-tech">
                <span className="proj-tech-tag">MongoDB</span>
                <span className="proj-tech-tag">Express.js</span>
                <span className="proj-tech-tag">React.js</span>
                <span className="proj-tech-tag">JWT</span>
              </div>
            </div>
            <div className="proj-status-col">
              <span className="proj-badge ongoing">Ongoing</span>
              <div className="proj-links-col">
                <a className="proj-link" href="#" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="proj-link" href="#" target="_blank" rel="noreferrer">Live ↗</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="proj-item" variants={itemVariants}>
            <div>
              <div className="proj-no">03</div>
              <div className="proj-name">DevPortfolio — Elegant Minimalist Portfolio</div>
              <p className="proj-desc">
                A highly refined, typography-driven personal portfolio featuring sophisticated serif aesthetics, perfectly balanced grid layouts, and fluid Framer Motion scroll animations designed to deliver a premium user experience.
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
          
          <motion.div className="proj-item" style={{ opacity: 0.4 }} variants={itemVariants}>
            <div>
              <div className="proj-no">04</div>
              <div className="proj-name" style={{ fontStyle: "italic", color: "var(--text2)" }}>
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