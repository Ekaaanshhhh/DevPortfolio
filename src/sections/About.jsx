import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function TypingHeading() {
  const fullText = "Full-Stack";
  const subText = "Developer.";
  const [displayedMain, setDisplayedMain] = useState("");
  const [displayedSub, setDisplayedSub] = useState("");
  const [phase, setPhase] = useState("waiting"); // waiting | typing-main | typing-sub | done
  const ref = useRef(null);

  // Start typing when element scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === "waiting") {
          setPhase("typing-main");
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [phase]);

  // Type main text
  useEffect(() => {
    if (phase !== "typing-main") return;
    if (displayedMain.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedMain(fullText.slice(0, displayedMain.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      // Small pause before typing sub text
      const pause = setTimeout(() => setPhase("typing-sub"), 200);
      return () => clearTimeout(pause);
    }
  }, [phase, displayedMain]);

  // Type sub text
  useEffect(() => {
    if (phase !== "typing-sub") return;
    if (displayedSub.length < subText.length) {
      const timeout = setTimeout(() => {
        setDisplayedSub(subText.slice(0, displayedSub.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setPhase("done");
    }
  }, [phase, displayedSub]);

  return (
    <h2 ref={ref} className="display" style={{ fontSize: "60px", minHeight: "140px" }}>
      {displayedMain}
      {phase === "waiting" && <span className="typing-cursor" />}
      {phase === "typing-main" && <span className="typing-cursor" />}
      
      {displayedMain.length === fullText.length && <br />}
      <em>
        {displayedSub}
        {(phase === "typing-sub" || phase === "done") && (
          <span className="typing-cursor" />
        )}
      </em>
    </h2>
  );
}

export default function AboutSection({ onOpenEko }) {
  return (
    <section className="section" id="about" style={{ paddingTop: "140px" }}>
      <div className="container">
        <motion.div 
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.div>
        
        <div className="about-layout">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-start gap-6 xl:gap-12 relative w-full">
              <TypingHeading />
              <div className="xl:mt-0 xl:mb-8">
                <button 
                  onClick={onOpenEko}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] border-[length:var(--border-w)] border-[var(--border)] text-[var(--white)] font-bold font-mono text-[16px] uppercase tracking-widest transition-all duration-300 shadow-[var(--shadow)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[10px_10px_0px_var(--border)]" 
                >
                  <span>Meet EKO</span>
                  <span className="text-2xl animate-pulse">✨</span>
                </button>
              </div>
            </div>
            <div className="rule"></div>
            <p className="body-text">
              Electronics &amp; Communication Engineering undergraduate at NIT Patna. Building modern, scalable web applications with a focus on security, clean architecture, and products that are both performant and user-centric.
            </p>
            <div className="mt-12 mb-12">
              <a 
                href="https://drive.google.com/file/d/1LzTuZGSLCa0_aPTBC79Ivl1lsjzFO93Y/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--bg2)] border-[length:var(--border-w)] border-[var(--border)] text-[var(--text)] font-bold font-mono text-[16px] uppercase tracking-widest transition-all duration-300 shadow-[var(--shadow-sm)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[10px_10px_0px_var(--accent2)] hover:bg-[var(--accent2)] hover:text-[#1a1a1a]"
              >
                <span>View Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
              </a>
            </div>
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
            transition={{ duration: 0.5, delay: 0.4 }}
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
          style={{ marginTop: "32px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="stat-cell">
            <div className="stat-n">8.6</div>
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