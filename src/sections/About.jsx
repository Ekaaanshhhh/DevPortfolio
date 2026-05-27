import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.div>
        
        <div className="about-layout">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="display" style={{ fontSize: "60px" }}>
              Full-Stack<br /><em>Developer.</em>
            </h2>
            <div className="rule"></div>
            <p className="body-text">
              Electronics &amp; Communication Engineering undergraduate at NIT Patna. Building modern, scalable web applications with a focus on security, clean architecture, and products that are both performant and user-centric.
            </p>
            <p className="pull-quote">
              "I build systems that are secure by design, not by accident."
            </p>
            <div className="tag-list">
              <span className="tag accent">React.js</span>
              <span className="tag accent">Node.js</span>
              <span className="tag accent">MongoDB</span>
              <span className="tag">Firebase</span>
              <span className="tag">JWT / bcrypt</span>
              <span className="tag">RBAC</span>
              <span className="tag">TypeScript</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="photo-frame">
              <img src="/assets/IMG_7591_Original 3.jpg" alt="Ekansh Satsangi" />
            </div>
            <div className="photo-caption">
              <span className="photo-caption-name">Ekansh Satsangi</span>
              <span className="photo-caption-loc">Kanpur, India</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="stat-strip" 
          style={{ marginTop: "24px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="stat-cell">
            <div className="stat-n">8.7</div>
            <div className="stat-l">CGPA · NIT Patna</div>
          </div>
          <div className="stat-cell">
            <div className="stat-n">300+</div>
            <div className="stat-l">DSA Problems</div>
          </div>
          <div className="stat-cell">
            <div className="stat-n">98.5</div>
            <div className="stat-l">JEE Percentile</div>
          </div>
          <div className="stat-cell">
            <div className="stat-n">20+</div>
            <div className="stat-l">GCP Badges</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}