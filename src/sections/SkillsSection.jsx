import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
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
    <section className="section" id="tech-stack">
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.div>
        
        <motion.div 
          className="display" 
          style={{ fontSize: "48px", marginBottom: "56px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tools of<br /><em>the Craft.</em>
        </motion.div>
        
        <div className="stack-layout">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="stack-nav-item active">Languages</div>
            <div className="stack-nav-item">Frameworks</div>
            <div className="stack-nav-item">Databases</div>
            <div className="stack-nav-item">Security</div>
          </motion.div>
          
          <motion.div 
            className="stack-groups"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants}>
              <div className="stack-group-title">Languages</div>
              <div className="stack-pills">
                <span className="stack-pill">JavaScript</span>
                <span className="stack-pill">TypeScript</span>
                <span className="stack-pill">Java</span>
                <span className="stack-pill">Python</span>
                <span className="stack-pill">C</span>
                <span className="stack-pill">HTML</span>
                <span className="stack-pill">CSS</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="stack-group-title">Frameworks &amp; Libraries</div>
              <div className="stack-pills">
                <span className="stack-pill">React.js</span>
                <span className="stack-pill">Node.js</span>
                <span className="stack-pill">Express.js</span>
                <span className="stack-pill">NumPy</span>
                <span className="stack-pill">Pandas</span>
                <span className="stack-pill">Seaborn</span>
                <span className="stack-pill">Tailwind CSS</span>
                <span className="stack-pill">Zustand</span>
                <span className="stack-pill">Shadcn/ui</span>
                <span className="stack-pill">Three.js</span>
                <span className="stack-pill">Framer Motion</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="stack-group-title">Databases &amp; Cloud</div>
              <div className="stack-pills">
                <span className="stack-pill">MongoDB</span>
                <span className="stack-pill">Firebase</span>
                <span className="stack-pill">MySQL</span>
                <span className="stack-pill">Supabase</span>
                <span className="stack-pill">Appwrite</span>
                <span className="stack-pill">GCP</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="stack-group-title">Security &amp; Tools</div>
              <div className="stack-pills">
                <span className="stack-pill">JWT</span>
                <span className="stack-pill">bcrypt</span>
                <span className="stack-pill">RBAC</span>
                <span className="stack-pill">REST APIs</span>
                <span className="stack-pill">Git</span>
                <span className="stack-pill">Postman</span>
                <span className="stack-pill">Clerk</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}